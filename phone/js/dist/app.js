'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

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

	var index = __webpack_require__(2);
	var users = __webpack_require__(5);
	var users_edit = __webpack_require__(12);
	var login = __webpack_require__(18);
	var foo = __webpack_require__(21);
	var bar = __webpack_require__(23);

	//路由器需要一个根组件。
	var Menu = Vue.extend({});
	// 创建一个路由器实例
	var router = new VueRouter();
	// 定义路由规则
	router.map({
		'/': {
			component: index
		},
		'/login': {
			component: login
		},
		'/foo': {
			component: foo
		},
		'/bar': {
			component: bar
		},
		'/users/edit': {
			component: users_edit
		},
		'/users/edit/:id': {
			component: users_edit
		},
		'/users': {
			component: users
		}
	});

	// 现在我们可以启动应用了！
	router.start(Menu, '#app');

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(3);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
		console.warn("[vue-loader] components\\index.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(4);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-2ed68df9/index.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 3 */
/***/function (module, exports) {

	"use strict";

	module.exports = {
		route: {
			activate: function activate(transition) {
				console.log('hook-example activated!');
				if (localStorage.getItem("user") == null) {
					transition.redirect("/login");
				} else {
					transition.next();
				}
			},
			deactivate: function deactivate(transition) {
				console.log('hook-example deactivated!');
				transition.next();
			}
		},
		data: {},
		ready: function ready() {
			console.log('in index');
		},
		methods: {
			login: function login() {
				console.log(this.$router);
				localStorage.setItem("user", "admin");
				this.$router.go({ path: "/" });
			}
		}
	};

	/***/
},
/* 4 */
/***/function (module, exports) {

	module.exports = "\n<header class=\"mui-bar mui-bar-nav\">\n    <h1 class=\"mui-title\">9宫格默认样式</h1>\n</header>\n<div class=\"mui-content\">\n    <ul class=\"mui-table-view mui-grid-view mui-grid-9\">\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a v-link=\"'users'\">\n                <span class=\"mui-icon mui-icon-home\"></span>\n                <div class=\"mui-media-body\">Home</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-email\"><span class=\"mui-badge\">5</span></span>\n                <div class=\"mui-media-body\">Email</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-chatbubble\"></span>\n                <div class=\"mui-media-body\">Chat</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-location\"></span>\n                <div class=\"mui-media-body\">location</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-search\"></span>\n                <div class=\"mui-media-body\">Search</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-phone\"></span>\n                <div class=\"mui-media-body\">Phone</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-gear\"></span>\n                <div class=\"mui-media-body\">Setting</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-info\"></span>\n                <div class=\"mui-media-body\">about</div>\n            </a>\n        </li>\n        <li class=\"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3\">\n            <a href=\"#\">\n                <span class=\"mui-icon mui-icon-more\"></span>\n                <div class=\"mui-media-body\">more</div>\n            </a>\n        </li>\n    </ul>\n</div>\n";

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(6);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
		console.warn('[vue-loader] components\\users\\list.vue: named exports in *.vue files are ignored.');
	}
	__vue_template__ = __webpack_require__(11);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-3506f95b/list.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./list.vue");
				if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function () {
			update();
		});
	}

	/***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports

	// module
	exports.push([module.id, "\n.title {\n    margin: 20px 15px 7px;\n    color: #6d6d72;\n    font-size: 15px;\n}\n", ""]);

	// exports

	/***/
},
/* 8 */
/***/function (module, exports) {

	/*
 	MIT License http://www.opensource.org/licenses/mit-license.php
 	Author Tobias Koppers @sokra
 */
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	/***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

	/*
 	MIT License http://www.opensource.org/licenses/mit-license.php
 	Author Tobias Koppers @sokra
 */
	var stylesInDom = {},
	    memoize = function memoize(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	    isOldIE = memoize(function () {
		return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		);
	}),
	    getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	    singletonElement = null,
	    singletonCounter = 0,
	    styleElementsInsertedAtTop = [];

	module.exports = function (list, options) {
		if (false) {
			if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if (newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if (domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j]();
					}delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom(styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if (domStyle) {
				domStyle.refs++;
				for (var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for (; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for (var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = { css: css, media: media, sourceMap: sourceMap };
			if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if (idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function remove() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if (newObj) {
				if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	}();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while (styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	/***/
},
/* 10 */
/***/function (module, exports) {

	"use strict";

	module.exports = {
		data: {
			pagelist: [1, 2]
		},
		ready: function ready() {},
		methods: {
			eidt: function eidt() {}
		}
	};

	/***/
},
/* 11 */
/***/function (module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n<div>\n    <header class=\"mui-bar mui-bar-nav\">\n        <a v-link=\"'/'\" class=\"mui-icon mui-icon-left-nav mui-pull-left\"></a>\n        <h1 class=\"mui-title\">普通列表</h1>\n    </header>\n    <div class=\"mui-content\">\n        <div class=\"title\">\n            card（圆角列表）\n        </div>\n        <div class=\"mui-card\" style=\"margin-bottom: 35px;\">\n            <ul class=\"mui-table-view\">\n                <li v-for=\"item in [1,2,3]\" class=\"mui-table-view-cell\" >\n                    <a href=\"#!/users/edit/{{item}}\" class=\"mui-navigate-right\">\n                        item {{item}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(13);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
		console.warn('[vue-loader] components\\users\\edit.vue: named exports in *.vue files are ignored.');
	}
	__vue_template__ = __webpack_require__(17);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-444f20c7/edit.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Vue.component('my-select', __webpack_require__(14));
	module.exports = {
		data: {
			dataStore: {},
			isinselect: 0
		},
		ready: function ready() {
			var self = this;
		},
		methods: {
			openselect: function openselect() {
				this.$set('isinselect', 1);
			}
		}
	};

	/***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(15);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
		console.warn("[vue-loader] components\\shared\\select.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(16);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-6da1c5fa/select.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 15 */
/***/function (module, exports) {

	'use strict';

	module.exports = {
		data: {
			selcount: 0
		},
		props: ['selected', 'isinselect'],
		methods: {
			goback: function goback() {
				this.isinselect = false;
			},
			selectok: function selectok() {
				var checkboxArray = [].slice.call(list.querySelectorAll('input[type="checkbox"]'));
				var checkedValues = [];
				checkboxArray.forEach(function (box) {
					if (box.checked) {
						checkedValues.push(box.parentNode.innerText);
					}
				});
				if (checkedValues.length > 0) {
					this.selected = checkedValues;
					this.isinselect = false;
				} else {
					mui.alert('你没选择任何机场');
				}
			},
			dd: function dd() {
				var list = document.getElementById('list');
				mui('.mui-indexed-list-inner').on('change', 'input', function () {
					var count = list.querySelectorAll('input[type="checkbox"]:checked').length;
					self.selcount = count;
				});
			}
		},
		ready: function ready() {
			var self = this;
		}
	};

	/***/
},
/* 16 */
/***/function (module, exports) {

	module.exports = "\n<header class=\"mui-bar mui-bar-nav\">\n    <a v-on:click=\"goback\" class=\" mui-icon mui-icon-left-nav mui-pull-left\"></a>\n    <h1 class=\"mui-title\">选择机场</h1>\n    <a  v-on:click=\"selectok\" class=\"mui-btn mui-btn-link mui-pull-right mui-btn-blue mui-disabled\">完成{{ selcount }}</a>\n</header>\n<div class=\"mui-content\">\n    <div id='list' class=\"mui-indexed-list\">\n        <div class=\"mui-indexed-list-search mui-input-row mui-search\">\n            <input type=\"search\" class=\"mui-input-clear mui-indexed-list-search-input\" placeholder=\"搜索机场\">\n        </div>\n        <div class=\"mui-indexed-list-bar\">\n            <a>A</a>\n            <a>B</a>\n            <a>C</a>\n            <a>D</a>\n            <a>E</a>\n            <a>F</a>\n            <a>G</a>\n            <a>H</a>\n            <a>I</a>\n            <a>J</a>\n            <a>K</a>\n            <a>L</a>\n            <a>M</a>\n            <a>N</a>\n            <a>O</a>\n            <a>P</a>\n            <a>Q</a>\n            <a>R</a>\n            <a>S</a>\n            <a>T</a>\n            <a>U</a>\n            <a>V</a>\n            <a>W</a>\n            <a>X</a>\n            <a>Y</a>\n            <a>Z</a>\n        </div>\n        <div class=\"mui-indexed-list-alert\"></div>\n        <div class=\"mui-indexed-list-inner\">\n            <div class=\"mui-indexed-list-empty-alert\">没有数据</div>\n            <ul class=\"mui-table-view\">\n                <li data-group=\"A\" class=\"mui-table-view-divider mui-indexed-list-group\">A</li>\n                <li data-value=\"AKU\" data-tags=\"AKeSu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />阿克苏机场\n                </li>\n                <li data-value=\"BPL\" data-tags=\"ALaShanKou\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />阿拉山口机场\n                </li>\n                <li data-value=\"AAT\" data-tags=\"ALeTai\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />阿勒泰机场\n                </li>\n                <li data-value=\"NGQ\" data-tags=\"ALiKunSha\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />阿里昆莎机场\n                </li>\n                <li data-value=\"AQG\" data-tags=\"AnQingTianZhuShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />安庆天柱山机场\n                </li>\n                <li data-value=\"MFM\" data-tags=\"AoMenGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />澳门国际机场\n                </li>\n                <li data-group=\"B\" class=\"mui-table-view-divider mui-indexed-list-group\">B</li>\n                <li data-value=\"BSD\" data-tags=\"BaoShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />保山机场\n                </li>\n                <li data-value=\"BAV\" data-tags=\"BaoTou\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />包头机场\n                </li>\n                <li data-value=\"BHY\" data-tags=\"BeiHaiFuCheng\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />北海福成机场\n                </li>\n                <li data-value=\"NAY\" data-tags=\"BeiJingNanYuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />北京南苑机场\n                </li>\n                <li data-value=\"PEK\" data-tags=\"BeiJingShouDuGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />北京首都国际机场\n                </li>\n                <li data-group=\"C\" class=\"mui-table-view-divider mui-indexed-list-group\">C</li>\n                <li data-value=\"NBS\" data-tags=\"ChangBaiShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />长白山机场\n                </li>\n                <li data-value=\"CGQ\" data-tags=\"ChangChunLongJiaGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />长春龙嘉国际机场\n                </li>\n                <li data-value=\"CGD\" data-tags=\"ChangDeTaoHuaYuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />常德桃花源机场\n                </li>\n                <li data-value=\"BPX\" data-tags=\"ChangDuBangDa\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />昌都邦达机场\n                </li>\n                <li data-value=\"CSX\" data-tags=\"ChangShaHuangHuaGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />长沙黄花国际机场\n                </li>\n                <li data-value=\"CIH\" data-tags=\"ChangZhiWangCun\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />长治王村机场\n                </li>\n                <li data-value=\"CZX\" data-tags=\"ChangZhouBenNiu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />常州奔牛机场\n                </li>\n                <li data-value=\"CTU\" data-tags=\"ChengDuShuangLiuGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />成都双流国际机场\n                </li>\n                <li data-value=\"CIF\" data-tags=\"ChiFeng\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />赤峰机场\n                </li>\n                <li data-group=\"D\" class=\"mui-table-view-divider mui-indexed-list-group\">D</li>\n                <li data-value=\"DLU\" data-tags=\"DaLi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />大理机场\n                </li>\n                <li data-value=\"DLC\" data-tags=\"DaLianZhouShuiZiGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />大连周水子国际机场\n                </li>\n                <li data-value=\"DQA\" data-tags=\"DaQingSaErTu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />大庆萨尔图机场\n                </li>\n                <li data-value=\"DAT\" data-tags=\"DaTongDongWangZhuang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />大同东王庄机场\n                </li>\n                <li data-value=\"DAX\" data-tags=\"DaZhouHeShi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />达州河市机场\n                </li>\n                <li data-value=\"DDG\" data-tags=\"DanDongLangTou\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />丹东浪头机场\n                </li>\n                <li data-value=\"LUM\" data-tags=\"DeHongMangShi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />德宏芒市机场\n                </li>\n                <li data-value=\"DIG\" data-tags=\"DiQingXiangGeLiLa\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />迪庆香格里拉机场\n                </li>\n                <li data-value=\"DOY\" data-tags=\"DongYing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />东营机场\n                </li>\n                <li data-value=\"DNH\" data-tags=\"DunHuang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />敦煌机场\n                </li>\n                <li data-group=\"E\" class=\"mui-table-view-divider mui-indexed-list-group\">E</li>\n                <li data-value=\"DSN\" data-tags=\"EErDuoSi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />鄂尔多斯机场\n                </li>\n                <li data-value=\"ENH\" data-tags=\"EnShiXuJiaPing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />恩施许家坪机场\n                </li>\n                <li data-value=\"ERL\" data-tags=\"ErLianHaoTeSaiWuSuGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />二连浩特赛乌苏国际机场\n                </li>\n                <li data-group=\"F\" class=\"mui-table-view-divider mui-indexed-list-group\">F</li>\n                <li data-value=\"FUG\" data-tags=\"FuYangXiGuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />阜阳西关机场\n                </li>\n                <li data-value=\"FOC\" data-tags=\"FuZhouChangLeGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />福州长乐国际机场\n                </li>\n                <li data-group=\"G\" class=\"mui-table-view-divider mui-indexed-list-group\">G</li>\n                <li data-value=\"KOW\" data-tags=\"GanZhouHuangJin\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />赣州黄金机场\n                </li>\n                <li data-value=\"GOQ\" data-tags=\"GeErMu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />格尔木机场\n                </li>\n                <li data-value=\"GYU\" data-tags=\"GuYuanLiuPanShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />固原六盘山机场\n                </li>\n                <li data-value=\"GYS\" data-tags=\"GuangYuanPanLong\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />广元盘龙机场\n                </li>\n                <li data-value=\"CAN\" data-tags=\"GuangZhouBaiYunGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />广州白云国际机场\n                </li>\n                <li data-value=\"KWL\" data-tags=\"GuiLinLiangJiangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />桂林两江国际机场\n                </li>\n                <li data-value=\"KWE\" data-tags=\"GuiYangLongDongBaoGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />贵阳龙洞堡国际机场\n                </li>\n                <li data-group=\"H\" class=\"mui-table-view-divider mui-indexed-list-group\">H</li>\n                <li data-value=\"HRB\" data-tags=\"HaErBinTaiPingGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />哈尔滨太平国际机场\n                </li>\n                <li data-value=\"HMI\" data-tags=\"HaMi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />哈密机场\n                </li>\n                <li data-value=\"HAK\" data-tags=\"HaiKouMeiLanGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />海口美兰国际机场\n                </li>\n                <li data-value=\"HLD\" data-tags=\"HaiLaErDongShanGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />海拉尔东山国际机场\n                </li>\n                <li data-value=\"HDG\" data-tags=\"HanDan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />邯郸机场\n                </li>\n                <li data-value=\"HZG\" data-tags=\"HanZhong\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />汉中机场\n                </li>\n                <li data-value=\"HGH\" data-tags=\"HangZhouXiaoShanGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />杭州萧山国际机场\n                </li>\n                <li data-value=\"HFE\" data-tags=\"HeFeiLuoGangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />合肥骆岗国际机场\n                </li>\n                <li data-value=\"HTN\" data-tags=\"HeTian\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />和田机场\n                </li>\n                <li data-value=\"HEK\" data-tags=\"HeiHe\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />黑河机场\n                </li>\n                <li data-value=\"HET\" data-tags=\"HuHeHaoTeBaiTaGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />呼和浩特白塔国际机场\n                </li>\n                <li data-value=\"HIA\" data-tags=\"HuaiAnLianShui\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />淮安涟水机场\n                </li>\n                <li data-value=\"TXN\" data-tags=\"HuangShanTunXiGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />黄山屯溪国际机场\n                </li>\n                <li data-group=\"J\" class=\"mui-table-view-divider mui-indexed-list-group\">J</li>\n                <li data-value=\"TNA\" data-tags=\"JiNanYaoQiangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />济南遥墙国际机场\n                </li>\n                <li data-value=\"JNG\" data-tags=\"JiNingQuFu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />济宁曲阜机场\n                </li>\n                <li data-value=\"JXA\" data-tags=\"JiXiXingKaiHu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />鸡西兴凯湖机场\n                </li>\n                <li data-value=\"JMU\" data-tags=\"JiaMuSiDongJiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />佳木斯东郊机场\n                </li>\n                <li data-value=\"JGN\" data-tags=\"JiaYuGuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />嘉峪关机场\n                </li>\n                <li data-value=\"JNZ\" data-tags=\"JinZhouXiaoLingZi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />锦州小岭子机场\n                </li>\n                <li data-value=\"JDZ\" data-tags=\"JingDeZhen\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />景德镇机场\n                </li>\n                <li data-value=\"JGS\" data-tags=\"JingGangShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />井冈山机场\n                </li>\n                <li data-value=\"JIU\" data-tags=\"JiuJiangLuShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />九江庐山机场\n                </li>\n                <li data-value=\"JZH\" data-tags=\"JiuZhaiHuangLong\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />九寨黄龙机场\n                </li>\n                <li data-group=\"K\" class=\"mui-table-view-divider mui-indexed-list-group\">K</li>\n                <li data-value=\"KHG\" data-tags=\"KaShi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />喀什机场\n                </li>\n                <li data-value=\"KRY\" data-tags=\"KeLaMaYi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />克拉玛依机场\n                </li>\n                <li data-value=\"KCA\" data-tags=\"KuCheGuiZi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />库车龟兹机场\n                </li>\n                <li data-value=\"KRL\" data-tags=\"KuErLe\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />库尔勒机场\n                </li>\n                <li data-value=\"KMG\" data-tags=\"KunMingWuJiaBaGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />昆明巫家坝国际机场\n                </li>\n                <li data-group=\"L\" class=\"mui-table-view-divider mui-indexed-list-group\">L</li>\n                <li data-value=\"LXA\" data-tags=\"LaSaGongGa\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />拉萨贡嘎机场\n                </li>\n                <li data-value=\"LHW\" data-tags=\"LanZhouZhongChuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />兰州中川机场\n                </li>\n                <li data-value=\"LJG\" data-tags=\"LiJiangSanYi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />丽江三义机场\n                </li>\n                <li data-value=\"HZH\" data-tags=\"LiPing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />黎平机场\n                </li>\n                <li data-value=\"LYG\" data-tags=\"LianYunGangBaiTaBu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />连云港白塔埠机场\n                </li>\n                <li data-value=\"LNJ\" data-tags=\"LinCang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />临沧机场\n                </li>\n                <li data-value=\"LYI\" data-tags=\"LinYi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />临沂机场\n                </li>\n                <li data-value=\"LZY\" data-tags=\"LinZhiMiLin\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />林芝米林机场\n                </li>\n                <li data-value=\"LZH\" data-tags=\"LiuZhouBaiLian\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />柳州白莲机场\n                </li>\n                <li data-value=\"LCX\" data-tags=\"LongYanGuanZhiShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />龙岩冠豸山机场\n                </li>\n                <li data-value=\"LZO\" data-tags=\"LuZhouLanTian\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />泸州蓝田机场\n                </li>\n                <li data-value=\"LYA\" data-tags=\"LuoYangBeiJiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />洛阳北郊机场\n                </li>\n                <li data-group=\"M\" class=\"mui-table-view-divider mui-indexed-list-group\">M</li>\n                <li data-value=\"NZH\" data-tags=\"ManZhouLiXiJiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />满洲里西郊机场\n                </li>\n                <li data-value=\"MIG\" data-tags=\"MianYangNanJiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />绵阳南郊机场\n                </li>\n                <li data-value=\"OHE\" data-tags=\"MoHeGuLian\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />漠河古莲机场\n                </li>\n                <li data-value=\"MDG\" data-tags=\"MuDanJiangHaiLang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />牡丹江海浪机场\n                </li>\n                <li data-group=\"N\" class=\"mui-table-view-divider mui-indexed-list-group\">N</li>\n                <li data-value=\"KHN\" data-tags=\"NanChangChangBeiGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />南昌昌北国际机场\n                </li>\n                <li data-value=\"NAO\" data-tags=\"NanChongGaoPing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />南充高坪机场\n                </li>\n                <li data-value=\"NKG\" data-tags=\"NanJingLuKouGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />南京禄口国际机场\n                </li>\n                <li data-value=\"NNG\" data-tags=\"NanNingWuXu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />南宁吴圩机场\n                </li>\n                <li data-value=\"NTG\" data-tags=\"NanTongXingDong\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />南通兴东机场\n                </li>\n                <li data-value=\"NNY\" data-tags=\"NanYangJiangYing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />南阳姜营机场\n                </li>\n                <li data-value=\"NGB\" data-tags=\"NingBoLiSheGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />宁波栎社国际机场\n                </li>\n                <li data-group=\"P\" class=\"mui-table-view-divider mui-indexed-list-group\">P</li>\n                <li data-value=\"SYM\" data-tags=\"PuErSiMao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />普洱思茅机场\n                </li>\n                <li data-group=\"Q\" class=\"mui-table-view-divider mui-indexed-list-group\">Q</li>\n                <li data-value=\"NDG\" data-tags=\"QiQiHaErSanJiaZi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />齐齐哈尔三家子机场\n                </li>\n                <li data-value=\"SHP\" data-tags=\"QinHuangDaoShanHaiGuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />秦皇岛山海关机场\n                </li>\n                <li data-value=\"TAO\" data-tags=\"QingDaoLiuTingGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />青岛流亭国际机场\n                </li>\n                <li data-value=\"JUZ\" data-tags=\"QuZhou\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />衢州机场\n                </li>\n                <li data-value=\"JJN\" data-tags=\"QuanZhouJinJiang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />泉州晋江机场\n                </li>\n                <li data-group=\"R\" class=\"mui-table-view-divider mui-indexed-list-group\">R</li>\n                <li data-value=\"RKZ\" data-tags=\"RiKaZeHePing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />日喀则和平机场\n                </li>\n                <li data-group=\"S\" class=\"mui-table-view-divider mui-indexed-list-group\">S</li>\n                <li data-value=\"SYX\" data-tags=\"SanYaFengHuangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />三亚凤凰国际机场\n                </li>\n                <li data-value=\"SWA\" data-tags=\"ShanTouWaiSha\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />汕头外砂机场\n                </li>\n                <li data-value=\"SHA\" data-tags=\"ShangHaiHongQiaoGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />上海虹桥国际机场\n                </li>\n                <li data-value=\"PVG\" data-tags=\"ShangHaiPuDongGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />上海浦东国际机场\n                </li>\n                <li data-value=\"SZX\" data-tags=\"ShenChouBaoAnGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />深圳宝安国际机场\n                </li>\n                <li data-value=\"SHE\" data-tags=\"ShenYangTaoXianGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />沈阳桃仙国际机场\n                </li>\n                <li data-value=\"SJW\" data-tags=\"ShiJiaZhuangZhengDingGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />石家庄正定国际机场\n                </li>\n                <li data-value=\"WUX\" data-tags=\"SuNanShuoFangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />苏南硕放国际机场\n                </li>\n                <li data-group=\"T\" class=\"mui-table-view-divider mui-indexed-list-group\">T</li>\n                <li data-value=\"TCG\" data-tags=\"TaCheng\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />塔城机场\n                </li>\n                <li data-value=\"TYN\" data-tags=\"TaiYuanWuSuGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />太原武宿国际机场\n                </li>\n                <li data-value=\"HYN\" data-tags=\"TaiZhouLuQiao-HuangYanJiChang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />台州路桥机场 (黄岩机场)\n                </li>\n                <li data-value=\"TVS\" data-tags=\"TangShanSanNvHe\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />唐山三女河机场\n                </li>\n                <li data-value=\"TCZ\" data-tags=\"TengChongTuoFeng\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />腾冲驼峰机场\n                </li>\n                <li data-value=\"TSN\" data-tags=\"TianJinBinHaiGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />天津滨海国际机场\n                </li>\n                <li data-value=\"TGO\" data-tags=\"TongLiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />通辽机场\n                </li>\n                <li data-value=\"TEN\" data-tags=\"TongRenFengHuang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />铜仁凤凰机场\n                </li>\n                <li data-group=\"W\" class=\"mui-table-view-divider mui-indexed-list-group\">W</li>\n                <li data-value=\"WXN\" data-tags=\"WanZhouWuQiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />万州五桥机场\n                </li>\n                <li data-value=\"WEF\" data-tags=\"WeiFang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />潍坊机场\n                </li>\n                <li data-value=\"WEH\" data-tags=\"WeiHaiDaShuiBo\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />威海大水泊机场\n                </li>\n                <li data-value=\"WNH\" data-tags=\"WenShanPuZheHei\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />文山普者黑机场\n                </li>\n                <li data-value=\"WNZ\" data-tags=\"WenZhouYongQiangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />温州永强国际机场\n                </li>\n                <li data-value=\"WUA\" data-tags=\"WuHai\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />乌海机场\n                </li>\n                <li data-value=\"WUH\" data-tags=\"WuHanTianHeGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />武汉天河国际机场\n                </li>\n                <li data-value=\"HLH\" data-tags=\"WuLanHaoTe\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />乌兰浩特机场\n                </li>\n                <li data-value=\"URC\" data-tags=\"WuLuMuQiDiWoBaoGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />乌鲁木齐地窝堡国际机场\n                </li>\n                <li data-value=\"WUS\" data-tags=\"WuYiShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />武夷山机场\n                </li>\n                <li data-value=\"WUZ\" data-tags=\"WuZhouChangZhouDao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />梧州长洲岛机场\n                </li>\n                <li data-group=\"X\" class=\"mui-table-view-divider mui-indexed-list-group\">X</li>\n                <li data-value=\"XIY\" data-tags=\"XiAnXianYangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />西安咸阳国际机场\n                </li>\n                <li data-value=\"XIC\" data-tags=\"XiChangQingShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />西昌青山机场\n                </li>\n                <li data-value=\"XIL\" data-tags=\"XiLinHaoTe\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />锡林浩特机场\n                </li>\n                <li data-value=\"XNN\" data-tags=\"XiNingCaoJiaBao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />西宁曹家堡机场\n                </li>\n                <li data-value=\"JHG\" data-tags=\"XiShuangBanNaGaSa\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />西双版纳嘎洒机场\n                </li>\n                <li data-value=\"XMN\" data-tags=\"XiaMenGaoQiGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />厦门高崎国际机场\n                </li>\n                <li data-value=\"HKG\" data-tags=\"XiangGangGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />香港国际机场\n                </li>\n                <li data-value=\"XFN\" data-tags=\"XiangYangLiuJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />襄阳刘集机场\n                </li>\n                <li data-value=\"ACX\" data-tags=\"XingYi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />兴义机场\n                </li>\n                <li data-value=\"XUZ\" data-tags=\"XuZhouGuanYin\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />徐州观音机场\n                </li>\n                <li data-group=\"Y\" class=\"mui-table-view-divider mui-indexed-list-group\">Y</li>\n                <li data-value=\"ENY\" data-tags=\"YanAnErShiLiBao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />延安二十里堡机场\n                </li>\n                <li data-value=\"YNZ\" data-tags=\"YanCheng\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />盐城机场\n                </li>\n                <li data-value=\"YNJ\" data-tags=\"YanJiChaoYangChuan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />延吉朝阳川机场\n                </li>\n                <li data-value=\"YNT\" data-tags=\"YanTaiLaiShanGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />烟台莱山国际机场\n                </li>\n                <li data-value=\"YBP\" data-tags=\"YiBinCaiBa\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />宜宾菜坝机场\n                </li>\n                <li data-value=\"YIH\" data-tags=\"YiChangSanXia\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />宜昌三峡机场\n                </li>\n                <li data-value=\"LDS\" data-tags=\"YiChunLinDu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />伊春林都机场\n                </li>\n                <li data-value=\"YIN\" data-tags=\"YiNing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />伊宁机场\n                </li>\n                <li data-value=\"YIW\" data-tags=\"YiWu\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />义乌机场\n                </li>\n                <li data-value=\"INC\" data-tags=\"YinChuanHeDong\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />银川河东机场\n                </li>\n                <li data-value=\"LLF\" data-tags=\"YongZhouLingLing\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />永州零陵机场\n                </li>\n                <li data-value=\"UYN\" data-tags=\"YuLinYuYang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />榆林榆阳机场\n                </li>\n                <li data-value=\"YUS\" data-tags=\"YuShuBaTang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />玉树巴塘机场\n                </li>\n                <li data-value=\"YCU\" data-tags=\"YunChengZhangXiao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />运城张孝机场\n                </li>\n                <li data-group=\"Z\" class=\"mui-table-view-divider mui-indexed-list-group\">Z</li>\n                <li data-value=\"ZHA\" data-tags=\"ZhanJiang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />湛江机场\n                </li>\n                <li data-value=\"ZAT\" data-tags=\"ZhaoTong\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />昭通机场\n                </li>\n                <li data-value=\"CGO\" data-tags=\"ZhengZhouXinZhengGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />郑州新郑国际机场\n                </li>\n                <li data-value=\"HJJ\" data-tags=\"ZhiJiang\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />芷江机场\n                </li>\n                <li data-value=\"CKG\" data-tags=\"ZhongQingJiangBeiGuoJi\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />重庆江北国际机场\n                </li>\n                <li data-value=\"ZHY\" data-tags=\"ZhongWeiXiangShan\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />中卫香山机场\n                </li>\n                <li data-value=\"HSN\" data-tags=\"ZhouShanZhuJiaJian\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />舟山朱家尖机场\n                </li>\n                <li data-value=\"ZUH\" data-tags=\"ZhuHaiSanZao\" class=\"mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left\">\n                    <input type=\"checkbox\" />珠海三灶机场\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

	/***/
},
/* 17 */
/***/function (module, exports) {

	module.exports = "\n  <div v-show=\"!isinselect\">\n      <header class=\"mui-bar mui-bar-nav\">\n          <a v-link=\"'/users'\" class=\" mui-icon mui-icon-left-nav mui-pull-left\"></a>\n          <h1 class=\"mui-title\">普通列表</h1>\n      </header>\n      <div class=\"mui-content\">\n          <form id=\"mainForm\" class=\"mui-input-group\">\n              <div class=\"mui-input-row\">\n                  <label>用户</label>\n                  <input type=\"text\" v-model=\"dataStore.userName\" class=\"mui-input-clear\" name=\"userName\" required />\n              </div>\n              <div class=\"mui-input-row\">\n                  <label>邮箱</label>\n                  <input type=\"email\" v-model=\"dataStore.email\" name=\"email\" class=\"mui-input-clear\" required />\n              </div>\n              <div class=\"mui-input-row\">\n                  <label class=\"col-md-2 control-label\">手机</label>\n                  <input type=\"tel\" v-model=\"dataStore.phoneNumber\" name=\"phoneNumber\" class=\"mui-input-clear\" required />\n              </div>\n              <div class=\"mui-input-row\">\n                  <label>密码</label>\n\n                  <input type=\"password\" v-model=\"dataStore.passwordHash\" class=\"mui-input-password\" />\n\n              </div>\n              <div class=\"mui-input-row\">\n                  <label>重复密码</label>\n                  <input type=\"password\" class=\"mui-input-password\" />\n              </div>\n              <div class=\"mui-input-row\">\n                  <label>选择测试</label>\n                  <input type=\"text\"  v-model=\"selectedval\" v-on:click=\"openselect\" required placeholder=\"请选择\" />\n              </div>\n              <div class=\"mui-button-row\">\n                  <button type=\"submit\" class=\"mui-btn mui-btn-primary\"> 保存 </button>\n                  <a v-link=\"{path:'/users'}\" class=\"mui-btn mui-btn-danger\"> 取消 </a>\n              </div>\n          </form>\n      </div>\n  </div>\n<div v-show=\"isinselect\">\n    <my-select :isinselect.sync=\"isinselect\" :selected.sync=\"selectedval\" ></my-select>\n</div>\n";

	/***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
		console.warn("[vue-loader] components\\login.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-0f039de0/login.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 19 */
/***/function (module, exports) {

	"use strict";

	module.exports = {
		data: {},

		ready: function ready() {},
		methods: {
			login: function login() {
				console.log(this.$router);
				localStorage.setItem("user", "admin");
				this.$router.go({ path: "/" });
			}
		}
	};

	/***/
},
/* 20 */
/***/function (module, exports) {

	module.exports = "\n<header class=\"mui-bar mui-bar-nav\">\n    <h1 class=\"mui-title\">登录</h1>\n</header>\n<div class=\"mui-content\">\n    <form id='login-form' class=\"mui-input-group\">\n        <div class=\"mui-input-row\">\n            <label>账号</label>\n            <input v-model=\"account\" type=\"text\" class=\"mui-input-clear mui-input\" placeholder=\"请输入账号\">\n        </div>\n        <div class=\"mui-input-row\">\n            <label>密码</label>\n            <input v-model=\"password\" type=\"password\" class=\"mui-input-clear mui-input\" placeholder=\"请输入密码\">\n        </div>\n    </form>\n    <form class=\"mui-input-group\">\n        <ul class=\"mui-table-view mui-table-view-chevron\">\n            <li class=\"mui-table-view-cell\">\n                自动登录\n                <div id=\"autoLogin\" class=\"mui-switch\">\n                    <div class=\"mui-switch-handle\"></div>\n                </div>\n            </li>\n        </ul>\n    </form>\n    <div class=\"mui-content-padded\">\n        <button v-on:click=\"login\" class=\"mui-btn mui-btn-block mui-btn-primary\">登录</button>\n        <div class=\"link-area\">\n            <a id='reg'>注册账号</a> <span class=\"spliter\">|</span> <a id='forgetPassword'>忘记密码</a>\n        </div>\n    </div>\n    <div class=\"mui-content-padded oauth-area\">\n    </div>\n</div>\n";

	/***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_template__ = __webpack_require__(22);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-5cd520a6/foo.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 22 */
/***/function (module, exports) {

	module.exports = "\n<p>This is foo!</p>\n<a v-link=\"{path:'users/edit'}\"> go bar</a>\n";

	/***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_template__ = __webpack_require__(24);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
		(typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
		(function () {
			module.hot.accept();
			var hotAPI = require("vue-hot-reload-api");
			hotAPI.install(require("vue"), false);
			if (!hotAPI.compatible) return;
			var id = "_v-337a1f0c/bar.vue";
			if (!module.hot.data) {
				hotAPI.createRecord(id, module.exports);
			} else {
				hotAPI.update(id, module.exports, __vue_template__);
			}
		})();
	}

	/***/
},
/* 24 */
/***/function (module, exports) {

	module.exports = "\n<p>This is bar!</p>\n<a v-link=\"{path:'/users'}\"> go foo</a>\n";

	/***/
}
/******/]);