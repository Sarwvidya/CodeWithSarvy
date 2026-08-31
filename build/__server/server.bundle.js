/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4607
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _generated_client_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5379);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4378);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2831);
/* harmony import */ var _theme_Root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7808);
/* harmony import */ var _theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6578);
/* harmony import */ var _theme_SiteMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7368);
/* harmony import */ var _normalizeLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6956);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6125);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1989);
/* harmony import */ var _PendingNavigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5509);
/* harmony import */ var _BaseUrlIssueBanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5114);
/* harmony import */ var _SiteMetadataDefaults__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9130);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7788);
/* harmony import */ var _hasHydratedDataAttribute__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3249);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO, quick fix for CSS insertion order
// eslint-disable-next-line import/order
const routesElement=(0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_4__/* .renderRoutes */ .v)(_generated_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);function AppNavigation(){const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .zy)();const normalizedLocation=(0,_normalizeLocation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(location);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_PendingNavigation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{location:normalizedLocation,children:routesElement});}function App(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_10__/* .DocusaurusContextProvider */ .l,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_browserContext__WEBPACK_IMPORTED_MODULE_9__/* .BrowserContextProvider */ .x,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_theme_Root__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_theme_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_SiteMetadataDefaults__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_theme_SiteMetadata__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_BaseUrlIssueBanner__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(AppNavigation,{})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_hasHydratedDataAttribute__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{})]})})});}

/***/ },

/***/ 5114
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MaybeBaseUrlIssueBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8193);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4586);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9832);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Double-security: critical CSS will hide the banner if CSS can load!
// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
const BannerContainerId='__docusaurus-base-url-issue-banner-container';const BannerId='__docusaurus-base-url-issue-banner';const SuggestionContainerId='__docusaurus-base-url-issue-banner-suggestion-container';// It is important to not use React to render this banner
// otherwise Google would index it, even if it's hidden with some critical CSS!
// See https://github.com/facebook/docusaurus/issues/4028
// - We can't SSR (or it would be indexed)
// - We can't CSR (as it means the baseurl is correct)
function createInlineHtmlBanner(baseUrl){return`
<div id="${BannerId}" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">
   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>
   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseUrl" style="font-weight: bold;">baseUrl configuration</a>.</p>
   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${baseUrl}</span> ${baseUrl==='/'?' (default value)':''}</p>
   <p>We suggest trying baseUrl = <span id="${SuggestionContainerId}" style="font-weight: bold; color: green;"></span></p>
</div>
`;}// Needs to work for older browsers!
function createInlineScript(baseUrl){/* language=js */return`
document.addEventListener('DOMContentLoaded', function maybeInsertBanner() {
  var shouldInsert = typeof window['docusaurus'] === 'undefined';
  shouldInsert && insertBanner();
});

function insertBanner() {
  var bannerContainer = document.createElement('div');
  bannerContainer.id = '${BannerContainerId}';
  var bannerHtml = ${JSON.stringify(createInlineHtmlBanner(baseUrl))// See https://redux.js.org/recipes/server-rendering/#security-considerations
.replace(/</g,'\\\u003c')};
  bannerContainer.innerHTML = bannerHtml;
  document.body.prepend(bannerContainer);
  var suggestionContainer = document.getElementById('${SuggestionContainerId}');
  var actualHomePagePath = window.location.pathname;
  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'
        ? actualHomePagePath
        : actualHomePagePath + '/';
  suggestionContainer.textContent = suggestedBaseUrl;
}
`;}function BaseUrlIssueBanner(){const{siteConfig:{baseUrl}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.canUseDOM&&/*#__PURE__*/// Safe to use `ExecutionEnvironment`, because `Head` is purely
// side-effect and doesn't affect hydration
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("script",{children:createInlineScript(baseUrl)})})});}/**
 * We want to help the users with a bad baseUrl configuration (very common
 * error). Help message is inlined, and hidden if JS or CSS is able to load.
 *
 * This component only inserts the base URL banner for the homepage, to avoid
 * polluting every statically rendered page.
 *
 * Note: it might create false positives (ie network failures): not a big deal
 *
 * @see https://github.com/facebook/docusaurus/pull/3621
 */function MaybeBaseUrlIssueBanner(){const{siteConfig:{baseUrl,baseUrlIssueBanner}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const isHomePage=pathname===baseUrl;const enabled=baseUrlIssueBanner&&isHomePage;return enabled?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BaseUrlIssueBanner,{}):null;}

/***/ },

/***/ 5643
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k5: () => (/* binding */ BrokenLinksProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const createStatefulBrokenLinks=()=>{// Set to dedup, as it's not useful to collect multiple times the same value
const allAnchors=new Set();const allLinks=new Set();return{collectAnchor:anchor=>{typeof anchor!=='undefined'&&allAnchors.add(anchor);},collectLink:link=>{typeof link!=='undefined'&&allLinks.add(link);},getCollectedAnchors:()=>[...allAnchors],getCollectedLinks:()=>[...allLinks]};};const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({collectAnchor:()=>{// No-op for client
},collectLink:()=>{// No-op for client
}});const useBrokenLinksContext=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);function BrokenLinksProvider({children,brokenLinks}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:brokenLinks,children:children});}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "$3", 0, /* binding */ createStatefulBrokenLinks,
/* harmony export */   "B6", 0, /* binding */ useBrokenLinksContext
/* harmony export */ ]);


/***/ },

/***/ 689
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ dispatchLifecycleAction)
/* harmony export */ });
/* harmony import */ var _generated_client_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5379);
/* harmony import */ var _exports_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dispatchLifecycleAction(lifecycleAction,...args){const callbacks=_generated_client_modules__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.map(clientModule=>{const lifecycleFunction=clientModule.default?.[lifecycleAction]??clientModule[lifecycleAction];return lifecycleFunction?.(...args);});return()=>callbacks.forEach(cb=>cb?.());}function scrollAfterNavigation({location,previousLocation}){if(!previousLocation){return;// no-op: use native browser feature
}const samePathname=location.pathname===previousLocation.pathname;const sameHash=location.hash===previousLocation.hash;const sameSearch=location.search===previousLocation.search;// Query-string changes: do not scroll to top/hash
if(samePathname&&sameHash&&!sameSearch){return;}const{hash}=location;if(!hash){window.scrollTo(0,0);}else{const id=decodeURIComponent(hash.substring(1));const element=document.getElementById(id);element?.scrollIntoView();}}function ClientLifecyclesDispatcher({children,location,previousLocation}){;(0,_exports_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{if(previousLocation!==location){scrollAfterNavigation({location,previousLocation});dispatchLifecycleAction('onRouteDidUpdate',{previousLocation,location});}},[previousLocation,location]);return children;}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientLifecyclesDispatcher);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 5509
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var _exports_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8193);
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6877);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */class PendingNavigation extends react__WEBPACK_IMPORTED_MODULE_0__.Component{previousLocation;routeUpdateCleanupCb;constructor(props){super(props);// previousLocation doesn't affect rendering, hence not stored in state.
this.previousLocation=null;this.routeUpdateCleanupCb=_exports_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.canUseDOM?(0,_ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_2__/* .dispatchLifecycleAction */ .n)('onRouteUpdate',{previousLocation:null,location:this.props.location}):()=>{};this.state={nextRouteHasLoaded:true};}// Intercept location update and still show current route until next route
// is done loading.
shouldComponentUpdate(nextProps,nextState){if(nextProps.location===this.props.location){// `nextRouteHasLoaded` is false means there's a pending route transition.
// Don't update until it's done.
return nextState.nextRouteHasLoaded;}// props.location being different means the router is trying to navigate to
// a new route. We will preload the new route.
const nextLocation=nextProps.location;// Save the location first.
this.previousLocation=this.props.location;this.setState({nextRouteHasLoaded:false});this.routeUpdateCleanupCb=(0,_ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_2__/* .dispatchLifecycleAction */ .n)('onRouteUpdate',{previousLocation:this.previousLocation,location:nextLocation});// Load data while the old screen remains. Force preload instead of using
// `window.docusaurus`, because we want to avoid loading screen even when
// user is on saveData
(0,_preload__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(nextLocation.pathname).then(()=>{this.routeUpdateCleanupCb();this.setState({nextRouteHasLoaded:true});}).catch(e=>{console.warn(e);// If chunk loading failed, it could be because the path to a chunk
// no longer exists due to a new deployment. Force refresh the page
// instead of just not navigating.
window.location.reload();});return false;}render(){const{children,location}=this.props;// Use a controlled <Route> to trick all descendants into rendering the old
// location.
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClientLifecyclesDispatcher__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{previousLocation:this.previousLocation,location:location,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Route */ .qh,{location:location,render:()=>children})});}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PendingNavigation);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 9130
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SiteMetadataDefaults)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SiteMetadataDefaults(){const{siteConfig:{favicon,title,noIndex},i18n:{currentLocale,localeConfigs}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();const faviconUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(favicon);const{htmlLang,direction:htmlDir}=localeConfigs[currentLocale];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("html",{lang:htmlLang,dir:htmlDir}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title",{children:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta",{property:"og:title",content:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),noIndex&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),favicon&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("link",{rel:"icon",href:faviconUrl})]});}

/***/ },

/***/ 6125
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ BrowserContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration
// Note, isBrowser is not part of useDocusaurusContext() for perf reasons
// Using useDocusaurusContext() (much more common need) should not trigger
// re-rendering after a successful hydration
const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);function BrowserContextProvider({children}){const[isBrowser,setIsBrowser]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsBrowser(true);},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:isBrowser,children:children});}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "o", 0, /* binding */ Context
/* harmony export */ ]);


/***/ },

/***/ 1989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ DocusaurusContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _generated_docusaurus_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4784);
/* harmony import */ var _generated_globalData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9568);
/* harmony import */ var _generated_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1435);
/* harmony import */ var _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2654);
/* harmony import */ var _generated_site_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4350);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Static value on purpose: don't make it dynamic!
// Using context is still useful for testability reasons.
const contextValue={siteConfig: _generated_docusaurus_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,siteMetadata: _generated_site_metadata__WEBPACK_IMPORTED_MODULE_5__,globalData: _generated_globalData__WEBPACK_IMPORTED_MODULE_2__,i18n: _generated_i18n__WEBPACK_IMPORTED_MODULE_3__,codeTranslations: _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_4__};const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(contextValue);function DocusaurusContextProvider({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Context.Provider,{value:contextValue,children:children});}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "o", 0, /* binding */ Context
/* harmony export */ ]);


/***/ },

/***/ 2067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ComponentCreator)
/* harmony export */ });
/* harmony import */ var C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9867);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3259);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _generated_routesChunkNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4054);
/* harmony import */ var _generated_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(699);
/* harmony import */ var _theme_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4692);
/* harmony import */ var _flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6921);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3102);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ComponentCreator(path,hash){// 404 page
if(path==='*'){return react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({loading:_theme_Loading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,loader:()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(__webpack_require__(2237))),modules:['@theme/NotFound'],webpack:()=>[/*require.resolve*/(2237)],render(loaded,props){const NotFound=loaded.default;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_routeContext__WEBPACK_IMPORTED_MODULE_7__/* .RouteContextProvider */ .W// Do we want a better name than native-default?
,{value:{plugin:{name:'native',id:'default'}},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(NotFound,{...props})});}});}const chunkNames=_generated_routesChunkNames__WEBPACK_IMPORTED_MODULE_3__[`${path}-${hash}`];// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loader={};const modules=[];const optsWebpack=[];// A map from prop names to chunk names.
// e.g. Suppose the plugin added this as route:
//   { __comp: "...", prop: { foo: "..." }, items: ["...", "..."] }
// It will become:
//   { __comp: "...", "prop.foo": "...", "items.0": "...", "items.1": ... }
// Loadable.Map will _map_ over `loader` and load each key.
const flatChunkNames=(0,_flat__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(chunkNames);Object.entries(flatChunkNames).forEach(([keyPath,chunkName])=>{const chunkRegistry=_generated_registry__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A[chunkName];if(chunkRegistry){loader[keyPath]=chunkRegistry[0];modules.push(chunkRegistry[1]);optsWebpack.push(chunkRegistry[2]);}});return react_loadable__WEBPACK_IMPORTED_MODULE_2___default().Map({loading:_theme_Loading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,loader,modules,webpack:()=>optsWebpack,render(loaded,props){// `loaded` will be a map from key path (as returned from the flattened
// chunk names) to the modules loaded from the loaders. We now have to
// restore the chunk names' previous shape from this flat record.
// We do so by taking advantage of the existing `chunkNames` and replacing
// each chunk name with its loaded module, so we don't create another
// object from scratch.
const loadedModules=JSON.parse(JSON.stringify(chunkNames));Object.entries(loaded).forEach(([keyPath,loadedModule])=>{// JSON modules are also loaded as `{ default: ... }` (`import()`
// semantics) but we just want to pass the actual value to props.
const chunk=loadedModule.default;// One loaded chunk can only be one of two things: a module (props) or a
// component. Modules are always JSON, so `default` always exists. This
// could only happen with a user-defined component.
if(!chunk){throw new Error(`The page component at ${path} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`);}// A module can be a primitive, for example, if the user stored a string
// as a prop. However, there seems to be a bug with swc-loader's CJS
// logic, in that it would load a JSON module with content "foo" as
// `{ default: "foo", 0: "f", 1: "o", 2: "o" }`. Just to be safe, we
// first make sure that the chunk is non-primitive.
if(typeof chunk==='object'||typeof chunk==='function'){Object.keys(loadedModule).filter(k=>k!=='default').forEach(nonDefaultKey=>{chunk[nonDefaultKey]=loadedModule[nonDefaultKey];});}// We now have this chunk prepared. Go down the key path and replace the
// chunk name with the actual chunk.
let val=loadedModules;const keyPaths=keyPath.split('.');keyPaths.slice(0,-1).forEach(k=>{val=val[k];});val[keyPaths[keyPaths.length-1]]=chunk;});/* eslint-disable no-underscore-dangle */const Component=loadedModules.__comp;delete loadedModules.__comp;const routeContext=loadedModules.__context;delete loadedModules.__context;const routeProps=loadedModules.__props;delete loadedModules.__props;/* eslint-enable no-underscore-dangle */// Is there any way to put this RouteContextProvider upper in the tree?
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_routeContext__WEBPACK_IMPORTED_MODULE_7__/* .RouteContextProvider */ .W,{value:routeContext,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Component,{...loadedModules,...routeProps,...props})});}});}

/***/ },

/***/ 7788
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/* harmony import */ var _theme_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6474);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DefaultFallback=params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{...params});class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.state={error:null};}componentDidCatch(error){// Catch errors in any components below and re-render with error message
if(_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){this.setState({error});}}render(){const{children}=this.props;const{error}=this.state;if(error){const fallbackParams={error,tryAgain:()=>this.setState({error:null})};const fallback=this.props.fallback??DefaultFallback;return fallback(fallbackParams);}// See https://github.com/facebook/docusaurus/issues/6337#issuecomment-1012913647
return children??null;}}

/***/ },

/***/ 8193
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const canUseDOM=typeof window!=='undefined'&&'document'in window&&'createElement'in window.document;const ExecutionEnvironment={canUseDOM,// window.attachEvent is IE-specific; it's very likely Docusaurus won't work
// on IE anyway.
canUseEventListeners:canUseDOM&&('addEventListener'in window||'attachEvent'in window),canUseIntersectionObserver:canUseDOM&&'IntersectionObserver'in window,canUseViewport:canUseDOM&&'screen'in window};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutionEnvironment);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 5260
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(545);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .mg,{...props});}

/***/ },

/***/ 4195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ interpolate)
/* harmony export */ });
/* unused harmony export default */
/* unused harmony import specifier */ var isValidElement;
/* unused harmony import specifier */ var _jsx;
/* unused harmony import specifier */ var _Fragment;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function interpolate(text,values){// eslint-disable-next-line prefer-named-capture-group
const segments=text.split(/(\{\w+\})/).map((seg,index)=>{// Odd indices (1, 3, 5...) of the segments are (potentially) interpolatable
if(index%2===1){const value=values?.[seg.slice(1,-1)];if(value!==undefined){return value;}// No match: add warning? There's no way to "escape" interpolation though
}return seg;});if(segments.some(seg=>/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(seg))){return segments.map((seg,index)=>/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(seg)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(seg,{key:index}):seg).filter(seg=>seg!=='');}return segments.join('');}function Interpolate({children,values}){if(typeof children!=='string'){throw new Error(`The Docusaurus <Interpolate> component only accept simple string values. Received: ${/*#__PURE__*/isValidElement(children)?'React element':typeof children}`);}return/*#__PURE__*/_jsx(_Fragment,{children:interpolate(children,values)});}

/***/ },

/***/ 8774
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4625);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4586);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8193);
/* harmony import */ var _useBrokenLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2521);
/* harmony import */ var _useBaseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO all this wouldn't be necessary if we used ReactRouter basename feature
// We don't automatically add base urls to all links,
// only the "safe" ones, starting with / (like /docs/introduction)
// this is because useBaseUrl() actually transforms relative links
// like "introduction" to "/baseUrl/introduction" => bad behavior to fix
const shouldAddBaseUrlAutomatically=to=>to.startsWith('/');function Link({isNavLink,to,href,activeClassName,isActive,'data-noBrokenLinkCheck':noBrokenLinkCheck,autoAddBaseUrl=true,...props},forwardedRef){const{siteConfig}=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();const{trailingSlash,baseUrl}=siteConfig;const router=siteConfig.future.experimental_router;const{withBaseUrl}=(0,_useBaseUrl__WEBPACK_IMPORTED_MODULE_7__/* .useBaseUrlUtils */ .hH)();const brokenLinks=(0,_useBrokenLinks__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();const innerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(forwardedRef,()=>innerRef.current);// IMPORTANT: using to or href should not change anything
// For example, MDX links will ALWAYS give us the href props
// Using one prop or the other should not be used to distinguish
// internal links (/docs/myDoc) from external links (https://github.com)
const targetLinkUnprefixed=to||href;function maybeAddBaseUrl(str){return autoAddBaseUrl&&shouldAddBaseUrlAutomatically(str)?withBaseUrl(str):str;}const isInternal=(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(targetLinkUnprefixed);// pathname:// is a special "protocol" we use to tell Docusaurus link
// that a link is not "internal" and that we shouldn't use history.push()
// this is not ideal but a good enough escape hatch for now
// see https://github.com/facebook/docusaurus/issues/3309
// note: we want baseUrl to be appended (see issue for details)
// TODO read routes and automatically detect internal/external links?
const targetLinkWithoutPathnameProtocol=targetLinkUnprefixed?.replace('pathname://','');// TODO we should use ReactRouter basename feature instead!
// Automatically apply base url in links that start with /
let targetLink=typeof targetLinkWithoutPathnameProtocol!=='undefined'?maybeAddBaseUrl(targetLinkWithoutPathnameProtocol):undefined;// TODO find a way to solve this problem properly
// Fix edge case when useBaseUrl is used on a link
// "./" is useful for images and other resources
// But we don't need it for <Link>
// unfortunately we can't really make the difference :/
if(router==='hash'&&targetLink?.startsWith('./')){targetLink=targetLink?.slice(1);}if(targetLink&&isInternal){targetLink=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .applyTrailingSlash */ .Ks)(targetLink,{trailingSlash,baseUrl});}const preloaded=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);const LinkComponent=isNavLink?react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .NavLink */ .k2:react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .N_;const IOSupported=_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.canUseIntersectionObserver;const ioRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);const handleRef=el=>{innerRef.current=el;if(IOSupported&&el&&isInternal){// If IO supported and element reference found, set up Observer.
ioRef.current=new window.IntersectionObserver(entries=>{entries.forEach(entry=>{if(el===entry.target){// If element is in viewport, stop observing and run callback.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(entry.isIntersecting||entry.intersectionRatio>0){ioRef.current.unobserve(el);ioRef.current.disconnect();if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}}});});// Add element to the observer.
ioRef.current.observe(el);}};const onInteractionEnter=()=>{if(!preloaded.current&&targetLink!=null){window.docusaurus.preload(targetLink);preloaded.current=true;}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// If IO is not supported. We prefetch by default (only once).
if(!IOSupported&&isInternal&&_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.canUseDOM){if(targetLink!=null){window.docusaurus.prefetch(targetLink);}}// When unmounting, stop intersection observer from watching.
return()=>{if(IOSupported&&ioRef.current){ioRef.current.disconnect();}};},[ioRef,targetLink,IOSupported,isInternal]);// It is simple local anchor link targeting current page?
const isAnchorLink=targetLink?.startsWith('#')??false;// See also RR logic:
// https://github.com/remix-run/react-router/blob/v5/packages/react-router-dom/modules/Link.js#L47
const hasInternalTarget=!props.target||props.target==='_self';// Should we use a regular <a> tag instead of React-Router Link component?
const isRegularHtmlLink=!targetLink||!isInternal||!hasInternalTarget||// When using the hash router, we can't use the regular <a> link for anchors
// We need to use React Router to navigate to /#/pathname/#anchor
// And not /#anchor
// See also https://github.com/facebook/docusaurus/pull/10311
isAnchorLink&&router!=='hash';if(!noBrokenLinkCheck&&(isAnchorLink||!isRegularHtmlLink)){brokenLinks.collectLink(targetLink);}if(props.id){brokenLinks.collectAnchor(props.id);}// These props are only added in unit tests to assert/capture the type of link
const testOnlyProps= false?0:{};return isRegularHtmlLink?/*#__PURE__*/// eslint-disable-next-line jsx-a11y/anchor-has-content, @docusaurus/no-html-links
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a",{ref:innerRef,href:targetLink,...(targetLinkUnprefixed&&!isInternal&&{target:'_blank',rel:'noopener noreferrer'}),...props,...testOnlyProps}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LinkComponent,{...props,onMouseEnter:onInteractionEnter,onTouchStart:onInteractionEnter,innerRef:handleRef,to:targetLink// Avoid "React does not recognize the `activeClassName` prop on a DOM
// element"
,...(isNavLink&&{isActive,activeClassName}),...testOnlyProps});}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Link));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>null);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 986
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Translate),
/* harmony export */   T: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4195);
/* harmony import */ var _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2654);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage({id,message}){if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return _generated_codeTranslations__WEBPACK_IMPORTED_MODULE_2__[id??message]??message??id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate({message,id},values){const localizedMessage=getLocalizedMessage({message,id});return (0,_docusaurus_Interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolate */ .G)(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near
// the text?
function Translate({children,id,values}){if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}const localizedMessage=getLocalizedMessage({message:children,id});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,_docusaurus_Interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolate */ .G)(localizedMessage,values)});}

/***/ },

/***/ 7065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Constants used on the client-side: duplicated from server-side code
const DEFAULT_PLUGIN_ID='default';
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "W", 0, /* binding */ DEFAULT_PLUGIN_ID
/* harmony export */ ]);


/***/ },

/***/ 6654
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isInternalUrl),
/* harmony export */   z: () => (/* binding */ hasProtocol)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Poor man's protocol detection
// Spec: https://datatracker.ietf.org/doc/html/rfc3986#section-3.1
// In particular: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
function hasProtocol(url){return /^(?:[A-Za-z][A-Za-z\d+.-]*:|\/\/)/.test(url);}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ },

/***/ 6025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ useBaseUrl),
/* harmony export */   hH: () => (/* binding */ useBaseUrlUtils)
/* harmony export */ });
/* unused harmony export addBaseUrl */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6654);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl({siteUrl,baseUrl,url,options:{forcePrependBaseUrl=false,absolute=false}={},router}){// It never makes sense to add base url to a local anchor url, or one with a
// protocol
if(!url||url.startsWith('#')||(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__/* .hasProtocol */ .z)(url)){return url;}// TODO hash router + /baseUrl/ is unlikely to work well in all situations
// This will support most cases, but not all
// See https://github.com/facebook/docusaurus/pull/9859
if(router==='hash'){return url.startsWith('/')?`.${url}`:`./${url}`;}if(forcePrependBaseUrl){return baseUrl+url.replace(/^\//,'');}// /baseUrl -> /baseUrl/
// https://github.com/facebook/docusaurus/issues/6315
if(url===baseUrl.replace(/\/$/,'')){return baseUrl;}// We should avoid adding the baseurl twice if it's already there
const shouldAddBaseUrl=!url.startsWith(baseUrl);const basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){const{siteConfig}=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const{baseUrl,url:siteUrl}=siteConfig;const router=siteConfig.future.experimental_router;const withBaseUrl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((url,options)=>addBaseUrl({siteUrl,baseUrl,url,options,router}),[siteUrl,baseUrl,router]);return{withBaseUrl};}function useBaseUrl(url,options={}){const{withBaseUrl}=useBaseUrlUtils();return withBaseUrl(url,options);}

/***/ },

/***/ 2521
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useBrokenLinks)
/* harmony export */ });
/* harmony import */ var _BrokenLinksContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5643);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBrokenLinks(){return (0,_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_0__/* .useBrokenLinksContext */ .B6)();}

/***/ },

/***/ 4586
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useDocusaurusContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1989);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);}

/***/ },

/***/ 6588
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P_: () => (/* binding */ usePluginData),
/* harmony export */   kh: () => (/* binding */ useAllPluginInstancesData)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7065);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useGlobalData(){const{globalData}=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();return globalData;}function useAllPluginInstancesData(pluginName,options={}){const globalData=useGlobalData();const pluginGlobalData=globalData[pluginName];if(!pluginGlobalData&&options.failfast){throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin.`);}return pluginGlobalData;}function usePluginData(pluginName,pluginId=_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_PLUGIN_ID */ .W,options={}){const pluginGlobalData=useAllPluginInstancesData(pluginName);const pluginInstanceGlobalData=pluginGlobalData?.[pluginId];if(!pluginInstanceGlobalData&&options.failfast){throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin with id "${pluginId}".`);}return pluginInstanceGlobalData;}

/***/ },

/***/ 2303
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useIsBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);}

/***/ },

/***/ 205
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This hook is like `useLayoutEffect`, but without the SSR warning.
 * It seems hacky but it's used in many React libs (Redux, Formik...).
 * Also mentioned here: https://github.com/facebook/react/issues/16956
 *
 * It is useful when you need to update a ref as soon as possible after a React
 * render (before `useEffect`).
 *
 * TODO should become unnecessary in React v19?
 * https://github.com/facebook/react/pull/26395
 * This was added in core with Docusaurus v3 but kept undocumented on purpose
 */const useIsomorphicLayoutEffect=_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 6803
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useRouteContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3102);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useRouteContext(){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_routeContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ .o);if(!context){throw new Error('Unexpected: no Docusaurus route context found');}return context;}

/***/ },

/***/ 6921
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ flat)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const isTree=x=>typeof x==='object'&&!!x&&Object.keys(x).length>0;/**
 * Takes a tree, and flattens it into a map of keyPath -> value.
 *
 * ```js
 * flat({ a: { b: 1 } }) === { "a.b": 1 };
 * flat({ a: [1, 2] }) === { "a.0": 1, "a.1": 2 };
 * ```
 */function flat(target){const delimiter='.';const output={};function dfs(object,prefix){Object.entries(object).forEach(([key,value])=>{const newKey=prefix?`${prefix}${delimiter}${key}`:key;if(isTree(value)){dfs(value,newKey);}else{output[newKey]=value;}});}dfs(target);return output;}

/***/ },

/***/ 3249
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ HasHydratedDataAttribute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2303);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// See https://github.com/facebook/docusaurus/pull/9256
// Docusaurus adds a <html data-has-hydrated="true"> after hydration
function HasHydratedDataAttribute(){const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("html",{"data-has-hydrated":isBrowser})});}

/***/ },

/***/ 6956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ normalizeLocation)
/* harmony export */ });
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2831);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4378);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Memoize previously normalized pathnames.
const pathnames=new Map();function normalizeLocation(location){if(pathnames.has(location.pathname)){return{...location,pathname:pathnames.get(location.pathname)};}// If the location was registered with an `.html` extension, we don't strip it
// away, or it will render to a 404 page.
const matchedRoutes=(0,react_router_config__WEBPACK_IMPORTED_MODULE_0__/* .matchRoutes */ .u)(_generated_routes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,location.pathname);if(matchedRoutes.some(({route})=>route.exact===true)){pathnames.set(location.pathname,location.pathname);return location;}const pathname=location.pathname.trim().replace(/(?:\/index)?\.html$/,'')||'/';pathnames.set(location.pathname,pathname);return{...location,pathname};}

/***/ },

/***/ 6877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ preload)
/* harmony export */ });
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4378);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2831);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper function to make sure all async components for that particular route
 * is preloaded before rendering. This is especially useful to avoid loading
 * screens.
 *
 * @param pathname the route pathname, example: /docs/installation
 * @returns Promise object represents whether pathname has been preloaded
 */function preload(pathname){const matches=Array.from(new Set([pathname,decodeURI(pathname)])).map(p=>(0,react_router_config__WEBPACK_IMPORTED_MODULE_1__/* .matchRoutes */ .u)(_generated_routes__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,p)).flat();return Promise.all(matches.map(match=>match.route.component.preload?.()));}

/***/ },

/***/ 5598
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ renderToHtml)
/* harmony export */ });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7422);
/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7075);
/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_stream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_stream_consumers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8321);
/* harmony import */ var node_stream_consumers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_stream_consumers__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// See also https://github.com/facebook/react/issues/31134
// See also https://github.com/facebook/docusaurus/issues/9985#issuecomment-2396367797
async function renderToHtml(app){return new Promise((resolve,reject)=>{const passThrough=new node_stream__WEBPACK_IMPORTED_MODULE_1__.PassThrough();const{pipe}=(0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToPipeableStream)(app,{onError(error){reject(error);},onAllReady(){pipe(passThrough);(0,node_stream_consumers__WEBPACK_IMPORTED_MODULE_2__.text)(passThrough).then(resolve,reject);}});});}

/***/ },

/***/ 3102
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RouteContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function mergeContexts({parent,value}){if(!parent){if(!value){throw new Error('Unexpected: no Docusaurus route context found');}else if(!('plugin'in value)){throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');}return value;}// TODO deep merge this
const data={...parent.data,...value?.data};return{// Nested routes are not supposed to override plugin attribute
plugin:parent.plugin,data};}function RouteContextProvider({children,value}){const parent=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);const mergedValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>mergeContexts({parent,value}),[parent,value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value:mergedValue,children:children});}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "o", 0, /* binding */ Context
/* harmony export */ ]);


/***/ },

