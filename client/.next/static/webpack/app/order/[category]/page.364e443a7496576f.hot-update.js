"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/order/[category]/page",{

/***/ "(app-pages-browser)/./app/order/[category]/page.js":
/*!**************************************!*\
  !*** ./app/order/[category]/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetCategory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/slider */ \"(app-pages-browser)/./components/ui/slider.jsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst visible = {\n    opacity: 1,\n    y: 0,\n    transition: {\n        duration: 0.5\n    }\n};\nconst itemVariants = {\n    hidden: {\n        opacity: 0,\n        y: 10\n    },\n    visible\n};\nfunction GetCategory() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col justify-between\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.article, {\n            initial: \"hidden\",\n            animate: \"visible\",\n            exit: {\n                opacity: 0,\n                transition: {\n                    duration: 1\n                }\n            },\n            variants: {\n                visible: {\n                    transition: {\n                        staggerChildren: 0.3\n                    }\n                }\n            },\n            className: \"flex flex-col m-40 justify-center items-center text-4xl gap-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {\n                    variants: {\n                        hidden: {\n                            opacity: 0,\n                            y: -20\n                        },\n                        visible\n                    },\n                    children: \"Category\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                    children: \"coffee\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                    name: \"coffee\",\n                    defaultValue: [\n                        33\n                    ],\n                    max: 100,\n                    step: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                    name: \"milk\",\n                    defaultValue: [\n                        33\n                    ],\n                    max: 100,\n                    step: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                    name: \"cup\",\n                    defaultValue: [\n                        33\n                    ],\n                    max: 100,\n                    step: 1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\dev\\\\next projects\\\\caffeineLoaded\\\\client\\\\app\\\\order\\\\[category]\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = GetCategory;\nvar _c;\n$RefreshReg$(_c, \"GetCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9vcmRlci9bY2F0ZWdvcnldL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFdUM7QUFDVjtBQUVrQjtBQUNEO0FBRTlDLE1BQU1JLFVBQVU7SUFBRUMsU0FBUztJQUFHQyxHQUFHO0lBQUdDLFlBQVk7UUFBRUMsVUFBVTtJQUFJO0FBQUU7QUFFbEUsTUFBTUMsZUFBZTtJQUNuQkMsUUFBUTtRQUFFTCxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkY7QUFDRjtBQUVlLFNBQVNPO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNmLDRFQUFDYixpREFBTUEsQ0FBQ2MsT0FBTztZQUNiQyxTQUFRO1lBQ1JDLFNBQVE7WUFDUkMsTUFBTTtnQkFBRVosU0FBUztnQkFBR0UsWUFBWTtvQkFBRUMsVUFBVTtnQkFBRTtZQUFFO1lBQ2hEVSxVQUFVO2dCQUFFZCxTQUFTO29CQUFFRyxZQUFZO3dCQUFFWSxpQkFBaUI7b0JBQUk7Z0JBQUU7WUFBRTtZQUM5RE4sV0FBVTs7OEJBRVYsOERBQUNiLGlEQUFNQSxDQUFDb0IsRUFBRTtvQkFDUkYsVUFBVTt3QkFDUlIsUUFBUTs0QkFBRUwsU0FBUzs0QkFBR0MsR0FBRyxDQUFDO3dCQUFHO3dCQUM3QkY7b0JBQ0Y7OEJBU0Q7Ozs7Ozs4QkFHRCw4REFBQ0QsdURBQUtBOzhCQUFDOzs7Ozs7OEJBQ1AsOERBQUNELHlEQUFNQTtvQkFBQ21CLE1BQUs7b0JBQVNDLGNBQWM7d0JBQUM7cUJBQUc7b0JBQUVDLEtBQUs7b0JBQUtDLE1BQU07Ozs7Ozs4QkFDMUQsOERBQUN0Qix5REFBTUE7b0JBQUNtQixNQUFLO29CQUFPQyxjQUFjO3dCQUFDO3FCQUFHO29CQUFFQyxLQUFLO29CQUFLQyxNQUFNOzs7Ozs7OEJBQ3hELDhEQUFDdEIseURBQU1BO29CQUFDbUIsTUFBSztvQkFBTUMsY0FBYzt3QkFBQztxQkFBRztvQkFBRUMsS0FBSztvQkFBS0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0Q7S0FqQ3dCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvb3JkZXIvW2NhdGVnb3J5XS9wYWdlLmpzPzU5NTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NsaWRlclwiXHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xyXG5cclxuY29uc3QgdmlzaWJsZSA9IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41IH0gfTtcclxuXHJcbmNvbnN0IGl0ZW1WYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMTAgfSxcclxuICB2aXNpYmxlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRDYXRlZ29yeSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgIDxtb3Rpb24uYXJ0aWNsZVxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEgfSB9fVxyXG4gICAgICB2YXJpYW50cz17eyB2aXNpYmxlOiB7IHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjMgfSB9IH19XHJcbiAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtLTQwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTR4bCBnYXAtMTAnXHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uaDFcclxuICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IC0yMCB9LFxyXG4gICAgICAgICAgdmlzaWJsZVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgLy8gc3R5bGU9e1xyXG4gICAgICAgIC8vICAge1xyXG4gICAgICAgIC8vICAgICBcIi0tYmFzZS13aWR0aFwiOiBcIjI0dndcIixcclxuICAgICAgICAvLyAgICAgdG9wOiBcIi0xOHZ3XCIsXHJcbiAgICAgICAgLy8gICAgIGxldHRlclNwYWNpbmc6IFwiLTEuNHZ3XCIsXHJcbiAgICAgICAgLy8gICAgIHg6IFwiLTUwJVwiXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICA+XHJcbiAgICAgICAgQ2F0ZWdvcnlcclxuICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICAgIDxMYWJlbD5jb2ZmZWU8L0xhYmVsPlxyXG4gICAgICA8U2xpZGVyIG5hbWU9J2NvZmZlZScgZGVmYXVsdFZhbHVlPXtbMzNdfSBtYXg9ezEwMH0gc3RlcD17MX0gLz5cclxuICAgICAgPFNsaWRlciBuYW1lPSdtaWxrJyBkZWZhdWx0VmFsdWU9e1szM119IG1heD17MTAwfSBzdGVwPXsxfSAvPlxyXG4gICAgICA8U2xpZGVyIG5hbWU9J2N1cCcgZGVmYXVsdFZhbHVlPXtbMzNdfSBtYXg9ezEwMH0gc3RlcD17MX0gLz5cclxuICAgIDwvbW90aW9uLmFydGljbGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJMaW5rIiwiU2xpZGVyIiwiTGFiZWwiLCJ2aXNpYmxlIiwib3BhY2l0eSIsInkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpdGVtVmFyaWFudHMiLCJoaWRkZW4iLCJHZXRDYXRlZ29yeSIsImRpdiIsImNsYXNzTmFtZSIsImFydGljbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJ2YXJpYW50cyIsInN0YWdnZXJDaGlsZHJlbiIsImgxIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsIm1heCIsInN0ZXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/order/[category]/page.js\n"));

/***/ })

});