const CMDS = {
  'deleteDom': (selectors) => {
    let errs = [];
    selectors.forEach(selector => {
      if(!selector) {
        return;
      }
      try{
        document.querySelectorAll(selector).forEach((ele) => {
          ele.parentNode.removeChild(ele); // 删除自己
        })
      } catch(err) {
        errs.push(err.message);
      }
    });
    return {err: errs, data:null};
  },
  'getDeleteSelectorsFromLocalStorage': () => {
    const selectors = (localStorage.getItem("clearPageSelectors")||'').split('+++');
    return {err: null, data:selectors};

  },
  'setDeleteSelectorsFromLocalStorage': (selectors) => {
    if(selectors && selectors.length > 0) {
      localStorage.setItem("clearPageSelectors", selectors.join('+++'));
    } else {
      localStorage.setItem("clearPageSelectors", '');
    }
    return {err: null, data: null};
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


window.onload = function(){
  const {data: selectors} = CMDS.getDeleteSelectorsFromLocalStorage();
  CMDS.deleteDom(selectors);
}