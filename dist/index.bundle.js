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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\nh1,\nh4,\np {\n  margin: 0;\n}\n\nh1 {\n  padding: 16px;\n}\n\n.setupPanel {\n  display: flex;\n  gap: 16px;\n}\n\n.boardContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n}\n\n.gameboard {\n  display: inline-grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  border: 1px solid black;\n}\n\n.cell {\n  border: 1px solid black;\n  text-align: center;\n  padding-top: 15px;\n}\n\n.cell.ship {\n  background-color: cadetblue;\n}\n\n.cell.miss {\n  background-color: darkgray;\n}\n\n.cell.hit {\n  background-color: firebrick;\n}\n\n.cell.target:hover {\n  cursor: pointer;\n  background-color: tan;\n}\n\n.cell.target:active {\n  background-color: orangered;\n}\n\n.shipDiv img {\n  aspect-ratio: auto;\n  width: 300px;\n  cursor: pointer;\n}\n\n.battlepage {\n  display: flex;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/renderDeploymentPage */ \"./src/pages/renderDeploymentPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst body = document.querySelector('body');\nconst container = document.createElement('div');\ncontainer.id = 'container';\nbody.append(container);\n\n(0,_pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('container');\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/models/gameboard.js":
/*!*********************************!*\
  !*** ./src/models/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/models/ship.js\");\n\n\n/**\n * Gameboard class\n * A 10 by 10 grid from top to bottom\n * @constructor\n */\nclass Gameboard {\n  constructor() {\n    this.ships = [];\n    this.missedShots = [];\n    this.hits = [];\n  }\n\n  /**\n   * Placing a ship\n   * @param name\n   * @param length\n   * @param axis\n   * @param origin\n   */\n  placeShip({ name, length, axis, origin }) {\n    const cells = [];\n\n    const occupiedCells = this.ships\n      .map((target) => target.cells)\n      .join()\n      .split(',')\n      .map((cell) => parseInt(cell));\n\n    const isOutBounds = (axis, cell) => {\n      if (cell < 1) return true;\n\n      const getXAxisId = (cell) => {\n        return Math.floor((cell - 1) / 10);\n      };\n\n      return axis === 'x' ? getXAxisId(cell) != getXAxisId(origin) : cell > 100;\n    };\n\n    for (let i = 0; i < length; i++) {\n      const increment = axis === 'x' ? i : i * 10;\n      const cell = origin + increment;\n\n      if (occupiedCells.includes(cell)) {\n        return false;\n      }\n\n      if (isOutBounds(axis, cell)) {\n        return false;\n      }\n\n      cells.push(cell);\n    }\n\n    const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, length);\n    this.ships.push({ ship: newShip, cells: cells });\n    return true;\n  }\n\n  receiveAttack(cell) {\n    if (this.missedShots.includes(cell) || this.hits.includes(cell)) {\n      return false;\n    }\n\n    for (const target of this.ships) {\n      const isHit = target.cells.includes(cell);\n      // attack hits\n      if (isHit) {\n        target.ship.hit();\n        this.hits.push(cell);\n\n        return true;\n      }\n    }\n    // attack misses\n    this.missedShots.push(cell);\n\n    return true;\n  }\n\n  isShipsSunk() {\n    // Check for an active ship\n    for (const target of this.ships) {\n      if (!target.ship.isSunk()) return false;\n    }\n\n    // All ship has sunk\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack://odin-battleship/./src/models/gameboard.js?");

/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/models/gameboard.js\");\n\n/**\n * Player class\n * @param name\n * @param type\n * @constructor\n */\nclass Player {\n  constructor({ name, type }) {\n    this.name = name;\n    this.type = type;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n}\n\n\n//# sourceURL=webpack://odin-battleship/./src/models/player.js?");

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\n/**\n * Ship class\n * @param name\n * @param length\n * @constructor\n */\nclass Ship {\n  constructor(name, length) {\n    this.name = name;\n    this.length = length;\n    this.hitCount = 0;\n  }\n\n  hit() {\n    this.hitCount++;\n  }\n\n  isSunk() {\n    return this.hitCount >= this.length;\n  }\n}\n\n\n//# sourceURL=webpack://odin-battleship/./src/models/ship.js?");

/***/ }),

