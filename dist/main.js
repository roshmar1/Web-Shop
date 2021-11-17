/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addNewIteam.js":
/*!****************************!*\
  !*** ./src/addNewIteam.js ***!
  \****************************/
/***/ ((module) => {

eval("const addNewIteam = () => {    \r\n    alert(\"hello\")\r\n\r\n    let name = document.getElementById('ItemName').value;\r\n    let description = document.getElementById('ItemDescrimption').value;\r\n    let category = document.getElementById('ItemCategory').value;\r\n\r\n    let file = document.getElementById('ItemFile');\r\n\r\n    const selectedFile = document.getElementById('ItemFile').files[0];\r\n\r\n   \r\n\r\n    let reader = new FileReader();\r\n\r\n    reader.readAsDataURL(selectedFile);\r\n\r\n    reader.addEventListener(\"load\",()=>{\r\n        let iteam = {\r\n            name: name,\r\n            description: description,\r\n            category: category,\r\n            file: {\r\n                    fileName:selectedFile.name,\r\n                    fileSource: file.files,\r\n                    fileReader: reader.result\r\n                }\r\n        }       \r\n        localStorage.setItem(iteam.name, JSON.stringify(iteam));\r\n    });\r\n\r\n    var retrievedObject = localStorage.getItem(name);\r\n\r\n    console.log('retrievedObject: ', JSON.parse(retrievedObject));\r\n}   \r\n\r\nmodule.exports = {addNewIteam}\r\n\n\n//# sourceURL=webpack://web-shop/./src/addNewIteam.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {addToBasket} = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\r\nconst {fullThePage} = __webpack_require__(/*! ./storage */ \"./src/storage.js\")\r\nconst {addNewIteam} = __webpack_require__(/*! ./addNewIteam */ \"./src/addNewIteam.js\");\r\n\r\nwindow.fullThePage = fullThePage;\r\nwindow.addToBasket = addToBasket;\r\nwindow.addNewIteam = addNewIteam;\r\n\r\nmodule.exports  = {\r\n    addToBasket: addToBasket,\r\n    fullThePage: fullThePage,\r\n    addNewIteam:addNewIteam\r\n }\n\n//# sourceURL=webpack://web-shop/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((module) => {

eval("const addToBasket = (button) => {    \r\n\r\n    let elements = button.getAttribute(\"value\");\r\n    let elementClassName = button.classList.contains(\"card-btn\");\r\n    console.log(elementClassName);\r\n    \r\n    if(elementClassName){\r\n        button.classList.add(\"card-btn-added\");\r\n        button.classList.remove(\"card-btn\");\r\n    }\r\n    else{\r\n        button.classList.add(\"card-btn\");\r\n        button.classList.remove(\"card-btn-added\");\r\n    }\r\n}   \r\n\r\nconst fullThePage = (category) => {\r\n    \r\n    var main = document.querySelector(\"main\");\r\n   \r\n    alert(\"true\")\r\n    \r\n}\r\n\r\nmodule.exports = {addToBasket,fullThePage}\r\n\n\n//# sourceURL=webpack://web-shop/./src/storage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;