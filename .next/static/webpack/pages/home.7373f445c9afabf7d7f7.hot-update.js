/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/components/Todo/Todo.tsx":
/*!**************************************!*\
  !*** ./src/components/Todo/Todo.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ \"./node_modules/@material-ui/core/esm/Accordion/index.js\");\n/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ \"./node_modules/@material-ui/core/esm/AccordionSummary/index.js\");\n/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ \"./node_modules/@material-ui/core/esm/AccordionDetails/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/abdullah-khallouf/Desktop/todo/src/components/Todo/Todo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {\n  return {\n    root: {\n      marginTop: 10\n    },\n    leftSection: {\n      marginLeft: \"5vw\"\n    },\n    rightSection: {\n      marginLeft: \"15vw\"\n    },\n    input: {\n      border: 0\n    }\n  };\n});\n\nvar Todo = function Todo() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      editTitle = _useState[0],\n      setEditTitle = _useState[1];\n\n  var classes = useStyles();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {\n    className: classes.root,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__.default, {\n      expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 34\n      }, _this),\n      children: [\"title \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: classes.input,\n        value: \"todo title\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return setEditTitle(false);\n        },\n        children: \" edit \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {\n        children: \"todo description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Todo, \"DmcbmZrNdoaQcTpDobAguPispkw=\", false, function () {\n  return [useStyles];\n});\n\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kby9Ub2RvLnRzeD84NDdjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJsZWZ0U2VjdGlvbiIsIm1hcmdpbkxlZnQiLCJyaWdodFNlY3Rpb24iLCJpbnB1dCIsImJvcmRlciIsIlRvZG8iLCJ1c2VTdGF0ZSIsImVkaXRUaXRsZSIsInNldEVkaXRUaXRsZSIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3hDQyxRQUFJLEVBQUU7QUFDTEMsZUFBUyxFQUFFO0FBRE4sS0FEa0M7QUFJeENDLGVBQVcsRUFBRTtBQUNaQyxnQkFBVSxFQUFFO0FBREEsS0FKMkI7QUFPeENDLGdCQUFZLEVBQUU7QUFDYkQsZ0JBQVUsRUFBRTtBQURDLEtBUDBCO0FBVXhDRSxTQUFLLEVBQUU7QUFDTkMsWUFBTSxFQUFFO0FBREY7QUFWaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNnQkMsK0NBQVEsQ0FBVSxJQUFWLENBRHhCO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0FDLFlBREE7O0FBR2xCLE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxFQUF6QjtBQUVBLHNCQUNDLDhEQUFDLGdFQUFEO0FBQVcsYUFBUyxFQUFFYyxPQUFPLENBQUNYLElBQTlCO0FBQUEsNEJBQ0MsOERBQUMsdUVBQUQ7QUFBa0IsZ0JBQVUsZUFBRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlCO0FBQUEsd0NBQ087QUFBTyxpQkFBUyxFQUFFVyxPQUFPLENBQUNOLEtBQTFCO0FBQWlDLGFBQUssRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFAsZUFFQztBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNSyxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQyw4REFBQyx1RUFBRDtBQUFBLDZCQUNDLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0FoQkQ7O0dBQU1ILEk7VUFHV1YsUzs7O0tBSFhVLEk7QUFrQk4sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvL1RvZG8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0cm9vdDoge1xuXHRcdG1hcmdpblRvcDogMTAsXG5cdH0sXG5cdGxlZnRTZWN0aW9uOiB7XG5cdFx0bWFyZ2luTGVmdDogXCI1dndcIixcblx0fSxcblx0cmlnaHRTZWN0aW9uOiB7XG5cdFx0bWFyZ2luTGVmdDogXCIxNXZ3XCIsXG5cdH0sXG5cdGlucHV0OiB7XG5cdFx0Ym9yZGVyOiAwLFxuXHR9LFxufSkpO1xuXG5jb25zdCBUb2RvID0gKCkgPT4ge1xuXHRjb25zdCBbZWRpdFRpdGxlLCBzZXRFZGl0VGl0bGVdID0gdXNlU3RhdGU8Qm9vbGVhbj4odHJ1ZSk7XG5cblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG5cdHJldHVybiAoXG5cdFx0PEFjY29yZGlvbiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG5cdFx0XHQ8QWNjb3JkaW9uU3VtbWFyeSBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59PlxuXHRcdFx0XHR0aXRsZSA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fSB2YWx1ZT1cInRvZG8gdGl0bGVcIiAvPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRUaXRsZShmYWxzZSl9PiBlZGl0IDwvYnV0dG9uPlxuXHRcdFx0PC9BY2NvcmRpb25TdW1tYXJ5PlxuXHRcdFx0PEFjY29yZGlvbkRldGFpbHM+XG5cdFx0XHRcdDxUeXBvZ3JhcGh5PnRvZG8gZGVzY3JpcHRpb248L1R5cG9ncmFwaHk+XG5cdFx0XHQ8L0FjY29yZGlvbkRldGFpbHM+XG5cdFx0PC9BY2NvcmRpb24+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Todo/Todo.tsx\n");

/***/ })

});