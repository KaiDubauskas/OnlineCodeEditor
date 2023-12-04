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

/***/ "(app-pages-browser)/./src/app/components/settings.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/settings.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resources_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/contexts */ \"(app-pages-browser)/./src/app/resources/contexts.tsx\");\n/* harmony import */ var _styles_settings_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/settings.css */ \"(app-pages-browser)/./src/app/styles/settings.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Settings = (param)=>{\n    let { isOpen } = param;\n    _s();\n    const { value: isMinimal, setValue: setIsMinimal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_resources_contexts__WEBPACK_IMPORTED_MODULE_2__.MinimalContext);\n    const { value: theme, setValue: setTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_resources_contexts__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);\n    const handleToggleMinimal = ()=>{\n        setIsMinimal(!isMinimal);\n    };\n    const handleThemeChange = (e)=>{\n        setTheme(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"settings-container \".concat(isOpen ? \"display\" : \"hide\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"settings-modal\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Settings\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"settings-modal-inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"submit-button\",\n                            onClick: handleToggleMinimal,\n                            children: \"ToggleMinimal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"theme-select\",\n                                    children: \"Choose a theme:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"theme-dropdown\",\n                                    id: \"theme-select\",\n                                    value: theme,\n                                    onChange: handleThemeChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"nord\",\n                                            children: \"Nord\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"vscode\",\n                                            children: \"VSCode\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"tokyoNightStorm\",\n                                            children: \"Tokyo Night Storm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"sublime\",\n                                            children: \"Sublime\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"quietlight\",\n                                            children: \"Quietlight\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Settings, \"1C0SfIQNBRJfHm8P1Yz8n3vP0dM=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0Q7QUFDTTtBQUNyQztBQU1oQyxNQUFNSSxXQUFvQztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDakQsTUFBTSxFQUFFQyxPQUFPQyxTQUFTLEVBQUVDLFVBQVVDLFlBQVksRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0MsK0RBQWNBO0lBQzlFLE1BQU0sRUFBRUksT0FBT0ksS0FBSyxFQUFFRixVQUFVRyxRQUFRLEVBQUUsR0FBR1YsaURBQVVBLENBQUNFLDZEQUFZQTtJQUVwRSxNQUFNUyxzQkFBc0I7UUFDeEJILGFBQWEsQ0FBQ0Y7SUFDbEI7SUFFQSxNQUFNTSxvQkFBb0IsQ0FBQ0M7UUFDdkJILFNBQVNHLEVBQUVDLE1BQU0sQ0FBQ1QsS0FBSztJQUMzQjtJQUVBLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFXLHNCQUFrRCxPQUE1QlosU0FBVSxZQUFZO2tCQUN4RCw0RUFBQ1c7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQU9GLFdBQVU7NEJBQWdCRyxTQUFTUjtzQ0FBcUI7Ozs7OztzQ0FDaEUsOERBQUNJOzs4Q0FDRyw4REFBQ0s7b0NBQU1DLFNBQVE7OENBQWU7Ozs7Ozs4Q0FDOUIsOERBQUNDO29DQUFPTixXQUFVO29DQUFpQk8sSUFBRztvQ0FBZWxCLE9BQU9JO29DQUFPZSxVQUFVWjs7c0RBQ3pFLDhEQUFDYTs0Q0FBT3BCLE9BQU07c0RBQU87Ozs7OztzREFDckIsOERBQUNvQjs0Q0FBT3BCLE9BQU07c0RBQVM7Ozs7OztzREFDdkIsOERBQUNvQjs0Q0FBT3BCLE9BQU07c0RBQWtCOzs7Ozs7c0RBQ2hDLDhEQUFDb0I7NENBQU9wQixPQUFNO3NEQUFVOzs7Ozs7c0RBQ3hCLDhEQUFDb0I7NENBQU9wQixPQUFNO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RDtHQWhDTUY7S0FBQUE7QUFrQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzLnRzeD85OWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNaW5pbWFsQ29udGV4dCwgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uL3Jlc291cmNlcy9jb250ZXh0c1wiO1xuaW1wb3J0ICcuLi9zdHlsZXMvc2V0dGluZ3MuY3NzJztcblxuaW50ZXJmYWNlIFNldHRpbmdzUHJvcHMge1xuICAgIGlzT3BlbjogYm9vbGVhblxufVxuXG5jb25zdCBTZXR0aW5nczogUmVhY3QuRkM8U2V0dGluZ3NQcm9wcz4gPSAoeyBpc09wZW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWU6IGlzTWluaW1hbCwgc2V0VmFsdWU6IHNldElzTWluaW1hbCB9ID0gdXNlQ29udGV4dChNaW5pbWFsQ29udGV4dCk7XG4gICAgY29uc3QgeyB2YWx1ZTogdGhlbWUsIHNldFZhbHVlOiBzZXRUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlTWluaW1hbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNNaW5pbWFsKCFpc01pbmltYWwpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVGhlbWVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFRoZW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzZXR0aW5ncy1jb250YWluZXIgJHtpc09wZW4gPyBgZGlzcGxheWAgOiBgaGlkZWB9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGgxPlNldHRpbmdzPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLW1vZGFsLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZU1pbmltYWx9PlRvZ2dsZU1pbmltYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGhlbWUtc2VsZWN0XCI+Q2hvb3NlIGEgdGhlbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidGhlbWUtZHJvcGRvd25cIiBpZD1cInRoZW1lLXNlbGVjdFwiIHZhbHVlPXt0aGVtZX0gb25DaGFuZ2U9e2hhbmRsZVRoZW1lQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9yZFwiPk5vcmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidnNjb2RlXCI+VlNDb2RlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRva3lvTmlnaHRTdG9ybVwiPlRva3lvIE5pZ2h0IFN0b3JtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN1YmxpbWVcIj5TdWJsaW1lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInF1aWV0bGlnaHRcIj5RdWlldGxpZ2h0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJNaW5pbWFsQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIlNldHRpbmdzIiwiaXNPcGVuIiwidmFsdWUiLCJpc01pbmltYWwiLCJzZXRWYWx1ZSIsInNldElzTWluaW1hbCIsInRoZW1lIiwic2V0VGhlbWUiLCJoYW5kbGVUb2dnbGVNaW5pbWFsIiwiaGFuZGxlVGhlbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/settings.tsx\n"));

/***/ })

});