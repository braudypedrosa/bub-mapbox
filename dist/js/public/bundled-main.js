/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/public/mapbox.js":
/*!************************************!*\
  !*** ./assets/js/public/mapbox.js ***!
  \************************************/
/***/ (() => {

(function ($) {
  console.log('Initializing Mapbox ...');
  if (typeof bub_mapbox_ajax === 'undefined') {
    console.error('bub_mapbox_ajax is not defined. Make sure wp_localize_script is working.');
    return;
  }
  console.log(bub_mapbox_ajax);

  // Define variables
  var plugin_settings = bub_mapbox_ajax.plugin_settings;
  var style = plugin_settings.mapbox_style ? plugin_settings.mapbox_style : 'mapbox://styles/buildupbookings/clwl4g15g00tr01q17rjs6lm5';
  var mapbox_token = plugin_settings.mapbox_token;
  var default_coordinates = {
    'lat': plugin_settings.mapbox_latitude,
    'lng': plugin_settings.mapbox_longitude
  };

  // iterate to all bubmapbox_map
  $('.bubmapbox_map').each(function () {
    var map_id = $(this).data('mapid');
    var locations = $(this).attr('data-locations') != 'all' ? JSON.parse($(this).attr('data-locations')) : $(this).attr('data-locations');
    console.log(map_id);
    console.log(locations);
    $.ajax({
      url: bub_mapbox_ajax.ajax_url,
      type: 'POST',
      dataType: 'json',
      data: {
        action: 'get_mapbox_locations',
        nonce: bub_mapbox_ajax.nonce,
        locations: locations
      },
      success: function success(response) {
        if (response.success) {
          console.log('Locations:', response.data);
        } else {
          console.error('Error:', response.data);
        }
      },
      error: function error(_error) {
        console.error('AJAX Error:', _error);
      }
    });
  });
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./assets/js/public-bundle.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_mapbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/mapbox */ "./assets/js/public/mapbox.js");
/* harmony import */ var _public_mapbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_mapbox__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlZC1tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLENBQUMsVUFBU0EsQ0FBQyxFQUFFO0VBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO0VBRXRDLElBQUksT0FBT0MsZUFBZSxLQUFLLFdBQVcsRUFBRTtJQUN4Q0YsT0FBTyxDQUFDRyxLQUFLLENBQUMsMEVBQTBFLENBQUM7SUFDekY7RUFDSjtFQUVBSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDOztFQUU1QjtFQUNBLElBQU1FLGVBQWUsR0FBR0YsZUFBZSxDQUFDRSxlQUFlO0VBRXZELElBQUlDLEtBQUssR0FBR0QsZUFBZSxDQUFDRSxZQUFZLEdBQUdGLGVBQWUsQ0FBQ0UsWUFBWSxHQUFHLDJEQUEyRDtFQUNySSxJQUFJQyxZQUFZLEdBQUdILGVBQWUsQ0FBQ0csWUFBWTtFQUMvQyxJQUFJQyxtQkFBbUIsR0FBRztJQUN0QixLQUFLLEVBQUVKLGVBQWUsQ0FBQ0ssZUFBZTtJQUN0QyxLQUFLLEVBQUVMLGVBQWUsQ0FBQ007RUFDM0IsQ0FBQzs7RUFFRDtFQUNBWCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLFlBQVU7SUFFL0IsSUFBSUMsTUFBTSxHQUFHYixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNjLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEMsSUFBSUMsU0FBUyxHQUFJZixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNnQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLEdBQUlDLElBQUksQ0FBQ0MsS0FBSyxDQUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDZ0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBR2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUV2SWYsT0FBTyxDQUFDQyxHQUFHLENBQUNXLE1BQU0sQ0FBQztJQUNuQlosT0FBTyxDQUFDQyxHQUFHLENBQUNhLFNBQVMsQ0FBQztJQUV0QmYsQ0FBQyxDQUFDbUIsSUFBSSxDQUFDO01BQ0hDLEdBQUcsRUFBRWpCLGVBQWUsQ0FBQ2tCLFFBQVE7TUFDN0JDLElBQUksRUFBRSxNQUFNO01BQ1pDLFFBQVEsRUFBRSxNQUFNO01BQ2hCVCxJQUFJLEVBQUU7UUFDRlUsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QkMsS0FBSyxFQUFFdEIsZUFBZSxDQUFDc0IsS0FBSztRQUM1QlYsU0FBUyxFQUFFQTtNQUNmLENBQUM7TUFDRFcsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQVdDLFFBQVEsRUFBRTtRQUN4QixJQUFJQSxRQUFRLENBQUNELE9BQU8sRUFBRTtVQUNsQnpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRXlCLFFBQVEsQ0FBQ2IsSUFBSSxDQUFDO1FBQzVDLENBQUMsTUFBTTtVQUNIYixPQUFPLENBQUNHLEtBQUssQ0FBQyxRQUFRLEVBQUV1QixRQUFRLENBQUNiLElBQUksQ0FBQztRQUMxQztNQUNKLENBQUM7TUFDRFYsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQVdBLE1BQUssRUFBRTtRQUNuQkgsT0FBTyxDQUFDRyxLQUFLLENBQUMsYUFBYSxFQUFFQSxNQUFLLENBQUM7TUFDdkM7SUFDSixDQUFDLENBQUM7RUFHTixDQUFDLENBQUM7QUFFTixDQUFDLEVBQUV3QixNQUFNLENBQUM7Ozs7OztVQ3JEVjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1Yi1tYXBib3gvLi9hc3NldHMvanMvcHVibGljL21hcGJveC5qcyIsIndlYnBhY2s6Ly9idWItbWFwYm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J1Yi1tYXBib3gvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYnViLW1hcGJveC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnViLW1hcGJveC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1Yi1tYXBib3gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWItbWFwYm94Ly4vYXNzZXRzL2pzL3B1YmxpYy1idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIE1hcGJveCAuLi4nKTtcblxuICAgIGlmICh0eXBlb2YgYnViX21hcGJveF9hamF4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdidWJfbWFwYm94X2FqYXggaXMgbm90IGRlZmluZWQuIE1ha2Ugc3VyZSB3cF9sb2NhbGl6ZV9zY3JpcHQgaXMgd29ya2luZy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGJ1Yl9tYXBib3hfYWpheCk7XG5cbiAgICAvLyBEZWZpbmUgdmFyaWFibGVzXG4gICAgY29uc3QgcGx1Z2luX3NldHRpbmdzID0gYnViX21hcGJveF9hamF4LnBsdWdpbl9zZXR0aW5ncztcblxuICAgIGxldCBzdHlsZSA9IHBsdWdpbl9zZXR0aW5ncy5tYXBib3hfc3R5bGUgPyBwbHVnaW5fc2V0dGluZ3MubWFwYm94X3N0eWxlIDogJ21hcGJveDovL3N0eWxlcy9idWlsZHVwYm9va2luZ3MvY2x3bDRnMTVnMDB0cjAxcTE3cmpzNmxtNSc7XG4gICAgbGV0IG1hcGJveF90b2tlbiA9IHBsdWdpbl9zZXR0aW5ncy5tYXBib3hfdG9rZW47XG4gICAgbGV0IGRlZmF1bHRfY29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICdsYXQnOiBwbHVnaW5fc2V0dGluZ3MubWFwYm94X2xhdGl0dWRlLFxuICAgICAgICAnbG5nJzogcGx1Z2luX3NldHRpbmdzLm1hcGJveF9sb25naXR1ZGVcbiAgICB9O1xuXG4gICAgLy8gaXRlcmF0ZSB0byBhbGwgYnVibWFwYm94X21hcFxuICAgICQoJy5idWJtYXBib3hfbWFwJykuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgICAgIGxldCBtYXBfaWQgPSAkKHRoaXMpLmRhdGEoJ21hcGlkJyk7XG4gICAgICAgIGxldCBsb2NhdGlvbnMgPSAoJCh0aGlzKS5hdHRyKCdkYXRhLWxvY2F0aW9ucycpICE9ICdhbGwnKSA/IEpTT04ucGFyc2UoJCh0aGlzKS5hdHRyKCdkYXRhLWxvY2F0aW9ucycpKSA6ICQodGhpcykuYXR0cignZGF0YS1sb2NhdGlvbnMnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhtYXBfaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbnMpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGJ1Yl9tYXBib3hfYWpheC5hamF4X3VybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0X21hcGJveF9sb2NhdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5vbmNlOiBidWJfbWFwYm94X2FqYXgubm9uY2UsXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zOiBsb2NhdGlvbnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMb2NhdGlvbnM6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FKQVggRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3B1YmxpYy9tYXBib3gnOyJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsImJ1Yl9tYXBib3hfYWpheCIsImVycm9yIiwicGx1Z2luX3NldHRpbmdzIiwic3R5bGUiLCJtYXBib3hfc3R5bGUiLCJtYXBib3hfdG9rZW4iLCJkZWZhdWx0X2Nvb3JkaW5hdGVzIiwibWFwYm94X2xhdGl0dWRlIiwibWFwYm94X2xvbmdpdHVkZSIsImVhY2giLCJtYXBfaWQiLCJkYXRhIiwibG9jYXRpb25zIiwiYXR0ciIsIkpTT04iLCJwYXJzZSIsImFqYXgiLCJ1cmwiLCJhamF4X3VybCIsInR5cGUiLCJkYXRhVHlwZSIsImFjdGlvbiIsIm5vbmNlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==