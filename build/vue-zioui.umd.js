(function(t,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(t=typeof globalThis!="undefined"?globalThis:t||self,n(t["vue-zioui"]={},t.Vue))})(this,function(t,n){"use strict";const a={data:{type:Array,required:!0}};function u(e){const o=c=>c.reduce((s,d)=>d.open?s.concat(d,o(d.children)):s.concat(d),[]);let l=n.ref(o(e));return{openedData:l,toggle:c=>{!c.children||(c.open=!c.open,l.value=o(e))}}}const p=e=>n.createVNode("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3506",width:"16",height:"16"},[n.createVNode("path",{d:"M852.755353 958.941123H179.516986c-61.988359 0-112.272621-50.175892-112.272622-112.164251V173.538505c0-62.024482 50.248139-112.200374 112.272622-112.200374h673.238367c61.916111 0 112.16425 50.175892 112.16425 112.200374v673.238367c0 61.988359-50.248139 112.16425-112.16425 112.164251z m56.064064-785.402618c0-30.958056-25.069884-56.136311-56.02794-56.136311H179.516986c-31.030303 0-56.136311 25.178255-56.136311 56.136311v673.238367c0 30.958056 25.069884 56.136311 56.136311 56.136311h673.238367c30.958056 0 56.027939-25.178255 56.02794-56.136311V173.538505h0.036124z m-224.364625 364.633153H347.817547c-15.460966 0-28.104279-12.534942-28.104279-28.032031 0-15.49709 12.643313-28.032032 28.104279-28.032032h336.637245a28.032032 28.032032 0 0 1 0 56.064063z",fill:"#231815","p-id":"3507"},null)]),h=e=>n.createVNode("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5687",width:"16",height:"16"},[n.createVNode("path",{d:"M848.649122 959.191703H175.387003c-61.990545 0-112.168207-50.177662-112.168207-112.168208V173.761377c0-62.02667 50.177662-112.204332 112.168207-112.204332h673.262119c61.990545 0 112.168207 50.177662 112.168207 112.204332v673.262118c0 61.990545-50.177662 112.168207-112.168207 112.168208zM904.787413 173.761377c0-30.959148-25.179143-56.138291-56.138291-56.138291H175.387003c-30.959148 0-56.138291 25.179143-56.138291 56.138291v673.262118c0 30.959148 25.179143 56.138291 56.138291 56.138291h673.262119c30.959148 0 56.138291-25.179143 56.138291-56.138291V173.761377z m-224.44479 364.646017h-140.309602v140.309603c0 15.497636-12.535384 28.033021-28.033021 28.033021-15.497636 0-28.033021-12.535384-28.033021-28.033021v-140.309603H343.693502a28.033021 28.033021 0 0 1-28.033021-28.03302c0-15.497636 12.535384-28.033021 28.033021-28.033021h140.309602V342.067876c0-15.497636 12.535384-28.033021 28.033021-28.033021 15.497636 0 28.033021 12.535384 28.033021 28.033021v140.273477h140.309602a28.033021 28.033021 0 0 1 28.033021 28.033021c-0.07225 15.497636-12.607634 28.033021-28.069146 28.03302z",fill:"#231815","p-id":"5688"},null)]),f=()=>n.createVNode("span",{style:"display: inline-block;width: 16px"},null),v=(e,o)=>n.createVNode("div",{style:{paddingLeft:`${24*(e.level-1)}px`}},[e.children?e.open?n.createVNode(p,{onClick:()=>o(e)},null):n.createVNode(h,{onClick:()=>o(e)},null):n.createVNode(f,null,null),e.label]);var r=n.defineComponent({name:"ZTree",props:a,emits:[],setup(e){const{openedData:o,toggle:l}=u(e.data),i=c=>c.map(s=>v(s,l));return console.log(o.value),()=>n.createVNode("div",{class:"z-tree"},[i(o.value)])}});r.install=function(e){e.component(r.name,r)};var g={title:"Tree \u6811",category:"\u6570\u636E\u5C55\u793A",status:"20%",install(e){e.use(r)}};const V=[g];var w={version:"0.0.1",install(e){V.forEach(o=>e.use(o))}};t.Tree=r,t.default=w,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
