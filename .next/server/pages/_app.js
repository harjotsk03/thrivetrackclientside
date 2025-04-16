/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Toast.js":
/*!*****************************!*\
  !*** ./components/Toast.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Toast)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_alertContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/alertContext */ \"./context/alertContext.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Toast() {\n    const { alert, message } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_alertContext__WEBPACK_IMPORTED_MODULE_2__.AlertContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        children: alert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \"fixed bottom-4 right-4 bg-mainBlue text-white px-4 py-3 rounded-lg shadow-lg z-50\",\n            initial: {\n                y: 100,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            exit: {\n                y: 100,\n                opacity: 0\n            },\n            transition: {\n                duration: 0.5,\n                type: \"spring\",\n                stiffness: 120\n            },\n            children: message\n        }, void 0, false, {\n            fileName: \"/Users/harjotsingh/Desktop/repos/thrivetrackclientside/components/Toast.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/harjotsingh/Desktop/repos/thrivetrackclientside/components/Toast.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvYXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2E7QUFDQztBQUV6QyxTQUFTSztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFLEdBQUdOLGlEQUFVQSxDQUFDQywrREFBWUE7SUFFbEQscUJBQ0UsOERBQUNFLDBEQUFlQTtrQkFDYkUsdUJBQ0MsOERBQUNILGlEQUFNQSxDQUFDSyxHQUFHO1lBQ1RDLFdBQVU7WUFDVkMsU0FBUztnQkFBRUMsR0FBRztnQkFBS0MsU0FBUztZQUFFO1lBQzlCQyxTQUFTO2dCQUFFRixHQUFHO2dCQUFHQyxTQUFTO1lBQUU7WUFDNUJFLE1BQU07Z0JBQUVILEdBQUc7Z0JBQUtDLFNBQVM7WUFBRTtZQUMzQkcsWUFBWTtnQkFBRUMsVUFBVTtnQkFBS0MsTUFBTTtnQkFBVUMsV0FBVztZQUFJO3NCQUUzRFg7Ozs7Ozs7Ozs7O0FBS1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJpdmV0cmFjay8uL2NvbXBvbmVudHMvVG9hc3QuanM/MTA3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnRDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYWxlcnRDb250ZXh0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvYXN0KCkge1xuICBjb25zdCB7IGFsZXJ0LCBtZXNzYWdlIH0gPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAge2FsZXJ0ICYmIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IGJnLW1haW5CbHVlIHRleHQtd2hpdGUgcHgtNCBweS0zIHJvdW5kZWQtbGcgc2hhZG93LWxnIHotNTBcIlxuICAgICAgICAgIGluaXRpYWw9e3sgeTogMTAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgZXhpdD17eyB5OiAxMDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogMTIwIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJUb2FzdCIsImFsZXJ0IiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHlwZSIsInN0aWZmbmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Toast.js\n");

/***/ }),

/***/ "./context/alertContext.js":
/*!*********************************!*\
  !*** ./context/alertContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlertContext: () => (/* binding */ AlertContext),\n/* harmony export */   AlertProvider: () => (/* binding */ AlertProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AlertContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AlertProvider = ({ children })=>{\n    const [alert, setAlert] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const showAlert = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((msg)=>{\n        setMessage(msg);\n        setAlert(true);\n        setTimeout(()=>{\n            setMessage(\"\");\n            setAlert(false);\n        }, 3000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AlertContext.Provider, {\n        value: {\n            alert,\n            message,\n            showAlert\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/harjotsingh/Desktop/repos/thrivetrackclientside/context/alertContext.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2FsZXJ0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZEO0FBRXRELE1BQU1HLDZCQUFlSCxvREFBYUEsR0FBRztBQUVyQyxNQUFNSSxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDeEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxZQUFZUixrREFBV0EsQ0FBQyxDQUFDUztRQUM3QkYsV0FBV0U7UUFDWEosU0FBUztRQUVUSyxXQUFXO1lBQ1RILFdBQVc7WUFDWEYsU0FBUztRQUNYLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0osYUFBYVUsUUFBUTtRQUFDQyxPQUFPO1lBQUVSO1lBQU9FO1lBQVNFO1FBQVU7a0JBQ3ZETDs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rocml2ZXRyYWNrLy4vY29udGV4dC9hbGVydENvbnRleHQuanM/NDExZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzaG93QWxlcnQgPSB1c2VDYWxsYmFjaygobXNnKSA9PiB7XG4gICAgc2V0TWVzc2FnZShtc2cpO1xuICAgIHNldEFsZXJ0KHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgICAgc2V0QWxlcnQoZmFsc2UpO1xuICAgIH0sIDMwMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFsZXJ0LCBtZXNzYWdlLCBzaG93QWxlcnQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbGVydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiQWxlcnRDb250ZXh0IiwiQWxlcnRQcm92aWRlciIsImNoaWxkcmVuIiwiYWxlcnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2hvd0FsZXJ0IiwibXNnIiwic2V0VGltZW91dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/alertContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_alertContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/alertContext */ \"./context/alertContext.js\");\n/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toast */ \"./components/Toast.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Toast__WEBPACK_IMPORTED_MODULE_3__]);\n_components_Toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_alertContext__WEBPACK_IMPORTED_MODULE_2__.AlertProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/harjotsingh/Desktop/repos/thrivetrackclientside/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/harjotsingh/Desktop/repos/thrivetrackclientside/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harjotsingh/Desktop/repos/thrivetrackclientside/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3lCO0FBQ2hCO0FBRXhDLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNKLGdFQUFhQTs7MEJBQ1osOERBQUNDLHlEQUFLQTs7Ozs7MEJBQ04sOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyaXZldHJhY2svLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBbGVydFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvYWxlcnRDb250ZXh0XCI7XG5pbXBvcnQgVG9hc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9hc3RcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0UHJvdmlkZXI+XG4gICAgICA8VG9hc3QgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FsZXJ0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFsZXJ0UHJvdmlkZXIiLCJUb2FzdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();