/***/ 4905
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(545);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3259);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _renderToHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5598);
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6877);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4607);
/* harmony import */ var _BrokenLinksContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5643);
/* harmony import */ var _serverHelmetUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3587);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const render=async({pathname,v4RemoveLegacyPostBuildHeadAttribute})=>{await (0,_preload__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(pathname);const modules=new Set();const routerContext={};const helmetContext={};const statefulBrokenLinks=(0,_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_7__/* .createStatefulBrokenLinks */ .$3)();const app=/*#__PURE__*/// @ts-expect-error: we are migrating away from react-loadable anyways
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((react_loadable__WEBPACK_IMPORTED_MODULE_3___default().Capture),{report:moduleName=>modules.add(moduleName),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__/* .HelmetProvider */ .vd,{context:helmetContext,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .StaticRouter */ .kO,{location:pathname,context:routerContext,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_BrokenLinksContext__WEBPACK_IMPORTED_MODULE_7__/* .BrokenLinksProvider */ .k5,{brokenLinks:statefulBrokenLinks,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_App__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})})})})});const html=await (0,_renderToHtml__WEBPACK_IMPORTED_MODULE_4__/* .renderToHtml */ .b)(app);const{helmet}=helmetContext;const metadata=(0,_serverHelmetUtils__WEBPACK_IMPORTED_MODULE_8__/* .toPageCollectedMetadataInternal */ .I)({helmet});// TODO Docusaurus v4 remove with deprecated postBuild({head}) API
//  the returned collectedData must be serializable to run in workers
if(v4RemoveLegacyPostBuildHeadAttribute){metadata.helmet=null;}const collectedData={metadata,anchors:statefulBrokenLinks.getCollectedAnchors(),links:statefulBrokenLinks.getCollectedLinks(),modules:Array.from(modules)};return{html,collectedData};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 3587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ toPageCollectedMetadataInternal)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getBuildMetaTags(helmet){// @ts-expect-error: see  https://github.com/staylor/react-helmet-async/pull/167
const metaElements=helmet.meta.toComponent()??[];return metaElements.map(el=>el.props);}function isNoIndexTag(tag){if(!tag.name||!tag.content){return false;}return(// meta name is not case-sensitive
tag.name.toLowerCase()==='robots'&&// Robots directives are not case-sensitive
tag.content.toLowerCase().includes('noindex'));}function toPageCollectedMetadataInternal({helmet}){const tags=getBuildMetaTags(helmet);const noIndex=tags.some(isNoIndexTag);return{helmet,// TODO Docusaurus v4 remove
public:{noIndex},internal:{htmlAttributes:helmet.htmlAttributes.toString(),bodyAttributes:helmet.bodyAttributes.toString(),title:helmet.title.toString(),meta:helmet.meta.toString(),link:helmet.link.toString(),script:helmet.script.toString()}};}

/***/ },

/***/ 6474
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7788);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8768);
/* harmony import */ var _routeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3102);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function ErrorDisplay({error,tryAgain}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{style:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',minHeight:'100vh',width:'100%',maxWidth:'80ch',fontSize:'20px',margin:'0 auto',padding:'1rem'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1",{style:{fontSize:'3rem'},children:"This page crashed"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button",onClick:tryAgain,style:{margin:'1rem 0',fontSize:'2rem',cursor:'pointer',borderRadius:20,padding:'1rem'},children:"Try again"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ErrorBoundaryError,{error:error})]});}function ErrorBoundaryError({error}){const causalChain=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_3__/* .getErrorCausalChain */ .rA)(error);const fullMessage=causalChain.map(e=>e.message).join('\n\nCause:\n');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{style:{whiteSpace:'pre-wrap'},children:fullMessage});}// A bit hacky: we need to add an artificial RouteContextProvider here
// The goal is to be able to render the error inside the theme layout
// Without this, our theme classic would crash due to lack of route context
// See also https://github.com/facebook/docusaurus/pull/9852
function ErrorRouteContextProvider({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_routeContext__WEBPACK_IMPORTED_MODULE_5__/* .RouteContextProvider */ .W,{value:{plugin:{name:'docusaurus-core-error-boundary',id:'default'}},children:children});}function Error({error,tryAgain}){// We wrap the error in its own error boundary because the layout can actually
// throw too... Only the ErrorDisplay component is simple enough to be
// considered safe to never throw
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ErrorRouteContextProvider,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A// Note: we display the original error here, not the error that we
// captured in this extra error boundary
,{fallback:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ErrorDisplay,{error:error,tryAgain:tryAgain}),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("title",{children:"Page Error"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ErrorDisplay,{error:error,tryAgain:tryAgain})})]})});}

/***/ },

/***/ 4692
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function Loading({error,retry,pastDelay}){if(error){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{textAlign:'center',color:'#fff',backgroundColor:'#fa383e',borderColor:'#fa383e',borderStyle:'solid',borderRadius:'0.25rem',borderWidth:'1px',boxSizing:'border-box',display:'block',padding:'1rem',flex:'0 0 50%',marginLeft:'25%',marginRight:'25%',marginTop:'5rem',maxWidth:'50%',width:'100%'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:String(error)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",onClick:retry,children:"Retry"})})]});}if(pastDelay){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{id:"loader",style:{width:128,height:110,position:'absolute',top:'calc(100vh - 64%)'},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{cx:"22",cy:"22",r:"8",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})});}return null;}

/***/ },

/***/ 7808
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Wrapper at the very top of the app, that is applied constantly
// and does not depend on current route (unlike the layout)
//
// Gives the opportunity to add stateful providers on top of the app
// and these providers won't reset state when we navigate
//
// See https://github.com/facebook/docusaurus/issues/3919
function Root({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:children});}

/***/ },

/***/ 4733
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yz: () => (/* binding */ getActiveDocContext)
/* harmony export */ });
/* unused harmony exports getActivePlugin, getActiveVersion, getDocVersionSuggestions */
/* unused harmony import specifier */ var matchPath;
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6347);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This code is not part of the api surface, not in ./theme on purpose
// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginData,pathname,options={}){const activeEntry=Object.entries(allPluginData)// Route sorting: '/android/foo' should match '/android' instead of '/'
.sort((a,b)=>b[1].path.localeCompare(a[1].path)).find(([,pluginData])=>!!matchPath(pathname,{path:pluginData.path,exact:false,strict:false}));const activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error(`Can't find active docs plugin for "${pathname}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginData).map(plugin=>plugin.path).join(', ')}`);}return activePlugin;}const getLatestVersion=data=>data.versions.find(version=>version.isLast);function getActiveVersion(data,pathname){// Sort paths so that a match-all version like /docs/* is matched last
// Otherwise /docs/* would match /docs/1.0.0/* routes
// This is simplified but similar to the core sortRoutes() logic
const sortedVersions=[...data.versions].sort((a,b)=>{if(a.path===b.path){return 0;}if(a.path.includes(b.path)){return-1;}if(b.path.includes(a.path)){return 1;}return 0;});return sortedVersions.find(version=>!!(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(pathname,{path:version.path,exact:false,strict:false}));}function getActiveDocContext(data,pathname){const activeVersion=getActiveVersion(data,pathname);const activeDoc=activeVersion?.docs.find(doc=>!!(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(pathname,{path:doc.path,exact:true,strict:false}));function getAlternateVersionDocs(docId){const result={};data.versions.forEach(version=>{version.docs.forEach(doc=>{if(doc.id===docId){result[version.name]=doc;}});});return result;}const alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion,activeDoc,alternateDocVersions:alternateVersionDocs};}function getDocVersionSuggestions(data,pathname){const latestVersion=getLatestVersion(data);const activeDocContext=getActiveDocContext(data,pathname);const latestDocSuggestion=activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion,latestVersionSuggestion:latestVersion};}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "CA", 0, /* binding */ getLatestVersion
/* harmony export */ ]);


/***/ },

/***/ 3886
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VQ: () => (/* binding */ DocsPreferredVersionContextProvider),
/* harmony export */   g1: () => (/* binding */ useDocsPreferredVersion)
/* harmony export */ });
/* unused harmony export useDocsPreferredVersionByPluginId */
/* unused harmony import specifier */ var useAllDocsData;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7712);
/* harmony import */ var _docusaurus_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7065);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9466);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const storageKey=pluginId=>`docs-preferred-version-${pluginId}`;const DocsPreferredVersionStorage={save:(pluginId,persistence,versionName)=>{(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence}).set(versionName);},read:(pluginId,persistence)=>(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence}).get(),clear:(pluginId,persistence)=>{(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .createStorageSlot */ .Wf)(storageKey(pluginId),{persistence}).del();}};/**
 * Initial state is always null as we can't read local storage from node SSR
 */const getInitialState=pluginIds=>Object.fromEntries(pluginIds.map(id=>[id,{preferredVersionName:null}]));/**
 * Read storage for all docs plugins, assigning each doc plugin a preferred
 * version (if found)
 */function readStorageState({pluginIds,versionPersistence,allDocsData}){/**
     * The storage value we read might be stale, and belong to a version that does
     * not exist in the site anymore. In such case, we remove the storage value to
     * avoid downstream errors.
     */function restorePluginState(pluginId){const preferredVersionNameUnsafe=DocsPreferredVersionStorage.read(pluginId,versionPersistence);const pluginData=allDocsData[pluginId];const versionExists=pluginData.versions.some(version=>version.name===preferredVersionNameUnsafe);if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}return Object.fromEntries(pluginIds.map(id=>[id,restorePluginState(id)]));}function useVersionPersistence(){return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .p)().docs.versionPersistence;}const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){const allDocsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useAllDocsData */ .Gy)();const versionPersistence=useVersionPersistence();const pluginIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object.keys(allDocsData),[allDocsData]);// Initial state is empty, as we can't read browser storage in node/SSR
const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialState(pluginIds));// On mount, we set the state read from browser storage
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setState(readStorageState({allDocsData,versionPersistence,pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
const api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(s=>({...s,[pluginId]:{preferredVersionName:versionName}}));}return{savePreferredVersion};},[versionPersistence]);return[state,api];}function DocsPreferredVersionContextProviderUnsafe({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Context.Provider,{value:value,children:children});}/**
 * This is a maybe-layer. If the docs plugin is not enabled, this provider is a
 * simple pass-through.
 */function DocsPreferredVersionContextProvider({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DocsPreferredVersionContextProviderUnsafe,{children:children});}function useDocsPreferredVersionContext(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('DocsPreferredVersionContextProvider');}return value;}/**
 * Returns a read-write interface to a plugin's preferred version. The
 * "preferred version" is defined as the last version that the user visited.
 * For example, if a user is using v3, even when v4 is later published, the user
 * would still be browsing v3 docs when she opens the website next time. Note,
 * the `preferredVersion` attribute will always be `null` before mount.
 */function useDocsPreferredVersion(pluginId=_docusaurus_constants__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_PLUGIN_ID */ .W){const docsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useDocsData */ .ht)(pluginId);const[state,api]=useDocsPreferredVersionContext();const{preferredVersionName}=state[pluginId];const preferredVersion=docsData.versions.find(version=>version.name===preferredVersionName)??null;const savePreferredVersionName=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(versionName=>{api.savePreferredVersion(pluginId,versionName);},[api,pluginId]);return{preferredVersion,savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){const allDocsData=useAllDocsData();const[state]=useDocsPreferredVersionContext();function getPluginIdPreferredVersion(pluginId){const docsData=allDocsData[pluginId];const{preferredVersionName}=state[pluginId];return docsData.versions.find(version=>version.name===preferredVersionName)??null;}const pluginIds=Object.keys(allDocsData);return Object.fromEntries(pluginIds.map(id=>[id,getPluginIdPreferredVersion(id)]));}

/***/ },

/***/ 6972
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QB: () => (/* binding */ useLayoutDoc),
/* harmony export */   Vd: () => (/* binding */ useDocsVersionCandidates),
/* harmony export */   fW: () => (/* binding */ useLayoutDocsSidebar)
/* harmony export */ });
/* unused harmony exports useDocById, findSidebarCategory, findFirstSidebarItemCategoryLink, findFirstSidebarItemLink, useCurrentSidebarCategory, useCurrentSidebarSiblings, isActiveSidebarItem, isVisibleSidebarItem, useVisibleSidebarItems, useSidebarBreadcrumbs, useDocRootMetadata, filterDocCardListItems */
/* unused harmony import specifier */ var useMemo;
/* unused harmony import specifier */ var useLocation;
/* unused harmony import specifier */ var matchPath;
/* unused harmony import specifier */ var renderRoutes;
/* unused harmony import specifier */ var useActivePlugin;
/* unused harmony import specifier */ var isSamePath;
/* unused harmony import specifier */ var useDocsVersion;
/* unused harmony import specifier */ var useDocsSidebar;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7712);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1682);
/* harmony import */ var _docsPreferredVersion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3886);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocById(id){const version=useDocsVersion();if(!id){return undefined;}const doc=version.docs[id];if(!doc){throw new Error(`no version doc found by id=${id}`);}return doc;}/**
 * Pure function, similar to `Array#find`, but works on the sidebar tree.
 */function findSidebarCategory(sidebar,predicate){for(const item of sidebar){if(item.type==='category'){if(predicate(item)){return item;}const subItem=findSidebarCategory(item.items,predicate);if(subItem){return subItem;}}}return undefined;}/**
 * Best effort to assign a link to a sidebar category. If the category doesn't
 * have a link itself, we link to the first sub item with a link.
 */function findFirstSidebarItemCategoryLink(item){if(item.href&&!item.linkUnlisted){return item.href;}for(const subItem of item.items){const link=findFirstSidebarItemLink(subItem);if(link){return link;}}return undefined;}/**
 * Best effort to assign a link to a sidebar item.
 */function findFirstSidebarItemLink(item){if(item.type==='link'&&!item.unlisted){return item.href;}if(item.type==='category'){return findFirstSidebarItemCategoryLink(item);}// Other items types, like "html"
return undefined;}/**
 * Gets the category associated with the current location. Should only be used
 * on category index pages.
 */function useCurrentSidebarCategory(){const{pathname}=useLocation();const sidebar=useDocsSidebar();if(!sidebar){throw new Error('Unexpected: cant find current sidebar in context');}const categoryBreadcrumbs=getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname,onlyCategories:true});const deepestCategory=categoryBreadcrumbs.slice(-1)[0];if(!deepestCategory){throw new Error(`${pathname} is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.`);}return deepestCategory;}/**
 * Gets the category associated with the current location. Should only be used
 * on category index pages.
 */function useCurrentSidebarSiblings(){const{pathname}=useLocation();const sidebar=useDocsSidebar();if(!sidebar){throw new Error('Unexpected: cant find current sidebar in context');}const categoryBreadcrumbs=getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname,onlyCategories:true});const deepestCategory=categoryBreadcrumbs.slice(-1)[0];return deepestCategory?.items??sidebar.items;}const isActive=(testedPath,activePath)=>typeof testedPath!=='undefined'&&isSamePath(testedPath,activePath);const containsActiveSidebarItem=(items,activePath)=>items.some(subItem=>isActiveSidebarItem(subItem,activePath));/**
 * Checks if a sidebar item should be active, based on the active path.
 */function isActiveSidebarItem(item,activePath){if(item.type==='link'){return isActive(item.href,activePath);}if(item.type==='category'){return isActive(item.href,activePath)||containsActiveSidebarItem(item.items,activePath);}return false;}function isVisibleSidebarItem(item,activePath){switch(item.type){case'category':return isActiveSidebarItem(item,activePath)||typeof item.href!=='undefined'&&!item.linkUnlisted||item.items.some(subItem=>isVisibleSidebarItem(subItem,activePath));case'link':// An unlisted item remains visible if it is active
return!item.unlisted||isActiveSidebarItem(item,activePath);default:return true;}}function useVisibleSidebarItems(items,activePath){return useMemo(()=>items.filter(item=>isVisibleSidebarItem(item,activePath)),[items,activePath]);}/**
 * Get the sidebar the breadcrumbs for a given pathname
 * Ordered from top to bottom
 */function getSidebarBreadcrumbs({sidebarItems,pathname,onlyCategories=false}){const breadcrumbs=[];function extract(items){for(const item of items){// Extract category item
if(item.type==='category'){if(isSamePath(item.href,pathname)||extract(item.items)){breadcrumbs.unshift(item);return true;}}// Extract doc item
else if(item.type==='link'&&item.docId&&isSamePath(item.href,pathname)){if(!onlyCategories){breadcrumbs.unshift(item);}return true;}}return false;}extract(sidebarItems);return breadcrumbs;}/**
 * Gets the breadcrumbs of the current doc page, based on its sidebar location.
 * Returns `null` if there's no sidebar or breadcrumbs are disabled.
 */function useSidebarBreadcrumbs(){const sidebar=useDocsSidebar();const{pathname}=useLocation();const breadcrumbsOption=useActivePlugin()?.pluginData.breadcrumbs;if(breadcrumbsOption===false||!sidebar){return null;}return getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname});}/**
 * "Version candidates" are mostly useful for the layout components, which must
 * be able to work on all pages. For example, if a user has `{ type: "doc",
 * docId: "intro" }` as a navbar item, which version does that refer to? We
 * believe that it could refer to at most three version candidates:
 *
 * 1. The **active version**, the one that the user is currently browsing. See
 * {@link useActiveDocContext}.
 * 2. The **preferred version**, the one that the user last visited. See
 * {@link useDocsPreferredVersion}.
 * 3. The **latest version**, the "default". See {@link useLatestVersion}.
 *
 * @param docsPluginId The plugin ID to get versions from.
 * @returns An array of 1~3 versions with priorities defined above, guaranteed
 * to be unique and non-sparse. Will be memoized, hence stable for deps array.
 */function useDocsVersionCandidates(docsPluginId){const{activeVersion}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useActiveDocContext */ .zK)(docsPluginId);const{preferredVersion}=(0,_docsPreferredVersion__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .g1)(docsPluginId);const latestVersion=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useLatestVersion */ .r7)(docsPluginId);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .uniq */ .sb)([activeVersion,preferredVersion,latestVersion].filter(Boolean)),[activeVersion,preferredVersion,latestVersion]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a sidebar ID could
 * be ambiguous. This hook would always return a sidebar to be linked to. See
 * also {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a sidebar with said ID is not found.
 */function useLayoutDocsSidebar(sidebarId,docsPluginId){const versions=useDocsVersionCandidates(docsPluginId);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const allSidebars=versions.flatMap(version=>version.sidebars?Object.entries(version.sidebars):[]);const sidebarEntry=allSidebars.find(sidebar=>sidebar[0]===sidebarId);if(!sidebarEntry){throw new Error(`Can't find any sidebar with id "${sidebarId}" in version${versions.length>1?'s':''} ${versions.map(version=>version.name).join(', ')}".
Available sidebar ids are:
- ${allSidebars.map(entry=>entry[0]).join('\n- ')}`);}return sidebarEntry[1];},[sidebarId,versions]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a doc ID could be
 * ambiguous. This hook would always return a doc to be linked to. See also
 * {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a doc with said ID is not found.
 */function useLayoutDoc(docId,docsPluginId){const versions=useDocsVersionCandidates(docsPluginId);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const allDocs=versions.flatMap(version=>version.docs);const doc=allDocs.find(versionDoc=>versionDoc.id===docId);if(!doc){const isDraft=versions.flatMap(version=>version.draftIds).includes(docId);// Drafts should be silently filtered instead of throwing
if(isDraft){return null;}throw new Error(`Couldn't find any doc with id "${docId}" in version${versions.length>1?'s':''} "${versions.map(version=>version.name).join(', ')}".
Available doc ids are:
- ${(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .uniq */ .sb)(allDocs.map(versionDoc=>versionDoc.id)).join('\n- ')}`);}return doc;},[docId,versions]);}// TODO later read version/route directly from context
/**
 * The docs plugin creates nested routes, with the top-level route providing the
 * version metadata, and the subroutes creating individual doc pages. This hook
 * will match the current location against all known sub-routes.
 *
 * @param props The props received by `@theme/DocRoot`
 * @returns The data of the relevant document at the current location, or `null`
 * if no document associated with the current location can be found.
 */function useDocRootMetadata({route}){const location=useLocation();const versionMetadata=useDocsVersion();const docRoutes=route.routes;const currentDocRoute=docRoutes.find(docRoute=>matchPath(location.pathname,docRoute));if(!currentDocRoute){return null;}// For now, the sidebarName is added as route config: not ideal!
const sidebarName=currentDocRoute.sidebar;const sidebarItems=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;const docElement=renderRoutes(docRoutes);return{docElement,sidebarName,sidebarItems};}/**
 * Filter items we don't want to display on the doc card list view
 * @param items
 */function filterDocCardListItems(items){return items.filter(item=>{const canHaveLink=item.type==='category'||item.type==='link';if(canHaveLink){return!!findFirstSidebarItemLink(item);}return true;});}

/***/ },

/***/ 7712
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gy: () => (/* binding */ useAllDocsData),
/* harmony export */   ht: () => (/* binding */ useDocsData),
/* harmony export */   jh: () => (/* binding */ useVersions),
/* harmony export */   r7: () => (/* binding */ useLatestVersion),
/* harmony export */   zK: () => (/* binding */ useActiveDocContext)
/* harmony export */ });
/* unused harmony exports useActivePlugin, useActivePluginAndVersion, useActiveVersion, useDocVersionSuggestions */
/* unused harmony import specifier */ var useLocation;
/* unused harmony import specifier */ var getActivePlugin;
/* unused harmony import specifier */ var getActiveVersion;
/* unused harmony import specifier */ var getDocVersionSuggestions;
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_useGlobalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6588);
/* harmony import */ var _docsClientUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4733);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Important to use a constant object to avoid React useEffect executions etc.
// see https://github.com/facebook/docusaurus/issues/5089
const StableEmptyObject={};// In blog-only mode, docs hooks are still used by the theme. We need a fail-
// safe fallback when the docs plugin is not in use
const useAllDocsData=()=>(0,_docusaurus_useGlobalData__WEBPACK_IMPORTED_MODULE_1__/* .useAllPluginInstancesData */ .kh)('docusaurus-plugin-content-docs')??StableEmptyObject;const useDocsData=pluginId=>{try{return (0,_docusaurus_useGlobalData__WEBPACK_IMPORTED_MODULE_1__/* .usePluginData */ .P_)('docusaurus-plugin-content-docs',pluginId,{failfast:true});}catch(error){throw new Error(`You are using a feature of the Docusaurus docs plugin, but this plugin does not seem to be enabled${pluginId==='Default'?'':` (pluginId=${pluginId}`}`,{cause:error});}};// TODO this feature should be provided by docusaurus core
function useActivePlugin(options={}){const data=useAllDocsData();const{pathname}=useLocation();return getActivePlugin(data,pathname,options);}function useActivePluginAndVersion(options={}){const activePlugin=useActivePlugin(options);const{pathname}=useLocation();if(!activePlugin){return undefined;}const activeVersion=getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin,activeVersion};}/** Versions are returned ordered (most recent first). */function useVersions(pluginId){const data=useDocsData(pluginId);return data.versions;}function useLatestVersion(pluginId){const data=useDocsData(pluginId);return (0,_docsClientUtils__WEBPACK_IMPORTED_MODULE_2__/* .getLatestVersion */ .CA)(data);}/**
 * Returns `undefined` on doc-unrelated pages, because there's no version
 * currently considered as active.
 */function useActiveVersion(pluginId){const data=useDocsData(pluginId);const{pathname}=useLocation();return getActiveVersion(data,pathname);}function useActiveDocContext(pluginId){const data=useDocsData(pluginId);const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .useLocation */ .zy)();return (0,_docsClientUtils__WEBPACK_IMPORTED_MODULE_2__/* .getActiveDocContext */ .Yz)(data,pathname);}/**
 * Useful to say "hey, you are not on the latest docs version, please switch"
 */function useDocVersionSuggestions(pluginId){const data=useDocsData(pluginId);const{pathname}=useLocation();return getDocVersionSuggestions(data,pathname);}

/***/ },

/***/ 5417
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnnouncementBarCloseButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _theme_Icon_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1752);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7521);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarCloseButton(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"button","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'}),...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('clean-btn close',_styles_module_css__WEBPACK_IMPORTED_MODULE_4__/* .closeButton */ .b,props.className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Icon_Close__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{width:14,height:14,strokeWidth:3.1})});}

/***/ },

/***/ 2256
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnnouncementBarContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6342);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9034);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarContent(props){const{announcementBar}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)();const{content}=announcementBar;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__/* .content */ .Q,props.className)// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}});}

/***/ },

/***/ 9582
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AnnouncementBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5041);
/* harmony import */ var _theme_AnnouncementBar_CloseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5417);
/* harmony import */ var _theme_AnnouncementBar_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2256);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2804);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){const{announcementBar}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)();const{isActive,close}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useAnnouncementBar */ .M)();if(!isActive){return null;}const{backgroundColor,textColor,isCloseable}=announcementBar;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.announcementBar.container,_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .announcementBar */ .Np),style:{backgroundColor,color:textColor},role:"banner",children:[isCloseable&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .announcementBarPlaceholder */ .Iz}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_AnnouncementBar_Content__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .announcementBarContent */ .or}),isCloseable&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_AnnouncementBar_CloseButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{onClick:close,className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .announcementBarClose */ .fT})]});}

/***/ },

/***/ 10
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2303);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(986);
/* harmony import */ var _theme_Icon_LightMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8495);
/* harmony import */ var _theme_Icon_DarkMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9079);
/* harmony import */ var _theme_Icon_SystemColorMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4943);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3384);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// The order of color modes is defined here, and can be customized with swizzle
function getNextColorMode(colorMode,respectPrefersColorScheme){// 2-value transition
if(!respectPrefersColorScheme){return colorMode==='dark'?'light':'dark';}// 3-value transition
switch(colorMode){case null:return'light';case'light':return'dark';case'dark':return null;default:throw new Error(`unexpected color mode ${colorMode}`);}}function getColorModeLabel(colorMode){switch(colorMode){case null:return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({message:'system mode',id:'theme.colorToggle.ariaLabel.mode.system',description:'The name for the system color mode'});case'light':return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({message:'light mode',id:'theme.colorToggle.ariaLabel.mode.light',description:'The name for the light color mode'});case'dark':return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({message:'dark mode',id:'theme.colorToggle.ariaLabel.mode.dark',description:'The name for the dark color mode'});default:throw new Error(`unexpected color mode ${colorMode}`);}}function getColorModeAriaLabel(colorMode){return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({message:'Switch between dark and light mode (currently {mode})',id:'theme.colorToggle.ariaLabel',description:'The ARIA label for the color mode toggle'},{mode:getColorModeLabel(colorMode)});}function CurrentColorModeIcon(){// 3 icons are always rendered for technical reasons
// We use "data-theme-choice" to render the correct one
// This must work even before React hydrates
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_Icon_LightMode__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A// a18y is handled at the button level,
// not relying on button content (svg icons)
,{"aria-hidden":true,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .toggleIcon */ .ym,_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .lightToggleIcon */ .mp)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_Icon_DarkMode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{"aria-hidden":true,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .toggleIcon */ .ym,_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .darkToggleIcon */ .Mx)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_Icon_SystemColorMode__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{"aria-hidden":true,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .toggleIcon */ .ym,_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .systemToggleIcon */ .pQ)})]});}function ColorModeToggle({className,buttonClassName,respectPrefersColorScheme,value,onChange}){const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .toggle */ .L$,className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('clean-btn',_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .toggleButton */ .Rm,!isBrowser&&_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .toggleButtonDisabled */ .VM,buttonClassName),type:"button",onClick:()=>onChange(getNextColorMode(value,respectPrefersColorScheme)),disabled:!isBrowser,title:getColorModeLabel(value),"aria-label":getColorModeAriaLabel(value),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CurrentColorModeIcon,{})})});}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(ColorModeToggle));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 1867
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ErrorPageContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(986);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2685);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorPageContent({error,tryAgain}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main",{className:"container margin-vert--xl",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"row",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"col col--6 col--offset-3",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{as:"h1",className:"hero__title",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.ErrorPageContent.title",description:"The title of the fallback page when the page crashed",children:"This page crashed."})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin-vert--lg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundaryTryAgainButton */ .a2,{onClick:tryAgain,className:"button button--primary shadow--lw"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"margin-vert--md",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundaryError */ .bq,{error:error})})]})})});}

/***/ },

/***/ 1951
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterCopyright)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterCopyright({copyright}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}});}

/***/ },

/***/ 4468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7559);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLayout({style,links,logo,copyright}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("footer",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.layout.footer.container,'footer',{'footer--dark':style==='dark'}),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"container container-fluid",children:[links,(logo||copyright)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"footer__bottom text--center",children:[logo&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"margin-bottom--sm",children:logo}),copyright]})]})});}

/***/ },

/***/ 4745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinkItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
/* harmony import */ var _theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5835);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinkItem({item}){const{to,href,label,prependBaseUrlToHref,className,...props}=item;const toUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(to);const normalizedHref=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('footer__link-item',className),...(href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl}),...props,children:[label,href&&!(0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(href)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{})]});}

/***/ },

/***/ 6031
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinksMultiColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7559);
/* harmony import */ var _theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4745);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ColumnLinkItem({item}){return item.html?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('footer__item',item.className)// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{className:"footer__item",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{item:item})},item.href??item.to);}function Column({column}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.layout.footer.column,'col footer__col',column.className),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"footer__title",children:column.title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{className:"footer__items clean-list",children:column.items.map((item,i)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ColumnLinkItem,{item:item},i))})]});}function FooterLinksMultiColumn({columns}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"row footer__links",children:columns.map((column,i)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Column,{column:column},i))});}

/***/ },

/***/ 6234
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinksSimple)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4745);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Separator(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"footer__link-separator",children:"\xB7"});}function SimpleLinkItem({item}){return item.html?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('footer__link-item',item.className)// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_Footer_LinkItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{item:item});}function FooterLinksSimple({links}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"footer__links text--center",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"footer__links",children:links.map((item,i)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(SimpleLinkItem,{item:item}),links.length!==i+1&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Separator,{})]},i))})});}

/***/ },

/***/ 119
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3106);
/* harmony import */ var _theme_Footer_Links_MultiColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6031);
/* harmony import */ var _theme_Footer_Links_Simple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6234);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLinks({links}){return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .isMultiColumnFooterLinks */ .C)(links)?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Footer_Links_MultiColumn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{columns:links}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Footer_Links_Simple__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{links:links});}

/***/ },

/***/ 3709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FooterLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5626);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5309);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoImage({logo}){const{withBaseUrl}=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* .useBaseUrlUtils */ .hH)();const sources={light:withBaseUrl(logo.src),dark:withBaseUrl(logo.srcDark??logo.src)};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('footer__logo',logo.className),alt:logo.alt,sources:sources,width:logo.width,height:logo.height,style:logo.style});}function FooterLogo({logo}){return logo.href?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{href:logo.href,className:_styles_module_css__WEBPACK_IMPORTED_MODULE_5__/* .footerLogoLink */ .N,target:logo.target,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LogoImage,{logo:logo})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LogoImage,{logo:logo});}

/***/ },

/***/ 2873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6342);
/* harmony import */ var _theme_Footer_Links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var _theme_Footer_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3709);
/* harmony import */ var _theme_Footer_Copyright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1951);
/* harmony import */ var _theme_Footer_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4468);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Footer(){const{footer}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .p)();if(!footer){return null;}const{copyright,links,logo,style}=footer;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Footer_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{style:style,links:links&&links.length>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Footer_Links__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{links:links}),logo:logo&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Footer_Logo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{logo:logo}),copyright:copyright&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Footer_Copyright__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{copyright:copyright})});}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Footer));

/***/ },

/***/ 4608
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1840);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8774);
/* harmony import */ var _docusaurus_useBrokenLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2521);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Heading({as:As,id,...props}){const brokenLinks=(0,_docusaurus_useBrokenLinks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();const anchorTargetClassName=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useAnchorTargetClassName */ .v)(id);// H1 headings do not need an id because they don't appear in the TOC.
if(As==='h1'||!id){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(As,{...props,id:undefined});}brokenLinks.collectAnchor(id);const anchorTitle=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.common.headingLinkTitle',message:'Direct link to {heading}',description:'Title for link to heading'},{heading:typeof props.children==='string'?props.children:id});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(As,{...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('anchor',anchorTargetClassName,props.className),id:id,children:[props.children,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:"hash-link",to:`#${id}`,"aria-label":anchorTitle,title:anchorTitle,translate:"no",children:"\u200B"})]});}

/***/ },

/***/ 1752
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconClose)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconClose({width=21,height=21,color='currentColor',strokeWidth=1.2,className,...restProps}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 15 15",width:width,height:height,...restProps,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{stroke:color,strokeWidth:strokeWidth,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})})});}

/***/ },

/***/ 9079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconDarkMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconDarkMode(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 24 24",width:24,height:24,...props,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fill:"currentColor",d:"M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"})});}

/***/ },

