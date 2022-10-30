'use strict';
const fs = require('fs');
const fileName = './test.txt';

//ファイルに処理追加するPromise指定
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

// thenで次々と処理を渡す形式ではループ処理は不可なので少しでも同期がずれると変な出力となる
for (let count = 0; count < 500; count++) {
  appendFilePromise(fileName, 'あ')
    .then(() => {
      return appendFilePromise(fileName, 'い');
    })
    .then(() => {
      return appendFilePromise(fileName, 'う');
    })
    .then(() => {
      return appendFilePromise(fileName, 'え');
    })
    .then(() => {
      return appendFilePromise(fileName, 'お');
    })
    .then(() => {
      return appendFilePromise(fileName, '\n');
    });
}