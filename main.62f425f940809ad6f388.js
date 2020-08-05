(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+5i3":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "J/SR");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "+kis":
/*!***********************************************!*\
  !*** ./src/fonts/Open_Sans/OpenSans-Bold.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dbb97fd982ce1b96b6de90a9f1c2ecaa.ttf");

/***/ }),

/***/ "BFXo":
/*!*****************************************************!*\
  !*** ./src/fonts/Raleway/static/Raleway-Medium.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1af9f1e9f3fd4766df83e545c2f6fcdb.ttf");

/***/ }),

/***/ "J/SR":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "HeW1");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_Raleway_static_Raleway_Light_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/Raleway/static/Raleway-Light.ttf */ "vofK");
/* harmony import */ var _fonts_Raleway_static_Raleway_Medium_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/Raleway/static/Raleway-Medium.ttf */ "BFXo");
/* harmony import */ var _fonts_Raleway_static_Raleway_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Raleway/static/Raleway-Bold.ttf */ "jIQ0");
/* harmony import */ var _fonts_Open_Sans_OpenSans_Light_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/Open_Sans/OpenSans-Light.ttf */ "Jm8c");
/* harmony import */ var _fonts_Open_Sans_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/Open_Sans/OpenSans-Regular.ttf */ "X8O0");
/* harmony import */ var _fonts_Open_Sans_OpenSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/Open_Sans/OpenSans-Bold.ttf */ "+kis");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Raleway_static_Raleway_Light_ttf__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Raleway_static_Raleway_Medium_ttf__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Raleway_static_Raleway_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Open_Sans_OpenSans_Light_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Open_Sans_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Open_Sans_OpenSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nspan,\nmark,\na,\nbutton,\ndiv,\nbody,\nheader,\nmain,\nsection,\nfooter,\naside,\narticle,\nul,\nol,\nli,\nimg,\nform,\ninput,\nlabel,\nselect,\ntable,\nthead,\ntbody,\ntr,\nth,\ntd,\ntextarea {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nul {\n  list-style-type: none; }\n\nli {\n  display: inline-block; }\n\na {\n  color: #000000;\n  text-decoration: none; }\n\nmark {\n  background: none; }\n\ninput,\nbutton,\ntextarea {\n  outline: none; }\n\nbutton {\n  border: none; }\n\ninput[type=number] {\n  -moz-appearance: textfield; }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\nimg {\n  max-width: 100%;\n  display: block;\n  height: auto; }\n\n@font-face {\n  font-family: 'Raleway-light';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Raleway-medium';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Raleway-bold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'OpenSans-light';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'OpenSans-medium';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'OpenSans-bold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  font-weight: normal;\n  font-style: normal; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Raleway-bold'; }\n\nbody,\np,\na,\nbutton,\nspan,\nmark {\n  font-family: 'OpenSans-medium'; }\n\nhtml,\nbody {\n  min-height: 100vh; }\n\nbody {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.title {\n  margin-bottom: 5px; }\n\n.subtitle {\n  margin-bottom: 10px; }\n\nbutton[type=\"button\"] {\n  font-weight: bold;\n  background: #000000;\n  color: #FFFFFF;\n  border: solid 2px #000000;\n  border-radius: 5px;\n  padding: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: background ease-in-out 0.2s, color ease-in-out 0.2s; }\n  button[type=\"button\"]:hover {\n    background: #FFFFFF;\n    color: #000000; }\n", "",{"version":3,"sources":["C:/Users/SIDNEI/Desktop/Projetos/testando-webpack/src/styles/layout/reset.scss","C:/Users/SIDNEI/Desktop/Projetos/testando-webpack/src/styles/layout/typography.scss","C:/Users/SIDNEI/Desktop/Projetos/testando-webpack/src/styles/layout/content.scss","C:/Users/SIDNEI/Desktop/Projetos/testando-webpack/src/styles/components/titles.scss","C:/Users/SIDNEI/Desktop/Projetos/testando-webpack/src/styles/components/button.scss","C:/Users/SIDNEI/Desktop/Projetos/testando-webpack/src/styles/layout/variables.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkCI,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAG1B;EACI,qBAAqB,EAAA;;AAGzB;EACI,qBAAqB,EAAA;;AAGzB;EACI,cAAc;EACd,qBAAqB,EAAA;;AAGzB;EACI,gBAAgB,EAAA;;AAGpB;;;EAGI,aAAa,EAAA;;AAGjB;EACI,YAAY,EAAA;;AAGhB;EACI,0BAA0B,EAAA;;AAG9B;;EAEI,wBAAwB;EACxB,SAAS,EAAA;;AAGb;EACI,eAAe;EACf,cAAc;EACd,YAAY,EAAA;;AC/EhB;EACI,4BAA4B;EAC5B,4CAAmD;EACnD,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;EACI,6BAA6B;EAC7B,4CAAoD;EACpD,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;EACI,2BAA2B;EAC3B,4CAAkD;EAClD,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;EACI,6BAA6B;EAC7B,4CAA+C;EAC/C,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;EACI,8BAA8B;EAC9B,4CAAiD;EACjD,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;EACI,4BAA4B;EAC5B,4CAA8C;EAC9C,mBAAmB;EACnB,kBAAkB,EAAA;;AAGtB;;;;;;EAMI,2BAA2B,EAAA;;AAG/B;;;;;;EAMI,8BAA8B,EAAA;;ACzDlC;;EAEI,iBAAiB,EAAA;;AAGrB;EACI,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAA;;ACT3B;EACI,kBAAkB,EAAA;;AAGtB;EACI,mBAAmB,EAAA;;ACLvB;EACI,iBAAiB;EACjB,mBCFW;EDGX,cCFW;EDGX,yBCJW;EDKX,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,+DAA+D,EAAA;EATnE;IAYQ,mBCXO;IDYP,cCbO,EAAA","file":"main.scss","sourcesContent":["h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nspan,\r\nmark,\r\na,\r\nbutton,\r\ndiv,\r\nbody,\r\nheader,\r\nmain,\r\nsection,\r\nfooter,\r\naside,\r\narticle,\r\nul,\r\nol,\r\nli,\r\nimg,\r\nform,\r\ninput,\r\nlabel,\r\nselect,\r\ntable,\r\nthead,\r\ntbody,\r\ntr,\r\nth,\r\ntd,\r\ntextarea {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\nli {\r\n    display: inline-block;\r\n}\r\n\r\na {\r\n    color: #000000;\r\n    text-decoration: none;\r\n}\r\n\r\nmark {\r\n    background: none;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea {\r\n    outline: none;\r\n}\r\n\r\nbutton {\r\n    border: none;\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    display: block;\r\n    height: auto;\r\n}\r\n","@font-face {\r\n    font-family: 'Raleway-light';\r\n    src: url(../fonts/Raleway/static/Raleway-Light.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Raleway-medium';\r\n    src: url(../fonts/Raleway/static/Raleway-Medium.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Raleway-bold';\r\n    src: url(../fonts/Raleway/static/Raleway-Bold.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'OpenSans-light';\r\n    src: url(../fonts/Open_Sans/OpenSans-Light.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'OpenSans-medium';\r\n    src: url(../fonts/Open_Sans/OpenSans-Regular.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'OpenSans-bold';\r\n    src: url(../fonts/Open_Sans/OpenSans-Bold.ttf);\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font-family: 'Raleway-bold';\r\n}\r\n\r\nbody,\r\np,\r\na,\r\nbutton,\r\nspan,\r\nmark {\r\n    font-family: 'OpenSans-medium';\r\n}\r\n","html,\r\nbody {\r\n    min-height: 100vh;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n",".title {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.subtitle {\r\n    margin-bottom: 10px;\r\n}\r\n","button[type=\"button\"] {\r\n    font-weight: bold;\r\n    background: $black;\r\n    color: $white;\r\n    border: solid 2px $black;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    cursor: pointer;\r\n    transition: background ease-in-out 0.2s, color ease-in-out 0.2s;\r\n\r\n    &:hover {\r\n        background: $white;\r\n        color: $black;\r\n    }\r\n}\r\n","$black: #000000;\r\n$white: #FFFFFF;\r\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "Jm8c":
/*!************************************************!*\
  !*** ./src/fonts/Open_Sans/OpenSans-Light.ttf ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ed41bedf131bc097372a961dbec109a1.ttf");

/***/ }),

