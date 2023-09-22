(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1193], {
    9453: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return w
            }
        });
        var r = n(4200)
          , i = n.n(r)
          , s = n(9838)
          , o = n.n(s)
          , a = n(50922)
          , c = n.n(a)
          , u = n(55929)
          , d = n.n(u)
          , v = n(92927)
          , l = n.n(v)
          , p = n(55239)
          , h = n.n(p)
          , f = n(21528)
          , g = n(51235)
          , m = n.n(g)
          , x = n(70355)
          , y = n.n(x)
          , k = n(70736);
        function _(e) {
            return function(e) {
                if (h()(e))
                    return b(e)
            }(e) || function(e) {
                if (void 0 !== c() && d()(Object(e)))
                    return o()(e)
            }(e) || function(e, t) {
                var n;
                if (!e)
                    return;
                if ("string" == typeof e)
                    return b(e, t);
                var r = i()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return o()(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return b(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var I = function(e) {
            var t, n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e3, r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [], i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}, s = i.immediately, o = void 0 !== s && s, a = i.trailing, c = void 0 === a || a, u = i.leading, d = void 0 !== u && u, v = r, l = n, p = (0,
            f.useRef)(), h = (0,
            f.useRef)(!1), g = (0,
            f.useRef)(!1), x = (0,
            f.useRef)(e);
            x.current = e;
            var b = (0,
            f.useRef)([])
              , I = function(e) {
                return m()((function() {
                    e && x.current.apply(x, _(b.current)),
                    g.current = !1
                }
                ), l)
            }
              , M = (0,
            f.useCallback)((function() {
                p.current && clearTimeout(p.current)
            }
            ), [])
              , C = (0,
            f.useCallback)((function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if (b.current = t,
                o && !h.current)
                    return x.current.apply(x, _(b.current)),
                    void (h.current = !0);
                M(),
                d && 0 == g.current && (x.current.apply(x, _(b.current)),
                g.current = !0),
                p.current = I(c)
            }
            ), [l, M]);
            return (0,
            k.Z)((function() {
                return C(),
                M
            }
            ), y()(t = []).call(t, _(v), [C])),
            (0,
            f.useEffect)((function() {
                return M
            }
            ), []),
            {
                run: C,
                cancel: M
            }
        };
        function M(e, t) {
            return function(e) {
                if (h()(e))
                    return e
            }(e) || function(e, t) {
                if (void 0 === c() || !d()(Object(e)))
                    return;
                var n = []
                  , r = !0
                  , i = !1
                  , s = undefined;
                try {
                    for (var o, a = l()(e); !(r = (o = a.next()).done) && (n.push(o.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (u) {
                    i = !0,
                    s = u
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (i)
                            throw s
                    }
                }
                return n
            }(e, t) || function(e, t) {
                var n;
                if (!e)
                    return;
                if ("string" == typeof e)
                    return C(e, t);
                var r = i()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return o()(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return C(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function C(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var w = function(e, t) {
            var n = M((0,
            f.useState)(e), 2)
              , r = n[0]
              , i = n[1];
            return I((function() {
                i(e)
            }
            ), t, [e]),
            r
        }
    },
    85248: function(e, t, n) {
        "use strict";
        var r = n(21528);
        t.Z = function(e) {
            var t = (0,
            r.useRef)();
            return (0,
            r.useEffect)((function() {
                t.current = e
            }
            )),
            t.current
        }
    },
    70736: function(e, t, n) {
        "use strict";
        var r = n(21528);
        t.Z = function(e, t) {
            var n = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)((function() {
                return n.current ? e() : (n.current = !0,
                function() {}
                )
            }
            ), t)
        }
    },
    90734: function(e, t, n) {
        "use strict";
        n.d(t, {
            NI: function() {
                return _
            },
            Lk: function() {
                return m
            },
            b3: function() {
                return b
            },
            c5: function() {
                return k
            },
            v9: function() {
                return s
            },
            k5: function() {
                return w
            },
            rb: function() {
                return x
            },
            v$: function() {
                return y
            },
            I7: function() {
                return f
            },
            O9: function() {
                return T
            },
            Bs: function() {
                return g
            },
            HF: function() {
                return d
            },
            P6: function() {
                return v
            },
            uX: function() {
                return h
            },
            zn: function() {
                return C
            },
            _: function() {
                return i
            }
        });
        var r, i, s, o = n(70355), a = n.n(o), c = n(20822), u = n(60181), d = {
            sdkVersion: u.G.version,
            refer: c.m.Refer.PC,
            buildNumber: a()(r = "".concat(u.G.commit, ":")).call(r, u.G.branch),
            wsProtocols: ["binary", "base64", "pbbp2"],
            ticketType: c.m.TicketType.TICKET_TYPE_WEB,
            envKey: "X-Tt-Env",
            boeHeaderKey: "X-Use-Boe",
            ppeHeaderKey: "X-Use-Ppe",
            requestAccessName: "web_sdk",
            heartbeatInterval: 15e3,
            maxHeartbeatEmptyWindow: 3e4,
            conversationRefreshCount: 10
        };
        !function(e) {
            e[e.Default = 0] = "Default",
            e[e.PushOnly = 1] = "PushOnly",
            e[e.All = 2] = "All",
            e[e.Disable = 3] = "Disable"
        }(i || (i = {})),
        function(e) {
            e.MessageMode = "s:mode",
            e.SendResponseStatus = "s:send_response_status",
            e.SendResponseExtraInfo = "s:send_response_extra_info",
            e.SendResponseCheckCode = "s:send_response_check_code",
            e.SendResponseCheckMessage = "s:send_response_check_msg",
            e.ClientMessageId = "s:client_message_id",
            e.MentionedUser = "s:mentioned_users",
            e.DoNotIncreaseUnread = "s:do_not_increase_unread",
            e.DoNotPopConversation = "s:do_not_pop_conversation",
            e.IsRecalled = "s:is_recalled",
            e.ServerMessageId = "s:server_message_id",
            e.LocalLogId = "s:local_logid",
            e.MessageVisible = "s:visible",
            e.MessageInvisible = "s:invisible",
            e.RelationIsMuted = "s:relation_is_muted",
            e.RelationNormalOnly = "s:relation_normal_only",
            e.RelationMuteTime = "s:relation_mute_time",
            e.RelationMuteExt = "s:relation_mute_ext",
            e.MessageSourceAppId = "s:biz_aid",
            e.ConversationSourceAppId = "s:s_aid",
            e.MarkActionType = "s:action_type",
            e.IsRootReference = "s:is_root_ref",
            e.MarkMessageNewExt = "s:mark_message_new_ext",
            e.AckSampling = "s:is_ack_sampling",
            e.AckSamplingShow = "s:is_ack_sampling_show",
            e.DoNotUpdateLastMessage = "s:do_not_update_last_msg",
            e.DoNotMoveReadIndex = "s:do_not_move_read_index",
            e.FileExtKeyAudioAsrText = "s:file_ext_key_audio_asr_text",
            e.RecognitionResponseCheckCode = "s:recognition_response_check_code",
            e.RecognitionResponseCheckMsg = "s:recognition_response_check_msg",
            e.PushPartDisableConfig = "s:push_part_disable_config",
            e.MustNotify = "s:must_notify"
        }(s || (s = {}));
        var v, l, p, h, f, g, m, x, y, k, _, b, I, M, C, w, T = "mute_wl";
        !function(e) {
            e[e.Enable = 0] = "Enable",
            e[e.Disable = 1] = "Disable"
        }(v || (v = {})),
        function(e) {
            e[e.SingleChat = 1] = "SingleChat",
            e[e.GroupChat = 2] = "GroupChat",
            e[e.LiveChat = 3] = "LiveChat"
        }(l || (l = {})),
        function(e) {
            e[e.Normal = 0] = "Normal",
            e[e.Dissolved = 1] = "Dissolved"
        }(p || (p = {})),
        function(e) {
            e[e.Off = 0] = "Off",
            e[e.On = 1] = "On"
        }(h || (h = {})),
        function(e) {
            e[e.Off = 0] = "Off",
            e[e.On = 1] = "On"
        }(f || (f = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Allow = 1] = "Allow",
            e[e.Disable = 2] = "Disable",
            e[e.PartAllow = 3] = "PartAllow"
        }(g || (g = {})),
        function(e) {
            e[e.Off = 0] = "Off",
            e[e.On = 1] = "On"
        }(m || (m = {})),
        function(e) {
            e[e.NotAvailable = 0] = "NotAvailable",
            e[e.Start = 1] = "Start",
            e[e.Error = 2] = "Error",
            e[e.Succeeded = 3] = "Succeeded"
        }(x || (x = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Online = 1] = "Online",
            e[e.LoadMore = 2] = "LoadMore",
            e[e.Init = 3] = "Init",
            e[e.UserInbox = 4] = "UserInbox",
            e[e.BroadcastLoadMore = 5] = "BroadcastLoadMore",
            e[e.Offline = 6] = "Offline"
        }(y || (y = {})),
        function(e) {
            e.Error = "error",
            e.WebSocketConnected = "websocket-connected",
            e.WebSocketDisconnected = "websocket-disconnected",
            e.WebSocketReceiveUnexpectedFrame = "websocket-receive-unexpected-frame",
            e.ReceiveNewMessage = "receive-new-message",
            e.ReceiveSelfMessage = "receive-self-message",
            e.ReceiveCommandMessage = "receive-command-message",
            e.ReceiveBroadcastNewMessage = "receive-broadcast-new-message",
            e.ReceiveBroadcastSelfMessage = "receive-broadcast-self-message",
            e.ReceiveNewUpdateExtMessage = "receive-new-update-ext-message",
            e.ReceiveNewP2PMessage = "receive-new-p2p-message",
            e.MessageUpsert = "message-upsert",
            e.ConversationChange = "conversation-change",
            e.ConversationUpsert = "conversation-upsert",
            e.ConversationDissolve = "conversation-dissolve",
            e.ConversationBlock = "conversation-block",
            e.ParticipantUpsert = "participant-upsert",
            e.ParticipantJoin = "participant-join",
            e.ParticipantLeave = "participant-leave",
            e.ParticipantBlock = "participant-block",
            e.MessageSend = "message-send",
            e.MessageRecall = "message-recall",
            e.MessageDelete = "message-delete",
            e.ConversationDelete = "conversation-delete",
            e.ConversationLeave = "conversation-leave",
            e.ConversationCreate = "conversation-create",
            e.ConversationJoin = "conversation-join",
            e.ReceiveNewStrangerMessage = "receive-new-stranger-message",
            e.StrangerUpgrade = "stranger-upgrade",
            e.ReceiveRtc = "receive-rtc",
            e.MessagePropertyUpsert = "message-property-upsert",
            e.InitLoadPage = "init-load-page",
            e.InitFinish = "init-finish"
        }(k || (k = {})),
        function(e) {
            e[e.Unknown = -1] = "Unknown",
            e[e.Success = 0] = "Success",
            e[e.InvalidToken = 1] = "InvalidToken",
            e[e.InvalidTicket = 2] = "InvalidTicket",
            e[e.InvalidRequest = 4] = "InvalidRequest",
            e[e.InvalidCommand = 5] = "InvalidCommand",
            e[e.ServerError = 6] = "ServerError",
            e[e.UserForbidden = 11] = "UserForbidden",
            e[e.MessageTargetConversationNotExist = 15] = "MessageTargetConversationNotExist",
            e[e.Degradation = 16] = "Degradation",
            e[e.RecallTimeout = 17] = "RecallTimeout",
            e[e.CallbackDeny = 19] = "CallbackDeny",
            e[e.ExpiredToken = 100] = "ExpiredToken",
            e[e.InvalidParam = 400] = "InvalidParam",
            e[e.ResourceExhausted = 429] = "ResourceExhausted",
            e[e.InternalError = 500] = "InternalError",
            e[e.InvalidInboxType = 1e3] = "InvalidInboxType",
            e[e.ConversationNotExist = 1001] = "ConversationNotExist",
            e[e.MessageNotExist = 1002] = "MessageNotExist",
            e[e.MessageOffline = 1003] = "MessageOffline",
            e[e.UnknownMessageType = 1004] = "UnknownMessageType",
            e[e.InvalidServerId = 1005] = "InvalidServerId",
            e[e.MessageNotReady = 1006] = "MessageNotReady",
            e[e.TokenFuncError = 1007] = "TokenFuncError",
            e[e.NetworkError = 1008] = "NetworkError",
            e[e.AlreadyDispose = 1009] = "AlreadyDispose",
            e[e.NoAdapter = 1010] = "NoAdapter",
            e[e.ComponentNotFound = 1011] = "ComponentNotFound",
            e[e.NotImplemented = 1012] = "NotImplemented",
            e[e.MPInvalidArgument = 10001] = "MPInvalidArgument",
            e[e.MPServerUrlError = 10002] = "MPServerUrlError",
            e[e.MPNotFileMsg = 10003] = "MPNotFileMsg",
            e[e.MPUploadError = 10004] = "MPUploadError",
            e[e.MPNotSupportCipher = 10005] = "MPNotSupportCipher",
            e[e.RtcUnknown = 10100] = "RtcUnknown",
            e[e.RtcCreateRoomFail = 10101] = "RtcCreateRoomFail",
            e[e.RtcStartCallFail = 10102] = "RtcStartCallFail",
            e[e.RtcAlreadyCalling = 10103] = "RtcAlreadyCalling",
            e[e.RtcAlreadyOnTheCall = 10104] = "RtcAlreadyOnTheCall",
            e[e.RtcNotCalling = 10105] = "RtcNotCalling",
            e[e.RtcNotOnTheCall = 10106] = "RtcNotOnTheCall",
            e[e.RtcNotRinging = 10107] = "RtcNotRinging",
            e[e.RtcAcceptFail = 10108] = "RtcAcceptFail",
            e[e.RtcCheckStatusFail = 10109] = "RtcCheckStatusFail",
            e[e.RtcInvalidParam = 10110] = "RtcInvalidParam",
            e[e.RtcNotInit = 10111] = "RtcNotInit",
            e[e.RtcNoClient = 10112] = "RtcNoClient",
            e[e.RtcNoInfo = 10113] = "RtcNoInfo",
            e[e.RtcNoStream = 10114] = "RtcNoStream",
            e[e.RtcSdkError = 10115] = "RtcSdkError",
            e[e.RtcNotSupported = 10116] = "RtcNotSupported",
            e[e.DbOpError = 2e4] = "DbOpError",
            e[e.StorageCryptoError = 20001] = "StorageCryptoError",
            e[e.AuthSignError = 10201] = "AuthSignError"
        }(_ || (_ = {})),
        function(e) {
            e[e.Created = 0] = "Created",
            e[e.Preparing = 1] = "Preparing",
            e[e.Inflight = 2] = "Inflight",
            e[e.Succeeded = 3] = "Succeeded",
            e[e.Received = 4] = "Received",
            e[e.Failed = -1] = "Failed",
            e[e.Rejected = -2] = "Rejected",
            e[e.SelfVisible = -3] = "SelfVisible"
        }(b || (b = {})),
        function(e) {
            e[e.Succeeded = 0] = "Succeeded",
            e[e.UserNotInConversation = 1] = "UserNotInConversation",
            e[e.CheckConversationNotPass = 2] = "CheckConversationNotPass",
            e[e.CheckMessageNotPass = 3] = "CheckMessageNotPass",
            e[e.CheckMessageNotPassButSelfVisible = 4] = "CheckMessageNotPassButSelfVisible",
            e[e.UserHasBeenBlock = 5] = "UserHasBeenBlock"
        }(I || (I = {})),
        function(e) {
            e[e.Succeeded = 0] = "Succeeded",
            e[e.Rejected = 1] = "Rejected",
            e[e.PartialRejected = 2] = "PartialRejected"
        }(M || (M = {})),
        function(e) {
            e[e.Immediate = 0] = "Immediate",
            e[e.Throttle = 1] = "Throttle",
            e[e.Debounce = 2] = "Debounce",
            e[e.ThrottleWithArgs = 3] = "ThrottleWithArgs",
            e[e.DebounceWithArgs = 4] = "DebounceWithArgs"
        }(C || (C = {})),
        function(e) {
            e[e.Default = 0] = "Default",
            e[e.AwemeMode = 1] = "AwemeMode"
        }(w || (w = {}))
    },
    77428: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return S
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(31557)
          , o = n(12914)
          , a = n(98790)
          , c = n(89027)
          , u = n(43071)
          , d = n(27278)
          , v = n(48320)
          , l = n(32060)
          , p = n(79107);
        var h = n(58515);
        function f(e) {
            var t = "function" == typeof u ? new u : undefined;
            return f = function(e) {
                if (null === e || (n = e,
                -1 === p(r = Function.toString.call(n)).call(r, "[native code]")))
                    return e;
                var n, r;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, i)
                }
                function i() {
                    return (0,
                    h.Z)(e, arguments, (0,
                    v.Z)(this).constructor)
                }
                return i.prototype = d(e.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                (0,
                l.Z)(i, e)
            }
            ,
            f(e)
        }
        var g = n(70355)
          , m = n.n(g)
          , x = n(36674)
          , y = n.n(x)
          , k = n(27845)
          , _ = n.n(k)
          , b = n(4200)
          , I = n.n(b)
          , M = n(90734)
          , C = n(32218)
          , w = n(52381)
          , T = n(83610)
          , S = function(e) {
            (0,
            a.Z)(n, e);
            var t = (0,
            c.Z)(n);
            function n(e) {
                var i, a, c, u, d, v, l, p;
                (0,
                r.Z)(this, n),
                (u = t.call(this, m()(i = m()(a = "".concat(e && e.logid ? "[".concat(e.logid, "] ") : "")).call(a, e && e.msg ? 'message: "' + e.msg + '"' : "")).call(i, e && e.innerError ? ', inner error: "'.concat(e.innerError, '"') : ""))).ctx = e.ctx,
                y()((0,
                o.Z)(u), e),
                _()((0,
                o.Z)(u), n.prototype),
                (null === (d = u.innerError) || void 0 === d ? void 0 : d.logid) && (u.logid = u.innerError.logid);
                try {
                    var h;
                    if ("string" == typeof (null === (v = u.innerError) || void 0 === v ? void 0 : v.stack))
                        u.stack = u.innerError.stack + "\n" + (null === (l = u.stack) || void 0 === l ? void 0 : I()(h = l.split("\n")).call(h, 2).join("\n"))
                } catch (x) {
                    var f, g;
                    C.Y.ctxWarn(u.ctx, m()(f = m()(g = "concat trace fail=".concat(x, ", current stack=")).call(g, u.stack, ", inner stack=")).call(f, null === (p = u.innerError) || void 0 === p ? void 0 : p.stack))
                }
                return u.ctx ? (e.ignoreEvent || u.resolve(T.Uk.EventBus).emit(M.c5.Error, e.sender, (0,
                o.Z)(u)),
                u.resolve(T.Uk.Monitor).emitError((0,
                o.Z)(u)),
                u.resolve(T.Uk.Monitor).emitCounter(w.U.BizSdkError, 1, {
                    type: e.type ? m()(c = "".concat(e.type, ":")).call(c, M.NI[e.type]) : "unknown"
                }),
                u) : (0,
                s.Z)(u)
            }
            return (0,
            i.Z)(n, [{
                key: "getContext",
                value: function() {
                    return this.ctx
                }
            }, {
                key: "resolve",
                value: function(e) {
                    return this.ctx.resolve(e)
                }
            }]),
            n
        }(f(Error))
    },
    1080: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ah: function() {
                return qt
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(44742)
          , c = n.n(a)
          , u = n(72610)
          , d = n(15017)
          , v = n.n(d)
          , l = n(51235)
          , p = n.n(l)
          , h = n(36674)
          , f = n.n(h)
          , g = n(83610)
          , m = n(49972)
          , x = n(20822)
          , y = n(6779)
          , k = n(79755)
          , _ = n.n(k)
          , b = n(32218)
          , I = x.m.Request
          , M = x.m.Response
          , C = x.m.Frame;
        function w(e) {
            return "undefined" != typeof btoa ? btoa(String.fromCharCode.apply(null, new Uint8Array(e))) : ""
        }
        function T(e) {
            var t = I.encode(e).finish();
            return new Uint8Array(t)
        }
        function S(e, t) {
            var n = new Uint8Array(t);
            try {
                return M.decode(n)
            } catch (i) {
                var r = w(n);
                throw b.Y.ctxWarn(e, "decode response error: ", i),
                b.Y.ctxDebug(e, "hex dump: ", r),
                r
            }
        }
        function E(e) {
            var t = C.encode(e).finish();
            return new Uint8Array(t)
        }
        var R, U, N = n(16995), A = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).instance = v().create({
                    timeout: i.option.timeout,
                    withCredentials: !!i.option.withCredentials,
                    headers: i.headers,
                    responseType: i.dataType,
                    method: i.method
                }),
                i
            }
            return (0,
            i.Z)(n, [{
                key: "send",
                value: function(e, t, n) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        var i;
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.instance.request({
                                        url: e,
                                        data: n,
                                        method: t
                                    });
                                case 2:
                                    return i = r.sent,
                                    r.abrupt("return", i.data);
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "sendByBeacon",
                value: function(e, t) {
                    return navigator.sendBeacon !== undefined && navigator.sendBeacon(e, t)
                }
            }]),
            n
        }(function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).option = e.option,
                i
            }
            return (0,
            i.Z)(n, [{
                key: "sendByBeacon",
                value: function(e, t) {
                    return !1
                }
            }, {
                key: "sendBeacon",
                value: function(e, t) {
                    var n = this;
                    p()((function() {
                        n.sendByBeacon(e, T(t)) || n.sendRequest(e, t)
                    }
                    ), 0)
                }
            }, {
                key: "sendRequest",
                value: function(e, t) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function n() {
                        var r;
                        return c().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.send(e, "POST", this.encode(t));
                                case 2:
                                    return r = n.sent,
                                    n.abrupt("return", this.decode(r));
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "encode",
                value: function(e) {
                    return T(e).buffer
                }
            }, {
                key: "decode",
                value: function(e) {
                    return x.m.Response.create(S(this.ctx, e))
                }
            }, {
                key: "headers",
                get: function() {
                    return f()({
                        Accept: this.mime,
                        "Content-Type": this.mime
                    }, this.option.httpHeaders)
                }
            }, {
                key: "mime",
                get: function() {
                    return "application/x-protobuf"
                }
            }, {
                key: "dataType",
                get: function() {
                    return "arraybuffer"
                }
            }, {
                key: "method",
                get: function() {
                    return "POST"
                }
            }]),
            n
        }(g.mA));
        !function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Connected = 1] = "Connected",
            e[e.Disconnected = 2] = "Disconnected"
        }(R || (R = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Cellular_2G = 1] = "Cellular_2G",
            e[e.Cellular_3G = 2] = "Cellular_3G",
            e[e.Cellular_4G = 3] = "Cellular_4G",
            e[e.Cellular_5G = 4] = "Cellular_5G",
            e[e.Wifi = 5] = "Wifi",
            e[e.Other = 6] = "Other",
            e[e.None = 7] = "None"
        }(U || (U = {}));
        var O = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n)
        }(g.mA)
          , B = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "getConnectionStatus",
                value: function() {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("undefined" == typeof navigator || navigator.onLine === undefined) {
                                        e.next = 8;
                                        break
                                    }
                                    if (!navigator.onLine) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", R.Connected);
                                case 5:
                                    return e.abrupt("return", R.Disconnected);
                                case 6:
                                    e.next = 9;
                                    break;
                                case 8:
                                    return e.abrupt("return", R.Unknown);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }, {
                key: "getNetworkType",
                value: function() {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getConnectionStatus();
                                case 2:
                                    if (e.sent !== R.Disconnected) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", U.None);
                                case 5:
                                    if ("undefined" == typeof navigator || !navigator.connection || !navigator.connection.type) {
                                        e.next = 27;
                                        break
                                    }
                                    e.t0 = navigator.connection.type,
                                    e.next = "cellular" === e.t0 ? 9 : "wifi" === e.t0 ? 21 : "other" === e.t0 ? 22 : "none" === e.t0 ? 23 : 24;
                                    break;
                                case 9:
                                    if (!navigator.connection.effectiveType) {
                                        e.next = 20;
                                        break
                                    }
                                    e.t1 = navigator.connection.effectiveType,
                                    e.next = "2g" === e.t1 || "slow-2g" === e.t1 ? 13 : "3g" === e.t1 ? 14 : "4g" === e.t1 ? 15 : "5g" === e.t1 ? 16 : 17;
                                    break;
                                case 13:
                                    return e.abrupt("return", U.Cellular_2G);
                                case 14:
                                    return e.abrupt("return", U.Cellular_3G);
                                case 15:
                                    return e.abrupt("return", U.Cellular_4G);
                                case 16:
                                    return e.abrupt("return", U.Cellular_5G);
                                case 17:
                                case 20:
                                case 24:
                                case 27:
                                    return e.abrupt("return", U.Unknown);
                                case 18:
                                    e.next = 21;
                                    break;
                                case 21:
                                    return e.abrupt("return", U.Wifi);
                                case 22:
                                    return e.abrupt("return", U.Other);
                                case 23:
                                    return e.abrupt("return", U.None);
                                case 25:
                                    e.next = 28;
                                    break;
                                case 28:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }]),
            n
        }(O)
          , D = n(4788)
          , P = n.n(D)
          , G = n(90734)
          , Z = n(85116)
          , L = n(57101)
          , W = n.n(L)
          , F = n(70355)
          , q = n.n(F)
          , V = n(25680)
          , Y = n.n(V)
          , H = n(77428)
          , K = n(52381)
          , z = n(26015)
          , j = n(43071)
          , X = n.n(j)
          , $ = n(96364)
          , Q = n.n($)
          , J = function() {
            function e(t, n, i) {
                (0,
                r.Z)(this, e),
                this.index = t,
                this.subject = n,
                this.handler = i
            }
            return (0,
            i.Z)(e, [{
                key: "unsubscribe",
                value: function() {
                    this.subject.unsubscribe(this)
                }
            }]),
            e
        }()
          , ee = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                var e;
                return (0,
                r.Z)(this, n),
                (e = t.apply(this, arguments)).subscriptions = new (X()),
                e.idx = 0,
                e
            }
            return (0,
            i.Z)(n, [{
                key: "subscribe",
                value: function(e) {
                    var t, n, r = Q()(t = this.subscriptions).call(t), i = (0,
                    z.Z)(r);
                    try {
                        for (i.s(); !(n = i.n()).done; ) {
                            var s = n.value;
                            if (e === s.handler)
                                return b.Y.ctxDebug(this.ctx, "ignore duplicate handler:", e),
                                s
                        }
                    } catch (a) {
                        i.e(a)
                    } finally {
                        i.f()
                    }
                    var o = new J(this.idx,this,e);
                    return this.subscriptions.set(this.idx, o),
                    this.idx++,
                    o
                }
            }, {
                key: "nextEmpty",
                value: function(e) {
                    var t, n, r = (0,
                    z.Z)(Q()(t = this.subscriptions).call(t));
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value;
                            if (i && i.handler)
                                try {
                                    i.handler({}, e)
                                } catch (s) {
                                    b.Y.ctxWarn(this.ctx, "error in event handler:", s)
                                }
                        }
                    } catch (s) {
                        r.e(s)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "next",
                value: function(e, t) {
                    var n, r, i = (0,
                    z.Z)(Q()(n = this.subscriptions).call(n));
                    try {
                        for (i.s(); !(r = i.n()).done; ) {
                            var s = r.value;
                            if (s && s.handler)
                                try {
                                    s.handler(e, t)
                                } catch (o) {
                                    b.Y.ctxWarn(this.ctx, "error in event handler:", o)
                                }
                        }
                    } catch (o) {
                        i.e(o)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    e && this.subscriptions.delete(e.index)
                }
            }, {
                key: "unsubscribeAll",
                value: function() {
                    this.subscriptions.clear()
                }
            }]),
            n
        }(g.mA);
        var te, ne = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "registerEvents",
                value: function() {
                    var e = this;
                    this.ws.onclose = function(t) {
                        e.onClose.next(t, e)
                    }
                    ,
                    this.ws.onopen = function() {
                        e.onOpen.nextEmpty(e)
                    }
                    ,
                    this.ws.onmessage = function(t) {
                        e.onMessage.next(t.data, e)
                    }
                    ,
                    this.ws.onerror = function(t) {
                        e.onError.next(t, e)
                    }
                }
            }, {
                key: "open",
                value: function() {
                    var e, t, n = this;
                    if (this.isOpen())
                        return b.Y.ctxWarn(this.ctx, "ws already open, close first"),
                        P().resolve(!0);
                    this.ws = new WebSocket(this.paramUrl,G.HF.wsProtocols),
                    this.ws.binaryType = "arraybuffer",
                    this.registerEvents();
                    var r = this.onOpen.subscribe((function() {
                        e(!0),
                        n.onOpen.unsubscribe(r)
                    }
                    ))
                      , i = this.onError.subscribe((function(e) {
                        t(e),
                        n.onError.unsubscribe(i)
                    }
                    ));
                    return new (P())((function(n, r) {
                        e = n,
                        t = r
                    }
                    ))
                }
            }, {
                key: "close",
                value: function() {
                    this.ws && (this.ws.onmessage = null,
                    this.ws.close()),
                    this.ws = undefined
                }
            }, {
                key: "send",
                value: function(e) {
                    this.ws.send(e)
                }
            }, {
                key: "isOpen",
                value: function() {
                    return this.ws !== undefined && this.ws.readyState === WebSocket.OPEN
                }
            }]),
            n
        }(function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).openTime = 0,
                i.createTime = 0,
                i.option = e.option,
                i.url = i.option.frontierUrl,
                i.onClose = new ee(e),
                i.onOpen = new ee(e),
                i.onError = new ee(e),
                i.onMessage = new ee(e),
                i.onOpen.subscribe((function() {
                    var e;
                    i.openTime = K.u.performanceNow(),
                    i.resolve(g.Uk.Monitor).emitMetrics(K.U.FrontierOpen, {
                        duration: i.openTime - i.createTime
                    }, {
                        url: null !== (e = i.url) && void 0 !== e ? e : "unknown"
                    })
                }
                )),
                i.onClose.subscribe((function(e) {
                    var t, n, r, s;
                    "undefined" != typeof CloseEvent && e instanceof CloseEvent ? i.resolve(g.Uk.Monitor).emitMetrics(K.U.FrontierClose, {
                        count: 1
                    }, {
                        url: null !== (t = i.url) && void 0 !== t ? t : "unknown",
                        code: null === (n = e.code) || void 0 === n ? void 0 : n.toString(),
                        reason: e.reason
                    }) : i.resolve(g.Uk.Monitor).emitMetrics(K.U.FrontierClose, {
                        count: 1
                    }, {
                        url: null !== (r = i.url) && void 0 !== r ? r : "unknown"
                    }),
                    0 === i.openTime || Y()(i.openTime) || i.resolve(g.Uk.Monitor).emitMetrics(K.U.FrontierLive, {
                        duration: K.u.performanceNow() - i.openTime
                    }, {
                        url: null !== (s = i.url) && void 0 !== s ? s : "unknown"
                    }),
                    i.openTime = 0
                }
                )),
                i.onMessage.subscribe((function(e) {
                    var t;
                    "hi" !== e.toString() && i.resolve(g.Uk.Monitor).emitMetrics(K.U.FrontierReceive, {
                        count: 1
                    }, {
                        url: null !== (t = i.url) && void 0 !== t ? t : "unknown"
                    })
                }
                )),
                i.onError.subscribe((function() {
                    var e;
                    i.resolve(g.Uk.Monitor).emitMetrics(K.U.FrontierError, {
                        count: 1
                    }, {
                        url: null !== (e = i.url) && void 0 !== e ? e : "unknown"
                    })
                }
                )),
                i
            }
            return (0,
            i.Z)(n, [{
                key: "paramUrl",
                get: function() {
                    var e, t, n, r = (null === (n = null === (t = this.option) || void 0 === t ? void 0 : t.headers) || void 0 === n ? void 0 : n[G.HF.envKey]) !== undefined ? (0,
                    Z.Z)({}, G.HF.envKey.toLowerCase(), this.option.headers[G.HF.envKey]) : {}, i = f()(f()({
                        token: this.ctx.cachedToken,
                        sid: this.option.sessionId,
                        aid: this.option.appId,
                        fpid: this.option.fpId,
                        device_id: this.option.deviceId,
                        access_key: _()("".concat(this.option.fpId + this.option.appKey + this.option.deviceId, "f8a69f1719916z")),
                        device_platform: this.option.devicePlatform,
                        version_code: this.option.versionCode
                    }, this.option.extended), r);
                    if (this.ctx.option.authType === x.m.AuthType.CERT_AUTH) {
                        var s = this.resolve(g.Uk.AuthManager);
                        i.sdk_cert = encodeURIComponent(s.getCert()),
                        i.ts_sign = encodeURIComponent(s.getTsSign())
                    }
                    return q()(e = "".concat(this.url, "?")).call(e, function(e) {
                        for (var t = [], n = 0, r = W()(e); n < r.length; n++) {
                            var i, s = r[n];
                            e[s] !== undefined && "" !== e[s] && t.push(q()(i = "".concat(s, "=")).call(i, e[s]))
                        }
                        return t.join("&")
                    }(i))
                }
            }, {
                key: "performOpen",
                value: function() {
                    var e = this
                      , t = !1;
                    this.createTime = K.u.performanceNow();
                    var n = new (P())((function(n, r) {
                        p()((function() {
                            t || r(new H.G({
                                ctx: e.ctx,
                                msg: "frontier connect timeout",
                                type: G.NI.NetworkError,
                                sender: e
                            }))
                        }
                        ), e.ctx.option.timeout)
                    }
                    ));
                    return P().race([n, (0,
                    u.mG)(e, void 0, void 0, c().mark((function e() {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.open();
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    throw e.prev = 5,
                                    e.t0 = e.catch(0),
                                    new H.G({
                                        ctx: this.ctx,
                                        msg: "ws connect error",
                                        innerError: e.t0,
                                        sender: this,
                                        type: G.NI.NetworkError
                                    });
                                case 8:
                                    return e.prev = 8,
                                    t = !0,
                                    e.finish(8);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 5, 8, 11]])
                    }
                    )))])
                }
            }, {
                key: "dispose",
                value: function() {
                    this.onOpen.unsubscribeAll(),
                    this.onClose.unsubscribeAll(),
                    this.onError.unsubscribeAll(),
                    this.onMessage.unsubscribeAll()
                }
            }]),
            n
        }(g.mA)), re = function() {
            function e() {
                (0,
                r.Z)(this, e),
                this.constructors = new (X())
            }
            return (0,
            i.Z)(e, [{
                key: "setAdapter",
                value: function(e, t) {
                    this.constructors.set(e, t)
                }
            }, {
                key: "setDynamicAdapter",
                value: function(e) {
                    for (var t = 0, n = W()(e); t < n.length; t++) {
                        var r = n[t];
                        this.setAdapter(r, e[r])
                    }
                }
            }, {
                key: "getConstructor",
                value: function(e, t) {
                    if (!this.constructors.has(t))
                        throw new H.G({
                            ctx: e,
                            type: G.NI.NoAdapter,
                            msg: "adapter not exist for ".concat(t),
                            sender: this
                        });
                    return this.constructors.get(t)
                }
            }], [{
                key: "setAdapter",
                value: function(e, t) {
                    return this.Instance.setAdapter(e, t)
                }
            }, {
                key: "getConstructor",
                value: function(e, t) {
                    return this.Instance.getConstructor(e, t)
                }
            }, {
                key: "setDynamicAdapter",
                value: function(e) {
                    return this.Instance.setDynamicAdapter(e)
                }
            }]),
            e
        }();
        re.Instance = new re,
        function(e) {
            e.NetApi = "net",
            e.HttpClient = "http",
            e.WebSocketClient = "ws",
            e.MediaUploader = "mediaUploader",
            e.RtcApi = "rtc"
        }(te || (te = {}));
        var ie = n(9706)
          , se = n(73517)
          , oe = n(40491)
          , ae = n.n(oe)
          , ce = n(55239)
          , ue = n.n(ce)
          , de = n(63199)
          , ve = n.n(de)
          , le = n(18724)
          , pe = n.n(le)
          , he = n(77355)
          , fe = n.n(he)
          , ge = n(47560)
          , me = n.n(ge)
          , xe = n(79107)
          , ye = n.n(xe)
          , ke = n(95383)
          , _e = n.n(ke)
          , be = n(35826)
          , Ie = n.n(be)
          , Me = n(75386)
          , Ce = n.n(Me)
          , we = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "SendMessage",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        send_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            content: e.content,
                                            mentioned_users: e.mentionedUsers,
                                            client_message_id: e.clientId,
                                            ticket: e.ticket,
                                            message_type: e.messageType,
                                            ext: e.ext,
                                            ref_msg_info: e.referenceInfo
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.SEND_MESSAGE, {
                                        inboxType: e.inboxType,
                                        maxRetryTimes: this.ctx.option.maxSendMsgRetryTimes
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetMessagesByUser",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        messages_per_user_body: {
                                            cursor: e.cursor,
                                            limit: e.limit
                                        }
                                    }),
                                    t.prev = 1,
                                    t.next = 4,
                                    this.sendWithRawBody(n, x.m.IMCMD.GET_MESSAGES_BY_USER, {
                                        inboxType: e.inboxType,
                                        maxRetryTimes: 1
                                    });
                                case 4:
                                    return t.abrupt("return", t.sent);
                                case 7:
                                    return t.prev = 7,
                                    t.t0 = t.catch(1),
                                    b.Y.ctxWarn(this.ctx, "pull user error:".concat(t.t0, ", ignore")),
                                    t.abrupt("return", x.m.Response.create({
                                        body: x.m.ResponseBody.create({
                                            messages_per_user_body: x.m.MessagesPerUserResponseBody.create({
                                                next_cursor: e.cursor,
                                                has_more: !1,
                                                messages: []
                                            })
                                        })
                                    }));
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 7]])
                    }
                    )))
                }
            }, {
                key: "GetMessagesByUserInitV2",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        messages_per_user_init_v2_body: {
                                            cursor: e.cursor,
                                            init_sub_type: e.initSubType,
                                            conv_limit: e.convLimit,
                                            msg_limit: e.msgLimit
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.GET_MESSAGES_BY_USER_INIT_V2, {
                                        inboxType: e.inboxType,
                                        forceHttp: !0,
                                        maxRetryTimes: 10
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetMessagesByInit",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        message_by_init: {
                                            version: e.version,
                                            page: e.page,
                                            conv_limit: e.convLimit,
                                            msg_limit: e.msgLimit
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.GET_MESSAGE_BY_INIT, {
                                        inboxType: e.inboxType,
                                        forceHttp: !0,
                                        maxRetryTimes: 10
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetMessagesByConversation",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        messages_in_conversation_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            anchor_index: e.anchorIndex,
                                            limit: e.limit,
                                            direction: e.direction
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.GET_MESSAGES_BY_CONVERSATION, {
                                        inboxType: e.inboxType,
                                        forceHttp: !0
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "CreateConversationV2",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        create_conversation_v2_body: {
                                            conversation_type: e.type,
                                            participants: e.participants,
                                            persistent: e.persistent,
                                            idempotent_id: e.idempotentId,
                                            name: e.name,
                                            avatar_url: e.avatarUrl,
                                            description: e.desc,
                                            biz_ext: e.bizExt
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.CREATE_CONVERSATION_V2, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationInfoListV2",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = x.m.RequestBody.create({
                                        get_conversation_info_list_v2_body: {
                                            conversation_info_list: fe()(n = e.conversations).call(n, (function(e) {
                                                return {
                                                    conversation_id: e.conversationId,
                                                    conversation_short_id: e.conversationShortId,
                                                    conversation_type: e.conversationType
                                                }
                                            }
                                            ))
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(r, x.m.IMCMD.GET_CONVERSATION_INFO_LIST_V2, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "MarkConversationReadV3",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        mark_conversation_read_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            read_message_index: e.readIndex,
                                            conv_unread_count: e.unreadCount,
                                            total_unread_count: e.totalUnreadCount
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, x.m.IMCMD.MARK_CONVERSATION_READ_V3, {
                                        inboxType: e.inboxType,
                                        maxRetryTimes: 1
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "RecallMessage",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        recall_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            server_message_id: e.serverId
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.RECALL_MESSAGE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetTicket",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        get_ticket_body: {
                                            ticket_type: G.HF.ticketType,
                                            conversation_type: e.conversationType,
                                            conversation_short_id: e.shortId,
                                            to_id: e.toId,
                                            ext: e.ext
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, x.m.IMCMD.GET_TICKET, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.get_ticket_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationParticipantsList",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        conversation_participants_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            cursor: e.cursor,
                                            limit: e.limit
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.CONVERSATION_PARTICIPANTS_LIST, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationParticipantByUserId",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = x.m.RequestBody.create({
                                        mget_conversation_participants_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            participants: e.participants
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, x.m.IMCMD.MGET_CONVERSATION_PARTICIPANTS, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "ClientAck",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    n = x.m.RequestBody.create({
                                        client_ack_body: {
                                            start_time_stamp: e.startTimeStamp,
                                            cmd: e.cmd,
                                            network_type: e.NetworkType,
                                            logid: e.logid,
                                            client_time_stamp: e.clientTimeStamp,
                                            server_message_id: e.serverId,
                                            type: e.type
                                        }
                                    }),
                                    t.next = 4,
                                    this.send(n, x.m.IMCMD.CLIENT_ACK, {
                                        useBeacon: !0,
                                        inboxType: e.inboxType
                                    });
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6,
                                    t.t0 = t.catch(0),
                                    b.Y.ctxWarn(this.ctx, "send ack error: ".concat(t.t0, ", ignore"));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 6]])
                    }
                    )))
                }
            }, {
                key: "ClientBatchAck",
                value: function(e) {
                    var t, n;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        var i, s;
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0,
                                    i = null === (t = null == e ? void 0 : fe()(e)) || void 0 === t ? void 0 : t.call(e, (function(e) {
                                        return {
                                            start_time_stamp: e.startTimeStamp,
                                            cmd: e.cmd,
                                            network_type: e.NetworkType,
                                            logid: e.logid,
                                            client_time_stamp: e.clientTimeStamp,
                                            server_message_id: e.serverId,
                                            type: e.type
                                        }
                                    }
                                    )),
                                    s = x.m.RequestBody.create({
                                        client_batch_ack_body: {
                                            ack_list: i
                                        }
                                    }),
                                    r.next = 5,
                                    this.send(s, x.m.IMCMD.CLIENT_BATCH_ACK, {
                                        useBeacon: !0,
                                        inboxType: null === (n = null == e ? void 0 : e[0]) || void 0 === n ? void 0 : n.inboxType
                                    });
                                case 5:
                                    r.next = 10;
                                    break;
                                case 7:
                                    r.prev = 7,
                                    r.t0 = r.catch(0),
                                    b.Y.ctxWarn(this.ctx, "send batch ack error: ".concat(r.t0, ", ignore"));
                                case 10:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[0, 7]])
                    }
                    )))
                }
            }]),
            n
        }(n(42267).W)
          , Te = n(83009)
          , Se = n.n(Te)
          , Ee = n(65346)
          , Re = n.n(Ee);
        function Ue(e, t) {
            var n, r, i, s = arguments.length > 2 && arguments[2] !== undefined && arguments[2], o = 0, a = function() {
                e.apply(r, i),
                o = Ce()()
            };
            return function() {
                var e = Ce()();
                if (r = this,
                i = arguments,
                n && (clearTimeout(n),
                n = null),
                s && 0 === o)
                    return n = p()((function() {
                        a()
                    }
                    ), t),
                    a();
                var c = e - o
                  , u = t - c;
                if (u > 0)
                    n = p()((function() {
                        a()
                    }
                    ), u);
                else {
                    if (s)
                        return a();
                    n = p()((function() {
                        a()
                    }
                    ), t)
                }
            }
        }
        var Ne = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                var e;
                return (0,
                r.Z)(this, n),
                (e = t.apply(this, arguments)).subscriptions = new (X()),
                e
            }
            return (0,
            i.Z)(n, [{
                key: "subscribe",
                value: function(e, t) {
                    var n, r;
                    if (!Se()(n = Re()(G.c5)).call(n, e))
                        throw new H.G({
                            ctx: this.ctx,
                            type: G.NI.InvalidParam,
                            msg: "unknown event: ".concat(e),
                            sender: this
                        });
                    this.subscriptions.has(e) || this.subscriptions.set(e, new ee(this.ctx));
                    var i, s, o, a, c, u, d = this.subscriptions.get(e), v = "number" == typeof this.ctx.option.throttle ? this.ctx.option.throttle : 100, l = null !== (r = this.ctx.option.triggerStrategy) && void 0 !== r ? r : {};
                    if (!1 === this.ctx.option.throttle)
                        return d.subscribe(t);
                    if (l[e] === undefined)
                        return d.subscribe(t);
                    switch (b.Y.ctxDebug(this.ctx, q()(i = "apply strategy: ".concat(G.zn[l[e]], " to event: ")).call(i, e)),
                    l[e]) {
                    case G.zn.Throttle:
                        return d.subscribe((s = t,
                        o = v,
                        a = v,
                        function() {
                            var e = this
                              , t = +new Date
                              , n = arguments;
                            clearTimeout(c),
                            u || (u = t),
                            t - u >= a ? (s.apply(e, n),
                            u = t) : c = p()((function() {
                                s.apply(e, n)
                            }
                            ), o)
                        }
                        ));
                    case G.zn.Debounce:
                        return d.subscribe(Ue(t, v));
                    case G.zn.ThrottleWithArgs:
                        return d.subscribe(function(e, t, n) {
                            var r = {}
                              , i = {}
                              , s = new (X())
                              , o = 0;
                            return function() {
                                var a = this
                                  , c = +new Date
                                  , u = arguments
                                  , d = u[0]
                                  , v = s.get(d);
                                s.has(d) || (v = o++,
                                s.set(d, v)),
                                clearTimeout(r[v]),
                                i[v] || (i[v] = c),
                                c - i[v] >= n ? (i[v] = c,
                                e.apply(a, u)) : r[v] = p()((function() {
                                    e.apply(a, u),
                                    delete i[v],
                                    delete r[v],
                                    s.delete(d)
                                }
                                ), t)
                            }
                        }(t, v, v));
                    case G.zn.DebounceWithArgs:
                        return d.subscribe(function(e, t) {
                            var n = new (X())
                              , r = {}
                              , i = {}
                              , s = 0;
                            return function() {
                                var o = this
                                  , a = Ce()()
                                  , c = arguments
                                  , u = c[0]
                                  , d = n.get(u);
                                n.has(u) || (d = s++,
                                n.set(u, d));
                                var v = function() {
                                    e.apply(o, c),
                                    delete i[d],
                                    delete r[d],
                                    n.delete(u)
                                };
                                i[d] === undefined && (i[d] = 0),
                                r[d] && (clearTimeout(r[d]),
                                delete r[d]);
                                var l = a - i[d]
                                  , h = t - l;
                                r[d] = h > 0 ? p()((function() {
                                    v()
                                }
                                ), h) : p()((function() {
                                    v()
                                }
                                ), t)
                            }
                        }(t, v));
                    case G.zn.Immediate:
                    default:
                        return d.subscribe(t)
                    }
                }
            }, {
                key: "unsubscribe",
                value: function(e, t) {
                    this.subscriptions.has(e) && this.subscriptions.get(e).unsubscribe(t)
                }
            }, {
                key: "unsubscribeAll",
                value: function() {
                    for (var e = 0, t = Re()(this.subscriptions); e < t.length; e++) {
                        t[e].unsubscribeAll()
                    }
                    this.subscriptions.clear()
                }
            }, {
                key: "emitEmpty",
                value: function(e, t) {
                    return this.emit(e, t, undefined)
                }
            }, {
                key: "emit",
                value: function(e, t, n) {
                    this.resolve(g.Uk.Monitor).emitEvent(e, t, n);
                    var r = this.subscriptions.get(e);
                    r && (n ? b.Y.ctxDebug(this.ctx, 'emit event "'.concat(e, '" with sender:'), t, ", eventArgs:", n) : b.Y.ctxDebug(this.ctx, 'emit event "'.concat(e, '" with sender:'), t),
                    r.next(n, t))
                }
            }]),
            n
        }(g.mA)
          , Ae = n(51789)
          , Oe = n(34488)
          , Be = n(46040)
          , De = n(63849)
          , Pe = n.n(De)
          , Ge = n(4200)
          , Ze = n.n(Ge)
          , Le = n(14217);
        function We(e, t, n, r) {
            var i = n = n || 0
              , s = r = r || e.length - n
              , o = 0;
            for (i = n,
            s = r; i < s; ) {
                var a = e[i++]
                  , c = a >> 4;
                if (c > 0) {
                    for (var u = c + 240; 255 === u; )
                        c += u = e[i++];
                    for (var d = i + c; i < d; )
                        t[o++] = e[i++];
                    if (i === s)
                        return o
                }
                var v = e[i++] | e[i++] << 8;
                if (0 === v || v > o)
                    return -(i - 2);
                for (var l = 15 & a, p = l + 240; 255 === p; )
                    l += p = e[i++];
                for (var h = o - v, f = o + l + 4; o < f; )
                    t[o++] = t[h++]
            }
            return o
        }
        n.n(Le)() || (Math.imul = function(e, t) {
            var n = 65535 & e
              , r = 65535 & t;
            return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16) | 0
        }
        );
        var Fe, qe, Ve, Ye, He, Ke = n(94586), ze = n(31557), je = n(12914), Xe = n(86970), $e = n.n(Xe), Qe = new Blob(["var fakeIdToID={};addEventListener(\"message\",function(event){try{var{data={}}=event;var{action,fakeId,time}=data;switch(action){case'setInterval':fakeIdToID[fakeId]=setInterval(function(){postMessage({fakeId});},time);break;case'clearInterval':if(fakeIdToID.hasOwnProperty(fakeId)){clearInterval(fakeIdToID[fakeId]);delete fakeIdToID[fakeId];}\nbreak;case'setTimeout':fakeIdToID[fakeId]=setTimeout(function(){postMessage({fakeId});if(fakeIdToID.hasOwnProperty(fakeId)){delete fakeIdToID[fakeId];}},time);break;case'clearTimeout':if(fakeIdToID.hasOwnProperty(fakeId)){clearTimeout(fakeIdToID[fakeId]);delete fakeIdToID[fakeId];}\nbreak;default:break;}}catch(error){postMessage({error})}})"]), Je = window.URL.createObjectURL(Qe), et = {}, tt = 0;
        function nt() {
            do {
                2147483647 === tt ? tt = 0 : tt++
            } while (tt in et);
            return tt
        }
        window.HACK_TIMER_WORKER && "setIntervalWarp"in window.HACK_TIMER_WORKER && "setTimeoutWarp"in window.HACK_TIMER_WORKER && "clearIntervalWarp"in window.HACK_TIMER_WORKER && "clearTimeoutWarp"in window.HACK_TIMER_WORKER ? (qe = window.HACK_TIMER_WORKER.setIntervalWarp,
        Ve = window.HACK_TIMER_WORKER.setTimeoutWarp,
        Ye = window.HACK_TIMER_WORKER.clearIntervalWarp,
        He = window.HACK_TIMER_WORKER.clearTimeoutWarp) : window.Worker ? (qe = function(e, t) {
            var n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
            if (!e || "function" != typeof e)
                throw new Error("cb must be a function");
            for (var r = nt(), i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++)
                s[o - 3] = arguments[o];
            return et[r] = {
                cb: e,
                param: s,
                keepAlive: !!n,
                type: "setInterval"
            },
            Fe.postMessage({
                action: "setInterval",
                fakeId: r,
                time: t
            }),
            r
        }
        ,
        Ye = function(e) {
            "number" == typeof e && e in et && (delete et[e],
            Fe.postMessage({
                action: "clearInterval",
                fakeId: e
            }))
        }
        ,
        Ve = function(e, t) {
            var n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
            if (!e || "function" != typeof e)
                throw new Error("cb must be a function");
            for (var r = nt(), i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), o = 3; o < i; o++)
                s[o - 3] = arguments[o];
            return et[r] = {
                cb: e,
                param: s,
                keepAlive: !!n,
                type: "setTimeout"
            },
            Fe.postMessage({
                action: "setTimeout",
                fakeId: r,
                time: t
            }),
            r
        }
        ,
        He = function(e) {
            "number" == typeof e && e in et && (delete et[e],
            Fe.postMessage({
                action: "clearTimeout",
                fakeId: e
            }))
        }
        ,
        (Fe = new Worker(Je)).addEventListener("message", (function(e) {
            var t = e.data.fakeId;
            if (t in et) {
                var n = et[t] || {}
                  , r = n.cb
                  , i = n.param
                  , s = n.keepAlive;
                if ("setInterval" !== n.type && delete et[t],
                !s && document.hidden)
                    return;
                if ("function" == typeof r)
                    try {
                        r.apply(window, i)
                    } catch (o) {}
            }
        }
        )),
        Fe.addEventListener("error", (function(e) {}
        ))) : (qe = setInterval,
        Ve = setTimeout,
        Ye = clearInterval,
        He = clearTimeout);
        var rt, it = {
            setIntervalWarp: qe,
            setTimeoutWarp: Ve,
            clearIntervalWarp: Ye,
            clearTimeoutWarp: He
        }, st = it.setIntervalWarp, ot = it.clearIntervalWarp, at = it.setTimeoutWarp, ct = it.clearTimeoutWarp;
        !function(e) {
            e[e.Stopped = 0] = "Stopped",
            e[e.Running = 1] = "Running"
        }(rt || (rt = {}));
        var ut, dt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e, i, s) {
                var o;
                return (0,
                r.Z)(this, n),
                (o = t.call(this, e)).state = rt.Stopped,
                o.refreshRate = 0,
                o.doneDuration = 0,
                o.refreshRate = i,
                o.doneDuration = s,
                o.onTick = new ee(o.ctx),
                o.onDone = new ee(o.ctx),
                o.onStop = new ee(o.ctx),
                (0,
                ze.Z)(o, (0,
                je.Z)(o))
            }
            return (0,
            i.Z)(n, [{
                key: "duration",
                get: function() {
                    return this.state === rt.Stopped && 0 !== this.lastStopTime ? this.lastStopTime - this.startTime : this.state === rt.Running ? Ce()() - this.startTime : 0
                }
            }, {
                key: "start",
                value: function() {
                    this.state !== rt.Running && this.restart()
                }
            }, {
                key: "restart",
                value: function() {
                    var e = this;
                    this.tickTimer && this.stop(),
                    this.state = rt.Running;
                    var t = this.ctx.option.enableHackTimer
                      , n = t ? st : $e()
                      , r = t ? at : p();
                    this.tickTimer = n((function() {
                        e.update()
                    }
                    ), this.refreshRate),
                    this.doneDuration !== undefined && (this.doneTimer = r((function() {
                        e.done()
                    }
                    ), this.doneDuration)),
                    this.startTime = Ce()(),
                    this.lastStopTime = 0,
                    this.update()
                }
            }, {
                key: "stop",
                value: function() {
                    if (this.state !== rt.Stopped) {
                        var e = this.ctx.option.enableHackTimer
                          , t = e ? ot : clearInterval
                          , n = e ? ct : clearTimeout;
                        t(this.tickTimer),
                        n(this.doneTimer),
                        this.state = rt.Stopped,
                        this.lastStopTime = Ce()(),
                        this.onStop.nextEmpty()
                    }
                }
            }, {
                key: "getTickTimer",
                value: function() {
                    return this.tickTimer
                }
            }, {
                key: "update",
                value: function() {
                    this.onTick.nextEmpty(this)
                }
            }, {
                key: "done",
                value: function() {
                    this.stop(),
                    this.onDone.nextEmpty()
                }
            }]),
            n
        }(g.mA), vt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                (0,
                r.Z)(this, n),
                (i = t.call(this, e)).wsLastReceiveTime = 0,
                i.reqMap = new (X()),
                i.manuallyClosed = !1;
                var s = i.ctx.option
                  , o = s.webSocketLevel
                  , a = s.heartbeatInterval
                  , c = s.maxHeartbeatEmptyWindow;
                return i.heartbeatInterval = null != a ? a : G.HF.heartbeatInterval,
                i.maxEmptyWindow = null != c ? c : G.HF.maxHeartbeatEmptyWindow,
                i.net = new (re.getConstructor(e, te.NetApi))(i.ctx),
                i.http = new (re.getConstructor(e, te.HttpClient))(i.ctx),
                o !== G._.Disable && (i.ws = new (re.getConstructor(e, te.WebSocketClient))(i.ctx),
                i.prepareWs()),
                i.onMessage = new ee(e),
                i
            }
            return (0,
            i.Z)(n, [{
                key: "inSignCommandList",
                value: function(e) {
                    var t;
                    return Se()(t = [x.m.IMCMD.SEND_MESSAGE, x.m.IMCMD.CREATE_CONVERSATION_V2, x.m.IMCMD.CALL_VOIP, x.m.IMCMD.ADD_CONVERSATION_PARTICIPANTS, x.m.IMCMD.REMOVE_CONVERSATION_PARTICIPANTS, x.m.IMCMD.UPDATE_CONVERSATION_PARTICIPANT, x.m.IMCMD.SET_CONVERSATION_SETTING_INFO, x.m.IMCMD.SET_CONVERSATION_CORE_INFO, x.m.IMCMD.UPSERT_CONVERSATION_CORE_EXT_INFO, x.m.IMCMD.UPSERT_CONVERSATION_SETTING_EXT_INFO, x.m.IMCMD.DISSOLVE_CONVERSATION, x.m.IMCMD.MARK_MESSAGE, x.m.IMCMD.BATCH_UNMARK_MESSAGE, x.m.IMCMD.SET_MESSAGE_PROPERTY, x.m.IMCMD.MODIFY_MESSAGE_EXT]).call(t, e)
                }
            }, {
                key: "frontierSign",
                value: function(e) {
                    var t = {
                        "X-MS-STUB": _()(e)
                    };
                    if ("undefined" != typeof window && "undefined" != typeof window.byted_acrawler && "function" == typeof window.byted_acrawler.frontierSign) {
                        var n = window.byted_acrawler.frontierSign(t);
                        return null != n ? n : {}
                    }
                    return {}
                }
            }, {
                key: "sendByBeacon",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.method = "beacon",
                                    b.Y.ctxDebug(this.ctx, "Beacon Request SeqId -> ".concat(e.seqId), e.request),
                                    this.http.sendBeacon(e.url, e.request),
                                    t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "sendByHttp",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.method = "http",
                                    b.Y.ctxDebug(this.ctx, "Http Request SeqId -> ".concat(e.seqId), e.request),
                                    t.prev = 2,
                                    this.reqMap.set(e.seqId, e),
                                    t.next = 6,
                                    this.http.sendRequest(e.url, e.request);
                                case 6:
                                    return n = t.sent,
                                    e.response = n,
                                    0 !== n.status_code ? b.Y.ctxError(this.ctx, "Http Response SeqId -> ".concat(e.seqId), e.response) : b.Y.ctxDebug(this.ctx, "Http Response SeqId -> ".concat(e.seqId), e.response),
                                    t.abrupt("return", e);
                                case 12:
                                    throw t.prev = 12,
                                    t.t0 = t.catch(2),
                                    new H.G({
                                        ctx: this.ctx,
                                        msg: "network error",
                                        type: G.NI.NetworkError,
                                        innerError: t.t0,
                                        allowRetry: !0,
                                        sender: this,
                                        ignoreEvent: !0
                                    });
                                case 15:
                                    return t.prev = 15,
                                    this.reqMap.delete(e.seqId),
                                    t.finish(15);
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 12, 15, 18]])
                    }
                    )))
                }
            }, {
                key: "sendByWs",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i, s, o;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    e.method = "ws",
                                    r = T(e.request),
                                    i = this.inSignCommandList(e.cmd) ? this.frontierSign(r) : {},
                                    s = f()(f()({}, i), this.ctx.option.headers),
                                    o = x.m.Frame.create({
                                        service: this.ctx.option.service,
                                        method: this.ctx.option.method,
                                        headers: fe()(n = Pe()(s)).call(n, (function(e) {
                                            var t = (0,
                                            Be.Z)(e, 2);
                                            return {
                                                key: t[0],
                                                value: t[1]
                                            }
                                        }
                                        )),
                                        seqid: m.fromNumber(e.seqId),
                                        logid: m.fromNumber(Ce()()),
                                        payload_type: "pb",
                                        payload: r
                                    }),
                                    e.frame = o,
                                    t.prev = 6,
                                    this.reqMap.set(e.seqId, e),
                                    b.Y.ctxDebug(this.ctx, "WS Request SeqId -> ".concat(e.seqId), e.request),
                                    this.ws.send(E(o)),
                                    t.next = 16;
                                    break;
                                case 12:
                                    throw t.prev = 12,
                                    t.t0 = t.catch(6),
                                    this.reqMap.delete(e.seqId),
                                    new H.G({
                                        ctx: this.ctx,
                                        msg: "network error",
                                        type: G.NI.NetworkError,
                                        innerError: t.t0,
                                        allowRetry: !0,
                                        sender: this
                                    });
                                case 16:
                                    return t.abrupt("return", new (P())((function(t, n) {
                                        e.wsPromise = {
                                            resolve: t,
                                            reject: n
                                        }
                                    }
                                    )));
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[6, 12]])
                    }
                    )))
                }
            }, {
                key: "receiveRaw",
                value: function(e) {
                    if (this.resetWsHeartbeat(),
                    "hi" !== e.toString())
                        try {
                            var t, n = function(e, t) {
                                var n = new Uint8Array(t);
                                try {
                                    return C.decode(n)
                                } catch (i) {
                                    var r = w(n);
                                    throw b.Y.ctxWarn(e, "decode frame error: ", i),
                                    b.Y.ctxDebug(e, "hex dump: ", r),
                                    r
                                }
                            }(this.ctx, e);
                            if (n.service !== this.ctx.option.service && !this.ctx.option.acceptIncorrectFrame)
                                return b.Y.ctxDebug(this.ctx, q()(t = "WS Response dropped, local serviceId=".concat(this.ctx.option.service, ", message=")).call(t, n.service)),
                                void this.resolve(g.Uk.EventBus).emit(G.c5.WebSocketReceiveUnexpectedFrame, this, n);
                            var r = n.payload;
                            if (r === undefined || null === r)
                                return void b.Y.ctxWarn(this.ctx, "payload undefined or null");
                            if ("__lz4" === n.payload_encoding) {
                                var i = new Uint8Array(10 * r.length)
                                  , s = 0;
                                if (((s = We(r, i)) < 0 || s > i.length || s < r.length) && (b.Y.ctxDebug(this.ctx, "WS response with lz4 compress, but first time decompressed failed, try second time"),
                                (s = We(r, i = new Uint8Array(1024e3))) < 0 || s > i.length || s < r.length))
                                    return void b.Y.ctxWarn(this.ctx, "WS response with lz4 compress, try second time fail.");
                                r = Ze()(i).call(i, 0, s)
                            }
                            try {
                                var o, a = S(this.ctx, r), c = x.m.Response.create(a);
                                if (!this.resolve(g.Uk.InboxType).isValidInbox(c.inbox_type) && c.sequence_id.eq(0))
                                    return void b.Y.ctxWarn(this.ctx, q()(o = "WS Push dropped, local inboxType=".concat(this.ctx.option.inboxType, ", message=")).call(o, c.inbox_type), "resp:", c);
                                var u = c.sequence_id.toNumber()
                                  , d = this.reqMap.get(u);
                                d ? (0 !== c.status_code ? b.Y.ctxError(this.ctx, "WS Response SeqId -> ".concat(c.sequence_id), c) : b.Y.ctxDebug(this.ctx, "WS Response SeqId -> ".concat(c.sequence_id), c),
                                d.response = c,
                                d.wsPromise.resolve(d),
                                this.reqMap.delete(u)) : c.sequence_id.eq(0) ? (b.Y.ctxDebug(this.ctx, "WS Push", c),
                                (d = new Ke.F(this.ctx,c.cmd)).frame = n,
                                d.response = c,
                                d.seqId = c.sequence_id.toNumber(),
                                this.receive(d)) : b.Y.ctxWarn(this.ctx, "WS Response dropped, no handler", c)
                            } catch (v) {
                                b.Y.ctxWarn(this.ctx, "WS Response dropped, IM Response deserialize fail, hex dump:", v, "frame:", n)
                            }
                        } catch (l) {
                            b.Y.ctxWarn(this.ctx, "WS Response dropped, Frame deserialize fail, hex dump: ", l)
                        }
                }
            }, {
                key: "send",
                value: function(e, t) {
                    var n, r, i, s, o, a, d, v, l, h;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function f() {
                        var m, y, k, _, I, M, C = this;
                        return c().wrap((function(f) {
                            for (; ; )
                                switch (f.prev = f.next) {
                                case 0:
                                    if (!t.useBeacon) {
                                        f.next = 5;
                                        break
                                    }
                                    return f.next = 3,
                                    this.sendByBeacon(e);
                                case 3:
                                    return e.response = x.m.Response.create({}),
                                    f.abrupt("return", e);
                                case 5:
                                    m = null !== (n = t.maxWsRetryTimes) && void 0 !== n ? n : 3,
                                    0 === (y = 0 === m ? null !== (r = t.maxHttpRetryTimes) && void 0 !== r ? r : 3 : (null !== (i = t.maxHttpRetryTimes) && void 0 !== i ? i : null === (s = this.ws) || void 0 === s ? void 0 : s.isOpen()) ? 1 : 3) && (y = 1),
                                    K.u.performanceNow() - this.wsLastReceiveTime - 1.5 * this.heartbeatInterval > this.maxEmptyWindow && (null === (o = this.ws) || void 0 === o ? void 0 : o.isOpen()) && (m = 0,
                                    y = null !== (a = t.maxHttpRetryTimes) && void 0 !== a ? a : 3,
                                    b.Y.ctxWarn(this.ctx, "ws idle too long, fallback to http")),
                                    k = 0,
                                    _ = 0,
                                    I = function() {
                                        var t = !1
                                          , n = new (P())((function(n, r) {
                                            p()((function() {
                                                t || (C.reqMap.delete(e.seqId),
                                                r(new H.G({
                                                    ctx: C.ctx,
                                                    msg: "request timeout",
                                                    type: G.NI.NetworkError,
                                                    allowRetry: !0,
                                                    ignoreEvent: !0,
                                                    sender: C
                                                })))
                                            }
                                            ), C.ctx.option.timeout)
                                        }
                                        ));
                                        return P().race([n, (0,
                                        u.mG)(C, void 0, void 0, c().mark((function n() {
                                            var r, i, s, o, a, u, d, v, l, p, h;
                                            return c().wrap((function(n) {
                                                for (; ; )
                                                    switch (n.prev = n.next) {
                                                    case 0:
                                                        if (i = !1,
                                                        k < m && (null === (r = this.ws) || void 0 === r ? void 0 : r.isOpen()) && (i = !0),
                                                        0 !== m && k >= m && 0 === _ && this.ws !== undefined && (b.Y.ctxWarn(this.ctx, "fallback to http"),
                                                        i = !1),
                                                        !(_ >= y)) {
                                                            n.next = 5;
                                                            break
                                                        }
                                                        throw new H.G({
                                                            ctx: this.ctx,
                                                            msg: "http retry times limit exceeded",
                                                            type: G.NI.NetworkError,
                                                            sender: this,
                                                            args: {
                                                                cmd: e.cmd,
                                                                seqId: e.seqId
                                                            }
                                                        });
                                                    case 5:
                                                        return i ? (k++,
                                                        s = this.sendByWs(e)) : (_++,
                                                        s = this.sendByHttp(e)),
                                                        n.prev = 6,
                                                        n.next = 9,
                                                        s;
                                                    case 9:
                                                        if (l = n.sent,
                                                        t = !0,
                                                        this.reqMap.delete(e.seqId),
                                                        p = l.request,
                                                        h = l.response,
                                                        this.resolve(g.Uk.Monitor).emitNetwork(p, h),
                                                        h.status_code !== G.NI.ResourceExhausted) {
                                                            n.next = 16;
                                                            break
                                                        }
                                                        throw new H.G({
                                                            ctx: this.ctx,
                                                            msg: "demotion enabled",
                                                            type: G.NI.ResourceExhausted,
                                                            allowRetry: !1,
                                                            sender: this,
                                                            logid: null == h ? void 0 : h.log_id
                                                        });
                                                    case 16:
                                                        if (!(h.status_code === G.NI.InternalError && (Se()(o = h.error_desc).call(o, "i/o timeout") || Se()(a = h.error_desc).call(a, "rpc timeout") || Se()(u = h.error_desc).call(u, "RPC timeout")) || Se()(d = h.error_desc).call(d, "connection timeout") || Se()(v = h.error_desc).call(v, "request timeout"))) {
                                                            n.next = 18;
                                                            break
                                                        }
                                                        throw new H.G({
                                                            ctx: this.ctx,
                                                            msg: "request timeout",
                                                            type: G.NI.NetworkError,
                                                            allowRetry: !0,
                                                            ignoreEvent: !0,
                                                            sender: this,
                                                            logid: null == h ? void 0 : h.log_id
                                                        });
                                                    case 18:
                                                        return l.retryTimes = k + _,
                                                        n.abrupt("return", l);
                                                    case 22:
                                                        if (n.prev = 22,
                                                        n.t0 = n.catch(6),
                                                        !n.t0.type) {
                                                            n.next = 28;
                                                            break
                                                        }
                                                        throw n.t0;
                                                    case 28:
                                                        throw new H.G({
                                                            ctx: this.ctx,
                                                            msg: "request error",
                                                            type: G.NI.NetworkError,
                                                            allowRetry: n.t0.allowRetry,
                                                            innerError: n.t0,
                                                            sender: this
                                                        });
                                                    case 29:
                                                        return n.prev = 29,
                                                        this.reqMap.delete(e.seqId),
                                                        n.finish(29);
                                                    case 32:
                                                    case "end":
                                                        return n.stop()
                                                    }
                                            }
                                            ), n, this, [[6, 22, 29, 32]])
                                        }
                                        )))])
                                    }
                                    ;
                                case 13:
                                    if (e.retryTimes++,
                                    !(e.retryTimes >= 10)) {
                                        f.next = 18;
                                        break
                                    }
                                    return e.error = new H.G({
                                        ctx: this.ctx,
                                        msg: "too much retry",
                                        type: G.NI.NetworkError,
                                        sender: this
                                    }),
                                    f.abrupt("break", 42);
                                case 18:
                                    return f.prev = 18,
                                    e.startTime = Ce()(),
                                    f.next = 22,
                                    I();
                                case 22:
                                    if (M = f.sent,
                                    e.endTime = Ce()(),
                                    "function" == typeof (null === (v = null === (d = null == M ? void 0 : M.response) || void 0 === d ? void 0 : d.server_execution_end_time) || void 0 === v ? void 0 : v.toNumber) && "function" == typeof (null === (h = null === (l = null == M ? void 0 : M.response) || void 0 === l ? void 0 : l.request_arrived_time) || void 0 === h ? void 0 : h.toNumber) && K.u.putTimeDelta(e.startTime, e.endTime, M.response.server_execution_end_time.toNumber(), M.response.request_arrived_time.toNumber()),
                                    M === undefined) {
                                        f.next = 27;
                                        break
                                    }
                                    return f.abrupt("break", 42);
                                case 27:
                                    f.next = 40;
                                    break;
                                case 29:
                                    if (f.prev = 29,
                                    f.t0 = f.catch(18),
                                    e.error = f.t0,
                                    !0 !== (null === f.t0 || void 0 === f.t0 ? void 0 : f.t0.allowRetry)) {
                                        f.next = 39;
                                        break
                                    }
                                    return f.delegateYield(c().mark((function t() {
                                        var n, r;
                                        return c().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    return (r = 500 + 100 * e.retryTimes + 100 * Math.random()) > 2e3 && (r = 2e3),
                                                    b.Y.ctxDebug(C.ctx, q()(n = "req ".concat(e.seqId, " failed, retrying @ attempt ")).call(n, e.retryTimes, ", inner err:"), f.t0),
                                                    t.next = 5,
                                                    new (P())((function(e) {
                                                        return p()(e, r)
                                                    }
                                                    ));
                                                case 5:
                                                    return t.abrupt("return", "continue");
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ))(), "t1", 34);
                                case 34:
                                    if ("continue" !== f.t1) {
                                        f.next = 37;
                                        break
                                    }
                                    return f.abrupt("continue", 13);
                                case 37:
                                    f.next = 40;
                                    break;
                                case 39:
                                    return f.abrupt("break", 42);
                                case 40:
                                    f.next = 13;
                                    break;
                                case 42:
                                    if (M !== undefined) {
                                        f.next = 45;
                                        break
                                    }
                                    throw e.error === undefined && (e.error = new H.G({
                                        ctx: this.ctx,
                                        msg: "unknown error",
                                        type: G.NI.NetworkError,
                                        sender: this
                                    })),
                                    e.error;
                                case 45:
                                    return f.abrupt("return", M);
                                case 46:
                                case "end":
                                    return f.stop()
                                }
                        }
                        ), f, this, [[18, 29]])
                    }
                    )))
                }
            }, {
                key: "sendByHttpTo",
                value: function(e, t, n) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if ("undefined" == typeof fetch) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.next = 3,
                                    fetch(e);
                                case 3:
                                    return r.abrupt("return", r.sent.arrayBuffer());
                                case 4:
                                    return r.abrupt("return", this.http.send(e, t, n));
                                case 5:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "receive",
                value: function(e) {
                    this.resolve(g.Uk.Monitor).emitNetwork(null, e.response),
                    this.onMessage.next(e.response, this)
                }
            }, {
                key: "onWsClose",
                value: function() {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    b.Y.ctxDebug(this.ctx, "ws closed"),
                                    this.resolve(g.Uk.EventBus).emit(G.c5.WebSocketDisconnected, this, this.ws);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "prepareWs",
                value: function() {
                    var e = this;
                    this.ctx.option.webSocketLevel !== G._.Disable && (this.ws.onMessage.subscribe((function(t) {
                        return e.receiveRaw(t)
                    }
                    )),
                    this.ws.onClose.subscribe((function() {
                        return e.onWsClose()
                    }
                    )),
                    this.ws.onError.subscribe((function() {
                        return e.onWsClose()
                    }
                    )),
                    this.ws.onOpen.subscribe((function() {
                        b.Y.ctxDebug(e.ctx, "ws connected"),
                        e.resolve(g.Uk.EventBus).emit(G.c5.WebSocketConnected, e, e.ws),
                        e.manuallyClosed = !1
                    }
                    )),
                    this.wsCheckTicker = new dt(this.ctx,this.heartbeatInterval),
                    this.wsCheckTicker.onTick.subscribe((function() {
                        return (0,
                        u.mG)(e, void 0, void 0, c().mark((function e() {
                            var t, n, r, i, s, o;
                            return c().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return o = K.u.performanceNow() - this.wsLastReceiveTime + this.heartbeatInterval / 1.5,
                                        e.next = 3,
                                        this.net.getConnectionStatus();
                                    case 3:
                                        if (e.t0 = e.sent,
                                        e.t1 = R.Disconnected,
                                        e.t0 !== e.t1) {
                                            e.next = 8;
                                            break
                                        }
                                        return b.Y.ctxDebug(this.ctx, "network disconnected, skip ws check"),
                                        e.abrupt("return");
                                    case 8:
                                        if (null === (t = this.ws) || void 0 === t ? void 0 : t.isOpen()) {
                                            e.next = 21;
                                            break
                                        }
                                        return b.Y.ctxDebug(this.ctx, "ws ticker try connect if closed"),
                                        this.resolve(g.Uk.Monitor).emitMetrics(K.U.WebSocketConnectAfterClose, {
                                            count: 1
                                        }, {
                                            url: null !== (r = null === (n = this.ws) || void 0 === n ? void 0 : n.url) && void 0 !== r ? r : "unknown"
                                        }),
                                        e.prev = 11,
                                        e.next = 14,
                                        this.connectWs(!0);
                                    case 14:
                                        e.next = 19;
                                        break;
                                    case 16:
                                        e.prev = 16,
                                        e.t2 = e.catch(11),
                                        b.Y.ctxWarn(this.ctx, "ws ticker try connect err:", e.t2);
                                    case 19:
                                        e.next = 35;
                                        break;
                                    case 21:
                                        if (!(o > this.maxEmptyWindow)) {
                                            e.next = 34;
                                            break
                                        }
                                        return b.Y.ctxDebug(this.ctx, "not receive any packet in window, ws close connection"),
                                        this.resolve(g.Uk.Monitor).emitMetrics(K.U.WebSocketConnectNoHeartbeat, {
                                            count: 1
                                        }, {
                                            url: null !== (s = null === (i = this.ws) || void 0 === i ? void 0 : i.url) && void 0 !== s ? s : "unknown"
                                        }),
                                        e.prev = 24,
                                        e.next = 27,
                                        this.connectWs(!0);
                                    case 27:
                                        e.next = 32;
                                        break;
                                    case 29:
                                        e.prev = 29,
                                        e.t3 = e.catch(24),
                                        b.Y.ctxWarn(this.ctx, "ws ticker window connect err:", e.t3);
                                    case 32:
                                        e.next = 35;
                                        break;
                                    case 34:
                                        o > this.heartbeatInterval && this.sendWsHeartbeat();
                                    case 35:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[11, 16], [24, 29]])
                        }
                        )))
                    }
                    )))
                }
            }, {
                key: "closeWs",
                value: function(e) {
                    var t, n;
                    this.ctx.option.webSocketLevel !== G._.Disable && (null === (t = this.ws) || void 0 === t || t.close(),
                    this.manuallyClosed = !e,
                    this.manuallyClosed && (null === (n = this.wsCheckTicker) || void 0 === n || n.stop()))
                }
            }, {
                key: "connectWs",
                value: function(e) {
                    var t, n, r;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function i() {
                        var s;
                        return c().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (this.ctx.option.webSocketLevel !== G._.Disable) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt("return");
                                case 2:
                                    if (!this.manuallyClosed || !e) {
                                        i.next = 5;
                                        break
                                    }
                                    return b.Y.ctxDebug(this.ctx, "ignore connect since manually closed"),
                                    i.abrupt("return");
                                case 5:
                                    return this.closeWs(!0),
                                    s = K.u.performanceNow(),
                                    i.prev = 7,
                                    i.next = 10,
                                    this.ws.performOpen();
                                case 10:
                                    this.resolve(g.Uk.Monitor).emitMetrics(K.U.WsConnect, {
                                        ws_cost: K.u.performanceNow() - s
                                    }, {
                                        error_code: "0",
                                        url: null !== (t = this.ws.option.frontierUrl) && void 0 !== t ? t : "unknown"
                                    }),
                                    this.resetWsHeartbeat(),
                                    null === (n = this.wsCheckTicker) || void 0 === n || n.start(),
                                    i.next = 19;
                                    break;
                                case 15:
                                    throw i.prev = 15,
                                    i.t0 = i.catch(7),
                                    this.resolve(g.Uk.Monitor).emitMetrics(K.U.WsConnect, {
                                        ws_cost: K.u.performanceNow() - s
                                    }, {
                                        error_code: "1",
                                        url: null !== (r = this.ws.option.frontierUrl) && void 0 !== r ? r : "unknown"
                                    }),
                                    i.t0;
                                case 19:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this, [[7, 15]])
                    }
                    )))
                }
            }, {
                key: "sendWsHeartbeat",
                value: function() {
                    var e;
                    (null === (e = this.ws) || void 0 === e ? void 0 : e.isOpen()) ? this.ws.send("hi") : b.Y.ctxWarn(this.ctx, "ws not connect but try to send heartbeat")
                }
            }, {
                key: "resetWsHeartbeat",
                value: function() {
                    this.wsLastReceiveTime = K.u.performanceNow()
                }
            }]),
            n
        }(g.mA), lt = n(33746), pt = n.n(lt), ht = {
            appId: 0,
            token: "",
            deviceId: "",
            userId: "",
            biz: "",
            apiUrl: "",
            frontierUrl: "",
            fpId: 89,
            appKey: "e0f82475ab9dbf5717d18b4a9c0d7fd0",
            service: 2,
            method: 1,
            authType: x.m.AuthType.TOKEN_AUTH,
            inboxType: [0],
            headers: {},
            httpHeaders: {},
            devicePlatform: "web",
            timeout: 2e3,
            pullInterval: 3e4,
            throttle: 100,
            triggerStrategy: (ut = {},
            (0,
            Z.Z)(ut, G.c5.ConversationChange, G.zn.Debounce),
            (0,
            Z.Z)(ut, G.c5.MessageUpsert, G.zn.Debounce),
            (0,
            Z.Z)(ut, G.c5.ConversationUpsert, G.zn.ThrottleWithArgs),
            ut),
            maxMessageCount: 1e3
        };
        function ft(e, t, n) {
            for (var r = 0, i = W()(n); r < i.length; r++) {
                var s, o = i[r];
                if ("string" != typeof n[o])
                    b.Y.ctxError(e, q()(s = "".concat(t, "[")).call(s, o, "] is not a string!"))
            }
        }
        var gt = n(25695)
          , mt = n(77364)
          , xt = n.n(mt)
          , yt = n(21271)
          , kt = n.n(yt)
          , _t = n(9838)
          , bt = n.n(_t)
          , It = n(2936)
          , Mt = n(74417)
          , Ct = n(22972)
          , wt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).refreshBuffer = [],
                i.refreshDebounce = Ue((function() {
                    i.triggerRefresh()
                }
                ), 1e3, !0),
                i.conversations = new (X()),
                i
            }
            return (0,
            i.Z)(n, [{
                key: "applyLocal",
                value: function(e) {
                    var t = this;
                    ve()(e).call(e, (function(e) {
                        t.conversations.set(e.id, e)
                    }
                    ))
                }
            }, {
                key: "clearAll",
                value: function() {
                    this.conversations.clear()
                }
            }, {
                key: "getWithCreateLocal",
                value: function(e, t, n, r) {
                    var i = this.getRaw(e);
                    if (!i) {
                        var s = new Ae.r(this.ctx);
                        s.coreInfo = new It._(s),
                        s.settingInfo = new Mt.H(s),
                        s.id = e,
                        s.shortId = t,
                        s.type = n,
                        s.isOffline = !0,
                        i = s,
                        r !== undefined ? s.coreInfo.inboxType = r : r === undefined && n === x.m.ConversationType.ONE_TO_ONE_CHAT && 4 === e.split(":").length && (s.coreInfo.inboxType = xt()(e.split(":")[0], 10)),
                        b.Y.ctxDebug(this.ctx, "create local conv:", s),
                        this.upsert(i)
                    }
                    return i
                }
            }, {
                key: "upsert",
                value: function(e) {
                    var t;
                    if (e === undefined)
                        throw new H.G({
                            ctx: this.ctx,
                            msg: "upsert undefined conv",
                            type: G.NI.InvalidParam,
                            sender: this
                        });
                    if (!this.resolve(g.Uk.InboxType).isValidInbox(e.inboxType))
                        throw new H.G({
                            ctx: this.ctx,
                            msg: "invalid inbox: ".concat(e.inboxType),
                            type: G.NI.InvalidParam,
                            sender: this
                        });
                    var n, r = this.conversations.get(e.id);
                    if (r && e.isOffline && (b.Y.ctxDebug(this.ctx, q()(n = "local exist, try to use offline upsert, ignore, short id: ".concat(r.shortId, " with offline:")).call(n, e.shortId)),
                    !r.isOffline))
                        return b.Y.ctxDebug(this.ctx, "local is online, ignore update"),
                        r;
                    if (r) {
                        b.Y.ctxDebug(this.ctx, "merge conversation local=".concat(r.version.toString(), ":"), r, "new=".concat(e.version.toString(), ":"), e);
                        var i = r.coreInfo || new It._(r)
                          , s = r.settingInfo || new Mt.H(r);
                        (r = f()(r, e)).coreInfo = i.mergeCore(e.coreInfo),
                        r.settingInfo = s.mergeSetting(e.settingInfo),
                        r.forceRefreshUnreadCount()
                    }
                    return this.conversations.set(e.id, null != r ? r : e),
                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t || t.upsertConversation(null != r ? r : e),
                    this.ctx.initResult === G.rb.Succeeded && (this.resolve(g.Uk.EventBus).emit(G.c5.ConversationUpsert, this, null != r ? r : e),
                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this)),
                    e
                }
            }, {
                key: "refreshLocalAsync",
                value: function() {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        var t, n;
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== (n = _e()(t = this.getConversationArray()).call(t, (function(e) {
                                        return e.isOffline
                                    }
                                    ))).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.abrupt("return", this.refreshAsync(n));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "refreshLocal",
                value: function() {
                    var e, t = _e()(e = this.getConversationArray()).call(e, (function(e) {
                        return e.isOffline
                    }
                    ));
                    0 !== t.length && this.refresh(t)
                }
            }, {
                key: "triggerRefresh",
                value: function() {
                    if (0 !== this.refreshBuffer.length) {
                        b.Y.ctxDebug(this.ctx, "clear refresh buffer:", this.refreshBuffer);
                        var e = (0,
                        ie.Z)(this.refreshBuffer);
                        this.refreshBuffer = [],
                        this.refreshAsync(e)
                    }
                }
            }, {
                key: "refresh",
                value: function(e) {
                    var t, n, r = (0,
                    Ct.sS)(e), i = [];
                    if (0 === this.refreshBuffer.length)
                        i.push.apply(i, (0,
                        ie.Z)(r));
                    else {
                        var s, o = {};
                        ve()(s = this.refreshBuffer).call(s, (function(e) {
                            return o[e.id] = !0
                        }
                        )),
                        ve()(r).call(r, (function(e) {
                            o[e.id] || i.push(e)
                        }
                        ))
                    }
                    i.length > 0 && (n = this.refreshBuffer).push.apply(n, i);
                    var a = null !== (t = this.ctx.option.conversationRefreshCount) && void 0 !== t ? t : G.HF.conversationRefreshCount;
                    this.refreshBuffer.length >= a ? this.triggerRefresh() : this.refreshDebounce()
                }
            }, {
                key: "refreshAsync",
                value: function(e) {
                    var t, n, r;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function i() {
                        var s, o, a, u, d, v, l, p, h, f, x = this;
                        return c().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (0 !== (s = null !== (t = (0,
                                    Ct.sS)(e)) && void 0 !== t ? t : this.refreshBuffer).length) {
                                        i.next = 3;
                                        break
                                    }
                                    return i.abrupt("return", []);
                                case 3:
                                    b.Y.ctxDebug(this.ctx, "refresh conv: ", s),
                                    o = [],
                                    a = (0,
                                    Ct.vM)(s, (function(e) {
                                        return e.inboxType.toString()
                                    }
                                    )),
                                    u = 0,
                                    d = W()(a);
                                case 7:
                                    if (!(u < d.length)) {
                                        i.next = 35;
                                        break
                                    }
                                    v = d[u],
                                    l = (0,
                                    Ct.F3)(a[v], 5),
                                    p = (0,
                                    z.Z)(l),
                                    i.prev = 11,
                                    p.s();
                                case 13:
                                    if ((h = p.n()).done) {
                                        i.next = 24;
                                        break
                                    }
                                    return f = h.value,
                                    i.prev = 15,
                                    i.delegateYield(c().mark((function e() {
                                        var t, r, i;
                                        return c().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    x.resolve(g.Uk.CoreApi).GetConversationInfoListV2({
                                                        conversations: fe()(f).call(f, (function(e) {
                                                            return {
                                                                conversationId: e.id,
                                                                conversationShortId: m.fromString(e.shortId),
                                                                conversationType: e.type
                                                            }
                                                        }
                                                        )),
                                                        inboxType: xt()(v, 10)
                                                    });
                                                case 2:
                                                    t = e.sent,
                                                    r = null === (n = null == t ? void 0 : t.body) || void 0 === n ? void 0 : n.get_conversation_info_list_v2_body,
                                                    i = r.conversation_info_list,
                                                    ve()(f).call(f, (function(e) {
                                                        0 === _e()(i).call(i, (function(t) {
                                                            return t.conversation_id === e.id
                                                        }
                                                        )).length && (b.Y.ctxDebug(x.ctx, "delete local conv, may not exist online: ", e),
                                                        x.delete(e.id))
                                                    }
                                                    )),
                                                    ve()(i).call(i, (function(e) {
                                                        var n = x.upsert(Ae.r.fromServerConversation(x.ctx, e, null == t ? void 0 : t.log_id));
                                                        o.push(n)
                                                    }
                                                    ));
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))(), "t0", 17);
                                case 17:
                                    i.next = 22;
                                    break;
                                case 19:
                                    i.prev = 19,
                                    i.t1 = i.catch(15),
                                    i.t1 && (null === i.t1 || void 0 === i.t1 ? void 0 : i.t1.type) === G.NI.InternalError && (null === (r = null === i.t1 || void 0 === i.t1 ? void 0 : i.t1.message) || void 0 === r ? void 0 : Se()(r).call(r, "request.MGet empty")) ? ve()(f).call(f, (function(e) {
                                        b.Y.ctxDebug(x.ctx, "delete local conv, may not exist online: ", e),
                                        x.delete(e.id)
                                    }
                                    )) : b.Y.ctxError(this.ctx, "unknown refresh error:", i.t1);
                                case 22:
                                    i.next = 13;
                                    break;
                                case 24:
                                    i.next = 29;
                                    break;
                                case 26:
                                    i.prev = 26,
                                    i.t2 = i.catch(11),
                                    p.e(i.t2);
                                case 29:
                                    return i.prev = 29,
                                    p.f(),
                                    i.finish(29);
                                case 32:
                                    u++,
                                    i.next = 7;
                                    break;
                                case 35:
                                    return i.abrupt("return", o);
                                case 36:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this, [[11, 26, 29, 32], [15, 19]])
                    }
                    )))
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this.getRaw(e);
                    if (!t)
                        throw new H.G({
                            ctx: this.ctx,
                            msg: "conversation ".concat(e, " not exist in local"),
                            type: G.NI.ConversationNotExist,
                            sender: this,
                            args: {
                                conversationId: e
                            }
                        });
                    return t
                }
            }, {
                key: "getWithShortIdRaw",
                value: function(e) {
                    var t, n, r = (0,
                    z.Z)(Q()(t = this.conversations).call(t));
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value;
                            if (i.shortId === e)
                                return i
                        }
                    } catch (s) {
                        r.e(s)
                    } finally {
                        r.f()
                    }
                    return null
                }
            }, {
                key: "getWithOnline",
                value: function(e, t, n) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        var i;
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if ((i = this.getRaw(e)) && !i.isOffline) {
                                        r.next = 7;
                                        break
                                    }
                                    if (!t || !n) {
                                        r.next = 6;
                                        break
                                    }
                                    i = this.getWithCreateLocal(e, t, n),
                                    r.next = 7;
                                    break;
                                case 6:
                                    throw new H.G({
                                        ctx: this.ctx,
                                        type: G.NI.InvalidParam,
                                        msg: "no shortId and type provided",
                                        sender: this
                                    });
                                case 7:
                                    return r.next = 9,
                                    this.refreshAsync(i);
                                case 9:
                                    return r.abrupt("return", this.get(e));
                                case 10:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getRaw",
                value: function(e) {
                    return this.conversations.get(e)
                }
            }, {
                key: "getConversationArray",
                value: function() {
                    var e, t, r, i, s, o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : n.conversationFilter;
                    return fe()(e = kt()(t = fe()(r = _e()(i = bt()(Q()(s = this.conversations).call(s))).call(i, o)).call(r, (function(e) {
                        return {
                            conv: e,
                            rankScore: e.rankScore
                        }
                    }
                    ))).call(t, n.conversationComparator)).call(e, (function(e) {
                        return e.conv
                    }
                    ))
                }
            }, {
                key: "withConversation",
                value: function(e) {
                    var t = this;
                    return function(n) {
                        return n(t.get(e))
                    }
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t, n = arguments.length > 1 && arguments[1] !== undefined && arguments[1], r = this.getRaw(e);
                    r && (n || this.getContext().resolve(g.Uk.MessageManager).clearConversation(e),
                    this.conversations.delete(e),
                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t || t.deleteConversation(r),
                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                    this.resolve(g.Uk.EventBus).emit(G.c5.ConversationDelete, this, r))
                }
            }, {
                key: "markRead",
                value: function(e, t) {
                    var n = this.get(e);
                    return n.settingInfo.readIndex.gt(t) ? n : (n.settingInfo.readIndex = t,
                    this.upsert(n))
                }
            }, {
                key: "leave",
                value: function(e) {
                    var t, n = this.get(e);
                    n && (n.isMember = !1,
                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t || t.upsertConversation(n),
                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                    this.resolve(g.Uk.EventBus).emit(G.c5.ConversationLeave, this, n))
                }
            }, {
                key: "refreshTicket",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = this.get(e),
                                    t.next = 3,
                                    this.resolve(g.Uk.CoreApi).GetTicket({
                                        conversationType: n.type,
                                        shortId: m.fromString(n.shortId),
                                        toId: m.fromString(n.type === x.m.ConversationType.ONE_TO_ONE_CHAT ? n.toParticipantUserId : n.shortId),
                                        inboxType: n.inboxType
                                    });
                                case 3:
                                    r = t.sent,
                                    n.ticket = null == r ? void 0 : r.ticket,
                                    this.upsert(n),
                                    b.Y.ctxDebug(this.ctx, "refresh ticket for conv:", n);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "dispose",
                value: function() {
                    this.clearAll()
                }
            }], [{
                key: "conversationFilter",
                value: function(e) {
                    return 0 === e.mode && e.isMember
                }
            }]),
            n
        }(g.mA);
        wt.conversationComparator = function(e, t) {
            return t.rankScore - e.rankScore
        }
        ;
        var Tt, St = n(48317), Et = n.n(St);
        !function(e) {
            e[e.MarkConversationRead = 1] = "MarkConversationRead",
            e[e.DeleteMessage = 2] = "DeleteMessage",
            e[e.DeleteConversation = 3] = "DeleteConversation",
            e[e.SettingInfoUpdate = 4] = "SettingInfoUpdate",
            e[e.CoreInfoUpdate = 6] = "CoreInfoUpdate",
            e[e.ParticipantUpdate = 7] = "ParticipantUpdate",
            e[e.FirstMessage = 8] = "FirstMessage"
        }(Tt || (Tt = {}));
        var Rt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, null, [{
                key: "fromMessage",
                value: function(e) {
                    var t = e;
                    return t.contentObj = y.parse(e.content),
                    t.commandSubType = t.contentObj.command_type,
                    t
                }
            }]),
            n
        }(Oe.v)
          , Ut = n(44587)
          , Nt = n(15074)
          , At = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "process",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.data.isCommandMsg) {
                                        t.next = 4;
                                        break
                                    }
                                    return e.needContinue = !1,
                                    t.next = 4,
                                    this.parseCommand(e.data);
                                case 4:
                                    return t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "parseCommand",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    n = Rt.fromMessage(e),
                                    t.t0 = n.contentObj.command_type,
                                    t.next = t.t0 === Tt.DeleteConversation ? 4 : t.t0 === Tt.DeleteMessage ? 6 : t.t0 === Tt.MarkConversationRead ? 8 : t.t0 === Tt.SettingInfoUpdate ? 10 : t.t0 === Tt.CoreInfoUpdate ? 13 : t.t0 === Tt.ParticipantUpdate ? 16 : 19;
                                    break;
                                case 4:
                                    return this.handleDeleteConversationCMD(n),
                                    t.abrupt("break", 19);
                                case 6:
                                    return this.handleDeleteMessageCMD(n),
                                    t.abrupt("break", 19);
                                case 8:
                                    return this.handleMarkConversationRead(n),
                                    t.abrupt("break", 19);
                                case 10:
                                    return t.next = 12,
                                    this.handleUpdateSettingInfo(n);
                                case 12:
                                    return t.abrupt("break", 19);
                                case 13:
                                    return t.next = 15,
                                    this.handleUpdateCoreInfo(n);
                                case 15:
                                    return t.abrupt("break", 19);
                                case 16:
                                    return t.next = 18,
                                    this.handleUpdateParticipant(n);
                                case 18:
                                    return t.abrupt("break", 19);
                                case 19:
                                    this.resolve(g.Uk.EventBus).emit(G.c5.ReceiveCommandMessage, this, n);
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handleDeleteConversationCMD",
                value: function(e) {
                    var t = e.contentObj.conversation_id;
                    this.resolve(g.Uk.ConversationManager).delete(t)
                }
            }, {
                key: "handleDeleteMessageCMD",
                value: function(e) {
                    var t = e.contentObj
                      , n = t.conversation_id
                      , r = t.message_id;
                    this.resolve(g.Uk.MessageManager).delete(n, r.toString())
                }
            }, {
                key: "handleMarkConversationRead",
                value: function(e) {
                    if (this.ctx.initResult === G.rb.Succeeded) {
                        var t = e.contentObj
                          , n = t.conversation_id
                          , r = t.read_index;
                        this.resolve(g.Uk.ConversationManager).markRead(n, m.fromValue(r))
                    }
                }
            }, {
                key: "handleUpdateSettingInfo",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    this.ctx.initResult === G.rb.Succeeded && (n = e.contentObj.conversation_version,
                                    r = m.fromValue(null != n ? n : m.MAX_VALUE),
                                    (i = this.resolve(g.Uk.ConversationManager).getWithCreateLocal(e.conversationId, e.conversationShortId.toString(), e.conversationType)).settingInfo.version.lte(r) ? this.resolve(g.Uk.ConversationManager).refresh(i) : b.Y.ctxWarn(this.ctx, "ignore online update setting info cmd, local version: ", i.settingInfo.version.toString(), "online: ", r.toString()));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handleUpdateCoreInfo",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    this.ctx.initResult === G.rb.Succeeded && (n = e.contentObj.group_version,
                                    r = m.fromValue(n),
                                    (i = this.resolve(g.Uk.ConversationManager).getWithCreateLocal(e.conversationId, e.conversationShortId.toString(), e.conversationType)).coreInfo.version.lte(r) ? this.resolve(g.Uk.ConversationManager).refresh(i) : b.Y.ctxWarn(this.ctx, "ignore online update core info cmd, local version: ", i.coreInfo.version.toString(), "online: ", n.toString()));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handleUpdateParticipant",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i, s, o, a, u, d, v, l = this;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    this.ctx.initResult === G.rb.Succeeded && (n = e.contentObj,
                                    r = n.added_participant,
                                    i = n.modified_participant,
                                    s = n.removed_participant,
                                    (null == r ? void 0 : r.length) > 0 && (o = fe()(r).call(r, String),
                                    a = [],
                                    ve()(o).call(o, (function(t) {
                                        var n = Nt.Q.fakeParticipant(l.ctx, t, {
                                            type: e.conversationType,
                                            id: e.conversationId
                                        });
                                        a.push(n)
                                    }
                                    )),
                                    this.resolve(g.Uk.ParticipantManager).addBatch(e.conversationId, a)),
                                    (null == i ? void 0 : i.length) > 0 && (u = this.resolve(g.Uk.ConversationManager).get(e.conversationId),
                                    d = fe()(i).call(i, String),
                                    this.resolve(g.Uk.ParticipantManager).updateWithUserIdAsync(u, d)),
                                    (null == s ? void 0 : s.length) > 0 && (v = fe()(s).call(s, String),
                                    Se()(v).call(v, this.ctx.option.userId) && this.resolve(g.Uk.ConversationManager).leave(e.conversationId),
                                    this.resolve(g.Uk.ParticipantManager).delete(e.conversationId, v)));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            n
        }(Ut.f)
          , Ot = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "process",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i, s;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.data.conversationId) {
                                        t.next = 5;
                                        break
                                    }
                                    return b.Y.ctxWarn(this.ctx, "no conversation provided in message, ignore", e.data),
                                    e.needContinue = !1,
                                    t.abrupt("return", e);
                                case 5:
                                    if (r = this.resolve(g.Uk.ConversationManager).getRaw(n),
                                    e.data.type !== x.m.MessageType.MESSAGE_TYPE_CONVERSATION_DESTROY || !r) {
                                        t.next = 12;
                                        break
                                    }
                                    return this.resolve(g.Uk.ConversationManager).delete(n),
                                    this.resolve(g.Uk.EventBus).emit(G.c5.ConversationDissolve, this, r),
                                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                                    e.needContinue = !1,
                                    t.abrupt("return", e);
                                case 12:
                                    if (e.data.isNormalMsg || r !== undefined) {
                                        t.next = 16;
                                        break
                                    }
                                    return e.needContinue = !1,
                                    this.ctx.initResult === G.rb.Succeeded && b.Y.ctxDebug(this.ctx, "ignore process, conv: ".concat(e.data.conversationId, " not exist for cmd msg"), e.data),
                                    t.abrupt("return", e);
                                case 16:
                                    return i = e.data,
                                    s = this.resolve(g.Uk.ConversationManager).getWithCreateLocal(i.conversationId, i.conversationShortId, i.conversationType),
                                    e.conv = s,
                                    t.abrupt("return", e);
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            n
        }(Ut.f)
          , Bt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "process",
                value: function(e) {
                    var t;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function n() {
                        var r, i, s, o;
                        return c().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (e.data.isNormalMsg) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return", e);
                                case 2:
                                    return r = this.resolve(g.Uk.MessageManager).getRaw(null === (t = e.conv) || void 0 === t ? void 0 : t.id, e.data.clientId),
                                    i = e.data.source !== undefined && (e.data.source === G.v$.Online || e.data.source === G.v$.UserInbox),
                                    s = (null == r ? void 0 : r.flightStatus) !== undefined && i,
                                    this.resolve(g.Uk.MessageManager).upsert(e.data),
                                    o = this.resolve(g.Uk.MessageManager).getRaw(e.data.conversationId, e.data.clientId),
                                    r ? s && o.flightStatus !== G.b3.Received && (o.flightStatus = G.b3.Received,
                                    this.ctx.initResult === G.rb.Succeeded && this.resolve(g.Uk.EventBus).emit(G.c5.ReceiveSelfMessage, this, o),
                                    this.resolve(g.Uk.MessageManager).upsert(o)) : i && !e.data.isStrangerMessage && (e.data.sender !== this.ctx.option.userId ? this.ctx.initResult === G.rb.Succeeded && this.resolve(g.Uk.EventBus).emit(G.c5.ReceiveNewMessage, this, o) : this.ctx.initResult === G.rb.Succeeded && this.resolve(g.Uk.EventBus).emit(G.c5.ReceiveSelfMessage, this, o)),
                                    n.abrupt("return", e);
                                case 9:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }]),
            n
        }(Ut.f)
          , Dt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "process",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.data.type === x.m.MessageType.MESSAGE_TYPE_UPDATE_MESSAGE_EXT && (e.needContinue = !1,
                                    this.handleUpdateExt(e)),
                                    t.abrupt("return", e);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handleUpdateExt",
                value: function(e) {
                    var t, n, r, i, s = null === (t = e.data) || void 0 === t ? void 0 : t.ext[G.v9.ServerMessageId];
                    if (!s)
                        throw new H.G({
                            ctx: this.ctx,
                            type: G.NI.InvalidServerId,
                            msg: "message ".concat(e.data, " has no s:server_message_id"),
                            sender: this
                        });
                    var o = this.resolve(g.Uk.MessageManager).getByServerIdRaw(null === (n = e.conv) || void 0 === n ? void 0 : n.id, s);
                    if (o)
                        if (o.version.gt(e.data.version)) {
                            var a;
                            b.Y.ctxWarn(this.ctx, q()(a = "local msg version: ".concat(o.version.toString(), " > online msg version: ")).call(a, e.data.version.toString(), ", ignore, local msg:"), o, "online msg:", e.data)
                        } else {
                            if (o.ext = e.data.ext,
                            o.version = e.data.version,
                            this.resolve(g.Uk.MessageManager).upsert(o),
                            !o.visible) {
                                var c, u = this.resolve(g.Uk.MessageManager).getList(e.conv.id), d = (0,
                                z.Z)(u);
                                try {
                                    for (d.s(); !(c = d.n()).done; ) {
                                        var v = c.value;
                                        (null === (i = null === (r = v.referenceInfo) || void 0 === r ? void 0 : r.referenced_message_id) || void 0 === i ? void 0 : i.toString()) === o.serverId && (v.referenceInfo.referenced_message_status = x.m.MessageStatus.INVISIBLE,
                                        this.resolve(g.Uk.MessageManager).upsert(v))
                                    }
                                } catch (l) {
                                    d.e(l)
                                } finally {
                                    d.f()
                                }
                            }
                            this.resolve(g.Uk.EventBus).emit(G.c5.ReceiveNewUpdateExtMessage, this, e.data),
                            "true" === e.data.ext[G.v9.IsRecalled] && this.resolve(g.Uk.MessageManager).markRecalled(e.conv.id, o.serverId)
                        }
                }
            }]),
            n
        }(Ut.f)
          , Pt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).messages = new (X()),
                i.processors = [new Ot(i.ctx), new At(i.ctx), new Dt(i.ctx), new Bt(i.ctx)],
                i
            }
            return (0,
            i.Z)(n, [{
                key: "applyLocal",
                value: function(e) {
                    var t = this;
                    ve()(e).call(e, (function(e) {
                        t.messages.has(e.conversationId) || t.messages.set(e.conversationId, new (X())),
                        t.messages.get(e.conversationId).set(e.clientId, e)
                    }
                    ))
                }
            }, {
                key: "clearAll",
                value: function() {
                    this.messages.clear()
                }
            }, {
                key: "get",
                value: function(e, t) {
                    var n, r = this.getRaw(e, t);
                    if (!r)
                        throw new H.G({
                            ctx: this.ctx,
                            type: G.NI.MessageNotExist,
                            msg: q()(n = "message ".concat(t, " @ ")).call(n, e, " not exist in local"),
                            sender: this
                        });
                    return r
                }
            }, {
                key: "getRaw",
                value: function(e, t) {
                    return this.getConversationMap(e).get(t)
                }
            }, {
                key: "getRawMap",
                value: function() {
                    return this.messages
                }
            }, {
                key: "getByServerIdRaw",
                value: function(e, t) {
                    var n, r = this.getConversationMap(e), i = _e()(n = bt()(Q()(r).call(r))).call(n, (function(e) {
                        return e.serverId === t
                    }
                    ));
                    return 0 === i.length ? undefined : this.get(e, i[0].clientId)
                }
            }, {
                key: "getByServerId",
                value: function(e, t) {
                    var n, r, i = this.getConversationMap(e), s = _e()(n = bt()(Q()(i).call(i))).call(n, (function(e) {
                        return e.serverId === t
                    }
                    ));
                    if (0 === s.length)
                        throw new H.G({
                            ctx: this.ctx,
                            type: G.NI.MessageNotExist,
                            msg: q()(r = "message ".concat(t, " @ ")).call(r, e, " not exist in local"),
                            sender: this
                        });
                    return this.get(e, s[0].clientId)
                }
            }, {
                key: "getList",
                value: function(e) {
                    var t, r = this.getConversationMap(e);
                    return kt()(t = bt()(Q()(r).call(r))).call(t, n.messageComparator)
                }
            }, {
                key: "upsert",
                value: function(e) {
                    var t;
                    if (e.isSpecialMessage)
                        b.Y.ctxWarn(this.ctx, "unexpected special message to upsert:", e);
                    else {
                        var n = this.getConversationMap(e.conversationId);
                        if (this.ctx.option.maxMessageCount) {
                            var r = Math.max(200, Math.min(this.ctx.option.maxMessageCount, 2e3));
                            if (n.size >= r) {
                                var i, s = ~~(r / 5), o = (0,
                                z.Z)(Et()(n).call(n));
                                try {
                                    for (o.s(); !(i = o.n()).done; ) {
                                        var a = i.value;
                                        if (s <= 0)
                                            break;
                                        n.delete(a),
                                        s--
                                    }
                                } catch (v) {
                                    o.e(v)
                                } finally {
                                    o.f()
                                }
                            }
                        }
                        var c = n.get(e.clientId);
                        if (c && c.type === e.type) {
                            var u = ["referenceInfo"];
                            ve()(u).call(u, (function(t) {
                                e[t] === undefined && delete c[t]
                            }
                            )),
                            e = c.merge(e)
                        } else
                            c && c.type !== e.type && b.Y.ctxWarn(this.ctx, "try to merge different msg:", c, e);
                        if (n.set(e.clientId, e),
                        null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t || t.upsertMessage(e),
                        this.resolve(g.Uk.EventBus).emit(G.c5.MessageUpsert, this, e),
                        this.ctx.initResult === G.rb.Succeeded) {
                            this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this);
                            var d = this.getContext().resolve(g.Uk.ConversationManager).getRaw(e.conversationId);
                            this.resolve(g.Uk.EventBus).emit(G.c5.ConversationUpsert, this, d),
                            c !== undefined && (null == d || d.forceRefreshUnreadCount())
                        }
                    }
                }
            }, {
                key: "getConversationMap",
                value: function(e) {
                    var t = this.messages.get(e);
                    return t || (t = new (X()),
                    this.messages.set(e, t)),
                    t
                }
            }, {
                key: "processNewMessage",
                value: function(e, t) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function n() {
                        var r;
                        return c().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (e.ext || (e.ext = {}),
                                    e.source = t,
                                    !(e.type >= 0)) {
                                        n.next = 6;
                                        break
                                    }
                                    return n.abrupt("return", this.processMessage(e));
                                case 6:
                                    throw new H.G({
                                        ctx: this.ctx,
                                        type: G.NI.UnknownMessageType,
                                        msg: q()(r = "unknown message type: ".concat(e.type, " for msg:")).call(r, e.clientId),
                                        sender: this
                                    });
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "processNewMessagesFromPull",
                value: function(e, t, n) {
                    var r;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function i() {
                        var s, o, a, u, d, v, l = this;
                        return c().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    s = fe()(e).call(e, (function(e) {
                                        return Oe.v.fromServerMessage(l.ctx, e, n)
                                    }
                                    )),
                                    o = new (X()),
                                    a = (0,
                                    z.Z)(s),
                                    i.prev = 3,
                                    a.s();
                                case 5:
                                    if ((u = a.n()).done) {
                                        i.next = 14;
                                        break
                                    }
                                    return (d = u.value).ext || (d.ext = {}),
                                    (v = null === (r = o.get(d.conversationShortId)) || void 0 === r ? void 0 : r.indexInConversation) && !d.indexInConversation.lt(v) || o.set(d.conversationShortId, d),
                                    i.next = 12,
                                    this.processNewMessage(d, t);
                                case 12:
                                    i.next = 5;
                                    break;
                                case 14:
                                    i.next = 19;
                                    break;
                                case 16:
                                    i.prev = 16,
                                    i.t0 = i.catch(3),
                                    a.e(i.t0);
                                case 19:
                                    return i.prev = 19,
                                    a.f(),
                                    i.finish(19);
                                case 22:
                                    return i.abrupt("return", {
                                        msgs: s,
                                        conMap: o
                                    });
                                case 23:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this, [[3, 16, 19, 22]])
                    }
                    )))
                }
            }, {
                key: "delete",
                value: function(e, t) {
                    var n, r, i, s, o = this.getConversationMap(e), a = _e()(n = bt()(Q()(o).call(o))).call(n, (function(e) {
                        return e.serverId === t
                    }
                    ));
                    if (0 !== a.length) {
                        o.delete(a[0].clientId),
                        null === (r = this.resolve(g.Uk.DbProxy)) || void 0 === r || r.deleteMessage(a[0]);
                        var c, u = this.getList(e), d = (0,
                        z.Z)(u);
                        try {
                            for (d.s(); !(c = d.n()).done; ) {
                                var v = c.value;
                                (null === (s = null === (i = v.referenceInfo) || void 0 === i ? void 0 : i.referenced_message_id) || void 0 === s ? void 0 : s.toString()) === t && (v.referenceInfo.referenced_message_status = x.m.MessageStatus.DELETED,
                                this.upsert(v))
                            }
                        } catch (h) {
                            d.e(h)
                        } finally {
                            d.f()
                        }
                        var l = this.getContext().resolve(g.Uk.ConversationManager).get(e);
                        this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                        this.resolve(g.Uk.EventBus).emit(G.c5.ConversationUpsert, this, l),
                        this.resolve(g.Uk.EventBus).emit(G.c5.MessageUpsert, this, a[0]),
                        this.resolve(g.Uk.EventBus).emit(G.c5.MessageDelete, this, a[0])
                    } else {
                        var p;
                        b.Y.ctxDebug(this.ctx, q()(p = "delete not exist msg: ".concat(e, "::")).call(p, t))
                    }
                }
            }, {
                key: "markRecalled",
                value: function(e, t, n) {
                    var r, i, s = this.getByServerId(e, t);
                    s.ext || (s.ext = {}),
                    s.ext[G.v9.IsRecalled] = "true",
                    n && this.ctx.option.debug && (s.ext[G.v9.LocalLogId] = n),
                    this.upsert(s);
                    var o, a = this.getList(e), c = (0,
                    z.Z)(a);
                    try {
                        for (c.s(); !(o = c.n()).done; ) {
                            var u = o.value;
                            (null === (i = null === (r = u.referenceInfo) || void 0 === r ? void 0 : r.referenced_message_id) || void 0 === i ? void 0 : i.toString()) === t && (u.referenceInfo.referenced_message_status = x.m.MessageStatus.RECALLED,
                            this.upsert(u))
                        }
                    } catch (v) {
                        c.e(v)
                    } finally {
                        c.f()
                    }
                    var d = this.getContext().resolve(g.Uk.ConversationManager).get(e);
                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                    this.resolve(g.Uk.EventBus).emit(G.c5.ConversationUpsert, this, d),
                    this.resolve(g.Uk.EventBus).emit(G.c5.MessageUpsert, this, s),
                    this.resolve(g.Uk.EventBus).emit(G.c5.MessageRecall, this, s)
                }
            }, {
                key: "clearConversation",
                value: function(e) {
                    var t, n = this.getContext().resolve(g.Uk.ConversationManager).get(e);
                    this.messages.set(e, new (X())),
                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t || t.clearConversation(n),
                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                    this.resolve(g.Uk.EventBus).emit(G.c5.ConversationUpsert, this, n)
                }
            }, {
                key: "injectProcessor",
                value: function(e) {
                    this.processors.push(e)
                }
            }, {
                key: "processMessage",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i, s;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    n = {
                                        needContinue: !0,
                                        data: e
                                    },
                                    r = (0,
                                    z.Z)(this.processors),
                                    t.prev = 2,
                                    r.s();
                                case 4:
                                    if ((i = r.n()).done) {
                                        t.next = 13;
                                        break
                                    }
                                    return s = i.value,
                                    t.next = 8,
                                    s.process(n);
                                case 8:
                                    if ((n = t.sent).needContinue) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("break", 13);
                                case 11:
                                    t.next = 4;
                                    break;
                                case 13:
                                    t.next = 18;
                                    break;
                                case 15:
                                    t.prev = 15,
                                    t.t0 = t.catch(2),
                                    r.e(t.t0);
                                case 18:
                                    return t.prev = 18,
                                    r.f(),
                                    t.finish(18);
                                case 21:
                                    return t.abrupt("return", n.data);
                                case 22:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 15, 18, 21]])
                    }
                    )))
                }
            }, {
                key: "dispose",
                value: function() {
                    this.messages.clear(),
                    this.processors = []
                }
            }]),
            n
        }(g.mA);
        Pt.messageComparator = function(e, t) {
            return e.orderInConversation.gt(t.orderInConversation) ? 1 : -1
        }
        ;
        var Gt, Zt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).participants = new (X()),
                i
            }
            return (0,
            i.Z)(n, [{
                key: "applyLocal",
                value: function(e) {
                    var t = this;
                    ve()(e).call(e, (function(e) {
                        t.participants.has(e.conversationId) || t.participants.set(e.conversationId, new (X())),
                        t.participants.get(e.conversationId).set(e.userId.toString(), e)
                    }
                    ))
                }
            }, {
                key: "forceApplyLocal",
                value: function(e) {
                    var t, n = new (X());
                    ve()(e).call(e, (function(e) {
                        n.set(e.userId.toString(), e)
                    }
                    )),
                    this.participants.set(null === (t = e[0]) || void 0 === t ? void 0 : t.conversationId, n)
                }
            }, {
                key: "clearAll",
                value: function() {
                    this.participants.clear()
                }
            }, {
                key: "updateWithUserIdAsync",
                value: function(e, t) {
                    var n, r, i, s;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function o() {
                        var a, u, d, v = this;
                        return c().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    return a = fe()(t).call(t, (function(e) {
                                        return m.fromValue(e)
                                    }
                                    )),
                                    o.next = 3,
                                    this.resolve(g.Uk.CoreApi).GetConversationParticipantByUserId({
                                        conversationId: e.id,
                                        conversationShortId: m.fromString(e.shortId),
                                        conversationType: e.type,
                                        inboxType: e.inboxType,
                                        participants: a
                                    });
                                case 3:
                                    u = o.sent,
                                    d = null !== (s = null === (i = null === (r = null === (n = null == u ? void 0 : u.body) || void 0 === n ? void 0 : n.mget_conversation_participants_body) || void 0 === r ? void 0 : r.participants) || void 0 === i ? void 0 : fe()(i).call(i, (function(t) {
                                        return Nt.Q.fromServerParticipant(v.ctx, t, e, u.log_id)
                                    }
                                    ))) && void 0 !== s ? s : [],
                                    this.upsertBatch(e.id, d);
                                case 6:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, this)
                    }
                    )))
                }
            }, {
                key: "upsert",
                value: function(e, t) {
                    var n, r = arguments.length > 2 && arguments[2] !== undefined && arguments[2], i = this.participants.get(e.toString());
                    i || (i = new (X()));
                    var s = t;
                    return s.userId = s.userId.toString(),
                    i.has(t.userId.toString()) && (s = Nt.Q.featLocalParticipant(i.get(t.userId.toString()), s)),
                    i.set(t.userId.toString(), s),
                    this.participants.set(e, i),
                    r || this.resolve(g.Uk.EventBus).emit(G.c5.ParticipantUpsert, this, s),
                    null === (n = this.resolve(g.Uk.DbProxy)) || void 0 === n || n.upsertParticipant(s),
                    bt()(Q()(i).call(i))
                }
            }, {
                key: "upsertBatch",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
                    return ve()(t).call(t, (function(t) {
                        return n.upsert(e, t, r)
                    }
                    )),
                    this.get(e)
                }
            }, {
                key: "addBatch",
                value: function(e, t) {
                    var n = this
                      , r = this.participants.get(e);
                    return ve()(t).call(t, (function(t) {
                        if (!(null == r ? void 0 : r.has(t.userId.toString())) && (n.resolve(g.Uk.EventBus).emit(G.c5.ParticipantJoin, n, t),
                        t.userId.toString() === n.ctx.option.userId.toString())) {
                            var i = n.getContext().resolve(g.Uk.ConversationManager).get(e);
                            n.resolve(g.Uk.EventBus).emit(G.c5.ConversationJoin, n, i)
                        }
                        n.upsert(e, t)
                    }
                    )),
                    this.get(e)
                }
            }, {
                key: "delete",
                value: function(e, t) {
                    var n = this
                      , r = this.participants.get(e);
                    r && ve()(t).call(t, (function(e) {
                        var t, i = r.get(e.toString());
                        i !== undefined && (r.delete(e.toString()),
                        n.resolve(g.Uk.EventBus).emit(G.c5.ParticipantLeave, n, i),
                        null === (t = n.resolve(g.Uk.DbProxy)) || void 0 === t || t.deleteParticipant(i))
                    }
                    ))
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this.participants.get(e);
                    if (t)
                        return bt()(Q()(t).call(t));
                    throw new H.G({
                        ctx: this.ctx,
                        type: G.NI.ConversationNotExist,
                        msg: "conversation ".concat(e, " participants is not loaded"),
                        sender: this,
                        args: {
                            conversationId: e
                        }
                    })
                }
            }, {
                key: "getParticipant",
                value: function(e) {
                    var t, n, r, i, s, o, a = this, c = [], u = this.getRaw(e.id);
                    if ((null == u ? void 0 : u.length) > 0)
                        return u;
                    if (Number(null === (n = null === (t = null == e ? void 0 : e.firstPageParticipant) || void 0 === t ? void 0 : t.participants) || void 0 === n ? void 0 : n.length) > 0)
                        ve()(o = (null === (r = null == e ? void 0 : e.firstPageParticipant) || void 0 === r ? void 0 : r.participants) || []).call(o, (function(t) {
                            c.push(Nt.Q.fromServerParticipant(a.ctx, t, e, e.ext[G.v9.LocalLogId]))
                        }
                        ));
                    else if (e.type === x.m.ConversationType.ONE_TO_ONE_CHAT) {
                        b.Y.ctxDebug(this.ctx, "no first page participant found, fallback to local");
                        var d = [e.toParticipantUserId, this.ctx.option.userId];
                        ve()(d).call(d, (function(t) {
                            if (t) {
                                var n = Nt.Q.fakeParticipant(a.ctx, t, e);
                                c.push(n)
                            }
                        }
                        ))
                    }
                    return this.upsertBatch(e.id, c, !0),
                    (null === (i = e.firstPageParticipant) || void 0 === i ? void 0 : i.has_more) && this.resolve(g.Uk.CoreApi).GetConversationParticipantsList({
                        conversationId: e.id,
                        conversationShortId: m.fromString(e.shortId),
                        conversationType: e.type,
                        cursor: null !== (s = e.firstPageParticipant.cursor) && void 0 !== s ? s : m.ZERO,
                        limit: 50,
                        inboxType: e.inboxType
                    }).then((function(t) {
                        var n, r, i, s = null === (i = null === (r = null == t ? void 0 : t.body) || void 0 === r ? void 0 : r.conversation_participants_body) || void 0 === i ? void 0 : i.participants_page;
                        null == s || ve()(n = s.participants).call(n, (function(n) {
                            c.push(Nt.Q.fromServerParticipant(a.ctx, n, e, null == t ? void 0 : t.log_id))
                        }
                        )),
                        a.upsertBatch(e.id, c, !0)
                    }
                    )),
                    c
                }
            }, {
                key: "getMap",
                value: function(e) {
                    var t = this.participants.get(e);
                    if (t)
                        return t;
                    throw new H.G({
                        ctx: this.ctx,
                        type: G.NI.ConversationNotExist,
                        msg: "conversation ".concat(e, " participants is not loaded"),
                        sender: this,
                        args: {
                            conversationId: e
                        }
                    })
                }
            }, {
                key: "getMapRaw",
                value: function(e) {
                    return this.participants.get(e)
                }
            }, {
                key: "getRaw",
                value: function(e) {
                    var t = this.participants.get(e);
                    return t ? bt()(Q()(t).call(t)) : []
                }
            }, {
                key: "getByUserIdRaw",
                value: function(e, t) {
                    var n = this.participants.get(e);
                    return n ? n.get(t.toString()) : undefined
                }
            }, {
                key: "dispose",
                value: function() {
                    this.clearAll()
                }
            }]),
            n
        }(g.mA), Lt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "isValidInbox",
                value: function(e) {
                    var t;
                    return e !== undefined && (!!this.getContext().option.acceptIncorrectInboxType || Se()(t = this.getInboxTypeArray()).call(t, e))
                }
            }, {
                key: "needSpecifyInbox",
                value: function() {
                    var e = this.ctx.option.inboxType;
                    return !(e === undefined || "number" == typeof e && e >= 0) && !!(ue()(e) && e.length > 2)
                }
            }, {
                key: "getDefaultInboxWithoutCheck",
                value: function() {
                    return this.getInboxTypeArray()[0]
                }
            }, {
                key: "getDefaultInbox",
                value: function() {
                    if (this.needSpecifyInbox())
                        throw new H.G({
                            ctx: this.ctx,
                            msg: "no available inboxType is provided",
                            type: G.NI.InvalidInboxType,
                            sender: this
                        });
                    return this.getDefaultInboxWithoutCheck()
                }
            }, {
                key: "getInboxTypeArray",
                value: function() {
                    var e = this.ctx.option.inboxType;
                    return ue()(e) ? e : e !== undefined ? [e] : [0]
                }
            }]),
            n
        }(g.mA);
        !function(e) {
            e.SdkVersion = "sdk.version",
            e.DbVersion = "sdk.db.version",
            e.DbLastOpen = "sdk.db.last_open",
            e.DbEncyption = "sdk.db.encryption",
            e.UserToken = "user.token"
        }(Gt || (Gt = {}));
        g.mA;
        var Wt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                var i;
                return (0,
                r.Z)(this, n),
                (i = t.call(this, e)).isCertAuth && (i.securitySdk = new N.ZP({
                    aid: i.ctx.option.appId
                })),
                i
            }
            return (0,
            i.Z)(n, [{
                key: "isCertAuth",
                get: function() {
                    return this.ctx.option.authType === x.m.AuthType.CERT_AUTH
                }
            }, {
                key: "prepareToken",
                value: function() {
                    var e;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    null === (e = this.resolve(g.Uk.DbProxy)) || void 0 === e ? void 0 : e.loadConfig(Gt.UserToken);
                                case 2:
                                    if (!(n = t.sent) || this.isCertAuth && !1 === this.getCert()) {
                                        t.next = 7;
                                        break
                                    }
                                    this.ctx.cachedToken = n,
                                    t.next = 9;
                                    break;
                                case 7:
                                    return t.next = 9,
                                    this.refreshToken();
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "refreshToken",
                value: function() {
                    var e, t;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function n() {
                        var r, i, s, o;
                        return c().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if ("function" != typeof (r = this.ctx.option.token)) {
                                        n.next = 30;
                                        break
                                    }
                                    if (i = K.u.performanceNow(),
                                    s = null,
                                    !this.isCertAuth) {
                                        n.next = 10;
                                        break
                                    }
                                    return n.next = 7,
                                    this.handleCertAuthToken(r);
                                case 7:
                                    s = n.sent,
                                    n.next = 18;
                                    break;
                                case 10:
                                    if (!((o = r())instanceof P())) {
                                        n.next = 17;
                                        break
                                    }
                                    return n.next = 14,
                                    o;
                                case 14:
                                    s = n.sent,
                                    n.next = 18;
                                    break;
                                case 17:
                                    s = o;
                                case 18:
                                    if (null === s) {
                                        n.next = 27;
                                        break
                                    }
                                    return this.ctx.cachedToken = s,
                                    n.next = 22,
                                    null === (e = this.resolve(g.Uk.DbProxy)) || void 0 === e ? void 0 : e.saveConfig(Gt.UserToken, s);
                                case 22:
                                    return this.resolve(g.Uk.Monitor).emitDuration(K.U.BizRefreshToken, i),
                                    b.Y.ctxDebug(this.ctx, "token cached from function: ", this.ctx.cachedToken),
                                    n.abrupt("return", s);
                                case 27:
                                    throw new H.G({
                                        ctx: this.ctx,
                                        msg: "token is null",
                                        type: G.NI.TokenFuncError,
                                        sender: this
                                    });
                                case 28:
                                    n.next = 35;
                                    break;
                                case 30:
                                    return this.ctx.cachedToken = r,
                                    b.Y.ctxDebug(this.ctx, "token cached from const: ", this.ctx.cachedToken),
                                    n.next = 34,
                                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t ? void 0 : t.saveConfig(Gt.UserToken, this.ctx.cachedToken);
                                case 34:
                                    return n.abrupt("return", r);
                                case 35:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "sign",
                value: function(e) {
                    var t = this.securitySdk.cryptoSDK.sign(e)
                      , n = (0,
                    N.gg)(t);
                    try {
                        return JSON.parse(n)
                    } catch (r) {
                        throw new H.G({
                            ctx: this.ctx,
                            msg: "Failed to JSON.parse signString",
                            type: G.NI.AuthSignError,
                            sender: this
                        })
                    }
                }
            }, {
                key: "getCert",
                value: function() {
                    return this.securitySdk.cryptoSDK.getCertificateV2()
                }
            }, {
                key: "getTsSign",
                value: function() {
                    return this.securitySdk.cryptoSDK.getTsSign()
                }
            }, {
                key: "handleCertAuthToken",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i, s, o, a;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.securitySdk.cryptoSDK.getCertSignRequest();
                                case 2:
                                    return n = t.sent,
                                    t.next = 5,
                                    e(n);
                                case 5:
                                    return r = t.sent,
                                    i = r.tsSign,
                                    s = r.token,
                                    o = r.sdkCert,
                                    a = {
                                        ts_sign: i,
                                        ticket: s,
                                        client_cert: o
                                    },
                                    this.securitySdk.cryptoSDK.setSignValue(a),
                                    t.abrupt("return", s);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            n
        }(g.mA)
          , Ft = function() {
            function e(t, n) {
                var i = this;
                (0,
                r.Z)(this, e),
                this.disposed = !1,
                this.plugins = [],
                this.innerCursor = [],
                this.ticker = undefined,
                this.isProcessing = !1;
                var s, o = new g.jO;
                if (this.ctx = o,
                o.register(g.Uk.Monitor, K.u),
                o.register(g.Uk.CoreInstance, this),
                t.headers || (t.headers = {}),
                t.httpHeaders || (t.httpHeaders = {}),
                t.extended || (t.extended = {}),
                t.boe ? (s = t,
                "string" == typeof (t = f()(f()(f()({
                    debug: !0,
                    boe: !0
                }, ht), s), {
                    triggerStrategy: f()(f()({}, ht.triggerStrategy), s.triggerStrategy)
                })).boe && (t.headers[G.HF.envKey] = t.boe,
                t.headers[G.HF.boeHeaderKey] = "1",
                t.httpHeaders[G.HF.envKey] = t.boe,
                t.httpHeaders[G.HF.boeHeaderKey] = "1"),
                "boolean" == typeof t.boe && (t.headers[G.HF.boeHeaderKey] = "1",
                t.httpHeaders[G.HF.boeHeaderKey] = "1")) : (t = function(e) {
                    return f()(f()(f()({}, ht), e), {
                        triggerStrategy: f()(f()({}, ht.triggerStrategy), e.triggerStrategy)
                    })
                }(t),
                "string" == typeof t.ppe ? (t.headers[G.HF.envKey] = t.ppe,
                t.headers[G.HF.ppeHeaderKey] = "1",
                t.httpHeaders[G.HF.envKey] = t.ppe,
                t.httpHeaders[G.HF.ppeHeaderKey] = "1") : t.canary && (t.headers[G.HF.envKey] = "canary",
                t.httpHeaders[G.HF.envKey] = "canary")),
                o.option = t,
                function(e, t) {
                    var n;
                    "number" != typeof t.appId && b.Y.ctxError(e, "opt.appId is not a number! did you pass a string?"),
                    "string" != typeof t.deviceId && b.Y.ctxError(e, "opt.deviceId is not a string! did you pass a number?"),
                    "string" != typeof t.userId && b.Y.ctxError(e, "opt.userId is not a string! did you pass a number?"),
                    "string" == typeof t.apiUrl && 0 !== t.apiUrl.length || b.Y.ctxError(e, "opt.apiUrl invalid"),
                    "string" == typeof t.frontierUrl && 0 !== t.frontierUrl.length || b.Y.ctxError(e, "opt.frontierUrl invalid"),
                    "object" === (0,
                    se.Z)(t.headers) && ft(e, "opt.headers", t.headers),
                    "object" === (0,
                    se.Z)(t.httpHeaders) && ft(e, "opt.httpHeaders", t.httpHeaders),
                    "object" === (0,
                    se.Z)(t.monitorTagKv) && ft(e, "opt.monitorTagKv", t.monitorTagKv),
                    (ue()(t.inboxType) && (0 === t.inboxType.length || pt()(n = t.inboxType).call(n, (function(e) {
                        return e < 0
                    }
                    ))) || "number" == typeof t.inboxType && t.inboxType < 0) && b.Y.ctxError(e, "opt.inboxType invalid"),
                    "number" == typeof t.pullInterval && t.pullInterval < 5e3 && b.Y.ctxDebug(e, "opt.pullInterval too short")
                }(this.ctx, t),
                t.adapter ? (b.Y.ctxDebug(this.ctx, "install adapter:", t.adapter),
                re.setDynamicAdapter(t.adapter)) : this.initAdapter(),
                o.register(g.Uk.ConversationManager, wt),
                o.register(g.Uk.MessageManager, Pt),
                o.register(g.Uk.ParticipantManager, Zt),
                o.register(g.Uk.EventBus, Ne),
                o.register(g.Uk.NetworkManager, vt),
                o.register(g.Uk.CoreApi, we),
                o.register(g.Uk.InboxType, Lt),
                o.register(g.Uk.AuthManager, Wt),
                t.debug) {
                    var a = "undefined" != typeof window ? window : t.injectContext
                      , c = "__imsdk_context_".concat(this.ctx.id.split("-")[0]);
                    if ("object" === (0,
                    se.Z)(t.injectContext) && (a = t.injectContext,
                    t.injectContext = !0),
                    "string" == typeof t.injectContext && (c = t.injectContext,
                    t.injectContext = !0),
                    "undefined" == typeof t.injectContext && (t.injectContext = !0),
                    "boolean" == typeof t.injectContext && t.injectContext)
                        try {
                            ae()(a, c, {
                                enumerable: !1,
                                configurable: !0,
                                get: function() {
                                    return o
                                }
                            })
                        } catch (u) {
                            b.Y.ctxDebug(o, "inject ctx:", o, "with name: ".concat(c, " to"), a, "failed: ", u)
                        }
                }
                ue()(n) && (ve()(n).call(n, (function(e) {
                    var t = new e(o);
                    t.install(),
                    i.plugins.push(t)
                }
                )),
                this.ctx.plugin = this.plugins),
                b.Y.ctxDebug(this.ctx, "loaded plugin:", this.plugins),
                t.boe ? b.Y.ctxDebug(this.ctx, "using boe env: ".concat(!0 === t.boe ? "default" : t.boe)) : t.ppe && b.Y.ctxDebug(this.ctx, "using ppe env: ".concat(t.ppe)),
                this.network.onMessage.subscribe((function(e) {
                    return i.receivePacket(e)
                }
                )),
                pe() && (pe()(this),
                pe()(o),
                pe()(e.prototype))
            }
            return (0,
            i.Z)(e, [{
                key: "getContext",
                value: function() {
                    return this.ctx
                }
            }, {
                key: "resolve",
                value: function(e) {
                    return this.ctx.resolve(e)
                }
            }, {
                key: "initResult",
                get: function() {
                    return this.ctx.initResult
                },
                set: function(e) {
                    this.ctx.initResult = e
                }
            }, {
                key: "event",
                get: function() {
                    return this.resolve(g.Uk.EventBus)
                }
            }, {
                key: "api",
                get: function() {
                    return this.resolve(g.Uk.CoreApi)
                }
            }, {
                key: "network",
                get: function() {
                    return this.resolve(g.Uk.NetworkManager)
                }
            }, {
                key: "auth",
                get: function() {
                    return this.resolve(g.Uk.AuthManager)
                }
            }, {
                key: "inboxType",
                get: function() {
                    return this.resolve(g.Uk.InboxType)
                }
            }, {
                key: "id",
                get: function() {
                    return this.ctx.id
                }
            }, {
                key: "option",
                get: function() {
                    return this.ctx.option
                }
            }, {
                key: "getUserCursor",
                value: function(e) {
                    var t;
                    return null !== (t = this.innerCursor[null != e ? e : this.inboxType.getDefaultInbox()]) && void 0 !== t ? t : m.ZERO
                }
            }, {
                key: "setUserCursor",
                value: function(e, t) {
                    var n;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        var i, s, o, a;
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (i = null != t ? t : this.inboxType.getDefaultInbox(),
                                    (s = this.innerCursor[i]) && !s.lt(e)) {
                                        r.next = 9;
                                        break
                                    }
                                    return b.Y.ctxDebug(this.ctx, q()(o = q()(a = "update cursor for inbox:".concat(i, " from ")).call(a, null == s ? void 0 : s.toString(), " to ")).call(o, e.toString())),
                                    this.innerCursor[i] = e,
                                    r.next = 7,
                                    null === (n = this.resolve(g.Uk.DbProxy)) || void 0 === n ? void 0 : n.saveUserCursor(i, e);
                                case 7:
                                    r.next = 10;
                                    break;
                                case 9:
                                    return r.abrupt("return");
                                case 10:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "init",
                value: function(e) {
                    var t, n, r, i, s, o, a, d;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function u() {
                        var v, l, p, h, f, m, x, y, k, _ = this;
                        return c().wrap((function(c) {
                            for (; ; )
                                switch (c.prev = c.next) {
                                case 0:
                                    return v = K.u.performanceNow(),
                                    this.initResult = G.rb.Start,
                                    c.next = 4,
                                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t ? void 0 : t.init(this.ctx.option.userId);
                                case 4:
                                    if (c.t1 = n = c.sent,
                                    c.t0 = null !== c.t1,
                                    !c.t0) {
                                        c.next = 8;
                                        break
                                    }
                                    c.t0 = void 0 !== n;
                                case 8:
                                    if (!c.t0) {
                                        c.next = 12;
                                        break
                                    }
                                    c.t2 = n,
                                    c.next = 13;
                                    break;
                                case 12:
                                    c.t2 = !1;
                                case 13:
                                    return l = c.t2,
                                    c.prev = 14,
                                    c.next = 17,
                                    this.auth.prepareToken();
                                case 17:
                                    c.next = 25;
                                    break;
                                case 19:
                                    return c.prev = 19,
                                    c.t3 = c.catch(14),
                                    this.initResult = G.rb.Error,
                                    b.Y.ctxError(this.ctx, "prepare token error:", c.t3),
                                    this.resolve(g.Uk.Monitor).emitDuration(K.U.BizSdkInit + K.U.ErrorSuffix, v, {
                                        use_db: null !== (r = l.toString()) && void 0 !== r ? r : "unknown",
                                        reason: "token"
                                    }),
                                    c.abrupt("return", this.initResult);
                                case 25:
                                    p = (0,
                                    z.Z)(this.inboxType.getInboxTypeArray()),
                                    c.prev = 26,
                                    p.s();
                                case 28:
                                    if ((h = p.n()).done) {
                                        c.next = 40;
                                        break
                                    }
                                    return f = h.value,
                                    c.next = 32,
                                    this.prepareHistoryForInbox({
                                        inboxType: f,
                                        convLimit: null == e ? void 0 : e.convLimit,
                                        msgLimit: null == e ? void 0 : e.msgLimit,
                                        mode: null == e ? void 0 : e.mode,
                                        convTotal: null == e ? void 0 : e.convTotal
                                    });
                                case 32:
                                    if (c.sent) {
                                        c.next = 38;
                                        break
                                    }
                                    return this.initResult = G.rb.Error,
                                    b.Y.ctxError(this.ctx, "init history error for inbox", f),
                                    this.resolve(g.Uk.Monitor).emitDuration(K.U.BizSdkInit + K.U.ErrorSuffix, v, {
                                        use_db: null !== (i = l.toString()) && void 0 !== i ? i : "unknown",
                                        reason: "history"
                                    }),
                                    c.abrupt("return", this.initResult);
                                case 38:
                                    c.next = 28;
                                    break;
                                case 40:
                                    c.next = 45;
                                    break;
                                case 42:
                                    c.prev = 42,
                                    c.t4 = c.catch(26),
                                    p.e(c.t4);
                                case 45:
                                    return c.prev = 45,
                                    p.f(),
                                    c.finish(45);
                                case 48:
                                    return c.next = 50,
                                    this.resolve(g.Uk.ConversationManager).refreshLocalAsync();
                                case 50:
                                    this.resolve(g.Uk.EventBus).emitEmpty(G.c5.ConversationChange, this),
                                    c.prev = 51,
                                    m = (0,
                                    z.Z)(this.plugins),
                                    c.prev = 53,
                                    m.s();
                                case 55:
                                    if ((x = m.n()).done) {
                                        c.next = 61;
                                        break
                                    }
                                    return y = x.value,
                                    c.next = 59,
                                    y.init();
                                case 59:
                                    c.next = 55;
                                    break;
                                case 61:
                                    c.next = 66;
                                    break;
                                case 63:
                                    c.prev = 63,
                                    c.t5 = c.catch(53),
                                    m.e(c.t5);
                                case 66:
                                    return c.prev = 66,
                                    m.f(),
                                    c.finish(66);
                                case 69:
                                    c.next = 77;
                                    break;
                                case 71:
                                    return c.prev = 71,
                                    c.t6 = c.catch(51),
                                    this.initResult = G.rb.Error,
                                    b.Y.ctxError(this.ctx, "init plugin error:", c.t6),
                                    this.resolve(g.Uk.Monitor).emitDuration(K.U.BizSdkInit + K.U.ErrorSuffix, v, {
                                        use_db: null !== (s = l.toString()) && void 0 !== s ? s : "unknown",
                                        reason: "plugin"
                                    }),
                                    c.abrupt("return", this.initResult);
                                case 77:
                                    if (this.ctx.option.webSocketLevel === G._.Disable) {
                                        c.next = 87;
                                        break
                                    }
                                    return c.prev = 78,
                                    this.resolve(g.Uk.Monitor).emitCounter(K.U.WebSocketConnectFirst, 1, {
                                        url: null !== (a = null === (o = this.network.ws) || void 0 === o ? void 0 : o.url) && void 0 !== a ? a : "unknown"
                                    }),
                                    c.next = 82,
                                    this.network.connectWs(!0);
                                case 82:
                                    c.next = 87;
                                    break;
                                case 84:
                                    c.prev = 84,
                                    c.t7 = c.catch(78),
                                    b.Y.ctxWarn(this.ctx, "skip websocket, init open fail:", c.t7);
                                case 87:
                                    return k = !1 === this.ctx.option.pullInterval || this.ctx.option.pullInterval === undefined ? 3e4 : this.ctx.option.pullInterval,
                                    b.Y.ctxDebug(this.ctx, "use ticker interval:", k),
                                    this.ticker = new dt(this.ctx,k),
                                    this.ticker.onTick.subscribe((function() {
                                        _.tickerUpdate()
                                    }
                                    )),
                                    this.ticker.restart(),
                                    this.initResult = G.rb.Succeeded,
                                    this.resolve(g.Uk.Monitor).emitDuration(K.U.BizSdkInit + K.U.SuccessSuffix, v, {
                                        use_db: null !== (d = l.toString()) && void 0 !== d ? d : "unknown"
                                    }),
                                    this.resolve(g.Uk.EventBus).emit(G.c5.InitFinish, this, this.initResult),
                                    c.abrupt("return", this.initResult);
                                case 96:
                                case "end":
                                    return c.stop()
                                }
                        }
                        ), u, this, [[14, 19], [26, 42, 45, 48], [51, 71], [53, 63, 66, 69], [78, 84]])
                    }
                    )))
                }
            }, {
                key: "getMessagesByUserInit",
                value: function() {
                    var e, t, n, r, i, s, o, a, d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function u() {
                        var v, l, p, h, f, x, y, k, _, I, M, C, w, T, S, E;
                        return c().wrap((function(c) {
                            for (; ; )
                                switch (c.prev = c.next) {
                                case 0:
                                    if (v = null !== (e = d.inboxType) && void 0 !== e ? e : this.inboxType.getDefaultInbox(),
                                    l = null !== (t = d.cursor) && void 0 !== t ? t : m.ZERO,
                                    p = d.page,
                                    this.inboxType.isValidInbox(v)) {
                                        c.next = 5;
                                        break
                                    }
                                    throw new H.G({
                                        ctx: this.ctx,
                                        msg: "invalid inbox",
                                        type: G.NI.InvalidInboxType,
                                        sender: this
                                    });
                                case 5:
                                    if (k = m.ZERO,
                                    _ = m.ZERO,
                                    d.mode !== G.k5.AwemeMode) {
                                        c.next = 21;
                                        break
                                    }
                                    return c.next = 10,
                                    this.api.GetMessagesByInit({
                                        inboxType: v,
                                        convLimit: d.convLimit,
                                        msgLimit: d.msgLimit,
                                        page: p,
                                        version: d.version
                                    });
                                case 10:
                                    M = c.sent,
                                    C = null === (n = M.body) || void 0 === n ? void 0 : n.message_by_init,
                                    h = null === (r = C.messages) || void 0 === r ? void 0 : fe()(r).call(r, (function(e) {
                                        return e.conversations
                                    }
                                    )),
                                    f = [],
                                    null === (i = C.messages) || void 0 === i || ve()(i).call(i, (function(e) {
                                        var t;
                                        return e.messages && (null == f ? void 0 : (t = f).push.apply(t, (0,
                                        ie.Z)(e.messages)))
                                    }
                                    )),
                                    x = null == C ? void 0 : C.user_cursor,
                                    y = C.has_more,
                                    _ = C.next_init_version,
                                    I = M.log_id,
                                    c.next = 31;
                                    break;
                                case 21:
                                    return c.next = 23,
                                    this.api.GetMessagesByUserInitV2({
                                        cursor: m.fromValue(l),
                                        inboxType: v,
                                        initSubType: d.initSubType,
                                        convLimit: d.convLimit,
                                        msgLimit: d.msgLimit
                                    });
                                case 23:
                                    w = c.sent,
                                    T = null === (s = w.body) || void 0 === s ? void 0 : s.messages_per_user_init_v2_body,
                                    h = T.conversations,
                                    f = T.messages,
                                    x = null == T ? void 0 : T.per_user_cursor,
                                    y = T.has_more,
                                    k = T.next_cursor,
                                    I = w.log_id;
                                case 31:
                                    return this.processInitConversation(h, I),
                                    c.next = 34,
                                    this.processInitMessage(f, I);
                                case 34:
                                    if (!(this.getUserCursor(v).neq(m.ZERO) && (null == x ? void 0 : x.neq(m.ZERO)) && (null === (o = this.getUserCursor(v)) || void 0 === o ? void 0 : o.neq(x)))) {
                                        c.next = 38;
                                        break
                                    }
                                    return b.Y.ctxWarn(this.ctx, q()(S = q()(E = "cursor not match: before:".concat(null === (a = this.getUserCursor(v)) || void 0 === a ? void 0 : a.toString(), ", after:")).call(E, null == x ? void 0 : x.toString(), ", pull user, logid:")).call(S, I)),
                                    c.next = 38,
                                    this.getMessagesByUser({
                                        inboxType: v
                                    });
                                case 38:
                                    if (!x) {
                                        c.next = 41;
                                        break
                                    }
                                    return c.next = 41,
                                    this.setUserCursor(x, v);
                                case 41:
                                    return this.resolve(g.Uk.EventBus).emitEmpty(G.c5.InitLoadPage, this),
                                    c.abrupt("return", {
                                        hasMore: y,
                                        cursor: k,
                                        page: (null != p ? p : 0) + 1,
                                        version: _
                                    });
                                case 43:
                                case "end":
                                    return c.stop()
                                }
                        }
                        ), u, this)
                    }
                    )))
                }
            }, {
                key: "processInitMessage",
                value: function(e, t) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function n() {
                        return c().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (!e) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.next = 3,
                                    this.resolve(g.Uk.MessageManager).processNewMessagesFromPull(e, G.v$.Init, t);
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "processInitConversation",
                value: function(e, t) {
                    var n, r = this;
                    e && ve()(n = fe()(e).call(e, (function(e) {
                        return Ae.r.fromServerConversation(r.ctx, e, t)
                    }
                    ))).call(n, (function(e) {
                        return r.resolve(g.Uk.ConversationManager).upsert(e)
                    }
                    ))
                }
            }, {
                key: "getMessagesByUser",
                value: function() {
                    var e, t, n, r, i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function s() {
                        var o, a, u, d = this;
                        return c().wrap((function(s) {
                            for (; ; )
                                switch (s.prev = s.next) {
                                case 0:
                                    if (i.cursor instanceof Date && (i.cursor = "".concat(i.cursor.getTime(), "000")),
                                    i.inboxType === undefined && (i.inboxType = this.inboxType.getDefaultInbox()),
                                    this.inboxType.isValidInbox(i.inboxType)) {
                                        s.next = 4;
                                        break
                                    }
                                    throw new H.G({
                                        ctx: this.ctx,
                                        msg: "invalid inbox",
                                        type: G.NI.InvalidInboxType,
                                        sender: this
                                    });
                                case 4:
                                    if (!0 !== this.ctx.option.disableInitPull || 0 !== this.getConversationList().length || !this.getUserCursor(i.inboxType).eq(m.ZERO) || i.cursor !== undefined) {
                                        s.next = 7;
                                        break
                                    }
                                    return b.Y.ctxWarn(this.ctx, "try to pull history from 0, preventing"),
                                    s.abrupt("return");
                                case 7:
                                    o = !0,
                                    a = i.cursor !== undefined ? m.fromValue(i.cursor) : this.getUserCursor(i.inboxType),
                                    u = c().mark((function s() {
                                        var u, v, l, p, h;
                                        return c().wrap((function(s) {
                                            for (; ; )
                                                switch (s.prev = s.next) {
                                                case 0:
                                                    return s.next = 2,
                                                    d.api.GetMessagesByUser({
                                                        cursor: a,
                                                        limit: null !== (e = i.limit) && void 0 !== e ? e : 50,
                                                        inboxType: i.inboxType
                                                    });
                                                case 2:
                                                    return u = s.sent,
                                                    v = null === (t = u.body) || void 0 === t ? void 0 : t.messages_per_user_body,
                                                    o = v.has_more,
                                                    a = v.next_cursor,
                                                    l = new (X()),
                                                    null === (n = v.hasmore_message_conv_list) || void 0 === n || ve()(n).call(n, (function(e) {
                                                        var t = e.toString()
                                                          , n = d.resolve(g.Uk.ConversationManager).getWithShortIdRaw(t);
                                                        l.set(t, null == n ? void 0 : n.lastMessageIndex)
                                                    }
                                                    )),
                                                    s.next = 10,
                                                    d.resolve(g.Uk.MessageManager).processNewMessagesFromPull(v.messages, G.v$.UserInbox, u.log_id);
                                                case 10:
                                                    p = s.sent,
                                                    h = p.conMap,
                                                    null === (r = v.hasmore_message_conv_list) || void 0 === r || ve()(r).call(r, (function(e) {
                                                        var t = e.toString()
                                                          , n = h.get(t);
                                                        if (n) {
                                                            var r = d.resolve(g.Uk.ConversationManager).getRaw(n.conversationId);
                                                            d.patchMessage({
                                                                cursor: n,
                                                                conversation: r,
                                                                limitindex: l.get(t)
                                                            })
                                                        } else {
                                                            var i;
                                                            b.Y.ctxWarn(d.ctx, q()(i = "not found message of conversation in hasmore_message_conv_list, conversationid:".concat(t, ", logid:")).call(i, u.log_id))
                                                        }
                                                    }
                                                    )),
                                                    d.initResult === G.rb.Start && d.resolve(g.Uk.EventBus).emitEmpty(G.c5.InitLoadPage, d);
                                                case 14:
                                                case "end":
                                                    return s.stop()
                                                }
                                        }
                                        ), s)
                                    }
                                    ));
                                case 10:
                                    if (!o) {
                                        s.next = 14;
                                        break
                                    }
                                    return s.delegateYield(u(), "t0", 12);
                                case 12:
                                    s.next = 10;
                                    break;
                                case 14:
                                    return s.next = 16,
                                    this.setUserCursor(a, i.inboxType);
                                case 16:
                                    this.resolve(g.Uk.ConversationManager).refreshLocal();
                                case 17:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, this)
                    }
                    )))
                }
            }, {
                key: "getMessagesByConversation",
                value: function(e) {
                    var t, n, r, i;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function s() {
                        var o, a, u, d, v, l, p;
                        return c().wrap((function(s) {
                            for (; ; )
                                switch (s.prev = s.next) {
                                case 0:
                                    return o = e.cursor,
                                    a = e.direction,
                                    o instanceof Oe.v && (o = o.indexInConversation),
                                    o === undefined && (o = e.conversation.firstMessageIndex,
                                    e.conversation.firstMessageIndex.gt(null !== (t = e.conversation.__internal_pullCursor) && void 0 !== t ? t : m.ZERO) && (o = e.conversation.__internal_pullCursor,
                                    b.Y.ctxDebug(this.ctx, q()(u = "using internal cursor: ".concat(o.toString(), " < ")).call(u, e.conversation.firstMessageIndex.toString(), " for conversation:"), e.conversation))),
                                    s.next = 6,
                                    this.api.GetMessagesByConversation({
                                        conversationId: e.conversation.id,
                                        conversationShortId: m.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        anchorIndex: m.fromValue(o),
                                        direction: a || x.m.MessageDirection.OLDER,
                                        limit: null !== (n = e.limit) && void 0 !== n ? n : 20,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 6:
                                    return d = s.sent,
                                    this.resolve(g.Uk.Monitor).emitMetrics(K.U.GetMessagesByConversation, {
                                        count: 1
                                    }, {
                                        log_id: d.log_id,
                                        from: "user",
                                        conversation_id: e.conversation.shortId,
                                        cursor: m.fromValue(o).toString()
                                    }),
                                    v = null === (r = d.body) || void 0 === r ? void 0 : r.messages_in_conversation_body,
                                    e.conversation.__internal_pullCursor = null !== (i = v.next_cursor) && void 0 !== i ? i : e.conversation.__internal_pullCursor,
                                    s.next = 12,
                                    this.resolve(g.Uk.MessageManager).processNewMessagesFromPull(v.messages, G.v$.LoadMore, d.log_id);
                                case 12:
                                    return l = s.sent,
                                    p = l.msgs,
                                    s.abrupt("return", {
                                        messages: p,
                                        hasMore: null == v ? void 0 : v.has_more,
                                        cursor: null == v ? void 0 : v.next_cursor
                                    });
                                case 15:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, this)
                    }
                    )))
                }
            }, {
                key: "markConversationRead",
                value: function(e) {
                    var t, n;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        var i, s, o, a, u;
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if ((i = e.readIndex) === undefined ? i = e.conversation.lastMessageIndex : i instanceof Oe.v && (i = i.indexInConversation),
                                    !m.fromValue(i).lte(e.conversation.readIndex)) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 4:
                                    return this.resolve(g.Uk.ConversationManager).markRead(e.conversation.id, m.fromValue(i)),
                                    this.ctx.option.unreadCountReport && (u = me()(a = this.getConversationList({
                                        filter: function(t) {
                                            return t.inboxType === e.conversation.inboxType && t.isMember && 0 === t.mode
                                        }
                                    })).call(a, (function(e, t) {
                                        return e + t.unreadCount
                                    }
                                    ), 0),
                                    o = null !== (t = e.totalUnreadCount) && void 0 !== t ? t : u,
                                    s = null !== (n = e.convUnreadCount) && void 0 !== n ? n : e.conversation.unreadCount),
                                    r.next = 8,
                                    this.api.MarkConversationReadV3({
                                        conversationId: e.conversation.id,
                                        conversationShortId: m.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        readIndex: m.fromValue(i),
                                        inboxType: e.conversation.inboxType,
                                        unreadCount: s !== undefined ? m.fromValue(s) : undefined,
                                        totalUnreadCount: o !== undefined ? m.fromValue(o) : undefined
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "recallMessage",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.message.serverId) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new H.G({
                                        ctx: this.ctx,
                                        type: G.NI.MessageNotReady,
                                        msg: "message ".concat(e.message, " is not ready"),
                                        sender: this
                                    });
                                case 2:
                                    return n = this.resolve(g.Uk.ConversationManager).get(e.message.conversationId),
                                    t.next = 5,
                                    this.api.RecallMessage({
                                        conversationId: e.message.conversationId,
                                        conversationShortId: m.fromString(e.message.conversationShortId),
                                        conversationType: e.message.conversationType,
                                        serverId: m.fromString(e.message.serverId),
                                        inboxType: n.inboxType
                                    });
                                case 5:
                                    r = t.sent,
                                    this.resolve(g.Uk.MessageManager).markRecalled(e.message.conversationId, e.message.serverId, r.log_id);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "createConversation",
                value: function(e) {
                    var t, n, r, i, s;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function o() {
                        var a, u, d, v, l, p, h, f;
                        return c().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    if (a = K.u.performanceNow(),
                                    u = [],
                                    d = {
                                        success: !1,
                                        payload: null
                                    },
                                    e.inboxType === undefined && (e.inboxType = this.inboxType.getDefaultInbox()),
                                    this.inboxType.isValidInbox(e.inboxType)) {
                                        o.next = 6;
                                        break
                                    }
                                    throw new H.G({
                                        ctx: this.ctx,
                                        msg: "invalid inbox",
                                        type: G.NI.InvalidInboxType,
                                        sender: this
                                    });
                                case 6:
                                    if (e.type === undefined && (ue()(e.participants) ? e.participants.length <= 1 ? e.type = x.m.ConversationType.ONE_TO_ONE_CHAT : e.type = x.m.ConversationType.GROUP_CHAT : e.type = x.m.ConversationType.ONE_TO_ONE_CHAT),
                                    !((u = ue()(e.participants) ? -1 === ye()(v = e.participants).call(v, this.ctx.option.userId) ? q()(l = e.participants).call(l, this.ctx.option.userId) : e.participants : [e.participants, this.ctx.option.userId]).length > 2 && e.type === x.m.ConversationType.ONE_TO_ONE_CHAT)) {
                                        o.next = 12;
                                        break
                                    }
                                    return d.statusCode = G.NI.InvalidParam,
                                    d.statusMsg = "one to one chat can only has 2 participants",
                                    o.abrupt("return", d);
                                case 12:
                                    return e.persistent === undefined && e.idempotentId !== undefined && e.idempotentId.length > 0 && (e.persistent = !0),
                                    o.prev = 13,
                                    o.next = 16,
                                    this.api.CreateConversationV2({
                                        type: e.type,
                                        participants: fe()(u).call(u, (function(e) {
                                            return m.fromValue(e)
                                        }
                                        )),
                                        persistent: e.persistent,
                                        idempotentId: e.idempotentId,
                                        name: e.name,
                                        avatarUrl: e.avatarUrl,
                                        desc: e.desc,
                                        bizExt: e.bizExt,
                                        inboxType: e.inboxType
                                    });
                                case 16:
                                    if (p = o.sent,
                                    h = p.body.create_conversation_v2_body,
                                    d.checkCode = h.check_code,
                                    d.checkMsg = h.check_message,
                                    d.statusCode = h.status,
                                    d.statusMsg = h.extra_info,
                                    d.body = h,
                                    0 !== (null == h ? void 0 : h.status)) {
                                        o.next = 30;
                                        break
                                    }
                                    return f = Ae.r.fromServerConversation(this.ctx, null == h ? void 0 : h.conversation, p.log_id),
                                    this.resolve(g.Uk.ConversationManager).upsert(f),
                                    o.next = 28,
                                    this.resolve(g.Uk.ConversationManager).refreshAsync(f);
                                case 28:
                                    d.success = !0,
                                    d.payload = f;
                                case 30:
                                    o.next = 36;
                                    break;
                                case 32:
                                    o.prev = 32,
                                    o.t0 = o.catch(13),
                                    d.statusCode = null !== (t = o.t0.type) && void 0 !== t ? t : G.NI.NetworkError,
                                    d.innerError = o.t0;
                                case 36:
                                    return this.resolve(g.Uk.Monitor).emitMetrics(K.U.CreateConversation, {
                                        create_cost: K.u.performanceNow() - a
                                    }, {
                                        type: null !== (r = null === (n = e.type) || void 0 === n ? void 0 : n.toString()) && void 0 !== r ? r : "unknown",
                                        error_code: null !== (s = null === (i = d.statusCode) || void 0 === i ? void 0 : i.toString()) && void 0 !== s ? s : "unknown"
                                    }),
                                    o.abrupt("return", d);
                                case 38:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, this, [[13, 32]])
                    }
                    )))
                }
            }, {
                key: "getConversation",
                value: function(e) {
                    return this.resolve(g.Uk.ConversationManager).get(e.conversationId)
                }
            }, {
                key: "getConversationOnline",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.resolve(g.Uk.ConversationManager).getWithOnline(e.conversationId, e.shortId, e.type));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "getConversationList",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return this.resolve(g.Uk.ConversationManager).getConversationArray(_e()(e))
                }
            }, {
                key: "getConversationListOnline",
                value: function() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.resolve(g.Uk.ConversationManager).refreshLocalAsync();
                                case 2:
                                    return t.abrupt("return", this.getConversationList({
                                        filter: _e()(e)
                                    }));
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "createMessage",
                value: function(e) {
                    var t;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function n() {
                        var r, i, s;
                        return c().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (e.insert === undefined && (e.insert = !0),
                                    i = f()({}, e.ext),
                                    (s = Oe.v.createClientMessage(this.ctx, {
                                        type: e.type,
                                        content: e.content,
                                        ext: i,
                                        id: null !== (t = e.clientId) && void 0 !== t ? t : (0,
                                        gt.k)(),
                                        conversationId: e.conversation.id,
                                        mentionedUsers: e.mentionedUsers || [],
                                        conversationShortId: e.conversation.shortId,
                                        conversationType: e.conversation.type,
                                        referenceMessage: e.referenceMessage,
                                        referenceHint: e.referenceHint
                                    })).flightStatus = G.b3.Created,
                                    s.sendFunc = Ie()(r = this.__internal_sendMessageObject).call(r, this),
                                    s.indexInConversation = e.conversation.lastMessageIndex.add(1),
                                    s.orderInConversation = e.conversation.lastMessageOrder.add(1),
                                    !e.insert) {
                                        n.next = 10;
                                        break
                                    }
                                    return n.next = 10,
                                    this.resolve(g.Uk.MessageManager).processNewMessage(s, G.v$.Offline);
                                case 10:
                                    return n.abrupt("return", s);
                                case 11:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "sendMessage",
                value: function(e) {
                    var t, n, r, i;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function s() {
                        var o, a, u, d, v;
                        return c().wrap((function(s) {
                            for (; ; )
                                switch (s.prev = s.next) {
                                case 0:
                                    return o = e.message,
                                    a = Ce()(),
                                    s.next = 4,
                                    o.sendFunc(o);
                                case 4:
                                    u = s.sent,
                                    this.resolve(g.Uk.EventBus).emit(G.c5.MessageSend, this, o);
                                    try {
                                        d = Ce()(),
                                        v = this.resolve(g.Uk.ConversationManager).get(o.conversationId),
                                        this.resolve(g.Uk.Monitor).emitMetrics(K.U.SendMessage, {
                                            con_member_count: v.participantCount - 1,
                                            send_cost_time: d - a
                                        }, {
                                            con_type: o.conversationType.toString(),
                                            conversation_id: o.conversationId,
                                            msg_uuid: o.serverId,
                                            msg_type: o.type.toString(),
                                            send_start_time: a.toString(),
                                            send_end_time: d.toString(),
                                            error_code: null !== (n = null === (t = u.statusCode) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "unknown",
                                            is_ws: (null === (r = this.network.ws) || void 0 === r ? void 0 : r.isOpen()) ? "1" : "0",
                                            logid: null !== (i = u.logid) && void 0 !== i ? i : ""
                                        })
                                    } catch (c) {
                                        b.Y.ctxWarn(this.ctx, "Fail to report data after send message", c)
                                    }
                                    return s.abrupt("return", u);
                                case 8:
                                case "end":
                                    return s.stop()
                                }
                        }
                        ), s, this)
                    }
                    )))
                }
            }, {
                key: "fetchConversation",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n, r, i, s;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = null,
                                    e.shortId === undefined) {
                                        t.next = 5;
                                        break
                                    }
                                    if (null === (r = this.resolve(g.Uk.ConversationManager).getWithShortIdRaw(e.shortId)) || r.isOffline) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", r);
                                case 5:
                                    if (e.inboxType === undefined && (e.inboxType = this.inboxType.getDefaultInbox()),
                                    this.inboxType.isValidInbox(e.inboxType)) {
                                        t.next = 8;
                                        break
                                    }
                                    throw new H.G({
                                        ctx: this.ctx,
                                        msg: "invalid inbox",
                                        type: G.NI.InvalidInboxType,
                                        sender: this
                                    });
                                case 8:
                                    if (e.idempotentId === undefined || e.participantId !== undefined) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.next = 11,
                                    this.createConversation({
                                        type: x.m.ConversationType.GROUP_CHAT,
                                        participants: [],
                                        inboxType: e.inboxType,
                                        idempotentId: e.idempotentId
                                    });
                                case 11:
                                    if (!(i = t.sent).success) {
                                        t.next = 17;
                                        break
                                    }
                                    if (null === (n = i.payload)) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.next = 17,
                                    this.getConversationOnline({
                                        conversationId: n.id,
                                        shortId: n.shortId,
                                        type: x.m.ConversationType.ONE_TO_ONE_CHAT
                                    });
                                case 17:
                                case 28:
                                    t.next = 37;
                                    break;
                                case 19:
                                    if (e.participantId === undefined) {
                                        t.next = 30;
                                        break
                                    }
                                    return t.next = 22,
                                    this.createConversation({
                                        type: x.m.ConversationType.ONE_TO_ONE_CHAT,
                                        participants: e.participantId,
                                        inboxType: e.inboxType
                                    });
                                case 22:
                                    if (!(s = t.sent).success) {
                                        t.next = 28;
                                        break
                                    }
                                    if (null === (n = s.payload)) {
                                        t.next = 28;
                                        break
                                    }
                                    return t.next = 28,
                                    this.resolve(g.Uk.ConversationManager).refreshAsync(n);
                                case 30:
                                    if (e.shortId === undefined) {
                                        t.next = 36;
                                        break
                                    }
                                    return t.next = 33,
                                    this.getConversationOnline({
                                        conversationId: e.shortId,
                                        shortId: e.shortId,
                                        type: x.m.ConversationType.GROUP_CHAT
                                    });
                                case 33:
                                    n = t.sent,
                                    t.next = 37;
                                    break;
                                case 36:
                                    throw new H.G({
                                        ctx: this.ctx,
                                        type: G.NI.InvalidParam,
                                        msg: "no valid param provided",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 37:
                                    if (null === n || n.isOffline) {
                                        t.next = 43;
                                        break
                                    }
                                    return t.next = 40,
                                    this.getMessagesByConversation({
                                        conversation: n
                                    });
                                case 40:
                                    return t.abrupt("return", n);
                                case 43:
                                    throw new H.G({
                                        ctx: this.ctx,
                                        type: G.NI.ConversationNotExist,
                                        msg: "fetch failed, conv is null or offline",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 44:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "dispose",
                value: function() {
                    var e, t, n = this;
                    this.resolve(g.Uk.EventBus).unsubscribeAll(),
                    this.ticker.stop(),
                    this.network.closeWs(),
                    null === (t = this.network.ws) || void 0 === t || t.dispose(),
                    this.network.onMessage.unsubscribeAll();
                    var r, i = (0,
                    z.Z)(this.plugins);
                    try {
                        for (i.s(); !(r = i.n()).done; ) {
                            r.value.dispose()
                        }
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                    ve()(e = this.plugins).call(e, (function(e) {
                        return e.dispose()
                    }
                    )),
                    this.plugins.length = 0,
                    this.resolve(g.Uk.ConversationManager).dispose(),
                    this.resolve(g.Uk.MessageManager).dispose(),
                    this.ctx.option.monitor = undefined,
                    this.ctx.option.aspectBefore = function() {
                        return b.Y.ctxError(n.ctx, "do not invoke a disposed instance"),
                        !1
                    }
                    ,
                    this.disposed = !0,
                    b.Y.ctxDebug(this.ctx, "sdk unloaded, do not invoke this instance")
                }
            }, {
                key: "initAdapter",
                value: function() {}
            }, {
                key: "prepareHistoryForInbox",
                value: function(e) {
                    var t, n, r, i = e.inboxType, s = e.convLimit, o = e.msgLimit, a = e.mode, d = e.convTotal;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        var u, v, l, p, h, x, y;
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    null === (t = this.resolve(g.Uk.DbProxy)) || void 0 === t ? void 0 : t.loadUserCursor(i);
                                case 3:
                                    if ((u = e.sent) === undefined) {
                                        e.next = 11;
                                        break
                                    }
                                    return b.Y.ctxDebug(this.ctx, "load history for inbox ".concat(i, " by db")),
                                    e.next = 8,
                                    this.setUserCursor(u, i);
                                case 8:
                                    return e.next = 10,
                                    this.getMessagesByUser({
                                        inboxType: i,
                                        cursor: u
                                    });
                                case 10:
                                    return e.abrupt("return", !0);
                                case 11:
                                    if (!this.ctx.option.disableInitPull) {
                                        e.next = 29;
                                        break
                                    }
                                    if (b.Y.ctxDebug(this.ctx, "load history for inbox ".concat(i, " by disable init")),
                                    a !== G.k5.AwemeMode) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 16,
                                    this.api.GetMessagesByInit({
                                        inboxType: i,
                                        convLimit: s,
                                        msgLimit: o
                                    });
                                case 16:
                                    l = e.sent,
                                    p = null === (n = l.body) || void 0 === n ? void 0 : n.message_by_init,
                                    v = p.user_cursor,
                                    e.next = 26;
                                    break;
                                case 21:
                                    return e.next = 23,
                                    this.api.GetMessagesByUserInitV2({
                                        inboxType: i,
                                        convLimit: s,
                                        msgLimit: o,
                                        cursor: m.ZERO
                                    });
                                case 23:
                                    h = e.sent,
                                    x = null === (r = h.body) || void 0 === r ? void 0 : r.messages_per_user_init_v2_body,
                                    v = x.per_user_cursor;
                                case 26:
                                    return e.next = 28,
                                    this.setUserCursor(v, i);
                                case 28:
                                    return e.abrupt("return", !0);
                                case 29:
                                    b.Y.ctxDebug(this.ctx, "load history for inbox ".concat(i, " by full init")),
                                    y = {
                                        hasMore: !0,
                                        cursor: m.ZERO,
                                        page: 0,
                                        version: undefined
                                    };
                                case 31:
                                    if (!y.hasMore) {
                                        e.next = 39;
                                        break
                                    }
                                    return e.next = 34,
                                    this.getMessagesByUserInit(f()({
                                        inboxType: i,
                                        initSubType: this.ctx.option.initSubType,
                                        convLimit: s,
                                        msgLimit: o,
                                        mode: a
                                    }, y));
                                case 34:
                                    if (y = e.sent,
                                    !(d && this.resolve(g.Uk.ConversationManager).getConversationArray().length >= d)) {
                                        e.next = 37;
                                        break
                                    }
                                    return e.abrupt("break", 39);
                                case 37:
                                    e.next = 31;
                                    break;
                                case 39:
                                    return e.abrupt("return", !0);
                                case 42:
                                    return e.prev = 42,
                                    e.t0 = e.catch(0),
                                    b.Y.ctxError(this.ctx, "load history failed for inbox:".concat(i), e.t0),
                                    e.abrupt("return", !1);
                                case 46:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 42]])
                    }
                    )))
                }
            }, {
                key: "patchMessage",
                value: function(e) {
                    var t, n;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function r() {
                        var i, s, o, a, u, d, v;
                        return c().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (i = e.cursor,
                                    s = 20,
                                    e.limitindex) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 4:
                                    return i instanceof Oe.v && (i = i.indexInConversation),
                                    i === undefined && (i = e.conversation.firstMessageIndex),
                                    r.next = 8,
                                    this.api.GetMessagesByConversation({
                                        conversationId: e.conversation.id,
                                        conversationShortId: m.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        anchorIndex: m.fromValue(i),
                                        direction: x.m.MessageDirection.OLDER,
                                        limit: null !== (t = e.limit) && void 0 !== t ? t : s,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 8:
                                    return o = r.sent,
                                    this.resolve(g.Uk.Monitor).emitMetrics(K.U.GetMessagesByConversation, {
                                        count: 1
                                    }, {
                                        log_id: o.log_id,
                                        from: "patch",
                                        conversationId: e.conversation.shortId,
                                        cursor: m.fromValue(i).toString()
                                    }),
                                    a = null === (n = o.body) || void 0 === n ? void 0 : n.messages_in_conversation_body,
                                    r.next = 13,
                                    this.resolve(g.Uk.MessageManager).processNewMessagesFromPull(a.messages, G.v$.UserInbox, o.log_id);
                                case 13:
                                    if (u = r.sent,
                                    d = u.conMap,
                                    v = d.get(e.conversation.shortId),
                                    (null == a ? void 0 : a.has_more) && v && !e.limitindex.gt((null == v ? void 0 : v.indexInConversation) || m.ZERO)) {
                                        r.next = 20;
                                        break
                                    }
                                    return e.conversation.forceRefreshUnreadCount(),
                                    r.abrupt("return");
                                case 20:
                                    this.patchMessage({
                                        conversation: e.conversation,
                                        limit: e.limit || s,
                                        cursor: null == a ? void 0 : a.next_cursor,
                                        limitindex: e.limitindex
                                    });
                                case 21:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "tickerUpdate",
                value: function() {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        var t, n, r, i, s, o;
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.network.net.getConnectionStatus();
                                case 2:
                                    if (e.t0 = e.sent,
                                    e.t1 = R.Disconnected,
                                    e.t0 !== e.t1) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (this.initResult === G.rb.Succeeded) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    if (!this.ctx.option.pullInterval || this.isProcessing) {
                                        e.next = 33;
                                        break
                                    }
                                    t = (0,
                                    z.Z)(this.inboxType.getInboxTypeArray()),
                                    e.prev = 10,
                                    t.s();
                                case 12:
                                    if ((n = t.n()).done) {
                                        e.next = 25;
                                        break
                                    }
                                    return r = n.value,
                                    e.prev = 14,
                                    e.next = 17,
                                    this.getMessagesByUser({
                                        inboxType: r
                                    });
                                case 17:
                                    this.resolve(g.Uk.Monitor).emitMetrics(K.U.GetMessagesByTicker, {
                                        count: 1
                                    }, {
                                        tick_timer: this.ticker.getTickTimer(),
                                        cursor: this.getUserCursor(r).toString(),
                                        time: Math.round(Ce()() / 100).toString(),
                                        inbox: r.toString()
                                    }),
                                    e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20,
                                    e.t2 = e.catch(14),
                                    b.Y.ctxWarn(this.ctx, "ticker running in pull user err:", e.t2);
                                case 23:
                                    e.next = 12;
                                    break;
                                case 25:
                                    e.next = 30;
                                    break;
                                case 27:
                                    e.prev = 27,
                                    e.t3 = e.catch(10),
                                    t.e(e.t3);
                                case 30:
                                    return e.prev = 30,
                                    t.f(),
                                    e.finish(30);
                                case 33:
                                    i = (0,
                                    z.Z)(this.plugins),
                                    e.prev = 34,
                                    i.s();
                                case 36:
                                    if ((s = i.n()).done) {
                                        e.next = 48;
                                        break
                                    }
                                    return o = s.value,
                                    e.prev = 38,
                                    e.next = 41,
                                    o.ticker();
                                case 41:
                                    e.next = 46;
                                    break;
                                case 43:
                                    e.prev = 43,
                                    e.t4 = e.catch(38),
                                    b.Y.ctxWarn(this.ctx, "ticker running in plugin err:", e.t4);
                                case 46:
                                    e.next = 36;
                                    break;
                                case 48:
                                    e.next = 53;
                                    break;
                                case 50:
                                    e.prev = 50,
                                    e.t5 = e.catch(34),
                                    i.e(e.t5);
                                case 53:
                                    return e.prev = 53,
                                    i.f(),
                                    e.finish(53);
                                case 56:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[10, 27, 30, 33], [14, 20], [34, 50, 53, 56], [38, 43]])
                    }
                    )))
                }
            }, {
                key: "__internal_sendMessageObject",
                value: function(e) {
                    var t, n, r, i, s;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function o() {
                        var a, u, d, v, l, p;
                        return c().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    if (a = {
                                        success: !1,
                                        payload: e
                                    },
                                    !e.serverId) {
                                        o.next = 4;
                                        break
                                    }
                                    return a.statusCode = 0,
                                    o.abrupt("return", a);
                                case 4:
                                    if ((u = this.resolve(g.Uk.ConversationManager).getRaw(e.conversationId)) !== undefined) {
                                        o.next = 9;
                                        break
                                    }
                                    return a.statusCode = G.NI.ConversationNotExist,
                                    a.statusMsg = "conversation ".concat(e.conversationId, " not exist in local"),
                                    o.abrupt("return", a);
                                case 9:
                                    return e.flightStatus = G.b3.Inflight,
                                    o.next = 12,
                                    this.resolve(g.Uk.MessageManager).processNewMessage(e, G.v$.Offline);
                                case 12:
                                    if (o.prev = 12,
                                    u.ticket) {
                                        o.next = 16;
                                        break
                                    }
                                    return o.next = 16,
                                    this.resolve(g.Uk.ConversationManager).refreshTicket(u.id);
                                case 16:
                                    o.next = 25;
                                    break;
                                case 18:
                                    return o.prev = 18,
                                    o.t0 = o.catch(12),
                                    e.flightStatus = G.b3.Failed,
                                    a.statusCode = null !== (t = o.t0.type) && void 0 !== t ? t : G.NI.InvalidTicket,
                                    a.innerError = o.t0,
                                    this.resolve(g.Uk.MessageManager).upsert(e),
                                    o.abrupt("return", a);
                                case 25:
                                    return o.prev = 25,
                                    o.next = 28,
                                    this.api.SendMessage({
                                        conversationType: u.type,
                                        conversationId: u.id,
                                        conversationShortId: m.fromString(u.shortId),
                                        content: e.content,
                                        ticket: u.ticket,
                                        ext: e.ext,
                                        messageType: e.type,
                                        clientId: e.clientId,
                                        mentionedUsers: fe()(d = e.mentionedUsers).call(d, (function(e) {
                                            return m.fromString(e)
                                        }
                                        )),
                                        inboxType: u.inboxType,
                                        referenceInfo: e.referenceInfo
                                    });
                                case 28:
                                    if (v = o.sent,
                                    l = null === (n = v.body) || void 0 === n ? void 0 : n.send_message_body,
                                    e.ext[G.v9.SendResponseCheckCode] = null !== (r = null == l ? void 0 : l.check_code.toString()) && void 0 !== r ? r : "",
                                    e.ext[G.v9.SendResponseCheckMessage] = null == l ? void 0 : l.check_message,
                                    e.ext[G.v9.SendResponseExtraInfo] = null == l ? void 0 : l.extra_info,
                                    e.ext[G.v9.SendResponseStatus] = null !== (i = null == l ? void 0 : l.status.toString()) && void 0 !== i ? i : "",
                                    this.ctx.option.debug && (e.ext[G.v9.LocalLogId] = v.log_id),
                                    a.body = l,
                                    a.checkCode = l.check_code,
                                    a.checkMsg = l.check_message,
                                    a.statusCode = l.status,
                                    a.statusMsg = l.extra_info,
                                    a.logid = v.log_id,
                                    0 !== l.status) {
                                        o.next = 51;
                                        break
                                    }
                                    return p = l.server_message_id.toString(),
                                    e.serverId = p,
                                    e.flightStatus = G.b3.Succeeded,
                                    e.isOffline = !1,
                                    o.next = 48,
                                    this.resolve(g.Uk.MessageManager).processNewMessage(e, G.v$.Offline);
                                case 48:
                                    a.success = !0,
                                    o.next = 52;
                                    break;
                                case 51:
                                    e.flightStatus !== G.b3.Received ? (e.flightStatus = G.b3.Rejected,
                                    l.status === x.m.SendMessageStatus.CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE && (e.flightStatus = G.b3.SelfVisible)) : a.success = !0;
                                case 52:
                                    o.next = 59;
                                    break;
                                case 54:
                                    o.prev = 54,
                                    o.t1 = o.catch(25),
                                    e.flightStatus !== G.b3.Received && (e.flightStatus = G.b3.Failed),
                                    a.innerError = o.t1,
                                    a.statusCode = null !== (s = o.t1.type) && void 0 !== s ? s : G.NI.NetworkError;
                                case 59:
                                    return this.resolve(g.Uk.MessageManager).upsert(e),
                                    o.abrupt("return", a);
                                case 61:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, this, [[12, 18], [25, 54]])
                    }
                    )))
                }
            }, {
                key: "receivePacket",
                value: function(e) {
                    var t, n, r, i, s, o, a, d;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function u() {
                        var v, l, p, h, f, y, k, _, I, M, C, w, T, S, E;
                        return c().wrap((function(c) {
                            for (; ; )
                                switch (c.prev = c.next) {
                                case 0:
                                    if (this.isProcessing = !0,
                                    this.initResult === G.rb.Succeeded) {
                                        c.next = 3;
                                        break
                                    }
                                    return c.abrupt("return");
                                case 3:
                                    if (v = !1,
                                    l = this.getUserCursor(e.inbox_type),
                                    e.cmd !== x.m.IMCMD.NEW_MSG_NOTIFY) {
                                        c.next = 39;
                                        break
                                    }
                                    if (!(p = null === (t = e.body) || void 0 === t ? void 0 : t.has_new_message_notify)) {
                                        c.next = 11;
                                        break
                                    }
                                    return h = this.resolve(g.Uk.ConversationManager).getRaw(p.conversation_id),
                                    c.next = 11,
                                    this.clientAck({
                                        packet: e,
                                        inboxType: null !== (n = null == h ? void 0 : h.inboxType) && void 0 !== n ? n : null == e ? void 0 : e.inbox_type,
                                        type: x.m.MsgReportType.MSG_RECEIVE_BY_WS
                                    });
                                case 11:
                                    if (p) {
                                        c.next = 16;
                                        break
                                    }
                                    v = !0,
                                    b.Y.ctxWarn(this.ctx, "push body is missing, logid:".concat(e.log_id)),
                                    c.next = 39;
                                    break;
                                case 16:
                                    if (!l.lt(null !== (r = p.previous_cursor) && void 0 !== r ? r : m.ZERO) && !(null === (i = p.previous_cursor) || void 0 === i ? void 0 : i.eq(m.ZERO))) {
                                        c.next = 21;
                                        break
                                    }
                                    v = !0,
                                    b.Y.ctxWarn(this.ctx, q()(f = q()(y = q()(k = "push cursour is greater than local cursor, push:".concat(null !== (s = p.previous_cursor) && void 0 !== s ? s : m.ZERO, ", local:")).call(k, l.toString(), ", msgid:")).call(y, null === (o = p.message) || void 0 === o ? void 0 : o.server_message_id, ", logid:")).call(f, e.log_id)),
                                    c.next = 39;
                                    break;
                                case 21:
                                    if (!(null === (a = p.previous_cursor) || void 0 === a ? void 0 : a.eq(l))) {
                                        c.next = 37;
                                        break
                                    }
                                    if (!(_ = p.message)) {
                                        c.next = 34;
                                        break
                                    }
                                    return this.reportMessageDelayTime(_, e.log_id),
                                    (I = Oe.v.fromServerMessage(this.ctx, _, e.log_id)).ext || (I.ext = {}),
                                    this.ctx.option.debug && (I.ext[G.v9.LocalLogId] = e.log_id),
                                    c.next = 30,
                                    this.resolve(g.Uk.MessageManager).processNewMessage(I, G.v$.Online);
                                case 30:
                                    return c.next = 32,
                                    this.setUserCursor(p.next_cursor, e.inbox_type);
                                case 32:
                                    c.next = 35;
                                    break;
                                case 34:
                                    b.Y.ctxWarn(this.ctx, "msg body is empty:", p);
                                case 35:
                                    c.next = 39;
                                    break;
                                case 37:
                                    v = !0,
                                    b.Y.ctxWarn(this.ctx, q()(M = q()(C = q()(w = "push cursour is less than local cursor, push:".concat(p.previous_cursor, ", local:")).call(w, l, ", msgid:")).call(C, null === (d = p.message) || void 0 === d ? void 0 : d.server_message_id, ", logid:")).call(M, e.log_id));
                                case 39:
                                    if (!v) {
                                        c.next = 42;
                                        break
                                    }
                                    return c.next = 42,
                                    this.getMessagesByUser({
                                        inboxType: e.inbox_type,
                                        cursor: l
                                    });
                                case 42:
                                    this.resolve(g.Uk.ConversationManager).refreshLocal(),
                                    T = (0,
                                    z.Z)(this.plugins),
                                    c.prev = 44,
                                    T.s();
                                case 46:
                                    if ((S = T.n()).done) {
                                        c.next = 52;
                                        break
                                    }
                                    return E = S.value,
                                    c.next = 50,
                                    E.receivePacket(e);
                                case 50:
                                    c.next = 46;
                                    break;
                                case 52:
                                    c.next = 57;
                                    break;
                                case 54:
                                    c.prev = 54,
                                    c.t0 = c.catch(44),
                                    T.e(c.t0);
                                case 57:
                                    return c.prev = 57,
                                    T.f(),
                                    c.finish(57);
                                case 60:
                                    this.isProcessing = !1;
                                case 61:
                                case "end":
                                    return c.stop()
                                }
                        }
                        ), u, this, [[44, 54, 57, 60]])
                    }
                    )))
                }
            }, {
                key: "clientAck",
                value: function(e) {
                    var t, n, r, i, s, o, a = e.packet, d = e.inboxType, v = e.type;
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function e() {
                        var u, l;
                        return c().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((null === (t = a.body) || void 0 === t ? void 0 : t.has_new_message_notify) && a.start_time_stamp && !a.start_time_stamp.lte(0)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    this.network.net.getNetworkType();
                                case 4:
                                    u = e.sent,
                                    e.t0 = u,
                                    e.next = e.t0 === U.Cellular_2G ? 8 : e.t0 === U.Cellular_3G ? 10 : e.t0 === U.Cellular_4G ? 12 : e.t0 === U.Cellular_5G ? 14 : e.t0 === U.Wifi ? 16 : 18;
                                    break;
                                case 8:
                                    return l = x.m.NetworkType.MOBILE_2G,
                                    e.abrupt("break", 20);
                                case 10:
                                    return l = x.m.NetworkType.MOBILE_3G,
                                    e.abrupt("break", 20);
                                case 12:
                                    return l = x.m.NetworkType.MOBILE_4G,
                                    e.abrupt("break", 20);
                                case 14:
                                    return l = x.m.NetworkType.MOBILE_5G,
                                    e.abrupt("break", 20);
                                case 16:
                                    return l = x.m.NetworkType.WIFI,
                                    e.abrupt("break", 20);
                                case 18:
                                    return l = x.m.NetworkType.UNKNOWN,
                                    e.abrupt("break", 20);
                                case 20:
                                    return this.resolve(g.Uk.Monitor).emitMetrics(K.U.MessageAck, {
                                        count: 1
                                    }, {
                                        start_timestamp: a.start_time_stamp.toString(),
                                        cmd: a.cmd.toString(),
                                        network_type: l.toString(),
                                        logid: a.log_id,
                                        client_timestamp: (new Date).getTime().toString(),
                                        server_message_id: null !== (i = null === (r = null === (n = a.body.has_new_message_notify.message) || void 0 === n ? void 0 : n.server_message_id) || void 0 === r ? void 0 : r.toString()) && void 0 !== i ? i : "0",
                                        report_net_type: v.toString()
                                    }),
                                    e.next = 23,
                                    this.api.ClientAck({
                                        startTimeStamp: a.start_time_stamp,
                                        cmd: a.cmd,
                                        NetworkType: l,
                                        logid: a.log_id,
                                        clientTimeStamp: m.fromNumber((new Date).getTime()),
                                        serverId: null !== (o = null === (s = a.body.has_new_message_notify.message) || void 0 === s ? void 0 : s.server_message_id) && void 0 !== o ? o : m.ZERO,
                                        inboxType: d,
                                        type: v
                                    });
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "reportMessageDelayTime",
                value: function(e, t) {
                    var n, r, i, s, o, a, c, u, d = null === (n = e.create_time) || void 0 === n ? void 0 : n.toNumber();
                    if (d) {
                        var v, l, p, h = this.ctx.option.timeCalibration ? this.resolve(g.Uk.Monitor).avgDelta : 0, f = Ce()(), m = f + h - d;
                        if (m <= 0)
                            b.Y.ctxDebug(this.ctx, q()(v = q()(l = q()(p = "message reception delay is less than 0, serverId:".concat(e.server_message_id, ", current:")).call(p, f, ", createTime:")).call(l, d, ", timeDelta:")).call(v, h));
                        else
                            this.resolve(g.Uk.Monitor).emitMetrics(K.U.ReceiveMessage, {
                                recieve_cost_time: m
                            }, {
                                con_type: null !== (i = null === (r = e.conversation_type) || void 0 === r ? void 0 : r.toString()) && void 0 !== i ? i : "",
                                conversation_id: null !== (s = e.conversation_id) && void 0 !== s ? s : "",
                                msg_uuid: null !== (a = null === (o = e.server_message_id) || void 0 === o ? void 0 : o.toString()) && void 0 !== a ? a : "",
                                recieve_end_time: f.toString(),
                                recieve_start_time: d.toString(),
                                time_delta: h.toString(),
                                msg_type: null !== (u = null === (c = e.message_type) || void 0 === c ? void 0 : c.toString()) && void 0 !== u ? u : "",
                                error_code: "0",
                                ntp_ready: this.ctx.option.timeCalibration ? "1" : "0",
                                is_ws: "1",
                                logid: t
                            })
                    }
                }
            }]),
            e
        }()
          , qt = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "initAdapter",
                value: function() {
                    re.setAdapter(te.HttpClient, A),
                    re.setAdapter(te.WebSocketClient, ne),
                    re.setAdapter(te.NetApi, B)
                }
            }]),
            n
        }(Ft)
    },
    32218: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return p
            },
            h: function() {
                return i
            }
        });
        var r, i, s = n(37491), o = n(59967), a = n(85116), c = n(70355), u = n.n(c), d = n(83610);
        !function(e) {
            e[e.debug = 0] = "debug",
            e[e.info = 1] = "info",
            e[e.warn = 2] = "warn",
            e[e.error = 3] = "error",
            e[e.none = 4] = "none"
        }(i || (i = {}));
        var v = (r = {},
        (0,
        a.Z)(r, i.info, "#1890ff"),
        (0,
        a.Z)(r, i.debug, "#19be6b"),
        (0,
        a.Z)(r, i.warn, "#ff9900"),
        (0,
        a.Z)(r, i.error, "#ed4014"),
        r)
          , l = {
            debug: i.debug,
            info: i.info,
            warn: i.warn,
            error: i.error,
            none: i.none
        }
          , p = function() {
            function e() {
                (0,
                s.Z)(this, e)
            }
            return (0,
            o.Z)(e, null, [{
                key: "isBrowser",
                get: function() {
                    return "undefined" != typeof navigator
                }
            }, {
                key: "log",
                value: function(t, n) {
                    for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                        s[o - 2] = arguments[o];
                    var a, c, p, h, f, g, m, x, y, k;
                    (n && n.resolve(d.Uk.Monitor).emitLog(l[t], s),
                    null == n ? void 0 : n.option.debug) && ("none" !== t && this.level <= i[t] && (n && d.hi.Instance.instanceCount > 1 ? e.isBrowser ? (a = console)[t].apply(a, u()(c = [u()(p = "%c [Byted IM SDK][".concat(n.id, "] [")).call(p, t, "]:"), "color: ".concat(v[i[t]], "; font-weight: 700")]).call(c, s)) : (h = console)[t].apply(h, u()(f = [u()(g = "[Byted IM SDK][".concat(n.id, "] [")).call(g, t, "]:")]).call(f, s)) : e.isBrowser ? (m = console)[t].apply(m, u()(x = ["%c [Byted IM SDK] [".concat(t, "]:"), "color: ".concat(v[i[t]], "; font-weight: 700")]).call(x, s)) : (y = console)[t].apply(y, u()(k = ["[Byted IM SDK] [".concat(t, "]:")]).call(k, s))))
                }
            }, {
                key: "debug",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    this.log.apply(this, u()(e = ["debug", undefined]).call(e, n))
                }
            }, {
                key: "info",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    this.log.apply(this, u()(e = ["info", undefined]).call(e, n))
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    this.log.apply(this, u()(e = ["warn", undefined]).call(e, n))
                }
            }, {
                key: "error",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    this.log.apply(this, u()(e = ["error", undefined]).call(e, n))
                }
            }, {
                key: "ctxDebug",
                value: function(e) {
                    for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                        r[i - 1] = arguments[i];
                    this.log.apply(this, u()(t = ["debug", e]).call(t, r))
                }
            }, {
                key: "ctxInfo",
                value: function(e) {
                    for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                        r[i - 1] = arguments[i];
                    this.log.apply(this, u()(t = ["info", e]).call(t, r))
                }
            }, {
                key: "ctxWarn",
                value: function(e) {
                    for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                        r[i - 1] = arguments[i];
                    this.log.apply(this, u()(t = ["warn", e]).call(t, r))
                }
            }, {
                key: "ctxError",
                value: function(e) {
                    for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                        r[i - 1] = arguments[i];
                    this.log.apply(this, u()(t = ["error", e]).call(t, r))
                }
            }]),
            e
        }();
        p.level = i.debug
    },
    52381: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return _
            },
            U: function() {
                return r
            }
        });
        var r, i = n(73517), s = n(37491), o = n(59967), a = n(98790), c = n(89027), u = n(55239), d = n.n(u), v = n(63199), l = n.n(v), p = n(51235), h = n.n(p), f = n(36674), g = n.n(f), m = n(75386), x = n.n(m), y = n(90734), k = n(83610);
        !function(e) {
            e.CreateConversation = "create.conv",
            e.SendMessage = "send.msg",
            e.ReceiveMessage = "recieve.msg",
            e.WsConnect = "ws.connect",
            e.NetworkRequest = "network.request",
            e.FrontierOpen = "frontier.open",
            e.FrontierClose = "frontier.close",
            e.FrontierError = "frontier.error",
            e.FrontierReceive = "frontier.receive",
            e.FrontierLive = "frontier.live",
            e.WebSocketConnectFirst = "ws.connect.first",
            e.WebSocketConnectAfterClose = "ws.connect.afterclose",
            e.WebSocketConnectNoHeartbeat = "ws.connect.noheartbeat",
            e.BizApiInvoke = "api.invoke",
            e.MessageAck = "message.ack",
            e.SuccessSuffix = ".success",
            e.ErrorSuffix = ".error",
            e.BizSdkInit = "init",
            e.BizRefreshToken = "refresh.token",
            e.BizSdkError = "error",
            e.GetMessagesByConversation = "message.get.byconversation",
            e.GetMessagesByTicker = "message.get.ticker"
        }(r || (r = {}));
        var _ = function(e) {
            (0,
            a.Z)(n, e);
            var t = (0,
            c.Z)(n);
            function n() {
                return (0,
                s.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            o.Z)(n, [{
                key: "avgDelta",
                get: function() {
                    return n.avgDelta
                }
            }, {
                key: "invoke",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (this.ctx.option.monitor === undefined)
                        return !1;
                    var i = this.ctx.option.monitor;
                    d()(i) || (i = [i]),
                    l()(i).call(i, (function(t) {
                        var r = t[e];
                        return "function" == typeof r && h()((function() {
                            r.apply(t, n)
                        }
                        ), 0)
                    }
                    ))
                }
            }, {
                key: "fillKv",
                value: function(e) {
                    var t = g()(g()(g()({}, e), this.ctx.option.monitorTagKv), {
                        sdk_version: y.HF.sdkVersion,
                        sdk_type: "im-web-sdk",
                        build_number: y.HF.buildNumber,
                        app_id: this.ctx.option.appId.toString(),
                        user_id: this.ctx.option.userId
                    });
                    return this.ctx.option.versionCode && (t.version_code = this.ctx.option.versionCode),
                    t
                }
            }, {
                key: "emitMetrics",
                value: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                      , n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
                      , r = "imsdk.".concat(e);
                    this.invoke("emitMetrics", r, t, this.fillKv(n))
                }
            }, {
                key: "emitCounter",
                value: function(e) {
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1
                      , n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (0 !== t) {
                        var r = "imsdk.".concat(e);
                        this.invoke("emitMetrics", r, {
                            count: t
                        }, this.fillKv(n))
                    }
                }
            }, {
                key: "emitDuration",
                value: function(e, t) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
                      , i = n.performanceNow()
                      , s = i - t
                      , o = "imsdk.".concat(e);
                    return this.invoke("emitMetrics", o, {
                        duration: s
                    }, this.fillKv(r)),
                    s
                }
            }, {
                key: "emitLatencyDuration",
                value: function(e, t) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
                      , i = this.ctx.option.timeCalibration ? this.avgDelta : 0
                      , s = n.performanceNow()
                      , o = s + i - t;
                    o < 0 || this.invoke("emitMetrics", e, {
                        duration: o
                    }, this.fillKv(r))
                }
            }, {
                key: "emitError",
                value: function(e) {
                    this.invoke("emitError", e, this.fillKv({}))
                }
            }, {
                key: "emitNetwork",
                value: function(e, t) {
                    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    this.invoke("emitNetwork", e, t, this.fillKv(n))
                }
            }, {
                key: "emitEvent",
                value: function(e, t, n) {
                    this.invoke("emitEvent", e, t, n)
                }
            }, {
                key: "emitLog",
                value: function(e) {
                    this.invoke("emitLog", e, arguments.length <= 1 ? undefined : arguments[1])
                }
            }, {
                key: "emitTracker",
                value: function(e, t) {
                    this.invoke("emitTracker", e, this.fillKv(t))
                }
            }], [{
                key: "avgDelta",
                get: function() {
                    return 0 === this.putDeltaTimes ? 0 : this.totalDelta / this.putDeltaTimes
                }
            }, {
                key: "putTimeDelta",
                value: function(e, t, r, i) {
                    if (r !== undefined && i !== undefined) {
                        var s = i - ((t - e - (r - i)) / 2 + e);
                        n.putDeltaTimes++,
                        n.totalDelta += s
                    }
                }
            }, {
                key: "performanceNow",
                value: function() {
                    return "object" === ("undefined" == typeof performance ? "undefined" : (0,
                    i.Z)(performance)) && "function" == typeof performance.now && "number" == typeof performance.timeOrigin ? performance.now() + performance.timeOrigin : x()()
                }
            }]),
            n
        }(k.mA);
        _.putDeltaTimes = 0,
        _.totalDelta = 0
    },
    88532: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, {
            W: function() {
                return r
            }
        }),
        function(e) {
            e.MultimediaMessageUpload = "imsdk_upload_msg",
            e.InitHandler = "imsdk_init_handler",
            e.Exception = "imsdk_exception",
            e.SaveMessageError = "imsdk_save_msg_error",
            e.IntegrityCheckConversation = "imsdk_puller_check_conv_and",
            e.MessageAck = "imsdk_message_ack",
            e.RtcStartCall = "imsdk_rtc_start_call",
            e.RtcSwitch = "imsdk_rtc_switch",
            e.RtcReceiveRing = "imsdk_rtc_receive_ring",
            e.RtcAcceptCall = "imsdk_rtc_accept_call",
            e.RtcDenyCall = "imsdk_rtc_deny_call",
            e.RtcTerminate = "imsdk_rtc_terminate",
            e.RtcEnd = "imsdk_rtc_end"
        }(r || (r = {}))
    },
    51789: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return R
            }
        });
        var r = n(26015)
          , i = n(37491)
          , s = n(59967)
          , o = n(98790)
          , a = n(89027)
          , c = n(36674)
          , u = n.n(c)
          , d = n(70355)
          , v = n.n(d)
          , l = n(95383)
          , p = n.n(l)
          , h = n(35140)
          , f = n.n(h)
          , g = n(57101)
          , m = n.n(g)
          , x = n(83009)
          , y = n.n(x)
          , k = n(49972)
          , _ = n(20822)
          , b = n(90734)
          , I = n(2936)
          , M = n(74417)
          , C = n(10586)
          , w = n.n(C)
          , T = n(32218)
          , S = n(83610)
          , E = n(22972)
          , R = function(e) {
            (0,
            o.Z)(n, e);
            var t = (0,
            a.Z)(n);
            function n() {
                var e;
                return (0,
                i.Z)(this, n),
                (e = t.apply(this, arguments)).isMember = !0,
                e.__internal_pullCursor = k.MAX_VALUE,
                e.cacheUnreadCountCalc = undefined,
                e.cacheUnreadCountWithWhiteListCalc = undefined,
                e
            }
            return (0,
            s.Z)(n, [{
                key: "type",
                get: function() {
                    return 15 & this.bizType
                },
                set: function(e) {
                    this.bizType = e
                }
            }, {
                key: "inboxType",
                get: function() {
                    return this.coreInfo.inboxType
                }
            }, {
                key: "mode",
                get: function() {
                    return 0
                }
            }, {
                key: "isStrangerConversation",
                get: function() {
                    return 0 !== this.mode
                }
            }, {
                key: "isMuted",
                get: function() {
                    return this.pushStatus !== b.Bs.Unknown ? this.pushStatus === b.Bs.Disable : this.settingInfo !== undefined && this.settingInfo.mute === b.I7.On
                }
            }, {
                key: "pushStatus",
                get: function() {
                    var e;
                    return null !== (e = this.settingInfo.pushStatus) && void 0 !== e ? e : b.Bs.Unknown
                }
            }, {
                key: "weakMuteInfo",
                get: function() {
                    return this.settingInfo.weakMuteInfo
                }
            }, {
                key: "isStickOnTop",
                get: function() {
                    return this.settingInfo !== undefined && this.settingInfo.stickTop === b.uX.On
                }
            }, {
                key: "isFavorite",
                get: function() {
                    return this.settingInfo !== undefined && this.settingInfo.favor === b.Lk.On
                }
            }, {
                key: "ext",
                get: function() {
                    var e = {};
                    return this.coreInfo && this.coreInfo.ext && (e = u()(e, this.coreInfo.ext)),
                    this.settingInfo && this.settingInfo.ext && (e = u()(e, this.settingInfo.ext)),
                    e
                }
            }, {
                key: "rankScore",
                get: function() {
                    var e, t, n, r, i;
                    return this.isStickOnTop ? (null !== (e = this.settingInfo.setTopTime) && void 0 !== e ? e : k.ZERO).add(8e15).toNumber() : null !== (i = null === (r = null === (n = null === (t = this.lastPopVisibleMessage) || void 0 === t ? void 0 : t.createdAt) || void 0 === n ? void 0 : n.getTime) || void 0 === r ? void 0 : r.call(n)) && void 0 !== i ? i : -1
                }
            }, {
                key: "lastMessage",
                get: function() {
                    return this.filterLastMessage()
                }
            }, {
                key: "lastVisibleMessage",
                get: function() {
                    return this.filterLastMessage((function(e) {
                        return e.visible
                    }
                    ))
                }
            }, {
                key: "lastPopVisibleMessage",
                get: function() {
                    return this.filterLastMessage((function(e) {
                        return !e.unpop
                    }
                    ))
                }
            }, {
                key: "firstMessage",
                get: function() {
                    return this.filterFirstMessage()
                }
            }, {
                key: "readIndex",
                get: function() {
                    return this.settingInfo.readIndex
                }
            }, {
                key: "minIndex",
                get: function() {
                    return this.settingInfo.minIndex
                }
            }, {
                key: "version",
                get: function() {
                    return this.coreInfo.version
                }
            }, {
                key: "unreadCount",
                get: function() {
                    var e, t, n, r, i = this;
                    return this.cacheUnreadCountCalc === undefined && (this.cacheUnreadCountCalc = w()((function(e) {
                        return i.unreadMessageList.length
                    }
                    ), {
                        maxSize: 1
                    })),
                    this.cacheUnreadCountCalc(v()(e = "".concat(null === (n = null === (t = this.updatedAt) || void 0 === t ? void 0 : t.getTime) || void 0 === n ? void 0 : n.call(t), ":")).call(e, null === (r = this.readIndex) || void 0 === r ? void 0 : r.toString()))
                }
            }, {
                key: "unreadCountWithWhiteList",
                get: function() {
                    var e, t, n, r, i = this;
                    return this.cacheUnreadCountWithWhiteListCalc === undefined && (this.cacheUnreadCountWithWhiteListCalc = w()((function(e) {
                        return i.unreadMessageListWithWhiteList.length
                    }
                    ), {
                        maxSize: 1
                    })),
                    this.cacheUnreadCountWithWhiteListCalc(v()(e = "".concat(null === (n = null === (t = this.updatedAt) || void 0 === t ? void 0 : t.getTime) || void 0 === n ? void 0 : n.call(t), ":")).call(e, null === (r = this.readIndex) || void 0 === r ? void 0 : r.toString()))
                }
            }, {
                key: "forceRefreshUnreadCount",
                value: function() {
                    var e, t, n = this.unreadMessageList.length;
                    n !== this.unreadCount && this.cacheUnreadCountCalc !== undefined && this.cacheUnreadCountCalc.clear !== undefined && (T.Y.ctxDebug(this.ctx, v()(t = "force refresh unread count: ".concat(this.id, ", value: ")).call(t, n)),
                    null === (e = this.cacheUnreadCountCalc) || void 0 === e || e.clear())
                }
            }, {
                key: "unreadMessageList",
                get: function() {
                    var e = this;
                    if (!this.readIndex)
                        return [];
                    var t = this.resolve(S.Uk.MessageManager).getList(this.id);
                    return p()(t).call(t, (function(t) {
                        return t.indexInConversation.gt(e.readIndex) && t.indexInConversation.gt(e.minIndex) && t.increaseUnread
                    }
                    ))
                }
            }, {
                key: "unreadMessageListWithWhiteList",
                get: function() {
                    var e, t = this;
                    return p()(e = this.unreadMessageList).call(e, (function(e) {
                        var n, r, i;
                        return (null === (n = e.ext) || void 0 === n ? void 0 : n[b.v9.MustNotify]) || (null === (r = t.settingInfo.weakMuteInfo.whiteUids) || void 0 === r ? void 0 : f()(r).call(r, (function(t) {
                            return t.toString() === e.sender
                        }
                        ))) || (null === (i = t.settingInfo.weakMuteInfo.whiteMsgTypes) || void 0 === i ? void 0 : f()(i).call(i, (function(t) {
                            return t === e.type
                        }
                        )))
                    }
                    ))
                }
            }, {
                key: "updatedAt",
                get: function() {
                    return this.lastMessage ? this.lastMessage.createdAt : new Date(0)
                }
            }, {
                key: "firstMessageIndex",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this.filterFirstMessage((function(e) {
                        return e.indexInConversation && e.indexInConversation.gt(0)
                    }
                    ))) || void 0 === e ? void 0 : e.indexInConversation) && void 0 !== t ? t : k.ZERO
                }
            }, {
                key: "lastMessageIndex",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this.filterLastMessage((function(e) {
                        return e.indexInConversation && e.indexInConversation.gt(0)
                    }
                    ))) || void 0 === e ? void 0 : e.indexInConversation) && void 0 !== t ? t : k.ZERO
                }
            }, {
                key: "lastMessageOrder",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this.filterLastMessage((function(e) {
                        return e.orderInConversation && e.orderInConversation.gt(0)
                    }
                    ))) || void 0 === e ? void 0 : e.orderInConversation) && void 0 !== t ? t : k.ZERO
                }
            }, {
                key: "getMessageList",
                value: function() {
                    var e, t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(e) {
                        return e.visible
                    }
                    ;
                    return p()(e = this.resolve(S.Uk.MessageManager).getList(this.id)).call(e, t)
                }
            }, {
                key: "toParticipantUserId",
                get: function() {
                    if (this.type === _.m.ConversationType.GROUP_CHAT)
                        return undefined;
                    var e = this.id.split(":");
                    return e[2] === this.ctx.option.userId ? e[3] : e[2]
                }
            }, {
                key: "isBlocked",
                get: function() {
                    return (0,
                    E.vP)(this.ext, b.v9.RelationIsMuted)
                }
            }, {
                key: "isBlockNormalOnly",
                get: function() {
                    return this.isBlocked && (0,
                    E.vP)(this.ext, b.v9.RelationNormalOnly)
                }
            }, {
                key: "filterLastMessage",
                value: function(e) {
                    var t = this.getMessageList((function() {
                        return !0
                    }
                    ))
                      , n = null;
                    if (0 === t.length)
                        return null;
                    if (e === undefined)
                        return t[t.length - 1];
                    for (var r = t.length - 1; r >= 0; r--)
                        if (e(t[r])) {
                            n = t[r];
                            break
                        }
                    return n
                }
            }, {
                key: "filterFirstMessage",
                value: function(e) {
                    var t = this.getMessageList((function() {
                        return !0
                    }
                    ))
                      , n = null;
                    if (0 === t.length)
                        return null;
                    if (e === undefined)
                        return t[0];
                    var i, s = (0,
                    r.Z)(t);
                    try {
                        for (s.s(); !(i = s.n()).done; ) {
                            var o = i.value;
                            if (e(o)) {
                                n = o;
                                break
                            }
                        }
                    } catch (a) {
                        s.e(a)
                    } finally {
                        s.f()
                    }
                    return n
                }
            }], [{
                key: "fromServerConversation",
                value: function(e, t, r) {
                    var i = new n(e);
                    i.id = t.conversation_id,
                    i.shortId = t.conversation_short_id.toString(),
                    i.type = t.conversation_type,
                    i.ticket = t.ticket,
                    i.participantCount = t.participants_count,
                    i.isMember = t.is_participant,
                    i.isOffline = !1,
                    i.firstPageParticipant = t.first_page_participants,
                    i.coreInfo = new I._(i,t.conversation_core_info),
                    i.settingInfo = new M.H(i,t.conversation_setting_info);
                    for (var s = m()(i.coreInfo.ext), o = 0, a = m()(i.settingInfo.ext); o < a.length; o++) {
                        var c, u = a[o];
                        if (y()(s).call(s, u))
                            T.Y.ctxDebug(i.ctx, v()(c = "conversation: ".concat(i.shortId, " ext duplicate key: ")).call(c, u))
                    }
                    return r !== undefined && i.ctx.option.debug && (i.coreInfo.ext[b.v9.LocalLogId] = r),
                    i
                }
            }]),
            n
        }(S.mA)
    },
    2936: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return l
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(36674)
          , c = n.n(a)
          , u = n(49972)
          , d = n(32218)
          , v = n(83610)
          , l = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e, i) {
                var s, o, a;
                return (0,
                r.Z)(this, n),
                (s = t.call(this, e.ctx)).version = u.ZERO,
                s.parent = e,
                i !== undefined && (s.desc = i.desc,
                s.ext = i.ext,
                s.icon = i.icon,
                s.name = i.name,
                s.notice = i.notice,
                s.owner = null !== (a = null === (o = i.owner) || void 0 === o ? void 0 : o.toString()) && void 0 !== a ? a : "",
                s.version = i.info_version,
                s.secOwner = i.sec_owner,
                s.inboxType = i.inbox_type),
                s.inboxType === undefined && (s.inboxType = s.resolve(v.Uk.InboxType).getDefaultInboxWithoutCheck()),
                s
            }
            return (0,
            i.Z)(n, [{
                key: "conversationId",
                get: function() {
                    return this.parent.id
                }
            }, {
                key: "ext",
                get: function() {
                    return this.innerExt || (this.innerExt = {}),
                    this.innerExt
                },
                set: function(e) {
                    this.innerExt = null != e ? e : {}
                }
            }, {
                key: "mergeCore",
                value: function(e) {
                    return e.version.lt(this.version) ? (d.Y.ctxDebug(this.ctx, "core info version local > online, local: ", this.version.toString(), "new: ", e.version.toString()),
                    this) : e.conversationId !== this.conversationId ? (d.Y.ctxDebug(this.ctx, "core info conversation not match, local:", this.conversationId.toString(), "new: ", e.conversationId.toString()),
                    this) : (this.version = e.version,
                    this.name = e.name,
                    this.desc = e.desc,
                    this.icon = e.icon,
                    this.notice = e.notice,
                    this.owner = e.owner,
                    this.secOwner = e.owner,
                    this.innerExt = c()(c()({}, this.innerExt), e.innerExt),
                    this.inboxType = e.inboxType,
                    this)
                }
            }]),
            n
        }(v.mA)
    },
    74417: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return x
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(83009)
          , c = n.n(a)
          , u = n(36674)
          , d = n.n(u)
          , v = n(77355)
          , l = n.n(v)
          , p = n(49972)
          , h = n(32218)
          , f = n(90734)
          , g = n(83610)
          , m = n(6779)
          , x = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e, i) {
                var s, o;
                return (0,
                r.Z)(this, n),
                (s = t.call(this, e.ctx)).version = p.ZERO,
                s.minIndex = p.ZERO,
                s._readIndex = p.ZERO,
                s.parent = e,
                i !== undefined && (s.ext = i.ext,
                s.favor = i.favorite,
                s.mute = i.mute,
                s.stickTop = i.stick_on_top,
                s.version = p.fromValue(null !== (o = i.setting_version) && void 0 !== o ? o : p.ZERO),
                s.readIndex = i.read_index,
                s.minIndex = i.min_index,
                s.setFavoriteTime = i.set_favorite_time,
                s.setTopTime = i.set_top_time,
                s.pushStatus = i.push_status),
                s
            }
            return (0,
            i.Z)(n, [{
                key: "conversationId",
                get: function() {
                    return this.parent.id
                }
            }, {
                key: "pushStatus",
                get: function() {
                    return this._pushStatus
                },
                set: function(e) {
                    var t;
                    c()(t = [f.Bs.Allow, f.Bs.PartAllow, f.Bs.Disable]).call(t, e) ? this._pushStatus = e : this._pushStatus = f.Bs.Unknown
                }
            }, {
                key: "readIndex",
                get: function() {
                    return this._readIndex
                },
                set: function(e) {
                    if (e !== undefined) {
                        var t = p.fromValue(e);
                        this._readIndex !== undefined ? t.gt(this._readIndex) && (this._readIndex = t) : this._readIndex = t
                    }
                }
            }, {
                key: "ext",
                get: function() {
                    return this.innerExt || (this.innerExt = {}),
                    this.innerExt
                },
                set: function(e) {
                    this.innerExt = null != e ? e : {}
                }
            }, {
                key: "mergeSetting",
                value: function(e) {
                    return e.version.lt(this.version) ? (h.Y.ctxDebug(this.ctx, "setting info version local > online, local: ", this.version.toString(), "new: ", e.version.toString()),
                    this) : e.conversationId !== this.conversationId ? (h.Y.ctxDebug(this.ctx, "setting info conversation not match, local:", this.conversationId.toString(), "new: ", e.conversationId.toString()),
                    this) : (this.stickTop = e.stickTop,
                    this.setTopTime = e.setTopTime,
                    this.mute = e.mute,
                    this.favor = e.favor,
                    this.setFavoriteTime = e.setFavoriteTime,
                    this.innerExt = d()(d()({}, this.innerExt), e.ext),
                    this.readIndex = e.readIndex,
                    this.minIndex = e.minIndex,
                    this.version = e.version,
                    this.pushStatus = e.pushStatus,
                    this)
                }
            }, {
                key: "weakMuteInfo",
                get: function() {
                    var e, t, n, r = {
                        whiteUids: [],
                        whiteMsgTypes: []
                    };
                    if (!this.innerExt[f.v9.PushPartDisableConfig])
                        return r;
                    try {
                        var i = m.parse(this.innerExt[f.v9.PushPartDisableConfig])
                          , s = null == i ? void 0 : i[f.O9];
                        return {
                            whiteUids: null !== (t = null === (e = null == s ? void 0 : s.white_uids) || void 0 === e ? void 0 : l()(e).call(e, p.fromValue)) && void 0 !== t ? t : [],
                            whiteMsgTypes: null !== (n = null == s ? void 0 : s.white_msg_types) && void 0 !== n ? n : []
                        }
                    } catch (o) {
                        return h.Y.ctxWarn(this.ctx, "conversation setting weak mute info parse error: ", o),
                        r
                    }
                }
            }]),
            n
        }(g.mA)
    },
    34488: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return R
            },
            R: function() {
                return r
            }
        });
        var r, i = n(37491), s = n(59967), o = n(98790), a = n(89027), c = n(36674), u = n.n(c), d = n(79107), v = n.n(d), l = n(83009), p = n.n(l), h = n(75386), f = n.n(h), g = n(57101), m = n.n(g), x = n(26867), y = n.n(x), k = n(70355), _ = n.n(k), b = n(77355), I = n.n(b), M = n(49972), C = n(32218), w = n(90734), T = n(20822), S = n(83610), E = n(22972);
        !function(e) {
            e[e.Sending = 0] = "Sending",
            e[e.Success = 1] = "Success",
            e[e.Failed = 2] = "Failed"
        }(r || (r = {}));
        var R = function(e) {
            (0,
            o.Z)(n, e);
            var t = (0,
            a.Z)(n);
            function n() {
                var e;
                return (0,
                i.Z)(this, n),
                (e = t.apply(this, arguments)).indexInConversation = M.ZERO,
                e.orderInConversation = M.ZERO,
                e.property = {},
                e.source = w.v$.Unknown,
                e
            }
            return (0,
            s.Z)(n, [{
                key: "conversationType",
                get: function() {
                    return 15 & this.conversationBizType
                },
                set: function(e) {
                    this.conversationBizType = e
                }
            }, {
                key: "clientId",
                get: function() {
                    var e;
                    return this.ext && null !== (e = this.ext[w.v9.ClientMessageId]) && void 0 !== e ? e : ""
                },
                set: function(e) {
                    this.ext || (this.ext = {}),
                    this.ext[w.v9.ClientMessageId] = e
                }
            }, {
                key: "merge",
                value: function(e) {
                    if (e && this.type === e.type) {
                        if (e.ext = u()(this.ext || {}, e.ext),
                        "" === e.content && this.content && (C.Y.ctxDebug(this.ctx, "ignore empty content replace:", e),
                        e.content = this.content),
                        e.clientId === this.clientId && e.indexInConversation.lt(this.indexInConversation))
                            return this.indexInConversation = e.indexInConversation,
                            this;
                        u()(this, e)
                    }
                    return this
                }
            }, {
                key: "isNormalMsg",
                get: function() {
                    return this.type < 5e4
                }
            }, {
                key: "isCommandMsg",
                get: function() {
                    return this.type === T.m.MessageType.MESSAGE_TYPE_COMMAND
                }
            }, {
                key: "isSpecialMessage",
                get: function() {
                    return this.type >= 5e4
                }
            }, {
                key: "visible",
                get: function() {
                    return this.serverStatus !== w.P6.Disable && (!this.isSpecialMessage && (!this.ctx.option.userId || !this.ext || (this.ext[w.v9.MessageVisible] && this.ext[w.v9.MessageVisible].length > 0 ? -1 !== v()(e = this.ext[w.v9.MessageVisible].split(",")).call(e, this.ctx.option.userId) : !(this.ext[w.v9.MessageInvisible] && this.ext[w.v9.MessageInvisible].length > 0) || -1 === v()(t = this.ext[w.v9.MessageInvisible].split(",")).call(t, this.ctx.option.userId))));
                    var e, t
                }
            }, {
                key: "unpop",
                get: function() {
                    return !!this.ext && !(this.visible && !(0,
                    E.vP)(this.ext, w.v9.DoNotPopConversation))
                }
            }, {
                key: "increaseUnread",
                get: function() {
                    return !(this.isFromMe || !this.visible || this.isSpecialMessage || this.isRecalled) && !(0,
                    E.vP)(this.ext, w.v9.DoNotIncreaseUnread)
                }
            }, {
                key: "isFromMe",
                get: function() {
                    return this.sender === this.ctx.option.userId
                }
            }, {
                key: "isRecalled",
                get: function() {
                    return this.ext && !!this.ext[w.v9.IsRecalled]
                }
            }, {
                key: "isMentioned",
                get: function() {
                    var e, t;
                    return this.visible && (p()(e = this.mentionedUsers).call(e, this.ctx.option.userId) || p()(t = this.mentionedUsers).call(t, "0") && !this.isFromMe)
                }
            }, {
                key: "mentionedUsers",
                get: function() {
                    return this.ext && this.ext[w.v9.MentionedUser] ? this.ext[w.v9.MentionedUser].split(",") : []
                },
                set: function(e) {
                    this.ext || (this.ext = {}),
                    this.ext[w.v9.MentionedUser] = e.join(",")
                }
            }, {
                key: "isStrangerMessage",
                get: function() {
                    var e;
                    return !this.ext || p()(e = ["1", "2", "3"]).call(e, this.ext[w.v9.MessageMode])
                }
            }, {
                key: "isRootReference",
                get: function() {
                    return !!this.ext && (0,
                    E.vP)(this.ext, w.v9.IsRootReference)
                }
            }, {
                key: "moveReadIndex",
                get: function() {
                    return !this.ext || !(!this.visible || this.isFromMe || this.isSpecialMessage) && !(0,
                    E.vP)(this.ext, w.v9.DoNotMoveReadIndex)
                }
            }, {
                key: "updateLastMessage",
                get: function() {
                    return !(!this.visible || this.isSpecialMessage) && !(0,
                    E.vP)(this.ext, w.v9.DoNotUpdateLastMessage)
                }
            }], [{
                key: "createClientMessage",
                value: function(e, t) {
                    var r, i = new n(e);
                    i.conversationId = t.conversationId,
                    i.type = t.type,
                    i.conversationType = t.conversationType,
                    i.conversationShortId = t.conversationShortId,
                    i.sender = e.option.userId,
                    i.content = t.content,
                    i.createdAt = new Date(f()());
                    for (var s = u()({}, t.ext), o = 0, a = m()(s); o < a.length; o++) {
                        var c, d = a[o];
                        if (y()(d).call(d, "s:"))
                            C.Y.ctxDebug(i.ctx, _()(c = "delete s: prefix ext key: '".concat(d, ": ")).call(c, s[d], "'")),
                            delete s[d]
                    }
                    if (i.ext = s,
                    i.mentionedUsers = t.mentionedUsers,
                    i.clientId = t.id,
                    i.version = M.ZERO,
                    i.serverStatus = w.P6.Enable,
                    i.isOffline = !0,
                    t.referenceMessage) {
                        var v = T.m.MessageStatus.AVAILABLE;
                        t.referenceMessage.isRecalled ? v = T.m.MessageStatus.RECALLED : t.referenceMessage.visible || (v = T.m.MessageStatus.INVISIBLE),
                        i.referenceInfo = {
                            referenced_message_id: M.fromValue(t.referenceMessage.serverId),
                            hint: null !== (r = t.referenceHint) && void 0 !== r ? r : "",
                            ref_message_type: M.fromValue(t.referenceMessage.type),
                            referenced_message_status: v
                        },
                        t.referenceMessage.referenceInfo !== undefined ? (i.referenceInfo.root_message_id = t.referenceMessage.referenceInfo.root_message_id,
                        i.referenceInfo.root_message_conv_index = t.referenceMessage.referenceInfo.root_message_conv_index) : (i.referenceInfo.root_message_id = M.fromValue(t.referenceMessage.serverId),
                        i.referenceInfo.root_message_conv_index = t.referenceMessage.indexInConversation)
                    }
                    return i.ctx.option.secUid && (i.secSender = i.ctx.option.secUid),
                    i
                }
            }, {
                key: "fromServerMessage",
                value: function(e, t, r) {
                    var i = new n(e);
                    return i.serverId = t.server_message_id.toString(),
                    i.type = t.message_type,
                    i.ext = u()({}, t.ext),
                    i.conversationId = t.conversation_id,
                    i.content = t.content,
                    i.sender = t.sender.toString(),
                    i.createdAt = new Date(t.create_time.toNumber()),
                    i.indexInConversation = t.index_in_conversation,
                    i.orderInConversation = t.order_in_conversation,
                    i.serverStatus = t.status,
                    i.conversationShortId = t.conversation_short_id.toString(),
                    i.conversationType = t.conversation_type,
                    i.version = t.version,
                    i.secSender = t.sec_sender,
                    i.isOffline = !1,
                    i.property = n.fromServerProperty(t),
                    t.reference_info && (i.referenceInfo = t.reference_info),
                    r !== undefined && i.ctx.option.debug && (i.ext[w.v9.LocalLogId] = r),
                    i
                }
            }, {
                key: "fromServerProperty",
                value: function(e) {
                    var t = {};
                    if (!e.property_list)
                        return t;
                    for (var n = function() {
                        var n, o = s[i], a = e.property_list[o];
                        a && a.Items && (t[o] = I()(n = a.Items).call(n, (function(t) {
                            var n, i, s, a, c;
                            return {
                                messageId: null !== (n = e.ext[w.v9.ClientMessageId]) && void 0 !== n ? n : "",
                                conversationId: e.conversation_id,
                                key: o,
                                userId: null === (i = t.uid) || void 0 === i ? void 0 : i.toString(),
                                secUid: null !== (s = t.sec_uid) && void 0 !== s ? s : "",
                                createTime: new Date(1e3 * (null !== (c = null === (a = t.create_time) || void 0 === a ? void 0 : a.toNumber()) && void 0 !== c ? c : 0)),
                                idempotentId: t.idempotent_id,
                                value: t.value,
                                version: e.version,
                                status: r.Success
                            }
                        }
                        )))
                    }, i = 0, s = m()(e.property_list); i < s.length; i++)
                        n();
                    return t
                }
            }]),
            n
        }(S.mA)
    },
    15074: function(e, t, n) {
        "use strict";
        n.d(t, {
            Q: function() {
                return l
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(36674)
          , c = n.n(a)
          , u = n(49972)
          , d = n(90734)
          , v = n(20822)
          , l = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                var e;
                return (0,
                r.Z)(this, n),
                (e = t.apply(this, arguments)).minIndex = u.ZERO,
                e._readIndex = u.ZERO,
                e._readOrder = u.ZERO,
                e
            }
            return (0,
            i.Z)(n, [{
                key: "readIndex",
                get: function() {
                    return this._readIndex
                },
                set: function(e) {
                    e && e.gt(this._readIndex) && (this._readIndex = e)
                }
            }, {
                key: "readOrder",
                get: function() {
                    return this._readOrder
                },
                set: function(e) {
                    e && e.gt(this._readOrder) && (this._readOrder = e)
                }
            }, {
                key: "isSelf",
                get: function() {
                    return this.userId === this.ctx.option.userId
                }
            }, {
                key: "ext",
                get: function() {
                    return this.innerExt || (this.innerExt = {}),
                    this.innerExt
                },
                set: function(e) {
                    this.innerExt = e
                }
            }], [{
                key: "featLocalParticipant",
                value: function(e, t) {
                    return e.userId !== t.userId || (e.secUid = t.secUid,
                    e.role = t.role,
                    e.alias = t.alias,
                    e.sortOrder = t.sortOrder,
                    e.blocked = t.blocked,
                    e.leftBlockTime = t.leftBlockTime,
                    e.readIndex = t.readIndex,
                    e.readOrder = t.readOrder,
                    e.ext = c()(e.ext, t.ext)),
                    e
                }
            }, {
                key: "fromServerParticipant",
                value: function(e, t, r, i) {
                    var s, o, a, c, u = new n(e);
                    return u.userId = t.user_id.toString(),
                    u.secUid = t.sec_uid,
                    u.role = null !== (s = t.role) && void 0 !== s ? s : undefined,
                    u.alias = null !== (o = t.alias) && void 0 !== o ? o : undefined,
                    u.sortOrder = null !== (a = t.sort_order) && void 0 !== a ? a : undefined,
                    u.blocked = t.blocked === v.m.BlockStatus.BLOCK,
                    u.leftBlockTime = null !== (c = t.left_block_time) && void 0 !== c ? c : undefined,
                    u.conversationId = r.id,
                    u.conversationType = r.type,
                    i !== undefined && u.ctx.option.debug && (u.ext[d.v9.LocalLogId] = i),
                    u
                }
            }, {
                key: "fakeParticipant",
                value: function(e, t, r) {
                    var i = new n(e);
                    return i.conversationId = r.id,
                    i.conversationType = r.type,
                    i.readIndex = u.ZERO,
                    i.minIndex = u.ZERO,
                    i.userId = t,
                    i
                }
            }]),
            n
        }(n(83610).mA)
    },
    94586: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return I
            }
        });
        var r, i = n(26015), s = n(37491), o = n(59967), a = n(98790), c = n(89027), u = n(44742), d = n.n(u), v = n(17808), l = n.n(v), p = n(72610), h = n(20822), f = n(49972), g = n(90734), m = n(85116), x = (r = {},
        (0,
        m.Z)(r, h.m.IMCMD.SEND_MESSAGE, "v1/message/send"),
        (0,
        m.Z)(r, 200, "v1/message/get_by_user"),
        (0,
        m.Z)(r, 203, "v2/message/get_by_user_init"),
        (0,
        m.Z)(r, 300, "v1/conversation/get_list"),
        (0,
        m.Z)(r, 301, "v1/message/get_by_conversation"),
        (0,
        m.Z)(r, 400, "v1/account/online"),
        (0,
        m.Z)(r, 401, "v1/account/offline"),
        (0,
        m.Z)(r, 410, "v1/client/user_action"),
        (0,
        m.Z)(r, 411, "v1/client/input_status"),
        (0,
        m.Z)(r, 603, "v1/conversation/delete"),
        (0,
        m.Z)(r, 608, "v2/conversation/get_info"),
        (0,
        m.Z)(r, 609, "v2/conversation/create"),
        (0,
        m.Z)(r, 610, "v2/conversation/get_info_list"),
        (0,
        m.Z)(r, 611, "v2/conversation/get_by_favorite"),
        (0,
        m.Z)(r, 612, "v2/conversation/get_by_top"),
        (0,
        m.Z)(r, 614, "v1/conversation/dissolve"),
        (0,
        m.Z)(r, 605, "v1/conversation/participants_list"),
        (0,
        m.Z)(r, 650, "v1/conversation/add_participants"),
        (0,
        m.Z)(r, 651, "v1/conversation/remove_participants"),
        (0,
        m.Z)(r, 652, "v1/conversation/leave"),
        (0,
        m.Z)(r, 655, "v1/conversation/update_participant"),
        (0,
        m.Z)(r, 701, "v1/message/delete"),
        (0,
        m.Z)(r, 702, "v1/message/recall"),
        (0,
        m.Z)(r, 705, "v1/message/set_property"),
        (0,
        m.Z)(r, 902, "v1/conversation/set_core_info"),
        (0,
        m.Z)(r, 904, "v1/conversation/upsert_core_ext_info"),
        (0,
        m.Z)(r, 921, "v1/conversation/set_setting_info"),
        (0,
        m.Z)(r, 922, "v1/conversation/upsert_settings_ext"),
        (0,
        m.Z)(r, 1001, "v1/stranger/get_conversation_list"),
        (0,
        m.Z)(r, 1002, "v1/stranger/get_messages"),
        (0,
        m.Z)(r, 1003, "v1/stranger/delete_message"),
        (0,
        m.Z)(r, 1004, "v1/stranger/delete_conversation"),
        (0,
        m.Z)(r, 1005, "v1/stranger/delete_all_conversations"),
        (0,
        m.Z)(r, 1006, "v1/stranger/mark_read_conversation"),
        (0,
        m.Z)(r, 1007, "v1/stranger/mark_read_all_conversations"),
        (0,
        m.Z)(r, 2e3, "v3/conversation/get_read_index"),
        (0,
        m.Z)(r, 2001, "v3/conversation/get_min_index"),
        (0,
        m.Z)(r, 2002, "v3/conversation/mark_read"),
        (0,
        m.Z)(r, 2003, "v1/media/get_upload_token"),
        (0,
        m.Z)(r, 2004, "v1/media/get_urls"),
        (0,
        m.Z)(r, 2006, "v1/conversation/list"),
        (0,
        m.Z)(r, 2007, "v1/broadcast/send_message"),
        (0,
        m.Z)(r, 2008, "v1/broadcast/recv_message"),
        (0,
        m.Z)(r, 2009, "v1/broadcast/user_counter"),
        (0,
        m.Z)(r, 2010, "v1/client/ack"),
        (0,
        m.Z)(r, 2011, "v1/voip/create"),
        (0,
        m.Z)(r, 2012, "v1/voip/call"),
        (0,
        m.Z)(r, 2013, "v1/voip/update"),
        (0,
        m.Z)(r, 2014, "v1/channel/heartbeat"),
        (0,
        m.Z)(r, 2015, "v1/profile/get_info"),
        (0,
        m.Z)(r, 2016, "v1/client/report_metrics"),
        (0,
        m.Z)(r, 2017, "v1/config/get"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_MESSAGE_BY_INIT, "v1/message/get_message_by_init"),
        (0,
        m.Z)(r, h.m.IMCMD.MODIFY_MESSAGE_EXT, "v1/message/modify_ext"),
        (0,
        m.Z)(r, h.m.IMCMD.UNREAD_COUNT_REPORT, "v1/client/unread_count"),
        (0,
        m.Z)(r, h.m.IMCMD.SEND_MESSAGE_P2P, "v1/send_message/p2p"),
        (0,
        m.Z)(r, h.m.IMCMD.BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX, "v1/conversation/batch_get_conversation_participants_readindex"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_CONVERSATIONS_CHECKINFO, "v1/conversation/get_checkinfo"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_MESSAGES_CHECKINFO_IN_CONVERSATION, "v1/message/get_checkinfo"),
        (0,
        m.Z)(r, h.m.IMCMD.MARK_MESSAGE, "v1/message/mark"),
        (0,
        m.Z)(r, h.m.IMCMD.PULL_MARK_MESSAGE, "v1/message/pull_mark"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_CONVERSATION_CORE_INFO, "v1/conversation/get_core_info"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_UNREAD_COUNT, "v1/client/get_unread_count"),
        (0,
        m.Z)(r, h.m.IMCMD.BLOCK_MEMBERS, "v1/conversation/block_member"),
        (0,
        m.Z)(r, h.m.IMCMD.BLOCK_CONVERSATION, "v1/conversation/block_conversation"),
        (0,
        m.Z)(r, h.m.IMCMD.CHECK_IN_BLOCKLIST, "v1/blocklist/check"),
        (0,
        m.Z)(r, h.m.IMCMD.SET_BLOCKLIST, "v1/blocklist/set"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_BLOCKLIST, "v1/blocklist/get"),
        (0,
        m.Z)(r, h.m.IMCMD.BATCH_UNMARK_MESSAGE, "v1/message/batch_unmark"),
        (0,
        m.Z)(r, h.m.IMCMD.MARK_MSG_UNREAD_COUNT_REPORT, "v1/message/report_mark_count"),
        (0,
        m.Z)(r, h.m.IMCMD.MARK_MSG_GET_UNREAD_COUNT, "v1/message/get_mark_count"),
        (0,
        m.Z)(r, h.m.IMCMD.GET_MESSAGE_INFO_BY_SERVER_ID, "v1/message/get_by_id"),
        (0,
        m.Z)(r, h.m.IMCMD.CLIENT_BATCH_ACK, "v1/client/batch_ack"),
        (0,
        m.Z)(r, h.m.IMCMD.AUDIO_RECOGNITION, "v1/message/audio_recognition"),
        r);
        var y, k = n(83610);
        !function(e) {
            e[e.RequestCreate = 0] = "RequestCreate",
            e[e.RequestSerialize = 1] = "RequestSerialize",
            e[e.BeforeSend = 2] = "BeforeSend",
            e[e.BeforeSendSingleFlight = 3] = "BeforeSendSingleFlight",
            e[e.AfterSendSingleFlight = 4] = "AfterSendSingleFlight",
            e[e.AfterSend = 5] = "AfterSend",
            e[e.ResponseDeserialize = 6] = "ResponseDeserialize",
            e[e.SendMethod = 7] = "SendMethod"
        }(y || (y = {}));
        var _, b = (_ = 1e4,
        function() {
            return _ += 1
        }
        ), I = function(e) {
            (0,
            a.Z)(n, e);
            var t = (0,
            c.Z)(n);
            function n(e, r, i, o) {
                var a;
                (0,
                s.Z)(this, n),
                (a = t.call(this, e)).retryTimes = 0,
                a.seqId = null != o ? o : b(),
                a.reqBody = i,
                a.cmd = r;
                var c = function(e) {
                    var t;
                    return null !== (t = x[e]) && void 0 !== t ? t : ""
                }(r)
                  , u = a.ctx.option.apiUrl;
                return l()(u).call(u, "/") || (u += "/"),
                a.url = u + c,
                a
            }
            return (0,
            o.Z)(n, [{
                key: "logid",
                get: function() {
                    var e, t;
                    return null !== (t = null === (e = this.response) || void 0 === e ? void 0 : e.log_id) && void 0 !== t ? t : ""
                }
            }, {
                key: "prepareRequest",
                value: function(e) {
                    return (0,
                    p.mG)(this, void 0, void 0, d().mark((function t() {
                        var n, r, s, o;
                        return d().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    n = h.m.Request.create({
                                        body: this.reqBody,
                                        cmd: this.cmd,
                                        sequence_id: f.fromNumber(this.seqId),
                                        refer: g.HF.refer,
                                        token: this.ctx.cachedToken,
                                        headers: this.ctx.option.headers,
                                        device_id: this.ctx.option.deviceId,
                                        sdk_version: g.HF.sdkVersion,
                                        build_number: g.HF.buildNumber,
                                        inbox_type: e,
                                        device_platform: this.ctx.option.devicePlatform,
                                        channel: this.ctx.option.channel,
                                        device_type: this.ctx.option.deviceType,
                                        os_version: this.ctx.option.osVersion,
                                        version_code: this.ctx.option.versionCode,
                                        auth_type: this.ctx.option.authType,
                                        biz: this.ctx.option.biz,
                                        access: g.HF.requestAccessName
                                    }),
                                    r = (0,
                                    i.Z)(this.ctx.plugin),
                                    t.prev = 2,
                                    r.s();
                                case 4:
                                    if ((s = r.n()).done) {
                                        t.next = 11;
                                        break
                                    }
                                    return o = s.value,
                                    t.next = 8,
                                    o.sendPacket(n);
                                case 8:
                                    n = t.sent;
                                case 9:
                                    t.next = 4;
                                    break;
                                case 11:
                                    t.next = 16;
                                    break;
                                case 13:
                                    t.prev = 13,
                                    t.t0 = t.catch(2),
                                    r.e(t.t0);
                                case 16:
                                    return t.prev = 16,
                                    r.f(),
                                    t.finish(16);
                                case 19:
                                    this.request = n;
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 13, 16, 19]])
                    }
                    )))
                }
            }]),
            n
        }(k.mA)
    },
    42267: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return I
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(36674)
          , c = n.n(a)
          , u = n(70355)
          , d = n.n(u)
          , v = n(57101)
          , l = n.n(v)
          , p = n(44742)
          , h = n.n(p)
          , f = n(72610)
          , g = n(20822)
          , m = n(90734)
          , x = n(77428)
          , y = n(32218)
          , k = n(52381)
          , _ = n(94586)
          , b = n(83610)
          , I = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                return (0,
                r.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            i.Z)(n, [{
                key: "send",
                value: function(e, t) {
                    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    return (0,
                    f.mG)(this, void 0, void 0, h().mark((function r() {
                        return h().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.sendWithRawBody(e, t, n);
                                case 2:
                                    return r.abrupt("return", r.sent.body);
                                case 3:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "sendWithRawBody",
                value: function(e, t) {
                    var n, r, i, s, o, a, u, v, l, p, I, M, C, w, T, S, E, R, U, N, A, O, B, D, P, G, Z, L, W = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    return (0,
                    f.mG)(this, void 0, void 0, h().mark((function f() {
                        var F, q, V, Y, H, K, z, j, X, $, Q, J;
                        return h().wrap((function(h) {
                            for (; ; )
                                switch (h.prev = h.next) {
                                case 0:
                                    return q = k.u.performanceNow(),
                                    V = this.getReqTrackerContext(e),
                                    h.prev = 2,
                                    W.inboxType === undefined && (W.inboxType = this.resolve(b.Uk.InboxType).getDefaultInboxWithoutCheck()),
                                    this.ctx.option.webSocketLevel === m._.PushOnly && (W.forceHttp = !0),
                                    this.ctx.option.webSocketLevel === m._.All && (W.forceHttp = !1),
                                    Y = new _.F(this.ctx,t,e),
                                    h.next = 9,
                                    Y.prepareRequest(W.inboxType);
                                case 9:
                                    return h.next = 11,
                                    this.resolve(b.Uk.NetworkManager).send(Y, {
                                        maxHttpRetryTimes: !0 === W.forceHttp ? W.maxRetryTimes : undefined,
                                        maxWsRetryTimes: !0 === W.forceHttp ? 0 : W.maxRetryTimes,
                                        useBeacon: W.useBeacon
                                    });
                                case 11:
                                    if (!W.useBeacon && Y.response !== undefined) {
                                        h.next = 13;
                                        break
                                    }
                                    return h.abrupt("return", g.m.Response.create({}));
                                case 13:
                                    if (0 === (H = Y.response).status_code) {
                                        h.next = 69;
                                        break
                                    }
                                    K = H.status_code,
                                    h.t0 = K,
                                    h.next = h.t0 === m.NI.Degradation ? 19 : h.t0 === m.NI.InvalidTicket ? 20 : h.t0 === m.NI.InvalidToken || h.t0 === m.NI.ExpiredToken ? 34 : 65;
                                    break;
                                case 19:
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "server degradation",
                                        type: m.NI.Degradation,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 20:
                                    if (t !== g.m.IMCMD.SEND_MESSAGE) {
                                        h.next = 33;
                                        break
                                    }
                                    return z = e.send_message_body.conversation_id,
                                    j = this.resolve(b.Uk.ConversationManager).get(z),
                                    X = j.ticket,
                                    h.next = 26,
                                    this.resolve(b.Uk.ConversationManager).refreshTicket(j.id);
                                case 26:
                                    if ($ = j.ticket,
                                    X !== $ && !W.isRetryReq) {
                                        h.next = 31;
                                        break
                                    }
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "invalid ticket for conv: ".concat(z),
                                        type: m.NI.InvalidTicket,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 31:
                                    return y.Y.ctxDebug(this.ctx, "refresh ticket due to invalid"),
                                    h.abrupt("return", this.sendWithRawBody(e, t, c()(c()({}, W), {
                                        isRetryReq: !0
                                    })));
                                case 33:
                                    return h.abrupt("break", 69);
                                case 34:
                                    if (Q = this.ctx.cachedToken,
                                    h.prev = 35,
                                    this.resolve(b.Uk.NetworkManager).closeWs(!0),
                                    "" !== Q && this.ctx.option.authType !== g.m.AuthType.SESSION_AUTH) {
                                        h.next = 46;
                                        break
                                    }
                                    if (!W.isRetryReq) {
                                        h.next = 42;
                                        break
                                    }
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "invalid session",
                                        type: m.NI.TokenFuncError,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 42:
                                    return y.Y.ctxDebug(this.ctx, "http retry due to invalid session"),
                                    h.abrupt("return", this.sendWithRawBody(e, t, c()(c()({}, W), {
                                        isRetryReq: !0,
                                        forceHttp: !0
                                    })));
                                case 44:
                                    h.next = 55;
                                    break;
                                case 46:
                                    return h.next = 48,
                                    this.resolve(b.Uk.AuthManager).refreshToken();
                                case 48:
                                    if (J = this.ctx.cachedToken,
                                    Q !== J && !W.isRetryReq) {
                                        h.next = 53;
                                        break
                                    }
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "token refresh fail: ".concat(J),
                                        type: m.NI.TokenFuncError,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 53:
                                    return y.Y.ctxDebug(this.ctx, "refresh token due to invalid"),
                                    h.abrupt("return", this.sendWithRawBody(e, t, c()(c()({}, W), {
                                        isRetryReq: !0
                                    })));
                                case 55:
                                    h.next = 65;
                                    break;
                                case 57:
                                    if (h.prev = 57,
                                    h.t1 = h.catch(35),
                                    h.t1.type === undefined) {
                                        h.next = 64;
                                        break
                                    }
                                    throw h.t1.args = c()(c()({}, h.t1.args), {
                                        req: e,
                                        resp: H
                                    }),
                                    h.t1;
                                case 64:
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "token refresh func error",
                                        type: m.NI.TokenFuncError,
                                        innerError: h.t1,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 65:
                                    if (!W.ignoreBizError) {
                                        h.next = 68;
                                        break
                                    }
                                    return this.resolve(b.Uk.Monitor).emitMetrics(k.U.NetworkRequest, {
                                        duration: k.u.performanceNow() - q,
                                        retry_times: null !== (n = null == Y ? void 0 : Y.retryTimes) && void 0 !== n ? n : 0
                                    }, {
                                        imsdk_cmd: t.toString(),
                                        imsdk_result: "0",
                                        seq_id: null !== (r = null == Y ? void 0 : Y.seqId.toString()) && void 0 !== r ? r : "",
                                        conversation_id: V.conversationId,
                                        uuid: V.uuid,
                                        error_msg: null !== (s = null === (i = null == Y ? void 0 : Y.response) || void 0 === i ? void 0 : i.error_desc) && void 0 !== s ? s : "",
                                        error_code: null !== (u = null === (a = null === (o = null == Y ? void 0 : Y.response) || void 0 === o ? void 0 : o.status_code) || void 0 === a ? void 0 : a.toString()) && void 0 !== u ? u : "",
                                        url_path: null !== (v = null == Y ? void 0 : Y.url) && void 0 !== v ? v : "",
                                        net_type: null !== (p = null === (l = null == Y ? void 0 : Y.method) || void 0 === l ? void 0 : l.toString()) && void 0 !== p ? p : "",
                                        logid: null !== (I = null == Y ? void 0 : Y.logid) && void 0 !== I ? I : "",
                                        is_retry_req: W.isRetryReq ? "1" : "0"
                                    }),
                                    h.abrupt("return", H);
                                case 68:
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: d()(F = "".concat(null !== (M = m.NI[K]) && void 0 !== M ? M : "unknown", ":")).call(F, H.error_desc),
                                        type: K,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 69:
                                    if (!H.body) {
                                        h.next = 74;
                                        break
                                    }
                                    return this.resolve(b.Uk.Monitor).emitMetrics(k.U.NetworkRequest, {
                                        duration: k.u.performanceNow() - q,
                                        retry_times: null !== (C = Y.retryTimes) && void 0 !== C ? C : 0
                                    }, {
                                        imsdk_cmd: t.toString(),
                                        imsdk_result: "1",
                                        seq_id: Y.seqId.toString(),
                                        conversation_id: V.conversationId,
                                        uuid: V.uuid,
                                        error_msg: "",
                                        error_code: "0",
                                        url_path: null !== (w = Y.url) && void 0 !== w ? w : "",
                                        net_type: null !== (S = null === (T = Y.method) || void 0 === T ? void 0 : T.toString()) && void 0 !== S ? S : "",
                                        logid: null !== (E = H.log_id) && void 0 !== E ? E : "",
                                        is_retry_req: W.isRetryReq ? "1" : "0"
                                    }),
                                    h.abrupt("return", H);
                                case 74:
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "no response body",
                                        type: m.NI.Unknown,
                                        sender: this,
                                        logid: null == H ? void 0 : H.log_id,
                                        args: {
                                            req: e,
                                            resp: H
                                        }
                                    });
                                case 75:
                                    h.next = 88;
                                    break;
                                case 77:
                                    if (h.prev = 77,
                                    h.t2 = h.catch(2),
                                    this.resolve(b.Uk.Monitor).emitMetrics(k.U.NetworkRequest, {
                                        duration: k.u.performanceNow() - q,
                                        retry_times: null !== (R = null == Y ? void 0 : Y.retryTimes) && void 0 !== R ? R : 0
                                    }, {
                                        imsdk_cmd: t.toString(),
                                        imsdk_result: "0",
                                        seq_id: null !== (U = null == Y ? void 0 : Y.seqId.toString()) && void 0 !== U ? U : "",
                                        conversation_id: V.conversationId,
                                        uuid: V.uuid,
                                        error_msg: null !== (A = null === (N = null == Y ? void 0 : Y.response) || void 0 === N ? void 0 : N.error_desc) && void 0 !== A ? A : "",
                                        error_code: null !== (D = null === (B = null === (O = null == Y ? void 0 : Y.response) || void 0 === O ? void 0 : O.status_code) || void 0 === B ? void 0 : B.toString()) && void 0 !== D ? D : "",
                                        url_path: null !== (P = null == Y ? void 0 : Y.url) && void 0 !== P ? P : "",
                                        net_type: null !== (Z = null === (G = null == Y ? void 0 : Y.method) || void 0 === G ? void 0 : G.toString()) && void 0 !== Z ? Z : "",
                                        logid: null !== (L = null == Y ? void 0 : Y.logid) && void 0 !== L ? L : "",
                                        is_retry_req: W.isRetryReq ? "1" : "0"
                                    }),
                                    h.t2 !== undefined) {
                                        h.next = 82;
                                        break
                                    }
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "unknown error",
                                        type: m.NI.Unknown,
                                        sender: this,
                                        args: {
                                            req: e
                                        }
                                    });
                                case 82:
                                    if (h.t2.type === undefined) {
                                        h.next = 87;
                                        break
                                    }
                                    throw h.t2.args = c()(c()({}, h.t2.args), {
                                        req: e
                                    }),
                                    h.t2;
                                case 87:
                                    throw new x.G({
                                        ctx: this.ctx,
                                        msg: "request unknown error",
                                        type: m.NI.Unknown,
                                        innerError: h.t2,
                                        sender: this,
                                        args: {
                                            req: e
                                        }
                                    });
                                case 88:
                                case "end":
                                    return h.stop()
                                }
                        }
                        ), f, this, [[2, 77], [35, 57]])
                    }
                    )))
                }
            }, {
                key: "getReqTrackerContext",
                value: function(e) {
                    for (var t, n, r, i, s = 0, o = l()(e); s < o.length; s++) {
                        var a = e[o[s]];
                        if (a !== undefined)
                            return {
                                conversationId: null !== (n = null === (t = a.conversation_id) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
                                uuid: null !== (i = null === (r = a.client_message_id) || void 0 === r ? void 0 : r.toString()) && void 0 !== i ? i : ""
                            }
                    }
                    return {
                        conversationId: "",
                        uuid: ""
                    }
                }
            }]),
            n
        }(b.mA)
    },
    38071: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return p
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(35826)
          , c = n.n(a)
          , u = n(44742)
          , d = n.n(u)
          , v = n(72610)
          , l = n(83610)
          , p = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n(e) {
                return (0,
                r.Z)(this, n),
                t.call(this, e)
            }
            return (0,
            i.Z)(n, [{
                key: "instance",
                get: function() {
                    return this.resolve(l.Uk.CoreInstance)
                }
            }, {
                key: "init",
                value: function() {
                    return (0,
                    v.mG)(this, void 0, void 0, d().mark((function e() {
                        return d().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }, {
                key: "sendPacket",
                value: function(e) {
                    return (0,
                    v.mG)(this, void 0, void 0, d().mark((function t() {
                        return d().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))
                }
            }, {
                key: "receivePacket",
                value: function(e) {
                    return (0,
                    v.mG)(this, void 0, void 0, d().mark((function e() {
                        return d().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }, {
                key: "ticker",
                value: function() {
                    return (0,
                    v.mG)(this, void 0, void 0, d().mark((function e() {
                        return d().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }, {
                key: "extendFunc",
                value: function(e) {
                    return c()(e).call(e, this)
                }
            }, {
                key: "dispose",
                value: function() {
                    return (0,
                    v.mG)(this, void 0, void 0, d().mark((function e() {
                        return d().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }]),
            n
        }(l.mA)
    },
    83610: function(e, t, n) {
        "use strict";
        n.d(t, {
            mA: function() {
                return v
            },
            jO: function() {
                return d
            },
            hi: function() {
                return u
            },
            Uk: function() {
                return r
            }
        });
        var r, i = n(37491), s = n(59967), o = n(43071), a = n.n(o), c = n(25695);
        !function(e) {
            e.CoreInstance = "coreInstance",
            e.NetworkManager = "netManager",
            e.ConversationManager = "conversationManger",
            e.MessageManager = "messageManager",
            e.ParticipantManager = "participantManager",
            e.EventBus = "eventBus",
            e.Monitor = "montior",
            e.DbProxy = "dbProxy",
            e.CoreApi = "coreApi",
            e.InboxType = "inboxType",
            e.ExtensionPlugin = "extensionPlugin",
            e.ExtensionApi = "extensionApi",
            e.BroadcastManager = "broadcastManager",
            e.EmojiPlugin = "emojiPlugin",
            e.MetricsPlugin = "metricsPlugin",
            e.MetricsApi = "metricsApi",
            e.MultimediaPlugin = "multimediaPlugin",
            e.MultimediaApi = "multimediaApi",
            e.RtcPlugin = "rtcPlugin",
            e.RtcManager = "rtcManager",
            e.RtcApi = "rtcApi",
            e.RtcController = "rtcController",
            e.SharkPlugin = "sharkPlugin",
            e.StoragePlugin = "storagePlugin",
            e.StorageApi = "storageApi",
            e.StrangerPlugin = "strangerPlugin",
            e.StrangerApi = "strangerApi",
            e.SecurityPlugin = "securityPlugin",
            e.AuthManager = "AuthManager"
        }(r || (r = {}));
        var u = function() {
            function e() {
                (0,
                i.Z)(this, e),
                this.services = new (a()),
                this.plugins = new (a())
            }
            return (0,
            s.Z)(e, [{
                key: "register",
                value: function(e, t, n) {
                    this.services.has(e) || this.services.set(e, new (a())),
                    this.services.get(e).set(t, n)
                }
            }, {
                key: "resolve",
                value: function(e, t) {
                    var n;
                    return null === (n = this.services.get(e)) || void 0 === n ? void 0 : n.get(t)
                }
            }, {
                key: "instanceCount",
                get: function() {
                    return this.services.size
                }
            }]),
            e
        }();
        u.Instance = new u;
        var d = function() {
            function e() {
                (0,
                i.Z)(this, e),
                this.initResult = 0,
                this.cachedToken = "",
                this.id = "",
                this.id = (0,
                c.k)()
            }
            return (0,
            s.Z)(e, [{
                key: "plugin",
                get: function() {
                    var e;
                    return null !== (e = u.Instance.plugins.get(this.id)) && void 0 !== e ? e : []
                },
                set: function(e) {
                    u.Instance.plugins.set(this.id, e)
                }
            }, {
                key: "register",
                value: function(e, t) {
                    var n = t;
                    return "function" == typeof t && (n = new t(this)),
                    u.Instance.register(this.id, e, n),
                    n
                }
            }, {
                key: "resolve",
                value: function(e) {
                    return u.Instance.resolve(this.id, e)
                }
            }]),
            e
        }()
          , v = function() {
            function e(t) {
                (0,
                i.Z)(this, e),
                this.__internal_ctx = t
            }
            return (0,
            s.Z)(e, [{
                key: "ctx",
                get: function() {
                    return this.getContext()
                }
            }, {
                key: "bindContext",
                value: function(e) {
                    this.__internal_ctx = e
                }
            }, {
                key: "getContext",
                value: function() {
                    return this.__internal_ctx
                }
            }, {
                key: "resolve",
                value: function(e) {
                    return this.getContext().resolve(e)
                }
            }, {
                key: "register",
                value: function(e, t) {
                    return this.getContext().register(e, t)
                }
            }]),
            e
        }()
    },
    44587: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return d
            }
        });
        var r = n(37491)
          , i = n(59967)
          , s = n(98790)
          , o = n(89027)
          , a = n(44742)
          , c = n.n(a)
          , u = n(72610)
          , d = function(e) {
            (0,
            s.Z)(n, e);
            var t = (0,
            o.Z)(n);
            function n() {
                return (0,
                r.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            i.Z)(n, [{
                key: "execute",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        var n;
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = e,
                                    t.next = 3,
                                    this.before(n);
                                case 3:
                                    return n = t.sent,
                                    t.next = 6,
                                    this.process(n);
                                case 6:
                                    return n = t.sent,
                                    t.next = 9,
                                    this.after(n);
                                case 9:
                                    return n = t.sent,
                                    t.abrupt("return", n);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "before",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))
                }
            }, {
                key: "after",
                value: function(e) {
                    return (0,
                    u.mG)(this, void 0, void 0, c().mark((function t() {
                        return c().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", e);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))
                }
            }]),
            n
        }(n(83610).mA)
    },
    22972: function(e, t, n) {
        "use strict";
        n.d(t, {
            F3: function() {
                return l
            },
            sS: function() {
                return h
            },
            vM: function() {
                return p
            },
            vP: function() {
                return g
            },
            w9: function() {
                return f
            }
        });
        var r = n(26015)
          , i = n(9706)
          , s = n(70355)
          , o = n.n(s)
          , a = n(4200)
          , c = n.n(a)
          , u = n(55239)
          , d = n.n(u)
          , v = (n(95383),
        n(83009),
        n(49972));
        function l(e, t) {
            var n;
            return e.length > t ? o()(n = [c()(e).call(e, 0, t)]).call(n, (0,
            i.Z)(l(c()(e).call(e, t), t))) : [e]
        }
        function p(e, t) {
            var n, i = {}, s = (0,
            r.Z)(e);
            try {
                for (s.s(); !(n = s.n()).done; ) {
                    var o = n.value
                      , a = t(o);
                    i[a] === undefined && (i[a] = []),
                    i[a].push(o)
                }
            } catch (c) {
                s.e(c)
            } finally {
                s.f()
            }
            return i
        }
        function h(e, t) {
            return d()(e) ? e : e !== undefined ? [e] : t !== undefined ? [t] : []
        }
        function f(e) {
            return v.fromNumber(e.charCodeAt(0)).add(v.fromNumber(e.charCodeAt(1)).shiftLeft(8)).add(v.fromNumber(e.charCodeAt(2)).shiftLeft(16)).add(v.fromNumber(e.charCodeAt(3)).shiftLeft(24)).add(v.fromNumber(e.charCodeAt(4)).shiftLeft(32)).add(v.fromNumber(e.charCodeAt(5)).shiftLeft(40)).add(v.fromNumber(e.charCodeAt(6)).shiftLeft(48)).add(v.fromNumber(e.charCodeAt(7)).shiftLeft(56))
        }
        function g(e, t) {
            return e !== undefined && t !== undefined && ("true" === e[t] || "1" === e[t])
        }
    },
    25695: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return o
            }
        });
        for (var r = [], i = 0; i < 256; ++i)
            r[i] = (i + 256).toString(16).substr(1);
        var s = new Array(16);
        function o() {
            var e = function() {
                for (var e = 0, t = 0; e < 16; e++)
                    0 == (3 & e) && (t = 4294967296 * Math.random()),
                    s[e] = t >>> ((3 & e) << 3) & 255;
                return s
            }();
            return e[6] = 15 & e[6] | 64,
            e[8] = 63 & e[8] | 128,
            function(e) {
                var t = 0
                  , n = r;
                return [n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], "-", n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]], n[e[t++]]].join("")
            }(s)
        }
    },
    19509: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return Ie
            }
        });
        var r = n(9706)
          , i = n(46040)
          , s = n(26015)
          , o = n(85116)
          , a = n(37491)
          , c = n(59967)
          , u = n(98790)
          , d = n(89027)
          , v = n(77355)
          , l = n.n(v)
          , p = n(70355)
          , h = n.n(p)
          , f = n(55239)
          , g = n.n(f)
          , m = n(63199)
          , x = n.n(m)
          , y = n(83009)
          , k = n.n(y)
          , _ = n(95383)
          , b = n.n(_)
          , I = n(57101)
          , M = n.n(I)
          , C = n(26867)
          , w = n.n(C)
          , T = n(36674)
          , S = n.n(T)
          , E = n(77364)
          , R = n.n(E)
          , U = n(43071)
          , N = n.n(U)
          , A = n(63849)
          , O = n.n(A)
          , B = n(35140)
          , D = n.n(B)
          , P = n(35826)
          , G = n.n(P)
          , Z = n(8236)
          , L = n.n(Z)
          , W = n(15655)
          , F = n.n(W)
          , q = n(44742)
          , V = n.n(q)
          , Y = n(72610)
          , H = n(49972)
          , K = n(20822)
          , z = n(90734)
          , j = n(32218)
          , X = n(77428)
          , $ = n(83610)
          , Q = n(51789)
          , J = n(34488)
          , ee = (n(79755),
        n(25695))
          , te = n(15074)
          , ne = (n(16995),
        n(6779))
          , re = n(38071)
          , ie = n(22972)
          , se = n(75386)
          , oe = n.n(se)
          , ae = n(61972)
          , ce = n.n(ae)
          , ue = function() {
            function e() {
                (0,
                a.Z)(this, e)
            }
            return (0,
            c.Z)(e, null, [{
                key: "fromOp",
                value: function(t, n) {
                    var r, i = new e;
                    return i.conversationId = t.conversationId,
                    i.messageId = t.clientId,
                    i.key = n.key,
                    i.userId = t.ctx.option.userId,
                    i.secUid = t.ctx.option.secUid,
                    i.createTime = new Date(oe()()),
                    i.idempotentId = n.idempotentId,
                    i.value = null !== (r = n.value) && void 0 !== r ? r : "",
                    i.version = t.version,
                    i.status = J.R.Sending,
                    i
                }
            }, {
                key: "mergeOperationToCurrent",
                value: function(t, n) {
                    for (var r, i = (0,
                    ie.vM)(n, (function(e) {
                        return e.key
                    }
                    )), o = 0, a = M()(i); o < a.length; o++) {
                        var c, u = a[o], d = (0,
                        s.Z)(i[u]);
                        try {
                            var v = function() {
                                var n = c.value;
                                t.property[u] || (t.property[u] = []);
                                var i = null === (r = t.property[u]) || void 0 === r ? void 0 : L()(r).call(r, (function(e) {
                                    return e.idempotentId === n.idempotentId
                                }
                                ));
                                switch (n.operation) {
                                case K.m.OPERATION_TYPE.ADD_PROPERTY_ITEM:
                                    -1 === i && t.property[u].push(e.fromOp(t, n));
                                    break;
                                case K.m.OPERATION_TYPE.REMOVE_PROPERTY_ITEM:
                                    var s;
                                    if (-1 !== i)
                                        ce()(s = t.property[u]).call(s, i, 1);
                                    0 === t.property[u].length && delete t.property[u];
                                    break;
                                case K.m.OPERATION_TYPE.SET_PROPERTY:
                                    t.property[u] = [e.fromOp(t, n)];
                                    break;
                                case K.m.OPERATION_TYPE.DEL_PROPERTY:
                                    delete t.property[u]
                                }
                            };
                            for (d.s(); !(c = d.n()).done; )
                                v()
                        } catch (l) {
                            d.e(l)
                        } finally {
                            d.f()
                        }
                    }
                }
            }]),
            e
        }()
          , de = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            c.Z)(n, [{
                key: "LeaveConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        leave_conversation_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.LEAVE_CONVERSATION, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "DeleteMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        delete_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            message_id: e.serverId
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.DELETE_MESSAGE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetMessageByServerId",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_message_by_id_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            server_message_id: e.serverId
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.GET_MESSAGE_INFO_BY_SERVER_ID, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "MarkConversationDelete",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        delete_conversation_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            last_message_index: e.lastPullIndex
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.MARK_CONVERSATION_DELETE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "AddConversationParticipants",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        conversation_add_participants_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            participants: e.participants,
                                            biz_ext: e.bizExt
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.ADD_CONVERSATION_PARTICIPANTS, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.conversation_add_participants_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationInfoListByFavoriteV2",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_conversation_info_list_by_favorite_v2_body: {
                                            cursor: e.cursor,
                                            limit: e.limit
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationInfoListByTopV2",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_conversation_info_list_by_top_v2_body: {
                                            cursor: e.cursor,
                                            limit: e.limit
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.GET_CONVERSATION_INFO_LIST_BY_TOP_V2, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "UpdateConversationParticipant",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        update_conversation_participant_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            user_id: e.userId,
                                            role: e.role,
                                            alias: e.alias,
                                            biz_ext: e.bizExt,
                                            is_alias_set: Boolean(e.alias)
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.UPDATE_CONVERSATION_PARTICIPANT, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "SetConversationCoreInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        set_conversation_core_info_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            name: e.name,
                                            desc: e.desc,
                                            icon: e.icon,
                                            notice: e.notice,
                                            ext: e.ext,
                                            biz_ext: e.bizExt
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.SET_CONVERSATION_CORE_INFO, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.set_conversation_core_info_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "RemoveConversationParticipants",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        conversation_remove_participants_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            participants: e.participants,
                                            biz_ext: e.bizExt
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.REMOVE_CONVERSATION_PARTICIPANTS, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.conversation_remove_participants_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "UpsertConversationCoreExtInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        upsert_conversation_core_ext_info_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            ext: e.ext
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.UPSERT_CONVERSATION_CORE_EXT_INFO, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.upsert_conversation_core_ext_info_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "SetConversationSettingInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        set_conversation_setting_info_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            set_stick_on_top: e.stickOnTop,
                                            set_mute: e.mute,
                                            set_favorite: e.favorite,
                                            push_status: e.pushStatus
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.SET_CONVERSATION_SETTING_INFO, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.set_conversation_setting_info_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "UpsertConversationSettingExtInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        upsert_conversation_setting_ext_info_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            ext: e.ext
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.UPSERT_CONVERSATION_SETTING_EXT_INFO, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.upsert_conversation_setting_ext_info_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationParticipantsReadIndexV3",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        participants_read_index_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.GET_CONVERSATION_PARTICIPANTS_READ_INDEX_V3, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.participants_read_index_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationParticipantsMinIndexV3",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        participants_min_index_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.GET_CONVERSATION_PARTICIPANTS_MIN_INDEX_V3, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.participants_min_index_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationParticipantsList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        conversation_participants_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            cursor: e.cursor,
                                            limit: e.limit
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.CONVERSATION_PARTICIPANTS_LIST, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "SendUserAction",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        send_user_action_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            action_type: e.actionType,
                                            extra: e.extra
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.SEND_USER_ACTION, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "SendInputStatus",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        send_input_status_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            status: e.status,
                                            extra: e.extra
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.SEND_INPUT_STATUS, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "DissolveConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        dissolve_conversation_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.DISSOLVE_CONVERSATION, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "ModifyMessageExt",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        modify_message_ext_body: {
                                            conversation_short_id: e.conversationShortId,
                                            message_id: e.messageId,
                                            ticket: e.ticket,
                                            ext: e.ext
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.MODIFY_MESSAGE_EXT, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetUserConversationList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_conversation_list_body: {
                                            con_type: e.type,
                                            cursor: e.cursor,
                                            limit: e.limit,
                                            sort_type: e.sortType,
                                            include_role: e.includeRole,
                                            exclude_role: e.excludeRole,
                                            with_cold: e.withCold,
                                            push_status: e.pushStatus
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.GET_USER_CONVERSATION_LIST, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "UnreadCountReport",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = K.m.RequestBody.create({
                                        unread_count_report_body: {
                                            conv_unread_count: l()(n = e.conv).call(n, (function(e) {
                                                return {
                                                    conv_short_id: e.shortId,
                                                    conversation_type: e.type,
                                                    unread_count: e.count
                                                }
                                            }
                                            )),
                                            total_unread_count: e.total
                                        }
                                    }),
                                    t.abrupt("return", this.send(r, K.m.IMCMD.UNREAD_COUNT_REPORT, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BlockConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        block_conversation_body: {
                                            conversation_id: e.conversationId,
                                            conv_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            block_status: e.status,
                                            block_normal_only: e.normalOnly
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.BLOCK_CONVERSATION, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BlockMember",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        block_members_body: {
                                            conversation_id: e.conversationId,
                                            conv_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            block_time: e.time,
                                            block_status: e.status,
                                            biz_ext: e.bizExt
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.BLOCK_MEMBERS, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.block_members_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetBlockList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_blocklist_body: {
                                            cursor: e.cursor,
                                            limit: e.limit
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.GET_BLOCKLIST, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.get_blocklist_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "SetBlockList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        set_blocklist_body: {
                                            set_block_list: e.applySet,
                                            blocklist: e.blocklist
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.SET_BLOCKLIST, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "CheckInBlockList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        check_in_blocklist_body: {
                                            user_to_check: e.userToCheck
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.CHECK_IN_BLOCKLIST, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.check_in_blocklist_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BroadcastSendMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        broadcast_send_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            ticket: e.ticket,
                                            message_type: e.type,
                                            content: e.content,
                                            client_message_id: e.clientId,
                                            mentioned_users: e.mentionedUsers,
                                            ext: e.ext
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.BROADCAST_SEND_MESSAGE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BroadcastReceiveMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        broadcast_recv_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            cursor: e.cursor,
                                            limit: e.limit,
                                            reverse: F()(e),
                                            pull_type: e.pullType
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.BROADCAST_RECV_MESSAGE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BroadcastUserCounter",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = K.m.RequestBody.create({
                                        broadcast_user_counter_body: {
                                            conversations: l()(n = e.conversations).call(n, (function(e) {
                                                return {
                                                    conversation_short_id: e.shortId,
                                                    conversation_type: e.type
                                                }
                                            }
                                            ))
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(r, K.m.IMCMD.BROADCAST_USER_COUNTER);
                                case 3:
                                    return t.abrupt("return", t.sent.broadcast_user_counter_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "SendP2PMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        send_message_p2p_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            send_type: e.sendType,
                                            message_type: e.msgType,
                                            content: e.content,
                                            client_message_id: e.clientId,
                                            ext: e.ext,
                                            visible_user: e.visibleUser,
                                            invisible_user: e.invisibleUser
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.SEND_MESSAGE_P2P, {
                                        useBeacon: !0,
                                        maxRetryTimes: 1
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "ModifyMessageProperty",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = K.m.RequestBody.create({
                                        modify_message_property_body: {
                                            property_list: {
                                                conversation_id: e.conversationId,
                                                conversation_short_id: e.conversationShortId,
                                                conversation_type: e.conversationType,
                                                server_message_id: e.serverId,
                                                client_message_id: e.clientId,
                                                modify_property_content: l()(n = e.modifyContent).call(n, (function(e) {
                                                    return {
                                                        operation: e.operation,
                                                        key: e.key,
                                                        value: e.value,
                                                        idempotent_id: e.idempotentId
                                                    }
                                                }
                                                ))
                                            },
                                            ticket: e.ticket
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(r, K.m.IMCMD.SET_MESSAGE_PROPERTY, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.modify_message_property_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetUnreadCount",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_unread_count_body: {
                                            get_total: e.total,
                                            conv_short_id: e.shortIds
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.GET_UNREAD_COUNT, {
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return t.abrupt("return", t.sent.get_unread_count_body);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "MarkMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        mark_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            server_message_id: e.serverMessageId,
                                            do_action: e.doAction,
                                            action_type: e.actionType,
                                            sort_time: e.sortTime,
                                            tag: e.tag
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.MARK_MESSAGE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "PullMarkMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        pull_mark_message_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            cursor: e.cursor,
                                            limit: e.limit,
                                            asc: e.asc,
                                            action_type: e.actionType,
                                            tag: e.tag
                                        }
                                    }),
                                    t.abrupt("return", this.sendWithRawBody(n, K.m.IMCMD.PULL_MARK_MESSAGE, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "GetConversationCoreInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        get_conversation_core_info_body: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.GET_CONVERSATION_CORE_INFO, {
                                        inboxType: e.inboxType
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BatchUnmarkMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        batch_unmark_message: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            server_message_ids: e.serverMessageIds,
                                            action_type: e.actionType,
                                            tag: e.tag
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.BATCH_UNMARK_MESSAGE);
                                case 3:
                                    return t.abrupt("return", t.sent.batch_unmark_message);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "MarkMsgUnreadCountReport",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        mark_msg_unread_count_report: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            total_unread_count: e.totalUnreadCount,
                                            tag_unread_count: e.tagUnreadCount
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.MARK_MSG_UNREAD_COUNT_REPORT);
                                case 3:
                                    return t.abrupt("return", t.sent.mark_msg_unread_count_report);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "MarkMsgGetUnreadCount",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        mark_msg_get_unread_count: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            conversation_type: e.conversationType,
                                            get_total: e.getTotal,
                                            tags: e.tags
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.MARK_MSG_GET_UNREAD_COUNT);
                                case 3:
                                    return t.abrupt("return", t.sent.mark_msg_get_unread_count);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "ConvertVoiceToText",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        audio_recognition_body: {
                                            audio: {
                                                content: e.content,
                                                uid: e.uid,
                                                server_message_id: e.server_message_id,
                                                audio_option: e.audioOptions,
                                                conv_short_id: e.conv_short_id
                                            }
                                        }
                                    }),
                                    t.abrupt("return", this.send(n, K.m.IMCMD.AUDIO_RECOGNITION));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "BatchGetConversationParticipantsReadIndex",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = K.m.RequestBody.create({
                                        batch_get_conversation_participants_readindex: {
                                            conversation_id: e.conversationId,
                                            conversation_short_id: e.conversationShortId,
                                            request_from: e.request_from,
                                            min_index_required: e.min_index_required
                                        }
                                    }),
                                    t.next = 3,
                                    this.send(n, K.m.IMCMD.BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX);
                                case 3:
                                    return t.abrupt("return", t.sent.batch_get_conversation_participants_readindex);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            n
        }(n(42267).W)
          , ve = n(4200)
          , le = n.n(ve)
          , pe = n(2936)
          , he = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n() {
                var e;
                return (0,
                a.Z)(this, n),
                (e = t.apply(this, arguments)).localIndex = H.ZERO,
                e
            }
            return (0,
            c.Z)(n, [{
                key: "isMuted",
                get: function() {
                    return !1
                }
            }, {
                key: "isStickOnTop",
                get: function() {
                    return !1
                }
            }, {
                key: "isFavorite",
                get: function() {
                    return !1
                }
            }, {
                key: "toParticipantUserId",
                get: function() {
                    return undefined
                }
            }, {
                key: "setConversationCursor",
                value: function(e) {
                    e > this.localIndex && (this.localIndex = e),
                    this.localIndex = e
                }
            }, {
                key: "getMessageList",
                value: function() {
                    var e, t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(e) {
                        return e.visible
                    }
                    ;
                    return b()(e = this.resolve($.Uk.BroadcastManager).getList(this.id)).call(e, t)
                }
            }, {
                key: "unreadCount",
                get: function() {
                    return 0
                }
            }], [{
                key: "fromServerConversation",
                value: function(e, t, r) {
                    var i = new n(e);
                    return i.id = t.conversation_id,
                    i.shortId = t.conversation_short_id.toString(),
                    i.type = t.conversation_type,
                    i.isOffline = !1,
                    i.coreInfo = new pe._(i,t),
                    i
                }
            }]),
            n
        }(Q.r)
          , fe = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n(e) {
                var r;
                return (0,
                a.Z)(this, n),
                (r = t.call(this, e)).messages = new (N()),
                r.conversation = new (N()),
                r
            }
            return (0,
            c.Z)(n, [{
                key: "upsertOnline",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.resolve($.Uk.ExtensionApi).GetConversationCoreInfo({
                                        conversationId: e.id,
                                        conversationShortId: H.fromString(e.shortId),
                                        conversationType: e.type,
                                        inboxType: e.inboxType
                                    });
                                case 2:
                                    if (n = t.sent,
                                    (r = n.get_conversation_core_info_body) && r.conversation_core_info) {
                                        t.next = 6;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.ConversationNotExist,
                                        msg: "local conversation: ".concat(e.id, " not found online"),
                                        sender: this,
                                        args: {
                                            conversationId: e.id
                                        }
                                    });
                                case 6:
                                    return i = he.fromServerConversation(this.ctx, r.conversation_core_info),
                                    this.conversation.set(e.id, i),
                                    t.abrupt("return", i);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "getWithOnline",
                value: function(e, t, n) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if ((i = this.conversation.get(e)) && !i.isOffline) {
                                        r.next = 8;
                                        break
                                    }
                                    if (t && n) {
                                        r.next = 4;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        msg: "no shortId and type provided",
                                        sender: this
                                    });
                                case 4:
                                    return i || ((i = new he(this.ctx)).id = e,
                                    i.shortId = t,
                                    i.type = K.m.ConversationType.BROADCAST_CHAT,
                                    i.isOffline = !0,
                                    i.coreInfo = new pe._(i)),
                                    r.next = 7,
                                    this.upsertOnline(i);
                                case 7:
                                    i = r.sent;
                                case 8:
                                    return r.abrupt("return", i);
                                case 9:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "upsert",
                value: function(e) {
                    var t, n, r = this.getConversationMsgs(e.conversationId), i = L()(t = r.msgs).call(t, (function(t) {
                        return t && t.clientId === e.clientId
                    }
                    ));
                    i >= 0 && (n = r.msgs[i]),
                    n ? n.type === e.type ? (e = n.merge(e),
                    r.msgs[i] = e) : (j.Y.ctxWarn(this.ctx, "try to merge different msg:", n, e),
                    r.msgs[i] = e) : this.insertMsg(r, e),
                    this.resolve($.Uk.EventBus).emit(z.c5.MessageUpsert, this, e)
                }
            }, {
                key: "getList",
                value: function(e) {
                    var t, r, i, s = this.getConversationMsgs(e), o = s.tail;
                    if (s.front < o)
                        return le()(i = s.msgs).call(i, s.front, o);
                    var a = le()(t = s.msgs).call(t, 0, o)
                      , c = le()(r = s.msgs).call(r, s.front, n.MaxMsgSize);
                    return h()(c).call(c, a)
                }
            }, {
                key: "insertMsg",
                value: function(e, t) {
                    var r = e.tail;
                    e.tail = (e.tail + 1) % n.MaxMsgSize,
                    e.tail === e.front && (e.front = (e.front + 1) % n.MaxMsgSize),
                    e.msgs[r] = t
                }
            }, {
                key: "get",
                value: function(e, t) {
                    var n, r = this.getRaw(e, t);
                    if (!r)
                        throw new X.G({
                            ctx: this.ctx,
                            type: z.NI.MessageNotExist,
                            msg: h()(n = "message ".concat(t, " @ ")).call(n, e, " not exist in local"),
                            sender: this
                        });
                    return r
                }
            }, {
                key: "getConversation",
                value: function(e) {
                    var t = this.conversation.get(e);
                    if (!t)
                        throw new X.G({
                            ctx: this.ctx,
                            msg: "broadcast conversation ".concat(e, " not exist in local"),
                            type: z.NI.ConversationNotExist,
                            sender: this,
                            args: {
                                conversationId: e
                            }
                        });
                    return t
                }
            }, {
                key: "getRaw",
                value: function(e, t) {
                    var n, r, i = this.getConversationMsgs(e), s = L()(n = i.msgs).call(n, (function(e) {
                        return e && e.clientId === t
                    }
                    ));
                    return s >= 0 && (r = i.msgs[s]),
                    r
                }
            }, {
                key: "getByServerId",
                value: function(e, t) {
                    var n, r, i = this.getConversationMsgs(e), s = L()(n = i.msgs).call(n, (function(e) {
                        return e && e.serverId === t
                    }
                    ));
                    if (s < 0)
                        throw new X.G({
                            ctx: this.ctx,
                            type: z.NI.MessageNotExist,
                            msg: h()(r = "message ".concat(t, " @ ")).call(r, e, " not exist in local"),
                            sender: this
                        });
                    return i.msgs[s]
                }
            }, {
                key: "getConversationMsgs",
                value: function(e) {
                    var t = this.messages.get(e);
                    return t || (t = {
                        msgs: new Array(n.MaxMsgSize),
                        front: 0,
                        tail: 0
                    },
                    this.messages.set(e, t)),
                    t
                }
            }, {
                key: "processNewMessagesFromPull",
                value: function(e, t, n) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i, o;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    r = (0,
                                    s.Z)(e),
                                    n.prev = 1,
                                    r.s();
                                case 3:
                                    if ((i = r.n()).done) {
                                        n.next = 10;
                                        break
                                    }
                                    return (o = i.value).ext || (o.ext = {}),
                                    n.next = 8,
                                    this.processNewMessage(o, t);
                                case 8:
                                    n.next = 3;
                                    break;
                                case 10:
                                    n.next = 15;
                                    break;
                                case 12:
                                    n.prev = 12,
                                    n.t0 = n.catch(1),
                                    r.e(n.t0);
                                case 15:
                                    return n.prev = 15,
                                    r.f(),
                                    n.finish(15);
                                case 18:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[1, 12, 15, 18]])
                    }
                    )))
                }
            }, {
                key: "processNewMessage",
                value: function(e, t) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (e.ext || (e.ext = {}),
                                    e.source = t,
                                    !(e.type >= 0)) {
                                        n.next = 6;
                                        break
                                    }
                                    return n.abrupt("return", this.processTextMessage(e));
                                case 6:
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.UnknownMessageType,
                                        msg: h()(r = "unknown message type: ".concat(e.type, " for msg:")).call(r, e.clientId),
                                        sender: this
                                    });
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "dispose",
                value: function() {
                    this.conversation.clear(),
                    this.messages.clear()
                }
            }, {
                key: "processTextMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i, s;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.isNormalMsg) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", e);
                                case 2:
                                    return n = e.source !== undefined && (e.source === z.v$.Online || e.source === z.v$.BroadcastLoadMore),
                                    r = this.getRaw(e.conversationId, e.clientId),
                                    i = (null == r ? void 0 : r.flightStatus) !== undefined && n,
                                    this.upsert(e),
                                    s = this.getRaw(e.conversationId, e.clientId),
                                    r ? i && s.flightStatus !== z.b3.Received && (s.flightStatus = z.b3.Received,
                                    this.resolve($.Uk.EventBus).emit(z.c5.ReceiveBroadcastSelfMessage, this, s),
                                    this.upsert(s)) : n && (e.sender !== this.ctx.option.userId ? this.resolve($.Uk.EventBus).emit(z.c5.ReceiveBroadcastNewMessage, this, e) : this.resolve($.Uk.EventBus).emit(z.c5.ReceiveBroadcastSelfMessage, this, e)),
                                    t.abrupt("return", e);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            n
        }($.mA);
        fe.MaxMsgSize = 1001;
        var ge, me = n(44587), xe = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            c.Z)(n, [{
                key: "process",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.data.type !== K.m.MessageType.MESSAGE_TYPE_UPDATE_MESSAGE_PROPERTY) {
                                        t.next = 4;
                                        break
                                    }
                                    return e.needContinue = !1,
                                    t.next = 4,
                                    this.handlePropertyCmd(e.data);
                                case 4:
                                    return t.abrupt("return", e);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handlePropertyCmd",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    (n = this.resolve($.Uk.MessageManager).getRaw(e.conversationId, e.clientId)) ? (n.version = e.version,
                                    j.Y.ctxDebug(this.ctx, "merge property, local:", n.property, "server:", e.property),
                                    n.property = e.property,
                                    this.resolve($.Uk.MessageManager).upsert(n),
                                    this.resolve($.Uk.EventBus).emit(z.c5.MessagePropertyUpsert, this, n)) : j.Y.ctxDebug(this.ctx, "modify property cmd msg not exist in local", e);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            n
        }(me.f);
        !function(e) {
            e[e.BlockUser = 1] = "BlockUser",
            e[e.BlockConvNormalOnly = 2] = "BlockConvNormalOnly",
            e[e.BlockConvAll = 3] = "BlockConvAll"
        }(ge || (ge = {}));
        var ye = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            c.Z)(n, [{
                key: "process",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.data.type === K.m.MessageType.MESSAGE_TYPE_BLOCK_COMMAND && (e.needContinue = !1,
                                    this.handleBlockCmd(e.data, e.conv)),
                                    t.abrupt("return", e);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handleBlockCmd",
                value: function(e, t) {
                    var n = this
                      , r = ne.parse(e.content)
                      , i = r.block_status;
                    if (r.type === ge.BlockUser) {
                        var o = r.userID;
                        if (null === o || o === undefined || 0 === o.length)
                            return;
                        var a = this.resolve($.Uk.ParticipantManager).getMapRaw(t.id);
                        if (!a)
                            return;
                        var c, u = (0,
                        s.Z)(o);
                        try {
                            for (u.s(); !(c = u.n()).done; ) {
                                var d = c.value
                                  , v = null == d ? void 0 : d.toString();
                                if (a.has(v)) {
                                    var p = a.get(v);
                                    p.blocked = Boolean(i);
                                    var h = r.blockTime[v];
                                    p.leftBlockTime = h ? H.fromValue(h) : undefined,
                                    this.resolve($.Uk.ParticipantManager).upsert(t.id, p),
                                    this.resolve($.Uk.EventBus).emit(z.c5.ParticipantBlock, this, {
                                        participant: p,
                                        message: e
                                    })
                                }
                            }
                        } catch (f) {
                            u.e(f)
                        } finally {
                            u.f()
                        }
                    } else
                        this.resolve($.Uk.ConversationManager).refreshAsync(t).then((function(t) {
                            l()(t).call(t, (function(t) {
                                return n.resolve($.Uk.EventBus).emit(z.c5.ConversationBlock, n, {
                                    conversation: t,
                                    message: e
                                })
                            }
                            ))
                        }
                        ))
                }
            }]),
            n
        }(me.f)
          , ke = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            c.Z)(n, [{
                key: "process",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.data.type === K.m.MessageType.MESSAGE_TYPE_MARK_COMMAND ? (e.needContinue = !1,
                                    this.handlePinCmd(e.data, e.conv)) : e.data.type === K.m.MessageType.MESSAGE_TYPE_BATCH_UNMARK_COMMAND && (e.needContinue = !1,
                                    this.handleBatchUnmarkCmd(e.data, e.conv)),
                                    t.abrupt("return", e);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "handlePinCmd",
                value: function(e, t) {
                    var n = ne.parse(e.content).server_message_id.toString()
                      , r = this.resolve($.Uk.MessageManager).getByServerIdRaw(t.id, n);
                    r ? r.version.gt(e.version) ? j.Y.ctxWarn(this.ctx, "server message is older, localMsg=", r, "serverMsg=", e) : (r.ext = e.ext,
                    r.version = e.version,
                    this.resolve($.Uk.MessageManager).upsert(r)) : j.Y.ctxWarn(this.ctx, "local message not exist, serverMsg=", e)
                }
            }, {
                key: "handleBatchUnmarkCmd",
                value: function(e, t) {
                    for (var n, r, i = ne.parse(null !== (r = null === (n = null == e ? void 0 : e.ext) || void 0 === n ? void 0 : n[z.v9.MarkMessageNewExt]) && void 0 !== r ? r : "{}"), s = 0, o = M()(i); s < o.length; s++) {
                        var a = o[s]
                          , c = this.resolve($.Uk.MessageManager).getByServerIdRaw(t.id, a.toString());
                        c ? (c.ext = S()(c.ext, i[a]),
                        c.version = e.version,
                        this.resolve($.Uk.MessageManager).upsert(c)) : j.Y.ctxWarn(this.ctx, "local message not exist, serverMsg=", e)
                    }
                }
            }]),
            n
        }(me.f)
          , _e = (0,
        c.Z)((function e() {
            (0,
            a.Z)(this, e)
        }
        ))
          , be = n(57442)
          , Ie = function(e) {
            (0,
            u.Z)(n, e);
            var t = (0,
            d.Z)(n);
            function n() {
                return (0,
                a.Z)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            c.Z)(n, [{
                key: "leaveConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.LeaveConversation({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                    this.resolve($.Uk.ParticipantManager).delete(e.conversation.id, [this.ctx.option.userId]);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "deleteMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.message.serverId) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.MessageNotReady,
                                        msg: "message ".concat(e.message, " is not ready"),
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 2:
                                    if (t.prev = 2,
                                    this.resolve($.Uk.MessageManager).delete(e.message.conversationId, e.message.serverId),
                                    !e.localOnly) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    return n = this.resolve($.Uk.ConversationManager).get(e.message.conversationId),
                                    t.next = 9,
                                    this.api.DeleteMessage({
                                        conversationId: e.message.conversationId,
                                        conversationShortId: H.fromString(e.message.conversationShortId),
                                        conversationType: e.message.conversationType,
                                        serverId: H.fromString(e.message.serverId),
                                        inboxType: n.inboxType
                                    });
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11,
                                    t.t0 = t.catch(2),
                                    j.Y.ctxWarn(this.ctx, "delete message error, may lost server operation", t.t0);
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 11]])
                    }
                    )))
                }
            }, {
                key: "deleteConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    this.resolve($.Uk.ConversationManager).delete(e.conversation.id),
                                    !e.localOnly) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    return n = e.conversation.lastMessageIndex,
                                    t.next = 7,
                                    this.api.MarkConversationDelete({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        lastPullIndex: n,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 7:
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(0),
                                    j.Y.ctxWarn(this.ctx, "delete conversation error, may lost server operation", t.t0);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 9]])
                    }
                    )))
                }
            }, {
                key: "getConversationListByTop",
                value: function() {
                    var e, t, n, r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function i() {
                        var s, o, a, c, u, d, v = this;
                        return V().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return r.inboxType === undefined && (r.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    o = [],
                                    i.next = 4,
                                    this.api.GetConversationInfoListByTopV2({
                                        cursor: H.fromValue(null !== (e = r.cursor) && void 0 !== e ? e : "0"),
                                        limit: null !== (t = r.limit) && void 0 !== t ? t : 10,
                                        inboxType: r.inboxType
                                    });
                                case 4:
                                    return a = i.sent,
                                    c = null === (n = a.body) || void 0 === n ? void 0 : n.get_conversation_info_list_by_top_v2_body,
                                    u = c.conversation_info_list,
                                    d = l()(s = l()(u).call(u, (function(e) {
                                        return Q.r.fromServerConversation(v.ctx, e, a.log_id)
                                    }
                                    ))).call(s, (function(e) {
                                        return v.resolve($.Uk.ConversationManager).upsert(e)
                                    }
                                    )),
                                    o = h()(o).call(o, d),
                                    i.abrupt("return", {
                                        conversation: o,
                                        hasMore: null == c ? void 0 : c.has_more,
                                        cursor: null == c ? void 0 : c.next_cursor
                                    });
                                case 10:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "getConversationListByFavorite",
                value: function() {
                    var e, t, n, r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function i() {
                        var s, o, a, c, u, d, v = this;
                        return V().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return r.inboxType === undefined && (r.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    o = [],
                                    i.next = 4,
                                    this.api.GetConversationInfoListByFavoriteV2({
                                        cursor: H.fromValue(null !== (e = r.cursor) && void 0 !== e ? e : "0"),
                                        limit: null !== (t = r.limit) && void 0 !== t ? t : 10,
                                        inboxType: r.inboxType
                                    });
                                case 4:
                                    return a = i.sent,
                                    c = null === (n = a.body) || void 0 === n ? void 0 : n.get_conversation_info_list_by_favorite_v2_body,
                                    u = null == c ? void 0 : c.conversation_info_list,
                                    d = l()(s = l()(u).call(u, (function(e) {
                                        return Q.r.fromServerConversation(v.ctx, e, a.log_id)
                                    }
                                    ))).call(s, (function(e) {
                                        return v.resolve($.Uk.ConversationManager).upsert(e)
                                    }
                                    )),
                                    o = h()(o).call(o, d),
                                    i.abrupt("return", {
                                        conversation: o,
                                        hasMore: null == c ? void 0 : c.has_more,
                                        cursor: null == c ? void 0 : c.next_cursor
                                    });
                                case 10:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "addParticipants",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i, s, o;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return i = g()(e.participant) ? e.participant : [e.participant],
                                    r.next = 3,
                                    this.api.AddConversationParticipants({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        participants: l()(i).call(i, (function(e) {
                                            return H.fromValue(e)
                                        }
                                        )),
                                        bizExt: e.bizExt,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 3:
                                    if (0 === (null == (s = r.sent) ? void 0 : s.status)) {
                                        r.next = 6;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        success: !1,
                                        failedParticipant: i,
                                        payload: e.conversation,
                                        checkCode: s.check_code,
                                        checkMsg: s.check_message,
                                        statusCode: s.status,
                                        statusMsg: s.extra_info
                                    });
                                case 6:
                                    return o = null !== (n = null === (t = s.failed_participants) || void 0 === t ? void 0 : l()(t).call(t, (function(e) {
                                        return e.toString()
                                    }
                                    ))) && void 0 !== n ? n : [],
                                    r.abrupt("return", {
                                        success: !0,
                                        failedParticipant: o,
                                        payload: e.conversation,
                                        checkCode: s.check_code,
                                        checkMsg: s.check_message,
                                        statusCode: s.status,
                                        statusMsg: s.extra_info
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "removeParticipants",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i, s, o, a, c;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return g()(e.participant) || (e.participant = [e.participant]),
                                    s = l()(i = e.participant).call(i, (function(e) {
                                        return H.fromString("string" == typeof e ? e : e.userId)
                                    }
                                    )),
                                    r.next = 4,
                                    this.api.RemoveConversationParticipants({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        participants: s,
                                        bizExt: e.bizExt,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 4:
                                    if (0 === (null == (o = r.sent) ? void 0 : o.status)) {
                                        r.next = 7;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        success: !1,
                                        failedParticipant: l()(s).call(s, (function(e) {
                                            return e.toString()
                                        }
                                        )),
                                        body: o,
                                        payload: e.conversation,
                                        checkCode: o.check_code,
                                        checkMsg: o.check_message,
                                        statusCode: o.status,
                                        statusMsg: o.extra_info
                                    });
                                case 7:
                                    return a = [],
                                    c = null !== (n = null === (t = o.failed_participants) || void 0 === t ? void 0 : l()(t).call(t, (function(e) {
                                        return e.toString()
                                    }
                                    ))) && void 0 !== n ? n : [],
                                    x()(s).call(s, (function(e) {
                                        k()(c).call(c, e.toString()) || a.push(e.toString())
                                    }
                                    )),
                                    r.abrupt("return", {
                                        success: !0,
                                        body: o,
                                        failedParticipant: c,
                                        payload: e.conversation,
                                        checkCode: o.check_code,
                                        checkMsg: o.check_message,
                                        statusCode: o.status,
                                        statusMsg: o.extra_info
                                    });
                                case 11:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "updateParticipant",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i, s, o;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.api.UpdateConversationParticipant({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        role: e.role,
                                        alias: e.alias,
                                        bizExt: e.bizExt,
                                        inboxType: e.conversation.inboxType,
                                        userId: H.fromValue(e.userId)
                                    });
                                case 2:
                                    if (i = r.sent,
                                    s = null === (t = null == i ? void 0 : i.body) || void 0 === t ? void 0 : t.update_conversation_participant_body,
                                    0 !== (null == i ? void 0 : i.status_code) || !(null === (n = null == s ? void 0 : s.participant) || void 0 === n ? void 0 : n.user_id) || !(null == i ? void 0 : i.log_id)) {
                                        r.next = 7;
                                        break
                                    }
                                    return o = te.Q.fromServerParticipant(this.ctx, s.participant, e.conversation, i.log_id),
                                    r.abrupt("return", {
                                        success: !0,
                                        payload: o,
                                        checkCode: s.check_code,
                                        checkMsg: s.check_message,
                                        statusCode: i.status_code,
                                        statusMsg: s.extra_info,
                                        body: s
                                    });
                                case 7:
                                    return r.abrupt("return", {
                                        success: !1,
                                        payload: null,
                                        checkCode: s.check_code,
                                        checkMsg: s.check_message,
                                        statusCode: i.status_code,
                                        statusMsg: s.extra_info,
                                        body: s
                                    });
                                case 8:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "setConversationSettingInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.SetConversationSettingInfo({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        stickOnTop: e.stickOnTop,
                                        mute: e.mute,
                                        favorite: e.favorite,
                                        inboxType: e.conversation.inboxType,
                                        pushStatus: e.pushStatus
                                    });
                                case 2:
                                    if (0 === (null == (n = t.sent) ? void 0 : n.status)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        success: !1,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 5:
                                    return t.next = 7,
                                    this.resolve($.Uk.ConversationManager).refreshAsync(e.conversation);
                                case 7:
                                    return t.abrupt("return", {
                                        success: !0,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "setConversationCoreInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.SetConversationCoreInfo({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        name: e.name,
                                        desc: e.desc,
                                        icon: e.icon,
                                        notice: e.notice,
                                        ext: e.ext,
                                        bizExt: e.bizExt,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                    if (0 === (null == (n = t.sent) ? void 0 : n.status)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        success: !1,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 5:
                                    return t.next = 7,
                                    this.resolve($.Uk.ConversationManager).refreshAsync(e.conversation);
                                case 7:
                                    return t.abrupt("return", {
                                        success: !0,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "upsertConversationSettingExtInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.UpsertConversationSettingExtInfo({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        ext: e.ext,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                    if (0 === (null == (n = t.sent) ? void 0 : n.status)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        success: !1,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 5:
                                    return t.next = 7,
                                    this.resolve($.Uk.ConversationManager).refreshAsync(e.conversation);
                                case 7:
                                    return t.abrupt("return", {
                                        success: !0,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "setConversationWeakMuteConfig",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return i = ne.stringify((0,
                                    o.Z)({}, z.O9, {
                                        white_uids: null !== (t = e.config.whiteUids) && void 0 !== t ? t : [],
                                        white_msg_types: null !== (n = e.config.whiteMsgTypes) && void 0 !== n ? n : []
                                    })),
                                    r.abrupt("return", this.upsertConversationSettingExtInfo({
                                        conversation: e.conversation,
                                        ext: (0,
                                        o.Z)({}, z.v9.PushPartDisableConfig, i)
                                    }));
                                case 2:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "upsertConversationCoreExtInfo",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.UpsertConversationCoreExtInfo({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        ext: e.ext,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                    if (0 === (null == (n = t.sent) ? void 0 : n.status)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        success: !1,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 5:
                                    return t.next = 7,
                                    this.resolve($.Uk.ConversationManager).refreshAsync(e.conversation);
                                case 7:
                                    return t.abrupt("return", {
                                        success: !0,
                                        payload: e.conversation,
                                        checkCode: n.check_code,
                                        checkMsg: n.check_message,
                                        statusCode: n.status,
                                        statusMsg: n.extra_info
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "getMessageReadReceipt",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i, s, o, a = this;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.message.isRecalled && e.message.isFromMe && !e.message.isOffline) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        finishedParticipantIds: [],
                                        expectedParticipantIds: []
                                    });
                                case 2:
                                    if (n = this.resolve($.Uk.ConversationManager).get(e.message.conversationId),
                                    r = this.resolve($.Uk.ParticipantManager).getRaw(n.id),
                                    !e.syncFromServer && 0 !== r.length) {
                                        t.next = 17;
                                        break
                                    }
                                    if (n.type !== K.m.ConversationType.ONE_TO_ONE_CHAT || 0 !== r.length) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 8,
                                    this.getConversationParticipants({
                                        conversation: n
                                    });
                                case 8:
                                    if (n.type !== K.m.ConversationType.GROUP_CHAT) {
                                        t.next = 15;
                                        break
                                    }
                                    if (0 !== r.length) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 12,
                                    this.getConversationParticipants({
                                        conversation: n
                                    });
                                case 12:
                                    t.next = 15;
                                    break;
                                case 14:
                                    this.getConversationParticipants({
                                        conversation: n
                                    });
                                case 15:
                                    return t.next = 17,
                                    this.updateConversationReadReceipt({
                                        conversation: n,
                                        batchFetch: Boolean(e.batchFetch)
                                    });
                                case 17:
                                    if (0 !== (r = this.resolve($.Uk.ParticipantManager).getRaw(n.id)).length) {
                                        t.next = 20;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        finishedParticipantIds: [],
                                        expectedParticipantIds: []
                                    });
                                case 20:
                                    if (e.message.indexInConversation) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        finishedParticipantIds: [],
                                        expectedParticipantIds: l()(i = b()(r).call(r, (function(e) {
                                            return e.userId !== a.ctx.option.userId
                                        }
                                        ))).call(i, (function(e) {
                                            return e.userId
                                        }
                                        ))
                                    });
                                case 22:
                                    return s = [],
                                    o = [],
                                    x()(r).call(r, (function(t) {
                                        t.minIndex.gt(e.message.indexInConversation) || (t.userId !== a.ctx.option.userId && o.push(t.userId.toString()),
                                        (t.readOrder.gte(e.message.orderInConversation) || t.readIndex.gte(e.message.indexInConversation)) && t.userId !== a.ctx.option.userId && s.push(t.userId.toString()))
                                    }
                                    )),
                                    t.abrupt("return", {
                                        finishedParticipantIds: s,
                                        expectedParticipantIds: o
                                    });
                                case 26:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "getConversationParticipants",
                value: function(e) {
                    return this.resolve($.Uk.ParticipantManager).getParticipant(e.conversation)
                }
            }, {
                key: "getConversationParticipantsAsync",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i, s, o, a;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    i = !0,
                                    s = H.ZERO,
                                    o = 50;
                                case 3:
                                    if (!i) {
                                        r.next = 11;
                                        break
                                    }
                                    return r.next = 6,
                                    this.getConversationParticipantsByPage({
                                        cursor: s,
                                        limit: o,
                                        conversation: e.conversation
                                    });
                                case 6:
                                    a = r.sent,
                                    i = null !== (t = null == a ? void 0 : a.hasMore) && void 0 !== t && t,
                                    s = null !== (n = null == a ? void 0 : a.cursor) && void 0 !== n ? n : H.ZERO,
                                    r.next = 3;
                                    break;
                                case 11:
                                    return r.abrupt("return", this.resolve($.Uk.ParticipantManager).get(e.conversation.id));
                                case 12:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getConversationParticipantsByPage",
                value: function(e) {
                    var t, n, r, i, s, o;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function a() {
                        var c, u, d, v, l, p, h, f = this;
                        return V().wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return u = null !== (t = e.cursor) && void 0 !== t ? t : H.ZERO,
                                    d = null !== (n = e.limit) && void 0 !== n ? n : 50,
                                    a.next = 4,
                                    this.api.GetConversationParticipantsList({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        cursor: u ? H.fromValue(u) : H.ZERO,
                                        limit: d,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 4:
                                    return v = a.sent,
                                    l = null === (i = null === (r = v.body) || void 0 === r ? void 0 : r.conversation_participants_body) || void 0 === i ? void 0 : i.participants_page,
                                    p = null !== (s = null == l ? void 0 : l.has_more) && void 0 !== s && s,
                                    u = null !== (o = null == l ? void 0 : l.cursor) && void 0 !== o ? o : H.ZERO,
                                    h = [],
                                    null == l || x()(c = l.participants).call(c, (function(t) {
                                        h.push(te.Q.fromServerParticipant(f.ctx, t, e.conversation, v.log_id))
                                    }
                                    )),
                                    this.resolve($.Uk.ParticipantManager).upsertBatch(e.conversation.id, h),
                                    this.resolve($.Uk.ConversationManager).upsert(e.conversation),
                                    a.abrupt("return", {
                                        participants: h,
                                        hasMore: p,
                                        cursor: u
                                    });
                                case 13:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, this)
                    }
                    )))
                }
            }, {
                key: "updateConversationReadReceipt",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i, s, o, a = this;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getReadReceipt({
                                        conversation: e.conversation,
                                        batchFetch: e.batchFetch
                                    });
                                case 2:
                                    n = t.sent,
                                    r = n.readIndexs,
                                    i = n.minIndexs,
                                    s = this.resolve($.Uk.ParticipantManager).getRaw(e.conversation.id),
                                    o = !1,
                                    x()(r).call(r, (function(e) {
                                        var t = b()(s).call(s, (function(t) {
                                            return t.userId === e.user_id.toString()
                                        }
                                        ))[0];
                                        t && (t.readIndex.equals(e.index) || (o = !0),
                                        t.readIndex = e.index)
                                    }
                                    )),
                                    x()(i).call(i, (function(e) {
                                        var t = b()(s).call(s, (function(t) {
                                            return t.userId === e.user_id.toString()
                                        }
                                        ))[0];
                                        t && (t.minIndex.equals(e.index) || (o = !0),
                                        t.minIndex = e.index)
                                    }
                                    )),
                                    o && (this.resolve($.Uk.EventBus).emit(z.c5.ConversationUpsert, this, e.conversation),
                                    this.resolve($.Uk.EventBus).emitEmpty(z.c5.ConversationChange, this),
                                    x()(s).call(s, (function(t) {
                                        return a.resolve($.Uk.ParticipantManager).upsert(e.conversation.id, t)
                                    }
                                    )));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "sendUserAction",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.SendUserAction({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        extra: e.ext,
                                        actionType: e.actionType,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "sendInputStatus",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.SendInputStatus({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        extra: e.ext,
                                        status: e.status,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "sendP2PMessage",
                value: function(e) {
                    var t, n, r, i, s;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function o() {
                        return V().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    return o.next = 2,
                                    this.api.SendP2PMessage({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromValue(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        sendType: e.sendType,
                                        msgType: e.msgType,
                                        content: e.content,
                                        clientId: (0,
                                        ee.k)(),
                                        ext: null !== (t = e.ext) && void 0 !== t ? t : {},
                                        visibleUser: null !== (r = null === (n = e.visibleUser) || void 0 === n ? void 0 : l()(n).call(n, (function(e) {
                                            return H.fromValue(e)
                                        }
                                        ))) && void 0 !== r ? r : [],
                                        invisibleUser: null !== (s = null === (i = e.invisibleUser) || void 0 === i ? void 0 : l()(i).call(i, (function(e) {
                                            return H.fromValue(e)
                                        }
                                        ))) && void 0 !== s ? s : [],
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, this)
                    }
                    )))
                }
            }, {
                key: "dissolveConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.api.DissolveConversation({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                    this.resolve($.Uk.ConversationManager).delete(e.conversation.id),
                                    this.resolve($.Uk.EventBus).emit(z.c5.ConversationDissolve, this, e.conversation),
                                    this.resolve($.Uk.EventBus).emitEmpty(z.c5.ConversationChange, this);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "upsertMessageExt",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i, s;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.message.serverId) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.MessageOffline,
                                        msg: "message is offline",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 2:
                                    for (n = 0,
                                    r = M()(e.ext); n < r.length; n++)
                                        i = r[n],
                                        w()(i).call(i, "s:") && delete e.ext[i];
                                    return s = this.resolve($.Uk.ConversationManager).get(e.message.conversationId),
                                    t.next = 6,
                                    this.api.ModifyMessageExt({
                                        conversationShortId: H.fromValue(e.message.conversationShortId),
                                        messageId: H.fromValue(e.message.serverId),
                                        ext: e.ext,
                                        ticket: s.ticket,
                                        inboxType: s.inboxType
                                    });
                                case 6:
                                    return e.message.ext = S()(e.message.ext, e.ext),
                                    this.resolve($.Uk.MessageManager).upsert(e.message),
                                    t.abrupt("return", e.message);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "getUserConversationList",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i, s, o, a, c = this;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (e.inboxType === undefined && (e.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    e.type === K.m.ConversationType.GROUP_CHAT || e.includeRole === undefined && e.excludeRole === undefined) {
                                        r.next = 5;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        msg: "role filter only available in group chat",
                                        sender: this,
                                        reachServer: !1
                                    });
                                case 5:
                                    if (e.includeRole === undefined || e.excludeRole === undefined) {
                                        r.next = 7;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        msg: "conflict include and exclude",
                                        sender: this,
                                        reachServer: !1
                                    });
                                case 7:
                                    return r.next = 9,
                                    this.api.GetUserConversationList({
                                        type: e.type,
                                        cursor: e.cursor ? H.fromValue(e.cursor) : H.ZERO,
                                        limit: e.limit ? H.fromValue(e.limit) : H.fromNumber(20),
                                        sortType: null !== (t = e.sortType) && void 0 !== t ? t : K.m.SortType.JOIN_TIME,
                                        includeRole: e.includeRole,
                                        excludeRole: e.excludeRole,
                                        withCold: e.withCold,
                                        inboxType: e.inboxType
                                    });
                                case 9:
                                    return s = r.sent,
                                    o = null === (n = s.body) || void 0 === n ? void 0 : n.get_conversation_list_body,
                                    a = l()(i = o.list).call(i, (function(e) {
                                        return Q.r.fromServerConversation(c.ctx, e, s.log_id)
                                    }
                                    )),
                                    x()(a).call(a, (function(e) {
                                        return c.resolve($.Uk.ConversationManager).upsert(e)
                                    }
                                    )),
                                    r.abrupt("return", {
                                        conversation: a,
                                        hasMore: null == o ? void 0 : o.has_more,
                                        cursor: null == o ? void 0 : o.next_cursor
                                    });
                                case 14:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "unreadCountReport",
                value: function() {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function e() {
                        var t, n, r, i, o, a = this;
                        return V().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.ctx.option.unreadCountReport) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        msg: "unread count report not enabled",
                                        sender: this,
                                        type: z.NI.InvalidParam,
                                        reachServer: !1
                                    });
                                case 2:
                                    t = this.resolve($.Uk.ConversationManager).getConversationArray(),
                                    n = (0,
                                    ie.vM)(t, (function(e) {
                                        return e.inboxType.toString()
                                    }
                                    )),
                                    r = V().mark((function e() {
                                        var t, r, c, u, d, v, l, p;
                                        return V().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    t = o[i],
                                                    r = n[t],
                                                    c = [],
                                                    u = 0,
                                                    x()(r).call(r, (function(e) {
                                                        var t = a.getNormalMsgUnreadCount(e);
                                                        u += t,
                                                        c.push({
                                                            shortId: H.fromString(e.shortId),
                                                            count: H.fromNumber(t),
                                                            type: e.type
                                                        })
                                                    }
                                                    )),
                                                    d = (0,
                                                    ie.F3)(c, 30),
                                                    v = (0,
                                                    s.Z)(d),
                                                    e.prev = 7,
                                                    v.s();
                                                case 9:
                                                    if ((l = v.n()).done) {
                                                        e.next = 21;
                                                        break
                                                    }
                                                    return p = l.value,
                                                    e.prev = 11,
                                                    e.next = 14,
                                                    a.api.UnreadCountReport({
                                                        total: H.fromValue(u),
                                                        conv: p,
                                                        inboxType: R()(t, 10)
                                                    });
                                                case 14:
                                                    e.next = 19;
                                                    break;
                                                case 16:
                                                    e.prev = 16,
                                                    e.t0 = e.catch(11),
                                                    j.Y.ctxWarn(a.ctx, "report unread error:", e.t0, "conv:", r);
                                                case 19:
                                                    e.next = 9;
                                                    break;
                                                case 21:
                                                    e.next = 26;
                                                    break;
                                                case 23:
                                                    e.prev = 23,
                                                    e.t1 = e.catch(7),
                                                    v.e(e.t1);
                                                case 26:
                                                    return e.prev = 26,
                                                    v.f(),
                                                    e.finish(26);
                                                case 29:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[7, 23, 26, 29], [11, 16]])
                                    }
                                    )),
                                    i = 0,
                                    o = M()(n);
                                case 6:
                                    if (!(i < o.length)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.delegateYield(r(), "t0", 8);
                                case 8:
                                    i++,
                                    e.next = 6;
                                    break;
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "getServerUnreadCountByUser",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return e.inboxType === undefined && (e.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    r.next = 3,
                                    this.api.GetUnreadCount({
                                        total: !0,
                                        inboxType: e.inboxType,
                                        shortIds: []
                                    });
                                case 3:
                                    return i = r.sent,
                                    r.abrupt("return", null !== (n = null === (t = null == i ? void 0 : i.total_unread_count) || void 0 === t ? void 0 : t.toNumber()) && void 0 !== n ? n : 0);
                                case 5:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getServerUnreadCountByConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, s, o, a, c, u, d, v, p, h, f, g, m, x, y;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    n = new (N()),
                                    r = (0,
                                    ie.vM)(e.conversation, (function(e) {
                                        return e.inboxType.toString()
                                    }
                                    )),
                                    s = 0,
                                    o = M()(r);
                                case 3:
                                    if (!(s < o.length)) {
                                        t.next = 14;
                                        break
                                    }
                                    return u = o[s],
                                    d = l()(a = r[u]).call(a, (function(e) {
                                        return H.fromString(e.shortId)
                                    }
                                    )),
                                    v = new (N())(l()(c = r[u]).call(c, (function(e) {
                                        return [e.shortId, e]
                                    }
                                    ))),
                                    t.next = 9,
                                    this.api.GetUnreadCount({
                                        total: !1,
                                        shortIds: d,
                                        inboxType: R()(u, 10)
                                    });
                                case 9:
                                    for (p = t.sent,
                                    h = 0,
                                    f = O()(p.conv_unread_count); h < f.length; h++)
                                        g = (0,
                                        i.Z)(f[h], 2),
                                        m = g[0],
                                        x = g[1],
                                        y = (0,
                                        ie.w9)(m).toString(),
                                        v.has(y) && n.set(v.get(y), x.toNumber());
                                case 11:
                                    s++,
                                    t.next = 3;
                                    break;
                                case 14:
                                    return t.abrupt("return", n);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "blockConversation",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.normalOnly === undefined && (e.normalOnly = !1),
                                    t.next = 3,
                                    this.api.BlockConversation({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromValue(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        status: e.block ? K.m.BlockStatus.BLOCK : K.m.BlockStatus.UNBLOCK,
                                        normalOnly: e.normalOnly,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 3:
                                    return t.next = 5,
                                    this.resolve($.Uk.ConversationManager).refreshAsync(e.conversation);
                                case 5:
                                    return t.abrupt("return", e.conversation);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "blockMember",
                value: function(e) {
                    var t, n, r;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function i() {
                        var s, o, a, c, u, d, v, l = this;
                        return V().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return s = {},
                                    e.blockDuration !== undefined && x()(o = M()(e.blockDuration)).call(o, (function(t) {
                                        s[t] = H.fromValue(e.blockDuration[t])
                                    }
                                    )),
                                    i.next = 4,
                                    this.api.BlockMember({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromValue(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        status: e.block ? K.m.BlockStatus.BLOCK : K.m.BlockStatus.UNBLOCK,
                                        time: s,
                                        bizExt: null !== (t = e.bizExt) && void 0 !== t ? t : {},
                                        inboxType: e.conversation.inboxType
                                    });
                                case 4:
                                    for (a = i.sent,
                                    c = this.resolve($.Uk.ParticipantManager).getMap(e.conversation.id),
                                    u = function() {
                                        var t = v[d];
                                        if (!(null === (r = null == a ? void 0 : a.failed_members) || void 0 === r ? void 0 : D()(r).call(r, (function(e) {
                                            return H.fromValue(t).eq(e)
                                        }
                                        ))) && c.has(t)) {
                                            var n = c.get(t);
                                            n.blocked = e.block,
                                            l.resolve($.Uk.ParticipantManager).upsert(e.conversation.id, n)
                                        }
                                    }
                                    ,
                                    d = 0,
                                    v = M()(null !== (n = e.blockDuration) && void 0 !== n ? n : {}); d < v.length; d++)
                                        u();
                                    return i.abrupt("return", e.conversation);
                                case 9:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "getBlockList",
                value: function() {
                    var e, t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return t.inboxType === undefined && (t.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    n.next = 3,
                                    this.api.GetBlockList({
                                        cursor: t.cursor ? H.fromValue(t.cursor) : H.ZERO,
                                        limit: null !== (e = t.limit) && void 0 !== e ? e : 20,
                                        inboxType: t.inboxType
                                    });
                                case 3:
                                    return i = n.sent,
                                    n.abrupt("return", {
                                        blockList: l()(r = i.user_info).call(r, (function(e) {
                                            return {
                                                userId: e.user_id.toString(),
                                                createTime: e.create_time.toString()
                                            }
                                        }
                                        )),
                                        hasMore: null == i ? void 0 : i.has_more,
                                        cursor: null == i ? void 0 : i.next_cursor
                                    });
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "setBlockList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.inboxType === undefined && (e.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    t.next = 3,
                                    this.api.SetBlockList({
                                        applySet: e.value,
                                        blocklist: l()(n = e.userId).call(n, (function(e) {
                                            return H.fromValue(e)
                                        }
                                        )),
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "checkInBlockList",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.inboxType === undefined && (e.inboxType = this.resolve($.Uk.InboxType).getDefaultInbox()),
                                    t.next = 3,
                                    this.api.CheckInBlockList({
                                        userToCheck: H.fromValue(e.userId),
                                        inboxType: e.inboxType
                                    });
                                case 3:
                                    return n = t.sent,
                                    t.abrupt("return", n.in_blocklist);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "broadcastCreateMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = S()({}, e.ext),
                                    (i = J.v.createClientMessage(this.ctx, {
                                        type: e.type,
                                        content: e.content,
                                        ext: r,
                                        id: (0,
                                        ee.k)(),
                                        conversationId: e.conversation.id,
                                        mentionedUsers: e.mentionedUsers || [],
                                        conversationShortId: e.conversation.shortId,
                                        conversationType: e.conversation.type
                                    })).flightStatus = z.b3.Created,
                                    i.indexInConversation = e.conversation.lastMessageIndex.add(1),
                                    i.orderInConversation = e.conversation.lastMessageOrder.add(1),
                                    e.insert !== undefined && !e.insert) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 8,
                                    this.resolve($.Uk.BroadcastManager).processNewMessage(i, z.v$.Offline);
                                case 8:
                                    return i.sendFunc = G()(n = this.broadcastSendMessage).call(n, this),
                                    t.abrupt("return", i);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "broadcastReceiveMessage",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.broadcastReceiveMessageWithType(e);
                                case 2:
                                    return n = t.sent,
                                    t.abrupt("return", {
                                        msgs: n.msgs,
                                        hasMore: n.hasMore,
                                        cursor: n.cursor
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "broadcastUserCounter",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i, o, a, c, u;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return r = l()(n = e.conversation).call(n, (function(e) {
                                        return {
                                            shortId: H.fromString(e.shortId),
                                            type: e.type
                                        }
                                    }
                                    )),
                                    t.next = 3,
                                    this.api.BroadcastUserCounter({
                                        conversations: r
                                    });
                                case 3:
                                    i = t.sent,
                                    o = {},
                                    a = (0,
                                    s.Z)(i.infos);
                                    try {
                                        for (a.s(); !(c = a.n()).done; )
                                            u = c.value,
                                            o[u.conversation_short_id.toString()] = u.counter
                                    } catch (d) {
                                        a.e(d)
                                    } finally {
                                        a.f()
                                    }
                                    return t.abrupt("return", o);
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "broadcastGetConversationOnline",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.resolve($.Uk.BroadcastManager).getWithOnline(e.conversationId, e.conversationId, K.m.ConversationType.BROADCAST_CHAT));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "broadcastGetConversation",
                value: function(e) {
                    return this.resolve($.Uk.BroadcastManager).getConversation(e.conversationId)
                }
            }, {
                key: "modifyMessageProperty",
                value: function(e) {
                    var t, n, r, i;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function o() {
                        var a, c, u, d, v, p, h, f, g, m, x, y, _ = this;
                        return V().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    if (u = {
                                        success: !1,
                                        payload: e.message
                                    },
                                    d = this.resolve($.Uk.ConversationManager).getRaw(e.message.conversationId)) {
                                        o.next = 4;
                                        break
                                    }
                                    return o.abrupt("return", u);
                                case 4:
                                    v = (0,
                                    s.Z)(e.modifyContent);
                                    try {
                                        for (h = function() {
                                            var r = p.value
                                              , i = null !== (n = null === (t = e.message.property[r.key]) || void 0 === t ? void 0 : L()(t).call(t, (function(e) {
                                                var t;
                                                return e.idempotentId === (null !== (t = r.idempotentId) && void 0 !== t ? t : _.ctx.option.userId)
                                            }
                                            ))) && void 0 !== n ? n : -1;
                                            r.operation || (r.operation = -1 === i ? K.m.OPERATION_TYPE.ADD_PROPERTY_ITEM : K.m.OPERATION_TYPE.REMOVE_PROPERTY_ITEM)
                                        }
                                        ,
                                        v.s(); !(p = v.n()).done; )
                                            h()
                                    } catch (b) {
                                        v.e(b)
                                    } finally {
                                        v.f()
                                    }
                                    return f = l()(a = e.modifyContent).call(a, (function(e) {
                                        var t;
                                        return S()(S()({}, e), {
                                            idempotentId: null !== (t = e.idempotentId) && void 0 !== t ? t : _.ctx.option.userId,
                                            operation: e.operation
                                        })
                                    }
                                    )),
                                    ue.mergeOperationToCurrent(e.message, f),
                                    this.resolve($.Uk.MessageManager).upsert(e.message),
                                    this.resolve($.Uk.EventBus).emit(z.c5.MessagePropertyUpsert, this, e.message),
                                    o.prev = 10,
                                    o.next = 13,
                                    this.api.ModifyMessageProperty({
                                        conversationId: d.id,
                                        conversationShortId: H.fromValue(d.shortId),
                                        conversationType: d.type,
                                        serverId: H.fromValue(e.message.serverId),
                                        clientId: e.message.clientId,
                                        ticket: d.ticket,
                                        modifyContent: f,
                                        inboxType: d.inboxType
                                    });
                                case 13:
                                    g = o.sent,
                                    o.next = 27;
                                    break;
                                case 16:
                                    o.prev = 16,
                                    o.t0 = o.catch(10),
                                    u.success = !1,
                                    u.statusCode = null == g ? void 0 : g.status,
                                    u.statusMsg = o.t0.msg,
                                    u.body = g,
                                    m = (0,
                                    s.Z)(e.modifyContent);
                                    try {
                                        for (y = function() {
                                            var t = x.value
                                              , n = null !== (i = null === (r = e.message.property[t.key]) || void 0 === r ? void 0 : L()(r).call(r, (function(e) {
                                                var n;
                                                return e.idempotentId === (null !== (n = t.idempotentId) && void 0 !== n ? n : _.ctx.option.userId)
                                            }
                                            ))) && void 0 !== i ? i : -1;
                                            -1 !== n && (e.message.property[t.key][n].status = J.R.Failed)
                                        }
                                        ,
                                        m.s(); !(x = m.n()).done; )
                                            y()
                                    } catch (b) {
                                        m.e(b)
                                    } finally {
                                        m.f()
                                    }
                                    return this.resolve($.Uk.MessageManager).upsert(e.message),
                                    this.resolve($.Uk.EventBus).emit(z.c5.MessagePropertyUpsert, this, e.message),
                                    o.abrupt("return", u);
                                case 27:
                                    return k()(c = [K.m.ModifyMessagePropertyStatus.MODIFY_PROPERTY_SUCCESS, K.m.ModifyMessagePropertyStatus.MODIFY_PROPERTY_REPEAT_REQUEST]).call(c, null == g ? void 0 : g.status) && (u.success = !0),
                                    e.message.version = null == g ? void 0 : g.version,
                                    this.resolve($.Uk.MessageManager).upsert(e.message),
                                    this.resolve($.Uk.EventBus).emit(z.c5.MessagePropertyUpsert, this, e.message),
                                    u.checkCode = H.ZERO,
                                    u.checkMsg = "",
                                    u.statusCode = g.status,
                                    u.statusMsg = "",
                                    u.body = g,
                                    o.abrupt("return", u);
                                case 37:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, this, [[10, 16]])
                    }
                    )))
                }
            }, {
                key: "markMessage",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (i = this.resolve($.Uk.ConversationManager).get(e.message.conversationId),
                                    !e.message.isOffline) {
                                        r.next = 3;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        sender: this,
                                        msg: "offline message cant be marked",
                                        reachServer: !1
                                    });
                                case 3:
                                    return r.next = 5,
                                    this.api.MarkMessage({
                                        conversationId: e.message.conversationId,
                                        conversationShortId: H.fromValue(e.message.conversationShortId),
                                        conversationType: e.message.conversationType,
                                        serverMessageId: H.fromValue(e.message.serverId),
                                        actionType: e.actionType,
                                        doAction: null === (t = e.doAction) || void 0 === t || t,
                                        sortTime: H.fromValue(null !== (n = e.sortTime) && void 0 !== n ? n : H.ZERO),
                                        tag: e.tag !== undefined ? H.fromValue(e.tag) : undefined,
                                        inboxType: i.inboxType
                                    });
                                case 5:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "pullMarkMessage",
                value: function(e) {
                    var t, n, r, i, s, o, a, c;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function u() {
                        var d, v, l, p, h = this;
                        return V().wrap((function(u) {
                            for (; ; )
                                switch (u.prev = u.next) {
                                case 0:
                                    return u.next = 2,
                                    this.api.PullMarkMessage({
                                        conversationId: null === (t = e.conversation) || void 0 === t ? void 0 : t.id,
                                        conversationShortId: (null === (n = e.conversation) || void 0 === n ? void 0 : n.shortId) === undefined ? undefined : H.fromValue(e.conversation.shortId),
                                        conversationType: null === (r = e.conversation) || void 0 === r ? void 0 : r.type,
                                        cursor: H.fromValue(null !== (i = e.cursor) && void 0 !== i ? i : H.ZERO),
                                        asc: null !== (s = e.ascending) && void 0 !== s && s,
                                        limit: H.fromValue(null !== (o = e.limit) && void 0 !== o ? o : 50),
                                        actionType: e.actionType,
                                        tag: e.tag !== undefined ? H.fromValue(e.tag) : undefined,
                                        inboxType: null !== (c = null === (a = e.conversation) || void 0 === a ? void 0 : a.inboxType) && void 0 !== c ? c : 0
                                    });
                                case 2:
                                    return v = u.sent,
                                    l = v.body.pull_mark_message_body,
                                    p = [],
                                    x()(d = l.messages).call(d, (function(e) {
                                        var t = J.v.fromServerMessage(h.ctx, e, v.log_id);
                                        p.push(t)
                                    }
                                    )),
                                    u.abrupt("return", {
                                        message: p,
                                        hasMore: l.has_more,
                                        cursor: l.next_cursor
                                    });
                                case 7:
                                case "end":
                                    return u.stop()
                                }
                        }
                        ), u, this)
                    }
                    )))
                }
            }, {
                key: "batchUnmarkMessage",
                value: function(e) {
                    var t;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i, s;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (e.messages !== undefined && 0 !== e.messages.length) {
                                        n.next = 2;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        msg: "invalid message list",
                                        sender: this
                                    });
                                case 2:
                                    return n.next = 4,
                                    this.api.BatchUnmarkMessage({
                                        conversationId: e.messages[0].conversationId,
                                        conversationShortId: H.fromValue(e.messages[0].conversationShortId),
                                        conversationType: e.messages[0].conversationType,
                                        serverMessageIds: l()(r = e.messages).call(r, (function(e) {
                                            return H.fromValue(e.serverId)
                                        }
                                        )),
                                        actionType: e.actionType,
                                        tag: e.tag !== undefined ? H.fromValue(e.tag) : undefined
                                    });
                                case 4:
                                    return i = n.sent,
                                    s = 0 === i.status,
                                    n.abrupt("return", {
                                        success: s,
                                        checkCode: i.check_code,
                                        checkMsg: i.check_message,
                                        statusCode: null !== (t = i.status) && void 0 !== t ? t : -1,
                                        body: i,
                                        payload: e.messages
                                    });
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "markMessageUnreadCountReport",
                value: function(e) {
                    var t, n, r;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function i() {
                        var s, o, a, c, u;
                        return V().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (s = {},
                                    e.tagUnreadCount !== undefined)
                                        for (o = 0,
                                        a = M()(e.tagUnreadCount); o < a.length; o++)
                                            c = a[o],
                                            s[c] = H.fromNumber(e.tagUnreadCount[c]);
                                    return i.next = 4,
                                    this.api.MarkMsgUnreadCountReport({
                                        conversationId: null === (t = null == e ? void 0 : e.conversation) || void 0 === t ? void 0 : t.id,
                                        conversationShortId: (null === (n = null == e ? void 0 : e.conversation) || void 0 === n ? void 0 : n.shortId) === undefined ? undefined : H.fromValue(null == e ? void 0 : e.conversation.shortId),
                                        conversationType: null === (r = null == e ? void 0 : e.conversation) || void 0 === r ? void 0 : r.type,
                                        totalUnreadCount: e.totalUnreadCount !== undefined ? H.fromNumber(e.totalUnreadCount) : undefined,
                                        tagUnreadCount: s
                                    });
                                case 4:
                                    return u = i.sent,
                                    i.abrupt("return", {
                                        setTotalStatus: u.set_total_status,
                                        failedTagList: u.failed_tag_list
                                    });
                                case 6:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "markMessageGetUnreadCount",
                value: function(e) {
                    var t, n, r, i, s, o;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function a() {
                        var c, u, d, v, p, h;
                        return V().wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    this.api.MarkMsgGetUnreadCount({
                                        conversationId: null === (t = null == e ? void 0 : e.conversation) || void 0 === t ? void 0 : t.id,
                                        conversationShortId: (null === (n = null == e ? void 0 : e.conversation) || void 0 === n ? void 0 : n.shortId) === undefined ? undefined : H.fromValue(null == e ? void 0 : e.conversation.shortId),
                                        conversationType: null === (r = null == e ? void 0 : e.conversation) || void 0 === r ? void 0 : r.type,
                                        getTotal: null !== (i = e.getTotal) && void 0 !== i && i,
                                        tags: null === (s = e.tags) || void 0 === s ? void 0 : l()(s).call(s, (function(e) {
                                            return H.fromValue(e)
                                        }
                                        ))
                                    });
                                case 2:
                                    for (c = a.sent,
                                    u = null !== (o = c.tag_unread_count) && void 0 !== o ? o : {},
                                    d = {},
                                    v = 0,
                                    p = M()(u); v < p.length; v++)
                                        h = p[v],
                                        d[(0,
                                        ie.w9)(h).toString()] = u[h].toNumber();
                                    return a.abrupt("return", {
                                        tagUnreadCount: d,
                                        totalCount: c.total_count,
                                        failedTagList: c.failed_tag_list
                                    });
                                case 7:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a, this)
                    }
                    )))
                }
            }, {
                key: "getMessageByServerId",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function r() {
                        var i, s, o;
                        return V().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (!(i = this.resolve($.Uk.MessageManager).getByServerIdRaw(e.conversation.id, e.serverMessageId))) {
                                        r.next = 3;
                                        break
                                    }
                                    return r.abrupt("return", i);
                                case 3:
                                    return r.prev = 3,
                                    r.next = 6,
                                    this.api.GetMessageByServerId({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        serverId: H.fromString(e.serverMessageId),
                                        inboxType: e.conversation.inboxType
                                    });
                                case 6:
                                    if (s = r.sent,
                                    (o = null === (n = null === (t = s.body) || void 0 === t ? void 0 : t.get_message_by_id_body) || void 0 === n ? void 0 : n.msg_info).body) {
                                        r.next = 10;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 10:
                                    return r.abrupt("return", J.v.fromServerMessage(this.ctx, o.body, s.log_id));
                                case 13:
                                    return r.prev = 13,
                                    r.t0 = r.catch(3),
                                    r.abrupt("return", null);
                                case 16:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[3, 13]])
                    }
                    )))
                }
            }, {
                key: "getMessageReferenceList",
                value: function(e) {
                    var t, n;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function i() {
                        var s, o, a, c, u, d;
                        return V().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (!e.message.isRootReference) {
                                        i.next = 4;
                                        break
                                    }
                                    o = e.message,
                                    i.next = 14;
                                    break;
                                case 4:
                                    if (a = this.resolve($.Uk.ConversationManager).get(e.message.conversationId),
                                    (c = null === (n = null === (t = e.message.referenceInfo) || void 0 === t ? void 0 : t.root_message_id) || void 0 === n ? void 0 : n.toString()) !== undefined) {
                                        i.next = 8;
                                        break
                                    }
                                    return i.abrupt("return", []);
                                case 8:
                                    return i.next = 10,
                                    this.getMessageByServerId({
                                        conversation: a,
                                        serverMessageId: c
                                    });
                                case 10:
                                    if (u = i.sent) {
                                        i.next = 13;
                                        break
                                    }
                                    return i.abrupt("return", []);
                                case 13:
                                    o = u;
                                case 14:
                                    return (d = [o]).push.apply(d, (0,
                                    r.Z)(b()(s = this.resolve($.Uk.MessageManager).getList(o.conversationId)).call(s, (function(e) {
                                        var t, n;
                                        return (null === (n = null === (t = e.referenceInfo) || void 0 === t ? void 0 : t.root_message_id) || void 0 === n ? void 0 : n.toString()) === o.serverId
                                    }
                                    )))),
                                    i.abrupt("return", d);
                                case 17:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "convertVoiceToText",
                value: function(e) {
                    var t;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i, s, o, a, c, u, d, v, l;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (null == e ? void 0 : e.serverId) {
                                        n.next = 2;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.MPInvalidArgument,
                                        msg: "message is offline",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 2:
                                    if ((null == e ? void 0 : e.type) === K.m.MessageType.MESSAGE_TYPE_AUDIO) {
                                        n.next = 4;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        msg: "message is not audio",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 4:
                                    if (r = null === (t = JSON.parse(null == e ? void 0 : e.content)) || void 0 === t ? void 0 : t.__files,
                                    i = M()(r),
                                    s = r[i[0]],
                                    o = s.type,
                                    a = s.ext,
                                    "wav" === o) {
                                        n.next = 9;
                                        break
                                    }
                                    throw new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.InvalidParam,
                                        msg: "audio content is not wav",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 9:
                                    if (!a[z.v9.FileExtKeyAudioAsrText]) {
                                        n.next = 11;
                                        break
                                    }
                                    return n.abrupt("return", e);
                                case 11:
                                    return n.prev = 11,
                                    n.next = 14,
                                    this.api.ConvertVoiceToText({
                                        content: null == e ? void 0 : e.content,
                                        uid: H.fromValue(this.ctx.option.userId),
                                        server_message_id: H.fromValue(null == e ? void 0 : e.serverId),
                                        audioOptions: {
                                            vid: a[be.I.Vid]
                                        },
                                        conv_short_id: H.fromValue(null == e ? void 0 : e.conversationShortId)
                                    });
                                case 14:
                                    return c = n.sent,
                                    u = null == c ? void 0 : c.audio_recognition_body,
                                    d = u.audio,
                                    v = u.check_code,
                                    l = u.check_message,
                                    v && l && (e.ext[z.v9.RecognitionResponseCheckCode] = null == v ? void 0 : v.toString(),
                                    e.ext[z.v9.RecognitionResponseCheckMsg] = null == l ? void 0 : l.toString()),
                                    e.content = null == d ? void 0 : d.content,
                                    this.resolve($.Uk.MessageManager).upsert(e),
                                    n.abrupt("return", e);
                                case 22:
                                    throw n.prev = 22,
                                    n.t0 = n.catch(11),
                                    new X.G({
                                        ctx: this.ctx,
                                        type: z.NI.ServerError,
                                        msg: "Voice conversion failed",
                                        reachServer: !1,
                                        sender: this
                                    });
                                case 25:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[11, 22]])
                    }
                    )))
                }
            }, {
                key: "install",
                value: function() {
                    this.api = new de(this.getContext()),
                    this.ctx.register($.Uk.BroadcastManager, new fe(this.ctx)),
                    this.ctx.register($.Uk.ExtensionApi, this.api),
                    this.ctx.register($.Uk.ExtensionPlugin, this),
                    this.instance.deleteConversation = this.extendFunc(this.deleteConversation),
                    this.instance.deleteMessage = this.extendFunc(this.deleteMessage),
                    this.instance.leaveConversation = this.extendFunc(this.leaveConversation),
                    this.instance.getMessageReadReceipt = this.extendFunc(this.getMessageReadReceipt),
                    this.instance.getConversationListByTop = this.extendFunc(this.getConversationListByTop),
                    this.instance.getConversationListByFavorite = this.extendFunc(this.getConversationListByFavorite),
                    this.instance.addParticipants = this.extendFunc(this.addParticipants),
                    this.instance.removeParticipants = this.extendFunc(this.removeParticipants),
                    this.instance.updateParticipant = this.extendFunc(this.updateParticipant),
                    this.instance.setConversationSettingInfo = this.extendFunc(this.setConversationSettingInfo),
                    this.instance.setConversationCoreInfo = this.extendFunc(this.setConversationCoreInfo),
                    this.instance.upsertConversationSettingExtInfo = this.extendFunc(this.upsertConversationSettingExtInfo),
                    this.instance.upsertConversationCoreExtInfo = this.extendFunc(this.upsertConversationCoreExtInfo),
                    this.instance.setConversationWeakMuteConfig = this.extendFunc(this.setConversationWeakMuteConfig),
                    this.instance.getConversationParticipants = this.extendFunc(this.getConversationParticipants),
                    this.instance.getConversationParticipantsAsync = this.extendFunc(this.getConversationParticipantsAsync),
                    this.instance.getConversationParticipantsByPage = this.extendFunc(this.getConversationParticipantsByPage),
                    this.instance.updateConversationReadReceipt = this.extendFunc(this.updateConversationReadReceipt),
                    this.instance.sendUserAction = this.extendFunc(this.sendUserAction),
                    this.instance.sendInputStatus = this.extendFunc(this.sendInputStatus),
                    this.instance.upsertMessageExt = this.extendFunc(this.upsertMessageExt),
                    this.instance.dissolveConversation = this.extendFunc(this.dissolveConversation),
                    this.instance.modifyMessageProperty = this.extendFunc(this.modifyMessageProperty),
                    this.instance.unreadCountReport = this.extendFunc(this.unreadCountReport),
                    this.instance.getServerUnreadCountByConversation = this.extendFunc(this.getServerUnreadCountByConversation),
                    this.instance.getServerUnreadCountByUser = this.extendFunc(this.getServerUnreadCountByUser),
                    this.instance.getUserConversationList = this.extendFunc(this.getUserConversationList),
                    this.instance.blockConversation = this.extendFunc(this.blockConversation),
                    this.instance.blockMember = this.extendFunc(this.blockMember),
                    this.instance.sendP2PMessage = this.extendFunc(this.sendP2PMessage),
                    this.instance.setBlockList = this.extendFunc(this.setBlockList),
                    this.instance.getBlockList = this.extendFunc(this.getBlockList),
                    this.instance.checkInBlockList = this.extendFunc(this.checkInBlockList),
                    this.instance.broadcastCreateMessage = this.extendFunc(this.broadcastCreateMessage),
                    this.instance.broadcastReceiveMessage = this.extendFunc(this.broadcastReceiveMessage),
                    this.instance.broadcastUserCounter = this.extendFunc(this.broadcastUserCounter),
                    this.instance.broadcastGetConversationOnline = this.extendFunc(this.broadcastGetConversationOnline),
                    this.instance.broadcastGetConversation = this.extendFunc(this.broadcastGetConversation),
                    this.instance.markMessage = this.extendFunc(this.markMessage),
                    this.instance.pullMarkMessage = this.extendFunc(this.pullMarkMessage),
                    this.instance.getMessageByServerId = this.extendFunc(this.getMessageByServerId),
                    this.instance.batchUnmarkMessage = this.extendFunc(this.batchUnmarkMessage),
                    this.instance.markMessageUnreadCountReport = this.extendFunc(this.markMessageUnreadCountReport),
                    this.instance.markMessageGetUnreadCount = this.extendFunc(this.markMessageGetUnreadCount),
                    this.instance.getMessageReferenceList = this.extendFunc(this.getMessageReferenceList),
                    this.instance.convertVoiceToText = this.extendFunc(this.convertVoiceToText),
                    this.addEventHandler(),
                    this.resolve($.Uk.MessageManager).injectProcessor(new xe(this.ctx)),
                    this.resolve($.Uk.MessageManager).injectProcessor(new ye(this.ctx)),
                    this.resolve($.Uk.MessageManager).injectProcessor(new ke(this.ctx))
                }
            }, {
                key: "receivePacket",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.cmd !== K.m.IMCMD.NEW_BROADCAST_MSG_NOTIFY) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3,
                                    this.receiveBroadcastPacket(e);
                                case 3:
                                    if (e.cmd !== K.m.IMCMD.NEW_P2P_MSG_NOTIFY) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 6,
                                    this.receiveP2PMessage(e);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "receiveP2PMessage",
                value: function(e) {
                    var t;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    (null === (t = e.body) || void 0 === t ? void 0 : t.has_new_p2p_message_notify) && (r = e.body.has_new_p2p_message_notify,
                                    (i = new _e).sendType = r.send_type,
                                    i.sender = r.sender.toString(),
                                    i.secSender = r.sec_sender,
                                    i.conversationId = r.conversation_id,
                                    i.conversationShortId = r.conversation_short_id.toString(),
                                    i.conversationType = r.conversation_type,
                                    i.type = r.message_type,
                                    i.content = r.content,
                                    i.ext = r.ext,
                                    i.createTime = new Date(r.create_time.toNumber()),
                                    this.resolve($.Uk.EventBus).emit(z.c5.ReceiveNewP2PMessage, this, i));
                                case 1:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "receiveBroadcastPacket",
                value: function(e) {
                    var t;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i, s, o, a, c, u, d, v, l;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return r = e.body.has_new_message_notify,
                                    i = r.message,
                                    (s = J.v.fromServerMessage(this.ctx, i, e.log_id)).ext || (s.ext = {}),
                                    n.next = 6,
                                    this.resolve($.Uk.BroadcastManager).processNewMessage(s, z.v$.Online);
                                case 6:
                                    if (o = this.resolve($.Uk.BroadcastManager).getConversation(s.conversationId),
                                    a = o.localIndex,
                                    o.setConversationCursor(r.next_cursor),
                                    !a.gt(H.ZERO) || !(null === (t = r.previous_cursor) || void 0 === t ? void 0 : t.gt(a))) {
                                        n.next = 25;
                                        break
                                    }
                                    c = !0,
                                    u = a,
                                    d = 0,
                                    v = 5;
                                case 14:
                                    if (!(c && d < v)) {
                                        n.next = 25;
                                        break
                                    }
                                    return n.next = 17,
                                    this.broadcastReceiveMessageWithType({
                                        conversation: o,
                                        cursor: u,
                                        limit: 50,
                                        reverse: !1,
                                        pullType: 1
                                    });
                                case 17:
                                    return l = n.sent,
                                    c = l.hasMore,
                                    u = l.cursor,
                                    n.next = 22,
                                    this.resolve($.Uk.BroadcastManager).processNewMessagesFromPull(l.msgs, z.v$.BroadcastLoadMore, l.log_id);
                                case 22:
                                    d++,
                                    n.next = 14;
                                    break;
                                case 25:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "dispose",
                value: function() {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function e() {
                        return V().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.resolve($.Uk.ParticipantManager).dispose(),
                                    this.resolve($.Uk.BroadcastManager).dispose();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "addEventHandler",
                value: function() {
                    var e = this;
                    this.ctx.option.autoReadIndex && this.resolve($.Uk.EventBus).subscribe(z.c5.MessageUpsert, (function(t) {
                        return (0,
                        Y.mG)(e, void 0, void 0, V().mark((function e() {
                            var n, r, i;
                            return V().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t.flightStatus !== z.b3.Inflight) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (n = this.resolve($.Uk.ConversationManager).getRaw(t.conversationId)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (0 !== this.resolve($.Uk.ParticipantManager).getRaw(n.id).length) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        (r = this.resolve($.Uk.ParticipantManager).getByUserIdRaw(n.id, t.sender)) && t.moveReadIndex && (r.readIndex = t.indexInConversation,
                                        r.readOrder = t.orderInConversation,
                                        this.resolve($.Uk.ParticipantManager).upsert(n.id, r),
                                        j.Y.ctxDebug(this.ctx, h()(i = "auto readindex with read:".concat(r.readIndex.toString(), " & order:")).call(i, r.readOrder.toString())));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                    )),
                    this.resolve($.Uk.EventBus).subscribe(z.c5.ReceiveNewP2PMessage, (function(t) {
                        return (0,
                        Y.mG)(e, void 0, void 0, V().mark((function e() {
                            var n, r, i, s, o, a, c, u;
                            return V().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t.type !== K.m.MessageType.MESSAGE_TYPE_READ_COMMAND) {
                                            e.next = 18;
                                            break
                                        }
                                        if (i = this.resolve($.Uk.ConversationManager).getWithShortIdRaw(t.conversationShortId)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        if (s = ne.parse(t.content),
                                        o = H.fromValue(s.P2PSender).toString(),
                                        a = this.resolve($.Uk.ParticipantManager).getByUserIdRaw(i.id, o)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        if (c = a.readIndex,
                                        u = H.fromValue(s.P2PSenderReadIndex),
                                        !c.gte(u)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 13:
                                        a.readIndex = u,
                                        this.resolve($.Uk.ParticipantManager).upsert(i.id, a),
                                        this.resolve($.Uk.EventBus).emit(z.c5.ConversationUpsert, this, i),
                                        this.resolve($.Uk.EventBus).emitEmpty(z.c5.ConversationChange, this),
                                        j.Y.ctxDebug(this.ctx, h()(n = h()(r = "p2p update ".concat(a.userId, " readindex: ")).call(r, c.toString(), " to ")).call(n, u.toString()));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )))
                    }
                    ))
                }
            }, {
                key: "broadcastReceiveMessageWithType",
                value: function(e) {
                    var t, n, r, i, s;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function o() {
                        var a, c, u, d = this;
                        return V().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    return o.next = 2,
                                    this.api.BroadcastReceiveMessage({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        cursor: e.cursor ? H.fromValue(e.cursor) : e.conversation.localIndex,
                                        limit: e.limit ? H.fromValue(e.limit) : H.fromNumber(20),
                                        reverse: null !== (t = F()(e)) && void 0 !== t && t,
                                        pullType: null !== (n = e.pullType) && void 0 !== n ? n : 0,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 2:
                                    return a = o.sent,
                                    c = null === (r = a.body) || void 0 === r ? void 0 : r.broadcast_recv_message_body,
                                    u = null !== (s = null === (i = c.messages) || void 0 === i ? void 0 : l()(i).call(i, (function(e) {
                                        return J.v.fromServerMessage(d.ctx, e, a.log_id)
                                    }
                                    ))) && void 0 !== s ? s : [],
                                    o.next = 7,
                                    this.resolve($.Uk.BroadcastManager).processNewMessagesFromPull(u, z.v$.BroadcastLoadMore, a.log_id);
                                case 7:
                                    return c.next_cursor && e.conversation.setConversationCursor(c.next_cursor),
                                    o.abrupt("return", {
                                        msgs: u,
                                        hasMore: c.has_more,
                                        cursor: c.next_cursor,
                                        log_id: a.log_id
                                    });
                                case 9:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, this)
                    }
                    )))
                }
            }, {
                key: "broadcastSendMessage",
                value: function(e) {
                    var t;
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function n() {
                        var r, i, s, o, a, c;
                        return V().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return r = this.resolve($.Uk.BroadcastManager).getConversation(e.conversationId),
                                    i = {
                                        success: !1,
                                        payload: e
                                    },
                                    e.flightStatus = z.b3.Inflight,
                                    n.prev = 3,
                                    n.next = 6,
                                    this.api.BroadcastSendMessage({
                                        conversationId: e.conversationId,
                                        conversationShortId: H.fromString(e.conversationShortId),
                                        conversationType: e.conversationType,
                                        clientId: e.clientId,
                                        content: e.content,
                                        ticket: r.ticket,
                                        ext: e.ext,
                                        type: e.type,
                                        mentionedUsers: l()(s = e.mentionedUsers).call(s, (function(e) {
                                            return H.fromString(e)
                                        }
                                        )),
                                        inboxType: r.inboxType
                                    });
                                case 6:
                                    o = n.sent,
                                    a = null === (t = o.body) || void 0 === t ? void 0 : t.broadcast_send_message_body,
                                    i.body = a,
                                    i.checkCode = a.check_code,
                                    i.checkMsg = a.check_message,
                                    i.statusCode = a.status,
                                    i.statusMsg = a.extra_info,
                                    this.ctx.option.debug && (e.ext[z.v9.LocalLogId] = o.log_id),
                                    0 === a.status ? (c = a.server_message_id.toString(),
                                    e.serverId = c,
                                    e.flightStatus = z.b3.Succeeded,
                                    i.success = !0,
                                    e.isOffline = !1) : (e.flightStatus = z.b3.Rejected,
                                    a.status === K.m.SendMessageStatus.CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE && (e.flightStatus = z.b3.SelfVisible)),
                                    n.next = 20;
                                    break;
                                case 17:
                                    n.prev = 17,
                                    n.t0 = n.catch(3),
                                    e.flightStatus = z.b3.Failed;
                                case 20:
                                    return n.abrupt("return", i);
                                case 21:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[3, 17]])
                    }
                    )))
                }
            }, {
                key: "getReadReceipt",
                value: function(e) {
                    return (0,
                    Y.mG)(this, void 0, void 0, V().mark((function t() {
                        var n, r, i, s, o, a, c, u;
                        return V().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.batchFetch) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 3,
                                    this.api.GetConversationParticipantsReadIndexV3({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 3:
                                    return n = t.sent,
                                    t.next = 6,
                                    this.api.GetConversationParticipantsMinIndexV3({
                                        conversationId: e.conversation.id,
                                        conversationShortId: H.fromString(e.conversation.shortId),
                                        conversationType: e.conversation.type,
                                        inboxType: e.conversation.inboxType
                                    });
                                case 6:
                                    return r = t.sent,
                                    t.abrupt("return", {
                                        readIndexs: (null == n ? void 0 : n.indexes) || [],
                                        minIndexs: r.indexes
                                    });
                                case 10:
                                    return i = e.conversation,
                                    t.next = 13,
                                    this.api.BatchGetConversationParticipantsReadIndex({
                                        conversationId: [i.id],
                                        conversationShortId: [H.fromString(i.shortId)],
                                        min_index_required: !0
                                    });
                                case 13:
                                    return s = t.sent,
                                    o = s.conversationParticipantsReadIndex,
                                    a = (null == o ? void 0 : o[0].participantReadIndex) || [],
                                    c = [],
                                    u = [],
                                    x()(a).call(a, (function(e) {
                                        e.index && c.push({
                                            user_id: H.fromString(e.user_id.toString()),
                                            index: H.fromString(e.index.toString())
                                        }),
                                        u.push({
                                            user_id: H.fromString(e.user_id.toString()),
                                            index: H.fromString(e.index_min.toString())
                                        })
                                    }
                                    )),
                                    t.abrupt("return", {
                                        readIndexs: c,
                                        minIndexs: u
                                    });
                                case 20:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "getNormalMsgUnreadCount",
                value: function(e) {
                    return e.isMuted ? 0 : e.pushStatus === z.Bs.PartAllow ? e.unreadCountWithWhiteList : e.unreadCount
                }
            }]),
            n
        }(re.v)
    },
    42921: function(e, t, n) {
        e.exports = n(46375)
    },
    48735: function(e, t, n) {
        e.exports = n(10106)
    },
    17808: function(e, t, n) {
        e.exports = n(2)
    },
    2841: function(e, t, n) {
        e.exports = n(87108)
    },
    14217: function(e, t, n) {
        e.exports = n(30980)
    },
    57763: function(e, t, n) {
        e.exports = n(26660)
    },
    77364: function(e, t, n) {
        e.exports = n(79002)
    },
    18724: function(e, t, n) {
        e.exports = n(38620)
    },
    87872: function(e, t, n) {
        e.exports = n(27372)
    },
    33922: function(e, t, n) {
        e.exports = n(24603)
    },
    48328: function(e, t, n) {
        e.exports = n(27681)
    },
    22913: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return function(e, t) {
                if (e !== t)
                    throw new TypeError("Private static access of wrong provenance")
            }(e, t),
            n
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    58515: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(84967)
          , i = n(35826)
          , s = n(32060)
          , o = n(66251);
        function a(e, t, n) {
            return a = (0,
            o.Z)() ? r : function(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (i(Function).apply(e, r));
                return n && (0,
                s.Z)(o, n.prototype),
                o
            }
            ,
            a.apply(null, arguments)
        }
    }
}]);
