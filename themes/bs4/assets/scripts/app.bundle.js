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

var _cardShowMoreContent = __webpack_require__(4);

var _cardShowMoreContent2 = _interopRequireDefault(_cardShowMoreContent);

var _sidebarToggle = __webpack_require__(5);

var _sidebarToggle2 = _interopRequireDefault(_sidebarToggle);

var _navbarSearch = __webpack_require__(6);

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
/* 3 */,
/* 4 */
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
/* 5 */
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
/* 6 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdiY2EzYWQwNDQ2MDZjZjljNGMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvY2FyZC1zaG93LW1vcmUtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zaWRlYmFyVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zZWFyY2guanMiXSwibmFtZXMiOlsiJCIsImluaXQiLCJkb2N1bWVudCIsInJlYWR5IiwidG9vbHRpcCIsIm9uIiwiZSIsInNob3dNb3JlQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJjYXJkQ29udGVudCIsImxlbmd0aCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImhlaWdodCIsImNzcyIsIm1vcmVFbGVtZW50IiwiZmluZCIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJjbG9zZXN0Iiwic2lkZWJhclRvZ2dsZSIsInRvZ2dsZUJ1dHRvbiIsInNpZGViYXIiLCJjb250ZW50TGF5b3V0IiwiaXMiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm5hdmJhclNlYXJjaCIsIm5hdmJhclNlYXJjaExhcmdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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LENBU1EsWUFUUixFQVNzQixVQUFVQyxDQUFWLEVBQWE7QUFDM0JOLFVBQUUsSUFBRixFQUFRNEIsV0FBUixDQUFvQixLQUFwQixFQUEyQkMsUUFBM0IsQ0FBb0MsSUFBcEM7QUFDQUosc0JBQWNHLFdBQWQsQ0FBMEIsYUFBMUIsRUFBeUNDLFFBQXpDLENBQWtELFlBQWxEO0FBQ0gsS0FaTCxFQWFLeEIsRUFiTCxDQWFRLGFBYlIsRUFhdUIsVUFBVUMsQ0FBVixFQUFhO0FBQzVCTixVQUFFLElBQUYsRUFBUTRCLFdBQVIsQ0FBb0IsSUFBcEIsRUFBMEJDLFFBQTFCLENBQW1DLEtBQW5DO0FBQ0FKLHNCQUFjRyxXQUFkLENBQTBCLFlBQTFCLEVBQXdDQyxRQUF4QyxDQUFpRCxhQUFqRDtBQUNILEtBaEJMOztBQWtCQU4saUJBQWFsQixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFVBQVVDLENBQVYsRUFBYTtBQUNsQ2tCLGdCQUFRRyxPQUFSLENBQWdCLGdCQUFoQjtBQUNILEtBRkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7a0JDeEN1QkcsWTtBQUFULFNBQVNBLFlBQVQsR0FBd0I7O0FBRW5DLFFBQUlDLG9CQUFvQi9CLEVBQUUsb0JBQUYsQ0FBeEI7QUFFSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjN2JjYTNhZDA0NDYwNmNmOWM0YyIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBhcHBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gfCBDcmVhdGVkIGJ5IHB1Z3VvaG9uZyBvbiAyMi8xMi8yMDE3LlxuIHwgXG4gfFxuKi9cblxuLy8gYWRkIHN0eWxlXG4vLyBleHRyYWN0IGJ5IHdlYnBhY2sgdG8gYXNzZXRzL3N0eWxlcy9jc3MgZm9sZGVyXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Njc3MvYXBwLnNjc3MnO1xuXG5cbi8vIGltcG9ydCBqc1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCBjYXJkU2hvd01vcmVDb250ZW50IGZyb20gJy4vY2FyZC1zaG93LW1vcmUtY29udGVudCc7XG5pbXBvcnQgc2lkZWJhclRvZ2dsZSBmcm9tICcuL3NpZGViYXJUb2dnbGUnO1xuaW1wb3J0IG5hdmJhclNlYXJjaCBmcm9tICcuL25hdmJhci1zZWFyY2gnO1xuXG4vLyBtYWluXG4kKGZ1bmN0aW9uICgkKSB7XG5cbiAgICBpbml0KCk7XG5cbiAgICAvLyBjYXIgc2hvdyBtb3JlIGNvbnRlbnRcbiAgICBjYXJkU2hvd01vcmVDb250ZW50KDE1MCk7XG5cbiAgICAvLyBzaWRlYmFyIHRvZ2dsZVxuICAgIHNpZGViYXJUb2dnbGUoKTtcblxuICAgIC8vIG5hdmJhciBzZWFyY2hcbiAgICBuYXZiYXJTZWFyY2goKTtcblxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbG9hZCcsZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy9cbiAgICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9pbml0LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd01vcmVDb250ZW50KGNvbnRlbnRIZWlnaHQpIHtcblxuICAgIGxldCBjYXJkQ29udGVudCA9ICQoJy5jYXJkLXNvdXBfX2NvbnRlbnQnKTtcblxuICAgIGlmICghY2FyZENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYXJkQ29udGVudC5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQuaGVpZ2h0KCkgPj0gY29udGVudEhlaWdodCkge1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuY3NzKHsnbWF4LWhlaWdodCc6IGNvbnRlbnRIZWlnaHQgKyAncHgnfSk7XG4gICAgICAgICAgICBsZXQgbW9yZUVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5maW5kKCcuY2FyZC1zb3VwX19tb3JlJyk7XG4gICAgICAgICAgICBtb3JlRWxlbWVudC5jc3MoeydkaXNwbGF5JzogJ2ZsZXgnfSk7XG4gICAgICAgICAgICBtb3JlRWxlbWVudC5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5jbG9zZXN0KCcuY2FyZC1zb3VwX19tb3JlJykuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pO1xuICAgICAgICAgICAgICAgICR0aGlzLmNsb3Nlc3QoJy5jYXJkLXNvdXBfX2NvbnRlbnQnKS5jc3MoeydtYXgtaGVpZ2h0JzogJ25vbmUnfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW9yZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvY2FyZC1zaG93LW1vcmUtY29udGVudC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXJUb2dnbGUoKSB7XG5cbiAgICBsZXQgdG9nZ2xlQnV0dG9uID0gJCgnI3RvZ2dsZUJ1dHRvbicpO1xuXG4gICAgbGV0IHNpZGViYXIgPSAkKCcjc2lkZWJhcicpO1xuXG4gICAgbGV0IGNvbnRlbnRMYXlvdXQgPSAkKCcjbGF5b3V0LWNvbnRlbnQnKTtcblxuICAgIGlmICghc2lkZWJhci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGV2ZW50c1xuICAgIC8vIHNpZGViYXI6dG9nZ2xlXG4gICAgLy8gc2lkZWJhcjpvblxuICAgIC8vIHNpZGViYXI6b2ZmXG5cbiAgICBzaWRlYmFyXG4gICAgICAgIC5vbignc2lkZWJhcjp0b2dnbGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IHNpZGViYXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHNpZGViYXIuaXMoJy5vbicpKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci50cmlnZ2VyKCdzaWRlYmFyOm9mZicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnRyaWdnZXIoJ3NpZGViYXI6b24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdzaWRlYmFyOm9uJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29mZicpLmFkZENsYXNzKCdvbicpO1xuICAgICAgICAgICAgY29udGVudExheW91dC5yZW1vdmVDbGFzcygnc2lkZWJhci1vZmYnKS5hZGRDbGFzcygnc2lkZWJhci1vbicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3NpZGViYXI6b2ZmJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJykuYWRkQ2xhc3MoJ29mZicpO1xuICAgICAgICAgICAgY29udGVudExheW91dC5yZW1vdmVDbGFzcygnc2lkZWJhci1vbicpLmFkZENsYXNzKCdzaWRlYmFyLW9mZicpO1xuICAgICAgICB9KTtcblxuICAgIHRvZ2dsZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzaWRlYmFyLnRyaWdnZXIoJ3NpZGViYXI6dG9nZ2xlJyk7XG4gICAgfSk7XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NpZGViYXJUb2dnbGUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXJTZWFyY2goKSB7XG5cbiAgICBsZXQgbmF2YmFyU2VhcmNoTGFyZ2UgPSAkKCcjbmF2YmFyU2VhcmNoTGFyZ2UnKTtcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9