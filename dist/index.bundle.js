/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./inbox.png */ \"./src/inbox.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./calendar-today.png */ \"./src/calendar-today.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./plus-box.png */ \"./src/plus-box.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset default browser styles */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Inter\";\r\n}\r\n\r\n/* Make html and body take up the full height */\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* Use flexbox on the body to center content */\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nbutton,\r\ninput[type=\"submit\"],\r\ninput[type=\"reset\"] {\r\n    background: none;\r\n    color: inherit;\r\n    border: none;\r\n    padding: 0;\r\n    font: inherit;\r\n    cursor: pointer;\r\n    outline: inherit;\r\n}\r\n\r\n\r\n.main-header {\r\n    display: flex;\r\n    align-items: center;\r\n    background: #00145B;\r\n    height: 10%;\r\n    width: 100%;\r\n\r\n    padding: 20px 37px;\r\n    font-size: 2.25rem;\r\n}\r\n\r\nheader>.title {\r\n    color: #FFFFFF;\r\n    font-weight: 700;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 17.5%;\r\n    height: 100%;\r\n    min-width: 336px;\r\n    border-right: 2px solid #EBEBEB;\r\n}\r\n\r\n.main-container {\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\n.task-buttons-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 37%;\r\n    width: 100%;\r\n    gap: 34px;\r\n    padding: 0 43px;\r\n}\r\n\r\n.task-button {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: start;\r\n    align-items: center;\r\n    background: #F4F4F4;\r\n    border-radius: 19px;\r\n    padding: 11.5px 22.5px;\r\n    width: 100%;\r\n    gap: 13.5px;\r\n}\r\n\r\n.task-button-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    color: #585858;\r\n}\r\n\r\n.inbox {\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n.today {\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n.this-week {\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n.project-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 63%;\r\n    justify-content: start;\r\n    gap: 31px;\r\n}\r\n\r\n.project-container-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 7px;\r\n    padding: 0 26px;\r\n}\r\n\r\n.project-container-header>.title {\r\n    display: flex;\r\n    font-weight: 700;\r\n    color: #00145B;\r\n    font-size: 1.75rem;\r\n}\r\n\r\n.project-container-header>.divider {\r\n    background: #000000;\r\n    padding: 2px;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.add-project {\r\n    width: 40px;\r\n    height: 40px;\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n}\r\n\r\n.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 43px;\r\n}\r\n\r\n.project-tabs-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0 41px;\r\n    gap: 12px;\r\n}\r\n\r\n#project_tab {\r\n    display: flex;\r\n    align-items: center;\r\n    background: #00145B;\r\n    padding: 10px 19.5px;\r\n    color: #FFFFFF;\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.project-task-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 67px 340px;\r\n    width: 100%;\r\n}\r\n\r\n.add-task-button-container {\r\n    justify-content: start;\r\n}\r\n\r\n.add-task {\r\n    display: flex;\r\n    width: auto;\r\n    background: #00145B;\r\n    color: #FFFFFF;\r\n    padding: 10px 16.5px;\r\n    gap: 18px;\r\n    justify-content: start;\r\n    margin-top: 21px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.add-task-text {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.project-task-header-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.project-task-header-container>.title {\r\n    font-size: 3rem;\r\n    color: #00145B;\r\n    font-weight: 600;\r\n}\r\n\r\n.project-task-header-container>.divider {\r\n    padding: 2px;\r\n    background: #000000;\r\n}\r\n\r\n.project-task-header-container>.description {\r\n    font-size: 0.8125rem;\r\n    color: #808080;\r\n    font-weight: 600;\r\n    padding: 8px 0 0 0;\r\n}\r\n\r\n.add-task-button-container>.divider {\r\n    padding: 1px;\r\n    background: #B7B7B7;\r\n}\r\n\r\n.project-tasks-area {\r\n    margin-top: 12px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background: #F8F8F8;\r\n    border: #D2D2D2 solid 1px;\r\n    padding: 23px 17px;\r\n    border-radius: 23px;\r\n}\r\n\r\n.task>.left-side {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 57px;\r\n}\r\n\r\n.task>.right-side {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.task>.right-side>.option-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n.task>.right-side>.option-container>button {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 27.8px;\r\n    width: 27.8px;\r\n}\r\n\r\n.task>.right-side>.option-container>button>img {\r\n    display: flex;\r\n    height: 27.8px;\r\n    width: 27.8px;\r\n}\r\n\r\n.task>.left-side>.checkMark {\r\n    display: flex;\r\n    border-radius: 100px;\r\n    width: 31px;\r\n    height: 31px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.task>.left-side>.checkMark>img {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 22px;\r\n    height: 22px;\r\n}\r\n\r\n.easy {\r\n    border: #14FF00 solid 3px;\r\n}\r\n\r\n.medium {\r\n    border: #FF6B00 solid 3px;\r\n}\r\n\r\n.hard {\r\n    border: #FF0000 solid 3px;\r\n}\r\n\r\n.easy-complete {\r\n    background: #6DFF60;\r\n}\r\n\r\n.medium-complete {\r\n    background: #FF862E;\r\n}\r\n\r\n.hard-complete {\r\n    background: #FE3030;\r\n}\r\n\r\n.task>.left-side>.name {\r\n    display: flex;\r\n    color: #232323;\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.task>.right-side>.due-date {\r\n    display: flex;\r\n    color: #232323;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#add_project_modal,\r\n#add_task_modal,\r\n#info_task_modal,\r\n#edit_task_modal {\r\n    /* Hidden by default */\r\n    position: fixed;\r\n    /* Stay in place */\r\n    z-index: 1;\r\n    /* Sit on top */\r\n    width: 100%;\r\n    /* Full width */\r\n    height: 100%;\r\n    /* Full height */\r\n    overflow: auto;\r\n    /* Enable scroll if needed */\r\n    background-color: rgb(0, 0, 0);\r\n    /* Fallback color */\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    /* Black w/ opacity */\r\n}\r\n\r\n#add_project_modal>.modal-container {\r\n    display: flex;\r\n    width: 521.66px;\r\n    flex-direction: column;\r\n    background: #FFFFFF;\r\n    border-radius: 10px;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: fixed;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.invalid {\r\n    border: #FF8E8E solid 2px;\r\n}\r\n\r\n.add-project-nav,\r\n.add-task-nav,\r\n.info-task-nav,\r\n.edit-task-nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: #00145B;\r\n    padding: 12px 18px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.heading-container {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 17.25px;\r\n}\r\n\r\n.heading-container>img {\r\n    width: 61.21px;\r\n    height: 61.21px;\r\n}\r\n\r\n.heading-container>header {\r\n    color: #FFFFFF;\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#add_project_close_button,\r\n#add_task_close_button,\r\n#info_task_close_button,\r\n#edit_task_close_button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#add_project_close_button>img,\r\n#add_task_close_button>img,\r\n#info_task_close_button>img,\r\n#edit_task_close_button>img {\r\n    width: 42.17px;\r\n    height: 42.17px;\r\n}\r\n\r\nfieldset {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: none;\r\n    gap: 5px;\r\n}\r\n\r\n.modal-container>form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    padding: 36px 54px;\r\n    gap: 18px;\r\n}\r\n\r\n.modal-container>form>fieldset>.field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.modal-container>form>fieldset>.field>label,\r\n.modal-container>form>fieldset>.bottom-row>.field>label {\r\n    display: flex;\r\n    color: #5B5B5B;\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n    gap: 10px;\r\n}\r\n\r\n.modal-container>form>fieldset>.field>label>span,\r\n.modal-container>form>fieldset>.bottom-row>.field>label>span {\r\n    display: flex;\r\n    color: #FF0000;\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n\r\n.modal-container>form>fieldset>.field>input,\r\n.modal-container>form>fieldset>.field>textarea {\r\n    display: flex;\r\n    border: #DCDCDC solid 2px;\r\n    padding: 15px 19px;\r\n    background: #F8F8F8;\r\n    font-weight: 600;\r\n    color: #5B5B5B;\r\n    font-size: 1rem;\r\n    resize: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n#add_project_button_save,\r\n#add_task_button_save,\r\n#edit_task_button_save {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5px 113px;\r\n    background: #00145B;\r\n    border-radius: 13px;\r\n}\r\n\r\n#add_project_button_save>img,\r\n#add_task_button_save>img,\r\n#edit_task_button_save>img {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 45.96px;\r\n    height: 45.96px;\r\n}\r\n\r\n.modal-container>form>fieldset>.button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#add_task_modal>.modal-container,\r\n#info_task_modal>.modal-container,\r\n#edit_task_modal>.modal-container {\r\n    display: flex;\r\n    width: 521.66px;\r\n    flex-direction: column;\r\n    background: #FFFFFF;\r\n    border-radius: 10px;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: fixed;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#add_task_modal>.modal-container>fieldset>.bottom-row,\r\n#info_task_modal>.modal-container>form>fieldset>.bottom-row,\r\n#edit_task_modal>.modal-container>form>fieldset>.bottom-row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.half {\r\n    padding: 11px 17px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    border-radius: 10px;\r\n    border: #DCDCDC solid 2px;\r\n    width: 100%;\r\n    color: #5B5B5B;\r\n}\r\n\r\n.bottom-row {\r\n    display: flex;\r\n    gap: 6px;\r\n}\r\n\r\n.bottom-row>.field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    width: 100%;\r\n}\r\n\r\n#add_task_button_save,\r\n#edit_task_button_save {\r\n    margin-top: 50px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _inbox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.png */ \"./src/inbox.png\");\n/* harmony import */ var _calendar_today_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-today.png */ \"./src/calendar-today.png\");\n/* harmony import */ var _calendar_week_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-week.png */ \"./src/calendar-week.png\");\n/* harmony import */ var _plus_box_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plus-box.png */ \"./src/plus-box.png\");\n/* harmony import */ var _white_plus_box_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-plus-box.png */ \"./src/white-plus-box.png\");\n/* harmony import */ var _dark_blue_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dark-blue-notebook-edit-outline.png */ \"./src/dark-blue-notebook-edit-outline.png\");\n/* harmony import */ var _dark_blue_information_outline_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dark-blue-information-outline.png */ \"./src/dark-blue-information-outline.png\");\n/* harmony import */ var _dark_blue_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dark-blue-trash-can-outline.png */ \"./src/dark-blue-trash-can-outline.png\");\n/* harmony import */ var _white_folder_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./white-folder.png */ \"./src/white-folder.png\");\n/* harmony import */ var _white_close_box_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./white-close-box.png */ \"./src/white-close-box.png\");\n/* harmony import */ var _white_plus_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./white-plus.png */ \"./src/white-plus.png\");\n/* harmony import */ var _white_notebook_plus_outline_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./white-notebook-plus-outline.png */ \"./src/white-notebook-plus-outline.png\");\n/* harmony import */ var _white_information_outline_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./white-information-outline.png */ \"./src/white-information-outline.png\");\n/* harmony import */ var _white_content_save_all_outline_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./white-content-save-all-outline.png */ \"./src/white-content-save-all-outline.png\");\n/* harmony import */ var _white_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./white-notebook-edit-outline.png */ \"./src/white-notebook-edit-outline.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addImage(element, image, className) {\r\n    const newImage = new Image();\r\n    newImage.src = image;\r\n    if (className != \"\") {\r\n        newImage.classList.add(className);\r\n    }\r\n    element.appendChild(newImage);\r\n}\r\n\r\naddImage(document.getElementsByClassName(\"task-button\")[0], _inbox_png__WEBPACK_IMPORTED_MODULE_1__, \"inbox\");\r\naddImage(document.getElementsByClassName(\"task-button\")[1], _calendar_today_png__WEBPACK_IMPORTED_MODULE_2__, \"today\");\r\naddImage(document.getElementsByClassName(\"task-button\")[2], _calendar_week_png__WEBPACK_IMPORTED_MODULE_3__, \"this-week\");\r\naddImage(document.getElementsByClassName(\"task-button\")[3], _plus_box_png__WEBPACK_IMPORTED_MODULE_4__, \"add-project\");\r\n//addImage(document.getElementsByClassName(\"task-button\")[4], PlusBox, \"add-project\");\r\n//addImage(document.getElementById(\"task_option_1\"), DarkBlueEdit, \"\");\r\n//addImage(document.getElementById(\"task_option_2\"), DarkBlueInformation, \"\");\r\n//addImage(document.getElementById(\"task_option_3\"), DarkBlueDelete, \"\");\r\naddImage(document.getElementById(\"add_project_close_button\"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_10__, \"\");\r\naddImage(document.getElementById(\"add_project_button_save\"), _white_plus_png__WEBPACK_IMPORTED_MODULE_11__, \"\");\r\naddImage(document.getElementsByClassName(\"heading-container\")[0], _white_folder_png__WEBPACK_IMPORTED_MODULE_9__, \"\");\r\naddImage(document.getElementById(\"add_task_button_save\"), _white_plus_png__WEBPACK_IMPORTED_MODULE_11__, \"\");\r\naddImage(document.getElementById(\"add_task_header_container\"), _white_notebook_plus_outline_png__WEBPACK_IMPORTED_MODULE_12__, \"\");\r\naddImage(document.getElementById(\"add_task_close_button\"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_10__, \"\");\r\n\r\naddImage(document.getElementById(\"info_task_close_button\"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_10__, \"\");\r\naddImage(document.getElementById(\"info_task_header_container\"), _white_information_outline_png__WEBPACK_IMPORTED_MODULE_13__, \"\");\r\n\r\naddImage(document.getElementById(\"edit_task_button_save\"), _white_content_save_all_outline_png__WEBPACK_IMPORTED_MODULE_14__, \"\");\r\naddImage(document.getElementById(\"edit_task_header_container\"), _white_notebook_edit_outline_png__WEBPACK_IMPORTED_MODULE_15__, \"\");\r\naddImage(document.getElementById(\"edit_task_close_button\"), _white_close_box_png__WEBPACK_IMPORTED_MODULE_10__, \"\");\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/calendar-today.png":
/*!********************************!*\
  !*** ./src/calendar-today.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"addd5614d2c215a36a9e.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/calendar-today.png?");

/***/ }),

