this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-best-sellers"]=function(e){function t(t){for(var r,l,a=t[0],i=t[1],s=t[2],d=0,b=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);b.length;)b.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var r={},n={24:0},o=[];function l(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=r,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(c,r,function(t){return e[t]}.bind(null,r));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([520,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.htmlEntities},102:function(e,t,c){"use strict";c.d(t,"a",(function(){return f}));var r=c(0),n=c(1),o=c(2),l=c(70),a=c(614),i=c(4),s=c.n(i),u=c(11),d=c(16),b=c(35),m=c(613),g=c(10);c(55);const p=({id:e,label:t,popoverContents:c,remove:a,screenReaderLabel:i,className:d=""})=>{const[b,h]=Object(r.useState)(!1),E=Object(u.useInstanceId)(p);if(i=i||t,!t)return null;t=Object(g.decodeEntities)(t);const O=s()("woocommerce-tag",d,{"has-remove":!!a}),j=`woocommerce-tag__label-${E}`,w=Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},i),Object(r.createElement)("span",{"aria-hidden":"true"},t));return Object(r.createElement)("span",{className:O},c?Object(r.createElement)(o.Button,{className:"woocommerce-tag__text",id:j,onClick:()=>h(!0)},w):Object(r.createElement)("span",{className:"woocommerce-tag__text",id:j},w),c&&b&&Object(r.createElement)(o.Popover,{onClose:()=>h(!1)},c),a&&Object(r.createElement)(o.Button,{className:"woocommerce-tag__remove",onClick:a(e),label:Object(n.sprintf)(
// Translators: %s label.
Object(n.__)("Remove %s","woocommerce"),t),"aria-describedby":j},Object(r.createElement)(l.a,{icon:m.a,size:20,className:"clear-icon"})))};var h=p;c(54);const E=e=>Object(r.createElement)(b.b,{...e}),O=e=>{const{list:t,selected:c,renderItem:n,depth:o=0,onSelect:l,instanceId:a,isSingle:i,search:s,useExpandedPanelId:u}=e,[d]=u;return t?Object(r.createElement)(r.Fragment,null,t.map((t=>{var b,m;const g=null!==(b=t.children)&&void 0!==b&&b.length&&!i?t.children.every((({id:e})=>c.find((t=>t.id===e)))):!!c.find((({id:e})=>e===t.id)),p=(null===(m=t.children)||void 0===m?void 0:m.length)&&d===t.id;return Object(r.createElement)(r.Fragment,{key:t.id},Object(r.createElement)("li",null,n({item:t,isSelected:g,onSelect:l,isSingle:i,selected:c,search:s,depth:o,useExpandedPanelId:u,controlId:a})),p?Object(r.createElement)(O,{...e,list:t.children,depth:o+1}):null)}))):null},j=({isLoading:e,isSingle:t,selected:c,messages:l,onChange:a,onRemove:i})=>{if(e||t||!c)return null;const s=c.length;return Object(r.createElement)("div",{className:"woocommerce-search-list__selected"},Object(r.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(r.createElement)("strong",null,l.selected(s)),s>0?Object(r.createElement)(o.Button,{isLink:!0,isDestructive:!0,onClick:()=>a([]),"aria-label":l.clear},Object(n.__)("Clear all","woocommerce")):null),s>0?Object(r.createElement)("ul",null,c.map(((e,t)=>Object(r.createElement)("li",{key:t},Object(r.createElement)(h,{label:e.name,id:e.id,remove:i}))))):null)},w=({filteredList:e,search:t,onSelect:c,instanceId:o,useExpandedPanelId:i,...s})=>{const{messages:u,renderItem:d,selected:b,isSingle:m}=s,g=d||E;return 0===e.length?Object(r.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(r.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(r.createElement)(l.a,{icon:a.a})),Object(r.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?Object(n.sprintf)(u.noResults,t):u.noItems)):Object(r.createElement)("ul",{className:"woocommerce-search-list__list"},Object(r.createElement)(O,{useExpandedPanelId:i,list:e,selected:b,renderItem:g,onSelect:c,instanceId:o,isSingle:m,search:t}))},f=e=>{const{className:t="",isCompact:c,isHierarchical:l,isLoading:a,isSingle:i,list:b,messages:m=d.a,onChange:g,onSearch:p,selected:h,type:E="text",debouncedSpeak:O}=e,[y,x]=Object(r.useState)(""),_=Object(r.useState)(-1),k=Object(u.useInstanceId)(f),v=Object(r.useMemo)((()=>({...d.a,...m})),[m]),S=Object(r.useMemo)((()=>Object(d.c)(b,y,l)),[b,y,l]);Object(r.useEffect)((()=>{O&&O(v.updated)}),[O,v]),Object(r.useEffect)((()=>{"function"==typeof p&&p(y)}),[y,p]);const C=Object(r.useCallback)((e=>()=>{i&&g([]);const t=h.findIndex((({id:t})=>t===e));g([...h.slice(0,t),...h.slice(t+1)])}),[i,h,g]),P=Object(r.useCallback)((e=>()=>{Array.isArray(e)?g(e):-1===h.findIndex((({id:t})=>t===e.id))?g(i?[e]:[...h,e]):C(e.id)()}),[i,C,g,h]),N=Object(r.useCallback)((e=>{const[t]=h.filter((t=>!e.find((e=>t.id===e.id))));C(t.id)()}),[C,h]);return Object(r.createElement)("div",{className:s()("woocommerce-search-list",t,{"is-compact":c,"is-loading":a,"is-token":"token"===E})},"text"===E&&Object(r.createElement)(j,{...e,onRemove:C,messages:v}),Object(r.createElement)("div",{className:"woocommerce-search-list__search"},"text"===E?Object(r.createElement)(o.TextControl,{label:v.search,type:"search",value:y,onChange:e=>x(e)}):Object(r.createElement)(o.FormTokenField,{disabled:a,label:v.search,onChange:N,onInputChange:e=>x(e),suggestions:[],__experimentalValidateInput:()=>!1,value:a?[Object(n.__)("Loading…","woocommerce")]:h.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),a?Object(r.createElement)("div",{className:"woocommerce-search-list__list"},Object(r.createElement)(o.Spinner,null)):Object(r.createElement)(w,{...e,search:y,filteredList:S,messages:v,onSelect:P,instanceId:k,useExpandedPanelId:_}))};Object(o.withSpokenMessages)(f)},106:function(e,t){},11:function(e,t){e.exports=window.wp.compose},14:function(e,t){e.exports=window.wp.apiFetch},15:function(e,t){e.exports=window.wp.url},16:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(1),o=c(57);const l={clear:Object(n.__)("Clear all selected items","woocommerce"),noItems:Object(n.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woocommerce"),search:Object(n.__)("Search for items","woocommerce"),selected:e=>Object(n.sprintf)(/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:Object(n.__)("Search results updated.","woocommerce")},a=(e,t=e)=>{const c=e.reduce(((e,t)=>{const c=t.parent||0;return e[c]||(e[c]=[]),e[c].push(t),e}),{}),r=Object(o.a)(t,"id"),n=["0"],l=(e={})=>e.parent?[...l(r[e.parent]),e.name]:e.name?[e.name]:[],a=e=>e.map((e=>{const t=c[e.id];return n.push(""+e.id),{...e,breadcrumbs:l(r[e.parent]),children:t&&t.length?a(t):[]}})),i=a(c[0]||[]);return Object.entries(c).forEach((([e,t])=>{n.includes(e)||i.push(...a(t||[]))})),i},i=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!r.test(e.name)&&e)).filter(Boolean);return c?a(n,e):n},s=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map(((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e)))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},167:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},17:function(e,t,c){"use strict";c.d(t,"p",(function(){return o})),c.d(t,"n",(function(){return l})),c.d(t,"m",(function(){return a})),c.d(t,"o",(function(){return i})),c.d(t,"k",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"h",(function(){return d})),c.d(t,"l",(function(){return b})),c.d(t,"c",(function(){return m})),c.d(t,"d",(function(){return g})),c.d(t,"g",(function(){return p})),c.d(t,"a",(function(){return O})),c.d(t,"b",(function(){return j})),c.d(t,"i",(function(){return w})),c.d(t,"j",(function(){return f})),c.d(t,"f",(function(){return y}));var r,n=c(3);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",i=o.buildPhase,s=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,d=(n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink),b=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),m=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),g=n.STORE_PAGES.cart.permalink,p=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("localPickupEnabled",!1)),h=Object(n.getSetting)("countries",{}),E=Object(n.getSetting)("countryData",{}),O=Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowBilling)).map((e=>[e,h[e]||""]))),j=Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowBilling)).map((e=>[e,E[e].states||[]]))),w=Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowShipping)).map((e=>[e,h[e]||""]))),f=Object.fromEntries(Object.keys(E).filter((e=>!0===E[e].allowShipping)).map((e=>[e,E[e].states||[]]))),y=Object.fromEntries(Object.keys(E).map((e=>[e,E[e].locale||[]])))},2:function(e,t){e.exports=window.wp.components},23:function(e,t,c){"use strict";c.d(t,"h",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return d})),c.d(t,"i",(function(){return b})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return p})),c.d(t,"g",(function(){return h})),c.d(t,"a",(function(){return E}));var r=c(15),n=c(14),o=c.n(n),l=c(3),a=c(17);const i=(e,t)=>{const c=new Map;return e.filter((e=>{const r=t(e);return!c.has(r)&&(c.set(r,e),!0)}))},s=({selected:e=[],search:t="",queryArgs:c={}})=>{const n=(({selected:e=[],search:t="",queryArgs:c={}})=>{const n=a.p.productCount>100,o={per_page:n?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},l=[Object(r.addQueryArgs)("/wc/store/v1/products",{...o,...c})];return n&&e.length&&l.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),l})({selected:e,search:t,queryArgs:c});return Promise.all(n.map((e=>o()({path:e})))).then((e=>{const t=e.flat();return i(t,(e=>e.id)).map((e=>({...e,parent:0})))})).catch((e=>{throw e}))},u=e=>o()({path:`/wc/store/v1/products/${e}`}),d=()=>o()({path:"wc/store/v1/products/attributes"}),b=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=({selected:e=[],search:t})=>{const c=(({selected:e=[],search:t})=>{const c=Object(l.getSetting)("limitTags",!1),n=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:t})];return c&&e.length&&n.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:e})),n})({selected:e,search:t});return Promise.all(c.map((e=>o()({path:e})))).then((e=>{const t=e.flat();return i(t,(e=>e.id))}))},g=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),p=e=>o()({path:`wc/store/v1/products/categories/${e}`}),h=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),E=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter((t=>t.title.raw===e.title.raw)).length;return e.title.raw+(c?"":` - ${e.slug}`)}},28:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}}},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t){e.exports=window.wp.escapeHtml},338:function(e){e.exports=JSON.parse('{"name":"woocommerce/product-best-sellers","title":"Best Selling Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of your all-time best selling products.","supports":{"align":["wide","full"],"html":false},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"categories":{"type":"array","default":[]},"catOperator":{"type":"string","default":"any"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"},"editMode":{"type":"boolean","default":true},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"popularity"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},34:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(31);t.a=({error:e})=>Object(r.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woocommerce"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(e))):"api"===t?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woocommerce"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(e))):e:Object(n.__)("An error has prevented the block from being updated.","woocommerce"))(e))},35:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var r=c(0),n=c(4),o=c.n(n),l=c(2);function a(e,t,c){const r=new Set(t.map((e=>e[c])));return e.filter((e=>!r.has(e[c])))}var i=c(10),s=c(16);const u=({label:e})=>Object(r.createElement)("span",{className:"woocommerce-search-list__item-count"},e),d=e=>{const{item:t,search:c}=e,n=t.breadcrumbs&&t.breadcrumbs.length;return Object(r.createElement)("span",{className:"woocommerce-search-list__item-label"},n?Object(r.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(s.b)(t.breadcrumbs)):null,Object(r.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(s.d)(Object(i.decodeEntities)(t.name),c)))},b=({countLabel:e,className:t,depth:c=0,controlId:n="",item:b,isSelected:m,isSingle:g,onSelect:p,search:h="",selected:E,useExpandedPanelId:O,...j})=>{var w,f;const[y,x]=O,_=null!=e&&void 0!==b.count&&null!==b.count,k=!(null===(w=b.breadcrumbs)||void 0===w||!w.length),v=!(null===(f=b.children)||void 0===f||!f.length),S=y===b.id,C=o()(["woocommerce-search-list__item",`depth-${c}`,t],{"has-breadcrumbs":k,"has-children":v,"has-count":_,"is-expanded":S,"is-radio-button":g}),P=j.name||`search-list-item-${n}`,N=`${P}-${b.id}`,A=Object(r.useCallback)((()=>{x(S?-1:Number(b.id))}),[S,b.id,x]);return v?Object(r.createElement)("div",{className:C,onClick:A,onKeyDown:e=>"Enter"===e.key||" "===e.key?A():null,role:"treeitem",tabIndex:0},g?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("input",{type:"radio",id:N,name:P,value:b.value,onChange:p(b),onClick:e=>e.stopPropagation(),checked:m,className:"woocommerce-search-list__item-input",...j}),Object(r.createElement)(d,{item:b,search:h}),_?Object(r.createElement)(u,{label:e||b.count}):null):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:m,...!m&&b.children.some((e=>E.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:Object(s.d)(Object(i.decodeEntities)(b.name),h),onChange:()=>{m?p(a(E,b.children,"id"))():p(function(e,t,c){const r=a(t,e,"id");return[...e,...r]}(E,b.children))()},onClick:e=>e.stopPropagation()}),_?Object(r.createElement)(u,{label:e||b.count}):null)):Object(r.createElement)("label",{htmlFor:N,className:C},g?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("input",{type:"radio",id:N,name:P,value:b.value,onChange:p(b),checked:m,className:"woocommerce-search-list__item-input",...j}),Object(r.createElement)(d,{item:b,search:h})):Object(r.createElement)(l.CheckboxControl,{id:N,name:P,className:"woocommerce-search-list__item-input",value:Object(i.decodeEntities)(b.value),label:Object(s.d)(Object(i.decodeEntities)(b.name),h),onChange:p(b),checked:m,...j}),_?Object(r.createElement)(u,{label:e||b.count}):null)};t.b=b},5:function(e,t){e.exports=window.wp.blockEditor},520:function(e,t,c){e.exports=c(581)},54:function(e,t){},55:function(e,t){},57:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=(e,t)=>e.reduce(((e,c)=>(e[String(t?c[t]:c)]=c,e)),{})},581:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(70),o=c(646),l=c(7),a=c(338),i=c(5),s=c(2),u=c(64),d=c.n(u),b=c(167),m=c(1),g=c(74),p=c(3),h=c(75),E=c(65);const O=e=>{const{attributes:t,setAttributes:c}=e,{categories:n,catOperator:o,columns:l,contentVisibility:a,rows:u,alignButtons:d}=t;return Object(r.createElement)(i.InspectorControls,{key:"inspector"},Object(r.createElement)(s.PanelBody,{title:Object(m.__)("Layout","woocommerce"),initialOpen:!0},Object(r.createElement)(g.a,{columns:l,rows:u,alignButtons:d,setAttributes:c,minColumns:Object(p.getSetting)("minColumns",1),maxColumns:Object(p.getSetting)("maxColumns",6),minRows:Object(p.getSetting)("minRows",1),maxRows:Object(p.getSetting)("maxRows",6)})),Object(r.createElement)(s.PanelBody,{title:Object(m.__)("Content","woocommerce"),initialOpen:!0},Object(r.createElement)(h.a,{settings:a,onChange:e=>c({contentVisibility:e})})),Object(r.createElement)(s.PanelBody,{title:Object(m.__)("Filter by Product Category","woocommerce"),initialOpen:!1},Object(r.createElement)(E.a,{selected:n,onChange:(e=[])=>{const t=e.map((({id:e})=>e));c({categories:t})},operator:o,onOperatorChange:(e="any")=>c({catOperator:e})})))},j=e=>{const{attributes:t,name:c}=e;return t.isPreview?b.a:Object(r.createElement)("div",{className:"wc-block-product-best-sellers"},Object(r.createElement)(O,{...e}),Object(r.createElement)(s.Disabled,null,Object(r.createElement)(d.a,{block:c,attributes:t})))};var w=c(90);Object(l.registerBlockType)(a,{icon:{src:Object(r.createElement)(n.a,{icon:o.a,className:"wc-block-editor-components-block-icon"})},attributes:{...w.a,...a.attributes},transforms:{from:[{type:"block",blocks:w.b.filter((e=>"woocommerce/product-best-sellers"!==e)),transform:e=>Object(l.createBlock)("woocommerce/product-best-sellers",e)}]},edit:e=>{const t=Object(i.useBlockProps)();return Object(r.createElement)("div",{...t},Object(r.createElement)(j,{...e}))},save:()=>null})},64:function(e,t){e.exports=window.wp.serverSideRender},65:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(35),l=c(102),a=c(2),i=c(11),s=c(23),u=c(28);const d=Object(i.createHigherOrderComponent)((e=>class extends r.Component{constructor(){super(...arguments),this.state={error:null,loading:!1,categories:[]},this.loadCategories=this.loadCategories.bind(this)}componentDidMount(){this.loadCategories()}loadCategories(){this.setState({loading:!0}),Object(s.c)().then((e=>{this.setState({categories:e,loading:!1,error:null})})).catch((async e=>{const t=await Object(u.a)(e);this.setState({categories:[],loading:!1,error:t})}))}render(){const{error:t,loading:c,categories:n}=this.state;return Object(r.createElement)(e,{...this.props,error:t,isLoading:c,categories:n})}}),"withCategories");var b=d,m=c(34),g=c(4),p=c.n(g);c(106);const h=({categories:e,error:t,isLoading:c,onChange:i,onOperatorChange:s,operator:u,selected:d,isCompact:b,isSingle:g,showReviewCount:h})=>{const E={clear:Object(n.__)("Clear all product categories","woocommerce"),list:Object(n.__)("Product Categories","woocommerce"),noItems:Object(n.__)("Your store doesn't have any product categories.","woocommerce"),search:Object(n.__)("Search for product categories","woocommerce"),selected:e=>Object(n.sprintf)(/* translators: %d is the count of selected categories. */
Object(n._n)("%d category selected","%d categories selected",e,"woocommerce"),e),updated:Object(n.__)("Category search results updated.","woocommerce")};return t?Object(r.createElement)(m.a,{error:t}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.a,{className:"woocommerce-product-categories",list:e,isLoading:c,selected:d.map((t=>e.find((e=>e.id===t)))).filter(Boolean),onChange:i,renderItem:e=>{const{item:t,search:c,depth:l=0}=e,a=t.breadcrumbs.length?`${t.breadcrumbs.join(", ")}, ${t.name}`:t.name,i=h?Object(n.sprintf)(/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(n._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woocommerce"),a,t.review_count):Object(n.sprintf)(/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(n._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woocommerce"),a,t.count),s=h?Object(n.sprintf)(/* translators: %d is the count of reviews. */
Object(n._n)("%d review","%d reviews",t.review_count,"woocommerce"),t.review_count):Object(n.sprintf)(/* translators: %d is the count of products. */
Object(n._n)("%d product","%d products",t.count,"woocommerce"),t.count);return Object(r.createElement)(o.a,{className:p()("woocommerce-product-categories__item","has-count",{"is-searching":c.length>0,"is-skip-level":0===l&&0!==t.parent}),...e,countLabel:s,"aria-label":i})},messages:E,isCompact:b,isHierarchical:!0,isSingle:g}),!!s&&Object(r.createElement)("div",{hidden:d.length<2},Object(r.createElement)(a.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(n.__)("Display products matching","woocommerce"),help:Object(n.__)("Pick at least two categories to use this setting.","woocommerce"),value:u,onChange:s,options:[{label:Object(n.__)("Any selected categories","woocommerce"),value:"any"},{label:Object(n.__)("All selected categories","woocommerce"),value:"all"}]})))};h.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=b(h)},7:function(e,t){e.exports=window.wp.blocks},74:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);const l=(e,t,c)=>c?Math.min(e,t)===e?t:Math.max(e,c)===e?c:e:Math.max(e,t)===t?e:t;t.a=({columns:e,rows:t,setAttributes:c,alignButtons:a,minColumns:i=1,maxColumns:s=6,minRows:u=1,maxRows:d=6})=>Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Columns","woocommerce"),value:e,onChange:e=>{const t=l(e,i,s);c({columns:Number.isNaN(t)?"":t})},min:i,max:s}),Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Rows","woocommerce"),value:t,onChange:e=>{const t=l(e,u,d);c({rows:Number.isNaN(t)?"":t})},min:u,max:d}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woocommerce"),help:a?Object(n.__)("Align the last block to the bottom.","woocommerce"):Object(n.__)("The last inner block will follow other content.","woocommerce"),checked:a,onChange:()=>c({alignButtons:!a})}))},75:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);t.a=({onChange:e,settings:t})=>{const{image:c,button:l,price:a,rating:i,title:s}=t,u=!1!==c;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woocommerce"),checked:u,onChange:()=>e({...t,image:!u})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woocommerce"),checked:s,onChange:()=>e({...t,title:!s})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woocommerce"),checked:a,onChange:()=>e({...t,price:!a})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woocommerce"),checked:i,onChange:()=>e({...t,rating:!i})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woocommerce"),checked:l,onChange:()=>e({...t,button:!l})}))}},9:function(e,t){e.exports=window.wp.primitives},90:function(e,t,c){"use strict";c.d(t,"b",(function(){return n}));var r=c(3);const n=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(r.getSetting)("defaultColumns",3)},rows:{type:"number",default:Object(r.getSetting)("defaultRows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{image:!0,title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1},stockStatus:{type:"array",default:Object.keys(Object(r.getSetting)("stockStatusOptions",[]))}}}});