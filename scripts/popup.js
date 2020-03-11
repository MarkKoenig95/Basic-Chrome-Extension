
let changeColor = document.getElementById('changeColor');
let text = document.getElementById('text');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
  });

  chrome.storage.sync.get('textColor', function(data) {
    text.style.color = data.textColor;
  });

  changeColor.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_popup_button"});
    });
  }
