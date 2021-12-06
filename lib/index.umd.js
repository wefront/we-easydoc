(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.EasyDoc = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function querySelector(docId) {
        var arr1 = document.querySelectorAll("[docId~=" + docId + "]");
        var arr2 = document.querySelectorAll("[doc-id~=" + docId + "]");
        var arr3 = document.querySelectorAll("[docid~=" + docId + "]");
        var arr4 = document.querySelectorAll("[data-docId~=" + docId + "]");
        var arr5 = document.querySelectorAll("[data-doc-id~=" + docId + "]");
        var arr6 = document.querySelectorAll("[data-docid~=" + docId + "]");
        var result = [];
        arr1.forEach(function (item) { return result.push(item); });
        arr2.forEach(function (item) { return result.push(item); });
        arr3.forEach(function (item) { return result.push(item); });
        arr4.forEach(function (item) { return result.push(item); });
        arr5.forEach(function (item) { return result.push(item); });
        arr6.forEach(function (item) { return result.push(item); });
        return result;
    }
    function getFirstLocation(direction) {
        var f = direction[0];
        return f;
    }
    function setDomLocation(location, dom) {
        var l = getFirstLocation(location.direction);
        var x = location.x, y = location.y;
        var width = location.width, height = location.height, zIndex = location.zIndex;
        switch (l) {
            case 'T':
                y -= 12;
                break;
            case 'B':
                y += 12;
                break;
            case 'R':
                x += 12;
                break;
            case 'L':
                x -= 12;
                break;
        }
        var style = {
            position: 'absolute',
            top: y + "px",
            left: x + "px",
            width: width + "px",
            height: height + "px",
            zIndex: String(zIndex),
        };
        if (dom) {
            dom.style.position = style.position;
            dom.style.top = style.top;
            dom.style.left = style.left;
            dom.style.width = style.width;
            dom.style.height = style.height;
            dom.style.zIndex = style.zIndex;
        }
        return style;
    }

    function requestData(path) {
        if (EasyDocFactory.urlPrefix && !path.startsWith('http')) {
            path = EasyDocFactory.urlPrefix + path;
        }
        return new Promise(function (resolve, reject) {
            useAjaxGetData(path, resolve, reject);
        });
    }
    function useAjaxGetData(path, resolve, reject) {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        }
        else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.open('get', path);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4)
                    return;
                var stateError = xhr.readyState === 4 && xhr.status !== 200;
                if (stateError) {
                }
                var result = xhr.responseText || '';
                if (!result) {
                }
                return resolve(JSON.parse(result));
            }
            catch (error) {
                return reject(error);
            }
        };
    }

    var HandleConfig = {
        minHeight: 100,
        minWidth: 200,
        maxHeight: 250,
        maxWidth: 450,
        editHeight: 60,
        editWidth: 200,
        guideBtnHeight: 50,
        __windowInterval: 20,
        __renderModalClassName: 'easy-modal',
    };

    var AuthEnum;
    (function (AuthEnum) {
        AuthEnum["DEVELOPMENT"] = "DEVELOPMENT";
        AuthEnum["TEST"] = "TEST";
        AuthEnum["PRODUCTION"] = "PRODUCTION";
    })(AuthEnum || (AuthEnum = {}));
    var NodeTypeEnum;
    (function (NodeTypeEnum) {
        NodeTypeEnum["PROJECT"] = "PROJECT";
        NodeTypeEnum["PAGE"] = "PAGE";
        NodeTypeEnum["DOC"] = "DOC";
        NodeTypeEnum["EDIT"] = "EDIT";
        NodeTypeEnum["MANUAL"] = "MANUAL";
        NodeTypeEnum["GUIDE"] = "GUIDE";
    })(NodeTypeEnum || (NodeTypeEnum = {}));
    var TypeDescriptionEnum;
    (function (TypeDescriptionEnum) {
        TypeDescriptionEnum["PROJECTS"] = "\u9879\u76EE\u8BF4\u660E";
        TypeDescriptionEnum["PAGES"] = "\u9875\u9762\u8BF4\u660E";
        TypeDescriptionEnum["DOCS"] = "\u539F\u578B\u8BF4\u660E";
        TypeDescriptionEnum["EDITS"] = "\u7F16\u8F91\u8BF4\u660E";
        TypeDescriptionEnum["MANUALS"] = "\u64CD\u4F5C\u624B\u518C";
        TypeDescriptionEnum["GUIDES"] = "\u7528\u6237\u5F15\u5BFC";
    })(TypeDescriptionEnum || (TypeDescriptionEnum = {}));
    var TypeIconEnum;
    (function (TypeIconEnum) {
        TypeIconEnum["PROJECTS"] = "easy-doc_signboard";
        TypeIconEnum["PAGES"] = "easy-doc_signboard";
        TypeIconEnum["DOCS"] = "easy-doc_template";
        TypeIconEnum["EDITS"] = "easy-doc_editor";
        TypeIconEnum["MANUALS"] = "easy-doc_tradealert";
        TypeIconEnum["GUIDES"] = "easy-doc_trust";
    })(TypeIconEnum || (TypeIconEnum = {}));

    var NodeDirectionEnum;
    (function (NodeDirectionEnum) {
        NodeDirectionEnum["DEFAULT"] = "DEFAULT";
        NodeDirectionEnum["TL"] = "TL";
        NodeDirectionEnum["TR"] = "TR";
        NodeDirectionEnum["TC"] = "TC";
        NodeDirectionEnum["RT"] = "RT";
        NodeDirectionEnum["RB"] = "RB";
        NodeDirectionEnum["RC"] = "RC";
        NodeDirectionEnum["BL"] = "BL";
        NodeDirectionEnum["BR"] = "BR";
        NodeDirectionEnum["BC"] = "BC";
        NodeDirectionEnum["LT"] = "LT";
        NodeDirectionEnum["LB"] = "LB";
        NodeDirectionEnum["LC"] = "LC";
        NodeDirectionEnum["CENTER"] = "CENTER";
    })(NodeDirectionEnum || (NodeDirectionEnum = {}));

    var EventEnum;
    (function (EventEnum) {
        EventEnum["CLICK"] = "click";
    })(EventEnum || (EventEnum = {}));

    var DocNodeStatus;
    (function (DocNodeStatus) {
        DocNodeStatus["SHRINK"] = "SHRINK";
        DocNodeStatus["UNFOLD"] = "UNFOLD";
    })(DocNodeStatus || (DocNodeStatus = {}));

    function getStringLength(str) {
        if (!str || str.length === 0) {
            return 0;
        }
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            var a = str.charAt(i);
            if (a.match(/[^\x00-\xff]/gi) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    }
    function computedZIndex(elem, zIndex) {
        if (zIndex === void 0) { zIndex = 0; }
        if (document.body === elem) {
            return zIndex;
        }
        var style = window.getComputedStyle(elem);
        if (style.position !== 'static' && style.zIndex !== 'auto') {
            var newZIndex = parseInt(style.zIndex, 10);
            if (newZIndex > zIndex) {
                zIndex = newZIndex;
            }
        }
        return computedZIndex(elem.parentElement, zIndex);
    }
    function hereHasNode(node, nodes, direction) {
        return nodes.some(function (item) { return item.docId === node.docId
            && direction === item.direction
            && item.domLocation.x === node.domLocation.x
            && item.domLocation.y === node.domLocation.y
            && node.renderId > item.renderId; });
    }
    function canRight(node) {
        return node.domLocation.x + node.domLocation.width + node.width < window.innerWidth - HandleConfig.__windowInterval;
    }
    function modalInRightTop(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.RT))
            return false;
        if (canRight(node) && node.domLocation.y + node.height < document.body.clientHeight - HandleConfig.__windowInterval) {
            node.x = node.domLocation.x + node.domLocation.width;
            node.y = node.domLocation.y;
            node.direction = NodeDirectionEnum.RT;
            return true;
        }
        return false;
    }
    function modalInRightBottom(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.RB))
            return false;
        if (canRight(node) && node.domLocation.y + node.domLocation.height - node.height > HandleConfig.__windowInterval) {
            node.x = node.domLocation.x + node.domLocation.width;
            node.y = node.domLocation.y + node.domLocation.height - node.height;
            node.direction = NodeDirectionEnum.RB;
            return true;
        }
        return false;
    }
    function modalInRightCenter(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.RC))
            return false;
        if (canRight(node)) {
            var yCenter = node.domLocation.y + node.domLocation.height / 2;
            var yTop = yCenter - node.height / 2;
            var yBottom = yCenter + node.height / 2;
            if (yTop > HandleConfig.__windowInterval && yBottom < document.body.clientHeight - HandleConfig.__windowInterval) {
                node.x = node.domLocation.x + node.domLocation.width;
                node.y = yTop;
                node.direction = NodeDirectionEnum.RC;
                return true;
            }
            return false;
        }
        return false;
    }
    function canLeft(node) {
        return node.domLocation.x - node.width > HandleConfig.__windowInterval;
    }
    function modalInLeftTop(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.LT))
            return false;
        if (canLeft(node) && node.domLocation.y + node.height < document.body.clientHeight - HandleConfig.__windowInterval) {
            node.x = node.domLocation.x - node.width;
            node.y = node.domLocation.y;
            node.direction = NodeDirectionEnum.LT;
            return true;
        }
    }
    function modalInLeftBottom(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.LB))
            return false;
        if (canLeft(node) && node.domLocation.y + node.domLocation.height - node.height > HandleConfig.__windowInterval) {
            node.x = node.domLocation.x - node.width;
            node.y = node.domLocation.y + node.domLocation.height - node.height;
            node.direction = NodeDirectionEnum.LB;
            return true;
        }
        return false;
    }
    function modalInLeftCenter(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.LC))
            return false;
        if (canLeft(node)) {
            var yCenter = node.domLocation.y + node.domLocation.height / 2;
            var yTop = yCenter - node.height / 2;
            var yBottom = yCenter + node.height / 2;
            if (yTop > HandleConfig.__windowInterval && yBottom < document.body.clientHeight - HandleConfig.__windowInterval) {
                node.x = node.domLocation.x - node.width;
                node.y = yTop;
                node.direction = NodeDirectionEnum.LC;
                return true;
            }
            return false;
        }
        return false;
    }
    function canTop(node) {
        return node.domLocation.y - node.height > HandleConfig.__windowInterval;
    }
    function modalInTopLeft(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.TL))
            return false;
        if (canTop(node) && node.domLocation.x + node.width < window.innerWidth - HandleConfig.__windowInterval) {
            node.x = node.domLocation.x;
            node.y = node.domLocation.y - node.height;
            node.direction = NodeDirectionEnum.TL;
            return true;
        }
        return false;
    }
    function modalInTopRight(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.TR))
            return false;
        if (canTop(node) && node.domLocation.x + node.domLocation.width - node.width > HandleConfig.__windowInterval) {
            node.x = node.domLocation.x + node.domLocation.width - node.width;
            node.y = node.domLocation.y - node.height;
            node.direction = NodeDirectionEnum.TR;
            return true;
        }
        return false;
    }
    function modalInTopCenter(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.TC))
            return false;
        if (canTop(node)) {
            var xCenter = node.domLocation.x + node.domLocation.width / 2;
            var xLeft = xCenter - node.width / 2;
            var xRight = xCenter + node.width / 2;
            if (xLeft > HandleConfig.__windowInterval && xRight < window.innerWidth - HandleConfig.__windowInterval) {
                node.x = xLeft;
                node.y = node.domLocation.y - node.height;
                node.direction = NodeDirectionEnum.TC;
                return true;
            }
            return false;
        }
        return false;
    }
    function canBottom(node) {
        return node.domLocation.y + node.domLocation.height + node.height < document.body.clientHeight - HandleConfig.__windowInterval;
    }
    function modalInBottomLeft(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.BL))
            return false;
        if (canBottom(node) && node.domLocation.x + node.width < window.innerWidth - HandleConfig.__windowInterval) {
            node.x = node.domLocation.x;
            node.y = node.domLocation.y + node.domLocation.height;
            node.direction = NodeDirectionEnum.BL;
            return true;
        }
        return false;
    }
    function modalInBottomRight(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.BR))
            return false;
        if (canBottom(node) && node.domLocation.x + node.domLocation.width - node.width > HandleConfig.__windowInterval) {
            node.x = node.domLocation.x + node.domLocation.width - node.width;
            node.y = node.domLocation.y + node.domLocation.height;
            node.direction = NodeDirectionEnum.BR;
            return true;
        }
        return false;
    }
    function modalInBottomCenter(node, nodes) {
        if (hereHasNode(node, nodes, NodeDirectionEnum.BC))
            return false;
        if (canBottom(node)) {
            var xCenter = node.domLocation.x + node.domLocation.width / 2;
            var xLeft = xCenter - node.width / 2;
            var xRight = xCenter + node.width / 2;
            if (xLeft > HandleConfig.__windowInterval && xRight < document.body.clientHeight - HandleConfig.__windowInterval) {
                node.x = xLeft;
                node.y = node.domLocation.y + node.domLocation.height;
                node.direction = NodeDirectionEnum.BC;
                return true;
            }
            return false;
        }
        return false;
    }
    function modalInDefaultCenter(node) {
        node.x = node.domLocation.x + node.domLocation.width / 2;
        node.y = node.domLocation.y + node.domLocation.height / 2;
        node.direction = NodeDirectionEnum.DEFAULT;
        return true;
    }
    function hrefAIsClassChild(hrefA, className) {
        var wrapper = hrefA;
        while (wrapper !== document.body) {
            if (wrapper.className && wrapper.className.indexOf(className) !== -1) {
                return true;
            }
            wrapper = wrapper.parentElement;
        }
        return false;
    }

    function readEasyDocCache() {
        var value = sessionStorage.getItem('EasyDoc');
        return value;
    }
    function getEasyDocCache() {
        var EasyDocCache = readEasyDocCache();
        var data = {};
        if (EasyDocCache) {
            data = JSON.parse(EasyDocCache);
        }
        return data;
    }
    function readCache(key) {
        var value = readEasyDocCache();
        if (!value) {
            return null;
        }
        var data = JSON.parse(value);
        return key ? data[key] : data;
    }
    function writeMatchMapCache(value) {
        if (!value)
            return;
        var data = getEasyDocCache();
        data.matchMap = value;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeJsonDataCache(url, value) {
        if (!value)
            return;
        var data = getEasyDocCache();
        if (!data.jsonData) {
            data.jsonData = {};
        }
        data.jsonData[url] = value;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeManualsCache(value) {
        if (!value)
            return;
        var data = getEasyDocCache();
        data.manuals = value;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeProjectsCache(value) {
        if (!value)
            return;
        var data = getEasyDocCache();
        data.projects = value;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeNodeTypeCache(nodeType) {
        var data = getEasyDocCache();
        data.nodeType = nodeType;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeCurrentStepCache(step) {
        var data = getEasyDocCache();
        data.currentStep = step;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeCurrentManualCache(manual) {
        var data = getEasyDocCache();
        data.currentManual = manual;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }
    function writeCurrentGuideCache(guide) {
        var data = getEasyDocCache();
        data.currentGuide = guide;
        sessionStorage.setItem('EasyDoc', JSON.stringify(data));
    }

    function setPosition(direction, positionMap) {
        return positionMap[direction] || { top: 0, left: 0 };
    }

    /*!
     * Vue.js v2.6.14
     * (c) 2014-2021 Evan You
     * Released under the MIT License.
     */
    /*  */

    var emptyObject = Object.freeze({});

    // These helpers produce better VM code in JS engines due to their
    // explicitness and function inlining.
    function isUndef (v) {
      return v === undefined || v === null
    }

    function isDef (v) {
      return v !== undefined && v !== null
    }

    function isTrue (v) {
      return v === true
    }

    function isFalse (v) {
      return v === false
    }

    /**
     * Check if value is primitive.
     */
    function isPrimitive (value) {
      return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
      )
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
    function isObject (obj) {
      return obj !== null && typeof obj === 'object'
    }

    /**
     * Get the raw type string of a value, e.g., [object Object].
     */
    var _toString = Object.prototype.toString;

    function toRawType (value) {
      return _toString.call(value).slice(8, -1)
    }

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
    function isPlainObject (obj) {
      return _toString.call(obj) === '[object Object]'
    }

    function isRegExp (v) {
      return _toString.call(v) === '[object RegExp]'
    }

    /**
     * Check if val is a valid array index.
     */
    function isValidArrayIndex (val) {
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }

    function isPromise (val) {
      return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
      )
    }

    /**
     * Convert a value to a string that is actually rendered.
     */
    function toString (val) {
      return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
          ? JSON.stringify(val, null, 2)
          : String(val)
    }

    /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     */
    function toNumber (val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n
    }

    /**
     * Make a map and return a function for checking if a key
     * is in that map.
     */
    function makeMap (
      str,
      expectsLowerCase
    ) {
      var map = Object.create(null);
      var list = str.split(',');
      for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase
        ? function (val) { return map[val.toLowerCase()]; }
        : function (val) { return map[val]; }
    }

    /**
     * Check if a tag is a built-in tag.
     */
    var isBuiltInTag = makeMap('slot,component', true);

    /**
     * Check if an attribute is a reserved attribute.
     */
    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

    /**
     * Remove an item from an array.
     */
    function remove (arr, item) {
      if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
          return arr.splice(index, 1)
        }
      }
    }

    /**
     * Check whether an object has the property.
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasOwn (obj, key) {
      return hasOwnProperty.call(obj, key)
    }

    /**
     * Create a cached version of a pure function.
     */
    function cached (fn) {
      var cache = Object.create(null);
      return (function cachedFn (str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
      })
    }

    /**
     * Camelize a hyphen-delimited string.
     */
    var camelizeRE = /-(\w)/g;
    var camelize = cached(function (str) {
      return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
    });

    /**
     * Capitalize a string.
     */
    var capitalize = cached(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    });

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = cached(function (str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase()
    });

    /**
     * Simple bind polyfill for environments that do not support it,
     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
     * since native bind is now performant enough in most browsers.
     * But removing it would mean breaking code that was able to run in
     * PhantomJS 1.x, so this must be kept for backward compatibility.
     */

    /* istanbul ignore next */
    function polyfillBind (fn, ctx) {
      function boundFn (a) {
        var l = arguments.length;
        return l
          ? l > 1
            ? fn.apply(ctx, arguments)
            : fn.call(ctx, a)
          : fn.call(ctx)
      }

      boundFn._length = fn.length;
      return boundFn
    }

    function nativeBind (fn, ctx) {
      return fn.bind(ctx)
    }

    var bind = Function.prototype.bind
      ? nativeBind
      : polyfillBind;

    /**
     * Convert an Array-like object to a real Array.
     */
    function toArray (list, start) {
      start = start || 0;
      var i = list.length - start;
      var ret = new Array(i);
      while (i--) {
        ret[i] = list[i + start];
      }
      return ret
    }

    /**
     * Mix properties into target object.
     */
    function extend (to, _from) {
      for (var key in _from) {
        to[key] = _from[key];
      }
      return to
    }

    /**
     * Merge an Array of Objects into a single Object.
     */
    function toObject (arr) {
      var res = {};
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          extend(res, arr[i]);
        }
      }
      return res
    }

    /* eslint-disable no-unused-vars */

    /**
     * Perform no operation.
     * Stubbing args to make Flow happy without leaving useless transpiled code
     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
     */
    function noop (a, b, c) {}

    /**
     * Always return false.
     */
    var no = function (a, b, c) { return false; };

    /* eslint-enable no-unused-vars */

    /**
     * Return the same value.
     */
    var identity = function (_) { return _; };

    /**
     * Check if two values are loosely equal - that is,
     * if they are plain objects, do they have the same shape?
     */
    function looseEqual (a, b) {
      if (a === b) { return true }
      var isObjectA = isObject(a);
      var isObjectB = isObject(b);
      if (isObjectA && isObjectB) {
        try {
          var isArrayA = Array.isArray(a);
          var isArrayB = Array.isArray(b);
          if (isArrayA && isArrayB) {
            return a.length === b.length && a.every(function (e, i) {
              return looseEqual(e, b[i])
            })
          } else if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime()
          } else if (!isArrayA && !isArrayB) {
            var keysA = Object.keys(a);
            var keysB = Object.keys(b);
            return keysA.length === keysB.length && keysA.every(function (key) {
              return looseEqual(a[key], b[key])
            })
          } else {
            /* istanbul ignore next */
            return false
          }
        } catch (e) {
          /* istanbul ignore next */
          return false
        }
      } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
      } else {
        return false
      }
    }

    /**
     * Return the first index at which a loosely equal value can be
     * found in the array (if value is a plain object, the array must
     * contain an object of the same shape), or -1 if it is not present.
     */
    function looseIndexOf (arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (looseEqual(arr[i], val)) { return i }
      }
      return -1
    }

    /**
     * Ensure a function is called only once.
     */
    function once (fn) {
      var called = false;
      return function () {
        if (!called) {
          called = true;
          fn.apply(this, arguments);
        }
      }
    }

    var SSR_ATTR = 'data-server-rendered';

    var ASSET_TYPES = [
      'component',
      'directive',
      'filter'
    ];

    var LIFECYCLE_HOOKS = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'beforeDestroy',
      'destroyed',
      'activated',
      'deactivated',
      'errorCaptured',
      'serverPrefetch'
    ];

    /*  */



    var config = ({
      /**
       * Option merge strategies (used in core/util/options)
       */
      // $flow-disable-line
      optionMergeStrategies: Object.create(null),

      /**
       * Whether to suppress warnings.
       */
      silent: false,

      /**
       * Show production mode tip message on boot?
       */
      productionTip: "development" !== 'production',

      /**
       * Whether to enable devtools
       */
      devtools: "development" !== 'production',

      /**
       * Whether to record perf
       */
      performance: false,

      /**
       * Error handler for watcher errors
       */
      errorHandler: null,

      /**
       * Warn handler for watcher warns
       */
      warnHandler: null,

      /**
       * Ignore certain custom elements
       */
      ignoredElements: [],

      /**
       * Custom user key aliases for v-on
       */
      // $flow-disable-line
      keyCodes: Object.create(null),

      /**
       * Check if a tag is reserved so that it cannot be registered as a
       * component. This is platform-dependent and may be overwritten.
       */
      isReservedTag: no,

      /**
       * Check if an attribute is reserved so that it cannot be used as a component
       * prop. This is platform-dependent and may be overwritten.
       */
      isReservedAttr: no,

      /**
       * Check if a tag is an unknown element.
       * Platform-dependent.
       */
      isUnknownElement: no,

      /**
       * Get the namespace of an element
       */
      getTagNamespace: noop,

      /**
       * Parse the real tag name for the specific platform.
       */
      parsePlatformTagName: identity,

      /**
       * Check if an attribute must be bound using property, e.g. value
       * Platform-dependent.
       */
      mustUseProp: no,

      /**
       * Perform updates asynchronously. Intended to be used by Vue Test Utils
       * This will significantly reduce performance if set to false.
       */
      async: true,

      /**
       * Exposed for legacy reasons
       */
      _lifecycleHooks: LIFECYCLE_HOOKS
    });

    /*  */

    /**
     * unicode letters used for parsing html tags, component names and property paths.
     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
     */
    var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    /**
     * Check if a string starts with $ or _
     */
    function isReserved (str) {
      var c = (str + '').charCodeAt(0);
      return c === 0x24 || c === 0x5F
    }

    /**
     * Define a property.
     */
    function def (obj, key, val, enumerable) {
      Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
      });
    }

    /**
     * Parse simple path.
     */
    var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
    function parsePath (path) {
      if (bailRE.test(path)) {
        return
      }
      var segments = path.split('.');
      return function (obj) {
        for (var i = 0; i < segments.length; i++) {
          if (!obj) { return }
          obj = obj[segments[i]];
        }
        return obj
      }
    }

    /*  */

    // can we use __proto__?
    var hasProto = '__proto__' in {};

    // Browser environment sniffing
    var inBrowser = typeof window !== 'undefined';
    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
    var isIE = UA && /msie|trident/.test(UA);
    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
    var isEdge = UA && UA.indexOf('edge/') > 0;
    var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
    var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
    var isPhantomJS = UA && /phantomjs/.test(UA);
    var isFF = UA && UA.match(/firefox\/(\d+)/);

    // Firefox has a "watch" function on Object.prototype...
    var nativeWatch = ({}).watch;

    var supportsPassive = false;
    if (inBrowser) {
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
          get: function get () {
            /* istanbul ignore next */
            supportsPassive = true;
          }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    }

    // this needs to be lazy-evaled because vue may be required before
    // vue-server-renderer can set VUE_ENV
    var _isServer;
    var isServerRendering = function () {
      if (_isServer === undefined) {
        /* istanbul ignore if */
        if (!inBrowser && !inWeex && typeof global !== 'undefined') {
          // detect presence of vue-server-renderer and avoid
          // Webpack shimming the process
          _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
        } else {
          _isServer = false;
        }
      }
      return _isServer
    };

    // detect devtools
    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    /* istanbul ignore next */
    function isNative (Ctor) {
      return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
    }

    var hasSymbol =
      typeof Symbol !== 'undefined' && isNative(Symbol) &&
      typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

    var _Set;
    /* istanbul ignore if */ // $flow-disable-line
    if (typeof Set !== 'undefined' && isNative(Set)) {
      // use native Set when available.
      _Set = Set;
    } else {
      // a non-standard Set polyfill that only works with primitive keys.
      _Set = /*@__PURE__*/(function () {
        function Set () {
          this.set = Object.create(null);
        }
        Set.prototype.has = function has (key) {
          return this.set[key] === true
        };
        Set.prototype.add = function add (key) {
          this.set[key] = true;
        };
        Set.prototype.clear = function clear () {
          this.set = Object.create(null);
        };

        return Set;
      }());
    }

    /*  */

    var warn = noop;
    var tip = noop;
    var generateComponentTrace = (noop); // work around flow check
    var formatComponentName = (noop);

    {
      var hasConsole = typeof console !== 'undefined';
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = function (str) { return str
        .replace(classifyRE, function (c) { return c.toUpperCase(); })
        .replace(/[-_]/g, ''); };

      warn = function (msg, vm) {
        var trace = vm ? generateComponentTrace(vm) : '';

        if (config.warnHandler) {
          config.warnHandler.call(null, msg, vm, trace);
        } else if (hasConsole && (!config.silent)) {
          console.error(("[Vue warn]: " + msg + trace));
        }
      };

      tip = function (msg, vm) {
        if (hasConsole && (!config.silent)) {
          console.warn("[Vue tip]: " + msg + (
            vm ? generateComponentTrace(vm) : ''
          ));
        }
      };

      formatComponentName = function (vm, includeFile) {
        if (vm.$root === vm) {
          return '<Root>'
        }
        var options = typeof vm === 'function' && vm.cid != null
          ? vm.options
          : vm._isVue
            ? vm.$options || vm.constructor.options
            : vm;
        var name = options.name || options._componentTag;
        var file = options.__file;
        if (!name && file) {
          var match = file.match(/([^/\\]+)\.vue$/);
          name = match && match[1];
        }

        return (
          (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
          (file && includeFile !== false ? (" at " + file) : '')
        )
      };

      var repeat = function (str, n) {
        var res = '';
        while (n) {
          if (n % 2 === 1) { res += str; }
          if (n > 1) { str += str; }
          n >>= 1;
        }
        return res
      };

      generateComponentTrace = function (vm) {
        if (vm._isVue && vm.$parent) {
          var tree = [];
          var currentRecursiveSequence = 0;
          while (vm) {
            if (tree.length > 0) {
              var last = tree[tree.length - 1];
              if (last.constructor === vm.constructor) {
                currentRecursiveSequence++;
                vm = vm.$parent;
                continue
              } else if (currentRecursiveSequence > 0) {
                tree[tree.length - 1] = [last, currentRecursiveSequence];
                currentRecursiveSequence = 0;
              }
            }
            tree.push(vm);
            vm = vm.$parent;
          }
          return '\n\nfound in\n\n' + tree
            .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
                ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
                : formatComponentName(vm))); })
            .join('\n')
        } else {
          return ("\n\n(found in " + (formatComponentName(vm)) + ")")
        }
      };
    }

    /*  */

    var uid = 0;

    /**
     * A dep is an observable that can have multiple
     * directives subscribing to it.
     */
    var Dep = function Dep () {
      this.id = uid++;
      this.subs = [];
    };

    Dep.prototype.addSub = function addSub (sub) {
      this.subs.push(sub);
    };

    Dep.prototype.removeSub = function removeSub (sub) {
      remove(this.subs, sub);
    };

    Dep.prototype.depend = function depend () {
      if (Dep.target) {
        Dep.target.addDep(this);
      }
    };

    Dep.prototype.notify = function notify () {
      // stabilize the subscriber list first
      var subs = this.subs.slice();
      if ( !config.async) {
        // subs aren't sorted in scheduler if not running async
        // we need to sort them now to make sure they fire in correct
        // order
        subs.sort(function (a, b) { return a.id - b.id; });
      }
      for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
      }
    };

    // The current target watcher being evaluated.
    // This is globally unique because only one watcher
    // can be evaluated at a time.
    Dep.target = null;
    var targetStack = [];

    function pushTarget (target) {
      targetStack.push(target);
      Dep.target = target;
    }

    function popTarget () {
      targetStack.pop();
      Dep.target = targetStack[targetStack.length - 1];
    }

    /*  */

    var VNode = function VNode (
      tag,
      data,
      children,
      text,
      elm,
      context,
      componentOptions,
      asyncFactory
    ) {
      this.tag = tag;
      this.data = data;
      this.children = children;
      this.text = text;
      this.elm = elm;
      this.ns = undefined;
      this.context = context;
      this.fnContext = undefined;
      this.fnOptions = undefined;
      this.fnScopeId = undefined;
      this.key = data && data.key;
      this.componentOptions = componentOptions;
      this.componentInstance = undefined;
      this.parent = undefined;
      this.raw = false;
      this.isStatic = false;
      this.isRootInsert = true;
      this.isComment = false;
      this.isCloned = false;
      this.isOnce = false;
      this.asyncFactory = asyncFactory;
      this.asyncMeta = undefined;
      this.isAsyncPlaceholder = false;
    };

    var prototypeAccessors = { child: { configurable: true } };

    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    prototypeAccessors.child.get = function () {
      return this.componentInstance
    };

    Object.defineProperties( VNode.prototype, prototypeAccessors );

    var createEmptyVNode = function (text) {
      if ( text === void 0 ) text = '';

      var node = new VNode();
      node.text = text;
      node.isComment = true;
      return node
    };

    function createTextVNode (val) {
      return new VNode(undefined, undefined, undefined, String(val))
    }

    // optimized shallow clone
    // used for static nodes and slot nodes because they may be reused across
    // multiple renders, cloning them avoids errors when DOM manipulations rely
    // on their elm reference.
    function cloneVNode (vnode) {
      var cloned = new VNode(
        vnode.tag,
        vnode.data,
        // #7975
        // clone children array to avoid mutating original in case of cloning
        // a child.
        vnode.children && vnode.children.slice(),
        vnode.text,
        vnode.elm,
        vnode.context,
        vnode.componentOptions,
        vnode.asyncFactory
      );
      cloned.ns = vnode.ns;
      cloned.isStatic = vnode.isStatic;
      cloned.key = vnode.key;
      cloned.isComment = vnode.isComment;
      cloned.fnContext = vnode.fnContext;
      cloned.fnOptions = vnode.fnOptions;
      cloned.fnScopeId = vnode.fnScopeId;
      cloned.asyncMeta = vnode.asyncMeta;
      cloned.isCloned = true;
      return cloned
    }

    /*
     * not type checking this file because flow doesn't play well with
     * dynamically accessing methods on Array prototype
     */

    var arrayProto = Array.prototype;
    var arrayMethods = Object.create(arrayProto);

    var methodsToPatch = [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ];

    /**
     * Intercept mutating methods and emit events
     */
    methodsToPatch.forEach(function (method) {
      // cache original method
      var original = arrayProto[method];
      def(arrayMethods, method, function mutator () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var result = original.apply(this, args);
        var ob = this.__ob__;
        var inserted;
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args;
            break
          case 'splice':
            inserted = args.slice(2);
            break
        }
        if (inserted) { ob.observeArray(inserted); }
        // notify change
        ob.dep.notify();
        return result
      });
    });

    /*  */

    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

    /**
     * In some cases we may want to disable observation inside a component's
     * update computation.
     */
    var shouldObserve = true;

    function toggleObserving (value) {
      shouldObserve = value;
    }

    /**
     * Observer class that is attached to each observed
     * object. Once attached, the observer converts the target
     * object's property keys into getter/setters that
     * collect dependencies and dispatch updates.
     */
    var Observer = function Observer (value) {
      this.value = value;
      this.dep = new Dep();
      this.vmCount = 0;
      def(value, '__ob__', this);
      if (Array.isArray(value)) {
        if (hasProto) {
          protoAugment(value, arrayMethods);
        } else {
          copyAugment(value, arrayMethods, arrayKeys);
        }
        this.observeArray(value);
      } else {
        this.walk(value);
      }
    };

    /**
     * Walk through all properties and convert them into
     * getter/setters. This method should only be called when
     * value type is Object.
     */
    Observer.prototype.walk = function walk (obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
        defineReactive$$1(obj, keys[i]);
      }
    };

    /**
     * Observe a list of Array items.
     */
    Observer.prototype.observeArray = function observeArray (items) {
      for (var i = 0, l = items.length; i < l; i++) {
        observe(items[i]);
      }
    };

    // helpers

    /**
     * Augment a target Object or Array by intercepting
     * the prototype chain using __proto__
     */
    function protoAugment (target, src) {
      /* eslint-disable no-proto */
      target.__proto__ = src;
      /* eslint-enable no-proto */
    }

    /**
     * Augment a target Object or Array by defining
     * hidden properties.
     */
    /* istanbul ignore next */
    function copyAugment (target, src, keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        def(target, key, src[key]);
      }
    }

    /**
     * Attempt to create an observer instance for a value,
     * returns the new observer if successfully observed,
     * or the existing observer if the value already has one.
     */
    function observe (value, asRootData) {
      if (!isObject(value) || value instanceof VNode) {
        return
      }
      var ob;
      if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
      } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
      ) {
        ob = new Observer(value);
      }
      if (asRootData && ob) {
        ob.vmCount++;
      }
      return ob
    }

    /**
     * Define a reactive property on an Object.
     */
    function defineReactive$$1 (
      obj,
      key,
      val,
      customSetter,
      shallow
    ) {
      var dep = new Dep();

      var property = Object.getOwnPropertyDescriptor(obj, key);
      if (property && property.configurable === false) {
        return
      }

      // cater for pre-defined getter/setters
      var getter = property && property.get;
      var setter = property && property.set;
      if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
      }

      var childOb = !shallow && observe(val);
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
            if (childOb) {
              childOb.dep.depend();
              if (Array.isArray(value)) {
                dependArray(value);
              }
            }
          }
          return value
        },
        set: function reactiveSetter (newVal) {
          var value = getter ? getter.call(obj) : val;
          /* eslint-disable no-self-compare */
          if (newVal === value || (newVal !== newVal && value !== value)) {
            return
          }
          /* eslint-enable no-self-compare */
          if ( customSetter) {
            customSetter();
          }
          // #7981: for accessor properties without setter
          if (getter && !setter) { return }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
      });
    }

    /**
     * Set a property on an object. Adds the new property and
     * triggers change notification if the property doesn't
     * already exist.
     */
    function set (target, key, val) {
      if (
        (isUndef(target) || isPrimitive(target))
      ) {
        warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val
      }
      if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
         warn(
          'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
        );
        return val
      }
      if (!ob) {
        target[key] = val;
        return val
      }
      defineReactive$$1(ob.value, key, val);
      ob.dep.notify();
      return val
    }

    /**
     * Delete a property and trigger change if necessary.
     */
    function del (target, key) {
      if (
        (isUndef(target) || isPrimitive(target))
      ) {
        warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
      }
      if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return
      }
      var ob = (target).__ob__;
      if (target._isVue || (ob && ob.vmCount)) {
         warn(
          'Avoid deleting properties on a Vue instance or its root $data ' +
          '- just set it to null.'
        );
        return
      }
      if (!hasOwn(target, key)) {
        return
      }
      delete target[key];
      if (!ob) {
        return
      }
      ob.dep.notify();
    }

    /**
     * Collect dependencies on array elements when the array is touched, since
     * we cannot intercept array element access like property getters.
     */
    function dependArray (value) {
      for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
        e = value[i];
        e && e.__ob__ && e.__ob__.dep.depend();
        if (Array.isArray(e)) {
          dependArray(e);
        }
      }
    }

    /*  */

    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    var strats = config.optionMergeStrategies;

    /**
     * Options with restrictions
     */
    {
      strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
          warn(
            "option \"" + key + "\" can only be used during instance " +
            'creation with the `new` keyword.'
          );
        }
        return defaultStrat(parent, child)
      };
    }

    /**
     * Helper that recursively merges two data objects together.
     */
    function mergeData (to, from) {
      if (!from) { return to }
      var key, toVal, fromVal;

      var keys = hasSymbol
        ? Reflect.ownKeys(from)
        : Object.keys(from);

      for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__') { continue }
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
          set(to, key, fromVal);
        } else if (
          toVal !== fromVal &&
          isPlainObject(toVal) &&
          isPlainObject(fromVal)
        ) {
          mergeData(toVal, fromVal);
        }
      }
      return to
    }

    /**
     * Data
     */
    function mergeDataOrFn (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        // in a Vue.extend merge, both should be functions
        if (!childVal) {
          return parentVal
        }
        if (!parentVal) {
          return childVal
        }
        // when parentVal & childVal are both present,
        // we need to return a function that returns the
        // merged result of both functions... no need to
        // check if parentVal is a function here because
        // it has to be a function to pass previous merges.
        return function mergedDataFn () {
          return mergeData(
            typeof childVal === 'function' ? childVal.call(this, this) : childVal,
            typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
          )
        }
      } else {
        return function mergedInstanceDataFn () {
          // instance merge
          var instanceData = typeof childVal === 'function'
            ? childVal.call(vm, vm)
            : childVal;
          var defaultData = typeof parentVal === 'function'
            ? parentVal.call(vm, vm)
            : parentVal;
          if (instanceData) {
            return mergeData(instanceData, defaultData)
          } else {
            return defaultData
          }
        }
      }
    }

    strats.data = function (
      parentVal,
      childVal,
      vm
    ) {
      if (!vm) {
        if (childVal && typeof childVal !== 'function') {
           warn(
            'The "data" option should be a function ' +
            'that returns a per-instance value in component ' +
            'definitions.',
            vm
          );

          return parentVal
        }
        return mergeDataOrFn(parentVal, childVal)
      }

      return mergeDataOrFn(parentVal, childVal, vm)
    };

    /**
     * Hooks and props are merged as arrays.
     */
    function mergeHook (
      parentVal,
      childVal
    ) {
      var res = childVal
        ? parentVal
          ? parentVal.concat(childVal)
          : Array.isArray(childVal)
            ? childVal
            : [childVal]
        : parentVal;
      return res
        ? dedupeHooks(res)
        : res
    }

    function dedupeHooks (hooks) {
      var res = [];
      for (var i = 0; i < hooks.length; i++) {
        if (res.indexOf(hooks[i]) === -1) {
          res.push(hooks[i]);
        }
      }
      return res
    }

    LIFECYCLE_HOOKS.forEach(function (hook) {
      strats[hook] = mergeHook;
    });

    /**
     * Assets
     *
     * When a vm is present (instance creation), we need to do
     * a three-way merge between constructor options, instance
     * options and parent options.
     */
    function mergeAssets (
      parentVal,
      childVal,
      vm,
      key
    ) {
      var res = Object.create(parentVal || null);
      if (childVal) {
         assertObjectType(key, childVal, vm);
        return extend(res, childVal)
      } else {
        return res
      }
    }

    ASSET_TYPES.forEach(function (type) {
      strats[type + 's'] = mergeAssets;
    });

    /**
     * Watchers.
     *
     * Watchers hashes should not overwrite one
     * another, so we merge them as arrays.
     */
    strats.watch = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      // work around Firefox's Object.prototype.watch...
      if (parentVal === nativeWatch) { parentVal = undefined; }
      if (childVal === nativeWatch) { childVal = undefined; }
      /* istanbul ignore if */
      if (!childVal) { return Object.create(parentVal || null) }
      {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = {};
      extend(ret, parentVal);
      for (var key$1 in childVal) {
        var parent = ret[key$1];
        var child = childVal[key$1];
        if (parent && !Array.isArray(parent)) {
          parent = [parent];
        }
        ret[key$1] = parent
          ? parent.concat(child)
          : Array.isArray(child) ? child : [child];
      }
      return ret
    };

    /**
     * Other object hashes.
     */
    strats.props =
    strats.methods =
    strats.inject =
    strats.computed = function (
      parentVal,
      childVal,
      vm,
      key
    ) {
      if (childVal && "development" !== 'production') {
        assertObjectType(key, childVal, vm);
      }
      if (!parentVal) { return childVal }
      var ret = Object.create(null);
      extend(ret, parentVal);
      if (childVal) { extend(ret, childVal); }
      return ret
    };
    strats.provide = mergeDataOrFn;

    /**
     * Default strategy.
     */
    var defaultStrat = function (parentVal, childVal) {
      return childVal === undefined
        ? parentVal
        : childVal
    };

    /**
     * Validate component names
     */
    function checkComponents (options) {
      for (var key in options.components) {
        validateComponentName(key);
      }
    }

    function validateComponentName (name) {
      if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'should conform to valid custom element name in html5 specification.'
        );
      }
      if (isBuiltInTag(name) || config.isReservedTag(name)) {
        warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + name
        );
      }
    }

    /**
     * Ensure all props option syntax are normalized into the
     * Object-based format.
     */
    function normalizeProps (options, vm) {
      var props = options.props;
      if (!props) { return }
      var res = {};
      var i, val, name;
      if (Array.isArray(props)) {
        i = props.length;
        while (i--) {
          val = props[i];
          if (typeof val === 'string') {
            name = camelize(val);
            res[name] = { type: null };
          } else {
            warn('props must be strings when using array syntax.');
          }
        }
      } else if (isPlainObject(props)) {
        for (var key in props) {
          val = props[key];
          name = camelize(key);
          res[name] = isPlainObject(val)
            ? val
            : { type: val };
        }
      } else {
        warn(
          "Invalid value for option \"props\": expected an Array or an Object, " +
          "but got " + (toRawType(props)) + ".",
          vm
        );
      }
      options.props = res;
    }

    /**
     * Normalize all injections into Object-based format
     */
    function normalizeInject (options, vm) {
      var inject = options.inject;
      if (!inject) { return }
      var normalized = options.inject = {};
      if (Array.isArray(inject)) {
        for (var i = 0; i < inject.length; i++) {
          normalized[inject[i]] = { from: inject[i] };
        }
      } else if (isPlainObject(inject)) {
        for (var key in inject) {
          var val = inject[key];
          normalized[key] = isPlainObject(val)
            ? extend({ from: key }, val)
            : { from: val };
        }
      } else {
        warn(
          "Invalid value for option \"inject\": expected an Array or an Object, " +
          "but got " + (toRawType(inject)) + ".",
          vm
        );
      }
    }

    /**
     * Normalize raw function directives into object format.
     */
    function normalizeDirectives (options) {
      var dirs = options.directives;
      if (dirs) {
        for (var key in dirs) {
          var def$$1 = dirs[key];
          if (typeof def$$1 === 'function') {
            dirs[key] = { bind: def$$1, update: def$$1 };
          }
        }
      }
    }

    function assertObjectType (name, value, vm) {
      if (!isPlainObject(value)) {
        warn(
          "Invalid value for option \"" + name + "\": expected an Object, " +
          "but got " + (toRawType(value)) + ".",
          vm
        );
      }
    }

    /**
     * Merge two option objects into a new one.
     * Core utility used in both instantiation and inheritance.
     */
    function mergeOptions (
      parent,
      child,
      vm
    ) {
      {
        checkComponents(child);
      }

      if (typeof child === 'function') {
        child = child.options;
      }

      normalizeProps(child, vm);
      normalizeInject(child, vm);
      normalizeDirectives(child);

      // Apply extends and mixins on the child options,
      // but only if it is a raw options object that isn't
      // the result of another mergeOptions call.
      // Only merged options has the _base property.
      if (!child._base) {
        if (child.extends) {
          parent = mergeOptions(parent, child.extends, vm);
        }
        if (child.mixins) {
          for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
          }
        }
      }

      var options = {};
      var key;
      for (key in parent) {
        mergeField(key);
      }
      for (key in child) {
        if (!hasOwn(parent, key)) {
          mergeField(key);
        }
      }
      function mergeField (key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat(parent[key], child[key], vm, key);
      }
      return options
    }

    /**
     * Resolve an asset.
     * This function is used because child instances need access
     * to assets defined in its ancestor chain.
     */
    function resolveAsset (
      options,
      type,
      id,
      warnMissing
    ) {
      /* istanbul ignore if */
      if (typeof id !== 'string') {
        return
      }
      var assets = options[type];
      // check local registration variations first
      if (hasOwn(assets, id)) { return assets[id] }
      var camelizedId = camelize(id);
      if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
      var PascalCaseId = capitalize(camelizedId);
      if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
      // fallback to prototype chain
      var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
      if ( warnMissing && !res) {
        warn(
          'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
          options
        );
      }
      return res
    }

    /*  */



    function validateProp (
      key,
      propOptions,
      propsData,
      vm
    ) {
      var prop = propOptions[key];
      var absent = !hasOwn(propsData, key);
      var value = propsData[key];
      // boolean casting
      var booleanIndex = getTypeIndex(Boolean, prop.type);
      if (booleanIndex > -1) {
        if (absent && !hasOwn(prop, 'default')) {
          value = false;
        } else if (value === '' || value === hyphenate(key)) {
          // only cast empty string / same name to boolean if
          // boolean has higher priority
          var stringIndex = getTypeIndex(String, prop.type);
          if (stringIndex < 0 || booleanIndex < stringIndex) {
            value = true;
          }
        }
      }
      // check default value
      if (value === undefined) {
        value = getPropDefaultValue(vm, prop, key);
        // since the default value is a fresh copy,
        // make sure to observe it.
        var prevShouldObserve = shouldObserve;
        toggleObserving(true);
        observe(value);
        toggleObserving(prevShouldObserve);
      }
      {
        assertProp(prop, key, value, vm, absent);
      }
      return value
    }

    /**
     * Get the default value of a prop.
     */
    function getPropDefaultValue (vm, prop, key) {
      // no default, return undefined
      if (!hasOwn(prop, 'default')) {
        return undefined
      }
      var def = prop.default;
      // warn against non-factory defaults for Object & Array
      if ( isObject(def)) {
        warn(
          'Invalid default value for prop "' + key + '": ' +
          'Props with type Object/Array must use a factory function ' +
          'to return the default value.',
          vm
        );
      }
      // the raw prop value was also undefined from previous render,
      // return previous default value to avoid unnecessary watcher trigger
      if (vm && vm.$options.propsData &&
        vm.$options.propsData[key] === undefined &&
        vm._props[key] !== undefined
      ) {
        return vm._props[key]
      }
      // call factory function for non-Function types
      // a value is Function if its prototype is function even across different execution context
      return typeof def === 'function' && getType(prop.type) !== 'Function'
        ? def.call(vm)
        : def
    }

    /**
     * Assert whether a prop is valid.
     */
    function assertProp (
      prop,
      name,
      value,
      vm,
      absent
    ) {
      if (prop.required && absent) {
        warn(
          'Missing required prop: "' + name + '"',
          vm
        );
        return
      }
      if (value == null && !prop.required) {
        return
      }
      var type = prop.type;
      var valid = !type || type === true;
      var expectedTypes = [];
      if (type) {
        if (!Array.isArray(type)) {
          type = [type];
        }
        for (var i = 0; i < type.length && !valid; i++) {
          var assertedType = assertType(value, type[i], vm);
          expectedTypes.push(assertedType.expectedType || '');
          valid = assertedType.valid;
        }
      }

      var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
      if (!valid && haveExpectedTypes) {
        warn(
          getInvalidTypeMessage(name, value, expectedTypes),
          vm
        );
        return
      }
      var validator = prop.validator;
      if (validator) {
        if (!validator(value)) {
          warn(
            'Invalid prop: custom validator check failed for prop "' + name + '".',
            vm
          );
        }
      }
    }

    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

    function assertType (value, type, vm) {
      var valid;
      var expectedType = getType(type);
      if (simpleCheckRE.test(expectedType)) {
        var t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
          valid = value instanceof type;
        }
      } else if (expectedType === 'Object') {
        valid = isPlainObject(value);
      } else if (expectedType === 'Array') {
        valid = Array.isArray(value);
      } else {
        try {
          valid = value instanceof type;
        } catch (e) {
          warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
          valid = false;
        }
      }
      return {
        valid: valid,
        expectedType: expectedType
      }
    }

    var functionTypeCheckRE = /^\s*function (\w+)/;

    /**
     * Use function string name to check built-in types,
     * because a simple equality check will fail when running
     * across different vms / iframes.
     */
    function getType (fn) {
      var match = fn && fn.toString().match(functionTypeCheckRE);
      return match ? match[1] : ''
    }

    function isSameType (a, b) {
      return getType(a) === getType(b)
    }

    function getTypeIndex (type, expectedTypes) {
      if (!Array.isArray(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1
      }
      for (var i = 0, len = expectedTypes.length; i < len; i++) {
        if (isSameType(expectedTypes[i], type)) {
          return i
        }
      }
      return -1
    }

    function getInvalidTypeMessage (name, value, expectedTypes) {
      var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
        " Expected " + (expectedTypes.map(capitalize).join(', '));
      var expectedType = expectedTypes[0];
      var receivedType = toRawType(value);
      // check if we need to specify expected value
      if (
        expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        isExplicable(typeof value) &&
        !isBoolean(expectedType, receivedType)
      ) {
        message += " with value " + (styleValue(value, expectedType));
      }
      message += ", got " + receivedType + " ";
      // check if we need to specify received value
      if (isExplicable(receivedType)) {
        message += "with value " + (styleValue(value, receivedType)) + ".";
      }
      return message
    }

    function styleValue (value, type) {
      if (type === 'String') {
        return ("\"" + value + "\"")
      } else if (type === 'Number') {
        return ("" + (Number(value)))
      } else {
        return ("" + value)
      }
    }

    var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
    function isExplicable (value) {
      return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
    }

    function isBoolean () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
    }

    /*  */

    function handleError (err, vm, info) {
      // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
      // See: https://github.com/vuejs/vuex/issues/1505
      pushTarget();
      try {
        if (vm) {
          var cur = vm;
          while ((cur = cur.$parent)) {
            var hooks = cur.$options.errorCaptured;
            if (hooks) {
              for (var i = 0; i < hooks.length; i++) {
                try {
                  var capture = hooks[i].call(cur, err, vm, info) === false;
                  if (capture) { return }
                } catch (e) {
                  globalHandleError(e, cur, 'errorCaptured hook');
                }
              }
            }
          }
        }
        globalHandleError(err, vm, info);
      } finally {
        popTarget();
      }
    }

    function invokeWithErrorHandling (
      handler,
      context,
      args,
      vm,
      info
    ) {
      var res;
      try {
        res = args ? handler.apply(context, args) : handler.call(context);
        if (res && !res._isVue && isPromise(res) && !res._handled) {
          res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
          // issue #9511
          // avoid catch triggering multiple times when nested calls
          res._handled = true;
        }
      } catch (e) {
        handleError(e, vm, info);
      }
      return res
    }

    function globalHandleError (err, vm, info) {
      if (config.errorHandler) {
        try {
          return config.errorHandler.call(null, err, vm, info)
        } catch (e) {
          // if the user intentionally throws the original error in the handler,
          // do not log it twice
          if (e !== err) {
            logError(e, null, 'config.errorHandler');
          }
        }
      }
      logError(err, vm, info);
    }

    function logError (err, vm, info) {
      {
        warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
      }
      /* istanbul ignore else */
      if ((inBrowser || inWeex) && typeof console !== 'undefined') {
        console.error(err);
      } else {
        throw err
      }
    }

    /*  */

    var isUsingMicroTask = false;

    var callbacks = [];
    var pending = false;

    function flushCallbacks () {
      pending = false;
      var copies = callbacks.slice(0);
      callbacks.length = 0;
      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }

    // Here we have async deferring wrappers using microtasks.
    // In 2.5 we used (macro) tasks (in combination with microtasks).
    // However, it has subtle problems when state is changed right before repaint
    // (e.g. #6813, out-in transitions).
    // Also, using (macro) tasks in event handler would cause some weird behaviors
    // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
    // So we now use microtasks everywhere, again.
    // A major drawback of this tradeoff is that there are some scenarios
    // where microtasks have too high a priority and fire in between supposedly
    // sequential events (e.g. #4521, #6690, which have workarounds)
    // or even between bubbling of the same event (#6566).
    var timerFunc;

    // The nextTick behavior leverages the microtask queue, which can be accessed
    // via either native Promise.then or MutationObserver.
    // MutationObserver has wider support, however it is seriously bugged in
    // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
    // completely stops working after triggering a few times... so, if native
    // Promise is available, we will use it:
    /* istanbul ignore next, $flow-disable-line */
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve();
      timerFunc = function () {
        p.then(flushCallbacks);
        // In problematic UIWebViews, Promise.then doesn't completely break, but
        // it can get stuck in a weird state where callbacks are pushed into the
        // microtask queue but the queue isn't being flushed, until the browser
        // needs to do some other work, e.g. handle a timer. Therefore we can
        // "force" the microtask queue to be flushed by adding an empty timer.
        if (isIOS) { setTimeout(noop); }
      };
      isUsingMicroTask = true;
    } else if (!isIE && typeof MutationObserver !== 'undefined' && (
      isNative(MutationObserver) ||
      // PhantomJS and iOS 7.x
      MutationObserver.toString() === '[object MutationObserverConstructor]'
    )) {
      // Use MutationObserver where native Promise is not available,
      // e.g. PhantomJS, iOS7, Android 4.4
      // (#6466 MutationObserver is unreliable in IE11)
      var counter = 1;
      var observer = new MutationObserver(flushCallbacks);
      var textNode = document.createTextNode(String(counter));
      observer.observe(textNode, {
        characterData: true
      });
      timerFunc = function () {
        counter = (counter + 1) % 2;
        textNode.data = String(counter);
      };
      isUsingMicroTask = true;
    } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
      // Fallback to setImmediate.
      // Technically it leverages the (macro) task queue,
      // but it is still a better choice than setTimeout.
      timerFunc = function () {
        setImmediate(flushCallbacks);
      };
    } else {
      // Fallback to setTimeout.
      timerFunc = function () {
        setTimeout(flushCallbacks, 0);
      };
    }

    function nextTick (cb, ctx) {
      var _resolve;
      callbacks.push(function () {
        if (cb) {
          try {
            cb.call(ctx);
          } catch (e) {
            handleError(e, ctx, 'nextTick');
          }
        } else if (_resolve) {
          _resolve(ctx);
        }
      });
      if (!pending) {
        pending = true;
        timerFunc();
      }
      // $flow-disable-line
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
          _resolve = resolve;
        })
      }
    }

    /*  */

    /* not type checking this file because flow doesn't play well with Proxy */

    var initProxy;

    {
      var allowedGlobals = makeMap(
        'Infinity,undefined,NaN,isFinite,isNaN,' +
        'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
        'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
        'require' // for Webpack/Browserify
      );

      var warnNonPresent = function (target, key) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          'referenced during render. Make sure that this property is reactive, ' +
          'either in the data option, or for class-based components, by ' +
          'initializing the property. ' +
          'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
          target
        );
      };

      var warnReservedPrefix = function (target, key) {
        warn(
          "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
          'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
          'prevent conflicts with Vue internals. ' +
          'See: https://vuejs.org/v2/api/#data',
          target
        );
      };

      var hasProxy =
        typeof Proxy !== 'undefined' && isNative(Proxy);

      if (hasProxy) {
        var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
        config.keyCodes = new Proxy(config.keyCodes, {
          set: function set (target, key, value) {
            if (isBuiltInModifier(key)) {
              warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
              return false
            } else {
              target[key] = value;
              return true
            }
          }
        });
      }

      var hasHandler = {
        has: function has (target, key) {
          var has = key in target;
          var isAllowed = allowedGlobals(key) ||
            (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
          if (!has && !isAllowed) {
            if (key in target.$data) { warnReservedPrefix(target, key); }
            else { warnNonPresent(target, key); }
          }
          return has || !isAllowed
        }
      };

      var getHandler = {
        get: function get (target, key) {
          if (typeof key === 'string' && !(key in target)) {
            if (key in target.$data) { warnReservedPrefix(target, key); }
            else { warnNonPresent(target, key); }
          }
          return target[key]
        }
      };

      initProxy = function initProxy (vm) {
        if (hasProxy) {
          // determine which proxy handler to use
          var options = vm.$options;
          var handlers = options.render && options.render._withStripped
            ? getHandler
            : hasHandler;
          vm._renderProxy = new Proxy(vm, handlers);
        } else {
          vm._renderProxy = vm;
        }
      };
    }

    /*  */

    var seenObjects = new _Set();

    /**
     * Recursively traverse an object to evoke all converted
     * getters, so that every nested property inside the object
     * is collected as a "deep" dependency.
     */
    function traverse (val) {
      _traverse(val, seenObjects);
      seenObjects.clear();
    }

    function _traverse (val, seen) {
      var i, keys;
      var isA = Array.isArray(val);
      if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
        return
      }
      if (val.__ob__) {
        var depId = val.__ob__.dep.id;
        if (seen.has(depId)) {
          return
        }
        seen.add(depId);
      }
      if (isA) {
        i = val.length;
        while (i--) { _traverse(val[i], seen); }
      } else {
        keys = Object.keys(val);
        i = keys.length;
        while (i--) { _traverse(val[keys[i]], seen); }
      }
    }

    var mark;
    var measure;

    {
      var perf = inBrowser && window.performance;
      /* istanbul ignore if */
      if (
        perf &&
        perf.mark &&
        perf.measure &&
        perf.clearMarks &&
        perf.clearMeasures
      ) {
        mark = function (tag) { return perf.mark(tag); };
        measure = function (name, startTag, endTag) {
          perf.measure(name, startTag, endTag);
          perf.clearMarks(startTag);
          perf.clearMarks(endTag);
          // perf.clearMeasures(name)
        };
      }
    }

    /*  */

    var normalizeEvent = cached(function (name) {
      var passive = name.charAt(0) === '&';
      name = passive ? name.slice(1) : name;
      var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
      name = once$$1 ? name.slice(1) : name;
      var capture = name.charAt(0) === '!';
      name = capture ? name.slice(1) : name;
      return {
        name: name,
        once: once$$1,
        capture: capture,
        passive: passive
      }
    });

    function createFnInvoker (fns, vm) {
      function invoker () {
        var arguments$1 = arguments;

        var fns = invoker.fns;
        if (Array.isArray(fns)) {
          var cloned = fns.slice();
          for (var i = 0; i < cloned.length; i++) {
            invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
          }
        } else {
          // return handler return value for single handlers
          return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
        }
      }
      invoker.fns = fns;
      return invoker
    }

    function updateListeners (
      on,
      oldOn,
      add,
      remove$$1,
      createOnceHandler,
      vm
    ) {
      var name, def$$1, cur, old, event;
      for (name in on) {
        def$$1 = cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
           warn(
            "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
            vm
          );
        } else if (isUndef(old)) {
          if (isUndef(cur.fns)) {
            cur = on[name] = createFnInvoker(cur, vm);
          }
          if (isTrue(event.once)) {
            cur = on[name] = createOnceHandler(event.name, cur, event.capture);
          }
          add(event.name, cur, event.capture, event.passive, event.params);
        } else if (cur !== old) {
          old.fns = cur;
          on[name] = old;
        }
      }
      for (name in oldOn) {
        if (isUndef(on[name])) {
          event = normalizeEvent(name);
          remove$$1(event.name, oldOn[name], event.capture);
        }
      }
    }

    /*  */

    function mergeVNodeHook (def, hookKey, hook) {
      if (def instanceof VNode) {
        def = def.data.hook || (def.data.hook = {});
      }
      var invoker;
      var oldHook = def[hookKey];

      function wrappedHook () {
        hook.apply(this, arguments);
        // important: remove merged hook to ensure it's called only once
        // and prevent memory leak
        remove(invoker.fns, wrappedHook);
      }

      if (isUndef(oldHook)) {
        // no existing hook
        invoker = createFnInvoker([wrappedHook]);
      } else {
        /* istanbul ignore if */
        if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
          // already a merged invoker
          invoker = oldHook;
          invoker.fns.push(wrappedHook);
        } else {
          // existing plain hook
          invoker = createFnInvoker([oldHook, wrappedHook]);
        }
      }

      invoker.merged = true;
      def[hookKey] = invoker;
    }

    /*  */

    function extractPropsFromVNodeData (
      data,
      Ctor,
      tag
    ) {
      // we are only extracting raw values here.
      // validation and default values are handled in the child
      // component itself.
      var propOptions = Ctor.options.props;
      if (isUndef(propOptions)) {
        return
      }
      var res = {};
      var attrs = data.attrs;
      var props = data.props;
      if (isDef(attrs) || isDef(props)) {
        for (var key in propOptions) {
          var altKey = hyphenate(key);
          {
            var keyInLowerCase = key.toLowerCase();
            if (
              key !== keyInLowerCase &&
              attrs && hasOwn(attrs, keyInLowerCase)
            ) {
              tip(
                "Prop \"" + keyInLowerCase + "\" is passed to component " +
                (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                " \"" + key + "\". " +
                "Note that HTML attributes are case-insensitive and camelCased " +
                "props need to use their kebab-case equivalents when using in-DOM " +
                "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
              );
            }
          }
          checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
        }
      }
      return res
    }

    function checkProp (
      res,
      hash,
      key,
      altKey,
      preserve
    ) {
      if (isDef(hash)) {
        if (hasOwn(hash, key)) {
          res[key] = hash[key];
          if (!preserve) {
            delete hash[key];
          }
          return true
        } else if (hasOwn(hash, altKey)) {
          res[key] = hash[altKey];
          if (!preserve) {
            delete hash[altKey];
          }
          return true
        }
      }
      return false
    }

    /*  */

    // The template compiler attempts to minimize the need for normalization by
    // statically analyzing the template at compile time.
    //
    // For plain HTML markup, normalization can be completely skipped because the
    // generated render function is guaranteed to return Array<VNode>. There are
    // two cases where extra normalization is needed:

    // 1. When the children contains components - because a functional component
    // may return an Array instead of a single root. In this case, just a simple
    // normalization is needed - if any child is an Array, we flatten the whole
    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
    // because functional components already normalize their own children.
    function simpleNormalizeChildren (children) {
      for (var i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
          return Array.prototype.concat.apply([], children)
        }
      }
      return children
    }

    // 2. When the children contains constructs that always generated nested Arrays,
    // e.g. <template>, <slot>, v-for, or when the children is provided by user
    // with hand-written render functions / JSX. In such cases a full normalization
    // is needed to cater to all possible types of children values.
    function normalizeChildren (children) {
      return isPrimitive(children)
        ? [createTextVNode(children)]
        : Array.isArray(children)
          ? normalizeArrayChildren(children)
          : undefined
    }

    function isTextNode (node) {
      return isDef(node) && isDef(node.text) && isFalse(node.isComment)
    }

    function normalizeArrayChildren (children, nestedIndex) {
      var res = [];
      var i, c, lastIndex, last;
      for (i = 0; i < children.length; i++) {
        c = children[i];
        if (isUndef(c) || typeof c === 'boolean') { continue }
        lastIndex = res.length - 1;
        last = res[lastIndex];
        //  nested
        if (Array.isArray(c)) {
          if (c.length > 0) {
            c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
            // merge adjacent text nodes
            if (isTextNode(c[0]) && isTextNode(last)) {
              res[lastIndex] = createTextVNode(last.text + (c[0]).text);
              c.shift();
            }
            res.push.apply(res, c);
          }
        } else if (isPrimitive(c)) {
          if (isTextNode(last)) {
            // merge adjacent text nodes
            // this is necessary for SSR hydration because text nodes are
            // essentially merged when rendered to HTML strings
            res[lastIndex] = createTextVNode(last.text + c);
          } else if (c !== '') {
            // convert primitive to vnode
            res.push(createTextVNode(c));
          }
        } else {
          if (isTextNode(c) && isTextNode(last)) {
            // merge adjacent text nodes
            res[lastIndex] = createTextVNode(last.text + c.text);
          } else {
            // default key for nested array children (likely generated by v-for)
            if (isTrue(children._isVList) &&
              isDef(c.tag) &&
              isUndef(c.key) &&
              isDef(nestedIndex)) {
              c.key = "__vlist" + nestedIndex + "_" + i + "__";
            }
            res.push(c);
          }
        }
      }
      return res
    }

    /*  */

    function initProvide (vm) {
      var provide = vm.$options.provide;
      if (provide) {
        vm._provided = typeof provide === 'function'
          ? provide.call(vm)
          : provide;
      }
    }

    function initInjections (vm) {
      var result = resolveInject(vm.$options.inject, vm);
      if (result) {
        toggleObserving(false);
        Object.keys(result).forEach(function (key) {
          /* istanbul ignore else */
          {
            defineReactive$$1(vm, key, result[key], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          }
        });
        toggleObserving(true);
      }
    }

    function resolveInject (inject, vm) {
      if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        var result = Object.create(null);
        var keys = hasSymbol
          ? Reflect.ownKeys(inject)
          : Object.keys(inject);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          // #6574 in case the inject object is observed...
          if (key === '__ob__') { continue }
          var provideKey = inject[key].from;
          var source = vm;
          while (source) {
            if (source._provided && hasOwn(source._provided, provideKey)) {
              result[key] = source._provided[provideKey];
              break
            }
            source = source.$parent;
          }
          if (!source) {
            if ('default' in inject[key]) {
              var provideDefault = inject[key].default;
              result[key] = typeof provideDefault === 'function'
                ? provideDefault.call(vm)
                : provideDefault;
            } else {
              warn(("Injection \"" + key + "\" not found"), vm);
            }
          }
        }
        return result
      }
    }

    /*  */



    /**
     * Runtime helper for resolving raw children VNodes into a slot object.
     */
    function resolveSlots (
      children,
      context
    ) {
      if (!children || !children.length) {
        return {}
      }
      var slots = {};
      for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];
        var data = child.data;
        // remove slot attribute if the node is resolved as a Vue slot node
        if (data && data.attrs && data.attrs.slot) {
          delete data.attrs.slot;
        }
        // named slots should only be respected if the vnode was rendered in the
        // same context.
        if ((child.context === context || child.fnContext === context) &&
          data && data.slot != null
        ) {
          var name = data.slot;
          var slot = (slots[name] || (slots[name] = []));
          if (child.tag === 'template') {
            slot.push.apply(slot, child.children || []);
          } else {
            slot.push(child);
          }
        } else {
          (slots.default || (slots.default = [])).push(child);
        }
      }
      // ignore slots that contains only whitespace
      for (var name$1 in slots) {
        if (slots[name$1].every(isWhitespace)) {
          delete slots[name$1];
        }
      }
      return slots
    }

    function isWhitespace (node) {
      return (node.isComment && !node.asyncFactory) || node.text === ' '
    }

    /*  */

    function isAsyncPlaceholder (node) {
      return node.isComment && node.asyncFactory
    }

    /*  */

    function normalizeScopedSlots (
      slots,
      normalSlots,
      prevSlots
    ) {
      var res;
      var hasNormalSlots = Object.keys(normalSlots).length > 0;
      var isStable = slots ? !!slots.$stable : !hasNormalSlots;
      var key = slots && slots.$key;
      if (!slots) {
        res = {};
      } else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized
      } else if (
        isStable &&
        prevSlots &&
        prevSlots !== emptyObject &&
        key === prevSlots.$key &&
        !hasNormalSlots &&
        !prevSlots.$hasNormal
      ) {
        // fast path 2: stable scoped slots w/ no normal slots to proxy,
        // only need to normalize once
        return prevSlots
      } else {
        res = {};
        for (var key$1 in slots) {
          if (slots[key$1] && key$1[0] !== '$') {
            res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
          }
        }
      }
      // expose normal slots on scopedSlots
      for (var key$2 in normalSlots) {
        if (!(key$2 in res)) {
          res[key$2] = proxyNormalSlot(normalSlots, key$2);
        }
      }
      // avoriaz seems to mock a non-extensible $scopedSlots object
      // and when that is passed down this would cause an error
      if (slots && Object.isExtensible(slots)) {
        (slots)._normalized = res;
      }
      def(res, '$stable', isStable);
      def(res, '$key', key);
      def(res, '$hasNormal', hasNormalSlots);
      return res
    }

    function normalizeScopedSlot(normalSlots, key, fn) {
      var normalized = function () {
        var res = arguments.length ? fn.apply(null, arguments) : fn({});
        res = res && typeof res === 'object' && !Array.isArray(res)
          ? [res] // single vnode
          : normalizeChildren(res);
        var vnode = res && res[0];
        return res && (
          !vnode ||
          (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
        ) ? undefined
          : res
      };
      // this is a slot using the new v-slot syntax without scope. although it is
      // compiled as a scoped slot, render fn users would expect it to be present
      // on this.$slots because the usage is semantically a normal slot.
      if (fn.proxy) {
        Object.defineProperty(normalSlots, key, {
          get: normalized,
          enumerable: true,
          configurable: true
        });
      }
      return normalized
    }

    function proxyNormalSlot(slots, key) {
      return function () { return slots[key]; }
    }

    /*  */

    /**
     * Runtime helper for rendering v-for lists.
     */
    function renderList (
      val,
      render
    ) {
      var ret, i, l, keys, key;
      if (Array.isArray(val) || typeof val === 'string') {
        ret = new Array(val.length);
        for (i = 0, l = val.length; i < l; i++) {
          ret[i] = render(val[i], i);
        }
      } else if (typeof val === 'number') {
        ret = new Array(val);
        for (i = 0; i < val; i++) {
          ret[i] = render(i + 1, i);
        }
      } else if (isObject(val)) {
        if (hasSymbol && val[Symbol.iterator]) {
          ret = [];
          var iterator = val[Symbol.iterator]();
          var result = iterator.next();
          while (!result.done) {
            ret.push(render(result.value, ret.length));
            result = iterator.next();
          }
        } else {
          keys = Object.keys(val);
          ret = new Array(keys.length);
          for (i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            ret[i] = render(val[key], key, i);
          }
        }
      }
      if (!isDef(ret)) {
        ret = [];
      }
      (ret)._isVList = true;
      return ret
    }

    /*  */

    /**
     * Runtime helper for rendering <slot>
     */
    function renderSlot (
      name,
      fallbackRender,
      props,
      bindObject
    ) {
      var scopedSlotFn = this.$scopedSlots[name];
      var nodes;
      if (scopedSlotFn) {
        // scoped slot
        props = props || {};
        if (bindObject) {
          if ( !isObject(bindObject)) {
            warn('slot v-bind without argument expects an Object', this);
          }
          props = extend(extend({}, bindObject), props);
        }
        nodes =
          scopedSlotFn(props) ||
          (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
      } else {
        nodes =
          this.$slots[name] ||
          (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
      }

      var target = props && props.slot;
      if (target) {
        return this.$createElement('template', { slot: target }, nodes)
      } else {
        return nodes
      }
    }

    /*  */

    /**
     * Runtime helper for resolving filters
     */
    function resolveFilter (id) {
      return resolveAsset(this.$options, 'filters', id, true) || identity
    }

    /*  */

    function isKeyNotMatch (expect, actual) {
      if (Array.isArray(expect)) {
        return expect.indexOf(actual) === -1
      } else {
        return expect !== actual
      }
    }

    /**
     * Runtime helper for checking keyCodes from config.
     * exposed as Vue.prototype._k
     * passing in eventKeyName as last argument separately for backwards compat
     */
    function checkKeyCodes (
      eventKeyCode,
      key,
      builtInKeyCode,
      eventKeyName,
      builtInKeyName
    ) {
      var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
      if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
        return isKeyNotMatch(builtInKeyName, eventKeyName)
      } else if (mappedKeyCode) {
        return isKeyNotMatch(mappedKeyCode, eventKeyCode)
      } else if (eventKeyName) {
        return hyphenate(eventKeyName) !== key
      }
      return eventKeyCode === undefined
    }

    /*  */

    /**
     * Runtime helper for merging v-bind="object" into a VNode's data.
     */
    function bindObjectProps (
      data,
      tag,
      value,
      asProp,
      isSync
    ) {
      if (value) {
        if (!isObject(value)) {
           warn(
            'v-bind without argument expects an Object or Array value',
            this
          );
        } else {
          if (Array.isArray(value)) {
            value = toObject(value);
          }
          var hash;
          var loop = function ( key ) {
            if (
              key === 'class' ||
              key === 'style' ||
              isReservedAttribute(key)
            ) {
              hash = data;
            } else {
              var type = data.attrs && data.attrs.type;
              hash = asProp || config.mustUseProp(tag, type, key)
                ? data.domProps || (data.domProps = {})
                : data.attrs || (data.attrs = {});
            }
            var camelizedKey = camelize(key);
            var hyphenatedKey = hyphenate(key);
            if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
              hash[key] = value[key];

              if (isSync) {
                var on = data.on || (data.on = {});
                on[("update:" + key)] = function ($event) {
                  value[key] = $event;
                };
              }
            }
          };

          for (var key in value) loop( key );
        }
      }
      return data
    }

    /*  */

    /**
     * Runtime helper for rendering static trees.
     */
    function renderStatic (
      index,
      isInFor
    ) {
      var cached = this._staticTrees || (this._staticTrees = []);
      var tree = cached[index];
      // if has already-rendered static tree and not inside v-for,
      // we can reuse the same tree.
      if (tree && !isInFor) {
        return tree
      }
      // otherwise, render a fresh tree.
      tree = cached[index] = this.$options.staticRenderFns[index].call(
        this._renderProxy,
        null,
        this // for render fns generated for functional component templates
      );
      markStatic(tree, ("__static__" + index), false);
      return tree
    }

    /**
     * Runtime helper for v-once.
     * Effectively it means marking the node as static with a unique key.
     */
    function markOnce (
      tree,
      index,
      key
    ) {
      markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
      return tree
    }

    function markStatic (
      tree,
      key,
      isOnce
    ) {
      if (Array.isArray(tree)) {
        for (var i = 0; i < tree.length; i++) {
          if (tree[i] && typeof tree[i] !== 'string') {
            markStaticNode(tree[i], (key + "_" + i), isOnce);
          }
        }
      } else {
        markStaticNode(tree, key, isOnce);
      }
    }

    function markStaticNode (node, key, isOnce) {
      node.isStatic = true;
      node.key = key;
      node.isOnce = isOnce;
    }

    /*  */

    function bindObjectListeners (data, value) {
      if (value) {
        if (!isPlainObject(value)) {
           warn(
            'v-on without argument expects an Object value',
            this
          );
        } else {
          var on = data.on = data.on ? extend({}, data.on) : {};
          for (var key in value) {
            var existing = on[key];
            var ours = value[key];
            on[key] = existing ? [].concat(existing, ours) : ours;
          }
        }
      }
      return data
    }

    /*  */

    function resolveScopedSlots (
      fns, // see flow/vnode
      res,
      // the following are added in 2.6
      hasDynamicKeys,
      contentHashKey
    ) {
      res = res || { $stable: !hasDynamicKeys };
      for (var i = 0; i < fns.length; i++) {
        var slot = fns[i];
        if (Array.isArray(slot)) {
          resolveScopedSlots(slot, res, hasDynamicKeys);
        } else if (slot) {
          // marker for reverse proxying v-slot without scope on this.$slots
          if (slot.proxy) {
            slot.fn.proxy = true;
          }
          res[slot.key] = slot.fn;
        }
      }
      if (contentHashKey) {
        (res).$key = contentHashKey;
      }
      return res
    }

    /*  */

    function bindDynamicKeys (baseObj, values) {
      for (var i = 0; i < values.length; i += 2) {
        var key = values[i];
        if (typeof key === 'string' && key) {
          baseObj[values[i]] = values[i + 1];
        } else if ( key !== '' && key !== null) {
          // null is a special value for explicitly removing a binding
          warn(
            ("Invalid value for dynamic directive argument (expected string or null): " + key),
            this
          );
        }
      }
      return baseObj
    }

    // helper to dynamically append modifier runtime markers to event names.
    // ensure only append when value is already string, otherwise it will be cast
    // to string and cause the type check to miss.
    function prependModifier (value, symbol) {
      return typeof value === 'string' ? symbol + value : value
    }

    /*  */

    function installRenderHelpers (target) {
      target._o = markOnce;
      target._n = toNumber;
      target._s = toString;
      target._l = renderList;
      target._t = renderSlot;
      target._q = looseEqual;
      target._i = looseIndexOf;
      target._m = renderStatic;
      target._f = resolveFilter;
      target._k = checkKeyCodes;
      target._b = bindObjectProps;
      target._v = createTextVNode;
      target._e = createEmptyVNode;
      target._u = resolveScopedSlots;
      target._g = bindObjectListeners;
      target._d = bindDynamicKeys;
      target._p = prependModifier;
    }

    /*  */

    function FunctionalRenderContext (
      data,
      props,
      children,
      parent,
      Ctor
    ) {
      var this$1 = this;

      var options = Ctor.options;
      // ensure the createElement function in functional components
      // gets a unique context - this is necessary for correct named slot check
      var contextVm;
      if (hasOwn(parent, '_uid')) {
        contextVm = Object.create(parent);
        // $flow-disable-line
        contextVm._original = parent;
      } else {
        // the context vm passed in is a functional context as well.
        // in this case we want to make sure we are able to get a hold to the
        // real context instance.
        contextVm = parent;
        // $flow-disable-line
        parent = parent._original;
      }
      var isCompiled = isTrue(options._compiled);
      var needNormalization = !isCompiled;

      this.data = data;
      this.props = props;
      this.children = children;
      this.parent = parent;
      this.listeners = data.on || emptyObject;
      this.injections = resolveInject(options.inject, parent);
      this.slots = function () {
        if (!this$1.$slots) {
          normalizeScopedSlots(
            data.scopedSlots,
            this$1.$slots = resolveSlots(children, parent)
          );
        }
        return this$1.$slots
      };

      Object.defineProperty(this, 'scopedSlots', ({
        enumerable: true,
        get: function get () {
          return normalizeScopedSlots(data.scopedSlots, this.slots())
        }
      }));

      // support for compiled functional template
      if (isCompiled) {
        // exposing $options for renderStatic()
        this.$options = options;
        // pre-resolve slots for renderSlot()
        this.$slots = this.slots();
        this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
      }

      if (options._scopeId) {
        this._c = function (a, b, c, d) {
          var vnode = createElement(contextVm, a, b, c, d, needNormalization);
          if (vnode && !Array.isArray(vnode)) {
            vnode.fnScopeId = options._scopeId;
            vnode.fnContext = parent;
          }
          return vnode
        };
      } else {
        this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
      }
    }

    installRenderHelpers(FunctionalRenderContext.prototype);

    function createFunctionalComponent (
      Ctor,
      propsData,
      data,
      contextVm,
      children
    ) {
      var options = Ctor.options;
      var props = {};
      var propOptions = options.props;
      if (isDef(propOptions)) {
        for (var key in propOptions) {
          props[key] = validateProp(key, propOptions, propsData || emptyObject);
        }
      } else {
        if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
        if (isDef(data.props)) { mergeProps(props, data.props); }
      }

      var renderContext = new FunctionalRenderContext(
        data,
        props,
        children,
        contextVm,
        Ctor
      );

      var vnode = options.render.call(null, renderContext._c, renderContext);

      if (vnode instanceof VNode) {
        return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
      } else if (Array.isArray(vnode)) {
        var vnodes = normalizeChildren(vnode) || [];
        var res = new Array(vnodes.length);
        for (var i = 0; i < vnodes.length; i++) {
          res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
        }
        return res
      }
    }

    function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
      // #7817 clone node before setting fnContext, otherwise if the node is reused
      // (e.g. it was from a cached normal slot) the fnContext causes named slots
      // that should not be matched to match.
      var clone = cloneVNode(vnode);
      clone.fnContext = contextVm;
      clone.fnOptions = options;
      {
        (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
      }
      if (data.slot) {
        (clone.data || (clone.data = {})).slot = data.slot;
      }
      return clone
    }

    function mergeProps (to, from) {
      for (var key in from) {
        to[camelize(key)] = from[key];
      }
    }

    /*  */

    /*  */

    /*  */

    /*  */

    // inline hooks to be invoked on component VNodes during patch
    var componentVNodeHooks = {
      init: function init (vnode, hydrating) {
        if (
          vnode.componentInstance &&
          !vnode.componentInstance._isDestroyed &&
          vnode.data.keepAlive
        ) {
          // kept-alive components, treat as a patch
          var mountedNode = vnode; // work around flow
          componentVNodeHooks.prepatch(mountedNode, mountedNode);
        } else {
          var child = vnode.componentInstance = createComponentInstanceForVnode(
            vnode,
            activeInstance
          );
          child.$mount(hydrating ? vnode.elm : undefined, hydrating);
        }
      },

      prepatch: function prepatch (oldVnode, vnode) {
        var options = vnode.componentOptions;
        var child = vnode.componentInstance = oldVnode.componentInstance;
        updateChildComponent(
          child,
          options.propsData, // updated props
          options.listeners, // updated listeners
          vnode, // new parent vnode
          options.children // new children
        );
      },

      insert: function insert (vnode) {
        var context = vnode.context;
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isMounted) {
          componentInstance._isMounted = true;
          callHook(componentInstance, 'mounted');
        }
        if (vnode.data.keepAlive) {
          if (context._isMounted) {
            // vue-router#1212
            // During updates, a kept-alive component's child components may
            // change, so directly walking the tree here may call activated hooks
            // on incorrect children. Instead we push them into a queue which will
            // be processed after the whole patch process ended.
            queueActivatedComponent(componentInstance);
          } else {
            activateChildComponent(componentInstance, true /* direct */);
          }
        }
      },

      destroy: function destroy (vnode) {
        var componentInstance = vnode.componentInstance;
        if (!componentInstance._isDestroyed) {
          if (!vnode.data.keepAlive) {
            componentInstance.$destroy();
          } else {
            deactivateChildComponent(componentInstance, true /* direct */);
          }
        }
      }
    };

    var hooksToMerge = Object.keys(componentVNodeHooks);

    function createComponent (
      Ctor,
      data,
      context,
      children,
      tag
    ) {
      if (isUndef(Ctor)) {
        return
      }

      var baseCtor = context.$options._base;

      // plain options object: turn it into a constructor
      if (isObject(Ctor)) {
        Ctor = baseCtor.extend(Ctor);
      }

      // if at this stage it's not a constructor or an async component factory,
      // reject.
      if (typeof Ctor !== 'function') {
        {
          warn(("Invalid Component definition: " + (String(Ctor))), context);
        }
        return
      }

      // async component
      var asyncFactory;
      if (isUndef(Ctor.cid)) {
        asyncFactory = Ctor;
        Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
        if (Ctor === undefined) {
          // return a placeholder node for async component, which is rendered
          // as a comment node but preserves all the raw information for the node.
          // the information will be used for async server-rendering and hydration.
          return createAsyncPlaceholder(
            asyncFactory,
            data,
            context,
            children,
            tag
          )
        }
      }

      data = data || {};

      // resolve constructor options in case global mixins are applied after
      // component constructor creation
      resolveConstructorOptions(Ctor);

      // transform component v-model data into props & events
      if (isDef(data.model)) {
        transformModel(Ctor.options, data);
      }

      // extract props
      var propsData = extractPropsFromVNodeData(data, Ctor, tag);

      // functional component
      if (isTrue(Ctor.options.functional)) {
        return createFunctionalComponent(Ctor, propsData, data, context, children)
      }

      // extract listeners, since these needs to be treated as
      // child component listeners instead of DOM listeners
      var listeners = data.on;
      // replace with listeners with .native modifier
      // so it gets processed during parent component patch.
      data.on = data.nativeOn;

      if (isTrue(Ctor.options.abstract)) {
        // abstract components do not keep anything
        // other than props & listeners & slot

        // work around flow
        var slot = data.slot;
        data = {};
        if (slot) {
          data.slot = slot;
        }
      }

      // install component management hooks onto the placeholder node
      installComponentHooks(data);

      // return a placeholder vnode
      var name = Ctor.options.name || tag;
      var vnode = new VNode(
        ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
        data, undefined, undefined, undefined, context,
        { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
        asyncFactory
      );

      return vnode
    }

    function createComponentInstanceForVnode (
      // we know it's MountedComponentVNode but flow doesn't
      vnode,
      // activeInstance in lifecycle state
      parent
    ) {
      var options = {
        _isComponent: true,
        _parentVnode: vnode,
        parent: parent
      };
      // check inline-template render functions
      var inlineTemplate = vnode.data.inlineTemplate;
      if (isDef(inlineTemplate)) {
        options.render = inlineTemplate.render;
        options.staticRenderFns = inlineTemplate.staticRenderFns;
      }
      return new vnode.componentOptions.Ctor(options)
    }

    function installComponentHooks (data) {
      var hooks = data.hook || (data.hook = {});
      for (var i = 0; i < hooksToMerge.length; i++) {
        var key = hooksToMerge[i];
        var existing = hooks[key];
        var toMerge = componentVNodeHooks[key];
        if (existing !== toMerge && !(existing && existing._merged)) {
          hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
        }
      }
    }

    function mergeHook$1 (f1, f2) {
      var merged = function (a, b) {
        // flow complains about extra args which is why we use any
        f1(a, b);
        f2(a, b);
      };
      merged._merged = true;
      return merged
    }

    // transform component v-model info (value and callback) into
    // prop and event handler respectively.
    function transformModel (options, data) {
      var prop = (options.model && options.model.prop) || 'value';
      var event = (options.model && options.model.event) || 'input'
      ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
      var on = data.on || (data.on = {});
      var existing = on[event];
      var callback = data.model.callback;
      if (isDef(existing)) {
        if (
          Array.isArray(existing)
            ? existing.indexOf(callback) === -1
            : existing !== callback
        ) {
          on[event] = [callback].concat(existing);
        }
      } else {
        on[event] = callback;
      }
    }

    /*  */

    var SIMPLE_NORMALIZE = 1;
    var ALWAYS_NORMALIZE = 2;

    // wrapper function for providing a more flexible interface
    // without getting yelled at by flow
    function createElement (
      context,
      tag,
      data,
      children,
      normalizationType,
      alwaysNormalize
    ) {
      if (Array.isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = undefined;
      }
      if (isTrue(alwaysNormalize)) {
        normalizationType = ALWAYS_NORMALIZE;
      }
      return _createElement(context, tag, data, children, normalizationType)
    }

    function _createElement (
      context,
      tag,
      data,
      children,
      normalizationType
    ) {
      if (isDef(data) && isDef((data).__ob__)) {
         warn(
          "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
          'Always create fresh vnode data objects in each render!',
          context
        );
        return createEmptyVNode()
      }
      // object syntax in v-bind
      if (isDef(data) && isDef(data.is)) {
        tag = data.is;
      }
      if (!tag) {
        // in case of component :is set to falsy value
        return createEmptyVNode()
      }
      // warn against non-primitive key
      if (
        isDef(data) && isDef(data.key) && !isPrimitive(data.key)
      ) {
        {
          warn(
            'Avoid using non-primitive value as key, ' +
            'use string/number value instead.',
            context
          );
        }
      }
      // support single function children as default scoped slot
      if (Array.isArray(children) &&
        typeof children[0] === 'function'
      ) {
        data = data || {};
        data.scopedSlots = { default: children[0] };
        children.length = 0;
      }
      if (normalizationType === ALWAYS_NORMALIZE) {
        children = normalizeChildren(children);
      } else if (normalizationType === SIMPLE_NORMALIZE) {
        children = simpleNormalizeChildren(children);
      }
      var vnode, ns;
      if (typeof tag === 'string') {
        var Ctor;
        ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
        if (config.isReservedTag(tag)) {
          // platform built-in elements
          if ( isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
            warn(
              ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
              context
            );
          }
          vnode = new VNode(
            config.parsePlatformTagName(tag), data, children,
            undefined, undefined, context
          );
        } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
          // component
          vnode = createComponent(Ctor, data, context, children, tag);
        } else {
          // unknown or unlisted namespaced elements
          // check at runtime because it may get assigned a namespace when its
          // parent normalizes children
          vnode = new VNode(
            tag, data, children,
            undefined, undefined, context
          );
        }
      } else {
        // direct component options / constructor
        vnode = createComponent(tag, data, context, children);
      }
      if (Array.isArray(vnode)) {
        return vnode
      } else if (isDef(vnode)) {
        if (isDef(ns)) { applyNS(vnode, ns); }
        if (isDef(data)) { registerDeepBindings(data); }
        return vnode
      } else {
        return createEmptyVNode()
      }
    }

    function applyNS (vnode, ns, force) {
      vnode.ns = ns;
      if (vnode.tag === 'foreignObject') {
        // use default namespace inside foreignObject
        ns = undefined;
        force = true;
      }
      if (isDef(vnode.children)) {
        for (var i = 0, l = vnode.children.length; i < l; i++) {
          var child = vnode.children[i];
          if (isDef(child.tag) && (
            isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
            applyNS(child, ns, force);
          }
        }
      }
    }

    // ref #5318
    // necessary to ensure parent re-render when deep bindings like :style and
    // :class are used on slot nodes
    function registerDeepBindings (data) {
      if (isObject(data.style)) {
        traverse(data.style);
      }
      if (isObject(data.class)) {
        traverse(data.class);
      }
    }

    /*  */

    function initRender (vm) {
      vm._vnode = null; // the root of the child tree
      vm._staticTrees = null; // v-once cached trees
      var options = vm.$options;
      var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
      var renderContext = parentVnode && parentVnode.context;
      vm.$slots = resolveSlots(options._renderChildren, renderContext);
      vm.$scopedSlots = emptyObject;
      // bind the createElement fn to this instance
      // so that we get proper render context inside it.
      // args order: tag, data, children, normalizationType, alwaysNormalize
      // internal version is used by render functions compiled from templates
      vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
      // normalization is always applied for the public version, used in
      // user-written render functions.
      vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

      // $attrs & $listeners are exposed for easier HOC creation.
      // they need to be reactive so that HOCs using them are always updated
      var parentData = parentVnode && parentVnode.data;

      /* istanbul ignore else */
      {
        defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
          !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
        }, true);
        defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
          !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
        }, true);
      }
    }

    var currentRenderingInstance = null;

    function renderMixin (Vue) {
      // install runtime convenience helpers
      installRenderHelpers(Vue.prototype);

      Vue.prototype.$nextTick = function (fn) {
        return nextTick(fn, this)
      };

      Vue.prototype._render = function () {
        var vm = this;
        var ref = vm.$options;
        var render = ref.render;
        var _parentVnode = ref._parentVnode;

        if (_parentVnode) {
          vm.$scopedSlots = normalizeScopedSlots(
            _parentVnode.data.scopedSlots,
            vm.$slots,
            vm.$scopedSlots
          );
        }

        // set parent vnode. this allows render functions to have access
        // to the data on the placeholder node.
        vm.$vnode = _parentVnode;
        // render self
        var vnode;
        try {
          // There's no need to maintain a stack because all render fns are called
          // separately from one another. Nested component's render fns are called
          // when parent component is patched.
          currentRenderingInstance = vm;
          vnode = render.call(vm._renderProxy, vm.$createElement);
        } catch (e) {
          handleError(e, vm, "render");
          // return error render result,
          // or previous vnode to prevent render error causing blank component
          /* istanbul ignore else */
          if ( vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        } finally {
          currentRenderingInstance = null;
        }
        // if the returned array contains only a single node, allow it
        if (Array.isArray(vnode) && vnode.length === 1) {
          vnode = vnode[0];
        }
        // return empty vnode in case the render function errored out
        if (!(vnode instanceof VNode)) {
          if ( Array.isArray(vnode)) {
            warn(
              'Multiple root nodes returned from render function. Render function ' +
              'should return a single root node.',
              vm
            );
          }
          vnode = createEmptyVNode();
        }
        // set parent
        vnode.parent = _parentVnode;
        return vnode
      };
    }

    /*  */

    function ensureCtor (comp, base) {
      if (
        comp.__esModule ||
        (hasSymbol && comp[Symbol.toStringTag] === 'Module')
      ) {
        comp = comp.default;
      }
      return isObject(comp)
        ? base.extend(comp)
        : comp
    }

    function createAsyncPlaceholder (
      factory,
      data,
      context,
      children,
      tag
    ) {
      var node = createEmptyVNode();
      node.asyncFactory = factory;
      node.asyncMeta = { data: data, context: context, children: children, tag: tag };
      return node
    }

    function resolveAsyncComponent (
      factory,
      baseCtor
    ) {
      if (isTrue(factory.error) && isDef(factory.errorComp)) {
        return factory.errorComp
      }

      if (isDef(factory.resolved)) {
        return factory.resolved
      }

      var owner = currentRenderingInstance;
      if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
        // already pending
        factory.owners.push(owner);
      }

      if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
        return factory.loadingComp
      }

      if (owner && !isDef(factory.owners)) {
        var owners = factory.owners = [owner];
        var sync = true;
        var timerLoading = null;
        var timerTimeout = null

        ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

        var forceRender = function (renderCompleted) {
          for (var i = 0, l = owners.length; i < l; i++) {
            (owners[i]).$forceUpdate();
          }

          if (renderCompleted) {
            owners.length = 0;
            if (timerLoading !== null) {
              clearTimeout(timerLoading);
              timerLoading = null;
            }
            if (timerTimeout !== null) {
              clearTimeout(timerTimeout);
              timerTimeout = null;
            }
          }
        };

        var resolve = once(function (res) {
          // cache resolved
          factory.resolved = ensureCtor(res, baseCtor);
          // invoke callbacks only if this is not a synchronous resolve
          // (async resolves are shimmed as synchronous during SSR)
          if (!sync) {
            forceRender(true);
          } else {
            owners.length = 0;
          }
        });

        var reject = once(function (reason) {
           warn(
            "Failed to resolve async component: " + (String(factory)) +
            (reason ? ("\nReason: " + reason) : '')
          );
          if (isDef(factory.errorComp)) {
            factory.error = true;
            forceRender(true);
          }
        });

        var res = factory(resolve, reject);

        if (isObject(res)) {
          if (isPromise(res)) {
            // () => Promise
            if (isUndef(factory.resolved)) {
              res.then(resolve, reject);
            }
          } else if (isPromise(res.component)) {
            res.component.then(resolve, reject);

            if (isDef(res.error)) {
              factory.errorComp = ensureCtor(res.error, baseCtor);
            }

            if (isDef(res.loading)) {
              factory.loadingComp = ensureCtor(res.loading, baseCtor);
              if (res.delay === 0) {
                factory.loading = true;
              } else {
                timerLoading = setTimeout(function () {
                  timerLoading = null;
                  if (isUndef(factory.resolved) && isUndef(factory.error)) {
                    factory.loading = true;
                    forceRender(false);
                  }
                }, res.delay || 200);
              }
            }

            if (isDef(res.timeout)) {
              timerTimeout = setTimeout(function () {
                timerTimeout = null;
                if (isUndef(factory.resolved)) {
                  reject(
                     ("timeout (" + (res.timeout) + "ms)")
                      
                  );
                }
              }, res.timeout);
            }
          }
        }

        sync = false;
        // return in case resolved synchronously
        return factory.loading
          ? factory.loadingComp
          : factory.resolved
      }
    }

    /*  */

    function getFirstComponentChild (children) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          var c = children[i];
          if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
            return c
          }
        }
      }
    }

    /*  */

    /*  */

    function initEvents (vm) {
      vm._events = Object.create(null);
      vm._hasHookEvent = false;
      // init parent attached events
      var listeners = vm.$options._parentListeners;
      if (listeners) {
        updateComponentListeners(vm, listeners);
      }
    }

    var target;

    function add (event, fn) {
      target.$on(event, fn);
    }

    function remove$1 (event, fn) {
      target.$off(event, fn);
    }

    function createOnceHandler (event, fn) {
      var _target = target;
      return function onceHandler () {
        var res = fn.apply(null, arguments);
        if (res !== null) {
          _target.$off(event, onceHandler);
        }
      }
    }

    function updateComponentListeners (
      vm,
      listeners,
      oldListeners
    ) {
      target = vm;
      updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
      target = undefined;
    }

    function eventsMixin (Vue) {
      var hookRE = /^hook:/;
      Vue.prototype.$on = function (event, fn) {
        var vm = this;
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            vm.$on(event[i], fn);
          }
        } else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          // optimize hook:event cost by using a boolean flag marked at registration
          // instead of a hash lookup
          if (hookRE.test(event)) {
            vm._hasHookEvent = true;
          }
        }
        return vm
      };

      Vue.prototype.$once = function (event, fn) {
        var vm = this;
        function on () {
          vm.$off(event, on);
          fn.apply(vm, arguments);
        }
        on.fn = fn;
        vm.$on(event, on);
        return vm
      };

      Vue.prototype.$off = function (event, fn) {
        var vm = this;
        // all
        if (!arguments.length) {
          vm._events = Object.create(null);
          return vm
        }
        // array of events
        if (Array.isArray(event)) {
          for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
            vm.$off(event[i$1], fn);
          }
          return vm
        }
        // specific event
        var cbs = vm._events[event];
        if (!cbs) {
          return vm
        }
        if (!fn) {
          vm._events[event] = null;
          return vm
        }
        // specific handler
        var cb;
        var i = cbs.length;
        while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1);
            break
          }
        }
        return vm
      };

      Vue.prototype.$emit = function (event) {
        var vm = this;
        {
          var lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            tip(
              "Event \"" + lowerCaseEvent + "\" is emitted in component " +
              (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
              "Note that HTML attributes are case-insensitive and you cannot use " +
              "v-on to listen to camelCase events when using in-DOM templates. " +
              "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
            );
          }
        }
        var cbs = vm._events[event];
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          var info = "event handler for \"" + event + "\"";
          for (var i = 0, l = cbs.length; i < l; i++) {
            invokeWithErrorHandling(cbs[i], vm, args, vm, info);
          }
        }
        return vm
      };
    }

    /*  */

    var activeInstance = null;
    var isUpdatingChildComponent = false;

    function setActiveInstance(vm) {
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      return function () {
        activeInstance = prevActiveInstance;
      }
    }

    function initLifecycle (vm) {
      var options = vm.$options;

      // locate first non-abstract parent
      var parent = options.parent;
      if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
          parent = parent.$parent;
        }
        parent.$children.push(vm);
      }

      vm.$parent = parent;
      vm.$root = parent ? parent.$root : vm;

      vm.$children = [];
      vm.$refs = {};

      vm._watcher = null;
      vm._inactive = null;
      vm._directInactive = false;
      vm._isMounted = false;
      vm._isDestroyed = false;
      vm._isBeingDestroyed = false;
    }

    function lifecycleMixin (Vue) {
      Vue.prototype._update = function (vnode, hydrating) {
        var vm = this;
        var prevEl = vm.$el;
        var prevVnode = vm._vnode;
        var restoreActiveInstance = setActiveInstance(vm);
        vm._vnode = vnode;
        // Vue.prototype.__patch__ is injected in entry points
        // based on the rendering backend used.
        if (!prevVnode) {
          // initial render
          vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
        } else {
          // updates
          vm.$el = vm.__patch__(prevVnode, vnode);
        }
        restoreActiveInstance();
        // update __vue__ reference
        if (prevEl) {
          prevEl.__vue__ = null;
        }
        if (vm.$el) {
          vm.$el.__vue__ = vm;
        }
        // if parent is an HOC, update its $el as well
        if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
          vm.$parent.$el = vm.$el;
        }
        // updated hook is called by the scheduler to ensure that children are
        // updated in a parent's updated hook.
      };

      Vue.prototype.$forceUpdate = function () {
        var vm = this;
        if (vm._watcher) {
          vm._watcher.update();
        }
      };

      Vue.prototype.$destroy = function () {
        var vm = this;
        if (vm._isBeingDestroyed) {
          return
        }
        callHook(vm, 'beforeDestroy');
        vm._isBeingDestroyed = true;
        // remove self from parent
        var parent = vm.$parent;
        if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
          remove(parent.$children, vm);
        }
        // teardown watchers
        if (vm._watcher) {
          vm._watcher.teardown();
        }
        var i = vm._watchers.length;
        while (i--) {
          vm._watchers[i].teardown();
        }
        // remove reference from data ob
        // frozen object may not have observer.
        if (vm._data.__ob__) {
          vm._data.__ob__.vmCount--;
        }
        // call the last hook...
        vm._isDestroyed = true;
        // invoke destroy hooks on current rendered tree
        vm.__patch__(vm._vnode, null);
        // fire destroyed hook
        callHook(vm, 'destroyed');
        // turn off all instance listeners.
        vm.$off();
        // remove __vue__ reference
        if (vm.$el) {
          vm.$el.__vue__ = null;
        }
        // release circular reference (#6759)
        if (vm.$vnode) {
          vm.$vnode.parent = null;
        }
      };
    }

    function mountComponent (
      vm,
      el,
      hydrating
    ) {
      vm.$el = el;
      if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode;
        {
          /* istanbul ignore if */
          if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
            vm.$options.el || el) {
            warn(
              'You are using the runtime-only build of Vue where the template ' +
              'compiler is not available. Either pre-compile the templates into ' +
              'render functions, or use the compiler-included build.',
              vm
            );
          } else {
            warn(
              'Failed to mount component: template or render function not defined.',
              vm
            );
          }
        }
      }
      callHook(vm, 'beforeMount');

      var updateComponent;
      /* istanbul ignore if */
      if ( config.performance && mark) {
        updateComponent = function () {
          var name = vm._name;
          var id = vm._uid;
          var startTag = "vue-perf-start:" + id;
          var endTag = "vue-perf-end:" + id;

          mark(startTag);
          var vnode = vm._render();
          mark(endTag);
          measure(("vue " + name + " render"), startTag, endTag);

          mark(startTag);
          vm._update(vnode, hydrating);
          mark(endTag);
          measure(("vue " + name + " patch"), startTag, endTag);
        };
      } else {
        updateComponent = function () {
          vm._update(vm._render(), hydrating);
        };
      }

      // we set this to vm._watcher inside the watcher's constructor
      // since the watcher's initial patch may call $forceUpdate (e.g. inside child
      // component's mounted hook), which relies on vm._watcher being already defined
      new Watcher(vm, updateComponent, noop, {
        before: function before () {
          if (vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'beforeUpdate');
          }
        }
      }, true /* isRenderWatcher */);
      hydrating = false;

      // manually mounted instance, call mounted on self
      // mounted is called for render-created child components in its inserted hook
      if (vm.$vnode == null) {
        vm._isMounted = true;
        callHook(vm, 'mounted');
      }
      return vm
    }

    function updateChildComponent (
      vm,
      propsData,
      listeners,
      parentVnode,
      renderChildren
    ) {
      {
        isUpdatingChildComponent = true;
      }

      // determine whether component has slot children
      // we need to do this before overwriting $options._renderChildren.

      // check if there are dynamic scopedSlots (hand-written or compiled but with
      // dynamic slot names). Static scoped slots compiled from template has the
      // "$stable" marker.
      var newScopedSlots = parentVnode.data.scopedSlots;
      var oldScopedSlots = vm.$scopedSlots;
      var hasDynamicScopedSlot = !!(
        (newScopedSlots && !newScopedSlots.$stable) ||
        (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
        (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
        (!newScopedSlots && vm.$scopedSlots.$key)
      );

      // Any static slot children from the parent may have changed during parent's
      // update. Dynamic scoped slots may also have changed. In such cases, a forced
      // update is necessary to ensure correctness.
      var needsForceUpdate = !!(
        renderChildren ||               // has new static slots
        vm.$options._renderChildren ||  // has old static slots
        hasDynamicScopedSlot
      );

      vm.$options._parentVnode = parentVnode;
      vm.$vnode = parentVnode; // update vm's placeholder node without re-render

      if (vm._vnode) { // update child tree's parent
        vm._vnode.parent = parentVnode;
      }
      vm.$options._renderChildren = renderChildren;

      // update $attrs and $listeners hash
      // these are also reactive so they may trigger child update if the child
      // used them during render
      vm.$attrs = parentVnode.data.attrs || emptyObject;
      vm.$listeners = listeners || emptyObject;

      // update props
      if (propsData && vm.$options.props) {
        toggleObserving(false);
        var props = vm._props;
        var propKeys = vm.$options._propKeys || [];
        for (var i = 0; i < propKeys.length; i++) {
          var key = propKeys[i];
          var propOptions = vm.$options.props; // wtf flow?
          props[key] = validateProp(key, propOptions, propsData, vm);
        }
        toggleObserving(true);
        // keep a copy of raw propsData
        vm.$options.propsData = propsData;
      }

      // update listeners
      listeners = listeners || emptyObject;
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);

      // resolve slots + force update if has children
      if (needsForceUpdate) {
        vm.$slots = resolveSlots(renderChildren, parentVnode.context);
        vm.$forceUpdate();
      }

      {
        isUpdatingChildComponent = false;
      }
    }

    function isInInactiveTree (vm) {
      while (vm && (vm = vm.$parent)) {
        if (vm._inactive) { return true }
      }
      return false
    }

    function activateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = false;
        if (isInInactiveTree(vm)) {
          return
        }
      } else if (vm._directInactive) {
        return
      }
      if (vm._inactive || vm._inactive === null) {
        vm._inactive = false;
        for (var i = 0; i < vm.$children.length; i++) {
          activateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'activated');
      }
    }

    function deactivateChildComponent (vm, direct) {
      if (direct) {
        vm._directInactive = true;
        if (isInInactiveTree(vm)) {
          return
        }
      }
      if (!vm._inactive) {
        vm._inactive = true;
        for (var i = 0; i < vm.$children.length; i++) {
          deactivateChildComponent(vm.$children[i]);
        }
        callHook(vm, 'deactivated');
      }
    }

    function callHook (vm, hook) {
      // #7573 disable dep collection when invoking lifecycle hooks
      pushTarget();
      var handlers = vm.$options[hook];
      var info = hook + " hook";
      if (handlers) {
        for (var i = 0, j = handlers.length; i < j; i++) {
          invokeWithErrorHandling(handlers[i], vm, null, vm, info);
        }
      }
      if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook);
      }
      popTarget();
    }

    /*  */

    var MAX_UPDATE_COUNT = 100;

    var queue = [];
    var activatedChildren = [];
    var has = {};
    var circular = {};
    var waiting = false;
    var flushing = false;
    var index = 0;

    /**
     * Reset the scheduler's state.
     */
    function resetSchedulerState () {
      index = queue.length = activatedChildren.length = 0;
      has = {};
      {
        circular = {};
      }
      waiting = flushing = false;
    }

    // Async edge case #6566 requires saving the timestamp when event listeners are
    // attached. However, calling performance.now() has a perf overhead especially
    // if the page has thousands of event listeners. Instead, we take a timestamp
    // every time the scheduler flushes and use that for all event listeners
    // attached during that flush.
    var currentFlushTimestamp = 0;

    // Async edge case fix requires storing an event listener's attach timestamp.
    var getNow = Date.now;

    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    // All IE versions use low-res event timestamps, and have problematic clock
    // implementations (#9632)
    if (inBrowser && !isIE) {
      var performance = window.performance;
      if (
        performance &&
        typeof performance.now === 'function' &&
        getNow() > document.createEvent('Event').timeStamp
      ) {
        // if the event timestamp, although evaluated AFTER the Date.now(), is
        // smaller than it, it means the event is using a hi-res timestamp,
        // and we need to use the hi-res version for event listener timestamps as
        // well.
        getNow = function () { return performance.now(); };
      }
    }

    /**
     * Flush both queues and run the watchers.
     */
    function flushSchedulerQueue () {
      currentFlushTimestamp = getNow();
      flushing = true;
      var watcher, id;

      // Sort queue before flush.
      // This ensures that:
      // 1. Components are updated from parent to child. (because parent is always
      //    created before the child)
      // 2. A component's user watchers are run before its render watcher (because
      //    user watchers are created before the render watcher)
      // 3. If a component is destroyed during a parent component's watcher run,
      //    its watchers can be skipped.
      queue.sort(function (a, b) { return a.id - b.id; });

      // do not cache length because more watchers might be pushed
      // as we run existing watchers
      for (index = 0; index < queue.length; index++) {
        watcher = queue[index];
        if (watcher.before) {
          watcher.before();
        }
        id = watcher.id;
        has[id] = null;
        watcher.run();
        // in dev build, check and stop circular updates.
        if ( has[id] != null) {
          circular[id] = (circular[id] || 0) + 1;
          if (circular[id] > MAX_UPDATE_COUNT) {
            warn(
              'You may have an infinite update loop ' + (
                watcher.user
                  ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                  : "in a component render function."
              ),
              watcher.vm
            );
            break
          }
        }
      }

      // keep copies of post queues before resetting state
      var activatedQueue = activatedChildren.slice();
      var updatedQueue = queue.slice();

      resetSchedulerState();

      // call component updated and activated hooks
      callActivatedHooks(activatedQueue);
      callUpdatedHooks(updatedQueue);

      // devtool hook
      /* istanbul ignore if */
      if (devtools && config.devtools) {
        devtools.emit('flush');
      }
    }

    function callUpdatedHooks (queue) {
      var i = queue.length;
      while (i--) {
        var watcher = queue[i];
        var vm = watcher.vm;
        if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'updated');
        }
      }
    }

    /**
     * Queue a kept-alive component that was activated during patch.
     * The queue will be processed after the entire tree has been patched.
     */
    function queueActivatedComponent (vm) {
      // setting _inactive to false here so that a render function can
      // rely on checking whether it's in an inactive tree (e.g. router-view)
      vm._inactive = false;
      activatedChildren.push(vm);
    }

    function callActivatedHooks (queue) {
      for (var i = 0; i < queue.length; i++) {
        queue[i]._inactive = true;
        activateChildComponent(queue[i], true /* true */);
      }
    }

    /**
     * Push a watcher into the watcher queue.
     * Jobs with duplicate IDs will be skipped unless it's
     * pushed when the queue is being flushed.
     */
    function queueWatcher (watcher) {
      var id = watcher.id;
      if (has[id] == null) {
        has[id] = true;
        if (!flushing) {
          queue.push(watcher);
        } else {
          // if already flushing, splice the watcher based on its id
          // if already past its id, it will be run next immediately.
          var i = queue.length - 1;
          while (i > index && queue[i].id > watcher.id) {
            i--;
          }
          queue.splice(i + 1, 0, watcher);
        }
        // queue the flush
        if (!waiting) {
          waiting = true;

          if ( !config.async) {
            flushSchedulerQueue();
            return
          }
          nextTick(flushSchedulerQueue);
        }
      }
    }

    /*  */



    var uid$2 = 0;

    /**
     * A watcher parses an expression, collects dependencies,
     * and fires callback when the expression value changes.
     * This is used for both the $watch() api and directives.
     */
    var Watcher = function Watcher (
      vm,
      expOrFn,
      cb,
      options,
      isRenderWatcher
    ) {
      this.vm = vm;
      if (isRenderWatcher) {
        vm._watcher = this;
      }
      vm._watchers.push(this);
      // options
      if (options) {
        this.deep = !!options.deep;
        this.user = !!options.user;
        this.lazy = !!options.lazy;
        this.sync = !!options.sync;
        this.before = options.before;
      } else {
        this.deep = this.user = this.lazy = this.sync = false;
      }
      this.cb = cb;
      this.id = ++uid$2; // uid for batching
      this.active = true;
      this.dirty = this.lazy; // for lazy watchers
      this.deps = [];
      this.newDeps = [];
      this.depIds = new _Set();
      this.newDepIds = new _Set();
      this.expression =  expOrFn.toString()
        ;
      // parse expression for getter
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
      } else {
        this.getter = parsePath(expOrFn);
        if (!this.getter) {
          this.getter = noop;
           warn(
            "Failed watching path: \"" + expOrFn + "\" " +
            'Watcher only accepts simple dot-delimited paths. ' +
            'For full control, use a function instead.',
            vm
          );
        }
      }
      this.value = this.lazy
        ? undefined
        : this.get();
    };

    /**
     * Evaluate the getter, and re-collect dependencies.
     */
    Watcher.prototype.get = function get () {
      pushTarget(this);
      var value;
      var vm = this.vm;
      try {
        value = this.getter.call(vm, vm);
      } catch (e) {
        if (this.user) {
          handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
        } else {
          throw e
        }
      } finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
          traverse(value);
        }
        popTarget();
        this.cleanupDeps();
      }
      return value
    };

    /**
     * Add a dependency to this directive.
     */
    Watcher.prototype.addDep = function addDep (dep) {
      var id = dep.id;
      if (!this.newDepIds.has(id)) {
        this.newDepIds.add(id);
        this.newDeps.push(dep);
        if (!this.depIds.has(id)) {
          dep.addSub(this);
        }
      }
    };

    /**
     * Clean up for dependency collection.
     */
    Watcher.prototype.cleanupDeps = function cleanupDeps () {
      var i = this.deps.length;
      while (i--) {
        var dep = this.deps[i];
        if (!this.newDepIds.has(dep.id)) {
          dep.removeSub(this);
        }
      }
      var tmp = this.depIds;
      this.depIds = this.newDepIds;
      this.newDepIds = tmp;
      this.newDepIds.clear();
      tmp = this.deps;
      this.deps = this.newDeps;
      this.newDeps = tmp;
      this.newDeps.length = 0;
    };

    /**
     * Subscriber interface.
     * Will be called when a dependency changes.
     */
    Watcher.prototype.update = function update () {
      /* istanbul ignore else */
      if (this.lazy) {
        this.dirty = true;
      } else if (this.sync) {
        this.run();
      } else {
        queueWatcher(this);
      }
    };

    /**
     * Scheduler job interface.
     * Will be called by the scheduler.
     */
    Watcher.prototype.run = function run () {
      if (this.active) {
        var value = this.get();
        if (
          value !== this.value ||
          // Deep watchers and watchers on Object/Arrays should fire even
          // when the value is the same, because the value may
          // have mutated.
          isObject(value) ||
          this.deep
        ) {
          // set new value
          var oldValue = this.value;
          this.value = value;
          if (this.user) {
            var info = "callback for watcher \"" + (this.expression) + "\"";
            invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
          } else {
            this.cb.call(this.vm, value, oldValue);
          }
        }
      }
    };

    /**
     * Evaluate the value of the watcher.
     * This only gets called for lazy watchers.
     */
    Watcher.prototype.evaluate = function evaluate () {
      this.value = this.get();
      this.dirty = false;
    };

    /**
     * Depend on all deps collected by this watcher.
     */
    Watcher.prototype.depend = function depend () {
      var i = this.deps.length;
      while (i--) {
        this.deps[i].depend();
      }
    };

    /**
     * Remove self from all dependencies' subscriber list.
     */
    Watcher.prototype.teardown = function teardown () {
      if (this.active) {
        // remove self from vm's watcher list
        // this is a somewhat expensive operation so we skip it
        // if the vm is being destroyed.
        if (!this.vm._isBeingDestroyed) {
          remove(this.vm._watchers, this);
        }
        var i = this.deps.length;
        while (i--) {
          this.deps[i].removeSub(this);
        }
        this.active = false;
      }
    };

    /*  */

    var sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: noop,
      set: noop
    };

    function proxy (target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
      };
      sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val;
      };
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }

    function initState (vm) {
      vm._watchers = [];
      var opts = vm.$options;
      if (opts.props) { initProps(vm, opts.props); }
      if (opts.methods) { initMethods(vm, opts.methods); }
      if (opts.data) {
        initData(vm);
      } else {
        observe(vm._data = {}, true /* asRootData */);
      }
      if (opts.computed) { initComputed(vm, opts.computed); }
      if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
      }
    }

    function initProps (vm, propsOptions) {
      var propsData = vm.$options.propsData || {};
      var props = vm._props = {};
      // cache prop keys so that future props updates can iterate using Array
      // instead of dynamic object key enumeration.
      var keys = vm.$options._propKeys = [];
      var isRoot = !vm.$parent;
      // root instance props should be converted
      if (!isRoot) {
        toggleObserving(false);
      }
      var loop = function ( key ) {
        keys.push(key);
        var value = validateProp(key, propsOptions, propsData, vm);
        /* istanbul ignore else */
        {
          var hyphenatedKey = hyphenate(key);
          if (isReservedAttribute(hyphenatedKey) ||
              config.isReservedAttr(hyphenatedKey)) {
            warn(
              ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
              vm
            );
          }
          defineReactive$$1(props, key, value, function () {
            if (!isRoot && !isUpdatingChildComponent) {
              warn(
                "Avoid mutating a prop directly since the value will be " +
                "overwritten whenever the parent component re-renders. " +
                "Instead, use a data or computed property based on the prop's " +
                "value. Prop being mutated: \"" + key + "\"",
                vm
              );
            }
          });
        }
        // static props are already proxied on the component's prototype
        // during Vue.extend(). We only need to proxy props defined at
        // instantiation here.
        if (!(key in vm)) {
          proxy(vm, "_props", key);
        }
      };

      for (var key in propsOptions) loop( key );
      toggleObserving(true);
    }

    function initData (vm) {
      var data = vm.$options.data;
      data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {};
      if (!isPlainObject(data)) {
        data = {};
         warn(
          'data functions should return an object:\n' +
          'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
          vm
        );
      }
      // proxy data on instance
      var keys = Object.keys(data);
      var props = vm.$options.props;
      var methods = vm.$options.methods;
      var i = keys.length;
      while (i--) {
        var key = keys[i];
        {
          if (methods && hasOwn(methods, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a data property."),
              vm
            );
          }
        }
        if (props && hasOwn(props, key)) {
           warn(
            "The data property \"" + key + "\" is already declared as a prop. " +
            "Use prop default value instead.",
            vm
          );
        } else if (!isReserved(key)) {
          proxy(vm, "_data", key);
        }
      }
      // observe data
      observe(data, true /* asRootData */);
    }

    function getData (data, vm) {
      // #7573 disable dep collection when invoking data getters
      pushTarget();
      try {
        return data.call(vm, vm)
      } catch (e) {
        handleError(e, vm, "data()");
        return {}
      } finally {
        popTarget();
      }
    }

    var computedWatcherOptions = { lazy: true };

    function initComputed (vm, computed) {
      // $flow-disable-line
      var watchers = vm._computedWatchers = Object.create(null);
      // computed properties are just getters during SSR
      var isSSR = isServerRendering();

      for (var key in computed) {
        var userDef = computed[key];
        var getter = typeof userDef === 'function' ? userDef : userDef.get;
        if ( getter == null) {
          warn(
            ("Getter is missing for computed property \"" + key + "\"."),
            vm
          );
        }

        if (!isSSR) {
          // create internal watcher for the computed property.
          watchers[key] = new Watcher(
            vm,
            getter || noop,
            noop,
            computedWatcherOptions
          );
        }

        // component-defined computed properties are already defined on the
        // component prototype. We only need to define computed properties defined
        // at instantiation here.
        if (!(key in vm)) {
          defineComputed(vm, key, userDef);
        } else {
          if (key in vm.$data) {
            warn(("The computed property \"" + key + "\" is already defined in data."), vm);
          } else if (vm.$options.props && key in vm.$options.props) {
            warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
          } else if (vm.$options.methods && key in vm.$options.methods) {
            warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
          }
        }
      }
    }

    function defineComputed (
      target,
      key,
      userDef
    ) {
      var shouldCache = !isServerRendering();
      if (typeof userDef === 'function') {
        sharedPropertyDefinition.get = shouldCache
          ? createComputedGetter(key)
          : createGetterInvoker(userDef);
        sharedPropertyDefinition.set = noop;
      } else {
        sharedPropertyDefinition.get = userDef.get
          ? shouldCache && userDef.cache !== false
            ? createComputedGetter(key)
            : createGetterInvoker(userDef.get)
          : noop;
        sharedPropertyDefinition.set = userDef.set || noop;
      }
      if (
          sharedPropertyDefinition.set === noop) {
        sharedPropertyDefinition.set = function () {
          warn(
            ("Computed property \"" + key + "\" was assigned to but it has no setter."),
            this
          );
        };
      }
      Object.defineProperty(target, key, sharedPropertyDefinition);
    }

    function createComputedGetter (key) {
      return function computedGetter () {
        var watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
          if (watcher.dirty) {
            watcher.evaluate();
          }
          if (Dep.target) {
            watcher.depend();
          }
          return watcher.value
        }
      }
    }

    function createGetterInvoker(fn) {
      return function computedGetter () {
        return fn.call(this, this)
      }
    }

    function initMethods (vm, methods) {
      var props = vm.$options.props;
      for (var key in methods) {
        {
          if (typeof methods[key] !== 'function') {
            warn(
              "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
              "Did you reference the function correctly?",
              vm
            );
          }
          if (props && hasOwn(props, key)) {
            warn(
              ("Method \"" + key + "\" has already been defined as a prop."),
              vm
            );
          }
          if ((key in vm) && isReserved(key)) {
            warn(
              "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
              "Avoid defining component methods that start with _ or $."
            );
          }
        }
        vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
      }
    }

    function initWatch (vm, watch) {
      for (var key in watch) {
        var handler = watch[key];
        if (Array.isArray(handler)) {
          for (var i = 0; i < handler.length; i++) {
            createWatcher(vm, key, handler[i]);
          }
        } else {
          createWatcher(vm, key, handler);
        }
      }
    }

    function createWatcher (
      vm,
      expOrFn,
      handler,
      options
    ) {
      if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
      }
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      return vm.$watch(expOrFn, handler, options)
    }

    function stateMixin (Vue) {
      // flow somehow has problems with directly declared definition object
      // when using Object.defineProperty, so we have to procedurally build up
      // the object here.
      var dataDef = {};
      dataDef.get = function () { return this._data };
      var propsDef = {};
      propsDef.get = function () { return this._props };
      {
        dataDef.set = function () {
          warn(
            'Avoid replacing instance root $data. ' +
            'Use nested data properties instead.',
            this
          );
        };
        propsDef.set = function () {
          warn("$props is readonly.", this);
        };
      }
      Object.defineProperty(Vue.prototype, '$data', dataDef);
      Object.defineProperty(Vue.prototype, '$props', propsDef);

      Vue.prototype.$set = set;
      Vue.prototype.$delete = del;

      Vue.prototype.$watch = function (
        expOrFn,
        cb,
        options
      ) {
        var vm = this;
        if (isPlainObject(cb)) {
          return createWatcher(vm, expOrFn, cb, options)
        }
        options = options || {};
        options.user = true;
        var watcher = new Watcher(vm, expOrFn, cb, options);
        if (options.immediate) {
          var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
          pushTarget();
          invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
          popTarget();
        }
        return function unwatchFn () {
          watcher.teardown();
        }
      };
    }

    /*  */

    var uid$3 = 0;

    function initMixin (Vue) {
      Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid$3++;

        var startTag, endTag;
        /* istanbul ignore if */
        if ( config.performance && mark) {
          startTag = "vue-perf-start:" + (vm._uid);
          endTag = "vue-perf-end:" + (vm._uid);
          mark(startTag);
        }

        // a flag to avoid this being observed
        vm._isVue = true;
        // merge options
        if (options && options._isComponent) {
          // optimize internal component instantiation
          // since dynamic options merging is pretty slow, and none of the
          // internal component options needs special treatment.
          initInternalComponent(vm, options);
        } else {
          vm.$options = mergeOptions(
            resolveConstructorOptions(vm.constructor),
            options || {},
            vm
          );
        }
        /* istanbul ignore else */
        {
          initProxy(vm);
        }
        // expose real self
        vm._self = vm;
        initLifecycle(vm);
        initEvents(vm);
        initRender(vm);
        callHook(vm, 'beforeCreate');
        initInjections(vm); // resolve injections before data/props
        initState(vm);
        initProvide(vm); // resolve provide after data/props
        callHook(vm, 'created');

        /* istanbul ignore if */
        if ( config.performance && mark) {
          vm._name = formatComponentName(vm, false);
          mark(endTag);
          measure(("vue " + (vm._name) + " init"), startTag, endTag);
        }

        if (vm.$options.el) {
          vm.$mount(vm.$options.el);
        }
      };
    }

    function initInternalComponent (vm, options) {
      var opts = vm.$options = Object.create(vm.constructor.options);
      // doing this because it's faster than dynamic enumeration.
      var parentVnode = options._parentVnode;
      opts.parent = options.parent;
      opts._parentVnode = parentVnode;

      var vnodeComponentOptions = parentVnode.componentOptions;
      opts.propsData = vnodeComponentOptions.propsData;
      opts._parentListeners = vnodeComponentOptions.listeners;
      opts._renderChildren = vnodeComponentOptions.children;
      opts._componentTag = vnodeComponentOptions.tag;

      if (options.render) {
        opts.render = options.render;
        opts.staticRenderFns = options.staticRenderFns;
      }
    }

    function resolveConstructorOptions (Ctor) {
      var options = Ctor.options;
      if (Ctor.super) {
        var superOptions = resolveConstructorOptions(Ctor.super);
        var cachedSuperOptions = Ctor.superOptions;
        if (superOptions !== cachedSuperOptions) {
          // super option changed,
          // need to resolve new options.
          Ctor.superOptions = superOptions;
          // check if there are any late-modified/attached options (#4976)
          var modifiedOptions = resolveModifiedOptions(Ctor);
          // update base extend options
          if (modifiedOptions) {
            extend(Ctor.extendOptions, modifiedOptions);
          }
          options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
          if (options.name) {
            options.components[options.name] = Ctor;
          }
        }
      }
      return options
    }

    function resolveModifiedOptions (Ctor) {
      var modified;
      var latest = Ctor.options;
      var sealed = Ctor.sealedOptions;
      for (var key in latest) {
        if (latest[key] !== sealed[key]) {
          if (!modified) { modified = {}; }
          modified[key] = latest[key];
        }
      }
      return modified
    }

    function Vue (options) {
      if (
        !(this instanceof Vue)
      ) {
        warn('Vue is a constructor and should be called with the `new` keyword');
      }
      this._init(options);
    }

    initMixin(Vue);
    stateMixin(Vue);
    eventsMixin(Vue);
    lifecycleMixin(Vue);
    renderMixin(Vue);

    /*  */

    function initUse (Vue) {
      Vue.use = function (plugin) {
        var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
        if (installedPlugins.indexOf(plugin) > -1) {
          return this
        }

        // additional parameters
        var args = toArray(arguments, 1);
        args.unshift(this);
        if (typeof plugin.install === 'function') {
          plugin.install.apply(plugin, args);
        } else if (typeof plugin === 'function') {
          plugin.apply(null, args);
        }
        installedPlugins.push(plugin);
        return this
      };
    }

    /*  */

    function initMixin$1 (Vue) {
      Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin);
        return this
      };
    }

    /*  */

    function initExtend (Vue) {
      /**
       * Each instance constructor, including Vue, has a unique
       * cid. This enables us to create wrapped "child
       * constructors" for prototypal inheritance and cache them.
       */
      Vue.cid = 0;
      var cid = 1;

      /**
       * Class inheritance
       */
      Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {};
        var Super = this;
        var SuperId = Super.cid;
        var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
        if (cachedCtors[SuperId]) {
          return cachedCtors[SuperId]
        }

        var name = extendOptions.name || Super.options.name;
        if ( name) {
          validateComponentName(name);
        }

        var Sub = function VueComponent (options) {
          this._init(options);
        };
        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.cid = cid++;
        Sub.options = mergeOptions(
          Super.options,
          extendOptions
        );
        Sub['super'] = Super;

        // For props and computed properties, we define the proxy getters on
        // the Vue instances at extension time, on the extended prototype. This
        // avoids Object.defineProperty calls for each instance created.
        if (Sub.options.props) {
          initProps$1(Sub);
        }
        if (Sub.options.computed) {
          initComputed$1(Sub);
        }

        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend;
        Sub.mixin = Super.mixin;
        Sub.use = Super.use;

        // create asset registers, so extended classes
        // can have their private assets too.
        ASSET_TYPES.forEach(function (type) {
          Sub[type] = Super[type];
        });
        // enable recursive self-lookup
        if (name) {
          Sub.options.components[name] = Sub;
        }

        // keep a reference to the super options at extension time.
        // later at instantiation we can check if Super's options have
        // been updated.
        Sub.superOptions = Super.options;
        Sub.extendOptions = extendOptions;
        Sub.sealedOptions = extend({}, Sub.options);

        // cache constructor
        cachedCtors[SuperId] = Sub;
        return Sub
      };
    }

    function initProps$1 (Comp) {
      var props = Comp.options.props;
      for (var key in props) {
        proxy(Comp.prototype, "_props", key);
      }
    }

    function initComputed$1 (Comp) {
      var computed = Comp.options.computed;
      for (var key in computed) {
        defineComputed(Comp.prototype, key, computed[key]);
      }
    }

    /*  */

    function initAssetRegisters (Vue) {
      /**
       * Create asset registration methods.
       */
      ASSET_TYPES.forEach(function (type) {
        Vue[type] = function (
          id,
          definition
        ) {
          if (!definition) {
            return this.options[type + 's'][id]
          } else {
            /* istanbul ignore if */
            if ( type === 'component') {
              validateComponentName(id);
            }
            if (type === 'component' && isPlainObject(definition)) {
              definition.name = definition.name || id;
              definition = this.options._base.extend(definition);
            }
            if (type === 'directive' && typeof definition === 'function') {
              definition = { bind: definition, update: definition };
            }
            this.options[type + 's'][id] = definition;
            return definition
          }
        };
      });
    }

    /*  */





    function getComponentName (opts) {
      return opts && (opts.Ctor.options.name || opts.tag)
    }

    function matches (pattern, name) {
      if (Array.isArray(pattern)) {
        return pattern.indexOf(name) > -1
      } else if (typeof pattern === 'string') {
        return pattern.split(',').indexOf(name) > -1
      } else if (isRegExp(pattern)) {
        return pattern.test(name)
      }
      /* istanbul ignore next */
      return false
    }

    function pruneCache (keepAliveInstance, filter) {
      var cache = keepAliveInstance.cache;
      var keys = keepAliveInstance.keys;
      var _vnode = keepAliveInstance._vnode;
      for (var key in cache) {
        var entry = cache[key];
        if (entry) {
          var name = entry.name;
          if (name && !filter(name)) {
            pruneCacheEntry(cache, key, keys, _vnode);
          }
        }
      }
    }

    function pruneCacheEntry (
      cache,
      key,
      keys,
      current
    ) {
      var entry = cache[key];
      if (entry && (!current || entry.tag !== current.tag)) {
        entry.componentInstance.$destroy();
      }
      cache[key] = null;
      remove(keys, key);
    }

    var patternTypes = [String, RegExp, Array];

    var KeepAlive = {
      name: 'keep-alive',
      abstract: true,

      props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
      },

      methods: {
        cacheVNode: function cacheVNode() {
          var ref = this;
          var cache = ref.cache;
          var keys = ref.keys;
          var vnodeToCache = ref.vnodeToCache;
          var keyToCache = ref.keyToCache;
          if (vnodeToCache) {
            var tag = vnodeToCache.tag;
            var componentInstance = vnodeToCache.componentInstance;
            var componentOptions = vnodeToCache.componentOptions;
            cache[keyToCache] = {
              name: getComponentName(componentOptions),
              tag: tag,
              componentInstance: componentInstance,
            };
            keys.push(keyToCache);
            // prune oldest entry
            if (this.max && keys.length > parseInt(this.max)) {
              pruneCacheEntry(cache, keys[0], keys, this._vnode);
            }
            this.vnodeToCache = null;
          }
        }
      },

      created: function created () {
        this.cache = Object.create(null);
        this.keys = [];
      },

      destroyed: function destroyed () {
        for (var key in this.cache) {
          pruneCacheEntry(this.cache, key, this.keys);
        }
      },

      mounted: function mounted () {
        var this$1 = this;

        this.cacheVNode();
        this.$watch('include', function (val) {
          pruneCache(this$1, function (name) { return matches(val, name); });
        });
        this.$watch('exclude', function (val) {
          pruneCache(this$1, function (name) { return !matches(val, name); });
        });
      },

      updated: function updated () {
        this.cacheVNode();
      },

      render: function render () {
        var slot = this.$slots.default;
        var vnode = getFirstComponentChild(slot);
        var componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
          // check pattern
          var name = getComponentName(componentOptions);
          var ref = this;
          var include = ref.include;
          var exclude = ref.exclude;
          if (
            // not included
            (include && (!name || !matches(include, name))) ||
            // excluded
            (exclude && name && matches(exclude, name))
          ) {
            return vnode
          }

          var ref$1 = this;
          var cache = ref$1.cache;
          var keys = ref$1.keys;
          var key = vnode.key == null
            // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
            : vnode.key;
          if (cache[key]) {
            vnode.componentInstance = cache[key].componentInstance;
            // make current key freshest
            remove(keys, key);
            keys.push(key);
          } else {
            // delay setting the cache until update
            this.vnodeToCache = vnode;
            this.keyToCache = key;
          }

          vnode.data.keepAlive = true;
        }
        return vnode || (slot && slot[0])
      }
    };

    var builtInComponents = {
      KeepAlive: KeepAlive
    };

    /*  */

    function initGlobalAPI (Vue) {
      // config
      var configDef = {};
      configDef.get = function () { return config; };
      {
        configDef.set = function () {
          warn(
            'Do not replace the Vue.config object, set individual fields instead.'
          );
        };
      }
      Object.defineProperty(Vue, 'config', configDef);

      // exposed util methods.
      // NOTE: these are not considered part of the public API - avoid relying on
      // them unless you are aware of the risk.
      Vue.util = {
        warn: warn,
        extend: extend,
        mergeOptions: mergeOptions,
        defineReactive: defineReactive$$1
      };

      Vue.set = set;
      Vue.delete = del;
      Vue.nextTick = nextTick;

      // 2.6 explicit observable API
      Vue.observable = function (obj) {
        observe(obj);
        return obj
      };

      Vue.options = Object.create(null);
      ASSET_TYPES.forEach(function (type) {
        Vue.options[type + 's'] = Object.create(null);
      });

      // this is used to identify the "base" constructor to extend all plain-object
      // components with in Weex's multi-instance scenarios.
      Vue.options._base = Vue;

      extend(Vue.options.components, builtInComponents);

      initUse(Vue);
      initMixin$1(Vue);
      initExtend(Vue);
      initAssetRegisters(Vue);
    }

    initGlobalAPI(Vue);

    Object.defineProperty(Vue.prototype, '$isServer', {
      get: isServerRendering
    });

    Object.defineProperty(Vue.prototype, '$ssrContext', {
      get: function get () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext
      }
    });

    // expose FunctionalRenderContext for ssr runtime helper installation
    Object.defineProperty(Vue, 'FunctionalRenderContext', {
      value: FunctionalRenderContext
    });

    Vue.version = '2.6.14';

    /*  */

    // these are reserved for web because they are directly compiled away
    // during template compilation
    var isReservedAttr = makeMap('style,class');

    // attributes that should be using props for binding
    var acceptValue = makeMap('input,textarea,option,select,progress');
    var mustUseProp = function (tag, type, attr) {
      return (
        (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
        (attr === 'selected' && tag === 'option') ||
        (attr === 'checked' && tag === 'input') ||
        (attr === 'muted' && tag === 'video')
      )
    };

    var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

    var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

    var convertEnumeratedValue = function (key, value) {
      return isFalsyAttrValue(value) || value === 'false'
        ? 'false'
        // allow arbitrary string value for contenteditable
        : key === 'contenteditable' && isValidContentEditableValue(value)
          ? value
          : 'true'
    };

    var isBooleanAttr = makeMap(
      'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
      'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
      'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
      'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
      'required,reversed,scoped,seamless,selected,sortable,' +
      'truespeed,typemustmatch,visible'
    );

    var xlinkNS = 'http://www.w3.org/1999/xlink';

    var isXlink = function (name) {
      return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
    };

    var getXlinkProp = function (name) {
      return isXlink(name) ? name.slice(6, name.length) : ''
    };

    var isFalsyAttrValue = function (val) {
      return val == null || val === false
    };

    /*  */

    function genClassForVnode (vnode) {
      var data = vnode.data;
      var parentNode = vnode;
      var childNode = vnode;
      while (isDef(childNode.componentInstance)) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data) {
          data = mergeClassData(childNode.data, data);
        }
      }
      while (isDef(parentNode = parentNode.parent)) {
        if (parentNode && parentNode.data) {
          data = mergeClassData(data, parentNode.data);
        }
      }
      return renderClass(data.staticClass, data.class)
    }

    function mergeClassData (child, parent) {
      return {
        staticClass: concat(child.staticClass, parent.staticClass),
        class: isDef(child.class)
          ? [child.class, parent.class]
          : parent.class
      }
    }

    function renderClass (
      staticClass,
      dynamicClass
    ) {
      if (isDef(staticClass) || isDef(dynamicClass)) {
        return concat(staticClass, stringifyClass(dynamicClass))
      }
      /* istanbul ignore next */
      return ''
    }

    function concat (a, b) {
      return a ? b ? (a + ' ' + b) : a : (b || '')
    }

    function stringifyClass (value) {
      if (Array.isArray(value)) {
        return stringifyArray(value)
      }
      if (isObject(value)) {
        return stringifyObject(value)
      }
      if (typeof value === 'string') {
        return value
      }
      /* istanbul ignore next */
      return ''
    }

    function stringifyArray (value) {
      var res = '';
      var stringified;
      for (var i = 0, l = value.length; i < l; i++) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          if (res) { res += ' '; }
          res += stringified;
        }
      }
      return res
    }

    function stringifyObject (value) {
      var res = '';
      for (var key in value) {
        if (value[key]) {
          if (res) { res += ' '; }
          res += key;
        }
      }
      return res
    }

    /*  */

    var namespaceMap = {
      svg: 'http://www.w3.org/2000/svg',
      math: 'http://www.w3.org/1998/Math/MathML'
    };

    var isHTMLTag = makeMap(
      'html,body,base,head,link,meta,style,title,' +
      'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
      'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
      'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
      's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
      'embed,object,param,source,canvas,script,noscript,del,ins,' +
      'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
      'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
      'output,progress,select,textarea,' +
      'details,dialog,menu,menuitem,summary,' +
      'content,element,shadow,template,blockquote,iframe,tfoot'
    );

    // this map is intentionally selective, only covering SVG elements that may
    // contain child elements.
    var isSVG = makeMap(
      'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
      'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
      'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
      true
    );

    var isReservedTag = function (tag) {
      return isHTMLTag(tag) || isSVG(tag)
    };

    function getTagNamespace (tag) {
      if (isSVG(tag)) {
        return 'svg'
      }
      // basic support for MathML
      // note it doesn't support other MathML elements being component roots
      if (tag === 'math') {
        return 'math'
      }
    }

    var unknownElementCache = Object.create(null);
    function isUnknownElement (tag) {
      /* istanbul ignore if */
      if (!inBrowser) {
        return true
      }
      if (isReservedTag(tag)) {
        return false
      }
      tag = tag.toLowerCase();
      /* istanbul ignore if */
      if (unknownElementCache[tag] != null) {
        return unknownElementCache[tag]
      }
      var el = document.createElement(tag);
      if (tag.indexOf('-') > -1) {
        // http://stackoverflow.com/a/28210364/1070244
        return (unknownElementCache[tag] = (
          el.constructor === window.HTMLUnknownElement ||
          el.constructor === window.HTMLElement
        ))
      } else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
      }
    }

    var isTextInputType = makeMap('text,number,password,search,email,tel,url');

    /*  */

    /**
     * Query an element selector if it's not an element already.
     */
    function query (el) {
      if (typeof el === 'string') {
        var selected = document.querySelector(el);
        if (!selected) {
           warn(
            'Cannot find element: ' + el
          );
          return document.createElement('div')
        }
        return selected
      } else {
        return el
      }
    }

    /*  */

    function createElement$1 (tagName, vnode) {
      var elm = document.createElement(tagName);
      if (tagName !== 'select') {
        return elm
      }
      // false or null will remove the attribute but undefined will not
      if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
        elm.setAttribute('multiple', 'multiple');
      }
      return elm
    }

    function createElementNS (namespace, tagName) {
      return document.createElementNS(namespaceMap[namespace], tagName)
    }

    function createTextNode (text) {
      return document.createTextNode(text)
    }

    function createComment (text) {
      return document.createComment(text)
    }

    function insertBefore (parentNode, newNode, referenceNode) {
      parentNode.insertBefore(newNode, referenceNode);
    }

    function removeChild (node, child) {
      node.removeChild(child);
    }

    function appendChild (node, child) {
      node.appendChild(child);
    }

    function parentNode (node) {
      return node.parentNode
    }

    function nextSibling (node) {
      return node.nextSibling
    }

    function tagName (node) {
      return node.tagName
    }

    function setTextContent (node, text) {
      node.textContent = text;
    }

    function setStyleScope (node, scopeId) {
      node.setAttribute(scopeId, '');
    }

    var nodeOps = /*#__PURE__*/Object.freeze({
      createElement: createElement$1,
      createElementNS: createElementNS,
      createTextNode: createTextNode,
      createComment: createComment,
      insertBefore: insertBefore,
      removeChild: removeChild,
      appendChild: appendChild,
      parentNode: parentNode,
      nextSibling: nextSibling,
      tagName: tagName,
      setTextContent: setTextContent,
      setStyleScope: setStyleScope
    });

    /*  */

    var ref = {
      create: function create (_, vnode) {
        registerRef(vnode);
      },
      update: function update (oldVnode, vnode) {
        if (oldVnode.data.ref !== vnode.data.ref) {
          registerRef(oldVnode, true);
          registerRef(vnode);
        }
      },
      destroy: function destroy (vnode) {
        registerRef(vnode, true);
      }
    };

    function registerRef (vnode, isRemoval) {
      var key = vnode.data.ref;
      if (!isDef(key)) { return }

      var vm = vnode.context;
      var ref = vnode.componentInstance || vnode.elm;
      var refs = vm.$refs;
      if (isRemoval) {
        if (Array.isArray(refs[key])) {
          remove(refs[key], ref);
        } else if (refs[key] === ref) {
          refs[key] = undefined;
        }
      } else {
        if (vnode.data.refInFor) {
          if (!Array.isArray(refs[key])) {
            refs[key] = [ref];
          } else if (refs[key].indexOf(ref) < 0) {
            // $flow-disable-line
            refs[key].push(ref);
          }
        } else {
          refs[key] = ref;
        }
      }
    }

    /**
     * Virtual DOM patching algorithm based on Snabbdom by
     * Simon Friis Vindum (@paldepind)
     * Licensed under the MIT License
     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
     *
     * modified by Evan You (@yyx990803)
     *
     * Not type-checking this because this file is perf-critical and the cost
     * of making flow understand it is not worth it.
     */

    var emptyNode = new VNode('', {}, []);

    var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

    function sameVnode (a, b) {
      return (
        a.key === b.key &&
        a.asyncFactory === b.asyncFactory && (
          (
            a.tag === b.tag &&
            a.isComment === b.isComment &&
            isDef(a.data) === isDef(b.data) &&
            sameInputType(a, b)
          ) || (
            isTrue(a.isAsyncPlaceholder) &&
            isUndef(b.asyncFactory.error)
          )
        )
      )
    }

    function sameInputType (a, b) {
      if (a.tag !== 'input') { return true }
      var i;
      var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
      var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
      return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
    }

    function createKeyToOldIdx (children, beginIdx, endIdx) {
      var i, key;
      var map = {};
      for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) { map[key] = i; }
      }
      return map
    }

    function createPatchFunction (backend) {
      var i, j;
      var cbs = {};

      var modules = backend.modules;
      var nodeOps = backend.nodeOps;

      for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
          if (isDef(modules[j][hooks[i]])) {
            cbs[hooks[i]].push(modules[j][hooks[i]]);
          }
        }
      }

      function emptyNodeAt (elm) {
        return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
      }

      function createRmCb (childElm, listeners) {
        function remove$$1 () {
          if (--remove$$1.listeners === 0) {
            removeNode(childElm);
          }
        }
        remove$$1.listeners = listeners;
        return remove$$1
      }

      function removeNode (el) {
        var parent = nodeOps.parentNode(el);
        // element may have already been removed due to v-html / v-text
        if (isDef(parent)) {
          nodeOps.removeChild(parent, el);
        }
      }

      function isUnknownElement$$1 (vnode, inVPre) {
        return (
          !inVPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(vnode.tag)
                : ignore === vnode.tag
            })
          ) &&
          config.isUnknownElement(vnode.tag)
        )
      }

      var creatingElmInVPre = 0;

      function createElm (
        vnode,
        insertedVnodeQueue,
        parentElm,
        refElm,
        nested,
        ownerArray,
        index
      ) {
        if (isDef(vnode.elm) && isDef(ownerArray)) {
          // This vnode was used in a previous render!
          // now it's used as a new node, overwriting its elm would cause
          // potential patch errors down the road when it's used as an insertion
          // reference node. Instead, we clone the node on-demand before creating
          // associated DOM element for it.
          vnode = ownerArray[index] = cloneVNode(vnode);
        }

        vnode.isRootInsert = !nested; // for transition enter check
        if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
          return
        }

        var data = vnode.data;
        var children = vnode.children;
        var tag = vnode.tag;
        if (isDef(tag)) {
          {
            if (data && data.pre) {
              creatingElmInVPre++;
            }
            if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
              warn(
                'Unknown custom element: <' + tag + '> - did you ' +
                'register the component correctly? For recursive components, ' +
                'make sure to provide the "name" option.',
                vnode.context
              );
            }
          }

          vnode.elm = vnode.ns
            ? nodeOps.createElementNS(vnode.ns, tag)
            : nodeOps.createElement(tag, vnode);
          setScope(vnode);

          /* istanbul ignore if */
          {
            createChildren(vnode, children, insertedVnodeQueue);
            if (isDef(data)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
            }
            insert(parentElm, vnode.elm, refElm);
          }

          if ( data && data.pre) {
            creatingElmInVPre--;
          }
        } else if (isTrue(vnode.isComment)) {
          vnode.elm = nodeOps.createComment(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        } else {
          vnode.elm = nodeOps.createTextNode(vnode.text);
          insert(parentElm, vnode.elm, refElm);
        }
      }

      function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i = vnode.data;
        if (isDef(i)) {
          var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
          if (isDef(i = i.hook) && isDef(i = i.init)) {
            i(vnode, false /* hydrating */);
          }
          // after calling the init hook, if the vnode is a child component
          // it should've created a child instance and mounted it. the child
          // component also has set the placeholder vnode's elm.
          // in that case we can just return the element and be done.
          if (isDef(vnode.componentInstance)) {
            initComponent(vnode, insertedVnodeQueue);
            insert(parentElm, vnode.elm, refElm);
            if (isTrue(isReactivated)) {
              reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
            }
            return true
          }
        }
      }

      function initComponent (vnode, insertedVnodeQueue) {
        if (isDef(vnode.data.pendingInsert)) {
          insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
          vnode.data.pendingInsert = null;
        }
        vnode.elm = vnode.componentInstance.$el;
        if (isPatchable(vnode)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
          setScope(vnode);
        } else {
          // empty component root.
          // skip all element-related modules except for ref (#3455)
          registerRef(vnode);
          // make sure to invoke the insert hook
          insertedVnodeQueue.push(vnode);
        }
      }

      function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
        var i;
        // hack for #4339: a reactivated component with inner transition
        // does not trigger because the inner node's created hooks are not called
        // again. It's not ideal to involve module-specific logic in here but
        // there doesn't seem to be a better way to do it.
        var innerNode = vnode;
        while (innerNode.componentInstance) {
          innerNode = innerNode.componentInstance._vnode;
          if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
            for (i = 0; i < cbs.activate.length; ++i) {
              cbs.activate[i](emptyNode, innerNode);
            }
            insertedVnodeQueue.push(innerNode);
            break
          }
        }
        // unlike a newly created component,
        // a reactivated keep-alive component doesn't insert itself
        insert(parentElm, vnode.elm, refElm);
      }

      function insert (parent, elm, ref$$1) {
        if (isDef(parent)) {
          if (isDef(ref$$1)) {
            if (nodeOps.parentNode(ref$$1) === parent) {
              nodeOps.insertBefore(parent, elm, ref$$1);
            }
          } else {
            nodeOps.appendChild(parent, elm);
          }
        }
      }

      function createChildren (vnode, children, insertedVnodeQueue) {
        if (Array.isArray(children)) {
          {
            checkDuplicateKeys(children);
          }
          for (var i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
          }
        } else if (isPrimitive(vnode.text)) {
          nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
        }
      }

      function isPatchable (vnode) {
        while (vnode.componentInstance) {
          vnode = vnode.componentInstance._vnode;
        }
        return isDef(vnode.tag)
      }

      function invokeCreateHooks (vnode, insertedVnodeQueue) {
        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
          cbs.create[i$1](emptyNode, vnode);
        }
        i = vnode.data.hook; // Reuse variable
        if (isDef(i)) {
          if (isDef(i.create)) { i.create(emptyNode, vnode); }
          if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
        }
      }

      // set scope id attribute for scoped CSS.
      // this is implemented as a special case to avoid the overhead
      // of going through the normal attribute patching process.
      function setScope (vnode) {
        var i;
        if (isDef(i = vnode.fnScopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        } else {
          var ancestor = vnode;
          while (ancestor) {
            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
              nodeOps.setStyleScope(vnode.elm, i);
            }
            ancestor = ancestor.parent;
          }
        }
        // for slot content they should also get the scopeId from the host instance.
        if (isDef(i = activeInstance) &&
          i !== vnode.context &&
          i !== vnode.fnContext &&
          isDef(i = i.$options._scopeId)
        ) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
      }

      function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
          createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
        }
      }

      function invokeDestroyHook (vnode) {
        var i, j;
        var data = vnode.data;
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
          for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
        }
        if (isDef(i = vnode.children)) {
          for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
          }
        }
      }

      function removeVnodes (vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
          var ch = vnodes[startIdx];
          if (isDef(ch)) {
            if (isDef(ch.tag)) {
              removeAndInvokeRemoveHook(ch);
              invokeDestroyHook(ch);
            } else { // Text node
              removeNode(ch.elm);
            }
          }
        }
      }

      function removeAndInvokeRemoveHook (vnode, rm) {
        if (isDef(rm) || isDef(vnode.data)) {
          var i;
          var listeners = cbs.remove.length + 1;
          if (isDef(rm)) {
            // we have a recursively passed down rm callback
            // increase the listeners count
            rm.listeners += listeners;
          } else {
            // directly removing
            rm = createRmCb(vnode.elm, listeners);
          }
          // recursively invoke hooks on child component root node
          if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
            removeAndInvokeRemoveHook(i, rm);
          }
          for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
          }
          if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
            i(vnode, rm);
          } else {
            rm();
          }
        } else {
          removeNode(vnode.elm);
        }
      }

      function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
        var oldStartIdx = 0;
        var newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

        // removeOnly is a special flag used only by <transition-group>
        // to ensure removed elements stay in correct relative positions
        // during leaving transitions
        var canMove = !removeOnly;

        {
          checkDuplicateKeys(newCh);
        }

        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
          if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
          } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
          } else if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
          } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
          } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
          } else {
            if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
            idxInOld = isDef(newStartVnode.key)
              ? oldKeyToIdx[newStartVnode.key]
              : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) { // New element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            } else {
              vnodeToMove = oldCh[idxInOld];
              if (sameVnode(vnodeToMove, newStartVnode)) {
                patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldCh[idxInOld] = undefined;
                canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
              } else {
                // same key but different element. treat as new element
                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
              }
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
        if (oldStartIdx > oldEndIdx) {
          refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
          addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        } else if (newStartIdx > newEndIdx) {
          removeVnodes(oldCh, oldStartIdx, oldEndIdx);
        }
      }

      function checkDuplicateKeys (children) {
        var seenKeys = {};
        for (var i = 0; i < children.length; i++) {
          var vnode = children[i];
          var key = vnode.key;
          if (isDef(key)) {
            if (seenKeys[key]) {
              warn(
                ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
                vnode.context
              );
            } else {
              seenKeys[key] = true;
            }
          }
        }
      }

      function findIdxInOld (node, oldCh, start, end) {
        for (var i = start; i < end; i++) {
          var c = oldCh[i];
          if (isDef(c) && sameVnode(node, c)) { return i }
        }
      }

      function patchVnode (
        oldVnode,
        vnode,
        insertedVnodeQueue,
        ownerArray,
        index,
        removeOnly
      ) {
        if (oldVnode === vnode) {
          return
        }

        if (isDef(vnode.elm) && isDef(ownerArray)) {
          // clone reused vnode
          vnode = ownerArray[index] = cloneVNode(vnode);
        }

        var elm = vnode.elm = oldVnode.elm;

        if (isTrue(oldVnode.isAsyncPlaceholder)) {
          if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
          } else {
            vnode.isAsyncPlaceholder = true;
          }
          return
        }

        // reuse element for static trees.
        // note we only do this if the vnode is cloned -
        // if the new node is not cloned it means the render functions have been
        // reset by the hot-reload-api and we need to do a proper re-render.
        if (isTrue(vnode.isStatic) &&
          isTrue(oldVnode.isStatic) &&
          vnode.key === oldVnode.key &&
          (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
        ) {
          vnode.componentInstance = oldVnode.componentInstance;
          return
        }

        var i;
        var data = vnode.data;
        if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
          i(oldVnode, vnode);
        }

        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (isDef(data) && isPatchable(vnode)) {
          for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
          if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
        }
        if (isUndef(vnode.text)) {
          if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
          } else if (isDef(ch)) {
            {
              checkDuplicateKeys(ch);
            }
            if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
          } else if (isDef(oldCh)) {
            removeVnodes(oldCh, 0, oldCh.length - 1);
          } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
        } else if (oldVnode.text !== vnode.text) {
          nodeOps.setTextContent(elm, vnode.text);
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
        }
      }

      function invokeInsertHook (vnode, queue, initial) {
        // delay insert hooks for component root nodes, invoke them after the
        // element is really inserted
        if (isTrue(initial) && isDef(vnode.parent)) {
          vnode.parent.data.pendingInsert = queue;
        } else {
          for (var i = 0; i < queue.length; ++i) {
            queue[i].data.hook.insert(queue[i]);
          }
        }
      }

      var hydrationBailed = false;
      // list of modules that can skip create hook during hydration because they
      // are already rendered on the client or has no need for initialization
      // Note: style is excluded because it relies on initial clone for future
      // deep updates (#7063).
      var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

      // Note: this is a browser-only function so we can assume elms are DOM nodes.
      function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
        var i;
        var tag = vnode.tag;
        var data = vnode.data;
        var children = vnode.children;
        inVPre = inVPre || (data && data.pre);
        vnode.elm = elm;

        if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
          vnode.isAsyncPlaceholder = true;
          return true
        }
        // assert node match
        {
          if (!assertNodeMatch(elm, vnode, inVPre)) {
            return false
          }
        }
        if (isDef(data)) {
          if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
          if (isDef(i = vnode.componentInstance)) {
            // child component. it should have hydrated its own tree.
            initComponent(vnode, insertedVnodeQueue);
            return true
          }
        }
        if (isDef(tag)) {
          if (isDef(children)) {
            // empty element, allow client to pick up and populate children
            if (!elm.hasChildNodes()) {
              createChildren(vnode, children, insertedVnodeQueue);
            } else {
              // v-html and domProps: innerHTML
              if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                if (i !== elm.innerHTML) {
                  /* istanbul ignore if */
                  if (
                    typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('server innerHTML: ', i);
                    console.warn('client innerHTML: ', elm.innerHTML);
                  }
                  return false
                }
              } else {
                // iterate and compare children lists
                var childrenMatch = true;
                var childNode = elm.firstChild;
                for (var i$1 = 0; i$1 < children.length; i$1++) {
                  if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                    childrenMatch = false;
                    break
                  }
                  childNode = childNode.nextSibling;
                }
                // if childNode is not null, it means the actual childNodes list is
                // longer than the virtual children list.
                if (!childrenMatch || childNode) {
                  /* istanbul ignore if */
                  if (
                    typeof console !== 'undefined' &&
                    !hydrationBailed
                  ) {
                    hydrationBailed = true;
                    console.warn('Parent: ', elm);
                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                  }
                  return false
                }
              }
            }
          }
          if (isDef(data)) {
            var fullInvoke = false;
            for (var key in data) {
              if (!isRenderedModule(key)) {
                fullInvoke = true;
                invokeCreateHooks(vnode, insertedVnodeQueue);
                break
              }
            }
            if (!fullInvoke && data['class']) {
              // ensure collecting deps for deep class bindings for future updates
              traverse(data['class']);
            }
          }
        } else if (elm.data !== vnode.text) {
          elm.data = vnode.text;
        }
        return true
      }

      function assertNodeMatch (node, vnode, inVPre) {
        if (isDef(vnode.tag)) {
          return vnode.tag.indexOf('vue-component') === 0 || (
            !isUnknownElement$$1(vnode, inVPre) &&
            vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
          )
        } else {
          return node.nodeType === (vnode.isComment ? 8 : 3)
        }
      }

      return function patch (oldVnode, vnode, hydrating, removeOnly) {
        if (isUndef(vnode)) {
          if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
          return
        }

        var isInitialPatch = false;
        var insertedVnodeQueue = [];

        if (isUndef(oldVnode)) {
          // empty mount (likely as component), create new root element
          isInitialPatch = true;
          createElm(vnode, insertedVnodeQueue);
        } else {
          var isRealElement = isDef(oldVnode.nodeType);
          if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // patch existing root node
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
          } else {
            if (isRealElement) {
              // mounting to a real element
              // check if this is server-rendered content and if we can perform
              // a successful hydration.
              if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                oldVnode.removeAttribute(SSR_ATTR);
                hydrating = true;
              }
              if (isTrue(hydrating)) {
                if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                  invokeInsertHook(vnode, insertedVnodeQueue, true);
                  return oldVnode
                } else {
                  warn(
                    'The client-side rendered virtual DOM tree is not matching ' +
                    'server-rendered content. This is likely caused by incorrect ' +
                    'HTML markup, for example nesting block-level elements inside ' +
                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                    'full client-side render.'
                  );
                }
              }
              // either not server-rendered, or hydration failed.
              // create an empty node and replace it
              oldVnode = emptyNodeAt(oldVnode);
            }

            // replacing existing element
            var oldElm = oldVnode.elm;
            var parentElm = nodeOps.parentNode(oldElm);

            // create new node
            createElm(
              vnode,
              insertedVnodeQueue,
              // extremely rare edge case: do not insert if old element is in a
              // leaving transition. Only happens when combining transition +
              // keep-alive + HOCs. (#4590)
              oldElm._leaveCb ? null : parentElm,
              nodeOps.nextSibling(oldElm)
            );

            // update parent placeholder node element, recursively
            if (isDef(vnode.parent)) {
              var ancestor = vnode.parent;
              var patchable = isPatchable(vnode);
              while (ancestor) {
                for (var i = 0; i < cbs.destroy.length; ++i) {
                  cbs.destroy[i](ancestor);
                }
                ancestor.elm = vnode.elm;
                if (patchable) {
                  for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                    cbs.create[i$1](emptyNode, ancestor);
                  }
                  // #6513
                  // invoke insert hooks that may have been merged by create hooks.
                  // e.g. for directives that uses the "inserted" hook.
                  var insert = ancestor.data.hook.insert;
                  if (insert.merged) {
                    // start at index 1 to avoid re-invoking component mounted hook
                    for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                      insert.fns[i$2]();
                    }
                  }
                } else {
                  registerRef(ancestor);
                }
                ancestor = ancestor.parent;
              }
            }

            // destroy old node
            if (isDef(parentElm)) {
              removeVnodes([oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
              invokeDestroyHook(oldVnode);
            }
          }
        }

        invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
        return vnode.elm
      }
    }

    /*  */

    var directives = {
      create: updateDirectives,
      update: updateDirectives,
      destroy: function unbindDirectives (vnode) {
        updateDirectives(vnode, emptyNode);
      }
    };

    function updateDirectives (oldVnode, vnode) {
      if (oldVnode.data.directives || vnode.data.directives) {
        _update(oldVnode, vnode);
      }
    }

    function _update (oldVnode, vnode) {
      var isCreate = oldVnode === emptyNode;
      var isDestroy = vnode === emptyNode;
      var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
      var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

      var dirsWithInsert = [];
      var dirsWithPostpatch = [];

      var key, oldDir, dir;
      for (key in newDirs) {
        oldDir = oldDirs[key];
        dir = newDirs[key];
        if (!oldDir) {
          // new directive, bind
          callHook$1(dir, 'bind', vnode, oldVnode);
          if (dir.def && dir.def.inserted) {
            dirsWithInsert.push(dir);
          }
        } else {
          // existing directive, update
          dir.oldValue = oldDir.value;
          dir.oldArg = oldDir.arg;
          callHook$1(dir, 'update', vnode, oldVnode);
          if (dir.def && dir.def.componentUpdated) {
            dirsWithPostpatch.push(dir);
          }
        }
      }

      if (dirsWithInsert.length) {
        var callInsert = function () {
          for (var i = 0; i < dirsWithInsert.length; i++) {
            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
          }
        };
        if (isCreate) {
          mergeVNodeHook(vnode, 'insert', callInsert);
        } else {
          callInsert();
        }
      }

      if (dirsWithPostpatch.length) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          for (var i = 0; i < dirsWithPostpatch.length; i++) {
            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
          }
        });
      }

      if (!isCreate) {
        for (key in oldDirs) {
          if (!newDirs[key]) {
            // no longer present, unbind
            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
          }
        }
      }
    }

    var emptyModifiers = Object.create(null);

    function normalizeDirectives$1 (
      dirs,
      vm
    ) {
      var res = Object.create(null);
      if (!dirs) {
        // $flow-disable-line
        return res
      }
      var i, dir;
      for (i = 0; i < dirs.length; i++) {
        dir = dirs[i];
        if (!dir.modifiers) {
          // $flow-disable-line
          dir.modifiers = emptyModifiers;
        }
        res[getRawDirName(dir)] = dir;
        dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
      }
      // $flow-disable-line
      return res
    }

    function getRawDirName (dir) {
      return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
    }

    function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
      var fn = dir.def && dir.def[hook];
      if (fn) {
        try {
          fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
        } catch (e) {
          handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
        }
      }
    }

    var baseModules = [
      ref,
      directives
    ];

    /*  */

    function updateAttrs (oldVnode, vnode) {
      var opts = vnode.componentOptions;
      if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
        return
      }
      if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
        return
      }
      var key, cur, old;
      var elm = vnode.elm;
      var oldAttrs = oldVnode.data.attrs || {};
      var attrs = vnode.data.attrs || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(attrs.__ob__)) {
        attrs = vnode.data.attrs = extend({}, attrs);
      }

      for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
          setAttr(elm, key, cur, vnode.data.pre);
        }
      }
      // #4391: in IE9, setting type can reset value for input[type=radio]
      // #6666: IE/Edge forces progress value down to 1 before setting a max
      /* istanbul ignore if */
      if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
        setAttr(elm, 'value', attrs.value);
      }
      for (key in oldAttrs) {
        if (isUndef(attrs[key])) {
          if (isXlink(key)) {
            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
          } else if (!isEnumeratedAttr(key)) {
            elm.removeAttribute(key);
          }
        }
      }
    }

    function setAttr (el, key, value, isInPre) {
      if (isInPre || el.tagName.indexOf('-') > -1) {
        baseSetAttr(el, key, value);
      } else if (isBooleanAttr(key)) {
        // set attribute for blank value
        // e.g. <option disabled>Select one</option>
        if (isFalsyAttrValue(value)) {
          el.removeAttribute(key);
        } else {
          // technically allowfullscreen is a boolean attribute for <iframe>,
          // but Flash expects a value of "true" when used on <embed> tag
          value = key === 'allowfullscreen' && el.tagName === 'EMBED'
            ? 'true'
            : key;
          el.setAttribute(key, value);
        }
      } else if (isEnumeratedAttr(key)) {
        el.setAttribute(key, convertEnumeratedValue(key, value));
      } else if (isXlink(key)) {
        if (isFalsyAttrValue(value)) {
          el.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        baseSetAttr(el, key, value);
      }
    }

    function baseSetAttr (el, key, value) {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (
          isIE && !isIE9 &&
          el.tagName === 'TEXTAREA' &&
          key === 'placeholder' && value !== '' && !el.__ieph
        ) {
          var blocker = function (e) {
            e.stopImmediatePropagation();
            el.removeEventListener('input', blocker);
          };
          el.addEventListener('input', blocker);
          // $flow-disable-line
          el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
      }
    }

    var attrs = {
      create: updateAttrs,
      update: updateAttrs
    };

    /*  */

    function updateClass (oldVnode, vnode) {
      var el = vnode.elm;
      var data = vnode.data;
      var oldData = oldVnode.data;
      if (
        isUndef(data.staticClass) &&
        isUndef(data.class) && (
          isUndef(oldData) || (
            isUndef(oldData.staticClass) &&
            isUndef(oldData.class)
          )
        )
      ) {
        return
      }

      var cls = genClassForVnode(vnode);

      // handle transition classes
      var transitionClass = el._transitionClasses;
      if (isDef(transitionClass)) {
        cls = concat(cls, stringifyClass(transitionClass));
      }

      // set the class
      if (cls !== el._prevClass) {
        el.setAttribute('class', cls);
        el._prevClass = cls;
      }
    }

    var klass = {
      create: updateClass,
      update: updateClass
    };

    /*  */

    /*  */

    /*  */

    /*  */

    // in some cases, the event used has to be determined at runtime
    // so we used some reserved tokens during compile.
    var RANGE_TOKEN = '__r';
    var CHECKBOX_RADIO_TOKEN = '__c';

    /*  */

    // normalize v-model event tokens that can only be determined at runtime.
    // it's important to place the event as the first in the array because
    // the whole point is ensuring the v-model callback gets called before
    // user-attached handlers.
    function normalizeEvents (on) {
      /* istanbul ignore if */
      if (isDef(on[RANGE_TOKEN])) {
        // IE input[type=range] only supports `change` event
        var event = isIE ? 'change' : 'input';
        on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
        delete on[RANGE_TOKEN];
      }
      // This was originally intended to fix #4521 but no longer necessary
      // after 2.5. Keeping it for backwards compat with generated code from < 2.4
      /* istanbul ignore if */
      if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
        on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
        delete on[CHECKBOX_RADIO_TOKEN];
      }
    }

    var target$1;

    function createOnceHandler$1 (event, handler, capture) {
      var _target = target$1; // save current target element in closure
      return function onceHandler () {
        var res = handler.apply(null, arguments);
        if (res !== null) {
          remove$2(event, onceHandler, capture, _target);
        }
      }
    }

    // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
    // implementation and does not fire microtasks in between event propagation, so
    // safe to exclude.
    var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

    function add$1 (
      name,
      handler,
      capture,
      passive
    ) {
      // async edge case #6566: inner click event triggers patch, event handler
      // attached to outer element during patch, and triggered again. This
      // happens because browsers fire microtask ticks between event propagation.
      // the solution is simple: we save the timestamp when a handler is attached,
      // and the handler would only fire if the event passed to it was fired
      // AFTER it was attached.
      if (useMicrotaskFix) {
        var attachedTimestamp = currentFlushTimestamp;
        var original = handler;
        handler = original._wrapper = function (e) {
          if (
            // no bubbling, should always fire.
            // this is just a safety net in case event.timeStamp is unreliable in
            // certain weird environments...
            e.target === e.currentTarget ||
            // event is fired after handler attachment
            e.timeStamp >= attachedTimestamp ||
            // bail for environments that have buggy event.timeStamp implementations
            // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
            // #9681 QtWebEngine event.timeStamp is negative value
            e.timeStamp <= 0 ||
            // #9448 bail if event is fired in another document in a multi-page
            // electron/nw.js app, since event.timeStamp will be using a different
            // starting reference
            e.target.ownerDocument !== document
          ) {
            return original.apply(this, arguments)
          }
        };
      }
      target$1.addEventListener(
        name,
        handler,
        supportsPassive
          ? { capture: capture, passive: passive }
          : capture
      );
    }

    function remove$2 (
      name,
      handler,
      capture,
      _target
    ) {
      (_target || target$1).removeEventListener(
        name,
        handler._wrapper || handler,
        capture
      );
    }

    function updateDOMListeners (oldVnode, vnode) {
      if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
        return
      }
      var on = vnode.data.on || {};
      var oldOn = oldVnode.data.on || {};
      target$1 = vnode.elm;
      normalizeEvents(on);
      updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
      target$1 = undefined;
    }

    var events = {
      create: updateDOMListeners,
      update: updateDOMListeners
    };

    /*  */

    var svgContainer;

    function updateDOMProps (oldVnode, vnode) {
      if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
        return
      }
      var key, cur;
      var elm = vnode.elm;
      var oldProps = oldVnode.data.domProps || {};
      var props = vnode.data.domProps || {};
      // clone observed objects, as the user probably wants to mutate it
      if (isDef(props.__ob__)) {
        props = vnode.data.domProps = extend({}, props);
      }

      for (key in oldProps) {
        if (!(key in props)) {
          elm[key] = '';
        }
      }

      for (key in props) {
        cur = props[key];
        // ignore children if the node has textContent or innerHTML,
        // as these will throw away existing DOM nodes and cause removal errors
        // on subsequent patches (#3360)
        if (key === 'textContent' || key === 'innerHTML') {
          if (vnode.children) { vnode.children.length = 0; }
          if (cur === oldProps[key]) { continue }
          // #6601 work around Chrome version <= 55 bug where single textNode
          // replaced by innerHTML/textContent retains its parentNode property
          if (elm.childNodes.length === 1) {
            elm.removeChild(elm.childNodes[0]);
          }
        }

        if (key === 'value' && elm.tagName !== 'PROGRESS') {
          // store value as _value as well since
          // non-string values will be stringified
          elm._value = cur;
          // avoid resetting cursor position when value is the same
          var strCur = isUndef(cur) ? '' : String(cur);
          if (shouldUpdateValue(elm, strCur)) {
            elm.value = strCur;
          }
        } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
          // IE doesn't support innerHTML for SVG elements
          svgContainer = svgContainer || document.createElement('div');
          svgContainer.innerHTML = "<svg>" + cur + "</svg>";
          var svg = svgContainer.firstChild;
          while (elm.firstChild) {
            elm.removeChild(elm.firstChild);
          }
          while (svg.firstChild) {
            elm.appendChild(svg.firstChild);
          }
        } else if (
          // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecessary `checked` update.
          cur !== oldProps[key]
        ) {
          // some property updates can throw
          // e.g. `value` on <progress> w/ non-finite value
          try {
            elm[key] = cur;
          } catch (e) {}
        }
      }
    }

    // check platforms/web/util/attrs.js acceptValue


    function shouldUpdateValue (elm, checkVal) {
      return (!elm.composing && (
        elm.tagName === 'OPTION' ||
        isNotInFocusAndDirty(elm, checkVal) ||
        isDirtyWithModifiers(elm, checkVal)
      ))
    }

    function isNotInFocusAndDirty (elm, checkVal) {
      // return true when textbox (.number and .trim) loses focus and its value is
      // not equal to the updated value
      var notInFocus = true;
      // #6157
      // work around IE bug when accessing document.activeElement in an iframe
      try { notInFocus = document.activeElement !== elm; } catch (e) {}
      return notInFocus && elm.value !== checkVal
    }

    function isDirtyWithModifiers (elm, newVal) {
      var value = elm.value;
      var modifiers = elm._vModifiers; // injected by v-model runtime
      if (isDef(modifiers)) {
        if (modifiers.number) {
          return toNumber(value) !== toNumber(newVal)
        }
        if (modifiers.trim) {
          return value.trim() !== newVal.trim()
        }
      }
      return value !== newVal
    }

    var domProps = {
      create: updateDOMProps,
      update: updateDOMProps
    };

    /*  */

    var parseStyleText = cached(function (cssText) {
      var res = {};
      var listDelimiter = /;(?![^(]*\))/g;
      var propertyDelimiter = /:(.+)/;
      cssText.split(listDelimiter).forEach(function (item) {
        if (item) {
          var tmp = item.split(propertyDelimiter);
          tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return res
    });

    // merge static and dynamic style data on the same vnode
    function normalizeStyleData (data) {
      var style = normalizeStyleBinding(data.style);
      // static style is pre-processed into an object during compilation
      // and is always a fresh object, so it's safe to merge into it
      return data.staticStyle
        ? extend(data.staticStyle, style)
        : style
    }

    // normalize possible array / string values into Object
    function normalizeStyleBinding (bindingStyle) {
      if (Array.isArray(bindingStyle)) {
        return toObject(bindingStyle)
      }
      if (typeof bindingStyle === 'string') {
        return parseStyleText(bindingStyle)
      }
      return bindingStyle
    }

    /**
     * parent component style should be after child's
     * so that parent component's style could override it
     */
    function getStyle (vnode, checkChild) {
      var res = {};
      var styleData;

      if (checkChild) {
        var childNode = vnode;
        while (childNode.componentInstance) {
          childNode = childNode.componentInstance._vnode;
          if (
            childNode && childNode.data &&
            (styleData = normalizeStyleData(childNode.data))
          ) {
            extend(res, styleData);
          }
        }
      }

      if ((styleData = normalizeStyleData(vnode.data))) {
        extend(res, styleData);
      }

      var parentNode = vnode;
      while ((parentNode = parentNode.parent)) {
        if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
          extend(res, styleData);
        }
      }
      return res
    }

    /*  */

    var cssVarRE = /^--/;
    var importantRE = /\s*!important$/;
    var setProp = function (el, name, val) {
      /* istanbul ignore if */
      if (cssVarRE.test(name)) {
        el.style.setProperty(name, val);
      } else if (importantRE.test(val)) {
        el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
      } else {
        var normalizedName = normalize(name);
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            el.style[normalizedName] = val[i];
          }
        } else {
          el.style[normalizedName] = val;
        }
      }
    };

    var vendorNames = ['Webkit', 'Moz', 'ms'];

    var emptyStyle;
    var normalize = cached(function (prop) {
      emptyStyle = emptyStyle || document.createElement('div').style;
      prop = camelize(prop);
      if (prop !== 'filter' && (prop in emptyStyle)) {
        return prop
      }
      var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
      for (var i = 0; i < vendorNames.length; i++) {
        var name = vendorNames[i] + capName;
        if (name in emptyStyle) {
          return name
        }
      }
    });

    function updateStyle (oldVnode, vnode) {
      var data = vnode.data;
      var oldData = oldVnode.data;

      if (isUndef(data.staticStyle) && isUndef(data.style) &&
        isUndef(oldData.staticStyle) && isUndef(oldData.style)
      ) {
        return
      }

      var cur, name;
      var el = vnode.elm;
      var oldStaticStyle = oldData.staticStyle;
      var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

      // if static style exists, stylebinding already merged into it when doing normalizeStyleData
      var oldStyle = oldStaticStyle || oldStyleBinding;

      var style = normalizeStyleBinding(vnode.data.style) || {};

      // store normalized style under a different key for next diff
      // make sure to clone it if it's reactive, since the user likely wants
      // to mutate it.
      vnode.data.normalizedStyle = isDef(style.__ob__)
        ? extend({}, style)
        : style;

      var newStyle = getStyle(vnode, true);

      for (name in oldStyle) {
        if (isUndef(newStyle[name])) {
          setProp(el, name, '');
        }
      }
      for (name in newStyle) {
        cur = newStyle[name];
        if (cur !== oldStyle[name]) {
          // ie9 setting to null has no effect, must use empty string
          setProp(el, name, cur == null ? '' : cur);
        }
      }
    }

    var style = {
      create: updateStyle,
      update: updateStyle
    };

    /*  */

    var whitespaceRE = /\s+/;

    /**
     * Add class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function addClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }

      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
        } else {
          el.classList.add(cls);
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        if (cur.indexOf(' ' + cls + ' ') < 0) {
          el.setAttribute('class', (cur + cls).trim());
        }
      }
    }

    /**
     * Remove class with compatibility for SVG since classList is not supported on
     * SVG elements in IE
     */
    function removeClass (el, cls) {
      /* istanbul ignore if */
      if (!cls || !(cls = cls.trim())) {
        return
      }

      /* istanbul ignore else */
      if (el.classList) {
        if (cls.indexOf(' ') > -1) {
          cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
        } else {
          el.classList.remove(cls);
        }
        if (!el.classList.length) {
          el.removeAttribute('class');
        }
      } else {
        var cur = " " + (el.getAttribute('class') || '') + " ";
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
          cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
          el.setAttribute('class', cur);
        } else {
          el.removeAttribute('class');
        }
      }
    }

    /*  */

    function resolveTransition (def$$1) {
      if (!def$$1) {
        return
      }
      /* istanbul ignore else */
      if (typeof def$$1 === 'object') {
        var res = {};
        if (def$$1.css !== false) {
          extend(res, autoCssTransition(def$$1.name || 'v'));
        }
        extend(res, def$$1);
        return res
      } else if (typeof def$$1 === 'string') {
        return autoCssTransition(def$$1)
      }
    }

    var autoCssTransition = cached(function (name) {
      return {
        enterClass: (name + "-enter"),
        enterToClass: (name + "-enter-to"),
        enterActiveClass: (name + "-enter-active"),
        leaveClass: (name + "-leave"),
        leaveToClass: (name + "-leave-to"),
        leaveActiveClass: (name + "-leave-active")
      }
    });

    var hasTransition = inBrowser && !isIE9;
    var TRANSITION = 'transition';
    var ANIMATION = 'animation';

    // Transition property/event sniffing
    var transitionProp = 'transition';
    var transitionEndEvent = 'transitionend';
    var animationProp = 'animation';
    var animationEndEvent = 'animationend';
    if (hasTransition) {
      /* istanbul ignore if */
      if (window.ontransitionend === undefined &&
        window.onwebkittransitionend !== undefined
      ) {
        transitionProp = 'WebkitTransition';
        transitionEndEvent = 'webkitTransitionEnd';
      }
      if (window.onanimationend === undefined &&
        window.onwebkitanimationend !== undefined
      ) {
        animationProp = 'WebkitAnimation';
        animationEndEvent = 'webkitAnimationEnd';
      }
    }

    // binding to window is necessary to make hot reload work in IE in strict mode
    var raf = inBrowser
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
      : /* istanbul ignore next */ function (fn) { return fn(); };

    function nextFrame (fn) {
      raf(function () {
        raf(fn);
      });
    }

    function addTransitionClass (el, cls) {
      var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
      if (transitionClasses.indexOf(cls) < 0) {
        transitionClasses.push(cls);
        addClass(el, cls);
      }
    }

    function removeTransitionClass (el, cls) {
      if (el._transitionClasses) {
        remove(el._transitionClasses, cls);
      }
      removeClass(el, cls);
    }

    function whenTransitionEnds (
      el,
      expectedType,
      cb
    ) {
      var ref = getTransitionInfo(el, expectedType);
      var type = ref.type;
      var timeout = ref.timeout;
      var propCount = ref.propCount;
      if (!type) { return cb() }
      var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
      var ended = 0;
      var end = function () {
        el.removeEventListener(event, onEnd);
        cb();
      };
      var onEnd = function (e) {
        if (e.target === el) {
          if (++ended >= propCount) {
            end();
          }
        }
      };
      setTimeout(function () {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(event, onEnd);
    }

    var transformRE = /\b(transform|all)(,|$)/;

    function getTransitionInfo (el, expectedType) {
      var styles = window.getComputedStyle(el);
      // JSDOM may return undefined for transition properties
      var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
      var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
      var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
      var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
      var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
      var animationTimeout = getTimeout(animationDelays, animationDurations);

      var type;
      var timeout = 0;
      var propCount = 0;
      /* istanbul ignore if */
      if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
          type = TRANSITION;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0
          ? transitionTimeout > animationTimeout
            ? TRANSITION
            : ANIMATION
          : null;
        propCount = type
          ? type === TRANSITION
            ? transitionDurations.length
            : animationDurations.length
          : 0;
      }
      var hasTransform =
        type === TRANSITION &&
        transformRE.test(styles[transitionProp + 'Property']);
      return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
      }
    }

    function getTimeout (delays, durations) {
      /* istanbul ignore next */
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }

      return Math.max.apply(null, durations.map(function (d, i) {
        return toMs(d) + toMs(delays[i])
      }))
    }

    // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
    // in a locale-dependent way, using a comma instead of a dot.
    // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
    // as a floor function) causing unexpected behaviors
    function toMs (s) {
      return Number(s.slice(0, -1).replace(',', '.')) * 1000
    }

    /*  */

    function enter (vnode, toggleDisplay) {
      var el = vnode.elm;

      // call leave callback now
      if (isDef(el._leaveCb)) {
        el._leaveCb.cancelled = true;
        el._leaveCb();
      }

      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data)) {
        return
      }

      /* istanbul ignore if */
      if (isDef(el._enterCb) || el.nodeType !== 1) {
        return
      }

      var css = data.css;
      var type = data.type;
      var enterClass = data.enterClass;
      var enterToClass = data.enterToClass;
      var enterActiveClass = data.enterActiveClass;
      var appearClass = data.appearClass;
      var appearToClass = data.appearToClass;
      var appearActiveClass = data.appearActiveClass;
      var beforeEnter = data.beforeEnter;
      var enter = data.enter;
      var afterEnter = data.afterEnter;
      var enterCancelled = data.enterCancelled;
      var beforeAppear = data.beforeAppear;
      var appear = data.appear;
      var afterAppear = data.afterAppear;
      var appearCancelled = data.appearCancelled;
      var duration = data.duration;

      // activeInstance will always be the <transition> component managing this
      // transition. One edge case to check is when the <transition> is placed
      // as the root node of a child component. In that case we need to check
      // <transition>'s parent for appear check.
      var context = activeInstance;
      var transitionNode = activeInstance.$vnode;
      while (transitionNode && transitionNode.parent) {
        context = transitionNode.context;
        transitionNode = transitionNode.parent;
      }

      var isAppear = !context._isMounted || !vnode.isRootInsert;

      if (isAppear && !appear && appear !== '') {
        return
      }

      var startClass = isAppear && appearClass
        ? appearClass
        : enterClass;
      var activeClass = isAppear && appearActiveClass
        ? appearActiveClass
        : enterActiveClass;
      var toClass = isAppear && appearToClass
        ? appearToClass
        : enterToClass;

      var beforeEnterHook = isAppear
        ? (beforeAppear || beforeEnter)
        : beforeEnter;
      var enterHook = isAppear
        ? (typeof appear === 'function' ? appear : enter)
        : enter;
      var afterEnterHook = isAppear
        ? (afterAppear || afterEnter)
        : afterEnter;
      var enterCancelledHook = isAppear
        ? (appearCancelled || enterCancelled)
        : enterCancelled;

      var explicitEnterDuration = toNumber(
        isObject(duration)
          ? duration.enter
          : duration
      );

      if ( explicitEnterDuration != null) {
        checkDuration(explicitEnterDuration, 'enter', vnode);
      }

      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(enterHook);

      var cb = el._enterCb = once(function () {
        if (expectsCSS) {
          removeTransitionClass(el, toClass);
          removeTransitionClass(el, activeClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, startClass);
          }
          enterCancelledHook && enterCancelledHook(el);
        } else {
          afterEnterHook && afterEnterHook(el);
        }
        el._enterCb = null;
      });

      if (!vnode.data.show) {
        // remove pending leave element on enter by injecting an insert hook
        mergeVNodeHook(vnode, 'insert', function () {
          var parent = el.parentNode;
          var pendingNode = parent && parent._pending && parent._pending[vnode.key];
          if (pendingNode &&
            pendingNode.tag === vnode.tag &&
            pendingNode.elm._leaveCb
          ) {
            pendingNode.elm._leaveCb();
          }
          enterHook && enterHook(el, cb);
        });
      }

      // start enter transition
      beforeEnterHook && beforeEnterHook(el);
      if (expectsCSS) {
        addTransitionClass(el, startClass);
        addTransitionClass(el, activeClass);
        nextFrame(function () {
          removeTransitionClass(el, startClass);
          if (!cb.cancelled) {
            addTransitionClass(el, toClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitEnterDuration)) {
                setTimeout(cb, explicitEnterDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }

      if (vnode.data.show) {
        toggleDisplay && toggleDisplay();
        enterHook && enterHook(el, cb);
      }

      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }

    function leave (vnode, rm) {
      var el = vnode.elm;

      // call enter callback now
      if (isDef(el._enterCb)) {
        el._enterCb.cancelled = true;
        el._enterCb();
      }

      var data = resolveTransition(vnode.data.transition);
      if (isUndef(data) || el.nodeType !== 1) {
        return rm()
      }

      /* istanbul ignore if */
      if (isDef(el._leaveCb)) {
        return
      }

      var css = data.css;
      var type = data.type;
      var leaveClass = data.leaveClass;
      var leaveToClass = data.leaveToClass;
      var leaveActiveClass = data.leaveActiveClass;
      var beforeLeave = data.beforeLeave;
      var leave = data.leave;
      var afterLeave = data.afterLeave;
      var leaveCancelled = data.leaveCancelled;
      var delayLeave = data.delayLeave;
      var duration = data.duration;

      var expectsCSS = css !== false && !isIE9;
      var userWantsControl = getHookArgumentsLength(leave);

      var explicitLeaveDuration = toNumber(
        isObject(duration)
          ? duration.leave
          : duration
      );

      if ( isDef(explicitLeaveDuration)) {
        checkDuration(explicitLeaveDuration, 'leave', vnode);
      }

      var cb = el._leaveCb = once(function () {
        if (el.parentNode && el.parentNode._pending) {
          el.parentNode._pending[vnode.key] = null;
        }
        if (expectsCSS) {
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
        }
        if (cb.cancelled) {
          if (expectsCSS) {
            removeTransitionClass(el, leaveClass);
          }
          leaveCancelled && leaveCancelled(el);
        } else {
          rm();
          afterLeave && afterLeave(el);
        }
        el._leaveCb = null;
      });

      if (delayLeave) {
        delayLeave(performLeave);
      } else {
        performLeave();
      }

      function performLeave () {
        // the delayed leave may have already been cancelled
        if (cb.cancelled) {
          return
        }
        // record leaving element
        if (!vnode.data.show && el.parentNode) {
          (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
        }
        beforeLeave && beforeLeave(el);
        if (expectsCSS) {
          addTransitionClass(el, leaveClass);
          addTransitionClass(el, leaveActiveClass);
          nextFrame(function () {
            removeTransitionClass(el, leaveClass);
            if (!cb.cancelled) {
              addTransitionClass(el, leaveToClass);
              if (!userWantsControl) {
                if (isValidDuration(explicitLeaveDuration)) {
                  setTimeout(cb, explicitLeaveDuration);
                } else {
                  whenTransitionEnds(el, type, cb);
                }
              }
            }
          });
        }
        leave && leave(el, cb);
        if (!expectsCSS && !userWantsControl) {
          cb();
        }
      }
    }

    // only used in dev mode
    function checkDuration (val, name, vnode) {
      if (typeof val !== 'number') {
        warn(
          "<transition> explicit " + name + " duration is not a valid number - " +
          "got " + (JSON.stringify(val)) + ".",
          vnode.context
        );
      } else if (isNaN(val)) {
        warn(
          "<transition> explicit " + name + " duration is NaN - " +
          'the duration expression might be incorrect.',
          vnode.context
        );
      }
    }

    function isValidDuration (val) {
      return typeof val === 'number' && !isNaN(val)
    }

    /**
     * Normalize a transition hook's argument length. The hook may be:
     * - a merged hook (invoker) with the original in .fns
     * - a wrapped component method (check ._length)
     * - a plain function (.length)
     */
    function getHookArgumentsLength (fn) {
      if (isUndef(fn)) {
        return false
      }
      var invokerFns = fn.fns;
      if (isDef(invokerFns)) {
        // invoker
        return getHookArgumentsLength(
          Array.isArray(invokerFns)
            ? invokerFns[0]
            : invokerFns
        )
      } else {
        return (fn._length || fn.length) > 1
      }
    }

    function _enter (_, vnode) {
      if (vnode.data.show !== true) {
        enter(vnode);
      }
    }

    var transition = inBrowser ? {
      create: _enter,
      activate: _enter,
      remove: function remove$$1 (vnode, rm) {
        /* istanbul ignore else */
        if (vnode.data.show !== true) {
          leave(vnode, rm);
        } else {
          rm();
        }
      }
    } : {};

    var platformModules = [
      attrs,
      klass,
      events,
      domProps,
      style,
      transition
    ];

    /*  */

    // the directive module should be applied last, after all
    // built-in modules have been applied.
    var modules = platformModules.concat(baseModules);

    var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

    /**
     * Not type checking this file because flow doesn't like attaching
     * properties to Elements.
     */

    /* istanbul ignore if */
    if (isIE9) {
      // http://www.matts411.com/post/internet-explorer-9-oninput/
      document.addEventListener('selectionchange', function () {
        var el = document.activeElement;
        if (el && el.vmodel) {
          trigger(el, 'input');
        }
      });
    }

    var directive = {
      inserted: function inserted (el, binding, vnode, oldVnode) {
        if (vnode.tag === 'select') {
          // #6903
          if (oldVnode.elm && !oldVnode.elm._vOptions) {
            mergeVNodeHook(vnode, 'postpatch', function () {
              directive.componentUpdated(el, binding, vnode);
            });
          } else {
            setSelected(el, binding, vnode.context);
          }
          el._vOptions = [].map.call(el.options, getValue);
        } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
          el._vModifiers = binding.modifiers;
          if (!binding.modifiers.lazy) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            el.addEventListener('change', onCompositionEnd);
            /* istanbul ignore if */
            if (isIE9) {
              el.vmodel = true;
            }
          }
        }
      },

      componentUpdated: function componentUpdated (el, binding, vnode) {
        if (vnode.tag === 'select') {
          setSelected(el, binding, vnode.context);
          // in case the options rendered by v-for have changed,
          // it's possible that the value is out-of-sync with the rendered options.
          // detect such cases and filter out values that no longer has a matching
          // option in the DOM.
          var prevOptions = el._vOptions;
          var curOptions = el._vOptions = [].map.call(el.options, getValue);
          if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
            // trigger change event if
            // no matching option found for at least one value
            var needReset = el.multiple
              ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
              : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
            if (needReset) {
              trigger(el, 'change');
            }
          }
        }
      }
    };

    function setSelected (el, binding, vm) {
      actuallySetSelected(el, binding, vm);
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(function () {
          actuallySetSelected(el, binding, vm);
        }, 0);
      }
    }

    function actuallySetSelected (el, binding, vm) {
      var value = binding.value;
      var isMultiple = el.multiple;
      if (isMultiple && !Array.isArray(value)) {
         warn(
          "<select multiple v-model=\"" + (binding.expression) + "\"> " +
          "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
          vm
        );
        return
      }
      var selected, option;
      for (var i = 0, l = el.options.length; i < l; i++) {
        option = el.options[i];
        if (isMultiple) {
          selected = looseIndexOf(value, getValue(option)) > -1;
          if (option.selected !== selected) {
            option.selected = selected;
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) {
              el.selectedIndex = i;
            }
            return
          }
        }
      }
      if (!isMultiple) {
        el.selectedIndex = -1;
      }
    }

    function hasNoMatchingOption (value, options) {
      return options.every(function (o) { return !looseEqual(o, value); })
    }

    function getValue (option) {
      return '_value' in option
        ? option._value
        : option.value
    }

    function onCompositionStart (e) {
      e.target.composing = true;
    }

    function onCompositionEnd (e) {
      // prevent triggering an input event for no reason
      if (!e.target.composing) { return }
      e.target.composing = false;
      trigger(e.target, 'input');
    }

    function trigger (el, type) {
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      el.dispatchEvent(e);
    }

    /*  */

    // recursively search for possible transition defined inside the component root
    function locateNode (vnode) {
      return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
        ? locateNode(vnode.componentInstance._vnode)
        : vnode
    }

    var show = {
      bind: function bind (el, ref, vnode) {
        var value = ref.value;

        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        var originalDisplay = el.__vOriginalDisplay =
          el.style.display === 'none' ? '' : el.style.display;
        if (value && transition$$1) {
          vnode.data.show = true;
          enter(vnode, function () {
            el.style.display = originalDisplay;
          });
        } else {
          el.style.display = value ? originalDisplay : 'none';
        }
      },

      update: function update (el, ref, vnode) {
        var value = ref.value;
        var oldValue = ref.oldValue;

        /* istanbul ignore if */
        if (!value === !oldValue) { return }
        vnode = locateNode(vnode);
        var transition$$1 = vnode.data && vnode.data.transition;
        if (transition$$1) {
          vnode.data.show = true;
          if (value) {
            enter(vnode, function () {
              el.style.display = el.__vOriginalDisplay;
            });
          } else {
            leave(vnode, function () {
              el.style.display = 'none';
            });
          }
        } else {
          el.style.display = value ? el.__vOriginalDisplay : 'none';
        }
      },

      unbind: function unbind (
        el,
        binding,
        vnode,
        oldVnode,
        isDestroy
      ) {
        if (!isDestroy) {
          el.style.display = el.__vOriginalDisplay;
        }
      }
    };

    var platformDirectives = {
      model: directive,
      show: show
    };

    /*  */

    var transitionProps = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };

    // in case the child is also an abstract component, e.g. <keep-alive>
    // we want to recursively retrieve the real component to be rendered
    function getRealChild (vnode) {
      var compOptions = vnode && vnode.componentOptions;
      if (compOptions && compOptions.Ctor.options.abstract) {
        return getRealChild(getFirstComponentChild(compOptions.children))
      } else {
        return vnode
      }
    }

    function extractTransitionData (comp) {
      var data = {};
      var options = comp.$options;
      // props
      for (var key in options.propsData) {
        data[key] = comp[key];
      }
      // events.
      // extract listeners and pass them directly to the transition methods
      var listeners = options._parentListeners;
      for (var key$1 in listeners) {
        data[camelize(key$1)] = listeners[key$1];
      }
      return data
    }

    function placeholder (h, rawChild) {
      if (/\d-keep-alive$/.test(rawChild.tag)) {
        return h('keep-alive', {
          props: rawChild.componentOptions.propsData
        })
      }
    }

    function hasParentTransition (vnode) {
      while ((vnode = vnode.parent)) {
        if (vnode.data.transition) {
          return true
        }
      }
    }

    function isSameChild (child, oldChild) {
      return oldChild.key === child.key && oldChild.tag === child.tag
    }

    var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

    var isVShowDirective = function (d) { return d.name === 'show'; };

    var Transition = {
      name: 'transition',
      props: transitionProps,
      abstract: true,

      render: function render (h) {
        var this$1 = this;

        var children = this.$slots.default;
        if (!children) {
          return
        }

        // filter out text nodes (possible whitespaces)
        children = children.filter(isNotTextNode);
        /* istanbul ignore if */
        if (!children.length) {
          return
        }

        // warn multiple elements
        if ( children.length > 1) {
          warn(
            '<transition> can only be used on a single element. Use ' +
            '<transition-group> for lists.',
            this.$parent
          );
        }

        var mode = this.mode;

        // warn invalid mode
        if (
          mode && mode !== 'in-out' && mode !== 'out-in'
        ) {
          warn(
            'invalid <transition> mode: ' + mode,
            this.$parent
          );
        }

        var rawChild = children[0];

        // if this is a component root node and the component's
        // parent container node also has transition, skip.
        if (hasParentTransition(this.$vnode)) {
          return rawChild
        }

        // apply transition data to child
        // use getRealChild() to ignore abstract components e.g. keep-alive
        var child = getRealChild(rawChild);
        /* istanbul ignore if */
        if (!child) {
          return rawChild
        }

        if (this._leaving) {
          return placeholder(h, rawChild)
        }

        // ensure a key that is unique to the vnode type and to this transition
        // component instance. This key will be used to remove pending leaving nodes
        // during entering.
        var id = "__transition-" + (this._uid) + "-";
        child.key = child.key == null
          ? child.isComment
            ? id + 'comment'
            : id + child.tag
          : isPrimitive(child.key)
            ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
            : child.key;

        var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
        var oldRawChild = this._vnode;
        var oldChild = getRealChild(oldRawChild);

        // mark v-show
        // so that the transition module can hand over the control to the directive
        if (child.data.directives && child.data.directives.some(isVShowDirective)) {
          child.data.show = true;
        }

        if (
          oldChild &&
          oldChild.data &&
          !isSameChild(child, oldChild) &&
          !isAsyncPlaceholder(oldChild) &&
          // #6687 component root is a comment node
          !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
        ) {
          // replace old child transition data with fresh one
          // important for dynamic transitions!
          var oldData = oldChild.data.transition = extend({}, data);
          // handle transition mode
          if (mode === 'out-in') {
            // return placeholder node and queue update when leave finishes
            this._leaving = true;
            mergeVNodeHook(oldData, 'afterLeave', function () {
              this$1._leaving = false;
              this$1.$forceUpdate();
            });
            return placeholder(h, rawChild)
          } else if (mode === 'in-out') {
            if (isAsyncPlaceholder(child)) {
              return oldRawChild
            }
            var delayedLeave;
            var performLeave = function () { delayedLeave(); };
            mergeVNodeHook(data, 'afterEnter', performLeave);
            mergeVNodeHook(data, 'enterCancelled', performLeave);
            mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
          }
        }

        return rawChild
      }
    };

    /*  */

    var props = extend({
      tag: String,
      moveClass: String
    }, transitionProps);

    delete props.mode;

    var TransitionGroup = {
      props: props,

      beforeMount: function beforeMount () {
        var this$1 = this;

        var update = this._update;
        this._update = function (vnode, hydrating) {
          var restoreActiveInstance = setActiveInstance(this$1);
          // force removing pass
          this$1.__patch__(
            this$1._vnode,
            this$1.kept,
            false, // hydrating
            true // removeOnly (!important, avoids unnecessary moves)
          );
          this$1._vnode = this$1.kept;
          restoreActiveInstance();
          update.call(this$1, vnode, hydrating);
        };
      },

      render: function render (h) {
        var tag = this.tag || this.$vnode.data.tag || 'span';
        var map = Object.create(null);
        var prevChildren = this.prevChildren = this.children;
        var rawChildren = this.$slots.default || [];
        var children = this.children = [];
        var transitionData = extractTransitionData(this);

        for (var i = 0; i < rawChildren.length; i++) {
          var c = rawChildren[i];
          if (c.tag) {
            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
              children.push(c);
              map[c.key] = c
              ;(c.data || (c.data = {})).transition = transitionData;
            } else {
              var opts = c.componentOptions;
              var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
              warn(("<transition-group> children must be keyed: <" + name + ">"));
            }
          }
        }

        if (prevChildren) {
          var kept = [];
          var removed = [];
          for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
            var c$1 = prevChildren[i$1];
            c$1.data.transition = transitionData;
            c$1.data.pos = c$1.elm.getBoundingClientRect();
            if (map[c$1.key]) {
              kept.push(c$1);
            } else {
              removed.push(c$1);
            }
          }
          this.kept = h(tag, null, kept);
          this.removed = removed;
        }

        return h(tag, null, children)
      },

      updated: function updated () {
        var children = this.prevChildren;
        var moveClass = this.moveClass || ((this.name || 'v') + '-move');
        if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
          return
        }

        // we divide the work into three loops to avoid mixing DOM reads and writes
        // in each iteration - which helps prevent layout thrashing.
        children.forEach(callPendingCbs);
        children.forEach(recordPosition);
        children.forEach(applyTranslation);

        // force reflow to put everything in position
        // assign to this to avoid being removed in tree-shaking
        // $flow-disable-line
        this._reflow = document.body.offsetHeight;

        children.forEach(function (c) {
          if (c.data.moved) {
            var el = c.elm;
            var s = el.style;
            addTransitionClass(el, moveClass);
            s.transform = s.WebkitTransform = s.transitionDuration = '';
            el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
              if (e && e.target !== el) {
                return
              }
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener(transitionEndEvent, cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
          }
        });
      },

      methods: {
        hasMove: function hasMove (el, moveClass) {
          /* istanbul ignore if */
          if (!hasTransition) {
            return false
          }
          /* istanbul ignore if */
          if (this._hasMove) {
            return this._hasMove
          }
          // Detect whether an element with the move class applied has
          // CSS transitions. Since the element may be inside an entering
          // transition at this very moment, we make a clone of it and remove
          // all other transition classes applied to ensure only the move class
          // is applied.
          var clone = el.cloneNode();
          if (el._transitionClasses) {
            el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
          }
          addClass(clone, moveClass);
          clone.style.display = 'none';
          this.$el.appendChild(clone);
          var info = getTransitionInfo(clone);
          this.$el.removeChild(clone);
          return (this._hasMove = info.hasTransform)
        }
      }
    };

    function callPendingCbs (c) {
      /* istanbul ignore if */
      if (c.elm._moveCb) {
        c.elm._moveCb();
      }
      /* istanbul ignore if */
      if (c.elm._enterCb) {
        c.elm._enterCb();
      }
    }

    function recordPosition (c) {
      c.data.newPos = c.elm.getBoundingClientRect();
    }

    function applyTranslation (c) {
      var oldPos = c.data.pos;
      var newPos = c.data.newPos;
      var dx = oldPos.left - newPos.left;
      var dy = oldPos.top - newPos.top;
      if (dx || dy) {
        c.data.moved = true;
        var s = c.elm.style;
        s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
        s.transitionDuration = '0s';
      }
    }

    var platformComponents = {
      Transition: Transition,
      TransitionGroup: TransitionGroup
    };

    /*  */

    // install platform specific utils
    Vue.config.mustUseProp = mustUseProp;
    Vue.config.isReservedTag = isReservedTag;
    Vue.config.isReservedAttr = isReservedAttr;
    Vue.config.getTagNamespace = getTagNamespace;
    Vue.config.isUnknownElement = isUnknownElement;

    // install platform runtime directives & components
    extend(Vue.options.directives, platformDirectives);
    extend(Vue.options.components, platformComponents);

    // install platform patch function
    Vue.prototype.__patch__ = inBrowser ? patch : noop;

    // public mount method
    Vue.prototype.$mount = function (
      el,
      hydrating
    ) {
      el = el && inBrowser ? query(el) : undefined;
      return mountComponent(this, el, hydrating)
    };

    // devtools global hook
    /* istanbul ignore next */
    if (inBrowser) {
      setTimeout(function () {
        if (config.devtools) {
          if (devtools) {
            devtools.emit('init', Vue);
          } else {
            console[console.info ? 'info' : 'log'](
              'Download the Vue Devtools extension for a better development experience:\n' +
              'https://github.com/vuejs/vue-devtools'
            );
          }
        }
        if (
          config.productionTip !== false &&
          typeof console !== 'undefined'
        ) {
          console[console.info ? 'info' : 'log'](
            "You are running Vue in development mode.\n" +
            "Make sure to turn on production mode when deploying for production.\n" +
            "See more tips at https://vuejs.org/guide/deployment.html"
          );
        }
      }, 0);
    }

    function createVueView(component, options) {
        var vueConstructor = Vue.extend(component);
        var instance = new vueConstructor({
            data: options || {},
        });
        instance.$mount();
        return instance.$el;
    }

    var HandleDoc = (function () {
        function HandleDoc() {
            this.nodes = [];
            this.MIN_CHAR_LENGTH = 20;
            this.MAX_CHAR_LENGTH = 400;
        }
        HandleDoc.prototype.getRenderNodes = function (nodes) {
            this.nodes = nodes;
            return this.getNodeDomLocation();
        };
        HandleDoc.prototype.getNodeDomLocation = function () {
            var renderDocNodes = [];
            this.nodes.forEach(function (node) {
                var elems = querySelector(node.docId);
                if (elems.length) {
                    if (node.noUnique !== true) {
                        elems.length = 1;
                    }
                    elems.forEach(function (elem) {
                        var domRect = elem.getClientRects()[0];
                        if (domRect) {
                            renderDocNodes.push(__assign(__assign({ renderId: "" + (renderDocNodes.length + 1), zIndex: node.zIndex === undefined ? computedZIndex(elem) : node.zIndex }, node), { x: 0, y: 0, width: node.width || 0, height: node.height || 0, dom: elem, direction: node.direction || NodeDirectionEnum.DEFAULT, domLocation: {
                                    x: domRect.x + document.documentElement.scrollLeft,
                                    y: domRect.y + document.documentElement.scrollTop,
                                    width: domRect.width,
                                    height: domRect.height,
                                } }));
                        }
                    });
                }
            });
            return this.generateRenderNode(renderDocNodes);
        };
        HandleDoc.prototype.generateRenderNode = function (renderDocNodes) {
            var _this = this;
            renderDocNodes.forEach(function (node) {
                node.width = node.width || _this.generateWidth(node.description);
                node.height = node.height || _this.generateHeight(node.description);
                HandleDoc.generateLocation(node, renderDocNodes);
            });
            return renderDocNodes;
        };
        HandleDoc.prototype.generateWidth = function (description) {
            var len = getStringLength(description);
            if (len <= this.MIN_CHAR_LENGTH) {
                return EasyDocFactory.minWidth;
            }
            if (len >= this.MAX_CHAR_LENGTH) {
                return EasyDocFactory.maxWidth;
            }
            return (EasyDocFactory.minWidth +
                ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
                    (EasyDocFactory.maxWidth - EasyDocFactory.minWidth));
        };
        HandleDoc.prototype.generateHeight = function (description) {
            var len = getStringLength(description);
            if (len <= 20) {
                return 70;
            }
            if (len <= 40) {
                return 90;
            }
            if (len <= 70) {
                return 110;
            }
            if (len <= 96) {
                return 130;
            }
            if (len >= this.MAX_CHAR_LENGTH) {
                return EasyDocFactory.maxHeight;
            }
            return (24 +
                EasyDocFactory.minHeight +
                ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
                    (EasyDocFactory.maxHeight - EasyDocFactory.minHeight));
        };
        HandleDoc.generateLocation = function (node, nodes) {
            var fnObj = {
                RC: modalInRightCenter,
                RB: modalInRightBottom,
                BC: modalInBottomCenter,
                BR: modalInBottomRight,
                BL: modalInBottomLeft,
                LC: modalInLeftCenter,
                LB: modalInLeftBottom,
                RT: modalInRightTop,
                LT: modalInLeftTop,
                TC: modalInTopCenter,
                TR: modalInTopRight,
                TL: modalInTopLeft,
            };
            if (fnObj[node.direction] && fnObj[node.direction](node, nodes)) {
                return;
            }
            var generateLocationStrategies = [
                modalInRightCenter,
                modalInRightBottom,
                modalInBottomCenter,
                modalInBottomRight,
                modalInBottomLeft,
                modalInLeftCenter,
                modalInLeftBottom,
                modalInRightTop,
                modalInLeftTop,
                modalInTopCenter,
                modalInTopRight,
                modalInTopLeft,
                modalInDefaultCenter,
            ];
            var i = 0;
            while (!generateLocationStrategies[i++](node, nodes))
                ;
        };
        return HandleDoc;
    }());

    var HandlePage = (function () {
        function HandlePage() {
            this.nodes = [];
            this.MIN_CHAR_LENGTH = 100;
            this.MAX_CHAR_LENGTH = 2000;
        }
        HandlePage.prototype.getRenderNodes = function (nodes) {
            this.nodes = nodes;
            return this.getNodeDomLocation();
        };
        HandlePage.prototype.getNodeDomLocation = function () {
            var renderPageNodes = [];
            this.nodes.forEach(function (node) {
                renderPageNodes.push(__assign(__assign({ name: node.name, renderId: "" + (renderPageNodes.length + 1), zIndex: 999999 }, node), { x: 0, y: 0, width: 0, height: 0, direction: NodeDirectionEnum.CENTER }));
            });
            return this.generateNodeLocation(renderPageNodes);
        };
        HandlePage.prototype.generateNodeLocation = function (renderPageNodes) {
            var _this = this;
            renderPageNodes.forEach(function (node, idx) {
                node.width = _this.generateWidth(node.description) + 100;
                node.height = _this.generateHeight(node.description) + 100;
                node.x = 0;
                node.y = 0;
            });
            return renderPageNodes;
        };
        HandlePage.prototype.generateWidth = function (description) {
            var len = getStringLength(description);
            if (len <= this.MIN_CHAR_LENGTH) {
                return EasyDocFactory.minWidth;
            }
            if (len >= this.MAX_CHAR_LENGTH) {
                return EasyDocFactory.maxWidth;
            }
            return (EasyDocFactory.minWidth +
                ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
                    (EasyDocFactory.maxWidth - EasyDocFactory.minWidth));
        };
        HandlePage.prototype.generateHeight = function (description) {
            var len = getStringLength(description);
            if (len <= this.MIN_CHAR_LENGTH) {
                return EasyDocFactory.minHeight;
            }
            if (len >= this.MAX_CHAR_LENGTH) {
                return EasyDocFactory.maxHeight;
            }
            return (EasyDocFactory.minWidth +
                ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
                    (EasyDocFactory.maxHeight - EasyDocFactory.minHeight));
        };
        return HandlePage;
    }());

    var HandleProject = (function () {
        function HandleProject() {
            this.nodes = [];
            this.MIN_CHAR_LENGTH = 100;
            this.MAX_CHAR_LENGTH = 2000;
        }
        HandleProject.prototype.getRenderNodes = function (nodes) {
            this.nodes = nodes;
            return this.getNodeDomLocation();
        };
        HandleProject.prototype.getNodeDomLocation = function () {
            var renderProjectNodes = [];
            this.nodes.forEach(function (node) {
                renderProjectNodes.push(__assign(__assign({ name: node.name, renderId: "" + (renderProjectNodes.length + 1), zIndex: 999999 }, node), { x: 0, y: 0, width: 0, height: 0, direction: NodeDirectionEnum.CENTER }));
            });
            return this.generateNodeLocation(renderProjectNodes);
        };
        HandleProject.prototype.generateNodeLocation = function (renderProjectNodes) {
            var _this = this;
            renderProjectNodes.forEach(function (node, idx) {
                node.width = _this.generateWidth(node.description) + 100;
                node.height = _this.generateHeight(node.description) + 100;
                node.x = 0;
                node.y = 0;
            });
            return renderProjectNodes;
        };
        HandleProject.prototype.generateWidth = function (description) {
            var len = getStringLength(description);
            if (len <= this.MIN_CHAR_LENGTH) {
                return EasyDocFactory.minWidth;
            }
            if (len >= this.MAX_CHAR_LENGTH) {
                return EasyDocFactory.maxWidth;
            }
            return (EasyDocFactory.minWidth +
                ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
                    (EasyDocFactory.maxWidth - EasyDocFactory.minWidth));
        };
        HandleProject.prototype.generateHeight = function (description) {
            var len = getStringLength(description);
            if (len <= this.MIN_CHAR_LENGTH) {
                return EasyDocFactory.minHeight;
            }
            if (len >= this.MAX_CHAR_LENGTH) {
                return EasyDocFactory.maxHeight;
            }
            return (EasyDocFactory.minWidth +
                ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
                    (EasyDocFactory.maxHeight - EasyDocFactory.minHeight));
        };
        return HandleProject;
    }());

    var HandleEdit = (function () {
        function HandleEdit() {
            this.nodes = [];
        }
        HandleEdit.prototype.getRenderNodes = function (nodes) {
            this.nodes = nodes;
            return this.getNodeDomLocation();
        };
        HandleEdit.prototype.getNodeDomLocation = function () {
            var renderEditNodes = [];
            this.nodes.forEach(function (node) {
                var elems = querySelector(node.docId);
                if (elems.length) {
                    if (node.noUnique !== true) {
                        elems.length = 1;
                    }
                    elems.forEach(function (elem) {
                        var domRect = elem.getClientRects()[0];
                        if (domRect) {
                            renderEditNodes.push(__assign(__assign({ renderId: "" + (renderEditNodes.length + 1), zIndex: node.zIndex === undefined ? computedZIndex(elem) : node.zIndex }, node), { x: 0, y: 0, width: node.width || 0, height: node.height || 0, direction: node.direction || NodeDirectionEnum.DEFAULT, domLocation: {
                                    x: domRect.x + document.documentElement.scrollLeft,
                                    y: domRect.y + document.documentElement.scrollTop,
                                    width: domRect.width,
                                    height: domRect.height,
                                } }));
                        }
                    });
                }
            });
            return HandleEdit.generateRenderNode(renderEditNodes);
        };
        HandleEdit.generateRenderNode = function (renderEditNodes) {
            renderEditNodes.forEach(function (node) {
                node.width = node.width || EasyDocFactory.editWidth;
                node.height = node.height || EasyDocFactory.editHeight;
                HandleEdit.generateLocation(node, renderEditNodes);
            });
            return renderEditNodes;
        };
        HandleEdit.generateLocation = function (node, nodes) {
            var fnObj = {
                RC: modalInRightCenter,
                RB: modalInRightBottom,
                BC: modalInBottomCenter,
                BR: modalInBottomRight,
                BL: modalInBottomLeft,
                LC: modalInLeftCenter,
                LB: modalInLeftBottom,
                RT: modalInRightTop,
                LT: modalInLeftTop,
                TC: modalInTopCenter,
                TR: modalInTopRight,
                TL: modalInTopLeft,
            };
            if (fnObj[node.direction] && fnObj[node.direction](node, nodes)) {
                return;
            }
            var generateLocationStrategies = [
                modalInRightCenter,
                modalInRightBottom,
                modalInBottomCenter,
                modalInBottomRight,
                modalInBottomLeft,
                modalInLeftCenter,
                modalInLeftBottom,
                modalInRightTop,
                modalInLeftTop,
                modalInTopCenter,
                modalInTopRight,
                modalInTopLeft,
                modalInDefaultCenter,
            ];
            var i = 0;
            while (!generateLocationStrategies[i++](node, nodes))
                ;
        };
        return HandleEdit;
    }());

    var HandleManual = (function () {
        function HandleManual() {
        }
        HandleManual.getRenderNodes = function (manual, stepIdx) {
            var renderManualNode = {
                initUrl: manual.initUrl,
                renderId: '-1',
                description: manual.description,
                name: manual.name,
                steps: manual.steps.map(function (step, idx) {
                    if (stepIdx === idx && step.nodes) {
                        var renderDocNode_1 = [];
                        EasyDocFactory.handleData.getBaseRenderNode(NodeTypeEnum.DOC, step.nodes, function (nodeType, nodes) {
                            renderDocNode_1 = nodes;
                        });
                        return {
                            description: step.description,
                            url: step.url,
                            nodes: renderDocNode_1,
                            linkManualName: step.linkManualName,
                        };
                    }
                    return {
                        description: step.description,
                        url: step.url,
                        nodes: [],
                        linkManualName: step.linkManualName,
                    };
                }),
            };
            return renderManualNode;
        };
        return HandleManual;
    }());

    var HandleGuide = (function () {
        function HandleGuide() {
        }
        HandleGuide.getRenderNodes = function (guide, stepIdx) {
            var renderGuideNode = {
                renderId: '-1',
                name: guide.name,
                steps: guide.steps.map(function (step, idx) {
                    if (stepIdx === idx) {
                        var renderDocNodes_1 = [];
                        EasyDocFactory.handleData.getBaseRenderNode(NodeTypeEnum.DOC, [step.node], function (nodeType, nodes) {
                            renderDocNodes_1 = nodes;
                        });
                        var node = renderDocNodes_1[0];
                        if (node) {
                            node.height += HandleConfig.guideBtnHeight;
                        }
                        return {
                            url: step.url,
                            prev: step.prev,
                            next: step.next,
                            node: node,
                        };
                    }
                    return {
                        url: step.url,
                        prev: step.prev,
                        next: step.next,
                        node: {},
                    };
                }),
            };
            return renderGuideNode;
        };
        return HandleGuide;
    }());

    var HandleDataService = (function () {
        function HandleDataService() {
            this.handleManual = new HandleManual();
            this.handleGuide = new HandleGuide();
            this.handles = new Map([
                [NodeTypeEnum.PROJECT, new HandleProject()],
                [NodeTypeEnum.PAGE, new HandlePage()],
                [NodeTypeEnum.DOC, new HandleDoc()],
                [NodeTypeEnum.EDIT, new HandleEdit()],
            ]);
        }
        HandleDataService.prototype.handleData = function (nodeType, nodes) {
            var handle = this.handles.get(nodeType);
            if (handle) {
                return handle.getRenderNodes(nodes);
            }
            return [];
        };
        HandleDataService.handleManualData = function (manual, stepIdx) {
            return HandleManual.getRenderNodes(manual, stepIdx);
        };
        HandleDataService.handleGuideData = function (guide, stepIdx) {
            return __awaiter(this, void 0, void 0, function () {
                var renderGuideNode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            renderGuideNode = {};
                            return [4, new Promise(function (resolve) {
                                    setTimeout(function () {
                                        resolve(HandleGuide.getRenderNodes(guide, stepIdx));
                                    }, 500);
                                })];
                        case 1:
                            renderGuideNode = _a.sent();
                            return [2, renderGuideNode];
                    }
                });
            });
        };
        return HandleDataService;
    }());

    var HandleDataController = (function () {
        function HandleDataController() {
            this.stepIdx = 0;
            this.inListenScroll = false;
            this.handleDataService = new HandleDataService();
        }
        HandleDataController.prototype.getBaseRenderNode = function (nodeType, nodes, renderNodeCallback) {
            if (!nodeType) {
                console.log('缺少nodeType参数');
                return;
            }
            if (!nodes) {
                console.log('缺少nodes参数');
                return;
            }
            var renderNodes = this.handleDataService.handleData(nodeType, nodes);
            if (renderNodeCallback) {
                this.renderNodeCallback = renderNodeCallback;
                renderNodeCallback(nodeType, renderNodes);
            }
            else {
                EasyDocFactory.handleRender.render(nodeType, renderNodes);
            }
            this.nodeType = nodeType;
            this.nodes = nodes;
            if (!this.inListenScroll) {
                this.inListenScroll = true;
                document.body.addEventListener('scroll', this.nodeScrollEvent.bind(this), true);
            }
        };
        HandleDataController.prototype.getRenderManualNode = function (manual, stepIdx, renderManualCallback, scrollRepaint) {
            if (stepIdx === void 0) { stepIdx = 0; }
            if (!manual) {
                console.log('缺少manual参数');
                return;
            }
            var renderManualNode = HandleDataService.handleManualData(manual, stepIdx);
            if (renderManualCallback) {
                this.renderManualCallback = renderManualCallback;
                renderManualCallback(renderManualNode, stepIdx);
            }
            else {
                EasyDocFactory.handleRender.renderManual(renderManualNode, stepIdx, !!scrollRepaint);
            }
            this.nodeType = NodeTypeEnum.MANUAL;
            this.manual = manual;
            this.stepIdx = stepIdx;
            if (!this.inListenScroll) {
                this.inListenScroll = true;
                document.body.addEventListener('scroll', this.nodeScrollEvent.bind(this), true);
            }
        };
        HandleDataController.prototype.getRenderGuideNode = function (guide, stepIdx, renderGuideCallback) {
            if (stepIdx === void 0) { stepIdx = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var renderGuideNode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!guide) {
                                console.log('缺少guide参数');
                                return [2];
                            }
                            return [4, HandleDataService.handleGuideData(guide, stepIdx)];
                        case 1:
                            renderGuideNode = _a.sent();
                            if (renderGuideCallback) {
                                this.renderGuideCallback = renderGuideCallback;
                                renderGuideCallback(renderGuideNode, stepIdx);
                            }
                            else if (renderGuideNode.steps[stepIdx].node) {
                                EasyDocFactory.handleRender.renderGuide(renderGuideNode, stepIdx);
                            }
                            else {
                                EasyDocFactory.handleRender.notifyGuideEmpty();
                                throw new Error('节点缺失，请确认步骤是否完成');
                            }
                            this.nodeType = NodeTypeEnum.GUIDE;
                            this.guide = guide;
                            this.stepIdx = stepIdx;
                            if (!this.inListenScroll) {
                                this.inListenScroll = true;
                                document.body.addEventListener('scroll', this.nodeScrollEvent.bind(this), true);
                            }
                            return [2];
                    }
                });
            });
        };
        HandleDataController.prototype.manualChangeStep = function (stepIdx) {
            this.stepIdx = stepIdx;
            return HandleDataService.handleManualData(this.manual, stepIdx);
        };
        HandleDataController.prototype.guideChangeStep = function (stepIdx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.stepIdx = stepIdx;
                            return [4, this.getRenderGuideNode(this.guide, this.stepIdx)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        HandleDataController.prototype.nodeScrollEvent = function (event) {
            var _this = this;
            var elem = event.target;
            if (elem.className.split(' ').includes(HandleConfig.__renderModalClassName)) {
                return;
            }
            if (this.throttleTimer === undefined) {
                this.throttleTimer = window.setTimeout(function () {
                    var nodeType = readCache('nodeType');
                    if (nodeType) {
                        if (nodeType === NodeTypeEnum.MANUAL && _this.manual) {
                            _this.getRenderManualNode(_this.manual, _this.stepIdx, _this.renderManualCallback, true);
                        }
                        else if (nodeType === NodeTypeEnum.GUIDE && _this.guide) {
                            _this.getRenderGuideNode(_this.guide, _this.stepIdx, _this.renderGuideCallback);
                        }
                        else if (_this.nodes && _this.nodes.length) {
                            _this.getBaseRenderNode(nodeType, _this.nodes, _this.renderNodeCallback);
                        }
                    }
                    clearTimeout(_this.throttleTimer);
                    _this.throttleTimer = undefined;
                }, 200);
            }
        };
        HandleDataController.prototype.destroyScrollEvent = function () {
            this.nodeType = undefined;
            this.nodes = [];
            this.manual = undefined;
        };
        return HandleDataController;
    }());

    var Panel = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ed-panel",style:(_vm.panelStyle),attrs:{"draggable":!_vm.lock},on:{"dragstart":function($event){return _vm.dragstartPanel($event)},"dragover":function($event){return _vm.dragoverPanel($event)},"dragend":function($event){return _vm.dragoverPanel($event)},"mouseleave":function($event){return _vm.mouseleave($event)}}},[_c('div',{staticClass:"ed-panel-content"},[_c('div',{staticClass:"tag",on:{"click":_vm.tagClick}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_double-arrow-left"}})])]),_vm._v(" "),_c('a',{staticClass:"title",attrs:{"target":"_blank","href":"https://juejin.cn/team/6932676282429898766/posts"}},[_vm._v(" Easy-Doc ")]),_vm._v(" "),_c('div',{staticClass:"ed-menu"},_vm._l((_vm.documentTypesFilter),function(item){return _c('div',{class:{ 'easydoc-type': true, active: _vm.documentActive === item.type },on:{"click":function($event){return _vm.typeChange(item)}}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":item.icon}})]),_vm._v("\n        "+_vm._s(item.name)+"\n      ")])}),0)]),_vm._v(" "),(_vm.documentActive === 'manuals')?_c('div',{staticClass:"ed-panel-step",style:(_vm.stepStyle)},[(_vm.currentManual)?_c('div',{staticClass:"ed-manual-content"},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""},on:{"click":_vm.backManualCatalogues}},[_c('use',{attrs:{"xlink:href":"#easy-doc_leftarrow"}})]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.currentManual.name))]),_vm._v(" "),_c('div',{staticClass:"sub-title",domProps:{"innerHTML":_vm._s(_vm.currentManual.description)}}),_vm._v(" "),_c('div',{staticClass:"manual-step-list"},_vm._l((_vm.currentManual.steps),function(item,idx){return _c('div',{class:{ 'manual-step-item': true, active: _vm.currentStepIdx === idx },on:{"click":function($event){return _vm.manualStepItem(item, idx)}}},[_c('div',{staticClass:"title"},[_vm._v("\n            第"+_vm._s(idx + 1)+"步\n            "),(item.linkManualName)?_c('svg',{staticClass:"icon btn-next",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_Rightbutton"}})]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"desc",domProps:{"innerHTML":_vm._s(item.description)}})])}),0)]):_c('div',{staticClass:"ed-manual-catalogues"},[_c('div',{staticClass:"title"},[_vm._v("操作手册目录")]),_vm._v(" "),_c('div',{staticClass:"ed-manual-list"},_vm._l((_vm.documents.manuals),function(item){return _c('div',{staticClass:"ed-manual-item",on:{"click":function($event){return _vm.manualClick(item)}}},[_c('div',{staticClass:"title"},[_vm._v("\n            "+_vm._s(item.name)+"\n            "),_c('svg',{staticClass:"icon btn-next",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_Rightbutton"}})])]),_vm._v(" "),_c('div',{staticClass:"desc"},[_vm._v("\n            "+_vm._s(item.description)+"\n          ")])])}),0)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ed-panel-btn",style:(_vm.btnStyle)},[_c('div',{staticClass:"ed-setting"},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_set"}})])]),_vm._v(" "),_c('div',{staticClass:"ed-lock",on:{"click":_vm.toggleLock}},[(_vm.lock)?[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_lock"}})]),_vm._v(" "),_c('span',{staticClass:"desc"},[_vm._v(" 取消钉住吸附 ")])]:[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_unlock1"}})]),_vm._v(" "),_c('span',{staticClass:"desc"},[_vm._v(" 钉住拖拽 ")])]],2)])])},
    staticRenderFns: [],
      name: 'index',
      data() {
        return {
          tagActive: false,
          lock: false,
          documentActive: undefined,
          currentManual: undefined,
          currentStepIdx: undefined,
          documents: {},
          documentTypes: [
            { type: 'projects', icon: '#easy-doc_signboard', name: '项目说明' },
            { type: 'pages', icon: '#easy-doc_signboard', name: '页面说明' },
            { type: 'docs', icon: '#easy-doc_template', name: '原型说明' },
            { type: 'edits', icon: '#easy-doc_editor', name: '编辑说明' },
            { type: 'manuals', icon: '#easy-doc_tradealert', name: '操作手册' },
          ],
          panelStyle: {
            offsetX: 0,
            offsetY: 0,
            left: '100%',
            top: 0,
          },
        }
      },
      mounted() {
        this.init();
      },
      methods: {
        init() {
          this.documents = this.jsonData;
          this.recoveryScene();
          if (Object.keys(this.documents).length === 1 && this.documents.manuals) {
            this.documentActive = 'manuals';
          }
        },
        dragstartPanel(e) {
          if (this.lock) {
            this.panelStyle.offsetX = e.offsetX;
            this.panelStyle.offsetY = e.offsetY;
          }
        },
        dragoverPanel(e) {
          if (this.lock) {
            this.panelStyle.left = `${e.clientX - this.panelStyle.offsetX}px`;
            this.panelStyle.top = `${e.clientY - this.panelStyle.offsetY}px`;
          }
        },
        mouseleave(e) {
          if (!this.lock && this.tagActive) {
            this.tagActive = false;
            this.panelStyle = {
              offsetX: 0,
              offsetY: 0,
              left: '100%',
              top: 0,
            };
          }
        },
        backManualCatalogues() {
          this.currentStepIdx = undefined;
          this.currentManual = undefined;
          writeCurrentManualCache();
          writeCurrentStepCache();
        },
        manualClick(item) {
          this.currentManual = item;
          writeCurrentManualCache(item);
          // 当前url是操作手册initUrl则直接打开第一步，否则跳转到initUrl
          const nowIsInitUrl = new RegExp(`^${EasyDocFactory.urlPrefix + item.initUrl}$`).test(window.location.pathname);
          if (!nowIsInitUrl) {
            window.location.href = `${window.location.origin}${EasyDocFactory.urlPrefix}${item.initUrl}`;
          } else {
            this.currentStepIdx = 0;
            writeCurrentStepCache(0);
            EasyDocFactory.handleData.getRenderManualNode(item, 0);
          }
        },
        typeChange(item) {
          if (this.documentActive && this.documentActive === item.type) {
            // 销毁界面上的提示
            this.documentActive = undefined;
            EasyDocFactory.handleRender.destroy();
            return
          } else {
            this.documentActive = item.type;
            // doc、page需要清除销毁滚轮监听展示提示
            EasyDocFactory.handleData.destroyScrollEvent();
            const nodeType = item.type.slice(0, -1).toUpperCase();
            writeNodeTypeCache(nodeType);
            if (nodeType === 'MANUAL') {
              /* 根据缓存数据判断渲染热门目录或操作详情 */
              const currentStep = readCache('currentStep');
              const currentManual = readCache('currentManual');
              if (currentManual && Object.keys(currentManual).length && typeof currentStep === 'number') {
                EasyDocFactory.handleData.getRenderManualNode(currentManual, currentStep);
              }
            } else {
              EasyDocFactory.handleData.getBaseRenderNode(nodeType, this.documents[item.type]);
            }
          }
        },
        toggleLock() {
          this.lock = !this.lock;
          if (this.lock === false) {
            this.panelStyle = {
              offsetX: 0,
              offsetY: 0,
              left: innerWidth - 336 + 'px',
              top: 0,
            };
          }
        },
        tagClick() {
          this.tagActive = !this.tagActive;
          this.panelStyle = {
            offsetX: 0,
            offsetY: 0,
            left: this.tagActive ? innerWidth - 336 + 'px' : '100%',
            top: 0,
          };
        },
        manualStepItem(currentStep, currentStepIdx) {
          if (this.currentStepIdx === currentStepIdx) {
            return
          }
          this.currentStepIdx = currentStepIdx;
          if (currentStep && currentStep.type === 'link' && currentStep.linkManualName) {
            // 跳转到其他操作手册
            const targetManual = this.documents.manuals.find(({ name }) => name === currentStep.linkManualName);
            if (targetManual && targetManual.initUrl) {
              writeCurrentStepCache(0);
              writeCurrentManualCache(targetManual);
              this.currentStepIdx = 0;
              this.currentManual = targetManual;
              EasyDocFactory.handleData.getRenderManualNode(targetManual, this.currentStepIdx);
              const nowIsInitUrl = new RegExp(`^${EasyDocFactory.urlPrefix + targetManual.initUrl}$`).test(
                window.location.pathname,
              );
              if (!nowIsInitUrl) {
                window.location.href = EasyDocFactory.urlPrefix + targetManual.initUrl;
              }
            }
            return
          }
          // 缓存当前步骤
          writeCurrentStepCache(currentStepIdx);
          EasyDocFactory.handleData.getRenderManualNode(this.currentManual, currentStepIdx);
        },
        recoveryScene() {
          const nodeType = readCache('nodeType');
          const currentStep = readCache('currentStep');
          const currentManual = readCache('currentManual');
          // 优先判断当前步骤的下一步URL是否匹配，不匹配则从头查找是否存在匹配，存在则恢复现场，不存在则清除数据
          if (nodeType === NodeTypeEnum.MANUAL && currentManual) {
            this.documentActive = 'manuals';
            this.currentManual = currentManual;
            this.currentStepIdx = currentStep;
            this.recoverManualScene();
          } else {
            this.clearManualOrGuideCache();
          }
        },
        recoverManualScene() {
          if (!this.currentManual || this.currentStepIdx) {
            return
          }
          let stepIdx = -1;
          // 匹配当前步骤url,可能是当前页面刷新
          const currentRule = new RegExp(`^${this.currentManual.steps[this.currentStepIdx].url}$`).test(
            window.location.pathname,
          );
          if (currentRule) {
            stepIdx = this.currentStepIdx;
          }
          // 匹配下一步url,可能是跳转页面
          if (stepIdx === -1) {
            const nextRule =
              this.currentStepIdx + 1 < this.currentManual.steps.length &&
              new RegExp(`^${this.currentManual.steps[this.currentStepIdx + 1].url}$`).test(window.location.pathname);
            if (nextRule) {
              stepIdx = this.currentStepIdx + 1;
            }
          }
          // 从头开始匹配当前操作手册所有url
          if (stepIdx === -1) {
            stepIdx = this.currentManual.steps.findIndex((step) =>
              new RegExp(`^${step.url}$`).test(window.location.pathname),
            );
          }
          // 恢复渲染（为啥加2s定时器？因为页面刚进来还在请求数据，docId的目标节点可能还没渲染）
          // debugger
          if (stepIdx !== -1) {
            setTimeout(() => {
              writeCurrentStepCache(stepIdx);
              EasyDocFactory.handleData.getRenderManualNode(this.currentManual, stepIdx);
              // 有争议，暂时不展开
              // setTimeout(()=>{
              //   PanelDom.autoExpend(NodeTypeEnum.MANUAL)
              // },250)
            }, 1000);
          } else {
            // url不匹配展示当前数据内容
            // PanelDom.autoExpend(NodeTypeEnum.MANUAL)
            writeCurrentStepCache(this.currentStepIdx);
            EasyDocFactory.handleData.getRenderManualNode(this.currentManual, this.currentStepIdx);
          }
        },
        clearManualOrGuideCache() {
          writeNodeTypeCache();
          writeCurrentStepCache();
          writeCurrentManualCache();
          // writeCurrentGuideCache()
        },
      },
      computed: {
        documentTypesFilter() {
          const modules = Object.keys(this.documents);
          return this.documentTypes.filter((item) => modules.some((it) => it === item.type))
        },
        stepStyle() {
          return {
            height: innerHeight - 224 - 40 + 'px',
          }
        },
        btnStyle() {
          if (this.documentActive === 'manuals') {
            return {
              top: innerHeight - 40 + 'px',
            }
          }
        },
      },
    };

    var HandleUIService = (function () {
        function HandleUIService() {
            this.renderGuideDom = function (data) {
                if (!data)
                    return;
                var ed = document.createElement('div');
                ed.id = 'ED-Menu';
                ed.appendChild(createVueView(Panel, {
                    jsonData: data,
                }));
                document.body.appendChild(ed);
            };
            this.destroyLastRender = function () {
                var nodeType = readCache('nodeType');
                if (!nodeType)
                    return;
                EasyDocFactory.handleRender.destroy();
                EasyDocFactory.handleData.destroyScrollEvent();
            };
        }
        return HandleUIService;
    }());

    var HandleLoadDataService = (function () {
        function HandleLoadDataService() {
            this.nowData = {};
        }
        HandleLoadDataService.handleLoadBaseNodeData = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var JSONMap, pathTransJsonData, jsonData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, HandleLoadDataService.getJSONMapObjectFromCache()];
                        case 1:
                            JSONMap = _a.sent();
                            if (!JSONMap) {
                                console.warn('映射json为空');
                                return [2, {}];
                            }
                            pathTransJsonData = JSONMap.find(function (item) {
                                if (!(item === null || item === void 0 ? void 0 : item.match))
                                    return false;
                                return HandleLoadDataService.createRegular(item.match).test(url);
                            });
                            if (!pathTransJsonData) {
                                console.warn('匹配不到对应的JSON');
                                return [2, {}];
                            }
                            return [4, HandleLoadDataService.getJsonDataFromCache(pathTransJsonData.jsonFile)];
                        case 2:
                            jsonData = _a.sent();
                            return [2, jsonData];
                    }
                });
            });
        };
        HandleLoadDataService.handleLoadManualsData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var manualsList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, HandleLoadDataService.getManualsListFromCache()];
                        case 1:
                            manualsList = _a.sent();
                            if (!manualsList.length) {
                                throw new Error('操作手册为空');
                            }
                            return [2, manualsList];
                    }
                });
            });
        };
        HandleLoadDataService.handleLoadProjectData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var projectList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, HandleLoadDataService.getProjectListFromCache()];
                        case 1:
                            projectList = _a.sent();
                            if (!projectList.length) {
                                throw new Error('项目文档为空');
                            }
                            return [2, projectList];
                    }
                });
            });
        };
        HandleLoadDataService.requestJSONMapObject = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, requestData(url)];
                        case 1:
                            data = _a.sent();
                            return [2, data];
                    }
                });
            });
        };
        HandleLoadDataService.requestManualsList = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, requestData(url)];
                        case 1:
                            data = _a.sent();
                            if (data && data.length) {
                                data.forEach(function (item) {
                                    if (item.auth === 'dev') {
                                        item.auth = AuthEnum.DEVELOPMENT;
                                    }
                                    else if (item.auth === 'test') {
                                        item.auth = AuthEnum.TEST;
                                    }
                                    else if (item.auth === 'pro') {
                                        item.auth = AuthEnum.PRODUCTION;
                                    }
                                });
                            }
                            return [2, data];
                    }
                });
            });
        };
        HandleLoadDataService.requestProjectList = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, requestData(url)];
                        case 1:
                            data = _a.sent();
                            if (data && data.length) {
                                data.forEach(function (item) {
                                    if (item.auth === 'dev') {
                                        item.auth = AuthEnum.DEVELOPMENT;
                                    }
                                    else if (item.auth === 'test') {
                                        item.auth = AuthEnum.TEST;
                                    }
                                    else if (item.auth === 'pro') {
                                        item.auth = AuthEnum.PRODUCTION;
                                    }
                                });
                            }
                            return [2, data];
                    }
                });
            });
        };
        HandleLoadDataService.requestBaseNodeData = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, requestData(url)];
                        case 1:
                            data = _a.sent();
                            Object.keys(data).forEach(function (key) {
                                if (!data[key].length) {
                                    delete data[key];
                                }
                                else {
                                    data[key].forEach(function (item) {
                                        if (item.auth === 'dev') {
                                            item.auth = AuthEnum.DEVELOPMENT;
                                        }
                                        else if (item.auth === 'test') {
                                            item.auth = AuthEnum.TEST;
                                        }
                                        else if (item.auth === 'pro') {
                                            item.auth = AuthEnum.PRODUCTION;
                                        }
                                    });
                                }
                            });
                            return [2, data];
                    }
                });
            });
        };
        HandleLoadDataService.createRegular = function (match) {
            return new RegExp("^" + match + "$");
        };
        HandleLoadDataService.getJSONMapObjectFromCache = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, matchMap;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            result = [];
                            if (!HandleLoadDataService.envIsDev()) return [3, 2];
                            return [4, HandleLoadDataService.requestJSONMapObject(EasyDocFactory.easyDocPath)];
                        case 1:
                            result = _a.sent();
                            return [3, 5];
                        case 2:
                            matchMap = readCache('matchMap');
                            if (!!matchMap) return [3, 4];
                            return [4, HandleLoadDataService.requestJSONMapObject(EasyDocFactory.easyDocPath)];
                        case 3:
                            result = _a.sent();
                            writeMatchMapCache(result);
                            return [3, 5];
                        case 4:
                            result = matchMap;
                            _a.label = 5;
                        case 5: return [2, result];
                    }
                });
            });
        };
        HandleLoadDataService.getJsonDataFromCache = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var result, jsonData, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            result = {};
                            if (!HandleLoadDataService.envIsDev()) return [3, 2];
                            return [4, HandleLoadDataService.requestBaseNodeData(url)];
                        case 1:
                            result = _c.sent();
                            return [3, 5];
                        case 2:
                            jsonData = readCache('jsonData');
                            if (!(!jsonData || !jsonData[url])) return [3, 4];
                            _b = (_a = HandleLoadDataService).filterAuth;
                            return [4, HandleLoadDataService.requestBaseNodeData(url)];
                        case 3:
                            result = _b.apply(_a, [_c.sent()]);
                            writeJsonDataCache(url, result);
                            return [3, 5];
                        case 4:
                            result = jsonData[url];
                            _c.label = 5;
                        case 5: return [2, result];
                    }
                });
            });
        };
        HandleLoadDataService.getManualsListFromCache = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, manualsList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            result = [];
                            if (!HandleLoadDataService.envIsDev()) return [3, 2];
                            return [4, HandleLoadDataService.requestManualsList(EasyDocFactory.easyManualsPath)];
                        case 1:
                            result = _a.sent();
                            writeManualsCache(result);
                            return [3, 5];
                        case 2:
                            manualsList = readCache('manuals');
                            if (!!manualsList) return [3, 4];
                            return [4, HandleLoadDataService.requestManualsList(EasyDocFactory.easyManualsPath)];
                        case 3:
                            result = _a.sent();
                            writeManualsCache(result);
                            return [3, 5];
                        case 4:
                            result = manualsList;
                            _a.label = 5;
                        case 5: return [2, result];
                    }
                });
            });
        };
        HandleLoadDataService.getProjectListFromCache = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result, projectList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            result = [];
                            if (!HandleLoadDataService.envIsDev()) return [3, 2];
                            return [4, HandleLoadDataService.requestProjectList(EasyDocFactory.easyProjectsPath)];
                        case 1:
                            result = _a.sent();
                            writeProjectsCache(result);
                            return [3, 5];
                        case 2:
                            projectList = readCache('projects');
                            if (!!projectList) return [3, 4];
                            return [4, HandleLoadDataService.requestProjectList(EasyDocFactory.easyProjectsPath)];
                        case 3:
                            result = _a.sent();
                            writeProjectsCache(result);
                            return [3, 5];
                        case 4:
                            result = projectList;
                            _a.label = 5;
                        case 5: return [2, result];
                    }
                });
            });
        };
        HandleLoadDataService.envIsDev = function () {
            return EasyDocFactory.env === AuthEnum.DEVELOPMENT;
        };
        HandleLoadDataService.filterAuth = function (list) {
            var rightAuthJsonMapList = Object.keys(list).reduce(function (prev, type) {
                if (list[type].length) {
                    var filterResult = list[type].filter(function (item) {
                        if (EasyDocFactory.env === AuthEnum.DEVELOPMENT) {
                            return true;
                        }
                        if (EasyDocFactory.env === AuthEnum.TEST) {
                            return [AuthEnum.TEST, 'test', AuthEnum.PRODUCTION, 'pro'].includes(item.auth);
                        }
                        if (EasyDocFactory.env === AuthEnum.PRODUCTION) {
                            return [AuthEnum.PRODUCTION, 'pro'].includes(item.auth) || !item.auth;
                        }
                    });
                    if (filterResult.length)
                        prev[type] = filterResult;
                }
                return prev;
            }, {});
            return rightAuthJsonMapList;
        };
        return HandleLoadDataService;
    }());

    var HandleLoadDataController = (function () {
        function HandleLoadDataController() {
        }
        HandleLoadDataController.getData = function (handleGetData, url) {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4, handleGetData(url)];
                        case 1:
                            res = _a.sent();
                            return [2, res];
                        case 2:
                            error_1 = _a.sent();
                            console.log('数据获取失败：', error_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        };
        HandleLoadDataController.getBaseNodeData = function (url) {
            if (!url) {
                console.log('缺少当前url参数');
                throw new Error('缺少当前url参数');
            }
            return HandleLoadDataController.getData(HandleLoadDataService.handleLoadBaseNodeData, url);
        };
        HandleLoadDataController.getManualsListData = function () {
            return HandleLoadDataController.getData(HandleLoadDataService.handleLoadManualsData);
        };
        HandleLoadDataController.getProjectListData = function () {
            return HandleLoadDataController.getData(HandleLoadDataService.handleLoadProjectData);
        };
        return HandleLoadDataController;
    }());

    var HandleUIController = (function () {
        function HandleUIController() {
            this.HandleUIService = new HandleUIService();
        }
        HandleUIController.prototype.listenUrlChange = function () {
            return __awaiter(this, void 0, void 0, function () {
                var originPushState, _this;
                var _this_1 = this;
                return __generator(this, function (_a) {
                    originPushState = History.prototype.pushState;
                    _this = this;
                    History.prototype.pushState = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        originPushState.apply(this, args);
                                        return [4, _this.handleRender()];
                                    case 1:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        });
                    };
                    window.addEventListener('popstate', function () { return __awaiter(_this_1, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('popstate');
                                    return [4, this.handleRender()];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    }); });
                    window.addEventListener('hashchange', function () { return __awaiter(_this_1, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('hashchange');
                                    return [4, this.handleRender()];
                                case 1:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    }); });
                    return [2];
                });
            });
        };
        HandleUIController.prototype.handleRender = function (noDestroyLastRender) {
            return __awaiter(this, void 0, void 0, function () {
                var url, isIgnorePath, baseNode, manuals, projects, resultData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!noDestroyLastRender) {
                                this.HandleUIService.destroyLastRender();
                            }
                            url = window.location.pathname;
                            isIgnorePath = EasyDocFactory.ignorePaths.some(function (matchUrl) { return new RegExp("^" + matchUrl + "$").test(url); });
                            if (isIgnorePath)
                                return [2];
                            baseNode = {};
                            manuals = [];
                            projects = [];
                            if (!EasyDocFactory.hasEasyDocJSON) return [3, 2];
                            return [4, HandleLoadDataController.getBaseNodeData(url)];
                        case 1:
                            baseNode = (_a.sent());
                            _a.label = 2;
                        case 2:
                            if (!EasyDocFactory.hasManualsJSON) return [3, 4];
                            return [4, HandleLoadDataController.getManualsListData()];
                        case 3:
                            manuals = (_a.sent());
                            _a.label = 4;
                        case 4:
                            if (!EasyDocFactory.hasProjectsJSON) return [3, 6];
                            return [4, HandleLoadDataController.getProjectListData()];
                        case 5:
                            projects = (_a.sent());
                            _a.label = 6;
                        case 6:
                            resultData = __assign({}, baseNode);
                            if (projects && projects.length) {
                                resultData.projects = projects;
                            }
                            if (manuals && manuals.length) {
                                resultData.manuals = manuals;
                            }
                            if (JSON.stringify(resultData) !== '{}') {
                                this.HandleUIService.renderGuideDom(resultData);
                            }
                            return [2];
                    }
                });
            });
        };
        HandleUIController.prototype.renderGuide = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.listenUrlChange()];
                        case 1:
                            _a.sent();
                            this.handleRender(true);
                            return [2];
                    }
                });
            });
        };
        return HandleUIController;
    }());

    var Arrow = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"easydoc-arrow",style:(_vm.locationStyle)},[_c('div',{staticClass:"easydoc-arrow__start"}),_vm._v(" "),_c('div',{staticClass:"easydoc-arrow__line",style:(_vm.lineStyle)})])},
    staticRenderFns: [],
      name: 'Arrow',
      props: {
        direction: String,
      },
      computed: {
        locationStyle() {
          const { direction } = this;
          const fl = direction[0];
          let flexDirection = 'row';
          let width = 16;
          let height = 8;
          // 位于右侧，则正常排序
          if (fl === 'R') {
            flexDirection = 'row';
          } else if (fl === 'L') {
            // 位于右侧，则倒序
            flexDirection = 'row-reverse';
          } else if (fl === 'T') {
            // 位于上侧，则改变宽高并倒序
            width = 8;
            height = 16;
            flexDirection = 'column-reverse';
          } else {
            // 位于下侧，则改变宽高
            width = 8;
            height = 16;
            flexDirection = 'column';
          }
          return {
            height: `${height}px`,
            width: `${width}px`,
            flexDirection,
          }
        },
        lineStyle() {
          const { direction } = this;
          const fl = direction[0];
          const box = {};
          if (fl === 'R' || fl === 'L') {
            box.height = '4px';
          } else {
            box.width = '4px';
          }
          return {
            ...box,
            flex: 1,
            margin: '-1px',
          }
        },
      },
      methods: {},
    };

    var TagComp = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.tagClass},[(_vm.node.editUrl)?_c('a',{staticClass:"easydoc-tag__text",attrs:{"target":"__blank","href":_vm.node.editUrl}},[_vm._v("点击跳转配置")]):_c('a',{staticClass:"easydoc-tag__text"})])},
    staticRenderFns: [],
      name: 'TagComp',
      props: {
        node: Object,
      },
      computed: {
        tagClass() {
          const { direction } = this.node;
          const fl = direction[0];
          const sl = direction[1];
          let classArr = [];
          classArr.push('easydoc-tag');
          if (fl === 'L') {
            classArr = ['easydoc-tag', 'easydoc-tag--l'];
          } else if (sl === 'R') {
            classArr = ['easydoc-tag', 'easydoc-tag--l'];
          } else {
            classArr = ['easydoc-tag', 'easydoc-tag--r'];
          }
          return classArr
        },
      },
    };

    var DotCircle = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.circleClass,on:{"click":function($event){return _vm.$emit('tap')}}})},
    staticRenderFns: [],
      name: 'DotCircle',
      props: {
        isShrink: Boolean,
      },
      computed: {
        circleClass() {
          if (this.isShrink) {
            return ['easydoc-circle']
          } else {
            return ['easydoc-circle', 'easydoc-circle--main']
          }
        },
      },
    };

    var Doc = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.nodesFormat),function(node){return _c('div',{key:node.renderId,class:node.status === _vm.DocNodeStatus.SHRINK ? ['easydoc-dialog--shrink'] : [],style:(Object.assign({}, node.domStyle, (node.status === _vm.DocNodeStatus.SHRINK ? { width: '0', height: '0' } : {})))},[(!node.editUrl)?_c('div',{staticClass:"easydoc-dialog"},[_c('div',{class:['easydoc-dialog__desc', _vm.renderModalClassName],domProps:{"innerHTML":_vm._s(node.description)}})]):_vm._e(),_vm._v(" "),(!node.noArrow)?_c('arrow',{style:(node.arrowStyle),attrs:{"direction":node.direction}}):_vm._e(),_vm._v(" "),_c('tag-comp',{directives:[{name:"show",rawName:"v-show",value:(node.status === _vm.DocNodeStatus.SHRINK),expression:"node.status === DocNodeStatus.SHRINK"}],style:(node.tagStyle),attrs:{"node":node}}),_vm._v(" "),_c('dot-circle',{style:(node.circleStyle),attrs:{"is-shrink":node.status === _vm.DocNodeStatus.SHRINK},on:{"tap":function($event){return _vm.handleChangeStatus(node)}}})],1)}),0)},
    staticRenderFns: [],
      name: 'Doc',
      components: { Arrow, TagComp, DotCircle },
      data() {
        this.DocNodeStatus = DocNodeStatus;
        return {
          nodesFormat: {},
        }
      },
      created() {
        // console.log(this.nodes)
        this.initNodesFormat();
      },
      methods: {
        initNodesFormat() {
          this.nodesFormat = this.nodes.map((node) => {
            return {
              ...node,
              domStyle: setDomLocation(node),
              noArrow: node.direction === NodeDirectionEnum.DEFAULT || node.direction === NodeDirectionEnum.CENTER,
              arrowStyle: this.locationArrow(node),
              tagStyle: this.locationTag(node),
              circleStyle: this.locationCircle(node),
              status: node.editUrl ? DocNodeStatus.SHRINK : EasyDocFactory.handleRender.docStatusIns.getDocStatus(node),
            }
          });
        },
        locationArrow(node) {
          const { direction, height, width } = node;
          // 设置各个方向的位置
          const position = setPosition(direction, {
            [NodeDirectionEnum.RT]: {
              top: '16px',
              left: '-16px',
            },
            [NodeDirectionEnum.RC]: {
              top: `${height / 2 - 4}px`,
              left: '-16px',
            },
            [NodeDirectionEnum.RB]: {
              top: `${height - 20}px`,
              left: '-16px',
            },
            [NodeDirectionEnum.LT]: {
              top: '16px',
              left: `${width}px`,
            },
            [NodeDirectionEnum.LC]: {
              top: `${height / 2 - 4}px`,
              left: `${width}px`,
            },
            [NodeDirectionEnum.LB]: {
              top: `${height - 20}px`,
              left: `${width}px`,
            },
            [NodeDirectionEnum.TL]: {
              top: `${height}px`,
              left: '16px',
            },
            [NodeDirectionEnum.TC]: {
              top: `${height}px`,
              left: `${width / 2 - 4}px`,
            },
            [NodeDirectionEnum.TR]: {
              top: `${height}px`,
              left: `${width - 20}px`,
            },
            [NodeDirectionEnum.BL]: {
              top: `${-16}px`,
              left: '16px',
            },
            [NodeDirectionEnum.BC]: {
              top: `${-16}px`,
              left: `${width / 2 - 4}px`,
            },
            [NodeDirectionEnum.BR]: {
              top: `${-16}px`,
              left: `${width - 20}px`,
            },
          });
          // setGroupCss(arrow.container, {
          //   ...position,
          // })
          return {
            ...position,
          }
        },
        locationTag(node) {
          const { direction, height, width } = node;
          let position = {};
          const tagHeight = 20;
          if (node.noArrow) {
            position = {
              top: '12px',
              left: '12px',
            };
          } else {
            position = setPosition(direction, {
              [NodeDirectionEnum.RT]: {
                top: '10px',
                left: '-16px',
              },
              [NodeDirectionEnum.RC]: {
                top: `${height / 2 - tagHeight / 2}px`,
                left: '-16px',
              },
              [NodeDirectionEnum.RB]: {
                top: `${height - 26}px`,
                left: '-16px',
              },
              [NodeDirectionEnum.LT]: {
                top: '10px',
                left: `${width + 14}px`,
              },
              [NodeDirectionEnum.LC]: {
                top: `${height / 2 - tagHeight / 2}px`,
                left: `${width + 14}px`,
              },
              [NodeDirectionEnum.LB]: {
                top: `${height - 26}px`,
                left: `${width + 14}px`,
              },
              [NodeDirectionEnum.TL]: {
                top: `${height - 20}px`,
                left: '-12px',
              },
              [NodeDirectionEnum.TC]: {
                top: `${height - 20}px`,
                left: `${width / 2 - 30}px`,
              },
              [NodeDirectionEnum.TR]: {
                top: `${height - 20}px`,
                left: `${width + 14}px`,
              },
              [NodeDirectionEnum.BL]: {
                top: `${1}px`,
                left: '-12px',
              },
              [NodeDirectionEnum.BC]: {
                top: `${1}px`,
                left: `${width / 2 - 30}px`,
              },
              [NodeDirectionEnum.BR]: {
                top: `${1}px`,
                left: `${width + 14}px`,
              },
            });
          }
          return {
            ...position,
          }
        },
        locationCircle(node) {
          const { direction, width, height, noArrow } = node;
          let position = {};
          if (noArrow) {
            position = {
              top: '12px',
              left: '12px',
            };
          } else {
            position = setPosition(direction, {
              [NodeDirectionEnum.RT]: {
                top: '16px',
                left: '12px',
              },
              [NodeDirectionEnum.RC]: {
                top: `${height / 2 - 3}px`,
                left: '12px',
              },
              [NodeDirectionEnum.RB]: {
                top: `${height - 20}px`,
                left: '12px',
              },
              [NodeDirectionEnum.LT]: {
                top: '17px',
                left: `${width - 20}px`,
              },
              [NodeDirectionEnum.LC]: {
                top: `${height / 2 - 3}px`,
                left: `${width - 20}px`,
              },
              [NodeDirectionEnum.LB]: {
                top: `${height - 19}px`,
                left: `${width - 20}px`,
              },
              [NodeDirectionEnum.TL]: {
                top: `${height - 14}px`,
                left: '16px',
              },
              [NodeDirectionEnum.TC]: {
                top: `${height - 14}px`,
                left: `${width / 2 - 3}px`,
              },
              [NodeDirectionEnum.TR]: {
                top: `${height - 14}px`,
                left: `${width - 19}px`,
              },
              [NodeDirectionEnum.BL]: {
                top: `${8}px`,
                left: '17px',
              },
              [NodeDirectionEnum.BC]: {
                top: `${8}px`,
                left: `${width / 2 - 3}px`,
              },
              [NodeDirectionEnum.BR]: {
                top: `${8}px`,
                left: `${width - 19}px`,
              },
            });
          }
          return {
            position: 'absolute',
            ...position,
          }
        },
        handleChangeStatus(node) {
          if (node.editUrl) return
          if (node.status === DocNodeStatus.SHRINK) {
            node.status = DocNodeStatus.UNFOLD;
            EasyDocFactory.handleRender.docStatusIns.setDocStatus(node, DocNodeStatus.UNFOLD);
          } else {
            node.status = DocNodeStatus.SHRINK;
            EasyDocFactory.handleRender.docStatusIns.setDocStatus(node, DocNodeStatus.SHRINK);
          }
        },
      },
    };

    var NodesRenderBase = (function () {
        function NodesRenderBase(type, nodes) {
            this.type = type;
            this.nodes = nodes;
            this.renderId = NodesRenderBase.mark();
            this.container = this.createContainer();
        }
        NodesRenderBase.mark = function () {
            return Date.now();
        };
        NodesRenderBase.prototype.poolRenderNodes = function () {
            var nodes = this.nodes;
            this.container.appendChild(createVueView(Doc, {
                nodes: nodes,
                renderModalClassName: HandleConfig.__renderModalClassName,
            }));
            document.body.appendChild(this.container);
        };
        NodesRenderBase.prototype.getContainerId = function () {
            return this.type + String(this.renderId);
        };
        NodesRenderBase.prototype.render = function () {
            this.poolRenderNodes();
        };
        NodesRenderBase.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.id = this.getContainerId();
            return container;
        };
        NodesRenderBase.prototype.destroyDom = function () {
            var _a;
            (_a = this.container.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.container);
        };
        return NodesRenderBase;
    }());

    var DocRender = (function (_super) {
        __extends(DocRender, _super);
        function DocRender(type, nodes) {
            var _this = _super.call(this, type, nodes) || this;
            _this.render();
            return _this;
        }
        DocRender.prototype.destroy = function () {
            this.destroyDom();
        };
        return DocRender;
    }(NodesRenderBase));

    var EditRender = (function (_super) {
        __extends(EditRender, _super);
        function EditRender(type, nodes) {
            var _this = _super.call(this, type, nodes) || this;
            _this.render();
            return _this;
        }
        EditRender.prototype.destroy = function () {
            this.destroyDom();
        };
        return EditRender;
    }(NodesRenderBase));

    var ManualRender = (function () {
        function ManualRender(type, nodes, stepIdx) {
            this.initModel(nodes[0], stepIdx);
            this.docRender = new DocRender(NodeTypeEnum.DOC, this.steps[stepIdx].nodes);
        }
        ManualRender.prototype.initModel = function (node, stepIdx) {
            this.steps = node.steps;
            this.stepIdx = stepIdx;
        };
        ManualRender.prototype.reRenderDoc = function (node, currentStepIdx) {
            if (currentStepIdx !== undefined) {
                this.initModel(node, currentStepIdx);
            }
            else {
                this.initModel(node, this.stepIdx);
            }
            this.docRender.destroy();
            if (this.stepIdx === -1)
                return;
            this.docRender = new DocRender(NodeTypeEnum.DOC, this.steps[this.stepIdx].nodes);
        };
        ManualRender.prototype.destroy = function () {
            this.docRender.destroy();
            EasyDocFactory.handleData.destroyScrollEvent();
        };
        return ManualRender;
    }());

    var Masker = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"easydoc-mask"},[_c('div',{staticClass:"easydoc-mask__up",style:(_vm.style.up)}),_vm._v(" "),_c('div',{staticClass:"easydoc-mask__down",style:(_vm.style.down)}),_vm._v(" "),_c('div',{staticClass:"easydoc-mask__left",style:(_vm.style.left)}),_vm._v(" "),_c('div',{staticClass:"easydoc-mask__right",style:(_vm.style.right)})])},
    staticRenderFns: [],
      name: 'Masker',
      props: {
        node: Object,
      },
      computed: {
        style() {
          const { zIndex, domLocation } = this.node;
          const maxHeight =
            Math.max(document.body.scrollHeight, window.screen.height) - domLocation.y - domLocation.height - 3;
          const maxWidth = Math.max(document.body.scrollWidth, window.screen.width) - domLocation.x - domLocation.width - 3;
          return {
            up: {
              zIndex,
              height: `${domLocation.y - 3}px`,
            },
            down: {
              zIndex,
              height: `${maxHeight}px`,
              top: `${domLocation.y + domLocation.height + 3}px`,
            },
            left: {
              zIndex,
              height: `${domLocation.height + 6}px`,
              width: `${domLocation.x - 3}px`,
              top: `${domLocation.y - 3}px`,
            },
            right: {
              zIndex,
              height: `${domLocation.height + 6}px`,
              top: `${domLocation.y - 3}px`,
              width: `${maxWidth}px`,
              left: `${domLocation.x + domLocation.width + 3}px`,
            },
          }
        },
      },
    };

    var ErrorBlock = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"easydoc-error"},[_vm._v(_vm._s(_vm.value))])},
    staticRenderFns: [],
      name: 'ErrorBlock',
      props: {
        value: String,
      },
      mounted() {
        setTimeout(() => {
          this.$emit('input', '');
        }, 3000);
      },
    };

    var Guide = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"easydoc-guide"},[(_vm.showGuideMask)?_c('Masker',{attrs:{"node":_vm.node}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"easydoc-guide__target",style:(_vm.locationStyle)},[_c('div',{staticClass:"easydoc-dialog"},[_c('div',{class:['easydoc-dialog__desc', 'easydoc-dialog__desc--guide', _vm.renderModalClassName],domProps:{"innerHTML":_vm._s(_vm.node.description)}})]),_vm._v(" "),(!_vm.noArrow)?_c('arrow',{style:(_vm.arrowStyle),attrs:{"direction":_vm.node.direction}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"easydoc-guide__action"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPre),expression:"showPre"}],staticClass:"easydoc-guide__pre",on:{"click":_vm.handlePre}},[_vm._v("上一步")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showEnd),expression:"showEnd"}],staticClass:"easydoc-guide__end",on:{"click":_vm.handleEnd}},[_vm._v("结束引导")]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showNext),expression:"showNext"}],staticClass:"easydoc-guide__next",on:{"click":_vm.handleNext}},[_vm._v("下一步")]),_vm._v(" "),_c('div',{staticClass:"easydoc-guide__close",on:{"click":_vm.handleEnd}},[_vm._v("跳过")])]),_vm._v(" "),(_vm.message)?_c('error-block',{model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v;},expression:"message"}}):_vm._e()],1)],1)},
    staticRenderFns: [],
      name: 'Guide',
      components: {
        Masker,
        Arrow,
        ErrorBlock,
      },
      data() {
        return {
          locationStyle: {},
          arrowStyle: {},
          message: '',
        }
      },
      computed: {
        noArrow() {
          return this.node.direction === NodeDirectionEnum.DEFAULT || this.node.direction === NodeDirectionEnum.CENTER
        },
        showPre() {
          return this.stepIdx !== 0 && this.stepConfig.prev !== false
        },
        showEnd() {
          return this.stepConfig.next !== false && this.stepIdx === this.stepsLength - 1
        },
        showNext() {
          return this.stepConfig.next !== false && this.stepIdx !== this.stepsLength - 1
        },
      },
      created() {
        this.initNode();
      },
      methods: {
        initNode() {
          this.locationStyle = setDomLocation(this.node);
          this.arrowStyle = this.locationArrow(this.node);
        },
        locationArrow(node) {
          const { direction, height, width } = node;
          // 设置各个方向的位置
          const position = setPosition(direction, {
            [NodeDirectionEnum.RT]: {
              top: '16px',
              left: '-16px',
            },
            [NodeDirectionEnum.RC]: {
              top: `${height / 2 - 4}px`,
              left: '-16px',
            },
            [NodeDirectionEnum.RB]: {
              top: `${height - 20}px`,
              left: '-16px',
            },
            [NodeDirectionEnum.LT]: {
              top: '16px',
              left: `${width}px`,
            },
            [NodeDirectionEnum.LC]: {
              top: `${height / 2 - 4}px`,
              left: `${width}px`,
            },
            [NodeDirectionEnum.LB]: {
              top: `${height - 20}px`,
              left: `${width}px`,
            },
            [NodeDirectionEnum.TL]: {
              top: `${height}px`,
              left: '16px',
            },
            [NodeDirectionEnum.TC]: {
              top: `${height}px`,
              left: `${width / 2 - 4}px`,
            },
            [NodeDirectionEnum.TR]: {
              top: `${height}px`,
              left: `${width - 20}px`,
            },
            [NodeDirectionEnum.BL]: {
              top: `${-16}px`,
              left: '16px',
            },
            [NodeDirectionEnum.BC]: {
              top: `${-16}px`,
              left: `${width / 2 - 4}px`,
            },
            [NodeDirectionEnum.BR]: {
              top: `${-16}px`,
              left: `${width - 20}px`,
            },
          });
          // setGroupCss(arrow.container, {
          //   ...position,
          // })
          return {
            ...position,
          }
        },
        async handlePre() {
          try {
            await this.guideIns.goPre();
          } catch (e) {
            console.log(e.message);
          }
        },
        handleEnd() {
          this.guideIns.destroy();
        },
        async handleNext() {
          try {
            await this.guideIns.goNext();
          } catch (e) {
            this.message = e.message;
          }
        },
      },
    };

    var GuideRender = (function () {
        function GuideRender(type, nodes, stepIdx) {
            writeCurrentStepCache(stepIdx);
            this.initModel(nodes[0], stepIdx);
            this.guideContainer = document.createElement('div');
            this.renderStep();
        }
        GuideRender.prototype.initModel = function (node, stepIdx) {
            this.steps = node.steps;
            this.stepIdx = stepIdx;
        };
        GuideRender.prototype.getCurrentStep = function () {
            var _a = this, stepIdx = _a.stepIdx, steps = _a.steps;
            var _b = steps[stepIdx], node = _b.node, prev = _b.prev, next = _b.next;
            var MIN_ZINDEX = 999;
            if (node.zIndex < MIN_ZINDEX)
                node.zIndex = MIN_ZINDEX;
            return { node: node, prev: prev, next: next };
        };
        GuideRender.prototype.renderStep = function () {
            var _a = this, stepIdx = _a.stepIdx, steps = _a.steps;
            var _b = this.getCurrentStep(), node = _b.node, option = __rest(_b, ["node"]);
            this.guideContainer = createVueView(Guide, {
                node: node,
                stepIdx: stepIdx,
                stepConfig: option,
                stepsLength: steps.length,
                showGuideMask: EasyDocFactory.showGuideMask,
                renderModalClassName: HandleConfig.__renderModalClassName,
                guideIns: this,
            });
            document.body.appendChild(this.guideContainer);
        };
        GuideRender.prototype.goNext = function () {
            return __awaiter(this, void 0, void 0, function () {
                var stepIdx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stepIdx = this.stepIdx + 1;
                            return [4, GuideRender.dump(stepIdx)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        GuideRender.prototype.goPre = function () {
            return __awaiter(this, void 0, void 0, function () {
                var stepIdx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stepIdx = this.stepIdx - 1;
                            return [4, GuideRender.dump(stepIdx)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        GuideRender.dump = function (stepIdx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, EasyDocFactory.handleData.guideChangeStep(stepIdx)];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        GuideRender.prototype.emptyError = function () {
            console.log('error');
        };
        GuideRender.prototype.destroy = function () {
            var _a;
            (_a = this.guideContainer.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.guideContainer);
            EasyDocFactory.handleData.destroyScrollEvent();
        };
        return GuideRender;
    }());

    var Page = {
    render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"easydoc-page"},[_c('div',{staticClass:"easydoc-page__mask",on:{"click":_vm.handleClose}}),_vm._v(" "),_c('div',{staticClass:"easydoc-page__container"},[_c('div',{staticClass:"easydoc-page__tab"},_vm._l((_vm.nodes),function(node,index){return _c('div',{key:node.renderId,class:['easydoc-page__block', index === _vm.activeIndex && 'active'],on:{"click":function($event){return _vm.handleChangeIndex(index)}}},[_vm._v("\n        "+_vm._s(node.name)+"\n      ")])}),0),_vm._v(" "),_c('div',{class:['easydoc-page__content', _vm.renderModalClassName]},[_c('div',{staticClass:"easydoc-page__close",on:{"click":_vm.handleClose}},[_c('svg',{staticClass:"icon",attrs:{"aria-hidden":""}},[_c('use',{attrs:{"xlink:href":"#easy-doc_close"}})])]),_vm._v(" "),_c('div',{staticClass:"easydoc-page__text",domProps:{"innerHTML":_vm._s(_vm.nodes[_vm.activeIndex].description)}})])])])},
    staticRenderFns: [],
      name: 'Page',
      data() {
        return {
          activeIndex: 0,
        }
      },
      methods: {
        handleChangeIndex(index) {
          this.activeIndex = index;
        },
        handleClose() {
          EasyDocFactory.handleRenderUIPanel.HandleUIService.destroyLastRender();
        },
      },
    };

    var PageRender = (function (_super) {
        __extends(PageRender, _super);
        function PageRender(type, nodes) {
            var _this = _super.call(this, type, nodes) || this;
            _this.renderPage();
            return _this;
        }
        PageRender.prototype.renderPage = function () {
            this.container.appendChild(createVueView(Page, {
                nodes: this.nodes,
                renderModalClassName: HandleConfig.__renderModalClassName,
            }));
            document.body.appendChild(this.container);
        };
        PageRender.prototype.destroy = function () {
            this.destroyDom();
        };
        return PageRender;
    }(NodesRenderBase));

    var renderNodesMap = new Map([
        [NodeTypeEnum.PAGE, function (nodes) { return new PageRender(NodeTypeEnum.PAGE, nodes); }],
        [NodeTypeEnum.DOC, function (nodes) { return new DocRender(NodeTypeEnum.DOC, nodes); }],
        [NodeTypeEnum.EDIT, function (nodes) { return new EditRender(NodeTypeEnum.EDIT, nodes); }],
        [
            NodeTypeEnum.MANUAL,
            function (nodes, stepIdx) {
                return new ManualRender(NodeTypeEnum.MANUAL, nodes, stepIdx);
            },
        ],
        [
            NodeTypeEnum.GUIDE,
            function (nodes, stepIdx) { return new GuideRender(NodeTypeEnum.GUIDE, nodes, stepIdx); },
        ],
        [NodeTypeEnum.PROJECT, function (nodes) { return new PageRender(NodeTypeEnum.PROJECT, nodes); }],
    ]);
    var RenderService = (function () {
        function RenderService(type, nodes, stepIdx) {
            this.nodesRenderIns = renderNodesMap.get(type)(nodes, stepIdx);
        }
        RenderService.prototype.destroy = function () {
            this.nodesRenderIns.destroy();
        };
        RenderService.prototype.manualRepainDoc = function (node) {
            var manualRenderIns = this.nodesRenderIns;
            manualRenderIns.reRenderDoc(node);
        };
        RenderService.prototype.notifyGuideEmpty = function () {
            var guideRenderIns = this.nodesRenderIns;
            guideRenderIns.emptyError();
        };
        return RenderService;
    }());

    var DocStatus = (function () {
        function DocStatus() {
            this.docStatusMap = new Map();
        }
        DocStatus.prototype.getKey = function (node) {
            return node.docId + node.renderId;
        };
        DocStatus.prototype.setDocStatus = function (node, status) {
            this.docStatusMap.set(this.getKey(node), status);
        };
        DocStatus.prototype.getDocStatus = function (node) {
            return this.docStatusMap.get(this.getKey(node));
        };
        return DocStatus;
    }());

    var HandleRenderController = (function () {
        function HandleRenderController() {
            this.type = null;
            this.nodes = [];
            this.renderServiceIns = null;
            this.docStatusIns = new DocStatus();
        }
        HandleRenderController.prototype.render = function (type, nodes) {
            if (!type) {
                throw new Error('缺少type参数');
            }
            if (!nodes) {
                throw new Error('缺少nodes参数');
            }
            this.destroy();
            this.type = type;
            this.nodes = nodes;
            this.renderServiceIns = new RenderService(this.type, this.nodes);
        };
        HandleRenderController.prototype.renderManual = function (renderManualNode, stepIdx, scrollRepaint) {
            if (!renderManualNode) {
                throw new Error('缺少renderManualNode参数');
            }
            if (stepIdx === undefined) {
                throw new Error('缺少stepIdx参数');
            }
            if (!scrollRepaint) {
                this.destroy();
                this.type = NodeTypeEnum.MANUAL;
                this.nodes = [renderManualNode];
                this.renderServiceIns = new RenderService(this.type, this.nodes, stepIdx);
            }
            else {
                this.nodes = [renderManualNode];
                var renderServceIns = this.renderServiceIns;
                renderServceIns.manualRepainDoc(renderManualNode);
            }
        };
        HandleRenderController.prototype.renderGuide = function (renderGuideNode, stepIdx) {
            if (!renderGuideNode) {
                throw new Error('缺少renderGuideNode参数');
            }
            if (stepIdx === undefined) {
                throw new Error('缺少stepIdx参数');
            }
            this.destroy();
            this.type = NodeTypeEnum.GUIDE;
            this.nodes = [renderGuideNode];
            this.renderServiceIns = new RenderService(this.type, this.nodes, stepIdx);
        };
        HandleRenderController.prototype.notifyGuideEmpty = function () {
            if (this.renderServiceIns) {
                var renderServiceIns = this.renderServiceIns;
                renderServiceIns.notifyGuideEmpty();
            }
            else {
                console.error('用户引导当前步骤找不到节点');
            }
        };
        HandleRenderController.prototype.destroy = function () {
            var _a;
            (_a = this.renderServiceIns) === null || _a === void 0 ? void 0 : _a.destroy();
        };
        return HandleRenderController;
    }());

    var name = "we-easydoc";
    var version = "2.2.0";
    var description = "项目文档系统";
    var author = "李运通、杨毅臻、胡宁、焦传锴、权明扬、黄丹丹";
    var scripts = {
    	lint: "tslint --project tsconfig.json -t codeFrame 'src/**/*.ts' 'test/**/*.ts'",
    	test: "jest",
    	"test:watch": "jest --coverage --watch --env=jsdom",
    	"test:prod": "npm run lint && npm run test -- --no-cache",
    	dev: "set NODE_ENV=development && rollup -c rollup.config.ts -w",
    	start: "rollup -c rollup.config.ts -w",
    	build: "set NODE_ENV=production && rollup -c rollup.config.ts",
    	"build:window": "tsc --module commonjs && rollup -c",
    	"build:tsType": "tsc -p ./tsconfig.type.json",
    	prepack: "npm run build",
    	beta: "npm publish --tag=beta",
    	publish: "npm run build && npm publish"
    };
    var repository = {
    	url: "https://github.com/wefront/we-easydoc.git",
    	type: "git"
    };
    var main = "lib/index.js";
    var keywords = [
    	"EasyDoc",
    	"document"
    ];
    var files = [
    	"lib/",
    	"types/",
    	"examples/",
    	"package.json",
    	"README.md"
    ];
    var module = "lib/index.js";
    var command = "lib/index.cjs.js";
    var umd = "lib/index.umd.js";
    var license = "MIT";
    var devDependencies = {
    	"@rollup/plugin-image": "^2.0.5",
    	"@rollup/plugin-json": "^4.1.0",
    	"@testing-library/jest-dom": "^5.11.5",
    	"@types/jest": "^27.0.2",
    	"@vue/babel-preset-app": "^4.5.15",
    	"@vue/test-utils": "^1.2.2",
    	"babel-core": "^7.0.0-bridge.0",
    	i: "^0.3.7",
    	"identity-obj-proxy": "^3.0.0",
    	jest: "^26.2.5",
    	"jest-svg-transformer": "^1.0.0",
    	"jest-transform-stub": "^2.0.0",
    	less: "^3.12.2",
    	npm: "^8.1.1",
    	rollup: "^1.32.1",
    	"rollup-plugin-babel": "^4.4.0",
    	"rollup-plugin-commonjs": "^10.1.0",
    	"rollup-plugin-node-resolve": "^5.2.0",
    	"rollup-plugin-replace": "^2.2.0",
    	"rollup-plugin-sourcemaps": "^0.5.0",
    	"rollup-plugin-styles": "^3.11.0",
    	"rollup-plugin-terser": "^7.0.2",
    	"rollup-plugin-ts-vue": "^0.5.0",
    	"rollup-plugin-typescript2": "^0.30.0",
    	"rollup-plugin-vue2": "^0.8.1",
    	"ts-jest": "^26.0.5",
    	"ts-node": "^10.3.0",
    	"vue-jest": "^4.0.1"
    };
    var engines = {
    	node: ">= 6.0.0",
    	npm: ">= 3.0.0"
    };
    var browserslist = [
    	"> 1%",
    	"last 2 versions",
    	"not ie <= 8"
    ];
    var dependencies = {
    	axios: "^0.23.0",
    	tslib: "^2.0.3",
    	vue: "^2.6.14"
    };
    var pkg = {
    	name: name,
    	version: version,
    	description: description,
    	author: author,
    	scripts: scripts,
    	repository: repository,
    	main: main,
    	keywords: keywords,
    	files: files,
    	module: module,
    	command: command,
    	umd: umd,
    	license: license,
    	devDependencies: devDependencies,
    	engines: engines,
    	browserslist: browserslist,
    	dependencies: dependencies
    };

    var LoadConfig = {
        urlPrefix: '',
        easyDocPath: '/easy-doc/EasyDoc.json',
        easyManualsPath: '/easy-doc/Manuals.json',
        easyProjectsPath: '/easy-doc/Projects.json',
        showGuideMask: false,
        ignorePaths: [],
        hasEasyDocJSON: true,
        hasManualsJSON: true,
        hasProjectsJSON: true,
    };

    function environmentFn() {
        return AuthEnum.DEVELOPMENT;
    }

    var EasyDocFactory = (function () {
        function EasyDocFactory() {
        }
        EasyDocFactory.init = function (opt) {
            var _this = this;
            if (opt === void 0) { opt = {}; }
            EasyDocFactory.computedEnv(opt.env);
            if (opt.easyDocPath) {
                EasyDocFactory.easyDocPath = opt.easyDocPath;
            }
            if (opt.easyManualsPath) {
                EasyDocFactory.easyManualsPath = opt.easyManualsPath;
            }
            if (opt.easyProjectsPath) {
                EasyDocFactory.easyProjectsPath = opt.easyProjectsPath;
            }
            if (opt.hasEasyDocJSON !== undefined) {
                EasyDocFactory.hasEasyDocJSON = opt.hasEasyDocJSON;
            }
            if (opt.hasManualsJSON !== undefined) {
                EasyDocFactory.hasManualsJSON = opt.hasManualsJSON;
            }
            if (opt.hasProjectsJSON !== undefined) {
                EasyDocFactory.hasProjectsJSON = opt.hasProjectsJSON;
            }
            if (opt.urlPrefix) {
                EasyDocFactory.urlPrefix = opt.urlPrefix;
            }
            if (opt.showGuideMask !== undefined) {
                EasyDocFactory.showGuideMask = opt.showGuideMask;
            }
            if (opt.ignorePaths) {
                EasyDocFactory.ignorePaths = opt.ignorePaths;
            }
            if (opt.mountPanel !== false) {
                EasyDocFactory.handleRenderUIPanel.renderGuide();
                setTimeout(function () {
                    if (!localStorage.getItem('_easydoc_project_over')) {
                        localStorage.setItem('_easydoc_project_over', '_easydoc_project_over');
                        var projectList = readCache('projects');
                        _this.handleData.getBaseRenderNode(NodeTypeEnum.PROJECT, projectList);
                    }
                }, 3000);
                document.body.addEventListener('click', function (e) {
                    var elem = e.target;
                    if (elem.tagName === 'A' && hrefAIsClassChild(elem, 'easydoc-')) {
                        if (EasyDocFactory.urlPrefix && elem.origin === window.location.origin) {
                            elem.href = window.location.origin + EasyDocFactory.urlPrefix + elem.pathname;
                        }
                    }
                });
            }
        };
        EasyDocFactory.computedEnv = function (environment) {
            if (environment === undefined) {
                EasyDocFactory.env = AuthEnum.DEVELOPMENT;
            }
            else if (typeof environment === 'function') {
                var env = environment();
                if (AuthEnum[env]) {
                    EasyDocFactory.env = env;
                }
                else if (env === 'pro') {
                    EasyDocFactory.env = AuthEnum.PRODUCTION;
                }
                else if (env === 'dev') {
                    EasyDocFactory.env = AuthEnum.DEVELOPMENT;
                }
                else if (env === 'test') {
                    EasyDocFactory.env = AuthEnum.TEST;
                }
                else {
                    EasyDocFactory.env = environmentFn();
                }
            }
            else if (typeof environment === 'string') {
                switch (environment) {
                    case 'dev':
                    case AuthEnum.DEVELOPMENT:
                        EasyDocFactory.env = AuthEnum.DEVELOPMENT;
                        break;
                    case 'test':
                    case AuthEnum.TEST:
                        EasyDocFactory.env = AuthEnum.TEST;
                        break;
                    case 'pro':
                    case AuthEnum.PRODUCTION:
                        EasyDocFactory.env = AuthEnum.PRODUCTION;
                        break;
                    default:
                        EasyDocFactory.env = environmentFn();
                }
            }
            else {
                EasyDocFactory.env = environmentFn();
            }
        };
        EasyDocFactory.initGuide = function (guide) {
            writeCurrentGuideCache(guide);
        };
        EasyDocFactory.startGuide = function () {
            writeNodeTypeCache(NodeTypeEnum.GUIDE);
            setTimeout(function () {
                EasyDocFactory.jumpGuideStep(1);
            }, 0);
        };
        EasyDocFactory.jumpGuideStep = function (stepIdx, guideStep) {
            if (!stepIdx) {
                console.warn('请传入用户引导参数stepIdx');
                return;
            }
            stepIdx--;
            var currentGuide = readCache('currentGuide');
            if (currentGuide && guideStep) {
                currentGuide.steps[stepIdx] = guideStep;
                writeCurrentGuideCache(currentGuide);
            }
            if (currentGuide) {
                writeCurrentStepCache(stepIdx);
                setTimeout(function () {
                    writeNodeTypeCache(NodeTypeEnum.GUIDE);
                    EasyDocFactory.handleData.getRenderGuideNode(currentGuide, stepIdx);
                }, 500);
            }
            else {
                console.warn('用户引导跳转失败');
            }
        };
        EasyDocFactory.closeGuide = function () {
            writeCurrentGuideCache();
            writeNodeTypeCache();
            EasyDocFactory.handleData.destroyScrollEvent();
            EasyDocFactory.handleRender.destroy();
        };
        EasyDocFactory.jumpManualStep = function (stepIdx, manualName, timeout) {
            if (timeout === void 0) { timeout = 1000; }
            setTimeout(function () {
                if (!stepIdx) {
                    console.warn('请传入操作手册跳转参数stepIdx');
                    return;
                }
                stepIdx--;
                var currentManual = readCache('currentManual');
                var manuals = readCache('manuals');
                var appointManual = manuals.filter(function (manual) { return manual.name === manualName; })[0];
                if (manualName && currentManual.name !== manualName && appointManual) {
                    writeCurrentManualCache(appointManual);
                    currentManual = appointManual;
                }
                if (currentManual && stepIdx < currentManual.steps.length) {
                    writeCurrentStepCache(stepIdx);
                    EasyDocFactory.handleData.getRenderManualNode(currentManual, stepIdx);
                }
                else {
                    console.warn('操作手册跳转失败');
                }
            }, timeout);
        };
        EasyDocFactory.limitManualJumpStep = function (stepIdx, limitManualName, timeout) {
            if (timeout === void 0) { timeout = 1000; }
            setTimeout(function () {
                if (!stepIdx) {
                    console.warn('请传入操作手册跳转参数stepIdx');
                    return;
                }
                if (!limitManualName) {
                    console.warn('请传入操作手册跳转参数manualName');
                    return;
                }
                stepIdx--;
                var currentManual = readCache('currentManual');
                if (!currentManual || currentManual.name !== limitManualName) {
                    console.warn('当前操作手册名称与指定名称manualName不一致');
                    return;
                }
                if (stepIdx < currentManual.steps.length) {
                    writeCurrentStepCache(stepIdx);
                    EasyDocFactory.handleData.getRenderManualNode(currentManual, stepIdx);
                }
                else {
                    console.warn('操作手册跳转失败');
                }
            }, timeout);
        };
        EasyDocFactory.manualNextStep = function () {
            var currentStep = readCache('currentStep');
            EasyDocFactory.jumpManualStep(currentStep + 2);
        };
        EasyDocFactory.__version__ = pkg.version;
        EasyDocFactory.easyDocPath = LoadConfig.easyDocPath;
        EasyDocFactory.easyManualsPath = LoadConfig.easyManualsPath;
        EasyDocFactory.easyProjectsPath = LoadConfig.easyProjectsPath;
        EasyDocFactory.hasEasyDocJSON = LoadConfig.hasEasyDocJSON;
        EasyDocFactory.hasManualsJSON = LoadConfig.hasManualsJSON;
        EasyDocFactory.hasProjectsJSON = LoadConfig.hasProjectsJSON;
        EasyDocFactory.urlPrefix = LoadConfig.urlPrefix;
        EasyDocFactory.showGuideMask = LoadConfig.showGuideMask;
        EasyDocFactory.ignorePaths = LoadConfig.ignorePaths;
        EasyDocFactory.minHeight = HandleConfig.minHeight;
        EasyDocFactory.minWidth = HandleConfig.minWidth;
        EasyDocFactory.maxHeight = HandleConfig.maxHeight;
        EasyDocFactory.maxWidth = HandleConfig.maxWidth;
        EasyDocFactory.editHeight = HandleConfig.editHeight;
        EasyDocFactory.editWidth = HandleConfig.editWidth;
        EasyDocFactory.windowInterval = HandleConfig.__windowInterval;
        EasyDocFactory.handleRenderUIPanel = new HandleUIController();
        EasyDocFactory.handleLoadData = new HandleLoadDataController();
        EasyDocFactory.handleData = new HandleDataController();
        EasyDocFactory.handleRender = new HandleRenderController();
        return EasyDocFactory;
    }());

    !function(t){var e,a,l,o,c,d,s='<svg><symbol id="easy-doc_set" viewBox="0 0 1024 1024"><path d="M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z"  ></path></symbol><symbol id="easy-doc_unlock1" viewBox="0 0 1024 1024"><path d="M785.066667 416H381.866667v-121.6c0-74.666667 61.866667-134.4 138.666666-134.4 59.733333 0 113.066667 36.266667 132.266667 91.733333 6.4 17.066667 23.466667 25.6 40.533333 19.2 17.066667-6.4 25.6-23.466667 19.2-40.533333-27.733333-81.066667-104.533333-134.4-192-134.4-110.933333 0-202.666667 89.6-202.666666 198.4v121.6h-78.933334c-55.466667 0-100.266667 44.8-100.266666 100.266667v311.466666c0 55.466667 44.8 100.266667 100.266666 100.266667h546.133334c55.466667 0 100.266667-44.8 100.266666-100.266667V516.266667c0-55.466667-44.8-100.266667-100.266666-100.266667z m36.266666 411.733333c0 19.2-17.066667 36.266667-36.266666 36.266667H238.933333c-19.2 0-36.266667-17.066667-36.266666-36.266667V516.266667c0-19.2 17.066667-36.266667 36.266666-36.266667h546.133334c19.2 0 36.266667 17.066667 36.266666 36.266667v311.466666z"  ></path><path d="M512 544c-17.066667 0-32 14.933333-32 32v106.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-106.666667c0-17.066667-14.933333-32-32-32z"  ></path></symbol><symbol id="easy-doc_lock" viewBox="0 0 1024 1024"><path d="M785.066667 416h-61.866667v-121.6c0-108.8-91.733333-198.4-202.666667-198.4s-202.666667 89.6-202.666666 198.4v121.6h-78.933334c-55.466667 0-100.266667 44.8-100.266666 100.266667v311.466666c0 55.466667 44.8 100.266667 100.266666 100.266667h546.133334c55.466667 0 100.266667-44.8 100.266666-100.266667V516.266667c0-55.466667-44.8-100.266667-100.266666-100.266667z m-403.2-121.6c0-74.666667 61.866667-134.4 138.666666-134.4s138.666667 59.733333 138.666667 134.4v121.6h-277.333333v-121.6z m439.466666 533.333333c0 19.2-17.066667 36.266667-36.266666 36.266667H238.933333c-19.2 0-36.266667-17.066667-36.266666-36.266667V516.266667c0-19.2 17.066667-36.266667 36.266666-36.266667h546.133334c19.2 0 36.266667 17.066667 36.266666 36.266667v311.466666z"  ></path><path d="M512 544c-17.066667 0-32 14.933333-32 32v106.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-106.666667c0-17.066667-14.933333-32-32-32z"  ></path></symbol><symbol id="easy-doc_leftarrow" viewBox="0 0 1024 1024"><path d="M783.872 542.122667l-0.042667-64.405334-477.610666-0.298666 225.28-225.322667-45.568-45.568L182.506667 509.952l303.829333 303.829333 45.525333-45.504-226.474666-226.453333 478.506666 0.298667z"  ></path></symbol><symbol id="easy-doc_trust" viewBox="0 0 1024 1024"><path d="M546.581333 893.546667a64 64 0 0 1-90.496 0L109.12 546.56a64 64 0 0 1 0-90.496L334.570667 230.613333a64 64 0 0 1 90.496 0l76.245333 76.266667 76.288-76.266667a64 64 0 0 1 90.496 0L893.546667 456.106667a64 64 0 0 1 0 90.496L546.56 893.546667z m-166.762666-617.642667L154.389333 501.333333 501.333333 848.277333l21.034667-21.034666-76.245333-76.266667 45.248-45.248 76.266666 76.266667 23.786667-23.786667-76.266667-76.266667 45.269334-45.269333 76.245333 76.266667 27.648-27.648-76.245333-76.266667 45.248-45.248 76.266666 76.266667 17.173334-17.194667-100.565334-100.565333-3.349333 3.349333a120.298667 120.298667 0 0 1-170.112 0l-39.808-39.808a64 64 0 0 1 0-90.496l43.136-43.178667-76.245333-76.245333z m243.029333 0l-164.693333 164.672 39.829333 39.808a56.277333 56.277333 0 0 0 79.573333 0.042667l3.370667-3.413334 45.226667-45.290666 8.789333-8.789334 145.877333 145.856 67.456-67.456-225.429333-225.429333z"  ></path></symbol><symbol id="easy-doc_editor" viewBox="0 0 1024 1024"><path d="M694.037333 213.333333v64H234.666667v469.333334h512V512h64v234.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h459.370666z m136.746667 24.234667l45.098667 45.397333-343.722667 341.290667 0.128 0.128-46.592 1.578667 1.322667-47.274667 0.085333 0.106667 343.68-341.226667z"  ></path></symbol><symbol id="easy-doc_signboard" viewBox="0 0 1024 1024"><path d="M545.536 152.96a64 64 0 0 1 20.970667 20.949333L643.264 298.666667H789.333333c35.349333 0 64 31.146667 64 69.546666v394.24c0 38.4-28.650667 69.546667-64 69.546667H234.666667c-35.349333 0-64-31.146667-64-69.546667V368.213333C170.666667 329.813333 199.317333 298.666667 234.666667 298.666667h146.048l76.778666-124.757334a64 64 0 0 1 88.042667-20.970666zM789.333333 362.666667H234.666667v405.333333h554.666666V362.666667z m-149.333333 234.666666v64H277.333333v-64h362.666667z m106.666667-149.333333v64H277.333333v-64h469.333334zM512 207.445333L455.872 298.666667h112.256L512 207.445333z"  ></path></symbol><symbol id="easy-doc_template" viewBox="0 0 1024 1024"><path d="M277.333333 298.666667v490.666666h437.333334v64h-405.333334a96 96 0 0 1-95.893333-91.477333L213.333333 757.333333V298.666667h64z m472.789334-127.786667a64 64 0 0 1 64 64v451.242667a64 64 0 0 1-64 64H319.786667V234.88a64 64 0 0 1 64-64h366.336z m0 64H383.786667v451.242667h366.336V234.88zM640 298.666667v64h-192v-64h192z"  ></path></symbol><symbol id="easy-doc_tradealert" viewBox="0 0 1024 1024"><path d="M746.666667 149.333333a64 64 0 0 1 64 64v181.333334a64 64 0 0 1 64 64v49.664l-64 58.496v-87.573334l-239.104 197.376a95.978667 95.978667 0 0 1-117.632 3.050667l-3.84-2.986667-236.757334-192V800h372.330667l62.805333 64H213.333333a64 64 0 0 1-64-64v-341.333333a64 64 0 0 1 64-64V213.333333a64 64 0 0 1 64-64h469.333334z m126.869333 467.861334l44.928 45.610666-174.08 171.456-105.536-104.106666 44.970667-45.568 60.586666 59.818666 129.130667-127.210666zM746.666667 213.333333H277.333333v240.853334l213.184 172.906666a32 32 0 0 0 37.845334 1.984l2.56-1.92L746.666667 449.109333V213.333333z m-149.333334 192v64H362.666667v-64h234.666666z m64-128v64H362.666667v-64h298.666666z"  ></path></symbol><symbol id="easy-doc_Rightbutton" viewBox="0 0 1024 1024"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m-42.666667 104.085334L663.914667 512 469.333333 706.581333 424.085333 661.333333l149.333334-149.333333-149.333334-149.333333L469.333333 317.418667z"  ></path></symbol><symbol id="easy-doc_double-arro-right" viewBox="0 0 1024 1024"><path d="M533.333333 233.386667l278.613334 278.485333L533.333333 790.613333l-45.248-45.226666 233.386667-233.514667-233.386667-233.258667L533.333333 233.386667z m-234.666666 0l278.613333 278.485333L298.666667 790.613333l-45.248-45.226666 233.386666-233.514667-233.386666-233.258667L298.666667 233.386667z"  ></path></symbol><symbol id="easy-doc_double-arrow-left" viewBox="0 0 1024 1024"><path d="M724.053333 233.386667l45.226667 45.248-233.365333 233.258666 233.386666 233.493334-45.269333 45.226666-278.613333-278.741333 278.613333-278.485333z m-234.666666 0l45.226666 45.248-233.365333 233.258666 233.386667 233.493334-45.269334 45.226666L210.773333 511.893333l278.613334-278.485333z"  ></path></symbol><symbol id="easy-doc_close" viewBox="0 0 1045 1024"><path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"  ></path></symbol></svg>',i=(i=document.getElementsByTagName("script"))[i.length-1].getAttribute("data-injectcss");if(i&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");}catch(t){console&&console.log(t);}}function h(){c||(c=!0,l());}e=function(){var t,e,a,l;(l=document.createElement("div")).innerHTML=s,s=null,(a=l.getElementsByTagName("svg")[0])&&(a.setAttribute("aria-hidden","true"),a.style.position="absolute",a.style.width=0,a.style.height=0,a.style.overflow="hidden",t=a,(e=document.body).firstChild?(l=t,(a=e.firstChild).parentNode.insertBefore(l,a)):e.appendChild(t));},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(a=function(){document.removeEventListener("DOMContentLoaded",a,!1),e();},document.addEventListener("DOMContentLoaded",a,!1)):document.attachEvent&&(l=e,o=t.document,c=!1,(d=function(){try{o.documentElement.doScroll("left");}catch(t){return void setTimeout(d,50)}h();})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,h());});}(window);

    if (!window.process) {
        window.process = {
            env: {
                NODE_ENV: 'development'
            }
        };
    }
    var EasyDoc = (function () {
        function EasyDoc() {
        }
        EasyDoc.init = function (opt) {
            if (opt === void 0) { opt = {}; }
            EasyDocFactory.init(opt);
        };
        EasyDoc.initGuide = EasyDocFactory.initGuide;
        EasyDoc.startGuide = EasyDocFactory.startGuide;
        EasyDoc.jumpGuideStep = EasyDocFactory.jumpGuideStep;
        EasyDoc.closeGuide = EasyDocFactory.closeGuide;
        EasyDoc.jumpManualStep = EasyDocFactory.jumpManualStep;
        EasyDoc.limitManualJumpStep = EasyDocFactory.limitManualJumpStep;
        EasyDoc.manualNextStep = EasyDocFactory.manualNextStep;
        EasyDoc.urlPrefix = EasyDocFactory.urlPrefix;
        EasyDoc.hasEasyDocJSON = EasyDocFactory.hasEasyDocJSON;
        EasyDoc.hasManualsJSON = EasyDocFactory.hasManualsJSON;
        EasyDoc.hasProjectsJSON = EasyDocFactory.hasProjectsJSON;
        return EasyDoc;
    }());

    return EasyDoc;

})));
//# sourceMappingURL=index.umd.js.map
