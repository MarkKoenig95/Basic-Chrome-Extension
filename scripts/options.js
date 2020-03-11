  let page = document.getElementById('buttonDiv');
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  const kTextColors = ['#595959', '#000000', '#0033ff', '#ffffff'];
  var i = -1;
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      i++;
      button.style.backgroundColor = item;
      button.style.color = kTextColors[i];
      button.innerHTML = "Text <br> Color";
      button.addEventListener('click',   function(){
          chrome.storage.sync.set({color: item}, function() {
            console.log('color is ' + item);
          });

          chrome.storage.sync.set({textColor: button.style.color}, function() {
            console.log('textColor is ' + button.style.color);
          });
        });
      page.appendChild(button);
    }
  }


  constructOptions(kButtonColors);
