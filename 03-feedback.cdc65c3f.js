!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var i,r,a,u,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,s=t,u=e.apply(o,n)}function h(e){return s=e,l=setTimeout(w,t),c?b(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function w(){var e=p();if(O(e))return S(e);l=setTimeout(w,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function S(e){return l=void 0,d&&i?b(e):(i=r=void 0,u)}function T(){var e=p(),n=O(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return h(f);if(m)return l=setTimeout(w,t),b(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=r=l=void 0},T.flush=function(){return void 0===l?u:S(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),O=localStorage.getItem("feedback-form-state"),w={};if(null!==O){try{w=JSON.parse(O)}catch(e){console.log(e.message)}h.elements.email.value=w.email,h.elements.message.value=w.message}else h.elements.email.value="",h.elements.message.value="";h.addEventListener("input",e(t)((function(e){var t={email:h.elements.email.value,message:h.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),h.addEventListener("submit",(function(e){e.preventDefault();var t={email:h.elements.email.value,message:h.elements.message.value};localStorage.clear(),h.reset(),console.log(t)}))}();
//# sourceMappingURL=03-feedback.cdc65c3f.js.map
