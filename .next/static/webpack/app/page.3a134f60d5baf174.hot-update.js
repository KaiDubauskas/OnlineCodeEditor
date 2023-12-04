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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _resources_contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/contexts */ \"(app-pages-browser)/./src/app/resources/contexts.tsx\");\n/* harmony import */ var _styles_settings_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/settings.css */ \"(app-pages-browser)/./src/app/styles/settings.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Settings = (param)=>{\n    let { isOpen } = param;\n    _s();\n    const { value: isMinimal, setValue: setIsMinimal } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_resources_contexts__WEBPACK_IMPORTED_MODULE_2__.MinimalContext);\n    const { value: theme, setValue: setTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_resources_contexts__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);\n    const handleToggleMinimal = ()=>{\n        setIsMinimal(!isMinimal);\n    };\n    const handleThemeChange = (e)=>{\n        setTheme(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"settings-container \".concat(isOpen ? \"display\" : \"hide\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"settings-modal\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Settings\"\n                }, void 0, false, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"settings-modal-inner\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"submit-button\",\n                            onClick: handleToggleMinimal,\n                            children: \"ToggleMinimal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"theme-dropdown-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"theme-select\",\n                                    children: \"Choose a theme:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"theme-dropdown\",\n                                    id: \"theme-select\",\n                                    value: theme,\n                                    onChange: handleThemeChange,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"nord\",\n                                            children: \"Nord\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"vscode\",\n                                            children: \"VSCode\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"tokyoNightStorm\",\n                                            children: \"Tokyo Night Storm\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"sublime\",\n                                            children: \"Sublime\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"quietlight\",\n                                            children: \"Quietlight\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"language-dropdown-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"language-select\",\n                                    children: \"Choose a language: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    className: \"language-dropdown\",\n                                    id: \"language-select\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"nord\",\n                                        children: \"Python\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"settings-key-mappings\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Key Mappings\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"key-mapping\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Run Code\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Shift + Enter\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"key-mapping\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Settings\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Esc\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"key-mapping\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Toggle Minimal Mode\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"NaaN\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"key-mapping\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Clear Console\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"NaaN\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/settings.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Settings, \"1C0SfIQNBRJfHm8P1Yz8n3vP0dM=\");\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0Q7QUFDTTtBQUNyQztBQU1oQyxNQUFNSSxXQUFvQztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDakQsTUFBTSxFQUFFQyxPQUFPQyxTQUFTLEVBQUVDLFVBQVVDLFlBQVksRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0MsK0RBQWNBO0lBQzlFLE1BQU0sRUFBRUksT0FBT0ksS0FBSyxFQUFFRixVQUFVRyxRQUFRLEVBQUUsR0FBR1YsaURBQVVBLENBQUNFLDZEQUFZQTtJQUVwRSxNQUFNUyxzQkFBc0I7UUFDeEJILGFBQWEsQ0FBQ0Y7SUFDbEI7SUFFQSxNQUFNTSxvQkFBb0IsQ0FBQ0M7UUFDdkJILFNBQVNHLEVBQUVDLE1BQU0sQ0FBQ1QsS0FBSztJQUMzQjtJQUVBLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFXLHNCQUFrRCxPQUE1QlosU0FBVSxZQUFZO2tCQUN4RCw0RUFBQ1c7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQU9GLFdBQVU7NEJBQWdCRyxTQUFTUjtzQ0FBcUI7Ozs7OztzQ0FDaEUsOERBQUNJOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0k7b0NBQU1DLFNBQVE7OENBQWU7Ozs7Ozs4Q0FDOUIsOERBQUNDO29DQUFPTixXQUFVO29DQUFpQk8sSUFBRztvQ0FBZWxCLE9BQU9JO29DQUFPZSxVQUFVWjs7c0RBQ3pFLDhEQUFDYTs0Q0FBT3BCLE9BQU07c0RBQU87Ozs7OztzREFDckIsOERBQUNvQjs0Q0FBT3BCLE9BQU07c0RBQVM7Ozs7OztzREFDdkIsOERBQUNvQjs0Q0FBT3BCLE9BQU07c0RBQWtCOzs7Ozs7c0RBQ2hDLDhEQUFDb0I7NENBQU9wQixPQUFNO3NEQUFVOzs7Ozs7c0RBQ3hCLDhEQUFDb0I7NENBQU9wQixPQUFNO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR25DLDhEQUFDVTs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNJO29DQUFNQyxTQUFROzhDQUFrQjs7Ozs7OzhDQUNqQyw4REFBQ0M7b0NBQU9OLFdBQVU7b0NBQW9CTyxJQUFHOzhDQUNyQyw0RUFBQ0U7d0NBQU9wQixPQUFNO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHN0IsOERBQUNVOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ1U7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ1g7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDVztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7OzhDQUVSLDhEQUFDWjtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNXO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7Ozs7Ozs7OENBRVIsOERBQUNaO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ1c7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7Ozs7Ozs7Ozs4Q0FFUiw4REFBQ1o7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDVztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEM7R0F6RE14QjtLQUFBQTtBQTJETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MudHN4Pzk5Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1pbmltYWxDb250ZXh0LCBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2NvbnRleHRzXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9zZXR0aW5ncy5jc3MnO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3NQcm9wcyB7XG4gICAgaXNPcGVuOiBib29sZWFuXG59XG5cbmNvbnN0IFNldHRpbmdzOiBSZWFjdC5GQzxTZXR0aW5nc1Byb3BzPiA9ICh7IGlzT3BlbiB9KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZTogaXNNaW5pbWFsLCBzZXRWYWx1ZTogc2V0SXNNaW5pbWFsIH0gPSB1c2VDb250ZXh0KE1pbmltYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHZhbHVlOiB0aGVtZSwgc2V0VmFsdWU6IHNldFRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgICBjb25zdCBoYW5kbGVUb2dnbGVNaW5pbWFsID0gKCkgPT4ge1xuICAgICAgICBzZXRJc01pbmltYWwoIWlzTWluaW1hbClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVUaGVtZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNldHRpbmdzLWNvbnRhaW5lciAke2lzT3BlbiA/IGBkaXNwbGF5YCA6IGBoaWRlYH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aDE+U2V0dGluZ3M8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbW9kYWwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVG9nZ2xlTWluaW1hbH0+VG9nZ2xlTWluaW1hbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWRyb3Bkb3duLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aGVtZS1zZWxlY3RcIj5DaG9vc2UgYSB0aGVtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ0aGVtZS1kcm9wZG93blwiIGlkPVwidGhlbWUtc2VsZWN0XCIgdmFsdWU9e3RoZW1lfSBvbkNoYW5nZT17aGFuZGxlVGhlbWVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub3JkXCI+Tm9yZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2c2NvZGVcIj5WU0NvZGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9reW9OaWdodFN0b3JtXCI+VG9reW8gTmlnaHQgU3Rvcm08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3VibGltZVwiPlN1YmxpbWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVpZXRsaWdodFwiPlF1aWV0bGlnaHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZS1kcm9wZG93bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFuZ3VhZ2Utc2VsZWN0XCI+Q2hvb3NlIGEgbGFuZ3VhZ2U6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImxhbmd1YWdlLWRyb3Bkb3duXCIgaWQ9XCJsYW5ndWFnZS1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9yZFwiPlB5dGhvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWtleS1tYXBwaW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPktleSBNYXBwaW5nczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1tYXBwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJ1biBDb2RlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2hpZnQgKyBFbnRlcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5LW1hcHBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2V0dGluZ3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Fc2M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleS1tYXBwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRvZ2dsZSBNaW5pbWFsIE1vZGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5OYWFOPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXktbWFwcGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DbGVhciBDb25zb2xlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TmFhTjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJNaW5pbWFsQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIlNldHRpbmdzIiwiaXNPcGVuIiwidmFsdWUiLCJpc01pbmltYWwiLCJzZXRWYWx1ZSIsInNldElzTWluaW1hbCIsInRoZW1lIiwic2V0VGhlbWUiLCJoYW5kbGVUb2dnbGVNaW5pbWFsIiwiaGFuZGxlVGhlbWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImgyIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/settings.tsx\n"));

/***/ })

});