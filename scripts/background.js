
chrome.runtime.onInstalled.addListener(function() {
    alert("You can go to the options menu of this extension to choose different themes")
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
    chrome.storage.sync.set({textColor: '#595959'}, function() {
        console.log("The text is gray.");
    });
});
