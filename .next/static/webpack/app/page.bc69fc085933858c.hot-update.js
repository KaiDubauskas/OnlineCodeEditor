"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/console.tsx":
/*!****************************************!*\
  !*** ./src/app/components/console.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _styles_console_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/console.css */ \"(app-pages-browser)/./src/app/styles/console.css\");\n/* harmony import */ var _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/codemirror-theme-nord */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-nord/esm/index.js\");\n\n\n\n\n\nconst Console = (param)=>{\n    let { output } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"console-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"console\",\n            value: output,\n            height: \"100%\",\n            width: \"100%\",\n            theme: _uiw_codemirror_theme_nord__WEBPACK_IMPORTED_MODULE_4__.nord,\n            basicSetup: {\n                lineNumbers: false\n            },\n            extensions: [\n                _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__.EditorView.lineWrapping\n            ],\n            readOnly: true,\n            editable: false\n        }, void 0, false, {\n            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/console.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/console.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Console;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Console);\nvar _c;\n$RefreshReg$(_c, \"Console\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb25zb2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNzQjtBQUNoQztBQUNtQjtBQU1sRCxNQUFNSSxVQUF3QztRQUFDLEVBQUVDLE1BQU0sRUFBRTtJQUVyRCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ04sNkRBQVVBO1lBQ1BNLFdBQVU7WUFDVkMsT0FBT0g7WUFDUEksUUFBTztZQUNQQyxPQUFNO1lBQ05DLE9BQU9SLDREQUFJQTtZQUNYUyxZQUFZO2dCQUNSQyxhQUFhO1lBRWpCO1lBQ0FDLFlBQVk7Z0JBQ1JaLDZEQUFVQSxDQUFDYSxZQUFZO2FBQzFCO1lBQ0RDLFVBQVU7WUFDVkMsVUFBVTs7Ozs7Ozs7Ozs7QUFJMUI7S0F0Qk1iO0FBd0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb25zb2xlLnRzeD9lNmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29kZU1pcnJvciwgeyBFZGl0b3JWaWV3IH0gZnJvbSAnQHVpdy9yZWFjdC1jb2RlbWlycm9yJztcbmltcG9ydCAnLi4vc3R5bGVzL2NvbnNvbGUuY3NzJztcbmltcG9ydCB7IG5vcmQgfSBmcm9tICdAdWl3L2NvZGVtaXJyb3ItdGhlbWUtbm9yZCc7XG5cblxuaW50ZXJmYWNlIENvbnNvbGVPdXRwdXRQcm9wcyB7XG4gICAgb3V0cHV0OiBzdHJpbmdcbn1cbmNvbnN0IENvbnNvbGU6IFJlYWN0LkZDPENvbnNvbGVPdXRwdXRQcm9wcz4gPSAoeyBvdXRwdXQgfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zb2xlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPENvZGVNaXJyb3JcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb25zb2xlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3V0cHV0fVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgdGhlbWU9e25vcmR9XG4gICAgICAgICAgICAgICAgYmFzaWNTZXR1cD17e1xuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyczogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgRWRpdG9yVmlldy5saW5lV3JhcHBpbmdcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIGVkaXRhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvZGVNaXJyb3IiLCJFZGl0b3JWaWV3Iiwibm9yZCIsIkNvbnNvbGUiLCJvdXRwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImhlaWdodCIsIndpZHRoIiwidGhlbWUiLCJiYXNpY1NldHVwIiwibGluZU51bWJlcnMiLCJleHRlbnNpb25zIiwibGluZVdyYXBwaW5nIiwicmVhZE9ubHkiLCJlZGl0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/console.tsx\n"));

/***/ })

});