/***/ "K5Xt":
/*!***********************************************!*\
  !*** ./src/scripts/components/Teste/index.js ***!
  \***********************************************/
/*! exports provided: teste */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teste", function() { return teste; });
const teste = greeting => {
  return `${greeting}, how are you?`;
};



/***/ }),

/***/ "KWM7":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Teste__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Teste */ "K5Xt");
/* harmony import */ var _components_LoginButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LoginButton */ "NY+M");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "+5i3");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
// import mountain from '../images/mountain.png'



console.log(Object(_components_Teste__WEBPACK_IMPORTED_MODULE_0__["teste"])('Fellow'));
console.log(Object(_components_Teste__WEBPACK_IMPORTED_MODULE_0__["teste"])('Nice')); // console.log(mountain);

console.log(_components_LoginButton__WEBPACK_IMPORTED_MODULE_1__["loginButton"]);

/***/ }),

/***/ "NY+M":
/*!*****************************************************!*\
  !*** ./src/scripts/components/LoginButton/index.js ***!
  \*****************************************************/
/*! exports provided: loginButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginButton", function() { return loginButton; });
// import(/* webpackPrefetch: true */ 'LoginModal');
const loginButton = () => {
  console.log("login button is here!");
};



/***/ }),

/***/ "X8O0":
/*!**************************************************!*\
  !*** ./src/fonts/Open_Sans/OpenSans-Regular.ttf ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1b0809d519837cb7aad36a73433f655c.ttf");

/***/ }),