/***/ 5835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconExternalLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(986);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1455);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// References symbol in docusaurus-theme-classic/src/inlineSvgSprites.ts
// See why: https://github.com/facebook/docusaurus/issues/5865
const svgSprite='#theme-svg-external-link';function IconExternalLink({width=13.5,height=13.5}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:width,height:height,"aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.IconExternalLink.ariaLabel',message:'(opens in new tab)',description:'The ARIA label for the external link icon'}),className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2__/* .iconExternalLink */ .F,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("use",{href:svgSprite})});}

/***/ },

/***/ 4170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconLanguage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLanguage({width=20,height=20,...props}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 24 24",width:width,height:height,"aria-hidden":true,...props,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fill:"currentColor",d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})});}

/***/ },

/***/ 8495
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconLightMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconLightMode(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{viewBox:"0 0 24 24",width:24,height:24,...props,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fill:"currentColor",d:"M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"})});}

/***/ },

/***/ 9631
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconMenu({width=30,height=30,className,...restProps}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:className,width:width,height:height,viewBox:"0 0 30 30","aria-hidden":"true",...restProps,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})});}

/***/ },

/***/ 4943
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconSystemColorMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconSystemColorMode(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{viewBox:"0 0 24 24",width:24,height:24,...props,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"currentColor",d:"m12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9-9 4.029-9 9 4.029 9 9 9zm4.95-13.95c1.313 1.313 2.05 3.093 2.05 4.95s-0.738 3.637-2.05 4.95c-1.313 1.313-3.093 2.05-4.95 2.05v-14c1.857 0 3.637 0.737 4.95 2.05z"})});}

/***/ },

/***/ 3660
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LayoutProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9532);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5041);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5293);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3104);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5500);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6305);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3886);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Provider=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .composeProviders */ .fM)([_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .ColorModeProvider */ .a,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .AnnouncementBarProvider */ .o,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .ScrollControllerProvider */ .Tv,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_7__/* .DocsPreferredVersionContextProvider */ .VQ,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .PluginHtmlClassNameProvider */ .Jx,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .NavbarProvider */ .G]);function LayoutProvider({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Provider,{children:children});}

/***/ },

/***/ 8768
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7788);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5500);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5236);
/* harmony import */ var _theme_SkipToContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2273);
/* harmony import */ var _theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9582);
/* harmony import */ var _theme_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5144);
/* harmony import */ var _theme_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2873);
/* harmony import */ var _theme_Layout_Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3660);
/* harmony import */ var _theme_ErrorPageContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1867);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6218);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{children,noFooter,wrapperClassName,// Not really layout-related, but kept for convenience/retro-compatibility
title,description}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_theme_Layout_Provider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .PageMetadata */ .be,{title:title,description:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_theme_SkipToContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_theme_AnnouncementBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_theme_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{id:_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .SkipToContentFallbackId */ .j,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.main.container,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.wrapper.main,_styles_module_css__WEBPACK_IMPORTED_MODULE_12__/* .mainWrapper */ .p,wrapperClassName),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{fallback:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_theme_ErrorPageContent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{...params}),children:children})}),!noFooter&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_theme_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{})]});}

/***/ },

/***/ 3465
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8774);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6025);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5626);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LogoThemedImage({logo,alt,imageClassName}){const sources={light:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo.src),dark:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo.srcDark||logo.src)};const themedImage=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{className:logo.className,sources:sources,height:logo.height,width:logo.width,alt:alt,style:logo.style});// Is this extra div really necessary?
// introduced in https://github.com/facebook/docusaurus/pull/5666
return imageClassName?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:imageClassName,children:themedImage}):themedImage;}function Logo(props){const{siteConfig:{title}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();const{navbar:{title:navbarTitle,logo}}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();const{imageClassName,titleClassName,...propsRest}=props;const logoLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(logo?.href||'/');// If visible title is shown, fallback alt text should be
// an empty string to mark the logo as decorative.
const fallbackAlt=navbarTitle?'':title;// Use logo alt text if provided (including empty string),
// and provide a sensible fallback otherwise.
const alt=logo?.alt??fallbackAlt;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{to:logoLink,...propsRest,...(logo?.target&&{target:logo.target}),children:[logo&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(LogoThemedImage,{logo:logo,alt:alt,imageClassName:imageClassName}),navbarTitle!=null&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b",{className:titleClassName,children:navbarTitle})]});}

/***/ },

/***/ 5659
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarColorModeToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5293);
/* harmony import */ var _theme_ColorModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3127);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarColorModeToggle({className}){const navbarStyle=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .p)().navbar.style;const{disableSwitch,respectPrefersColorScheme}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .p)().colorMode;const{colorModeChoice,setColorMode}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useColorMode */ .G)();if(disableSwitch){return null;}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ColorModeToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:className,buttonClassName:navbarStyle==='dark'?_styles_module_css__WEBPACK_IMPORTED_MODULE_4__/* .darkNavbarColorModeToggle */ .x:undefined,respectPrefersColorScheme:respectPrefersColorScheme,value:colorModeChoice,onChange:setColorMode});}

/***/ },

/***/ 7182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2685);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2069);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6305);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5659);
/* harmony import */ var _theme_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(418);
/* harmony import */ var _theme_Navbar_MobileSidebar_Toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2230);
/* harmony import */ var _theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3502);
/* harmony import */ var _theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4289);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8484);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)().navbar.items;}function NavbarItems({items}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,{children:items.map((item,i)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ErrorCauseBoundary */ .k2,{onError:error=>new Error(`A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item,null,2)}`,{cause:error}),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{...item})},i))});}function NavbarContentLayout({left,right}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"navbar__inner",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.navbar.containerLeft,'navbar__items'),children:left}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.navbar.containerRight,'navbar__items navbar__items--right'),children:right})]});}function NavbarContent(){const mobileSidebar=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useNavbarMobileSidebar */ .M)();const items=useNavbarItems();const[leftItems,rightItems]=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .splitNavbarItems */ .D)(items);const searchBarItem=items.find(item=>item.type==='search');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(NavbarContentLayout,{left:/*#__PURE__*/// TODO stop hardcoding items?
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,{children:[!mobileSidebar.disabled&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_theme_Navbar_MobileSidebar_Toggle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(NavbarItems,{items:leftItems})]}),right:/*#__PURE__*/// TODO stop hardcoding items?
// Ask the user to add the respective navbar items => more flexible
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(NavbarItems,{items:rightItems}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_13__/* .colorModeToggle */ .n}),!searchBarItem&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_theme_SearchBar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{})})]})});}

/***/ },

/***/ 5419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1182);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(986);
/* harmony import */ var _theme_Navbar_MobileSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2033);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(231);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarBackdrop(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{role:"presentation",...props,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('navbar-sidebar__backdrop',props.className)});}function NavbarLayout({children}){const{navbar:{hideOnScroll,style}}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .p)();const mobileSidebar=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useNavbarMobileSidebar */ .M)();const{navbarRef,isNavbarVisible}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useHideableNavbar */ .S)(hideOnScroll);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("nav",{ref:navbarRef,"aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_6__/* .translate */ .T)({id:'theme.NavBar.navAriaLabel',message:'Main',description:'The ARIA label for the main navigation'}),className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.navbar.container,'navbar','navbar--fixed-top',hideOnScroll&&[_styles_module_css__WEBPACK_IMPORTED_MODULE_8__/* .navbarHideable */ .R,!isNavbarVisible&&_styles_module_css__WEBPACK_IMPORTED_MODULE_8__/* .navbarHidden */ .T],{'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':mobileSidebar.shown}),children:[children,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NavbarBackdrop,{onClick:mobileSidebar.toggle}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_Navbar_MobileSidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{})]});}

/***/ },

/***/ 3502
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3465);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarLogo(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title text--truncate"});}

/***/ },

/***/ 1263
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebarHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2069);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5659);
/* harmony import */ var _theme_Icon_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1752);
/* harmony import */ var _theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3502);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CloseButton(){const mobileSidebar=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarMobileSidebar */ .M)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",{type:"button","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.docs.sidebar.closeSidebarButtonAriaLabel',message:'Close navigation bar',description:'The ARIA label for close button of mobile sidebar'}),className:"clean-btn navbar-sidebar__close",onClick:()=>mobileSidebar.toggle(),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Icon_Close__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{color:"var(--ifm-color-emphasis-600)"})});}function NavbarMobileSidebarHeader(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"navbar-sidebar__brand",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Navbar_Logo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Navbar_ColorModeToggle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:"margin-right--md"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CloseButton,{})]});}

/***/ },

/***/ 4300
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebarLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8695);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7559);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: remove temporary inert workaround
//  See https://github.com/facebook/react/issues/17157
//  See https://github.com/radix-ui/themes/pull/509
function inertProps(inert){const isBeforeReact19=parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version.split('.')[0],10)<19;if(isBeforeReact19){// TODO Docusaurus v4: remove temporary inert workaround
return{inert:inert?'':undefined};}return{inert};}function NavbarMobileSidebarPanel({children,inert}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.navbar.mobileSidebar.panel,'navbar-sidebar__item menu'),...inertProps(inert),children:children});}function NavbarMobileSidebarLayout({header,primaryMenu,secondaryMenu}){const{shown:secondaryMenuShown}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenu */ .T)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .ThemeClassNames */ .G.layout.navbar.mobileSidebar.container,'navbar-sidebar'),children:[header,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('navbar-sidebar__items',{'navbar-sidebar__items--show-secondary':secondaryMenuShown}),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NavbarMobileSidebarPanel,{inert:secondaryMenuShown,children:primaryMenu}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NavbarMobileSidebarPanel,{inert:!secondaryMenuShown,children:secondaryMenu})]})]});}

/***/ },

/***/ 5863
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobilePrimaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .p)().navbar.items;}// The primary menu displays the navbar items
function NavbarMobilePrimaryMenu(){const mobileSidebar=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarMobileSidebar */ .M)();// TODO how can the order be defined for mobile?
// Should we allow providing a different list of items?
const items=useNavbarItems();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{className:"menu__list",children:items.map((item,i)=>/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{mobile:true,...item,onClick:()=>mobileSidebar.toggle(),key:i}))});}

/***/ },

/***/ 8007
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebarSecondaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8695);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SecondaryMenuBackButton(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{...props,type:"button",className:"clean-btn navbar-sidebar__back",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",children:"\u2190 Back to main menu"})});}// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
function NavbarMobileSidebarSecondaryMenu(){const isPrimaryMenuEmpty=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .p)().navbar.items.length===0;const secondaryMenu=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarSecondaryMenu */ .T)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[!isPrimaryMenuEmpty&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SecondaryMenuBackButton,{onClick:()=>secondaryMenu.hide()}),secondaryMenu.content]});}

/***/ },

/***/ 2230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MobileSidebarToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2069);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _theme_Icon_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9631);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MobileSidebarToggle(){const{toggle,shown}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarMobileSidebar */ .M)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:toggle,"aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.docs.sidebar.toggleSidebarButtonAriaLabel',message:'Toggle navigation bar',description:'The ARIA label for hamburger menu button of mobile navigation'}),"aria-expanded":shown,className:"navbar__toggle clean-btn",type:"button",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Icon_Menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{})});}

/***/ },

/***/ 2033
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarMobileSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2069);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3458);
/* harmony import */ var _theme_Navbar_MobileSidebar_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4300);
/* harmony import */ var _theme_Navbar_MobileSidebar_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1263);
/* harmony import */ var _theme_Navbar_MobileSidebar_PrimaryMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5863);
/* harmony import */ var _theme_Navbar_MobileSidebar_SecondaryMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8007);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarMobileSidebar(){const mobileSidebar=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarMobileSidebar */ .M)();(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useLockBodyScroll */ ._)(mobileSidebar.shown);if(!mobileSidebar.shouldRender){return null;}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Navbar_MobileSidebar_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{header:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Navbar_MobileSidebar_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{}),primaryMenu:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Navbar_MobileSidebar_PrimaryMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{}),secondaryMenu:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Navbar_MobileSidebar_SecondaryMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{})});}

/***/ },

/***/ 4289
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7921);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarSearch({children,className}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(className,_styles_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navbarSearchContainer */ .E),children:children});}

/***/ },

/***/ 5144
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_Navbar_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5419);
/* harmony import */ var _theme_Navbar_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Navbar(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_Navbar_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_Navbar_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{})});}

/***/ },

/***/ 6931
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3828);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9788);
/* harmony import */ var _theme_NavbarItem_LocaleDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4614);
/* harmony import */ var _theme_NavbarItem_SearchNavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1310);
/* harmony import */ var _theme_NavbarItem_HtmlNavbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(131);
/* harmony import */ var _theme_NavbarItem_DocNavbarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4820);
/* harmony import */ var _theme_NavbarItem_DocSidebarNavbarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3888);
/* harmony import */ var _theme_NavbarItem_DocsVersionNavbarItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9223);
/* harmony import */ var _theme_NavbarItem_DocsVersionDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7262);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ComponentTypes={default:_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,localeDropdown:_theme_NavbarItem_LocaleDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,search:_theme_NavbarItem_SearchNavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,dropdown:_theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,html:_theme_NavbarItem_HtmlNavbarItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,doc:_theme_NavbarItem_DocNavbarItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,docSidebar:_theme_NavbarItem_DocSidebarNavbarItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,docsVersion:_theme_NavbarItem_DocsVersionNavbarItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,docsVersionDropdown:_theme_NavbarItem_DocsVersionDropdownNavbarItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentTypes);

/***/ },

/***/ 2851
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DefaultNavbarItemDesktop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9060);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DefaultNavbarItemDesktop({className,isDropdownItem=false,...props}){const element=/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(isDropdownItem?'dropdown__link':'navbar__item navbar__link',className),isDropdownLink:isDropdownItem,...props});if(isDropdownItem){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{children:element});}return element;}

/***/ },

/***/ 3423
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DefaultNavbarItemMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9060);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DefaultNavbarItemMobile({className,isDropdownItem,...props}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{className:"menu__list-item",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('menu__link',className),...props})});}

/***/ },

/***/ 3828
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DefaultNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3423);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2851);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DefaultNavbarItem({mobile=false,position,// Need to destructure position from props so that it doesn't get passed on.
...props}){const Comp=mobile?_theme_NavbarItem_DefaultNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A:_theme_NavbarItem_DefaultNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp,{...props,activeClassName:props.activeClassName??(mobile?'menu__link--active':'navbar__link--active')});}

/***/ },

/***/ 4820
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7712);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6972);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3828);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocNavbarItem({docId,label:staticLabel,docsPluginId,...props}){const{activeDoc}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useActiveDocContext */ .zK)(docsPluginId);const doc=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutDoc */ .QB)(docId,docsPluginId);const pageActive=activeDoc?.path===doc?.path;// Draft and unlisted items are not displayed in the navbar.
if(doc===null||doc.unlisted&&!pageActive){return null;}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{exact:true,...props,isActive:()=>pageActive||!!activeDoc?.sidebar&&activeDoc.sidebar===doc.sidebar,label:staticLabel??doc.id,to:doc.path});}

/***/ },

/***/ 3888
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocSidebarNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7712);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6972);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3828);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocSidebarNavbarItem({sidebarId,label,docsPluginId,...props}){const{activeDoc}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useActiveDocContext */ .zK)(docsPluginId);const sidebarLink=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useLayoutDocsSidebar */ .fW)(sidebarId,docsPluginId).link;if(!sidebarLink){throw new Error(`DocSidebarNavbarItem: Sidebar with ID "${sidebarId}" doesn't have anything to be linked to.`);}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{exact:true,...props,isActive:()=>activeDoc?.sidebar===sidebarId,label:label??sidebarLink.label,to:sidebarLink.path});}

/***/ },

/***/ 7262
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocsVersionDropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7712);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6972);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3886);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(986);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7485);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3828);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9788);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getVersionItems(versions,configs){if(configs){// Collect all the versions we have
const versionMap=new Map(versions.map(version=>[version.name,version]));const toVersionItem=(name,config)=>{const version=versionMap.get(name);if(!version){throw new Error(`No docs version exist for name '${name}', please verify your 'docsVersionDropdown' navbar item versions config.
Available version names:\n- ${versions.map(v=>`${v.name}`).join('\n- ')}`);}return{version,label:config?.label??version.label};};if(Array.isArray(configs)){return configs.map(name=>toVersionItem(name,undefined));}else{return Object.entries(configs).map(([name,config])=>toVersionItem(name,config));}}else{return versions.map(version=>({version,label:version.label}));}}function useVersionItems({docsPluginId,configs}){const versions=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useVersions */ .jh)(docsPluginId);return getVersionItems(versions,configs);}function getVersionMainDoc(version){return version.docs.find(doc=>doc.id===version.mainDocId);}function getVersionTargetDoc(version,activeDocContext){// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
return activeDocContext.alternateDocVersions[version.name]??getVersionMainDoc(version);}// The version item to use for the "dropdown button"
function useDisplayedVersionItem({docsPluginId,versionItems}){// The order of the candidates matters!
const candidates=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_2__/* .useDocsVersionCandidates */ .Vd)(docsPluginId);const candidateItems=candidates.map(candidate=>versionItems.find(vi=>vi.version===candidate)).filter(vi=>vi!==undefined);return candidateItems[0]??versionItems[0];}function DocsVersionDropdownNavbarItem({mobile,docsPluginId,dropdownActiveClassDisabled,dropdownItemsBefore,dropdownItemsAfter,versions:configs,...props}){const search=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useHistorySelector */ .Hl)(history=>history.location.search);const hash=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useHistorySelector */ .Hl)(history=>history.location.hash);const activeDocContext=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useActiveDocContext */ .zK)(docsPluginId);const{savePreferredVersionName}=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .g1)(docsPluginId);const versionItems=useVersionItems({docsPluginId,configs});const displayedVersionItem=useDisplayedVersionItem({docsPluginId,versionItems});function versionItemToLink({version,label}){const targetDoc=getVersionTargetDoc(version,activeDocContext);return{label,// preserve ?search#hash suffix on version switches
to:`${targetDoc.path}${search}${hash}`,isActive:()=>version===activeDocContext.activeVersion,onClick:()=>savePreferredVersionName(version.name)};}const items=[...dropdownItemsBefore,...versionItems.map(versionItemToLink),...dropdownItemsAfter];// Mobile dropdown is handled a bit differently
const dropdownLabel=mobile&&items.length>1?(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .T)({id:'theme.navbar.mobileVersionsDropdown.label',message:'Versions',description:'The label for the navbar versions dropdown on mobile view'}):displayedVersionItem.label;const dropdownTo=mobile&&items.length>1?undefined:getVersionTargetDoc(displayedVersionItem.version,activeDocContext).path;// We don't want to render a version dropdown with 0 or 1 item. If we build
// the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
// We'd rather render a button instead of a dropdown
if(items.length<=1){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{...props,mobile:mobile,label:dropdownLabel,to:dropdownTo,isActive:dropdownActiveClassDisabled?()=>false:undefined});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{...props,mobile:mobile,label:dropdownLabel,to:dropdownTo,items:items,isActive:dropdownActiveClassDisabled?()=>false:undefined});}

/***/ },

/***/ 9223
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocsVersionNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6972);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3828);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);function DocsVersionNavbarItem({label:staticLabel,to:staticTo,docsPluginId,...props}){const version=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useDocsVersionCandidates */ .Vd)(docsPluginId)[0];const label=staticLabel??version.label;const path=staticTo??getVersionMainDoc(version).path;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{...props,label:label,to:path});}

/***/ },

/***/ 9083
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DropdownNavbarItemDesktop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9060);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DropdownNavbarItemDesktop({items,position,className,onClick,...props}){const dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const[showDropdown,setShowDropdown]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleClickOutside=event=>{if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);document.addEventListener('focusin',handleClickOutside);return()=>{document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);document.removeEventListener('focusin',handleClickOutside);};},[dropdownRef]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{ref:dropdownRef,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('navbar__item','dropdown','dropdown--hoverable',{'dropdown--right':position==='right','dropdown--show':showDropdown}),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{"aria-haspopup":"true","aria-expanded":showDropdown,role:"button"// # hash permits to make the <a> tag focusable in case no link target
// See https://github.com/facebook/docusaurus/pull/6003
// There's probably a better solution though...
,href:props.to?undefined:'#',className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('navbar__link',className),...props,onClick:props.to?undefined:e=>e.preventDefault(),onKeyDown:e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setShowDropdown(!showDropdown);}},children:props.children??props.label}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{className:"dropdown__menu",children:items.map((childItemProps,i)=>/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{isDropdownItem:true,activeClassName:"dropdown__link--active",...childItemProps,key:i}))})]});}

/***/ },

/***/ 1207
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DropdownNavbarItemMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1422);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1252);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9342);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9169);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(986);
/* harmony import */ var _theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9060);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9907);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isItemActive(item,localPathname){if((0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(item.to,localPathname)){return true;}if((0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .isRegexpStringMatch */ .G)(item.activeBaseRegex,localPathname)){return true;}if(item.activeBasePath&&localPathname.startsWith(item.activeBasePath)){return true;}return false;}function containsActiveItems(items,localPathname){return items.some(item=>isItemActive(item,localPathname));}function CollapseButton({collapsed,onClick}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{"aria-label":collapsed?(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_6__/* .translate */ .T)({id:'theme.navbar.mobileDropdown.collapseButton.expandAriaLabel',message:'Expand the dropdown',description:'The ARIA label of the button to expand the mobile dropdown navbar item'}):(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_6__/* .translate */ .T)({id:'theme.navbar.mobileDropdown.collapseButton.collapseAriaLabel',message:'Collapse the dropdown',description:'The ARIA label of the button to collapse the mobile dropdown navbar item'}),"aria-expanded":!collapsed,type:"button",className:"clean-btn menu__caret",onClick:onClick});}function useItemCollapsible({active}){const{collapsed,toggleCollapsed,setCollapsed}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .useCollapsible */ .u)({initialState:()=>!active});// Expand if any item active after a navigation
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(active){setCollapsed(false);}},[active,setCollapsed]);return{collapsed,toggleCollapsed};}function DropdownNavbarItemMobile({items,className,position,// Need to destructure position from props so that it doesn't get passed on.
onClick,...props}){const localPathname=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useLocalPathname */ .B)();const isActive=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .ys)(props.to,localPathname);const containsActive=containsActiveItems(items,localPathname);const{collapsed,toggleCollapsed}=useItemCollapsible({active:isActive||containsActive});// # hash permits to make the <a> tag focusable in case no link target
// See https://github.com/facebook/docusaurus/pull/6003
// There's probably a better solution though...
const href=props.to?undefined:'#';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('menu__list-item',{'menu__list-item--collapsed':collapsed}),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('menu__list-item-collapsible',{'menu__list-item-collapsible--active':isActive}),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_theme_NavbarItem_NavbarNavLink__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{role:"button",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* .dropdownNavbarItemMobile */ .H,'menu__link menu__link--sublist',className),href:href,...props,onClick:e=>{// Prevent navigation when link is "#"
if(href==='#'){e.preventDefault();}// Otherwise we let navigation eventually happen, and/or collapse
toggleCollapsed();},children:props.children??props.label}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(CollapseButton,{collapsed:collapsed,onClick:e=>{e.preventDefault();toggleCollapsed();}})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .Collapsible */ .N,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed,children:items.map((childItemProps,i)=>/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{mobile:true,isDropdownItem:true,onClick:onClick,activeClassName:"menu__link--active",...childItemProps,key:i}))})]});}

/***/ },

/***/ 9788
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1207);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9083);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DropdownNavbarItem({mobile=false,...props}){const Comp=mobile?_theme_NavbarItem_DropdownNavbarItem_Mobile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A:_theme_NavbarItem_DropdownNavbarItem_Desktop__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp,{...props});}

/***/ },

/***/ 131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ HtmlNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function HtmlNavbarItem({value,className,mobile=false,isDropdownItem=false}){const Comp=isDropdownItem?'li':'div';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({navbar__item:!mobile&&!isDropdownItem,'menu__list-item':mobile},className),dangerouslySetInnerHTML:{__html:value}});}

/***/ },

/***/ 4614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LocaleDropdownNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2131);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(986);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7485);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9788);
/* harmony import */ var _theme_Icon_Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4170);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8244);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLocaleDropdownUtils(){const{siteConfig,i18n:{localeConfigs}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const alternatePageUtils=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useAlternatePageUtils */ .o)();const search=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useHistorySelector */ .Hl)(history=>history.location.search);const hash=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useHistorySelector */ .Hl)(history=>history.location.hash);const getLocaleConfig=locale=>{const localeConfig=localeConfigs[locale];if(!localeConfig){throw new Error(`Docusaurus bug, no locale config found for locale=${locale}`);}return localeConfig;};const getBaseURLForLocale=locale=>{const localeConfig=getLocaleConfig(locale);const isSameDomain=localeConfig.url===siteConfig.url;if(isSameDomain){// Shorter paths if localized sites are hosted on the same domain
// This reduces HTML size a bit
return`pathname://${alternatePageUtils.createUrl({locale,fullyQualified:false})}`;}return alternatePageUtils.createUrl({locale,fullyQualified:true});};return{getURL:(locale,options)=>{// We have 2 query strings because
// - there's the current one
// - there's one user can provide through navbar config
// see https://github.com/facebook/docusaurus/pull/8915
const finalSearch=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .mergeSearchStrings */ .jy)([search,options.queryString],'append');return`${getBaseURLForLocale(locale)}${finalSearch}${hash}`;},getLabel:locale=>{return getLocaleConfig(locale).label;},getLang:locale=>{return getLocaleConfig(locale).htmlLang;}};}function LocaleDropdownNavbarItem({mobile,dropdownItemsBefore,dropdownItemsAfter,queryString,...props}){const utils=useLocaleDropdownUtils();const{i18n:{currentLocale,locales}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const localeItems=locales.map(locale=>{return{label:utils.getLabel(locale),lang:utils.getLang(locale),to:utils.getURL(locale,{queryString}),target:'_self',autoAddBaseUrl:false,className:// eslint-disable-next-line no-nested-ternary
locale===currentLocale?// Similar idea as DefaultNavbarItem: select the right Infima active
// class name. This cannot be substituted with isActive, because the
// target URLs contain `pathname://` and therefore are not NavLinks!
mobile?'menu__link--active':'dropdown__link--active':''};});const items=[...dropdownItemsBefore,...localeItems,...dropdownItemsAfter];// Mobile is handled a bit differently
const dropdownLabel=mobile?(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .T)({message:'Languages',id:'theme.navbar.mobileLanguageDropdown.label',description:'The label for the mobile language switcher dropdown'}):utils.getLabel(currentLocale);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{...props,mobile:mobile,label:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_Icon_Language__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* .iconLanguage */ ._}),dropdownLabel]}),items:items});}

/***/ },

/***/ 9060
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8774);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6025);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6654);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1252);
/* harmony import */ var _theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5835);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NavbarNavLink({activeBasePath,activeBaseRegex,to,href,label,html,isDropdownLink,prependBaseUrlToHref,...props}){// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
const toUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(to);const activeBaseUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(activeBasePath);const normalizedHref=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(href,{forcePrependBaseUrl:true});const isExternalLink=label&&href&&!(0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(href);// Link content is set through html XOR label
const linkContentProps=html?{dangerouslySetInnerHTML:{__html:html}}:{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[label,isExternalLink&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Icon_ExternalLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{...(isDropdownLink&&{width:12,height:12})})]})};if(href){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{href:prependBaseUrlToHref?normalizedHref:href,...props,...linkContentProps});}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{to:toUrl,isNavLink:true,...((activeBasePath||activeBaseRegex)&&{isActive:(_match,location)=>activeBaseRegex?(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .isRegexpStringMatch */ .G)(activeBaseRegex,location.pathname):location.pathname.startsWith(activeBaseUrl)}),...props,...linkContentProps});}

/***/ },

/***/ 1310
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SearchNavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var _theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem({mobile,className}){if(mobile){return null;}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_Navbar_Search__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:className,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_SearchBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{})});}

/***/ },

/***/ 7163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NavbarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_NavbarItem_ComponentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function normalizeComponentType(type,props){// Backward compatibility: navbar item with no type set
// but containing dropdown items should use the type "dropdown"
if(!type||type==='default'){return'items'in props?'dropdown':'default';}return type;}function NavbarItem({type,...props}){const componentType=normalizeComponentType(type,props);const NavbarItemComponent=_theme_NavbarItem_ComponentTypes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[componentType];if(!NavbarItemComponent){throw new Error(`No NavbarItem component found for type "${type}".`);}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavbarItemComponent,{...props});}

/***/ },

/***/ 3363
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NotFoundContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function NotFoundContent({className}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('container margin-vert--xl',className),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"row",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"col col--6 col--offset-3",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{as:"h1",className:"hero__title",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})});}

/***/ },

/***/ 2237
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(986);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5500);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Index(){const title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.NotFound.title',message:'Page Not Found'});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .PageMetadata */ .be,{title:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_NotFound_Content__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{})})]});}

/***/ },

/***/ 1463
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SearchMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we bias toward using Algolia metadata on purpose
// Not doing so leads to confusion in the community,
// as it requires to first crawl the site with the Algolia plugin enabled first
// - https://github.com/facebook/docusaurus/issues/6693
// - https://github.com/facebook/docusaurus/issues/4555
function SearchMetadata({locale,version,tag}){// Seems safe to consider here the locale is the language, as the existing
// docsearch:language filter is afaik a regular string-based filter
const language=locale;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[locale&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_locale",content:locale}),version&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docusaurus_tag",content:tag}),language&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:language",content:language}),version&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta",{name:"docsearch:docusaurus_tag",content:tag})]});}

/***/ },

/***/ 7368
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SiteMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6025);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5500);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2131);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2967);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(440);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1463);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){const{i18n:{currentLocale,defaultLocale,localeConfigs}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();const alternatePageUtils=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useAlternatePageUtils */ .o)();const currentHtmlLang=localeConfigs[currentLocale].htmlLang;// HTML lang is a BCP 47 tag, but the Open Graph protocol requires
// using underscores instead of dashes.
// See https://ogp.me/#optional
// See https://en.wikipedia.org/wiki/IETF_language_tag)
const bcp47ToOpenGraphLocale=code=>code.replace('-','_');// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[Object.entries(localeConfigs).map(([locale,{htmlLang}])=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale,fullyQualified:true}),hrefLang:htmlLang},locale)),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta",{property:"og:locale",content:bcp47ToOpenGraphLocale(currentHtmlLang)}),Object.values(localeConfigs).filter(config=>currentHtmlLang!==config.htmlLang).map(config=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta",{property:"og:locale:alternate",content:bcp47ToOpenGraphLocale(config.htmlLang)},`meta-og-${config.htmlLang}`))]});}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){const{siteConfig:{url:siteUrl,baseUrl,trailingSlash}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();// TODO using useLocation().pathname is not a super idea
// See https://github.com/facebook/docusaurus/issues/9170
const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .zy)();const canonicalPathname=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_9__/* .applyTrailingSlash */ .Ks)((0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)(pathname),{trailingSlash,baseUrl});return siteUrl+canonicalPathname;}// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders({permalink}){const{siteConfig:{url:siteUrl}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();const defaultCanonicalUrl=useDefaultCanonicalUrl();const canonicalUrl=permalink?`${siteUrl}${permalink}`:defaultCanonicalUrl;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("link",{rel:"canonical",href:canonicalUrl})]});}function SiteMetadata(){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();// TODO maybe move these 2 themeConfig to siteConfig?
// These seems useful for other themes as well
const{metadata,image:defaultImage}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("body",{})]}),defaultImage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .PageMetadata */ .be,{image:defaultImage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(CanonicalUrlHeaders,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(AlternateLangHeaders,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{tag:_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_SEARCH_TAG */ .C,locale:currentLocale}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:metadata.map((metadatum,i)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("meta",{...metadatum},i))})]});}

