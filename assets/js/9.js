(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2496], {
    15315: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s);
        var a = n(15968);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.KTVPlayModeStartMessage", null, i), o.exportSymbol("proto.webcast.im.KTVPlayModeType", null, i), proto.webcast.im.KTVPlayModeStartMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.KTVPlayModeStartMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.KTVPlayModeStartMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVPlayModeStartMessage.displayName = "proto.webcast.im.KTVPlayModeStartMessage"), proto.webcast.im.KTVPlayModeStartMessage.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVPlayModeStartMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVPlayModeStartMessage.toObject(e, this)
        }, proto.webcast.im.KTVPlayModeStartMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                prompt: r.Message.getFieldWithDefault(t, 2, ""),
                playModeType: r.Message.getFieldWithDefault(t, 3, 0),
                linkmicPlayModesList: null == (n = r.Message.getRepeatedField(t, 4)) ? undefined : n
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVPlayModeStartMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVPlayModeStartMessage;
            return proto.webcast.im.KTVPlayModeStartMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVPlayModeStartMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setPrompt(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setPlayModeType(n);
                        break;
                    case 4:
                        for (var r = t.isDelimited() ? t.readPackedEnum() : [t.readEnum()], o = 0; o < r.length; o++) e.addLinkmicPlayModes(r[o]);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVPlayModeStartMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVPlayModeStartMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), (n = e.getPrompt()).length > 0 && t.writeString(2, n), 0 !== (n = e.getPlayModeType()) && t.writeEnum(3, n), (n = e.getLinkmicPlayModesList()).length > 0 && t.writePackedEnum(4, n)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.getPrompt = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.setPrompt = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.getPlayModeType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.setPlayModeType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.getLinkmicPlayModesList = function () {
            return r.Message.getRepeatedField(this, 4)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.setLinkmicPlayModesList = function (e) {
            return r.Message.setField(this, 4, e || [])
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.addLinkmicPlayModes = function (e, t) {
            return r.Message.addToRepeatedField(this, 4, e, t)
        }, proto.webcast.im.KTVPlayModeStartMessage.prototype.clearLinkmicPlayModesList = function () {
            return this.setLinkmicPlayModesList([])
        }, proto.webcast.im.KTVPlayModeType = {
            UNKOWN_PLAY_MODE_TYPE: 0,
            COLD_STARTING_SONG: 1
        }, o.object.extend(t, proto.webcast.im)
    }, 25162: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s), o.exportSymbol("proto.webcast.im.KTVShortVideoCreatedMessage", null, i), o.exportSymbol("proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct", null, i), proto.webcast.im.KTVShortVideoCreatedMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVShortVideoCreatedMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVShortVideoCreatedMessage.displayName = "proto.webcast.im.KTVShortVideoCreatedMessage"), proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.displayName = "proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVShortVideoCreatedMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVShortVideoCreatedMessage.toObject(e, this)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.toObject = function (e, t) {
            var n, r = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                shortVideoInfo: (n = t.getShortVideoInfo()) && proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.toObject(e, n)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.KTVShortVideoCreatedMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVShortVideoCreatedMessage;
            return proto.webcast.im.KTVShortVideoCreatedMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = new proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct;
                        t.readMessage(n, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.deserializeBinaryFromReader), e.setShortVideoInfo(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVShortVideoCreatedMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVShortVideoCreatedMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), null != (n = e.getShortVideoInfo()) && t.writeMessage(2, n, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.prototype.toObject = function (e) {
            return proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.toObject(e, this)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.toObject = function (e, t) {
            var n = {shortVideoUrl: r.Message.getFieldWithDefault(t, 1, "")};
            return e && (n.$jspbMessageInstance = t), n
        }), proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct;
            return proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readString();
                    e.setShortVideoUrl(n)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getShortVideoUrl()).length > 0 && t.writeString(1, n)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.prototype.getShortVideoUrl = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct.prototype.setShortVideoUrl = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.getShortVideoInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.KTVShortVideoCreatedMessage.ShortVideoStruct, 2)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.setShortVideoInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.clearShortVideoInfo = function () {
            return this.setShortVideoInfo(undefined)
        }, proto.webcast.im.KTVShortVideoCreatedMessage.prototype.hasShortVideoInfo = function () {
            return null != r.Message.getField(this, 2)
        }, o.object.extend(t, proto.webcast.im)
    }, 27904: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s), o.exportSymbol("proto.webcast.im.KTVSingerHotRankPosMessage", null, i), proto.webcast.im.KTVSingerHotRankPosMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVSingerHotRankPosMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVSingerHotRankPosMessage.displayName = "proto.webcast.im.KTVSingerHotRankPosMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVSingerHotRankPosMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVSingerHotRankPosMessage.toObject(e, this)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                hot: r.Message.getFieldWithDefault(t, 2, "0"),
                rank: r.Message.getFieldWithDefault(t, 3, "0"),
                singer: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVSingerHotRankPosMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVSingerHotRankPosMessage;
            return proto.webcast.im.KTVSingerHotRankPosMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setHot(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setRank(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setSinger(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVSingerHotRankPosMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVSingerHotRankPosMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), n = e.getHot(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getRank(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getSinger(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.getHot = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.setHot = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.getRank = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.setRank = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.getSinger = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.KTVSingerHotRankPosMessage.prototype.setSinger = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 14052: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s), o.exportSymbol("proto.webcast.im.KtvChallengeConfigMessage", null, i), proto.webcast.im.KtvChallengeConfigMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KtvChallengeConfigMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KtvChallengeConfigMessage.displayName = "proto.webcast.im.KtvChallengeConfigMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KtvChallengeConfigMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KtvChallengeConfigMessage.toObject(e, this)
        }, proto.webcast.im.KtvChallengeConfigMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                switchStatus: r.Message.getFieldWithDefault(t, 2, "0"),
                targetScore: r.Message.getFieldWithDefault(t, 3, "0"),
                targetDurationSecond: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KtvChallengeConfigMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KtvChallengeConfigMessage;
            return proto.webcast.im.KtvChallengeConfigMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KtvChallengeConfigMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setSwitchStatus(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setTargetScore(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setTargetDurationSecond(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KtvChallengeConfigMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KtvChallengeConfigMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), n = e.getSwitchStatus(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getTargetScore(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getTargetDurationSecond(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.getSwitchStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.setSwitchStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.getTargetScore = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.setTargetScore = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.getTargetDurationSecond = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.KtvChallengeConfigMessage.prototype.setTargetDurationSecond = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 67152: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(8411);
        o.object.extend(proto, s);
        var a = n(50684);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.KTVChallengeRankMessage", null, i), o.exportSymbol("proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser", null, i), proto.webcast.im.KTVChallengeRankMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.KTVChallengeRankMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.KTVChallengeRankMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVChallengeRankMessage.displayName = "proto.webcast.im.KTVChallengeRankMessage"), proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.displayName = "proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser"), proto.webcast.im.KTVChallengeRankMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVChallengeRankMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVChallengeRankMessage.toObject(e, this)
        }, proto.webcast.im.KTVChallengeRankMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && a.Common.toObject(e, n),
                userListList: r.Message.toObjectList(t.getUserListList(), proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.toObject, e),
                singerId: r.Message.getFieldWithDefault(t, 3, "0"),
                singerNickname: r.Message.getFieldWithDefault(t, 4, ""),
                singerAvatarThumb: (n = t.getSingerAvatarThumb()) && s.Image.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVChallengeRankMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVChallengeRankMessage;
            return proto.webcast.im.KTVChallengeRankMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVChallengeRankMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new a.Common;
                        t.readMessage(n, a.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = new proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser;
                        t.readMessage(n, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.deserializeBinaryFromReader), e.addUserList(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setSingerId(n);
                        break;
                    case 4:
                        n = t.readString();
                        e.setSingerNickname(n);
                        break;
                    case 5:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setSingerAvatarThumb(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVChallengeRankMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVChallengeRankMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, a.Common.serializeBinaryToWriter), (n = e.getUserListList()).length > 0 && t.writeRepeatedMessage(2, n, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.serializeBinaryToWriter), n = e.getSingerId(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), (n = e.getSingerNickname()).length > 0 && t.writeString(4, n), null != (n = e.getSingerAvatarThumb()) && t.writeMessage(5, n, s.Image.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.toObject = function (e) {
            return proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.toObject(e, this)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.toObject = function (e, t) {
            var n, o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                nickname: r.Message.getFieldWithDefault(t, 2, ""),
                score: r.Message.getFieldWithDefault(t, 3, "0"),
                avatarThumb: (n = t.getAvatarThumb()) && s.Image.toObject(e, n),
                avatarMedium: (n = t.getAvatarMedium()) && s.Image.toObject(e, n),
                avatarLarge: (n = t.getAvatarLarge()) && s.Image.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser;
            return proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setNickname(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setScore(n);
                        break;
                    case 4:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarThumb(n);
                        break;
                    case 5:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarMedium(n);
                        break;
                    case 6:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarLarge(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), (n = e.getNickname()).length > 0 && t.writeString(2, n), n = e.getScore(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), null != (n = e.getAvatarThumb()) && t.writeMessage(4, n, s.Image.serializeBinaryToWriter), null != (n = e.getAvatarMedium()) && t.writeMessage(5, n, s.Image.serializeBinaryToWriter), null != (n = e.getAvatarLarge()) && t.writeMessage(6, n, s.Image.serializeBinaryToWriter)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.getNickname = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.setNickname = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.setScore = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.getAvatarThumb = function () {
            return r.Message.getWrapperField(this, s.Image, 4)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.setAvatarThumb = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.clearAvatarThumb = function () {
            return this.setAvatarThumb(undefined)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.hasAvatarThumb = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.getAvatarMedium = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.setAvatarMedium = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.clearAvatarMedium = function () {
            return this.setAvatarMedium(undefined)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.hasAvatarMedium = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.getAvatarLarge = function () {
            return r.Message.getWrapperField(this, s.Image, 6)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.setAvatarLarge = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.clearAvatarLarge = function () {
            return this.setAvatarLarge(undefined)
        }, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser.prototype.hasAvatarLarge = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.getUserListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser, 2)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.setUserListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.addUserList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.KTVChallengeRankMessage.ChallengeRankUser, t)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.clearUserListList = function () {
            return this.setUserListList([])
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.getSingerId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.setSingerId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.getSingerNickname = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.setSingerNickname = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.getSingerAvatarThumb = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.setSingerAvatarThumb = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.clearSingerAvatarThumb = function () {
            return this.setSingerAvatarThumb(undefined)
        }, proto.webcast.im.KTVChallengeRankMessage.prototype.hasSingerAvatarThumb = function () {
            return null != r.Message.getField(this, 5)
        }, o.object.extend(t, proto.webcast.im)
    }, 11965: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s);
        var a = n(45827);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.KTVChallengeStatusMessage", null, i), proto.webcast.im.KTVChallengeStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVChallengeStatusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVChallengeStatusMessage.displayName = "proto.webcast.im.KTVChallengeStatusMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVChallengeStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVChallengeStatusMessage.toObject(e, this)
        }, proto.webcast.im.KTVChallengeStatusMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                challengeId: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, "0"),
                currentScore: r.Message.getFieldWithDefault(t, 4, "0"),
                targetScore: r.Message.getFieldWithDefault(t, 5, "0"),
                countdownSecond: r.Message.getFieldWithDefault(t, 6, "0"),
                targetDurationSecond: r.Message.getFieldWithDefault(t, 7, "0"),
                incrementDurationSecond: r.Message.getFieldWithDefault(t, 8, "0"),
                giftType: r.Message.getFieldWithDefault(t, 9, 0),
                emojiLocation: r.Message.getFieldWithDefault(t, 10, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVChallengeStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVChallengeStatusMessage;
            return proto.webcast.im.KTVChallengeStatusMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVChallengeStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setChallengeId(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setStatus(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setCurrentScore(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setTargetScore(n);
                        break;
                    case 6:
                        n = t.readInt64String();
                        e.setCountdownSecond(n);
                        break;
                    case 7:
                        n = t.readInt64String();
                        e.setTargetDurationSecond(n);
                        break;
                    case 8:
                        n = t.readInt64String();
                        e.setIncrementDurationSecond(n);
                        break;
                    case 9:
                        n = t.readEnum();
                        e.setGiftType(n);
                        break;
                    case 10:
                        n = t.readEnum();
                        e.setEmojiLocation(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVChallengeStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVChallengeStatusMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), n = e.getChallengeId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getStatus(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getCurrentScore(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), n = e.getTargetScore(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), n = e.getCountdownSecond(), 0 !== parseInt(n, 10) && t.writeInt64String(6, n), n = e.getTargetDurationSecond(), 0 !== parseInt(n, 10) && t.writeInt64String(7, n), n = e.getIncrementDurationSecond(), 0 !== parseInt(n, 10) && t.writeInt64String(8, n), 0 !== (n = e.getGiftType()) && t.writeEnum(9, n), 0 !== (n = e.getEmojiLocation()) && t.writeEnum(10, n)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getChallengeId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setChallengeId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getCurrentScore = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setCurrentScore = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getTargetScore = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setTargetScore = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getCountdownSecond = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setCountdownSecond = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getTargetDurationSecond = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setTargetDurationSecond = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getIncrementDurationSecond = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setIncrementDurationSecond = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getGiftType = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setGiftType = function (e) {
            return r.Message.setProto3EnumField(this, 9, e)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.getEmojiLocation = function () {
            return r.Message.getFieldWithDefault(this, 10, 0)
        }, proto.webcast.im.KTVChallengeStatusMessage.prototype.setEmojiLocation = function (e) {
            return r.Message.setProto3EnumField(this, 10, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 33003: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s), o.exportSymbol("proto.webcast.im.KTVStartGrabSongMessage", null, i), proto.webcast.im.KTVStartGrabSongMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVStartGrabSongMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVStartGrabSongMessage.displayName = "proto.webcast.im.KTVStartGrabSongMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVStartGrabSongMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVStartGrabSongMessage.toObject(e, this)
        }, proto.webcast.im.KTVStartGrabSongMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                isstart: r.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVStartGrabSongMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVStartGrabSongMessage;
            return proto.webcast.im.KTVStartGrabSongMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVStartGrabSongMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readBool();
                        e.setIsstart(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVStartGrabSongMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVStartGrabSongMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), (n = e.getIsstart()) && t.writeBool(2, n)
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.getIsstart = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.KTVStartGrabSongMessage.prototype.setIsstart = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 71136: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s), o.exportSymbol("proto.webcast.im.HotLevel", null, i), o.exportSymbol("proto.webcast.im.HotStatus", null, i), o.exportSymbol("proto.webcast.im.KTVUserSingingHotMessage", null, i), proto.webcast.im.KTVUserSingingHotMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.KTVUserSingingHotMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.KTVUserSingingHotMessage.displayName = "proto.webcast.im.KTVUserSingingHotMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.KTVUserSingingHotMessage.prototype.toObject = function (e) {
            return proto.webcast.im.KTVUserSingingHotMessage.toObject(e, this)
        }, proto.webcast.im.KTVUserSingingHotMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                hot: r.Message.getFieldWithDefault(t, 2, "0"),
                hotStatus: r.Message.getFieldWithDefault(t, 3, 0),
                hotLevel: r.Message.getFieldWithDefault(t, 4, 0),
                songId: r.Message.getFieldWithDefault(t, 5, "0"),
                userId: r.Message.getFieldWithDefault(t, 6, "0"),
                level2Threshold: r.Message.getFieldWithDefault(t, 7, "0"),
                level3Threshold: r.Message.getFieldWithDefault(t, 8, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.KTVUserSingingHotMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.KTVUserSingingHotMessage;
            return proto.webcast.im.KTVUserSingingHotMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.KTVUserSingingHotMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setHot(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setHotStatus(n);
                        break;
                    case 4:
                        n = t.readEnum();
                        e.setHotLevel(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setSongId(n);
                        break;
                    case 6:
                        n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 7:
                        n = t.readInt64String();
                        e.setLevel2Threshold(n);
                        break;
                    case 8:
                        n = t.readInt64String();
                        e.setLevel3Threshold(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.KTVUserSingingHotMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.KTVUserSingingHotMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), n = e.getHot(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getHotStatus()) && t.writeEnum(3, n), 0 !== (n = e.getHotLevel()) && t.writeEnum(4, n), n = e.getSongId(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(6, n), n = e.getLevel2Threshold(), 0 !== parseInt(n, 10) && t.writeInt64String(7, n), n = e.getLevel3Threshold(), 0 !== parseInt(n, 10) && t.writeInt64String(8, n)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getHot = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setHot = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getHotStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setHotStatus = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getHotLevel = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setHotLevel = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getSongId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setSongId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getLevel2Threshold = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setLevel2Threshold = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.getLevel3Threshold = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.KTVUserSingingHotMessage.prototype.setLevel3Threshold = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.HotStatus = {NORMAL: 0, HIGH_FEVER: 1}, proto.webcast.im.HotLevel = {
            LEVEL_1: 0,
            LEVEL_2: 1,
            LEVEL_3: 2
        }, o.object.extend(t, proto.webcast.im)
    }, 56857: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(50684);
        o.object.extend(proto, s);
        var a = n(64925);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.LevelUpMessage", null, i), proto.webcast.im.LevelUpMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LevelUpMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LevelUpMessage.displayName = "proto.webcast.im.LevelUpMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LevelUpMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LevelUpMessage.toObject(e, this)
        }, proto.webcast.im.LevelUpMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && s.Common.toObject(e, n),
                user: (n = t.getUser()) && a.User.toObject(e, n),
                preLevel: r.Message.getFieldWithDefault(t, 3, 0),
                currentLevel: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LevelUpMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LevelUpMessage;
            return proto.webcast.im.LevelUpMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LevelUpMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Common;
                        t.readMessage(n, s.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = new a.User;
                        t.readMessage(n, a.User.deserializeBinaryFromReader), e.setUser(n);
                        break;
                    case 3:
                        n = t.readInt32();
                        e.setPreLevel(n);
                        break;
                    case 4:
                        n = t.readInt32();
                        e.setCurrentLevel(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LevelUpMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LevelUpMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LevelUpMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, s.Common.serializeBinaryToWriter), null != (n = e.getUser()) && t.writeMessage(2, n, a.User.serializeBinaryToWriter), 0 !== (n = e.getPreLevel()) && t.writeInt32(3, n), 0 !== (n = e.getCurrentLevel()) && t.writeInt32(4, n)
        }, proto.webcast.im.LevelUpMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, s.Common, 1)
        }, proto.webcast.im.LevelUpMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LevelUpMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LevelUpMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LevelUpMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.LevelUpMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.LevelUpMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.LevelUpMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.LevelUpMessage.prototype.getPreLevel = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.LevelUpMessage.prototype.setPreLevel = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.LevelUpMessage.prototype.getCurrentLevel = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.LevelUpMessage.prototype.setCurrentLevel = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 77511: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(64925);
        o.object.extend(proto, s);
        var a = n(50684);
        o.object.extend(proto, a);
        var p = n(8411);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.DisplayControlInfo", null, i), o.exportSymbol("proto.webcast.im.DoubleLikeDetail", null, i), o.exportSymbol("proto.webcast.im.LikeMessage", null, i), o.exportSymbol("proto.webcast.im.PicoDisplayInfo", null, i), proto.webcast.im.PicoDisplayInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.PicoDisplayInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.PicoDisplayInfo.displayName = "proto.webcast.im.PicoDisplayInfo"), proto.webcast.im.DoubleLikeDetail = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DoubleLikeDetail, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DoubleLikeDetail.displayName = "proto.webcast.im.DoubleLikeDetail"), proto.webcast.im.DisplayControlInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DisplayControlInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DisplayControlInfo.displayName = "proto.webcast.im.DisplayControlInfo"), proto.webcast.im.LikeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LikeMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LikeMessage.displayName = "proto.webcast.im.LikeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PicoDisplayInfo.prototype.toObject = function (e) {
            return proto.webcast.im.PicoDisplayInfo.toObject(e, this)
        }, proto.webcast.im.PicoDisplayInfo.toObject = function (e, t) {
            var n, o = {
                comboSumCount: r.Message.getFieldWithDefault(t, 1, "0"),
                emoji: r.Message.getFieldWithDefault(t, 2, ""),
                emojiIcon: (n = t.getEmojiIcon()) && p.Image.toObject(e, n),
                emojiText: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.PicoDisplayInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.PicoDisplayInfo;
            return proto.webcast.im.PicoDisplayInfo.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.PicoDisplayInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setComboSumCount(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setEmoji(n);
                        break;
                    case 3:
                        n = new p.Image;
                        t.readMessage(n, p.Image.deserializeBinaryFromReader), e.setEmojiIcon(n);
                        break;
                    case 4:
                        n = t.readString();
                        e.setEmojiText(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PicoDisplayInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PicoDisplayInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PicoDisplayInfo.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getComboSumCount(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), (n = e.getEmoji()).length > 0 && t.writeString(2, n), null != (n = e.getEmojiIcon()) && t.writeMessage(3, n, p.Image.serializeBinaryToWriter), (n = e.getEmojiText()).length > 0 && t.writeString(4, n)
        }, proto.webcast.im.PicoDisplayInfo.prototype.getComboSumCount = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.PicoDisplayInfo.prototype.setComboSumCount = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.PicoDisplayInfo.prototype.getEmoji = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.PicoDisplayInfo.prototype.setEmoji = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.PicoDisplayInfo.prototype.getEmojiIcon = function () {
            return r.Message.getWrapperField(this, p.Image, 3)
        }, proto.webcast.im.PicoDisplayInfo.prototype.setEmojiIcon = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.PicoDisplayInfo.prototype.clearEmojiIcon = function () {
            return this.setEmojiIcon(undefined)
        }, proto.webcast.im.PicoDisplayInfo.prototype.hasEmojiIcon = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.PicoDisplayInfo.prototype.getEmojiText = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.PicoDisplayInfo.prototype.setEmojiText = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DoubleLikeDetail.prototype.toObject = function (e) {
            return proto.webcast.im.DoubleLikeDetail.toObject(e, this)
        }, proto.webcast.im.DoubleLikeDetail.toObject = function (e, t) {
            var n = {
                doubleFlag: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                seqId: r.Message.getFieldWithDefault(t, 2, 0),
                renewalsNum: r.Message.getFieldWithDefault(t, 3, 0),
                triggersNum: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (n.$jspbMessageInstance = t), n
        }), proto.webcast.im.DoubleLikeDetail.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.DoubleLikeDetail;
            return proto.webcast.im.DoubleLikeDetail.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.DoubleLikeDetail.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readBool();
                        e.setDoubleFlag(n);
                        break;
                    case 2:
                        n = t.readInt32();
                        e.setSeqId(n);
                        break;
                    case 3:
                        n = t.readInt32();
                        e.setRenewalsNum(n);
                        break;
                    case 4:
                        n = t.readInt32();
                        e.setTriggersNum(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DoubleLikeDetail.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DoubleLikeDetail.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DoubleLikeDetail.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getDoubleFlag()) && t.writeBool(1, n), 0 !== (n = e.getSeqId()) && t.writeInt32(2, n), 0 !== (n = e.getRenewalsNum()) && t.writeInt32(3, n), 0 !== (n = e.getTriggersNum()) && t.writeInt32(4, n)
        }, proto.webcast.im.DoubleLikeDetail.prototype.getDoubleFlag = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.DoubleLikeDetail.prototype.setDoubleFlag = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, proto.webcast.im.DoubleLikeDetail.prototype.getSeqId = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.DoubleLikeDetail.prototype.setSeqId = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.DoubleLikeDetail.prototype.getRenewalsNum = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.DoubleLikeDetail.prototype.setRenewalsNum = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.DoubleLikeDetail.prototype.getTriggersNum = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.DoubleLikeDetail.prototype.setTriggersNum = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DisplayControlInfo.prototype.toObject = function (e) {
            return proto.webcast.im.DisplayControlInfo.toObject(e, this)
        }, proto.webcast.im.DisplayControlInfo.toObject = function (e, t) {
            var n = {
                showText: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                showIcons: r.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (n.$jspbMessageInstance = t), n
        }), proto.webcast.im.DisplayControlInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.DisplayControlInfo;
            return proto.webcast.im.DisplayControlInfo.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.DisplayControlInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readBool();
                        e.setShowText(n);
                        break;
                    case 2:
                        n = t.readBool();
                        e.setShowIcons(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DisplayControlInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DisplayControlInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DisplayControlInfo.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getShowText()) && t.writeBool(1, n), (n = e.getShowIcons()) && t.writeBool(2, n)
        }, proto.webcast.im.DisplayControlInfo.prototype.getShowText = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.DisplayControlInfo.prototype.setShowText = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, proto.webcast.im.DisplayControlInfo.prototype.getShowIcons = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.DisplayControlInfo.prototype.setShowIcons = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LikeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LikeMessage.toObject(e, this)
        }, proto.webcast.im.LikeMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && a.Common.toObject(e, n),
                count: r.Message.getFieldWithDefault(t, 2, "0"),
                total: r.Message.getFieldWithDefault(t, 3, "0"),
                color: r.Message.getFieldWithDefault(t, 4, "0"),
                user: (n = t.getUser()) && s.User.toObject(e, n),
                icon: r.Message.getFieldWithDefault(t, 6, ""),
                doubleLikeDetail: (n = t.getDoubleLikeDetail()) && proto.webcast.im.DoubleLikeDetail.toObject(e, n),
                displayControlInfo: (n = t.getDisplayControlInfo()) && proto.webcast.im.DisplayControlInfo.toObject(e, n),
                linkmicGuestUid: r.Message.getFieldWithDefault(t, 9, "0"),
                scene: r.Message.getFieldWithDefault(t, 10, ""),
                picoDisplayInfo: (n = t.getPicoDisplayInfo()) && proto.webcast.im.PicoDisplayInfo.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LikeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LikeMessage;
            return proto.webcast.im.LikeMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LikeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new a.Common;
                        t.readMessage(n, a.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setCount(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setTotal(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setColor(n);
                        break;
                    case 5:
                        n = new s.User;
                        t.readMessage(n, s.User.deserializeBinaryFromReader), e.setUser(n);
                        break;
                    case 6:
                        n = t.readString();
                        e.setIcon(n);
                        break;
                    case 7:
                        n = new proto.webcast.im.DoubleLikeDetail;
                        t.readMessage(n, proto.webcast.im.DoubleLikeDetail.deserializeBinaryFromReader), e.setDoubleLikeDetail(n);
                        break;
                    case 8:
                        n = new proto.webcast.im.DisplayControlInfo;
                        t.readMessage(n, proto.webcast.im.DisplayControlInfo.deserializeBinaryFromReader), e.setDisplayControlInfo(n);
                        break;
                    case 9:
                        n = t.readInt64String();
                        e.setLinkmicGuestUid(n);
                        break;
                    case 10:
                        n = t.readString();
                        e.setScene(n);
                        break;
                    case 11:
                        n = new proto.webcast.im.PicoDisplayInfo;
                        t.readMessage(n, proto.webcast.im.PicoDisplayInfo.deserializeBinaryFromReader), e.setPicoDisplayInfo(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LikeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LikeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LikeMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, a.Common.serializeBinaryToWriter), n = e.getCount(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getTotal(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getColor(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), null != (n = e.getUser()) && t.writeMessage(5, n, s.User.serializeBinaryToWriter), (n = e.getIcon()).length > 0 && t.writeString(6, n), null != (n = e.getDoubleLikeDetail()) && t.writeMessage(7, n, proto.webcast.im.DoubleLikeDetail.serializeBinaryToWriter), null != (n = e.getDisplayControlInfo()) && t.writeMessage(8, n, proto.webcast.im.DisplayControlInfo.serializeBinaryToWriter), n = e.getLinkmicGuestUid(), 0 !== parseInt(n, 10) && t.writeInt64String(9, n), (n = e.getScene()).length > 0 && t.writeString(10, n), null != (n = e.getPicoDisplayInfo()) && t.writeMessage(11, n, proto.webcast.im.PicoDisplayInfo.serializeBinaryToWriter)
        }, proto.webcast.im.LikeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LikeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LikeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LikeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LikeMessage.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LikeMessage.prototype.setCount = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LikeMessage.prototype.getTotal = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.LikeMessage.prototype.setTotal = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.LikeMessage.prototype.getColor = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.LikeMessage.prototype.setColor = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.LikeMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, s.User, 5)
        }, proto.webcast.im.LikeMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.LikeMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.LikeMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.LikeMessage.prototype.getIcon = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.LikeMessage.prototype.setIcon = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.LikeMessage.prototype.getDoubleLikeDetail = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.DoubleLikeDetail, 7)
        }, proto.webcast.im.LikeMessage.prototype.setDoubleLikeDetail = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.LikeMessage.prototype.clearDoubleLikeDetail = function () {
            return this.setDoubleLikeDetail(undefined)
        }, proto.webcast.im.LikeMessage.prototype.hasDoubleLikeDetail = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.LikeMessage.prototype.getDisplayControlInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.DisplayControlInfo, 8)
        }, proto.webcast.im.LikeMessage.prototype.setDisplayControlInfo = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.LikeMessage.prototype.clearDisplayControlInfo = function () {
            return this.setDisplayControlInfo(undefined)
        }, proto.webcast.im.LikeMessage.prototype.hasDisplayControlInfo = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.LikeMessage.prototype.getLinkmicGuestUid = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.im.LikeMessage.prototype.setLinkmicGuestUid = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        }, proto.webcast.im.LikeMessage.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.LikeMessage.prototype.setScene = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.LikeMessage.prototype.getPicoDisplayInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.PicoDisplayInfo, 11)
        }, proto.webcast.im.LikeMessage.prototype.setPicoDisplayInfo = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        }, proto.webcast.im.LikeMessage.prototype.clearPicoDisplayInfo = function () {
            return this.setPicoDisplayInfo(undefined)
        }, proto.webcast.im.LikeMessage.prototype.hasPicoDisplayInfo = function () {
            return null != r.Message.getField(this, 11)
        }, o.object.extend(t, proto.webcast.im)
    }, 19145: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(8411);
        o.object.extend(proto, s);
        var a = n(50684);
        o.object.extend(proto, a);
        var p = n(91057);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.LinkerContributeMessage", null, i), o.exportSymbol("proto.webcast.im.UserContribute", null, i), proto.webcast.im.UserContribute = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.UserContribute, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.UserContribute.displayName = "proto.webcast.im.UserContribute"), proto.webcast.im.LinkerContributeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerContributeMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.LinkerContributeMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerContributeMessage.displayName = "proto.webcast.im.LinkerContributeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserContribute.prototype.toObject = function (e) {
            return proto.webcast.im.UserContribute.toObject(e, this)
        }, proto.webcast.im.UserContribute.toObject = function (e, t) {
            var n, o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                rank: r.Message.getFieldWithDefault(t, 2, "0"),
                score: r.Message.getFieldWithDefault(t, 3, "0"),
                nickname: r.Message.getFieldWithDefault(t, 4, ""),
                avatarThumb: (n = t.getAvatarThumb()) && s.Image.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.UserContribute.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.UserContribute;
            return proto.webcast.im.UserContribute.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.UserContribute.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setRank(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setScore(n);
                        break;
                    case 4:
                        n = t.readString();
                        e.setNickname(n);
                        break;
                    case 5:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarThumb(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UserContribute.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserContribute.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UserContribute.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getRank(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getScore(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), (n = e.getNickname()).length > 0 && t.writeString(4, n), null != (n = e.getAvatarThumb()) && t.writeMessage(5, n, s.Image.serializeBinaryToWriter)
        }, proto.webcast.im.UserContribute.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.UserContribute.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.UserContribute.prototype.getRank = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.UserContribute.prototype.setRank = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.UserContribute.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.UserContribute.prototype.setScore = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.UserContribute.prototype.getNickname = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.UserContribute.prototype.setNickname = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.UserContribute.prototype.getAvatarThumb = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        }, proto.webcast.im.UserContribute.prototype.setAvatarThumb = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.UserContribute.prototype.clearAvatarThumb = function () {
            return this.setAvatarThumb(undefined)
        }, proto.webcast.im.UserContribute.prototype.hasAvatarThumb = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.LinkerContributeMessage.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerContributeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerContributeMessage.toObject(e, this)
        }, proto.webcast.im.LinkerContributeMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && a.Common.toObject(e, n),
                userId: r.Message.getFieldWithDefault(t, 2, "0"),
                totalScore: r.Message.getFieldWithDefault(t, 3, "0"),
                userContributeListList: r.Message.toObjectList(t.getUserContributeListList(), proto.webcast.im.UserContribute.toObject, e),
                microTimeStamp: r.Message.getFieldWithDefault(t, 5, "0"),
                scene: r.Message.getFieldWithDefault(t, 6, "0"),
                totalScoreRealStr: r.Message.getFieldWithDefault(t, 7, ""),
                totalScoreStr: r.Message.getFieldWithDefault(t, 8, ""),
                quickInteract: (n = t.getQuickInteract()) && p.LinkmicQuickInteract.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkerContributeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerContributeMessage;
            return proto.webcast.im.LinkerContributeMessage.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LinkerContributeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new a.Common;
                        t.readMessage(n, a.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setTotalScore(n);
                        break;
                    case 4:
                        n = new proto.webcast.im.UserContribute;
                        t.readMessage(n, proto.webcast.im.UserContribute.deserializeBinaryFromReader), e.addUserContributeList(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setMicroTimeStamp(n);
                        break;
                    case 6:
                        n = t.readInt64String();
                        e.setScene(n);
                        break;
                    case 7:
                        n = t.readString();
                        e.setTotalScoreRealStr(n);
                        break;
                    case 8:
                        n = t.readString();
                        e.setTotalScoreStr(n);
                        break;
                    case 9:
                        n = new p.LinkmicQuickInteract;
                        t.readMessage(n, p.LinkmicQuickInteract.deserializeBinaryFromReader), e.setQuickInteract(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkerContributeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerContributeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkerContributeMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, a.Common.serializeBinaryToWriter), n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getTotalScore(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), (n = e.getUserContributeListList()).length > 0 && t.writeRepeatedMessage(4, n, proto.webcast.im.UserContribute.serializeBinaryToWriter), n = e.getMicroTimeStamp(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), n = e.getScene(), 0 !== parseInt(n, 10) && t.writeInt64String(6, n), (n = e.getTotalScoreRealStr()).length > 0 && t.writeString(7, n), (n = e.getTotalScoreStr()).length > 0 && t.writeString(8, n), null != (n = e.getQuickInteract()) && t.writeMessage(9, n, p.LinkmicQuickInteract.serializeBinaryToWriter)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LinkerContributeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LinkerContributeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LinkerContributeMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getTotalScore = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.LinkerContributeMessage.prototype.setTotalScore = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getUserContributeListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.UserContribute, 4)
        }, proto.webcast.im.LinkerContributeMessage.prototype.setUserContributeListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.addUserContributeList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.UserContribute, t)
        }, proto.webcast.im.LinkerContributeMessage.prototype.clearUserContributeListList = function () {
            return this.setUserContributeListList([])
        }, proto.webcast.im.LinkerContributeMessage.prototype.getMicroTimeStamp = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.LinkerContributeMessage.prototype.setMicroTimeStamp = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.LinkerContributeMessage.prototype.setScene = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getTotalScoreRealStr = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.LinkerContributeMessage.prototype.setTotalScoreRealStr = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getTotalScoreStr = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.LinkerContributeMessage.prototype.setTotalScoreStr = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.getQuickInteract = function () {
            return r.Message.getWrapperField(this, p.LinkmicQuickInteract, 9)
        }, proto.webcast.im.LinkerContributeMessage.prototype.setQuickInteract = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.LinkerContributeMessage.prototype.clearQuickInteract = function () {
            return this.setQuickInteract(undefined)
        }, proto.webcast.im.LinkerContributeMessage.prototype.hasQuickInteract = function () {
            return null != r.Message.getField(this, 9)
        }, o.object.extend(t, proto.webcast.im)
    }, 6423: function (e, t, n) {
        var r = n(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = n(8411);
        o.object.extend(proto, s);
        var a = n(50684);
        o.object.extend(proto, a);
        var p = n(99080);
        o.object.extend(proto, p);
        var c = n(15968);
        o.object.extend(proto, c);
        var l = n(91057);
        o.object.extend(proto, l);
        var u = n(64925);
        o.object.extend(proto, u);
        var g = n(99222);
        o.object.extend(proto, g);
        var d = n(54468);
        o.object.extend(proto, d);
        var m = n(54861);
        o.object.extend(proto, m);
        var C = n(70561);
        o.object.extend(proto, C);
        var b = n(4120);
        o.object.extend(proto, b), o.exportSymbol("proto.webcast.im.AnchorUpdateLayoutContent", null, i), o.exportSymbol("proto.webcast.im.AnchorUpdateLinkmicConfigContent", null, i), o.exportSymbol("proto.webcast.im.ChannelActionType", null, i), o.exportSymbol("proto.webcast.im.ChannelNoticeContent", null, i), o.exportSymbol("proto.webcast.im.CityEffect", null, i), o.exportSymbol("proto.webcast.im.CrossRoomLinkCancelInviteContent", null, i), o.exportSymbol("proto.webcast.im.CrossRoomLinkInviteContent", null, i), o.exportSymbol("proto.webcast.im.CrossRoomLinkReplyContent", null, i), o.exportSymbol("proto.webcast.im.CrossRoomRTCInfoContent", null, i), o.exportSymbol("proto.webcast.im.FollowUserType", null, i), o.exportSymbol("proto.webcast.im.LinkMessage", null, i), o.exportSymbol("proto.webcast.im.LinkMessage.ContentCase", null, i), o.exportSymbol("proto.webcast.im.LinkMessageType", null, i), o.exportSymbol("proto.webcast.im.LinkPhaseEnterNextNotifyContent", null, i), o.exportSymbol("proto.webcast.im.LinkPrepareApplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerAnchorStreamSwitchContent", null, i), o.exportSymbol("proto.webcast.im.LinkerApplyExpiredContent", null, i), o.exportSymbol("proto.webcast.im.LinkerApplyRankChangeContent", null, i), o.exportSymbol("proto.webcast.im.LinkerApplyStrongReminderContent", null, i), o.exportSymbol("proto.webcast.im.LinkerApplyStrongReminderContent.TriggerSource", null, i), o.exportSymbol("proto.webcast.im.LinkerAvatarAuditContent", null, i), o.exportSymbol("proto.webcast.im.LinkerBanContent", null, i), o.exportSymbol("proto.webcast.im.LinkerBattleConnectContent", null, i), o.exportSymbol("proto.webcast.im.LinkerCancelContent", null, i), o.exportSymbol("proto.webcast.im.LinkerChangeMultiPKTeamInfoContent", null, i), o.exportSymbol("proto.webcast.im.LinkerChangePlayModeContent", null, i), o.exportSymbol("proto.webcast.im.LinkerClickScreenContent", null, i), o.exportSymbol("proto.webcast.im.LinkerCloseContent", null, i), o.exportSymbol("proto.webcast.im.LinkerCloseContent.CloseSource", null, i), o.exportSymbol("proto.webcast.im.LinkerCreateContent", null, i), o.exportSymbol("proto.webcast.im.LinkerCrossRoomUpdateContent", null, i), o.exportSymbol("proto.webcast.im.LinkerDegradeAlertContent", null, i), o.exportSymbol("proto.webcast.im.LinkerEnlargeGuestApplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerEnlargeGuestInviteContent", null, i), o.exportSymbol("proto.webcast.im.LinkerEnlargeGuestReplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerEnterContent", null, i), o.exportSymbol("proto.webcast.im.LinkerFollowStrongGuideContent", null, i), o.exportSymbol("proto.webcast.im.LinkerGuestExitCastScreenContent", null, i), o.exportSymbol("proto.webcast.im.LinkerGuestInviteContent", null, i), o.exportSymbol("proto.webcast.im.LinkerInviteContent", null, i), o.exportSymbol("proto.webcast.im.LinkerItemContent", null, i), o.exportSymbol("proto.webcast.im.LinkerKickOutContent", null, i), o.exportSymbol("proto.webcast.im.LinkerLeaveContent", null, i), o.exportSymbol("proto.webcast.im.LinkerLinkedListChangeContent", null, i), o.exportSymbol("proto.webcast.im.LinkerLockPositionContent", null, i), o.exportSymbol("proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent", null, i), o.exportSymbol("proto.webcast.im.LinkerReplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerResumeApplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerResumeApplyContent.ApplyParam", null, i), o.exportSymbol("proto.webcast.im.LinkerResumeAudienceContent", null, i), o.exportSymbol("proto.webcast.im.LinkerSceneType", null, i), o.exportSymbol("proto.webcast.im.LinkerSetting", null, i), o.exportSymbol("proto.webcast.im.LinkerShareVideoImContent", null, i), o.exportSymbol("proto.webcast.im.LinkerSwitchSceneContent", null, i), o.exportSymbol("proto.webcast.im.LinkerSysKickOutContent", null, i), o.exportSymbol("proto.webcast.im.LinkerUpdateLinkTypeApplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerUpdateLinkTypeReplyContent", null, i), o.exportSymbol("proto.webcast.im.LinkerUpdateUserContent", null, i), o.exportSymbol("proto.webcast.im.LinkerViolationReminderContent", null, i), o.exportSymbol("proto.webcast.im.LinkerWaitingListChangeContent", null, i), o.exportSymbol("proto.webcast.im.LinkmicInfo", null, i), o.exportSymbol("proto.webcast.im.MatchEffect", null, i), o.exportSymbol("proto.webcast.im.MessagePushType", null, i), proto.webcast.im.LinkMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, proto.webcast.im.LinkMessage.oneofGroups_)
        }, o.inherits(proto.webcast.im.LinkMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkMessage.displayName = "proto.webcast.im.LinkMessage"), proto.webcast.im.LinkmicInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkmicInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkmicInfo.displayName = "proto.webcast.im.LinkmicInfo"), proto.webcast.im.LinkerSetting = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkerSetting, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerSetting.displayName = "proto.webcast.im.LinkerSetting"), proto.webcast.im.LinkerInviteContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerInviteContent.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.LinkerInviteContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerInviteContent.displayName = "proto.webcast.im.LinkerInviteContent"), proto.webcast.im.LinkPrepareApplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkPrepareApplyContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkPrepareApplyContent.displayName = "proto.webcast.im.LinkPrepareApplyContent"), proto.webcast.im.LinkerReplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkerReplyContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerReplyContent.displayName = "proto.webcast.im.LinkerReplyContent"), proto.webcast.im.LinkerCreateContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkerCreateContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerCreateContent.displayName = "proto.webcast.im.LinkerCreateContent"), proto.webcast.im.MatchEffect = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.MatchEffect, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.MatchEffect.displayName = "proto.webcast.im.MatchEffect"), proto.webcast.im.CityEffect = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CityEffect.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.CityEffect, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.CityEffect.displayName = "proto.webcast.im.CityEffect"), proto.webcast.im.LinkerEnterContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerEnterContent.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.LinkerEnterContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerEnterContent.displayName = "proto.webcast.im.LinkerEnterContent"), proto.webcast.im.LinkerViolationReminderContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkerViolationReminderContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerViolationReminderContent.displayName = "proto.webcast.im.LinkerViolationReminderContent"), proto.webcast.im.LinkerCloseContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LinkerCloseContent, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LinkerCloseContent.displayName = "proto.webcast.im.LinkerCloseContent"), proto.webcast.im.LinkerLeaveContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerLeaveContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerLeaveContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerLeaveContent.displayName = "proto.webcast.im.LinkerLeaveContent"),proto.webcast.im.LinkerCancelContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerCancelContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerCancelContent.displayName = "proto.webcast.im.LinkerCancelContent"),proto.webcast.im.LinkerKickOutContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerKickOutContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerKickOutContent.displayName = "proto.webcast.im.LinkerKickOutContent"),proto.webcast.im.LinkerSysKickOutContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerSysKickOutContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerSysKickOutContent.displayName = "proto.webcast.im.LinkerSysKickOutContent"),proto.webcast.im.LinkerWaitingListChangeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerWaitingListChangeContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerWaitingListChangeContent.displayName = "proto.webcast.im.LinkerWaitingListChangeContent"),proto.webcast.im.LinkerLinkedListChangeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerLinkedListChangeContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerLinkedListChangeContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerLinkedListChangeContent.displayName = "proto.webcast.im.LinkerLinkedListChangeContent"),proto.webcast.im.LinkerBanContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerBanContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerBanContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerBanContent.displayName = "proto.webcast.im.LinkerBanContent"),proto.webcast.im.LinkerUpdateUserContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerUpdateUserContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerUpdateUserContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerUpdateUserContent.displayName = "proto.webcast.im.LinkerUpdateUserContent"),proto.webcast.im.ChannelNoticeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.ChannelNoticeContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.ChannelNoticeContent.displayName = "proto.webcast.im.ChannelNoticeContent"),proto.webcast.im.LinkerItemContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerItemContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerItemContent.displayName = "proto.webcast.im.LinkerItemContent"),proto.webcast.im.LinkerUpdateLinkTypeApplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerUpdateLinkTypeApplyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerUpdateLinkTypeApplyContent.displayName = "proto.webcast.im.LinkerUpdateLinkTypeApplyContent"),proto.webcast.im.LinkerUpdateLinkTypeReplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerUpdateLinkTypeReplyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerUpdateLinkTypeReplyContent.displayName = "proto.webcast.im.LinkerUpdateLinkTypeReplyContent"),proto.webcast.im.LinkerAvatarAuditContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerAvatarAuditContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerAvatarAuditContent.displayName = "proto.webcast.im.LinkerAvatarAuditContent"),proto.webcast.im.LinkerApplyExpiredContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerApplyExpiredContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerApplyExpiredContent.displayName = "proto.webcast.im.LinkerApplyExpiredContent"),proto.webcast.im.LinkerApplyStrongReminderContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerApplyStrongReminderContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerApplyStrongReminderContent.displayName = "proto.webcast.im.LinkerApplyStrongReminderContent"),proto.webcast.im.LinkerAnchorStreamSwitchContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerAnchorStreamSwitchContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerAnchorStreamSwitchContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerAnchorStreamSwitchContent.displayName = "proto.webcast.im.LinkerAnchorStreamSwitchContent"),proto.webcast.im.LinkerClickScreenContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerClickScreenContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerClickScreenContent.displayName = "proto.webcast.im.LinkerClickScreenContent"),proto.webcast.im.LinkerFollowStrongGuideContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerFollowStrongGuideContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerFollowStrongGuideContent.displayName = "proto.webcast.im.LinkerFollowStrongGuideContent"),proto.webcast.im.LinkerLockPositionContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerLockPositionContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerLockPositionContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerLockPositionContent.displayName = "proto.webcast.im.LinkerLockPositionContent"),proto.webcast.im.LinkerShareVideoImContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerShareVideoImContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerShareVideoImContent.displayName = "proto.webcast.im.LinkerShareVideoImContent"),proto.webcast.im.LinkerGuestInviteContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerGuestInviteContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerGuestInviteContent.displayName = "proto.webcast.im.LinkerGuestInviteContent"),proto.webcast.im.LinkerGuestExitCastScreenContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerGuestExitCastScreenContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerGuestExitCastScreenContent.displayName = "proto.webcast.im.LinkerGuestExitCastScreenContent"),proto.webcast.im.LinkerSwitchSceneContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerSwitchSceneContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerSwitchSceneContent.displayName = "proto.webcast.im.LinkerSwitchSceneContent"),proto.webcast.im.LinkPhaseEnterNextNotifyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkPhaseEnterNextNotifyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkPhaseEnterNextNotifyContent.displayName = "proto.webcast.im.LinkPhaseEnterNextNotifyContent"),proto.webcast.im.LinkerChangePlayModeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerChangePlayModeContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerChangePlayModeContent.displayName = "proto.webcast.im.LinkerChangePlayModeContent"),proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.displayName = "proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent"),proto.webcast.im.LinkerDegradeAlertContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerDegradeAlertContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerDegradeAlertContent.displayName = "proto.webcast.im.LinkerDegradeAlertContent"),proto.webcast.im.LinkerEnlargeGuestInviteContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerEnlargeGuestInviteContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerEnlargeGuestInviteContent.displayName = "proto.webcast.im.LinkerEnlargeGuestInviteContent"),proto.webcast.im.LinkerEnlargeGuestReplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerEnlargeGuestReplyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerEnlargeGuestReplyContent.displayName = "proto.webcast.im.LinkerEnlargeGuestReplyContent"),proto.webcast.im.LinkerEnlargeGuestApplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerEnlargeGuestApplyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerEnlargeGuestApplyContent.displayName = "proto.webcast.im.LinkerEnlargeGuestApplyContent"),proto.webcast.im.CrossRoomLinkInviteContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.CrossRoomLinkInviteContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.CrossRoomLinkInviteContent.displayName = "proto.webcast.im.CrossRoomLinkInviteContent"),proto.webcast.im.CrossRoomLinkReplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CrossRoomLinkReplyContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.CrossRoomLinkReplyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.CrossRoomLinkReplyContent.displayName = "proto.webcast.im.CrossRoomLinkReplyContent"),proto.webcast.im.CrossRoomLinkCancelInviteContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.CrossRoomLinkCancelInviteContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.CrossRoomLinkCancelInviteContent.displayName = "proto.webcast.im.CrossRoomLinkCancelInviteContent"),proto.webcast.im.LinkerCrossRoomUpdateContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerCrossRoomUpdateContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerCrossRoomUpdateContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerCrossRoomUpdateContent.displayName = "proto.webcast.im.LinkerCrossRoomUpdateContent"),proto.webcast.im.LinkerChangeMultiPKTeamInfoContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerChangeMultiPKTeamInfoContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.displayName = "proto.webcast.im.LinkerChangeMultiPKTeamInfoContent"),proto.webcast.im.LinkerResumeAudienceContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerResumeAudienceContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerResumeAudienceContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerResumeAudienceContent.displayName = "proto.webcast.im.LinkerResumeAudienceContent"),proto.webcast.im.LinkerBattleConnectContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkerBattleConnectContent.repeatedFields_, null)
        },o.inherits(proto.webcast.im.LinkerBattleConnectContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerBattleConnectContent.displayName = "proto.webcast.im.LinkerBattleConnectContent"),proto.webcast.im.LinkerResumeApplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerResumeApplyContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerResumeApplyContent.displayName = "proto.webcast.im.LinkerResumeApplyContent"),proto.webcast.im.LinkerResumeApplyContent.ApplyParam = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerResumeApplyContent.ApplyParam, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerResumeApplyContent.ApplyParam.displayName = "proto.webcast.im.LinkerResumeApplyContent.ApplyParam"),proto.webcast.im.CrossRoomRTCInfoContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.CrossRoomRTCInfoContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.CrossRoomRTCInfoContent.displayName = "proto.webcast.im.CrossRoomRTCInfoContent"),proto.webcast.im.AnchorUpdateLinkmicConfigContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.AnchorUpdateLinkmicConfigContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.AnchorUpdateLinkmicConfigContent.displayName = "proto.webcast.im.AnchorUpdateLinkmicConfigContent"),proto.webcast.im.AnchorUpdateLayoutContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.AnchorUpdateLayoutContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.AnchorUpdateLayoutContent.displayName = "proto.webcast.im.AnchorUpdateLayoutContent"),proto.webcast.im.LinkerApplyRankChangeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.webcast.im.LinkerApplyRankChangeContent, r.Message),o.DEBUG && !COMPILED && (proto.webcast.im.LinkerApplyRankChangeContent.displayName = "proto.webcast.im.LinkerApplyRankChangeContent"),proto.webcast.im.LinkMessage.oneofGroups_ = [[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 101]],proto.webcast.im.LinkMessage.ContentCase = {
            CONTENT_NOT_SET: 0,
            INVITE_CONTENT: 5,
            REPLY_CONTENT: 6,
            CREATE_CONTENT: 7,
            CLOSE_CONTENT: 8,
            ENTER_CONTENT: 9,
            LEAVE_CONTENT: 10,
            CANCEL_CONTENT: 11,
            KICK_OUT_CONTENT: 12,
            LINKED_LIST_CHANGE_CONTENT: 13,
            UPDATE_USER_CONTENT: 14,
            WAITING_LIST_CHANGE_CONTENT: 15,
            BAN_CONTENT: 16,
            ITEM_CONTENT: 17,
            VIOLATION_REMINDER_CONTENT: 18,
            UPDATE_LINK_TYPE_APPLY_CONTENT: 19,
            UPDATE_LINK_TYPE_REPLY_CONTENT: 20,
            AVATAR_AUDIT_CONTENT: 21,
            APPLY_EXPIRED_CONTENT: 22,
            APPLY_STRONG_REMINDER_CONTENT: 23,
            ANCHOR_STREAM_SWITCH_CONTENT: 24,
            CLICK_SCREEN_CONTENT: 25,
            LOCK_POSITION_CONTENT: 26,
            FOLLOW_STRONG_GUIDE_CONTENT: 27,
            SHARE_VIDEO_IM_CONTENT: 28,
            GUEST_INVITE_CONTENT: 29,
            EXIT_CAST_SCREEN_CONTENT: 30,
            SWITCH_SCENE_CONTENT: 31,
            LINK_PHASE_ENTER_NEXT_CONTENT: 32,
            CHANGE_PLAY_MODE_CONTENT: 33,
            LOW_BALANCE_FOR_PAID_LINKMIC_CONTENT: 34,
            DEGRADE_ALERT_CONTENT: 35,
            ENLARGE_GUEST_INVITE_CONTENT: 36,
            ENLARGE_GUEST_REPLY_CONTENT: 37,
            ENLARGE_GUEST_APPLY_CONTENT: 38,
            PREPARE_APPLY_CONTENT: 39,
            CROSS_ROOM_UPDATE_CONTENT: 40,
            CHANGE_MULTI_PK_TEAM_INFO_CONTENT: 41,
            CROSS_ROOM_LINK_INVITE_CONTENT: 42,
            CROSS_ROOM_LINK_REPLY_CONTENT: 43,
            CROSS_ROOM_LINK_CANCEL_INVITE_CONTENT: 44,
            LINKER_RESUME_AUDIENCE_CONTENT: 45,
            LINKER_BATTLE_CONNECT_CONTENT: 46,
            LINKER_RESUME_APPLY_CONTENT: 47,
            CROSS_ROOM_RTC_INFO_CONTENT: 48,
            ANCHOR_UPDATE_LINKMIC_CONFIG_CONTENT: 49,
            ANCHOR_UPDATE_LAYOUT_CONTENT: 50,
            APPLY_RANK_CHANGE_CONTENT: 52,
            SYS_KICK_OUT_CONTENT: 101
        },proto.webcast.im.LinkMessage.prototype.getContentCase = function () {
            return r.Message.computeOneofCase(this, proto.webcast.im.LinkMessage.oneofGroups_[0])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LinkMessage.toObject(e, this)
        }, proto.webcast.im.LinkMessage.toObject = function (e, t) {
            var n, o = {
                common: (n = t.getCommon()) && a.Common.toObject(e, n),
                messageType: r.Message.getFieldWithDefault(t, 2, "0"),
                linkerId: r.Message.getFieldWithDefault(t, 3, "0"),
                scene: r.Message.getFieldWithDefault(t, 4, "0"),
                inviteContent: (n = t.getInviteContent()) && proto.webcast.im.LinkerInviteContent.toObject(e, n),
                replyContent: (n = t.getReplyContent()) && proto.webcast.im.LinkerReplyContent.toObject(e, n),
                createContent: (n = t.getCreateContent()) && proto.webcast.im.LinkerCreateContent.toObject(e, n),
                closeContent: (n = t.getCloseContent()) && proto.webcast.im.LinkerCloseContent.toObject(e, n),
                enterContent: (n = t.getEnterContent()) && proto.webcast.im.LinkerEnterContent.toObject(e, n),
                leaveContent: (n = t.getLeaveContent()) && proto.webcast.im.LinkerLeaveContent.toObject(e, n),
                cancelContent: (n = t.getCancelContent()) && proto.webcast.im.LinkerCancelContent.toObject(e, n),
                kickOutContent: (n = t.getKickOutContent()) && proto.webcast.im.LinkerKickOutContent.toObject(e, n),
                linkedListChangeContent: (n = t.getLinkedListChangeContent()) && proto.webcast.im.LinkerLinkedListChangeContent.toObject(e, n),
                updateUserContent: (n = t.getUpdateUserContent()) && proto.webcast.im.LinkerUpdateUserContent.toObject(e, n),
                waitingListChangeContent: (n = t.getWaitingListChangeContent()) && proto.webcast.im.LinkerWaitingListChangeContent.toObject(e, n),
                banContent: (n = t.getBanContent()) && proto.webcast.im.LinkerBanContent.toObject(e, n),
                itemContent: (n = t.getItemContent()) && proto.webcast.im.LinkerItemContent.toObject(e, n),
                violationReminderContent: (n = t.getViolationReminderContent()) && proto.webcast.im.LinkerViolationReminderContent.toObject(e, n),
                updateLinkTypeApplyContent: (n = t.getUpdateLinkTypeApplyContent()) && proto.webcast.im.LinkerUpdateLinkTypeApplyContent.toObject(e, n),
                updateLinkTypeReplyContent: (n = t.getUpdateLinkTypeReplyContent()) && proto.webcast.im.LinkerUpdateLinkTypeReplyContent.toObject(e, n),
                avatarAuditContent: (n = t.getAvatarAuditContent()) && proto.webcast.im.LinkerAvatarAuditContent.toObject(e, n),
                applyExpiredContent: (n = t.getApplyExpiredContent()) && proto.webcast.im.LinkerApplyExpiredContent.toObject(e, n),
                applyStrongReminderContent: (n = t.getApplyStrongReminderContent()) && proto.webcast.im.LinkerApplyStrongReminderContent.toObject(e, n),
                anchorStreamSwitchContent: (n = t.getAnchorStreamSwitchContent()) && proto.webcast.im.LinkerAnchorStreamSwitchContent.toObject(e, n),
                clickScreenContent: (n = t.getClickScreenContent()) && proto.webcast.im.LinkerClickScreenContent.toObject(e, n),
                lockPositionContent: (n = t.getLockPositionContent()) && proto.webcast.im.LinkerLockPositionContent.toObject(e, n),
                followStrongGuideContent: (n = t.getFollowStrongGuideContent()) && proto.webcast.im.LinkerFollowStrongGuideContent.toObject(e, n),
                shareVideoImContent: (n = t.getShareVideoImContent()) && proto.webcast.im.LinkerShareVideoImContent.toObject(e, n),
                guestInviteContent: (n = t.getGuestInviteContent()) && proto.webcast.im.LinkerGuestInviteContent.toObject(e, n),
                exitCastScreenContent: (n = t.getExitCastScreenContent()) && proto.webcast.im.LinkerGuestExitCastScreenContent.toObject(e, n),
                switchSceneContent: (n = t.getSwitchSceneContent()) && proto.webcast.im.LinkerSwitchSceneContent.toObject(e, n),
                linkPhaseEnterNextContent: (n = t.getLinkPhaseEnterNextContent()) && proto.webcast.im.LinkPhaseEnterNextNotifyContent.toObject(e, n),
                changePlayModeContent: (n = t.getChangePlayModeContent()) && proto.webcast.im.LinkerChangePlayModeContent.toObject(e, n),
                lowBalanceForPaidLinkmicContent: (n = t.getLowBalanceForPaidLinkmicContent()) && proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.toObject(e, n),
                degradeAlertContent: (n = t.getDegradeAlertContent()) && proto.webcast.im.LinkerDegradeAlertContent.toObject(e, n),
                enlargeGuestInviteContent: (n = t.getEnlargeGuestInviteContent()) && proto.webcast.im.LinkerEnlargeGuestInviteContent.toObject(e, n),
                enlargeGuestReplyContent: (n = t.getEnlargeGuestReplyContent()) && proto.webcast.im.LinkerEnlargeGuestReplyContent.toObject(e, n),
                enlargeGuestApplyContent: (n = t.getEnlargeGuestApplyContent()) && proto.webcast.im.LinkerEnlargeGuestApplyContent.toObject(e, n),
                prepareApplyContent: (n = t.getPrepareApplyContent()) && proto.webcast.im.LinkPrepareApplyContent.toObject(e, n),
                crossRoomUpdateContent: (n = t.getCrossRoomUpdateContent()) && proto.webcast.im.LinkerCrossRoomUpdateContent.toObject(e, n),
                changeMultiPkTeamInfoContent: (n = t.getChangeMultiPkTeamInfoContent()) && proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.toObject(e, n),
                crossRoomLinkInviteContent: (n = t.getCrossRoomLinkInviteContent()) && proto.webcast.im.CrossRoomLinkInviteContent.toObject(e, n),
                crossRoomLinkReplyContent: (n = t.getCrossRoomLinkReplyContent()) && proto.webcast.im.CrossRoomLinkReplyContent.toObject(e, n),
                crossRoomLinkCancelInviteContent: (n = t.getCrossRoomLinkCancelInviteContent()) && proto.webcast.im.CrossRoomLinkCancelInviteContent.toObject(e, n),
                linkerResumeAudienceContent: (n = t.getLinkerResumeAudienceContent()) && proto.webcast.im.LinkerResumeAudienceContent.toObject(e, n),
                linkerBattleConnectContent: (n = t.getLinkerBattleConnectContent()) && proto.webcast.im.LinkerBattleConnectContent.toObject(e, n),
                linkerResumeApplyContent: (n = t.getLinkerResumeApplyContent()) && proto.webcast.im.LinkerResumeApplyContent.toObject(e, n),
                crossRoomRtcInfoContent: (n = t.getCrossRoomRtcInfoContent()) && proto.webcast.im.CrossRoomRTCInfoContent.toObject(e, n),
                anchorUpdateLinkmicConfigContent: (n = t.getAnchorUpdateLinkmicConfigContent()) && proto.webcast.im.AnchorUpdateLinkmicConfigContent.toObject(e, n),
                anchorUpdateLayoutContent: (n = t.getAnchorUpdateLayoutContent()) && proto.webcast.im.AnchorUpdateLayoutContent.toObject(e, n),
                applyRankChangeContent: (n = t.getApplyRankChangeContent()) && proto.webcast.im.LinkerApplyRankChangeContent.toObject(e, n),
                sysKickOutContent: (n = t.getSysKickOutContent()) && proto.webcast.im.LinkerSysKickOutContent.toObject(e, n),
                fallbackScene: r.Message.getFieldWithDefault(t, 199, 0),
                extra: r.Message.getFieldWithDefault(t, 200, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkMessage;
            return proto.webcast.im.LinkMessage.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new a.Common;
                        t.readMessage(n, a.Common.deserializeBinaryFromReader), e.setCommon(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setMessageType(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setLinkerId(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setScene(n);
                        break;
                    case 5:
                        n = new proto.webcast.im.LinkerInviteContent;
                        t.readMessage(n, proto.webcast.im.LinkerInviteContent.deserializeBinaryFromReader), e.setInviteContent(n);
                        break;
                    case 6:
                        n = new proto.webcast.im.LinkerReplyContent;
                        t.readMessage(n, proto.webcast.im.LinkerReplyContent.deserializeBinaryFromReader), e.setReplyContent(n);
                        break;
                    case 7:
                        n = new proto.webcast.im.LinkerCreateContent;
                        t.readMessage(n, proto.webcast.im.LinkerCreateContent.deserializeBinaryFromReader), e.setCreateContent(n);
                        break;
                    case 8:
                        n = new proto.webcast.im.LinkerCloseContent;
                        t.readMessage(n, proto.webcast.im.LinkerCloseContent.deserializeBinaryFromReader), e.setCloseContent(n);
                        break;
                    case 9:
                        n = new proto.webcast.im.LinkerEnterContent;
                        t.readMessage(n, proto.webcast.im.LinkerEnterContent.deserializeBinaryFromReader), e.setEnterContent(n);
                        break;
                    case 10:
                        n = new proto.webcast.im.LinkerLeaveContent;
                        t.readMessage(n, proto.webcast.im.LinkerLeaveContent.deserializeBinaryFromReader), e.setLeaveContent(n);
                        break;
                    case 11:
                        n = new proto.webcast.im.LinkerCancelContent;
                        t.readMessage(n, proto.webcast.im.LinkerCancelContent.deserializeBinaryFromReader), e.setCancelContent(n);
                        break;
                    case 12:
                        n = new proto.webcast.im.LinkerKickOutContent;
                        t.readMessage(n, proto.webcast.im.LinkerKickOutContent.deserializeBinaryFromReader), e.setKickOutContent(n);
                        break;
                    case 13:
                        n = new proto.webcast.im.LinkerLinkedListChangeContent;
                        t.readMessage(n, proto.webcast.im.LinkerLinkedListChangeContent.deserializeBinaryFromReader), e.setLinkedListChangeContent(n);
                        break;
                    case 14:
                        n = new proto.webcast.im.LinkerUpdateUserContent;
                        t.readMessage(n, proto.webcast.im.LinkerUpdateUserContent.deserializeBinaryFromReader), e.setUpdateUserContent(n);
                        break;
                    case 15:
                        n = new proto.webcast.im.LinkerWaitingListChangeContent;
                        t.readMessage(n, proto.webcast.im.LinkerWaitingListChangeContent.deserializeBinaryFromReader), e.setWaitingListChangeContent(n);
                        break;
                    case 16:
                        n = new proto.webcast.im.LinkerBanContent;
                        t.readMessage(n, proto.webcast.im.LinkerBanContent.deserializeBinaryFromReader), e.setBanContent(n);
                        break;
                    case 17:
                        n = new proto.webcast.im.LinkerItemContent;
                        t.readMessage(n, proto.webcast.im.LinkerItemContent.deserializeBinaryFromReader), e.setItemContent(n);
                        break;
                    case 18:
                        n = new proto.webcast.im.LinkerViolationReminderContent;
                        t.readMessage(n, proto.webcast.im.LinkerViolationReminderContent.deserializeBinaryFromReader), e.setViolationReminderContent(n);
                        break;
                    case 19:
                        n = new proto.webcast.im.LinkerUpdateLinkTypeApplyContent;
                        t.readMessage(n, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.deserializeBinaryFromReader), e.setUpdateLinkTypeApplyContent(n);
                        break;
                    case 20:
                        n = new proto.webcast.im.LinkerUpdateLinkTypeReplyContent;
                        t.readMessage(n, proto.webcast.im.LinkerUpdateLinkTypeReplyContent.deserializeBinaryFromReader), e.setUpdateLinkTypeReplyContent(n);
                        break;
                    case 21:
                        n = new proto.webcast.im.LinkerAvatarAuditContent;
                        t.readMessage(n, proto.webcast.im.LinkerAvatarAuditContent.deserializeBinaryFromReader), e.setAvatarAuditContent(n);
                        break;
                    case 22:
                        n = new proto.webcast.im.LinkerApplyExpiredContent;
                        t.readMessage(n, proto.webcast.im.LinkerApplyExpiredContent.deserializeBinaryFromReader), e.setApplyExpiredContent(n);
                        break;
                    case 23:
                        n = new proto.webcast.im.LinkerApplyStrongReminderContent;
                        t.readMessage(n, proto.webcast.im.LinkerApplyStrongReminderContent.deserializeBinaryFromReader), e.setApplyStrongReminderContent(n);
                        break;
                    case 24:
                        n = new proto.webcast.im.LinkerAnchorStreamSwitchContent;
                        t.readMessage(n, proto.webcast.im.LinkerAnchorStreamSwitchContent.deserializeBinaryFromReader), e.setAnchorStreamSwitchContent(n);
                        break;
                    case 25:
                        n = new proto.webcast.im.LinkerClickScreenContent;
                        t.readMessage(n, proto.webcast.im.LinkerClickScreenContent.deserializeBinaryFromReader), e.setClickScreenContent(n);
                        break;
                    case 26:
                        n = new proto.webcast.im.LinkerLockPositionContent;
                        t.readMessage(n, proto.webcast.im.LinkerLockPositionContent.deserializeBinaryFromReader), e.setLockPositionContent(n);
                        break;
                    case 27:
                        n = new proto.webcast.im.LinkerFollowStrongGuideContent;
                        t.readMessage(n, proto.webcast.im.LinkerFollowStrongGuideContent.deserializeBinaryFromReader), e.setFollowStrongGuideContent(n);
                        break;
                    case 28:
                        n = new proto.webcast.im.LinkerShareVideoImContent;
                        t.readMessage(n, proto.webcast.im.LinkerShareVideoImContent.deserializeBinaryFromReader), e.setShareVideoImContent(n);
                        break;
                    case 29:
                        n = new proto.webcast.im.LinkerGuestInviteContent;
                        t.readMessage(n, proto.webcast.im.LinkerGuestInviteContent.deserializeBinaryFromReader), e.setGuestInviteContent(n);
                        break;
                    case 30:
                        n = new proto.webcast.im.LinkerGuestExitCastScreenContent;
                        t.readMessage(n, proto.webcast.im.LinkerGuestExitCastScreenContent.deserializeBinaryFromReader), e.setExitCastScreenContent(n);
                        break;
                    case 31:
                        n = new proto.webcast.im.LinkerSwitchSceneContent;
                        t.readMessage(n, proto.webcast.im.LinkerSwitchSceneContent.deserializeBinaryFromReader), e.setSwitchSceneContent(n);
                        break;
                    case 32:
                        n = new proto.webcast.im.LinkPhaseEnterNextNotifyContent;
                        t.readMessage(n, proto.webcast.im.LinkPhaseEnterNextNotifyContent.deserializeBinaryFromReader), e.setLinkPhaseEnterNextContent(n);
                        break;
                    case 33:
                        n = new proto.webcast.im.LinkerChangePlayModeContent;
                        t.readMessage(n, proto.webcast.im.LinkerChangePlayModeContent.deserializeBinaryFromReader), e.setChangePlayModeContent(n);
                        break;
                    case 34:
                        n = new proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent;
                        t.readMessage(n, proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.deserializeBinaryFromReader), e.setLowBalanceForPaidLinkmicContent(n);
                        break;
                    case 35:
                        n = new proto.webcast.im.LinkerDegradeAlertContent;
                        t.readMessage(n, proto.webcast.im.LinkerDegradeAlertContent.deserializeBinaryFromReader), e.setDegradeAlertContent(n);
                        break;
                    case 36:
                        n = new proto.webcast.im.LinkerEnlargeGuestInviteContent;
                        t.readMessage(n, proto.webcast.im.LinkerEnlargeGuestInviteContent.deserializeBinaryFromReader), e.setEnlargeGuestInviteContent(n);
                        break;
                    case 37:
                        n = new proto.webcast.im.LinkerEnlargeGuestReplyContent;
                        t.readMessage(n, proto.webcast.im.LinkerEnlargeGuestReplyContent.deserializeBinaryFromReader), e.setEnlargeGuestReplyContent(n);
                        break;
                    case 38:
                        n = new proto.webcast.im.LinkerEnlargeGuestApplyContent;
                        t.readMessage(n, proto.webcast.im.LinkerEnlargeGuestApplyContent.deserializeBinaryFromReader), e.setEnlargeGuestApplyContent(n);
                        break;
                    case 39:
                        n = new proto.webcast.im.LinkPrepareApplyContent;
                        t.readMessage(n, proto.webcast.im.LinkPrepareApplyContent.deserializeBinaryFromReader), e.setPrepareApplyContent(n);
                        break;
                    case 40:
                        n = new proto.webcast.im.LinkerCrossRoomUpdateContent;
                        t.readMessage(n, proto.webcast.im.LinkerCrossRoomUpdateContent.deserializeBinaryFromReader), e.setCrossRoomUpdateContent(n);
                        break;
                    case 41:
                        n = new proto.webcast.im.LinkerChangeMultiPKTeamInfoContent;
                        t.readMessage(n, proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.deserializeBinaryFromReader), e.setChangeMultiPkTeamInfoContent(n);
                        break;
                    case 42:
                        n = new proto.webcast.im.CrossRoomLinkInviteContent;
                        t.readMessage(n, proto.webcast.im.CrossRoomLinkInviteContent.deserializeBinaryFromReader), e.setCrossRoomLinkInviteContent(n);
                        break;
                    case 43:
                        n = new proto.webcast.im.CrossRoomLinkReplyContent;
                        t.readMessage(n, proto.webcast.im.CrossRoomLinkReplyContent.deserializeBinaryFromReader), e.setCrossRoomLinkReplyContent(n);
                        break;
                    case 44:
                        n = new proto.webcast.im.CrossRoomLinkCancelInviteContent;
                        t.readMessage(n, proto.webcast.im.CrossRoomLinkCancelInviteContent.deserializeBinaryFromReader), e.setCrossRoomLinkCancelInviteContent(n);
                        break;
                    case 45:
                        n = new proto.webcast.im.LinkerResumeAudienceContent;
                        t.readMessage(n, proto.webcast.im.LinkerResumeAudienceContent.deserializeBinaryFromReader), e.setLinkerResumeAudienceContent(n);
                        break;
                    case 46:
                        n = new proto.webcast.im.LinkerBattleConnectContent;
                        t.readMessage(n, proto.webcast.im.LinkerBattleConnectContent.deserializeBinaryFromReader), e.setLinkerBattleConnectContent(n);
                        break;
                    case 47:
                        n = new proto.webcast.im.LinkerResumeApplyContent;
                        t.readMessage(n, proto.webcast.im.LinkerResumeApplyContent.deserializeBinaryFromReader), e.setLinkerResumeApplyContent(n);
                        break;
                    case 48:
                        n = new proto.webcast.im.CrossRoomRTCInfoContent;
                        t.readMessage(n, proto.webcast.im.CrossRoomRTCInfoContent.deserializeBinaryFromReader), e.setCrossRoomRtcInfoContent(n);
                        break;
                    case 49:
                        n = new proto.webcast.im.AnchorUpdateLinkmicConfigContent;
                        t.readMessage(n, proto.webcast.im.AnchorUpdateLinkmicConfigContent.deserializeBinaryFromReader), e.setAnchorUpdateLinkmicConfigContent(n);
                        break;
                    case 50:
                        n = new proto.webcast.im.AnchorUpdateLayoutContent;
                        t.readMessage(n, proto.webcast.im.AnchorUpdateLayoutContent.deserializeBinaryFromReader), e.setAnchorUpdateLayoutContent(n);
                        break;
                    case 52:
                        n = new proto.webcast.im.LinkerApplyRankChangeContent;
                        t.readMessage(n, proto.webcast.im.LinkerApplyRankChangeContent.deserializeBinaryFromReader), e.setApplyRankChangeContent(n);
                        break;
                    case 101:
                        n = new proto.webcast.im.LinkerSysKickOutContent;
                        t.readMessage(n, proto.webcast.im.LinkerSysKickOutContent.deserializeBinaryFromReader), e.setSysKickOutContent(n);
                        break;
                    case 199:
                        n = t.readInt64();
                        e.setFallbackScene(n);
                        break;
                    case 200:
                        n = t.readString();
                        e.setExtra(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkMessage.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getCommon()) && t.writeMessage(1, n, a.Common.serializeBinaryToWriter), n = e.getMessageType(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getLinkerId(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getScene(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), null != (n = e.getInviteContent()) && t.writeMessage(5, n, proto.webcast.im.LinkerInviteContent.serializeBinaryToWriter), null != (n = e.getReplyContent()) && t.writeMessage(6, n, proto.webcast.im.LinkerReplyContent.serializeBinaryToWriter), null != (n = e.getCreateContent()) && t.writeMessage(7, n, proto.webcast.im.LinkerCreateContent.serializeBinaryToWriter), null != (n = e.getCloseContent()) && t.writeMessage(8, n, proto.webcast.im.LinkerCloseContent.serializeBinaryToWriter), null != (n = e.getEnterContent()) && t.writeMessage(9, n, proto.webcast.im.LinkerEnterContent.serializeBinaryToWriter), null != (n = e.getLeaveContent()) && t.writeMessage(10, n, proto.webcast.im.LinkerLeaveContent.serializeBinaryToWriter), null != (n = e.getCancelContent()) && t.writeMessage(11, n, proto.webcast.im.LinkerCancelContent.serializeBinaryToWriter), null != (n = e.getKickOutContent()) && t.writeMessage(12, n, proto.webcast.im.LinkerKickOutContent.serializeBinaryToWriter), null != (n = e.getLinkedListChangeContent()) && t.writeMessage(13, n, proto.webcast.im.LinkerLinkedListChangeContent.serializeBinaryToWriter), null != (n = e.getUpdateUserContent()) && t.writeMessage(14, n, proto.webcast.im.LinkerUpdateUserContent.serializeBinaryToWriter), null != (n = e.getWaitingListChangeContent()) && t.writeMessage(15, n, proto.webcast.im.LinkerWaitingListChangeContent.serializeBinaryToWriter), null != (n = e.getBanContent()) && t.writeMessage(16, n, proto.webcast.im.LinkerBanContent.serializeBinaryToWriter), null != (n = e.getItemContent()) && t.writeMessage(17, n, proto.webcast.im.LinkerItemContent.serializeBinaryToWriter), null != (n = e.getViolationReminderContent()) && t.writeMessage(18, n, proto.webcast.im.LinkerViolationReminderContent.serializeBinaryToWriter), null != (n = e.getUpdateLinkTypeApplyContent()) && t.writeMessage(19, n, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.serializeBinaryToWriter), null != (n = e.getUpdateLinkTypeReplyContent()) && t.writeMessage(20, n, proto.webcast.im.LinkerUpdateLinkTypeReplyContent.serializeBinaryToWriter), null != (n = e.getAvatarAuditContent()) && t.writeMessage(21, n, proto.webcast.im.LinkerAvatarAuditContent.serializeBinaryToWriter), null != (n = e.getApplyExpiredContent()) && t.writeMessage(22, n, proto.webcast.im.LinkerApplyExpiredContent.serializeBinaryToWriter), null != (n = e.getApplyStrongReminderContent()) && t.writeMessage(23, n, proto.webcast.im.LinkerApplyStrongReminderContent.serializeBinaryToWriter), null != (n = e.getAnchorStreamSwitchContent()) && t.writeMessage(24, n, proto.webcast.im.LinkerAnchorStreamSwitchContent.serializeBinaryToWriter), null != (n = e.getClickScreenContent()) && t.writeMessage(25, n, proto.webcast.im.LinkerClickScreenContent.serializeBinaryToWriter), null != (n = e.getLockPositionContent()) && t.writeMessage(26, n, proto.webcast.im.LinkerLockPositionContent.serializeBinaryToWriter), null != (n = e.getFollowStrongGuideContent()) && t.writeMessage(27, n, proto.webcast.im.LinkerFollowStrongGuideContent.serializeBinaryToWriter), null != (n = e.getShareVideoImContent()) && t.writeMessage(28, n, proto.webcast.im.LinkerShareVideoImContent.serializeBinaryToWriter), null != (n = e.getGuestInviteContent()) && t.writeMessage(29, n, proto.webcast.im.LinkerGuestInviteContent.serializeBinaryToWriter), null != (n = e.getExitCastScreenContent()) && t.writeMessage(30, n, proto.webcast.im.LinkerGuestExitCastScreenContent.serializeBinaryToWriter), null != (n = e.getSwitchSceneContent()) && t.writeMessage(31, n, proto.webcast.im.LinkerSwitchSceneContent.serializeBinaryToWriter), null != (n = e.getLinkPhaseEnterNextContent()) && t.writeMessage(32, n, proto.webcast.im.LinkPhaseEnterNextNotifyContent.serializeBinaryToWriter), null != (n = e.getChangePlayModeContent()) && t.writeMessage(33, n, proto.webcast.im.LinkerChangePlayModeContent.serializeBinaryToWriter), null != (n = e.getLowBalanceForPaidLinkmicContent()) && t.writeMessage(34, n, proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.serializeBinaryToWriter), null != (n = e.getDegradeAlertContent()) && t.writeMessage(35, n, proto.webcast.im.LinkerDegradeAlertContent.serializeBinaryToWriter), null != (n = e.getEnlargeGuestInviteContent()) && t.writeMessage(36, n, proto.webcast.im.LinkerEnlargeGuestInviteContent.serializeBinaryToWriter), null != (n = e.getEnlargeGuestReplyContent()) && t.writeMessage(37, n, proto.webcast.im.LinkerEnlargeGuestReplyContent.serializeBinaryToWriter), null != (n = e.getEnlargeGuestApplyContent()) && t.writeMessage(38, n, proto.webcast.im.LinkerEnlargeGuestApplyContent.serializeBinaryToWriter), null != (n = e.getPrepareApplyContent()) && t.writeMessage(39, n, proto.webcast.im.LinkPrepareApplyContent.serializeBinaryToWriter), null != (n = e.getCrossRoomUpdateContent()) && t.writeMessage(40, n, proto.webcast.im.LinkerCrossRoomUpdateContent.serializeBinaryToWriter), null != (n = e.getChangeMultiPkTeamInfoContent()) && t.writeMessage(41, n, proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.serializeBinaryToWriter), null != (n = e.getCrossRoomLinkInviteContent()) && t.writeMessage(42, n, proto.webcast.im.CrossRoomLinkInviteContent.serializeBinaryToWriter), null != (n = e.getCrossRoomLinkReplyContent()) && t.writeMessage(43, n, proto.webcast.im.CrossRoomLinkReplyContent.serializeBinaryToWriter), null != (n = e.getCrossRoomLinkCancelInviteContent()) && t.writeMessage(44, n, proto.webcast.im.CrossRoomLinkCancelInviteContent.serializeBinaryToWriter), null != (n = e.getLinkerResumeAudienceContent()) && t.writeMessage(45, n, proto.webcast.im.LinkerResumeAudienceContent.serializeBinaryToWriter), null != (n = e.getLinkerBattleConnectContent()) && t.writeMessage(46, n, proto.webcast.im.LinkerBattleConnectContent.serializeBinaryToWriter), null != (n = e.getLinkerResumeApplyContent()) && t.writeMessage(47, n, proto.webcast.im.LinkerResumeApplyContent.serializeBinaryToWriter), null != (n = e.getCrossRoomRtcInfoContent()) && t.writeMessage(48, n, proto.webcast.im.CrossRoomRTCInfoContent.serializeBinaryToWriter), null != (n = e.getAnchorUpdateLinkmicConfigContent()) && t.writeMessage(49, n, proto.webcast.im.AnchorUpdateLinkmicConfigContent.serializeBinaryToWriter), null != (n = e.getAnchorUpdateLayoutContent()) && t.writeMessage(50, n, proto.webcast.im.AnchorUpdateLayoutContent.serializeBinaryToWriter), null != (n = e.getApplyRankChangeContent()) && t.writeMessage(52, n, proto.webcast.im.LinkerApplyRankChangeContent.serializeBinaryToWriter), null != (n = e.getSysKickOutContent()) && t.writeMessage(101, n, proto.webcast.im.LinkerSysKickOutContent.serializeBinaryToWriter), 0 !== (n = e.getFallbackScene()) && t.writeInt64(199, n), (n = e.getExtra()).length > 0 && t.writeString(200, n)
        },proto.webcast.im.LinkMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        },proto.webcast.im.LinkMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LinkMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkMessage.prototype.getLinkerId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkMessage.prototype.setLinkerId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LinkMessage.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkMessage.prototype.setScene = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LinkMessage.prototype.getInviteContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerInviteContent, 5)
        },proto.webcast.im.LinkMessage.prototype.setInviteContent = function (e) {
            return r.Message.setOneofWrapperField(this, 5, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearInviteContent = function () {
            return this.setInviteContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasInviteContent = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.im.LinkMessage.prototype.getReplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerReplyContent, 6)
        },proto.webcast.im.LinkMessage.prototype.setReplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 6, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearReplyContent = function () {
            return this.setReplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasReplyContent = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.im.LinkMessage.prototype.getCreateContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerCreateContent, 7)
        },proto.webcast.im.LinkMessage.prototype.setCreateContent = function (e) {
            return r.Message.setOneofWrapperField(this, 7, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCreateContent = function () {
            return this.setCreateContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCreateContent = function () {
            return null != r.Message.getField(this, 7)
        },proto.webcast.im.LinkMessage.prototype.getCloseContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerCloseContent, 8)
        },proto.webcast.im.LinkMessage.prototype.setCloseContent = function (e) {
            return r.Message.setOneofWrapperField(this, 8, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCloseContent = function () {
            return this.setCloseContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCloseContent = function () {
            return null != r.Message.getField(this, 8)
        },proto.webcast.im.LinkMessage.prototype.getEnterContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerEnterContent, 9)
        },proto.webcast.im.LinkMessage.prototype.setEnterContent = function (e) {
            return r.Message.setOneofWrapperField(this, 9, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearEnterContent = function () {
            return this.setEnterContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasEnterContent = function () {
            return null != r.Message.getField(this, 9)
        },proto.webcast.im.LinkMessage.prototype.getLeaveContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerLeaveContent, 10)
        },proto.webcast.im.LinkMessage.prototype.setLeaveContent = function (e) {
            return r.Message.setOneofWrapperField(this, 10, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLeaveContent = function () {
            return this.setLeaveContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLeaveContent = function () {
            return null != r.Message.getField(this, 10)
        },proto.webcast.im.LinkMessage.prototype.getCancelContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerCancelContent, 11)
        },proto.webcast.im.LinkMessage.prototype.setCancelContent = function (e) {
            return r.Message.setOneofWrapperField(this, 11, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCancelContent = function () {
            return this.setCancelContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCancelContent = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.im.LinkMessage.prototype.getKickOutContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerKickOutContent, 12)
        },proto.webcast.im.LinkMessage.prototype.setKickOutContent = function (e) {
            return r.Message.setOneofWrapperField(this, 12, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearKickOutContent = function () {
            return this.setKickOutContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasKickOutContent = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.im.LinkMessage.prototype.getLinkedListChangeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerLinkedListChangeContent, 13)
        },proto.webcast.im.LinkMessage.prototype.setLinkedListChangeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 13, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLinkedListChangeContent = function () {
            return this.setLinkedListChangeContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLinkedListChangeContent = function () {
            return null != r.Message.getField(this, 13)
        },proto.webcast.im.LinkMessage.prototype.getUpdateUserContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerUpdateUserContent, 14)
        },proto.webcast.im.LinkMessage.prototype.setUpdateUserContent = function (e) {
            return r.Message.setOneofWrapperField(this, 14, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearUpdateUserContent = function () {
            return this.setUpdateUserContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasUpdateUserContent = function () {
            return null != r.Message.getField(this, 14)
        },proto.webcast.im.LinkMessage.prototype.getWaitingListChangeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerWaitingListChangeContent, 15)
        },proto.webcast.im.LinkMessage.prototype.setWaitingListChangeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 15, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearWaitingListChangeContent = function () {
            return this.setWaitingListChangeContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasWaitingListChangeContent = function () {
            return null != r.Message.getField(this, 15)
        },proto.webcast.im.LinkMessage.prototype.getBanContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerBanContent, 16)
        },proto.webcast.im.LinkMessage.prototype.setBanContent = function (e) {
            return r.Message.setOneofWrapperField(this, 16, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearBanContent = function () {
            return this.setBanContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasBanContent = function () {
            return null != r.Message.getField(this, 16)
        },proto.webcast.im.LinkMessage.prototype.getItemContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerItemContent, 17)
        },proto.webcast.im.LinkMessage.prototype.setItemContent = function (e) {
            return r.Message.setOneofWrapperField(this, 17, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearItemContent = function () {
            return this.setItemContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasItemContent = function () {
            return null != r.Message.getField(this, 17)
        },proto.webcast.im.LinkMessage.prototype.getViolationReminderContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerViolationReminderContent, 18)
        },proto.webcast.im.LinkMessage.prototype.setViolationReminderContent = function (e) {
            return r.Message.setOneofWrapperField(this, 18, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearViolationReminderContent = function () {
            return this.setViolationReminderContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasViolationReminderContent = function () {
            return null != r.Message.getField(this, 18)
        },proto.webcast.im.LinkMessage.prototype.getUpdateLinkTypeApplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerUpdateLinkTypeApplyContent, 19)
        },proto.webcast.im.LinkMessage.prototype.setUpdateLinkTypeApplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 19, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearUpdateLinkTypeApplyContent = function () {
            return this.setUpdateLinkTypeApplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasUpdateLinkTypeApplyContent = function () {
            return null != r.Message.getField(this, 19)
        },proto.webcast.im.LinkMessage.prototype.getUpdateLinkTypeReplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerUpdateLinkTypeReplyContent, 20)
        },proto.webcast.im.LinkMessage.prototype.setUpdateLinkTypeReplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 20, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearUpdateLinkTypeReplyContent = function () {
            return this.setUpdateLinkTypeReplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasUpdateLinkTypeReplyContent = function () {
            return null != r.Message.getField(this, 20)
        },proto.webcast.im.LinkMessage.prototype.getAvatarAuditContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerAvatarAuditContent, 21)
        },proto.webcast.im.LinkMessage.prototype.setAvatarAuditContent = function (e) {
            return r.Message.setOneofWrapperField(this, 21, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearAvatarAuditContent = function () {
            return this.setAvatarAuditContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasAvatarAuditContent = function () {
            return null != r.Message.getField(this, 21)
        },proto.webcast.im.LinkMessage.prototype.getApplyExpiredContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerApplyExpiredContent, 22)
        },proto.webcast.im.LinkMessage.prototype.setApplyExpiredContent = function (e) {
            return r.Message.setOneofWrapperField(this, 22, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearApplyExpiredContent = function () {
            return this.setApplyExpiredContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasApplyExpiredContent = function () {
            return null != r.Message.getField(this, 22)
        },proto.webcast.im.LinkMessage.prototype.getApplyStrongReminderContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerApplyStrongReminderContent, 23)
        },proto.webcast.im.LinkMessage.prototype.setApplyStrongReminderContent = function (e) {
            return r.Message.setOneofWrapperField(this, 23, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearApplyStrongReminderContent = function () {
            return this.setApplyStrongReminderContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasApplyStrongReminderContent = function () {
            return null != r.Message.getField(this, 23)
        },proto.webcast.im.LinkMessage.prototype.getAnchorStreamSwitchContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerAnchorStreamSwitchContent, 24)
        },proto.webcast.im.LinkMessage.prototype.setAnchorStreamSwitchContent = function (e) {
            return r.Message.setOneofWrapperField(this, 24, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearAnchorStreamSwitchContent = function () {
            return this.setAnchorStreamSwitchContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasAnchorStreamSwitchContent = function () {
            return null != r.Message.getField(this, 24)
        },proto.webcast.im.LinkMessage.prototype.getClickScreenContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerClickScreenContent, 25)
        },proto.webcast.im.LinkMessage.prototype.setClickScreenContent = function (e) {
            return r.Message.setOneofWrapperField(this, 25, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearClickScreenContent = function () {
            return this.setClickScreenContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasClickScreenContent = function () {
            return null != r.Message.getField(this, 25)
        },proto.webcast.im.LinkMessage.prototype.getLockPositionContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerLockPositionContent, 26)
        },proto.webcast.im.LinkMessage.prototype.setLockPositionContent = function (e) {
            return r.Message.setOneofWrapperField(this, 26, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLockPositionContent = function () {
            return this.setLockPositionContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLockPositionContent = function () {
            return null != r.Message.getField(this, 26)
        },proto.webcast.im.LinkMessage.prototype.getFollowStrongGuideContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerFollowStrongGuideContent, 27)
        },proto.webcast.im.LinkMessage.prototype.setFollowStrongGuideContent = function (e) {
            return r.Message.setOneofWrapperField(this, 27, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearFollowStrongGuideContent = function () {
            return this.setFollowStrongGuideContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasFollowStrongGuideContent = function () {
            return null != r.Message.getField(this, 27)
        },proto.webcast.im.LinkMessage.prototype.getShareVideoImContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerShareVideoImContent, 28)
        },proto.webcast.im.LinkMessage.prototype.setShareVideoImContent = function (e) {
            return r.Message.setOneofWrapperField(this, 28, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearShareVideoImContent = function () {
            return this.setShareVideoImContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasShareVideoImContent = function () {
            return null != r.Message.getField(this, 28)
        },proto.webcast.im.LinkMessage.prototype.getGuestInviteContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerGuestInviteContent, 29)
        },proto.webcast.im.LinkMessage.prototype.setGuestInviteContent = function (e) {
            return r.Message.setOneofWrapperField(this, 29, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearGuestInviteContent = function () {
            return this.setGuestInviteContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasGuestInviteContent = function () {
            return null != r.Message.getField(this, 29)
        },proto.webcast.im.LinkMessage.prototype.getExitCastScreenContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerGuestExitCastScreenContent, 30)
        },proto.webcast.im.LinkMessage.prototype.setExitCastScreenContent = function (e) {
            return r.Message.setOneofWrapperField(this, 30, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearExitCastScreenContent = function () {
            return this.setExitCastScreenContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasExitCastScreenContent = function () {
            return null != r.Message.getField(this, 30)
        },proto.webcast.im.LinkMessage.prototype.getSwitchSceneContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerSwitchSceneContent, 31)
        },proto.webcast.im.LinkMessage.prototype.setSwitchSceneContent = function (e) {
            return r.Message.setOneofWrapperField(this, 31, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearSwitchSceneContent = function () {
            return this.setSwitchSceneContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasSwitchSceneContent = function () {
            return null != r.Message.getField(this, 31)
        },proto.webcast.im.LinkMessage.prototype.getLinkPhaseEnterNextContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkPhaseEnterNextNotifyContent, 32)
        },proto.webcast.im.LinkMessage.prototype.setLinkPhaseEnterNextContent = function (e) {
            return r.Message.setOneofWrapperField(this, 32, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLinkPhaseEnterNextContent = function () {
            return this.setLinkPhaseEnterNextContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLinkPhaseEnterNextContent = function () {
            return null != r.Message.getField(this, 32)
        },proto.webcast.im.LinkMessage.prototype.getChangePlayModeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerChangePlayModeContent, 33)
        },proto.webcast.im.LinkMessage.prototype.setChangePlayModeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 33, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearChangePlayModeContent = function () {
            return this.setChangePlayModeContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasChangePlayModeContent = function () {
            return null != r.Message.getField(this, 33)
        },proto.webcast.im.LinkMessage.prototype.getLowBalanceForPaidLinkmicContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent, 34)
        },proto.webcast.im.LinkMessage.prototype.setLowBalanceForPaidLinkmicContent = function (e) {
            return r.Message.setOneofWrapperField(this, 34, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLowBalanceForPaidLinkmicContent = function () {
            return this.setLowBalanceForPaidLinkmicContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLowBalanceForPaidLinkmicContent = function () {
            return null != r.Message.getField(this, 34)
        },proto.webcast.im.LinkMessage.prototype.getDegradeAlertContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerDegradeAlertContent, 35)
        },proto.webcast.im.LinkMessage.prototype.setDegradeAlertContent = function (e) {
            return r.Message.setOneofWrapperField(this, 35, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearDegradeAlertContent = function () {
            return this.setDegradeAlertContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasDegradeAlertContent = function () {
            return null != r.Message.getField(this, 35)
        },proto.webcast.im.LinkMessage.prototype.getEnlargeGuestInviteContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerEnlargeGuestInviteContent, 36)
        },proto.webcast.im.LinkMessage.prototype.setEnlargeGuestInviteContent = function (e) {
            return r.Message.setOneofWrapperField(this, 36, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearEnlargeGuestInviteContent = function () {
            return this.setEnlargeGuestInviteContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasEnlargeGuestInviteContent = function () {
            return null != r.Message.getField(this, 36)
        },proto.webcast.im.LinkMessage.prototype.getEnlargeGuestReplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerEnlargeGuestReplyContent, 37)
        },proto.webcast.im.LinkMessage.prototype.setEnlargeGuestReplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 37, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearEnlargeGuestReplyContent = function () {
            return this.setEnlargeGuestReplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasEnlargeGuestReplyContent = function () {
            return null != r.Message.getField(this, 37)
        },proto.webcast.im.LinkMessage.prototype.getEnlargeGuestApplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerEnlargeGuestApplyContent, 38)
        },proto.webcast.im.LinkMessage.prototype.setEnlargeGuestApplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 38, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearEnlargeGuestApplyContent = function () {
            return this.setEnlargeGuestApplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasEnlargeGuestApplyContent = function () {
            return null != r.Message.getField(this, 38)
        },proto.webcast.im.LinkMessage.prototype.getPrepareApplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkPrepareApplyContent, 39)
        },proto.webcast.im.LinkMessage.prototype.setPrepareApplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 39, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearPrepareApplyContent = function () {
            return this.setPrepareApplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasPrepareApplyContent = function () {
            return null != r.Message.getField(this, 39)
        },proto.webcast.im.LinkMessage.prototype.getCrossRoomUpdateContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerCrossRoomUpdateContent, 40)
        },proto.webcast.im.LinkMessage.prototype.setCrossRoomUpdateContent = function (e) {
            return r.Message.setOneofWrapperField(this, 40, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCrossRoomUpdateContent = function () {
            return this.setCrossRoomUpdateContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCrossRoomUpdateContent = function () {
            return null != r.Message.getField(this, 40)
        },proto.webcast.im.LinkMessage.prototype.getChangeMultiPkTeamInfoContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerChangeMultiPKTeamInfoContent, 41)
        },proto.webcast.im.LinkMessage.prototype.setChangeMultiPkTeamInfoContent = function (e) {
            return r.Message.setOneofWrapperField(this, 41, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearChangeMultiPkTeamInfoContent = function () {
            return this.setChangeMultiPkTeamInfoContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasChangeMultiPkTeamInfoContent = function () {
            return null != r.Message.getField(this, 41)
        },proto.webcast.im.LinkMessage.prototype.getCrossRoomLinkInviteContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CrossRoomLinkInviteContent, 42)
        },proto.webcast.im.LinkMessage.prototype.setCrossRoomLinkInviteContent = function (e) {
            return r.Message.setOneofWrapperField(this, 42, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCrossRoomLinkInviteContent = function () {
            return this.setCrossRoomLinkInviteContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCrossRoomLinkInviteContent = function () {
            return null != r.Message.getField(this, 42)
        },proto.webcast.im.LinkMessage.prototype.getCrossRoomLinkReplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CrossRoomLinkReplyContent, 43)
        },proto.webcast.im.LinkMessage.prototype.setCrossRoomLinkReplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 43, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCrossRoomLinkReplyContent = function () {
            return this.setCrossRoomLinkReplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCrossRoomLinkReplyContent = function () {
            return null != r.Message.getField(this, 43)
        },proto.webcast.im.LinkMessage.prototype.getCrossRoomLinkCancelInviteContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CrossRoomLinkCancelInviteContent, 44)
        },proto.webcast.im.LinkMessage.prototype.setCrossRoomLinkCancelInviteContent = function (e) {
            return r.Message.setOneofWrapperField(this, 44, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCrossRoomLinkCancelInviteContent = function () {
            return this.setCrossRoomLinkCancelInviteContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCrossRoomLinkCancelInviteContent = function () {
            return null != r.Message.getField(this, 44)
        },proto.webcast.im.LinkMessage.prototype.getLinkerResumeAudienceContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerResumeAudienceContent, 45)
        },proto.webcast.im.LinkMessage.prototype.setLinkerResumeAudienceContent = function (e) {
            return r.Message.setOneofWrapperField(this, 45, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLinkerResumeAudienceContent = function () {
            return this.setLinkerResumeAudienceContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLinkerResumeAudienceContent = function () {
            return null != r.Message.getField(this, 45)
        },proto.webcast.im.LinkMessage.prototype.getLinkerBattleConnectContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerBattleConnectContent, 46)
        },proto.webcast.im.LinkMessage.prototype.setLinkerBattleConnectContent = function (e) {
            return r.Message.setOneofWrapperField(this, 46, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLinkerBattleConnectContent = function () {
            return this.setLinkerBattleConnectContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLinkerBattleConnectContent = function () {
            return null != r.Message.getField(this, 46)
        },proto.webcast.im.LinkMessage.prototype.getLinkerResumeApplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerResumeApplyContent, 47)
        },proto.webcast.im.LinkMessage.prototype.setLinkerResumeApplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 47, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearLinkerResumeApplyContent = function () {
            return this.setLinkerResumeApplyContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasLinkerResumeApplyContent = function () {
            return null != r.Message.getField(this, 47)
        },proto.webcast.im.LinkMessage.prototype.getCrossRoomRtcInfoContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CrossRoomRTCInfoContent, 48)
        },proto.webcast.im.LinkMessage.prototype.setCrossRoomRtcInfoContent = function (e) {
            return r.Message.setOneofWrapperField(this, 48, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearCrossRoomRtcInfoContent = function () {
            return this.setCrossRoomRtcInfoContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasCrossRoomRtcInfoContent = function () {
            return null != r.Message.getField(this, 48)
        },proto.webcast.im.LinkMessage.prototype.getAnchorUpdateLinkmicConfigContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AnchorUpdateLinkmicConfigContent, 49)
        },proto.webcast.im.LinkMessage.prototype.setAnchorUpdateLinkmicConfigContent = function (e) {
            return r.Message.setOneofWrapperField(this, 49, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearAnchorUpdateLinkmicConfigContent = function () {
            return this.setAnchorUpdateLinkmicConfigContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasAnchorUpdateLinkmicConfigContent = function () {
            return null != r.Message.getField(this, 49)
        },proto.webcast.im.LinkMessage.prototype.getAnchorUpdateLayoutContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AnchorUpdateLayoutContent, 50)
        },proto.webcast.im.LinkMessage.prototype.setAnchorUpdateLayoutContent = function (e) {
            return r.Message.setOneofWrapperField(this, 50, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearAnchorUpdateLayoutContent = function () {
            return this.setAnchorUpdateLayoutContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasAnchorUpdateLayoutContent = function () {
            return null != r.Message.getField(this, 50)
        },proto.webcast.im.LinkMessage.prototype.getApplyRankChangeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerApplyRankChangeContent, 52)
        },proto.webcast.im.LinkMessage.prototype.setApplyRankChangeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 52, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearApplyRankChangeContent = function () {
            return this.setApplyRankChangeContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasApplyRankChangeContent = function () {
            return null != r.Message.getField(this, 52)
        },proto.webcast.im.LinkMessage.prototype.getSysKickOutContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerSysKickOutContent, 101)
        },proto.webcast.im.LinkMessage.prototype.setSysKickOutContent = function (e) {
            return r.Message.setOneofWrapperField(this, 101, proto.webcast.im.LinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.LinkMessage.prototype.clearSysKickOutContent = function () {
            return this.setSysKickOutContent(undefined)
        },proto.webcast.im.LinkMessage.prototype.hasSysKickOutContent = function () {
            return null != r.Message.getField(this, 101)
        },proto.webcast.im.LinkMessage.prototype.getFallbackScene = function () {
            return r.Message.getFieldWithDefault(this, 199, 0)
        },proto.webcast.im.LinkMessage.prototype.setFallbackScene = function (e) {
            return r.Message.setProto3IntField(this, 199, e)
        },proto.webcast.im.LinkMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 200, "")
        },proto.webcast.im.LinkMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 200, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicInfo.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicInfo.toObject(e, this)
        }, proto.webcast.im.LinkmicInfo.toObject = function (e, t) {
            var n, o = {
                accessKey: r.Message.getFieldWithDefault(t, 1, ""),
                linkMicId: r.Message.getFieldWithDefault(t, 2, "0"),
                joinable: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                confluenceType: r.Message.getFieldWithDefault(t, 4, 0),
                rtcExtInfo: r.Message.getFieldWithDefault(t, 5, ""),
                rtcAppId: r.Message.getFieldWithDefault(t, 6, ""),
                rtcAppSign: r.Message.getFieldWithDefault(t, 7, ""),
                linkmicIdStr: r.Message.getFieldWithDefault(t, 8, ""),
                vendor: r.Message.getFieldWithDefault(t, 9, "0"),
                liveCoreExtInfo: r.Message.getFieldWithDefault(t, 10, ""),
                multiRtcInfo: (n = t.getMultiRtcInfo()) && p.MultiRtcInfo.toObject(e, n),
                multiLiveCoreInfo: (n = t.getMultiLiveCoreInfo()) && p.MultiLiveCoreInfo.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkmicInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkmicInfo;
            return proto.webcast.im.LinkmicInfo.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkmicInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readString();
                        e.setAccessKey(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setLinkMicId(n);
                        break;
                    case 3:
                        n = t.readBool();
                        e.setJoinable(n);
                        break;
                    case 4:
                        n = t.readInt32();
                        e.setConfluenceType(n);
                        break;
                    case 5:
                        n = t.readString();
                        e.setRtcExtInfo(n);
                        break;
                    case 6:
                        n = t.readString();
                        e.setRtcAppId(n);
                        break;
                    case 7:
                        n = t.readString();
                        e.setRtcAppSign(n);
                        break;
                    case 8:
                        n = t.readString();
                        e.setLinkmicIdStr(n);
                        break;
                    case 9:
                        n = t.readInt64String();
                        e.setVendor(n);
                        break;
                    case 10:
                        n = t.readString();
                        e.setLiveCoreExtInfo(n);
                        break;
                    case 11:
                        n = new p.MultiRtcInfo;
                        t.readMessage(n, p.MultiRtcInfo.deserializeBinaryFromReader), e.setMultiRtcInfo(n);
                        break;
                    case 12:
                        n = new p.MultiLiveCoreInfo;
                        t.readMessage(n, p.MultiLiveCoreInfo.deserializeBinaryFromReader), e.setMultiLiveCoreInfo(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkmicInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkmicInfo.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getAccessKey()).length > 0 && t.writeString(1, n), n = e.getLinkMicId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), (n = e.getJoinable()) && t.writeBool(3, n), 0 !== (n = e.getConfluenceType()) && t.writeInt32(4, n), (n = e.getRtcExtInfo()).length > 0 && t.writeString(5, n), (n = e.getRtcAppId()).length > 0 && t.writeString(6, n), (n = e.getRtcAppSign()).length > 0 && t.writeString(7, n), (n = e.getLinkmicIdStr()).length > 0 && t.writeString(8, n), n = e.getVendor(), 0 !== parseInt(n, 10) && t.writeInt64String(9, n), (n = e.getLiveCoreExtInfo()).length > 0 && t.writeString(10, n), null != (n = e.getMultiRtcInfo()) && t.writeMessage(11, n, p.MultiRtcInfo.serializeBinaryToWriter), null != (n = e.getMultiLiveCoreInfo()) && t.writeMessage(12, n, p.MultiLiveCoreInfo.serializeBinaryToWriter)
        },proto.webcast.im.LinkmicInfo.prototype.getAccessKey = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.LinkmicInfo.prototype.setAccessKey = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.LinkmicInfo.prototype.getLinkMicId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkmicInfo.prototype.setLinkMicId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkmicInfo.prototype.getJoinable = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        },proto.webcast.im.LinkmicInfo.prototype.setJoinable = function (e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        },proto.webcast.im.LinkmicInfo.prototype.getConfluenceType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.im.LinkmicInfo.prototype.setConfluenceType = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        },proto.webcast.im.LinkmicInfo.prototype.getRtcExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.LinkmicInfo.prototype.setRtcExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.LinkmicInfo.prototype.getRtcAppId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.LinkmicInfo.prototype.setRtcAppId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.LinkmicInfo.prototype.getRtcAppSign = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.LinkmicInfo.prototype.setRtcAppSign = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.LinkmicInfo.prototype.getLinkmicIdStr = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.im.LinkmicInfo.prototype.setLinkmicIdStr = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        },proto.webcast.im.LinkmicInfo.prototype.getVendor = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        },proto.webcast.im.LinkmicInfo.prototype.setVendor = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        },proto.webcast.im.LinkmicInfo.prototype.getLiveCoreExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.im.LinkmicInfo.prototype.setLiveCoreExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        },proto.webcast.im.LinkmicInfo.prototype.getMultiRtcInfo = function () {
            return r.Message.getWrapperField(this, p.MultiRtcInfo, 11)
        },proto.webcast.im.LinkmicInfo.prototype.setMultiRtcInfo = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        },proto.webcast.im.LinkmicInfo.prototype.clearMultiRtcInfo = function () {
            return this.setMultiRtcInfo(undefined)
        },proto.webcast.im.LinkmicInfo.prototype.hasMultiRtcInfo = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.im.LinkmicInfo.prototype.getMultiLiveCoreInfo = function () {
            return r.Message.getWrapperField(this, p.MultiLiveCoreInfo, 12)
        },proto.webcast.im.LinkmicInfo.prototype.setMultiLiveCoreInfo = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        },proto.webcast.im.LinkmicInfo.prototype.clearMultiLiveCoreInfo = function () {
            return this.setMultiLiveCoreInfo(undefined)
        },proto.webcast.im.LinkmicInfo.prototype.hasMultiLiveCoreInfo = function () {
            return null != r.Message.getField(this, 12)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerSetting.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerSetting.toObject(e, this)
        }, proto.webcast.im.LinkerSetting.toObject = function (e, t) {
            var n = {
                maxMemberLimit: r.Message.getFieldWithDefault(t, 1, "0"),
                linkType: r.Message.getFieldWithDefault(t, 2, "0"),
                scene: r.Message.getFieldWithDefault(t, 3, "0"),
                ownerUserId: r.Message.getFieldWithDefault(t, 4, "0"),
                ownerRoomId: r.Message.getFieldWithDefault(t, 5, "0"),
                vendor: r.Message.getFieldWithDefault(t, 6, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerSetting.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerSetting;
            return proto.webcast.im.LinkerSetting.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerSetting.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setMaxMemberLimit(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setLinkType(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setScene(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setOwnerUserId(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setOwnerRoomId(n);
                        break;
                    case 6:
                        n = t.readInt64String();
                        e.setVendor(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerSetting.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerSetting.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerSetting.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getMaxMemberLimit(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getLinkType(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getScene(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getOwnerUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), n = e.getOwnerRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), n = e.getVendor(), 0 !== parseInt(n, 10) && t.writeInt64String(6, n)
        },proto.webcast.im.LinkerSetting.prototype.getMaxMemberLimit = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerSetting.prototype.setMaxMemberLimit = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerSetting.prototype.getLinkType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerSetting.prototype.setLinkType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerSetting.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerSetting.prototype.setScene = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LinkerSetting.prototype.getOwnerUserId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkerSetting.prototype.setOwnerUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LinkerSetting.prototype.getOwnerRoomId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkerSetting.prototype.setOwnerRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LinkerSetting.prototype.getVendor = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.LinkerSetting.prototype.setVendor = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.LinkerInviteContent.repeatedFields_ = [21, 22],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerInviteContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerInviteContent.toObject(e, this)
        }, proto.webcast.im.LinkerInviteContent.toObject = function (e, t) {
            var n, o = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                fromRoomId: r.Message.getFieldWithDefault(t, 2, "0"),
                toRtcExtInfo: r.Message.getFieldWithDefault(t, 3, ""),
                rtcJoinChannel: r.Message.getBooleanFieldWithDefault(t, 4, !1),
                vendor: r.Message.getFieldWithDefault(t, 5, "0"),
                secFromUserId: r.Message.getFieldWithDefault(t, 6, ""),
                toLinkmicIdStr: r.Message.getFieldWithDefault(t, 7, ""),
                rtcPushStream: r.Message.getBooleanFieldWithDefault(t, 8, !1),
                signExtra: r.Message.getFieldWithDefault(t, 9, ""),
                inviteSource: r.Message.getFieldWithDefault(t, 10, 0),
                fromUserLinkmicInfo: (n = t.getFromUserLinkmicInfo()) && proto.webcast.im.LinkmicInfo.toObject(e, n),
                multiRtcInfo: (n = t.getMultiRtcInfo()) && p.MultiRtcInfo.toObject(e, n),
                multiLiveCoreInfo: (n = t.getMultiLiveCoreInfo()) && p.MultiLiveCoreInfo.toObject(e, n),
                multiPkMode: r.Message.getFieldWithDefault(t, 14, 0),
                supportMultiPkTeamMode: r.Message.getBooleanFieldWithDefault(t, 15, !1),
                toUserLinkmicInfo: (n = t.getToUserLinkmicInfo()) && c.LinkmicInfo.toObject(e, n),
                multiChannelInfo: (n = t.getMultiChannelInfo()) && c.MultiChannelInfo.toObject(e, n),
                inviteRejectTemporaryText: r.Message.getFieldWithDefault(t, 18, ""),
                audienceLinkerDescription: r.Message.getFieldWithDefault(t, 19, ""),
                inviterWithAudience: r.Message.getBooleanFieldWithDefault(t, 20, !1),
                inviteeFollowedUsersList: r.Message.toObjectList(t.getInviteeFollowedUsersList(), p.ListUser.toObject, e),
                inviterUsersList: r.Message.toObjectList(t.getInviterUsersList(), p.ListUser.toObject, e),
                toUserId: r.Message.getFieldWithDefault(t, 23, "0"),
                toRoomId: r.Message.getFieldWithDefault(t, 24, "0"),
                appliedUser: (n = t.getAppliedUser()) && p.ListUser.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerInviteContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerInviteContent;
            return proto.webcast.im.LinkerInviteContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerInviteContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setFromRoomId(n);
                        break;
                    case 3:
                        n = t.readString();
                        e.setToRtcExtInfo(n);
                        break;
                    case 4:
                        n = t.readBool();
                        e.setRtcJoinChannel(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setVendor(n);
                        break;
                    case 6:
                        n = t.readString();
                        e.setSecFromUserId(n);
                        break;
                    case 7:
                        n = t.readString();
                        e.setToLinkmicIdStr(n);
                        break;
                    case 8:
                        n = t.readBool();
                        e.setRtcPushStream(n);
                        break;
                    case 9:
                        n = t.readString();
                        e.setSignExtra(n);
                        break;
                    case 10:
                        n = t.readEnum();
                        e.setInviteSource(n);
                        break;
                    case 11:
                        n = new proto.webcast.im.LinkmicInfo;
                        t.readMessage(n, proto.webcast.im.LinkmicInfo.deserializeBinaryFromReader), e.setFromUserLinkmicInfo(n);
                        break;
                    case 12:
                        n = new p.MultiRtcInfo;
                        t.readMessage(n, p.MultiRtcInfo.deserializeBinaryFromReader), e.setMultiRtcInfo(n);
                        break;
                    case 13:
                        n = new p.MultiLiveCoreInfo;
                        t.readMessage(n, p.MultiLiveCoreInfo.deserializeBinaryFromReader), e.setMultiLiveCoreInfo(n);
                        break;
                    case 14:
                        n = t.readEnum();
                        e.setMultiPkMode(n);
                        break;
                    case 15:
                        n = t.readBool();
                        e.setSupportMultiPkTeamMode(n);
                        break;
                    case 16:
                        n = new c.LinkmicInfo;
                        t.readMessage(n, c.LinkmicInfo.deserializeBinaryFromReader), e.setToUserLinkmicInfo(n);
                        break;
                    case 17:
                        n = new c.MultiChannelInfo;
                        t.readMessage(n, c.MultiChannelInfo.deserializeBinaryFromReader), e.setMultiChannelInfo(n);
                        break;
                    case 18:
                        n = t.readString();
                        e.setInviteRejectTemporaryText(n);
                        break;
                    case 19:
                        n = t.readString();
                        e.setAudienceLinkerDescription(n);
                        break;
                    case 20:
                        n = t.readBool();
                        e.setInviterWithAudience(n);
                        break;
                    case 21:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addInviteeFollowedUsers(n);
                        break;
                    case 22:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addInviterUsers(n);
                        break;
                    case 23:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 24:
                        n = t.readInt64String();
                        e.setToRoomId(n);
                        break;
                    case 25:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.setAppliedUser(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerInviteContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerInviteContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerInviteContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getFromRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), (n = e.getToRtcExtInfo()).length > 0 && t.writeString(3, n), (n = e.getRtcJoinChannel()) && t.writeBool(4, n), n = e.getVendor(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), (n = e.getSecFromUserId()).length > 0 && t.writeString(6, n), (n = e.getToLinkmicIdStr()).length > 0 && t.writeString(7, n), (n = e.getRtcPushStream()) && t.writeBool(8, n), (n = e.getSignExtra()).length > 0 && t.writeString(9, n), 0 !== (n = e.getInviteSource()) && t.writeEnum(10, n), null != (n = e.getFromUserLinkmicInfo()) && t.writeMessage(11, n, proto.webcast.im.LinkmicInfo.serializeBinaryToWriter), null != (n = e.getMultiRtcInfo()) && t.writeMessage(12, n, p.MultiRtcInfo.serializeBinaryToWriter), null != (n = e.getMultiLiveCoreInfo()) && t.writeMessage(13, n, p.MultiLiveCoreInfo.serializeBinaryToWriter), 0 !== (n = e.getMultiPkMode()) && t.writeEnum(14, n), (n = e.getSupportMultiPkTeamMode()) && t.writeBool(15, n), null != (n = e.getToUserLinkmicInfo()) && t.writeMessage(16, n, c.LinkmicInfo.serializeBinaryToWriter), null != (n = e.getMultiChannelInfo()) && t.writeMessage(17, n, c.MultiChannelInfo.serializeBinaryToWriter), (n = e.getInviteRejectTemporaryText()).length > 0 && t.writeString(18, n), (n = e.getAudienceLinkerDescription()).length > 0 && t.writeString(19, n), (n = e.getInviterWithAudience()) && t.writeBool(20, n), (n = e.getInviteeFollowedUsersList()).length > 0 && t.writeRepeatedMessage(21, n, p.ListUser.serializeBinaryToWriter), (n = e.getInviterUsersList()).length > 0 && t.writeRepeatedMessage(22, n, p.ListUser.serializeBinaryToWriter), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(23, n), n = e.getToRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(24, n), null != (n = e.getAppliedUser()) && t.writeMessage(25, n, p.ListUser.serializeBinaryToWriter)
        },proto.webcast.im.LinkerInviteContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerInviteContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getFromRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerInviteContent.prototype.setFromRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getToRtcExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.LinkerInviteContent.prototype.setToRtcExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getRtcJoinChannel = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        },proto.webcast.im.LinkerInviteContent.prototype.setRtcJoinChannel = function (e) {
            return r.Message.setProto3BooleanField(this, 4, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getVendor = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkerInviteContent.prototype.setVendor = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getSecFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.LinkerInviteContent.prototype.setSecFromUserId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getToLinkmicIdStr = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.LinkerInviteContent.prototype.setToLinkmicIdStr = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getRtcPushStream = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.im.LinkerInviteContent.prototype.setRtcPushStream = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getSignExtra = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.im.LinkerInviteContent.prototype.setSignExtra = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getInviteSource = function () {
            return r.Message.getFieldWithDefault(this, 10, 0)
        },proto.webcast.im.LinkerInviteContent.prototype.setInviteSource = function (e) {
            return r.Message.setProto3EnumField(this, 10, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getFromUserLinkmicInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicInfo, 11)
        },proto.webcast.im.LinkerInviteContent.prototype.setFromUserLinkmicInfo = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        },proto.webcast.im.LinkerInviteContent.prototype.clearFromUserLinkmicInfo = function () {
            return this.setFromUserLinkmicInfo(undefined)
        },proto.webcast.im.LinkerInviteContent.prototype.hasFromUserLinkmicInfo = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.im.LinkerInviteContent.prototype.getMultiRtcInfo = function () {
            return r.Message.getWrapperField(this, p.MultiRtcInfo, 12)
        },proto.webcast.im.LinkerInviteContent.prototype.setMultiRtcInfo = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        },proto.webcast.im.LinkerInviteContent.prototype.clearMultiRtcInfo = function () {
            return this.setMultiRtcInfo(undefined)
        },proto.webcast.im.LinkerInviteContent.prototype.hasMultiRtcInfo = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.im.LinkerInviteContent.prototype.getMultiLiveCoreInfo = function () {
            return r.Message.getWrapperField(this, p.MultiLiveCoreInfo, 13)
        },proto.webcast.im.LinkerInviteContent.prototype.setMultiLiveCoreInfo = function (e) {
            return r.Message.setWrapperField(this, 13, e)
        },proto.webcast.im.LinkerInviteContent.prototype.clearMultiLiveCoreInfo = function () {
            return this.setMultiLiveCoreInfo(undefined)
        },proto.webcast.im.LinkerInviteContent.prototype.hasMultiLiveCoreInfo = function () {
            return null != r.Message.getField(this, 13)
        },proto.webcast.im.LinkerInviteContent.prototype.getMultiPkMode = function () {
            return r.Message.getFieldWithDefault(this, 14, 0)
        },proto.webcast.im.LinkerInviteContent.prototype.setMultiPkMode = function (e) {
            return r.Message.setProto3EnumField(this, 14, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getSupportMultiPkTeamMode = function () {
            return r.Message.getBooleanFieldWithDefault(this, 15, !1)
        },proto.webcast.im.LinkerInviteContent.prototype.setSupportMultiPkTeamMode = function (e) {
            return r.Message.setProto3BooleanField(this, 15, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getToUserLinkmicInfo = function () {
            return r.Message.getWrapperField(this, c.LinkmicInfo, 16)
        },proto.webcast.im.LinkerInviteContent.prototype.setToUserLinkmicInfo = function (e) {
            return r.Message.setWrapperField(this, 16, e)
        },proto.webcast.im.LinkerInviteContent.prototype.clearToUserLinkmicInfo = function () {
            return this.setToUserLinkmicInfo(undefined)
        },proto.webcast.im.LinkerInviteContent.prototype.hasToUserLinkmicInfo = function () {
            return null != r.Message.getField(this, 16)
        },proto.webcast.im.LinkerInviteContent.prototype.getMultiChannelInfo = function () {
            return r.Message.getWrapperField(this, c.MultiChannelInfo, 17)
        },proto.webcast.im.LinkerInviteContent.prototype.setMultiChannelInfo = function (e) {
            return r.Message.setWrapperField(this, 17, e)
        },proto.webcast.im.LinkerInviteContent.prototype.clearMultiChannelInfo = function () {
            return this.setMultiChannelInfo(undefined)
        },proto.webcast.im.LinkerInviteContent.prototype.hasMultiChannelInfo = function () {
            return null != r.Message.getField(this, 17)
        },proto.webcast.im.LinkerInviteContent.prototype.getInviteRejectTemporaryText = function () {
            return r.Message.getFieldWithDefault(this, 18, "")
        },proto.webcast.im.LinkerInviteContent.prototype.setInviteRejectTemporaryText = function (e) {
            return r.Message.setProto3StringField(this, 18, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getAudienceLinkerDescription = function () {
            return r.Message.getFieldWithDefault(this, 19, "")
        },proto.webcast.im.LinkerInviteContent.prototype.setAudienceLinkerDescription = function (e) {
            return r.Message.setProto3StringField(this, 19, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getInviterWithAudience = function () {
            return r.Message.getBooleanFieldWithDefault(this, 20, !1)
        },proto.webcast.im.LinkerInviteContent.prototype.setInviterWithAudience = function (e) {
            return r.Message.setProto3BooleanField(this, 20, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getInviteeFollowedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 21)
        },proto.webcast.im.LinkerInviteContent.prototype.setInviteeFollowedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 21, e)
        },proto.webcast.im.LinkerInviteContent.prototype.addInviteeFollowedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 21, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerInviteContent.prototype.clearInviteeFollowedUsersList = function () {
            return this.setInviteeFollowedUsersList([])
        },proto.webcast.im.LinkerInviteContent.prototype.getInviterUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 22)
        },proto.webcast.im.LinkerInviteContent.prototype.setInviterUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 22, e)
        },proto.webcast.im.LinkerInviteContent.prototype.addInviterUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 22, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerInviteContent.prototype.clearInviterUsersList = function () {
            return this.setInviterUsersList([])
        },proto.webcast.im.LinkerInviteContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 23, "0")
        },proto.webcast.im.LinkerInviteContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 23, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getToRoomId = function () {
            return r.Message.getFieldWithDefault(this, 24, "0")
        },proto.webcast.im.LinkerInviteContent.prototype.setToRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 24, e)
        },proto.webcast.im.LinkerInviteContent.prototype.getAppliedUser = function () {
            return r.Message.getWrapperField(this, p.ListUser, 25)
        },proto.webcast.im.LinkerInviteContent.prototype.setAppliedUser = function (e) {
            return r.Message.setWrapperField(this, 25, e)
        },proto.webcast.im.LinkerInviteContent.prototype.clearAppliedUser = function () {
            return this.setAppliedUser(undefined)
        },proto.webcast.im.LinkerInviteContent.prototype.hasAppliedUser = function () {
            return null != r.Message.getField(this, 25)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkPrepareApplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkPrepareApplyContent.toObject(e, this)
        }, proto.webcast.im.LinkPrepareApplyContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                fromRoomId: r.Message.getFieldWithDefault(t, 2, "0"),
                vendor: r.Message.getFieldWithDefault(t, 3, "0"),
                secFromUserId: r.Message.getFieldWithDefault(t, 4, ""),
                count: r.Message.getFieldWithDefault(t, 5, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkPrepareApplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkPrepareApplyContent;
            return proto.webcast.im.LinkPrepareApplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkPrepareApplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setFromRoomId(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setVendor(n);
                        break;
                    case 4:
                        n = t.readString();
                        e.setSecFromUserId(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setCount(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkPrepareApplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkPrepareApplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkPrepareApplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getFromRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getVendor(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), (n = e.getSecFromUserId()).length > 0 && t.writeString(4, n), n = e.getCount(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n)
        },proto.webcast.im.LinkPrepareApplyContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkPrepareApplyContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkPrepareApplyContent.prototype.getFromRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkPrepareApplyContent.prototype.setFromRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkPrepareApplyContent.prototype.getVendor = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkPrepareApplyContent.prototype.setVendor = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LinkPrepareApplyContent.prototype.getSecFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.LinkPrepareApplyContent.prototype.setSecFromUserId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.LinkPrepareApplyContent.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkPrepareApplyContent.prototype.setCount = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerReplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerReplyContent.toObject(e, this)
        }, proto.webcast.im.LinkerReplyContent.toObject = function (e, t) {
            var n, o = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                fromRoomId: r.Message.getFieldWithDefault(t, 2, "0"),
                fromUserLinkmicInfo: (n = t.getFromUserLinkmicInfo()) && proto.webcast.im.LinkmicInfo.toObject(e, n),
                toUserId: r.Message.getFieldWithDefault(t, 4, "0"),
                toUserLinkmicInfo: (n = t.getToUserLinkmicInfo()) && proto.webcast.im.LinkmicInfo.toObject(e, n),
                linkType: r.Message.getFieldWithDefault(t, 6, "0"),
                replyStatus: r.Message.getFieldWithDefault(t, 7, "0"),
                linkerSetting: (n = t.getLinkerSetting()) && proto.webcast.im.LinkerSetting.toObject(e, n),
                bizJoinChannel: r.Message.getBooleanFieldWithDefault(t, 9, !1),
                multiPkMode: r.Message.getFieldWithDefault(t, 10, 0),
                multiChannelInfo: (n = t.getMultiChannelInfo()) && c.MultiChannelInfo.toObject(e, n),
                toast: r.Message.getFieldWithDefault(t, 12, ""),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : [],
                backupLinkmicInfo: (n = t.getBackupLinkmicInfo()) && p.AnchorLinkmicChannelInfo.toObject(e, n),
                kickedUsersUniqueId: r.Message.getFieldWithDefault(t, 15, ""),
                matchType: r.Message.getFieldWithDefault(t, 16, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerReplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerReplyContent;
            return proto.webcast.im.LinkerReplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerReplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setFromRoomId(n);
                        break;
                    case 3:
                        n = new proto.webcast.im.LinkmicInfo;
                        t.readMessage(n, proto.webcast.im.LinkmicInfo.deserializeBinaryFromReader), e.setFromUserLinkmicInfo(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 5:
                        n = new proto.webcast.im.LinkmicInfo;
                        t.readMessage(n, proto.webcast.im.LinkmicInfo.deserializeBinaryFromReader), e.setToUserLinkmicInfo(n);
                        break;
                    case 6:
                        n = t.readInt64String();
                        e.setLinkType(n);
                        break;
                    case 7:
                        n = t.readInt64String();
                        e.setReplyStatus(n);
                        break;
                    case 8:
                        n = new proto.webcast.im.LinkerSetting;
                        t.readMessage(n, proto.webcast.im.LinkerSetting.deserializeBinaryFromReader), e.setLinkerSetting(n);
                        break;
                    case 9:
                        n = t.readBool();
                        e.setBizJoinChannel(n);
                        break;
                    case 10:
                        n = t.readEnum();
                        e.setMultiPkMode(n);
                        break;
                    case 11:
                        n = new c.MultiChannelInfo;
                        t.readMessage(n, c.MultiChannelInfo.deserializeBinaryFromReader), e.setMultiChannelInfo(n);
                        break;
                    case 12:
                        n = t.readString();
                        e.setToast(n);
                        break;
                    case 13:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    case 14:
                        n = new p.AnchorLinkmicChannelInfo;
                        t.readMessage(n, p.AnchorLinkmicChannelInfo.deserializeBinaryFromReader), e.setBackupLinkmicInfo(n);
                        break;
                    case 15:
                        n = t.readString();
                        e.setKickedUsersUniqueId(n);
                        break;
                    case 16:
                        n = t.readInt64String();
                        e.setMatchType(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerReplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerReplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerReplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getFromRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), null != (n = e.getFromUserLinkmicInfo()) && t.writeMessage(3, n, proto.webcast.im.LinkmicInfo.serializeBinaryToWriter), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), null != (n = e.getToUserLinkmicInfo()) && t.writeMessage(5, n, proto.webcast.im.LinkmicInfo.serializeBinaryToWriter), n = e.getLinkType(), 0 !== parseInt(n, 10) && t.writeInt64String(6, n), n = e.getReplyStatus(), 0 !== parseInt(n, 10) && t.writeInt64String(7, n), null != (n = e.getLinkerSetting()) && t.writeMessage(8, n, proto.webcast.im.LinkerSetting.serializeBinaryToWriter), (n = e.getBizJoinChannel()) && t.writeBool(9, n), 0 !== (n = e.getMultiPkMode()) && t.writeEnum(10, n), null != (n = e.getMultiChannelInfo()) && t.writeMessage(11, n, c.MultiChannelInfo.serializeBinaryToWriter), (n = e.getToast()).length > 0 && t.writeString(12, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(13, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter), null != (n = e.getBackupLinkmicInfo()) && t.writeMessage(14, n, p.AnchorLinkmicChannelInfo.serializeBinaryToWriter), (n = e.getKickedUsersUniqueId()).length > 0 && t.writeString(15, n), n = e.getMatchType(), 0 !== parseInt(n, 10) && t.writeInt64String(16, n)
        },proto.webcast.im.LinkerReplyContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerReplyContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getFromRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerReplyContent.prototype.setFromRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getFromUserLinkmicInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicInfo, 3)
        },proto.webcast.im.LinkerReplyContent.prototype.setFromUserLinkmicInfo = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.webcast.im.LinkerReplyContent.prototype.clearFromUserLinkmicInfo = function () {
            return this.setFromUserLinkmicInfo(undefined)
        },proto.webcast.im.LinkerReplyContent.prototype.hasFromUserLinkmicInfo = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.im.LinkerReplyContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkerReplyContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getToUserLinkmicInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicInfo, 5)
        },proto.webcast.im.LinkerReplyContent.prototype.setToUserLinkmicInfo = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        },proto.webcast.im.LinkerReplyContent.prototype.clearToUserLinkmicInfo = function () {
            return this.setToUserLinkmicInfo(undefined)
        },proto.webcast.im.LinkerReplyContent.prototype.hasToUserLinkmicInfo = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.im.LinkerReplyContent.prototype.getLinkType = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.LinkerReplyContent.prototype.setLinkType = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getReplyStatus = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.LinkerReplyContent.prototype.setReplyStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getLinkerSetting = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerSetting, 8)
        },proto.webcast.im.LinkerReplyContent.prototype.setLinkerSetting = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        },proto.webcast.im.LinkerReplyContent.prototype.clearLinkerSetting = function () {
            return this.setLinkerSetting(undefined)
        },proto.webcast.im.LinkerReplyContent.prototype.hasLinkerSetting = function () {
            return null != r.Message.getField(this, 8)
        },proto.webcast.im.LinkerReplyContent.prototype.getBizJoinChannel = function () {
            return r.Message.getBooleanFieldWithDefault(this, 9, !1)
        },proto.webcast.im.LinkerReplyContent.prototype.setBizJoinChannel = function (e) {
            return r.Message.setProto3BooleanField(this, 9, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getMultiPkMode = function () {
            return r.Message.getFieldWithDefault(this, 10, 0)
        },proto.webcast.im.LinkerReplyContent.prototype.setMultiPkMode = function (e) {
            return r.Message.setProto3EnumField(this, 10, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getMultiChannelInfo = function () {
            return r.Message.getWrapperField(this, c.MultiChannelInfo, 11)
        },proto.webcast.im.LinkerReplyContent.prototype.setMultiChannelInfo = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        },proto.webcast.im.LinkerReplyContent.prototype.clearMultiChannelInfo = function () {
            return this.setMultiChannelInfo(undefined)
        },proto.webcast.im.LinkerReplyContent.prototype.hasMultiChannelInfo = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.im.LinkerReplyContent.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 12, "")
        },proto.webcast.im.LinkerReplyContent.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 12, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 13, e, proto.webcast.data.RoomLinkerContent)
        },proto.webcast.im.LinkerReplyContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        },proto.webcast.im.LinkerReplyContent.prototype.getBackupLinkmicInfo = function () {
            return r.Message.getWrapperField(this, p.AnchorLinkmicChannelInfo, 14)
        },proto.webcast.im.LinkerReplyContent.prototype.setBackupLinkmicInfo = function (e) {
            return r.Message.setWrapperField(this, 14, e)
        },proto.webcast.im.LinkerReplyContent.prototype.clearBackupLinkmicInfo = function () {
            return this.setBackupLinkmicInfo(undefined)
        },proto.webcast.im.LinkerReplyContent.prototype.hasBackupLinkmicInfo = function () {
            return null != r.Message.getField(this, 14)
        },proto.webcast.im.LinkerReplyContent.prototype.getKickedUsersUniqueId = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        },proto.webcast.im.LinkerReplyContent.prototype.setKickedUsersUniqueId = function (e) {
            return r.Message.setProto3StringField(this, 15, e)
        },proto.webcast.im.LinkerReplyContent.prototype.getMatchType = function () {
            return r.Message.getFieldWithDefault(this, 16, "0")
        },proto.webcast.im.LinkerReplyContent.prototype.setMatchType = function (e) {
            return r.Message.setProto3StringIntField(this, 16, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerCreateContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerCreateContent.toObject(e, this)
        }, proto.webcast.im.LinkerCreateContent.toObject = function (e, t) {
            var n = {
                ownerId: r.Message.getFieldWithDefault(t, 1, "0"),
                ownerRoomId: r.Message.getFieldWithDefault(t, 2, "0"),
                linkType: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerCreateContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerCreateContent;
            return proto.webcast.im.LinkerCreateContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerCreateContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setOwnerId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setOwnerRoomId(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setLinkType(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerCreateContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerCreateContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerCreateContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getOwnerId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getOwnerRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getLinkType(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n)
        },proto.webcast.im.LinkerCreateContent.prototype.getOwnerId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerCreateContent.prototype.setOwnerId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerCreateContent.prototype.getOwnerRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerCreateContent.prototype.setOwnerRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerCreateContent.prototype.getLinkType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerCreateContent.prototype.setLinkType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchEffect.prototype.toObject = function (e) {
            return proto.webcast.im.MatchEffect.toObject(e, this)
        }, proto.webcast.im.MatchEffect.toObject = function (e, t) {
            var n, o = {
                showEffect: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                effectResource: (n = t.getEffectResource()) && s.Image.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.MatchEffect.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.MatchEffect;
            return proto.webcast.im.MatchEffect.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.MatchEffect.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readBool();
                        e.setShowEffect(n);
                        break;
                    case 2:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setEffectResource(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.MatchEffect.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchEffect.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.MatchEffect.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getShowEffect()) && t.writeBool(1, n), null != (n = e.getEffectResource()) && t.writeMessage(2, n, s.Image.serializeBinaryToWriter)
        },proto.webcast.im.MatchEffect.prototype.getShowEffect = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.webcast.im.MatchEffect.prototype.setShowEffect = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        },proto.webcast.im.MatchEffect.prototype.getEffectResource = function () {
            return r.Message.getWrapperField(this, s.Image, 2)
        },proto.webcast.im.MatchEffect.prototype.setEffectResource = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.MatchEffect.prototype.clearEffectResource = function () {
            return this.setEffectResource(undefined)
        },proto.webcast.im.MatchEffect.prototype.hasEffectResource = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.CityEffect.repeatedFields_ = [3],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CityEffect.prototype.toObject = function (e) {
            return proto.webcast.im.CityEffect.toObject(e, this)
        }, proto.webcast.im.CityEffect.toObject = function (e, t) {
            var n, o = {
                effectResource: (n = t.getEffectResource()) && s.Image.toObject(e, n),
                city: r.Message.getFieldWithDefault(t, 2, ""),
                showEffectUserIdListList: null == (n = r.Message.getRepeatedField(t, 3)) ? undefined : n
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.CityEffect.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.CityEffect;
            return proto.webcast.im.CityEffect.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.CityEffect.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setEffectResource(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setCity(n);
                        break;
                    case 3:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], o = 0; o < r.length; o++) e.addShowEffectUserIdList(r[o]);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.CityEffect.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CityEffect.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.CityEffect.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getEffectResource()) && t.writeMessage(1, n, s.Image.serializeBinaryToWriter), (n = e.getCity()).length > 0 && t.writeString(2, n), (n = e.getShowEffectUserIdListList()).length > 0 && t.writePackedInt64String(3, n)
        },proto.webcast.im.CityEffect.prototype.getEffectResource = function () {
            return r.Message.getWrapperField(this, s.Image, 1)
        },proto.webcast.im.CityEffect.prototype.setEffectResource = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.CityEffect.prototype.clearEffectResource = function () {
            return this.setEffectResource(undefined)
        },proto.webcast.im.CityEffect.prototype.hasEffectResource = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.CityEffect.prototype.getCity = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.CityEffect.prototype.setCity = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.CityEffect.prototype.getShowEffectUserIdListList = function () {
            return r.Message.getRepeatedField(this, 3)
        },proto.webcast.im.CityEffect.prototype.setShowEffectUserIdListList = function (e) {
            return r.Message.setField(this, 3, e || [])
        },proto.webcast.im.CityEffect.prototype.addShowEffectUserIdList = function (e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        },proto.webcast.im.CityEffect.prototype.clearShowEffectUserIdListList = function () {
            return this.setShowEffectUserIdListList([])
        },proto.webcast.im.LinkerEnterContent.repeatedFields_ = [1, 4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerEnterContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerEnterContent.toObject(e, this)
        }, proto.webcast.im.LinkerEnterContent.toObject = function (e, t) {
            var n, o = {
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                userId: r.Message.getFieldWithDefault(t, 2, "0"),
                applyType: r.Message.getFieldWithDefault(t, 3, 0),
                preLinkUsersList: r.Message.toObjectList(t.getPreLinkUsersList(), p.ListUser.toObject, e),
                matchEffect: (n = t.getMatchEffect()) && proto.webcast.im.MatchEffect.toObject(e, n),
                cityEffect: (n = t.getCityEffect()) && proto.webcast.im.CityEffect.toObject(e, n),
                version: r.Message.getFieldWithDefault(t, 7, "0"),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : [],
                msgBoardItem: (n = t.getMsgBoardItem()) && m.MsgBoardItemInfo.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerEnterContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerEnterContent;
            return proto.webcast.im.LinkerEnterContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerEnterContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setApplyType(n);
                        break;
                    case 4:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addPreLinkUsers(n);
                        break;
                    case 5:
                        n = new proto.webcast.im.MatchEffect;
                        t.readMessage(n, proto.webcast.im.MatchEffect.deserializeBinaryFromReader), e.setMatchEffect(n);
                        break;
                    case 6:
                        n = new proto.webcast.im.CityEffect;
                        t.readMessage(n, proto.webcast.im.CityEffect.deserializeBinaryFromReader), e.setCityEffect(n);
                        break;
                    case 7:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    case 8:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    case 9:
                        n = new m.MsgBoardItemInfo;
                        t.readMessage(n, m.MsgBoardItemInfo.deserializeBinaryFromReader), e.setMsgBoardItem(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerEnterContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerEnterContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerEnterContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(1, n, p.ListUser.serializeBinaryToWriter), n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getApplyType()) && t.writeEnum(3, n), (n = e.getPreLinkUsersList()).length > 0 && t.writeRepeatedMessage(4, n, p.ListUser.serializeBinaryToWriter), null != (n = e.getMatchEffect()) && t.writeMessage(5, n, proto.webcast.im.MatchEffect.serializeBinaryToWriter), null != (n = e.getCityEffect()) && t.writeMessage(6, n, proto.webcast.im.CityEffect.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(7, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(8, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter), null != (n = e.getMsgBoardItem()) && t.writeMessage(9, n, m.MsgBoardItemInfo.serializeBinaryToWriter)
        },proto.webcast.im.LinkerEnterContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 1)
        },proto.webcast.im.LinkerEnterContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.webcast.im.LinkerEnterContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerEnterContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        },proto.webcast.im.LinkerEnterContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerEnterContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerEnterContent.prototype.getApplyType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.LinkerEnterContent.prototype.setApplyType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.LinkerEnterContent.prototype.getPreLinkUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 4)
        },proto.webcast.im.LinkerEnterContent.prototype.setPreLinkUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.LinkerEnterContent.prototype.addPreLinkUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerEnterContent.prototype.clearPreLinkUsersList = function () {
            return this.setPreLinkUsersList([])
        },proto.webcast.im.LinkerEnterContent.prototype.getMatchEffect = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.MatchEffect, 5)
        },proto.webcast.im.LinkerEnterContent.prototype.setMatchEffect = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        },proto.webcast.im.LinkerEnterContent.prototype.clearMatchEffect = function () {
            return this.setMatchEffect(undefined)
        },proto.webcast.im.LinkerEnterContent.prototype.hasMatchEffect = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.im.LinkerEnterContent.prototype.getCityEffect = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CityEffect, 6)
        },proto.webcast.im.LinkerEnterContent.prototype.setCityEffect = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        },proto.webcast.im.LinkerEnterContent.prototype.clearCityEffect = function () {
            return this.setCityEffect(undefined)
        },proto.webcast.im.LinkerEnterContent.prototype.hasCityEffect = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.im.LinkerEnterContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.LinkerEnterContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },proto.webcast.im.LinkerEnterContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 8, e, proto.webcast.data.RoomLinkerContent)
        },proto.webcast.im.LinkerEnterContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        },proto.webcast.im.LinkerEnterContent.prototype.getMsgBoardItem = function () {
            return r.Message.getWrapperField(this, m.MsgBoardItemInfo, 9)
        },proto.webcast.im.LinkerEnterContent.prototype.setMsgBoardItem = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        },proto.webcast.im.LinkerEnterContent.prototype.clearMsgBoardItem = function () {
            return this.setMsgBoardItem(undefined)
        },proto.webcast.im.LinkerEnterContent.prototype.hasMsgBoardItem = function () {
            return null != r.Message.getField(this, 9)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerViolationReminderContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerViolationReminderContent.toObject(e, this)
        }, proto.webcast.im.LinkerViolationReminderContent.toObject = function (e, t) {
            var n = {title: r.Message.getFieldWithDefault(t, 1, ""), content: r.Message.getFieldWithDefault(t, 2, "")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerViolationReminderContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerViolationReminderContent;
            return proto.webcast.im.LinkerViolationReminderContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerViolationReminderContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readString();
                        e.setTitle(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setContent(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerViolationReminderContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerViolationReminderContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerViolationReminderContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getTitle()).length > 0 && t.writeString(1, n), (n = e.getContent()).length > 0 && t.writeString(2, n)
        },proto.webcast.im.LinkerViolationReminderContent.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.LinkerViolationReminderContent.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.LinkerViolationReminderContent.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerViolationReminderContent.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerCloseContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerCloseContent.toObject(e, this)
        }, proto.webcast.im.LinkerCloseContent.toObject = function (e, t) {
            var n, o = {
                source: r.Message.getFieldWithDefault(t, 1, 0),
                banAnchorInfo: (n = t.getBanAnchorInfo()) && p.BanUser.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerCloseContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerCloseContent;
            return proto.webcast.im.LinkerCloseContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerCloseContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readEnum();
                        e.setSource(n);
                        break;
                    case 2:
                        n = new p.BanUser;
                        t.readMessage(n, p.BanUser.deserializeBinaryFromReader), e.setBanAnchorInfo(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerCloseContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerCloseContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerCloseContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            0 !== (n = e.getSource()) && t.writeEnum(1, n), null != (n = e.getBanAnchorInfo()) && t.writeMessage(2, n, p.BanUser.serializeBinaryToWriter)
        },proto.webcast.im.LinkerCloseContent.CloseSource = {
            UNKNOWN: 0,
            SWITCH_SCENE: 1,
            COMPATIBLEOCHANNEL: 2,
            BATTLEPUNISHEND: 3
        },proto.webcast.im.LinkerCloseContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.LinkerCloseContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.LinkerCloseContent.prototype.getBanAnchorInfo = function () {
            return r.Message.getWrapperField(this, p.BanUser, 2)
        },proto.webcast.im.LinkerCloseContent.prototype.setBanAnchorInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.LinkerCloseContent.prototype.clearBanAnchorInfo = function () {
            return this.setBanAnchorInfo(undefined)
        },proto.webcast.im.LinkerCloseContent.prototype.hasBanAnchorInfo = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.LinkerLeaveContent.repeatedFields_ = [2, 4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerLeaveContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerLeaveContent.toObject(e, this)
        }, proto.webcast.im.LinkerLeaveContent.toObject = function (e, t) {
            var n, o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                user: (n = t.getUser()) && p.ListUser.toObject(e, n),
                preLinkUsersList: r.Message.toObjectList(t.getPreLinkUsersList(), p.ListUser.toObject, e),
                version: r.Message.getFieldWithDefault(t, 5, "0"),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : [],
                leaveSource: r.Message.getFieldWithDefault(t, 7, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerLeaveContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerLeaveContent;
            return proto.webcast.im.LinkerLeaveContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerLeaveContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 2:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 3:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.setUser(n);
                        break;
                    case 4:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addPreLinkUsers(n);
                        break;
                    case 5:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    case 6:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    case 7:
                        n = t.readEnum();
                        e.setLeaveSource(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerLeaveContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerLeaveContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerLeaveContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(2, n, p.ListUser.serializeBinaryToWriter), null != (n = e.getUser()) && t.writeMessage(3, n, p.ListUser.serializeBinaryToWriter), (n = e.getPreLinkUsersList()).length > 0 && t.writeRepeatedMessage(4, n, p.ListUser.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(5, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(6, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter), 0 !== (n = e.getLeaveSource()) && t.writeEnum(7, n)
        },proto.webcast.im.LinkerLeaveContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerLeaveContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerLeaveContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 2)
        },proto.webcast.im.LinkerLeaveContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        },proto.webcast.im.LinkerLeaveContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerLeaveContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        },proto.webcast.im.LinkerLeaveContent.prototype.getUser = function () {
            return r.Message.getWrapperField(this, p.ListUser, 3)
        },proto.webcast.im.LinkerLeaveContent.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.webcast.im.LinkerLeaveContent.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.im.LinkerLeaveContent.prototype.hasUser = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.im.LinkerLeaveContent.prototype.getPreLinkUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 4)
        },proto.webcast.im.LinkerLeaveContent.prototype.setPreLinkUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.LinkerLeaveContent.prototype.addPreLinkUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerLeaveContent.prototype.clearPreLinkUsersList = function () {
            return this.setPreLinkUsersList([])
        },proto.webcast.im.LinkerLeaveContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkerLeaveContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LinkerLeaveContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 6, e, proto.webcast.data.RoomLinkerContent)
        },proto.webcast.im.LinkerLeaveContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        },proto.webcast.im.LinkerLeaveContent.prototype.getLeaveSource = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        },proto.webcast.im.LinkerLeaveContent.prototype.setLeaveSource = function (e) {
            return r.Message.setProto3EnumField(this, 7, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerCancelContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerCancelContent.toObject(e, this)
        }, proto.webcast.im.LinkerCancelContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                cancelType: r.Message.getFieldWithDefault(t, 3, "0"),
                inviteSource: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerCancelContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerCancelContent;
            return proto.webcast.im.LinkerCancelContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerCancelContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setCancelType(n);
                        break;
                    case 4:
                        n = t.readEnum();
                        e.setInviteSource(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerCancelContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerCancelContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerCancelContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getCancelType(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), 0 !== (n = e.getInviteSource()) && t.writeEnum(4, n)
        },proto.webcast.im.LinkerCancelContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerCancelContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerCancelContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerCancelContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerCancelContent.prototype.getCancelType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerCancelContent.prototype.setCancelType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LinkerCancelContent.prototype.getInviteSource = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.im.LinkerCancelContent.prototype.setInviteSource = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerKickOutContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerKickOutContent.toObject(e, this)
        }, proto.webcast.im.LinkerKickOutContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                controlType: r.Message.getFieldWithDefault(t, 2, 0),
                paidCount: r.Message.getFieldWithDefault(t, 3, "0"),
                linkDuration: r.Message.getFieldWithDefault(t, 4, "0"),
                kickOutSource: r.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerKickOutContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerKickOutContent;
            return proto.webcast.im.LinkerKickOutContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerKickOutContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readEnum();
                        e.setControlType(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setPaidCount(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setLinkDuration(n);
                        break;
                    case 5:
                        n = t.readEnum();
                        e.setKickOutSource(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerKickOutContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerKickOutContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerKickOutContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), 0 !== (n = e.getControlType()) && t.writeEnum(2, n), n = e.getPaidCount(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getLinkDuration(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), 0 !== (n = e.getKickOutSource()) && t.writeEnum(5, n)
        },proto.webcast.im.LinkerKickOutContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerKickOutContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerKickOutContent.prototype.getControlType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.im.LinkerKickOutContent.prototype.setControlType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        },proto.webcast.im.LinkerKickOutContent.prototype.getPaidCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerKickOutContent.prototype.setPaidCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LinkerKickOutContent.prototype.getLinkDuration = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkerKickOutContent.prototype.setLinkDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LinkerKickOutContent.prototype.getKickOutSource = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.im.LinkerKickOutContent.prototype.setKickOutSource = function (e) {
            return r.Message.setProto3EnumField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerSysKickOutContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerSysKickOutContent.toObject(e, this)
        }, proto.webcast.im.LinkerSysKickOutContent.toObject = function (e, t) {
            var n = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                linkmicIdStr: r.Message.getFieldWithDefault(t, 2, ""),
                toastMsg: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerSysKickOutContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerSysKickOutContent;
            return proto.webcast.im.LinkerSysKickOutContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerSysKickOutContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setUserId(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setLinkmicIdStr(n);
                        break;
                    case 3:
                        n = t.readString();
                        e.setToastMsg(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerSysKickOutContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerSysKickOutContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerSysKickOutContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), (n = e.getLinkmicIdStr()).length > 0 && t.writeString(2, n), (n = e.getToastMsg()).length > 0 && t.writeString(3, n)
        },proto.webcast.im.LinkerSysKickOutContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerSysKickOutContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerSysKickOutContent.prototype.getLinkmicIdStr = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerSysKickOutContent.prototype.setLinkmicIdStr = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.LinkerSysKickOutContent.prototype.getToastMsg = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.LinkerSysKickOutContent.prototype.setToastMsg = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerWaitingListChangeContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerWaitingListChangeContent.toObject(e, this)
        }, proto.webcast.im.LinkerWaitingListChangeContent.toObject = function (e, t) {
            var n = {};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerWaitingListChangeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerWaitingListChangeContent;
            return proto.webcast.im.LinkerWaitingListChangeContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerWaitingListChangeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        },proto.webcast.im.LinkerWaitingListChangeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerWaitingListChangeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerWaitingListChangeContent.serializeBinaryToWriter = function (e, t) {
            undefined
        },proto.webcast.im.LinkerLinkedListChangeContent.repeatedFields_ = [1, 2],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerLinkedListChangeContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerLinkedListChangeContent.toObject(e, this)
        }, proto.webcast.im.LinkerLinkedListChangeContent.toObject = function (e, t) {
            var n, o = {
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                preLinkUsersList: r.Message.toObjectList(t.getPreLinkUsersList(), p.ListUser.toObject, e),
                version: r.Message.getFieldWithDefault(t, 3, "0"),
                pushType: r.Message.getFieldWithDefault(t, 4, 0),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : []
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerLinkedListChangeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerLinkedListChangeContent;
            return proto.webcast.im.LinkerLinkedListChangeContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerLinkedListChangeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 2:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addPreLinkUsers(n);
                        break;
                    case 3:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    case 4:
                        n = t.readEnum();
                        e.setPushType(n);
                        break;
                    case 5:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerLinkedListChangeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerLinkedListChangeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerLinkedListChangeContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(1, n, p.ListUser.serializeBinaryToWriter), (n = e.getPreLinkUsersList()).length > 0 && t.writeRepeatedMessage(2, n, p.ListUser.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(3, n), 0 !== (n = e.getPushType()) && t.writeEnum(4, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(5, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter)
        },proto.webcast.im.LinkerLinkedListChangeContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 1)
        },proto.webcast.im.LinkerLinkedListChangeContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.webcast.im.LinkerLinkedListChangeContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerLinkedListChangeContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        };
        proto.webcast.im.LinkerLinkedListChangeContent.prototype.getPreLinkUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 2)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.setPreLinkUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.addPreLinkUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.ListUser, t)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.clearPreLinkUsersList = function () {
            return this.setPreLinkUsersList([])
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.getPushType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.setPushType = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 5, e, proto.webcast.data.RoomLinkerContent)
        }, proto.webcast.im.LinkerLinkedListChangeContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        }, proto.webcast.im.LinkerBanContent.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerBanContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerBanContent.toObject(e, this)
        }, proto.webcast.im.LinkerBanContent.toObject = function (e, t) {
            var n = {banUsersList: r.Message.toObjectList(t.getBanUsersList(), p.BanUser.toObject, e)};
            return e && (n.$jspbMessageInstance = t), n
        }), proto.webcast.im.LinkerBanContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerBanContent;
            return proto.webcast.im.LinkerBanContent.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LinkerBanContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = new p.BanUser;
                    t.readMessage(n, p.BanUser.deserializeBinaryFromReader), e.addBanUsers(n)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.LinkerBanContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerBanContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkerBanContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getBanUsersList()).length > 0 && t.writeRepeatedMessage(1, n, p.BanUser.serializeBinaryToWriter)
        }, proto.webcast.im.LinkerBanContent.prototype.getBanUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.BanUser, 1)
        }, proto.webcast.im.LinkerBanContent.prototype.setBanUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }, proto.webcast.im.LinkerBanContent.prototype.addBanUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.BanUser, t)
        }, proto.webcast.im.LinkerBanContent.prototype.clearBanUsersList = function () {
            return this.setBanUsersList([])
        }, proto.webcast.im.LinkerUpdateUserContent.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerUpdateUserContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerUpdateUserContent.toObject(e, this)
        }, proto.webcast.im.LinkerUpdateUserContent.toObject = function (e, t) {
            var n, o = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                updateInfoMap: (n = t.getUpdateInfoMap()) ? n.toObject(e, undefined) : [],
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                extra: r.Message.getFieldWithDefault(t, 5, ""),
                version: r.Message.getFieldWithDefault(t, 6, "0"),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : [],
                ackMessage: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkerUpdateUserContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerUpdateUserContent;
            return proto.webcast.im.LinkerUpdateUserContent.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LinkerUpdateUserContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = e.getUpdateInfoMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 4:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 5:
                        n = t.readString();
                        e.setExtra(n);
                        break;
                    case 6:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    case 7:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    case 8:
                        n = t.readString();
                        e.setAckMessage(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerUpdateUserContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkerUpdateUserContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), (n = e.getUpdateInfoMap(!0)) && n.getLength() > 0 && n.serializeBinary(3, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(4, n, p.ListUser.serializeBinaryToWriter), (n = e.getExtra()).length > 0 && t.writeString(5, n), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(6, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(7, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter), (n = e.getAckMessage()).length > 0 && t.writeString(8, n)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getUpdateInfoMap = function (e) {
            return r.Message.getMapField(this, 3, e, null)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.clearUpdateInfoMap = function () {
            return this.getUpdateInfoMap().clear(), this
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 4)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.ListUser, t)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 7, e, proto.webcast.data.RoomLinkerContent)
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.getAckMessage = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.LinkerUpdateUserContent.prototype.setAckMessage = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelNoticeContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelNoticeContent.toObject(e, this)
        }, proto.webcast.im.ChannelNoticeContent.toObject = function (e, t) {
            var n = {
                channelId: r.Message.getFieldWithDefault(t, 1, "0"),
                action: r.Message.getFieldWithDefault(t, 2, 0),
                extraInfo: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (n.$jspbMessageInstance = t), n
        }), proto.webcast.im.ChannelNoticeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.ChannelNoticeContent;
            return proto.webcast.im.ChannelNoticeContent.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.ChannelNoticeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setChannelId(n);
                        break;
                    case 2:
                        n = t.readEnum();
                        e.setAction(n);
                        break;
                    case 3:
                        n = t.readString();
                        e.setExtraInfo(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ChannelNoticeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelNoticeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ChannelNoticeContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getChannelId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), 0 !== (n = e.getAction()) && t.writeEnum(2, n), (n = e.getExtraInfo()).length > 0 && t.writeString(3, n)
        }, proto.webcast.im.ChannelNoticeContent.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.ChannelNoticeContent.prototype.setChannelId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.ChannelNoticeContent.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ChannelNoticeContent.prototype.setAction = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.ChannelNoticeContent.prototype.getExtraInfo = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ChannelNoticeContent.prototype.setExtraInfo = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerItemContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerItemContent.toObject(e, this)
        }, proto.webcast.im.LinkerItemContent.toObject = function (e, t) {
            var n, o = {
                itemId: r.Message.getFieldWithDefault(t, 1, "0"),
                authorId: r.Message.getFieldWithDefault(t, 2, "0"),
                authorName: r.Message.getFieldWithDefault(t, 3, ""),
                avatarThumb: (n = t.getAvatarThumb()) && s.Image.toObject(e, n),
                avatarMedium: (n = t.getAvatarMedium()) && s.Image.toObject(e, n),
                avatarLarge: (n = t.getAvatarLarge()) && s.Image.toObject(e, n),
                itemDescription: r.Message.getFieldWithDefault(t, 7, ""),
                musicId: r.Message.getFieldWithDefault(t, 8, ""),
                musicTitle: r.Message.getFieldWithDefault(t, 9, ""),
                musicAuthor: r.Message.getFieldWithDefault(t, 10, ""),
                musicUrl: r.Message.getFieldWithDefault(t, 11, ""),
                commentCount: r.Message.getFieldWithDefault(t, 12, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkerItemContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerItemContent;
            return proto.webcast.im.LinkerItemContent.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LinkerItemContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setItemId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setAuthorId(n);
                        break;
                    case 3:
                        n = t.readString();
                        e.setAuthorName(n);
                        break;
                    case 4:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarThumb(n);
                        break;
                    case 5:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarMedium(n);
                        break;
                    case 6:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarLarge(n);
                        break;
                    case 7:
                        n = t.readString();
                        e.setItemDescription(n);
                        break;
                    case 8:
                        n = t.readString();
                        e.setMusicId(n);
                        break;
                    case 9:
                        n = t.readString();
                        e.setMusicTitle(n);
                        break;
                    case 10:
                        n = t.readString();
                        e.setMusicAuthor(n);
                        break;
                    case 11:
                        n = t.readString();
                        e.setMusicUrl(n);
                        break;
                    case 12:
                        n = t.readInt64String();
                        e.setCommentCount(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkerItemContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerItemContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkerItemContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getItemId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getAuthorId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), (n = e.getAuthorName()).length > 0 && t.writeString(3, n), null != (n = e.getAvatarThumb()) && t.writeMessage(4, n, s.Image.serializeBinaryToWriter), null != (n = e.getAvatarMedium()) && t.writeMessage(5, n, s.Image.serializeBinaryToWriter), null != (n = e.getAvatarLarge()) && t.writeMessage(6, n, s.Image.serializeBinaryToWriter), (n = e.getItemDescription()).length > 0 && t.writeString(7, n), (n = e.getMusicId()).length > 0 && t.writeString(8, n), (n = e.getMusicTitle()).length > 0 && t.writeString(9, n), (n = e.getMusicAuthor()).length > 0 && t.writeString(10, n), (n = e.getMusicUrl()).length > 0 && t.writeString(11, n), n = e.getCommentCount(), 0 !== parseInt(n, 10) && t.writeInt64String(12, n)
        }, proto.webcast.im.LinkerItemContent.prototype.getItemId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.LinkerItemContent.prototype.setItemId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getAuthorId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LinkerItemContent.prototype.setAuthorId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getAuthorName = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.LinkerItemContent.prototype.setAuthorName = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getAvatarThumb = function () {
            return r.Message.getWrapperField(this, s.Image, 4)
        }, proto.webcast.im.LinkerItemContent.prototype.setAvatarThumb = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.LinkerItemContent.prototype.clearAvatarThumb = function () {
            return this.setAvatarThumb(undefined)
        }, proto.webcast.im.LinkerItemContent.prototype.hasAvatarThumb = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.LinkerItemContent.prototype.getAvatarMedium = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        }, proto.webcast.im.LinkerItemContent.prototype.setAvatarMedium = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.LinkerItemContent.prototype.clearAvatarMedium = function () {
            return this.setAvatarMedium(undefined)
        }, proto.webcast.im.LinkerItemContent.prototype.hasAvatarMedium = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.LinkerItemContent.prototype.getAvatarLarge = function () {
            return r.Message.getWrapperField(this, s.Image, 6)
        }, proto.webcast.im.LinkerItemContent.prototype.setAvatarLarge = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.LinkerItemContent.prototype.clearAvatarLarge = function () {
            return this.setAvatarLarge(undefined)
        }, proto.webcast.im.LinkerItemContent.prototype.hasAvatarLarge = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.LinkerItemContent.prototype.getItemDescription = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.LinkerItemContent.prototype.setItemDescription = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getMusicId = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.LinkerItemContent.prototype.setMusicId = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getMusicTitle = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.LinkerItemContent.prototype.setMusicTitle = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getMusicAuthor = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.LinkerItemContent.prototype.setMusicAuthor = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getMusicUrl = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        }, proto.webcast.im.LinkerItemContent.prototype.setMusicUrl = function (e) {
            return r.Message.setProto3StringField(this, 11, e)
        }, proto.webcast.im.LinkerItemContent.prototype.getCommentCount = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.LinkerItemContent.prototype.setCommentCount = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerUpdateLinkTypeApplyContent.toObject(e, this)
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                linkType: r.Message.getFieldWithDefault(t, 3, 0),
                source: r.Message.getFieldWithDefault(t, 4, 0),
                ackMessage: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (n.$jspbMessageInstance = t), n
        }), proto.webcast.im.LinkerUpdateLinkTypeApplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerUpdateLinkTypeApplyContent;
            return proto.webcast.im.LinkerUpdateLinkTypeApplyContent.deserializeBinaryFromReader(n, t)
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setLinkType(n);
                        break;
                    case 4:
                        n = t.readEnum();
                        e.setSource(n);
                        break;
                    case 5:
                        n = t.readString();
                        e.setAckMessage(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerUpdateLinkTypeApplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getLinkType()) && t.writeEnum(3, n), 0 !== (n = e.getSource()) && t.writeEnum(4, n), (n = e.getAckMessage()).length > 0 && t.writeString(5, n)
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.getLinkType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.setLinkType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        },proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.getAckMessage = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.LinkerUpdateLinkTypeApplyContent.prototype.setAckMessage = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerUpdateLinkTypeReplyContent.toObject(e, this)
        }, proto.webcast.im.LinkerUpdateLinkTypeReplyContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                replyType: r.Message.getFieldWithDefault(t, 3, 0),
                replyPrompts: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerUpdateLinkTypeReplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerUpdateLinkTypeReplyContent;
            return proto.webcast.im.LinkerUpdateLinkTypeReplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setReplyType(n);
                        break;
                    case 4:
                        n = t.readString();
                        e.setReplyPrompts(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerUpdateLinkTypeReplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getReplyType()) && t.writeEnum(3, n), (n = e.getReplyPrompts()).length > 0 && t.writeString(4, n)
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.getReplyType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.setReplyType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.getReplyPrompts = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.LinkerUpdateLinkTypeReplyContent.prototype.setReplyPrompts = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerAvatarAuditContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerAvatarAuditContent.toObject(e, this)
        }, proto.webcast.im.LinkerAvatarAuditContent.toObject = function (e, t) {
            var n = {
                auditRes: r.Message.getFieldWithDefault(t, 1, 0),
                reason: r.Message.getFieldWithDefault(t, 2, ""),
                reviewId: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerAvatarAuditContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerAvatarAuditContent;
            return proto.webcast.im.LinkerAvatarAuditContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerAvatarAuditContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readEnum();
                        e.setAuditRes(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setReason(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setReviewId(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerAvatarAuditContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerAvatarAuditContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            0 !== (n = e.getAuditRes()) && t.writeEnum(1, n), (n = e.getReason()).length > 0 && t.writeString(2, n), n = e.getReviewId(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n)
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.getAuditRes = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.setAuditRes = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.getReason = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.setReason = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.getReviewId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerAvatarAuditContent.prototype.setReviewId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerApplyExpiredContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerApplyExpiredContent.toObject(e, this)
        }, proto.webcast.im.LinkerApplyExpiredContent.toObject = function (e, t) {
            var n = {userId: r.Message.getFieldWithDefault(t, 1, "0")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerApplyExpiredContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerApplyExpiredContent;
            return proto.webcast.im.LinkerApplyExpiredContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerApplyExpiredContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readInt64String();
                    e.setUserId(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerApplyExpiredContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerApplyExpiredContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerApplyExpiredContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n)
        },proto.webcast.im.LinkerApplyExpiredContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerApplyExpiredContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerApplyStrongReminderContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerApplyStrongReminderContent.toObject(e, this)
        }, proto.webcast.im.LinkerApplyStrongReminderContent.toObject = function (e, t) {
            var n,
                o = {source: r.Message.getFieldWithDefault(t, 1, 0), user: (n = t.getUser()) && u.User.toObject(e, n)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerApplyStrongReminderContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerApplyStrongReminderContent;
            return proto.webcast.im.LinkerApplyStrongReminderContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerApplyStrongReminderContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readEnum();
                        e.setSource(n);
                        break;
                    case 2:
                        n = new u.User;
                        t.readMessage(n, u.User.deserializeBinaryFromReader), e.setUser(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerApplyStrongReminderContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerApplyStrongReminderContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            0 !== (n = e.getSource()) && t.writeEnum(1, n), null != (n = e.getUser()) && t.writeMessage(2, n, u.User.serializeBinaryToWriter)
        },proto.webcast.im.LinkerApplyStrongReminderContent.TriggerSource = {
            UNKNOWN: 0,
            APPLY: 1,
            LEAVE: 2
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.getUser = function () {
            return r.Message.getWrapperField(this, u.User, 2)
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.im.LinkerApplyStrongReminderContent.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.repeatedFields_ = [3],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerAnchorStreamSwitchContent.toObject(e, this)
        }, proto.webcast.im.LinkerAnchorStreamSwitchContent.toObject = function (e, t) {
            var n = {
                useBackupStream: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                anchorUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                version: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerAnchorStreamSwitchContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerAnchorStreamSwitchContent;
            return proto.webcast.im.LinkerAnchorStreamSwitchContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readBool();
                        e.setUseBackupStream(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setAnchorUserId(n);
                        break;
                    case 3:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 4:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerAnchorStreamSwitchContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getUseBackupStream()) && t.writeBool(1, n), n = e.getAnchorUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(3, n, p.ListUser.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(4, n)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.getUseBackupStream = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.setUseBackupStream = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.getAnchorUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.setAnchorUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 3)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkerAnchorStreamSwitchContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerClickScreenContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerClickScreenContent.toObject(e, this)
        }, proto.webcast.im.LinkerClickScreenContent.toObject = function (e, t) {
            var n, o = {
                deviceWidth: r.Message.getFieldWithDefault(t, 1, "0"),
                deviceHeight: r.Message.getFieldWithDefault(t, 2, "0"),
                pointX: r.Message.getFieldWithDefault(t, 3, "0"),
                pointY: r.Message.getFieldWithDefault(t, 4, "0"),
                fromUserId: r.Message.getFieldWithDefault(t, 5, "0"),
                avatarMedium: (n = t.getAvatarMedium()) && s.Image.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerClickScreenContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerClickScreenContent;
            return proto.webcast.im.LinkerClickScreenContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerClickScreenContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setDeviceWidth(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setDeviceHeight(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setPointX(n);
                        break;
                    case 4:
                        n = t.readInt64String();
                        e.setPointY(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 6:
                        n = new s.Image;
                        t.readMessage(n, s.Image.deserializeBinaryFromReader), e.setAvatarMedium(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerClickScreenContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerClickScreenContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerClickScreenContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getDeviceWidth(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getDeviceHeight(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getPointX(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n), n = e.getPointY(), 0 !== parseInt(n, 10) && t.writeInt64String(4, n), n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), null != (n = e.getAvatarMedium()) && t.writeMessage(6, n, s.Image.serializeBinaryToWriter)
        },proto.webcast.im.LinkerClickScreenContent.prototype.getDeviceWidth = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerClickScreenContent.prototype.setDeviceWidth = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerClickScreenContent.prototype.getDeviceHeight = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerClickScreenContent.prototype.setDeviceHeight = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerClickScreenContent.prototype.getPointX = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerClickScreenContent.prototype.setPointX = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LinkerClickScreenContent.prototype.getPointY = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkerClickScreenContent.prototype.setPointY = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LinkerClickScreenContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkerClickScreenContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LinkerClickScreenContent.prototype.getAvatarMedium = function () {
            return r.Message.getWrapperField(this, s.Image, 6)
        },proto.webcast.im.LinkerClickScreenContent.prototype.setAvatarMedium = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        },proto.webcast.im.LinkerClickScreenContent.prototype.clearAvatarMedium = function () {
            return this.setAvatarMedium(undefined)
        },proto.webcast.im.LinkerClickScreenContent.prototype.hasAvatarMedium = function () {
            return null != r.Message.getField(this, 6)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerFollowStrongGuideContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerFollowStrongGuideContent.toObject(e, this)
        }, proto.webcast.im.LinkerFollowStrongGuideContent.toObject = function (e, t) {
            var n, o = {
                fromUser: (n = t.getFromUser()) && u.User.toObject(e, n),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                fromUserType: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerFollowStrongGuideContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerFollowStrongGuideContent;
            return proto.webcast.im.LinkerFollowStrongGuideContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerFollowStrongGuideContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new u.User;
                        t.readMessage(n, u.User.deserializeBinaryFromReader), e.setFromUser(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setFromUserType(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerFollowStrongGuideContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerFollowStrongGuideContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getFromUser()) && t.writeMessage(1, n, u.User.serializeBinaryToWriter), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getFromUserType()) && t.writeEnum(3, n)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.getFromUser = function () {
            return r.Message.getWrapperField(this, u.User, 1)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.setFromUser = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.clearFromUser = function () {
            return this.setFromUser(undefined)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.hasFromUser = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.getFromUserType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.LinkerFollowStrongGuideContent.prototype.setFromUserType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.LinkerLockPositionContent.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerLockPositionContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerLockPositionContent.toObject(e, this)
        }, proto.webcast.im.LinkerLockPositionContent.toObject = function (e, t) {
            var n = {lockedPositionsList: r.Message.toObjectList(t.getLockedPositionsList(), l.LinkmicPositionItem.toObject, e)};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerLockPositionContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerLockPositionContent;
            return proto.webcast.im.LinkerLockPositionContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerLockPositionContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = new l.LinkmicPositionItem;
                    t.readMessage(n, l.LinkmicPositionItem.deserializeBinaryFromReader), e.addLockedPositions(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerLockPositionContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerLockPositionContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerLockPositionContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getLockedPositionsList()).length > 0 && t.writeRepeatedMessage(1, n, l.LinkmicPositionItem.serializeBinaryToWriter)
        },proto.webcast.im.LinkerLockPositionContent.prototype.getLockedPositionsList = function () {
            return r.Message.getRepeatedWrapperField(this, l.LinkmicPositionItem, 1)
        },proto.webcast.im.LinkerLockPositionContent.prototype.setLockedPositionsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.webcast.im.LinkerLockPositionContent.prototype.addLockedPositions = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.LinkmicPositionItem, t)
        },proto.webcast.im.LinkerLockPositionContent.prototype.clearLockedPositionsList = function () {
            return this.setLockedPositionsList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerShareVideoImContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerShareVideoImContent.toObject(e, this)
        }, proto.webcast.im.LinkerShareVideoImContent.toObject = function (e, t) {
            var n = {imContent: r.Message.getFieldWithDefault(t, 1, "")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerShareVideoImContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerShareVideoImContent;
            return proto.webcast.im.LinkerShareVideoImContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerShareVideoImContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readString();
                    e.setImContent(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerShareVideoImContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerShareVideoImContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerShareVideoImContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getImContent()).length > 0 && t.writeString(1, n)
        },proto.webcast.im.LinkerShareVideoImContent.prototype.getImContent = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.LinkerShareVideoImContent.prototype.setImContent = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerGuestInviteContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerGuestInviteContent.toObject(e, this)
        }, proto.webcast.im.LinkerGuestInviteContent.toObject = function (e, t) {
            var n, r = {inviteContent: (n = t.getInviteContent()) && g.Text.toObject(e, n)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.webcast.im.LinkerGuestInviteContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerGuestInviteContent;
            return proto.webcast.im.LinkerGuestInviteContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerGuestInviteContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = new g.Text;
                    t.readMessage(n, g.Text.deserializeBinaryFromReader), e.setInviteContent(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerGuestInviteContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerGuestInviteContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerGuestInviteContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getInviteContent()) && t.writeMessage(1, n, g.Text.serializeBinaryToWriter)
        },proto.webcast.im.LinkerGuestInviteContent.prototype.getInviteContent = function () {
            return r.Message.getWrapperField(this, g.Text, 1)
        },proto.webcast.im.LinkerGuestInviteContent.prototype.setInviteContent = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerGuestInviteContent.prototype.clearInviteContent = function () {
            return this.setInviteContent(undefined)
        },proto.webcast.im.LinkerGuestInviteContent.prototype.hasInviteContent = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerGuestExitCastScreenContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerGuestExitCastScreenContent.toObject(e, this)
        }, proto.webcast.im.LinkerGuestExitCastScreenContent.toObject = function (e, t) {
            var n = {userId: r.Message.getFieldWithDefault(t, 1, "0")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerGuestExitCastScreenContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerGuestExitCastScreenContent;
            return proto.webcast.im.LinkerGuestExitCastScreenContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerGuestExitCastScreenContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readInt64String();
                    e.setUserId(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerGuestExitCastScreenContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerGuestExitCastScreenContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerGuestExitCastScreenContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n)
        },proto.webcast.im.LinkerGuestExitCastScreenContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerGuestExitCastScreenContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerSwitchSceneContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerSwitchSceneContent.toObject(e, this)
        }, proto.webcast.im.LinkerSwitchSceneContent.toObject = function (e, t) {
            var n, r = {switchSceneData: (n = t.getSwitchSceneData()) && p.SwitchSceneData.toObject(e, n)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.webcast.im.LinkerSwitchSceneContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerSwitchSceneContent;
            return proto.webcast.im.LinkerSwitchSceneContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerSwitchSceneContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = new p.SwitchSceneData;
                    t.readMessage(n, p.SwitchSceneData.deserializeBinaryFromReader), e.setSwitchSceneData(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerSwitchSceneContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerSwitchSceneContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerSwitchSceneContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getSwitchSceneData()) && t.writeMessage(1, n, p.SwitchSceneData.serializeBinaryToWriter)
        },proto.webcast.im.LinkerSwitchSceneContent.prototype.getSwitchSceneData = function () {
            return r.Message.getWrapperField(this, p.SwitchSceneData, 1)
        },proto.webcast.im.LinkerSwitchSceneContent.prototype.setSwitchSceneData = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerSwitchSceneContent.prototype.clearSwitchSceneData = function () {
            return this.setSwitchSceneData(undefined)
        },proto.webcast.im.LinkerSwitchSceneContent.prototype.hasSwitchSceneData = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkPhaseEnterNextNotifyContent.toObject(e, this)
        }, proto.webcast.im.LinkPhaseEnterNextNotifyContent.toObject = function (e, t) {
            var n, o = {
                roomId: r.Message.getFieldWithDefault(t, 1, "0"),
                anchorUser: (n = t.getAnchorUser()) && u.User.toObject(e, n),
                linkUser: (n = t.getLinkUser()) && u.User.toObject(e, n),
                nextPhase: (n = t.getNextPhase()) && d.LinkPhase.toObject(e, n),
                currentPhaseId: r.Message.getFieldWithDefault(t, 5, 0),
                currentLinktimeSeconds: r.Message.getFieldWithDefault(t, 6, 0),
                phaseConfig: (n = t.getPhaseConfig()) && d.LinkPhaseConfig.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkPhaseEnterNextNotifyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkPhaseEnterNextNotifyContent;
            return proto.webcast.im.LinkPhaseEnterNextNotifyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setRoomId(n);
                        break;
                    case 2:
                        n = new u.User;
                        t.readMessage(n, u.User.deserializeBinaryFromReader), e.setAnchorUser(n);
                        break;
                    case 3:
                        n = new u.User;
                        t.readMessage(n, u.User.deserializeBinaryFromReader), e.setLinkUser(n);
                        break;
                    case 4:
                        n = new d.LinkPhase;
                        t.readMessage(n, d.LinkPhase.deserializeBinaryFromReader), e.setNextPhase(n);
                        break;
                    case 5:
                        n = t.readInt32();
                        e.setCurrentPhaseId(n);
                        break;
                    case 6:
                        n = t.readInt32();
                        e.setCurrentLinktimeSeconds(n);
                        break;
                    case 7:
                        n = new d.LinkPhaseConfig;
                        t.readMessage(n, d.LinkPhaseConfig.deserializeBinaryFromReader), e.setPhaseConfig(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkPhaseEnterNextNotifyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), null != (n = e.getAnchorUser()) && t.writeMessage(2, n, u.User.serializeBinaryToWriter), null != (n = e.getLinkUser()) && t.writeMessage(3, n, u.User.serializeBinaryToWriter), null != (n = e.getNextPhase()) && t.writeMessage(4, n, d.LinkPhase.serializeBinaryToWriter), 0 !== (n = e.getCurrentPhaseId()) && t.writeInt32(5, n), 0 !== (n = e.getCurrentLinktimeSeconds()) && t.writeInt32(6, n), null != (n = e.getPhaseConfig()) && t.writeMessage(7, n, d.LinkPhaseConfig.serializeBinaryToWriter)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getAnchorUser = function () {
            return r.Message.getWrapperField(this, u.User, 2)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setAnchorUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.clearAnchorUser = function () {
            return this.setAnchorUser(undefined)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.hasAnchorUser = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getLinkUser = function () {
            return r.Message.getWrapperField(this, u.User, 3)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setLinkUser = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.clearLinkUser = function () {
            return this.setLinkUser(undefined)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.hasLinkUser = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getNextPhase = function () {
            return r.Message.getWrapperField(this, d.LinkPhase, 4)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setNextPhase = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.clearNextPhase = function () {
            return this.setNextPhase(undefined)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.hasNextPhase = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getCurrentPhaseId = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setCurrentPhaseId = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getCurrentLinktimeSeconds = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setCurrentLinktimeSeconds = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.getPhaseConfig = function () {
            return r.Message.getWrapperField(this, d.LinkPhaseConfig, 7)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.setPhaseConfig = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.clearPhaseConfig = function () {
            return this.setPhaseConfig(undefined)
        },proto.webcast.im.LinkPhaseEnterNextNotifyContent.prototype.hasPhaseConfig = function () {
            return null != r.Message.getField(this, 7)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerChangePlayModeContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerChangePlayModeContent.toObject(e, this)
        }, proto.webcast.im.LinkerChangePlayModeContent.toObject = function (e, t) {
            var n, r = {changePlayModeData: (n = t.getChangePlayModeData()) && p.ChangePlayModeData.toObject(e, n)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.webcast.im.LinkerChangePlayModeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerChangePlayModeContent;
            return proto.webcast.im.LinkerChangePlayModeContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerChangePlayModeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = new p.ChangePlayModeData;
                    t.readMessage(n, p.ChangePlayModeData.deserializeBinaryFromReader), e.setChangePlayModeData(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerChangePlayModeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerChangePlayModeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerChangePlayModeContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getChangePlayModeData()) && t.writeMessage(1, n, p.ChangePlayModeData.serializeBinaryToWriter)
        },proto.webcast.im.LinkerChangePlayModeContent.prototype.getChangePlayModeData = function () {
            return r.Message.getWrapperField(this, p.ChangePlayModeData, 1)
        },proto.webcast.im.LinkerChangePlayModeContent.prototype.setChangePlayModeData = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerChangePlayModeContent.prototype.clearChangePlayModeData = function () {
            return this.setChangePlayModeData(undefined)
        },proto.webcast.im.LinkerChangePlayModeContent.prototype.hasChangePlayModeData = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.toObject(e, this)
        }, proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.toObject = function (e, t) {
            var n = {toast: r.Message.getFieldWithDefault(t, 1, "")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent;
            return proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readString();
                    e.setToast(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getToast()).length > 0 && t.writeString(1, n)
        },proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.LinkerLowBalanceForPaidLinkmicContent.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerDegradeAlertContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerDegradeAlertContent.toObject(e, this)
        }, proto.webcast.im.LinkerDegradeAlertContent.toObject = function (e, t) {
            var n, o = {
                user: (n = t.getUser()) && u.User.toObject(e, n),
                degradeContent: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerDegradeAlertContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerDegradeAlertContent;
            return proto.webcast.im.LinkerDegradeAlertContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerDegradeAlertContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new u.User;
                        t.readMessage(n, u.User.deserializeBinaryFromReader), e.setUser(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setDegradeContent(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerDegradeAlertContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerDegradeAlertContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getUser()) && t.writeMessage(1, n, u.User.serializeBinaryToWriter), (n = e.getDegradeContent()).length > 0 && t.writeString(2, n)
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.getUser = function () {
            return r.Message.getWrapperField(this, u.User, 1)
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.hasUser = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.getDegradeContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerDegradeAlertContent.prototype.setDegradeContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerEnlargeGuestInviteContent.toObject(e, this)
        }, proto.webcast.im.LinkerEnlargeGuestInviteContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                inviteType: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerEnlargeGuestInviteContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerEnlargeGuestInviteContent;
            return proto.webcast.im.LinkerEnlargeGuestInviteContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setInviteType(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerEnlargeGuestInviteContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getInviteType()) && t.writeEnum(3, n)
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.getInviteType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.LinkerEnlargeGuestInviteContent.prototype.setInviteType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerEnlargeGuestReplyContent.toObject(e, this)
        }, proto.webcast.im.LinkerEnlargeGuestReplyContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                replyType: r.Message.getFieldWithDefault(t, 3, 0),
                replyPrompts: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerEnlargeGuestReplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerEnlargeGuestReplyContent;
            return proto.webcast.im.LinkerEnlargeGuestReplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setReplyType(n);
                        break;
                    case 4:
                        n = t.readString();
                        e.setReplyPrompts(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerEnlargeGuestReplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getReplyType()) && t.writeEnum(3, n), (n = e.getReplyPrompts()).length > 0 && t.writeString(4, n)
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.getReplyType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.setReplyType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.getReplyPrompts = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.LinkerEnlargeGuestReplyContent.prototype.setReplyPrompts = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerEnlargeGuestApplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerEnlargeGuestApplyContent.toObject(e, this)
        }, proto.webcast.im.LinkerEnlargeGuestApplyContent.toObject = function (e, t) {
            var n = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                applyPrompts: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerEnlargeGuestApplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerEnlargeGuestApplyContent;
            return proto.webcast.im.LinkerEnlargeGuestApplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromUserId(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setApplyPrompts(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerEnlargeGuestApplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), (n = e.getApplyPrompts()).length > 0 && t.writeString(2, n)
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.prototype.getApplyPrompts = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerEnlargeGuestApplyContent.prototype.setApplyPrompts = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CrossRoomLinkInviteContent.prototype.toObject = function (e) {
            return proto.webcast.im.CrossRoomLinkInviteContent.toObject(e, this)
        }, proto.webcast.im.CrossRoomLinkInviteContent.toObject = function (e, t) {
            var n, o = {
                inviter: (n = t.getInviter()) && u.User.toObject(e, n),
                roomInfo: (n = t.getRoomInfo()) && l.InviteRoomInfo.toObject(e, n),
                inviteTips: r.Message.getFieldWithDefault(t, 3, ""),
                inviterRoomJoinStatus: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.CrossRoomLinkInviteContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.CrossRoomLinkInviteContent;
            return proto.webcast.im.CrossRoomLinkInviteContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.CrossRoomLinkInviteContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new u.User;
                        t.readMessage(n, u.User.deserializeBinaryFromReader), e.setInviter(n);
                        break;
                    case 2:
                        n = new l.InviteRoomInfo;
                        t.readMessage(n, l.InviteRoomInfo.deserializeBinaryFromReader), e.setRoomInfo(n);
                        break;
                    case 3:
                        n = t.readString();
                        e.setInviteTips(n);
                        break;
                    case 4:
                        n = t.readEnum();
                        e.setInviterRoomJoinStatus(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CrossRoomLinkInviteContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.CrossRoomLinkInviteContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getInviter()) && t.writeMessage(1, n, u.User.serializeBinaryToWriter), null != (n = e.getRoomInfo()) && t.writeMessage(2, n, l.InviteRoomInfo.serializeBinaryToWriter), (n = e.getInviteTips()).length > 0 && t.writeString(3, n), 0 !== (n = e.getInviterRoomJoinStatus()) && t.writeEnum(4, n)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.getInviter = function () {
            return r.Message.getWrapperField(this, u.User, 1)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.setInviter = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.clearInviter = function () {
            return this.setInviter(undefined)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.hasInviter = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.getRoomInfo = function () {
            return r.Message.getWrapperField(this, l.InviteRoomInfo, 2)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.setRoomInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.clearRoomInfo = function () {
            return this.setRoomInfo(undefined)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.hasRoomInfo = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.getInviteTips = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.setInviteTips = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.getInviterRoomJoinStatus = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.im.CrossRoomLinkInviteContent.prototype.setInviterRoomJoinStatus = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.repeatedFields_ = [4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CrossRoomLinkReplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.CrossRoomLinkReplyContent.toObject(e, this)
        }, proto.webcast.im.CrossRoomLinkReplyContent.toObject = function (e, t) {
            var n, o = {
                replyType: r.Message.getFieldWithDefault(t, 1, 0),
                inviteeRoomId: r.Message.getFieldWithDefault(t, 2, "0"),
                crossType: r.Message.getFieldWithDefault(t, 3, 0),
                guestInfosList: r.Message.toObjectList(t.getGuestInfosList(), l.CrossRoomLinkReplyGuestInfo.toObject, e),
                inviteeAnchorId: r.Message.getFieldWithDefault(t, 5, "0"),
                followStatus: r.Message.getFieldWithDefault(t, 6, "0"),
                inviteSource: r.Message.getFieldWithDefault(t, 7, "0"),
                replyUserId: r.Message.getFieldWithDefault(t, 8, "0"),
                replyToast: r.Message.getFieldWithDefault(t, 9, ""),
                replyOperate: r.Message.getFieldWithDefault(t, 10, 0),
                processInfo: (n = t.getProcessInfo()) && b.RoomBattleProcessInfo.toObject(e, n)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.CrossRoomLinkReplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.CrossRoomLinkReplyContent;
            return proto.webcast.im.CrossRoomLinkReplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.CrossRoomLinkReplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readEnum();
                        e.setReplyType(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setInviteeRoomId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setCrossType(n);
                        break;
                    case 4:
                        n = new l.CrossRoomLinkReplyGuestInfo;
                        t.readMessage(n, l.CrossRoomLinkReplyGuestInfo.deserializeBinaryFromReader), e.addGuestInfos(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setInviteeAnchorId(n);
                        break;
                    case 6:
                        n = t.readInt64String();
                        e.setFollowStatus(n);
                        break;
                    case 7:
                        n = t.readInt64String();
                        e.setInviteSource(n);
                        break;
                    case 8:
                        n = t.readInt64String();
                        e.setReplyUserId(n);
                        break;
                    case 9:
                        n = t.readString();
                        e.setReplyToast(n);
                        break;
                    case 10:
                        n = t.readEnum();
                        e.setReplyOperate(n);
                        break;
                    case 11:
                        n = new b.RoomBattleProcessInfo;
                        t.readMessage(n, b.RoomBattleProcessInfo.deserializeBinaryFromReader), e.setProcessInfo(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CrossRoomLinkReplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.CrossRoomLinkReplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            0 !== (n = e.getReplyType()) && t.writeEnum(1, n), n = e.getInviteeRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getCrossType()) && t.writeEnum(3, n), (n = e.getGuestInfosList()).length > 0 && t.writeRepeatedMessage(4, n, l.CrossRoomLinkReplyGuestInfo.serializeBinaryToWriter), n = e.getInviteeAnchorId(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n), n = e.getFollowStatus(), 0 !== parseInt(n, 10) && t.writeInt64String(6, n), n = e.getInviteSource(), 0 !== parseInt(n, 10) && t.writeInt64String(7, n), n = e.getReplyUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(8, n), (n = e.getReplyToast()).length > 0 && t.writeString(9, n), 0 !== (n = e.getReplyOperate()) && t.writeEnum(10, n), null != (n = e.getProcessInfo()) && t.writeMessage(11, n, b.RoomBattleProcessInfo.serializeBinaryToWriter)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getReplyType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setReplyType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getInviteeRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setInviteeRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getCrossType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setCrossType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getGuestInfosList = function () {
            return r.Message.getRepeatedWrapperField(this, l.CrossRoomLinkReplyGuestInfo, 4)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setGuestInfosList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.addGuestInfos = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.CrossRoomLinkReplyGuestInfo, t)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.clearGuestInfosList = function () {
            return this.setGuestInfosList([])
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getInviteeAnchorId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setInviteeAnchorId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getFollowStatus = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setFollowStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getInviteSource = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setInviteSource = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getReplyUserId = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setReplyUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getReplyToast = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setReplyToast = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getReplyOperate = function () {
            return r.Message.getFieldWithDefault(this, 10, 0)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setReplyOperate = function (e) {
            return r.Message.setProto3EnumField(this, 10, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.getProcessInfo = function () {
            return r.Message.getWrapperField(this, b.RoomBattleProcessInfo, 11)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.setProcessInfo = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.clearProcessInfo = function () {
            return this.setProcessInfo(undefined)
        },proto.webcast.im.CrossRoomLinkReplyContent.prototype.hasProcessInfo = function () {
            return null != r.Message.getField(this, 11)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CrossRoomLinkCancelInviteContent.prototype.toObject = function (e) {
            return proto.webcast.im.CrossRoomLinkCancelInviteContent.toObject(e, this)
        }, proto.webcast.im.CrossRoomLinkCancelInviteContent.toObject = function (e, t) {
            var n = {cancellerRoomId: r.Message.getFieldWithDefault(t, 1, "0")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.CrossRoomLinkCancelInviteContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.CrossRoomLinkCancelInviteContent;
            return proto.webcast.im.CrossRoomLinkCancelInviteContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.CrossRoomLinkCancelInviteContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readInt64String();
                    e.setCancellerRoomId(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.CrossRoomLinkCancelInviteContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CrossRoomLinkCancelInviteContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.CrossRoomLinkCancelInviteContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getCancellerRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n)
        },proto.webcast.im.CrossRoomLinkCancelInviteContent.prototype.getCancellerRoomId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.CrossRoomLinkCancelInviteContent.prototype.setCancellerRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.repeatedFields_ = [4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerCrossRoomUpdateContent.toObject(e, this)
        }, proto.webcast.im.LinkerCrossRoomUpdateContent.toObject = function (e, t) {
            var n, o = {
                fromRoomId: r.Message.getFieldWithDefault(t, 1, "0"),
                toRoomId: r.Message.getFieldWithDefault(t, 2, "0"),
                updateInfoMap: (n = t.getUpdateInfoMap()) ? n.toObject(e, undefined) : [],
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                version: r.Message.getFieldWithDefault(t, 5, "0"),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : []
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerCrossRoomUpdateContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerCrossRoomUpdateContent;
            return proto.webcast.im.LinkerCrossRoomUpdateContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readInt64String();
                        e.setFromRoomId(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setToRoomId(n);
                        break;
                    case 3:
                        n = e.getUpdateInfoMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 4:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 5:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    case 6:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerCrossRoomUpdateContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerCrossRoomUpdateContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getFromRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n), n = e.getToRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), (n = e.getUpdateInfoMap(!0)) && n.getLength() > 0 && n.serializeBinary(3, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(4, n, p.ListUser.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(5, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(6, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.getFromRoomId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.setFromRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.getToRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.setToRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.getUpdateInfoMap = function (e) {
            return r.Message.getMapField(this, 3, e, null)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.clearUpdateInfoMap = function () {
            return this.getUpdateInfoMap().clear(), this
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 4)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 6, e, proto.webcast.data.RoomLinkerContent)
        },proto.webcast.im.LinkerCrossRoomUpdateContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.toObject(e, this)
        }, proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.toObject = function (e, t) {
            var n, o = {
                multiPkModeInfo: (n = t.getMultiPkModeInfo()) && c.MultiPKModeInfo.toObject(e, n),
                toast: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerChangeMultiPKTeamInfoContent;
            return proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new c.MultiPKModeInfo;
                        t.readMessage(n, c.MultiPKModeInfo.deserializeBinaryFromReader), e.setMultiPkModeInfo(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setToast(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getMultiPkModeInfo()) && t.writeMessage(1, n, c.MultiPKModeInfo.serializeBinaryToWriter), (n = e.getToast()).length > 0 && t.writeString(2, n)
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.getMultiPkModeInfo = function () {
            return r.Message.getWrapperField(this, c.MultiPKModeInfo, 1)
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.setMultiPkModeInfo = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.clearMultiPkModeInfo = function () {
            return this.setMultiPkModeInfo(undefined)
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.hasMultiPkModeInfo = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerChangeMultiPKTeamInfoContent.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.LinkerResumeAudienceContent.repeatedFields_ = [3],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerResumeAudienceContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerResumeAudienceContent.toObject(e, this)
        }, proto.webcast.im.LinkerResumeAudienceContent.toObject = function (e, t) {
            var n = {
                rtcExtInfo: r.Message.getFieldWithDefault(t, 1, ""),
                liveCoreExtInfo: r.Message.getFieldWithDefault(t, 2, ""),
                linkedUsersList: r.Message.toObjectList(t.getLinkedUsersList(), p.ListUser.toObject, e),
                version: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerResumeAudienceContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerResumeAudienceContent;
            return proto.webcast.im.LinkerResumeAudienceContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerResumeAudienceContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readString();
                        e.setRtcExtInfo(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setLiveCoreExtInfo(n);
                        break;
                    case 3:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addLinkedUsers(n);
                        break;
                    case 4:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerResumeAudienceContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerResumeAudienceContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getRtcExtInfo()).length > 0 && t.writeString(1, n), (n = e.getLiveCoreExtInfo()).length > 0 && t.writeString(2, n), (n = e.getLinkedUsersList()).length > 0 && t.writeRepeatedMessage(3, n, p.ListUser.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(4, n)
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.getRtcExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.setRtcExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.getLiveCoreExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.setLiveCoreExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.getLinkedUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 3)
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.setLinkedUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.addLinkedUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.clearLinkedUsersList = function () {
            return this.setLinkedUsersList([])
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LinkerResumeAudienceContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LinkerBattleConnectContent.repeatedFields_ = [6],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerBattleConnectContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerBattleConnectContent.toObject(e, this)
        }, proto.webcast.im.LinkerBattleConnectContent.toObject = function (e, t) {
            var n, o = {
                liveCoreExtInfo: r.Message.getFieldWithDefault(t, 1, ""),
                rtcExtInfo: r.Message.getFieldWithDefault(t, 2, ""),
                linkerContentMapMap: (n = t.getLinkerContentMapMap()) ? n.toObject(e, proto.webcast.data.RoomLinkerContent.toObject) : [],
                multiChannelInfo: (n = t.getMultiChannelInfo()) && c.MultiChannelInfo.toObject(e, n),
                version: r.Message.getFieldWithDefault(t, 5, "0"),
                anchorUserListList: r.Message.toObjectList(t.getAnchorUserListList(), p.ListUser.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerBattleConnectContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerBattleConnectContent;
            return proto.webcast.im.LinkerBattleConnectContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerBattleConnectContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readString();
                        e.setLiveCoreExtInfo(n);
                        break;
                    case 2:
                        n = t.readString();
                        e.setRtcExtInfo(n);
                        break;
                    case 3:
                        n = e.getLinkerContentMapMap();
                        t.readMessage(n, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.data.RoomLinkerContent.deserializeBinaryFromReader, 0, new proto.webcast.data.RoomLinkerContent)
                        }));
                        break;
                    case 4:
                        n = new c.MultiChannelInfo;
                        t.readMessage(n, c.MultiChannelInfo.deserializeBinaryFromReader), e.setMultiChannelInfo(n);
                        break;
                    case 5:
                        n = t.readUint64String();
                        e.setVersion(n);
                        break;
                    case 6:
                        n = new p.ListUser;
                        t.readMessage(n, p.ListUser.deserializeBinaryFromReader), e.addAnchorUserList(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerBattleConnectContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerBattleConnectContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerBattleConnectContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getLiveCoreExtInfo()).length > 0 && t.writeString(1, n), (n = e.getRtcExtInfo()).length > 0 && t.writeString(2, n), (n = e.getLinkerContentMapMap(!0)) && n.getLength() > 0 && n.serializeBinary(3, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.RoomLinkerContent.serializeBinaryToWriter), null != (n = e.getMultiChannelInfo()) && t.writeMessage(4, n, c.MultiChannelInfo.serializeBinaryToWriter), n = e.getVersion(), 0 !== parseInt(n, 10) && t.writeUint64String(5, n), (n = e.getAnchorUserListList()).length > 0 && t.writeRepeatedMessage(6, n, p.ListUser.serializeBinaryToWriter)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.getLiveCoreExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.LinkerBattleConnectContent.prototype.setLiveCoreExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.getRtcExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.LinkerBattleConnectContent.prototype.setRtcExtInfo = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.getLinkerContentMapMap = function (e) {
            return r.Message.getMapField(this, 3, e, proto.webcast.data.RoomLinkerContent)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.clearLinkerContentMapMap = function () {
            return this.getLinkerContentMapMap().clear(), this
        },proto.webcast.im.LinkerBattleConnectContent.prototype.getMultiChannelInfo = function () {
            return r.Message.getWrapperField(this, c.MultiChannelInfo, 4)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.setMultiChannelInfo = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.clearMultiChannelInfo = function () {
            return this.setMultiChannelInfo(undefined)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.hasMultiChannelInfo = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LinkerBattleConnectContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.getAnchorUserListList = function () {
            return r.Message.getRepeatedWrapperField(this, p.ListUser, 6)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.setAnchorUserListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.addAnchorUserList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.webcast.data.ListUser, t)
        },proto.webcast.im.LinkerBattleConnectContent.prototype.clearAnchorUserListList = function () {
            return this.setAnchorUserListList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerResumeApplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerResumeApplyContent.toObject(e, this)
        }, proto.webcast.im.LinkerResumeApplyContent.toObject = function (e, t) {
            var n, o = {
                param: (n = t.getParam()) && proto.webcast.im.LinkerResumeApplyContent.ApplyParam.toObject(e, n),
                applyUser: r.Message.getFieldWithDefault(t, 2, "0"),
                roomId: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.LinkerResumeApplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerResumeApplyContent;
            return proto.webcast.im.LinkerResumeApplyContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerResumeApplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = new proto.webcast.im.LinkerResumeApplyContent.ApplyParam;
                        t.readMessage(n, proto.webcast.im.LinkerResumeApplyContent.ApplyParam.deserializeBinaryFromReader), e.setParam(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setApplyUser(n);
                        break;
                    case 3:
                        n = t.readInt64String();
                        e.setRoomId(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LinkerResumeApplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerResumeApplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerResumeApplyContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getParam()) && t.writeMessage(1, n, proto.webcast.im.LinkerResumeApplyContent.ApplyParam.serializeBinaryToWriter), n = e.getApplyUser(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), n = e.getRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(3, n)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerResumeApplyContent.ApplyParam.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerResumeApplyContent.ApplyParam.toObject(e, this)
        }, proto.webcast.im.LinkerResumeApplyContent.ApplyParam.toObject = function (e, t) {
            var n = {applyType: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerResumeApplyContent.ApplyParam.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerResumeApplyContent.ApplyParam;
            return proto.webcast.im.LinkerResumeApplyContent.ApplyParam.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerResumeApplyContent.ApplyParam.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readEnum();
                    e.setApplyType(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerResumeApplyContent.ApplyParam.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerResumeApplyContent.ApplyParam.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerResumeApplyContent.ApplyParam.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            0 !== (n = e.getApplyType()) && t.writeEnum(1, n)
        },proto.webcast.im.LinkerResumeApplyContent.ApplyParam.prototype.getApplyType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.LinkerResumeApplyContent.ApplyParam.prototype.setApplyType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.LinkerResumeApplyContent.prototype.getParam = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkerResumeApplyContent.ApplyParam, 1)
        },proto.webcast.im.LinkerResumeApplyContent.prototype.setParam = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LinkerResumeApplyContent.prototype.clearParam = function () {
            return this.setParam(undefined)
        },proto.webcast.im.LinkerResumeApplyContent.prototype.hasParam = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LinkerResumeApplyContent.prototype.getApplyUser = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LinkerResumeApplyContent.prototype.setApplyUser = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LinkerResumeApplyContent.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LinkerResumeApplyContent.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CrossRoomRTCInfoContent.prototype.toObject = function (e) {
            return proto.webcast.im.CrossRoomRTCInfoContent.toObject(e, this)
        }, proto.webcast.im.CrossRoomRTCInfoContent.toObject = function (e, t) {
            var n, r = {multiChannelInfo: (n = t.getMultiChannelInfo()) && c.MultiChannelInfo.toObject(e, n)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.webcast.im.CrossRoomRTCInfoContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.CrossRoomRTCInfoContent;
            return proto.webcast.im.CrossRoomRTCInfoContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.CrossRoomRTCInfoContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = new c.MultiChannelInfo;
                    t.readMessage(n, c.MultiChannelInfo.deserializeBinaryFromReader), e.setMultiChannelInfo(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.CrossRoomRTCInfoContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CrossRoomRTCInfoContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.CrossRoomRTCInfoContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            null != (n = e.getMultiChannelInfo()) && t.writeMessage(1, n, c.MultiChannelInfo.serializeBinaryToWriter)
        },proto.webcast.im.CrossRoomRTCInfoContent.prototype.getMultiChannelInfo = function () {
            return r.Message.getWrapperField(this, c.MultiChannelInfo, 1)
        },proto.webcast.im.CrossRoomRTCInfoContent.prototype.setMultiChannelInfo = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.CrossRoomRTCInfoContent.prototype.clearMultiChannelInfo = function () {
            return this.setMultiChannelInfo(undefined)
        },proto.webcast.im.CrossRoomRTCInfoContent.prototype.hasMultiChannelInfo = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorUpdateLinkmicConfigContent.prototype.toObject = function (e) {
            return proto.webcast.im.AnchorUpdateLinkmicConfigContent.toObject(e, this)
        }, proto.webcast.im.AnchorUpdateLinkmicConfigContent.toObject = function (e, t) {
            var n = {
                forbidInviteByGeneral: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                forbidApplyFromOther: r.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.AnchorUpdateLinkmicConfigContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.AnchorUpdateLinkmicConfigContent;
            return proto.webcast.im.AnchorUpdateLinkmicConfigContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readBool();
                        e.setForbidInviteByGeneral(n);
                        break;
                    case 2:
                        n = t.readBool();
                        e.setForbidApplyFromOther(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnchorUpdateLinkmicConfigContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            (n = e.getForbidInviteByGeneral()) && t.writeBool(1, n), (n = e.getForbidApplyFromOther()) && t.writeBool(2, n)
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.prototype.getForbidInviteByGeneral = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.prototype.setForbidInviteByGeneral = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.prototype.getForbidApplyFromOther = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.webcast.im.AnchorUpdateLinkmicConfigContent.prototype.setForbidApplyFromOther = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorUpdateLayoutContent.prototype.toObject = function (e) {
            return proto.webcast.im.AnchorUpdateLayoutContent.toObject(e, this)
        }, proto.webcast.im.AnchorUpdateLayoutContent.toObject = function (e, t) {
            var n = {
                layoutType: r.Message.getFieldWithDefault(t, 1, 0),
                updateUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                anchorUiLayout: r.Message.getFieldWithDefault(t, 3, 0),
                anchorLayoutRange: r.Message.getFieldWithDefault(t, 4, 0),
                operatorId: r.Message.getFieldWithDefault(t, 5, "0")
            };
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.AnchorUpdateLayoutContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.AnchorUpdateLayoutContent;
            return proto.webcast.im.AnchorUpdateLayoutContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.AnchorUpdateLayoutContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var n = t.readEnum();
                        e.setLayoutType(n);
                        break;
                    case 2:
                        n = t.readInt64String();
                        e.setUpdateUserId(n);
                        break;
                    case 3:
                        n = t.readEnum();
                        e.setAnchorUiLayout(n);
                        break;
                    case 4:
                        n = t.readEnum();
                        e.setAnchorLayoutRange(n);
                        break;
                    case 5:
                        n = t.readInt64String();
                        e.setOperatorId(n);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnchorUpdateLayoutContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.AnchorUpdateLayoutContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            0 !== (n = e.getLayoutType()) && t.writeEnum(1, n), n = e.getUpdateUserId(), 0 !== parseInt(n, 10) && t.writeInt64String(2, n), 0 !== (n = e.getAnchorUiLayout()) && t.writeEnum(3, n), 0 !== (n = e.getAnchorLayoutRange()) && t.writeEnum(4, n), n = e.getOperatorId(), 0 !== parseInt(n, 10) && t.writeInt64String(5, n)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.getLayoutType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.setLayoutType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.getUpdateUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.setUpdateUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.getAnchorUiLayout = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.setAnchorUiLayout = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.getAnchorLayoutRange = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.setAnchorLayoutRange = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.getOperatorId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.AnchorUpdateLayoutContent.prototype.setOperatorId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkerApplyRankChangeContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkerApplyRankChangeContent.toObject(e, this)
        }, proto.webcast.im.LinkerApplyRankChangeContent.toObject = function (e, t) {
            var n = {roomId: r.Message.getFieldWithDefault(t, 1, "0")};
            return e && (n.$jspbMessageInstance = t), n
        }),proto.webcast.im.LinkerApplyRankChangeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), n = new proto.webcast.im.LinkerApplyRankChangeContent;
            return proto.webcast.im.LinkerApplyRankChangeContent.deserializeBinaryFromReader(n, t)
        },proto.webcast.im.LinkerApplyRankChangeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var n = t.readInt64String();
                    e.setRoomId(n)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.LinkerApplyRankChangeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkerApplyRankChangeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LinkerApplyRankChangeContent.serializeBinaryToWriter = function (e, t) {
            var n = undefined;
            n = e.getRoomId(), 0 !== parseInt(n, 10) && t.writeInt64String(1, n)
        },proto.webcast.im.LinkerApplyRankChangeContent.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.LinkerApplyRankChangeContent.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.LinkerSceneType = {
            SCENE_UNKNOWN: 0,
            SCENE_PK: 1,
            SCENE_ANCHORLINKMIC: 2,
            SCENE_VIRUTALPK: 3,
            SCENE_AUDIENCELINKMIC: 4,
            SCENE_AUDIOCHATROOM: 5,
            SCENE_CLOUDGAME: 6,
            SCENE_ANCHORMULTILINKMIC: 7,
            SCENE_VIDEOCHATROOM: 8
        },proto.webcast.im.ChannelActionType = {
            CHANNELACTION_UNKNOWN: 0,
            CHANNELACTION_JOIN: 1,
            CHANNELACTION_LEAVE: 2,
            CHANNELACTION_SILENCE: 3,
            CHANNELACTION_UNSILENCE: 4
        },proto.webcast.im.LinkMessageType = {
            TPYE_LINKER_UNKNOWN: 0,
            TYPE_LINKER_CREATE: 1,
            TYPE_LINKER_CLOSE: 2,
            TYPE_LINKER_INVITE: 3,
            TYPE_LINKER_APPLY: 4,
            TYPE_LINKER_REPLY: 5,
            TPYE_LINKER_ENTER: 6,
            TPYE_LINKER_LEAVE: 7,
            TYPE_LINKER_PERMIT: 8,
            TPYE_LINKER_CANCEL_INVITE: 9,
            TYPE_LINKER_WAITING_LIST_CHANGE: 10,
            TYPE_LINKER_LINKED_LIST_CHANGE: 11,
            TYPE_LINKER_UPDATE_USER: 12,
            TPYE_LINKER_KICK_OUT: 13,
            TPYE_LINKER_CANCEL_APPLY: 14,
            TYPE_LINKER_BAN: 15,
            TYPE_LINKER_DISPATCH_ITEM: 16,
            TYPE_LINKER_VIOLATION_REMINDER: 17,
            TYPE_LINKER_UPDATE_LINK_TYPE_APPLY: 18,
            TYPE_LINKER_UPDATE_LINK_TYPE_REPLY: 19,
            TYPE_LINKER_AVATAR_AUDIT: 20,
            TYPE_APPLY_EXPIRED: 22,
            TYPE_APPLY_STRONG_REMINDER: 23,
            TYPE_ANCHOR_STREAM_SWITCH: 24,
            TYPE_LINKER_CLICK_SCREEN: 25,
            TYPE_LINKER_LOCK_POSITION: 26,
            TYPE_LINKER_FOLLOW_STRONG_GUIDE: 27,
            TYPE_LINKER_SHARE_VIDEO_IM: 28,
            TYPE_GUEST_INVITE: 29,
            TYPE_GUEST_EXIT_CAST_SCREEN: 30,
            TYPE_LINKER_SWITCH_SCENE: 31,
            TYPE_LINK_PHASEINFO: 32,
            TYPE_LINKER_CHANGE_PLAY_MODE: 33,
            TYPE_LOW_BALANCE_FOR_PAID_LINKMIC: 34,
            TYPE_DEGRADE_ALERT: 35,
            TYPE_ENLARGE_GUEST_INVITE: 36,
            TYPE_ENLARGE_GUEST_REPLY: 37,
            TYPE_ENLARGE_GUEST_APPLY: 38,
            TYPE_LINK_PREPARE_APPLY: 39,
            TYPE_LINK_CANCEL_PREPARE_APPLY: 40,
            TYPE_LINKER_CROSS_ROOM_UPDATE: 41,
            TYPE_LINKER_CHANGE_MULTI_PK_TEAM_INFO: 42,
            TYPE_CROSS_ROOM_LINK_INVITE: 43,
            TYPE_CROSS_ROOM_LINK_REPLY: 44,
            TYPE_CROSS_ROOM_LINK_CANCEL_INVITE: 45,
            TYPE_LINK_RESUME_AUDIENCE: 46,
            TYPE_LINK_BATTLE_CONNECT: 47,
            TYPE_RESUME_APPLY: 48,
            TYPE_CROSS_ROOM_RTC_INFO: 49,
            TYPE_ANCHOR_UPDATE_LINKMIC_CONFIG: 50,
            TYPE_ANCHOR_UPDATE_LAYOUT: 51,
            TYPE_APPLY_RANK_CHANGE: 52,
            TPYE_LINKER_SYS_KICK_OUT: 101
        },proto.webcast.im.FollowUserType = {
            UNKNOWNUSERTYPE: 0,
            ANCHOR: 1,
            GUEST: 2,
            AUDIENCE: 3
        },proto.webcast.im.MessagePushType = {PUSHTYPE_NORMAL: 0, PUSHTYPE_TIME: 1},o.object.extend(t, proto.webcast.im)
    }
}]);