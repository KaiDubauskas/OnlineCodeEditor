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

/***/ "(app-pages-browser)/./src/app/components/resizable.tsx":
/*!******************************************!*\
  !*** ./src/app/components/resizable.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_resizable_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/resizable.css */ \"(app-pages-browser)/./src/app/styles/resizable.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst Resizable = (param)=>{\n    let { leftPanel, rightPanel } = param;\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [mouseDown, setMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [startX, setStartX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [startWidth, setStartWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setStartWidth(window.innerWidth * (width / 100));\n    }, []);\n    const handleMouseDown = (e)=>{\n        setStartX(e.clientX);\n        setStartWidth(window.innerWidth * (width / 100));\n        setMouseDown(true);\n        e.preventDefault();\n    };\n    const handleMouseMove = (e)=>{\n        if (mouseDown) {\n            const deltaX = e.clientX - startX;\n            const newWidth = startWidth + deltaX;\n            setWidth(newWidth / window.innerWidth * 100);\n        }\n    };\n    const handleMouseUp = ()=>{\n        setMouseDown(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"resizable-container\",\n        onMouseMove: mouseDown ? handleMouseMove : undefined,\n        onMouseUp: handleMouseUp,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"editor-container\",\n                style: {\n                    width: \"\".concat(width, \"%\")\n                },\n                children: leftPanel\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"resize\",\n                onMouseDown: handleMouseDown\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"output-container\",\n                children: rightPanel\n            }, void 0, false, {\n                fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kaidubauskas/Desktop/CSProjects/OnlinePythonEditor/src/app/components/resizable.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Resizable, \"SJmdSNsws3c362to5pFZr3VYR/8=\");\n_c = Resizable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resizable);\nvar _c;\n$RefreshReg$(_c, \"Resizable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXNpemFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0U7QUFDdEM7QUFPaEMsTUFBTUcsWUFBc0M7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRTs7SUFDbEUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUNwRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFTO0lBRXJEQyxnREFBU0EsQ0FBQztRQUNOVyxjQUFjQyxPQUFPQyxVQUFVLEdBQUlULENBQUFBLFFBQVEsR0FBRTtJQUNqRCxHQUFHLEVBQUU7SUFHTCxNQUFNVSxrQkFBa0IsQ0FBQ0M7UUFDckJOLFVBQVVNLEVBQUVDLE9BQU87UUFDbkJMLGNBQWNDLE9BQU9DLFVBQVUsR0FBSVQsQ0FBQUEsUUFBUSxHQUFFO1FBQzdDRyxhQUFhO1FBQ2JRLEVBQUVFLGNBQWM7SUFDcEI7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0g7UUFDckIsSUFBSVQsV0FBVztZQUNYLE1BQU1hLFNBQVNKLEVBQUVDLE9BQU8sR0FBR1I7WUFDM0IsTUFBTVksV0FBV1YsYUFBYVM7WUFDOUJkLFNBQVMsV0FBWU8sT0FBT0MsVUFBVSxHQUFJO1FBQzlDO0lBQ0o7SUFFQSxNQUFNUSxnQkFBZ0I7UUFDbEJkLGFBQWE7SUFDakI7SUFFQSxxQkFFSSw4REFBQ2U7UUFBSUMsV0FBVTtRQUNYQyxhQUFhbEIsWUFBWVksa0JBQWtCTztRQUMzQ0MsV0FBV0w7OzBCQUVYLDhEQUFDQztnQkFBSUMsV0FBVTtnQkFBbUJJLE9BQU87b0JBQUV2QixPQUFPLEdBQVMsT0FBTkEsT0FBTTtnQkFBRzswQkFDekRGOzs7Ozs7MEJBRUwsOERBQUNvQjtnQkFBSUMsV0FBVTtnQkFBU0ssYUFBYWQ7Ozs7OzswQkFFckMsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUNWcEI7Ozs7Ozs7Ozs7OztBQUtqQjtHQS9DTUY7S0FBQUE7QUFpRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc2l6YWJsZS50c3g/MGU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc2l6YWJsZS5jc3MnXG5cbmludGVyZmFjZSBSZXNpemFibGVQcm9wcyB7XG4gICAgbGVmdFBhbmVsOiBSZWFjdE5vZGU7XG4gICAgcmlnaHRQYW5lbDogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBSZXNpemFibGU6IFJlYWN0LkZDPFJlc2l6YWJsZVByb3BzPiA9ICh7IGxlZnRQYW5lbCwgcmlnaHRQYW5lbCB9KSA9PiB7XG4gICAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICAgIGNvbnN0IFttb3VzZURvd24sIHNldE1vdXNlRG93bl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3N0YXJ0WCwgc2V0U3RhcnRYXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gICAgY29uc3QgW3N0YXJ0V2lkdGgsIHNldFN0YXJ0V2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0YXJ0V2lkdGgod2luZG93LmlubmVyV2lkdGggKiAod2lkdGggLyAxMDApKTtcbiAgICB9LCBbXSlcblxuXG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIHNldFN0YXJ0WChlLmNsaWVudFgpO1xuICAgICAgICBzZXRTdGFydFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoICogKHdpZHRoIC8gMTAwKSk7XG4gICAgICAgIHNldE1vdXNlRG93bih0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gZS5jbGllbnRYIC0gc3RhcnRYO1xuICAgICAgICAgICAgY29uc3QgbmV3V2lkdGggPSBzdGFydFdpZHRoICsgZGVsdGFYO1xuICAgICAgICAgICAgc2V0V2lkdGgoKG5ld1dpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogMTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgICAgICBzZXRNb3VzZURvd24oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzaXphYmxlLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17bW91c2VEb3duID8gaGFuZGxlTW91c2VNb3ZlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXtoYW5kbGVNb3VzZVVwfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1jb250YWluZXJcIiBzdHlsZT17eyB3aWR0aDogYCR7d2lkdGh9JWAgfX0+XG4gICAgICAgICAgICAgICAge2xlZnRQYW5lbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNpemVcIiBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7cmlnaHRQYW5lbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzaXphYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZXNpemFibGUiLCJsZWZ0UGFuZWwiLCJyaWdodFBhbmVsIiwid2lkdGgiLCJzZXRXaWR0aCIsIm1vdXNlRG93biIsInNldE1vdXNlRG93biIsInN0YXJ0WCIsInNldFN0YXJ0WCIsInN0YXJ0V2lkdGgiLCJzZXRTdGFydFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZU1vdXNlRG93biIsImUiLCJjbGllbnRYIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVNb3VzZU1vdmUiLCJkZWx0YVgiLCJuZXdXaWR0aCIsImhhbmRsZU1vdXNlVXAiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlTW92ZSIsInVuZGVmaW5lZCIsIm9uTW91c2VVcCIsInN0eWxlIiwib25Nb3VzZURvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/resizable.tsx\n"));

/***/ })

});