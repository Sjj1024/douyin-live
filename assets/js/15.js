"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[920], {
    55275: function(e, n, t) {
        t.d(n, {
            Y: function() {
                return O
            }
        });
        var r = t(937)
          , a = t(85116)
          , i = t(70355)
          , o = t.n(i)
          , s = t(77355)
          , l = t.n(s)
          , u = t(21528)
          , c = {
            circleButtonWrapper: "gVAgxPt4",
            circleButtonWithText: "q7itrkcz",
            textBadge: "eWId3EeD",
            roundBadge: "CPQ46DEr",
            circleButtonWithTextRoundBadge: "ATU7pfeV",
            circleButton: "XyCeQKrx",
            circleButtonAvatar: "HfOiEY9W",
            activity: "BYWQkd_k",
            iconContainer: "ErRR3mNa",
            yiqing: "uinSBlGs",
            fifaworldcup: "dtjsnm_W",
            vsTransMode: "tBOngNBR",
            fifaSearch: "pBG0RldU",
            iconSvg: "lG5TmBA_",
            text: "ck1_UmL3",
            imageBadge: "Zqqn054W",
            circleButtonNoTextImageBadge: "KdFLVILi",
            circleButtonWithTextImageBadge: "PRw67Cxk",
            transparent: "KakDUzX5",
            dropdownContainer: "hipNfQvh",
            active: "OLBujdZM",
            shadowChange: "UyPtgm0l",
            overflowChange: "vaPb40TJ",
            dropDownListInCenterChange: "iL8wmqWL",
            textLinkALink: "F_Jaoez_",
            conversationDtailAnimationKeyframes: "dVesF2gU",
            dropDownListInNoCenterChange: "wZr_ore7",
            showDeleteAllMessageModal: "Pjo5kCGk",
            dropDownListInNoCenterLeftTopChange: "d9lHvYy5",
            dropDownListOutChange: "ipS33FS1"
        }
          , d = t(70335)
          , v = t.n(d)
          , f = t(21632)
          , _ = t(94)
          , E = t(7736)
          , p = t(65371)
          , m = t(88263)
          , h = t(85248)
          , I = t(85653)
          , g = t(70675);
        function S(e) {
            var n, t, r, i, s, l, d, f = e.className, h = e.avatarUrl, S = e.text, O = e.avatarHeight, N = e.avatarWidth, T = e.badge, M = e.badgeText, C = e.onMouseEnter, L = e.onMouseLeave, y = e.onMouseOver, k = e.onMouseOut, R = e.onClick, w = e.viewBox, A = e.activityName, Z = e.badgeIconSvg, b = e.badgeIconHeight, P = e.badgeIconWidth, U = e.badgeIconViewbox, D = e.headerPopupName, G = e.circleButtonContainerClassName, x = e.children, F = e.svgContainerClassName, V = e.showBadge, H = void 0 !== V && V, W = e.url, B = e.downloadAttr, Y = e.target, j = e.icon, K = e.iconHeight, J = e.iconWidth;
            j = null !== (n = j) && void 0 !== n ? n : h,
            J = null !== (t = J) && void 0 !== t ? t : N,
            K = null !== (r = K) && void 0 !== r ? r : O;
            var q = (0,
            p.P)({
                delayShow: 100
            })
              , z = (q.type,
            q.changeType);
            (0,
            u.useEffect)((function() {
                var e = m.listen(m.EVENT.showHeaderPopUp, (function(e) {
                    D === e.type && !1 === e.isShow && z()
                }
                ));
                return function() {
                    return e()
                }
            }
            ), [D]);
            var X = (0,
            u.useMemo)((function() {
                var e;
                return u.createElement(_.Z, {
                    src: j,
                    width: J,
                    height: K,
                    viewBox: w || o()(e = "0 0 ".concat(J, " ")).call(e, K),
                    className: c.iconSvg
                })
            }
            ), [j, J, K, w])
              , Q = (0,
            I.Z)().specTheme;
            return u.createElement("div", {
                className: v()(c.circleButtonWrapper, G),
                onMouseEnter: function(e) {
                    null == C || C(e)
                },
                onMouseLeave: function(e) {
                    null == L || L(e)
                },
                onMouseOver: function(e) {
                    null == y || y(e)
                },
                onMouseOut: function(e) {
                    null == k || k(e)
                }
            }, W && u.createElement(g.a, {
                href: W,
                download: B,
                target: Y,
                onClick: R,
                className: v()(c.circleButton, c.circleButtonWithText, (i = {
                    isDark: Boolean(A)
                },
                (0,
                a.Z)(i, c.activity, Boolean(A)),
                (0,
                a.Z)(i, null == c ? void 0 : c[A], A),
                i), f)
            }, u.createElement("div", {
                className: c.iconContainer
            }, X), u.createElement("p", {
                className: c.text
            }, S)), !W && u.createElement("div", {
                onClick: R,
                className: v()(c.circleButton, c.circleButtonWithText, (s = {
                    isDark: Boolean(A)
                },
                (0,
                a.Z)(s, c.activity, Boolean(A)),
                (0,
                a.Z)(s, null == c ? void 0 : c[A], A),
                s), f),
                "data-e2e": "something-button"
            }, u.createElement("div", {
                className: c.iconContainer
            }, X), u.createElement("p", {
                className: c.text
            }, S)), H && ("text" === T || "round" === T) && u.createElement(E.C, {
                className: v()((l = {},
                (0,
                a.Z)(l, c.textBadge, "text" === T),
                (0,
                a.Z)(l, c.roundBadge, "round" === T),
                (0,
                a.Z)(l, c.circleButtonWithTextRoundBadge, "round" === T),
                l)),
                type: T,
                text: "text" === T ? M || S : ""
            }), H && "image" === T && u.createElement("div", {
                className: v()(c.imageBadge, F, c.circleButtonWithTextImageBadge, (0,
                a.Z)({}, c.transparent, null == Q ? void 0 : Q.themeSwitch))
            }, u.createElement(_.Z, {
                src: Z,
                width: P,
                height: b,
                viewBox: U || o()(d = "0 0 ".concat(P, " ")).call(d, b)
            })), x)
        }
        var O = (0,
        u.memo)((function e(n) {
            var t = n.type
              , i = n.className
              , o = n.trigger
              , s = n.items
              , d = n.onMouseEnter
              , _ = n.onMouseLeave
              , E = n.onMouseOver
              , I = n.onMouseOut
              , g = n.children
              , O = n.itemsContainerClassName
              , N = n.headerPopupName
              , T = (0,
            p.P)({
                delayDisappear: 200,
                delayShow: 100
            })
              , M = T.type
              , C = T.changeType
              , L = (0,
            u.useCallback)((function(e) {
                "hover" === o && C("active"),
                null == d || d(e)
            }
            ), [o, d, C])
              , y = (0,
            u.useCallback)((function(e) {
                "hover" === o && C(),
                null == _ || _(e)
            }
            ), [o, _, C])
              , k = (0,
            u.useCallback)((function(e) {
                return null == E ? void 0 : E(e)
            }
            ), [E])
              , R = (0,
            u.useCallback)((function(e) {
                return null == I ? void 0 : I(e)
            }
            ), [I])
              , w = (0,
            u.useMemo)((function() {
                var n;
                return "hover" === o && s && s.length ? u.createElement("div", {
                    className: v()(c.dropdownContainer, (n = {},
                    (0,
                    a.Z)(n, c.active, Boolean(M)),
                    (0,
                    a.Z)(n, O, Boolean(M && O !== undefined)),
                    n))
                }, u.createElement("ul", {
                    "data-e2e": "cooperate-list"
                }, l()(s).call(s, (function(n) {
                    return u.createElement("li", {
                        key: n.key || n.text
                    }, u.createElement(e, n))
                }
                )))) : []
            }
            ), [s, o, M, O]);
            (0,
            u.useEffect)((function() {
                return N && m.listen(m.EVENT.showHeaderPopUp, (function(e) {
                    "active" === M && e.type !== N && e.isShow && C("", !0)
                }
                ))
            }
            ), [C, M, N]);
            var A = (0,
            h.Z)(M);
            return (0,
            u.useEffect)((function() {
                A !== M && N && m.emit(m.EVENT.showHeaderPopUp, {
                    type: N,
                    isShow: Boolean(M)
                })
            }
            ), [M, N, A]),
            u.createElement(u.Fragment, null, "textLink" !== t && u.createElement(S, (0,
            r.Z)((0,
            r.Z)({}, n), {}, {
                className: i,
                onMouseEnter: L,
                onMouseLeave: y,
                onMouseOver: k,
                onMouseOut: R
            }), w, g), "textLink" === t && u.createElement("div", null, u.createElement(f.h, (0,
            r.Z)((0,
            r.Z)({}, n), {}, {
                className: i,
                onMouseEnter: L,
                onMouseLeave: y,
                onMouseOver: k,
                onMouseOut: R,
                aLinkStyle: c.textLinkALink
            }), w, g)))
        }
        ))
    },
    21632: function(e, n, t) {
        t.d(n, {
            h: function() {
                return m
            },
            j: function() {
                return M
            }
        });
        var r = t(85116)
          , a = t(46040)
          , i = t(70355)
          , o = t.n(i)
          , s = t(21528)
          , l = t(29900)
          , u = t(98675)
          , c = t(27450)
          , d = t(98332)
          , v = t(70675)
          , f = {
            hoverBold: "bhpixfNG",
            aLinkWrapper: "OMlv_Xup",
            badge: "QIJri12p",
            activity: "qm891520",
            yiqing: "em_MU33U",
            fifaworldcup: "qFQcjozW",
            fifaSearch: "o2ovxcMr",
            vsTransMode: "oTbgb08Q",
            childrenContainer: "nkKKNGny"
        }
          , _ = t(70335)
          , E = t.n(_)
          , p = t(7736);
        function m(e) {
            var n, i = e.className, d = e.onClick, _ = e.isLogin, m = e.url, h = e.text, I = e.clickToLogin, g = e.loginSuccess, S = e.onMouseEnter, O = e.onMouseLeave, N = e.onMouseOver, T = e.onMouseOut, M = e.loginHeaderText, C = e.jumpAfterLogin, L = e.loginEventParams, y = e.badge, k = e.activityName, R = e.aLinkStyle, w = e.children, A = e.childrenContainerClassName, Z = e.downloadAttr, b = e.target, P = (0,
            s.useState)(!0), U = (0,
            a.Z)(P, 2), D = U[0], G = U[1], x = function(e) {
                var n, r, a = null == d ? void 0 : d(e);
                I && !1 === _ && (t.e(224).then(t.bind(t, 50224)).then((function(e) {
                    var n, t, r;
                    (0,
                    e.navShowAccount)({
                        success: function() {
                            C && window.open(m, "_blank"),
                            null == g || g()
                        },
                        enterMethod: "navigation_bar",
                        next: o()(n = "".concat(null == l ? void 0 : u.tJ)).call(n, null === (t = window) || void 0 === t || null === (r = t.location) || void 0 === r ? void 0 : r.host),
                        headerText: M,
                        teaEvtParams: L
                    })
                }
                )),
                null == e || null === (r = e.preventDefault) || void 0 === r || r.call(e));
                return !m && (null == e || null === (n = e.preventDefault) || void 0 === n || n.call(e)),
                a
            };
            return s.createElement("div", {
                onMouseEnter: function(e) {
                    null == S || S(e)
                },
                onMouseLeave: function(e) {
                    null == O || O(e)
                },
                onMouseOver: function(e) {
                    G(!1),
                    null == N || N(e)
                },
                onMouseOut: function(e) {
                    null == T || T(e)
                },
                className: E()(f.aLinkWrapper, f.hoverBold, i, (n = {
                    isDark: Boolean(k)
                },
                (0,
                r.Z)(n, f.activity, Boolean(k)),
                (0,
                r.Z)(n, null == f ? void 0 : f[k], k),
                n))
            }, m ? s.createElement(v.a, {
                target: b || "_blank",
                rel: "noopener noreferrer".concat(c.P(h)),
                href: m,
                onClick: x,
                className: R,
                download: Z,
                "data-e2e": "alink-item"
            }, h) : s.createElement("span", {
                className: R,
                onClick: x
            }, h), D && ("round" === y || "text" === y) && s.createElement(p.C, {
                className: f.badge,
                type: y
            }), s.createElement("div", {
                className: E()(f.childrenContainer, A)
            }, w))
        }
        var h = {
            key: "doubi_recharge",
            text: "\u6296\u5e01\u5145\u503c",
            url: "//".concat(d.HOME_DOMAIN, "/falcon/webcast_openpc/pages/douyin_recharge/index.html")
        }
          , I = {
            key: "streaming_tool",
            text: "\u76f4\u64ad\u4f34\u4fa3",
            url: "//".concat(d.HOME_DOMAIN, "/falcon/webcast_openpc/pages/streamingtool_download/index.html"),
            clickToLogin: !0,
            jumpAfterLogin: !0,
            loginHeaderText: "\u767b\u5f55\u540e\u5373\u53ef\u67e5\u770b\u201c\u76f4\u64ad\u4f34\u4fa3\u201d"
        }
          , g = {
            key: "creator",
            text: "\u521b\u4f5c\u8005\u670d\u52a1",
            url: "//".concat(d.CREATOR_DOMAIN)
        }
          , S = {
            key: "rule",
            text: "\u89c4\u5219\u4e2d\u5fc3",
            url: "//".concat(d.HOME_DOMAIN, "/rule")
        }
          , O = {
            key: "aboutDouyin",
            text: "\u5173\u4e8e\u6296\u97f3",
            url: "//".concat(d.HOME_DOMAIN, "/home")
        }
          , N = {
            key: "platform",
            text: "\u6296\u97f3\u5f00\u653e\u5e73\u53f0",
            url: "//".concat(d.OPRNPLATFORM_DOMAIN)
        }
          , T = {
            key: "certification",
            text: "\u8ba4\u8bc1\u4e0e\u5408\u4f5c",
            url: "//".concat(d.HOME_DOMAIN, "/certification/#certification")
        }
          , M = {
            recharge: h,
            homepage: {
                key: "personal_panel",
                text: "\u4e2a\u4eba\u4e3b\u9875",
                clickToLogin: !0,
                loginHeaderText: "\u767b\u5f55\u540e\u5373\u53ef\u67e5\u770b\u201c\u4e2a\u4eba\u4e3b\u9875\u201d"
            },
            liveMate: I,
            logout: {
                key: "logout",
                text: "\u9000\u51fa\u767b\u5f55"
            },
            creator: g,
            rule: S,
            aboutDouyin: O,
            marketing: {
                key: "marketing",
                text: "\u5e7f\u544a\u6295\u653e",
                url: "//".concat(d.OCEAN_ENGINE_DOMAIN, "/resource/douyin?source=douyin-pc")
            },
            ecommerce: {
                text: "\u6296\u97f3\u7535\u5546",
                url: "//".concat(d.DOUYIN_EC_DOMAIN, "/"),
                key: "ecommerce"
            },
            certification: T,
            platform: N,
            publish: {
                key: "publish",
                text: "\u53d1\u5e03\u89c6\u9891",
                url: "//".concat(d.CREATOR_DOMAIN, "/creator-micro/content/upload")
            },
            videoManage: {
                key: "videoManage",
                text: "\u89c6\u9891\u7ba1\u7406",
                url: "//".concat(d.CREATOR_DOMAIN, "/creator-micro/content/manage")
            },
            postStatistics: {
                key: "postStatistics",
                text: "\u4f5c\u54c1\u6570\u636e",
                url: "//".concat(d.CREATOR_DOMAIN, "/creator-micro/data/stats/overview")
            },
            creatorSchool: {
                key: "creatorSchool",
                text: "\u521b\u4f5c\u8005\u5b66\u4e60\u4e2d\u5fc3",
                url: "//".concat(d.CREATOR_DOMAIN, "/creator-school")
            },
            backToHome: {
                key: "backToHome",
                text: "\u8fd4\u56de\u63a8\u8350\u9875",
                url: "//".concat(d.HOME_DOMAIN)
            },
            cooperation: {
                key: "cooperation",
                text: "\u5408\u4f5c"
            },
            downloadClient: {
                key: "downloadClient",
                text: "\u4e0b\u8f7d\u5ba2\u6237\u7aef"
            },
            collectionGuide: {
                key: "collectionDouyin",
                text: "\u6536\u85cf\u7f51\u9875"
            },
            liveData: {
                key: "livedata",
                text: "\u76f4\u64ad\u6570\u636e",
                url: "//".concat(d.HOME_DOMAIN, "/live/data")
            }
        }
    },
    85653: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return _
            }
        });
        var r = t(22545)
          , a = t(46040)
          , i = t(44742)
          , o = t.n(i)
          , s = t(21528)
          , l = t(39027)
          , u = t(88263)
          , c = t(69632)
          , d = t(88969)
          , v = t(9220)
          , f = t(19085);
        function _() {
            var e = s.useState(null)
              , n = (0,
            a.Z)(e, 2)
              , t = n[0]
              , i = n[1]
              , _ = (0,
            s.useState)(!0)
              , E = (0,
            a.Z)(_, 2)
              , p = E[0]
              , m = E[1];
            return (0,
            s.useEffect)((function() {
                var e = function() {
                    var e = l.Q.getItem({
                        sKey: f.CookieKeys.Theme
                    }) !== f.ThemeValues.Light;
                    m(e)
                };
                if (e(),
                u.listen(u.EVENT.changeTheme, (function(e) {
                    var n = e.theme;
                    return m(n === f.ThemeValues.Dark)
                }
                )),
                (0,
                r.Z)(o().mark((function e() {
                    var n;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                c.U2({
                                    key: d.TccKey.SpecTheme,
                                    defaultValue: d.TCC_DEFAULT_VALUE_MAP.get(d.TccKey.SpecTheme)
                                });
                            case 2:
                                n = e.sent,
                                i(n);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))(),
                v.DT())
                    return document.addEventListener("visibilitychange", e),
                    function() {
                        document.removeEventListener("visibilitychange", e)
                    }
            }
            ), []),
            {
                specTheme: t,
                isDark: p
            }
        }
    },
    55042: function(e, n, t) {
        t.d(n, {
            yw: function() {
                return N
            },
            vA: function() {
                return T
            }
        });
        var r = t(21993)
          , a = t(937)
          , i = t(46040)
          , o = t(51235)
          , s = t.n(o)
          , l = t(21528)
          , u = t(70335)
          , c = t.n(u)
          , d = t(88263)
          , v = t(73824)
          , f = t(53549)
          , _ = t(84319)
          , E = t(21144)
          , p = t(66870)
          , m = t(65079)
          , h = t(36626)
          , I = t(98821)
          , g = (0,
        I.default)({
            resolved: {},
            chunkName: function() {
                return "ImEntry"
            },
            isReady: function(e) {
                var n = this.resolve(e);
                return !0 === this.resolved[n] && !!t.m[n]
            },
            importAsync: function() {
                return Promise.all([t.e(920), t.e(5230), t.e(4011), t.e(1193), t.e(6872), t.e(483), t.e(6780)]).then(t.bind(t, 38686))
            },
            requireAsync: function(e) {
                var n = this
                  , t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then((function(e) {
                    return n.resolved[t] = !0,
                    e
                }
                ))
            },
            requireSync: function e(n) {
                var r = this.resolve(n);
                return t(r)
            },
            resolve: function e() {
                return 38686
            }
        }, {
            ssr: !1
        })
          , S = (0,
        I.default)({
            resolved: {},
            chunkName: function() {
                return "ShareContent"
            },
            isReady: function(e) {
                var n = this.resolve(e);
                return !0 === this.resolved[n] && !!t.m[n]
            },
            importAsync: function() {
                return t.e(5269).then(t.bind(t, 6637))
            },
            requireAsync: function(e) {
                var n = this
                  , t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then((function(e) {
                    return n.resolved[t] = !0,
                    e
                }
                ))
            },
            requireSync: function e(n) {
                var r = this.resolve(n);
                return t(r)
            },
            resolve: function e() {
                return 6637
            }
        }, {
            ssr: !1
        })
          , O = (0,
        I.default)({
            resolved: {},
            chunkName: function() {
                return "ShareContent"
            },
            isReady: function(e) {
                var n = this.resolve(e);
                return !0 === this.resolved[n] && !!t.m[n]
            },
            importAsync: function() {
                return t.e(5269).then(t.bind(t, 77376))
            },
            requireAsync: function(e) {
                var n = this
                  , t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then((function(e) {
                    return n.resolved[t] = !0,
                    e
                }
                ))
            },
            requireSync: function e(n) {
                var r = this.resolve(n);
                return t(r)
            },
            resolve: function e() {
                return 77376
            }
        }, {
            ssr: !1
        })
          , N = {
            Video: "share_video",
            Live: "share_live",
            User: "share_user",
            Vs: "share_vs"
        }
          , T = {
            VideoPage: "VideoPage",
            UserPage: "UserPage"
        }
          , M = function(e) {
            var n, t = e.className, o = e.awemeInfo, u = e.hidden, I = e.awemelogPb, M = e.isLogin, C = e.handleClose, L = e.toast, y = e.reportExtraParams, k = void 0 === y ? {} : y, R = e.shareShowMethod, w = e.onMouseEnter, A = e.onMouseLeave, Z = (e.handleClickCopy,
            e.handleChooseFriend), b = e.handleShareToFriend, P = e.handleShareSuccess, U = e.shareType, D = void 0 === U ? N.Video : U, G = e.uid, x = e.userInfo, F = e.inanyPage, V = void 0 === F ? T.VideoPage : F, H = e.loginDispatch, W = (0,
            l.useState)(!1), B = (0,
            i.Z)(W, 2), Y = B[0], j = B[1], K = (0,
            l.useState)(!1), J = (0,
            i.Z)(K, 2), q = J[0], z = J[1], X = (0,
            l.useState)(!1), Q = (0,
            i.Z)(X, 2), $ = Q[0], ee = Q[1], ne = (0,
            l.useState)(!1), te = (0,
            i.Z)(ne, 2), re = te[0], ae = te[1], ie = (0,
            l.useRef)(null), oe = (0,
            l.useRef)(null), se = d, le = se.EVENT, ue = (0,
            l.useState)(!u), ce = (0,
            i.Z)(ue, 2), de = ce[0], ve = ce[1], fe = (0,
            l.useRef)(!u), _e = (0,
            l.useMemo)((function() {
                return !(q && !$) && u
            }
            ), [u, q, $]);
            return (0,
            l.useEffect)((function() {
                u || ee(!1)
            }
            ), [u]),
            (0,
            l.useEffect)((function() {
                u || (ve(!0),
                se.emit(le.videoStopPlayNext)),
                u && de && se.emit(le.videoRemoveStopPlayNext),
                fe.current = !u
            }
            ), [u]),
            (0,
            l.useEffect)((function() {
                return function() {
                    fe.current && se.emit(le.videoRemoveStopPlayNext)
                }
            }
            ), []),
            (0,
            l.useEffect)((function() {
                var e;
                !u && o && m.Z.sendLog("shareMenuShow", (0,
                a.Z)({
                    urlParamList: ["previous_page"],
                    author_id: null == o || null === (e = o.authorInfo) || void 0 === e ? void 0 : e.uid,
                    group_id: null == o ? void 0 : o.awemeId,
                    enter_from: v.mo(),
                    log_pb: I,
                    is_full_screen: f.r() ? "1" : "0",
                    tab_name: _.getTabName() || E.Rs("tab_name") || "",
                    click_method: R,
                    share_type: "video"
                }, k));
                !u && x && m.Z.sendLog("shareMenuShow", {
                    enter_from: v.vM(),
                    share_type: "user",
                    click_method: R
                }),
                u || Y || j(!0)
            }
            ), [u, R]),
            (0,
            l.useEffect)((function() {
                var e, n = function(e) {
                    return e.stopPropagation()
                };
                return null === (e = ie.current) || void 0 === e || e.addEventListener("wheel", n),
                function() {
                    var e;
                    null === (e = ie.current) || void 0 === e || e.removeEventListener("wheel", n)
                }
            }
            ), []),
            (0,
            l.useEffect)((function() {
                s()((function() {
                    var e;
                    if (!u && null != oe && null !== (e = oe.current) && void 0 !== e && e.clientHeight) {
                        ae(oe.current.clientHeight - 61 < 204)
                    }
                }
                ), 0)
            }
            ), [u, q]),
            (0,
            l.useEffect)((function() {
                o && (o.logPb = I)
            }
            ), [o]),
            (0,
            l.useEffect)((function() {
                var e = function(e) {
                    var n, t;
                    null !== (n = ie.current) && void 0 !== n && null !== (t = n.contains) && void 0 !== t && t.call(n, e.target) || q || null == C || C()
                };
                return document.addEventListener("click", e, !0),
                function() {
                    document.removeEventListener("click", e, !0)
                }
            }
            ), [q]),
            !1 === (null == o || null === (n = o.status) || void 0 === n ? void 0 : n.allowShare) ? l.createElement("div", {
                ref: ie,
                "data-e2e": o ? "video-share-container" : "user-share-container"
            }, l.createElement("div", {
                className: c()(t, h.Z.container, h.Z.shareCode, h.Z.columnContainer, h.Z.disabledContent),
                onMouseEnter: function() {
                    return null == w ? void 0 : w()
                },
                onMouseLeave: function() {
                    return null == A ? void 0 : A()
                },
                style: {
                    display: _e ? "none" : "flex"
                },
                "data-inuser": V === T.UserPage,
                ref: oe
            }, "\u8be5\u4f5c\u54c1\u5df2\u88ab\u9650\u5236\u5206\u4eab")) : l.createElement("div", {
                ref: ie,
                "data-e2e": o ? "video-share-container" : "user-share-container"
            }, (null == o ? void 0 : o.awemeType) === p.ed.XgVideo && l.createElement("div", {
                className: c()(t, h.Z.container, h.Z.shareCode, h.Z.defaultContainer),
                onMouseEnter: function() {
                    return null == w ? void 0 : w()
                },
                onMouseLeave: function() {
                    return null == A ? void 0 : A()
                },
                style: {
                    display: _e ? "none" : "flex"
                },
                "data-inuser": V === T.UserPage
            }, (!u || Y) && l.createElement(l.Fragment, null, l.createElement("div", {
                style: {
                    display: q || $ ? "none" : "block",
                    width: "100%"
                }
            }, l.createElement(S, (0,
            r.Z)({}, e, {
                shareType: D
            })))), M && (!u || q) && ((null == o ? void 0 : o.awemeType) !== p.ed.XgVideo || G) && D !== N.Vs && l.createElement(g, {
                toast: L,
                close: function() {
                    ee(!0),
                    z(!1),
                    null == C || C(),
                    d.emit(d.EVENT.videoRemoveStopPlayNext)
                },
                awemeInfo: o,
                shareType: D,
                shareUserInfo: x,
                handleExpand: function() {
                    return z(!0)
                },
                handleCollapse: function() {
                    z(!1)
                },
                handleHasFriends: function(e) {},
                handleChooseFriend: Z,
                handleShareToFriend: b,
                handleShareSuccess: P,
                reportExtraParams: (0,
                a.Z)((0,
                a.Z)({}, k), {}, {
                    from_xigua: (null == o ? void 0 : o.awemeType) === p.ed.XgVideo ? 1 : 0
                })
            })), (null == o ? void 0 : o.awemeType) !== p.ed.XgVideo && l.createElement("div", {
                className: c()(t, h.Z.container, h.Z.shareCode, h.Z.columnContainer),
                onMouseEnter: function() {
                    return null == w ? void 0 : w()
                },
                onMouseLeave: function() {
                    return null == A ? void 0 : A()
                },
                style: {
                    display: _e ? "none" : "flex"
                },
                "data-inuser": V === T.UserPage,
                ref: oe
            }, (!u || q) && ((null == o ? void 0 : o.awemeType) !== p.ed.XgVideo || G) && D !== N.Vs && (M ? l.createElement(g, {
                toast: L,
                close: function() {
                    ee(!0),
                    z(!1),
                    null == C || C(),
                    d.emit(d.EVENT.videoRemoveStopPlayNext)
                },
                awemeInfo: o,
                shareType: D,
                shareUserInfo: x,
                handleExpand: function() {
                    return z(!0)
                },
                handleCollapse: function() {
                    z(!1)
                },
                handleHasFriends: function(e) {},
                handleChooseFriend: Z,
                handleShareToFriend: b,
                handleShareSuccess: P,
                reportExtraParams: (0,
                a.Z)((0,
                a.Z)({}, k), {}, {
                    from_xigua: (null == o ? void 0 : o.awemeType) === p.ed.XgVideo ? 1 : 0
                })
            }) : l.createElement(O, {
                change: function() {
                    null == H || H({
                        type: "updateUserInfo"
                    })
                }
            })), (!u || Y) && l.createElement(l.Fragment, null, l.createElement("div", {
                style: {
                    display: q || $ ? "none" : "block",
                    width: "100%"
                }
            }, l.createElement(S, (0,
            r.Z)({}, e, {
                shareType: D,
                isMiniQrCode: re
            }))))))
        };
        n.ZP = M
    },
    65079: function(e, n, t) {
        t.d(n, {
            h: function() {
                return a
            }
        });
        var r = t(74269)
          , a = "web_code_link";
        n.Z = new r.hD({
            shareMenuShow: {
                eventName: "share_menu_show",
                params: {
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    previous_page: "",
                    is_full_screen: "0",
                    tab_name: "",
                    click_method: "",
                    share_type: ""
                }
            },
            shareVideo: {
                eventName: "share_video",
                params: {
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    previous_page: "",
                    type: "",
                    is_full_screen: "0",
                    click_method: "",
                    tab_name: "",
                    from_follow_list: "0",
                    from_xigua: 0,
                    aweme_type: "",
                    personal_relation: "",
                    relation: ""
                }
            },
            shareUser: {
                eventName: "share_user",
                params: {
                    chat_type: "",
                    type: "",
                    author_id: "",
                    personal_relation: "",
                    relation: ""
                }
            },
            clickFavoriteVideo: {
                eventName: "click_favorite_video",
                params: {
                    click_from: "share_board",
                    previous_page: "",
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    is_full_screen: "0",
                    click_method: ""
                }
            },
            clickCancelFavoriteVideo: {
                eventName: "click_cancel_favorite_video",
                params: {
                    click_from: "share_board",
                    previous_page: "",
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    is_full_screen: "0"
                }
            },
            favoriteVideo: {
                eventName: "favorite_video",
                params: {
                    click_from: "share_board",
                    previous_page: "",
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    is_full_screen: "0",
                    click_method: "",
                    clarity: "",
                    aweme_type: ""
                }
            },
            favoriteVideoFailed: {
                eventName: "favorite_video_failed",
                params: {
                    click_from: "share_board",
                    err_code: 1,
                    previous_page: "",
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    is_full_screen: "0"
                }
            },
            cancelFavoriteVideo: {
                eventName: "cancel_favorite_video",
                params: {
                    click_from: "share_board",
                    previous_page: "",
                    author_id: "",
                    group_id: "",
                    log_pb: "",
                    enter_from: "",
                    is_full_screen: "0",
                    click_method: ""
                }
            }
        })
    },
    31256: function(e, n, t) {
        t.d(n, {
            C: function() {
                return d
            },
            Z: function() {
                return v
            }
        });
        var r = t(85116)
          , a = t(21528)
          , i = "vmH984eb"
          , o = "wVKw9Ojr"
          , s = t(69509)
          , l = t(70335)
          , u = t.n(l)
          , c = t(47999)
          , d = (0,
        s.f3)("imStore")((0,
        s.Pi)((function(e) {
            var n = e.num
              , t = e.className
              , s = e.maxNum
              , l = void 0 === s ? 99 : s;
            return n ? a.createElement("div", {
                className: u()(i, t, (0,
                r.Z)({}, o, c.un()))
            }, n > l ? "".concat(l, "+") : n) : null
        }
        )))
          , v = d
    },
    28025: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return C
            }
        });
        var r = t(21528)
          , a = "B5nTXsAM"
          , i = "A9hJb7O7"
          , o = "BHkZOfBo"
          , s = t(94)
          , l = t(69509)
          , u = t(70335)
          , c = t.n(u)
          , d = t(20822)
          , v = t(90734)
          , f = t(64296)
          , _ = t(83009)
          , E = t.n(_)
          , p = t(57873)
          , m = t(96146)
          , h = t(8642)
          , I = d.m.ConversationType
          , g = I.GROUP_CHAT;
        I.ONE_TO_ONE_CHAT;
        function S(e) {
            var n = "";
            if (!e)
                return n;
            var t = e.type
              , r = (e.visible,
            e.isFromMe)
              , a = (e.content,
            e.sender)
              , i = e.conversationId
              , o = e.conversationType
              , s = e.isRecalled
              , l = (p.Z.unSendMsgConversationMap,
            p.Z.userInfoFromSdkMap)
              , u = p.Z.userInfoFromServerMap
              , c = [m.pp.GROUP_NOTICE_MESSAGE, m.pp.GROUP_GREET_MESSAGE, m.pp.GROUP_ANNOUNCEMENT_MESSAGE];
            if (o === g && !E()(c).call(c, t) || s && !r) {
                var d, v = null == l || null === (d = l[i]) || void 0 === d ? void 0 : d[a], f = null == u ? void 0 : u[a], _ = (null == f ? void 0 : f.remark_name) || (null == v ? void 0 : v.alias) || (null == f ? void 0 : f.nickname) || "";
                n = s ? "\u201c".concat(_, "\u201d") : "".concat(_, "\uff1a")
            }
            return n
        }
        function O(e) {
            var n, t = "";
            if (!e)
                return t;
            e.type,
            e.visible,
            e.isFromMe,
            e.content;
            var r = e.sender
              , a = e.conversationId
              , i = (e.conversationType,
            e.isRecalled)
              , o = (p.Z.unSendMsgConversationMap,
            p.Z.userInfoFromSdkMap)
              , s = p.Z.userInfoFromServerMap
              , l = null == o || null === (n = o[a]) || void 0 === n ? void 0 : n[r]
              , u = null == s ? void 0 : s[r]
              , c = (null == u ? void 0 : u.remark_name) || (null == l ? void 0 : l.alias) || (null == u ? void 0 : u.nickname) || "";
            return t = i ? "\u201c".concat(c, "\u201d") : "".concat(c, "\uff1a")
        }
        var N = t(15738)
          , T = d.m.ConversationType.ONE_TO_ONE_CHAT
          , M = (0,
        l.f3)("imStore")((0,
        l.Pi)((function(e) {
            var n, t, l = e.imStore, u = e.className, d = e.converSation, _ = e.lastMessage, E = e.ext, m = e.flightStatus, I = e.participantType, g = void 0 === I ? f.tQ.REGULAR : I, M = e.showDraft, C = void 0 === M || M, L = e.isNeedFilterDraftMessage, y = void 0 !== L && L, k = (d || {}).id, R = l.unSendMsgConversationMap, w = l.userInfoFromServerMap, A = l.userInfoFromSdkMap, Z = null == R ? void 0 : R[k], b = _ || {}, P = (b.visible,
            b.isFromMe,
            b.content,
            b.sender), U = b.conversationId, D = (b.conversationType,
            m === v.b3.Failed || m === v.b3.Rejected), G = null == A || null === (n = A[U]) || void 0 === n ? void 0 : n[P], x = null == w ? void 0 : w[P];
            if (!_ && (null == d ? void 0 : d.type) === T) {
                var F = (d || {}).toParticipantUserId;
                t = null == w ? void 0 : w[F]
            }
            var V = (0,
            r.useMemo)((function() {
                return function(e) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : f.tQ.REGULAR
                      , t = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2]
                      , r = arguments.length > 3 && arguments[3] !== undefined && arguments[3]
                      , a = e || {}
                      , i = (a.id,
                    a.lastMessage)
                      , o = a.toParticipantUserId;
                    if (!i) {
                        var s = p.Z.userInfoFromServerMap
                          , l = (null == s ? void 0 : s[o]) || {}
                          , u = (null == l ? void 0 : l.remark_name) || (null == l ? void 0 : l.nickname) || o || ""
                          , c = u ? "\u548c\u201c".concat(u, "\u201d") : "";
                        return "".concat(c, "\u6253\u4e2a\u62db\u547c\u5427")
                    }
                    i.type,
                    i.visible,
                    i.isFromMe,
                    i.content,
                    i.sender;
                    var d = i.conversationId
                      , _ = (i.conversationType,
                    i.flightStatus)
                      , E = p.Z.unSendMsgConversationMap
                      , m = (p.Z.userInfoFromSdkMap,
                    p.Z.userInfoFromServerMap,
                    "");
                    _ !== v.b3.Succeeded && _ !== v.b3.Received || (m = "\u5df2\u9001\u8fbe");
                    var I = E[d]
                      , g = "";
                    if (I && t && !r)
                        return "[\u8349\u7a3f]".concat(I.text);
                    g = (0,
                    h.gc)(i);
                    var N = "";
                    n === f.tQ.STRANGER ? N = O(i) : n === f.tQ.REGULAR && (N = S(i));
                    var T = "";
                    return m && (T += "".concat(m, "\xb7")),
                    N && (T += N),
                    g && (T += g),
                    T || ""
                }(d, g, C, y)
            }
            ), [G, x, d, _, E, m, null == Z ? void 0 : Z.text, C, t]);
            return r.createElement("div", {
                className: c()(u, a)
            }, D && r.createElement(s.Z, {
                className: i,
                src: N.Z,
                viewBox: "0 0 14 14"
            }), r.createElement("pre", {
                className: o
            }, V))
        }
        )))
          , C = M
    },
    64756: function(e, n, t) {
        t.d(n, {
            v: function() {
                return Y
            }
        });
        var r = t(85116)
          , a = t(46040)
          , i = t(70355)
          , o = t.n(i)
          , s = t(51235)
          , l = t.n(s)
          , u = t(83009)
          , c = t.n(u)
          , d = t(94454)
          , v = t.n(d)
          , f = t(21528)
          , _ = t(69509)
          , E = t(65371)
          , p = t(94)
          , m = t(29900)
          , h = t(98675)
          , I = t(39027)
          , g = t(54419)
          , S = t(30234)
          , O = t(88263)
          , N = t(73824)
          , T = t(70335)
          , M = t.n(T)
          , C = t(98821)
          , L = t(64790)
          , y = t(57864)
          , k = t(93988)
          , R = t(76953)
          , w = t(31256)
          , A = t(48070)
          , Z = t(87461)
          , b = t(9793)
          , P = t(19085)
          , U = t(20071)
          , D = t(55275)
          , G = t(6881)
          , x = t(9453)
          , F = (0,
        C.default)({
            resolved: {},
            chunkName: function() {
                return "PopDialog"
            },
            isReady: function(e) {
                var n = this.resolve(e);
                return !0 === this.resolved[n] && !!t.m[n]
            },
            importAsync: function() {
                return Promise.all([t.e(854), t.e(4357), t.e(640), t.e(4466), t.e(9654)]).then(t.bind(t, 60854))
            },
            requireAsync: function(e) {
                var n = this
                  , t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then((function(e) {
                    return n.resolved[t] = !0,
                    e
                }
                ))
            },
            requireSync: function e(n) {
                var r = this.resolve(n);
                return t(r)
            },
            resolve: function e() {
                return 60854
            }
        }, {
            resolveComponent: function(e) {
                return e.PopDialog
            },
            ssr: !1
        })
          , V = "dlg-active"
          , H = "dlb-login-guide-active"
          , W = "im"
          , B = f.forwardRef((function(e, n) {
            var t = e.hoverTimes
              , r = e.newHeaderIsNew
              , a = e.changeType
              , i = ("boolean" == typeof r ? r : 1 === t) ? "1" : "0";
            return f.createElement("div", {
                className: k.Z.imLoginGuidePanelWrapper
            }, f.createElement("div", {
                ref: n,
                className: k.Z.imLoginGuidePanel
            }, f.createElement("p", {
                className: k.Z.desc
            }, "\u767b\u5f55\u540e\u5373\u53ef\u67e5\u770b\u79c1\u4fe1\u6d88\u606f"), f.createElement("div", {
                className: k.Z.loginBtn,
                onClick: function() {
                    var e, n, t;
                    null == a || a("", !0),
                    (0,
                    Z.qA)({
                        success: function() {
                            window.location.reload()
                        },
                        headerText: "\u767b\u5f55\u540e\u5373\u53ef\u67e5\u770b\u79c1\u4fe1\u6d88\u606f",
                        next: o()(e = "".concat(null == m ? void 0 : h.tJ)).call(e, null === (n = window) || void 0 === n || null === (t = n.location) || void 0 === t ? void 0 : t.host),
                        enterMethod: "IM",
                        teaEvtParams: {
                            is_new: i,
                            is_guide: "1",
                            enter_method: "IM"
                        }
                    })
                }
            }, "\u7acb\u5373\u767b\u5f55")))
        }
        ))
          , Y = (0,
        _.f3)("imStore")((0,
        _.Pi)((function(e) {
            var n, t, i, o = e.isLogin, s = e.imStore, u = void 0 === s ? {} : s, d = e.abTestData, _ = e.customProps, m = u.allUnReadCount, h = u.curConversation, T = u.maskIsTestGroupClickConversionListItem, C = (0,
            x.Z)(o ? m : 0, 300), Z = (0,
            E.P)({
                delayDisappear: 200,
                delayShow: 100
            }), Y = Z.type, j = Z.changeType, K = Z.clearShowTimer, J = (0,
            f.useRef)(), q = I.Q.getItem({
                sKey: P.CookieKeys.DouyinWebHideImLoginGuide
            }), z = (0,
            f.useRef)(null), X = g.a.useClientInject(), Q = (0,
            a.Z)(X, 1)[0], $ = (0,
            f.useRef)(null), ee = (0,
            f.useState)(0), ne = (0,
            a.Z)(ee, 2), te = ne[0], re = ne[1], ae = S.ImPrivateMessagePanelOptimization, ie = ae.CloseMessageList, oe = ae.OpenMessageList, se = ae.Default, le = d.imPrivateMessagePanelOptimization === se;
            (0,
            f.useEffect)((function() {
                u.setAbTestData(d)
            }
            ), [d]),
            (0,
            f.useEffect)((function() {
                C > 0 && (0,
                L.Gb)("chat_notif_show", {
                    badge_num: C
                })
            }
            ), [C]);
            var ue = (0,
            f.useCallback)((function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                o ? (j(V),
                u.clearAllPushList(),
                O.emit(O.EVENT.showPushList, {
                    from: W,
                    isShow: !1
                }),
                O.emit(O.EVENT.showHeaderPopUp, {
                    type: W,
                    isShow: !0
                }),
                Y !== V && (e && u.setEnterConversation(e),
                (0,
                L.Gb)("chat_notif_hover", {
                    badge_num: C,
                    enter_method: e || u.enterConversation || "",
                    enter_from: N.vM() || ""
                }))) : (b.n.loginGuideShowed && b.n.destroy(),
                j(H),
                O.emit(O.EVENT.showHeaderPopUp, {
                    type: W,
                    isShow: !0
                }));
                var n = z.current;
                n && clearTimeout(n),
                z.current = null
            }
            ), [o, Y]);
            (0,
            f.useEffect)((function() {
                var e = O.listen(O.EVENT.sendImUserMsg, (function(e) {
                    var n = e.uid
                      , t = e.enterMethod;
                    n && (U.ImSdk.setCurConversation(),
                    u.setIsInStrangerConversationList(!1),
                    U.ImSdk.getConversationWithUid(n).then((function(e) {
                        e && (t && u.setEnterConversation(t),
                        U.ImSdk.setCurConversation(e),
                        ue(t))
                    }
                    )))
                }
                ))
                  , n = O.listen(O.EVENT.openImConversation, (function(e) {
                    var n = e.conversationId
                      , t = e.enterMethod;
                    if (n) {
                        U.ImSdk.setCurConversation(),
                        u.setIsInStrangerConversationList(!1);
                        var r = U.ImSdk.getConversationById(n);
                        r && (t && u.setEnterConversation(t),
                        U.ImSdk.setCurConversation(r),
                        ue(t))
                    }
                }
                ));
                return function() {
                    e(),
                    n()
                }
            }
            ), [ue]),
            (0,
            f.useEffect)((function() {
                Y === H && !o && (0,
                L.Gb)("im_login_notify", {
                    is_new: 0 === te ? "1" : "0"
                })
            }
            ), [Y]),
            (0,
            f.useEffect)((function() {
                u.setDlgShow(Y === V)
            }
            ), [Y]);
            var ce = (0,
            f.useCallback)((function() {
                var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                if (!Y)
                    return O.emit(O.EVENT.showPushList, {
                        from: W,
                        isShow: !0
                    }),
                    void K();
                j(undefined, !0 === e),
                re((function(e) {
                    return e + 1
                }
                ));
                var n = l()((function() {
                    le && (u.setCurConverSation(),
                    u.setIsInStrangerConversationList(!1)),
                    O.emit(O.EVENT.showPushList, {
                        from: W,
                        isShow: !0
                    })
                }
                ), 230);
                z.current = n
            }
            ), [Y]);
            (0,
            f.useEffect)((function() {
                return !Y && O.emit(O.EVENT.showHeaderPopUp, {
                    type: "im",
                    isShow: !1
                })
            }
            ), [Y]);
            var de = function(e) {
                (0,
                y.i)(e.target, (function(e) {
                    return "pushListBoxId" === (null == e ? void 0 : e.id)
                }
                )) || ue(G.QX.hover_icon)
            }
              , ve = function() {
                h || ($.current && clearTimeout($.current),
                d.imPrivateMessagePanelOptimization === S.ImPrivateMessagePanelOptimization.ShowBigImScreen ? $.current = l()((function() {
                    ce()
                }
                ), 2e3) : ce())
            };
            return (0,
            f.useEffect)((function() {
                var e = O.listen(O.EVENT.showHeaderPopUp, (function(e) {
                    var n = e || {}
                      , t = n.type
                      , r = n.isShow;
                    r && t !== W && !h && ce(!0),
                    !le && r && (t === W ? $.current && clearTimeout($.current) : ce(!0))
                }
                ));
                return function() {
                    return e()
                }
            }
            ), [h, ce]),
            (0,
            f.useEffect)((function() {
                var e = O.listen(O.EVENT.clickPush, (function(e) {
                    (e || {}).type === W && ue(G.QX.push)
                }
                ));
                return function() {
                    return e()
                }
            }
            ), [ue]),
            (0,
            f.useEffect)((function() {
                return function() {
                    $.current && clearTimeout($.current)
                }
            }
            ), []),
            (0,
            f.useEffect)((function() {
                var e;
                h && d.imPrivateMessagePanelOptimization !== se && (!T && c()(e = [ie, oe]).call(e, d.imPrivateMessagePanelOptimization) && u.setMaskIsTestGroupClickConversionListItem(!0),
                u.setSelectChatUserShortId(h.shortId))
            }
            ), [h]),
            f.createElement(f.Fragment, null, Q && f.createElement("div", {
                "data-e2e": "im-entry",
                onMouseEnter: de,
                onMouseLeave: ve
            }, f.createElement("div", {
                className: M()(k.Z.entryImg, (n = {},
                (0,
                r.Z)(n, k.Z.activity, null == _ ? void 0 : _.isActivity),
                (0,
                r.Z)(n, "isLight", null == _ ? void 0 : _.isActivity),
                (0,
                r.Z)(n, null === k.Z || void 0 === k.Z ? void 0 : k.Z[null == _ ? void 0 : _.activityName], null == _ ? void 0 : _.activityName),
                n))
            }, f.createElement(p.Z, {
                src: R.Z,
                width: 15,
                height: 15,
                viewBox: "0 0 16 16"
            })), f.createElement("div", {
                className: M()(k.Z.popNum, {
                    isLight: null == _ ? void 0 : _.isActivity
                })
            }, f.createElement(w.C, {
                className: M()(k.Z.PopStyle, (t = {},
                (0,
                r.Z)(t, k.Z.digitsNumberPop, C < 10),
                (0,
                r.Z)(t, k.Z.numberPoint, C >= 10),
                t)),
                num: C
            })), Y === H ? f.createElement(B, {
                ref: J,
                hoverTimes: q ? v()(q) : 0,
                changeType: j
            }) : Y === V ? f.createElement(F, {
                closeFn: ce,
                customProps: _
            }) : null, f.createElement(A.Z, null)), !Q && f.createElement("div", {
                "data-e2e": "im-entry",
                className: k.Z.cicleButtonWithText
            }, f.createElement(D.Y, {
                type: "circleButtonWithText",
                text: "\u79c1\u4fe1",
                onMouseEnter: de,
                onMouseLeave: ve,
                avatarUrl: R.Z,
                avatarWidth: 12,
                avatarHeight: 12,
                viewBox: "0 0 15 15",
                activityName: null == _ ? void 0 : _.activityName,
                headerPopupName: "im",
                className: k.Z.polymorphicButton
            }, f.createElement("div", {
                className: M()(k.Z.popNum, {
                    isLight: null == _ ? void 0 : _.isActivity
                })
            }, f.createElement(w.C, {
                className: M()(k.Z.PopStyle, (i = {},
                (0,
                r.Z)(i, k.Z.digitsNumberPop, C < 10),
                (0,
                r.Z)(i, k.Z.numberPoint, C >= 10),
                i)),
                num: C
            })), Y === H ? f.createElement(B, {
                ref: J,
                newHeaderIsNew: 1 === te,
                changeType: j
            }) : Y === V ? f.createElement(F, {
                closeFn: ce,
                customProps: _
            }) : null, f.createElement(A.Z, null))))
        }
        )))
          , j = Y
    },
    60920: function(e, n, t) {
        t.r(n),
        t.d(n, {
            default: function() {
                return N
            }
        });
        var r = t(22545)
          , a = t(4788)
          , i = t.n(a)
          , o = t(44742)
          , s = t.n(o)
          , l = t(21528)
          , u = t(69509)
          , c = t(70335)
          , d = t.n(c)
          , v = t(57873)
          , f = t(39027)
          , _ = t(69632)
          , E = t(88263)
          , p = t(19085)
          , m = t(88969)
          , h = t(64756)
          , I = "yF7Mvis1"
          , g = (t(87461),
        t(64296))
          , S = t(51765)
          , O = function() {
            var e = (0,
            r.Z)(s().mark((function e() {
                var n;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                pullInterval: m.TCC_DEFAULT_VALUE_MAP.get(m.TccKey.ImConfig)
                            },
                            e.prev = 1,
                            e.next = 4,
                            _.U2({
                                key: m.TccKey.ImConfig,
                                defaultValue: m.TCC_DEFAULT_VALUE_MAP.get(m.TccKey.ImConfig)
                            });
                        case 4:
                            n = e.sent,
                            e.next = 9;
                            break;
                        case 7:
                            e.prev = 7,
                            e.t0 = e.catch(1);
                        case 9:
                            return e.abrupt("return", n);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 7]])
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , N = function(e) {
            var n = e.isLogin
              , r = e.uInfo
              , a = (e.abTestData,
            e.customProps,
            e.className)
              , o = e.initImSDK
              , s = void 0 === o || o
              , c = l.useRef();
            return (0,
            l.useEffect)((function() {
                s && i().all([Promise.resolve().then(t.bind(t, 20071)), t.e(1728).then(t.bind(t, 64350)), O()]).then((function(e) {
                    if (e[0] && e[1]) {
                        var t = e[0].ImSdk
                          , a = e[1].default;
                        t.tryStart(n, r, e[2]),
                        null != r && r.uid && a.init(r.uid),
                        v.Z.setCurUserInfo(r),
                        c.current = c
                    }
                }
                ))
            }
            ), [n, r, s]),
            (0,
            l.useEffect)((function() {
                return S.Z.log("ImEntry load"),
                function() {
                    var e, n;
                    (S.Z.log("ImEntry unload"),
                    c.current) && (null === (e = c.current) || void 0 === e || null === (n = e.tryStart) || void 0 === n || n.call(e, !1, {}))
                }
            }
            ), []),
            (0,
            l.useEffect)((function() {
                var e = f.Q.getItem({
                    sKey: p.CookieKeys.Theme
                });
                e !== g.rS.light && e !== g.rS.dark ? v.Z.setTheme(g.rS.light) : v.Z.setTheme(e);
                var n = E.listen(E.EVENT.changeTheme, (function(e) {
                    var n = e.theme;
                    v.Z.setTheme(n)
                }
                ));
                return function() {
                    n()
                }
            }
            ), []),
            l.createElement("li", {
                onClick: function(e) {},
                className: d()(I, a)
            }, l.createElement(u.zt, {
                imStore: v.Z
            }, l.createElement(h.v, e)))
        }
    },
    36316: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return S
            }
        });
        var r = t(85116)
          , a = t(937)
          , i = t(21993)
          , o = t(22545)
          , s = t(46040)
          , l = t(75166)
          , u = t(66600)
          , c = t.n(u)
          , d = t(44742)
          , v = t.n(d)
          , f = t(21528);
        var _ = function(e) {
            return e ? e.replace(/^http:\/\//g, "https://") : e
        }
          , E = t(70335)
          , p = t.n(E)
          , m = "dIUpgpVW"
          , h = t(13043)
          , I = t(68399)
          , g = ["className", "srcList", "size", "style", "uniqKey", "onClick"];
        function S(e) {
            var n = e.className
              , t = e.srcList
              , u = e.size
              , d = e.style
              , E = e.uniqKey
              , S = e.onClick
              , O = (0,
            l.Z)(e, g)
              , N = (0,
            f.useState)(t)
              , T = (0,
            s.Z)(N, 2)
              , M = T[0]
              , C = T[1]
              , L = (0,
            f.useState)(null)
              , y = (0,
            s.Z)(L, 2)
              , k = y[0]
              , R = y[1]
              , w = (0,
            f.useState)({})
              , A = (0,
            s.Z)(w, 2)
              , Z = A[0]
              , b = A[1]
              , P = (0,
            f.useState)(!1)
              , U = (0,
            s.Z)(P, 2)
              , D = U[0]
              , G = U[1]
              , x = (0,
            f.useRef)(0)
              , F = (0,
            f.useRef)(!1)
              , V = function() {
                var e = (0,
                o.Z)(v().mark((function e(n) {
                    var t, r, a, i, o;
                    return v().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n && !F.current) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return F.current = !0,
                                e.next = 5,
                                (0,
                                I.Z)((0,
                                h.FF)(n));
                            case 5:
                                if (t = e.sent,
                                r = (0,
                                s.Z)(t, 2),
                                a = r[0],
                                i = r[1],
                                !a) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                null != (o = null == i ? void 0 : i.UrlList) && o.length && (x.current = 0,
                                C(o));
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , H = (0,
            f.useCallback)((function(e) {
                G(!1),
                R(e)
            }
            ), [])
              , W = function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                if (e && G(!0),
                c()(M)) {
                    var n = x.current
                      , t = M.length;
                    if (n < t) {
                        var r = M[n];
                        H(r),
                        x.current++
                    } else
                        e && V(M[0])
                } else
                    e && V(M)
            };
            if ((0,
            f.useEffect)((function() {
                C(t)
            }
            ), [t]),
            (0,
            f.useEffect)((function() {
                c()(M) ? W() : null != Z && Z[E] || H(M)
            }
            ), [M]),
            !k)
                return f.createElement("div", (0,
                i.Z)({}, O, {
                    onClick: S,
                    style: d,
                    className: p()(m, n)
                }));
            var B = _(String(k)).replace("https://p1.pstatp.", "https://sf1-cdn-tos.douyinstatic.").replace("https://p3.pstatp.", "https://sf3-cdn-tos.douyinstatic.").replace("https://p6.pstatp.", "https://sf6-cdn-tos.douyinstatic.").replace("https://p9.pstatp.", "https://sf6-cdn-tos.douyinstatic.");
            return u && (B = B.replace(/~\d+x\d+\.image$/, "~".concat(u, ".image")).replace(/~noop\.image$/, "~".concat(u, ".image"))),
            B && E && b((0,
            a.Z)((0,
            a.Z)({}, Z), {}, (0,
            r.Z)({}, E, B))),
            D ? f.createElement("div", (0,
            i.Z)({}, O, {
                onClick: S,
                style: d,
                className: p()(m, n)
            })) : f.createElement("img", (0,
            i.Z)({}, O, {
                onClick: S,
                style: d,
                className: p()(m, n),
                src: B,
                onError: W
            }))
        }
    },
    15881: function(e, n, t) {
        t.d(n, {
            vW: function() {
                return v
            },
            bf: function() {
                return f
            },
            Uo: function() {
                return _
            }
        });
        var r = t(70355)
          , a = t.n(r)
          , i = t(57873)
          , o = t(49972)
          , s = t.n(o)
          , l = t(96146)
          , u = t(6881)
          , c = t(20822)
          , d = t(12028);
        function v(e) {
            var n, t = e.sender, r = (0,
            d.Z)(t), a = (null === i.Z || void 0 === i.Z || null === (n = i.Z.userInfoFromServerMap) || void 0 === n ? void 0 : n[t]) || {}, o = a.nickname;
            return a.remark_name || r || o
        }
        function f(e) {
            var n = e.referenceInfo;
            if (!n)
                return "";
            try {
                var t, r, o = n.hint, u = n.ref_message_type, c = JSON.parse(o), v = c.refmsg_uid, f = c.content, _ = s().fromValue(u).toString(), E = (null === i.Z || void 0 === i.Z || null === (t = i.Z.userInfoFromServerMap) || void 0 === t ? void 0 : t[v]) || {}, p = E.nickname, m = E.remark_name, h = (0,
                d.Z)(v), I = "";
                switch (Number(_)) {
                case l.pp.TEXT:
                    I = f;
                    break;
                case l.pp.STORY_PICTURE:
                    I = "[\u56fe\u7247]";
                    break;
                case l.pp.BIG_EMOJI:
                    I = "[\u8868\u60c5]";
                    break;
                case l.pp.SHARE_AWEME:
                case l.pp.REF_MSG:
                case l.pp.SHARE_PHOTOS:
                    I = f;
                    break;
                default:
                    I = "\u6682\u4e0d\u652f\u6301\u8be5\u56de\u590d\u7c7b\u578b"
                }
                return a()(r = "".concat(m || h || p, "\uff1a")).call(r, I)
            } catch (g) {
                return ""
            }
        }
        var _ = function(e) {
            var n = e.conversationType
              , t = e.conversationId
              , r = (e.type,
            n === c.m.ConversationType.GROUP_CHAT);
            return {
                message_type: (0,
                u.GM)(e),
                conversation_id: t,
                chat_type: r ? "group" : "private"
            }
        }
    },
    38686: function(e, n, t) {
        t.r(n),
        t.d(n, {
            default: function() {
                return xe
            }
        });
        var r, a = t(21528), i = t(69509), o = t(57873), s = t(22545), l = t(46040), u = t(44074), c = t.n(u), d = t(44742), v = t.n(d), f = t(70355), _ = t.n(f), E = t(95383), p = t.n(E), m = t(77355), h = t.n(m), I = t(51235), g = t.n(I), S = t(70335), O = t.n(S), N = (0,
        a.createContext)(null), T = t(20071), M = "ZPAm7FS1", C = "z6Zdwjn9", L = t(937), y = t(8236), k = t.n(y), R = t(66482), w = t.n(R), A = t(63199), Z = t.n(A), b = t(4200), P = t.n(b), U = t(73824), D = t(53549), G = t(18653), x = t(66870), F = t(96146), V = t(64296), H = (t(76457),
        t(57101)), W = t.n(H), B = "J4uBRHxY", Y = "edtfUKig", j = "vswqdNij", K = "JXxAUAHi", J = "UK2i47la", q = "Y3fF3x02", z = "O1VlSpVS", X = "xOLyTfg2", Q = "V3KrER_G", $ = "iV8kVTHN", ee = "lDBwXmWa";
        function ne() {
            return ne = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            ne.apply(this, arguments)
        }
        var te = function(e) {
            return a.createElement("svg", ne({
                width: 14,
                height: 14,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 .333a5.667 5.667 0 103.237 10.318l2.722 2.723a1 1 0 001.414-1.415l-2.722-2.722A5.667 5.667 0 006 .333zM2.333 6a3.667 3.667 0 117.333 0 3.667 3.667 0 01-7.333 0z",
                fill: "#fff",
                fillOpacity: .5
            })))
        }
          , re = t(94)
          , ae = t(88263)
          , ie = t(64790)
          , oe = t(85116)
          , se = "LTMcivIE"
          , le = "_T5IORij"
          , ue = "HMk3zjD0"
          , ce = "BGnXeHsk"
          , de = "AodeIVcJ"
          , ve = "vfxQIfBq"
          , fe = "qZtfGPDb"
          , _e = "J23I0eWF"
          , Ee = "drf7wF7Y"
          , pe = "Z3qPIqDl"
          , me = "EBA1AiIS"
          , he = t(36316)
          , Ie = t(20822)
          , ge = Ie.m.ConversationType.GROUP_CHAT
          , Se = (0,
        i.f3)("imStore")((0,
        i.Pi)((function(e) {
            var n = e.list
              , t = void 0 === n ? [] : n
              , r = e.confirmSharee
              , i = e.type
              , o = e.imStore
              , s = void 0 === o ? {} : o
              , l = e.title
              , u = void 0 === l ? "" : l
              , c = e.showTitle
              , d = void 0 === c || c
              , v = e.handleShareToFriend
              , f = void 0 === v ? function() {}
            : v
              , _ = s.shareMap;
            s.abTestData;
            return null != t && t.length ? a.createElement("div", {
                className: se
            }, u && d ? a.createElement("div", {
                className: le
            }, u) : null, null == t ? void 0 : h()(t).call(t, (function(e) {
                var n, o, s, l, u, c = null != i ? i : (null == e ? void 0 : e.type) === ge ? "group" : "user", d = e.remark_name && !(e.match && "remarkName" === e.matchKey);
                return a.createElement("div", {
                    className: ue,
                    key: e.uid
                }, a.createElement(he.Z, {
                    srcList: null === (n = e.avatar_thumb) || void 0 === n ? void 0 : n.url_list,
                    className: O()(ce, (0,
                    oe.Z)({}, de, "group" === c && e.isRoundAvatar))
                }), a.createElement("div", {
                    className: ve
                }, e.match ? d ? e.remark_name : a.createElement(a.Fragment, null, a.createElement("span", null, e.beforeMatch), a.createElement("span", {
                    className: fe
                }, e.matchWord), a.createElement("span", null, e.afterMatch)) : e.remark_name || e.nickname || ""), a.createElement("div", {
                    className: O()(_e, (l = {},
                    (0,
                    oe.Z)(l, Ee, !(null != _ && null !== (o = _[c]) && void 0 !== o && o[e.uid])),
                    (0,
                    oe.Z)(l, pe, null == _ || null === (s = _[c]) || void 0 === s ? void 0 : s[e.uid]),
                    (0,
                    oe.Z)(l, me, !0),
                    l)),
                    "data-userid": e.uid,
                    onClick: function(e) {
                        return function(e, n) {
                            var a = e.currentTarget.dataset.userid;
                            null == f || f({
                                uid: a
                            }),
                            r(a, n, t)
                        }(e, c)
                    }
                }, null != _ && null !== (u = _[c]) && void 0 !== u && u[e.uid] ? "\u634e\u53e5\u8bdd" : "\u5206\u4eab"))
            }
            ))) : null
        }
        )))
          , Oe = Se
          , Ne = t(6881)
          , Te = t(59662);
        function Me(e, n) {
            if (e === undefined || n === undefined)
                return -4;
            var t = n > 0;
            return Number(e > 0) + Number(t)
        }
        var Ce = (0,
        i.f3)("imStore")((0,
        i.Pi)((function(e) {
            var n = e.imStore
              , t = void 0 === n ? {} : n
              , r = e.confirmSharee
              , i = e.closeBoard
              , o = e.handleShareToFriend
              , s = void 0 === o ? function() {}
            : o
              , u = e.handleShareSuccess
              , c = void 0 === u ? function() {}
            : u
              , d = t.userInfoFromServerMap
              , v = (t.userInfoForShareMap,
            t.shareMap)
              , f = (t.hasJoinGroupObj,
            t.awemeInfo,
            t.abTestData,
            N)
              , E = (0,
            a.useContext)(f)
              , m = (E.allFriendsList,
            E.recentFriendsList)
              , I = E.mixedList
              , g = (0,
            a.useState)("")
              , S = (0,
            l.Z)(g, 2)
              , O = S[0]
              , T = S[1]
              , M = (0,
            a.useState)([])
              , C = (0,
            l.Z)(M, 2)
              , y = C[0]
              , k = C[1]
              , R = (0,
            a.useState)(!1)
              , w = (0,
            l.Z)(R, 2)
              , A = w[0]
              , b = w[1]
              , P = (0,
            a.useState)(null)
              , U = (0,
            l.Z)(P, 2)
              , D = (U[0],
            U[1],
            (0,
            a.useState)(null))
              , G = (0,
            l.Z)(D, 2)
              , x = (G[0],
            G[1])
              , F = (0,
            a.useRef)(null)
              , V = (0,
            a.useRef)(null)
              , H = (0,
            a.useRef)(null);
            (0,
            a.useEffect)((function() {
                V.current = I
            }
            ), []),
            (0,
            a.useEffect)((function() {
                var e, n, t;
                A || (H.current = null),
                null === (e = F.current) || void 0 === e || null === (n = e.scrollTo) || void 0 === n || n.call(e, 0, 0);
                var r = H.current && null !== (t = W()(H.current)) && void 0 !== t && t.length ? null == m ? void 0 : p()(m).call(m, (function(e) {
                    var n;
                    return !(null !== (n = H.current) && void 0 !== n && n[null == e ? void 0 : e.uid])
                }
                )) : m
                  , a = null == r ? void 0 : h()(r).call(r, (function(e) {
                    return (null == d ? void 0 : d[null == e ? void 0 : e.uid]) || {}
                }
                ));
                x(a)
            }
            ), [A, H.current]);
            var ne, oe = (ne = (0,
            Te.n)(),
            function() {
                var e;
                null == ne || null === (e = ne.exitFullscreen) || void 0 === e || e.call(ne),
                ae.emit(ae.EVENT.triggerModalPlayerClose, {}),
                ae.emit(ae.EVENT.pageFullScreen, {
                    clickMethod: "share",
                    fullScreen: !1
                })
            }
            ), se = function() {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
                    n[a] = arguments[a];
                var o = n[0]
                  , s = v || {}
                  , l = s.user
                  , u = void 0 === l ? {} : l;
                if (u[o]) {
                    var f = null == d ? void 0 : d[o];
                    return (0,
                    ie.Gb)("click_send_message", {
                        personal_relation: Me(null == f ? void 0 : f.follower_status, null == f ? void 0 : f.follow_status)
                    }),
                    ae.emit(ae.EVENT.sendImUserMsg, {
                        uid: o,
                        enterMethod: Ne.QX.share_message
                    }),
                    oe(),
                    void i()
                }
                var E = function(e) {
                    u[o] = null == e ? void 0 : e.success;
                    var n = (0,
                    L.Z)((0,
                    L.Z)({}, v), {}, {
                        user: u
                    });
                    t.setShareMap(n),
                    (null == e ? void 0 : e.success) && (null == c || c({
                        uid: o,
                        type: "chat_list"
                    }))
                };
                r.apply(void 0, _()(n).call(n, [E]))
            }, le = function() {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
                    n[a] = arguments[a];
                var o = n[0]
                  , s = v || {}
                  , l = s.group
                  , u = void 0 === l ? {} : l;
                if (u[o])
                    return (0,
                    ie.Gb)("click_send_message", {
                        personal_relation: -1
                    }),
                    ae.emit(ae.EVENT.openImConversation, {
                        conversationId: o,
                        enterMethod: Ne.QX.share_message
                    }),
                    oe(),
                    void i();
                var c = function(e) {
                    u[o] = null == e ? void 0 : e.success;
                    var n = (0,
                    L.Z)((0,
                    L.Z)({}, v), {}, {
                        group: u
                    });
                    t.setShareMap(n)
                };
                r.apply(void 0, _()(n).call(n, [c]))
            };
            return a.createElement("div", {
                className: B
            }, a.createElement("div", {
                className: Y
            }, a.createElement("div", {
                className: j
            }, a.createElement("div", {
                className: K
            }, a.createElement(re.Z, {
                src: te,
                width: 14,
                height: 14,
                viewBox: "0 0 14 14"
            })), a.createElement("input", {
                className: J,
                placeholder: "\u641c\u7d22",
                onChange: function(e) {
                    var n = e.currentTarget.value;
                    if (T(n),
                    b("" !== n),
                    "" !== n) {
                        var t = []
                          , r = (null == V ? void 0 : V.current) || []
                          , a = {};
                        Z()(r).call(r, (function(e) {
                            var r = new RegExp("^(.*?)(".concat(n, ")(.*)$"))
                              , i = r.exec(e.nickname || "")
                              , o = r.exec(e.remark_name || "");
                            if (o || i) {
                                var s = o || i
                                  , u = (0,
                                l.Z)(s, 4)
                                  , c = (u[0],
                                u[1])
                                  , d = u[2]
                                  , v = u[3]
                                  , f = (0,
                                L.Z)((0,
                                L.Z)({}, e), {}, {
                                    match: !0,
                                    matchKey: o ? "remarkName" : "nickName",
                                    beforeMatch: c,
                                    matchWord: d,
                                    afterMatch: v
                                });
                                t.push(f),
                                a[e.uid] = !0
                            }
                        }
                        )),
                        H.current = a,
                        k(t)
                    }
                },
                onKeyDown: function(e) {
                    e.stopPropagation()
                },
                value: O,
                onFocus: function() {
                    (0,
                    ie.Gb)("share_search", {})
                }
            }), O ? a.createElement(a.Fragment, null, a.createElement("div", {
                className: q
            }), a.createElement("div", {
                className: z,
                onClick: function() {
                    T(""),
                    b(!1)
                }
            }, "\u6e05\u9664")) : null)), a.createElement("div", {
                className: X
            }), a.createElement("div", {
                className: Q,
                ref: F
            }, A ? null != y && y.length ? a.createElement(Oe, {
                list: y,
                handleShareToFriend: s,
                confirmSharee: function() {
                    "user" === (arguments.length <= 1 ? undefined : arguments[1]) ? se.apply(void 0, arguments) : le.apply(void 0, arguments)
                }
            }) : a.createElement("div", {
                className: ee
            }, "\u6ca1\u6709\u641c\u7d22\u5230\u670b\u53cb") : null, a.createElement(Oe, {
                title: "\u5206\u4eab\u7ed9\u670b\u53cb",
                list: I,
                handleShareToFriend: s,
                confirmSharee: function() {
                    "user" === (arguments.length <= 1 ? undefined : arguments[1]) ? se.apply(void 0, arguments) : le.apply(void 0, arguments)
                }
            }), a.createElement("div", {
                className: $
            }, "\u6682\u65f6\u6ca1\u6709\u66f4\u591a\u4e86")))
        }
        )))
          , Le = Ce
          , ye = "a2rhZFTP"
          , ke = t(55042)
          , Re = t(62071)
          , we = t(4765)
          , Ae = (0,
        i.f3)("imStore")((0,
        i.Pi)((function(e) {
            var n = e.imStore
              , t = void 0 === n ? {} : n
              , r = e.closeBoard
              , i = e.toast
              , o = e.handleShareToFriend
              , u = void 0 === o ? function() {}
            : o
              , c = e.handleShareSuccess
              , d = void 0 === c ? function() {}
            : c
              , f = e.reportExtraParams
              , _ = void 0 === f ? {} : f
              , E = t.awemeInfo
              , p = void 0 === E ? {} : E
              , m = (t.abTestData,
            t.shareType)
              , I = t.userInfoFromServerMap
              , g = function() {
                var e = (0,
                s.Z)(v().mark((function e(n, r, a, o) {
                    var s, u, c, d, f, E, g, S, O, N, M, C, y, R, A, b, H, W, B, Y, j, K, J, q, z, X, Q, $, ee, ne, te, re, ae, oe, se, le, ue;
                    return v().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (c = function(e, t) {
                                    var r, i = e.conversationType, o = void 0 === i ? Ie.m.ConversationType.ONE_TO_ONE_CHAT : i, s = null == a ? void 0 : k()(a).call(a, (function(e) {
                                        return (null == e ? void 0 : e.uid) === n
                                    }
                                    )), l = null !== (r = null == I ? void 0 : I[n]) && void 0 !== r ? r : {};
                                    return {
                                        clickRank: s,
                                        relation: Me(null == t ? void 0 : t.followStatus, null == t ? void 0 : t.followerStatus),
                                        personalRelation: o === Ie.m.ConversationType.ONE_TO_ONE_CHAT ? Me(null == l ? void 0 : l.follow_status, null == l ? void 0 : l.follower_status) : Re.EV.NoRelationStatus,
                                        chatType: o === Ie.m.ConversationType.ONE_TO_ONE_CHAT ? V.eD.PRIVATE : V.eD.GROUP
                                    }
                                }
                                ,
                                u = function(e) {}
                                ,
                                m !== ke.yw.Video && m !== ke.yw.Vs) {
                                    e.next = 25;
                                    break
                                }
                                d = p.video,
                                f = void 0 === d ? {} : d,
                                E = p.desc,
                                g = void 0 === E ? "" : E,
                                S = p.awemeId,
                                O = void 0 === S ? "" : S,
                                N = p.authorInfo,
                                M = void 0 === N ? {} : N,
                                C = p.logPb,
                                y = p.awemeType,
                                R = void 0 === y ? 0 : y,
                                A = f.width,
                                b = f.height,
                                H = f.coverUri,
                                W = f.coverUrlList,
                                B = M.avatarThumb,
                                Y = M.uid,
                                j = void 0 === Y ? "" : Y,
                                K = B.uri,
                                J = B.urlList,
                                q = {
                                    url_list: W,
                                    uri: H
                                },
                                z = {
                                    url_list: J,
                                    uri: K
                                },
                                X = {
                                    aweType: F.c6.AWEME_CARD,
                                    content_title: g,
                                    cover_height: b,
                                    cover_width: A,
                                    itemId: O,
                                    cover_url: q,
                                    content_thumb: z,
                                    uid: j
                                },
                                e.t0 = R,
                                e.next = e.t0 === x.ed.Normal ? 13 : e.t0 === x.ed.Note ? 16 : 19;
                                break;
                            case 13:
                                return X.aweType = F.c6.AWEME_CARD,
                                Q = F.pp.SHARE_AWEME,
                                e.abrupt("break", 21);
                            case 16:
                                return X.aweType = F.c6.DEFAULT,
                                Q = F.pp.SHARE_PHOTOS,
                                e.abrupt("break", 21);
                            case 19:
                                X.aweType = F.c6.AWEME_CARD,
                                Q = F.pp.SHARE_AWEME;
                            case 21:
                                s = {
                                    content: w()(X),
                                    type: Q
                                },
                                u = function(e) {
                                    null == e || Z()(e).call(e, (function(e) {
                                        var n, t = e || [], r = (0,
                                        l.Z)(t, 1)[0], a = void 0 === r ? {} : r, i = c(a, M), o = i.clickRank, s = i.relation, u = i.personalRelation, d = i.chatType;
                                        (0,
                                        ie.Gb)("share_video", (0,
                                        L.Z)({
                                            author_id: j,
                                            group_id: O,
                                            log_pb: C,
                                            type: "message",
                                            click_method: V.dF.CHAT_LIST,
                                            conversation_id: (null == a ? void 0 : a.conversationId) || "",
                                            enter_from: U.mo(),
                                            is_full_screen: D.r() ? "1" : "0",
                                            from_follow_list: null !== (n = G.Le.getConfig(G.gI.FromFollowList)) && void 0 !== n && n.tag ? "1" : "0",
                                            aweme_type: null == p ? void 0 : p.awemeType,
                                            relation: s,
                                            personal_relation: u,
                                            click_rank: o,
                                            chat_type: d
                                        }, _))
                                    }
                                    ))
                                }
                                ,
                                e.next = 38;
                                break;
                            case 25:
                                if (m !== ke.yw.User) {
                                    e.next = 38;
                                    break
                                }
                                if (ne = t.shareUserInfo,
                                (te = void 0 === ne ? {} : ne).secUid) {
                                    e.next = 29;
                                    break
                                }
                                return e.abrupt("return");
                            case 29:
                                return e.next = 31,
                                (0,
                                we.eG)({
                                    userId: te.secUid
                                });
                            case 31:
                                re = e.sent,
                                ae = re.data,
                                oe = (null == ae ? void 0 : ae.length) >= 3 ? null == ae || null === ($ = P()(ae).call(ae, 0, 3)) || void 0 === $ ? void 0 : h()($).call($, (function(e) {
                                    var n, t;
                                    return {
                                        uri: null == e || null === (n = e.video) || void 0 === n ? void 0 : n.coverUri,
                                        url_list: null == e || null === (t = e.video) || void 0 === t ? void 0 : t.coverUrlList
                                    }
                                }
                                )) : undefined,
                                se = (null == ae ? void 0 : ae.length) >= 3 ? null == ae || null === (ee = P()(ae).call(ae, 0, 3)) || void 0 === ee ? void 0 : h()(ee).call(ee, (function(e) {
                                    return null == e ? void 0 : e.awemeId
                                }
                                )) : undefined,
                                le = {
                                    name: te.nickname,
                                    uid: te.uid,
                                    secUID: te.secUid,
                                    avatar: {
                                        url_list: [te.avatarUrl]
                                    },
                                    cover_url: oe,
                                    cover_items: se
                                },
                                s = {
                                    content: w()(le),
                                    type: F.pp.SHARE_USER
                                },
                                u = function(e) {
                                    null == e || Z()(e).call(e, (function(e) {
                                        var n = e || []
                                          , t = (0,
                                        l.Z)(n, 1)[0]
                                          , r = c(void 0 === t ? {} : t, te)
                                          , a = r.clickRank
                                          , i = r.relation
                                          , o = r.personalRelation
                                          , s = r.chatType;
                                        (0,
                                        ie.Gb)("share_user", {
                                            type: "message",
                                            author_id: te.uid,
                                            relation: i,
                                            personal_relation: o,
                                            click_rank: a,
                                            chat_type: s
                                        })
                                    }
                                    ))
                                }
                                ;
                            case 38:
                                ue = function(e) {
                                    var n = (null == e ? void 0 : e[0]) || []
                                      , t = (0,
                                    l.Z)(n, 1)[0]
                                      , r = (void 0 === t ? {} : t).res
                                      , a = void 0 === r ? {} : r
                                      , s = a.success ? "\u5206\u4eab\u6210\u529f" : "\u5206\u4eab\u5931\u8d25";
                                    null == i || i(s),
                                    null == o || o(a)
                                }
                                ,
                                "user" === r ? T.ImSdk.sendUserMsg([n], s, {
                                    beforeSend: u,
                                    afterSend: ue,
                                    enter_method: Ne.QX.share_board
                                }) : T.ImSdk.sendGroupMsg([n], s, {
                                    beforeSend: u,
                                    afterSend: ue,
                                    enter_method: Ne.QX.share_board
                                });
                            case 40:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, t, r, a) {
                    return e.apply(this, arguments)
                }
            }()
              , S = (0,
            Te.n)()
              , N = (0,
            a.useState)((function() {
                var e, n, t, r = null == S || null === (e = S.root) || void 0 === e || null === (n = e.getBoundingClientRect) || void 0 === n || null === (t = n.call(e)) || void 0 === t ? void 0 : t.height;
                return r ? r - 180 : undefined
            }
            ))
              , M = (0,
            l.Z)(N, 2)
              , C = M[0];
            M[1];
            return a.createElement("div", {
                className: O()(ye),
                style: {
                    height: C
                }
            }, a.createElement(Le, {
                confirmSharee: g,
                closeBoard: r,
                handleShareToFriend: u,
                handleShareSuccess: d
            }))
        }
        )));
        Ae.displayName = "ShareeList";
        var Ze = t(72843)
          , be = Ie.m.ConversationType
          , Pe = be.GROUP_CHAT
          , Ue = be.ONE_TO_ONE_CHAT;
        function De(e, n) {
            var t, r, a = n.allFriendsList, i = n.userInfoFromServerMap, o = n.userInfoForShareMap;
            return null === (t = c()(_()(r = []).call(r, null == e ? void 0 : p()(e).call(e, (function(e) {
                return !(0,
                Ze.n6)(e)
            }
            )), null == a ? void 0 : h()(a).call(a, (function(e) {
                return {
                    toParticipantUserId: e,
                    type: Ue
                }
            }
            ))), (function(e) {
                return e.toParticipantUserId || "".concat(e.id, "_group")
            }
            ))) || void 0 === t ? void 0 : h()(t).call(t, (function(e) {
                var t, r = e.type;
                if (r === Ue) {
                    var a = e.toParticipantUserId
                      , s = void 0 === a ? "" : a
                      , l = e.id
                      , u = void 0 === l ? "" : l;
                    null != i && i[s] || n.getPatchUserInfoAsync(s);
                    var c = (null == i ? void 0 : i[s]) || (null == o ? void 0 : o[s]) || {}
                      , d = c.avatar_thumb
                      , v = void 0 === d ? {} : d
                      , f = c.nickname
                      , E = void 0 === f ? "" : f
                      , p = c.remark_name;
                    t = {
                        type: r,
                        avatar_thumb: v,
                        nickname: E,
                        remark_name: void 0 === p ? "" : p,
                        uid: s,
                        conversationid: u
                    }
                } else if (r === Pe) {
                    var m, h = e.coreInfo, I = void 0 === h ? {} : h, g = e.id, S = void 0 === g ? "" : g, O = e.ext, N = I.name, T = I.icon;
                    t = {
                        type: r,
                        nickname: N,
                        avatar_thumb: {
                            url_list: _()(m = []).call(m, (null == O ? void 0 : O["a:ab_avatar"]) || T || "")
                        },
                        hasShared: !1,
                        uid: S,
                        conversationid: S,
                        isRoundAvatar: Boolean(null == O ? void 0 : O["a:ab_avatar"])
                    }
                }
                return t
            }
            ))
        }
        var Ge = (0,
        i.f3)("imStore")((0,
        i.Pi)((function(e) {
            var n = e.awemeInfo
              , t = e.shareType
              , r = e.shareUserInfo
              , i = e.imStore
              , o = void 0 === i ? {} : i
              , u = e.handleExpand
              , c = e.handleCollapse
              , d = e.close
              , f = e.handleHasFriends
              , _ = e.toast
              , E = (e.handleChooseFriend,
            e.handleShareToFriend)
              , p = void 0 === E ? function() {}
            : E
              , m = e.handleShareSuccess
              , h = void 0 === m ? function() {}
            : m
              , I = e.reportExtraParams
              , S = void 0 === I ? {} : I
              , L = o.usersInConversationList
              , y = o.allFriendsList
              , k = o.allGroupList
              , R = o.conversationListFilter
              , w = (o.abTestData,
            o.userInfoFromServerMap,
            o.userInfoForShareMap,
            N)
              , A = (0,
            a.useState)(null)
              , Z = (0,
            l.Z)(A, 2)
              , b = Z[0]
              , P = Z[1]
              , U = (0,
            a.useState)(null)
              , D = (0,
            l.Z)(U, 2)
              , G = D[0]
              , x = D[1]
              , F = (0,
            a.useState)(null)
              , V = (0,
            l.Z)(F, 2)
              , H = V[0]
              , W = V[1]
              , B = (0,
            a.useState)(null)
              , Y = (0,
            l.Z)(B, 2)
              , j = Y[0]
              , K = Y[1]
              , J = (0,
            a.useState)(!1)
              , q = (0,
            l.Z)(J, 2)
              , z = q[0]
              , X = q[1]
              , Q = (0,
            a.useRef)(!1)
              , $ = (0,
            a.useRef)(!1)
              , ee = (0,
            a.useRef)(null)
              , ne = (0,
            a.useRef)(null);
            (0,
            a.useEffect)((function() {
                var e = null;
                null != R && R.length && null != y && y.length ? null == f || f(!0) : ($.current = !0,
                Q.current = !0,
                e = g()((function() {
                    $.current = !1;
                    var e = (null == ee ? void 0 : ee.current) && 0 !== ee.current.length || (null == ne ? void 0 : ne.current) && 0 !== (null == ne ? void 0 : ne.current.length);
                    null == f || f(e)
                }
                ), 200));
                var n = {
                    handleExpand: u,
                    handleCollapse: c
                };
                return o.setShareStatusHandler(n),
                function() {
                    e && clearTimeout(e),
                    e = null
                }
            }
            ), []),
            (0,
            a.useEffect)((function() {
                if ((!Q.current || $.current) && !(null != j && j.length || null != G && G.length || null != H && H.length)) {
                    var e, n = L, t = k, r = R;
                    null !== (e = r) && void 0 !== e && e.length || (T.ImSdk.conversationChange(),
                    n = (null == o ? void 0 : o.usersInConversationList) || [],
                    t = (null == o ? void 0 : o.allGroupList) || [],
                    r = (null == o ? void 0 : o.conversationListFilter) || []),
                    x(n),
                    W(t),
                    K(r),
                    ee.current = n
                }
            }
            ), [L, k]),
            (0,
            a.useEffect)((function() {
                (0,
                s.Z)(v().mark((function e() {
                    var n, t;
                    return v().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!Q.current || $.current) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (null != b && b.length) {
                                    e.next = 10;
                                    break
                                }
                                if (null !== (n = t = y) && void 0 !== n && n.length) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 7,
                                o.getUserSpotlightRelationAsync();
                            case 7:
                                t = (null == o ? void 0 : o.allFriendsList) || [];
                            case 8:
                                P(t),
                                ne.current = t;
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
            ), [y]),
            (0,
            a.useEffect)((function() {
                X($.current)
            }
            ), [$.current]),
            (0,
            a.useEffect)((function() {
                return n && o.setCurAwemeInfo(n),
                o.setShareMap(null),
                function() {
                    o.setShareMap(null)
                }
            }
            ), [n]),
            (0,
            a.useEffect)((function() {
                r && o.setCurShareUserInfo(r)
            }
            ), [r]),
            (0,
            a.useEffect)((function() {
                t && o.setCurShareType(t)
            }
            ), [t]),
            (0,
            a.useEffect)((function() {
                T.ImSdk.getAllUserConversation(!0)
            }
            ), []);
            return o && (null != j && j.length || null != b && b.length) ? a.createElement(w.Provider, {
                value: {
                    conversationList: j,
                    allGroupList: H,
                    allFriendsList: b,
                    recentFriendsList: G,
                    mixedList: De(j, o)
                }
            }, z ? a.createElement("div", {
                className: O()(M, C)
            }) : a.createElement("div", {
                className: M,
                onWheel: function(e) {
                    e.stopPropagation()
                },
                onWheelCapture: function(e) {
                    e.stopPropagation()
                }
            }, a.createElement(Ae, {
                closeBoard: function() {
                    null == d || d()
                },
                toast: _,
                handleShareToFriend: p,
                handleShareSuccess: h,
                reportExtraParams: S
            }))) : null
        }
        )));
        Ge.displayName = "ShareContent";
        var xe = function(e) {
            return a.createElement(i.zt, {
                imStore: o.Z
            }, a.createElement(Ge, e))
        }
    },
    15686: function(e, n, t) {
        t.d(n, {
            r9: function() {
                return s
            },
            S6: function() {
                return l
            },
            Nk: function() {
                return u
            },
            E9: function() {
                return c
            },
            sP: function() {
                return d
            },
            FO: function() {
                return v
            }
        });
        var r, a, i = t(85116), o = t(64296), s = {
            LOVE: {
                key: "e:love",
                value: '{"emoji_data":{"icon_url":"https://p6.douyinpic.com/aweme-client-static-resource/single_msg_emoji_love_1588747335.png~tplv-obj.image","me_text":"","text":"\u2764\ufe0f"},"type":1}'
            }
        }, l = {
            RECALL_ROLE: "s:recall_role",
            RECALL_UID: "s:recall_uid"
        }, u = {
            KEY_CREATE_GROUP_TYPE: "a:s_group_create_type"
        }, c = (r = {},
        (0,
        i.Z)(r, o.Hv.REGULAR_USER, [o.DK.DELETE_CONVERSATION, o.DK.STICK_ON_TOP, o.DK.REPORT, o.DK.SET_MUTED, o.DK.BLOCK_USER]),
        (0,
        i.Z)(r, o.Hv.REGULAR_GROUP, [o.DK.DELETE_CONVERSATION, o.DK.STICK_ON_TOP, o.DK.REPORT, o.DK.SET_MUTED, o.DK.QUIT_GROUP]),
        (0,
        i.Z)(r, o.Hv.REGULAR_SELF, [o.DK.DELETE_CONVERSATION, o.DK.STICK_ON_TOP, o.DK.SET_MUTED]),
        (0,
        i.Z)(r, o.Hv.STARNGER_ITEM, [o.DK.DELETE_CONVERSATION, o.DK.REPORT, o.DK.BLOCK_USER]),
        (0,
        i.Z)(r, o.Hv.STRANGER_BOX, [o.DK.DELETE_CONVERSATION]),
        r), d = (a = {},
        (0,
        i.Z)(a, o.DK.INIT_VALUE, ""),
        (0,
        i.Z)(a, o.DK.DELETE_CONVERSATION, "\u5220\u9664\u540e\u5c06\u6e05\u9664\u672c\u4f1a\u8bdd\u7684\u804a\u5929\u8bb0\u5f55"),
        (0,
        i.Z)(a, o.DK.QUIT_GROUP, "\u786e\u8ba4\u9000\u51fa\u6b64\u7fa4\u804a?"),
        a), v = {
            CONVETSAION_DETAIL_CONENT: "conversaton-detail-content",
            CONVERSAION_DETAIL_INPUT_CONTENT: "conversaton-detail-input-content"
        }
    },
    64296: function(e, n, t) {
        t.d(n, {
            $u: function() {
                return i
            },
            vW: function() {
                return o
            },
            rS: function() {
                return s
            },
            GB: function() {
                return l
            },
            dx: function() {
                return u
            },
            XJ: function() {
                return d
            },
            Lo: function() {
                return v
            },
            eY: function() {
                return f
            },
            eD: function() {
                return _
            },
            ql: function() {
                return E
            },
            dF: function() {
                return p
            },
            pt: function() {
                return m
            },
            IM: function() {
                return h
            },
            tQ: function() {
                return I
            },
            Hv: function() {
                return g
            },
            DK: function() {
                return S
            }
        });
        var r, a, i, o, s, l, u, c, d, v, f, _, E, p, m, h, I, g, S;
        t(20822).m.MessageType;
        !function(e) {
            e[e.text = 0] = "text",
            e[e.file = 1] = "file"
        }(r || (r = {})),
        function(e) {
            e.mentionMsg = "mentionMsg",
            e.textMsg = "textMsg"
        }(a || (a = {})),
        function(e) {
            e[e.FollowRelationUnknown = -1] = "FollowRelationUnknown",
            e[e.NoRelationStatus = 0] = "NoRelationStatus",
            e[e.FollowingStatus = 1] = "FollowingStatus",
            e[e.FollowEachOtherStatus = 2] = "FollowEachOtherStatus",
            e[e.FollowRequestStatus = 4] = "FollowRequestStatus"
        }(i || (i = {})),
        function(e) {
            e[e.Created = 0] = "Created",
            e[e.Preparing = 1] = "Preparing",
            e[e.Inflight = 2] = "Inflight",
            e[e.Succeeded = 3] = "Succeeded",
            e[e.Received = 4] = "Received",
            e[e.Failed = -1] = "Failed",
            e[e.Rejected = -2] = "Rejected",
            e[e.SelfVisible = -3] = "SelfVisible"
        }(o || (o = {})),
        function(e) {
            e.light = "light",
            e.dark = "dark"
        }(s || (s = {})),
        function(e) {
            e[e.MEMBER = 0] = "MEMBER",
            e[e.OWNER = 1] = "OWNER",
            e[e.ADMIN = 2] = "ADMIN"
        }(l || (l = {})),
        function(e) {
            e[e.SCENE_TYPE_DEFAULT = 0] = "SCENE_TYPE_DEFAULT",
            e[e.SCENE_TYPE_REPLY_OTHER = 1] = "SCENE_TYPE_REPLY_OTHER",
            e[e.SCENE_TYPE_REPLY_SELF = 2] = "SCENE_TYPE_REPLY_SELF",
            e[e.SCENE_TYPE_AWEME_MENTION = 3] = "SCENE_TYPE_AWEME_MENTION",
            e[e.SCENE_TYPE_COMMENT_MENTION = 4] = "SCENE_TYPE_COMMENT_MENTION",
            e[e.SCENE_TYPE_SHARE = 5] = "SCENE_TYPE_SHARE",
            e[e.SCENE_TYPE_REPLY_INPUT = 6] = "SCENE_TYPE_REPLY_INPUT",
            e[e.SCENE_TYPE_NOTICE_REPLY_DIGG = 7] = "SCENE_TYPE_NOTICE_REPLY_DIGG",
            e[e.SCENE_TYPE_NOTICE_REPLY_COMMENT = 8] = "SCENE_TYPE_NOTICE_REPLY_COMMENT",
            e[e.SCENE_TYPE_NOTICE_REPLY_ATME = 9] = "SCENE_TYPE_NOTICE_REPLY_ATME"
        }(u || (u = {})),
        function(e) {
            e[e.REPLY_OTHER = 1] = "REPLY_OTHER",
            e[e.REPLY_GOURP_OTHER = 2] = "REPLY_GOURP_OTHER",
            e[e.REPLAY_SELF = 3] = "REPLAY_SELF"
        }(c || (c = {})),
        function(e) {
            e[e.AVAILABLE = 0] = "AVAILABLE",
            e[e.NOT_EXTST = 1] = "NOT_EXTST",
            e[e.INVISIBLE = 2] = "INVISIBLE",
            e[e.RECALLED = 3] = "RECALLED",
            e[e.DELETED = 4] = "DELETED"
        }(d || (d = {})),
        function(e) {
            e[e.AUDIT_NOT_PASS = 1] = "AUDIT_NOT_PASS",
            e[e.AUDIT_ONLY_SELF = 2] = "AUDIT_ONLY_SELF",
            e[e.REVIEWING = 3] = "REVIEWING",
            e[e.ONLY_FRIEND = 4] = "ONLY_FRIEND",
            e[e.ONLY_SELF = 5] = "ONLY_SELF",
            e[e.AUTHOR_SECRET = 6] = "AUTHOR_SECRET",
            e[e.DELETE = 7] = "DELETE",
            e[e.UNKNOWN = 8] = "UNKNOWN",
            e[e.STORY = 9] = "STORY",
            e[e.PART_SEE = 10] = "PART_SEE"
        }(v || (v = {})),
        function(e) {
            e.CHAT_NOTIFY = "chat_notif",
            e.CHAT_PANEL = "chat_panel",
            e.PUSH = "push",
            e.CLIENT_PUSH = "client_push"
        }(f || (f = {})),
        function(e) {
            e.GROUP = "group",
            e.PRIVATE = "private"
        }(_ || (_ = {})),
        function(e) {
            e.SYSTEM = "system",
            e.RECOMMAND = "recommand"
        }(E || (E = {})),
        function(e) {
            e.CHAT = "chat",
            e.CHAT_HEAD = "chat_head",
            e.CHAT_LIST = "chat_list"
        }(p || (p = {})),
        function(e) {
            e.CHAT = "chat"
        }(m || (m = {})),
        function(e) {
            e.ISME = "1",
            e.NOISME = "0"
        }(h || (h = {})),
        function(e) {
            e[e.REGULAR = 0] = "REGULAR",
            e[e.STRANGER = 1] = "STRANGER"
        }(I || (I = {})),
        function(e) {
            e[e.REGULAR = 0] = "REGULAR",
            e[e.REGULAR_USER = 1] = "REGULAR_USER",
            e[e.REGULAR_GROUP = 2] = "REGULAR_GROUP",
            e[e.REGULAR_SELF = 3] = "REGULAR_SELF",
            e[e.STARNGER_ITEM = 4] = "STARNGER_ITEM",
            e[e.STRANGER_BOX = 5] = "STRANGER_BOX"
        }(g || (g = {})),
        function(e) {
            e[e.INIT_VALUE = 0] = "INIT_VALUE",
            e[e.DELETE_CONVERSATION = 1] = "DELETE_CONVERSATION",
            e[e.STICK_ON_TOP = 2] = "STICK_ON_TOP",
            e[e.REPORT = 3] = "REPORT",
            e[e.SET_MUTED = 4] = "SET_MUTED",
            e[e.BLOCK_USER = 5] = "BLOCK_USER",
            e[e.QUIT_GROUP = 6] = "QUIT_GROUP"
        }(S || (S = {}))
    },
    96146: function(e, n, t) {
        t.d(n, {
            pp: function() {
                return r
            },
            c6: function() {
                return a
            },
            ds: function() {
                return i
            }
        });
        t(20822).m.ConversationType;
        var r = {
            NONE: -1,
            SYSTEM: 1,
            ONLY_PICTURE: 2,
            BIG_EMOJI: 5,
            TEXT: 7,
            SHARE_AWEME: 8,
            LOAD_MORE: 9,
            SHARE_PICTURE: 12,
            COMMAND_SHARE: 13,
            UPDATE_TIPS: 14,
            SAY_HELLO: 15,
            COMMENT: 16,
            VOICE: 17,
            SHARE_RANK_LIST: 18,
            SHARE_CHALLENGE: 19,
            SHARRE_POI: 20,
            SHARE_LIVE: 21,
            SHARE_MUSIC: 22,
            SHARE_HARMONY_RANK_LIST: 23,
            SHARE_MINI_APP: 24,
            SHARE_USER: 25,
            SHARE_WEB: 26,
            STORY_PICTURE: 27,
            SHARE_COUPON: 28,
            STORY_VIDEO: 30,
            AT_FRIEND_INTERACT: 31,
            STORY_REPLY: 32,
            COMMON_RED_ENVELOPE: 35,
            VIDEO_RED_ENVELOPE: 36,
            VIDEO_RED_ENVELOPE_NEW_YEAR: 38,
            XPLAN_STICKER_EMOJI: 51,
            XPLAN_HEART_EMOJI: 52,
            SELF_STORY_REPLY: 53,
            GROUP_INVITE_MESSAGE: 58,
            SHARE_WEB_FROM_THIRD_MESSAGE: 60,
            SHARE_GOOD: 61,
            SHARE_GOOD_WINDOW: 62,
            SHARE_POI_RANK: 63,
            SHARE_GOOD_WINDOW_V3: 64,
            ENTERPRISE_CUSTOMIZED_CARD: 65,
            ENTERPRISE_CUSTOMIZED_CARD_WITH_FIXED_HEIGHT: 66,
            ENTERPRISE_PRODUCT_LIST_CARD: 67,
            E_PLATFORM_MESSAGE: 70,
            SHARE_COMPILATION: 71,
            SHARE_STICKER: 72,
            CHAT_CALL: 73,
            RED_PACKET: 74,
            FRIEND_VIDEO_DM_COMMENT: 75,
            SHARE_VS_LIVE: 76,
            SHARE_PHOTOS: 77,
            DIRECT_INVITE: 78,
            GAME_INVITE: 79,
            COUPON_FANS_GROUP: 80,
            SUBSCRIBE_MESSAGE: 81,
            GAME_INVITE_V2: 82,
            REF_MSG: 83,
            LIVE_ADVANCED_NOTICE_MESSAGE: 84,
            URGE_LEAVE_MESSAGE: 85,
            SHARE_PLAYLET: 86,
            SHARE_DSP_MUSIC: 87,
            ONE_CARD: 88,
            ENTER_CHAT_FROM_VIDEO_COMMENT_LINK_MESSAGE: 89,
            FEED_VOIP_SHARE_INVITE_MESSAGE: 90,
            STORY_PICTURE_ONCE_VIEW: 91,
            STORY_VIDEO_ONCE_VIEW: 92,
            ENTERPRISE_CUSTOMER_SERVICE_CARD: 93,
            COUPON_ENTERPRISE: 94,
            CLOUD_GAME_INVITE: 96,
            TEXT_PUSH_GUIDE: 97,
            IM_ENCRYPT_VOICE: 109,
            ENCRYPT_VOICE: 501,
            SHARE_LOCATION: 502,
            XRTC_CHATROOM_INVITE: 507,
            X_GROUP_HOLDER: 1e3,
            GROUP_NOTICE_MESSAGE: 1001,
            GROUP_GREET_MESSAGE: 1002,
            GROUP_ANNOUNCEMENT_MESSAGE: 1004,
            PUSH_NOTIFICATION_GUIDE_MESSAGE: 1005,
            SYSTEM_COMPAT: 1006,
            DENGER_WARNING_TOP_MESSAGE: 1007,
            GROUP_MASTER_SHARE_TOKEN: 1008,
            DOUBLE_LIKE_GUIDE: 1009,
            STRANGER_GREET_MESSAGE: 1010,
            ACTIVE_FRIEND_GREET_MESSAGE: 1011,
            MUTE_GUIDE_CARD: 1012,
            FEED_LIVE_SHARE_INVITE_MESSAGE: 1013,
            CHAT_CALL_D_ONLY: 1017,
            SHARE_MT_LIVE: 1021,
            ACTION_MESSAGE: 2e3,
            WELCOME_WORDS_CARD: 9990,
            FANS_GROUP_MILE_STONE_CARD: 9992,
            CREATOR_FAN_GROUP_PASSWORD_INVITE: 9995,
            CREATOR_FAN_GROUP_CARD_INVITE_MESSAGE: 9996,
            BIRTHDAY_WISHES_MESSAGE: 9997,
            LIVE_FANS_GROUP_OWNER_INVITE_CARD: 9998
        }
          , a = {
            DEFAULT: 0,
            LIVE: 23,
            AWEME_SYSTEM: 100,
            SYSTEM_USER_ACTIVE_STATUS: 101,
            SYSTEM_CREATE_GROUP_REWARD: 102,
            SYSTEM_GROUP_MEMBER_ONLINE: 103,
            SYSTEM_GROUP_SILENT_NOTICE: 106,
            SYSTEM_GROUP_UN_SILENT_NOTICE: 107,
            SYSTEM_MEMBER_SILENT_NOTICE: 108,
            SYSTEM_MEMBER_UN_SILENT_NOTICE: 109,
            AWEME_COMMENT: 200,
            AWEME_BIG_EMOJI: 500,
            AWEME_EMOJI_SELF: 501,
            AWEME_NET_SEARCH_GIF: 502,
            AWEME_TYPE_GIPHY: 503,
            AWEME_GREET_EMOJI: 504,
            AWEME_LITE_MSG_EMOJI: 505,
            AWEME_LITE_MSG_EMOJI_NEW: 506,
            AWEME_INTERACTIVE_EMOJI: 507,
            AWEME_STORE_EMOJI: 508,
            AWEME_TEXT: 700,
            AWEME_SAY_HELLO_TEXT: 701,
            AWEME_TEXT_GREETING: 702,
            TEXT_REF_MSG: 703,
            AWEME_TEXT_POSTSCRIPT: 704,
            AWEME_TEXT_ASK: 705,
            AWEME_TEXT_WELCOME_WORDS: 706,
            AWEME_TEXT_REPORT_WORDS: 708,
            AWEME_PERSONAL_INFO_REQUEST: 770,
            AWEME_PERSONAL_INFO_RESPONSE: 771,
            AWEME_TEXT_UNKNOWN_MSG_TYPE: 799,
            AWEME_CARD: 800,
            PICTURE_CARD: 900,
            RANKING_LIST_WORD: 1801,
            RANKING_LIST_VIDEO: 1802,
            RANKING_LIST_MUSIC: 1803,
            LIVE_KTV: 2101,
            LIVE_VOICE: 2102,
            IM_ENCRYPT_VOICE_AWE_TYPE: 10900,
            RANKING_LIST_HARMONY: 2301,
            MINI_GAME: 2401,
            MINI_APP: 2402,
            MINI_GENERALIZE: 2403,
            ENCRYPT_PICTURE: 2700,
            ENCRYPT_PICTURE_SHARE_FROM_THIRD: 2701,
            ENCRYPT_PICTURE_OUT_CHECK: 2702,
            ENCRYPT_PICTYRE_GIF: 2703,
            WEB_SHARE_FROM_THIRD: 6001,
            WEB_SHARE_FROM_RED_PACKET: 2601,
            GOOD_WINDOW_V3: 6400,
            AWEME_XEMOJI: 5101,
            DIRECT_INVITE_VOICE_CHAT: 7801,
            DIRECT_INVITE_KTV: 7802,
            DIRECT_INVITE_VIDEO_CHAT: 7803,
            DIRECT_INVITE_SHORT_VIDEO: 7804,
            DIRECT_INVITE_FAMILIAR_KTV: 7805,
            DIRECT_INVITE_AUDIENCE: 7806,
            GAME_INVITE_IN_CHAT: 7900,
            GAME_INVITE_IN_GAME: 7901,
            GAME_INVITE_V2: 8200,
            REF_MSG: 8300,
            GROUP_VOTE: 8800,
            COMMODITY_SHARE: 8801,
            GROUP_NOTICE_ADD: 100100,
            GROUP_NOTICE_COMMAND_ADD: 100101,
            GROUP_NOTICE_QRCODE_ADD: 100102,
            GROUP_NOTICE_SAFETY_WARNING: 100103,
            GROUP_NOTICE_REMOVE: 100104,
            GROUP_NOTICE_EXIT: 100105,
            GROUP_NOTICE_GROUP_NAME_CHANGE: 100106,
            GROUP_NOTICE_FROM_DUO_SHAN: 100107,
            GROUP_NOTICE_APPLY_ADD: 100109,
            GROUP_NOTICE_ADMIN_ADD: 100110,
            GROUP_NOTICE_SEARCH_JOIN_GROUP: 100111,
            GROUP_NOTICE_ACTIVITY_JOIN_GROUP: 100112,
            GROUP_NOTICE_ACTIVITY_JOIN_GROUP_BY_FTF: 100113,
            GROUP_NOTICE_ACTIVITY_JOIN_GROUP_BY_CIRCLE: 100114,
            GROUP_NOTICE_WARNING_TIPS: 100120,
            GROUP_NOTICE_GROUP_NAME_EDIT_TIPS: 100121,
            GROUP_NOTICE_LIVE_FANS_MANAGER: 100122,
            GROUP_NOTICE_LIVE_FANS_ANNOUNCE: 100123,
            GROUO_NOTICE_DISABLE_SHARE: 100124,
            GROUP_NOTICE_OPEN_DISABLES_SHARE: 100125,
            GROUP_GREET_MESSAGE_FROM_SERVER: 100200,
            GROUP_GREET_MESSAGE_FROM_CLIENT: 100201,
            GROUP_OWNER_ACTIVE_GUIDE_EMOJI: 100202,
            GROUP_MEMBER_ONLINE_GREET_EMOJI: 100203,
            GROUP_MESSAGE_FOR_AVCALL: 100300,
            GROUP_NOTICE_MUTE_NOTICE: 9994,
            GROUP_NOTICE_FANS_GROUP_WELCOME_NOTICE: 9995,
            FEED_VOIP_SHARE_FOR_AVCALL: 9e3
        }
          , i = [r.SHARE_AWEME, r.REF_MSG, r.SHARE_PHOTOS]
    },
    67147: function(e, n, t) {
        t.d(n, {
            v: function() {
                return l
            }
        });
        var r = t(20822)
          , a = t(57873)
          , i = t(5226)
          , o = r.m.ConversationType
          , s = o.GROUP_CHAT;
        o.ONE_TO_ONE_CHAT;
        function l(e) {
            var n, t = e || {}, r = t.id, o = t.type, l = t.toParticipantUserId, u = t.lastMessage, c = t.coreInfo, d = void 0 === c ? {} : c, v = t.ext, f = o === s, _ = a.Z.userInfoFromServerMap, E = u || {}, p = E.createdAt, m = (E.content,
            d.name), h = d.icon, I = (null == _ ? void 0 : _[l]) || {};
            I || a.Z.getPatchUserInfoAsync(l);
            var g = (f ? (null == v ? void 0 : v["a:ab_avatar"]) || h : null == I || null === (n = I.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || ""
              , S = (null == I ? void 0 : I.remark_name) || (null == I ? void 0 : I.nickname) || l || "";
            return {
                headIcon: g,
                title: f ? m || r : S,
                timeStr: (0,
                i.xS)(p)
            }
        }
    },
    8642: function(e, n, t) {
        t.d(n, {
            lR: function() {
                return N
            },
            zt: function() {
                return T
            },
            t$: function() {
                return M
            },
            Jo: function() {
                return C
            },
            MZ: function() {
                return L
            },
            np: function() {
                return y
            },
            gc: function() {
                return k
            },
            jt: function() {
                return R
            },
            Ww: function() {
                return w
            },
            iN: function() {
                return A
            },
            FH: function() {
                return Z
            },
            KI: function() {
                return b
            },
            V5: function() {
                return P
            },
            AD: function() {
                return U
            }
        });
        var r = t(937)
          , a = t(59895)
          , i = t.n(a)
          , o = t(22997)
          , s = t.n(o)
          , l = t(66482)
          , u = t.n(l)
          , c = t(75386)
          , d = t.n(c)
          , v = t(70355)
          , f = t.n(v)
          , _ = t(55239)
          , E = t.n(_)
          , p = t(63199)
          , m = t.n(p)
          , h = t(20822)
          , I = t(57873)
          , g = t(96146)
          , S = t(64296)
          , O = h.m.ConversationType;
        O.GROUP_CHAT,
        O.ONE_TO_ONE_CHAT;
        function N(e) {
            var n = e.height
              , t = e.id
              , r = e.width
              , a = (e.sticker_type,
            e.animate_type,
            e.animate_url)
              , i = {
                aweType: g.c6.AWEME_BIG_EMOJI,
                createdAt: 0,
                display_name: "",
                height: n,
                width: r,
                image_id: t,
                image_type: "gif",
                is_card: !1,
                may_show_special_effect: !1,
                msgHint: "",
                package_id: 0,
                updateConversationTime: !0,
                url: {
                    height: 0,
                    uri: null == a ? void 0 : a.uri,
                    url_list: null == a ? void 0 : a.url_list,
                    width: 0
                }
            };
            return {
                type: g.pp.BIG_EMOJI,
                content: u()(i)
            }
        }
        function T(e) {
            var n = e.height
              , t = e.id
              , r = e.width
              , a = e.animate_url
              , i = e.display_name
              , o = {
                aweType: g.c6.AWEME_BIG_EMOJI,
                createdAt: 0,
                display_name: i,
                height: n,
                width: r,
                image_id: t,
                image_type: "gif",
                is_card: !1,
                may_show_special_effect: !1,
                msgHint: "",
                package_id: 0,
                updateConversationTime: !0,
                url: {
                    height: 0,
                    uri: null == a ? void 0 : a.uri,
                    url_list: null == a ? void 0 : a.url_list,
                    width: 0
                }
            };
            return {
                type: g.pp.BIG_EMOJI,
                content: u()(o)
            }
        }
        function M(e) {
            var n = e.content
              , t = {};
            try {
                t = JSON.parse(n)
            } catch (r) {
                t = {}
            }
            return t
        }
        function C(e) {
            var n = e.referenceInfo
              , t = {};
            if (n) {
                var r = n.hint;
                try {
                    var a = JSON.parse(r).refmsg_content;
                    a && (t = JSON.parse(a))
                } catch (i) {
                    t = {}
                }
            }
            return t
        }
        function L(e) {
            return function(e) {
                var n = e.text
                  , t = e.textExtra
                  , r = void 0 === t ? [] : t
                  , a = e.content
                  , i = e.type
                  , o = e.referenceHint
                  , l = e.referenceMessage
                  , c = [];
                s()(r, (function(e) {
                    var n, t = null == e || null === (n = e.info) || void 0 === n ? void 0 : n.uid;
                    t && c.push(t)
                }
                ));
                var d = {
                    mention_users: c,
                    aweType: g.c6.AWEME_TEXT,
                    richTextInfos: r
                };
                l && (d.aweType = g.c6.TEXT_REF_MSG),
                n && (d.text = n);
                var v = {
                    type: i || g.pp.TEXT,
                    mentionedUsers: c,
                    content: a || u()(d)
                };
                return l && (v.referenceHint = u()(o),
                v.referenceMessage = l),
                v
            }(e)
        }
        function y(e) {
            var n, t = e || {}, r = t.active_users, a = t.passive_users, i = t.locale_resources, o = (null == i || null === (n = i[0]) || void 0 === n ? void 0 : n.text) || "", l = I.Z.curUserInfo, u = [];
            s()(r, (function(e) {
                var n = (null == e ? void 0 : e.nickname) || "";
                null != l && l.uid && (null == l ? void 0 : l.uid) === (null == e ? void 0 : e.uid) && (n = "\u4f60"),
                u.push(n)
            }
            ));
            var c = [];
            return s()(a, (function(e) {
                var n = (null == e ? void 0 : e.nickname) || "";
                null != l && l.uid && (null == l ? void 0 : l.uid) === (null == e ? void 0 : e.uid) && (n = "\u4f60"),
                c.push(n)
            }
            )),
            o.replace("{0}", u.join("\u3001")).replace("{1}", c.join("\u3001"))
        }
        function k(e) {
            var n, t, r, a, i, o, s, l, u, c, d = "";
            if (!e)
                return d;
            var v = e.type
              , f = (e.visible,
            e.isFromMe)
              , _ = e.content;
            e.sender,
            e.conversationId,
            e.conversationType;
            if (e.isRecalled)
                return "".concat(f ? "\u4f60" : "", "\u64a4\u56de\u4e86\u4e00\u6761\u6d88\u606f");
            var E = {};
            try {
                E = JSON.parse(_)
            } catch (h) {}
            switch (v) {
            case g.pp.SYSTEM:
                d = P(null === (n = E) || void 0 === n ? void 0 : n.tips, null === (t = E) || void 0 === t ? void 0 : t.template) || "";
                break;
            case g.pp.BIG_EMOJI:
                d = "[".concat((null === (r = E) || void 0 === r ? void 0 : r.display_name) || "\u8868\u60c5", "]");
                break;
            case g.pp.TEXT:
                d = (null === (a = E) || void 0 === a ? void 0 : a.text) || "";
                break;
            case g.pp.SHARE_AWEME:
                d = "\u5206\u4eab[\u89c6\u9891]";
                break;
            case g.pp.SAY_HELLO:
                var p = "\u6211\u662f".concat(null === (i = E) || void 0 === i ? void 0 : i.nickname, "\uff0c") || 0;
                d = "\u55e8\uff5e ".concat(p, "\u804a\u804a\u5929\u5427");
                break;
            case g.pp.VOICE:
            case g.pp.IM_ENCRYPT_VOICE:
                d = "[\u8bed\u97f3]";
                break;
            case g.pp.SHARE_LIVE:
                var m;
                if (d = "\u5206\u4eab[\u76f4\u64ad]",
                null !== (o = E) && void 0 !== o && o.push_detail)
                    d += "\uff1a".concat(null === (m = E) || void 0 === m ? void 0 : m.push_detail);
                break;
            case g.pp.STORY_PICTURE:
                d = "[\u56fe\u7247]";
                break;
            case g.pp.XPLAN_STICKER_EMOJI:
                d = "[".concat((null === (s = E) || void 0 === s ? void 0 : s.display_name) || "\u8868\u60c5", "]");
                break;
            case g.pp.SHARE_PHOTOS:
                d = "\u5206\u4eab[\u56fe\u96c6]";
                break;
            case g.pp.REF_MSG:
                d = "".concat((null === (l = E) || void 0 === l ? void 0 : l.shareMsgType) === g.pp.SHARE_PHOTOS ? "\u5206\u4eab[\u56fe\u96c6]" : "\u5206\u4eab[\u89c6\u9891]");
                break;
            case g.pp.GROUP_NOTICE_MESSAGE:
                d = y(E);
                break;
            case g.pp.GROUP_GREET_MESSAGE:
                d = "\u548c\u670b\u53cb\u6253\u4e2a\u62db\u547c\u5427";
                break;
            case g.pp.GROUP_ANNOUNCEMENT_MESSAGE:
                d = "[\u7fa4\u516c\u544a]".concat((null === (u = E) || void 0 === u ? void 0 : u.notice_content) || "");
                break;
            case g.pp.SHARE_USER:
                d = "[\u5206\u4eab\u7528\u6237]".concat((null === (c = E) || void 0 === c ? void 0 : c.name) || "");
                break;
            default:
                d = "\u6682\u4e0d\u652f\u6301\u8be5\u6d88\u606f\u7c7b\u578b"
            }
            return d
        }
        function R(e) {
            var n, t = "";
            if (!e)
                return t;
            e.type,
            e.visible,
            e.isFromMe,
            e.content;
            var r, a, i = e.sender, o = e.conversationId, s = (e.isRecalled,
            e.conversationType,
            I.Z.unSendMsgConversationMap,
            I.Z.userInfoFromSdkMap), l = I.Z.userInfoFromServerMap;
            a = k(e);
            var u = null == s || null === (n = s[o]) || void 0 === n ? void 0 : n[i]
              , c = null == l ? void 0 : l[i];
            return (r = (null == c ? void 0 : c.remark_name) || (null == u ? void 0 : u.alias) || (null == c ? void 0 : c.nickname) || "") && (t += "".concat(r, ":")),
            a && (t += a),
            t || ""
        }
        function w(e, n) {
            var t = e.type
              , a = e.content
              , i = e.sender
              , o = (I.Z.unSendMsgConversationMap,
            I.Z.curUserInfo)
              , s = (I.Z.abTestData,
            I.Z.curConversation)
              , l = (I.Z.userInfoFromSdkMap,
            I.Z.userInfoFromServerMap[i])
              , u = l.uid
              , c = l.sec_uid
              , d = l.nickname
              , v = l.remark_name
              , f = (s.type,
            o.uid)
              , _ = {};
            try {
                _ = JSON.parse(a)
            } catch (O) {}
            var E, p = {}, m = "", h = 0;
            switch (t) {
            case g.pp.BIG_EMOJI:
                p = {
                    content: "[\u8868\u60c5]",
                    refmsg_content: a
                };
                break;
            case g.pp.TEXT:
                p = {
                    content: _.text,
                    refmsg_content: a
                };
                break;
            case g.pp.SHARE_AWEME:
                h = 1,
                p = {
                    content: "[\u5206\u4eab\u89c6\u9891]".concat(_.content_title),
                    refmsg_content: a
                };
                break;
            case g.pp.STORY_PICTURE:
                p = {
                    content: "[\u56fe\u7247]",
                    refmsg_content: a
                },
                m = _.itemId;
                break;
            case g.pp.XPLAN_STICKER_EMOJI:
                p = {
                    content: "[\u8868\u60c5]",
                    refmsg_content: a
                };
                break;
            case g.pp.SHARE_PHOTOS:
                p = {
                    content: "[\u5206\u4eab\u56fe\u96c6]".concat(_.content_title),
                    refmsg_content: a
                };
                break;
            default:
                return !1
            }
            return E = f !== u ? S.dx.SCENE_TYPE_REPLY_OTHER : S.dx.SCENE_TYPE_REPLY_SELF,
            (0,
            r.Z)((0,
            r.Z)({
                refmsg_uid: u,
                itemId: m,
                nickname: v || d,
                refmsg_sec_uid: c,
                refmsg_type: t
            }, p), {}, {
                scene_type: E,
                version: h
            })
        }
        var A = function(e) {
            return d()() - new Date(e).getTime() <= 2592e5
        }
          , Z = function(e) {
            return !(e >= 0 && e <= 1999 || e > 5e4 && 60001 !== e)
        }
          , b = function(e, n) {
            if (!e)
                return [];
            if (null == n || !n.length)
                return [e];
            var t = {};
            s()(n, (function(e) {
                var n = "{{".concat(null == e ? void 0 : e.key, "}}");
                t[n] = e
            }
            ));
            var r = e.match(/{{\d+}}/g)
              , a = [e];
            return s()(r, (function(e) {
                var n, r, o, l;
                n = a,
                r = e,
                o = t[e],
                l = [],
                s()(n, (function(e) {
                    if (i()(e)) {
                        var n = e.split(r)
                          , t = n.length
                          , a = [];
                        t > 1 ? (s()(n, (function(e, n) {
                            n === t - 1 ? a.push(e) : (a.push(e),
                            a.push(o))
                        }
                        )),
                        l = f()(l).call(l, a)) : l.push(e)
                    } else
                        l.push(e)
                }
                )),
                a = l
            }
            )),
            a
        };
        function P(e, n) {
            var t = String(e);
            return E()(n) && m()(n).call(n, (function(e) {
                t = t.replace("{{".concat(null == e ? void 0 : e.key, "}}"), null == e ? void 0 : e.name)
            }
            )),
            t
        }
        function U(e, n, t) {
            var r, a = e.content, i = e.sender;
            try {
                r = JSON.parse(a)
            } catch (I) {
                r = {}
            }
            var o = r
              , s = o.content_title
              , l = o.cover_height
              , c = o.cover_url
              , d = o.cover_width
              , v = o.is_card
              , f = o.itemId
              , _ = o.msgHint
              , E = o.push_detail
              , p = o.uid
              , m = o.secUID
              , h = {
                aweType: g.c6.REF_MSG,
                scene_type: S.dx.SCENE_TYPE_REPLY_INPUT,
                content_title: s,
                cover_height: l,
                cover_width: d,
                cover_url: c,
                is_card: v,
                itemId: f,
                msgHint: _,
                push_detail: E,
                createdAt: 0,
                text: n,
                richTextInfos: t,
                ref_uid: i,
                uid: p,
                sec_uid: m
            };
            return {
                type: g.pp.REF_MSG,
                content: u()(h)
            }
        }
    },
    5226: function(e, n, t) {
        t.d(n, {
            xS: function() {
                return _
            },
            lD: function() {
                return E
            },
            v1: function() {
                return p
            }
        });
        var r = t(75386)
          , a = t.n(r)
          , i = t(70355)
          , o = t.n(i)
          , s = t(5700)
          , l = t.n(s)
          , u = t(73762)
          , c = t.n(u);
        l().extend(c());
        var d, v, f = {
            0: "\u661f\u671f\u65e5",
            1: "\u661f\u671f\u4e00",
            2: "\u661f\u671f\u4e8c",
            3: "\u661f\u671f\u4e09",
            4: "\u661f\u671f\u56db",
            5: "\u661f\u671f\u4e94",
            6: "\u661f\u671f\u516d"
        };
        function _(e) {
            if (a()() - new Date(e).getTime() <= 3e5)
                return "\u521a\u521a";
            var n = l()(e)
              , t = l()()
              , r = n.format("HH:mm") || "";
            if (e > t.startOf("day").valueOf())
                return r;
            if (e > t.subtract(1, "day").startOf("day").valueOf())
                return "\u6628\u5929";
            if (e >= t.subtract(3, "day").startOf("day").valueOf()) {
                var i = n.day();
                return f[i]
            }
            return e >= t.startOf("year").valueOf() ? n.format("MM-DD") || "" : n.format("YYYY-MM-DD") || ""
        }
        function E(e) {
            if (a()() - new Date(e).getTime() <= 3e5)
                return "\u521a\u521a";
            var n = l()(e)
              , t = l()()
              , r = n.format("HH:mm") || "";
            if (e > t.startOf("day").valueOf())
                return r;
            if (e > t.subtract(1, "day").startOf("day").valueOf())
                return "\u6628\u5929 ".concat(r);
            if (e >= t.subtract(3, "day").startOf("day").valueOf()) {
                var i, s = n.day();
                return o()(i = "".concat(f[s], " ")).call(i, r)
            }
            return n.format("YYYY-MM-DD HH:mm") || ""
        }
        function p(e) {
            return a()() - new Date(e).getTime() <= 3e5
        }
        !function(e) {
            e.add = "add",
            e.sub = "subtract"
        }(d || (d = {})),
        function(e) {
            e.m = "minute",
            e.h = "hour",
            e.d = "day",
            e.w = "week"
        }(v || (v = {}))
    },
    57873: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return re
            }
        });
        var r = t(46040)
          , a = t(22545)
          , i = t(26015)
          , o = t(937)
          , s = t(37491)
          , l = t(59967)
          , u = t(85116)
          , c = t(44074)
          , d = t.n(c)
          , v = t(76457)
          , f = t.n(v)
          , _ = t(22997)
          , E = t.n(_)
          , p = t(45969)
          , m = t.n(p)
          , h = t(44742)
          , I = t.n(h)
          , g = t(4200)
          , S = t.n(g)
          , O = t(61972)
          , N = t.n(O)
          , T = t(83009)
          , M = t.n(T)
          , C = t(21271)
          , L = t.n(C)
          , y = t(70355)
          , k = t.n(y)
          , R = t(63199)
          , w = t.n(R)
          , A = t(57101)
          , Z = t.n(A)
          , b = t(65346)
          , P = t.n(b)
          , U = t(75386)
          , D = t.n(U)
          , G = t(49252)
          , x = t(20822)
          , F = t(51765)
          , V = t(2313)
          , H = t(64296)
          , W = t(68399)
          , B = function(e, n) {
            return (null == e ? void 0 : e.updatedAt) > (null == n ? void 0 : n.updatedAt)
        }
          , Y = function e(n, t) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
              , a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (null == n ? void 0 : n.length) || 0;
            if (a <= r)
                return r;
            var i = Math.floor((r + a) / 2);
            return B(n[i], t) ? r = i + 1 : a = i,
            e(n, t, r, a)
        }
          , j = t(96146)
          , K = t(8642)
          , J = t(64790)
          , q = t(40549)
          , z = t(76468)
          , X = t(93714)
          , Q = t(55042)
          , $ = x.m.ConversationType
          , ee = $.GROUP_CHAT
          , ne = $.ONE_TO_ONE_CHAT
          , te = function() {
            function e() {
                var n = this;
                (0,
                s.Z)(this, e),
                (0,
                u.Z)(this, "theme", H.rS.light),
                (0,
                u.Z)(this, "curUserInfo", {}),
                (0,
                u.Z)(this, "abTestData", {}),
                (0,
                u.Z)(this, "isLogin", !1),
                (0,
                u.Z)(this, "showDlg", !1),
                (0,
                u.Z)(this, "isShareCollapse", !0),
                (0,
                u.Z)(this, "audioMd5", ""),
                (0,
                u.Z)(this, "converSationListOrigin", []),
                (0,
                u.Z)(this, "conversationMap", {}),
                (0,
                u.Z)(this, "isInStrangerConversationList", !1),
                (0,
                u.Z)(this, "curConversation", null),
                (0,
                u.Z)(this, "strangerBoxCover", null),
                (0,
                u.Z)(this, "enterConversation", H.eY.CHAT_NOTIFY),
                (0,
                u.Z)(this, "messageList", []),
                (0,
                u.Z)(this, "curMsgOptPopId", ""),
                (0,
                u.Z)(this, "curGroupUserIdList", []),
                (0,
                u.Z)(this, "conversationUserids", {}),
                (0,
                u.Z)(this, "uidSecUidMap", {}),
                (0,
                u.Z)(this, "userInfoFromSdkMap", {}),
                (0,
                u.Z)(this, "userInfoFromServerMap", {}),
                (0,
                u.Z)(this, "unSendMsgConversationMap", {}),
                (0,
                u.Z)(this, "serverIdMessageMap", {}),
                (0,
                u.Z)(this, "emojiMap", {}),
                (0,
                u.Z)(this, "emojiList", []),
                (0,
                u.Z)(this, "emojiGifList", []),
                (0,
                u.Z)(this, "allFriendsList", []),
                (0,
                u.Z)(this, "userInfoForShareMap", {}),
                (0,
                u.Z)(this, "msgListToPush", []),
                (0,
                u.Z)(this, "awemeInfo", {}),
                (0,
                u.Z)(this, "shareType", Q.yw.Video),
                (0,
                u.Z)(this, "shareUserInfo", {}),
                (0,
                u.Z)(this, "shareMap", {}),
                (0,
                u.Z)(this, "replayMessageServerId", null),
                (0,
                u.Z)(this, "strangerMessageUnreadCount", 0),
                (0,
                u.Z)(this, "isStrangerConversation", !1),
                (0,
                u.Z)(this, "shareStatusHandler", {
                    handleCollapse: function() {},
                    handleExpand: function() {}
                }),
                (0,
                u.Z)(this, "hasJoinGroupObj", {
                    conversation: [],
                    cursor: "0",
                    hasMore: !0,
                    loading: !1
                }),
                (0,
                u.Z)(this, "strangerConverListObj", {
                    conversation: [],
                    cursor: "0",
                    hasMore: !0,
                    loading: !1,
                    unreadCount: 0
                }),
                (0,
                u.Z)(this, "canShowImPush", !0),
                (0,
                u.Z)(this, "userFollowStatusMap", {}),
                (0,
                u.Z)(this, "selectChatUserShortId", ""),
                (0,
                u.Z)(this, "isOpenMessageList", !0),
                (0,
                u.Z)(this, "maskIsTestGroupClickConversionListItem", !1),
                (0,
                u.Z)(this, "maskConversaionAnimationEnd", !1),
                (0,
                u.Z)(this, "maskIsExitConversation", !1),
                (0,
                u.Z)(this, "changeConversationItemStatus", !1),
                (0,
                u.Z)(this, "saveStrageConversaionInfo", {
                    list: [],
                    index: -1
                }),
                (0,
                u.Z)(this, "isShowGetConversaionListLoading", !0),
                (0,
                u.Z)(this, "setSelectChatUserShortId", (function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    n.selectChatUserShortId = e
                }
                )),
                (0,
                u.Z)(this, "setIsOpenMessageList", (function(e) {
                    (0,
                    J.Gb)("click_fold_im", {
                        is_fold: Number(!e)
                    }),
                    n.isOpenMessageList = e
                }
                )),
                (0,
                u.Z)(this, "setMaskIsTestGroupClickConversionListItem", (function(e) {
                    n.maskIsTestGroupClickConversionListItem = e
                }
                )),
                (0,
                u.Z)(this, "setMaskConversaionAnimationEnd", (function() {
                    var e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
                    n.maskConversaionAnimationEnd = Boolean(e)
                }
                )),
                (0,
                u.Z)(this, "setMaskIsExitConversation", (function() {
                    n.maskIsExitConversation = !0
                }
                )),
                (0,
                u.Z)(this, "setChangeConversationItemStatus", (function(e) {
                    n.changeConversationItemStatus = e
                }
                )),
                (0,
                u.Z)(this, "setSaveStrageConversaionInfo", (function(e) {
                    n.saveStrageConversaionInfo = (0,
                    o.Z)((0,
                    o.Z)({}, n.saveStrageConversaionInfo), e)
                }
                )),
                (0,
                u.Z)(this, "setIsShowGetConversaionListLoading", (function(e) {
                    n.isShowGetConversaionListLoading = e
                }
                )),
                (0,
                G.ky)(this, {
                    theme: G.LO,
                    curUserInfo: G.LO,
                    abTestData: G.LO.shallow,
                    isLogin: G.LO,
                    showDlg: G.LO,
                    isShareCollapse: G.LO,
                    audioMd5: G.LO,
                    converSationListOrigin: G.LO,
                    curConversation: G.LO,
                    enterConversation: G.LO,
                    messageList: G.LO,
                    curMsgOptPopId: G.LO,
                    curGroupUserIdList: G.LO,
                    conversationUserids: G.LO,
                    uidSecUidMap: G.LO,
                    userInfoFromSdkMap: G.LO,
                    userInfoFromServerMap: G.LO,
                    userInfoForShareMap: G.LO,
                    unSendMsgConversationMap: G.LO,
                    serverIdMessageMap: G.LO,
                    emojiMap: G.LO,
                    emojiList: G.LO,
                    emojiGifList: G.LO,
                    allFriendsList: G.LO,
                    msgListToPush: G.LO,
                    awemeInfo: G.LO,
                    shareMap: G.LO,
                    replayMessageServerId: G.LO,
                    shareStatusHandler: G.LO,
                    hasJoinGroupObj: G.LO,
                    isInStrangerConversationList: G.LO,
                    strangerBoxCover: G.LO,
                    strangerMessageUnreadCount: G.LO,
                    conversationMap: G.LO,
                    strangerConverListObj: G.LO,
                    isStrangerConversation: G.LO,
                    canShowImPush: G.LO,
                    userFollowStatusMap: G.LO,
                    selectChatUserShortId: G.LO,
                    isOpenMessageList: G.LO,
                    maskIsTestGroupClickConversionListItem: G.LO,
                    maskConversaionAnimationEnd: G.LO,
                    maskIsExitConversation: G.LO,
                    changeConversationItemStatus: G.LO,
                    saveStrageConversaionInfo: G.LO,
                    isShowGetConversaionListLoading: G.LO,
                    conversationListFilter: G.Fl,
                    allUnReadCount: G.Fl,
                    allGroupList: G.Fl,
                    conversationInfoMap: G.Fl,
                    allFriendInfoList: G.Fl,
                    usersInConversationList: G.Fl,
                    strongNoticeList: G.Fl,
                    converListWithStrangerBox: G.Fl,
                    stickOnTopCount: G.Fl,
                    videoMsgList: G.Fl,
                    setIsLogin: G.aD,
                    setDlgShow: G.aD,
                    setShareCollapse: G.aD,
                    setCurShareType: G.aD,
                    setCurAwemeInfo: G.aD,
                    setCurShareUserInfo: G.aD,
                    setShareMap: G.aD,
                    setShareStatusHandler: G.aD,
                    resetData: G.aD,
                    setAudioMd5: G.aD,
                    setConverSationList: G.aD,
                    setCurConverSation: G.aD,
                    setCurMessageList: G.aD,
                    setCurMsgOptPopId: G.aD,
                    setCurGroupUserIdList: G.aD,
                    setConversationUserids: G.aD,
                    setUserInfoFromSdkMap: G.aD,
                    setUserInfoFromServerMap: G.aD,
                    setUserInfoForShareMap: G.aD,
                    setUnSendMsgConversation: G.aD,
                    clearOldMsgListToPush: G.aD,
                    closeMsgPushPop: G.aD,
                    setUserInfoBlockStatus: G.aD,
                    setReplayMessageServerId: G.aD,
                    setHasJoinGroup: G.aD,
                    setIsInStrangerConversationList: G.aD,
                    setStrangerBoxCover: G.aD,
                    setStrangerMessageUnreadCount: G.aD,
                    setConversationMap: G.aD,
                    setStrangerConverListObj: G.aD,
                    setIsStrangerConversation: G.aD,
                    setCanShowImPush: G.aD,
                    setUserFollowStatusMap: G.aD,
                    setSelectChatUserShortId: G.aD,
                    setIsOpenMessageList: G.aD,
                    setMaskIsTestGroupClickConversionListItem: G.aD,
                    setMaskConversaionAnimationEnd: G.aD,
                    setMaskIsExitConversation: G.aD,
                    setChangeConversationItemStatus: G.aD,
                    setSaveStrageConversaionInfo: G.aD,
                    setIsShowGetConversaionListLoading: G.aD,
                    getUserInfoMapAsync: G.aD,
                    getShareUserListAsync: G.aD,
                    getEmojiGifListAsync: G.aD,
                    pushNewMsgInList: G.aD
                })
            }
            var n, t, c, v, _, p, h, g, O, T;
            return (0,
            l.Z)(e, [{
                key: "conversationListFilter",
                get: function() {
                    var e = this.converSationListOrigin || []
                      , n = [];
                    return E()(e, (function(e) {
                        e && (e.type !== ee || e.type === ee && e.lastMessage) && n.push(e)
                    }
                    )),
                    F.Z.warn("conversationListFilter", n),
                    n
                }
            }, {
                key: "stickOnTopCount",
                get: function() {
                    var e, n = this.conversationListFilter || [], t = 0, r = (0,
                    i.Z)(n);
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var a = e.value;
                            if (null == a || !a.isStickOnTop)
                                break;
                            t++
                        }
                    } catch (o) {
                        r.e(o)
                    } finally {
                        r.f()
                    }
                    return t
                }
            }, {
                key: "converListWithStrangerBox",
                get: function() {
                    var e, n, t = (null === (e = this.conversationListFilter) || void 0 === e ? void 0 : S()(e).call(e)) || [], r = this.stickOnTopCount || 0, a = (null === (n = this.conversationListFilter) || void 0 === n ? void 0 : n.length) || 0;
                    if (this.strangerBoxCover) {
                        var i, o = Y(t, null === (i = this.strangerBoxCover) || void 0 === i ? void 0 : i.conversation, r, a);
                        null == t || N()(t).call(t, o, 0, this.strangerBoxCover)
                    }
                    return t
                }
            }, {
                key: "allUnReadCount",
                get: function() {
                    return m()(this.conversationListFilter, (function(e) {
                        var n = e.isMuted;
                        e.unreadCount;
                        return n ? 0 : (null == e ? void 0 : e.unreadCount) || 0
                    }
                    ))
                }
            }, {
                key: "allGroupList",
                get: function() {
                    var e = [];
                    return E()(this.conversationListFilter, (function(n) {
                        n.id;
                        n.type === ee && e.push(n)
                    }
                    )),
                    d()(e, (function(e) {
                        return null == e ? void 0 : e.id
                    }
                    ))
                }
            }, {
                key: "conversationInfoMap",
                get: function() {
                    var e = {};
                    return E()(this.converSationListOrigin, (function(n) {
                        var t = n.id;
                        n.type;
                        e[t] = n
                    }
                    )),
                    e
                }
            }, {
                key: "usersInConversationList",
                get: function() {
                    var e = [];
                    return E()(this.converSationListOrigin, (function(n) {
                        var t = n.id
                          , r = n.type
                          , a = n.toParticipantUserId;
                        a && r === ne && e.push({
                            uid: a,
                            conversationId: t
                        })
                    }
                    )),
                    d()(e, (function(e) {
                        return null == e ? void 0 : e.uid
                    }
                    ))
                }
            }, {
                key: "strongNoticeList",
                get: function() {
                    var e = [];
                    return E()(this.messageList, (function(n) {
                        var t, r = (0,
                        K.t$)(n);
                        null != n && n.isFromMe || null == r || null === (t = r.ext) || void 0 === t || !t.strong_tips || e.push({
                            contentObj: r,
                            msg: n
                        })
                    }
                    )),
                    e
                }
            }, {
                key: "allFriendInfoList",
                get: function() {
                    var e = []
                      , n = this.allFriendsList || []
                      , t = this.userInfoFromServerMap || {};
                    return E()(n, (function(n) {
                        var r = null == t ? void 0 : t[n];
                        r && e.push(r)
                    }
                    )),
                    d()(e, (function(e) {
                        return null == e ? void 0 : e.uid
                    }
                    ))
                }
            }, {
                key: "videoMsgList",
                get: function() {
                    var e = [];
                    return E()(this.messageList, (function(n) {
                        var t = n || {}
                          , r = t.type
                          , a = t.clientId;
                        if (!t.isRecalled && null !== j.ds && void 0 !== j.ds && M()(j.ds).call(j.ds, r)) {
                            var i = ((0,
                            K.t$)(n) || {}).itemId;
                            e.push({
                                awemeId: i,
                                msgClientId: a
                            })
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "setTheme",
                value: function(e) {
                    this.theme = e
                }
            }, {
                key: "setCurUserInfo",
                value: function(e) {
                    this.curUserInfo = e
                }
            }, {
                key: "setIsLogin",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.isLogin = e
                }
            }, {
                key: "setDlgShow",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.showDlg = e
                }
            }, {
                key: "setAbTestData",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.abTestData = e
                }
            }, {
                key: "setShareCollapse",
                value: function() {
                    var e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0]
                      , n = this.shareStatusHandler
                      , t = n.handleCollapse
                      , r = void 0 === t ? function() {}
                    : t
                      , a = n.handleExpand
                      , i = void 0 === a ? function() {}
                    : a;
                    this.isShareCollapse = e,
                    e ? null == r || r() : null == i || i()
                }
            }, {
                key: "setCurShareType",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Q.yw.Video;
                    this.shareType = e
                }
            }, {
                key: "setCurAwemeInfo",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.awemeInfo = e
                }
            }, {
                key: "setCurShareUserInfo",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.shareUserInfo = e
                }
            }, {
                key: "setShareStatusHandler",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                        handleCollapse: function() {},
                        handleExpand: function() {}
                    };
                    this.shareStatusHandler = e
                }
            }, {
                key: "setShareMap",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.shareMap = e
                }
            }, {
                key: "resetData",
                value: function() {}
            }, {
                key: "setAudioMd5",
                value: function(e) {
                    this.audioMd5 = e
                }
            }, {
                key: "setConverSationList",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    this.setIsShowGetConversaionListLoading(!0);
                    for (var n = d()(e, (function(e) {
                        return null == e ? void 0 : e.id
                    }
                    )), t = 0, r = n.length, a = 0; a < r; a++) {
                        var i = n[a];
                        if (null == i || !i.isStickOnTop) {
                            t = a;
                            break
                        }
                    }
                    var o = [];
                    t > 0 && (o = N()(n).call(n, 0, t),
                    L()(o).call(o, (function(e, n) {
                        var t, r, a = (null == e || null === (t = e.lastMessage) || void 0 === t ? void 0 : t.createdAt) || 0;
                        return ((null == n || null === (r = n.lastMessage) || void 0 === r ? void 0 : r.createdAt) || 0) - a
                    }
                    ))),
                    this.converSationListOrigin = k()(o).call(o, n)
                }
            }, {
                key: "setCurConverSation",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.curConversation = e,
                    this.serverIdMessageMap = {},
                    this.setIsStrangerConversation((null == e ? void 0 : e.isStrangerConversation) || !1)
                }
            }, {
                key: "setEnterConversation",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : H.eY.CHAT_NOTIFY;
                    this.enterConversation = e
                }
            }, {
                key: "setCurMessageList",
                value: function() {
                    var e = this
                      , n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    this.serverIdMessageMap = {},
                    this.messageList = d()(n, (function(n) {
                        var t = n || {}
                          , r = t.serverId
                          , a = t.clientId;
                        return r && (e.serverIdMessageMap[r] = n),
                        a
                    }
                    ))
                }
            }, {
                key: "setStrangerConverListObj",
                value: function(e) {
                    this.strangerConverListObj = e
                }
            }, {
                key: "setConversationMap",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
                      , n = this.conversationMap || {};
                    null == e || w()(e).call(e, (function(e) {
                        var t = e.id;
                        n[t] = e
                    }
                    )),
                    this.conversationMap = n
                }
            }, {
                key: "setIsInStrangerConversationList",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.isInStrangerConversationList = e
                }
            }, {
                key: "setIsStrangerConversation",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.isStrangerConversation = e
                }
            }, {
                key: "setStrangerBoxCover",
                value: function(e) {
                    var n = e ? {
                        conversation: e,
                        converCellType: H.tQ.STRANGER
                    } : null;
                    this.strangerBoxCover = n
                }
            }, {
                key: "setStrangerMessageUnreadCount",
                value: function(e) {
                    this.strangerMessageUnreadCount = e
                }
            }, {
                key: "setCurMsgOptPopId",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    this.curMsgOptPopId = e
                }
            }, {
                key: "setCurGroupUserIdList",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    this.curGroupUserIdList = f()(e)
                }
            }, {
                key: "setConversationUserids",
                value: function(e) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                    this.conversationUserids[e] = f()(n)
                }
            }, {
                key: "setUserInfoFromSdkMap",
                value: function(e, n, t) {
                    this.userInfoFromSdkMap || (this.userInfoFromSdkMap = {}),
                    this.userInfoFromSdkMap[e] || (this.userInfoFromSdkMap[e] = {}),
                    this.userInfoFromSdkMap[e][n] || (this.userInfoFromSdkMap[e][n] = t,
                    this.uidSecUidMap[n] = t.sec_uid)
                }
            }, {
                key: "setUserInfoFromServerMap",
                value: function() {
                    var e = this
                      , n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    n && E()(n, (function(n) {
                        var t = n.uid;
                        t && "0" !== t && (e.userInfoFromServerMap[t] = n)
                    }
                    ))
                }
            }, {
                key: "setUserInfoForShareMap",
                value: function() {
                    var e = this
                      , n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    n && (this.userInfoForShareMap = this.userInfoForShareMap || {},
                    E()(n, (function(n) {
                        var t = n.uid;
                        t && "0" !== t && (e.userInfoForShareMap[t] = n)
                    }
                    )))
                }
            }, {
                key: "setUserInfoBlockStatus",
                value: function(e) {
                    var n, t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                    null !== (n = this.userInfoFromServerMap) && void 0 !== n && n[e] && (this.userInfoFromServerMap[e].is_block = t)
                }
            }, {
                key: "setReplayMessageServerId",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    this.replayMessageServerId = e
                }
            }, {
                key: "setUnSendMsgConversation",
                value: function(e) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    e && (n ? this.unSendMsgConversationMap[e] = n : delete this.unSendMsgConversationMap[e])
                }
            }, {
                key: "setMultiUnSendMsgConversation",
                value: function() {
                    var e = this
                      , n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    w()(n).call(n, (function(n) {
                        var t = n.conversationId
                          , r = n.text
                          , a = n.textExtra
                          , i = n.replyMsgServerId;
                        t && (e.unSendMsgConversationMap[t] = {
                            text: r,
                            textExtra: a,
                            replyMsgServerId: i
                        })
                    }
                    ))
                }
            }, {
                key: "clearOldMsgListToPush",
                value: function() {
                    var e, n, t = (null === (e = this.msgListToPush) || void 0 === e ? void 0 : e.length) || 0;
                    t <= 1 || null === (n = this.msgListToPush) || void 0 === n || N()(n).call(n, 0, t - 1)
                }
            }, {
                key: "clearAllPushList",
                value: function() {
                    this.msgListToPush = []
                }
            }, {
                key: "closeMsgPushPop",
                value: function(e) {
                    var n, t;
                    if (null !== (n = this.msgListToPush) && void 0 !== n && n.length) {
                        var r = 0;
                        E()(this.msgListToPush, (function(n, t) {
                            (null == n ? void 0 : n.conversationId) === e && (r = t)
                        }
                        )),
                        null === (t = this.msgListToPush) || void 0 === t || N()(t).call(t, r, 1)
                    }
                }
            }, {
                key: "setHasJoinGroup",
                value: function(e) {
                    this.hasJoinGroupObj = e
                }
            }, {
                key: "setCanShowImPush",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.canShowImPush = e
                }
            }, {
                key: "setUserFollowStatusMap",
                value: function(e, n) {
                    e && (this.userFollowStatusMap[e] = n)
                }
            }, {
                key: "getUserInfoMapAsync",
                value: (T = (0,
                a.Z)(I().mark((function e() {
                    var n, t = this, i = arguments;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                n = i.length > 0 && i[0] !== undefined ? i[0] : [],
                                E()(n, function() {
                                    var e = (0,
                                    a.Z)(I().mark((function e(n) {
                                        var a, i, o;
                                        return I().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!n) {
                                                        e.next = 8;
                                                        break
                                                    }
                                                    return e.next = 3,
                                                    (0,
                                                    W.Z)((0,
                                                    z.RK)(n));
                                                case 3:
                                                    a = e.sent,
                                                    (i = (0,
                                                    r.Z)(a, 2))[0],
                                                    (o = i[1]) && t.setUserInfoFromServerMap([o]);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                function() {
                    return T.apply(this, arguments)
                }
                )
            }, {
                key: "getPatchUserInfoAsync",
                value: (O = (0,
                a.Z)(I().mark((function e(n) {
                    var t, r;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                r = null === (t = this.uidSecUidMap) || void 0 === t ? void 0 : t[n],
                                this.getUserInfoMapAsync([r]);
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e) {
                    return O.apply(this, arguments)
                }
                )
            }, {
                key: "getShareUserListAsync",
                value: (g = (0,
                a.Z)(I().mark((function e() {
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                function() {
                    return g.apply(this, arguments)
                }
                )
            }, {
                key: "getEmojiMaps",
                value: (h = (0,
                a.Z)(I().mark((function e() {
                    var n, t, a, i;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (Z()(this.emojiMap).length > 0) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 4,
                                (0,
                                W.Z)((0,
                                q.zk)());
                            case 4:
                                if (n = e.sent,
                                t = (0,
                                r.Z)(n, 2),
                                a = t[0],
                                i = t[1],
                                !a) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                0 === i.statusCode && (this.emojiMap = i.data);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return h.apply(this, arguments)
                }
                )
            }, {
                key: "getEmojiList",
                value: (p = (0,
                a.Z)(I().mark((function e() {
                    var n, t;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(this.emojiList.length > 0)) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", this.emojiList);
                            case 4:
                                return e.next = 6,
                                (0,
                                W.Z)(this.getEmojiMaps());
                            case 6:
                                return t = [],
                                w()(n = P()(this.emojiMap)).call(n, (function(e) {
                                    1 !== e.hide && t.push(e)
                                }
                                )),
                                this.emojiList = t,
                                e.abrupt("return", t);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return p.apply(this, arguments)
                }
                )
            }, {
                key: "getEmojiGifListAsync",
                value: (_ = (0,
                a.Z)(I().mark((function e() {
                    var n, t, a, i, o, s;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (null === (n = this.emojiGifList) || void 0 === n || !n.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", this.emojiGifList);
                            case 2:
                                return e.next = 4,
                                (0,
                                W.Z)((0,
                                X.xD)({}));
                            case 4:
                                if (a = e.sent,
                                i = (0,
                                r.Z)(a, 2),
                                o = i[0],
                                s = i[1],
                                !o) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", []);
                            case 10:
                                return this.emojiGifList = (null == s || null === (t = s.emoticon_data) || void 0 === t ? void 0 : t.stickers) || [],
                                e.abrupt("return", this.emojiGifList);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return _.apply(this, arguments)
                }
                )
            }, {
                key: "getUserSpotlightRelationAsync",
                value: (v = (0,
                a.Z)(I().mark((function e() {
                    var n, t, a, i, o, s, l;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                W.Z)((0,
                                z.v5)({}));
                            case 2:
                                if (t = e.sent,
                                a = (0,
                                r.Z)(t, 2),
                                i = a[0],
                                o = a[1],
                                !i) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", []);
                            case 8:
                                return s = L()(n = (null == o ? void 0 : o.followings) || []).call(n, (function(e, n) {
                                    return null != e && e.follow_status ? null != n && n.follow_status ? n.follow_status - e.follow_status : -1 : 1
                                }
                                )),
                                this.setUserInfoForShareMap(s),
                                l = [],
                                E()(s, (function(e) {
                                    var n = null == e ? void 0 : e.uid;
                                    "0" !== n && l.push(n)
                                }
                                )),
                                this.allFriendsList = l,
                                e.abrupt("return", s);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return v.apply(this, arguments)
                }
                )
            }, {
                key: "setFollowUserAsync",
                value: (c = (0,
                a.Z)(I().mark((function e(n) {
                    var t, r = arguments;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 1 && r[1] !== undefined ? r[1] : 1,
                                e.abrupt("return", (0,
                                z.P_)(n, t));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                function(e) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "setUserBlockAsync",
                value: (t = (0,
                a.Z)(I().mark((function e(n, t, r, a) {
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0,
                                z.Ox)(n, t, r, a));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                function(e, n, r, a) {
                    return t.apply(this, arguments)
                }
                )
            }, {
                key: "pushNewMsgInList",
                value: (n = (0,
                a.Z)(I().mark((function e(n, t) {
                    var r, a, i, o, s, l, u, c, d, v, f, _, E;
                    return I().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n && this.isLogin && !this.showDlg && this.canShowImPush) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (s = n.conversationId,
                                l = n.type,
                                u = n.createdAt,
                                !(0,
                                K.FH)(l)) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (!(new Date(u).getTime() + 6e4 < D()())) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return");
                            case 7:
                                if (c = this.conversationInfoMap,
                                d = null == c ? void 0 : c[s]) {
                                    e.next = 13;
                                    break
                                }
                                return e.next = 12,
                                (0,
                                V.Z)(1500);
                            case 12:
                                d = t(s);
                            case 13:
                                if (null === (r = d) || void 0 === r || null === (a = r.settingInfo) || void 0 === a || !a.mute) {
                                    e.next = 15;
                                    break
                                }
                                return e.abrupt("return");
                            case 15:
                                v = ((null === (i = this.msgListToPush) || void 0 === i ? void 0 : i.length) || 0) - 1,
                                f = null === (o = this.msgListToPush) || void 0 === o ? void 0 : o[v],
                                (_ = null == f ? void 0 : f.conversationId) && _ === s ? N()(E = this.msgListToPush).call(E, v, 1, n) : (this.msgListToPush = this.msgListToPush || [],
                                this.msgListToPush.push(n));
                            case 19:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return n.apply(this, arguments)
                }
                )
            }]),
            e
        }()
          , re = new te
    },
    51765: function(e, n, t) {
        t.d(n, {
            M: function() {
                return u
            }
        });
        var r = t(37491)
          , a = t(59967)
          , i = t(98675).uZ
          , o = function() {
            var e;
            if (i) {
                for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                    t[r] = arguments[r];
                null === (e = console) || void 0 === e || e.log.apply(e, t)
            }
        }
          , s = function() {
            var e;
            if (i) {
                for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                    t[r] = arguments[r];
                null === (e = console) || void 0 === e || e.warn.apply(e, t)
            }
        }
          , l = function() {
            var e;
            if (i) {
                o("-----\u9519\u8bef\u4fe1\u606f start-----");
                for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
                    t[r] = arguments[r];
                null === (e = console) || void 0 === e || e.error.apply(e, t),
                o("-----\u9519\u8bef\u4fe1\u606f  end -----")
            }
        }
          , u = function() {
            function e() {
                (0,
                r.Z)(this, e)
            }
            return (0,
            a.Z)(e, null, [{
                key: "log",
                value: function() {
                    o.apply(void 0, arguments)
                }
            }, {
                key: "warn",
                value: function() {
                    s.apply(void 0, arguments)
                }
            }, {
                key: "error",
                value: function() {
                    l.apply(void 0, arguments)
                }
            }]),
            e
        }();
        n.Z = u
    },
    92930: function(e, n, t) {
        t.d(n, {
            N: function() {
                return T
            }
        });
        var r = t(9706)
          , a = t(37491)
          , i = t(59967)
          , o = t(81144)
          , s = t(83567)
          , l = t(88048)
          , u = t(13819)
          , c = t(48972)
          , d = t(29992)
          , v = t.n(d)
          , f = t(59895)
          , _ = t.n(f)
          , E = t(61972)
          , p = t.n(E)
          , m = t(43180)
          , h = t.n(m)
          , I = t(4941)
          , g = t.n(I)
          , S = t(51765)
          , O = new (h())
          , N = new (g())
          , T = function() {
            function e() {
                (0,
                a.Z)(this, e),
                (0,
                o.Z)(this, N),
                (0,
                s.Z)(this, O, {
                    writable: !0,
                    value: {}
                })
            }
            return (0,
            i.Z)(e, [{
                key: "on",
                value: function(e, n) {
                    var t = this
                      , r = (0,
                    c.Z)(this, O);
                    r[e] = r[e] || [];
                    var a = r[e];
                    return this.hasOn(a, n) ? null === S.Z || void 0 === S.Z || S.Z.warn("".concat(e, " \u4e8b\u4ef6\u548c\u6b64\u56de\u8c03\uff0c\u5df2\u7ecf\u901a\u8fc7on\u7ed1\u5b9a\u8fc7\uff0c\u91cd\u590d\u7ed1\u5b9a\u7ed1\u5b9a\u88ab\u5ffd\u7565")) : a.push(n),
                    function() {
                        t.off(e, n)
                    }
                }
            }, {
                key: "once",
                value: function(e, n) {
                    var t = this;
                    if (!this.hasOn(e, n)) {
                        return this.on(e, (function r() {
                            n.apply(void 0, arguments),
                            t.off(e, r)
                        }
                        ))
                    }
                    return null === S.Z || void 0 === S.Z || S.Z.warn("".concat(e, " \u4e8b\u4ef6\u548c\u6b64\u56de\u8c03\uff0c\u5df2\u7ecf\u901a\u8fc7on\u7ed1\u5b9a\u8fc7\uff0conce\u7ed1\u5b9a\u88ab\u5ffd\u7565")),
                    function() {}
                }
            }, {
                key: "off",
                value: function(e, n) {
                    if (v()(e))
                        (0,
                        u.Z)(this, O, {});
                    else {
                        var t = (0,
                        c.Z)(this, O);
                        if (v()(n))
                            t[e] = [];
                        else {
                            var r = t[e];
                            if (null != r && r.length)
                                for (var a = r.length, i = 0; i < a; i++)
                                    if (r[i] === n)
                                        return void p()(r).call(r, i, 1)
                        }
                    }
                }
            }, {
                key: "emit",
                value: function(e) {
                    var n = (0,
                    c.Z)(this, O)
                      , t = n[e]
                      , a = null == t ? void 0 : t.length;
                    if (a) {
                        for (var i = (0,
                        r.Z)(t), o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
                            s[l - 1] = arguments[l];
                        for (var u = 0; u < a; u++)
                            i[u].apply(this, s)
                    }
                }
            }, {
                key: "hasOn",
                value: function(e, n) {
                    return -1 !== (0,
                    l.Z)(this, N, M).call(this, e, n)
                }
            }]),
            e
        }();
        function M(e, n) {
            var t, r = e;
            _()(e) && (r = (0,
            c.Z)(this, O)[e]);
            if (null === (t = r) || void 0 === t || !t.length)
                return -1;
            for (var a = r.length, i = 0; i < a; i++)
                if (r[i] === n)
                    return i;
            return -1
        }
        n.Z = T
    },
    68399: function(e, n, t) {
        t.d(n, {
            F: function() {
                return r
            }
        });
        var r = function(e) {
            return ("function" == typeof e ? e() : e).then((function(e) {
                return [null, e]
            }
            )).catch((function(e) {
                return [e || new Error("err"), undefined]
            }
            ))
        };
        n.Z = r
    },
    12028: function(e, n, t) {
        var r = t(57873);
        n.Z = function(e) {
            var n, t = r.Z.curConversation, a = r.Z.userInfoFromSdkMap, i = t.id;
            return ((null == a || null === (n = a[i]) || void 0 === n ? void 0 : n[e]) || {}).alias
        }
    },
    55388: function(e, n, t) {
        t.d(n, {
            p: function() {
                return d
            }
        });
        var r = t(46040)
          , a = t(22545)
          , i = t(44742)
          , o = t.n(i)
          , s = t(76468)
          , l = t(57873)
          , u = t(68399)
          , c = t(64296)
          , d = function() {
            var e = (0,
            a.Z)(o().mark((function e(n) {
                var t, a, i, d, v, f, _, E, p, m, h;
                return o().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", c.$u.FollowRelationUnknown);
                        case 2:
                            if (t = l.Z.uidSecUidMap,
                            !(null != (a = l.Z.userFollowStatusMap) && a[n] || 0 === (null == a ? void 0 : a[n]))) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", null == a ? void 0 : a[n]);
                        case 5:
                            if (!(i = (null == t ? void 0 : t[n]) || "")) {
                                e.next = 19;
                                break
                            }
                            return e.next = 9,
                            (0,
                            u.Z)((0,
                            s.et)(i));
                        case 9:
                            if (d = e.sent,
                            v = (0,
                            r.Z)(d, 2),
                            f = v[0],
                            _ = v[1],
                            !f) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", c.$u.FollowRelationUnknown);
                        case 15:
                            if (!_) {
                                e.next = 19;
                                break
                            }
                            return h = null !== (E = null === (p = _.user) || void 0 === p ? void 0 : p.follow_status) && void 0 !== E ? E : c.$u.FollowRelationUnknown,
                            null === (m = l.Z.setUserFollowStatusMap) || void 0 === m || m.call(l.Z, n, h),
                            e.abrupt("return", h);
                        case 19:
                            return e.abrupt("return", c.$u.FollowRelationUnknown);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }()
    },
    72843: function(e, n, t) {
        t.d(n, {
            gD: function() {
                return s
            },
            $0: function() {
                return l
            },
            n6: function() {
                return u
            }
        });
        var r = t(20822)
          , a = t(15881)
          , i = t(64296)
          , o = t(15686)
          , s = function(e) {
            var n, t, r = null == e || null === (n = e.coreInfo) || void 0 === n || null === (t = n.ext) || void 0 === t ? void 0 : t[o.Nk.KEY_CREATE_GROUP_TYPE];
            return !!r && ("5" === r || "2" === r)
        }
          , l = function(e) {
            var n = e.ext
              , t = e.sender
              , s = e.isFromMe
              , l = e.conversationType
              , u = Number(n[o.S6.RECALL_ROLE])
              , c = n[o.S6.RECALL_UID];
            return c && l === r.m.ConversationType.GROUP_CHAT && t !== c && u !== i.GB.MEMBER ? u === i.GB.OWNER ? {
                text: "\u7fa4\u4e3b\u64a4\u56de\u4e00\u6761\u6d88\u606f"
            } : {
                text: "\u7fa4\u7ba1\u7406\u5458\u64a4\u56de\u4e00\u6761\u6d88\u606f"
            } : s ? {
                text: "\u4f60\u64a4\u56de\u4e86\u4e00\u6761\u6d88\u606f",
                reEdit: !0
            } : {
                text: "".concat((0,
                a.vW)(e), "\u64a4\u56de\u4e00\u6761\u6d88\u606f")
            }
        }
          , u = function(e) {
            var n;
            return "1" === String(null == e || null === (n = e.ext) || void 0 === n ? void 0 : n["a:s_banned"])
        }
    },
    57864: function(e, n, t) {
        t.d(n, {
            i: function() {
                return r
            }
        });
        var r = function e(n, t) {
            var r = (null == n ? void 0 : n.parentElement) || (null == n ? void 0 : n.parentNode);
            return !!r && (r !== document && r !== window && (!(null == t || !t(r)) || e(r, t)))
        }
    },
    20071: function(e, n, t) {
        t.r(n),
        t.d(n, {
            IM_EVENT_NAMES: function() {
                return r
            },
            ImSdk: function() {
                return Ie
            }
        });
        var r, a = t(46040), i = t(22545), o = t(937), s = t(37491), l = t(59967), u = t(85116), c = t(22913), d = t(22997), v = t.n(d), f = t(38373), _ = t.n(f), E = t(44742), p = t.n(E), m = t(70355), h = t.n(m), I = t(83009), g = t.n(I), S = t(4788), O = t.n(S), N = t(63199), T = t.n(N), M = t(20822), C = t(19509), L = t(62607), y = t(69592), k = t(24735), R = t(1080), w = t(83610), A = t(90734), Z = t(49972), b = t.n(Z), P = t(30234), U = t(71487), D = t(18653), G = t(88263), x = t(98675), F = t(15686), V = t(96146), H = t(64296), W = t(8642), B = t(55388), Y = t(68399), j = t(92930), K = t(2313), J = {
            disableInitPull: !1,
            appId: 6383,
            userId: "",
            deviceId: "",
            boe: !0,
            debug: !0,
            apiUrl: "http://".concat("imapi-boe", ".douyin.com"),
            frontierUrl: "ws://frontier-boe.douyin.com/ws/v2",
            token: "",
            authType: M.m.AuthType.SESSION_AUTH,
            devicePlatform: "douyin_pc",
            appKey: "e1bd35ec9db7b8d846de66ed140b1ad9",
            service: 5,
            fpId: 9,
            withCredentials: !0,
            inboxType: 0,
            timeout: 6e3,
            acceptIncorrectInboxType: !0,
            biz: "douyin_web"
        }, q = t(57873), z = t(64790), X = t(6881), Q = M.m.ConversationType, $ = Q.GROUP_CHAT, ee = Q.ONE_TO_ONE_CHAT, ne = function() {
            var e = (0,
            i.Z)(p().mark((function e(n) {
                var t, r, a, i, o, s, l, u, c, d, v;
                return p().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = n.conversationType,
                            r = n.isFromMe,
                            a = n.conversationId,
                            i = q.Z.curConversation,
                            o = (i || {}).toParticipantUserId,
                            s = void 0 === o ? "" : o,
                            l = t === $ ? H.eD.GROUP : H.eD.PRIVATE,
                            u = r ? H.IM.ISME : H.IM.NOISME,
                            c = (0,
                            X.GM)(n),
                            d = {
                                chat_type: l,
                                is_self: u,
                                message_type: c,
                                conversation_id: a
                            },
                            t !== ee || !s) {
                                e.next = 13;
                                break
                            }
                            return e.next = 11,
                            (0,
                            B.p)(s);
                        case 11:
                            v = e.sent,
                            d.personal_relation = String(v);
                        case 13:
                            return e.abrupt("return", d);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n) {
                return e.apply(this, arguments)
            }
        }(), te = t(98790), re = t(89027), ae = function(e) {
            (0,
            te.Z)(r, e);
            var n, t = (0,
            re.Z)(r);
            function r() {
                return (0,
                s.Z)(this, r),
                t.apply(this, arguments)
            }
            return (0,
            l.Z)(r, [{
                key: "process",
                value: (n = (0,
                i.Z)(p().mark((function e(n) {
                    var t, r;
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = null == n || null === (t = n.data) || void 0 === t ? void 0 : t.type,
                                (0,
                                W.FH)(r)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", n);
                            case 3:
                                return n.needContinue = !1,
                                n.data = null,
                                e.abrupt("return", n);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                function(e) {
                    return n.apply(this, arguments)
                }
                )
            }]),
            r
        }(t(44587).f), ie = t(83567), oe = t(48972), se = t(43180), le = new (t.n(se)()), ue = function() {
            function e() {
                (0,
                s.Z)(this, e),
                (0,
                ie.Z)(this, le, {
                    writable: !0,
                    value: []
                })
            }
            return (0,
            l.Z)(e, [{
                key: "add",
                value: function() {
                    var e;
                    return (0,
                    oe.Z)(this, le).push(new (O())((function(n) {
                        e = n
                    }
                    ))),
                    e
                }
            }, {
                key: "run",
                value: function(e) {
                    return O().all((0,
                    oe.Z)(this, le)).then((function(n) {
                        null == e || e(n)
                    }
                    ))
                }
            }]),
            e
        }(), ce = t(51765), de = function(e) {
            (0,
            te.Z)(r, e);
            var n, t = (0,
            re.Z)(r);
            function r() {
                return (0,
                s.Z)(this, r),
                t.apply(this, arguments)
            }
            return (0,
            l.Z)(r, [{
                key: "install",
                value: function() {}
            }, {
                key: "sendPacket",
                value: (n = (0,
                i.Z)(p().mark((function e(n) {
                    return p().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return this.fillTtWidParam(n),
                                e.abrupt("return", n);
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e) {
                    return n.apply(this, arguments)
                }
                )
            }, {
                key: "fillTtWidParam",
                value: function(e) {
                    var n = {};
                    try {
                        var t;
                        n.deviceId = "0",
                        n.session_did = "0",
                        n.webid = (null === (t = D.Es()) || void 0 === t ? void 0 : t.user_unique_id) || ""
                    } catch (r) {}
                    e.device_id = "0",
                    e.headers = (0,
                    o.Z)((0,
                    o.Z)({}, e.headers), n)
                }
            }]),
            r
        }(t(38071).v), ve = x.uZ, fe = M.m.ConversationType, _e = fe.GROUP_CHAT, Ee = fe.ONE_TO_ONE_CHAT, pe = new j.Z;
        !function(e) {
            e.IM_SEND_MSG = "IM_SEND_MSG",
            e.IM_DELETE_CONVERSATION = "IM_DELETE_CONVERSATION",
            e.IM_VIDEO_MSG_RECALLED = "IM_VIDEO_MSG_RECALLED"
        }(r || (r = {}));
        var me = {
            disableInitPull: !1,
            appId: 6383,
            appKey: "e1bd35ec9db7b8d846de66ed140b1ad9",
            userId: "",
            deviceId: "",
            service: 5,
            debug: ve,
            apiUrl: "https://imapi.douyin.com",
            frontierUrl: "wss://frontier-im.douyin.com/ws/v2",
            authType: M.m.AuthType.SESSION_AUTH,
            token: "",
            fpId: 9,
            withCredentials: !0,
            inboxType: 1,
            devicePlatform: "douyin_pc",
            timeout: 6e3,
            acceptIncorrectInboxType: !0,
            sharkAppName: "douyin_pc",
            sharkPriorityRegion: "cn",
            biz: "douyin_web",
            metrics: U.oe.getSlardarInstance()
        }
          , he = [C.D, L.l, y.v, de, k.b]
          , Ie = function() {
            function e() {
                (0,
                s.Z)(this, e)
            }
            var n, t, u, d, f, _, E, m, I, S, N, C, L, y, k, Z, P;
            return (0,
            l.Z)(e, null, [{
                key: "tryStart",
                value: function(n, t, r) {
                    ce.Z.warn("\u767b\u5f55\u7528\u6237\u4fe1\u606f", t);
                    var a = (t || {}).uid
                      , i = e.bytedIMInstance;
                    return q.Z.setIsLogin(n),
                    n ? i || e.init({
                        userId: a,
                        deviceId: a,
                        pullInterval: r.pullInterval
                    }, !0 === x.uZ) : i && e.destroy(),
                    e.bytedIMInstance
                }
            }, {
                key: "init",
                value: function(n) {
                    var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1]
                      , r = t ? (0,
                    o.Z)((0,
                    o.Z)({}, J), n) : (0,
                    o.Z)((0,
                    o.Z)({}, me), n);
                    ce.Z.warn("IM \u521d\u59cb\u5316\u53c2\u6570", r);
                    var a = new R.Ah(r,he);
                    return e.bytedIMInstance = a,
                    a.resolve(w.Uk.MessageManager).processors.unshift(new ae(a.ctx)),
                    a.init(),
                    ce.Z.warn("IM \u5b9e\u4f8b", a),
                    e.listenEvents(),
                    e.getStrangerConversationPreview(),
                    q.Z.getEmojiList(),
                    q.Z.getEmojiGifListAsync(),
                    q.Z.getUserSpotlightRelationAsync(),
                    e.getAllUserConversation(!0),
                    a
                }
            }, {
                key: "destroy",
                value: function() {
                    var n;
                    e.imEvents(),
                    null === (n = e.bytedIMInstance) || void 0 === n || n.dispose(),
                    e.bytedIMInstance = null
                }
            }, {
                key: "onEvent",
                value: function(e, n) {
                    return pe.on(e, n)
                }
            }, {
                key: "emitEvent",
                value: function(e) {
                    for (var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                        r[a - 1] = arguments[a];
                    pe.emit.apply(pe, h()(n = [e]).call(n, r))
                }
            }, {
                key: "offEvent",
                value: function(e, n) {
                    pe.off(e, n)
                }
            }, {
                key: "updateIsStrangerConver",
                value: function() {
                    var e, n = ((null === q.Z || void 0 === q.Z ? void 0 : q.Z.curConversation) || {}).id, t = null === q.Z || void 0 === q.Z || null === (e = q.Z.conversationMap) || void 0 === e ? void 0 : e[n], r = null == t ? void 0 : t.isStrangerConversation;
                    q.Z.setIsStrangerConversation(r)
                }
            }, {
                key: "setCurConversation",
                value: function() {
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    if (q.Z.setCurConverSation(n),
                    n) {
                        var t = q.Z.isStrangerConversation
                          , r = void 0 !== t && t;
                        r ? e.strangerMessageUpsert() : e.messageUpsert()
                    } else
                        q.Z.setCurMessageList([])
                }
            }, {
                key: "listenEvents",
                value: function() {
                    var n = e.bytedIMInstance;
                    if (n) {
                        var t = null == n ? void 0 : n.event
                          , a = t.subscribe(A.c5.ConversationChange, (function() {
                            e.conversationChange()
                        }
                        ))
                          , i = t.subscribe(A.c5.MessageUpsert, (function(n) {
                            if (n && n.type === V.pp.GROUP_NOTICE_MESSAGE) {
                                var t = q.Z.curConversation;
                                t && e.getMoreParticipants({
                                    conversation: t
                                })
                            }
                            e.messageUpsert()
                        }
                        ))
                          , o = t.subscribe(A.c5.ReceiveNewMessage, (function(n) {
                            ce.Z.warn("ReceiveNewMessage", n),
                            q.Z.pushNewMsgInList(n, (function(n) {
                                return e.getConversationById(n)
                            }
                            ))
                        }
                        ))
                          , s = t.subscribe(A.c5.MessageRecall, (function(n) {
                            ce.Z.warn("MessageRecall", n);
                            var t = q.Z.curConversation
                              , a = n.conversationId
                              , i = n.type;
                            (null == t ? void 0 : t.id) === a && null !== V.ds && void 0 !== V.ds && g()(V.ds).call(V.ds, i) && e.emitEvent(r.IM_VIDEO_MSG_RECALLED, n)
                        }
                        ))
                          , l = t.subscribe(A.c5.InitFinish, (function() {
                            e.checkClientPush()
                        }
                        ));
                        e.imEvents = function() {
                            t.unsubscribe(A.c5.MessageUpsert, i),
                            t.unsubscribe(A.c5.ConversationChange, a),
                            t.unsubscribe(A.c5.ReceiveNewMessage, o),
                            t.unsubscribe(A.c5.InitFinish, l),
                            t.unsubscribe(A.c5.MessageRecall, s)
                        }
                    }
                }
            }, {
                key: "setConversationSettingInfo",
                value: function(n, t) {
                    var r = e.bytedIMInstance;
                    null == r || r.setConversationSettingInfo((0,
                    o.Z)({
                        conversation: n
                    }, t))
                }
            }, {
                key: "handleDeleteConversation",
                value: (P = (0,
                i.Z)(p().mark((function n(t) {
                    var a, i, o = arguments;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (a = o.length > 1 && o[1] !== undefined ? o[1] : 0,
                                i = o.length > 2 && o[2] !== undefined ? o[2] : function() {}
                                ,
                                e.emitEvent(r.IM_DELETE_CONVERSATION, t),
                                !a) {
                                    n.next = 6;
                                    break
                                }
                                return n.next = 6,
                                (0,
                                K.Z)(a);
                            case 6:
                                null == i || i();
                            case 7:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return P.apply(this, arguments)
                }
                )
            }, {
                key: "deleteConversation",
                value: function(n) {
                    if (n) {
                        var t = e.bytedIMInstance;
                        null == t || t.deleteConversation({
                            conversation: n
                        }),
                        null === q.Z || void 0 === q.Z || q.Z.setCurConverSation()
                    }
                }
            }, {
                key: "deleteStrangerConversation",
                value: (Z = (0,
                i.Z)(p().mark((function n(t, r) {
                    var i, o, s, l;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (t) {
                                    n.next = 2;
                                    break
                                }
                                return n.abrupt("return");
                            case 2:
                                return i = e.bytedIMInstance,
                                n.next = 5,
                                (0,
                                Y.F)(null == i ? void 0 : i.deleteStrangerConversation({
                                    conversation: t
                                }));
                            case 5:
                                if (o = n.sent,
                                s = (0,
                                a.Z)(o, 2),
                                l = s[0],
                                s[1],
                                !l) {
                                    n.next = 11;
                                    break
                                }
                                return n.abrupt("return");
                            case 11:
                                null == r || r(),
                                null === q.Z || void 0 === q.Z || q.Z.setCurConverSation();
                            case 13:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e, n) {
                    return Z.apply(this, arguments)
                }
                )
            }, {
                key: "deleteAllStrangerConversation",
                value: function() {
                    var n = e.bytedIMInstance;
                    null == n || n.deleteAllStrangerConversation(),
                    null === q.Z || void 0 === q.Z || q.Z.setCurConverSation(),
                    null === q.Z || void 0 === q.Z || q.Z.setIsInStrangerConversationList(!1)
                }
            }, {
                key: "getConversationWithUid",
                value: (k = (0,
                i.Z)(p().mark((function n(t) {
                    var r, i, o, s, l, u, c, d, f, _, E, m;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (t) {
                                    n.next = 2;
                                    break
                                }
                                return n.abrupt("return");
                            case 2:
                                if (r = e.bytedIMInstance,
                                i = r.getConversationList(),
                                o = {},
                                v()(i, (function(e) {
                                    e.id;
                                    var n = e.type
                                      , t = e.toParticipantUserId;
                                    n === Ee && t && (o[t] = e)
                                }
                                )),
                                s = null == o ? void 0 : o[t]) {
                                    n.next = 19;
                                    break
                                }
                                return n.next = 10,
                                (0,
                                Y.F)(r.createConversation({
                                    type: Ee,
                                    participants: t,
                                    inboxType: 0
                                }));
                            case 10:
                                if (u = n.sent,
                                c = (0,
                                a.Z)(u, 2),
                                d = c[0],
                                f = c[1],
                                !d) {
                                    n.next = 16;
                                    break
                                }
                                return n.abrupt("return");
                            case 16:
                                _ = f.statusCode,
                                E = f.body,
                                m = null == E || null === (l = E.conversation) || void 0 === l ? void 0 : l.conversation_id,
                                0 === _ && m && (s = r.getConversation({
                                    conversationId: m
                                }));
                            case 19:
                                return n.abrupt("return", s);
                            case 20:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return k.apply(this, arguments)
                }
                )
            }, {
                key: "getAllUserConversation",
                value: (y = (0,
                i.Z)(p().mark((function n() {
                    var t, r, i, s, l, u, c, d, v, f, _, E, m, I, g, S, O, N = arguments;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (t = N.length > 0 && N[0] !== undefined && N[0],
                                r = q.Z.hasJoinGroupObj,
                                !(i = r).loading) {
                                    n.next = 5;
                                    break
                                }
                                return n.abrupt("return");
                            case 5:
                                if (t && (s = {
                                    conversation: [],
                                    cursor: "0",
                                    hasMore: !0,
                                    loading: !1
                                },
                                q.Z.setHasJoinGroup(s),
                                i = s),
                                q.Z.setHasJoinGroup((0,
                                o.Z)((0,
                                o.Z)({}, i), {}, {
                                    loading: !0
                                })),
                                u = (l = i).cursor,
                                !l.hasMore) {
                                    n.next = 23;
                                    break
                                }
                                return d = e.bytedIMInstance,
                                n.next = 12,
                                (0,
                                Y.F)(null == d ? void 0 : d.getUserConversationList({
                                    type: _e,
                                    inboxType: 0,
                                    limit: 10,
                                    sortType: 1,
                                    cursor: u
                                }));
                            case 12:
                                if (v = n.sent,
                                f = (0,
                                a.Z)(v, 2),
                                _ = f[0],
                                E = f[1],
                                ce.Z.warn("getAllUserConversation", _, E),
                                !_) {
                                    n.next = 20;
                                    break
                                }
                                return q.Z.setHasJoinGroup((0,
                                o.Z)((0,
                                o.Z)({}, i), {}, {
                                    loading: !1
                                })),
                                n.abrupt("return");
                            case 20:
                                I = (m = E || {}).conversation,
                                g = m.cursor,
                                S = m.hasMore,
                                O = null === (c = i.conversation) || void 0 === c ? void 0 : h()(c).call(c, I),
                                q.Z.setHasJoinGroup({
                                    conversation: O,
                                    cursor: b().fromValue(g).toString(),
                                    hasMore: S,
                                    loading: !1
                                });
                            case 23:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function() {
                    return y.apply(this, arguments)
                }
                )
            }, {
                key: "sendMessage",
                value: (L = (0,
                i.Z)(p().mark((function n(t, r) {
                    var i, o, s, l, u;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (i = e.bytedIMInstance,
                                o = null === q.Z || void 0 === q.Z ? void 0 : q.Z.curConversation,
                                i && o) {
                                    n.next = 4;
                                    break
                                }
                                return n.abrupt("return");
                            case 4:
                                return n.next = 6,
                                (0,
                                Y.F)((0,
                                c.Z)(e, e, Me).call(e, o, t));
                            case 6:
                                return s = n.sent,
                                (l = (0,
                                a.Z)(s, 2))[0],
                                u = l[1],
                                n.next = 12,
                                (0,
                                c.Z)(this, e, Ne).call(this, u, r);
                            case 12:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, this)
                }
                ))),
                function(e, n) {
                    return L.apply(this, arguments)
                }
                )
            }, {
                key: "resendMessage",
                value: function(n, t) {
                    (0,
                    c.Z)(this, e, Ne).call(this, n, t)
                }
            }, {
                key: "getConversationById",
                value: function(n) {
                    var t = e.bytedIMInstance
                      , r = null;
                    try {
                        r = t.getConversation({
                            conversationId: n
                        })
                    } catch (o) {
                        var a, i;
                        U.oe.captureException("IM", o, {
                            conversationId: n,
                            userId: t.option.userId,
                            conversationCount: String(null === (a = null !== (i = t.getConversationList()) && void 0 !== i ? i : []) || void 0 === a ? void 0 : a.length)
                        })
                    }
                    return r
                }
            }, {
                key: "sendUserMsg",
                value: (C = (0,
                i.Z)(p().mark((function n(t, r, i) {
                    var s, l, u, d, f, _, E, m, h, I, g, S, O, N, T, M, C, L = this;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (s = null == t ? void 0 : t.length) {
                                    n.next = 3;
                                    break
                                }
                                return n.abrupt("return");
                            case 3:
                                l = e.bytedIMInstance,
                                u = l.getConversationList(),
                                d = {},
                                v()(u, (function(e) {
                                    e.id;
                                    var n = e.type
                                      , t = e.toParticipantUserId;
                                    n === Ee && t && (d[t] = e)
                                }
                                )),
                                f = new ue,
                                _ = new ue,
                                E = 0;
                            case 10:
                                if (!(E < s)) {
                                    n.next = 33;
                                    break
                                }
                                if (m = t[E],
                                (h = null == d ? void 0 : d[m]) || !m) {
                                    n.next = 25;
                                    break
                                }
                                return n.next = 16,
                                (0,
                                Y.F)(l.createConversation({
                                    type: Ee,
                                    participants: m,
                                    inboxType: 0
                                }));
                            case 16:
                                if (g = n.sent,
                                S = (0,
                                a.Z)(g, 2),
                                O = S[0],
                                N = S[1],
                                !O) {
                                    n.next = 22;
                                    break
                                }
                                return n.abrupt("continue", 30);
                            case 22:
                                T = N.statusCode,
                                M = N.body,
                                C = null == M || null === (I = M.conversation) || void 0 === I ? void 0 : I.conversation_id,
                                0 === T && C && (h = l.getConversation({
                                    conversationId: C
                                }));
                            case 25:
                                if (!h) {
                                    n.next = 30;
                                    break
                                }
                                return n.delegateYield(p().mark((function n() {
                                    var t, s, l, u, d, v, E;
                                    return p().wrap((function(n) {
                                        for (; ; )
                                            switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                (0,
                                                Y.F)((0,
                                                c.Z)(e, e, Me).call(e, h, r));
                                            case 2:
                                                if (t = n.sent,
                                                (s = (0,
                                                a.Z)(t, 2))[0],
                                                l = s[1]) {
                                                    n.next = 8;
                                                    break
                                                }
                                                return n.abrupt("return", "continue");
                                            case 8:
                                                return u = f.add(),
                                                d = function() {
                                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                                        n[t] = arguments[t];
                                                    u(n)
                                                }
                                                ,
                                                v = _.add(),
                                                E = function() {
                                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                                        n[t] = arguments[t];
                                                    v(n)
                                                }
                                                ,
                                                n.next = 14,
                                                (0,
                                                c.Z)(L, e, Ne).call(L, l, (0,
                                                o.Z)((0,
                                                o.Z)({}, i), {}, {
                                                    beforeSend: d,
                                                    afterSend: E
                                                }));
                                            case 14:
                                            case "end":
                                                return n.stop()
                                            }
                                    }
                                    ), n)
                                }
                                ))(), "t0", 27);
                            case 27:
                                if ("continue" !== n.t0) {
                                    n.next = 30;
                                    break
                                }
                                return n.abrupt("continue", 30);
                            case 30:
                                E++,
                                n.next = 10;
                                break;
                            case 33:
                                f.run(null == i ? void 0 : i.beforeSend),
                                _.run(null == i ? void 0 : i.afterSend);
                            case 35:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e, n, t) {
                    return C.apply(this, arguments)
                }
                )
            }, {
                key: "sendGroupMsg",
                value: (N = (0,
                i.Z)(p().mark((function n(t, r, i) {
                    var s, l, u, d, v, f, _, E, m, h, I, g, S, O, N, T, M = this;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (s = null == t ? void 0 : t.length) {
                                    n.next = 3;
                                    break
                                }
                                return n.abrupt("return");
                            case 3:
                                l = null === q.Z || void 0 === q.Z ? void 0 : q.Z.conversationInfoMap,
                                u = new ue,
                                d = new ue,
                                v = e.bytedIMInstance,
                                f = 0;
                            case 8:
                                if (!(f < s)) {
                                    n.next = 32;
                                    break
                                }
                                if (_ = t[f],
                                E = null == l ? void 0 : l[_]) {
                                    n.next = 20;
                                    break
                                }
                                return m = {
                                    conversationId: _,
                                    shortId: _,
                                    type: _e
                                },
                                n.next = 15,
                                (0,
                                Y.F)(v.getConversationOnline(m));
                            case 15:
                                h = n.sent,
                                I = (0,
                                a.Z)(h, 2),
                                g = I[0],
                                S = I[1],
                                !g && S && (E = S);
                            case 20:
                                if (!E) {
                                    n.next = 29;
                                    break
                                }
                                return n.next = 23,
                                (0,
                                Y.F)((0,
                                c.Z)(e, e, Me).call(e, E, r));
                            case 23:
                                if (O = n.sent,
                                (N = (0,
                                a.Z)(O, 2))[0],
                                !(T = N[1])) {
                                    n.next = 29;
                                    break
                                }
                                return n.delegateYield(p().mark((function n() {
                                    var t, r, a, s;
                                    return p().wrap((function(n) {
                                        for (; ; )
                                            switch (n.prev = n.next) {
                                            case 0:
                                                return t = u.add(),
                                                r = function() {
                                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                                                        n[r] = arguments[r];
                                                    t(n)
                                                }
                                                ,
                                                a = d.add(),
                                                s = function() {
                                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                                        n[t] = arguments[t];
                                                    a(n)
                                                }
                                                ,
                                                n.next = 6,
                                                (0,
                                                c.Z)(M, e, Ne).call(M, T, (0,
                                                o.Z)((0,
                                                o.Z)({}, i), {}, {
                                                    beforeSend: r,
                                                    afterSend: s
                                                }));
                                            case 6:
                                            case "end":
                                                return n.stop()
                                            }
                                    }
                                    ), n)
                                }
                                ))(), "t0", 29);
                            case 29:
                                f++,
                                n.next = 8;
                                break;
                            case 32:
                                u.run(null == i ? void 0 : i.beforeSend),
                                d.run(null == i ? void 0 : i.afterSend);
                            case 34:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e, n, t) {
                    return N.apply(this, arguments)
                }
                )
            }, {
                key: "getIdConverMap",
                value: (S = (0,
                i.Z)(p().mark((function n(t) {
                    var r, i, o, s, l, u, c, d, f, _, E, m, h, I, g, S;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = e.bytedIMInstance,
                                i = r.getConversationList(),
                                o = {},
                                s = {},
                                v()(i, (function(e) {
                                    var n = e.id
                                      , t = e.type
                                      , r = e.toParticipantUserId;
                                    t === Ee && r ? o[r] = e : t === _e && (s[n] = e)
                                }
                                )),
                                l = t.length,
                                u = 0;
                            case 7:
                                if (!(u < l)) {
                                    n.next = 24;
                                    break
                                }
                                if (c = t[u],
                                d = c.uid,
                                c.type !== Ee || !d || o[d]) {
                                    n.next = 21;
                                    break
                                }
                                return n.next = 12,
                                (0,
                                Y.F)(r.createConversation({
                                    type: Ee,
                                    participants: d,
                                    inboxType: 0
                                }));
                            case 12:
                                if (_ = n.sent,
                                E = (0,
                                a.Z)(_, 2),
                                m = E[0],
                                h = E[1],
                                !m) {
                                    n.next = 18;
                                    break
                                }
                                return n.abrupt("continue", 21);
                            case 18:
                                I = h.statusCode,
                                g = h.body,
                                S = null == g || null === (f = g.conversation) || void 0 === f ? void 0 : f.conversation_id,
                                0 === I && S && (o[d] = r.getConversation({
                                    conversationId: S
                                }));
                            case 21:
                                u++,
                                n.next = 7;
                                break;
                            case 24:
                                return n.abrupt("return", {
                                    converPrevOne2OneMap: o,
                                    converPrevGroupMap: s
                                });
                            case 25:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return S.apply(this, arguments)
                }
                )
            }, {
                key: "sendUserAndGroupMsg",
                value: (I = (0,
                i.Z)(p().mark((function n(t, r, i) {
                    var s, l, u, d, v, f, _, E, m, h, I, g, S, O, N = this;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (s = null == t ? void 0 : t.length) {
                                    n.next = 3;
                                    break
                                }
                                return n.abrupt("return");
                            case 3:
                                return n.next = 5,
                                (0,
                                Y.F)(e.getIdConverMap(t));
                            case 5:
                                if (l = n.sent,
                                u = (0,
                                a.Z)(l, 2),
                                d = u[0],
                                v = u[1],
                                !d) {
                                    n.next = 11;
                                    break
                                }
                                return n.abrupt("return");
                            case 11:
                                f = v.converPrevOne2OneMap,
                                _ = v.converPrevGroupMap,
                                E = new ue,
                                m = new ue,
                                h = 0;
                            case 15:
                                if (!(h < s)) {
                                    n.next = 26;
                                    break
                                }
                                if (I = t[h],
                                g = I.uid,
                                S = I.type,
                                !(O = S === Ee ? f[g] : _[g])) {
                                    n.next = 23;
                                    break
                                }
                                return n.delegateYield(p().mark((function n() {
                                    var t, s, l, u, d, v, f;
                                    return p().wrap((function(n) {
                                        for (; ; )
                                            switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2,
                                                (0,
                                                Y.F)((0,
                                                c.Z)(e, e, Me).call(e, O, r));
                                            case 2:
                                                if (t = n.sent,
                                                (s = (0,
                                                a.Z)(t, 2))[0],
                                                l = s[1]) {
                                                    n.next = 8;
                                                    break
                                                }
                                                return n.abrupt("return", "continue");
                                            case 8:
                                                return u = E.add(),
                                                d = function() {
                                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                                        n[t] = arguments[t];
                                                    u(n)
                                                }
                                                ,
                                                v = m.add(),
                                                f = function() {
                                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                                        n[t] = arguments[t];
                                                    v(n)
                                                }
                                                ,
                                                n.next = 14,
                                                (0,
                                                c.Z)(N, e, Ne).call(N, l, (0,
                                                o.Z)((0,
                                                o.Z)({}, i), {}, {
                                                    beforeSend: d,
                                                    afterSend: f
                                                }));
                                            case 14:
                                            case "end":
                                                return n.stop()
                                            }
                                    }
                                    ), n)
                                }
                                ))(), "t0", 20);
                            case 20:
                                if ("continue" !== n.t0) {
                                    n.next = 23;
                                    break
                                }
                                return n.abrupt("continue", 23);
                            case 23:
                                h++,
                                n.next = 15;
                                break;
                            case 26:
                                E.run(null == i ? void 0 : i.beforeSend),
                                m.run(null == i ? void 0 : i.afterSend);
                            case 28:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e, n, t) {
                    return I.apply(this, arguments)
                }
                )
            }, {
                key: "recallMessage",
                value: (m = (0,
                i.Z)(p().mark((function n(t) {
                    var r;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.bytedIMInstance,
                                n.abrupt("return", null == r ? void 0 : r.recallMessage({
                                    message: t
                                }));
                            case 2:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return m.apply(this, arguments)
                }
                )
            }, {
                key: "deleteMessage",
                value: function(n) {
                    var t = e.bytedIMInstance;
                    return null == t ? void 0 : t.deleteMessage({
                        message: n
                    })
                }
            }, {
                key: "setLikeMsg",
                value: (E = (0,
                i.Z)(p().mark((function n(t, r, a) {
                    var i;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                ne(t);
                            case 2:
                                return (i = n.sent).action = a ? "cancel" : "like",
                                (0,
                                z.Gb)("like_message", i),
                                n.abrupt("return", (0,
                                c.Z)(this, e, Ce).call(this, t, (0,
                                o.Z)((0,
                                o.Z)({}, F.r9.LOVE), {}, {
                                    operation: M.m.OPERATION_TYPE.ADD_PROPERTY_ITEM
                                }, r)));
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, this)
                }
                ))),
                function(e, n, t) {
                    return E.apply(this, arguments)
                }
                )
            }, {
                key: "getMoreMessage",
                value: function(n) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50
                      , r = e.bytedIMInstance
                      , a = q.Z.messageList
                      , i = null == a ? void 0 : a[0];
                    return i ? r.getMessagesByConversation({
                        conversation: n,
                        cursor: i,
                        limit: t
                    }).then((function(n) {
                        return e.messageUpsert(),
                        n
                    }
                    )) : O().resolve({
                        messages: [],
                        hasMore: !1,
                        cursor: 0
                    })
                }
            }, {
                key: "getConversationParticipants",
                value: function(n) {
                    var t = e.bytedIMInstance.getConversationParticipants({
                        conversation: n
                    });
                    return (0,
                    c.Z)(this, e, Le).call(this, null == n ? void 0 : n.id, t),
                    t
                }
            }, {
                key: "getMoreParticipants",
                value: function(n) {
                    var t = this;
                    return e.bytedIMInstance.getConversationParticipantsAsync((0,
                    o.Z)({}, n)).then((function(r) {
                        var a;
                        return (0,
                        c.Z)(t, e, Le).call(t, null === (a = n.conversation) || void 0 === a ? void 0 : a.id, r),
                        r
                    }
                    ))
                }
            }, {
                key: "leaveConversation",
                value: (_ = (0,
                i.Z)(p().mark((function n(t) {
                    var r;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.bytedIMInstance,
                                n.next = 3,
                                r.leaveConversation({
                                    conversation: t
                                });
                            case 3:
                                return n.next = 5,
                                r.deleteConversation({
                                    conversation: t
                                });
                            case 5:
                                null === q.Z || void 0 === q.Z || q.Z.setCurConverSation();
                            case 6:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return _.apply(this, arguments)
                }
                )
            }, {
                key: "getAllUserFromServer",
                value: function() {
                    var n = (0,
                    c.Z)(this, e, ye).call(this);
                    q.Z.getUserInfoMapAsync(n)
                }
            }, {
                key: "getAllStrangerFromServer",
                value: function() {
                    var n = (0,
                    c.Z)(this, e, ke).call(this);
                    q.Z.getUserInfoMapAsync(n)
                }
            }, {
                key: "getStrangerFromServerWithConver",
                value: function(n) {
                    var t = q.Z.userInfoFromServerMap
                      , r = q.Z.curUserInfo.uid
                      , a = n || {}
                      , i = a.id
                      , o = void 0 === i ? "" : i
                      , s = a.firstPageParticipant
                      , l = void 0 === s ? [] : s
                      , u = a.participants
                      , d = null == t ? void 0 : t[o]
                      , v = u || (null == l ? void 0 : l.participants) || [];
                    if ((0,
                    c.Z)(this, e, Le).call(this, o, v),
                    !d) {
                        var f = [];
                        T()(v).call(v, (function(e) {
                            var n = e.userId
                              , t = e.secUid
                              , a = e.user_id
                              , i = e.sec_uid;
                            (n || b().fromValue(a).toString()) !== r && f.push(t || i)
                        }
                        )),
                        q.Z.getUserInfoMapAsync(f)
                    }
                }
            }, {
                key: "markConversationRead",
                value: (f = (0,
                i.Z)(p().mark((function n(t) {
                    var r, a, i, o, s, l = arguments;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = l.length > 1 && l[1] !== undefined && l[1],
                                a = (t || {}).indexInConversation,
                                i = void 0 === a ? "" : a,
                                o = q.Z.curConversation,
                                s = e.bytedIMInstance,
                                i && (r ? s.markStrangerConversationRead({
                                    conversation: o
                                }) : s.markConversationRead({
                                    conversation: o,
                                    readIndex: i
                                }));
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return f.apply(this, arguments)
                }
                )
            }, {
                key: "markAllStrangerConversationRead",
                value: (d = (0,
                i.Z)(p().mark((function n() {
                    var t;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return t = e.bytedIMInstance,
                                n.abrupt("return", t.markAllStrangerConversationRead());
                            case 2:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function() {
                    return d.apply(this, arguments)
                }
                )
            }, {
                key: "getMessgeByServerId",
                value: (u = (0,
                i.Z)(p().mark((function n(t) {
                    var r, a, i;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = t.conversation,
                                a = t.serverMessageId,
                                i = e.bytedIMInstance,
                                n.abrupt("return", i.getMessageByServerId({
                                    conversation: r,
                                    serverMessageId: a
                                }));
                            case 3:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "checkClientPush",
                value: function() {
                    var e, n = null === (e = D.Le.getConfig(D.gI.IMStatusStore)) || void 0 === e ? void 0 : e.conversationId;
                    n && G.emit(G.EVENT.openImConversation, {
                        conversationId: n,
                        enterMethod: H.eY.CLIENT_PUSH
                    })
                }
            }, {
                key: "isFromGroupOwner",
                value: (t = (0,
                i.Z)(p().mark((function n(t) {
                    var r, a, i, o, s, l;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (t) {
                                    n.next = 2;
                                    break
                                }
                                return n.abrupt("return", !1);
                            case 2:
                                if (r = e.bytedIMInstance,
                                a = t.conversationId,
                                i = t.sender) {
                                    n.next = 6;
                                    break
                                }
                                return n.abrupt("return", !1);
                            case 6:
                                if (o = r.getConversation({
                                    conversationId: a
                                })) {
                                    n.next = 9;
                                    break
                                }
                                return n.abrupt("return", !1);
                            case 9:
                                if (s = o.type,
                                l = o.coreInfo,
                                s === _e) {
                                    n.next = 12;
                                    break
                                }
                                return n.abrupt("return", !1);
                            case 12:
                                return n.abrupt("return", (null == l ? void 0 : l.owner) === i);
                            case 13:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function(e) {
                    return t.apply(this, arguments)
                }
                )
            }, {
                key: "getMoreVideoInMsg",
                value: (n = (0,
                i.Z)(p().mark((function n() {
                    var t, r, i, o, s, l, u, c, d, f, _, E;
                    return p().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (t = q.Z.curConversation,
                                null !== q.Z && void 0 !== q.Z && q.Z.curMsgOptPopId && q.Z.setCurMsgOptPopId(),
                                r = [],
                                i = [],
                                !t) {
                                    n.next = 16;
                                    break
                                }
                                return n.next = 7,
                                (0,
                                Y.F)(e.getMoreMessage(t));
                            case 7:
                                if (o = n.sent,
                                s = (0,
                                a.Z)(o, 2),
                                l = s[0],
                                u = s[1],
                                !l) {
                                    n.next = 13;
                                    break
                                }
                                return n.abrupt("return", {
                                    hasMore: !0,
                                    awemeIds: r,
                                    videoMsgList: i
                                });
                            case 13:
                                return d = (c = u || {}).hasMore,
                                f = void 0 === d || d,
                                _ = c.messages,
                                E = void 0 === _ ? [] : _,
                                v()(E, (function(e) {
                                    var n = e.type
                                      , t = e.isRecalled
                                      , a = e.clientId;
                                    if (!t && null !== V.ds && void 0 !== V.ds && g()(V.ds).call(V.ds, n)) {
                                        var o = ((0,
                                        W.t$)(e) || {}).itemId;
                                        r.push(o),
                                        i.push({
                                            awemeId: o,
                                            msgClientId: a
                                        })
                                    }
                                }
                                )),
                                n.abrupt("return", {
                                    hasMore: f,
                                    awemeIds: r,
                                    videoMsgList: i
                                });
                            case 16:
                                return n.abrupt("return", {
                                    hasMore: !0,
                                    awemeIds: r,
                                    videoMsgList: i
                                });
                            case 17:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))),
                function() {
                    return n.apply(this, arguments)
                }
                )
            }]),
            e
        }();
        function ge(e, n, t) {
            return Se.apply(this, arguments)
        }
        function Se() {
            return Se = (0,
            i.Z)(p().mark((function e(n, t, r) {
                var a, i, o, s, l, u, c, d, v, f, _, E = arguments;
                return p().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (a = E.length > 3 && E[3] !== undefined ? E[3] : "",
                            i = t.conversationId,
                            o = t.conversationType,
                            s = t.referenceInfo,
                            l = t.mentionedUsers,
                            u = t.type,
                            c = q.Z.isOpenMessageList,
                            n) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            if (d = n.toParticipantUserId,
                            o !== Ee) {
                                e.next = 12;
                                break
                            }
                            return e.next = 9,
                            (0,
                            B.p)(d);
                        case 9:
                            e.t0 = e.sent,
                            e.next = 13;
                            break;
                        case 12:
                            e.t0 = H.$u.FollowRelationUnknown;
                        case 13:
                            v = e.t0,
                            s && (f = {
                                conversation_id: i,
                                chat_type: X.n0[o],
                                message_type: r
                            },
                            o === Ee && (f.personal_relation = String(v)),
                            (0,
                            z.Gb)("quote_message", f)),
                            l && l.length > 0 && (0,
                            z.Gb)("send_at_message", {
                                conversation_id: i
                            }),
                            _ = {
                                conversation_id: i,
                                chat_type: X.n0[o],
                                to_user_id: d || "",
                                message_type: r,
                                real_message_type: u,
                                enter_method: X.QX[a]
                            },
                            q.Z.abTestData.imPrivateMessagePanelOptimization !== P.ImPrivateMessagePanelOptimization.Default && (_.is_fold = Number(!c)),
                            o === Ee && (_.personal_relation = String(v)),
                            (0,
                            z.Gb)("send_message", _);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            Se.apply(this, arguments)
        }
        function Oe(e, n, t, r) {
            var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ""
              , i = n.conversationId
              , o = n.conversationType
              , s = n.type
              , l = n.serverId
              , u = n.mentionedUsers;
            if (e && r) {
                var c = e.toParticipantUserId
                  , d = r.statusCode
                  , v = r.success;
                u && u.length > 0 && (0,
                z.Gb)("send_at_message_response", {
                    conversation_id: i
                }),
                (0,
                z.Gb)("send_message_response", {
                    conversation_id: i,
                    chat_type: X.n0[o],
                    to_user_id: c || "",
                    message_type: t,
                    real_message_type: s,
                    send_status: v ? "success" : "failure",
                    status_code: "".concat(d),
                    messgae_id: l || "",
                    enter_method: X.QX[a]
                })
            }
        }
        function Ne(e, n) {
            return Te.apply(this, arguments)
        }
        function Te() {
            return (Te = (0,
            i.Z)(p().mark((function e(n, t) {
                var a, i, o, s, l, u, d, v, f, _, E = this;
                return p().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (a = t.beforeSend,
                            i = void 0 === a ? function() {}
                            : a,
                            o = t.afterSend,
                            s = void 0 === o ? function() {}
                            : o,
                            l = t.enter_method,
                            u = void 0 === l ? "" : l,
                            !n) {
                                e.next = 11;
                                break
                            }
                            return d = n.conversationId,
                            v = Ie.bytedIMInstance,
                            f = v.getConversation({
                                conversationId: d
                            }),
                            _ = (0,
                            X.GM)(n),
                            (0,
                            c.Z)(Ie, Ie, ge).call(Ie, f, n, _, u),
                            null == i || i(n),
                            e.next = 10,
                            v.sendMessage({
                                message: n
                            }).then((function(e) {
                                return Ie.emitEvent(r.IM_SEND_MSG, {
                                    message: n,
                                    res: e
                                }),
                                (0,
                                c.Z)(E, Ie, Oe).call(E, f, n, _, e, u),
                                null == s || s({
                                    conversation: f,
                                    message: n,
                                    res: e
                                }),
                                e
                            }
                            ));
                        case 10:
                            return e.abrupt("return", e.sent);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Me(e, n) {
            var t = Ie.bytedIMInstance
              , r = (0,
            W.MZ)(n);
            return null == t ? void 0 : t.createMessage((0,
            o.Z)({
                conversation: e
            }, r))
        }
        function Ce(e, n) {
            var t = Ie.bytedIMInstance;
            return null == t ? void 0 : t.modifyMessageProperty({
                message: e,
                modifyContent: [n]
            })
        }
        function Le(e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
              , t = q.Z.curUserInfo
              , r = t.uid
              , a = [];
            v()(n, (function(n) {
                var t = n.userId
                  , i = n.role
                  , o = n.secUid
                  , s = n.user_id
                  , l = n.sec_uid
                  , u = n.alias
                  , c = void 0 === u ? "" : u
                  , d = t || b().fromValue(s).toString();
                d !== r && a.push(d),
                d && q.Z.setUserInfoFromSdkMap(e, d, {
                    alias: c,
                    uid: d,
                    role: i,
                    sec_uid: o || l
                })
            }
            )),
            q.Z.setConversationUserids(e, a)
        }
        function ye() {
            var e = this
              , n = q.Z.converSationListOrigin
              , t = q.Z.uidSecUidMap
              , r = q.Z.userInfoFromSdkMap
              , a = q.Z.userInfoFromServerMap;
            v()(n, (function(n) {
                var t = n.id
                  , a = (n.type,
                n.toParticipantUserId,
                n.firstPageParticipant)
                  , i = n.participants;
                null == r || r[t];
                (0,
                c.Z)(e, Ie, Le).call(e, t, i || (null == a ? void 0 : a.participants))
            }
            ));
            var i = [];
            return v()(t, (function(e, n) {
                var t = a[n];
                e && !t && i.push(e)
            }
            )),
            i
        }
        function ke() {
            var e = this
              , n = q.Z.strangerConverListObj
              , t = q.Z.uidSecUidMap
              , r = q.Z.userInfoFromSdkMap
              , a = q.Z.userInfoFromServerMap
              , i = (null == n ? void 0 : n.conversation) || []
              , o = [];
            return v()(i, (function(n) {
                var t = n.id
                  , a = void 0 === t ? "" : t
                  , i = n.firstPageParticipant
                  , o = void 0 === i ? [] : i
                  , s = n.participants;
                null == r || r[a];
                (0,
                c.Z)(e, Ie, Le).call(e, a, s || (null == o ? void 0 : o.participants))
            }
            )),
            v()(t, (function(e, n) {
                var t = a[n];
                e && !t && o.push(e)
            }
            )),
            o
        }
        (0,
        u.Z)(Ie, "bytedIMInstance", null),
        (0,
        u.Z)(Ie, "imEvents", (function() {}
        )),
        (0,
        u.Z)(Ie, "conversationChange", _()((function() {
            var e, n, t = null !== (e = null === (n = Ie.bytedIMInstance) || void 0 === n ? void 0 : n.getConversationList()) && void 0 !== e ? e : [];
            return q.Z.setConverSationList(t),
            q.Z.setConversationMap(t),
            Ie.getAllUserFromServer(),
            Ie.getStrangerConversationPreview(),
            Ie.updateIsStrangerConver(),
            ce.Z.warn("conversationChange", t),
            t
        }
        ), 200)),
        (0,
        u.Z)(Ie, "messageUpsert", _()((function() {
            var e, n = null === q.Z || void 0 === q.Z ? void 0 : q.Z.curConversation, t = null !== (e = null == n ? void 0 : n.getMessageList()) && void 0 !== e ? e : [];
            q.Z.setCurMessageList(t),
            ce.Z.warn("messageUpsert", t)
        }
        ), 200)),
        (0,
        u.Z)(Ie, "strangerMessageUpsert", _()((0,
        i.Z)(p().mark((function e() {
            var n, t;
            return p().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        t = null === q.Z || void 0 === q.Z ? void 0 : q.Z.curConversation,
                        null === (n = Ie.bytedIMInstance) || void 0 === n || n.getStrangerConversationMessage({
                            conversation: t
                        }).then((function(e) {
                            q.Z.setCurMessageList(null != e ? e : [])
                        }
                        ));
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        ))), 200)),
        (0,
        u.Z)(Ie, "getStrangerConversationList", (0,
        i.Z)(p().mark((function e() {
            var n, t, r, i, s, l, u, c, d, v, f, _, E, m, I, g, S, O, N, T, M, C, L = arguments;
            return p().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (s = L.length > 0 && L[0] !== undefined && L[0],
                        l = q.Z.strangerConverListObj,
                        (u = q.Z.setIsShowGetConversaionListLoading)(!0),
                        null === (n = c = l) || void 0 === n || !n.loading) {
                            e.next = 6;
                            break
                        }
                        return e.abrupt("return");
                    case 6:
                        if (q.Z.setStrangerConverListObj((0,
                        o.Z)((0,
                        o.Z)({}, c), {}, {
                            loading: !0
                        })),
                        s && (c = {
                            conversation: [],
                            cursor: "0",
                            hasMore: !0,
                            loading: !1,
                            unreadCount: 0
                        }),
                        v = (d = c).cursor,
                        f = void 0 === v ? "0" : v,
                        _ = d.hasMore,
                        void 0 === _ || _) {
                            e.next = 12;
                            break
                        }
                        return q.Z.setStrangerConverListObj((0,
                        o.Z)((0,
                        o.Z)({}, c), {}, {
                            loading: !1
                        })),
                        e.abrupt("return");
                    case 12:
                        return e.next = 14,
                        (0,
                        Y.F)(null === (t = Ie.bytedIMInstance) || void 0 === t ? void 0 : t.getStrangerConversationList({
                            limit: 10,
                            cursor: f
                        }));
                    case 14:
                        E = e.sent,
                        m = (0,
                        a.Z)(E, 2),
                        I = m[0],
                        g = m[1],
                        I && q.Z.setStrangerConverListObj((0,
                        o.Z)((0,
                        o.Z)({}, c), {}, {
                            loading: !1
                        })),
                        O = (S = g || {}).conversation,
                        N = S.cursor,
                        T = S.hasMore,
                        M = S.unreadCount,
                        C = (null === (r = c) || void 0 === r || null === (i = r.conversation) || void 0 === i ? void 0 : h()(i).call(i, O)) || [],
                        q.Z.setStrangerConverListObj({
                            conversation: C,
                            cursor: b().fromValue(N).toString(),
                            hasMore: T,
                            unreadCount: M,
                            loading: !1
                        }),
                        u(!1),
                        q.Z.setConversationMap(C),
                        Ie.getAllStrangerFromServer(),
                        Ie.updateIsStrangerConver();
                    case 26:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )))),
        (0,
        u.Z)(Ie, "getStrangerConversationPreview", _()((function() {
            var e;
            null === (e = Ie.bytedIMInstance) || void 0 === e || e.getStrangerPreview({}).then((function(e) {
                if (ce.Z.warn("new-preview", e),
                e) {
                    var n = e.conversation
                      , t = void 0 === n ? {} : n
                      , r = e.unreadCount
                      , a = void 0 === r ? 0 : r;
                    Ie.getStrangerFromServerWithConver(t),
                    q.Z.setStrangerMessageUnreadCount(a),
                    q.Z.setStrangerBoxCover(t)
                } else
                    q.Z.setStrangerBoxCover(null),
                    q.Z.setStrangerMessageUnreadCount(0)
            }
            ))
        }
        ), 200))
    },
    2313: function(e, n, t) {
        var r = t(4788)
          , a = t.n(r)
          , i = t(51235)
          , o = t.n(i);
        n.Z = function() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return new (a())((function(n) {
                o()((function() {
                    n(!0)
                }
                ), e || 0)
            }
            ))
        }
    },
    6881: function(e, n, t) {
        t.d(n, {
            iL: function() {
                return f
            },
            GM: function() {
                return _
            },
            n0: function() {
                return E
            },
            QX: function() {
                return p
            }
        });
        var r, a = t(85116), i = t(74269), o = t(20822), s = t(96146), l = t(8642), u = t(20071), c = o.m.ConversationType, d = c.GROUP_CHAT, v = c.ONE_TO_ONE_CHAT, f = new i.hD({
            chat_notif_show: {
                eventName: "chat_notif_show",
                params: {}
            },
            chat_notif_hover: {
                eventName: "chat_notif_hover",
                params: {}
            },
            uc_login_notify: {
                eventName: "uc_login_notify",
                params: {}
            },
            uc_login_submit: {
                eventName: "uc_login_submit",
                params: {}
            },
            uc_login_result: {
                eventName: "uc_login_result",
                params: {}
            },
            chat_cell_show: {
                eventName: "chat_cell_show",
                params: {}
            },
            chat_cell_click: {
                eventName: "chat_cell_click",
                params: {}
            },
            enter_chat: {
                eventName: "enter_chat",
                params: {}
            },
            click_enter_chat_page: {
                eventName: "click_enter_chat_page",
                params: {}
            },
            chat_setting_show: {
                eventName: "chat_setting_show",
                params: {}
            },
            chat_setting_click: {
                eventName: "chat_setting_click",
                params: {}
            },
            chat_block_popup_show: {
                eventName: "chat_block_popup_show",
                params: {}
            },
            chat_block_popup_click: {
                eventName: "chat_block_popup_click",
                params: {}
            },
            send_message: {
                eventName: "send_message",
                params: {}
            },
            send_message_response: {
                eventName: "send_message_response",
                params: {}
            },
            follow: {
                eventName: "follow",
                params: {}
            },
            follow_cancel: {
                eventName: "follow_cancel",
                params: {}
            },
            emoji_tab_show: {
                eventName: "emoji_tab_show",
                params: {}
            },
            at_panel_show: {
                eventName: "at_panel_show",
                params: {}
            },
            send_at_message: {
                eventName: "send_at_message",
                params: {}
            },
            send_at_message_response: {
                eventName: "send_at_message_response",
                params: {}
            },
            message_function_show: {
                eventName: "message_function_show",
                params: {}
            },
            message_function_click: {
                eventName: "message_function_click",
                params: {}
            },
            like_message: {
                eventName: "like_message",
                params: {}
            },
            forward_message: {
                eventName: "forward_message",
                params: {}
            },
            quote_message: {
                eventName: "quote_message",
                params: {}
            },
            recall_message: {
                eventName: "recall_message",
                params: {}
            },
            delete_message: {
                eventName: "delete_message",
                params: {}
            },
            unsupported_message_show: {
                eventName: "unsupported_message_show",
                params: {}
            },
            video_cover_show: {
                eventName: "video_cover_show",
                params: {}
            },
            video_cover_click: {
                eventName: "video_cover_click",
                params: {}
            },
            share_menu_show: {
                eventName: "share_menu_show",
                params: {}
            },
            share_video_click_head: {
                eventName: "share_video_click_head",
                params: {}
            },
            share_video_click_more_friend: {
                eventName: "share_video_click_more_friend",
                params: {}
            },
            share_video: {
                eventName: "share_video",
                params: {}
            },
            share_user: {
                eventName: "share_user",
                params: {}
            },
            share_search: {
                eventName: "share_search",
                params: {
                    enter_from: "others_homepage"
                }
            },
            click_send_message: {
                eventName: "click_send_message",
                params: {}
            },
            im_push_show: {
                eventName: "im_push_show",
                params: {}
            },
            im_push_click: {
                eventName: "im_push_click",
                params: {}
            },
            im_push_close: {
                eventName: "im_push_close",
                params: {}
            },
            im_login_notify: {
                eventName: "im_login_notify",
                params: {}
            },
            new_im_show: {
                eventName: "new_im_show",
                params: {}
            },
            share_video_click_more_group: {
                eventName: "share_video_click_more_group",
                params: {}
            },
            unknown_notif_show: {
                eventName: "unknown_notif_show",
                params: {}
            },
            unknown_notif_click: {
                eventName: "unknown_notif_click",
                params: {}
            },
            unknown_notif_hover: {
                eventName: "unknown_notif_hover",
                params: {}
            },
            unknown_notif_delete: {
                eventName: "unknown_notif_delete",
                params: {}
            },
            unknown_cell_show: {
                eventName: "unknown_cell_show",
                params: {}
            },
            chat_cell_click_all: {
                eventName: "chat_cell_click_all",
                params: {}
            },
            click_author_head: {
                eventName: "click_author_head",
                params: {
                    click_from: "im",
                    is_full_webscreen: "0",
                    clarity: ""
                }
            },
            click_fold_im: {
                eventName: "click_fold_im",
                params: {}
            },
            click_exit_chat: {
                eventName: "click_exit_chat",
                params: {}
            }
        }), _ = function(e) {
            var n = e.type
              , t = e.ext
              , r = (0,
            l.t$)(e)
              , a = null == r ? void 0 : r.type
              , i = "";
            switch (n) {
            case s.pp.TEXT:
                i = "text";
                break;
            case s.pp.SHARE_WEB:
                0 !== (null == r ? void 0 : r.aweType) && (i = (null == r ? void 0 : r.msgTrack) || "");
                break;
            case s.pp.SHARE_WEB_FROM_THIRD_MESSAGE:
                i = "share_from_third";
                break;
            case s.pp.XPLAN_STICKER_EMOJI:
                i = a === s.c6.AWEME_XEMOJI ? "xmoji" : "emoji";
                break;
            case s.pp.BIG_EMOJI:
                i = a === s.c6.AWEME_EMOJI_SELF ? "emoji" : a === s.c6.AWEME_NET_SEARCH_GIF ? "giphy" : a === s.c6.AWEME_GREET_EMOJI ? "emoji" : a === s.c6.AWEME_LITE_MSG_EMOJI || a === s.c6.AWEME_LITE_MSG_EMOJI_NEW || a === s.c6.AWEME_INTERACTIVE_EMOJI ? "lite_emoji" : "emoji";
                break;
            case s.pp.ONE_CARD:
                a === s.c6.GROUP_VOTE && (i = "poll");
                break;
            case s.pp.VOICE:
            case s.pp.ENCRYPT_VOICE:
            case s.pp.IM_ENCRYPT_VOICE:
                i = "audio";
                break;
            case s.pp.ONLY_PICTURE:
            case s.pp.STORY_PICTURE:
                i = "pic";
                break;
            case s.pp.STORY_VIDEO:
                i = "video";
                break;
            case s.pp.SHARE_AWEME:
                i = "share_video";
                break;
            case s.pp.SHARE_PHOTOS:
                i = "share_photos";
                break;
            case s.pp.SHARE_COMPILATION:
                i = "share";
                break;
            case s.pp.SHARE_USER:
            case s.pp.SHARE_MUSIC:
            case s.pp.SHARE_CHALLENGE:
            case s.pp.SHARE_STICKER:
                i = "page";
                break;
            case s.pp.RED_PACKET:
                i = "redpacket";
                break;
            case s.pp.SHARE_MINI_APP:
                i = "mini_app";
                break;
            case s.pp.REF_MSG:
                i = "ref_message";
                break;
            case s.pp.FRIEND_VIDEO_DM_COMMENT:
                i = "friend_video_card";
                break;
            case s.pp.GROUP_INVITE_MESSAGE:
                var o = null == t ? void 0 : t["a:group_invite"];
                if ("1" === "".concat(o))
                    i = "group_card";
                else {
                    var c = null == r ? void 0 : r.aweme_invite_card;
                    i = 1 === (null == c ? void 0 : c.card_type) ? "group_card" : "unknown"
                }
                break;
            case s.pp.COMMAND_SHARE:
                i = "token_video_card";
                break;
            case s.pp.SHARE_LIVE:
                i = a === s.c6.LIVE_KTV ? "familiar_invitation_ktv" : a === s.c6.LIVE_VOICE ? "familiar_invitation_chatting_room" : "live_card";
                break;
            case s.pp.FEED_LIVE_SHARE_INVITE_MESSAGE:
                i = "co_play_invitation";
                break;
            case s.pp.DIRECT_INVITE:
                i = "invite";
                break;
            case s.pp.GAME_INVITE:
            case s.pp.GAME_INVITE_V2:
                i = "chat_game";
                break;
            case s.pp.CLOUD_GAME_INVITE:
                i = "cloud_game_card";
                break;
            case s.pp.COUPON_ENTERPRISE:
            case s.pp.COUPON_FANS_GROUP:
                i = "fansgroup_coupon";
                break;
            case s.pp.CHAT_CALL:
                i = "chat_call";
                break;
            case s.pp.SHARE_PICTURE:
                i = "share_picture";
                break;
            case s.pp.AT_FRIEND_INTERACT:
                i = "publish_at";
                break;
            case s.pp.URGE_LEAVE_MESSAGE:
                i = u.ImSdk.isFromGroupOwner(e) ? "reply_to_update" : "ask_for_update";
                break;
            case s.pp.SHARE_LOCATION:
                i = "location";
                break;
            case s.pp.STORY_PICTURE_ONCE_VIEW:
                i = "only_once_pic";
                break;
            case s.pp.STORY_VIDEO_ONCE_VIEW:
                i = "only_once_video";
                break;
            default:
                i = "unknown"
            }
            return i
        }, E = (r = {},
        (0,
        a.Z)(r, d, "group"),
        (0,
        a.Z)(r, v, "private"),
        r), p = {
            chat_page: "chat_page",
            chat_panel: "chat_panel",
            share_board: "share_board",
            share_message: "share_message",
            chat_notif: "chat_notif",
            push: "push",
            hover_icon: "hover_icon",
            im_private: "im_private"
        }
    },
    64790: function(e, n, t) {
        t.d(n, {
            Gb: function() {
                return o
            }
        });
        var r = t(937)
          , a = t(73824)
          , i = t(6881)
          , o = function(e, n) {
            try {
                var t = n || {};
                i.iL.sendLog(e, (0,
                r.Z)({
                    enter_from: a.yW(),
                    previous_page: a.vM()
                }, t))
            } catch (o) {}
        }
    },
    46758: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return It
            }
        });
        var r, a, i, o = t(46040), s = t(937), l = t(85116), u = t(83009), c = t.n(u), d = t(51235), v = t.n(d), f = t(21528), _ = t(70335), E = t.n(_), p = t(69509), m = t(30234), h = t(48382), I = t(88263), g = t(94), S = t(62071), O = t(3911), N = t(73590), T = t(20388), M = t(5226), C = t(19387), L = t(90064), y = t(79976), k = t(93006), R = t(41882), w = t(70675), A = t(36316);
        function Z() {
            return Z = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            Z.apply(this, arguments)
        }
        var b, P, U, D, G = function(e) {
            return f.createElement("svg", Z({
                width: 20,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = f.createElement("circle", {
                cx: 10,
                cy: 10,
                r: 10,
                fill: "url(#atIcon_svg__paint0_linear_731_20431)"
            })), a || (a = f.createElement("path", {
                d: "M10.18 14.715c.346 0 1.016-.075 1.016-.075s.554-.062.498-.605c-.057-.543-.612-.43-.612-.43l-.098.011-.182.019-.166.014c-.13.01-.245.014-.341.014a4.405 4.405 0 01-1.525-.254 3.404 3.404 0 01-1.192-.729 3.273 3.273 0 01-.775-1.146 3.945 3.945 0 01-.275-1.509c0-.523.087-1.012.262-1.464a3.57 3.57 0 01.737-1.178 3.368 3.368 0 011.147-.786 3.75 3.75 0 011.48-.285c.495 0 .952.067 1.37.202.42.136.78.336 1.083.602.304.267.54.596.712.99.17.392.256.842.256 1.349 0 .6-.11 1.077-.327 1.432-.218.355-.493.533-.826.533-.163 0-.272-.05-.327-.146a.72.72 0 01-.083-.362c0-.126.015-.261.044-.405.03-.144.054-.275.07-.393l.459-2.11c.047-.229-.058-.468-.456-.52-.397-.053-.63.175-.665.346l-.08.395h-.013c-.068-.194-.214-.359-.436-.494s-.495-.203-.82-.203a2.14 2.14 0 00-1.025.247 2.62 2.62 0 00-.794.653c-.222.27-.393.579-.513.925a3.204 3.204 0 00-.179 1.052c0 .609.158 1.103.474 1.483.316.38.765.57 1.345.57.385 0 .71-.09.974-.272.265-.181.461-.374.59-.577h.064c0 .246.102.448.307.609.205.16.478.24.82.24.328.002.653-.065.955-.196.303-.13.572-.327.807-.59.235-.26.423-.586.564-.975a3.93 3.93 0 00.211-1.344c0-.684-.126-1.28-.378-1.787A3.711 3.711 0 0013.325 6.3a4.365 4.365 0 00-1.454-.76 5.693 5.693 0 00-1.692-.254c-.674 0-1.309.12-1.902.361a4.915 4.915 0 00-1.557.995 4.662 4.662 0 00-1.05 1.496 4.553 4.553 0 00-.385 1.876c0 .684.117 1.316.352 1.895.235.578.566 1.075.993 1.489.427.414.942.737 1.544.97.602.232 1.27.348 2.005.348zm-.462-3.308a.775.775 0 01-.41-.095.796.796 0 01-.25-.24.857.857 0 01-.128-.318 1.762 1.762 0 01-.032-.323c0-.203.028-.414.083-.634.056-.22.137-.42.244-.602.1-.174.233-.326.39-.45a.855.855 0 01.539-.177c.162 0 .299.034.41.101a.77.77 0 01.262.26c.064.105.11.224.135.355.025.13.038.264.038.4 0 .168-.023.354-.07.557-.045.198-.12.388-.224.564-.1.17-.236.317-.397.43a1.002 1.002 0 01-.59.172z",
                fill: "#fff"
            })), i || (i = f.createElement("defs", null, f.createElement("linearGradient", {
                id: "atIcon_svg__paint0_linear_731_20431",
                x1: 10,
                y1: 0,
                x2: 11.339,
                y2: 19.91,
                gradientUnits: "userSpaceOnUse"
            }, f.createElement("stop", {
                stopColor: "#FFD771"
            }), f.createElement("stop", {
                offset: 1,
                stopColor: "#FFAD10"
            })))))
        };
        function x() {
            return x = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            x.apply(this, arguments)
        }
        var F, V, H, W = function(e) {
            return f.createElement("svg", x({
                width: 20,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), b || (b = f.createElement("circle", {
                cx: 10,
                cy: 10,
                r: 10,
                fill: "url(#commentIcon_svg__paint0_linear_731_20419)"
            })), P || (P = f.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 13.464c2.627 0 4.757-1.85 4.757-4.133 0-2.282-2.13-4.133-4.757-4.133s-4.757 1.85-4.757 4.133 2.13 4.133 4.757 4.133zm-2.4-3.312a.618.618 0 100-1.237.618.618 0 000 1.237zm3.018-.624a.619.619 0 11-1.237 0 .619.619 0 011.237 0zm1.782.618a.619.619 0 100-1.237.619.619 0 000 1.237z",
                fill: "#fff"
            })), U || (U = f.createElement("path", {
                d: "M10.07 13.788v-.674l2.946-.599-2.138 1.667a.5.5 0 01-.807-.394z",
                fill: "#fff"
            })), D || (D = f.createElement("defs", null, f.createElement("linearGradient", {
                id: "commentIcon_svg__paint0_linear_731_20419",
                x1: 10,
                y1: 0,
                x2: 10,
                y2: 20,
                gradientUnits: "userSpaceOnUse"
            }, f.createElement("stop", {
                stopColor: "#5FDAFF"
            }), f.createElement("stop", {
                offset: 1,
                stopColor: "#076EFF"
            })))))
        };
        function B() {
            return B = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            B.apply(this, arguments)
        }
        var Y, j, K = function(e) {
            return f.createElement("svg", B({
                width: 20,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), F || (F = f.createElement("circle", {
                cx: 10,
                cy: 10,
                r: 10,
                fill: "url(#diggIcon_svg__paint0_linear_728_20419)"
            })), V || (V = f.createElement("g", {
                filter: "url(#diggIcon_svg__filter0_i_728_20419)"
            }, f.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10.378 7.021a2.503 2.503 0 00-.42.574 2.424 2.424 0 00-.419-.575 1.97 1.97 0 00-1.436-.591c-1.377 0-2.512 1.108-2.512 2.743 0 1.815 1.524 3.615 3.857 5.135.178.12.375.228.51.228.133 0 .334-.108.513-.228 2.333-1.52 3.856-3.32 3.856-5.135 0-1.635-1.135-2.743-2.511-2.743a1.97 1.97 0 00-1.438.592z",
                fill: "#fff"
            }))), H || (H = f.createElement("defs", null, f.createElement("linearGradient", {
                id: "diggIcon_svg__paint0_linear_728_20419",
                x1: 10,
                y1: 0,
                x2: 10,
                y2: 20,
                gradientUnits: "userSpaceOnUse"
            }, f.createElement("stop", {
                stopColor: "#FFA189"
            }), f.createElement("stop", {
                offset: 1,
                stopColor: "#FF1F5F"
            })), f.createElement("filter", {
                id: "diggIcon_svg__filter0_i_728_20419",
                x: 5.591,
                y: 6.429,
                width: 8.736,
                height: 9.598,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, f.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), f.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), f.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), f.createElement("feOffset", {
                dy: 1.492
            }), f.createElement("feGaussianBlur", {
                stdDeviation: 2.238
            }), f.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: -1,
                k3: 1
            }), f.createElement("feColorMatrix", {
                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.34 0"
            }), f.createElement("feBlend", {
                in2: "shape",
                result: "effect1_innerShadow_728_20419"
            })))))
        };
        function J() {
            return J = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            J.apply(this, arguments)
        }
        var q, z, X = function(e) {
            return f.createElement("svg", J({
                width: 20,
                height: 20,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Y || (Y = f.createElement("g", {
                clipPath: "url(#danmakuIcon_svg__clip0_742_20449)"
            }, f.createElement("path", {
                d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z",
                fill: "url(#danmakuIcon_svg__paint0_linear_742_20449)"
            }), f.createElement("path", {
                d: "M5.836 6.328h2.06V8.8h-2.06v2.06h2.06v2.883h-2.06M9.54 10.448V7.152h4.119v3.296h-4.12zM9.125 12.098h4.944M11.602 7.152v7.004M10.367 5.918l.824 1.236M12.84 5.918l-.824 1.236M9.54 8.8h4.119",
                stroke: "#fff",
                strokeWidth: 1.1,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))), j || (j = f.createElement("defs", null, f.createElement("linearGradient", {
                id: "danmakuIcon_svg__paint0_linear_742_20449",
                x1: 10.833,
                y1: 20,
                x2: 11.25,
                y2: -.417,
                gradientUnits: "userSpaceOnUse"
            }, f.createElement("stop", {
                stopColor: "#22A2FF"
            }), f.createElement("stop", {
                offset: 1,
                stopColor: "#45B9FF"
            })), f.createElement("clipPath", {
                id: "danmakuIcon_svg__clip0_742_20449"
            }, f.createElement("path", {
                fill: "#fff",
                d: "M0 0h20v20H0z"
            })))))
        }, Q = "K2b3Pf9c", $ = "GDTi27FS", ee = "kytoJBGY", ne = "A9DXKZXS", te = (q = {},
        (0,
        l.Z)(q, S.I6.AT, G),
        (0,
        l.Z)(q, S.I6.COMMENT, W),
        (0,
        l.Z)(q, S.I6.COMMENT_DANMAKU, X),
        (0,
        l.Z)(q, S.I6.DIGG, K),
        q), re = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n = e.userSecUid
              , t = void 0 === n ? "" : n
              , r = e.srcList
              , a = void 0 === r ? [] : r
              , i = e.className
              , o = e.avatarClassName
              , s = e.iconType
              , l = e.iconWidth
              , u = void 0 === l ? 22 : l
              , c = e.iconHeight
              , d = void 0 === c ? 22 : c
              , v = e.iconViewBox
              , _ = void 0 === v ? "0 0 22 22" : v
              , p = e.iconClassName
              , m = e.canEnterUserPage
              , h = void 0 === m || m
              , I = e.showScene
              , O = void 0 === I ? S.DL.NOTICE_LIST : I
              , N = e.showBadge
              , M = void 0 !== N && N
              , C = te[s] || "";
            return h && t ? f.createElement(w.a, {
                href: R.HC(t, "enter_from=".concat(T.QZ[O])),
                target: "_blank",
                rel: "noopener noreferrer"
            }, f.createElement("div", {
                className: E()(Q, i),
                "data-e2e": "user-avatar-card",
                onClick: function(e) {
                    return e.stopPropagation()
                }
            }, f.createElement(A.Z, {
                srcList: a,
                className: E()(Q, o)
            }), M ? f.createElement("div", {
                className: ne
            }) : null, C ? f.createElement("div", {
                className: $
            }, f.createElement(g.Z, {
                src: C,
                width: u,
                height: d,
                viewBox: _,
                className: E()(ee, p)
            })) : null)) : f.createElement("div", {
                className: E()(Q, i),
                onClick: function(e) {
                    return e.stopPropagation()
                }
            }, f.createElement(A.Z, {
                srcList: a,
                className: E()(Q, o)
            }), M ? f.createElement("div", {
                className: ne
            }) : null, C ? f.createElement("div", {
                className: $
            }, f.createElement(g.Z, {
                src: C,
                width: u,
                height: d,
                viewBox: _,
                className: E()(ee, p)
            })) : null)
        }
        ))), ae = "Bu5DrCRo", ie = "h3WgEeUf", oe = "DnOfko61", se = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n = e.userName
              , t = void 0 === n ? "" : n
              , r = e.labelText
              , a = void 0 === r ? "" : r
              , i = e.showLabel
              , o = void 0 === i || i
              , s = e.className
              , l = e.userSecUid
              , u = void 0 === l ? "" : l
              , c = e.canEnterUserPage
              , d = void 0 === c || c
              , v = e.showScene
              , _ = void 0 === v ? S.DL.NOTICE_LIST : v;
            return f.createElement("div", {
                className: E()(ae, s),
                onClick: function(e) {
                    return e.stopPropagation()
                }
            }, d && u ? f.createElement(w.a, {
                className: ie,
                href: R.HC(u, "enter_from=".concat(T.QZ[_])),
                target: "_blank",
                rel: "noopener noreferrer"
            }, f.createElement("div", {
                className: ie,
                "data-e2e": "user-name-card"
            }, t)) : f.createElement("div", {
                className: ie
            }, t), o && a ? f.createElement("div", {
                className: oe
            }, a) : null)
        }
        )));
        function le() {
            return le = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            le.apply(this, arguments)
        }
        var ue, ce = function(e) {
            return f.createElement("svg", le({
                width: 36,
                height: 24,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), z || (z = f.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M.546 3.115A3.115 3.115 0 013.661 0h12.578l-2.716 3.746 4.3 4.032-1.584 4.031 4.299-4.031-2.715-4.032L22.348 0h4.672a3.115 3.115 0 013.114 3.115v3.81l4.057-3.23a.779.779 0 011.264.61v14.75a.779.779 0 01-1.264.61l-4.057-3.232v3.552A3.115 3.115 0 0127.02 23.1H3.66a3.115 3.115 0 01-3.114-3.115V3.115z",
                fill: "#E2E2E7"
            })))
        };
        function de() {
            return de = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            de.apply(this, arguments)
        }
        var ve, fe = function(e) {
            return f.createElement("svg", de({
                width: 9,
                height: 11,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ue || (ue = f.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.224 3.169L2.036.924a.779.779 0 00-1.227.637v8.237c0 .631.711 1 1.227.637l5.85-4.119a.779.779 0 000-1.273L6.19 3.849l-1.952 1.83.986-2.51z",
                fill: "#000"
            })))
        }, _e = "I6jGSpsN", Ee = "EhKXnyvy", pe = "gbAjvUut", me = "wRVfZ47G", he = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t = e.awemeInfo, r = void 0 === t ? {} : t, a = e.className, i = r.aweme_id, o = r.status, s = void 0 === o ? {} : o, l = r.video, u = void 0 === l ? {} : l;
            return !i || s.is_delete ? f.createElement("div", {
                className: E()(_e, Ee, a)
            }, f.createElement(g.Z, {
                src: ce,
                className: pe,
                width: 36,
                height: 24,
                viewBox: "0 0 36 24"
            }), f.createElement(g.Z, {
                src: fe,
                width: 8,
                height: 10,
                viewBox: "0 0 9 11",
                className: me
            })) : f.createElement(A.Z, {
                srcList: (null == u || null === (n = u.cover) || void 0 === n ? void 0 : n.url_list) || [],
                className: E()(_e, a)
            })
        }
        ))), Ie = "sKootKqo", ge = "NlkQMpmQ", Se = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n = e.commentText
              , t = void 0 === n ? "" : n
              , r = e.stickerInfo
              , a = void 0 === r ? null : r
              , i = e.needEllipsis
              , o = void 0 !== i && i
              , s = e.className
              , l = e.commentStatus
              , u = void 0 === l ? S.ql.ALL_VISIBLE : l
              , c = e.showContentType
              , d = void 0 === c ? S.PY.COMMENT_INFO : c
              , v = e.awemeInfo
              , _ = (void 0 === v ? {} : v).status
              , p = void 0 === _ ? {} : _
              , m = d === S.PY.AWEME_INFO && (null == p ? void 0 : p.is_delete) || d === S.PY.COMMENT_INFO && u === S.ql.DELETE;
            return f.createElement("div", {
                className: E()(Ie, s)
            }, m ? f.createElement("div", null, d === S.PY.AWEME_INFO ? "\u6b64\u4f5c\u54c1\u5df2\u5220\u9664" : "\u6b64\u8bc4\u8bba\u5df2\u5220\u9664") : f.createElement("pre", {
                className: o ? ge : ""
            }, t || "", a ? "[\u8868\u60c5]" : null))
        }
        ))), Oe = "lTqy3Xqe", Ne = "lIZoZek9", Te = "cXefbldS", Me = "dah9rZSP", Ce = "ddvgjF_p", Le = "qIILdamr", ye = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t, r = e.noticeInfo, a = void 0 === r ? {} : r, i = e.createTime, o = void 0 === i ? "" : i, s = e.awemeId, u = void 0 === s ? "0" : s, c = e.noticeType, d = e.canEnterUserPage, v = void 0 === d || d, _ = e.needContentEllipsis, p = void 0 !== _ && _, h = e.showAwemeCover, I = void 0 === h || h, g = e.handleAwemeStatus, T = void 0 === g ? function() {}
            : g, M = e.handleClickNotice, C = void 0 === M ? function() {}
            : M, L = e.showScene, y = e.userNameClassName, k = e.contentInfoClassName, R = e.hintClassName, w = e.closeRender, A = e.showNoticeUnread, Z = void 0 !== A && A, b = e.noticeStore, P = void 0 === b ? {} : b, U = a.user_info, D = void 0 === U ? {} : U, G = a.sub_type, x = void 0 === G ? S.vw.NORMAL : G, F = a.aweme, V = void 0 === F ? {} : F, H = a.label_text, W = void 0 === H ? "" : H, B = a.content, Y = void 0 === B ? "" : B, j = a.sticker, K = void 0 === j ? null : j, J = a.comment_status, q = void 0 === J ? S.ql.ALL_VISIBLE : J, z = P.abTestData, X = (0,
            f.useCallback)((function() {
                var e, n = V.status, t = void 0 === n ? {} : n, r = t.is_delete;
                if (u && "0" !== u && !(void 0 !== r && r)) {
                    var i = a.schema_url
                      , o = (null === (e = (void 0 === i ? "" : i).match(/cid=(\d+)/)) || void 0 === e ? void 0 : e[1]) || "";
                    null == C || C({
                        awemeId: u,
                        cid: o
                    }, t)
                } else
                    null == T || T(S.bj.DELETED)
            }
            ), [u, a]);
            return f.createElement("div", {
                className: E()(Oe, (0,
                l.Z)({}, Ne, z.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default)),
                onClick: X
            }, f.createElement("div", {
                className: Te
            }, f.createElement(re, {
                srcList: (null == D || null === (n = D.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                userSecUid: null == D ? void 0 : D.sec_uid,
                iconType: c,
                canEnterUserPage: v,
                showScene: L,
                showBadge: Z
            }), f.createElement("div", {
                className: Me
            }, f.createElement(se, {
                userName: (null == D ? void 0 : D.remark_name) || (null == D ? void 0 : D.nickname) || "",
                labelText: W,
                userSecUid: null == D ? void 0 : D.sec_uid,
                canEnterUserPage: v,
                showScene: L,
                className: y
            }), f.createElement(Se, {
                commentText: Y,
                stickerInfo: K,
                needEllipsis: p,
                commentStatus: q,
                showContentType: null === (t = O.zC[c]) || void 0 === t ? void 0 : t[x],
                awemeInfo: V,
                className: k
            }), f.createElement("div", {
                className: E()(Ce, R)
            }, f.createElement("span", null, (null === N.P2 || void 0 === N.P2 ? void 0 : N.P2[x]) || ""), f.createElement("span", null, o)))), I ? f.createElement(he, {
                awemeInfo: V,
                className: Le
            }) : w)
        }
        ))), ke = "A4OfaPVs", Re = "c4tjWo6y", we = "IPdzKF6e", Ae = "cXukFkOO", Ze = "BtcoPtLq", be = "XFkeErTq", Pe = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t = e.noticeInfo, r = void 0 === t ? {} : t, a = e.createTime, i = void 0 === a ? "" : a, o = e.awemeId, s = void 0 === o ? "0" : o, u = e.noticeType, c = e.canEnterUserPage, d = void 0 === c || c, v = e.needContentEllipsis, _ = void 0 !== v && v, p = e.showAwemeCover, h = void 0 === p || p, I = e.handleAwemeStatus, g = void 0 === I ? function() {}
            : I, T = e.handleClickNotice, M = void 0 === T ? function() {}
            : T, C = e.showScene, L = e.userNameClassName, y = e.contentInfoClassName, k = e.hintClassName, R = e.closeRender, w = e.showNoticeUnread, A = void 0 !== w && w, Z = e.noticeStore, b = void 0 === Z ? {} : Z, P = r || {}, U = P.aweme, D = void 0 === U ? {} : U, G = P.comment, x = void 0 === G ? {} : G, F = P.comment_type, V = void 0 === F ? S.W1.NORMAL : F, H = P.label_text, W = void 0 === H ? "" : H, B = b.abTestData, Y = x.user, j = void 0 === Y ? {} : Y, K = (0,
            f.useCallback)((function() {
                var e = D.status
                  , n = void 0 === e ? {} : e
                  , t = n.is_delete;
                if (s && "0" !== s && !(void 0 !== t && t)) {
                    var r = x.cid;
                    null == M || M({
                        awemeId: s,
                        cid: void 0 === r ? "" : r
                    }, n)
                } else
                    null == g || g(S.bj.DELETED)
            }
            ), [s, x]);
            return f.createElement("div", {
                className: E()(ke, (0,
                l.Z)({}, Re, B.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default)),
                onClick: K
            }, f.createElement("div", {
                className: we
            }, f.createElement(re, {
                srcList: (null == j || null === (n = j.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                userSecUid: null == j ? void 0 : j.sec_uid,
                iconType: u,
                canEnterUserPage: d,
                showScene: C,
                showBadge: A
            }), f.createElement("div", {
                className: Ae
            }, f.createElement(se, {
                userName: (null == j ? void 0 : j.remark_name) || (null == j ? void 0 : j.nickname) || "",
                labelText: W,
                userSecUid: null == j ? void 0 : j.sec_uid,
                canEnterUserPage: d,
                showScene: C,
                className: L
            }), f.createElement(Se, {
                commentText: (null == x ? void 0 : x.text) || "",
                stickerInfo: (null == x ? void 0 : x.sticker) || null,
                needEllipsis: _,
                commentStatus: null == x ? void 0 : x.status,
                showContentType: O.zC[u],
                className: y
            }), f.createElement("div", {
                className: E()(Ze, k)
            }, f.createElement("span", null, (null === N.JO || void 0 === N.JO ? void 0 : N.JO[V]) || ""), f.createElement("span", null, i)))), h ? f.createElement(he, {
                awemeInfo: D,
                className: be
            }) : R)
        }
        ))), Ue = Pe, De = t(70355), Ge = t.n(De), xe = t(4200), Fe = t.n(xe), Ve = t(77355), He = t.n(Ve);
        function We() {
            return We = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            We.apply(this, arguments)
        }
        var Be, Ye = function(e) {
            return f.createElement("svg", We({
                width: 5,
                height: 8,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ve || (ve = f.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M.167.167a.571.571 0 000 .808L3.192 4 .167 7.025a.571.571 0 10.808.808l3.429-3.429a.571.571 0 000-.808L.975.167a.571.571 0 00-.808 0z",
                fill: "#2F3035",
                fillOpacity: .7
            })))
        }, je = "huh51h8B", Ke = "VvSbBZk0", Je = "IeQeSNLn", qe = "Cx4pISix", ze = "jCIshxHa", Xe = "asawNNdk", Qe = "c6OtXdKC", $e = "Wegj2MGA", en = "FhKLZzLd", nn = "NLpGuCE6", tn = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t, r, a = e.noticeStore, i = void 0 === a ? {} : a, o = e.noticeInfo, s = void 0 === o ? {} : o, u = e.createTime, c = void 0 === u ? "" : u, d = e.noticeId, v = void 0 === d ? "" : d, _ = e.awemeId, p = void 0 === _ ? "0" : _, h = e.noticeType, I = e.canEnterUserPage, M = void 0 === I || I, C = e.showAwemeCover, L = void 0 === C || C, y = e.handleAwemeStatus, k = void 0 === y ? function() {}
            : y, Z = e.handleClickNotice, b = void 0 === Z ? function() {}
            : Z, P = e.showScene, U = void 0 === P ? S.DL.NOTICE_LIST : P, D = e.userNameClassName, G = e.contentInfoClassName, x = e.hintClassName, F = e.closeRender, V = e.showNoticeUnread, H = void 0 !== V && V, W = s || {}, B = W.aweme, Y = void 0 === B ? {} : B, j = W.comment, K = void 0 === j ? {} : j, J = W.from_user, q = void 0 === J ? [] : J, z = W.merge_count, X = void 0 === z ? 1 : z, Q = W.digg_type, $ = void 0 === Q ? S.vq.NORMAL : Q, ee = W.label_text, ne = void 0 === ee ? "" : ee, te = W.danmaku_info, ae = (null == q ? void 0 : q[0]) || {}, ie = X > 1 && (null == q ? void 0 : q.length) > 1, oe = (0,
            f.useRef)(null), le = i.abTestData, ue = (0,
            f.useCallback)((function() {
                var e = Y.status
                  , n = void 0 === e ? {} : e
                  , t = n.is_delete;
                if (p && "0" !== p && !(void 0 !== t && t)) {
                    var r = K.cid
                      , a = {
                        awemeId: p,
                        cid: void 0 === r ? "" : r
                    }
                      , i = {
                        danmakuId: null == te ? void 0 : te.danmaku_id,
                        danmakuOffset: null == te ? void 0 : te.offset,
                        status: null == te ? void 0 : te.status
                    };
                    null == b || b(a, n, i)
                } else
                    null == k || k(S.bj.DELETED)
            }
            ), [p, K]);
            return (0,
            f.useEffect)((function() {
                switch ($) {
                case S.vq.NORMAL:
                case S.vq.DIGG_ITEM:
                    oe.current = p;
                    break;
                case S.vq.DIGG_COMMENT:
                    oe.current = v
                }
            }
            ), [$, v, s, p]),
            f.createElement("div", {
                className: E()(je, (0,
                l.Z)({}, Ke, le.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default)),
                style: {
                    height: ie ? 116 : 90
                },
                onClick: ue
            }, f.createElement("div", {
                className: Je
            }, f.createElement(re, {
                srcList: (null == ae || null === (n = ae.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                userSecUid: null == ae ? void 0 : ae.sec_uid,
                iconType: h,
                canEnterUserPage: M,
                showScene: U,
                showBadge: H
            }), f.createElement("div", {
                className: qe
            }, f.createElement(se, {
                userName: (null == ae ? void 0 : ae.remark_name) || (null == ae ? void 0 : ae.nickname) || "",
                labelText: ne,
                userSecUid: null == ae ? void 0 : ae.sec_uid,
                canEnterUserPage: M,
                showScene: U,
                className: D
            }), f.createElement("div", {
                className: E()($e, G)
            }, Ge()(t = "".concat(X > 1 ? "\u7b49".concat(X, "\u4eba") : "")).call(t, N.bk[$])), ie ? f.createElement("div", {
                className: ze
            }, null == q || null === (r = Fe()(q).call(q, 1, 5)) || void 0 === r ? void 0 : He()(r).call(r, (function(e) {
                var n;
                return f.createElement("div", {
                    className: Xe,
                    key: null == e ? void 0 : e.uid
                }, f.createElement(w.a, {
                    href: R.HC((null == e ? void 0 : e.sec_uid) || "", "enter_from=".concat(T.QZ[U])),
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, f.createElement(A.Z, {
                    srcList: (null == e || null === (n = e.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                    className: Xe,
                    onClick: function(e) {
                        return e.stopPropagation()
                    }
                })))
            }
            )), (null == q ? void 0 : q.length) > 5 ? f.createElement("div", {
                className: E()(Xe, Qe),
                onClick: function(e) {
                    var n = oe.current;
                    n && "0" !== n && (null == i || i.setUserListFilter({
                        itemId: n,
                        type: O.FJ[S.I6.DIGG],
                        diggType: $
                    }),
                    null == i || i.setShowUserList(!0),
                    e.stopPropagation())
                }
            }, f.createElement(g.Z, {
                src: Ye,
                width: 5,
                height: 8,
                viewBox: "0 0 5 8",
                className: Qe
            })) : null) : null, f.createElement("div", {
                className: E()(en, x)
            }, c))), L ? f.createElement(he, {
                awemeInfo: Y,
                className: nn
            }) : F)
        }
        ))), rn = tn, an = t(22545), on = t(44742), sn = t.n(on), ln = t(46227), un = t.n(ln), cn = t(47815), dn = "pLpStlYM", vn = "V3rixI1L", fn = "LPCPf3pl", _n = "MFls0NFi", En = "FINWNhO2", pn = "LfghZ8V1", mn = "mDP510uT", hn = "knLKYJIn", In = "lqmIOiC4", gn = "oV4r9RWT", Sn = "BPcOj6sI", On = t(68399), Nn = t(70960), Tn = t(41516), Mn = t(96019), Cn = t(19085), Ln = t(5700), yn = t.n(Ln), kn = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t, r = e.noticeInfo, a = void 0 === r ? {} : r, i = e.createTime, u = void 0 === i ? "" : i, c = e.noticeType, d = e.noticeId, v = void 0 === d ? "" : d, _ = e.canEnterUserPage, p = void 0 === _ || _, I = e.handleClickNotice, g = void 0 === I ? function() {}
            : I, O = e.needContentEllipsis, M = void 0 !== O && O, C = e.userNameClassName, k = e.contentInfoClassName, R = e.hintClassName, w = e.showNoticeUnread, A = void 0 !== w && w, Z = e.noticeStore, b = void 0 === Z ? {} : Z, P = e.noticeLogInfo, U = void 0 === P ? {} : P, D = a.from_user, G = void 0 === D ? {} : D, x = a.content, F = void 0 === x ? "" : x, V = b.followStatusMap, H = void 0 === V ? {} : V, W = b.abTestData, B = (0,
            f.useState)(!1), Y = (0,
            o.Z)(B, 2), j = Y[0], K = Y[1], J = (0,
            f.useState)(S.EV.NoRelationStatus), q = (0,
            o.Z)(J, 2), z = q[0], X = q[1], Q = (0,
            f.useState)(S.EV.NoRelationStatus), $ = (0,
            o.Z)(Q, 2), ee = $[0], ne = $[1], te = (0,
            f.useCallback)((function() {
                return yn()().format("YYYY-MM-DD") !== h.$o(Cn.LocalStorageKeys.LastDayEnterNotice)
            }
            ), []), ae = (0,
            f.useCallback)((function() {
                return h.qQ(Cn.LocalStorageKeys.LastDayEnterNotice, yn()().format("YYYY-MM-DD"))
            }
            ), []), ie = (0,
            f.useCallback)((function() {
                te() && ((0,
                L.Gb)("interact_cell_click_all", {}),
                ae())
            }
            ), []), oe = un()((0,
            an.Z)(sn().mark((function e() {
                var n, t, r, a, i, l, u, c, d;
                return sn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ((0,
                            L.Gb)("interact_cell_click", (0,
                            s.Z)((0,
                            s.Z)({}, U), {}, {
                                follow_act: T.M5.APPROVE_FOLLOW_REQUEST,
                                personal_relation: String(ee)
                            })),
                            ie(),
                            n = G.uid,
                            t = void 0 === n ? "" : n) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            return e.next = 7,
                            (0,
                            On.F)(null == Nn ? void 0 : Tn.g(t));
                        case 7:
                            if (r = e.sent,
                            a = (0,
                            o.Z)(r, 2),
                            i = a[0],
                            l = a[1],
                            !i) {
                                e.next = 13;
                                break
                            }
                            return e.abrupt("return");
                        case 13:
                            0 === (l || {}).status_code ? (K(!1),
                            X(S.EV.FollowingStatus),
                            null === (u = b.setFollowStatusMap) || void 0 === u || u.call(b, t, S.$y.FOLLOWER, S.EV.FollowingStatus)) : (c = l.status_msg,
                            d = void 0 === c ? "" : c,
                            y.J.emit(y.v.SHOW_TOAST, {
                                text: d
                            }));
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), 500), le = function() {
                var e = (0,
                an.Z)(sn().mark((function e() {
                    var n, t, r, a;
                    return sn().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ((0,
                                L.Gb)("interact_cell_click", (0,
                                s.Z)((0,
                                s.Z)({}, U), {}, {
                                    follow_act: T.M5.REJECT_FOLLOW_REQUEST,
                                    personal_relation: String(ee)
                                })),
                                ie(),
                                v) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                return e.next = 6,
                                (0,
                                On.F)(null == Nn ? void 0 : Mn.Zt(S.pC.REJECT_FOLLOW_REQUEST, v));
                            case 6:
                                if (n = e.sent,
                                t = (0,
                                o.Z)(n, 2),
                                r = t[0],
                                a = t[1],
                                !r) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("return");
                            case 12:
                                0 === (a || {}).status_code && y.J.emit(y.v.DELETE_NOTICE, v);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), ue = un()(function() {
                var e = (0,
                an.Z)(sn().mark((function e(n) {
                    var t, r, a, i, l, u, c, d, v, f, _;
                    return sn().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if ((0,
                                L.Gb)("interact_cell_click", (0,
                                s.Z)((0,
                                s.Z)({}, U), {}, {
                                    follow_act: T.M5[n],
                                    personal_relation: String(ee)
                                })),
                                ie(),
                                t = G.uid,
                                r = void 0 === t ? "" : t) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return e.next = 7,
                                (0,
                                On.F)(null == Nn ? void 0 : Tn.P(r, n));
                            case 7:
                                if (a = e.sent,
                                i = (0,
                                o.Z)(a, 2),
                                l = i[0],
                                u = i[1],
                                !l) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return");
                            case 13:
                                d = (c = u || {}).follow_status,
                                0 === c.status_code ? ((0,
                                L.Gb)(T.M5[n], {
                                    enter_from: "interact_cell",
                                    personal_relation: String(ee)
                                }),
                                ne(d),
                                null === (v = b.setFollowStatusMap) || void 0 === v || v.call(b, r, S.$y.FOLLOW, d)) : (f = u.status_msg,
                                _ = void 0 === f ? "" : f,
                                y.J.emit(y.v.SHOW_TOAST, {
                                    text: _
                                }));
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }(), 500);
            return (0,
            f.useEffect)((function() {
                var e = c === S.RI.FOLLOW_REQUEST && (null == G ? void 0 : G.follower_request_status) === S.il.ACTIVE;
                K(e)
            }
            ), [G, c]),
            (0,
            f.useEffect)((function() {
                var e, n, t, r, a = null !== (e = null == H || null === (n = H[null == G ? void 0 : G.uid]) || void 0 === n ? void 0 : n[S.$y.FOLLOWER]) && void 0 !== e ? e : (null == G ? void 0 : G.follower_status) || S.EV.NoRelationStatus, i = null !== (t = null == H || null === (r = H[null == G ? void 0 : G.uid]) || void 0 === r ? void 0 : r[S.$y.FOLLOW]) && void 0 !== t ? t : (null == G ? void 0 : G.follow_status) || S.EV.NoRelationStatus;
                ne(i),
                X(a)
            }
            ), [G, H]),
            f.createElement("div", {
                className: E()(dn, (0,
                l.Z)({}, vn, W.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default)),
                onClick: g
            }, f.createElement("div", {
                className: fn
            }, f.createElement(re, {
                srcList: (null == G || null === (n = G.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                userSecUid: null == G ? void 0 : G.sec_uid,
                iconType: c,
                canEnterUserPage: p,
                showBadge: A
            }), f.createElement("div", {
                className: _n
            }, f.createElement(se, {
                userName: (null == G ? void 0 : G.remark_name) || (null == G ? void 0 : G.nickname) || "",
                showLabel: !1,
                userSecUid: null == G ? void 0 : G.sec_uid,
                canEnterUserPage: p,
                className: C,
                nameMaxWidth: j ? 110 : 148
            }), f.createElement("div", {
                className: E()(En, (0,
                l.Z)({}, pn, M), k),
                style: {
                    maxWidth: j ? 112 : 148
                }
            }, F || (null === N.LS || void 0 === N.LS ? void 0 : N.LS[c]) || ""), f.createElement("div", {
                className: E()(mn, R)
            }, u))), f.createElement("div", {
                className: hn
            }, j ? f.createElement(f.Fragment, null, f.createElement(cn.zx, {
                size: "small",
                type: "secondary",
                className: E()(In, gn),
                onClick: le
            }, "\u79fb\u9664"), f.createElement(cn.zx, {
                size: "small",
                className: E()(In, gn),
                onClick: oe
            }, "\u901a\u8fc7")) : f.createElement(cn.zx, {
                size: "small",
                className: E()(In, (0,
                l.Z)({}, Sn, ee !== S.EV.NoRelationStatus)),
                theme: ee === S.EV.NoRelationStatus ? "solid" : "border",
                onClick: function() {
                    var e = ee === S.EV.NoRelationStatus ? S.Ol.FOLLOW : S.Ol.UNFOLLOW;
                    e === S.Ol.UNFOLLOW ? y.J.emit(y.v.OPEN_CONFIRM_MODAL, {
                        content: "\u786e\u8ba4\u53d6\u6d88\u5173\u6ce8\uff1f",
                        onConfirm: function() {
                            return ue(e)
                        }
                    }) : ue(e)
                },
                "data-e2e": "notice-follow-button"
            }, null === N.MN || void 0 === N.MN || null === (t = N.MN[z]) || void 0 === t ? void 0 : t[ee])))
        }
        ))), Rn = kn, wn = "OlqG24AG", An = "r1RO4RJ1", Zn = "d9BF60X6";
        function bn() {
            return bn = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            bn.apply(this, arguments)
        }
        var Pn, Un = function(e) {
            return f.createElement("svg", bn({
                width: 12,
                height: 4,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Be || (Be = f.createElement("path", {
                d: "M2.667 2A1.333 1.333 0 110 2a1.333 1.333 0 012.667 0zM7.333 2a1.333 1.333 0 11-2.666 0 1.333 1.333 0 012.666 0zM10.667 3.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z",
                fill: "#2F3035",
                fillOpacity: .9
            })))
        }, Dn = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n = e.noticeId
              , t = void 0 === n ? "" : n
              , r = e.noticeType
              , a = e.noticeLogInfo
              , i = void 0 === a ? {} : a
              , s = (0,
            f.useState)(!1)
              , l = (0,
            o.Z)(s, 2)
              , u = l[0]
              , c = l[1]
              , d = (0,
            f.useRef)(null)
              , _ = i.interact_type
              , E = i.personal_relation
              , p = i.from_user_id
              , m = function() {
                var e = (0,
                an.Z)(sn().mark((function e() {
                    var n, a, i, s, l;
                    return sn().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return n = r === S.I6.FOLLOW_REQUEST ? S.pC.REJECT_FOLLOW_REQUEST : S.pC.REGULAR,
                                e.next = 5,
                                (0,
                                On.F)((0,
                                Mn.Zt)(n, t));
                            case 5:
                                if (a = e.sent,
                                i = (0,
                                o.Z)(a, 2),
                                s = i[0],
                                l = i[1],
                                !s) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                0 === (l || {}).status_code && y.J.emit(y.v.DELETE_NOTICE, t),
                                (0,
                                L.Gb)("interact_setting_click", {
                                    interact_type: _,
                                    personal_relation: E,
                                    from_user_id: p,
                                    action: T.xi[n]
                                });
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return f.createElement("div", {
                className: wn,
                onMouseEnter: function() {
                    var e = d.current;
                    e && (clearTimeout(e),
                    d.current = null),
                    u || (0,
                    L.Gb)("interact_setting_show", {
                        interact_type: _,
                        personal_relation: E,
                        from_user_id: p
                    }),
                    c(!0)
                },
                onMouseLeave: function() {
                    d.current = v()((function() {
                        c(!1),
                        d.current = null
                    }
                    ), 500)
                }
            }, f.createElement(g.Z, {
                src: Un,
                width: 12,
                height: 4,
                viewBox: "0 0 12 4"
            }), u ? f.createElement("div", {
                className: An
            }, f.createElement("div", {
                className: Zn,
                onClick: m
            }, "\u5220\u9664\u6d88\u606f")) : null)
        }
        ))), Gn = Dn, xn = "dvHdOHBA", Fn = "rmEibxTi", Vn = "QqT7FnLZ", Hn = "ekDWuDtJ", Wn = "hL2xzzXM", Bn = "IsoIzHyH", Yn = "BxFczFyO", jn = "Ov19m7T6", Kn = "G3G9U5Z5", Jn = "ekx80RQx", qn = "inWManc0", zn = "Bz3fEwXT";
        function Xn() {
            return Xn = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            Xn.apply(this, arguments)
        }
        var Qn, $n = function(e) {
            return f.createElement("svg", Xn({
                width: 8,
                height: 8,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Pn || (Pn = f.createElement("path", {
                d: "M7.667 7.667a.757.757 0 01-1.07 0l-2.32-2.319-2.318 2.32a.757.757 0 11-1.07-1.071l2.318-2.32L.888 1.96a.757.757 0 111.07-1.07l2.32 2.318L6.597.888a.757.757 0 011.07 1.07l-2.319 2.32 2.32 2.319a.757.757 0 010 1.07z",
                fill: "#2F3035",
                fillOpacity: .9
            })))
        }, et = "n_fP_Iis", nt = "JbXBr26h", tt = "o4E7qyns", rt = "tMxiYYjt", at = "k_ewICIi", it = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t = e.noticeInfo, r = void 0 === t ? {} : t, a = e.createTime, i = void 0 === a ? "" : a, o = (e.awemeId,
            e.noticeType), s = e.canEnterUserPage, u = void 0 === s || s, c = e.needContentEllipsis, d = void 0 !== c && c, v = (e.showAwemeCover,
            e.handleAwemeStatus,
            e.handleClickNotice,
            e.showScene), _ = e.userNameClassName, p = e.contentInfoClassName, h = e.hintClassName, I = (e.closeRender,
            e.showNoticeUnread), g = void 0 !== I && I, T = e.noticeStore, M = void 0 === T ? {} : T, C = r || {}, L = (C.aweme,
            C.comment), y = void 0 === L ? {} : L, k = C.comment_type, R = void 0 === k ? S.W1.NORMAL : k, w = C.label_text, A = void 0 === w ? "" : w, Z = (C.title,
            C.content,
            M.abTestData), b = y.user, P = void 0 === b ? {} : b;
            return f.createElement("div", {
                className: E()(et, (0,
                l.Z)({}, nt, Z.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default))
            }, f.createElement("div", {
                className: tt
            }, f.createElement(re, {
                srcList: (null == P || null === (n = P.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                userSecUid: null == P ? void 0 : P.sec_uid,
                iconType: o,
                canEnterUserPage: u,
                showScene: v,
                showBadge: g
            }), f.createElement("div", {
                className: rt
            }, f.createElement(se, {
                userName: (null == P ? void 0 : P.remark_name) || (null == P ? void 0 : P.nickname) || "\u672a\u77e5\u7528\u6237",
                labelText: A,
                userSecUid: null == P ? void 0 : P.sec_uid,
                canEnterUserPage: u,
                showScene: v,
                className: _
            }), f.createElement(Se, {
                commentText: (null == y ? void 0 : y.text) || "",
                stickerInfo: (null == y ? void 0 : y.sticker) || null,
                needEllipsis: d,
                commentStatus: null == y ? void 0 : y.status,
                showContentType: O.zC[o],
                className: p
            }), f.createElement("div", {
                className: E()(at, h)
            }, f.createElement("span", null, (null === N.JO || void 0 === N.JO ? void 0 : N.JO[R]) || ""), f.createElement("span", null, i)))))
        }
        ))), ot = it, st = "Nzo_GRMa", lt = "cXPe94Js", ut = "EGcTEIHv", ct = "VrcHcAPi", dt = "nLRUilW2", vt = "L61nWign", ft = t(59218), _t = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t = e.noticeInfo, r = void 0 === t ? {} : t, a = e.createTime, i = void 0 === a ? "" : a, o = e.awemeId, s = void 0 === o ? "7118023827577146632" : o, u = e.noticeType, c = e.canEnterUserPage, d = void 0 === c || c, v = e.needContentEllipsis, _ = void 0 !== v && v, p = e.showAwemeCover, h = void 0 === p || p, I = e.handleAwemeStatus, g = void 0 === I ? function() {}
            : I, N = e.handleClickNotice, T = void 0 === N ? function() {}
            : N, M = e.showScene, C = e.userNameClassName, L = e.contentInfoClassName, y = e.hintClassName, k = e.closeRender, R = e.showNoticeUnread, w = void 0 !== R && R, A = e.noticeStore, Z = void 0 === A ? {} : A, b = r || {}, P = b.aweme, U = void 0 === P ? {} : P, D = b.comment, G = void 0 === D ? {} : D, x = b.label_text, F = void 0 === x ? "" : x, V = b.cell_schema, H = void 0 === V ? "" : V, W = b.author, B = b.content, Y = b.from_user, j = null == Y ? void 0 : Y[0], K = Z.abTestData, J = (0,
            f.useMemo)((function() {
                var e = ft.parse(H) || {}
                  , n = e.danmaku_id
                  , t = e.danmaku_offset
                  , r = e.status;
                return {
                    danmakuId: n,
                    danmakuOffset: Number(t),
                    status: Number(r)
                }
            }
            ), [H]), q = (0,
            f.useCallback)((function() {
                var e = U.status
                  , n = void 0 === e ? {} : e
                  , t = n.is_delete;
                if (s && "0" !== s && !(void 0 !== t && t)) {
                    var r = G.cid;
                    null == T || T({
                        awemeId: s,
                        cid: void 0 === r ? "" : r
                    }, n, J)
                } else
                    null == g || g(S.bj.DELETED)
            }
            ), [s, G, J]);
            return f.createElement("div", {
                className: E()(st, (0,
                l.Z)({}, lt, K.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default)),
                onClick: q
            }, f.createElement("div", {
                className: ut
            }, f.createElement(re, {
                srcList: (null == j || null === (n = j.avatar_thumb) || void 0 === n ? void 0 : n.url_list) || [],
                userSecUid: null == j ? void 0 : j.sec_uid,
                iconType: u,
                canEnterUserPage: d,
                showScene: M,
                showBadge: w
            }), f.createElement("div", {
                className: ct
            }, f.createElement(se, {
                userName: W,
                labelText: F,
                userSecUid: null == j ? void 0 : j.sec_uid,
                canEnterUserPage: d,
                showScene: M,
                className: C
            }), f.createElement(Se, {
                commentText: B,
                stickerInfo: (null == G ? void 0 : G.sticker) || null,
                needEllipsis: _,
                commentStatus: null == G ? void 0 : G.status,
                showContentType: O.zC[u],
                className: L
            }), f.createElement("div", {
                className: E()(dt, y)
            }, f.createElement("span", null, "\u5bf9\u4f60\u7684\u4f5c\u54c1\u53d1\u5e03\u4e86\u5f39\u5e55"), f.createElement("span", null, i)))), h ? f.createElement(he, {
                awemeInfo: U,
                className: vt
            }) : k)
        }
        ))), Et = _t, pt = (Qn = {},
        (0,
        l.Z)(Qn, S.I6.AT, {
            component: ye
        }),
        (0,
        l.Z)(Qn, S.I6.COMMENT, {
            component: Ue
        }),
        (0,
        l.Z)(Qn, S.I6.DIGG, {
            component: rn
        }),
        (0,
        l.Z)(Qn, S.I6.FOLLOW, {
            component: Rn
        }),
        (0,
        l.Z)(Qn, S.I6.FOLLOW_REQUEST, {
            component: Rn
        }),
        (0,
        l.Z)(Qn, S.I6.COMMENT_DANMAKU, {
            component: Et
        }),
        (0,
        l.Z)(Qn, S.I6.GENERAL, {
            component: ot
        }),
        Qn), mt = function(e) {
            var n = e.handleClosePush;
            return f.createElement("div", {
                className: Kn
            }, f.createElement("div", {
                className: Jn
            }, "\u67e5\u770b"), f.createElement("div", {
                className: qn,
                onClick: function(e) {
                    return e.stopPropagation()
                }
            }, f.createElement(g.Z, {
                src: $n,
                className: zn,
                viewBox: "0 0 8 8",
                onClick: n
            })))
        }, ht = (0,
        p.f3)("noticeStore")((0,
        p.Pi)((function(e) {
            var n, t, r, a, i = e.notice, u = void 0 === i ? {} : i, d = e.handleDelete, _ = void 0 === d ? function() {}
            : d, p = e.className, g = e.showScene, R = void 0 === g ? S.DL.NOTICE_LIST : g, w = e.handleClickInPush, A = void 0 === w ? function() {}
            : w, Z = e.noticeListViewPortHeight, b = void 0 === Z ? 0 : Z, P = e.noticeListScrollTop, U = void 0 === P ? 0 : P, D = e.noticeRank, G = void 0 === D ? 0 : D, x = e.handleClosePush, F = void 0 === x ? function() {}
            : x, V = e.noticeStore, H = void 0 === V ? {} : V, W = u.type, B = u.has_read, Y = void 0 === B || B, j = u.create_time, K = u.nid_str, J = void 0 === K ? "" : K, q = u.aweme_id, z = u[null !== (n = null === O.ke || void 0 === O.ke ? void 0 : O.ke[W]) && void 0 !== n ? n : null === O.ke || void 0 === O.ke ? void 0 : O.ke[S.I6.GENERAL]], X = void 0 === z ? {} : z, Q = q || (null == X || null === (t = X.aweme) || void 0 === t ? void 0 : t.aweme_id), $ = null == pt || null === (r = pt[W]) || void 0 === r ? void 0 : r.component, ee = R === S.DL.NOTICE_LIST, ne = R === S.DL.NOTICE_PUSH, te = R === S.DL.NOTICE_LIST, re = R === S.DL.NOTICE_PUSH, ae = R === S.DL.NOTICE_LIST && !Y, ie = R === S.DL.NOTICE_LIST, oe = R === S.DL.NOTICE_PUSH ? S._q.NOTICE_PUSH : S._q.NOTICE_CELL, se = H.abTestData, le = (0,
            s.Z)((0,
            s.Z)({}, (0,
            C.e)(u, oe)), {}, {
                rank: G
            }), ue = (0,
            f.useState)(!1), ce = (0,
            o.Z)(ue, 2), de = ce[0], ve = ce[1], fe = (0,
            f.useState)("auto"), _e = (0,
            o.Z)(fe, 2), Ee = _e[0], pe = _e[1], me = (0,
            f.useRef)(null), he = (0,
            f.useRef)(!1), Ie = (0,
            f.useCallback)((function() {
                return yn()().format("YYYY-MM-DD") !== h.$o(Cn.LocalStorageKeys.LastDayEnterNotice)
            }
            ), []), ge = (0,
            f.useCallback)((function() {
                return h.qQ(Cn.LocalStorageKeys.LastDayEnterNotice, yn()().format("YYYY-MM-DD"))
            }
            ), []), Se = (0,
            f.useCallback)((function() {
                Ie() && ((0,
                L.Gb)("interact_cell_click_all", {}),
                ge())
            }
            ), []), Oe = (0,
            f.useCallback)((function() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : S.bj.DELETED
                  , n = N.TR[e];
                y.J.emit(y.v.SHOW_TOAST, {
                    text: n,
                    showInDlg: te
                }),
                R !== S.DL.NOTICE_PUSH ? ((0,
                L.Gb)("interact_cell_click", (0,
                s.Z)((0,
                s.Z)({}, le), {}, {
                    video_status: T.uS[S.bj.DELETED]
                })),
                Se()) : null == A || A(null)
            }
            ), []), Ne = (0,
            f.useCallback)((function(e, n) {
                var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                if (R !== S.DL.NOTICE_PUSH) {
                    var r = le;
                    if (null !== O.p0 && void 0 !== O.p0 && c()(O.p0).call(O.p0, W) && e) {
                        var a = le.personal_relation
                          , i = le.interact_type;
                        I.emit(I.EVENT.openNoticeAwemeModal, (0,
                        s.Z)((0,
                        s.Z)({}, e), {}, {
                            logParams: {
                                enter_from: T.QZ[S.DL.NOTICE_LIST],
                                personal_relation: a,
                                interact_type: i
                            },
                            danmakuInfo: t
                        }));
                        var o = n.private_status
                          , l = void 0 === o ? 0 : o;
                        r.video_status = l ? T.uS[S.bj.PRIVATE] : T.uS[S.bj.PUBLIC_VISIBLE],
                        (0,
                        L.Gb)("interact_cell_click", r),
                        Se()
                    }
                } else
                    null == A || A(e)
            }
            ), [W, R]);
            (0,
            f.useEffect)((function() {
                var e = y.J.on(y.v.DELETE_NOTICE, (function(e) {
                    J === e && (pe(0),
                    ve(!0),
                    v()((function() {
                        return null == _ ? void 0 : _()
                    }
                    ), 500))
                }
                ));
                return function() {
                    return null == e ? void 0 : e()
                }
            }
            ), [J, _]);
            var Te = (0,
            f.useCallback)((function(e, n) {
                (0,
                k.o)(me.current, e, n, 30) && !he.current && ((0,
                L.Gb)("interact_cell_show", le),
                he.current = !0)
            }
            ), []);
            return (0,
            f.useEffect)((function() {
                R === S.DL.NOTICE_LIST && Te(b, U)
            }
            ), [b, U]),
            (0,
            f.useEffect)((function() {
                var e = y.J.on(y.v.ENTER_NOTICELIST_FROM_OTHER_PAGE, (function() {
                    he.current = !1,
                    v()((function() {
                        Te(b, U)
                    }
                    ), 100)
                }
                ));
                return function() {
                    return e()
                }
            }
            ), [b, U]),
            (0,
            f.useEffect)((function() {
                var e = me.current;
                if (e) {
                    var n = e.clientHeight || 0;
                    pe(n)
                }
            }
            ), []),
            $ ? f.createElement("div", {
                className: E()(xn, p, (a = {},
                (0,
                l.Z)(a, Vn, de),
                (0,
                l.Z)(a, Fn, se.imPrivateMessagePanelOptimization !== m.ImPrivateMessagePanelOptimization.Default),
                a)),
                style: {
                    height: Ee
                },
                ref: me
            }, f.createElement($, {
                awemeId: Q,
                noticeId: J,
                noticeInfo: X,
                createTime: (0,
                M.xS)(1e3 * j),
                noticeType: W,
                needContentEllipsis: ne,
                showAwemeCover: !re,
                handleAwemeStatus: Oe,
                handleClickNotice: Ne,
                showScene: R,
                userNameClassName: Bn,
                contentInfoClassName: Yn,
                hintClassName: jn,
                closeRender: mt({
                    handleClosePush: F
                }),
                showNoticeUnread: ae,
                noticeLogInfo: le
            }), ee ? f.createElement("div", {
                className: Hn
            }, f.createElement(Gn, {
                noticeId: J,
                noticeType: W,
                noticeLogInfo: le
            })) : null, ie ? f.createElement("div", {
                className: Wn
            }) : null) : null
        }
        ))), It = ht
    },
    48070: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return ve
            }
        });
        var r = t(46040)
          , a = t(21528)
          , i = t(69509)
          , o = t(88263)
          , s = t(85116)
          , l = t(77355)
          , u = t.n(l)
          , c = "kotL7j1b"
          , d = "FNu1yN4k"
          , v = t(70335)
          , f = t.n(v)
          , _ = t(22545)
          , E = t(51235)
          , p = t.n(E)
          , m = t(44742)
          , h = t.n(m)
          , I = t(20822)
          , g = "dL5yyBw8"
          , S = "_KMlpzes"
          , O = "yBUVK72q"
          , N = "bGufRQqh"
          , T = "EivsvPc7"
          , M = "wnY3Bccj"
          , C = "rtyoeTfb"
          , L = "jz5DCc0v"
          , y = "Yt1RMufS"
          , k = "x2aaDffm"
          , R = "gdX8vJYG"
          , w = "TqFcNGhq"
          , A = t(94)
          , Z = t(64296)
          , b = t(20071)
          , P = t(64790)
          , U = t(55388)
          , D = t(6881)
          , G = t(36316)
          , x = t(28025)
          , F = t(74006)
          , V = t(67147)
          , H = I.m.ConversationType
          , W = H.GROUP_CHAT
          , B = H.ONE_TO_ONE_CHAT
          , Y = (0,
        i.f3)("imStore")((0,
        i.Pi)((function(e) {
            var n = e.msg
              , t = e.imStore
              , r = e.openDlg
              , i = t.conversationInfoMap
              , o = t.setSelectChatUserShortId
              , s = n.serverId
              , l = n.conversationId
              , u = n.conversationType
              , c = n.ext
              , d = n.sender
              , v = (null == i ? void 0 : i[l]) || b.ImSdk.getConversationById(l)
              , E = (0,
            a.useRef)(null)
              , m = function() {
                var e = (0,
                _.Z)(h().mark((function e() {
                    var n;
                    return h().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                U.p)(d);
                            case 2:
                                n = e.sent,
                                E.current = n;
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            a.useEffect)((function() {
                (0,
                _.Z)(h().mark((function e() {
                    var n, t;
                    return h().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = {
                                    conversation_id: l,
                                    chat_type: D.n0[u]
                                },
                                u !== B || !d) {
                                    e.next = 7;
                                    break
                                }
                                if (E.current || 0 === E.current) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 5,
                                m();
                            case 5:
                                t = E.current,
                                n.personal_relation = String(t);
                            case 7:
                                (0,
                                P.Gb)("im_push_show", n);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
            ), [l]),
            (0,
            a.useEffect)((function() {
                var e = p()((function() {
                    t.clearOldMsgListToPush()
                }
                ), 300);
                return function() {
                    clearTimeout(e)
                }
            }
            ), []);
            var I = (0,
            a.useRef)(0);
            (0,
            a.useEffect)((function() {
                return clearTimeout(I.current),
                I.current = p()((function() {
                    t.closeMsgPushPop(l)
                }
                ), 5e3),
                function() {
                    clearTimeout(I.current)
                }
            }
            ), [s]);
            var H = (0,
            V.v)(v)
              , Y = H.headIcon
              , j = H.title
              , K = (0,
            a.useCallback)(function() {
                var e = (0,
                _.Z)(h().mark((function e(n) {
                    var r, a;
                    return h().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (clearTimeout(I.current),
                                t.clearAllPushList(),
                                !n) {
                                    e.next = 11;
                                    break
                                }
                                if (r = {
                                    conversation_id: l,
                                    chat_type: D.n0[u]
                                },
                                u !== B || !d) {
                                    e.next = 10;
                                    break
                                }
                                if (E.current || 0 === E.current) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 8,
                                m();
                            case 8:
                                a = E.current,
                                r.personal_relation = String(a);
                            case 10:
                                (0,
                                P.Gb)("im_push_close", r);
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }(), [])
              , J = (0,
            a.useCallback)((0,
            _.Z)(h().mark((function e() {
                var n, a;
                return h().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null == r || r(),
                            b.ImSdk.setCurConversation(v),
                            t.setEnterConversation(Z.eY.PUSH),
                            o(v.shortId),
                            K(),
                            n = {
                                conversation_id: l,
                                chat_type: D.n0[u]
                            },
                            u !== B || !d) {
                                e.next = 12;
                                break
                            }
                            if (E.current || 0 === E.current) {
                                e.next = 10;
                                break
                            }
                            return e.next = 10,
                            m();
                        case 10:
                            a = E.current,
                            n.personal_relation = String(a);
                        case 12:
                            (0,
                            P.Gb)("im_push_click", n);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [])
              , q = (0,
            a.useCallback)((function() {
                clearTimeout(I.current)
            }
            ), [])
              , z = (0,
            a.useCallback)((function() {
                I.current = p()((function() {
                    t.closeMsgPushPop(l)
                }
                ), 5e3)
            }
            ), [l]);
            return a.createElement("div", {
                className: g,
                onMouseEnter: q,
                onMouseLeave: z
            }, a.createElement("div", {
                className: S,
                onClick: J
            }, a.createElement(G.Z, {
                srcList: Y,
                className: f()(O, u === W ? N : "")
            })), a.createElement("div", {
                className: T,
                onClick: J
            }, a.createElement("div", {
                className: M
            }, a.createElement("div", {
                className: C
            }, j)), a.createElement("div", {
                className: L
            }, a.createElement(x.Z, {
                className: y,
                converSation: v,
                lastMessage: n,
                ext: c,
                isNeedFilterDraftMessage: !0
            }))), a.createElement("div", {
                className: k
            }, a.createElement("div", {
                className: R,
                onClick: J
            }, "\u56de\u590d"), a.createElement(A.Z, {
                src: F.Z,
                className: w,
                viewBox: "0 0 13 13",
                onClick: function() {
                    K(!0)
                }
            })))
        }
        )))
          , j = Y
          , K = (0,
        i.f3)("imStore")((0,
        i.Pi)((function(e) {
            var n = e.imStore
              , t = e.openDlg
              , r = n.msgListToPush;
            return a.createElement("div", {
                className: f()(c, (0,
                s.Z)({}, d, !(null != r && r.length))),
                id: "IMpushListBoxId"
            }, null == r ? void 0 : u()(r).call(r, (function(e) {
                var n = e.conversationId;
                return a.createElement(j, {
                    msg: e,
                    key: n,
                    openDlg: t
                })
            }
            )))
        }
        )))
          , J = t(937)
          , q = t(83009)
          , z = t.n(q)
          , X = t(62071)
          , Q = t(3911)
          , $ = t(20388)
          , ee = t(19387)
          , ne = t(90064)
          , te = t(46758)
          , re = "uM1tL4yb"
          , ae = "JTSBIxRP"
          , ie = (0,
        i.f3)("noticeStore")((0,
        i.Pi)((function(e) {
            var n = e.noticeStore
              , t = e.notice
              , r = e.handleClickPush
              , i = void 0 === r ? function() {}
            : r
              , s = t.nid_str
              , l = void 0 === s ? "" : s
              , u = t.type
              , c = (0,
            a.useRef)(null)
              , d = (0,
            ee.e)(t, X._q.NOTICE_PUSH)
              , v = (0,
            a.useCallback)((function() {
                c.current && clearTimeout(c.current)
            }
            ), [])
              , f = (0,
            a.useCallback)((function() {
                c.current = p()((function() {
                    n.closeNoticePushPop(l)
                }
                ), 5e3)
            }
            ), [])
              , _ = (0,
            a.useCallback)((function(e) {
                var t;
                c.current && clearTimeout(c.current),
                null === (t = n.clearNoticePushList) || void 0 === t || t.call(n),
                e && (0,
                ne.Gb)("interact_push_close", d)
            }
            ), [])
              , E = (0,
            a.useCallback)((function(e) {
                if (null !== Q.p0 && void 0 !== Q.p0 && z()(Q.p0).call(Q.p0, u) && e) {
                    var n = d.personal_relation
                      , t = d.interact_type;
                    o.emit(o.EVENT.openNoticeAwemeModal, (0,
                    J.Z)((0,
                    J.Z)({}, e), {}, {
                        logParams: {
                            enter_from: $.QZ[X.DL.NOTICE_PUSH],
                            personal_relation: n,
                            interact_type: t
                        }
                    })),
                    null == i || i()
                }
                _(),
                (0,
                ne.Gb)("interact_push_click", d)
            }
            ), [u]);
            return (0,
            a.useEffect)((function() {
                (0,
                ne.Gb)("interact_push_show", d)
            }
            ), []),
            (0,
            a.useEffect)((function() {
                var e = p()((function() {
                    n.clearOldNoticeInPushList()
                }
                ), 300);
                return c.current = p()((function() {
                    n.closeNoticePushPop(l)
                }
                ), 5e3),
                function() {
                    e && clearTimeout(e),
                    c.current && clearTimeout(c.current)
                }
            }
            ), []),
            a.createElement("div", {
                className: re,
                onMouseEnter: v,
                onMouseLeave: f
            }, a.createElement(te.Z, {
                className: ae,
                notice: t,
                showScene: X.DL.NOTICE_PUSH,
                handleClickInPush: E,
                handleClosePush: function() {
                    return _(!0)
                }
            }))
        }
        )))
          , oe = "WyZ8ks_R"
          , se = (0,
        i.f3)("noticeStore")((0,
        i.Pi)((function(e) {
            var n = e.noticeStore
              , t = e.clickNoticePush
              , r = n.noticePushList
              , i = void 0 === r ? [] : r;
            return null != i && i.length ? a.createElement("div", {
                className: oe,
                id: "NoticepushListBoxId"
            }, null == i ? void 0 : u()(i).call(i, (function(e) {
                return a.createElement(ie, {
                    notice: e,
                    key: null == e ? void 0 : e.nid_str,
                    handleClickPush: t
                })
            }
            ))) : null
        }
        )))
          , le = t(57873)
          , ue = t(79291)
          , ce = "_I1SMiom"
          , de = (0,
        i.f3)("noticeStore", "imStore")((0,
        i.Pi)((function(e) {
            var n, t, r = e.setTopOffset, i = e.noticeStore, o = e.imStore, s = null == i || null === (n = i.noticePushList) || void 0 === n ? void 0 : n.length, l = null == o || null === (t = o.msgListToPush) || void 0 === t ? void 0 : t.length;
            return (0,
            a.useLayoutEffect)((function() {
                if (s || l) {
                    var e, n, t, a = null === (e = document.getElementById("douyin-header")) || void 0 === e || null === (n = e.getBoundingClientRect) || void 0 === n || null === (t = n.call(e)) || void 0 === t ? void 0 : t.bottom;
                    a > 0 ? null == r || r(a + 2) : null == r || r(undefined)
                }
            }
            ), [s, l]),
            null
        }
        )))
          , ve = function(e) {
            var n = (0,
            a.useState)(!0)
              , t = (0,
            r.Z)(n, 2)
              , s = t[0]
              , l = t[1]
              , u = (0,
            a.useState)(0)
              , c = (0,
            r.Z)(u, 2)
              , d = c[0]
              , v = c[1]
              , f = (0,
            a.useRef)(null)
              , _ = (0,
            a.useRef)(null)
              , E = (0,
            a.useCallback)((function(e) {
                var n;
                e && (null === (n = o) || void 0 === n || n.emit(o.EVENT.clickPush, {
                    type: e
                }))
            }
            ), [])
              , p = function() {
                var e, n, t, r, a = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                (null === (e = le.Z.setCanShowImPush) || void 0 === e || e.call(le.Z, a),
                null === (n = ue.Z.setCanShowNoticePush) || void 0 === n || n.call(ue.Z, a),
                a) || (null === (t = le.Z.clearAllPushList) || void 0 === t || t.call(le.Z),
                null === (r = ue.Z.clearNoticePushList) || void 0 === r || r.call(ue.Z))
            };
            return (0,
            a.useEffect)((function() {
                var e, n, t = null === (e = o) || void 0 === e ? void 0 : e.listen(o.EVENT.showPushList, (function(e) {
                    var n = e || {}
                      , t = n.isShow
                      , r = void 0 !== t && t;
                    switch (n.from) {
                    case X.No.IM:
                        f.current = !r;
                        break;
                    case X.No.NOTICE:
                        _.current = !r
                    }
                    f.current || _.current ? (l(!1),
                    p(!1)) : (l(r),
                    p(r))
                }
                )), r = null === (n = o) || void 0 === n ? void 0 : n.listen(o.EVENT.clickPush, (function() {
                    var e, n;
                    null === (e = le.Z.clearAllPushList) || void 0 === e || e.call(le.Z),
                    null === (n = ue.Z.clearNoticePushList) || void 0 === n || n.call(ue.Z)
                }
                ));
                return function() {
                    null == t || t(),
                    null == r || r()
                }
            }
            ), []),
            s ? a.createElement(i.zt, {
                imStore: le.Z,
                noticeStore: ue.Z
            }, a.createElement("div", {
                className: ce,
                id: "pushListBoxId",
                style: {
                    top: d || undefined
                }
            }, a.createElement(de, {
                setTopOffset: v
            }), a.createElement(K, {
                openDlg: function() {
                    return E(X.No.IM)
                }
            }), a.createElement(se, {
                clickNoticePush: function() {
                    return E(X.No.NOTICE)
                }
            }))) : null
        }
    },
    62071: function(e, n, t) {
        t.d(n, {
            gc: function() {
                return a
            },
            B2: function() {
                return C
            },
            I6: function() {
                return o
            },
            yK: function() {
                return s
            },
            EV: function() {
                return l
            },
            RI: function() {
                return u
            },
            W1: function() {
                return c
            },
            vq: function() {
                return d
            },
            vw: function() {
                return v
            },
            Wu: function() {
                return f
            },
            pC: function() {
                return _
            },
            Ol: function() {
                return E
            },
            il: function() {
                return p
            },
            DL: function() {
                return m
            },
            No: function() {
                return h
            },
            bj: function() {
                return I
            },
            VG: function() {
                return g
            },
            _q: function() {
                return S
            },
            ql: function() {
                return O
            },
            PY: function() {
                return N
            },
            ut: function() {
                return T
            },
            $y: function() {
                return M
            }
        });
        var r, a, i = t(85116);
        !function(e) {
            e.ALL = "6",
            e.COMMENT = "7",
            e.DIGG = "8",
            e.AT = "9",
            e.FOLLOW = "10",
            e.COMMENT_DANMAKU = "-1"
        }(a || (a = {}));
        var o, s, l, u, c, d, v, f, _, E, p, m, h, I, g, S, O, N, T, M, C = (r = {},
        (0,
        i.Z)(r, a.ALL, 700),
        (0,
        i.Z)(r, a.COMMENT, 2),
        (0,
        i.Z)(r, a.DIGG, 3),
        (0,
        i.Z)(r, a.AT, 6),
        (0,
        i.Z)(r, a.FOLLOW, 401),
        (0,
        i.Z)(r, a.COMMENT_DANMAKU, 520),
        r);
        !function(e) {
            e[e.COMMENT = 31] = "COMMENT",
            e[e.FOLLOW = 33] = "FOLLOW",
            e[e.DIGG = 41] = "DIGG",
            e[e.AT = 45] = "AT",
            e[e.FOLLOW_REQUEST = 98] = "FOLLOW_REQUEST",
            e[e.COMMENT_DANMAKU = 513] = "COMMENT_DANMAKU",
            e[e.GENERAL = -1] = "GENERAL"
        }(o || (o = {})),
        function(e) {
            e[e.USE_COUNT = 1] = "USE_COUNT",
            e[e.USE_PUSH = 2] = "USE_PUSH"
        }(s || (s = {})),
        function(e) {
            e[e.RelationUnknown = -1] = "RelationUnknown",
            e[e.NoRelationStatus = 0] = "NoRelationStatus",
            e[e.FollowingStatus = 1] = "FollowingStatus",
            e[e.FollowEachOtherStatus = 2] = "FollowEachOtherStatus",
            e[e.FollowRequestStatus = 4] = "FollowRequestStatus"
        }(l || (l = {})),
        function(e) {
            e[e.FOLLOW = 33] = "FOLLOW",
            e[e.FOLLOW_REQUEST = 98] = "FOLLOW_REQUEST"
        }(u || (u = {})),
        function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.COMMENT = 1] = "COMMENT",
            e[e.REPLY_COMMENT = 2] = "REPLY_COMMENT",
            e[e.REPLY_UNDER_ITEM = 11] = "REPLY_UNDER_ITEM",
            e[e.REPLY_UNDER_COMMENT = 12] = "REPLY_UNDER_COMMENT"
        }(c || (c = {})),
        function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.DIGG_ITEM = 1] = "DIGG_ITEM",
            e[e.DIGG_COMMENT = 3] = "DIGG_COMMENT",
            e[e.DIGG_DANMAKU = 16] = "DIGG_DANMAKU"
        }(d || (d = {})),
        function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.CREATE_AT = 1] = "CREATE_AT",
            e[e.COMMENT_AT = 2] = "COMMENT_AT"
        }(v || (v = {})),
        function(e) {
            e[e.GENERAL = 0] = "GENERAL",
            e[e.VIDEO = 4] = "VIDEO",
            e[e.IMAGE_VIDEO = 61] = "IMAGE_VIDEO",
            e[e.SOCIAL_COMMON_PUBLISH = 109] = "SOCIAL_COMMON_PUBLISH"
        }(f || (f = {})),
        function(e) {
            e[e.REGULAR = 0] = "REGULAR",
            e[e.REJECT_FOLLOW_REQUEST = 1] = "REJECT_FOLLOW_REQUEST"
        }(_ || (_ = {})),
        function(e) {
            e[e.UNFOLLOW = 0] = "UNFOLLOW",
            e[e.FOLLOW = 1] = "FOLLOW"
        }(E || (E = {})),
        function(e) {
            e[e.DONE = 0] = "DONE",
            e[e.ACTIVE = 1] = "ACTIVE"
        }(p || (p = {})),
        function(e) {
            e[e.NOTICE_LIST = 1] = "NOTICE_LIST",
            e[e.NOTICE_PUSH = 2] = "NOTICE_PUSH"
        }(m || (m = {})),
        function(e) {
            e.IM = "im",
            e.NOTICE = "notice"
        }(h || (h = {})),
        function(e) {
            e[e.DELETED = 1] = "DELETED",
            e[e.PRIVATE = 2] = "PRIVATE",
            e[e.PUBLIC_VISIBLE = 3] = "PUBLIC_VISIBLE"
        }(I || (I = {})),
        function(e) {
            e[e.SHOW_MERGE = 1] = "SHOW_MERGE",
            e[e.NOT_SHOW_MERGE = 2] = "NOT_SHOW_MERGE"
        }(g || (g = {})),
        function(e) {
            e[e.NOTICE_PUSH = 1] = "NOTICE_PUSH",
            e[e.NOTICE_CELL = 2] = "NOTICE_CELL",
            e[e.DIGG_USER_LIST = 3] = "DIGG_USER_LIST"
        }(S || (S = {})),
        function(e) {
            e[e.DELETE = 0] = "DELETE",
            e[e.ALL_VISIBLE = 1] = "ALL_VISIBLE"
        }(O || (O = {})),
        function(e) {
            e[e.AWEME_INFO = 1] = "AWEME_INFO",
            e[e.COMMENT_INFO = 2] = "COMMENT_INFO"
        }(N || (N = {})),
        function(e) {
            e[e.PUBLIC_VISIBLE = 0] = "PUBLIC_VISIBLE",
            e[e.AUTHOR_VISIBLE = 1] = "AUTHOR_VISIBLE",
            e[e.FRIEND_VISIBLE = 2] = "FRIEND_VISIBLE"
        }(T || (T = {})),
        function(e) {
            e[e.FOLLOW = 1] = "FOLLOW",
            e[e.FOLLOWER = 2] = "FOLLOWER"
        }(M || (M = {}))
    },
    20388: function(e, n, t) {
        t.d(n, {
            XV: function() {
                return m
            },
            Yk: function() {
                return h
            },
            QZ: function() {
                return I
            },
            uS: function() {
                return g
            },
            xi: function() {
                return S
            },
            M5: function() {
                return O
            }
        });
        var r, a, i, o, s, l, u, c, d, v, f, _, E = t(85116), p = t(62071), m = (i = {},
        (0,
        E.Z)(i, p.I6.AT, "at"),
        (0,
        E.Z)(i, p.I6.COMMENT, (r = {},
        (0,
        E.Z)(r, p.W1.NORMAL, "comment"),
        (0,
        E.Z)(r, p.W1.COMMENT, "comment"),
        (0,
        E.Z)(r, p.W1.REPLY_COMMENT, "quote"),
        (0,
        E.Z)(r, p.W1.REPLY_UNDER_ITEM, "comment"),
        (0,
        E.Z)(r, p.W1.REPLY_UNDER_COMMENT, "quote"),
        r)),
        (0,
        E.Z)(i, p.I6.DIGG, (a = {},
        (0,
        E.Z)(a, p.vq.NORMAL, "like"),
        (0,
        E.Z)(a, p.vq.DIGG_ITEM, "like"),
        (0,
        E.Z)(a, p.vq.DIGG_COMMENT, "like_comment"),
        (0,
        E.Z)(a, p.vq.DIGG_DANMAKU, "like_danmaku"),
        a)),
        (0,
        E.Z)(i, p.I6.FOLLOW, "follow"),
        (0,
        E.Z)(i, p.I6.FOLLOW_REQUEST, "follow_request"),
        (0,
        E.Z)(i, p.I6.COMMENT_DANMAKU, "danmaku"),
        i), h = (c = {},
        (0,
        E.Z)(c, p.vq.NORMAL, (o = {},
        (0,
        E.Z)(o, p.VG.NOT_SHOW_MERGE, "like_single"),
        (0,
        E.Z)(o, p.VG.SHOW_MERGE, "like_group"),
        o)),
        (0,
        E.Z)(c, p.vq.DIGG_ITEM, (s = {},
        (0,
        E.Z)(s, p.VG.NOT_SHOW_MERGE, "like_single"),
        (0,
        E.Z)(s, p.VG.SHOW_MERGE, "like_group"),
        s)),
        (0,
        E.Z)(c, p.vq.DIGG_COMMENT, (l = {},
        (0,
        E.Z)(l, p.VG.NOT_SHOW_MERGE, "like_comment_single"),
        (0,
        E.Z)(l, p.VG.SHOW_MERGE, "like_comment_group"),
        l)),
        (0,
        E.Z)(c, p.vq.DIGG_DANMAKU, (u = {},
        (0,
        E.Z)(u, p.VG.NOT_SHOW_MERGE, "like_danmaku_single"),
        (0,
        E.Z)(u, p.VG.SHOW_MERGE, "like_danmaku_group"),
        u)),
        c), I = (d = {},
        (0,
        E.Z)(d, p.DL.NOTICE_LIST, "interact_cell"),
        (0,
        E.Z)(d, p.DL.NOTICE_PUSH, "interact_push"),
        d), g = (v = {},
        (0,
        E.Z)(v, p.bj.DELETED, "delete"),
        (0,
        E.Z)(v, p.bj.PRIVATE, "private"),
        (0,
        E.Z)(v, p.bj.PUBLIC_VISIBLE, ""),
        v), S = (f = {},
        (0,
        E.Z)(f, p.pC.REGULAR, "delete"),
        (0,
        E.Z)(f, p.pC.REJECT_FOLLOW_REQUEST, "delete"),
        f), O = (_ = {},
        (0,
        E.Z)(_, p.Ol.FOLLOW, "follow"),
        (0,
        E.Z)(_, p.Ol.UNFOLLOW, "follow_cancel"),
        (0,
        E.Z)(_, "APPROVE_FOLLOW_REQUEST", "accept"),
        (0,
        E.Z)(_, "REJECT_FOLLOW_REQUEST", "remove"),
        _)
    },
    73590: function(e, n, t) {
        t.d(n, {
            MN: function() {
                return _
            },
            LS: function() {
                return E
            },
            JO: function() {
                return p
            },
            bk: function() {
                return m
            },
            P2: function() {
                return h
            },
            TR: function() {
                return I
            }
        });
        var r, a, i, o, s, l, u, c, d, v = t(85116), f = t(62071), _ = (o = {},
        (0,
        v.Z)(o, f.EV.NoRelationStatus, (r = {},
        (0,
        v.Z)(r, f.EV.NoRelationStatus, "\u5173\u6ce8"),
        (0,
        v.Z)(r, f.EV.FollowingStatus, "\u5df2\u5173\u6ce8"),
        (0,
        v.Z)(r, f.EV.FollowRequestStatus, "\u5df2\u8bf7\u6c42"),
        r)),
        (0,
        v.Z)(o, f.EV.FollowingStatus, (a = {},
        (0,
        v.Z)(a, f.EV.NoRelationStatus, "\u56de\u5173"),
        (0,
        v.Z)(a, f.EV.FollowingStatus, "\u4e92\u76f8\u5173\u6ce8"),
        (0,
        v.Z)(a, f.EV.FollowEachOtherStatus, "\u4e92\u76f8\u5173\u6ce8"),
        (0,
        v.Z)(a, f.EV.FollowRequestStatus, "\u5df2\u8bf7\u6c42"),
        a)),
        (0,
        v.Z)(o, f.EV.FollowEachOtherStatus, (i = {},
        (0,
        v.Z)(i, f.EV.NoRelationStatus, "\u56de\u5173"),
        (0,
        v.Z)(i, f.EV.FollowingStatus, "\u4e92\u76f8\u5173\u6ce8"),
        (0,
        v.Z)(i, f.EV.FollowEachOtherStatus, "\u4e92\u76f8\u5173\u6ce8"),
        (0,
        v.Z)(i, f.EV.FollowRequestStatus, "\u5df2\u8bf7\u6c42"),
        i)),
        o), E = (s = {},
        (0,
        v.Z)(s, f.RI.FOLLOW, "\u5173\u6ce8\u4e86\u4f60"),
        (0,
        v.Z)(s, f.RI.FOLLOW_REQUEST, "\u53d1\u6765\u5173\u6ce8\u8bf7\u6c42"),
        s), p = (l = {},
        (0,
        v.Z)(l, f.W1.NORMAL, "\u8bc4\u8bba\u4e86\u4f60\u7684\u4f5c\u54c1"),
        (0,
        v.Z)(l, f.W1.COMMENT, "\u8bc4\u8bba\u4e86\u4f60\u7684\u4f5c\u54c1"),
        (0,
        v.Z)(l, f.W1.REPLY_COMMENT, "\u56de\u590d\u4e86\u4f60\u7684\u8bc4\u8bba"),
        (0,
        v.Z)(l, f.W1.REPLY_UNDER_ITEM, "\u8bc4\u8bba\u4e86\u4f60\u7684\u4f5c\u54c1"),
        (0,
        v.Z)(l, f.W1.REPLY_UNDER_COMMENT, "\u5728\u4f60\u7684\u8bc4\u8bba\u4e0b\u56de\u590d"),
        l), m = (u = {},
        (0,
        v.Z)(u, f.vq.NORMAL, "\u8d5e\u4e86\u4f60\u7684\u4f5c\u54c1"),
        (0,
        v.Z)(u, f.vq.DIGG_ITEM, "\u8d5e\u4e86\u4f60\u7684\u4f5c\u54c1"),
        (0,
        v.Z)(u, f.vq.DIGG_COMMENT, "\u8d5e\u4e86\u4f60\u7684\u8bc4\u8bba"),
        (0,
        v.Z)(u, f.vq.DIGG_DANMAKU, "\u8d5e\u4e86\u4f60\u7684\u5f39\u5e55"),
        u), h = (c = {},
        (0,
        v.Z)(c, f.vw.NORMAL, "\u5728\u53d1\u5e03\u4f5c\u54c1\u65f6\u63d0\u5230\u4e86\u4f60"),
        (0,
        v.Z)(c, f.vw.CREATE_AT, "\u5728\u53d1\u5e03\u4f5c\u54c1\u65f6\u63d0\u5230\u4e86\u4f60"),
        (0,
        v.Z)(c, f.vw.COMMENT_AT, "\u5728\u8bc4\u8bba\u4e2d\u63d0\u5230\u4e86\u4f60"),
        c), I = (d = {},
        (0,
        v.Z)(d, f.bj.DELETED, "\u6b64\u4f5c\u54c1\u5df2\u5220\u9664"),
        (0,
        v.Z)(d, f.bj.PRIVATE, "\u89c6\u9891\u6d88\u5931\u4e86\uff0c\u8bf7\u7ee7\u7eed\u6d4f\u89c8\u5176\u4ed6\u4f5c\u54c1"),
        d)
    },
    3911: function(e, n, t) {
        t.d(n, {
            ke: function() {
                return d
            },
            wE: function() {
                return v
            },
            hz: function() {
                return f
            },
            J$: function() {
                return _
            },
            Ym: function() {
                return E
            },
            v4: function() {
                return p
            },
            eY: function() {
                return m
            },
            Et: function() {
                return h
            },
            p0: function() {
                return I
            },
            FJ: function() {
                return g
            },
            zC: function() {
                return S
            }
        });
        var r, a, i, o, s = t(85116), l = t(70355), u = t.n(l), c = t(62071), d = (r = {},
        (0,
        s.Z)(r, c.I6.FOLLOW, "follow"),
        (0,
        s.Z)(r, c.I6.FOLLOW_REQUEST, "follow"),
        (0,
        s.Z)(r, c.I6.DIGG, "digg"),
        (0,
        s.Z)(r, c.I6.COMMENT, "comment"),
        (0,
        s.Z)(r, c.I6.AT, "at"),
        (0,
        s.Z)(r, c.I6.COMMENT_DANMAKU, "interactive_notice"),
        (0,
        s.Z)(r, c.I6.GENERAL, "general_notice"),
        r), v = [{
            label: "\u5168\u90e8\u6d88\u606f",
            value: c.gc.ALL
        }, {
            label: "\u7c89\u4e1d",
            value: c.gc.FOLLOW
        }, {
            label: "@\u6211\u7684",
            value: c.gc.AT
        }, {
            label: "\u8bc4\u8bba",
            value: c.gc.COMMENT
        }, {
            label: "\u8d5e",
            value: c.gc.DIGG
        }, {
            label: "\u5f39\u5e55",
            value: c.gc.COMMENT_DANMAKU
        }], f = [c.W1.NORMAL, c.W1.COMMENT, c.W1.REPLY_COMMENT, c.W1.REPLY_UNDER_ITEM, c.W1.REPLY_UNDER_COMMENT], _ = [c.vq.NORMAL, c.vq.DIGG_ITEM, c.vq.DIGG_COMMENT], E = u()(a = []).call(a, _, [c.vq.DIGG_DANMAKU]), p = [c.vw.NORMAL, c.vw.CREATE_AT, c.vw.COMMENT_AT], m = [c.Wu.GENERAL, c.Wu.VIDEO, c.Wu.IMAGE_VIDEO, c.Wu.SOCIAL_COMMON_PUBLISH], h = [c.I6.AT, c.I6.COMMENT], I = [c.I6.AT, c.I6.COMMENT, c.I6.COMMENT_DANMAKU, c.I6.DIGG], g = (0,
        s.Z)({}, c.I6.DIGG, 1), S = (o = {},
        (0,
        s.Z)(o, c.I6.COMMENT, c.PY.COMMENT_INFO),
        (0,
        s.Z)(o, c.I6.AT, (i = {},
        (0,
        s.Z)(i, c.vw.NORMAL, c.PY.AWEME_INFO),
        (0,
        s.Z)(i, c.vw.CREATE_AT, c.PY.AWEME_INFO),
        (0,
        s.Z)(i, c.vw.COMMENT_AT, c.PY.COMMENT_INFO),
        i)),
        o)
    },
    79291: function(e, n, t) {
        var r = t(937)
          , a = t(37491)
          , i = t(59967)
          , o = t(85116)
          , s = t(22997)
          , l = t.n(s)
          , u = t(45969)
          , c = t.n(u)
          , d = t(65346)
          , v = t.n(d)
          , f = t(63199)
          , _ = t.n(f)
          , E = t(57101)
          , p = t.n(E)
          , m = t(61972)
          , h = t.n(m)
          , I = t(49252)
          , g = t(62071)
          , S = t(3911)
          , O = function() {
            function e() {
                (0,
                a.Z)(this, e),
                (0,
                o.Z)(this, "abTestData", {}),
                (0,
                o.Z)(this, "showNoticeTypeList", !1),
                (0,
                o.Z)(this, "noticeGroupMap", {}),
                (0,
                o.Z)(this, "noticeUnreadCountMap", {}),
                (0,
                o.Z)(this, "noticeListObj", {
                    noticeList: [],
                    minTime: 0,
                    maxTime: 0,
                    hasMore: 1,
                    loading: !1
                }),
                (0,
                o.Z)(this, "userListObj", {
                    userList: [],
                    minTime: 0,
                    maxTime: 0,
                    hasMore: !0,
                    loading: !1,
                    userType: g.vq.NORMAL
                }),
                (0,
                o.Z)(this, "showUserList", !1),
                (0,
                o.Z)(this, "curNoticeFilter", null === S.wE || void 0 === S.wE ? void 0 : S.wE[0]),
                (0,
                o.Z)(this, "userListFilter", {
                    itemId: "0",
                    type: S.FJ[g.I6.DIGG]
                }),
                (0,
                o.Z)(this, "showNoticeDlg", !1),
                (0,
                o.Z)(this, "isLogin", !1),
                (0,
                o.Z)(this, "noticePushList", []),
                (0,
                o.Z)(this, "canShowNoticePush", !0),
                (0,
                o.Z)(this, "followStatusMap", {}),
                (0,
                I.ky)(this, {
                    abTestData: I.LO,
                    showNoticeTypeList: I.LO,
                    noticeGroupMap: I.LO,
                    noticeUnreadCountMap: I.LO,
                    noticeListObj: I.LO,
                    userListObj: I.LO,
                    showUserList: I.LO,
                    curNoticeFilter: I.LO,
                    userListFilter: I.LO,
                    noticePushList: I.LO,
                    showNoticeDlg: I.LO,
                    isLogin: I.LO,
                    canShowNoticePush: I.LO,
                    followStatusMap: I.LO,
                    noticeUnreadCount: I.Fl,
                    setAbTestData: I.aD,
                    setShowNoticeTypeList: I.aD,
                    setNoticeGroupMap: I.aD,
                    setNoticeUnreadCountMap: I.aD,
                    setNoticeListObj: I.aD,
                    setUserListObj: I.aD,
                    setShowUserList: I.aD,
                    setCurNoticeFilter: I.aD,
                    resetNoticeFilter: I.aD,
                    setUserListFilter: I.aD,
                    pushNewNoticeInList: I.aD,
                    clearOldNoticeInPushList: I.aD,
                    clearNoticePushList: I.aD,
                    closeNoticePushPop: I.aD,
                    setShowNoticeDlg: I.aD,
                    setIsLogin: I.aD,
                    clearNoticeList: I.aD,
                    clearUserList: I.aD,
                    setCanShowNoticePush: I.aD,
                    setFollowStatusMap: I.aD,
                    clearFollowStatusMap: I.aD
                })
            }
            return (0,
            i.Z)(e, [{
                key: "noticeUnreadCount",
                get: function() {
                    return c()(v()(this.noticeUnreadCountMap || {}), (function(e) {
                        return e
                    }
                    ))
                }
            }, {
                key: "setAbTestData",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    this.abTestData = e
                }
            }, {
                key: "setShowNoticeTypeList",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.showNoticeTypeList = e
                }
            }, {
                key: "setNoticeGroupMap",
                value: function() {
                    var e, n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [], t = {};
                    null == n || _()(n).call(n, (function(e) {
                        var n = e || {}
                          , r = n.type
                          , a = n.group;
                        r && (t[r] = a)
                    }
                    )),
                    _()(e = p()(g.B2)).call(e, (function(e) {
                        t[e] || (t[e] = g.B2[e])
                    }
                    )),
                    this.noticeGroupMap = t
                }
            }, {
                key: "setNoticeUnreadCountMap",
                value: function(e) {
                    var n, t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    if (e && e !== g.gc.ALL) {
                        var a = (null === (n = this.noticeUnreadCountMap) || void 0 === n ? void 0 : n[e]) || 0
                          , i = (0,
                        r.Z)((0,
                        r.Z)({}, this.noticeUnreadCountMap), {}, (0,
                        o.Z)({}, e, a + t));
                        this.noticeUnreadCountMap = i
                    }
                }
            }, {
                key: "clearNoticeUnreadCountList",
                value: function() {
                    var e, n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g.gc.ALL, t = this.noticeUnreadCountMap || {};
                    n === g.gc.ALL ? _()(e = p()(t)).call(e, (function(e) {
                        t[e] = 0
                    }
                    )) : t = (0,
                    r.Z)((0,
                    r.Z)({}, t), {}, (0,
                    o.Z)({}, n, 0));
                    this.noticeUnreadCountMap = t
                }
            }, {
                key: "setNoticeListObj",
                value: function(e) {
                    this.noticeListObj = e
                }
            }, {
                key: "clearNoticeList",
                value: function() {
                    this.setNoticeListObj({
                        noticeList: [],
                        minTime: 0,
                        maxTime: 0,
                        hasMore: 1,
                        loading: !1
                    })
                }
            }, {
                key: "clearUserList",
                value: function() {
                    var e = {
                        userList: [],
                        minTime: 0,
                        maxTime: 0,
                        hasMore: !0,
                        loading: !1,
                        userType: g.vq.NORMAL
                    };
                    this.setUserListObj(e)
                }
            }, {
                key: "setUserListObj",
                value: function(e) {
                    this.userListObj = e
                }
            }, {
                key: "setShowUserList",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.showUserList = e
                }
            }, {
                key: "setCurNoticeFilter",
                value: function(e) {
                    this.curNoticeFilter = e
                }
            }, {
                key: "resetNoticeFilter",
                value: function() {
                    this.curNoticeFilter = null === S.wE || void 0 === S.wE ? void 0 : S.wE[0]
                }
            }, {
                key: "setUserListFilter",
                value: function(e) {
                    this.userListFilter = e
                }
            }, {
                key: "pushNewNoticeInList",
                value: function(e) {
                    e && this.isLogin && !this.showNoticeDlg && this.canShowNoticePush && (this.noticePushList = this.noticePushList || [],
                    this.noticePushList.push(e))
                }
            }, {
                key: "clearOldNoticeInPushList",
                value: function() {
                    var e, n, t = (null === (e = this.noticePushList) || void 0 === e ? void 0 : e.length) || 0;
                    t <= 1 || null === (n = this.noticePushList) || void 0 === n || h()(n).call(n, 0, t - 1)
                }
            }, {
                key: "clearNoticePushList",
                value: function() {
                    this.noticePushList = []
                }
            }, {
                key: "closeNoticePushPop",
                value: function(e) {
                    var n, t;
                    if (null !== (n = this.noticePushList) && void 0 !== n && n.length) {
                        var r = 0;
                        l()(this.noticePushList, (function(n, t) {
                            (null == n ? void 0 : n.nid_str) === e && (r = t)
                        }
                        )),
                        null === (t = this.noticePushList) || void 0 === t || h()(t).call(t, r, 1)
                    }
                }
            }, {
                key: "setShowNoticeDlg",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.showNoticeDlg = e
                }
            }, {
                key: "setIsLogin",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.isLogin = e
                }
            }, {
                key: "setCanShowNoticePush",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
                    this.canShowNoticePush = e
                }
            }, {
                key: "setFollowStatusMap",
                value: function(e, n, t) {
                    var a;
                    if (n) {
                        var i = (null === (a = this.followStatusMap) || void 0 === a ? void 0 : a[e]) || {}
                          , s = (0,
                        r.Z)((0,
                        r.Z)({}, i), {}, (0,
                        o.Z)({}, n, t))
                          , l = (0,
                        r.Z)((0,
                        r.Z)({}, this.followStatusMap), {}, (0,
                        o.Z)({}, e, s));
                        this.followStatusMap = l
                    }
                }
            }, {
                key: "clearFollowStatusMap",
                value: function() {
                    this.followStatusMap = {}
                }
            }]),
            e
        }();
        n.Z = new O
    },
    93006: function(e, n, t) {
        t.d(n, {
            j: function() {
                return r
            },
            o: function() {
                return a
            }
        });
        var r = function(e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
            if (!e)
                return !1;
            var t = e || {}
              , r = t.scrollTop
              , a = t.scrollHeight
              , i = t.offsetHeight
              , o = r > a - i - n;
            return o
        }
          , a = function(e, n, t, r) {
            if (!(e && n > 0))
                return !1;
            var a = e.offsetTop + r;
            return a >= t && a - t <= n
        }
    },
    79976: function(e, n, t) {
        t.d(n, {
            J: function() {
                return r
            },
            v: function() {
                return a
            }
        });
        var r = new (t(92930).Z)
          , a = {
            OPEN_CONFIRM_MODAL: "openConfirmModal",
            CLOSE_CONFIRM_MODAL: "closeConfirmModal",
            DELETE_NOTICE: "deleteNotice",
            SHOW_TOAST: "showToast",
            ENTER_NOTICELIST_FROM_OTHER_PAGE: "enterNoticeListFromOtherPage"
        }
    },
    19387: function(e, n, t) {
        t.d(n, {
            e: function() {
                return s
            }
        });
        var r = t(48735)
          , a = t.n(r)
          , i = t(62071)
          , o = t(20388)
          , s = function(e) {
            arguments.length > 1 && arguments[1] !== undefined || i._q.NOTICE_PUSH;
            var n, t, r, s, l, u, c, d = {}, v = e || {}, f = v.type;
            switch (f) {
            case i.I6.AT:
                var _ = a()(e)
                  , E = void 0 === _ ? {} : _
                  , p = E.user_info
                  , m = void 0 === p ? {} : p
                  , h = E.sub_type;
                void 0 === h && i.vw.NORMAL;
                c = m,
                d.group_id = (null == e ? void 0 : e.aweme_id) || (null == E || null === (n = E.aweme) || void 0 === n ? void 0 : n.aweme_id),
                d.interact_type = o.XV[f];
                break;
            case i.I6.COMMENT:
                var I = e.comment
                  , g = void 0 === I ? {} : I
                  , S = g.comment
                  , O = void 0 === S ? {} : S
                  , N = g.comment_type
                  , T = void 0 === N ? i.W1.NORMAL : N
                  , M = O.user
                  , C = void 0 === M ? {} : M;
                c = C,
                d.group_id = (null == e ? void 0 : e.aweme_id) || (null == g || null === (t = g.aweme) || void 0 === t ? void 0 : t.aweme_id),
                d.interact_type = null === (r = o.XV[f]) || void 0 === r ? void 0 : r[T];
                break;
            case i.I6.DIGG:
                var L = e.digg
                  , y = void 0 === L ? {} : L
                  , k = y.from_user
                  , R = void 0 === k ? [] : k
                  , w = y.digg_type
                  , A = void 0 === w ? i.vq.NORMAL : w;
                if (c = (null == R ? void 0 : R[0]) || {},
                d.group_id = (null == e ? void 0 : e.aweme_id) || (null == y || null === (s = y.aweme) || void 0 === s ? void 0 : s.aweme_id),
                d.interact_type = null === (l = o.XV[f]) || void 0 === l ? void 0 : l[A],
                i._q.NOTICE_CELL) {
                    var Z, b = y.merge_count, P = b > 1 && (null == R ? void 0 : R.length) > 1 ? i.VG.SHOW_MERGE : i.VG.NOT_SHOW_MERGE;
                    d.interact_type = null === (Z = o.Yk[A]) || void 0 === Z ? void 0 : Z[P],
                    d.like_cnt = b
                }
                break;
            case i.I6.FOLLOW:
            case i.I6.FOLLOW_REQUEST:
                var U = e.follow
                  , D = void 0 === U ? {} : U;
                c = (null == D ? void 0 : D.from_user) || {},
                d.interact_type = o.XV[f];
                break;
            case i.I6.COMMENT_DANMAKU:
                var G = e.interactive_notice
                  , x = void 0 === G ? {} : G;
                c = (null == x || null === (u = x.from_user) || void 0 === u ? void 0 : u[0]) || {},
                d.interact_type = o.XV[f]
            }
            var F = c || {}
              , V = F.uid
              , H = void 0 === V ? "" : V
              , W = F.follow_status
              , B = void 0 === W ? i.EV.RelationUnknown : W;
            return d.personal_relation = String(B),
            d.from_user_id = H,
            d
        }
    },
    90064: function(e, n, t) {
        t.d(n, {
            Gb: function() {
                return s
            }
        });
        var r = t(937)
          , a = t(29900)
          , i = t(73824)
          , o = new (t(74269).hD)({
            interact_notif_show: {
                eventName: "interact_notif_show",
                params: {}
            },
            interact_notif_hover: {
                eventName: "interact_notif_hover",
                params: {}
            },
            interact_push_show: {
                eventName: "interact_push_show",
                params: {}
            },
            interact_push_click: {
                eventName: "interact_push_click",
                params: {}
            },
            interact_push_close: {
                eventName: "interact_push_close",
                params: {}
            },
            interact_cell_show: {
                eventName: "interact_cell_show",
                params: {}
            },
            interact_cell_click: {
                eventName: "interact_cell_click",
                params: {}
            },
            interact_setting_show: {
                eventName: "interact_setting_show",
                params: {}
            },
            interact_setting_click: {
                eventName: "interact_setting_click",
                params: {}
            },
            interact_like_show: {
                eventName: "interact_like_show",
                params: {}
            },
            enter_personal_detail: {
                eventName: "enter_personal_detail",
                params: {}
            },
            follow: {
                eventName: "follow",
                params: {}
            },
            follow_cancel: {
                eventName: "follow_cancel",
                params: {}
            },
            interact_login_notify: {
                eventName: "interact_login_notify",
                params: {
                    enter_from: "",
                    is_new: 0
                }
            },
            interact_cell_click_all: {
                eventName: "interact_cell_click_all",
                params: {}
            }
        })
          , s = function(e, n) {
            try {
                var t = n || {};
                o.sendLog(e, (0,
                r.Z)({
                    enter_from: null === (l = i.yW) || void 0 === l ? void 0 : l.call(a),
                    previous_page: null === (s = i.vM) || void 0 === s ? void 0 : s.call(a)
                }, t))
            } catch (u) {}
            var s, l
        }
    },
    33527: function(e, n, t) {
        t.d(n, {
            E: function() {
                return r
            }
        });
        var r = t(21528).createContext({
            player: {}
        })
    },
    59662: function(e, n, t) {
        t.d(n, {
            n: function() {
                return i
            }
        });
        var r = t(21528)
          , a = t(33527)
          , i = function() {
            return (0,
            r.useContext)(a.E).player
        }
    },
    76953: function(e, n, t) {
        var r, a = t(21528);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            i.apply(this, arguments)
        }
        n.Z = function(e) {
            return a.createElement("svg", i({
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M.8 7.578C.8 3.831 4.025.8 8 .8s7.2 3.03 7.2 6.778c0 3.748-3.225 6.779-7.2 6.779 0 0-1.744.102-2.454.266-.467.102-1.258.369-1.744.533a.561.561 0 01-.75-.39c-.072-.3-.045-1.007-.024-1.554.015-.385.026-.69-.002-.716C1.665 11.253.8 9.508.8 7.577zm5.879 3.325c-.23-.063-.4-.13-.504-.182a.62.62 0 11.554-1.107c.034.016.128.053.276.094.644.175 1.438.175 2.348-.128a.62.62 0 01.392 1.175c-1.155.385-2.196.385-3.066.148z",
                fill: "#2F3035",
                fillOpacity: .9
            })))
        }
    },
    74006: function(e, n, t) {
        var r, a = t(21528);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            i.apply(this, arguments)
        }
        n.Z = function(e) {
            return a.createElement("svg", i({
                width: 13,
                height: 13,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                d: "M11.867 11.867a1.211 1.211 0 01-1.712 0l-3.71-3.71-3.711 3.71a1.211 1.211 0 11-1.713-1.712l3.71-3.71-3.71-3.711A1.21 1.21 0 112.734 1.02l3.71 3.71 3.71-3.71a1.211 1.211 0 011.713 1.713l-3.71 3.71 3.71 3.71c.473.474.473 1.24 0 1.713z",
                fill: "#2F3035",
                fillOpacity: .7
            })))
        }
    },
    15738: function(e, n, t) {
        var r, a = t(21528);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            i.apply(this, arguments)
        }
        n.Z = function(e) {
            return a.createElement("svg", i({
                width: 14,
                height: 14,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 14A7 7 0 107 0a7 7 0 000 14zM6 3.678C6 3.301 6.41 3 6.924 3h.205c.514 0 .924.301.924.678v4.343c0 .377-.41.679-.924.679h-.205C6.411 8.7 6 8.398 6 8.02V3.678zm.3 7.878a.95.95 0 01-.3-.683.95.95 0 01.3-.684 1.073 1.073 0 011.453 0c.19.179.3.43.3.684a.95.95 0 01-.3.683 1.073 1.073 0 01-1.452 0z",
                fill: "#FE3824"
            })))
        }
    },
    36626: function(e, n) {
        n.Z = {
            container: "DhEeeU3v",
            shareCode: "J8_Uj1cS",
            failed: "hlk9n9AG",
            defaultContainer: "EDG47eF_",
            crossContainer: "F2u5rST7",
            columnContainer: "nFZmQGu5",
            disabledContent: "TVkq94nr",
            shareToastWrap: "_2p8xYfq",
            hidden: "HwFBqYeT"
        }
    },
    93988: function(e, n) {
        n.Z = {
            entryImg: "Fl0kqiow",
            activity: "hxObzeVk",
            yiqing: "AdybByK8",
            fifaworldcup: "H5dtIAPn",
            fifaSearch: "fQ6ajgUm",
            vsTransMode: "o2d9ZsaW",
            popNum: "cNAhsrSo",
            PopStyle: "IyJcvQVk",
            popStyle: "IyJcvQVk",
            digitsNumberPop: "zMJW4Vx0",
            numberPoint: "Ri4zG0dK",
            newCharacterPop: "QrMYjyZV",
            imLoginGuidePanelWrapper: "S2flOjWR",
            imLoginGuidePanel: "MYCMYVH1",
            dropDownListInCenterChange: "t7l_Fkw4",
            desc: "B5vV1GJY",
            loginBtn: "llyXa0VC",
            circleButtonNoText: "lSs8pUz9",
            polymorphicButton: "FxXQWshl",
            cicleButtonWithText: "ijmpbxwC",
            textLink: "w_t2UeQ0",
            shadowChange: "ajqDqrxY",
            overflowChange: "nCsrzcNJ",
            conversationDtailAnimationKeyframes: "PJOQYpeI",
            dropDownListInNoCenterChange: "yMugd459",
            showDeleteAllMessageModal: "R4c0llcJ",
            dropDownListInNoCenterLeftTopChange: "rnhULFrG",
            dropDownListOutChange: "czkoyWDk"
        }
    }
}]);
