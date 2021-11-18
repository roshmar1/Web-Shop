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

/***/ "./src/Basket.ts":
/*!***********************!*\
  !*** ./src/Basket.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketAdd\": () => (/* binding */ basketAdd),\n/* harmony export */   \"basketRemove\": () => (/* binding */ basketRemove),\n/* harmony export */   \"basketPage\": () => (/* binding */ basketPage),\n/* harmony export */   \"basketState\": () => (/* binding */ basketState)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.ts\");\n\r\nvar basketAdd = function (elementsValue) {\r\n    var iteam = localStorage.getItem(elementsValue);\r\n    if (iteam != null) {\r\n        sessionStorage.setItem(elementsValue, iteam);\r\n        basketState();\r\n    }\r\n};\r\nvar basketRemove = function (elementsValue) {\r\n    sessionStorage.removeItem(elementsValue);\r\n    basketState();\r\n};\r\nvar basketState = function () {\r\n    var basket = document.getElementById(\"basket\");\r\n    if (basket != null) {\r\n        basket.textContent = \"\" + sessionStorage.length;\r\n    }\r\n};\r\nvar basketPage = function () {\r\n    var myNode = document.getElementById(\"storage-container\");\r\n    if (myNode != null) {\r\n        myNode.innerHTML = '';\r\n    }\r\n    for (var i = 0; i < sessionStorage.length; i++) {\r\n        var iteam = void 0;\r\n        var iteamObject = void 0;\r\n        var key = sessionStorage.key(i);\r\n        if (key != null) {\r\n            iteam = sessionStorage.getItem(key);\r\n        }\r\n        if (iteam != null) {\r\n            var iteamObject_1 = JSON.parse(iteam);\r\n            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addCard)(iteamObject_1);\r\n        }\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://web-shop/./src/Basket.ts?");

/***/ }),

/***/ "./src/addNewIteam.ts":
/*!****************************!*\
  !*** ./src/addNewIteam.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewIteam\": () => (/* binding */ addNewIteam),\n/* harmony export */   \"loadOnce\": () => (/* binding */ loadOnce),\n/* harmony export */   \"addDataToStorage\": () => (/* binding */ addDataToStorage)\n/* harmony export */ });\nvar addNewIteam = function () {\r\n    var name = document.getElementById('ItemName').value;\r\n    var description = document.getElementById('ItemDescrimption').value;\r\n    var category = document.getElementById('ItemCategory').value;\r\n    var selectedFile = document.getElementById('ItemCategory').files;\r\n    addDataToStorage(selectedFile[0], name, description, category);\r\n};\r\nvar loadOnce = (function () {\r\n    return function () {\r\n        if (true) {\r\n            var description_1 = \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\";\r\n            //iphone 12\r\n            fetch('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"Iphone 13\", description_1, \"Phone\");\r\n            });\r\n            //apple whach 6\r\n            fetch('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML7Y3_VW_34FR+watch-45-alum-green-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1629920460000%2C1631661629000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"Apple whach 6\", description_1, \"Whatch\");\r\n            });\r\n            //apple whach7\r\n            fetch('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/45-nc-alum-midnight-sport-gray-s7?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1631855766000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"Apple whach 7\", description_1, \"Whatch\");\r\n            });\r\n            //iphone 11 pro max \r\n            fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"Iphone 11\", description_1, \"Phone\");\r\n            });\r\n            //iphone 12\r\n            fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343703000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"Iphone 12\", description_1, \"Phone\");\r\n            });\r\n            //air pods\r\n            fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"AirPods Pro\", description_1, \"Audio\");\r\n            });\r\n            //Mack Book Pro\r\n            fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"Mack Book Pro\", description_1, \"Game gadget\");\r\n            });\r\n            //IMac\r\n            fetch('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac27-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186288000')\r\n                .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob\r\n                .then(function (blob) {\r\n                addDataToStorage(blob, \"IMac\", description_1, \"Game gadget\");\r\n            });\r\n        }\r\n    };\r\n})();\r\nvar addDataToStorage = function (selectedFile, name, description, category) {\r\n    var reader = new FileReader();\r\n    var iteam;\r\n    reader.readAsDataURL(selectedFile);\r\n    reader.addEventListener(\"load\", function () {\r\n        iteam = {\r\n            name: name,\r\n            description: description,\r\n            category: category,\r\n            file: {\r\n                fileName: selectedFile.name,\r\n                fileReader: reader.result\r\n            }\r\n        };\r\n        localStorage.setItem(iteam.name, JSON.stringify(iteam));\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://web-shop/./src/addNewIteam.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.ts\");\n/* harmony import */ var _addNewIteam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewIteam */ \"./src/addNewIteam.ts\");\n/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basket */ \"./src/Basket.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.basketState = _Basket__WEBPACK_IMPORTED_MODULE_2__.basketState;\r\nwindow.addCard = _storage__WEBPACK_IMPORTED_MODULE_0__.addCard;\r\nwindow.basketPage = _Basket__WEBPACK_IMPORTED_MODULE_2__.basketPage;\r\nwindow.loadOnce = _addNewIteam__WEBPACK_IMPORTED_MODULE_1__.loadOnce;\r\nwindow.fullThePage = _storage__WEBPACK_IMPORTED_MODULE_0__.fullThePage;\r\nwindow.addToBasket = _storage__WEBPACK_IMPORTED_MODULE_0__.addToBasket;\r\nwindow.addNewIteam = _addNewIteam__WEBPACK_IMPORTED_MODULE_1__.addNewIteam;\r\n(0,_addNewIteam__WEBPACK_IMPORTED_MODULE_1__.loadOnce)();\r\n\n\n//# sourceURL=webpack://web-shop/./src/index.ts?");

