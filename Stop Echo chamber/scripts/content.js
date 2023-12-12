const time = document.createElement('div');

time.style.position = 'fixed';
time.style.bottom = '20px';
time.style.right = '20px';
time.style.zIndex = '100';

let startTime = Date.now();
let currentTime = 0;

// 根据当前秒数返回时间 05:12
function timeFormat(seconds) {
  const minutes = Math.floor(seconds / 1000 / 60);
  const mi = Math.floor((seconds / 1000)) % 60;
  let minutesStr = minutes;
  if (minutes < 10) {
    minutesStr = '0' + minutes;
  }
  let secondStr = mi;
  if (mi < 10) {
    secondStr = '0' + mi;
  }
  return `${minutesStr}:${secondStr}`;
}

let status = 0;

setInterval(() => {
  currentTime = Date.now() - startTime;
  time.innerText = timeFormat(currentTime);
  if (currentTime > 20 * 1000 && status === 1) {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'black';
    body.innerHTML = '';
    status = 2;
    setTimeout(function () {
      alert("Echo chambers pose a significant danger by stifling original thoughts, dissenting opinions, and challenging ideas, hindering growth and healthy debate. In the age of easily accessible online information, it's simple to find studies supporting one's views. Actively seeking dissenting perspectives is crucial for encountering diverse ideas.");
    }, 200);
  } else if (currentTime > 10 * 1000 && status === 0) {
    let els = document.querySelectorAll('body *');
    els.forEach((el) => {
      let style = window.getComputedStyle(el, null).getPropertyValue('font-size'); // 得到当前tag的字体大小 18px, https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html
      let fontSize = parseFloat(style);
      el.style.fontSize = `${fontSize + 3}px`;
    });
    status = 1;
  }
}, 1000);

document.documentElement.appendChild(time);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.value) {
      let regexp = new RegExp(request.value, 'g');
      let count = (document.body.innerText.match(regexp) || []).length;

      chrome.runtime.sendMessage({
        from: 'content',
        value: count,
        key: request.value,
      });
    }
  }
);