/***/ },

/***/ 2273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SkipToContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5236);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5521);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SkipToContent(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .SkipToContentLink */ .K,{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_2__/* .skipToContent */ .s});}

/***/ },

/***/ 1011
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemeProviderTitleFormatter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4563);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const formatter=params=>{// Add your own title formatting logic here!
return params.defaultFormatter(params);};function ThemeProviderTitleFormatter({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_1__/* .TitleFormatterProvider */ .AL,{formatter:formatter,children:children});}

/***/ },

/***/ 6578
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _theme_ThemeProvider_TitleFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1011);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemeProvider({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_ThemeProvider_TitleFormatter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:children});}

/***/ },

/***/ 5626
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemedImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemedImage(props){const{sources,className:parentClassName,alt,...propsRest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:parentClassName,children:({theme,className})=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:sources[theme],alt:alt,className:className,...propsRest})});}

/***/ },

/***/ 1422
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ Collapsible),
/* harmony export */   u: () => (/* binding */ useCollapsible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var _utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3109);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultAnimationEasing='ease-in-out';/**
 * This hook is a very thin wrapper around a `useState`.
 */function useCollapsible({initialState}){const[collapsed,setCollapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState??false);const toggleCollapsed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{setCollapsed(expanded=>!expanded);},[]);return{collapsed,setCollapsed,toggleCollapsed};}const CollapsedStyles={display:'none',overflow:'hidden',height:'0px'};const ExpandedStyles={display:'block',overflow:'visible',height:'auto'};function applyCollapsedStyle(el,collapsed){const collapsedStyles=collapsed?CollapsedStyles:ExpandedStyles;el.style.display=collapsedStyles.display;el.style.overflow=collapsedStyles.overflow;el.style.height=collapsedStyles.height;}/*
Lex111: Dynamic transition duration is used in Material design, this technique
is good for a large number of items.
https://material.io/archive/guidelines/motion/duration-easing.html#duration-easing-dynamic-durations
https://github.com/mui-org/material-ui/blob/e724d98eba018e55e1a684236a2037e24bcf050c/packages/material-ui/src/styles/createTransitions.js#L40-L43
 */function getAutoHeightDuration(height){if((0,_utils_accessibilityUtils__WEBPACK_IMPORTED_MODULE_2__/* .prefersReducedMotion */ .O)()){// Not using 0 because it prevents onTransitionEnd to fire and bubble up :/
// See https://github.com/facebook/docusaurus/pull/8906
return 1;}const constant=height/36;return Math.round((4+15*constant**0.25+constant/5)*10);}function useCollapseAnimation({collapsibleRef,collapsed,animation}){const mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const el=collapsibleRef.current;function getTransitionStyles(){const height=el.scrollHeight;const duration=animation?.duration??getAutoHeightDuration(height);const easing=animation?.easing??DefaultAnimationEasing;return{transition:`height ${duration}ms ${easing}`,height:`${height}px`};}function applyTransitionStyles(){const transitionStyles=getTransitionStyles();el.style.transition=transitionStyles.transition;el.style.height=transitionStyles.height;}// On mount, we just apply styles, no animated transition
if(!mounted.current){applyCollapsedStyle(el,collapsed);mounted.current=true;return undefined;}// eslint-disable-next-line react-compiler/react-compiler
el.style.willChange='height';function startAnimation(){const animationFrame=requestAnimationFrame(()=>{// When collapsing
if(collapsed){applyTransitionStyles();requestAnimationFrame(()=>{el.style.height=CollapsedStyles.height;el.style.overflow=CollapsedStyles.overflow;});}// When expanding
else{el.style.display='block';requestAnimationFrame(()=>{applyTransitionStyles();});}});return()=>cancelAnimationFrame(animationFrame);}return startAnimation();},[collapsibleRef,collapsed,animation]);}function CollapsibleBase({as:As='div',collapsed,children,animation,onCollapseTransitionEnd,className}){const collapsibleRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);useCollapseAnimation({collapsibleRef,collapsed,animation});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(As// @ts-expect-error: the "too complicated type" is produced from
// "CollapsibleElementType" being a huge union
,{ref:collapsibleRef// Refs are contravariant, which is not expressible in TS
,onTransitionEnd:e=>{if(e.propertyName!=='height'){return;}applyCollapsedStyle(collapsibleRef.current,collapsed);onCollapseTransitionEnd?.(collapsed);},className:className,children:children});}function CollapsibleLazy({collapsed,...props}){const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!collapsed);// Updated in effect so that first expansion transition can work
const[lazyCollapsed,setLazyCollapsed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collapsed);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{if(!collapsed){setMounted(true);}},[collapsed]);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{if(mounted){setLazyCollapsed(collapsed);}},[mounted,collapsed]);return mounted?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CollapsibleBase,{...props,collapsed:lazyCollapsed}):null;}/**
 * A headless component providing smooth and uniform collapsing behavior. The
 * component will be invisible (zero height) when collapsed. Doesn't provide
 * interactivity by itself: collapse state is toggled through props.
 */function Collapsible({lazy,...props}){const Comp=lazy?CollapsibleLazy:CollapsibleBase;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Comp,{...props});}

/***/ },

/***/ 5044
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ThemedComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2303);
/* harmony import */ var _contexts_colorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5293);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const AllThemes=(/* unused pure expression or super */ null && (['light','dark']));/**
 * Generic component to render anything themed in light/dark
 * Note: it's preferable to use CSS for theming because this component
 * will need to render all the variants during SSR to avoid a theme flash.
 *
 * Use this only when CSS customizations are not convenient or impossible.
 * For example, rendering themed images or SVGs...
 *
 * @param className applied to all the variants
 * @param children function to render a theme variant
 * @constructor
 */function ThemedComponent({className,children}){const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();const{colorMode}=(0,_contexts_colorMode__WEBPACK_IMPORTED_MODULE_3__/* .useColorMode */ .G)();function getThemesToRender(){if(isBrowser){return colorMode==='dark'?['dark']:['light'];}// We need to render both components on the server / hydration to avoid:
// - a flash of wrong theme before hydration
// - React hydration mismatches
// See https://github.com/facebook/docusaurus/pull/3730
return['light','dark'];}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:getThemesToRender().map(theme=>{const themedElement=children({theme,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(className,_styles_module_css__WEBPACK_IMPORTED_MODULE_4__.themedComponent,_styles_module_css__WEBPACK_IMPORTED_MODULE_4__[`themedComponent--${theme}`])});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:themedElement},theme);})});}

/***/ },

/***/ 5041
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useAnnouncementBar),
/* harmony export */   o: () => (/* binding */ AnnouncementBarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2303);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9466);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9532);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Keep these keys in sync with the inlined script
// See packages/docusaurus-theme-classic/src/inlineScripts.ts
const AnnouncementBarDismissStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)('docusaurus.announcement.dismiss');const IdStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .Wf)('docusaurus.announcement.id');const isDismissedInStorage=()=>AnnouncementBarDismissStorage.get()==='true';const setDismissedInStorage=bool=>AnnouncementBarDismissStorage.set(String(bool));const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){const{announcementBar}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const[isClosed,setClosed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>isBrowser?// On client navigation: init with local storage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false);// Update state after hydration
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setClosed(isDismissedInStorage());},[]);const handleClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{setDismissedInStorage(true);setClosed(true);},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!announcementBar){return;}const{id}=announcementBar;let viewedId=IdStorage.get();// Retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
// cSpell:ignore annoucement
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}const isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[announcementBar]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({isActive:!!announcementBar&&!isClosed,close:handleClose}),[announcementBar,isClosed,handleClose]);}function AnnouncementBarProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Context.Provider,{value:value,children:children});}function useAnnouncementBar(){const api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!api){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .dV('AnnouncementBarProvider');}return api;}

/***/ },

/***/ 5293
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useColorMode),
/* harmony export */   a: () => (/* binding */ ColorModeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2303);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9466);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getSystemColorMode(){return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}function subscribeToMedia(query,listener){const mql=window.matchMedia(query);mql.addEventListener('change',listener);return()=>mql.removeEventListener('change',listener);}function subscribeToSystemColorModeChange(onChange){return subscribeToMedia('(prefers-color-scheme: dark)',()=>onChange(getSystemColorMode()));}const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);const ColorModeStorageKey='theme';const ColorModeStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_3__/* .createStorageSlot */ .Wf)(ColorModeStorageKey);// We use data-theme-choice="system", not an absent attribute
// This is easier to handle for users with CSS
const SystemAttribute='system';// Ensure to always return a valid colorMode even if input is invalid
const coerceToColorMode=colorMode=>colorMode==='dark'?'dark':'light';const coerceToColorModeChoice=colorMode=>colorMode===null||colorMode===SystemAttribute?null:coerceToColorMode(colorMode);const ColorModeAttribute={get:()=>{return coerceToColorMode(document.documentElement.getAttribute('data-theme'));},set:colorMode=>{document.documentElement.setAttribute('data-theme',coerceToColorMode(colorMode));}};const ColorModeChoiceAttribute={get:()=>{return coerceToColorModeChoice(document.documentElement.getAttribute('data-theme-choice'));},set:colorMode=>{document.documentElement.setAttribute('data-theme-choice',coerceToColorModeChoice(colorMode)??SystemAttribute);}};const persistColorModeChoice=newColorMode=>{if(newColorMode===null){ColorModeStorage.del();}else{ColorModeStorage.set(coerceToColorMode(newColorMode));}};// The color mode state is initialized in useEffect on purpose
// to avoid a React hydration mismatch errors
// The useColorMode() hook value lags behind on purpose
// This helps users avoid hydration mismatch errors in their code
// See also https://github.com/facebook/docusaurus/issues/7986
function useColorModeState(){const{colorMode:{defaultMode}}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();// Since the provider may unmount/remount on client navigation, we need to
// reinitialize the state with the correct values to avoid visual glitches.
// See also https://github.com/facebook/docusaurus/issues/11399#issuecomment-3279181314
const[colorMode,setColorModeState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isBrowser?ColorModeAttribute.get():defaultMode);const[colorModeChoice,setColorModeChoiceState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isBrowser?ColorModeChoiceAttribute.get():null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setColorModeState(ColorModeAttribute.get());setColorModeChoiceState(ColorModeChoiceAttribute.get());},[]);return{colorMode,setColorModeState,colorModeChoice,setColorModeChoiceState};}function useContextValue(){const{colorMode:{defaultMode,disableSwitch,respectPrefersColorScheme}}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)();const{colorMode,setColorModeState,colorModeChoice,setColorModeChoiceState}=useColorModeState();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// A site is deployed without disableSwitch
// => User visits the site and has a persisted value
// => Site later enabled disableSwitch
// => Clear the previously stored value to apply the site's setting
if(disableSwitch){ColorModeStorage.del();}},[disableSwitch]);const setColorMode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newColorModeChoice,options={})=>{const{persist=true}=options;// Reset to system/default color mode
if(newColorModeChoice===null){// Set the effective color
const newColorMode=respectPrefersColorScheme?getSystemColorMode():defaultMode;ColorModeAttribute.set(newColorMode);setColorModeState(newColorMode);// Set the chosen color
ColorModeChoiceAttribute.set(null);setColorModeChoiceState(null);}// Happy case, when an explicit color is provided
else{ColorModeAttribute.set(newColorModeChoice);ColorModeChoiceAttribute.set(newColorModeChoice);setColorModeState(newColorModeChoice);setColorModeChoiceState(newColorModeChoice);}if(persist){persistColorModeChoice(newColorModeChoice);}},[setColorModeState,setColorModeChoiceState,respectPrefersColorScheme,defaultMode]);// Synchronize theme color/choice mode with browser storage
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{return ColorModeStorage.listen(e=>{setColorMode(coerceToColorModeChoice(e.newValue));});},[setColorMode]);// Synchronize theme color with system color
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(colorModeChoice!==null||!respectPrefersColorScheme){return undefined;}return subscribeToSystemColorModeChange(newSystemColorMode=>{// Note: we don't use "setColorMode" on purpose
// The system changes should never be considered an explicit theme choice
// They only affect the "effective" color, and should never be persisted
// Note: this listener also fire when printing, see https://github.com/facebook/docusaurus/pull/6490
setColorModeState(newSystemColorMode);ColorModeAttribute.set(newSystemColorMode);});},[respectPrefersColorScheme,colorModeChoice,setColorModeState]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({colorMode,colorModeChoice,setColorMode,get isDarkTheme(){if(false)// removed by dead control flow
{}return colorMode==='dark';},setLightTheme(){if(false)// removed by dead control flow
{}setColorMode('light');},setDarkTheme(){if(false)// removed by dead control flow
{}setColorMode('dark');}}),[colorMode,colorModeChoice,setColorMode]);}function ColorModeProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Context.Provider,{value:value,children:children});}function useColorMode(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context==null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('ColorModeProvider','Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.');}return context;}

/***/ },

/***/ 2069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useNavbarMobileSidebar),
/* harmony export */   e: () => (/* binding */ NavbarMobileSidebarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5600);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4581);
/* harmony import */ var _utils_historyUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7485);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6342);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function useIsNavbarMobileSidebarDisabled(){const secondaryMenuContent=(0,_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_1__/* .useNavbarSecondaryMenuContent */ .YL)();const{items}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */ .p)().navbar;return items.length===0&&!secondaryMenuContent.component;}function useContextValue(){const disabled=useIsNavbarMobileSidebarDisabled();const windowSize=(0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__/* .useWindowSize */ .l)();const shouldRender=!disabled&&windowSize==='mobile';const[shown,setShown]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const toggle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{setShown(s=>!s);},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(windowSize==='desktop'){setShown(false);}},[windowSize]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({disabled,shouldRender,toggle,shown}),[disabled,shouldRender,toggle,shown]);}// A component hook wrapper enables conditional rendering
// See reason here: https://github.com/facebook/docusaurus/issues/10988
function OnHistoryPop({handler}){;(0,_utils_historyUtils__WEBPACK_IMPORTED_MODULE_3__/* .useHistoryPopHandler */ .$Z)(handler);return null;}function NavbarMobileSidebarProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[// Close mobile sidebar on navigation pop
// Most likely firing when using the Android back button (but not only)
// Important: we can only have a single history blocker at a time
// That's why this needs to be rendered conditionally
// See bug report https://github.com/facebook/docusaurus/issues/10988
value.shown&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(OnHistoryPop,{handler:()=>{value.toggle();// Prevent pop navigation; seems desirable enough
// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
return false;}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Context.Provider,{value:value,children:children})]});}function useNavbarMobileSidebar(){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context===undefined){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .dV('NavbarMobileSidebarProvider');}return context;}

/***/ },

/***/ 5600
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YL: () => (/* binding */ useNavbarSecondaryMenuContent),
/* harmony export */   y_: () => (/* binding */ NavbarSecondaryMenuContentProvider)
/* harmony export */ });
/* unused harmony export NavbarSecondaryMenuFiller */
/* unused harmony import specifier */ var useContext;
/* unused harmony import specifier */ var useEffect;
/* unused harmony import specifier */ var ReactContextError;
/* unused harmony import specifier */ var useShallowMemoObject;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/** @internal */function NavbarSecondaryMenuContentProvider({children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({component:null,props:null});return(/*#__PURE__*/// @ts-expect-error: this context is hard to type
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context.Provider,{value:value,children:children}));}/** @internal */function useNavbarSecondaryMenuContent(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV('NavbarSecondaryMenuContentProvider');}return value[0];}/**
 * This component renders nothing by itself, but it fills the placeholder in the
 * generic secondary menu layout. This reduces coupling between the main layout
 * and the specific page.
 *
 * This kind of feature is often called portal/teleport/gateway/outlet...
 * Various unmaintained React libs exist. Most up-to-date one:
 * https://github.com/gregberge/react-teleporter
 * Not sure any of those is safe regarding concurrent mode.
 */function NavbarSecondaryMenuFiller({component,props}){const context=useContext(Context);if(!context){throw new ReactContextError('NavbarSecondaryMenuContentProvider');}const[,setContent]=context;// To avoid useless context re-renders, props are memoized shallowly
const memoizedProps=useShallowMemoObject(props);useEffect(()=>{// @ts-expect-error: this context is hard to type
setContent({component,props:memoizedProps});},[setContent,component,memoizedProps]);useEffect(()=>()=>setContent({component:null,props:null}),[setContent]);return null;}

/***/ },

/***/ 8695
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NavbarSecondaryMenuDisplayProvider),
/* harmony export */   T: () => (/* binding */ useNavbarSecondaryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9532);
/* harmony import */ var _navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2069);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5600);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){const mobileSidebar=(0,_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_2__/* .useNavbarMobileSidebar */ .M)();const content=(0,_content__WEBPACK_IMPORTED_MODULE_3__/* .useNavbarSecondaryMenuContent */ .YL)();const[shown,setShown]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const hasContent=content.component!==null;const previousHasContent=(0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .usePrevious */ .ZC)(hasContent);// When content is become available for the first time (set in useEffect)
// we set this content to be shown!
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const contentBecameAvailable=hasContent&&!previousHasContent;if(contentBecameAvailable){setShown(true);}},[hasContent,previousHasContent]);// On sidebar close, secondary menu is set to be shown on next re-opening
// (if any secondary menu content available)
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!hasContent){setShown(false);return;}if(!mobileSidebar.shown){setShown(true);}},[mobileSidebar.shown,hasContent]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[shown,setShown],[shown]);}/** @internal */function NavbarSecondaryMenuDisplayProvider({children}){const value=useContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Context.Provider,{value:value,children:children});}function renderElement(content){if(content.component){const Comp=content.component;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Comp,{...content.props});}return undefined;}/** Wires the logic for rendering the mobile navbar secondary menu. */function useNavbarSecondaryMenu(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV('NavbarSecondaryMenuDisplayProvider');}const[shown,setShown]=value;const hide=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setShown(false),[setShown]);const content=(0,_content__WEBPACK_IMPORTED_MODULE_3__/* .useNavbarSecondaryMenuContent */ .YL)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({shown,hide,content:renderElement(content)}),[hide,content,shown]);}

/***/ },

/***/ 1182
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useHideableNavbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_useLocationChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5062);
/* harmony import */ var _utils_scrollUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3104);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Wires the imperative logic of a hideable navbar.
 * @param hideOnScroll If `false`, this hook is basically a no-op.
 */function useHideableNavbar(hideOnScroll){const[isNavbarVisible,setIsNavbarVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hideOnScroll);const isFocusedAnchor=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);const navbarHeight=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);const navbarRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(node=>{if(node!==null){navbarHeight.current=node.getBoundingClientRect().height;}},[]);(0,_utils_scrollUtils__WEBPACK_IMPORTED_MODULE_2__/* .useScrollPosition */ .Mq)(({scrollY:scrollTop},lastPosition)=>{if(!hideOnScroll){return;}// Needed mostly for handling rubber band scrolling.
// See https://github.com/facebook/docusaurus/pull/5721
if(scrollTop<navbarHeight.current){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}const lastScrollTop=lastPosition?.scrollY;const documentHeight=document.documentElement.scrollHeight-navbarHeight.current;const windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}});(0,_utils_useLocationChange__WEBPACK_IMPORTED_MODULE_1__/* .useLocationChange */ .$)(locationChangeEvent=>{if(!hideOnScroll){return;}// See https://github.com/facebook/docusaurus/pull/8059#issuecomment-1239639480
const currentHash=locationChangeEvent.location.hash;const currentHashAnchor=currentHash?document.getElementById(currentHash.substring(1)):undefined;if(currentHashAnchor){isFocusedAnchor.current=true;setIsNavbarVisible(false);return;}setIsNavbarVisible(true);});return{navbarRef,isNavbarVisible};}

/***/ },

/***/ 3458
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useLockBodyScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Side-effect that locks the document body's scroll throughout the lifetime of
 * the containing component. e.g. when the mobile sidebar is expanded.
 */function useLockBodyScroll(lock=true){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{document.body.style.overflow=lock?'hidden':'visible';return()=>{document.body.style.overflow='visible';};},[lock]);}

/***/ },

/***/ 4581
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const windowSizes={desktop:'desktop',mobile:'mobile',ssr:'ssr'};// Note: this value is also hardcoded in Infima
// Both JS and CSS must have the same value
// Updating this JS value alone is not enough
// See https://github.com/facebook/docusaurus/issues/9603
const DesktopBreakpoint=996;function getWindowSize(desktopBreakpoint){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM){throw new Error('getWindowSize() should only be called after React hydration');}return window.innerWidth>desktopBreakpoint?windowSizes.desktop:windowSizes.mobile;}/**
 * Gets the current window size as an enum value. We don't want it to return the
 * actual width value, so that it only re-renders once a breakpoint is crossed.
 *
 * It may return `"ssr"`, which is very important to handle hydration FOUC or
 * layout shifts. You have to handle it explicitly upfront. On the server, you
 * may need to render BOTH the mobile/desktop elements (and hide one of them
 * with mediaquery). We don't return `undefined` on purpose, to make it more
 * explicit.
 */function useWindowSize({desktopBreakpoint=DesktopBreakpoint}={}){const[windowSize,setWindowSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>// super important to return a constant value to avoid hydration mismatch
// see https://github.com/facebook/docusaurus/issues/9379
'ssr');(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function updateWindowSize(){setWindowSize(getWindowSize(desktopBreakpoint));}updateWindowSize();window.addEventListener('resize',updateWindowSize);return()=>{window.removeEventListener('resize',updateWindowSize);};},[desktopBreakpoint]);return windowSize;}

/***/ },

/***/ 7559
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Please do not modify the classnames! This is a breaking change, and annoying
// for users!
/**
 * These class names are used to style page layouts in Docusaurus, meant to be
 * targeted by user-provided custom CSS selectors.
 */const ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',blogAuthorsListPage:'blog-authors-list-page',blogAuthorsPostsPage:'blog-authors-posts-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},// TODO Docusaurus v4: remove old classes?
wrapper:{main:'main-wrapper',// replaced by theme-layout-main
// TODO these wrapper class names are now quite useless
// TODO do breaking change later in 3.0
// we already add plugin name/id class on <html>: that's enough
blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button',codeBlock:'theme-code-block',admonition:'theme-admonition',unlistedBanner:'theme-unlisted-banner',draftBanner:'theme-draft-banner',admonitionType:type=>`theme-admonition-${type}`},announcementBar:{container:'theme-announcement-bar'},tabs:{container:'theme-tabs-container'},layout:{navbar:{container:'theme-layout-navbar',containerLeft:'theme-layout-navbar-left',containerRight:'theme-layout-navbar-right',mobileSidebar:{container:'theme-layout-navbar-sidebar',panel:'theme-layout-navbar-sidebar-panel'}},main:{container:'theme-layout-main'},footer:{container:'theme-layout-footer',column:'theme-layout-footer-column'}},/**
     * Follows the naming convention "theme-{blog,doc,version,page}?-<suffix>"
     */docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docBreadcrumbs:'theme-doc-breadcrumbs',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarContainer:'theme-doc-sidebar-container',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:level=>`theme-doc-sidebar-item-category-level-${level}`,docSidebarItemLinkLevel:level=>`theme-doc-sidebar-item-link-level-${level}`,// TODO add other stable classNames here
docCard:{container:'theme-doc-card-container',heading:'theme-doc-card-heading',icon:'theme-doc-card-icon',title:'theme-doc-card-title',description:'theme-doc-card-description'}},blog:{// TODO add other stable classNames here
blogFooterTagsRow:'theme-blog-footer-tags-row',blogFooterEditMetaRow:'theme-blog-footer-edit-meta-row'},pages:{pageFooterEditMetaRow:'theme-pages-footer-edit-meta-row'}};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "G", 0, /* binding */ ThemeClassNames
/* harmony export */ ]);


/***/ },

/***/ 3109
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prefersReducedMotion(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches;}

/***/ },

/***/ 1840
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useAnchorTargetClassName)
/* harmony export */ });
/* harmony import */ var _useThemeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6342);
/* harmony import */ var _anchorUtils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9622);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * When the navbar is sticky, this ensures that when clicking a hash link,
 * we do not navigate to an anchor that will appear below the navbar.
 * This happens in particular for MDX headings and footnotes.
 *
 * See https://github.com/facebook/docusaurus/issues/11232
 * See also headings case https://x.com/JoshWComeau/status/1332015868725891076
 */function useAnchorTargetClassName(id){const{navbar:{hideOnScroll}}=(0,_useThemeConfig__WEBPACK_IMPORTED_MODULE_0__/* .useThemeConfig */ .p)();if(typeof id==='undefined'){return undefined;}return hideOnScroll?_anchorUtils_module_css__WEBPACK_IMPORTED_MODULE_1__/* .anchorTargetHideOnScrollNavbar */ .d:_anchorUtils_module_css__WEBPACK_IMPORTED_MODULE_1__/* .anchorTargetStickyNavbar */ .K;}

/***/ },

/***/ 2685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a2: () => (/* binding */ ErrorBoundaryTryAgainButton),
/* harmony export */   bq: () => (/* binding */ ErrorBoundaryError),
/* harmony export */   k2: () => (/* binding */ ErrorCauseBoundary)
/* harmony export */ });
/* unused harmony export ErrorBoundaryErrorMessageFallback */
/* unused harmony import specifier */ var styles;
/* unused harmony import specifier */ var _jsxs;
/* unused harmony import specifier */ var _jsx;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(986);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/* harmony import */ var _errorBoundaryUtils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7983);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorBoundaryTryAgainButton(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",...props,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.ErrorPageContent.tryAgain",description:"The label of the button to try again rendering when the React error boundary captures an error",children:"Try again"})});}// A very simple reusable ErrorBoundary fallback component
function ErrorBoundaryErrorMessageFallback({error,tryAgain}){return/*#__PURE__*/_jsxs("div",{className:styles.errorBoundaryFallback,children:[/*#__PURE__*/_jsx("p",{children:error.message}),/*#__PURE__*/_jsx(ErrorBoundaryTryAgainButton,{onClick:tryAgain})]});}function ErrorBoundaryError({error}){const causalChain=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .getErrorCausalChain */ .rA)(error);const fullMessage=causalChain.map(e=>e.message).join('\n\nCause:\n');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{className:_errorBoundaryUtils_module_css__WEBPACK_IMPORTED_MODULE_3__/* .errorBoundaryError */ .X,children:fullMessage});}/**
 * This component is useful to wrap a low-level error into a more meaningful
 * error with extra context, using the ES error-cause feature.
 *
 * <ErrorCauseBoundary
 *   onError={(error) => new Error("extra context message",{cause: error})}
 * >
 *   <RiskyComponent>
 * </ErrorCauseBoundary>
 */class ErrorCauseBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{componentDidCatch(error,errorInfo){throw this.props.onError(error,errorInfo);}render(){return this.props.children;}}

/***/ },

/***/ 3106
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ isMultiColumnFooterLinks)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A rough duck-typing about whether the `footer.links` is intended to be multi-
 * column.
 */function isMultiColumnFooterLinks(links){return'title'in links[0];}

/***/ },

/***/ 7485
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $Z: () => (/* binding */ useHistoryPopHandler),
/* harmony export */   Hl: () => (/* binding */ useHistorySelector),
/* harmony export */   jy: () => (/* binding */ mergeSearchStrings)
/* harmony export */ });
/* unused harmony exports useQueryStringValue, useQueryString, useQueryStringList, useClearQueryString, mergeSearchParams */
/* unused harmony import specifier */ var useCallback;
/* unused harmony import specifier */ var useMemo;
/* unused harmony import specifier */ var useHistory;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to register a handler that will be called on history actions (pop,
 * push, replace). If the handler returns `false`, the navigation transition
 * will be blocked/cancelled.
 */function useHistoryActionHandler(handler){const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const stableHandler=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(handler);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
()=>history.block((location,action)=>stableHandler(location,action)),[history,stableHandler]);}/**
 * Permits to register a handler that will be called on history pop navigation
 * (backward/forward). If the handler returns `false`, the backward/forward
 * transition will be blocked. Unfortunately there's no good way to detect the
 * "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler((location,action)=>{if(action==='POP'){// Maybe block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}/**
 * Permits to efficiently subscribe to a slice of the history
 * See https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api
 * @param selector
 */function useHistorySelector(selector){const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(history.listen,()=>selector(history),()=>selector({...history,location:{...history.location,// On the server/hydration, these attributes should always be empty
// Forcing empty state makes this hook safe from hydration errors
search:'',hash:'',state:undefined}}));}/**
 * Permits to efficiently subscribe to a specific querystring value
 * @param key
 */function useQueryStringValue(key){return useHistorySelector(history=>{if(key===null){return null;}return new URLSearchParams(history.location.search).get(key);});}function useQueryStringUpdater(key){const history=useHistory();return useCallback((newValue,options)=>{const searchParams=new URLSearchParams(history.location.search);if(newValue){searchParams.set(key,newValue);}else{searchParams.delete(key);}const updateHistory=options?.push?history.push:history.replace;updateHistory({search:searchParams.toString()});},[key,history]);}function useQueryString(key){const value=useQueryStringValue(key)??'';const update=useQueryStringUpdater(key);return[value,update];}function useQueryStringListValues(key){// Unfortunately we can't just use searchParams.getAll(key) in the selector
// It would create a new array every time and lead to an infinite loop...
// The selector has to return a primitive/string value to avoid that...
const arrayJsonString=useHistorySelector(history=>{const values=new URLSearchParams(history.location.search).getAll(key);return JSON.stringify(values);});return useMemo(()=>JSON.parse(arrayJsonString),[arrayJsonString]);}function useQueryStringListUpdater(key){const history=useHistory();const setValues=useCallback((update,options)=>{const searchParams=new URLSearchParams(history.location.search);const newValues=Array.isArray(update)?update:update(searchParams.getAll(key));searchParams.delete(key);newValues.forEach(v=>searchParams.append(key,v));const updateHistory=options?.push?history.push:history.replace;updateHistory({search:searchParams.toString()});},[history,key]);return setValues;}function useQueryStringList(key){const values=useQueryStringListValues(key);const setValues=useQueryStringListUpdater(key);return[values,setValues];}function useClearQueryString(){const history=useHistory();return useCallback(()=>{history.replace({search:undefined});},[history]);}function mergeSearchParams(params,strategy){const result=new URLSearchParams();for(const item of params){for(const[key,value]of item.entries()){if(strategy==='append'){result.append(key,value);}else{result.set(key,value);}}}return result;}function mergeSearchStrings(searchStrings,strategy){const params=mergeSearchParams(searchStrings.map(s=>new URLSearchParams(s??'')),strategy);const str=params.toString();return str?`?${str}`:str;}

/***/ },

/***/ 1682
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sb: () => (/* binding */ uniq)
/* harmony export */ });
/* unused harmony exports duplicates, groupBy */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A replacement of lodash in client code
/**
 * Gets the duplicate values in an array.
 * @param arr The array.
 * @param comparator Compares two values and returns `true` if they are equal
 * (duplicated).
 * @returns Value of the elements `v` that have a preceding element `u` where
 * `comparator(u, v) === true`. Values within the returned array are not
 * guaranteed to be unique.
 */function duplicates(arr,comparator=(a,b)=>a===b){return arr.filter((v,vIndex)=>arr.findIndex(u=>comparator(u,v))!==vIndex);}/**
 * Remove duplicate array items (similar to `_.uniq`)
 * @param arr The array.
 * @returns An array with duplicate elements removed by reference comparison.
 */function uniq(arr){// Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
return Array.from(new Set(arr));}// TODO 2025: replace by std Object.groupBy ?
// This is a local polyfill with exact same TS signature
// see https://github.com/microsoft/TypeScript/blob/main/src/lib/esnext.object.d.ts
function groupBy(items,keySelector){const result={};let index=0;for(const item of items){const key=keySelector(item,index);result[key]??=[];result[key].push(item);index+=1;}return result;}

