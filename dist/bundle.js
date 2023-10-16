/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.grid-container {
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* Create 10 equal columns */
  grid-template-rows: repeat(10, 1fr); /* Create 10 equal rows */
  gap: 1px; /* Add some space between the divs (optional) */
}

.cell {
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none; /* Disable text selection */
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.occupied {
  background-color: #424242;
}

.hit {
  color: #FF3333;
}

.miss {
  color: #424242
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC,EAAE,4BAA4B;EACpE,mCAAmC,EAAE,yBAAyB;EAC9D,QAAQ,EAAE,+CAA+C;AAC3D;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,eAAe;EACf,8CAA8C;;EAE9C,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,iBAAiB,EAAE,2BAA2B;EAC9C,sBAAsB;EACtB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;AACF","sourcesContent":[".grid-container {\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr); /* Create 10 equal columns */\n  grid-template-rows: repeat(10, 1fr); /* Create 10 equal rows */\n  gap: 1px; /* Add some space between the divs (optional) */\n}\n\n.cell {\n  min-width: 0;\n  min-height: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #000;\n  font-size: 30px;\n  font-family: 'Courier New', Courier, monospace;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  user-select: none; /* Disable text selection */\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.occupied {\n  background-color: #424242;\n}\n\n.hit {\n  color: #FF3333;\n}\n\n.miss {\n  color: #424242\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { player, gameEnd} = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");

function renderOccupiedCell1(x, y) {
  return player[1].board.fleetGrid[y][x] !== null
}

function renderHitCell1(x, y) {
  return player[1].board.hitGrid[y][x] == 'hit'
}

function renderMissCell1(x, y) {
  return player[1].board.hitGrid[y][x] == 'miss'
}

function renderOccupiedCell2(x, y) {
  return player[2].board.fleetGrid[y][x] !== null
}
function renderHitCell2(x, y) {
  return player[2].board.hitGrid[y][x] == 'hit'
}

function renderMissCell2(x, y) {
  return player[2].board.hitGrid[y][x] == 'miss'
}
function aiAttack() {
  let attackState = false
  let x, y
  while (attackState == false) {
    const randomNumX = Math.floor(Math.random() * 10)
    const randomNumY = Math.floor(Math.random() * 10)
    attackState = player[1].board.receiveAttack(randomNumX, randomNumY)
    x = randomNumX
    y = randomNumY
  }

  const id = `p1_${y}${x}`
  const div = document.getElementById(id)
  // console.log(player[1].board.hitGrid)
  if (renderHitCell1(x, y)) {
    div.textContent = 'x'
    div.classList.add('hit')
  } 
  if (renderMissCell1(x, y)) {
    div.textContent = 'x'
    div.classList.add('miss')
  }
  
  
  
}
const grid_1 = document.querySelector('.grid_1');
const grid_2 = document.querySelector('.grid_2');
function renderboards() {
  for (let i = 0; i < 100; i++) {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    
    const coordinates = i.toString().padStart(2, '0')
    const x = coordinates[1]
    const y = coordinates[0]
    div1.classList.add(`cell`);
    div2.classList.add(`cell`);
    div1.id = `p1_${coordinates}`
    div2.id = `p2_${coordinates}`

    div2.addEventListener('click', function() {
      // console.log(`Clicked ${coordinates}`)
      if (player[2].board.hitGrid[y][x] == null) aiAttack()

      player[2].board.receiveAttack(x, y)
      if (renderHitCell2(x, y)) {
        div2.textContent = 'x'
        div2.classList.add('hit')
      }
      if (renderMissCell2(x, y)) {
        div2.textContent = 'x'
        div2.classList.add('miss')
      }
      
      switch (gameEnd()  ) {
        case 0:
          console.log('0')
          break;
        case 1:
          setTimeout(function() {
            alert(`${player[2].name} wins!`);
        }, 5);
          break;
        case 2:
          setTimeout(function() {
            alert(`${player[1].name} wins!`);
        }, 5);
          break;
        default: console.log('gameEnd switch case error')
          break;
      }
      
    })

    if (renderOccupiedCell1(x, y)) div1.classList.add('occupied')
    // if (renderHitCell1(x, y)) {
    //   div1.textContent = 'x'
    //   div1.classList.add('hit')
    // }  
    // if (renderHitCell2(x, y)) {
    //   div2.textContent = 'x'
    //   div2.classList.add('hit')
    // }
    // if (renderMissCell1(x, y)) {
    //   div1.textContent = 'x'
    //   div1.classList.add('miss')
    // }  
    // if (renderMissCell2(x, y)) {
    //   div2.textContent = 'x'
    //   div2.classList.add('miss')
    // }
  
    grid_1.appendChild(div1);
    grid_2.appendChild(div2);
  }

}

module.exports = {
  renderboards,
};

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Player} = __webpack_require__(/*! ./player.js */ "./src/player.js")

// function aiAttack() {
//   let attackState = false
//   while (attackState == false) {
//     const randomNumX = Math.floor(Math.random() * 10)
//     const randomNumY = Math.floor(Math.random() * 10)
//     attackState = player[1].board.receiveAttack(randomNumX, randomNumY)
//   }
//   console.log(player[1].board.hitGrid)
// }

const player = {}

player[1] = new Player('Major', 'human')
player[2] = new Player('T1OZ', 'AI')
player[1].board.placeShip('cv', 'Carrier', 5, 0,'vertical')
player[1].board.placeShip('bb', 'Battleship', 6, 0,'vertical')
player[1].board.placeShip('cc', 'Cruiser', 7, 0,'vertical')
player[1].board.placeShip('dd', 'Destroyer', 8, 0,'vertical')
player[1].board.placeShip('ss', 'Submarine', 9, 0,'vertical')

player[2].board.placeShip('cv', 'Carrier', 0, 0,'horizontal')
player[2].board.placeShip('bb', 'Battleship', 0, 1,'horizontal')
player[2].board.placeShip('cc', 'Cruiser', 0, 2,'horizontal')
player[2].board.placeShip('dd', 'Destroyer', 0, 3,'horizontal')
player[2].board.placeShip('ss', 'Submarine', 0, 4,'horizontal')

let currentPlayer = 1
currentPlayer = playerTurn()

function playerTurn(){
  return currentPlayer == 1 ? 2 : 1
}

function gameEnd() {
  if (player[1].board.isAllSunk()) return 1
  if (player[2].board.isAllSunk()) return 2
  return 0
}

module.exports = { player, playerTurn, gameEnd};

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship} = __webpack_require__(/*! ./ship.js */ "./src/ship.js");

