(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[996],{5709:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var o=n(r(4938)),a=r(5893),u=(0,o.default)((0,a.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");t.Z=u},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(f){l=!0,o=f}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1003),f=r(880),c=r(9246);function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=u.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,p=e.href,y=e.as,v=e.children,h=e.prefetch,b=e.passHref,m=e.replace,g=e.shallow,j=e.scroll,w=e.locale,E=e.onClick,O=e.onMouseEnter,M=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,a&&"string"===typeof r&&(r=u.default.createElement("a",null,r));var C,k=!1!==h,I=f.useRouter(),S=u.default.useMemo((function(){var e=o(l.resolveHref(I,p,!0),2),t=e[0],r=e[1];return{href:t,as:y?l.resolveHref(I,y):r||t}}),[I,p,y]),A=S.href,L=S.as,x=u.default.useRef(A),R=u.default.useRef(L);a&&(C=u.default.Children.only(r));var _=a?C&&"object"===typeof C&&C.ref:t,U=o(c.useIntersection({rootMargin:"200px"}),3),H=U[0],P=U[1],z=U[2],D=u.default.useCallback((function(e){R.current===L&&x.current===A||(z(),R.current=L,x.current=A),H(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[L,_,A,z,H]);u.default.useEffect((function(){var e=P&&k&&l.isLocalURL(A),t="undefined"!==typeof w?w:I&&I.locale,r=s[A+"%"+L+(t?"%"+t:"")];e&&!r&&d(I,A,L,{locale:t})}),[L,A,P,w,k,I]);var K={ref:D,onClick:function(e){a||"function"!==typeof E||E(e),a&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,f){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:f,scroll:u}))}(e,I,A,L,m,g,j,w)},onMouseEnter:function(e){a||"function"!==typeof O||O(e),a&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),l.isLocalURL(A)&&d(I,A,L,{priority:!0})}};if(!a||b||"a"===C.type&&!("href"in C.props)){var N="undefined"!==typeof w?w:I&&I.locale,T=I&&I.isLocaleDomain&&l.getDomainLocale(L,N,I&&I.locales,I&&I.domainLocales);K.href=T||l.addBasePath(l.addLocale(L,N,I&&I.defaultLocale))}return a?u.default.cloneElement(C,K):u.default.createElement("a",Object.assign({},M,K),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(f){l=!0,o=f}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,i=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],h=y[1],b=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=f.get(n):(t=f.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return f.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),f.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),m=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[b,d,m]};var a=r(7294),u=r(4686),l="undefined"!==typeof IntersectionObserver;var f=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}}]);