/***/ "./src/pages/components/renderBoard.js":
/*!*********************************************!*\
  !*** ./src/pages/components/renderBoard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_ships_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/ships.json */ \"./src/data/ships.json\");\n/* harmony import */ var _utils_handleBotAttack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/handleBotAttack */ \"./src/utils/handleBotAttack.js\");\n/* harmony import */ var _utils_handlePlayerAttack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/handlePlayerAttack */ \"./src/utils/handlePlayerAttack.js\");\n\n\n\n\n// Converts ship name eg. carrier to cv\nconst getShipCode = (shipName) => {\n  return _data_ships_json__WEBPACK_IMPORTED_MODULE_0__\n    .find((item) => {\n      return item['name'] === shipName;\n    })\n    .code.toUpperCase();\n};\n\nconst markOccupiedCells = (ships, box, cellId) => {\n  ships.forEach((target) => {\n    if (target.cells.includes(cellId)) {\n      box.textContent = ' ' + getShipCode(target.ship.name);\n      box.classList.add('ship');\n    }\n  });\n};\n\nconst markAttackedCells = (hits, missedShots, box, cellId) => {\n  if (hits.includes(cellId)) box.classList.add('hit');\n  if (missedShots.includes(cellId)) box.classList.add('miss');\n};\n\nconst markEnemyCells = (hits, missedShots, box, cellId) => {\n  const isCellEmpty = !(hits.includes(cellId) || missedShots.includes(cellId));\n  if (isCellEmpty) {\n    box.classList.add('target');\n    box.addEventListener('click', () => {\n      (0,_utils_handlePlayerAttack__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cellId);\n      (0,_utils_handleBotAttack__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n  }\n};\n\nconst renderBoard = ({ containerId, player, type }) => {\n  const hits = player.gameboard.hits;\n  const missedShots = player.gameboard.missedShots;\n  const ships = player.gameboard.ships;\n  const container = document.getElementById(containerId);\n  container.innerHTML = '';\n  const gameboard = document.createElement('div');\n  gameboard.className = 'gameboard';\n\n  // Iterate every cell/box of the 10x10 grid\n  for (let cellId = 1; cellId <= 100; cellId++) {\n    const box = document.createElement('div');\n    box.textContent = cellId;\n    box.classList.add('cell');\n\n    switch (type) {\n      case 'deployment':\n        markOccupiedCells(ships, box, cellId);\n        break;\n\n      case 'playerGameboard':\n        markOccupiedCells(ships, box, cellId);\n        markAttackedCells(hits, missedShots, box, cellId);\n        break;\n\n      case 'enemyGameboard':\n        markEnemyCells(hits, missedShots, box, cellId);\n        markAttackedCells(hits, missedShots, box, cellId);\n        break;\n    }\n\n    gameboard.appendChild(box);\n  }\n  container.appendChild(gameboard);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);\n\n\n//# sourceURL=webpack://odin-battleship/./src/pages/components/renderBoard.js?");

/***/ }),

/***/ "./src/pages/renderBattlePage.js":
/*!***************************************!*\
  !*** ./src/pages/renderBattlePage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/renderBoard */ \"./src/pages/components/renderBoard.js\");\n/* harmony import */ var _renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDeploymentPage */ \"./src/pages/renderDeploymentPage.js\");\n\n\n\nconst renderBattlePage = (containerId) => {\n  const container = document.getElementById(containerId);\n  const battlePage = document.createElement('div');\n  battlePage.classList.add('battlepage');\n\n  const playerGameboard = document.createElement('div');\n  playerGameboard.id = 'player';\n  const enemyGameboard = document.createElement('div');\n  enemyGameboard.id = 'enemy';\n\n  battlePage.append(playerGameboard);\n  battlePage.appendChild(enemyGameboard);\n  container.appendChild(battlePage);\n\n  (0,_components_renderBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    containerId: 'player',\n    player: _renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.humanPlayer,\n    type: 'playerGameboard',\n  });\n\n  (0,_components_renderBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ containerId: 'enemy', player: _renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.bot, type: 'enemyGameboard' });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBattlePage);\n\n\n//# sourceURL=webpack://odin-battleship/./src/pages/renderBattlePage.js?");

