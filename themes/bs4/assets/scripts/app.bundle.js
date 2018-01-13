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

    var searchbar = $('#searchBar');

    if (!searchbar.length) {
        return;
    }

    // events
    // searchbar:toggle
    // searchabar:on
    // searchbar:off

    searchbar.on('searchbar:toggle', function (e) {
        var searchbar = $(this);
        if (searchbar.is('.on')) {
            searchbar.trigger('searchbar:off');
        } else {
            searchbar.trigger('searchbar:on');
        }
    }).on('searchbar:on', function (e) {
        $(this).removeClass('off').addClass('on');
    }).on('searchbar:off', function (e) {
        $(this).removeClass('on').addClass('off');
    });

    searchbar.find('.close-button').on('click', function (e) {
        searchbar.trigger('searchbar:toggle');
    });

    $('#openSearchBar').on('click', function (e) {
        searchbar.trigger('searchbar:toggle');
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmViNjUwYzUxZmU5MzNiNzY4MTkiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvY2FyZC1zaG93LW1vcmUtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zaWRlYmFyVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zZWFyY2guanMiXSwibmFtZXMiOlsiJCIsImluaXQiLCJkb2N1bWVudCIsInJlYWR5IiwidG9vbHRpcCIsIm9uIiwiZSIsInNob3dNb3JlQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJjYXJkQ29udGVudCIsImxlbmd0aCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImhlaWdodCIsImNzcyIsIm1vcmVFbGVtZW50IiwiZmluZCIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJjbG9zZXN0Iiwic2lkZWJhclRvZ2dsZSIsInRvZ2dsZUJ1dHRvbiIsInNpZGViYXIiLCJjb250ZW50TGF5b3V0IiwiaXMiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm5hdmJhclNlYXJjaCIsInNlYXJjaGJhciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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UUFBM0IsQ0FBb0MsSUFBcEM7QUFDSCxLQVhMLEVBWUt4QixFQVpMLENBWVEsZUFaUixFQVl5QixVQUFVQyxDQUFWLEVBQWE7QUFDOUJOLFVBQUUsSUFBRixFQUFRNEIsV0FBUixDQUFvQixJQUFwQixFQUEwQkMsUUFBMUIsQ0FBbUMsS0FBbkM7QUFDSCxLQWRMOztBQWdCQUUsY0FBVWIsSUFBVixDQUFlLGVBQWYsRUFBZ0NiLEVBQWhDLENBQW1DLE9BQW5DLEVBQTRDLFVBQVVDLENBQVYsRUFBYTtBQUNyRHlCLGtCQUFVSixPQUFWLENBQWtCLGtCQUFsQjtBQUNILEtBRkQ7O0FBSUEzQixNQUFFLGdCQUFGLEVBQW9CSyxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxVQUFVQyxDQUFWLEVBQWE7QUFDekN5QixrQkFBVUosT0FBVixDQUFrQixrQkFBbEI7QUFDSCxLQUZEO0FBR0gsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmViNjUwYzUxZmU5MzNiNzY4MTkiLCIvKlxyXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiB8IGFwcFxyXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiB8XHJcbiB8IENyZWF0ZWQgYnkgcHVndW9ob25nIG9uIDIyLzEyLzIwMTcuXHJcbiB8IFxyXG4gfFxyXG4qL1xyXG5cclxuLy8gYWRkIHN0eWxlXHJcbi8vIGV4dHJhY3QgYnkgd2VicGFjayB0byBhc3NldHMvc3R5bGVzL2NzcyBmb2xkZXJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Njc3MvYXBwLnNjc3MnO1xyXG5cclxuXHJcbi8vIGltcG9ydCBqc1xyXG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQgY2FyZFNob3dNb3JlQ29udGVudCBmcm9tICcuL2NhcmQtc2hvdy1tb3JlLWNvbnRlbnQnO1xyXG5pbXBvcnQgc2lkZWJhclRvZ2dsZSBmcm9tICcuL3NpZGViYXJUb2dnbGUnO1xyXG5pbXBvcnQgbmF2YmFyU2VhcmNoIGZyb20gJy4vbmF2YmFyLXNlYXJjaCc7XHJcblxyXG4vLyBtYWluXHJcbiQoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICBpbml0KCk7XHJcblxyXG4gICAgLy8gY2FyIHNob3cgbW9yZSBjb250ZW50XHJcbiAgICBjYXJkU2hvd01vcmVDb250ZW50KDE1MCk7XHJcblxyXG4gICAgLy8gc2lkZWJhciB0b2dnbGVcclxuICAgIHNpZGViYXJUb2dnbGUoKTtcclxuXHJcbiAgICAvLyBuYXZiYXIgc2VhcmNoXHJcbiAgICBuYXZiYXJTZWFyY2goKTtcclxuXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zdHlsZXMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2xvYWQnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy9cclxuICAgIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvaW5pdC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dNb3JlQ29udGVudChjb250ZW50SGVpZ2h0KSB7XHJcblxyXG4gICAgbGV0IGNhcmRDb250ZW50ID0gJCgnLmNhcmQtc291cF9fY29udGVudCcpO1xyXG5cclxuICAgIGlmICghY2FyZENvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRDb250ZW50LmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gJChlbGVtZW50KTtcclxuICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQuaGVpZ2h0KCkgPj0gY29udGVudEhlaWdodCkge1xyXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jc3MoeydtYXgtaGVpZ2h0JzogY29udGVudEhlaWdodCArICdweCd9KTtcclxuICAgICAgICAgICAgbGV0IG1vcmVFbGVtZW50ID0gY3VycmVudEVsZW1lbnQuZmluZCgnLmNhcmQtc291cF9fbW9yZScpO1xyXG4gICAgICAgICAgICBtb3JlRWxlbWVudC5jc3MoeydkaXNwbGF5JzogJ2ZsZXgnfSk7XHJcbiAgICAgICAgICAgIG1vcmVFbGVtZW50LmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLmNsb3Nlc3QoJy5jYXJkLXNvdXBfX21vcmUnKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5jbG9zZXN0KCcuY2FyZC1zb3VwX19jb250ZW50JykuY3NzKHsnbWF4LWhlaWdodCc6ICdub25lJ30pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtb3JlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9jYXJkLXNob3ctbW9yZS1jb250ZW50LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhclRvZ2dsZSgpIHtcclxuXHJcbiAgICBsZXQgdG9nZ2xlQnV0dG9uID0gJCgnI3RvZ2dsZUJ1dHRvbicpO1xyXG5cclxuICAgIGxldCBzaWRlYmFyID0gJCgnI3NpZGViYXInKTtcclxuXHJcbiAgICBsZXQgY29udGVudExheW91dCA9ICQoJyNsYXlvdXQtY29udGVudCcpO1xyXG5cclxuICAgIGlmICghc2lkZWJhci5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXZlbnRzXHJcbiAgICAvLyBzaWRlYmFyOnRvZ2dsZVxyXG4gICAgLy8gc2lkZWJhcjpvblxyXG4gICAgLy8gc2lkZWJhcjpvZmZcclxuXHJcbiAgICBzaWRlYmFyXHJcbiAgICAgICAgLm9uKCdzaWRlYmFyOnRvZ2dsZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxldCBzaWRlYmFyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKHNpZGViYXIuaXMoJy5vbicpKSB7XHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnRyaWdnZXIoJ3NpZGViYXI6b2ZmJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnRyaWdnZXIoJ3NpZGViYXI6b24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uKCdzaWRlYmFyOm9uJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb2ZmJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRMYXlvdXQucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb2ZmJykuYWRkQ2xhc3MoJ3NpZGViYXItb24nKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignc2lkZWJhcjpvZmYnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpLmFkZENsYXNzKCdvZmYnKTtcclxuICAgICAgICAgICAgY29udGVudExheW91dC5yZW1vdmVDbGFzcygnc2lkZWJhci1vbicpLmFkZENsYXNzKCdzaWRlYmFyLW9mZicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHRvZ2dsZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNpZGViYXIudHJpZ2dlcignc2lkZWJhcjp0b2dnbGUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zaWRlYmFyVG9nZ2xlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyU2VhcmNoKCkge1xuXG4gICAgbGV0IHNlYXJjaGJhciA9ICQoJyNzZWFyY2hCYXInKTtcblxuICAgIGlmICghc2VhcmNoYmFyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZXZlbnRzXG4gICAgLy8gc2VhcmNoYmFyOnRvZ2dsZVxuICAgIC8vIHNlYXJjaGFiYXI6b25cbiAgICAvLyBzZWFyY2hiYXI6b2ZmXG5cbiAgICBzZWFyY2hiYXJcbiAgICAgICAgLm9uKCdzZWFyY2hiYXI6dG9nZ2xlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hiYXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaGJhci5pcygnLm9uJykpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hiYXIudHJpZ2dlcignc2VhcmNoYmFyOm9mZicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hiYXIudHJpZ2dlcignc2VhcmNoYmFyOm9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignc2VhcmNoYmFyOm9uJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29mZicpLmFkZENsYXNzKCdvbicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3NlYXJjaGJhcjpvZmYnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKS5hZGRDbGFzcygnb2ZmJyk7XG4gICAgICAgIH0pXG5cbiAgICBzZWFyY2hiYXIuZmluZCgnLmNsb3NlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHNlYXJjaGJhci50cmlnZ2VyKCdzZWFyY2hiYXI6dG9nZ2xlJyk7XG4gICAgfSlcblxuICAgICQoJyNvcGVuU2VhcmNoQmFyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2VhcmNoYmFyLnRyaWdnZXIoJ3NlYXJjaGJhcjp0b2dnbGUnKTtcbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvbmF2YmFyLXNlYXJjaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=