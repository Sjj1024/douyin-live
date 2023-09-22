(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5641], {
    57613: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(50684);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.GiftConsumeRemindMessage", null, r), o.exportSymbol("proto.webcast.im.LynxParam", null, r), o.exportSymbol("proto.webcast.im.RemindType", null, r), o.exportSymbol("proto.webcast.im.Style", null, r), proto.webcast.im.LynxParam = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.LynxParam, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.LynxParam.displayName = "proto.webcast.im.LynxParam"), proto.webcast.im.GiftConsumeRemindMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GiftConsumeRemindMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftConsumeRemindMessage.displayName = "proto.webcast.im.GiftConsumeRemindMessage"), i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LynxParam.prototype.toObject = function (e) {
            return proto.webcast.im.LynxParam.toObject(e, this)
        }, proto.webcast.im.LynxParam.toObject = function (e, t) {
            var s = {
                style: i.Message.getFieldWithDefault(t, 1, 0),
                mainText: i.Message.getFieldWithDefault(t, 2, ""),
                expireDayText: i.Message.getFieldWithDefault(t, 3, ""),
                subText: i.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.LynxParam.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.LynxParam;
            return proto.webcast.im.LynxParam.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.LynxParam.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readEnum();
                        e.setStyle(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setMainText(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setExpireDayText(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setSubText(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LynxParam.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.LynxParam.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LynxParam.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            0 !== (s = e.getStyle()) && t.writeEnum(1, s), (s = e.getMainText()).length > 0 && t.writeString(2, s), (s = e.getExpireDayText()).length > 0 && t.writeString(3, s), (s = e.getSubText()).length > 0 && t.writeString(4, s)
        }, proto.webcast.im.LynxParam.prototype.getStyle = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.LynxParam.prototype.setStyle = function (e) {
            return i.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.LynxParam.prototype.getMainText = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.LynxParam.prototype.setMainText = function (e) {
            return i.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.LynxParam.prototype.getExpireDayText = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.LynxParam.prototype.setExpireDayText = function (e) {
            return i.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.LynxParam.prototype.getSubText = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.LynxParam.prototype.setSubText = function (e) {
            return i.Message.setProto3StringField(this, 4, e)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftConsumeRemindMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GiftConsumeRemindMessage.toObject(e, this)
        }, proto.webcast.im.GiftConsumeRemindMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && a.Common.toObject(e, s),
                lynxSchema: i.Message.getFieldWithDefault(t, 2, ""),
                lynxParam: (s = t.getLynxParam()) && proto.webcast.im.LynxParam.toObject(e, s),
                remindType: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftConsumeRemindMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftConsumeRemindMessage;
            return proto.webcast.im.GiftConsumeRemindMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftConsumeRemindMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new a.Common;
                        t.readMessage(s, a.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setLynxSchema(s);
                        break;
                    case 3:
                        s = new proto.webcast.im.LynxParam;
                        t.readMessage(s, proto.webcast.im.LynxParam.deserializeBinaryFromReader), e.setLynxParam(s);
                        break;
                    case 4:
                        s = t.readEnum();
                        e.setRemindType(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftConsumeRemindMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftConsumeRemindMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, a.Common.serializeBinaryToWriter), (s = e.getLynxSchema()).length > 0 && t.writeString(2, s), null != (s = e.getLynxParam()) && t.writeMessage(3, s, proto.webcast.im.LynxParam.serializeBinaryToWriter), 0 !== (s = e.getRemindType()) && t.writeEnum(4, s)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.getLynxSchema = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.setLynxSchema = function (e) {
            return i.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.getLynxParam = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.LynxParam, 3)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.setLynxParam = function (e) {
            return i.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.clearLynxParam = function () {
            return this.setLynxParam(undefined)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.hasLynxParam = function () {
            return null != i.Message.getField(this, 3)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.getRemindType = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.GiftConsumeRemindMessage.prototype.setRemindType = function (e) {
            return i.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.Style = {
            UNKNOWNSTYLE: 0,
            SYSTEMREMIND: 1,
            REMINDWITHEXPIREDAY: 2,
            SWITHINTELLIGENT: 3
        }, proto.webcast.im.RemindType = {
            UNKNOWNREMINDTYPE: 0,
            USERDEFINEDREMIND: 1,
            USERINTELLIGENTREMIND: 2,
            SYSTEMNOVICEREMIND: 3,
            SYSTEMHIGHREWARDREMIND: 4,
            SYSTEMEXTRAREMIND: 5,
            SWITHINTELLIGENTREMIND: 6
        }, o.object.extend(t, proto.webcast.im)
    }, 61729: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(8411);
        o.object.extend(proto, a);
        var n = s(50684);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GiftCycleReleaseMessage", null, r), o.exportSymbol("proto.webcast.im.GiftCycleReleaseMessage.GiftIcon", null, r), proto.webcast.im.GiftCycleReleaseMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.webcast.im.GiftCycleReleaseMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GiftCycleReleaseMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftCycleReleaseMessage.displayName = "proto.webcast.im.GiftCycleReleaseMessage"), proto.webcast.im.GiftCycleReleaseMessage.GiftIcon = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GiftCycleReleaseMessage.GiftIcon, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.displayName = "proto.webcast.im.GiftCycleReleaseMessage.GiftIcon"), proto.webcast.im.GiftCycleReleaseMessage.repeatedFields_ = [4], i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftCycleReleaseMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GiftCycleReleaseMessage.toObject(e, this)
        }, proto.webcast.im.GiftCycleReleaseMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                releaseId: i.Message.getFieldWithDefault(t, 2, "0"),
                giftIcon: (s = t.getGiftIcon()) && proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.toObject(e, s),
                giftIdsList: null == (s = i.Message.getRepeatedField(t, 4)) ? undefined : s
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftCycleReleaseMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftCycleReleaseMessage;
            return proto.webcast.im.GiftCycleReleaseMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftCycleReleaseMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setReleaseId(s);
                        break;
                    case 3:
                        s = new proto.webcast.im.GiftCycleReleaseMessage.GiftIcon;
                        t.readMessage(s, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.deserializeBinaryFromReader), e.setGiftIcon(s);
                        break;
                    case 4:
                        for (var i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], o = 0; o < i.length; o++) e.addGiftIds(i[o]);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftCycleReleaseMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftCycleReleaseMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getReleaseId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), null != (s = e.getGiftIcon()) && t.writeMessage(3, s, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.serializeBinaryToWriter), (s = e.getGiftIdsList()).length > 0 && t.writePackedInt64String(4, s)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.toObject = function (e) {
            return proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.toObject(e, this)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.toObject = function (e, t) {
            var s, o = {
                giftId: i.Message.getFieldWithDefault(t, 1, "0"),
                icon: (s = t.getIcon()) && a.Image.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftCycleReleaseMessage.GiftIcon;
            return proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readInt64String();
                        e.setGiftId(s);
                        break;
                    case 2:
                        s = new a.Image;
                        t.readMessage(s, a.Image.deserializeBinaryFromReader), e.setIcon(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            s = e.getGiftId(), 0 !== parseInt(s, 10) && t.writeInt64String(1, s), null != (s = e.getIcon()) && t.writeMessage(2, s, a.Image.serializeBinaryToWriter)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.getGiftId = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.setGiftId = function (e) {
            return i.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.getIcon = function () {
            return i.Message.getWrapperField(this, a.Image, 2)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.setIcon = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon.prototype.hasIcon = function () {
            return null != i.Message.getField(this, 2)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.getReleaseId = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.setReleaseId = function (e) {
            return i.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.getGiftIcon = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GiftCycleReleaseMessage.GiftIcon, 3)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.setGiftIcon = function (e) {
            return i.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.clearGiftIcon = function () {
            return this.setGiftIcon(undefined)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.hasGiftIcon = function () {
            return null != i.Message.getField(this, 3)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.getGiftIdsList = function () {
            return i.Message.getRepeatedField(this, 4)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.setGiftIdsList = function (e) {
            return i.Message.setField(this, 4, e || [])
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.addGiftIds = function (e, t) {
            return i.Message.addToRepeatedField(this, 4, e, t)
        }, proto.webcast.im.GiftCycleReleaseMessage.prototype.clearGiftIdsList = function () {
            return this.setGiftIdsList([])
        }, o.object.extend(t, proto.webcast.im)
    }, 11549: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(64925);
        o.object.extend(proto, a);
        var n = s(99222);
        o.object.extend(proto, n);
        var p = s(8411);
        o.object.extend(proto, p);
        var c = s(34688);
        o.object.extend(proto, c);
        var g = s(50684);
        o.object.extend(proto, g), o.exportSymbol("proto.webcast.im.ExhibitionChatMessage", null, r), o.exportSymbol("proto.webcast.im.ExhibitionTopLeftMessage", null, r), proto.webcast.im.ExhibitionTopLeftMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.ExhibitionTopLeftMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.ExhibitionTopLeftMessage.displayName = "proto.webcast.im.ExhibitionTopLeftMessage"), proto.webcast.im.ExhibitionChatMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.ExhibitionChatMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.ExhibitionChatMessage.displayName = "proto.webcast.im.ExhibitionChatMessage"), i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ExhibitionTopLeftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ExhibitionTopLeftMessage.toObject(e, this)
        }, proto.webcast.im.ExhibitionTopLeftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                displayText: (s = t.getDisplayText()) && n.Text.toObject(e, s),
                topTitle: i.Message.getFieldWithDefault(t, 3, ""),
                giftIcon: (s = t.getGiftIcon()) && p.Image.toObject(e, s),
                exhibitionEntranceUrl: i.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.ExhibitionTopLeftMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.ExhibitionTopLeftMessage;
            return proto.webcast.im.ExhibitionTopLeftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.ExhibitionTopLeftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setDisplayText(s);
                        break;
                    case 3:
                        s = t.readString();
                        e.setTopTitle(s);
                        break;
                    case 4:
                        s = new p.Image;
                        t.readMessage(s, p.Image.deserializeBinaryFromReader), e.setGiftIcon(s);
                        break;
                    case 5:
                        s = t.readString();
                        e.setExhibitionEntranceUrl(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.ExhibitionTopLeftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ExhibitionTopLeftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), null != (s = e.getDisplayText()) && t.writeMessage(2, s, n.Text.serializeBinaryToWriter), (s = e.getTopTitle()).length > 0 && t.writeString(3, s), null != (s = e.getGiftIcon()) && t.writeMessage(4, s, p.Image.serializeBinaryToWriter), (s = e.getExhibitionEntranceUrl()).length > 0 && t.writeString(5, s)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.getDisplayText = function () {
            return i.Message.getWrapperField(this, n.Text, 2)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.setDisplayText = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.clearDisplayText = function () {
            return this.setDisplayText(undefined)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.hasDisplayText = function () {
            return null != i.Message.getField(this, 2)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.getTopTitle = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.setTopTitle = function (e) {
            return i.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.getGiftIcon = function () {
            return i.Message.getWrapperField(this, p.Image, 4)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.setGiftIcon = function (e) {
            return i.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.clearGiftIcon = function () {
            return this.setGiftIcon(undefined)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.hasGiftIcon = function () {
            return null != i.Message.getField(this, 4)
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.getExhibitionEntranceUrl = function () {
            return i.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.ExhibitionTopLeftMessage.prototype.setExhibitionEntranceUrl = function (e) {
            return i.Message.setProto3StringField(this, 5, e)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ExhibitionChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ExhibitionChatMessage.toObject(e, this)
        }, proto.webcast.im.ExhibitionChatMessage.toObject = function (e, t) {
            var s, i = {
                common: (s = t.getCommon()) && g.Common.toObject(e, s),
                displayText: (s = t.getDisplayText()) && n.Text.toObject(e, s)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.ExhibitionChatMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.ExhibitionChatMessage;
            return proto.webcast.im.ExhibitionChatMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.ExhibitionChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new g.Common;
                        t.readMessage(s, g.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setDisplayText(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ExhibitionChatMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.ExhibitionChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ExhibitionChatMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, g.Common.serializeBinaryToWriter), null != (s = e.getDisplayText()) && t.writeMessage(2, s, n.Text.serializeBinaryToWriter)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.getDisplayText = function () {
            return i.Message.getWrapperField(this, n.Text, 2)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.setDisplayText = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.clearDisplayText = function () {
            return this.setDisplayText(undefined)
        }, proto.webcast.im.ExhibitionChatMessage.prototype.hasDisplayText = function () {
            return null != i.Message.getField(this, 2)
        }, o.object.extend(t, proto.webcast.im)
    }, 4328: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(64925);
        o.object.extend(proto, a);
        var n = s(99222);
        o.object.extend(proto, n);
        var p = s(8411);
        o.object.extend(proto, p);
        var c = s(34688);
        o.object.extend(proto, c);
        var g = s(36973);
        o.object.extend(proto, g);
        var u = s(50684);
        o.object.extend(proto, u), o.exportSymbol("proto.webcast.im.BindingGiftMessage", null, r), o.exportSymbol("proto.webcast.im.GiftDisplayEffect", null, r), o.exportSymbol("proto.webcast.im.GiftMessage", null, r), o.exportSymbol("proto.webcast.im.GiftMessage.TextEffect", null, r), o.exportSymbol("proto.webcast.im.GiftMessage.TextEffect.Detail", null, r), proto.webcast.im.GiftMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.webcast.im.GiftMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GiftMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftMessage.displayName = "proto.webcast.im.GiftMessage"), proto.webcast.im.GiftMessage.TextEffect = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GiftMessage.TextEffect, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftMessage.TextEffect.displayName = "proto.webcast.im.GiftMessage.TextEffect"), proto.webcast.im.GiftMessage.TextEffect.Detail = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GiftMessage.TextEffect.Detail, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftMessage.TextEffect.Detail.displayName = "proto.webcast.im.GiftMessage.TextEffect.Detail"), proto.webcast.im.BindingGiftMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.BindingGiftMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.BindingGiftMessage.displayName = "proto.webcast.im.BindingGiftMessage"), proto.webcast.im.GiftMessage.repeatedFields_ = [28, 32], i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GiftMessage.toObject(e, this)
        }, proto.webcast.im.GiftMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && u.Common.toObject(e, s),
                giftId: i.Message.getFieldWithDefault(t, 2, "0"),
                fanTicketCount: i.Message.getFieldWithDefault(t, 3, "0"),
                groupCount: i.Message.getFieldWithDefault(t, 4, "0"),
                repeatCount: i.Message.getFieldWithDefault(t, 5, "0"),
                comboCount: i.Message.getFieldWithDefault(t, 6, "0"),
                user: (s = t.getUser()) && a.User.toObject(e, s),
                toUser: (s = t.getToUser()) && a.User.toObject(e, s),
                repeatEnd: i.Message.getFieldWithDefault(t, 9, 0),
                textEffect: (s = t.getTextEffect()) && proto.webcast.im.GiftMessage.TextEffect.toObject(e, s),
                groupId: i.Message.getFieldWithDefault(t, 11, "0"),
                incomeTaskgifts: i.Message.getFieldWithDefault(t, 12, "0"),
                roomFanTicketCount: i.Message.getFieldWithDefault(t, 13, "0"),
                priority: (s = t.getPriority()) && c.GiftIMPriority.toObject(e, s),
                gift: (s = t.getGift()) && g.GiftStruct.toObject(e, s),
                logId: i.Message.getFieldWithDefault(t, 16, ""),
                sendType: i.Message.getFieldWithDefault(t, 17, "0"),
                publicAreaCommon: (s = t.getPublicAreaCommon()) && u.PublicAreaCommon.toObject(e, s),
                trayDisplayText: (s = t.getTrayDisplayText()) && n.Text.toObject(e, s),
                bannedDisplayEffects: i.Message.getFieldWithDefault(t, 20, "0"),
                trayInfo: (s = t.getTrayInfo()) && g.GiftTrayInfo.toObject(e, s),
                assetEffectMixInfo: (s = t.getAssetEffectMixInfo()) && g.AssetEffectMixInfo.toObject(e, s),
                displayForSelf: i.Message.getBooleanFieldWithDefault(t, 25, !1),
                interactGiftInfo: i.Message.getFieldWithDefault(t, 26, ""),
                diyItemInfo: i.Message.getFieldWithDefault(t, 27, ""),
                minAssetSetList: null == (s = i.Message.getRepeatedField(t, 28)) ? undefined : s,
                totalCount: i.Message.getFieldWithDefault(t, 29, "0"),
                clientGiftSource: i.Message.getFieldWithDefault(t, 30, 0),
                anchorGift: (s = t.getAnchorGift()) && g.AnchorGiftData.toObject(e, s),
                toUserIdsList: null == (s = i.Message.getRepeatedField(t, 32)) ? undefined : s,
                sendTime: i.Message.getFieldWithDefault(t, 33, "0"),
                forceDisplayEffects: i.Message.getFieldWithDefault(t, 34, "0"),
                traceId: i.Message.getFieldWithDefault(t, 35, ""),
                effectDisplayTs: i.Message.getFieldWithDefault(t, 36, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftMessage;
            return proto.webcast.im.GiftMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new u.Common;
                        t.readMessage(s, u.Common.deserializeBinaryFromReader), e.setCommon(s);
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
                        s = new a.User;
                        t.readMessage(s, a.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 8:
                        s = new a.User;
                        t.readMessage(s, a.User.deserializeBinaryFromReader), e.setToUser(s);
                        break;
                    case 9:
                        s = t.readInt32();
                        e.setRepeatEnd(s);
                        break;
                    case 10:
                        s = new proto.webcast.im.GiftMessage.TextEffect;
                        t.readMessage(s, proto.webcast.im.GiftMessage.TextEffect.deserializeBinaryFromReader), e.setTextEffect(s);
                        break;
                    case 11:
                        s = t.readInt64String();
                        e.setGroupId(s);
                        break;
                    case 12:
                        s = t.readInt64String();
                        e.setIncomeTaskgifts(s);
                        break;
                    case 13:
                        s = t.readInt64String();
                        e.setRoomFanTicketCount(s);
                        break;
                    case 14:
                        s = new c.GiftIMPriority;
                        t.readMessage(s, c.GiftIMPriority.deserializeBinaryFromReader), e.setPriority(s);
                        break;
                    case 15:
                        s = new g.GiftStruct;
                        t.readMessage(s, g.GiftStruct.deserializeBinaryFromReader), e.setGift(s);
                        break;
                    case 16:
                        s = t.readString();
                        e.setLogId(s);
                        break;
                    case 17:
                        s = t.readInt64String();
                        e.setSendType(s);
                        break;
                    case 18:
                        s = new u.PublicAreaCommon;
                        t.readMessage(s, u.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(s);
                        break;
                    case 19:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setTrayDisplayText(s);
                        break;
                    case 20:
                        s = t.readInt64String();
                        e.setBannedDisplayEffects(s);
                        break;
                    case 21:
                        s = new g.GiftTrayInfo;
                        t.readMessage(s, g.GiftTrayInfo.deserializeBinaryFromReader), e.setTrayInfo(s);
                        break;
                    case 24:
                        s = new g.AssetEffectMixInfo;
                        t.readMessage(s, g.AssetEffectMixInfo.deserializeBinaryFromReader), e.setAssetEffectMixInfo(s);
                        break;
                    case 25:
                        s = t.readBool();
                        e.setDisplayForSelf(s);
                        break;
                    case 26:
                        s = t.readString();
                        e.setInteractGiftInfo(s);
                        break;
                    case 27:
                        s = t.readString();
                        e.setDiyItemInfo(s);
                        break;
                    case 28:
                        for (var i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], o = 0; o < i.length; o++) e.addMinAssetSet(i[o]);
                        break;
                    case 29:
                        s = t.readInt64String();
                        e.setTotalCount(s);
                        break;
                    case 30:
                        s = t.readInt32();
                        e.setClientGiftSource(s);
                        break;
                    case 31:
                        s = new g.AnchorGiftData;
                        t.readMessage(s, g.AnchorGiftData.deserializeBinaryFromReader), e.setAnchorGift(s);
                        break;
                    case 32:
                        for (i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], o = 0; o < i.length; o++) e.addToUserIds(i[o]);
                        break;
                    case 33:
                        s = t.readInt64String();
                        e.setSendTime(s);
                        break;
                    case 34:
                        s = t.readInt64String();
                        e.setForceDisplayEffects(s);
                        break;
                    case 35:
                        s = t.readString();
                        e.setTraceId(s);
                        break;
                    case 36:
                        s = t.readInt64String();
                        e.setEffectDisplayTs(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, u.Common.serializeBinaryToWriter), s = e.getGiftId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), s = e.getGroupCount(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s), s = e.getRepeatCount(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getComboCount(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), null != (s = e.getUser()) && t.writeMessage(7, s, a.User.serializeBinaryToWriter), null != (s = e.getToUser()) && t.writeMessage(8, s, a.User.serializeBinaryToWriter), 0 !== (s = e.getRepeatEnd()) && t.writeInt32(9, s), null != (s = e.getTextEffect()) && t.writeMessage(10, s, proto.webcast.im.GiftMessage.TextEffect.serializeBinaryToWriter), s = e.getGroupId(), 0 !== parseInt(s, 10) && t.writeInt64String(11, s), s = e.getIncomeTaskgifts(), 0 !== parseInt(s, 10) && t.writeInt64String(12, s), s = e.getRoomFanTicketCount(), 0 !== parseInt(s, 10) && t.writeInt64String(13, s), null != (s = e.getPriority()) && t.writeMessage(14, s, c.GiftIMPriority.serializeBinaryToWriter), null != (s = e.getGift()) && t.writeMessage(15, s, g.GiftStruct.serializeBinaryToWriter), (s = e.getLogId()).length > 0 && t.writeString(16, s), s = e.getSendType(), 0 !== parseInt(s, 10) && t.writeInt64String(17, s), null != (s = e.getPublicAreaCommon()) && t.writeMessage(18, s, u.PublicAreaCommon.serializeBinaryToWriter), null != (s = e.getTrayDisplayText()) && t.writeMessage(19, s, n.Text.serializeBinaryToWriter), s = e.getBannedDisplayEffects(), 0 !== parseInt(s, 10) && t.writeInt64String(20, s), null != (s = e.getTrayInfo()) && t.writeMessage(21, s, g.GiftTrayInfo.serializeBinaryToWriter), null != (s = e.getAssetEffectMixInfo()) && t.writeMessage(24, s, g.AssetEffectMixInfo.serializeBinaryToWriter), (s = e.getDisplayForSelf()) && t.writeBool(25, s), (s = e.getInteractGiftInfo()).length > 0 && t.writeString(26, s), (s = e.getDiyItemInfo()).length > 0 && t.writeString(27, s), (s = e.getMinAssetSetList()).length > 0 && t.writePackedInt64String(28, s), s = e.getTotalCount(), 0 !== parseInt(s, 10) && t.writeInt64String(29, s), 0 !== (s = e.getClientGiftSource()) && t.writeInt32(30, s), null != (s = e.getAnchorGift()) && t.writeMessage(31, s, g.AnchorGiftData.serializeBinaryToWriter), (s = e.getToUserIdsList()).length > 0 && t.writePackedInt64String(32, s), s = e.getSendTime(), 0 !== parseInt(s, 10) && t.writeInt64String(33, s), s = e.getForceDisplayEffects(), 0 !== parseInt(s, 10) && t.writeInt64String(34, s), (s = e.getTraceId()).length > 0 && t.writeString(35, s), s = e.getEffectDisplayTs(), 0 !== parseInt(s, 10) && t.writeInt64String(36, s)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftMessage.TextEffect.prototype.toObject = function (e) {
            return proto.webcast.im.GiftMessage.TextEffect.toObject(e, this)
        }, proto.webcast.im.GiftMessage.TextEffect.toObject = function (e, t) {
            var s, i = {
                portrait: (s = t.getPortrait()) && proto.webcast.im.GiftMessage.TextEffect.Detail.toObject(e, s),
                landscape: (s = t.getLandscape()) && proto.webcast.im.GiftMessage.TextEffect.Detail.toObject(e, s)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.GiftMessage.TextEffect.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftMessage.TextEffect;
            return proto.webcast.im.GiftMessage.TextEffect.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftMessage.TextEffect.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new proto.webcast.im.GiftMessage.TextEffect.Detail;
                        t.readMessage(s, proto.webcast.im.GiftMessage.TextEffect.Detail.deserializeBinaryFromReader), e.setPortrait(s);
                        break;
                    case 2:
                        s = new proto.webcast.im.GiftMessage.TextEffect.Detail;
                        t.readMessage(s, proto.webcast.im.GiftMessage.TextEffect.Detail.deserializeBinaryFromReader), e.setLandscape(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftMessage.TextEffect.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftMessage.TextEffect.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getPortrait()) && t.writeMessage(1, s, proto.webcast.im.GiftMessage.TextEffect.Detail.serializeBinaryToWriter), null != (s = e.getLandscape()) && t.writeMessage(2, s, proto.webcast.im.GiftMessage.TextEffect.Detail.serializeBinaryToWriter)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.toObject = function (e) {
            return proto.webcast.im.GiftMessage.TextEffect.Detail.toObject(e, this)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.toObject = function (e, t) {
            var s, o = {
                text: (s = t.getText()) && n.Text.toObject(e, s),
                textFontSize: i.Message.getFieldWithDefault(t, 2, 0),
                background: (s = t.getBackground()) && p.Image.toObject(e, s),
                start: i.Message.getFieldWithDefault(t, 4, 0),
                duration: i.Message.getFieldWithDefault(t, 5, 0),
                x: i.Message.getFieldWithDefault(t, 6, 0),
                y: i.Message.getFieldWithDefault(t, 7, 0),
                width: i.Message.getFieldWithDefault(t, 8, 0),
                height: i.Message.getFieldWithDefault(t, 9, 0),
                shadowDx: i.Message.getFieldWithDefault(t, 10, 0),
                shadowDy: i.Message.getFieldWithDefault(t, 11, 0),
                shadowRadius: i.Message.getFieldWithDefault(t, 12, 0),
                shadowColor: i.Message.getFieldWithDefault(t, 13, ""),
                strokeColor: i.Message.getFieldWithDefault(t, 14, ""),
                strokeWidth: i.Message.getFieldWithDefault(t, 15, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftMessage.TextEffect.Detail.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftMessage.TextEffect.Detail;
            return proto.webcast.im.GiftMessage.TextEffect.Detail.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setText(s);
                        break;
                    case 2:
                        s = t.readInt32();
                        e.setTextFontSize(s);
                        break;
                    case 3:
                        s = new p.Image;
                        t.readMessage(s, p.Image.deserializeBinaryFromReader), e.setBackground(s);
                        break;
                    case 4:
                        s = t.readInt32();
                        e.setStart(s);
                        break;
                    case 5:
                        s = t.readInt32();
                        e.setDuration(s);
                        break;
                    case 6:
                        s = t.readInt32();
                        e.setX(s);
                        break;
                    case 7:
                        s = t.readInt32();
                        e.setY(s);
                        break;
                    case 8:
                        s = t.readInt32();
                        e.setWidth(s);
                        break;
                    case 9:
                        s = t.readInt32();
                        e.setHeight(s);
                        break;
                    case 10:
                        s = t.readInt32();
                        e.setShadowDx(s);
                        break;
                    case 11:
                        s = t.readInt32();
                        e.setShadowDy(s);
                        break;
                    case 12:
                        s = t.readInt32();
                        e.setShadowRadius(s);
                        break;
                    case 13:
                        s = t.readString();
                        e.setShadowColor(s);
                        break;
                    case 14:
                        s = t.readString();
                        e.setStrokeColor(s);
                        break;
                    case 15:
                        s = t.readInt32();
                        e.setStrokeWidth(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftMessage.TextEffect.Detail.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getText()) && t.writeMessage(1, s, n.Text.serializeBinaryToWriter), 0 !== (s = e.getTextFontSize()) && t.writeInt32(2, s), null != (s = e.getBackground()) && t.writeMessage(3, s, p.Image.serializeBinaryToWriter), 0 !== (s = e.getStart()) && t.writeInt32(4, s), 0 !== (s = e.getDuration()) && t.writeInt32(5, s), 0 !== (s = e.getX()) && t.writeInt32(6, s), 0 !== (s = e.getY()) && t.writeInt32(7, s), 0 !== (s = e.getWidth()) && t.writeInt32(8, s), 0 !== (s = e.getHeight()) && t.writeInt32(9, s), 0 !== (s = e.getShadowDx()) && t.writeInt32(10, s), 0 !== (s = e.getShadowDy()) && t.writeInt32(11, s), 0 !== (s = e.getShadowRadius()) && t.writeInt32(12, s), (s = e.getShadowColor()).length > 0 && t.writeString(13, s), (s = e.getStrokeColor()).length > 0 && t.writeString(14, s), 0 !== (s = e.getStrokeWidth()) && t.writeInt32(15, s)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getText = function () {
            return i.Message.getWrapperField(this, n.Text, 1)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setText = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.clearText = function () {
            return this.setText(undefined)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.hasText = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getTextFontSize = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setTextFontSize = function (e) {
            return i.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getBackground = function () {
            return i.Message.getWrapperField(this, p.Image, 3)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setBackground = function (e) {
            return i.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.hasBackground = function () {
            return null != i.Message.getField(this, 3)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getStart = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setStart = function (e) {
            return i.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getDuration = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setDuration = function (e) {
            return i.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getX = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setX = function (e) {
            return i.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getY = function () {
            return i.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setY = function (e) {
            return i.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getWidth = function () {
            return i.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setWidth = function (e) {
            return i.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getHeight = function () {
            return i.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setHeight = function (e) {
            return i.Message.setProto3IntField(this, 9, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getShadowDx = function () {
            return i.Message.getFieldWithDefault(this, 10, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setShadowDx = function (e) {
            return i.Message.setProto3IntField(this, 10, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getShadowDy = function () {
            return i.Message.getFieldWithDefault(this, 11, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setShadowDy = function (e) {
            return i.Message.setProto3IntField(this, 11, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getShadowRadius = function () {
            return i.Message.getFieldWithDefault(this, 12, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setShadowRadius = function (e) {
            return i.Message.setProto3IntField(this, 12, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getShadowColor = function () {
            return i.Message.getFieldWithDefault(this, 13, "")
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setShadowColor = function (e) {
            return i.Message.setProto3StringField(this, 13, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getStrokeColor = function () {
            return i.Message.getFieldWithDefault(this, 14, "")
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setStrokeColor = function (e) {
            return i.Message.setProto3StringField(this, 14, e)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.getStrokeWidth = function () {
            return i.Message.getFieldWithDefault(this, 15, 0)
        }, proto.webcast.im.GiftMessage.TextEffect.Detail.prototype.setStrokeWidth = function (e) {
            return i.Message.setProto3IntField(this, 15, e)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.getPortrait = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GiftMessage.TextEffect.Detail, 1)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.setPortrait = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.clearPortrait = function () {
            return this.setPortrait(undefined)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.hasPortrait = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.getLandscape = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GiftMessage.TextEffect.Detail, 2)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.setLandscape = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.clearLandscape = function () {
            return this.setLandscape(undefined)
        }, proto.webcast.im.GiftMessage.TextEffect.prototype.hasLandscape = function () {
            return null != i.Message.getField(this, 2)
        }, proto.webcast.im.GiftMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, u.Common, 1)
        }, proto.webcast.im.GiftMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GiftMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftMessage.prototype.getGiftId = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GiftMessage.prototype.setGiftId = function (e) {
            return i.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GiftMessage.prototype.getFanTicketCount = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GiftMessage.prototype.setFanTicketCount = function (e) {
            return i.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GiftMessage.prototype.getGroupCount = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.GiftMessage.prototype.setGroupCount = function (e) {
            return i.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.GiftMessage.prototype.getRepeatCount = function () {
            return i.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.GiftMessage.prototype.setRepeatCount = function (e) {
            return i.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.GiftMessage.prototype.getComboCount = function () {
            return i.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.GiftMessage.prototype.setComboCount = function (e) {
            return i.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.GiftMessage.prototype.getUser = function () {
            return i.Message.getWrapperField(this, a.User, 7)
        }, proto.webcast.im.GiftMessage.prototype.setUser = function (e) {
            return i.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.GiftMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.GiftMessage.prototype.hasUser = function () {
            return null != i.Message.getField(this, 7)
        }, proto.webcast.im.GiftMessage.prototype.getToUser = function () {
            return i.Message.getWrapperField(this, a.User, 8)
        }, proto.webcast.im.GiftMessage.prototype.setToUser = function (e) {
            return i.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.GiftMessage.prototype.clearToUser = function () {
            return this.setToUser(undefined)
        }, proto.webcast.im.GiftMessage.prototype.hasToUser = function () {
            return null != i.Message.getField(this, 8)
        }, proto.webcast.im.GiftMessage.prototype.getRepeatEnd = function () {
            return i.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.GiftMessage.prototype.setRepeatEnd = function (e) {
            return i.Message.setProto3IntField(this, 9, e)
        }, proto.webcast.im.GiftMessage.prototype.getTextEffect = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GiftMessage.TextEffect, 10)
        },proto.webcast.im.GiftMessage.prototype.setTextEffect = function (e) {
            return i.Message.setWrapperField(this, 10, e)
        },proto.webcast.im.GiftMessage.prototype.clearTextEffect = function () {
            return this.setTextEffect(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasTextEffect = function () {
            return null != i.Message.getField(this, 10)
        },proto.webcast.im.GiftMessage.prototype.getGroupId = function () {
            return i.Message.getFieldWithDefault(this, 11, "0")
        },proto.webcast.im.GiftMessage.prototype.setGroupId = function (e) {
            return i.Message.setProto3StringIntField(this, 11, e)
        },proto.webcast.im.GiftMessage.prototype.getIncomeTaskgifts = function () {
            return i.Message.getFieldWithDefault(this, 12, "0")
        },proto.webcast.im.GiftMessage.prototype.setIncomeTaskgifts = function (e) {
            return i.Message.setProto3StringIntField(this, 12, e)
        },proto.webcast.im.GiftMessage.prototype.getRoomFanTicketCount = function () {
            return i.Message.getFieldWithDefault(this, 13, "0")
        },proto.webcast.im.GiftMessage.prototype.setRoomFanTicketCount = function (e) {
            return i.Message.setProto3StringIntField(this, 13, e)
        },proto.webcast.im.GiftMessage.prototype.getPriority = function () {
            return i.Message.getWrapperField(this, c.GiftIMPriority, 14)
        },proto.webcast.im.GiftMessage.prototype.setPriority = function (e) {
            return i.Message.setWrapperField(this, 14, e)
        },proto.webcast.im.GiftMessage.prototype.clearPriority = function () {
            return this.setPriority(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasPriority = function () {
            return null != i.Message.getField(this, 14)
        },proto.webcast.im.GiftMessage.prototype.getGift = function () {
            return i.Message.getWrapperField(this, g.GiftStruct, 15)
        },proto.webcast.im.GiftMessage.prototype.setGift = function (e) {
            return i.Message.setWrapperField(this, 15, e)
        },proto.webcast.im.GiftMessage.prototype.clearGift = function () {
            return this.setGift(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasGift = function () {
            return null != i.Message.getField(this, 15)
        },proto.webcast.im.GiftMessage.prototype.getLogId = function () {
            return i.Message.getFieldWithDefault(this, 16, "")
        },proto.webcast.im.GiftMessage.prototype.setLogId = function (e) {
            return i.Message.setProto3StringField(this, 16, e)
        },proto.webcast.im.GiftMessage.prototype.getSendType = function () {
            return i.Message.getFieldWithDefault(this, 17, "0")
        },proto.webcast.im.GiftMessage.prototype.setSendType = function (e) {
            return i.Message.setProto3StringIntField(this, 17, e)
        },proto.webcast.im.GiftMessage.prototype.getPublicAreaCommon = function () {
            return i.Message.getWrapperField(this, u.PublicAreaCommon, 18)
        },proto.webcast.im.GiftMessage.prototype.setPublicAreaCommon = function (e) {
            return i.Message.setWrapperField(this, 18, e)
        },proto.webcast.im.GiftMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasPublicAreaCommon = function () {
            return null != i.Message.getField(this, 18)
        },proto.webcast.im.GiftMessage.prototype.getTrayDisplayText = function () {
            return i.Message.getWrapperField(this, n.Text, 19)
        },proto.webcast.im.GiftMessage.prototype.setTrayDisplayText = function (e) {
            return i.Message.setWrapperField(this, 19, e)
        },proto.webcast.im.GiftMessage.prototype.clearTrayDisplayText = function () {
            return this.setTrayDisplayText(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasTrayDisplayText = function () {
            return null != i.Message.getField(this, 19)
        },proto.webcast.im.GiftMessage.prototype.getBannedDisplayEffects = function () {
            return i.Message.getFieldWithDefault(this, 20, "0")
        },proto.webcast.im.GiftMessage.prototype.setBannedDisplayEffects = function (e) {
            return i.Message.setProto3StringIntField(this, 20, e)
        },proto.webcast.im.GiftMessage.prototype.getTrayInfo = function () {
            return i.Message.getWrapperField(this, g.GiftTrayInfo, 21)
        },proto.webcast.im.GiftMessage.prototype.setTrayInfo = function (e) {
            return i.Message.setWrapperField(this, 21, e)
        },proto.webcast.im.GiftMessage.prototype.clearTrayInfo = function () {
            return this.setTrayInfo(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasTrayInfo = function () {
            return null != i.Message.getField(this, 21)
        },proto.webcast.im.GiftMessage.prototype.getAssetEffectMixInfo = function () {
            return i.Message.getWrapperField(this, g.AssetEffectMixInfo, 24)
        },proto.webcast.im.GiftMessage.prototype.setAssetEffectMixInfo = function (e) {
            return i.Message.setWrapperField(this, 24, e)
        },proto.webcast.im.GiftMessage.prototype.clearAssetEffectMixInfo = function () {
            return this.setAssetEffectMixInfo(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasAssetEffectMixInfo = function () {
            return null != i.Message.getField(this, 24)
        },proto.webcast.im.GiftMessage.prototype.getDisplayForSelf = function () {
            return i.Message.getBooleanFieldWithDefault(this, 25, !1)
        },proto.webcast.im.GiftMessage.prototype.setDisplayForSelf = function (e) {
            return i.Message.setProto3BooleanField(this, 25, e)
        },proto.webcast.im.GiftMessage.prototype.getInteractGiftInfo = function () {
            return i.Message.getFieldWithDefault(this, 26, "")
        },proto.webcast.im.GiftMessage.prototype.setInteractGiftInfo = function (e) {
            return i.Message.setProto3StringField(this, 26, e)
        },proto.webcast.im.GiftMessage.prototype.getDiyItemInfo = function () {
            return i.Message.getFieldWithDefault(this, 27, "")
        },proto.webcast.im.GiftMessage.prototype.setDiyItemInfo = function (e) {
            return i.Message.setProto3StringField(this, 27, e)
        },proto.webcast.im.GiftMessage.prototype.getMinAssetSetList = function () {
            return i.Message.getRepeatedField(this, 28)
        },proto.webcast.im.GiftMessage.prototype.setMinAssetSetList = function (e) {
            return i.Message.setField(this, 28, e || [])
        },proto.webcast.im.GiftMessage.prototype.addMinAssetSet = function (e, t) {
            return i.Message.addToRepeatedField(this, 28, e, t)
        },proto.webcast.im.GiftMessage.prototype.clearMinAssetSetList = function () {
            return this.setMinAssetSetList([])
        },proto.webcast.im.GiftMessage.prototype.getTotalCount = function () {
            return i.Message.getFieldWithDefault(this, 29, "0")
        },proto.webcast.im.GiftMessage.prototype.setTotalCount = function (e) {
            return i.Message.setProto3StringIntField(this, 29, e)
        },proto.webcast.im.GiftMessage.prototype.getClientGiftSource = function () {
            return i.Message.getFieldWithDefault(this, 30, 0)
        },proto.webcast.im.GiftMessage.prototype.setClientGiftSource = function (e) {
            return i.Message.setProto3IntField(this, 30, e)
        },proto.webcast.im.GiftMessage.prototype.getAnchorGift = function () {
            return i.Message.getWrapperField(this, g.AnchorGiftData, 31)
        },proto.webcast.im.GiftMessage.prototype.setAnchorGift = function (e) {
            return i.Message.setWrapperField(this, 31, e)
        },proto.webcast.im.GiftMessage.prototype.clearAnchorGift = function () {
            return this.setAnchorGift(undefined)
        },proto.webcast.im.GiftMessage.prototype.hasAnchorGift = function () {
            return null != i.Message.getField(this, 31)
        },proto.webcast.im.GiftMessage.prototype.getToUserIdsList = function () {
            return i.Message.getRepeatedField(this, 32)
        },proto.webcast.im.GiftMessage.prototype.setToUserIdsList = function (e) {
            return i.Message.setField(this, 32, e || [])
        },proto.webcast.im.GiftMessage.prototype.addToUserIds = function (e, t) {
            return i.Message.addToRepeatedField(this, 32, e, t)
        },proto.webcast.im.GiftMessage.prototype.clearToUserIdsList = function () {
            return this.setToUserIdsList([])
        },proto.webcast.im.GiftMessage.prototype.getSendTime = function () {
            return i.Message.getFieldWithDefault(this, 33, "0")
        },proto.webcast.im.GiftMessage.prototype.setSendTime = function (e) {
            return i.Message.setProto3StringIntField(this, 33, e)
        },proto.webcast.im.GiftMessage.prototype.getForceDisplayEffects = function () {
            return i.Message.getFieldWithDefault(this, 34, "0")
        },proto.webcast.im.GiftMessage.prototype.setForceDisplayEffects = function (e) {
            return i.Message.setProto3StringIntField(this, 34, e)
        },proto.webcast.im.GiftMessage.prototype.getTraceId = function () {
            return i.Message.getFieldWithDefault(this, 35, "")
        },proto.webcast.im.GiftMessage.prototype.setTraceId = function (e) {
            return i.Message.setProto3StringField(this, 35, e)
        },proto.webcast.im.GiftMessage.prototype.getEffectDisplayTs = function () {
            return i.Message.getFieldWithDefault(this, 36, "0")
        },proto.webcast.im.GiftMessage.prototype.setEffectDisplayTs = function (e) {
            return i.Message.setProto3StringIntField(this, 36, e)
        },i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BindingGiftMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BindingGiftMessage.toObject(e, this)
        }, proto.webcast.im.BindingGiftMessage.toObject = function (e, t) {
            var s, i = {
                msg: (s = t.getMsg()) && proto.webcast.im.GiftMessage.toObject(e, s),
                common: (s = t.getCommon()) && u.Common.toObject(e, s)
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.BindingGiftMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.BindingGiftMessage;
            return proto.webcast.im.BindingGiftMessage.deserializeBinaryFromReader(s, t)
        },proto.webcast.im.BindingGiftMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new proto.webcast.im.GiftMessage;
                        t.readMessage(s, proto.webcast.im.GiftMessage.deserializeBinaryFromReader), e.setMsg(s);
                        break;
                    case 2:
                        s = new u.Common;
                        t.readMessage(s, u.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.BindingGiftMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.BindingGiftMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.BindingGiftMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getMsg()) && t.writeMessage(1, s, proto.webcast.im.GiftMessage.serializeBinaryToWriter), null != (s = e.getCommon()) && t.writeMessage(2, s, u.Common.serializeBinaryToWriter)
        },proto.webcast.im.BindingGiftMessage.prototype.getMsg = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GiftMessage, 1)
        },proto.webcast.im.BindingGiftMessage.prototype.setMsg = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.BindingGiftMessage.prototype.clearMsg = function () {
            return this.setMsg(undefined)
        },proto.webcast.im.BindingGiftMessage.prototype.hasMsg = function () {
            return null != i.Message.getField(this, 1)
        },proto.webcast.im.BindingGiftMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, u.Common, 2)
        },proto.webcast.im.BindingGiftMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.BindingGiftMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.BindingGiftMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 2)
        },proto.webcast.im.GiftDisplayEffect = {
            UNUSED: 0,
            CHAT: 1,
            TRAY: 2,
            EFFECT: 4
        },o.object.extend(t, proto.webcast.im)
    }, 84526: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(50684);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.GiftUpdateMessage", null, r), proto.webcast.im.GiftUpdateMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.webcast.im.GiftUpdateMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GiftUpdateMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftUpdateMessage.displayName = "proto.webcast.im.GiftUpdateMessage"), proto.webcast.im.GiftUpdateMessage.repeatedFields_ = [3], i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftUpdateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GiftUpdateMessage.toObject(e, this)
        }, proto.webcast.im.GiftUpdateMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && a.Common.toObject(e, s),
                updateType: i.Message.getFieldWithDefault(t, 2, 0),
                updateGiftIdsList: null == (s = i.Message.getRepeatedField(t, 3)) ? undefined : s
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftUpdateMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftUpdateMessage;
            return proto.webcast.im.GiftUpdateMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftUpdateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new a.Common;
                        t.readMessage(s, a.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt32();
                        e.setUpdateType(s);
                        break;
                    case 3:
                        for (var i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], o = 0; o < i.length; o++) e.addUpdateGiftIds(i[o]);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftUpdateMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftUpdateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftUpdateMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, a.Common.serializeBinaryToWriter), 0 !== (s = e.getUpdateType()) && t.writeInt32(2, s), (s = e.getUpdateGiftIdsList()).length > 0 && t.writePackedInt64String(3, s)
        }, proto.webcast.im.GiftUpdateMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GiftUpdateMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftUpdateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GiftUpdateMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftUpdateMessage.prototype.getUpdateType = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.GiftUpdateMessage.prototype.setUpdateType = function (e) {
            return i.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.GiftUpdateMessage.prototype.getUpdateGiftIdsList = function () {
            return i.Message.getRepeatedField(this, 3)
        }, proto.webcast.im.GiftUpdateMessage.prototype.setUpdateGiftIdsList = function (e) {
            return i.Message.setField(this, 3, e || [])
        }, proto.webcast.im.GiftUpdateMessage.prototype.addUpdateGiftIds = function (e, t) {
            return i.Message.addToRepeatedField(this, 3, e, t)
        }, proto.webcast.im.GiftUpdateMessage.prototype.clearUpdateGiftIdsList = function () {
            return this.setUpdateGiftIdsList([])
        }, o.object.extend(t, proto.webcast.im)
    }, 37566: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(8411);
        o.object.extend(proto, a);
        var n = s(46695);
        o.object.extend(proto, n);
        var p = s(50684);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.GiftVoteMessage", null, r), o.exportSymbol("proto.webcast.im.GiftVoteMessage.Result", null, r), o.exportSymbol("proto.webcast.im.GiftVoteMessageType", null, r), proto.webcast.im.GiftVoteMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.webcast.im.GiftVoteMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GiftVoteMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftVoteMessage.displayName = "proto.webcast.im.GiftVoteMessage"), proto.webcast.im.GiftVoteMessage.Result = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GiftVoteMessage.Result, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GiftVoteMessage.Result.displayName = "proto.webcast.im.GiftVoteMessage.Result"), proto.webcast.im.GiftVoteMessage.repeatedFields_ = [4], i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftVoteMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GiftVoteMessage.toObject(e, this)
        }, proto.webcast.im.GiftVoteMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && p.Common.toObject(e, s),
                msgType: i.Message.getFieldWithDefault(t, 2, "0"),
                voteId: i.Message.getFieldWithDefault(t, 3, "0"),
                resultsList: i.Message.toObjectList(t.getResultsList(), n.GiftVoteResult.toObject, e),
                finishTime: i.Message.getFieldWithDefault(t, 5, "0"),
                currentTime: i.Message.getFieldWithDefault(t, 6, "0"),
                voteType: i.Message.getFieldWithDefault(t, 7, "0"),
                extra: i.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftVoteMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftVoteMessage;
            return proto.webcast.im.GiftVoteMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftVoteMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new p.Common;
                        t.readMessage(s, p.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setMsgType(s);
                        break;
                    case 3:
                        s = t.readInt64String();
                        e.setVoteId(s);
                        break;
                    case 4:
                        s = new n.GiftVoteResult;
                        t.readMessage(s, n.GiftVoteResult.deserializeBinaryFromReader), e.addResults(s);
                        break;
                    case 5:
                        s = t.readInt64String();
                        e.setFinishTime(s);
                        break;
                    case 6:
                        s = t.readInt64String();
                        e.setCurrentTime(s);
                        break;
                    case 7:
                        s = t.readInt64String();
                        e.setVoteType(s);
                        break;
                    case 8:
                        s = t.readString();
                        e.setExtra(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftVoteMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftVoteMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftVoteMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, p.Common.serializeBinaryToWriter), s = e.getMsgType(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), s = e.getVoteId(), 0 !== parseInt(s, 10) && t.writeInt64String(3, s), (s = e.getResultsList()).length > 0 && t.writeRepeatedMessage(4, s, n.GiftVoteResult.serializeBinaryToWriter), s = e.getFinishTime(), 0 !== parseInt(s, 10) && t.writeInt64String(5, s), s = e.getCurrentTime(), 0 !== parseInt(s, 10) && t.writeInt64String(6, s), s = e.getVoteType(), 0 !== parseInt(s, 10) && t.writeInt64String(7, s), (s = e.getExtra()).length > 0 && t.writeString(8, s)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftVoteMessage.Result.prototype.toObject = function (e) {
            return proto.webcast.im.GiftVoteMessage.Result.toObject(e, this)
        }, proto.webcast.im.GiftVoteMessage.Result.toObject = function (e, t) {
            var s, o = {
                text: i.Message.getFieldWithDefault(t, 1, ""),
                count: i.Message.getFieldWithDefault(t, 2, "0"),
                icon: (s = t.getIcon()) && a.Image.toObject(e, s),
                giftId: i.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GiftVoteMessage.Result.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GiftVoteMessage.Result;
            return proto.webcast.im.GiftVoteMessage.Result.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GiftVoteMessage.Result.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readString();
                        e.setText(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setCount(s);
                        break;
                    case 3:
                        s = new a.Image;
                        t.readMessage(s, a.Image.deserializeBinaryFromReader), e.setIcon(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setGiftId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GiftVoteMessage.Result.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftVoteMessage.Result.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getText()).length > 0 && t.writeString(1, s), s = e.getCount(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), null != (s = e.getIcon()) && t.writeMessage(3, s, a.Image.serializeBinaryToWriter), s = e.getGiftId(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.getText = function () {
            return i.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.setText = function (e) {
            return i.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.getCount = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.setCount = function (e) {
            return i.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.getIcon = function () {
            return i.Message.getWrapperField(this, a.Image, 3)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.setIcon = function (e) {
            return i.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.hasIcon = function () {
            return null != i.Message.getField(this, 3)
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.getGiftId = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.GiftVoteMessage.Result.prototype.setGiftId = function (e) {
            return i.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, p.Common, 1)
        }, proto.webcast.im.GiftVoteMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GiftVoteMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GiftVoteMessage.prototype.getMsgType = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GiftVoteMessage.prototype.setMsgType = function (e) {
            return i.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.getVoteId = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GiftVoteMessage.prototype.setVoteId = function (e) {
            return i.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.getResultsList = function () {
            return i.Message.getRepeatedWrapperField(this, n.GiftVoteResult, 4)
        }, proto.webcast.im.GiftVoteMessage.prototype.setResultsList = function (e) {
            return i.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.addResults = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.GiftVoteResult, t)
        }, proto.webcast.im.GiftVoteMessage.prototype.clearResultsList = function () {
            return this.setResultsList([])
        }, proto.webcast.im.GiftVoteMessage.prototype.getFinishTime = function () {
            return i.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.GiftVoteMessage.prototype.setFinishTime = function (e) {
            return i.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.getCurrentTime = function () {
            return i.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.GiftVoteMessage.prototype.setCurrentTime = function (e) {
            return i.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.getVoteType = function () {
            return i.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.GiftVoteMessage.prototype.setVoteType = function (e) {
            return i.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.GiftVoteMessage.prototype.getExtra = function () {
            return i.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.GiftVoteMessage.prototype.setExtra = function (e) {
            return i.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.GiftVoteMessageType = {
            NONE: 0,
            UPDATE: 1,
            FINISH: 2,
            VOTE_CREATE: 3,
            VOTE_PAUSE: 4,
            VOTE_RESUME: 5
        }, o.object.extend(t, proto.webcast.im)
    }, 51417: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(50684);
        o.object.extend(proto, a);
        var n = s(99222);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GradeBuffAnchorShareMessage", null, r), proto.webcast.im.GradeBuffAnchorShareMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GradeBuffAnchorShareMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GradeBuffAnchorShareMessage.displayName = "proto.webcast.im.GradeBuffAnchorShareMessage"), i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GradeBuffAnchorShareMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GradeBuffAnchorShareMessage.toObject(e, this)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && a.Common.toObject(e, s),
                schemeUrl: i.Message.getFieldWithDefault(t, 2, ""),
                content: (s = t.getContent()) && n.Text.toObject(e, s),
                score: i.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GradeBuffAnchorShareMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GradeBuffAnchorShareMessage;
            return proto.webcast.im.GradeBuffAnchorShareMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new a.Common;
                        t.readMessage(s, a.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readString();
                        e.setSchemeUrl(s);
                        break;
                    case 3:
                        s = new n.Text;
                        t.readMessage(s, n.Text.deserializeBinaryFromReader), e.setContent(s);
                        break;
                    case 4:
                        s = t.readInt64String();
                        e.setScore(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GradeBuffAnchorShareMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GradeBuffAnchorShareMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, a.Common.serializeBinaryToWriter), (s = e.getSchemeUrl()).length > 0 && t.writeString(2, s), null != (s = e.getContent()) && t.writeMessage(3, s, n.Text.serializeBinaryToWriter), s = e.getScore(), 0 !== parseInt(s, 10) && t.writeInt64String(4, s)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.getSchemeUrl = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.setSchemeUrl = function (e) {
            return i.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.getContent = function () {
            return i.Message.getWrapperField(this, n.Text, 3)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.setContent = function (e) {
            return i.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.clearContent = function () {
            return this.setContent(undefined)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.hasContent = function () {
            return null != i.Message.getField(this, 3)
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.getScore = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.GradeBuffAnchorShareMessage.prototype.setScore = function (e) {
            return i.Message.setProto3StringIntField(this, 4, e)
        }, o.object.extend(t, proto.webcast.im)
    }, 55900: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(50684);
        o.object.extend(proto, a);
        var n = s(36958);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.im.GroupShowUserUpdateMessage", null, r), proto.webcast.im.GroupShowUserUpdateMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GroupShowUserUpdateMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GroupShowUserUpdateMessage.displayName = "proto.webcast.im.GroupShowUserUpdateMessage"), i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GroupShowUserUpdateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GroupShowUserUpdateMessage.toObject(e, this)
        }, proto.webcast.im.GroupShowUserUpdateMessage.toObject = function (e, t) {
            var s, i = {
                common: (s = t.getCommon()) && a.Common.toObject(e, s),
                info: (s = t.getInfo()) && n.GroupShowInfo.toObject(e, s)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.GroupShowUserUpdateMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GroupShowUserUpdateMessage;
            return proto.webcast.im.GroupShowUserUpdateMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GroupShowUserUpdateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new a.Common;
                        t.readMessage(s, a.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.GroupShowInfo;
                        t.readMessage(s, n.GroupShowInfo.deserializeBinaryFromReader), e.setInfo(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GroupShowUserUpdateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GroupShowUserUpdateMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, a.Common.serializeBinaryToWriter), null != (s = e.getInfo()) && t.writeMessage(2, s, n.GroupShowInfo.serializeBinaryToWriter)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.getInfo = function () {
            return i.Message.getWrapperField(this, n.GroupShowInfo, 2)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.setInfo = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.clearInfo = function () {
            return this.setInfo(undefined)
        }, proto.webcast.im.GroupShowUserUpdateMessage.prototype.hasInfo = function () {
            return null != i.Message.getField(this, 2)
        }, o.object.extend(t, proto.webcast.im)
    }, 86984: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(50684);
        o.object.extend(proto, a);
        var n = s(78470);
        o.object.extend(proto, n);
        var p = s(64925);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.GrowthTaskMessage", null, r), o.exportSymbol("proto.webcast.im.GrowthTaskMessage.Action", null, r), o.exportSymbol("proto.webcast.im.GrowthTaskMessage.CurrentContribution", null, r), proto.webcast.im.GrowthTaskMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.webcast.im.GrowthTaskMessage.repeatedFields_, null)
        }, o.inherits(proto.webcast.im.GrowthTaskMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GrowthTaskMessage.displayName = "proto.webcast.im.GrowthTaskMessage"), proto.webcast.im.GrowthTaskMessage.CurrentContribution = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GrowthTaskMessage.CurrentContribution, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GrowthTaskMessage.CurrentContribution.displayName = "proto.webcast.im.GrowthTaskMessage.CurrentContribution"), proto.webcast.im.GrowthTaskMessage.repeatedFields_ = [5], i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GrowthTaskMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GrowthTaskMessage.toObject(e, this)
        }, proto.webcast.im.GrowthTaskMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && a.Common.toObject(e, s),
                task: (s = t.getTask()) && n.GrowthTask.toObject(e, s),
                action: i.Message.getFieldWithDefault(t, 3, 0),
                currentContribution: (s = t.getCurrentContribution()) && proto.webcast.im.GrowthTaskMessage.CurrentContribution.toObject(e, s),
                contributorsList: i.Message.toObjectList(t.getContributorsList(), n.GrowthTaskContributorRank.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GrowthTaskMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GrowthTaskMessage;
            return proto.webcast.im.GrowthTaskMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GrowthTaskMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new a.Common;
                        t.readMessage(s, a.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = new n.GrowthTask;
                        t.readMessage(s, n.GrowthTask.deserializeBinaryFromReader), e.setTask(s);
                        break;
                    case 3:
                        s = t.readEnum();
                        e.setAction(s);
                        break;
                    case 4:
                        s = new proto.webcast.im.GrowthTaskMessage.CurrentContribution;
                        t.readMessage(s, proto.webcast.im.GrowthTaskMessage.CurrentContribution.deserializeBinaryFromReader), e.setCurrentContribution(s);
                        break;
                    case 5:
                        s = new n.GrowthTaskContributorRank;
                        t.readMessage(s, n.GrowthTaskContributorRank.deserializeBinaryFromReader), e.addContributors(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GrowthTaskMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GrowthTaskMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GrowthTaskMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, a.Common.serializeBinaryToWriter), null != (s = e.getTask()) && t.writeMessage(2, s, n.GrowthTask.serializeBinaryToWriter), 0 !== (s = e.getAction()) && t.writeEnum(3, s), null != (s = e.getCurrentContribution()) && t.writeMessage(4, s, proto.webcast.im.GrowthTaskMessage.CurrentContribution.serializeBinaryToWriter), (s = e.getContributorsList()).length > 0 && t.writeRepeatedMessage(5, s, n.GrowthTaskContributorRank.serializeBinaryToWriter)
        }, proto.webcast.im.GrowthTaskMessage.Action = {
            ACTIONUNKNOWN: 0,
            ACTIONDELIVERED: 1,
            ACTIONCONDCOUNTUPDATED: 2,
            ACTIONTASKSETTLED: 3,
            ACTIONREWARDSETTLED: 4,
            ACTIONTASKUNLOCKED: 5
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.toObject = function (e) {
            return proto.webcast.im.GrowthTaskMessage.CurrentContribution.toObject(e, this)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.toObject = function (e, t) {
            var s, i = {
                user: (s = t.getUser()) && p.User.toObject(e, s),
                deltaInfoMap: (s = t.getDeltaInfoMap()) ? s.toObject(e, undefined) : []
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.GrowthTaskMessage.CurrentContribution.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GrowthTaskMessage.CurrentContribution;
            return proto.webcast.im.GrowthTaskMessage.CurrentContribution.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new p.User;
                        t.readMessage(s, p.User.deserializeBinaryFromReader), e.setUser(s);
                        break;
                    case 2:
                        s = e.getDeltaInfoMap();
                        t.readMessage(s, (function (e, t) {
                            i.Map.deserializeBinary(e, t, i.BinaryReader.prototype.readInt64, i.BinaryReader.prototype.readInt64, null, 0, 0)
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GrowthTaskMessage.CurrentContribution.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getUser()) && t.writeMessage(1, s, p.User.serializeBinaryToWriter), (s = e.getDeltaInfoMap(!0)) && s.getLength() > 0 && s.serializeBinary(2, t, i.BinaryWriter.prototype.writeInt64, i.BinaryWriter.prototype.writeInt64)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.getUser = function () {
            return i.Message.getWrapperField(this, p.User, 1)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.setUser = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.hasUser = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.getDeltaInfoMap = function (e) {
            return i.Message.getMapField(this, 2, e, null)
        }, proto.webcast.im.GrowthTaskMessage.CurrentContribution.prototype.clearDeltaInfoMap = function () {
            return this.getDeltaInfoMap().clear(), this
        }, proto.webcast.im.GrowthTaskMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GrowthTaskMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GrowthTaskMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GrowthTaskMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GrowthTaskMessage.prototype.getTask = function () {
            return i.Message.getWrapperField(this, n.GrowthTask, 2)
        }, proto.webcast.im.GrowthTaskMessage.prototype.setTask = function (e) {
            return i.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GrowthTaskMessage.prototype.clearTask = function () {
            return this.setTask(undefined)
        }, proto.webcast.im.GrowthTaskMessage.prototype.hasTask = function () {
            return null != i.Message.getField(this, 2)
        }, proto.webcast.im.GrowthTaskMessage.prototype.getAction = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.GrowthTaskMessage.prototype.setAction = function (e) {
            return i.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.GrowthTaskMessage.prototype.getCurrentContribution = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GrowthTaskMessage.CurrentContribution, 4)
        }, proto.webcast.im.GrowthTaskMessage.prototype.setCurrentContribution = function (e) {
            return i.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.GrowthTaskMessage.prototype.clearCurrentContribution = function () {
            return this.setCurrentContribution(undefined)
        }, proto.webcast.im.GrowthTaskMessage.prototype.hasCurrentContribution = function () {
            return null != i.Message.getField(this, 4)
        }, proto.webcast.im.GrowthTaskMessage.prototype.getContributorsList = function () {
            return i.Message.getRepeatedWrapperField(this, n.GrowthTaskContributorRank, 5)
        }, proto.webcast.im.GrowthTaskMessage.prototype.setContributorsList = function (e) {
            return i.Message.setRepeatedWrapperField(this, 5, e)
        }, proto.webcast.im.GrowthTaskMessage.prototype.addContributors = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 5, e, proto.webcast.data.GrowthTaskContributorRank, t)
        }, proto.webcast.im.GrowthTaskMessage.prototype.clearContributorsList = function () {
            return this.setContributorsList([])
        }, o.object.extend(t, proto.webcast.im)
    }, 76138: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(46695);
        o.object.extend(proto, a);
        var n = s(50684);
        o.object.extend(proto, n);
        var p = s(16618);
        o.object.extend(proto, p), o.exportSymbol("proto.webcast.im.GuestBattleFinishContent", null, r), o.exportSymbol("proto.webcast.im.GuestBattleMessage", null, r), o.exportSymbol("proto.webcast.im.GuestBattleMessage.ContentCase", null, r), o.exportSymbol("proto.webcast.im.GuestBattleMessageType", null, r), o.exportSymbol("proto.webcast.im.GuestBattleUpdateContent", null, r), proto.webcast.im.GuestBattleMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, proto.webcast.im.GuestBattleMessage.oneofGroups_)
        }, o.inherits(proto.webcast.im.GuestBattleMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GuestBattleMessage.displayName = "proto.webcast.im.GuestBattleMessage"), proto.webcast.im.GuestBattleUpdateContent = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GuestBattleUpdateContent, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GuestBattleUpdateContent.displayName = "proto.webcast.im.GuestBattleUpdateContent"), proto.webcast.im.GuestBattleFinishContent = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GuestBattleFinishContent, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GuestBattleFinishContent.displayName = "proto.webcast.im.GuestBattleFinishContent"), proto.webcast.im.GuestBattleMessage.oneofGroups_ = [[100, 101]], proto.webcast.im.GuestBattleMessage.ContentCase = {
            CONTENT_NOT_SET: 0,
            UPDATE_CONTENT: 100,
            FINISH_CONTENT: 101
        }, proto.webcast.im.GuestBattleMessage.prototype.getContentCase = function () {
            return i.Message.computeOneofCase(this, proto.webcast.im.GuestBattleMessage.oneofGroups_[0])
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GuestBattleMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GuestBattleMessage.toObject(e, this)
        }, proto.webcast.im.GuestBattleMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && n.Common.toObject(e, s),
                msgType: i.Message.getFieldWithDefault(t, 2, "0"),
                battleInfo: (s = t.getBattleInfo()) && a.GuestBattleInfo.toObject(e, s),
                finishToast: i.Message.getFieldWithDefault(t, 4, ""),
                updateContent: (s = t.getUpdateContent()) && proto.webcast.im.GuestBattleUpdateContent.toObject(e, s),
                finishContent: (s = t.getFinishContent()) && proto.webcast.im.GuestBattleFinishContent.toObject(e, s)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GuestBattleMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GuestBattleMessage;
            return proto.webcast.im.GuestBattleMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GuestBattleMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new n.Common;
                        t.readMessage(s, n.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setMsgType(s);
                        break;
                    case 3:
                        s = new a.GuestBattleInfo;
                        t.readMessage(s, a.GuestBattleInfo.deserializeBinaryFromReader), e.setBattleInfo(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setFinishToast(s);
                        break;
                    case 100:
                        s = new proto.webcast.im.GuestBattleUpdateContent;
                        t.readMessage(s, proto.webcast.im.GuestBattleUpdateContent.deserializeBinaryFromReader), e.setUpdateContent(s);
                        break;
                    case 101:
                        s = new proto.webcast.im.GuestBattleFinishContent;
                        t.readMessage(s, proto.webcast.im.GuestBattleFinishContent.deserializeBinaryFromReader), e.setFinishContent(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GuestBattleMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GuestBattleMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GuestBattleMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, n.Common.serializeBinaryToWriter), s = e.getMsgType(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s), null != (s = e.getBattleInfo()) && t.writeMessage(3, s, a.GuestBattleInfo.serializeBinaryToWriter), (s = e.getFinishToast()).length > 0 && t.writeString(4, s), null != (s = e.getUpdateContent()) && t.writeMessage(100, s, proto.webcast.im.GuestBattleUpdateContent.serializeBinaryToWriter), null != (s = e.getFinishContent()) && t.writeMessage(101, s, proto.webcast.im.GuestBattleFinishContent.serializeBinaryToWriter)
        }, proto.webcast.im.GuestBattleMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GuestBattleMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GuestBattleMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GuestBattleMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GuestBattleMessage.prototype.getMsgType = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GuestBattleMessage.prototype.setMsgType = function (e) {
            return i.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GuestBattleMessage.prototype.getBattleInfo = function () {
            return i.Message.getWrapperField(this, a.GuestBattleInfo, 3)
        }, proto.webcast.im.GuestBattleMessage.prototype.setBattleInfo = function (e) {
            return i.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.GuestBattleMessage.prototype.clearBattleInfo = function () {
            return this.setBattleInfo(undefined)
        }, proto.webcast.im.GuestBattleMessage.prototype.hasBattleInfo = function () {
            return null != i.Message.getField(this, 3)
        }, proto.webcast.im.GuestBattleMessage.prototype.getFinishToast = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GuestBattleMessage.prototype.setFinishToast = function (e) {
            return i.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GuestBattleMessage.prototype.getUpdateContent = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GuestBattleUpdateContent, 100)
        }, proto.webcast.im.GuestBattleMessage.prototype.setUpdateContent = function (e) {
            return i.Message.setOneofWrapperField(this, 100, proto.webcast.im.GuestBattleMessage.oneofGroups_[0], e)
        }, proto.webcast.im.GuestBattleMessage.prototype.clearUpdateContent = function () {
            return this.setUpdateContent(undefined)
        }, proto.webcast.im.GuestBattleMessage.prototype.hasUpdateContent = function () {
            return null != i.Message.getField(this, 100)
        }, proto.webcast.im.GuestBattleMessage.prototype.getFinishContent = function () {
            return i.Message.getWrapperField(this, proto.webcast.im.GuestBattleFinishContent, 101)
        }, proto.webcast.im.GuestBattleMessage.prototype.setFinishContent = function (e) {
            return i.Message.setOneofWrapperField(this, 101, proto.webcast.im.GuestBattleMessage.oneofGroups_[0], e)
        }, proto.webcast.im.GuestBattleMessage.prototype.clearFinishContent = function () {
            return this.setFinishContent(undefined)
        }, proto.webcast.im.GuestBattleMessage.prototype.hasFinishContent = function () {
            return null != i.Message.getField(this, 101)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GuestBattleUpdateContent.prototype.toObject = function (e) {
            return proto.webcast.im.GuestBattleUpdateContent.toObject(e, this)
        }, proto.webcast.im.GuestBattleUpdateContent.toObject = function (e, t) {
            var s = {crownUpgrade: i.Message.getBooleanFieldWithDefault(t, 1, !1)};
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.GuestBattleUpdateContent.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GuestBattleUpdateContent;
            return proto.webcast.im.GuestBattleUpdateContent.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GuestBattleUpdateContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var s = t.readBool();
                    e.setCrownUpgrade(s)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.GuestBattleUpdateContent.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GuestBattleUpdateContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GuestBattleUpdateContent.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            (s = e.getCrownUpgrade()) && t.writeBool(1, s)
        }, proto.webcast.im.GuestBattleUpdateContent.prototype.getCrownUpgrade = function () {
            return i.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.GuestBattleUpdateContent.prototype.setCrownUpgrade = function (e) {
            return i.Message.setProto3BooleanField(this, 1, e)
        }, i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GuestBattleFinishContent.prototype.toObject = function (e) {
            return proto.webcast.im.GuestBattleFinishContent.toObject(e, this)
        }, proto.webcast.im.GuestBattleFinishContent.toObject = function (e, t) {
            var s = {
                reason: i.Message.getFieldWithDefault(t, 1, 0),
                finishUserId: i.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.GuestBattleFinishContent.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GuestBattleFinishContent;
            return proto.webcast.im.GuestBattleFinishContent.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GuestBattleFinishContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = t.readEnum();
                        e.setReason(s);
                        break;
                    case 2:
                        s = t.readInt64String();
                        e.setFinishUserId(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GuestBattleFinishContent.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GuestBattleFinishContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GuestBattleFinishContent.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            0 !== (s = e.getReason()) && t.writeEnum(1, s), s = e.getFinishUserId(), 0 !== parseInt(s, 10) && t.writeInt64String(2, s)
        }, proto.webcast.im.GuestBattleFinishContent.prototype.getReason = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.GuestBattleFinishContent.prototype.setReason = function (e) {
            return i.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.GuestBattleFinishContent.prototype.getFinishUserId = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.GuestBattleFinishContent.prototype.setFinishUserId = function (e) {
            return i.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.GuestBattleMessageType = {
            GUESTBATTLE_NONE: 0,
            GUESTBATTLE_CREATE: 1,
            GUESTBATTLE_UPDATE: 2,
            GUESTBATTLE_SHOW_RESULT: 3,
            GUESTBATTLE_FINISH: 4,
            GUESTBATTLE_PAUSE: 5,
            GUESTBATTLE_RESUME: 6
        }, o.object.extend(t, proto.webcast.im)
    }, 65460: function (e, t, s) {
        var i = s(47865), o = i, r = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = s(50684);
        o.object.extend(proto, a), o.exportSymbol("proto.webcast.im.GuideMessage", null, r), proto.webcast.im.GuideMessage = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.webcast.im.GuideMessage, i.Message), o.DEBUG && !COMPILED && (proto.webcast.im.GuideMessage.displayName = "proto.webcast.im.GuideMessage"), i.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GuideMessage.toObject(e, this)
        }, proto.webcast.im.GuideMessage.toObject = function (e, t) {
            var s, o = {
                common: (s = t.getCommon()) && a.Common.toObject(e, s),
                guideType: i.Message.getFieldWithDefault(t, 2, 0),
                giftId: i.Message.getFieldWithDefault(t, 3, 0),
                description: i.Message.getFieldWithDefault(t, 4, ""),
                duration: i.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.GuideMessage.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), s = new proto.webcast.im.GuideMessage;
            return proto.webcast.im.GuideMessage.deserializeBinaryFromReader(s, t)
        }, proto.webcast.im.GuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var s = new a.Common;
                        t.readMessage(s, a.Common.deserializeBinaryFromReader), e.setCommon(s);
                        break;
                    case 2:
                        s = t.readInt64();
                        e.setGuideType(s);
                        break;
                    case 3:
                        s = t.readInt64();
                        e.setGiftId(s);
                        break;
                    case 4:
                        s = t.readString();
                        e.setDescription(s);
                        break;
                    case 5:
                        s = t.readInt64();
                        e.setDuration(s);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GuideMessage.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.webcast.im.GuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GuideMessage.serializeBinaryToWriter = function (e, t) {
            var s = undefined;
            null != (s = e.getCommon()) && t.writeMessage(1, s, a.Common.serializeBinaryToWriter), 0 !== (s = e.getGuideType()) && t.writeInt64(2, s), 0 !== (s = e.getGiftId()) && t.writeInt64(3, s), (s = e.getDescription()).length > 0 && t.writeString(4, s), 0 !== (s = e.getDuration()) && t.writeInt64(5, s)
        }, proto.webcast.im.GuideMessage.prototype.getCommon = function () {
            return i.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GuideMessage.prototype.setCommon = function (e) {
            return i.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GuideMessage.prototype.hasCommon = function () {
            return null != i.Message.getField(this, 1)
        }, proto.webcast.im.GuideMessage.prototype.getGuideType = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.GuideMessage.prototype.setGuideType = function (e) {
            return i.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.GuideMessage.prototype.getGiftId = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.GuideMessage.prototype.setGiftId = function (e) {
            return i.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.GuideMessage.prototype.getDescription = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GuideMessage.prototype.setDescription = function (e) {
            return i.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.GuideMessage.prototype.getDuration = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.GuideMessage.prototype.setDuration = function (e) {
            return i.Message.setProto3IntField(this, 5, e)
        }, o.object.extend(t, proto.webcast.im)
    }
}]);