/***/ }),

/***/ "./src/pages/renderDeploymentPage.js":
/*!*******************************************!*\
  !*** ./src/pages/renderDeploymentPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bot: () => (/* binding */ bot),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer)\n/* harmony export */ });\n/* harmony import */ var _assets_bb_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/bb.png */ \"./src/assets/bb.png\");\n/* harmony import */ var _assets_cc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/cc.png */ \"./src/assets/cc.png\");\n/* harmony import */ var _assets_cv_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/cv.png */ \"./src/assets/cv.png\");\n/* harmony import */ var _assets_dd_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/dd.png */ \"./src/assets/dd.png\");\n/* harmony import */ var _assets_ss_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/ss.png */ \"./src/assets/ss.png\");\n/* harmony import */ var _data_ships_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/ships.json */ \"./src/data/ships.json\");\n/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/player */ \"./src/models/player.js\");\n/* harmony import */ var _utils_createRandomPlayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createRandomPlayer */ \"./src/utils/createRandomPlayer.js\");\n/* harmony import */ var _components_renderBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/renderBoard */ \"./src/pages/components/renderBoard.js\");\n/* harmony import */ var _renderBattlePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./renderBattlePage */ \"./src/pages/renderBattlePage.js\");\n// import renderBoard from './renderBoard';\n\n\n\n\n\n\n\n\n\n\n\nconst humanPlayer = new _models_player__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({ name: 'player', type: 'human' });\nconst bot = (0,_utils_createRandomPlayer__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('bot', 'computer');\n\nconst handleDeployment = ({ player, shipName, shipLength, axis, origin }) => {\n  player.gameboard.placeShip({\n    name: shipName,\n    length: shipLength,\n    axis: axis,\n    origin: parseInt(origin),\n  });\n};\n\nconst renderShipsPanel = (deploymentContainerId) => {\n  const shipImageMap = {\n    cv: _assets_cv_png__WEBPACK_IMPORTED_MODULE_2__,\n    bb: _assets_bb_png__WEBPACK_IMPORTED_MODULE_0__,\n    cc: _assets_cc_png__WEBPACK_IMPORTED_MODULE_1__,\n    dd: _assets_dd_png__WEBPACK_IMPORTED_MODULE_3__,\n    ss: _assets_ss_png__WEBPACK_IMPORTED_MODULE_4__,\n  };\n\n  const panel = document.createElement('div');\n  _data_ships_json__WEBPACK_IMPORTED_MODULE_5__.forEach((ship, index) => {\n    const div = document.createElement('div');\n    const name = document.createElement('div');\n    name.textContent = ship.name;\n    div.appendChild(name);\n\n    const inputOrigin = document.createElement('input');\n    inputOrigin.type = 'number';\n    inputOrigin.name = `origin-${ship.code}`;\n    inputOrigin.id = `origin-${ship.code}`;\n    inputOrigin.value = index + 1;\n    div.appendChild(inputOrigin);\n\n    const inputAxis = document.createElement('input');\n    inputAxis.name = `axis-${ship.code}`;\n    inputAxis.id = `axis-${ship.code}`;\n    inputAxis.value = 'y';\n    div.appendChild(inputAxis);\n\n    const btnDeploy = document.createElement('button');\n    btnDeploy.textContent = 'Deploy';\n    div.appendChild(btnDeploy);\n\n    btnDeploy.addEventListener('click', () => {\n      handleDeployment({\n        player: humanPlayer,\n        shipName: ship.name,\n        shipLength: ship.length,\n        axis: inputAxis.value,\n        origin: inputOrigin.value,\n      });\n      const deploymentBoard = document.getElementById(deploymentContainerId);\n      deploymentBoard.innerHTML = '';\n      (0,_components_renderBoard__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        containerId: deploymentContainerId,\n        player: humanPlayer,\n        type: 'deployment',\n      });\n    });\n\n    panel.appendChild(div);\n  });\n\n  // render ship images\n  // shipData.map((data) => {\n  //   const imgDiv = document.createElement('div');\n  //   const label = document.createElement('span');\n  //   label.textContent = _.startCase(data.class);\n  //   imgDiv.appendChild(label);\n  //   const id = data.class;\n  //   const shipImage = new Image();\n  //   shipImage.id = id;\n  //   const imageCode = shipImageMap[data.code];\n  //   imgDiv.className = 'shipDiv';\n  //   shipImage.src = imageCode;\n  //   imgDiv.appendChild(shipImage);\n  //   panel.appendChild(imgDiv);\n  // });\n  return panel;\n};\n\nconst renderDeploymentPage = (containerId) => {\n  const container = document.getElementById(containerId);\n  const title = document.createElement('h1');\n  title.textContent = 'Battleship Game';\n  // body.appendChild(title);\n\n  const playerpanel = document.createElement('div');\n  const fieldset = document.createElement('fieldset');\n  const legend = document.createElement('legend');\n  legend.textContent = 'Admiral';\n\n  const label = document.createElement('span');\n  label.textContent = 'Name: ';\n  fieldset.appendChild(label);\n\n  const input = document.createElement('input');\n  input.type = 'text';\n  input.name = 'name';\n  input.id = 'name';\n  input.autocomplete = 'name';\n  input.required = true;\n  input.minLength = 2;\n  input.maxLength = 15;\n  input.size = 15;\n  input.value = 'Player';\n  fieldset.appendChild(input);\n\n  fieldset.appendChild(legend);\n  playerpanel.appendChild(fieldset);\n  // body.appendChild(playerpanel);\n\n  const setupPanel = document.createElement('div');\n  setupPanel.classList = 'setupPanel';\n\n  const deploymentBoard = document.createElement('div');\n  deploymentBoard.classList = 'deploymentBoard';\n  deploymentBoard.id = 'deployment';\n\n  const btnStartGame = document.createElement('button');\n  btnStartGame.textContent = 'Start Game';\n  btnStartGame.addEventListener('click', () => {\n    container.innerHTML = '';\n    (0,_renderBattlePage__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(containerId, humanPlayer);\n  });\n\n  setupPanel.appendChild(deploymentBoard);\n  setupPanel.appendChild(renderShipsPanel('deployment'));\n  setupPanel.appendChild(btnStartGame);\n  container.appendChild(setupPanel);\n  (0,_components_renderBoard__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    containerId: 'deployment',\n    player: humanPlayer,\n    type: 'deployment',\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDeploymentPage);\n\n\n//# sourceURL=webpack://odin-battleship/./src/pages/renderDeploymentPage.js?");

