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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ \"./node_modules/@material-ui/core/esm/Accordion/index.js\");\n/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ \"./node_modules/@material-ui/core/esm/AccordionSummary/index.js\");\n/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ \"./node_modules/@material-ui/core/esm/AccordionDetails/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/abdullah-khallouf/Desktop/todo/src/components/Todo/Todo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Todo = function Todo() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"placeholder\"),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      editTitle = _useState2[0],\n      setEditTitle = _useState2[1];\n\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {\n    return {\n      root: {\n        marginTop: 10\n      },\n      leftSection: {\n        marginLeft: \"5vw\"\n      },\n      rightSection: {\n        marginLeft: \"15vw\"\n      },\n      input: {\n        border: editTitle ? 1 : 0\n      }\n    };\n  });\n  var classes = useStyles();\n\n  var changeTitle = function changeTitle(eve) {\n    console.log(eve.target.value);\n    setTitle(eve.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {\n    className: classes.root,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__.default, {\n      expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 34\n      }, _this),\n      children: [\"title\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        onChange: changeTitle,\n        placeholder: \"title\",\n        className: classes.input,\n        readOnly: editTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return setEditTitle(false);\n        },\n        children: \" edit \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {\n        children: \"todo description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Todo, \"dauEXEtn8CaV2MJOyE/TFEahEOs=\", true);\n\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kby9Ub2RvLnRzeD84NDdjIl0sIm5hbWVzIjpbIlRvZG8iLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJlZGl0VGl0bGUiLCJzZXRFZGl0VGl0bGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luVG9wIiwibGVmdFNlY3Rpb24iLCJtYXJnaW5MZWZ0IiwicmlnaHRTZWN0aW9uIiwiaW5wdXQiLCJib3JkZXIiLCJjbGFzc2VzIiwiY2hhbmdlVGl0bGUiLCJldmUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBUyxhQUFULENBRGhCO0FBQUEsTUFDWEMsS0FEVztBQUFBLE1BQ0pDLFFBREk7O0FBQUEsbUJBR2dCRiwrQ0FBUSxDQUFVLElBQVYsQ0FIeEI7QUFBQSxNQUdYRyxTQUhXO0FBQUEsTUFHQUMsWUFIQTs7QUFLbEIsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQ3hDQyxVQUFJLEVBQUU7QUFDTEMsaUJBQVMsRUFBRTtBQUROLE9BRGtDO0FBSXhDQyxpQkFBVyxFQUFFO0FBQ1pDLGtCQUFVLEVBQUU7QUFEQSxPQUoyQjtBQU94Q0Msa0JBQVksRUFBRTtBQUNiRCxrQkFBVSxFQUFFO0FBREMsT0FQMEI7QUFVeENFLFdBQUssRUFBRTtBQUNOQyxjQUFNLEVBQUVYLFNBQVMsR0FBRyxDQUFILEdBQU87QUFEbEI7QUFWaUMsS0FBWjtBQUFBLEdBQUQsQ0FBNUI7QUFlQSxNQUFNWSxPQUFPLEdBQUdWLFNBQVMsRUFBekI7O0FBQ0EsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxNQUFKLENBQVdDLEtBQXZCO0FBQ0FuQixZQUFRLENBQUNlLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxLQUFaLENBQVI7QUFDQSxHQUhEOztBQUlBLHNCQUNDLDhEQUFDLGdFQUFEO0FBQVcsYUFBUyxFQUFFTixPQUFPLENBQUNQLElBQTlCO0FBQUEsNEJBQ0MsOERBQUMsdUVBQUQ7QUFBa0IsZ0JBQVUsZUFBRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTlCO0FBQUEsMEJBQ08sR0FEUCxlQUVDO0FBQ0MsZ0JBQVEsRUFBRVEsV0FEWDtBQUVDLG1CQUFXLEVBQUMsT0FGYjtBQUdDLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ0YsS0FIcEI7QUFJQyxnQkFBUSxFQUFFVjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxlQVFDO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQVdDLDhEQUFDLHVFQUFEO0FBQUEsNkJBQ0MsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0ExQ0Q7O0dBQU1MLEk7O0tBQUFBLEk7QUE0Q04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvL1RvZG8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBUb2RvID0gKCkgPT4ge1xuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPFN0cmluZz4oXCJwbGFjZWhvbGRlclwiKTtcblxuXHRjb25zdCBbZWRpdFRpdGxlLCBzZXRFZGl0VGl0bGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cblx0Y29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG5cdFx0cm9vdDoge1xuXHRcdFx0bWFyZ2luVG9wOiAxMCxcblx0XHR9LFxuXHRcdGxlZnRTZWN0aW9uOiB7XG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjV2d1wiLFxuXHRcdH0sXG5cdFx0cmlnaHRTZWN0aW9uOiB7XG5cdFx0XHRtYXJnaW5MZWZ0OiBcIjE1dndcIixcblx0XHR9LFxuXHRcdGlucHV0OiB7XG5cdFx0XHRib3JkZXI6IGVkaXRUaXRsZSA/IDEgOiAwLFxuXHRcdH0sXG5cdH0pKTtcblxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cdGNvbnN0IGNoYW5nZVRpdGxlID0gKGV2ZSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGV2ZS50YXJnZXQudmFsdWUpO1xuXHRcdHNldFRpdGxlKGV2ZS50YXJnZXQudmFsdWUpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxBY2NvcmRpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuXHRcdFx0PEFjY29yZGlvblN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cblx0XHRcdFx0dGl0bGV7XCIgXCJ9XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtjaGFuZ2VUaXRsZX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInRpdGxlXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG5cdFx0XHRcdFx0cmVhZE9ubHk9e2VkaXRUaXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0VGl0bGUoZmFsc2UpfT4gZWRpdCA8L2J1dHRvbj5cblx0XHRcdDwvQWNjb3JkaW9uU3VtbWFyeT5cblx0XHRcdDxBY2NvcmRpb25EZXRhaWxzPlxuXHRcdFx0XHQ8VHlwb2dyYXBoeT50b2RvIGRlc2NyaXB0aW9uPC9UeXBvZ3JhcGh5PlxuXHRcdFx0PC9BY2NvcmRpb25EZXRhaWxzPlxuXHRcdDwvQWNjb3JkaW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Todo/Todo.tsx\n");

/***/ })

});