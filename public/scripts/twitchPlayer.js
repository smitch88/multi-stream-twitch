!function (t, e) {
	"object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define([], e) : "object" === typeof exports ? exports.video = e() : (t.Twitch = t.Twitch || {}, t.Twitch.video = e())
}
(this, function () {
	return function (t) {
		function e(r) {
			if (n[r])
				return n[r].exports;
			var i = n[r] = {
				exports : {},
				id : r,
				loaded : !1
			};
			return t[r].call(i.exports, i, i.exports, e),
			i.loaded = !0,
			i.exports
		}
		var n = {};
		return e.m = t,
		e.c = n,
		e.p = "",
		e(0)
	}
	([function (t, e, n) {
				
				function r(t) {
					if (t && t.__esModule)
						return t;
					var e = {};
					if (null != t)
						for (var n in t)
							Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e["default"] = t,
					e
				}
				function i(t) {
					return t && t.__esModule ? t : {
						"default" : t
					}
				}
				function o(t, e) {
					if (!(t instanceof e))
						throw new TypeError("Cannot call a class as a function")
				}
				function u(t) {
					return (0, c["default"])(t) ? document.getElementById(t) : t
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				}),
				e.PlayerEmbed = void 0;
				var s = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1,
							r.configurable = !0,
							"value" in r && (r.writable = !0),
							Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n),
						r && t(e, r),
						e
					}
				}
				(),
				a = n(1),
				c = i(a),
				f = n(4),
				l = r(f),
				h = "ready",
				p = "playing",
				v = "pause",
				d = "ended",
				_ = "online",
				y = "offline",
				g = e.PlayerEmbed = function () {
					function t(e, n) {
						o(this, t),
						this._bridge = new l.EmbedClient(u(e), n)
					}
					return s(t, [{
								key : "play",
								value : function () {
									this._bridge.callPlayerMethod(l.METHOD_PLAY)
								}
							}, {
								key : "pause",
								value : function () {
									this._bridge.callPlayerMethod(l.METHOD_PAUSE)
								}
							}, {
								key : "seek",
								value : function (t) {
									this._bridge.callPlayerMethod(l.METHOD_SEEK, t)
								}
							}, {
								key : "setVolume",
								value : function (t) {
									this._bridge.callPlayerMethod(l.METHOD_SET_VOLUME, t)
								}
							}, {
								key : "setMuted",
								value : function (t) {
									this._bridge.callPlayerMethod(l.METHOD_SET_MUTE, t)
								}
							}, {
								key : "setChannel",
								value : function (t) {
									this._bridge.callPlayerMethod(l.METHOD_SET_CHANNEL, t)
								}
							}, {
								key : "setVideo",
								value : function (t) {
									this._bridge.callPlayerMethod(l.METHOD_SET_VIDEO, t)
								}
							}, {
								key : "setQuality",
								value : function (t) {
									this._bridge.callPlayerMethod(l.METHOD_SET_QUALITY, t)
								}
							}, {
								key : "setWidth",
								value : function (t) {
									this._bridge.setWidth(t)
								}
							}, {
								key : "setHeight",
								value : function (t) {
									this._bridge.setHeight(t)
								}
							}, {
								key : "addEventListener",
								value : function (t, e) {
									this._bridge.addEventListener(t, e)
								}
							}, {
								key : "removeEventListener",
								value : function (t, e) {
									this._bridge.removeEventListener(t, e)
								}
							}, {
								key : "getChannel",
								value : function () {
									return this._bridge.getPlayerState().channelName
								}
							}, {
								key : "getCurrentTime",
								value : function () {
									return this._bridge.getPlayerState().currentTime
								}
							}, {
								key : "getDuration",
								value : function () {
									return this._bridge.getPlayerState().duration
								}
							}, {
								key : "getEnded",
								value : function () {
									return this._bridge.getPlayerState().playback === l.PLAYBACK_ENDED
								}
							}, {
								key : "getMuted",
								value : function () {
									return this._bridge.getPlayerState().muted
								}
							}, {
								key : "getPlaybackStats",
								value : function () {
									return this._bridge.getStoreState().stats.videoStats
								}
							}, {
								key : "isPaused",
								value : function () {
									return this._bridge.getPlayerState().playback === l.PLAYBACK_PAUSED
								}
							}, {
								key : "getQuality",
								value : function () {
									return this._bridge.getPlayerState().quality
								}
							}, {
								key : "getQualities",
								value : function () {
									return this._bridge.getPlayerState().qualitiesAvailable
								}
							}, {
								key : "getViewers",
								value : function () {
									return this._bridge.getStoreState().viewercount
								}
							}, {
								key : "getVideo",
								value : function () {
									return this._bridge.getPlayerState().videoID
								}
							}, {
								key : "getVolume",
								value : function () {
									return this._bridge.getPlayerState().volume
								}
							}, {
								key : "destroy",
								value : function () {
									this._bridge.destroy()
								}
							}
						], [{
								key : "READY",
								get : function () {
									return h
								}
							}, {
								key : "PLAY",
								get : function () {
									return p
								}
							}, {
								key : "PAUSE",
								get : function () {
									return v
								}
							}, {
								key : "ENDED",
								get : function () {
									return d
								}
							}, {
								key : "ONLINE",
								get : function () {
									return _
								}
							}, {
								key : "OFFLINE",
								get : function () {
									return y
								}
							}
						]),
					t
				}
				();
				typeof window !== 'undefined' ? window.Twitch = window.Twitch || {} : void 0, //SOURCE MODIFICATION
				typeof window !== 'undefined' ? window.Twitch.Player = g : void 0 //SOURCE MODIFICATION
			}, function (t, e, n) {
				function r(t) {
					return "string" === typeof t || !i(t) && o(t) && a.call(t) == u
				}
				var i = n(2),
				o = n(3),
				u = "[object String]",
				s = Object.prototype,
				a = s.toString;
				t.exports = r
			}, function (t, e) {
				var n = Array.isArray;
				t.exports = n
			}, function (t, e) {
				function n(t) {
					return !!t && "object" === typeof t
				}
				t.exports = n
			}, function (t, e, n) {
				
				function r(t) {
					return t && t.__esModule ? t : {
						"default" : t
					}
				}
				function i(t, e) {
					if (!(t instanceof e))
						throw new TypeError("Cannot call a class as a function")
				}
				function o(t) {
					var e = (0, v.toString)((0, f["default"])(t, "width", "height")),
					n = _ + "/?" + e,
					r = document.createElement("iframe");
					return r.setAttribute("src", n),
					t.allowfullscreen !== !1 && r.setAttribute("allowfullscreen", ""),
					t.width && r.setAttribute("width", t.width),
					t.height && r.setAttribute("height", t.height),
					r.setAttribute("frameBorder", "0"),
					r.setAttribute("scrolling", "no"),
					r
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				}),
				e.EmbedClient = e.PLAYBACK_ENDED = e.PLAYBACK_PLAYING = e.PLAYBACK_PAUSED = e.BRIDGE_CLIENT_NAMESPACE = e.BRIDGE_HOST_NAMESPACE = e.BRIDGE_DOCUMENT_EVENT = e.BRIDGE_PLAYER_EVENT = e.BRIDGE_STORE_STATE_UPDATE = e.BRIDGE_STATE_UPDATE = e.BRIDGE_HOST_READY = e.BRIDGE_REQ_SUBSCRIBE = e.METHOD_DESTROY = e.METHOD_SET_VOLUME = e.METHOD_SET_MUTE = e.METHOD_SET_QUALITY = e.METHOD_SEEK = e.METHOD_SET_VIDEO = e.METHOD_SET_CHANNEL = e.METHOD_PAUSE = e.METHOD_PLAY = e.EVENT_EMBED_READY = void 0;
				var u = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1,
							r.configurable = !0,
							"value" in r && (r.writable = !0),
							Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n),
						r && t(e, r),
						e
					}
				}
				(),
				s = n(5),
				a = r(s),
				c = n(9),
				f = r(c),
				l = n(67),
				h = r(l),
				p = n(68),
				v = n(69),
				d = n(70),
				_ = function () {
					var t = "https://player.twitch.tv";
					/** SOURCE MODIFICATION
					 *  We are loading this from within a different script file.
					 *  In order to get the request origins correct to load the videos, it has to be hard coded.
					 **/
					//if (document.currentScript)
					//	t = document.currentScript.src;
					//else {
					//	var e = Array.prototype.filter.call(document.scripts, function (t) {
					//			return /twitch\.tv.*embed/.test(t.src)
					//		});
					//	t = e.length > 0 ? e[0].src : document.scripts[document.scripts.length - 1].src
					//}
					if (typeof window !== 'undefined' && window && window.location && window.location.protocol && window.location.protocol !== 'https:') {
						t = 'http://player.twitch.tv';
					}
					var n = (0, p.parseUri)(t);
					return n.protocol + "://" + n.authority
				}
				(),
				y = 15e3,
				g = {
					channelName : "",
					currentTime : 0,
					duration : 0,
					muted : !1,
					playback : "",
					quality : "",
					qualitiesAvailable : [],
					stats : {},
					videoID : "",
					viewers : 0,
					volume : 0
				},
				E = e.EVENT_EMBED_READY = "ready",
				m = (e.METHOD_PLAY = "play", e.METHOD_PAUSE = "pause", e.METHOD_SET_CHANNEL = "channel", e.METHOD_SET_VIDEO = "video", e.METHOD_SEEK = "seek", e.METHOD_SET_QUALITY = "quality", e.METHOD_SET_MUTE = "mute", e.METHOD_SET_VOLUME = "volume", e.METHOD_DESTROY = "destroy"),
				b = e.BRIDGE_REQ_SUBSCRIBE = "subscribe",
				w = e.BRIDGE_HOST_READY = "ready",
				A = e.BRIDGE_STATE_UPDATE = "bridgestateupdate",
				T = e.BRIDGE_STORE_STATE_UPDATE = "bridgestorestateupdate",
				O = e.BRIDGE_PLAYER_EVENT = "bridgeplayerevent",
				S = (e.BRIDGE_DOCUMENT_EVENT = "bridgedocumentevent", e.BRIDGE_HOST_NAMESPACE = "player.embed.host"),
				x = e.BRIDGE_CLIENT_NAMESPACE = "player.embed.client";
				e.PLAYBACK_PAUSED = "paused",
				e.PLAYBACK_PLAYING = "playing",
				e.PLAYBACK_ENDED = "ended",
				e.EmbedClient = function () {
					function t(e, n) {
						i(this, t),
						this._eventEmitter = new h["default"](),
						this._playerState = g,
						this._storeState = {},
						this._onHostReady = this._getHostReady(),
						this._iframe = o(n),
						e.appendChild(this._iframe),
						this._host = this._iframe.contentWindow,
						this._send(b)
					}
					return u(t, [{
								key : "destroy",
								value : function () {
									this.callPlayerMethod(m),
									this._iframe.parentNode.removeChild(this._iframe)
								}
							}, {
								key : "_getHostReady",
								value : function () {
									var t = this;
									return new d.Promise(function (e, n) {
										function r(t) {
											this._isClientMessage(t) && t.data.method === w && (window.removeEventListener("message", i), window.addEventListener("message", this), this._eventEmitter.emit(E), e())
										}
										var i = r.bind(t);
										window.addEventListener("message", i),
										setTimeout(n, y)
									})
								}
							}, {
								key : "_send",
								value : function (t) {
									for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++)
										n[r - 1] = arguments[r];
									var i = {
										namespace : S,
										method : t,
										args : n
									};
									this._host.postMessage(i, "*")
								}
							}, {
								key : "_deferSend",
								value : function () {
									for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++)
										n[r] = arguments[r];
									this._onHostReady.then(function () {
										return t._send.apply(t, n)
									})
								}
							}, {
								key : "_isClientMessage",
								value : function (t) {
									return Boolean(t.data) && t.data.namespace === x && t.source === this._iframe.contentWindow
								}
							}, {
								key : "handleEvent",
								value : function (t) {
									if (this._isClientMessage(t))
										switch (t.data.method) {
										case A:
											this._playerState = t.data.args[0];
											break;
										case O:
											this._eventEmitter.emit(t.data.args[0]);
											break;
										case T:
											this._storeState = t.data.args[0]
										}
								}
							}, {
								key : "getPlayerState",
								value : function () {
									return this._playerState
								}
							}, {
								key : "getStoreState",
								value : function () {
									return this._storeState
								}
							}, {
								key : "addEventListener",
								value : function (t, e) {
									this._eventEmitter.on(t, e)
								}
							}, {
								key : "removeEventListener",
								value : function (t, e) {
									this._eventEmitter.off(t, e)
								}
							}, {
								key : "callPlayerMethod",
								value : function (t, e) {
									this._deferSend(t, e)
								}
							}, {
								key : "setWidth",
								value : function (t) {
									(0, a["default"])(t) && t >= 0 && this._iframe.setAttribute("width", t)
								}
							}, {
								key : "setHeight",
								value : function (t) {
									(0, a["default"])(t) && t >= 0 && this._iframe.setAttribute("height", t)
								}
							}
						]),
					t
				}
				()
			}, function (t, e, n) {
				function r(t) {
					return "number" === typeof t && o(t)
				}
				var i = n(6),
				o = i.isFinite;
				t.exports = r
			}, function (t, e, n) {
				(function (t, r) {
					var i = n(8),
					o = {
						"function" : !0,
						object : !0
					},
					u = o[typeof e] && e && !e.nodeType ? e : void 0,
					s = o[typeof t] && t && !t.nodeType ? t : void 0,
					a = i(u && s && "object" === typeof r && r),
					c = i(o[typeof self] && self),
					f = i(o[typeof window] && window),
					l = i(o[typeof this] && this),
					h = a || f !== (l && l.window) && f || c || l || Function("return this")();
					t.exports = h
				}).call(e, n(7)(t), function () {
					return this
				}
					())
			}, function (t, e) {
				t.exports = function (t) {
					return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1),
					t
				}
			}, function (t, e) {
				function n(t) {
					return t && t.Object === Object ? t : null
				}
				t.exports = n
			}, function (t, e, n) {
				var r = n(10),
				i = n(11),
				o = n(45),
				u = n(53),
				s = n(55),
				a = n(63),
				c = a(function (t, e) {
						return null == t ? {}

						 : (e = r(o(e, 1), String), u(t, i(s(t), e)))
					});
				t.exports = c
			}, function (t, e) {
				function n(t, e) {
					for (var n = -1, r = t.length, i = Array(r); ++n < r; )
						i[n] = e(t[n], n, t);
					return i
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t, e, n, r) {
					var l = -1,
					h = o,
					p = !0,
					v = t.length,
					d = [],
					_ = e.length;
					if (!v)
						return d;
					n && (e = s(e, a(n))),
					r ? (h = u, p = !1) : e.length >= f && (h = c, p = !1, e = new i(e));
					t : for (; ++l < v; ) {
						var y = t[l],
						g = n ? n(y) : y;
						if (p && g === g) {
							for (var E = _; E--; )
								if (e[E] === g)
									continue t;
							d.push(y)
						} else
							h(e, g, r) || d.push(y)
					}
					return d
				}
				var i = n(12),
				o = n(39),
				u = n(42),
				s = n(10),
				a = n(43),
				c = n(44),
				f = 200;
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					var e = -1,
					n = t ? t.length : 0;
					for (this.__data__ = new i(); ++e < n; )
						this.push(t[e])
				}
				var i = n(13),
				o = n(38);
				r.prototype.push = o,
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					var e = -1,
					n = t ? t.length : 0;
					for (this.clear(); ++e < n; ) {
						var r = t[e];
						this.set(r[0], r[1])
					}
				}
				var i = n(14),
				o = n(23),
				u = n(30),
				s = n(33),
				a = n(35);
				r.prototype.clear = i,
				r.prototype["delete"] = o,
				r.prototype.get = u,
				r.prototype.has = s,
				r.prototype.set = a,
				t.exports = r
			}, function (t, e, n) {
				function r() {
					this.__data__ = {
						hash : new i(),
						map : o ? new o() : [],
						string : new i()
					}
				}
				var i = n(15),
				o = n(22);
				t.exports = r
			}, function (t, e, n) {
				function r() {}

				var i = n(16),
				o = Object.prototype;
				r.prototype = i ? i(null) : o,
				t.exports = r
			}, function (t, e, n) {
				var r = n(17),
				i = r(Object, "create");
				t.exports = i
			}, function (t, e, n) {
				function r(t, e) {
					var n = t[e];
					return i(n) ? n : void 0
				}
				var i = n(18);
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return null == t ? !1 : i(t) ? h.test(f.call(t)) : u(t) && (o(t) ? h : a).test(t)
				}
				var i = n(19),
				o = n(21),
				u = n(3),
				s = /[\\^$.*+?()[\]{}|]/g,
				a = /^\[object .+?Constructor\]$/,
				c = Object.prototype,
				f = Function.prototype.toString,
				l = c.hasOwnProperty,
				h = RegExp("^" + f.call(l).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					var e = i(t) ? a.call(t) : "";
					return e == o || e == u
				}
				var i = n(20),
				o = "[object Function]",
				u = "[object GeneratorFunction]",
				s = Object.prototype,
				a = s.toString;
				t.exports = r
			}, function (t, e) {
				function n(t) {
					var e = typeof t;
					return !!t && ("object" == e || "function" == e)
				}
				t.exports = n
			}, function (t, e) {
				function n(t) {
					var e = !1;
					if (null != t && "function" !== typeof t.toString)
						try {
							e = !!(t + "")
						} catch (n) {}

					return e
				}
				t.exports = n
			}, function (t, e, n) {
				var r = n(17),
				i = n(6),
				o = r(i, "Map");
				t.exports = o
			}, function (t, e, n) {
				function r(t) {
					var e = this.__data__;
					return s(t) ? u("string" === typeof t ? e.string : e.hash, t) : i ? e.map["delete"](t) : o(e.map, t)
				}
				var i = n(22),
				o = n(24),
				u = n(27),
				s = n(29);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					var n = i(t, e);
					if (0 > n)
						return !1;
					var r = t.length - 1;
					return n == r ? t.pop() : u.call(t, n, 1),
					!0
				}
				var i = n(25),
				o = Array.prototype,
				u = o.splice;
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					for (var n = t.length; n--; )
						if (i(t[n][0], e))
							return n;
					return -1
				}
				var i = n(26);
				t.exports = r
			}, function (t, e) {
				function n(t, e) {
					return t === e || t !== t && e !== e
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t, e) {
					return i(t, e) && delete t[e]
				}
				var i = n(28);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					return i ? void 0 !== t[e] : u.call(t, e)
				}
				var i = n(16),
				o = Object.prototype,
				u = o.hasOwnProperty;
				t.exports = r
			}, function (t, e) {
				function n(t) {
					var e = typeof t;
					return "number" == e || "boolean" == e || "string" == e && "__proto__" != t || null == t
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					var e = this.__data__;
					return s(t) ? u("string" === typeof t ? e.string : e.hash, t) : i ? e.map.get(t) : o(e.map, t)
				}
				var i = n(22),
				o = n(31),
				u = n(32),
				s = n(29);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					var n = i(t, e);
					return 0 > n ? void 0 : t[n][1]
				}
				var i = n(25);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					if (i) {
						var n = t[e];
						return n === o ? void 0 : n
					}
					return s.call(t, e) ? t[e] : void 0
				}
				var i = n(16),
				o = "__lodash_hash_undefined__",
				u = Object.prototype,
				s = u.hasOwnProperty;
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					var e = this.__data__;
					return s(t) ? u("string" === typeof t ? e.string : e.hash, t) : i ? e.map.has(t) : o(e.map, t)
				}
				var i = n(22),
				o = n(34),
				u = n(28),
				s = n(29);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					return i(t, e) > -1
				}
				var i = n(25);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					var n = this.__data__;
					return s(t) ? u("string" === typeof t ? n.string : n.hash, t, e) : i ? n.map.set(t, e) : o(n.map, t, e),
					this
				}
				var i = n(22),
				o = n(36),
				u = n(37),
				s = n(29);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n) {
					var r = i(t, e);
					0 > r ? t.push([e, n]) : t[r][1] = n
				}
				var i = n(25);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n) {
					t[e] = i && void 0 === n ? o : n
				}
				var i = n(16),
				o = "__lodash_hash_undefined__";
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					var e = this.__data__;
					if (i(t)) {
						var n = e.__data__,
						r = "string" === typeof t ? n.string : n.hash;
						r[t] = o
					} else
						e.set(t, o)
				}
				var i = n(29),
				o = "__lodash_hash_undefined__";
				t.exports = r
			}, function (t, e, n) {
				function r(t, e) {
					return !!t.length && i(t, e, 0) > -1
				}
				var i = n(40);
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n) {
					if (e !== e)
						return i(t, n);
					for (var r = n - 1, o = t.length; ++r < o; )
						if (t[r] === e)
							return r;
					return -1
				}
				var i = n(41);
				t.exports = r
			}, function (t, e) {
				function n(t, e, n) {
					for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r; ) {
						var o = t[i];
						if (o !== o)
							return i
					}
					return -1
				}
				t.exports = n
			}, function (t, e) {
				function n(t, e, n) {
					for (var r = -1, i = t.length; ++r < i; )
						if (n(e, t[r]))
							return !0;
					return !1
				}
				t.exports = n
			}, function (t, e) {
				function n(t) {
					return function (e) {
						return t(e)
					}
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t, e) {
					var n = t.__data__;
					if (i(e)) {
						var r = n.__data__,
						u = "string" === typeof e ? r.string : r.hash;
						return u[e] === o
					}
					return n.has(e)
				}
				var i = n(29),
				o = "__lodash_hash_undefined__";
				t.exports = r
			}, function (t, e, n) {
				function r(t, e, n, a) {
					a || (a = []);
					for (var c = -1, f = t.length; ++c < f; ) {
						var l = t[c];
						e > 0 && s(l) && (n || u(l) || o(l)) ? e > 1 ? r(l, e - 1, n, a) : i(a, l) : n || (a[a.length] = l)
					}
					return a
				}
				var i = n(46),
				o = n(47),
				u = n(2),
				s = n(48);
				t.exports = r
			}, function (t, e) {
				function n(t, e) {
					for (var n = -1, r = e.length, i = t.length; ++n < r; )
						t[i + n] = e[n];
					return t
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					return i(t) && s.call(t, "callee") && (!c.call(t, "callee") || a.call(t) == o)
				}
				var i = n(48),
				o = "[object Arguments]",
				u = Object.prototype,
				s = u.hasOwnProperty,
				a = u.toString,
				c = u.propertyIsEnumerable;
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return o(t) && i(t)
				}
				var i = n(49),
				o = n(3);
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					return null != t && u(i(t)) && !o(t)
				}
				var i = n(50),
				o = n(19),
				u = n(52);
				t.exports = r
			}, function (t, e, n) {
				var r = n(51),
				i = r("length");
				t.exports = i
			}, function (t, e) {
				function n(t) {
					return function (e) {
						return null == e ? void 0 : e[t]
					}
				}
				t.exports = n
			}, function (t, e) {
				function n(t) {
					return "number" === typeof t && t > -1 && t % 1 == 0 && r >= t
				}
				var r = 9007199254740991;
				t.exports = n
			}, function (t, e, n) {
				function r(t, e) {
					return t = Object(t),
					i(e, function (e, n) {
						return n in t && (e[n] = t[n]),
						e
					}, {})
				}
				var i = n(54);
				t.exports = r
			}, function (t, e) {
				function n(t, e, n, r) {
					var i = -1,
					o = t.length;
					for (r && o && (n = t[++i]); ++i < o; )
						n = e(n, t[i], i, t);
					return n
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					for (var e = -1, n = s(t), r = i(t), a = r.length, f = o(t), l = !!f, h = f || [], p = h.length; ++e < a; ) {
						var v = r[e];
						l && ("length" == v || u(v, p)) || "constructor" == v && (n || !c.call(t, v)) || h.push(v)
					}
					return h
				}
				var i = n(56),
				o = n(59),
				u = n(61),
				s = n(62),
				a = Object.prototype,
				c = a.hasOwnProperty;
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					t = null == t ? t : Object(t);
					var e = [];
					for (var n in t)
						e.push(n);
					return e
				}
				var i = n(57),
				o = n(58),
				u = Object.prototype,
				s = i ? i.enumerate : void 0,
				a = u.propertyIsEnumerable;
				s && !a.call({
					valueOf : 1
				}, "valueOf") && (r = function (t) {
					return o(s(t))
				}),
				t.exports = r
			}, function (t, e, n) {
				var r = n(6),
				i = r.Reflect;
				t.exports = i
			}, function (t, e) {
				function n(t) {
					for (var e, n = []; !(e = t.next()).done; )
						n.push(e.value);
					return n
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					var e = t ? t.length : void 0;
					return s(e) && (u(t) || a(t) || o(t)) ? i(e, String) : null
				}
				var i = n(60),
				o = n(47),
				u = n(2),
				s = n(52),
				a = n(1);
				t.exports = r
			}, function (t, e) {
				function n(t, e) {
					for (var n = -1, r = Array(t); ++n < t; )
						r[n] = e(n);
					return r
				}
				t.exports = n
			}, function (t, e) {
				function n(t, e) {
					return t = "number" === typeof t || i.test(t) ? +t : -1,
					e = null == e ? r : e,
					t > -1 && t % 1 == 0 && e > t
				}
				var r = 9007199254740991,
				i = /^(?:0|[1-9]\d*)$/;
				t.exports = n
			}, function (t, e) {
				function n(t) {
					var e = t && t.constructor,
					n = "function" === typeof e && e.prototype || r;
					return t === n
				}
				var r = Object.prototype;
				t.exports = n
			}, function (t, e, n) {
				function r(t, e) {
					if ("function" !== typeof t)
						throw new TypeError(u);
					return e = s(void 0 === e ? t.length - 1 : o(e), 0),
					function () {
						for (var n = arguments, r = -1, o = s(n.length - e, 0), u = Array(o); ++r < o; )
							u[r] = n[e + r];
						switch (e) {
						case 0:
							return t.call(this, u);
						case 1:
							return t.call(this, n[0], u);
						case 2:
							return t.call(this, n[0], n[1], u)
						}
						var a = Array(e + 1);
						for (r = -1; ++r < e; )
							a[r] = n[r];
						return a[e] = u,
						i(t, this, a)
					}
				}
				var i = n(64),
				o = n(65),
				u = "Expected a function",
				s = Math.max;
				t.exports = r
			}, function (t, e) {
				function n(t, e, n) {
					var r = n.length;
					switch (r) {
					case 0:
						return t.call(e);
					case 1:
						return t.call(e, n[0]);
					case 2:
						return t.call(e, n[0], n[1]);
					case 3:
						return t.call(e, n[0], n[1], n[2])
					}
					return t.apply(e, n)
				}
				t.exports = n
			}, function (t, e, n) {
				function r(t) {
					if (!t)
						return 0 === t ? t : 0;
					if (t = i(t), t === o || t === -o) {
						var e = 0 > t ? -1 : 1;
						return e * u
					}
					var n = t % 1;
					return t === t ? n ? t - n : t : 0
				}
				var i = n(66),
				o = 1 / 0,
				u = 1.7976931348623157e308;
				t.exports = r
			}, function (t, e, n) {
				function r(t) {
					if (o(t)) {
						var e = i(t.valueOf) ? t.valueOf() : t;
						t = o(e) ? e + "" : e
					}
					if ("string" !== typeof t)
						return 0 === t ? t : +t;
					t = t.replace(s, "");
					var n = c.test(t);
					return n || f.test(t) ? l(t.slice(2), n ? 2 : 8) : a.test(t) ? u : +t
				}
				var i = n(19),
				o = n(20),
				u = NaN,
				s = /^\s+|\s+$/g,
				a = /^[-+]0x[0-9a-f]+$/i,
				c = /^0b[01]+$/i,
				f = /^0o[0-7]+$/i,
				l = parseInt;
				t.exports = r
			}, function (t, e, n) {
				var r;
				(function () {
					
					function e() {}

					function i(t, e) {
						for (var n = t.length; n--; )
							if (t[n].listener === e)
								return n;
						return -1
					}
					function o(t) {
						return function () {
							return this[t].apply(this, arguments)
						}
					}
					var u = e.prototype,
					s = this,
					a = s.EventEmitter;
					u.getListeners = function (t) {
						var e,
						n,
						r = this._getEvents();
						if (t instanceof RegExp) {
							e = {};
							for (n in r)
								r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
						} else
							e = r[t] || (r[t] = []);
						return e
					},
					u.flattenListeners = function (t) {
						var e,
						n = [];
						for (e = 0; e < t.length; e += 1)
							n.push(t[e].listener);
						return n
					},
					u.getListenersAsObject = function (t) {
						var e,
						n = this.getListeners(t);
						return n instanceof Array && (e = {}, e[t] = n),
						e || n
					},
					u.addListener = function (t, e) {
						var n,
						r = this.getListenersAsObject(t),
						o = "object" === typeof e;
						for (n in r)
							r.hasOwnProperty(n) && -1 === i(r[n], e) && r[n].push(o ? e : {
								listener : e,
								once : !1
							});
						return this
					},
					u.on = o("addListener"),
					u.addOnceListener = function (t, e) {
						return this.addListener(t, {
							listener : e,
							once : !0
						})
					},
					u.once = o("addOnceListener"),
					u.defineEvent = function (t) {
						return this.getListeners(t),
						this
					},
					u.defineEvents = function (t) {
						for (var e = 0; e < t.length; e += 1)
							this.defineEvent(t[e]);
						return this
					},
					u.removeListener = function (t, e) {
						var n,
						r,
						o = this.getListenersAsObject(t);
						for (r in o)
							o.hasOwnProperty(r) && (n = i(o[r], e), -1 !== n && o[r].splice(n, 1));
						return this
					},
					u.off = o("removeListener"),
					u.addListeners = function (t, e) {
						return this.manipulateListeners(!1, t, e)
					},
					u.removeListeners = function (t, e) {
						return this.manipulateListeners(!0, t, e)
					},
					u.manipulateListeners = function (t, e, n) {
						var r,
						i,
						o = t ? this.removeListener : this.addListener,
						u = t ? this.removeListeners : this.addListeners;
						if ("object" !== typeof e || e instanceof RegExp)
							for (r = n.length; r--; )
								o.call(this, e, n[r]);
						else
							for (r in e)
								e.hasOwnProperty(r) && (i = e[r]) && ("function" === typeof i ? o.call(this, r, i) : u.call(this, r, i));
						return this
					},
					u.removeEvent = function (t) {
						var e,
						n = typeof t,
						r = this._getEvents();
						if ("string" === n)
							delete r[t];
						else if (t instanceof RegExp)
							for (e in r)
								r.hasOwnProperty(e) && t.test(e) && delete r[e];
						else
							delete this._events;
						return this
					},
					u.removeAllListeners = o("removeEvent"),
					u.emitEvent = function (t, e) {
						var n,
						r,
						i,
						o,
						u,
						s = this.getListenersAsObject(t);
						for (o in s)
							if (s.hasOwnProperty(o))
								for (n = s[o].slice(0), i = n.length; i--; )
									r = n[i], r.once === !0 && this.removeListener(t, r.listener), u = r.listener.apply(this, e || []), u === this._getOnceReturnValue() && this.removeListener(t, r.listener);
						return this
					},
					u.trigger = o("emitEvent"),
					u.emit = function (t) {
						var e = Array.prototype.slice.call(arguments, 1);
						return this.emitEvent(t, e)
					},
					u.setOnceReturnValue = function (t) {
						return this._onceReturnValue = t,
						this
					},
					u._getOnceReturnValue = function () {
						return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
					},
					u._getEvents = function () {
						return this._events || (this._events = {})
					},
					e.noConflict = function () {
						return s.EventEmitter = a,
						e
					},
					r = function () {
						return e
					}
					.call(s, n, s, t),
					!(void 0 !== r && (t.exports = r))
				}).call(this)
			}, function (t, e) {
				
				function n(t) {
					for (var e = {
							strictMode : !1,
							key : ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
							q : {
								name : "queryKey",
								parser : /(?:^|&)([^&=]*)=?([^&]*)/g
							},
							parser : {
								strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
								loose : /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
							}
						}, n = e.parser[e.strictMode ? "strict" : "loose"].exec(t), r = {}, i = 14; i--; )
						r[e.key[i]] = n[i] || "";
					return r[e.q.name] = {},
					r[e.key[12]].replace(e.q.parser, function (t, n, i) {
						n && (r[e.q.name][n] = i)
					}),
					r
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				}),
				e.parseUri = n
			}, function (t, e) {
				
				function n(t) {
					for (var e = {}, n = t.split("&"), r = 0; r < n.length; r++) {
						var i = /^(.+?)(?:=(.+))?$/.exec(n[r]);
						if (i) {
							var o = i[1],
							u = i[2];
							"true" === u ? u = !0 : "false" === u ? u = !1 : void 0 !== u ? u = decodeURIComponent(u) : "!" === o[0] ? (o = o.substring(1), u = !1) : u = !0,
							e[o] = u
						}
					}
					return e
				}
				function r(t) {
					var e = [];
					for (var n in t)
						if (t.hasOwnProperty(n)) {
							var r = t[n];
							n = encodeURIComponent(n),
							r === !0 ? e.push(n) : r === !1 ? e.push("!" + n) : (r = encodeURIComponent(r), e.push(n + "=" + r))
						}
					return e.join("&")
				}
				Object.defineProperty(e, "__esModule", {
					value : !0
				}),
				e.parse = n,
				e.toString = r
			}, function (t, e, n) {
				var r;
				(function (t, i, o) {
					/*!
					 * @overview es6-promise - a tiny implementation of Promises/A+.
					 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
					 * @license   Licensed under MIT license
					 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
					 * @version   3.1.2
					 */
					(function () {
						
						function u(t) {
							return "function" === typeof t || "object" === typeof t && null !== t
						}
						function s(t) {
							return "function" === typeof t
						}
						function a(t) {
							F = t
						}
						function c(t) {
							J = t
						}
						function f() {
							return function () {
								t.nextTick(d)
							}
						}
						function l() {
							return function () {
								q(d)
							}
						}
						function h() {
							var t = 0,
							e = new tt(d),
							n = document.createTextNode("");
							return e.observe(n, {
								characterData : !0
							}),
							function () {
								n.data = t = ++t % 2
							}
						}
						function p() {
							var t = new MessageChannel();
							return t.port1.onmessage = d,
							function () {
								t.port2.postMessage(0)
							}
						}
						function v() {
							return function () {
								setTimeout(d, 1)
							}
						}
						function d() {
							for (var t = 0; z > t; t += 2) {
								var e = rt[t],
								n = rt[t + 1];
								e(n),
								rt[t] = void 0,
								rt[t + 1] = void 0
							}
							z = 0
						}
						function _() {
							try {
								var t = n(72);
								return q = t.runOnLoop || t.runOnContext,
								l()
							} catch (e) {
								return v()
							}
						}
						function y(t, e) {
							var n = this,
							r = n._state;
							if (r === st && !t || r === at && !e)
								return this;
							var i = new this.constructor(E),
							o = n._result;
							if (r) {
								var u = arguments[r - 1];
								J(function () {
									C(r, i, u, o)
								})
							} else
								L(n, i, t, e);
							return i
						}
						function g(t) {
							var e = this;
							if (t && "object" === typeof t && t.constructor === e)
								return t;
							var n = new e(E);
							return x(n, t),
							n
						}
						function E() {}

						function m() {
							return new TypeError("You cannot resolve a promise with itself")
						}
						function b() {
							return new TypeError("A promises callback cannot return that same promise.")
						}
						function w(t) {
							try {
								return t.then
							} catch (e) {
								return ct.error = e,
								ct
							}
						}
						function A(t, e, n, r) {
							try {
								t.call(e, n, r)
							} catch (i) {
								return i
							}
						}
						function T(t, e, n) {
							J(function (t) {
								var r = !1,
								i = A(n, e, function (n) {
										r || (r = !0, e !== n ? x(t, n) : D(t, n))
									}, function (e) {
										r || (r = !0, M(t, e))
									}, "Settle: " + (t._label || " unknown promise"));
								!r && i && (r = !0, M(t, i))
							}, t)
						}
						function O(t, e) {
							e._state === st ? D(t, e._result) : e._state === at ? M(t, e._result) : L(e, void 0, function (e) {
								x(t, e)
							}, function (e) {
								M(t, e)
							})
						}
						function S(t, e, n) {
							e.constructor === t.constructor && n === it && constructor.resolve === ot ? O(t, e) : n === ct ? M(t, ct.error) : void 0 === n ? D(t, e) : s(n) ? T(t, e, n) : D(t, e)
						}
						function x(t, e) {
							t === e ? M(t, m()) : u(e) ? S(t, e, w(e)) : D(t, e)
						}
						function P(t) {
							t._onerror && t._onerror(t._result),
							k(t)
						}
						function D(t, e) {
							t._state === ut && (t._result = e, t._state = st, 0 !== t._subscribers.length && J(k, t))
						}
						function M(t, e) {
							t._state === ut && (t._state = at, t._result = e, J(P, t))
						}
						function L(t, e, n, r) {
							var i = t._subscribers,
							o = i.length;
							t._onerror = null,
							i[o] = e,
							i[o + st] = n,
							i[o + at] = r,
							0 === o && t._state && J(k, t)
						}
						function k(t) {
							var e = t._subscribers,
							n = t._state;
							if (0 !== e.length) {
								for (var r, i, o = t._result, u = 0; u < e.length; u += 3)
									r = e[u], i = e[u + n], r ? C(n, r, i, o) : i(o);
								t._subscribers.length = 0
							}
						}
						function j() {
							this.error = null
						}
						function R(t, e) {
							try {
								return t(e)
							} catch (n) {
								return ft.error = n,
								ft
							}
						}
						function C(t, e, n, r) {
							var i,
							o,
							u,
							a,
							c = s(n);
							if (c) {
								if (i = R(n, r), i === ft ? (a = !0, o = i.error, i = null) : u = !0, e === i)
									return void M(e, b())
							} else
								i = r, u = !0;
							e._state !== ut || (c && u ? x(e, i) : a ? M(e, o) : t === st ? D(e, i) : t === at && M(e, i))
						}
						function H(t, e) {
							try {
								e(function (e) {
									x(t, e)
								}, function (e) {
									M(t, e)
								})
							} catch (n) {
								M(t, n)
							}
						}
						function I(t) {
							return new _t(this, t).promise
						}
						function N(t) {
							function e(t) {
								x(i, t)
							}
							function n(t) {
								M(i, t)
							}
							var r = this,
							i = new r(E);
							if (!W(t))
								return M(i, new TypeError("You must pass an array to race.")), i;
							for (var o = t.length, u = 0; i._state === ut && o > u; u++)
								L(r.resolve(t[u]), void 0, e, n);
							return i
						}
						function B(t) {
							var e = this,
							n = new e(E);
							return M(n, t),
							n
						}
						function U() {
							throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
						}
						function Y() {
							throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
						}
						function V(t) {
							this._id = vt++,
							this._state = void 0,
							this._result = void 0,
							this._subscribers = [],
							E !== t && ("function" !== typeof t && U(), this instanceof V ? H(this, t) : Y())
						}
						function G(t, e) {
							this._instanceConstructor = t,
							this.promise = new t(E),
							Array.isArray(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? D(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && D(this.promise, this._result))) : M(this.promise, this._validationError())
						}
						function K() {
							var t;
							if ("undefined" !== typeof i)
								t = i;
							else if ("undefined" !== typeof self)
								t = self;
							else
								try {
									t = Function("return this")()
								} catch (e) {
									throw new Error("polyfill failed because global object is unavailable in this environment")
								}
							var n = t.Promise;
							(!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (t.Promise = dt)
						}
						var $;
						$ = Array.isArray ? Array.isArray : function (t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						};
						var q,
						F,
						Q,
						W = $,
						z = 0,
						J = function (t, e) {
							rt[z] = t,
							rt[z + 1] = e,
							z += 2,
							2 === z && (F ? F(d) : Q())
						},
						X = "undefined" !== typeof window ? window : void 0,
						Z = X || {},
						tt = Z.MutationObserver || Z.WebKitMutationObserver,
						et = "undefined" !== typeof t && "[object process]" === {}

						.toString.call(t),
						nt = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel,
						rt = new Array(1e3);
						Q = et ? f() : tt ? h() : nt ? p() : void 0 === X ? _() : v();
						var it = y,
						ot = g,
						ut = void 0,
						st = 1,
						at = 2,
						ct = new j(),
						ft = new j(),
						lt = I,
						ht = N,
						pt = B,
						vt = 0,
						dt = V;
						V.all = lt,
						V.race = ht,
						V.resolve = ot,
						V.reject = pt,
						V._setScheduler = a,
						V._setAsap = c,
						V._asap = J,
						V.prototype = {
							constructor : V,
							then : it,
							"catch" : function (t) {
								return this.then(null, t)
							}
						};
						var _t = G;
						G.prototype._validationError = function () {
							return new Error("Array Methods must be provided an Array")
						},
						G.prototype._enumerate = function () {
							for (var t = this.length, e = this._input, n = 0; this._state === ut && t > n; n++)
								this._eachEntry(e[n], n)
						},
						G.prototype._eachEntry = function (t, e) {
							var n = this._instanceConstructor,
							r = n.resolve;
							if (r === ot) {
								var i = w(t);
								if (i === it && t._state !== ut)
									this._settledAt(t._state, e, t._result);
								else if ("function" !== typeof i)
									this._remaining--, this._result[e] = t;
								else if (n === dt) {
									var o = new n(E);
									S(o, t, i),
									this._willSettleAt(o, e)
								} else
									this._willSettleAt(new n(function (e) {
											e(t)
										}), e)
							} else
								this._willSettleAt(r(t), e)
						},
						G.prototype._settledAt = function (t, e, n) {
							var r = this.promise;
							r._state === ut && (this._remaining--, t === at ? M(r, n) : this._result[e] = n),
							0 === this._remaining && D(r, this._result)
						},
						G.prototype._willSettleAt = function (t, e) {
							var n = this;
							L(t, void 0, function (t) {
								n._settledAt(st, e, t)
							}, function (t) {
								n._settledAt(at, e, t)
							})
						};
						var yt = K,
						gt = {
							Promise : dt,
							polyfill : yt
						};
						n(73).amd ? (r = function () {
							return gt
						}
							.call(e, n, e, o), !(void 0 !== r && (o.exports = r))) : "undefined" !== typeof o && o.exports ? o.exports = gt : "undefined" !== typeof this && (this.ES6Promise = gt),
						yt()
					}).call(this)
				}).call(e, n(71), function () {
					return this
				}
					(), n(7)(t))
			}, function (t, e) {
				function n() {
					c = !1,
					u.length ? a = u.concat(a) : f = -1,
					a.length && r()
				}
				function r() {
					if (!c) {
						var t = setTimeout(n);
						c = !0;
						for (var e = a.length; e; ) {
							for (u = a, a = []; ++f < e; )
								u && u[f].run();
							f = -1,
							e = a.length
						}
						u = null,
						c = !1,
						clearTimeout(t)
					}
				}
				function i(t, e) {
					this.fun = t,
					this.array = e
				}
				function o() {}

				var u,
				s = t.exports = {},
				a = [],
				c = !1,
				f = -1;
				s.nextTick = function (t) {
					var e = new Array(arguments.length - 1);
					if (arguments.length > 1)
						for (var n = 1; n < arguments.length; n++)
							e[n - 1] = arguments[n];
					a.push(new i(t, e)),
					1 !== a.length || c || setTimeout(r, 0)
				},
				i.prototype.run = function () {
					this.fun.apply(null, this.array)
				},
				s.title = "browser",
				s.browser = !0,
				s.env = {},
				s.argv = [],
				s.version = "",
				s.versions = {},
				s.on = o,
				s.addListener = o,
				s.once = o,
				s.off = o,
				s.removeListener = o,
				s.removeAllListeners = o,
				s.emit = o,
				s.binding = function (t) {
					throw new Error("process.binding is not supported")
				},
				s.cwd = function () {
					return "/"
				},
				s.chdir = function (t) {
					throw new Error("process.chdir is not supported")
				},
				s.umask = function () {
					return 0
				}
			}, function (t, e) {}, function (t, e) {
				t.exports = function () {
					throw new Error("define cannot be used indirect")
				}
			}
		])
});
