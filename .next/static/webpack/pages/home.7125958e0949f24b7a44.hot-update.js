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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ \"./node_modules/@material-ui/core/esm/Accordion/index.js\");\n/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ \"./node_modules/@material-ui/core/esm/AccordionSummary/index.js\");\n/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ \"./node_modules/@material-ui/core/esm/AccordionDetails/index.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/abdullah-khallouf/Desktop/todo/src/components/Todo/Todo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {\n  return {\n    root: {\n      marginTop: 10\n    },\n    leftSection: {\n      marginLeft: \"5vw\"\n    },\n    rightSection: {\n      marginLeft: \"15vw\"\n    },\n    title: {\n      border: 0\n    },\n    description: {\n      width: \"100%\",\n      borderStyle: \"none\",\n      borderColor: \"Transparent\",\n      overflow: \"auto\"\n    }\n  };\n});\n\nvar Todo = function Todo() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"title\"),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editTitle = _useState2[0],\n      setEditTitle = _useState2[1];\n\n  var classes = useStyles();\n\n  var changeTitle = function changeTitle(eve) {\n    console.log(eve.target.value);\n    setTitle(eve.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {\n    className: classes.root,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__.default, {\n      expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 34\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        onChange: changeTitle,\n        placeholder: \"title\",\n        className: classes.title,\n        readOnly: !editTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return setEditTitle(true);\n        },\n        children: \" edit \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        className: classes.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Todo, \"lpI7WwX+S81QkejHNErphAo2nd8=\", false, function () {\n  return [useStyles];\n});\n\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kby9Ub2RvLnRzeD84NDdjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJsZWZ0U2VjdGlvbiIsIm1hcmdpbkxlZnQiLCJyaWdodFNlY3Rpb24iLCJ0aXRsZSIsImJvcmRlciIsImRlc2NyaXB0aW9uIiwid2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwib3ZlcmZsb3ciLCJUb2RvIiwidXNlU3RhdGUiLCJzZXRUaXRsZSIsImVkaXRUaXRsZSIsInNldEVkaXRUaXRsZSIsImNsYXNzZXMiLCJjaGFuZ2VUaXRsZSIsImV2ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDeENDLFFBQUksRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETixLQURrQztBQUl4Q0MsZUFBVyxFQUFFO0FBQ1pDLGdCQUFVLEVBQUU7QUFEQSxLQUoyQjtBQU94Q0MsZ0JBQVksRUFBRTtBQUNiRCxnQkFBVSxFQUFFO0FBREMsS0FQMEI7QUFVeENFLFNBQUssRUFBRTtBQUNOQyxZQUFNLEVBQUU7QUFERixLQVZpQztBQWF4Q0MsZUFBVyxFQUFFO0FBQ1pDLFdBQUssRUFBRSxNQURLO0FBRVpDLGlCQUFXLEVBQUUsTUFGRDtBQUdaQyxpQkFBVyxFQUFFLGFBSEQ7QUFJWkMsY0FBUSxFQUFFO0FBSkU7QUFiMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBcUJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBUyxPQUFULENBRGhCO0FBQUEsTUFDWFIsS0FEVztBQUFBLE1BQ0pTLFFBREk7O0FBQUEsbUJBR2dCRCwrQ0FBUSxDQUFVLEtBQVYsQ0FIeEI7QUFBQSxNQUdYRSxTQUhXO0FBQUEsTUFHQUMsWUFIQTs7QUFLbEIsTUFBTUMsT0FBTyxHQUFHcEIsU0FBUyxFQUF6Qjs7QUFDQSxNQUFNcUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQXZCO0FBQ0FULFlBQVEsQ0FBQ0ssR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQVosQ0FBUjtBQUNBLEdBSEQ7O0FBSUEsc0JBQ0MsOERBQUMsZ0VBQUQ7QUFBVyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ2pCLElBQTlCO0FBQUEsNEJBQ0MsOERBQUMsdUVBQUQ7QUFBa0IsZ0JBQVUsZUFBRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlCO0FBQUEsOEJBQ0M7QUFDQyxnQkFBUSxFQUFFa0IsV0FEWDtBQUVDLG1CQUFXLEVBQUMsT0FGYjtBQUdDLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ1osS0FIcEI7QUFJQyxnQkFBUSxFQUFFLENBQUNVO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBT0M7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBVUMsOERBQUMsdUVBQUQ7QUFBQSw2QkFFQztBQUFVLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ1Y7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWlCQSxDQTNCRDs7R0FBTUssSTtVQUtXZixTOzs7S0FMWGUsSTtBQTZCTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RvZG8vVG9kby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIjtcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuXHRyb290OiB7XG5cdFx0bWFyZ2luVG9wOiAxMCxcblx0fSxcblx0bGVmdFNlY3Rpb246IHtcblx0XHRtYXJnaW5MZWZ0OiBcIjV2d1wiLFxuXHR9LFxuXHRyaWdodFNlY3Rpb246IHtcblx0XHRtYXJnaW5MZWZ0OiBcIjE1dndcIixcblx0fSxcblx0dGl0bGU6IHtcblx0XHRib3JkZXI6IDAsXG5cdH0sXG5cdGRlc2NyaXB0aW9uOiB7XG5cdFx0d2lkdGg6IFwiMTAwJVwiLFxuXHRcdGJvcmRlclN0eWxlOiBcIm5vbmVcIixcblx0XHRib3JkZXJDb2xvcjogXCJUcmFuc3BhcmVudFwiLFxuXHRcdG92ZXJmbG93OiBcImF1dG9cIixcblx0fSxcbn0pKTtcblxuY29uc3QgVG9kbyA9ICgpID0+IHtcblx0Y29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxTdHJpbmc+KFwidGl0bGVcIik7XG5cblx0Y29uc3QgW2VkaXRUaXRsZSwgc2V0RWRpdFRpdGxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cdGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGV2ZS50YXJnZXQudmFsdWUpO1xuXHRcdHNldFRpdGxlKGV2ZS50YXJnZXQudmFsdWUpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxBY2NvcmRpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuXHRcdFx0PEFjY29yZGlvblN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2NoYW5nZVRpdGxlfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwidGl0bGVcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cblx0XHRcdFx0XHRyZWFkT25seT17IWVkaXRUaXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0VGl0bGUodHJ1ZSl9PiBlZGl0IDwvYnV0dG9uPlxuXHRcdFx0PC9BY2NvcmRpb25TdW1tYXJ5PlxuXHRcdFx0PEFjY29yZGlvbkRldGFpbHM+XG5cdFx0XHRcdHsvKiA8VHlwb2dyYXBoeT50b2RvIGRlc2NyaXB0aW9uPC9UeXBvZ3JhcGh5PiAqL31cblx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+PC90ZXh0YXJlYT5cblx0XHRcdDwvQWNjb3JkaW9uRGV0YWlscz5cblx0XHQ8L0FjY29yZGlvbj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Todo/Todo.tsx\n");

/***/ })

});