/***/ "./src/calendar-week.png":
/*!*******************************!*\
  !*** ./src/calendar-week.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1c97fde36a626449a72.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/calendar-week.png?");

/***/ }),

/***/ "./src/dark-blue-information-outline.png":
/*!***********************************************!*\
  !*** ./src/dark-blue-information-outline.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4066b67bb9a1dd086cf.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/dark-blue-information-outline.png?");

/***/ }),

/***/ "./src/dark-blue-notebook-edit-outline.png":
/*!*************************************************!*\
  !*** ./src/dark-blue-notebook-edit-outline.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"303ed99b68c595bb2b75.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/dark-blue-notebook-edit-outline.png?");

/***/ }),

/***/ "./src/dark-blue-trash-can-outline.png":
/*!*********************************************!*\
  !*** ./src/dark-blue-trash-can-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7298ee4c98a175db2ca.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/dark-blue-trash-can-outline.png?");

/***/ }),

/***/ "./src/inbox.png":
/*!***********************!*\
  !*** ./src/inbox.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f2ec62af86601a6810a.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/inbox.png?");

/***/ }),

/***/ "./src/plus-box.png":
/*!**************************!*\
  !*** ./src/plus-box.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c6b1413b677fb61598f.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/plus-box.png?");

/***/ }),

