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

var _cardShowMoreContent = __webpack_require__(3);

var _cardShowMoreContent2 = _interopRequireDefault(_cardShowMoreContent);

var _sidebarToggle = __webpack_require__(4);

var _sidebarToggle2 = _interopRequireDefault(_sidebarToggle);

var _navbarSearch = __webpack_require__(5);

var _navbarSearch2 = _interopRequireDefault(_navbarSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// main


// import js
$(function ($) {

    (0, _init2.default)();

    // car show more content
    (0, _cardShowMoreContent2.default)(150);

    // sidebar toggle
    (0, _sidebarToggle2.default)();

    // navbar search
    (0, _navbarSearch2.default)();
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sidebarToggle;
function sidebarToggle() {

    var toggleButton = $('#toggleButton');

    var sidebar = $('#sidebar');

    var contentLayout = $('#layout-content');

    if (!sidebar.length) {
        return;
    }

    // events
    // sidebar:toggle
    // sidebar:on
    // sidebar:off

    sidebar.on('sidebar:toggle', function (e) {
        var sidebar = $(this);
        if (sidebar.is('.on')) {
            sidebar.trigger('sidebar:off');
        } else {
            sidebar.trigger('sidebar:on');
        }
    }).on('sidebar:on', function (e) {
        $(this).removeClass('off').addClass('on');
        contentLayout.removeClass('sidebar-off').addClass('sidebar-on');
    }).on('sidebar:off', function (e) {
        $(this).removeClass('on').addClass('off');
        contentLayout.removeClass('sidebar-on').addClass('sidebar-off');
    });

    toggleButton.on('click', function (e) {
        sidebar.trigger('sidebar:toggle');
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbarSearch;
function navbarSearch() {

    var navbarSearchLarge = $('#navbarSearchLarge');
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGI3ODNkNzlkNjQwNTRiNjIxZjIiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvY2FyZC1zaG93LW1vcmUtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zaWRlYmFyVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zZWFyY2guanMiXSwibmFtZXMiOlsiJCIsImluaXQiLCJkb2N1bWVudCIsInJlYWR5IiwidG9vbHRpcCIsIm9uIiwiZSIsInNob3dNb3JlQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJjYXJkQ29udGVudCIsImxlbmd0aCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImhlaWdodCIsImNzcyIsIm1vcmVFbGVtZW50IiwiZmluZCIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJjbG9zZXN0Iiwic2lkZWJhclRvZ2dsZSIsInRvZ2dsZUJ1dHRvbiIsInNpZGViYXIiLCJjb250ZW50TGF5b3V0IiwiaXMiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm5hdmJhclNlYXJjaCIsIm5hdmJhclNlYXJjaExhcmdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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Q0FTUSxZQVRSLEVBU3NCLFVBQVVDLENBQVYsRUFBYTtBQUMzQk4sVUFBRSxJQUFGLEVBQVE0QixXQUFSLENBQW9CLEtBQXBCLEVBQTJCQyxRQUEzQixDQUFvQyxJQUFwQztBQUNBSixzQkFBY0csV0FBZCxDQUEwQixhQUExQixFQUF5Q0MsUUFBekMsQ0FBa0QsWUFBbEQ7QUFDSCxLQVpMLEVBYUt4QixFQWJMLENBYVEsYUFiUixFQWF1QixVQUFVQyxDQUFWLEVBQWE7QUFDNUJOLFVBQUUsSUFBRixFQUFRNEIsV0FBUixDQUFvQixJQUFwQixFQUEwQkMsUUFBMUIsQ0FBbUMsS0FBbkM7QUFDQUosc0JBQWNHLFdBQWQsQ0FBMEIsWUFBMUIsRUFBd0NDLFFBQXhDLENBQWlELGFBQWpEO0FBQ0gsS0FoQkw7O0FBa0JBTixpQkFBYWxCLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsVUFBVUMsQ0FBVixFQUFhO0FBQ2xDa0IsZ0JBQVFHLE9BQVIsQ0FBZ0IsZ0JBQWhCO0FBQ0gsS0FGRDtBQUtILEM7Ozs7Ozs7Ozs7OztrQkN4Q3VCRyxZO0FBQVQsU0FBU0EsWUFBVCxHQUF3Qjs7QUFFbkMsUUFBSUMsb0JBQW9CL0IsRUFBRSxvQkFBRixDQUF4QjtBQUVILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRiNzgzZDc5ZDY0MDU0YjYyMWYyIiwiLypcclxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gfCBhcHBcclxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gfFxyXG4gfCBDcmVhdGVkIGJ5IHB1Z3VvaG9uZyBvbiAyMi8xMi8yMDE3LlxyXG4gfCBcclxuIHxcclxuKi9cclxuXHJcbi8vIGFkZCBzdHlsZVxyXG4vLyBleHRyYWN0IGJ5IHdlYnBhY2sgdG8gYXNzZXRzL3N0eWxlcy9jc3MgZm9sZGVyXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zY3NzL2FwcC5zY3NzJztcclxuXHJcblxyXG4vLyBpbXBvcnQganNcclxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcclxuaW1wb3J0IGNhcmRTaG93TW9yZUNvbnRlbnQgZnJvbSAnLi9jYXJkLXNob3ctbW9yZS1jb250ZW50JztcclxuaW1wb3J0IHNpZGViYXJUb2dnbGUgZnJvbSAnLi9zaWRlYmFyVG9nZ2xlJztcclxuaW1wb3J0IG5hdmJhclNlYXJjaCBmcm9tICcuL25hdmJhci1zZWFyY2gnO1xyXG5cclxuLy8gbWFpblxyXG4kKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgaW5pdCgpO1xyXG5cclxuICAgIC8vIGNhciBzaG93IG1vcmUgY29udGVudFxyXG4gICAgY2FyZFNob3dNb3JlQ29udGVudCgxNTApO1xyXG5cclxuICAgIC8vIHNpZGViYXIgdG9nZ2xlXHJcbiAgICBzaWRlYmFyVG9nZ2xlKCk7XHJcblxyXG4gICAgLy8gbmF2YmFyIHNlYXJjaFxyXG4gICAgbmF2YmFyU2VhcmNoKCk7XHJcblxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc3R5bGVzL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdsb2FkJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2luaXQuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93TW9yZUNvbnRlbnQoY29udGVudEhlaWdodCkge1xyXG5cclxuICAgIGxldCBjYXJkQ29udGVudCA9ICQoJy5jYXJkLXNvdXBfX2NvbnRlbnQnKTtcclxuXHJcbiAgICBpZiAoIWNhcmRDb250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjYXJkQ29udGVudC5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmhlaWdodCgpID49IGNvbnRlbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuY3NzKHsnbWF4LWhlaWdodCc6IGNvbnRlbnRIZWlnaHQgKyAncHgnfSk7XHJcbiAgICAgICAgICAgIGxldCBtb3JlRWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LmZpbmQoJy5jYXJkLXNvdXBfX21vcmUnKTtcclxuICAgICAgICAgICAgbW9yZUVsZW1lbnQuY3NzKHsnZGlzcGxheSc6ICdmbGV4J30pO1xyXG4gICAgICAgICAgICBtb3JlRWxlbWVudC5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5jbG9zZXN0KCcuY2FyZC1zb3VwX19tb3JlJykuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pO1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLmNhcmQtc291cF9fY29udGVudCcpLmNzcyh7J21heC1oZWlnaHQnOiAnbm9uZSd9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW9yZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvY2FyZC1zaG93LW1vcmUtY29udGVudC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXJUb2dnbGUoKSB7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUJ1dHRvbiA9ICQoJyN0b2dnbGVCdXR0b24nKTtcclxuXHJcbiAgICBsZXQgc2lkZWJhciA9ICQoJyNzaWRlYmFyJyk7XHJcblxyXG4gICAgbGV0IGNvbnRlbnRMYXlvdXQgPSAkKCcjbGF5b3V0LWNvbnRlbnQnKTtcclxuXHJcbiAgICBpZiAoIXNpZGViYXIubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV2ZW50c1xyXG4gICAgLy8gc2lkZWJhcjp0b2dnbGVcclxuICAgIC8vIHNpZGViYXI6b25cclxuICAgIC8vIHNpZGViYXI6b2ZmXHJcblxyXG4gICAgc2lkZWJhclxyXG4gICAgICAgIC5vbignc2lkZWJhcjp0b2dnbGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBsZXQgc2lkZWJhciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChzaWRlYmFyLmlzKCcub24nKSkge1xyXG4gICAgICAgICAgICAgICAgc2lkZWJhci50cmlnZ2VyKCdzaWRlYmFyOm9mZicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2lkZWJhci50cmlnZ2VyKCdzaWRlYmFyOm9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignc2lkZWJhcjpvbicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29mZicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICBjb250ZW50TGF5b3V0LnJlbW92ZUNsYXNzKCdzaWRlYmFyLW9mZicpLmFkZENsYXNzKCdzaWRlYmFyLW9uJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ3NpZGViYXI6b2ZmJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKS5hZGRDbGFzcygnb2ZmJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRMYXlvdXQucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb24nKS5hZGRDbGFzcygnc2lkZWJhci1vZmYnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB0b2dnbGVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBzaWRlYmFyLnRyaWdnZXIoJ3NpZGViYXI6dG9nZ2xlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2lkZWJhclRvZ2dsZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhclNlYXJjaCgpIHtcclxuXHJcbiAgICBsZXQgbmF2YmFyU2VhcmNoTGFyZ2UgPSAkKCcjbmF2YmFyU2VhcmNoTGFyZ2UnKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9uYXZiYXItc2VhcmNoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==