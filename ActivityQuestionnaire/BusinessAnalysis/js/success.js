window.onload = () => {
  // const url = new URL(location.href);
  // const serial = url.searchParams.get('serial');
  // if (serial === 'Y') {
  //   document.querySelector('.success_p').innerHTML =
  //     '分析報告已寄至您的Email信箱<br>如未收到報告書，或有任何其它相關問題，<br>歡迎來信smart01@digiwin.com';
  // } else {
  //   document.querySelector('.success_p').innerHTML =
  //     '您的分析結果將由專人直接與您聯繫說明，<br>並且介紹後續服務流程。';
  // }
  const clientHeight = document.documentElement.clientHeight;
  document.querySelector('.Success').style.height = clientHeight + 'px'
};
