(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[7073], {
    47865: function (__unused_webpack_module, exports, __webpack_require__) {
        var $jscomp = $jscomp || {};
        $jscomp.scope = {}, $jscomp.findInternal = function (e, o, t) {
            e instanceof String && (e = String(e));
            for (var r = e.length, n = 0; n < r; n++) {
                var i = e[n];
                if (o.call(t, i, n, e)) return {i: n, v: i}
            }
            return {i: -1, v: void 0}
        }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, o, t) {
            e != Array.prototype && e != Object.prototype && (e[o] = t.value)
        }, $jscomp.getGlobal = function (e) {
            return "undefined" != typeof window && window === e ? e : "undefined" != typeof __webpack_require__.g && null != __webpack_require__.g ? __webpack_require__.g : e
        }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (e, o, t, r) {
            if (o) {
                for (t = $jscomp.global, e = e.split("."), r = 0; r < e.length - 1; r++) {
                    var n = e[r];
                    n in t || (t[n] = {}), t = t[n]
                }
                (o = o(r = t[e = e[e.length - 1]])) != r && null != o && $jscomp.defineProperty(t, e, {
                    configurable: !0,
                    writable: !0,
                    value: o
                })
            }
        }, $jscomp.polyfill("Array.prototype.findIndex", (function (e) {
            return e || function (e, o) {
                return $jscomp.findInternal(this, e, o).i
            }
        }), "es6", "es3"), $jscomp.checkStringArgs = function (e, o, t) {
            if (null == e) throw new TypeError("The 'this' value for String.prototype." + t + " must not be null or undefined");
            if (o instanceof RegExp) throw new TypeError("First argument to String.prototype." + t + " must not be a regular expression");
            return e + ""
        }, $jscomp.polyfill("String.prototype.endsWith", (function (e) {
            return e || function (e, o) {
                var t = $jscomp.checkStringArgs(this, e, "endsWith");
                e += "", void 0 === o && (o = t.length), o = Math.max(0, Math.min(0 | o, t.length));
                for (var r = e.length; 0 < r && 0 < o;) if (t[--o] != e[--r]) return !1;
                return 0 >= r
            }
        }), "es6", "es3"), $jscomp.polyfill("Array.prototype.find", (function (e) {
            return e || function (e, o) {
                return $jscomp.findInternal(this, e, o).v
            }
        }), "es6", "es3"), $jscomp.polyfill("String.prototype.startsWith", (function (e) {
            return e || function (e, o) {
                var t = $jscomp.checkStringArgs(this, e, "startsWith");
                e += "";
                var r = t.length, n = e.length;
                o = Math.max(0, Math.min(0 | o, t.length));
                for (var i = 0; i < n && o < r;) if (t[o++] != e[i++]) return !1;
                return i >= n
            }
        }), "es6", "es3"), $jscomp.polyfill("String.prototype.repeat", (function (e) {
            return e || function (e) {
                var o = $jscomp.checkStringArgs(this, null, "repeat");
                if (0 > e || 1342177279 < e) throw new RangeError("Invalid count value");
                e |= 0;
                for (var t = ""; e;) 1 & e && (t += o), (e >>>= 1) && (o += o);
                return t
            }
        }), "es6", "es3");
        var COMPILED = !0, goog = goog || {};
        goog.global = this || self, goog.isDef = function (e) {
            return void 0 !== e
        }, goog.isString = function (e) {
            return "string" == typeof e
        }, goog.isBoolean = function (e) {
            return "boolean" == typeof e
        }, goog.isNumber = function (e) {
            return "number" == typeof e
        }, goog.exportPath_ = function (e, o, t) {
            e = e.split("."), t = t || goog.global, e[0] in t || "undefined" == typeof t.execScript || t.execScript("var " + e[0]);
            for (var r; e.length && (r = e.shift());) !e.length && goog.isDef(o) ? t[r] = o : t = t[r] && t[r] !== Object.prototype[r] ? t[r] : t[r] = {}
        }, goog.define = function (e, o) {
            if (!COMPILED) {
                var t = goog.global.CLOSURE_UNCOMPILED_DEFINES, r = goog.global.CLOSURE_DEFINES;
                t && void 0 === t.nodeType && Object.prototype.hasOwnProperty.call(t, e) ? o = t[e] : r && void 0 === r.nodeType && Object.prototype.hasOwnProperty.call(r, e) && (o = r[e])
            }
            return o
        }, goog.FEATURESET_YEAR = 2012, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, goog.provide = function (e) {
            if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
            if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
            goog.constructNamespace_(e)
        }, goog.constructNamespace_ = function (e, o) {
            if (!COMPILED) {
                delete goog.implicitNamespaces_[e];
                for (var t = e; (t = t.substring(0, t.lastIndexOf("."))) && !goog.getObjectByName(t);) goog.implicitNamespaces_[t] = !0
            }
            goog.exportPath_(e, o)
        }, goog.getScriptNonce = function (e) {
            return e && e != goog.global ? goog.getScriptNonce_(e.document) : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)), goog.cspNonce_)
        }, goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/, goog.cspNonce_ = null, goog.getScriptNonce_ = function (e) {
            return (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(e) ? e : ""
        }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function (e) {
            if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
            if (!goog.isInGoogModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
            if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
            if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
                if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                delete goog.implicitNamespaces_[e]
            }
        }, goog.module.get = function (e) {
            return goog.module.getInternal_(e)
        }, goog.module.getInternal_ = function (e) {
            if (!COMPILED) {
                if (e in goog.loadedModules_) return goog.loadedModules_[e].exports;
                if (!goog.implicitNamespaces_[e]) return null != (e = goog.getObjectByName(e)) ? e : null
            }
            return null
        }, goog.ModuleType = {
            ES6: "es6",
            GOOG: "goog"
        }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function () {
            return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
        }, goog.isInGoogModuleLoader_ = function () {
            return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
        }, goog.isInEs6ModuleLoader_ = function () {
            if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0;
            var e = goog.global.$jscomp;
            return !!e && ("function" == typeof e.getCurrentModulePath && !!e.getCurrentModulePath())
        }, goog.module.declareLegacyNamespace = function () {
            if (!COMPILED && !goog.isInGoogModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
            if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
            goog.moduleLoaderState_.declareLegacyNamespace = !0
        }, goog.declareModuleId = function (e) {
            if (!COMPILED) {
                if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
                if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) throw Error("goog.declareModuleId may only be called once per module.");
                if (e in goog.loadedModules_) throw Error('Module with namespace "' + e + '" already exists.')
            }
            if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = e; else {
                var o = goog.global.$jscomp;
                if (!o || "function" != typeof o.getCurrentModulePath) throw Error('Module with namespace "' + e + '" has been loaded incorrectly.');
                o = o.require(o.getCurrentModulePath()), goog.loadedModules_[e] = {
                    exports: o,
                    type: goog.ModuleType.ES6,
                    moduleId: e
                }
            }
        }, goog.setTestOnly = function (e) {
            if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
        }, goog.forwardDeclare = function (e) {
        }, COMPILED || (goog.isProvided_ = function (e) {
            return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
        }, goog.implicitNamespaces_ = {"goog.module": !0}), goog.getObjectByName = function (e, o) {
            e = e.split("."), o = o || goog.global;
            for (var t = 0; t < e.length; t++) if (o = o[e[t]], !goog.isDefAndNotNull(o)) return null;
            return o
        }, goog.globalize = function (e, o) {
            for (var t in o = o || goog.global, e) o[t] = e[t]
        }, goog.addDependency = function (e, o, t, r) {
            !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(e, o, t, r)
        }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function (e) {
            goog.global.console && goog.global.console.error(e)
        }, goog.require = function (e) {
            if (!COMPILED) {
                if (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e), goog.isProvided_(e)) {
                    if (goog.isInModuleLoader_()) return goog.module.getInternal_(e)
                } else if (goog.ENABLE_DEBUG_LOADER) {
                    var o = goog.moduleLoaderState_;
                    goog.moduleLoaderState_ = null;
                    try {
                        goog.debugLoader_.load_(e)
                    } finally {
                        goog.moduleLoaderState_ = o
                    }
                }
                return null
            }
        }, goog.requireType = function (e) {
            return {}
        }, goog.basePath = "", goog.nullFunction = function () {
        }, goog.abstractMethod = function () {
            throw Error("unimplemented abstract method")
        }, goog.addSingletonGetter = function (e) {
            e.instance_ = void 0, e.getInstance = function () {
                return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
            }
        }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.TRANSPILE = "detect", goog.ASSUME_ES_MODULES_TRANSPILED = !1, goog.TRANSPILE_TO_LANGUAGE = "", goog.TRANSPILER = "transpile.js", goog.hasBadLetScoping = null, goog.useSafari10Workaround = function () {
            if (null == goog.hasBadLetScoping) {
                try {
                    var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
                } catch (b) {
                    a = !1
                }
                goog.hasBadLetScoping = a
            }
            return goog.hasBadLetScoping
        }, goog.workaroundSafari10EvalBug = function (e) {
            return "(function(){" + e + "\n;})();\n"
        }, goog.loadModule = function (e) {
            var o = goog.moduleLoaderState_;
            try {
                if (goog.moduleLoaderState_ = {
                    moduleName: "",
                    declareLegacyNamespace: !1,
                    type: goog.ModuleType.GOOG
                }, goog.isFunction(e)) var t = e.call(void 0, {}); else {
                    if (!goog.isString(e)) throw Error("Invalid module definition");
                    goog.useSafari10Workaround() && (e = goog.workaroundSafari10EvalBug(e)), t = goog.loadModuleFromSource_.call(void 0, e)
                }
                var r = goog.moduleLoaderState_.moduleName;
                if (!goog.isString(r) || !r) throw Error('Invalid module name "' + r + '"');
                goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(r, t) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof t && null != t && Object.seal(t), goog.loadedModules_[r] = {
                    exports: t,
                    type: goog.ModuleType.GOOG,
                    moduleId: goog.moduleLoaderState_.moduleName
                }
            } finally {
                goog.moduleLoaderState_ = o
            }
        }, goog.loadModuleFromSource_ = function (a) {
            return eval(a), {}
        }, goog.normalizePath_ = function (e) {
            e = e.split("/");
            for (var o = 0; o < e.length;) "." == e[o] ? e.splice(o, 1) : o && ".." == e[o] && e[o - 1] && ".." != e[o - 1] ? e.splice(--o, 2) : o++;
            return e.join("/")
        }, goog.loadFileSync_ = function (e) {
            if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
            try {
                var o = new goog.global.XMLHttpRequest;
                return o.open("get", e, !1), o.send(), 0 == o.status || 200 == o.status ? o.responseText : null
            } catch (t) {
                return null
            }
        }, goog.transpile_ = function (e, o, t) {
            var r = goog.global.$jscomp;
            r || (goog.global.$jscomp = r = {});
            var n = r.transpile;
            if (!n) {
                var i = goog.basePath + goog.TRANSPILER, s = goog.loadFileSync_(i);
                if (s) {
                    if (function () {
                        (0, eval)(s + "\n//# sourceURL=" + i)
                    }.call(goog.global), goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                    goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile, n = (r = goog.global.$jscomp).transpile
                }
            }
            return n || (n = r.transpile = function (e, o) {
                return goog.logToConsole_(o + " requires transpilation but no transpiler was found."), e
            }), n(e, o, t)
        }, goog.typeOf = function (e) {
            var o = typeof e;
            if ("object" == o) {
                if (!e) return "null";
                if (e instanceof Array) return "array";
                if (e instanceof Object) return o;
                var t = Object.prototype.toString.call(e);
                if ("[object Window]" == t) return "object";
                if ("[object Array]" == t || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == t || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
            } else if ("function" == o && "undefined" == typeof e.call) return "object";
            return o
        }, goog.isNull = function (e) {
            return null === e
        }, goog.isDefAndNotNull = function (e) {
            return null != e
        }, goog.isArray = function (e) {
            return "array" == goog.typeOf(e)
        }, goog.isArrayLike = function (e) {
            var o = goog.typeOf(e);
            return "array" == o || "object" == o && "number" == typeof e.length
        }, goog.isDateLike = function (e) {
            return goog.isObject(e) && "function" == typeof e.getFullYear
        }, goog.isFunction = function (e) {
            return "function" == goog.typeOf(e)
        }, goog.isObject = function (e) {
            var o = typeof e;
            return "object" == o && null != e || "function" == o
        }, goog.getUid = function (e) {
            return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
        }, goog.hasUid = function (e) {
            return !!e[goog.UID_PROPERTY_]
        }, goog.removeUid = function (e) {
            null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
            try {
                delete e[goog.UID_PROPERTY_]
            } catch (o) {
            }
        }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function (e) {
            var o = goog.typeOf(e);
            if ("object" == o || "array" == o) {
                if ("function" == typeof e.clone) return e.clone();
                for (var t in o = "array" == o ? [] : {}, e) o[t] = goog.cloneObject(e[t]);
                return o
            }
            return e
        }, goog.bindNative_ = function (e, o, t) {
            return e.call.apply(e.bind, arguments)
        }, goog.bindJs_ = function (e, o, t) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var t = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(t, r), e.apply(o, t)
                }
            }
            return function () {
                return e.apply(o, arguments)
            }
        }, goog.bind = function (e, o, t) {
            return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
        }, goog.partial = function (e, o) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function () {
                var o = t.slice();
                return o.push.apply(o, arguments), e.apply(this, o)
            }
        }, goog.mixin = function (e, o) {
            for (var t in o) e[t] = o[t]
        }, goog.now = goog.TRUSTED_SITE && Date.now || function () {
            return +new Date
        }, goog.globalEval = function (e) {
            if (goog.global.execScript) goog.global.execScript(e, "JavaScript"); else {
                if (!goog.global.eval) throw Error("goog.globalEval not available");
                if (null == goog.evalWorksForGlobals_) {
                    try {
                        goog.global.eval("var _evalTest_ = 1;")
                    } catch (r) {
                    }
                    if ("undefined" != typeof goog.global._evalTest_) {
                        try {
                            delete goog.global._evalTest_
                        } catch (r) {
                        }
                        goog.evalWorksForGlobals_ = !0
                    } else goog.evalWorksForGlobals_ = !1
                }
                if (goog.evalWorksForGlobals_) goog.global.eval(e); else {
                    var o = goog.global.document, t = o.createElement("SCRIPT");
                    t.type = "text/javascript", t.defer = !1, t.appendChild(o.createTextNode(e)), o.head.appendChild(t), o.head.removeChild(t)
                }
            }
        }, goog.evalWorksForGlobals_ = null, goog.getCssName = function (e, o) {
            if ("." == String(e).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
            var t = function (e) {
                return goog.cssNameMapping_[e] || e
            }, r = function (e) {
                e = e.split("-");
                for (var o = [], r = 0; r < e.length; r++) o.push(t(e[r]));
                return o.join("-")
            };
            return r = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? t : r : function (e) {
                return e
            }, e = o ? e + "-" + r(o) : r(e), goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e) : e
        }, goog.setCssNameMapping = function (e, o) {
            goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = o
        }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function (e, o, t) {
            return t && t.html && (e = e.replace(/</g, "&lt;")), o && (e = e.replace(/\{\$([^}]+)}/g, (function (e, t) {
                return null != o && t in o ? o[t] : e
            }))), e
        }, goog.getMsgWithFallback = function (e, o) {
            return e
        }, goog.exportSymbol = function (e, o, t) {
            goog.exportPath_(e, o, t)
        }, goog.exportProperty = function (e, o, t) {
            e[o] = t
        }, goog.inherits = function (e, o) {
            function t() {
            }

            t.prototype = o.prototype, e.superClass_ = o.prototype, e.prototype = new t, e.prototype.constructor = e, e.base = function (e, t, r) {
                for (var n = Array(arguments.length - 2), i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                return o.prototype[t].apply(e, n)
            }
        }, goog.base = function (e, o, t) {
            var r = arguments.callee.caller;
            if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !r) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
            if ("undefined" != typeof r.superClass_) {
                for (var n = Array(arguments.length - 1), i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
                return r.superClass_.constructor.apply(e, n)
            }
            if ("string" != typeof o && "symbol" != typeof o) throw Error("method names provided to goog.base must be a string or a symbol");
            for (n = Array(arguments.length - 2), i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            i = !1;
            for (var s = e.constructor.prototype; s; s = Object.getPrototypeOf(s)) if (s[o] === r) i = !0; else if (i) return s[o].apply(e, n);
            if (e[o] === r) return e.constructor.prototype[o].apply(e, n);
            throw Error("goog.base called from a method of one name to a method of a different name")
        }, goog.scope = function (e) {
            if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
            e.call(goog.global)
        }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function (e, o) {
            var t = o.constructor, r = o.statics;
            return t && t != Object.prototype.constructor || (t = function () {
                throw Error("cannot instantiate an interface (no constructor defined).")
            }), t = goog.defineClass.createSealingConstructor_(t, e), e && goog.inherits(t, e), delete o.constructor, delete o.statics, goog.defineClass.applyProperties_(t.prototype, o), null != r && (r instanceof Function ? r(t) : goog.defineClass.applyProperties_(t, r)), t
        }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function (e, o) {
            if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
            var t = !goog.defineClass.isUnsealable_(o), r = function () {
                var o = e.apply(this, arguments) || this;
                return o[goog.UID_PROPERTY_] = o[goog.UID_PROPERTY_], this.constructor === r && t && Object.seal instanceof Function && Object.seal(o), o
            };
            return r
        }, goog.defineClass.isUnsealable_ = function (e) {
            return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
        },goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.defineClass.applyProperties_ = function (e, o) {
            for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
            for (var r = 0; r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++) t = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r], Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
        },goog.tagUnsealableClass = function (e) {
            !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
        },goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable",!COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function () {
            var e = goog.global.document;
            return null != e && "write" in e
        }, goog.isDocumentLoading_ = function () {
            var e = goog.global.document;
            return e.attachEvent ? "complete" != e.readyState : "loading" == e.readyState
        }, goog.findBasePath_ = function () {
            if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH; else if (goog.inHtmlDocument_()) {
                var e = goog.global.document, o = e.currentScript;
                for (o = (e = o ? [o] : e.getElementsByTagName("SCRIPT")).length - 1; 0 <= o; --o) {
                    var t = e[o].src, r = t.lastIndexOf("?");
                    if (r = -1 == r ? t.length : r, "base.js" == t.substr(r - 7, 7)) {
                        goog.basePath = t.substr(0, r - 7);
                        break
                    }
                }
            }
        }, goog.findBasePath_(), goog.Transpiler = function () {
            this.requiresTranspilation_ = null, this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE
        }, goog.Transpiler.prototype.createRequiresTranspilation_ = function () {
            function a(o, t) {
                e ? d[o] = !0 : t() ? (c = o, d[o] = !1) : e = d[o] = !0
            }

            function b(a) {
                try {
                    return !!eval(a)
                } catch (h) {
                    return !1
                }
            }

            var c = "es3", d = {es3: !1}, e = !1,
                f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
            return a("es5", (function () {
                return b("[1,].length==1")
            })), a("es6", (function () {
                return !f.match(/Edge\/(\d+)(\.\d)*/i) && b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
            })), a("es7", (function () {
                return b("2 ** 2 == 4")
            })), a("es8", (function () {
                return b("async () => 1, true")
            })), a("es9", (function () {
                return b("({...rest} = {}), true")
            })), a("es_next", (function () {
                return !1
            })), {target: c, map: d}
        }, goog.Transpiler.prototype.needsTranspile = function (e, o) {
            if ("always" == goog.TRANSPILE) return !0;
            if ("never" == goog.TRANSPILE) return !1;
            if (!this.requiresTranspilation_) {
                var t = this.createRequiresTranspilation_();
                this.requiresTranspilation_ = t.map, this.transpilationTarget_ = this.transpilationTarget_ || t.target
            }
            if (e in this.requiresTranspilation_) return !!this.requiresTranspilation_[e] || !(!goog.inHtmlDocument_() || "es6" != o || "noModule" in goog.global.document.createElement("script"));
            throw Error("Unknown language mode: " + e)
        }, goog.Transpiler.prototype.transpile = function (e, o) {
            return goog.transpile_(e, o, this.transpilationTarget_)
        }, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function (e) {
            return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1")
        }, goog.DebugLoader_ = function () {
            this.dependencies_ = {}, this.idToPath_ = {}, this.written_ = {}, this.loadingDeps_ = [], this.depsToLoad_ = [], this.paused_ = !1, this.factory_ = new goog.DependencyFactory(goog.transpiler_), this.deferredCallbacks_ = {}, this.deferredQueue_ = []
        }, goog.DebugLoader_.prototype.bootstrap = function (e, o) {
            function t() {
                r && (goog.global.setTimeout(r, 0), r = null)
            }

            var r = o;
            if (e.length) {
                o = [];
                for (var n = 0; n < e.length; n++) {
                    var i = this.getPathFromDeps_(e[n]);
                    if (!i) throw Error("Unregonized namespace: " + e[n]);
                    o.push(this.dependencies_[i])
                }
                i = goog.require;
                var s = 0;
                for (n = 0; n < e.length; n++) i(e[n]), o[n].onLoad((function () {
                    ++s == e.length && t()
                }))
            } else t()
        }, goog.DebugLoader_.prototype.loadClosureDeps = function () {
            this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1)), this.loadDeps_()
        }, goog.DebugLoader_.prototype.requested = function (e, o) {
            (e = this.getPathFromDeps_(e)) && (o || this.areDepsLoaded_(this.dependencies_[e].requires)) && (o = this.deferredCallbacks_[e]) && (delete this.deferredCallbacks_[e], o())
        }, goog.DebugLoader_.prototype.setDependencyFactory = function (e) {
            this.factory_ = e
        }, goog.DebugLoader_.prototype.load_ = function (e) {
            if (!this.getPathFromDeps_(e)) throw e = "goog.require could not find: " + e, goog.logToConsole_(e), Error(e);
            var o = this, t = [], r = function (e) {
                var n = o.getPathFromDeps_(e);
                if (!n) throw Error("Bad dependency path or symbol: " + e);
                if (!o.written_[n]) {
                    for (o.written_[n] = !0, e = o.dependencies_[n], n = 0; n < e.requires.length; n++) goog.isProvided_(e.requires[n]) || r(e.requires[n]);
                    t.push(e)
                }
            };
            r(e), e = !!this.depsToLoad_.length, this.depsToLoad_ = this.depsToLoad_.concat(t), this.paused_ || e || this.loadDeps_()
        }, goog.DebugLoader_.prototype.loadDeps_ = function () {
            for (var e = this, o = this.paused_; this.depsToLoad_.length && !o;) !function () {
                var t = !1, r = e.depsToLoad_.shift(), n = !1;
                e.loading_(r);
                var i = {
                    pause: function () {
                        if (t) throw Error("Cannot call pause after the call to load.");
                        o = !0
                    }, resume: function () {
                        t ? e.resume_() : o = !1
                    }, loaded: function () {
                        if (n) throw Error("Double call to loaded.");
                        n = !0, e.loaded_(r)
                    }, pending: function () {
                        for (var o = [], t = 0; t < e.loadingDeps_.length; t++) o.push(e.loadingDeps_[t]);
                        return o
                    }, setModuleState: function (e) {
                        goog.moduleLoaderState_ = {type: e, moduleName: "", declareLegacyNamespace: !1}
                    }, registerEs6ModuleExports: function (e, o, t) {
                        t && (goog.loadedModules_[t] = {exports: o, type: goog.ModuleType.ES6, moduleId: t || ""})
                    }, registerGoogModuleExports: function (e, o) {
                        goog.loadedModules_[e] = {exports: o, type: goog.ModuleType.GOOG, moduleId: e}
                    }, clearModuleState: function () {
                        goog.moduleLoaderState_ = null
                    }, defer: function (o) {
                        if (t) throw Error("Cannot register with defer after the call to load.");
                        e.defer_(r, o)
                    }, areDepsLoaded: function () {
                        return e.areDepsLoaded_(r.requires)
                    }
                };
                try {
                    r.load(i)
                } finally {
                    t = !0
                }
            }();
            o && this.pause_()
        }, goog.DebugLoader_.prototype.pause_ = function () {
            this.paused_ = !0
        }, goog.DebugLoader_.prototype.resume_ = function () {
            this.paused_ && (this.paused_ = !1, this.loadDeps_())
        }, goog.DebugLoader_.prototype.loading_ = function (e) {
            this.loadingDeps_.push(e)
        }, goog.DebugLoader_.prototype.loaded_ = function (e) {
            for (var o = 0; o < this.loadingDeps_.length; o++) if (this.loadingDeps_[o] == e) {
                this.loadingDeps_.splice(o, 1);
                break
            }
            for (o = 0; o < this.deferredQueue_.length; o++) if (this.deferredQueue_[o] == e.path) {
                this.deferredQueue_.splice(o, 1);
                break
            }
            if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) for (; this.deferredQueue_.length;) this.requested(this.deferredQueue_.shift(), !0);
            e.loaded()
        }, goog.DebugLoader_.prototype.areDepsLoaded_ = function (e) {
            for (var o = 0; o < e.length; o++) {
                var t = this.getPathFromDeps_(e[o]);
                if (!t || !(t in this.deferredCallbacks_) && !goog.isProvided_(e[o])) return !1
            }
            return !0
        }, goog.DebugLoader_.prototype.getPathFromDeps_ = function (e) {
            return e in this.idToPath_ ? this.idToPath_[e] : e in this.dependencies_ ? e : null
        }, goog.DebugLoader_.prototype.defer_ = function (e, o) {
            this.deferredCallbacks_[e.path] = o, this.deferredQueue_.push(e.path)
        }, goog.LoadController = function () {
        }, goog.LoadController.prototype.pause = function () {
        }, goog.LoadController.prototype.resume = function () {
        }, goog.LoadController.prototype.loaded = function () {
        }, goog.LoadController.prototype.pending = function () {
        }, goog.LoadController.prototype.registerEs6ModuleExports = function (e, o, t) {
        }, goog.LoadController.prototype.setModuleState = function (e) {
        }, goog.LoadController.prototype.clearModuleState = function () {
        }, goog.LoadController.prototype.defer = function (e) {
        }, goog.LoadController.prototype.areDepsLoaded = function () {
        }, goog.Dependency = function (e, o, t, r, n) {
            this.path = e, this.relativePath = o, this.provides = t, this.requires = r, this.loadFlags = n, this.loaded_ = !1, this.loadCallbacks_ = []
        }, goog.Dependency.prototype.getPathName = function () {
            var e = this.path, o = e.indexOf("://");
            return 0 <= o && (0 <= (o = (e = e.substring(o + 3)).indexOf("/")) && (e = e.substring(o + 1))), e
        }, goog.Dependency.prototype.onLoad = function (e) {
            this.loaded_ ? e() : this.loadCallbacks_.push(e)
        }, goog.Dependency.prototype.loaded = function () {
            this.loaded_ = !0;
            var e = this.loadCallbacks_;
            this.loadCallbacks_ = [];
            for (var o = 0; o < e.length; o++) e[o]()
        }, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function (e) {
            var o = Math.random().toString(32);
            return goog.Dependency.callbackMap_[o] = e, o
        }, goog.Dependency.unregisterCallback_ = function (e) {
            delete goog.Dependency.callbackMap_[e]
        }, goog.Dependency.callback_ = function (e, o) {
            if (!(e in goog.Dependency.callbackMap_)) throw Error("Callback key " + e + " does not exist (was base.js loaded more than once?).");
            for (var t = goog.Dependency.callbackMap_[e], r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
            t.apply(void 0, r)
        }, goog.Dependency.prototype.load = function (e) {
            if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause(); else if (goog.inHtmlDocument_()) {
                var o = goog.global.document;
                if ("complete" == o.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                    if (/\bdeps.js$/.test(this.path)) return void e.loaded();
                    throw Error('Cannot write "' + this.path + '" after document load')
                }
                if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
                    var t = goog.Dependency.registerCallback_((function (o) {
                            goog.DebugLoader_.IS_OLD_IE_ && "complete" != o.readyState || (goog.Dependency.unregisterCallback_(t), e.loaded())
                        })),
                        r = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
                    r = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + t + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + r + "><\/script>", o.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(r) : r)
                } else {
                    var n = o.createElement("script");
                    n.defer = goog.Dependency.defer_, n.async = !1, n.type = "text/javascript", (r = goog.getScriptNonce()) && n.setAttribute("nonce", r), goog.DebugLoader_.IS_OLD_IE_ ? (e.pause(), n.onreadystatechange = function () {
                        "loaded" != n.readyState && "complete" != n.readyState || (e.loaded(), e.resume())
                    }) : n.onload = function () {
                        n.onload = null, e.loaded()
                    }, n.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path, o.head.appendChild(n)
                }
            } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), e.loaded()) : e.pause()
        }, goog.Es6ModuleDependency = function (e, o, t, r, n) {
            goog.Dependency.call(this, e, o, t, r, n)
        }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function (e) {
            if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause(); else if (goog.inHtmlDocument_()) {
                var o = goog.global.document, t = this;
                if (goog.isDocumentLoading_()) {
                    var r = function (e, t) {
                        e = t ? '<script type="module" crossorigin>' + t + "<\/script>" : '<script type="module" crossorigin src="' + e + '"><\/script>', o.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(e) : e)
                    };
                    goog.Dependency.defer_ = !0
                } else r = function (e, t) {
                    var r = o.createElement("script");
                    r.defer = !0, r.async = !1, r.type = "module", r.setAttribute("crossorigin", !0);
                    var n = goog.getScriptNonce();
                    n && r.setAttribute("nonce", n), t ? r.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(t) : t : r.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(e) : e, o.head.appendChild(r)
                };
                var n = goog.Dependency.registerCallback_((function () {
                    goog.Dependency.unregisterCallback_(n), e.setModuleState(goog.ModuleType.ES6)
                }));
                r(void 0, 'goog.Dependency.callback_("' + n + '")'), r(this.path, void 0);
                var i = goog.Dependency.registerCallback_((function (o) {
                    goog.Dependency.unregisterCallback_(i), e.registerEs6ModuleExports(t.path, o, goog.moduleLoaderState_.moduleName)
                }));
                r(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + i + '", m)');
                var s = goog.Dependency.registerCallback_((function () {
                    goog.Dependency.unregisterCallback_(s), e.clearModuleState(), e.loaded()
                }));
                r(void 0, 'goog.Dependency.callback_("' + s + '")')
            } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), e.pause()
        }, goog.TransformedDependency = function (e, o, t, r, n) {
            goog.Dependency.call(this, e, o, t, r, n), this.contents_ = null, this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"))
        }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function (e) {
            function o() {
                r.contents_ = goog.loadFileSync_(r.path), r.contents_ && (r.contents_ = r.transform(r.contents_), r.contents_ && (r.contents_ += "\n//# sourceURL=" + r.path))
            }

            function t() {
                if (r.lazyFetch_ && o(), r.contents_) {
                    n && e.setModuleState(goog.ModuleType.ES6);
                    try {
                        var t = r.contents_;
                        if (r.contents_ = null, goog.globalEval(t), n) var i = goog.moduleLoaderState_.moduleName
                    } finally {
                        n && e.clearModuleState()
                    }
                    n && goog.global.$jscomp.require.ensure([r.getPathName()], (function () {
                        e.registerEs6ModuleExports(r.path, goog.global.$jscomp.require(r.getPathName()), i)
                    })), e.loaded()
                }
            }

            var r = this;
            if (goog.global.CLOSURE_IMPORT_SCRIPT) o(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, e.loaded()) : e.pause(); else {
                var n = this.loadFlags.module == goog.ModuleType.ES6;
                this.lazyFetch_ || o();
                var i = 1 < e.pending().length, s = i && goog.DebugLoader_.IS_OLD_IE_;
                if (i = goog.Dependency.defer_ && (i || goog.isDocumentLoading_()), s || i) e.defer((function () {
                    t()
                })); else {
                    var g = goog.global.document;
                    if (s = goog.inHtmlDocument_() && "ActiveXObject" in goog.global, n && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !s) {
                        goog.Dependency.defer_ = !0, e.pause();
                        var a = g.onreadystatechange;
                        g.onreadystatechange = function () {
                            "interactive" == g.readyState && (g.onreadystatechange = a, t(), e.resume()), goog.isFunction(a) && a.apply(void 0, arguments)
                        }
                    } else !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? function () {
                        var e = goog.global.document, o = goog.Dependency.registerCallback_((function () {
                                goog.Dependency.unregisterCallback_(o), t()
                            })),
                            r = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + o + '");') + "<\/script>";
                        e.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(r) : r)
                    }() : t()
                }
            }
        }, goog.TransformedDependency.prototype.transform = function (e) {
        }, goog.TranspiledDependency = function (e, o, t, r, n, i) {
            goog.TransformedDependency.call(this, e, o, t, r, n), this.transpiler = i
        }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function (e) {
            return this.transpiler.transpile(e, this.getPathName())
        }, goog.PreTranspiledEs6ModuleDependency = function (e, o, t, r, n) {
            goog.TransformedDependency.call(this, e, o, t, r, n)
        }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (e) {
            return e
        }, goog.GoogModuleDependency = function (e, o, t, r, n, i, s) {
            goog.TransformedDependency.call(this, e, o, t, r, n), this.needsTranspile_ = i, this.transpiler_ = s
        }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function (e) {
            return this.needsTranspile_ && (e = this.transpiler_.transpile(e, this.getPathName())), goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(e + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + e + "\n;return exports});\n//# sourceURL=" + this.path + "\n"
        }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function (e, o, t, r) {
            o = o || [], e = e.replace(/\\/g, "/");
            var n = goog.normalizePath_(goog.basePath + e);
            for (r && "boolean" != typeof r || (r = r ? {module: goog.ModuleType.GOOG} : {}), t = this.factory_.createDependency(n, e, o, t, r, goog.transpiler_.needsTranspile(r.lang || "es3", r.module)), this.dependencies_[n] = t, t = 0; t < o.length; t++) this.idToPath_[o[t]] = n;
            this.idToPath_[e] = n
        }, goog.DependencyFactory = function (e) {
            this.transpiler = e
        }, goog.DependencyFactory.prototype.createDependency = function (e, o, t, r, n, i) {
            return n.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(e, o, t, r, n, i, this.transpiler) : i ? new goog.TranspiledDependency(e, o, t, r, n, this.transpiler) : n.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(e, o, t, r, n) : new goog.Es6ModuleDependency(e, o, t, r, n) : new goog.Dependency(e, o, t, r, n)
        }, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function () {
            goog.debugLoader_.loadClosureDeps()
        }, goog.setDependencyFactory = function (e) {
            goog.debugLoader_.setDependencyFactory(e)
        }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function (e, o) {
            goog.debugLoader_.bootstrap(e, o)
        }),goog.TRUSTED_TYPES_POLICY_NAME = "",goog.identity_ = function (e) {
            return e
        },goog.createTrustedTypesPolicy = function (e) {
            var o = null;
            if ("undefined" == typeof TrustedTypes || !TrustedTypes.createPolicy) return o;
            try {
                o = TrustedTypes.createPolicy(e, {
                    createHTML: goog.identity_,
                    createScript: goog.identity_,
                    createScriptURL: goog.identity_,
                    createURL: goog.identity_
                })
            } catch (t) {
                goog.logToConsole_(t.message)
            }
            return o
        },goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null,goog.object = {},goog.object.is = function (e, o) {
            return e === o ? 0 !== e || 1 / e == 1 / o : e != e && o != o
        },goog.object.forEach = function (e, o, t) {
            for (var r in e) o.call(t, e[r], r, e)
        },goog.object.filter = function (e, o, t) {
            var r, n = {};
            for (r in e) o.call(t, e[r], r, e) && (n[r] = e[r]);
            return n
        },goog.object.map = function (e, o, t) {
            var r, n = {};
            for (r in e) n[r] = o.call(t, e[r], r, e);
            return n
        },goog.object.some = function (e, o, t) {
            for (var r in e) if (o.call(t, e[r], r, e)) return !0;
            return !1
        },goog.object.every = function (e, o, t) {
            for (var r in e) if (!o.call(t, e[r], r, e)) return !1;
            return !0
        },goog.object.getCount = function (e) {
            var o, t = 0;
            for (o in e) t++;
            return t
        },goog.object.getAnyKey = function (e) {
            for (var o in e) return o
        },goog.object.getAnyValue = function (e) {
            for (var o in e) return e[o]
        },goog.object.contains = function (e, o) {
            return goog.object.containsValue(e, o)
        },goog.object.getValues = function (e) {
            var o, t = [], r = 0;
            for (o in e) t[r++] = e[o];
            return t
        },goog.object.getKeys = function (e) {
            var o, t = [], r = 0;
            for (o in e) t[r++] = o;
            return t
        },goog.object.getValueByKeys = function (e, o) {
            var t = goog.isArrayLike(o), r = t ? o : arguments;
            for (t = t ? 0 : 1; t < r.length; t++) {
                if (null == e) return;
                e = e[r[t]]
            }
            return e
        },goog.object.containsKey = function (e, o) {
            return null !== e && o in e
        },goog.object.containsValue = function (e, o) {
            for (var t in e) if (e[t] == o) return !0;
            return !1
        },goog.object.findKey = function (e, o, t) {
            for (var r in e) if (o.call(t, e[r], r, e)) return r
        },goog.object.findValue = function (e, o, t) {
            return (o = goog.object.findKey(e, o, t)) && e[o]
        },goog.object.isEmpty = function (e) {
            for (var o in e) return !1;
            return !0
        },goog.object.clear = function (e) {
            for (var o in e) delete e[o]
        },goog.object.remove = function (e, o) {
            var t;
            return (t = o in e) && delete e[o], t
        },goog.object.add = function (e, o, t) {
            if (null !== e && o in e) throw Error('The object already contains the key "' + o + '"');
            goog.object.set(e, o, t)
        },goog.object.get = function (e, o, t) {
            return null !== e && o in e ? e[o] : t
        },goog.object.set = function (e, o, t) {
            e[o] = t
        },goog.object.setIfUndefined = function (e, o, t) {
            return o in e ? e[o] : e[o] = t
        },goog.object.setWithReturnValueIfNotSet = function (e, o, t) {
            return o in e ? e[o] : (t = t(), e[o] = t)
        },goog.object.equals = function (e, o) {
            for (var t in e) if (!(t in o) || e[t] !== o[t]) return !1;
            for (var r in o) if (!(r in e)) return !1;
            return !0
        },goog.object.clone = function (e) {
            var o, t = {};
            for (o in e) t[o] = e[o];
            return t
        },goog.object.unsafeClone = function (e) {
            var o = goog.typeOf(e);
            if ("object" == o || "array" == o) {
                if (goog.isFunction(e.clone)) return e.clone();
                for (var t in o = "array" == o ? [] : {}, e) o[t] = goog.object.unsafeClone(e[t]);
                return o
            }
            return e
        },goog.object.transpose = function (e) {
            var o, t = {};
            for (o in e) t[e[o]] = o;
            return t
        },goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.object.extend = function (e, o) {
            for (var t, r, n = 1; n < arguments.length; n++) {
                for (t in r = arguments[n]) e[t] = r[t];
                for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++) t = goog.object.PROTOTYPE_FIELDS_[i], Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
            }
        },goog.object.create = function (e) {
            var o = arguments.length;
            if (1 == o && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
            if (o % 2) throw Error("Uneven number of arguments");
            for (var t = {}, r = 0; r < o; r += 2) t[arguments[r]] = arguments[r + 1];
            return t
        },goog.object.createSet = function (e) {
            var o = arguments.length;
            if (1 == o && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
            for (var t = {}, r = 0; r < o; r++) t[arguments[r]] = !0;
            return t
        },goog.object.createImmutableView = function (e) {
            var o = e;
            return Object.isFrozen && !Object.isFrozen(e) && (o = Object.create(e), Object.freeze(o)), o
        },goog.object.isImmutableView = function (e) {
            return !!Object.isFrozen && Object.isFrozen(e)
        },goog.object.getAllPropertyNames = function (e, o, t) {
            if (!e) return [];
            if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(e);
            for (var r = {}; e && (e !== Object.prototype || o) && (e !== Function.prototype || t);) {
                for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) r[n[i]] = !0;
                e = Object.getPrototypeOf(e)
            }
            return goog.object.getKeys(r)
        },goog.object.getSuperClass = function (e) {
            return (e = Object.getPrototypeOf(e.prototype)) && e.constructor
        },goog.debug = {},goog.debug.Error = function (e) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error); else {
                var o = Error().stack;
                o && (this.stack = o)
            }
            e && (this.message = String(e)), this.reportErrorToServer = !0
        },goog.inherits(goog.debug.Error, Error),goog.debug.Error.prototype.name = "CustomError",goog.dom = {},goog.dom.NodeType = {
            ELEMENT: 1,
            ATTRIBUTE: 2,
            TEXT: 3,
            CDATA_SECTION: 4,
            ENTITY_REFERENCE: 5,
            ENTITY: 6,
            PROCESSING_INSTRUCTION: 7,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11,
            NOTATION: 12
        },goog.asserts = {},goog.asserts.ENABLE_ASSERTS = goog.DEBUG,goog.asserts.AssertionError = function (e, o) {
            goog.debug.Error.call(this, goog.asserts.subs_(e, o)), this.messagePattern = e
        },goog.inherits(goog.asserts.AssertionError, goog.debug.Error),goog.asserts.AssertionError.prototype.name = "AssertionError",goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
            throw e
        },goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER,goog.asserts.subs_ = function (e, o) {
            for (var t = "", r = (e = e.split("%s")).length - 1, n = 0; n < r; n++) t += e[n] + (n < o.length ? o[n] : "%s");
            return t + e[r]
        },goog.asserts.doAssertFailure_ = function (e, o, t, r) {
            var n = "Assertion failed";
            if (t) {
                n += ": " + t;
                var i = r
            } else e && (n += ": " + e, i = o);
            e = new goog.asserts.AssertionError("" + n, i || []), goog.asserts.errorHandler_(e)
        },goog.asserts.setErrorHandler = function (e) {
            goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
        },goog.asserts.assert = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertExists = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && null == e && goog.asserts.doAssertFailure_("Expected to exist: %s.", [e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.fail = function (e, o) {
            goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
        },goog.asserts.assertNumber = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertString = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertFunction = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertObject = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertArray = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertBoolean = function (e, o, t) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertElement = function (e, o, t) {
            return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertInstanceof = function (e, o, t, r) {
            return !goog.asserts.ENABLE_ASSERTS || e instanceof o || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(o), goog.asserts.getType_(e)], t, Array.prototype.slice.call(arguments, 3)), e
        },goog.asserts.assertFinite = function (e, o, t) {
            return !goog.asserts.ENABLE_ASSERTS || "number" == typeof e && isFinite(e) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [e], o, Array.prototype.slice.call(arguments, 2)), e
        },goog.asserts.assertObjectPrototypeIsIntact = function () {
            for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
        },goog.asserts.getType_ = function (e) {
            return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
        };
        var jspb = {
            BinaryConstants: {}, ConstBinaryMessage: function () {
            }, BinaryMessage: function () {
            }
        };
        jspb.BinaryConstants.FieldType = {
            INVALID: -1,
            DOUBLE: 1,
            FLOAT: 2,
            INT64: 3,
            UINT64: 4,
            INT32: 5,
            FIXED64: 6,
            FIXED32: 7,
            BOOL: 8,
            STRING: 9,
            GROUP: 10,
            MESSAGE: 11,
            BYTES: 12,
            UINT32: 13,
            ENUM: 14,
            SFIXED32: 15,
            SFIXED64: 16,
            SINT32: 17,
            SINT64: 18,
            FHASH64: 30,
            VHASH64: 31
        }, jspb.BinaryConstants.WireType = {
            INVALID: -1,
            VARINT: 0,
            FIXED64: 1,
            DELIMITED: 2,
            START_GROUP: 3,
            END_GROUP: 4,
            FIXED32: 5
        }, jspb.BinaryConstants.FieldTypeToWireType = function (e) {
            var o = jspb.BinaryConstants.FieldType, t = jspb.BinaryConstants.WireType;
            switch (e) {
                case o.INT32:
                case o.INT64:
                case o.UINT32:
                case o.UINT64:
                case o.SINT32:
                case o.SINT64:
                case o.BOOL:
                case o.ENUM:
                case o.VHASH64:
                    return t.VARINT;
                case o.DOUBLE:
                case o.FIXED64:
                case o.SFIXED64:
                case o.FHASH64:
                    return t.FIXED64;
                case o.STRING:
                case o.MESSAGE:
                case o.BYTES:
                    return t.DELIMITED;
                case o.FLOAT:
                case o.FIXED32:
                case o.SFIXED32:
                    return t.FIXED32;
                default:
                    return t.INVALID
            }
        }, jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1, jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60, jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54, jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22, jspb.BinaryConstants.FLOAT64_EPS = 5e-324, jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324, jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292, jspb.BinaryConstants.TWO_TO_20 = 1048576, jspb.BinaryConstants.TWO_TO_23 = 8388608, jspb.BinaryConstants.TWO_TO_31 = 2147483648, jspb.BinaryConstants.TWO_TO_32 = 4294967296, jspb.BinaryConstants.TWO_TO_52 = 4503599627370496, jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000, jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000, jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0", goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR, goog.array.peek = function (e) {
            return e[e.length - 1]
        }, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (e, o, t) {
            return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, o, t)
        } : function (e, o, t) {
            if (t = null == t ? 0 : 0 > t ? Math.max(0, e.length + t) : t, goog.isString(e)) return goog.isString(o) && 1 == o.length ? e.indexOf(o, t) : -1;
            for (; t < e.length; t++) if (t in e && e[t] === o) return t;
            return -1
        }, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (e, o, t) {
            return goog.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, o, null == t ? e.length - 1 : t)
        } : function (e, o, t) {
            if (0 > (t = null == t ? e.length - 1 : t) && (t = Math.max(0, e.length + t)), goog.isString(e)) return goog.isString(o) && 1 == o.length ? e.lastIndexOf(o, t) : -1;
            for (; 0 <= t; t--) if (t in e && e[t] === o) return t;
            return -1
        }, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (e, o, t) {
            goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, o, t)
        } : function (e, o, t) {
            for (var r = e.length, n = goog.isString(e) ? e.split("") : e, i = 0; i < r; i++) i in n && o.call(t, n[i], i, e)
        }, goog.array.forEachRight = function (e, o, t) {
            var r = e.length, n = goog.isString(e) ? e.split("") : e;
            for (--r; 0 <= r; --r) r in n && o.call(t, n[r], r, e)
        }, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (e, o, t) {
            return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, o, t)
        } : function (e, o, t) {
            for (var r = e.length, n = [], i = 0, s = goog.isString(e) ? e.split("") : e, g = 0; g < r; g++) if (g in s) {
                var a = s[g];
                o.call(t, a, g, e) && (n[i++] = a)
            }
            return n
        }, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (e, o, t) {
            return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, o, t)
        } : function (e, o, t) {
            for (var r = e.length, n = Array(r), i = goog.isString(e) ? e.split("") : e, s = 0; s < r; s++) s in i && (n[s] = o.call(t, i[s], s, e));
            return n
        }, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (e, o, t, r) {
            return goog.asserts.assert(null != e.length), r && (o = goog.bind(o, r)), Array.prototype.reduce.call(e, o, t)
        } : function (e, o, t, r) {
            var n = t;
            return goog.array.forEach(e, (function (t, i) {
                n = o.call(r, n, t, i, e)
            })), n
        }, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (e, o, t, r) {
            return goog.asserts.assert(null != e.length), goog.asserts.assert(null != o), r && (o = goog.bind(o, r)), Array.prototype.reduceRight.call(e, o, t)
        } : function (e, o, t, r) {
            var n = t;
            return goog.array.forEachRight(e, (function (t, i) {
                n = o.call(r, n, t, i, e)
            })), n
        }, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (e, o, t) {
            return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, o, t)
        } : function (e, o, t) {
            for (var r = e.length, n = goog.isString(e) ? e.split("") : e, i = 0; i < r; i++) if (i in n && o.call(t, n[i], i, e)) return !0;
            return !1
        }, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (e, o, t) {
            return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, o, t)
        } : function (e, o, t) {
            for (var r = e.length, n = goog.isString(e) ? e.split("") : e, i = 0; i < r; i++) if (i in n && !o.call(t, n[i], i, e)) return !1;
            return !0
        }, goog.array.count = function (e, o, t) {
            var r = 0;
            return goog.array.forEach(e, (function (e, n, i) {
                o.call(t, e, n, i) && ++r
            }), t), r
        }, goog.array.find = function (e, o, t) {
            return 0 > (o = goog.array.findIndex(e, o, t)) ? null : goog.isString(e) ? e.charAt(o) : e[o]
        }, goog.array.findIndex = function (e, o, t) {
            for (var r = e.length, n = goog.isString(e) ? e.split("") : e, i = 0; i < r; i++) if (i in n && o.call(t, n[i], i, e)) return i;
            return -1
        }, goog.array.findRight = function (e, o, t) {
            return 0 > (o = goog.array.findIndexRight(e, o, t)) ? null : goog.isString(e) ? e.charAt(o) : e[o]
        }, goog.array.findIndexRight = function (e, o, t) {
            var r = e.length, n = goog.isString(e) ? e.split("") : e;
            for (--r; 0 <= r; r--) if (r in n && o.call(t, n[r], r, e)) return r;
            return -1
        }, goog.array.contains = function (e, o) {
            return 0 <= goog.array.indexOf(e, o)
        }, goog.array.isEmpty = function (e) {
            return 0 == e.length
        }, goog.array.clear = function (e) {
            if (!goog.isArray(e)) for (var o = e.length - 1; 0 <= o; o--) delete e[o];
            e.length = 0
        }, goog.array.insert = function (e, o) {
            goog.array.contains(e, o) || e.push(o)
        }, goog.array.insertAt = function (e, o, t) {
            goog.array.splice(e, t, 0, o)
        }, goog.array.insertArrayAt = function (e, o, t) {
            goog.partial(goog.array.splice, e, t, 0).apply(null, o)
        }, goog.array.insertBefore = function (e, o, t) {
            var r;
            2 == arguments.length || 0 > (r = goog.array.indexOf(e, t)) ? e.push(o) : goog.array.insertAt(e, o, r)
        }, goog.array.remove = function (e, o) {
            var t;
            return (t = 0 <= (o = goog.array.indexOf(e, o))) && goog.array.removeAt(e, o), t
        }, goog.array.removeLast = function (e, o) {
            return 0 <= (o = goog.array.lastIndexOf(e, o)) && (goog.array.removeAt(e, o), !0)
        }, goog.array.removeAt = function (e, o) {
            return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, o, 1).length
        }, goog.array.removeIf = function (e, o, t) {
            return 0 <= (o = goog.array.findIndex(e, o, t)) && (goog.array.removeAt(e, o), !0)
        }, goog.array.removeAllIf = function (e, o, t) {
            var r = 0;
            return goog.array.forEachRight(e, (function (n, i) {
                o.call(t, n, i, e) && goog.array.removeAt(e, i) && r++
            })), r
        }, goog.array.concat = function (e) {
            return Array.prototype.concat.apply([], arguments)
        }, goog.array.join = function (e) {
            return Array.prototype.concat.apply([], arguments)
        }, goog.array.toArray = function (e) {
            var o = e.length;
            if (0 < o) {
                for (var t = Array(o), r = 0; r < o; r++) t[r] = e[r];
                return t
            }
            return []
        }, goog.array.clone = goog.array.toArray, goog.array.extend = function (e, o) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (goog.isArrayLike(r)) {
                    var n = e.length || 0, i = r.length || 0;
                    e.length = n + i;
                    for (var s = 0; s < i; s++) e[n + s] = r[s]
                } else e.push(r)
            }
        }, goog.array.splice = function (e, o, t, r) {
            return goog.asserts.assert(null != e.length), Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
        }, goog.array.slice = function (e, o, t) {
            return goog.asserts.assert(null != e.length), 2 >= arguments.length ? Array.prototype.slice.call(e, o) : Array.prototype.slice.call(e, o, t)
        }, goog.array.removeDuplicates = function (e, o, t) {
            o = o || e;
            var r = function (e) {
                return goog.isObject(e) ? "o" + goog.getUid(e) : (typeof e).charAt(0) + e
            };
            t = t || r, r = {};
            for (var n = 0, i = 0; i < e.length;) {
                var s = e[i++], g = t(s);
                Object.prototype.hasOwnProperty.call(r, g) || (r[g] = !0, o[n++] = s)
            }
            o.length = n
        }, goog.array.binarySearch = function (e, o, t) {
            return goog.array.binarySearch_(e, t || goog.array.defaultCompare, !1, o)
        }, goog.array.binarySelect = function (e, o, t) {
            return goog.array.binarySearch_(e, o, !0, void 0, t)
        }, goog.array.binarySearch_ = function (e, o, t, r, n) {
            for (var i, s = 0, g = e.length; s < g;) {
                var a = s + g >> 1, p = t ? o.call(n, e[a], a, e) : o(r, e[a]);
                0 < p ? s = a + 1 : (g = a, i = !p)
            }
            return i ? s : ~s
        }, goog.array.sort = function (e, o) {
            e.sort(o || goog.array.defaultCompare)
        }, goog.array.stableSort = function (e, o) {
            for (var t = Array(e.length), r = 0; r < e.length; r++) t[r] = {index: r, value: e[r]};
            var n = o || goog.array.defaultCompare;
            for (goog.array.sort(t, (function (e, o) {
                return n(e.value, o.value) || e.index - o.index
            })), r = 0; r < e.length; r++) e[r] = t[r].value
        }, goog.array.sortByKey = function (e, o, t) {
            var r = t || goog.array.defaultCompare;
            goog.array.sort(e, (function (e, t) {
                return r(o(e), o(t))
            }))
        }, goog.array.sortObjectsByKey = function (e, o, t) {
            goog.array.sortByKey(e, (function (e) {
                return e[o]
            }), t)
        }, goog.array.isSorted = function (e, o, t) {
            o = o || goog.array.defaultCompare;
            for (var r = 1; r < e.length; r++) {
                var n = o(e[r - 1], e[r]);
                if (0 < n || 0 == n && t) return !1
            }
            return !0
        }, goog.array.equals = function (e, o, t) {
            if (!goog.isArrayLike(e) || !goog.isArrayLike(o) || e.length != o.length) return !1;
            var r = e.length;
            t = t || goog.array.defaultCompareEquality;
            for (var n = 0; n < r; n++) if (!t(e[n], o[n])) return !1;
            return !0
        }, goog.array.compare3 = function (e, o, t) {
            t = t || goog.array.defaultCompare;
            for (var r = Math.min(e.length, o.length), n = 0; n < r; n++) {
                var i = t(e[n], o[n]);
                if (0 != i) return i
            }
            return goog.array.defaultCompare(e.length, o.length)
        }, goog.array.defaultCompare = function (e, o) {
            return e > o ? 1 : e < o ? -1 : 0
        }, goog.array.inverseDefaultCompare = function (e, o) {
            return -goog.array.defaultCompare(e, o)
        }, goog.array.defaultCompareEquality = function (e, o) {
            return e === o
        }, goog.array.binaryInsert = function (e, o, t) {
            return 0 > (t = goog.array.binarySearch(e, o, t)) && (goog.array.insertAt(e, o, -(t + 1)), !0)
        }, goog.array.binaryRemove = function (e, o, t) {
            return 0 <= (o = goog.array.binarySearch(e, o, t)) && goog.array.removeAt(e, o)
        }, goog.array.bucket = function (e, o, t) {
            for (var r = {}, n = 0; n < e.length; n++) {
                var i = e[n], s = o.call(t, i, n, e);
                goog.isDef(s) && (r[s] || (r[s] = [])).push(i)
            }
            return r
        }, goog.array.toObject = function (e, o, t) {
            var r = {};
            return goog.array.forEach(e, (function (n, i) {
                r[o.call(t, n, i, e)] = n
            })), r
        }, goog.array.range = function (e, o, t) {
            var r = [], n = 0, i = e;
            if (void 0 !== o && (n = e, i = o), 0 > (t = t || 1) * (i - n)) return [];
            if (0 < t) for (e = n; e < i; e += t) r.push(e); else for (e = n; e > i; e += t) r.push(e);
            return r
        }, goog.array.repeat = function (e, o) {
            for (var t = [], r = 0; r < o; r++) t[r] = e;
            return t
        }, goog.array.flatten = function (e) {
            for (var o = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (goog.isArray(r)) for (var n = 0; n < r.length; n += 8192) {
                    var i = goog.array.slice(r, n, n + 8192);
                    i = goog.array.flatten.apply(null, i);
                    for (var s = 0; s < i.length; s++) o.push(i[s])
                } else o.push(r)
            }
            return o
        }, goog.array.rotate = function (e, o) {
            return goog.asserts.assert(null != e.length), e.length && (0 < (o %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-o, o)) : 0 > o && Array.prototype.push.apply(e, e.splice(0, -o))), e
        }, goog.array.moveItem = function (e, o, t) {
            goog.asserts.assert(0 <= o && o < e.length), goog.asserts.assert(0 <= t && t < e.length), o = Array.prototype.splice.call(e, o, 1), Array.prototype.splice.call(e, t, 0, o[0])
        }, goog.array.zip = function (e) {
            if (!arguments.length) return [];
            for (var o = [], t = arguments[0].length, r = 1; r < arguments.length; r++) arguments[r].length < t && (t = arguments[r].length);
            for (r = 0; r < t; r++) {
                for (var n = [], i = 0; i < arguments.length; i++) n.push(arguments[i][r]);
                o.push(n)
            }
            return o
        }, goog.array.shuffle = function (e, o) {
            o = o || Math.random;
            for (var t = e.length - 1; 0 < t; t--) {
                var r = Math.floor(o() * (t + 1)), n = e[t];
                e[t] = e[r], e[r] = n
            }
        }, goog.array.copyByIndex = function (e, o) {
            var t = [];
            return goog.array.forEach(o, (function (o) {
                t.push(e[o])
            })), t
        }, goog.array.concatMap = function (e, o, t) {
            return goog.array.concat.apply([], goog.array.map(e, o, t))
        }, goog.crypt = {}, goog.crypt.stringToByteArray = function (e) {
            for (var o = [], t = 0, r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                255 < n && (o[t++] = 255 & n, n >>= 8), o[t++] = n
            }
            return o
        }, goog.crypt.byteArrayToString = function (e) {
            if (8192 >= e.length) return String.fromCharCode.apply(null, e);
            for (var o = "", t = 0; t < e.length; t += 8192) {
                var r = goog.array.slice(e, t, t + 8192);
                o += String.fromCharCode.apply(null, r)
            }
            return o
        }, goog.crypt.byteArrayToHex = function (e, o) {
            return goog.array.map(e, (function (e) {
                return 1 < (e = e.toString(16)).length ? e : "0" + e
            })).join(o || "")
        }, goog.crypt.hexToByteArray = function (e) {
            goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
            for (var o = [], t = 0; t < e.length; t += 2) o.push(parseInt(e.substring(t, t + 2), 16));
            return o
        }, goog.crypt.stringToUtf8ByteArray = function (e) {
            for (var o = [], t = 0, r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                128 > n ? o[t++] = n : (2048 > n ? o[t++] = n >> 6 | 192 : (55296 == (64512 & n) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++r)), o[t++] = n >> 18 | 240, o[t++] = n >> 12 & 63 | 128) : o[t++] = n >> 12 | 224, o[t++] = n >> 6 & 63 | 128), o[t++] = 63 & n | 128)
            }
            return o
        }, goog.crypt.utf8ByteArrayToString = function (e) {
            for (var o = [], t = 0, r = 0; t < e.length;) {
                var n = e[t++];
                if (128 > n) o[r++] = String.fromCharCode(n); else if (191 < n && 224 > n) {
                    var i = e[t++];
                    o[r++] = String.fromCharCode((31 & n) << 6 | 63 & i)
                } else if (239 < n && 365 > n) {
                    i = e[t++];
                    var s = e[t++];
                    n = ((7 & n) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & e[t++]) - 65536, o[r++] = String.fromCharCode(55296 + (n >> 10)), o[r++] = String.fromCharCode(56320 + (1023 & n))
                } else i = e[t++], s = e[t++], o[r++] = String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | 63 & s)
            }
            return o.join("")
        }, goog.crypt.xorByteArray = function (e, o) {
            goog.asserts.assert(e.length == o.length, "XOR array lengths must match");
            for (var t = [], r = 0; r < e.length; r++) t.push(e[r] ^ o[r]);
            return t
        }, goog.dom.asserts = {}, goog.dom.asserts.assertIsLocation = function (e) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var o = goog.dom.asserts.getWindow_(e);
                o && (!e || !(e instanceof o.Location) && e instanceof o.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(e))
            }
            return e
        }, goog.dom.asserts.assertIsElementType_ = function (e, o) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var t = goog.dom.asserts.getWindow_(e);
                t && "undefined" != typeof t[o] && (e && (e instanceof t[o] || !(e instanceof t.Location || e instanceof t.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", o, goog.dom.asserts.debugStringForType_(e)))
            }
            return e
        }, goog.dom.asserts.assertIsHTMLAnchorElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAnchorElement")
        }, goog.dom.asserts.assertIsHTMLButtonElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLButtonElement")
        }, goog.dom.asserts.assertIsHTMLLinkElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLLinkElement")
        }, goog.dom.asserts.assertIsHTMLImageElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLImageElement")
        }, goog.dom.asserts.assertIsHTMLAudioElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAudioElement")
        }, goog.dom.asserts.assertIsHTMLVideoElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLVideoElement")
        },goog.dom.asserts.assertIsHTMLInputElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLInputElement")
        },goog.dom.asserts.assertIsHTMLTextAreaElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLTextAreaElement")
        },goog.dom.asserts.assertIsHTMLCanvasElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLCanvasElement")
        },goog.dom.asserts.assertIsHTMLEmbedElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLEmbedElement")
        },goog.dom.asserts.assertIsHTMLFormElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFormElement")
        },goog.dom.asserts.assertIsHTMLFrameElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFrameElement")
        },goog.dom.asserts.assertIsHTMLIFrameElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLIFrameElement")
        },goog.dom.asserts.assertIsHTMLObjectElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLObjectElement")
        },goog.dom.asserts.assertIsHTMLScriptElement = function (e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLScriptElement")
        },goog.dom.asserts.debugStringForType_ = function (e) {
            if (!goog.isObject(e)) return void 0 === e ? "undefined" : null === e ? "null" : typeof e;
            try {
                return e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
            } catch (o) {
                return "<object could not be stringified>"
            }
        },goog.dom.asserts.getWindow_ = function (e) {
            try {
                var o = e && e.ownerDocument, t = o && (o.defaultView || o.parentWindow);
                if ((t = t || goog.global).Element && t.Location) return t
            } catch (r) {
            }
            return null
        },goog.functions = {},goog.functions.constant = function (e) {
            return function () {
                return e
            }
        },goog.functions.FALSE = function () {
            return !1
        },goog.functions.TRUE = function () {
            return !0
        },goog.functions.NULL = function () {
            return null
        },goog.functions.identity = function (e, o) {
            return e
        },goog.functions.error = function (e) {
            return function () {
                throw Error(e)
            }
        },goog.functions.fail = function (e) {
            return function () {
                throw e
            }
        },goog.functions.lock = function (e, o) {
            return o = o || 0, function () {
                return e.apply(this, Array.prototype.slice.call(arguments, 0, o))
            }
        },goog.functions.nth = function (e) {
            return function () {
                return arguments[e]
            }
        },goog.functions.partialRight = function (e, o) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function () {
                var o = Array.prototype.slice.call(arguments);
                return o.push.apply(o, t), e.apply(this, o)
            }
        },goog.functions.withReturnValue = function (e, o) {
            return goog.functions.sequence(e, goog.functions.constant(o))
        },goog.functions.equalTo = function (e, o) {
            return function (t) {
                return o ? e == t : e === t
            }
        },goog.functions.compose = function (e, o) {
            var t = arguments, r = t.length;
            return function () {
                var e;
                r && (e = t[r - 1].apply(this, arguments));
                for (var o = r - 2; 0 <= o; o--) e = t[o].call(this, e);
                return e
            }
        },goog.functions.sequence = function (e) {
            var o = arguments, t = o.length;
            return function () {
                for (var e, r = 0; r < t; r++) e = o[r].apply(this, arguments);
                return e
            }
        },goog.functions.and = function (e) {
            var o = arguments, t = o.length;
            return function () {
                for (var e = 0; e < t; e++) if (!o[e].apply(this, arguments)) return !1;
                return !0
            }
        },goog.functions.or = function (e) {
            var o = arguments, t = o.length;
            return function () {
                for (var e = 0; e < t; e++) if (o[e].apply(this, arguments)) return !0;
                return !1
            }
        },goog.functions.not = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        },goog.functions.create = function (e, o) {
            var t = function () {
            };
            return t.prototype = e.prototype, t = new t, e.apply(t, Array.prototype.slice.call(arguments, 1)), t
        },goog.functions.CACHE_RETURN_VALUE = !0,goog.functions.cacheReturnValue = function (e) {
            var o, t = !1;
            return function () {
                return goog.functions.CACHE_RETURN_VALUE ? (t || (o = e(), t = !0), o) : e()
            }
        },goog.functions.once = function (e) {
            var o = e;
            return function () {
                if (o) {
                    var e = o;
                    o = null, e()
                }
            }
        },goog.functions.debounce = function (e, o, t) {
            var r = 0;
            return function (n) {
                goog.global.clearTimeout(r);
                var i = arguments;
                r = goog.global.setTimeout((function () {
                    e.apply(t, i)
                }), o)
            }
        },goog.functions.throttle = function (e, o, t) {
            var r = 0, n = !1, i = [], s = function () {
                r = 0, n && (n = !1, g())
            }, g = function () {
                r = goog.global.setTimeout(s, o), e.apply(t, i)
            };
            return function (e) {
                i = arguments, r ? n = !0 : g()
            }
        },goog.functions.rateLimit = function (e, o, t) {
            var r = 0, n = function () {
                r = 0
            };
            return function (i) {
                r || (r = goog.global.setTimeout(n, o), e.apply(t, arguments))
            }
        },goog.dom.HtmlElement = function () {
        },goog.dom.TagName = function (e) {
            this.tagName_ = e
        },goog.dom.TagName.prototype.toString = function () {
            return this.tagName_
        },goog.dom.TagName.A = new goog.dom.TagName("A"),goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR"),goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM"),goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS"),goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET"),goog.dom.TagName.AREA = new goog.dom.TagName("AREA"),goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE"),goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE"),goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO"),goog.dom.TagName.B = new goog.dom.TagName("B"),goog.dom.TagName.BASE = new goog.dom.TagName("BASE"),goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT"),goog.dom.TagName.BDI = new goog.dom.TagName("BDI"),goog.dom.TagName.BDO = new goog.dom.TagName("BDO"),goog.dom.TagName.BIG = new goog.dom.TagName("BIG"),goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE"),goog.dom.TagName.BODY = new goog.dom.TagName("BODY"),goog.dom.TagName.BR = new goog.dom.TagName("BR"),goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON"),goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS"),goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION"),goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER"),goog.dom.TagName.CITE = new goog.dom.TagName("CITE"),goog.dom.TagName.CODE = new goog.dom.TagName("CODE"),goog.dom.TagName.COL = new goog.dom.TagName("COL"),goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP"),goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND"),goog.dom.TagName.DATA = new goog.dom.TagName("DATA"),goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST"),goog.dom.TagName.DD = new goog.dom.TagName("DD"),goog.dom.TagName.DEL = new goog.dom.TagName("DEL"),goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS"),goog.dom.TagName.DFN = new goog.dom.TagName("DFN"),goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG"),goog.dom.TagName.DIR = new goog.dom.TagName("DIR"),goog.dom.TagName.DIV = new goog.dom.TagName("DIV"),goog.dom.TagName.DL = new goog.dom.TagName("DL"),goog.dom.TagName.DT = new goog.dom.TagName("DT"),goog.dom.TagName.EM = new goog.dom.TagName("EM"),goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED"),goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET"),goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION"),goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE"),goog.dom.TagName.FONT = new goog.dom.TagName("FONT"),goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER"),goog.dom.TagName.FORM = new goog.dom.TagName("FORM"),goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME"),goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET"),goog.dom.TagName.H1 = new goog.dom.TagName("H1"),goog.dom.TagName.H2 = new goog.dom.TagName("H2"),goog.dom.TagName.H3 = new goog.dom.TagName("H3"),goog.dom.TagName.H4 = new goog.dom.TagName("H4"),goog.dom.TagName.H5 = new goog.dom.TagName("H5"),goog.dom.TagName.H6 = new goog.dom.TagName("H6"),goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD"),goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER"),goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP"),goog.dom.TagName.HR = new goog.dom.TagName("HR"),goog.dom.TagName.HTML = new goog.dom.TagName("HTML"),goog.dom.TagName.I = new goog.dom.TagName("I"),goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME"),goog.dom.TagName.IMG = new goog.dom.TagName("IMG"),goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT"),goog.dom.TagName.INS = new goog.dom.TagName("INS"),goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX"),goog.dom.TagName.KBD = new goog.dom.TagName("KBD"),goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN"),goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL"),goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND"),goog.dom.TagName.LI = new goog.dom.TagName("LI"),goog.dom.TagName.LINK = new goog.dom.TagName("LINK"),goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN"),goog.dom.TagName.MAP = new goog.dom.TagName("MAP"),goog.dom.TagName.MARK = new goog.dom.TagName("MARK"),goog.dom.TagName.MATH = new goog.dom.TagName("MATH"),goog.dom.TagName.MENU = new goog.dom.TagName("MENU"),goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM"),goog.dom.TagName.META = new goog.dom.TagName("META"),goog.dom.TagName.METER = new goog.dom.TagName("METER"),goog.dom.TagName.NAV = new goog.dom.TagName("NAV"),goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES"),goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT"),goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT"),goog.dom.TagName.OL = new goog.dom.TagName("OL"),goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP"),goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION"),goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT"),goog.dom.TagName.P = new goog.dom.TagName("P"),goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM"),goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE"),goog.dom.TagName.PRE = new goog.dom.TagName("PRE"),goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS"),goog.dom.TagName.Q = new goog.dom.TagName("Q"),goog.dom.TagName.RP = new goog.dom.TagName("RP"),goog.dom.TagName.RT = new goog.dom.TagName("RT"),goog.dom.TagName.RTC = new goog.dom.TagName("RTC"),goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY"),goog.dom.TagName.S = new goog.dom.TagName("S"),goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP"),goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT"),goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION"),goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT"),goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL"),goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE"),goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN"),goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE"),goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG"),goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE"),goog.dom.TagName.SUB = new goog.dom.TagName("SUB"),goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY"),goog.dom.TagName.SUP = new goog.dom.TagName("SUP"),goog.dom.TagName.SVG = new goog.dom.TagName("SVG"),goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE"),goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY"),goog.dom.TagName.TD = new goog.dom.TagName("TD"),goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE"),goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA"),goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT"),goog.dom.TagName.TH = new goog.dom.TagName("TH"),goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD"),goog.dom.TagName.TIME = new goog.dom.TagName("TIME"),goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE"),goog.dom.TagName.TR = new goog.dom.TagName("TR"),goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK"),goog.dom.TagName.TT = new goog.dom.TagName("TT"),goog.dom.TagName.U = new goog.dom.TagName("U"),goog.dom.TagName.UL = new goog.dom.TagName("UL"),goog.dom.TagName.VAR = new goog.dom.TagName("VAR"),goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO"),goog.dom.TagName.WBR = new goog.dom.TagName("WBR"),goog.dom.tags = {},goog.dom.tags.VOID_TAGS_ = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },goog.dom.tags.isVoidTag = function (e) {
            return !0 === goog.dom.tags.VOID_TAGS_[e]
        },goog.html = {},goog.html.trustedtypes = {},goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null,goog.string = {},goog.string.TypedString = function () {
        },goog.string.Const = function (e, o) {
            this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && o || "", this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
        },goog.string.Const.prototype.implementsGoogStringTypedString = !0,goog.string.Const.prototype.getTypedStringValue = function () {
            return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
        },goog.string.Const.prototype.toString = function () {
            return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
        },goog.string.Const.unwrap = function (e) {
            return e instanceof goog.string.Const && e.constructor === goog.string.Const && e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_ ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (goog.asserts.fail("expected object of type Const, got '" + e + "'"), "type_error:Const")
        },goog.string.Const.from = function (e) {
            return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, e)
        },goog.string.Const.TYPE_MARKER_ = {},goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {},goog.string.Const.EMPTY = goog.string.Const.from(""),goog.html.SafeScript = function () {
            this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "", this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        },goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0,goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},goog.html.SafeScript.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeScript.fromConstantAndArgs = function (e, o) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(goog.html.SafeScript.stringify_(arguments[r]));
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(e) + ")(" + t.join(", ") + ");")
        },goog.html.SafeScript.fromJson = function (e) {
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(e))
        },goog.html.SafeScript.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
        },goog.DEBUG && (goog.html.SafeScript.prototype.toString = function () {
            return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
        }),goog.html.SafeScript.unwrap = function (e) {
            return goog.html.SafeScript.unwrapTrustedScript(e).toString()
        },goog.html.SafeScript.unwrapTrustedScript = function (e) {
            return e instanceof goog.html.SafeScript && e.constructor === goog.html.SafeScript && e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (goog.asserts.fail("expected object of type SafeScript, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeScript")
        },goog.html.SafeScript.stringify_ = function (e) {
            return JSON.stringify(e).replace(/</g, "\\x3c")
        },goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function (e) {
            return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(e)
        },goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(e) : e, this
        },goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),goog.fs = {},goog.fs.url = {},goog.fs.url.createObjectUrl = function (e) {
            return goog.fs.url.getUrlObject_().createObjectURL(e)
        },goog.fs.url.revokeObjectUrl = function (e) {
            goog.fs.url.getUrlObject_().revokeObjectURL(e)
        },goog.fs.url.getUrlObject_ = function () {
            var e = goog.fs.url.findUrlObject_();
            if (null != e) return e;
            throw Error("This browser doesn't seem to support blob URLs")
        },goog.fs.url.findUrlObject_ = function () {
            return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null
        },goog.fs.url.browserSupportsObjectUrls = function () {
            return null != goog.fs.url.findUrlObject_()
        },goog.i18n = {},goog.i18n.bidi = {},goog.i18n.bidi.FORCE_RTL = !1,goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()),goog.i18n.bidi.Format = {
            LRE: "\u202a",
            RLE: "\u202b",
            PDF: "\u202c",
            LRM: "\u200e",
            RLM: "\u200f"
        },goog.i18n.bidi.Dir = {
            LTR: 1,
            RTL: -1,
            NEUTRAL: 0
        },goog.i18n.bidi.RIGHT = "right",goog.i18n.bidi.LEFT = "left",goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT,goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT,goog.i18n.bidi.toDir = function (e, o) {
            return "number" == typeof e ? 0 < e ? goog.i18n.bidi.Dir.LTR : 0 > e ? goog.i18n.bidi.Dir.RTL : o ? null : goog.i18n.bidi.Dir.NEUTRAL : null == e ? null : e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
        },goog.i18n.bidi.ltrChars_ = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff",goog.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc",goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g,goog.i18n.bidi.stripHtmlIfNeeded_ = function (e, o) {
            return o ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e
        },goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]"),goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]"),goog.i18n.bidi.hasAnyRtl = function (e, o) {
            return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, o))
        },goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl,goog.i18n.bidi.hasAnyLtr = function (e, o) {
            return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, o))
        },goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]"),goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]"),goog.i18n.bidi.isRtlChar = function (e) {
            return goog.i18n.bidi.rtlRe_.test(e)
        },goog.i18n.bidi.isLtrChar = function (e) {
            return goog.i18n.bidi.ltrRe_.test(e)
        },goog.i18n.bidi.isNeutralChar = function (e) {
            return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
        },goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]"),goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]"),goog.i18n.bidi.startsWithRtl = function (e, o) {
            return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, o))
        },goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl,goog.i18n.bidi.startsWithLtr = function (e, o) {
            return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, o))
        },goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr,goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/,goog.i18n.bidi.isNeutralText = function (e, o) {
            return e = goog.i18n.bidi.stripHtmlIfNeeded_(e, o), goog.i18n.bidi.isRequiredLtrRe_.test(e) || !goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e)
        },goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$"),goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$"),goog.i18n.bidi.endsWithLtr = function (e, o) {
            return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, o))
        },goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr,goog.i18n.bidi.endsWithRtl = function (e, o) {
            return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, o))
        },goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl,goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,goog.i18n.bidi.isRtlLanguage = function (e) {
            return goog.i18n.bidi.rtlLocalesRe_.test(e)
        },goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,goog.i18n.bidi.guardBracketInText = function (e, o) {
            return o = (void 0 === o ? goog.i18n.bidi.hasAnyRtl(e) : o) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM, e.replace(goog.i18n.bidi.bracketGuardTextRe_, o + "$&" + o)
        },goog.i18n.bidi.enforceRtlInHtml = function (e) {
            return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + e + "</span>"
        },goog.i18n.bidi.enforceRtlInText = function (e) {
            return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF
        },goog.i18n.bidi.enforceLtrInHtml = function (e) {
            return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + e + "</span>"
        },goog.i18n.bidi.enforceLtrInText = function (e) {
            return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF
        },goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,goog.i18n.bidi.leftRe_ = /left/gi,goog.i18n.bidi.rightRe_ = /right/gi,goog.i18n.bidi.tempRe_ = /%%%%/g,goog.i18n.bidi.mirrorCSS = function (e) {
            return e.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
        },goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g,goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g,goog.i18n.bidi.normalizeHebrewQuote = function (e) {
            return e.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3")
        },goog.i18n.bidi.wordSeparatorRe_ = /\s+/,goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/,goog.i18n.bidi.rtlDetectionThreshold_ = .4,goog.i18n.bidi.estimateDirection = function (e, o) {
            var t = 0, r = 0, n = !1;
            for (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, o).split(goog.i18n.bidi.wordSeparatorRe_), o = 0; o < e.length; o++) {
                var i = e[o];
                goog.i18n.bidi.startsWithRtl(i) ? (t++, r++) : goog.i18n.bidi.isRequiredLtrRe_.test(i) ? n = !0 : goog.i18n.bidi.hasAnyLtr(i) ? r++ : goog.i18n.bidi.hasNumeralsRe_.test(i) && (n = !0)
            }
            return 0 == r ? n ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : t / r > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
        },goog.i18n.bidi.detectRtlDirectionality = function (e, o) {
            return goog.i18n.bidi.estimateDirection(e, o) == goog.i18n.bidi.Dir.RTL
        },goog.i18n.bidi.setElementDirAndAlign = function (e, o) {
            e && (o = goog.i18n.bidi.toDir(o)) && (e.style.textAlign = o == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, e.dir = o == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
        },goog.i18n.bidi.setElementDirByTextDirectionality = function (e, o) {
            switch (goog.i18n.bidi.estimateDirection(o)) {
                case goog.i18n.bidi.Dir.LTR:
                    e.dir = "ltr";
                    break;
                case goog.i18n.bidi.Dir.RTL:
                    e.dir = "rtl";
                    break;
                default:
                    e.removeAttribute("dir")
            }
        },goog.i18n.bidi.DirectionalString = function () {
        },goog.html.TrustedResourceUrl = function () {
            this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "", this.trustedURL_ = null, this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        },goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0,goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
        },goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,goog.html.TrustedResourceUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR
        },goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (e, o) {
            var t = goog.html.TrustedResourceUrl.unwrap(this),
                r = (t = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(t))[3] || "";
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", t[2] || "", e) + goog.html.TrustedResourceUrl.stringifyParams_("#", r, o))
        },goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function () {
            return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
        }),goog.html.TrustedResourceUrl.unwrap = function (e) {
            return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e).toString()
        },goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (e) {
            return e instanceof goog.html.TrustedResourceUrl && e.constructor === goog.html.TrustedResourceUrl && e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + e + "' of type " + goog.typeOf(e)), "type_error:TrustedResourceUrl")
        },goog.html.TrustedResourceUrl.unwrapTrustedURL = function (e) {
            return e.trustedURL_ ? e.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(e)
        },goog.html.TrustedResourceUrl.format = function (e, o) {
            var t = goog.string.Const.unwrap(e);
            if (!goog.html.TrustedResourceUrl.BASE_URL_.test(t)) throw Error("Invalid TrustedResourceUrl format: " + t);
            return e = t.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, (function (e, r) {
                if (!Object.prototype.hasOwnProperty.call(o, r)) throw Error('Found marker, "' + r + '", in format string, "' + t + '", but no valid label mapping found in args: ' + JSON.stringify(o));
                return (e = o[r]) instanceof goog.string.Const ? goog.string.Const.unwrap(e) : encodeURIComponent(String(e))
            })), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g,goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,goog.html.TrustedResourceUrl.formatWithParams = function (e, o, t, r) {
            return goog.html.TrustedResourceUrl.format(e, o).cloneWithParams(t, r)
        },goog.html.TrustedResourceUrl.fromConstant = function (e) {
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
        },goog.html.TrustedResourceUrl.fromConstants = function (e) {
            for (var o = "", t = 0; t < e.length; t++) o += goog.string.Const.unwrap(e[t]);
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function (e) {
            var o = new goog.html.TrustedResourceUrl;
            return o.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(e) : e, goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (o.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e)), o
        },goog.html.TrustedResourceUrl.stringifyParams_ = function (e, o, t) {
            if (null == t) return o;
            if (goog.isString(t)) return t ? e + encodeURIComponent(t) : "";
            for (var r in t) {
                var n = t[r];
                n = goog.isArray(n) ? n : [n];
                for (var i = 0; i < n.length; i++) {
                    var s = n[i];
                    null != s && (o || (o = e), o += (o.length > e.length ? "&" : "") + encodeURIComponent(r) + "=" + encodeURIComponent(String(s)))
                }
            }
            return o
        },goog.string.internal = {},goog.string.internal.startsWith = function (e, o) {
            return 0 == e.lastIndexOf(o, 0)
        },goog.string.internal.endsWith = function (e, o) {
            var t = e.length - o.length;
            return 0 <= t && e.indexOf(o, t) == t
        },goog.string.internal.caseInsensitiveStartsWith = function (e, o) {
            return 0 == goog.string.internal.caseInsensitiveCompare(o, e.substr(0, o.length))
        },goog.string.internal.caseInsensitiveEndsWith = function (e, o) {
            return 0 == goog.string.internal.caseInsensitiveCompare(o, e.substr(e.length - o.length, o.length))
        },goog.string.internal.caseInsensitiveEquals = function (e, o) {
            return e.toLowerCase() == o.toLowerCase()
        },goog.string.internal.isEmptyOrWhitespace = function (e) {
            return /^[\s\xa0]*$/.test(e)
        },goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function (e) {
            return e.trim()
        } : function (e) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
        },goog.string.internal.caseInsensitiveCompare = function (e, o) {
            return (e = String(e).toLowerCase()) < (o = String(o).toLowerCase()) ? -1 : e == o ? 0 : 1
        },goog.string.internal.newLineToBr = function (e, o) {
            return e.replace(/(\r\n|\r|\n)/g, o ? "<br />" : "<br>")
        },goog.string.internal.htmlEscape = function (e, o) {
            if (o) e = e.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;"); else {
                if (!goog.string.internal.ALL_RE_.test(e)) return e;
                -1 != e.indexOf("&") && (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.internal.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.internal.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\0") && (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"))
            }
            return e
        },goog.string.internal.AMP_RE_ = /&/g,goog.string.internal.LT_RE_ = /</g,goog.string.internal.GT_RE_ = />/g,goog.string.internal.QUOT_RE_ = /"/g,goog.string.internal.SINGLE_QUOTE_RE_ = /'/g,goog.string.internal.NULL_RE_ = /\x00/g,goog.string.internal.ALL_RE_ = /[\x00&<>"']/,goog.string.internal.whitespaceEscape = function (e, o) {
            return goog.string.internal.newLineToBr(e.replace(/  /g, " &#160;"), o)
        },goog.string.internal.contains = function (e, o) {
            return -1 != e.indexOf(o)
        },goog.string.internal.caseInsensitiveContains = function (e, o) {
            return goog.string.internal.contains(e.toLowerCase(), o.toLowerCase())
        },goog.string.internal.compareVersions = function (e, o) {
            var t = 0;
            e = goog.string.internal.trim(String(e)).split("."), o = goog.string.internal.trim(String(o)).split(".");
            for (var r = Math.max(e.length, o.length), n = 0; 0 == t && n < r; n++) {
                var i = e[n] || "", s = o[n] || "";
                do {
                    if (i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == i[0].length && 0 == s[0].length) break;
                    t = 0 == i[1].length ? 0 : parseInt(i[1], 10);
                    var g = 0 == s[1].length ? 0 : parseInt(s[1], 10);
                    t = goog.string.internal.compareElements_(t, g) || goog.string.internal.compareElements_(0 == i[2].length, 0 == s[2].length) || goog.string.internal.compareElements_(i[2], s[2]), i = i[3], s = s[3]
                } while (0 == t)
            }
            return t
        },goog.string.internal.compareElements_ = function (e, o) {
            return e < o ? -1 : e > o ? 1 : 0
        },goog.html.SafeUrl = function () {
            this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "", this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        },goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez",goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0,goog.html.SafeUrl.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
        },goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0,goog.html.SafeUrl.prototype.getDirection = function () {
            return goog.i18n.bidi.Dir.LTR
        },goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function () {
            return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
        }),goog.html.SafeUrl.unwrap = function (e) {
            return goog.html.SafeUrl.unwrapTrustedURL(e).toString()
        },goog.html.SafeUrl.unwrapTrustedURL = function (e) {
            return e instanceof goog.html.SafeUrl && e.constructor === goog.html.SafeUrl && e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_ : (goog.asserts.fail("expected object of type SafeUrl, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeUrl")
        },goog.html.SafeUrl.fromConstant = function (e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
        },goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,goog.html.SafeUrl.isSafeMimeType = function (e) {
            return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e)
        },goog.html.SafeUrl.fromBlob = function (e) {
            return e = goog.html.SAFE_MIME_TYPE_PATTERN_.test(e.type) ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,goog.html.SafeUrl.fromDataUrl = function (e) {
            var o = (e = e.replace(/(%0A|%0D)/g, "")).match(goog.html.DATA_URL_PATTERN_);
            return o = o && goog.html.SAFE_MIME_TYPE_PATTERN_.test(o[1]), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(o ? e : goog.html.SafeUrl.INNOCUOUS_STRING)
        },goog.html.SafeUrl.fromTelUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "tel:") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,goog.html.SafeUrl.fromSipUrl = function (e) {
            return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeUrl.fromFacebookMessengerUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "fb-messenger://share") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeUrl.fromWhatsAppUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "whatsapp://send") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeUrl.fromSmsUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeUrl.isSmsUrlBodyValid_ = function (e) {
            var o = e.indexOf("#");
            if (0 < o && (e = e.substring(0, o)), !(o = e.match(/[?&]body=/gi))) return !0;
            if (1 < o.length) return !1;
            if (!(e = e.match(/[?&]body=([^&]*)/)[1])) return !0;
            try {
                decodeURIComponent(e)
            } catch (t) {
                return !1
            }
            return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)
        },goog.html.SafeUrl.fromSshUrl = function (e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (e, o) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, e, o)
        },goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (e, o) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, e, o)
        },goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (e, o) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, e, o)
        },goog.html.SafeUrl.sanitizeExtensionUrl_ = function (e, o, t) {
            return (e = e.exec(o)) ? (e = e[1], -1 == (t instanceof goog.string.Const ? [goog.string.Const.unwrap(t)] : t.map((function (e) {
                return goog.string.Const.unwrap(e)
            }))).indexOf(e) && (o = goog.html.SafeUrl.INNOCUOUS_STRING)) : o = goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.SafeUrl.fromTrustedResourceUrl = function (e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(e))
        },goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_,goog.html.SafeUrl.sanitize = function (e) {
            return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), goog.html.SAFE_URL_PATTERN_.test(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))
        },goog.html.SafeUrl.sanitizeAssertUnchanged = function (e, o) {
            return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), o && /^data:/i.test(e) && (o = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e ? o : (goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(e), "%s does not match the safe URL pattern", e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)))
        },goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function (e) {
            var o = new goog.html.SafeUrl;
            return o.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e) : e, o
        },goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),goog.html.SafeStyle = function () {
            this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "", this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        },goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0,goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},goog.html.SafeStyle.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyle.EMPTY : (goog.asserts.assert(goog.string.internal.endsWith(e, ";"), "Last character of style string is not ';': " + e), goog.asserts.assert(goog.string.internal.contains(e, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + e), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))
        },goog.html.SafeStyle.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
        },goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function () {
            return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
        }),goog.html.SafeStyle.unwrap = function (e) {
            return e instanceof goog.html.SafeStyle && e.constructor === goog.html.SafeStyle && e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyle, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeStyle")
        },goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function (e) {
            return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(e)
        },goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e, this
        },goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez",goog.html.SafeStyle.create = function (e) {
            var o, t = "";
            for (o in e) {
                if (!/^[-_a-zA-Z0-9]+$/.test(o)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + o);
                var r = e[o];
                null != r && (t += o + ":" + (r = goog.isArray(r) ? goog.array.map(r, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(r)) + ";")
            }
            return t ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t) : goog.html.SafeStyle.EMPTY
        },goog.html.SafeStyle.sanitizePropertyValue_ = function (e) {
            if (e instanceof goog.html.SafeUrl) return 'url("' + goog.html.SafeUrl.unwrap(e).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (e = e instanceof goog.string.Const ? goog.string.Const.unwrap(e) : goog.html.SafeStyle.sanitizePropertyValueString_(String(e)), /[{;}]/.test(e)) throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [e]);
            return e
        },goog.html.SafeStyle.sanitizePropertyValueString_ = function (e) {
            var o = e.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
            return goog.html.SafeStyle.VALUE_RE_.test(o) ? goog.html.SafeStyle.COMMENT_RE_.test(e) ? (goog.asserts.fail("String value disallows comments, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING) : goog.html.SafeStyle.hasBalancedQuotes_(e) ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e) ? goog.html.SafeStyle.sanitizeUrl_(e) : (goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value requires balanced quotes, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING)
        },goog.html.SafeStyle.hasBalancedQuotes_ = function (e) {
            for (var o = !0, t = !0, r = 0; r < e.length; r++) {
                var n = e.charAt(r);
                "'" == n && t ? o = !o : '"' == n && o && (t = !t)
            }
            return o && t
        },goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (e) {
            for (var o = !0, t = /^[-_a-zA-Z0-9]$/, r = 0; r < e.length; r++) {
                var n = e.charAt(r);
                if ("]" == n) {
                    if (o) return !1;
                    o = !0
                } else if ("[" == n) {
                    if (!o) return !1;
                    o = !1
                } else if (!o && !t.test(n)) return !1
            }
            return o
        },goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]",goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"),goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,goog.html.SafeStyle.COMMENT_RE_ = /\/\*/,goog.html.SafeStyle.sanitizeUrl_ = function (e) {
            return e.replace(goog.html.SafeStyle.URL_RE_, (function (e, o, t, r) {
                var n = "";
                return t = t.replace(/^(['"])(.*)\1$/, (function (e, o, t) {
                    return n = o, t
                })), e = goog.html.SafeUrl.sanitize(t).getTypedStringValue(), o + n + e + n + r
            }))
        },goog.html.SafeStyle.concat = function (e) {
            var o = "", t = function (e) {
                goog.isArray(e) ? goog.array.forEach(e, t) : o += goog.html.SafeStyle.unwrap(e)
            };
            return goog.array.forEach(arguments, t), o ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o) : goog.html.SafeStyle.EMPTY
        },goog.html.SafeStyleSheet = function () {
            this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "", this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        },goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0,goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},goog.html.SafeStyleSheet.createRule = function (e, o) {
            if (goog.string.internal.contains(e, "<")) throw Error("Selector does not allow '<', got: " + e);
            var t = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(t)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + e);
            if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(t)) throw Error("() and [] in selector must be balanced, got: " + e);
            return o instanceof goog.html.SafeStyle || (o = goog.html.SafeStyle.create(o)), e = e + "{" + goog.html.SafeStyle.unwrap(o).replace(/</g, "\\3C ") + "}", goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)
        },goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (e) {
            for (var o = {"(": ")", "[": "]"}, t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                if (o[n]) t.push(o[n]); else if (goog.object.contains(o, n) && t.pop() != n) return !1
            }
            return 0 == t.length
        },goog.html.SafeStyleSheet.concat = function (e) {
            var o = "", t = function (e) {
                goog.isArray(e) ? goog.array.forEach(e, t) : o += goog.html.SafeStyleSheet.unwrap(e)
            };
            return goog.array.forEach(arguments, t), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.SafeStyleSheet.fromConstant = function (e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyleSheet.EMPTY : (goog.asserts.assert(!goog.string.internal.contains(e, "<"), "Forbidden '<' character in style sheet string: " + e), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))
        },goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
        },goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function () {
            return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
        }),goog.html.SafeStyleSheet.unwrap = function (e) {
            return e instanceof goog.html.SafeStyleSheet && e.constructor === goog.html.SafeStyleSheet && e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyleSheet, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeStyleSheet")
        },goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function (e) {
            return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(e)
        },goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e) {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e, this
        },goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),goog.labs = {},goog.labs.userAgent = {},goog.labs.userAgent.util = {},goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
            var e = goog.labs.userAgent.util.getNavigator_();
            return e && (e = e.userAgent) ? e : ""
        },goog.labs.userAgent.util.getNavigator_ = function () {
            return goog.global.navigator
        },goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(),goog.labs.userAgent.util.setUserAgent = function (e) {
            goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
        },goog.labs.userAgent.util.getUserAgent = function () {
            return goog.labs.userAgent.util.userAgent_
        },goog.labs.userAgent.util.matchUserAgent = function (e) {
            var o = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.contains(o, e)
        },goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
            var o = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.caseInsensitiveContains(o, e)
        },goog.labs.userAgent.util.extractVersionTuples = function (e) {
            for (var o, t = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = []; o = t.exec(e);) r.push([o[1], o[2], o[3] || void 0]);
            return r
        },goog.labs.userAgent.browser = {},goog.labs.userAgent.browser.matchOpera_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Opera")
        },goog.labs.userAgent.browser.matchIE_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
        },goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
        },goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edg/")
        },goog.labs.userAgent.browser.matchOperaChromium_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("OPR")
        },goog.labs.userAgent.browser.matchFirefox_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS")
        },goog.labs.userAgent.browser.matchSafari_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
        },goog.labs.userAgent.browser.matchCoast_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Coast")
        },goog.labs.userAgent.browser.matchIosWebview_ = function () {
            return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
        },goog.labs.userAgent.browser.matchChrome_ = function () {
            return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_()
        },goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
        },goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_,goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_,goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_,goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_,goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_,goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_,goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_,goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_,goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_,goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_,goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_,goog.labs.userAgent.browser.isSilk = function () {
            return goog.labs.userAgent.util.matchUserAgent("Silk")
        },goog.labs.userAgent.browser.getVersion = function () {
            function e(e) {
                return e = goog.array.find(e, r), t[e] || ""
            }

            var o = goog.labs.userAgent.util.getUserAgent();
            if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(o);
            o = goog.labs.userAgent.util.extractVersionTuples(o);
            var t = {};
            goog.array.forEach(o, (function (e) {
                t[e[0]] = e[1]
            }));
            var r = goog.partial(goog.object.containsKey, t);
            return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? e(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? e(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS"]) : (o = o[2]) && o[1] || ""
        },goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
            return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
        },goog.labs.userAgent.browser.getIEVersion_ = function (e) {
            var o = /rv: *([\d\.]*)/.exec(e);
            if (o && o[1]) return o[1];
            o = "";
            var t = /MSIE +([\d\.]+)/.exec(e);
            if (t && t[1]) if (e = /Trident\/(\d.\d)/.exec(e), "7.0" == t[1]) if (e && e[1]) switch (e[1]) {
                case"4.0":
                    o = "8.0";
                    break;
                case"5.0":
                    o = "9.0";
                    break;
                case"6.0":
                    o = "10.0";
                    break;
                case"7.0":
                    o = "11.0"
            } else o = "7.0"; else o = t[1];
            return o
        },goog.html.SafeHtml = function () {
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "", this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_, this.dir_ = null
        },goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0,goog.html.SafeHtml.prototype.getDirection = function () {
            return this.dir_
        },goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0,goog.html.SafeHtml.prototype.getTypedStringValue = function () {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
        },goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function () {
            return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
        }),goog.html.SafeHtml.unwrap = function (e) {
            return goog.html.SafeHtml.unwrapTrustedHTML(e).toString()
        },goog.html.SafeHtml.unwrapTrustedHTML = function (e) {
            return e instanceof goog.html.SafeHtml && e.constructor === goog.html.SafeHtml && e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeHtml, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeHtml")
        },goog.html.SafeHtml.htmlEscape = function (e) {
            if (e instanceof goog.html.SafeHtml) return e;
            var o = "object" == typeof e, t = null;
            return o && e.implementsGoogI18nBidiDirectionalString && (t = e.getDirection()), e = o && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(e), t)
        },goog.html.SafeHtml.htmlEscapePreservingNewlines = function (e) {
            return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
        },goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (e) {
            return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
        },goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape,goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/,goog.html.SafeHtml.URL_ATTRIBUTES_ = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },goog.html.SafeHtml.create = function (e, o, t) {
            return goog.html.SafeHtml.verifyTagName(String(e)), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(e), o, t)
        },goog.html.SafeHtml.verifyTagName = function (e) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e)) throw Error("Invalid tag name <" + e + ">.");
            if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.")
        },goog.html.SafeHtml.createIframe = function (e, o, t, r) {
            e && goog.html.TrustedResourceUrl.unwrap(e);
            var n = {};
            return n.src = e || null, n.srcdoc = o && goog.html.SafeHtml.unwrap(o), e = goog.html.SafeHtml.combineAttributes(n, {sandbox: ""}, t), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, r)
        },goog.html.SafeHtml.createSandboxIframe = function (e, o, t, r) {
            if (!goog.html.SafeHtml.canUseSandboxIframe()) throw Error("The browser does not support sandboxed iframes.");
            var n = {};
            return n.src = e ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)) : null, n.srcdoc = o || null, n.sandbox = "", e = goog.html.SafeHtml.combineAttributes(n, {}, t), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, r)
        },goog.html.SafeHtml.canUseSandboxIframe = function () {
            return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype
        },goog.html.SafeHtml.createScriptSrc = function (e, o) {
            return goog.html.TrustedResourceUrl.unwrap(e), e = goog.html.SafeHtml.combineAttributes({src: e}, {}, o), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", e)
        },goog.html.SafeHtml.createScript = function (e, o) {
            for (var t in o) {
                var r = t.toLowerCase();
                if ("language" == r || "src" == r || "text" == r || "type" == r) throw Error('Cannot set "' + r + '" attribute')
            }
            for (t = "", e = goog.array.concat(e), r = 0; r < e.length; r++) t += goog.html.SafeScript.unwrap(e[r]);
            return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", o, e)
        },goog.html.SafeHtml.createStyle = function (e, o) {
            o = goog.html.SafeHtml.combineAttributes({type: "text/css"}, {}, o);
            var t = "";
            e = goog.array.concat(e);
            for (var r = 0; r < e.length; r++) t += goog.html.SafeStyleSheet.unwrap(e[r]);
            return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", o, e)
        },goog.html.SafeHtml.createMetaRefresh = function (e, o) {
            return e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)), (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(e, ";") && (e = "'" + e.replace(/'/g, "%27") + "'"), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
                "http-equiv": "refresh",
                content: (o || 0) + "; url=" + e
            })
        },goog.html.SafeHtml.getAttrNameAndValue_ = function (e, o, t) {
            if (t instanceof goog.string.Const) t = goog.string.Const.unwrap(t); else if ("style" == o.toLowerCase()) t = goog.html.SafeHtml.getStyleValue_(t); else {
                if (/^on/i.test(o)) throw Error('Attribute "' + o + '" requires goog.string.Const value, "' + t + '" given.');
                if (o.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) if (t instanceof goog.html.TrustedResourceUrl) t = goog.html.TrustedResourceUrl.unwrap(t); else if (t instanceof goog.html.SafeUrl) t = goog.html.SafeUrl.unwrap(t); else {
                    if (!goog.isString(t)) throw Error('Attribute "' + o + '" on tag "' + e + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + t + '" given.');
                    t = goog.html.SafeUrl.sanitize(t).getTypedStringValue()
                }
            }
            return t.implementsGoogStringTypedString && (t = t.getTypedStringValue()), goog.asserts.assert(goog.isString(t) || goog.isNumber(t), "String or number value expected, got " + typeof t + " with value: " + t), o + '="' + goog.string.internal.htmlEscape(String(t)) + '"'
        },goog.html.SafeHtml.getStyleValue_ = function (e) {
            if (!goog.isObject(e)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e);
            return e instanceof goog.html.SafeStyle || (e = goog.html.SafeStyle.create(e)), goog.html.SafeStyle.unwrap(e)
        },goog.html.SafeHtml.createWithDir = function (e, o, t, r) {
            return (o = goog.html.SafeHtml.create(o, t, r)).dir_ = e, o
        },goog.html.SafeHtml.join = function (e, o) {
            var t = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection(), r = [], n = function (e) {
                goog.isArray(e) ? goog.array.forEach(e, n) : (e = goog.html.SafeHtml.htmlEscape(e), r.push(goog.html.SafeHtml.unwrap(e)), e = e.getDirection(), t == goog.i18n.bidi.Dir.NEUTRAL ? t = e : e != goog.i18n.bidi.Dir.NEUTRAL && t != e && (t = null))
            };
            return goog.array.forEach(o, n), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r.join(goog.html.SafeHtml.unwrap(e)), t)
        },goog.html.SafeHtml.concat = function (e) {
            return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments))
        },goog.html.SafeHtml.concatWithDir = function (e, o) {
            var t = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
            return t.dir_ = e, t
        },goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {},goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function (e, o) {
            return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(e, o)
        },goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function (e, o) {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(e) : e, this.dir_ = o, this
        },goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function (e, o, t) {
            var r = null, n = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, o);
            return goog.isDefAndNotNull(t) ? goog.isArray(t) || (t = [t]) : t = [], goog.dom.tags.isVoidTag(e.toLowerCase()) ? (goog.asserts.assert(!t.length, "Void tag <" + e + "> does not allow content."), n += ">") : (r = goog.html.SafeHtml.concat(t), n += ">" + goog.html.SafeHtml.unwrap(r) + "</" + e + ">", r = r.getDirection()), (e = o && o.dir) && (r = /^(ltr|rtl|auto)$/i.test(e) ? goog.i18n.bidi.Dir.NEUTRAL : null), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, r)
        },goog.html.SafeHtml.stringifyAttributes = function (e, o) {
            var t = "";
            if (o) for (var r in o) {
                if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r)) throw Error('Invalid attribute name "' + r + '".');
                var n = o[r];
                goog.isDefAndNotNull(n) && (t += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, r, n))
            }
            return t
        },goog.html.SafeHtml.combineAttributes = function (e, o, t) {
            var r, n = {};
            for (r in e) goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"), n[r] = e[r];
            for (r in o) goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"), n[r] = o[r];
            for (r in t) {
                var i = r.toLowerCase();
                if (i in e) throw Error('Cannot override "' + i + '" attribute, got "' + r + '" with value "' + t[r] + '"');
                i in o && delete n[i], n[r] = t[r]
            }
            return n
        },goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL),goog.html.uncheckedconversions = {},goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function (e, o, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, t || null)
        },goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function (e, o) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function (e, o) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function (e, o) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function (e, o) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(o)
        },goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function (e, o) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(o)
        },goog.dom.safe = {},goog.dom.safe.InsertAdjacentHtmlPosition = {
            AFTERBEGIN: "afterbegin",
            AFTEREND: "afterend",
            BEFOREBEGIN: "beforebegin",
            BEFOREEND: "beforeend"
        },goog.dom.safe.insertAdjacentHtml = function (e, o, t) {
            e.insertAdjacentHTML(o, goog.html.SafeHtml.unwrapTrustedHTML(t))
        },goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue((function () {
            if (goog.DEBUG && "undefined" == typeof document) return !1;
            var e = document.createElement("div"), o = document.createElement("div");
            return o.appendChild(document.createElement("div")), e.appendChild(o), !(goog.DEBUG && !e.firstChild) && (o = e.firstChild.firstChild, e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY), !o.parentElement)
        })),goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (e, o) {
            if (goog.dom.safe.isInnerHtmlCleanupRecursive_()) for (; e.lastChild;) e.removeChild(e.lastChild);
            e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(o)
        },goog.dom.safe.setInnerHtml = function (e, o) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var t = e.tagName.toUpperCase();
                if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[t]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".")
            }
            goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, o)
        },goog.dom.safe.setOuterHtml = function (e, o) {
            e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(o)
        },goog.dom.safe.setFormElementAction = function (e, o) {
            o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), goog.dom.asserts.assertIsHTMLFormElement(e).action = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setButtonFormAction = function (e, o) {
            o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), goog.dom.asserts.assertIsHTMLButtonElement(e).formAction = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setInputFormAction = function (e, o) {
            o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), goog.dom.asserts.assertIsHTMLInputElement(e).formAction = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setStyle = function (e, o) {
            e.style.cssText = goog.html.SafeStyle.unwrap(o)
        },goog.dom.safe.documentWrite = function (e, o) {
            e.write(goog.html.SafeHtml.unwrapTrustedHTML(o))
        },goog.dom.safe.setAnchorHref = function (e, o) {
            goog.dom.asserts.assertIsHTMLAnchorElement(e), o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), e.href = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setImageSrc = function (e, o) {
            if (goog.dom.asserts.assertIsHTMLImageElement(e), !(o instanceof goog.html.SafeUrl)) {
                var t = /^data:image\//i.test(o);
                o = goog.html.SafeUrl.sanitizeAssertUnchanged(o, t)
            }
            e.src = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setAudioSrc = function (e, o) {
            if (goog.dom.asserts.assertIsHTMLAudioElement(e), !(o instanceof goog.html.SafeUrl)) {
                var t = /^data:audio\//i.test(o);
                o = goog.html.SafeUrl.sanitizeAssertUnchanged(o, t)
            }
            e.src = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setVideoSrc = function (e, o) {
            if (goog.dom.asserts.assertIsHTMLVideoElement(e), !(o instanceof goog.html.SafeUrl)) {
                var t = /^data:video\//i.test(o);
                o = goog.html.SafeUrl.sanitizeAssertUnchanged(o, t)
            }
            e.src = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setEmbedSrc = function (e, o) {
            goog.dom.asserts.assertIsHTMLEmbedElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(o)
        },goog.dom.safe.setFrameSrc = function (e, o) {
            goog.dom.asserts.assertIsHTMLFrameElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setIframeSrc = function (e, o) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(o)
        },goog.dom.safe.setIframeSrcdoc = function (e, o) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e), e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(o)
        },goog.dom.safe.setLinkHrefAndRel = function (e, o, t) {
            goog.dom.asserts.assertIsHTMLLinkElement(e), e.rel = t, goog.string.internal.caseInsensitiveContains(t, "stylesheet") ? (goog.asserts.assert(o instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), e.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(o)) : e.href = o instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(o) : o instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(o) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(o))
        },goog.dom.safe.setObjectData = function (e, o) {
            goog.dom.asserts.assertIsHTMLObjectElement(e), e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(o)
        },goog.dom.safe.setScriptSrc = function (e, o) {
            goog.dom.asserts.assertIsHTMLScriptElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(o), (o = goog.getScriptNonce()) && e.setAttribute("nonce", o)
        },goog.dom.safe.setScriptContent = function (e, o) {
            goog.dom.asserts.assertIsHTMLScriptElement(e), e.text = goog.html.SafeScript.unwrapTrustedScript(o), (o = goog.getScriptNonce()) && e.setAttribute("nonce", o)
        },goog.dom.safe.setLocationHref = function (e, o) {
            goog.dom.asserts.assertIsLocation(e), o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), e.href = goog.html.SafeUrl.unwrapTrustedURL(o)
        },goog.dom.safe.assignLocation = function (e, o) {
            goog.dom.asserts.assertIsLocation(e), o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), e.assign(goog.html.SafeUrl.unwrapTrustedURL(o))
        },goog.dom.safe.replaceLocation = function (e, o) {
            goog.dom.asserts.assertIsLocation(e), o = o instanceof goog.html.SafeUrl ? o : goog.html.SafeUrl.sanitizeAssertUnchanged(o), e.replace(goog.html.SafeUrl.unwrapTrustedURL(o))
        },goog.dom.safe.openInWindow = function (e, o, t, r, n) {
            return e = e instanceof goog.html.SafeUrl ? e : goog.html.SafeUrl.sanitizeAssertUnchanged(e), (o || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(e), t ? goog.string.Const.unwrap(t) : "", r, n)
        },goog.dom.safe.parseFromStringHtml = function (e, o) {
            return goog.dom.safe.parseFromString(e, o, "text/html")
        },goog.dom.safe.parseFromString = function (e, o, t) {
            return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(o), t)
        },goog.dom.safe.createImageFromBlob = function (e) {
            if (!/^image\/.*/g.test(e.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
            var o = goog.global.URL.createObjectURL(e);
            return (e = new goog.global.Image).onload = function () {
                goog.global.URL.revokeObjectURL(o)
            }, goog.dom.safe.setImageSrc(e, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), o)), e
        },goog.string.DETECT_DOUBLE_ESCAPING = !1,goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1,goog.string.Unicode = {NBSP: "\xa0"},goog.string.startsWith = goog.string.internal.startsWith,goog.string.endsWith = goog.string.internal.endsWith,goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith,goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith,goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals,goog.string.subs = function (e, o) {
            for (var t = e.split("%s"), r = "", n = Array.prototype.slice.call(arguments, 1); n.length && 1 < t.length;) r += t.shift() + n.shift();
            return r + t.join("%s")
        },goog.string.collapseWhitespace = function (e) {
            return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        },goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace,goog.string.isEmptyString = function (e) {
            return 0 == e.length
        },goog.string.isEmpty = goog.string.isEmptyOrWhitespace,goog.string.isEmptyOrWhitespaceSafe = function (e) {
            return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
        },goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe,goog.string.isBreakingWhitespace = function (e) {
            return !/[^\t\n\r ]/.test(e)
        },goog.string.isAlpha = function (e) {
            return !/[^a-zA-Z]/.test(e)
        },goog.string.isNumeric = function (e) {
            return !/[^0-9]/.test(e)
        },goog.string.isAlphaNumeric = function (e) {
            return !/[^a-zA-Z0-9]/.test(e)
        },goog.string.isSpace = function (e) {
            return " " == e
        },goog.string.isUnicodeChar = function (e) {
            return 1 == e.length && " " <= e && "~" >= e || "\x80" <= e && "\ufffd" >= e
        },goog.string.stripNewlines = function (e) {
            return e.replace(/(\r\n|\r|\n)+/g, " ")
        },goog.string.canonicalizeNewlines = function (e) {
            return e.replace(/(\r\n|\r|\n)/g, "\n")
        },goog.string.normalizeWhitespace = function (e) {
            return e.replace(/\xa0|\s/g, " ")
        },goog.string.normalizeSpaces = function (e) {
            return e.replace(/\xa0|[ \t]+/g, " ")
        },goog.string.collapseBreakingSpaces = function (e) {
            return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        },goog.string.trim = goog.string.internal.trim,goog.string.trimLeft = function (e) {
            return e.replace(/^[\s\xa0]+/, "")
        },goog.string.trimRight = function (e) {
            return e.replace(/[\s\xa0]+$/, "")
        },goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare,goog.string.numberAwareCompare_ = function (e, o, t) {
            if (e == o) return 0;
            if (!e) return -1;
            if (!o) return 1;
            for (var r = e.toLowerCase().match(t), n = o.toLowerCase().match(t), i = Math.min(r.length, n.length), s = 0; s < i; s++) {
                t = r[s];
                var g = n[s];
                if (t != g) return e = parseInt(t, 10), !isNaN(e) && (o = parseInt(g, 10), !isNaN(o) && e - o) ? e - o : t < g ? -1 : 1
            }
            return r.length != n.length ? r.length - n.length : e < o ? -1 : 1
        },goog.string.intAwareCompare = function (e, o) {
            return goog.string.numberAwareCompare_(e, o, /\d+|\D+/g)
        },goog.string.floatAwareCompare = function (e, o) {
            return goog.string.numberAwareCompare_(e, o, /\d+|\.\d+|\D+/g)
        },goog.string.numerateCompare = goog.string.floatAwareCompare,goog.string.urlEncode = function (e) {
            return encodeURIComponent(String(e))
        },goog.string.urlDecode = function (e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        },goog.string.newLineToBr = goog.string.internal.newLineToBr,goog.string.htmlEscape = function (e, o) {
            return e = goog.string.internal.htmlEscape(e, o), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;")), e
        },goog.string.E_RE_ = /e/g,goog.string.unescapeEntities = function (e) {
            return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
        },goog.string.unescapeEntitiesWithDocument = function (e, o) {
            return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, o) : e
        },goog.string.unescapeEntitiesUsingDom_ = function (e, o) {
            var t = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'},
                r = o ? o.createElement("div") : goog.global.document.createElement("div");
            return e.replace(goog.string.HTML_ENTITY_PATTERN_, (function (e, o) {
                var n = t[e];
                return n || ("#" == o.charAt(0) && (o = Number("0" + o.substr(1)), isNaN(o) || (n = String.fromCharCode(o))), n || (goog.dom.safe.setInnerHtml(r, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), e + " ")), n = r.firstChild.nodeValue.slice(0, -1)), t[e] = n)
            }))
        },goog.string.unescapePureXmlEntities_ = function (e) {
            return e.replace(/&([^;]+);/g, (function (e, o) {
                switch (o) {
                    case"amp":
                        return "&";
                    case"lt":
                        return "<";
                    case"gt":
                        return ">";
                    case"quot":
                        return '"';
                    default:
                        return "#" != o.charAt(0) || (o = Number("0" + o.substr(1)), isNaN(o)) ? e : String.fromCharCode(o)
                }
            }))
        },goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,goog.string.whitespaceEscape = function (e, o) {
            return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), o)
        },goog.string.preserveSpaces = function (e) {
            return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
        },goog.string.stripQuotes = function (e, o) {
            for (var t = o.length, r = 0; r < t; r++) {
                var n = 1 == t ? o : o.charAt(r);
                if (e.charAt(0) == n && e.charAt(e.length - 1) == n) return e.substring(1, e.length - 1)
            }
            return e
        },goog.string.truncate = function (e, o, t) {
            return t && (e = goog.string.unescapeEntities(e)), e.length > o && (e = e.substring(0, o - 3) + "..."), t && (e = goog.string.htmlEscape(e)), e
        },goog.string.truncateMiddle = function (e, o, t, r) {
            if (t && (e = goog.string.unescapeEntities(e)), r && e.length > o) {
                r > o && (r = o);
                var n = e.length - r;
                e = e.substring(0, o - r) + "..." + e.substring(n)
            } else e.length > o && (r = Math.floor(o / 2), n = e.length - r, e = e.substring(0, r + o % 2) + "..." + e.substring(n));
            return t && (e = goog.string.htmlEscape(e)), e
        },goog.string.specialEscapeChars_ = {
            "\0": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },goog.string.jsEscapeCache_ = {"'": "\\'"},goog.string.quote = function (e) {
            e = String(e);
            for (var o = ['"'], t = 0; t < e.length; t++) {
                var r = e.charAt(t), n = r.charCodeAt(0);
                o[t + 1] = goog.string.specialEscapeChars_[r] || (31 < n && 127 > n ? r : goog.string.escapeChar(r))
            }
            return o.push('"'), o.join("")
        },goog.string.escapeString = function (e) {
            for (var o = [], t = 0; t < e.length; t++) o[t] = goog.string.escapeChar(e.charAt(t));
            return o.join("")
        },goog.string.escapeChar = function (e) {
            if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
            if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
            var o = e.charCodeAt(0);
            if (31 < o && 127 > o) var t = e; else 256 > o ? (t = "\\x", (16 > o || 256 < o) && (t += "0")) : (t = "\\u", 4096 > o && (t += "0")), t += o.toString(16).toUpperCase();
            return goog.string.jsEscapeCache_[e] = t
        },goog.string.contains = goog.string.internal.contains,goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains,goog.string.countOf = function (e, o) {
            return e && o ? e.split(o).length - 1 : 0
        },goog.string.removeAt = function (e, o, t) {
            var r = e;
            return 0 <= o && o < e.length && 0 < t && (r = e.substr(0, o) + e.substr(o + t, e.length - o - t)), r
        },goog.string.remove = function (e, o) {
            return e.replace(o, "")
        },goog.string.removeAll = function (e, o) {
            return o = new RegExp(goog.string.regExpEscape(o), "g"), e.replace(o, "")
        },goog.string.replaceAll = function (e, o, t) {
            return o = new RegExp(goog.string.regExpEscape(o), "g"), e.replace(o, t.replace(/\$/g, "$$$$"))
        },goog.string.regExpEscape = function (e) {
            return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },goog.string.repeat = String.prototype.repeat ? function (e, o) {
            return e.repeat(o)
        } : function (e, o) {
            return Array(o + 1).join(e)
        },goog.string.padNumber = function (e, o, t) {
            return -1 == (t = (e = goog.isDef(t) ? e.toFixed(t) : String(e)).indexOf(".")) && (t = e.length), goog.string.repeat("0", Math.max(0, o - t)) + e
        },goog.string.makeSafe = function (e) {
            return null == e ? "" : String(e)
        },goog.string.buildString = function (e) {
            return Array.prototype.join.call(arguments, "")
        },goog.string.getRandomString = function () {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
        },goog.string.compareVersions = goog.string.internal.compareVersions,goog.string.hashCode = function (e) {
            for (var o = 0, t = 0; t < e.length; ++t) o = 31 * o + e.charCodeAt(t) >>> 0;
            return o
        },goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,goog.string.createUniqueString = function () {
            return "goog_" + goog.string.uniqueStringCounter_++
        },goog.string.toNumber = function (e) {
            var o = Number(e);
            return 0 == o && goog.string.isEmptyOrWhitespace(e) ? NaN : o
        },goog.string.isLowerCamelCase = function (e) {
            return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
        },goog.string.isUpperCamelCase = function (e) {
            return /^([A-Z][a-z]*)+$/.test(e)
        },goog.string.toCamelCase = function (e) {
            return String(e).replace(/\-([a-z])/g, (function (e, o) {
                return o.toUpperCase()
            }))
        },goog.string.toSelectorCase = function (e) {
            return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
        },goog.string.toTitleCase = function (e, o) {
            return o = goog.isString(o) ? goog.string.regExpEscape(o) : "\\s", e.replace(new RegExp("(^" + (o ? "|[" + o + "]+" : "") + ")([a-z])", "g"), (function (e, o, t) {
                return o + t.toUpperCase()
            }))
        },goog.string.capitalize = function (e) {
            return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
        },goog.string.parseInt = function (e) {
            return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
        },goog.string.splitLimit = function (e, o, t) {
            e = e.split(o);
            for (var r = []; 0 < t && e.length;) r.push(e.shift()), t--;
            return e.length && r.push(e.join(o)), r
        },goog.string.lastComponent = function (e, o) {
            if (!o) return e;
            "string" == typeof o && (o = [o]);
            for (var t = -1, r = 0; r < o.length; r++) if ("" != o[r]) {
                var n = e.lastIndexOf(o[r]);
                n > t && (t = n)
            }
            return -1 == t ? e : e.slice(t + 1)
        },goog.string.editDistance = function (e, o) {
            var t = [], r = [];
            if (e == o) return 0;
            if (!e.length || !o.length) return Math.max(e.length, o.length);
            for (var n = 0; n < o.length + 1; n++) t[n] = n;
            for (n = 0; n < e.length; n++) {
                r[0] = n + 1;
                for (var i = 0; i < o.length; i++) r[i + 1] = Math.min(r[i] + 1, t[i + 1] + 1, t[i] + Number(e[n] != o[i]));
                for (i = 0; i < t.length; i++) t[i] = r[i]
            }
            return r[o.length]
        },goog.labs.userAgent.engine = {},goog.labs.userAgent.engine.isPresto = function () {
            return goog.labs.userAgent.util.matchUserAgent("Presto")
        },goog.labs.userAgent.engine.isTrident = function () {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
        },goog.labs.userAgent.engine.isEdge = function () {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
        },goog.labs.userAgent.engine.isWebKit = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
        },goog.labs.userAgent.engine.isGecko = function () {
            return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
        },goog.labs.userAgent.engine.getVersion = function () {
            var e = goog.labs.userAgent.util.getUserAgent();
            if (e) {
                e = goog.labs.userAgent.util.extractVersionTuples(e);
                var o, t = goog.labs.userAgent.engine.getEngineTuple_(e);
                if (t) return "Gecko" == t[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox") : t[1];
                if ((e = e[0]) && (o = e[2]) && (o = /Trident\/([^\s;]+)/.exec(o))) return o[1]
            }
            return ""
        },goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
            if (!goog.labs.userAgent.engine.isEdge()) return e[1];
            for (var o = 0; o < e.length; o++) {
                var t = e[o];
                if ("Edge" == t[0]) return t
            }
        },goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
            return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
        },goog.labs.userAgent.engine.getVersionForKey_ = function (e, o) {
            return (e = goog.array.find(e, (function (e) {
                return o == e[0]
            }))) && e[1] || ""
        },goog.labs.userAgent.platform = {},goog.labs.userAgent.platform.isAndroid = function () {
            return goog.labs.userAgent.util.matchUserAgent("Android")
        },goog.labs.userAgent.platform.isIpod = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPod")
        },goog.labs.userAgent.platform.isIphone = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
        },goog.labs.userAgent.platform.isIpad = function () {
            return goog.labs.userAgent.util.matchUserAgent("iPad")
        },goog.labs.userAgent.platform.isIos = function () {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
        },goog.labs.userAgent.platform.isMacintosh = function () {
            return goog.labs.userAgent.util.matchUserAgent("Macintosh")
        },goog.labs.userAgent.platform.isLinux = function () {
            return goog.labs.userAgent.util.matchUserAgent("Linux")
        },goog.labs.userAgent.platform.isWindows = function () {
            return goog.labs.userAgent.util.matchUserAgent("Windows")
        },goog.labs.userAgent.platform.isChromeOS = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrOS")
        },goog.labs.userAgent.platform.isChromecast = function () {
            return goog.labs.userAgent.util.matchUserAgent("CrKey")
        },goog.labs.userAgent.platform.isKaiOS = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")
        },goog.labs.userAgent.platform.isGo2Phone = function () {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP")
        },goog.labs.userAgent.platform.getVersion = function () {
            var e = goog.labs.userAgent.util.getUserAgent(), o = "";
            return goog.labs.userAgent.platform.isWindows() ? o = (e = (o = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? o = (e = (o = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? o = (e = (o = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isKaiOS() ? o = (e = (o = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1] : goog.labs.userAgent.platform.isAndroid() ? o = (e = (o = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (o = (e = (o = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]), o || ""
        },goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
            return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
        },goog.reflect = {},goog.reflect.object = function (e, o) {
            return o
        },goog.reflect.objectProperty = function (e, o) {
            return e
        },goog.reflect.sinkValue = function (e) {
            return goog.reflect.sinkValue[" "](e), e
        },goog.reflect.sinkValue[" "] = goog.nullFunction,goog.reflect.canAccessProperty = function (e, o) {
            try {
                return goog.reflect.sinkValue(e[o]), !0
            } catch (t) {
            }
            return !1
        },goog.reflect.cache = function (e, o, t, r) {
            return r = r ? r(o) : o, Object.prototype.hasOwnProperty.call(e, r) ? e[r] : e[r] = t(o)
        },goog.userAgent = {},goog.userAgent.ASSUME_IE = !1,goog.userAgent.ASSUME_EDGE = !1,goog.userAgent.ASSUME_GECKO = !1,goog.userAgent.ASSUME_WEBKIT = !1,goog.userAgent.ASSUME_MOBILE_WEBKIT = !1,goog.userAgent.ASSUME_OPERA = !1,goog.userAgent.ASSUME_ANY_VERSION = !1,goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA,goog.userAgent.getUserAgentString = function () {
            return goog.labs.userAgent.util.getUserAgent()
        },goog.userAgent.getNavigatorTyped = function () {
            return goog.global.navigator || null
        },goog.userAgent.getNavigator = function () {
            return goog.userAgent.getNavigatorTyped()
        },goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(),goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(),goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(),goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE,goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(),goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(),goog.userAgent.isMobile_ = function () {
            return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
        },goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(),goog.userAgent.SAFARI = goog.userAgent.WEBKIT,goog.userAgent.determinePlatform_ = function () {
            var e = goog.userAgent.getNavigatorTyped();
            return e && e.platform || ""
        },goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(),goog.userAgent.ASSUME_MAC = !1,goog.userAgent.ASSUME_WINDOWS = !1,goog.userAgent.ASSUME_LINUX = !1,goog.userAgent.ASSUME_X11 = !1,goog.userAgent.ASSUME_ANDROID = !1,goog.userAgent.ASSUME_IPHONE = !1,goog.userAgent.ASSUME_IPAD = !1,goog.userAgent.ASSUME_IPOD = !1,goog.userAgent.ASSUME_KAIOS = !1,goog.userAgent.ASSUME_GO2PHONE = !1,goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD,goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(),goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(),goog.userAgent.isLegacyLinux_ = function () {
            return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
        },goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(),goog.userAgent.isX11_ = function () {
            var e = goog.userAgent.getNavigatorTyped();
            return !!e && goog.string.contains(e.appVersion || "", "X11")
        },goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(),goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(),goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(),goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod(),goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos(),goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS(),goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone(),goog.userAgent.determineVersion_ = function () {
            var e = "", o = goog.userAgent.getVersionRegexResult_();
            return o && (e = o ? o[1] : ""), goog.userAgent.IE && (null != (o = goog.userAgent.getDocumentMode_()) && o > parseFloat(e)) ? String(o) : e
        },goog.userAgent.getVersionRegexResult_ = function () {
            var e = goog.userAgent.getUserAgentString();
            return goog.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : goog.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0
        },goog.userAgent.getDocumentMode_ = function () {
            var e = goog.global.document;
            return e ? e.documentMode : void 0
        },goog.userAgent.VERSION = goog.userAgent.determineVersion_(),goog.userAgent.compare = function (e, o) {
            return goog.string.compareVersions(e, o)
        },goog.userAgent.isVersionOrHigherCache_ = {},goog.userAgent.isVersionOrHigher = function (e) {
            return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, e, (function () {
                return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
            }))
        },goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher,goog.userAgent.isDocumentModeOrHigher = function (e) {
            return Number(goog.userAgent.DOCUMENT_MODE) >= e
        },goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher,goog.userAgent.DOCUMENT_MODE = function () {
            if (goog.global.document && goog.userAgent.IE) return goog.userAgent.getDocumentMode_()
        }(),goog.userAgent.product = {},goog.userAgent.product.ASSUME_FIREFOX = !1,goog.userAgent.product.ASSUME_IPHONE = !1,goog.userAgent.product.ASSUME_IPAD = !1,goog.userAgent.product.ASSUME_ANDROID = !1,goog.userAgent.product.ASSUME_CHROME = !1,goog.userAgent.product.ASSUME_SAFARI = !1,goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI,goog.userAgent.product.OPERA = goog.userAgent.OPERA,goog.userAgent.product.IE = goog.userAgent.IE,goog.userAgent.product.EDGE = goog.userAgent.EDGE,goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(),goog.userAgent.product.isIphoneOrIpod_ = function () {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
        },goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(),goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(),goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(),goog.userAgent.product.isSafariDesktop_ = function () {
            return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
        },goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(),goog.crypt.base64 = {},goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=",goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.",goog.crypt.base64.Alphabet = {
            DEFAULT: 0,
            NO_PADDING: 1,
            WEBSAFE: 2,
            WEBSAFE_DOT_PADDING: 3,
            WEBSAFE_NO_PADDING: 4
        },goog.crypt.base64.paddingChars_ = "=.",goog.crypt.base64.isPadding_ = function (e) {
            return goog.string.contains(goog.crypt.base64.paddingChars_, e)
        },goog.crypt.base64.byteToCharMaps_ = {};
        goog.crypt.base64.charToByteMap_ = null, goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA, goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa, goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob, goog.crypt.base64.encodeByteArray = function (e, o) {
            goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"), void 0 === o && (o = goog.crypt.base64.Alphabet.DEFAULT), goog.crypt.base64.init_(), o = goog.crypt.base64.byteToCharMaps_[o];
            for (var t = [], r = 0; r < e.length; r += 3) {
                var n = e[r], i = r + 1 < e.length, s = i ? e[r + 1] : 0, g = r + 2 < e.length, a = g ? e[r + 2] : 0,
                    p = n >> 2;
                n = (3 & n) << 4 | s >> 4, s = (15 & s) << 2 | a >> 6, a &= 63, g || (a = 64, i || (s = 64)), t.push(o[p], o[n], o[s] || "", o[a] || "")
            }
            return t.join("")
        }, goog.crypt.base64.encodeString = function (e, o) {
            return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !o ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), o)
        }, goog.crypt.base64.decodeString = function (e, o) {
            if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !o) return goog.global.atob(e);
            var t = "";
            return goog.crypt.base64.decodeStringInternal_(e, (function (e) {
                t += String.fromCharCode(e)
            })), t
        }, goog.crypt.base64.decodeStringToByteArray = function (e, o) {
            var t = [];
            return goog.crypt.base64.decodeStringInternal_(e, (function (e) {
                t.push(e)
            })), t
        }, goog.crypt.base64.decodeStringToUint8Array = function (e) {
            goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
            var o = e.length, t = 3 * o / 4;
            t % 3 ? t = Math.floor(t) : goog.crypt.base64.isPadding_(e[o - 1]) && (t = goog.crypt.base64.isPadding_(e[o - 2]) ? t - 2 : t - 1);
            var r = new Uint8Array(t), n = 0;
            return goog.crypt.base64.decodeStringInternal_(e, (function (e) {
                r[n++] = e
            })), r.subarray(0, n)
        }, goog.crypt.base64.decodeStringInternal_ = function (e, o) {
            function t(o) {
                for (; r < e.length;) {
                    var t = e.charAt(r++), n = goog.crypt.base64.charToByteMap_[t];
                    if (null != n) return n;
                    if (!goog.string.isEmptyOrWhitespace(t)) throw Error("Unknown base64 encoding at char: " + t)
                }
                return o
            }

            goog.crypt.base64.init_();
            for (var r = 0; ;) {
                var n = t(-1), i = t(0), s = t(64), g = t(64);
                if (64 === g && -1 === n) break;
                o(n << 2 | i >> 4), 64 != s && (o(i << 4 & 240 | s >> 2), 64 != g && o(s << 6 & 192 | g))
            }
        }, goog.crypt.base64.init_ = function () {
            if (!goog.crypt.base64.charToByteMap_) {
                goog.crypt.base64.charToByteMap_ = {};
                for (var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), o = ["+/=", "+/", "-_=", "-_.", "-_"], t = 0; 5 > t; t++) {
                    var r = e.concat(o[t].split(""));
                    goog.crypt.base64.byteToCharMaps_[t] = r;
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n], s = goog.crypt.base64.charToByteMap_[i];
                        void 0 === s ? goog.crypt.base64.charToByteMap_[i] = n : goog.asserts.assert(s === n)
                    }
                }
            }
        }, jspb.utils = {}, jspb.utils.split64Low = 0, jspb.utils.split64High = 0, jspb.utils.splitUint64 = function (e) {
            var o = e >>> 0;
            e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32) >>> 0, jspb.utils.split64Low = o, jspb.utils.split64High = e
        }, jspb.utils.splitInt64 = function (e) {
            var o = 0 > e, t = (e = Math.abs(e)) >>> 0;
            e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32), e >>>= 0, o && (e = ~e >>> 0, 4294967295 < (t = 1 + (~t >>> 0)) && (t = 0, 4294967295 < ++e && (e = 0))), jspb.utils.split64Low = t, jspb.utils.split64High = e
        }, jspb.utils.splitZigzag64 = function (e) {
            var o = 0 > e;
            e = 2 * Math.abs(e), jspb.utils.splitUint64(e), e = jspb.utils.split64Low;
            var t = jspb.utils.split64High;
            o && (0 == e ? 0 == t ? t = e = 4294967295 : (t--, e = 4294967295) : e--), jspb.utils.split64Low = e, jspb.utils.split64High = t
        }, jspb.utils.splitFloat32 = function (e) {
            var o = 0 > e ? 1 : 0;
            if (0 === (e = o ? -e : e)) 0 < 1 / e ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648); else if (isNaN(e)) jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647; else if (e > jspb.BinaryConstants.FLOAT32_MAX) jspb.utils.split64High = 0, jspb.utils.split64Low = (o << 31 | 2139095040) >>> 0; else if (e < jspb.BinaryConstants.FLOAT32_MIN) e = Math.round(e / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (o << 31 | e) >>> 0; else {
                var t = Math.floor(Math.log(e) / Math.LN2);
                e *= Math.pow(2, -t), 16777216 <= (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++t, jspb.utils.split64High = 0, jspb.utils.split64Low = (o << 31 | t + 127 << 23 | 8388607 & e) >>> 0
            }
        }, jspb.utils.splitFloat64 = function (e) {
            var o = 0 > e ? 1 : 0;
            if (0 === (e = o ? -e : e)) jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648, jspb.utils.split64Low = 0; else if (isNaN(e)) jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295; else if (e > jspb.BinaryConstants.FLOAT64_MAX) jspb.utils.split64High = (o << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0; else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
                var t = e / Math.pow(2, -1074);
                e = t / jspb.BinaryConstants.TWO_TO_32, jspb.utils.split64High = (o << 31 | e) >>> 0, jspb.utils.split64Low = t >>> 0
            } else {
                var r = 0;
                if (2 <= (t = e)) for (; 2 <= t && 1023 > r;) r++, t /= 2; else for (; 1 > t && -1022 < r;) t *= 2, r--;
                e = (t = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20 & 1048575, t = t * jspb.BinaryConstants.TWO_TO_52 >>> 0, jspb.utils.split64High = (o << 31 | r + 1023 << 20 | e) >>> 0, jspb.utils.split64Low = t
            }
        }, jspb.utils.splitHash64 = function (e) {
            var o = e.charCodeAt(0), t = e.charCodeAt(1), r = e.charCodeAt(2), n = e.charCodeAt(3), i = e.charCodeAt(4),
                s = e.charCodeAt(5), g = e.charCodeAt(6);
            e = e.charCodeAt(7), jspb.utils.split64Low = o + (t << 8) + (r << 16) + (n << 24) >>> 0, jspb.utils.split64High = i + (s << 8) + (g << 16) + (e << 24) >>> 0
        }, jspb.utils.joinUint64 = function (e, o) {
            return o * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0)
        }, jspb.utils.joinInt64 = function (e, o) {
            var t = 2147483648 & o;
            return t && (o = ~o >>> 0, 0 == (e = 1 + ~e >>> 0) && (o = o + 1 >>> 0)), e = jspb.utils.joinUint64(e, o), t ? -e : e
        }, jspb.utils.toZigzag64 = function (e, o, t) {
            var r = o >> 31;
            return t(e << 1 ^ r, (o << 1 | e >>> 31) ^ r)
        }, jspb.utils.joinZigzag64 = function (e, o) {
            return jspb.utils.fromZigzag64(e, o, jspb.utils.joinInt64)
        }, jspb.utils.fromZigzag64 = function (e, o, t) {
            var r = -(1 & e);
            return t((e >>> 1 | o << 31) ^ r, o >>> 1 ^ r)
        }, jspb.utils.joinFloat32 = function (e, o) {
            o = 2 * (e >> 31) + 1;
            var t = e >>> 23 & 255;
            return e &= 8388607, 255 == t ? e ? NaN : Infinity * o : 0 == t ? o * Math.pow(2, -149) * e : o * Math.pow(2, t - 150) * (e + Math.pow(2, 23))
        }, jspb.utils.joinFloat64 = function (e, o) {
            var t = 2 * (o >> 31) + 1, r = o >>> 20 & 2047;
            return e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & o) + e, 2047 == r ? e ? NaN : Infinity * t : 0 == r ? t * Math.pow(2, -1074) * e : t * Math.pow(2, r - 1075) * (e + jspb.BinaryConstants.TWO_TO_52)
        }, jspb.utils.joinHash64 = function (e, o) {
            return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, o >>> 0 & 255, o >>> 8 & 255, o >>> 16 & 255, o >>> 24 & 255)
        }, jspb.utils.DIGITS = "0123456789abcdef".split(""), jspb.utils.ZERO_CHAR_CODE_ = 48, jspb.utils.A_CHAR_CODE_ = 97, jspb.utils.joinUnsignedDecimalString = function (e, o) {
            function t(e, o) {
                return e = e ? String(e) : "", o ? "0000000".slice(e.length) + e : e
            }

            if (2097151 >= o) return "" + jspb.utils.joinUint64(e, o);
            var r = (e >>> 24 | o << 8) >>> 0 & 16777215;
            return e = (16777215 & e) + 6777216 * r + 6710656 * (o = o >> 16 & 65535), r += 8147497 * o, o *= 2, 1e7 <= e && (r += Math.floor(e / 1e7), e %= 1e7), 1e7 <= r && (o += Math.floor(r / 1e7), r %= 1e7), t(o, 0) + t(r, o) + t(e, 1)
        }, jspb.utils.joinSignedDecimalString = function (e, o) {
            var t = 2147483648 & o;
            return t && (o = ~o + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0), e = jspb.utils.joinUnsignedDecimalString(e, o), t ? "-" + e : e
        }, jspb.utils.hash64ToDecimalString = function (e, o) {
            jspb.utils.splitHash64(e), e = jspb.utils.split64Low;
            var t = jspb.utils.split64High;
            return o ? jspb.utils.joinSignedDecimalString(e, t) : jspb.utils.joinUnsignedDecimalString(e, t)
        }, jspb.utils.hash64ArrayToDecimalStrings = function (e, o) {
            for (var t = Array(e.length), r = 0; r < e.length; r++) t[r] = jspb.utils.hash64ToDecimalString(e[r], o);
            return t
        }, jspb.utils.decimalStringToHash64 = function (e) {
            function o(e, o) {
                for (var t = 0; 8 > t && (1 !== e || 0 < o); t++) o = e * r[t] + o, r[t] = 255 & o, o >>>= 8
            }

            goog.asserts.assert(0 < e.length);
            var t = !1;
            "-" === e[0] && (t = !0, e = e.slice(1));
            for (var r = [0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < e.length; n++) o(10, e.charCodeAt(n) - jspb.utils.ZERO_CHAR_CODE_);
            return t && (function () {
                for (var e = 0; 8 > e; e++) r[e] = 255 & ~r[e]
            }(), o(1, 1)), goog.crypt.byteArrayToString(r)
        }, jspb.utils.splitDecimalString = function (e) {
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
        }, jspb.utils.toHexDigit_ = function (e) {
            return String.fromCharCode(10 > e ? jspb.utils.ZERO_CHAR_CODE_ + e : jspb.utils.A_CHAR_CODE_ - 10 + e)
        }, jspb.utils.fromHexCharCode_ = function (e) {
            return e >= jspb.utils.A_CHAR_CODE_ ? e - jspb.utils.A_CHAR_CODE_ + 10 : e - jspb.utils.ZERO_CHAR_CODE_
        }, jspb.utils.hash64ToHexString = function (e) {
            var o = Array(18);
            o[0] = "0", o[1] = "x";
            for (var t = 0; 8 > t; t++) {
                var r = e.charCodeAt(7 - t);
                o[2 * t + 2] = jspb.utils.toHexDigit_(r >> 4), o[2 * t + 3] = jspb.utils.toHexDigit_(15 & r)
            }
            return o.join("")
        }, jspb.utils.hexStringToHash64 = function (e) {
            e = e.toLowerCase(), goog.asserts.assert(18 == e.length), goog.asserts.assert("0" == e[0]), goog.asserts.assert("x" == e[1]);
            for (var o = "", t = 0; 8 > t; t++) {
                var r = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * t + 2)),
                    n = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * t + 3));
                o = String.fromCharCode(16 * r + n) + o
            }
            return o
        }, jspb.utils.hash64ToNumber = function (e, o) {
            jspb.utils.splitHash64(e), e = jspb.utils.split64Low;
            var t = jspb.utils.split64High;
            return o ? jspb.utils.joinInt64(e, t) : jspb.utils.joinUint64(e, t)
        }, jspb.utils.numberToHash64 = function (e) {
            return jspb.utils.splitInt64(e), jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.utils.countVarints = function (e, o, t) {
            for (var r = 0, n = o; n < t; n++) r += e[n] >> 7;
            return t - o - r
        }, jspb.utils.countVarintFields = function (e, o, t, r) {
            var n = 0;
            if (128 > (r = 8 * r + jspb.BinaryConstants.WireType.VARINT)) for (; o < t && e[o++] == r;) for (n++; ;) {
                var i = e[o++];
                if (0 == (128 & i)) break
            } else for (; o < t;) {
                for (i = r; 128 < i;) {
                    if (e[o] != (127 & i | 128)) return n;
                    o++, i >>= 7
                }
                if (e[o++] != i) break;
                for (n++; 0 != (128 & (i = e[o++]));) ;
            }
            return n
        }, jspb.utils.countFixedFields_ = function (e, o, t, r, n) {
            var i = 0;
            if (128 > r) for (; o < t && e[o++] == r;) i++, o += n; else for (; o < t;) {
                for (var s = r; 128 < s;) {
                    if (e[o++] != (127 & s | 128)) return i;
                    s >>= 7
                }
                if (e[o++] != s) break;
                i++, o += n
            }
            return i
        }, jspb.utils.countFixed32Fields = function (e, o, t, r) {
            return jspb.utils.countFixedFields_(e, o, t, 8 * r + jspb.BinaryConstants.WireType.FIXED32, 4)
        }, jspb.utils.countFixed64Fields = function (e, o, t, r) {
            return jspb.utils.countFixedFields_(e, o, t, 8 * r + jspb.BinaryConstants.WireType.FIXED64, 8)
        }, jspb.utils.countDelimitedFields = function (e, o, t, r) {
            var n = 0;
            for (r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED; o < t;) {
                for (var i = r; 128 < i;) {
                    if (e[o++] != (127 & i | 128)) return n;
                    i >>= 7
                }
                if (e[o++] != i) break;
                n++;
                for (var s = 0, g = 1; s += (127 & (i = e[o++])) * g, g *= 128, 0 != (128 & i);) ;
                o += s
            }
            return n
        }, jspb.utils.debugBytesToTextFormat = function (e) {
            var o = '"';
            if (e) {
                e = jspb.utils.byteSourceToUint8Array(e);
                for (var t = 0; t < e.length; t++) o += "\\x", 16 > e[t] && (o += "0"), o += e[t].toString(16)
            }
            return o + '"'
        }, jspb.utils.debugScalarToTextFormat = function (e) {
            return "string" == typeof e ? goog.string.quote(e) : e.toString()
        }, jspb.utils.stringToByteArray = function (e) {
            for (var o = new Uint8Array(e.length), t = 0; t < e.length; t++) {
                var r = e.charCodeAt(t);
                if (255 < r) throw Error("Conversion error: string contains codepoint outside of byte range");
                o[t] = r
            }
            return o
        }, jspb.utils.byteSourceToUint8Array = function (e) {
            return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || "undefined" != typeof Buffer && e.constructor === Buffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Type not convertible to Uint8Array."), new Uint8Array(0))
        }, jspb.BinaryDecoder = function (e, o, t) {
            this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1, e && this.setBlock(e, o, t)
        }, jspb.BinaryDecoder.instanceCache_ = [], jspb.BinaryDecoder.alloc = function (e, o, t) {
            if (jspb.BinaryDecoder.instanceCache_.length) {
                var r = jspb.BinaryDecoder.instanceCache_.pop();
                return e && r.setBlock(e, o, t), r
            }
            return new jspb.BinaryDecoder(e, o, t)
        }, jspb.BinaryDecoder.prototype.free = function () {
            this.clear(), 100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this)
        }, jspb.BinaryDecoder.prototype.clone = function () {
            return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
        }, jspb.BinaryDecoder.prototype.clear = function () {
            this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1
        }, jspb.BinaryDecoder.prototype.getBuffer = function () {
            return this.bytes_
        }, jspb.BinaryDecoder.prototype.setBlock = function (e, o, t) {
            this.bytes_ = jspb.utils.byteSourceToUint8Array(e), this.start_ = void 0 !== o ? o : 0, this.end_ = void 0 !== t ? this.start_ + t : this.bytes_.length, this.cursor_ = this.start_
        }, jspb.BinaryDecoder.prototype.getEnd = function () {
            return this.end_
        }, jspb.BinaryDecoder.prototype.setEnd = function (e) {
            this.end_ = e
        }, jspb.BinaryDecoder.prototype.reset = function () {
            this.cursor_ = this.start_
        }, jspb.BinaryDecoder.prototype.getCursor = function () {
            return this.cursor_
        }, jspb.BinaryDecoder.prototype.setCursor = function (e) {
            this.cursor_ = e
        }, jspb.BinaryDecoder.prototype.advance = function (e) {
            this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_)
        }, jspb.BinaryDecoder.prototype.atEnd = function () {
            return this.cursor_ == this.end_
        }, jspb.BinaryDecoder.prototype.pastEnd = function () {
            return this.cursor_ > this.end_
        }, jspb.BinaryDecoder.prototype.getError = function () {
            return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
        }, jspb.BinaryDecoder.prototype.readSplitVarint64 = function (e) {
            for (var o = 128, t = 0, r = 0, n = 0; 4 > n && 128 <= o; n++) t |= (127 & (o = this.bytes_[this.cursor_++])) << 7 * n;
            if (128 <= o && (t |= (127 & (o = this.bytes_[this.cursor_++])) << 28, r |= (127 & o) >> 4), 128 <= o) for (n = 0; 5 > n && 128 <= o; n++) r |= (127 & (o = this.bytes_[this.cursor_++])) << 7 * n + 3;
            if (128 > o) return e(t >>> 0, r >>> 0);
            goog.asserts.fail("Failed to read varint, encoding is invalid."), this.error_ = !0
        }, jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (e) {
            return this.readSplitVarint64((function (o, t) {
                return jspb.utils.fromZigzag64(o, t, e)
            }))
        }, jspb.BinaryDecoder.prototype.readSplitFixed64 = function (e) {
            var o = this.bytes_, t = this.cursor_;
            this.cursor_ += 8;
            for (var r = 0, n = 0, i = t + 7; i >= t; i--) r = r << 8 | o[i], n = n << 8 | o[i + 4];
            return e(r, n)
        }, jspb.BinaryDecoder.prototype.skipVarint = function () {
            for (; 128 & this.bytes_[this.cursor_];) this.cursor_++;
            this.cursor_++
        }, jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
            for (; 128 < e;) this.cursor_--, e >>>= 7;
            this.cursor_--
        }, jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
            var e = this.bytes_, o = e[this.cursor_ + 0], t = 127 & o;
            return 128 > o ? (this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), t) : (t |= (127 & (o = e[this.cursor_ + 1])) << 7, 128 > o ? (this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), t) : (t |= (127 & (o = e[this.cursor_ + 2])) << 14, 128 > o ? (this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), t) : (t |= (127 & (o = e[this.cursor_ + 3])) << 21, 128 > o ? (this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), t) : (t |= (15 & (o = e[this.cursor_ + 4])) << 28, 128 > o ? (this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), t >>> 0) : (this.cursor_ += 5, 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && goog.asserts.assert(!1), goog.asserts.assert(this.cursor_ <= this.end_), t)))))
        }, jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32, jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
            return this.readUnsignedVarint32().toString()
        }, jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
            return this.readSignedVarint32().toString()
        }, jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
            var e = this.readUnsignedVarint32();
            return e >>> 1 ^ -(1 & e)
        }, jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinUint64)
        }, jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
            return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)
        }, jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinInt64)
        }, jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
            return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)
        }, jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
            return this.readSplitVarint64(jspb.utils.joinZigzag64)
        }, jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
            return this.readSplitZigzagVarint64(jspb.utils.joinHash64)
        }, jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
            return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)
        }, jspb.BinaryDecoder.prototype.readUint8 = function () {
            var e = this.bytes_[this.cursor_ + 0];
            return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e
        }, jspb.BinaryDecoder.prototype.readUint16 = function () {
            var e = this.bytes_[this.cursor_ + 0], o = this.bytes_[this.cursor_ + 1];
            return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | o << 8
        }, jspb.BinaryDecoder.prototype.readUint32 = function () {
            var e = this.bytes_[this.cursor_ + 0], o = this.bytes_[this.cursor_ + 1], t = this.bytes_[this.cursor_ + 2],
                r = this.bytes_[this.cursor_ + 3];
            return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | o << 8 | t << 16 | r << 24) >>> 0
        }, jspb.BinaryDecoder.prototype.readUint64 = function () {
            var e = this.readUint32(), o = this.readUint32();
            return jspb.utils.joinUint64(e, o)
        }, jspb.BinaryDecoder.prototype.readUint64String = function () {
            var e = this.readUint32(), o = this.readUint32();
            return jspb.utils.joinUnsignedDecimalString(e, o)
        }, jspb.BinaryDecoder.prototype.readInt8 = function () {
            var e = this.bytes_[this.cursor_ + 0];
            return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e << 24 >> 24
        }, jspb.BinaryDecoder.prototype.readInt16 = function () {
            var e = this.bytes_[this.cursor_ + 0], o = this.bytes_[this.cursor_ + 1];
            return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | o << 8) << 16 >> 16
        }, jspb.BinaryDecoder.prototype.readInt32 = function () {
            var e = this.bytes_[this.cursor_ + 0], o = this.bytes_[this.cursor_ + 1], t = this.bytes_[this.cursor_ + 2],
                r = this.bytes_[this.cursor_ + 3];
            return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | o << 8 | t << 16 | r << 24
        }, jspb.BinaryDecoder.prototype.readInt64 = function () {
            var e = this.readUint32(), o = this.readUint32();
            return jspb.utils.joinInt64(e, o)
        }, jspb.BinaryDecoder.prototype.readInt64String = function () {
            var e = this.readUint32(), o = this.readUint32();
            return jspb.utils.joinSignedDecimalString(e, o)
        }, jspb.BinaryDecoder.prototype.readFloat = function () {
            var e = this.readUint32();
            return jspb.utils.joinFloat32(e, 0)
        }, jspb.BinaryDecoder.prototype.readDouble = function () {
            var e = this.readUint32(), o = this.readUint32();
            return jspb.utils.joinFloat64(e, o)
        }, jspb.BinaryDecoder.prototype.readBool = function () {
            return !!this.bytes_[this.cursor_++]
        }, jspb.BinaryDecoder.prototype.readEnum = function () {
            return this.readSignedVarint32()
        },jspb.BinaryDecoder.prototype.readString = function (e) {
            var o = this.bytes_, t = this.cursor_;
            e = t + e;
            for (var r = [], n = ""; t < e;) {
                var i = o[t++];
                if (128 > i) r.push(i); else {
                    if (192 > i) continue;
                    if (224 > i) {
                        var s = o[t++];
                        r.push((31 & i) << 6 | 63 & s)
                    } else if (240 > i) {
                        s = o[t++];
                        var g = o[t++];
                        r.push((15 & i) << 12 | (63 & s) << 6 | 63 & g)
                    } else if (248 > i) {
                        i = (7 & i) << 18 | (63 & (s = o[t++])) << 12 | (63 & (g = o[t++])) << 6 | 63 & o[t++], i -= 65536, r.push(55296 + (i >> 10 & 1023), 56320 + (1023 & i))
                    }
                }
                8192 <= r.length && (n += String.fromCharCode.apply(null, r), r.length = 0)
            }
            return n += goog.crypt.byteArrayToString(r), this.cursor_ = t, n
        },jspb.BinaryDecoder.prototype.readStringWithLength = function () {
            var e = this.readUnsignedVarint32();
            return this.readString(e)
        },jspb.BinaryDecoder.prototype.readBytes = function (e) {
            if (0 > e || this.cursor_ + e > this.bytes_.length) return this.error_ = !0, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
            var o = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
            return this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_), o
        },jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
            return this.readSplitVarint64(jspb.utils.joinHash64)
        },jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
            var e = this.bytes_, o = this.cursor_, t = e[o + 0], r = e[o + 1], n = e[o + 2], i = e[o + 3], s = e[o + 4],
                g = e[o + 5], a = e[o + 6];
            return e = e[o + 7], this.cursor_ += 8, String.fromCharCode(t, r, n, i, s, g, a, e)
        },jspb.BinaryReader = function (e, o, t) {
            this.decoder_ = jspb.BinaryDecoder.alloc(e, o, t), this.fieldCursor_ = this.decoder_.getCursor(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null
        },jspb.BinaryReader.instanceCache_ = [],jspb.BinaryReader.alloc = function (e, o, t) {
            if (jspb.BinaryReader.instanceCache_.length) {
                var r = jspb.BinaryReader.instanceCache_.pop();
                return e && r.decoder_.setBlock(e, o, t), r
            }
            return new jspb.BinaryReader(e, o, t)
        },jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc,jspb.BinaryReader.prototype.free = function () {
            this.decoder_.clear(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null, 100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this)
        },jspb.BinaryReader.prototype.getFieldCursor = function () {
            return this.fieldCursor_
        },jspb.BinaryReader.prototype.getCursor = function () {
            return this.decoder_.getCursor()
        },jspb.BinaryReader.prototype.getBuffer = function () {
            return this.decoder_.getBuffer()
        },jspb.BinaryReader.prototype.getFieldNumber = function () {
            return this.nextField_
        },jspb.BinaryReader.prototype.getWireType = function () {
            return this.nextWireType_
        },jspb.BinaryReader.prototype.isDelimited = function () {
            return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
        },jspb.BinaryReader.prototype.isEndGroup = function () {
            return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
        },jspb.BinaryReader.prototype.getError = function () {
            return this.error_ || this.decoder_.getError()
        },jspb.BinaryReader.prototype.setBlock = function (e, o, t) {
            this.decoder_.setBlock(e, o, t), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
        },jspb.BinaryReader.prototype.reset = function () {
            this.decoder_.reset(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
        },jspb.BinaryReader.prototype.advance = function (e) {
            this.decoder_.advance(e)
        },jspb.BinaryReader.prototype.nextField = function () {
            if (this.decoder_.atEnd()) return !1;
            if (this.getError()) return goog.asserts.fail("Decoder hit an error"), !1;
            this.fieldCursor_ = this.decoder_.getCursor();
            var e = this.decoder_.readUnsignedVarint32(), o = e >>> 3;
            return (e &= 7) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (goog.asserts.fail("Invalid wire type: %s (at position %s)", e, this.fieldCursor_), this.error_ = !0, !1) : (this.nextField_ = o, this.nextWireType_ = e, !0)
        },jspb.BinaryReader.prototype.unskipHeader = function () {
            this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
        },jspb.BinaryReader.prototype.skipMatchingFields = function () {
            var e = this.nextField_;
            for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e;) this.skipField();
            this.decoder_.atEnd() || this.unskipHeader()
        },jspb.BinaryReader.prototype.skipVarintField = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint()
        },jspb.BinaryReader.prototype.skipDelimitedField = function () {
            if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED) goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField(); else {
                var e = this.decoder_.readUnsignedVarint32();
                this.decoder_.advance(e)
            }
        },jspb.BinaryReader.prototype.skipFixed32Field = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4)
        },jspb.BinaryReader.prototype.skipFixed64Field = function () {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8)
        },jspb.BinaryReader.prototype.skipGroup = function () {
            for (var e = this.nextField_; ;) {
                if (!this.nextField()) {
                    goog.asserts.fail("Unmatched start-group tag: stream EOF"), this.error_ = !0;
                    break
                }
                if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
                    this.nextField_ != e && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = !0);
                    break
                }
                this.skipField()
            }
        },jspb.BinaryReader.prototype.skipField = function () {
            switch (this.nextWireType_) {
                case jspb.BinaryConstants.WireType.VARINT:
                    this.skipVarintField();
                    break;
                case jspb.BinaryConstants.WireType.FIXED64:
                    this.skipFixed64Field();
                    break;
                case jspb.BinaryConstants.WireType.DELIMITED:
                    this.skipDelimitedField();
                    break;
                case jspb.BinaryConstants.WireType.FIXED32:
                    this.skipFixed32Field();
                    break;
                case jspb.BinaryConstants.WireType.START_GROUP:
                    this.skipGroup();
                    break;
                default:
                    goog.asserts.fail("Invalid wire encoding for field.")
            }
        },jspb.BinaryReader.prototype.registerReadCallback = function (e, o) {
            null === this.readCallbacks_ && (this.readCallbacks_ = {}), goog.asserts.assert(!this.readCallbacks_[e]), this.readCallbacks_[e] = o
        },jspb.BinaryReader.prototype.runReadCallback = function (e) {
            return goog.asserts.assert(null !== this.readCallbacks_), e = this.readCallbacks_[e], goog.asserts.assert(e), e(this)
        },jspb.BinaryReader.prototype.readAny = function (e) {
            this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
            var o = jspb.BinaryConstants.FieldType;
            switch (e) {
                case o.DOUBLE:
                    return this.readDouble();
                case o.FLOAT:
                    return this.readFloat();
                case o.INT64:
                    return this.readInt64();
                case o.UINT64:
                    return this.readUint64();
                case o.INT32:
                    return this.readInt32();
                case o.FIXED64:
                    return this.readFixed64();
                case o.FIXED32:
                    return this.readFixed32();
                case o.BOOL:
                    return this.readBool();
                case o.STRING:
                    return this.readString();
                case o.GROUP:
                    goog.asserts.fail("Group field type not supported in readAny()");
                case o.MESSAGE:
                    goog.asserts.fail("Message field type not supported in readAny()");
                case o.BYTES:
                    return this.readBytes();
                case o.UINT32:
                    return this.readUint32();
                case o.ENUM:
                    return this.readEnum();
                case o.SFIXED32:
                    return this.readSfixed32();
                case o.SFIXED64:
                    return this.readSfixed64();
                case o.SINT32:
                    return this.readSint32();
                case o.SINT64:
                    return this.readSint64();
                case o.FHASH64:
                    return this.readFixedHash64();
                case o.VHASH64:
                    return this.readVarintHash64();
                default:
                    goog.asserts.fail("Invalid field type in readAny()")
            }
            return 0
        },jspb.BinaryReader.prototype.readMessage = function (e, o) {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var t = this.decoder_.getEnd(), r = this.decoder_.readUnsignedVarint32();
            r = this.decoder_.getCursor() + r, this.decoder_.setEnd(r), o(e, this), this.decoder_.setCursor(r), this.decoder_.setEnd(t)
        },jspb.BinaryReader.prototype.readGroup = function (e, o, t) {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP), goog.asserts.assert(this.nextField_ == e), t(o, this), this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = !0)
        },jspb.BinaryReader.prototype.getFieldDecoder = function () {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32(), o = this.decoder_.getCursor(), t = o + e;
            return e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), o, e), this.decoder_.setCursor(t), e
        },jspb.BinaryReader.prototype.readInt32 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32()
        },jspb.BinaryReader.prototype.readInt32String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32String()
        },jspb.BinaryReader.prototype.readInt64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
        },jspb.BinaryReader.prototype.readInt64String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64String()
        },jspb.BinaryReader.prototype.readUint32 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32()
        },jspb.BinaryReader.prototype.readUint32String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32String()
        },jspb.BinaryReader.prototype.readUint64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64()
        },jspb.BinaryReader.prototype.readUint64String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64String()
        },jspb.BinaryReader.prototype.readSint32 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint32()
        },jspb.BinaryReader.prototype.readSint64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64()
        },jspb.BinaryReader.prototype.readSint64String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64String()
        },jspb.BinaryReader.prototype.readFixed32 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readUint32()
        },jspb.BinaryReader.prototype.readFixed64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64()
        },jspb.BinaryReader.prototype.readFixed64String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64String()
        },jspb.BinaryReader.prototype.readSfixed32 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32()
        },jspb.BinaryReader.prototype.readSfixed32String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32().toString()
        },jspb.BinaryReader.prototype.readSfixed64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64()
        },jspb.BinaryReader.prototype.readSfixed64String = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64String()
        },jspb.BinaryReader.prototype.readFloat = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readFloat()
        },jspb.BinaryReader.prototype.readDouble = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readDouble()
        },jspb.BinaryReader.prototype.readBool = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), !!this.decoder_.readUnsignedVarint32()
        },jspb.BinaryReader.prototype.readEnum = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
        },jspb.BinaryReader.prototype.readString = function () {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readString(e)
        },jspb.BinaryReader.prototype.readBytes = function () {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readBytes(e)
        },jspb.BinaryReader.prototype.readVarintHash64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readVarintHash64()
        },jspb.BinaryReader.prototype.readSintHash64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarintHash64()
        },jspb.BinaryReader.prototype.readSplitVarint64 = function (e) {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSplitVarint64(e)
        },jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (e) {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSplitVarint64((function (o, t) {
                return jspb.utils.fromZigzag64(o, t, e)
            }))
        },jspb.BinaryReader.prototype.readFixedHash64 = function () {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readFixedHash64()
        },jspb.BinaryReader.prototype.readSplitFixed64 = function (e) {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readSplitFixed64(e)
        },jspb.BinaryReader.prototype.readPackedField_ = function (e) {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var o = this.decoder_.readUnsignedVarint32();
            o = this.decoder_.getCursor() + o;
            for (var t = []; this.decoder_.getCursor() < o;) t.push(e.call(this.decoder_));
            return t
        },jspb.BinaryReader.prototype.readPackedInt32 = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint32)
        },jspb.BinaryReader.prototype.readPackedInt32String = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint32String)
        },jspb.BinaryReader.prototype.readPackedInt64 = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint64)
        },jspb.BinaryReader.prototype.readPackedInt64String = function () {
            return this.readPackedField_(this.decoder_.readSignedVarint64String)
        },jspb.BinaryReader.prototype.readPackedUint32 = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32)
        },jspb.BinaryReader.prototype.readPackedUint32String = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
        },jspb.BinaryReader.prototype.readPackedUint64 = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64)
        },jspb.BinaryReader.prototype.readPackedUint64String = function () {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
        },jspb.BinaryReader.prototype.readPackedSint32 = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint32)
        },jspb.BinaryReader.prototype.readPackedSint64 = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint64)
        },jspb.BinaryReader.prototype.readPackedSint64String = function () {
            return this.readPackedField_(this.decoder_.readZigzagVarint64String)
        },jspb.BinaryReader.prototype.readPackedFixed32 = function () {
            return this.readPackedField_(this.decoder_.readUint32)
        },jspb.BinaryReader.prototype.readPackedFixed64 = function () {
            return this.readPackedField_(this.decoder_.readUint64)
        },jspb.BinaryReader.prototype.readPackedFixed64String = function () {
            return this.readPackedField_(this.decoder_.readUint64String)
        },jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
            return this.readPackedField_(this.decoder_.readInt32)
        },jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
            return this.readPackedField_(this.decoder_.readInt64)
        },jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
            return this.readPackedField_(this.decoder_.readInt64String)
        },jspb.BinaryReader.prototype.readPackedFloat = function () {
            return this.readPackedField_(this.decoder_.readFloat)
        },jspb.BinaryReader.prototype.readPackedDouble = function () {
            return this.readPackedField_(this.decoder_.readDouble)
        },jspb.BinaryReader.prototype.readPackedBool = function () {
            return this.readPackedField_(this.decoder_.readBool)
        },jspb.BinaryReader.prototype.readPackedEnum = function () {
            return this.readPackedField_(this.decoder_.readEnum)
        },jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
            return this.readPackedField_(this.decoder_.readVarintHash64)
        },jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
            return this.readPackedField_(this.decoder_.readFixedHash64)
        },jspb.BinaryEncoder = function () {
            this.buffer_ = []
        },jspb.BinaryEncoder.prototype.length = function () {
            return this.buffer_.length
        },jspb.BinaryEncoder.prototype.end = function () {
            var e = this.buffer_;
            return this.buffer_ = [], e
        },jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, o) {
            for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(o == Math.floor(o)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_32); 0 < o || 127 < e;) this.buffer_.push(127 & e | 128), e = (e >>> 7 | o << 25) >>> 0, o >>>= 7;
            this.buffer_.push(e)
        },jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, o) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(o == Math.floor(o)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_32), this.writeUint32(e), this.writeUint32(o)
        },jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
            for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e;) this.buffer_.push(127 & e | 128), e >>>= 7;
            this.buffer_.push(e)
        },jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
            if (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 0 <= e) this.writeUnsignedVarint32(e); else {
                for (var o = 0; 9 > o; o++) this.buffer_.push(127 & e | 128), e >>= 7;
                this.buffer_.push(1)
            }
        },jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0)
        },jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitZigzag64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (e) {
            this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e))
        },jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (e) {
            var o = this;
            jspb.utils.splitHash64(e), jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, (function (e, t) {
                o.writeSplitVarint64(e >>> 0, t >>> 0)
            }))
        },jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && 256 > e), this.buffer_.push(e >>> 0 & 255)
        },jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && 65536 > e), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
        },jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
        },jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitUint64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-128 <= e && 128 > e), this.buffer_.push(e >>> 0 & 255)
        },jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-32768 <= e && 32768 > e), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
        },jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
        },jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeFloat = function (e) {
            goog.asserts.assert(Infinity === e || -Infinity === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX), jspb.utils.splitFloat32(e), this.writeUint32(jspb.utils.split64Low)
        },jspb.BinaryEncoder.prototype.writeDouble = function (e) {
            goog.asserts.assert(Infinity === e || -Infinity === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX), jspb.utils.splitFloat64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeBool = function (e) {
            goog.asserts.assert("boolean" == typeof e || "number" == typeof e), this.buffer_.push(e ? 1 : 0)
        },jspb.BinaryEncoder.prototype.writeEnum = function (e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32(e)
        },jspb.BinaryEncoder.prototype.writeBytes = function (e) {
            this.buffer_.push.apply(this.buffer_, e)
        },jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
            jspb.utils.splitHash64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
            jspb.utils.splitHash64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
        },jspb.BinaryEncoder.prototype.writeString = function (e) {
            for (var o = this.buffer_.length, t = 0; t < e.length; t++) {
                var r = e.charCodeAt(t);
                if (128 > r) this.buffer_.push(r); else if (2048 > r) this.buffer_.push(r >> 6 | 192), this.buffer_.push(63 & r | 128); else if (65536 > r) if (55296 <= r && 56319 >= r && t + 1 < e.length) {
                    var n = e.charCodeAt(t + 1);
                    56320 <= n && 57343 >= n && (r = 1024 * (r - 55296) + n - 56320 + 65536, this.buffer_.push(r >> 18 | 240), this.buffer_.push(r >> 12 & 63 | 128), this.buffer_.push(r >> 6 & 63 | 128), this.buffer_.push(63 & r | 128), t++)
                } else this.buffer_.push(r >> 12 | 224), this.buffer_.push(r >> 6 & 63 | 128), this.buffer_.push(63 & r | 128)
            }
            return this.buffer_.length - o
        },jspb.arith = {},jspb.arith.UInt64 = function (e, o) {
            this.lo = e, this.hi = o
        },jspb.arith.UInt64.prototype.cmp = function (e) {
            return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1
        },jspb.arith.UInt64.prototype.rightShift = function () {
            return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0)
        },jspb.arith.UInt64.prototype.leftShift = function () {
            return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0)
        },jspb.arith.UInt64.prototype.msb = function () {
            return !!(2147483648 & this.hi)
        },jspb.arith.UInt64.prototype.lsb = function () {
            return !!(1 & this.lo)
        },jspb.arith.UInt64.prototype.zero = function () {
            return 0 == this.lo && 0 == this.hi
        },jspb.arith.UInt64.prototype.add = function (e) {
            return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
        },jspb.arith.UInt64.prototype.sub = function (e) {
            return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
        },jspb.arith.UInt64.mul32x32 = function (e, o) {
            var t = 65535 & e, r = 65535 & o, n = o >>> 16;
            for (o = t * r + 65536 * (t * n & 65535) + 65536 * ((e >>>= 16) * r & 65535), t = e * n + (t * n >>> 16) + (e * r >>> 16); 4294967296 <= o;) o -= 4294967296, t += 1;
            return new jspb.arith.UInt64(o >>> 0, t >>> 0)
        },jspb.arith.UInt64.prototype.mul = function (e) {
            var o = jspb.arith.UInt64.mul32x32(this.lo, e);
            return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo, e.lo = 0, o.add(e)
        },jspb.arith.UInt64.prototype.div = function (e) {
            if (0 == e) return [];
            var o = new jspb.arith.UInt64(0, 0), t = new jspb.arith.UInt64(this.lo, this.hi);
            e = new jspb.arith.UInt64(e, 0);
            for (var r = new jspb.arith.UInt64(1, 0); !e.msb();) e = e.leftShift(), r = r.leftShift();
            for (; !r.zero();) 0 >= e.cmp(t) && (o = o.add(r), t = t.sub(e)), e = e.rightShift(), r = r.rightShift();
            return [o, t]
        },jspb.arith.UInt64.prototype.toString = function () {
            for (var e = "", o = this; !o.zero();) {
                var t = (o = o.div(10))[0];
                e = o[1].lo + e, o = t
            }
            return "" == e && (e = "0"), e
        },jspb.arith.UInt64.fromString = function (e) {
            for (var o = new jspb.arith.UInt64(0, 0), t = new jspb.arith.UInt64(0, 0), r = 0; r < e.length; r++) {
                if ("0" > e[r] || "9" < e[r]) return null;
                var n = parseInt(e[r], 10);
                t.lo = n, o = o.mul(10).add(t)
            }
            return o
        },jspb.arith.UInt64.prototype.clone = function () {
            return new jspb.arith.UInt64(this.lo, this.hi)
        },jspb.arith.Int64 = function (e, o) {
            this.lo = e, this.hi = o
        },jspb.arith.Int64.prototype.add = function (e) {
            return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
        },jspb.arith.Int64.prototype.sub = function (e) {
            return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
        },jspb.arith.Int64.prototype.clone = function () {
            return new jspb.arith.Int64(this.lo, this.hi)
        },jspb.arith.Int64.prototype.toString = function () {
            var e = 0 != (2147483648 & this.hi), o = new jspb.arith.UInt64(this.lo, this.hi);
            return e && (o = new jspb.arith.UInt64(0, 0).sub(o)), (e ? "-" : "") + o.toString()
        },jspb.arith.Int64.fromString = function (e) {
            var o = 0 < e.length && "-" == e[0];
            return o && (e = e.substring(1)), null === (e = jspb.arith.UInt64.fromString(e)) ? null : (o && (e = new jspb.arith.UInt64(0, 0).sub(e)), new jspb.arith.Int64(e.lo, e.hi))
        },jspb.BinaryWriter = function () {
            this.blocks_ = [], this.totalLength_ = 0, this.encoder_ = new jspb.BinaryEncoder, this.bookmarks_ = []
        },jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
            var o = this.encoder_.end();
            this.blocks_.push(o), this.blocks_.push(e), this.totalLength_ += o.length + e.length
        },jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
            return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), e = this.encoder_.end(), this.blocks_.push(e), this.totalLength_ += e.length, e.push(this.totalLength_), e
        },jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
            var o = e.pop();
            for (o = this.totalLength_ + this.encoder_.length() - o, goog.asserts.assert(0 <= o); 127 < o;) e.push(127 & o | 128), o >>>= 7, this.totalLength_++;
            e.push(o), this.totalLength_++
        },jspb.BinaryWriter.prototype.writeSerializedMessage = function (e, o, t) {
            this.appendUint8Array_(e.subarray(o, t))
        },jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (e, o, t) {
            null != e && null != o && null != t && this.writeSerializedMessage(e, o, t)
        },jspb.BinaryWriter.prototype.reset = function () {
            this.blocks_ = [], this.encoder_.end(), this.totalLength_ = 0, this.bookmarks_ = []
        },jspb.BinaryWriter.prototype.getResultBuffer = function () {
            goog.asserts.assert(0 == this.bookmarks_.length);
            for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), o = this.blocks_, t = o.length, r = 0, n = 0; n < t; n++) {
                var i = o[n];
                e.set(i, r), r += i.length
            }
            return o = this.encoder_.end(), e.set(o, r), r += o.length, goog.asserts.assert(r == e.length), this.blocks_ = [e], e
        },jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
            return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
        },jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
            this.bookmarks_.push(this.beginDelimited_(e))
        },jspb.BinaryWriter.prototype.endSubMessage = function () {
            goog.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop())
        },jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, o) {
            goog.asserts.assert(1 <= e && e == Math.floor(e)), this.encoder_.writeUnsignedVarint32(8 * e + o)
        },jspb.BinaryWriter.prototype.writeAny = function (e, o, t) {
            var r = jspb.BinaryConstants.FieldType;
            switch (e) {
                case r.DOUBLE:
                    this.writeDouble(o, t);
                    break;
                case r.FLOAT:
                    this.writeFloat(o, t);
                    break;
                case r.INT64:
                    this.writeInt64(o, t);
                    break;
                case r.UINT64:
                    this.writeUint64(o, t);
                    break;
                case r.INT32:
                    this.writeInt32(o, t);
                    break;
                case r.FIXED64:
                    this.writeFixed64(o, t);
                    break;
                case r.FIXED32:
                    this.writeFixed32(o, t);
                    break;
                case r.BOOL:
                    this.writeBool(o, t);
                    break;
                case r.STRING:
                    this.writeString(o, t);
                    break;
                case r.GROUP:
                    goog.asserts.fail("Group field type not supported in writeAny()");
                    break;
                case r.MESSAGE:
                    goog.asserts.fail("Message field type not supported in writeAny()");
                    break;
                case r.BYTES:
                    this.writeBytes(o, t);
                    break;
                case r.UINT32:
                    this.writeUint32(o, t);
                    break;
                case r.ENUM:
                    this.writeEnum(o, t);
                    break;
                case r.SFIXED32:
                    this.writeSfixed32(o, t);
                    break;
                case r.SFIXED64:
                    this.writeSfixed64(o, t);
                    break;
                case r.SINT32:
                    this.writeSint32(o, t);
                    break;
                case r.SINT64:
                    this.writeSint64(o, t);
                    break;
                case r.FHASH64:
                    this.writeFixedHash64(o, t);
                    break;
                case r.VHASH64:
                    this.writeVarintHash64(o, t);
                    break;
                default:
                    goog.asserts.fail("Invalid field type in writeAny()")
            }
        },jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(o))
        },jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(o))
        },jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(o))
        },jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(o))
        },jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(o))
        },jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(o))
        },jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(o))
        },jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(o))
        },jspb.BinaryWriter.prototype.writeInt32 = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_31 && o < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, o))
        },jspb.BinaryWriter.prototype.writeInt32String = function (e, o) {
            null != o && (o = parseInt(o, 10), goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_31 && o < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, o))
        },jspb.BinaryWriter.prototype.writeInt64 = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_63 && o < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(e, o))
        },jspb.BinaryWriter.prototype.writeInt64String = function (e, o) {
            null != o && (o = jspb.arith.Int64.fromString(o), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(o.lo, o.hi))
        },jspb.BinaryWriter.prototype.writeUint32 = function (e, o) {
            null != o && (goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, o))
        },jspb.BinaryWriter.prototype.writeUint32String = function (e, o) {
            null != o && (o = parseInt(o, 10), goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, o))
        },jspb.BinaryWriter.prototype.writeUint64 = function (e, o) {
            null != o && (goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(e, o))
        },jspb.BinaryWriter.prototype.writeUint64String = function (e, o) {
            null != o && (o = jspb.arith.UInt64.fromString(o), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(o.lo, o.hi))
        },jspb.BinaryWriter.prototype.writeSint32 = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_31 && o < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(e, o))
        },jspb.BinaryWriter.prototype.writeSint64 = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_63 && o < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(e, o))
        },jspb.BinaryWriter.prototype.writeSintHash64 = function (e, o) {
            null != o && this.writeZigzagVarintHash64_(e, o)
        },jspb.BinaryWriter.prototype.writeSint64String = function (e, o) {
            null != o && this.writeZigzagVarint64String_(e, o)
        },jspb.BinaryWriter.prototype.writeFixed32 = function (e, o) {
            null != o && (goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(o))
        },jspb.BinaryWriter.prototype.writeFixed64 = function (e, o) {
            null != o && (goog.asserts.assert(0 <= o && o < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(o))
        },jspb.BinaryWriter.prototype.writeFixed64String = function (e, o) {
            null != o && (o = jspb.arith.UInt64.fromString(o), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(o.lo, o.hi))
        },jspb.BinaryWriter.prototype.writeSfixed32 = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_31 && o < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(o))
        },jspb.BinaryWriter.prototype.writeSfixed64 = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_63 && o < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(o))
        },jspb.BinaryWriter.prototype.writeSfixed64String = function (e, o) {
            null != o && (o = jspb.arith.Int64.fromString(o), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(o.lo, o.hi))
        },jspb.BinaryWriter.prototype.writeFloat = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(o))
        },jspb.BinaryWriter.prototype.writeDouble = function (e, o) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(o))
        },jspb.BinaryWriter.prototype.writeBool = function (e, o) {
            null != o && (goog.asserts.assert("boolean" == typeof o || "number" == typeof o), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(o))
        },jspb.BinaryWriter.prototype.writeEnum = function (e, o) {
            null != o && (goog.asserts.assert(o >= -jspb.BinaryConstants.TWO_TO_31 && o < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(o))
        },jspb.BinaryWriter.prototype.writeString = function (e, o) {
            null != o && (e = this.beginDelimited_(e), this.encoder_.writeString(o), this.endDelimited_(e))
        },jspb.BinaryWriter.prototype.writeBytes = function (e, o) {
            null != o && (o = jspb.utils.byteSourceToUint8Array(o), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(o.length), this.appendUint8Array_(o))
        },jspb.BinaryWriter.prototype.writeMessage = function (e, o, t) {
            null != o && (e = this.beginDelimited_(e), t(o, this), this.endDelimited_(e))
        },jspb.BinaryWriter.prototype.writeMessageSet = function (e, o, t) {
            null != o && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(e), e = this.beginDelimited_(3), t(o, this), this.endDelimited_(e), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP))
        },jspb.BinaryWriter.prototype.writeGroup = function (e, o, t) {
            null != o && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), t(o, this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
        },jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, o) {
            null != o && (goog.asserts.assert(8 == o.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(o))
        },jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, o) {
            null != o && (goog.asserts.assert(8 == o.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(o))
        },jspb.BinaryWriter.prototype.writeSplitFixed64 = function (e, o, t) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(o, t)
        },jspb.BinaryWriter.prototype.writeSplitVarint64 = function (e, o, t) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(o, t)
        },jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (e, o, t) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
            var r = this.encoder_;
            jspb.utils.toZigzag64(o, t, (function (e, o) {
                r.writeSplitVarint64(e >>> 0, o >>> 0)
            }))
        },jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeSignedVarint32_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeInt32String(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeSignedVarint64_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (e, o, t, r) {
            if (null != o) for (var n = 0; n < o.length; n++) this.writeSplitFixed64(e, t(o[n]), r(o[n]))
        },jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (e, o, t, r) {
            if (null != o) for (var n = 0; n < o.length; n++) this.writeSplitVarint64(e, t(o[n]), r(o[n]))
        },jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (e, o, t, r) {
            if (null != o) for (var n = 0; n < o.length; n++) this.writeSplitZigzagVarint64(e, t(o[n]), r(o[n]))
        },jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeInt64String(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeUnsignedVarint32_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeUint32String(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeUnsignedVarint64_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeUint64String(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeZigzagVarint32_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeZigzagVarint64_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeZigzagVarint64String_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeZigzagVarintHash64_(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeFixed32(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeFixed64(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeFixed64String(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeSfixed32(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeSfixed64(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeSfixed64String(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeFloat(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeDouble(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeBool(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeEnum(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedString = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeString(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeBytes(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedMessage = function (e, o, t) {
            if (null != o) for (var r = 0; r < o.length; r++) {
                var n = this.beginDelimited_(e);
                t(o[r], this), this.endDelimited_(n)
            }
        },jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, o, t) {
            if (null != o) for (var r = 0; r < o.length; r++) this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), t(o[r], this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
        },jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeFixedHash64(e, o[t])
        },jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (e, o) {
            if (null != o) for (var t = 0; t < o.length; t++) this.writeVarintHash64(e, o[t])
        },jspb.BinaryWriter.prototype.writePackedInt32 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeSignedVarint32(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedInt32String = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeSignedVarint32(parseInt(o[t], 10));
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedInt64 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeSignedVarint64(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (e, o, t, r) {
            if (null != o) {
                e = this.beginDelimited_(e);
                for (var n = 0; n < o.length; n++) this.encoder_.writeSplitFixed64(t(o[n]), r(o[n]));
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (e, o, t, r) {
            if (null != o) {
                e = this.beginDelimited_(e);
                for (var n = 0; n < o.length; n++) this.encoder_.writeSplitVarint64(t(o[n]), r(o[n]));
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (e, o, t, r) {
            if (null != o) {
                e = this.beginDelimited_(e);
                for (var n = this.encoder_, i = 0; i < o.length; i++) jspb.utils.toZigzag64(t(o[i]), r(o[i]), (function (e, o) {
                    n.writeSplitVarint64(e >>> 0, o >>> 0)
                }));
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedInt64String = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) {
                    var r = jspb.arith.Int64.fromString(o[t]);
                    this.encoder_.writeSplitVarint64(r.lo, r.hi)
                }
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedUint32 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeUnsignedVarint32(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedUint32String = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeUnsignedVarint32(parseInt(o[t], 10));
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedUint64 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeUnsignedVarint64(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedUint64String = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) {
                    var r = jspb.arith.UInt64.fromString(o[t]);
                    this.encoder_.writeSplitVarint64(r.lo, r.hi)
                }
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSint32 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeZigzagVarint32(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSint64 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeZigzagVarint64(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSint64String = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(o[t]));
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedSintHash64 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeZigzagVarintHash64(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * o.length), e = 0; e < o.length; e++) this.encoder_.writeUint32(o[e])
        },jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * o.length), e = 0; e < o.length; e++) this.encoder_.writeUint64(o[e])
        },jspb.BinaryWriter.prototype.writePackedFixed64String = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * o.length), e = 0; e < o.length; e++) {
                var t = jspb.arith.UInt64.fromString(o[e]);
                this.encoder_.writeSplitFixed64(t.lo, t.hi)
            }
        },jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * o.length), e = 0; e < o.length; e++) this.encoder_.writeInt32(o[e])
        },jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * o.length), e = 0; e < o.length; e++) this.encoder_.writeInt64(o[e])
        },jspb.BinaryWriter.prototype.writePackedSfixed64String = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * o.length), e = 0; e < o.length; e++) this.encoder_.writeInt64String(o[e])
        },jspb.BinaryWriter.prototype.writePackedFloat = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * o.length), e = 0; e < o.length; e++) this.encoder_.writeFloat(o[e])
        },jspb.BinaryWriter.prototype.writePackedDouble = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * o.length), e = 0; e < o.length; e++) this.encoder_.writeDouble(o[e])
        },jspb.BinaryWriter.prototype.writePackedBool = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(o.length), e = 0; e < o.length; e++) this.encoder_.writeBool(o[e])
        },jspb.BinaryWriter.prototype.writePackedEnum = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeEnum(o[t]);
                this.endDelimited_(e)
            }
        },jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (e, o) {
            if (null != o && o.length) for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * o.length), e = 0; e < o.length; e++) this.encoder_.writeFixedHash64(o[e])
        },jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (e, o) {
            if (null != o && o.length) {
                e = this.beginDelimited_(e);
                for (var t = 0; t < o.length; t++) this.encoder_.writeVarintHash64(o[t]);
                this.endDelimited_(e)
            }
        },jspb.Map = function (e, o) {
            this.arr_ = e, this.valueCtor_ = o, this.map_ = {}, this.arrClean = !0, 0 < this.arr_.length && this.loadFromArray_()
        },jspb.Map.prototype.loadFromArray_ = function () {
            for (var e = 0; e < this.arr_.length; e++) {
                var o = this.arr_[e], t = o[0];
                this.map_[t.toString()] = new jspb.Map.Entry_(t, o[1])
            }
            this.arrClean = !0
        },jspb.Map.prototype.toArray = function () {
            if (this.arrClean) {
                if (this.valueCtor_) {
                    var e, o = this.map_;
                    for (e in o) if (Object.prototype.hasOwnProperty.call(o, e)) {
                        var t = o[e].valueWrapper;
                        t && t.toArray()
                    }
                }
            } else {
                for (this.arr_.length = 0, (o = this.stringKeys_()).sort(), e = 0; e < o.length; e++) {
                    var r = this.map_[o[e]];
                    (t = r.valueWrapper) && t.toArray(), this.arr_.push([r.key, r.value])
                }
                this.arrClean = !0
            }
            return this.arr_
        },jspb.Map.prototype.toObject = function (e, o) {
            for (var t = this.toArray(), r = [], n = 0; n < t.length; n++) {
                var i = this.map_[t[n][0].toString()];
                this.wrapEntry_(i);
                var s = i.valueWrapper;
                s ? (goog.asserts.assert(o), r.push([i.key, o(e, s)])) : r.push([i.key, i.value])
            }
            return r
        },jspb.Map.fromObject = function (e, o, t) {
            o = new jspb.Map([], o);
            for (var r = 0; r < e.length; r++) {
                var n = e[r][0], i = t(e[r][1]);
                o.set(n, i)
            }
            return o
        },jspb.Map.ArrayIteratorIterable_ = function (e) {
            this.idx_ = 0, this.arr_ = e
        },jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
            return this.idx_ < this.arr_.length ? {done: !1, value: this.arr_[this.idx_++]} : {done: !0, value: void 0}
        },"undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function () {
            return this
        }),jspb.Map.prototype.getLength = function () {
            return this.stringKeys_().length
        },jspb.Map.prototype.clear = function () {
            this.map_ = {}, this.arrClean = !1
        },jspb.Map.prototype.del = function (e) {
            e = e.toString();
            var o = this.map_.hasOwnProperty(e);
            return delete this.map_[e], this.arrClean = !1, o
        },jspb.Map.prototype.getEntryList = function () {
            var e = [], o = this.stringKeys_();
            o.sort();
            for (var t = 0; t < o.length; t++) {
                var r = this.map_[o[t]];
                e.push([r.key, r.value])
            }
            return e
        },jspb.Map.prototype.entries = function () {
            var e = [], o = this.stringKeys_();
            o.sort();
            for (var t = 0; t < o.length; t++) {
                var r = this.map_[o[t]];
                e.push([r.key, this.wrapEntry_(r)])
            }
            return new jspb.Map.ArrayIteratorIterable_(e)
        },jspb.Map.prototype.keys = function () {
            var e = [], o = this.stringKeys_();
            o.sort();
            for (var t = 0; t < o.length; t++) e.push(this.map_[o[t]].key);
            return new jspb.Map.ArrayIteratorIterable_(e)
        },jspb.Map.prototype.values = function () {
            var e = [], o = this.stringKeys_();
            o.sort();
            for (var t = 0; t < o.length; t++) e.push(this.wrapEntry_(this.map_[o[t]]));
            return new jspb.Map.ArrayIteratorIterable_(e)
        },jspb.Map.prototype.forEach = function (e, o) {
            var t = this.stringKeys_();
            t.sort();
            for (var r = 0; r < t.length; r++) {
                var n = this.map_[t[r]];
                e.call(o, this.wrapEntry_(n), n.key, this)
            }
        },jspb.Map.prototype.set = function (e, o) {
            var t = new jspb.Map.Entry_(e);
            return this.valueCtor_ ? (t.valueWrapper = o, t.value = o.toArray()) : t.value = o, this.map_[e.toString()] = t, this.arrClean = !1, this
        },jspb.Map.prototype.wrapEntry_ = function (e) {
            return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)), e.valueWrapper) : e.value
        },jspb.Map.prototype.get = function (e) {
            if (e = this.map_[e.toString()]) return this.wrapEntry_(e)
        },jspb.Map.prototype.has = function (e) {
            return e.toString() in this.map_
        },jspb.Map.prototype.serializeBinary = function (e, o, t, r, n) {
            var i = this.stringKeys_();
            i.sort();
            for (var s = 0; s < i.length; s++) {
                var g = this.map_[i[s]];
                o.beginSubMessage(e), t.call(o, 1, g.key), this.valueCtor_ ? r.call(o, 2, this.wrapEntry_(g), n) : r.call(o, 2, g.value), o.endSubMessage()
            }
        },jspb.Map.deserializeBinary = function (e, o, t, r, n, i, s) {
            for (; o.nextField() && !o.isEndGroup();) {
                var g = o.getFieldNumber();
                1 == g ? i = t.call(o) : 2 == g && (e.valueCtor_ ? (goog.asserts.assert(n), s || (s = new e.valueCtor_), r.call(o, s, n)) : s = r.call(o))
            }
            goog.asserts.assert(null != i), goog.asserts.assert(null != s), e.set(i, s)
        },jspb.Map.prototype.stringKeys_ = function () {
            var e, o = this.map_, t = [];
            for (e in o) Object.prototype.hasOwnProperty.call(o, e) && t.push(e);
            return t
        },jspb.Map.Entry_ = function (e, o) {
            this.key = e, this.value = o, this.valueWrapper = void 0
        },jspb.ExtensionFieldInfo = function (e, o, t, r, n) {
            this.fieldIndex = e, this.fieldName = o, this.ctor = t, this.toObjectFn = r, this.isRepeated = n
        },jspb.ExtensionFieldBinaryInfo = function (e, o, t, r, n, i) {
            this.fieldInfo = e, this.binaryReaderFn = o, this.binaryWriterFn = t, this.binaryMessageSerializeFn = r, this.binaryMessageDeserializeFn = n, this.isPacked = i
        },jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
            return !!this.ctor
        },jspb.Message = function () {
        },jspb.Message.GENERATE_TO_OBJECT = !0,jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE,jspb.Message.GENERATE_TO_STRING = !0,jspb.Message.ASSUME_LOCAL_ARRAYS = !1,jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0,jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array,jspb.Message.prototype.getJsPbMessageId = function () {
            return this.messageId_
        },jspb.Message.getIndex_ = function (e, o) {
            return o + e.arrayIndexOffset_
        },jspb.Message.hiddenES6Property_ = function () {
        },jspb.Message.getFieldNumber_ = function (e, o) {
            return o - e.arrayIndexOffset_
        },jspb.Message.initialize = function (e, o, t, r, n, i) {
            if (e.wrappers_ = null, o || (o = t ? [t] : []), e.messageId_ = t ? String(t) : void 0, e.arrayIndexOffset_ = 0 === t ? -1 : 0, e.array = o, jspb.Message.initPivotAndExtensionObject_(e, r), e.convertedPrimitiveFields_ = {}, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = n), n) for (o = 0; o < n.length; o++) (t = n[o]) < e.pivot_ ? (t = jspb.Message.getIndex_(e, t), e.array[t] = e.array[t] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[t] = e.extensionObject_[t] || jspb.Message.EMPTY_LIST_SENTINEL_);
            if (i && i.length) for (o = 0; o < i.length; o++) jspb.Message.computeOneofCase(e, i[o])
        },jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [],jspb.Message.isArray_ = function (e) {
            return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : Array.isArray(e)
        },jspb.Message.isExtensionObject_ = function (e) {
            return !(null === e || "object" != typeof e || jspb.Message.isArray_(e) || jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
        },jspb.Message.initPivotAndExtensionObject_ = function (e, o) {
            var t = e.array.length, r = -1;
            if (t && (r = t - 1, t = e.array[r], jspb.Message.isExtensionObject_(t))) return e.pivot_ = jspb.Message.getFieldNumber_(e, r), void (e.extensionObject_ = t);
            -1 < o ? (e.pivot_ = Math.max(o, jspb.Message.getFieldNumber_(e, r + 1)), e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE
        },jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
            var o = jspb.Message.getIndex_(e, e.pivot_);
            e.array[o] || (e.extensionObject_ = e.array[o] = {})
        },jspb.Message.toObjectList = function (e, o, t) {
            for (var r = [], n = 0; n < e.length; n++) r[n] = o.call(e[n], t, e[n]);
            return r
        },jspb.Message.toObjectExtension = function (e, o, t, r, n) {
            for (var i in t) {
                var s = t[i], g = r.call(e, s);
                if (null != g) {
                    for (var a in s.fieldName) if (s.fieldName.hasOwnProperty(a)) break;
                    o[a] = s.toObjectFn ? s.isRepeated ? jspb.Message.toObjectList(g, s.toObjectFn, n) : s.toObjectFn(n, g) : g
                }
            }
        },jspb.Message.serializeBinaryExtensions = function (e, o, t, r) {
            for (var n in t) {
                var i = t[n], s = i.fieldInfo;
                if (!i.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
                var g = r.call(e, s);
                if (null != g) if (s.isMessageType()) {
                    if (!i.binaryMessageSerializeFn) throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                    i.binaryWriterFn.call(o, s.fieldIndex, g, i.binaryMessageSerializeFn)
                } else i.binaryWriterFn.call(o, s.fieldIndex, g)
            }
        },jspb.Message.readBinaryExtension = function (e, o, t, r, n) {
            var i = t[o.getFieldNumber()];
            if (i) {
                if (t = i.fieldInfo, !i.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
                if (t.isMessageType()) {
                    var s = new t.ctor;
                    i.binaryReaderFn.call(o, s, i.binaryMessageDeserializeFn)
                } else s = i.binaryReaderFn.call(o);
                t.isRepeated && !i.isPacked ? (o = r.call(e, t)) ? o.push(s) : n.call(e, t, [s]) : n.call(e, t, s)
            } else o.skipField()
        },jspb.Message.getField = function (e, o) {
            if (o < e.pivot_) {
                o = jspb.Message.getIndex_(e, o);
                var t = e.array[o];
                return t === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[o] = [] : t
            }
            if (e.extensionObject_) return (t = e.extensionObject_[o]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[o] = [] : t
        },jspb.Message.getRepeatedField = function (e, o) {
            return jspb.Message.getField(e, o)
        },jspb.Message.getOptionalFloatingPointField = function (e, o) {
            return null == (e = jspb.Message.getField(e, o)) ? e : +e
        },jspb.Message.getBooleanField = function (e, o) {
            return null == (e = jspb.Message.getField(e, o)) ? e : !!e
        },jspb.Message.getRepeatedFloatingPointField = function (e, o) {
            var t = jspb.Message.getRepeatedField(e, o);
            if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}), !e.convertedPrimitiveFields_[o]) {
                for (var r = 0; r < t.length; r++) t[r] = +t[r];
                e.convertedPrimitiveFields_[o] = !0
            }
            return t
        },jspb.Message.getRepeatedBooleanField = function (e, o) {
            var t = jspb.Message.getRepeatedField(e, o);
            if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}), !e.convertedPrimitiveFields_[o]) {
                for (var r = 0; r < t.length; r++) t[r] = !!t[r];
                e.convertedPrimitiveFields_[o] = !0
            }
            return t
        },jspb.Message.bytesAsB64 = function (e) {
            return null == e || "string" == typeof e ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)), null)
        },jspb.Message.bytesAsU8 = function (e) {
            return null == e || e instanceof Uint8Array ? e : "string" == typeof e ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)), null)
        },jspb.Message.bytesListAsB64 = function (e) {
            return jspb.Message.assertConsistentTypes_(e), e.length && "string" != typeof e[0] ? goog.array.map(e, jspb.Message.bytesAsB64) : e
        },jspb.Message.bytesListAsU8 = function (e) {
            return jspb.Message.assertConsistentTypes_(e), !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
        },jspb.Message.assertConsistentTypes_ = function (e) {
            if (goog.DEBUG && e && 1 < e.length) {
                var o = goog.typeOf(e[0]);
                goog.array.forEach(e, (function (e) {
                    goog.typeOf(e) != o && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + o)
                }))
            }
        },jspb.Message.getFieldWithDefault = function (e, o, t) {
            return null == (e = jspb.Message.getField(e, o)) ? t : e
        },jspb.Message.getBooleanFieldWithDefault = function (e, o, t) {
            return null == (e = jspb.Message.getBooleanField(e, o)) ? t : e
        },jspb.Message.getFloatingPointFieldWithDefault = function (e, o, t) {
            return null == (e = jspb.Message.getOptionalFloatingPointField(e, o)) ? t : e
        },jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault,jspb.Message.getMapField = function (e, o, t, r) {
            if (e.wrappers_ || (e.wrappers_ = {}), o in e.wrappers_) return e.wrappers_[o];
            var n = jspb.Message.getField(e, o);
            if (!n) {
                if (t) return;
                n = [], jspb.Message.setField(e, o, n)
            }
            return e.wrappers_[o] = new jspb.Map(n, r)
        },jspb.Message.setField = function (e, o, t) {
            return goog.asserts.assertInstanceof(e, jspb.Message), o < e.pivot_ ? e.array[jspb.Message.getIndex_(e, o)] = t : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[o] = t), e
        },jspb.Message.setProto3IntField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, 0)
        },jspb.Message.setProto3FloatField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, 0)
        },jspb.Message.setProto3BooleanField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, !1)
        },jspb.Message.setProto3StringField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, "")
        },jspb.Message.setProto3BytesField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, "")
        },jspb.Message.setProto3EnumField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, 0)
        },jspb.Message.setProto3StringIntField = function (e, o, t) {
            return jspb.Message.setFieldIgnoringDefault_(e, o, t, "0")
        },jspb.Message.setFieldIgnoringDefault_ = function (e, o, t, r) {
            return goog.asserts.assertInstanceof(e, jspb.Message), t !== r ? jspb.Message.setField(e, o, t) : o < e.pivot_ ? e.array[jspb.Message.getIndex_(e, o)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(e), delete e.extensionObject_[o]), e
        },jspb.Message.addToRepeatedField = function (e, o, t, r) {
            return goog.asserts.assertInstanceof(e, jspb.Message), o = jspb.Message.getRepeatedField(e, o), null != r ? o.splice(r, 0, t) : o.push(t), e
        },jspb.Message.setOneofField = function (e, o, t, r) {
            return goog.asserts.assertInstanceof(e, jspb.Message), (t = jspb.Message.computeOneofCase(e, t)) && t !== o && void 0 !== r && (e.wrappers_ && t in e.wrappers_ && (e.wrappers_[t] = void 0), jspb.Message.setField(e, t, void 0)), jspb.Message.setField(e, o, r)
        },jspb.Message.computeOneofCase = function (e, o) {
            for (var t, r, n = 0; n < o.length; n++) {
                var i = o[n], s = jspb.Message.getField(e, i);
                null != s && (t = i, r = s, jspb.Message.setField(e, i, void 0))
            }
            return t ? (jspb.Message.setField(e, t, r), t) : 0
        },jspb.Message.getWrapperField = function (e, o, t, r) {
            if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[t]) {
                var n = jspb.Message.getField(e, t);
                (r || n) && (e.wrappers_[t] = new o(n))
            }
            return e.wrappers_[t]
        },jspb.Message.getRepeatedWrapperField = function (e, o, t) {
            return jspb.Message.wrapRepeatedField_(e, o, t), (o = e.wrappers_[t]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (o = e.wrappers_[t] = []), o
        },jspb.Message.wrapRepeatedField_ = function (e, o, t) {
            if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[t]) {
                for (var r = jspb.Message.getRepeatedField(e, t), n = [], i = 0; i < r.length; i++) n[i] = new o(r[i]);
                e.wrappers_[t] = n
            }
        },jspb.Message.setWrapperField = function (e, o, t) {
            goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {});
            var r = t ? t.toArray() : t;
            return e.wrappers_[o] = t, jspb.Message.setField(e, o, r)
        },jspb.Message.setOneofWrapperField = function (e, o, t, r) {
            goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {});
            var n = r ? r.toArray() : r;
            return e.wrappers_[o] = r, jspb.Message.setOneofField(e, o, t, n)
        },jspb.Message.setRepeatedWrapperField = function (e, o, t) {
            goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {}), t = t || [];
            for (var r = [], n = 0; n < t.length; n++) r[n] = t[n].toArray();
            return e.wrappers_[o] = t, jspb.Message.setField(e, o, r)
        },jspb.Message.addToRepeatedWrapperField = function (e, o, t, r, n) {
            jspb.Message.wrapRepeatedField_(e, r, o);
            var i = e.wrappers_[o];
            return i || (i = e.wrappers_[o] = []), t = t || new r, e = jspb.Message.getRepeatedField(e, o), null != n ? (i.splice(n, 0, t), e.splice(n, 0, t.toArray())) : (i.push(t), e.push(t.toArray())), t
        },jspb.Message.toMap = function (e, o, t, r) {
            for (var n = {}, i = 0; i < e.length; i++) n[o.call(e[i])] = t ? t.call(e[i], r, e[i]) : e[i];
            return n
        },jspb.Message.prototype.syncMapFields_ = function () {
            if (this.wrappers_) for (var e in this.wrappers_) {
                var o = this.wrappers_[e];
                if (Array.isArray(o)) for (var t = 0; t < o.length; t++) o[t] && o[t].toArray(); else o && o.toArray()
            }
        },jspb.Message.prototype.toArray = function () {
            return this.syncMapFields_(), this.array
        },jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function () {
            return this.syncMapFields_(), this.array.toString()
        }),jspb.Message.prototype.getExtension = function (e) {
            if (this.extensionObject_) {
                this.wrappers_ || (this.wrappers_ = {});
                var o = e.fieldIndex;
                if (e.isRepeated) {
                    if (e.isMessageType()) return this.wrappers_[o] || (this.wrappers_[o] = goog.array.map(this.extensionObject_[o] || [], (function (o) {
                        return new e.ctor(o)
                    }))), this.wrappers_[o]
                } else if (e.isMessageType()) return !this.wrappers_[o] && this.extensionObject_[o] && (this.wrappers_[o] = new e.ctor(this.extensionObject_[o])), this.wrappers_[o];
                return this.extensionObject_[o]
            }
        },jspb.Message.prototype.setExtension = function (e, o) {
            this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this);
            var t = e.fieldIndex;
            return e.isRepeated ? (o = o || [], e.isMessageType() ? (this.wrappers_[t] = o, this.extensionObject_[t] = goog.array.map(o, (function (e) {
                return e.toArray()
            }))) : this.extensionObject_[t] = o) : e.isMessageType() ? (this.wrappers_[t] = o, this.extensionObject_[t] = o ? o.toArray() : o) : this.extensionObject_[t] = o, this
        },jspb.Message.difference = function (e, o) {
            if (!(e instanceof o.constructor)) throw Error("Messages have different types.");
            var t = e.toArray();
            o = o.toArray();
            var r = [], n = 0, i = t.length > o.length ? t.length : o.length;
            for (e.getJsPbMessageId() && (r[0] = e.getJsPbMessageId(), n = 1); n < i; n++) jspb.Message.compareFields(t[n], o[n]) || (r[n] = o[n]);
            return new e.constructor(r)
        },jspb.Message.equals = function (e, o) {
            return e == o || !(!e || !o) && e instanceof o.constructor && jspb.Message.compareFields(e.toArray(), o.toArray())
        },jspb.Message.compareExtensions = function (e, o) {
            e = e || {}, o = o || {};
            var t, r = {};
            for (t in e) r[t] = 0;
            for (t in o) r[t] = 0;
            for (t in r) if (!jspb.Message.compareFields(e[t], o[t])) return !1;
            return !0
        },jspb.Message.compareFields = function (e, o) {
            if (e == o) return !0;
            if (!goog.isObject(e) || !goog.isObject(o)) return !!("number" == typeof e && isNaN(e) || "number" == typeof o && isNaN(o)) && String(e) == String(o);
            if (e.constructor != o.constructor) return !1;
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
                if (e.length != o.length) return !1;
                for (var t = 0; t < e.length; t++) if (e[t] != o[t]) return !1;
                return !0
            }
            if (e.constructor === Array) {
                var r = void 0, n = void 0, i = Math.max(e.length, o.length);
                for (t = 0; t < i; t++) {
                    var s = e[t], g = o[t];
                    if (s && s.constructor == Object && (goog.asserts.assert(void 0 === r), goog.asserts.assert(t === e.length - 1), r = s, s = void 0), g && g.constructor == Object && (goog.asserts.assert(void 0 === n), goog.asserts.assert(t === o.length - 1), n = g, g = void 0), !jspb.Message.compareFields(s, g)) return !1
                }
                return !r && !n || (r = r || {}, n = n || {}, jspb.Message.compareExtensions(r, n))
            }
            if (e.constructor === Object) return jspb.Message.compareExtensions(e, o);
            throw Error("Invalid type in JSPB array")
        },jspb.Message.prototype.cloneMessage = function () {
            return jspb.Message.cloneMessage(this)
        },jspb.Message.prototype.clone = function () {
            return jspb.Message.cloneMessage(this)
        },jspb.Message.clone = function (e) {
            return jspb.Message.cloneMessage(e)
        },jspb.Message.cloneMessage = function (e) {
            return new e.constructor(jspb.Message.clone_(e.toArray()))
        },jspb.Message.copyInto = function (e, o) {
            goog.asserts.assertInstanceof(e, jspb.Message), goog.asserts.assertInstanceof(o, jspb.Message), goog.asserts.assert(e.constructor == o.constructor, "Copy source and target message should have the same type."), e = jspb.Message.clone(e);
            for (var t = o.toArray(), r = e.toArray(), n = t.length = 0; n < r.length; n++) t[n] = r[n];
            o.wrappers_ = e.wrappers_, o.extensionObject_ = e.extensionObject_
        },jspb.Message.clone_ = function (e) {
            if (Array.isArray(e)) {
                for (var o = Array(e.length), t = 0; t < e.length; t++) {
                    var r = e[t];
                    null != r && (o[t] = "object" == typeof r ? jspb.Message.clone_(goog.asserts.assert(r)) : r)
                }
                return o
            }
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array) return new Uint8Array(e);
            for (t in o = {}, e) null != (r = e[t]) && (o[t] = "object" == typeof r ? jspb.Message.clone_(goog.asserts.assert(r)) : r);
            return o
        },jspb.Message.registerMessageType = function (e, o) {
            o.messageId = e
        },jspb.Message.messageSetExtensions = {},jspb.Message.messageSetExtensionsBinary = {},jspb.Export = {},exports.Map = jspb.Map,exports.Message = jspb.Message,exports.BinaryReader = jspb.BinaryReader,exports.BinaryWriter = jspb.BinaryWriter,exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo,exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo,exports.exportSymbol = goog.exportSymbol,exports.inherits = goog.inherits,exports.object = {extend: goog.object.extend},exports.typeOf = goog.typeOf
    }, 87073: function (e, o, t) {
        var r = t(47865), n = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        n.exportSymbol("proto.google.protobuf.DescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.DescriptorProto.ExtensionRange", null, i), n.exportSymbol("proto.google.protobuf.DescriptorProto.ReservedRange", null, i), n.exportSymbol("proto.google.protobuf.EnumDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.EnumDescriptorProto.EnumReservedRange", null, i), n.exportSymbol("proto.google.protobuf.EnumOptions", null, i), n.exportSymbol("proto.google.protobuf.EnumValueDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.EnumValueOptions", null, i), n.exportSymbol("proto.google.protobuf.ExtensionRangeOptions", null, i), n.exportSymbol("proto.google.protobuf.FieldDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.FieldDescriptorProto.Label", null, i), n.exportSymbol("proto.google.protobuf.FieldDescriptorProto.Type", null, i), n.exportSymbol("proto.google.protobuf.FieldOptions", null, i), n.exportSymbol("proto.google.protobuf.FieldOptions.CType", null, i), n.exportSymbol("proto.google.protobuf.FieldOptions.JSType", null, i), n.exportSymbol("proto.google.protobuf.FileDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.FileDescriptorSet", null, i), n.exportSymbol("proto.google.protobuf.FileOptions", null, i), n.exportSymbol("proto.google.protobuf.FileOptions.OptimizeMode", null, i), n.exportSymbol("proto.google.protobuf.GeneratedCodeInfo", null, i), n.exportSymbol("proto.google.protobuf.GeneratedCodeInfo.Annotation", null, i), n.exportSymbol("proto.google.protobuf.MessageOptions", null, i), n.exportSymbol("proto.google.protobuf.MethodDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.MethodOptions", null, i), n.exportSymbol("proto.google.protobuf.MethodOptions.IdempotencyLevel", null, i), n.exportSymbol("proto.google.protobuf.OneofDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.OneofOptions", null, i), n.exportSymbol("proto.google.protobuf.ServiceDescriptorProto", null, i), n.exportSymbol("proto.google.protobuf.ServiceOptions", null, i), n.exportSymbol("proto.google.protobuf.SourceCodeInfo", null, i), n.exportSymbol("proto.google.protobuf.SourceCodeInfo.Location", null, i), n.exportSymbol("proto.google.protobuf.UninterpretedOption", null, i), n.exportSymbol("proto.google.protobuf.UninterpretedOption.NamePart", null, i), proto.google.protobuf.FileDescriptorSet = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.FileDescriptorSet.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.FileDescriptorSet, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.FileDescriptorSet.displayName = "proto.google.protobuf.FileDescriptorSet"), proto.google.protobuf.FileDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.FileDescriptorProto.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.FileDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.FileDescriptorProto.displayName = "proto.google.protobuf.FileDescriptorProto"), proto.google.protobuf.DescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.DescriptorProto.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.DescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.DescriptorProto.displayName = "proto.google.protobuf.DescriptorProto"), proto.google.protobuf.DescriptorProto.ExtensionRange = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.DescriptorProto.ExtensionRange, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.DescriptorProto.ExtensionRange.displayName = "proto.google.protobuf.DescriptorProto.ExtensionRange"), proto.google.protobuf.DescriptorProto.ReservedRange = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.DescriptorProto.ReservedRange, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.DescriptorProto.ReservedRange.displayName = "proto.google.protobuf.DescriptorProto.ReservedRange"), proto.google.protobuf.ExtensionRangeOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.ExtensionRangeOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.ExtensionRangeOptions, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.ExtensionRangeOptions.displayName = "proto.google.protobuf.ExtensionRangeOptions"), proto.google.protobuf.ExtensionRangeOptions.extensions = {}, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary = {}, proto.google.protobuf.FieldDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.FieldDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.FieldDescriptorProto.displayName = "proto.google.protobuf.FieldDescriptorProto"), proto.google.protobuf.OneofDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.OneofDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.OneofDescriptorProto.displayName = "proto.google.protobuf.OneofDescriptorProto"), proto.google.protobuf.EnumDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.EnumDescriptorProto.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.EnumDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.EnumDescriptorProto.displayName = "proto.google.protobuf.EnumDescriptorProto"), proto.google.protobuf.EnumDescriptorProto.EnumReservedRange = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.displayName = "proto.google.protobuf.EnumDescriptorProto.EnumReservedRange"), proto.google.protobuf.EnumValueDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.EnumValueDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.EnumValueDescriptorProto.displayName = "proto.google.protobuf.EnumValueDescriptorProto"), proto.google.protobuf.ServiceDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.ServiceDescriptorProto.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.ServiceDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.ServiceDescriptorProto.displayName = "proto.google.protobuf.ServiceDescriptorProto"), proto.google.protobuf.MethodDescriptorProto = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, n.inherits(proto.google.protobuf.MethodDescriptorProto, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.MethodDescriptorProto.displayName = "proto.google.protobuf.MethodDescriptorProto"), proto.google.protobuf.FileOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.FileOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.FileOptions, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.FileOptions.displayName = "proto.google.protobuf.FileOptions"), proto.google.protobuf.FileOptions.extensions = {}, proto.google.protobuf.FileOptions.extensionsBinary = {}, proto.google.protobuf.MessageOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.MessageOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.MessageOptions, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.MessageOptions.displayName = "proto.google.protobuf.MessageOptions"), proto.google.protobuf.MessageOptions.extensions = {}, proto.google.protobuf.MessageOptions.extensionsBinary = {}, proto.google.protobuf.FieldOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.FieldOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.FieldOptions, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.FieldOptions.displayName = "proto.google.protobuf.FieldOptions"), proto.google.protobuf.FieldOptions.extensions = {}, proto.google.protobuf.FieldOptions.extensionsBinary = {}, proto.google.protobuf.OneofOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.OneofOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.OneofOptions, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.OneofOptions.displayName = "proto.google.protobuf.OneofOptions"), proto.google.protobuf.OneofOptions.extensions = {}, proto.google.protobuf.OneofOptions.extensionsBinary = {}, proto.google.protobuf.EnumOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.EnumOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.EnumOptions, r.Message), n.DEBUG && !COMPILED && (proto.google.protobuf.EnumOptions.displayName = "proto.google.protobuf.EnumOptions"), proto.google.protobuf.EnumOptions.extensions = {}, proto.google.protobuf.EnumOptions.extensionsBinary = {}, proto.google.protobuf.EnumValueOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.EnumValueOptions.repeatedFields_, null)
        }, n.inherits(proto.google.protobuf.EnumValueOptions, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.EnumValueOptions.displayName = "proto.google.protobuf.EnumValueOptions"),proto.google.protobuf.EnumValueOptions.extensions = {},proto.google.protobuf.EnumValueOptions.extensionsBinary = {},proto.google.protobuf.ServiceOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.ServiceOptions.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.ServiceOptions, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.ServiceOptions.displayName = "proto.google.protobuf.ServiceOptions"),proto.google.protobuf.ServiceOptions.extensions = {},proto.google.protobuf.ServiceOptions.extensionsBinary = {},proto.google.protobuf.MethodOptions = function (e) {
            r.Message.initialize(this, e, 0, 500, proto.google.protobuf.MethodOptions.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.MethodOptions, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.MethodOptions.displayName = "proto.google.protobuf.MethodOptions"),proto.google.protobuf.MethodOptions.extensions = {},proto.google.protobuf.MethodOptions.extensionsBinary = {},proto.google.protobuf.UninterpretedOption = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.UninterpretedOption.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.UninterpretedOption, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.UninterpretedOption.displayName = "proto.google.protobuf.UninterpretedOption"),proto.google.protobuf.UninterpretedOption.NamePart = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },n.inherits(proto.google.protobuf.UninterpretedOption.NamePart, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.UninterpretedOption.NamePart.displayName = "proto.google.protobuf.UninterpretedOption.NamePart"),proto.google.protobuf.SourceCodeInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.SourceCodeInfo.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.SourceCodeInfo, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.SourceCodeInfo.displayName = "proto.google.protobuf.SourceCodeInfo"),proto.google.protobuf.SourceCodeInfo.Location = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.SourceCodeInfo.Location, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.SourceCodeInfo.Location.displayName = "proto.google.protobuf.SourceCodeInfo.Location"),proto.google.protobuf.GeneratedCodeInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.GeneratedCodeInfo.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.GeneratedCodeInfo, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.GeneratedCodeInfo.displayName = "proto.google.protobuf.GeneratedCodeInfo"),proto.google.protobuf.GeneratedCodeInfo.Annotation = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_, null)
        },n.inherits(proto.google.protobuf.GeneratedCodeInfo.Annotation, r.Message),n.DEBUG && !COMPILED && (proto.google.protobuf.GeneratedCodeInfo.Annotation.displayName = "proto.google.protobuf.GeneratedCodeInfo.Annotation"),proto.google.protobuf.FileDescriptorSet.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FileDescriptorSet.prototype.toObject = function (e) {
            return proto.google.protobuf.FileDescriptorSet.toObject(e, this)
        }, proto.google.protobuf.FileDescriptorSet.toObject = function (e, o) {
            var t = {fileList: r.Message.toObjectList(o.getFileList(), proto.google.protobuf.FileDescriptorProto.toObject, e)};
            return e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.FileDescriptorSet.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.FileDescriptorSet;
            return proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.FileDescriptorSet.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                if (1 === o.getFieldNumber()) {
                    var t = new proto.google.protobuf.FileDescriptorProto;
                    o.readMessage(t, proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader), e.addFile(t)
                } else o.skipField()
            }
            return e
        },proto.google.protobuf.FileDescriptorSet.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.FileDescriptorSet.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getFileList()).length > 0 && o.writeRepeatedMessage(1, t, proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter)
        },proto.google.protobuf.FileDescriptorSet.prototype.getFileList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FileDescriptorProto, 1)
        },proto.google.protobuf.FileDescriptorSet.prototype.setFileList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.google.protobuf.FileDescriptorSet.prototype.addFile = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.protobuf.FileDescriptorProto, o)
        },proto.google.protobuf.FileDescriptorSet.prototype.clearFileList = function () {
            return this.setFileList([])
        },proto.google.protobuf.FileDescriptorProto.repeatedFields_ = [3, 10, 11, 4, 5, 6, 7],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FileDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.FileDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.FileDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                pb_package: null == (t = r.Message.getField(o, 2)) ? undefined : t,
                dependencyList: null == (t = r.Message.getRepeatedField(o, 3)) ? undefined : t,
                publicDependencyList: null == (t = r.Message.getRepeatedField(o, 10)) ? undefined : t,
                weakDependencyList: null == (t = r.Message.getRepeatedField(o, 11)) ? undefined : t,
                messageTypeList: r.Message.toObjectList(o.getMessageTypeList(), proto.google.protobuf.DescriptorProto.toObject, e),
                enumTypeList: r.Message.toObjectList(o.getEnumTypeList(), proto.google.protobuf.EnumDescriptorProto.toObject, e),
                serviceList: r.Message.toObjectList(o.getServiceList(), proto.google.protobuf.ServiceDescriptorProto.toObject, e),
                extensionList: r.Message.toObjectList(o.getExtensionList(), proto.google.protobuf.FieldDescriptorProto.toObject, e),
                options: (t = o.getOptions()) && proto.google.protobuf.FileOptions.toObject(e, t),
                sourceCodeInfo: (t = o.getSourceCodeInfo()) && proto.google.protobuf.SourceCodeInfo.toObject(e, t),
                syntax: null == (t = r.Message.getField(o, 12)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.FileDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.FileDescriptorProto;
            return proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.FileDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = o.readString();
                        e.setPackage(t);
                        break;
                    case 3:
                        t = o.readString();
                        e.addDependency(t);
                        break;
                    case 10:
                        for (var r = o.isDelimited() ? o.readPackedInt32() : [o.readInt32()], n = 0; n < r.length; n++) e.addPublicDependency(r[n]);
                        break;
                    case 11:
                        for (r = o.isDelimited() ? o.readPackedInt32() : [o.readInt32()], n = 0; n < r.length; n++) e.addWeakDependency(r[n]);
                        break;
                    case 4:
                        t = new proto.google.protobuf.DescriptorProto;
                        o.readMessage(t, proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader), e.addMessageType(t);
                        break;
                    case 5:
                        t = new proto.google.protobuf.EnumDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader), e.addEnumType(t);
                        break;
                    case 6:
                        t = new proto.google.protobuf.ServiceDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader), e.addService(t);
                        break;
                    case 7:
                        t = new proto.google.protobuf.FieldDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader), e.addExtension$(t);
                        break;
                    case 8:
                        t = new proto.google.protobuf.FileOptions;
                        o.readMessage(t, proto.google.protobuf.FileOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    case 9:
                        t = new proto.google.protobuf.SourceCodeInfo;
                        o.readMessage(t, proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader), e.setSourceCodeInfo(t);
                        break;
                    case 12:
                        t = o.readString();
                        e.setSyntax(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.FileDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.FileDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = r.Message.getField(e, 2)) && o.writeString(2, t), (t = e.getDependencyList()).length > 0 && o.writeRepeatedString(3, t), (t = e.getPublicDependencyList()).length > 0 && o.writeRepeatedInt32(10, t), (t = e.getWeakDependencyList()).length > 0 && o.writeRepeatedInt32(11, t), (t = e.getMessageTypeList()).length > 0 && o.writeRepeatedMessage(4, t, proto.google.protobuf.DescriptorProto.serializeBinaryToWriter), (t = e.getEnumTypeList()).length > 0 && o.writeRepeatedMessage(5, t, proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter), (t = e.getServiceList()).length > 0 && o.writeRepeatedMessage(6, t, proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter), (t = e.getExtensionList()).length > 0 && o.writeRepeatedMessage(7, t, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter), null != (t = e.getOptions()) && o.writeMessage(8, t, proto.google.protobuf.FileOptions.serializeBinaryToWriter), null != (t = e.getSourceCodeInfo()) && o.writeMessage(9, t, proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter), null != (t = r.Message.getField(e, 12)) && o.writeString(12, t)
        },proto.google.protobuf.FileDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.FileDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.FileDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.FileDescriptorProto.prototype.getPackage = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.google.protobuf.FileDescriptorProto.prototype.setPackage = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearPackage = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.FileDescriptorProto.prototype.hasPackage = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.FileDescriptorProto.prototype.getDependencyList = function () {
            return r.Message.getRepeatedField(this, 3)
        },proto.google.protobuf.FileDescriptorProto.prototype.setDependencyList = function (e) {
            return r.Message.setField(this, 3, e || [])
        },proto.google.protobuf.FileDescriptorProto.prototype.addDependency = function (e, o) {
            return r.Message.addToRepeatedField(this, 3, e, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearDependencyList = function () {
            return this.setDependencyList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getPublicDependencyList = function () {
            return r.Message.getRepeatedField(this, 10)
        },proto.google.protobuf.FileDescriptorProto.prototype.setPublicDependencyList = function (e) {
            return r.Message.setField(this, 10, e || [])
        },proto.google.protobuf.FileDescriptorProto.prototype.addPublicDependency = function (e, o) {
            return r.Message.addToRepeatedField(this, 10, e, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearPublicDependencyList = function () {
            return this.setPublicDependencyList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getWeakDependencyList = function () {
            return r.Message.getRepeatedField(this, 11)
        },proto.google.protobuf.FileDescriptorProto.prototype.setWeakDependencyList = function (e) {
            return r.Message.setField(this, 11, e || [])
        },proto.google.protobuf.FileDescriptorProto.prototype.addWeakDependency = function (e, o) {
            return r.Message.addToRepeatedField(this, 11, e, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearWeakDependencyList = function () {
            return this.setWeakDependencyList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getMessageTypeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 4)
        },proto.google.protobuf.FileDescriptorProto.prototype.setMessageTypeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.addMessageType = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.google.protobuf.DescriptorProto, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearMessageTypeList = function () {
            return this.setMessageTypeList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getEnumTypeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 5)
        },proto.google.protobuf.FileDescriptorProto.prototype.setEnumTypeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.addEnumType = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.google.protobuf.EnumDescriptorProto, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearEnumTypeList = function () {
            return this.setEnumTypeList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getServiceList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.ServiceDescriptorProto, 6)
        },proto.google.protobuf.FileDescriptorProto.prototype.setServiceList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.addService = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.google.protobuf.ServiceDescriptorProto, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearServiceList = function () {
            return this.setServiceList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getExtensionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 7)
        },proto.google.protobuf.FileDescriptorProto.prototype.setExtensionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 7, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.addExtension$ = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 7, e, proto.google.protobuf.FieldDescriptorProto, o)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearExtensionList = function () {
            return this.setExtensionList([])
        },proto.google.protobuf.FileDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.FileOptions, 8)
        },proto.google.protobuf.FileDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.FileDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 8)
        },proto.google.protobuf.FileDescriptorProto.prototype.getSourceCodeInfo = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.SourceCodeInfo, 9)
        },proto.google.protobuf.FileDescriptorProto.prototype.setSourceCodeInfo = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearSourceCodeInfo = function () {
            return this.setSourceCodeInfo(undefined)
        },proto.google.protobuf.FileDescriptorProto.prototype.hasSourceCodeInfo = function () {
            return null != r.Message.getField(this, 9)
        },proto.google.protobuf.FileDescriptorProto.prototype.getSyntax = function () {
            return r.Message.getFieldWithDefault(this, 12, "")
        },proto.google.protobuf.FileDescriptorProto.prototype.setSyntax = function (e) {
            return r.Message.setField(this, 12, e)
        },proto.google.protobuf.FileDescriptorProto.prototype.clearSyntax = function () {
            return r.Message.setField(this, 12, undefined)
        },proto.google.protobuf.FileDescriptorProto.prototype.hasSyntax = function () {
            return null != r.Message.getField(this, 12)
        },proto.google.protobuf.DescriptorProto.repeatedFields_ = [2, 6, 3, 4, 5, 8, 9, 10],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.DescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.DescriptorProto.toObject(e, this)
        }, proto.google.protobuf.DescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                fieldList: r.Message.toObjectList(o.getFieldList(), proto.google.protobuf.FieldDescriptorProto.toObject, e),
                extensionList: r.Message.toObjectList(o.getExtensionList(), proto.google.protobuf.FieldDescriptorProto.toObject, e),
                nestedTypeList: r.Message.toObjectList(o.getNestedTypeList(), proto.google.protobuf.DescriptorProto.toObject, e),
                enumTypeList: r.Message.toObjectList(o.getEnumTypeList(), proto.google.protobuf.EnumDescriptorProto.toObject, e),
                extensionRangeList: r.Message.toObjectList(o.getExtensionRangeList(), proto.google.protobuf.DescriptorProto.ExtensionRange.toObject, e),
                oneofDeclList: r.Message.toObjectList(o.getOneofDeclList(), proto.google.protobuf.OneofDescriptorProto.toObject, e),
                options: (t = o.getOptions()) && proto.google.protobuf.MessageOptions.toObject(e, t),
                reservedRangeList: r.Message.toObjectList(o.getReservedRangeList(), proto.google.protobuf.DescriptorProto.ReservedRange.toObject, e),
                reservedNameList: null == (t = r.Message.getRepeatedField(o, 10)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.DescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.DescriptorProto;
            return proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = new proto.google.protobuf.FieldDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader), e.addField(t);
                        break;
                    case 6:
                        t = new proto.google.protobuf.FieldDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader), e.addExtension$(t);
                        break;
                    case 3:
                        t = new proto.google.protobuf.DescriptorProto;
                        o.readMessage(t, proto.google.protobuf.DescriptorProto.deserializeBinaryFromReader), e.addNestedType(t);
                        break;
                    case 4:
                        t = new proto.google.protobuf.EnumDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader), e.addEnumType(t);
                        break;
                    case 5:
                        t = new proto.google.protobuf.DescriptorProto.ExtensionRange;
                        o.readMessage(t, proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader), e.addExtensionRange(t);
                        break;
                    case 8:
                        t = new proto.google.protobuf.OneofDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader), e.addOneofDecl(t);
                        break;
                    case 7:
                        t = new proto.google.protobuf.MessageOptions;
                        o.readMessage(t, proto.google.protobuf.MessageOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    case 9:
                        t = new proto.google.protobuf.DescriptorProto.ReservedRange;
                        o.readMessage(t, proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader), e.addReservedRange(t);
                        break;
                    case 10:
                        t = o.readString();
                        e.addReservedName(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.DescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.DescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.DescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), (t = e.getFieldList()).length > 0 && o.writeRepeatedMessage(2, t, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter), (t = e.getExtensionList()).length > 0 && o.writeRepeatedMessage(6, t, proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter), (t = e.getNestedTypeList()).length > 0 && o.writeRepeatedMessage(3, t, proto.google.protobuf.DescriptorProto.serializeBinaryToWriter), (t = e.getEnumTypeList()).length > 0 && o.writeRepeatedMessage(4, t, proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter), (t = e.getExtensionRangeList()).length > 0 && o.writeRepeatedMessage(5, t, proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter), (t = e.getOneofDeclList()).length > 0 && o.writeRepeatedMessage(8, t, proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter), null != (t = e.getOptions()) && o.writeMessage(7, t, proto.google.protobuf.MessageOptions.serializeBinaryToWriter), (t = e.getReservedRangeList()).length > 0 && o.writeRepeatedMessage(9, t, proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter), (t = e.getReservedNameList()).length > 0 && o.writeRepeatedString(10, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.toObject = function (e) {
            return proto.google.protobuf.DescriptorProto.ExtensionRange.toObject(e, this)
        }, proto.google.protobuf.DescriptorProto.ExtensionRange.toObject = function (e, o) {
            var t, n = {
                start: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                end: null == (t = r.Message.getField(o, 2)) ? undefined : t,
                options: (t = o.getOptions()) && proto.google.protobuf.ExtensionRangeOptions.toObject(e, t)
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.DescriptorProto.ExtensionRange;
            return proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readInt32();
                        e.setStart(t);
                        break;
                    case 2:
                        t = o.readInt32();
                        e.setEnd(t);
                        break;
                    case 3:
                        t = new proto.google.protobuf.ExtensionRangeOptions;
                        o.readMessage(t, proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.DescriptorProto.ExtensionRange.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeInt32(1, t), null != (t = r.Message.getField(e, 2)) && o.writeInt32(2, t), null != (t = e.getOptions()) && o.writeMessage(3, t, proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getStart = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setStart = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearStart = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasStart = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getEnd = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setEnd = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearEnd = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasEnd = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.ExtensionRangeOptions, 3)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.DescriptorProto.ExtensionRange.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 3)
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.DescriptorProto.ReservedRange.prototype.toObject = function (e) {
            return proto.google.protobuf.DescriptorProto.ReservedRange.toObject(e, this)
        }, proto.google.protobuf.DescriptorProto.ReservedRange.toObject = function (e, o) {
            var t, n = {
                start: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                end: null == (t = r.Message.getField(o, 2)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.DescriptorProto.ReservedRange;
            return proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.DescriptorProto.ReservedRange.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readInt32();
                        e.setStart(t);
                        break;
                    case 2:
                        t = o.readInt32();
                        e.setEnd(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.DescriptorProto.ReservedRange.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeInt32(1, t), null != (t = r.Message.getField(e, 2)) && o.writeInt32(2, t)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getStart = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setStart = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearStart = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasStart = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.getEnd = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.setEnd = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.clearEnd = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.DescriptorProto.ReservedRange.prototype.hasEnd = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.DescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.DescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.DescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.DescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.DescriptorProto.prototype.getFieldList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 2)
        },proto.google.protobuf.DescriptorProto.prototype.setFieldList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        },proto.google.protobuf.DescriptorProto.prototype.addField = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.FieldDescriptorProto, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearFieldList = function () {
            return this.setFieldList([])
        },proto.google.protobuf.DescriptorProto.prototype.getExtensionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.FieldDescriptorProto, 6)
        },proto.google.protobuf.DescriptorProto.prototype.setExtensionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        },proto.google.protobuf.DescriptorProto.prototype.addExtension$ = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.google.protobuf.FieldDescriptorProto, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearExtensionList = function () {
            return this.setExtensionList([])
        },proto.google.protobuf.DescriptorProto.prototype.getNestedTypeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto, 3)
        },proto.google.protobuf.DescriptorProto.prototype.setNestedTypeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        },proto.google.protobuf.DescriptorProto.prototype.addNestedType = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.google.protobuf.DescriptorProto, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearNestedTypeList = function () {
            return this.setNestedTypeList([])
        },proto.google.protobuf.DescriptorProto.prototype.getEnumTypeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto, 4)
        },proto.google.protobuf.DescriptorProto.prototype.setEnumTypeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.google.protobuf.DescriptorProto.prototype.addEnumType = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.google.protobuf.EnumDescriptorProto, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearEnumTypeList = function () {
            return this.setEnumTypeList([])
        },proto.google.protobuf.DescriptorProto.prototype.getExtensionRangeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ExtensionRange, 5)
        },proto.google.protobuf.DescriptorProto.prototype.setExtensionRangeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        },proto.google.protobuf.DescriptorProto.prototype.addExtensionRange = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.google.protobuf.DescriptorProto.ExtensionRange, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearExtensionRangeList = function () {
            return this.setExtensionRangeList([])
        },proto.google.protobuf.DescriptorProto.prototype.getOneofDeclList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.OneofDescriptorProto, 8)
        },proto.google.protobuf.DescriptorProto.prototype.setOneofDeclList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 8, e)
        },proto.google.protobuf.DescriptorProto.prototype.addOneofDecl = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 8, e, proto.google.protobuf.OneofDescriptorProto, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearOneofDeclList = function () {
            return this.setOneofDeclList([])
        },proto.google.protobuf.DescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.MessageOptions, 7)
        },proto.google.protobuf.DescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        },proto.google.protobuf.DescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.DescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 7)
        },proto.google.protobuf.DescriptorProto.prototype.getReservedRangeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.DescriptorProto.ReservedRange, 9)
        },proto.google.protobuf.DescriptorProto.prototype.setReservedRangeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 9, e)
        },proto.google.protobuf.DescriptorProto.prototype.addReservedRange = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 9, e, proto.google.protobuf.DescriptorProto.ReservedRange, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearReservedRangeList = function () {
            return this.setReservedRangeList([])
        },proto.google.protobuf.DescriptorProto.prototype.getReservedNameList = function () {
            return r.Message.getRepeatedField(this, 10)
        },proto.google.protobuf.DescriptorProto.prototype.setReservedNameList = function (e) {
            return r.Message.setField(this, 10, e || [])
        },proto.google.protobuf.DescriptorProto.prototype.addReservedName = function (e, o) {
            return r.Message.addToRepeatedField(this, 10, e, o)
        },proto.google.protobuf.DescriptorProto.prototype.clearReservedNameList = function () {
            return this.setReservedNameList([])
        },proto.google.protobuf.ExtensionRangeOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.ExtensionRangeOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.ExtensionRangeOptions.toObject(e, this)
        }, proto.google.protobuf.ExtensionRangeOptions.toObject = function (e, o) {
            var t = {uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)};
            return r.Message.toObjectExtension(o, t, proto.google.protobuf.ExtensionRangeOptions.extensions, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension, e), e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.ExtensionRangeOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.ExtensionRangeOptions;
            return proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.ExtensionRangeOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                if (999 === o.getFieldNumber()) {
                    var t = new proto.google.protobuf.UninterpretedOption;
                    o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t)
                } else r.Message.readBinaryExtension(e, o, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension, proto.google.protobuf.ExtensionRangeOptions.prototype.setExtension)
            }
            return e
        },proto.google.protobuf.ExtensionRangeOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.ExtensionRangeOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.ExtensionRangeOptions.extensionsBinary, proto.google.protobuf.ExtensionRangeOptions.prototype.getExtension)
        },proto.google.protobuf.ExtensionRangeOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.ExtensionRangeOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.ExtensionRangeOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.ExtensionRangeOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FieldDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.FieldDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.FieldDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                number: null == (t = r.Message.getField(o, 3)) ? undefined : t,
                label: null == (t = r.Message.getField(o, 4)) ? undefined : t,
                type: null == (t = r.Message.getField(o, 5)) ? undefined : t,
                typeName: null == (t = r.Message.getField(o, 6)) ? undefined : t,
                extendee: null == (t = r.Message.getField(o, 2)) ? undefined : t,
                defaultValue: null == (t = r.Message.getField(o, 7)) ? undefined : t,
                oneofIndex: null == (t = r.Message.getField(o, 9)) ? undefined : t,
                jsonName: null == (t = r.Message.getField(o, 10)) ? undefined : t,
                options: (t = o.getOptions()) && proto.google.protobuf.FieldOptions.toObject(e, t),
                proto3Optional: null == (t = r.Message.getBooleanField(o, 17)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.FieldDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.FieldDescriptorProto;
            return proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.FieldDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 3:
                        t = o.readInt32();
                        e.setNumber(t);
                        break;
                    case 4:
                        t = o.readEnum();
                        e.setLabel(t);
                        break;
                    case 5:
                        t = o.readEnum();
                        e.setType(t);
                        break;
                    case 6:
                        t = o.readString();
                        e.setTypeName(t);
                        break;
                    case 2:
                        t = o.readString();
                        e.setExtendee(t);
                        break;
                    case 7:
                        t = o.readString();
                        e.setDefaultValue(t);
                        break;
                    case 9:
                        t = o.readInt32();
                        e.setOneofIndex(t);
                        break;
                    case 10:
                        t = o.readString();
                        e.setJsonName(t);
                        break;
                    case 8:
                        t = new proto.google.protobuf.FieldOptions;
                        o.readMessage(t, proto.google.protobuf.FieldOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    case 17:
                        t = o.readBool();
                        e.setProto3Optional(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.FieldDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.FieldDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = r.Message.getField(e, 3)) && o.writeInt32(3, t), null != (t = r.Message.getField(e, 4)) && o.writeEnum(4, t), null != (t = r.Message.getField(e, 5)) && o.writeEnum(5, t), null != (t = r.Message.getField(e, 6)) && o.writeString(6, t), null != (t = r.Message.getField(e, 2)) && o.writeString(2, t), null != (t = r.Message.getField(e, 7)) && o.writeString(7, t), null != (t = r.Message.getField(e, 9)) && o.writeInt32(9, t), null != (t = r.Message.getField(e, 10)) && o.writeString(10, t), null != (t = e.getOptions()) && o.writeMessage(8, t, proto.google.protobuf.FieldOptions.serializeBinaryToWriter), null != (t = r.Message.getField(e, 17)) && o.writeBool(17, t)
        },proto.google.protobuf.FieldDescriptorProto.Type = {
            TYPE_DOUBLE: 1,
            TYPE_FLOAT: 2,
            TYPE_INT64: 3,
            TYPE_UINT64: 4,
            TYPE_INT32: 5,
            TYPE_FIXED64: 6,
            TYPE_FIXED32: 7,
            TYPE_BOOL: 8,
            TYPE_STRING: 9,
            TYPE_GROUP: 10,
            TYPE_MESSAGE: 11,
            TYPE_BYTES: 12,
            TYPE_UINT32: 13,
            TYPE_ENUM: 14,
            TYPE_SFIXED32: 15,
            TYPE_SFIXED64: 16,
            TYPE_SINT32: 17,
            TYPE_SINT64: 18
        },proto.google.protobuf.FieldDescriptorProto.Label = {
            LABEL_OPTIONAL: 1,
            LABEL_REQUIRED: 2,
            LABEL_REPEATED: 3
        },proto.google.protobuf.FieldDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.FieldDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getNumber = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.google.protobuf.FieldDescriptorProto.prototype.setNumber = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearNumber = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasNumber = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getLabel = function () {
            return r.Message.getFieldWithDefault(this, 4, 1)
        },proto.google.protobuf.FieldDescriptorProto.prototype.setLabel = function (e) {
            return r.Message.setField(this, 4, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearLabel = function () {
            return r.Message.setField(this, 4, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasLabel = function () {
            return null != r.Message.getField(this, 4)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 5, 1)
        },proto.google.protobuf.FieldDescriptorProto.prototype.setType = function (e) {
            return r.Message.setField(this, 5, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearType = function () {
            return r.Message.setField(this, 5, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasType = function () {
            return null != r.Message.getField(this, 5)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getTypeName = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.google.protobuf.FieldDescriptorProto.prototype.setTypeName = function (e) {
            return r.Message.setField(this, 6, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearTypeName = function () {
            return r.Message.setField(this, 6, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasTypeName = function () {
            return null != r.Message.getField(this, 6)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getExtendee = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.google.protobuf.FieldDescriptorProto.prototype.setExtendee = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearExtendee = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasExtendee = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getDefaultValue = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.google.protobuf.FieldDescriptorProto.prototype.setDefaultValue = function (e) {
            return r.Message.setField(this, 7, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearDefaultValue = function () {
            return r.Message.setField(this, 7, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasDefaultValue = function () {
            return null != r.Message.getField(this, 7)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getOneofIndex = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        },proto.google.protobuf.FieldDescriptorProto.prototype.setOneofIndex = function (e) {
            return r.Message.setField(this, 9, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearOneofIndex = function () {
            return r.Message.setField(this, 9, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasOneofIndex = function () {
            return null != r.Message.getField(this, 9)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getJsonName = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.google.protobuf.FieldDescriptorProto.prototype.setJsonName = function (e) {
            return r.Message.setField(this, 10, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearJsonName = function () {
            return r.Message.setField(this, 10, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasJsonName = function () {
            return null != r.Message.getField(this, 10)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.FieldOptions, 8)
        },proto.google.protobuf.FieldDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 8)
        },proto.google.protobuf.FieldDescriptorProto.prototype.getProto3Optional = function () {
            return r.Message.getBooleanFieldWithDefault(this, 17, !1)
        },proto.google.protobuf.FieldDescriptorProto.prototype.setProto3Optional = function (e) {
            return r.Message.setField(this, 17, e)
        },proto.google.protobuf.FieldDescriptorProto.prototype.clearProto3Optional = function () {
            return r.Message.setField(this, 17, undefined)
        },proto.google.protobuf.FieldDescriptorProto.prototype.hasProto3Optional = function () {
            return null != r.Message.getField(this, 17)
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.OneofDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.OneofDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.OneofDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                options: (t = o.getOptions()) && proto.google.protobuf.OneofOptions.toObject(e, t)
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.OneofDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.OneofDescriptorProto;
            return proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.OneofDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = new proto.google.protobuf.OneofOptions;
                        o.readMessage(t, proto.google.protobuf.OneofOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.OneofDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.OneofDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = e.getOptions()) && o.writeMessage(2, t, proto.google.protobuf.OneofOptions.serializeBinaryToWriter)
        },proto.google.protobuf.OneofDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.OneofDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.OneofDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.OneofDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.OneofDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.OneofOptions, 2)
        },proto.google.protobuf.OneofDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.google.protobuf.OneofDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.OneofDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.EnumDescriptorProto.repeatedFields_ = [2, 4, 5],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.EnumDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.EnumDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                valueList: r.Message.toObjectList(o.getValueList(), proto.google.protobuf.EnumValueDescriptorProto.toObject, e),
                options: (t = o.getOptions()) && proto.google.protobuf.EnumOptions.toObject(e, t),
                reservedRangeList: r.Message.toObjectList(o.getReservedRangeList(), proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject, e),
                reservedNameList: null == (t = r.Message.getRepeatedField(o, 5)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.EnumDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.EnumDescriptorProto;
            return proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.EnumDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = new proto.google.protobuf.EnumValueDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader), e.addValue(t);
                        break;
                    case 3:
                        t = new proto.google.protobuf.EnumOptions;
                        o.readMessage(t, proto.google.protobuf.EnumOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    case 4:
                        t = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
                        o.readMessage(t, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader), e.addReservedRange(t);
                        break;
                    case 5:
                        t = o.readString();
                        e.addReservedName(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.EnumDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.EnumDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), (t = e.getValueList()).length > 0 && o.writeRepeatedMessage(2, t, proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter), null != (t = e.getOptions()) && o.writeMessage(3, t, proto.google.protobuf.EnumOptions.serializeBinaryToWriter), (t = e.getReservedRangeList()).length > 0 && o.writeRepeatedMessage(4, t, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter), (t = e.getReservedNameList()).length > 0 && o.writeRepeatedString(5, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.toObject = function (e) {
            return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(e, this)
        }, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject = function (e, o) {
            var t, n = {
                start: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                end: null == (t = r.Message.getField(o, 2)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.EnumDescriptorProto.EnumReservedRange;
            return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readInt32();
                        e.setStart(t);
                        break;
                    case 2:
                        t = o.readInt32();
                        e.setEnd(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeInt32(1, t), null != (t = r.Message.getField(e, 2)) && o.writeInt32(2, t)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getStart = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setStart = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearStart = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasStart = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.getEnd = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.setEnd = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.clearEnd = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.EnumDescriptorProto.EnumReservedRange.prototype.hasEnd = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.EnumDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.EnumDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.EnumDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.EnumDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.EnumDescriptorProto.prototype.getValueList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumValueDescriptorProto, 2)
        },proto.google.protobuf.EnumDescriptorProto.prototype.setValueList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        },proto.google.protobuf.EnumDescriptorProto.prototype.addValue = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.EnumValueDescriptorProto, o)
        },proto.google.protobuf.EnumDescriptorProto.prototype.clearValueList = function () {
            return this.setValueList([])
        },proto.google.protobuf.EnumDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.EnumOptions, 3)
        },proto.google.protobuf.EnumDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.google.protobuf.EnumDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.EnumDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.EnumDescriptorProto.prototype.getReservedRangeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, 4)
        },proto.google.protobuf.EnumDescriptorProto.prototype.setReservedRangeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.google.protobuf.EnumDescriptorProto.prototype.addReservedRange = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.google.protobuf.EnumDescriptorProto.EnumReservedRange, o)
        },proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedRangeList = function () {
            return this.setReservedRangeList([])
        },proto.google.protobuf.EnumDescriptorProto.prototype.getReservedNameList = function () {
            return r.Message.getRepeatedField(this, 5)
        },proto.google.protobuf.EnumDescriptorProto.prototype.setReservedNameList = function (e) {
            return r.Message.setField(this, 5, e || [])
        },proto.google.protobuf.EnumDescriptorProto.prototype.addReservedName = function (e, o) {
            return r.Message.addToRepeatedField(this, 5, e, o)
        },proto.google.protobuf.EnumDescriptorProto.prototype.clearReservedNameList = function () {
            return this.setReservedNameList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumValueDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.EnumValueDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.EnumValueDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                number: null == (t = r.Message.getField(o, 2)) ? undefined : t,
                options: (t = o.getOptions()) && proto.google.protobuf.EnumValueOptions.toObject(e, t)
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.EnumValueDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.EnumValueDescriptorProto;
            return proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.EnumValueDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = o.readInt32();
                        e.setNumber(t);
                        break;
                    case 3:
                        t = new proto.google.protobuf.EnumValueOptions;
                        o.readMessage(t, proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.EnumValueDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = r.Message.getField(e, 2)) && o.writeInt32(2, t), null != (t = e.getOptions()) && o.writeMessage(3, t, proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.getNumber = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.setNumber = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.clearNumber = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.hasNumber = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.EnumValueOptions, 3)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.EnumValueDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.ServiceDescriptorProto.repeatedFields_ = [2],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.ServiceDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.ServiceDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.ServiceDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                methodList: r.Message.toObjectList(o.getMethodList(), proto.google.protobuf.MethodDescriptorProto.toObject, e),
                options: (t = o.getOptions()) && proto.google.protobuf.ServiceOptions.toObject(e, t)
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.ServiceDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.ServiceDescriptorProto;
            return proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.ServiceDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = new proto.google.protobuf.MethodDescriptorProto;
                        o.readMessage(t, proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader), e.addMethod(t);
                        break;
                    case 3:
                        t = new proto.google.protobuf.ServiceOptions;
                        o.readMessage(t, proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.ServiceDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.ServiceDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), (t = e.getMethodList()).length > 0 && o.writeRepeatedMessage(2, t, proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter), null != (t = e.getOptions()) && o.writeMessage(3, t, proto.google.protobuf.ServiceOptions.serializeBinaryToWriter)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.ServiceDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.getMethodList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.MethodDescriptorProto, 2)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.setMethodList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.addMethod = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.MethodDescriptorProto, o)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.clearMethodList = function () {
            return this.setMethodList([])
        },proto.google.protobuf.ServiceDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.ServiceOptions, 3)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.ServiceDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 3)
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.MethodDescriptorProto.prototype.toObject = function (e) {
            return proto.google.protobuf.MethodDescriptorProto.toObject(e, this)
        }, proto.google.protobuf.MethodDescriptorProto.toObject = function (e, o) {
            var t, n = {
                name: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                inputType: null == (t = r.Message.getField(o, 2)) ? undefined : t,
                outputType: null == (t = r.Message.getField(o, 3)) ? undefined : t,
                options: (t = o.getOptions()) && proto.google.protobuf.MethodOptions.toObject(e, t),
                clientStreaming: r.Message.getBooleanFieldWithDefault(o, 5, !1),
                serverStreaming: r.Message.getBooleanFieldWithDefault(o, 6, !1)
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.MethodDescriptorProto.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.MethodDescriptorProto;
            return proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.MethodDescriptorProto.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setName(t);
                        break;
                    case 2:
                        t = o.readString();
                        e.setInputType(t);
                        break;
                    case 3:
                        t = o.readString();
                        e.setOutputType(t);
                        break;
                    case 4:
                        t = new proto.google.protobuf.MethodOptions;
                        o.readMessage(t, proto.google.protobuf.MethodOptions.deserializeBinaryFromReader), e.setOptions(t);
                        break;
                    case 5:
                        t = o.readBool();
                        e.setClientStreaming(t);
                        break;
                    case 6:
                        t = o.readBool();
                        e.setServerStreaming(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.MethodDescriptorProto.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.MethodDescriptorProto.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = r.Message.getField(e, 2)) && o.writeString(2, t), null != (t = r.Message.getField(e, 3)) && o.writeString(3, t), null != (t = e.getOptions()) && o.writeMessage(4, t, proto.google.protobuf.MethodOptions.serializeBinaryToWriter), null != (t = r.Message.getField(e, 5)) && o.writeBool(5, t), null != (t = r.Message.getField(e, 6)) && o.writeBool(6, t)
        },proto.google.protobuf.MethodDescriptorProto.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.MethodDescriptorProto.prototype.setName = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.MethodDescriptorProto.prototype.clearName = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.MethodDescriptorProto.prototype.hasName = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.MethodDescriptorProto.prototype.getInputType = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.google.protobuf.MethodDescriptorProto.prototype.setInputType = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.MethodDescriptorProto.prototype.clearInputType = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.MethodDescriptorProto.prototype.hasInputType = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.MethodDescriptorProto.prototype.getOutputType = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.google.protobuf.MethodDescriptorProto.prototype.setOutputType = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.MethodDescriptorProto.prototype.clearOutputType = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.MethodDescriptorProto.prototype.hasOutputType = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.MethodDescriptorProto.prototype.getOptions = function () {
            return r.Message.getWrapperField(this, proto.google.protobuf.MethodOptions, 4)
        },proto.google.protobuf.MethodDescriptorProto.prototype.setOptions = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.google.protobuf.MethodDescriptorProto.prototype.clearOptions = function () {
            return this.setOptions(undefined)
        },proto.google.protobuf.MethodDescriptorProto.prototype.hasOptions = function () {
            return null != r.Message.getField(this, 4)
        },proto.google.protobuf.MethodDescriptorProto.prototype.getClientStreaming = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        },proto.google.protobuf.MethodDescriptorProto.prototype.setClientStreaming = function (e) {
            return r.Message.setField(this, 5, e)
        },proto.google.protobuf.MethodDescriptorProto.prototype.clearClientStreaming = function () {
            return r.Message.setField(this, 5, undefined)
        },proto.google.protobuf.MethodDescriptorProto.prototype.hasClientStreaming = function () {
            return null != r.Message.getField(this, 5)
        },proto.google.protobuf.MethodDescriptorProto.prototype.getServerStreaming = function () {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        },proto.google.protobuf.MethodDescriptorProto.prototype.setServerStreaming = function (e) {
            return r.Message.setField(this, 6, e)
        },proto.google.protobuf.MethodDescriptorProto.prototype.clearServerStreaming = function () {
            return r.Message.setField(this, 6, undefined)
        },proto.google.protobuf.MethodDescriptorProto.prototype.hasServerStreaming = function () {
            return null != r.Message.getField(this, 6)
        },proto.google.protobuf.FileOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FileOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.FileOptions.toObject(e, this)
        }, proto.google.protobuf.FileOptions.toObject = function (e, o) {
            var t, n = {
                javaPackage: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                javaOuterClassname: null == (t = r.Message.getField(o, 8)) ? undefined : t,
                javaMultipleFiles: r.Message.getBooleanFieldWithDefault(o, 10, !1),
                javaGenerateEqualsAndHash: null == (t = r.Message.getBooleanField(o, 20)) ? undefined : t,
                javaStringCheckUtf8: r.Message.getBooleanFieldWithDefault(o, 27, !1),
                optimizeFor: r.Message.getFieldWithDefault(o, 9, 1),
                goPackage: null == (t = r.Message.getField(o, 11)) ? undefined : t,
                ccGenericServices: r.Message.getBooleanFieldWithDefault(o, 16, !1),
                javaGenericServices: r.Message.getBooleanFieldWithDefault(o, 17, !1),
                pyGenericServices: r.Message.getBooleanFieldWithDefault(o, 18, !1),
                phpGenericServices: r.Message.getBooleanFieldWithDefault(o, 42, !1),
                deprecated: r.Message.getBooleanFieldWithDefault(o, 23, !1),
                ccEnableArenas: r.Message.getBooleanFieldWithDefault(o, 31, !0),
                objcClassPrefix: null == (t = r.Message.getField(o, 36)) ? undefined : t,
                csharpNamespace: null == (t = r.Message.getField(o, 37)) ? undefined : t,
                swiftPrefix: null == (t = r.Message.getField(o, 39)) ? undefined : t,
                phpClassPrefix: null == (t = r.Message.getField(o, 40)) ? undefined : t,
                phpNamespace: null == (t = r.Message.getField(o, 41)) ? undefined : t,
                phpMetadataNamespace: null == (t = r.Message.getField(o, 44)) ? undefined : t,
                rubyPackage: null == (t = r.Message.getField(o, 45)) ? undefined : t,
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, n, proto.google.protobuf.FileOptions.extensions, proto.google.protobuf.FileOptions.prototype.getExtension, e), e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.FileOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.FileOptions;
            return proto.google.protobuf.FileOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.FileOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setJavaPackage(t);
                        break;
                    case 8:
                        t = o.readString();
                        e.setJavaOuterClassname(t);
                        break;
                    case 10:
                        t = o.readBool();
                        e.setJavaMultipleFiles(t);
                        break;
                    case 20:
                        t = o.readBool();
                        e.setJavaGenerateEqualsAndHash(t);
                        break;
                    case 27:
                        t = o.readBool();
                        e.setJavaStringCheckUtf8(t);
                        break;
                    case 9:
                        t = o.readEnum();
                        e.setOptimizeFor(t);
                        break;
                    case 11:
                        t = o.readString();
                        e.setGoPackage(t);
                        break;
                    case 16:
                        t = o.readBool();
                        e.setCcGenericServices(t);
                        break;
                    case 17:
                        t = o.readBool();
                        e.setJavaGenericServices(t);
                        break;
                    case 18:
                        t = o.readBool();
                        e.setPyGenericServices(t);
                        break;
                    case 42:
                        t = o.readBool();
                        e.setPhpGenericServices(t);
                        break;
                    case 23:
                        t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 31:
                        t = o.readBool();
                        e.setCcEnableArenas(t);
                        break;
                    case 36:
                        t = o.readString();
                        e.setObjcClassPrefix(t);
                        break;
                    case 37:
                        t = o.readString();
                        e.setCsharpNamespace(t);
                        break;
                    case 39:
                        t = o.readString();
                        e.setSwiftPrefix(t);
                        break;
                    case 40:
                        t = o.readString();
                        e.setPhpClassPrefix(t);
                        break;
                    case 41:
                        t = o.readString();
                        e.setPhpNamespace(t);
                        break;
                    case 44:
                        t = o.readString();
                        e.setPhpMetadataNamespace(t);
                        break;
                    case 45:
                        t = o.readString();
                        e.setRubyPackage(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.FileOptions.extensionsBinary, proto.google.protobuf.FileOptions.prototype.getExtension, proto.google.protobuf.FileOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.FileOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.FileOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.FileOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = r.Message.getField(e, 8)) && o.writeString(8, t), null != (t = r.Message.getField(e, 10)) && o.writeBool(10, t), null != (t = r.Message.getField(e, 20)) && o.writeBool(20, t), null != (t = r.Message.getField(e, 27)) && o.writeBool(27, t), null != (t = r.Message.getField(e, 9)) && o.writeEnum(9, t), null != (t = r.Message.getField(e, 11)) && o.writeString(11, t), null != (t = r.Message.getField(e, 16)) && o.writeBool(16, t), null != (t = r.Message.getField(e, 17)) && o.writeBool(17, t), null != (t = r.Message.getField(e, 18)) && o.writeBool(18, t), null != (t = r.Message.getField(e, 42)) && o.writeBool(42, t), null != (t = r.Message.getField(e, 23)) && o.writeBool(23, t), null != (t = r.Message.getField(e, 31)) && o.writeBool(31, t), null != (t = r.Message.getField(e, 36)) && o.writeString(36, t), null != (t = r.Message.getField(e, 37)) && o.writeString(37, t), null != (t = r.Message.getField(e, 39)) && o.writeString(39, t), null != (t = r.Message.getField(e, 40)) && o.writeString(40, t), null != (t = r.Message.getField(e, 41)) && o.writeString(41, t), null != (t = r.Message.getField(e, 44)) && o.writeString(44, t), null != (t = r.Message.getField(e, 45)) && o.writeString(45, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.FileOptions.extensionsBinary, proto.google.protobuf.FileOptions.prototype.getExtension)
        },proto.google.protobuf.FileOptions.OptimizeMode = {
            SPEED: 1,
            CODE_SIZE: 2,
            LITE_RUNTIME: 3
        },proto.google.protobuf.FileOptions.prototype.getJavaPackage = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.FileOptions.prototype.setJavaPackage = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.FileOptions.prototype.clearJavaPackage = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasJavaPackage = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.FileOptions.prototype.getJavaOuterClassname = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.google.protobuf.FileOptions.prototype.setJavaOuterClassname = function (e) {
            return r.Message.setField(this, 8, e)
        },proto.google.protobuf.FileOptions.prototype.clearJavaOuterClassname = function () {
            return r.Message.setField(this, 8, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasJavaOuterClassname = function () {
            return null != r.Message.getField(this, 8)
        },proto.google.protobuf.FileOptions.prototype.getJavaMultipleFiles = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        },proto.google.protobuf.FileOptions.prototype.setJavaMultipleFiles = function (e) {
            return r.Message.setField(this, 10, e)
        },proto.google.protobuf.FileOptions.prototype.clearJavaMultipleFiles = function () {
            return r.Message.setField(this, 10, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasJavaMultipleFiles = function () {
            return null != r.Message.getField(this, 10)
        },proto.google.protobuf.FileOptions.prototype.getJavaGenerateEqualsAndHash = function () {
            return r.Message.getBooleanFieldWithDefault(this, 20, !1)
        },proto.google.protobuf.FileOptions.prototype.setJavaGenerateEqualsAndHash = function (e) {
            return r.Message.setField(this, 20, e)
        },proto.google.protobuf.FileOptions.prototype.clearJavaGenerateEqualsAndHash = function () {
            return r.Message.setField(this, 20, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasJavaGenerateEqualsAndHash = function () {
            return null != r.Message.getField(this, 20)
        },proto.google.protobuf.FileOptions.prototype.getJavaStringCheckUtf8 = function () {
            return r.Message.getBooleanFieldWithDefault(this, 27, !1)
        },proto.google.protobuf.FileOptions.prototype.setJavaStringCheckUtf8 = function (e) {
            return r.Message.setField(this, 27, e)
        },proto.google.protobuf.FileOptions.prototype.clearJavaStringCheckUtf8 = function () {
            return r.Message.setField(this, 27, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasJavaStringCheckUtf8 = function () {
            return null != r.Message.getField(this, 27)
        },proto.google.protobuf.FileOptions.prototype.getOptimizeFor = function () {
            return r.Message.getFieldWithDefault(this, 9, 1)
        },proto.google.protobuf.FileOptions.prototype.setOptimizeFor = function (e) {
            return r.Message.setField(this, 9, e)
        },proto.google.protobuf.FileOptions.prototype.clearOptimizeFor = function () {
            return r.Message.setField(this, 9, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasOptimizeFor = function () {
            return null != r.Message.getField(this, 9)
        },proto.google.protobuf.FileOptions.prototype.getGoPackage = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        },proto.google.protobuf.FileOptions.prototype.setGoPackage = function (e) {
            return r.Message.setField(this, 11, e)
        },proto.google.protobuf.FileOptions.prototype.clearGoPackage = function () {
            return r.Message.setField(this, 11, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasGoPackage = function () {
            return null != r.Message.getField(this, 11)
        },proto.google.protobuf.FileOptions.prototype.getCcGenericServices = function () {
            return r.Message.getBooleanFieldWithDefault(this, 16, !1)
        },proto.google.protobuf.FileOptions.prototype.setCcGenericServices = function (e) {
            return r.Message.setField(this, 16, e)
        },proto.google.protobuf.FileOptions.prototype.clearCcGenericServices = function () {
            return r.Message.setField(this, 16, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasCcGenericServices = function () {
            return null != r.Message.getField(this, 16)
        },proto.google.protobuf.FileOptions.prototype.getJavaGenericServices = function () {
            return r.Message.getBooleanFieldWithDefault(this, 17, !1)
        },proto.google.protobuf.FileOptions.prototype.setJavaGenericServices = function (e) {
            return r.Message.setField(this, 17, e)
        },proto.google.protobuf.FileOptions.prototype.clearJavaGenericServices = function () {
            return r.Message.setField(this, 17, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasJavaGenericServices = function () {
            return null != r.Message.getField(this, 17)
        },proto.google.protobuf.FileOptions.prototype.getPyGenericServices = function () {
            return r.Message.getBooleanFieldWithDefault(this, 18, !1)
        },proto.google.protobuf.FileOptions.prototype.setPyGenericServices = function (e) {
            return r.Message.setField(this, 18, e)
        },proto.google.protobuf.FileOptions.prototype.clearPyGenericServices = function () {
            return r.Message.setField(this, 18, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasPyGenericServices = function () {
            return null != r.Message.getField(this, 18)
        },proto.google.protobuf.FileOptions.prototype.getPhpGenericServices = function () {
            return r.Message.getBooleanFieldWithDefault(this, 42, !1)
        },proto.google.protobuf.FileOptions.prototype.setPhpGenericServices = function (e) {
            return r.Message.setField(this, 42, e)
        },proto.google.protobuf.FileOptions.prototype.clearPhpGenericServices = function () {
            return r.Message.setField(this, 42, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasPhpGenericServices = function () {
            return null != r.Message.getField(this, 42)
        },proto.google.protobuf.FileOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 23, !1)
        },proto.google.protobuf.FileOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 23, e)
        },proto.google.protobuf.FileOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 23, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 23)
        },proto.google.protobuf.FileOptions.prototype.getCcEnableArenas = function () {
            return r.Message.getBooleanFieldWithDefault(this, 31, !0)
        },proto.google.protobuf.FileOptions.prototype.setCcEnableArenas = function (e) {
            return r.Message.setField(this, 31, e)
        },proto.google.protobuf.FileOptions.prototype.clearCcEnableArenas = function () {
            return r.Message.setField(this, 31, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasCcEnableArenas = function () {
            return null != r.Message.getField(this, 31)
        },proto.google.protobuf.FileOptions.prototype.getObjcClassPrefix = function () {
            return r.Message.getFieldWithDefault(this, 36, "")
        },proto.google.protobuf.FileOptions.prototype.setObjcClassPrefix = function (e) {
            return r.Message.setField(this, 36, e)
        },proto.google.protobuf.FileOptions.prototype.clearObjcClassPrefix = function () {
            return r.Message.setField(this, 36, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasObjcClassPrefix = function () {
            return null != r.Message.getField(this, 36)
        },proto.google.protobuf.FileOptions.prototype.getCsharpNamespace = function () {
            return r.Message.getFieldWithDefault(this, 37, "")
        },proto.google.protobuf.FileOptions.prototype.setCsharpNamespace = function (e) {
            return r.Message.setField(this, 37, e)
        },proto.google.protobuf.FileOptions.prototype.clearCsharpNamespace = function () {
            return r.Message.setField(this, 37, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasCsharpNamespace = function () {
            return null != r.Message.getField(this, 37)
        },proto.google.protobuf.FileOptions.prototype.getSwiftPrefix = function () {
            return r.Message.getFieldWithDefault(this, 39, "")
        },proto.google.protobuf.FileOptions.prototype.setSwiftPrefix = function (e) {
            return r.Message.setField(this, 39, e)
        },proto.google.protobuf.FileOptions.prototype.clearSwiftPrefix = function () {
            return r.Message.setField(this, 39, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasSwiftPrefix = function () {
            return null != r.Message.getField(this, 39)
        },proto.google.protobuf.FileOptions.prototype.getPhpClassPrefix = function () {
            return r.Message.getFieldWithDefault(this, 40, "")
        },proto.google.protobuf.FileOptions.prototype.setPhpClassPrefix = function (e) {
            return r.Message.setField(this, 40, e)
        },proto.google.protobuf.FileOptions.prototype.clearPhpClassPrefix = function () {
            return r.Message.setField(this, 40, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasPhpClassPrefix = function () {
            return null != r.Message.getField(this, 40)
        },proto.google.protobuf.FileOptions.prototype.getPhpNamespace = function () {
            return r.Message.getFieldWithDefault(this, 41, "")
        },proto.google.protobuf.FileOptions.prototype.setPhpNamespace = function (e) {
            return r.Message.setField(this, 41, e)
        },proto.google.protobuf.FileOptions.prototype.clearPhpNamespace = function () {
            return r.Message.setField(this, 41, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasPhpNamespace = function () {
            return null != r.Message.getField(this, 41)
        },proto.google.protobuf.FileOptions.prototype.getPhpMetadataNamespace = function () {
            return r.Message.getFieldWithDefault(this, 44, "")
        },proto.google.protobuf.FileOptions.prototype.setPhpMetadataNamespace = function (e) {
            return r.Message.setField(this, 44, e)
        },proto.google.protobuf.FileOptions.prototype.clearPhpMetadataNamespace = function () {
            return r.Message.setField(this, 44, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasPhpMetadataNamespace = function () {
            return null != r.Message.getField(this, 44)
        },proto.google.protobuf.FileOptions.prototype.getRubyPackage = function () {
            return r.Message.getFieldWithDefault(this, 45, "")
        },proto.google.protobuf.FileOptions.prototype.setRubyPackage = function (e) {
            return r.Message.setField(this, 45, e)
        },proto.google.protobuf.FileOptions.prototype.clearRubyPackage = function () {
            return r.Message.setField(this, 45, undefined)
        },proto.google.protobuf.FileOptions.prototype.hasRubyPackage = function () {
            return null != r.Message.getField(this, 45)
        },proto.google.protobuf.FileOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.FileOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.FileOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.FileOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.MessageOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.MessageOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.MessageOptions.toObject(e, this)
        }, proto.google.protobuf.MessageOptions.toObject = function (e, o) {
            var t, n = {
                messageSetWireFormat: r.Message.getBooleanFieldWithDefault(o, 1, !1),
                noStandardDescriptorAccessor: r.Message.getBooleanFieldWithDefault(o, 2, !1),
                deprecated: r.Message.getBooleanFieldWithDefault(o, 3, !1),
                mapEntry: null == (t = r.Message.getBooleanField(o, 7)) ? undefined : t,
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, n, proto.google.protobuf.MessageOptions.extensions, proto.google.protobuf.MessageOptions.prototype.getExtension, e), e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.MessageOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.MessageOptions;
            return proto.google.protobuf.MessageOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.MessageOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readBool();
                        e.setMessageSetWireFormat(t);
                        break;
                    case 2:
                        t = o.readBool();
                        e.setNoStandardDescriptorAccessor(t);
                        break;
                    case 3:
                        t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 7:
                        t = o.readBool();
                        e.setMapEntry(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.MessageOptions.extensionsBinary, proto.google.protobuf.MessageOptions.prototype.getExtension, proto.google.protobuf.MessageOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.MessageOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.MessageOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.MessageOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeBool(1, t), null != (t = r.Message.getField(e, 2)) && o.writeBool(2, t), null != (t = r.Message.getField(e, 3)) && o.writeBool(3, t), null != (t = r.Message.getField(e, 7)) && o.writeBool(7, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.MessageOptions.extensionsBinary, proto.google.protobuf.MessageOptions.prototype.getExtension)
        },proto.google.protobuf.MessageOptions.prototype.getMessageSetWireFormat = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.google.protobuf.MessageOptions.prototype.setMessageSetWireFormat = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.MessageOptions.prototype.clearMessageSetWireFormat = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.MessageOptions.prototype.hasMessageSetWireFormat = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.MessageOptions.prototype.getNoStandardDescriptorAccessor = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.google.protobuf.MessageOptions.prototype.setNoStandardDescriptorAccessor = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.MessageOptions.prototype.clearNoStandardDescriptorAccessor = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.MessageOptions.prototype.hasNoStandardDescriptorAccessor = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.MessageOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        },proto.google.protobuf.MessageOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.MessageOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.MessageOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.MessageOptions.prototype.getMapEntry = function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        },proto.google.protobuf.MessageOptions.prototype.setMapEntry = function (e) {
            return r.Message.setField(this, 7, e)
        },proto.google.protobuf.MessageOptions.prototype.clearMapEntry = function () {
            return r.Message.setField(this, 7, undefined)
        },proto.google.protobuf.MessageOptions.prototype.hasMapEntry = function () {
            return null != r.Message.getField(this, 7)
        },proto.google.protobuf.MessageOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.MessageOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.MessageOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.MessageOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.FieldOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.FieldOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.FieldOptions.toObject(e, this)
        }, proto.google.protobuf.FieldOptions.toObject = function (e, o) {
            var t, n = {
                ctype: r.Message.getFieldWithDefault(o, 1, 0),
                packed: null == (t = r.Message.getBooleanField(o, 2)) ? undefined : t,
                jstype: r.Message.getFieldWithDefault(o, 6, 0),
                lazy: r.Message.getBooleanFieldWithDefault(o, 5, !1),
                deprecated: r.Message.getBooleanFieldWithDefault(o, 3, !1),
                weak: r.Message.getBooleanFieldWithDefault(o, 10, !1),
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, n, proto.google.protobuf.FieldOptions.extensions, proto.google.protobuf.FieldOptions.prototype.getExtension, e), e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.FieldOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.FieldOptions;
            return proto.google.protobuf.FieldOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.FieldOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readEnum();
                        e.setCtype(t);
                        break;
                    case 2:
                        t = o.readBool();
                        e.setPacked(t);
                        break;
                    case 6:
                        t = o.readEnum();
                        e.setJstype(t);
                        break;
                    case 5:
                        t = o.readBool();
                        e.setLazy(t);
                        break;
                    case 3:
                        t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 10:
                        t = o.readBool();
                        e.setWeak(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.FieldOptions.extensionsBinary, proto.google.protobuf.FieldOptions.prototype.getExtension, proto.google.protobuf.FieldOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.FieldOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.FieldOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.FieldOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeEnum(1, t), null != (t = r.Message.getField(e, 2)) && o.writeBool(2, t), null != (t = r.Message.getField(e, 6)) && o.writeEnum(6, t), null != (t = r.Message.getField(e, 5)) && o.writeBool(5, t), null != (t = r.Message.getField(e, 3)) && o.writeBool(3, t), null != (t = r.Message.getField(e, 10)) && o.writeBool(10, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.FieldOptions.extensionsBinary, proto.google.protobuf.FieldOptions.prototype.getExtension)
        },proto.google.protobuf.FieldOptions.CType = {
            STRING: 0,
            CORD: 1,
            STRING_PIECE: 2
        },proto.google.protobuf.FieldOptions.JSType = {
            JS_NORMAL: 0,
            JS_STRING: 1,
            JS_NUMBER: 2
        },proto.google.protobuf.FieldOptions.prototype.getCtype = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.google.protobuf.FieldOptions.prototype.setCtype = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.FieldOptions.prototype.clearCtype = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.FieldOptions.prototype.hasCtype = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.FieldOptions.prototype.getPacked = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.google.protobuf.FieldOptions.prototype.setPacked = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.FieldOptions.prototype.clearPacked = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.FieldOptions.prototype.hasPacked = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.FieldOptions.prototype.getJstype = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.google.protobuf.FieldOptions.prototype.setJstype = function (e) {
            return r.Message.setField(this, 6, e)
        },proto.google.protobuf.FieldOptions.prototype.clearJstype = function () {
            return r.Message.setField(this, 6, undefined)
        },proto.google.protobuf.FieldOptions.prototype.hasJstype = function () {
            return null != r.Message.getField(this, 6)
        },proto.google.protobuf.FieldOptions.prototype.getLazy = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        },proto.google.protobuf.FieldOptions.prototype.setLazy = function (e) {
            return r.Message.setField(this, 5, e)
        },proto.google.protobuf.FieldOptions.prototype.clearLazy = function () {
            return r.Message.setField(this, 5, undefined)
        },proto.google.protobuf.FieldOptions.prototype.hasLazy = function () {
            return null != r.Message.getField(this, 5)
        },proto.google.protobuf.FieldOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        },proto.google.protobuf.FieldOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.FieldOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.FieldOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.FieldOptions.prototype.getWeak = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        },proto.google.protobuf.FieldOptions.prototype.setWeak = function (e) {
            return r.Message.setField(this, 10, e)
        },proto.google.protobuf.FieldOptions.prototype.clearWeak = function () {
            return r.Message.setField(this, 10, undefined)
        },proto.google.protobuf.FieldOptions.prototype.hasWeak = function () {
            return null != r.Message.getField(this, 10)
        },proto.google.protobuf.FieldOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.FieldOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.FieldOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.FieldOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.OneofOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.OneofOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.OneofOptions.toObject(e, this)
        }, proto.google.protobuf.OneofOptions.toObject = function (e, o) {
            var t = {uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)};
            return r.Message.toObjectExtension(o, t, proto.google.protobuf.OneofOptions.extensions, proto.google.protobuf.OneofOptions.prototype.getExtension, e), e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.OneofOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.OneofOptions;
            return proto.google.protobuf.OneofOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.OneofOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                if (999 === o.getFieldNumber()) {
                    var t = new proto.google.protobuf.UninterpretedOption;
                    o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t)
                } else r.Message.readBinaryExtension(e, o, proto.google.protobuf.OneofOptions.extensionsBinary, proto.google.protobuf.OneofOptions.prototype.getExtension, proto.google.protobuf.OneofOptions.prototype.setExtension)
            }
            return e
        },proto.google.protobuf.OneofOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.OneofOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.OneofOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.OneofOptions.extensionsBinary, proto.google.protobuf.OneofOptions.prototype.getExtension)
        },proto.google.protobuf.OneofOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.OneofOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.OneofOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.OneofOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.EnumOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.EnumOptions.toObject(e, this)
        }, proto.google.protobuf.EnumOptions.toObject = function (e, o) {
            var t, n = {
                allowAlias: null == (t = r.Message.getBooleanField(o, 2)) ? undefined : t,
                deprecated: r.Message.getBooleanFieldWithDefault(o, 3, !1),
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, n, proto.google.protobuf.EnumOptions.extensions, proto.google.protobuf.EnumOptions.prototype.getExtension, e), e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.EnumOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.EnumOptions;
            return proto.google.protobuf.EnumOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.EnumOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 2:
                        var t = o.readBool();
                        e.setAllowAlias(t);
                        break;
                    case 3:
                        t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.EnumOptions.extensionsBinary, proto.google.protobuf.EnumOptions.prototype.getExtension, proto.google.protobuf.EnumOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.EnumOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.EnumOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.EnumOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 2)) && o.writeBool(2, t), null != (t = r.Message.getField(e, 3)) && o.writeBool(3, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.EnumOptions.extensionsBinary, proto.google.protobuf.EnumOptions.prototype.getExtension)
        },proto.google.protobuf.EnumOptions.prototype.getAllowAlias = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.google.protobuf.EnumOptions.prototype.setAllowAlias = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.EnumOptions.prototype.clearAllowAlias = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.EnumOptions.prototype.hasAllowAlias = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.EnumOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        },proto.google.protobuf.EnumOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.EnumOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.EnumOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.EnumOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.EnumOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.EnumOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.EnumOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.EnumValueOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.EnumValueOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.EnumValueOptions.toObject(e, this)
        }, proto.google.protobuf.EnumValueOptions.toObject = function (e, o) {
            var t = {
                deprecated: r.Message.getBooleanFieldWithDefault(o, 1, !1),
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, t, proto.google.protobuf.EnumValueOptions.extensions, proto.google.protobuf.EnumValueOptions.prototype.getExtension, e), e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.EnumValueOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.EnumValueOptions;
            return proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.EnumValueOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.EnumValueOptions.extensionsBinary, proto.google.protobuf.EnumValueOptions.prototype.getExtension, proto.google.protobuf.EnumValueOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.EnumValueOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.EnumValueOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeBool(1, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.EnumValueOptions.extensionsBinary, proto.google.protobuf.EnumValueOptions.prototype.getExtension)
        },proto.google.protobuf.EnumValueOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.google.protobuf.EnumValueOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.EnumValueOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.EnumValueOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.EnumValueOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.EnumValueOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.EnumValueOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.EnumValueOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.ServiceOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.ServiceOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.ServiceOptions.toObject(e, this)
        }, proto.google.protobuf.ServiceOptions.toObject = function (e, o) {
            var t = {
                deprecated: r.Message.getBooleanFieldWithDefault(o, 33, !1),
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, t, proto.google.protobuf.ServiceOptions.extensions, proto.google.protobuf.ServiceOptions.prototype.getExtension, e), e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.ServiceOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.ServiceOptions;
            return proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.ServiceOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 33:
                        var t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.ServiceOptions.extensionsBinary, proto.google.protobuf.ServiceOptions.prototype.getExtension, proto.google.protobuf.ServiceOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.ServiceOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.ServiceOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.ServiceOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 33)) && o.writeBool(33, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.ServiceOptions.extensionsBinary, proto.google.protobuf.ServiceOptions.prototype.getExtension)
        },proto.google.protobuf.ServiceOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 33, !1)
        },proto.google.protobuf.ServiceOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 33, e)
        },proto.google.protobuf.ServiceOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 33, undefined)
        },proto.google.protobuf.ServiceOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 33)
        },proto.google.protobuf.ServiceOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.ServiceOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.ServiceOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.ServiceOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.MethodOptions.repeatedFields_ = [999],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.MethodOptions.prototype.toObject = function (e) {
            return proto.google.protobuf.MethodOptions.toObject(e, this)
        }, proto.google.protobuf.MethodOptions.toObject = function (e, o) {
            var t = {
                deprecated: r.Message.getBooleanFieldWithDefault(o, 33, !1),
                idempotencyLevel: r.Message.getFieldWithDefault(o, 34, 0),
                uninterpretedOptionList: r.Message.toObjectList(o.getUninterpretedOptionList(), proto.google.protobuf.UninterpretedOption.toObject, e)
            };
            return r.Message.toObjectExtension(o, t, proto.google.protobuf.MethodOptions.extensions, proto.google.protobuf.MethodOptions.prototype.getExtension, e), e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.MethodOptions.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.MethodOptions;
            return proto.google.protobuf.MethodOptions.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.MethodOptions.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 33:
                        var t = o.readBool();
                        e.setDeprecated(t);
                        break;
                    case 34:
                        t = o.readEnum();
                        e.setIdempotencyLevel(t);
                        break;
                    case 999:
                        t = new proto.google.protobuf.UninterpretedOption;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader), e.addUninterpretedOption(t);
                        break;
                    default:
                        r.Message.readBinaryExtension(e, o, proto.google.protobuf.MethodOptions.extensionsBinary, proto.google.protobuf.MethodOptions.prototype.getExtension, proto.google.protobuf.MethodOptions.prototype.setExtension)
                }
            }
            return e
        },proto.google.protobuf.MethodOptions.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.MethodOptions.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.MethodOptions.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 33)) && o.writeBool(33, t), null != (t = r.Message.getField(e, 34)) && o.writeEnum(34, t), (t = e.getUninterpretedOptionList()).length > 0 && o.writeRepeatedMessage(999, t, proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter), r.Message.serializeBinaryExtensions(e, o, proto.google.protobuf.MethodOptions.extensionsBinary, proto.google.protobuf.MethodOptions.prototype.getExtension)
        },proto.google.protobuf.MethodOptions.IdempotencyLevel = {
            IDEMPOTENCY_UNKNOWN: 0,
            NO_SIDE_EFFECTS: 1,
            IDEMPOTENT: 2
        },proto.google.protobuf.MethodOptions.prototype.getDeprecated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 33, !1)
        },proto.google.protobuf.MethodOptions.prototype.setDeprecated = function (e) {
            return r.Message.setField(this, 33, e)
        },proto.google.protobuf.MethodOptions.prototype.clearDeprecated = function () {
            return r.Message.setField(this, 33, undefined)
        },proto.google.protobuf.MethodOptions.prototype.hasDeprecated = function () {
            return null != r.Message.getField(this, 33)
        },proto.google.protobuf.MethodOptions.prototype.getIdempotencyLevel = function () {
            return r.Message.getFieldWithDefault(this, 34, 0)
        },proto.google.protobuf.MethodOptions.prototype.setIdempotencyLevel = function (e) {
            return r.Message.setField(this, 34, e)
        },proto.google.protobuf.MethodOptions.prototype.clearIdempotencyLevel = function () {
            return r.Message.setField(this, 34, undefined)
        },proto.google.protobuf.MethodOptions.prototype.hasIdempotencyLevel = function () {
            return null != r.Message.getField(this, 34)
        },proto.google.protobuf.MethodOptions.prototype.getUninterpretedOptionList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption, 999)
        },proto.google.protobuf.MethodOptions.prototype.setUninterpretedOptionList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 999, e)
        },proto.google.protobuf.MethodOptions.prototype.addUninterpretedOption = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 999, e, proto.google.protobuf.UninterpretedOption, o)
        },proto.google.protobuf.MethodOptions.prototype.clearUninterpretedOptionList = function () {
            return this.setUninterpretedOptionList([])
        },proto.google.protobuf.UninterpretedOption.repeatedFields_ = [2],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.UninterpretedOption.prototype.toObject = function (e) {
            return proto.google.protobuf.UninterpretedOption.toObject(e, this)
        }, proto.google.protobuf.UninterpretedOption.toObject = function (e, o) {
            var t, n = {
                nameList: r.Message.toObjectList(o.getNameList(), proto.google.protobuf.UninterpretedOption.NamePart.toObject, e),
                identifierValue: null == (t = r.Message.getField(o, 3)) ? undefined : t,
                positiveIntValue: null == (t = r.Message.getField(o, 4)) ? undefined : t,
                negativeIntValue: null == (t = r.Message.getField(o, 5)) ? undefined : t,
                doubleValue: null == (t = r.Message.getOptionalFloatingPointField(o, 6)) ? undefined : t,
                stringValue: o.getStringValue_asB64(),
                aggregateValue: null == (t = r.Message.getField(o, 8)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.UninterpretedOption.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.UninterpretedOption;
            return proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.UninterpretedOption.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 2:
                        var t = new proto.google.protobuf.UninterpretedOption.NamePart;
                        o.readMessage(t, proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader), e.addName(t);
                        break;
                    case 3:
                        t = o.readString();
                        e.setIdentifierValue(t);
                        break;
                    case 4:
                        t = o.readUint64();
                        e.setPositiveIntValue(t);
                        break;
                    case 5:
                        t = o.readInt64();
                        e.setNegativeIntValue(t);
                        break;
                    case 6:
                        t = o.readDouble();
                        e.setDoubleValue(t);
                        break;
                    case 7:
                        t = o.readBytes();
                        e.setStringValue(t);
                        break;
                    case 8:
                        t = o.readString();
                        e.setAggregateValue(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.UninterpretedOption.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.UninterpretedOption.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getNameList()).length > 0 && o.writeRepeatedMessage(2, t, proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter), null != (t = r.Message.getField(e, 3)) && o.writeString(3, t), null != (t = r.Message.getField(e, 4)) && o.writeUint64(4, t), null != (t = r.Message.getField(e, 5)) && o.writeInt64(5, t), null != (t = r.Message.getField(e, 6)) && o.writeDouble(6, t), null != (t = r.Message.getField(e, 7)) && o.writeBytes(7, t), null != (t = r.Message.getField(e, 8)) && o.writeString(8, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.UninterpretedOption.NamePart.prototype.toObject = function (e) {
            return proto.google.protobuf.UninterpretedOption.NamePart.toObject(e, this)
        }, proto.google.protobuf.UninterpretedOption.NamePart.toObject = function (e, o) {
            var t, n = {
                namePart: null == (t = r.Message.getField(o, 1)) ? undefined : t,
                isExtension: null == (t = r.Message.getBooleanField(o, 2)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.UninterpretedOption.NamePart;
            return proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.UninterpretedOption.NamePart.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        var t = o.readString();
                        e.setNamePart(t);
                        break;
                    case 2:
                        t = o.readBool();
                        e.setIsExtension(t);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.UninterpretedOption.NamePart.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            null != (t = r.Message.getField(e, 1)) && o.writeString(1, t), null != (t = r.Message.getField(e, 2)) && o.writeBool(2, t)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.getNamePart = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.setNamePart = function (e) {
            return r.Message.setField(this, 1, e)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearNamePart = function () {
            return r.Message.setField(this, 1, undefined)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasNamePart = function () {
            return null != r.Message.getField(this, 1)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.getIsExtension = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.setIsExtension = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.clearIsExtension = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.UninterpretedOption.NamePart.prototype.hasIsExtension = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.UninterpretedOption.prototype.getNameList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.UninterpretedOption.NamePart, 2)
        },proto.google.protobuf.UninterpretedOption.prototype.setNameList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        },proto.google.protobuf.UninterpretedOption.prototype.addName = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.google.protobuf.UninterpretedOption.NamePart, o)
        },proto.google.protobuf.UninterpretedOption.prototype.clearNameList = function () {
            return this.setNameList([])
        },proto.google.protobuf.UninterpretedOption.prototype.getIdentifierValue = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.google.protobuf.UninterpretedOption.prototype.setIdentifierValue = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.UninterpretedOption.prototype.clearIdentifierValue = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.UninterpretedOption.prototype.hasIdentifierValue = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.UninterpretedOption.prototype.getPositiveIntValue = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.google.protobuf.UninterpretedOption.prototype.setPositiveIntValue = function (e) {
            return r.Message.setField(this, 4, e)
        },proto.google.protobuf.UninterpretedOption.prototype.clearPositiveIntValue = function () {
            return r.Message.setField(this, 4, undefined)
        },proto.google.protobuf.UninterpretedOption.prototype.hasPositiveIntValue = function () {
            return null != r.Message.getField(this, 4)
        },proto.google.protobuf.UninterpretedOption.prototype.getNegativeIntValue = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.google.protobuf.UninterpretedOption.prototype.setNegativeIntValue = function (e) {
            return r.Message.setField(this, 5, e)
        },proto.google.protobuf.UninterpretedOption.prototype.clearNegativeIntValue = function () {
            return r.Message.setField(this, 5, undefined)
        },proto.google.protobuf.UninterpretedOption.prototype.hasNegativeIntValue = function () {
            return null != r.Message.getField(this, 5)
        },proto.google.protobuf.UninterpretedOption.prototype.getDoubleValue = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 6, 0)
        },proto.google.protobuf.UninterpretedOption.prototype.setDoubleValue = function (e) {
            return r.Message.setField(this, 6, e)
        },proto.google.protobuf.UninterpretedOption.prototype.clearDoubleValue = function () {
            return r.Message.setField(this, 6, undefined)
        },proto.google.protobuf.UninterpretedOption.prototype.hasDoubleValue = function () {
            return null != r.Message.getField(this, 6)
        },proto.google.protobuf.UninterpretedOption.prototype.getStringValue = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asB64 = function () {
            return r.Message.bytesAsB64(this.getStringValue())
        },proto.google.protobuf.UninterpretedOption.prototype.getStringValue_asU8 = function () {
            return r.Message.bytesAsU8(this.getStringValue())
        },proto.google.protobuf.UninterpretedOption.prototype.setStringValue = function (e) {
            return r.Message.setField(this, 7, e)
        },proto.google.protobuf.UninterpretedOption.prototype.clearStringValue = function () {
            return r.Message.setField(this, 7, undefined)
        },proto.google.protobuf.UninterpretedOption.prototype.hasStringValue = function () {
            return null != r.Message.getField(this, 7)
        },proto.google.protobuf.UninterpretedOption.prototype.getAggregateValue = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.google.protobuf.UninterpretedOption.prototype.setAggregateValue = function (e) {
            return r.Message.setField(this, 8, e)
        },proto.google.protobuf.UninterpretedOption.prototype.clearAggregateValue = function () {
            return r.Message.setField(this, 8, undefined)
        },proto.google.protobuf.UninterpretedOption.prototype.hasAggregateValue = function () {
            return null != r.Message.getField(this, 8)
        },proto.google.protobuf.SourceCodeInfo.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.SourceCodeInfo.prototype.toObject = function (e) {
            return proto.google.protobuf.SourceCodeInfo.toObject(e, this)
        }, proto.google.protobuf.SourceCodeInfo.toObject = function (e, o) {
            var t = {locationList: r.Message.toObjectList(o.getLocationList(), proto.google.protobuf.SourceCodeInfo.Location.toObject, e)};
            return e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.SourceCodeInfo.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.SourceCodeInfo;
            return proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.SourceCodeInfo.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                if (1 === o.getFieldNumber()) {
                    var t = new proto.google.protobuf.SourceCodeInfo.Location;
                    o.readMessage(t, proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader), e.addLocation(t)
                } else o.skipField()
            }
            return e
        },proto.google.protobuf.SourceCodeInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.SourceCodeInfo.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getLocationList()).length > 0 && o.writeRepeatedMessage(1, t, proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter)
        },proto.google.protobuf.SourceCodeInfo.Location.repeatedFields_ = [1, 2, 6],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.SourceCodeInfo.Location.prototype.toObject = function (e) {
            return proto.google.protobuf.SourceCodeInfo.Location.toObject(e, this)
        }, proto.google.protobuf.SourceCodeInfo.Location.toObject = function (e, o) {
            var t, n = {
                pathList: null == (t = r.Message.getRepeatedField(o, 1)) ? undefined : t,
                spanList: null == (t = r.Message.getRepeatedField(o, 2)) ? undefined : t,
                leadingComments: null == (t = r.Message.getField(o, 3)) ? undefined : t,
                trailingComments: null == (t = r.Message.getField(o, 4)) ? undefined : t,
                leadingDetachedCommentsList: null == (t = r.Message.getRepeatedField(o, 6)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.SourceCodeInfo.Location.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.SourceCodeInfo.Location;
            return proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.SourceCodeInfo.Location.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        for (var t = o.isDelimited() ? o.readPackedInt32() : [o.readInt32()], r = 0; r < t.length; r++) e.addPath(t[r]);
                        break;
                    case 2:
                        for (t = o.isDelimited() ? o.readPackedInt32() : [o.readInt32()], r = 0; r < t.length; r++) e.addSpan(t[r]);
                        break;
                    case 3:
                        var n = o.readString();
                        e.setLeadingComments(n);
                        break;
                    case 4:
                        n = o.readString();
                        e.setTrailingComments(n);
                        break;
                    case 6:
                        n = o.readString();
                        e.addLeadingDetachedComments(n);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.SourceCodeInfo.Location.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getPathList()).length > 0 && o.writePackedInt32(1, t), (t = e.getSpanList()).length > 0 && o.writePackedInt32(2, t), null != (t = r.Message.getField(e, 3)) && o.writeString(3, t), null != (t = r.Message.getField(e, 4)) && o.writeString(4, t), (t = e.getLeadingDetachedCommentsList()).length > 0 && o.writeRepeatedString(6, t)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.getPathList = function () {
            return r.Message.getRepeatedField(this, 1)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.setPathList = function (e) {
            return r.Message.setField(this, 1, e || [])
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.addPath = function (e, o) {
            return r.Message.addToRepeatedField(this, 1, e, o)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.clearPathList = function () {
            return this.setPathList([])
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.getSpanList = function () {
            return r.Message.getRepeatedField(this, 2)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.setSpanList = function (e) {
            return r.Message.setField(this, 2, e || [])
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.addSpan = function (e, o) {
            return r.Message.addToRepeatedField(this, 2, e, o)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.clearSpanList = function () {
            return this.setSpanList([])
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingComments = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingComments = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingComments = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.hasLeadingComments = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.getTrailingComments = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.setTrailingComments = function (e) {
            return r.Message.setField(this, 4, e)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.clearTrailingComments = function () {
            return r.Message.setField(this, 4, undefined)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.hasTrailingComments = function () {
            return null != r.Message.getField(this, 4)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.getLeadingDetachedCommentsList = function () {
            return r.Message.getRepeatedField(this, 6)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.setLeadingDetachedCommentsList = function (e) {
            return r.Message.setField(this, 6, e || [])
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.addLeadingDetachedComments = function (e, o) {
            return r.Message.addToRepeatedField(this, 6, e, o)
        },proto.google.protobuf.SourceCodeInfo.Location.prototype.clearLeadingDetachedCommentsList = function () {
            return this.setLeadingDetachedCommentsList([])
        },proto.google.protobuf.SourceCodeInfo.prototype.getLocationList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.SourceCodeInfo.Location, 1)
        },proto.google.protobuf.SourceCodeInfo.prototype.setLocationList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.google.protobuf.SourceCodeInfo.prototype.addLocation = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.protobuf.SourceCodeInfo.Location, o)
        },proto.google.protobuf.SourceCodeInfo.prototype.clearLocationList = function () {
            return this.setLocationList([])
        },proto.google.protobuf.GeneratedCodeInfo.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.GeneratedCodeInfo.prototype.toObject = function (e) {
            return proto.google.protobuf.GeneratedCodeInfo.toObject(e, this)
        }, proto.google.protobuf.GeneratedCodeInfo.toObject = function (e, o) {
            var t = {annotationList: r.Message.toObjectList(o.getAnnotationList(), proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject, e)};
            return e && (t.$jspbMessageInstance = o), t
        }),proto.google.protobuf.GeneratedCodeInfo.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.GeneratedCodeInfo;
            return proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.GeneratedCodeInfo.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                if (1 === o.getFieldNumber()) {
                    var t = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
                    o.readMessage(t, proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader), e.addAnnotation(t)
                } else o.skipField()
            }
            return e
        },proto.google.protobuf.GeneratedCodeInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.GeneratedCodeInfo.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getAnnotationList()).length > 0 && o.writeRepeatedMessage(1, t, proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.toObject = function (e) {
            return proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject(e, this)
        }, proto.google.protobuf.GeneratedCodeInfo.Annotation.toObject = function (e, o) {
            var t, n = {
                pathList: null == (t = r.Message.getRepeatedField(o, 1)) ? undefined : t,
                sourceFile: null == (t = r.Message.getField(o, 2)) ? undefined : t,
                begin: null == (t = r.Message.getField(o, 3)) ? undefined : t,
                end: null == (t = r.Message.getField(o, 4)) ? undefined : t
            };
            return e && (n.$jspbMessageInstance = o), n
        }),proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinary = function (e) {
            var o = new r.BinaryReader(e), t = new proto.google.protobuf.GeneratedCodeInfo.Annotation;
            return proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader(t, o)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.deserializeBinaryFromReader = function (e, o) {
            for (; o.nextField() && !o.isEndGroup();) {
                switch (o.getFieldNumber()) {
                    case 1:
                        for (var t = o.isDelimited() ? o.readPackedInt32() : [o.readInt32()], r = 0; r < t.length; r++) e.addPath(t[r]);
                        break;
                    case 2:
                        var n = o.readString();
                        e.setSourceFile(n);
                        break;
                    case 3:
                        n = o.readInt32();
                        e.setBegin(n);
                        break;
                    case 4:
                        n = o.readInt32();
                        e.setEnd(n);
                        break;
                    default:
                        o.skipField()
                }
            }
            return e
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.serializeBinaryToWriter = function (e, o) {
            var t = undefined;
            (t = e.getPathList()).length > 0 && o.writePackedInt32(1, t), null != (t = r.Message.getField(e, 2)) && o.writeString(2, t), null != (t = r.Message.getField(e, 3)) && o.writeInt32(3, t), null != (t = r.Message.getField(e, 4)) && o.writeInt32(4, t)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getPathList = function () {
            return r.Message.getRepeatedField(this, 1)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setPathList = function (e) {
            return r.Message.setField(this, 1, e || [])
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.addPath = function (e, o) {
            return r.Message.addToRepeatedField(this, 1, e, o)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearPathList = function () {
            return this.setPathList([])
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getSourceFile = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setSourceFile = function (e) {
            return r.Message.setField(this, 2, e)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearSourceFile = function () {
            return r.Message.setField(this, 2, undefined)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasSourceFile = function () {
            return null != r.Message.getField(this, 2)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getBegin = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setBegin = function (e) {
            return r.Message.setField(this, 3, e)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearBegin = function () {
            return r.Message.setField(this, 3, undefined)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasBegin = function () {
            return null != r.Message.getField(this, 3)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.getEnd = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.setEnd = function (e) {
            return r.Message.setField(this, 4, e)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.clearEnd = function () {
            return r.Message.setField(this, 4, undefined)
        },proto.google.protobuf.GeneratedCodeInfo.Annotation.prototype.hasEnd = function () {
            return null != r.Message.getField(this, 4)
        },proto.google.protobuf.GeneratedCodeInfo.prototype.getAnnotationList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.google.protobuf.GeneratedCodeInfo.Annotation, 1)
        },proto.google.protobuf.GeneratedCodeInfo.prototype.setAnnotationList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.google.protobuf.GeneratedCodeInfo.prototype.addAnnotation = function (e, o) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.google.protobuf.GeneratedCodeInfo.Annotation, o)
        },proto.google.protobuf.GeneratedCodeInfo.prototype.clearAnnotationList = function () {
            return this.setAnnotationList([])
        },n.object.extend(o, proto.google.protobuf)
    }
}]);