const assert = require('assert');
const ipcMessenger = require('../index.js');

ipcMessenger.send('test_message')
  .then(ack => {
    assert(ack);
  });

