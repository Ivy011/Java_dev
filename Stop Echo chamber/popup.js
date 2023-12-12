let search = document.getElementById('search');
let confirm = document.getElementById('confirm');
let count = document.getElementById('count');
let history = document.getElementById('history');

let searchCount;

// let searchCount = {
//   aa: 1,
//   bbbb: 10
// }

function updateHistory() {
  history.innerHTML = '';
  // Object.keys的结果类似数组['aa', 'bbbb']
  // map的结果是数组的变形[{name: 'aa', value: 1}, {name: 'bbbb', value: 10}]
  // sort的结果数组的排序[{name: 'bbbb', value: 10}, {name: 'aa', value: 1}]
  Object.keys(searchCount).map(function (key) {
    return {
      name: key,
      value: searchCount[key]
    };
  })
    .sort(function (a, b) {
      return b.value - a.value;
    })
    .forEach(function (item) {
      history.innerHTML += `
      <div>${item.name}: ${item.value}</div>
    `;
    });
}

confirm.addEventListener("click", function () {
  if (search.value !== '') {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      let activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { "value": search.value });
    });
  }
});

chrome.storage.local.get(["searchCount"]).then((result) => {
  searchCount = result.searchCount || {};
  updateHistory();
});


chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.from === 'content') {
    if (!searchCount[msg.key]) {
      searchCount[msg.key] = 0;
    }
    searchCount[msg.key]++;
    updateHistory();

    chrome.storage.local.set({ searchCount: searchCount }).then(() => {
      console.log("Value is set");
    });

    search.value = '';
    count.innerText = `Count: ${msg.value}`;
  }
});