// note: The fleet and hit Grids index value is [Y axis][X axis]

function Gameboard() {
  this.ships = {}
  this.fleetGrid = this.createGrid()
  this.hitGrid = this.createGrid()
}

Gameboard.prototype.createGrid = function () {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr[i] = Array(10).fill(null)
  }
  return arr
}

Gameboard.prototype.placeShip = function(shipName, shipClass, x, y, orientation) {
  const _ship = this.ships[shipName] = new Ship(shipClass)
  switch (orientation) {
    case 'horizontal':
      if (_ship.length + x > 10) {
        delete this.ships[shipName];
        return 'out of bounds'
      }
      for (let i = x; i < _ship.length + x ; i++) {
        if (this.fleetGrid[y][i] !== null) {
          delete this.ships[shipName];
          return 'location is already taken'
        }
        this.fleetGrid[y][i] = shipName
      }
      return 'placement success'

    case 'vertical':
      if (_ship.length + y > 10) {
        delete this.ships[shipName];
        return 'out of bounds'
      } 
      for (let i = y; i < _ship.length + y ; i++) {
        if (this.fleetGrid[i][x] !== null) {
          delete this.ships[shipName];
          return 'location is already taken'
        } 
        this.fleetGrid[i][x] = shipName
      }
      return 'placement success'

    default: return 'orientation error';
  }
}