/***/ },

/***/ 5500
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ PluginHtmlClassNameProvider),
/* harmony export */   be: () => (/* binding */ PageMetadata)
/* harmony export */ });
/* unused harmony export HtmlClassNameProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5260);
/* harmony import */ var _docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6803);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6025);
/* harmony import */ var _titleFormatterUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TitleMetadata({title}){const titleFormatter=(0,_titleFormatterUtils__WEBPACK_IMPORTED_MODULE_5__/* .useTitleFormatter */ .s$)();const formattedTitle=titleFormatter.format(title);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("title",{children:formattedTitle}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta",{property:"og:title",content:formattedTitle})]});}function DescriptionMetadata({description}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta",{name:"description",content:description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta",{property:"og:description",content:description})]});}function ImageMetadata({image}){const{withBaseUrl}=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_4__/* .useBaseUrlUtils */ .hH)();const pageImage=withBaseUrl(image,{absolute:true});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta",{property:"og:image",content:pageImage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta",{name:"twitter:image",content:pageImage})]});}function KeywordsMetadata({keywords}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta",{name:"keywords",content:// https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(keywords)?keywords.join(','):keywords})});}/**
 * Helper component to manipulate page metadata and override site defaults.
 * Works in the same way as Helmet.
 */function PageMetadata({title,description,keywords,image,children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[title&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TitleMetadata,{title:title}),description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DescriptionMetadata,{description:description}),keywords&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(KeywordsMetadata,{keywords:keywords}),image&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ImageMetadata,{image:image}),children&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:children})]});}const HtmlClassNameContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);/**
 * Every layer of this provider will append a class name to the HTML element.
 * There's no consumer for this hook: it's side-effect-only. This wrapper is
 * necessary because Helmet does not "merge" classes.
 * @see https://github.com/staylor/react-helmet-async/issues/161
 */function HtmlClassNameProvider({className:classNameProp,children}){const classNameContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(HtmlClassNameContext);const className=(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(classNameContext,classNameProp);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(HtmlClassNameContext.Provider,{value:className,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("html",{className:className})}),children]});}function pluginNameToClassName(pluginName){return`plugin-${pluginName.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi,'')}`;}/**
 * A very thin wrapper around `HtmlClassNameProvider` that adds the plugin ID +
 * name to the HTML class name.
 */function PluginHtmlClassNameProvider({children}){const routeContext=(0,_docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();const nameClass=pluginNameToClassName(routeContext.plugin.name);const idClass=`plugin-id-${routeContext.plugin.id}`;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(HtmlClassNameProvider,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(nameClass,idClass),children:children});}

/***/ },

/***/ 6305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ splitNavbarItems),
/* harmony export */   G: () => (/* binding */ NavbarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _contexts_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2069);
/* harmony import */ var _contexts_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5600);
/* harmony import */ var _contexts_navbarSecondaryMenu_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultNavItemPosition='right';/**
 * Split links by left/right. If position is unspecified, fallback to right.
 */function splitNavbarItems(items){function isLeft(item){return(item.position??DefaultNavItemPosition)==='left';}const leftItems=items.filter(isLeft);const rightItems=items.filter(item=>!isLeft(item));return[leftItems,rightItems];}/**
 * Composes multiple navbar state providers that are mutually dependent and
 * hence can't be re-ordered.
 */function NavbarProvider({children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_contexts_navbarSecondaryMenu_content__WEBPACK_IMPORTED_MODULE_2__/* .NavbarSecondaryMenuContentProvider */ .y_,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_contexts_navbarMobileSidebar__WEBPACK_IMPORTED_MODULE_1__/* .NavbarMobileSidebarProvider */ .e,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_contexts_navbarSecondaryMenu_display__WEBPACK_IMPORTED_MODULE_3__/* .NavbarSecondaryMenuDisplayProvider */ .N,{children:children})})});}

/***/ },

/***/ 9532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZC: () => (/* binding */ usePrevious),
/* harmony export */   _q: () => (/* binding */ useEvent),
/* harmony export */   dV: () => (/* binding */ ReactContextError),
/* harmony export */   fM: () => (/* binding */ composeProviders)
/* harmony export */ });
/* unused harmony export useShallowMemoObject */
/* unused harmony import specifier */ var useMemo;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Temporary userland implementation until an official hook is implemented
 * See RFC: https://github.com/reactjs/rfcs/pull/220
 *
 * Permits to transform an unstable callback (like an arrow function provided as
 * props) to a "stable" callback that is safe to use in a `useEffect` dependency
 * array. Useful to avoid React stale closure problems + avoid useless effect
 * re-executions.
 *
 * This generally works but has some potential drawbacks, such as
 * https://github.com/facebook/react/issues/16956#issuecomment-536636418
 */function useEvent(callback){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{ref.current=callback;},[callback]);// @ts-expect-error: TS is right that this callback may be a supertype of T,
// but good enough for our use
return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>ref.current(...args),[]);}/**
 * Gets `value` from the last render.
 */function usePrevious(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(()=>{ref.current=value;});// TODO need to fix this React Compiler lint error
//  probably requires changing the API though
// eslint-disable-next-line react-compiler/react-compiler
return ref.current;}/**
 * This error is thrown when a context is consumed outside its provider. Allows
 * reusing a generic error message format and reduces bundle size. The hook's
 * name will be extracted from its stack, so only the provider's name is needed.
 */class ReactContextError extends Error{constructor(providerName,additionalInfo){super();this.name='ReactContextError';this.message=`Hook ${this.stack?.split('\n')[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)?.groups.name??''} is called outside the <${providerName}>. ${additionalInfo??''}`;}}/**
 * Shallow-memoize an object. This means the returned object will be the same as
 * the previous render if the property keys and values did not change. This
 * works for simple cases: when property values are primitives or stable
 * objects.
 *
 * @param obj
 */function useShallowMemoObject(obj){const deps=Object.entries(obj);// Sort by keys to make it order-insensitive
deps.sort((a,b)=>a[0].localeCompare(b[0]));// eslint-disable-next-line react-compiler/react-compiler,react-hooks/exhaustive-deps
return useMemo(()=>obj,deps.flat());}/**
 * Creates a single React provider from an array of existing providers
 * assuming providers only take "children" as props.
 *
 * Prevents the annoying React element nesting
 * Example here: https://getfrontend.tips/compose-multiple-react-providers/
 *
 * The order matters:
 * - The first provider is at the top of the tree.
 * - The last provider is the most nested one
 *
 * @param providers array of providers to compose
 */function composeProviders(providers){// Creates a single React component: it's cheaper to compose JSX elements
return({children})=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:providers.reduceRight((element,CurrentProvider)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CurrentProvider,{children:element}),children)});}

/***/ },

/***/ 1252
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ isRegexpStringMatch)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Matches a string regex (as provided from the config) against a target in a
 * null-safe fashion, case insensitive and global.
 */function isRegexpStringMatch(regexAsString,valueToTest){if(typeof regexAsString==='undefined'||typeof valueToTest==='undefined'){return false;}return new RegExp(regexAsString,'gi').test(valueToTest);}

/***/ },

/***/ 9169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ys: () => (/* binding */ isSamePath)
/* harmony export */ });
/* unused harmony exports findHomePageRoute, useHomePageRoute */
/* unused harmony import specifier */ var useMemo;
/* unused harmony import specifier */ var generatedRoutes;
/* unused harmony import specifier */ var useDocusaurusContext;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4378);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Compare the 2 paths, case insensitive and ignoring trailing slash
 */function isSamePath(path1,path2){const normalize=pathname=>(!pathname||pathname.endsWith('/')?pathname:`${pathname}/`)?.toLowerCase();return normalize(path1)===normalize(path2);}/**
 * Note that sites don't always have a homepage in practice, so we can't assume
 * that linking to '/' is always safe.
 * @see https://github.com/facebook/docusaurus/pull/6517#issuecomment-1048709116
 */function findHomePageRoute({baseUrl,routes:initialRoutes}){function isHomePageRoute(route){return route.path===baseUrl&&route.exact===true;}function isHomeParentRoute(route){return route.path===baseUrl&&!route.exact;}function doFindHomePageRoute(routes){if(routes.length===0){return undefined;}const homePage=routes.find(isHomePageRoute);if(homePage){return homePage;}const indexSubRoutes=routes.filter(isHomeParentRoute).flatMap(route=>route.routes??[]);return doFindHomePageRoute(indexSubRoutes);}return doFindHomePageRoute(initialRoutes);}/**
 * Fetches the route that points to "/". Use this instead of the naive "/",
 * because the homepage may not exist.
 */function useHomePageRoute(){const{baseUrl}=useDocusaurusContext().siteConfig;return useMemo(()=>findHomePageRoute({routes:generatedRoutes,baseUrl}),[baseUrl]);}

/***/ },

/***/ 3104
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mq: () => (/* binding */ useScrollPosition),
/* harmony export */   Tv: () => (/* binding */ ScrollControllerProvider)
/* harmony export */ });
/* unused harmony exports useScrollController, useScrollPositionBlocker, useSmoothScrollTo */
/* unused harmony import specifier */ var useRef;
/* unused harmony import specifier */ var useCallback;
/* unused harmony import specifier */ var useMemo;
/* unused harmony import specifier */ var useIsBrowser;
/* unused harmony import specifier */ var useIsomorphicLayoutEffect;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2303);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){const scrollEventsEnabledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({scrollEventsEnabledRef,enableScrollEvents:()=>{scrollEventsEnabledRef.current=true;},disableScrollEvents:()=>{scrollEventsEnabledRef.current=false;}}),[]);}const ScrollMonitorContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function ScrollControllerProvider({children}){const value=useScrollControllerContextValue();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ScrollMonitorContext.Provider,{value:value,children:children});}/**
 * We need a way to update the scroll position while ignoring scroll events
 * so as not to toggle Navbar/BackToTop visibility.
 *
 * This API permits to temporarily disable/ignore scroll events. Motivated by
 * https://github.com/facebook/docusaurus/pull/5618
 */function useScrollController(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollMonitorContext);if(context==null){throw new _reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .dV('ScrollControllerProvider');}return context;}const getScrollPosition=()=>_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;/**
 * This hook fires an effect when the scroll position changes. The effect will
 * be provided with the before/after scroll positions. Note that the effect may
 * not be always run: if scrolling is disabled through `useScrollController`, it
 * will be a no-op.
 *
 * @see {@link useScrollController}
 */function useScrollPosition(effect,deps=[]){const{scrollEventsEnabledRef}=useScrollController();const lastPositionRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());const dynamicEffect=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ ._q)(effect);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleScroll=()=>{if(!scrollEventsEnabledRef.current){return;}const currentPosition=getScrollPosition();dynamicEffect(currentPosition,lastPositionRef.current);lastPositionRef.current=currentPosition;};const opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return()=>window.removeEventListener('scroll',handleScroll,opts);// eslint-disable-next-line react-compiler/react-compiler
// eslint-disable-next-line react-hooks/exhaustive-deps
},[dynamicEffect,scrollEventsEnabledRef,...deps]);}function useScrollPositionSaver(){const lastElementRef=useRef({elem:null,top:0});const save=useCallback(elem=>{lastElementRef.current={elem,top:elem.getBoundingClientRect().top};},[]);const restore=useCallback(()=>{const{current:{elem,top}}=lastElementRef;if(!elem){return{restored:false};}const newTop=elem.getBoundingClientRect().top;const heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return useMemo(()=>({save,restore}),[restore,save]);}/**
 * This hook permits to "block" the scroll position of a DOM element.
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change.
 *
 * Feature motivated by the Tabs groups: clicking on a tab may affect tabs of
 * the same group upper in the tree, yet to avoid a bad UX, the clicked tab must
 * remain under the user mouse.
 *
 * @see https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){const scrollController=useScrollController();const scrollPositionSaver=useScrollPositionSaver();const nextLayoutEffectCallbackRef=useRef(undefined);const blockElementScrollPositionUntilNextRender=useCallback(el=>{scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=()=>{const{restored}=scrollPositionSaver.restore();nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event. We
// need to wait for next scroll event to happen before enabling the
// scrollController events again.
if(restored){const handleScrollRestoreEvent=()=>{scrollController.enableScrollEvents();window.removeEventListener('scroll',handleScrollRestoreEvent);};window.addEventListener('scroll',handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController,scrollPositionSaver]);useIsomorphicLayoutEffect(()=>{// Queuing permits to restore scroll position after all useLayoutEffect
// have run, and yet preserve the sync nature of the scroll restoration
// See https://github.com/facebook/docusaurus/issues/8625
queueMicrotask(()=>nextLayoutEffectCallbackRef.current?.());});return{blockElementScrollPositionUntilNextRender};}function smoothScrollNative(top){window.scrollTo({top,behavior:'smooth'});return()=>{// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollPolyfill(top){let raf=null;const isUpScroll=document.documentElement.scrollTop>top;function rafRecursion(){const currentScroll=document.documentElement.scrollTop;if(isUpScroll&&currentScroll>top||!isUpScroll&&currentScroll<top){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor((currentScroll-top)*0.85)+top);}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return()=>raf&&cancelAnimationFrame(raf);}/**
 * A "smart polyfill" of `window.scrollTo({ top, behavior: "smooth" })`.
 * This currently always uses a polyfilled implementation unless
 * `scroll-behavior: smooth` has been set in CSS, because native support
 * detection for scroll behavior seems unreliable.
 *
 * This hook does not do anything by itself: it returns a start and a stop
 * handle. You can execute either handle at any time.
 */function useSmoothScrollTo(){const cancelRef=useRef(null);const isBrowser=useIsBrowser();// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
// For now, we only use native scroll behavior if smooth is already set,
// because otherwise the polyfill produces a weird UX when both CSS and JS try
// to scroll a page, and they cancel each other.
const supportsNativeSmoothScrolling=isBrowser&&getComputedStyle(document.documentElement).scrollBehavior==='smooth';return{startScroll:top=>{cancelRef.current=supportsNativeSmoothScrolling?smoothScrollNative(top):smoothScrollPolyfill(top);},cancelScroll:()=>cancelRef.current?.()};}

/***/ },

/***/ 2967
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DEFAULT_SEARCH_TAG='default';
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "C", 0, /* binding */ DEFAULT_SEARCH_TAG
/* harmony export */ ]);


/***/ },

/***/ 5236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ SkipToContentLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(986);
/* harmony import */ var _useLocationChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5062);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * The id of the element that should become focused on a page
 * that does not have a <main> html tag.
 * Focusing the Docusaurus Layout children is a reasonable fallback.
 *
 * __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
 * https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
 */const SkipToContentFallbackId='__docusaurus_skipToContent_fallback';/**
 * Returns the skip to content element to focus when the link is clicked.
 */function getSkipToContentTarget(){return(// Try to focus the <main> in priority
// Note: this will only work if JS is enabled
// See https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
document.querySelector('main:first-of-type')??// Then try to focus the fallback element (usually the Layout children)
document.getElementById(SkipToContentFallbackId));}function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}/** This hook wires the logic for a skip-to-content link. */function useSkipToContent(){const containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const{action}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{e.preventDefault();const targetElement=getSkipToContentTarget();if(targetElement){programmaticFocus(targetElement);}},[]);// "Reset" focus when navigating.
// See https://github.com/facebook/docusaurus/pull/8204#issuecomment-1276547558
(0,_useLocationChange__WEBPACK_IMPORTED_MODULE_3__/* .useLocationChange */ .$)(({location})=>{if(containerRef.current&&!location.hash&&action==='PUSH'){programmaticFocus(containerRef.current);}});return{containerRef,onClick};}const DefaultSkipToContentLabel=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .T)({id:'theme.common.skipToMainContent',description:'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',message:'Skip to main content'});function SkipToContentLink(props){const linkLabel=props.children??DefaultSkipToContentLabel;const{containerRef,onClick}=useSkipToContent();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{ref:containerRef,role:"region","aria-label":DefaultSkipToContentLabel,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{...props,// Note this is a fallback href in case JS is disabled
// It has limitations, see https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
href:`#${SkipToContentFallbackId}`,onClick:onClick,children:linkLabel})});}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "j", 0, /* binding */ SkipToContentFallbackId
/* harmony export */ ]);


/***/ },

