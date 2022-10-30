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
// async functionで非同期処理を定義 awaitで処理が順々につながるようになる
async function main() {
  for (let count = 0; count < 500; count++) {
    await appendFilePromise(fileName, 'あ');
    await appendFilePromise(fileName, 'い');
    await appendFilePromise(fileName, 'う');
    await appendFilePromise(fileName, 'え');
    await appendFilePromise(fileName, 'お');
    await appendFilePromise(fileName, '\n');
  }
}

main()