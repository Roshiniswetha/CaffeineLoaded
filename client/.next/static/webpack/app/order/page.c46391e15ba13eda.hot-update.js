"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/order/page",{

/***/ "(app-pages-browser)/./app/order/[category]/page.js":
/*!**************************************!*\
  !*** ./app/order/[category]/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/slider */ \"(app-pages-browser)/./components/ui/slider.jsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst visible = {\n    opacity: 1,\n    y: 0,\n    transition: {\n        duration: 0.5\n    }\n};\nconst itemVariants = {\n    hidden: {\n        opacity: 0,\n        y: 10\n    },\n    visible\n};\nfunction GetCategory() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col justify-between\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.article, {\n            initial: \"hidden\",\n            animate: \"visible\",\n            exit: {\n                opacity: 0,\n                transition: {\n                    duration: 1\n                }\n            },\n            variants: {\n                visible: {\n                    transition: {\n                        staggerChildren: 0.3\n                    }\n                }\n            },\n            className: \"flex flex-col m-40 justify-center items-center text-4xl gap-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {\n                    variants: {\n                        hidden: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        visible\n                    },\n                    children: \"Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                    children: [\n                        \"coffee\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                            name: \"coffee\",\n                            defaultValue: [\n                                33\n                            ],\n                            max: 100,\n                            step: 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                    name: \"milk\",\n                    defaultValue: [\n                        33\n                    ],\n                    max: 100,\n                    step: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                    name: \"cup\",\n                    defaultValue: [\n                        33\n                    ],\n                    max: 100,\n                    step: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = GetCategory;\nvar _c;\n$RefreshReg$(_c, \"GetCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9vcmRlci9bY2F0ZWdvcnldL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFdUM7QUFDVjtBQUVrQjtBQUNEO0FBRTlDLE1BQU1JLFVBQVU7SUFBRUMsU0FBUztJQUFHQyxHQUFHO0lBQUdDLFlBQVk7UUFBRUMsVUFBVTtJQUFJO0FBQUU7QUFFbEUsTUFBTUMsZUFBZTtJQUNuQkMsUUFBUTtRQUFFTCxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkY7QUFDRjtBQUVlLFNBQVNPO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNmLDRFQUFDYixpREFBTUEsQ0FBQ2MsT0FBTztZQUNiQyxTQUFRO1lBQ1JDLFNBQVE7WUFDUkMsTUFBTTtnQkFBRVosU0FBUztnQkFBR0UsWUFBWTtvQkFBRUMsVUFBVTtnQkFBRTtZQUFFO1lBQ2hEVSxVQUFVO2dCQUFFZCxTQUFTO29CQUFFRyxZQUFZO3dCQUFFWSxpQkFBaUI7b0JBQUk7Z0JBQUU7WUFBRTtZQUM5RE4sV0FBVTs7OEJBRVYsOERBQUNiLGlEQUFNQSxDQUFDb0IsRUFBRTtvQkFDUkYsVUFBVTt3QkFDUlIsUUFBUTs0QkFBRUwsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO3dCQUM3QkY7b0JBQ0Y7OEJBU0Q7Ozs7Ozs4QkFHRCw4REFBQ0QsdURBQUtBOzt3QkFBQztzQ0FDSCw4REFBQ0QseURBQU1BOzRCQUFDbUIsTUFBSzs0QkFBU0MsY0FBYztnQ0FBQzs2QkFBRzs0QkFBRUMsS0FBSzs0QkFBS0MsTUFBTTs7Ozs7Ozs7Ozs7OzhCQUU5RCw4REFBQ3RCLHlEQUFNQTtvQkFBQ21CLE1BQUs7b0JBQU9DLGNBQWM7d0JBQUM7cUJBQUc7b0JBQUVDLEtBQUs7b0JBQUtDLE1BQU07Ozs7Ozs4QkFDeEQsOERBQUN0Qix5REFBTUE7b0JBQUNtQixNQUFLO29CQUFNQyxjQUFjO3dCQUFDO3FCQUFHO29CQUFFQyxLQUFLO29CQUFLQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RDtLQWxDd0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9vcmRlci9bY2F0ZWdvcnldL3BhZ2UuanM/NTk1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2xpZGVyXCJcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XHJcblxyXG5jb25zdCB2aXNpYmxlID0geyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUgfSB9O1xyXG5cclxuY29uc3QgaXRlbVZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAxMCB9LFxyXG4gIHZpc2libGVcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldENhdGVnb3J5KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgPG1vdGlvbi5hcnRpY2xlXHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICBhbmltYXRlPVwidmlzaWJsZVwiXHJcbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSB9IH19XHJcbiAgICAgIHZhcmlhbnRzPXt7IHZpc2libGU6IHsgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMyB9IH0gfX1cclxuICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG0tNDAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNHhsIGdhcC0xMCdcclxuICAgID5cclxuICAgICAgPG1vdGlvbi5oMVxyXG4gICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogLTIwIH0sXHJcbiAgICAgICAgICB2aXNpYmxlXHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBzdHlsZT17XHJcbiAgICAgICAgLy8gICB7XHJcbiAgICAgICAgLy8gICAgIFwiLS1iYXNlLXdpZHRoXCI6IFwiMjR2d1wiLFxyXG4gICAgICAgIC8vICAgICB0b3A6IFwiLTE4dndcIixcclxuICAgICAgICAvLyAgICAgbGV0dGVyU3BhY2luZzogXCItMS40dndcIixcclxuICAgICAgICAvLyAgICAgeDogXCItNTAlXCJcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgID5cclxuICAgICAgICBDYXRlZ29yeVxyXG4gICAgICA8L21vdGlvbi5oMT5cclxuICAgICAgPExhYmVsPmNvZmZlZVxyXG4gICAgICAgICAgPFNsaWRlciBuYW1lPSdjb2ZmZWUnIGRlZmF1bHRWYWx1ZT17WzMzXX0gbWF4PXsxMDB9IHN0ZXA9ezF9IC8+XHJcbiAgICAgIDwvTGFiZWw+XHJcbiAgICAgIDxTbGlkZXIgbmFtZT0nbWlsaycgZGVmYXVsdFZhbHVlPXtbMzNdfSBtYXg9ezEwMH0gc3RlcD17MX0gLz5cclxuICAgICAgPFNsaWRlciBuYW1lPSdjdXAnIGRlZmF1bHRWYWx1ZT17WzMzXX0gbWF4PXsxMDB9IHN0ZXA9ezF9IC8+XHJcbiAgICA8L21vdGlvbi5hcnRpY2xlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiTGluayIsIlNsaWRlciIsIkxhYmVsIiwidmlzaWJsZSIsIm9wYWNpdHkiLCJ5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaXRlbVZhcmlhbnRzIiwiaGlkZGVuIiwiR2V0Q2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwidmFyaWFudHMiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJoMSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJtYXgiLCJzdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/order/[category]/page.js\n"));

/***/ })

});