/***/ 9466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wf: () => (/* binding */ createStorageSlot)
/* harmony export */ });
/* unused harmony exports useStorageSlot, listStorageKeys */
/* unused harmony import specifier */ var useState;
/* unused harmony import specifier */ var useCallback;
/* unused harmony import specifier */ var useSyncExternalStore;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _generated_site_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4180);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultStorageType=_generated_site_storage__WEBPACK_IMPORTED_MODULE_1__/* .type */ .N;function applyNamespace(storageKey){return`${storageKey}${_generated_site_storage__WEBPACK_IMPORTED_MODULE_1__/* .namespace */ .M}`;}// window.addEventListener('storage') only works for different windows...
// so for current window we have to dispatch the event manually
// Now we can listen for both cross-window / current-window storage changes!
// see https://stackoverflow.com/a/71177640/82609
// see https://stackoverflow.com/questions/26974084/listen-for-changes-with-localstorage-on-the-same-window
function dispatchChangeEvent({key,oldValue,newValue,storage}){// If we set multiple times the same storage value, events should not be fired
// The native events behave this way, so our manual event dispatch should
// rather behave exactly the same. Not doing so might create infinite loops.
// See https://github.com/facebook/docusaurus/issues/8594
if(oldValue===newValue){return;}const event=document.createEvent('StorageEvent');event.initStorageEvent('storage',false,false,key,oldValue,newValue,window.location.href,storage);window.dispatchEvent(event);}/**
 * Will return `null` if browser storage is unavailable (like running Docusaurus
 * in an iframe). This should NOT be called in SSR.
 *
 * @see https://github.com/facebook/docusaurus/pull/4501
 */function getBrowserStorage(storageType=DefaultStorageType){if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}try{return window[storageType];}catch(err){logOnceBrowserStorageNotAvailableWarning(err);return null;}}let hasLoggedBrowserStorageNotAvailableWarning=false;/**
 * Poor man's memoization to avoid logging multiple times the same warning.
 * Sometimes, `localStorage`/`sessionStorage` is unavailable due to browser
 * policies.
 */function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn(`Docusaurus browser storage is not available.
Possible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.`,error);hasLoggedBrowserStorageNotAvailableWarning=true;}}const NoopStorageSlot={get:()=>null,set:()=>{},del:()=>{},listen:()=>()=>{}};// Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error(`Illegal storage API usage for storage key "${key}".
Docusaurus storage APIs are not supposed to be called on the server-rendering process.
Please only call storage APIs in effects and event handlers.`);}return{get:throwError,set:throwError,del:throwError,listen:throwError};}/**
 * Creates an interface to work on a particular key in the storage model.
 * Note that this function only initializes the interface, but doesn't allocate
 * anything by itself (i.e. no side-effects).
 *
 * The API is fail-safe, since usage of browser storage should be considered
 * unreliable. Local storage might simply be unavailable (iframe + browser
 * security) or operations might fail individually. Please assume that using
 * this API can be a no-op. See also https://github.com/facebook/docusaurus/issues/6036
 */function createStorageSlot(keyInput,options){const key=applyNamespace(keyInput);if(typeof window==='undefined'){return createServerStorageSlot(key);}const storage=getBrowserStorage(options?.persistence);if(storage===null){return NoopStorageSlot;}return{get:()=>{try{return storage.getItem(key);}catch(err){console.error(`Docusaurus storage error, can't get key=${key}`,err);return null;}},set:newValue=>{try{const oldValue=storage.getItem(key);storage.setItem(key,newValue);dispatchChangeEvent({key,oldValue,newValue,storage});}catch(err){console.error(`Docusaurus storage error, can't set ${key}=${newValue}`,err);}},del:()=>{try{const oldValue=storage.getItem(key);storage.removeItem(key);dispatchChangeEvent({key,oldValue,newValue:null,storage});}catch(err){console.error(`Docusaurus storage error, can't delete key=${key}`,err);}},listen:onChange=>{try{const listener=event=>{if(event.storageArea===storage&&event.key===key){onChange(event);}};window.addEventListener('storage',listener);return()=>window.removeEventListener('storage',listener);}catch(err){console.error(`Docusaurus storage error, can't listen for changes of key=${key}`,err);return()=>{};}}};}function useStorageSlot(key,options){// Not ideal but good enough: assumes storage slot config is constant
const[storageSlot]=useState(()=>{if(key===null){return NoopStorageSlot;}return createStorageSlot(key,options);});const listen=useCallback(onChange=>{// Do not try to add a listener during SSR
if(typeof window==='undefined'){return()=>{};}return storageSlot.listen(onChange);},[storageSlot]);const currentValue=useSyncExternalStore(listen,()=>{return storageSlot.get();},()=>null);return[currentValue,storageSlot];}/**
 * Returns a list of all the keys currently stored in browser storage,
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(storageType=DefaultStorageType){const browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}const keys=[];for(let i=0;i<browserStorage.length;i+=1){const key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}

/***/ },

/***/ 4563
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AL: () => (/* binding */ TitleFormatterProvider),
/* harmony export */   s$: () => (/* binding */ useTitleFormatter)
/* harmony export */ });
/* unused harmony export TitleFormatterFnDefault */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6803);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9532);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const TitleFormatterFnDefault=({title,siteTitle,titleDelimiter})=>{const trimmedTitle=title?.trim();if(!trimmedTitle||trimmedTitle===siteTitle){return siteTitle;}return`${trimmedTitle} ${titleDelimiter} ${siteTitle}`;};const TitleFormatterContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function TitleFormatterProvider({formatter,children}){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TitleFormatterContext.Provider,{value:formatter,children:children});}function useTitleFormatterContext(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TitleFormatterContext);if(value===null){throw new _reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .dV('TitleFormatterProvider');}return value;}/**
 * Returns a function to format the page title
 */function useTitleFormatter(){const formatter=useTitleFormatterContext();const{siteConfig}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const{title:siteTitle,titleDelimiter}=siteConfig;// Unfortunately we can only call this hook here, not in the provider
// Route context can't be accessed in any provider applied above the router
const{plugin}=(0,_docusaurus_useRouteContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();return{format:title=>formatter({title,siteTitle,titleDelimiter,plugin,defaultFormatter:TitleFormatterFnDefault})};}

/***/ },

/***/ 2131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useAlternatePageUtils)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to obtain the url of the current page in another locale, useful to
 * generate hreflang meta headers etc...
 *
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
 */function useAlternatePageUtils(){const{siteConfig:{baseUrl,trailingSlash},i18n:{localeConfigs}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();// TODO using useLocation().pathname is not a super idea
// See https://github.com/facebook/docusaurus/issues/9170
const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const canonicalPathname=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .applyTrailingSlash */ .Ks)(pathname,{trailingSlash,baseUrl});// Canonical pathname, without the baseUrl of the current locale
const pathnameSuffix=canonicalPathname.replace(baseUrl,'');function getLocaleConfig(locale){const localeConfig=localeConfigs[locale];if(!localeConfig){throw new Error(`Unexpected Docusaurus bug, no locale config found for locale=${locale}`);}return localeConfig;}function createUrl({locale,fullyQualified}){const localeConfig=getLocaleConfig(locale);const newUrl=`${fullyQualified?localeConfig.url:''}`;const newBaseUrl=localeConfig.baseUrl;return`${newUrl}${newBaseUrl}${pathnameSuffix}`;}return{createUrl};}

/***/ },

/***/ 9342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ useLocalPathname)
/* harmony export */ });
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6347);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Get the pathname of current route, without the optional site baseUrl.
 * - `/docs/myDoc` => `/docs/myDoc`
 * - `/baseUrl/docs/myDoc` => `/docs/myDoc`
 */function useLocalPathname(){const{siteConfig:{baseUrl}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_0__/* .useLocation */ .zy)();return pathname.replace(baseUrl,'/');}

/***/ },

/***/ 5062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6347);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9532);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Fires an effect when the location changes (which includes hash, query, etc.).
 * Importantly, doesn't fire when there's no previous location: see
 * https://github.com/facebook/docusaurus/pull/6696
 */function useLocationChange(onLocationChange){const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .zy)();const previousLocation=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .ZC)(location);const onLocationChangeDynamic=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ ._q)(onLocationChange);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!previousLocation){return;}if(location!==previousLocation){onLocationChangeDynamic({location,previousLocation});}},[onLocationChangeDynamic,location,previousLocation]);}

/***/ },

/***/ 6342
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useThemeConfig)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A convenient/more semantic way to get theme config from context.
 */function useThemeConfig(){return (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().siteConfig.themeConfig;}

/***/ },

/***/ 2983
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.addTrailingSlash=addTrailingSlash;exports["default"]=applyTrailingSlash;exports.addLeadingSlash=addLeadingSlash;exports.removeTrailingSlash=removeTrailingSlash;const stringUtils_1=__webpack_require__(2566);function addTrailingSlash(str){return str.endsWith('/')?str:`${str}/`;}// Trailing slash handling depends in some site configuration options
function applyTrailingSlash(path,options){const{trailingSlash,baseUrl}=options;if(path.startsWith('#')){// Never apply trailing slash to an anchor link
return path;}function handleTrailingSlash(str,trailing){return trailing?addTrailingSlash(str):removeTrailingSlash(str);}// undefined = legacy retrocompatible behavior
if(typeof trailingSlash==='undefined'){return path;}// The trailing slash should be handled before the ?search#hash !
const[pathname]=path.split(/[#?]/);// Never transform '/' to ''
// Never remove the baseUrl trailing slash!
// If baseUrl = /myBase/, we want to emit /myBase/index.html and not
// /myBase.html! See https://github.com/facebook/docusaurus/issues/5077
const shouldNotApply=pathname==='/'||pathname===baseUrl;const newPathname=shouldNotApply?pathname:handleTrailingSlash(pathname,trailingSlash);return path.replace(pathname,newPathname);}/** Appends a leading slash to `str`, if one doesn't exist. */function addLeadingSlash(str){return(0,stringUtils_1.addPrefix)(str,'/');}/** Removes the trailing slash from `str`. */function removeTrailingSlash(str){return(0,stringUtils_1.removeSuffix)(str,'/');}

/***/ },

/***/ 253
(__unused_webpack_module, exports) {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.getErrorCausalChain=getErrorCausalChain;function getErrorCausalChain(error){if(error.cause){return[error,...getErrorCausalChain(error.cause)];}return[error];}

/***/ },

/***/ 440
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */__webpack_unused_export__ = ({value:true});exports.rA=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=exports.Ks=__webpack_unused_export__=void 0;const tslib_1=__webpack_require__(1635);// __ prefix allows search crawlers (Algolia/DocSearch) to ignore anchors
// https://github.com/facebook/docusaurus/issues/8883#issuecomment-1516328368
__webpack_unused_export__='__blog-post-container';var applyTrailingSlash_1=__webpack_require__(2983);Object.defineProperty(exports, "Ks", ({enumerable:true,get:function(){return tslib_1.__importDefault(applyTrailingSlash_1).default;}}));__webpack_unused_export__ = ({enumerable:true,get:function(){return applyTrailingSlash_1.addTrailingSlash;}});__webpack_unused_export__ = ({enumerable:true,get:function(){return applyTrailingSlash_1.addLeadingSlash;}});__webpack_unused_export__ = ({enumerable:true,get:function(){return applyTrailingSlash_1.removeTrailingSlash;}});var stringUtils_1=__webpack_require__(2566);__webpack_unused_export__ = ({enumerable:true,get:function(){return stringUtils_1.addPrefix;}});__webpack_unused_export__ = ({enumerable:true,get:function(){return stringUtils_1.removeSuffix;}});__webpack_unused_export__ = ({enumerable:true,get:function(){return stringUtils_1.addSuffix;}});__webpack_unused_export__ = ({enumerable:true,get:function(){return stringUtils_1.removePrefix;}});var errorUtils_1=__webpack_require__(253);Object.defineProperty(exports, "rA", ({enumerable:true,get:function(){return errorUtils_1.getErrorCausalChain;}}));

/***/ },

/***/ 2566
(__unused_webpack_module, exports) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(exports, "__esModule", ({value:true}));exports.addPrefix=addPrefix;exports.removeSuffix=removeSuffix;exports.addSuffix=addSuffix;exports.removePrefix=removePrefix;/** Adds a given string prefix to `str`. */function addPrefix(str,prefix){return str.startsWith(prefix)?str:`${prefix}${str}`;}/** Removes a given string suffix from `str`. */function removeSuffix(str,suffix){if(suffix===''){// str.slice(0, 0) is ""
return str;}return str.endsWith(suffix)?str.slice(0,-suffix.length):str;}/** Adds a given string suffix to `str`. */function addSuffix(str,suffix){return str.endsWith(suffix)?str:`${str}${suffix}`;}/** Removes a given string prefix from `str`. */function removePrefix(str,prefix){return str.startsWith(prefix)?str.slice(prefix.length):str;}

/***/ },

/***/ 9832
(module) {

// Exports
module.exports = {

};


/***/ },

/***/ 7521
(module) {

// Exports
module.exports = {
	b: `closeButton_CVFx`
};


/***/ },

/***/ 9034
(module) {

// Exports
module.exports = {
	Q: `content_knG7`
};


/***/ },

/***/ 2804
(module) {

// Exports
module.exports = {
	Np: `announcementBar_mb4j`,
	Iz: `announcementBarPlaceholder_vyr4`,
	fT: `announcementBarClose_gvF7`,
	or: `announcementBarContent_xLdY`
};


/***/ },

/***/ 3384
(module) {

// Exports
module.exports = {
	L$: `toggle_vylO`,
	Rm: `toggleButton_gllP`,
	ym: `toggleIcon_g3eP`,
	pQ: `systemToggleIcon_QzmC`,
	mp: `lightToggleIcon_pyhR`,
	Mx: `darkToggleIcon_wfgR`,
	VM: `toggleButtonDisabled_aARS`
};


/***/ },

/***/ 5309
(module) {

// Exports
module.exports = {
	N: `footerLogoLink_BH7S`
};


/***/ },

/***/ 4738
(module) {

// Exports
module.exports = {

};


/***/ },

/***/ 1455
(module) {

// Exports
module.exports = {
	F: `iconExternalLink_nPIU`
};


/***/ },

/***/ 6218
(module) {

// Exports
module.exports = {
	p: `mainWrapper_z2l0`
};


/***/ },

/***/ 3127
(module) {

// Exports
module.exports = {
	x: `darkNavbarColorModeToggle_X3D1`
};


/***/ },

/***/ 8484
(module) {

// Exports
module.exports = {
	n: `colorModeToggle_DEke`
};


/***/ },

/***/ 231
(module) {

// Exports
module.exports = {
	R: `navbarHideable_m1mJ`,
	T: `navbarHidden_jGov`
};


/***/ },

/***/ 7921
(module) {

// Exports
module.exports = {
	E: `navbarSearchContainer_Bca1`
};


/***/ },

/***/ 9907
(module) {

// Exports
module.exports = {
	H: `dropdownNavbarItemMobile_J0Sd`
};


/***/ },

/***/ 8244
(module) {

// Exports
module.exports = {
	_: `iconLanguage_nlXk`
};


/***/ },

/***/ 5521
(module) {

// Exports
module.exports = {
	s: `skipToContent_fXgn`
};


/***/ },

/***/ 6878
(module) {

// Exports
module.exports = {
	"themedComponent": `themedComponent_mlkZ`,
	"themedComponent--light": `themedComponent--light_NVdE`,
	"themedComponent--dark": `themedComponent--dark_xIcU`
};


/***/ },

/***/ 9622
(module) {

// Exports
module.exports = {
	K: `anchorTargetStickyNavbar_Vzrq`,
	d: `anchorTargetHideOnScrollNavbar_vjPI`
};


/***/ },

/***/ 7983
(module) {

// Exports
module.exports = {
	X: `errorBoundaryError_a6uf`,
	...(/* unused pure expression */ null && (`errorBoundaryFallback_VBag`))
};


/***/ },

/***/ 4499
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AO: () => (/* binding */ createPath),
/* harmony export */   TM: () => (/* binding */ createHashHistory),
/* harmony export */   sC: () => (/* binding */ createMemoryHistory),
/* harmony export */   yJ: () => (/* binding */ createLocation),
/* harmony export */   zR: () => (/* binding */ createBrowserHistory)
/* harmony export */ });
/* unused harmony exports locationsAreEqual, parsePath */
/* unused harmony import specifier */ var valueEqual;
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8168);
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4307);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1561);






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ },

/***/ 4146
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(4363);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ },

/***/ 7927
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ },

/***/ 4634
(module) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ },

/***/ 5302
(module, __unused_webpack_exports, __webpack_require__) {

var isarray = __webpack_require__(4634)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prefix || defaultDelimiter
    var pattern = capture || group
    var prevText = prefix || (typeof tokens[tokens.length - 1] === 'string' ? tokens[tokens.length - 1] : '')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : restrictBacktrack(delimiter, prevText))
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

function restrictBacktrack(delimiter, prevText) {
  if (!prevText || prevText.indexOf(delimiter) > -1) {
    return '[^' + escapeString(delimiter) + ']+?'
  }

  return escapeString(prevText) + '|(?:(?!' + escapeString(prevText) + ')[^' + escapeString(delimiter) + '])+?'
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ },

/***/ 2694
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ },

/***/ 5556
(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2694)();
}


/***/ },

/***/ 6925
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ },

/***/ 6711
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea=__webpack_require__(6540),fa=__webpack_require__(2203),n=Object.prototype.hasOwnProperty,ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},ja={};
function ka(a){if(n.call(ja,a))return!0;if(n.call(ia,a))return!1;if(ha.test(a))return ja[a]=!0;ia[a]=!0;return!1}function q(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var r={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){r[a]=new q(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];r[b]=new q(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){r[a]=new q(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){r[a]=new q(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){r[a]=new q(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){r[a]=new q(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){r[a]=new q(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){r[a]=new q(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){r[a]=new q(a,5,!1,a.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function ma(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(la,
ma);r[b]=new q(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(la,ma);r[b]=new q(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(la,ma);r[b]=new q(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!1,!1)});
r.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){r[a]=new q(a,1,!1,a.toLowerCase(),null,!0,!0)});
var t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},na=["Webkit","ms","Moz","O"];Object.keys(t).forEach(function(a){na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);t[b]=t[a]})});var oa=/["'&<>]/;
function u(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=oa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}var pa=/([A-Z])/g,qa=/^ms-/,ra=Array.isArray;function v(a,b){return{insertionMode:a,selectedValue:b}}
function sa(a,b,c){switch(b){case "select":return v(1,null!=c.value?c.value:c.defaultValue);case "svg":return v(2,null);case "math":return v(3,null);case "foreignObject":return v(1,null);case "table":return v(4,null);case "thead":case "tbody":case "tfoot":return v(5,null);case "colgroup":return v(7,null);case "tr":return v(6,null)}return 4<=a.insertionMode||0===a.insertionMode?v(1,null):a}var ta=new Map;
function ua(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(n.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=u(d);f=u((""+f).trim())}else{e=d;var g=ta.get(e);void 0!==g?e=g:(g=u(e.replace(pa,"-$1").toLowerCase().replace(qa,"-ms-")),ta.set(e,g),e=g);f="number"===typeof f?0===f||n.call(t,
d)?""+f:f+"px":u((""+f).trim())}b?(b=!1,a.push(' style="',e,":",f)):a.push(";",e,":",f)}}b||a.push('"')}
function w(a,b,c,d){switch(c){case "style":ua(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=r.hasOwnProperty(c)?r[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(" ",c,'=""');break;case 4:!0===d?a.push(" ",c,'=""'):
!1!==d&&a.push(" ",c,'="',u(d),'"');break;case 5:isNaN(d)||a.push(" ",c,'="',u(d),'"');break;case 6:!isNaN(d)&&1<=d&&a.push(" ",c,'="',u(d),'"');break;default:b.sanitizeURL&&(d=""+d),a.push(" ",c,'="',u(d),'"')}}else if(ka(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(" ",c,'="',u(d),'"')}}
function x(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function va(a){var b="";ea.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function wa(a,b,c,d){a.push(z(c));var f=c=null,e;for(e in b)if(n.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:w(a,d,e,g)}}a.push(">");x(a,f,c);return"string"===typeof c?(a.push(u(c)),null):c}var xa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ya=new Map;function z(a){var b=ya.get(a);if(void 0===b){if(!xa.test(a))throw Error("Invalid tag: "+a);b="<"+a;ya.set(a,b)}return b}
function za(a,b,c,d,f){switch(b){case "select":a.push(z("select"));var e=null,g=null;for(l in c)if(n.call(c,l)){var h=c[l];if(null!=h)switch(l){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:w(a,d,l,h)}}a.push(">");x(a,g,e);return e;case "option":g=f.selectedValue;a.push(z("option"));var k=h=null,m=null;var l=null;for(e in c)if(n.call(c,e)){var p=c[e];if(null!=p)switch(e){case "children":h=p;break;case "selected":m=p;break;case "dangerouslySetInnerHTML":l=
p;break;case "value":k=p;default:w(a,d,e,p)}}if(null!=g)if(c=null!==k?""+k:va(h),ra(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(' selected=""');break}}else""+g===c&&a.push(' selected=""');else m&&a.push(' selected=""');a.push(">");x(a,l,h);return h;case "textarea":a.push(z("textarea"));l=g=e=null;for(h in c)if(n.call(c,h)&&(k=c[h],null!=k))switch(h){case "children":l=k;break;case "value":e=k;break;case "defaultValue":g=k;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:w(a,d,h,k)}null===e&&null!==g&&(e=g);a.push(">");if(null!=l){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(ra(l)&&1<l.length)throw Error("<textarea> can only have at most one child.");e=""+l}"string"===typeof e&&"\n"===e[0]&&a.push("\n");null!==e&&a.push(u(""+e));return null;case "input":a.push(z("input"));k=l=h=e=null;for(g in c)if(n.call(c,g)&&(m=c[g],null!=m))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":k=m;break;case "defaultValue":h=m;break;case "checked":l=m;break;case "value":e=m;break;default:w(a,d,g,m)}null!==l?w(a,d,"checked",l):null!==k&&w(a,d,"checked",k);null!==e?w(a,d,"value",e):null!==h&&w(a,d,"value",h);a.push("/>");return null;case "menuitem":a.push(z("menuitem"));for(var B in c)if(n.call(c,B)&&(e=c[B],null!=e))switch(B){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:w(a,d,B,
e)}a.push(">");return null;case "title":a.push(z("title"));e=null;for(p in c)if(n.call(c,p)&&(g=c[p],null!=g))switch(p){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");default:w(a,d,p,g)}a.push(">");return e;case "listing":case "pre":a.push(z(b));g=e=null;for(k in c)if(n.call(c,k)&&(h=c[k],null!=h))switch(k){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:w(a,d,k,h)}a.push(">");if(null!=g){if(null!=
e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push("\n",c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push("\n");return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(z(b));
for(var C in c)if(n.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:w(a,d,C,e)}a.push("/>");return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return wa(a,c,b,d);case "html":return 0===f.insertionMode&&a.push("<!DOCTYPE html>"),
wa(a,c,b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return wa(a,c,b,d);a.push(z(b));g=e=null;for(m in c)if(n.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":ua(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ka(m)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(" ",m,'="',u(h),'"')}a.push(">");x(a,g,e);return e}}
function Aa(a,b,c){a.push('\x3c!--$?--\x3e<template id="');if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");a.push(c);return a.push('"></template>')}
function Ba(a,b,c,d){switch(c.insertionMode){case 0:case 1:return a.push('<div hidden id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 2:return a.push('<svg aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 3:return a.push('<math aria-hidden="true" style="display:none" id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 4:return a.push('<table hidden id="'),a.push(b.segmentPrefix),
b=d.toString(16),a.push(b),a.push('">');case 5:return a.push('<table hidden><tbody id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 6:return a.push('<table hidden><tr id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');case 7:return a.push('<table hidden><colgroup id="'),a.push(b.segmentPrefix),b=d.toString(16),a.push(b),a.push('">');default:throw Error("Unknown insertion mode. This is a bug in React.");}}
function Ca(a,b){switch(b.insertionMode){case 0:case 1:return a.push("</div>");case 2:return a.push("</svg>");case 3:return a.push("</math>");case 4:return a.push("</table>");case 5:return a.push("</tbody></table>");case 6:return a.push("</tr></table>");case 7:return a.push("</colgroup></table>");default:throw Error("Unknown insertion mode. This is a bug in React.");}}var Da=/[<\u2028\u2029]/g;
function Ea(a){return JSON.stringify(a).replace(Da,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
function Fa(a,b){b=void 0===b?"":b;return{bootstrapChunks:[],startInlineScript:"<script>",placeholderPrefix:b+"P:",segmentPrefix:b+"S:",boundaryPrefix:b+"B:",idPrefix:b,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:a}}function Ga(){return{insertionMode:1,selectedValue:null}}function Ha(a,b,c,d){if(c.generateStaticMarkup)return a.push(u(b)),!1;""===b?a=d:(d&&a.push("\x3c!-- --\x3e"),a.push(u(b)),a=!0);return a}
var A=Object.assign,Ia=Symbol.for("react.element"),Ja=Symbol.for("react.portal"),Ka=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),Na=Symbol.for("react.provider"),Oa=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy"),Ua=Symbol.for("react.scope"),Va=Symbol.for("react.debug_trace_mode"),Wa=Symbol.for("react.legacy_hidden"),
Xa=Symbol.for("react.default_value"),Ya=Symbol.iterator;
function Za(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ka:return"Fragment";case Ja:return"Portal";case Ma:return"Profiler";case La:return"StrictMode";case Qa:return"Suspense";case Ra:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Oa:return(a.displayName||"Context")+".Consumer";case Na:return(a._context.displayName||"Context")+".Provider";case Pa:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Sa:return b=a.displayName||null,null!==b?b:Za(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return Za(a(b))}catch(c){}}return null}var $a={};function ab(a,b){a=a.contextTypes;if(!a)return $a;var c={},d;for(d in a)c[d]=b[d];return c}var D=null;
function E(a,b){if(a!==b){a.context._currentValue2=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");E(a,c)}b.context._currentValue2=b.value}}function bb(a){a.context._currentValue2=a.parentValue;a=a.parent;null!==a&&bb(a)}
function cb(a){var b=a.parent;null!==b&&cb(b);a.context._currentValue2=a.value}function db(a,b){a.context._currentValue2=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?E(a,b):db(a,b)}
function eb(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?E(a,c):eb(a,c);b.context._currentValue2=b.value}function F(a){var b=D;b!==a&&(null===b?cb(a):null===a?bb(b):b.depth===a.depth?E(b,a):b.depth>a.depth?db(b,a):eb(b,a),D=a)}
var fb={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function gb(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=fb;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue2:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:A({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&fb.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=A({},e,h)):A(e,h))}a.state=e}else e.queue=null}
var hb={id:1,overflow:""};function ib(a,b,c){var d=a.id;a=a.overflow;var f=32-G(d)-1;d&=~(1<<f);c+=1;var e=32-G(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-G(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var G=Math.clz32?Math.clz32:jb,kb=Math.log,lb=Math.LN2;function jb(a){a>>>=0;return 0===a?32:31-(kb(a)/lb|0)|0}function mb(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var nb="function"===typeof Object.is?Object.is:mb,H=null,ob=null,I=null,J=null,K=!1,L=!1,M=0,N=null,O=0;
function P(){if(null===H)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return H}
function rb(){if(0<O)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function sb(){null===J?null===I?(K=!1,I=J=rb()):(K=!0,J=I):null===J.next?(K=!1,J=J.next=rb()):(K=!0,J=J.next);return J}function tb(){ob=H=null;L=!1;I=null;O=0;J=N=null}function ub(a,b){return"function"===typeof b?b(a):b}
function vb(a,b,c){H=P();J=sb();if(K){var d=J.queue;b=d.dispatch;if(null!==N&&(c=N.get(d),void 0!==c)){N.delete(d);d=J.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);J.memoizedState=d;return[d,b]}return[J.memoizedState,b]}a=a===ub?"function"===typeof b?b():b:void 0!==c?c(b):b;J.memoizedState=a;a=J.queue={last:null,dispatch:null};a=a.dispatch=wb.bind(null,H,a);return[J.memoizedState,a]}
function xb(a,b){H=P();J=sb();b=void 0===b?null:b;if(null!==J){var c=J.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!nb(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();J.memoizedState=[a,b];return a}
function wb(a,b,c){if(25<=O)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===H)if(L=!0,a={action:c,next:null},null===N&&(N=new Map),c=N.get(b),void 0===c)N.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function yb(){throw Error("startTransition cannot be called during server rendering.");}function Q(){}
var zb={readContext:function(a){return a._currentValue2},useContext:function(a){P();return a._currentValue2},useMemo:xb,useReducer:vb,useRef:function(a){H=P();J=sb();var b=J.memoizedState;return null===b?(a={current:a},J.memoizedState=a):b},useState:function(a){return vb(ub,a)},useInsertionEffect:Q,useLayoutEffect:function(){},useCallback:function(a,b){return xb(function(){return a},b)},useImperativeHandle:Q,useEffect:Q,useDebugValue:Q,useDeferredValue:function(a){P();return a},useTransition:function(){P();
return[!1,yb]},useId:function(){var a=ob.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-G(a)-1)).toString(32)+b;var c=R;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=M++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){P();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},R=null,Ab=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Bb(a){console.error(a);return null}function S(){}
function Cb(a,b,c,d,f,e,g,h,k){var m=[],l=new Set;b={destination:null,responseState:b,progressiveChunkSize:void 0===d?12800:d,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:l,pingedTasks:m,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===f?Bb:f,onAllReady:void 0===e?S:e,onShellReady:void 0===g?S:g,onShellError:void 0===h?S:h,onFatalError:void 0===k?S:k};c=T(b,0,null,c,!1,!1);c.parentFlushed=
!0;a=Db(b,a,null,c,l,$a,null,hb);m.push(a);return b}function Db(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var k={node:b,ping:function(){var b=a.pingedTasks;b.push(k);1===b.length&&Eb(a)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(k);return k}function T(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function U(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function V(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Fb(a,b,c,d,f){H={};ob=b;M=0;for(a=c(d,f);L;)L=!1,M=0,O+=1,J=null,a=c(d,f);tb();return a}function Gb(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((Za(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=A({},g,c)}b.legacyContext=d;W(a,b,f);b.legacyContext=g}else W(a,b,f)}
function Hb(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Ib(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=ab(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue2:f);gb(e,c,d,f);Gb(a,b,e,c)}else{e=ab(c,b.legacyContext);f=Fb(a,b,c,d,e);var g=0!==M;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)gb(f,c,d,e),Gb(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=ib(d,1,0);try{W(a,b,f)}finally{b.treeContext=d}}else W(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=za(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=sa(g,c,d);Jb(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push("</",c,">")}f.lastPushedText=!1}else{switch(c){case Wa:case Va:case La:case Ma:case Ka:W(a,b,d.children);return;
case Ra:W(a,b,d.children);return;case Ua:throw Error("ReactDOMServer does not yet support scope components.");case Qa:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},k=T(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(k);f.lastPushedText=!1;var m=T(a,0,null,f.formatContext,!1,!1);m.parentFlushed=!0;
b.blockedBoundary=h;b.blockedSegment=m;try{if(Jb(a,b,d),a.responseState.generateStaticMarkup||m.lastPushedText&&m.textEmbedded&&m.chunks.push("\x3c!-- --\x3e"),m.status=1,X(h,m),0===h.pendingTasks)break a}catch(l){m.status=4,h.forceClientRender=!0,h.errorDigest=U(a,l)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Db(a,e,c,k,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Pa:d=Fb(a,b,c.render,d,f);if(0!==M){c=b.treeContext;
b.treeContext=ib(c,1,0);try{W(a,b,d)}finally{b.treeContext=c}}else W(a,b,d);return;case Sa:c=c.type;d=Hb(c,d);Ib(a,b,c,d,f);return;case Na:f=d.children;c=c._context;d=d.value;e=c._currentValue2;c._currentValue2=d;g=D;D=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;W(a,b,f);a=D;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue2=d===Xa?a.context._defaultValue:d;a=D=a.parent;
b.context=a;return;case Oa:d=d.children;d=d(c._currentValue2);W(a,b,d);return;case Ta:f=c._init;c=f(c._payload);d=Hb(c,d);Ib(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==c?c:typeof c)+"."));}}
function W(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ia:Ib(a,b,c.type,c.props,c.ref);return;case Ja:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case Ta:var d=c._init;c=d(c._payload);W(a,b,c);return}if(ra(c)){Kb(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=Ya&&c[Ya]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);Kb(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Ha(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Ha(b.blockedSegment.chunks,
""+c,a.responseState,d.lastPushedText))}function Kb(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=ib(e,d,f);try{Jb(a,b,c[f])}finally{b.treeContext=e}}}
function Jb(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return W(a,b,c)}catch(k){if(tb(),"object"===typeof k&&null!==k&&"function"===typeof k.then){c=k;var g=b.blockedSegment,h=T(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Db(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;F(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,F(e),k;}}function Lb(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;Mb(this,b,a)}
function Nb(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.push(null))):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=b.onError(void 0===c?Error("The render was aborted by the server without a reason."):c),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return Nb(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,
0===b.allPendingTasks&&(a=b.onAllReady,a()))}function X(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&X(a,c)}else a.completedSegments.push(b)}
function Mb(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=S,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&X(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(Lb,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(X(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Eb(a){if(2!==a.status){var b=D,c=Ab.current;Ab.current=zb;var d=R;R=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,k=g.blockedSegment;if(0===k.status){F(g.context);try{W(h,g,g.node),h.responseState.generateStaticMarkup||k.lastPushedText&&k.textEmbedded&&k.chunks.push("\x3c!-- --\x3e"),g.abortSet.delete(g),k.status=1,Mb(h,g.blockedBoundary,k)}catch(y){if(tb(),"object"===typeof y&&null!==y&&"function"===typeof y.then){var m=g.ping;y.then(m,m)}else{g.abortSet.delete(g);
k.status=4;var l=g.blockedBoundary,p=y,B=U(h,p);null===l?V(h,p):(l.pendingTasks--,l.forceClientRender||(l.forceClientRender=!0,l.errorDigest=B,l.parentFlushed&&h.clientRenderedBoundaries.push(l)));h.allPendingTasks--;if(0===h.allPendingTasks){var C=h.onAllReady;C()}}}finally{}}}f.splice(0,e);null!==a.destination&&Ob(a,a.destination)}catch(y){U(a,y),V(a,y)}finally{R=d,Ab.current=c,c===zb&&F(b)}}}
function Y(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;b.push('<template id="');b.push(a.placeholderPrefix);a=d.toString(16);b.push(a);return b.push('"></template>');case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)b.push(d[e]);f=Z(a,b,f)}for(;e<d.length-1;e++)b.push(d[e]);e<d.length&&(f=b.push(d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function Z(a,b,c){var d=c.boundary;if(null===d)return Y(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)return a.responseState.generateStaticMarkup||(d=d.errorDigest,b.push("\x3c!--$!--\x3e"),b.push("<template"),d&&(b.push(' data-dgst="'),d=u(d),b.push(d),b.push('"')),b.push("></template>")),Y(a,b,c),a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e"),a;if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=
f.nextSuspenseID++;f=f.boundaryPrefix+e.toString(16);d=d.id=f;Aa(b,a.responseState,d);Y(a,b,c);return b.push("\x3c!--/$--\x3e")}if(d.byteSize>a.progressiveChunkSize)return d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),Aa(b,a.responseState,d.id),Y(a,b,c),b.push("\x3c!--/$--\x3e");a.responseState.generateStaticMarkup||b.push("\x3c!--$--\x3e");c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
Z(a,b,c[0]);a=a.responseState.generateStaticMarkup?!0:b.push("\x3c!--/$--\x3e");return a}function Pb(a,b,c){Ba(b,a.responseState,c.formatContext,c.id);Z(a,b,c);return Ca(b,c.formatContext)}
function Qb(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)Rb(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;b.push(a.startInlineScript);a.sentCompleteBoundaryFunction?b.push('$RC("'):(a.sentCompleteBoundaryFunction=!0,b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));if(null===
d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);b.push(d);b.push('","');b.push(a.segmentPrefix);b.push(c);return b.push('")\x3c/script>')}
function Rb(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return Pb(a,b,d)}Pb(a,b,d);a=a.responseState;b.push(a.startInlineScript);a.sentCompleteSegmentFunction?b.push('$RS("'):(a.sentCompleteSegmentFunction=!0,b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
b.push(a.segmentPrefix);f=f.toString(16);b.push(f);b.push('","');b.push(a.placeholderPrefix);b.push(f);return b.push('")\x3c/script>')}
function Ob(a,b){try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){Z(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)b.push(d[c]);c<d.length&&b.push(d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,k=g.id,m=g.errorDigest,l=g.errorMessage,p=g.errorComponentStack;d.push(h.startInlineScript);h.sentClientRenderFunction?d.push('$RX("'):(h.sentClientRenderFunction=!0,d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
if(null===k)throw Error("An ID must have been assigned before we can complete the boundary.");d.push(k);d.push('"');if(m||l||p){d.push(",");var B=Ea(m||"");d.push(B)}if(l||p){d.push(",");var C=Ea(l||"");d.push(C)}if(p){d.push(",");var y=Ea(p);d.push(y)}if(!d.push(")\x3c/script>")){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var aa=a.completedBoundaries;for(e=0;e<aa.length;e++)if(!Qb(a,b,aa[e])){a.destination=null;e++;aa.splice(0,e);return}aa.splice(0,e);var ba=a.partialBoundaries;for(e=
0;e<ba.length;e++){var pb=ba[e];a:{f=a;g=b;var ca=pb.completedSegments;for(h=0;h<ca.length;h++)if(!Rb(f,g,pb,ca[h])){h++;ca.splice(0,h);var qb=!1;break a}ca.splice(0,h);qb=!0}if(!qb){a.destination=null;e++;ba.splice(0,e);return}}ba.splice(0,e);var da=a.completedBoundaries;for(e=0;e<da.length;e++)if(!Qb(a,b,da[e])){a.destination=null;e++;da.splice(0,e);return}da.splice(0,e)}finally{0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&
b.push(null)}}function Sb(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{Ob(a,b)}catch(c){U(a,c),V(a,c)}}}function Tb(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return Nb(c,a,b)});c.clear();null!==a.destination&&Ob(a,a.destination)}catch(d){U(a,d),V(a,d)}}function Ub(){}
function Vb(a,b,c,d){var f=!1,e=null,g="",h=!1;a=Cb(a,Fa(c,b?b.identifierPrefix:void 0),Ga(),Infinity,Ub,void 0,function(){h=!0},void 0,void 0);Eb(a);Tb(a,d);Sb(a,{push:function(a){null!==a&&(g+=a);return!0},destroy:function(a){f=!0;e=a}});if(f)throw e;if(!h)throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");return g}
function Wb(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}var Xb=function(a){function b(){var b=a.call(this,{})||this;b.request=null;b.startedFlowing=!1;return b}Wb(b,a);var c=b.prototype;c._destroy=function(a,b){Tb(this.request);b(a)};c._read=function(){this.startedFlowing&&Sb(this.request,this)};return b}(fa.Readable);function Yb(){}
function Zb(a,b){var c=new Xb,d=Cb(a,Fa(!1,b?b.identifierPrefix:void 0),Ga(),Infinity,Yb,function(){c.startedFlowing=!0;Sb(d,c)},void 0,void 0);c.request=d;Eb(d);return c}exports.renderToNodeStream=function(a,b){return Zb(a,b)};exports.renderToStaticMarkup=function(a,b){return Vb(a,b,!0,'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server')};
exports.renderToStaticNodeStream=function(a,b){return Zb(a,b)};exports.renderToString=function(a,b){return Vb(a,b,!1,'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server')};
exports.version="18.3.1";


/***/ },

/***/ 6513
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=__webpack_require__(9023),ba=__webpack_require__(6540),k=null,l=0,q=!0;
function r(a,b){if("string"===typeof b){if(0!==b.length)if(2048<3*b.length)0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,u.encode(b));else{var c=k;0<l&&(c=k.subarray(l));c=u.encodeInto(b,c);var d=c.read;l+=c.written;d<b.length&&(t(a,k),k=new Uint8Array(2048),l=u.encodeInto(b.slice(d),k).written);2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)}}else 0!==b.byteLength&&(2048<b.byteLength?(0<l&&(t(a,k.subarray(0,l)),k=new Uint8Array(2048),l=0),t(a,b)):(c=k.length-l,c<b.byteLength&&(0===c?t(a,
k):(k.set(b.subarray(0,c),l),l+=c,t(a,k),b=b.subarray(c)),k=new Uint8Array(2048),l=0),k.set(b,l),l+=b.byteLength,2048===l&&(t(a,k),k=new Uint8Array(2048),l=0)))}function t(a,b){a=a.write(b);q=q&&a}function w(a,b){r(a,b);return q}function ca(a){k&&0<l&&a.write(k.subarray(0,l));k=null;l=0;q=!0}var u=new aa.TextEncoder;function x(a){return u.encode(a)}
var y=Object.prototype.hasOwnProperty,da=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},fa={};
function ha(a){if(y.call(fa,a))return!0;if(y.call(ea,a))return!1;if(da.test(a))return fa[a]=!0;ea[a]=!0;return!1}function z(a,b,c,d,f,e,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=e;this.removeEmptyString=g}var A={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){A[a]=new z(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];A[b]=new z(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){A[a]=new z(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){A[a]=new z(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){A[a]=new z(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){A[a]=new z(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){A[a]=new z(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){A[a]=new z(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){A[a]=new z(a,5,!1,a.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function ja(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ia,
ja);A[b]=new z(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ia,ja);A[b]=new z(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ia,ja);A[b]=new z(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){A[a]=new z(a,1,!1,a.toLowerCase(),null,!1,!1)});
A.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){A[a]=new z(a,1,!1,a.toLowerCase(),null,!0,!0)});
var B={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ka=["Webkit","ms","Moz","O"];Object.keys(B).forEach(function(a){ka.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);B[b]=B[a]})});var la=/["'&<>]/;
function F(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=la.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
var ma=/([A-Z])/g,pa=/^ms-/,qa=Array.isArray,ra=x("<script>"),sa=x("\x3c/script>"),ta=x('<script src="'),ua=x('<script type="module" src="'),va=x('" async="">\x3c/script>'),wa=/(<\/|<)(s)(cript)/gi;function xa(a,b,c,d){return""+b+("s"===c?"\\u0073":"\\u0053")+d}function G(a,b){return{insertionMode:a,selectedValue:b}}
function ya(a,b,c){switch(b){case "select":return G(1,null!=c.value?c.value:c.defaultValue);case "svg":return G(2,null);case "math":return G(3,null);case "foreignObject":return G(1,null);case "table":return G(4,null);case "thead":case "tbody":case "tfoot":return G(5,null);case "colgroup":return G(7,null);case "tr":return G(6,null)}return 4<=a.insertionMode||0===a.insertionMode?G(1,null):a}var za=x("\x3c!-- --\x3e");function Aa(a,b,c,d){if(""===b)return d;d&&a.push(za);a.push(F(b));return!0}
var Ba=new Map,Ca=x(' style="'),Da=x(":"),Ea=x(";");
function Fa(a,b,c){if("object"!==typeof c)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");b=!0;for(var d in c)if(y.call(c,d)){var f=c[d];if(null!=f&&"boolean"!==typeof f&&""!==f){if(0===d.indexOf("--")){var e=F(d);f=F((""+f).trim())}else{e=d;var g=Ba.get(e);void 0!==g?e=g:(g=x(F(e.replace(ma,"-$1").toLowerCase().replace(pa,"-ms-"))),Ba.set(e,g),e=g);f="number"===typeof f?0===f||y.call(B,
d)?""+f:f+"px":F((""+f).trim())}b?(b=!1,a.push(Ca,e,Da,f)):a.push(Ea,e,Da,f)}}b||a.push(H)}var I=x(" "),J=x('="'),H=x('"'),Ga=x('=""');
function K(a,b,c,d){switch(c){case "style":Fa(a,b,d);return;case "defaultValue":case "defaultChecked":case "innerHTML":case "suppressContentEditableWarning":case "suppressHydrationWarning":return}if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])if(b=A.hasOwnProperty(c)?A[c]:null,null!==b){switch(typeof d){case "function":case "symbol":return;case "boolean":if(!b.acceptsBooleans)return}c=b.attributeName;switch(b.type){case 3:d&&a.push(I,c,Ga);break;case 4:!0===d?a.push(I,c,Ga):!1!==
d&&a.push(I,c,J,F(d),H);break;case 5:isNaN(d)||a.push(I,c,J,F(d),H);break;case 6:!isNaN(d)&&1<=d&&a.push(I,c,J,F(d),H);break;default:b.sanitizeURL&&(d=""+d),a.push(I,c,J,F(d),H)}}else if(ha(c)){switch(typeof d){case "function":case "symbol":return;case "boolean":if(b=c.toLowerCase().slice(0,5),"data-"!==b&&"aria-"!==b)return}a.push(I,c,J,F(d),H)}}var L=x(">"),Ha=x("/>");
function M(a,b,c){if(null!=b){if(null!=c)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!==typeof b||!("__html"in b))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");b=b.__html;null!==b&&void 0!==b&&a.push(""+b)}}function Ia(a){var b="";ba.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Ja=x(' selected=""');
function Ka(a,b,c,d){a.push(N(c));var f=c=null,e;for(e in b)if(y.call(b,e)){var g=b[e];if(null!=g)switch(e){case "children":c=g;break;case "dangerouslySetInnerHTML":f=g;break;default:K(a,d,e,g)}}a.push(L);M(a,f,c);return"string"===typeof c?(a.push(F(c)),null):c}var La=x("\n"),Ma=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Na=new Map;function N(a){var b=Na.get(a);if(void 0===b){if(!Ma.test(a))throw Error("Invalid tag: "+a);b=x("<"+a);Na.set(a,b)}return b}var Oa=x("<!DOCTYPE html>");
function Pa(a,b,c,d,f){switch(b){case "select":a.push(N("select"));var e=null,g=null;for(p in c)if(y.call(c,p)){var h=c[p];if(null!=h)switch(p){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "defaultValue":case "value":break;default:K(a,d,p,h)}}a.push(L);M(a,g,e);return e;case "option":g=f.selectedValue;a.push(N("option"));var m=h=null,n=null;var p=null;for(e in c)if(y.call(c,e)){var v=c[e];if(null!=v)switch(e){case "children":h=v;break;case "selected":n=v;break;case "dangerouslySetInnerHTML":p=
v;break;case "value":m=v;default:K(a,d,e,v)}}if(null!=g)if(c=null!==m?""+m:Ia(h),qa(g))for(d=0;d<g.length;d++){if(""+g[d]===c){a.push(Ja);break}}else""+g===c&&a.push(Ja);else n&&a.push(Ja);a.push(L);M(a,p,h);return h;case "textarea":a.push(N("textarea"));p=g=e=null;for(h in c)if(y.call(c,h)&&(m=c[h],null!=m))switch(h){case "children":p=m;break;case "value":e=m;break;case "defaultValue":g=m;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
default:K(a,d,h,m)}null===e&&null!==g&&(e=g);a.push(L);if(null!=p){if(null!=e)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(qa(p)&&1<p.length)throw Error("<textarea> can only have at most one child.");e=""+p}"string"===typeof e&&"\n"===e[0]&&a.push(La);null!==e&&a.push(F(""+e));return null;case "input":a.push(N("input"));m=p=h=e=null;for(g in c)if(y.call(c,g)&&(n=c[g],null!=n))switch(g){case "children":case "dangerouslySetInnerHTML":throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
case "defaultChecked":m=n;break;case "defaultValue":h=n;break;case "checked":p=n;break;case "value":e=n;break;default:K(a,d,g,n)}null!==p?K(a,d,"checked",p):null!==m&&K(a,d,"checked",m);null!==e?K(a,d,"value",e):null!==h&&K(a,d,"value",h);a.push(Ha);return null;case "menuitem":a.push(N("menuitem"));for(var C in c)if(y.call(c,C)&&(e=c[C],null!=e))switch(C){case "children":case "dangerouslySetInnerHTML":throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");default:K(a,d,C,e)}a.push(L);
return null;case "title":a.push(N("title"));e=null;for(v in c)if(y.call(c,v)&&(g=c[v],null!=g))switch(v){case "children":e=g;break;case "dangerouslySetInnerHTML":throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");default:K(a,d,v,g)}a.push(L);return e;case "listing":case "pre":a.push(N(b));g=e=null;for(m in c)if(y.call(c,m)&&(h=c[m],null!=h))switch(m){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;default:K(a,d,m,h)}a.push(L);if(null!=g){if(null!=e)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
if("object"!==typeof g||!("__html"in g))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");c=g.__html;null!==c&&void 0!==c&&("string"===typeof c&&0<c.length&&"\n"===c[0]?a.push(La,c):a.push(""+c))}"string"===typeof e&&"\n"===e[0]&&a.push(La);return e;case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":a.push(N(b));
for(var D in c)if(y.call(c,D)&&(e=c[D],null!=e))switch(D){case "children":case "dangerouslySetInnerHTML":throw Error(b+" is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:K(a,d,D,e)}a.push(Ha);return null;case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return Ka(a,c,b,d);case "html":return 0===f.insertionMode&&a.push(Oa),Ka(a,c,
b,d);default:if(-1===b.indexOf("-")&&"string"!==typeof c.is)return Ka(a,c,b,d);a.push(N(b));g=e=null;for(n in c)if(y.call(c,n)&&(h=c[n],null!=h))switch(n){case "children":e=h;break;case "dangerouslySetInnerHTML":g=h;break;case "style":Fa(a,d,h);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":break;default:ha(n)&&"function"!==typeof h&&"symbol"!==typeof h&&a.push(I,n,J,F(h),H)}a.push(L);M(a,g,e);return e}}
var Qa=x("</"),Ra=x(">"),Sa=x('<template id="'),Ta=x('"></template>'),Ua=x("\x3c!--$--\x3e"),Va=x('\x3c!--$?--\x3e<template id="'),Wa=x('"></template>'),Xa=x("\x3c!--$!--\x3e"),Ya=x("\x3c!--/$--\x3e"),Za=x("<template"),$a=x('"'),ab=x(' data-dgst="');x(' data-msg="');x(' data-stck="');var bb=x("></template>");function cb(a,b,c){r(a,Va);if(null===c)throw Error("An ID must have been assigned before we can complete the boundary.");r(a,c);return w(a,Wa)}
var db=x('<div hidden id="'),eb=x('">'),fb=x("</div>"),gb=x('<svg aria-hidden="true" style="display:none" id="'),hb=x('">'),ib=x("</svg>"),jb=x('<math aria-hidden="true" style="display:none" id="'),kb=x('">'),lb=x("</math>"),mb=x('<table hidden id="'),nb=x('">'),ob=x("</table>"),pb=x('<table hidden><tbody id="'),qb=x('">'),rb=x("</tbody></table>"),sb=x('<table hidden><tr id="'),tb=x('">'),ub=x("</tr></table>"),vb=x('<table hidden><colgroup id="'),wb=x('">'),xb=x("</colgroup></table>");
function yb(a,b,c,d){switch(c.insertionMode){case 0:case 1:return r(a,db),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,eb);case 2:return r(a,gb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,hb);case 3:return r(a,jb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,kb);case 4:return r(a,mb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,nb);case 5:return r(a,pb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,qb);case 6:return r(a,sb),r(a,b.segmentPrefix),r(a,d.toString(16)),w(a,tb);case 7:return r(a,vb),r(a,
b.segmentPrefix),r(a,d.toString(16)),w(a,wb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}function zb(a,b){switch(b.insertionMode){case 0:case 1:return w(a,fb);case 2:return w(a,ib);case 3:return w(a,lb);case 4:return w(a,ob);case 5:return w(a,rb);case 6:return w(a,ub);case 7:return w(a,xb);default:throw Error("Unknown insertion mode. This is a bug in React.");}}
var Ab=x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'),Bb=x('$RS("'),Cb=x('","'),Db=x('")\x3c/script>'),Fb=x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'),
Gb=x('$RC("'),Hb=x('","'),Ib=x('")\x3c/script>'),Jb=x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'),Kb=x('$RX("'),Lb=x('"'),Mb=x(")\x3c/script>"),Nb=x(","),Ob=/[<\u2028\u2029]/g;
function Pb(a){return JSON.stringify(a).replace(Ob,function(a){switch(a){case "<":return"\\u003c";case "\u2028":return"\\u2028";case "\u2029":return"\\u2029";default:throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");}})}
var O=Object.assign,Qb=Symbol.for("react.element"),Rb=Symbol.for("react.portal"),Sb=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Ub=Symbol.for("react.profiler"),Vb=Symbol.for("react.provider"),Wb=Symbol.for("react.context"),Xb=Symbol.for("react.forward_ref"),Yb=Symbol.for("react.suspense"),Zb=Symbol.for("react.suspense_list"),$b=Symbol.for("react.memo"),ac=Symbol.for("react.lazy"),bc=Symbol.for("react.scope"),cc=Symbol.for("react.debug_trace_mode"),dc=Symbol.for("react.legacy_hidden"),
ec=Symbol.for("react.default_value"),fc=Symbol.iterator;
function gc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Sb:return"Fragment";case Rb:return"Portal";case Ub:return"Profiler";case Tb:return"StrictMode";case Yb:return"Suspense";case Zb:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Wb:return(a.displayName||"Context")+".Consumer";case Vb:return(a._context.displayName||"Context")+".Provider";case Xb:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case $b:return b=a.displayName||null,null!==b?b:gc(a.type)||"Memo";case ac:b=a._payload;a=a._init;try{return gc(a(b))}catch(c){}}return null}var hc={};function ic(a,b){a=a.contextTypes;if(!a)return hc;var c={},d;for(d in a)c[d]=b[d];return c}var P=null;
function Q(a,b){if(a!==b){a.context._currentValue=a.parentValue;a=a.parent;var c=b.parent;if(null===a){if(null!==c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");}else{if(null===c)throw Error("The stacks must reach the root at the same time. This is a bug in React.");Q(a,c)}b.context._currentValue=b.value}}function jc(a){a.context._currentValue=a.parentValue;a=a.parent;null!==a&&jc(a)}
function kc(a){var b=a.parent;null!==b&&kc(b);a.context._currentValue=a.value}function lc(a,b){a.context._currentValue=a.parentValue;a=a.parent;if(null===a)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===b.depth?Q(a,b):lc(a,b)}
function mc(a,b){var c=b.parent;if(null===c)throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");a.depth===c.depth?Q(a,c):mc(a,c);b.context._currentValue=b.value}function nc(a){var b=P;b!==a&&(null===b?kc(a):null===a?jc(b):b.depth===a.depth?Q(b,a):b.depth>a.depth?lc(b,a):mc(b,a),P=a)}
var oc={isMounted:function(){return!1},enqueueSetState:function(a,b){a=a._reactInternals;null!==a.queue&&a.queue.push(b)},enqueueReplaceState:function(a,b){a=a._reactInternals;a.replace=!0;a.queue=[b]},enqueueForceUpdate:function(){}};
function pc(a,b,c,d){var f=void 0!==a.state?a.state:null;a.updater=oc;a.props=c;a.state=f;var e={queue:[],replace:!1};a._reactInternals=e;var g=b.contextType;a.context="object"===typeof g&&null!==g?g._currentValue:d;g=b.getDerivedStateFromProps;"function"===typeof g&&(g=g(c,f),f=null===g||void 0===g?f:O({},f,g),a.state=f);if("function"!==typeof b.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate&&("function"===typeof a.UNSAFE_componentWillMount||"function"===typeof a.componentWillMount))if(b=
a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),b!==a.state&&oc.enqueueReplaceState(a,a.state,null),null!==e.queue&&0<e.queue.length)if(b=e.queue,g=e.replace,e.queue=null,e.replace=!1,g&&1===b.length)a.state=b[0];else{e=g?b[0]:a.state;f=!0;for(g=g?1:0;g<b.length;g++){var h=b[g];h="function"===typeof h?h.call(a,e,c,d):h;null!=h&&(f?(f=!1,e=O({},e,h)):O(e,h))}a.state=e}else e.queue=null}
var qc={id:1,overflow:""};function rc(a,b,c){var d=a.id;a=a.overflow;var f=32-sc(d)-1;d&=~(1<<f);c+=1;var e=32-sc(b)+f;if(30<e){var g=f-f%5;e=(d&(1<<g)-1).toString(32);d>>=g;f-=g;return{id:1<<32-sc(b)+f|c<<f|d,overflow:e+a}}return{id:1<<e|c<<f|d,overflow:a}}var sc=Math.clz32?Math.clz32:tc,uc=Math.log,vc=Math.LN2;function tc(a){a>>>=0;return 0===a?32:31-(uc(a)/vc|0)|0}function wc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var xc="function"===typeof Object.is?Object.is:wc,R=null,yc=null,zc=null,S=null,T=!1,Ac=!1,U=0,V=null,Bc=0;
function W(){if(null===R)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return R}
function Cc(){if(0<Bc)throw Error("Rendered more hooks than during the previous render");return{memoizedState:null,queue:null,next:null}}function Dc(){null===S?null===zc?(T=!1,zc=S=Cc()):(T=!0,S=zc):null===S.next?(T=!1,S=S.next=Cc()):(T=!0,S=S.next);return S}function Ec(){yc=R=null;Ac=!1;zc=null;Bc=0;S=V=null}function Fc(a,b){return"function"===typeof b?b(a):b}
function Gc(a,b,c){R=W();S=Dc();if(T){var d=S.queue;b=d.dispatch;if(null!==V&&(c=V.get(d),void 0!==c)){V.delete(d);d=S.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);S.memoizedState=d;return[d,b]}return[S.memoizedState,b]}a=a===Fc?"function"===typeof b?b():b:void 0!==c?c(b):b;S.memoizedState=a;a=S.queue={last:null,dispatch:null};a=a.dispatch=Hc.bind(null,R,a);return[S.memoizedState,a]}
function Ic(a,b){R=W();S=Dc();b=void 0===b?null:b;if(null!==S){var c=S.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!xc(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();S.memoizedState=[a,b];return a}
function Hc(a,b,c){if(25<=Bc)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(a===R)if(Ac=!0,a={action:c,next:null},null===V&&(V=new Map),c=V.get(b),void 0===c)V.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Jc(){throw Error("startTransition cannot be called during server rendering.");}function Kc(){}
var Mc={readContext:function(a){return a._currentValue},useContext:function(a){W();return a._currentValue},useMemo:Ic,useReducer:Gc,useRef:function(a){R=W();S=Dc();var b=S.memoizedState;return null===b?(a={current:a},S.memoizedState=a):b},useState:function(a){return Gc(Fc,a)},useInsertionEffect:Kc,useLayoutEffect:function(){},useCallback:function(a,b){return Ic(function(){return a},b)},useImperativeHandle:Kc,useEffect:Kc,useDebugValue:Kc,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[!1,Jc]},useId:function(){var a=yc.treeContext;var b=a.overflow;a=a.id;a=(a&~(1<<32-sc(a)-1)).toString(32)+b;var c=Lc;if(null===c)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");b=U++;a=":"+c.idPrefix+"R"+a;0<b&&(a+="H"+b.toString(32));return a+":"},useMutableSource:function(a,b){W();return b(a._source)},useSyncExternalStore:function(a,b,c){if(void 0===c)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
return c()}},Lc=null,Nc=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;function Oc(a){console.error(a);return null}function X(){}function Pc(a,b){var c=a.pingedTasks;c.push(b);1===c.length&&setImmediate(function(){return Qc(a)})}
function Rc(a,b,c,d,f,e,g,h){a.allPendingTasks++;null===c?a.pendingRootTasks++:c.pendingTasks++;var m={node:b,ping:function(){return Pc(a,m)},blockedBoundary:c,blockedSegment:d,abortSet:f,legacyContext:e,context:g,treeContext:h};f.add(m);return m}function Sc(a,b,c,d,f,e){return{status:0,id:-1,index:b,parentFlushed:!1,chunks:[],children:[],formatContext:d,boundary:c,lastPushedText:f,textEmbedded:e}}
function Y(a,b){a=a.onError(b);if(null!=a&&"string"!==typeof a)throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "'+typeof a+'" instead');return a}function Tc(a,b){var c=a.onShellError;c(b);c=a.onFatalError;c(b);null!==a.destination?(a.status=2,a.destination.destroy(b)):(a.status=1,a.fatalError=b)}
function Uc(a,b,c,d,f){R={};yc=b;U=0;for(a=c(d,f);Ac;)Ac=!1,U=0,Bc+=1,S=null,a=c(d,f);Ec();return a}function Vc(a,b,c,d){var f=c.render(),e=d.childContextTypes;if(null!==e&&void 0!==e){var g=b.legacyContext;if("function"!==typeof c.getChildContext)d=g;else{c=c.getChildContext();for(var h in c)if(!(h in e))throw Error((gc(d)||"Unknown")+'.getChildContext(): key "'+h+'" is not defined in childContextTypes.');d=O({},g,c)}b.legacyContext=d;Z(a,b,f);b.legacyContext=g}else Z(a,b,f)}
function Wc(a,b){if(a&&a.defaultProps){b=O({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}
function Xc(a,b,c,d,f){if("function"===typeof c)if(c.prototype&&c.prototype.isReactComponent){f=ic(c,b.legacyContext);var e=c.contextType;e=new c(d,"object"===typeof e&&null!==e?e._currentValue:f);pc(e,c,d,f);Vc(a,b,e,c)}else{e=ic(c,b.legacyContext);f=Uc(a,b,c,d,e);var g=0!==U;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof)pc(f,c,d,e),Vc(a,b,f,c);else if(g){d=b.treeContext;b.treeContext=rc(d,1,0);try{Z(a,b,f)}finally{b.treeContext=d}}else Z(a,b,f)}else if("string"===
typeof c){f=b.blockedSegment;e=Pa(f.chunks,c,d,a.responseState,f.formatContext);f.lastPushedText=!1;g=f.formatContext;f.formatContext=ya(g,c,d);Yc(a,b,e);f.formatContext=g;switch(c){case "area":case "base":case "br":case "col":case "embed":case "hr":case "img":case "input":case "keygen":case "link":case "meta":case "param":case "source":case "track":case "wbr":break;default:f.chunks.push(Qa,c,Ra)}f.lastPushedText=!1}else{switch(c){case dc:case cc:case Tb:case Ub:case Sb:Z(a,b,d.children);return;case Zb:Z(a,
b,d.children);return;case bc:throw Error("ReactDOMServer does not yet support scope components.");case Yb:a:{c=b.blockedBoundary;f=b.blockedSegment;e=d.fallback;d=d.children;g=new Set;var h={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:g,errorDigest:null},m=Sc(a,f.chunks.length,h,f.formatContext,!1,!1);f.children.push(m);f.lastPushedText=!1;var n=Sc(a,0,null,f.formatContext,!1,!1);n.parentFlushed=!0;b.blockedBoundary=
h;b.blockedSegment=n;try{if(Yc(a,b,d),n.lastPushedText&&n.textEmbedded&&n.chunks.push(za),n.status=1,Zc(h,n),0===h.pendingTasks)break a}catch(p){n.status=4,h.forceClientRender=!0,h.errorDigest=Y(a,p)}finally{b.blockedBoundary=c,b.blockedSegment=f}b=Rc(a,e,c,m,g,b.legacyContext,b.context,b.treeContext);a.pingedTasks.push(b)}return}if("object"===typeof c&&null!==c)switch(c.$$typeof){case Xb:d=Uc(a,b,c.render,d,f);if(0!==U){c=b.treeContext;b.treeContext=rc(c,1,0);try{Z(a,b,d)}finally{b.treeContext=c}}else Z(a,
b,d);return;case $b:c=c.type;d=Wc(c,d);Xc(a,b,c,d,f);return;case Vb:f=d.children;c=c._context;d=d.value;e=c._currentValue;c._currentValue=d;g=P;P=d={parent:g,depth:null===g?0:g.depth+1,context:c,parentValue:e,value:d};b.context=d;Z(a,b,f);a=P;if(null===a)throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");d=a.parentValue;a.context._currentValue=d===ec?a.context._defaultValue:d;a=P=a.parent;b.context=a;return;case Wb:d=d.children;d=d(c._currentValue);Z(a,b,d);return;
case ac:f=c._init;c=f(c._payload);d=Wc(c,d);Xc(a,b,c,d,void 0);return}throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+((null==c?c:typeof c)+"."));}}
function Z(a,b,c){b.node=c;if("object"===typeof c&&null!==c){switch(c.$$typeof){case Qb:Xc(a,b,c.type,c.props,c.ref);return;case Rb:throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");case ac:var d=c._init;c=d(c._payload);Z(a,b,c);return}if(qa(c)){$c(a,b,c);return}null===c||"object"!==typeof c?d=null:(d=fc&&c[fc]||c["@@iterator"],d="function"===typeof d?d:null);if(d&&(d=d.call(c))){c=d.next();if(!c.done){var f=
[];do f.push(c.value),c=d.next();while(!c.done);$c(a,b,f)}return}a=Object.prototype.toString.call(c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===a?"object with keys {"+Object.keys(c).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");}"string"===typeof c?(d=b.blockedSegment,d.lastPushedText=Aa(b.blockedSegment.chunks,c,a.responseState,d.lastPushedText)):"number"===typeof c&&(d=b.blockedSegment,d.lastPushedText=Aa(b.blockedSegment.chunks,
""+c,a.responseState,d.lastPushedText))}function $c(a,b,c){for(var d=c.length,f=0;f<d;f++){var e=b.treeContext;b.treeContext=rc(e,d,f);try{Yc(a,b,c[f])}finally{b.treeContext=e}}}
function Yc(a,b,c){var d=b.blockedSegment.formatContext,f=b.legacyContext,e=b.context;try{return Z(a,b,c)}catch(m){if(Ec(),"object"===typeof m&&null!==m&&"function"===typeof m.then){c=m;var g=b.blockedSegment,h=Sc(a,g.chunks.length,null,g.formatContext,g.lastPushedText,!0);g.children.push(h);g.lastPushedText=!1;a=Rc(a,b.node,b.blockedBoundary,h,b.abortSet,b.legacyContext,b.context,b.treeContext).ping;c.then(a,a);b.blockedSegment.formatContext=d;b.legacyContext=f;b.context=e;nc(e)}else throw b.blockedSegment.formatContext=
d,b.legacyContext=f,b.context=e,nc(e),m;}}function ad(a){var b=a.blockedBoundary;a=a.blockedSegment;a.status=3;bd(this,b,a)}
function cd(a,b,c){var d=a.blockedBoundary;a.blockedSegment.status=3;null===d?(b.allPendingTasks--,2!==b.status&&(b.status=2,null!==b.destination&&b.destination.end())):(d.pendingTasks--,d.forceClientRender||(d.forceClientRender=!0,d.errorDigest=b.onError(void 0===c?Error("The render was aborted by the server without a reason."):c),d.parentFlushed&&b.clientRenderedBoundaries.push(d)),d.fallbackAbortableTasks.forEach(function(a){return cd(a,b,c)}),d.fallbackAbortableTasks.clear(),b.allPendingTasks--,
0===b.allPendingTasks&&(a=b.onAllReady,a()))}function Zc(a,b){if(0===b.chunks.length&&1===b.children.length&&null===b.children[0].boundary){var c=b.children[0];c.id=b.id;c.parentFlushed=!0;1===c.status&&Zc(a,c)}else a.completedSegments.push(b)}
function bd(a,b,c){if(null===b){if(c.parentFlushed){if(null!==a.completedRootSegment)throw Error("There can only be one root segment. This is a bug in React.");a.completedRootSegment=c}a.pendingRootTasks--;0===a.pendingRootTasks&&(a.onShellError=X,b=a.onShellReady,b())}else b.pendingTasks--,b.forceClientRender||(0===b.pendingTasks?(c.parentFlushed&&1===c.status&&Zc(b,c),b.parentFlushed&&a.completedBoundaries.push(b),b.fallbackAbortableTasks.forEach(ad,a),b.fallbackAbortableTasks.clear()):c.parentFlushed&&
1===c.status&&(Zc(b,c),1===b.completedSegments.length&&b.parentFlushed&&a.partialBoundaries.push(b)));a.allPendingTasks--;0===a.allPendingTasks&&(a=a.onAllReady,a())}
function Qc(a){if(2!==a.status){var b=P,c=Nc.current;Nc.current=Mc;var d=Lc;Lc=a.responseState;try{var f=a.pingedTasks,e;for(e=0;e<f.length;e++){var g=f[e];var h=a,m=g.blockedSegment;if(0===m.status){nc(g.context);try{Z(h,g,g.node),m.lastPushedText&&m.textEmbedded&&m.chunks.push(za),g.abortSet.delete(g),m.status=1,bd(h,g.blockedBoundary,m)}catch(E){if(Ec(),"object"===typeof E&&null!==E&&"function"===typeof E.then){var n=g.ping;E.then(n,n)}else{g.abortSet.delete(g);m.status=4;var p=g.blockedBoundary,
v=E,C=Y(h,v);null===p?Tc(h,v):(p.pendingTasks--,p.forceClientRender||(p.forceClientRender=!0,p.errorDigest=C,p.parentFlushed&&h.clientRenderedBoundaries.push(p)));h.allPendingTasks--;if(0===h.allPendingTasks){var D=h.onAllReady;D()}}}finally{}}}f.splice(0,e);null!==a.destination&&dd(a,a.destination)}catch(E){Y(a,E),Tc(a,E)}finally{Lc=d,Nc.current=c,c===Mc&&nc(b)}}}
function ed(a,b,c){c.parentFlushed=!0;switch(c.status){case 0:var d=c.id=a.nextSegmentId++;c.lastPushedText=!1;c.textEmbedded=!1;a=a.responseState;r(b,Sa);r(b,a.placeholderPrefix);a=d.toString(16);r(b,a);return w(b,Ta);case 1:c.status=2;var f=!0;d=c.chunks;var e=0;c=c.children;for(var g=0;g<c.length;g++){for(f=c[g];e<f.index;e++)r(b,d[e]);f=fd(a,b,f)}for(;e<d.length-1;e++)r(b,d[e]);e<d.length&&(f=w(b,d[e]));return f;default:throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
}}
function fd(a,b,c){var d=c.boundary;if(null===d)return ed(a,b,c);d.parentFlushed=!0;if(d.forceClientRender)d=d.errorDigest,w(b,Xa),r(b,Za),d&&(r(b,ab),r(b,F(d)),r(b,$a)),w(b,bb),ed(a,b,c);else if(0<d.pendingTasks){d.rootSegmentID=a.nextSegmentId++;0<d.completedSegments.length&&a.partialBoundaries.push(d);var f=a.responseState;var e=f.nextSuspenseID++;f=x(f.boundaryPrefix+e.toString(16));d=d.id=f;cb(b,a.responseState,d);ed(a,b,c)}else if(d.byteSize>a.progressiveChunkSize)d.rootSegmentID=a.nextSegmentId++,a.completedBoundaries.push(d),
cb(b,a.responseState,d.id),ed(a,b,c);else{w(b,Ua);c=d.completedSegments;if(1!==c.length)throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");fd(a,b,c[0])}return w(b,Ya)}function gd(a,b,c){yb(b,a.responseState,c.formatContext,c.id);fd(a,b,c);return zb(b,c.formatContext)}
function hd(a,b,c){for(var d=c.completedSegments,f=0;f<d.length;f++)id(a,b,c,d[f]);d.length=0;a=a.responseState;d=c.id;c=c.rootSegmentID;r(b,a.startInlineScript);a.sentCompleteBoundaryFunction?r(b,Gb):(a.sentCompleteBoundaryFunction=!0,r(b,Fb));if(null===d)throw Error("An ID must have been assigned before we can complete the boundary.");c=c.toString(16);r(b,d);r(b,Hb);r(b,a.segmentPrefix);r(b,c);return w(b,Ib)}
function id(a,b,c,d){if(2===d.status)return!0;var f=d.id;if(-1===f){if(-1===(d.id=c.rootSegmentID))throw Error("A root segment ID must have been assigned by now. This is a bug in React.");return gd(a,b,d)}gd(a,b,d);a=a.responseState;r(b,a.startInlineScript);a.sentCompleteSegmentFunction?r(b,Bb):(a.sentCompleteSegmentFunction=!0,r(b,Ab));r(b,a.segmentPrefix);f=f.toString(16);r(b,f);r(b,Cb);r(b,a.placeholderPrefix);r(b,f);return w(b,Db)}
function dd(a,b){k=new Uint8Array(2048);l=0;q=!0;try{var c=a.completedRootSegment;if(null!==c&&0===a.pendingRootTasks){fd(a,b,c);a.completedRootSegment=null;var d=a.responseState.bootstrapChunks;for(c=0;c<d.length-1;c++)r(b,d[c]);c<d.length&&w(b,d[c])}var f=a.clientRenderedBoundaries,e;for(e=0;e<f.length;e++){var g=f[e];d=b;var h=a.responseState,m=g.id,n=g.errorDigest,p=g.errorMessage,v=g.errorComponentStack;r(d,h.startInlineScript);h.sentClientRenderFunction?r(d,Kb):(h.sentClientRenderFunction=!0,
r(d,Jb));if(null===m)throw Error("An ID must have been assigned before we can complete the boundary.");r(d,m);r(d,Lb);if(n||p||v)r(d,Nb),r(d,Pb(n||""));if(p||v)r(d,Nb),r(d,Pb(p||""));v&&(r(d,Nb),r(d,Pb(v)));if(!w(d,Mb)){a.destination=null;e++;f.splice(0,e);return}}f.splice(0,e);var C=a.completedBoundaries;for(e=0;e<C.length;e++)if(!hd(a,b,C[e])){a.destination=null;e++;C.splice(0,e);return}C.splice(0,e);ca(b);k=new Uint8Array(2048);l=0;q=!0;var D=a.partialBoundaries;for(e=0;e<D.length;e++){var E=D[e];
a:{f=a;g=b;var na=E.completedSegments;for(h=0;h<na.length;h++)if(!id(f,g,E,na[h])){h++;na.splice(0,h);var Eb=!1;break a}na.splice(0,h);Eb=!0}if(!Eb){a.destination=null;e++;D.splice(0,e);return}}D.splice(0,e);var oa=a.completedBoundaries;for(e=0;e<oa.length;e++)if(!hd(a,b,oa[e])){a.destination=null;e++;oa.splice(0,e);return}oa.splice(0,e)}finally{ca(b),"function"===typeof b.flush&&b.flush(),0===a.allPendingTasks&&0===a.pingedTasks.length&&0===a.clientRenderedBoundaries.length&&0===a.completedBoundaries.length&&
b.end()}}function jd(a){setImmediate(function(){return Qc(a)})}function kd(a,b){if(1===a.status)a.status=2,b.destroy(a.fatalError);else if(2!==a.status&&null===a.destination){a.destination=b;try{dd(a,b)}catch(c){Y(a,c),Tc(a,c)}}}function ld(a,b){try{var c=a.abortableTasks;c.forEach(function(c){return cd(c,a,b)});c.clear();null!==a.destination&&dd(a,a.destination)}catch(d){Y(a,d),Tc(a,d)}}function md(a,b){return function(){return kd(b,a)}}function nd(a,b){return function(){return ld(a,b)}}
function od(a,b){var c=b?b.identifierPrefix:void 0,d=b?b.nonce:void 0,f=b?b.bootstrapScriptContent:void 0,e=b?b.bootstrapScripts:void 0;var g=b?b.bootstrapModules:void 0;c=void 0===c?"":c;d=void 0===d?ra:x('<script nonce="'+F(d)+'">');var h=[];void 0!==f&&h.push(d,(""+f).replace(wa,xa),sa);if(void 0!==e)for(f=0;f<e.length;f++)h.push(ta,F(e[f]),va);if(void 0!==g)for(e=0;e<g.length;e++)h.push(ua,F(g[e]),va);g={bootstrapChunks:h,startInlineScript:d,placeholderPrefix:x(c+"P:"),segmentPrefix:x(c+"S:"),
boundaryPrefix:c+"B:",idPrefix:c,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1};e=b?b.namespaceURI:void 0;e=G("http://www.w3.org/2000/svg"===e?2:"http://www.w3.org/1998/Math/MathML"===e?3:0,null);f=b?b.progressiveChunkSize:void 0;d=b?b.onError:void 0;h=b?b.onAllReady:void 0;var m=b?b.onShellReady:void 0,n=b?b.onShellError:void 0;b=[];c=new Set;g={destination:null,responseState:g,progressiveChunkSize:void 0===f?12800:f,status:0,fatalError:null,
nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:c,pingedTasks:b,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:void 0===d?Oc:d,onAllReady:void 0===h?X:h,onShellReady:void 0===m?X:m,onShellError:void 0===n?X:n,onFatalError:X};e=Sc(g,0,null,e,!1,!1);e.parentFlushed=!0;a=Rc(g,a,null,e,c,hc,null,qc);b.push(a);return g}
exports.renderToPipeableStream=function(a,b){var c=od(a,b),d=!1;jd(c);return{pipe:function(a){if(d)throw Error("React currently only supports piping to one writable stream.");d=!0;kd(c,a);a.on("drain",md(a,c));a.on("error",nd(c,Error("The destination stream errored while writing data.")));a.on("close",nd(c,Error("The destination stream closed early.")));return a},abort:function(a){ld(c,a)}}};exports.version="18.3.1";


/***/ },

/***/ 7422
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4362);


/***/ },

/***/ 4362
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var l, s;
if (true) {
  l = __webpack_require__(6711);
  s = __webpack_require__(6513);
} else // removed by dead control flow
{}

__webpack_unused_export__ = l.version;
__webpack_unused_export__ = l.renderToString;
__webpack_unused_export__ = l.renderToStaticMarkup;
__webpack_unused_export__ = l.renderToNodeStream;
__webpack_unused_export__ = l.renderToStaticNodeStream;
exports.renderToPipeableStream = s.renderToPipeableStream;


/***/ },

/***/ 115
(module) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ },

/***/ 545
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mg: () => (/* binding */ W),
/* harmony export */   vd: () => (/* binding */ q)
/* harmony export */ });
/* unused harmony export HelmetData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7927);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2833);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_4__);
function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,c(t,e)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)e.indexOf(r=o[n])>=0||(i[r]=t[r]);return i}var l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},p={rel:["amphtml","canonical","alternate"]},f={type:["application/ld+json"]},d={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},h=Object.keys(l).map(function(t){return l[t]}),m={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},y=Object.keys(m).reduce(function(t,e){return t[m[e]]=e,t},{}),T=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},g=function(t){var e=T(t,l.TITLE),r=T(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,function(){return e});var n=T(t,"defaultTitle");return e||n||void 0},b=function(t){return T(t,"onChangeClientState")||function(){}},v=function(t,e){return e.filter(function(e){return void 0!==e[t]}).map(function(e){return e[t]}).reduce(function(t,e){return a({},t,e)},{})},A=function(t,e){return e.filter(function(t){return void 0!==t[l.BASE]}).map(function(t){return t[l.BASE]}).reverse().reduce(function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e},[])},C=function(t,e,r){var n={};return r.filter(function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof e[t]+'"'),!1)}).map(function(e){return e[t]}).reverse().reduce(function(t,r){var i={};r.filter(function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===c&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(e){return t.push(e)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u}return t},[]).reverse()},O=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1)if(t[r][e])return!0;return!1},S=function(t){return Array.isArray(t)?t.join(""):t},E=function(t,e){return Array.isArray(t)?t.reduce(function(t,r){return function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:t}},I=function(t,e){var r;return a({},t,((r={})[e]=void 0,r))},P=[l.NOSCRIPT,l.SCRIPT,l.STYLE],w=function(t,e){return void 0===e&&(e=!0),!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},x=function(t){return Object.keys(t).reduce(function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},L=function(t,e){return void 0===e&&(e={}),Object.keys(t).reduce(function(e,r){return e[m[r]||r]=t[r],e},e)},j=function(e,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(t){var e=m[t]||t;"innerHTML"===e||"cssText"===e?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[e]=r[t]}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(e,o)})},M=function(e,r,n){switch(e){case l.TITLE:return{toComponent:function(){return n=r.titleAttributes,(i={key:e=r.title})["data-rh"]=!0,o=L(n,i),[react__WEBPACK_IMPORTED_MODULE_0__.createElement(l.TITLE,o,e)];// removed by dead control flow
 var e, n, i, o; },toString:function(){return function(t,e,r,n){var i=x(r),o=S(e);return i?"<"+t+' data-rh="true" '+i+">"+w(o,n)+"</"+t+">":"<"+t+' data-rh="true">'+w(o,n)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return L(r)},toString:function(){return x(r)}};default:return{toComponent:function(){return j(e,r)},toString:function(){return function(t,e,r){return e.reduce(function(e,n){var i=Object.keys(n).filter(function(t){return!("innerHTML"===t||"cssText"===t)}).reduce(function(t,e){var i=void 0===n[e]?e:e+'="'+w(n[e],r)+'"';return t?t+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===P.indexOf(t);return e+"<"+t+' data-rh="true" '+i+(a?"/>":">"+o+"</"+t+">")},"")}(e,r,n)}}}},k=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,o=t.noscriptTags,a=t.styleTags,s=t.title,c=void 0===s?"":s,u=t.titleAttributes,h=t.linkTags,m=t.metaTags,y=t.scriptTags,T={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(t){var e=t.linkTags,r=t.scriptTags,n=t.encode,i=E(t.metaTags,d),o=E(e,p),a=E(r,f);return{priorityMethods:{toComponent:function(){return[].concat(j(l.META,i.priority),j(l.LINK,o.priority),j(l.SCRIPT,a.priority))},toString:function(){return M(l.META,i.priority,n)+" "+M(l.LINK,o.priority,n)+" "+M(l.SCRIPT,a.priority,n)}},metaTags:i.default,linkTags:o.default,scriptTags:a.default}}(t);T=g.priorityMethods,h=g.linkTags,m=g.metaTags,y=g.scriptTags}return{priority:T,base:M(l.BASE,e,n),bodyAttributes:M("bodyAttributes",r,n),htmlAttributes:M("htmlAttributes",i,n),link:M(l.LINK,h,n),meta:M(l.META,m,n),noscript:M(l.NOSCRIPT,o,n),script:M(l.SCRIPT,y,n),style:M(l.STYLE,a,n),title:M(l.TITLE,{title:c,titleAttributes:u},n)}},H=[],N=function(t,e){var r=this;void 0===e&&(e="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(t){r.context.helmet=t},helmetInstances:{get:function(){return r.canUseDOM?H:r.instances},add:function(t){(r.canUseDOM?H:r.instances).push(t)},remove:function(t){var e=(r.canUseDOM?H:r.instances).indexOf(t);(r.canUseDOM?H:r.instances).splice(e,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=k({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},R=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),D=prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({setHelmet:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),helmetInstances:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({get:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),add:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),remove:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)})}),U="undefined"!=typeof document,q=/*#__PURE__*/function(e){function r(t){var n;return(n=e.call(this,t)||this).helmetData=new N(n.props.context,r.canUseDOM),n}return s(r,e),r.prototype.render=function(){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Provider,{value:this.helmetData.value},this.props.children)},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);q.canUseDOM=U,q.propTypes={context:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({helmet:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape()}),children:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired},q.defaultProps={context:{}},q.displayName="HelmetProvider";var Y=function(t,e){var r,n=document.head||document.querySelector(l.HEAD),i=n.querySelectorAll(t+"[data-rh]"),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach(function(e){var n=document.createElement(t);for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&("innerHTML"===i?n.innerHTML=e.innerHTML:"cssText"===i?n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText)):n.setAttribute(i,void 0===e[i]?"":e[i]));n.setAttribute("data-rh","true"),o.some(function(t,e){return r=e,n.isEqualNode(t)})?o.splice(r,1):a.push(n)}),o.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return n.appendChild(t)}),{oldTags:o,newTags:a}},B=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-rh"),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s+=1){var c=a[s],u=e[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p-=1)r.removeAttribute(o[p]);i.length===o.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==a.join(",")&&r.setAttribute("data-rh",a.join(","))}},K=function(t,e){var r=t.baseTag,n=t.htmlAttributes,i=t.linkTags,o=t.metaTags,a=t.noscriptTags,s=t.onChangeClientState,c=t.scriptTags,u=t.styleTags,p=t.title,f=t.titleAttributes;B(l.BODY,t.bodyAttributes),B(l.HTML,n),function(t,e){void 0!==t&&document.title!==t&&(document.title=S(t)),B(l.TITLE,e)}(p,f);var d={baseTag:Y(l.BASE,r),linkTags:Y(l.LINK,i),metaTags:Y(l.META,o),noscriptTags:Y(l.NOSCRIPT,a),scriptTags:Y(l.SCRIPT,c),styleTags:Y(l.STYLE,u)},h={},m={};Object.keys(d).forEach(function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(h[t]=r),n.length&&(m[t]=d[t].oldTags)}),e&&e(),s(t,h,m)},_=null,z=/*#__PURE__*/function(t){function e(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).rendered=!1,e}s(e,t);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!shallowequal__WEBPACK_IMPORTED_MODULE_4___default()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,e,r=this.props.context,n=r.setHelmet,i=null,o=(t=r.helmetInstances.get().map(function(t){var e=a({},t.props);return delete e.context,e}),{baseTag:A(["href"],t),bodyAttributes:v("bodyAttributes",t),defer:T(t,"defer"),encode:T(t,"encodeSpecialCharacters"),htmlAttributes:v("htmlAttributes",t),linkTags:C(l.LINK,["rel","href"],t),metaTags:C(l.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:C(l.NOSCRIPT,["innerHTML"],t),onChangeClientState:b(t),scriptTags:C(l.SCRIPT,["src","innerHTML"],t),styleTags:C(l.STYLE,["cssText"],t),title:g(t),titleAttributes:v("titleAttributes",t),prioritizeSeoTags:O(t,"prioritizeSeoTags")});q.canUseDOM?(e=o,_&&cancelAnimationFrame(_),e.defer?_=requestAnimationFrame(function(){K(e,function(){_=null})}):(K(e),_=null)):k&&(i=k(o)),n(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(react__WEBPACK_IMPORTED_MODULE_0__.Component);z.propTypes={context:D.isRequired},z.displayName="HelmetDispatcher";var F=["children"],G=["children"],W=/*#__PURE__*/function(e){function r(){return e.apply(this,arguments)||this}s(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(t){return!react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(I(this.props,"helmetData"),I(t,"helmetData"))},o.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:e};case l.STYLE:return{cssText:e};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren;return a({},n,((e={})[r.type]=[].concat(n[r.type]||[],[a({},t.newChildProps,this.mapNestedChildrenToProps(r,t.nestedChildren))]),e))},o.mapObjectTypeChildren=function(t){var e,r,n=t.child,i=t.newProps,o=t.newChildProps,s=t.nestedChildren;switch(n.type){case l.TITLE:return a({},i,((e={})[n.type]=s,e.titleAttributes=a({},o),e));case l.BODY:return a({},i,{bodyAttributes:a({},o)});case l.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(t,e){var r=a({},e);return Object.keys(t).forEach(function(e){var n;r=a({},r,((n={})[e]=t[e],n))}),r},o.warnOnInvalidChildren=function(t,e){return invariant__WEBPACK_IMPORTED_MODULE_3___default()(h.some(function(e){return t.type===e}),"function"==typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+h.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),invariant__WEBPACK_IMPORTED_MODULE_3___default()(!e||"string"==typeof e||Array.isArray(e)&&!e.some(function(t){return"string"!=typeof t}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(e,r){var n=this,i={};return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(e,function(t){if(t&&t.props){var e=t.props,o=e.children,a=u(e,F),s=Object.keys(a).reduce(function(t,e){return t[y[e]||e]=a[e],t},{}),c=t.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(t,o),c){case l.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:t,newProps:r,newChildProps:s,nestedChildren:o})}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var e=this.props,r=e.children,n=u(e,G),i=a({},n),o=n.helmetData;return r&&(i=this.mapChildrenToProps(r,i)),!o||o instanceof N||(o=new N(o.context,o.instances)),o?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:o.value,helmetData:void 0})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(R.Consumer,null,function(e){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,a({},i,{context:e}))})},r}(react__WEBPACK_IMPORTED_MODULE_0__.Component);W.propTypes={base:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)),(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)]),defaultTitle:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),defer:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),encodeSpecialCharacters:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),link:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),meta:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),noscript:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),onChangeClientState:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),script:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),style:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),titleAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),titleTemplate:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),prioritizeSeoTags:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),helmetData:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)},W.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},W.displayName="Helmet";
//# sourceMappingURL=index.module.js.map


/***/ },

/***/ 2799
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ },

/***/ 4363
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(2799);
} else // removed by dead control flow
{}


/***/ },

/***/ 3259
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(6540);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (false) // removed by dead control flow
{}

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

var LoadableCaptureContext = React.createContext(null);

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = _extends({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "retry", function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      });

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    var _proto = LoadableComponent.prototype;

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this._loadModule();
    };

    _proto.componentDidMount = function componentDidMount() {
      this._mounted = true;
    };

    _proto._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      var setStateWithMountCheck = function setStateWithMountCheck(newState) {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState(newState);
      };

      if (typeof opts.delay === 'number') {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            setStateWithMountCheck({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          setStateWithMountCheck({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        setStateWithMountCheck({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
        return null;
      }).catch(function (err) {
        update();
        return null;
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    _proto._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    _proto.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _defineProperty(_class, "contextType", LoadableCaptureContext), _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture =
/*#__PURE__*/
function (_React$Component2) {
  _inheritsLoose(Capture, _React$Component2);

  function Capture() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto2 = Capture.prototype;

  _proto2.render = function render() {
    return React.createElement(LoadableCaptureContext.Provider, {
      value: {
        report: this.props.report
      }
    }, React.Children.only(this.props.children));
  };

  return Capture;
}(React.Component);

Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ },

/***/ 2831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ matchRoutes),
/* harmony export */   v: () => (/* binding */ renderRoutes)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6347);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);




function matchRoutes(routes, pathname,
/*not public API*/
branch) {
  if (branch === void 0) {
    branch = [];
  }

  routes.some(function (route) {
    var match = route.path ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : react_router__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .Ix.computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route: route,
        match: match
      });

      if (route.routes) {
        matchRoutes(route.routes, pathname, branch);
      }
    }

    return match;
  });
  return branch;
}

function renderRoutes(routes, extraProps, switchProps) {
  if (extraProps === void 0) {
    extraProps = {};
  }

  if (switchProps === void 0) {
    switchProps = {};
  }

  return routes ? react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .Switch */ .dO, switchProps, routes.map(function (route, i) {
    return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .Route */ .qh, {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        return route.render ? route.render((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, props, {}, extraProps, {
          route: route
        })) : react__WEBPACK_IMPORTED_MODULE_2__.createElement(route.component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, props, extraProps, {
          route: route
        }));
      }
    });
  })) : null;
}


//# sourceMappingURL=react-router-config.js.map


/***/ },

/***/ 4625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N_: () => (/* binding */ Link),
/* harmony export */   k2: () => (/* binding */ NavLink)
/* harmony export */ });
/* unused harmony exports BrowserRouter, HashRouter */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6347);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4499);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8587);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1561);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createBrowserHistory */ .zR)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (false) // removed by dead control flow
{}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = /*#__PURE__*/function (_React$Component) {
  ;(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createHashHistory */ .TM)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .Ix, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

if (false) // removed by dead control flow
{}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createLocation */ .yJ)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", props);
});

if (false) // removed by dead control flow
{}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ref2, ["component", "replace", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .__RouterContext */ .XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var isDuplicateNavigation = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createPath */ .AO)(context.location) === (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createPath */ .AO)(normalizeToLocation(location));
        var method = replace || isDuplicateNavigation ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(component, props);
  });
});

if (false) // removed by dead control flow
{ var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__/* .__RouterContext */ .XZ.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_0__/* .matchPath */ .B6)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = typeof classNameProp === "function" ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === "function" ? styleProp(isActive) : styleProp;

    if (isActive) {
      className = joinClassnames(className, activeClassName);
      style = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({}, style, activeStyle);
    }

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Link, props);
  });
});

if (false) // removed by dead control flow
{ var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ },

/***/ 6347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ matchPath),
/* harmony export */   Ix: () => (/* binding */ Router),
/* harmony export */   W6: () => (/* binding */ useHistory),
/* harmony export */   XZ: () => (/* binding */ context),
/* harmony export */   dO: () => (/* binding */ Switch),
/* harmony export */   kO: () => (/* binding */ StaticRouter),
/* harmony export */   qh: () => (/* binding */ Route),
/* harmony export */   zy: () => (/* binding */ useLocation)
/* harmony export */ });
/* unused harmony exports MemoryRouter, Prompt, Redirect, __HistoryContext, generatePath, useParams, useRouteMatch, withRouter */
/* unused harmony import specifier */ var React;
/* unused harmony import specifier */ var createLocation;
/* unused harmony import specifier */ var locationsAreEqual;
/* unused harmony import specifier */ var invariant;
/* unused harmony import specifier */ var _extends;
/* unused harmony import specifier */ var pathToRegexp;
/* unused harmony import specifier */ var _objectWithoutPropertiesLoose;
/* unused harmony import specifier */ var hoistStatics;
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4499);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1561);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8168);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5302);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4363);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8587);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4146);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9__);












var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== "undefined" // 'global proper'
? // eslint-disable-next-line no-undef
globalThis : typeof window !== "undefined" ? window // Browser
: typeof global !== "undefined" ? global // node.js
: {};

function getUniqueId() {
  var key = "__global_unique_id__";
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
} // Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // eslint-disable-next-line no-self-compare
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = "__create-react-context-" + getUniqueId() + "__";

  var Provider = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Provider, _React$Component);

    function Provider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) // removed by dead control flow
{}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_1__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_React$Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Consumer, _React$Component2);

    function Consumer() {
      var _this2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _React$Component2.call.apply(_React$Component2, [this].concat(args)) || this;
      _this2.observedBits = void 0;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_1__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

// MIT License
var createContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext || createReactContext;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = createContext();
  context.displayName = name;
  return context;
};

var historyContext = /*#__PURE__*/createNamedContext("Router-History");

var context = /*#__PURE__*/createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        _this._pendingLocation = location;
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;

    if (this.unlisten) {
      // Any pre-mount location changes have been captured at
      // this point, so unregister the listener.
      this.unlisten();
    }

    if (!this.props.staticContext) {
      this.unlisten = this.props.history.listen(function (location) {
        if (_this2._isMounted) {
          _this2.setState({
            location: location
          });
        }
      });
    }

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
      this._isMounted = false;
      this._pendingLocation = null;
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) // removed by dead control flow
{}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = /*#__PURE__*/function (_React$Component) {
  ;(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createMemoryHistory */ .sC)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) // removed by dead control flow
{}

var Lifecycle = /*#__PURE__*/function (_React$Component) {
  ;(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) // removed by dead control flow
{ var messageType; }

var cache = (/* unused pure expression or super */ null && ({}));
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return /*#__PURE__*/React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) // removed by dead control flow
{}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_6___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route = /*#__PURE__*/function (_React$Component) {
  ;(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && isEmptyChildren(children)) {
        children = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) // removed by dead control flow
{}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createPath */ .AO)(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter = /*#__PURE__*/function (_React$Component) {
  ;(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createLocation */ .yJ)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createLocation */ .yJ)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) // removed by dead control flow
{}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = /*#__PURE__*/function (_React$Component) {
  ;(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(_this.props.children, function (child) {
        if (match == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (false) // removed by dead control flow
{}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return /*#__PURE__*/React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return /*#__PURE__*/React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) // removed by dead control flow
{}

  return hoistStatics(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext;
function useHistory() {
  if (false) // removed by dead control flow
{}

  return useContext(historyContext);
}
function useLocation() {
  if (false) // removed by dead control flow
{}

  return useContext(context).location;
}
function useParams() {
  if (false) // removed by dead control flow
{}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) // removed by dead control flow
{}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) // removed by dead control flow
{ var secondaryBuildName, initialBuildName, buildNames, key, global$1; }


//# sourceMappingURL=react-router.js.map


/***/ },

/***/ 1020
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ },

/***/ 5287
(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ },

/***/ 6540
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else // removed by dead control flow
{}


/***/ },

/***/ 4848
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(1020);
} else // removed by dead control flow
{}


/***/ },

/***/ 4307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvePathname);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 2833
(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ },

/***/ 7075
(module) {

"use strict";
module.exports = require("node:stream");

/***/ },

/***/ 8321
(module) {

"use strict";
module.exports = require("node:stream/consumers");

/***/ },

/***/ 2203
(module) {

"use strict";
module.exports = require("stream");

/***/ },

/***/ 9023
(module) {

"use strict";
module.exports = require("util");

/***/ },

/***/ 4784
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "title": "CodeWithSarvy",
  "tagline": "Engineering Notes & Developer Portfolio",
  "favicon": "favicon.svg",
  "url": "https://codewithsarvy.dev",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.js",
          "routeBasePath": "docs"
        },
        "blog": false,
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": true
    },
    "navbar": {
      "title": "codewithsarvy",
      "logo": {
        "alt": "CodeWithSarvy Logo",
        "src": "favicon.svg"
      },
      "items": [
        {
          "to": "/#about",
          "label": "About",
          "position": "left"
        },
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Docs"
        },
        {
          "href": "https://github.com/codewithsarvy",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://linkedin.com/in/codewithsarvy",
          "label": "LinkedIn",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Knowledge Vault",
          "items": [
            {
              "label": "Core Java",
              "to": "/docs/core-java/oops-concepts"
            },
            {
              "label": "DSA & Algorithms",
              "to": "/docs/dsa/time-space-complexity"
            },
            {
              "label": "Spring Boot",
              "to": "/docs/spring-boot/spring-core-ioc"
            },
            {
              "label": "React.js",
              "to": "/docs/react/modern-javascript"
            }
          ]
        },
        {
          "title": "Connect",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/codewithsarvy"
            },
            {
              "label": "LinkedIn",
              "href": "https://linkedin.com/in/codewithsarvy"
            }
          ]
        }
      ],
      "copyright": "© 2026 Sarwvidya (codewithsarvy). Built with Docusaurus & React."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "java",
        "bash",
        "json",
        "sql",
        "docker",
        "yaml"
      ],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "storage": {
    "type": "localStorage",
    "namespace": false
  },
  "future": {
    "v4": {
      "removeLegacyPostBuildHeadAttribute": false,
      "useCssCascadeLayers": false,
      "siteStorageNamespacing": false,
      "fasterByDefault": false,
      "mdx1CompatDisabledByDefault": false
    },
    "faster": {
      "swcJsLoader": false,
      "swcJsMinimizer": false,
      "swcHtmlMinimizer": false,
      "lightningCssMinimizer": false,
      "mdxCrossCompilerCache": false,
      "rspackBundler": false,
      "rspackPersistentCache": false,
      "ssgWorkerThreads": false,
      "gitEagerVcs": false
    },
    "experimental_vcs": {},
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "emoji": true,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    },
    "hooks": {
      "onBrokenMarkdownLinks": "warn",
      "onBrokenMarkdownImages": "throw"
    }
  }
});

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 8168
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ },

/***/ 7387
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3662);

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, o);
}


/***/ },

/***/ 9867
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _interopRequireWildcard)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2284);

function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap) var r = new WeakMap(),
    n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        "default": e
      };
    if (null === e || "object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e) && "function" != typeof e) return f;
    if (o = t ? n : r) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
    return f;
  })(e, t);
}


/***/ },

/***/ 8587
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ },

/***/ 3662
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ },

/***/ 2284
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ },

/***/ 5379
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([require("C:\\Projects\\ReactJs\\codewithsarvy\\node_modules\\infima\\dist\\css\\default\\default.css"),require("C:\\Projects\\ReactJs\\codewithsarvy\\node_modules\\@docusaurus\\theme-classic\\lib\\prism-include-languages"),require("C:\\Projects\\ReactJs\\codewithsarvy\\node_modules\\@docusaurus\\theme-classic\\lib\\nprogress"),require("C:\\Projects\\ReactJs\\codewithsarvy\\src\\css\\custom.css")]);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 699
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9867);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"0058b4c6":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-175.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-175.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-175.json")],"0e384e19":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/intro.md"))),"@site/docs/intro.md",require.resolveWeak("@site/docs/intro.md")],"14eb3368":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@theme/DocCategoryGeneratedIndexPage"))),"@theme/DocCategoryGeneratedIndexPage",require.resolveWeak("@theme/DocCategoryGeneratedIndexPage")],"17896441":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@theme/DocItem"))),"@theme/DocItem",require.resolveWeak("@theme/DocItem")],"287a6a06":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/devops/01-git-workflows.md"))),"@site/docs/devops/01-git-workflows.md",require.resolveWeak("@site/docs/devops/01-git-workflows.md")],"3667acb0":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/core-java/02-jvm-memory-model.md"))),"@site/docs/core-java/02-jvm-memory-model.md",require.resolveWeak("@site/docs/core-java/02-jvm-memory-model.md")],"382d0d9e":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/core-java/01-oops-concepts.md"))),"@site/docs/core-java/01-oops-concepts.md",require.resolveWeak("@site/docs/core-java/01-oops-concepts.md")],"54a7e953":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-category-system-design-databases-856.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-category-system-design-databases-856.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-category-system-design-databases-856.json")],"5e95c892":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@theme/DocsRoot"))),"@theme/DocsRoot",require.resolveWeak("@theme/DocsRoot")],"5e9f5e1a":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus.config"))),"@generated/docusaurus.config",require.resolveWeak("@generated/docusaurus.config")],"61d3f130":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-category-spring-boot-microservices-d5f.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-category-spring-boot-microservices-d5f.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-category-spring-boot-microservices-d5f.json")],"6380e41b":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/react/01-modern-javascript.md"))),"@site/docs/react/01-modern-javascript.md",require.resolveWeak("@site/docs/react/01-modern-javascript.md")],"7571ec09":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/system-design/01-sql-indexing.md"))),"@site/docs/system-design/01-sql-indexing.md",require.resolveWeak("@site/docs/system-design/01-sql-indexing.md")],"7807e702":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-category-reactjs-frontend-074.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-category-reactjs-frontend-074.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-category-reactjs-frontend-074.json")],"8380bef1":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-category-devops-tools-11e.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-category-devops-tools-11e.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-category-devops-tools-11e.json")],"9154f818":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-category-core-java-2be.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-category-core-java-2be.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-category-core-java-2be.json")],"9dd8a0d2":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/src/pages/index.jsx"))),"@site/src/pages/index.jsx",require.resolveWeak("@site/src/pages/index.jsx")],"9efe83d5":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/spring-boot/01-spring-core-ioc.md"))),"@site/docs/spring-boot/01-spring-core-ioc.md",require.resolveWeak("@site/docs/spring-boot/01-spring-core-ioc.md")],"a7456010":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-pages/default/__plugin.json"))),"@generated/docusaurus-plugin-content-pages/default/__plugin.json",require.resolveWeak("@generated/docusaurus-plugin-content-pages/default/__plugin.json")],"a7bd4aaa":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@theme/DocVersionRoot"))),"@theme/DocVersionRoot",require.resolveWeak("@theme/DocVersionRoot")],"a94703ab":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@theme/DocRoot"))),"@theme/DocRoot",require.resolveWeak("@theme/DocRoot")],"aba21aa0":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/__plugin.json"))),"@generated/docusaurus-plugin-content-docs/default/__plugin.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/__plugin.json")],"edcefef2":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@generated/docusaurus-plugin-content-docs/default/p/docs-category-data-structures-algorithms-f24.json"))),"@generated/docusaurus-plugin-content-docs/default/p/docs-category-data-structures-algorithms-f24.json",require.resolveWeak("@generated/docusaurus-plugin-content-docs/default/p/docs-category-data-structures-algorithms-f24.json")],"f211e158":[()=>Promise.resolve().then(()=>(0,C_Projects_ReactJs_codewithsarvy_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(require("@site/docs/dsa/01-time-space-complexity.md"))),"@site/docs/dsa/01-time-space-complexity.md",require.resolveWeak("@site/docs/dsa/01-time-space-complexity.md")]});
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 4378
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2067);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{path:'/docs',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs','c37'),routes:[{path:'/docs',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs','0f3'),routes:[{path:'/docs',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs','90f'),routes:[{path:'/docs/',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/','698'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/category/core-java',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/category/core-java','373'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/category/data-structures--algorithms',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/category/data-structures--algorithms','598'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/category/devops--tools',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/category/devops--tools','f4a'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/category/reactjs--frontend',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/category/reactjs--frontend','4f2'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/category/spring-boot--microservices',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/category/spring-boot--microservices','337'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/category/system-design--databases',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/category/system-design--databases','78c'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/core-java/jvm-memory-model',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/core-java/jvm-memory-model','76a'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/core-java/oops-concepts',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/core-java/oops-concepts','9ef'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/devops/git-workflows',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/devops/git-workflows','4bb'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/dsa/time-space-complexity',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/dsa/time-space-complexity','550'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/react/modern-javascript',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/react/modern-javascript','bb6'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/spring-boot/spring-core-ioc',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/spring-boot/spring-core-ioc','7b9'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/system-design/sql-indexing',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/docs/system-design/sql-indexing','d4f'),exact:true,sidebar:"tutorialSidebar"}]}]}]},{path:'/',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('/','070'),exact:true},{path:'*',component:(0,_docusaurus_ComponentCreator__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('*')}]);

/***/ },

/***/ 4164
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 1561
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ },

/***/ 1635
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __importDefault: () => (/* binding */ __importDefault)
/* harmony export */ });
/* unused harmony exports __extends, __assign, __rest, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = (/* unused pure expression or super */ null && (typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
}));

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
})));


/***/ },

/***/ 2654
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ 9568
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"path":"/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs","mainDocId":"intro","docs":[{"id":"core-java/jvm-memory-model","path":"/docs/core-java/jvm-memory-model","sidebar":"tutorialSidebar"},{"id":"core-java/oops-concepts","path":"/docs/core-java/oops-concepts","sidebar":"tutorialSidebar"},{"id":"devops/git-workflows","path":"/docs/devops/git-workflows","sidebar":"tutorialSidebar"},{"id":"dsa/time-space-complexity","path":"/docs/dsa/time-space-complexity","sidebar":"tutorialSidebar"},{"id":"intro","path":"/docs/","sidebar":"tutorialSidebar"},{"id":"react/modern-javascript","path":"/docs/react/modern-javascript","sidebar":"tutorialSidebar"},{"id":"spring-boot/spring-core-ioc","path":"/docs/spring-boot/spring-core-ioc","sidebar":"tutorialSidebar"},{"id":"system-design/sql-indexing","path":"/docs/system-design/sql-indexing","sidebar":"tutorialSidebar"},{"id":"/category/core-java","path":"/docs/category/core-java","sidebar":"tutorialSidebar"},{"id":"/category/data-structures--algorithms","path":"/docs/category/data-structures--algorithms","sidebar":"tutorialSidebar"},{"id":"/category/spring-boot--microservices","path":"/docs/category/spring-boot--microservices","sidebar":"tutorialSidebar"},{"id":"/category/reactjs--frontend","path":"/docs/category/reactjs--frontend","sidebar":"tutorialSidebar"},{"id":"/category/system-design--databases","path":"/docs/category/system-design--databases","sidebar":"tutorialSidebar"},{"id":"/category/devops--tools","path":"/docs/category/devops--tools","sidebar":"tutorialSidebar"}],"draftIds":[],"sidebars":{"tutorialSidebar":{"link":{"path":"/docs/","label":"intro"}}}}],"breadcrumbs":true}}}');

/***/ },

/***/ 1435
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en","translate":false,"url":"https://codewithsarvy.dev","baseUrl":"/"}}}');

/***/ },

/***/ 4054
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"/docs-c37":{"__comp":"5e95c892","__context":{"plugin":"aba21aa0"}},"/docs-0f3":{"__comp":"a7bd4aaa","__props":"0058b4c6"},"/docs-90f":{"__comp":"a94703ab"},"/docs/-698":{"__comp":"17896441","content":"0e384e19"},"/docs/category/core-java-373":{"__comp":"14eb3368","__props":"9154f818"},"/docs/category/data-structures--algorithms-598":{"__comp":"14eb3368","__props":"edcefef2"},"/docs/category/devops--tools-f4a":{"__comp":"14eb3368","__props":"8380bef1"},"/docs/category/reactjs--frontend-4f2":{"__comp":"14eb3368","__props":"7807e702"},"/docs/category/spring-boot--microservices-337":{"__comp":"14eb3368","__props":"61d3f130"},"/docs/category/system-design--databases-78c":{"__comp":"14eb3368","__props":"54a7e953"},"/docs/core-java/jvm-memory-model-76a":{"__comp":"17896441","content":"3667acb0"},"/docs/core-java/oops-concepts-9ef":{"__comp":"17896441","content":"382d0d9e"},"/docs/devops/git-workflows-4bb":{"__comp":"17896441","content":"287a6a06"},"/docs/dsa/time-space-complexity-550":{"__comp":"17896441","content":"f211e158"},"/docs/react/modern-javascript-bb6":{"__comp":"17896441","content":"6380e41b"},"/docs/spring-boot/spring-core-ioc-7b9":{"__comp":"17896441","content":"9efe83d5"},"/docs/system-design/sql-indexing-d4f":{"__comp":"17896441","content":"7571ec09"},"/-070":{"__comp":"9dd8a0d2","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"}}');

/***/ },

/***/ 4350
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"docusaurusVersion":"3.10.2","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"3.10.2"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"3.10.2"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"3.10.2"},"docusaurus-plugin-svgr":{"type":"package","name":"@docusaurus/plugin-svgr","version":"3.10.2"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"3.10.2"}}}');

/***/ },

/***/ 4180
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"N":"localStorage","M":""}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				var descriptor = binding === 0 ? { enumerable: true, value: definition[i++] } : { enumerable: true, get: binding };
/******/ 				if(!__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, descriptor);
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	let __webpack_exports__ = __webpack_require__(4905);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;