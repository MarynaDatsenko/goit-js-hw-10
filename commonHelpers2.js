import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");t.addEventListener("submit",o=>{o.preventDefault();const i=t.elements.delay.value,r=t.elements.state.value,m=n(i,r);function n(e,p){return new Promise((c,a)=>{setTimeout(()=>{p.toUpperCase()==="FULFILLED"?c(e):a(e)},e)})}m.then(e=>{s.success({position:"topRight",message:`Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({position:"topRight",message:`Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
