webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/mock-data */ \"./node_modules/@visx/mock-data/esm/index.js\");\n/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visx/group */ \"./node_modules/@visx/group/esm/index.js\");\n/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/shape */ \"./node_modules/@visx/shape/esm/index.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visx/scale */ \"./node_modules/@visx/scale/esm/index.js\");\n/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-scale-chromatic */ \"./node_modules/d3-scale-chromatic/src/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/marioprada/Documents/dev/visx-test/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n // We'll use some mock data from `@visx/mock-data` for this.\n\nvar data = _visx_mock_data__WEBPACK_IMPORTED_MODULE_2__[\"letterFrequency\"]; // Define the graph dimensions and margins\n\nvar width = 1000;\nvar height = 1000;\nvar margin = {\n  top: 50,\n  bottom: 50,\n  left: 50,\n  right: 50\n}; // Then we'll create some bounds\n\nvar xMax = width - margin.left - margin.right;\nvar yMax = height - margin.top - margin.bottom; // We'll make some helpers to get at the data we want\n\nvar x = function x(d) {\n  return d.letter;\n};\n\nvar y = function y(d) {\n  return +d.frequency * 100;\n}; // And then scale the graph by our data\n\n\nvar xScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_5__[\"scaleBand\"])({\n  range: [0, xMax],\n  round: true,\n  domain: data.map(x),\n  padding: 0.4\n});\nvar yScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_5__[\"scaleLinear\"])({\n  range: [yMax, 0],\n  round: true,\n  domain: [0, Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.map(y)))]\n});\nvar colorScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_5__[\"scaleOrdinal\"])({\n  domain: data.map(x),\n  range: d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__[\"schemeSet1\"]\n});\nconsole.log(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_6__[\"schemeSet1\"]); // Compose together the scale and accessor functions to get point functions\n\nvar compose = function compose(scale, accessor) {\n  return function (data) {\n    return scale(accessor(data));\n  };\n};\n\nvar xPoint = compose(xScale, x);\nvar yPoint = compose(yScale, y); // Finally we'll embed it all in an SVG\n\nvar BarGraph = function BarGraph(props) {\n  return __jsx(\"svg\", {\n    width: width,\n    height: height,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, data.map(function (d, i) {\n    var barHeight = yMax - yPoint(d);\n    return __jsx(_visx_group__WEBPACK_IMPORTED_MODULE_3__[\"Group\"], {\n      key: \"bar-\".concat(i),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }, __jsx(_visx_shape__WEBPACK_IMPORTED_MODULE_4__[\"Bar\"], {\n      x: xPoint(d),\n      y: yMax - barHeight,\n      height: barHeight,\n      width: xScale.bandwidth(),\n      fill: colorScale(d),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }\n    }));\n  }));\n};\n\n_c = BarGraph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarGraph);\n\nvar _c;\n\n$RefreshReg$(_c, \"BarGraph\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJkYXRhIiwibGV0dGVyRnJlcXVlbmN5Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ4TWF4IiwieU1heCIsIngiLCJkIiwibGV0dGVyIiwieSIsImZyZXF1ZW5jeSIsInhTY2FsZSIsInNjYWxlQmFuZCIsInJhbmdlIiwicm91bmQiLCJkb21haW4iLCJtYXAiLCJwYWRkaW5nIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJNYXRoIiwibWF4IiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInNjaGVtZVNldDEiLCJjb25zb2xlIiwibG9nIiwiY29tcG9zZSIsInNjYWxlIiwiYWNjZXNzb3IiLCJ4UG9pbnQiLCJ5UG9pbnQiLCJCYXJHcmFwaCIsInByb3BzIiwiaSIsImJhckhlaWdodCIsImJhbmR3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLElBQU1BLElBQUksR0FBR0MsK0RBQWIsQyxDQUVBOztBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFLEVBQVA7QUFBV0MsUUFBTSxFQUFFLEVBQW5CO0FBQXVCQyxNQUFJLEVBQUUsRUFBN0I7QUFBaUNDLE9BQUssRUFBRTtBQUF4QyxDQUFmLEMsQ0FFQTs7QUFDQSxJQUFNQyxJQUFJLEdBQUdQLEtBQUssR0FBR0UsTUFBTSxDQUFDRyxJQUFmLEdBQXNCSCxNQUFNLENBQUNJLEtBQTFDO0FBQ0EsSUFBTUUsSUFBSSxHQUFHUCxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBaEIsR0FBc0JELE1BQU0sQ0FBQ0UsTUFBMUMsQyxDQUVBOztBQUNBLElBQU1LLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLE1BQVQ7QUFBQSxDQUFWOztBQUNBLElBQU1DLENBQUMsR0FBRyxTQUFKQSxDQUFJLENBQUNGLENBQUQ7QUFBQSxTQUFPLENBQUNBLENBQUMsQ0FBQ0csU0FBSCxHQUFlLEdBQXRCO0FBQUEsQ0FBVixDLENBRUE7OztBQUNBLElBQU1DLE1BQU0sR0FBR0MsNkRBQVMsQ0FBQztBQUN2QkMsT0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJVCxJQUFKLENBRGdCO0FBRXZCVSxPQUFLLEVBQUUsSUFGZ0I7QUFHdkJDLFFBQU0sRUFBRXBCLElBQUksQ0FBQ3FCLEdBQUwsQ0FBU1YsQ0FBVCxDQUhlO0FBSXZCVyxTQUFPLEVBQUU7QUFKYyxDQUFELENBQXhCO0FBTUEsSUFBTUMsTUFBTSxHQUFHQywrREFBVyxDQUFDO0FBQ3pCTixPQUFLLEVBQUUsQ0FBQ1IsSUFBRCxFQUFPLENBQVAsQ0FEa0I7QUFFekJTLE9BQUssRUFBRSxJQUZrQjtBQUd6QkMsUUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJSyxJQUFJLENBQUNDLEdBQUwsT0FBQUQsSUFBSSwrRkFBUXpCLElBQUksQ0FBQ3FCLEdBQUwsQ0FBU1AsQ0FBVCxDQUFSLEVBQVI7QUFIaUIsQ0FBRCxDQUExQjtBQU1BLElBQU1hLFVBQVUsR0FBR0MsZ0VBQVksQ0FBQztBQUM5QlIsUUFBTSxFQUFFcEIsSUFBSSxDQUFDcUIsR0FBTCxDQUFTVixDQUFULENBRHNCO0FBRTlCTyxPQUFLLEVBQUVXLDZEQUFVQTtBQUZhLENBQUQsQ0FBL0I7QUFLQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLDZEQUFaLEUsQ0FFQTs7QUFDQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQSxTQUFxQixVQUFDbEMsSUFBRDtBQUFBLFdBQVVpQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ2xDLElBQUQsQ0FBVCxDQUFmO0FBQUEsR0FBckI7QUFBQSxDQUFoQjs7QUFDQSxJQUFNbUMsTUFBTSxHQUFHSCxPQUFPLENBQUNoQixNQUFELEVBQVNMLENBQVQsQ0FBdEI7QUFDQSxJQUFNeUIsTUFBTSxHQUFHSixPQUFPLENBQUNULE1BQUQsRUFBU1QsQ0FBVCxDQUF0QixDLENBRUE7O0FBQ0EsSUFBTXVCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixTQUNFO0FBQUssU0FBSyxFQUFFcEMsS0FBWjtBQUFtQixVQUFNLEVBQUVDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsSUFBSSxDQUFDcUIsR0FBTCxDQUFTLFVBQUNULENBQUQsRUFBSTJCLENBQUosRUFBVTtBQUNsQixRQUFNQyxTQUFTLEdBQUc5QixJQUFJLEdBQUcwQixNQUFNLENBQUN4QixDQUFELENBQS9CO0FBQ0EsV0FDRSxNQUFDLGlEQUFEO0FBQU8sU0FBRyxnQkFBUzJCLENBQVQsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywrQ0FBRDtBQUNFLE9BQUMsRUFBRUosTUFBTSxDQUFDdkIsQ0FBRCxDQURYO0FBRUUsT0FBQyxFQUFFRixJQUFJLEdBQUc4QixTQUZaO0FBR0UsWUFBTSxFQUFFQSxTQUhWO0FBSUUsV0FBSyxFQUFFeEIsTUFBTSxDQUFDeUIsU0FBUCxFQUpUO0FBS0UsVUFBSSxFQUFFZCxVQUFVLENBQUNmLENBQUQsQ0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFXRCxHQWJBLENBREgsQ0FERjtBQWtCRCxDQW5CRDs7S0FBTXlCLFE7QUFxQlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbGV0dGVyRnJlcXVlbmN5IH0gZnJvbSAnQHZpc3gvbW9jay1kYXRhJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnQHZpc3gvZ3JvdXAnO1xuaW1wb3J0IHsgQmFyIH0gZnJvbSAnQHZpc3gvc2hhcGUnO1xuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIHNjYWxlQmFuZCwgc2NhbGVPcmRpbmFsIH0gZnJvbSAnQHZpc3gvc2NhbGUnO1xuXG5pbXBvcnQgeyBzY2hlbWVTZXQxIH0gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljJztcblxuLy8gV2UnbGwgdXNlIHNvbWUgbW9jayBkYXRhIGZyb20gYEB2aXN4L21vY2stZGF0YWAgZm9yIHRoaXMuXG5jb25zdCBkYXRhID0gbGV0dGVyRnJlcXVlbmN5O1xuXG4vLyBEZWZpbmUgdGhlIGdyYXBoIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnNcbmNvbnN0IHdpZHRoID0gMTAwMDtcbmNvbnN0IGhlaWdodCA9IDEwMDA7XG5jb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfTtcblxuLy8gVGhlbiB3ZSdsbCBjcmVhdGUgc29tZSBib3VuZHNcbmNvbnN0IHhNYXggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuY29uc3QgeU1heCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4vLyBXZSdsbCBtYWtlIHNvbWUgaGVscGVycyB0byBnZXQgYXQgdGhlIGRhdGEgd2Ugd2FudFxuY29uc3QgeCA9IChkKSA9PiBkLmxldHRlcjtcbmNvbnN0IHkgPSAoZCkgPT4gK2QuZnJlcXVlbmN5ICogMTAwO1xuXG4vLyBBbmQgdGhlbiBzY2FsZSB0aGUgZ3JhcGggYnkgb3VyIGRhdGFcbmNvbnN0IHhTY2FsZSA9IHNjYWxlQmFuZCh7XG4gIHJhbmdlOiBbMCwgeE1heF0sXG4gIHJvdW5kOiB0cnVlLFxuICBkb21haW46IGRhdGEubWFwKHgpLFxuICBwYWRkaW5nOiAwLjQsXG59KTtcbmNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyKHtcbiAgcmFuZ2U6IFt5TWF4LCAwXSxcbiAgcm91bmQ6IHRydWUsXG4gIGRvbWFpbjogWzAsIE1hdGgubWF4KC4uLmRhdGEubWFwKHkpKV0sXG59KTtcblxuY29uc3QgY29sb3JTY2FsZSA9IHNjYWxlT3JkaW5hbCh7XG4gIGRvbWFpbjogZGF0YS5tYXAoeCksXG4gIHJhbmdlOiBzY2hlbWVTZXQxLFxufSk7XG5cbmNvbnNvbGUubG9nKHNjaGVtZVNldDEpO1xuXG4vLyBDb21wb3NlIHRvZ2V0aGVyIHRoZSBzY2FsZSBhbmQgYWNjZXNzb3IgZnVuY3Rpb25zIHRvIGdldCBwb2ludCBmdW5jdGlvbnNcbmNvbnN0IGNvbXBvc2UgPSAoc2NhbGUsIGFjY2Vzc29yKSA9PiAoZGF0YSkgPT4gc2NhbGUoYWNjZXNzb3IoZGF0YSkpO1xuY29uc3QgeFBvaW50ID0gY29tcG9zZSh4U2NhbGUsIHgpO1xuY29uc3QgeVBvaW50ID0gY29tcG9zZSh5U2NhbGUsIHkpO1xuXG4vLyBGaW5hbGx5IHdlJ2xsIGVtYmVkIGl0IGFsbCBpbiBhbiBTVkdcbmNvbnN0IEJhckdyYXBoID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIHtkYXRhLm1hcCgoZCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSB5TWF4IC0geVBvaW50KGQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxHcm91cCBrZXk9e2BiYXItJHtpfWB9PlxuICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICB4PXt4UG9pbnQoZCl9XG4gICAgICAgICAgICAgIHk9e3lNYXggLSBiYXJIZWlnaHR9XG4gICAgICAgICAgICAgIGhlaWdodD17YmFySGVpZ2h0fVxuICAgICAgICAgICAgICB3aWR0aD17eFNjYWxlLmJhbmR3aWR0aCgpfVxuICAgICAgICAgICAgICBmaWxsPXtjb2xvclNjYWxlKGQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXJHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})