Gameboard.prototype.receiveAttack = function(x, y) {
  const _cell = this.fleetGrid[y][x]
  if (this.hitGrid[y][x] == 'miss' || this.hitGrid[y][x] == 'hit') {
    return false
  }
  if (_cell !== null) {
    this.ships[_cell].hit()
    this.hitGrid[y][x] = 'hit'
    return true
  }
  this.hitGrid[y][x] = 'miss'
  return true
};

Gameboard.prototype.isAllSunk = function() {
  for (let shipName in this.ships ) {
    const _shipObj = this.ships[shipName]
    if (_shipObj.isSunk() == false) {
      return false
    }
  }
  return true
}

module.exports = { Gameboard};



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Gameboard} = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");

function Player(name, type) {
  this.name = name
  this.type = type
  this.board = new Gameboard()
}

module.exports = { Player};

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

function Ship(shipClass){
  this.shipClass = shipClass
  this.length = this.setLength(shipClass)
  this.timesHit = 0
}

Ship.prototype.setLength = function(shipClass) {
  switch (shipClass) {
    case 'Carrier': return 5
    case 'Battleship': return 4
    case 'Cruiser': return 3
    case 'Destroyer': return 3
    case 'Submarine': return 2
    default: return 'shipClass error';
  }
}

Ship.prototype.hit = function() {
  this.timesHit += 1
}

Ship.prototype.isSunk = function() {
  return this.timesHit >= this.length 
}

