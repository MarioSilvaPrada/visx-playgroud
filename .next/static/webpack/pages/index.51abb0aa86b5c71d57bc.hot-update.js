webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/mock-data */ \"./node_modules/@visx/mock-data/esm/index.js\");\n/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visx/group */ \"./node_modules/@visx/group/esm/index.js\");\n/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/shape */ \"./node_modules/@visx/shape/esm/index.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visx/scale */ \"./node_modules/@visx/scale/esm/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/marioprada/Documents/dev/visx-test/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n // We'll use some mock data from `@visx/mock-data` for this.\n\nvar data = _visx_mock_data__WEBPACK_IMPORTED_MODULE_2__[\"letterFrequency\"]; // Define the graph dimensions and margins\n\nvar width = 1000;\nvar height = 1000;\nvar margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n}; // Then we'll create some bounds\n\nvar xMax = width - margin.left - margin.right;\nvar yMax = height - margin.top - margin.bottom; // We'll make some helpers to get at the data we want\n\nvar x = function x(d) {\n  return d.letter;\n};\n\nvar y = function y(d) {\n  return +d.frequency * 100;\n}; // And then scale the graph by our data\n\n\nvar xScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_5__[\"scaleBand\"])({\n  range: [0, xMax],\n  round: false,\n  domain: data.map(x),\n  padding: 0.4\n});\nvar yScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_5__[\"scaleLinear\"])({\n  range: [yMax, 0],\n  round: true,\n  domain: [0, Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.map(y)))]\n}); // Compose together the scale and accessor functions to get point functions\n\nvar compose = function compose(scale, accessor) {\n  return function (data) {\n    return scale(accessor(data));\n  };\n};\n\nvar xPoint = compose(xScale, x);\nvar yPoint = compose(yScale, y); // Finally we'll embed it all in an SVG\n\nvar BarGraph = function BarGraph(props) {\n  return __jsx(\"svg\", {\n    width: width,\n    height: height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, data.map(function (d, i) {\n    var barHeight = yMax - yPoint(d);\n    return __jsx(_visx_group__WEBPACK_IMPORTED_MODULE_3__[\"Group\"], {\n      key: \"bar-\".concat(i),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }\n    }, __jsx(_visx_shape__WEBPACK_IMPORTED_MODULE_4__[\"Bar\"], {\n      x: xPoint(d),\n      y: yMax - barHeight,\n      height: barHeight,\n      width: xScale.bandwidth(),\n      fill: \"#fc2e1c\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }));\n  }));\n};\n\n_c = BarGraph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarGraph);\n\nvar _c;\n\n$RefreshReg$(_c, \"BarGraph\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJkYXRhIiwibGV0dGVyRnJlcXVlbmN5Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ4TWF4IiwieU1heCIsIngiLCJkIiwibGV0dGVyIiwieSIsImZyZXF1ZW5jeSIsInhTY2FsZSIsInNjYWxlQmFuZCIsInJhbmdlIiwicm91bmQiLCJkb21haW4iLCJtYXAiLCJwYWRkaW5nIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJNYXRoIiwibWF4IiwiY29tcG9zZSIsInNjYWxlIiwiYWNjZXNzb3IiLCJ4UG9pbnQiLCJ5UG9pbnQiLCJCYXJHcmFwaCIsInByb3BzIiwiaSIsImJhckhlaWdodCIsImJhbmR3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLElBQUksR0FBR0MsK0RBQWIsQyxDQUVBOztBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFLEVBQVA7QUFBV0MsUUFBTSxFQUFFLEVBQW5CO0FBQXVCQyxNQUFJLEVBQUUsRUFBN0I7QUFBaUNDLE9BQUssRUFBRTtBQUF4QyxDQUFmLEMsQ0FFQTs7QUFDQSxJQUFNQyxJQUFJLEdBQUdQLEtBQUssR0FBR0UsTUFBTSxDQUFDRyxJQUFmLEdBQXNCSCxNQUFNLENBQUNJLEtBQTFDO0FBQ0EsSUFBTUUsSUFBSSxHQUFHUCxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBaEIsR0FBc0JELE1BQU0sQ0FBQ0UsTUFBMUMsQyxDQUVBOztBQUNBLElBQU1LLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLE1BQVQ7QUFBQSxDQUFWOztBQUNBLElBQU1DLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQUNGLENBQUQ7QUFBQSxTQUFPLENBQUNBLENBQUMsQ0FBQ0csU0FBSCxHQUFlLEdBQXRCO0FBQUEsQ0FBVixDLENBRUE7OztBQUNBLElBQU1DLE1BQU0sR0FBR0MsNkRBQVMsQ0FBQztBQUN2QkMsT0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJVCxJQUFKLENBRGdCO0FBRXZCVSxPQUFLLEVBQUUsS0FGZ0I7QUFHdkJDLFFBQU0sRUFBRXBCLElBQUksQ0FBQ3FCLEdBQUwsQ0FBU1YsQ0FBVCxDQUhlO0FBSXZCVyxTQUFPLEVBQUU7QUFKYyxDQUFELENBQXhCO0FBTUEsSUFBTUMsTUFBTSxHQUFHQywrREFBVyxDQUFDO0FBQ3pCTixPQUFLLEVBQUUsQ0FBQ1IsSUFBRCxFQUFPLENBQVAsQ0FEa0I7QUFFekJTLE9BQUssRUFBRSxJQUZrQjtBQUd6QkMsUUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJSyxJQUFJLENBQUNDLEdBQUwsT0FBQUQsSUFBSSwrRkFBUXpCLElBQUksQ0FBQ3FCLEdBQUwsQ0FBU1AsQ0FBVCxDQUFSLEVBQVI7QUFIaUIsQ0FBRCxDQUExQixDLENBTUE7O0FBQ0EsSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUEsU0FBcUIsVUFBQzdCLElBQUQ7QUFBQSxXQUFVNEIsS0FBSyxDQUFDQyxRQUFRLENBQUM3QixJQUFELENBQVQsQ0FBZjtBQUFBLEdBQXJCO0FBQUEsQ0FBaEI7O0FBQ0EsSUFBTThCLE1BQU0sR0FBR0gsT0FBTyxDQUFDWCxNQUFELEVBQVNMLENBQVQsQ0FBdEI7QUFDQSxJQUFNb0IsTUFBTSxHQUFHSixPQUFPLENBQUNKLE1BQUQsRUFBU1QsQ0FBVCxDQUF0QixDLENBRUE7O0FBQ0EsSUFBTWtCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixTQUNFO0FBQUssU0FBSyxFQUFFL0IsS0FBWjtBQUFtQixVQUFNLEVBQUVDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsSUFBSSxDQUFDcUIsR0FBTCxDQUFTLFVBQUNULENBQUQsRUFBSXNCLENBQUosRUFBVTtBQUNsQixRQUFNQyxTQUFTLEdBQUd6QixJQUFJLEdBQUdxQixNQUFNLENBQUNuQixDQUFELENBQS9CO0FBQ0EsV0FDRSxNQUFDLGlEQUFEO0FBQU8sU0FBRyxnQkFBU3NCLENBQVQsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywrQ0FBRDtBQUNFLE9BQUMsRUFBRUosTUFBTSxDQUFDbEIsQ0FBRCxDQURYO0FBRUUsT0FBQyxFQUFFRixJQUFJLEdBQUd5QixTQUZaO0FBR0UsWUFBTSxFQUFFQSxTQUhWO0FBSUUsV0FBSyxFQUFFbkIsTUFBTSxDQUFDb0IsU0FBUCxFQUpUO0FBS0UsVUFBSSxFQUFDLFNBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFXRCxHQWJBLENBREgsQ0FERjtBQWtCRCxDQW5CRDs7S0FBTUosUTtBQXFCU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsZXR0ZXJGcmVxdWVuY3kgfSBmcm9tICdAdmlzeC9tb2NrLWRhdGEnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdAdmlzeC9ncm91cCc7XG5pbXBvcnQgeyBCYXIgfSBmcm9tICdAdmlzeC9zaGFwZSc7XG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgc2NhbGVCYW5kIH0gZnJvbSAnQHZpc3gvc2NhbGUnO1xuXG4vLyBXZSdsbCB1c2Ugc29tZSBtb2NrIGRhdGEgZnJvbSBgQHZpc3gvbW9jay1kYXRhYCBmb3IgdGhpcy5cbmNvbnN0IGRhdGEgPSBsZXR0ZXJGcmVxdWVuY3k7XG5cbi8vIERlZmluZSB0aGUgZ3JhcGggZGltZW5zaW9ucyBhbmQgbWFyZ2luc1xuY29uc3Qgd2lkdGggPSAxMDAwO1xuY29uc3QgaGVpZ2h0ID0gMTAwMDtcbmNvbnN0IG1hcmdpbiA9IHsgdG9wOiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAsIHJpZ2h0OiA1MCB9O1xuXG4vLyBUaGVuIHdlJ2xsIGNyZWF0ZSBzb21lIGJvdW5kc1xuY29uc3QgeE1heCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG5jb25zdCB5TWF4ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbi8vIFdlJ2xsIG1ha2Ugc29tZSBoZWxwZXJzIHRvIGdldCBhdCB0aGUgZGF0YSB3ZSB3YW50XG5jb25zdCB4ID0gKGQpID0+IGQubGV0dGVyO1xuY29uc3QgeSA9IChkKSA9PiArZC5mcmVxdWVuY3kgKiAxMDA7XG5cbi8vIEFuZCB0aGVuIHNjYWxlIHRoZSBncmFwaCBieSBvdXIgZGF0YVxuY29uc3QgeFNjYWxlID0gc2NhbGVCYW5kKHtcbiAgcmFuZ2U6IFswLCB4TWF4XSxcbiAgcm91bmQ6IGZhbHNlLFxuICBkb21haW46IGRhdGEubWFwKHgpLFxuICBwYWRkaW5nOiAwLjQsXG59KTtcbmNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKHtcbiAgcmFuZ2U6IFt5TWF4LCAwXSxcbiAgcm91bmQ6IHRydWUsXG4gIGRvbWFpbjogWzAsIE1hdGgubWF4KC4uLmRhdGEubWFwKHkpKV0sXG59KTtcblxuLy8gQ29tcG9zZSB0b2dldGhlciB0aGUgc2NhbGUgYW5kIGFjY2Vzc29yIGZ1bmN0aW9ucyB0byBnZXQgcG9pbnQgZnVuY3Rpb25zXG5jb25zdCBjb21wb3NlID0gKHNjYWxlLCBhY2Nlc3NvcikgPT4gKGRhdGEpID0+IHNjYWxlKGFjY2Vzc29yKGRhdGEpKTtcbmNvbnN0IHhQb2ludCA9IGNvbXBvc2UoeFNjYWxlLCB4KTtcbmNvbnN0IHlQb2ludCA9IGNvbXBvc2UoeVNjYWxlLCB5KTtcblxuLy8gRmluYWxseSB3ZSdsbCBlbWJlZCBpdCBhbGwgaW4gYW4gU1ZHXG5jb25zdCBCYXJHcmFwaCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICB7ZGF0YS5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0geU1heCAtIHlQb2ludChkKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8R3JvdXAga2V5PXtgYmFyLSR7aX1gfT5cbiAgICAgICAgICAgIDxCYXJcbiAgICAgICAgICAgICAgeD17eFBvaW50KGQpfVxuICAgICAgICAgICAgICB5PXt5TWF4IC0gYmFySGVpZ2h0fVxuICAgICAgICAgICAgICBoZWlnaHQ9e2JhckhlaWdodH1cbiAgICAgICAgICAgICAgd2lkdGg9e3hTY2FsZS5iYW5kd2lkdGgoKX1cbiAgICAgICAgICAgICAgZmlsbD0nI2ZjMmUxYydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})