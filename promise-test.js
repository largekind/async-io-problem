'use strict';

//Promise処理 処理が終了した時にthenの処理を呼び出す非同期のオブジェクト
const waitPromise = new Promise((resolve, reject) => { //resolveは成功/rejectは失敗時処理を実行
  setTimeout(() => resolve(), 1000);
});

waitPromise.then(() => console.log('hoge'));
console.log('fuga');