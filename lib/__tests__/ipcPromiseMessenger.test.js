const assert = require('assert');
const ipcMessenger = require('../index.js');

const path = require('path');
const child_process = require('child_process');

describe('ipcPromiseMessenger', function () {
  let test_child = child_process.fork(path.resolve(__dirname, 'test_child.js'));

  it('should receive a message', function (done) {
    ipcMessenger.acknowledge(test_child)
      .then(msg => {
        assert.equal(msg, 'test_message');
        done();
      });
  });
});