/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"fullThePage\": () => (/* binding */ fullThePage),\n/* harmony export */   \"addCard\": () => (/* binding */ addCard)\n/* harmony export */ });\n/* harmony import */ var _Basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basket */ \"./src/Basket.ts\");\n\r\n\r\n\r\nvar addToBasket = function (button) {\r\n    var elementsValue = button.getAttribute(\"value\");\r\n    var isElementContainClassName = button.classList.contains(\"card-btn\");\r\n    if (isElementContainClassName) {\r\n        button.classList.add(\"card-btn-added\");\r\n        button.classList.remove(\"card-btn\");\r\n        if (elementsValue != null) {\r\n            (0,_Basket__WEBPACK_IMPORTED_MODULE_0__.basketAdd)(elementsValue);\r\n        }\r\n    }\r\n    else {\r\n        button.classList.add(\"card-btn\");\r\n        button.classList.remove(\"card-btn-added\");\r\n        if (elementsValue != null) {\r\n            (0,_Basket__WEBPACK_IMPORTED_MODULE_0__.basketRemove)(elementsValue);\r\n        }\r\n    }\r\n};\r\nfunction fullThePage() {\r\n    var urlParams = new URLSearchParams(window.location.search);\r\n    var category = urlParams.get('category');\r\n    var myNode = document.getElementById(\"storage-container\");\r\n    if (myNode != null) {\r\n        myNode.innerHTML = '';\r\n    }\r\n    if (category === \"basketPage\") {\r\n        (0,_Basket__WEBPACK_IMPORTED_MODULE_0__.basketPage)();\r\n    }\r\n    for (var i = 0; i < localStorage.length; i++) {\r\n        var localStorageKey = localStorage.key(i);\r\n        var iteam = void 0;\r\n        var iteamObject = void 0;\r\n        if (localStorageKey != null) {\r\n            iteam = localStorage.getItem(localStorageKey);\r\n            if (iteam != null) {\r\n                iteamObject = JSON.parse(iteam);\r\n            }\r\n        }\r\n        switch (category) {\r\n            case 'All':\r\n                addCard(iteamObject);\r\n                break;\r\n            case iteamObject.category:\r\n                addCard(iteamObject);\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    }\r\n}\r\nvar addCard = function (iteamObject) {\r\n    var main = document.getElementById('storage-container');\r\n    var template = document.querySelector('#card-teamplate');\r\n    var clone = template.content.cloneNode(true);\r\n    var img = clone.querySelector(\"img\");\r\n    var src = iteamObject.file.fileReader;\r\n    if (typeof src == \"string\") {\r\n        img.src = src;\r\n    }\r\n    var span = clone.querySelector(\"span\");\r\n    span.innerHTML = iteamObject.description;\r\n    var btn = clone.querySelector(\"button\");\r\n    btn.setAttribute('value', iteamObject.name);\r\n    if (sessionStorage.getItem(iteamObject.name) === null) {\r\n        btn.classList.add(\"card-btn\");\r\n        btn.classList.remove(\"card-btn-added\");\r\n        btn.textContent = \"Add to basket\";\r\n    }\r\n    else {\r\n        btn.classList.add(\"card-btn-added\");\r\n        btn.classList.remove(\"card-btn\");\r\n        btn.textContent = \"Remove\";\r\n    }\r\n    if (main != null) {\r\n        main.appendChild(clone);\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://web-shop/./src/storage.ts?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;