/***/ }),

/***/ "./src/utils/createRandomPlayer.js":
/*!*****************************************!*\
  !*** ./src/utils/createRandomPlayer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_ships_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/ships.json */ \"./src/data/ships.json\");\n/* harmony import */ var _models_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player */ \"./src/models/player.js\");\n\n\n\n// Returns bot object with random ship placement\nconst createRandomPlayer = (name, type) => {\n  const randomPlayer = new _models_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ name: name, type: type });\n\n  const placeShipInRandom = (name, length) => {\n    const randomAxis = Math.floor(Math.random() * 2) ? 'x' : 'y';\n    const randomOrigin = Math.floor(Math.random() * 100);\n\n    return randomPlayer.gameboard.placeShip({\n      name: name,\n      length: length,\n      axis: randomAxis,\n      origin: randomOrigin,\n    });\n  };\n\n  _data_ships_json__WEBPACK_IMPORTED_MODULE_0__.forEach((ship) => {\n    let isSuccess = false;\n    while (!isSuccess) {\n      isSuccess = placeShipInRandom(ship.name, ship.length);\n    }\n  });\n\n  return randomPlayer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRandomPlayer);\n\n\n//# sourceURL=webpack://odin-battleship/./src/utils/createRandomPlayer.js?");

/***/ }),

