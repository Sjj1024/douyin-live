(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[4919], {
    83776: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.DiggMessage", null, a), proto.webcast.im.DiggMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DiggMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DiggMessage.displayName = "proto.webcast.im.DiggMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DiggMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DiggMessage.toObject(e, this)
        }, proto.webcast.im.DiggMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                diggCount: r.Message.getFieldWithDefault(t, 2, "0"),
                duration: r.Message.getFieldWithDefault(t, 3, "0"),
                color: r.Message.getFieldWithDefault(t, 4, "0"),
                user: (s = t.getUser()) && i.User.toObject(e, s),
                icon: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DiggMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DiggMessage;
            return proto.webcast.im.DiggMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DiggMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setDiggCount(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setDuration(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setColor(s);
                        break;
                    case 5:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 6:
                        s = t.readString();
                        e.setIcon(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DiggMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DiggMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DiggMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getDiggCount(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getDuration(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getColor(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), null != (s = e.getUser()) && t.writeMessage(5, s, i.User.serializeBinaryToWriter), (s = e.getIcon()).length > 0 && t.writeString(6, s)
        }, proto.webcast.im.DiggMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DiggMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DiggMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DiggMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DiggMessage.prototype.getDiggCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.DiggMessage.prototype.setDiggCount = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.DiggMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.DiggMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.DiggMessage.prototype.getColor = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.DiggMessage.prototype.setColor = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.DiggMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 5)
        }, proto.webcast.im.DiggMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.DiggMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.DiggMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.DiggMessage.prototype.getIcon = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.DiggMessage.prototype.setIcon = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 16093: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(98284);
        o.object.extend(proto, n);
        var g = s(8411);
        o.object.extend(proto, g), o.exportSymbol("proto.webcast.im.CeremonyMessage", null, a), o.exportSymbol("proto.webcast.im.DLiveMessage", null, a), o.exportSymbol("proto.webcast.im.OfficialRoomMessage", null, a), o.exportSymbol("proto.webcast.im.RcmdUser", null, a), o.exportSymbol("proto.webcast.im.RecommendUsersMessage", null, a), o.exportSymbol("proto.webcast.im.UserRoom", null, a), proto.webcast.im.DLiveMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.DLiveMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.DLiveMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DLiveMessage.displayName = "proto.webcast.im.DLiveMessage"), proto.webcast.im.OfficialRoomMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.OfficialRoomMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.OfficialRoomMessage.displayName = "proto.webcast.im.OfficialRoomMessage"), proto.webcast.im.CeremonyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CeremonyMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.CeremonyMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.CeremonyMessage.displayName = "proto.webcast.im.CeremonyMessage"), proto.webcast.im.UserRoom = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.UserRoom, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.UserRoom.displayName = "proto.webcast.im.UserRoom"), proto.webcast.im.RcmdUser = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.RcmdUser, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.RcmdUser.displayName = "proto.webcast.im.RcmdUser"), proto.webcast.im.RecommendUsersMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.RecommendUsersMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.RecommendUsersMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.RecommendUsersMessage.displayName = "proto.webcast.im.RecommendUsersMessage"), proto.webcast.im.DLiveMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DLiveMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DLiveMessage.toObject(e, this)
        }, proto.webcast.im.DLiveMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                roomsList: null == (s = r.Message.getRepeatedField(t, 2)) ? undefined : s,
                maxPushDelayTime: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DLiveMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DLiveMessage;
            return proto.webcast.im.DLiveMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DLiveMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.addRooms(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setMaxPushDelayTime(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DLiveMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DLiveMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DLiveMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), (s = e.getRoomsList()).length > 0 && t.writeRepeatedString(2, s), s = e.getMaxPushDelayTime(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s)
        }, proto.webcast.im.DLiveMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.DLiveMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DLiveMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DLiveMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DLiveMessage.prototype.getRoomsList = function () {
            return r.Message.getRepeatedField(this, 2)
        }, proto.webcast.im.DLiveMessage.prototype.setRoomsList = function (e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.webcast.im.DLiveMessage.prototype.addRooms = function (e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.webcast.im.DLiveMessage.prototype.clearRoomsList = function () {
            return this.setRoomsList([])
        }, proto.webcast.im.DLiveMessage.prototype.getMaxPushDelayTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.DLiveMessage.prototype.setMaxPushDelayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.OfficialRoomMessage.prototype.toObject = function (e) {
            return proto.webcast.im.OfficialRoomMessage.toObject(e, this)
        }, proto.webcast.im.OfficialRoomMessage.toObject = function (e, t) {
            var s, r = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                officialRoomInfo: (s = t.getOfficialRoomInfo()) && n.OfficialRoomInfo.toObject(e, s)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.OfficialRoomMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.OfficialRoomMessage;
            return proto.webcast.im.OfficialRoomMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.OfficialRoomMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.OfficialRoomInfo;
                        t.readMessage(s, n.OfficialRoomInfo.deserializeBinaryFromReader), e.setOfficialRoomInfo(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.OfficialRoomMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.OfficialRoomMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.OfficialRoomMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), null != (s = e.getOfficialRoomInfo()) && t.writeMessage(2, s, n.OfficialRoomInfo.serializeBinaryToWriter)
        }, proto.webcast.im.OfficialRoomMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.OfficialRoomMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.OfficialRoomMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.OfficialRoomMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.OfficialRoomMessage.prototype.getOfficialRoomInfo = function () {
            return r.Message.getWrapperField(this, n.OfficialRoomInfo, 2)
        }, proto.webcast.im.OfficialRoomMessage.prototype.setOfficialRoomInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.OfficialRoomMessage.prototype.clearOfficialRoomInfo = function () {
            return this.setOfficialRoomInfo(undefined)
        }, proto.webcast.im.OfficialRoomMessage.prototype.hasOfficialRoomInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.CeremonyMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CeremonyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CeremonyMessage.toObject(e, this)
        }, proto.webcast.im.CeremonyMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                itemsList: r.Message.toObjectList(t.getItemsList(), proto.webcast.im.UserRoom.toObject, e),
                maxPushDelayTime: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.CeremonyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.CeremonyMessage;
            return proto.webcast.im.CeremonyMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.CeremonyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new proto.webcast.im.UserRoom;
                        t.readMessage(s, proto.webcast.im.UserRoom.deserializeBinaryFromReader), e.addItems(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setMaxPushDelayTime(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CeremonyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CeremonyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CeremonyMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), (s = e.getItemsList()).length > 0 && t.writeRepeatedMessage(2, s, proto.webcast.im.UserRoom.serializeBinaryToWriter), s = e.getMaxPushDelayTime(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s)
        }, proto.webcast.im.CeremonyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.CeremonyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CeremonyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CeremonyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CeremonyMessage.prototype.getItemsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.UserRoom, 2)
        }, proto.webcast.im.CeremonyMessage.prototype.setItemsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.CeremonyMessage.prototype.addItems = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.UserRoom, t)
        }, proto.webcast.im.CeremonyMessage.prototype.clearItemsList = function () {
            return this.setItemsList([])
        }, proto.webcast.im.CeremonyMessage.prototype.getMaxPushDelayTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.CeremonyMessage.prototype.setMaxPushDelayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserRoom.prototype.toObject = function (e) {
            return proto.webcast.im.UserRoom.toObject(e, this)
        }, proto.webcast.im.UserRoom.toObject = function (e, t) {
            var s = {
                type: r.Message.getFieldWithDefault(t, 1, "0"),
                room: r.Message.getFieldWithDefault(t, 2, ""),
                user: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.UserRoom.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.UserRoom;
            return proto.webcast.im.UserRoom.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.UserRoom.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readInt64String();
                        e.setType(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setRoom(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setUser(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UserRoom.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserRoom.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UserRoom.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            s = e.getType(), 0 !== parseInt(s, 10) && t.writeInt64String(1, s), (s = e.getRoom()).length > 0 && t.writeString(2, s), (s = e.getUser()).length > 0 && t.writeString(3, s)
        }, proto.webcast.im.UserRoom.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.UserRoom.prototype.setType = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.UserRoom.prototype.getRoom = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.UserRoom.prototype.setRoom = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.UserRoom.prototype.getUser = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.UserRoom.prototype.setUser = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RcmdUser.prototype.toObject = function (e) {
            return proto.webcast.im.RcmdUser.toObject(e, this)
        }, proto.webcast.im.RcmdUser.toObject = function (e, t) {
            var s = {
                user: r.Message.getFieldWithDefault(t, 1, ""),
                textBeforeAction: r.Message.getFieldWithDefault(t, 2, ""),
                textAfterAction: r.Message.getFieldWithDefault(t, 3, ""),
                authenticationInfo: r.Message.getFieldWithDefault(t, 4, ""),
                editScript: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.RcmdUser.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.RcmdUser;
            return proto.webcast.im.RcmdUser.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.RcmdUser.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readString();
                        e.setUser(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setTextBeforeAction(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setTextAfterAction(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setAuthenticationInfo(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setEditScript(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RcmdUser.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RcmdUser.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RcmdUser.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getUser()).length > 0 && t.writeString(1, s), (s = e.getTextBeforeAction()).length > 0 && t.writeString(2, s), (s = e.getTextAfterAction()).length > 0 && t.writeString(3, s), (s = e.getAuthenticationInfo()).length > 0 && t.writeString(4, s), (s = e.getEditScript()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.RcmdUser.prototype.getUser = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.RcmdUser.prototype.setUser = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.RcmdUser.prototype.getTextBeforeAction = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RcmdUser.prototype.setTextBeforeAction = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RcmdUser.prototype.getTextAfterAction = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RcmdUser.prototype.setTextAfterAction = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RcmdUser.prototype.getAuthenticationInfo = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.RcmdUser.prototype.setAuthenticationInfo = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.RcmdUser.prototype.getEditScript = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.RcmdUser.prototype.setEditScript = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.RecommendUsersMessage.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RecommendUsersMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RecommendUsersMessage.toObject(e, this)
        }, proto.webcast.im.RecommendUsersMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                listTitle: r.Message.getFieldWithDefault(t, 2, ""),
                usersList: r.Message.toObjectList(t.getUsersList(), proto.webcast.im.RcmdUser.toObject, e),
                imgVertical: (s = t.getImgVertical()) && g.Image.toObject(e, s),
                imgHorizontal: (s = t.getImgHorizontal()) && g.Image.toObject(e, s),
                displayTime: r.Message.getFieldWithDefault(t, 6, "0"),
                maxPushDelayTime: r.Message.getFieldWithDefault(t, 7, "0"),
                checkAlive: r.Message.getBooleanFieldWithDefault(t, 8, !1)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.RecommendUsersMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.RecommendUsersMessage;
            return proto.webcast.im.RecommendUsersMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.RecommendUsersMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setListTitle(s);
                        break;
                    case 3:
                        s = new proto.webcast.im.RcmdUser;
                        t.readMessage(s, proto.webcast.im.RcmdUser.deserializeBinaryFromReader), e.addUsers(s);
                        break;
                    case 4:
                        s = new g.Image;
                        t.readMessage(s, g.Image.deserializeBinaryFromReader), e.setImgVertical(s);
                        break;
                    case 5:
                        s = new g.Image;
                        t.readMessage(s, g.Image.deserializeBinaryFromReader), e.setImgHorizontal(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setDisplayTime(s);
                        break;
                    case 7:
                        s = t.readInt64String();
                        e.setMaxPushDelayTime(s);
                        break;
                    case 8:
                        s = t.readBool();
                        e.setCheckAlive(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RecommendUsersMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RecommendUsersMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.RecommendUsersMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), (s = e.getListTitle()).length > 0 && t.writeString(2, s), (s = e.getUsersList()).length > 0 && t.writeRepeatedMessage(3, s, proto.webcast.im.RcmdUser.serializeBinaryToWriter), null != (s = e.getImgVertical()) && t.writeMessage(4, s, g.Image.serializeBinaryToWriter), null != (s = e.getImgHorizontal()) && t.writeMessage(5, s, g.Image.serializeBinaryToWriter), s = e.getDisplayTime(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), s = e.getMaxPushDelayTime(), 0 !== parseInt(s, 10) && t.writeInt64String(7, s), (s = e.getCheckAlive()) && t.writeBool(8, s)
        },proto.webcast.im.RecommendUsersMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        },proto.webcast.im.RecommendUsersMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.RecommendUsersMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.RecommendUsersMessage.prototype.getListTitle = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.RecommendUsersMessage.prototype.setListTitle = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.getUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.RcmdUser, 3)
        },proto.webcast.im.RecommendUsersMessage.prototype.setUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.addUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.im.RcmdUser, t)
        },proto.webcast.im.RecommendUsersMessage.prototype.clearUsersList = function () {
            return this.setUsersList([])
        },proto.webcast.im.RecommendUsersMessage.prototype.getImgVertical = function () {
            return r.Message.getWrapperField(this, g.Image, 4)
        },proto.webcast.im.RecommendUsersMessage.prototype.setImgVertical = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.clearImgVertical = function () {
            return this.setImgVertical(undefined)
        },proto.webcast.im.RecommendUsersMessage.prototype.hasImgVertical = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.im.RecommendUsersMessage.prototype.getImgHorizontal = function () {
            return r.Message.getWrapperField(this, g.Image, 5)
        },proto.webcast.im.RecommendUsersMessage.prototype.setImgHorizontal = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.clearImgHorizontal = function () {
            return this.setImgHorizontal(undefined)
        },proto.webcast.im.RecommendUsersMessage.prototype.hasImgHorizontal = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.im.RecommendUsersMessage.prototype.getDisplayTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.RecommendUsersMessage.prototype.setDisplayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.getMaxPushDelayTime = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.RecommendUsersMessage.prototype.setMaxPushDelayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },proto.webcast.im.RecommendUsersMessage.prototype.getCheckAlive = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.im.RecommendUsersMessage.prototype.setCheckAlive = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        },o.object.extend(t, proto.webcast.im)
    }, 11652: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.DolphinSettingUpdateMessage", null, a), proto.webcast.im.DolphinSettingUpdateMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DolphinSettingUpdateMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DolphinSettingUpdateMessage.displayName = "proto.webcast.im.DolphinSettingUpdateMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DolphinSettingUpdateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DolphinSettingUpdateMessage.toObject(e, this)
        }, proto.webcast.im.DolphinSettingUpdateMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                settingversion: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DolphinSettingUpdateMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DolphinSettingUpdateMessage;
            return proto.webcast.im.DolphinSettingUpdateMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DolphinSettingUpdateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setSettingversion(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DolphinSettingUpdateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DolphinSettingUpdateMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getSettingversion(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s)
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.getSettingversion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.DolphinSettingUpdateMessage.prototype.setSettingversion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 70481: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.DonationMessage", null, a), proto.webcast.im.DonationMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.DonationMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.DonationMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DonationMessage.displayName = "proto.webcast.im.DonationMessage"), proto.webcast.im.DonationMessage.repeatedFields_ = [4, 5], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DonationMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DonationMessage.toObject(e, this)
        }, proto.webcast.im.DonationMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                total: r.Message.getFieldWithDefault(t, 2, "0"),
                currency: r.Message.getFieldWithDefault(t, 3, ""),
                sponsorList: r.Message.toObjectList(t.getSponsorList(), i.User.toObject, e),
                userList: r.Message.toObjectList(t.getUserList(), i.User.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DonationMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DonationMessage;
            return proto.webcast.im.DonationMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DonationMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setTotal(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setCurrency(s);
                        break;
                    case 4:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.addSponsor(s);
                        break;
                    case 5:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.addUser(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DonationMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DonationMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DonationMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getTotal(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), (s = e.getCurrency()).length > 0 && t.writeString(3, s), (s = e.getSponsorList()).length > 0 && t.writeRepeatedMessage(4, s, i.User.serializeBinaryToWriter), (s = e.getUserList()).length > 0 && t.writeRepeatedMessage(5, s, i.User.serializeBinaryToWriter)
        }, proto.webcast.im.DonationMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DonationMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DonationMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DonationMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DonationMessage.prototype.getTotal = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.DonationMessage.prototype.setTotal = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.DonationMessage.prototype.getCurrency = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.DonationMessage.prototype.setCurrency = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.DonationMessage.prototype.getSponsorList = function () {
            return r.Message.getRepeatedWrapperField(this, i.User, 4)
        }, proto.webcast.im.DonationMessage.prototype.setSponsorList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.DonationMessage.prototype.addSponsor = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.User, t)
        }, proto.webcast.im.DonationMessage.prototype.clearSponsorList = function () {
            return this.setSponsorList([])
        }, proto.webcast.im.DonationMessage.prototype.getUserList = function () {
            return r.Message.getRepeatedWrapperField(this, i.User, 5)
        }, proto.webcast.im.DonationMessage.prototype.setUserList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        }, proto.webcast.im.DonationMessage.prototype.addUser = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.webcast.data.User, t)
        }, proto.webcast.im.DonationMessage.prototype.clearUserList = function () {
            return this.setUserList([])
        }, o.object.extend(t, proto.webcast.im)
    }, 55345: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(99222);
        o.object.extend(proto, n);
        var g = s(34688);
        o.object.extend(proto, g);
        var p = s(50684);
        o.object.extend(proto, p);
        var m = s(36973);
        o.object.extend(proto, m), o.exportSymbol("proto.webcast.im.DoodleGiftMessage", null, a), proto.webcast.im.DoodleGiftMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DoodleGiftMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DoodleGiftMessage.displayName = "proto.webcast.im.DoodleGiftMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DoodleGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DoodleGiftMessage.toObject(e, this)
        }, proto.webcast.im.DoodleGiftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && p.Common.toObject(e, s),
                giftId: r.Message.getFieldWithDefault(t, 2, "0"),
                fanTicketCount: r.Message.getFieldWithDefault(t, 3, "0"),
                user: (s = t.getUser()) && i.User.toObject(e, s),
                toUser: (s = t.getToUser()) && i.User.toObject(e, s),
                compose: r.Message.getFieldWithDefault(t, 6, ""),
                roomFanTicketCount: r.Message.getFieldWithDefault(t, 7, "0"),
                priority: (s = t.getPriority()) && g.GiftIMPriority.toObject(e, s),
                logId: r.Message.getFieldWithDefault(t, 9, ""),
                publicAreaCommon: (s = t.getPublicAreaCommon()) && p.PublicAreaCommon.toObject(e, s),
                trayDisplayText: (s = t.getTrayDisplayText()) && n.Text.toObject(e, s),
                trayInfo: (s = t.getTrayInfo()) && m.GiftTrayInfo.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DoodleGiftMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DoodleGiftMessage;
            return proto.webcast.im.DoodleGiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DoodleGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new p.Common;
                        t.readMessage(s, p.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGiftId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setFanTicketCount(s);
                        break;
                    case 4:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 5:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setToUser(s);
                        break;
                    case 6:
                        s = t.readString();
                        e.setCompose(s);
                        break;
                    case 7:
                        s = t.readInt64String();
                        e.setRoomFanTicketCount(s);
                        break;
                    case 8:
                        s = new g.GiftIMPriority;
                        t.readMessage(s, g.GiftIMPriority.deserializeBinaryFromReader), e.setPriority(s);
                        break;
                    case 9:
                        s = t.readString();
                        e.setLogId(s);
                        break;
                    case 10:
                        s = new p.PublicAreaCommon;
                        t.readMessage(s, p.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(s);
                        break;
                    case 11:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setTrayDisplayText(s);
                        break;
                    case 12:
                        s = new m.GiftTrayInfo;
                        t.readMessage(s, m.GiftTrayInfo.deserializeBinaryFromReader), e.setTrayInfo(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DoodleGiftMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DoodleGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DoodleGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, p.Common.serializeBinaryToWriter), s = e.getGiftId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), null != (s = e.getUser()) && t.writeMessage(4, s, i.User.serializeBinaryToWriter), null != (s = e.getToUser()) && t.writeMessage(5, s, i.User.serializeBinaryToWriter), (s = e.getCompose()).length > 0 && t.writeString(6, s), s = e.getRoomFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(7, s), null != (s = e.getPriority()) && t.writeMessage(8, s, g.GiftIMPriority.serializeBinaryToWriter), (s = e.getLogId()).length > 0 && t.writeString(9, s), null != (s = e.getPublicAreaCommon()) && t.writeMessage(10, s, p.PublicAreaCommon.serializeBinaryToWriter), null != (s = e.getTrayDisplayText()) && t.writeMessage(11, s, n.Text.serializeBinaryToWriter), null != (s = e.getTrayInfo()) && t.writeMessage(12, s, m.GiftTrayInfo.serializeBinaryToWriter)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, p.Common, 1)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.DoodleGiftMessage.prototype.setGiftId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getFanTicketCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.DoodleGiftMessage.prototype.setFanTicketCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 4)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getToUser = function () {
            return r.Message.getWrapperField(this, i.User, 5)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setToUser = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearToUser = function () {
            return this.setToUser(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasToUser = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getCompose = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.DoodleGiftMessage.prototype.setCompose = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getRoomFanTicketCount = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.DoodleGiftMessage.prototype.setRoomFanTicketCount = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getPriority = function () {
            return r.Message.getWrapperField(this, g.GiftIMPriority, 8)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setPriority = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearPriority = function () {
            return this.setPriority(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasPriority = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getLogId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.DoodleGiftMessage.prototype.setLogId = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, p.PublicAreaCommon, 10)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 10)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getTrayDisplayText = function () {
            return r.Message.getWrapperField(this, n.Text, 11)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setTrayDisplayText = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearTrayDisplayText = function () {
            return this.setTrayDisplayText(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasTrayDisplayText = function () {
            return null != r.Message.getField(this, 11)
        }, proto.webcast.im.DoodleGiftMessage.prototype.getTrayInfo = function () {
            return r.Message.getWrapperField(this, m.GiftTrayInfo, 12)
        }, proto.webcast.im.DoodleGiftMessage.prototype.setTrayInfo = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        }, proto.webcast.im.DoodleGiftMessage.prototype.clearTrayInfo = function () {
            return this.setTrayInfo(undefined)
        }, proto.webcast.im.DoodleGiftMessage.prototype.hasTrayInfo = function () {
            return null != r.Message.getField(this, 12)
        }, o.object.extend(t, proto.webcast.im)
    }, 1219: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n);
        var g = s(99222);
        o.object.extend(proto, g);
        var p = s(77511);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.DoubleLikeHeartMessage", null, a), o.exportSymbol("proto.webcast.im.DoubleLikeTopUserMessage", null, a), o.exportSymbol("proto.webcast.im.LikeUserDetail", null, a), proto.webcast.im.LikeUserDetail = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LikeUserDetail, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LikeUserDetail.displayName = "proto.webcast.im.LikeUserDetail"), proto.webcast.im.DoubleLikeHeartMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.DoubleLikeHeartMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.DoubleLikeHeartMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DoubleLikeHeartMessage.displayName = "proto.webcast.im.DoubleLikeHeartMessage"), proto.webcast.im.DoubleLikeTopUserMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.DoubleLikeTopUserMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.DoubleLikeTopUserMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DoubleLikeTopUserMessage.displayName = "proto.webcast.im.DoubleLikeTopUserMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LikeUserDetail.prototype.toObject = function (e) {
            return proto.webcast.im.LikeUserDetail.toObject(e, this)
        }, proto.webcast.im.LikeUserDetail.toObject = function (e, t) {
            var s,
                o = {user: (s = t.getUser()) && i.User.toObject(e, s), count: r.Message.getFieldWithDefault(t, 2, "0")};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LikeUserDetail.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.LikeUserDetail;
            return proto.webcast.im.LikeUserDetail.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.LikeUserDetail.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setCount(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LikeUserDetail.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LikeUserDetail.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LikeUserDetail.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getUser()) && t.writeMessage(1, s, i.User.serializeBinaryToWriter), s = e.getCount(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s)
        }, proto.webcast.im.LikeUserDetail.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 1)
        }, proto.webcast.im.LikeUserDetail.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LikeUserDetail.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.LikeUserDetail.prototype.hasUser = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LikeUserDetail.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LikeUserDetail.prototype.setCount = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.DoubleLikeHeartMessage.repeatedFields_ = [5], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DoubleLikeHeartMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DoubleLikeHeartMessage.toObject(e, this)
        }, proto.webcast.im.DoubleLikeHeartMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                doubleLikeDetail: (s = t.getDoubleLikeDetail()) && p.DoubleLikeDetail.toObject(e, s),
                selfDisplayText: (s = t.getSelfDisplayText()) && g.Text.toObject(e, s),
                normalDisplayText: (s = t.getNormalDisplayText()) && g.Text.toObject(e, s),
                likeUserListList: r.Message.toObjectList(t.getLikeUserListList(), proto.webcast.im.LikeUserDetail.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DoubleLikeHeartMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DoubleLikeHeartMessage;
            return proto.webcast.im.DoubleLikeHeartMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DoubleLikeHeartMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new p.DoubleLikeDetail;
                        t.readMessage(s, p.DoubleLikeDetail.deserializeBinaryFromReader), e.setDoubleLikeDetail(s);
                        break;
                    case 3:
                        s = new g.Text;
                        t.readMessage(s, g.Text.deserializeBinaryFromReader), e.setSelfDisplayText(s);
                        break;
                    case 4:
                        s = new g.Text;
                        t.readMessage(s, g.Text.deserializeBinaryFromReader), e.setNormalDisplayText(s);
                        break;
                    case 5:
                        s = new proto.webcast.im.LikeUserDetail;
                        t.readMessage(s, proto.webcast.im.LikeUserDetail.deserializeBinaryFromReader), e.addLikeUserList(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DoubleLikeHeartMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DoubleLikeHeartMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), null != (s = e.getDoubleLikeDetail()) && t.writeMessage(2, s, p.DoubleLikeDetail.serializeBinaryToWriter), null != (s = e.getSelfDisplayText()) && t.writeMessage(3, s, g.Text.serializeBinaryToWriter), null != (s = e.getNormalDisplayText()) && t.writeMessage(4, s, g.Text.serializeBinaryToWriter), (s = e.getLikeUserListList()).length > 0 && t.writeRepeatedMessage(5, s, proto.webcast.im.LikeUserDetail.serializeBinaryToWriter)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.getDoubleLikeDetail = function () {
            return r.Message.getWrapperField(this, p.DoubleLikeDetail, 2)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.setDoubleLikeDetail = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.clearDoubleLikeDetail = function () {
            return this.setDoubleLikeDetail(undefined)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.hasDoubleLikeDetail = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.getSelfDisplayText = function () {
            return r.Message.getWrapperField(this, g.Text, 3)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.setSelfDisplayText = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.clearSelfDisplayText = function () {
            return this.setSelfDisplayText(undefined)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.hasSelfDisplayText = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.getNormalDisplayText = function () {
            return r.Message.getWrapperField(this, g.Text, 4)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.setNormalDisplayText = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.clearNormalDisplayText = function () {
            return this.setNormalDisplayText(undefined)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.hasNormalDisplayText = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.getLikeUserListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.LikeUserDetail, 5)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.setLikeUserListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.addLikeUserList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.webcast.im.LikeUserDetail, t)
        }, proto.webcast.im.DoubleLikeHeartMessage.prototype.clearLikeUserListList = function () {
            return this.setLikeUserListList([])
        }, proto.webcast.im.DoubleLikeTopUserMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DoubleLikeTopUserMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DoubleLikeTopUserMessage.toObject(e, this)
        }, proto.webcast.im.DoubleLikeTopUserMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                likeUserListList: r.Message.toObjectList(t.getLikeUserListList(), proto.webcast.im.LikeUserDetail.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DoubleLikeTopUserMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DoubleLikeTopUserMessage;
            return proto.webcast.im.DoubleLikeTopUserMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DoubleLikeTopUserMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new proto.webcast.im.LikeUserDetail;
                        t.readMessage(s, proto.webcast.im.LikeUserDetail.deserializeBinaryFromReader), e.addLikeUserList(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DoubleLikeTopUserMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DoubleLikeTopUserMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), (s = e.getLikeUserListList()).length > 0 && t.writeRepeatedMessage(2, s, proto.webcast.im.LikeUserDetail.serializeBinaryToWriter)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.getLikeUserListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.LikeUserDetail, 2)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.setLikeUserListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.addLikeUserList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.LikeUserDetail, t)
        }, proto.webcast.im.DoubleLikeTopUserMessage.prototype.clearLikeUserListList = function () {
            return this.setLikeUserListList([])
        }, o.object.extend(t, proto.webcast.im)
    }, 21144: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.DouplusIndicatorMessage", null, a), proto.webcast.im.DouplusIndicatorMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DouplusIndicatorMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DouplusIndicatorMessage.displayName = "proto.webcast.im.DouplusIndicatorMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DouplusIndicatorMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DouplusIndicatorMessage.toObject(e, this)
        }, proto.webcast.im.DouplusIndicatorMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                number: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, "0"),
                toast: r.Message.getFieldWithDefault(t, 4, ""),
                buyerNickname: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DouplusIndicatorMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DouplusIndicatorMessage;
            return proto.webcast.im.DouplusIndicatorMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DouplusIndicatorMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setNumber(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setStatus(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setToast(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setBuyerNickname(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DouplusIndicatorMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DouplusIndicatorMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getNumber(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getStatus(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getToast()).length > 0 && t.writeString(4, s), (s = e.getBuyerNickname()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.getNumber = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.setNumber = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.getBuyerNickname = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.DouplusIndicatorMessage.prototype.setBuyerNickname = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 74258: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.DouplusMessage", null, a), proto.webcast.im.DouplusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DouplusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DouplusMessage.displayName = "proto.webcast.im.DouplusMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DouplusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DouplusMessage.toObject(e, this)
        }, proto.webcast.im.DouplusMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                promotion: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DouplusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DouplusMessage;
            return proto.webcast.im.DouplusMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DouplusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setPromotion(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DouplusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DouplusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DouplusMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getPromotion(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s)
        }, proto.webcast.im.DouplusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.DouplusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DouplusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DouplusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DouplusMessage.prototype.getPromotion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.DouplusMessage.prototype.setPromotion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 52945: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.DriveGiftMessage", null, a), proto.webcast.im.DriveGiftMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DriveGiftMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DriveGiftMessage.displayName = "proto.webcast.im.DriveGiftMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DriveGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DriveGiftMessage.toObject(e, this)
        }, proto.webcast.im.DriveGiftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                newCount: r.Message.getFieldWithDefault(t, 2, 0),
                popupUrl: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DriveGiftMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DriveGiftMessage;
            return proto.webcast.im.DriveGiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DriveGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64();
                        e.setNewCount(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setPopupUrl(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DriveGiftMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DriveGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DriveGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), 0 !== (s = e.getNewCount()) && t.writeInt64(2, s), (s = e.getPopupUrl()).length > 0 && t.writeString(3, s)
        }, proto.webcast.im.DriveGiftMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.DriveGiftMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DriveGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DriveGiftMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DriveGiftMessage.prototype.getNewCount = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.DriveGiftMessage.prototype.setNewCount = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.DriveGiftMessage.prototype.getPopupUrl = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.DriveGiftMessage.prototype.setPopupUrl = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 55622: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(8411);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.ProjectDTaskInfo", null, a), o.exportSymbol("proto.webcast.im.ProjectDTaskInfo.AwardType", null, a), proto.webcast.im.ProjectDTaskInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.ProjectDTaskInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.ProjectDTaskInfo.displayName = "proto.webcast.im.ProjectDTaskInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProjectDTaskInfo.prototype.toObject = function (e) {
            return proto.webcast.im.ProjectDTaskInfo.toObject(e, this)
        }, proto.webcast.im.ProjectDTaskInfo.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                atype: r.Message.getFieldWithDefault(t, 2, 0),
                icon: (s = t.getIcon()) && i.Image.toObject(e, s),
                count: r.Message.getFieldWithDefault(t, 4, ""),
                fallbackContext: r.Message.getFieldWithDefault(t, 5, ""),
                awardUrl: r.Message.getFieldWithDefault(t, 6, ""),
                leftTaskCount: r.Message.getFieldWithDefault(t, 7, "0"),
                subTaskId: r.Message.getFieldWithDefault(t, 8, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.ProjectDTaskInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.ProjectDTaskInfo;
            return proto.webcast.im.ProjectDTaskInfo.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.ProjectDTaskInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readEnum();
                        e.setAtype(s);
                        break;
                    case 3:
                        s = new i.Image;
                        t.readMessage(s, i.Image.deserializeBinaryFromReader), e.setIcon(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setCount(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setFallbackContext(s);
                        break;
                    case 6:
                        s = t.readString();
                        e.setAwardUrl(s);
                        break;
                    case 7:
                        s = t.readInt64String();
                        e.setLeftTaskCount(s);
                        break;
                    case 8:
                        s = t.readInt64String();
                        e.setSubTaskId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ProjectDTaskInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ProjectDTaskInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ProjectDTaskInfo.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), 0 !== (s = e.getAtype()) && t.writeEnum(2, s), null != (s = e.getIcon()) && t.writeMessage(3, s, i.Image.serializeBinaryToWriter), (s = e.getCount()).length > 0 && t.writeString(4, s), (s = e.getFallbackContext()).length > 0 && t.writeString(5, s), (s = e.getAwardUrl()).length > 0 && t.writeString(6, s), s = e.getLeftTaskCount(), 0 !== parseInt(s, 10) && t.writeInt64String(7, s), s = e.getSubTaskId(), 0 !== parseInt(s, 10) && t.writeInt64String(8, s)
        }, proto.webcast.im.ProjectDTaskInfo.AwardType = {
            UNKNOWN: 0,
            DIAMOND: 1,
            CASH: 2,
            PICKTICKET: 3
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getAtype = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setAtype = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, i.Image, 3)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setIcon = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setCount = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getFallbackContext = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setFallbackContext = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getAwardUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setAwardUrl = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getLeftTaskCount = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setLeftTaskCount = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.ProjectDTaskInfo.prototype.getSubTaskId = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.ProjectDTaskInfo.prototype.setSubTaskId = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 50146: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.DutyGiftMessage", null, a), proto.webcast.im.DutyGiftMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.DutyGiftMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.DutyGiftMessage.displayName = "proto.webcast.im.DutyGiftMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DutyGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DutyGiftMessage.toObject(e, this)
        }, proto.webcast.im.DutyGiftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                speedyGiftId: r.Message.getFieldWithDefault(t, 5, 0),
                targetScore: r.Message.getFieldWithDefault(t, 6, 0),
                stageCount: r.Message.getFieldWithDefault(t, 7, 0),
                status: r.Message.getFieldWithDefault(t, 8, 0),
                score: r.Message.getFieldWithDefault(t, 9, 0),
                contributeMost: (s = t.getContributeMost()) && i.User.toObject(e, s),
                contributeMostScore: r.Message.getFieldWithDefault(t, 11, 0),
                dutyId: r.Message.getFieldWithDefault(t, 12, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DutyGiftMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.DutyGiftMessage;
            return proto.webcast.im.DutyGiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.DutyGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 5:
                        s = t.readInt32();
                        e.setSpeedyGiftId(s);
                        break;
                    case 6:
                        s = t.readInt32();
                        e.setTargetScore(s);
                        break;
                    case 7:
                        s = t.readInt32();
                        e.setStageCount(s);
                        break;
                    case 8:
                        s = t.readInt32();
                        e.setStatus(s);
                        break;
                    case 9:
                        s = t.readInt32();
                        e.setScore(s);
                        break;
                    case 10:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setContributeMost(s);
                        break;
                    case 11:
                        s = t.readInt32();
                        e.setContributeMostScore(s);
                        break;
                    case 12:
                        s = t.readInt64String();
                        e.setDutyId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DutyGiftMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DutyGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DutyGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), 0 !== (s = e.getSpeedyGiftId()) && t.writeInt32(5, s), 0 !== (s = e.getTargetScore()) && t.writeInt32(6, s), 0 !== (s = e.getStageCount()) && t.writeInt32(7, s), 0 !== (s = e.getStatus()) && t.writeInt32(8, s), 0 !== (s = e.getScore()) && t.writeInt32(9, s), null != (s = e.getContributeMost()) && t.writeMessage(10, s, i.User.serializeBinaryToWriter), 0 !== (s = e.getContributeMostScore()) && t.writeInt32(11, s), s = e.getDutyId(), 0 !== parseInt(s, 10) && t.writeInt64String(12, s)
        }, proto.webcast.im.DutyGiftMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DutyGiftMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DutyGiftMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DutyGiftMessage.prototype.getSpeedyGiftId = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.DutyGiftMessage.prototype.setSpeedyGiftId = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.getTargetScore = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.DutyGiftMessage.prototype.setTargetScore = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.getStageCount = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.DutyGiftMessage.prototype.setStageCount = function (e) {
            return r.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.DutyGiftMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.DutyGiftMessage.prototype.setScore = function (e) {
            return r.Message.setProto3IntField(this, 9, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.getContributeMost = function () {
            return r.Message.getWrapperField(this, i.User, 10)
        }, proto.webcast.im.DutyGiftMessage.prototype.setContributeMost = function (e) {
            return r.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.clearContributeMost = function () {
            return this.setContributeMost(undefined)
        }, proto.webcast.im.DutyGiftMessage.prototype.hasContributeMost = function () {
            return null != r.Message.getField(this, 10)
        }, proto.webcast.im.DutyGiftMessage.prototype.getContributeMostScore = function () {
            return r.Message.getFieldWithDefault(this, 11, 0)
        }, proto.webcast.im.DutyGiftMessage.prototype.setContributeMostScore = function (e) {
            return r.Message.setProto3IntField(this, 11, e)
        }, proto.webcast.im.DutyGiftMessage.prototype.getDutyId = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.DutyGiftMessage.prototype.setDutyId = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 959: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(17050);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.EasterEggMessage", null, a), o.exportSymbol("proto.webcast.im.EasterEggMessageData", null, a), proto.webcast.im.EasterEggMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.EasterEggMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.EasterEggMessage.displayName = "proto.webcast.im.EasterEggMessage"), proto.webcast.im.EasterEggMessageData = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.EasterEggMessageData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.EasterEggMessageData.displayName = "proto.webcast.im.EasterEggMessageData"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EasterEggMessage.prototype.toObject = function (e) {
            return proto.webcast.im.EasterEggMessage.toObject(e, this)
        }, proto.webcast.im.EasterEggMessage.toObject = function (e, t) {
            var s, r = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                data: (s = t.getData()) && proto.webcast.im.EasterEggMessageData.toObject(e, s)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.EasterEggMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.EasterEggMessage;
            return proto.webcast.im.EasterEggMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.EasterEggMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new proto.webcast.im.EasterEggMessageData;
                        t.readMessage(s, proto.webcast.im.EasterEggMessageData.deserializeBinaryFromReader), e.setData(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EasterEggMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EasterEggMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EasterEggMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), null != (s = e.getData()) && t.writeMessage(2, s, proto.webcast.im.EasterEggMessageData.serializeBinaryToWriter)
        }, proto.webcast.im.EasterEggMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.EasterEggMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.EasterEggMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.EasterEggMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.EasterEggMessage.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.EasterEggMessageData, 2)
        }, proto.webcast.im.EasterEggMessage.prototype.setData = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.EasterEggMessage.prototype.clearData = function () {
            return this.setData(undefined)
        }, proto.webcast.im.EasterEggMessage.prototype.hasData = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EasterEggMessageData.prototype.toObject = function (e) {
            return proto.webcast.im.EasterEggMessageData.toObject(e, this)
        }, proto.webcast.im.EasterEggMessageData.toObject = function (e, t) {
            var s = {
                hasEasterEgg: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                stage: r.Message.getFieldWithDefault(t, 2, "0"),
                totalStage: r.Message.getFieldWithDefault(t, 3, "0"),
                effectsNum: r.Message.getFieldWithDefault(t, 4, "0"),
                startCount: r.Message.getFieldWithDefault(t, 5, "0"),
                endCount: r.Message.getFieldWithDefault(t, 6, "0"),
                count: r.Message.getFieldWithDefault(t, 7, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.EasterEggMessageData.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.EasterEggMessageData;
            return proto.webcast.im.EasterEggMessageData.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.EasterEggMessageData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readBool();
                        e.setHasEasterEgg(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setStage(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setTotalStage(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setEffectsNum(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setStartCount(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setEndCount(s);
                        break;
                    case 7:
                        s = t.readInt64String();
                        e.setCount(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EasterEggMessageData.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EasterEggMessageData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EasterEggMessageData.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getHasEasterEgg()) && t.writeBool(1, s), s = e.getStage(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getTotalStage(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getEffectsNum(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), s = e.getStartCount(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getEndCount(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), s = e.getCount(), 0 !== parseInt(s, 10) && t.writeInt64String(7, s)
        }, proto.webcast.im.EasterEggMessageData.prototype.getHasEasterEgg = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.EasterEggMessageData.prototype.setHasEasterEgg = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, proto.webcast.im.EasterEggMessageData.prototype.getStage = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.EasterEggMessageData.prototype.setStage = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.EasterEggMessageData.prototype.getTotalStage = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.EasterEggMessageData.prototype.setTotalStage = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.EasterEggMessageData.prototype.getEffectsNum = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.EasterEggMessageData.prototype.setEffectsNum = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.EasterEggMessageData.prototype.getStartCount = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.EasterEggMessageData.prototype.setStartCount = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.EasterEggMessageData.prototype.getEndCount = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.EasterEggMessageData.prototype.setEndCount = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.EasterEggMessageData.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.EasterEggMessageData.prototype.setCount = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 40619: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.CornerReachMessage", null, a), o.exportSymbol("proto.webcast.im.TempStateAreaReachMessage", null, a), o.exportSymbol("proto.webcast.im.TempStateAreaReachMessage.Resource", null, a), proto.webcast.im.CornerReachMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.CornerReachMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.CornerReachMessage.displayName = "proto.webcast.im.CornerReachMessage"), proto.webcast.im.TempStateAreaReachMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.TempStateAreaReachMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.TempStateAreaReachMessage.displayName = "proto.webcast.im.TempStateAreaReachMessage"), proto.webcast.im.TempStateAreaReachMessage.Resource = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.TempStateAreaReachMessage.Resource, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.TempStateAreaReachMessage.Resource.displayName = "proto.webcast.im.TempStateAreaReachMessage.Resource"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CornerReachMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CornerReachMessage.toObject(e, this)
        }, proto.webcast.im.CornerReachMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                duration: r.Message.getFieldWithDefault(t, 2, "0"),
                elemType: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.CornerReachMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.CornerReachMessage;
            return proto.webcast.im.CornerReachMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.CornerReachMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setDuration(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setElemType(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CornerReachMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CornerReachMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CornerReachMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getDuration(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getElemType(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s)
        }, proto.webcast.im.CornerReachMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CornerReachMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CornerReachMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CornerReachMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CornerReachMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.CornerReachMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.CornerReachMessage.prototype.getElemType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.CornerReachMessage.prototype.setElemType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TempStateAreaReachMessage.prototype.toObject = function (e) {
            return proto.webcast.im.TempStateAreaReachMessage.toObject(e, this)
        }, proto.webcast.im.TempStateAreaReachMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                elemType: r.Message.getFieldWithDefault(t, 2, "0"),
                elemId: r.Message.getFieldWithDefault(t, 3, "0"),
                itemId: r.Message.getFieldWithDefault(t, 4, "0"),
                status: r.Message.getFieldWithDefault(t, 5, "0"),
                resource: (s = t.getResource()) && proto.webcast.im.TempStateAreaReachMessage.Resource.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.TempStateAreaReachMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.TempStateAreaReachMessage;
            return proto.webcast.im.TempStateAreaReachMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.TempStateAreaReachMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setElemType(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setElemId(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setItemId(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setStatus(s);
                        break;
                    case 6:
                        s = new proto.webcast.im.TempStateAreaReachMessage.Resource;
                        t.readMessage(s, proto.webcast.im.TempStateAreaReachMessage.Resource.deserializeBinaryFromReader), e.setResource(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TempStateAreaReachMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TempStateAreaReachMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getElemType(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getElemId(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getItemId(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), s = e.getStatus(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), null != (s = e.getResource()) && t.writeMessage(6, s, proto.webcast.im.TempStateAreaReachMessage.Resource.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.toObject = function (e) {
            return proto.webcast.im.TempStateAreaReachMessage.Resource.toObject(e, this)
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.toObject = function (e, t) {
            var s = {
                name: r.Message.getFieldWithDefault(t, 1, ""),
                icon: r.Message.getFieldWithDefault(t, 2, ""),
                description: r.Message.getFieldWithDefault(t, 3, ""),
                extra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.TempStateAreaReachMessage.Resource.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.TempStateAreaReachMessage.Resource;
            return proto.webcast.im.TempStateAreaReachMessage.Resource.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readString();
                        e.setName(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setIcon(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setDescription(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TempStateAreaReachMessage.Resource.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getName()).length > 0 && t.writeString(1, s), (s = e.getIcon()).length > 0 && t.writeString(2, s), (s = e.getDescription()).length > 0 && t.writeString(3, s), (s = e.getExtra()).length > 0 && t.writeString(4, s)
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.setName = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.getIcon = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.setIcon = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.setDescription = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.TempStateAreaReachMessage.Resource.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.getElemType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.setElemType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.getElemId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.setElemId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.getItemId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.setItemId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.getResource = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.TempStateAreaReachMessage.Resource, 6)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.setResource = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.clearResource = function () {
            return this.setResource(undefined)
        }, proto.webcast.im.TempStateAreaReachMessage.prototype.hasResource = function () {
            return null != r.Message.getField(this, 6)
        }, o.object.extend(t, proto.webcast.im)
    }, 16117: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(8411);
        o.object.extend(proto, n);
        var g = s(50684);
        o.object.extend(proto, g), o.exportSymbol("proto.webcast.im.EpisodeChatMessage", null, a), proto.webcast.im.EpisodeChatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.EpisodeChatMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.EpisodeChatMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.EpisodeChatMessage.displayName = "proto.webcast.im.EpisodeChatMessage"), proto.webcast.im.EpisodeChatMessage.repeatedFields_ = [9], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EpisodeChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.EpisodeChatMessage.toObject(e, this)
        }, proto.webcast.im.EpisodeChatMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                user: (s = t.getUser()) && i.User.toObject(e, s),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                visibleToSender: r.Message.getBooleanFieldWithDefault(t, 4, !1),
                backgroundImage: (s = t.getBackgroundImage()) && n.Image.toObject(e, s),
                publicAreaCommon: (s = t.getPublicAreaCommon()) && g.PublicAreaCommon.toObject(e, s),
                giftImage: (s = t.getGiftImage()) && n.Image.toObject(e, s),
                agreeMsgId: r.Message.getFieldWithDefault(t, 8, "0"),
                colorValueList: null == (s = r.Message.getRepeatedField(t, 9)) ? undefined : s
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.EpisodeChatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.EpisodeChatMessage;
            return proto.webcast.im.EpisodeChatMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.EpisodeChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setContent(s);
                        break;
                    case 4:
                        s = t.readBool();
                        e.setVisibleToSender(s);
                        break;
                    case 5:
                        s = new n.Image;
                        t.readMessage(s, n.Image.deserializeBinaryFromReader), e.setBackgroundImage(s);
                        break;
                    case 6:
                        s = new g.PublicAreaCommon;
                        t.readMessage(s, g.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(s);
                        break;
                    case 7:
                        s = new n.Image;
                        t.readMessage(s, n.Image.deserializeBinaryFromReader), e.setGiftImage(s);
                        break;
                    case 8:
                        s = t.readInt64String();
                        e.setAgreeMsgId(s);
                        break;
                    case 9:
                        s = t.readString();
                        e.addColorValue(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EpisodeChatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EpisodeChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EpisodeChatMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), null != (s = e.getUser()) && t.writeMessage(2, s, i.User.serializeBinaryToWriter), (s = e.getContent()).length > 0 && t.writeString(3, s), (s = e.getVisibleToSender()) && t.writeBool(4, s), null != (s = e.getBackgroundImage()) && t.writeMessage(5, s, n.Image.serializeBinaryToWriter), null != (s = e.getPublicAreaCommon()) && t.writeMessage(6, s, g.PublicAreaCommon.serializeBinaryToWriter), null != (s = e.getGiftImage()) && t.writeMessage(7, s, n.Image.serializeBinaryToWriter), s = e.getAgreeMsgId(), 0 !== parseInt(s, 10) && t.writeInt64String(8, s), (s = e.getColorValueList()).length > 0 && t.writeRepeatedString(9, s)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.EpisodeChatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 2)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.EpisodeChatMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.EpisodeChatMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getVisibleToSender = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setVisibleToSender = function (e) {
            return r.Message.setProto3BooleanField(this, 4, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getBackgroundImage = function () {
            return r.Message.getWrapperField(this, n.Image, 5)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setBackgroundImage = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        }, proto.webcast.im.EpisodeChatMessage.prototype.hasBackgroundImage = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, g.PublicAreaCommon, 6)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.EpisodeChatMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getGiftImage = function () {
            return r.Message.getWrapperField(this, n.Image, 7)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setGiftImage = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.clearGiftImage = function () {
            return this.setGiftImage(undefined)
        }, proto.webcast.im.EpisodeChatMessage.prototype.hasGiftImage = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getAgreeMsgId = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.EpisodeChatMessage.prototype.setAgreeMsgId = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.EpisodeChatMessage.prototype.getColorValueList = function () {
            return r.Message.getRepeatedField(this, 9)
        }, proto.webcast.im.EpisodeChatMessage.prototype.setColorValueList = function (e) {
            return r.Message.setField(this, 9, e || [])
        }, proto.webcast.im.EpisodeChatMessage.prototype.addColorValue = function (e, t) {
            return r.Message.addToRepeatedField(this, 9, e, t)
        }, proto.webcast.im.EpisodeChatMessage.prototype.clearColorValueList = function () {
            return this.setColorValueList([])
        }, o.object.extend(t, proto.webcast.im)
    }, 2042: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(99222);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.FansGroupGuideMessage", null, a), o.exportSymbol("proto.webcast.im.FansGroupGuideType", null, a), proto.webcast.im.FansGroupGuideMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FansGroupGuideMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FansGroupGuideMessage.displayName = "proto.webcast.im.FansGroupGuideMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FansGroupGuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FansGroupGuideMessage.toObject(e, this)
        }, proto.webcast.im.FansGroupGuideMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                type: r.Message.getFieldWithDefault(t, 2, 0),
                title: r.Message.getFieldWithDefault(t, 3, ""),
                content: r.Message.getFieldWithDefault(t, 4, ""),
                autoRecordDurationMs: r.Message.getFieldWithDefault(t, 5, "0"),
                richText: (s = t.getRichText()) && n.Text.toObject(e, s),
                schemeUrl: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FansGroupGuideMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FansGroupGuideMessage;
            return proto.webcast.im.FansGroupGuideMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FansGroupGuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readEnum();
                        e.setType(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setTitle(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setContent(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setAutoRecordDurationMs(s);
                        break;
                    case 6:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setRichText(s);
                        break;
                    case 7:
                        s = t.readString();
                        e.setSchemeUrl(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FansGroupGuideMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FansGroupGuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FansGroupGuideMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), 0 !== (s = e.getType()) && t.writeEnum(2, s), (s = e.getTitle()).length > 0 && t.writeString(3, s), (s = e.getContent()).length > 0 && t.writeString(4, s), s = e.getAutoRecordDurationMs(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), null != (s = e.getRichText()) && t.writeMessage(6, s, n.Text.serializeBinaryToWriter), (s = e.getSchemeUrl()).length > 0 && t.writeString(7, s)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getAutoRecordDurationMs = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setAutoRecordDurationMs = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getRichText = function () {
            return r.Message.getWrapperField(this, n.Text, 6)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setRichText = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.clearRichText = function () {
            return this.setRichText(undefined)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.hasRichText = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.FansGroupGuideMessage.prototype.getSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.FansGroupGuideMessage.prototype.setSchemeUrl = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.FansGroupGuideType = {
            UNKNOWNGUIDE: 0,
            GUIDEFANSINTOGROUP: 1,
            SHARESCREENCONTENT: 2,
            SHAREINTERESTINGCONTENT: 3,
            CREATEFANSGROUP: 4,
            OPENAPPLICATION: 5
        }, o.object.extend(t, proto.webcast.im)
    }, 57991: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(99222);
        o.object.extend(proto, n);
        var g = s(50684);
        o.object.extend(proto, g), o.exportSymbol("proto.webcast.im.FansclubGuideMessage", null, a), o.exportSymbol("proto.webcast.im.FansclubMessage", null, a), o.exportSymbol("proto.webcast.im.FansclubMessage.UpgradePrivilege", null, a), o.exportSymbol("proto.webcast.im.FansclubReviewMessage", null, a), o.exportSymbol("proto.webcast.im.FansclubStatisticsMessage", null, a), proto.webcast.im.FansclubStatisticsMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FansclubStatisticsMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FansclubStatisticsMessage.displayName = "proto.webcast.im.FansclubStatisticsMessage"), proto.webcast.im.FansclubMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FansclubMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FansclubMessage.displayName = "proto.webcast.im.FansclubMessage"), proto.webcast.im.FansclubMessage.UpgradePrivilege = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FansclubMessage.UpgradePrivilege, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FansclubMessage.UpgradePrivilege.displayName = "proto.webcast.im.FansclubMessage.UpgradePrivilege"), proto.webcast.im.FansclubReviewMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FansclubReviewMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FansclubReviewMessage.displayName = "proto.webcast.im.FansclubReviewMessage"), proto.webcast.im.FansclubGuideMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FansclubGuideMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FansclubGuideMessage.displayName = "proto.webcast.im.FansclubGuideMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FansclubStatisticsMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FansclubStatisticsMessage.toObject(e, this)
        }, proto.webcast.im.FansclubStatisticsMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                name: r.Message.getFieldWithDefault(t, 2, ""),
                fansCount: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FansclubStatisticsMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FansclubStatisticsMessage;
            return proto.webcast.im.FansclubStatisticsMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FansclubStatisticsMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setName(s);
                        break;
                    case 3:
                        s = t.readInt64();
                        e.setFansCount(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FansclubStatisticsMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FansclubStatisticsMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), (s = e.getName()).length > 0 && t.writeString(2, s), 0 !== (s = e.getFansCount()) && t.writeInt64(3, s)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.setName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.getFansCount = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.FansclubStatisticsMessage.prototype.setFansCount = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FansclubMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FansclubMessage.toObject(e, this)
        }, proto.webcast.im.FansclubMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                action: r.Message.getFieldWithDefault(t, 2, 0),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                user: (s = t.getUser()) && i.User.toObject(e, s),
                upgradePrivilege: (s = t.getUpgradePrivilege()) && proto.webcast.im.FansclubMessage.UpgradePrivilege.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FansclubMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FansclubMessage;
            return proto.webcast.im.FansclubMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FansclubMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt32();
                        e.setAction(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setContent(s);
                        break;
                    case 4:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 5:
                        s = new proto.webcast.im.FansclubMessage.UpgradePrivilege;
                        t.readMessage(s, proto.webcast.im.FansclubMessage.UpgradePrivilege.deserializeBinaryFromReader), e.setUpgradePrivilege(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FansclubMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FansclubMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FansclubMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), 0 !== (s = e.getAction()) && t.writeInt32(2, s), (s = e.getContent()).length > 0 && t.writeString(3, s), null != (s = e.getUser()) && t.writeMessage(4, s, i.User.serializeBinaryToWriter), null != (s = e.getUpgradePrivilege()) && t.writeMessage(5, s, proto.webcast.im.FansclubMessage.UpgradePrivilege.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.toObject = function (e) {
            return proto.webcast.im.FansclubMessage.UpgradePrivilege.toObject(e, this)
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.toObject = function (e, t) {
            var s = {
                content: r.Message.getFieldWithDefault(t, 1, ""),
                description: r.Message.getFieldWithDefault(t, 2, ""),
                buttonType: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.FansclubMessage.UpgradePrivilege.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FansclubMessage.UpgradePrivilege;
            return proto.webcast.im.FansclubMessage.UpgradePrivilege.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readString();
                        e.setContent(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setDescription(s);
                        break;
                    case 3:
                        s = t.readInt32();
                        e.setButtonType(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FansclubMessage.UpgradePrivilege.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getContent()).length > 0 && t.writeString(1, s), (s = e.getDescription()).length > 0 && t.writeString(2, s), 0 !== (s = e.getButtonType()) && t.writeInt32(3, s)
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.setDescription = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.getButtonType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.FansclubMessage.UpgradePrivilege.prototype.setButtonType = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.FansclubMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.FansclubMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FansclubMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FansclubMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FansclubMessage.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.FansclubMessage.prototype.setAction = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.FansclubMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.FansclubMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.FansclubMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 4)
        }, proto.webcast.im.FansclubMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.FansclubMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.FansclubMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.FansclubMessage.prototype.getUpgradePrivilege = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.FansclubMessage.UpgradePrivilege, 5)
        }, proto.webcast.im.FansclubMessage.prototype.setUpgradePrivilege = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.FansclubMessage.prototype.clearUpgradePrivilege = function () {
            return this.setUpgradePrivilege(undefined)
        }, proto.webcast.im.FansclubMessage.prototype.hasUpgradePrivilege = function () {
            return null != r.Message.getField(this, 5)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FansclubReviewMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FansclubReviewMessage.toObject(e, this)
        }, proto.webcast.im.FansclubReviewMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                action: r.Message.getFieldWithDefault(t, 2, 0),
                content: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FansclubReviewMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FansclubReviewMessage;
            return proto.webcast.im.FansclubReviewMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FansclubReviewMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt32();
                        e.setAction(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setContent(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FansclubReviewMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FansclubReviewMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FansclubReviewMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), 0 !== (s = e.getAction()) && t.writeInt32(2, s), (s = e.getContent()).length > 0 && t.writeString(3, s)
        }, proto.webcast.im.FansclubReviewMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.FansclubReviewMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FansclubReviewMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FansclubReviewMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FansclubReviewMessage.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.FansclubReviewMessage.prototype.setAction = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.FansclubReviewMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.FansclubReviewMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FansclubGuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FansclubGuideMessage.toObject(e, this)
        }, proto.webcast.im.FansclubGuideMessage.toObject = function (e, t) {
            var s, r = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                title: (s = t.getTitle()) && n.Text.toObject(e, s),
                subTitle: (s = t.getSubTitle()) && n.Text.toObject(e, s)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.FansclubGuideMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FansclubGuideMessage;
            return proto.webcast.im.FansclubGuideMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FansclubGuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setTitle(s);
                        break;
                    case 3:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setSubTitle(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FansclubGuideMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FansclubGuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FansclubGuideMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), null != (s = e.getTitle()) && t.writeMessage(2, s, n.Text.serializeBinaryToWriter), null != (s = e.getSubTitle()) && t.writeMessage(3, s, n.Text.serializeBinaryToWriter)
        }, proto.webcast.im.FansclubGuideMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.FansclubGuideMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FansclubGuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FansclubGuideMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FansclubGuideMessage.prototype.getTitle = function () {
            return r.Message.getWrapperField(this, n.Text, 2)
        }, proto.webcast.im.FansclubGuideMessage.prototype.setTitle = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.FansclubGuideMessage.prototype.clearTitle = function () {
            return this.setTitle(undefined)
        }, proto.webcast.im.FansclubGuideMessage.prototype.hasTitle = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.FansclubGuideMessage.prototype.getSubTitle = function () {
            return r.Message.getWrapperField(this, n.Text, 3)
        }, proto.webcast.im.FansclubGuideMessage.prototype.setSubTitle = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.FansclubGuideMessage.prototype.clearSubTitle = function () {
            return this.setSubTitle(undefined)
        }, proto.webcast.im.FansclubGuideMessage.prototype.hasSubTitle = function () {
            return null != r.Message.getField(this, 3)
        }, o.object.extend(t, proto.webcast.im)
    }, 90640: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.FeedbackActionMessage", null, a), o.exportSymbol("proto.webcast.im.FeedbackCardMessage", null, a), proto.webcast.im.FeedbackActionMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FeedbackActionMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FeedbackActionMessage.displayName = "proto.webcast.im.FeedbackActionMessage"), proto.webcast.im.FeedbackCardMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FeedbackCardMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FeedbackCardMessage.displayName = "proto.webcast.im.FeedbackCardMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FeedbackActionMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FeedbackActionMessage.toObject(e, this)
        }, proto.webcast.im.FeedbackActionMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                actionId: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FeedbackActionMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FeedbackActionMessage;
            return proto.webcast.im.FeedbackActionMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FeedbackActionMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setActionId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FeedbackActionMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FeedbackActionMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FeedbackActionMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getActionId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s)
        }, proto.webcast.im.FeedbackActionMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.FeedbackActionMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FeedbackActionMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FeedbackActionMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FeedbackActionMessage.prototype.getActionId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.FeedbackActionMessage.prototype.setActionId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FeedbackCardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FeedbackCardMessage.toObject(e, this)
        }, proto.webcast.im.FeedbackCardMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                questionnaireId: r.Message.getFieldWithDefault(t, 2, "0"),
                scattermills: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FeedbackCardMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FeedbackCardMessage;
            return proto.webcast.im.FeedbackCardMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FeedbackCardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setQuestionnaireId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setScattermills(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FeedbackCardMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FeedbackCardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FeedbackCardMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getQuestionnaireId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getScattermills(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s)
        }, proto.webcast.im.FeedbackCardMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.FeedbackCardMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FeedbackCardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FeedbackCardMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FeedbackCardMessage.prototype.getQuestionnaireId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.FeedbackCardMessage.prototype.setQuestionnaireId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.FeedbackCardMessage.prototype.getScattermills = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.FeedbackCardMessage.prototype.setScattermills = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 28502: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(8411);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.FollowGuideMessage", null, a), proto.webcast.im.FollowGuideMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FollowGuideMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FollowGuideMessage.displayName = "proto.webcast.im.FollowGuideMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FollowGuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FollowGuideMessage.toObject(e, this)
        }, proto.webcast.im.FollowGuideMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                avatarurl: (s = t.getAvatarurl()) && n.Image.toObject(e, s),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                hourrankinfo: r.Message.getFieldWithDefault(t, 4, ""),
                giftid: r.Message.getFieldWithDefault(t, 5, "0"),
                duration: r.Message.getFieldWithDefault(t, 6, "0"),
                popupreason: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FollowGuideMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FollowGuideMessage;
            return proto.webcast.im.FollowGuideMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FollowGuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.Image;
                        t.readMessage(s, n.Image.deserializeBinaryFromReader), e.setAvatarurl(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setContent(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setHourrankinfo(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setGiftid(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setDuration(s);
                        break;
                    case 7:
                        s = t.readString();
                        e.setPopupreason(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FollowGuideMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FollowGuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FollowGuideMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), null != (s = e.getAvatarurl()) && t.writeMessage(2, s, n.Image.serializeBinaryToWriter), (s = e.getContent()).length > 0 && t.writeString(3, s), (s = e.getHourrankinfo()).length > 0 && t.writeString(4, s), s = e.getGiftid(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getDuration(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), (s = e.getPopupreason()).length > 0 && t.writeString(7, s)
        }, proto.webcast.im.FollowGuideMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.FollowGuideMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FollowGuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FollowGuideMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FollowGuideMessage.prototype.getAvatarurl = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.FollowGuideMessage.prototype.setAvatarurl = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.FollowGuideMessage.prototype.clearAvatarurl = function () {
            return this.setAvatarurl(undefined)
        }, proto.webcast.im.FollowGuideMessage.prototype.hasAvatarurl = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.FollowGuideMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.FollowGuideMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.FollowGuideMessage.prototype.getHourrankinfo = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.FollowGuideMessage.prototype.setHourrankinfo = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.FollowGuideMessage.prototype.getGiftid = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.FollowGuideMessage.prototype.setGiftid = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.FollowGuideMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.FollowGuideMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.FollowGuideMessage.prototype.getPopupreason = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.FollowGuideMessage.prototype.setPopupreason = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 83334: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.BrokerNotifyMessage", null, a), proto.webcast.im.BrokerNotifyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.BrokerNotifyMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.BrokerNotifyMessage.displayName = "proto.webcast.im.BrokerNotifyMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BrokerNotifyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BrokerNotifyMessage.toObject(e, this)
        }, proto.webcast.im.BrokerNotifyMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                msgType: r.Message.getFieldWithDefault(t, 2, "0"),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                timestamp: r.Message.getFieldWithDefault(t, 4, "0"),
                msgSubType: r.Message.getFieldWithDefault(t, 5, "0"),
                msgId: r.Message.getFieldWithDefault(t, 6, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.BrokerNotifyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.BrokerNotifyMessage;
            return proto.webcast.im.BrokerNotifyMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.BrokerNotifyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setMsgType(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setContent(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setTimestamp(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setMsgSubType(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setMsgId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BrokerNotifyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BrokerNotifyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BrokerNotifyMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getMsgType(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), (s = e.getContent()).length > 0 && t.writeString(3, s), s = e.getTimestamp(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), s = e.getMsgSubType(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getMsgId(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BrokerNotifyMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.BrokerNotifyMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.getTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.BrokerNotifyMessage.prototype.setTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.getMsgSubType = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.BrokerNotifyMessage.prototype.setMsgSubType = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.BrokerNotifyMessage.prototype.getMsgId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.BrokerNotifyMessage.prototype.setMsgId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 9533: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(99222);
        o.object.extend(proto, n);
        var g = s(8411);
        o.object.extend(proto, g);
        var p = s(50684);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.FreeCellGiftMessage", null, a), o.exportSymbol("proto.webcast.im.FreeCellGiftMessage.FreeCellData", null, a), proto.webcast.im.FreeCellGiftMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FreeCellGiftMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FreeCellGiftMessage.displayName = "proto.webcast.im.FreeCellGiftMessage"), proto.webcast.im.FreeCellGiftMessage.FreeCellData = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FreeCellGiftMessage.FreeCellData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FreeCellGiftMessage.FreeCellData.displayName = "proto.webcast.im.FreeCellGiftMessage.FreeCellData"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FreeCellGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FreeCellGiftMessage.toObject(e, this)
        }, proto.webcast.im.FreeCellGiftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && p.Common.toObject(e, s),
                giftId: r.Message.getFieldWithDefault(t, 2, "0"),
                fanTicketCount: r.Message.getFieldWithDefault(t, 3, "0"),
                groupCount: r.Message.getFieldWithDefault(t, 4, "0"),
                repeatCount: r.Message.getFieldWithDefault(t, 5, "0"),
                comboCount: r.Message.getFieldWithDefault(t, 6, "0"),
                user: (s = t.getUser()) && i.User.toObject(e, s),
                toUser: (s = t.getToUser()) && i.User.toObject(e, s),
                freeCell: (s = t.getFreeCell()) && proto.webcast.im.FreeCellGiftMessage.FreeCellData.toObject(e, s),
                roomFanTicketCount: r.Message.getFieldWithDefault(t, 10, "0"),
                logId: r.Message.getFieldWithDefault(t, 11, ""),
                publicAreaCommon: (s = t.getPublicAreaCommon()) && p.PublicAreaCommon.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FreeCellGiftMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FreeCellGiftMessage;
            return proto.webcast.im.FreeCellGiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FreeCellGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new p.Common;
                        t.readMessage(s, p.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGiftId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setFanTicketCount(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setGroupCount(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setRepeatCount(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setComboCount(s);
                        break;
                    case 7:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 8:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setToUser(s);
                        break;
                    case 9:
                        s = new proto.webcast.im.FreeCellGiftMessage.FreeCellData;
                        t.readMessage(s, proto.webcast.im.FreeCellGiftMessage.FreeCellData.deserializeBinaryFromReader), e.setFreeCell(s);
                        break;
                    case 10:
                        s = t.readInt64String();
                        e.setRoomFanTicketCount(s);
                        break;
                    case 11:
                        s = t.readString();
                        e.setLogId(s);
                        break;
                    case 12:
                        s = new p.PublicAreaCommon;
                        t.readMessage(s, p.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FreeCellGiftMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FreeCellGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FreeCellGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, p.Common.serializeBinaryToWriter), s = e.getGiftId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getGroupCount(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), s = e.getRepeatCount(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getComboCount(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), null != (s = e.getUser()) && t.writeMessage(7, s, i.User.serializeBinaryToWriter), null != (s = e.getToUser()) && t.writeMessage(8, s, i.User.serializeBinaryToWriter), null != (s = e.getFreeCell()) && t.writeMessage(9, s, proto.webcast.im.FreeCellGiftMessage.FreeCellData.serializeBinaryToWriter), s = e.getRoomFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(10, s), (s = e.getLogId()).length > 0 && t.writeString(11, s), null != (s = e.getPublicAreaCommon()) && t.writeMessage(12, s, p.PublicAreaCommon.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.toObject = function (e) {
            return proto.webcast.im.FreeCellGiftMessage.FreeCellData.toObject(e, this)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.toObject = function (e, t) {
            var s, o = {
                timeNowMs: r.Message.getFieldWithDefault(t, 1, "0"),
                timeStartMs: r.Message.getFieldWithDefault(t, 2, "0"),
                timeFreezeEndMs: r.Message.getFieldWithDefault(t, 3, "0"),
                timeDoubleEndMs: r.Message.getFieldWithDefault(t, 4, "0"),
                timeEndMs: r.Message.getFieldWithDefault(t, 5, "0"),
                freeCellLength: r.Message.getFieldWithDefault(t, 6, "0"),
                isFreeze: r.Message.getBooleanFieldWithDefault(t, 7, !1),
                isDouble: r.Message.getBooleanFieldWithDefault(t, 8, !1),
                contributeMostUser: (s = t.getContributeMostUser()) && i.User.toObject(e, s),
                contributeMostCoins: r.Message.getFieldWithDefault(t, 10, "0"),
                distanceFromPreviousOne: r.Message.getFieldWithDefault(t, 11, "0"),
                indexInDayRanklist: r.Message.getFieldWithDefault(t, 12, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.FreeCellGiftMessage.FreeCellData.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FreeCellGiftMessage.FreeCellData;
            return proto.webcast.im.FreeCellGiftMessage.FreeCellData.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readInt64String();
                        e.setTimeNowMs(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setTimeStartMs(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setTimeFreezeEndMs(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setTimeDoubleEndMs(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setTimeEndMs(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setFreeCellLength(s);
                        break;
                    case 7:
                        s = t.readBool();
                        e.setIsFreeze(s);
                        break;
                    case 8:
                        s = t.readBool();
                        e.setIsDouble(s);
                        break;
                    case 9:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setContributeMostUser(s);
                        break;
                    case 10:
                        s = t.readInt64String();
                        e.setContributeMostCoins(s);
                        break;
                    case 11:
                        s = t.readInt64String();
                        e.setDistanceFromPreviousOne(s);
                        break;
                    case 12:
                        s = t.readInt64String();
                        e.setIndexInDayRanklist(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FreeCellGiftMessage.FreeCellData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            s = e.getTimeNowMs(), 0 !== parseInt(s, 10) && t.writeInt64String(1, s), s = e.getTimeStartMs(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getTimeFreezeEndMs(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getTimeDoubleEndMs(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), s = e.getTimeEndMs(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getFreeCellLength(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), (s = e.getIsFreeze()) && t.writeBool(7, s), (s = e.getIsDouble()) && t.writeBool(8, s), null != (s = e.getContributeMostUser()) && t.writeMessage(9, s, i.User.serializeBinaryToWriter), s = e.getContributeMostCoins(), 0 !== parseInt(s, 10) && t.writeInt64String(10, s), s = e.getDistanceFromPreviousOne(), 0 !== parseInt(s, 10) && t.writeInt64String(11, s), s = e.getIndexInDayRanklist(), 0 !== parseInt(s, 10) && t.writeInt64String(12, s)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getTimeNowMs = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setTimeNowMs = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getTimeStartMs = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setTimeStartMs = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getTimeFreezeEndMs = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setTimeFreezeEndMs = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getTimeDoubleEndMs = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setTimeDoubleEndMs = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getTimeEndMs = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setTimeEndMs = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getFreeCellLength = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setFreeCellLength = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getIsFreeze = function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setIsFreeze = function (e) {
            return r.Message.setProto3BooleanField(this, 7, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getIsDouble = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setIsDouble = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getContributeMostUser = function () {
            return r.Message.getWrapperField(this, i.User, 9)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setContributeMostUser = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.clearContributeMostUser = function () {
            return this.setContributeMostUser(undefined)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.hasContributeMostUser = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getContributeMostCoins = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setContributeMostCoins = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getDistanceFromPreviousOne = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setDistanceFromPreviousOne = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.getIndexInDayRanklist = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.FreeCellGiftMessage.FreeCellData.prototype.setIndexInDayRanklist = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, p.Common, 1)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setGiftId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getFanTicketCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setFanTicketCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getGroupCount = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setGroupCount = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getRepeatCount = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setRepeatCount = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getComboCount = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setComboCount = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 7)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getToUser = function () {
            return r.Message.getWrapperField(this, i.User, 8)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setToUser = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.clearToUser = function () {
            return this.setToUser(undefined)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.hasToUser = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getFreeCell = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.FreeCellGiftMessage.FreeCellData, 9)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setFreeCell = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.clearFreeCell = function () {
            return this.setFreeCell(undefined)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.hasFreeCell = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getRoomFanTicketCount = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setRoomFanTicketCount = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getLogId = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setLogId = function (e) {
            return r.Message.setProto3StringField(this, 11, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, p.PublicAreaCommon, 12)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.FreeCellGiftMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 12)
        }, o.object.extend(t, proto.webcast.im)
    }, 28497: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(36973);
        o.object.extend(proto, n);
        var g = s(64925);
        o.object.extend(proto, g), o.exportSymbol("proto.webcast.im.FreeGiftMessage", null, a), proto.webcast.im.FreeGiftMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.FreeGiftMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.FreeGiftMessage.displayName = "proto.webcast.im.FreeGiftMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FreeGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FreeGiftMessage.toObject(e, this)
        }, proto.webcast.im.FreeGiftMessage.toObject = function (e, t) {
            var s, r = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                user: (s = t.getUser()) && g.User.toObject(e, s),
                freeGift: (s = t.getFreeGift()) && n.FreeGift.toObject(e, s)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.FreeGiftMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.FreeGiftMessage;
            return proto.webcast.im.FreeGiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.FreeGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new g.User;
                        t.readMessage(s, g.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 3:
                        s = new n.FreeGift;
                        t.readMessage(s, n.FreeGift.deserializeBinaryFromReader), e.setFreeGift(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FreeGiftMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FreeGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FreeGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), null != (s = e.getUser()) && t.writeMessage(2, s, g.User.serializeBinaryToWriter), null != (s = e.getFreeGift()) && t.writeMessage(3, s, n.FreeGift.serializeBinaryToWriter)
        }, proto.webcast.im.FreeGiftMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.FreeGiftMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FreeGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FreeGiftMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FreeGiftMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, g.User, 2)
        }, proto.webcast.im.FreeGiftMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.FreeGiftMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.FreeGiftMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.FreeGiftMessage.prototype.getFreeGift = function () {
            return r.Message.getWrapperField(this, n.FreeGift, 3)
        }, proto.webcast.im.FreeGiftMessage.prototype.setFreeGift = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.FreeGiftMessage.prototype.clearFreeGift = function () {
            return this.setFreeGift(undefined)
        }, proto.webcast.im.FreeGiftMessage.prototype.hasFreeGift = function () {
            return null != r.Message.getField(this, 3)
        }, o.object.extend(t, proto.webcast.im)
    }, 93354: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.GamblingStatusChangedMessage", null, a), o.exportSymbol("proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo", null, a), proto.webcast.im.GamblingStatusChangedMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GamblingStatusChangedMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GamblingStatusChangedMessage.displayName = "proto.webcast.im.GamblingStatusChangedMessage"), proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.displayName = "proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GamblingStatusChangedMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GamblingStatusChangedMessage.toObject(e, this)
        }, proto.webcast.im.GamblingStatusChangedMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                prevStatus: r.Message.getFieldWithDefault(t, 2, "0"),
                gameQuizInfo: (s = t.getGameQuizInfo()) && proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GamblingStatusChangedMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GamblingStatusChangedMessage;
            return proto.webcast.im.GamblingStatusChangedMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GamblingStatusChangedMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setPrevStatus(s);
                        break;
                    case 3:
                        s = new proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo;
                        t.readMessage(s, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.deserializeBinaryFromReader), e.setGameQuizInfo(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GamblingStatusChangedMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GamblingStatusChangedMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getPrevStatus(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), null != (s = e.getGameQuizInfo()) && t.writeMessage(3, s, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.toObject = function (e) {
            return proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.toObject(e, this)
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.toObject = function (e, t) {
            var s = {
                id: r.Message.getFieldWithDefault(t, 1, "0"),
                roomId: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo;
            return proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readInt64String();
                        e.setId(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setRoomId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setStatus(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            s = e.getId(), 0 !== parseInt(s, 10) && t.writeInt64String(1, s), s = e.getRoomId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getStatus(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s)
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.setId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo.prototype.setStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.getPrevStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.setPrevStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.getGameQuizInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.GamblingStatusChangedMessage.GameQuizInfo, 3)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.setGameQuizInfo = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.clearGameQuizInfo = function () {
            return this.setGameQuizInfo(undefined)
        }, proto.webcast.im.GamblingStatusChangedMessage.prototype.hasGameQuizInfo = function () {
            return null != r.Message.getField(this, 3)
        }, o.object.extend(t, proto.webcast.im)
    }, 15231: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GameAncAudDataFromAncMessage", null, a), o.exportSymbol("proto.webcast.im.GameAncAudDataFromAudMessage", null, a), o.exportSymbol("proto.webcast.im.GameAncAudEntranceMessage", null, a), o.exportSymbol("proto.webcast.im.GameAncAudPanelCtrlMessage", null, a), o.exportSymbol("proto.webcast.im.GameAncAudStatusMessage", null, a), o.exportSymbol("proto.webcast.im.GameChannelMessage", null, a), o.exportSymbol("proto.webcast.im.HostVersion", null, a), proto.webcast.im.GameChannelMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameChannelMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameChannelMessage.displayName = "proto.webcast.im.GameChannelMessage"), proto.webcast.im.HostVersion = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.HostVersion, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.HostVersion.displayName = "proto.webcast.im.HostVersion"), proto.webcast.im.GameAncAudEntranceMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.GameAncAudEntranceMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GameAncAudEntranceMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameAncAudEntranceMessage.displayName = "proto.webcast.im.GameAncAudEntranceMessage"), proto.webcast.im.GameAncAudStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameAncAudStatusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameAncAudStatusMessage.displayName = "proto.webcast.im.GameAncAudStatusMessage"), proto.webcast.im.GameAncAudPanelCtrlMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameAncAudPanelCtrlMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameAncAudPanelCtrlMessage.displayName = "proto.webcast.im.GameAncAudPanelCtrlMessage"), proto.webcast.im.GameAncAudDataFromAncMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameAncAudDataFromAncMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameAncAudDataFromAncMessage.displayName = "proto.webcast.im.GameAncAudDataFromAncMessage"), proto.webcast.im.GameAncAudDataFromAudMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameAncAudDataFromAudMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameAncAudDataFromAudMessage.displayName = "proto.webcast.im.GameAncAudDataFromAudMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameChannelMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameChannelMessage.toObject(e, this)
        }, proto.webcast.im.GameChannelMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                messageType: r.Message.getFieldWithDefault(t, 3, "0"),
                extra: r.Message.getFieldWithDefault(t, 4, ""),
                user: (s = t.getUser()) && i.User.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameChannelMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameChannelMessage;
            return proto.webcast.im.GameChannelMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameChannelMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setMessageType(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    case 5:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameChannelMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameChannelMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameChannelMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getMessageType(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getExtra()).length > 0 && t.writeString(4, s), null != (s = e.getUser()) && t.writeMessage(5, s, i.User.serializeBinaryToWriter)
        }, proto.webcast.im.GameChannelMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GameChannelMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameChannelMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameChannelMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameChannelMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameChannelMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameChannelMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GameChannelMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GameChannelMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameChannelMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GameChannelMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 5)
        }, proto.webcast.im.GameChannelMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.GameChannelMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.GameChannelMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 5)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.HostVersion.prototype.toObject = function (e) {
            return proto.webcast.im.HostVersion.toObject(e, this)
        }, proto.webcast.im.HostVersion.toObject = function (e, t) {
            var s = {
                hostId: r.Message.getFieldWithDefault(t, 1, "0"),
                minVersion: r.Message.getFieldWithDefault(t, 2, ""),
                maxVersion: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.HostVersion.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.HostVersion;
            return proto.webcast.im.HostVersion.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.HostVersion.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readInt64String();
                        e.setHostId(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setMinVersion(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setMaxVersion(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.HostVersion.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.HostVersion.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.HostVersion.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            s = e.getHostId(), 0 !== parseInt(s, 10) && t.writeInt64String(1, s), (s = e.getMinVersion()).length > 0 && t.writeString(2, s), (s = e.getMaxVersion()).length > 0 && t.writeString(3, s)
        }, proto.webcast.im.HostVersion.prototype.getHostId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.HostVersion.prototype.setHostId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.HostVersion.prototype.getMinVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.HostVersion.prototype.setMinVersion = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.HostVersion.prototype.getMaxVersion = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.HostVersion.prototype.setMaxVersion = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.repeatedFields_ = [6], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameAncAudEntranceMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameAncAudEntranceMessage.toObject(e, this)
        }, proto.webcast.im.GameAncAudEntranceMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                gameKind: r.Message.getFieldWithDefault(t, 3, "0"),
                extra: r.Message.getFieldWithDefault(t, 4, ""),
                showAudienceFloatEntrance: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                versionRangeList: r.Message.toObjectList(t.getVersionRangeList(), proto.webcast.im.HostVersion.toObject, e),
                appId: r.Message.getFieldWithDefault(t, 7, ""),
                metaVersion: r.Message.getFieldWithDefault(t, 8, ""),
                name: r.Message.getFieldWithDefault(t, 9, ""),
                iconUrl: r.Message.getFieldWithDefault(t, 10, ""),
                startId: r.Message.getFieldWithDefault(t, 11, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameAncAudEntranceMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameAncAudEntranceMessage;
            return proto.webcast.im.GameAncAudEntranceMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameAncAudEntranceMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setGameKind(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    case 5:
                        s = t.readBool();
                        e.setShowAudienceFloatEntrance(s);
                        break;
                    case 6:
                        s = new proto.webcast.im.HostVersion;
                        t.readMessage(s, proto.webcast.im.HostVersion.deserializeBinaryFromReader), e.addVersionRange(s);
                        break;
                    case 7:
                        s = t.readString();
                        e.setAppId(s);
                        break;
                    case 8:
                        s = t.readString();
                        e.setMetaVersion(s);
                        break;
                    case 9:
                        s = t.readString();
                        e.setName(s);
                        break;
                    case 10:
                        s = t.readString();
                        e.setIconUrl(s);
                        break;
                    case 11:
                        s = t.readInt64String();
                        e.setStartId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameAncAudEntranceMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameAncAudEntranceMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getGameKind(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getExtra()).length > 0 && t.writeString(4, s), (s = e.getShowAudienceFloatEntrance()) && t.writeBool(5, s), (s = e.getVersionRangeList()).length > 0 && t.writeRepeatedMessage(6, s, proto.webcast.im.HostVersion.serializeBinaryToWriter), (s = e.getAppId()).length > 0 && t.writeString(7, s), (s = e.getMetaVersion()).length > 0 && t.writeString(8, s), (s = e.getName()).length > 0 && t.writeString(9, s), (s = e.getIconUrl()).length > 0 && t.writeString(10, s), s = e.getStartId(), 0 !== parseInt(s, 10) && t.writeInt64String(11, s)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getGameKind = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setGameKind = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getShowAudienceFloatEntrance = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setShowAudienceFloatEntrance = function (e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getVersionRangeList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.HostVersion, 6)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setVersionRangeList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.addVersionRange = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.webcast.im.HostVersion, t)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.clearVersionRangeList = function () {
            return this.setVersionRangeList([])
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getMetaVersion = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setMetaVersion = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setName = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getIconUrl = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setIconUrl = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.getStartId = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.GameAncAudEntranceMessage.prototype.setStartId = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameAncAudStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameAncAudStatusMessage.toObject(e, this)
        }, proto.webcast.im.GameAncAudStatusMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                sendType: r.Message.getFieldWithDefault(t, 3, "0"),
                gameStatus: r.Message.getFieldWithDefault(t, 4, "0"),
                extra: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameAncAudStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameAncAudStatusMessage;
            return proto.webcast.im.GameAncAudStatusMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameAncAudStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setSendType(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setGameStatus(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameAncAudStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameAncAudStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameAncAudStatusMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getSendType(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getGameStatus(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), (s = e.getExtra()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.GameAncAudStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GameAncAudStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameAncAudStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameAncAudStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameAncAudStatusMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.GameAncAudStatusMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.GameAncAudStatusMessage.prototype.getSendType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.GameAncAudStatusMessage.prototype.setSendType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.GameAncAudStatusMessage.prototype.getGameStatus = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.GameAncAudStatusMessage.prototype.setGameStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.GameAncAudStatusMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.GameAncAudStatusMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameAncAudPanelCtrlMessage.toObject(e, this)
        }, proto.webcast.im.GameAncAudPanelCtrlMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                sendType: r.Message.getFieldWithDefault(t, 3, "0"),
                panelType: r.Message.getFieldWithDefault(t, 4, "0"),
                extra: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.GameAncAudPanelCtrlMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameAncAudPanelCtrlMessage;
            return proto.webcast.im.GameAncAudPanelCtrlMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setSendType(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setPanelType(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameAncAudPanelCtrlMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.GameAncAudPanelCtrlMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getSendType(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getPanelType(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), (s = e.getExtra()).length > 0 && t.writeString(5, s)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.getSendType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.setSendType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.getPanelType = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.setPanelType = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.GameAncAudPanelCtrlMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameAncAudDataFromAncMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameAncAudDataFromAncMessage.toObject(e, this)
        }, proto.webcast.im.GameAncAudDataFromAncMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                sendType: r.Message.getFieldWithDefault(t, 3, "0"),
                data: r.Message.getFieldWithDefault(t, 4, ""),
                extra: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.GameAncAudDataFromAncMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameAncAudDataFromAncMessage;
            return proto.webcast.im.GameAncAudDataFromAncMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.GameAncAudDataFromAncMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setSendType(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setData(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameAncAudDataFromAncMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.GameAncAudDataFromAncMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getSendType(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getData()).length > 0 && t.writeString(4, s), (s = e.getExtra()).length > 0 && t.writeString(5, s)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.getSendType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.setSendType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.getData = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.setData = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.GameAncAudDataFromAncMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameAncAudDataFromAudMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameAncAudDataFromAudMessage.toObject(e, this)
        }, proto.webcast.im.GameAncAudDataFromAudMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                data: r.Message.getFieldWithDefault(t, 3, ""),
                extra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.GameAncAudDataFromAudMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameAncAudDataFromAudMessage;
            return proto.webcast.im.GameAncAudDataFromAudMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.GameAncAudDataFromAudMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setData(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameAncAudDataFromAudMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.GameAncAudDataFromAudMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), (s = e.getData()).length > 0 && t.writeString(3, s), (s = e.getExtra()).length > 0 && t.writeString(4, s)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.getData = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.setData = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.GameAncAudDataFromAudMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },o.object.extend(t, proto.webcast.im)
    }, 3465: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.GameDevelopMessage", null, a), proto.webcast.im.GameDevelopMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameDevelopMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameDevelopMessage.displayName = "proto.webcast.im.GameDevelopMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameDevelopMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameDevelopMessage.toObject(e, this)
        }, proto.webcast.im.GameDevelopMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                develop: r.Message.getFieldWithDefault(t, 3, 0),
                appId: r.Message.getFieldWithDefault(t, 4, ""),
                sign: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameDevelopMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameDevelopMessage;
            return proto.webcast.im.GameDevelopMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameDevelopMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readInt32();
                        e.setDevelop(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setAppId(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setSign(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameDevelopMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameDevelopMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameDevelopMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), 0 !== (s = e.getDevelop()) && t.writeInt32(3, s), (s = e.getAppId()).length > 0 && t.writeString(4, s), (s = e.getSign()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.GameDevelopMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GameDevelopMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameDevelopMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameDevelopMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameDevelopMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameDevelopMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameDevelopMessage.prototype.getDevelop = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.GameDevelopMessage.prototype.setDevelop = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.GameDevelopMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameDevelopMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GameDevelopMessage.prototype.getSign = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.GameDevelopMessage.prototype.setSign = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 28928: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(64925);
        o.object.extend(proto, i);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GameGiftMessage", null, a), o.exportSymbol("proto.webcast.im.GameGiftMessage.MonkeyData", null, a), o.exportSymbol("proto.webcast.im.GameGiftStatusMessage", null, a), o.exportSymbol("proto.webcast.im.GameGiftStatusMessage.Status", null, a), proto.webcast.im.GameGiftMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameGiftMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameGiftMessage.displayName = "proto.webcast.im.GameGiftMessage"), proto.webcast.im.GameGiftMessage.MonkeyData = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameGiftMessage.MonkeyData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameGiftMessage.MonkeyData.displayName = "proto.webcast.im.GameGiftMessage.MonkeyData"), proto.webcast.im.GameGiftStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameGiftStatusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameGiftStatusMessage.displayName = "proto.webcast.im.GameGiftStatusMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameGiftMessage.toObject(e, this)
        }, proto.webcast.im.GameGiftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                giftId: r.Message.getFieldWithDefault(t, 2, "0"),
                fanTicketCount: r.Message.getFieldWithDefault(t, 3, "0"),
                user: (s = t.getUser()) && i.User.toObject(e, s),
                toUser: (s = t.getToUser()) && i.User.toObject(e, s),
                normalcontent: r.Message.getFieldWithDefault(t, 6, ""),
                monkeyData: (s = t.getMonkeyData()) && proto.webcast.im.GameGiftMessage.MonkeyData.toObject(e, s),
                logId: r.Message.getFieldWithDefault(t, 9, ""),
                publicAreaCommon: (s = t.getPublicAreaCommon()) && n.PublicAreaCommon.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameGiftMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameGiftMessage;
            return proto.webcast.im.GameGiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGiftId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setFanTicketCount(s);
                        break;
                    case 4:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 5:
                        s = new i.User;
                        t.readMessage(s, i.User.deserializeBinaryFromReader), e.setToUser(s);
                        break;
                    case 6:
                        s = t.readString();
                        e.setNormalcontent(s);
                        break;
                    case 8:
                        s = new proto.webcast.im.GameGiftMessage.MonkeyData;
                        t.readMessage(s, proto.webcast.im.GameGiftMessage.MonkeyData.deserializeBinaryFromReader), e.setMonkeyData(s);
                        break;
                    case 9:
                        s = t.readString();
                        e.setLogId(s);
                        break;
                    case 10:
                        s = new n.PublicAreaCommon;
                        t.readMessage(s, n.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameGiftMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGiftId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), null != (s = e.getUser()) && t.writeMessage(4, s, i.User.serializeBinaryToWriter), null != (s = e.getToUser()) && t.writeMessage(5, s, i.User.serializeBinaryToWriter), (s = e.getNormalcontent()).length > 0 && t.writeString(6, s), null != (s = e.getMonkeyData()) && t.writeMessage(8, s, proto.webcast.im.GameGiftMessage.MonkeyData.serializeBinaryToWriter), (s = e.getLogId()).length > 0 && t.writeString(9, s), null != (s = e.getPublicAreaCommon()) && t.writeMessage(10, s, n.PublicAreaCommon.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameGiftMessage.MonkeyData.prototype.toObject = function (e) {
            return proto.webcast.im.GameGiftMessage.MonkeyData.toObject(e, this)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.toObject = function (e, t) {
            var s = {
                score: r.Message.getFieldWithDefault(t, 1, 0),
                breakRecord: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                needPopup: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                popupContent: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.GameGiftMessage.MonkeyData.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameGiftMessage.MonkeyData;
            return proto.webcast.im.GameGiftMessage.MonkeyData.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readInt32();
                        e.setScore(s);
                        break;
                    case 2:
                        s = t.readBool();
                        e.setBreakRecord(s);
                        break;
                    case 3:
                        s = t.readBool();
                        e.setNeedPopup(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setPopupContent(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameGiftMessage.MonkeyData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameGiftMessage.MonkeyData.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            0 !== (s = e.getScore()) && t.writeInt32(1, s), (s = e.getBreakRecord()) && t.writeBool(2, s), (s = e.getNeedPopup()) && t.writeBool(3, s), (s = e.getPopupContent()).length > 0 && t.writeString(4, s)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.setScore = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.getBreakRecord = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.setBreakRecord = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.getNeedPopup = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.setNeedPopup = function (e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.getPopupContent = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameGiftMessage.MonkeyData.prototype.setPopupContent = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GameGiftMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GameGiftMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameGiftMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameGiftMessage.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameGiftMessage.prototype.setGiftId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameGiftMessage.prototype.getFanTicketCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GameGiftMessage.prototype.setFanTicketCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GameGiftMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, i.User, 4)
        }, proto.webcast.im.GameGiftMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.GameGiftMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.GameGiftMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.GameGiftMessage.prototype.getToUser = function () {
            return r.Message.getWrapperField(this, i.User, 5)
        }, proto.webcast.im.GameGiftMessage.prototype.setToUser = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.GameGiftMessage.prototype.clearToUser = function () {
            return this.setToUser(undefined)
        }, proto.webcast.im.GameGiftMessage.prototype.hasToUser = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.GameGiftMessage.prototype.getNormalcontent = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.GameGiftMessage.prototype.setNormalcontent = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.GameGiftMessage.prototype.getMonkeyData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.GameGiftMessage.MonkeyData, 8)
        }, proto.webcast.im.GameGiftMessage.prototype.setMonkeyData = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.GameGiftMessage.prototype.clearMonkeyData = function () {
            return this.setMonkeyData(undefined)
        }, proto.webcast.im.GameGiftMessage.prototype.hasMonkeyData = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.GameGiftMessage.prototype.getLogId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.GameGiftMessage.prototype.setLogId = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.GameGiftMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, n.PublicAreaCommon, 10)
        }, proto.webcast.im.GameGiftMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.GameGiftMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.GameGiftMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 10)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameGiftStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameGiftStatusMessage.toObject(e, this)
        }, proto.webcast.im.GameGiftStatusMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, 0),
                extra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameGiftStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameGiftStatusMessage;
            return proto.webcast.im.GameGiftStatusMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameGiftStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readEnum();
                        e.setStatus(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameGiftStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameGiftStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameGiftStatusMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), 0 !== (s = e.getStatus()) && t.writeEnum(3, s), (s = e.getExtra()).length > 0 && t.writeString(4, s)
        }, proto.webcast.im.GameGiftStatusMessage.Status = {
            UNDEFINED: 0,
            ACHIEVETARGET: 1
        }, proto.webcast.im.GameGiftStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameGiftStatusMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.GameGiftStatusMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameGiftStatusMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 85727: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.GameStatus", null, a), o.exportSymbol("proto.webcast.im.GameStatusMessage", null, a), proto.webcast.im.GameStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameStatusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameStatusMessage.displayName = "proto.webcast.im.GameStatusMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameStatusMessage.toObject(e, this)
        }, proto.webcast.im.GameStatusMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                gameid: r.Message.getFieldWithDefault(t, 2, "0"),
                status: r.Message.getFieldWithDefault(t, 3, 0),
                configExtra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameStatusMessage;
            return proto.webcast.im.GameStatusMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameid(s);
                        break;
                    case 3:
                        s = t.readEnum();
                        e.setStatus(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setConfigExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameStatusMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getGameid(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), 0 !== (s = e.getStatus()) && t.writeEnum(3, s), (s = e.getConfigExtra()).length > 0 && t.writeString(4, s)
        }, proto.webcast.im.GameStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GameStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameStatusMessage.prototype.getGameid = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameStatusMessage.prototype.setGameid = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameStatusMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.GameStatusMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.GameStatusMessage.prototype.getConfigExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameStatusMessage.prototype.setConfigExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GameStatus = {UNKNOWNSTATUS: 0, START: 1, STOP: 2}, o.object.extend(t, proto.webcast.im)
    }, 95388: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(94683);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GameInviteMessage", null, a), o.exportSymbol("proto.webcast.im.GameInviteReplyMessage", null, a), proto.webcast.im.GameInviteMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameInviteMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameInviteMessage.displayName = "proto.webcast.im.GameInviteMessage"), proto.webcast.im.GameInviteReplyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameInviteReplyMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameInviteReplyMessage.displayName = "proto.webcast.im.GameInviteReplyMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameInviteMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameInviteMessage.toObject(e, this)
        }, proto.webcast.im.GameInviteMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                inviteItem: (s = t.getInviteItem()) && n.GameInvite.toObject(e, s),
                invitationSwitch: (s = t.getInvitationSwitch()) && n.InvitationSwitch.toObject(e, s),
                configExtra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameInviteMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameInviteMessage;
            return proto.webcast.im.GameInviteMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameInviteMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.GameInvite;
                        t.readMessage(s, n.GameInvite.deserializeBinaryFromReader), e.setInviteItem(s);
                        break;
                    case 3:
                        s = new n.InvitationSwitch;
                        t.readMessage(s, n.InvitationSwitch.deserializeBinaryFromReader), e.setInvitationSwitch(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setConfigExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameInviteMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameInviteMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameInviteMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), null != (s = e.getInviteItem()) && t.writeMessage(2, s, n.GameInvite.serializeBinaryToWriter), null != (s = e.getInvitationSwitch()) && t.writeMessage(3, s, n.InvitationSwitch.serializeBinaryToWriter), (s = e.getConfigExtra()).length > 0 && t.writeString(4, s)
        }, proto.webcast.im.GameInviteMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GameInviteMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameInviteMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameInviteMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameInviteMessage.prototype.getInviteItem = function () {
            return r.Message.getWrapperField(this, n.GameInvite, 2)
        }, proto.webcast.im.GameInviteMessage.prototype.setInviteItem = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GameInviteMessage.prototype.clearInviteItem = function () {
            return this.setInviteItem(undefined)
        }, proto.webcast.im.GameInviteMessage.prototype.hasInviteItem = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.GameInviteMessage.prototype.getInvitationSwitch = function () {
            return r.Message.getWrapperField(this, n.InvitationSwitch, 3)
        }, proto.webcast.im.GameInviteMessage.prototype.setInvitationSwitch = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GameInviteMessage.prototype.clearInvitationSwitch = function () {
            return this.setInvitationSwitch(undefined)
        }, proto.webcast.im.GameInviteMessage.prototype.hasInvitationSwitch = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.GameInviteMessage.prototype.getConfigExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameInviteMessage.prototype.setConfigExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameInviteReplyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameInviteReplyMessage.toObject(e, this)
        }, proto.webcast.im.GameInviteReplyMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                reply: r.Message.getFieldWithDefault(t, 2, 0),
                extra: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameInviteReplyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameInviteReplyMessage;
            return proto.webcast.im.GameInviteReplyMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameInviteReplyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readEnum();
                        e.setReply(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameInviteReplyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameInviteReplyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameInviteReplyMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), 0 !== (s = e.getReply()) && t.writeEnum(2, s), (s = e.getExtra()).length > 0 && t.writeString(3, s)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.getReply = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.setReply = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.GameInviteReplyMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.GameInviteReplyMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 53118: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i), o.exportSymbol("proto.webcast.im.GamePVPMessage", null, a), proto.webcast.im.GamePVPMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GamePVPMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GamePVPMessage.displayName = "proto.webcast.im.GamePVPMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GamePVPMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GamePVPMessage.toObject(e, this)
        }, proto.webcast.im.GamePVPMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 2, "0"),
                extra: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GamePVPMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GamePVPMessage;
            return proto.webcast.im.GamePVPMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GamePVPMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GamePVPMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GamePVPMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GamePVPMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), (s = e.getExtra()).length > 0 && t.writeString(3, s)
        }, proto.webcast.im.GamePVPMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GamePVPMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GamePVPMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GamePVPMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GamePVPMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GamePVPMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GamePVPMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.GamePVPMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 21282: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(94683);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GameStatusUpdateMessage", null, a), o.exportSymbol("proto.webcast.im.UpdatePresentMsgType", null, a), proto.webcast.im.GameStatusUpdateMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameStatusUpdateMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameStatusUpdateMessage.displayName = "proto.webcast.im.GameStatusUpdateMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameStatusUpdateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameStatusUpdateMessage.toObject(e, this)
        }, proto.webcast.im.GameStatusUpdateMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                anchorId: r.Message.getFieldWithDefault(t, 2, "0"),
                roomId: r.Message.getFieldWithDefault(t, 3, "0"),
                gameKind: r.Message.getFieldWithDefault(t, 4, 0),
                gameId: r.Message.getFieldWithDefault(t, 5, "0"),
                roundId: r.Message.getFieldWithDefault(t, 6, "0"),
                eventTime: r.Message.getFieldWithDefault(t, 7, 0),
                presentMsgType: r.Message.getFieldWithDefault(t, 8, 0),
                configExtra: r.Message.getFieldWithDefault(t, 9, ""),
                playKind: r.Message.getFieldWithDefault(t, 10, "0"),
                switchId: r.Message.getFieldWithDefault(t, 11, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameStatusUpdateMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameStatusUpdateMessage;
            return proto.webcast.im.GameStatusUpdateMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameStatusUpdateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setAnchorId(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setRoomId(s);
                        break;
                    case 4:
                        s = t.readEnum();
                        e.setGameKind(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setGameId(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setRoundId(s);
                        break;
                    case 7:
                        s = t.readInt32();
                        e.setEventTime(s);
                        break;
                    case 8:
                        s = t.readInt32();
                        e.setPresentMsgType(s);
                        break;
                    case 9:
                        s = t.readString();
                        e.setConfigExtra(s);
                        break;
                    case 10:
                        s = t.readInt64String();
                        e.setPlayKind(s);
                        break;
                    case 11:
                        s = t.readInt64String();
                        e.setSwitchId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameStatusUpdateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameStatusUpdateMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), s = e.getAnchorId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getRoomId(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), 0 !== (s = e.getGameKind()) && t.writeEnum(4, s), s = e.getGameId(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getRoundId(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), 0 !== (s = e.getEventTime()) && t.writeInt32(7, s), 0 !== (s = e.getPresentMsgType()) && t.writeInt32(8, s), (s = e.getConfigExtra()).length > 0 && t.writeString(9, s), s = e.getPlayKind(), 0 !== parseInt(s, 10) && t.writeInt64String(10, s), s = e.getSwitchId(), 0 !== parseInt(s, 10) && t.writeInt64String(11, s)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getAnchorId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setAnchorId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getGameKind = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setGameKind = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getRoundId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setRoundId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getEventTime = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setEventTime = function (e) {
            return r.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getPresentMsgType = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setPresentMsgType = function (e) {
            return r.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getConfigExtra = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setConfigExtra = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getPlayKind = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setPlayKind = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.getSwitchId = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.GameStatusUpdateMessage.prototype.setSwitchId = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.UpdatePresentMsgType = {
            TYPEUNDEFINED: 0,
            TYPESTART: 1,
            TYPEENABLE: 2,
            TYPEDISABLE: 3,
            TYPESTOP: 4
        }, o.object.extend(t, proto.webcast.im)
    }, 70856: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(99222);
        o.object.extend(proto, i);
        var n = s(94683);
        o.object.extend(proto, n);
        var g = s(50684);
        o.object.extend(proto, g), o.exportSymbol("proto.webcast.im.BizTypeEnum", null, a), o.exportSymbol("proto.webcast.im.GameCPAnchorReminderMessage", null, a), o.exportSymbol("proto.webcast.im.GameCPBaseMessage", null, a), o.exportSymbol("proto.webcast.im.GameCPMessageEnum", null, a), o.exportSymbol("proto.webcast.im.GameCPShowMessage", null, a), o.exportSymbol("proto.webcast.im.GameCPUserDownloadMessage", null, a), o.exportSymbol("proto.webcast.im.GameCPUserDownloadMessageEnum", null, a), o.exportSymbol("proto.webcast.im.GameCPUserRoomMetaMessage", null, a), o.exportSymbol("proto.webcast.im.GameCPUserRoomMetaUpdateOperEnum", null, a), o.exportSymbol("proto.webcast.im.ReserveItem", null, a), o.exportSymbol("proto.webcast.im.UserGiftStatus", null, a), o.exportSymbol("proto.webcast.im.UserIntroduceCardStatus", null, a), proto.webcast.im.GameCPBaseMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameCPBaseMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameCPBaseMessage.displayName = "proto.webcast.im.GameCPBaseMessage"), proto.webcast.im.GameCPShowMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.GameCPShowMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GameCPShowMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameCPShowMessage.displayName = "proto.webcast.im.GameCPShowMessage"), proto.webcast.im.ReserveItem = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.ReserveItem, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.ReserveItem.displayName = "proto.webcast.im.ReserveItem"), proto.webcast.im.GameCPUserDownloadMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameCPUserDownloadMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameCPUserDownloadMessage.displayName = "proto.webcast.im.GameCPUserDownloadMessage"), proto.webcast.im.GameCPAnchorReminderMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GameCPAnchorReminderMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameCPAnchorReminderMessage.displayName = "proto.webcast.im.GameCPAnchorReminderMessage"), proto.webcast.im.GameCPUserRoomMetaMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.GameCPUserRoomMetaMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GameCPUserRoomMetaMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GameCPUserRoomMetaMessage.displayName = "proto.webcast.im.GameCPUserRoomMetaMessage"), proto.webcast.im.UserIntroduceCardStatus = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.UserIntroduceCardStatus, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.UserIntroduceCardStatus.displayName = "proto.webcast.im.UserIntroduceCardStatus"), proto.webcast.im.UserGiftStatus = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.UserGiftStatus, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.UserGiftStatus.displayName = "proto.webcast.im.UserGiftStatus"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCPBaseMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCPBaseMessage.toObject(e, this)
        }, proto.webcast.im.GameCPBaseMessage.toObject = function (e, t) {
            var s, r = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                showInfo: (s = t.getShowInfo()) && proto.webcast.im.GameCPShowMessage.toObject(e, s)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.GameCPBaseMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameCPBaseMessage;
            return proto.webcast.im.GameCPBaseMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameCPBaseMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new proto.webcast.im.GameCPShowMessage;
                        t.readMessage(s, proto.webcast.im.GameCPShowMessage.deserializeBinaryFromReader), e.setShowInfo(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameCPBaseMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameCPBaseMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameCPBaseMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), null != (s = e.getShowInfo()) && t.writeMessage(2, s, proto.webcast.im.GameCPShowMessage.serializeBinaryToWriter)
        }, proto.webcast.im.GameCPBaseMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.GameCPBaseMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameCPBaseMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameCPBaseMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameCPBaseMessage.prototype.getShowInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.GameCPShowMessage, 2)
        }, proto.webcast.im.GameCPBaseMessage.prototype.setShowInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GameCPBaseMessage.prototype.clearShowInfo = function () {
            return this.setShowInfo(undefined)
        }, proto.webcast.im.GameCPBaseMessage.prototype.hasShowInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.GameCPShowMessage.repeatedFields_ = [7, 55], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCPShowMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCPShowMessage.toObject(e, this)
        }, proto.webcast.im.GameCPShowMessage.toObject = function (e, t) {
            var s, o = {
                type: r.Message.getFieldWithDefault(t, 1, 0),
                introduceDownloadInfo: (s = t.getIntroduceDownloadInfo()) && i.Text.toObject(e, s),
                gameImage: r.Message.getFieldWithDefault(t, 3, ""),
                gameName: r.Message.getFieldWithDefault(t, 4, ""),
                gameDownloadUrl: r.Message.getFieldWithDefault(t, 5, ""),
                gameTraceInfo: r.Message.getFieldWithDefault(t, 6, ""),
                gameTagNamesList: null == (s = r.Message.getRepeatedField(t, 7)) ? undefined : s,
                gameBackgroundColor: r.Message.getFieldWithDefault(t, 8, ""),
                introduceTimeLimit: r.Message.getFieldWithDefault(t, 9, 0),
                introduceStartTime: r.Message.getFieldWithDefault(t, 10, "0"),
                introduceStopType: r.Message.getFieldWithDefault(t, 11, 0),
                introduceStopMessage: (s = t.getIntroduceStopMessage()) && i.Text.toObject(e, s),
                gameId: r.Message.getFieldWithDefault(t, 13, ""),
                auditResult: r.Message.getBooleanFieldWithDefault(t, 14, !1),
                iosAppId: r.Message.getFieldWithDefault(t, 15, ""),
                companyName: r.Message.getFieldWithDefault(t, 16, ""),
                downloadExtra: r.Message.getFieldWithDefault(t, 17, ""),
                androidPrivacyUrl: r.Message.getFieldWithDefault(t, 18, ""),
                androidAuthorizationUrl: r.Message.getFieldWithDefault(t, 19, ""),
                iosPrivacyUrl: r.Message.getFieldWithDefault(t, 20, ""),
                iosAuthorizationUrl: r.Message.getFieldWithDefault(t, 21, ""),
                androidVersion: r.Message.getFieldWithDefault(t, 22, ""),
                iosVersion: r.Message.getFieldWithDefault(t, 23, ""),
                activeLink: r.Message.getFieldWithDefault(t, 24, ""),
                downloadCount: r.Message.getFieldWithDefault(t, 25, "0"),
                isShowAnimate: r.Message.getBooleanFieldWithDefault(t, 26, !1),
                animateStartTime: r.Message.getFieldWithDefault(t, 27, "0"),
                animateDuration: r.Message.getFieldWithDefault(t, 28, "0"),
                antiHijackContent: r.Message.getFieldWithDefault(t, 29, ""),
                antiHijackImage: r.Message.getFieldWithDefault(t, 30, ""),
                iosSalePoint: r.Message.getFieldWithDefault(t, 31, ""),
                isForbidJumpIosApp: r.Message.getBooleanFieldWithDefault(t, 32, !1),
                hasPlatformGift: r.Message.getBooleanFieldWithDefault(t, 33, !1),
                openGameUrl: r.Message.getFieldWithDefault(t, 44, ""),
                propIcon: r.Message.getFieldWithDefault(t, 45, ""),
                propName: r.Message.getFieldWithDefault(t, 46, ""),
                propId: r.Message.getFieldWithDefault(t, 47, ""),
                marketPrice: r.Message.getFieldWithDefault(t, 48, "0"),
                sellingPrice: r.Message.getFieldWithDefault(t, 49, "0"),
                propSkuId: r.Message.getFieldWithDefault(t, 50, "0"),
                reserveItem: (s = t.getReserveItem()) && proto.webcast.im.ReserveItem.toObject(e, s),
                propType: r.Message.getFieldWithDefault(t, 52, "0"),
                gameAccessType: r.Message.getFieldWithDefault(t, 53, "0"),
                isPropExpGame: r.Message.getBooleanFieldWithDefault(t, 54, !1),
                componentIdsList: null == (s = r.Message.getRepeatedField(t, 55)) ? undefined : s,
                bizType: r.Message.getFieldWithDefault(t, 56, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GameCPShowMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameCPShowMessage;
            return proto.webcast.im.GameCPShowMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GameCPShowMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readEnum();
                        e.setType(s);
                        break;
                    case 2:
                        s = new i.Text;
                        t.readMessage(s, i.Text.deserializeBinaryFromReader), e.setIntroduceDownloadInfo(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setGameImage(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setGameName(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setGameDownloadUrl(s);
                        break;
                    case 6:
                        s = t.readString();
                        e.setGameTraceInfo(s);
                        break;
                    case 7:
                        s = t.readString();
                        e.addGameTagNames(s);
                        break;
                    case 8:
                        s = t.readString();
                        e.setGameBackgroundColor(s);
                        break;
                    case 9:
                        s = t.readInt32();
                        e.setIntroduceTimeLimit(s);
                        break;
                    case 10:
                        s = t.readInt64String();
                        e.setIntroduceStartTime(s);
                        break;
                    case 11:
                        s = t.readInt32();
                        e.setIntroduceStopType(s);
                        break;
                    case 12:
                        s = new i.Text;
                        t.readMessage(s, i.Text.deserializeBinaryFromReader), e.setIntroduceStopMessage(s);
                        break;
                    case 13:
                        s = t.readString();
                        e.setGameId(s);
                        break;
                    case 14:
                        s = t.readBool();
                        e.setAuditResult(s);
                        break;
                    case 15:
                        s = t.readString();
                        e.setIosAppId(s);
                        break;
                    case 16:
                        s = t.readString();
                        e.setCompanyName(s);
                        break;
                    case 17:
                        s = t.readString();
                        e.setDownloadExtra(s);
                        break;
                    case 18:
                        s = t.readString();
                        e.setAndroidPrivacyUrl(s);
                        break;
                    case 19:
                        s = t.readString();
                        e.setAndroidAuthorizationUrl(s);
                        break;
                    case 20:
                        s = t.readString();
                        e.setIosPrivacyUrl(s);
                        break;
                    case 21:
                        s = t.readString();
                        e.setIosAuthorizationUrl(s);
                        break;
                    case 22:
                        s = t.readString();
                        e.setAndroidVersion(s);
                        break;
                    case 23:
                        s = t.readString();
                        e.setIosVersion(s);
                        break;
                    case 24:
                        s = t.readString();
                        e.setActiveLink(s);
                        break;
                    case 25:
                        s = t.readInt64String();
                        e.setDownloadCount(s);
                        break;
                    case 26:
                        s = t.readBool();
                        e.setIsShowAnimate(s);
                        break;
                    case 27:
                        s = t.readInt64String();
                        e.setAnimateStartTime(s);
                        break;
                    case 28:
                        s = t.readInt64String();
                        e.setAnimateDuration(s);
                        break;
                    case 29:
                        s = t.readString();
                        e.setAntiHijackContent(s);
                        break;
                    case 30:
                        s = t.readString();
                        e.setAntiHijackImage(s);
                        break;
                    case 31:
                        s = t.readString();
                        e.setIosSalePoint(s);
                        break;
                    case 32:
                        s = t.readBool();
                        e.setIsForbidJumpIosApp(s);
                        break;
                    case 33:
                        s = t.readBool();
                        e.setHasPlatformGift(s);
                        break;
                    case 44:
                        s = t.readString();
                        e.setOpenGameUrl(s);
                        break;
                    case 45:
                        s = t.readString();
                        e.setPropIcon(s);
                        break;
                    case 46:
                        s = t.readString();
                        e.setPropName(s);
                        break;
                    case 47:
                        s = t.readString();
                        e.setPropId(s);
                        break;
                    case 48:
                        s = t.readInt64String();
                        e.setMarketPrice(s);
                        break;
                    case 49:
                        s = t.readInt64String();
                        e.setSellingPrice(s);
                        break;
                    case 50:
                        s = t.readInt64String();
                        e.setPropSkuId(s);
                        break;
                    case 51:
                        s = new proto.webcast.im.ReserveItem;
                        t.readMessage(s, proto.webcast.im.ReserveItem.deserializeBinaryFromReader), e.setReserveItem(s);
                        break;
                    case 52:
                        s = t.readInt64String();
                        e.setPropType(s);
                        break;
                    case 53:
                        s = t.readInt64String();
                        e.setGameAccessType(s);
                        break;
                    case 54:
                        s = t.readBool();
                        e.setIsPropExpGame(s);
                        break;
                    case 55:
                        s = t.readString();
                        e.addComponentIds(s);
                        break;
                    case 56:
                        s = t.readEnum();
                        e.setBizType(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameCPShowMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameCPShowMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameCPShowMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            0 !== (s = e.getType()) && t.writeEnum(1, s), null != (s = e.getIntroduceDownloadInfo()) && t.writeMessage(2, s, i.Text.serializeBinaryToWriter), (s = e.getGameImage()).length > 0 && t.writeString(3, s), (s = e.getGameName()).length > 0 && t.writeString(4, s), (s = e.getGameDownloadUrl()).length > 0 && t.writeString(5, s), (s = e.getGameTraceInfo()).length > 0 && t.writeString(6, s), (s = e.getGameTagNamesList()).length > 0 && t.writeRepeatedString(7, s), (s = e.getGameBackgroundColor()).length > 0 && t.writeString(8, s), 0 !== (s = e.getIntroduceTimeLimit()) && t.writeInt32(9, s), s = e.getIntroduceStartTime(), 0 !== parseInt(s, 10) && t.writeInt64String(10, s), 0 !== (s = e.getIntroduceStopType()) && t.writeInt32(11, s), null != (s = e.getIntroduceStopMessage()) && t.writeMessage(12, s, i.Text.serializeBinaryToWriter), (s = e.getGameId()).length > 0 && t.writeString(13, s), (s = e.getAuditResult()) && t.writeBool(14, s), (s = e.getIosAppId()).length > 0 && t.writeString(15, s), (s = e.getCompanyName()).length > 0 && t.writeString(16, s), (s = e.getDownloadExtra()).length > 0 && t.writeString(17, s), (s = e.getAndroidPrivacyUrl()).length > 0 && t.writeString(18, s), (s = e.getAndroidAuthorizationUrl()).length > 0 && t.writeString(19, s), (s = e.getIosPrivacyUrl()).length > 0 && t.writeString(20, s), (s = e.getIosAuthorizationUrl()).length > 0 && t.writeString(21, s), (s = e.getAndroidVersion()).length > 0 && t.writeString(22, s), (s = e.getIosVersion()).length > 0 && t.writeString(23, s), (s = e.getActiveLink()).length > 0 && t.writeString(24, s), s = e.getDownloadCount(), 0 !== parseInt(s, 10) && t.writeInt64String(25, s), (s = e.getIsShowAnimate()) && t.writeBool(26, s), s = e.getAnimateStartTime(), 0 !== parseInt(s, 10) && t.writeInt64String(27, s), s = e.getAnimateDuration(), 0 !== parseInt(s, 10) && t.writeInt64String(28, s), (s = e.getAntiHijackContent()).length > 0 && t.writeString(29, s), (s = e.getAntiHijackImage()).length > 0 && t.writeString(30, s), (s = e.getIosSalePoint()).length > 0 && t.writeString(31, s), (s = e.getIsForbidJumpIosApp()) && t.writeBool(32, s), (s = e.getHasPlatformGift()) && t.writeBool(33, s), (s = e.getOpenGameUrl()).length > 0 && t.writeString(44, s), (s = e.getPropIcon()).length > 0 && t.writeString(45, s), (s = e.getPropName()).length > 0 && t.writeString(46, s), (s = e.getPropId()).length > 0 && t.writeString(47, s), s = e.getMarketPrice(), 0 !== parseInt(s, 10) && t.writeInt64String(48, s), s = e.getSellingPrice(), 0 !== parseInt(s, 10) && t.writeInt64String(49, s), s = e.getPropSkuId(), 0 !== parseInt(s, 10) && t.writeInt64String(50, s), null != (s = e.getReserveItem()) && t.writeMessage(51, s, proto.webcast.im.ReserveItem.serializeBinaryToWriter), s = e.getPropType(), 0 !== parseInt(s, 10) && t.writeInt64String(52, s), s = e.getGameAccessType(), 0 !== parseInt(s, 10) && t.writeInt64String(53, s), (s = e.getIsPropExpGame()) && t.writeBool(54, s), (s = e.getComponentIdsList()).length > 0 && t.writeRepeatedString(55, s), 0 !== (s = e.getBizType()) && t.writeEnum(56, s)
        }, proto.webcast.im.GameCPShowMessage.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.GameCPShowMessage.prototype.setType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIntroduceDownloadInfo = function () {
            return r.Message.getWrapperField(this, i.Text, 2)
        }, proto.webcast.im.GameCPShowMessage.prototype.setIntroduceDownloadInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.clearIntroduceDownloadInfo = function () {
            return this.setIntroduceDownloadInfo(undefined)
        }, proto.webcast.im.GameCPShowMessage.prototype.hasIntroduceDownloadInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameImage = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameImage = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameName = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameName = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameDownloadUrl = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameDownloadUrl = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameTraceInfo = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameTraceInfo = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameTagNamesList = function () {
            return r.Message.getRepeatedField(this, 7)
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameTagNamesList = function (e) {
            return r.Message.setField(this, 7, e || [])
        }, proto.webcast.im.GameCPShowMessage.prototype.addGameTagNames = function (e, t) {
            return r.Message.addToRepeatedField(this, 7, e, t)
        }, proto.webcast.im.GameCPShowMessage.prototype.clearGameTagNamesList = function () {
            return this.setGameTagNamesList([])
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameBackgroundColor = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameBackgroundColor = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIntroduceTimeLimit = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.GameCPShowMessage.prototype.setIntroduceTimeLimit = function (e) {
            return r.Message.setProto3IntField(this, 9, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIntroduceStartTime = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.GameCPShowMessage.prototype.setIntroduceStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIntroduceStopType = function () {
            return r.Message.getFieldWithDefault(this, 11, 0)
        }, proto.webcast.im.GameCPShowMessage.prototype.setIntroduceStopType = function (e) {
            return r.Message.setProto3IntField(this, 11, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIntroduceStopMessage = function () {
            return r.Message.getWrapperField(this, i.Text, 12)
        }, proto.webcast.im.GameCPShowMessage.prototype.setIntroduceStopMessage = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.clearIntroduceStopMessage = function () {
            return this.setIntroduceStopMessage(undefined)
        }, proto.webcast.im.GameCPShowMessage.prototype.hasIntroduceStopMessage = function () {
            return null != r.Message.getField(this, 12)
        }, proto.webcast.im.GameCPShowMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringField(this, 13, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getAuditResult = function () {
            return r.Message.getBooleanFieldWithDefault(this, 14, !1)
        }, proto.webcast.im.GameCPShowMessage.prototype.setAuditResult = function (e) {
            return r.Message.setProto3BooleanField(this, 14, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIosAppId = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setIosAppId = function (e) {
            return r.Message.setProto3StringField(this, 15, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getCompanyName = function () {
            return r.Message.getFieldWithDefault(this, 16, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setCompanyName = function (e) {
            return r.Message.setProto3StringField(this, 16, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getDownloadExtra = function () {
            return r.Message.getFieldWithDefault(this, 17, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setDownloadExtra = function (e) {
            return r.Message.setProto3StringField(this, 17, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getAndroidPrivacyUrl = function () {
            return r.Message.getFieldWithDefault(this, 18, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setAndroidPrivacyUrl = function (e) {
            return r.Message.setProto3StringField(this, 18, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getAndroidAuthorizationUrl = function () {
            return r.Message.getFieldWithDefault(this, 19, "")
        }, proto.webcast.im.GameCPShowMessage.prototype.setAndroidAuthorizationUrl = function (e) {
            return r.Message.setProto3StringField(this, 19, e)
        }, proto.webcast.im.GameCPShowMessage.prototype.getIosPrivacyUrl = function () {
            return r.Message.getFieldWithDefault(this, 20, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setIosPrivacyUrl = function (e) {
            return r.Message.setProto3StringField(this, 20, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getIosAuthorizationUrl = function () {
            return r.Message.getFieldWithDefault(this, 21, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setIosAuthorizationUrl = function (e) {
            return r.Message.setProto3StringField(this, 21, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getAndroidVersion = function () {
            return r.Message.getFieldWithDefault(this, 22, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setAndroidVersion = function (e) {
            return r.Message.setProto3StringField(this, 22, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getIosVersion = function () {
            return r.Message.getFieldWithDefault(this, 23, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setIosVersion = function (e) {
            return r.Message.setProto3StringField(this, 23, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getActiveLink = function () {
            return r.Message.getFieldWithDefault(this, 24, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setActiveLink = function (e) {
            return r.Message.setProto3StringField(this, 24, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getDownloadCount = function () {
            return r.Message.getFieldWithDefault(this, 25, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setDownloadCount = function (e) {
            return r.Message.setProto3StringIntField(this, 25, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getIsShowAnimate = function () {
            return r.Message.getBooleanFieldWithDefault(this, 26, !1)
        },proto.webcast.im.GameCPShowMessage.prototype.setIsShowAnimate = function (e) {
            return r.Message.setProto3BooleanField(this, 26, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getAnimateStartTime = function () {
            return r.Message.getFieldWithDefault(this, 27, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setAnimateStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 27, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getAnimateDuration = function () {
            return r.Message.getFieldWithDefault(this, 28, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setAnimateDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 28, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getAntiHijackContent = function () {
            return r.Message.getFieldWithDefault(this, 29, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setAntiHijackContent = function (e) {
            return r.Message.setProto3StringField(this, 29, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getAntiHijackImage = function () {
            return r.Message.getFieldWithDefault(this, 30, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setAntiHijackImage = function (e) {
            return r.Message.setProto3StringField(this, 30, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getIosSalePoint = function () {
            return r.Message.getFieldWithDefault(this, 31, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setIosSalePoint = function (e) {
            return r.Message.setProto3StringField(this, 31, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getIsForbidJumpIosApp = function () {
            return r.Message.getBooleanFieldWithDefault(this, 32, !1)
        },proto.webcast.im.GameCPShowMessage.prototype.setIsForbidJumpIosApp = function (e) {
            return r.Message.setProto3BooleanField(this, 32, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getHasPlatformGift = function () {
            return r.Message.getBooleanFieldWithDefault(this, 33, !1)
        },proto.webcast.im.GameCPShowMessage.prototype.setHasPlatformGift = function (e) {
            return r.Message.setProto3BooleanField(this, 33, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getOpenGameUrl = function () {
            return r.Message.getFieldWithDefault(this, 44, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setOpenGameUrl = function (e) {
            return r.Message.setProto3StringField(this, 44, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getPropIcon = function () {
            return r.Message.getFieldWithDefault(this, 45, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setPropIcon = function (e) {
            return r.Message.setProto3StringField(this, 45, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getPropName = function () {
            return r.Message.getFieldWithDefault(this, 46, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setPropName = function (e) {
            return r.Message.setProto3StringField(this, 46, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getPropId = function () {
            return r.Message.getFieldWithDefault(this, 47, "")
        },proto.webcast.im.GameCPShowMessage.prototype.setPropId = function (e) {
            return r.Message.setProto3StringField(this, 47, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getMarketPrice = function () {
            return r.Message.getFieldWithDefault(this, 48, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setMarketPrice = function (e) {
            return r.Message.setProto3StringIntField(this, 48, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getSellingPrice = function () {
            return r.Message.getFieldWithDefault(this, 49, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setSellingPrice = function (e) {
            return r.Message.setProto3StringIntField(this, 49, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getPropSkuId = function () {
            return r.Message.getFieldWithDefault(this, 50, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setPropSkuId = function (e) {
            return r.Message.setProto3StringIntField(this, 50, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getReserveItem = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ReserveItem, 51)
        },proto.webcast.im.GameCPShowMessage.prototype.setReserveItem = function (e) {
            return r.Message.setWrapperField(this, 51, e)
        },proto.webcast.im.GameCPShowMessage.prototype.clearReserveItem = function () {
            return this.setReserveItem(undefined)
        },proto.webcast.im.GameCPShowMessage.prototype.hasReserveItem = function () {
            return null != r.Message.getField(this, 51)
        },proto.webcast.im.GameCPShowMessage.prototype.getPropType = function () {
            return r.Message.getFieldWithDefault(this, 52, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setPropType = function (e) {
            return r.Message.setProto3StringIntField(this, 52, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getGameAccessType = function () {
            return r.Message.getFieldWithDefault(this, 53, "0")
        },proto.webcast.im.GameCPShowMessage.prototype.setGameAccessType = function (e) {
            return r.Message.setProto3StringIntField(this, 53, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getIsPropExpGame = function () {
            return r.Message.getBooleanFieldWithDefault(this, 54, !1)
        },proto.webcast.im.GameCPShowMessage.prototype.setIsPropExpGame = function (e) {
            return r.Message.setProto3BooleanField(this, 54, e)
        },proto.webcast.im.GameCPShowMessage.prototype.getComponentIdsList = function () {
            return r.Message.getRepeatedField(this, 55)
        },proto.webcast.im.GameCPShowMessage.prototype.setComponentIdsList = function (e) {
            return r.Message.setField(this, 55, e || [])
        },proto.webcast.im.GameCPShowMessage.prototype.addComponentIds = function (e, t) {
            return r.Message.addToRepeatedField(this, 55, e, t)
        },proto.webcast.im.GameCPShowMessage.prototype.clearComponentIdsList = function () {
            return this.setComponentIdsList([])
        },proto.webcast.im.GameCPShowMessage.prototype.getBizType = function () {
            return r.Message.getFieldWithDefault(this, 56, 0)
        },proto.webcast.im.GameCPShowMessage.prototype.setBizType = function (e) {
            return r.Message.setProto3EnumField(this, 56, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ReserveItem.prototype.toObject = function (e) {
            return proto.webcast.im.ReserveItem.toObject(e, this)
        }, proto.webcast.im.ReserveItem.toObject = function (e, t) {
            var s = {
                reserveTodayNum: r.Message.getFieldWithDefault(t, 1, ""),
                reserveTotalNum: r.Message.getFieldWithDefault(t, 2, ""),
                reserveStatus: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }),proto.webcast.im.ReserveItem.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.ReserveItem;
            return proto.webcast.im.ReserveItem.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.ReserveItem.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readString();
                        e.setReserveTodayNum(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setReserveTotalNum(s);
                        break;
                    case 3:
                        s = t.readInt32();
                        e.setReserveStatus(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ReserveItem.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ReserveItem.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ReserveItem.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getReserveTodayNum()).length > 0 && t.writeString(1, s), (s = e.getReserveTotalNum()).length > 0 && t.writeString(2, s), 0 !== (s = e.getReserveStatus()) && t.writeInt32(3, s)
        },proto.webcast.im.ReserveItem.prototype.getReserveTodayNum = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.ReserveItem.prototype.setReserveTodayNum = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.ReserveItem.prototype.getReserveTotalNum = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.ReserveItem.prototype.setReserveTotalNum = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.ReserveItem.prototype.getReserveStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.ReserveItem.prototype.setReserveStatus = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCPUserDownloadMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCPUserDownloadMessage.toObject(e, this)
        }, proto.webcast.im.GameCPUserDownloadMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                userNickName: r.Message.getFieldWithDefault(t, 2, ""),
                userDownloadCount: r.Message.getFieldWithDefault(t, 3, "0"),
                userDownloadContent: r.Message.getFieldWithDefault(t, 4, ""),
                downloadGameName: r.Message.getFieldWithDefault(t, 5, ""),
                type: r.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.GameCPUserDownloadMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameCPUserDownloadMessage;
            return proto.webcast.im.GameCPUserDownloadMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.GameCPUserDownloadMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setUserNickName(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setUserDownloadCount(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setUserDownloadContent(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setDownloadGameName(s);
                        break;
                    case 6:
                        s = t.readEnum();
                        e.setType(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameCPUserDownloadMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.GameCPUserDownloadMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), (s = e.getUserNickName()).length > 0 && t.writeString(2, s), s = e.getUserDownloadCount(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getUserDownloadContent()).length > 0 && t.writeString(4, s), (s = e.getDownloadGameName()).length > 0 && t.writeString(5, s), 0 !== (s = e.getType()) && t.writeEnum(6, s)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.getUserNickName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.setUserNickName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.getUserDownloadCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.setUserDownloadCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.getUserDownloadContent = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.setUserDownloadContent = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.getDownloadGameName = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.setDownloadGameName = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.webcast.im.GameCPUserDownloadMessage.prototype.setType = function (e) {
            return r.Message.setProto3EnumField(this, 6, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCPAnchorReminderMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCPAnchorReminderMessage.toObject(e, this)
        }, proto.webcast.im.GameCPAnchorReminderMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                type: r.Message.getFieldWithDefault(t, 2, 0),
                gameId: r.Message.getFieldWithDefault(t, 3, ""),
                title: r.Message.getFieldWithDefault(t, 4, ""),
                gameName: r.Message.getFieldWithDefault(t, 5, ""),
                gameIconUrl: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.GameCPAnchorReminderMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameCPAnchorReminderMessage;
            return proto.webcast.im.GameCPAnchorReminderMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.GameCPAnchorReminderMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readEnum();
                        e.setType(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setGameId(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setTitle(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setGameName(s);
                        break;
                    case 6:
                        s = t.readString();
                        e.setGameIconUrl(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameCPAnchorReminderMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.GameCPAnchorReminderMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), 0 !== (s = e.getType()) && t.writeEnum(2, s), (s = e.getGameId()).length > 0 && t.writeString(3, s), (s = e.getTitle()).length > 0 && t.writeString(4, s), (s = e.getGameName()).length > 0 && t.writeString(5, s), (s = e.getGameIconUrl()).length > 0 && t.writeString(6, s)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.setType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.setGameId = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.getGameName = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.setGameName = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.getGameIconUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.GameCPAnchorReminderMessage.prototype.setGameIconUrl = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.GameCPUserRoomMetaMessage.repeatedFields_ = [4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCPUserRoomMetaMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCPUserRoomMetaMessage.toObject(e, this)
        }, proto.webcast.im.GameCPUserRoomMetaMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                oper: r.Message.getFieldWithDefault(t, 2, "0"),
                userIntroduceCardStatus: (s = t.getUserIntroduceCardStatus()) && proto.webcast.im.UserIntroduceCardStatus.toObject(e, s),
                userGiftStatusList: r.Message.toObjectList(t.getUserGiftStatusList(), proto.webcast.im.UserGiftStatus.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.GameCPUserRoomMetaMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GameCPUserRoomMetaMessage;
            return proto.webcast.im.GameCPUserRoomMetaMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.GameCPUserRoomMetaMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setOper(s);
                        break;
                    case 3:
                        s = new proto.webcast.im.UserIntroduceCardStatus;
                        t.readMessage(s, proto.webcast.im.UserIntroduceCardStatus.deserializeBinaryFromReader), e.setUserIntroduceCardStatus(s);
                        break;
                    case 4:
                        s = new proto.webcast.im.UserGiftStatus;
                        t.readMessage(s, proto.webcast.im.UserGiftStatus.deserializeBinaryFromReader), e.addUserGiftStatus(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameCPUserRoomMetaMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.GameCPUserRoomMetaMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), s = e.getOper(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), null != (s = e.getUserIntroduceCardStatus()) && t.writeMessage(3, s, proto.webcast.im.UserIntroduceCardStatus.serializeBinaryToWriter), (s = e.getUserGiftStatusList()).length > 0 && t.writeRepeatedMessage(4, s, proto.webcast.im.UserGiftStatus.serializeBinaryToWriter)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.getOper = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.setOper = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.getUserIntroduceCardStatus = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.UserIntroduceCardStatus, 3)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.setUserIntroduceCardStatus = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.clearUserIntroduceCardStatus = function () {
            return this.setUserIntroduceCardStatus(undefined)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.hasUserIntroduceCardStatus = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.getUserGiftStatusList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.UserGiftStatus, 4)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.setUserGiftStatusList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.addUserGiftStatus = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.UserGiftStatus, t)
        },proto.webcast.im.GameCPUserRoomMetaMessage.prototype.clearUserGiftStatusList = function () {
            return this.setUserGiftStatusList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserIntroduceCardStatus.prototype.toObject = function (e) {
            return proto.webcast.im.UserIntroduceCardStatus.toObject(e, this)
        }, proto.webcast.im.UserIntroduceCardStatus.toObject = function (e, t) {
            var s = {
                isShowCard: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                introduceDuration: r.Message.getFieldWithDefault(t, 2, "0"),
                timerSpan: r.Message.getFieldWithDefault(t, 3, "0"),
                timerLoopCnt: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }),proto.webcast.im.UserIntroduceCardStatus.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.UserIntroduceCardStatus;
            return proto.webcast.im.UserIntroduceCardStatus.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.UserIntroduceCardStatus.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readBool();
                        e.setIsShowCard(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setIntroduceDuration(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setTimerSpan(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setTimerLoopCnt(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.UserIntroduceCardStatus.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserIntroduceCardStatus.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.UserIntroduceCardStatus.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getIsShowCard()) && t.writeBool(1, s), s = e.getIntroduceDuration(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getTimerSpan(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getTimerLoopCnt(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s)
        },proto.webcast.im.UserIntroduceCardStatus.prototype.getIsShowCard = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.webcast.im.UserIntroduceCardStatus.prototype.setIsShowCard = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        },proto.webcast.im.UserIntroduceCardStatus.prototype.getIntroduceDuration = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.UserIntroduceCardStatus.prototype.setIntroduceDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.UserIntroduceCardStatus.prototype.getTimerSpan = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.UserIntroduceCardStatus.prototype.setTimerSpan = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.UserIntroduceCardStatus.prototype.getTimerLoopCnt = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.UserIntroduceCardStatus.prototype.setTimerLoopCnt = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserGiftStatus.prototype.toObject = function (e) {
            return proto.webcast.im.UserGiftStatus.toObject(e, this)
        }, proto.webcast.im.UserGiftStatus.toObject = function (e, t) {
            var s = {
                playId: r.Message.getFieldWithDefault(t, 1, ""),
                gameId: r.Message.getFieldWithDefault(t, 2, ""),
                hint: r.Message.getFieldWithDefault(t, 3, ""),
                title: r.Message.getFieldWithDefault(t, 4, ""),
                focusIndex: r.Message.getFieldWithDefault(t, 5, 0),
                loginDays: r.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }),proto.webcast.im.UserGiftStatus.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.UserGiftStatus;
            return proto.webcast.im.UserGiftStatus.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.UserGiftStatus.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readString();
                        e.setPlayId(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setGameId(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setHint(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setTitle(s);
                        break;
                    case 5:
                        s = t.readInt32();
                        e.setFocusIndex(s);
                        break;
                    case 6:
                        s = t.readInt32();
                        e.setLoginDays(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.UserGiftStatus.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserGiftStatus.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.UserGiftStatus.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getPlayId()).length > 0 && t.writeString(1, s), (s = e.getGameId()).length > 0 && t.writeString(2, s), (s = e.getHint()).length > 0 && t.writeString(3, s), (s = e.getTitle()).length > 0 && t.writeString(4, s), 0 !== (s = e.getFocusIndex()) && t.writeInt32(5, s), 0 !== (s = e.getLoginDays()) && t.writeInt32(6, s)
        },proto.webcast.im.UserGiftStatus.prototype.getPlayId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.UserGiftStatus.prototype.setPlayId = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.UserGiftStatus.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.UserGiftStatus.prototype.setGameId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.UserGiftStatus.prototype.getHint = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.UserGiftStatus.prototype.setHint = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.UserGiftStatus.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.UserGiftStatus.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.UserGiftStatus.prototype.getFocusIndex = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.im.UserGiftStatus.prototype.setFocusIndex = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        },proto.webcast.im.UserGiftStatus.prototype.getLoginDays = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.webcast.im.UserGiftStatus.prototype.setLoginDays = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        },proto.webcast.im.GameCPMessageEnum = {
            OPENGAMECPICON: 0,
            CLOSEGAMECPICON: 1,
            MOVEGAMECPICON: 2,
            OPENGAMECPINTRODUCECARD: 3,
            CLOSEGAMECPINTRODUCECARD: 4,
            AUDITRECOMMENDRESULT: 5,
            PROMOTIONGAMESOFFLINE: 6,
            OPENGAMECPPROPINTRODUCECARD: 7,
            CLOSEGAMECPPROPINTRODUCECARD: 8,
            OPENGAMECPRESERVEINTRODUCECARD: 9,
            CLOSEGAMECPRESERVEINTRODUCECARD: 10
        },proto.webcast.im.BizTypeEnum = {
            GAMECP: 0,
            STAR: 1
        },proto.webcast.im.GameCPUserDownloadMessageEnum = {
            DEFAULTDOWNLOADMESSAGE: 0,
            USERRESERVEGAME: 1
        },proto.webcast.im.GameCPUserRoomMetaUpdateOperEnum = {
            DEFAULTUPDATEALLMETA: 0,
            UPDATEUSERINTRODUCECARDSTATUS: 1,
            UPDATEUSERGIFTSTATUS: 2
        },o.object.extend(t, proto.webcast.im)
    }, 11778: function (e, t, s) {
        var r = s(47865), o = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = s(50684);
        o.object.extend(proto, i);
        var n = s(95119);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GamePlayInviteMessage", null, a), o.exportSymbol("proto.webcast.im.GamePlayStatusMessage", null, a), o.exportSymbol("proto.webcast.im.GamePlayTeamStatusMessage", null, a), proto.webcast.im.GamePlayTeamStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.GamePlayTeamStatusMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GamePlayTeamStatusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GamePlayTeamStatusMessage.displayName = "proto.webcast.im.GamePlayTeamStatusMessage"), proto.webcast.im.GamePlayInviteMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GamePlayInviteMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GamePlayInviteMessage.displayName = "proto.webcast.im.GamePlayInviteMessage"), proto.webcast.im.GamePlayStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GamePlayStatusMessage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GamePlayStatusMessage.displayName = "proto.webcast.im.GamePlayStatusMessage"), proto.webcast.im.GamePlayTeamStatusMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GamePlayTeamStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GamePlayTeamStatusMessage.toObject(e, this)
        }, proto.webcast.im.GamePlayTeamStatusMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                memberListList: r.Message.toObjectList(t.getMemberListList(), n.PlayTeamMember.toObject, e),
                totalNum: r.Message.getFieldWithDefault(t, 3, 0),
                playId: r.Message.getFieldWithDefault(t, 4, "0"),
                toast: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GamePlayTeamStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GamePlayTeamStatusMessage;
            return proto.webcast.im.GamePlayTeamStatusMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GamePlayTeamStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.PlayTeamMember;
                        t.readMessage(s, n.PlayTeamMember.deserializeBinaryFromReader), e.addMemberList(s);
                        break;
                    case 3:
                        s = t.readInt32();
                        e.setTotalNum(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setPlayId(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setToast(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GamePlayTeamStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GamePlayTeamStatusMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), (s = e.getMemberListList()).length > 0 && t.writeRepeatedMessage(2, s, n.PlayTeamMember.serializeBinaryToWriter), 0 !== (s = e.getTotalNum()) && t.writeInt32(3, s), s = e.getPlayId(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), (s = e.getToast()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.getMemberListList = function () {
            return r.Message.getRepeatedWrapperField(this, n.PlayTeamMember, 2)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.setMemberListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.addMemberList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.PlayTeamMember, t)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.clearMemberListList = function () {
            return this.setMemberListList([])
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.getTotalNum = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.setTotalNum = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.getPlayId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.setPlayId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.GamePlayTeamStatusMessage.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GamePlayInviteMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GamePlayInviteMessage.toObject(e, this)
        }, proto.webcast.im.GamePlayInviteMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                schema: r.Message.getFieldWithDefault(t, 2, ""),
                playId: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GamePlayInviteMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GamePlayInviteMessage;
            return proto.webcast.im.GamePlayInviteMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GamePlayInviteMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setSchema(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setPlayId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GamePlayInviteMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GamePlayInviteMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GamePlayInviteMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), (s = e.getSchema()).length > 0 && t.writeString(2, s), s = e.getPlayId(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s)
        }, proto.webcast.im.GamePlayInviteMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GamePlayInviteMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GamePlayInviteMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GamePlayInviteMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GamePlayInviteMessage.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.GamePlayInviteMessage.prototype.setSchema = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.GamePlayInviteMessage.prototype.getPlayId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GamePlayInviteMessage.prototype.setPlayId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GamePlayStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GamePlayStatusMessage.toObject(e, this)
        }, proto.webcast.im.GamePlayStatusMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && i.Common.toObject(e, s),
                status: r.Message.getFieldWithDefault(t, 2, 0),
                playId: r.Message.getFieldWithDefault(t, 3, "0"),
                auditDenyToast: r.Message.getFieldWithDefault(t, 4, ""),
                toast: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GamePlayStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), s = new proto.webcast.im.GamePlayStatusMessage;
            return proto.webcast.im.GamePlayStatusMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GamePlayStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new i.Common;
                        t.readMessage(s, i.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readEnum();
                        e.setStatus(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setPlayId(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setAuditDenyToast(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setToast(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GamePlayStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GamePlayStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GamePlayStatusMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, i.Common.serializeBinaryToWriter), 0 !== (s = e.getStatus()) && t.writeEnum(2, s), s = e.getPlayId(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getAuditDenyToast()).length > 0 && t.writeString(4, s), (s = e.getToast()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.getPlayId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GamePlayStatusMessage.prototype.setPlayId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.getAuditDenyToast = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GamePlayStatusMessage.prototype.setAuditDenyToast = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GamePlayStatusMessage.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.GamePlayStatusMessage.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, o.object.extend(t, proto.webcast.im)
    }
}]);