(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9444], {
    45426: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(99222);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.PlatformAdviseMessage", null, i),
        proto.webcast.im.PlatformAdviseMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.PlatformAdviseMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.PlatformAdviseMessage.displayName = "proto.webcast.im.PlatformAdviseMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PlatformAdviseMessage.prototype.toObject = function(e) {
            return proto.webcast.im.PlatformAdviseMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                adviseText: (o = t.getAdviseText()) && a.Text.toObject(e, o),
                duration: r.Message.getFieldWithDefault(t, 3, "0"),
                priority: r.Message.getFieldWithDefault(t, 4, "0"),
                eventTrackingMap: (o = t.getEventTrackingMap()) ? o.toObject(e, undefined) : []
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.PlatformAdviseMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.PlatformAdviseMessage;
            return proto.webcast.im.PlatformAdviseMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new a.Text;
                    t.readMessage(o, a.Text.deserializeBinaryFromReader),
                    e.setAdviseText(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setDuration(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setPriority(o);
                    break;
                case 20:
                    o = e.getEventTrackingMap();
                    t.readMessage(o, (function(e, t) {
                        r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                    }
                    ));
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PlatformAdviseMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            null != (o = e.getAdviseText()) && t.writeMessage(2, o, a.Text.serializeBinaryToWriter),
            o = e.getDuration(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            o = e.getPriority(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o),
            (o = e.getEventTrackingMap(!0)) && o.getLength() > 0 && o.serializeBinary(20, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.getAdviseText = function() {
            return r.Message.getWrapperField(this, a.Text, 2)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.setAdviseText = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.clearAdviseText = function() {
            return this.setAdviseText(undefined)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.hasAdviseText = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.getDuration = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.setDuration = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.getPriority = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.setPriority = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.getEventTrackingMap = function(e) {
            return r.Message.getMapField(this, 20, e, null)
        }
        ,
        proto.webcast.im.PlatformAdviseMessage.prototype.clearEventTrackingMap = function() {
            return this.getEventTrackingMap().clear(),
            this
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    50466: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.ProfitGameMessage", null, i),
        proto.webcast.im.ProfitGameMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.ProfitGameMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.ProfitGameMessage.displayName = "proto.webcast.im.ProfitGameMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProfitGameMessage.prototype.toObject = function(e) {
            return proto.webcast.im.ProfitGameMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.ProfitGameMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                frames: t.getFrames_asB64()
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.ProfitGameMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.ProfitGameMessage;
            return proto.webcast.im.ProfitGameMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.ProfitGameMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setGameId(o);
                    break;
                case 3:
                    o = t.readBytes();
                    e.setFrames(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ProfitGameMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ProfitGameMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            o = e.getGameId(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o),
            (o = e.getFrames_asU8()).length > 0 && t.writeBytes(3, o)
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.getGameId = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.setGameId = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.getFrames = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.getFrames_asB64 = function() {
            return r.Message.bytesAsB64(this.getFrames())
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.getFrames_asU8 = function() {
            return r.Message.bytesAsU8(this.getFrames())
        }
        ,
        proto.webcast.im.ProfitGameMessage.prototype.setFrames = function(e) {
            return r.Message.setProto3BytesField(this, 3, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    2531: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a);
        var n = o(64925);
        s.object.extend(proto, n);
        var p = o(8411);
        s.object.extend(proto, p);
        var c = o(69786);
        s.object.extend(proto, c),
        s.exportSymbol("proto.webcast.im.ProfitInteractionScoreAction", null, i),
        s.exportSymbol("proto.webcast.im.ProfitInteractionScoreAnchorInfo", null, i),
        s.exportSymbol("proto.webcast.im.ProfitInteractionScoreMessage", null, i),
        s.exportSymbol("proto.webcast.im.ProfitInteractionScoreStatus", null, i),
        proto.webcast.im.ProfitInteractionScoreAnchorInfo = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.ProfitInteractionScoreAnchorInfo, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.ProfitInteractionScoreAnchorInfo.displayName = "proto.webcast.im.ProfitInteractionScoreAnchorInfo"),
        proto.webcast.im.ProfitInteractionScoreMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.ProfitInteractionScoreMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.ProfitInteractionScoreMessage.displayName = "proto.webcast.im.ProfitInteractionScoreMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.toObject = function(e) {
            return proto.webcast.im.ProfitInteractionScoreAnchorInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.toObject = function(e, t) {
            var o, s = {
                score: r.Message.getFieldWithDefault(t, 1, ""),
                interactionSetting: (o = t.getInteractionSetting()) && c.ProfitInteractionSetting.toObject(e, o),
                reachScoreDisplayThreshold: r.Message.getBooleanFieldWithDefault(t, 3, !1)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.ProfitInteractionScoreAnchorInfo;
            return proto.webcast.im.ProfitInteractionScoreAnchorInfo.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readString();
                    e.setScore(o);
                    break;
                case 2:
                    o = new c.ProfitInteractionSetting;
                    t.readMessage(o, c.ProfitInteractionSetting.deserializeBinaryFromReader),
                    e.setInteractionSetting(o);
                    break;
                case 3:
                    o = t.readBool();
                    e.setReachScoreDisplayThreshold(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ProfitInteractionScoreAnchorInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            (o = e.getScore()).length > 0 && t.writeString(1, o),
            null != (o = e.getInteractionSetting()) && t.writeMessage(2, o, c.ProfitInteractionSetting.serializeBinaryToWriter),
            (o = e.getReachScoreDisplayThreshold()) && t.writeBool(3, o)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.getScore = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.setScore = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.getInteractionSetting = function() {
            return r.Message.getWrapperField(this, c.ProfitInteractionSetting, 2)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.setInteractionSetting = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.clearInteractionSetting = function() {
            return this.setInteractionSetting(undefined)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.hasInteractionSetting = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.getReachScoreDisplayThreshold = function() {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreAnchorInfo.prototype.setReachScoreDisplayThreshold = function(e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProfitInteractionScoreMessage.prototype.toObject = function(e) {
            return proto.webcast.im.ProfitInteractionScoreMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                anchorInfosMap: (o = t.getAnchorInfosMap()) ? o.toObject(e, proto.webcast.im.ProfitInteractionScoreAnchorInfo.toObject) : [],
                interactionScoreStatus: r.Message.getFieldWithDefault(t, 3, 0),
                channelId: r.Message.getFieldWithDefault(t, 4, "0"),
                startTime: r.Message.getFieldWithDefault(t, 5, "0"),
                interactionScoreAction: r.Message.getFieldWithDefault(t, 6, 0),
                extra: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.ProfitInteractionScoreMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.ProfitInteractionScoreMessage;
            return proto.webcast.im.ProfitInteractionScoreMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = e.getAnchorInfosMap();
                    t.readMessage(o, (function(e, t) {
                        r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readMessage, proto.webcast.im.ProfitInteractionScoreAnchorInfo.deserializeBinaryFromReader, 0, new proto.webcast.im.ProfitInteractionScoreAnchorInfo)
                    }
                    ));
                    break;
                case 3:
                    o = t.readEnum();
                    e.setInteractionScoreStatus(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setChannelId(o);
                    break;
                case 5:
                    o = t.readInt64String();
                    e.setStartTime(o);
                    break;
                case 6:
                    o = t.readEnum();
                    e.setInteractionScoreAction(o);
                    break;
                case 7:
                    o = t.readString();
                    e.setExtra(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ProfitInteractionScoreMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getAnchorInfosMap(!0)) && o.getLength() > 0 && o.serializeBinary(2, t, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeMessage, proto.webcast.im.ProfitInteractionScoreAnchorInfo.serializeBinaryToWriter),
            0 !== (o = e.getInteractionScoreStatus()) && t.writeEnum(3, o),
            o = e.getChannelId(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o),
            o = e.getStartTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(5, o),
            0 !== (o = e.getInteractionScoreAction()) && t.writeEnum(6, o),
            (o = e.getExtra()).length > 0 && t.writeString(7, o)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getAnchorInfosMap = function(e) {
            return r.Message.getMapField(this, 2, e, proto.webcast.im.ProfitInteractionScoreAnchorInfo)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.clearAnchorInfosMap = function() {
            return this.getAnchorInfosMap().clear(),
            this
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getInteractionScoreStatus = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.setInteractionScoreStatus = function(e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getChannelId = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.setChannelId = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getStartTime = function() {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.setStartTime = function(e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getInteractionScoreAction = function() {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.setInteractionScoreAction = function(e) {
            return r.Message.setProto3EnumField(this, 6, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.getExtra = function() {
            return r.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.ProfitInteractionScoreMessage.prototype.setExtra = function(e) {
            return r.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.webcast.im.ProfitInteractionScoreStatus = {
            PROFITINTERACTIONSCORESTATUS_PENALTYEND: 0,
            PROFITINTERACTIONSCORESTATUS_UPDATE: 1,
            PROFITINTERACTIONSCORESTATUS_CLOSE: 2
        },
        proto.webcast.im.ProfitInteractionScoreAction = {
            PROFITINTERACTIONSCOREACTION_NULL: 0,
            PROFITINTERACTIONSCOREACTION_ACTIVE: 1,
            PROFITINTERACTIONSCOREACTION_PASSIVE: 2
        },
        s.object.extend(t, proto.webcast.im)
    },
    46212: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a);
        var n = o(62740);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.VsProgrammeStateControlMessage", null, i),
        proto.webcast.im.VsProgrammeStateControlMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.VsProgrammeStateControlMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.VsProgrammeStateControlMessage.displayName = "proto.webcast.im.VsProgrammeStateControlMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VsProgrammeStateControlMessage.prototype.toObject = function(e) {
            return proto.webcast.im.VsProgrammeStateControlMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                pid: r.Message.getFieldWithDefault(t, 2, ""),
                state: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.VsProgrammeStateControlMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.VsProgrammeStateControlMessage;
            return proto.webcast.im.VsProgrammeStateControlMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setPid(o);
                    break;
                case 3:
                    o = t.readEnum();
                    e.setState(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VsProgrammeStateControlMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getPid()).length > 0 && t.writeString(2, o),
            0 !== (o = e.getState()) && t.writeEnum(3, o)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.getPid = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.setPid = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.getState = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.VsProgrammeStateControlMessage.prototype.setState = function(e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    28251: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a);
        var n = o(9627);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.RanklistHourEntranceMessage", null, i),
        proto.webcast.im.RanklistHourEntranceMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RanklistHourEntranceMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RanklistHourEntranceMessage.displayName = "proto.webcast.im.RanklistHourEntranceMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RanklistHourEntranceMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RanklistHourEntranceMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.toObject = function(e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                info: (o = t.getInfo()) && n.RanklistHourEntrance.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.RanklistHourEntranceMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RanklistHourEntranceMessage;
            return proto.webcast.im.RanklistHourEntranceMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new n.RanklistHourEntrance;
                    t.readMessage(o, n.RanklistHourEntrance.deserializeBinaryFromReader),
                    e.setInfo(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RanklistHourEntranceMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            null != (o = e.getInfo()) && t.writeMessage(2, o, n.RanklistHourEntrance.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.getInfo = function() {
            return r.Message.getWrapperField(this, n.RanklistHourEntrance, 2)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.setInfo = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.clearInfo = function() {
            return this.setInfo(undefined)
        }
        ,
        proto.webcast.im.RanklistHourEntranceMessage.prototype.hasInfo = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    25400: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.RoomChannelAccessMessage", null, i),
        proto.webcast.im.RoomChannelAccessMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelAccessMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelAccessMessage.displayName = "proto.webcast.im.RoomChannelAccessMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelAccessMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelAccessMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.toObject = function(e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                inviter: (o = t.getInviter()) && a.User.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.RoomChannelAccessMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelAccessMessage;
            return proto.webcast.im.RoomChannelAccessMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setUser(o);
                    break;
                case 3:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setInviter(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelAccessMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter),
            null != (o = e.getInviter()) && t.writeMessage(3, o, a.User.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.getUser = function() {
            return r.Message.getWrapperField(this, a.User, 2)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.setUser = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.clearUser = function() {
            return this.setUser(undefined)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.hasUser = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.getInviter = function() {
            return r.Message.getWrapperField(this, a.User, 3)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.setInviter = function(e) {
            return r.Message.setWrapperField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.clearInviter = function() {
            return this.setInviter(undefined)
        }
        ,
        proto.webcast.im.RoomChannelAccessMessage.prototype.hasInviter = function() {
            return null != r.Message.getField(this, 3)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    66028: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.RoomChannelAssetMessage", null, i),
        proto.webcast.im.RoomChannelAssetMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelAssetMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelAssetMessage.displayName = "proto.webcast.im.RoomChannelAssetMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelAssetMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelAssetMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                assetId: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelAssetMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelAssetMessage;
            return proto.webcast.im.RoomChannelAssetMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setAssetId(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelAssetMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            o = e.getAssetId(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.getAssetId = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.RoomChannelAssetMessage.prototype.setAssetId = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    17914: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(64925);
        s.object.extend(proto, a);
        var n = o(99222);
        s.object.extend(proto, n);
        var p = o(50684);
        s.object.extend(proto, p),
        s.exportSymbol("proto.webcast.im.RoomChannelChatMessage", null, i),
        s.exportSymbol("proto.webcast.im.RoomChannelEmojiChatMessage", null, i),
        proto.webcast.im.RoomChannelChatMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelChatMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelChatMessage.displayName = "proto.webcast.im.RoomChannelChatMessage"),
        proto.webcast.im.RoomChannelEmojiChatMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelEmojiChatMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelEmojiChatMessage.displayName = "proto.webcast.im.RoomChannelEmojiChatMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelChatMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelChatMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && p.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                rtfContent: (o = t.getRtfContent()) && n.Text.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelChatMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelChatMessage;
            return proto.webcast.im.RoomChannelChatMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new p.Common;
                    t.readMessage(o, p.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setUser(o);
                    break;
                case 3:
                    o = t.readString();
                    e.setContent(o);
                    break;
                case 4:
                    o = new n.Text;
                    t.readMessage(o, n.Text.deserializeBinaryFromReader),
                    e.setRtfContent(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelChatMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, p.Common.serializeBinaryToWriter),
            null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter),
            (o = e.getContent()).length > 0 && t.writeString(3, o),
            null != (o = e.getRtfContent()) && t.writeMessage(4, o, n.Text.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, p.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.getUser = function() {
            return r.Message.getWrapperField(this, a.User, 2)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.setUser = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.clearUser = function() {
            return this.setUser(undefined)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.hasUser = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.getContent = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.setContent = function(e) {
            return r.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.getRtfContent = function() {
            return r.Message.getWrapperField(this, n.Text, 4)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.setRtfContent = function(e) {
            return r.Message.setWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.clearRtfContent = function() {
            return this.setRtfContent(undefined)
        }
        ,
        proto.webcast.im.RoomChannelChatMessage.prototype.hasRtfContent = function() {
            return null != r.Message.getField(this, 4)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelEmojiChatMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelEmojiChatMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && p.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                emojiId: r.Message.getFieldWithDefault(t, 3, "0"),
                emojiContent: (o = t.getEmojiContent()) && n.Text.toObject(e, o),
                defaultContent: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelEmojiChatMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelEmojiChatMessage;
            return proto.webcast.im.RoomChannelEmojiChatMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new p.Common;
                    t.readMessage(o, p.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setUser(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setEmojiId(o);
                    break;
                case 4:
                    o = new n.Text;
                    t.readMessage(o, n.Text.deserializeBinaryFromReader),
                    e.setEmojiContent(o);
                    break;
                case 5:
                    o = t.readString();
                    e.setDefaultContent(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelEmojiChatMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, p.Common.serializeBinaryToWriter),
            null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter),
            o = e.getEmojiId(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            null != (o = e.getEmojiContent()) && t.writeMessage(4, o, n.Text.serializeBinaryToWriter),
            (o = e.getDefaultContent()).length > 0 && t.writeString(5, o)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, p.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.getUser = function() {
            return r.Message.getWrapperField(this, a.User, 2)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.setUser = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.clearUser = function() {
            return this.setUser(undefined)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.hasUser = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.getEmojiId = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.setEmojiId = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.getEmojiContent = function() {
            return r.Message.getWrapperField(this, n.Text, 4)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.setEmojiContent = function(e) {
            return r.Message.setWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.clearEmojiContent = function() {
            return this.setEmojiContent(undefined)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.hasEmojiContent = function() {
            return null != r.Message.getField(this, 4)
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.getDefaultContent = function() {
            return r.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.RoomChannelEmojiChatMessage.prototype.setDefaultContent = function(e) {
            return r.Message.setProto3StringField(this, 5, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    47197: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.RoomChannelDisbandMessage", null, i),
        proto.webcast.im.RoomChannelDisbandMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelDisbandMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelDisbandMessage.displayName = "proto.webcast.im.RoomChannelDisbandMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelDisbandMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelDisbandMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                toast: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelDisbandMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelDisbandMessage;
            return proto.webcast.im.RoomChannelDisbandMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setToast(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelDisbandMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getToast()).length > 0 && t.writeString(2, o)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.getToast = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.RoomChannelDisbandMessage.prototype.setToast = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    38678: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(24136);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.RoomChannelKickOutMessage", null, i),
        proto.webcast.im.RoomChannelKickOutMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.RoomChannelKickOutMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelKickOutMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelKickOutMessage.displayName = "proto.webcast.im.RoomChannelKickOutMessage"),
        proto.webcast.im.RoomChannelKickOutMessage.repeatedFields_ = [3],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelKickOutMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelKickOutMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                toast: r.Message.getFieldWithDefault(t, 2, ""),
                onlineChannelListList: r.Message.toObjectList(t.getOnlineChannelListList(), a.RoomChannelInfo.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelKickOutMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelKickOutMessage;
            return proto.webcast.im.RoomChannelKickOutMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setToast(o);
                    break;
                case 3:
                    o = new a.RoomChannelInfo;
                    t.readMessage(o, a.RoomChannelInfo.deserializeBinaryFromReader),
                    e.addOnlineChannelList(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelKickOutMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            (o = e.getToast()).length > 0 && t.writeString(2, o),
            (o = e.getOnlineChannelListList()).length > 0 && t.writeRepeatedMessage(3, o, a.RoomChannelInfo.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.getToast = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.setToast = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.getOnlineChannelListList = function() {
            return r.Message.getRepeatedWrapperField(this, a.RoomChannelInfo, 3)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.setOnlineChannelListList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.addOnlineChannelList = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.data.RoomChannelInfo, t)
        }
        ,
        proto.webcast.im.RoomChannelKickOutMessage.prototype.clearOnlineChannelListList = function() {
            return this.setOnlineChannelListList([])
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    29625: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a);
        var n = o(24136);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.ReplyRoomChannelMessage", null, i),
        proto.webcast.im.ReplyRoomChannelMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.ReplyRoomChannelMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.ReplyRoomChannelMessage.displayName = "proto.webcast.im.ReplyRoomChannelMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ReplyRoomChannelMessage.prototype.toObject = function(e) {
            return proto.webcast.im.ReplyRoomChannelMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                permit: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                channelInfo: (o = t.getChannelInfo()) && n.RoomChannelInfo.toObject(e, o),
                toast: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.ReplyRoomChannelMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.ReplyRoomChannelMessage;
            return proto.webcast.im.ReplyRoomChannelMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readBool();
                    e.setPermit(o);
                    break;
                case 3:
                    o = new n.RoomChannelInfo;
                    t.readMessage(o, n.RoomChannelInfo.deserializeBinaryFromReader),
                    e.setChannelInfo(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setToast(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ReplyRoomChannelMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getPermit()) && t.writeBool(2, o),
            null != (o = e.getChannelInfo()) && t.writeMessage(3, o, n.RoomChannelInfo.serializeBinaryToWriter),
            (o = e.getToast()).length > 0 && t.writeString(4, o)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.getPermit = function() {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.setPermit = function(e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.getChannelInfo = function() {
            return r.Message.getWrapperField(this, n.RoomChannelInfo, 3)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.setChannelInfo = function(e) {
            return r.Message.setWrapperField(this, 3, e)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.clearChannelInfo = function() {
            return this.setChannelInfo(undefined)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.hasChannelInfo = function() {
            return null != r.Message.getField(this, 3)
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.getToast = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.ReplyRoomChannelMessage.prototype.setToast = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    54672: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.RoomChannelSaveGroupMessage", null, i),
        proto.webcast.im.RoomChannelSaveGroupMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelSaveGroupMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelSaveGroupMessage.displayName = "proto.webcast.im.RoomChannelSaveGroupMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelSaveGroupMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelSaveGroupMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                conId: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelSaveGroupMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelSaveGroupMessage;
            return proto.webcast.im.RoomChannelSaveGroupMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setConId(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelSaveGroupMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getConId()).length > 0 && t.writeString(2, o)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.getConId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.RoomChannelSaveGroupMessage.prototype.setConId = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    10287: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.RoomChannelStateMessage", null, i),
        proto.webcast.im.RoomChannelStateMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.RoomChannelStateMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelStateMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelStateMessage.displayName = "proto.webcast.im.RoomChannelStateMessage"),
        proto.webcast.im.RoomChannelStateMessage.repeatedFields_ = [3],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelStateMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelStateMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                memberCount: r.Message.getFieldWithDefault(t, 2, "0"),
                topUserListList: r.Message.toObjectList(t.getTopUserListList(), a.User.toObject, e),
                channelName: r.Message.getFieldWithDefault(t, 4, ""),
                needApprovalUser: (o = t.getNeedApprovalUser()) && a.User.toObject(e, o),
                owner: (o = t.getOwner()) && a.User.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelStateMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelStateMessage;
            return proto.webcast.im.RoomChannelStateMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setMemberCount(o);
                    break;
                case 3:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.addTopUserList(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setChannelName(o);
                    break;
                case 5:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setNeedApprovalUser(o);
                    break;
                case 6:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setOwner(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelStateMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            o = e.getMemberCount(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o),
            (o = e.getTopUserListList()).length > 0 && t.writeRepeatedMessage(3, o, a.User.serializeBinaryToWriter),
            (o = e.getChannelName()).length > 0 && t.writeString(4, o),
            null != (o = e.getNeedApprovalUser()) && t.writeMessage(5, o, a.User.serializeBinaryToWriter),
            null != (o = e.getOwner()) && t.writeMessage(6, o, a.User.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.getMemberCount = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.setMemberCount = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.getTopUserListList = function() {
            return r.Message.getRepeatedWrapperField(this, a.User, 3)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.setTopUserListList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.addTopUserList = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.data.User, t)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.clearTopUserListList = function() {
            return this.setTopUserListList([])
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.getChannelName = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.setChannelName = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.getNeedApprovalUser = function() {
            return r.Message.getWrapperField(this, a.User, 5)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.setNeedApprovalUser = function(e) {
            return r.Message.setWrapperField(this, 5, e)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.clearNeedApprovalUser = function() {
            return this.setNeedApprovalUser(undefined)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.hasNeedApprovalUser = function() {
            return null != r.Message.getField(this, 5)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.getOwner = function() {
            return r.Message.getWrapperField(this, a.User, 6)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.setOwner = function(e) {
            return r.Message.setWrapperField(this, 6, e)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.clearOwner = function() {
            return this.setOwner(undefined)
        }
        ,
        proto.webcast.im.RoomChannelStateMessage.prototype.hasOwner = function() {
            return null != r.Message.getField(this, 6)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    14799: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.RoomChannelSystemMessage", null, i),
        proto.webcast.im.RoomChannelSystemMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelSystemMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelSystemMessage.displayName = "proto.webcast.im.RoomChannelSystemMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelSystemMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelSystemMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.toObject = function(e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.RoomChannelSystemMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelSystemMessage;
            return proto.webcast.im.RoomChannelSystemMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                if (1 === t.getFieldNumber()) {
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o)
                } else
                    t.skipField()
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelSystemMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelSystemMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    77182: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.RoomChannelRoleMessage", null, i),
        proto.webcast.im.RoomChannelRoleMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomChannelRoleMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelRoleMessage.displayName = "proto.webcast.im.RoomChannelRoleMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelRoleMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomChannelRoleMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                newRole: r.Message.getFieldWithDefault(t, 2, 0)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomChannelRoleMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomChannelRoleMessage;
            return proto.webcast.im.RoomChannelRoleMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt32();
                    e.setNewRole(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelRoleMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            0 !== (o = e.getNewRole()) && t.writeInt32(2, o)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.getNewRole = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.RoomChannelRoleMessage.prototype.setNewRole = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    40873: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.RoomRankMessage", null, i),
        s.exportSymbol("proto.webcast.im.RoomRankMessage.RoomRank", null, i),
        proto.webcast.im.RoomRankMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.RoomRankMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomRankMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomRankMessage.displayName = "proto.webcast.im.RoomRankMessage"),
        proto.webcast.im.RoomRankMessage.RoomRank = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomRankMessage.RoomRank, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomRankMessage.RoomRank.displayName = "proto.webcast.im.RoomRankMessage.RoomRank"),
        proto.webcast.im.RoomRankMessage.repeatedFields_ = [2],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomRankMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomRankMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomRankMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                ranksList: r.Message.toObjectList(t.getRanksList(), proto.webcast.im.RoomRankMessage.RoomRank.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomRankMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomRankMessage;
            return proto.webcast.im.RoomRankMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomRankMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new proto.webcast.im.RoomRankMessage.RoomRank;
                    t.readMessage(o, proto.webcast.im.RoomRankMessage.RoomRank.deserializeBinaryFromReader),
                    e.addRanks(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomRankMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomRankMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            (o = e.getRanksList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.RoomRankMessage.RoomRank.serializeBinaryToWriter)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomRankMessage.RoomRank.prototype.toObject = function(e) {
            return proto.webcast.im.RoomRankMessage.RoomRank.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.toObject = function(e, t) {
            var o, s = {
                user: (o = t.getUser()) && a.User.toObject(e, o),
                scoreStr: r.Message.getFieldWithDefault(t, 2, ""),
                profileHidden: r.Message.getBooleanFieldWithDefault(t, 3, !1)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomRankMessage.RoomRank.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomRankMessage.RoomRank;
            return proto.webcast.im.RoomRankMessage.RoomRank.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setUser(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setScoreStr(o);
                    break;
                case 3:
                    o = t.readBool();
                    e.setProfileHidden(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomRankMessage.RoomRank.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getUser()) && t.writeMessage(1, o, a.User.serializeBinaryToWriter),
            (o = e.getScoreStr()).length > 0 && t.writeString(2, o),
            (o = e.getProfileHidden()) && t.writeBool(3, o)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.getUser = function() {
            return r.Message.getWrapperField(this, a.User, 1)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.setUser = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.clearUser = function() {
            return this.setUser(undefined)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.hasUser = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.getScoreStr = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.setScoreStr = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.getProfileHidden = function() {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }
        ,
        proto.webcast.im.RoomRankMessage.RoomRank.prototype.setProfileHidden = function(e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.getRanksList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.RoomRankMessage.RoomRank, 2)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.setRanksList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.addRanks = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.RoomRankMessage.RoomRank, t)
        }
        ,
        proto.webcast.im.RoomRankMessage.prototype.clearRanksList = function() {
            return this.setRanksList([])
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    18186: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.RoomUserSeqMessage", null, i),
        s.exportSymbol("proto.webcast.im.RoomUserSeqMessage.Contributor", null, i),
        proto.webcast.im.RoomUserSeqMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.RoomUserSeqMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomUserSeqMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomUserSeqMessage.displayName = "proto.webcast.im.RoomUserSeqMessage"),
        proto.webcast.im.RoomUserSeqMessage.Contributor = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.RoomUserSeqMessage.Contributor, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.RoomUserSeqMessage.Contributor.displayName = "proto.webcast.im.RoomUserSeqMessage.Contributor"),
        proto.webcast.im.RoomUserSeqMessage.repeatedFields_ = [2, 5],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomUserSeqMessage.prototype.toObject = function(e) {
            return proto.webcast.im.RoomUserSeqMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                ranksList: r.Message.toObjectList(t.getRanksList(), proto.webcast.im.RoomUserSeqMessage.Contributor.toObject, e),
                total: r.Message.getFieldWithDefault(t, 3, 0),
                popStr: r.Message.getFieldWithDefault(t, 4, ""),
                seatsList: r.Message.toObjectList(t.getSeatsList(), proto.webcast.im.RoomUserSeqMessage.Contributor.toObject, e),
                popularity: r.Message.getFieldWithDefault(t, 6, 0),
                totalUser: r.Message.getFieldWithDefault(t, 7, 0),
                totalUserStr: r.Message.getFieldWithDefault(t, 8, ""),
                totalStr: r.Message.getFieldWithDefault(t, 9, ""),
                onlineUserForAnchor: r.Message.getFieldWithDefault(t, 10, ""),
                totalPvForAnchor: r.Message.getFieldWithDefault(t, 11, ""),
                upRightStatsStr: r.Message.getFieldWithDefault(t, 12, ""),
                upRightStatsStrComplete: r.Message.getFieldWithDefault(t, 13, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomUserSeqMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomUserSeqMessage;
            return proto.webcast.im.RoomUserSeqMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new proto.webcast.im.RoomUserSeqMessage.Contributor;
                    t.readMessage(o, proto.webcast.im.RoomUserSeqMessage.Contributor.deserializeBinaryFromReader),
                    e.addRanks(o);
                    break;
                case 3:
                    o = t.readInt64();
                    e.setTotal(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setPopStr(o);
                    break;
                case 5:
                    o = new proto.webcast.im.RoomUserSeqMessage.Contributor;
                    t.readMessage(o, proto.webcast.im.RoomUserSeqMessage.Contributor.deserializeBinaryFromReader),
                    e.addSeats(o);
                    break;
                case 6:
                    o = t.readInt64();
                    e.setPopularity(o);
                    break;
                case 7:
                    o = t.readInt64();
                    e.setTotalUser(o);
                    break;
                case 8:
                    o = t.readString();
                    e.setTotalUserStr(o);
                    break;
                case 9:
                    o = t.readString();
                    e.setTotalStr(o);
                    break;
                case 10:
                    o = t.readString();
                    e.setOnlineUserForAnchor(o);
                    break;
                case 11:
                    o = t.readString();
                    e.setTotalPvForAnchor(o);
                    break;
                case 12:
                    o = t.readString();
                    e.setUpRightStatsStr(o);
                    break;
                case 13:
                    o = t.readString();
                    e.setUpRightStatsStrComplete(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomUserSeqMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            (o = e.getRanksList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.RoomUserSeqMessage.Contributor.serializeBinaryToWriter),
            0 !== (o = e.getTotal()) && t.writeInt64(3, o),
            (o = e.getPopStr()).length > 0 && t.writeString(4, o),
            (o = e.getSeatsList()).length > 0 && t.writeRepeatedMessage(5, o, proto.webcast.im.RoomUserSeqMessage.Contributor.serializeBinaryToWriter),
            0 !== (o = e.getPopularity()) && t.writeInt64(6, o),
            0 !== (o = e.getTotalUser()) && t.writeInt64(7, o),
            (o = e.getTotalUserStr()).length > 0 && t.writeString(8, o),
            (o = e.getTotalStr()).length > 0 && t.writeString(9, o),
            (o = e.getOnlineUserForAnchor()).length > 0 && t.writeString(10, o),
            (o = e.getTotalPvForAnchor()).length > 0 && t.writeString(11, o),
            (o = e.getUpRightStatsStr()).length > 0 && t.writeString(12, o),
            (o = e.getUpRightStatsStrComplete()).length > 0 && t.writeString(13, o)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.toObject = function(e) {
            return proto.webcast.im.RoomUserSeqMessage.Contributor.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.toObject = function(e, t) {
            var o, s = {
                score: r.Message.getFieldWithDefault(t, 1, "0"),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                rank: r.Message.getFieldWithDefault(t, 3, "0"),
                delta: r.Message.getFieldWithDefault(t, 4, "0"),
                isHidden: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                scoreDescription: r.Message.getFieldWithDefault(t, 6, ""),
                exactlyScore: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.RoomUserSeqMessage.Contributor.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.RoomUserSeqMessage.Contributor;
            return proto.webcast.im.RoomUserSeqMessage.Contributor.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readInt64String();
                    e.setScore(o);
                    break;
                case 2:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setUser(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setRank(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setDelta(o);
                    break;
                case 5:
                    o = t.readBool();
                    e.setIsHidden(o);
                    break;
                case 6:
                    o = t.readString();
                    e.setScoreDescription(o);
                    break;
                case 7:
                    o = t.readString();
                    e.setExactlyScore(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomUserSeqMessage.Contributor.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            o = e.getScore(),
            0 !== parseInt(o, 10) && t.writeInt64String(1, o),
            null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter),
            o = e.getRank(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            o = e.getDelta(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o),
            (o = e.getIsHidden()) && t.writeBool(5, o),
            (o = e.getScoreDescription()).length > 0 && t.writeString(6, o),
            (o = e.getExactlyScore()).length > 0 && t.writeString(7, o)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getScore = function() {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setScore = function(e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getUser = function() {
            return r.Message.getWrapperField(this, a.User, 2)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setUser = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.clearUser = function() {
            return this.setUser(undefined)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.hasUser = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getRank = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setRank = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getDelta = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setDelta = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getIsHidden = function() {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setIsHidden = function(e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getScoreDescription = function() {
            return r.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setScoreDescription = function(e) {
            return r.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.getExactlyScore = function() {
            return r.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.Contributor.prototype.setExactlyScore = function(e) {
            return r.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getRanksList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.RoomUserSeqMessage.Contributor, 2)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setRanksList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.addRanks = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.RoomUserSeqMessage.Contributor, t)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.clearRanksList = function() {
            return this.setRanksList([])
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getTotal = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setTotal = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getPopStr = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setPopStr = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getSeatsList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.RoomUserSeqMessage.Contributor, 5)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setSeatsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.addSeats = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.webcast.im.RoomUserSeqMessage.Contributor, t)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.clearSeatsList = function() {
            return this.setSeatsList([])
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getPopularity = function() {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setPopularity = function(e) {
            return r.Message.setProto3IntField(this, 6, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getTotalUser = function() {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setTotalUser = function(e) {
            return r.Message.setProto3IntField(this, 7, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getTotalUserStr = function() {
            return r.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setTotalUserStr = function(e) {
            return r.Message.setProto3StringField(this, 8, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getTotalStr = function() {
            return r.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setTotalStr = function(e) {
            return r.Message.setProto3StringField(this, 9, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getOnlineUserForAnchor = function() {
            return r.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setOnlineUserForAnchor = function(e) {
            return r.Message.setProto3StringField(this, 10, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getTotalPvForAnchor = function() {
            return r.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setTotalPvForAnchor = function(e) {
            return r.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getUpRightStatsStr = function() {
            return r.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setUpRightStatsStr = function(e) {
            return r.Message.setProto3StringField(this, 12, e)
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.getUpRightStatsStrComplete = function() {
            return r.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.webcast.im.RoomUserSeqMessage.prototype.setUpRightStatsStrComplete = function(e) {
            return r.Message.setProto3StringField(this, 13, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    46456: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(8411);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.SharePosterMessage", null, i),
        s.exportSymbol("proto.webcast.im.SharePosterMessage.PosterData", null, i),
        proto.webcast.im.SharePosterMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.SharePosterMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.SharePosterMessage.displayName = "proto.webcast.im.SharePosterMessage"),
        proto.webcast.im.SharePosterMessage.PosterData = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.SharePosterMessage.PosterData.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.SharePosterMessage.PosterData, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.SharePosterMessage.PosterData.displayName = "proto.webcast.im.SharePosterMessage.PosterData"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SharePosterMessage.prototype.toObject = function(e) {
            return proto.webcast.im.SharePosterMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.SharePosterMessage.toObject = function(e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.SharePosterMessage.PosterData.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.SharePosterMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.SharePosterMessage;
            return proto.webcast.im.SharePosterMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.SharePosterMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new proto.webcast.im.SharePosterMessage.PosterData;
                    t.readMessage(o, proto.webcast.im.SharePosterMessage.PosterData.deserializeBinaryFromReader),
                    e.setData(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SharePosterMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SharePosterMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.SharePosterMessage.PosterData.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.repeatedFields_ = [1, 2],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SharePosterMessage.PosterData.prototype.toObject = function(e) {
            return proto.webcast.im.SharePosterMessage.PosterData.toObject(e, this)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.toObject = function(e, t) {
            var o = {
                posterList: r.Message.toObjectList(t.getPosterList(), a.Image.toObject, e),
                decoratorList: r.Message.toObjectList(t.getDecoratorList(), a.Image.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.SharePosterMessage.PosterData.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.SharePosterMessage.PosterData;
            return proto.webcast.im.SharePosterMessage.PosterData.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Image;
                    t.readMessage(o, a.Image.deserializeBinaryFromReader),
                    e.addPoster(o);
                    break;
                case 2:
                    o = new a.Image;
                    t.readMessage(o, a.Image.deserializeBinaryFromReader),
                    e.addDecorator(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SharePosterMessage.PosterData.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            (o = e.getPosterList()).length > 0 && t.writeRepeatedMessage(1, o, a.Image.serializeBinaryToWriter),
            (o = e.getDecoratorList()).length > 0 && t.writeRepeatedMessage(2, o, a.Image.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.getPosterList = function() {
            return r.Message.getRepeatedWrapperField(this, a.Image, 1)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.setPosterList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.addPoster = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.Image, t)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.clearPosterList = function() {
            return this.setPosterList([])
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.getDecoratorList = function() {
            return r.Message.getRepeatedWrapperField(this, a.Image, 2)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.setDecoratorList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.addDecorator = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.Image, t)
        }
        ,
        proto.webcast.im.SharePosterMessage.PosterData.prototype.clearDecoratorList = function() {
            return this.setDecoratorList([])
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.getData = function() {
            return r.Message.getWrapperField(this, proto.webcast.im.SharePosterMessage.PosterData, 2)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.setData = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.clearData = function() {
            return this.setData(undefined)
        }
        ,
        proto.webcast.im.SharePosterMessage.prototype.hasData = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    52123: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.ShowDouPlusEventType", null, i),
        s.exportSymbol("proto.webcast.im.ShowDouPlusNotifyMessage", null, i),
        proto.webcast.im.ShowDouPlusNotifyMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.ShowDouPlusNotifyMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.ShowDouPlusNotifyMessage.displayName = "proto.webcast.im.ShowDouPlusNotifyMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowDouPlusNotifyMessage.prototype.toObject = function(e) {
            return proto.webcast.im.ShowDouPlusNotifyMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                eventType: r.Message.getFieldWithDefault(t, 2, 0),
                orderId: r.Message.getFieldWithDefault(t, 10, "0"),
                orderWishWord: r.Message.getFieldWithDefault(t, 11, ""),
                enterCount: r.Message.getFieldWithDefault(t, 30, "0")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.ShowDouPlusNotifyMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.ShowDouPlusNotifyMessage;
            return proto.webcast.im.ShowDouPlusNotifyMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readEnum();
                    e.setEventType(o);
                    break;
                case 10:
                    o = t.readInt64String();
                    e.setOrderId(o);
                    break;
                case 11:
                    o = t.readString();
                    e.setOrderWishWord(o);
                    break;
                case 30:
                    o = t.readInt64String();
                    e.setEnterCount(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ShowDouPlusNotifyMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            0 !== (o = e.getEventType()) && t.writeEnum(2, o),
            o = e.getOrderId(),
            0 !== parseInt(o, 10) && t.writeInt64String(10, o),
            (o = e.getOrderWishWord()).length > 0 && t.writeString(11, o),
            o = e.getEnterCount(),
            0 !== parseInt(o, 10) && t.writeInt64String(30, o)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.getEventType = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.setEventType = function(e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.getOrderId = function() {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.setOrderId = function(e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.getOrderWishWord = function() {
            return r.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.setOrderWishWord = function(e) {
            return r.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.getEnterCount = function() {
            return r.Message.getFieldWithDefault(this, 30, "0")
        }
        ,
        proto.webcast.im.ShowDouPlusNotifyMessage.prototype.setEnterCount = function(e) {
            return r.Message.setProto3StringIntField(this, 30, e)
        }
        ,
        proto.webcast.im.ShowDouPlusEventType = {
            SHOWDOUPLUSEVENT_NO_SET: 0,
            SHOWDOUPLUSEVENT_CREATE_ORDER: 1,
            SHOWDOUPLUSEVENT_UPDATE_PROGRESS: 2,
            SHOWDOUPLUSEVENT_FINISH_ORDER: 3
        },
        s.object.extend(t, proto.webcast.im)
    },
    79961: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(8411);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.SkyEyeAnchorSetMessage", null, i),
        proto.webcast.im.SkyEyeAnchorSetMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.SkyEyeAnchorSetMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.SkyEyeAnchorSetMessage.displayName = "proto.webcast.im.SkyEyeAnchorSetMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SkyEyeAnchorSetMessage.prototype.toObject = function(e) {
            return proto.webcast.im.SkyEyeAnchorSetMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                titleImage: (o = t.getTitleImage()) && a.Image.toObject(e, o),
                title: r.Message.getFieldWithDefault(t, 3, ""),
                topTip: r.Message.getFieldWithDefault(t, 4, ""),
                bottomTip: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.SkyEyeAnchorSetMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.SkyEyeAnchorSetMessage;
            return proto.webcast.im.SkyEyeAnchorSetMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new a.Image;
                    t.readMessage(o, a.Image.deserializeBinaryFromReader),
                    e.setTitleImage(o);
                    break;
                case 3:
                    o = t.readString();
                    e.setTitle(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setTopTip(o);
                    break;
                case 5:
                    o = t.readString();
                    e.setBottomTip(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SkyEyeAnchorSetMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            null != (o = e.getTitleImage()) && t.writeMessage(2, o, a.Image.serializeBinaryToWriter),
            (o = e.getTitle()).length > 0 && t.writeString(3, o),
            (o = e.getTopTip()).length > 0 && t.writeString(4, o),
            (o = e.getBottomTip()).length > 0 && t.writeString(5, o)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.getTitleImage = function() {
            return r.Message.getWrapperField(this, a.Image, 2)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.setTitleImage = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.clearTitleImage = function() {
            return this.setTitleImage(undefined)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.hasTitleImage = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.getTitle = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.setTitle = function(e) {
            return r.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.getTopTip = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.setTopTip = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.getBottomTip = function() {
            return r.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.SkyEyeAnchorSetMessage.prototype.setBottomTip = function(e) {
            return r.Message.setProto3StringField(this, 5, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    44792: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.QuizMsgType", null, i),
        s.exportSymbol("proto.webcast.im.SportsQuiz", null, i),
        s.exportSymbol("proto.webcast.im.SportsQuizMessage", null, i),
        s.exportSymbol("proto.webcast.im.SportsQuizOption", null, i),
        s.exportSymbol("proto.webcast.im.SportsQuizStatus", null, i),
        s.exportSymbol("proto.webcast.im.SportsQuizType", null, i),
        proto.webcast.im.SportsQuizOption = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.SportsQuizOption, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.SportsQuizOption.displayName = "proto.webcast.im.SportsQuizOption"),
        proto.webcast.im.SportsQuiz = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.SportsQuiz.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.SportsQuiz, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.SportsQuiz.displayName = "proto.webcast.im.SportsQuiz"),
        proto.webcast.im.SportsQuizMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.SportsQuizMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.SportsQuizMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.SportsQuizMessage.displayName = "proto.webcast.im.SportsQuizMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SportsQuizOption.prototype.toObject = function(e) {
            return proto.webcast.im.SportsQuizOption.toObject(e, this)
        }
        ,
        proto.webcast.im.SportsQuizOption.toObject = function(e, t) {
            var o = {
                optionId: r.Message.getFieldWithDefault(t, 1, "0"),
                optionDesc: r.Message.getFieldWithDefault(t, 2, ""),
                betAmount: r.Message.getFieldWithDefault(t, 3, "0"),
                betAmountStr: r.Message.getFieldWithDefault(t, 4, ""),
                rate: r.Message.getFloatingPointFieldWithDefault(t, 5, 0),
                rateStr: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.SportsQuizOption.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.SportsQuizOption;
            return proto.webcast.im.SportsQuizOption.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.SportsQuizOption.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readInt64String();
                    e.setOptionId(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setOptionDesc(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setBetAmount(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setBetAmountStr(o);
                    break;
                case 5:
                    o = t.readDouble();
                    e.setRate(o);
                    break;
                case 6:
                    o = t.readString();
                    e.setRateStr(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SportsQuizOption.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SportsQuizOption.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            o = e.getOptionId(),
            0 !== parseInt(o, 10) && t.writeInt64String(1, o),
            (o = e.getOptionDesc()).length > 0 && t.writeString(2, o),
            o = e.getBetAmount(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            (o = e.getBetAmountStr()).length > 0 && t.writeString(4, o),
            0 !== (o = e.getRate()) && t.writeDouble(5, o),
            (o = e.getRateStr()).length > 0 && t.writeString(6, o)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.getOptionId = function() {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.setOptionId = function(e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.getOptionDesc = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.setOptionDesc = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.getBetAmount = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.setBetAmount = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.getBetAmountStr = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.setBetAmountStr = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.getRate = function() {
            return r.Message.getFloatingPointFieldWithDefault(this, 5, 0)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.setRate = function(e) {
            return r.Message.setProto3FloatField(this, 5, e)
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.getRateStr = function() {
            return r.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.SportsQuizOption.prototype.setRateStr = function(e) {
            return r.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.SportsQuiz.repeatedFields_ = [6],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SportsQuiz.prototype.toObject = function(e) {
            return proto.webcast.im.SportsQuiz.toObject(e, this)
        }
        ,
        proto.webcast.im.SportsQuiz.toObject = function(e, t) {
            var o = {
                quizId: r.Message.getFieldWithDefault(t, 1, "0"),
                title: r.Message.getFieldWithDefault(t, 2, ""),
                type: r.Message.getFieldWithDefault(t, 3, 0),
                quizStatus: r.Message.getFieldWithDefault(t, 4, 0),
                totalReward: r.Message.getFieldWithDefault(t, 5, "0"),
                optionsList: r.Message.toObjectList(t.getOptionsList(), proto.webcast.im.SportsQuizOption.toObject, e),
                winOption: r.Message.getFieldWithDefault(t, 7, "0"),
                endTime: r.Message.getFieldWithDefault(t, 8, "0"),
                betGoldBall: r.Message.getFieldWithDefault(t, 9, "0"),
                selectedOption: r.Message.getFieldWithDefault(t, 10, "0"),
                bonus: r.Message.getFieldWithDefault(t, 11, "0")
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.SportsQuiz.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.SportsQuiz;
            return proto.webcast.im.SportsQuiz.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.SportsQuiz.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readInt64String();
                    e.setQuizId(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setTitle(o);
                    break;
                case 3:
                    o = t.readEnum();
                    e.setType(o);
                    break;
                case 4:
                    o = t.readEnum();
                    e.setQuizStatus(o);
                    break;
                case 5:
                    o = t.readInt64String();
                    e.setTotalReward(o);
                    break;
                case 6:
                    o = new proto.webcast.im.SportsQuizOption;
                    t.readMessage(o, proto.webcast.im.SportsQuizOption.deserializeBinaryFromReader),
                    e.addOptions(o);
                    break;
                case 7:
                    o = t.readInt64String();
                    e.setWinOption(o);
                    break;
                case 8:
                    o = t.readInt64String();
                    e.setEndTime(o);
                    break;
                case 9:
                    o = t.readInt64String();
                    e.setBetGoldBall(o);
                    break;
                case 10:
                    o = t.readInt64String();
                    e.setSelectedOption(o);
                    break;
                case 11:
                    o = t.readInt64String();
                    e.setBonus(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SportsQuiz.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SportsQuiz.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            o = e.getQuizId(),
            0 !== parseInt(o, 10) && t.writeInt64String(1, o),
            (o = e.getTitle()).length > 0 && t.writeString(2, o),
            0 !== (o = e.getType()) && t.writeEnum(3, o),
            0 !== (o = e.getQuizStatus()) && t.writeEnum(4, o),
            o = e.getTotalReward(),
            0 !== parseInt(o, 10) && t.writeInt64String(5, o),
            (o = e.getOptionsList()).length > 0 && t.writeRepeatedMessage(6, o, proto.webcast.im.SportsQuizOption.serializeBinaryToWriter),
            o = e.getWinOption(),
            0 !== parseInt(o, 10) && t.writeInt64String(7, o),
            o = e.getEndTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(8, o),
            o = e.getBetGoldBall(),
            0 !== parseInt(o, 10) && t.writeInt64String(9, o),
            o = e.getSelectedOption(),
            0 !== parseInt(o, 10) && t.writeInt64String(10, o),
            o = e.getBonus(),
            0 !== parseInt(o, 10) && t.writeInt64String(11, o)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getQuizId = function() {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setQuizId = function(e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getTitle = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setTitle = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setType = function(e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getQuizStatus = function() {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setQuizStatus = function(e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getTotalReward = function() {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setTotalReward = function(e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getOptionsList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.SportsQuizOption, 6)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setOptionsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.addOptions = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.webcast.im.SportsQuizOption, t)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.clearOptionsList = function() {
            return this.setOptionsList([])
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getWinOption = function() {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setWinOption = function(e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getEndTime = function() {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setEndTime = function(e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getBetGoldBall = function() {
            return r.Message.getFieldWithDefault(this, 9, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setBetGoldBall = function(e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getSelectedOption = function() {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setSelectedOption = function(e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.getBonus = function() {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }
        ,
        proto.webcast.im.SportsQuiz.prototype.setBonus = function(e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }
        ,
        proto.webcast.im.SportsQuizMessage.repeatedFields_ = [4],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SportsQuizMessage.prototype.toObject = function(e) {
            return proto.webcast.im.SportsQuizMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.SportsQuizMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                matchId: r.Message.getFieldWithDefault(t, 2, ""),
                quizMsgType: r.Message.getFieldWithDefault(t, 3, 0),
                quizList: r.Message.toObjectList(t.getQuizList(), proto.webcast.im.SportsQuiz.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.SportsQuizMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.SportsQuizMessage;
            return proto.webcast.im.SportsQuizMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.SportsQuizMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setMatchId(o);
                    break;
                case 3:
                    o = t.readEnum();
                    e.setQuizMsgType(o);
                    break;
                case 4:
                    o = new proto.webcast.im.SportsQuiz;
                    t.readMessage(o, proto.webcast.im.SportsQuiz.deserializeBinaryFromReader),
                    e.addQuiz(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SportsQuizMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SportsQuizMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getMatchId()).length > 0 && t.writeString(2, o),
            0 !== (o = e.getQuizMsgType()) && t.writeEnum(3, o),
            (o = e.getQuizList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.SportsQuiz.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.getMatchId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.setMatchId = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.getQuizMsgType = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.setQuizMsgType = function(e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.getQuizList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.SportsQuiz, 4)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.setQuizList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.addQuiz = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.SportsQuiz, t)
        }
        ,
        proto.webcast.im.SportsQuizMessage.prototype.clearQuizList = function() {
            return this.setQuizList([])
        }
        ,
        proto.webcast.im.QuizMsgType = {
            STATUSCHANGE: 0,
            DATAREFRESH: 1
        },
        proto.webcast.im.SportsQuizType = {
            UNKNOWNSPORTSQUIZTYPE: 0,
            MATCHRESULT: 1,
            MATCHGOALNUMBER: 2,
            REALTIMEQUESTION: 3
        },
        proto.webcast.im.SportsQuizStatus = {
            SPORTSQUIZUNKNOWNSTATUS: 0,
            SPORTSQUIZPROCESSING: 1,
            SPORTSQUIZEND: 2,
            SPORTSQUIZCOMPUTED: 3,
            SPORTSQUIZREWARDED: 4,
            SPORTSQUIZSETTLING: 5,
            SPORTSQUIZSETTLED: 6,
            SPORTSQUIZINVALID: 7
        },
        s.object.extend(t, proto.webcast.im)
    },
    39417: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.UnionGeneralMessage", null, i),
        proto.webcast.im.UnionGeneralMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.UnionGeneralMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.UnionGeneralMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.UnionGeneralMessage.displayName = "proto.webcast.im.UnionGeneralMessage"),
        proto.webcast.im.UnionGeneralMessage.repeatedFields_ = [2],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UnionGeneralMessage.prototype.toObject = function(e) {
            return proto.webcast.im.UnionGeneralMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                payloadList: null == (o = r.Message.getRepeatedField(t, 2)) ? undefined : o,
                timestamp: r.Message.getFieldWithDefault(t, 3, "0"),
                authType: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.UnionGeneralMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.UnionGeneralMessage;
            return proto.webcast.im.UnionGeneralMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    for (var r = t.isDelimited() ? t.readPackedInt32() : [t.readInt32()], s = 0; s < r.length; s++)
                        e.addPayload(r[s]);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setTimestamp(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setAuthType(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UnionGeneralMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UnionGeneralMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            (o = e.getPayloadList()).length > 0 && t.writePackedInt32(2, o),
            o = e.getTimestamp(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            o = e.getAuthType(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.getPayloadList = function() {
            return r.Message.getRepeatedField(this, 2)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.setPayloadList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.addPayload = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.clearPayloadList = function() {
            return this.setPayloadList([])
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.getTimestamp = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.setTimestamp = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.getAuthType = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.UnionGeneralMessage.prototype.setAuthType = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    3533: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.AnchorAppointmentNumUpdateMessage", null, i),
        s.exportSymbol("proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data", null, i),
        proto.webcast.im.AnchorAppointmentNumUpdateMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.AnchorAppointmentNumUpdateMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.AnchorAppointmentNumUpdateMessage.displayName = "proto.webcast.im.AnchorAppointmentNumUpdateMessage"),
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.displayName = "proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.toObject = function(e) {
            return proto.webcast.im.AnchorAppointmentNumUpdateMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.toObject = function(e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.AnchorAppointmentNumUpdateMessage;
            return proto.webcast.im.AnchorAppointmentNumUpdateMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data;
                    t.readMessage(o, proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.deserializeBinaryFromReader),
                    e.setData(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnchorAppointmentNumUpdateMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.serializeBinaryToWriter)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.prototype.toObject = function(e) {
            return proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.toObject(e, this)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.toObject = function(e, t) {
            var o = {
                currentnumber: r.Message.getFieldWithDefault(t, 1, "0"),
                anchoruid: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data;
            return proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readInt64String();
                    e.setCurrentnumber(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setAnchoruid(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            o = e.getCurrentnumber(),
            0 !== parseInt(o, 10) && t.writeInt64String(1, o),
            o = e.getAnchoruid(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.prototype.getCurrentnumber = function() {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.prototype.setCurrentnumber = function(e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.prototype.getAnchoruid = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data.prototype.setAnchoruid = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.getData = function() {
            return r.Message.getWrapperField(this, proto.webcast.im.AnchorAppointmentNumUpdateMessage.Data, 2)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.setData = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.clearData = function() {
            return this.setData(undefined)
        }
        ,
        proto.webcast.im.AnchorAppointmentNumUpdateMessage.prototype.hasData = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    14905: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.VideoShareMessage", null, i),
        proto.webcast.im.VideoShareMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.VideoShareMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.VideoShareMessage.displayName = "proto.webcast.im.VideoShareMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoShareMessage.prototype.toObject = function(e) {
            return proto.webcast.im.VideoShareMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.VideoShareMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                itemId: r.Message.getFieldWithDefault(t, 3, "0"),
                itemIdStr: r.Message.getFieldWithDefault(t, 4, ""),
                itemType: r.Message.getFieldWithDefault(t, 5, "0"),
                itemTypeStr: r.Message.getFieldWithDefault(t, 6, ""),
                title: r.Message.getFieldWithDefault(t, 7, ""),
                authorId: r.Message.getFieldWithDefault(t, 8, "0")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.VideoShareMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.VideoShareMessage;
            return proto.webcast.im.VideoShareMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.VideoShareMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new a.User;
                    t.readMessage(o, a.User.deserializeBinaryFromReader),
                    e.setUser(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setItemId(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setItemIdStr(o);
                    break;
                case 5:
                    o = t.readInt64String();
                    e.setItemType(o);
                    break;
                case 6:
                    o = t.readString();
                    e.setItemTypeStr(o);
                    break;
                case 7:
                    o = t.readString();
                    e.setTitle(o);
                    break;
                case 8:
                    o = t.readInt64String();
                    e.setAuthorId(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoShareMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.VideoShareMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter),
            null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter),
            o = e.getItemId(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            (o = e.getItemIdStr()).length > 0 && t.writeString(4, o),
            o = e.getItemType(),
            0 !== parseInt(o, 10) && t.writeInt64String(5, o),
            (o = e.getItemTypeStr()).length > 0 && t.writeString(6, o),
            (o = e.getTitle()).length > 0 && t.writeString(7, o),
            o = e.getAuthorId(),
            0 !== parseInt(o, 10) && t.writeInt64String(8, o)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, n.Common, 1)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getUser = function() {
            return r.Message.getWrapperField(this, a.User, 2)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setUser = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.clearUser = function() {
            return this.setUser(undefined)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.hasUser = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getItemId = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setItemId = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getItemIdStr = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setItemIdStr = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getItemType = function() {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setItemType = function(e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getItemTypeStr = function() {
            return r.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setItemTypeStr = function(e) {
            return r.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getTitle = function() {
            return r.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setTitle = function(e) {
            return r.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.getAuthorId = function() {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.VideoShareMessage.prototype.setAuthorId = function(e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    86266: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.VirtualGameActorChatMessage", null, i),
        proto.webcast.im.VirtualGameActorChatMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.VirtualGameActorChatMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.VirtualGameActorChatMessage.displayName = "proto.webcast.im.VirtualGameActorChatMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VirtualGameActorChatMessage.prototype.toObject = function(e) {
            return proto.webcast.im.VirtualGameActorChatMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                userId: r.Message.getFieldWithDefault(t, 2, "0"),
                actorId: r.Message.getFieldWithDefault(t, 3, "0"),
                userNickName: r.Message.getFieldWithDefault(t, 4, ""),
                chatRequestTime: r.Message.getFieldWithDefault(t, 5, "0"),
                roomId: r.Message.getFieldWithDefault(t, 6, "0"),
                content: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.VirtualGameActorChatMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.VirtualGameActorChatMessage;
            return proto.webcast.im.VirtualGameActorChatMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setUserId(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setActorId(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setUserNickName(o);
                    break;
                case 5:
                    o = t.readInt64String();
                    e.setChatRequestTime(o);
                    break;
                case 6:
                    o = t.readInt64String();
                    e.setRoomId(o);
                    break;
                case 7:
                    o = t.readString();
                    e.setContent(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VirtualGameActorChatMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            o = e.getUserId(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o),
            o = e.getActorId(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            (o = e.getUserNickName()).length > 0 && t.writeString(4, o),
            o = e.getChatRequestTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(5, o),
            o = e.getRoomId(),
            0 !== parseInt(o, 10) && t.writeInt64String(6, o),
            (o = e.getContent()).length > 0 && t.writeString(7, o)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getUserId = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setUserId = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getActorId = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setActorId = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getUserNickName = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setUserNickName = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getChatRequestTime = function() {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setChatRequestTime = function(e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getRoomId = function() {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setRoomId = function(e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.getContent = function() {
            return r.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.VirtualGameActorChatMessage.prototype.setContent = function(e) {
            return r.Message.setProto3StringField(this, 7, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    76104: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.VirtualActorBatchCommandMessage", null, i),
        s.exportSymbol("proto.webcast.im.VirtualGameActorCommandMessage", null, i),
        proto.webcast.im.VirtualActorBatchCommandMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.VirtualActorBatchCommandMessage.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.VirtualActorBatchCommandMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.VirtualActorBatchCommandMessage.displayName = "proto.webcast.im.VirtualActorBatchCommandMessage"),
        proto.webcast.im.VirtualGameActorCommandMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.VirtualGameActorCommandMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.VirtualGameActorCommandMessage.displayName = "proto.webcast.im.VirtualGameActorCommandMessage"),
        proto.webcast.im.VirtualActorBatchCommandMessage.repeatedFields_ = [3],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VirtualActorBatchCommandMessage.prototype.toObject = function(e) {
            return proto.webcast.im.VirtualActorBatchCommandMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                roomId: r.Message.getFieldWithDefault(t, 2, "0"),
                commandMessageListList: r.Message.toObjectList(t.getCommandMessageListList(), proto.webcast.im.VirtualGameActorCommandMessage.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.VirtualActorBatchCommandMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.VirtualActorBatchCommandMessage;
            return proto.webcast.im.VirtualActorBatchCommandMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setRoomId(o);
                    break;
                case 3:
                    o = new proto.webcast.im.VirtualGameActorCommandMessage;
                    t.readMessage(o, proto.webcast.im.VirtualGameActorCommandMessage.deserializeBinaryFromReader),
                    e.addCommandMessageList(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VirtualActorBatchCommandMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            o = e.getRoomId(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o),
            (o = e.getCommandMessageListList()).length > 0 && t.writeRepeatedMessage(3, o, proto.webcast.im.VirtualGameActorCommandMessage.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.getRoomId = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.setRoomId = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.getCommandMessageListList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.VirtualGameActorCommandMessage, 3)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.setCommandMessageListList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.addCommandMessageList = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.im.VirtualGameActorCommandMessage, t)
        }
        ,
        proto.webcast.im.VirtualActorBatchCommandMessage.prototype.clearCommandMessageListList = function() {
            return this.setCommandMessageListList([])
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VirtualGameActorCommandMessage.prototype.toObject = function(e) {
            return proto.webcast.im.VirtualGameActorCommandMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.toObject = function(e, t) {
            var o = {
                commandId: r.Message.getFieldWithDefault(t, 1, "0"),
                commandType: r.Message.getFieldWithDefault(t, 2, ""),
                userId: r.Message.getFieldWithDefault(t, 3, "0"),
                actorId: r.Message.getFieldWithDefault(t, 4, "0"),
                userNickName: r.Message.getFieldWithDefault(t, 5, ""),
                actorCreateTime: r.Message.getFieldWithDefault(t, 6, "0"),
                actorRemoveTime: r.Message.getFieldWithDefault(t, 7, "0"),
                commandRequestTime: r.Message.getFieldWithDefault(t, 8, "0")
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.VirtualGameActorCommandMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.VirtualGameActorCommandMessage;
            return proto.webcast.im.VirtualGameActorCommandMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readInt64String();
                    e.setCommandId(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setCommandType(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setUserId(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setActorId(o);
                    break;
                case 5:
                    o = t.readString();
                    e.setUserNickName(o);
                    break;
                case 6:
                    o = t.readInt64String();
                    e.setActorCreateTime(o);
                    break;
                case 7:
                    o = t.readInt64String();
                    e.setActorRemoveTime(o);
                    break;
                case 8:
                    o = t.readInt64String();
                    e.setCommandRequestTime(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VirtualGameActorCommandMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            o = e.getCommandId(),
            0 !== parseInt(o, 10) && t.writeInt64String(1, o),
            (o = e.getCommandType()).length > 0 && t.writeString(2, o),
            o = e.getUserId(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            o = e.getActorId(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o),
            (o = e.getUserNickName()).length > 0 && t.writeString(5, o),
            o = e.getActorCreateTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(6, o),
            o = e.getActorRemoveTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(7, o),
            o = e.getCommandRequestTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(8, o)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getCommandId = function() {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setCommandId = function(e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getCommandType = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setCommandType = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getUserId = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setUserId = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getActorId = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setActorId = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getUserNickName = function() {
            return r.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setUserNickName = function(e) {
            return r.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getActorCreateTime = function() {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setActorCreateTime = function(e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getActorRemoveTime = function() {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setActorRemoveTime = function(e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.getCommandRequestTime = function() {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.VirtualGameActorCommandMessage.prototype.setCommandRequestTime = function(e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    80957: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a);
        var n = o(34725);
        s.object.extend(proto, n),
        s.exportSymbol("proto.webcast.im.VsBusinessConfigureMessage", null, i),
        proto.webcast.im.VsBusinessConfigureMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.VsBusinessConfigureMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.VsBusinessConfigureMessage.displayName = "proto.webcast.im.VsBusinessConfigureMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VsBusinessConfigureMessage.prototype.toObject = function(e) {
            return proto.webcast.im.VsBusinessConfigureMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                businessConfigure: (o = t.getBusinessConfigure()) && n.BusinessConfigure.toObject(e, o),
                allInfo: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                scatterTime: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.VsBusinessConfigureMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.VsBusinessConfigureMessage;
            return proto.webcast.im.VsBusinessConfigureMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = new n.BusinessConfigure;
                    t.readMessage(o, n.BusinessConfigure.deserializeBinaryFromReader),
                    e.setBusinessConfigure(o);
                    break;
                case 3:
                    o = t.readBool();
                    e.setAllInfo(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setScatterTime(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VsBusinessConfigureMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            null != (o = e.getBusinessConfigure()) && t.writeMessage(2, o, n.BusinessConfigure.serializeBinaryToWriter),
            (o = e.getAllInfo()) && t.writeBool(3, o),
            o = e.getScatterTime(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.getBusinessConfigure = function() {
            return r.Message.getWrapperField(this, n.BusinessConfigure, 2)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.setBusinessConfigure = function(e) {
            return r.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.clearBusinessConfigure = function() {
            return this.setBusinessConfigure(undefined)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.hasBusinessConfigure = function() {
            return null != r.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.getAllInfo = function() {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.setAllInfo = function(e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.getScatterTime = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.VsBusinessConfigureMessage.prototype.setScatterTime = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    98483: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.FreshmanSupportMessage", null, i),
        proto.webcast.im.FreshmanSupportMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.FreshmanSupportMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.FreshmanSupportMessage.displayName = "proto.webcast.im.FreshmanSupportMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FreshmanSupportMessage.prototype.toObject = function(e) {
            return proto.webcast.im.FreshmanSupportMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                number: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, "0"),
                icon: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.FreshmanSupportMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.FreshmanSupportMessage;
            return proto.webcast.im.FreshmanSupportMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setNumber(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setStatus(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setIcon(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FreshmanSupportMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            o = e.getNumber(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o),
            o = e.getStatus(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            (o = e.getIcon()).length > 0 && t.writeString(4, o)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.getNumber = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.setNumber = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.getStatus = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.setStatus = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.getIcon = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.FreshmanSupportMessage.prototype.setIcon = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    87952: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , a = o(50684);
        s.object.extend(proto, a),
        s.exportSymbol("proto.webcast.im.TrafficSceneMessage", null, i),
        proto.webcast.im.TrafficSceneMessage = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.TrafficSceneMessage, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.TrafficSceneMessage.displayName = "proto.webcast.im.TrafficSceneMessage"),
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TrafficSceneMessage.prototype.toObject = function(e) {
            return proto.webcast.im.TrafficSceneMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.toObject = function(e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                number: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, "0"),
                icon: r.Message.getFieldWithDefault(t, 4, ""),
                type: r.Message.getFieldWithDefault(t, 5, "0"),
                isKeep: r.Message.getBooleanFieldWithDefault(t, 6, !1)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.TrafficSceneMessage.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.TrafficSceneMessage;
            return proto.webcast.im.TrafficSceneMessage.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader),
                    e.setCommon(o);
                    break;
                case 2:
                    o = t.readInt64String();
                    e.setNumber(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setStatus(o);
                    break;
                case 4:
                    o = t.readString();
                    e.setIcon(o);
                    break;
                case 5:
                    o = t.readInt64String();
                    e.setType(o);
                    break;
                case 6:
                    o = t.readBool();
                    e.setIsKeep(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TrafficSceneMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.TrafficSceneMessage.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter),
            o = e.getNumber(),
            0 !== parseInt(o, 10) && t.writeInt64String(2, o),
            o = e.getStatus(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            (o = e.getIcon()).length > 0 && t.writeString(4, o),
            o = e.getType(),
            0 !== parseInt(o, 10) && t.writeInt64String(5, o),
            (o = e.getIsKeep()) && t.writeBool(6, o)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.getCommon = function() {
            return r.Message.getWrapperField(this, a.Common, 1)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.setCommon = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.clearCommon = function() {
            return this.setCommon(undefined)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.hasCommon = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.getNumber = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.setNumber = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.getStatus = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.setStatus = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.getIcon = function() {
            return r.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.setIcon = function(e) {
            return r.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.setType = function(e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.getIsKeep = function() {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        }
        ,
        proto.webcast.im.TrafficSceneMessage.prototype.setIsKeep = function(e) {
            return r.Message.setProto3BooleanField(this, 6, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    42537: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null);
        s.exportSymbol("proto.pushproto.PushFrame", null, i),
        s.exportSymbol("proto.pushproto.PushHeader", null, i),
        proto.pushproto.PushHeader = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.pushproto.PushHeader, r.Message),
        s.DEBUG && !COMPILED && (proto.pushproto.PushHeader.displayName = "proto.pushproto.PushHeader"),
        proto.pushproto.PushFrame = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.pushproto.PushFrame.repeatedFields_, null)
        }
        ,
        s.inherits(proto.pushproto.PushFrame, r.Message),
        s.DEBUG && !COMPILED && (proto.pushproto.PushFrame.displayName = "proto.pushproto.PushFrame"),
        r.Message.GENERATE_TO_OBJECT && (proto.pushproto.PushHeader.prototype.toObject = function(e) {
            return proto.pushproto.PushHeader.toObject(e, this)
        }
        ,
        proto.pushproto.PushHeader.toObject = function(e, t) {
            var o = {
                key: r.Message.getFieldWithDefault(t, 1, ""),
                value: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.pushproto.PushHeader.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.pushproto.PushHeader;
            return proto.pushproto.PushHeader.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.pushproto.PushHeader.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readString();
                    e.setKey(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setValue(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.pushproto.PushHeader.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.pushproto.PushHeader.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.pushproto.PushHeader.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            (o = e.getKey()).length > 0 && t.writeString(1, o),
            (o = e.getValue()).length > 0 && t.writeString(2, o)
        }
        ,
        proto.pushproto.PushHeader.prototype.getKey = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.pushproto.PushHeader.prototype.setKey = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.pushproto.PushHeader.prototype.getValue = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.pushproto.PushHeader.prototype.setValue = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.pushproto.PushFrame.repeatedFields_ = [5],
        r.Message.GENERATE_TO_OBJECT && (proto.pushproto.PushFrame.prototype.toObject = function(e) {
            return proto.pushproto.PushFrame.toObject(e, this)
        }
        ,
        proto.pushproto.PushFrame.toObject = function(e, t) {
            var o = {
                seqid: r.Message.getFieldWithDefault(t, 1, "0"),
                logid: r.Message.getFieldWithDefault(t, 2, "0"),
                service: r.Message.getFieldWithDefault(t, 3, "0"),
                method: r.Message.getFieldWithDefault(t, 4, "0"),
                headersList: r.Message.toObjectList(t.getHeadersList(), proto.pushproto.PushHeader.toObject, e),
                payloadEncoding: r.Message.getFieldWithDefault(t, 6, ""),
                payloadType: r.Message.getFieldWithDefault(t, 7, ""),
                payload: t.getPayload_asB64()
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.pushproto.PushFrame.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.pushproto.PushFrame;
            return proto.pushproto.PushFrame.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.pushproto.PushFrame.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readUint64String();
                    e.setSeqid(o);
                    break;
                case 2:
                    o = t.readUint64String();
                    e.setLogid(o);
                    break;
                case 3:
                    o = t.readUint64String();
                    e.setService(o);
                    break;
                case 4:
                    o = t.readUint64String();
                    e.setMethod(o);
                    break;
                case 5:
                    o = new proto.pushproto.PushHeader;
                    t.readMessage(o, proto.pushproto.PushHeader.deserializeBinaryFromReader),
                    e.addHeaders(o);
                    break;
                case 6:
                    o = t.readString();
                    e.setPayloadEncoding(o);
                    break;
                case 7:
                    o = t.readString();
                    e.setPayloadType(o);
                    break;
                case 8:
                    o = t.readBytes();
                    e.setPayload(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.pushproto.PushFrame.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.pushproto.PushFrame.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.pushproto.PushFrame.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            o = e.getSeqid(),
            0 !== parseInt(o, 10) && t.writeUint64String(1, o),
            o = e.getLogid(),
            0 !== parseInt(o, 10) && t.writeUint64String(2, o),
            o = e.getService(),
            0 !== parseInt(o, 10) && t.writeUint64String(3, o),
            o = e.getMethod(),
            0 !== parseInt(o, 10) && t.writeUint64String(4, o),
            (o = e.getHeadersList()).length > 0 && t.writeRepeatedMessage(5, o, proto.pushproto.PushHeader.serializeBinaryToWriter),
            (o = e.getPayloadEncoding()).length > 0 && t.writeString(6, o),
            (o = e.getPayloadType()).length > 0 && t.writeString(7, o),
            (o = e.getPayload_asU8()).length > 0 && t.writeBytes(8, o)
        }
        ,
        proto.pushproto.PushFrame.prototype.getSeqid = function() {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.pushproto.PushFrame.prototype.setSeqid = function(e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.getLogid = function() {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.pushproto.PushFrame.prototype.setLogid = function(e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.getService = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.pushproto.PushFrame.prototype.setService = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.getMethod = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.pushproto.PushFrame.prototype.setMethod = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.getHeadersList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.pushproto.PushHeader, 5)
        }
        ,
        proto.pushproto.PushFrame.prototype.setHeadersList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.addHeaders = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.pushproto.PushHeader, t)
        }
        ,
        proto.pushproto.PushFrame.prototype.clearHeadersList = function() {
            return this.setHeadersList([])
        }
        ,
        proto.pushproto.PushFrame.prototype.getPayloadEncoding = function() {
            return r.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.pushproto.PushFrame.prototype.setPayloadEncoding = function(e) {
            return r.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.getPayloadType = function() {
            return r.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.pushproto.PushFrame.prototype.setPayloadType = function(e) {
            return r.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.pushproto.PushFrame.prototype.getPayload = function() {
            return r.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.pushproto.PushFrame.prototype.getPayload_asB64 = function() {
            return r.Message.bytesAsB64(this.getPayload())
        }
        ,
        proto.pushproto.PushFrame.prototype.getPayload_asU8 = function() {
            return r.Message.bytesAsU8(this.getPayload())
        }
        ,
        proto.pushproto.PushFrame.prototype.setPayload = function(e) {
            return r.Message.setProto3BytesField(this, 8, e)
        }
        ,
        s.object.extend(t, proto.pushproto)
    },
    46767: function(e, t, o) {
        var r = o(47865)
          , s = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null);
        s.exportSymbol("proto.webcast.im.Message", null, i),
        s.exportSymbol("proto.webcast.im.Response", null, i),
        proto.webcast.im.Response = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.Response.repeatedFields_, null)
        }
        ,
        s.inherits(proto.webcast.im.Response, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.Response.displayName = "proto.webcast.im.Response"),
        proto.webcast.im.Message = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        s.inherits(proto.webcast.im.Message, r.Message),
        s.DEBUG && !COMPILED && (proto.webcast.im.Message.displayName = "proto.webcast.im.Message"),
        proto.webcast.im.Response.repeatedFields_ = [1],
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Response.prototype.toObject = function(e) {
            return proto.webcast.im.Response.toObject(e, this)
        }
        ,
        proto.webcast.im.Response.toObject = function(e, t) {
            var o, s = {
                messagesList: r.Message.toObjectList(t.getMessagesList(), proto.webcast.im.Message.toObject, e),
                cursor: r.Message.getFieldWithDefault(t, 2, ""),
                fetchInterval: r.Message.getFieldWithDefault(t, 3, "0"),
                now: r.Message.getFieldWithDefault(t, 4, "0"),
                internalExt: r.Message.getFieldWithDefault(t, 5, ""),
                fetchType: r.Message.getFieldWithDefault(t, 6, 0),
                routeParamsMap: (o = t.getRouteParamsMap()) ? o.toObject(e, undefined) : [],
                heartbeatDuration: r.Message.getFieldWithDefault(t, 8, "0"),
                needAck: r.Message.getBooleanFieldWithDefault(t, 9, !1),
                pushServer: r.Message.getFieldWithDefault(t, 10, ""),
                liveCursor: r.Message.getFieldWithDefault(t, 11, ""),
                historyNoMore: r.Message.getBooleanFieldWithDefault(t, 12, !1)
            };
            return e && (s.$jspbMessageInstance = t),
            s
        }
        ),
        proto.webcast.im.Response.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.Response;
            return proto.webcast.im.Response.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.Response.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = new proto.webcast.im.Message;
                    t.readMessage(o, proto.webcast.im.Message.deserializeBinaryFromReader),
                    e.addMessages(o);
                    break;
                case 2:
                    o = t.readString();
                    e.setCursor(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setFetchInterval(o);
                    break;
                case 4:
                    o = t.readInt64String();
                    e.setNow(o);
                    break;
                case 5:
                    o = t.readString();
                    e.setInternalExt(o);
                    break;
                case 6:
                    o = t.readInt32();
                    e.setFetchType(o);
                    break;
                case 7:
                    o = e.getRouteParamsMap();
                    t.readMessage(o, (function(e, t) {
                        r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                    }
                    ));
                    break;
                case 8:
                    o = t.readInt64String();
                    e.setHeartbeatDuration(o);
                    break;
                case 9:
                    o = t.readBool();
                    e.setNeedAck(o);
                    break;
                case 10:
                    o = t.readString();
                    e.setPushServer(o);
                    break;
                case 11:
                    o = t.readString();
                    e.setLiveCursor(o);
                    break;
                case 12:
                    o = t.readBool();
                    e.setHistoryNoMore(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.Response.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.Response.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.Response.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            (o = e.getMessagesList()).length > 0 && t.writeRepeatedMessage(1, o, proto.webcast.im.Message.serializeBinaryToWriter),
            (o = e.getCursor()).length > 0 && t.writeString(2, o),
            o = e.getFetchInterval(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            o = e.getNow(),
            0 !== parseInt(o, 10) && t.writeInt64String(4, o),
            (o = e.getInternalExt()).length > 0 && t.writeString(5, o),
            0 !== (o = e.getFetchType()) && t.writeInt32(6, o),
            (o = e.getRouteParamsMap(!0)) && o.getLength() > 0 && o.serializeBinary(7, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString),
            o = e.getHeartbeatDuration(),
            0 !== parseInt(o, 10) && t.writeInt64String(8, o),
            (o = e.getNeedAck()) && t.writeBool(9, o),
            (o = e.getPushServer()).length > 0 && t.writeString(10, o),
            (o = e.getLiveCursor()).length > 0 && t.writeString(11, o),
            (o = e.getHistoryNoMore()) && t.writeBool(12, o)
        }
        ,
        proto.webcast.im.Response.prototype.getMessagesList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.Message, 1)
        }
        ,
        proto.webcast.im.Response.prototype.setMessagesList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.Response.prototype.addMessages = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.im.Message, t)
        }
        ,
        proto.webcast.im.Response.prototype.clearMessagesList = function() {
            return this.setMessagesList([])
        }
        ,
        proto.webcast.im.Response.prototype.getCursor = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.Response.prototype.setCursor = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.Response.prototype.getFetchInterval = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.Response.prototype.setFetchInterval = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.Response.prototype.getNow = function() {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.Response.prototype.setNow = function(e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.Response.prototype.getInternalExt = function() {
            return r.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.Response.prototype.setInternalExt = function(e) {
            return r.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.Response.prototype.getFetchType = function() {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.webcast.im.Response.prototype.setFetchType = function(e) {
            return r.Message.setProto3IntField(this, 6, e)
        }
        ,
        proto.webcast.im.Response.prototype.getRouteParamsMap = function(e) {
            return r.Message.getMapField(this, 7, e, null)
        }
        ,
        proto.webcast.im.Response.prototype.clearRouteParamsMap = function() {
            return this.getRouteParamsMap().clear(),
            this
        }
        ,
        proto.webcast.im.Response.prototype.getHeartbeatDuration = function() {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.Response.prototype.setHeartbeatDuration = function(e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        proto.webcast.im.Response.prototype.getNeedAck = function() {
            return r.Message.getBooleanFieldWithDefault(this, 9, !1)
        }
        ,
        proto.webcast.im.Response.prototype.setNeedAck = function(e) {
            return r.Message.setProto3BooleanField(this, 9, e)
        }
        ,
        proto.webcast.im.Response.prototype.getPushServer = function() {
            return r.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.webcast.im.Response.prototype.setPushServer = function(e) {
            return r.Message.setProto3StringField(this, 10, e)
        }
        ,
        proto.webcast.im.Response.prototype.getLiveCursor = function() {
            return r.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.Response.prototype.setLiveCursor = function(e) {
            return r.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.Response.prototype.getHistoryNoMore = function() {
            return r.Message.getBooleanFieldWithDefault(this, 12, !1)
        }
        ,
        proto.webcast.im.Response.prototype.setHistoryNoMore = function(e) {
            return r.Message.setProto3BooleanField(this, 12, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Message.prototype.toObject = function(e) {
            return proto.webcast.im.Message.toObject(e, this)
        }
        ,
        proto.webcast.im.Message.toObject = function(e, t) {
            var o = {
                method: r.Message.getFieldWithDefault(t, 1, ""),
                payload: t.getPayload_asB64(),
                msgId: r.Message.getFieldWithDefault(t, 3, "0"),
                msgType: r.Message.getFieldWithDefault(t, 4, 0),
                offset: r.Message.getFieldWithDefault(t, 5, "0"),
                needWrdsStore: r.Message.getBooleanFieldWithDefault(t, 6, !1),
                wrdsVersion: r.Message.getFieldWithDefault(t, 7, "0"),
                wrdsSubKey: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.Message.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e)
              , o = new proto.webcast.im.Message;
            return proto.webcast.im.Message.deserializeBinaryFromReader(o, t)
        }
        ,
        proto.webcast.im.Message.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var o = t.readString();
                    e.setMethod(o);
                    break;
                case 2:
                    o = t.readBytes();
                    e.setPayload(o);
                    break;
                case 3:
                    o = t.readInt64String();
                    e.setMsgId(o);
                    break;
                case 4:
                    o = t.readInt32();
                    e.setMsgType(o);
                    break;
                case 5:
                    o = t.readInt64String();
                    e.setOffset(o);
                    break;
                case 6:
                    o = t.readBool();
                    e.setNeedWrdsStore(o);
                    break;
                case 7:
                    o = t.readInt64String();
                    e.setWrdsVersion(o);
                    break;
                case 8:
                    o = t.readString();
                    e.setWrdsSubKey(o);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.Message.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.webcast.im.Message.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.Message.serializeBinaryToWriter = function(e, t) {
            var o = undefined;
            (o = e.getMethod()).length > 0 && t.writeString(1, o),
            (o = e.getPayload_asU8()).length > 0 && t.writeBytes(2, o),
            o = e.getMsgId(),
            0 !== parseInt(o, 10) && t.writeInt64String(3, o),
            0 !== (o = e.getMsgType()) && t.writeInt32(4, o),
            o = e.getOffset(),
            0 !== parseInt(o, 10) && t.writeInt64String(5, o),
            (o = e.getNeedWrdsStore()) && t.writeBool(6, o),
            o = e.getWrdsVersion(),
            0 !== parseInt(o, 10) && t.writeInt64String(7, o),
            (o = e.getWrdsSubKey()).length > 0 && t.writeString(8, o)
        }
        ,
        proto.webcast.im.Message.prototype.getMethod = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.Message.prototype.setMethod = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.Message.prototype.getPayload = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.Message.prototype.getPayload_asB64 = function() {
            return r.Message.bytesAsB64(this.getPayload())
        }
        ,
        proto.webcast.im.Message.prototype.getPayload_asU8 = function() {
            return r.Message.bytesAsU8(this.getPayload())
        }
        ,
        proto.webcast.im.Message.prototype.setPayload = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }
        ,
        proto.webcast.im.Message.prototype.getMsgId = function() {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.Message.prototype.setMsgId = function(e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.Message.prototype.getMsgType = function() {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.webcast.im.Message.prototype.setMsgType = function(e) {
            return r.Message.setProto3IntField(this, 4, e)
        }
        ,
        proto.webcast.im.Message.prototype.getOffset = function() {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.Message.prototype.setOffset = function(e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.Message.prototype.getNeedWrdsStore = function() {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        }
        ,
        proto.webcast.im.Message.prototype.setNeedWrdsStore = function(e) {
            return r.Message.setProto3BooleanField(this, 6, e)
        }
        ,
        proto.webcast.im.Message.prototype.getWrdsVersion = function() {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.Message.prototype.setWrdsVersion = function(e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.Message.prototype.getWrdsSubKey = function() {
            return r.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.webcast.im.Message.prototype.setWrdsSubKey = function(e) {
            return r.Message.setProto3StringField(this, 8, e)
        }
        ,
        s.object.extend(t, proto.webcast.im)
    },
    8401: function(e, t, o) {
        "use strict";
        o.d(t, {
            P: function() {
                return d
            }
        });
        var r = o(67457)
          , s = o(56900)
          , i = o(46767)
          , a = o(58711)
          , n = o(95189)
          , p = o(42537);
        function c(e) {
            const t = Object.keys(e);
            return t.length ? t.reduce(((t,o)=>{
                var r;
                return `${t}${t ? "&" : ""}${o}=${String(null !== (r = e[o]) && void 0 !== r ? r : "")}`
            }
            ), "") : ""
        }
        class m {
            constructor(e) {
                const t = function(e) {
                    const {app_name: t, routeParamsMap: o, pushServer: i} = e
                      , a = (0,
                    r.__rest)(e, ["app_name", "routeParamsMap", "pushServer"])
                      , n = {};
                    if (e.routeParamsMap)
                        for (const [r,s] of e.routeParamsMap.entries())
                            n[r] = s;
                    return `${i}?${c(Object.assign(Object.assign({
                        app_name: t,
                        version_code: s.ry,
                        webcast_sdk_version: s.Jn,
                        update_version_code: s.Jn,
                        compress: "gzip"
                    }, n), a))}`
                }(e);
                "undefined" != typeof WebSocket && (this.socket = new WebSocket(t),
                this.socket.binaryType = "arraybuffer")
            }
            onError(e) {
                this.socket.addEventListener("error", e)
            }
            onMessage(e) {
                this.socket.addEventListener("message", e)
            }
            onOpen(e) {
                this.socket.addEventListener("open", e)
            }
            onClose(e) {
                this.socket.addEventListener("close", e)
            }
        }
        class u extends n.P {
            constructor(e) {
                super({
                    debug: e.debug,
                    modules: e.modules
                }),
                this.heartbeatDuration = 1e4,
                this.pingStarted = !1,
                this.cursor = "",
                this.internalExt = "",
                this.socketProps = e
            }
            stopSocket() {
                this.pingStarted = !1,
                clearTimeout(this.pingTimer),
                this.client && (this.client.socket.close(),
                this.client = undefined)
            }
            stop() {
                this.stopSocket(),
                super.stop()
            }
            fetchSocketServer(e, t, o) {
                if (!("WebSocket"in window))
                    return o(new Error("not support websocket"));
                const s = this.socketProps
                  , {modules: i} = s
                  , a = (0,
                r.__rest)(s, ["modules"]);
                this.info("start fetchSocketServer", (()=>e)),
                this.heartbeatDuration = Number(e.heartbeatDuration),
                this.stopSocket(),
                this.emitPerformanceEvent("live_im_socket_start", {
                    initConfig: this.socketProps,
                    startConfig: e
                }),
                this.client = new m(Object.assign(Object.assign({
                    internal_ext: this.internalExt,
                    cursor: this.cursor
                }, a), e)),
                this.client.onMessage((e=>{
                    this.bindClientMessage(e, o)
                }
                )),
                this.client.onError((t=>{
                    this.emitPerformanceEvent("live_im_socket_failed", {
                        initConfig: this.socketProps,
                        startConfig: e,
                        error: {
                            name: t.type,
                            message: "live_im_socket_failed"
                        }
                    }),
                    o(new Error(t.type)),
                    this.info("fetchSocketServer socket error: ", (()=>t)),
                    this.pingStarted = !1
                }
                )),
                this.client.onClose((t=>{
                    this.emitPerformanceEvent("live_im_socket_close", {
                        initConfig: this.socketProps,
                        startConfig: e,
                        error: {
                            name: t.type,
                            message: "live_im_socket_close"
                        }
                    }),
                    this.info("fetchSocketServer socket close: ", (()=>t)),
                    this.pingStarted && (o(new Error(t.type)),
                    this.pingStarted = !1)
                }
                )),
                this.client.onOpen((()=>{
                    this.emitPerformanceEvent("live_im_socket_success", {
                        initConfig: this.socketProps,
                        startConfig: e
                    }),
                    t(),
                    this.pingStarted = !0,
                    this.ping()
                }
                ))
            }
            ping() {
                const e = Math.max(1e4, Number(this.heartbeatDuration));
                if (this.client && 1 === this.client.socket.readyState) {
                    const e = new p.PushFrame;
                    e.setPayloadType("hb"),
                    this.client.socket.send(e.serializeBinary())
                }
                this.pingTimer = window.setTimeout((()=>{
                    this.pingStarted && this.ping()
                }
                ), e)
            }

            bindClientMessage(e, t) {
                if (this.client) {
                    const o = p.PushFrame.deserializeBinary(e.data)
                      , r = i.Response.deserializeBinary(function(e) {
                        for (const t of Object.values(e.getHeadersList()))
                            if ("compress_type" === t.getKey() && "gzip" === t.getValue())
                                return !0;
                        return !1
                    }(o) ? (0,
                    a.ec)(o.getPayload()) : o.getPayload_asU8());
                    if (r.getNeedAck()) {
                        let e = r.getInternalExt()
                          , t = r.getCursor();
                        (o.getHeadersList() || []).forEach((o=>{
                            "im-internal_ext" === (null == o ? void 0 : o.getKey()) && (e = null == o ? void 0 : o.getValue()),
                            "im-cursor" === (null == o ? void 0 : o.getKey()) && (t = null == o ? void 0 : o.getValue())
                        }
                        )),
                        this.internalExt = e,
                        this.cursor = t;
                        const s = new p.PushFrame;
                        s.setPayloadType("ack"),
                        s.setPayload(function(e) {
                            const t = [];
                            for (const o of e) {
                                const e = o.charCodeAt(0);
                                e < 128 ? t.push(e) : e < 2048 ? (t.push(192 + (e >> 6)),
                                t.push(128 + (63 & e))) : e < 65536 && (t.push(224 + (e >> 12)),
                                t.push(128 + (e >> 6 & 63)),
                                t.push(128 + (63 & e)))
                            }
                            return Uint8Array.from(t)
                        }(e)),
                        s.setLogid(o.getLogid()),
                        this.client.socket.send(s.serializeBinary())
                    }
                    if ("msg" === o.getPayloadType() && (this.info("fetchSocketServer socket response: ", (()=>r.toObject())),
                    this.emit(r)),
                    "close" === o.getPayloadType())
                        return t(new Error("close by payloadtype"))
                }
            }
        }
        const g = function(e=1e3) {
            return (0,
            r.__awaiter)(this, void 0, void 0, (function*() {
                return new Promise((t=>{
                    "undefined" != typeof window && window.setTimeout((()=>{
                        t()
                    }
                    ), e)
                }
                ))
            }
            ))
        };
        class l {
            abort() {
                this.xhr && this.xhr.abort()
            }
            getAllResponseHeaders() {
                const e = this.xhr.getAllResponseHeaders()
                  , t = null == e ? void 0 : e.trim().split(/[\r\n]+/)
                  , o = {};
                return t.forEach((e=>{
                    const t = e.split(": ")
                      , r = t.shift()
                      , s = t.join(": ");
                    o[r] = s
                }
                )),
                o
            }
            fetch(e) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function*() {
                    this.xhr = new XMLHttpRequest;
                    const {xhr: t} = this;
                    return t.timeout = 1e4,
                    t.responseType = "arraybuffer",
                    new Promise(((o,r)=>{
                        try {
                            t.open("GET", e, !0),
                            t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                            t.withCredentials = !0,
                            t.onload = function() {
                                4 === t.readyState ? 200 === t.status && t.response && o(t.response) : r(new Error(t.response))
                            }
                            ,
                            t.onerror = e=>{
                                r(e)
                            }
                            ,
                            t.ontimeout = e=>{
                                r(e)
                            }
                            ,
                            t.send()
                        } catch (s) {
                            r(s)
                        }
                    }
                    ))
                }
                ))
            }
        }
        class d extends u {
            constructor(e) {
                super(e),
                this.isStopped = !1,
                this.isStarted = !1,
                this.stopPolling = !1,
                this.isTryingSocket = !1,
                this.fetchRule = 1,
                this.defaultInterval = 1e3,
                this.errorInterval = 1e4,
                this.props = e,
                this.xhrInnerReponseHeader = null
            }
            get xhrReponseHeader() {
                var e;
                return null !== (e = this.xhrInnerReponseHeader) && void 0 !== e ? e : this.xhr.getAllResponseHeaders()
            }
            start(e) {
                this.isStarted && new Error("[live-im-sdk] you have started polling!"),
                this.isStarted = !0,
                this.isStopped = !1,
                this.stopPolling = !1,
                this.emitPerformanceEvent("live_im_fetch_config", {
                    initConfig: this.props,
                    startConfig: e
                }),
                this.startRecursiveFetch(e, {
                    fetch_rule: 1,
                    last_rtt: "0"
                })
            }
            stop() {
                this.isStarted && (this.isStopped = !0,
                this.stopPolling = !0,
                this.isStarted = !1,
                this.isTryingSocket = !1,
                super.stop(),
                this.xhr.abort(),
                this.cursor = "",
                this.internalExt = "")
            }
            fetchImServer(e) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function*() {
                    const t = this.props
                      , {host: o, im_path: a, did_rule: n, device_id: p, modules: m} = t
                      , u = (0,
                    r.__rest)(t, ["host", "im_path", "did_rule", "device_id", "modules"])
                      , g = `${o}${a || s.xr}`
                      , d = c(Object.assign(Object.assign(Object.assign(Object.assign({
                        version_code: s.ry,
                        resp_content_type: "protobuf",
                        did_rule: null != n ? n : p ? 0 : 3,
                        device_id: p
                    }, (0,
                    s.PN)()), u), e), {
                        fetch_rule: this.fetchRule,
                        cursor: this.cursor,
                        internal_ext: this.internalExt
                    }));
                    return this.xhr = new l,
                    yield this.xhr.fetch(`${g}?${d}`).then((e=>{
                        if (this.isStopped || this.stopPolling)
                            return;
                        const t = i.Response.deserializeBinary(new Uint8Array(e));
                        return this.cursor = t.getCursor(),
                        this.internalExt = t.getInternalExt(),
                        this.info("fetch im server response", (()=>t.toObject())),
                        this.emit(t),
                        this.xhrInnerReponseHeader = this.xhr.getAllResponseHeaders(),
                        t
                    }
                    ))
                }
                ))
            }
            trySocketServer(e, t) {
                if (this.isTryingSocket)
                    return;
                const o = this.props
                  , {modules: i} = o
                  , a = (0,
                r.__rest)(o, ["modules"]);
                this.isTryingSocket = !0,
                this.fetchRule = 2,
                super.fetchSocketServer(Object.assign(Object.assign(Object.assign({}, (0,
                s.PN)()), a), {
                    identity: e.identity,
                    room_id: e.room_id,
                    pushServer: t.getPushServer(),
                    routeParamsMap: t.getRouteParamsMap(),
                    heartbeatDuration: t.getHeartbeatDuration()
                }), (()=>{
                    this.stopPolling = !0,
                    this.fetchRule = 1
                }
                ), (t=>{
                    super.stopSocket(),
                    this.isTryingSocket = !1,
                    this.stopPolling = !1,
                    this.fetchRule = 1,
                    this.emitPerformanceEvent("live_im_socket_switch_to_polling", {
                        initConfig: this.props,
                        startConfig: e
                    })
                }
                ))
            }
            startRecursiveFetch(e, t) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function*() {
                    if (this.isStopped)
                        return;
                    const {last_rtt: o="0"} = null != t ? t : {}
                      , r = Date.now();
                    let s = null;
                    this.stopPolling || (this.emitPerformanceEvent("live_im_polling_start", {
                        initConfig: this.props,
                        startConfig: e
                    }),
                    s = yield this.fetchImServer(Object.assign(Object.assign({}, e), {
                        last_rtt: o
                    })).catch((t=>(this.emitPerformanceEvent("live_im_polling_error", {
                        initConfig: this.props,
                        startConfig: e,
                        error: t
                    }),
                    null)))),
                    this.isTryingSocket || 1 !== (null == s ? void 0 : s.getFetchType()) || (this.emitPerformanceEvent("live_im_polling_switch_to_socket", {
                        initConfig: this.props,
                        startConfig: e
                    }),
                    this.trySocketServer(e, s)),
                    s ? yield g(Math.max(Number(s.getFetchInterval()), this.defaultInterval)) : yield g(this.errorInterval),
                    this.startRecursiveFetch(e, {
                        last_rtt: s ? String(Date.now() - r) : "-1"
                    })
                }
                ))
            }
        }
    }
}]);
