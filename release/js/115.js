!function(){"use strict";(new class{constructor(){this.context=document.querySelector('iframe[rel="wangpan"]').contentDocument}showToast({message:e,type:t}){window.Core.MinMessage.Show({text:e,type:t,timeout:1e3})}startListen(){window.addEventListener("message",(e=>{e.data.type&&"getSelected"===e.data.type&&window.postMessage({type:"selected",data:this.getSelected()},location.origin),e.data.type&&"getHovered"===e.data.type&&window.postMessage({type:"hovered",data:this.getHovered()},location.origin),e.data.type&&"showToast"===e.data.type&&this.showToast(e.data.data),e.data.type&&"refresh"===e.data.type&&this.refresh()}))}refresh(){this.context=document.querySelector('iframe[rel="wangpan"]').contentDocument}getFileInfoFromElements(e){const t=[];return Array.from(e).forEach((e=>{const o=e.getAttribute("file_type");"1"===o&&t.push({isdir:!1,sha1:e.getAttribute("sha1"),pick_code:e.getAttribute("pick_code"),path:""}),"0"===o&&t.push({isdir:!0,cate_id:e.getAttribute("cate_id"),path:""})})),t}getSelected(){const e=this.context.querySelectorAll('li[rel="item"].selected');return this.getFileInfoFromElements(e)}getHovered(){const e=this.context.querySelectorAll('li[rel="item"].hover');return this.getFileInfoFromElements(e)}}).startListen()}();