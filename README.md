# ipc-promise-messenger [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Pass messages via ipc utilizing promises

## Installation

```sh
$ npm install --save ipc-promise-messenger
```

## Usage

```js
const ipcMessenger = require('ipc-promise-messenger');

// Parent Process
function onMessage(child, msg) {
  ipcMessenger.acknowledge(child, msg)
    .then(function(msg) {
      return doSomethingWithMessage(msg);  
    });
}
child.on('message', onMessage.bind(null, child));
...
// Child Process
const msg = 'Beep';
ipcMessenger.send(msg)
  .then(receivedMsg => {
    return doSomethingNowMessageWasAcked();
  });
```
## License

MIT © [R.A. Lucas]()


[npm-image]: https://badge.fury.io/js/ipc-promise-messenger.svg
[npm-url]: https://npmjs.org/package/ipc-promise-messenger
[travis-image]: https://travis-ci.org/ralucas/ipc-promise-messenger.svg?branch=master
[travis-url]: https://travis-ci.org/ralucas/ipc-promise-messenger
[daviddm-image]: https://david-dm.org/ralucas/ipc-promise-messenger.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ralucas/ipc-promise-messenger
