'use strict';

var crypto = require('crypto');

module.exports = {

  send: function send(msg) {
    return new Promise(function(resolve, reject) {
      try {
        var hash = crypto.createHash('md5').update(JSON.stringify(msg)).digest('hex');
        process.send(msg);
        process.on('message', function(recvd) {
          if ( hash == recvd ) {
            return resolve(recvd);
          }
        });
        process.on('error', function(e) {
          return reject('Messenger process error', e);
        });
      } catch(e) {
        return reject('Messenger error sending message to process', msg);
      }
    }); 
  },

  acknowledge: function acknowledge(proc, msg) {
    return new Promise(function(resolve, reject) {
      var hash = crypto.createHash('md5').update(JSON.stringify(msg)).digest('hex');
      proc.send(hash, function() {
        return resolve(msg);
      });
    }); 
  }

};
