const sendMsg = (msg, callback) => {
  chrome.tabs.query(
    {active: true, currentWindow: true},
    function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        msg,
        function(response) {
          callback && callback(response);
        });
   });
  
}

export default {
  sendMessage: sendMsg,
}