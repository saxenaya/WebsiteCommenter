! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(wp) {
    "use strict";
    try {
        (function() {
            wp = wp && Object.prototype.hasOwnProperty.call(wp, "default") ? wp.default : wp;
            var t, p, e, r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function n(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function y(t, s, u, a) {
                return new(u = u || Promise)(function(n, e) {
                    function r(t) {
                        try {
                            o(a.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(t) {
                        try {
                            o(a.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? n(t.value) : ((e = t.value) instanceof u ? e : new u(function(t) {
                            t(e)
                        })).then(r, i)
                    }
                    o((a = a.apply(t, s || [])).next())
                })
            }

            function v(n, r) {
                var i, o, s, t, u = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return t = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this
                }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                                switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        s = e;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = u.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            u.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && u.label < s[1]) {
                                            u.label = s[1], s = e;
                                            break
                                        }
                                        if (s && u.label < s[2]) {
                                            u.label = s[2], u.ops.push(e);
                                            break
                                        }
                                        s[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                e = r.call(n, u)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            }

            function d() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
                return r
            }

            function s() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
                return r
            }(e = p = p || {})[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";

            function i(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (!(e < t.logLevel)) {
                    var i = (new Date).toISOString(),
                        o = a[e];
                    if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                    console[o].apply(console, s(["[" + i + "]  " + t.name + ":"], n))
                }
            }
            var o = {
                    debug: p.DEBUG,
                    verbose: p.VERBOSE,
                    info: p.INFO,
                    warn: p.WARN,
                    error: p.ERROR,
                    silent: p.SILENT
                },
                u = p.INFO,
                a = ((t = {})[p.DEBUG] = "log", t[p.VERBOSE] = "log", t[p.INFO] = "info", t[p.WARN] = "warn", t[p.ERROR] = "error", t),
                h = (Object.defineProperty(c.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel
                    },
                    set: function(t) {
                        if (!(t in p)) throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
                        this._logLevel = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), c.prototype.setLogLevel = function(t) {
                    this._logLevel = "string" == typeof t ? o[t] : t
                }, Object.defineProperty(c.prototype, "logHandler", {
                    get: function() {
                        return this._logHandler
                    },
                    set: function(t) {
                        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(c.prototype, "userLogHandler", {
                    get: function() {
                        return this._userLogHandler
                    },
                    set: function(t) {
                        this._userLogHandler = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), c.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, p.DEBUG], t)), this._logHandler.apply(this, s([this, p.DEBUG], t))
                }, c.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, p.VERBOSE], t)), this._logHandler.apply(this, s([this, p.VERBOSE], t))
                }, c.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, p.INFO], t)), this._logHandler.apply(this, s([this, p.INFO], t))
                }, c.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, p.WARN], t)), this._logHandler.apply(this, s([this, p.WARN], t))
                }, c.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, s([this, p.ERROR], t)), this._logHandler.apply(this, s([this, p.ERROR], t))
                }, c);

            function c(t) {
                this.name = t, this._logLevel = u, this._logHandler = i, this._userLogHandler = null
            }

            function g() {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }
            var f, m = (n(l, f = Error), l);

            function l(t, e) {
                var n = f.call(this, e) || this;
                return n.code = t, n.name = "FirebaseError", Object.setPrototypeOf(n, l.prototype), Error.captureStackTrace && Error.captureStackTrace(n, w.prototype.create), n
            }
            var w = (b.prototype.create = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                for (var r, i = e[0] || {}, o = this.service + "/" + t, s = this.errors[t], u = s ? (r = i, s.replace(E, function(t, e) {
                        var n = r[e];
                        return null != n ? n.toString() : "<" + e + "?>"
                    })) : "Error", a = this.serviceName + ": " + u + " (" + o + ").", h = new m(o, a), c = 0, f = Object.keys(i); c < f.length; c++) {
                    var l = f[c];
                    "_" !== l.slice(-1) && (l in h && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), h[l] = i[l])
                }
                return h
            }, b);

            function b(t, e, n) {
                this.service = t, this.serviceName = e, this.errors = n
            }
            var E = /\{\$([^}]+)}/g,
                T = (I.prototype.setInstantiationMode = function(t) {
                    return this.instantiationMode = t, this
                }, I.prototype.setMultipleInstances = function(t) {
                    return this.multipleInstances = t, this
                }, I.prototype.setServiceProps = function(t) {
                    return this.serviceProps = t, this
                }, I);

            function I(t, e, n) {
                this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
            }

            function N(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            var A, _ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                S = S || {},
                R = _ || self;

            function D() {}

            function P(t) {
                var e = typeof t;
                if ("object" == e) {
                    if (!t) return "null";
                    if (t instanceof Array) return "array";
                    if (t instanceof Object) return e;
                    var n = Object.prototype.toString.call(t);
                    if ("[object Window]" == n) return "object";
                    if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                } else if ("function" == e && void 0 === t.call) return "object";
                return e
            }

            function x(t) {
                var e = P(t);
                return "array" == e || "object" == e && "number" == typeof t.length
            }

            function O(t) {
                var e = typeof t;
                return "object" == e && null != t || "function" == e
            }
            var k = "closure_uid_" + (1e9 * Math.random() >>> 0),
                L = 0;

            function V(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }

            function C(e, n, t) {
                if (!e) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var t = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(t, r), e.apply(n, t)
                    }
                }
                return function() {
                    return e.apply(n, arguments)
                }
            }

            function M(t, e, n) {
                return (M = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? V : C).apply(null, arguments)
            }

            function U(e, t) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var t = n.slice();
                    return t.push.apply(t, arguments), e.apply(this, t)
                }
            }
            var j = Date.now || function() {
                return +new Date
            };

            function F(t, e) {
                function n() {}
                n.prototype = e.prototype, t.M = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }

            function q() {
                this.j = this.j, this.i = this.i
            }
            q.prototype.j = !1, q.prototype.da = function() {
                if (!this.j && (this.j = !0, this.C(), 0)) t = this, Object.prototype.hasOwnProperty.call(t, k) && t[k] || (t[k] = ++L);
                var t
            }, q.prototype.C = function() {
                if (this.i)
                    for (; this.i.length;) this.i.shift()()
            };
            var B = Array.prototype.indexOf ? function(t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                } : function(t, e) {
                    if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                G = Array.prototype.forEach ? function(t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                } : function(t, e, n) {
                    for (var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
                };

            function z(t) {
                return Array.prototype.concat.apply([], arguments)
            }

            function W(t) {
                var e = t.length;
                if (0 < e) {
                    for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                    return n
                }
                return []
            }

            function Q(t) {
                return /^[\s\xa0]*$/.test(t)
            }
            var K, Y = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            };

            function H(t, e) {
                return -1 != t.indexOf(e)
            }

            function X(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }
            t: {
                var J = R.navigator;
                if (J) {
                    var $ = J.userAgent;
                    if ($) {
                        K = $;
                        break t
                    }
                }
                K = ""
            }

            function Z(t, e, n) {
                for (var r in t) e.call(n, t[r], r, t)
            }

            function tt(t) {
                var e = {};
                for (var n in t) e[n] = t[n];
                return e
            }
            var et = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function nt(t, e) {
                for (var n, r, i = 1; i < arguments.length; i++) {
                    for (n in r = arguments[i]) t[n] = r[n];
                    for (var o = 0; o < et.length; o++) n = et[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
            }

            function rt(t) {
                return rt[" "](t), t
            }
            rt[" "] = D;
            var it, ot, st = H(K, "Opera"),
                ut = H(K, "Trident") || H(K, "MSIE"),
                at = H(K, "Edge"),
                ht = at || ut,
                ct = H(K, "Gecko") && !(H(K.toLowerCase(), "webkit") && !H(K, "Edge")) && !(H(K, "Trident") || H(K, "MSIE")) && !H(K, "Edge"),
                ft = H(K.toLowerCase(), "webkit") && !H(K, "Edge");

            function lt() {
                var t = R.document;
                return t ? t.documentMode : void 0
            }
            t: {
                var pt = "",
                    dt = (ot = K, ct ? /rv:([^\);]+)(\)|;)/.exec(ot) : at ? /Edge\/([\d\.]+)/.exec(ot) : ut ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ot) : ft ? /WebKit\/(\S+)/.exec(ot) : st ? /(?:Version)[ \/]?(\S+)/.exec(ot) : void 0);
                if (dt && (pt = dt ? dt[1] : ""), ut) {
                    var yt = lt();
                    if (null != yt && yt > parseFloat(pt)) {
                        it = String(yt);
                        break t
                    }
                }
                it = pt
            }
            var vt, gt = {};

            function mt(u) {
                return t = u, e = function() {
                    for (var t = 0, e = Y(String(it)).split("."), n = Y(String(u)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) {
                        var o = e[i] || "",
                            s = n[i] || "";
                        do {
                            if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == o[0].length && 0 == s[0].length) break;
                            t = X(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || X(0 == o[2].length, 0 == s[2].length) || X(o[2], s[2]), o = o[3], s = s[3]
                        } while (0 == t)
                    }
                    return 0 <= t
                }, n = gt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
                var t, e, n
            }
            if (R.document && ut) {
                var wt = lt();
                vt = wt || (parseInt(it, 10) || void 0)
            } else vt = void 0;
            var bt = vt,
                Et = !ut || 9 <= Number(bt),
                Tt = ut && !mt("9"),
                It = function() {
                    if (!R.addEventListener || !Object.defineProperty) return !1;
                    var t = !1,
                        e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                    try {
                        R.addEventListener("test", D, e), R.removeEventListener("test", D, e)
                    } catch (t) {}
                    return t
                }();

            function Nt(t, e) {
                this.type = t, this.a = this.target = e, this.defaultPrevented = !1
            }

            function At(t, e) {
                if (Nt.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) {
                    var n = this.type = t.type,
                        r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                    if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
                        if (ct) {
                            t: {
                                try {
                                    rt(e.nodeName);
                                    var i = !0;
                                    break t
                                } catch (t) {}
                                i = !1
                            }
                            i || (e = null)
                        }
                    } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                    this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : _t[t.pointerType] || "", (this.c = t).defaultPrevented && this.b()
                }
            }
            Nt.prototype.b = function() {
                this.defaultPrevented = !0
            }, F(At, Nt);
            var _t = {
                2: "touch",
                3: "pen",
                4: "mouse"
            };
            At.prototype.b = function() {
                At.M.b.call(this);
                var t = this.c;
                if (t.preventDefault) t.preventDefault();
                else if (t.returnValue = !1, Tt) try {
                    (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                } catch (t) {}
            };
            var St = "closure_listenable_" + (1e6 * Math.random() | 0),
                Rt = 0;

            function Dt(t, e, n, r, i) {
                this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.aa = i, this.key = ++Rt, this.V = this.X = !1
            }

            function Pt(t) {
                t.V = !0, t.listener = null, t.proxy = null, t.src = null, t.aa = null
            }

            function xt(t) {
                this.src = t, this.a = {}, this.b = 0
            }

            function Ot(t, e) {
                var n = e.type;
                if (n in t.a) {
                    var r, i = t.a[n],
                        o = B(i, e);
                    (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (Pt(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                }
            }

            function kt(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (!o.V && o.listener == e && o.capture == !!n && o.aa == r) return i
                }
                return -1
            }
            xt.prototype.add = function(t, e, n, r, i) {
                var o = t.toString();
                (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                var s = kt(t, e, r, i);
                return -1 < s ? (e = t[s], n || (e.X = !1)) : ((e = new Dt(e, this.src, o, !!r, i)).X = n, t.push(e)), e
            };
            var Lt = "closure_lm_" + (1e6 * Math.random() | 0),
                Vt = {};

            function Ct(t, e, n, r, i) {
                if (r && r.once) return function t(e, n, r, i, o) {
                    if (Array.isArray(n)) {
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                        return null
                    }
                    r = zt(r);
                    return e && e[St] ? e.sa(n, r, O(i) ? !!i.capture : !!i, o) : Mt(e, n, r, !0, i, o)
                }(t, e, n, r, i);
                if (Array.isArray(e)) {
                    for (var o = 0; o < e.length; o++) Ct(t, e[o], n, r, i);
                    return null
                }
                return n = zt(n), t && t[St] ? t.ra(e, n, O(r) ? !!r.capture : !!r, i) : Mt(t, e, n, !1, r, i)
            }

            function Mt(t, e, n, r, i, o) {
                if (!e) throw Error("Invalid event type");
                var s = O(i) ? !!i.capture : !!i;
                if (s && !Et) return null;
                var u, a, h = Bt(t);
                if (h || (t[Lt] = h = new xt(t)), (n = h.add(e, n, r, s, o)).proxy) return n;
                if (u = qt, r = a = Et ? function(t) {
                        return u.call(a.src, a.listener, t)
                    } : function(t) {
                        if (!(t = u.call(a.src, a.listener, t))) return t
                    }, (n.proxy = r).src = t, r.listener = n, t.addEventListener) It || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(jt(e.toString()), r);
                else {
                    if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r)
                }
                return n
            }

            function Ut(t) {
                if ("number" != typeof t && t && !t.V) {
                    var e = t.src;
                    if (e && e[St]) Ot(e.c, t);
                    else {
                        var n = t.type,
                            r = t.proxy;
                        e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(jt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Bt(e)) ? (Ot(n, t), 0 == n.b && (n.src = null, e[Lt] = null)) : Pt(t)
                    }
                }
            }

            function jt(t) {
                return t in Vt ? Vt[t] : Vt[t] = "on" + t
            }

            function Ft(t, e) {
                var n = t.listener,
                    r = t.aa || t.src;
                return t.X && Ut(t), n.call(r, e)
            }

            function qt(t, e) {
                if (t.V) return !0;
                if (Et) return Ft(t, new At(e, this));
                if (!e) t: {
                    e = ["window", "event"];
                    for (var n = R, r = 0; r < e.length; r++)
                        if (null == (n = n[e[r]])) {
                            e = null;
                            break t
                        } e = n
                }
                return Ft(t, e = new At(e, this))
            }

            function Bt(t) {
                return (t = t[Lt]) instanceof xt ? t : null
            }
            var Gt = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function zt(e) {
                return "function" == P(e) ? e : (e[Gt] || (e[Gt] = function(t) {
                    return e.handleEvent(t)
                }), e[Gt])
            }

            function Wt() {
                q.call(this), this.c = new xt(this), (this.J = this).A = null
            }

            function Qt(t, e, n, r) {
                if (!(e = t.c.a[String(e)])) return !0;
                e = e.concat();
                for (var i = !0, o = 0; o < e.length; ++o) {
                    var s = e[o];
                    if (s && !s.V && s.capture == n) {
                        var u = s.listener,
                            a = s.aa || s.src;
                        s.X && Ot(t.c, s), i = !1 !== u.call(a, r) && i
                    }
                }
                return i && !r.defaultPrevented
            }
            F(Wt, q), Wt.prototype[St] = !0, (A = Wt.prototype).addEventListener = function(t, e, n, r) {
                Ct(this, t, e, n, r)
            }, A.removeEventListener = function(t, e, n, r) {
                ! function t(e, n, r, i, o) {
                    if (Array.isArray(n))
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                    else i = O(i) ? !!i.capture : !!i, r = zt(r), e && e[St] ? (e = e.c, (n = String(n).toString()) in e.a && -1 < (r = kt(s = e.a[n], r, i, o)) && (Pt(s[r]), Array.prototype.splice.call(s, r, 1), 0 == s.length && (delete e.a[n], e.b--))) : (e = e && Bt(e)) && (n = e.a[n.toString()], e = -1, n && (e = kt(n, r, i, o)), (r = -1 < e ? n[e] : null) && Ut(r))
                }(this, t, e, n, r)
            }, A.dispatchEvent = function(t) {
                var e, n = this.A;
                if (n)
                    for (e = []; n; n = n.A) e.push(n);
                n = this.J;
                var r = t.type || t;
                if ("string" == typeof t) t = new Nt(t, n);
                else if (t instanceof Nt) t.target = t.target || n;
                else {
                    var i = t;
                    nt(t = new Nt(r, n), i)
                }
                if (i = !0, e)
                    for (var o = e.length - 1; 0 <= o; o--) {
                        var s = t.a = e[o];
                        i = Qt(s, r, !0, t) && i
                    }
                if (i = Qt(s = t.a = n, r, !0, t) && i, i = Qt(s, r, !1, t) && i, e)
                    for (o = 0; o < e.length; o++) i = Qt(s = t.a = e[o], r, !1, t) && i;
                return i
            }, A.C = function() {
                if (Wt.M.C.call(this), this.c) {
                    var t, e = this.c;
                    for (t in e.a) {
                        for (var n = e.a[t], r = 0; r < n.length; r++) Pt(n[r]);
                        delete e.a[t], e.b--
                    }
                }
                this.A = null
            }, A.ra = function(t, e, n, r) {
                return this.c.add(String(t), e, !1, n, r)
            }, A.sa = function(t, e, n, r) {
                return this.c.add(String(t), e, !0, n, r)
            };
            var Kt = R.JSON.stringify;

            function Yt() {
                this.b = this.a = null
            }
            var Ht, Xt = (Jt.prototype.get = function() {
                var t;
                return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t
            }, new Jt(function() {
                return new $t
            }, function(t) {
                t.reset()
            }, 100));

            function Jt(t, e, n) {
                this.f = n, this.c = t, this.g = e, this.b = 0, this.a = null
            }

            function $t() {
                this.next = this.b = this.a = null
            }

            function Zt(t) {
                R.setTimeout(function() {
                    throw t
                }, 0)
            }

            function te(t, e) {
                var n;
                Ht || (n = R.Promise.resolve(void 0), Ht = function() {
                    n.then(re)
                }), ee || (Ht(), ee = !0), ne.add(t, e)
            }
            Yt.prototype.add = function(t, e) {
                var n = Xt.get();
                n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
            }, $t.prototype.set = function(t, e) {
                this.a = t, this.b = e, this.next = null
            };
            var ee = !($t.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }),
                ne = new Yt;

            function re() {
                for (var t; r = n = void 0, r = null, (n = ne).a && (r = n.a, n.a = n.a.next, n.a || (n.b = null), r.next = null), t = r;) {
                    try {
                        t.a.call(t.b)
                    } catch (t) {
                        Zt(t)
                    }
                    var e = Xt;
                    e.g(t), e.b < e.f && (e.b++, t.next = e.a, e.a = t)
                }
                var n, r;
                ee = !1
            }

            function ie(t, e) {
                Wt.call(this), this.b = t || 1, this.a = e || R, this.f = M(this.Ua, this), this.g = j()
            }

            function oe(t) {
                t.Z = !1, t.L && (t.a.clearTimeout(t.L), t.L = null)
            }

            function se(t, e, n) {
                if ("function" == P(t)) n && (t = M(t, n));
                else {
                    if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = M(t.handleEvent, t)
                }
                return 2147483647 < Number(e) ? -1 : R.setTimeout(t, e || 0)
            }

            function ue(t, e, n) {
                q.call(this), this.f = null != n ? M(t, n) : t, this.c = e, this.b = M(this.Pa, this), this.a = []
            }

            function ae(t) {
                t.T = se(t.b, t.c), t.f.apply(null, t.a)
            }

            function he(t) {
                q.call(this), this.b = t, this.a = {}
            }
            F(ie, Wt), (A = ie.prototype).Z = !1, A.L = null, A.Ua = function() {
                if (this.Z) {
                    var t = j() - this.g;
                    0 < t && t < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - t) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.Z && (oe(this), this.start()))
                }
            }, A.start = function() {
                this.Z = !0, this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = j())
            }, A.C = function() {
                ie.M.C.call(this), oe(this), delete this.a
            }, F(ue, q), (A = ue.prototype).ba = !1, A.T = null, A.Ia = function(t) {
                this.a = arguments, this.T ? this.ba = !0 : ae(this)
            }, A.C = function() {
                ue.M.C.call(this), this.T && (R.clearTimeout(this.T), this.T = null, this.ba = !1, this.a = [])
            }, A.Pa = function() {
                this.T = null, this.ba && (this.ba = !1, ae(this))
            }, F(he, q);
            var ce = [];

            function fe(t, e, n, r) {
                Array.isArray(n) || (n && (ce[0] = n.toString()), n = ce);
                for (var i = 0; i < n.length; i++) {
                    var o = Ct(e, n[i], r || t.handleEvent, !1, t.b || t);
                    if (!o) break;
                    t.a[o.key] = o
                }
            }

            function le(t) {
                Z(t.a, function(t, e) {
                    this.a.hasOwnProperty(e) && Ut(t)
                }, t), t.a = {}
            }

            function pe() {}
            he.prototype.C = function() {
                he.M.C.call(this), le(this)
            }, he.prototype.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented")
            };
            var de = null;

            function ye() {
                return de = de || new Wt
            }

            function ve(t) {
                Nt.call(this, "serverreachability", t)
            }

            function ge(t) {
                var e = ye();
                e.dispatchEvent(new ve(e))
            }

            function me(t) {
                Nt.call(this, "statevent", t)
            }

            function we(t) {
                var e = ye();
                e.dispatchEvent(new me(e))
            }

            function be(t) {
                Nt.call(this, "timingevent", t)
            }

            function Ee(t, e) {
                if ("function" != P(t)) throw Error("Fn must not be null and must be a function");
                return R.setTimeout(function() {
                    t()
                }, e)
            }
            F(ve, Nt), F(me, Nt), F(be, Nt);
            var Te = {
                    NO_ERROR: 0,
                    Va: 1,
                    bb: 2,
                    ab: 3,
                    Ya: 4,
                    $a: 5,
                    cb: 6,
                    za: 7,
                    TIMEOUT: 8,
                    gb: 9
                },
                Ie = {
                    Xa: "complete",
                    kb: "success",
                    Aa: "error",
                    za: "abort",
                    ib: "ready",
                    jb: "readystatechange",
                    TIMEOUT: "timeout",
                    eb: "incrementaldata",
                    hb: "progress",
                    Za: "downloadprogress",
                    lb: "uploadprogress"
                };

            function Ne() {}

            function Ae(t) {
                var e;
                return (e = t.a) || (e = t.a = {}), e
            }

            function _e() {}
            Ne.prototype.a = null;
            var Se, Re = {
                OPEN: "a",
                Wa: "b",
                Aa: "c",
                fb: "d"
            };

            function De() {
                Nt.call(this, "d")
            }

            function Pe() {
                Nt.call(this, "c")
            }

            function xe() {}

            function Oe(t, e, n) {
                this.g = t, this.W = e, this.U = n || 1, this.G = new he(this), this.N = ke, t = ht ? 125 : void 0, this.O = new ie(t), this.m = null, this.b = !1, this.j = this.A = this.f = this.B = this.s = this.P = this.h = null, this.i = [], this.a = null, this.w = 0, this.c = this.v = null, this.H = -1, this.l = !1, this.J = 0, this.D = null, this.o = this.R = this.F = !1
            }
            F(De, Nt), F(Pe, Nt), F(xe, Ne), Se = new xe;
            var ke = 45e3,
                Le = {},
                Ve = {};

            function Ce(t, e, n) {
                t.B = 1, t.f = on($e(e)), t.j = n, t.F = !0, Me(t, null)
            }

            function Me(t, e) {
                t.s = j(), Fe(t), t.A = $e(t.f);
                var n = t.A,
                    r = t.U;
                Array.isArray(r) || (r = [String(r)]), mn(n.b, "t", r), t.w = 0, t.a = hr(t.g, t.g.w ? e : null), 0 < t.J && (t.D = new ue(M(t.ya, t, t.a), t.J)), fe(t.G, t.a, "readystatechange", t.Sa), e = t.m ? tt(t.m) : {}, t.j ? (t.v || (t.v = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.$(t.A, t.v, t.j, e)) : (t.v = "GET", t.a.$(t.A, t.v, null, e)), ge(1)
            }

            function Ue(t, e, n) {
                for (var r = !0; !t.l && t.w < n.length;) {
                    var i = je(t, n);
                    if (i == Ve) {
                        4 == e && (t.c = 4, we(14), r = !1);
                        break
                    }
                    if (i == Le) {
                        t.c = 4, we(15), r = !1;
                        break
                    }
                    We(t, i)
                }
                4 == e && 0 == n.length && (t.c = 1, we(16), r = !1), t.b = t.b && r, r || (ze(t), Ge(t))
            }

            function je(t, e) {
                var n = t.w,
                    r = e.indexOf("\n", n);
                return -1 == r ? Ve : (n = Number(e.substring(n, r)), isNaN(n) ? Le : (r += 1) + n > e.length ? Ve : (e = e.substr(r, n), t.w = r + n, e))
            }

            function Fe(t) {
                t.P = j() + t.N, qe(t, t.N)
            }

            function qe(t, e) {
                if (null != t.h) throw Error("WatchDog timer not null");
                t.h = Ee(M(t.Qa, t), e)
            }

            function Be(t) {
                t.h && (R.clearTimeout(t.h), t.h = null)
            }

            function Ge(t) {
                0 == t.g.u || t.l || ir(t.g, t)
            }

            function ze(t) {
                Be(t);
                var e = t.D;
                e && "function" == typeof e.da && e.da(), t.D = null, oe(t.O), le(t.G), t.a && (e = t.a, t.a = null, e.abort(), e.da())
            }

            function We(t, e) {
                try {
                    var n = t.g;
                    if (0 != n.u && (n.a == t || An(n.b, t)))
                        if (n.A = t.H, !t.o && An(n.b, t) && 3 == n.u) {
                            try {
                                var r = n.ja.a.parse(e)
                            } catch (t) {
                                r = null
                            }
                            if (Array.isArray(r) && 3 == r.length) {
                                var i = r;
                                if (0 == i[0]) {
                                    t: if (!n.i) {
                                        if (n.a) {
                                            if (!(n.a.s + 3e3 < t.s)) break t;
                                            rr(n), n.a.cancel(), n.a = null
                                        }
                                        nr(n), we(18)
                                    }
                                }
                                else n.ia = i[1], 0 < n.ia - n.G && i[2] < 37500 && n.U && 0 == n.m && !n.l && (n.l = Ee(M(n.Na, n), 6e3));
                                if (Nn(n.b) <= 1 && n.O) {
                                    try {
                                        n.O()
                                    } catch (t) {}
                                    n.O = void 0
                                }
                            } else sr(n, 11)
                        } else if (!t.o && n.a != t || rr(n), !Q(e))
                        for (e = r = n.ja.a.parse(e), r = 0; r < e.length; r++)
                            if (i = e[r], n.G = i[0], i = i[1], 2 == n.u)
                                if ("c" == i[0]) {
                                    n.B = i[1], n.R = i[2];
                                    var o = i[3];
                                    null != o && (n.oa = o);
                                    var s = i[5];
                                    null != s && "number" == typeof s && 0 < s && (n.D = 1.5 * s);
                                    var u = n,
                                        a = t.a;
                                    if (a) {
                                        var h = a.a ? a.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                        if (h) {
                                            var c = u.b;
                                            !c.a && (H(h, "spdy") || H(h, "quic") || H(h, "h2")) && (c.f = c.g, c.a = new Set, c.b && (_n(c, c.b), c.b = null))
                                        }
                                        if (u.s) {
                                            var f = a.a ? a.a.getResponseHeader("X-HTTP-Session-Id") : null;
                                            f && (u.ha = f, rn(u.v, u.s, f))
                                        }
                                    }
                                    n.u = 3, n.c && n.c.na();
                                    var l = t;
                                    if ((u = n).ea = ar(u, u.w ? u.R : null, u.P), l.o) {
                                        Sn(u.b, l);
                                        var p = l,
                                            d = u.D;
                                        d && p.setTimeout(d), p.h && (Be(p), Fe(p)), u.a = l
                                    } else er(u);
                                    0 < n.f.length && Jn(n)
                                } else "stop" != i[0] && "close" != i[0] || sr(n, 7);
                    else 3 == n.u && ("stop" == i[0] || "close" == i[0] ? "stop" == i[0] ? sr(n, 7) : Yn(n) : "noop" != i[0] && n.c && n.c.ma(i), n.m = 0);
                    ge(4)
                } catch (t) {}
            }

            function Qe(t, e) {
                if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (x(t) || "string" == typeof t) G(t, e, void 0);
                else {
                    if (t.K && "function" == typeof t.K) var n = t.K();
                    else if (t.I && "function" == typeof t.I) n = void 0;
                    else if (x(t) || "string" == typeof t) {
                        n = [];
                        for (var r = t.length, i = 0; i < r; i++) n.push(i)
                    } else
                        for (i in n = [], r = 0, t) n[r++] = i;
                    i = (r = function(t) {
                        if (t.I && "function" == typeof t.I) return t.I();
                        if ("string" == typeof t) return t.split("");
                        if (x(t)) {
                            for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                            return e
                        }
                        for (r in e = [], n = 0, t) e[n++] = t[r];
                        return e
                    }(t)).length;
                    for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
                }
            }

            function Ke(t, e) {
                this.b = {}, this.a = [], this.c = 0;
                var n = arguments.length;
                if (1 < n) {
                    if (n % 2) throw Error("Uneven number of arguments");
                    for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                } else if (t)
                    if (t instanceof Ke)
                        for (n = t.K(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                    else
                        for (r in t) this.set(r, t[r])
            }

            function Ye(t) {
                if (t.c != t.a.length) {
                    for (var e = 0, n = 0; e < t.a.length;) {
                        var r = t.a[e];
                        He(t.b, r) && (t.a[n++] = r), e++
                    }
                    t.a.length = n
                }
                if (t.c != t.a.length) {
                    var i = {};
                    for (n = e = 0; e < t.a.length;) He(i, r = t.a[e]) || (i[t.a[n++] = r] = 1), e++;
                    t.a.length = n
                }
            }

            function He(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }(A = Oe.prototype).setTimeout = function(t) {
                this.N = t
            }, A.Sa = function(t) {
                t = t.target;
                var e = this.D;
                e && 3 == zn(t) ? e.Ia() : this.ya(t)
            }, A.ya = function(t) {
                try {
                    if (t == this.a) t: {
                        var e = zn(this.a),
                            n = this.a.qa(),
                            r = this.a.S();
                        if (!(e < 3 || 3 == e && !ht && !this.a.Y())) {
                            this.l || 4 != e || 7 == n || ge(8 == n || r <= 0 ? 3 : 2), Be(this);
                            var i = this.a.S();
                            this.H = i;
                            var o = this.a.Y();
                            if (this.b = 200 == i) {
                                if (this.R && !this.o) {
                                    e: {
                                        if (this.a) {
                                            var s, u = this.a;
                                            if ((s = u.a ? u.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !Q(s)) {
                                                var a = s;
                                                break e
                                            }
                                        }
                                        a = null
                                    }
                                    if (!a) {
                                        this.b = !1, this.c = 3, we(12), ze(this), Ge(this);
                                        break t
                                    }
                                    this.o = !0,
                                    We(this, a)
                                }
                                this.F ? (Ue(this, e, o), ht && this.b && 3 == e && (fe(this.G, this.O, "tick", this.Ra), this.O.start())) : We(this, o), 4 == e && ze(this), this.b && !this.l && (4 == e ? ir(this.g, this) : (this.b = !1, Fe(this)))
                            } else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.c = 3, we(12)) : (this.c = 0, we(13)), ze(this), Ge(this)
                        }
                    }
                } catch (t) {}
            }, A.Ra = function() {
                if (this.a) {
                    var t = zn(this.a),
                        e = this.a.Y();
                    this.w < e.length && (Be(this), Ue(this, t, e), this.b && 4 != t && Fe(this))
                }
            }, A.cancel = function() {
                this.l = !0, ze(this)
            }, A.Qa = function() {
                this.h = null;
                var t = j();
                0 <= t - this.P ? (2 != this.B && (ge(3), we(17)), ze(this), this.c = 2, Ge(this)) : qe(this, this.P - t)
            }, (A = Ke.prototype).I = function() {
                Ye(this);
                for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                return t
            }, A.K = function() {
                return Ye(this), this.a.concat()
            }, A.get = function(t, e) {
                return He(this.b, t) ? this.b[t] : e
            }, A.set = function(t, e) {
                He(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
            }, A.forEach = function(t, e) {
                for (var n = this.K(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this)
                }
            };
            var Xe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function Je(t, e) {
                if (this.c = this.j = this.f = "", this.h = null, this.i = this.g = "", this.a = !1, t instanceof Je) {
                    this.a = void 0 !== e ? e : t.a, Ze(this, t.f), this.j = t.j, tn(this, t.c), en(this, t.h), this.g = t.g, e = t.b;
                    var n = new dn;
                    n.c = e.c, e.a && (n.a = new Ke(e.a), n.b = e.b), nn(this, n), this.i = t.i
                } else t && (n = String(t).match(Xe)) ? (this.a = !!e, Ze(this, n[1] || "", !0), this.j = sn(n[2] || ""), tn(this, n[3] || "", !0), en(this, n[4]), this.g = sn(n[5] || "", !0), nn(this, n[6] || "", !0), this.i = sn(n[7] || "")) : (this.a = !!e, this.b = new dn(null, this.a))
            }

            function $e(t) {
                return new Je(t)
            }

            function Ze(t, e, n) {
                t.f = n ? sn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
            }

            function tn(t, e, n) {
                t.c = n ? sn(e, !0) : e
            }

            function en(t, e) {
                if (e) {
                    if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                    t.h = e
                } else t.h = null
            }

            function nn(t, e, n) {
                var r, i;
                e instanceof dn ? (t.b = e, r = t.b, (i = t.a) && !r.f && (yn(r), r.c = null, r.a.forEach(function(t, e) {
                    var n = e.toLowerCase();
                    e != n && (vn(this, e), mn(this, n, t))
                }, r)), r.f = i) : (n || (e = un(e, ln)), t.b = new dn(e, t.a))
            }

            function rn(t, e, n) {
                t.b.set(e, n)
            }

            function on(t) {
                return rn(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ j()).toString(36)), t
            }

            function sn(t, e) {
                return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
            }

            function un(t, e, n) {
                return "string" == typeof t ? (t = encodeURI(t).replace(e, an), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
            }

            function an(t) {
                return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
            }
            Je.prototype.toString = function() {
                var t = [],
                    e = this.f;
                e && t.push(un(e, hn, !0), ":");
                var n = this.c;
                return !n && "file" != e || (t.push("//"), (e = this.j) && t.push(un(e, hn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))), (n = this.g) && (this.c && "/" != n.charAt(0) && t.push("/"), t.push(un(n, "/" == n.charAt(0) ? fn : cn, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.i) && t.push("#", un(n, pn)), t.join("")
            };
            var hn = /[#\/\?@]/g,
                cn = /[#\?:]/g,
                fn = /[#\?]/g,
                ln = /[#\?@]/g,
                pn = /#/g;

            function dn(t, e) {
                this.b = this.a = null, this.c = t || null, this.f = !!e
            }

            function yn(n) {
                n.a || (n.a = new Ke, n.b = 0, n.c && function(t, e) {
                    if (t) {
                        t = t.split("&");
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].indexOf("="),
                                i = null;
                            if (0 <= r) {
                                var o = t[n].substring(0, r);
                                i = t[n].substring(r + 1)
                            } else o = t[n];
                            e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                        }
                    }
                }(n.c, function(t, e) {
                    n.add(decodeURIComponent(t.replace(/\+/g, " ")), e)
                }))
            }

            function vn(t, e) {
                yn(t), e = wn(t, e), He(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, He((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Ye(t)))
            }

            function gn(t, e) {
                return yn(t), e = wn(t, e), He(t.a.b, e)
            }

            function mn(t, e, n) {
                vn(t, e), 0 < n.length && (t.c = null, t.a.set(wn(t, e), W(n)), t.b += n.length)
            }

            function wn(t, e) {
                return e = String(e), t.f && (e = e.toLowerCase()), e
            }

            function bn(t, e) {
                this.b = t, this.a = e
            }

            function En(t) {
                this.g = t || Tn, t = R.PerformanceNavigationTiming ? 0 < (t = R.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(R.ca && R.ca.ua && R.ca.ua() && R.ca.ua().mb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Set), this.b = null, this.c = []
            }(A = dn.prototype).add = function(t, e) {
                yn(this), this.c = null, t = wn(this, t);
                var n = this.a.get(t);
                return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
            }, A.forEach = function(n, r) {
                yn(this), this.a.forEach(function(t, e) {
                    G(t, function(t) {
                        n.call(r, t, e, this)
                    }, this)
                }, this)
            }, A.K = function() {
                yn(this);
                for (var t = this.a.I(), e = this.a.K(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                return n
            }, A.I = function(t) {
                yn(this);
                var e = [];
                if ("string" == typeof t) gn(this, t) && (e = z(e, this.a.get(wn(this, t))));
                else {
                    t = this.a.I();
                    for (var n = 0; n < t.length; n++) e = z(e, t[n])
                }
                return e
            }, A.set = function(t, e) {
                return yn(this), this.c = null, gn(this, t = wn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
            }, A.get = function(t, e) {
                return t && 0 < (t = this.I(t)).length ? String(t[0]) : e
            }, A.toString = function() {
                if (this.c) return this.c;
                if (!this.a) return "";
                for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = encodeURIComponent(String(r));
                    r = this.I(r);
                    for (var o = 0; o < r.length; o++) {
                        var s = i;
                        "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s)
                    }
                }
                return this.c = t.join("&")
            };
            var Tn = 10;

            function In(t) {
                return t.b || t.a && t.a.size >= t.f
            }

            function Nn(t) {
                return t.b ? 1 : t.a ? t.a.size : 0
            }

            function An(t, e) {
                return t.b ? t.b == e : t.a && t.a.has(e)
            }

            function _n(t, e) {
                t.a ? t.a.add(e) : t.b = e
            }

            function Sn(t, e) {
                t.b && t.b == e ? t.b = null : t.a && t.a.has(e) && t.a.delete(e)
            }

            function Rn(t) {
                var e, n;
                if (null != t.b) return t.c.concat(t.b.i);
                if (null == t.a || 0 === t.a.size) return W(t.c);
                var r = t.c;
                try {
                    for (var i = N(t.a.values()), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        r = r.concat(s.i)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }

            function Dn() {}

            function Pn() {
                this.a = new Dn
            }

            function xn(t, r, e) {
                var i = e || "";
                try {
                    Qe(t, function(t, e) {
                        var n = t;
                        O(t) && (n = Kt(t)), r.push(i + e + "=" + encodeURIComponent(n))
                    })
                } catch (t) {
                    throw r.push(i + "type=" + encodeURIComponent("_badmap")), t
                }
            }

            function On(t, e, n, r, i) {
                try {
                    e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
                } catch (t) {}
            }
            En.prototype.cancel = function() {
                var e, t;
                if (this.c = Rn(this), this.b) this.b.cancel(), this.b = null;
                else if (this.a && 0 !== this.a.size) {
                    try {
                        for (var n = N(this.a.values()), r = n.next(); !r.done; r = n.next()) {
                            r.value.cancel()
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (t = n.return) && t.call(n)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    this.a.clear()
                }
            }, Dn.prototype.stringify = function(t) {
                return R.JSON.stringify(t, void 0)
            }, Dn.prototype.parse = function(t) {
                return R.JSON.parse(t, void 0)
            };
            var kn = R.JSON.parse;

            function Ln(t) {
                Wt.call(this), this.headers = new Ke, this.G = t || null, this.b = !1, this.s = this.a = null, this.D = "", this.h = 0, this.f = "", this.g = this.w = this.l = this.v = !1, this.o = 0, this.m = null, this.H = Vn, this.B = this.F = !1
            }
            F(Ln, Wt);
            var Vn = "",
                Cn = /^https?$/i,
                Mn = ["POST", "PUT"];

            function Un(t) {
                return "content-type" == t.toLowerCase()
            }

            function jn(t, e) {
                t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, Fn(t), Bn(t)
            }

            function Fn(t) {
                t.v || (t.v = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
            }

            function qn(t) {
                if (t.b && void 0 !== S && (!t.s[1] || 4 != zn(t) || 2 != t.S()))
                    if (t.l && 4 == zn(t)) se(t.va, 0, t);
                    else if (t.dispatchEvent("readystatechange"), 4 == zn(t)) {
                    t.b = !1;
                    try {
                        var e, n = t.S();
                        t: switch (n) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var r = !0;
                                break t;
                            default:
                                r = !1
                        }
                        if (!(e = r)) {
                            var i;
                            if (i = 0 === n) {
                                var o = String(t.D).match(Xe)[1] || null;
                                if (!o && R.self && R.self.location) {
                                    var s = R.self.location.protocol;
                                    o = s.substr(0, s.length - 1)
                                }
                                i = !Cn.test(o ? o.toLowerCase() : "")
                            }
                            e = i
                        }
                        if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
                        else {
                            t.h = 6;
                            try {
                                var u = 2 < zn(t) ? t.a.statusText : ""
                            } catch (t) {
                                u = ""
                            }
                            t.f = u + " [" + t.S() + "]", Fn(t)
                        }
                    } finally {
                        Bn(t)
                    }
                }
            }

            function Bn(t, e) {
                if (t.a) {
                    Gn(t);
                    var n = t.a,
                        r = t.s[0] ? D : null;
                    t.a = null, t.s = null, e || t.dispatchEvent("ready");
                    try {
                        n.onreadystatechange = r
                    } catch (t) {}
                }
            }

            function Gn(t) {
                t.a && t.B && (t.a.ontimeout = null), t.m && (R.clearTimeout(t.m), t.m = null)
            }

            function zn(t) {
                return t.a ? t.a.readyState : 0
            }

            function Wn(t, e, n) {
                t: {
                    for (r in n) {
                        var r = !1;
                        break t
                    }
                    r = !0
                }
                var i;r || (i = "", Z(n, function(t, e) {
                    i += e, i += ":", i += t, i += "\r\n"
                }), n = i, "string" == typeof t ? null != n && encodeURIComponent(String(n)) : rn(t, e, n))
            }

            function Qn(t, e, n) {
                return n && n.internalChannelParams && n.internalChannelParams[t] || e
            }

            function Kn(t) {
                this.f = [], this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null, this.Fa = this.H = 0, this.Ca = Qn("failFast", !1, t), this.U = this.l = this.i = this.g = this.c = null, this.W = !0, this.A = this.ia = this.G = -1, this.J = this.m = this.o = 0, this.Ba = Qn("baseRetryDelayMs", 5e3, t), this.Ga = Qn("retryDelaySeedMs", 1e4, t), this.Da = Qn("forwardChannelMaxRetries", 2, t), this.ga = Qn("forwardChannelRequestTimeoutMs", 2e4, t), this.Ea = t && t.nb || void 0, this.D = void 0, this.w = t && t.supportsCrossDomainXhr || !1, this.B = "", this.b = new En(t && t.concurrentRequestLimit), this.ja = new Pn, this.fa = t && t.fastHandshake || !1, t && t.forceLongPolling && (this.W = !1), this.O = void 0
            }

            function Yn(t) {
                if (Hn(t), 3 == t.u) {
                    var e = t.H++,
                        n = $e(t.v);
                    rn(n, "SID", t.B), rn(n, "RID", e), rn(n, "TYPE", "terminate"), Zn(t, n), (e = new Oe(t, e, void 0)).B = 2, e.f = on($e(n)), n = !1, R.navigator && R.navigator.sendBeacon && (n = R.navigator.sendBeacon(e.f.toString(), "")), !n && R.Image && ((new Image).src = e.f, n = !0), n || (e.a = hr(e.g, null), e.a.$(e.f)), e.s = j(), Fe(e)
                }
                ur(t)
            }

            function Hn(t) {
                t.a && (t.a.cancel(), t.a = null), t.i && (R.clearTimeout(t.i), t.i = null), rr(t), t.b.cancel(), t.g && ("number" == typeof t.g && R.clearTimeout(t.g), t.g = null)
            }

            function Xn(t, e) {
                t.f.push(new bn(t.Fa++, e)), 3 == t.u && Jn(t)
            }

            function Jn(t) {
                In(t.b) || t.g || (t.g = !0, te(t.xa, t), t.o = 0)
            }

            function $n(t, e) {
                var n;
                n = e ? e.W : t.H++;
                var r = $e(t.v);
                rn(r, "SID", t.B), rn(r, "RID", n), rn(r, "AID", t.G), Zn(t, r), t.h && t.j && Wn(r, t.h, t.j), n = new Oe(t, n, t.o + 1), null === t.h && (n.m = t.j), e && (t.f = e.i.concat(t.f)), e = tr(t, n, 1e3), n.setTimeout(Math.round(.5 * t.ga) + Math.round(.5 * t.ga * Math.random())), _n(t.b, n), Ce(n, r, e)
            }

            function Zn(t, n) {
                t.c && Qe({}, function(t, e) {
                    rn(n, e, t)
                })
            }

            function tr(t, e, n) {
                n = Math.min(t.f.length, n);
                var r = t.c ? M(t.c.Ha, t.c, t) : null;
                t: for (var i = t.f, o = -1;;) {
                    var s = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, s.push("ofs=" + o)) : o = 0 : s.push("ofs=" + o);
                    for (var u = !0, a = 0; a < n; a++) {
                        var h = i[a].b,
                            c = i[a].a;
                        if ((h -= o) < 0) o = Math.max(0, i[a].b - 100), u = !1;
                        else try {
                            xn(c, s, "req" + h + "_")
                        } catch (t) {
                            r && r(c)
                        }
                    }
                    if (u) {
                        r = s.join("&");
                        break t
                    }
                }
                return t = t.f.splice(0, n), e.i = t, r
            }

            function er(t) {
                t.a || t.i || (t.J = 1, te(t.wa, t), t.m = 0)
            }

            function nr(t) {
                return !(t.a || t.i || 3 <= t.m) && (t.J++, t.i = Ee(M(t.wa, t), or(t, t.m)), t.m++, 1)
            }

            function rr(t) {
                null != t.l && (R.clearTimeout(t.l), t.l = null)
            }

            function ir(t, e) {
                var n = null;
                if (t.a == e) {
                    rr(t), t.a = null;
                    var r = 2
                } else {
                    if (!An(t.b, e)) return;
                    n = e.i, Sn(t.b, e), r = 1
                }
                if (t.A = e.H, 0 != t.u)
                    if (e.b)
                        if (1 == r) {
                            n = e.j ? e.j.length : 0, e = j() - e.s;
                            var i = t.o;
                            (r = ye()).dispatchEvent(new be(r)), Jn(t)
                        } else er(t);
                else if (3 == (i = e.c) || 0 == i && 0 < t.A || !(1 == r && function(t, e) {
                        if (!(Nn(t.b) >= t.b.f - (t.g ? 1 : 0))) {
                            if (t.g) return t.f = e.i.concat(t.f), 1;
                            if (!(1 == t.u || 2 == t.u || t.o >= (t.Ca ? 0 : t.Da))) return t.g = Ee(M(t.xa, t, e), or(t, t.o)), t.o++, 1
                        }
                    }(t, e) || 2 == r && nr(t))) switch (n && 0 < n.length && (e = t.b, e.c = e.c.concat(n)), i) {
                    case 1:
                        sr(t, 5);
                        break;
                    case 4:
                        sr(t, 10);
                        break;
                    case 3:
                        sr(t, 6);
                        break;
                    default:
                        sr(t, 2)
                }
            }

            function or(t, e) {
                var n = t.Ba + Math.floor(Math.random() * t.Ga);
                return t.c || (n *= 2), n * e
            }

            function sr(t, e) {
                if (2 == e) {
                    var n = null;
                    t.c && (n = null);
                    var r = M(t.Ta, t);
                    n || (n = new Je("//www.google.com/images/cleardot.gif"), R.location && "http" == R.location.protocol || Ze(n, "https"), on(n)),
                        function(t, e) {
                            var n = new pe;
                            if (R.Image) {
                                var r = new Image;
                                r.onload = U(On, n, r, "TestLoadImage: loaded", !0, e), r.onerror = U(On, n, r, "TestLoadImage: error", !1, e), r.onabort = U(On, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = U(On, n, r, "TestLoadImage: timeout", !1, e), R.setTimeout(function() {
                                    r.ontimeout && r.ontimeout()
                                }, 1e4), r.src = t
                            } else e(!1)
                        }(n.toString(), r)
                } else we(2);
                t.u = 0, t.c && t.c.la(e), ur(t), Hn(t)
            }

            function ur(t) {
                t.u = 0, t.A = -1, t.c && (0 == Rn(t.b).length && 0 == t.f.length || (t.b.c.length = 0, W(t.f), t.f.length = 0), t.c.ka())
            }

            function ar(t, e, n) {
                var r, i, o, s, u, a, h = (r = n) instanceof Je ? $e(r) : new Je(r, void 0);
                if ("" != h.c) e && tn(h, e + "." + h.c), en(h, h.h);
                else {
                    var c = R.location;
                    i = c.protocol, o = e ? e + "." + c.hostname : c.hostname, s = +c.port, u = n, a = new Je(null, void 0), i && Ze(a, i), o && tn(a, o), s && en(a, s), u && (a.g = u), h = a
                }
                return t.N && Z(t.N, function(t, e) {
                    rn(h, e, t)
                }), e = t.s, n = t.ha, e && n && rn(h, e, n), rn(h, "VER", t.oa), Zn(t, h), h
            }

            function hr(t, e) {
                if (e && !t.w) throw Error("Can't create secondary domain capable XhrIo object.");
                return (e = new Ln(t.Ea)).F = t.w, e
            }

            function cr() {}

            function fr() {
                if (ut && !(10 <= Number(bt))) throw Error("Environmental error: no available transport.")
            }

            function lr(t, e) {
                Wt.call(this), this.a = new Kn(e), this.l = t, this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                    "X-Client-Protocol": "webchannel"
                }), this.a.j = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                    "X-WebChannel-Content-Type": e.messageContentType
                }), e && e.pa && (t ? t["X-WebChannel-Client-Profile"] = e.pa : t = {
                    "X-WebChannel-Client-Profile": e.pa
                }), this.a.F = t, (t = e && e.httpHeadersOverwriteParam) && !Q(t) && (this.a.h = t), this.h = e && e.supportsCrossDomainXhr || !1, this.g = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !Q(e) && (this.a.s = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new yr(this)
            }

            function pr(t) {
                De.call(this);
                var e = t.__sm__;
                if (e) {
                    t: {
                        for (var n in e) {
                            t = n;
                            break t
                        }
                        t = void 0
                    }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
                }
                else this.data = t
            }

            function dr() {
                Pe.call(this), this.status = 1
            }

            function yr(t) {
                this.a = t
            }(A = Ln.prototype).$ = function(t, e, n, r) {
                if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.D = t, this.f = "", this.h = 0, this.v = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.G ? Ae(this.G) : Ae(Se), this.a.onreadystatechange = M(this.va, this);
                try {
                    this.w = !0, this.a.open(e, String(t), !0), this.w = !1
                } catch (t) {
                    return void jn(this, t)
                }
                t = n || "";
                var i, o = new Ke(this.headers);
                r && Qe(r, function(t, e) {
                    o.set(e, t)
                }), r = function(t) {
                    t: {
                        for (var e = Un, n = t.length, r = "string" == typeof t ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) {
                                e = i;
                                break t
                            } e = -1
                    }
                    return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e]
                }(o.K()), n = R.FormData && t instanceof R.FormData, 0 <= B(Mn, e) && !r && !n && o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, e) {
                    this.a.setRequestHeader(e, t)
                }, this), this.H && (this.a.responseType = this.H), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
                try {
                    Gn(this), 0 < this.o && ((this.B = (i = this.a, ut && mt(9) && "number" == typeof i.timeout && void 0 !== i.ontimeout)) ? (this.a.timeout = this.o, this.a.ontimeout = M(this.ta, this)) : this.m = se(this.ta, this.o, this)), this.l = !0, this.a.send(t), this.l = !1
                } catch (t) {
                    jn(this, t)
                }
            }, A.ta = function() {
                void 0 !== S && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8))
            }, A.abort = function(t) {
                this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Bn(this))
            }, A.C = function() {
                this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Bn(this, !0)), Ln.M.C.call(this)
            }, A.va = function() {
                this.j || (this.w || this.l || this.g ? qn(this) : this.Oa())
            }, A.Oa = function() {
                qn(this)
            }, A.S = function() {
                try {
                    return 2 < zn(this) ? this.a.status : -1
                } catch (t) {
                    return -1
                }
            }, A.Y = function() {
                try {
                    return this.a ? this.a.responseText : ""
                } catch (t) {
                    return ""
                }
            }, A.Ja = function(t) {
                if (this.a) {
                    var e = this.a.responseText;
                    return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), kn(e)
                }
            }, A.qa = function() {
                return this.h
            }, A.Ma = function() {
                return "string" == typeof this.f ? this.f : String(this.f)
            }, (A = Kn.prototype).oa = 8, A.u = 1, A.xa = function(t) {
                if (this.g)
                    if (this.g = null, 1 == this.u) {
                        if (!t) {
                            this.H = Math.floor(1e5 * Math.random()), t = this.H++;
                            var e, n = new Oe(this, t, void 0),
                                r = this.j;
                            if (this.F && (r ? nt(r = tt(r), this.F) : r = this.F), null === this.h && (n.m = r), this.fa) t: {
                                for (var i = e = 0; i < this.f.length; i++) {
                                    var o = this.f[i];
                                    if ("__data__" in o.a && "string" == typeof(o = o.a.__data__) ? o = o.length : o = void 0, void 0 === o) break;
                                    if (4096 < (e += o)) {
                                        e = i;
                                        break t
                                    }
                                    if (4096 === e || i === this.f.length - 1) {
                                        e = i + 1;
                                        break t
                                    }
                                }
                                e = 1e3
                            }
                            else e = 1e3;
                            e = tr(this, n, e), rn(i = $e(this.v), "RID", t), rn(i, "CVER", 22), this.s && rn(i, "X-HTTP-Session-Id", this.s), Zn(this, i), this.h && r && Wn(i, this.h, r), _n(this.b, n), this.fa ? (rn(i, "$req", e), rn(i, "SID", "null"), n.R = !0, Ce(n, i, null)) : Ce(n, i, e), this.u = 2
                        }
                    } else 3 == this.u && (t ? $n(this, t) : 0 == this.f.length || In(this.b) || $n(this))
            }, A.wa = function() {
                this.i = null, this.a = new Oe(this, "rpc", this.J), null === this.h && (this.a.m = this.j), this.a.J = 0;
                var t = $e(this.ea);
                rn(t, "RID", "rpc"), rn(t, "SID", this.B), rn(t, "CI", this.U ? "0" : "1"), rn(t, "AID", this.G), Zn(this, t), rn(t, "TYPE", "xmlhttp"), this.h && this.j && Wn(t, this.h, this.j), this.D && this.a.setTimeout(this.D);
                var e = this.a,
                    n = this.R;
                e.B = 1, e.f = on($e(t)), e.j = null, e.F = !0, Me(e, n)
            }, A.Na = function() {
                null != this.l && (this.l = null, this.a.cancel(), this.a = null, nr(this), we(19))
            }, A.Ta = function(t) {
                we(t ? 2 : 1)
            }, (A = cr.prototype).na = function() {}, A.ma = function() {}, A.la = function() {}, A.ka = function() {}, A.Ha = function() {}, fr.prototype.a = function(t, e) {
                return new lr(t, e)
            }, F(lr, Wt), (A = lr.prototype).addEventListener = function(t, e, n, r) {
                lr.M.addEventListener.call(this, t, e, n, r)
            }, A.removeEventListener = function(t, e, n, r) {
                lr.M.removeEventListener.call(this, t, e, n, r)
            }, A.Ka = function() {
                this.a.c = this.f, this.h && (this.a.w = !0);
                var t = this.a,
                    e = this.l,
                    n = this.b || void 0;
                we(0), t.P = e, t.N = n || {}, t.U = t.W, t.v = ar(t, null, t.P), Jn(t)
            }, A.close = function() {
                Yn(this.a)
            }, A.La = function(t) {
                if ("string" == typeof t) {
                    var e = {};
                    e.__data__ = t, Xn(this.a, e)
                } else this.g ? ((e = {}).__data__ = Kt(t), Xn(this.a, e)) : Xn(this.a, t)
            }, A.C = function() {
                this.a.c = null, delete this.f, Yn(this.a), delete this.a, lr.M.C.call(this)
            }, F(pr, De), F(dr, Pe), F(yr, cr), yr.prototype.na = function() {
                this.a.dispatchEvent("a")
            }, yr.prototype.ma = function(t) {
                this.a.dispatchEvent(new pr(t))
            }, yr.prototype.la = function(t) {
                this.a.dispatchEvent(new dr)
            }, yr.prototype.ka = function() {
                this.a.dispatchEvent("b")
            }, fr.prototype.createWebChannel = fr.prototype.a, lr.prototype.send = lr.prototype.La, lr.prototype.open = lr.prototype.Ka, lr.prototype.close = lr.prototype.close, Te.NO_ERROR = 0, Te.TIMEOUT = 8, Te.HTTP_ERROR = 6, Ie.COMPLETE = "complete", (_e.EventType = Re).OPEN = "a", Re.CLOSE = "b", Re.ERROR = "c", Re.MESSAGE = "d", Wt.prototype.listen = Wt.prototype.ra, Ln.prototype.listenOnce = Ln.prototype.sa, Ln.prototype.getLastError = Ln.prototype.Ma, Ln.prototype.getLastErrorCode = Ln.prototype.qa, Ln.prototype.getStatus = Ln.prototype.S, Ln.prototype.getResponseJson = Ln.prototype.Ja, Ln.prototype.getResponseText = Ln.prototype.Y, Ln.prototype.send = Ln.prototype.$;
            var vr = {
                    createWebChannelTransport: function() {
                        return new fr
                    },
                    ErrorCode: Te,
                    EventType: Ie,
                    WebChannel: _e,
                    XhrIo: Ln
                },
                gr = vr.createWebChannelTransport,
                mr = vr.ErrorCode,
                wr = vr.EventType,
                br = vr.WebChannel,
                Er = vr.XhrIo,
                Tr = wp.SDK_VERSION,
                Ir = (Nr.prototype.t = function() {
                    return null != this.uid
                }, Nr.prototype.s = function() {
                    return this.t() ? "uid:" + this.uid : "anonymous-user"
                }, Nr.prototype.isEqual = function(t) {
                    return t.uid === this.uid
                }, Nr);

            function Nr(t) {
                this.uid = t
            }
            Ir.UNAUTHENTICATED = new Ir(null), Ir.i = new Ir("google-credentials-uid"), Ir.h = new Ir("first-party-uid");

            function Ar(t, e) {
                this.user = e, this.type = "OAuth", this.o = {}, this.o.Authorization = "Bearer " + t
            }
            var _r, Sr, Rr = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                Dr = (n(Qr, Sr = Error), Qr),
                Pr = (Wr.prototype.getToken = function() {
                    return Promise.resolve(null)
                }, Wr.prototype._ = function() {}, Wr.prototype.l = function(t) {
                    (this.u = t)(Ir.UNAUTHENTICATED)
                }, Wr.prototype.T = function() {
                    this.u = null
                }, Wr),
                xr = (zr.prototype.getToken = function() {
                    var e = this,
                        n = this.A,
                        t = this.forceRefresh;
                    return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(function(t) {
                        if (e.A !== n) throw new Dr(Rr.ABORTED, "getToken aborted due to token change.");
                        return t ? ($s("string" == typeof t.accessToken), new Ar(t.accessToken, e.currentUser)) : null
                    }) : Promise.resolve(null)
                }, zr.prototype._ = function() {
                    this.forceRefresh = !0
                }, zr.prototype.l = function(t) {
                    this.u = t, this.R && t(this.currentUser)
                }, zr.prototype.T = function() {
                    this.auth && this.auth.removeAuthTokenListener(this.I), this.I = null, this.u = null
                }, zr.prototype.m = function() {
                    var t = this.auth && this.auth.getUid();
                    return $s(null === t || "string" == typeof t), new Ir(t)
                }, zr),
                Or = (Object.defineProperty(Gr.prototype, "o", {
                    get: function() {
                        var t = {
                                "X-Goog-AuthUser": this.V
                            },
                            e = this.P.auth.g([]);
                        return e && (t.Authorization = e), t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Gr),
                kr = (Br.prototype.getToken = function() {
                    return Promise.resolve(new Or(this.P, this.V))
                }, Br.prototype.l = function(t) {
                    t(Ir.h)
                }, Br.prototype.T = function() {}, Br.prototype._ = function() {}, Br),
                Lr = (qr.now = function() {
                    return qr.fromMillis(Date.now())
                }, qr.fromDate = function(t) {
                    return qr.fromMillis(t.getTime())
                }, qr.fromMillis = function(t) {
                    var e = Math.floor(t / 1e3);
                    return new qr(e, 1e6 * (t - 1e3 * e))
                }, qr.prototype.toDate = function() {
                    return new Date(this.toMillis())
                }, qr.prototype.toMillis = function() {
                    return 1e3 * this.seconds + this.nanoseconds / 1e6
                }, qr.prototype.p = function(t) {
                    return this.seconds === t.seconds ? nu(this.nanoseconds, t.nanoseconds) : nu(this.seconds, t.seconds)
                }, qr.prototype.isEqual = function(t) {
                    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
                }, qr.prototype.toString = function() {
                    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                }, qr.prototype.valueOf = function() {
                    var t = this.seconds - -62135596800;
                    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                }, qr),
                Vr = (Fr.v = function(t) {
                    return new Fr(t)
                }, Fr.min = function() {
                    return new Fr(new Lr(0, 0))
                }, Fr.prototype.S = function(t) {
                    return this.timestamp.p(t.timestamp)
                }, Fr.prototype.isEqual = function(t) {
                    return this.timestamp.isEqual(t.timestamp)
                }, Fr.prototype.D = function() {
                    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                }, Fr.prototype.toString = function() {
                    return "SnapshotVersion(" + this.timestamp.toString() + ")"
                }, Fr.prototype.C = function() {
                    return this.timestamp
                }, Fr),
                Cr = (Object.defineProperty(jr.prototype, "length", {
                    get: function() {
                        return this.F
                    },
                    enumerable: !0,
                    configurable: !0
                }), jr.prototype.isEqual = function(t) {
                    return 0 === jr.N(this, t)
                }, jr.prototype.child = function(t) {
                    var e = this.segments.slice(this.offset, this.limit());
                    return t instanceof jr ? t.forEach(function(t) {
                        e.push(t)
                    }) : e.push(t), this.$(e)
                }, jr.prototype.limit = function() {
                    return this.offset + this.length
                }, jr.prototype.k = function(t) {
                    return t = void 0 === t ? 1 : t, this.$(this.segments, this.offset + t, this.length - t)
                }, jr.prototype.M = function() {
                    return this.$(this.segments, this.offset, this.length - 1)
                }, jr.prototype.L = function() {
                    return this.segments[this.offset]
                }, jr.prototype.O = function() {
                    return this.get(this.length - 1)
                }, jr.prototype.get = function(t) {
                    return this.segments[this.offset + t]
                }, jr.prototype.B = function() {
                    return 0 === this.length
                }, jr.prototype.q = function(t) {
                    if (t.length < this.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, jr.prototype.U = function(t) {
                    if (this.length + 1 !== t.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, jr.prototype.forEach = function(t) {
                    for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                }, jr.prototype.W = function() {
                    return this.segments.slice(this.offset, this.limit())
                }, jr.N = function(t, e) {
                    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                        var i = t.get(r),
                            o = e.get(r);
                        if (i < o) return -1;
                        if (o < i) return 1
                    }
                    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                }, jr),
                Mr = (n(Ur, _r = Cr), Ur.prototype.$ = function(t, e, n) {
                    return new Ur(t, e, n)
                }, Ur.prototype.j = function() {
                    return this.W().join("/")
                }, Ur.prototype.toString = function() {
                    return this.j()
                }, Ur.K = function(t) {
                    if (0 <= t.indexOf("//")) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
                    return new Ur(t.split("/").filter(function(t) {
                        return 0 < t.length
                    }))
                }, Ur);

            function Ur() {
                return null !== _r && _r.apply(this, arguments) || this
            }

            function jr(t, e, n) {
                void 0 === e ? e = 0 : e > t.length && Js(), void 0 === n ? n = t.length - e : n > t.length - e && Js(), this.segments = t, this.offset = e, this.F = n
            }

            function Fr(t) {
                this.timestamp = t
            }

            function qr(t, e) {
                if (this.seconds = t, (this.nanoseconds = e) < 0) throw new Dr(Rr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                if (1e9 <= e) throw new Dr(Rr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                if (t < -62135596800) throw new Dr(Rr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                if (253402300800 <= t) throw new Dr(Rr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
            }

            function Br(t, e) {
                this.P = t, this.V = e
            }

            function Gr(t, e) {
                this.P = t, this.V = e, this.type = "FirstParty", this.user = Ir.h
            }

            function zr(t) {
                var e = this;
                this.I = null, this.currentUser = Ir.UNAUTHENTICATED, this.R = !1, this.A = 0, this.u = null, this.forceRefresh = !1, this.I = function() {
                    e.A++, e.currentUser = e.m(), e.R = !0, e.u && e.u(e.currentUser)
                }, this.A = 0, this.auth = t.getImmediate({
                    optional: !0
                }), this.auth ? this.auth.addAuthTokenListener(this.I) : (this.I(null), t.get().then(function(t) {
                    e.auth = t, e.I && e.auth.addAuthTokenListener(e.I)
                }, function() {}))
            }

            function Wr() {
                this.u = null
            }

            function Qr(t, e) {
                var n = this;
                return (n = Sr.call(this, e) || this).code = t, n.message = e, n.name = "FirebaseError", n.toString = function() {
                    return n.name + ": [code=" + n.code + "]: " + n.message
                }, n
            }
            Mr.G = new Mr([]);
            var Kr, Yr = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                Hr = (n(Xr, Kr = Cr), Xr.prototype.$ = function(t, e, n) {
                    return new Xr(t, e, n)
                }, Xr.H = function(t) {
                    return Yr.test(t)
                }, Xr.prototype.j = function() {
                    return this.W().map(function(t) {
                        return t = t.replace("\\", "\\\\").replace("`", "\\`"), Xr.H(t) || (t = "`" + t + "`"), t
                    }).join(".")
                }, Xr.prototype.toString = function() {
                    return this.j()
                }, Xr.prototype.Y = function() {
                    return 1 === this.length && "__name__" === this.get(0)
                }, Xr.J = function() {
                    return new Xr(["__name__"])
                }, Xr.X = function(t) {
                    for (var e = [], n = "", r = 0, i = function() {
                            if (0 === n.length) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                            e.push(n), n = ""
                        }, o = !1; r < t.length;) {
                        var s = t[r];
                        if ("\\" === s) {
                            if (r + 1 === t.length) throw new Dr(Rr.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                            var u = t[r + 1];
                            if ("\\" !== u && "." !== u && "`" !== u) throw new Dr(Rr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                            n += u, r += 2
                        } else "`" === s ? o = !o : "." !== s || o ? n += s : i(), r++
                    }
                    if (i(), o) throw new Dr(Rr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                    return new Xr(e)
                }, Xr);

            function Xr() {
                return null !== Kr && Kr.apply(this, arguments) || this
            }
            Hr.G = new Hr([]);
            var Jr = ($r.Z = function(t) {
                return new $r(Mr.K(t).k(5))
            }, $r.prototype.tt = function(t) {
                return 2 <= this.path.length && this.path.get(this.path.length - 2) === t
            }, $r.prototype.isEqual = function(t) {
                return null !== t && 0 === Mr.N(this.path, t.path)
            }, $r.prototype.toString = function() {
                return this.path.toString()
            }, $r.N = function(t, e) {
                return Mr.N(t.path, e.path)
            }, $r.et = function(t) {
                return t.length % 2 == 0
            }, $r.st = function(t) {
                return new $r(new Mr(t.slice()))
            }, $r);

            function $r(t) {
                this.path = t
            }

            function Zr(t) {
                var e = 0;
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
                return e
            }

            function ti(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }

            function ei(t) {
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }
            Jr.EMPTY = new Jr(new Mr([]));
            var ni = (ri.fromBase64String = function(t) {
                return new ri(zs.nt().atob(t))
            }, ri.fromUint8Array = function(t) {
                return new ri(function(t) {
                    for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
                    return e
                }(t))
            }, ri.prototype.toBase64 = function() {
                return zs.nt().btoa(this.it)
            }, ri.prototype.toUint8Array = function() {
                return function(t) {
                    for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                    return e
                }(this.it)
            }, ri.prototype.rt = function() {
                return 2 * this.it.length
            }, ri.prototype.S = function(t) {
                return nu(this.it, t.it)
            }, ri.prototype.isEqual = function(t) {
                return this.it === t.it
            }, ri);

            function ri(t) {
                this.it = t
            }

            function ii(t) {
                return null == t
            }

            function oi(t) {
                return -0 === t && 1 / t == -1 / 0
            }

            function si(t) {
                return "number" == typeof t && Number.isInteger(t) && !oi(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
            }

            function ui(t) {
                var e, n;
                return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
            }

            function ai(t) {
                var e = vi(t.mapValue.fields.__local_write_time__.timestampValue);
                return new Lr(e.seconds, e.nanos)
            }
            ni.ht = new ni("");
            var hi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function ci(t) {
                return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? ui(t) ? 4 : 10 : Js()
            }

            function fi(i, t) {
                var e, n, r, o = ci(i);
                if (o !== ci(t)) return !1;
                switch (o) {
                    case 0:
                        return !0;
                    case 1:
                        return i.booleanValue === t.booleanValue;
                    case 4:
                        return ai(i).isEqual(ai(t));
                    case 3:
                        return function(t) {
                            if ("string" == typeof i.timestampValue && "string" == typeof t.timestampValue && i.timestampValue.length === t.timestampValue.length) return i.timestampValue === t.timestampValue;
                            var e = vi(i.timestampValue),
                                n = vi(t.timestampValue);
                            return e.seconds === n.seconds && e.nanos === n.nanos
                        }(t);
                    case 5:
                        return i.stringValue === t.stringValue;
                    case 6:
                        return r = t, mi(i.bytesValue).isEqual(mi(r.bytesValue));
                    case 7:
                        return i.referenceValue === t.referenceValue;
                    case 8:
                        return n = t, gi((e = i).geoPointValue.latitude) === gi(n.geoPointValue.latitude) && gi(e.geoPointValue.longitude) === gi(n.geoPointValue.longitude);
                    case 2:
                        return function(t, e) {
                            if ("integerValue" in t && "integerValue" in e) return gi(t.integerValue) === gi(e.integerValue);
                            if ("doubleValue" in t && "doubleValue" in e) {
                                var n = gi(t.doubleValue),
                                    r = gi(e.doubleValue);
                                return n === r ? oi(n) === oi(r) : isNaN(n) && isNaN(r)
                            }
                            return !1
                        }(i, t);
                    case 9:
                        return ru(i.arrayValue.values || [], t.arrayValue.values || [], fi);
                    case 10:
                        return function(t) {
                            var e = i.mapValue.fields || {},
                                n = t.mapValue.fields || {};
                            if (Zr(e) !== Zr(n)) return !1;
                            for (var r in e)
                                if (e.hasOwnProperty(r) && (void 0 === n[r] || !fi(e[r], n[r]))) return !1;
                            return !0
                        }(t);
                    default:
                        return Js()
                }
            }

            function li(t, e) {
                return void 0 !== (t.values || []).find(function(t) {
                    return fi(t, e)
                })
            }

            function pi(t, e) {
                var n, r, i, o, s, u, a, h, c, f, l = ci(t),
                    p = ci(e);
                if (l !== p) return nu(l, p);
                switch (l) {
                    case 0:
                        return 0;
                    case 1:
                        return nu(t.booleanValue, e.booleanValue);
                    case 2:
                        return h = e, c = gi(t.integerValue || t.doubleValue), f = gi(h.integerValue || h.doubleValue), c < f ? -1 : f < c ? 1 : c === f ? 0 : isNaN(c) ? isNaN(f) ? 0 : -1 : 1;
                    case 3:
                        return di(t.timestampValue, e.timestampValue);
                    case 4:
                        return di(ai(t), ai(e));
                    case 5:
                        return nu(t.stringValue, e.stringValue);
                    case 6:
                        return o = t.bytesValue, s = e.bytesValue, u = mi(o), a = mi(s), u.S(a);
                    case 7:
                        return function(t, e) {
                            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                                var o = nu(n[i], r[i]);
                                if (0 !== o) return o
                            }
                            return nu(n.length, r.length)
                        }(t.referenceValue, e.referenceValue);
                    case 8:
                        return n = t.geoPointValue, r = e.geoPointValue, 0 !== (i = nu(gi(n.latitude), gi(r.latitude))) ? i : nu(gi(n.longitude), gi(r.longitude));
                    case 9:
                        return function(t, e) {
                            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                                var o = pi(n[i], r[i]);
                                if (o) return o
                            }
                            return nu(n.length, r.length)
                        }(t.arrayValue, e.arrayValue);
                    case 10:
                        return function(t, e) {
                            var n = t.fields || {},
                                r = Object.keys(n),
                                i = e.fields || {},
                                o = Object.keys(i);
                            r.sort(), o.sort();
                            for (var s = 0; s < r.length && s < o.length; ++s) {
                                var u = nu(r[s], o[s]);
                                if (0 !== u) return u;
                                var a = pi(n[r[s]], i[o[s]]);
                                if (0 !== a) return a
                            }
                            return nu(r.length, o.length)
                        }(t.mapValue, e.mapValue);
                    default:
                        throw Js()
                }
            }

            function di(t, e) {
                if ("string" == typeof t && "string" == typeof e && t.length === e.length) return nu(t, e);
                var n = vi(t),
                    r = vi(e),
                    i = nu(n.seconds, r.seconds);
                return 0 !== i ? i : nu(n.nanos, r.nanos)
            }

            function yi(t) {
                return function s(i) {
                    return "nullValue" in i ? "null" : "booleanValue" in i ? "" + i.booleanValue : "integerValue" in i ? "" + i.integerValue : "doubleValue" in i ? "" + i.doubleValue : "timestampValue" in i ? "time(" + (t = vi(i.timestampValue)).seconds + "," + t.nanos + ")" : "stringValue" in i ? i.stringValue : "bytesValue" in i ? mi(i.bytesValue).toBase64() : "referenceValue" in i ? (n = i.referenceValue, Jr.Z(n).toString()) : "geoPointValue" in i ? "geo(" + (e = i.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in i ? function() {
                        for (var t = "[", e = !0, n = 0, r = i.arrayValue.values || []; n < r.length; n++) {
                            e ? e = !1 : t += ",", t += s(r[n])
                        }
                        return t + "]"
                    }() : "mapValue" in i ? function(t) {
                        for (var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
                            var o = i[r];
                            n ? n = !1 : e += ",", e += o + ":" + s(t.fields[o])
                        }
                        return e + "}"
                    }(i.mapValue) : Js();
                    var t, e, n
                }(t)
            }

            function vi(t) {
                if ($s(!!t), "string" != typeof t) return {
                    seconds: gi(t.seconds),
                    nanos: gi(t.nanos)
                };
                var e = 0,
                    n = hi.exec(t);
                if ($s(!!n), n[1]) {
                    var r = n[1];
                    r = (r + "000000000").substr(0, 9), e = Number(r)
                }
                var i = new Date(t);
                return {
                    seconds: Math.floor(i.getTime() / 1e3),
                    nanos: e
                }
            }

            function gi(t) {
                return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0
            }

            function mi(t) {
                return "string" == typeof t ? ni.fromBase64String(t) : ni.fromUint8Array(t)
            }

            function wi(t, e) {
                return {
                    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.j()
                }
            }

            function bi(t) {
                return t && "integerValue" in t
            }

            function Ei(t) {
                return !!t && "arrayValue" in t
            }

            function Ti(t) {
                return t && "nullValue" in t
            }

            function Ii(t) {
                return t && "doubleValue" in t && isNaN(Number(t.doubleValue))
            }

            function Ni(t) {
                return t && "mapValue" in t
            }
            var Ai = (_i.prototype.ot = function(t, e) {
                return n = {
                    fields: {
                        __type__: {
                            stringValue: "server_timestamp"
                        },
                        __local_write_time__: {
                            timestampValue: {
                                seconds: e.seconds,
                                nanos: e.nanoseconds
                            }
                        }
                    }
                }, t && (n.fields.__previous_value__ = t), {
                    mapValue: n
                };
                var n
            }, _i.prototype.at = function(t, e) {
                return e
            }, _i.prototype.ut = function(t) {
                return null
            }, _i.prototype.isEqual = function(t) {
                return t instanceof _i
            }, _i);

            function _i() {}
            Ai.instance = new Ai;
            var Si = (Oi.prototype.ot = function(t, e) {
                    return this.apply(t)
                }, Oi.prototype.at = function(t, e) {
                    return this.apply(t)
                }, Oi.prototype.apply = function(t) {
                    for (var n = ki(t), e = function(e) {
                            n.some(function(t) {
                                return fi(t, e)
                            }) || n.push(e)
                        }, r = 0, i = this.elements; r < i.length; r++) e(i[r]);
                    return {
                        arrayValue: {
                            values: n
                        }
                    }
                }, Oi.prototype.ut = function(t) {
                    return null
                }, Oi.prototype.isEqual = function(t) {
                    return t instanceof Oi && ru(this.elements, t.elements, fi)
                }, Oi),
                Ri = (xi.prototype.ot = function(t, e) {
                    return this.apply(t)
                }, xi.prototype.at = function(t, e) {
                    return this.apply(t)
                }, xi.prototype.apply = function(t) {
                    for (var n = ki(t), e = function(e) {
                            n = n.filter(function(t) {
                                return !fi(t, e)
                            })
                        }, r = 0, i = this.elements; r < i.length; r++) e(i[r]);
                    return {
                        arrayValue: {
                            values: n
                        }
                    }
                }, xi.prototype.ut = function(t) {
                    return null
                }, xi.prototype.isEqual = function(t) {
                    return t instanceof xi && ru(this.elements, t.elements, fi)
                }, xi),
                Di = (Pi.prototype.ot = function(t, e) {
                    var n = this.ut(t),
                        r = this.asNumber(n) + this.asNumber(this.ct);
                    return bi(n) && bi(this.ct) ? this.serializer._t(r) : this.serializer.lt(r)
                }, Pi.prototype.at = function(t, e) {
                    return e
                }, Pi.prototype.ut = function(t) {
                    return bi(e = t) || e && "doubleValue" in e ? t : {
                        integerValue: 0
                    };
                    var e
                }, Pi.prototype.isEqual = function(t) {
                    return t instanceof Pi && fi(this.ct, t.ct)
                }, Pi.prototype.asNumber = function(t) {
                    return gi(t.integerValue || t.doubleValue)
                }, Pi);

            function Pi(t, e) {
                this.serializer = t, this.ct = e
            }

            function xi(t) {
                this.elements = t
            }

            function Oi(t) {
                this.elements = t
            }

            function ki(t) {
                return Ei(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
            }

            function Li(t, e) {
                this.version = t, this.transformResults = e
            }
            var Vi, Ci, Mi, Ui, ji, Fi = (uo.prototype.dt = function(t) {
                    for (var e = 0, n = this.fields; e < n.length; e++)
                        if (n[e].q(t)) return !0;
                    return !1
                }, uo.prototype.isEqual = function(t) {
                    return ru(this.fields, t.fields, function(t, e) {
                        return t.isEqual(e)
                    })
                }, uo),
                qi = (so.prototype.isEqual = function(t) {
                    return this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
                }, so),
                Bi = (oo.ft = function() {
                    return new oo
                }, oo.exists = function(t) {
                    return new oo(void 0, t)
                }, oo.updateTime = function(t) {
                    return new oo(t)
                }, Object.defineProperty(oo.prototype, "Tt", {
                    get: function() {
                        return void 0 === this.updateTime && void 0 === this.exists
                    },
                    enumerable: !0,
                    configurable: !0
                }), oo.prototype.Et = function(t) {
                    return void 0 !== this.updateTime ? t instanceof Io && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof Io
                }, oo.prototype.isEqual = function(t) {
                    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
                }, oo),
                Gi = (io.prototype.wt = function(t) {}, io.It = function(t) {
                    return t instanceof Io ? t.version : Vr.min()
                }, io),
                zi = (n(ro, ji = Gi), ro.prototype.at = function(t, e) {
                    this.wt(t);
                    var n = e.version;
                    return new Io(this.key, n, this.value, {
                        hasCommittedMutations: !0
                    })
                }, ro.prototype.ot = function(t, e, n) {
                    if (this.wt(t), !this.Rt.Et(t)) return t;
                    var r = Gi.It(t);
                    return new Io(this.key, r, this.value, {
                        At: !0
                    })
                }, ro.prototype.Pt = function(t) {
                    return null
                }, ro.prototype.isEqual = function(t) {
                    return t instanceof ro && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Rt.isEqual(t.Rt)
                }, ro),
                Wi = (n(no, Ui = Gi), no.prototype.at = function(t, e) {
                    if (this.wt(t), !this.Rt.Et(t)) return new Ao(this.key, e.version);
                    var n = this.gt(t);
                    return new Io(this.key, e.version, n, {
                        hasCommittedMutations: !0
                    })
                }, no.prototype.ot = function(t, e, n) {
                    if (this.wt(t), !this.Rt.Et(t)) return t;
                    var r = Gi.It(t),
                        i = this.gt(t);
                    return new Io(this.key, r, i, {
                        At: !0
                    })
                }, no.prototype.Pt = function(t) {
                    return null
                }, no.prototype.isEqual = function(t) {
                    return t instanceof no && this.key.isEqual(t.key) && this.Vt.isEqual(t.Vt) && this.Rt.isEqual(t.Rt)
                }, no.prototype.gt = function(t) {
                    var e;
                    return e = t instanceof Io ? t.data() : Hi.empty(), this.pt(e)
                }, no.prototype.pt = function(t) {
                    var n = this,
                        r = new Xi(t);
                    return this.Vt.fields.forEach(function(t) {
                        if (!t.B()) {
                            var e = n.data.field(t);
                            null !== e ? r.set(t, e) : r.delete(t)
                        }
                    }), r.yt()
                }, no),
                Qi = (n(eo, Mi = Gi), eo.prototype.at = function(t, e) {
                    if (this.wt(t), $s(null != e.transformResults), !this.Rt.Et(t)) return new Ao(this.key, e.version);
                    var n = this.bt(t),
                        r = this.vt(t, e.transformResults),
                        i = e.version,
                        o = this.St(n.data(), r);
                    return new Io(this.key, i, o, {
                        hasCommittedMutations: !0
                    })
                }, eo.prototype.ot = function(t, e, n) {
                    if (this.wt(t), !this.Rt.Et(t)) return t;
                    var r = this.bt(t),
                        i = this.Dt(n, t, e),
                        o = this.St(r.data(), i);
                    return new Io(this.key, r.version, o, {
                        At: !0
                    })
                }, eo.prototype.Pt = function(t) {
                    for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
                        var i = r[n],
                            o = t instanceof Io ? t.field(i.field) : void 0,
                            s = i.transform.ut(o || null);
                        null != s && (e = null == e ? (new Xi).set(i.field, s) : e.set(i.field, s))
                    }
                    return e ? e.yt() : null
                }, eo.prototype.isEqual = function(t) {
                    return t instanceof eo && this.key.isEqual(t.key) && ru(this.fieldTransforms, t.fieldTransforms, function(t, e) {
                        return t.isEqual(e)
                    }) && this.Rt.isEqual(t.Rt)
                }, eo.prototype.bt = function(t) {
                    return t
                }, eo.prototype.vt = function(t, e) {
                    var n = [];
                    $s(this.fieldTransforms.length === e.length);
                    for (var r = 0; r < e.length; r++) {
                        var i = this.fieldTransforms[r],
                            o = i.transform,
                            s = null;
                        t instanceof Io && (s = t.field(i.field)), n.push(o.at(s, e[r]))
                    }
                    return n
                }, eo.prototype.Dt = function(t, e, n) {
                    for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
                        var s = o[i],
                            u = s.transform,
                            a = null;
                        e instanceof Io && (a = e.field(s.field)), null === a && n instanceof Io && (a = n.field(s.field)), r.push(u.ot(a, t))
                    }
                    return r
                }, eo.prototype.St = function(t, e) {
                    for (var n = new Xi(t), r = 0; r < this.fieldTransforms.length; r++) {
                        var i = this.fieldTransforms[r].field;
                        n.set(i, e[r])
                    }
                    return n.yt()
                }, eo),
                Ki = (n(to, Ci = Gi), to.prototype.at = function(t, e) {
                    return this.wt(t), new No(this.key, e.version, {
                        hasCommittedMutations: !0
                    })
                }, to.prototype.ot = function(t, e, n) {
                    return this.wt(t), this.Rt.Et(t) ? new No(this.key, Vr.min()) : t
                }, to.prototype.Pt = function(t) {
                    return null
                }, to.prototype.isEqual = function(t) {
                    return t instanceof to && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt)
                }, to),
                Yi = (n(Zi, Vi = Gi), Zi.prototype.at = function(t, e) {
                    Js()
                }, Zi.prototype.ot = function(t, e, n) {
                    Js()
                }, Zi.prototype.Pt = function(t) {
                    Js()
                }, Zi.prototype.isEqual = function(t) {
                    return t instanceof Zi && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt)
                }, Zi),
                Hi = ($i.empty = function() {
                    return new $i({
                        mapValue: {}
                    })
                }, $i.prototype.field = function(t) {
                    if (t.B()) return this.proto;
                    for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
                        if (!e.mapValue.fields) return null;
                        if (!Ni(e = e.mapValue.fields[t.get(n)])) return null
                    }
                    return (e = (e.mapValue.fields || {})[t.O()]) || null
                }, $i.prototype.isEqual = function(t) {
                    return fi(this.proto, t.proto)
                }, $i),
                Xi = (Ji.prototype.set = function(t, e) {
                    return this.Nt(t, e), this
                }, Ji.prototype.delete = function(t) {
                    return this.Nt(t, null), this
                }, Ji.prototype.Nt = function(t, e) {
                    for (var n = this.Ft, r = 0; r < t.length - 1; ++r) {
                        var i = t.get(r),
                            o = n.get(i);
                        o instanceof Map || (o = o && 10 === ci(o) ? new Map(Object.entries(o.mapValue.fields || {})) : new Map, n.set(i, o)), n = o
                    }
                    n.set(t.O(), e)
                }, Ji.prototype.yt = function() {
                    var t = this.$t(Hr.G, this.Ft);
                    return null != t ? new Hi(t) : this.Ct
                }, Ji.prototype.$t = function(r, t) {
                    var i = this,
                        o = !1,
                        e = this.Ct.field(r),
                        s = Ni(e) ? Object.assign({}, e.mapValue.fields) : {};
                    return t.forEach(function(t, e) {
                        if (t instanceof Map) {
                            var n = i.$t(r.child(e), t);
                            null != n && (s[e] = n, o = !0)
                        } else null !== t ? (s[e] = t, o = !0) : s.hasOwnProperty(e) && (delete s[e], o = !0)
                    }), o ? {
                        mapValue: {
                            fields: s
                        }
                    } : null
                }, Ji);

            function Ji(t) {
                void 0 === t && (t = Hi.empty()), this.Ct = t, this.Ft = new Map
            }

            function $i(t) {
                this.proto = t
            }

            function Zi(t, e) {
                var n = this;
                return (n = Vi.call(this) || this).key = t, n.Rt = e, n.type = 4, n
            }

            function to(t, e) {
                var n = this;
                return (n = Ci.call(this) || this).key = t, n.Rt = e, n.type = 3, n
            }

            function eo(t, e) {
                var n = this;
                return (n = Mi.call(this) || this).key = t, n.fieldTransforms = e, n.type = 2, n.Rt = Bi.exists(!0), n
            }

            function no(t, e, n, r) {
                var i = this;
                return (i = Ui.call(this) || this).key = t, i.data = e, i.Vt = n, i.Rt = r, i.type = 1, i
            }

            function ro(t, e, n) {
                var r = this;
                return (r = ji.call(this) || this).key = t, r.value = e, r.Rt = n, r.type = 0, r
            }

            function io() {}

            function oo(t, e) {
                this.updateTime = t, this.exists = e
            }

            function so(t, e) {
                this.field = t, this.transform = e
            }

            function uo(t) {
                (this.fields = t).sort(Hr.N)
            }

            function ao(t) {
                var u = [];
                return ti(t.fields || {}, function(t, e) {
                    var n = new Hr([t]);
                    if (Ni(e)) {
                        var r = ao(e.mapValue).fields;
                        if (0 === r.length) u.push(n);
                        else
                            for (var i = 0, o = r; i < o.length; i++) {
                                var s = o[i];
                                u.push(n.child(s))
                            }
                    } else u.push(n)
                }), new Fi(u)
            }

            function ho(t, e) {
                this.key = t, this.version = e
            }

            function co(t) {
                this.count = t
            }
            var fo, lo, po, yo, vo, go, mo, wo, bo, Eo, To, Io = (n(Xo, To = ho), Xo.prototype.field = function(t) {
                    return this.kt.field(t)
                }, Xo.prototype.data = function() {
                    return this.kt
                }, Xo.prototype.Mt = function() {
                    return this.kt.proto
                }, Xo.prototype.isEqual = function(t) {
                    return t instanceof Xo && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.At === t.At && this.hasCommittedMutations === t.hasCommittedMutations && this.kt.isEqual(t.kt)
                }, Xo.prototype.toString = function() {
                    return "Document(" + this.key + ", " + this.version + ", " + this.kt.toString() + ", {hasLocalMutations: " + this.At + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
                }, Object.defineProperty(Xo.prototype, "hasPendingWrites", {
                    get: function() {
                        return this.At || this.hasCommittedMutations
                    },
                    enumerable: !0,
                    configurable: !0
                }), Xo),
                No = (n(Ho, Eo = ho), Ho.prototype.toString = function() {
                    return "NoDocument(" + this.key + ", " + this.version + ")"
                }, Object.defineProperty(Ho.prototype, "hasPendingWrites", {
                    get: function() {
                        return this.hasCommittedMutations
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ho.prototype.isEqual = function(t) {
                    return t instanceof Ho && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                }, Ho),
                Ao = (n(Yo, bo = ho), Yo.prototype.toString = function() {
                    return "UnknownDocument(" + this.key + ", " + this.version + ")"
                }, Object.defineProperty(Yo.prototype, "hasPendingWrites", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Yo.prototype.isEqual = function(t) {
                    return t instanceof Yo && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                }, Yo),
                _o = (Ko.prototype.canonicalId = function() {
                    if (null === this.xt) {
                        var t = this.path.j();
                        null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", t += this.filters.map(function(t) {
                            return t.canonicalId()
                        }).join(","), t += "|ob:", t += this.orderBy.map(function(t) {
                            return t.canonicalId()
                        }).join(","), ii(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.xt = t
                    }
                    return this.xt
                }, Ko.prototype.toString = function() {
                    var t = this.path.j();
                    return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"), ii(this.limit) || (t += ", limit: " + this.limit), 0 < this.orderBy.length && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), "Target(" + t + ")"
                }, Ko.prototype.isEqual = function(t) {
                    if (this.limit !== t.limit) return !1;
                    if (this.orderBy.length !== t.orderBy.length) return !1;
                    for (var e = 0; e < this.orderBy.length; e++)
                        if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                    if (this.filters.length !== t.filters.length) return !1;
                    for (var n = 0; n < this.filters.length; n++)
                        if (!this.filters[n].isEqual(t.filters[n])) return !1;
                    return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)
                }, Ko.prototype.Lt = function() {
                    return Jr.et(this.path) && null === this.collectionGroup && 0 === this.filters.length
                }, Ko),
                So = (Qo.Wt = function(t) {
                    return new Qo(t)
                }, Object.defineProperty(Qo.prototype, "orderBy", {
                    get: function() {
                        if (null === this.qt) {
                            this.qt = [];
                            var t = this.jt(),
                                e = this.Kt();
                            if (null !== t && null === e) t.Y() || this.qt.push(new Vo(t)), this.qt.push(new Vo(Hr.J(), "asc"));
                            else {
                                for (var n = !1, r = 0, i = this.Ot; r < i.length; r++) {
                                    var o = i[r];
                                    this.qt.push(o), o.field.Y() && (n = !0)
                                }
                                if (!n) {
                                    var s = 0 < this.Ot.length ? this.Ot[this.Ot.length - 1].dir : "asc";
                                    this.qt.push(new Vo(Hr.J(), s))
                                }
                            }
                        }
                        return this.qt
                    },
                    enumerable: !0,
                    configurable: !0
                }), Qo.prototype.Gt = function(t) {
                    var e = this.filters.concat([t]);
                    return new Qo(this.path, this.collectionGroup, this.Ot.slice(), e, this.limit, this.Bt, this.startAt, this.endAt)
                }, Qo.prototype.zt = function(t) {
                    var e = this.Ot.concat([t]);
                    return new Qo(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.Bt, this.startAt, this.endAt)
                }, Qo.prototype.Ht = function(t) {
                    return new Qo(this.path, this.collectionGroup, this.Ot.slice(), this.filters.slice(), t, "F", this.startAt, this.endAt)
                }, Qo.prototype.Yt = function(t) {
                    return new Qo(this.path, this.collectionGroup, this.Ot.slice(), this.filters.slice(), t, "L", this.startAt, this.endAt)
                }, Qo.prototype.Jt = function(t) {
                    return new Qo(this.path, this.collectionGroup, this.Ot.slice(), this.filters.slice(), this.limit, this.Bt, t, this.endAt)
                }, Qo.prototype.Xt = function(t) {
                    return new Qo(this.path, this.collectionGroup, this.Ot.slice(), this.filters.slice(), this.limit, this.Bt, this.startAt, t)
                }, Qo.prototype.Zt = function(t) {
                    return new Qo(t, null, this.Ot.slice(), this.filters.slice(), this.limit, this.Bt, this.startAt, this.endAt)
                }, Qo.prototype.te = function() {
                    return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Ot.length || 1 === this.Ot.length && this.Ot[0].field.Y())
                }, Qo.prototype.canonicalId = function() {
                    return this.ee().canonicalId() + "|lt:" + this.Bt
                }, Qo.prototype.toString = function() {
                    return "Query(target=" + this.ee().toString() + "; limitType=" + this.Bt + ")"
                }, Qo.prototype.isEqual = function(t) {
                    return this.ee().isEqual(t.ee()) && this.Bt === t.Bt
                }, Qo.prototype.se = function(t, e) {
                    for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                        var o = i[r],
                            s = o.compare(t, e);
                        if (0 !== s) return s;
                        n = n || o.field.Y()
                    }
                    return 0
                }, Qo.prototype.matches = function(t) {
                    return this.ie(t) && this.ne(t) && this.re(t) && this.he(t)
                }, Qo.prototype.oe = function() {
                    return !ii(this.limit) && "F" === this.Bt
                }, Qo.prototype.ae = function() {
                    return !ii(this.limit) && "L" === this.Bt
                }, Qo.prototype.Kt = function() {
                    return 0 < this.Ot.length ? this.Ot[0].field : null
                }, Qo.prototype.jt = function() {
                    for (var t = 0, e = this.filters; t < e.length; t++) {
                        var n = e[t];
                        if (n instanceof Ro && n.ue()) return n.field
                    }
                    return null
                }, Qo.prototype.ce = function(t) {
                    for (var e = 0, n = this.filters; e < n.length; e++) {
                        var r = n[e];
                        if (r instanceof Ro && 0 <= t.indexOf(r.op)) return r.op
                    }
                    return null
                }, Qo.prototype.Lt = function() {
                    return this.ee().Lt()
                }, Qo.prototype._e = function() {
                    return null !== this.collectionGroup
                }, Qo.prototype.ee = function() {
                    if (!this.Ut)
                        if ("F" === this.Bt) this.Ut = new _o(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);
                        else {
                            for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                                var r = n[e],
                                    i = "desc" === r.dir ? "asc" : "desc";
                                t.push(new Vo(r.field, i))
                            }
                            var o = this.endAt ? new Lo(this.endAt.position, !this.endAt.before) : null,
                                s = this.startAt ? new Lo(this.startAt.position, !this.startAt.before) : null;
                            this.Ut = new _o(this.path, this.collectionGroup, t, this.filters, this.limit, o, s)
                        } return this.Ut
                }, Qo.prototype.ie = function(t) {
                    var e = t.key.path;
                    return null !== this.collectionGroup ? t.key.tt(this.collectionGroup) && this.path.q(e) : Jr.et(this.path) ? this.path.isEqual(e) : this.path.U(e)
                }, Qo.prototype.ne = function(t) {
                    for (var e = 0, n = this.Ot; e < n.length; e++) {
                        var r = n[e];
                        if (!r.field.Y() && null === t.field(r.field)) return !1
                    }
                    return !0
                }, Qo.prototype.re = function(t) {
                    for (var e = 0, n = this.filters; e < n.length; e++)
                        if (!n[e].matches(t)) return !1;
                    return !0
                }, Qo.prototype.he = function(t) {
                    return !(this.startAt && !this.startAt.le(this.orderBy, t) || this.endAt && this.endAt.le(this.orderBy, t))
                }, Qo.prototype.Qt = function(t) {}, Qo),
                Ro = (n(Wo, wo = function() {}), Wo.create = function(t, e, n) {
                    if (t.Y()) return "in" === e ? new Po(t, n) : new Do(t, e, n);
                    if (Ti(n)) {
                        if ("==" !== e) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
                        return new Wo(t, e, n)
                    }
                    if (Ii(n)) {
                        if ("==" !== e) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
                        return new Wo(t, e, n)
                    }
                    return "array-contains" === e ? new xo(t, n) : "in" === e ? new Oo(t, n) : "array-contains-any" === e ? new ko(t, n) : new Wo(t, e, n)
                }, Wo.prototype.matches = function(t) {
                    var e = t.field(this.field);
                    return null !== e && ci(this.value) === ci(e) && this.de(pi(e, this.value))
                }, Wo.prototype.de = function(t) {
                    switch (this.op) {
                        case "<":
                            return t < 0;
                        case "<=":
                            return t <= 0;
                        case "==":
                            return 0 === t;
                        case ">":
                            return 0 < t;
                        case ">=":
                            return 0 <= t;
                        default:
                            return Js()
                    }
                }, Wo.prototype.ue = function() {
                    return 0 <= ["<", "<=", ">", ">="].indexOf(this.op)
                }, Wo.prototype.canonicalId = function() {
                    return this.field.j() + this.op.toString() + yi(this.value)
                }, Wo.prototype.isEqual = function(t) {
                    return t instanceof Wo && this.op === t.op && this.field.isEqual(t.field) && fi(this.value, t.value)
                }, Wo.prototype.toString = function() {
                    return this.field.j() + " " + this.op + " " + yi(this.value)
                }, Wo),
                Do = (n(zo, mo = Ro), zo.prototype.matches = function(t) {
                    var e = Jr.N(t.key, this.key);
                    return this.de(e)
                }, zo),
                Po = (n(Go, go = Ro), Go.prototype.matches = function(e) {
                    return this.keys.some(function(t) {
                        return t.isEqual(e.key)
                    })
                }, Go),
                xo = (n(Bo, vo = Ro), Bo.prototype.matches = function(t) {
                    var e = t.field(this.field);
                    return Ei(e) && li(e.arrayValue, this.value)
                }, Bo),
                Oo = (n(qo, yo = Ro), qo.prototype.matches = function(t) {
                    var e = t.field(this.field);
                    return null !== e && li(this.value.arrayValue, e)
                }, qo),
                ko = (n(Fo, po = Ro), Fo.prototype.matches = function(t) {
                    var e = this,
                        n = t.field(this.field);
                    return !(!Ei(n) || !n.arrayValue.values) && n.arrayValue.values.some(function(t) {
                        return li(e.value.arrayValue, t)
                    })
                }, Fo),
                Lo = (jo.prototype.canonicalId = function() {
                    return (this.before ? "b" : "a") + ":" + this.position.map(function(t) {
                        return yi(t)
                    }).join(",")
                }, jo.prototype.le = function(t, e) {
                    for (var n = 0, r = 0; r < this.position.length; r++) {
                        var i = t[r],
                            o = this.position[r];
                        if (n = i.field.Y() ? Jr.N(Jr.Z(o.referenceValue), e.key) : pi(o, e.field(i.field)), "desc" === i.dir && (n *= -1), 0 !== n) break
                    }
                    return this.before ? n <= 0 : n < 0
                }, jo.prototype.isEqual = function(t) {
                    if (null === t) return !1;
                    if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                    for (var e = 0; e < this.position.length; e++)
                        if (!fi(this.position[e], t.position[e])) return !1;
                    return !0
                }, jo),
                Vo = (Uo.prototype.compare = function(t, e) {
                    var n, r, i, o, s = this.fe ? Jr.N(t.key, e.key) : (n = this.field, r = e, i = t.field(n), o = r.field(n), null !== i && null !== o ? pi(i, o) : Js());
                    switch (this.dir) {
                        case "asc":
                            return s;
                        case "desc":
                            return -1 * s;
                        default:
                            return Js()
                    }
                }, Uo.prototype.canonicalId = function() {
                    return this.field.j() + this.dir.toString()
                }, Uo.prototype.toString = function() {
                    return this.field.j() + " (" + this.dir + ")"
                }, Uo.prototype.isEqual = function(t) {
                    return this.dir === t.dir && this.field.isEqual(t.field)
                }, Uo),
                Co = (Mo.prototype.we = function(t) {
                    return new Mo(this.target, this.targetId, this.Te, t, this.Ee, this.lastLimboFreeSnapshotVersion, this.resumeToken)
                }, Mo.prototype.Ie = function(t, e) {
                    return new Mo(this.target, this.targetId, this.Te, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t)
                }, Mo.prototype.Re = function(t) {
                    return new Mo(this.target, this.targetId, this.Te, this.sequenceNumber, this.Ee, t, this.resumeToken)
                }, Mo);

            function Mo(t, e, n, r, i, o, s) {
                void 0 === i && (i = Vr.min()), void 0 === o && (o = Vr.min()), void 0 === s && (s = ni.ht), this.target = t, this.targetId = e, this.Te = n, this.sequenceNumber = r, this.Ee = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s
            }

            function Uo(t, e) {
                this.field = t, void 0 === e && (e = "asc"), this.dir = e, this.fe = t.Y()
            }

            function jo(t, e) {
                this.position = t, this.before = e
            }

            function Fo(t, e) {
                return po.call(this, t, "array-contains-any", e) || this
            }

            function qo(t, e) {
                return yo.call(this, t, "in", e) || this
            }

            function Bo(t, e) {
                return vo.call(this, t, "array-contains", e) || this
            }

            function Go(t, e) {
                var n = this;
                return (n = go.call(this, t, "in", e) || this).keys = (e.arrayValue.values || []).map(function(t) {
                    return Jr.Z(t.referenceValue)
                }), n
            }

            function zo(t, e, n) {
                var r = this;
                return (r = mo.call(this, t, e, n) || this).key = Jr.Z(n.referenceValue), r
            }

            function Wo(t, e, n) {
                var r = this;
                return (r = wo.call(this) || this).field = t, r.op = e, r.value = n, r
            }

            function Qo(t, e, n, r, i, o, s, u) {
                void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.Ot = n, this.filters = r, this.limit = i, this.Bt = o, this.startAt = s, this.endAt = u, this.qt = null, this.Ut = null, this.startAt && this.Qt(this.startAt), this.endAt && this.Qt(this.endAt)
            }

            function Ko(t, e, n, r, i, o, s) {
                void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.xt = null
            }

            function Yo() {
                return null !== bo && bo.apply(this, arguments) || this
            }

            function Ho(t, e, n) {
                var r = this;
                return (r = Eo.call(this, t, e) || this).hasCommittedMutations = !(!n || !n.hasCommittedMutations), r
            }

            function Xo(t, e, n, r) {
                var i = this;
                return (i = To.call(this, t, e) || this).kt = n, i.At = !!r.At, i.hasCommittedMutations = !!r.hasCommittedMutations, i
            }

            function Jo(t) {
                switch (t) {
                    case Rr.OK:
                        return Js();
                    case Rr.CANCELLED:
                    case Rr.UNKNOWN:
                    case Rr.DEADLINE_EXCEEDED:
                    case Rr.RESOURCE_EXHAUSTED:
                    case Rr.INTERNAL:
                    case Rr.UNAVAILABLE:
                    case Rr.UNAUTHENTICATED:
                        return;
                    case Rr.INVALID_ARGUMENT:
                    case Rr.NOT_FOUND:
                    case Rr.ALREADY_EXISTS:
                    case Rr.PERMISSION_DENIED:
                    case Rr.FAILED_PRECONDITION:
                    case Rr.ABORTED:
                    case Rr.OUT_OF_RANGE:
                    case Rr.UNIMPLEMENTED:
                    case Rr.DATA_LOSS:
                        return 1;
                    default:
                        return Js()
                }
            }

            function $o(t) {
                if (void 0 === t) return Hs("GRPC error has no .code"), Rr.UNKNOWN;
                switch (t) {
                    case fo.OK:
                        return Rr.OK;
                    case fo.CANCELLED:
                        return Rr.CANCELLED;
                    case fo.UNKNOWN:
                        return Rr.UNKNOWN;
                    case fo.DEADLINE_EXCEEDED:
                        return Rr.DEADLINE_EXCEEDED;
                    case fo.RESOURCE_EXHAUSTED:
                        return Rr.RESOURCE_EXHAUSTED;
                    case fo.INTERNAL:
                        return Rr.INTERNAL;
                    case fo.UNAVAILABLE:
                        return Rr.UNAVAILABLE;
                    case fo.UNAUTHENTICATED:
                        return Rr.UNAUTHENTICATED;
                    case fo.INVALID_ARGUMENT:
                        return Rr.INVALID_ARGUMENT;
                    case fo.NOT_FOUND:
                        return Rr.NOT_FOUND;
                    case fo.ALREADY_EXISTS:
                        return Rr.ALREADY_EXISTS;
                    case fo.PERMISSION_DENIED:
                        return Rr.PERMISSION_DENIED;
                    case fo.FAILED_PRECONDITION:
                        return Rr.FAILED_PRECONDITION;
                    case fo.ABORTED:
                        return Rr.ABORTED;
                    case fo.OUT_OF_RANGE:
                        return Rr.OUT_OF_RANGE;
                    case fo.UNIMPLEMENTED:
                        return Rr.UNIMPLEMENTED;
                    case fo.DATA_LOSS:
                        return Rr.DATA_LOSS;
                    default:
                        return Js()
                }
            }(lo = fo = fo || {})[lo.OK = 0] = "OK", lo[lo.CANCELLED = 1] = "CANCELLED", lo[lo.UNKNOWN = 2] = "UNKNOWN", lo[lo.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", lo[lo.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", lo[lo.NOT_FOUND = 5] = "NOT_FOUND", lo[lo.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", lo[lo.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", lo[lo.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", lo[lo.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", lo[lo.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", lo[lo.ABORTED = 10] = "ABORTED", lo[lo.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", lo[lo.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", lo[lo.INTERNAL = 13] = "INTERNAL", lo[lo.UNAVAILABLE = 14] = "UNAVAILABLE", lo[lo.DATA_LOSS = 15] = "DATA_LOSS";
            var Zo = (is.prototype.Ae = function(t, e) {
                    return new is(this.N, this.root.Ae(t, e, this.N).me(null, null, es.Pe, null, null))
                }, is.prototype.remove = function(t) {
                    return new is(this.N, this.root.remove(t, this.N).me(null, null, es.Pe, null, null))
                }, is.prototype.get = function(t) {
                    for (var e = this.root; !e.B();) {
                        var n = this.N(t, e.key);
                        if (0 === n) return e.value;
                        n < 0 ? e = e.left : 0 < n && (e = e.right)
                    }
                    return null
                }, is.prototype.indexOf = function(t) {
                    for (var e = 0, n = this.root; !n.B();) {
                        var r = this.N(t, n.key);
                        if (0 === r) return e + n.left.size;
                        n = r < 0 ? n.left : (e += n.left.size + 1, n.right)
                    }
                    return -1
                }, is.prototype.B = function() {
                    return this.root.B()
                }, Object.defineProperty(is.prototype, "size", {
                    get: function() {
                        return this.root.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), is.prototype.Ve = function() {
                    return this.root.Ve()
                }, is.prototype.ge = function() {
                    return this.root.ge()
                }, is.prototype.pe = function(t) {
                    return this.root.pe(t)
                }, is.prototype.forEach = function(n) {
                    this.pe(function(t, e) {
                        return n(t, e), !1
                    })
                }, is.prototype.toString = function() {
                    var n = [];
                    return this.pe(function(t, e) {
                        return n.push(t + ":" + e), !1
                    }), "{" + n.join(", ") + "}"
                }, is.prototype.ye = function(t) {
                    return this.root.ye(t)
                }, is.prototype.be = function() {
                    return new ts(this.root, null, this.N, !1)
                }, is.prototype.ve = function(t) {
                    return new ts(this.root, t, this.N, !1)
                }, is.prototype.Se = function() {
                    return new ts(this.root, null, this.N, !0)
                }, is.prototype.De = function(t) {
                    return new ts(this.root, t, this.N, !0)
                }, is),
                ts = (rs.prototype.Ne = function() {
                    var t = this.Fe.pop(),
                        e = {
                            key: t.key,
                            value: t.value
                        };
                    if (this.Ce)
                        for (t = t.left; !t.B();) this.Fe.push(t), t = t.right;
                    else
                        for (t = t.right; !t.B();) this.Fe.push(t), t = t.left;
                    return e
                }, rs.prototype.$e = function() {
                    return 0 < this.Fe.length
                }, rs.prototype.ke = function() {
                    if (0 === this.Fe.length) return null;
                    var t = this.Fe[this.Fe.length - 1];
                    return {
                        key: t.key,
                        value: t.value
                    }
                }, rs),
                es = (ns.prototype.me = function(t, e, n, r, i) {
                    return new ns(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
                }, ns.prototype.B = function() {
                    return !1
                }, ns.prototype.pe = function(t) {
                    return this.left.pe(t) || t(this.key, this.value) || this.right.pe(t)
                }, ns.prototype.ye = function(t) {
                    return this.right.ye(t) || t(this.key, this.value) || this.left.ye(t)
                }, ns.prototype.min = function() {
                    return this.left.B() ? this : this.left.min()
                }, ns.prototype.Ve = function() {
                    return this.min().key
                }, ns.prototype.ge = function() {
                    return this.right.B() ? this.key : this.right.ge()
                }, ns.prototype.Ae = function(t, e, n) {
                    var r = this,
                        i = n(t, r.key);
                    return (r = i < 0 ? r.me(null, null, null, r.left.Ae(t, e, n), null) : 0 === i ? r.me(null, e, null, null, null) : r.me(null, null, null, null, r.right.Ae(t, e, n))).Me()
                }, ns.prototype.xe = function() {
                    if (this.left.B()) return ns.EMPTY;
                    var t = this;
                    return t.left.Le() || t.left.left.Le() || (t = t.Oe()), (t = t.me(null, null, null, t.left.xe(), null)).Me()
                }, ns.prototype.remove = function(t, e) {
                    var n, r = this;
                    if (e(t, r.key) < 0) r.left.B() || r.left.Le() || r.left.left.Le() || (r = r.Oe()), r = r.me(null, null, null, r.left.remove(t, e), null);
                    else {
                        if (r.left.Le() && (r = r.Be()), r.right.B() || r.right.Le() || r.right.left.Le() || (r = r.qe()), 0 === e(t, r.key)) {
                            if (r.right.B()) return ns.EMPTY;
                            n = r.right.min(), r = r.me(n.key, n.value, null, null, r.right.xe())
                        }
                        r = r.me(null, null, null, null, r.right.remove(t, e))
                    }
                    return r.Me()
                }, ns.prototype.Le = function() {
                    return this.color
                }, ns.prototype.Me = function() {
                    var t = this;
                    return t.right.Le() && !t.left.Le() && (t = t.Ue()), t.left.Le() && t.left.left.Le() && (t = t.Be()), t.left.Le() && t.right.Le() && (t = t.Qe()), t
                }, ns.prototype.Oe = function() {
                    var t = this.Qe();
                    return t.right.left.Le() && (t = (t = (t = t.me(null, null, null, null, t.right.Be())).Ue()).Qe()), t
                }, ns.prototype.qe = function() {
                    var t = this.Qe();
                    return t.left.left.Le() && (t = (t = t.Be()).Qe()), t
                }, ns.prototype.Ue = function() {
                    var t = this.me(null, null, ns.RED, null, this.right.left);
                    return this.right.me(null, null, this.color, t, null)
                }, ns.prototype.Be = function() {
                    var t = this.me(null, null, ns.RED, this.left.right, null);
                    return this.left.me(null, null, this.color, null, t)
                }, ns.prototype.Qe = function() {
                    var t = this.left.me(null, null, !this.left.color, null, null),
                        e = this.right.me(null, null, !this.right.color, null, null);
                    return this.me(null, null, !this.color, t, e)
                }, ns.prototype.We = function() {
                    var t = this.je();
                    return Math.pow(2, t) <= this.size + 1
                }, ns.prototype.je = function() {
                    if (this.Le() && this.left.Le()) throw Js();
                    if (this.right.Le()) throw Js();
                    var t = this.left.je();
                    if (t !== this.right.je()) throw Js();
                    return t + (this.Le() ? 0 : 1)
                }, ns);

            function ns(t, e, n, r, i) {
                this.key = t, this.value = e, this.color = null != n ? n : ns.RED, this.left = null != r ? r : ns.EMPTY, this.right = null != i ? i : ns.EMPTY, this.size = this.left.size + 1 + this.right.size
            }

            function rs(t, e, n, r) {
                this.Ce = r, this.Fe = [];
                for (var i = 1; !t.B();)
                    if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.Ce ? t.left : t.right;
                    else {
                        if (0 === i) {
                            this.Fe.push(t);
                            break
                        }
                        this.Fe.push(t), t = this.Ce ? t.right : t.left
                    }
            }

            function is(t, e) {
                this.N = t, this.root = e || es.EMPTY
            }

            function os() {
                this.size = 0
            }
            es.EMPTY = null, es.RED = !0, es.Pe = !1, es.EMPTY = (Object.defineProperty(os.prototype, "key", {
                get: function() {
                    throw Js()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(os.prototype, "value", {
                get: function() {
                    throw Js()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(os.prototype, "color", {
                get: function() {
                    throw Js()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(os.prototype, "left", {
                get: function() {
                    throw Js()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(os.prototype, "right", {
                get: function() {
                    throw Js()
                },
                enumerable: !0,
                configurable: !0
            }), os.prototype.me = function(t, e, n, r, i) {
                return this
            }, os.prototype.Ae = function(t, e, n) {
                return new es(t, e)
            }, os.prototype.remove = function(t, e) {
                return this
            }, os.prototype.B = function() {
                return !0
            }, os.prototype.pe = function(t) {
                return !1
            }, os.prototype.ye = function(t) {
                return !1
            }, os.prototype.Ve = function() {
                return null
            }, os.prototype.ge = function() {
                return null
            }, os.prototype.Le = function() {
                return !1
            }, os.prototype.We = function() {
                return !0
            }, os.prototype.je = function() {
                return 0
            }, new os);
            var ss = (cs.prototype.has = function(t) {
                    return null !== this.data.get(t)
                }, cs.prototype.first = function() {
                    return this.data.Ve()
                }, cs.prototype.last = function() {
                    return this.data.ge()
                }, Object.defineProperty(cs.prototype, "size", {
                    get: function() {
                        return this.data.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), cs.prototype.indexOf = function(t) {
                    return this.data.indexOf(t)
                }, cs.prototype.forEach = function(n) {
                    this.data.pe(function(t, e) {
                        return n(t), !1
                    })
                }, cs.prototype.Ke = function(t, e) {
                    for (var n = this.data.ve(t[0]); n.$e();) {
                        var r = n.Ne();
                        if (0 <= this.N(r.key, t[1])) return;
                        e(r.key)
                    }
                }, cs.prototype.Ge = function(t, e) {
                    var n;
                    for (n = void 0 !== e ? this.data.ve(e) : this.data.be(); n.$e();)
                        if (!t(n.Ne().key)) return
                }, cs.prototype.ze = function(t) {
                    var e = this.data.ve(t);
                    return e.$e() ? e.Ne().key : null
                }, cs.prototype.be = function() {
                    return new us(this.data.be())
                }, cs.prototype.ve = function(t) {
                    return new us(this.data.ve(t))
                }, cs.prototype.add = function(t) {
                    return this.me(this.data.remove(t).Ae(t, !0))
                }, cs.prototype.delete = function(t) {
                    return this.has(t) ? this.me(this.data.remove(t)) : this
                }, cs.prototype.B = function() {
                    return this.data.B()
                }, cs.prototype.He = function(t) {
                    var e = this;
                    return e.size < t.size && (e = t, t = this), t.forEach(function(t) {
                        e = e.add(t)
                    }), e
                }, cs.prototype.isEqual = function(t) {
                    if (!(t instanceof cs)) return !1;
                    if (this.size !== t.size) return !1;
                    for (var e = this.data.be(), n = t.data.be(); e.$e();) {
                        var r = e.Ne().key,
                            i = n.Ne().key;
                        if (0 !== this.N(r, i)) return !1
                    }
                    return !0
                }, cs.prototype.W = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), e
                }, cs.prototype.toString = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        return e.push(t)
                    }), "SortedSet(" + e.toString() + ")"
                }, cs.prototype.me = function(t) {
                    var e = new cs(this.N);
                    return e.data = t, e
                }, cs),
                us = (hs.prototype.Ne = function() {
                    return this.Ye.Ne().key
                }, hs.prototype.$e = function() {
                    return this.Ye.$e()
                }, hs),
                as = new Zo(Jr.N);

            function hs(t) {
                this.Ye = t
            }

            function cs(t) {
                this.N = t, this.data = new Zo(this.N)
            }

            function fs() {
                return as
            }

            function ls() {
                return fs()
            }
            var ps = new Zo(Jr.N);

            function ds() {
                return ps
            }
            var ys = new Zo(Jr.N),
                vs = new ss(Jr.N);

            function gs() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = vs, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var ms = new ss(nu);

            function ws() {
                return ms
            }

            function bs(t, e, n, r) {
                this.Is = t, this.removedTargetIds = e, this.key = n, this.Rs = r
            }

            function Es(t, e) {
                this.targetId = t, this.As = e
            }

            function Ts(t, e, n, r) {
                void 0 === n && (n = ni.ht), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
            }
            var Is = (Cs.Ze = function(t) {
                    return new Cs(t.N)
                }, Cs.prototype.has = function(t) {
                    return null != this.Je.get(t)
                }, Cs.prototype.get = function(t) {
                    return this.Je.get(t)
                }, Cs.prototype.first = function() {
                    return this.Xe.Ve()
                }, Cs.prototype.last = function() {
                    return this.Xe.ge()
                }, Cs.prototype.B = function() {
                    return this.Xe.B()
                }, Cs.prototype.indexOf = function(t) {
                    var e = this.Je.get(t);
                    return e ? this.Xe.indexOf(e) : -1
                }, Object.defineProperty(Cs.prototype, "size", {
                    get: function() {
                        return this.Xe.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), Cs.prototype.forEach = function(n) {
                    this.Xe.pe(function(t, e) {
                        return n(t), !1
                    })
                }, Cs.prototype.add = function(t) {
                    var e = this.delete(t.key);
                    return e.me(e.Je.Ae(t.key, t), e.Xe.Ae(t, null))
                }, Cs.prototype.delete = function(t) {
                    var e = this.get(t);
                    return e ? this.me(this.Je.remove(t), this.Xe.remove(e)) : this
                }, Cs.prototype.isEqual = function(t) {
                    if (!(t instanceof Cs)) return !1;
                    if (this.size !== t.size) return !1;
                    for (var e = this.Xe.be(), n = t.Xe.be(); e.$e();) {
                        var r = e.Ne().key,
                            i = n.Ne().key;
                        if (!r.isEqual(i)) return !1
                    }
                    return !0
                }, Cs.prototype.toString = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t.toString())
                    }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
                }, Cs.prototype.me = function(t, e) {
                    var n = new Cs;
                    return n.N = this.N, n.Je = t, n.Xe = e, n
                }, Cs),
                Ns = (Vs.prototype.track = function(t) {
                    var e = t.doc.key,
                        n = this.ts.get(e);
                    !n || 0 !== t.type && 3 === n.type ? this.ts = this.ts.Ae(e, t) : 3 === t.type && 1 !== n.type ? this.ts = this.ts.Ae(e, {
                        type: n.type,
                        doc: t.doc
                    }) : 2 === t.type && 2 === n.type ? this.ts = this.ts.Ae(e, {
                        type: 2,
                        doc: t.doc
                    }) : 2 === t.type && 0 === n.type ? this.ts = this.ts.Ae(e, {
                        type: 0,
                        doc: t.doc
                    }) : 1 === t.type && 0 === n.type ? this.ts = this.ts.remove(e) : 1 === t.type && 2 === n.type ? this.ts = this.ts.Ae(e, {
                        type: 1,
                        doc: n.doc
                    }) : 0 === t.type && 1 === n.type ? this.ts = this.ts.Ae(e, {
                        type: 2,
                        doc: t.doc
                    }) : Js()
                }, Vs.prototype.es = function() {
                    var n = [];
                    return this.ts.pe(function(t, e) {
                        n.push(e)
                    }), n
                }, Vs),
                As = (Ls.os = function(t, e, n, r) {
                    var i = [];
                    return e.forEach(function(t) {
                        i.push({
                            type: 0,
                            doc: t
                        })
                    }), new Ls(t, e, Is.Ze(e), i, n, r, !0, !1)
                }, Object.defineProperty(Ls.prototype, "hasPendingWrites", {
                    get: function() {
                        return !this.ns.B()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ls.prototype.isEqual = function(t) {
                    if (!(this.fromCache === t.fromCache && this.rs === t.rs && this.ns.isEqual(t.ns) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.ss.isEqual(t.ss))) return !1;
                    var e = this.docChanges,
                        n = t.docChanges;
                    if (e.length !== n.length) return !1;
                    for (var r = 0; r < e.length; r++)
                        if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                    return !0
                }, Ls),
                _s = (ks.ls = function(t, e) {
                    var n = new Map;
                    return n.set(t, Ss.ds(t, e)), new ks(Vr.min(), n, ws(), fs(), gs())
                }, ks),
                Ss = (Os.ds = function(t, e) {
                    return new Os(ni.ht, e, gs(), gs(), gs())
                }, Os),
                Rs = (Object.defineProperty(xs.prototype, "fs", {
                    get: function() {
                        return this.gs
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(xs.prototype, "resumeToken", {
                    get: function() {
                        return this.Vs
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(xs.prototype, "ys", {
                    get: function() {
                        return 0 !== this.ms
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(xs.prototype, "bs", {
                    get: function() {
                        return this.ps
                    },
                    enumerable: !0,
                    configurable: !0
                }), xs.prototype.vs = function(t) {
                    0 < t.rt() && (this.ps = !0, this.Vs = t)
                }, xs.prototype.Ss = function() {
                    var n = gs(),
                        r = gs(),
                        i = gs();
                    return this.Ps.forEach(function(t, e) {
                        switch (e) {
                            case 0:
                                n = n.add(t);
                                break;
                            case 2:
                                r = r.add(t);
                                break;
                            case 1:
                                i = i.add(t);
                                break;
                            default:
                                Js()
                        }
                    }), new Ss(this.Vs, this.gs, n, r, i)
                }, xs.prototype.Ds = function() {
                    this.ps = !1, this.Ps = Us()
                }, xs.prototype.Cs = function(t, e) {
                    this.ps = !0, this.Ps = this.Ps.Ae(t, e)
                }, xs.prototype.Fs = function(t) {
                    this.ps = !0, this.Ps = this.Ps.remove(t)
                }, xs.prototype.Ns = function() {
                    this.ms += 1
                }, xs.prototype.$s = function() {
                    --this.ms
                }, xs.prototype.ks = function() {
                    this.ps = !0, this.gs = !0
                }, xs),
                Ds = (Ps.prototype.qs = function(t) {
                    for (var e = 0, n = t.Is; e < n.length; e++) {
                        var r = n[e];
                        t.Rs instanceof Io ? this.Us(r, t.Rs) : t.Rs instanceof No && this.Qs(r, t.key, t.Rs)
                    }
                    for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
                        var s = o[i];
                        this.Qs(s, t.key, t.Rs)
                    }
                }, Ps.prototype.Ws = function(n) {
                    var r = this;
                    this.js(n, function(t) {
                        var e = r.Ks(t);
                        switch (n.state) {
                            case 0:
                                r.Gs(t) && e.vs(n.resumeToken);
                                break;
                            case 1:
                                e.$s(), e.ys || e.Ds(), e.vs(n.resumeToken);
                                break;
                            case 2:
                                e.$s(), e.ys || r.removeTarget(t);
                                break;
                            case 3:
                                r.Gs(t) && (e.ks(), e.vs(n.resumeToken));
                                break;
                            case 4:
                                r.Gs(t) && (r.zs(t), e.vs(n.resumeToken));
                                break;
                            default:
                                Js()
                        }
                    })
                }, Ps.prototype.js = function(t, n) {
                    var r = this;
                    0 < t.targetIds.length ? t.targetIds.forEach(n) : this.xs.forEach(function(t, e) {
                        r.Gs(e) && n(e)
                    })
                }, Ps.prototype.Hs = function(t) {
                    var e = t.targetId,
                        n = t.As.count,
                        r = this.Ys(e);
                    if (r) {
                        var i = r.target;
                        if (i.Lt())
                            if (0 === n) {
                                var o = new Jr(i.path);
                                this.Qs(e, o, new No(o, Vr.min()))
                            } else $s(1 === n);
                        else this.Js(e) !== n && (this.zs(e), this.Bs = this.Bs.add(e))
                    }
                }, Ps.prototype.Xs = function(i) {
                    var o = this,
                        s = new Map;
                    this.xs.forEach(function(t, e) {
                        var n = o.Ys(e);
                        if (n) {
                            if (t.fs && n.target.Lt()) {
                                var r = new Jr(n.target.path);
                                null !== o.Ls.get(r) || o.Zs(e, r) || o.Qs(e, r, new No(r, i))
                            }
                            t.bs && (s.set(e, t.Ss()), t.Ds())
                        }
                    });
                    var r = gs();
                    this.Os.forEach(function(t, e) {
                        var n = !0;
                        e.Ge(function(t) {
                            var e = o.Ys(t);
                            return !e || 2 === e.Te || (n = !1)
                        }), n && (r = r.add(t))
                    });
                    var t = new _s(i, s, this.Bs, this.Ls, r);
                    return this.Ls = fs(), this.Os = Ms(), this.Bs = new ss(nu), t
                }, Ps.prototype.Us = function(t, e) {
                    if (this.Gs(t)) {
                        var n = this.Zs(t, e.key) ? 2 : 0;
                        this.Ks(t).Cs(e.key, n), this.Ls = this.Ls.Ae(e.key, e), this.Os = this.Os.Ae(e.key, this.ti(e.key).add(t))
                    }
                }, Ps.prototype.Qs = function(t, e, n) {
                    if (this.Gs(t)) {
                        var r = this.Ks(t);
                        this.Zs(t, e) ? r.Cs(e, 1) : r.Fs(e), this.Os = this.Os.Ae(e, this.ti(e).delete(t)), n && (this.Ls = this.Ls.Ae(e, n))
                    }
                }, Ps.prototype.removeTarget = function(t) {
                    this.xs.delete(t)
                }, Ps.prototype.Js = function(t) {
                    var e = this.Ks(t).Ss();
                    return this.Ms.ei(t).size + e.Ts.size - e.ws.size
                }, Ps.prototype.Ns = function(t) {
                    this.Ks(t).Ns()
                }, Ps.prototype.Ks = function(t) {
                    var e = this.xs.get(t);
                    return e || (e = new Rs, this.xs.set(t, e)), e
                }, Ps.prototype.ti = function(t) {
                    var e = this.Os.get(t);
                    return e || (e = new ss(nu), this.Os = this.Os.Ae(t, e)), e
                }, Ps.prototype.Gs = function(t) {
                    var e = null !== this.Ys(t);
                    return e || Ys("WatchChangeAggregator", "Detected inactive target", t), e
                }, Ps.prototype.Ys = function(t) {
                    var e = this.xs.get(t);
                    return e && e.ys ? null : this.Ms.si(t)
                }, Ps.prototype.zs = function(e) {
                    var n = this;
                    this.xs.set(e, new Rs), this.Ms.ei(e).forEach(function(t) {
                        n.Qs(e, t, null)
                    })
                }, Ps.prototype.Zs = function(t, e) {
                    return this.Ms.ei(t).has(e)
                }, Ps);

            function Ps(t) {
                this.Ms = t, this.xs = new Map, this.Ls = fs(), this.Os = Ms(), this.Bs = new ss(nu)
            }

            function xs() {
                this.ms = 0, this.Ps = Us(), this.Vs = ni.ht, this.gs = !1, this.ps = !0
            }

            function Os(t, e, n, r, i) {
                this.resumeToken = t, this.fs = e, this.Ts = n, this.Es = r, this.ws = i
            }

            function ks(t, e, n, r, i) {
                this.Ee = t, this.as = e, this.us = n, this.cs = r, this._s = i
            }

            function Ls(t, e, n, r, i, o, s, u) {
                this.query = t, this.docs = e, this.ss = n, this.docChanges = r, this.ns = i, this.fromCache = o, this.rs = s, this.hs = u
            }

            function Vs() {
                this.ts = new Zo(Jr.N)
            }

            function Cs(n) {
                this.N = n ? function(t, e) {
                    return n(t, e) || Jr.N(t.key, e.key)
                } : function(t, e) {
                    return Jr.N(t.key, e.key)
                }, this.Je = ds(), this.Xe = new Zo(this.N)
            }

            function Ms() {
                return new Zo(Jr.N)
            }

            function Us() {
                return new Zo(Jr.N)
            }
            var js = {
                    asc: "ASCENDING",
                    desc: "DESCENDING"
                },
                Fs = {
                    "<": "LESS_THAN",
                    "<=": "LESS_THAN_OR_EQUAL",
                    ">": "GREATER_THAN",
                    ">=": "GREATER_THAN_OR_EQUAL",
                    "==": "EQUAL",
                    "array-contains": "ARRAY_CONTAINS",
                    in: "IN",
                    "array-contains-any": "ARRAY_CONTAINS_ANY"
                },
                qs = (Bs.prototype.ni = function(t) {
                    var e = void 0 === t.code ? Rr.UNKNOWN : $o(t.code);
                    return new Dr(e, t.message || "")
                }, Bs.prototype.ri = function(t) {
                    return this.options.hi || ii(t) ? t : {
                        value: t
                    }
                }, Bs.prototype.oi = function(t) {
                    var e;
                    return ii(e = "object" == typeof t ? t.value : t) ? null : e
                }, Bs.prototype._t = function(t) {
                    return {
                        integerValue: "" + t
                    }
                }, Bs.prototype.lt = function(t) {
                    if (this.options.hi) {
                        if (isNaN(t)) return {
                            doubleValue: "NaN"
                        };
                        if (t === 1 / 0) return {
                            doubleValue: "Infinity"
                        };
                        if (t === -1 / 0) return {
                            doubleValue: "-Infinity"
                        }
                    }
                    return {
                        doubleValue: oi(t) ? "-0" : t
                    }
                }, Bs.prototype.ai = function(t) {
                    return si(t) ? this._t(t) : this.lt(t)
                }, Bs.prototype.C = function(t) {
                    return this.options.hi ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
                        seconds: "" + t.seconds,
                        nanos: t.nanoseconds
                    }
                }, Bs.prototype.v = function(t) {
                    var e = vi(t);
                    return new Lr(e.seconds, e.nanos)
                }, Bs.prototype.ui = function(t) {
                    return this.options.hi ? t.toBase64() : t.toUint8Array()
                }, Bs.prototype.ci = function(t) {
                    return this.options.hi ? ($s(void 0 === t || "string" == typeof t), ni.fromBase64String(t || "")) : ($s(void 0 === t || t instanceof Uint8Array), ni.fromUint8Array(t || new Uint8Array))
                }, Bs.prototype.toVersion = function(t) {
                    return this.C(t.C())
                }, Bs.prototype.fromVersion = function(t) {
                    return $s(!!t), Vr.v(this.v(t))
                }, Bs.prototype._i = function(t, e) {
                    return this.li(e || this.ii).child("documents").child(t).j()
                }, Bs.prototype.di = function(t) {
                    var e = Mr.K(t);
                    return $s(Gs(e)), e
                }, Bs.prototype.fi = function(t) {
                    return this._i(t.path)
                }, Bs.prototype.Z = function(t) {
                    var e = this.di(t);
                    return $s(e.get(1) === this.ii.projectId), $s(!e.get(3) && !this.ii.database || e.get(3) === this.ii.database), new Jr(this.Ti(e))
                }, Bs.prototype.Ei = function(t) {
                    return this._i(t)
                }, Bs.prototype.wi = function(t) {
                    var e = this.di(t);
                    return 4 === e.length ? Mr.G : this.Ti(e)
                }, Object.defineProperty(Bs.prototype, "Ii", {
                    get: function() {
                        return new Mr(["projects", this.ii.projectId, "databases", this.ii.database]).j()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Bs.prototype.li = function(t) {
                    return new Mr(["projects", t.projectId, "databases", t.database])
                }, Bs.prototype.Ti = function(t) {
                    return $s(4 < t.length && "documents" === t.get(4)), t.k(5)
                }, Bs.prototype.Ri = function(t, e) {
                    return {
                        name: this.fi(t),
                        fields: e.proto.mapValue.fields
                    }
                }, Bs.prototype.Ai = function(t) {
                    return {
                        name: this.fi(t.key),
                        fields: t.Mt().mapValue.fields,
                        updateTime: this.C(t.version.C())
                    }
                }, Bs.prototype.mi = function(t, e) {
                    var n = this.Z(t.name),
                        r = this.fromVersion(t.updateTime),
                        i = new Hi({
                            mapValue: {
                                fields: t.fields
                            }
                        });
                    return new Io(n, r, i, {
                        hasCommittedMutations: !!e
                    })
                }, Bs.prototype.Pi = function(t) {
                    $s(!!t.found), t.found.name, t.found.updateTime;
                    var e = this.Z(t.found.name),
                        n = this.fromVersion(t.found.updateTime),
                        r = new Hi({
                            mapValue: {
                                fields: t.found.fields
                            }
                        });
                    return new Io(e, n, r, {})
                }, Bs.prototype.Vi = function(t) {
                    $s(!!t.missing), $s(!!t.readTime);
                    var e = this.Z(t.missing),
                        n = this.fromVersion(t.readTime);
                    return new No(e, n)
                }, Bs.prototype.gi = function(t) {
                    return "found" in t ? this.Pi(t) : "missing" in t ? this.Vi(t) : Js()
                }, Bs.prototype.pi = function(t) {
                    var e;
                    if ("targetChange" in t) {
                        t.targetChange;
                        var n = this.yi(t.targetChange.targetChangeType || "NO_CHANGE"),
                            r = t.targetChange.targetIds || [],
                            i = this.ci(t.targetChange.resumeToken),
                            o = t.targetChange.cause,
                            s = o && this.ni(o);
                        e = new Ts(n, r, i, s || null)
                    } else if ("documentChange" in t) {
                        t.documentChange;
                        var u = t.documentChange;
                        u.document, u.document.name, u.document.updateTime;
                        var a = this.Z(u.document.name),
                            h = this.fromVersion(u.document.updateTime),
                            c = new Hi({
                                mapValue: {
                                    fields: u.document.fields
                                }
                            }),
                            f = new Io(a, h, c, {}),
                            l = u.targetIds || [],
                            p = u.removedTargetIds || [];
                        e = new bs(l, p, f.key, f)
                    } else if ("documentDelete" in t) {
                        t.documentDelete;
                        var d = t.documentDelete;
                        d.document;
                        var y = this.Z(d.document),
                            v = d.readTime ? this.fromVersion(d.readTime) : Vr.min(),
                            g = new No(y, v),
                            m = d.removedTargetIds || [];
                        e = new bs([], m, g.key, g)
                    } else if ("documentRemove" in t) {
                        t.documentRemove;
                        var w = t.documentRemove;
                        w.document;
                        var b = this.Z(w.document),
                            E = w.removedTargetIds || [];
                        e = new bs([], E, b, null)
                    } else {
                        if (!("filter" in t)) return Js();
                        t.filter;
                        var T = t.filter;
                        T.targetId;
                        var I = T.count || 0,
                            N = new co(I),
                            A = T.targetId;
                        e = new Es(A, N)
                    }
                    return e
                }, Bs.prototype.yi = function(t) {
                    return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : Js()
                }, Bs.prototype.bi = function(t) {
                    if (!("targetChange" in t)) return Vr.min();
                    var e = t.targetChange;
                    return e.targetIds && e.targetIds.length || !e.readTime ? Vr.min() : this.fromVersion(e.readTime)
                }, Bs.prototype.vi = function(t) {
                    var e, n = this;
                    if (t instanceof zi) e = {
                        update: this.Ri(t.key, t.value)
                    };
                    else if (t instanceof Ki) e = {
                        delete: this.fi(t.key)
                    };
                    else if (t instanceof Wi) e = {
                        update: this.Ri(t.key, t.data),
                        updateMask: this.Si(t.Vt)
                    };
                    else if (t instanceof Qi) e = {
                        transform: {
                            document: this.fi(t.key),
                            fieldTransforms: t.fieldTransforms.map(function(t) {
                                return n.Di(t)
                            })
                        }
                    };
                    else {
                        if (!(t instanceof Yi)) return Js();
                        e = {
                            verify: this.fi(t.key)
                        }
                    }
                    return t.Rt.Tt || (e.currentDocument = this.Ci(t.Rt)), e
                }, Bs.prototype.Fi = function(t) {
                    var e = this,
                        n = t.currentDocument ? this.Ni(t.currentDocument) : Bi.ft();
                    if (t.update) {
                        t.update.name;
                        var r = this.Z(t.update.name),
                            i = new Hi({
                                mapValue: {
                                    fields: t.update.fields
                                }
                            });
                        if (t.updateMask) {
                            var o = this.$i(t.updateMask);
                            return new Wi(r, i, o, n)
                        }
                        return new zi(r, i, n)
                    }
                    if (t.delete) {
                        var s = this.Z(t.delete);
                        return new Ki(s, n)
                    }
                    if (t.transform) {
                        var u = this.Z(t.transform.document),
                            a = t.transform.fieldTransforms.map(function(t) {
                                return e.ki(t)
                            });
                        return $s(!0 === n.exists), new Qi(u, a)
                    }
                    if (t.verify) {
                        var h = this.Z(t.verify);
                        return new Yi(h, n)
                    }
                    return Js()
                }, Bs.prototype.Ci = function(t) {
                    return void 0 !== t.updateTime ? {
                        updateTime: this.toVersion(t.updateTime)
                    } : void 0 !== t.exists ? {
                        exists: t.exists
                    } : Js()
                }, Bs.prototype.Ni = function(t) {
                    return void 0 !== t.updateTime ? Bi.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? Bi.exists(t.exists) : Bi.ft()
                }, Bs.prototype.Mi = function(t, e) {
                    var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
                    n.isEqual(Vr.min()) && (n = this.fromVersion(e));
                    var r = null;
                    return t.transformResults && 0 < t.transformResults.length && (r = t.transformResults), new Li(n, r)
                }, Bs.prototype.xi = function(t, e) {
                    var n = this;
                    return t && 0 < t.length ? ($s(void 0 !== e), t.map(function(t) {
                        return n.Mi(t, e)
                    })) : []
                }, Bs.prototype.Di = function(t) {
                    var e = t.transform;
                    if (e instanceof Ai) return {
                        fieldPath: t.field.j(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (e instanceof Si) return {
                        fieldPath: t.field.j(),
                        appendMissingElements: {
                            values: e.elements
                        }
                    };
                    if (e instanceof Ri) return {
                        fieldPath: t.field.j(),
                        removeAllFromArray: {
                            values: e.elements
                        }
                    };
                    if (e instanceof Di) return {
                        fieldPath: t.field.j(),
                        increment: e.ct
                    };
                    throw Js()
                }, Bs.prototype.ki = function(t) {
                    var e = null;
                    if ("setToServerValue" in t) $s("REQUEST_TIME" === t.setToServerValue), e = Ai.instance;
                    else if ("appendMissingElements" in t) {
                        var n = t.appendMissingElements.values || [];
                        e = new Si(n)
                    } else if ("removeAllFromArray" in t) {
                        var r = t.removeAllFromArray.values || [];
                        e = new Ri(r)
                    } else "increment" in t ? e = new Di(this, t.increment) : Js();
                    var i = Hr.X(t.fieldPath);
                    return new qi(i, e)
                }, Bs.prototype.Li = function(t) {
                    return {
                        documents: [this.Ei(t.path)]
                    }
                }, Bs.prototype.Oi = function(t) {
                    $s(1 === t.documents.length);
                    var e = t.documents[0];
                    return So.Wt(this.wi(e)).ee()
                }, Bs.prototype.Bi = function(t) {
                    var e = {
                            structuredQuery: {}
                        },
                        n = t.path;
                    null !== t.collectionGroup ? (e.parent = this.Ei(n), e.structuredQuery.from = [{
                        collectionId: t.collectionGroup,
                        allDescendants: !0
                    }]) : (e.parent = this.Ei(n.M()), e.structuredQuery.from = [{
                        collectionId: n.O()
                    }]);
                    var r = this.qi(t.filters);
                    r && (e.structuredQuery.where = r);
                    var i = this.Ui(t.orderBy);
                    i && (e.structuredQuery.orderBy = i);
                    var o = this.ri(t.limit);
                    return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Qi(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.Qi(t.endAt)), e
                }, Bs.prototype.Wi = function(t) {
                    var e = this.wi(t.parent),
                        n = t.structuredQuery,
                        r = n.from ? n.from.length : 0,
                        i = null;
                    if (0 < r) {
                        $s(1 === r);
                        var o = n.from[0];
                        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
                    }
                    var s = [];
                    n.where && (s = this.ji(n.where));
                    var u = [];
                    n.orderBy && (u = this.Ki(n.orderBy));
                    var a = null;
                    n.limit && (a = this.oi(n.limit));
                    var h = null;
                    n.startAt && (h = this.Gi(n.startAt));
                    var c = null;
                    return n.endAt && (c = this.Gi(n.endAt)), new So(e, i, u, s, a, "F", h, c).ee()
                }, Bs.prototype.zi = function(t) {
                    var e = this.Hi(t.Te);
                    return null == e ? null : {
                        "goog-listen-tags": e
                    }
                }, Bs.prototype.Hi = function(t) {
                    switch (t) {
                        case 0:
                            return null;
                        case 1:
                            return "existence-filter-mismatch";
                        case 2:
                            return "limbo-document";
                        default:
                            return Js()
                    }
                }, Bs.prototype.ee = function(t) {
                    var e, n = t.target;
                    return (e = n.Lt() ? {
                        documents: this.Li(n)
                    } : {
                        query: this.Bi(n)
                    }).targetId = t.targetId, 0 < t.resumeToken.rt() && (e.resumeToken = this.ui(t.resumeToken)), e
                }, Bs.prototype.qi = function(t) {
                    var e = this;
                    if (0 !== t.length) {
                        var n = t.map(function(t) {
                            return t instanceof Ro ? e.Yi(t) : Js()
                        });
                        return 1 === n.length ? n[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: n
                            }
                        }
                    }
                }, Bs.prototype.ji = function(t) {
                    var e = this;
                    return t ? void 0 !== t.unaryFilter ? [this.Ji(t)] : void 0 !== t.fieldFilter ? [this.Xi(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) {
                        return e.ji(t)
                    }).reduce(function(t, e) {
                        return t.concat(e)
                    }) : Js() : []
                }, Bs.prototype.Ui = function(t) {
                    var e = this;
                    if (0 !== t.length) return t.map(function(t) {
                        return e.Zi(t)
                    })
                }, Bs.prototype.Ki = function(t) {
                    var e = this;
                    return t.map(function(t) {
                        return e.tn(t)
                    })
                }, Bs.prototype.Qi = function(t) {
                    return {
                        before: t.before,
                        values: t.position
                    }
                }, Bs.prototype.Gi = function(t) {
                    var e = !!t.before,
                        n = t.values || [];
                    return new Lo(n, e)
                }, Bs.prototype.en = function(t) {
                    return js[t]
                }, Bs.prototype.sn = function(t) {
                    switch (t) {
                        case "ASCENDING":
                            return "asc";
                        case "DESCENDING":
                            return "desc";
                        default:
                            return
                    }
                }, Bs.prototype.nn = function(t) {
                    return Fs[t]
                }, Bs.prototype.rn = function(t) {
                    switch (t) {
                        case "EQUAL":
                            return "==";
                        case "GREATER_THAN":
                            return ">";
                        case "GREATER_THAN_OR_EQUAL":
                            return ">=";
                        case "LESS_THAN":
                            return "<";
                        case "LESS_THAN_OR_EQUAL":
                            return "<=";
                        case "ARRAY_CONTAINS":
                            return "array-contains";
                        case "IN":
                            return "in";
                        case "ARRAY_CONTAINS_ANY":
                            return "array-contains-any";
                        case "OPERATOR_UNSPECIFIED":
                        default:
                            return Js()
                    }
                }, Bs.prototype.hn = function(t) {
                    return {
                        fieldPath: t.j()
                    }
                }, Bs.prototype.on = function(t) {
                    return Hr.X(t.fieldPath)
                }, Bs.prototype.Zi = function(t) {
                    return {
                        field: this.hn(t.field),
                        direction: this.en(t.dir)
                    }
                }, Bs.prototype.tn = function(t) {
                    return new Vo(this.on(t.field), this.sn(t.direction))
                }, Bs.prototype.Xi = function(t) {
                    return Ro.create(this.on(t.fieldFilter.field), this.rn(t.fieldFilter.op), t.fieldFilter.value)
                }, Bs.prototype.Yi = function(t) {
                    if ("==" === t.op) {
                        if (Ii(t.value)) return {
                            unaryFilter: {
                                field: this.hn(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Ti(t.value)) return {
                            unaryFilter: {
                                field: this.hn(t.field),
                                op: "IS_NULL"
                            }
                        }
                    }
                    return {
                        fieldFilter: {
                            field: this.hn(t.field),
                            op: this.nn(t.op),
                            value: t.value
                        }
                    }
                }, Bs.prototype.Ji = function(t) {
                    switch (t.unaryFilter.op) {
                        case "IS_NAN":
                            var e = this.on(t.unaryFilter.field);
                            return Ro.create(e, "==", {
                                doubleValue: NaN
                            });
                        case "IS_NULL":
                            var n = this.on(t.unaryFilter.field);
                            return Ro.create(n, "==", {
                                nullValue: "NULL_VALUE"
                            });
                        case "OPERATOR_UNSPECIFIED":
                        default:
                            return Js()
                    }
                }, Bs.prototype.Si = function(t) {
                    var e = [];
                    return t.fields.forEach(function(t) {
                        return e.push(t.j())
                    }), {
                        fieldPaths: e
                    }
                }, Bs.prototype.$i = function(t) {
                    var e = t.fieldPaths || [];
                    return new Fi(e.map(function(t) {
                        return Hr.X(t)
                    }))
                }, Bs);

            function Bs(t, e) {
                this.ii = t, this.options = e
            }

            function Gs(t) {
                return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2)
            }
            var zs = (Qs.an = function(t) {
                    Qs.platform && Js(), Qs.platform = t
                }, Qs.nt = function() {
                    return Qs.platform || Js(), Qs.platform
                }, Qs),
                Ws = new h("@firebase/firestore");

            function Qs() {}

            function Ks() {
                return Ws.logLevel
            }

            function Ys(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Ws.logLevel <= p.DEBUG) {
                    var r = e.map(Xs);
                    Ws.debug.apply(Ws, d(["Firestore (" + Tr + "): " + t], r))
                }
            }

            function Hs(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Ws.logLevel <= p.ERROR) {
                    var r = e.map(Xs);
                    Ws.error.apply(Ws, d(["Firestore (" + Tr + "): " + t], r))
                }
            }

            function Xs(t) {
                if ("string" == typeof t) return t;
                var e = zs.nt();
                try {
                    return e.un(t)
                } catch (e) {
                    return t
                }
            }

            function Js(t) {
                void 0 === t && (t = "Unexpected state");
                var e = "FIRESTORE (" + Tr + ") INTERNAL ASSERTION FAILED: " + t;
                throw Hs(e), new Error(e)
            }

            function $s(t) {
                t || Js()
            }

            function Zs(t) {
                return t
            }
            var tu = (eu.cn = function() {
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20;)
                    for (var r = zs.nt()._n(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
                return n
            }, eu);

            function eu() {}

            function nu(t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            }

            function ru(t, n, r) {
                return t.length === n.length && t.every(function(t, e) {
                    return r(t, n[e])
                })
            }

            function iu(t) {
                return t + "\0"
            }

            function ou(t, e, n, r, i) {
                this.ii = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i
            }
            var su = (Object.defineProperty(_u.prototype, "ln", {
                    get: function() {
                        return "(default)" === this.database
                    },
                    enumerable: !0,
                    configurable: !0
                }), _u.prototype.isEqual = function(t) {
                    return t instanceof _u && t.projectId === this.projectId && t.database === this.database
                }, _u.prototype.S = function(t) {
                    return nu(this.projectId, t.projectId) || nu(this.database, t.database)
                }, _u),
                uu = (Au.prototype.get = function(t) {
                    var e = this.dn(t),
                        n = this.fn[e];
                    if (void 0 !== n)
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r],
                                s = o[0],
                                u = o[1];
                            if (s.isEqual(t)) return u
                        }
                }, Au.prototype.has = function(t) {
                    return void 0 !== this.get(t)
                }, Au.prototype.set = function(t, e) {
                    var n = this.dn(t),
                        r = this.fn[n];
                    if (void 0 !== r) {
                        for (var i = 0; i < r.length; i++)
                            if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                        r.push([t, e])
                    } else this.fn[n] = [
                        [t, e]
                    ]
                }, Au.prototype.delete = function(t) {
                    var e = this.dn(t),
                        n = this.fn[e];
                    if (void 0 === n) return !1;
                    for (var r = 0; r < n.length; r++)
                        if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.fn[e] : n.splice(r, 1), !0;
                    return !1
                }, Au.prototype.forEach = function(u) {
                    ti(this.fn, function(t, e) {
                        for (var n = 0, r = e; n < r.length; n++) {
                            var i = r[n],
                                o = i[0],
                                s = i[1];
                            u(o, s)
                        }
                    })
                }, Au.prototype.B = function() {
                    return ei(this.fn)
                }, Au),
                au = (Nu.prototype.at = function(t, e, n) {
                    for (var r = n.En, i = 0; i < this.mutations.length; i++) {
                        var o = this.mutations[i];
                        if (o.key.isEqual(t)) {
                            var s = r[i];
                            e = o.at(e, s)
                        }
                    }
                    return e
                }, Nu.prototype.ot = function(t, e) {
                    for (var n = 0, r = this.baseMutations; n < r.length; n++) {
                        var i = r[n];
                        i.key.isEqual(t) && (e = i.ot(e, e, this.Tn))
                    }
                    for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
                        var a = u[s];
                        a.key.isEqual(t) && (e = a.ot(e, o, this.Tn))
                    }
                    return e
                }, Nu.prototype.wn = function(n) {
                    var r = this,
                        i = n;
                    return this.mutations.forEach(function(t) {
                        var e = r.ot(t.key, n.get(t.key));
                        e && (i = i.Ae(t.key, e))
                    }), i
                }, Nu.prototype.keys = function() {
                    return this.mutations.reduce(function(t, e) {
                        return t.add(e.key)
                    }, gs())
                }, Nu.prototype.isEqual = function(t) {
                    return this.batchId === t.batchId && ru(this.mutations, t.mutations, function(t, e) {
                        return t.isEqual(e)
                    }) && ru(this.baseMutations, t.baseMutations, function(t, e) {
                        return t.isEqual(e)
                    })
                }, Nu),
                hu = (Iu.from = function(t, e, n) {
                    $s(t.mutations.length === n.length);
                    for (var r = ys, i = t.mutations, o = 0; o < i.length; o++) r = r.Ae(i[o].key, n[o].version);
                    return new Iu(t, e, n, r)
                }, Iu),
                cu = (Tu.prototype.catch = function(t) {
                    return this.next(void 0, t)
                }, Tu.prototype.next = function(r, i) {
                    var o = this;
                    return this.Vn && Js(), this.Vn = !0, this.Pn ? this.error ? this.gn(i, this.error) : this.pn(r, this.result) : new Tu(function(e, n) {
                        o.An = function(t) {
                            o.pn(r, t).next(e, n)
                        }, o.mn = function(t) {
                            o.gn(i, t).next(e, n)
                        }
                    })
                }, Tu.prototype.yn = function() {
                    var n = this;
                    return new Promise(function(t, e) {
                        n.next(t, e)
                    })
                }, Tu.prototype.bn = function(t) {
                    try {
                        var e = t();
                        return e instanceof Tu ? e : Tu.resolve(e)
                    } catch (t) {
                        return Tu.reject(t)
                    }
                }, Tu.prototype.pn = function(t, e) {
                    return t ? this.bn(function() {
                        return t(e)
                    }) : Tu.resolve(e)
                }, Tu.prototype.gn = function(t, e) {
                    return t ? this.bn(function() {
                        return t(e)
                    }) : Tu.reject(e)
                }, Tu.resolve = function(n) {
                    return new Tu(function(t, e) {
                        t(n)
                    })
                }, Tu.reject = function(n) {
                    return new Tu(function(t, e) {
                        e(n)
                    })
                }, Tu.vn = function(t) {
                    return new Tu(function(e, n) {
                        var r = 0,
                            i = 0,
                            o = !1;
                        t.forEach(function(t) {
                            ++r, t.next(function() {
                                ++i, o && i === r && e()
                            }, function(t) {
                                return n(t)
                            })
                        }), o = !0, i === r && e()
                    })
                }, Tu.Sn = function(t) {
                    for (var n = Tu.resolve(!1), e = function(e) {
                            n = n.next(function(t) {
                                return t ? Tu.resolve(t) : e()
                            })
                        }, r = 0, i = t; r < i.length; r++) e(i[r]);
                    return n
                }, Tu.forEach = function(t, n) {
                    var r = this,
                        i = [];
                    return t.forEach(function(t, e) {
                        i.push(n.call(r, t, e))
                    }), this.vn(i)
                }, Tu),
                fu = (Object.defineProperty(Eu.prototype, "readTime", {
                    get: function() {
                        return this.Fn
                    },
                    set: function(t) {
                        this.Fn = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Eu.prototype.Nn = function(t, e) {
                    this.$n(), this.readTime = e, this.Dn.set(t.key, t)
                }, Eu.prototype.kn = function(t, e) {
                    this.$n(), e && (this.readTime = e), this.Dn.set(t, null)
                }, Eu.prototype.Mn = function(t, e) {
                    this.$n();
                    var n = this.Dn.get(e);
                    return void 0 !== n ? cu.resolve(n) : this.xn(t, e)
                }, Eu.prototype.getEntries = function(t, e) {
                    return this.Ln(t, e)
                }, Eu.prototype.apply = function(t) {
                    return this.$n(), this.Cn = !0, this.On(t)
                }, Eu.prototype.$n = function() {}, Eu),
                lu = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                pu = (bu.prototype.qn = function(t) {
                    this.Bn.push(t)
                }, bu.prototype.Un = function() {
                    this.Bn.forEach(function(t) {
                        return t()
                    })
                }, bu),
                du = (wu.prototype.Kn = function(e, n) {
                    var r = this;
                    return this.Wn.Gn(e, n).next(function(t) {
                        return r.zn(e, n, t)
                    })
                }, wu.prototype.zn = function(t, r, i) {
                    return this.Qn.Mn(t, r).next(function(t) {
                        for (var e = 0, n = i; e < n.length; e++) t = n[e].ot(r, t);
                        return t
                    })
                }, wu.prototype.Hn = function(t, e, i) {
                    var o = ls();
                    return e.forEach(function(t, e) {
                        for (var n = 0, r = i; n < r.length; n++) e = r[n].ot(t, e);
                        o = o.Ae(t, e)
                    }), o
                }, wu.prototype.Yn = function(e, t) {
                    var n = this;
                    return this.Qn.getEntries(e, t).next(function(t) {
                        return n.Jn(e, t)
                    })
                }, wu.prototype.Jn = function(r, i) {
                    var o = this;
                    return this.Wn.Xn(r, i).next(function(t) {
                        var e = o.Hn(r, i, t),
                            n = fs();
                        return e.forEach(function(t, e) {
                            e = e || new No(t, Vr.min()), n = n.Ae(t, e)
                        }), n
                    })
                }, wu.prototype.Zn = function(t, e, n) {
                    return e.Lt() ? this.tr(t, e.path) : e._e() ? this.er(t, e, n) : this.sr(t, e, n)
                }, wu.prototype.tr = function(t, e) {
                    return this.Kn(t, new Jr(e)).next(function(t) {
                        var e = ds();
                        return t instanceof Io && (e = e.Ae(t.key, t)), e
                    })
                }, wu.prototype.er = function(n, r, i) {
                    var o = this,
                        s = r.collectionGroup,
                        u = ds();
                    return this.jn.ir(n, s).next(function(t) {
                        return cu.forEach(t, function(t) {
                            var e = r.Zt(t.child(s));
                            return o.sr(n, e, i).next(function(t) {
                                t.forEach(function(t, e) {
                                    u = u.Ae(t, e)
                                })
                            })
                        }).next(function() {
                            return u
                        })
                    })
                }, wu.prototype.sr = function(e, n, t) {
                    var c, f, r = this;
                    return this.Qn.Zn(e, n, t).next(function(t) {
                        return c = t, r.Wn.nr(e, n)
                    }).next(function(t) {
                        return f = t, r.rr(e, f, c).next(function(t) {
                            c = t;
                            for (var e = 0, n = f; e < n.length; e++)
                                for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) {
                                    var s = o[i],
                                        u = s.key,
                                        a = c.get(u),
                                        h = s.ot(a, a, r.Tn);
                                    c = h instanceof Io ? c.Ae(u, h) : c.remove(u)
                                }
                        })
                    }).next(function() {
                        return c.forEach(function(t, e) {
                            n.matches(e) || (c = c.remove(t))
                        }), c
                    })
                }, wu.prototype.rr = function(t, e, n) {
                    for (var r = gs(), i = 0, o = e; i < o.length; i++)
                        for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                            var a = u[s];
                            a instanceof Wi && null === n.get(a.key) && (r = r.add(a.key))
                        }
                    var h = n;
                    return this.Qn.getEntries(t, r).next(function(t) {
                        return t.forEach(function(t, e) {
                            null !== e && e instanceof Io && (h = h.Ae(t, e))
                        }), h
                    })
                }, wu),
                yu = (mu.ar = function(t, e) {
                    for (var n = gs(), r = gs(), i = 0, o = e.docChanges; i < o.length; i++) {
                        var s = o[i];
                        switch (s.type) {
                            case 0:
                                n = n.add(s.doc.key);
                                break;
                            case 1:
                                r = r.add(s.doc.key)
                        }
                    }
                    return new mu(t, e.fromCache, n, r)
                }, mu),
                vu = (gu.prototype.cr = function(t) {
                    return this.previousValue = Math.max(t, this.previousValue), this.previousValue
                }, gu.prototype.next = function() {
                    var t = ++this.previousValue;
                    return this._r && this._r(t), t
                }, gu);

            function gu(t, e) {
                var n = this;
                this.previousValue = t, e && (e.ur = function(t) {
                    return n.cr(t)
                }, this._r = function(t) {
                    return e.lr(t)
                })
            }

            function mu(t, e, n, r) {
                this.targetId = t, this.fromCache = e, this.hr = n, this.or = r
            }

            function wu(t, e, n) {
                this.Qn = t, this.Wn = e, this.jn = n
            }

            function bu() {
                this.Bn = []
            }

            function Eu() {
                this.Dn = new uu(function(t) {
                    return t.toString()
                }), this.Cn = !1
            }

            function Tu(t) {
                var e = this;
                this.An = null, this.mn = null, this.result = void 0, this.error = void 0, this.Pn = !1, this.Vn = !1, t(function(t) {
                    e.Pn = !0, e.result = t, e.An && e.An(t)
                }, function(t) {
                    e.Pn = !0, e.error = t, e.mn && e.mn(t)
                })
            }

            function Iu(t, e, n, r) {
                this.batch = t, this.In = e, this.En = n, this.Rn = r
            }

            function Nu(t, e, n, r) {
                this.batchId = t, this.Tn = e, this.baseMutations = n, this.mutations = r
            }

            function Au(t) {
                this.dn = t, this.fn = {}
            }

            function _u(t, e) {
                this.projectId = t, this.database = e || "(default)"
            }
            vu.dr = -1;

            function Su() {
                var n = this;
                this.promise = new Promise(function(t, e) {
                    n.resolve = t, n.reject = e
                })
            }
            var Ru = (Du.prototype.reset = function() {
                this.Ar = 0
            }, Du.prototype.Vr = function() {
                this.Ar = this.Rr
            }, Du.prototype.gr = function(t) {
                var e = this;
                this.cancel();
                var n = Math.floor(this.Ar + this.pr()),
                    r = Math.max(0, Date.now() - this.Pr),
                    i = Math.max(0, n - r);
                0 < i && Ys("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Ar + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.mr = this.Tr.yr(this.Er, i, function() {
                    return e.Pr = Date.now(), t()
                }), this.Ar *= this.Ir, this.Ar < this.wr && (this.Ar = this.wr), this.Ar > this.Rr && (this.Ar = this.Rr)
            }, Du.prototype.br = function() {
                null !== this.mr && (this.mr.vr(), this.mr = null)
            }, Du.prototype.cancel = function() {
                null !== this.mr && (this.mr.cancel(), this.mr = null)
            }, Du.prototype.pr = function() {
                return (Math.random() - .5) * this.Ar
            }, Du);

            function Du(t, e, n, r, i) {
                void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Tr = t, this.Er = e, this.wr = n, this.Ir = r, this.Rr = i, this.Ar = 0, this.mr = null, this.Pr = Date.now(), this.reset()
            }

            function Pu(t) {
                for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Ou(e)), e = xu(t.get(n), e);
                return Ou(e)
            }

            function xu(t, e) {
                for (var n = e, r = t.length, i = 0; i < r; i++) {
                    var o = t.charAt(i);
                    switch (o) {
                        case "\0":
                            n += "";
                            break;
                        case "":
                            n += "";
                            break;
                        default:
                            n += o
                    }
                }
                return n
            }

            function Ou(t) {
                return t + ""
            }

            function ku(t) {
                var e = t.length;
                if ($s(2 <= e), 2 === e) return $s("" === t.charAt(0) && "" === t.charAt(1)), Mr.G;
                for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                    var s = t.indexOf("", o);
                    switch ((s < 0 || n < s) && Js(), t.charAt(s + 1)) {
                        case "":
                            var u = t.substring(o, s),
                                a = void 0;
                            0 === i.length ? a = u : (a = i += u, i = ""), r.push(a);
                            break;
                        case "":
                            i += t.substring(o, s), i += "\0";
                            break;
                        case "":
                            i += t.substring(o, s + 1);
                            break;
                        default:
                            Js()
                    }
                    o = s + 2
                }
                return new Mr(r)
            }
            var Lu = (ju.prototype.Dr = function(t, e) {
                    return this.Sr.add(e), cu.resolve()
                }, ju.prototype.ir = function(t, e) {
                    return cu.resolve(this.Sr.getEntries(e))
                }, ju),
                Vu = (Uu.prototype.add = function(t) {
                    var e = t.O(),
                        n = t.M(),
                        r = this.index[e] || new ss(Mr.N),
                        i = !r.has(n);
                    return this.index[e] = r.add(n), i
                }, Uu.prototype.has = function(t) {
                    var e = t.O(),
                        n = t.M(),
                        r = this.index[e];
                    return r && r.has(n)
                }, Uu.prototype.getEntries = function(t) {
                    return (this.index[t] || new ss(Mr.N)).W()
                }, Uu),
                Cu = (Mu.prototype.Dr = function(t, e) {
                    var n = this;
                    if (this.Cr.has(e)) return cu.resolve();
                    var r = e.O(),
                        i = e.M();
                    t.qn(function() {
                        n.Cr.add(e)
                    });
                    var o = {
                        collectionId: r,
                        parent: Pu(i)
                    };
                    return Fu(t).put(o)
                }, Mu.prototype.ir = function(t, i) {
                    var o = [],
                        e = IDBKeyRange.bound([i, ""], [iu(i), ""], !1, !0);
                    return Fu(t).Fr(e).next(function(t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e];
                            if (r.collectionId !== i) break;
                            o.push(ku(r.parent))
                        }
                        return o
                    })
                }, Mu);

            function Mu() {
                this.Cr = new Vu
            }

            function Uu() {
                this.index = {}
            }

            function ju() {
                this.Sr = new Vu
            }

            function Fu(t) {
                return sa.Nr(t, Ua.store)
            }
            var qu, Bu = (Gu.prototype.Nn = function(t, e, n) {
                return Wu(t).put(Qu(e), n)
            }, Gu.prototype.kn = function(t, e) {
                var n = Wu(t),
                    r = Qu(e);
                return n.delete(r)
            }, Gu.prototype.updateMetadata = function(e, n) {
                var r = this;
                return this.getMetadata(e).next(function(t) {
                    return t.byteSize += n, r.$r(e, t)
                })
            }, Gu.prototype.Mn = function(t, e) {
                var n = this;
                return Wu(t).get(Qu(e)).next(function(t) {
                    return n.kr(t)
                })
            }, Gu.prototype.Mr = function(t, e) {
                var n = this;
                return Wu(t).get(Qu(e)).next(function(t) {
                    var e = n.kr(t);
                    return e ? {
                        xr: e,
                        size: Ku(t)
                    } : null
                })
            }, Gu.prototype.getEntries = function(t, e) {
                var r = this,
                    i = ls();
                return this.Lr(t, e, function(t, e) {
                    var n = r.kr(e);
                    i = i.Ae(t, n)
                }).next(function() {
                    return i
                })
            }, Gu.prototype.Or = function(t, e) {
                var r = this,
                    i = ls(),
                    o = new Zo(Jr.N);
                return this.Lr(t, e, function(t, e) {
                    var n = r.kr(e);
                    o = n ? (i = i.Ae(t, n), o.Ae(t, Ku(e))) : (i = i.Ae(t, null), o.Ae(t, 0))
                }).next(function() {
                    return {
                        Br: i,
                        qr: o
                    }
                })
            }, Gu.prototype.Lr = function(t, e, i) {
                if (e.B()) return cu.resolve();
                var n = IDBKeyRange.bound(e.first().path.W(), e.last().path.W()),
                    o = e.be(),
                    s = o.Ne();
                return Wu(t).Ur({
                    range: n
                }, function(t, e, n) {
                    for (var r = Jr.st(t); s && Jr.N(s, r) < 0;) i(s, null), s = o.Ne();
                    s && s.isEqual(r) && (i(s, e), s = o.$e() ? o.Ne() : null), s ? n.Qr(s.path.W()) : n.done()
                }).next(function() {
                    for (; s;) i(s, null), s = o.$e() ? o.Ne() : null
                })
            }, Gu.prototype.Zn = function(t, i, e) {
                var o = this,
                    s = ds(),
                    u = i.path.length + 1,
                    n = {};
                if (e.isEqual(Vr.min())) {
                    var r = i.path.W();
                    n.range = IDBKeyRange.lowerBound(r)
                } else {
                    var a = i.path.W(),
                        h = this.serializer.Wr(e);
                    n.range = IDBKeyRange.lowerBound([a, h], !0), n.index = ka.collectionReadTimeIndex
                }
                return Wu(t).Ur(n, function(t, e, n) {
                    if (t.length === u) {
                        var r = o.serializer.jr(e);
                        i.path.q(r.key.path) ? r instanceof Io && i.matches(r) && (s = s.Ae(r.key, r)) : n.done()
                    }
                }).next(function() {
                    return s
                })
            }, Gu.prototype.Kr = function(t, e) {
                var r = this,
                    i = fs(),
                    o = this.serializer.Wr(e),
                    n = Wu(t),
                    s = IDBKeyRange.lowerBound(o, !0);
                return n.Ur({
                    index: ka.readTimeIndex,
                    range: s
                }, function(t, e) {
                    var n = r.serializer.jr(e);
                    i = i.Ae(n.key, n), o = e.readTime
                }).next(function() {
                    return {
                        Gr: i,
                        readTime: r.serializer.zr(o)
                    }
                })
            }, Gu.prototype.Hr = function(t) {
                var r = this,
                    e = Wu(t),
                    i = Vr.min();
                return e.Ur({
                    index: ka.readTimeIndex,
                    reverse: !0
                }, function(t, e, n) {
                    e.readTime && (i = r.serializer.zr(e.readTime)), n.done()
                }).next(function() {
                    return i
                })
            }, Gu.prototype.Yr = function(t) {
                return new Gu.Jr(this, !!t && t.Xr)
            }, Gu.prototype.Zr = function(t) {
                return this.getMetadata(t).next(function(t) {
                    return t.byteSize
                })
            }, Gu.prototype.getMetadata = function(t) {
                return zu(t).get(La.key).next(function(t) {
                    return $s(!!t), t
                })
            }, Gu.prototype.$r = function(t, e) {
                return zu(t).put(La.key, e)
            }, Gu.prototype.kr = function(t) {
                if (t) {
                    var e = this.serializer.jr(t);
                    return e instanceof No && e.version.isEqual(Vr.min()) ? null : e
                }
                return null
            }, Gu);

            function Gu(t, e) {
                this.serializer = t, this.jn = e
            }

            function zu(t) {
                return sa.Nr(t, La.store)
            }

            function Wu(t) {
                return sa.Nr(t, ka.store)
            }

            function Qu(t) {
                return t.path.W()
            }

            function Ku(t) {
                var e;
                if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else {
                    if (!t.noDocument) throw Js();
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }

            function Yu(t, e) {
                var n = this;
                return (n = qu.call(this) || this).th = t, n.Xr = e, n.eh = new uu(function(t) {
                    return t.toString()
                }), n
            }
            Bu.Jr = (n(Yu, qu = fu), Yu.prototype.On = function(s) {
                var u = this,
                    a = [],
                    h = 0,
                    c = new ss(function(t, e) {
                        return nu(t.j(), e.j())
                    });
                return this.Dn.forEach(function(t, e) {
                    var n = u.eh.get(t);
                    if (e) {
                        var r = u.th.serializer.sh(e, u.readTime);
                        c = c.add(t.path.M());
                        var i = Ku(r);
                        h += i - n, a.push(u.th.Nn(s, t, r))
                    } else if (h -= n, u.Xr) {
                        var o = u.th.serializer.sh(new No(t, Vr.min()), u.readTime);
                        a.push(u.th.Nn(s, t, o))
                    } else a.push(u.th.kn(s, t))
                }), c.forEach(function(t) {
                    a.push(u.th.jn.Dr(s, t))
                }), a.push(this.th.updateMetadata(s, h)), cu.vn(a)
            }, Yu.prototype.xn = function(t, e) {
                var n = this;
                return this.th.Mr(t, e).next(function(t) {
                    return null === t ? (n.eh.set(e, 0), null) : (n.eh.set(e, t.size), t.xr)
                })
            }, Yu.prototype.Ln = function(t, e) {
                var n = this;
                return this.th.Or(t, e).next(function(t) {
                    var e = t.Br;
                    return t.qr.forEach(function(t, e) {
                        n.eh.set(t, e)
                    }), e
                })
            }, Yu);
            var Hu = ($u.prototype.next = function() {
                    return this.ih += 2, this.ih
                }, $u.nh = function() {
                    return new $u(0)
                }, $u.rh = function() {
                    return new $u(-1)
                }, $u),
                Xu = (Ju.prototype.oh = function(n) {
                    var r = this;
                    return this.ah(n).next(function(t) {
                        var e = new Hu(t.highestTargetId);
                        return t.highestTargetId = e.next(), r.uh(n, t).next(function() {
                            return t.highestTargetId
                        })
                    })
                }, Ju.prototype._h = function(t) {
                    return this.ah(t).next(function(t) {
                        return Vr.v(new Lr(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
                    })
                }, Ju.prototype.lh = function(t) {
                    return this.ah(t).next(function(t) {
                        return t.highestListenSequenceNumber
                    })
                }, Ju.prototype.dh = function(e, n, r) {
                    var i = this;
                    return this.ah(e).next(function(t) {
                        return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.C()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.uh(e, t)
                    })
                }, Ju.prototype.fh = function(e, n) {
                    var r = this;
                    return this.Th(e, n).next(function() {
                        return r.ah(e).next(function(t) {
                            return t.targetCount += 1, r.Eh(n, t), r.uh(e, t)
                        })
                    })
                }, Ju.prototype.wh = function(t, e) {
                    return this.Th(t, e)
                }, Ju.prototype.Ih = function(e, t) {
                    var n = this;
                    return this.Rh(e, t.targetId).next(function() {
                        return Zu(e).delete(t.targetId)
                    }).next(function() {
                        return n.ah(e)
                    }).next(function(t) {
                        return $s(0 < t.targetCount), --t.targetCount, n.uh(e, t)
                    })
                }, Ju.prototype.Ah = function(r, i, o) {
                    var s = this,
                        u = 0,
                        a = [];
                    return Zu(r).Ur(function(t, e) {
                        var n = s.serializer.mh(e);
                        n.sequenceNumber <= i && null === o.get(n.targetId) && (u++, a.push(s.Ih(r, n)))
                    }).next(function() {
                        return cu.vn(a)
                    }).next(function() {
                        return u
                    })
                }, Ju.prototype.js = function(t, r) {
                    var i = this;
                    return Zu(t).Ur(function(t, e) {
                        var n = i.serializer.mh(e);
                        r(n)
                    })
                }, Ju.prototype.ah = function(t) {
                    return ta(t).get(Ma.key).next(function(t) {
                        return $s(null !== t), t
                    })
                }, Ju.prototype.uh = function(t, e) {
                    return ta(t).put(Ma.key, e)
                }, Ju.prototype.Th = function(t, e) {
                    return Zu(t).put(this.serializer.Ph(e))
                }, Ju.prototype.Eh = function(t, e) {
                    var n = !1;
                    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
                }, Ju.prototype.Vh = function(t) {
                    return this.ah(t).next(function(t) {
                        return t.targetCount
                    })
                }, Ju.prototype.gh = function(t, i) {
                    var o = this,
                        e = i.canonicalId(),
                        n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                        s = null;
                    return Zu(t).Ur({
                        range: n,
                        index: Va.queryTargetsIndexName
                    }, function(t, e, n) {
                        var r = o.serializer.mh(e);
                        i.isEqual(r.target) && (s = r, n.done())
                    }).next(function() {
                        return s
                    })
                }, Ju.prototype.ph = function(n, t, r) {
                    var i = this,
                        o = [],
                        s = ea(n);
                    return t.forEach(function(t) {
                        var e = Pu(t.path);
                        o.push(s.put(new Ca(r, e))), o.push(i.hh.yh(n, r, t))
                    }), cu.vn(o)
                }, Ju.prototype.bh = function(n, t, r) {
                    var i = this,
                        o = ea(n);
                    return cu.forEach(t, function(t) {
                        var e = Pu(t.path);
                        return cu.vn([o.delete([r, e]), i.hh.vh(n, r, t)])
                    })
                }, Ju.prototype.Rh = function(t, e) {
                    var n = ea(t),
                        r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                    return n.delete(r)
                }, Ju.prototype.Sh = function(t, e) {
                    var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                        r = ea(t),
                        o = gs();
                    return r.Ur({
                        range: n,
                        Dh: !0
                    }, function(t, e, n) {
                        var r = ku(t[1]),
                            i = new Jr(r);
                        o = o.add(i)
                    }).next(function() {
                        return o
                    })
                }, Ju.prototype.Ch = function(t, e) {
                    var n = Pu(e.path),
                        r = IDBKeyRange.bound([n], [iu(n)], !1, !0),
                        i = 0;
                    return ea(t).Ur({
                        index: Ca.documentTargetsIndex,
                        Dh: !0,
                        range: r
                    }, function(t, e, n) {
                        var r = t[0];
                        t[1], 0 !== r && (i++, n.done())
                    }).next(function() {
                        return 0 < i
                    })
                }, Ju.prototype.si = function(t, e) {
                    var n = this;
                    return Zu(t).get(e).next(function(t) {
                        return t ? n.serializer.mh(t) : null
                    })
                }, Ju);

            function Ju(t, e) {
                this.hh = t, this.serializer = e
            }

            function $u(t) {
                this.ih = t
            }

            function Zu(t) {
                return sa.Nr(t, Va.store)
            }

            function ta(t) {
                return sa.Nr(t, Ma.store)
            }

            function ea(t) {
                return sa.Nr(t, Ca.store)
            }
            var na, ra = (ha.prototype.jr = function(t) {
                    if (t.document) return this.Fh.mi(t.document, !!t.hasCommittedMutations);
                    if (t.noDocument) {
                        var e = Jr.st(t.noDocument.path),
                            n = this.Nh(t.noDocument.readTime);
                        return new No(e, n, {
                            hasCommittedMutations: !!t.hasCommittedMutations
                        })
                    }
                    if (t.unknownDocument) {
                        var r = Jr.st(t.unknownDocument.path),
                            i = this.Nh(t.unknownDocument.version);
                        return new Ao(r, i)
                    }
                    return Js()
                }, ha.prototype.sh = function(t, e) {
                    var n = this.Wr(e),
                        r = t.key.path.M().W();
                    if (t instanceof Io) {
                        var i = this.Fh.Ai(t),
                            o = t.hasCommittedMutations;
                        return new ka(null, null, i, o, n, r)
                    }
                    if (t instanceof No) {
                        var s = t.key.path.W(),
                            u = this.$h(t.version),
                            a = t.hasCommittedMutations;
                        return new ka(null, new xa(s, u), null, a, n, r)
                    }
                    if (t instanceof Ao) {
                        var h = t.key.path.W(),
                            c = this.$h(t.version);
                        return new ka(new Oa(h, c), null, null, !0, n, r)
                    }
                    return Js()
                }, ha.prototype.Wr = function(t) {
                    var e = t.C();
                    return [e.seconds, e.nanoseconds]
                }, ha.prototype.zr = function(t) {
                    var e = new Lr(t[0], t[1]);
                    return Vr.v(e)
                }, ha.prototype.$h = function(t) {
                    var e = t.C();
                    return new Na(e.seconds, e.nanoseconds)
                }, ha.prototype.Nh = function(t) {
                    var e = new Lr(t.seconds, t.nanoseconds);
                    return Vr.v(e)
                }, ha.prototype.kh = function(t, e) {
                    var n = this,
                        r = e.baseMutations.map(function(t) {
                            return n.Fh.vi(t)
                        }),
                        i = e.mutations.map(function(t) {
                            return n.Fh.vi(t)
                        });
                    return new Ra(t, e.batchId, e.Tn.toMillis(), r, i)
                }, ha.prototype.Mh = function(t) {
                    var e = this,
                        n = (t.baseMutations || []).map(function(t) {
                            return e.Fh.Fi(t)
                        }),
                        r = t.mutations.map(function(t) {
                            return e.Fh.Fi(t)
                        }),
                        i = Lr.fromMillis(t.localWriteTimeMs);
                    return new au(t.batchId, i, n, r)
                }, ha.prototype.mh = function(t) {
                    var e, n = this.Nh(t.readTime),
                        r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.Nh(t.lastLimboFreeSnapshotVersion) : Vr.min();
                    return e = void 0 !== t.query.documents ? this.Fh.Oi(t.query) : this.Fh.Wi(t.query), new Co(e, t.targetId, 0, t.lastListenSequenceNumber, n, r, ni.fromBase64String(t.resumeToken))
                }, ha.prototype.Ph = function(t) {
                    var e, n = this.$h(t.Ee),
                        r = this.$h(t.lastLimboFreeSnapshotVersion);
                    e = t.target.Lt() ? this.Fh.Li(t.target) : this.Fh.Bi(t.target);
                    var i = t.resumeToken.toBase64();
                    return new Va(t.targetId, t.target.canonicalId(), n, i, t.sequenceNumber, r, e)
                }, ha),
                ia = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
                oa = (n(aa, na = pu), aa),
                sa = (ua.Nr = function(t, e) {
                    if (t instanceof oa) return Ga.Nr(t.xh, e);
                    throw Js()
                }, ua.prototype.start = function() {
                    var e = this;
                    return Ga.Zh(this.Hh, Ta, new Ia(this.serializer)).then(function(t) {
                        return e.to = t, e.eo(e.Bh)
                    }).then(function() {
                        if (!e.isPrimary && !e.allowTabSynchronization) throw new Dr(Rr.FAILED_PRECONDITION, ia);
                        return e.so(), e.io(), e.no(), e.runTransaction("getHighestListenSequenceNumber", "readonly", function(t) {
                            return e.Jh.lh(t)
                        })
                    }).then(function(t) {
                        e.qh = new vu(t, e.Oh)
                    }).then(function() {
                        e.Uh = !0
                    }).catch(function(t) {
                        return e.to && e.to.close(), Promise.reject(t)
                    })
                }, ua.prototype.ro = function(n) {
                    var t = this;
                    return this.Gh = function(e) {
                        return y(t, void 0, void 0, function() {
                            return v(this, function(t) {
                                return this.ho ? [2, n(e)] : [2]
                            })
                        })
                    }, n(this.isPrimary)
                }, ua.prototype.oo = function(n) {
                    var t = this;
                    this.to.ao(function(e) {
                        return y(t, void 0, void 0, function() {
                            return v(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return null === e.newVersion ? [4, n()] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    })
                }, ua.prototype.uo = function(t) {
                    var e = this;
                    this.networkEnabled !== t && (this.networkEnabled = t, this.Tr.co(function() {
                        return y(e, void 0, void 0, function() {
                            return v(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.ho ? [4, this.eo()] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }))
                }, ua.prototype.eo = function(t) {
                    var n = this;
                    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function(e) {
                        return fa(e).put(new Fa(n.clientId, Date.now(), n.networkEnabled, n.inForeground)).next(function() {
                            if (n.isPrimary) return n._o(e).next(function(t) {
                                t || (n.isPrimary = !1, n.Tr.lo(function() {
                                    return n.Gh(!1)
                                }))
                            })
                        }).next(function() {
                            return n.do(e)
                        }).next(function(t) {
                            return n.isPrimary && !t ? n.fo(e).next(function() {
                                return !1
                            }) : !!t && n.To(e).next(function() {
                                return !0
                            })
                        })
                    }).catch(function(t) {
                        if (n.allowTabSynchronization) return Ys("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), !1;
                        if (Ha(t)) return Ys("IndexedDbPersistence", "Failed to extend owner lease: ", t), n.isPrimary;
                        throw t
                    }).then(function(t) {
                        n.isPrimary !== t && n.Tr.lo(function() {
                            return n.Gh(t)
                        }), n.isPrimary = t
                    })
                }, ua.prototype._o = function(t) {
                    var e = this;
                    return ca(t).get(Aa.key).next(function(t) {
                        return cu.resolve(e.Eo(t))
                    })
                }, ua.prototype.wo = function(t) {
                    return fa(t).delete(this.clientId)
                }, ua.prototype.Io = function() {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return !this.isPrimary || this.Ro(this.Kh, 18e5) ? [3, 2] : (this.Kh = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(t) {
                                        var r = ua.Nr(t, Fa.store);
                                        return r.Fr().next(function(t) {
                                            var e = o.Ao(t, 18e5),
                                                n = t.filter(function(t) {
                                                    return -1 === e.indexOf(t)
                                                });
                                            return cu.forEach(n, function(t) {
                                                return r.delete(t.clientId)
                                            }).next(function() {
                                                return n
                                            })
                                        })
                                    }).catch(function() {
                                        return []
                                    })]);
                                case 1:
                                    if (e = t.sent(), this.Xh)
                                        for (n = 0, r = e; n < r.length; n++) i = r[n], this.Xh.removeItem(this.mo(i.clientId));
                                    t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, ua.prototype.no = function() {
                    var t = this;
                    this.jh = this.Tr.yr("client_metadata_refresh", 4e3, function() {
                        return t.eo().then(function() {
                            return t.Io()
                        }).then(function() {
                            return t.no()
                        })
                    })
                }, ua.prototype.Eo = function(t) {
                    return !!t && t.ownerId === this.clientId
                }, ua.prototype.do = function(e) {
                    var i = this;
                    return this.Bh ? cu.resolve(!0) : ca(e).get(Aa.key).next(function(t) {
                        if (null !== t && i.Ro(t.leaseTimestampMs, 5e3) && !i.Po(t.ownerId)) {
                            if (i.Eo(t) && i.networkEnabled) return !0;
                            if (!i.Eo(t)) {
                                if (!t.allowTabSynchronization) throw new Dr(Rr.FAILED_PRECONDITION, ia);
                                return !1
                            }
                        }
                        return !(!i.networkEnabled || !i.inForeground) || fa(e).Fr().next(function(t) {
                            return void 0 === i.Ao(t, 5e3).find(function(t) {
                                if (i.clientId !== t.clientId) {
                                    var e = !i.networkEnabled && t.networkEnabled,
                                        n = !i.inForeground && t.inForeground,
                                        r = i.networkEnabled === t.networkEnabled;
                                    if (e || n && r) return !0
                                }
                                return !1
                            })
                        })
                    }).next(function(t) {
                        return i.isPrimary !== t && Ys("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
                    })
                }, ua.prototype.Vo = function() {
                    return y(this, void 0, void 0, function() {
                        var e = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.Uh = !1, this.po(), this.jh && (this.jh.cancel(), this.jh = null), this.yo(), this.bo(), [4, this.runTransaction("shutdown", "readwrite", function(t) {
                                        return e.fo(t).next(function() {
                                            return e.wo(t)
                                        })
                                    }).catch(function(t) {
                                        Ys("IndexedDbPersistence", "Proceeding with shutdown despite failure: ", t)
                                    })];
                                case 1:
                                    return t.sent(), this.to.close(), this.vo(), [2]
                            }
                        })
                    })
                }, ua.prototype.Ao = function(t, e) {
                    var n = this;
                    return t.filter(function(t) {
                        return n.Ro(t.updateTimeMs, e) && !n.Po(t.clientId)
                    })
                }, ua.prototype.So = function() {
                    var e = this;
                    return this.runTransaction("getActiveClients", "readonly", function(t) {
                        return fa(t).Fr().next(function(t) {
                            return e.Ao(t, 18e5).map(function(t) {
                                return t.clientId
                            })
                        })
                    })
                }, ua.clearPersistence = function(n) {
                    return y(this, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return ua.zh() ? (e = n + ua.Yh, [4, Ga.delete(e)]) : [2, Promise.resolve()];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Object.defineProperty(ua.prototype, "ho", {
                    get: function() {
                        return this.Uh
                    },
                    enumerable: !0,
                    configurable: !0
                }), ua.prototype.Do = function(t) {
                    return ya.Co(t, this.serializer, this.jn, this.hh)
                }, ua.prototype.Fo = function() {
                    return this.Jh
                }, ua.prototype.No = function() {
                    return this.Qn
                }, ua.prototype.$o = function() {
                    return this.jn
                }, ua.prototype.runTransaction = function(e, n, r) {
                    var i = this;
                    Ys("IndexedDbPersistence", "Starting transaction:", e);
                    var o, t = "readonly" === n ? "readonly" : "readwrite";
                    return this.to.runTransaction(t, Ba, function(t) {
                        return o = new oa(t, i.qh ? i.qh.next() : vu.dr), "readwrite-primary" === n ? i._o(o).next(function(t) {
                            return !!t || i.do(o)
                        }).next(function(t) {
                            if (!t) throw Hs("Failed to obtain primary lease for action '" + e + "'."), i.isPrimary = !1, i.Tr.lo(function() {
                                return i.Gh(!1)
                            }), new Dr(Rr.FAILED_PRECONDITION, lu);
                            return r(o)
                        }).next(function(t) {
                            return i.To(o).next(function() {
                                return t
                            })
                        }) : i.ko(o).next(function() {
                            return r(o)
                        })
                    }).then(function(t) {
                        return o.Un(), t
                    })
                }, ua.prototype.ko = function(t) {
                    var e = this;
                    return ca(t).get(Aa.key).next(function(t) {
                        if (null !== t && e.Ro(t.leaseTimestampMs, 5e3) && !e.Po(t.ownerId) && !e.Eo(t) && !(e.Bh || e.allowTabSynchronization && t.allowTabSynchronization)) throw new Dr(Rr.FAILED_PRECONDITION, ia)
                    })
                }, ua.prototype.To = function(t) {
                    var e = new Aa(this.clientId, this.allowTabSynchronization, Date.now());
                    return ca(t).put(Aa.key, e)
                }, ua.zh = function() {
                    return Ga.zh()
                }, ua.Mo = function(t) {
                    var e = t.ii.projectId;
                    return t.ii.ln || (e += "." + t.ii.database), "firestore/" + t.persistenceKey + "/" + e + "/"
                }, ua.prototype.fo = function(t) {
                    var e = this,
                        n = ca(t);
                    return n.get(Aa.key).next(function(t) {
                        return e.Eo(t) ? (Ys("IndexedDbPersistence", "Releasing primary lease."), n.delete(Aa.key)) : cu.resolve()
                    })
                }, ua.prototype.Ro = function(t, e) {
                    var n = Date.now();
                    return !(t < n - e || n < t && (Hs("Detected an update time that is in the future: " + t + " > " + n), 1))
                }, ua.prototype.so = function() {
                    var t = this;
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.Wh = function() {
                        t.Tr.co(function() {
                            return t.inForeground = "visible" === t.document.visibilityState, t.eo()
                        })
                    }, this.document.addEventListener("visibilitychange", this.Wh), this.inForeground = "visible" === this.document.visibilityState)
                }, ua.prototype.yo = function() {
                    this.Wh && (this.document.removeEventListener("visibilitychange", this.Wh), this.Wh = null)
                }, ua.prototype.io = function() {
                    var t, e = this;
                    "function" == typeof(null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Qh = function() {
                        e.po(), e.Tr.co(function() {
                            return e.Vo()
                        })
                    }, this.window.addEventListener("unload", this.Qh))
                }, ua.prototype.bo = function() {
                    this.Qh && (this.window.removeEventListener("unload", this.Qh), this.Qh = null)
                }, ua.prototype.Po = function(t) {
                    var e;
                    try {
                        var n = null !== (null === (e = this.Xh) || void 0 === e ? void 0 : e.getItem(this.mo(t)));
                        return Ys("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n
                    } catch (t) {
                        return Hs("IndexedDbPersistence", "Failed to get zombied client id.", t), !1
                    }
                }, ua.prototype.po = function() {
                    if (this.Xh) try {
                        this.Xh.setItem(this.mo(this.clientId), String(Date.now()))
                    } catch (t) {
                        Hs("Failed to set zombie client id.", t)
                    }
                }, ua.prototype.vo = function() {
                    if (this.Xh) try {
                        this.Xh.removeItem(this.mo(this.clientId))
                    } catch (t) {}
                }, ua.prototype.mo = function(t) {
                    return "firestore_zombie_" + this.persistenceKey + "_" + t
                }, ua);

            function ua(t, e, n, r, i, o, s, u, a) {
                if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.Tr = o, this.Oh = u, this.Bh = a, this.qh = null, this.Uh = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Qh = null, this.inForeground = !1, this.Wh = null, this.jh = null, this.Kh = Number.NEGATIVE_INFINITY, this.Gh = function(t) {
                        return Promise.resolve()
                    }, !ua.zh()) throw new Dr(Rr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                this.hh = new la(this, i), this.Hh = e + ua.Yh, this.serializer = new ra(s), this.document = r.document, this.Jh = new Xu(this.hh, this.serializer), this.jn = new Cu, this.Qn = new Bu(this.serializer, this.jn), this.window = r.window, r.window && r.window.localStorage ? this.Xh = r.window.localStorage : (this.Xh = null, !1 === a && Hs("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
            }

            function aa(t, e) {
                var n = this;
                return (n = na.call(this) || this).xh = t, n.Lh = e, n
            }

            function ha(t) {
                this.Fh = t
            }

            function ca(t) {
                return sa.Nr(t, Aa.store)
            }

            function fa(t) {
                return sa.Nr(t, Fa.store)
            }
            sa.Yh = "main";
            var la = (pa.prototype.Lo = function(t) {
                var n = this.Oo(t);
                return this.db.Fo().Vh(t).next(function(e) {
                    return n.next(function(t) {
                        return e + t
                    })
                })
            }, pa.prototype.Oo = function(t) {
                var e = 0;
                return this.Bo(t, function(t) {
                    e++
                }).next(function() {
                    return e
                })
            }, pa.prototype.js = function(t, e) {
                return this.db.Fo().js(t, e)
            }, pa.prototype.Bo = function(t, n) {
                return this.qo(t, function(t, e) {
                    return n(e)
                })
            }, pa.prototype.yh = function(t, e, n) {
                return da(t, n)
            }, pa.prototype.vh = function(t, e, n) {
                return da(t, n)
            }, pa.prototype.Ah = function(t, e, n) {
                return this.db.Fo().Ah(t, e, n)
            }, pa.prototype.Uo = function(t, e) {
                return da(t, e)
            }, pa.prototype.Qo = function(t, e) {
                return r = e, i = !1, Ea(n = t).Wo(function(t) {
                    return ga(n, t, r).next(function(t) {
                        return t && (i = !0), cu.resolve(!t)
                    })
                }).next(function() {
                    return i
                });
                var n, r, i
            }, pa.prototype.jo = function(r, i) {
                var o = this,
                    s = this.db.No().Yr(),
                    u = [],
                    a = 0;
                return this.qo(r, function(e, t) {
                    if (t <= i) {
                        var n = o.Qo(r, e).next(function(t) {
                            if (!t) return a++, s.Mn(r, e).next(function() {
                                return s.kn(e), ea(r).delete([0, Pu(e.path)])
                            })
                        });
                        u.push(n)
                    }
                }).next(function() {
                    return cu.vn(u)
                }).next(function() {
                    return s.apply(r)
                }).next(function() {
                    return a
                })
            }, pa.prototype.removeTarget = function(t, e) {
                var n = e.we(t.Lh);
                return this.db.Fo().wh(t, n)
            }, pa.prototype.Ko = function(t, e) {
                return da(t, e)
            }, pa.prototype.qo = function(t, o) {
                var s, e = ea(t),
                    u = vu.dr;
                return e.Ur({
                    index: Ca.documentTargetsIndex
                }, function(t, e) {
                    var n = t[0],
                        r = (t[1], e.path),
                        i = e.sequenceNumber;
                    0 === n ? (u !== vu.dr && o(new Jr(ku(s)), u), u = i, s = r) : u = vu.dr
                }).next(function() {
                    u !== vu.dr && o(new Jr(ku(s)), u)
                })
            }, pa.prototype.Go = function(t) {
                return this.db.No().Zr(t)
            }, pa);

            function pa(t, e) {
                this.db = t, this.xo = new yh(this, e)
            }

            function da(t, e) {
                return ea(t).put((n = e, r = t.Lh, new Ca(0, Pu(n.path), r)));
                var n, r
            }
            var ya = (va.Co = function(t, e, n, r) {
                return $s("" !== t.uid), new va(t.t() ? t.uid : "", e, n, r)
            }, va.prototype.Ho = function(t) {
                var r = !0,
                    e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                return wa(t).Ur({
                    index: Ra.userMutationsIndex,
                    range: e
                }, function(t, e, n) {
                    r = !1, n.done()
                }).next(function() {
                    return r
                })
            }, va.prototype.Yo = function(h, c, f, l) {
                var p = this,
                    d = ba(h),
                    y = wa(h);
                return y.add({}).next(function(t) {
                    $s("number" == typeof t);
                    for (var e = new au(t, c, f, l), n = p.serializer.kh(p.userId, e), r = [], i = new ss(function(t, e) {
                            return nu(t.j(), e.j())
                        }), o = 0, s = l; o < s.length; o++) {
                        var u = s[o],
                            a = Da.key(p.userId, u.key.path, t);
                        i = i.add(u.key.path.M()), r.push(y.put(n)), r.push(d.put(a, Da.PLACEHOLDER))
                    }
                    return i.forEach(function(t) {
                        r.push(p.jn.Dr(h, t))
                    }), h.qn(function() {
                        p.zo[t] = e.keys()
                    }), cu.vn(r).next(function() {
                        return e
                    })
                })
            }, va.prototype.Jo = function(t, e) {
                var n = this;
                return wa(t).get(e).next(function(t) {
                    return t ? ($s(t.userId === n.userId), n.serializer.Mh(t)) : null
                })
            }, va.prototype.Xo = function(t, n) {
                var r = this;
                return this.zo[n] ? cu.resolve(this.zo[n]) : this.Jo(t, n).next(function(t) {
                    if (t) {
                        var e = t.keys();
                        return r.zo[n] = e
                    }
                    return null
                })
            }, va.prototype.Zo = function(t, e) {
                var r = this,
                    i = e + 1,
                    n = IDBKeyRange.lowerBound([this.userId, i]),
                    o = null;
                return wa(t).Ur({
                    index: Ra.userMutationsIndex,
                    range: n
                }, function(t, e, n) {
                    e.userId === r.userId && ($s(e.batchId >= i), o = r.serializer.Mh(e)), n.done()
                }).next(function() {
                    return o
                })
            }, va.prototype.ta = function(t) {
                var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                    r = -1;
                return wa(t).Ur({
                    index: Ra.userMutationsIndex,
                    range: e,
                    reverse: !0
                }, function(t, e, n) {
                    r = e.batchId, n.done()
                }).next(function() {
                    return r
                })
            }, va.prototype.ea = function(t) {
                var e = this,
                    n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                return wa(t).Fr(Ra.userMutationsIndex, n).next(function(t) {
                    return t.map(function(t) {
                        return e.serializer.Mh(t)
                    })
                })
            }, va.prototype.Gn = function(u, a) {
                var h = this,
                    t = Da.prefixForPath(this.userId, a.path),
                    e = IDBKeyRange.lowerBound(t),
                    c = [];
                return ba(u).Ur({
                    range: e
                }, function(t, e, n) {
                    var r = t[0],
                        i = t[1],
                        o = t[2],
                        s = ku(i);
                    if (r === h.userId && a.path.isEqual(s)) return wa(u).get(o).next(function(t) {
                        if (!t) throw Js();
                        $s(t.userId === h.userId), c.push(h.serializer.Mh(t))
                    });
                    n.done()
                }).next(function() {
                    return c
                })
            }, va.prototype.Xn = function(r, t) {
                var a = this,
                    h = new ss(nu),
                    i = [];
                return t.forEach(function(u) {
                    var t = Da.prefixForPath(a.userId, u.path),
                        e = IDBKeyRange.lowerBound(t),
                        n = ba(r).Ur({
                            range: e
                        }, function(t, e, n) {
                            var r = t[0],
                                i = t[1],
                                o = t[2],
                                s = ku(i);
                            r === a.userId && u.path.isEqual(s) ? h = h.add(o) : n.done()
                        });
                    i.push(n)
                }), cu.vn(i).next(function() {
                    return a.sa(r, h)
                })
            }, va.prototype.nr = function(t, e) {
                var u = this,
                    a = e.path,
                    h = a.length + 1,
                    n = Da.prefixForPath(this.userId, a),
                    r = IDBKeyRange.lowerBound(n),
                    c = new ss(nu);
                return ba(t).Ur({
                    range: r
                }, function(t, e, n) {
                    var r = t[0],
                        i = t[1],
                        o = t[2],
                        s = ku(i);
                    r === u.userId && a.q(s) ? s.length === h && (c = c.add(o)) : n.done()
                }).next(function() {
                    return u.sa(t, c)
                })
            }, va.prototype.sa = function(e, t) {
                var n = this,
                    r = [],
                    i = [];
                return t.forEach(function(t) {
                    i.push(wa(e).get(t).next(function(t) {
                        if (null === t) throw Js();
                        $s(t.userId === n.userId), r.push(n.serializer.Mh(t))
                    }))
                }), cu.vn(i).next(function() {
                    return r
                })
            }, va.prototype.ia = function(e, n) {
                var r = this;
                return ma(e.xh, this.userId, n).next(function(t) {
                    return e.qn(function() {
                        r.na(n.batchId)
                    }), cu.forEach(t, function(t) {
                        return r.hh.Uo(e, t)
                    })
                })
            }, va.prototype.na = function(t) {
                delete this.zo[t]
            }, va.prototype.ra = function(n) {
                var o = this;
                return this.Ho(n).next(function(t) {
                    if (!t) return cu.resolve();
                    var e = IDBKeyRange.lowerBound(Da.prefixForUser(o.userId)),
                        i = [];
                    return ba(n).Ur({
                        range: e
                    }, function(t, e, n) {
                        if (t[0] === o.userId) {
                            var r = ku(t[1]);
                            i.push(r)
                        } else n.done()
                    }).next(function() {
                        $s(0 === i.length)
                    })
                })
            }, va.prototype.Ch = function(t, e) {
                return ga(t, this.userId, e)
            }, va.prototype.ha = function(t) {
                var e = this;
                return Ea(t).get(this.userId).next(function(t) {
                    return t || new Sa(e.userId, -1, "")
                })
            }, va);

            function va(t, e, n, r) {
                this.userId = t, this.serializer = e, this.jn = n, this.hh = r, this.zo = {}
            }

            function ga(t, o, e) {
                var n = Da.prefixForPath(o, e.path),
                    s = n[1],
                    r = IDBKeyRange.lowerBound(n),
                    u = !1;
                return ba(t).Ur({
                    range: r,
                    Dh: !0
                }, function(t, e, n) {
                    var r = t[0],
                        i = t[1];
                    t[2], r === o && i === s && (u = !0), n.done()
                }).next(function() {
                    return u
                })
            }

            function ma(t, e, n) {
                var r = t.store(Ra.store),
                    i = t.store(Da.store),
                    o = [],
                    s = IDBKeyRange.only(n.batchId),
                    u = 0,
                    a = r.Ur({
                        range: s
                    }, function(t, e, n) {
                        return u++, n.delete()
                    });
                o.push(a.next(function() {
                    $s(1 === u)
                }));
                for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
                    var l = f[c],
                        p = Da.key(e, l.key.path, n.batchId);
                    o.push(i.delete(p)), h.push(l.key)
                }
                return cu.vn(o).next(function() {
                    return h
                })
            }

            function wa(t) {
                return sa.Nr(t, Ra.store)
            }

            function ba(t) {
                return sa.Nr(t, Da.store)
            }

            function Ea(t) {
                return sa.Nr(t, Sa.store)
            }
            var Ta = 10,
                Ia = (_a.prototype.createOrUpgrade = function(n, r, t, e) {
                    var i = this;
                    $s(t < e && 0 <= t && e <= Ta);
                    var o, s = new Xa(r);
                    t < 1 && 1 <= e && (n.createObjectStore(Aa.store), (o = n).createObjectStore(Sa.store, {
                        keyPath: Sa.keyPath
                    }), o.createObjectStore(Ra.store, {
                        keyPath: Ra.keyPath,
                        autoIncrement: !0
                    }).createIndex(Ra.userMutationsIndex, Ra.userMutationsKeyPath, {
                        unique: !0
                    }), o.createObjectStore(Da.store), ja(n), n.createObjectStore(ka.store));
                    var u, a = cu.resolve();
                    return t < 3 && 3 <= e && (0 !== t && ((u = n).deleteObjectStore(Ca.store), u.deleteObjectStore(Va.store), u.deleteObjectStore(Ma.store), ja(n)), a = a.next(function() {
                        return t = s.store(Ma.store), e = new Ma(0, 0, Vr.min().C(), 0), t.put(Ma.key, e);
                        var t, e
                    })), t < 4 && 4 <= e && (0 !== t && (a = a.next(function() {
                        return r = n, (i = s).store(Ra.store).Fr().next(function(t) {
                            r.deleteObjectStore(Ra.store), r.createObjectStore(Ra.store, {
                                keyPath: Ra.keyPath,
                                autoIncrement: !0
                            }).createIndex(Ra.userMutationsIndex, Ra.userMutationsKeyPath, {
                                unique: !0
                            });
                            var e = i.store(Ra.store),
                                n = t.map(function(t) {
                                    return e.put(t)
                                });
                            return cu.vn(n)
                        });
                        var r, i
                    })), a = a.next(function() {
                        n.createObjectStore(Fa.store, {
                            keyPath: Fa.keyPath
                        })
                    })), t < 5 && 5 <= e && (a = a.next(function() {
                        return i.removeAcknowledgedMutations(s)
                    })), t < 6 && 6 <= e && (a = a.next(function() {
                        return n.createObjectStore(La.store), i.addDocumentGlobal(s)
                    })), t < 7 && 7 <= e && (a = a.next(function() {
                        return i.ensureSequenceNumbers(s)
                    })), t < 8 && 8 <= e && (a = a.next(function() {
                        return i.createCollectionParentIndex(n, s)
                    })), t < 9 && 9 <= e && (a = a.next(function() {
                        var t, e;
                        (e = n).objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges"), (t = r.objectStore(ka.store)).createIndex(ka.readTimeIndex, ka.readTimeIndexPath, {
                            unique: !1
                        }), t.createIndex(ka.collectionReadTimeIndex, ka.collectionReadTimeIndexPath, {
                            unique: !1
                        })
                    })), t < 10 && 10 <= e && (a = a.next(function() {
                        return i.rewriteCanonicalIds(s)
                    })), a
                }, _a.prototype.addDocumentGlobal = function(e) {
                    var n = 0;
                    return e.store(ka.store).Ur(function(t, e) {
                        n += Ku(e)
                    }).next(function() {
                        var t = new La(n);
                        return e.store(La.store).put(La.key, t)
                    })
                }, _a.prototype.removeAcknowledgedMutations = function(r) {
                    var i = this,
                        t = r.store(Sa.store),
                        e = r.store(Ra.store);
                    return t.Fr().next(function(t) {
                        return cu.forEach(t, function(n) {
                            var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                            return e.Fr(Ra.userMutationsIndex, t).next(function(t) {
                                return cu.forEach(t, function(t) {
                                    $s(t.userId === n.userId);
                                    var e = i.serializer.Mh(t);
                                    return ma(r, n.userId, e).next(function() {})
                                })
                            })
                        })
                    })
                }, _a.prototype.ensureSequenceNumbers = function(t) {
                    var s = t.store(Ca.store),
                        e = t.store(ka.store);
                    return t.store(Ma.store).get(Ma.key).next(function(i) {
                        var o = [];
                        return e.Ur(function(t, e) {
                            var n = new Mr(t),
                                r = [0, Pu(n)];
                            o.push(s.get(r).next(function(t) {
                                return t ? cu.resolve() : (e = n, s.put(new Ca(0, Pu(e), i.highestListenSequenceNumber)));
                                var e
                            }))
                        }).next(function() {
                            return cu.vn(o)
                        })
                    })
                }, _a.prototype.createCollectionParentIndex = function(t, e) {
                    function i(t) {
                        if (o.add(t)) {
                            var e = t.O(),
                                n = t.M();
                            return r.put({
                                collectionId: e,
                                parent: Pu(n)
                            })
                        }
                    }
                    t.createObjectStore(Ua.store, {
                        keyPath: Ua.keyPath
                    });
                    var r = e.store(Ua.store),
                        o = new Vu;
                    return e.store(ka.store).Ur({
                        Dh: !0
                    }, function(t, e) {
                        var n = new Mr(t);
                        return i(n.M())
                    }).next(function() {
                        return e.store(Da.store).Ur({
                            Dh: !0
                        }, function(t, e) {
                            t[0];
                            var n = t[1],
                                r = (t[2], ku(n));
                            return i(r.M())
                        })
                    })
                }, _a.prototype.rewriteCanonicalIds = function(t) {
                    var i = this,
                        o = t.store(Va.store);
                    return o.Ur(function(t, e) {
                        var n = i.serializer.mh(e),
                            r = i.serializer.Ph(n);
                        return o.put(r)
                    })
                }, _a),
                Na = function(t, e) {
                    this.seconds = t, this.nanoseconds = e
                },
                Aa = function(t, e, n) {
                    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
                };

            function _a(t) {
                this.serializer = t
            }
            Aa.store = "owner", Aa.key = "owner";
            var Sa = function(t, e, n) {
                this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
            };
            Sa.store = "mutationQueues", Sa.keyPath = "userId";
            var Ra = function(t, e, n, r, i) {
                this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
            };
            Ra.store = "mutations", Ra.keyPath = "batchId", Ra.userMutationsIndex = "userMutationsIndex", Ra.userMutationsKeyPath = ["userId", "batchId"];
            var Da = (Pa.prefixForUser = function(t) {
                return [t]
            }, Pa.prefixForPath = function(t, e) {
                return [t, Pu(e)]
            }, Pa.key = function(t, e, n) {
                return [t, Pu(e), n]
            }, Pa);

            function Pa() {}
            Da.store = "documentMutations", Da.PLACEHOLDER = new Da;
            var xa = function(t, e) {
                    this.path = t, this.readTime = e
                },
                Oa = function(t, e) {
                    this.path = t, this.version = e
                },
                ka = function(t, e, n, r, i, o) {
                    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o
                };
            ka.store = "remoteDocuments", ka.readTimeIndex = "readTimeIndex", ka.readTimeIndexPath = "readTime", ka.collectionReadTimeIndex = "collectionReadTimeIndex", ka.collectionReadTimeIndexPath = ["parentPath", "readTime"];
            var La = function(t) {
                this.byteSize = t
            };
            La.store = "remoteDocumentGlobal", La.key = "remoteDocumentGlobalKey";
            var Va = function(t, e, n, r, i, o, s) {
                this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s
            };
            Va.store = "targets", Va.keyPath = "targetId", Va.queryTargetsIndexName = "queryTargetsIndex", Va.queryTargetsKeyPath = ["canonicalId", "targetId"];
            var Ca = function(t, e, n) {
                this.targetId = t, this.path = e, this.sequenceNumber = n
            };
            Ca.store = "targetDocuments", Ca.keyPath = ["targetId", "path"], Ca.documentTargetsIndex = "documentTargetsIndex", Ca.documentTargetsKeyPath = ["path", "targetId"];
            var Ma = function(t, e, n, r) {
                this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
            };
            Ma.key = "targetGlobalKey", Ma.store = "targetGlobal";
            var Ua = function(t, e) {
                this.collectionId = t, this.parent = e
            };

            function ja(t) {
                t.createObjectStore(Ca.store, {
                    keyPath: Ca.keyPath
                }).createIndex(Ca.documentTargetsIndex, Ca.documentTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(Va.store, {
                    keyPath: Va.keyPath
                }).createIndex(Va.queryTargetsIndexName, Va.queryTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(Ma.store)
            }
            Ua.store = "collectionParents", Ua.keyPath = ["collectionId", "parent"];
            var Fa = function(t, e, n, r) {
                this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r
            };
            Fa.store = "clientMetadata", Fa.keyPath = "clientId";
            var qa, Ba = d(d(d([Sa.store, Ra.store, Da.store, ka.store, Va.store, Aa.store, Ma.store, Ca.store], [Fa.store]), [La.store]), [Ua.store]),
                Ga = (Ya.Zh = function(o, t, s) {
                    return Ys("SimpleDb", "Opening database:", o), new cu(function(n, r) {
                        var i = indexedDB.open(o, t);
                        i.onsuccess = function(t) {
                            var e = t.target.result;
                            n(new Ya(e))
                        }, i.onblocked = function() {
                            r(new Dr(Rr.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                        }, i.onerror = function(t) {
                            var e = t.target.error;
                            "VersionError" === e.name ? r(new Dr(Rr.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(e)
                        }, i.onupgradeneeded = function(t) {
                            Ys("SimpleDb", 'Database "' + o + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            s.createOrUpgrade(e, i.transaction, t.oldVersion, Ta).next(function() {
                                Ys("SimpleDb", "Database upgrade to version " + Ta + " complete")
                            })
                        }
                    }).yn()
                }, Ya.delete = function(t) {
                    return Ys("SimpleDb", "Removing database:", t), th(window.indexedDB.deleteDatabase(t)).yn()
                }, Ya.zh = function() {
                    if ("undefined" == typeof indexedDB) return !1;
                    if (Ya.aa()) return !0;
                    var t = g(),
                        e = Ya.oa(t),
                        n = 0 < e && e < 10,
                        r = Ya.ua(t),
                        i = 0 < r && r < 4.5;
                    return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || i)
                }, Ya.aa = function() {
                    var t;
                    return "undefined" != typeof __PRIVATE_process && "YES" === (null === (t = __PRIVATE_process.__PRIVATE_env) || void 0 === t ? void 0 : t.ca)
                }, Ya.Nr = function(t, e) {
                    return t.store(e)
                }, Ya.oa = function(t) {
                    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                        n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }, Ya.ua = function(t) {
                    var e = t.match(/Android ([\d.]+)/i),
                        n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }, Ya.prototype.ao = function(e) {
                    this.db.onversionchange = function(t) {
                        return e(t)
                    }
                }, Ya.prototype.runTransaction = function(r, h, c) {
                    return y(this, void 0, void 0, function() {
                        var s, u, e, a, n;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    s = "readonly" === r, u = 0, e = function() {
                                        var e, n, r, i, o;
                                        return v(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    ++u, e = Xa.open(a.db, s ? "readonly" : "readwrite", h), t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]), n = c(e).catch(function(t) {
                                                        return e.abort(t), cu.reject(t)
                                                    }).yn(), r = {}, n.catch(function() {}), [4, e._a];
                                                case 2:
                                                    return [2, (r.value = (t.sent(), n), r)];
                                                case 3:
                                                    return i = t.sent(), o = "FirebaseError" !== i.name && u < 3, Ys("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", i.message, o), o ? [3, 4] : [2, {
                                                        value: Promise.reject(i)
                                                    }];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    }, a = this, t.label = 1;
                                case 1:
                                    return [5, e()];
                                case 2:
                                    if ("object" == typeof(n = t.sent())) return [2, n.value];
                                    t.label = 3;
                                case 3:
                                    return [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, Ya.prototype.close = function() {
                    this.db.close()
                }, Ya),
                za = (Object.defineProperty(Ka.prototype, "Pn", {
                    get: function() {
                        return this.da
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Ka.prototype, "Ta", {
                    get: function() {
                        return this.fa
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Ka.prototype, "cursor", {
                    set: function(t) {
                        this.la = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ka.prototype.done = function() {
                    this.da = !0
                }, Ka.prototype.Qr = function(t) {
                    this.fa = t
                }, Ka.prototype.delete = function() {
                    return th(this.la.delete())
                }, Ka),
                Wa = (n(Qa, qa = Dr), Qa);

            function Qa(t) {
                var e = this;
                return (e = qa.call(this, Rr.UNAVAILABLE, "IndexedDB transaction failed: " + t) || this).name = "IndexedDbTransactionError", e
            }

            function Ka(t) {
                this.la = t, this.da = !1, this.fa = null
            }

            function Ya(t) {
                this.db = t, 12.2 === Ya.oa(g()) && Hs("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
            }

            function Ha(t) {
                return "IndexedDbTransactionError" === t.name
            }
            var Xa = (Za.open = function(t, e, n) {
                    return new Za(t.transaction(n, e))
                }, Object.defineProperty(Za.prototype, "_a", {
                    get: function() {
                        return this.Ea.promise
                    },
                    enumerable: !0,
                    configurable: !0
                }), Za.prototype.abort = function(t) {
                    t && this.Ea.reject(t), this.aborted || (Ys("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                }, Za.prototype.store = function(t) {
                    var e = this.transaction.objectStore(t);
                    return new Ja(e)
                }, Za),
                Ja = ($a.prototype.put = function(t, e) {
                    return th(void 0 !== e ? (Ys("SimpleDb", "PUT", this.store.name, t, e), this.store.put(e, t)) : (Ys("SimpleDb", "PUT", this.store.name, "<auto-key>", t), this.store.put(t)))
                }, $a.prototype.add = function(t) {
                    return Ys("SimpleDb", "ADD", this.store.name, t, t), th(this.store.add(t))
                }, $a.prototype.get = function(e) {
                    var n = this;
                    return th(this.store.get(e)).next(function(t) {
                        return void 0 === t && (t = null), Ys("SimpleDb", "GET", n.store.name, e, t), t
                    })
                }, $a.prototype.delete = function(t) {
                    return Ys("SimpleDb", "DELETE", this.store.name, t), th(this.store.delete(t))
                }, $a.prototype.count = function() {
                    return Ys("SimpleDb", "COUNT", this.store.name), th(this.store.count())
                }, $a.prototype.Fr = function(t, e) {
                    var n = this.cursor(this.options(t, e)),
                        r = [];
                    return this.wa(n, function(t, e) {
                        r.push(e)
                    }).next(function() {
                        return r
                    })
                }, $a.prototype.Ia = function(t, e) {
                    Ys("SimpleDb", "DELETE ALL", this.store.name);
                    var n = this.options(t, e);
                    n.Dh = !1;
                    var r = this.cursor(n);
                    return this.wa(r, function(t, e, n) {
                        return n.delete()
                    })
                }, $a.prototype.Ur = function(t, e) {
                    var n;
                    e ? n = t : (n = {}, e = t);
                    var r = this.cursor(n);
                    return this.wa(r, e)
                }, $a.prototype.Wo = function(i) {
                    var t = this.cursor({});
                    return new cu(function(n, r) {
                        t.onerror = function(t) {
                            var e = nh(t.target.error);
                            r(e)
                        }, t.onsuccess = function(t) {
                            var e = t.target.result;
                            e ? i(e.primaryKey, e.value).next(function(t) {
                                t ? e.continue() : n()
                            }) : n()
                        }
                    })
                }, $a.prototype.wa = function(t, s) {
                    var u = [];
                    return new cu(function(o, e) {
                        t.onerror = function(t) {
                            e(t.target.error)
                        }, t.onsuccess = function(t) {
                            var e = t.target.result;
                            if (e) {
                                var n = new za(e),
                                    r = s(e.primaryKey, e.value, n);
                                if (r instanceof cu) {
                                    var i = r.catch(function(t) {
                                        return n.done(), cu.reject(t)
                                    });
                                    u.push(i)
                                }
                                n.Pn ? o() : null === n.Ta ? e.continue() : e.continue(n.Ta)
                            } else o()
                        }
                    }).next(function() {
                        return cu.vn(u)
                    })
                }, $a.prototype.options = function(t, e) {
                    var n = void 0;
                    return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
                        index: n,
                        range: e
                    }
                }, $a.prototype.cursor = function(t) {
                    var e = "next";
                    if (t.reverse && (e = "prev"), t.index) {
                        var n = this.store.index(t.index);
                        return t.Dh ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                    }
                    return this.store.openCursor(t.range, e)
                }, $a);

            function $a(t) {
                this.store = t
            }

            function Za(t) {
                var n = this;
                this.transaction = t, this.aborted = !1, this.Ea = new Su, this.transaction.oncomplete = function() {
                    n.Ea.resolve()
                }, this.transaction.onabort = function() {
                    t.error ? n.Ea.reject(new Wa(t.error)) : n.Ea.resolve()
                }, this.transaction.onerror = function(t) {
                    var e = nh(t.target.error);
                    n.Ea.reject(new Wa(e))
                }
            }

            function th(t) {
                return new cu(function(n, r) {
                    t.onsuccess = function(t) {
                        var e = t.target.result;
                        n(e)
                    }, t.onerror = function(t) {
                        var e = nh(t.target.error);
                        r(e)
                    }
                })
            }
            var eh = !1;

            function nh(t) {
                var e = Ga.oa(g());
                if (12.2 <= e && e < 13) {
                    var n = "An internal error was encountered in the Indexed Database server";
                    if (0 <= t.message.indexOf(n)) {
                        var r = new Dr("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
                        return eh || (eh = !0, setTimeout(function() {
                            throw r
                        }, 0)), r
                    }
                }
                return t
            }
            var rh = (sh.Va = function(t, e, n, r, i) {
                    var o = new sh(t, e, Date.now() + n, r, i);
                    return o.start(n), o
                }, sh.prototype.start = function(t) {
                    var e = this;
                    this.ga = setTimeout(function() {
                        return e.pa()
                    }, t)
                }, sh.prototype.vr = function() {
                    return this.pa()
                }, sh.prototype.cancel = function(t) {
                    null !== this.ga && (this.clearTimeout(), this.Pa.reject(new Dr(Rr.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
                }, sh.prototype.pa = function() {
                    var e = this;
                    this.Ra.co(function() {
                        return null !== e.ga ? (e.clearTimeout(), e.op().then(function(t) {
                            return e.Pa.resolve(t)
                        })) : Promise.resolve()
                    })
                }, sh.prototype.clearTimeout = function() {
                    null !== this.ga && (this.ma(this), clearTimeout(this.ga), this.ga = null)
                }, sh),
                ih = (Object.defineProperty(oh.prototype, "ka", {
                    get: function() {
                        return this.va
                    },
                    enumerable: !0,
                    configurable: !0
                }), oh.prototype.co = function(t) {
                    this.enqueue(t)
                }, oh.prototype.Ma = function(t) {
                    this.xa(), this.La(t)
                }, oh.prototype.Oa = function(t) {
                    return this.xa(), this.La(t)
                }, oh.prototype.Ba = function(n) {
                    return y(this, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.xa(), this.va ? [3, 2] : (this.va = !0, (e = zs.nt().window) && e.removeEventListener("visibilitychange", this.$a), [4, this.Oa(n)]);
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, oh.prototype.enqueue = function(t) {
                    return this.xa(), this.va ? new Promise(function(t) {}) : this.La(t)
                }, oh.prototype.lo = function(i) {
                    var t = this;
                    this.xa(), this.va || (this.ba = this.ba.then(function() {
                        var n = new Su,
                            r = function() {
                                return y(t, void 0, void 0, function() {
                                    var e;
                                    return v(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return t.trys.push([0, 2, , 3]), [4, i()];
                                            case 1:
                                                return t.sent(), n.resolve(), this.Na.reset(), [3, 3];
                                            case 2:
                                                if (!Ha(e = t.sent())) throw n.resolve(), e;
                                                return Ys("AsyncQueue", "Operation failed with retryable error: " + e), this.Na.gr(r), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            };
                        return t.co(r), n.promise
                    }))
                }, oh.prototype.La = function(t) {
                    var r = this,
                        e = this.ya.then(function() {
                            return r.Ca = !0, t().catch(function(t) {
                                throw r.Da = t, r.Ca = !1, Hs("INTERNAL UNHANDLED ERROR: ", (n = (e = t).message || "", e.stack && (n = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), n)), t;
                                var e, n
                            }).then(function(t) {
                                return r.Ca = !1, t
                            })
                        });
                    return this.ya = e
                }, oh.prototype.yr = function(t, e, n) {
                    var r = this;
                    this.xa(), -1 < this.Fa.indexOf(t) && (e = 0);
                    var i = rh.Va(this, t, e, n, function(t) {
                        return r.qa(t)
                    });
                    return this.Sa.push(i), i
                }, oh.prototype.xa = function() {
                    this.Da && Js()
                }, oh.prototype.Ua = function() {}, oh.prototype.Qa = function() {
                    return y(this, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, e = this.ya];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    if (e !== this.ya) return [3, 0];
                                    t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, oh.prototype.Wa = function(t) {
                    for (var e = 0, n = this.Sa; e < n.length; e++)
                        if (n[e].Er === t) return !0;
                    return !1
                }, oh.prototype.ja = function(r) {
                    var i = this;
                    return this.Qa().then(function() {
                        i.Sa.sort(function(t, e) {
                            return t.Aa - e.Aa
                        });
                        for (var t = 0, e = i.Sa; t < e.length; t++) {
                            var n = e[t];
                            if (n.vr(), "all" !== r && n.Er === r) break
                        }
                        return i.Qa()
                    })
                }, oh.prototype.Ka = function(t) {
                    this.Fa.push(t)
                }, oh.prototype.qa = function(t) {
                    var e = this.Sa.indexOf(t);
                    this.Sa.splice(e, 1)
                }, oh);

            function oh() {
                var t = this;
                this.ya = Promise.resolve(), this.ba = Promise.resolve(), this.va = !1, this.Sa = [], this.Da = null, this.Ca = !1, this.Fa = [], this.Na = new Ru(this, "async_queue_retry"), this.$a = function() {
                    return t.Na.br()
                };
                var e = zs.nt().window;
                e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.$a)
            }

            function sh(t, e, n, r, i) {
                this.Ra = t, this.Er = e, this.Aa = n, this.op = r, this.ma = i, this.Pa = new Su, this.then = this.Pa.promise.then.bind(this.Pa.promise), this.Pa.promise.catch(function(t) {})
            }

            function uh(t, e) {
                if (Hs("AsyncQueue", e + ": " + t), Ha(t)) return new Dr(Rr.UNAVAILABLE, e + ": " + t);
                throw t
            }

            function ah(t, e) {
                var n = t[0],
                    r = t[1],
                    i = e[0],
                    o = e[1],
                    s = nu(n, i);
                return 0 === s ? nu(r, o) : s
            }
            var hh = (ph.prototype.Ha = function() {
                    return ++this.za
                }, ph.prototype.Ya = function(t) {
                    var e = [t, this.Ha()];
                    if (this.buffer.size < this.Ga) this.buffer = this.buffer.add(e);
                    else {
                        var n = this.buffer.last();
                        ah(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                    }
                }, Object.defineProperty(ph.prototype, "maxValue", {
                    get: function() {
                        return this.buffer.last()[0]
                    },
                    enumerable: !0,
                    configurable: !0
                }), ph),
                ch = {
                    Ja: !1,
                    Xa: 0,
                    Za: 0,
                    tu: 0
                },
                fh = (lh.nu = function(t) {
                    return new lh(t, lh.ru, lh.hu)
                }, lh);

            function lh(t, e, n) {
                this.eu = t, this.su = e, this.iu = n
            }

            function ph(t) {
                this.Ga = t, this.buffer = new ss(ah), this.za = 0
            }
            fh.ou = -1, fh.au = 1048576, fh.uu = 41943040, fh.ru = 10, fh.hu = 1e3, fh.cu = new fh(fh.uu, fh.ru, fh.hu), fh.DISABLED = new fh(fh.ou, 0, 0);
            var dh = (wh.prototype.start = function(t) {
                    this.xo.du.eu !== fh.ou && this.fu(t)
                }, wh.prototype.stop = function() {
                    this.lu && (this.lu.cancel(), this.lu = null)
                }, Object.defineProperty(wh.prototype, "ho", {
                    get: function() {
                        return null !== this.lu
                    },
                    enumerable: !0,
                    configurable: !0
                }), wh.prototype.fu = function(n) {
                    var t = this,
                        e = this._u ? 3e5 : 6e4;
                    Ys("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.lu = this.Ra.yr("lru_garbage_collection", e, function() {
                        return y(t, void 0, void 0, function() {
                            var e;
                            return v(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.lu = null, this._u = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 7]), [4, n.Tu(this.xo)];
                                    case 2:
                                        return t.sent(), [3, 7];
                                    case 3:
                                        return Ha(e = t.sent()) ? (Ys("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
                                    case 4:
                                        return [4, Ih(e)];
                                    case 5:
                                        t.sent(), t.label = 6;
                                    case 6:
                                        return [3, 7];
                                    case 7:
                                        return [4, this.fu(n)];
                                    case 8:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    })
                }, wh),
                yh = (mh.prototype.wu = function(t, e) {
                    return this.Eu.Lo(t).next(function(t) {
                        return Math.floor(e / 100 * t)
                    })
                }, mh.prototype.Iu = function(t, e) {
                    var n = this;
                    if (0 === e) return cu.resolve(vu.dr);
                    var r = new hh(e);
                    return this.Eu.js(t, function(t) {
                        return r.Ya(t.sequenceNumber)
                    }).next(function() {
                        return n.Eu.Bo(t, function(t) {
                            return r.Ya(t)
                        })
                    }).next(function() {
                        return r.maxValue
                    })
                }, mh.prototype.Ah = function(t, e, n) {
                    return this.Eu.Ah(t, e, n)
                }, mh.prototype.jo = function(t, e) {
                    return this.Eu.jo(t, e)
                }, mh.prototype.Ru = function(e, n) {
                    var r = this;
                    return this.du.eu === fh.ou ? (Ys("LruGarbageCollector", "Garbage collection skipped; disabled"), cu.resolve(ch)) : this.Go(e).next(function(t) {
                        return t < r.du.eu ? (Ys("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.du.eu), ch) : r.Au(e, n)
                    })
                }, mh.prototype.Go = function(t) {
                    return this.Eu.Go(t)
                }, mh.prototype.Au = function(e, n) {
                    var r, i, o, s, u, a, h, c = this,
                        f = Date.now();
                    return this.wu(e, this.du.su).next(function(t) {
                        return i = t > c.du.iu ? (Ys("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.du.iu + " from " + t), c.du.iu) : t, s = Date.now(), c.Iu(e, i)
                    }).next(function(t) {
                        return r = t, u = Date.now(), c.Ah(e, r, n)
                    }).next(function(t) {
                        return o = t, a = Date.now(), c.jo(e, r)
                    }).next(function(t) {
                        return h = Date.now(), Ks() <= p.DEBUG && Ys("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - f) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (h - a) + "ms\nTotal Duration: " + (h - f) + "ms"), cu.resolve({
                            Ja: !0,
                            Xa: i,
                            Za: o,
                            tu: t
                        })
                    })
                }, mh),
                vh = (gh.prototype.start = function() {
                    return Promise.resolve()
                }, gh.prototype.vu = function(i) {
                    return y(this, void 0, void 0, function() {
                        var e, m, n, r = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = this.Wn, m = this.yu, [4, this.persistence.runTransaction("Handle user change", "readonly", function(v) {
                                        var g;
                                        return r.Wn.ea(v).next(function(t) {
                                            return g = t, e = r.persistence.Do(i), m = new du(r.pu, e, r.persistence.$o()), e.ea(v)
                                        }).next(function(t) {
                                            for (var e = [], n = [], r = gs(), i = 0, o = g; i < o.length; i++) {
                                                var s = o[i];
                                                e.push(s.batchId);
                                                for (var u = 0, a = s.mutations; u < a.length; u++) {
                                                    var h = a[u];
                                                    r = r.add(h.key)
                                                }
                                            }
                                            for (var c = 0, f = t; c < f.length; c++) {
                                                var l = f[c];
                                                n.push(l.batchId);
                                                for (var p = 0, d = l.mutations; p < d.length; p++) {
                                                    var y = d[p];
                                                    r = r.add(y.key)
                                                }
                                            }
                                            return m.Yn(v, r).next(function(t) {
                                                return {
                                                    Su: t,
                                                    Du: e,
                                                    Cu: n
                                                }
                                            })
                                        })
                                    })];
                                case 1:
                                    return n = t.sent(), [2, (this.Wn = e, this.yu = m, this.mu.bu(this.yu), n)]
                            }
                        })
                    })
                }, gh.prototype.Fu = function(u) {
                    var a, h = this,
                        c = Lr.now(),
                        t = u.reduce(function(t, e) {
                            return t.add(e.key)
                        }, gs());
                    return this.persistence.runTransaction("Locally write mutations", "readwrite", function(s) {
                        return h.yu.Yn(s, t).next(function(t) {
                            a = t;
                            for (var e = [], n = 0, r = u; n < r.length; n++) {
                                var i = r[n],
                                    o = i.Pt(a.get(i.key));
                                null != o && e.push(new Wi(i.key, o, ao(o.proto.mapValue), Bi.exists(!0)))
                            }
                            return h.Wn.Yo(s, c, e, u)
                        })
                    }).then(function(t) {
                        var e = t.wn(a);
                        return {
                            batchId: t.batchId,
                            Dn: e
                        }
                    })
                }, gh.prototype.Nu = function(r) {
                    var i = this;
                    return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t) {
                        var e = r.batch.keys(),
                            n = i.pu.Yr({
                                Xr: !0
                            });
                        return i.$u(t, r, n).next(function() {
                            return n.apply(t)
                        }).next(function() {
                            return i.Wn.ra(t)
                        }).next(function() {
                            return i.yu.Yn(t, e)
                        })
                    })
                }, gh.prototype.ku = function(t) {
                    var r = this;
                    return this.persistence.runTransaction("Reject batch", "readwrite-primary", function(e) {
                        var n;
                        return r.Wn.Jo(e, t).next(function(t) {
                            return $s(null !== t), n = t.keys(), r.Wn.ia(e, t)
                        }).next(function() {
                            return r.Wn.ra(e)
                        }).next(function() {
                            return r.yu.Yn(e, n)
                        })
                    })
                }, gh.prototype.ta = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function(t) {
                        return e.Wn.ta(t)
                    })
                }, gh.prototype._h = function() {
                    var e = this;
                    return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t) {
                        return e.Jh._h(t)
                    })
                }, gh.prototype.Mu = function(a) {
                    var h = this,
                        c = a.Ee,
                        f = this.Pu;
                    return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function(o) {
                        var i = h.pu.Yr({
                            Xr: !0
                        });
                        f = h.Pu;
                        var s = [];
                        a.as.forEach(function(t, e) {
                            var n = f.get(e);
                            if (n) {
                                s.push(h.Jh.bh(o, t.ws, e).next(function() {
                                    return h.Jh.ph(o, t.Ts, e)
                                }));
                                var r = t.resumeToken;
                                if (0 < r.rt()) {
                                    var i = n.Ie(r, c).we(o.Lh);
                                    f = f.Ae(e, i), gh.xu(n, i, t) && s.push(h.Jh.wh(o, i))
                                }
                            }
                        });
                        var u = fs(),
                            n = gs();
                        if (a.cs.forEach(function(t, e) {
                                n = n.add(t)
                            }), s.push(i.getEntries(o, n).next(function(r) {
                                a.cs.forEach(function(t, e) {
                                    var n = r.get(t);
                                    e instanceof No && e.version.isEqual(Vr.min()) ? (i.kn(t, c), u = u.Ae(t, e)) : null == n || 0 < e.version.S(n.version) || 0 === e.version.S(n.version) && n.hasPendingWrites ? (i.Nn(e, c), u = u.Ae(t, e)) : Ys("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version), a._s.has(t) && s.push(h.persistence.hh.Ko(o, t))
                                })
                            })), !c.isEqual(Vr.min())) {
                            var t = h.Jh._h(o).next(function(t) {
                                return h.Jh.dh(o, o.Lh, c)
                            });
                            s.push(t)
                        }
                        return cu.vn(s).next(function() {
                            return i.apply(o)
                        }).next(function() {
                            return h.yu.Jn(o, u)
                        })
                    }).then(function(t) {
                        return h.Pu = f, t
                    })
                }, gh.xu = function(t, e, n) {
                    return $s(0 < e.resumeToken.rt()), 0 === t.resumeToken.rt() || e.Ee.D() - t.Ee.D() >= this.Lu || 0 < n.Ts.size + n.Es.size + n.ws.size
                }, gh.prototype.Ou = function(c) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s, u, a, h = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(n) {
                                        return cu.forEach(c, function(e) {
                                            return cu.forEach(e.hr, function(t) {
                                                return h.persistence.hh.yh(n, e.targetId, t)
                                            }).next(function() {
                                                return cu.forEach(e.or, function(t) {
                                                    return h.persistence.hh.vh(n, e.targetId, t)
                                                })
                                            })
                                        })
                                    })];
                                case 1:
                                    return t.sent(), [3, 3];
                                case 2:
                                    if (!Ha(e = t.sent())) throw e;
                                    return Ys("LocalStore", "Failed to update sequence numbers: " + e), [3, 3];
                                case 3:
                                    for (n = 0, r = c; n < r.length; n++) i = r[n], o = i.targetId, i.fromCache || (s = this.Pu.get(o), u = s.Ee, a = s.Re(u), this.Pu = this.Pu.Ae(o, a));
                                    return [2]
                            }
                        })
                    })
                }, gh.prototype.Bu = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("Get next mutation batch", "readonly", function(t) {
                        return void 0 === e && (e = -1), n.Wn.Zo(t, e)
                    })
                }, gh.prototype.qu = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("read document", "readonly", function(t) {
                        return n.yu.Kn(t, e)
                    })
                }, gh.prototype.Uu = function(r) {
                    var i = this;
                    return this.persistence.runTransaction("Allocate target", "readwrite", function(e) {
                        var n;
                        return i.Jh.gh(e, r).next(function(t) {
                            return t ? (n = t, cu.resolve(n)) : i.Jh.oh(e).next(function(t) {
                                return n = new Co(r, t, 0, e.Lh), i.Jh.fh(e, n).next(function() {
                                    return n
                                })
                            })
                        })
                    }).then(function(t) {
                        var e = i.Pu.get(t.targetId);
                        return (null === e || 0 < t.Ee.S(e.Ee)) && (i.Pu = i.Pu.Ae(t.targetId, t), i.Vu.set(r, t.targetId)), t
                    })
                }, gh.prototype.gh = function(t, e) {
                    var n = this.Vu.get(e);
                    return void 0 !== n ? cu.resolve(this.Pu.get(n)) : this.Jh.gh(t, e)
                }, gh.prototype.Qu = function(t, e) {
                    var n = this,
                        r = this.Pu.get(t),
                        i = e ? "readwrite" : "readwrite-primary";
                    return this.persistence.runTransaction("Release target", i, function(t) {
                        return e ? cu.resolve() : n.persistence.hh.removeTarget(t, r)
                    }).then(function() {
                        n.Pu = n.Pu.remove(t), n.Vu.delete(r.target)
                    })
                }, gh.prototype.Wu = function(t, n) {
                    var r = this,
                        i = Vr.min(),
                        o = gs();
                    return this.persistence.runTransaction("Execute query", "readonly", function(e) {
                        return r.gh(e, t.ee()).next(function(t) {
                            if (t) return i = t.lastLimboFreeSnapshotVersion, r.Jh.Sh(e, t.targetId).next(function(t) {
                                o = t
                            })
                        }).next(function() {
                            return r.mu.Zn(e, t, n ? i : Vr.min(), n ? o : gs())
                        }).next(function(t) {
                            return {
                                documents: t,
                                ju: o
                            }
                        })
                    })
                }, gh.prototype.$u = function(t, i, o) {
                    var e = this,
                        s = i.batch,
                        n = s.keys(),
                        u = cu.resolve();
                    return n.forEach(function(r) {
                        u = u.next(function() {
                            return o.Mn(t, r)
                        }).next(function(t) {
                            var e = t,
                                n = i.Rn.get(r);
                            $s(null !== n), (!e || e.version.S(n) < 0) && (e = s.at(r, e, i)) && o.Nn(e, i.In)
                        })
                    }), u.next(function() {
                        return e.Wn.ia(t, s)
                    })
                }, gh.prototype.Tu = function(e) {
                    var n = this;
                    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(t) {
                        return e.Ru(t, n.Pu)
                    })
                }, gh);

            function gh(t, e, n) {
                this.persistence = t, this.mu = e, this.Pu = new Zo(nu), this.Vu = new uu(function(t) {
                    return t.canonicalId()
                }), this.gu = Vr.min(), this.Wn = t.Do(n), this.pu = t.No(), this.Jh = t.Fo(), this.yu = new du(this.pu, this.Wn, this.persistence.$o()), this.mu.bu(this.yu)
            }

            function mh(t, e) {
                this.Eu = t, this.du = e
            }

            function wh(t, e) {
                this.xo = t, this.Ra = e, this._u = !1, this.lu = null
            }
            vh.Lu = 3e8;
            var bh, Eh = (n(Th, bh = vh), Th.prototype.start = function() {
                return this.Ku()
            }, Th.prototype.Gu = function(t) {
                var n = this;
                return this.persistence.runTransaction("Lookup mutation documents", "readonly", function(e) {
                    return n.Wn.Xo(e, t).next(function(t) {
                        return t ? n.yu.Yn(e, t) : cu.resolve(null)
                    })
                })
            }, Th.prototype.zu = function(t) {
                this.Wn.na(t)
            }, Th.prototype.uo = function(t) {
                this.persistence.uo(t)
            }, Th.prototype.So = function() {
                return this.persistence.So()
            }, Th.prototype.Hu = function(e) {
                var n = this,
                    t = this.Pu.get(e);
                return t ? Promise.resolve(t.target) : this.persistence.runTransaction("Get target data", "readonly", function(t) {
                    return n.Jh.si(t, e).next(function(t) {
                        return t ? t.target : null
                    })
                })
            }, Th.prototype.Kr = function() {
                var r = this;
                return this.persistence.runTransaction("Get new document changes", "readonly", function(t) {
                    return r.pu.Kr(t, r.gu)
                }).then(function(t) {
                    var e = t.Gr,
                        n = t.readTime;
                    return r.gu = n, e
                })
            }, Th.prototype.Ku = function() {
                return y(this, void 0, void 0, function() {
                    var e, n = this;
                    return v(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, (e = this).persistence.runTransaction("Synchronize last document change read time", "readonly", function(t) {
                                    return n.pu.Hr(t)
                                })];
                            case 1:
                                return e.gu = t.sent(), [2]
                        }
                    })
                })
            }, Th);

            function Th(t, e, n) {
                var r = this;
                return (r = bh.call(this, t, e, n) || this).persistence = t, r.Wn = t.Do(n), r.pu = t.No(), r.Jh = t.Fo(), r
            }

            function Ih(e) {
                return y(this, void 0, void 0, function() {
                    return v(this, function(t) {
                        if (e.code !== Rr.FAILED_PRECONDITION || e.message !== lu) throw e;
                        return Ys("LocalStore", "Unexpectedly lost primary lease"), [2]
                    })
                })
            }
            var Nh = (Sh.prototype.B = function() {
                    return this.Yu.B()
                }, Sh.prototype.yh = function(t, e) {
                    var n = new Ah(t, e);
                    this.Yu = this.Yu.add(n), this.Xu = this.Xu.add(n)
                }, Sh.prototype.tc = function(t, e) {
                    var n = this;
                    t.forEach(function(t) {
                        return n.yh(t, e)
                    })
                }, Sh.prototype.vh = function(t, e) {
                    this.ec(new Ah(t, e))
                }, Sh.prototype.sc = function(t, e) {
                    var n = this;
                    t.forEach(function(t) {
                        return n.vh(t, e)
                    })
                }, Sh.prototype.ic = function(t) {
                    var e = this,
                        n = Jr.EMPTY,
                        r = new Ah(n, t),
                        i = new Ah(n, t + 1),
                        o = [];
                    return this.Xu.Ke([r, i], function(t) {
                        e.ec(t), o.push(t.key)
                    }), o
                }, Sh.prototype.nc = function() {
                    var e = this;
                    this.Yu.forEach(function(t) {
                        return e.ec(t)
                    })
                }, Sh.prototype.ec = function(t) {
                    this.Yu = this.Yu.delete(t), this.Xu = this.Xu.delete(t)
                }, Sh.prototype.rc = function(t) {
                    var e = Jr.EMPTY,
                        n = new Ah(e, t),
                        r = new Ah(e, t + 1),
                        i = gs();
                    return this.Xu.Ke([n, r], function(t) {
                        i = i.add(t.key)
                    }), i
                }, Sh.prototype.Ch = function(t) {
                    var e = new Ah(t, 0),
                        n = this.Yu.ze(e);
                    return null !== n && t.isEqual(n.key)
                }, Sh),
                Ah = (_h.Ju = function(t, e) {
                    return Jr.N(t.key, e.key) || nu(t.hc, e.hc)
                }, _h.Zu = function(t, e) {
                    return nu(t.hc, e.hc) || Jr.N(t.key, e.key)
                }, _h);

            function _h(t, e) {
                this.key = t, this.hc = e
            }

            function Sh() {
                this.Yu = new ss(Ah.Ju), this.Xu = new ss(Ah.Zu)
            }

            function Rh(t, e) {
                if (0 !== e.length) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + Qh(e.length, "argument") + ".")
            }

            function Dh(t, e, n) {
                if (e.length !== n) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires " + Qh(n, "argument") + ", but was called with " + Qh(e.length, "argument") + ".")
            }

            function Ph(t, e, n) {
                if (e.length < n) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires at least " + Qh(n, "argument") + ", but was called with " + Qh(e.length, "argument") + ".")
            }

            function xh(t, e, n, r) {
                if (e.length < n || e.length > r) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + Qh(e.length, "argument") + ".")
            }

            function Oh(t, e, n, r) {
                Uh(t, e, Wh(n) + " argument", r)
            }

            function kh(t, e, n, r) {
                void 0 !== r && Oh(t, e, n, r)
            }

            function Lh(t, e, n, r) {
                Uh(t, e, n + " option", r)
            }

            function Vh(t, e, n, r) {
                void 0 !== r && Lh(t, e, n, r)
            }

            function Ch(t, e, n, r, a) {
                void 0 !== r && function(t, e, n) {
                    for (var r = [], i = 0, o = a; i < o.length; i++) {
                        var s = o[i];
                        if (s === n) return;
                        r.push(Fh(s))
                    }
                    var u = Fh(n);
                    throw new Dr(Rr.INVALID_ARGUMENT, "Invalid value " + u + " provided to function " + t + '() for option "' + e + '". Acceptable values: ' + r.join(", "))
                }(t, n, r)
            }

            function Mh(t, e, n, r) {
                if (!e.some(function(t) {
                        return t === r
                    })) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid value " + Fh(r) + " provided to function " + t + "() for its " + Wh(n) + " argument. Acceptable values: " + e.join(", "));
                return r
            }

            function Uh(t, e, n, r) {
                if (!("object" === e ? jh(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
                    var i = Fh(r);
                    throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i)
                }
            }

            function jh(t) {
                return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
            }

            function Fh(e) {
                if (void 0 === e) return "undefined";
                if (null === e) return "null";
                if ("string" == typeof e) return 20 < e.length && (e = e.substring(0, 20) + "..."), JSON.stringify(e);
                if ("number" == typeof e || "boolean" == typeof e) return "" + e;
                if ("object" != typeof e) return "function" == typeof e ? "a function" : Js();
                if (e instanceof Array) return "an array";
                var t = function() {
                    if (e.constructor) {
                        var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
                        if (t && 1 < t.length) return t[1]
                    }
                    return null
                }();
                return t ? "a custom " + t + " object" : "an object"
            }

            function qh(t, e, n) {
                if (void 0 === n) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Wh(e) + " argument, but it was undefined.")
            }

            function Bh(n, t, r) {
                ti(t, function(t, e) {
                    if (r.indexOf(t) < 0) throw new Dr(Rr.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", "))
                })
            }

            function Gh(t, e, n, r) {
                var i = Fh(r);
                return new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires its " + Wh(n) + " argument to be a " + e + ", but it was: " + i)
            }

            function zh(t, e, n) {
                if (n <= 0) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires its " + Wh(e) + " argument to be a positive number, but it was: " + n + ".")
            }

            function Wh(t) {
                switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th"
                }
            }

            function Qh(t, e) {
                return t + " " + e + (1 === t ? "" : "s")
            }

            function Kh() {
                if ("undefined" == typeof Uint8Array) throw new Dr(Rr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }

            function Yh() {
                if (!zs.nt().oc) throw new Dr(Rr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }
            var Hh = ($h.fromBase64String = function(t) {
                    Dh("Blob.fromBase64String", arguments, 1), Oh("Blob.fromBase64String", "string", 1, t), Yh();
                    try {
                        return new $h(ni.fromBase64String(t))
                    } catch (t) {
                        throw new Dr(Rr.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
                    }
                }, $h.fromUint8Array = function(t) {
                    if (Dh("Blob.fromUint8Array", arguments, 1), Kh(), !(t instanceof Uint8Array)) throw Gh("Blob.fromUint8Array", "Uint8Array", 1, t);
                    return new $h(ni.fromUint8Array(t))
                }, $h.prototype.toBase64 = function() {
                    return Dh("Blob.toBase64", arguments, 0), Yh(), this.ac.toBase64()
                }, $h.prototype.toUint8Array = function() {
                    return Dh("Blob.toUint8Array", arguments, 0), Kh(), this.ac.toUint8Array()
                }, $h.prototype.toString = function() {
                    return "Blob(base64: " + this.toBase64() + ")"
                }, $h.prototype.isEqual = function(t) {
                    return this.ac.isEqual(t.ac)
                }, $h),
                Xh = (Jh.documentId = function() {
                    return Jh.cc
                }, Jh.prototype.isEqual = function(t) {
                    if (!(t instanceof Jh)) throw Gh("isEqual", "FieldPath", 1, t);
                    return this.uc.isEqual(t.uc)
                }, Jh);

            function Jh() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ! function() {
                    if (!(t instanceof Array) || t.length < 1) throw new Dr(Rr.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least 1 element.")
                }();
                for (var n = 0; n < t.length; ++n)
                    if (Oh("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                this.uc = new Hr(t)
            }

            function $h(t) {
                Yh(), this.ac = t
            }
            Xh.cc = new Xh(Hr.J().j());
            var Zh, tc, ec, nc, rc, ic, oc, sc = new RegExp("[~\\*/\\[\\]]"),
                uc = function() {
                    this._c = this
                },
                ac = (n(Dc, oc = uc), Dc.prototype.dc = function(t) {
                    if (2 !== t.fc) throw 1 === t.fc ? t.Tc(this.lc + "() can only appear at the top level of your update data") : t.Tc(this.lc + "() cannot be used with set() unless you pass {merge:true}");
                    return t.Vt.push(t.path), null
                }, Dc.prototype.isEqual = function(t) {
                    return t instanceof Dc
                }, Dc),
                hc = (n(Rc, ic = uc), Rc.prototype.dc = function(t) {
                    return new qi(t.path, Ai.instance)
                }, Rc.prototype.isEqual = function(t) {
                    return t instanceof Rc
                }, Rc),
                cc = (n(Sc, rc = uc), Sc.prototype.dc = function(t) {
                    var e = new xc({
                            fc: 3,
                            methodName: this.lc,
                            wc: !0
                        }, t.ii, t.serializer, t.ignoreUndefinedProperties),
                        n = this.Ec.map(function(t) {
                            return Vc(t, e)
                        }),
                        r = new Si(n);
                    return new qi(t.path, r)
                }, Sc.prototype.isEqual = function(t) {
                    return this === t
                }, Sc),
                fc = (n(_c, nc = uc), _c.prototype.dc = function(t) {
                    var e = new xc({
                            fc: 3,
                            methodName: this.lc,
                            wc: !0
                        }, t.ii, t.serializer, t.ignoreUndefinedProperties),
                        n = this.Ec.map(function(t) {
                            return Vc(t, e)
                        }),
                        r = new Ri(n);
                    return new qi(t.path, r)
                }, _c.prototype.isEqual = function(t) {
                    return this === t
                }, _c),
                lc = (n(Ac, ec = uc), Ac.prototype.dc = function(t) {
                    var e = new xc({
                            fc: 3,
                            methodName: this.lc
                        }, t.ii, t.serializer, t.ignoreUndefinedProperties),
                        n = Vc(this.Ic, e),
                        r = new Di(t.serializer, n);
                    return new qi(t.path, r)
                }, Ac.prototype.isEqual = function(t) {
                    return this === t
                }, Ac),
                pc = (n(Nc, tc = uc), Nc.delete = function() {
                    return Rh("FieldValue.delete", arguments), new dc(new ac("FieldValue.delete"))
                }, Nc.serverTimestamp = function() {
                    return Rh("FieldValue.serverTimestamp", arguments), new dc(new hc("FieldValue.serverTimestamp"))
                }, Nc.arrayUnion = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return Ph("FieldValue.arrayUnion", arguments, 1), new dc(new cc("FieldValue.arrayUnion", t))
                }, Nc.arrayRemove = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return Ph("FieldValue.arrayRemove", arguments, 1), new dc(new fc("FieldValue.arrayRemove", t))
                }, Nc.increment = function(t) {
                    return Oh("FieldValue.increment", "number", 1, t), Dh("FieldValue.increment", arguments, 1), new dc(new lc("FieldValue.increment", t))
                }, Nc),
                dc = (n(Ic, Zh = pc), Ic.prototype.dc = function(t) {
                    return this._c.dc(t)
                }, Ic.prototype.isEqual = function(t) {
                    return t instanceof Ic && this._c.isEqual(t._c)
                }, Ic),
                yc = (Object.defineProperty(Tc.prototype, "latitude", {
                    get: function() {
                        return this.Rc
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Tc.prototype, "longitude", {
                    get: function() {
                        return this.Ac
                    },
                    enumerable: !0,
                    configurable: !0
                }), Tc.prototype.isEqual = function(t) {
                    return this.Rc === t.Rc && this.Ac === t.Ac
                }, Tc.prototype.p = function(t) {
                    return nu(this.Rc, t.Rc) || nu(this.Ac, t.Ac)
                }, Tc),
                vc = /^__.*__$/,
                gc = function(t, e, n) {
                    this.mc = t, this.Pc = e, this.Vc = n
                },
                mc = (Ec.prototype.gc = function(t, e) {
                    var n = [];
                    return null !== this.Vt ? n.push(new Wi(t, this.data, this.Vt, e)) : n.push(new zi(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new Qi(t, this.fieldTransforms)), n
                }, Ec),
                wc = (bc.prototype.gc = function(t, e) {
                    var n = [new Wi(t, this.data, this.Vt, e)];
                    return 0 < this.fieldTransforms.length && n.push(new Qi(t, this.fieldTransforms)), n
                }, bc);

            function bc(t, e, n) {
                this.data = t, this.Vt = e, this.fieldTransforms = n
            }

            function Ec(t, e, n) {
                this.data = t, this.Vt = e, this.fieldTransforms = n
            }

            function Tc(t, e) {
                if (Dh("GeoPoint", arguments, 2), Oh("GeoPoint", "number", 1, t), Oh("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t) throw new Dr(Rr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                if (!isFinite(e) || e < -180 || 180 < e) throw new Dr(Rr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                this.Rc = t, this.Ac = e
            }

            function Ic(t) {
                var e = this;
                return (e = Zh.call(this) || this)._c = t, e.lc = t.lc, e
            }

            function Nc() {
                return null !== tc && tc.apply(this, arguments) || this
            }

            function Ac(t, e) {
                var n = this;
                return (n = ec.call(this) || this).lc = t, n.Ic = e, n
            }

            function _c(t, e) {
                var n = this;
                return (n = nc.call(this) || this).lc = t, n.Ec = e, n
            }

            function Sc(t, e) {
                var n = this;
                return (n = rc.call(this) || this).lc = t, n.Ec = e, n
            }

            function Rc(t) {
                var e = this;
                return (e = ic.call(this) || this).lc = t, e
            }

            function Dc(t) {
                var e = this;
                return (e = oc.call(this) || this).lc = t, e
            }

            function Pc(t) {
                switch (t) {
                    case 0:
                    case 2:
                    case 1:
                        return 1;
                    case 3:
                    case 4:
                        return;
                    default:
                        throw Js()
                }
            }
            var xc = (Object.defineProperty(Lc.prototype, "path", {
                    get: function() {
                        return this.settings.path
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Lc.prototype, "fc", {
                    get: function() {
                        return this.settings.fc
                    },
                    enumerable: !0,
                    configurable: !0
                }), Lc.prototype.yc = function(t) {
                    return new Lc(Object.assign(Object.assign({}, this.settings), t), this.ii, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Vt)
                }, Lc.prototype.bc = function(t) {
                    var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                        r = this.yc({
                            path: n,
                            wc: !1
                        });
                    return r.vc(t), r
                }, Lc.prototype.Sc = function(t) {
                    var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                        r = this.yc({
                            path: n,
                            wc: !1
                        });
                    return r.pc(), r
                }, Lc.prototype.Dc = function(t) {
                    return this.yc({
                        path: void 0,
                        wc: !0
                    })
                }, Lc.prototype.Tc = function(t) {
                    var e = !this.path || this.path.B() ? "" : " (found in field " + this.path.toString() + ")";
                    return new Dr(Rr.INVALID_ARGUMENT, "Function " + this.settings.methodName + "() called with invalid data. " + t + e)
                }, Lc.prototype.contains = function(e) {
                    return void 0 !== this.Vt.find(function(t) {
                        return e.q(t)
                    }) || void 0 !== this.fieldTransforms.find(function(t) {
                        return e.q(t.field)
                    })
                }, Lc.prototype.pc = function() {
                    if (this.path)
                        for (var t = 0; t < this.path.length; t++) this.vc(this.path.get(t))
                }, Lc.prototype.vc = function(t) {
                    if (0 === t.length) throw this.Tc("Document fields must not be empty");
                    if (Pc(this.fc) && vc.test(t)) throw this.Tc('Document fields cannot begin and end with "__"')
                }, Lc),
                Oc = (kc.prototype.Fc = function(t, e) {
                    var n = this.Nc(0, t);
                    Uc("Data must be an object, but it was:", n, e);
                    var r = Cc(e, n);
                    return new mc(new Hi(r), null, n.fieldTransforms)
                }, kc.prototype.$c = function(t, e, n) {
                    var r = this.Nc(2, t);
                    Uc("Data must be an object, but it was:", r, e);
                    var i, o, s = Cc(e, r);
                    if (n) {
                        for (var u = [], a = 0, h = n; a < h.length; a++) {
                            var c = h[a],
                                f = void 0;
                            if (c instanceof Xh) f = c.uc;
                            else {
                                if ("string" != typeof c) throw Js();
                                f = Fc(t, c)
                            }
                            if (!r.contains(f)) throw new Dr(Rr.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                            qc(u, f) || u.push(f)
                        }
                        i = new Fi(u), o = r.fieldTransforms.filter(function(t) {
                            return i.dt(t.field)
                        })
                    } else i = new Fi(r.Vt), o = r.fieldTransforms;
                    return new mc(new Hi(s), i, o)
                }, kc.prototype.kc = function(o, t) {
                    var s = this.Nc(1, o);
                    Uc("Data must be an object, but it was:", s, t);
                    var u = [],
                        a = new Xi;
                    ti(t, function(t, e) {
                        var n = Fc(o, t),
                            r = s.Sc(n);
                        if (e instanceof uc && e._c instanceof ac) u.push(n);
                        else {
                            var i = Vc(e, r);
                            null != i && (u.push(n), a.set(n, i))
                        }
                    });
                    var e = new Fi(u);
                    return new wc(a.yt(), e, s.fieldTransforms)
                }, kc.prototype.Mc = function(t, e, n, r) {
                    var i = this.Nc(1, t),
                        o = [jc(t, e)],
                        s = [n];
                    if (r.length % 2 != 0) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                    for (var u = 0; u < r.length; u += 2) o.push(jc(t, r[u])), s.push(r[u + 1]);
                    for (var a = [], h = new Xi, c = o.length - 1; 0 <= c; --c)
                        if (!qc(a, o[c])) {
                            var f = o[c],
                                l = s[c],
                                p = i.Sc(f);
                            if (l instanceof uc && l._c instanceof ac) a.push(f);
                            else {
                                var d = Vc(l, p);
                                null != d && (a.push(f), h.set(f, d))
                            }
                        } var y = new Fi(a);
                    return new wc(h.yt(), y, i.fieldTransforms)
                }, kc.prototype.Nc = function(t, e) {
                    return new xc({
                        fc: t,
                        methodName: e,
                        path: Hr.G,
                        wc: !1
                    }, this.ii, this.serializer, this.ignoreUndefinedProperties)
                }, kc.prototype.xc = function(t, e, n) {
                    return void 0 === n && (n = !1), Vc(e, this.Nc(n ? 4 : 3, t))
                }, kc);

            function kc(t, e, n) {
                this.ii = t, this.ignoreUndefinedProperties = e, this.serializer = n || zs.nt().Cc(t)
            }

            function Lc(t, e, n, r, i, o) {
                this.settings = t, this.ii = e, this.serializer = n, this.ignoreUndefinedProperties = r, void 0 === i && this.pc(), this.fieldTransforms = i || [], this.Vt = o || []
            }

            function Vc(s, t) {
                if (Mc(s)) return Uc("Unsupported field value:", t, s), Cc(s, t);
                if (s instanceof uc) return function(t, e) {
                    if (!Pc(e.fc)) throw e.Tc(t.lc + "() can only be used with update() and set()");
                    if (null === e.path) throw e.Tc(t.lc + "() is not currently supported inside arrays");
                    var n = t.dc(e);
                    n && e.fieldTransforms.push(n)
                }(s, t), null;
                if (t.path && t.Vt.push(t.path), s instanceof Array) {
                    if (t.settings.wc && 4 !== t.fc) throw t.Tc("Nested arrays are not supported");
                    return function(t) {
                        for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
                            var o = Vc(i[r], t.Dc(n));
                            null == o && (o = {
                                nullValue: "NULL_VALUE"
                            }), e.push(o), n++
                        }
                        return {
                            arrayValue: {
                                values: e
                            }
                        }
                    }(t)
                }
                return function(t, e) {
                    if (null === t) return {
                        nullValue: "NULL_VALUE"
                    };
                    if ("number" == typeof t) return e.serializer.ai(t);
                    if ("boolean" == typeof t) return {
                        booleanValue: t
                    };
                    if ("string" == typeof t) return {
                        stringValue: t
                    };
                    if (t instanceof Date) {
                        var n = Lr.fromDate(t);
                        return {
                            timestampValue: e.serializer.C(n)
                        }
                    }
                    if (t instanceof Lr) {
                        var r = new Lr(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
                        return {
                            timestampValue: e.serializer.C(r)
                        }
                    }
                    if (t instanceof yc) return {
                        geoPointValue: {
                            latitude: t.latitude,
                            longitude: t.longitude
                        }
                    };
                    if (t instanceof Hh) return {
                        bytesValue: e.serializer.ui(t)
                    };
                    if (t instanceof gc) {
                        var i = e.ii,
                            o = t.mc;
                        if (!o.isEqual(i)) throw e.Tc("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
                        return {
                            referenceValue: e.serializer._i(t.Pc.path, t.mc)
                        }
                    }
                    if (void 0 === t && e.ignoreUndefinedProperties) return null;
                    throw e.Tc("Unsupported field value: " + Fh(t))
                }(s, t)
            }

            function Cc(t, r) {
                var i = {};
                return ei(t) ? r.path && 0 < r.path.length && r.Vt.push(r.path) : ti(t, function(t, e) {
                    var n = Vc(e, r.bc(t));
                    null != n && (i[t] = n)
                }), {
                    mapValue: {
                        fields: i
                    }
                }
            }

            function Mc(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Lr || t instanceof yc || t instanceof Hh || t instanceof gc || t instanceof uc)
            }

            function Uc(t, e, n) {
                if (!Mc(n) || !jh(n)) {
                    var r = Fh(n);
                    throw "an object" === r ? e.Tc(t + " a custom object") : e.Tc(t + " " + r)
                }
            }

            function jc(t, e) {
                if (e instanceof Xh) return e.uc;
                if ("string" == typeof e) return Fc(t, e);
                throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.")
            }

            function Fc(t, e) {
                try {
                    return function(e) {
                        if (0 <= e.search(sc)) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
                        try {
                            return new(Xh.bind.apply(Xh, d([void 0], e.split("."))))
                        } catch (t) {
                            throw new Dr(Rr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                        }
                    }(e).uc
                } catch (e) {
                    var n = e instanceof Error ? e.message : e.toString();
                    throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n)
                }
            }

            function qc(t, e) {
                return t.some(function(t) {
                    return t.isEqual(e)
                })
            }
            var Bc, Gc, zc, Wc = ( of .prototype.Qc = function() {
                    return 1 === this.state || 2 === this.state || 4 === this.state
                }, of .prototype.Wc = function() {
                    return 2 === this.state
                }, of .prototype.start = function() {
                    3 !== this.state ? this.auth() : this.jc()
                }, of .prototype.stop = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.Qc() ? [4, this.close(0)] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, of .prototype.Kc = function() {
                    this.state = 0, this.Na.reset()
                }, of .prototype.Gc = function() {
                    var t = this;
                    this.Wc() && null === this.Uc && (this.Uc = this.Tr.yr(this.Lc, 6e4, function() {
                        return t.zc()
                    }))
                }, of .prototype.Hc = function(t) {
                    this.Yc(), this.stream.send(t)
                }, of .prototype.zc = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            return this.Wc() ? [2, this.close(0)] : [2]
                        })
                    })
                }, of .prototype.Yc = function() {
                    this.Uc && (this.Uc.cancel(), this.Uc = null)
                }, of .prototype.close = function(e, n) {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.Yc(), this.Na.cancel(), this.qc++, 3 !== e ? this.Na.reset() : n && n.code === Rr.RESOURCE_EXHAUSTED ? (Hs(n.toString()), Hs("Using maximum backoff delay to prevent overloading the backend."), this.Na.Vr()) : n && n.code === Rr.UNAUTHENTICATED && this.Bc._(), null !== this.stream && (this.Jc(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.Xc(n)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, of .prototype.Jc = function() {}, of .prototype.auth = function() {
                    var n = this;
                    this.state = 1;
                    var t = this.Zc(this.qc),
                        e = this.qc;
                    this.Bc.getToken().then(function(t) {
                        n.qc === e && n.t_(t)
                    }, function(e) {
                        t(function() {
                            var t = new Dr(Rr.UNKNOWN, "Fetching auth token failed: " + e.message);
                            return n.e_(t)
                        })
                    })
                }, of .prototype.t_ = function(t) {
                    var e = this,
                        n = this.Zc(this.qc);
                    this.stream = this.s_(t), this.stream.i_(function() {
                        n(function() {
                            return e.state = 2, e.listener.i_()
                        })
                    }), this.stream.Xc(function(t) {
                        n(function() {
                            return e.e_(t)
                        })
                    }), this.stream.onMessage(function(t) {
                        n(function() {
                            return e.onMessage(t)
                        })
                    })
                }, of .prototype.jc = function() {
                    var t = this;
                    this.state = 4, this.Na.gr(function() {
                        return y(t, void 0, void 0, function() {
                            return v(this, function(t) {
                                return this.state = 0, this.start(), [2]
                            })
                        })
                    })
                }, of .prototype.e_ = function(t) {
                    return Ys("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t)
                }, of .prototype.Zc = function(e) {
                    var n = this;
                    return function(t) {
                        n.Tr.co(function() {
                            return n.qc === e ? t() : (Ys("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                        })
                    }
                }, of ),
                Qc = (n(rf, zc = Wc), rf.prototype.s_ = function(t) {
                    return this.Oc.n_("Listen", t)
                }, rf.prototype.onMessage = function(t) {
                    this.Na.reset();
                    var e = this.serializer.pi(t),
                        n = this.serializer.bi(t);
                    return this.listener.r_(e, n)
                }, rf.prototype.h_ = function(t) {
                    var e = {};
                    e.database = this.serializer.Ii, e.addTarget = this.serializer.ee(t);
                    var n = this.serializer.zi(t);
                    n && (e.labels = n), this.Hc(e)
                }, rf.prototype.o_ = function(t) {
                    var e = {};
                    e.database = this.serializer.Ii, e.removeTarget = t, this.Hc(e)
                }, rf),
                Kc = (n(nf, Gc = Wc), Object.defineProperty(nf.prototype, "u_", {
                    get: function() {
                        return this.a_
                    },
                    enumerable: !0,
                    configurable: !0
                }), nf.prototype.start = function() {
                    this.a_ = !1, this.lastStreamToken = ni.ht, Gc.prototype.start.call(this)
                }, nf.prototype.Jc = function() {
                    this.a_ && this.c_([])
                }, nf.prototype.s_ = function(t) {
                    return this.Oc.n_("Write", t)
                }, nf.prototype.onMessage = function(t) {
                    if ($s(!!t.streamToken), this.lastStreamToken = this.serializer.ci(t.streamToken), this.a_) {
                        this.Na.reset();
                        var e = this.serializer.xi(t.writeResults, t.commitTime),
                            n = this.serializer.fromVersion(t.commitTime);
                        return this.listener.__(n, e)
                    }
                    return $s(!t.writeResults || 0 === t.writeResults.length), this.a_ = !0, this.listener.l_()
                }, nf.prototype.d_ = function() {
                    var t = {};
                    t.database = this.serializer.Ii, this.Hc(t)
                }, nf.prototype.c_ = function(t) {
                    var e = this,
                        n = {
                            streamToken: this.serializer.ui(this.lastStreamToken),
                            writes: t.map(function(t) {
                                return e.serializer.vi(t)
                            })
                        };
                    this.Hc(n)
                }, nf),
                Yc = (n(ef, Bc = function() {
                    this.f_ = void 0
                }), ef.prototype.T_ = function(e, n) {
                    var r = this;
                    return this.credentials.getToken().then(function(t) {
                        return r.Oc.T_(e, n, t)
                    }).catch(function(t) {
                        throw t.code === Rr.UNAUTHENTICATED && r.credentials._(), t
                    })
                }, ef.prototype.E_ = function(e, n) {
                    var r = this;
                    return this.credentials.getToken().then(function(t) {
                        return r.Oc.E_(e, n, t)
                    }).catch(function(t) {
                        throw t.code === Rr.UNAUTHENTICATED && r.credentials._(), t
                    })
                }, ef),
                Hc = (tf.prototype.P_ = function(r) {
                    return y(this, void 0, void 0, function() {
                        var e, n = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (this.V_(), 0 < this.mutations.length) throw new Dr(Rr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                    return [4, function(s, u) {
                                        return y(this, void 0, void 0, function() {
                                            var n, e, r, i, o;
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return n = Zs(s), e = {
                                                            database: n.serializer.Ii,
                                                            documents: u.map(function(t) {
                                                                return n.serializer.fi(t)
                                                            })
                                                        }, [4, n.E_("BatchGetDocuments", e)];
                                                    case 1:
                                                        return r = t.sent(), i = new Map, r.forEach(function(t) {
                                                            var e = n.serializer.gi(t);
                                                            i.set(e.key.toString(), e)
                                                        }), o = [], [2, (u.forEach(function(t) {
                                                            var e = i.get(t.toString());
                                                            $s(!!e), o.push(e)
                                                        }), o)]
                                                }
                                            })
                                        })
                                    }(this.w_, r)];
                                case 1:
                                    return [2, ((e = t.sent()).forEach(function(t) {
                                        t instanceof No || t instanceof Io ? n.g_(t) : Js()
                                    }), e)]
                            }
                        })
                    })
                }, tf.prototype.set = function(t, e) {
                    this.write(e.gc(t, this.Rt(t))), this.m_.add(t)
                }, tf.prototype.update = function(t, e) {
                    try {
                        this.write(e.gc(t, this.p_(t)))
                    } catch (t) {
                        this.A_ = t
                    }
                    this.m_.add(t)
                }, tf.prototype.delete = function(t) {
                    this.write([new Ki(t, this.Rt(t))]), this.m_.add(t)
                }, tf.prototype.commit = function() {
                    return y(this, void 0, void 0, function() {
                        var e, r = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (this.V_(), this.A_) throw this.A_;
                                    return e = this.I_, this.mutations.forEach(function(t) {
                                        e.delete(t.key.toString())
                                    }), e.forEach(function(t, e) {
                                        var n = new Jr(Mr.K(e));
                                        r.mutations.push(new Yi(n, r.Rt(n)))
                                    }), [4, function(i, o) {
                                        return y(this, void 0, void 0, function() {
                                            var e, n, r;
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return e = Zs(i), n = {
                                                            database: e.serializer.Ii,
                                                            writes: o.map(function(t) {
                                                                return e.serializer.vi(t)
                                                            })
                                                        }, [4, e.T_("Commit", n)];
                                                    case 1:
                                                        return r = t.sent(), [2, e.serializer.xi(r.writeResults, r.commitTime)]
                                                }
                                            })
                                        })
                                    }(this.w_, this.mutations)];
                                case 1:
                                    return t.sent(), this.R_ = !0, [2]
                            }
                        })
                    })
                }, tf.prototype.g_ = function(t) {
                    var e;
                    if (t instanceof Io) e = t.version;
                    else {
                        if (!(t instanceof No)) throw Js();
                        e = Vr.min()
                    }
                    var n = this.I_.get(t.key.toString());
                    if (n) {
                        if (!e.isEqual(n)) throw new Dr(Rr.ABORTED, "Document version changed between two reads.")
                    } else this.I_.set(t.key.toString(), e)
                }, tf.prototype.Rt = function(t) {
                    var e = this.I_.get(t.toString());
                    return !this.m_.has(t) && e ? Bi.updateTime(e) : Bi.ft()
                }, tf.prototype.p_ = function(t) {
                    var e = this.I_.get(t.toString());
                    if (this.m_.has(t) || !e) return Bi.exists(!0);
                    if (e.isEqual(Vr.min())) throw new Dr(Rr.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                    return Bi.updateTime(e)
                }, tf.prototype.write = function(t) {
                    this.V_(), this.mutations = this.mutations.concat(t)
                }, tf.prototype.V_ = function() {}, tf),
                Xc = (Zc.prototype.D_ = function() {
                    var t = this;
                    0 === this.b_ && (this.C_("Unknown"), this.v_ = this.Ra.yr("online_state_timeout", 1e4, function() {
                        return t.v_ = null, t.F_("Backend didn't respond within 10 seconds."), t.C_("Offline"), Promise.resolve()
                    }))
                }, Zc.prototype.N_ = function(t) {
                    "Online" === this.state ? this.C_("Unknown") : (this.b_++, 1 <= this.b_ && (this.k_(), this.F_("Connection failed 1 times. Most recent error: " + t.toString()), this.C_("Offline")))
                }, Zc.prototype.set = function(t) {
                    this.k_(), this.b_ = 0, "Online" === t && (this.S_ = !1), this.C_(t)
                }, Zc.prototype.C_ = function(t) {
                    t !== this.state && (this.state = t, this.y_(t))
                }, Zc.prototype.F_ = function(t) {
                    var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                    this.S_ ? (Hs(e), this.S_ = !1) : Ys("OnlineStateTracker", e)
                }, Zc.prototype.k_ = function() {
                    null !== this.v_ && (this.v_.cancel(), this.v_ = null)
                }, Zc),
                Jc = ($c.prototype.start = function() {
                    return this.enableNetwork()
                }, $c.prototype.enableNetwork = function() {
                    return this.networkEnabled = !0, this.tl()
                }, $c.prototype.tl = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.Q_() ? (this.el() ? this.sl() : this.j_.set("Unknown"), [4, this.il()]) : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, $c.prototype.disableNetwork = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.nl()];
                                case 1:
                                    return t.sent(), this.j_.set("Offline"), [2]
                            }
                        })
                    })
                }, $c.prototype.nl = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.Y_.stop()];
                                case 1:
                                    return t.sent(), [4, this.K_.stop()];
                                case 2:
                                    return t.sent(), 0 < this.x_.length && (Ys("RemoteStore", "Stopping write stream with " + this.x_.length + " pending writes"), this.x_ = []), this.rl(), [2]
                            }
                        })
                    })
                }, $c.prototype.Vo = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return Ys("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.nl()];
                                case 1:
                                    return t.sent(), this.q_.Vo(), this.j_.set("Unknown"), [2]
                            }
                        })
                    })
                }, $c.prototype.listen = function(t) {
                    this.L_.has(t.targetId) || (this.L_.set(t.targetId, t), this.el() ? this.sl() : this.K_.Wc() && this.hl(t))
                }, $c.prototype.ol = function(t) {
                    this.L_.delete(t), this.K_.Wc() && this.al(t), 0 === this.L_.size && (this.K_.Wc() ? this.K_.Gc() : this.Q_() && this.j_.set("Unknown"))
                }, $c.prototype.si = function(t) {
                    return this.L_.get(t) || null
                }, $c.prototype.ei = function(t) {
                    return this.ul.ei(t)
                }, $c.prototype.hl = function(t) {
                    this.O_.Ns(t.targetId), this.K_.h_(t)
                }, $c.prototype.al = function(t) {
                    this.O_.Ns(t), this.K_.o_(t)
                }, $c.prototype.sl = function() {
                    this.O_ = new Ds(this), this.K_.start(), this.j_.D_()
                }, $c.prototype.el = function() {
                    return this.Q_() && !this.K_.Qc() && 0 < this.L_.size
                }, $c.prototype.Q_ = function() {
                    return !this.B_ && this.isPrimary && this.networkEnabled
                }, $c.prototype.rl = function() {
                    this.O_ = null
                }, $c.prototype.G_ = function() {
                    return y(this, void 0, void 0, function() {
                        var n = this;
                        return v(this, function(t) {
                            return this.L_.forEach(function(t, e) {
                                n.hl(t)
                            }), [2]
                        })
                    })
                }, $c.prototype.z_ = function(e) {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            return this.rl(), this.el() ? (this.j_.N_(e), this.sl()) : this.j_.set("Unknown"), [2]
                        })
                    })
                }, $c.prototype.H_ = function(i, o) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (this.j_.set("Online"), !(i instanceof Ts && 2 === i.state && i.cause)) return [3, 6];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 5]), [4, this.cl(i)];
                                case 2:
                                    return t.sent(), [3, 5];
                                case 3:
                                    return e = t.sent(), Ys("RemoteStore", "Failed to remove targets %s: %s ", i.targetIds.join(","), e), [4, this._l(e)];
                                case 4:
                                    return t.sent(), [3, 5];
                                case 5:
                                    return [3, 13];
                                case 6:
                                    if (i instanceof bs ? this.O_.qs(i) : i instanceof Es ? this.O_.Hs(i) : this.O_.Ws(i), o.isEqual(Vr.min())) return [3, 13];
                                    t.label = 7;
                                case 7:
                                    return t.trys.push([7, 11, , 13]), [4, this.M_._h()];
                                case 8:
                                    return n = t.sent(), 0 <= o.S(n) ? [4, this.ll(o)] : [3, 10];
                                case 9:
                                    t.sent(), t.label = 10;
                                case 10:
                                    return [3, 13];
                                case 11:
                                    return Ys("RemoteStore", "Failed to raise snapshot:", r = t.sent()), [4, this._l(r)];
                                case 12:
                                    return t.sent(), [3, 13];
                                case 13:
                                    return [2]
                            }
                        })
                    })
                }, $c.prototype._l = function(n, r) {
                    return y(this, void 0, void 0, function() {
                        var e = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!Ha(n)) throw n;
                                    return this.B_ = !0, [4, this.nl()];
                                case 1:
                                    return t.sent(), this.j_.set("Offline"), r = r || function() {
                                        return e.M_._h()
                                    }, this.Ra.lo(function() {
                                        return y(e, void 0, void 0, function() {
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return Ys("RemoteStore", "Retrying IndexedDB access"), [4, r()];
                                                    case 1:
                                                        return t.sent(), this.B_ = !1, [4, this.tl()];
                                                    case 2:
                                                        return t.sent(), [2]
                                                }
                                            })
                                        })
                                    }), [2]
                            }
                        })
                    })
                }, $c.prototype.dl = function(e) {
                    var n = this;
                    return e().catch(function(t) {
                        return n._l(t, e)
                    })
                }, $c.prototype.ll = function(r) {
                    var i = this,
                        t = this.O_.Xs(r);
                    return t.as.forEach(function(t, e) {
                        if (0 < t.resumeToken.rt()) {
                            var n = i.L_.get(e);
                            n && i.L_.set(e, n.Ie(t.resumeToken, r))
                        }
                    }), t.us.forEach(function(t) {
                        var e = i.L_.get(t);
                        if (e) {
                            i.L_.set(t, e.Ie(ni.ht, e.Ee)), i.al(t);
                            var n = new Co(e.target, t, 1, e.sequenceNumber);
                            i.hl(n)
                        }
                    }), this.ul.Mu(t)
                }, $c.prototype.cl = function(o) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    e = o.cause, n = 0, r = o.targetIds, t.label = 1;
                                case 1:
                                    return n < r.length ? (i = r[n], this.L_.has(i) ? [4, this.ul.fl(i, e)] : [3, 3]) : [3, 5];
                                case 2:
                                    t.sent(), this.L_.delete(i), this.O_.removeTarget(i), t.label = 3;
                                case 3:
                                    t.label = 4;
                                case 4:
                                    return n++, [3, 1];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, $c.prototype.il = function() {
                    return y(this, void 0, void 0, function() {
                        var e, n, r;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    e = 0 < this.x_.length ? this.x_[this.x_.length - 1].batchId : -1, t.label = 1;
                                case 1:
                                    if (!this.Tl()) return [3, 7];
                                    t.label = 2;
                                case 2:
                                    return t.trys.push([2, 4, , 6]), [4, this.M_.Bu(e)];
                                case 3:
                                    return null === (n = t.sent()) ? (0 === this.x_.length && this.Y_.Gc(), [3, 7]) : (e = n.batchId, this.El(n), [3, 6]);
                                case 4:
                                    return r = t.sent(), [4, this._l(r)];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [3, 1];
                                case 7:
                                    return this.wl() && this.Il(), [2]
                            }
                        })
                    })
                }, $c.prototype.Tl = function() {
                    return this.Q_() && this.x_.length < 10
                }, $c.prototype.Rl = function() {
                    return this.x_.length
                }, $c.prototype.El = function(t) {
                    this.x_.push(t), this.Y_.Wc() && this.Y_.u_ && this.Y_.c_(t.mutations)
                }, $c.prototype.wl = function() {
                    return this.Q_() && !this.Y_.Qc() && 0 < this.x_.length
                }, $c.prototype.Il = function() {
                    this.Y_.start()
                }, $c.prototype.J_ = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            return this.Y_.d_(), [2]
                        })
                    })
                }, $c.prototype.Z_ = function() {
                    return y(this, void 0, void 0, function() {
                        var e, n, r;
                        return v(this, function(t) {
                            for (e = 0, n = this.x_; e < n.length; e++) r = n[e], this.Y_.c_(r.mutations);
                            return [2]
                        })
                    })
                }, $c.prototype.__ = function(i, o) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = this.x_.shift(), n = hu.from(e, i, o), [4, this.dl(function() {
                                        return r.ul.Al(n)
                                    })];
                                case 1:
                                    return t.sent(), [4, this.il()];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, $c.prototype.X_ = function(e) {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e && this.Y_.u_ ? [4, this.ml(e)] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return this.wl() && this.Il(), [2]
                            }
                        })
                    })
                }, $c.prototype.ml = function(i) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return Jo(n = i.code) && n !== Rr.ABORTED ? (e = this.x_.shift(), this.Y_.Kc(), [4, this.dl(function() {
                                        return r.ul.Pl(e.batchId, i)
                                    })]) : [3, 3];
                                case 1:
                                    return t.sent(), [4, this.il()];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, $c.prototype.Vl = function() {
                    return new Hc(this.w_)
                }, $c.prototype.W_ = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.nl()];
                                case 1:
                                    return t.sent(), this.j_.set("Unknown"), [4, this.enableNetwork()];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, $c.prototype.gl = function() {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.Q_() ? (Ys("RemoteStore", "RemoteStore restarting streams for new credential"), [4, this.W_()]) : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, $c.prototype.pl = function(e) {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                case 1:
                                    return t.sent(), [3, 5];
                                case 2:
                                    return e ? [3, 4] : [4, this.nl()];
                                case 3:
                                    t.sent(), this.j_.set("Unknown"), t.label = 4;
                                case 4:
                                    t.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, $c);

            function $c(t, e, n, r, i) {
                var o, s, u, a, h, c, f, l, p = this;
                this.M_ = t, this.w_ = e, this.Ra = n, this.x_ = [], this.L_ = new Map, this.O_ = null, this.networkEnabled = !1, this.isPrimary = !1, this.B_ = !1, this.q_ = i, this.q_.U_(function(t) {
                    n.co(function() {
                        return y(p, void 0, void 0, function() {
                            return v(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.Q_() ? (Ys("RemoteStore", "Restarting streams for network reachability change."), [4, this.W_()]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    })
                }), this.j_ = new Xc(n, r), this.K_ = (h = this.w_, c = n, f = {
                    i_: this.G_.bind(this),
                    Xc: this.z_.bind(this),
                    r_: this.H_.bind(this)
                }, l = Zs(h), new Qc(c, l.Oc, l.credentials, l.serializer, f)), this.Y_ = (o = this.w_, s = n, u = {
                    i_: this.J_.bind(this),
                    Xc: this.X_.bind(this),
                    l_: this.Z_.bind(this),
                    __: this.__.bind(this)
                }, a = Zs(o), new Kc(s, a.Oc, a.credentials, a.serializer, u))
            }

            function Zc(t, e) {
                this.Ra = t, this.y_ = e, this.state = "Unknown", this.b_ = 0, this.v_ = null, this.S_ = !0
            }

            function tf(t) {
                this.w_ = t, this.I_ = new Map, this.mutations = [], this.R_ = !1, this.A_ = null, this.m_ = new Set
            }

            function ef(t, e, n) {
                var r = this;
                return (r = Bc.call(this) || this).Oc = t, r.credentials = e, r.serializer = n, r
            }

            function nf(t, e, n, r, i) {
                var o = this;
                return (o = Gc.call(this, t, "write_stream_connection_backoff", "write_stream_idle", e, n, i) || this).serializer = r, o.a_ = !1, o.lastStreamToken = ni.ht, o
            }

            function rf(t, e, n, r, i) {
                var o = this;
                return (o = zc.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", e, n, i) || this).serializer = r, o
            }

            function of (t, e, n, r, i, o) {
                this.Tr = t, this.Lc = n, this.Oc = r, this.Bc = i, this.listener = o, this.state = 0, this.qc = 0, this.Uc = null, this.stream = null, this.Na = new Ru(t, e)
            }

            function sf(t, e) {
                return "firestore_clients_" + t + "_" + e
            }

            function uf(t, e, n) {
                var r = "firestore_mutations_" + t + "_" + n;
                return e.t() && (r += "_" + e.uid), r
            }

            function af(t, e) {
                return "firestore_targets_" + t + "_" + e
            }

            function hf(t) {
                this.key = t
            }

            function cf(t) {
                this.key = t
            }

            function ff(t, e, n) {
                this.query = t, this.targetId = e, this.view = n
            }

            function lf(t) {
                this.key = t, this.Ud = !1
            }

            function pf() {
                this.yf = void 0, this.bf = []
            }
            var df, yf, vf = (Kf.yl = function(t, e, n) {
                    var r = JSON.parse(n),
                        i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                        o = void 0;
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new Dr(r.error.code, r.error.message)), i ? new Kf(t, e, r.state, o) : (Hs("SharedClientState", "Failed to parse mutation state for ID '" + e + "': " + n), null)
                }, Kf.prototype.bl = function() {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(t)
                }, Kf),
                gf = (Qf.yl = function(t, e) {
                    var n = JSON.parse(e),
                        r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                        i = void 0;
                    return r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new Dr(n.error.code, n.error.message)), r ? new Qf(t, n.state, i) : (Hs("SharedClientState", "Failed to parse target state for ID '" + t + "': " + e), null)
                }, Qf.prototype.bl = function() {
                    var t = {
                        state: this.state,
                        updateTimeMs: Date.now()
                    };
                    return this.error && (t.error = {
                        code: this.error.code,
                        message: this.error.message
                    }), JSON.stringify(t)
                }, Qf),
                mf = (Wf.yl = function(t, e) {
                    for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = ws(), o = 0; r && o < n.activeTargetIds.length; ++o) r = si(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]);
                    return r ? new Wf(t, i) : (Hs("SharedClientState", "Failed to parse client data for instance '" + t + "': " + e), null)
                }, Wf),
                wf = (zf.yl = function(t) {
                    var e = JSON.parse(t);
                    return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new zf(e.clientId, e.onlineState) : (Hs("SharedClientState", "Failed to parse online state: " + t), null)
                }, zf),
                bf = (Gf.prototype.vl = function(t) {
                    this.activeTargetIds = this.activeTargetIds.add(t)
                }, Gf.prototype.Sl = function(t) {
                    this.activeTargetIds = this.activeTargetIds.delete(t)
                }, Gf.prototype.bl = function() {
                    var t = {
                        activeTargetIds: this.activeTargetIds.W(),
                        updateTimeMs: Date.now()
                    };
                    return JSON.stringify(t)
                }, Gf),
                Ef = (Bf.zh = function(t) {
                    return !(!t.window || null == t.window.localStorage)
                }, Bf.prototype.start = function() {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s, u, a, h, c, f, l = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.ul.So()];
                                case 1:
                                    for (e = t.sent(), n = 0, r = e; n < r.length; n++)(i = r[n]) !== this.Dl && (o = this.getItem(sf(this.persistenceKey, i))) && (s = mf.yl(i, o)) && (this.Nl = this.Nl.Ae(s.clientId, s));
                                    for (this.ql(), (u = this.storage.getItem(this.Bl)) && (a = this.Ul(u)) && this.Ql(a), h = 0, c = this.$l; h < c.length; h++) f = c[h], this.Fl(f);
                                    return this.$l = [], this.platform.window.addEventListener("unload", function() {
                                        return l.Vo()
                                    }), this.ho = !0, [2]
                            }
                        })
                    })
                }, Bf.prototype.lr = function(t) {
                    this.setItem(this.Ml, JSON.stringify(t))
                }, Bf.prototype.Wl = function() {
                    return this.jl(this.Nl)
                }, Bf.prototype.Kl = function(n) {
                    var r = !1;
                    return this.Nl.forEach(function(t, e) {
                        e.activeTargetIds.has(n) && (r = !0)
                    }), r
                }, Bf.prototype.Gl = function(t) {
                    this.zl(t, "pending")
                }, Bf.prototype.Hl = function(t, e, n) {
                    this.zl(t, e, n), this.Yl(t)
                }, Bf.prototype.Jl = function(t) {
                    var e = "not-current";
                    if (this.Kl(t)) {
                        var n = this.storage.getItem(af(this.persistenceKey, t));
                        if (n) {
                            var r = gf.yl(t, n);
                            r && (e = r.state)
                        }
                    }
                    return this.Xl.vl(t), this.ql(), e
                }, Bf.prototype.Zl = function(t) {
                    this.Xl.Sl(t), this.ql()
                }, Bf.prototype.td = function(t) {
                    return this.Xl.activeTargetIds.has(t)
                }, Bf.prototype.ed = function(t) {
                    this.removeItem(af(this.persistenceKey, t))
                }, Bf.prototype.sd = function(t, e, n) {
                    this.nd(t, e, n)
                }, Bf.prototype.vu = function(t, e, n) {
                    var r = this;
                    e.forEach(function(t) {
                        r.Yl(t)
                    }), this.currentUser = t, n.forEach(function(t) {
                        r.Gl(t)
                    })
                }, Bf.prototype.rd = function(t) {
                    this.hd(t)
                }, Bf.prototype.Vo = function() {
                    this.ho && (this.platform.window.removeEventListener("storage", this.Cl), this.removeItem(this.kl), this.ho = !1)
                }, Bf.prototype.getItem = function(t) {
                    var e = this.storage.getItem(t);
                    return Ys("SharedClientState", "READ", t, e), e
                }, Bf.prototype.setItem = function(t, e) {
                    Ys("SharedClientState", "SET", t, e), this.storage.setItem(t, e)
                }, Bf.prototype.removeItem = function(t) {
                    Ys("SharedClientState", "REMOVE", t), this.storage.removeItem(t)
                }, Bf.prototype.Fl = function(u) {
                    var t = this;
                    if (u.storageArea === this.storage) {
                        if (Ys("SharedClientState", "EVENT", u.key, u.newValue), u.key === this.kl) return void Hs("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                        this.Tr.lo(function() {
                            return y(t, void 0, void 0, function() {
                                var e, n, r, i, o, s;
                                return v(this, function(t) {
                                    if (this.ho) {
                                        if (null !== u.key)
                                            if (this.xl.test(u.key)) {
                                                if (null == u.newValue) return e = this.od(u.key), [2, this.ad(e, null)];
                                                if (n = this.ud(u.key, u.newValue)) return [2, this.ad(n.clientId, n)]
                                            } else if (this.Ll.test(u.key)) {
                                            if (null !== u.newValue && (r = this._d(u.key, u.newValue))) return [2, this.ld(r)]
                                        } else if (this.Ol.test(u.key)) {
                                            if (null !== u.newValue && (i = this.dd(u.key, u.newValue))) return [2, this.fd(i)]
                                        } else if (u.key === this.Bl) {
                                            if (null !== u.newValue && (o = this.Ul(u.newValue))) return [2, this.Ql(o)]
                                        } else u.key === this.Ml && (s = function(t) {
                                            var e = vu.dr;
                                            if (null != t) try {
                                                var n = JSON.parse(t);
                                                $s("number" == typeof n), e = n
                                            } catch (t) {
                                                Hs("SharedClientState", "Failed to read sequence number from WebStorage", t)
                                            }
                                            return e
                                        }(u.newValue)) !== vu.dr && this.ur(s)
                                    } else this.$l.push(u);
                                    return [2]
                                })
                            })
                        })
                    }
                }, Object.defineProperty(Bf.prototype, "Xl", {
                    get: function() {
                        return this.Nl.get(this.Dl)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Bf.prototype.ql = function() {
                    this.setItem(this.kl, this.Xl.bl())
                }, Bf.prototype.zl = function(t, e, n) {
                    var r = new vf(this.currentUser, t, e, n),
                        i = uf(this.persistenceKey, this.currentUser, t);
                    this.setItem(i, r.bl())
                }, Bf.prototype.Yl = function(t) {
                    var e = uf(this.persistenceKey, this.currentUser, t);
                    this.removeItem(e)
                }, Bf.prototype.hd = function(t) {
                    var e = {
                        clientId: this.Dl,
                        onlineState: t
                    };
                    this.storage.setItem(this.Bl, JSON.stringify(e))
                }, Bf.prototype.nd = function(t, e, n) {
                    var r = af(this.persistenceKey, t),
                        i = new gf(t, e, n);
                    this.setItem(r, i.bl())
                }, Bf.prototype.od = function(t) {
                    var e = this.xl.exec(t);
                    return e ? e[1] : null
                }, Bf.prototype.ud = function(t, e) {
                    var n = this.od(t);
                    return mf.yl(n, e)
                }, Bf.prototype._d = function(t, e) {
                    var n = this.Ll.exec(t),
                        r = Number(n[1]),
                        i = void 0 !== n[2] ? n[2] : null;
                    return vf.yl(new Ir(i), r, e)
                }, Bf.prototype.dd = function(t, e) {
                    var n = this.Ol.exec(t),
                        r = Number(n[1]);
                    return gf.yl(r, e)
                }, Bf.prototype.Ul = function(t) {
                    return wf.yl(t)
                }, Bf.prototype.ld = function(e) {
                    return y(this, void 0, void 0, function() {
                        return v(this, function(t) {
                            return e.user.uid === this.currentUser.uid ? [2, this.ul.Td(e.batchId, e.state, e.error)] : (Ys("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), [2])
                        })
                    })
                }, Bf.prototype.fd = function(t) {
                    return this.ul.Ed(t.targetId, t.state, t.error)
                }, Bf.prototype.ad = function(t, e) {
                    var n = this,
                        r = e ? this.Nl.Ae(t, e) : this.Nl.remove(t),
                        i = this.jl(this.Nl),
                        o = this.jl(r),
                        s = [],
                        u = [];
                    return o.forEach(function(t) {
                        i.has(t) || s.push(t)
                    }), i.forEach(function(t) {
                        o.has(t) || u.push(t)
                    }), this.ul.wd(s, u).then(function() {
                        n.Nl = r
                    })
                }, Bf.prototype.Ql = function(t) {
                    this.Nl.get(t.clientId) && this.y_(t.onlineState)
                }, Bf.prototype.jl = function(t) {
                    var n = ws();
                    return t.forEach(function(t, e) {
                        n = n.He(e.activeTargetIds)
                    }), n
                }, Bf),
                Tf = (qf.prototype.Gl = function(t) {}, qf.prototype.Hl = function(t, e, n) {}, qf.prototype.Jl = function(t) {
                    return this.Id.vl(t), this.Rd[t] || "not-current"
                }, qf.prototype.sd = function(t, e, n) {
                    this.Rd[t] = e
                }, qf.prototype.Zl = function(t) {
                    this.Id.Sl(t)
                }, qf.prototype.td = function(t) {
                    return this.Id.activeTargetIds.has(t)
                }, qf.prototype.ed = function(t) {
                    delete this.Rd[t]
                }, qf.prototype.Wl = function() {
                    return this.Id.activeTargetIds
                }, qf.prototype.Kl = function(t) {
                    return this.Id.activeTargetIds.has(t)
                }, qf.prototype.start = function() {
                    return this.Id = new bf, Promise.resolve()
                }, qf.prototype.vu = function(t, e, n) {}, qf.prototype.rd = function(t) {}, qf.prototype.Vo = function() {}, qf.prototype.lr = function(t) {}, qf),
                If = (Object.defineProperty(Ff.prototype, "gd", {
                    get: function() {
                        return this.Ad
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ff.prototype.pd = function(t, e) {
                    var u = this,
                        a = e ? e.yd : new Ns,
                        h = e ? e.Vd : this.Vd,
                        c = e ? e.ns : this.ns,
                        f = h,
                        l = !1,
                        p = this.query.oe() && h.size === this.query.limit ? h.last() : null,
                        d = this.query.ae() && h.size === this.query.limit ? h.first() : null;
                    if (t.pe(function(t, e) {
                            var n = h.get(t),
                                r = e instanceof Io ? e : null;
                            r = r && (u.query.matches(r) ? r : null);
                            var i = !!n && u.ns.has(n.key),
                                o = !!r && (r.At || u.ns.has(r.key) && r.hasCommittedMutations),
                                s = !1;
                            n && r ? n.data().isEqual(r.data()) ? i !== o && (a.track({
                                type: 3,
                                doc: r
                            }), s = !0) : u.bd(n, r) || (a.track({
                                type: 2,
                                doc: r
                            }), s = !0, (p && 0 < u.query.se(r, p) || d && u.query.se(r, d) < 0) && (l = !0)) : !n && r ? (a.track({
                                type: 0,
                                doc: r
                            }), s = !0) : n && !r && (a.track({
                                type: 1,
                                doc: n
                            }), s = !0, (p || d) && (l = !0)), s && (c = r ? (f = f.add(r), o ? c.add(t) : c.delete(t)) : (f = f.delete(t), c.delete(t)))
                        }), this.query.oe() || this.query.ae())
                        for (; f.size > this.query.limit;) {
                            var n = this.query.oe() ? f.last() : f.first();
                            f = f.delete(n.key), c = c.delete(n.key), a.track({
                                type: 1,
                                doc: n
                            })
                        }
                    return {
                        Vd: f,
                        yd: a,
                        vd: l,
                        ns: c
                    }
                }, Ff.prototype.bd = function(t, e) {
                    return t.At && e.hasCommittedMutations && !e.At
                }, Ff.prototype.On = function(t, e, n) {
                    var o = this,
                        r = this.Vd;
                    this.Vd = t.Vd, this.ns = t.ns;
                    var i = t.yd.es();
                    i.sort(function(t, e) {
                        return r = t.type, i = e.type, n(r) - n(i) || o.query.se(t.doc, e.doc);

                        function n(t) {
                            switch (t) {
                                case 0:
                                    return 1;
                                case 2:
                                case 3:
                                    return 2;
                                case 1:
                                    return 0;
                                default:
                                    return Js()
                            }
                        }
                        var r, i
                    }), this.Sd(n);
                    var s = e ? this.Dd() : [],
                        u = 0 === this.Pd.size && this.fs ? 1 : 0,
                        a = u !== this.md;
                    return this.md = u, 0 !== i.length || a ? {
                        snapshot: new As(this.query, t.Vd, r, i, t.ns, 0 == u, a, !1),
                        Cd: s
                    } : {
                        Cd: s
                    }
                }, Ff.prototype.Fd = function(t) {
                    return this.fs && "Offline" === t ? (this.fs = !1, this.On({
                        Vd: this.Vd,
                        yd: new Ns,
                        ns: this.ns,
                        vd: !1
                    }, !1)) : {
                        Cd: []
                    }
                }, Ff.prototype.Nd = function(t) {
                    return !this.Ad.has(t) && !!this.Vd.has(t) && !this.Vd.get(t).At
                }, Ff.prototype.Sd = function(t) {
                    var e = this;
                    t && (t.Ts.forEach(function(t) {
                        return e.Ad = e.Ad.add(t)
                    }), t.Es.forEach(function(t) {}), t.ws.forEach(function(t) {
                        return e.Ad = e.Ad.delete(t)
                    }), this.fs = t.fs)
                }, Ff.prototype.Dd = function() {
                    var e = this;
                    if (!this.fs) return [];
                    var n = this.Pd;
                    this.Pd = gs(), this.Vd.forEach(function(t) {
                        e.Nd(t.key) && (e.Pd = e.Pd.add(t.key))
                    });
                    var r = [];
                    return n.forEach(function(t) {
                        e.Pd.has(t) || r.push(new cf(t))
                    }), this.Pd.forEach(function(t) {
                        n.has(t) || r.push(new hf(t))
                    }), r
                }, Ff.prototype.$d = function(t) {
                    this.Ad = t.ju, this.Pd = gs();
                    var e = this.pd(t.documents);
                    return this.On(e, !0)
                }, Ff.prototype.kd = function() {
                    return As.os(this.query, this.Vd, this.ns, 0 === this.md)
                }, Ff),
                Nf = (jf.prototype.xd = function() {
                    this.Ld()
                }, jf.prototype.Ld = function() {
                    var t = this;
                    this.Na.gr(function() {
                        return y(t, void 0, void 0, function() {
                            var e, n, r = this;
                            return v(this, function(t) {
                                return e = new Hc(this.w_), (n = this.Od(e)) && n.then(function(t) {
                                    r.Ra.co(function() {
                                        return e.commit().then(function() {
                                            r.Pa.resolve(t)
                                        }).catch(function(t) {
                                            r.Bd(t)
                                        })
                                    })
                                }).catch(function(t) {
                                    r.Bd(t)
                                }), [2]
                            })
                        })
                    })
                }, jf.prototype.Od = function(t) {
                    try {
                        var e = this.updateFunction(t);
                        return !ii(e) && e.catch && e.then ? e : (this.Pa.reject(Error("Transaction callback must return a Promise")), null)
                    } catch (t) {
                        return this.Pa.reject(t), null
                    }
                }, jf.prototype.Bd = function(t) {
                    var e = this;
                    0 < this.Md && this.qd(t) ? (--this.Md, this.Ra.co(function() {
                        return e.Ld(), Promise.resolve()
                    })) : this.Pa.reject(t)
                }, jf.prototype.qd = function(t) {
                    if ("FirebaseError" !== t.name) return !1;
                    var e = t.code;
                    return "aborted" === e || "failed-precondition" === e || !Jo(e)
                }, jf),
                Af = (Object.defineProperty(Uf.prototype, "sf", {
                    get: function() {
                        return !0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Uf.prototype.subscribe = function(t) {
                    this.Kd = t
                }, Uf.prototype.listen = function(s) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.if("listen()"), (r = this.Gd.get(s)) ? (e = r.targetId, this.Wd.Jl(e), n = r.view.kd(), [3, 4]) : [3, 1];
                                case 1:
                                    return [4, this.M_.Uu(s.ee())];
                                case 2:
                                    return i = t.sent(), o = this.Wd.Jl(i.targetId), e = i.targetId, [4, this.nf(s, e, "current" === o)];
                                case 3:
                                    n = t.sent(), this.sf && this.Qd.listen(i), t.label = 4;
                                case 4:
                                    return [2, n]
                            }
                        })
                    })
                }, Uf.prototype.nf = function(u, a, h) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.M_.Wu(u, !0)];
                                case 1:
                                    return e = t.sent(), n = new If(u, e.ju), r = n.pd(e.documents), i = Ss.ds(a, h && "Offline" !== this.onlineState), o = n.On(r, this.sf, i), this.rf(a, o.Cd), s = new ff(u, a, n), [2, (this.Gd.set(u, s), this.zd.has(a) ? this.zd.get(a).push(u) : this.zd.set(a, [u]), o.snapshot)]
                            }
                        })
                    })
                }, Uf.prototype.ol = function(i) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.if("unlisten()"), e = this.Gd.get(i), 1 < (n = this.zd.get(e.targetId)).length ? [2, (this.zd.set(e.targetId, n.filter(function(t) {
                                        return !t.isEqual(i)
                                    })), void this.Gd.delete(i))] : this.sf ? (this.Wd.Zl(e.targetId), this.Wd.Kl(e.targetId) ? [3, 2] : [4, this.M_.Qu(e.targetId, !1).then(function() {
                                        r.Wd.ed(e.targetId), r.Qd.ol(e.targetId), r.hf(e.targetId)
                                    }).catch(Ih)]) : [3, 3];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [3, 5];
                                case 3:
                                    return this.hf(e.targetId), [4, this.M_.Qu(e.targetId, !0)];
                                case 4:
                                    t.sent(), t.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.write = function(i, o) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.if("write()"), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 5, , 6]), [4, this.M_.Fu(i)];
                                case 2:
                                    return e = t.sent(), this.Wd.Gl(e.batchId), this.af(e.batchId, o), [4, this.uf(e.Dn)];
                                case 3:
                                    return t.sent(), [4, this.Qd.il()];
                                case 4:
                                    return t.sent(), [3, 6];
                                case 5:
                                    return n = t.sent(), r = uh(n, "Failed to persist write"), o.reject(r), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.runTransaction = function(t, e, n) {
                    new Nf(t, this.w_, e, n).xd()
                }, Uf.prototype.Mu = function(n) {
                    return y(this, void 0, void 0, function() {
                        var e, r = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.if("applyRemoteEvent()"), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.M_.Mu(n)];
                                case 2:
                                    return e = t.sent(), n.as.forEach(function(t, e) {
                                        var n = r.Jd.get(e);
                                        n && ($s(t.Ts.size + t.Es.size + t.ws.size <= 1), 0 < t.Ts.size ? n.Ud = !0 : 0 < t.Es.size ? $s(n.Ud) : 0 < t.ws.size && ($s(n.Ud), n.Ud = !1))
                                    }), [4, this.uf(e, n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, Ih(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.Fd = function(r, t) {
                    this.if("applyOnlineStateChange()");
                    var i = [];
                    this.Gd.forEach(function(t, e) {
                        var n = e.view.Fd(r);
                        n.snapshot && i.push(n.snapshot)
                    }), this.Kd.cf(r), this.Kd.r_(i), this.onlineState = r
                }, Uf.prototype.fl = function(u, a) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.if("rejectListens()"), this.Wd.sd(u, "rejected", a), e = this.Jd.get(u), (n = e && e.key) ? (r = (r = new Zo(Jr.N)).Ae(n, new No(n, Vr.min())), i = gs().add(n), o = new _s(Vr.min(), new Map, new ss(nu), r, i), [4, this.Mu(o)]) : [3, 2];
                                case 1:
                                    return t.sent(), this.Yd = this.Yd.remove(n), this.Jd.delete(u), this._f(), [3, 4];
                                case 2:
                                    return [4, this.M_.Qu(u, !1).then(function() {
                                        return s.hf(u, a)
                                    }).catch(Ih)];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.Al = function(r) {
                    return y(this, void 0, void 0, function() {
                        var e, n;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.if("applySuccessfulWrite()"), e = r.batch.batchId, t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.M_.Nu(r)];
                                case 2:
                                    return n = t.sent(), this.lf(e, null), this.df(e), this.Wd.Hl(e, "acknowledged"), [4, this.uf(n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, Ih(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.Pl = function(n, r) {
                    return y(this, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.if("rejectFailedWrite()"), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.M_.ku(n)];
                                case 2:
                                    return e = t.sent(), this.lf(n, r), this.df(n), this.Wd.Hl(n, "rejected", r), [4, this.uf(e)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, Ih(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.ff = function(o) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.Qd.Q_() || Ys("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, this.M_.ta()];
                                case 2:
                                    return -1 === (e = t.sent()) ? [2, void o.resolve()] : ((n = this.tf.get(e) || []).push(o), this.tf.set(e, n), [3, 4]);
                                case 3:
                                    return r = t.sent(), i = uh(r, "Initialization of waitForPendingWrites() operation failed"), o.reject(i), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, Uf.prototype.df = function(t) {
                    (this.tf.get(t) || []).forEach(function(t) {
                        t.resolve()
                    }), this.tf.delete(t)
                }, Uf.prototype.Tf = function(e) {
                    this.tf.forEach(function(t) {
                        t.forEach(function(t) {
                            t.reject(new Dr(Rr.CANCELLED, e))
                        })
                    }), this.tf.clear()
                }, Uf.prototype.af = function(t, e) {
                    var n = this.Zd[this.currentUser.s()];
                    n = (n = n || new Zo(nu)).Ae(t, e), this.Zd[this.currentUser.s()] = n
                }, Uf.prototype.lf = function(t, e) {
                    var n = this.Zd[this.currentUser.s()];
                    if (n) {
                        var r = n.get(t);
                        r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.Zd[this.currentUser.s()] = n
                    }
                }, Uf.prototype.hf = function(t, e) {
                    var n = this;
                    void 0 === e && (e = null), this.Wd.Zl(t);
                    for (var r = 0, i = this.zd.get(t); r < i.length; r++) {
                        var o = i[r];
                        this.Gd.delete(o), e && this.Kd.Ef(o, e)
                    }
                    this.zd.delete(t), this.sf && this.Xd.ic(t).forEach(function(t) {
                        n.Xd.Ch(t) || n.wf(t)
                    })
                }, Uf.prototype.wf = function(t) {
                    var e = this.Yd.get(t);
                    null !== e && (this.Qd.ol(e), this.Yd = this.Yd.remove(t), this.Jd.delete(e), this._f())
                }, Uf.prototype.rf = function(t, e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        i instanceof hf ? (this.Xd.yh(i.key, t), this.If(i)) : i instanceof cf ? (Ys("SyncEngine", "Document no longer in limbo: " + i.key), this.Xd.vh(i.key, t), this.Xd.Ch(i.key) || this.wf(i.key)) : Js()
                    }
                }, Uf.prototype.If = function(t) {
                    var e = t.key;
                    this.Yd.get(e) || (Ys("SyncEngine", "New document in limbo: " + e), this.Hd.push(e), this._f())
                }, Uf.prototype._f = function() {
                    for (; 0 < this.Hd.length && this.Yd.size < this.jd;) {
                        var t = this.Hd.shift(),
                            e = this.ef.next();
                        this.Jd.set(e, new lf(t)), this.Yd = this.Yd.Ae(t, e), this.Qd.listen(new Co(So.Wt(t.path).ee(), e, 2, vu.dr))
                    }
                }, Uf.prototype.Rf = function() {
                    return this.Yd
                }, Uf.prototype.Af = function() {
                    return this.Hd
                }, Uf.prototype.uf = function(r, a) {
                    return y(this, void 0, void 0, function() {
                        var o, s, e, u = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return o = [], s = [], e = [], this.Gd.forEach(function(t, i) {
                                        e.push(Promise.resolve().then(function() {
                                            var n = i.view.pd(r);
                                            return n.vd ? u.M_.Wu(i.query, !1).then(function(t) {
                                                var e = t.documents;
                                                return i.view.pd(e, n)
                                            }) : n
                                        }).then(function(t) {
                                            var e = a && a.as.get(i.targetId),
                                                n = i.view.On(t, u.sf, e);
                                            if (u.rf(i.targetId, n.Cd), n.snapshot) {
                                                u.sf && u.Wd.sd(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot);
                                                var r = yu.ar(i.targetId, n.snapshot);
                                                s.push(r)
                                            }
                                        }))
                                    }), [4, Promise.all(e)];
                                case 1:
                                    return t.sent(), this.Kd.r_(o), [4, this.M_.Ou(s)];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Uf.prototype.if = function(t) {}, Uf.prototype.gl = function(n) {
                    return y(this, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.currentUser.isEqual(n) ? [3, 3] : [4, this.M_.vu(n)];
                                case 1:
                                    return e = t.sent(), this.currentUser = n, this.Tf("'waitForPendingWrites' promise is rejected due to a user change."), this.Wd.vu(n, e.Du, e.Cu), [4, this.uf(e.Su)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [4, this.Qd.gl()];
                                case 4:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Uf.prototype.enableNetwork = function() {
                    return this.Qd.enableNetwork()
                }, Uf.prototype.disableNetwork = function() {
                    return this.Qd.disableNetwork()
                }, Uf.prototype.ei = function(t) {
                    var e = this.Jd.get(t);
                    if (e && e.Ud) return gs().add(e.key);
                    var n = gs(),
                        r = this.zd.get(t);
                    if (!r) return n;
                    for (var i = 0, o = r; i < o.length; i++) {
                        var s = o[i],
                            u = this.Gd.get(s);
                        n = n.He(u.view.gd)
                    }
                    return n
                }, Uf),
                _f = (n(Mf, df = Af), Object.defineProperty(Mf.prototype, "sf", {
                    get: function() {
                        return !0 === this.mf
                    },
                    enumerable: !0,
                    configurable: !0
                }), Mf.prototype.enableNetwork = function() {
                    return this.M_.uo(!0), df.prototype.enableNetwork.call(this)
                }, Mf.prototype.disableNetwork = function() {
                    return this.M_.uo(!1), df.prototype.disableNetwork.call(this)
                }, Mf.prototype.Pf = function(r) {
                    return y(this, void 0, void 0, function() {
                        var e, n;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.M_.Wu(r.query, !0)];
                                case 1:
                                    return e = t.sent(), n = r.view.$d(e), [2, (this.mf && this.rf(r.targetId, n.Cd), n)]
                            }
                        })
                    })
                }, Mf.prototype.Fd = function(t, e) {
                    this.sf && 0 === e && (df.prototype.Fd.call(this, t, e), this.Wd.rd(t)), this.sf || 1 !== e || df.prototype.Fd.call(this, t, e)
                }, Mf.prototype.Td = function(n, r, i) {
                    return y(this, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.if("applyBatchState()"), [4, this.M_.Gu(n)];
                                case 1:
                                    return null === (e = t.sent()) ? [3, 6] : "pending" !== r ? [3, 3] : [4, this.Qd.il()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    "acknowledged" === r || "rejected" === r ? (this.lf(n, i || null), this.M_.zu(n)) : Js(), t.label = 4;
                                case 4:
                                    return [4, this.uf(e)];
                                case 5:
                                    return t.sent(), [3, 7];
                                case 6:
                                    Ys("SyncEngine", "Cannot apply mutation batch with id: " + n), t.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, Mf.prototype.pl = function(h) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s, u, a = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return !0 !== h || !0 === this.mf ? [3, 3] : (e = this.Wd.Wl(), [4, this.Vf(e.W(), !0)]);
                                case 1:
                                    return n = t.sent(), this.mf = !0, [4, this.Qd.pl(!0)];
                                case 2:
                                    for (t.sent(), r = 0, i = n; r < i.length; r++) o = i[r], this.Qd.listen(o);
                                    return [3, 7];
                                case 3:
                                    return !1 !== h || !1 === this.mf ? [3, 7] : (s = [], u = Promise.resolve(), this.zd.forEach(function(t, e) {
                                        a.Wd.td(e) ? s.push(e) : u = u.then(function() {
                                            return a.hf(e), a.M_.Qu(e, !0)
                                        }), a.Qd.ol(e)
                                    }), [4, u]);
                                case 4:
                                    return t.sent(), [4, this.Vf(s, !1)];
                                case 5:
                                    return t.sent(), this.gf(), this.mf = !1, [4, this.Qd.pl(!1)];
                                case 6:
                                    t.sent(), t.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, Mf.prototype.gf = function() {
                    var n = this;
                    this.Jd.forEach(function(t, e) {
                        n.Qd.ol(e)
                    }), this.Xd.nc(), this.Jd = new Map, this.Yd = new Zo(Jr.N)
                }, Mf.prototype.Vf = function(d, t) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s, u, a, h, c, f, l, p;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    e = [], n = [], r = 0, i = d, t.label = 1;
                                case 1:
                                    return r < i.length ? (o = i[r], s = void 0, (u = this.zd.get(o)) && 0 !== u.length ? [4, this.M_.Uu(u[0].ee())] : [3, 7]) : [3, 13];
                                case 2:
                                    s = t.sent(), a = 0, h = u, t.label = 3;
                                case 3:
                                    return a < h.length ? (c = h[a], f = this.Gd.get(c), [4, this.Pf(f)]) : [3, 6];
                                case 4:
                                    (l = t.sent()).snapshot && n.push(l.snapshot), t.label = 5;
                                case 5:
                                    return a++, [3, 3];
                                case 6:
                                    return [3, 11];
                                case 7:
                                    return [4, this.M_.Hu(o)];
                                case 8:
                                    return p = t.sent(), [4, this.M_.Uu(p)];
                                case 9:
                                    return s = t.sent(), [4, this.nf(this.pf(p), o, !1)];
                                case 10:
                                    t.sent(), t.label = 11;
                                case 11:
                                    e.push(s), t.label = 12;
                                case 12:
                                    return r++, [3, 1];
                                case 13:
                                    return [2, (this.Kd.r_(n), e)]
                            }
                        })
                    })
                }, Mf.prototype.pf = function(t) {
                    return new So(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt)
                }, Mf.prototype.So = function() {
                    return this.M_.So()
                }, Mf.prototype.Ed = function(r, i, o) {
                    return y(this, void 0, void 0, function() {
                        var e, n;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.mf ? (Ys("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
                                case 1:
                                    if (!this.zd.has(r)) return [3, 8];
                                    switch (i) {
                                        case "current":
                                        case "not-current":
                                            return [3, 2];
                                        case "rejected":
                                            return [3, 5]
                                    }
                                    return [3, 7];
                                case 2:
                                    return [4, this.M_.Kr()];
                                case 3:
                                    return e = t.sent(), n = _s.ls(r, "current" === i), [4, this.uf(e, n)];
                                case 4:
                                    return t.sent(), [3, 8];
                                case 5:
                                    return [4, this.M_.Qu(r, !0)];
                                case 6:
                                    return t.sent(), this.hf(r, o), [3, 8];
                                case 7:
                                    Js(), t.label = 8;
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, Mf.prototype.wd = function(l, p) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s, u, a, h, c, f = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.mf) return [3, 10];
                                    e = 0, n = l, t.label = 1;
                                case 1:
                                    return e < n.length ? (r = n[e], this.zd.has(r) ? (Ys("SyncEngine", "Adding an already active target " + r), [3, 5]) : [4, this.M_.Hu(r)]) : [3, 6];
                                case 2:
                                    return i = t.sent(), [4, this.M_.Uu(i)];
                                case 3:
                                    return o = t.sent(), [4, this.nf(this.pf(i), o.targetId, !1)];
                                case 4:
                                    t.sent(), this.Qd.listen(o), t.label = 5;
                                case 5:
                                    return e++, [3, 1];
                                case 6:
                                    s = function(e) {
                                        return v(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return u.zd.has(e) ? [4, u.M_.Qu(e, !1).then(function() {
                                                        f.Qd.ol(e), f.hf(e)
                                                    }).catch(Ih)] : [3, 2];
                                                case 1:
                                                    t.sent(), t.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        })
                                    }, u = this, a = 0, h = p, t.label = 7;
                                case 7:
                                    return a < h.length ? (c = h[a], [5, s(c)]) : [3, 10];
                                case 8:
                                    t.sent(), t.label = 9;
                                case 9:
                                    return a++, [3, 7];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, Mf),
                Sf = (Cf.prototype.listen = function(u) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i, o, s;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (e = u.query, n = !1, (r = this.vf.get(e)) || (n = !0, r = new pf), !n) return [3, 4];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), i = r, [4, this.ul.listen(e)];
                                case 2:
                                    return i.yf = t.sent(), [3, 4];
                                case 3:
                                    return o = t.sent(), s = uh(o, "Initialization of query '" + u.query + "' failed"), [2, void u.onError(s)];
                                case 4:
                                    return this.vf.set(e, r), r.bf.push(u), u.Fd(this.onlineState), r.yf && u.Df(r.yf) && this.Cf(), [2]
                            }
                        })
                    })
                }, Cf.prototype.ol = function(o) {
                    return y(this, void 0, void 0, function() {
                        var e, n, r, i;
                        return v(this, function(t) {
                            return e = o.query, n = !1, (r = this.vf.get(e)) && 0 <= (i = r.bf.indexOf(o)) && (r.bf.splice(i, 1), n = 0 === r.bf.length), n ? [2, (this.vf.delete(e), this.ul.ol(e))] : [2]
                        })
                    })
                }, Cf.prototype.r_ = function(t) {
                    for (var e = !1, n = 0, r = t; n < r.length; n++) {
                        var i = r[n],
                            o = i.query,
                            s = this.vf.get(o);
                        if (s) {
                            for (var u = 0, a = s.bf; u < a.length; u++) a[u].Df(i) && (e = !0);
                            s.yf = i
                        }
                    }
                    e && this.Cf()
                }, Cf.prototype.Ef = function(t, e) {
                    var n = this.vf.get(t);
                    if (n)
                        for (var r = 0, i = n.bf; r < i.length; r++) i[r].onError(e);
                    this.vf.delete(t)
                }, Cf.prototype.cf = function(i) {
                    this.onlineState = i;
                    var o = !1;
                    this.vf.forEach(function(t, e) {
                        for (var n = 0, r = e.bf; n < r.length; n++) r[n].Fd(i) && (o = !0)
                    }), o && this.Cf()
                }, Cf.prototype.Ff = function(t) {
                    this.Sf.add(t), t.next()
                }, Cf.prototype.Nf = function(t) {
                    this.Sf.delete(t)
                }, Cf.prototype.Cf = function() {
                    this.Sf.forEach(function(t) {
                        t.next()
                    })
                }, Cf),
                Rf = (Vf.prototype.Df = function(t) {
                    if (!this.options.includeMetadataChanges) {
                        for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                            var i = r[n];
                            3 !== i.type && e.push(i)
                        }
                        t = new As(t.query, t.docs, t.ss, e, t.ns, t.fromCache, t.rs, !0)
                    }
                    var o = !1;
                    return this.kf ? this.xf(t) && (this.$f.next(t), o = !0) : this.Lf(t, this.onlineState) && (this.Of(t), o = !0), this.Mf = t, o
                }, Vf.prototype.onError = function(t) {
                    this.$f.error(t)
                }, Vf.prototype.Fd = function(t) {
                    this.onlineState = t;
                    var e = !1;
                    return this.Mf && !this.kf && this.Lf(this.Mf, t) && (this.Of(this.Mf), e = !0), e
                }, Vf.prototype.Lf = function(t, e) {
                    if (!t.fromCache) return !0;
                    var n = "Offline" !== e;
                    return !(this.options.Bf && n || t.docs.B() && "Offline" !== e)
                }, Vf.prototype.xf = function(t) {
                    if (0 < t.docChanges.length) return !0;
                    var e = this.Mf && this.Mf.hasPendingWrites !== t.hasPendingWrites;
                    return !(!t.rs && !e) && !0 === this.options.includeMetadataChanges
                }, Vf.prototype.Of = function(t) {
                    t = As.os(t.query, t.docs, t.ns, t.fromCache), this.kf = !0, this.$f.next(t)
                }, Vf),
                Df = (Lf.prototype.bu = function(t) {
                    this.qf = t
                }, Lf.prototype.Zn = function(e, r, i, o) {
                    var s = this;
                    return r.te() || i.isEqual(Vr.min()) ? this.Uf(e, r) : this.qf.Yn(e, o).next(function(t) {
                        var n = s.Qf(r, t);
                        return (r.oe() || r.ae()) && s.vd(r.Bt, n, o, i) ? s.Uf(e, r) : (Ks() <= p.DEBUG && Ys("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), r.toString()), s.qf.Zn(e, r, i).next(function(e) {
                            return n.forEach(function(t) {
                                e = e.Ae(t.key, t)
                            }), e
                        }))
                    })
                }, Lf.prototype.Qf = function(n, t) {
                    var r = new ss(function(t, e) {
                        return n.se(t, e)
                    });
                    return t.forEach(function(t, e) {
                        e instanceof Io && n.matches(e) && (r = r.add(e))
                    }), r
                }, Lf.prototype.vd = function(t, e, n, r) {
                    if (n.size !== e.size) return !0;
                    var i = "F" === t ? e.last() : e.first();
                    return !!i && (i.hasPendingWrites || 0 < i.version.S(r))
                }, Lf.prototype.Uf = function(t, e) {
                    return Ks() <= p.DEBUG && Ys("IndexFreeQueryEngine", "Using full collection scan to execute query:", e.toString()), this.qf.Zn(t, e, Vr.min())
                }, Lf),
                Pf = (kf.prototype.Ho = function(t) {
                    return cu.resolve(0 === this.Wn.length)
                }, kf.prototype.Yo = function(t, e, n, r) {
                    var i = this.Wf;
                    this.Wf++, 0 < this.Wn.length && this.Wn[this.Wn.length - 1];
                    var o = new au(i, e, n, r);
                    this.Wn.push(o);
                    for (var s = 0, u = r; s < u.length; s++) {
                        var a = u[s];
                        this.jf = this.jf.add(new Ah(a.key, i)), this.jn.Dr(t, a.key.path.M())
                    }
                    return cu.resolve(o)
                }, kf.prototype.Jo = function(t, e) {
                    return cu.resolve(this.Kf(e))
                }, kf.prototype.Zo = function(t, e) {
                    var n = e + 1,
                        r = this.Gf(n),
                        i = r < 0 ? 0 : r;
                    return cu.resolve(this.Wn.length > i ? this.Wn[i] : null)
                }, kf.prototype.ta = function() {
                    return cu.resolve(0 === this.Wn.length ? -1 : this.Wf - 1)
                }, kf.prototype.ea = function(t) {
                    return cu.resolve(this.Wn.slice())
                }, kf.prototype.Gn = function(t, e) {
                    var n = this,
                        r = new Ah(e, 0),
                        i = new Ah(e, Number.POSITIVE_INFINITY),
                        o = [];
                    return this.jf.Ke([r, i], function(t) {
                        var e = n.Kf(t.hc);
                        o.push(e)
                    }), cu.resolve(o)
                }, kf.prototype.Xn = function(t, e) {
                    var r = this,
                        i = new ss(nu);
                    return e.forEach(function(t) {
                        var e = new Ah(t, 0),
                            n = new Ah(t, Number.POSITIVE_INFINITY);
                        r.jf.Ke([e, n], function(t) {
                            i = i.add(t.hc)
                        })
                    }), cu.resolve(this.zf(i))
                }, kf.prototype.nr = function(t, e) {
                    var n = e.path,
                        r = n.length + 1,
                        i = n;
                    Jr.et(i) || (i = i.child(""));
                    var o = new Ah(new Jr(i), 0),
                        s = new ss(nu);
                    return this.jf.Ge(function(t) {
                        var e = t.key.path;
                        return !!n.q(e) && (e.length === r && (s = s.add(t.hc)), !0)
                    }, o), cu.resolve(this.zf(s))
                }, kf.prototype.zf = function(t) {
                    var n = this,
                        r = [];
                    return t.forEach(function(t) {
                        var e = n.Kf(t);
                        null !== e && r.push(e)
                    }), r
                }, kf.prototype.ia = function(n, r) {
                    var i = this;
                    $s(0 === this.Hf(r.batchId, "removed")), this.Wn.shift();
                    var o = this.jf;
                    return cu.forEach(r.mutations, function(t) {
                        var e = new Ah(t.key, r.batchId);
                        return o = o.delete(e), i.hh.Uo(n, t.key)
                    }).next(function() {
                        i.jf = o
                    })
                }, kf.prototype.na = function(t) {}, kf.prototype.Ch = function(t, e) {
                    var n = new Ah(e, 0),
                        r = this.jf.ze(n);
                    return cu.resolve(e.isEqual(r && r.key))
                }, kf.prototype.ra = function(t) {
                    return this.Wn.length, cu.resolve()
                }, kf.prototype.Hf = function(t, e) {
                    return this.Gf(t)
                }, kf.prototype.Gf = function(t) {
                    return 0 === this.Wn.length ? 0 : t - this.Wn[0].batchId
                }, kf.prototype.Kf = function(t) {
                    var e = this.Gf(t);
                    return e < 0 || e >= this.Wn.length ? null : this.Wn[e]
                }, kf),
                xf = (Of.prototype.Nn = function(t, e, n) {
                    var r = e.key,
                        i = this.docs.get(r),
                        o = i ? i.size : 0,
                        s = this.Yf(e);
                    return this.docs = this.docs.Ae(r, {
                        xr: e,
                        size: s,
                        readTime: n
                    }), this.size += s - o, this.jn.Dr(t, r.path.M())
                }, Of.prototype.kn = function(t) {
                    var e = this.docs.get(t);
                    e && (this.docs = this.docs.remove(t), this.size -= e.size)
                }, Of.prototype.Mn = function(t, e) {
                    var n = this.docs.get(e);
                    return cu.resolve(n ? n.xr : null)
                }, Of.prototype.getEntries = function(t, e) {
                    var n = this,
                        r = ls();
                    return e.forEach(function(t) {
                        var e = n.docs.get(t);
                        r = r.Ae(t, e ? e.xr : null)
                    }), cu.resolve(r)
                }, Of.prototype.Zn = function(t, e, n) {
                    for (var r = ds(), i = new Jr(e.path.child("")), o = this.docs.ve(i); o.$e();) {
                        var s = o.Ne(),
                            u = s.key,
                            a = s.value,
                            h = a.xr,
                            c = a.readTime;
                        if (!e.path.q(u.path)) break;
                        c.S(n) <= 0 || h instanceof Io && e.matches(h) && (r = r.Ae(h.key, h))
                    }
                    return cu.resolve(r)
                }, Of.prototype.Jf = function(t, e) {
                    return cu.forEach(this.docs, function(t) {
                        return e(t)
                    })
                }, Of.prototype.Yr = function(t) {
                    return new Of.Jr(this)
                }, Of.prototype.Zr = function(t) {
                    return cu.resolve(this.size)
                }, Of);

            function Of(t, e) {
                this.jn = t, this.Yf = e, this.docs = new Zo(Jr.N), this.size = 0
            }

            function kf(t, e) {
                this.jn = t, this.hh = e, this.Wn = [], this.Wf = 1, this.jf = new ss(Ah.Ju)
            }

            function Lf() {}

            function Vf(t, e, n) {
                this.query = t, this.$f = e, this.kf = !1, this.Mf = null, this.onlineState = "Unknown", this.options = n || {}
            }

            function Cf(t) {
                this.ul = t, this.vf = new uu(function(t) {
                    return t.canonicalId()
                }), this.onlineState = "Unknown", this.Sf = new Set, this.ul.subscribe(this)
            }

            function Mf(t, e, n, r, i, o) {
                var s = this;
                return (s = df.call(this, t, e, n, r, i, o) || this).M_ = t, s.mf = void 0, s
            }

            function Uf(t, e, n, r, i, o) {
                this.M_ = t, this.Qd = e, this.w_ = n, this.Wd = r, this.currentUser = i, this.jd = o, this.Kd = null, this.Gd = new uu(function(t) {
                    return t.canonicalId()
                }), this.zd = new Map, this.Hd = [], this.Yd = new Zo(Jr.N), this.Jd = new Map, this.Xd = new Nh, this.Zd = {}, this.tf = new Map, this.ef = Hu.rh(), this.onlineState = "Unknown"
            }

            function jf(t, e, n, r) {
                this.Ra = t, this.w_ = e, this.updateFunction = n, this.Pa = r, this.Md = 5, this.Na = new Ru(this.Ra, "transaction_retry")
            }

            function Ff(t, e) {
                this.query = t, this.Ad = e, this.md = null, this.fs = !1, this.Pd = gs(), this.ns = gs(), this.Vd = new Is(t.se.bind(t))
            }

            function qf() {
                this.Id = new bf, this.Rd = {}, this.ul = null, this.y_ = null, this.ur = null
            }

            function Bf(t, e, n, r, i) {
                if (this.Tr = t, this.platform = e, this.persistenceKey = n, this.Dl = r, this.ul = null, this.y_ = null, this.ur = null, this.Cl = this.Fl.bind(this), this.Nl = new Zo(nu), this.ho = !1, this.$l = [], !Bf.zh(this.platform)) throw new Dr(Rr.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
                var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                this.storage = this.platform.window.localStorage, this.currentUser = i, this.kl = sf(this.persistenceKey, this.Dl), this.Ml = "firestore_sequence_number_" + this.persistenceKey, this.Nl = this.Nl.Ae(this.Dl, new bf), this.xl = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Ll = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Ol = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Bl = "firestore_online_state_" + this.persistenceKey, this.platform.window.addEventListener("storage", this.Cl)
            }

            function Gf() {
                this.activeTargetIds = ws()
            }

            function zf(t, e) {
                this.clientId = t, this.onlineState = e
            }

            function Wf(t, e) {
                this.clientId = t, this.activeTargetIds = e
            }

            function Qf(t, e, n) {
                this.targetId = t, this.state = e, this.error = n
            }

            function Kf(t, e, n, r) {
                this.user = t, this.batchId = e, this.state = n, this.error = r
            }

            function Yf(t) {
                var e = this;
                return (e = yf.call(this) || this).th = t, e
            }
            xf.Jr = (n(Yf, yf = fu), Yf.prototype.On = function(n) {
                var r = this,
                    i = [];
                return this.Dn.forEach(function(t, e) {
                    e ? i.push(r.th.Nn(n, e, r.readTime)) : r.th.kn(t)
                }), cu.vn(i)
            }, Yf.prototype.xn = function(t, e) {
                return this.th.Mn(t, e)
            }, Yf.prototype.Ln = function(t, e) {
                return this.th.getEntries(t, e)
            }, Yf);
            var Hf, Xf, Jf = (pl.prototype.js = function(t, n) {
                    return this.Xf.forEach(function(t, e) {
                        return n(e)
                    }), cu.resolve()
                }, pl.prototype._h = function(t) {
                    return cu.resolve(this.lastRemoteSnapshotVersion)
                }, pl.prototype.lh = function(t) {
                    return cu.resolve(this.Zf)
                }, pl.prototype.oh = function(t) {
                    return this.highestTargetId = this.eT.next(), cu.resolve(this.highestTargetId)
                }, pl.prototype.dh = function(t, e, n) {
                    return n && (this.lastRemoteSnapshotVersion = n), e > this.Zf && (this.Zf = e), cu.resolve()
                }, pl.prototype.Th = function(t) {
                    this.Xf.set(t.target, t);
                    var e = t.targetId;
                    e > this.highestTargetId && (this.eT = new Hu(e), this.highestTargetId = e), t.sequenceNumber > this.Zf && (this.Zf = t.sequenceNumber)
                }, pl.prototype.fh = function(t, e) {
                    return this.Th(e), this.targetCount += 1, cu.resolve()
                }, pl.prototype.wh = function(t, e) {
                    return this.Th(e), cu.resolve()
                }, pl.prototype.Ih = function(t, e) {
                    return this.Xf.delete(e.target), this.tT.ic(e.targetId), --this.targetCount, cu.resolve()
                }, pl.prototype.Ah = function(n, r, i) {
                    var o = this,
                        s = 0,
                        u = [];
                    return this.Xf.forEach(function(t, e) {
                        e.sequenceNumber <= r && null === i.get(e.targetId) && (o.Xf.delete(t), u.push(o.Rh(n, e.targetId)), s++)
                    }), cu.vn(u).next(function() {
                        return s
                    })
                }, pl.prototype.Vh = function(t) {
                    return cu.resolve(this.targetCount)
                }, pl.prototype.gh = function(t, e) {
                    var n = this.Xf.get(e) || null;
                    return cu.resolve(n)
                }, pl.prototype.ph = function(t, e, n) {
                    return this.tT.tc(e, n), cu.resolve()
                }, pl.prototype.bh = function(e, t, n) {
                    this.tT.sc(t, n);
                    var r = this.persistence.hh,
                        i = [];
                    return r && t.forEach(function(t) {
                        i.push(r.Uo(e, t))
                    }), cu.vn(i)
                }, pl.prototype.Rh = function(t, e) {
                    return this.tT.ic(e), cu.resolve()
                }, pl.prototype.Sh = function(t, e) {
                    var n = this.tT.rc(e);
                    return cu.resolve(n)
                }, pl.prototype.Ch = function(t, e) {
                    return cu.resolve(this.tT.Ch(e))
                }, pl),
                $f = (ll.prototype.start = function() {
                    return Promise.resolve()
                }, ll.prototype.Vo = function() {
                    return this.Uh = !1, Promise.resolve()
                }, Object.defineProperty(ll.prototype, "ho", {
                    get: function() {
                        return this.Uh
                    },
                    enumerable: !0,
                    configurable: !0
                }), ll.prototype.oo = function() {}, ll.prototype.$o = function() {
                    return this.jn
                }, ll.prototype.Do = function(t) {
                    var e = this.sT[t.s()];
                    return e || (e = new Pf(this.jn, this.hh), this.sT[t.s()] = e), e
                }, ll.prototype.Fo = function() {
                    return this.Jh
                }, ll.prototype.No = function() {
                    return this.Qn
                }, ll.prototype.runTransaction = function(t, e, n) {
                    var r = this;
                    Ys("MemoryPersistence", "Starting transaction:", t);
                    var i = new Zf(this.qh.next());
                    return this.hh.nT(), n(i).next(function(t) {
                        return r.hh.rT(i).next(function() {
                            return t
                        })
                    }).yn().then(function(t) {
                        return i.Un(), t
                    })
                }, ll.prototype.hT = function(e, n) {
                    return cu.Sn(Object.values(this.sT).map(function(t) {
                        return function() {
                            return t.Ch(e, n)
                        }
                    }))
                }, ll),
                Zf = (n(fl, Xf = pu), fl),
                tl = (cl.uT = function(t) {
                    return new cl(t)
                }, Object.defineProperty(cl.prototype, "cT", {
                    get: function() {
                        if (this.aT) return this.aT;
                        throw Js()
                    },
                    enumerable: !0,
                    configurable: !0
                }), cl.prototype.yh = function(t, e, n) {
                    return this.oT.yh(n, e), this.cT.delete(n), cu.resolve()
                }, cl.prototype.vh = function(t, e, n) {
                    return this.oT.vh(n, e), this.cT.add(n), cu.resolve()
                }, cl.prototype.Uo = function(t, e) {
                    return this.cT.add(e), cu.resolve()
                }, cl.prototype.removeTarget = function(t, e) {
                    var n = this;
                    this.oT.ic(e.targetId).forEach(function(t) {
                        return n.cT.add(t)
                    });
                    var r = this.persistence.Fo();
                    return r.Sh(t, e.targetId).next(function(t) {
                        t.forEach(function(t) {
                            return n.cT.add(t)
                        })
                    }).next(function() {
                        return r.Ih(t, e)
                    })
                }, cl.prototype.nT = function() {
                    this.aT = new Set
                }, cl.prototype.rT = function(t) {
                    var n = this,
                        r = this.persistence.No().Yr();
                    return cu.forEach(this.cT, function(e) {
                        return n._T(t, e).next(function(t) {
                            t || r.kn(e)
                        })
                    }).next(function() {
                        return n.aT = null, r.apply(t)
                    })
                }, cl.prototype.Ko = function(t, e) {
                    var n = this;
                    return this._T(t, e).next(function(t) {
                        t ? n.cT.delete(e) : n.cT.add(e)
                    })
                }, cl.prototype.iT = function(t) {
                    return 0
                }, cl.prototype._T = function(t, e) {
                    var n = this;
                    return cu.Sn([function() {
                        return cu.resolve(n.oT.Ch(e))
                    }, function() {
                        return n.persistence.Fo().Ch(t, e)
                    }, function() {
                        return n.persistence.hT(t, e)
                    }])
                }, cl),
                el = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
                nl = (hl.prototype.initialize = function(n) {
                    return y(this, void 0, void 0, function() {
                        var e = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.Wd = this.lT(n), this.persistence = this.dT(n), [4, this.persistence.start()];
                                case 1:
                                    return t.sent(), this.fT = this.TT(n), this.M_ = this.ET(n), this.Qd = this.wT(n), this.ul = this.IT(n), this.RT = this.AT(n), this.Wd.y_ = function(t) {
                                        return e.ul.Fd(t, 1)
                                    }, this.Qd.ul = this.ul, [4, this.M_.start()];
                                case 2:
                                    return t.sent(), [4, this.Wd.start()];
                                case 3:
                                    return t.sent(), [4, this.Qd.start()];
                                case 4:
                                    return t.sent(), [4, this.Qd.pl(this.ul.sf)];
                                case 5:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, hl.prototype.AT = function(t) {
                    return new Sf(this.ul)
                }, hl.prototype.TT = function(t) {
                    return null
                }, hl.prototype.ET = function(t) {
                    return new vh(this.persistence, new Df, t.mT)
                }, hl.prototype.dT = function(t) {
                    if (t.VT.PT) throw new Dr(Rr.FAILED_PRECONDITION, el);
                    return new $f(tl.uT)
                }, hl.prototype.wT = function(t) {
                    var e = this;
                    return new Jc(this.M_, t.w_, t.Ra, function(t) {
                        return e.ul.Fd(t, 0)
                    }, t.platform.gT())
                }, hl.prototype.lT = function(t) {
                    return new Tf
                }, hl.prototype.IT = function(t) {
                    return new Af(this.M_, this.Qd, t.w_, this.Wd, t.mT, t.jd)
                }, hl.prototype.clearPersistence = function(t) {
                    throw new Dr(Rr.FAILED_PRECONDITION, el)
                }, hl),
                rl = (n(al, Hf = nl), al.prototype.initialize = function(e) {
                    return y(this, void 0, void 0, function() {
                        var n = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Hf.prototype.initialize.call(this, e)];
                                case 1:
                                    return t.sent(), [4, this.persistence.ro(function(e) {
                                        return y(n, void 0, void 0, function() {
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, this.ul.pl(e)];
                                                    case 1:
                                                        return t.sent(), this.fT && (e && !this.fT.ho ? this.fT.start(this.M_) : e || this.fT.stop()), [2]
                                                }
                                            })
                                        })
                                    })];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, al.prototype.ET = function(t) {
                    return new Eh(this.persistence, new Df, t.mT)
                }, al.prototype.IT = function(t) {
                    var e = new _f(this.M_, this.Qd, t.w_, this.Wd, t.mT, t.jd);
                    return this.Wd instanceof Ef && (this.Wd.ul = e), e
                }, al.prototype.TT = function(t) {
                    var e = this.persistence.hh.xo;
                    return new dh(e, t.Ra)
                }, al.prototype.dT = function(t) {
                    var e = sa.Mo(t.pT),
                        n = t.platform.Cc(t.pT.ii);
                    return new sa(t.VT.synchronizeTabs, e, t.clientId, t.platform, fh.nu(t.VT.cacheSizeBytes), t.Ra, n, this.Wd, t.VT.Bh)
                }, al.prototype.lT = function(t) {
                    if (t.VT.PT && t.VT.synchronizeTabs) {
                        if (!Ef.zh(t.platform)) throw new Dr(Rr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                        var e = sa.Mo(t.pT);
                        return new Ef(t.Ra, t.platform, e, t.clientId, t.mT)
                    }
                    return new Tf
                }, al.prototype.clearPersistence = function(t) {
                    var e = sa.Mo(t);
                    return sa.clearPersistence(e)
                }, al),
                il = (ul.prototype.start = function(e, n) {
                    var r = this;
                    this.yT();
                    var i = new Su,
                        o = new Su,
                        s = !1;
                    return this.credentials.l(function(t) {
                        if (!s) return s = !0, Ys("FirestoreClient", "Initializing. user=", t.uid), r.bT(e, n, t, o).then(i.resolve, i.reject);
                        r.Ra.lo(function() {
                            return r.gl(t)
                        })
                    }), this.Ra.co(function() {
                        return i.promise
                    }), o.promise
                }, ul.prototype.enableNetwork = function() {
                    var t = this;
                    return this.yT(), this.Ra.enqueue(function() {
                        return t.ul.enableNetwork()
                    })
                }, ul.prototype.bT = function(a, h, c, f) {
                    return y(this, void 0, void 0, function() {
                        var r, i, o, s, u = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, this.platform.vT(this.pT)];
                                case 1:
                                    return r = t.sent(), i = this.platform.Cc(this.pT.ii), e = r, n = this.credentials, o = new Yc(e, n, i), [4, a.initialize({
                                        Ra: this.Ra,
                                        pT: this.pT,
                                        platform: this.platform,
                                        w_: o,
                                        clientId: this.clientId,
                                        mT: c,
                                        jd: 100,
                                        VT: h
                                    })];
                                case 2:
                                    return t.sent(), this.persistence = a.persistence, this.Wd = a.Wd, this.M_ = a.M_, this.Qd = a.Qd, this.ul = a.ul, this.fT = a.fT, this.ST = a.RT, this.persistence.oo(function() {
                                        return y(u, void 0, void 0, function() {
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, this.terminate()];
                                                    case 1:
                                                        return t.sent(), [2]
                                                }
                                            })
                                        })
                                    }), f.resolve(), [3, 4];
                                case 3:
                                    if (s = t.sent(), f.reject(s), !this.DT(s)) throw s;
                                    return [2, (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + s), this.bT(new nl, {
                                        PT: !1
                                    }, c, f))];
                                case 4:
                                    return [2]
                            }
                            var e, n
                        })
                    })
                }, ul.prototype.DT = function(t) {
                    return "FirebaseError" === t.name ? t.code === Rr.FAILED_PRECONDITION || t.code === Rr.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code
                }, ul.prototype.yT = function() {
                    if (this.Ra.ka) throw new Dr(Rr.FAILED_PRECONDITION, "The client has already been terminated.")
                }, ul.prototype.gl = function(t) {
                    return this.Ra.Ua(), Ys("FirestoreClient", "Credential Changed. Current user: " + t.uid), this.ul.gl(t)
                }, ul.prototype.disableNetwork = function() {
                    var t = this;
                    return this.yT(), this.Ra.enqueue(function() {
                        return t.ul.disableNetwork()
                    })
                }, ul.prototype.terminate = function() {
                    var t = this;
                    return this.Ra.Ba(function() {
                        return y(t, void 0, void 0, function() {
                            return v(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.fT && this.fT.stop(), [4, this.Qd.Vo()];
                                    case 1:
                                        return t.sent(), [4, this.Wd.Vo()];
                                    case 2:
                                        return t.sent(), [4, this.persistence.Vo()];
                                    case 3:
                                        return t.sent(), this.credentials.T(), [2]
                                }
                            })
                        })
                    })
                }, ul.prototype.waitForPendingWrites = function() {
                    var t = this;
                    this.yT();
                    var e = new Su;
                    return this.Ra.co(function() {
                        return t.ul.ff(e)
                    }), e.promise
                }, ul.prototype.listen = function(t, e, n) {
                    var r = this;
                    this.yT();
                    var i = new Rf(t, e, n);
                    return this.Ra.co(function() {
                        return r.ST.listen(i)
                    }), i
                }, ul.prototype.ol = function(t) {
                    var e = this;
                    this.CT || this.Ra.co(function() {
                        return e.ST.ol(t)
                    })
                }, ul.prototype.FT = function(o) {
                    return y(this, void 0, void 0, function() {
                        var i, e = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.yT(), i = new Su, [4, this.Ra.enqueue(function() {
                                        return y(e, void 0, void 0, function() {
                                            var e, n, r;
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return t.trys.push([0, 2, , 3]), [4, this.M_.qu(o)];
                                                    case 1:
                                                        return (e = t.sent()) instanceof Io ? i.resolve(e) : e instanceof No ? i.resolve(null) : i.reject(new Dr(Rr.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                                                    case 2:
                                                        return n = t.sent(), r = uh(n, "Failed to get document '" + o + " from cache"), i.reject(r), [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    })];
                                case 1:
                                    return [2, (t.sent(), i.promise)]
                            }
                        })
                    })
                }, ul.prototype.NT = function(a) {
                    return y(this, void 0, void 0, function() {
                        var u, e = this;
                        return v(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.yT(), u = new Su, [4, this.Ra.enqueue(function() {
                                        return y(e, void 0, void 0, function() {
                                            var e, n, r, i, o, s;
                                            return v(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return t.trys.push([0, 2, , 3]), [4, this.M_.Wu(a, !0)];
                                                    case 1:
                                                        return e = t.sent(), n = new If(a, e.ju), r = n.pd(e.documents), i = n.On(r, !1), u.resolve(i.snapshot), [3, 3];
                                                    case 2:
                                                        return o = t.sent(), s = uh(o, "Failed to execute query '" + a + " against cache"), u.reject(s), [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            })
                                        })
                                    })];
                                case 1:
                                    return [2, (t.sent(), u.promise)]
                            }
                        })
                    })
                }, ul.prototype.write = function(t) {
                    var e = this;
                    this.yT();
                    var n = new Su;
                    return this.Ra.co(function() {
                        return e.ul.write(t, n)
                    }), n.promise
                }, ul.prototype.ii = function() {
                    return this.pT.ii
                }, ul.prototype.Ff = function(t) {
                    var e = this;
                    this.yT(), this.Ra.co(function() {
                        return e.ST.Ff(t), Promise.resolve()
                    })
                }, ul.prototype.Nf = function(t) {
                    var e = this;
                    this.CT || this.Ra.co(function() {
                        return e.ST.Nf(t), Promise.resolve()
                    })
                }, Object.defineProperty(ul.prototype, "CT", {
                    get: function() {
                        return this.Ra.ka
                    },
                    enumerable: !0,
                    configurable: !0
                }), ul.prototype.transaction = function(t) {
                    var e = this;
                    this.yT();
                    var n = new Su;
                    return this.Ra.co(function() {
                        return e.ul.runTransaction(e.Ra, t, n), Promise.resolve()
                    }), n.promise
                }, ul),
                ol = (sl.prototype.next = function(t) {
                    this.$T(this.observer.next, t)
                }, sl.prototype.error = function(t) {
                    this.$T(this.observer.error, t)
                }, sl.prototype.kT = function() {
                    this.muted = !0
                }, sl.prototype.$T = function(t, e) {
                    var n = this;
                    this.muted || setTimeout(function() {
                        n.muted || t(e)
                    }, 0)
                }, sl);

            function sl(t) {
                this.observer = t, this.muted = !1
            }

            function ul(t, e, n, r) {
                this.platform = t, this.pT = e, this.credentials = n, this.Ra = r, this.clientId = tu.cn()
            }

            function al() {
                return null !== Hf && Hf.apply(this, arguments) || this
            }

            function hl() {}

            function cl(t) {
                this.persistence = t, this.oT = new Nh, this.aT = null
            }

            function fl(t) {
                var e = this;
                return (e = Xf.call(this) || this).Lh = t, e
            }

            function ll(t) {
                var e = this;
                this.sT = {}, this.qh = new vu(0), this.Uh = !1, this.Uh = !0, this.hh = t(this), this.Jh = new Jf(this), this.jn = new Lu, this.Qn = new xf(this.jn, function(t) {
                    return e.hh.iT(t)
                })
            }

            function pl(t) {
                this.persistence = t, this.Xf = new uu(function(t) {
                    return t.canonicalId()
                }), this.lastRemoteSnapshotVersion = Vr.min(), this.highestTargetId = 0, this.Zf = 0, this.tT = new Nh, this.targetCount = 0, this.eT = Hu.nh()
            }

            function dl(i) {
                return function() {
                    if ("object" == typeof i && null !== i)
                        for (var t = i, e = 0, n = ["next", "error", "complete"]; e < n.length; e++) {
                            var r = n[e];
                            if (r in t && "function" == typeof t[r]) return 1
                        }
                }()
            }
            var yl, vl, gl, ml = (Bl.prototype.LT = function(t) {
                    switch (ci(t)) {
                        case 0:
                            return null;
                        case 1:
                            return t.booleanValue;
                        case 2:
                            return gi(t.integerValue || t.doubleValue);
                        case 3:
                            return this.OT(t.timestampValue);
                        case 4:
                            return this.BT(t);
                        case 5:
                            return t.stringValue;
                        case 6:
                            return new Hh(mi(t.bytesValue));
                        case 7:
                            return this.qT(t.referenceValue);
                        case 8:
                            return this.UT(t.geoPointValue);
                        case 9:
                            return this.QT(t.arrayValue);
                        case 10:
                            return this.WT(t.mapValue);
                        default:
                            throw Js()
                    }
                }, Bl.prototype.WT = function(t) {
                    var n = this,
                        r = {};
                    return ti(t.fields || {}, function(t, e) {
                        r[t] = n.LT(e)
                    }), r
                }, Bl.prototype.UT = function(t) {
                    return new yc(gi(t.latitude), gi(t.longitude))
                }, Bl.prototype.QT = function(t) {
                    var e = this;
                    return (t.values || []).map(function(t) {
                        return e.LT(t)
                    })
                }, Bl.prototype.BT = function(t) {
                    switch (this.MT) {
                        case "previous":
                            var e = function t(e) {
                                var n = e.mapValue.fields.__previous_value__;
                                return ui(n) ? t(n) : n
                            }(t);
                            return null == e ? null : this.LT(e);
                        case "estimate":
                            return this.OT(ai(t));
                        default:
                            return null
                    }
                }, Bl.prototype.OT = function(t) {
                    var e = vi(t),
                        n = new Lr(e.seconds, e.nanos);
                    return this.timestampsInSnapshots ? n : n.toDate()
                }, Bl.prototype.qT = function(t) {
                    var e = Mr.K(t);
                    $s(Gs(e));
                    var n = new su(e.get(1), e.get(3)),
                        r = new Jr(e.k(5));
                    return n.isEqual(this.ii) || Hs("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.ii.projectId + "/" + this.ii.database + ") instead."), this.xT(r)
                }, Bl),
                wl = fh.ou,
                bl = (ql.prototype.isEqual = function(t) {
                    return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
                }, ql),
                El = (Object.defineProperty(Fl.prototype, "tE", {
                    get: function() {
                        return this.eE || (this.eE = new Oc(this.mc, this.ZT.ignoreUndefinedProperties)), this.eE
                    },
                    enumerable: !0,
                    configurable: !0
                }), Fl.prototype.settings = function(t) {
                    Dh("Firestore.settings", arguments, 1), Oh("Firestore.settings", "object", 1, t);
                    var e = new bl(t);
                    if (this.zT && !this.ZT.isEqual(e)) throw new Dr(Rr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                    void 0 !== (this.ZT = e).credentials && (this.JT = function(t) {
                        if (!t) return new Pr;
                        switch (t.type) {
                            case "gapi":
                                var e = t.sE;
                                return $s(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new kr(e, t.V || "0");
                            case "provider":
                                return t.sE;
                            default:
                                throw new Dr(Rr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                        }
                    }(e.credentials))
                }, Fl.prototype.enableNetwork = function() {
                    return this.GT(), this.zT.enableNetwork()
                }, Fl.prototype.disableNetwork = function() {
                    return this.GT(), this.zT.disableNetwork()
                }, Fl.prototype.enablePersistence = function(t) {
                    var e, n;
                    if (this.zT) throw new Dr(Rr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                    var r = !1,
                        i = !1;
                    if (t && (void 0 !== t.experimentalTabSynchronization && Hs("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new Dr(Rr.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
                    return this.iE(this.XT, {
                        PT: !0,
                        cacheSizeBytes: this.ZT.cacheSizeBytes,
                        synchronizeTabs: r,
                        Bh: i
                    })
                }, Fl.prototype.clearPersistence = function() {
                    return y(this, void 0, void 0, function() {
                        var r, e = this;
                        return v(this, function(t) {
                            if (void 0 !== this.zT && !this.zT.CT) throw new Dr(Rr.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                            return r = new Su, [2, (this.KT.Ma(function() {
                                return y(e, void 0, void 0, function() {
                                    var e, n;
                                    return v(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return t.trys.push([0, 2, , 3]), e = this.nE(), [4, this.XT.clearPersistence(e)];
                                            case 1:
                                                return t.sent(), r.resolve(), [3, 3];
                                            case 2:
                                                return n = t.sent(), r.reject(n), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }), r.promise)]
                        })
                    })
                }, Fl.prototype.terminate = function() {
                    return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete()
                }, Object.defineProperty(Fl.prototype, "rE", {
                    get: function() {
                        return this.GT(), this.zT.CT
                    },
                    enumerable: !0,
                    configurable: !0
                }), Fl.prototype.waitForPendingWrites = function() {
                    return this.GT(), this.zT.waitForPendingWrites()
                }, Fl.prototype.onSnapshotsInSync = function(t) {
                    if (this.GT(), dl(t)) return this.hE(t);
                    Oh("Firestore.onSnapshotsInSync", "function", 1, t);
                    var e = {
                        next: t
                    };
                    return this.hE(e)
                }, Fl.prototype.hE = function(t) {
                    var e = this,
                        n = new ol({
                            next: function() {
                                t.next && t.next()
                            },
                            error: function(t) {
                                throw Js()
                            }
                        });
                    return this.zT.Ff(n),
                        function() {
                            n.kT(), e.zT.Nf(n)
                        }
                }, Fl.prototype.GT = function() {
                    return this.zT || this.iE(new nl, {
                        PT: !1
                    }), this.zT
                }, Fl.prototype.nE = function() {
                    return new ou(this.mc, this.YT, this.ZT.host, this.ZT.ssl, this.ZT.forceLongPolling)
                }, Fl.prototype.iE = function(t, e) {
                    var n = this.nE();
                    return this.zT = new il(zs.nt(), n, this.JT, this.KT), this.zT.start(t, e)
                }, Fl.HT = function(t) {
                    if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new Dr(Rr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                    var e, n = t.options.projectId;
                    if (!n || "string" != typeof n) throw new Dr(Rr.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                    return new su(n)
                }, Object.defineProperty(Fl.prototype, "app", {
                    get: function() {
                        if (!this.jT) throw new Dr(Rr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                        return this.jT
                    },
                    enumerable: !0,
                    configurable: !0
                }), Fl.prototype.collection = function(t) {
                    return Dh("Firestore.collection", arguments, 1), Oh("Firestore.collection", "non-empty string", 1, t), this.GT(), new Pl(Mr.K(t), this)
                }, Fl.prototype.doc = function(t) {
                    return Dh("Firestore.doc", arguments, 1), Oh("Firestore.doc", "non-empty string", 1, t), this.GT(), Nl.oE(Mr.K(t), this)
                }, Fl.prototype.collectionGroup = function(t) {
                    if (Dh("Firestore.collectionGroup", arguments, 1), Oh("Firestore.collectionGroup", "non-empty string", 1, t), 0 <= t.indexOf("/")) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
                    return this.GT(), new Rl(new So(Mr.G, t), this)
                }, Fl.prototype.runTransaction = function(e) {
                    var n = this;
                    return Dh("Firestore.runTransaction", arguments, 1), Oh("Firestore.runTransaction", "function", 1, e), this.GT().transaction(function(t) {
                        return e(new Tl(n, t))
                    })
                }, Fl.prototype.batch = function() {
                    return this.GT(), new Il(this)
                }, Object.defineProperty(Fl, "logLevel", {
                    get: function() {
                        switch (Ks()) {
                            case p.DEBUG:
                                return "debug";
                            case p.ERROR:
                                return "error";
                            case p.SILENT:
                                return "silent";
                            case p.WARN:
                                return "warn";
                            case p.INFO:
                                return "info";
                            case p.VERBOSE:
                                return "verbose";
                            default:
                                return "error"
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Fl.setLogLevel = function(t) {
                    Dh("Firestore.setLogLevel", arguments, 1), Mh("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t), Ws.setLogLevel(t)
                }, Fl.prototype.aE = function() {
                    return this.ZT.timestampsInSnapshots
                }, Fl),
                Tl = (jl.prototype.get = function(t) {
                    var n = this;
                    Dh("Transaction.get", arguments, 1);
                    var r = Ql("Transaction.get", t, this.uE);
                    return this.cE.P_([r.Pc]).then(function(t) {
                        if (!t || 1 !== t.length) return Js();
                        var e = t[0];
                        if (e instanceof No) return new _l(n.uE, r.Pc, null, !1, !1, r.Vc);
                        if (e instanceof Io) return new _l(n.uE, r.Pc, e, !1, !1, r.Vc);
                        throw Js()
                    })
                }, jl.prototype.set = function(t, e, n) {
                    xh("Transaction.set", arguments, 2, 3);
                    var r = Ql("Transaction.set", t, this.uE);
                    n = Gl("Transaction.set", n);
                    var i = Kl(r.Vc, e, "Transaction.set"),
                        o = i[0],
                        s = i[1],
                        u = n.merge || n.mergeFields ? this.uE.tE.$c(s, o, n.mergeFields) : this.uE.tE.Fc(s, o);
                    return this.cE.set(r.Pc, u), this
                }, jl.prototype.update = function(t, e, n) {
                    for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                    return i = "string" == typeof e || e instanceof Xh ? (Ph("Transaction.update", arguments, 3), r = Ql("Transaction.update", t, this.uE), this.uE.tE.Mc("Transaction.update", e, n, o)) : (Dh("Transaction.update", arguments, 2), r = Ql("Transaction.update", t, this.uE), this.uE.tE.kc("Transaction.update", e)), this.cE.update(r.Pc, i), this
                }, jl.prototype.delete = function(t) {
                    Dh("Transaction.delete", arguments, 1);
                    var e = Ql("Transaction.delete", t, this.uE);
                    return this.cE.delete(e.Pc), this
                }, jl),
                Il = (Ul.prototype.set = function(t, e, n) {
                    xh("WriteBatch.set", arguments, 2, 3), this.dE();
                    var r = Ql("WriteBatch.set", t, this.uE);
                    n = Gl("WriteBatch.set", n);
                    var i = Kl(r.Vc, e, "WriteBatch.set"),
                        o = i[0],
                        s = i[1],
                        u = n.merge || n.mergeFields ? this.uE.tE.$c(s, o, n.mergeFields) : this.uE.tE.Fc(s, o);
                    return this._E = this._E.concat(u.gc(r.Pc, Bi.ft())), this
                }, Ul.prototype.update = function(t, e, n) {
                    for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
                    return this.dE(), i = "string" == typeof e || e instanceof Xh ? (Ph("WriteBatch.update", arguments, 3), r = Ql("WriteBatch.update", t, this.uE), this.uE.tE.Mc("WriteBatch.update", e, n, o)) : (Dh("WriteBatch.update", arguments, 2), r = Ql("WriteBatch.update", t, this.uE), this.uE.tE.kc("WriteBatch.update", e)), this._E = this._E.concat(i.gc(r.Pc, Bi.exists(!0))), this
                }, Ul.prototype.delete = function(t) {
                    Dh("WriteBatch.delete", arguments, 1), this.dE();
                    var e = Ql("WriteBatch.delete", t, this.uE);
                    return this._E = this._E.concat(new Ki(e.Pc, Bi.ft())), this
                }, Ul.prototype.commit = function() {
                    return this.dE(), this.lE = !0, 0 < this._E.length ? this.uE.GT().write(this._E) : Promise.resolve()
                }, Ul.prototype.dE = function() {
                    if (this.lE) throw new Dr(Rr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                }, Ul),
                Nl = (n(Ml, gl = gc), Ml.oE = function(t, e, n) {
                    if (t.length % 2 != 0) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.j() + " has " + t.length);
                    return new Ml(new Jr(t), e, n)
                }, Object.defineProperty(Ml.prototype, "id", {
                    get: function() {
                        return this.Pc.path.O()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Ml.prototype, "parent", {
                    get: function() {
                        return new Pl(this.Pc.path.M(), this.firestore, this.Vc)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Ml.prototype, "path", {
                    get: function() {
                        return this.Pc.path.j()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ml.prototype.collection = function(t) {
                    if (Dh("DocumentReference.collection", arguments, 1), Oh("DocumentReference.collection", "non-empty string", 1, t), !t) throw new Dr(Rr.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                    var e = Mr.K(t);
                    return new Pl(this.Pc.path.child(e), this.firestore)
                }, Ml.prototype.isEqual = function(t) {
                    if (!(t instanceof Ml)) throw Gh("isEqual", "DocumentReference", 1, t);
                    return this.firestore === t.firestore && this.Pc.isEqual(t.Pc) && this.Vc === t.Vc
                }, Ml.prototype.set = function(t, e) {
                    xh("DocumentReference.set", arguments, 1, 2), e = Gl("DocumentReference.set", e);
                    var n = Kl(this.Vc, t, "DocumentReference.set"),
                        r = n[0],
                        i = n[1],
                        o = e.merge || e.mergeFields ? this.firestore.tE.$c(i, r, e.mergeFields) : this.firestore.tE.Fc(i, r);
                    return this.zT.write(o.gc(this.Pc, Bi.ft()))
                }, Ml.prototype.update = function(t, e) {
                    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    return n = "string" == typeof t || t instanceof Xh ? (Ph("DocumentReference.update", arguments, 2), this.firestore.tE.Mc("DocumentReference.update", t, e, r)) : (Dh("DocumentReference.update", arguments, 1), this.firestore.tE.kc("DocumentReference.update", t)), this.zT.write(n.gc(this.Pc, Bi.exists(!0)))
                }, Ml.prototype.delete = function() {
                    return Dh("DocumentReference.delete", arguments, 0), this.zT.write([new Ki(this.Pc, Bi.ft())])
                }, Ml.prototype.onSnapshot = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    xh("DocumentReference.onSnapshot", arguments, 1, 4);
                    var n, r = {
                            includeMetadataChanges: !1
                        },
                        i = 0;
                    "object" != typeof t[i] || dl(t[i]) || (Bh("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), Vh("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                    var o = {
                        includeMetadataChanges: r.includeMetadataChanges
                    };
                    return n = dl(t[i]) ? t[i] : (Oh("DocumentReference.onSnapshot", "function", i, t[i]), kh("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), kh("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), {
                        next: t[i],
                        error: t[i + 1],
                        complete: t[i + 2]
                    }), this.fE(o, n)
                }, Ml.prototype.fE = function(t, n) {
                    var r = this,
                        e = function(t) {
                            console.error("Uncaught Error in onSnapshot:", t)
                        };
                    n.error && (e = n.error.bind(n));
                    var i = new ol({
                            next: function(t) {
                                if (n.next) {
                                    var e = t.docs.get(r.Pc);
                                    n.next(new _l(r.firestore, r.Pc, e, t.fromCache, t.hasPendingWrites, r.Vc))
                                }
                            },
                            error: e
                        }),
                        o = this.zT.listen(So.Wt(this.Pc.path), i, t);
                    return function() {
                        i.kT(), r.zT.ol(o)
                    }
                }, Ml.prototype.get = function(n) {
                    var r = this;
                    return xh("DocumentReference.get", arguments, 0, 1), Wl("DocumentReference.get", n), new Promise(function(e, t) {
                        n && "cache" === n.source ? r.firestore.GT().FT(r.Pc).then(function(t) {
                            e(new _l(r.firestore, r.Pc, t, !0, t instanceof Io && t.At, r.Vc))
                        }, t) : r.TE(e, t, n)
                    })
                }, Ml.prototype.TE = function(e, n, r) {
                    var i = this.fE({
                        includeMetadataChanges: !0,
                        Bf: !0
                    }, {
                        next: function(t) {
                            i(), !t.exists && t.metadata.fromCache ? n(new Dr(Rr.UNAVAILABLE, "Failed to get document because the client is offline.")) : t.exists && t.metadata.fromCache && r && "server" === r.source ? n(new Dr(Rr.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(t)
                        },
                        error: n
                    })
                }, Ml.prototype.withConverter = function(t) {
                    return new Ml(this.Pc, this.firestore, t)
                }, Ml),
                Al = (Cl.prototype.isEqual = function(t) {
                    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
                }, Cl),
                _l = (Vl.prototype.data = function(t) {
                    var e = this;
                    if (xh("DocumentSnapshot.data", arguments, 0, 1), t = zl("DocumentSnapshot.data", t), this.EE) {
                        if (this.Vc) {
                            var n = new Sl(this.uE, this.Pc, this.EE, this.wE, this.IE);
                            return this.Vc.fromFirestore(n, t)
                        }
                        return new ml(this.uE.mc, this.uE.aE(), t.serverTimestamps || "none", function(t) {
                            return new Nl(t, e.uE)
                        }).LT(this.EE.Mt())
                    }
                }, Vl.prototype.get = function(t, e) {
                    var n = this;
                    if (xh("DocumentSnapshot.get", arguments, 1, 2), e = zl("DocumentSnapshot.get", e), this.EE) {
                        var r = this.EE.data().field(jc("DocumentSnapshot.get", t));
                        if (null !== r) return new ml(this.uE.mc, this.uE.aE(), e.serverTimestamps || "none", function(t) {
                            return new Nl(t, n.uE, n.Vc)
                        }).LT(r)
                    }
                }, Object.defineProperty(Vl.prototype, "id", {
                    get: function() {
                        return this.Pc.path.O()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Vl.prototype, "ref", {
                    get: function() {
                        return new Nl(this.Pc, this.uE, this.Vc)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Vl.prototype, "exists", {
                    get: function() {
                        return null !== this.EE
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Vl.prototype, "metadata", {
                    get: function() {
                        return new Al(this.IE, this.wE)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Vl.prototype.isEqual = function(t) {
                    if (!(t instanceof Vl)) throw Gh("isEqual", "DocumentSnapshot", 1, t);
                    return this.uE === t.uE && this.wE === t.wE && this.Pc.isEqual(t.Pc) && (null === this.EE ? null === t.EE : this.EE.isEqual(t.EE)) && this.Vc === t.Vc
                }, Vl),
                Sl = (n(Ll, vl = _l), Ll.prototype.data = function(t) {
                    return vl.prototype.data.call(this, t)
                }, Ll),
                Rl = (kl.prototype.where = function(t, e, n) {
                    Dh("Query.where", arguments, 3), qh("Query.where", 3, n);
                    var r, i = Mh("Query.where", ["<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any"], 2, e),
                        o = jc("Query.where", t);
                    if (o.Y()) {
                        if ("array-contains" === i || "array-contains-any" === i) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + i + "' queries on FieldPath.documentId().");
                        if ("in" === i) {
                            this.AE(n, i);
                            for (var s = [], u = 0, a = n; u < a.length; u++) {
                                var h = a[u];
                                s.push(this.mE(h))
                            }
                            r = {
                                arrayValue: {
                                    values: s
                                }
                            }
                        } else r = this.mE(n)
                    } else "in" !== i && "array-contains-any" !== i || this.AE(n, i), r = this.firestore.tE.xc("Query.where", n, "in" === i);
                    var c = Ro.create(o, i, r);
                    return this.PE(c), new kl(this.RE.Gt(c), this.firestore, this.Vc)
                }, kl.prototype.orderBy = function(t, e) {
                    var n;
                    if (xh("Query.orderBy", arguments, 1, 2), kh("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) n = "asc";
                    else {
                        if ("desc" !== e) throw new Dr(Rr.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                        n = "desc"
                    }
                    if (null !== this.RE.startAt) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                    if (null !== this.RE.endAt) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                    var r = jc("Query.orderBy", t),
                        i = new Vo(r, n);
                    return this.VE(i), new kl(this.RE.zt(i), this.firestore, this.Vc)
                }, kl.prototype.limit = function(t) {
                    return Dh("Query.limit", arguments, 1), Oh("Query.limit", "number", 1, t), zh("Query.limit", 1, t), new kl(this.RE.Ht(t), this.firestore, this.Vc)
                }, kl.prototype.limitToLast = function(t) {
                    return Dh("Query.limitToLast", arguments, 1), Oh("Query.limitToLast", "number", 1, t), zh("Query.limitToLast", 1, t), new kl(this.RE.Yt(t), this.firestore, this.Vc)
                }, kl.prototype.startAt = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Ph("Query.startAt", arguments, 1);
                    var r = this.gE("Query.startAt", t, e, !0);
                    return new kl(this.RE.Jt(r), this.firestore, this.Vc)
                }, kl.prototype.startAfter = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Ph("Query.startAfter", arguments, 1);
                    var r = this.gE("Query.startAfter", t, e, !1);
                    return new kl(this.RE.Jt(r), this.firestore, this.Vc)
                }, kl.prototype.endBefore = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Ph("Query.endBefore", arguments, 1);
                    var r = this.gE("Query.endBefore", t, e, !0);
                    return new kl(this.RE.Xt(r), this.firestore, this.Vc)
                }, kl.prototype.endAt = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Ph("Query.endAt", arguments, 1);
                    var r = this.gE("Query.endAt", t, e, !1);
                    return new kl(this.RE.Xt(r), this.firestore, this.Vc)
                }, kl.prototype.isEqual = function(t) {
                    if (!(t instanceof kl)) throw Gh("isEqual", "Query", 1, t);
                    return this.firestore === t.firestore && this.RE.isEqual(t.RE)
                }, kl.prototype.withConverter = function(t) {
                    return new kl(this.RE, this.firestore, t)
                }, kl.prototype.gE = function(t, e, n, r) {
                    if (qh(t, 1, e), e instanceof _l) {
                        if (0 < n.length) throw new Dr(Rr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
                        var i = e;
                        if (!i.exists) throw new Dr(Rr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
                        return this.pE(i.EE, r)
                    }
                    var o = [e].concat(n);
                    return this.yE(t, o, r)
                }, kl.prototype.pE = function(t, e) {
                    for (var n = [], r = 0, i = this.RE.orderBy; r < i.length; r++) {
                        var o = i[r];
                        if (o.field.Y()) n.push(wi(this.firestore.mc, t.key));
                        else {
                            var s = t.field(o.field);
                            if (ui(s)) throw new Dr(Rr.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                            if (null === s) {
                                var u = o.field.j();
                                throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.")
                            }
                            n.push(s)
                        }
                    }
                    return new Lo(n, e)
                }, kl.prototype.yE = function(t, e, n) {
                    var r = this.RE.Ot;
                    if (e.length > r.length) throw new Dr(Rr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                    for (var i = [], o = 0; o < e.length; o++) {
                        var s = e[o];
                        if (r[o].field.Y()) {
                            if ("string" != typeof s) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                            if (!this.RE._e() && -1 !== s.indexOf("/")) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                            var u = this.RE.path.child(Mr.K(s));
                            if (!Jr.et(u)) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                            var a = new Jr(u);
                            i.push(wi(this.firestore.mc, a))
                        } else {
                            var h = this.firestore.tE.xc(t, s);
                            i.push(h)
                        }
                    }
                    return new Lo(i, n)
                }, kl.prototype.onSnapshot = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    xh("Query.onSnapshot", arguments, 1, 4);
                    var n, r = {},
                        i = 0;
                    return "object" != typeof t[i] || dl(t[i]) || (Bh("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), Vh("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), n = dl(t[i]) ? t[i] : (Oh("Query.onSnapshot", "function", i, t[i]), kh("Query.onSnapshot", "function", i + 1, t[i + 1]), kh("Query.onSnapshot", "function", i + 2, t[i + 2]), {
                        next: t[i],
                        error: t[i + 1],
                        complete: t[i + 2]
                    }), this.bE(this.RE), this.fE(r, n)
                }, kl.prototype.fE = function(t, e) {
                    var n = this,
                        r = function(t) {
                            console.error("Uncaught Error in onSnapshot:", t)
                        };
                    e.error && (r = e.error.bind(e));
                    var i = new ol({
                            next: function(t) {
                                e.next && e.next(new Dl(n.firestore, n.RE, t, n.Vc))
                            },
                            error: r
                        }),
                        o = this.firestore.GT(),
                        s = o.listen(this.RE, i, t);
                    return function() {
                        i.kT(), o.ol(s)
                    }
                }, kl.prototype.bE = function(t) {
                    if (t.ae() && 0 === t.Ot.length) throw new Dr(Rr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
                }, kl.prototype.get = function(n) {
                    var r = this;
                    return xh("Query.get", arguments, 0, 1), Wl("Query.get", n), this.bE(this.RE), new Promise(function(e, t) {
                        n && "cache" === n.source ? r.firestore.GT().NT(r.RE).then(function(t) {
                            e(new Dl(r.firestore, r.RE, t, r.Vc))
                        }, t) : r.TE(e, t, n)
                    })
                }, kl.prototype.TE = function(e, n, r) {
                    var i = this.fE({
                        includeMetadataChanges: !0,
                        Bf: !0
                    }, {
                        next: function(t) {
                            i(), t.metadata.fromCache && r && "server" === r.source ? n(new Dr(Rr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(t)
                        },
                        error: n
                    })
                }, kl.prototype.mE = function(t) {
                    if ("string" == typeof t) {
                        if ("" === t) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
                        if (!this.RE._e() && -1 !== t.indexOf("/")) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
                        var e = this.RE.path.child(Mr.K(t));
                        if (!Jr.et(e)) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
                        return wi(this.firestore.mc, new Jr(e))
                    }
                    if (t instanceof Nl) {
                        var n = t;
                        return wi(this.firestore.mc, n.Pc)
                    }
                    throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Fh(t) + ".")
                }, kl.prototype.AE = function(t, e) {
                    if (!Array.isArray(t) || 0 === t.length) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
                    if (10 < t.length) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
                    if (0 <= t.indexOf(null)) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
                    if (0 < t.filter(function(t) {
                            return Number.isNaN(t)
                        }).length) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.")
                }, kl.prototype.PE = function(t) {
                    if (t instanceof Ro) {
                        var e = ["array-contains", "array-contains-any"],
                            n = ["in", "array-contains-any"],
                            r = 0 <= e.indexOf(t.op),
                            i = 0 <= n.indexOf(t.op);
                        if (t.ue()) {
                            var o = this.RE.jt();
                            if (null !== o && !o.isEqual(t.field)) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                            var s = this.RE.Kt();
                            null !== s && this.vE(t.field, s)
                        } else if (i || r) {
                            var u = null;
                            if (i && (u = this.RE.ce(n)), null === u && r && (u = this.RE.ce(e)), null != u) throw u === t.op ? new Dr(Rr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new Dr(Rr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.")
                        }
                    }
                }, kl.prototype.VE = function(t) {
                    if (null === this.RE.Kt()) {
                        var e = this.RE.jt();
                        null !== e && this.vE(e, t.field)
                    }
                }, kl.prototype.vE = function(t, e) {
                    if (!e.isEqual(t)) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.")
                }, kl),
                Dl = (Object.defineProperty(Ol.prototype, "docs", {
                    get: function() {
                        var e = [];
                        return this.forEach(function(t) {
                            return e.push(t)
                        }), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Ol.prototype, "empty", {
                    get: function() {
                        return this.DE.docs.B()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(Ol.prototype, "size", {
                    get: function() {
                        return this.DE.docs.size
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ol.prototype.forEach = function(e, n) {
                    var r = this;
                    xh("QuerySnapshot.forEach", arguments, 1, 2), Oh("QuerySnapshot.forEach", "function", 1, e), this.DE.docs.forEach(function(t) {
                        e.call(n, r.NE(t))
                    })
                }, Object.defineProperty(Ol.prototype, "query", {
                    get: function() {
                        return new Rl(this.SE, this.uE, this.Vc)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Ol.prototype.docChanges = function(t) {
                    t && (Bh("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), Vh("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
                    var e = !(!t || !t.includeMetadataChanges);
                    if (e && this.DE.hs) throw new Dr(Rr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                    return this.CE && this.FE === e || (this.CE = function(i, e, o, s) {
                        if (o.ss.B()) {
                            var n = 0;
                            return o.docChanges.map(function(t) {
                                var e = new Sl(i, t.doc.key, t.doc, o.fromCache, o.ns.has(t.doc.key), s);
                                return t.doc, {
                                    type: "added",
                                    doc: e,
                                    oldIndex: -1,
                                    newIndex: n++
                                }
                            })
                        }
                        var u = o.ss;
                        return o.docChanges.filter(function(t) {
                            return e || 3 !== t.type
                        }).map(function(t) {
                            var e = new Sl(i, t.doc.key, t.doc, o.fromCache, o.ns.has(t.doc.key), s),
                                n = -1,
                                r = -1;
                            return 0 !== t.type && (n = u.indexOf(t.doc.key), u = u.delete(t.doc.key)), 1 !== t.type && (r = (u = u.add(t.doc)).indexOf(t.doc.key)), {
                                type: function(t) {
                                    switch (t) {
                                        case 0:
                                            return "added";
                                        case 2:
                                        case 3:
                                            return "modified";
                                        case 1:
                                            return "removed";
                                        default:
                                            return Js()
                                    }
                                }(t.type),
                                doc: e,
                                oldIndex: n,
                                newIndex: r
                            }
                        })
                    }(this.uE, e, this.DE, this.Vc), this.FE = e), this.CE
                }, Ol.prototype.isEqual = function(t) {
                    if (!(t instanceof Ol)) throw Gh("isEqual", "QuerySnapshot", 1, t);
                    return this.uE === t.uE && this.SE.isEqual(t.SE) && this.DE.isEqual(t.DE) && this.Vc === t.Vc
                }, Ol.prototype.NE = function(t) {
                    return new Sl(this.uE, t.key, t, this.metadata.fromCache, this.DE.ns.has(t.key), this.Vc)
                }, Ol),
                Pl = (n(xl, yl = Rl), Object.defineProperty(xl.prototype, "id", {
                    get: function() {
                        return this.RE.path.O()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(xl.prototype, "parent", {
                    get: function() {
                        var t = this.RE.path.M();
                        return t.B() ? null : new Nl(new Jr(t), this.firestore)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(xl.prototype, "path", {
                    get: function() {
                        return this.RE.path.j()
                    },
                    enumerable: !0,
                    configurable: !0
                }), xl.prototype.doc = function(t) {
                    xh("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = tu.cn()), Oh("CollectionReference.doc", "non-empty string", 1, t);
                    var e = Mr.K(t);
                    return Nl.oE(this.RE.path.child(e), this.firestore, this.Vc)
                }, xl.prototype.add = function(t) {
                    Dh("CollectionReference.add", arguments, 1), Oh("CollectionReference.add", "object", 1, this.Vc ? this.Vc.toFirestore(t) : t);
                    var e = this.doc();
                    return e.set(t).then(function() {
                        return e
                    })
                }, xl.prototype.withConverter = function(t) {
                    return new xl(this.$E, this.firestore, t)
                }, xl);

            function xl(t, e, n) {
                var r = this;
                if (((r = yl.call(this, So.Wt(t), e, n) || this).$E = t).length % 2 != 1) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.j() + " has " + t.length);
                return r
            }

            function Ol(t, e, n, r) {
                this.uE = t, this.SE = e, this.DE = n, this.Vc = r, this.CE = null, this.FE = null, this.metadata = new Al(n.hasPendingWrites, n.fromCache)
            }

            function kl(t, e, n) {
                this.RE = t, this.firestore = e, this.Vc = n
            }

            function Ll() {
                return null !== vl && vl.apply(this, arguments) || this
            }

            function Vl(t, e, n, r, i, o) {
                this.uE = t, this.Pc = e, this.EE = n, this.wE = r, this.IE = i, this.Vc = o
            }

            function Cl(t, e) {
                this.hasPendingWrites = t, this.fromCache = e
            }

            function Ml(t, e, n) {
                var r = this;
                return (r = gl.call(this, e.mc, t, n) || this).Pc = t, r.firestore = e, r.Vc = n, r.zT = r.firestore.GT(), r
            }

            function Ul(t) {
                this.uE = t, this._E = [], this.lE = !1
            }

            function jl(t, e) {
                this.uE = t, this.cE = e
            }

            function Fl(t, e, n) {
                var r = this;
                if (void 0 === n && (n = new nl), this.jT = null, this.KT = new ih, this.INTERNAL = {
                        delete: function() {
                            return y(r, void 0, void 0, function() {
                                return v(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.GT(), [4, this.zT.terminate()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }
                    }, "object" == typeof t.options) {
                    var i = t;
                    this.jT = i, this.mc = Fl.HT(i), this.YT = i.name, this.JT = new xr(e)
                } else {
                    var o = t;
                    if (!o.projectId) throw new Dr(Rr.INVALID_ARGUMENT, "Must provide projectId");
                    this.mc = new su(o.projectId, o.database), this.YT = "[DEFAULT]", this.JT = new Pr
                }
                this.XT = n, this.ZT = new bl({})
            }

            function ql(t) {
                var e, n, r, i;
                if (void 0 === t.host) {
                    if (void 0 !== t.ssl) throw new Dr(Rr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com", this.ssl = !0
                } else Lh("settings", "non-empty string", "host", t.host), this.host = t.host, Vh("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;
                if (Bh("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties"]), Vh("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, Vh("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), Vh("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), !0 === t.timestampsInSnapshots ? Hs("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && Hs("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, Vh("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = fh.uu;
                else {
                    if (t.cacheSizeBytes !== wl && t.cacheSizeBytes < fh.au) throw new Dr(Rr.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + fh.au);
                    this.cacheSizeBytes = t.cacheSizeBytes
                }
                Vh("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i
            }

            function Bl(t, e, n, r) {
                this.ii = t, this.timestampsInSnapshots = e, this.MT = n, this.xT = r
            }

            function Gl(t, e) {
                if (void 0 === e) return {
                    merge: !1
                };
                if (Bh(t, e, ["merge", "mergeFields"]), Vh(t, "boolean", "merge", e.merge), n = t, void 0 !== (r = e.mergeFields) && function(t, e, n, r) {
                        if (!(n instanceof Array)) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + Fh(n));
                        for (var i = 0; i < n.length; ++i)
                            if (!r(n[i])) throw new Dr(Rr.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be a string or a FieldPath, but the value at index " + i + " was: " + Fh(n[i]))
                    }(n, "mergeFields", r, function(t) {
                        return "string" == typeof t || t instanceof Xh
                    }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new Dr(Rr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                var n, r;
                return e
            }

            function zl(t, e) {
                return void 0 === e ? {} : (Bh(t, e, ["serverTimestamps"]), Ch(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e)
            }

            function Wl(t, e) {
                kh(t, "object", 1, e), e && (Bh(t, e, ["source"]), Ch(t, 0, "source", e.source, ["default", "server", "cache"]))
            }

            function Ql(t, e, n) {
                if (e instanceof gc) {
                    if (e.firestore !== n) throw new Dr(Rr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return e
                }
                throw Gh(t, "DocumentReference", 1, e)
            }

            function Kl(t, e, n) {
                var r;
                return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [r, n]
            }

            function Yl(t, e) {
                function n() {
                    var t = "This constructor is private.";
                    throw e && (t += " ", t += e), new Dr(Rr.INVALID_ARGUMENT, t)
                }
                return n.prototype = t.prototype, Object.assign(n, t), n
            }
            var Hl, Xl = Yl(El, "Use firebase.firestore() instead."),
                Jl = Yl(Tl, "Use firebase.firestore().runTransaction() instead."),
                $l = Yl(Il, "Use firebase.firestore().batch() instead."),
                Zl = Yl(Nl, "Use firebase.firestore().doc() instead."),
                tp = Yl(_l),
                ep = Yl(Sl),
                np = Yl(Rl),
                rp = Yl(Dl),
                ip = Yl(Pl, "Use firebase.firestore().collection() instead."),
                op = Yl(pc, "Use FieldValue.<field>() instead."),
                sp = Yl(Hh, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                up = {
                    Firestore: Xl,
                    GeoPoint: yc,
                    Timestamp: Lr,
                    Blob: sp,
                    Transaction: Jl,
                    WriteBatch: $l,
                    DocumentReference: Zl,
                    DocumentSnapshot: tp,
                    Query: np,
                    QueryDocumentSnapshot: ep,
                    QuerySnapshot: rp,
                    CollectionReference: ip,
                    FieldPath: Xh,
                    FieldValue: op,
                    setLogLevel: El.setLogLevel,
                    CACHE_SIZE_UNLIMITED: wl
                },
                ap = (gp.prototype.U_ = function(t) {}, gp.prototype.Vo = function() {}, gp),
                hp = (vp.prototype.U_ = function(t) {
                    this.OE.push(t)
                }, vp.prototype.Vo = function() {
                    window.removeEventListener("online", this.kE), window.removeEventListener("offline", this.xE)
                }, vp.prototype.BE = function() {
                    window.addEventListener("online", this.kE), window.addEventListener("offline", this.xE)
                }, vp.prototype.ME = function() {
                    Ys("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                    for (var t = 0, e = this.OE; t < e.length; t++)(0, e[t])(0)
                }, vp.prototype.LE = function() {
                    Ys("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                    for (var t = 0, e = this.OE; t < e.length; t++)(0, e[t])(1)
                }, vp.zh = function() {
                    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                }, vp),
                cp = (yp.prototype.i_ = function(t) {
                    this.QE = t
                }, yp.prototype.Xc = function(t) {
                    this.WE = t
                }, yp.prototype.onMessage = function(t) {
                    this.jE = t
                }, yp.prototype.close = function() {
                    this.UE()
                }, yp.prototype.send = function(t) {
                    this.qE(t)
                }, yp.prototype.KE = function() {
                    this.QE()
                }, yp.prototype.GE = function(t) {
                    this.WE(t)
                }, yp.prototype.zE = function(t) {
                    this.jE(t)
                }, yp),
                fp = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit"
                },
                lp = "gl-js/ fire/" + Tr,
                pp = (dp.prototype.YE = function(t, e) {
                    if (e)
                        for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
                    t["X-Goog-Api-Client"] = lp
                }, dp.prototype.T_ = function(a, r, i) {
                    var h = this,
                        c = this.JE(a);
                    return new Promise(function(o, s) {
                        var u = new Er;
                        u.listenOnce(wr.COMPLETE, function() {
                            try {
                                switch (u.getLastErrorCode()) {
                                    case mr.NO_ERROR:
                                        var t = u.getResponseJson();
                                        Ys("Connection", "XHR received:", JSON.stringify(t)), o(t);
                                        break;
                                    case mr.TIMEOUT:
                                        Ys("Connection", 'RPC "' + a + '" timed out'), s(new Dr(Rr.DEADLINE_EXCEEDED, "Request time out"));
                                        break;
                                    case mr.HTTP_ERROR:
                                        var e = u.getStatus();
                                        if (Ys("Connection", 'RPC "' + a + '" failed with status:', e, "response text:", u.getResponseText()), 0 < e) {
                                            var n = u.getResponseJson().error;
                                            if (n && n.status && n.message) {
                                                var r = (i = n.status.toLowerCase().replace("_", "-"), 0 <= Object.values(Rr).indexOf(i) ? i : Rr.UNKNOWN);
                                                s(new Dr(r, n.message))
                                            } else s(new Dr(Rr.UNKNOWN, "Server responded with status " + u.getStatus()))
                                        } else Ys("Connection", 'RPC "' + a + '" failed'), s(new Dr(Rr.UNAVAILABLE, "Connection failed."));
                                        break;
                                    default:
                                        Js()
                                }
                            } finally {
                                Ys("Connection", 'RPC "' + a + '" completed.')
                            }
                            var i
                        });
                        var t = Object.assign({}, r);
                        delete t.database;
                        var e = JSON.stringify(t);
                        Ys("Connection", "XHR sending: ", c + " " + e);
                        var n = {
                            "Content-Type": "text/plain"
                        };
                        h.YE(n, i), u.send(c, "POST", e, n, 15)
                    })
                }, dp.prototype.E_ = function(t, e, n) {
                    return this.T_(t, e, n)
                }, dp.prototype.n_ = function(t, e) {
                    var n, r, i = [this.HE, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                        o = gr(),
                        s = {
                            httpSessionIdParam: "gsessionid",
                            initMessageHeaders: {},
                            messageUrlParams: {
                                database: "projects/" + this.ii.projectId + "/databases/" + this.ii.database
                            },
                            sendRawJson: !0,
                            supportsCrossDomainXhr: !0,
                            internalChannelParams: {
                                forwardChannelRequestTimeoutMs: 6e5
                            },
                            forceLongPolling: this.forceLongPolling
                        };
                    this.YE(s.initMessageHeaders, e), "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g()) || "object" == typeof navigator && "ReactNative" === navigator.product || 0 <= g().indexOf("Electron/") || 0 <= (r = g()).indexOf("MSIE ") || 0 <= r.indexOf("Trident/") || 0 <= g().indexOf("MSAppHost/") || "object" == typeof(n = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0) && void 0 !== n.id || (s.httpHeadersOverwriteParam = "$httpHeaders");
                    var u = i.join("");

                    function a(t, e) {
                        h.listen(t, function(t) {
                            try {
                                e(t)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 0)
                            }
                        })
                    }
                    Ys("Connection", "Creating WebChannel: " + u + " " + s);
                    var h = o.createWebChannel(u, s),
                        c = !1,
                        f = !1,
                        l = new cp({
                            qE: function(t) {
                                f ? Ys("Connection", "Not sending because WebChannel is closed:", t) : (c || (Ys("Connection", "Opening WebChannel transport."), h.open(), c = !0), Ys("Connection", "WebChannel sending:", t), h.send(t))
                            },
                            UE: function() {
                                return h.close()
                            }
                        });
                    return a(br.EventType.OPEN, function() {
                        f || Ys("Connection", "WebChannel transport opened.")
                    }), a(br.EventType.CLOSE, function() {
                        f || (f = !0, Ys("Connection", "WebChannel transport closed"), l.GE())
                    }), a(br.EventType.ERROR, function(t) {
                        f || (f = !0, function(t) {
                            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                            if (Ws.logLevel <= p.WARN) {
                                var r = e.map(Xs);
                                Ws.warn.apply(Ws, d(["Firestore (" + Tr + "): Connection"], r))
                            }
                        }("Connection", "WebChannel transport errored:", t), l.GE(new Dr(Rr.UNAVAILABLE, "The operation could not be completed")))
                    }), a(br.EventType.MESSAGE, function(t) {
                        var e;
                        if (!f) {
                            var n = t.data[0];
                            $s(!!n);
                            var r = n.error || (null === (e = n[0]) || void 0 === e ? void 0 : e.error);
                            if (r) {
                                Ys("Connection", "WebChannel received error:", r);
                                var i = r.status,
                                    o = function() {
                                        var t = fo[i];
                                        if (void 0 !== t) return $o(t)
                                    }(),
                                    s = r.message;
                                void 0 === o && (o = Rr.INTERNAL, s = "Unknown error status: " + i + " with message " + r.message), f = !0, l.GE(new Dr(o, s)), h.close()
                            } else Ys("Connection", "WebChannel received:", n), l.zE(n)
                        }
                    }), setTimeout(function() {
                        l.KE()
                    }, 0), l
                }, dp.prototype.JE = function(t) {
                    var e = fp[t];
                    return this.HE + "/v1/projects/" + this.ii.projectId + "/databases/" + this.ii.database + "/documents:" + e
                }, dp);

            function dp(t) {
                this.ii = t.ii;
                var e = t.ssl ? "https" : "http";
                this.HE = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling
            }

            function yp(t) {
                this.qE = t.qE, this.UE = t.UE
            }

            function vp() {
                var t = this;
                this.kE = function() {
                    return t.ME()
                }, this.xE = function() {
                    return t.LE()
                }, this.OE = [], this.BE()
            }

            function gp() {}

            function mp() {
                this.oc = "undefined" != typeof atob
            }
            zs.an((Object.defineProperty(mp.prototype, "document", {
                get: function() {
                    return "undefined" != typeof document ? document : null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(mp.prototype, "window", {
                get: function() {
                    return "undefined" != typeof window ? window : null
                },
                enumerable: !0,
                configurable: !0
            }), mp.prototype.vT = function(t) {
                return Promise.resolve(new pp(t))
            }, mp.prototype.gT = function() {
                return new(hp.zh() ? hp : ap)
            }, mp.prototype.Cc = function(t) {
                return new qs(t, {
                    hi: !0
                })
            }, mp.prototype.un = function(t) {
                return JSON.stringify(t)
            }, mp.prototype.atob = function(t) {
                return atob(t)
            }, mp.prototype.btoa = function(t) {
                return btoa(t)
            }, mp.prototype._n = function(t) {
                var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
                    n = new Uint8Array(t);
                if (e) e.getRandomValues(n);
                else
                    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
                return n
            }, new mp)), (Hl = wp).INTERNAL.registerComponent(new T("firestore", function(t) {
                return e = t.getProvider("app").getImmediate(), n = t.getProvider("auth-internal"), new El(e, n, new rl);
                var e, n
            }, "PUBLIC").setServiceProps(Object.assign({}, up))), Hl.registerVersion("@firebase/firestore", "1.15.0")
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-firestore.js.map