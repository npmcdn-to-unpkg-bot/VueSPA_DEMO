"use strict";

/******/(function (modules) {
	// webpackBootstrap
	/******/ // install a JSONP callback for chunk loading
	/******/var parentJsonpFunction = window["webpackJsonp"];
	/******/window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
		/******/ // add "moreModules" to the modules object,
		/******/ // then flag all "chunkIds" as loaded and fire callback
		/******/var moduleId,
		    chunkId,
		    i = 0,
		    callbacks = [];
		/******/for (; i < chunkIds.length; i++) {
			/******/chunkId = chunkIds[i];
			/******/if (installedChunks[chunkId])
				/******/callbacks.push.apply(callbacks, installedChunks[chunkId]);
			/******/installedChunks[chunkId] = 0;
			/******/
		}
		/******/for (moduleId in moreModules) {
			/******/modules[moduleId] = moreModules[moduleId];
			/******/
		}
		/******/if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
		/******/while (callbacks.length) {
			/******/callbacks.shift().call(null, __webpack_require__);
		} /******/
		/******/
	};
	/******/
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // object to store loaded and loading chunks
	/******/ // "0" means "already loaded"
	/******/ // Array means "loading", array contains callbacks
	/******/var installedChunks = {
		/******/0: 0
		/******/ };
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;
		/******/
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.loaded = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/ // This file contains only the entry chunk.
	/******/ // The chunk loading function for additional chunks
	/******/__webpack_require__.e = function requireEnsure(chunkId, callback) {
		/******/ // "0" is the signal for "already loaded"
		/******/if (installedChunks[chunkId] === 0)
			/******/return callback.call(null, __webpack_require__);
		/******/
		/******/ // an array means "currently loading".
		/******/if (installedChunks[chunkId] !== undefined) {
			/******/installedChunks[chunkId].push(callback);
			/******/
		} else {
			/******/ // start chunk loading
			/******/installedChunks[chunkId] = [callback];
			/******/var head = document.getElementsByTagName('head')[0];
			/******/var script = document.createElement('script');
			/******/script.type = 'text/javascript';
			/******/script.charset = 'utf-8';
			/******/script.async = true;
			/******/
			/******/script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId] || chunkId) + ".js";
			/******/head.appendChild(script);
			/******/
		}
		/******/
	};
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "./js/dist/";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	//路由器需要一个根组件。
	var Menu = Vue.extend({});
	// 创建一个路由器实例
	var router = new VueRouter();
	// 定义路由规则
	router.map({
		'/': {
			name: 'home',
			component: function component(reslove) {
				return __webpack_require__.e /* require */(1, function (__webpack_require__) {
					var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(2)];reslove.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);
				}.bind(this));
			}
		},
		'/login': {
			component: function component(reslove) {
				return __webpack_require__.e /* require */(2, function (__webpack_require__) {
					var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(5)];reslove.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);
				}.bind(this));
			}
		},
		'/users/edit': {
			component: function component(reslove) {
				return __webpack_require__.e /* require */(3, function (__webpack_require__) {
					var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(8)];reslove.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);
				}.bind(this));
			}
		},
		'/users/edit/:id': {
			component: function component(reslove) {
				return __webpack_require__.e /* require */(3 /* duplicate */, function (__webpack_require__) {
					var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(8)];reslove.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);
				}.bind(this));
			}
		},
		'/users': {
			component: function component(reslove) {
				return __webpack_require__.e /* require */(4, function (__webpack_require__) {
					var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(14)];reslove.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);
				}.bind(this));
			}
		}
	});

	// 现在我们可以启动应用了！
	router.start(Menu, '#app');

	/***/
}
/******/]);
//# sourceMappingURL=app.js.map