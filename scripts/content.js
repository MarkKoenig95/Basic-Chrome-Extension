//There's a bug in here where it runs thousands of times over. I don't know how to make that less inefficient at the moment

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_popup_button" ) {
      var textColor;
      var backColor;
      var all = document.getElementsByTagName("*");
      var max = all.length;

      chrome.storage.sync.get('color', function(data) {
        backColor = data.color;
            chrome.storage.sync.get('textColor', function(data) {
              textColor = data.textColor;
              for (var i = 0 ; i < max ; i++) {
                all[i].style.color = textColor;
                all[i].style.backgroundColor = backColor;
              }
            });
      });
    }
  }
);