/***/ "jIQ0":
/*!***************************************************!*\
  !*** ./src/fonts/Raleway/static/Raleway-Bold.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1a96e2aa6257c864d4d879dfb52fd0c.ttf");

/***/ }),

/***/ "vofK":
/*!****************************************************!*\
  !*** ./src/fonts/Raleway/static/Raleway-Light.ttf ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f25e9b3a1fc8e48e53f51de9838c95fa.ttf");

/***/ })

},[["KWM7","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovLy8uL3NyYy9mb250cy9PcGVuX1NhbnMvT3BlblNhbnMtQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1JhbGV3YXkvc3RhdGljL1JhbGV3YXktTWVkaXVtLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLUxpZ2h0LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1Rlc3RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Mb2dpbkJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LUJvbGQudHRmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LUxpZ2h0LnR0ZiJdLCJuYW1lcyI6WyJ0ZXN0ZSIsImdyZWV0aW5nIiwiY29uc29sZSIsImxvZyIsImxvZ2luQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMsc0ZBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLCtHQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBQTtBQUFBO0FB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ZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRSIsImZpbGUiOiJtYWluLjYyZjQyNWY5NDA4MDlhZDZmMzg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkYmI5N2ZkOTgyY2UxYjk2YjZkZTkwYTlmMWMyZWNhYS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWFmOWYxZTlmM2ZkNDc2NmRmODNlNTQ1YzJmNmZjZGIudHRmXCI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vZm9udHMvUmFsZXdheS9zdGF0aWMvUmFsZXdheS1MaWdodC50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vZm9udHMvUmFsZXdheS9zdGF0aWMvUmFsZXdheS1NZWRpdW0udHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2ZvbnRzL1JhbGV3YXkvc3RhdGljL1JhbGV3YXktQm9sZC50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLUxpZ2h0LnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuLi9mb250cy9PcGVuX1NhbnMvT3BlblNhbnMtUmVndWxhci50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyBmcm9tIFwiLi4vZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLUJvbGQudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbnNwYW4sXFxubWFyayxcXG5hLFxcbmJ1dHRvbixcXG5kaXYsXFxuYm9keSxcXG5oZWFkZXIsXFxubWFpbixcXG5zZWN0aW9uLFxcbmZvb3RlcixcXG5hc2lkZSxcXG5hcnRpY2xlLFxcbnVsLFxcbm9sLFxcbmxpLFxcbmltZyxcXG5mb3JtLFxcbmlucHV0LFxcbmxhYmVsLFxcbnNlbGVjdCxcXG50YWJsZSxcXG50aGVhZCxcXG50Ym9keSxcXG50cixcXG50aCxcXG50ZCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbmEge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7IH1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IH1cXG5cXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5LWxpZ2h0JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1tZWRpdW0nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5LWJvbGQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1saWdodCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09wZW5TYW5zLW1lZGl1bSc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ09wZW5TYW5zLWJvbGQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1ib2xkJzsgfVxcblxcbmJvZHksXFxucCxcXG5hLFxcbmJ1dHRvbixcXG5zcGFuLFxcbm1hcmsge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1tZWRpdW0nOyB9XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuXFxuLnN1YnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cXG5idXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0IDAuMnMsIGNvbG9yIGVhc2UtaW4tb3V0IDAuMnM7IH1cXG4gIGJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGNvbG9yOiAjMDAwMDAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvU0lETkVJL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGFuZG8td2VicGFjay9zcmMvc3R5bGVzL2xheW91dC9yZXNldC5zY3NzXCIsXCJDOi9Vc2Vycy9TSURORUkvRGVza3RvcC9Qcm9qZXRvcy90ZXN0YW5kby13ZWJwYWNrL3NyYy9zdHlsZXMvbGF5b3V0L3R5cG9ncmFwaHkuc2Nzc1wiLFwiQzovVXNlcnMvU0lETkVJL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGFuZG8td2VicGFjay9zcmMvc3R5bGVzL2xheW91dC9jb250ZW50LnNjc3NcIixcIkM6L1VzZXJzL1NJRE5FSS9EZXNrdG9wL1Byb2pldG9zL3Rlc3RhbmRvLXdlYnBhY2svc3JjL3N0eWxlcy9jb21wb25lbnRzL3RpdGxlcy5zY3NzXCIsXCJDOi9Vc2Vycy9TSURORUkvRGVza3RvcC9Qcm9qZXRvcy90ZXN0YW5kby13ZWJwYWNrL3NyYy9zdHlsZXMvY29tcG9uZW50cy9idXR0b24uc2Nzc1wiLFwiQzovVXNlcnMvU0lETkVJL0Rlc2t0b3AvUHJvamV0b3MvdGVzdGFuZG8td2VicGFjay9zcmMvc3R5bGVzL2xheW91dC92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7OztFQUdJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCOztFQUVJLHdCQUF3QjtFQUN4QixTQUFTLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVksRUFBQTs7QUMvRWhCO0VBQ0ksNEJBQTRCO0VBQzVCLDRDQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksNkJBQTZCO0VBQzdCLDRDQUFvRDtFQUNwRCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTJCO0VBQzNCLDRDQUFrRDtFQUNsRCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksNkJBQTZCO0VBQzdCLDRDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksOEJBQThCO0VBQzlCLDRDQUFpRDtFQUNqRCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksNEJBQTRCO0VBQzVCLDRDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCOzs7Ozs7RUFNSSwyQkFBMkIsRUFBQTs7QUFHL0I7Ozs7OztFQU1JLDhCQUE4QixFQUFBOztBQ3pEbEM7O0VBRUksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FDVDNCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CLEVBQUE7O0FDTHZCO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQ0ZXO0VER1gsY0NGVztFREdYLHlCQ0pXO0VES1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtEQUErRCxFQUFBO0VBVG5FO0lBWVEsbUJDWE87SURZUCxjQ2JPLEVBQUFcIixcImZpbGVcIjpcIm1haW4uc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbnNwYW4sXFxyXFxubWFyayxcXHJcXG5hLFxcclxcbmJ1dHRvbixcXHJcXG5kaXYsXFxyXFxuYm9keSxcXHJcXG5oZWFkZXIsXFxyXFxubWFpbixcXHJcXG5zZWN0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5hc2lkZSxcXHJcXG5hcnRpY2xlLFxcclxcbnVsLFxcclxcbm9sLFxcclxcbmxpLFxcclxcbmltZyxcXHJcXG5mb3JtLFxcclxcbmlucHV0LFxcclxcbmxhYmVsLFxcclxcbnNlbGVjdCxcXHJcXG50YWJsZSxcXHJcXG50aGVhZCxcXHJcXG50Ym9keSxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFyayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cIixcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXktbGlnaHQnO1xcclxcbiAgICBzcmM6IHVybCguLi9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LUxpZ2h0LnR0Zik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1tZWRpdW0nO1xcclxcbiAgICBzcmM6IHVybCguLi9mb250cy9SYWxld2F5L3N0YXRpYy9SYWxld2F5LU1lZGl1bS50dGYpO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXktYm9sZCc7XFxyXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL1JhbGV3YXkvc3RhdGljL1JhbGV3YXktQm9sZC50dGYpO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW5TYW5zLWxpZ2h0JztcXHJcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLUxpZ2h0LnR0Zik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtbWVkaXVtJztcXHJcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLVJlZ3VsYXIudHRmKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1ib2xkJztcXHJcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvT3Blbl9TYW5zL09wZW5TYW5zLUJvbGQudHRmKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1ib2xkJztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5wLFxcclxcbmEsXFxyXFxuYnV0dG9uLFxcclxcbnNwYW4sXFxyXFxubWFyayB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtbWVkaXVtJztcXHJcXG59XFxyXFxuXCIsXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsXCIudGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblwiLFwiYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRibGFjaztcXHJcXG4gICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggJGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLWluLW91dCAwLjJzLCBjb2xvciBlYXNlLWluLW91dCAwLjJzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcXHJcXG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIkYmxhY2s6ICMwMDAwMDA7XFxyXFxuJHdoaXRlOiAjRkZGRkZGO1xcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVkNDFiZWRmMTMxYmMwOTczNzJhOTYxZGJlYzEwOWExLnR0ZlwiOyIsImNvbnN0IHRlc3RlID0gKGdyZWV0aW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7Z3JlZXRpbmd9LCBob3cgYXJlIHlvdT9gO1xyXG59XHJcblxyXG5leHBvcnQgeyB0ZXN0ZSB9O1xyXG4iLCIvLyBpbXBvcnQgbW91bnRhaW4gZnJvbSAnLi4vaW1hZ2VzL21vdW50YWluLnBuZydcclxuaW1wb3J0IHsgdGVzdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvVGVzdGUnO1xyXG5pbXBvcnQgeyBsb2dpbkJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbkJ1dHRvbidcclxuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmNvbnNvbGUubG9nKHRlc3RlKCdGZWxsb3cnKSk7XHJcbmNvbnNvbGUubG9nKHRlc3RlKCdOaWNlJykpO1xyXG4vLyBjb25zb2xlLmxvZyhtb3VudGFpbik7XHJcbmNvbnNvbGUubG9nKGxvZ2luQnV0dG9uKTtcclxuIiwiLy8gaW1wb3J0KC8qIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqLyAnTG9naW5Nb2RhbCcpO1xyXG5jb25zdCBsb2dpbkJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibG9naW4gYnV0dG9uIGlzIGhlcmUhXCIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBsb2dpbkJ1dHRvbiB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWIwODA5ZDUxOTgzN2NiN2FhZDM2YTczNDMzZjY1NWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQxYTk2ZTJhYTYyNTdjODY0ZDRkODc5ZGZiNTJmZDBjLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMjVlOWIzYTFmYzhlNDhlNTNmNTFkZTk4MzhjOTVmYS50dGZcIjsiXSwic291cmNlUm9vdCI6IiJ9