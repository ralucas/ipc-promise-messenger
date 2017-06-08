'use strict';

var crypto = require('crypto');

module.exports = {

  send: function send(msg) {
    return new Promise(function (resolve, reject) {
      try {
        var hash = crypto.createHash('md5').update(JSON.stringify(msg)).digest('hex');
        process.send(msg);
        process.on('message', function (recvd) {
          if (hash == recvd) {
            return resolve(recvd);
          }
        });
        process.on('error', function (e) {
          return reject(new Error('Messenger process error', e));
        });
      } catch (e) {
        return reject(new Error('Messenger error sending message to process ' + msg));
      }
    });
  },

  acknowledge: function acknowledge(child_proc) {
    return new Promise(function (resolve) {
      child_proc.on('message', function onMessage(msg) {
        var hash = crypto.createHash('md5').update(JSON.stringify(msg)).digest('hex');
        child_proc.send(hash, function () {
          return resolve(msg);
        });
      });
    });
  }

};
