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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ \"./node_modules/@material-ui/core/esm/Accordion/index.js\");\n/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ \"./node_modules/@material-ui/core/esm/AccordionSummary/index.js\");\n/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ \"./node_modules/@material-ui/core/esm/AccordionDetails/index.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/abdullah-khallouf/Desktop/todo/src/components/Todo/Todo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {\n  return {\n    root: {\n      marginTop: 10\n    },\n    leftSection: {\n      marginLeft: \"5vw\"\n    },\n    rightSection: {\n      marginLeft: \"15vw\"\n    },\n    title: {\n      border: 0\n    },\n    description: {\n      width: \"100%\",\n      borderStyle: \"none\",\n      borderColor: \"Transparent\",\n      overflow: \"auto\"\n    }\n  };\n});\n\nvar Todo = function Todo() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"title\"),\n      title = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"description\"),\n      description = _useState2[0],\n      setDescription = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      editTitle = _useState3[0],\n      setEditTitle = _useState3[1];\n\n  var classes = useStyles();\n\n  var changeTitle = function changeTitle(eve) {\n    console.log(eve.target.value);\n    setTitle(eve.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {\n    className: classes.root,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__.default, {\n      expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 34\n      }, _this),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        onChange: changeTitle,\n        placeholder: title,\n        className: classes.title,\n        readOnly: !editTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return setEditTitle(true);\n        },\n        children: \" edit \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n        placeholder: description,\n        className: classes.description,\n        readOnly: editTitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Todo, \"x4ll//XksS6ejBvj2SS9GWceh4o=\", false, function () {\n  return [useStyles];\n});\n\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Todo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kby9Ub2RvLnRzeD84NDdjIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJsZWZ0U2VjdGlvbiIsIm1hcmdpbkxlZnQiLCJyaWdodFNlY3Rpb24iLCJ0aXRsZSIsImJvcmRlciIsImRlc2NyaXB0aW9uIiwid2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwib3ZlcmZsb3ciLCJUb2RvIiwidXNlU3RhdGUiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwiZWRpdFRpdGxlIiwic2V0RWRpdFRpdGxlIiwiY2xhc3NlcyIsImNoYW5nZVRpdGxlIiwiZXZlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGVBQVMsRUFBRTtBQUROLEtBRGtDO0FBSXhDQyxlQUFXLEVBQUU7QUFDWkMsZ0JBQVUsRUFBRTtBQURBLEtBSjJCO0FBT3hDQyxnQkFBWSxFQUFFO0FBQ2JELGdCQUFVLEVBQUU7QUFEQyxLQVAwQjtBQVV4Q0UsU0FBSyxFQUFFO0FBQ05DLFlBQU0sRUFBRTtBQURGLEtBVmlDO0FBYXhDQyxlQUFXLEVBQUU7QUFDWkMsV0FBSyxFQUFFLE1BREs7QUFFWkMsaUJBQVcsRUFBRSxNQUZEO0FBR1pDLGlCQUFXLEVBQUUsYUFIRDtBQUlaQyxjQUFRLEVBQUU7QUFKRTtBQWIyQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFxQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFTLE9BQVQsQ0FEaEI7QUFBQSxNQUNYUixLQURXO0FBQUEsTUFDSlMsUUFESTs7QUFBQSxtQkFFb0JELCtDQUFRLENBQVMsYUFBVCxDQUY1QjtBQUFBLE1BRVhOLFdBRlc7QUFBQSxNQUVFUSxjQUZGOztBQUFBLG1CQUlnQkYsK0NBQVEsQ0FBVSxLQUFWLENBSnhCO0FBQUEsTUFJWEcsU0FKVztBQUFBLE1BSUFDLFlBSkE7O0FBTWxCLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7O0FBQ0EsTUFBTXNCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBYztBQUNqQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxLQUF2QjtBQUNBVixZQUFRLENBQUNNLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxLQUFaLENBQVI7QUFDQSxHQUhEOztBQUlBLHNCQUNDLDhEQUFDLGdFQUFEO0FBQVcsYUFBUyxFQUFFTixPQUFPLENBQUNsQixJQUE5QjtBQUFBLDRCQUNDLDhEQUFDLHVFQUFEO0FBQWtCLGdCQUFVLGVBQUUsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE5QjtBQUFBLDhCQUNDO0FBQ0MsZ0JBQVEsRUFBRW1CLFdBRFg7QUFFQyxtQkFBVyxFQUFFZCxLQUZkO0FBR0MsaUJBQVMsRUFBRWEsT0FBTyxDQUFDYixLQUhwQjtBQUlDLGdCQUFRLEVBQUUsQ0FBQ1c7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFPQztBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFVQyw4REFBQyx1RUFBRDtBQUFBLDZCQUVDO0FBQ0MsbUJBQVcsRUFBRVYsV0FEZDtBQUVDLGlCQUFTLEVBQUVXLE9BQU8sQ0FBQ1gsV0FGcEI7QUFHQyxnQkFBUSxFQUFFUztBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFxQkEsQ0FoQ0Q7O0dBQU1KLEk7VUFNV2YsUzs7O0tBTlhlLEk7QUFrQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RvL1RvZG8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0cm9vdDoge1xuXHRcdG1hcmdpblRvcDogMTAsXG5cdH0sXG5cdGxlZnRTZWN0aW9uOiB7XG5cdFx0bWFyZ2luTGVmdDogXCI1dndcIixcblx0fSxcblx0cmlnaHRTZWN0aW9uOiB7XG5cdFx0bWFyZ2luTGVmdDogXCIxNXZ3XCIsXG5cdH0sXG5cdHRpdGxlOiB7XG5cdFx0Ym9yZGVyOiAwLFxuXHR9LFxuXHRkZXNjcmlwdGlvbjoge1xuXHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRib3JkZXJTdHlsZTogXCJub25lXCIsXG5cdFx0Ym9yZGVyQ29sb3I6IFwiVHJhbnNwYXJlbnRcIixcblx0XHRvdmVyZmxvdzogXCJhdXRvXCIsXG5cdH0sXG59KSk7XG5cbmNvbnN0IFRvZG8gPSAoKSA9PiB7XG5cdGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcInRpdGxlXCIpO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJkZXNjcmlwdGlvblwiKTtcblxuXHRjb25zdCBbZWRpdFRpdGxlLCBzZXRFZGl0VGl0bGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblx0Y29uc3QgY2hhbmdlVGl0bGUgPSAoZXZlOiBhbnkpID0+IHtcblx0XHRjb25zb2xlLmxvZyhldmUudGFyZ2V0LnZhbHVlKTtcblx0XHRzZXRUaXRsZShldmUudGFyZ2V0LnZhbHVlKTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8QWNjb3JkaW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cblx0XHRcdDxBY2NvcmRpb25TdW1tYXJ5IGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn0+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtjaGFuZ2VUaXRsZX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGl0bGV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuXHRcdFx0XHRcdHJlYWRPbmx5PXshZWRpdFRpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVkaXRUaXRsZSh0cnVlKX0+IGVkaXQgPC9idXR0b24+XG5cdFx0XHQ8L0FjY29yZGlvblN1bW1hcnk+XG5cdFx0XHQ8QWNjb3JkaW9uRGV0YWlscz5cblx0XHRcdFx0ey8qIDxUeXBvZ3JhcGh5PnRvZG8gZGVzY3JpcHRpb248L1R5cG9ncmFwaHk+ICovfVxuXHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdHJlYWRPbmx5PXtlZGl0VGl0bGV9XG5cdFx0XHRcdD48L3RleHRhcmVhPlxuXHRcdFx0PC9BY2NvcmRpb25EZXRhaWxzPlxuXHRcdDwvQWNjb3JkaW9uPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Todo/Todo.tsx\n");

/***/ })

});