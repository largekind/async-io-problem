'use strict';

//Promise処理 処理が終了した時にthenの処理を呼び出す非同期のオブジェクト
new Promise((resolve) => {
  const nowDate = new Date();
  resolve(nowDate);
}).then((v1) => {
  // v1 は 現在の時刻情報
  new Promise((resolve) => {
    const monthAndDate = {
      month: v1.getMonth(),
      date: v1.getDate()
    }
    resolve(monthAndDate); //resolveに情報渡して、次の処理を実行させる
  }).then((v2) => { //v2で月日を受け取る Promiseチェインと呼ぶ
    // v2 は 日付の情報
    new Promise((resolve) => {
      const text = `今日は${v2.month+1}月${v2.date}日です。`;
      resolve(text);//resolveで情報渡し
    }).then((v3) => {
      // v3 は 日付を示す文章
      console.log(v3); // 今日の日付に関する文章が出力される
    });
  });
});