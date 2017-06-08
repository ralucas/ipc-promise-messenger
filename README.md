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
ipcMessenger.acknowledge(childProcess)
  .then(function(msg) {
    // msg => 'Beep'
    return doSomethingWithMessage(msg);  
  });
}
...
// Child Process
const msg = 'Beep';
ipcMessenger.send(msg)
  .then(receivedMsg => {
    // receivedMsg => '4e5e247c20ab935eb6dcda8a4176176e', which == md5('Beep')
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