/***/ "./src/white-close-box.png":
/*!*********************************!*\
  !*** ./src/white-close-box.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c2a0c37bf59defd88fe.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-close-box.png?");

/***/ }),

/***/ "./src/white-content-save-all-outline.png":
/*!************************************************!*\
  !*** ./src/white-content-save-all-outline.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d63f3c33c330b518209.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-content-save-all-outline.png?");

/***/ }),

/***/ "./src/white-folder.png":
/*!******************************!*\
  !*** ./src/white-folder.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73ed9e5b8d8c97cb4f5a.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-folder.png?");

/***/ }),

/***/ "./src/white-information-outline.png":
/*!*******************************************!*\
  !*** ./src/white-information-outline.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2af9cf4a31a17eedbb5d.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-information-outline.png?");

/***/ }),

/***/ "./src/white-notebook-edit-outline.png":
/*!*********************************************!*\
  !*** ./src/white-notebook-edit-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fce0e599ac08be17b665.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-notebook-edit-outline.png?");

/***/ }),

/***/ "./src/white-notebook-plus-outline.png":
/*!*********************************************!*\
  !*** ./src/white-notebook-plus-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8056d536bfd3c059d65.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-notebook-plus-outline.png?");

/***/ }),

/***/ "./src/white-plus-box.png":
/*!********************************!*\
  !*** ./src/white-plus-box.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32b0e1a57e50476572d2.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-plus-box.png?");

/***/ }),

/***/ "./src/white-plus.png":
/*!****************************!*\
  !*** ./src/white-plus.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b2705e1a1796dbc0e85.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/white-plus.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;