module.exports = { Ship};

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const { renderboards } = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
renderboards()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7Ozs7Ozs7OztBQ1JuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COzs7Ozs7VUN6Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3JCLFFBQVEsZUFBZSxFQUFFLG1CQUFPLENBQUMsOEJBQVU7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdyaWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTsgLyogQ3JlYXRlIDEwIGVxdWFsIGNvbHVtbnMgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7IC8qIENyZWF0ZSAxMCBlcXVhbCByb3dzICovXG4gIGdhcDogMXB4OyAvKiBBZGQgc29tZSBzcGFjZSBiZXR3ZWVuIHRoZSBkaXZzIChvcHRpb25hbCkgKi9cbn1cblxuLmNlbGwge1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogRGlzYWJsZSB0ZXh0IHNlbGVjdGlvbiAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5vY2N1cGllZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG5cbi5oaXQge1xuICBjb2xvcjogI0ZGMzMzMztcbn1cblxuLm1pc3Mge1xuICBjb2xvcjogIzQyNDI0MlxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0MsRUFBRSw0QkFBNEI7RUFDcEUsbUNBQW1DLEVBQUUseUJBQXlCO0VBQzlELFFBQVEsRUFBRSwrQ0FBK0M7QUFDM0Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiw4Q0FBOEM7O0VBRTlDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixpQkFBaUIsRUFBRSwyQkFBMkI7RUFDOUMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTsgLyogQ3JlYXRlIDEwIGVxdWFsIGNvbHVtbnMgKi9cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyAvKiBDcmVhdGUgMTAgZXF1YWwgcm93cyAqL1xcbiAgZ2FwOiAxcHg7IC8qIEFkZCBzb21lIHNwYWNlIGJldHdlZW4gdGhlIGRpdnMgKG9wdGlvbmFsKSAqL1xcbn1cXG5cXG4uY2VsbCB7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogRGlzYWJsZSB0ZXh0IHNlbGVjdGlvbiAqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5vY2N1cGllZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGNvbG9yOiAjRkYzMzMzO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBjb2xvcjogIzQyNDI0Mlxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBwbGF5ZXIsIGdhbWVFbmR9ID0gcmVxdWlyZSgnLi9nYW1lTG9vcCcpO1xuXG5mdW5jdGlvbiByZW5kZXJPY2N1cGllZENlbGwxKHgsIHkpIHtcbiAgcmV0dXJuIHBsYXllclsxXS5ib2FyZC5mbGVldEdyaWRbeV1beF0gIT09IG51bGxcbn1cblxuZnVuY3Rpb24gcmVuZGVySGl0Q2VsbDEoeCwgeSkge1xuICByZXR1cm4gcGxheWVyWzFdLmJvYXJkLmhpdEdyaWRbeV1beF0gPT0gJ2hpdCdcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWlzc0NlbGwxKHgsIHkpIHtcbiAgcmV0dXJuIHBsYXllclsxXS5ib2FyZC5oaXRHcmlkW3ldW3hdID09ICdtaXNzJ1xufVxuXG5mdW5jdGlvbiByZW5kZXJPY2N1cGllZENlbGwyKHgsIHkpIHtcbiAgcmV0dXJuIHBsYXllclsyXS5ib2FyZC5mbGVldEdyaWRbeV1beF0gIT09IG51bGxcbn1cbmZ1bmN0aW9uIHJlbmRlckhpdENlbGwyKHgsIHkpIHtcbiAgcmV0dXJuIHBsYXllclsyXS5ib2FyZC5oaXRHcmlkW3ldW3hdID09ICdoaXQnXG59XG5cbmZ1bmN0aW9uIHJlbmRlck1pc3NDZWxsMih4LCB5KSB7XG4gIHJldHVybiBwbGF5ZXJbMl0uYm9hcmQuaGl0R3JpZFt5XVt4XSA9PSAnbWlzcydcbn1cbmZ1bmN0aW9uIGFpQXR0YWNrKCkge1xuICBsZXQgYXR0YWNrU3RhdGUgPSBmYWxzZVxuICBsZXQgeCwgeVxuICB3aGlsZSAoYXR0YWNrU3RhdGUgPT0gZmFsc2UpIHtcbiAgICBjb25zdCByYW5kb21OdW1YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgY29uc3QgcmFuZG9tTnVtWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIGF0dGFja1N0YXRlID0gcGxheWVyWzFdLmJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tTnVtWCwgcmFuZG9tTnVtWSlcbiAgICB4ID0gcmFuZG9tTnVtWFxuICAgIHkgPSByYW5kb21OdW1ZXG4gIH1cblxuICBjb25zdCBpZCA9IGBwMV8ke3l9JHt4fWBcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIC8vIGNvbnNvbGUubG9nKHBsYXllclsxXS5ib2FyZC5oaXRHcmlkKVxuICBpZiAocmVuZGVySGl0Q2VsbDEoeCwgeSkpIHtcbiAgICBkaXYudGV4dENvbnRlbnQgPSAneCdcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgfSBcbiAgaWYgKHJlbmRlck1pc3NDZWxsMSh4LCB5KSkge1xuICAgIGRpdi50ZXh0Q29udGVudCA9ICd4J1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgfVxuICBcbiAgXG4gIFxufVxuY29uc3QgZ3JpZF8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfMScpO1xuY29uc3QgZ3JpZF8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfMicpO1xuZnVuY3Rpb24gcmVuZGVyYm9hcmRzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzFdXG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKGBjZWxsYCk7XG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKGBjZWxsYCk7XG4gICAgZGl2MS5pZCA9IGBwMV8ke2Nvb3JkaW5hdGVzfWBcbiAgICBkaXYyLmlkID0gYHAyXyR7Y29vcmRpbmF0ZXN9YFxuXG4gICAgZGl2Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coYENsaWNrZWQgJHtjb29yZGluYXRlc31gKVxuICAgICAgaWYgKHBsYXllclsyXS5ib2FyZC5oaXRHcmlkW3ldW3hdID09IG51bGwpIGFpQXR0YWNrKClcblxuICAgICAgcGxheWVyWzJdLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICAgIGlmIChyZW5kZXJIaXRDZWxsMih4LCB5KSkge1xuICAgICAgICBkaXYyLnRleHRDb250ZW50ID0gJ3gnXG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgIH1cbiAgICAgIGlmIChyZW5kZXJNaXNzQ2VsbDIoeCwgeSkpIHtcbiAgICAgICAgZGl2Mi50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgfVxuICAgICAgXG4gICAgICBzd2l0Y2ggKGdhbWVFbmQoKSAgKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBjb25zb2xlLmxvZygnMCcpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWxlcnQoYCR7cGxheWVyWzJdLm5hbWV9IHdpbnMhYCk7XG4gICAgICAgIH0sIDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KGAke3BsYXllclsxXS5uYW1lfSB3aW5zIWApO1xuICAgICAgICB9LCA1KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coJ2dhbWVFbmQgc3dpdGNoIGNhc2UgZXJyb3InKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG4gICAgfSlcblxuICAgIGlmIChyZW5kZXJPY2N1cGllZENlbGwxKHgsIHkpKSBkaXYxLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJylcbiAgICAvLyBpZiAocmVuZGVySGl0Q2VsbDEoeCwgeSkpIHtcbiAgICAvLyAgIGRpdjEudGV4dENvbnRlbnQgPSAneCdcbiAgICAvLyAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAvLyB9ICBcbiAgICAvLyBpZiAocmVuZGVySGl0Q2VsbDIoeCwgeSkpIHtcbiAgICAvLyAgIGRpdjIudGV4dENvbnRlbnQgPSAneCdcbiAgICAvLyAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAvLyB9XG4gICAgLy8gaWYgKHJlbmRlck1pc3NDZWxsMSh4LCB5KSkge1xuICAgIC8vICAgZGl2MS50ZXh0Q29udGVudCA9ICd4J1xuICAgIC8vICAgZGl2MS5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAvLyB9ICBcbiAgICAvLyBpZiAocmVuZGVyTWlzc0NlbGwyKHgsIHkpKSB7XG4gICAgLy8gICBkaXYyLnRleHRDb250ZW50ID0gJ3gnXG4gICAgLy8gICBkaXYyLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgIC8vIH1cbiAgXG4gICAgZ3JpZF8xLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGdyaWRfMi5hcHBlbmRDaGlsZChkaXYyKTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZW5kZXJib2FyZHMsXG59OyIsImNvbnN0IHsgUGxheWVyfSA9IHJlcXVpcmUoJy4vcGxheWVyLmpzJylcblxuLy8gZnVuY3Rpb24gYWlBdHRhY2soKSB7XG4vLyAgIGxldCBhdHRhY2tTdGF0ZSA9IGZhbHNlXG4vLyAgIHdoaWxlIChhdHRhY2tTdGF0ZSA9PSBmYWxzZSkge1xuLy8gICAgIGNvbnN0IHJhbmRvbU51bVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbi8vICAgICBjb25zdCByYW5kb21OdW1ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4vLyAgICAgYXR0YWNrU3RhdGUgPSBwbGF5ZXJbMV0uYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21OdW1YLCByYW5kb21OdW1ZKVxuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKHBsYXllclsxXS5ib2FyZC5oaXRHcmlkKVxuLy8gfVxuXG5jb25zdCBwbGF5ZXIgPSB7fVxuXG5wbGF5ZXJbMV0gPSBuZXcgUGxheWVyKCdNYWpvcicsICdodW1hbicpXG5wbGF5ZXJbMl0gPSBuZXcgUGxheWVyKCdUMU9aJywgJ0FJJylcbnBsYXllclsxXS5ib2FyZC5wbGFjZVNoaXAoJ2N2JywgJ0NhcnJpZXInLCA1LCAwLCd2ZXJ0aWNhbCcpXG5wbGF5ZXJbMV0uYm9hcmQucGxhY2VTaGlwKCdiYicsICdCYXR0bGVzaGlwJywgNiwgMCwndmVydGljYWwnKVxucGxheWVyWzFdLmJvYXJkLnBsYWNlU2hpcCgnY2MnLCAnQ3J1aXNlcicsIDcsIDAsJ3ZlcnRpY2FsJylcbnBsYXllclsxXS5ib2FyZC5wbGFjZVNoaXAoJ2RkJywgJ0Rlc3Ryb3llcicsIDgsIDAsJ3ZlcnRpY2FsJylcbnBsYXllclsxXS5ib2FyZC5wbGFjZVNoaXAoJ3NzJywgJ1N1Ym1hcmluZScsIDksIDAsJ3ZlcnRpY2FsJylcblxucGxheWVyWzJdLmJvYXJkLnBsYWNlU2hpcCgnY3YnLCAnQ2FycmllcicsIDAsIDAsJ2hvcml6b250YWwnKVxucGxheWVyWzJdLmJvYXJkLnBsYWNlU2hpcCgnYmInLCAnQmF0dGxlc2hpcCcsIDAsIDEsJ2hvcml6b250YWwnKVxucGxheWVyWzJdLmJvYXJkLnBsYWNlU2hpcCgnY2MnLCAnQ3J1aXNlcicsIDAsIDIsJ2hvcml6b250YWwnKVxucGxheWVyWzJdLmJvYXJkLnBsYWNlU2hpcCgnZGQnLCAnRGVzdHJveWVyJywgMCwgMywnaG9yaXpvbnRhbCcpXG5wbGF5ZXJbMl0uYm9hcmQucGxhY2VTaGlwKCdzcycsICdTdWJtYXJpbmUnLCAwLCA0LCdob3Jpem9udGFsJylcblxubGV0IGN1cnJlbnRQbGF5ZXIgPSAxXG5jdXJyZW50UGxheWVyID0gcGxheWVyVHVybigpXG5cbmZ1bmN0aW9uIHBsYXllclR1cm4oKXtcbiAgcmV0dXJuIGN1cnJlbnRQbGF5ZXIgPT0gMSA/IDIgOiAxXG59XG5cbmZ1bmN0aW9uIGdhbWVFbmQoKSB7XG4gIGlmIChwbGF5ZXJbMV0uYm9hcmQuaXNBbGxTdW5rKCkpIHJldHVybiAxXG4gIGlmIChwbGF5ZXJbMl0uYm9hcmQuaXNBbGxTdW5rKCkpIHJldHVybiAyXG4gIHJldHVybiAwXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwbGF5ZXIsIHBsYXllclR1cm4sIGdhbWVFbmR9OyIsImNvbnN0IHsgU2hpcH0gPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcblxuLy8gbm90ZTogVGhlIGZsZWV0IGFuZCBoaXQgR3JpZHMgaW5kZXggdmFsdWUgaXMgW1kgYXhpc11bWCBheGlzXVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIHRoaXMuc2hpcHMgPSB7fVxuICB0aGlzLmZsZWV0R3JpZCA9IHRoaXMuY3JlYXRlR3JpZCgpXG4gIHRoaXMuaGl0R3JpZCA9IHRoaXMuY3JlYXRlR3JpZCgpXG59XG5cbkdhbWVib2FyZC5wcm90b3R5cGUuY3JlYXRlR3JpZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgYXJyW2ldID0gQXJyYXkoMTApLmZpbGwobnVsbClcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbkdhbWVib2FyZC5wcm90b3R5cGUucGxhY2VTaGlwID0gZnVuY3Rpb24oc2hpcE5hbWUsIHNoaXBDbGFzcywgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgY29uc3QgX3NoaXAgPSB0aGlzLnNoaXBzW3NoaXBOYW1lXSA9IG5ldyBTaGlwKHNoaXBDbGFzcylcbiAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgaWYgKF9zaGlwLmxlbmd0aCArIHggPiAxMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICAgIHJldHVybiAnb3V0IG9mIGJvdW5kcydcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgX3NoaXAubGVuZ3RoICsgeCA7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mbGVldEdyaWRbeV1baV0gIT09IG51bGwpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICAgICAgcmV0dXJuICdsb2NhdGlvbiBpcyBhbHJlYWR5IHRha2VuJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxlZXRHcmlkW3ldW2ldID0gc2hpcE5hbWVcbiAgICAgIH1cbiAgICAgIHJldHVybiAncGxhY2VtZW50IHN1Y2Nlc3MnXG5cbiAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICBpZiAoX3NoaXAubGVuZ3RoICsgeSA+IDEwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNoaXBzW3NoaXBOYW1lXTtcbiAgICAgICAgcmV0dXJuICdvdXQgb2YgYm91bmRzJ1xuICAgICAgfSBcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgX3NoaXAubGVuZ3RoICsgeSA7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5mbGVldEdyaWRbaV1beF0gIT09IG51bGwpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5zaGlwc1tzaGlwTmFtZV07XG4gICAgICAgICAgcmV0dXJuICdsb2NhdGlvbiBpcyBhbHJlYWR5IHRha2VuJ1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmZsZWV0R3JpZFtpXVt4XSA9IHNoaXBOYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gJ3BsYWNlbWVudCBzdWNjZXNzJ1xuXG4gICAgZGVmYXVsdDogcmV0dXJuICdvcmllbnRhdGlvbiBlcnJvcic7XG4gIH1cbn1cblxuR2FtZWJvYXJkLnByb3RvdHlwZS5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24oeCwgeSkge1xuICBjb25zdCBfY2VsbCA9IHRoaXMuZmxlZXRHcmlkW3ldW3hdXG4gIGlmICh0aGlzLmhpdEdyaWRbeV1beF0gPT0gJ21pc3MnIHx8IHRoaXMuaGl0R3JpZFt5XVt4XSA9PSAnaGl0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChfY2VsbCAhPT0gbnVsbCkge1xuICAgIHRoaXMuc2hpcHNbX2NlbGxdLmhpdCgpXG4gICAgdGhpcy5oaXRHcmlkW3ldW3hdID0gJ2hpdCdcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHRoaXMuaGl0R3JpZFt5XVt4XSA9ICdtaXNzJ1xuICByZXR1cm4gdHJ1ZVxufTtcblxuR2FtZWJvYXJkLnByb3RvdHlwZS5pc0FsbFN1bmsgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgc2hpcE5hbWUgaW4gdGhpcy5zaGlwcyApIHtcbiAgICBjb25zdCBfc2hpcE9iaiA9IHRoaXMuc2hpcHNbc2hpcE5hbWVdXG4gICAgaWYgKF9zaGlwT2JqLmlzU3VuaygpID09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEdhbWVib2FyZH07XG5cbiIsImNvbnN0IHsgR2FtZWJvYXJkfSA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkLmpzJyk7XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lLCB0eXBlKSB7XG4gIHRoaXMubmFtZSA9IG5hbWVcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBQbGF5ZXJ9OyIsImZ1bmN0aW9uIFNoaXAoc2hpcENsYXNzKXtcbiAgdGhpcy5zaGlwQ2xhc3MgPSBzaGlwQ2xhc3NcbiAgdGhpcy5sZW5ndGggPSB0aGlzLnNldExlbmd0aChzaGlwQ2xhc3MpXG4gIHRoaXMudGltZXNIaXQgPSAwXG59XG5cblNoaXAucHJvdG90eXBlLnNldExlbmd0aCA9IGZ1bmN0aW9uKHNoaXBDbGFzcykge1xuICBzd2l0Y2ggKHNoaXBDbGFzcykge1xuICAgIGNhc2UgJ0NhcnJpZXInOiByZXR1cm4gNVxuICAgIGNhc2UgJ0JhdHRsZXNoaXAnOiByZXR1cm4gNFxuICAgIGNhc2UgJ0NydWlzZXInOiByZXR1cm4gM1xuICAgIGNhc2UgJ0Rlc3Ryb3llcic6IHJldHVybiAzXG4gICAgY2FzZSAnU3VibWFyaW5lJzogcmV0dXJuIDJcbiAgICBkZWZhdWx0OiByZXR1cm4gJ3NoaXBDbGFzcyBlcnJvcic7XG4gIH1cbn1cblxuU2hpcC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudGltZXNIaXQgKz0gMVxufVxuXG5TaGlwLnByb3RvdHlwZS5pc1N1bmsgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGltZXNIaXQgPj0gdGhpcy5sZW5ndGggXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBTaGlwfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmNvbnN0IHsgcmVuZGVyYm9hcmRzIH0gPSByZXF1aXJlKCcuL2RvbS5qcycpO1xucmVuZGVyYm9hcmRzKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=