/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _init = __webpack_require__(2);

var _init2 = _interopRequireDefault(_init);

var _showMoreContent = __webpack_require__(3);

var _showMoreContent2 = _interopRequireDefault(_showMoreContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// main


// import js
$(function ($) {
  (0, _init2.default)();
  (0, _showMoreContent2.default)(150);
}); /*
     |--------------------------------------------------------------------------
     | app
     |--------------------------------------------------------------------------
     |
     | Created by puguohong on 22/12/2017.
     | 
     |
    */

// add style
// extract by webpack to assets/styles/css folder

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = init;
function init() {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(document).on('load', function (e) {
        //
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = showMoreContent;
function showMoreContent(contentHeight) {

    var cardContent = $('.card-soup__content');

    if (!cardContent.length) {
        return;
    }

    cardContent.each(function (index, element) {
        var currentElement = $(element);
        if (currentElement.height() >= contentHeight) {
            currentElement.css({ 'max-height': contentHeight + 'px' });
            var moreElement = currentElement.find('.card-soup__more');
            moreElement.css({ 'display': 'flex' });
            moreElement.find('a').on('click', function (e) {
                e.preventDefault();
                var $this = $(this);
                $this.closest('.card-soup__more').css({ 'display': 'none' });
                $this.closest('.card-soup__content').css({ 'max-height': 'none' });
            });
            //console.log(moreElement);
        }
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWY4ZWU3YzY5ZWM4NWU3NjY5ZTUiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2hvdy1tb3JlLWNvbnRlbnQuanMiXSwibmFtZXMiOlsiJCIsImluaXQiLCJkb2N1bWVudCIsInJlYWR5IiwidG9vbHRpcCIsIm9uIiwiZSIsInNob3dNb3JlQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJjYXJkQ29udGVudCIsImxlbmd0aCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImhlaWdodCIsImNzcyIsIm1vcmVFbGVtZW50IiwiZmluZCIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJjbG9zZXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoREE7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7QUFHQTs7O0FBTEE7QUFNQUEsRUFBRSxVQUFVQSxDQUFWLEVBQWE7QUFDWDtBQUNBLGlDQUFnQixHQUFoQjtBQUNILENBSEQsRSxDQXRCQTs7Ozs7Ozs7OztBQVVBO0FBQ0EsaUQ7Ozs7OztBQ1hBLHlDOzs7Ozs7Ozs7Ozs7a0JDQ3dCQyxJO0FBQVQsU0FBU0EsSUFBVCxHQUFnQjtBQUMzQkQsTUFBRUUsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJILFVBQUUseUJBQUYsRUFBNkJJLE9BQTdCO0FBQ0gsS0FGRDs7QUFJQUosTUFBRUUsUUFBRixFQUFZRyxFQUFaLENBQWUsTUFBZixFQUFzQixVQUFVQyxDQUFWLEVBQWE7QUFDL0I7QUFDSCxLQUZEO0FBR0gsQzs7Ozs7Ozs7Ozs7O2tCQ1R1QkMsZTtBQUFULFNBQVNBLGVBQVQsQ0FBeUJDLGFBQXpCLEVBQXdDOztBQUVuRCxRQUFJQyxjQUFjVCxFQUFFLHFCQUFGLENBQWxCOztBQUVBLFFBQUksQ0FBQ1MsWUFBWUMsTUFBakIsRUFBeUI7QUFDckI7QUFDSDs7QUFFREQsZ0JBQVlFLElBQVosQ0FBaUIsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEI7QUFDdkMsWUFBSUMsaUJBQWlCZCxFQUFFYSxPQUFGLENBQXJCO0FBQ0EsWUFBSUMsZUFBZUMsTUFBZixNQUEyQlAsYUFBL0IsRUFBOEM7QUFDMUNNLDJCQUFlRSxHQUFmLENBQW1CLEVBQUMsY0FBY1IsZ0JBQWdCLElBQS9CLEVBQW5CO0FBQ0EsZ0JBQUlTLGNBQWNILGVBQWVJLElBQWYsQ0FBb0Isa0JBQXBCLENBQWxCO0FBQ0FELHdCQUFZRCxHQUFaLENBQWdCLEVBQUMsV0FBVyxNQUFaLEVBQWhCO0FBQ0FDLHdCQUFZQyxJQUFaLENBQWlCLEdBQWpCLEVBQXNCYixFQUF0QixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxDQUFWLEVBQWE7QUFDM0NBLGtCQUFFYSxjQUFGO0FBQ0Esb0JBQUlDLFFBQVFwQixFQUFFLElBQUYsQ0FBWjtBQUNBb0Isc0JBQU1DLE9BQU4sQ0FBYyxrQkFBZCxFQUFrQ0wsR0FBbEMsQ0FBc0MsRUFBQyxXQUFXLE1BQVosRUFBdEM7QUFDQUksc0JBQU1DLE9BQU4sQ0FBYyxxQkFBZCxFQUFxQ0wsR0FBckMsQ0FBeUMsRUFBQyxjQUFjLE1BQWYsRUFBekM7QUFDSCxhQUxEO0FBTUE7QUFDSDtBQUNKLEtBZEQ7QUFlSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZjhlZTdjNjllYzg1ZTc2NjllNSIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBhcHBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gfCBDcmVhdGVkIGJ5IHB1Z3VvaG9uZyBvbiAyMi8xMi8yMDE3LlxuIHwgXG4gfFxuKi9cblxuLy8gYWRkIHN0eWxlXG4vLyBleHRyYWN0IGJ5IHdlYnBhY2sgdG8gYXNzZXRzL3N0eWxlcy9jc3MgZm9sZGVyXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Njc3MvYXBwLnNjc3MnO1xuXG5cbi8vIGltcG9ydCBqc1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCBzaG93TW9yZUNvbnRlbnQgZnJvbSAnLi9zaG93LW1vcmUtY29udGVudCc7XG5cblxuLy8gbWFpblxuJChmdW5jdGlvbiAoJCkge1xuICAgIGluaXQoKTtcbiAgICBzaG93TW9yZUNvbnRlbnQoMTUwKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zdHlsZXMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2xvYWQnLGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vXG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvaW5pdC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dNb3JlQ29udGVudChjb250ZW50SGVpZ2h0KSB7XG5cbiAgICBsZXQgY2FyZENvbnRlbnQgPSAkKCcuY2FyZC1zb3VwX19jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNhcmRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FyZENvbnRlbnQuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmhlaWdodCgpID49IGNvbnRlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNzcyh7J21heC1oZWlnaHQnOiBjb250ZW50SGVpZ2h0ICsgJ3B4J30pO1xuICAgICAgICAgICAgbGV0IG1vcmVFbGVtZW50ID0gY3VycmVudEVsZW1lbnQuZmluZCgnLmNhcmQtc291cF9fbW9yZScpO1xuICAgICAgICAgICAgbW9yZUVsZW1lbnQuY3NzKHsnZGlzcGxheSc6ICdmbGV4J30pO1xuICAgICAgICAgICAgbW9yZUVsZW1lbnQuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLmNhcmQtc291cF9fbW9yZScpLmNzcyh7J2Rpc3BsYXknOiAnbm9uZSd9KTtcbiAgICAgICAgICAgICAgICAkdGhpcy5jbG9zZXN0KCcuY2FyZC1zb3VwX19jb250ZW50JykuY3NzKHsnbWF4LWhlaWdodCc6ICdub25lJ30pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1vcmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3Nob3ctbW9yZS1jb250ZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==