/***/ "./src/utils/handleBotAttack.js":
/*!**************************************!*\
  !*** ./src/utils/handleBotAttack.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_components_renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/components/renderBoard */ \"./src/pages/components/renderBoard.js\");\n/* harmony import */ var _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/renderDeploymentPage */ \"./src/pages/renderDeploymentPage.js\");\n/* harmony import */ var _handleWinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleWinner */ \"./src/utils/handleWinner.js\");\n\n\n\n\nconst handleBotAttack = () => {\n  let isSuccess = false;\n  while (!isSuccess) {\n    const randomAttack = Math.floor(Math.random() * 101);\n    isSuccess = _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.gameboard.receiveAttack(randomAttack);\n  }\n  (0,_pages_components_renderBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    containerId: 'player',\n    player: _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.humanPlayer,\n    type: 'playerGameboard',\n  });\n  (0,_handleWinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('bot', _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.humanPlayer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleBotAttack);\n\n\n//# sourceURL=webpack://odin-battleship/./src/utils/handleBotAttack.js?");

/***/ }),

/***/ "./src/utils/handlePlayerAttack.js":
/*!*****************************************!*\
  !*** ./src/utils/handlePlayerAttack.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_components_renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/components/renderBoard */ \"./src/pages/components/renderBoard.js\");\n/* harmony import */ var _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/renderDeploymentPage */ \"./src/pages/renderDeploymentPage.js\");\n/* harmony import */ var _handleWinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleWinner */ \"./src/utils/handleWinner.js\");\n\n\n\n\nconst handlePlayerAttack = (cellId) => {\n  _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.bot.gameboard.receiveAttack(cellId);\n  (0,_pages_components_renderBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    containerId: 'enemy',\n    player: _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.bot,\n    type: 'enemyGameboard',\n  });\n  (0,_handleWinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Player', _pages_renderDeploymentPage__WEBPACK_IMPORTED_MODULE_1__.bot);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlePlayerAttack);\n\n\n//# sourceURL=webpack://odin-battleship/./src/utils/handlePlayerAttack.js?");

/***/ }),

/***/ "./src/utils/handleWinner.js":
/*!***********************************!*\
  !*** ./src/utils/handleWinner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleWinner = (attackerName, opposingPlayer) => {\n  if (opposingPlayer.gameboard.isShipsSunk()) {\n    alert(`${attackerName} won!`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleWinner);\n\n\n//# sourceURL=webpack://odin-battleship/./src/utils/handleWinner.js?");

/***/ }),

/***/ "./src/assets/bb.png":
/*!***************************!*\
  !*** ./src/assets/bb.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c2c5336541e4aced12f9.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/bb.png?");

/***/ }),

/***/ "./src/assets/cc.png":
/*!***************************!*\
  !*** ./src/assets/cc.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af5d0e9645a42c22fba8.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/cc.png?");

/***/ }),

/***/ "./src/assets/cv.png":
/*!***************************!*\
  !*** ./src/assets/cv.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84296f91a5213a5472b7.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/cv.png?");

/***/ }),

/***/ "./src/assets/dd.png":
/*!***************************!*\
  !*** ./src/assets/dd.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6eb781884fd297218e1.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/dd.png?");

/***/ }),

/***/ "./src/assets/ss.png":
/*!***************************!*\
  !*** ./src/assets/ss.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9596550614a2ff57ab65.png\";\n\n//# sourceURL=webpack://odin-battleship/./src/assets/ss.png?");

/***/ }),

/***/ "./src/data/ships.json":
/*!*****************************!*\
  !*** ./src/data/ships.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"carrier\",\"code\":\"cv\",\"length\":6},{\"name\":\"battleship\",\"code\":\"bb\",\"length\":5},{\"name\":\"cruiser\",\"code\":\"cc\",\"length\":4},{\"name\":\"destroyer\",\"code\":\"dd\",\"length\":3},{\"name\":\"submarine\",\"code\":\"ss\",\"length\":2}]');\n\n//# sourceURL=webpack://odin-battleship/./src/data/ships.json?");

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