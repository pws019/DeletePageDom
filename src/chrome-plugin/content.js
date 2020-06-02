var CMDS = {
  'deleteDom': (selectors) => {
    let errs = [];
    selectors.forEach(selector => {
      if(!selector) {
        return;
      }
      try{
        document.querySelector(selector).forEach((ele) => {
          ele.parentNode.removeChild(ele); // 删除自己
        })
      } catch(err) {
        errs.push(err);
      }
    });
    return {err: errs, data:null};
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (!request.type) {
      sendResponse({msg: "命令类型有误"});
      return;
    }
    const { err, data } = CMDS[request.type](request.data);
    sendResponse({
      err,
      data,
    })
});