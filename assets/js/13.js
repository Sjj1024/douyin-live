(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6836], {
    82937: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(57561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.RoomBorderMessage", null, i), proto.webcast.im.RoomBorderMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.RoomBorderMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.RoomBorderMessage.displayName = "proto.webcast.im.RoomBorderMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomBorderMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomBorderMessage.toObject(e, this)
        }, proto.webcast.im.RoomBorderMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                borderInfo: (o = t.getBorderInfo()) && n.BorderInfo.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomBorderMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.RoomBorderMessage;
            return proto.webcast.im.RoomBorderMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomBorderMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.BorderInfo;
                        t.readMessage(o, n.BorderInfo.deserializeBinaryFromReader), e.setBorderInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomBorderMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomBorderMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomBorderMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getBorderInfo()) && t.writeMessage(2, o, n.BorderInfo.serializeBinaryToWriter)
        }, proto.webcast.im.RoomBorderMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomBorderMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomBorderMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomBorderMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.RoomBorderMessage.prototype.getBorderInfo = function () {
            return r.Message.getWrapperField(this, n.BorderInfo, 2)
        }, proto.webcast.im.RoomBorderMessage.prototype.setBorderInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomBorderMessage.prototype.clearBorderInfo = function () {
            return this.setBorderInfo(undefined)
        }, proto.webcast.im.RoomBorderMessage.prototype.hasBorderInfo = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 24037: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.ActivityInteractiveMessage", null, i), proto.webcast.im.ActivityInteractiveMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ActivityInteractiveMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ActivityInteractiveMessage.displayName = "proto.webcast.im.ActivityInteractiveMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ActivityInteractiveMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ActivityInteractiveMessage.toObject(e, this)
        }, proto.webcast.im.ActivityInteractiveMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                extra: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ActivityInteractiveMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ActivityInteractiveMessage;
            return proto.webcast.im.ActivityInteractiveMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ActivityInteractiveMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ActivityInteractiveMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ActivityInteractiveMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getExtra()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.ActivityInteractiveMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 93258: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.MagicGestureActivityMessage", null, i), proto.webcast.im.MagicGestureActivityMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.MagicGestureActivityMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.MagicGestureActivityMessage.displayName = "proto.webcast.im.MagicGestureActivityMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MagicGestureActivityMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MagicGestureActivityMessage.toObject(e, this)
        }, proto.webcast.im.MagicGestureActivityMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                status: r.Message.getFieldWithDefault(t, 2, 0),
                effectId: r.Message.getFieldWithDefault(t, 3, ""),
                actionType: r.Message.getFieldWithDefault(t, 4, 0),
                actionSchema: r.Message.getFieldWithDefault(t, 5, ""),
                bizId: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.MagicGestureActivityMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MagicGestureActivityMessage;
            return proto.webcast.im.MagicGestureActivityMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MagicGestureActivityMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setStatus(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setEffectId(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setActionType(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setActionSchema(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setBizId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MagicGestureActivityMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MagicGestureActivityMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getStatus()) && t.writeInt32(2, o), (o = e.getEffectId()).length > 0 && t.writeString(3, o), 0 !== (o = e.getActionType()) && t.writeInt32(4, o), (o = e.getActionSchema()).length > 0 && t.writeString(5, o), (o = e.getBizId()).length > 0 && t.writeString(6, o)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.getEffectId = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.setEffectId = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.getActionType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.setActionType = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.getActionSchema = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.setActionSchema = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.getBizId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.MagicGestureActivityMessage.prototype.setBizId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 21729: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.PixActivityMessage", null, i), proto.webcast.im.PixActivityMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.PixActivityMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.PixActivityMessage.displayName = "proto.webcast.im.PixActivityMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PixActivityMessage.prototype.toObject = function (e) {
            return proto.webcast.im.PixActivityMessage.toObject(e, this)
        }, proto.webcast.im.PixActivityMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                currentLevel: r.Message.getFieldWithDefault(t, 2, 0),
                canChangeProp: r.Message.getBooleanFieldWithDefault(t, 3, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.PixActivityMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.PixActivityMessage;
            return proto.webcast.im.PixActivityMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.PixActivityMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setCurrentLevel(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setCanChangeProp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PixActivityMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PixActivityMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PixActivityMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getCurrentLevel()) && t.writeInt32(2, o), (o = e.getCanChangeProp()) && t.writeBool(3, o)
        }, proto.webcast.im.PixActivityMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.PixActivityMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.PixActivityMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.PixActivityMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.PixActivityMessage.prototype.getCurrentLevel = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.PixActivityMessage.prototype.setCurrentLevel = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.PixActivityMessage.prototype.getCanChangeProp = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.PixActivityMessage.prototype.setCanChangeProp = function (e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 25981: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n);
        var c = o(50684);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.ImageInfo", null, i), s.exportSymbol("proto.webcast.im.PrizeNoticeMessage", null, i), proto.webcast.im.PrizeNoticeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.PrizeNoticeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.PrizeNoticeMessage.displayName = "proto.webcast.im.PrizeNoticeMessage"), proto.webcast.im.ImageInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ImageInfo, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ImageInfo.displayName = "proto.webcast.im.ImageInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PrizeNoticeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.PrizeNoticeMessage.toObject(e, this)
        }, proto.webcast.im.PrizeNoticeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                assetId: r.Message.getFieldWithDefault(t, 2, "0"),
                imageInfo: (o = t.getImageInfo()) && proto.webcast.im.ImageInfo.toObject(e, o),
                landscapeBgImg: (o = t.getLandscapeBgImg()) && n.Image.toObject(e, o),
                landscapeContent: r.Message.getFieldWithDefault(t, 5, ""),
                sceneContextId: r.Message.getFieldWithDefault(t, 6, "0"),
                landscapeHeight: r.Message.getFieldWithDefault(t, 7, 0),
                playPriority: r.Message.getFieldWithDefault(t, 8, 0),
                extraMap: (o = t.getExtraMap()) ? o.toObject(e, undefined) : [],
                useSeparatePlayer: r.Message.getBooleanFieldWithDefault(t, 10, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.PrizeNoticeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.PrizeNoticeMessage;
            return proto.webcast.im.PrizeNoticeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.PrizeNoticeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setAssetId(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.ImageInfo;
                        t.readMessage(o, proto.webcast.im.ImageInfo.deserializeBinaryFromReader), e.setImageInfo(o);
                        break;
                    case 4:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setLandscapeBgImg(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setLandscapeContent(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setSceneContextId(o);
                        break;
                    case 7:
                        o = t.readInt32();
                        e.setLandscapeHeight(o);
                        break;
                    case 8:
                        o = t.readInt32();
                        e.setPlayPriority(o);
                        break;
                    case 9:
                        o = e.getExtraMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 10:
                        o = t.readBool();
                        e.setUseSeparatePlayer(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PrizeNoticeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PrizeNoticeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PrizeNoticeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), o = e.getAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getImageInfo()) && t.writeMessage(3, o, proto.webcast.im.ImageInfo.serializeBinaryToWriter), null != (o = e.getLandscapeBgImg()) && t.writeMessage(4, o, n.Image.serializeBinaryToWriter), (o = e.getLandscapeContent()).length > 0 && t.writeString(5, o), o = e.getSceneContextId(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), 0 !== (o = e.getLandscapeHeight()) && t.writeInt32(7, o), 0 !== (o = e.getPlayPriority()) && t.writeInt32(8, o), (o = e.getExtraMap(!0)) && o.getLength() > 0 && o.serializeBinary(9, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (o = e.getUseSeparatePlayer()) && t.writeBool(10, o)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getAssetId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setAssetId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getImageInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ImageInfo, 3)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setImageInfo = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.clearImageInfo = function () {
            return this.setImageInfo(undefined)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.hasImageInfo = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getLandscapeBgImg = function () {
            return r.Message.getWrapperField(this, n.Image, 4)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setLandscapeBgImg = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.clearLandscapeBgImg = function () {
            return this.setLandscapeBgImg(undefined)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.hasLandscapeBgImg = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getLandscapeContent = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setLandscapeContent = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getSceneContextId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setSceneContextId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getLandscapeHeight = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setLandscapeHeight = function (e) {
            return r.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getPlayPriority = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setPlayPriority = function (e) {
            return r.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getExtraMap = function (e) {
            return r.Message.getMapField(this, 9, e, null)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.clearExtraMap = function () {
            return this.getExtraMap().clear(), this
        }, proto.webcast.im.PrizeNoticeMessage.prototype.getUseSeparatePlayer = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        }, proto.webcast.im.PrizeNoticeMessage.prototype.setUseSeparatePlayer = function (e) {
            return r.Message.setProto3BooleanField(this, 10, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ImageInfo.prototype.toObject = function (e) {
            return proto.webcast.im.ImageInfo.toObject(e, this)
        }, proto.webcast.im.ImageInfo.toObject = function (e, t) {
            var o, s = {
                img: (o = t.getImg()) && n.Image.toObject(e, o),
                start: r.Message.getFieldWithDefault(t, 2, 0),
                duration: r.Message.getFieldWithDefault(t, 3, 0),
                x: r.Message.getFieldWithDefault(t, 4, 0),
                y: r.Message.getFieldWithDefault(t, 5, 0),
                width: r.Message.getFieldWithDefault(t, 6, 0),
                height: r.Message.getFieldWithDefault(t, 7, 0),
                needCircle: r.Message.getBooleanFieldWithDefault(t, 8, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ImageInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ImageInfo;
            return proto.webcast.im.ImageInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ImageInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setImg(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setStart(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setDuration(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setX(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setY(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setWidth(o);
                        break;
                    case 7:
                        o = t.readInt32();
                        e.setHeight(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setNeedCircle(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ImageInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ImageInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ImageInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getImg()) && t.writeMessage(1, o, n.Image.serializeBinaryToWriter), 0 !== (o = e.getStart()) && t.writeInt32(2, o), 0 !== (o = e.getDuration()) && t.writeInt32(3, o), 0 !== (o = e.getX()) && t.writeInt32(4, o), 0 !== (o = e.getY()) && t.writeInt32(5, o), 0 !== (o = e.getWidth()) && t.writeInt32(6, o), 0 !== (o = e.getHeight()) && t.writeInt32(7, o), (o = e.getNeedCircle()) && t.writeBool(8, o)
        }, proto.webcast.im.ImageInfo.prototype.getImg = function () {
            return r.Message.getWrapperField(this, n.Image, 1)
        }, proto.webcast.im.ImageInfo.prototype.setImg = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ImageInfo.prototype.clearImg = function () {
            return this.setImg(undefined)
        }, proto.webcast.im.ImageInfo.prototype.hasImg = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ImageInfo.prototype.getStart = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ImageInfo.prototype.setStart = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.ImageInfo.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.ImageInfo.prototype.setDuration = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.ImageInfo.prototype.getX = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.ImageInfo.prototype.setX = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.ImageInfo.prototype.getY = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.ImageInfo.prototype.setY = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.ImageInfo.prototype.getWidth = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.ImageInfo.prototype.setWidth = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.ImageInfo.prototype.getHeight = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.ImageInfo.prototype.setHeight = function (e) {
            return r.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.ImageInfo.prototype.getNeedCircle = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        }, proto.webcast.im.ImageInfo.prototype.setNeedCircle = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 64454: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(25903);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.AdminPrivilegeMessage", null, i), s.exportSymbol("proto.webcast.im.AdminPrivilegeStruct", null, i), proto.webcast.im.AdminPrivilegeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AdminPrivilegeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AdminPrivilegeMessage.displayName = "proto.webcast.im.AdminPrivilegeMessage"), proto.webcast.im.AdminPrivilegeStruct = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AdminPrivilegeStruct, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AdminPrivilegeStruct.displayName = "proto.webcast.im.AdminPrivilegeStruct"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AdminPrivilegeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AdminPrivilegeMessage.toObject(e, this)
        }, proto.webcast.im.AdminPrivilegeMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.AdminPrivilegeStruct.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.AdminPrivilegeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AdminPrivilegeMessage;
            return proto.webcast.im.AdminPrivilegeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AdminPrivilegeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.AdminPrivilegeStruct;
                        t.readMessage(o, proto.webcast.im.AdminPrivilegeStruct.deserializeBinaryFromReader), e.setData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AdminPrivilegeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AdminPrivilegeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.AdminPrivilegeStruct.serializeBinaryToWriter)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AdminPrivilegeStruct, 2)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.setData = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.clearData = function () {
            return this.setData(undefined)
        }, proto.webcast.im.AdminPrivilegeMessage.prototype.hasData = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AdminPrivilegeStruct.prototype.toObject = function (e) {
            return proto.webcast.im.AdminPrivilegeStruct.toObject(e, this)
        }, proto.webcast.im.AdminPrivilegeStruct.toObject = function (e, t) {
            var o = {privilege: r.Message.getFieldWithDefault(t, 1, 0), op: r.Message.getFieldWithDefault(t, 2, "0")};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AdminPrivilegeStruct.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AdminPrivilegeStruct;
            return proto.webcast.im.AdminPrivilegeStruct.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AdminPrivilegeStruct.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setPrivilege(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setOp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AdminPrivilegeStruct.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AdminPrivilegeStruct.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AdminPrivilegeStruct.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getPrivilege()) && t.writeEnum(1, o), o = e.getOp(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }, proto.webcast.im.AdminPrivilegeStruct.prototype.getPrivilege = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.AdminPrivilegeStruct.prototype.setPrivilege = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.AdminPrivilegeStruct.prototype.getOp = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.AdminPrivilegeStruct.prototype.setOp = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 19880: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.AdminRecordHandleMessage", null, i), proto.webcast.im.AdminRecordHandleMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AdminRecordHandleMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AdminRecordHandleMessage.displayName = "proto.webcast.im.AdminRecordHandleMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AdminRecordHandleMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AdminRecordHandleMessage.toObject(e, this)
        }, proto.webcast.im.AdminRecordHandleMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                handleType: r.Message.getFieldWithDefault(t, 2, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AdminRecordHandleMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AdminRecordHandleMessage;
            return proto.webcast.im.AdminRecordHandleMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AdminRecordHandleMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setHandleType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AdminRecordHandleMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AdminRecordHandleMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getHandleType()) && t.writeInt32(2, o)
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.getHandleType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.AdminRecordHandleMessage.prototype.setHandleType = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 7020: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.AdminData", null, i), s.exportSymbol("proto.webcast.im.AdminRecordMessage", null, i), s.exportSymbol("proto.webcast.im.TextExtraItem", null, i), proto.webcast.im.AdminData = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AdminData, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AdminData.displayName = "proto.webcast.im.AdminData"), proto.webcast.im.TextExtraItem = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TextExtraItem, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TextExtraItem.displayName = "proto.webcast.im.TextExtraItem"), proto.webcast.im.AdminRecordMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.AdminRecordMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.AdminRecordMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AdminRecordMessage.displayName = "proto.webcast.im.AdminRecordMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AdminData.prototype.toObject = function (e) {
            return proto.webcast.im.AdminData.toObject(e, this)
        }, proto.webcast.im.AdminData.toObject = function (e, t) {
            var o = {uid: r.Message.getFieldWithDefault(t, 1, "0"), name: r.Message.getFieldWithDefault(t, 2, "")};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AdminData.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AdminData;
            return proto.webcast.im.AdminData.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AdminData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setName(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AdminData.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AdminData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AdminData.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getUid(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getName()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.AdminData.prototype.getUid = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.AdminData.prototype.setUid = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.AdminData.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.AdminData.prototype.setName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TextExtraItem.prototype.toObject = function (e) {
            return proto.webcast.im.TextExtraItem.toObject(e, this)
        }, proto.webcast.im.TextExtraItem.toObject = function (e, t) {
            var o = {
                start: r.Message.getFieldWithDefault(t, 1, 0),
                stop: r.Message.getFieldWithDefault(t, 2, 0),
                type: r.Message.getFieldWithDefault(t, 3, 0),
                userId: r.Message.getFieldWithDefault(t, 4, ""),
                hashtagName: r.Message.getFieldWithDefault(t, 5, ""),
                hashtagId: r.Message.getFieldWithDefault(t, 6, ""),
                isCommerce: r.Message.getBooleanFieldWithDefault(t, 7, !1),
                awemeId: r.Message.getFieldWithDefault(t, 8, ""),
                subType: r.Message.getFieldWithDefault(t, 9, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.TextExtraItem.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TextExtraItem;
            return proto.webcast.im.TextExtraItem.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TextExtraItem.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt32();
                        e.setStart(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setStop(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setType(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setUserId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setHashtagName(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setHashtagId(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setIsCommerce(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setAwemeId(o);
                        break;
                    case 9:
                        o = t.readInt32();
                        e.setSubType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TextExtraItem.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TextExtraItem.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TextExtraItem.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getStart()) && t.writeInt32(1, o), 0 !== (o = e.getStop()) && t.writeInt32(2, o), 0 !== (o = e.getType()) && t.writeInt32(3, o), (o = e.getUserId()).length > 0 && t.writeString(4, o), (o = e.getHashtagName()).length > 0 && t.writeString(5, o), (o = e.getHashtagId()).length > 0 && t.writeString(6, o), (o = e.getIsCommerce()) && t.writeBool(7, o), (o = e.getAwemeId()).length > 0 && t.writeString(8, o), 0 !== (o = e.getSubType()) && t.writeInt32(9, o)
        }, proto.webcast.im.TextExtraItem.prototype.getStart = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.TextExtraItem.prototype.setStart = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.TextExtraItem.prototype.getStop = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.TextExtraItem.prototype.setStop = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.TextExtraItem.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.TextExtraItem.prototype.setType = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.TextExtraItem.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.TextExtraItem.prototype.setUserId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.TextExtraItem.prototype.getHashtagName = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.TextExtraItem.prototype.setHashtagName = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.TextExtraItem.prototype.getHashtagId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.TextExtraItem.prototype.setHashtagId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.TextExtraItem.prototype.getIsCommerce = function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        }, proto.webcast.im.TextExtraItem.prototype.setIsCommerce = function (e) {
            return r.Message.setProto3BooleanField(this, 7, e)
        }, proto.webcast.im.TextExtraItem.prototype.getAwemeId = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.TextExtraItem.prototype.setAwemeId = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.TextExtraItem.prototype.getSubType = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.TextExtraItem.prototype.setSubType = function (e) {
            return r.Message.setProto3IntField(this, 9, e)
        }, proto.webcast.im.AdminRecordMessage.repeatedFields_ = [6], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AdminRecordMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AdminRecordMessage.toObject(e, this)
        }, proto.webcast.im.AdminRecordMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                admin: (o = t.getAdmin()) && proto.webcast.im.AdminData.toObject(e, o),
                itemId: r.Message.getFieldWithDefault(t, 3, "0"),
                draftId: r.Message.getFieldWithDefault(t, 4, "0"),
                videoText: r.Message.getFieldWithDefault(t, 5, ""),
                videoTextExtraList: r.Message.toObjectList(t.getVideoTextExtraList(), proto.webcast.im.TextExtraItem.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AdminRecordMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AdminRecordMessage;
            return proto.webcast.im.AdminRecordMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AdminRecordMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.AdminData;
                        t.readMessage(o, proto.webcast.im.AdminData.deserializeBinaryFromReader), e.setAdmin(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setItemId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDraftId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setVideoText(o);
                        break;
                    case 6:
                        o = new proto.webcast.im.TextExtraItem;
                        t.readMessage(o, proto.webcast.im.TextExtraItem.deserializeBinaryFromReader), e.addVideoTextExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AdminRecordMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AdminRecordMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AdminRecordMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getAdmin()) && t.writeMessage(2, o, proto.webcast.im.AdminData.serializeBinaryToWriter), o = e.getItemId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getDraftId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getVideoText()).length > 0 && t.writeString(5, o), (o = e.getVideoTextExtraList()).length > 0 && t.writeRepeatedMessage(6, o, proto.webcast.im.TextExtraItem.serializeBinaryToWriter)
        }, proto.webcast.im.AdminRecordMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AdminRecordMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AdminRecordMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AdminRecordMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AdminRecordMessage.prototype.getAdmin = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AdminData, 2)
        }, proto.webcast.im.AdminRecordMessage.prototype.setAdmin = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AdminRecordMessage.prototype.clearAdmin = function () {
            return this.setAdmin(undefined)
        }, proto.webcast.im.AdminRecordMessage.prototype.hasAdmin = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.AdminRecordMessage.prototype.getItemId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.AdminRecordMessage.prototype.setItemId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.AdminRecordMessage.prototype.getDraftId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.AdminRecordMessage.prototype.setDraftId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.AdminRecordMessage.prototype.getVideoText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.AdminRecordMessage.prototype.setVideoText = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.AdminRecordMessage.prototype.getVideoTextExtraList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.TextExtraItem, 6)
        }, proto.webcast.im.AdminRecordMessage.prototype.setVideoTextExtraList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        }, proto.webcast.im.AdminRecordMessage.prototype.addVideoTextExtra = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.webcast.im.TextExtraItem, t)
        }, proto.webcast.im.AdminRecordMessage.prototype.clearVideoTextExtraList = function () {
            return this.setVideoTextExtraList([])
        }, s.object.extend(t, proto.webcast.im)
    }, 8912: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.AnchorBoost", null, i), s.exportSymbol("proto.webcast.im.AnchorBoostMessage", null, i), s.exportSymbol("proto.webcast.im.AnchorEventType", null, i), proto.webcast.im.AnchorBoostMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AnchorBoostMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AnchorBoostMessage.displayName = "proto.webcast.im.AnchorBoostMessage"), proto.webcast.im.AnchorBoost = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AnchorBoost, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AnchorBoost.displayName = "proto.webcast.im.AnchorBoost"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorBoostMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AnchorBoostMessage.toObject(e, this)
        }, proto.webcast.im.AnchorBoostMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.AnchorBoost.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.AnchorBoostMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AnchorBoostMessage;
            return proto.webcast.im.AnchorBoostMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AnchorBoostMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.AnchorBoost;
                        t.readMessage(o, proto.webcast.im.AnchorBoost.deserializeBinaryFromReader), e.setData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AnchorBoostMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnchorBoostMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AnchorBoostMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.AnchorBoost.serializeBinaryToWriter)
        }, proto.webcast.im.AnchorBoostMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AnchorBoostMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AnchorBoostMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AnchorBoostMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AnchorBoostMessage.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AnchorBoost, 2)
        }, proto.webcast.im.AnchorBoostMessage.prototype.setData = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AnchorBoostMessage.prototype.clearData = function () {
            return this.setData(undefined)
        }, proto.webcast.im.AnchorBoostMessage.prototype.hasData = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorBoost.prototype.toObject = function (e) {
            return proto.webcast.im.AnchorBoost.toObject(e, this)
        }, proto.webcast.im.AnchorBoost.toObject = function (e, t) {
            var o = {
                eventName: r.Message.getFieldWithDefault(t, 1, "0"),
                anchorId: r.Message.getFieldWithDefault(t, 2, "0"),
                liveId: r.Message.getFieldWithDefault(t, 3, 0),
                eventType: r.Message.getFieldWithDefault(t, 4, 0),
                content: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AnchorBoost.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AnchorBoost;
            return proto.webcast.im.AnchorBoost.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AnchorBoost.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setEventName(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setAnchorId(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setLiveId(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setEventType(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AnchorBoost.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnchorBoost.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AnchorBoost.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getEventName(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getAnchorId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getLiveId()) && t.writeInt32(3, o), 0 !== (o = e.getEventType()) && t.writeInt32(4, o), (o = e.getContent()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.AnchorBoost.prototype.getEventName = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.AnchorBoost.prototype.setEventName = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.AnchorBoost.prototype.getAnchorId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.AnchorBoost.prototype.setAnchorId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.AnchorBoost.prototype.getLiveId = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.AnchorBoost.prototype.setLiveId = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.AnchorBoost.prototype.getEventType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.AnchorBoost.prototype.setEventType = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.AnchorBoost.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.AnchorBoost.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.AnchorEventType = {
            ANCHOR_EVENT_UNDEFINED: 0,
            SHARE: 1
        }, s.object.extend(t, proto.webcast.im)
    }, 60882: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        s.object.extend(proto, a);
        var n = o(99222);
        s.object.extend(proto, n);
        var c = o(50684);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.AssetEffectUtilMessage", null, i), s.exportSymbol("proto.webcast.im.EffectUtilImageInfo", null, i), s.exportSymbol("proto.webcast.im.EffectUtilTextInfo", null, i), proto.webcast.im.AssetEffectUtilMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.AssetEffectUtilMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.AssetEffectUtilMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AssetEffectUtilMessage.displayName = "proto.webcast.im.AssetEffectUtilMessage"), proto.webcast.im.EffectUtilImageInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.EffectUtilImageInfo, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.EffectUtilImageInfo.displayName = "proto.webcast.im.EffectUtilImageInfo"), proto.webcast.im.EffectUtilTextInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.EffectUtilTextInfo, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.EffectUtilTextInfo.displayName = "proto.webcast.im.EffectUtilTextInfo"), proto.webcast.im.AssetEffectUtilMessage.repeatedFields_ = [10, 20], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AssetEffectUtilMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AssetEffectUtilMessage.toObject(e, this)
        }, proto.webcast.im.AssetEffectUtilMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                assetId: r.Message.getFieldWithDefault(t, 2, "0"),
                priority: r.Message.getFieldWithDefault(t, 3, "0"),
                price: r.Message.getFieldWithDefault(t, 4, "0"),
                text: (o = t.getText()) && n.Text.toObject(e, o),
                textWidth: r.Message.getFieldWithDefault(t, 6, "0"),
                textHeitht: r.Message.getFieldWithDefault(t, 7, "0"),
                tracking: r.Message.getFieldWithDefault(t, 8, ""),
                dressId: r.Message.getFieldWithDefault(t, 9, ""),
                imagesList: r.Message.toObjectList(t.getImagesList(), proto.webcast.im.EffectUtilImageInfo.toObject, e),
                textsList: r.Message.toObjectList(t.getTextsList(), proto.webcast.im.EffectUtilTextInfo.toObject, e),
                finishSelfSchema: r.Message.getFieldWithDefault(t, 21, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AssetEffectUtilMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AssetEffectUtilMessage;
            return proto.webcast.im.AssetEffectUtilMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AssetEffectUtilMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setAssetId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setPriority(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setPrice(o);
                        break;
                    case 5:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setText(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setTextWidth(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setTextHeitht(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setTracking(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setDressId(o);
                        break;
                    case 10:
                        o = new proto.webcast.im.EffectUtilImageInfo;
                        t.readMessage(o, proto.webcast.im.EffectUtilImageInfo.deserializeBinaryFromReader), e.addImages(o);
                        break;
                    case 20:
                        o = new proto.webcast.im.EffectUtilTextInfo;
                        t.readMessage(o, proto.webcast.im.EffectUtilTextInfo.deserializeBinaryFromReader), e.addTexts(o);
                        break;
                    case 21:
                        o = t.readString();
                        e.setFinishSelfSchema(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AssetEffectUtilMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AssetEffectUtilMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), o = e.getAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getPriority(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getPrice(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), null != (o = e.getText()) && t.writeMessage(5, o, n.Text.serializeBinaryToWriter), o = e.getTextWidth(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getTextHeitht(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), (o = e.getTracking()).length > 0 && t.writeString(8, o), (o = e.getDressId()).length > 0 && t.writeString(9, o), (o = e.getImagesList()).length > 0 && t.writeRepeatedMessage(10, o, proto.webcast.im.EffectUtilImageInfo.serializeBinaryToWriter), (o = e.getTextsList()).length > 0 && t.writeRepeatedMessage(20, o, proto.webcast.im.EffectUtilTextInfo.serializeBinaryToWriter), (o = e.getFinishSelfSchema()).length > 0 && t.writeString(21, o)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getAssetId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setAssetId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getPriority = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setPriority = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getPrice = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setPrice = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getText = function () {
            return r.Message.getWrapperField(this, n.Text, 5)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setText = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.clearText = function () {
            return this.setText(undefined)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.hasText = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getTextWidth = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setTextWidth = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getTextHeitht = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setTextHeitht = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getTracking = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setTracking = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getDressId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setDressId = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getImagesList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.EffectUtilImageInfo, 10)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setImagesList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 10, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.addImages = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 10, e, proto.webcast.im.EffectUtilImageInfo, t)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.clearImagesList = function () {
            return this.setImagesList([])
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getTextsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.EffectUtilTextInfo, 20)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setTextsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 20, e)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.addTexts = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 20, e, proto.webcast.im.EffectUtilTextInfo, t)
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.clearTextsList = function () {
            return this.setTextsList([])
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.getFinishSelfSchema = function () {
            return r.Message.getFieldWithDefault(this, 21, "")
        }, proto.webcast.im.AssetEffectUtilMessage.prototype.setFinishSelfSchema = function (e) {
            return r.Message.setProto3StringField(this, 21, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EffectUtilImageInfo.prototype.toObject = function (e) {
            return proto.webcast.im.EffectUtilImageInfo.toObject(e, this)
        }, proto.webcast.im.EffectUtilImageInfo.toObject = function (e, t) {
            var o, s = {
                placeholderKey: r.Message.getFieldWithDefault(t, 1, ""),
                mixImage: (o = t.getMixImage()) && a.Image.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.EffectUtilImageInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.EffectUtilImageInfo;
            return proto.webcast.im.EffectUtilImageInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.EffectUtilImageInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setPlaceholderKey(o);
                        break;
                    case 2:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setMixImage(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EffectUtilImageInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EffectUtilImageInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EffectUtilImageInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getPlaceholderKey()).length > 0 && t.writeString(1, o), null != (o = e.getMixImage()) && t.writeMessage(2, o, a.Image.serializeBinaryToWriter)
        }, proto.webcast.im.EffectUtilImageInfo.prototype.getPlaceholderKey = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.EffectUtilImageInfo.prototype.setPlaceholderKey = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.EffectUtilImageInfo.prototype.getMixImage = function () {
            return r.Message.getWrapperField(this, a.Image, 2)
        }, proto.webcast.im.EffectUtilImageInfo.prototype.setMixImage = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.EffectUtilImageInfo.prototype.clearMixImage = function () {
            return this.setMixImage(undefined)
        }, proto.webcast.im.EffectUtilImageInfo.prototype.hasMixImage = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EffectUtilTextInfo.prototype.toObject = function (e) {
            return proto.webcast.im.EffectUtilTextInfo.toObject(e, this)
        }, proto.webcast.im.EffectUtilTextInfo.toObject = function (e, t) {
            var o = {
                placeholderKey: r.Message.getFieldWithDefault(t, 1, ""),
                content: r.Message.getFieldWithDefault(t, 2, ""),
                fontSize: r.Message.getFieldWithDefault(t, 3, "0"),
                fontColor: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.EffectUtilTextInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.EffectUtilTextInfo;
            return proto.webcast.im.EffectUtilTextInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.EffectUtilTextInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setPlaceholderKey(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setFontSize(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setFontColor(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EffectUtilTextInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EffectUtilTextInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EffectUtilTextInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getPlaceholderKey()).length > 0 && t.writeString(1, o), (o = e.getContent()).length > 0 && t.writeString(2, o), o = e.getFontSize(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getFontColor()).length > 0 && t.writeString(4, o)
        }, proto.webcast.im.EffectUtilTextInfo.prototype.getPlaceholderKey = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.EffectUtilTextInfo.prototype.setPlaceholderKey = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.EffectUtilTextInfo.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.EffectUtilTextInfo.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.EffectUtilTextInfo.prototype.getFontSize = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.EffectUtilTextInfo.prototype.setFontSize = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.EffectUtilTextInfo.prototype.getFontColor = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.EffectUtilTextInfo.prototype.setFontColor = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 10255: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(99222);
        s.object.extend(proto, n);
        var c = o(34688);
        s.object.extend(proto, c);
        var g = o(50684);
        s.object.extend(proto, g), s.exportSymbol("proto.webcast.im.AssetMessage", null, i), proto.webcast.im.AssetMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AssetMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AssetMessage.displayName = "proto.webcast.im.AssetMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AssetMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AssetMessage.toObject(e, this)
        }, proto.webcast.im.AssetMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && g.Common.toObject(e, o),
                assetId: r.Message.getFieldWithDefault(t, 2, "0"),
                panelDisplayText: (o = t.getPanelDisplayText()) && n.Text.toObject(e, o),
                showMessage: r.Message.getBooleanFieldWithDefault(t, 4, !1),
                showPanel: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                toUser: (o = t.getToUser()) && a.User.toObject(e, o),
                priority: (o = t.getPriority()) && c.GiftIMPriority.toObject(e, o),
                logId: r.Message.getFieldWithDefault(t, 9, ""),
                playPriority: r.Message.getFieldWithDefault(t, 10, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AssetMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AssetMessage;
            return proto.webcast.im.AssetMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AssetMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new g.Common;
                        t.readMessage(o, g.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setAssetId(o);
                        break;
                    case 3:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setPanelDisplayText(o);
                        break;
                    case 4:
                        o = t.readBool();
                        e.setShowMessage(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setShowPanel(o);
                        break;
                    case 6:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 7:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setToUser(o);
                        break;
                    case 8:
                        o = new c.GiftIMPriority;
                        t.readMessage(o, c.GiftIMPriority.deserializeBinaryFromReader), e.setPriority(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setLogId(o);
                        break;
                    case 10:
                        o = t.readInt32();
                        e.setPlayPriority(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AssetMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AssetMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AssetMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, g.Common.serializeBinaryToWriter), o = e.getAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getPanelDisplayText()) && t.writeMessage(3, o, n.Text.serializeBinaryToWriter), (o = e.getShowMessage()) && t.writeBool(4, o), (o = e.getShowPanel()) && t.writeBool(5, o), null != (o = e.getUser()) && t.writeMessage(6, o, a.User.serializeBinaryToWriter), null != (o = e.getToUser()) && t.writeMessage(7, o, a.User.serializeBinaryToWriter), null != (o = e.getPriority()) && t.writeMessage(8, o, c.GiftIMPriority.serializeBinaryToWriter), (o = e.getLogId()).length > 0 && t.writeString(9, o), 0 !== (o = e.getPlayPriority()) && t.writeInt32(10, o)
        }, proto.webcast.im.AssetMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.AssetMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AssetMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AssetMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AssetMessage.prototype.getAssetId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.AssetMessage.prototype.setAssetId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.AssetMessage.prototype.getPanelDisplayText = function () {
            return r.Message.getWrapperField(this, n.Text, 3)
        }, proto.webcast.im.AssetMessage.prototype.setPanelDisplayText = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.AssetMessage.prototype.clearPanelDisplayText = function () {
            return this.setPanelDisplayText(undefined)
        }, proto.webcast.im.AssetMessage.prototype.hasPanelDisplayText = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.AssetMessage.prototype.getShowMessage = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        }, proto.webcast.im.AssetMessage.prototype.setShowMessage = function (e) {
            return r.Message.setProto3BooleanField(this, 4, e)
        }, proto.webcast.im.AssetMessage.prototype.getShowPanel = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.AssetMessage.prototype.setShowPanel = function (e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.AssetMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 6)
        }, proto.webcast.im.AssetMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.AssetMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.AssetMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.AssetMessage.prototype.getToUser = function () {
            return r.Message.getWrapperField(this, a.User, 7)
        }, proto.webcast.im.AssetMessage.prototype.setToUser = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.AssetMessage.prototype.clearToUser = function () {
            return this.setToUser(undefined)
        }, proto.webcast.im.AssetMessage.prototype.hasToUser = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.AssetMessage.prototype.getPriority = function () {
            return r.Message.getWrapperField(this, c.GiftIMPriority, 8)
        }, proto.webcast.im.AssetMessage.prototype.setPriority = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.AssetMessage.prototype.clearPriority = function () {
            return this.setPriority(undefined)
        }, proto.webcast.im.AssetMessage.prototype.hasPriority = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.AssetMessage.prototype.getLogId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.AssetMessage.prototype.setLogId = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.AssetMessage.prototype.getPlayPriority = function () {
            return r.Message.getFieldWithDefault(this, 10, 0)
        }, proto.webcast.im.AssetMessage.prototype.setPlayPriority = function (e) {
            return r.Message.setProto3IntField(this, 10, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 97514: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n);
        var c = o(57561);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.AudioBGImgMessage", null, i), proto.webcast.im.AudioBGImgMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AudioBGImgMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AudioBGImgMessage.displayName = "proto.webcast.im.AudioBGImgMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AudioBGImgMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AudioBGImgMessage.toObject(e, this)
        }, proto.webcast.im.AudioBGImgMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                bgList: (o = t.getBgList()) && c.AudioBGData.toObject(e, o),
                reviewpass: r.Message.getFieldWithDefault(t, 3, 0),
                bgType: r.Message.getFieldWithDefault(t, 4, 0),
                showText: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AudioBGImgMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AudioBGImgMessage;
            return proto.webcast.im.AudioBGImgMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AudioBGImgMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new c.AudioBGData;
                        t.readMessage(o, c.AudioBGData.deserializeBinaryFromReader), e.setBgList(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setReviewpass(o);
                        break;
                    case 4:
                        o = t.readEnum();
                        e.setBgType(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setShowText(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AudioBGImgMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AudioBGImgMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AudioBGImgMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getBgList()) && t.writeMessage(2, o, c.AudioBGData.serializeBinaryToWriter), 0 !== (o = e.getReviewpass()) && t.writeInt32(3, o), 0 !== (o = e.getBgType()) && t.writeEnum(4, o), (o = e.getShowText()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.AudioBGImgMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AudioBGImgMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AudioBGImgMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AudioBGImgMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AudioBGImgMessage.prototype.getBgList = function () {
            return r.Message.getWrapperField(this, c.AudioBGData, 2)
        }, proto.webcast.im.AudioBGImgMessage.prototype.setBgList = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AudioBGImgMessage.prototype.clearBgList = function () {
            return this.setBgList(undefined)
        }, proto.webcast.im.AudioBGImgMessage.prototype.hasBgList = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.AudioBGImgMessage.prototype.getReviewpass = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.AudioBGImgMessage.prototype.setReviewpass = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.AudioBGImgMessage.prototype.getBgType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.AudioBGImgMessage.prototype.setBgType = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.AudioBGImgMessage.prototype.getShowText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.AudioBGImgMessage.prototype.setShowText = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 30837: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.AudioChatMessage", null, i), proto.webcast.im.AudioChatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AudioChatMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AudioChatMessage.displayName = "proto.webcast.im.AudioChatMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AudioChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AudioChatMessage.toObject(e, this)
        }, proto.webcast.im.AudioChatMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                audioUrl: r.Message.getFieldWithDefault(t, 4, ""),
                audioDuration: r.Message.getFieldWithDefault(t, 5, "0"),
                publicAreaCommon: (o = t.getPublicAreaCommon()) && n.PublicAreaCommon.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AudioChatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AudioChatMessage;
            return proto.webcast.im.AudioChatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AudioChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAudioUrl(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setAudioDuration(o);
                        break;
                    case 6:
                        o = new n.PublicAreaCommon;
                        t.readMessage(o, n.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AudioChatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AudioChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AudioChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(3, o), (o = e.getAudioUrl()).length > 0 && t.writeString(4, o), o = e.getAudioDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getPublicAreaCommon()) && t.writeMessage(6, o, n.PublicAreaCommon.serializeBinaryToWriter)
        }, proto.webcast.im.AudioChatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.AudioChatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AudioChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AudioChatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AudioChatMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.AudioChatMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AudioChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.AudioChatMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.AudioChatMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.AudioChatMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.AudioChatMessage.prototype.getAudioUrl = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.AudioChatMessage.prototype.setAudioUrl = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.AudioChatMessage.prototype.getAudioDuration = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.AudioChatMessage.prototype.setAudioDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.AudioChatMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, n.PublicAreaCommon, 6)
        }, proto.webcast.im.AudioChatMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.AudioChatMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.AudioChatMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 6)
        }, s.object.extend(t, proto.webcast.im)
    }, 8868: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.AuthorizationNotifyMessage", null, i), s.exportSymbol("proto.webcast.im.AuthorizationNotifyMessage.ContentBlock", null, i), s.exportSymbol("proto.webcast.im.AuthorizationNotifyMessage.RelationBlock", null, i), proto.webcast.im.AuthorizationNotifyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AuthorizationNotifyMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AuthorizationNotifyMessage.displayName = "proto.webcast.im.AuthorizationNotifyMessage"), proto.webcast.im.AuthorizationNotifyMessage.ContentBlock = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AuthorizationNotifyMessage.ContentBlock, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.displayName = "proto.webcast.im.AuthorizationNotifyMessage.ContentBlock"), proto.webcast.im.AuthorizationNotifyMessage.RelationBlock = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AuthorizationNotifyMessage.RelationBlock, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.displayName = "proto.webcast.im.AuthorizationNotifyMessage.RelationBlock"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AuthorizationNotifyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AuthorizationNotifyMessage.toObject(e, this)
        }, proto.webcast.im.AuthorizationNotifyMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                from: r.Message.getFieldWithDefault(t, 2, ""),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                style: r.Message.getFieldWithDefault(t, 4, ""),
                userContent: (o = t.getUserContent()) && proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.toObject(e, o),
                userRelation: (o = t.getUserRelation()) && proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.AuthorizationNotifyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AuthorizationNotifyMessage;
            return proto.webcast.im.AuthorizationNotifyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AuthorizationNotifyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setFrom(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setStyle(o);
                        break;
                    case 6:
                        o = new proto.webcast.im.AuthorizationNotifyMessage.ContentBlock;
                        t.readMessage(o, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.deserializeBinaryFromReader), e.setUserContent(o);
                        break;
                    case 7:
                        o = new proto.webcast.im.AuthorizationNotifyMessage.RelationBlock;
                        t.readMessage(o, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.deserializeBinaryFromReader), e.setUserRelation(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AuthorizationNotifyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AuthorizationNotifyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getFrom()).length > 0 && t.writeString(2, o), (o = e.getContent()).length > 0 && t.writeString(3, o), (o = e.getStyle()).length > 0 && t.writeString(4, o), null != (o = e.getUserContent()) && t.writeMessage(6, o, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.serializeBinaryToWriter), null != (o = e.getUserRelation()) && t.writeMessage(7, o, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.toObject = function (e) {
            return proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.toObject(e, this)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.toObject = function (e, t) {
            var o = {
                show: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                isAuthorized: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                title: r.Message.getFieldWithDefault(t, 3, ""),
                content: r.Message.getFieldWithDefault(t, 4, ""),
                detail: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AuthorizationNotifyMessage.ContentBlock;
            return proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBool();
                        e.setShow(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setIsAuthorized(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDetail(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getShow()) && t.writeBool(1, o), (o = e.getIsAuthorized()) && t.writeBool(2, o), (o = e.getTitle()).length > 0 && t.writeString(3, o), (o = e.getContent()).length > 0 && t.writeString(4, o), (o = e.getDetail()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.getShow = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.setShow = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.getIsAuthorized = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.setIsAuthorized = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.getDetail = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock.prototype.setDetail = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.toObject = function (e) {
            return proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.toObject(e, this)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.toObject = function (e, t) {
            var o = {
                show: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                isAuthorized: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                title: r.Message.getFieldWithDefault(t, 3, ""),
                content: r.Message.getFieldWithDefault(t, 4, ""),
                detail: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AuthorizationNotifyMessage.RelationBlock;
            return proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBool();
                        e.setShow(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setIsAuthorized(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDetail(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getShow()) && t.writeBool(1, o), (o = e.getIsAuthorized()) && t.writeBool(2, o), (o = e.getTitle()).length > 0 && t.writeString(3, o), (o = e.getContent()).length > 0 && t.writeString(4, o), (o = e.getDetail()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.getShow = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.setShow = function (e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.getIsAuthorized = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.setIsAuthorized = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.getDetail = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock.prototype.setDetail = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.getFrom = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.setFrom = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.getStyle = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.setStyle = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.getUserContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AuthorizationNotifyMessage.ContentBlock, 6)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.setUserContent = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.clearUserContent = function () {
            return this.setUserContent(undefined)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.hasUserContent = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.getUserRelation = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AuthorizationNotifyMessage.RelationBlock, 7)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.setUserRelation = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.clearUserRelation = function () {
            return this.setUserRelation(undefined)
        }, proto.webcast.im.AuthorizationNotifyMessage.prototype.hasUserRelation = function () {
            return null != r.Message.getField(this, 7)
        }, s.object.extend(t, proto.webcast.im)
    }, 81514: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.AutoCoverMessage", null, i), proto.webcast.im.AutoCoverMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AutoCoverMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AutoCoverMessage.displayName = "proto.webcast.im.AutoCoverMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AutoCoverMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AutoCoverMessage.toObject(e, this)
        }, proto.webcast.im.AutoCoverMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                image: (o = t.getImage()) && n.Image.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.AutoCoverMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AutoCoverMessage;
            return proto.webcast.im.AutoCoverMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AutoCoverMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setImage(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AutoCoverMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AutoCoverMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AutoCoverMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getImage()) && t.writeMessage(2, o, n.Image.serializeBinaryToWriter)
        }, proto.webcast.im.AutoCoverMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AutoCoverMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AutoCoverMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AutoCoverMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AutoCoverMessage.prototype.getImage = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.AutoCoverMessage.prototype.setImage = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AutoCoverMessage.prototype.clearImage = function () {
            return this.setImage(undefined)
        }, proto.webcast.im.AutoCoverMessage.prototype.hasImage = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 63459: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.AwemeShopExplainMessage", null, i), s.exportSymbol("proto.webcast.im.AwemeShopExplainMessage.Extra", null, i), proto.webcast.im.AwemeShopExplainMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AwemeShopExplainMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AwemeShopExplainMessage.displayName = "proto.webcast.im.AwemeShopExplainMessage"), proto.webcast.im.AwemeShopExplainMessage.Extra = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AwemeShopExplainMessage.Extra, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AwemeShopExplainMessage.Extra.displayName = "proto.webcast.im.AwemeShopExplainMessage.Extra"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AwemeShopExplainMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AwemeShopExplainMessage.toObject(e, this)
        }, proto.webcast.im.AwemeShopExplainMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                extra: (o = t.getExtra()) && proto.webcast.im.AwemeShopExplainMessage.Extra.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.AwemeShopExplainMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AwemeShopExplainMessage;
            return proto.webcast.im.AwemeShopExplainMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AwemeShopExplainMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.AwemeShopExplainMessage.Extra;
                        t.readMessage(o, proto.webcast.im.AwemeShopExplainMessage.Extra.deserializeBinaryFromReader), e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AwemeShopExplainMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AwemeShopExplainMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getExtra()) && t.writeMessage(2, o, proto.webcast.im.AwemeShopExplainMessage.Extra.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AwemeShopExplainMessage.Extra.prototype.toObject = function (e) {
            return proto.webcast.im.AwemeShopExplainMessage.Extra.toObject(e, this)
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.toObject = function (e, t) {
            var o = {
                promotionId: r.Message.getFieldWithDefault(t, 1, "0"),
                active: r.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AwemeShopExplainMessage.Extra.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AwemeShopExplainMessage.Extra;
            return proto.webcast.im.AwemeShopExplainMessage.Extra.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setPromotionId(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setActive(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AwemeShopExplainMessage.Extra.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getPromotionId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getActive()) && t.writeBool(2, o)
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.prototype.getPromotionId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.prototype.setPromotionId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.prototype.getActive = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.AwemeShopExplainMessage.Extra.prototype.setActive = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.getExtra = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AwemeShopExplainMessage.Extra, 2)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.setExtra = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.clearExtra = function () {
            return this.setExtra(undefined)
        }, proto.webcast.im.AwemeShopExplainMessage.prototype.hasExtra = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 40667: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BackRecordVideoMessage", null, i), proto.webcast.im.BackRecordVideoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.BackRecordVideoMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.BackRecordVideoMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BackRecordVideoMessage.displayName = "proto.webcast.im.BackRecordVideoMessage"), proto.webcast.im.BackRecordVideoMessage.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BackRecordVideoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BackRecordVideoMessage.toObject(e, this)
        }, proto.webcast.im.BackRecordVideoMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                m3u8Url: r.Message.getFieldWithDefault(t, 2, ""),
                tsUrlsList: null == (o = r.Message.getRepeatedField(t, 3)) ? undefined : o,
                executionId: r.Message.getFieldWithDefault(t, 4, ""),
                succeed: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                startTime: r.Message.getFieldWithDefault(t, 6, "0"),
                endTime: r.Message.getFieldWithDefault(t, 7, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BackRecordVideoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BackRecordVideoMessage;
            return proto.webcast.im.BackRecordVideoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BackRecordVideoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setM3u8Url(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.addTsUrls(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setExecutionId(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setSucceed(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setEndTime(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BackRecordVideoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BackRecordVideoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BackRecordVideoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getM3u8Url()).length > 0 && t.writeString(2, o), (o = e.getTsUrlsList()).length > 0 && t.writeRepeatedString(3, o), (o = e.getExecutionId()).length > 0 && t.writeString(4, o), (o = e.getSucceed()) && t.writeBool(5, o), o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getEndTime(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getM3u8Url = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setM3u8Url = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getTsUrlsList = function () {
            return r.Message.getRepeatedField(this, 3)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setTsUrlsList = function (e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.webcast.im.BackRecordVideoMessage.prototype.addTsUrls = function (e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.clearTsUrlsList = function () {
            return this.setTsUrlsList([])
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getExecutionId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setExecutionId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getSucceed = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setSucceed = function (e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.BackRecordVideoMessage.prototype.getEndTime = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.BackRecordVideoMessage.prototype.setEndTime = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 34281: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BattleCancelMessage", null, i), proto.webcast.im.BattleCancelMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleCancelMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleCancelMessage.displayName = "proto.webcast.im.BattleCancelMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleCancelMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleCancelMessage.toObject(e, this)
        }, proto.webcast.im.BattleCancelMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                channelId: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleCancelMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleCancelMessage;
            return proto.webcast.im.BattleCancelMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleCancelMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setChannelId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleCancelMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleCancelMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleCancelMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getChannelId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }, proto.webcast.im.BattleCancelMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleCancelMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleCancelMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleCancelMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleCancelMessage.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BattleCancelMessage.prototype.setChannelId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 59730: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(69641);
        s.object.extend(proto, n);
        var c = o(57561);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.BattleFeedBackCardMessage", null, i), proto.webcast.im.BattleFeedBackCardMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleFeedBackCardMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleFeedBackCardMessage.displayName = "proto.webcast.im.BattleFeedBackCardMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleFeedBackCardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleFeedBackCardMessage.toObject(e, this)
        }, proto.webcast.im.BattleFeedBackCardMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                rivalUid: r.Message.getFieldWithDefault(t, 2, "0"),
                feedbackCardType: r.Message.getFieldWithDefault(t, 3, 0),
                feedbackCard: (o = t.getFeedbackCard()) && c.FeedbackCard.toObject(e, o),
                battleId: r.Message.getFieldWithDefault(t, 5, "0"),
                channelId: r.Message.getFieldWithDefault(t, 6, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleFeedBackCardMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleFeedBackCardMessage;
            return proto.webcast.im.BattleFeedBackCardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleFeedBackCardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRivalUid(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setFeedbackCardType(o);
                        break;
                    case 4:
                        o = new c.FeedbackCard;
                        t.readMessage(o, c.FeedbackCard.deserializeBinaryFromReader), e.setFeedbackCard(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setBattleId(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setChannelId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleFeedBackCardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleFeedBackCardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getRivalUid(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getFeedbackCardType()) && t.writeEnum(3, o), null != (o = e.getFeedbackCard()) && t.writeMessage(4, o, c.FeedbackCard.serializeBinaryToWriter), o = e.getBattleId(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getChannelId(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.getRivalUid = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.setRivalUid = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.getFeedbackCardType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.setFeedbackCardType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.getFeedbackCard = function () {
            return r.Message.getWrapperField(this, c.FeedbackCard, 4)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.setFeedbackCard = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.clearFeedbackCard = function () {
            return this.setFeedbackCard(undefined)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.hasFeedbackCard = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.getBattleId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.setBattleId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.BattleFeedBackCardMessage.prototype.setChannelId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 24749: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BattleFrontRankMessage", null, i), proto.webcast.im.BattleFrontRankMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleFrontRankMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleFrontRankMessage.displayName = "proto.webcast.im.BattleFrontRankMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleFrontRankMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleFrontRankMessage.toObject(e, this)
        }, proto.webcast.im.BattleFrontRankMessage.toObject = function (e, t) {
            var o, r = {common: (o = t.getCommon()) && a.Common.toObject(e, o)};
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.BattleFrontRankMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleFrontRankMessage;
            return proto.webcast.im.BattleFrontRankMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleFrontRankMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.BattleFrontRankMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleFrontRankMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleFrontRankMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter)
        }, proto.webcast.im.BattleFrontRankMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleFrontRankMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleFrontRankMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleFrontRankMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, s.object.extend(t, proto.webcast.im)
    }, 50783: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(70561);
        s.object.extend(proto, n);
        var c = o(15968);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.BattleInviteMessage", null, i), proto.webcast.im.BattleInviteMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleInviteMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleInviteMessage.displayName = "proto.webcast.im.BattleInviteMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleInviteMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleInviteMessage.toObject(e, this)
        }, proto.webcast.im.BattleInviteMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                inviteType: r.Message.getFieldWithDefault(t, 2, 0),
                channelId: r.Message.getFieldWithDefault(t, 3, "0"),
                signExtra: r.Message.getFieldWithDefault(t, 4, ""),
                inviteUid: r.Message.getFieldWithDefault(t, 5, "0"),
                battleId: r.Message.getFieldWithDefault(t, 6, "0"),
                multipleAgainPrompts: r.Message.getFieldWithDefault(t, 7, ""),
                panelTitle: (o = t.getPanelTitle()) && n.PanelTitle.toObject(e, o),
                scene: r.Message.getFieldWithDefault(t, 9, 0),
                inviteTitle: r.Message.getFieldWithDefault(t, 10, ""),
                inviteSubTitle: r.Message.getFieldWithDefault(t, 11, ""),
                waitSec: r.Message.getFieldWithDefault(t, 12, "0"),
                battleConfigSetting: (o = t.getBattleConfigSetting()) && n.BattleConfigSetting.toObject(e, o),
                durationTime: r.Message.getFieldWithDefault(t, 15, "0"),
                multiPkMode: r.Message.getFieldWithDefault(t, 16, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleInviteMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleInviteMessage;
            return proto.webcast.im.BattleInviteMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleInviteMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setInviteType(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setChannelId(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setSignExtra(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setInviteUid(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setBattleId(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setMultipleAgainPrompts(o);
                        break;
                    case 8:
                        o = new n.PanelTitle;
                        t.readMessage(o, n.PanelTitle.deserializeBinaryFromReader), e.setPanelTitle(o);
                        break;
                    case 9:
                        o = t.readEnum();
                        e.setScene(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setInviteTitle(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setInviteSubTitle(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setWaitSec(o);
                        break;
                    case 14:
                        o = new n.BattleConfigSetting;
                        t.readMessage(o, n.BattleConfigSetting.deserializeBinaryFromReader), e.setBattleConfigSetting(o);
                        break;
                    case 15:
                        o = t.readInt64String();
                        e.setDurationTime(o);
                        break;
                    case 16:
                        o = t.readEnum();
                        e.setMultiPkMode(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleInviteMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleInviteMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleInviteMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getInviteType()) && t.writeEnum(2, o), o = e.getChannelId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getSignExtra()).length > 0 && t.writeString(4, o), o = e.getInviteUid(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getBattleId(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getMultipleAgainPrompts()).length > 0 && t.writeString(7, o), null != (o = e.getPanelTitle()) && t.writeMessage(8, o, n.PanelTitle.serializeBinaryToWriter), 0 !== (o = e.getScene()) && t.writeEnum(9, o), (o = e.getInviteTitle()).length > 0 && t.writeString(10, o), (o = e.getInviteSubTitle()).length > 0 && t.writeString(11, o), o = e.getWaitSec(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), null != (o = e.getBattleConfigSetting()) && t.writeMessage(14, o, n.BattleConfigSetting.serializeBinaryToWriter), o = e.getDurationTime(), 0 !== parseInt(o, 10) && t.writeInt64String(15, o), 0 !== (o = e.getMultiPkMode()) && t.writeEnum(16, o)
        }, proto.webcast.im.BattleInviteMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleInviteMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleInviteMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleInviteMessage.prototype.getInviteType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.BattleInviteMessage.prototype.setInviteType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.BattleInviteMessage.prototype.setChannelId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getSignExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.BattleInviteMessage.prototype.setSignExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getInviteUid = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.BattleInviteMessage.prototype.setInviteUid = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getBattleId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.BattleInviteMessage.prototype.setBattleId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getMultipleAgainPrompts = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.BattleInviteMessage.prototype.setMultipleAgainPrompts = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getPanelTitle = function () {
            return r.Message.getWrapperField(this, n.PanelTitle, 8)
        }, proto.webcast.im.BattleInviteMessage.prototype.setPanelTitle = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.clearPanelTitle = function () {
            return this.setPanelTitle(undefined)
        }, proto.webcast.im.BattleInviteMessage.prototype.hasPanelTitle = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.BattleInviteMessage.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.BattleInviteMessage.prototype.setScene = function (e) {
            return r.Message.setProto3EnumField(this, 9, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getInviteTitle = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.BattleInviteMessage.prototype.setInviteTitle = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getInviteSubTitle = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        }, proto.webcast.im.BattleInviteMessage.prototype.setInviteSubTitle = function (e) {
            return r.Message.setProto3StringField(this, 11, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getWaitSec = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.BattleInviteMessage.prototype.setWaitSec = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getBattleConfigSetting = function () {
            return r.Message.getWrapperField(this, n.BattleConfigSetting, 14)
        }, proto.webcast.im.BattleInviteMessage.prototype.setBattleConfigSetting = function (e) {
            return r.Message.setWrapperField(this, 14, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.clearBattleConfigSetting = function () {
            return this.setBattleConfigSetting(undefined)
        }, proto.webcast.im.BattleInviteMessage.prototype.hasBattleConfigSetting = function () {
            return null != r.Message.getField(this, 14)
        }, proto.webcast.im.BattleInviteMessage.prototype.getDurationTime = function () {
            return r.Message.getFieldWithDefault(this, 15, "0")
        }, proto.webcast.im.BattleInviteMessage.prototype.setDurationTime = function (e) {
            return r.Message.setProto3StringIntField(this, 15, e)
        }, proto.webcast.im.BattleInviteMessage.prototype.getMultiPkMode = function () {
            return r.Message.getFieldWithDefault(this, 16, 0)
        }, proto.webcast.im.BattleInviteMessage.prototype.setMultiPkMode = function (e) {
            return r.Message.setProto3EnumField(this, 16, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 18534: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BattleModeMessage", null, i), s.exportSymbol("proto.webcast.im.BattleModeMessage.StealTowerData", null, i), proto.webcast.im.BattleModeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleModeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleModeMessage.displayName = "proto.webcast.im.BattleModeMessage"), proto.webcast.im.BattleModeMessage.StealTowerData = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleModeMessage.StealTowerData, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleModeMessage.StealTowerData.displayName = "proto.webcast.im.BattleModeMessage.StealTowerData"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleModeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleModeMessage.toObject(e, this)
        }, proto.webcast.im.BattleModeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                mode: r.Message.getFieldWithDefault(t, 2, "0"),
                stealTowerData: (o = t.getStealTowerData()) && proto.webcast.im.BattleModeMessage.StealTowerData.toObject(e, o),
                now: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleModeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleModeMessage;
            return proto.webcast.im.BattleModeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleModeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMode(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.BattleModeMessage.StealTowerData;
                        t.readMessage(o, proto.webcast.im.BattleModeMessage.StealTowerData.deserializeBinaryFromReader), e.setStealTowerData(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setNow(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleModeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleModeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleModeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getMode(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getStealTowerData()) && t.writeMessage(3, o, proto.webcast.im.BattleModeMessage.StealTowerData.serializeBinaryToWriter), o = e.getNow(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleModeMessage.StealTowerData.prototype.toObject = function (e) {
            return proto.webcast.im.BattleModeMessage.StealTowerData.toObject(e, this)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.toObject = function (e, t) {
            var o = {
                startTime: r.Message.getFieldWithDefault(t, 1, "0"),
                finishTime: r.Message.getFieldWithDefault(t, 2, "0"),
                duration: r.Message.getFieldWithDefault(t, 3, "0"),
                targetScore: r.Message.getFieldWithDefault(t, 4, "0"),
                attackerId: r.Message.getFieldWithDefault(t, 5, "0"),
                finish: r.Message.getBooleanFieldWithDefault(t, 6, !1),
                win: r.Message.getFieldWithDefault(t, 7, "0"),
                openScore: r.Message.getFieldWithDefault(t, 8, "0"),
                count: r.Message.getFieldWithDefault(t, 9, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.BattleModeMessage.StealTowerData.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleModeMessage.StealTowerData;
            return proto.webcast.im.BattleModeMessage.StealTowerData.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setFinishTime(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setTargetScore(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setAttackerId(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setFinish(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setWin(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setOpenScore(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setCount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleModeMessage.StealTowerData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleModeMessage.StealTowerData.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getFinishTime(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getTargetScore(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getAttackerId(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getFinish()) && t.writeBool(6, o), o = e.getWin(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), o = e.getOpenScore(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), o = e.getCount(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getFinishTime = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setFinishTime = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getTargetScore = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setTargetScore = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getAttackerId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setAttackerId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getFinish = function () {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setFinish = function (e) {
            return r.Message.setProto3BooleanField(this, 6, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getWin = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setWin = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getOpenScore = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setOpenScore = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.im.BattleModeMessage.StealTowerData.prototype.setCount = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        }, proto.webcast.im.BattleModeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleModeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleModeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleModeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleModeMessage.prototype.getMode = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BattleModeMessage.prototype.setMode = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.BattleModeMessage.prototype.getStealTowerData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.BattleModeMessage.StealTowerData, 3)
        }, proto.webcast.im.BattleModeMessage.prototype.setStealTowerData = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.BattleModeMessage.prototype.clearStealTowerData = function () {
            return this.setStealTowerData(undefined)
        }, proto.webcast.im.BattleModeMessage.prototype.hasStealTowerData = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.BattleModeMessage.prototype.getNow = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.BattleModeMessage.prototype.setNow = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 79939: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BattleNotifyMessage", null, i), s.exportSymbol("proto.webcast.im.BattleNotifyMessage.BattleNotifyType", null, i), proto.webcast.im.BattleNotifyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleNotifyMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleNotifyMessage.displayName = "proto.webcast.im.BattleNotifyMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleNotifyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleNotifyMessage.toObject(e, this)
        }, proto.webcast.im.BattleNotifyMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 2, ""),
                notifyType: r.Message.getFieldWithDefault(t, 3, 0),
                continueSeconds: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleNotifyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleNotifyMessage;
            return proto.webcast.im.BattleNotifyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleNotifyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setNotifyType(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setContinueSeconds(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleNotifyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleNotifyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleNotifyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), 0 !== (o = e.getNotifyType()) && t.writeEnum(3, o), o = e.getContinueSeconds(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.BattleNotifyMessage.BattleNotifyType = {
            TYPEUNDEFINED: 0,
            TYPESTARACTIVITY: 1
        }, proto.webcast.im.BattleNotifyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleNotifyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleNotifyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleNotifyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleNotifyMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.BattleNotifyMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.BattleNotifyMessage.prototype.getNotifyType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.BattleNotifyMessage.prototype.setNotifyType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.BattleNotifyMessage.prototype.getContinueSeconds = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.BattleNotifyMessage.prototype.setContinueSeconds = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 86647: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(70561);
        s.object.extend(proto, a);
        var n = o(57561);
        s.object.extend(proto, n);
        var c = o(50684);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.BattlePrecisionMatchMessage", null, i), s.exportSymbol("proto.webcast.im.PrecisionMatch", null, i), s.exportSymbol("proto.webcast.im.PrecisionMatch.Matcher", null, i), s.exportSymbol("proto.webcast.im.PrecisionMatch.Status", null, i), proto.webcast.im.PrecisionMatch = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.PrecisionMatch.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.PrecisionMatch, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.PrecisionMatch.displayName = "proto.webcast.im.PrecisionMatch"), proto.webcast.im.PrecisionMatch.Matcher = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.PrecisionMatch.Matcher.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.PrecisionMatch.Matcher, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.PrecisionMatch.Matcher.displayName = "proto.webcast.im.PrecisionMatch.Matcher"), proto.webcast.im.BattlePrecisionMatchMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattlePrecisionMatchMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattlePrecisionMatchMessage.displayName = "proto.webcast.im.BattlePrecisionMatchMessage"), proto.webcast.im.PrecisionMatch.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PrecisionMatch.prototype.toObject = function (e) {
            return proto.webcast.im.PrecisionMatch.toObject(e, this)
        }, proto.webcast.im.PrecisionMatch.toObject = function (e, t) {
            var o = {
                sponsorId: r.Message.getFieldWithDefault(t, 1, "0"),
                matchersList: r.Message.toObjectList(t.getMatchersList(), proto.webcast.im.PrecisionMatch.Matcher.toObject, e),
                matchReason: r.Message.getFieldWithDefault(t, 3, ""),
                waitSeconds: r.Message.getFieldWithDefault(t, 4, "0"),
                precisionMatchId: r.Message.getFieldWithDefault(t, 5, "0"),
                activityName: r.Message.getFieldWithDefault(t, 6, ""),
                recommendReason: r.Message.getFieldWithDefault(t, 7, ""),
                source: r.Message.getFieldWithDefault(t, 9, 0),
                notDisturbText: r.Message.getFieldWithDefault(t, 10, ""),
                flexActivityId: r.Message.getFieldWithDefault(t, 11, "0"),
                duration: r.Message.getFieldWithDefault(t, 12, "0"),
                signExtra: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.PrecisionMatch.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.PrecisionMatch;
            return proto.webcast.im.PrecisionMatch.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.PrecisionMatch.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setSponsorId(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.PrecisionMatch.Matcher;
                        t.readMessage(o, proto.webcast.im.PrecisionMatch.Matcher.deserializeBinaryFromReader), e.addMatchers(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setMatchReason(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setWaitSeconds(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setPrecisionMatchId(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setActivityName(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setRecommendReason(o);
                        break;
                    case 9:
                        o = t.readEnum();
                        e.setSource(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setNotDisturbText(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setFlexActivityId(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setSignExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PrecisionMatch.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PrecisionMatch.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PrecisionMatch.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getSponsorId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getMatchersList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.PrecisionMatch.Matcher.serializeBinaryToWriter), (o = e.getMatchReason()).length > 0 && t.writeString(3, o), o = e.getWaitSeconds(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getPrecisionMatchId(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getActivityName()).length > 0 && t.writeString(6, o), (o = e.getRecommendReason()).length > 0 && t.writeString(7, o), 0 !== (o = e.getSource()) && t.writeEnum(9, o), (o = e.getNotDisturbText()).length > 0 && t.writeString(10, o), o = e.getFlexActivityId(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), (o = e.getSignExtra()).length > 0 && t.writeString(8, o)
        }, proto.webcast.im.PrecisionMatch.Status = {
            STATUSUNDEFINED: 0,
            STATUSNOTREADY: 1,
            STATUSREADY: 2,
            STATUSREJECTED: 3
        }, proto.webcast.im.PrecisionMatch.Matcher.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PrecisionMatch.Matcher.prototype.toObject = function (e) {
            return proto.webcast.im.PrecisionMatch.Matcher.toObject(e, this)
        }, proto.webcast.im.PrecisionMatch.Matcher.toObject = function (e, t) {
            var o, s = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                room: (o = t.getRoom()) && n.Room.toObject(e, o),
                status: r.Message.getFieldWithDefault(t, 3, 0),
                tagsList: r.Message.toObjectList(t.getTagsList(), a.BattleRivalTag.toObject, e),
                descText: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.PrecisionMatch.Matcher.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.PrecisionMatch.Matcher;
            return proto.webcast.im.PrecisionMatch.Matcher.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.PrecisionMatch.Matcher.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 2:
                        o = new n.Room;
                        t.readMessage(o, n.Room.deserializeBinaryFromReader), e.setRoom(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 4:
                        o = new a.BattleRivalTag;
                        t.readMessage(o, a.BattleRivalTag.deserializeBinaryFromReader), e.addTags(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDescText(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PrecisionMatch.Matcher.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PrecisionMatch.Matcher.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), null != (o = e.getRoom()) && t.writeMessage(2, o, n.Room.serializeBinaryToWriter), 0 !== (o = e.getStatus()) && t.writeEnum(3, o), (o = e.getTagsList()).length > 0 && t.writeRepeatedMessage(4, o, a.BattleRivalTag.serializeBinaryToWriter), (o = e.getDescText()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.getRoom = function () {
            return r.Message.getWrapperField(this, n.Room, 2)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.setRoom = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.clearRoom = function () {
            return this.setRoom(undefined)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.hasRoom = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.getTagsList = function () {
            return r.Message.getRepeatedWrapperField(this, a.BattleRivalTag, 4)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.setTagsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.addTags = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.BattleRivalTag, t)
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.clearTagsList = function () {
            return this.setTagsList([])
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.getDescText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.PrecisionMatch.Matcher.prototype.setDescText = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getSponsorId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.PrecisionMatch.prototype.setSponsorId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getMatchersList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.PrecisionMatch.Matcher, 2)
        }, proto.webcast.im.PrecisionMatch.prototype.setMatchersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.PrecisionMatch.prototype.addMatchers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.PrecisionMatch.Matcher, t)
        }, proto.webcast.im.PrecisionMatch.prototype.clearMatchersList = function () {
            return this.setMatchersList([])
        }, proto.webcast.im.PrecisionMatch.prototype.getMatchReason = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.PrecisionMatch.prototype.setMatchReason = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getWaitSeconds = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.PrecisionMatch.prototype.setWaitSeconds = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getPrecisionMatchId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.PrecisionMatch.prototype.setPrecisionMatchId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getActivityName = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.PrecisionMatch.prototype.setActivityName = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getRecommendReason = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.PrecisionMatch.prototype.setRecommendReason = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.PrecisionMatch.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 9, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getNotDisturbText = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.PrecisionMatch.prototype.setNotDisturbText = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getFlexActivityId = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.PrecisionMatch.prototype.setFlexActivityId = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.PrecisionMatch.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, proto.webcast.im.PrecisionMatch.prototype.getSignExtra = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.PrecisionMatch.prototype.setSignExtra = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattlePrecisionMatchMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattlePrecisionMatchMessage.toObject(e, this)
        }, proto.webcast.im.BattlePrecisionMatchMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                precisionMatch: (o = t.getPrecisionMatch()) && proto.webcast.im.PrecisionMatch.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.BattlePrecisionMatchMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattlePrecisionMatchMessage;
            return proto.webcast.im.BattlePrecisionMatchMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattlePrecisionMatchMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.PrecisionMatch;
                        t.readMessage(o, proto.webcast.im.PrecisionMatch.deserializeBinaryFromReader), e.setPrecisionMatch(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattlePrecisionMatchMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattlePrecisionMatchMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), null != (o = e.getPrecisionMatch()) && t.writeMessage(2, o, proto.webcast.im.PrecisionMatch.serializeBinaryToWriter)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.getPrecisionMatch = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.PrecisionMatch, 2)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.setPrecisionMatch = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.clearPrecisionMatch = function () {
            return this.setPrecisionMatch(undefined)
        }, proto.webcast.im.BattlePrecisionMatchMessage.prototype.hasPrecisionMatch = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 64224: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(70561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.BattleRejectMessage", null, i), proto.webcast.im.BattleRejectMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleRejectMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleRejectMessage.displayName = "proto.webcast.im.BattleRejectMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleRejectMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleRejectMessage.toObject(e, this)
        }, proto.webcast.im.BattleRejectMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                channelId: r.Message.getFieldWithDefault(t, 2, "0"),
                battleId: r.Message.getFieldWithDefault(t, 3, "0"),
                rejectUid: r.Message.getFieldWithDefault(t, 4, "0"),
                multipleAgainPrompts: r.Message.getFieldWithDefault(t, 5, ""),
                inviteType: r.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleRejectMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleRejectMessage;
            return proto.webcast.im.BattleRejectMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleRejectMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setChannelId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setBattleId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setRejectUid(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setMultipleAgainPrompts(o);
                        break;
                    case 6:
                        o = t.readEnum();
                        e.setInviteType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleRejectMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleRejectMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleRejectMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getChannelId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getBattleId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getRejectUid(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getMultipleAgainPrompts()).length > 0 && t.writeString(5, o), 0 !== (o = e.getInviteType()) && t.writeEnum(6, o)
        }, proto.webcast.im.BattleRejectMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleRejectMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleRejectMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleRejectMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleRejectMessage.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BattleRejectMessage.prototype.setChannelId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.BattleRejectMessage.prototype.getBattleId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.BattleRejectMessage.prototype.setBattleId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.BattleRejectMessage.prototype.getRejectUid = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.BattleRejectMessage.prototype.setRejectUid = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.BattleRejectMessage.prototype.getMultipleAgainPrompts = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.BattleRejectMessage.prototype.setMultipleAgainPrompts = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.BattleRejectMessage.prototype.getInviteType = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.BattleRejectMessage.prototype.setInviteType = function (e) {
            return r.Message.setProto3EnumField(this, 6, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 20997: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BattleTeamTaskAskMessage", null, i), proto.webcast.im.BattleTeamTaskAskMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleTeamTaskAskMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleTeamTaskAskMessage.displayName = "proto.webcast.im.BattleTeamTaskAskMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleTeamTaskAskMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleTeamTaskAskMessage.toObject(e, this)
        }, proto.webcast.im.BattleTeamTaskAskMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                teamTaskJson: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleTeamTaskAskMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleTeamTaskAskMessage;
            return proto.webcast.im.BattleTeamTaskAskMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleTeamTaskAskMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setTeamTaskJson(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleTeamTaskAskMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleTeamTaskAskMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getTeamTaskJson()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.getTeamTaskJson = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.BattleTeamTaskAskMessage.prototype.setTeamTaskJson = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 13101: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(70561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.BattleTeamTaskMessage", null, i), proto.webcast.im.BattleTeamTaskMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleTeamTaskMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleTeamTaskMessage.displayName = "proto.webcast.im.BattleTeamTaskMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleTeamTaskMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleTeamTaskMessage.toObject(e, this)
        }, proto.webcast.im.BattleTeamTaskMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                teamTask: (o = t.getTeamTask()) && n.TeamTask.toObject(e, o),
                teamTaskJson: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleTeamTaskMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleTeamTaskMessage;
            return proto.webcast.im.BattleTeamTaskMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleTeamTaskMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.TeamTask;
                        t.readMessage(o, n.TeamTask.deserializeBinaryFromReader), e.setTeamTask(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTeamTaskJson(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleTeamTaskMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleTeamTaskMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getTeamTask()) && t.writeMessage(2, o, n.TeamTask.serializeBinaryToWriter), (o = e.getTeamTaskJson()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.getTeamTask = function () {
            return r.Message.getWrapperField(this, n.TeamTask, 2)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.setTeamTask = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.clearTeamTask = function () {
            return this.setTeamTask(undefined)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.hasTeamTask = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.getTeamTaskJson = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.BattleTeamTaskMessage.prototype.setTeamTaskJson = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 83247: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(70561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.BattleUseCardMessage", null, i), proto.webcast.im.BattleUseCardMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BattleUseCardMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BattleUseCardMessage.displayName = "proto.webcast.im.BattleUseCardMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleUseCardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleUseCardMessage.toObject(e, this)
        }, proto.webcast.im.BattleUseCardMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                info: (o = t.getInfo()) && n.ItemCardInfo.toObject(e, o),
                extra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BattleUseCardMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleUseCardMessage;
            return proto.webcast.im.BattleUseCardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleUseCardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.ItemCardInfo;
                        t.readMessage(o, n.ItemCardInfo.deserializeBinaryFromReader), e.setInfo(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleUseCardMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleUseCardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleUseCardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getInfo()) && t.writeMessage(2, o, n.ItemCardInfo.serializeBinaryToWriter), (o = e.getExtra()).length > 0 && t.writeString(4, o)
        }, proto.webcast.im.BattleUseCardMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BattleUseCardMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleUseCardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleUseCardMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleUseCardMessage.prototype.getInfo = function () {
            return r.Message.getWrapperField(this, n.ItemCardInfo, 2)
        }, proto.webcast.im.BattleUseCardMessage.prototype.setInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.BattleUseCardMessage.prototype.clearInfo = function () {
            return this.setInfo(undefined)
        }, proto.webcast.im.BattleUseCardMessage.prototype.hasInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.BattleUseCardMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.BattleUseCardMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 22836: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BeginnerGuideFeatureType", null, i), s.exportSymbol("proto.webcast.im.BeginnerGuideMessage", null, i), proto.webcast.im.BeginnerGuideMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BeginnerGuideMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BeginnerGuideMessage.displayName = "proto.webcast.im.BeginnerGuideMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BeginnerGuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BeginnerGuideMessage.toObject(e, this)
        }, proto.webcast.im.BeginnerGuideMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                messageType: r.Message.getFieldWithDefault(t, 2, 0),
                prompts: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BeginnerGuideMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BeginnerGuideMessage;
            return proto.webcast.im.BeginnerGuideMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BeginnerGuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMessageType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setPrompts(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BeginnerGuideMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BeginnerGuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BeginnerGuideMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getMessageType()) && t.writeEnum(2, o), (o = e.getPrompts()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.BeginnerGuideMessage.prototype.getPrompts = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.BeginnerGuideMessage.prototype.setPrompts = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.BeginnerGuideFeatureType = {
            GUIDEUNDEFINED: 0,
            CHIJI: 1
        }, s.object.extend(t, proto.webcast.im)
    }, 59679: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.InitLinkmicContent", null, i), s.exportSymbol("proto.webcast.im.KtvMode", null, i), s.exportSymbol("proto.webcast.im.LinkmicBigEventMessage", null, i), s.exportSymbol("proto.webcast.im.LinkmicBigEventMessage.ContentCase", null, i), s.exportSymbol("proto.webcast.im.MsgType", null, i), s.exportSymbol("proto.webcast.im.SwitchEarphoneMonitorContent", null, i), s.exportSymbol("proto.webcast.im.SwitchFullSongStatusContent", null, i), s.exportSymbol("proto.webcast.im.SwitchKtvModeContent", null, i), s.exportSymbol("proto.webcast.im.SwitchLyricStatusContent", null, i), s.exportSymbol("proto.webcast.im.SwitchSceneContent", null, i), s.exportSymbol("proto.webcast.im.SwitchTuningEffectContent", null, i), s.exportSymbol("proto.webcast.im.TargetMode", null, i), s.exportSymbol("proto.webcast.im.ToStatus", null, i), proto.webcast.im.LinkmicBigEventMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_)
        }, s.inherits(proto.webcast.im.LinkmicBigEventMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.LinkmicBigEventMessage.displayName = "proto.webcast.im.LinkmicBigEventMessage"), proto.webcast.im.InitLinkmicContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.InitLinkmicContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InitLinkmicContent.displayName = "proto.webcast.im.InitLinkmicContent"), proto.webcast.im.SwitchSceneContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.SwitchSceneContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.SwitchSceneContent.displayName = "proto.webcast.im.SwitchSceneContent"), proto.webcast.im.SwitchEarphoneMonitorContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.SwitchEarphoneMonitorContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.SwitchEarphoneMonitorContent.displayName = "proto.webcast.im.SwitchEarphoneMonitorContent"), proto.webcast.im.SwitchKtvModeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.SwitchKtvModeContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.SwitchKtvModeContent.displayName = "proto.webcast.im.SwitchKtvModeContent"), proto.webcast.im.SwitchLyricStatusContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.SwitchLyricStatusContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.SwitchLyricStatusContent.displayName = "proto.webcast.im.SwitchLyricStatusContent"), proto.webcast.im.SwitchFullSongStatusContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.SwitchFullSongStatusContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.SwitchFullSongStatusContent.displayName = "proto.webcast.im.SwitchFullSongStatusContent"), proto.webcast.im.SwitchTuningEffectContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.SwitchTuningEffectContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.SwitchTuningEffectContent.displayName = "proto.webcast.im.SwitchTuningEffectContent"), proto.webcast.im.LinkmicBigEventMessage.oneofGroups_ = [[3, 4, 5, 6, 7, 8, 9]], proto.webcast.im.LinkmicBigEventMessage.ContentCase = {
            CONTENT_NOT_SET: 0,
            INIT_LINKMIC_CONTENT: 3,
            SWITCH_SCENE_CONTENT: 4,
            SWITCH_EARPHONE_MONITOR_CONTENT: 5,
            SWITCH_KTV_MODE_CONTENT: 6,
            SWITCH_LYRIC_STATUS_CONTENT: 7,
            SWITCH_FULL_SONG_STATUS_CONTENT: 8,
            SWITCH_TUNING_EFFECT_CONTENT: 9
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getContentCase = function () {
            return r.Message.computeOneofCase(this, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicBigEventMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicBigEventMessage.toObject(e, this)
        }, proto.webcast.im.LinkmicBigEventMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                initLinkmicContent: (o = t.getInitLinkmicContent()) && proto.webcast.im.InitLinkmicContent.toObject(e, o),
                switchSceneContent: (o = t.getSwitchSceneContent()) && proto.webcast.im.SwitchSceneContent.toObject(e, o),
                switchEarphoneMonitorContent: (o = t.getSwitchEarphoneMonitorContent()) && proto.webcast.im.SwitchEarphoneMonitorContent.toObject(e, o),
                switchKtvModeContent: (o = t.getSwitchKtvModeContent()) && proto.webcast.im.SwitchKtvModeContent.toObject(e, o),
                switchLyricStatusContent: (o = t.getSwitchLyricStatusContent()) && proto.webcast.im.SwitchLyricStatusContent.toObject(e, o),
                switchFullSongStatusContent: (o = t.getSwitchFullSongStatusContent()) && proto.webcast.im.SwitchFullSongStatusContent.toObject(e, o),
                switchTuningEffectContent: (o = t.getSwitchTuningEffectContent()) && proto.webcast.im.SwitchTuningEffectContent.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.LinkmicBigEventMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicBigEventMessage;
            return proto.webcast.im.LinkmicBigEventMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicBigEventMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMsgType(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.InitLinkmicContent;
                        t.readMessage(o, proto.webcast.im.InitLinkmicContent.deserializeBinaryFromReader), e.setInitLinkmicContent(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.SwitchSceneContent;
                        t.readMessage(o, proto.webcast.im.SwitchSceneContent.deserializeBinaryFromReader), e.setSwitchSceneContent(o);
                        break;
                    case 5:
                        o = new proto.webcast.im.SwitchEarphoneMonitorContent;
                        t.readMessage(o, proto.webcast.im.SwitchEarphoneMonitorContent.deserializeBinaryFromReader), e.setSwitchEarphoneMonitorContent(o);
                        break;
                    case 6:
                        o = new proto.webcast.im.SwitchKtvModeContent;
                        t.readMessage(o, proto.webcast.im.SwitchKtvModeContent.deserializeBinaryFromReader), e.setSwitchKtvModeContent(o);
                        break;
                    case 7:
                        o = new proto.webcast.im.SwitchLyricStatusContent;
                        t.readMessage(o, proto.webcast.im.SwitchLyricStatusContent.deserializeBinaryFromReader), e.setSwitchLyricStatusContent(o);
                        break;
                    case 8:
                        o = new proto.webcast.im.SwitchFullSongStatusContent;
                        t.readMessage(o, proto.webcast.im.SwitchFullSongStatusContent.deserializeBinaryFromReader), e.setSwitchFullSongStatusContent(o);
                        break;
                    case 9:
                        o = new proto.webcast.im.SwitchTuningEffectContent;
                        t.readMessage(o, proto.webcast.im.SwitchTuningEffectContent.deserializeBinaryFromReader), e.setSwitchTuningEffectContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicBigEventMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicBigEventMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), null != (o = e.getInitLinkmicContent()) && t.writeMessage(3, o, proto.webcast.im.InitLinkmicContent.serializeBinaryToWriter), null != (o = e.getSwitchSceneContent()) && t.writeMessage(4, o, proto.webcast.im.SwitchSceneContent.serializeBinaryToWriter), null != (o = e.getSwitchEarphoneMonitorContent()) && t.writeMessage(5, o, proto.webcast.im.SwitchEarphoneMonitorContent.serializeBinaryToWriter), null != (o = e.getSwitchKtvModeContent()) && t.writeMessage(6, o, proto.webcast.im.SwitchKtvModeContent.serializeBinaryToWriter), null != (o = e.getSwitchLyricStatusContent()) && t.writeMessage(7, o, proto.webcast.im.SwitchLyricStatusContent.serializeBinaryToWriter), null != (o = e.getSwitchFullSongStatusContent()) && t.writeMessage(8, o, proto.webcast.im.SwitchFullSongStatusContent.serializeBinaryToWriter), null != (o = e.getSwitchTuningEffectContent()) && t.writeMessage(9, o, proto.webcast.im.SwitchTuningEffectContent.serializeBinaryToWriter)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getInitLinkmicContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.InitLinkmicContent, 3)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setInitLinkmicContent = function (e) {
            return r.Message.setOneofWrapperField(this, 3, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearInitLinkmicContent = function () {
            return this.setInitLinkmicContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasInitLinkmicContent = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getSwitchSceneContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.SwitchSceneContent, 4)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setSwitchSceneContent = function (e) {
            return r.Message.setOneofWrapperField(this, 4, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearSwitchSceneContent = function () {
            return this.setSwitchSceneContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasSwitchSceneContent = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getSwitchEarphoneMonitorContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.SwitchEarphoneMonitorContent, 5)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setSwitchEarphoneMonitorContent = function (e) {
            return r.Message.setOneofWrapperField(this, 5, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearSwitchEarphoneMonitorContent = function () {
            return this.setSwitchEarphoneMonitorContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasSwitchEarphoneMonitorContent = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getSwitchKtvModeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.SwitchKtvModeContent, 6)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setSwitchKtvModeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 6, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearSwitchKtvModeContent = function () {
            return this.setSwitchKtvModeContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasSwitchKtvModeContent = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getSwitchLyricStatusContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.SwitchLyricStatusContent, 7)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setSwitchLyricStatusContent = function (e) {
            return r.Message.setOneofWrapperField(this, 7, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearSwitchLyricStatusContent = function () {
            return this.setSwitchLyricStatusContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasSwitchLyricStatusContent = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getSwitchFullSongStatusContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.SwitchFullSongStatusContent, 8)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setSwitchFullSongStatusContent = function (e) {
            return r.Message.setOneofWrapperField(this, 8, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearSwitchFullSongStatusContent = function () {
            return this.setSwitchFullSongStatusContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasSwitchFullSongStatusContent = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.getSwitchTuningEffectContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.SwitchTuningEffectContent, 9)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.setSwitchTuningEffectContent = function (e) {
            return r.Message.setOneofWrapperField(this, 9, proto.webcast.im.LinkmicBigEventMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.clearSwitchTuningEffectContent = function () {
            return this.setSwitchTuningEffectContent(undefined)
        }, proto.webcast.im.LinkmicBigEventMessage.prototype.hasSwitchTuningEffectContent = function () {
            return null != r.Message.getField(this, 9)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InitLinkmicContent.prototype.toObject = function (e) {
            return proto.webcast.im.InitLinkmicContent.toObject(e, this)
        }, proto.webcast.im.InitLinkmicContent.toObject = function (e, t) {
            var o = {targetMode: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.InitLinkmicContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InitLinkmicContent;
            return proto.webcast.im.InitLinkmicContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InitLinkmicContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setTargetMode(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.InitLinkmicContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InitLinkmicContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InitLinkmicContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getTargetMode()) && t.writeEnum(1, o)
        }, proto.webcast.im.InitLinkmicContent.prototype.getTargetMode = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.InitLinkmicContent.prototype.setTargetMode = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SwitchSceneContent.prototype.toObject = function (e) {
            return proto.webcast.im.SwitchSceneContent.toObject(e, this)
        }, proto.webcast.im.SwitchSceneContent.toObject = function (e, t) {
            var o = {targetMode: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.SwitchSceneContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SwitchSceneContent;
            return proto.webcast.im.SwitchSceneContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SwitchSceneContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setTargetMode(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.SwitchSceneContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SwitchSceneContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SwitchSceneContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getTargetMode()) && t.writeEnum(1, o)
        }, proto.webcast.im.SwitchSceneContent.prototype.getTargetMode = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.SwitchSceneContent.prototype.setTargetMode = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SwitchEarphoneMonitorContent.prototype.toObject = function (e) {
            return proto.webcast.im.SwitchEarphoneMonitorContent.toObject(e, this)
        }, proto.webcast.im.SwitchEarphoneMonitorContent.toObject = function (e, t) {
            var o = {toStatus: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.SwitchEarphoneMonitorContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SwitchEarphoneMonitorContent;
            return proto.webcast.im.SwitchEarphoneMonitorContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SwitchEarphoneMonitorContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setToStatus(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.SwitchEarphoneMonitorContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SwitchEarphoneMonitorContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SwitchEarphoneMonitorContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getToStatus()) && t.writeEnum(1, o)
        }, proto.webcast.im.SwitchEarphoneMonitorContent.prototype.getToStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.SwitchEarphoneMonitorContent.prototype.setToStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SwitchKtvModeContent.prototype.toObject = function (e) {
            return proto.webcast.im.SwitchKtvModeContent.toObject(e, this)
        }, proto.webcast.im.SwitchKtvModeContent.toObject = function (e, t) {
            var o = {ktvMode: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.SwitchKtvModeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SwitchKtvModeContent;
            return proto.webcast.im.SwitchKtvModeContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.SwitchKtvModeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setKtvMode(o)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.SwitchKtvModeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SwitchKtvModeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.SwitchKtvModeContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getKtvMode()) && t.writeEnum(1, o)
        },proto.webcast.im.SwitchKtvModeContent.prototype.getKtvMode = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.SwitchKtvModeContent.prototype.setKtvMode = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SwitchLyricStatusContent.prototype.toObject = function (e) {
            return proto.webcast.im.SwitchLyricStatusContent.toObject(e, this)
        }, proto.webcast.im.SwitchLyricStatusContent.toObject = function (e, t) {
            var o = {toStatus: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.SwitchLyricStatusContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SwitchLyricStatusContent;
            return proto.webcast.im.SwitchLyricStatusContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.SwitchLyricStatusContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setToStatus(o)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.SwitchLyricStatusContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SwitchLyricStatusContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.SwitchLyricStatusContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getToStatus()) && t.writeEnum(1, o)
        },proto.webcast.im.SwitchLyricStatusContent.prototype.getToStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.SwitchLyricStatusContent.prototype.setToStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SwitchFullSongStatusContent.prototype.toObject = function (e) {
            return proto.webcast.im.SwitchFullSongStatusContent.toObject(e, this)
        }, proto.webcast.im.SwitchFullSongStatusContent.toObject = function (e, t) {
            var o = {toStatus: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.SwitchFullSongStatusContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SwitchFullSongStatusContent;
            return proto.webcast.im.SwitchFullSongStatusContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.SwitchFullSongStatusContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setToStatus(o)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.SwitchFullSongStatusContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SwitchFullSongStatusContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.SwitchFullSongStatusContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getToStatus()) && t.writeEnum(1, o)
        },proto.webcast.im.SwitchFullSongStatusContent.prototype.getToStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.SwitchFullSongStatusContent.prototype.setToStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SwitchTuningEffectContent.prototype.toObject = function (e) {
            return proto.webcast.im.SwitchTuningEffectContent.toObject(e, this)
        }, proto.webcast.im.SwitchTuningEffectContent.toObject = function (e, t) {
            var o = {toEffectName: r.Message.getFieldWithDefault(t, 1, "")};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.SwitchTuningEffectContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SwitchTuningEffectContent;
            return proto.webcast.im.SwitchTuningEffectContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.SwitchTuningEffectContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setToEffectName(o)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.SwitchTuningEffectContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SwitchTuningEffectContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.SwitchTuningEffectContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getToEffectName()).length > 0 && t.writeString(1, o)
        },proto.webcast.im.SwitchTuningEffectContent.prototype.getToEffectName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.SwitchTuningEffectContent.prototype.setToEffectName = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.MsgType = {
            UNKNOWNTYPE: 0,
            INITLINKMIC: 1,
            FINISHLINKMIC: 2,
            SWITCHSCENE: 3,
            SWITCHEARPHONEMONITOR: 4,
            SWITCHKTVMODE: 5,
            SWITCHLYRICSTATUS: 6,
            SWITCHFULLSONGSTATUS: 7,
            SWITCHTUNINGEFFECT: 8
        },proto.webcast.im.TargetMode = {
            UNKNOWNMODE: 0,
            CLASSICBIGPARTY: 1,
            EQUALBIGPARTY: 2,
            DYNAMICEQUALBIGPARTY: 3,
            AUDIOKTV: 4,
            VIDEOKTV: 5,
            PK: 6,
            ANCHORLINKMIC: 7,
            VIRUTALPK: 8,
            AUDIENCELINKMIC: 9,
            AUDIOCHATROOM: 10,
            CLOUDGAME: 11,
            ANCHORMULTILINKMIC: 12,
            SHAREVIDEO: 13,
            SHAREKTV: 14,
            EQUALAUDIOCHATROOM: 15,
            DYNAMIC1V6BIGPARTY: 16
        },proto.webcast.im.ToStatus = {UNKNOWNSWITCH: 0, ON: 1, OFF: 2},proto.webcast.im.KtvMode = {
            KTVMODE_NONE: 0,
            KTVMODE_ANCHORKTV: 1,
            KTVMODE_BGMKTV: 2,
            KTVMODE_VIDEOKTV: 3
        },s.object.extend(t, proto.webcast.im)
    }, 32902: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BridgeData", null, i), s.exportSymbol("proto.webcast.im.BridgeMessage", null, i), proto.webcast.im.BridgeData = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BridgeData, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BridgeData.displayName = "proto.webcast.im.BridgeData"), proto.webcast.im.BridgeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BridgeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BridgeMessage.displayName = "proto.webcast.im.BridgeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BridgeData.prototype.toObject = function (e) {
            return proto.webcast.im.BridgeData.toObject(e, this)
        }, proto.webcast.im.BridgeData.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                bridgeMessageJson: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BridgeData.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BridgeData;
            return proto.webcast.im.BridgeData.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BridgeData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setBridgeMessageJson(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BridgeData.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BridgeData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BridgeData.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getBridgeMessageJson()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.BridgeData.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BridgeData.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BridgeData.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BridgeData.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BridgeData.prototype.getBridgeMessageJson = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.BridgeData.prototype.setBridgeMessageJson = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BridgeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BridgeMessage.toObject(e, this)
        }, proto.webcast.im.BridgeMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                bridge: (o = t.getBridge()) && proto.webcast.im.BridgeData.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.BridgeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BridgeMessage;
            return proto.webcast.im.BridgeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BridgeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.BridgeData;
                        t.readMessage(o, proto.webcast.im.BridgeData.deserializeBinaryFromReader), e.setBridge(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BridgeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BridgeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BridgeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getBridge()) && t.writeMessage(2, o, proto.webcast.im.BridgeData.serializeBinaryToWriter)
        }, proto.webcast.im.BridgeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BridgeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BridgeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BridgeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BridgeMessage.prototype.getBridge = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.BridgeData, 2)
        }, proto.webcast.im.BridgeMessage.prototype.setBridge = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.BridgeMessage.prototype.clearBridge = function () {
            return this.setBridge(undefined)
        }, proto.webcast.im.BridgeMessage.prototype.hasBridge = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 73545: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.BrotherhoodMessage", null, i), proto.webcast.im.BrotherhoodMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BrotherhoodMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BrotherhoodMessage.displayName = "proto.webcast.im.BrotherhoodMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BrotherhoodMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BrotherhoodMessage.toObject(e, this)
        }, proto.webcast.im.BrotherhoodMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BrotherhoodMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BrotherhoodMessage;
            return proto.webcast.im.BrotherhoodMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BrotherhoodMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BrotherhoodMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BrotherhoodMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BrotherhoodMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.BrotherhoodMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.BrotherhoodMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BrotherhoodMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BrotherhoodMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BrotherhoodMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.BrotherhoodMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 2592: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CarBallShowMessage", null, i), proto.webcast.im.CarBallShowMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CarBallShowMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CarBallShowMessage.displayName = "proto.webcast.im.CarBallShowMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CarBallShowMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CarBallShowMessage.toObject(e, this)
        }, proto.webcast.im.CarBallShowMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                isShow: r.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CarBallShowMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CarBallShowMessage;
            return proto.webcast.im.CarBallShowMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CarBallShowMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setIsShow(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CarBallShowMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CarBallShowMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CarBallShowMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getIsShow()) && t.writeBool(2, o)
        }, proto.webcast.im.CarBallShowMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CarBallShowMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CarBallShowMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CarBallShowMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CarBallShowMessage.prototype.getIsShow = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.CarBallShowMessage.prototype.setIsShow = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 62363: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CarSeriesInfoMessage", null, i), proto.webcast.im.CarSeriesInfoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CarSeriesInfoMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CarSeriesInfoMessage.displayName = "proto.webcast.im.CarSeriesInfoMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CarSeriesInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CarSeriesInfoMessage.toObject(e, this)
        }, proto.webcast.im.CarSeriesInfoMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                actionType: r.Message.getFieldWithDefault(t, 2, "0"),
                seriesId: r.Message.getFieldWithDefault(t, 3, "0"),
                seriesName: r.Message.getFieldWithDefault(t, 4, ""),
                officialPrice: r.Message.getFieldWithDefault(t, 5, ""),
                imageUrl: r.Message.getFieldWithDefault(t, 6, ""),
                openUrl: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CarSeriesInfoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CarSeriesInfoMessage;
            return proto.webcast.im.CarSeriesInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CarSeriesInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setActionType(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setSeriesId(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setSeriesName(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setOfficialPrice(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setImageUrl(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setOpenUrl(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CarSeriesInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CarSeriesInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getActionType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getSeriesId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getSeriesName()).length > 0 && t.writeString(4, o), (o = e.getOfficialPrice()).length > 0 && t.writeString(5, o), (o = e.getImageUrl()).length > 0 && t.writeString(6, o), (o = e.getOpenUrl()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getActionType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setActionType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getSeriesId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setSeriesId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getSeriesName = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setSeriesName = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getOfficialPrice = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setOfficialPrice = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getImageUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setImageUrl = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.getOpenUrl = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.CarSeriesInfoMessage.prototype.setOpenUrl = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 32209: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.CategoryChangeMessage", null, i), proto.webcast.im.CategoryChangeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CategoryChangeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CategoryChangeMessage.displayName = "proto.webcast.im.CategoryChangeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CategoryChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CategoryChangeMessage.toObject(e, this)
        }, proto.webcast.im.CategoryChangeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                categoryId: r.Message.getFieldWithDefault(t, 2, ""),
                categoryName: r.Message.getFieldWithDefault(t, 3, ""),
                challengeId: r.Message.getFieldWithDefault(t, 4, ""),
                challengeName: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CategoryChangeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CategoryChangeMessage;
            return proto.webcast.im.CategoryChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CategoryChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setCategoryId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setCategoryName(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setChallengeId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setChallengeName(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CategoryChangeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CategoryChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CategoryChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getCategoryId()).length > 0 && t.writeString(2, o), (o = e.getCategoryName()).length > 0 && t.writeString(3, o), (o = e.getChallengeId()).length > 0 && t.writeString(4, o), (o = e.getChallengeName()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.CategoryChangeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CategoryChangeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CategoryChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CategoryChangeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CategoryChangeMessage.prototype.getCategoryId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CategoryChangeMessage.prototype.setCategoryId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CategoryChangeMessage.prototype.getCategoryName = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CategoryChangeMessage.prototype.setCategoryName = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CategoryChangeMessage.prototype.getChallengeId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.CategoryChangeMessage.prototype.setChallengeId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.CategoryChangeMessage.prototype.getChallengeName = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.CategoryChangeMessage.prototype.setChallengeName = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 65972: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.ChatCarnivalMessage", null, i), s.exportSymbol("proto.webcast.im.ChatItem", null, i), s.exportSymbol("proto.webcast.im.EggItem", null, i), proto.webcast.im.ChatCarnivalMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.ChatCarnivalMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.ChatCarnivalMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ChatCarnivalMessage.displayName = "proto.webcast.im.ChatCarnivalMessage"), proto.webcast.im.EggItem = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.EggItem, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.EggItem.displayName = "proto.webcast.im.EggItem"), proto.webcast.im.ChatItem = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ChatItem, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ChatItem.displayName = "proto.webcast.im.ChatItem"), proto.webcast.im.ChatCarnivalMessage.repeatedFields_ = [14, 15, 18, 19, 20], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChatCarnivalMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ChatCarnivalMessage.toObject(e, this)
        }, proto.webcast.im.ChatCarnivalMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                notifyType: r.Message.getFieldWithDefault(t, 2, "0"),
                anchorStartTimestamp: r.Message.getFieldWithDefault(t, 3, "0"),
                anchorStartSecond: r.Message.getFieldWithDefault(t, 4, "0"),
                userStartTimestamp: r.Message.getFieldWithDefault(t, 5, "0"),
                userStartSecond: r.Message.getFieldWithDefault(t, 6, "0"),
                duration: r.Message.getFieldWithDefault(t, 7, "0"),
                backgroundColor: r.Message.getFieldWithDefault(t, 8, ""),
                titleImage: (o = t.getTitleImage()) && a.Image.toObject(e, o),
                preContent: r.Message.getFieldWithDefault(t, 10, ""),
                content: r.Message.getFieldWithDefault(t, 11, ""),
                orientations: r.Message.getFieldWithDefault(t, 12, "0"),
                moveSpeed: r.Message.getFieldWithDefault(t, 13, "0"),
                chatStyleList: r.Message.toObjectList(t.getChatStyleList(), proto.webcast.im.ChatItem.toObject, e),
                eggStyleList: r.Message.toObjectList(t.getEggStyleList(), proto.webcast.im.EggItem.toObject, e),
                wordOrientation: r.Message.getFieldWithDefault(t, 16, "0"),
                moveDirection: r.Message.getFieldWithDefault(t, 17, "0"),
                eggShowRangeList: null == (o = r.Message.getRepeatedField(t, 18)) ? undefined : o,
                sizeAndAlphaList: null == (o = r.Message.getRepeatedField(t, 19)) ? undefined : o,
                verticalOffsetList: null == (o = r.Message.getRepeatedField(t, 20)) ? undefined : o,
                path: r.Message.getFieldWithDefault(t, 21, "0"),
                wordColor: r.Message.getFieldWithDefault(t, 22, ""),
                showWebp: r.Message.getFieldWithDefault(t, 23, "0"),
                usePrivilegeRegion: r.Message.getFieldWithDefault(t, 24, "0"),
                canOpenContour: r.Message.getFieldWithDefault(t, 25, "0"),
                supportShowType: r.Message.getFieldWithDefault(t, 26, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ChatCarnivalMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChatCarnivalMessage;
            return proto.webcast.im.ChatCarnivalMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ChatCarnivalMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setNotifyType(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setAnchorStartTimestamp(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setAnchorStartSecond(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setUserStartTimestamp(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setUserStartSecond(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setBackgroundColor(o);
                        break;
                    case 9:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setTitleImage(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setPreContent(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setOrientations(o);
                        break;
                    case 13:
                        o = t.readInt64String();
                        e.setMoveSpeed(o);
                        break;
                    case 14:
                        o = new proto.webcast.im.ChatItem;
                        t.readMessage(o, proto.webcast.im.ChatItem.deserializeBinaryFromReader), e.addChatStyle(o);
                        break;
                    case 15:
                        o = new proto.webcast.im.EggItem;
                        t.readMessage(o, proto.webcast.im.EggItem.deserializeBinaryFromReader), e.addEggStyle(o);
                        break;
                    case 16:
                        o = t.readInt64String();
                        e.setWordOrientation(o);
                        break;
                    case 17:
                        o = t.readInt64String();
                        e.setMoveDirection(o);
                        break;
                    case 18:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < r.length; s++) e.addEggShowRange(r[s]);
                        break;
                    case 19:
                        for (r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < r.length; s++) e.addSizeAndAlpha(r[s]);
                        break;
                    case 20:
                        for (r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < r.length; s++) e.addVerticalOffset(r[s]);
                        break;
                    case 21:
                        o = t.readInt64String();
                        e.setPath(o);
                        break;
                    case 22:
                        o = t.readString();
                        e.setWordColor(o);
                        break;
                    case 23:
                        o = t.readInt64String();
                        e.setShowWebp(o);
                        break;
                    case 24:
                        o = t.readInt64String();
                        e.setUsePrivilegeRegion(o);
                        break;
                    case 25:
                        o = t.readInt64String();
                        e.setCanOpenContour(o);
                        break;
                    case 26:
                        o = t.readInt64String();
                        e.setSupportShowType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ChatCarnivalMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChatCarnivalMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ChatCarnivalMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getNotifyType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getAnchorStartTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getAnchorStartSecond(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getUserStartTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getUserStartSecond(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), (o = e.getBackgroundColor()).length > 0 && t.writeString(8, o), null != (o = e.getTitleImage()) && t.writeMessage(9, o, a.Image.serializeBinaryToWriter), (o = e.getPreContent()).length > 0 && t.writeString(10, o), (o = e.getContent()).length > 0 && t.writeString(11, o), o = e.getOrientations(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), o = e.getMoveSpeed(), 0 !== parseInt(o, 10) && t.writeInt64String(13, o), (o = e.getChatStyleList()).length > 0 && t.writeRepeatedMessage(14, o, proto.webcast.im.ChatItem.serializeBinaryToWriter), (o = e.getEggStyleList()).length > 0 && t.writeRepeatedMessage(15, o, proto.webcast.im.EggItem.serializeBinaryToWriter), o = e.getWordOrientation(), 0 !== parseInt(o, 10) && t.writeInt64String(16, o), o = e.getMoveDirection(), 0 !== parseInt(o, 10) && t.writeInt64String(17, o), (o = e.getEggShowRangeList()).length > 0 && t.writePackedInt64String(18, o), (o = e.getSizeAndAlphaList()).length > 0 && t.writePackedInt64String(19, o), (o = e.getVerticalOffsetList()).length > 0 && t.writePackedInt64String(20, o), o = e.getPath(), 0 !== parseInt(o, 10) && t.writeInt64String(21, o), (o = e.getWordColor()).length > 0 && t.writeString(22, o), o = e.getShowWebp(), 0 !== parseInt(o, 10) && t.writeInt64String(23, o), o = e.getUsePrivilegeRegion(), 0 !== parseInt(o, 10) && t.writeInt64String(24, o), o = e.getCanOpenContour(), 0 !== parseInt(o, 10) && t.writeInt64String(25, o), o = e.getSupportShowType(), 0 !== parseInt(o, 10) && t.writeInt64String(26, o)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getNotifyType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setNotifyType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getAnchorStartTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setAnchorStartTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getAnchorStartSecond = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setAnchorStartSecond = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getUserStartTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setUserStartTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getUserStartSecond = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setUserStartSecond = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getBackgroundColor = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setBackgroundColor = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getTitleImage = function () {
            return r.Message.getWrapperField(this, a.Image, 9)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setTitleImage = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearTitleImage = function () {
            return this.setTitleImage(undefined)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.hasTitleImage = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getPreContent = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setPreContent = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 11, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getOrientations = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setOrientations = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getMoveSpeed = function () {
            return r.Message.getFieldWithDefault(this, 13, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setMoveSpeed = function (e) {
            return r.Message.setProto3StringIntField(this, 13, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getChatStyleList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.ChatItem, 14)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setChatStyleList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 14, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.addChatStyle = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 14, e, proto.webcast.im.ChatItem, t)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearChatStyleList = function () {
            return this.setChatStyleList([])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getEggStyleList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.EggItem, 15)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setEggStyleList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 15, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.addEggStyle = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 15, e, proto.webcast.im.EggItem, t)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearEggStyleList = function () {
            return this.setEggStyleList([])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getWordOrientation = function () {
            return r.Message.getFieldWithDefault(this, 16, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setWordOrientation = function (e) {
            return r.Message.setProto3StringIntField(this, 16, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getMoveDirection = function () {
            return r.Message.getFieldWithDefault(this, 17, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setMoveDirection = function (e) {
            return r.Message.setProto3StringIntField(this, 17, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getEggShowRangeList = function () {
            return r.Message.getRepeatedField(this, 18)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setEggShowRangeList = function (e) {
            return r.Message.setField(this, 18, e || [])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.addEggShowRange = function (e, t) {
            return r.Message.addToRepeatedField(this, 18, e, t)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearEggShowRangeList = function () {
            return this.setEggShowRangeList([])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getSizeAndAlphaList = function () {
            return r.Message.getRepeatedField(this, 19)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setSizeAndAlphaList = function (e) {
            return r.Message.setField(this, 19, e || [])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.addSizeAndAlpha = function (e, t) {
            return r.Message.addToRepeatedField(this, 19, e, t)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearSizeAndAlphaList = function () {
            return this.setSizeAndAlphaList([])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getVerticalOffsetList = function () {
            return r.Message.getRepeatedField(this, 20)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setVerticalOffsetList = function (e) {
            return r.Message.setField(this, 20, e || [])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.addVerticalOffset = function (e, t) {
            return r.Message.addToRepeatedField(this, 20, e, t)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.clearVerticalOffsetList = function () {
            return this.setVerticalOffsetList([])
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getPath = function () {
            return r.Message.getFieldWithDefault(this, 21, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setPath = function (e) {
            return r.Message.setProto3StringIntField(this, 21, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getWordColor = function () {
            return r.Message.getFieldWithDefault(this, 22, "")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setWordColor = function (e) {
            return r.Message.setProto3StringField(this, 22, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getShowWebp = function () {
            return r.Message.getFieldWithDefault(this, 23, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setShowWebp = function (e) {
            return r.Message.setProto3StringIntField(this, 23, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getUsePrivilegeRegion = function () {
            return r.Message.getFieldWithDefault(this, 24, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setUsePrivilegeRegion = function (e) {
            return r.Message.setProto3StringIntField(this, 24, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getCanOpenContour = function () {
            return r.Message.getFieldWithDefault(this, 25, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setCanOpenContour = function (e) {
            return r.Message.setProto3StringIntField(this, 25, e)
        }, proto.webcast.im.ChatCarnivalMessage.prototype.getSupportShowType = function () {
            return r.Message.getFieldWithDefault(this, 26, "0")
        }, proto.webcast.im.ChatCarnivalMessage.prototype.setSupportShowType = function (e) {
            return r.Message.setProto3StringIntField(this, 26, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EggItem.prototype.toObject = function (e) {
            return proto.webcast.im.EggItem.toObject(e, this)
        }, proto.webcast.im.EggItem.toObject = function (e, t) {
            var o, s = {
                background: (o = t.getBackground()) && a.Image.toObject(e, o),
                backgroundHight: r.Message.getFieldWithDefault(t, 2, "0"),
                backgroundWidth: r.Message.getFieldWithDefault(t, 3, "0"),
                useRate: r.Message.getFieldWithDefault(t, 4, "0"),
                isDynamicEgg: r.Message.getFieldWithDefault(t, 5, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.EggItem.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.EggItem;
            return proto.webcast.im.EggItem.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.EggItem.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setBackgroundHight(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setBackgroundWidth(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setUseRate(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setIsDynamicEgg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EggItem.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EggItem.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EggItem.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getBackground()) && t.writeMessage(1, o, a.Image.serializeBinaryToWriter), o = e.getBackgroundHight(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getBackgroundWidth(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getUseRate(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getIsDynamicEgg(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o)
        }, proto.webcast.im.EggItem.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, a.Image, 1)
        }, proto.webcast.im.EggItem.prototype.setBackground = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.EggItem.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        }, proto.webcast.im.EggItem.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.EggItem.prototype.getBackgroundHight = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.EggItem.prototype.setBackgroundHight = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.EggItem.prototype.getBackgroundWidth = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.EggItem.prototype.setBackgroundWidth = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.EggItem.prototype.getUseRate = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.EggItem.prototype.setUseRate = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.EggItem.prototype.getIsDynamicEgg = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.EggItem.prototype.setIsDynamicEgg = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChatItem.prototype.toObject = function (e) {
            return proto.webcast.im.ChatItem.toObject(e, this)
        }, proto.webcast.im.ChatItem.toObject = function (e, t) {
            var o, s = {
                headSize: r.Message.getFieldWithDefault(t, 1, "0"),
                contentSize: r.Message.getFieldWithDefault(t, 2, "0"),
                contentColor: r.Message.getFieldWithDefault(t, 3, ""),
                background: (o = t.getBackground()) && n.FlexImageStruct.toObject(e, o),
                backgroundHight: r.Message.getFieldWithDefault(t, 5, "0"),
                backgroundWidth: r.Message.getFieldWithDefault(t, 6, "0"),
                useRate: r.Message.getFieldWithDefault(t, 7, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }),proto.webcast.im.ChatItem.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChatItem;
            return proto.webcast.im.ChatItem.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChatItem.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setHeadSize(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setContentSize(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContentColor(o);
                        break;
                    case 4:
                        o = new n.FlexImageStruct;
                        t.readMessage(o, n.FlexImageStruct.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setBackgroundHight(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setBackgroundWidth(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setUseRate(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChatItem.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChatItem.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChatItem.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getHeadSize(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getContentSize(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getContentColor()).length > 0 && t.writeString(3, o), null != (o = e.getBackground()) && t.writeMessage(4, o, n.FlexImageStruct.serializeBinaryToWriter), o = e.getBackgroundHight(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getBackgroundWidth(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getUseRate(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o)
        },proto.webcast.im.ChatItem.prototype.getHeadSize = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChatItem.prototype.setHeadSize = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChatItem.prototype.getContentSize = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChatItem.prototype.setContentSize = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChatItem.prototype.getContentColor = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.ChatItem.prototype.setContentColor = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.ChatItem.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, n.FlexImageStruct, 4)
        },proto.webcast.im.ChatItem.prototype.setBackground = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.webcast.im.ChatItem.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        },proto.webcast.im.ChatItem.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.im.ChatItem.prototype.getBackgroundHight = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.ChatItem.prototype.setBackgroundHight = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.ChatItem.prototype.getBackgroundWidth = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.ChatItem.prototype.setBackgroundWidth = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.ChatItem.prototype.getUseRate = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.ChatItem.prototype.setUseRate = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },s.object.extend(t, proto.webcast.im)
    }, 20850: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n);
        var c = o(99222);
        s.object.extend(proto, c);
        var g = o(50684);
        s.object.extend(proto, g), s.exportSymbol("proto.webcast.im.ChatMessage", null, i), s.exportSymbol("proto.webcast.im.ChatMessage.ChatPriorityLevel", null, i), s.exportSymbol("proto.webcast.im.ChatTag", null, i), s.exportSymbol("proto.webcast.im.EmojiChatMessage", null, i), s.exportSymbol("proto.webcast.im.FriendChatMessage", null, i), s.exportSymbol("proto.webcast.im.IndividualChatPriority", null, i), proto.webcast.im.ChatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.ChatMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.ChatMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ChatMessage.displayName = "proto.webcast.im.ChatMessage"), proto.webcast.im.EmojiChatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.EmojiChatMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.EmojiChatMessage.displayName = "proto.webcast.im.EmojiChatMessage"), proto.webcast.im.FriendChatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.FriendChatMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.FriendChatMessage.displayName = "proto.webcast.im.FriendChatMessage"), proto.webcast.im.ChatMessage.repeatedFields_ = [19], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ChatMessage.toObject(e, this)
        }, proto.webcast.im.ChatMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && g.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                visibleToSender: r.Message.getBooleanFieldWithDefault(t, 4, !1),
                backgroundImage: (o = t.getBackgroundImage()) && n.Image.toObject(e, o),
                fullScreenTextColor: r.Message.getFieldWithDefault(t, 6, ""),
                backgroundImageV2: (o = t.getBackgroundImageV2()) && n.Image.toObject(e, o),
                publicAreaCommon: (o = t.getPublicAreaCommon()) && g.PublicAreaCommon.toObject(e, o),
                giftImage: (o = t.getGiftImage()) && n.Image.toObject(e, o),
                agreeMsgId: r.Message.getFieldWithDefault(t, 11, "0"),
                priorityLevel: r.Message.getFieldWithDefault(t, 12, 0),
                landscapeAreaCommon: (o = t.getLandscapeAreaCommon()) && g.LandscapeAreaCommon.toObject(e, o),
                eventTime: r.Message.getFieldWithDefault(t, 15, "0"),
                sendReview: r.Message.getBooleanFieldWithDefault(t, 16, !1),
                fromIntercom: r.Message.getBooleanFieldWithDefault(t, 17, !1),
                intercomHideUserCard: r.Message.getBooleanFieldWithDefault(t, 18, !1),
                chatTagsList: null == (o = r.Message.getRepeatedField(t, 19)) ? undefined : o,
                chatBy: r.Message.getFieldWithDefault(t, 20, "0"),
                individualChatPriority: r.Message.getFieldWithDefault(t, 21, 0),
                rtfContent: (o = t.getRtfContent()) && c.Text.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ChatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChatMessage;
            return proto.webcast.im.ChatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new g.Common;
                        t.readMessage(o, g.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readBool();
                        e.setVisibleToSender(o);
                        break;
                    case 5:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImage(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setFullScreenTextColor(o);
                        break;
                    case 7:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImageV2(o);
                        break;
                    case 9:
                        o = new g.PublicAreaCommon;
                        t.readMessage(o, g.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(o);
                        break;
                    case 10:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setGiftImage(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setAgreeMsgId(o);
                        break;
                    case 12:
                        o = t.readEnum();
                        e.setPriorityLevel(o);
                        break;
                    case 13:
                        o = new g.LandscapeAreaCommon;
                        t.readMessage(o, g.LandscapeAreaCommon.deserializeBinaryFromReader), e.setLandscapeAreaCommon(o);
                        break;
                    case 15:
                        o = t.readInt64String();
                        e.setEventTime(o);
                        break;
                    case 16:
                        o = t.readBool();
                        e.setSendReview(o);
                        break;
                    case 17:
                        o = t.readBool();
                        e.setFromIntercom(o);
                        break;
                    case 18:
                        o = t.readBool();
                        e.setIntercomHideUserCard(o);
                        break;
                    case 19:
                        for (var r = t.isDelimited() ? t.readPackedEnum() : [t.readEnum()], s = 0; s < r.length; s++) e.addChatTags(r[s]);
                        break;
                    case 20:
                        o = t.readInt64String();
                        e.setChatBy(o);
                        break;
                    case 21:
                        o = t.readEnum();
                        e.setIndividualChatPriority(o);
                        break;
                    case 40:
                        o = new c.Text;
                        t.readMessage(o, c.Text.deserializeBinaryFromReader), e.setRtfContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ChatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, g.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(3, o), (o = e.getVisibleToSender()) && t.writeBool(4, o), null != (o = e.getBackgroundImage()) && t.writeMessage(5, o, n.Image.serializeBinaryToWriter), (o = e.getFullScreenTextColor()).length > 0 && t.writeString(6, o), null != (o = e.getBackgroundImageV2()) && t.writeMessage(7, o, n.Image.serializeBinaryToWriter), null != (o = e.getPublicAreaCommon()) && t.writeMessage(9, o, g.PublicAreaCommon.serializeBinaryToWriter), null != (o = e.getGiftImage()) && t.writeMessage(10, o, n.Image.serializeBinaryToWriter), o = e.getAgreeMsgId(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), 0 !== (o = e.getPriorityLevel()) && t.writeEnum(12, o), null != (o = e.getLandscapeAreaCommon()) && t.writeMessage(13, o, g.LandscapeAreaCommon.serializeBinaryToWriter), o = e.getEventTime(), 0 !== parseInt(o, 10) && t.writeInt64String(15, o), (o = e.getSendReview()) && t.writeBool(16, o), (o = e.getFromIntercom()) && t.writeBool(17, o), (o = e.getIntercomHideUserCard()) && t.writeBool(18, o), (o = e.getChatTagsList()).length > 0 && t.writePackedEnum(19, o), o = e.getChatBy(), 0 !== parseInt(o, 10) && t.writeInt64String(20, o), 0 !== (o = e.getIndividualChatPriority()) && t.writeEnum(21, o), null != (o = e.getRtfContent()) && t.writeMessage(40, o, c.Text.serializeBinaryToWriter)
        }, proto.webcast.im.ChatMessage.ChatPriorityLevel = {
            LOW: 0,
            MIDDLE: 1,
            HIGH: 2
        }, proto.webcast.im.ChatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.ChatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ChatMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.ChatMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.ChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.ChatMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ChatMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ChatMessage.prototype.getVisibleToSender = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        }, proto.webcast.im.ChatMessage.prototype.setVisibleToSender = function (e) {
            return r.Message.setProto3BooleanField(this, 4, e)
        }, proto.webcast.im.ChatMessage.prototype.getBackgroundImage = function () {
            return r.Message.getWrapperField(this, n.Image, 5)
        }, proto.webcast.im.ChatMessage.prototype.setBackgroundImage = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.ChatMessage.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasBackgroundImage = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.ChatMessage.prototype.getFullScreenTextColor = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.ChatMessage.prototype.setFullScreenTextColor = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.ChatMessage.prototype.getBackgroundImageV2 = function () {
            return r.Message.getWrapperField(this, n.Image, 7)
        }, proto.webcast.im.ChatMessage.prototype.setBackgroundImageV2 = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.ChatMessage.prototype.clearBackgroundImageV2 = function () {
            return this.setBackgroundImageV2(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasBackgroundImageV2 = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.ChatMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, g.PublicAreaCommon, 9)
        }, proto.webcast.im.ChatMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.ChatMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.ChatMessage.prototype.getGiftImage = function () {
            return r.Message.getWrapperField(this, n.Image, 10)
        }, proto.webcast.im.ChatMessage.prototype.setGiftImage = function (e) {
            return r.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.ChatMessage.prototype.clearGiftImage = function () {
            return this.setGiftImage(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasGiftImage = function () {
            return null != r.Message.getField(this, 10)
        }, proto.webcast.im.ChatMessage.prototype.getAgreeMsgId = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.ChatMessage.prototype.setAgreeMsgId = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.ChatMessage.prototype.getPriorityLevel = function () {
            return r.Message.getFieldWithDefault(this, 12, 0)
        }, proto.webcast.im.ChatMessage.prototype.setPriorityLevel = function (e) {
            return r.Message.setProto3EnumField(this, 12, e)
        }, proto.webcast.im.ChatMessage.prototype.getLandscapeAreaCommon = function () {
            return r.Message.getWrapperField(this, g.LandscapeAreaCommon, 13)
        }, proto.webcast.im.ChatMessage.prototype.setLandscapeAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 13, e)
        }, proto.webcast.im.ChatMessage.prototype.clearLandscapeAreaCommon = function () {
            return this.setLandscapeAreaCommon(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasLandscapeAreaCommon = function () {
            return null != r.Message.getField(this, 13)
        }, proto.webcast.im.ChatMessage.prototype.getEventTime = function () {
            return r.Message.getFieldWithDefault(this, 15, "0")
        }, proto.webcast.im.ChatMessage.prototype.setEventTime = function (e) {
            return r.Message.setProto3StringIntField(this, 15, e)
        }, proto.webcast.im.ChatMessage.prototype.getSendReview = function () {
            return r.Message.getBooleanFieldWithDefault(this, 16, !1)
        }, proto.webcast.im.ChatMessage.prototype.setSendReview = function (e) {
            return r.Message.setProto3BooleanField(this, 16, e)
        }, proto.webcast.im.ChatMessage.prototype.getFromIntercom = function () {
            return r.Message.getBooleanFieldWithDefault(this, 17, !1)
        }, proto.webcast.im.ChatMessage.prototype.setFromIntercom = function (e) {
            return r.Message.setProto3BooleanField(this, 17, e)
        }, proto.webcast.im.ChatMessage.prototype.getIntercomHideUserCard = function () {
            return r.Message.getBooleanFieldWithDefault(this, 18, !1)
        }, proto.webcast.im.ChatMessage.prototype.setIntercomHideUserCard = function (e) {
            return r.Message.setProto3BooleanField(this, 18, e)
        }, proto.webcast.im.ChatMessage.prototype.getChatTagsList = function () {
            return r.Message.getRepeatedField(this, 19)
        }, proto.webcast.im.ChatMessage.prototype.setChatTagsList = function (e) {
            return r.Message.setField(this, 19, e || [])
        }, proto.webcast.im.ChatMessage.prototype.addChatTags = function (e, t) {
            return r.Message.addToRepeatedField(this, 19, e, t)
        }, proto.webcast.im.ChatMessage.prototype.clearChatTagsList = function () {
            return this.setChatTagsList([])
        }, proto.webcast.im.ChatMessage.prototype.getChatBy = function () {
            return r.Message.getFieldWithDefault(this, 20, "0")
        }, proto.webcast.im.ChatMessage.prototype.setChatBy = function (e) {
            return r.Message.setProto3StringIntField(this, 20, e)
        }, proto.webcast.im.ChatMessage.prototype.getIndividualChatPriority = function () {
            return r.Message.getFieldWithDefault(this, 21, 0)
        }, proto.webcast.im.ChatMessage.prototype.setIndividualChatPriority = function (e) {
            return r.Message.setProto3EnumField(this, 21, e)
        }, proto.webcast.im.ChatMessage.prototype.getRtfContent = function () {
            return r.Message.getWrapperField(this, c.Text, 40)
        }, proto.webcast.im.ChatMessage.prototype.setRtfContent = function (e) {
            return r.Message.setWrapperField(this, 40, e)
        }, proto.webcast.im.ChatMessage.prototype.clearRtfContent = function () {
            return this.setRtfContent(undefined)
        }, proto.webcast.im.ChatMessage.prototype.hasRtfContent = function () {
            return null != r.Message.getField(this, 40)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EmojiChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.EmojiChatMessage.toObject(e, this)
        }, proto.webcast.im.EmojiChatMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && g.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                emojiId: r.Message.getFieldWithDefault(t, 3, "0"),
                emojiContent: (o = t.getEmojiContent()) && c.Text.toObject(e, o),
                defaultContent: r.Message.getFieldWithDefault(t, 5, ""),
                backgroundImage: (o = t.getBackgroundImage()) && n.Image.toObject(e, o),
                fromIntercom: r.Message.getBooleanFieldWithDefault(t, 7, !1),
                intercomHideUserCard: r.Message.getBooleanFieldWithDefault(t, 8, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.EmojiChatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.EmojiChatMessage;
            return proto.webcast.im.EmojiChatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.EmojiChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new g.Common;
                        t.readMessage(o, g.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setEmojiId(o);
                        break;
                    case 4:
                        o = new c.Text;
                        t.readMessage(o, c.Text.deserializeBinaryFromReader), e.setEmojiContent(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDefaultContent(o);
                        break;
                    case 6:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImage(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setFromIntercom(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setIntercomHideUserCard(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EmojiChatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EmojiChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EmojiChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, g.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), o = e.getEmojiId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), null != (o = e.getEmojiContent()) && t.writeMessage(4, o, c.Text.serializeBinaryToWriter), (o = e.getDefaultContent()).length > 0 && t.writeString(5, o), null != (o = e.getBackgroundImage()) && t.writeMessage(6, o, n.Image.serializeBinaryToWriter), (o = e.getFromIntercom()) && t.writeBool(7, o), (o = e.getIntercomHideUserCard()) && t.writeBool(8, o)
        }, proto.webcast.im.EmojiChatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        }, proto.webcast.im.EmojiChatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.EmojiChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.EmojiChatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.EmojiChatMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.EmojiChatMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.EmojiChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.EmojiChatMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.EmojiChatMessage.prototype.getEmojiId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.EmojiChatMessage.prototype.setEmojiId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.EmojiChatMessage.prototype.getEmojiContent = function () {
            return r.Message.getWrapperField(this, c.Text, 4)
        }, proto.webcast.im.EmojiChatMessage.prototype.setEmojiContent = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.EmojiChatMessage.prototype.clearEmojiContent = function () {
            return this.setEmojiContent(undefined)
        }, proto.webcast.im.EmojiChatMessage.prototype.hasEmojiContent = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.EmojiChatMessage.prototype.getDefaultContent = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.EmojiChatMessage.prototype.setDefaultContent = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.EmojiChatMessage.prototype.getBackgroundImage = function () {
            return r.Message.getWrapperField(this, n.Image, 6)
        },proto.webcast.im.EmojiChatMessage.prototype.setBackgroundImage = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        },proto.webcast.im.EmojiChatMessage.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        },proto.webcast.im.EmojiChatMessage.prototype.hasBackgroundImage = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.im.EmojiChatMessage.prototype.getFromIntercom = function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        },proto.webcast.im.EmojiChatMessage.prototype.setFromIntercom = function (e) {
            return r.Message.setProto3BooleanField(this, 7, e)
        },proto.webcast.im.EmojiChatMessage.prototype.getIntercomHideUserCard = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.im.EmojiChatMessage.prototype.setIntercomHideUserCard = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FriendChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FriendChatMessage.toObject(e, this)
        }, proto.webcast.im.FriendChatMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && g.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }),proto.webcast.im.FriendChatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.FriendChatMessage;
            return proto.webcast.im.FriendChatMessage.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.FriendChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new g.Common;
                        t.readMessage(o, g.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.FriendChatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FriendChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.FriendChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, g.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(3, o)
        },proto.webcast.im.FriendChatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, g.Common, 1)
        },proto.webcast.im.FriendChatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.FriendChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.FriendChatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.FriendChatMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        },proto.webcast.im.FriendChatMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.FriendChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.im.FriendChatMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.FriendChatMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.FriendChatMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.ChatTag = {
            CHATTAGUNKNOWN: 0,
            CHATTAGHOTCHAT: 1
        },proto.webcast.im.IndividualChatPriority = {
            CHATPRIORITYUNKNOWN: 0,
            CHATPRIORITYLOW: 30,
            CHATPRIORITYMIDDLE: 50,
            CHATPRIORITYHIGH: 80
        },s.object.extend(t, proto.webcast.im)
    }, 95829: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(57561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.CommentaryChangeMessage", null, i), s.exportSymbol("proto.webcast.im.CommentaryChangeMessage.OperationType", null, i), proto.webcast.im.CommentaryChangeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommentaryChangeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommentaryChangeMessage.displayName = "proto.webcast.im.CommentaryChangeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommentaryChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommentaryChangeMessage.toObject(e, this)
        }, proto.webcast.im.CommentaryChangeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                commentaryRoomInfo: (o = t.getCommentaryRoomInfo()) && n.CommentaryRoomInfo.toObject(e, o),
                operation: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommentaryChangeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommentaryChangeMessage;
            return proto.webcast.im.CommentaryChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommentaryChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.CommentaryRoomInfo;
                        t.readMessage(o, n.CommentaryRoomInfo.deserializeBinaryFromReader), e.setCommentaryRoomInfo(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setOperation(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommentaryChangeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommentaryChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommentaryChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getCommentaryRoomInfo()) && t.writeMessage(2, o, n.CommentaryRoomInfo.serializeBinaryToWriter), 0 !== (o = e.getOperation()) && t.writeEnum(3, o)
        }, proto.webcast.im.CommentaryChangeMessage.OperationType = {
            UNKNOW: 0,
            ADD: 1,
            CHANGE: 2,
            LIVEEND: 3,
            BANCOMMENTARYPERMISSION: 4
        }, proto.webcast.im.CommentaryChangeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.getCommentaryRoomInfo = function () {
            return r.Message.getWrapperField(this, n.CommentaryRoomInfo, 2)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.setCommentaryRoomInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.clearCommentaryRoomInfo = function () {
            return this.setCommentaryRoomInfo(undefined)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.hasCommentaryRoomInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.getOperation = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.CommentaryChangeMessage.prototype.setOperation = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 74503: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n);
        var c = o(50684);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.CommentsMessage", null, i), proto.webcast.im.CommentsMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommentsMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommentsMessage.displayName = "proto.webcast.im.CommentsMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommentsMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommentsMessage.toObject(e, this)
        }, proto.webcast.im.CommentsMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                color: r.Message.getFieldWithDefault(t, 4, ""),
                backGround: (o = t.getBackGround()) && n.Image.toObject(e, o),
                actionType: r.Message.getFieldWithDefault(t, 6, "0"),
                actionContent: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommentsMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommentsMessage;
            return proto.webcast.im.CommentsMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommentsMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setColor(o);
                        break;
                    case 5:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackGround(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setActionType(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setActionContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommentsMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommentsMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommentsMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(3, o), (o = e.getColor()).length > 0 && t.writeString(4, o), null != (o = e.getBackGround()) && t.writeMessage(5, o, n.Image.serializeBinaryToWriter), o = e.getActionType(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getActionContent()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.CommentsMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.CommentsMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommentsMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommentsMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommentsMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.CommentsMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.CommentsMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.CommentsMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.CommentsMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CommentsMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CommentsMessage.prototype.getColor = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.CommentsMessage.prototype.setColor = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.CommentsMessage.prototype.getBackGround = function () {
            return r.Message.getWrapperField(this, n.Image, 5)
        }, proto.webcast.im.CommentsMessage.prototype.setBackGround = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.CommentsMessage.prototype.clearBackGround = function () {
            return this.setBackGround(undefined)
        }, proto.webcast.im.CommentsMessage.prototype.hasBackGround = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.CommentsMessage.prototype.getActionType = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.CommentsMessage.prototype.setActionType = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.CommentsMessage.prototype.getActionContent = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.CommentsMessage.prototype.setActionContent = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 23806: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CommerceMessage", null, i), proto.webcast.im.CommerceMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommerceMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommerceMessage.displayName = "proto.webcast.im.CommerceMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommerceMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommerceMessage.toObject(e, this)
        }, proto.webcast.im.CommerceMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                messageType: r.Message.getFieldWithDefault(t, 2, "0"),
                content: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommerceMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommerceMessage;
            return proto.webcast.im.CommerceMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommerceMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMessageType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommerceMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommerceMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommerceMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getMessageType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getContent()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.CommerceMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CommerceMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommerceMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommerceMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommerceMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.CommerceMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.CommerceMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CommerceMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 76560: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CommerceSaleMessage", null, i), proto.webcast.im.CommerceSaleMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommerceSaleMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommerceSaleMessage.displayName = "proto.webcast.im.CommerceSaleMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommerceSaleMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommerceSaleMessage.toObject(e, this)
        }, proto.webcast.im.CommerceSaleMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                hasCommerceSale: r.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommerceSaleMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommerceSaleMessage;
            return proto.webcast.im.CommerceSaleMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommerceSaleMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setHasCommerceSale(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommerceSaleMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommerceSaleMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommerceSaleMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getHasCommerceSale()) && t.writeBool(2, o)
        }, proto.webcast.im.CommerceSaleMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CommerceSaleMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommerceSaleMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommerceSaleMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommerceSaleMessage.prototype.getHasCommerceSale = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.CommerceSaleMessage.prototype.setHasCommerceSale = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 19929: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(99222);
        s.object.extend(proto, n);
        var c = o(8411);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.CommonGuideMessage", null, i), s.exportSymbol("proto.webcast.im.ComplexContent", null, i), s.exportSymbol("proto.webcast.im.GuideMessageType", null, i), proto.webcast.im.ComplexContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ComplexContent, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ComplexContent.displayName = "proto.webcast.im.ComplexContent"), proto.webcast.im.CommonGuideMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CommonGuideMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.CommonGuideMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommonGuideMessage.displayName = "proto.webcast.im.CommonGuideMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ComplexContent.prototype.toObject = function (e) {
            return proto.webcast.im.ComplexContent.toObject(e, this)
        }, proto.webcast.im.ComplexContent.toObject = function (e, t) {
            var o, s = {
                type: r.Message.getFieldWithDefault(t, 1, ""),
                text: r.Message.getFieldWithDefault(t, 2, ""),
                fontColor: r.Message.getFieldWithDefault(t, 3, ""),
                fontSize: r.Message.getFieldWithDefault(t, 4, "0"),
                weight: r.Message.getFieldWithDefault(t, 5, "0"),
                img: (o = t.getImg()) && c.Image.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ComplexContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ComplexContent;
            return proto.webcast.im.ComplexContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ComplexContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setType(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setText(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setFontColor(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setFontSize(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setWeight(o);
                        break;
                    case 6:
                        o = new c.Image;
                        t.readMessage(o, c.Image.deserializeBinaryFromReader), e.setImg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ComplexContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ComplexContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ComplexContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getType()).length > 0 && t.writeString(1, o), (o = e.getText()).length > 0 && t.writeString(2, o), (o = e.getFontColor()).length > 0 && t.writeString(3, o), o = e.getFontSize(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getWeight(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getImg()) && t.writeMessage(6, o, c.Image.serializeBinaryToWriter)
        }, proto.webcast.im.ComplexContent.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.ComplexContent.prototype.setType = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.ComplexContent.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.ComplexContent.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.ComplexContent.prototype.getFontColor = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ComplexContent.prototype.setFontColor = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ComplexContent.prototype.getFontSize = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.ComplexContent.prototype.setFontSize = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.ComplexContent.prototype.getWeight = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.ComplexContent.prototype.setWeight = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.ComplexContent.prototype.getImg = function () {
            return r.Message.getWrapperField(this, c.Image, 6)
        }, proto.webcast.im.ComplexContent.prototype.setImg = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.ComplexContent.prototype.clearImg = function () {
            return this.setImg(undefined)
        }, proto.webcast.im.ComplexContent.prototype.hasImg = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.CommonGuideMessage.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonGuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommonGuideMessage.toObject(e, this)
        }, proto.webcast.im.CommonGuideMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                messageType: r.Message.getFieldWithDefault(t, 2, "0"),
                mainContent: (o = t.getMainContent()) && n.Text.toObject(e, o),
                secondaryContentList: r.Message.toObjectList(t.getSecondaryContentList(), proto.webcast.im.ComplexContent.toObject, e),
                icon: (o = t.getIcon()) && c.Image.toObject(e, o),
                buttonContent: (o = t.getButtonContent()) && n.Text.toObject(e, o),
                buttonActionSchema: r.Message.getFieldWithDefault(t, 7, ""),
                buttonIcon: (o = t.getButtonIcon()) && c.Image.toObject(e, o),
                duration: r.Message.getFieldWithDefault(t, 9, "0"),
                isRoundedIcon: r.Message.getBooleanFieldWithDefault(t, 10, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommonGuideMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonGuideMessage;
            return proto.webcast.im.CommonGuideMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonGuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMessageType(o);
                        break;
                    case 3:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setMainContent(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.ComplexContent;
                        t.readMessage(o, proto.webcast.im.ComplexContent.deserializeBinaryFromReader), e.addSecondaryContent(o);
                        break;
                    case 5:
                        o = new c.Image;
                        t.readMessage(o, c.Image.deserializeBinaryFromReader), e.setIcon(o);
                        break;
                    case 6:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setButtonContent(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setButtonActionSchema(o);
                        break;
                    case 8:
                        o = new c.Image;
                        t.readMessage(o, c.Image.deserializeBinaryFromReader), e.setButtonIcon(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setIsRoundedIcon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonGuideMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonGuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonGuideMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getMessageType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getMainContent()) && t.writeMessage(3, o, n.Text.serializeBinaryToWriter), (o = e.getSecondaryContentList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.ComplexContent.serializeBinaryToWriter), null != (o = e.getIcon()) && t.writeMessage(5, o, c.Image.serializeBinaryToWriter), null != (o = e.getButtonContent()) && t.writeMessage(6, o, n.Text.serializeBinaryToWriter), (o = e.getButtonActionSchema()).length > 0 && t.writeString(7, o), null != (o = e.getButtonIcon()) && t.writeMessage(8, o, c.Image.serializeBinaryToWriter), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o), (o = e.getIsRoundedIcon()) && t.writeBool(10, o)
        }, proto.webcast.im.CommonGuideMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CommonGuideMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommonGuideMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommonGuideMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.CommonGuideMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.getMainContent = function () {
            return r.Message.getWrapperField(this, n.Text, 3)
        }, proto.webcast.im.CommonGuideMessage.prototype.setMainContent = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.clearMainContent = function () {
            return this.setMainContent(undefined)
        }, proto.webcast.im.CommonGuideMessage.prototype.hasMainContent = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.CommonGuideMessage.prototype.getSecondaryContentList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.ComplexContent, 4)
        }, proto.webcast.im.CommonGuideMessage.prototype.setSecondaryContentList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.addSecondaryContent = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.ComplexContent, t)
        }, proto.webcast.im.CommonGuideMessage.prototype.clearSecondaryContentList = function () {
            return this.setSecondaryContentList([])
        }, proto.webcast.im.CommonGuideMessage.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, c.Image, 5)
        }, proto.webcast.im.CommonGuideMessage.prototype.setIcon = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.CommonGuideMessage.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.CommonGuideMessage.prototype.getButtonContent = function () {
            return r.Message.getWrapperField(this, n.Text, 6)
        }, proto.webcast.im.CommonGuideMessage.prototype.setButtonContent = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.clearButtonContent = function () {
            return this.setButtonContent(undefined)
        }, proto.webcast.im.CommonGuideMessage.prototype.hasButtonContent = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.CommonGuideMessage.prototype.getButtonActionSchema = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.CommonGuideMessage.prototype.setButtonActionSchema = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.getButtonIcon = function () {
            return r.Message.getWrapperField(this, c.Image, 8)
        }, proto.webcast.im.CommonGuideMessage.prototype.setButtonIcon = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.clearButtonIcon = function () {
            return this.setButtonIcon(undefined)
        }, proto.webcast.im.CommonGuideMessage.prototype.hasButtonIcon = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.CommonGuideMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.im.CommonGuideMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        }, proto.webcast.im.CommonGuideMessage.prototype.getIsRoundedIcon = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        }, proto.webcast.im.CommonGuideMessage.prototype.setIsRoundedIcon = function (e) {
            return r.Message.setProto3BooleanField(this, 10, e)
        }, proto.webcast.im.GuideMessageType = {
            GUIDE_MESSAGE_UNDEFINED: 0,
            GIFT_GUIDE: 1,
            FOLLOW_GUIDE: 2,
            VCOIN_GUIDE: 3,
            VIDEO_CHAT_GUIDE: 4
        }, s.object.extend(t, proto.webcast.im)
    }, 34403: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n);
        var c = o(50684);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.CommonLuckyMoneyMessage", null, i), s.exportSymbol("proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon", null, i), proto.webcast.im.CommonLuckyMoneyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommonLuckyMoneyMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommonLuckyMoneyMessage.displayName = "proto.webcast.im.CommonLuckyMoneyMessage"), proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.displayName = "proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonLuckyMoneyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommonLuckyMoneyMessage.toObject(e, this)
        }, proto.webcast.im.CommonLuckyMoneyMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                diamondCount: r.Message.getFieldWithDefault(t, 2, "0"),
                luckymoneyId: r.Message.getFieldWithDefault(t, 3, "0"),
                sendTime: r.Message.getFieldWithDefault(t, 4, "0"),
                delayTime: r.Message.getFieldWithDefault(t, 5, "0"),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                style: r.Message.getFieldWithDefault(t, 7, "0"),
                luckyIcon: (o = t.getLuckyIcon()) && proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.toObject(e, o),
                background: (o = t.getBackground()) && n.Image.toObject(e, o),
                isOfficial: r.Message.getBooleanFieldWithDefault(t, 10, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommonLuckyMoneyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonLuckyMoneyMessage;
            return proto.webcast.im.CommonLuckyMoneyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonLuckyMoneyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setDiamondCount(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLuckymoneyId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setSendTime(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setDelayTime(o);
                        break;
                    case 6:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setStyle(o);
                        break;
                    case 8:
                        o = new proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon;
                        t.readMessage(o, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.deserializeBinaryFromReader), e.setLuckyIcon(o);
                        break;
                    case 9:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setIsOfficial(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonLuckyMoneyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonLuckyMoneyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), o = e.getDiamondCount(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getLuckymoneyId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getSendTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getDelayTime(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getUser()) && t.writeMessage(6, o, a.User.serializeBinaryToWriter), o = e.getStyle(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), null != (o = e.getLuckyIcon()) && t.writeMessage(8, o, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.serializeBinaryToWriter), null != (o = e.getBackground()) && t.writeMessage(9, o, n.Image.serializeBinaryToWriter), (o = e.getIsOfficial()) && t.writeBool(10, o)
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.toObject = function (e) {
            return proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.toObject(e, this)
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.toObject = function (e, t) {
            var o, s = {
                urlListList: null == (o = r.Message.getRepeatedField(t, 1)) ? undefined : o,
                uri: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon;
            return proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.addUrlList(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setUri(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getUrlListList()).length > 0 && t.writeRepeatedString(1, o), (o = e.getUri()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.getUrlListList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.setUrlListList = function (e) {
            return r.Message.setField(this, 1, e || [])
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.addUrlList = function (e, t) {
            return r.Message.addToRepeatedField(this, 1, e, t)
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.clearUrlListList = function () {
            return this.setUrlListList([])
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.getUri = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon.prototype.setUri = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setDiamondCount = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getLuckymoneyId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setLuckymoneyId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getSendTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setSendTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getDelayTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setDelayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 6)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getStyle = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setStyle = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getLuckyIcon = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CommonLuckyMoneyMessage.LuckyIcon, 8)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setLuckyIcon = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.clearLuckyIcon = function () {
            return this.setLuckyIcon(undefined)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.hasLuckyIcon = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, n.Image, 9)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setBackground = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.getIsOfficial = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        }, proto.webcast.im.CommonLuckyMoneyMessage.prototype.setIsOfficial = function (e) {
            return r.Message.setProto3BooleanField(this, 10, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 73423: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.TaskPanel", null, i), s.exportSymbol("proto.webcast.im.TaskPanelMessage", null, i), s.exportSymbol("proto.webcast.im.TaskRewardToast", null, i), s.exportSymbol("proto.webcast.im.TaskRewardToastMessage", null, i), proto.webcast.im.TaskPanelMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TaskPanelMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TaskPanelMessage.displayName = "proto.webcast.im.TaskPanelMessage"), proto.webcast.im.TaskPanel = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TaskPanel, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TaskPanel.displayName = "proto.webcast.im.TaskPanel"), proto.webcast.im.TaskRewardToastMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TaskRewardToastMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TaskRewardToastMessage.displayName = "proto.webcast.im.TaskRewardToastMessage"), proto.webcast.im.TaskRewardToast = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TaskRewardToast, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TaskRewardToast.displayName = "proto.webcast.im.TaskRewardToast"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TaskPanelMessage.prototype.toObject = function (e) {
            return proto.webcast.im.TaskPanelMessage.toObject(e, this)
        }, proto.webcast.im.TaskPanelMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.TaskPanel.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.TaskPanelMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TaskPanelMessage;
            return proto.webcast.im.TaskPanelMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TaskPanelMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.TaskPanel;
                        t.readMessage(o, proto.webcast.im.TaskPanel.deserializeBinaryFromReader), e.setData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TaskPanelMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TaskPanelMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TaskPanelMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.TaskPanel.serializeBinaryToWriter)
        }, proto.webcast.im.TaskPanelMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.TaskPanelMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.TaskPanelMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.TaskPanelMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.TaskPanelMessage.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.TaskPanel, 2)
        }, proto.webcast.im.TaskPanelMessage.prototype.setData = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.TaskPanelMessage.prototype.clearData = function () {
            return this.setData(undefined)
        }, proto.webcast.im.TaskPanelMessage.prototype.hasData = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TaskPanel.prototype.toObject = function (e) {
            return proto.webcast.im.TaskPanel.toObject(e, this)
        }, proto.webcast.im.TaskPanel.toObject = function (e, t) {
            var o = {
                taskId: r.Message.getFieldWithDefault(t, 1, 0),
                taskType: r.Message.getFieldWithDefault(t, 2, 0),
                watchTime: r.Message.getFieldWithDefault(t, 3, 0),
                title: r.Message.getFieldWithDefault(t, 4, ""),
                subTitle: r.Message.getFieldWithDefault(t, 5, ""),
                tagIconUrl: r.Message.getFieldWithDefault(t, 6, ""),
                tagText: r.Message.getFieldWithDefault(t, 7, ""),
                tagTextColor: r.Message.getFieldWithDefault(t, 8, ""),
                buttonName: r.Message.getFieldWithDefault(t, 9, ""),
                schema: r.Message.getFieldWithDefault(t, 10, ""),
                expireAt: r.Message.getFieldWithDefault(t, 11, "0"),
                status: r.Message.getFieldWithDefault(t, 12, 0),
                expireAfter: r.Message.getFieldWithDefault(t, 13, 0),
                rewardType: r.Message.getFieldWithDefault(t, 14, 0),
                panelTitle: r.Message.getFieldWithDefault(t, 15, ""),
                subTitleColor: r.Message.getFieldWithDefault(t, 16, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.TaskPanel.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TaskPanel;
            return proto.webcast.im.TaskPanel.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TaskPanel.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt32();
                        e.setTaskId(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setTaskType(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setWatchTime(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setSubTitle(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setTagIconUrl(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setTagText(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setTagTextColor(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setButtonName(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setSchema(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setExpireAt(o);
                        break;
                    case 12:
                        o = t.readInt32();
                        e.setStatus(o);
                        break;
                    case 13:
                        o = t.readInt32();
                        e.setExpireAfter(o);
                        break;
                    case 14:
                        o = t.readInt32();
                        e.setRewardType(o);
                        break;
                    case 15:
                        o = t.readString();
                        e.setPanelTitle(o);
                        break;
                    case 16:
                        o = t.readString();
                        e.setSubTitleColor(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TaskPanel.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TaskPanel.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TaskPanel.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getTaskId()) && t.writeInt32(1, o), 0 !== (o = e.getTaskType()) && t.writeInt32(2, o), 0 !== (o = e.getWatchTime()) && t.writeInt32(3, o), (o = e.getTitle()).length > 0 && t.writeString(4, o), (o = e.getSubTitle()).length > 0 && t.writeString(5, o), (o = e.getTagIconUrl()).length > 0 && t.writeString(6, o), (o = e.getTagText()).length > 0 && t.writeString(7, o), (o = e.getTagTextColor()).length > 0 && t.writeString(8, o), (o = e.getButtonName()).length > 0 && t.writeString(9, o), (o = e.getSchema()).length > 0 && t.writeString(10, o), o = e.getExpireAt(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), 0 !== (o = e.getStatus()) && t.writeInt32(12, o), 0 !== (o = e.getExpireAfter()) && t.writeInt32(13, o), 0 !== (o = e.getRewardType()) && t.writeInt32(14, o), (o = e.getPanelTitle()).length > 0 && t.writeString(15, o), (o = e.getSubTitleColor()).length > 0 && t.writeString(16, o)
        }, proto.webcast.im.TaskPanel.prototype.getTaskId = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.TaskPanel.prototype.setTaskId = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.TaskPanel.prototype.getTaskType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.TaskPanel.prototype.setTaskType = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.TaskPanel.prototype.getWatchTime = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.TaskPanel.prototype.setWatchTime = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.TaskPanel.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.TaskPanel.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.TaskPanel.prototype.getSubTitle = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.TaskPanel.prototype.setSubTitle = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.TaskPanel.prototype.getTagIconUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.TaskPanel.prototype.setTagIconUrl = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.TaskPanel.prototype.getTagText = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.TaskPanel.prototype.setTagText = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.TaskPanel.prototype.getTagTextColor = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.TaskPanel.prototype.setTagTextColor = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.TaskPanel.prototype.getButtonName = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.TaskPanel.prototype.setButtonName = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.TaskPanel.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.TaskPanel.prototype.setSchema = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.TaskPanel.prototype.getExpireAt = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.TaskPanel.prototype.setExpireAt = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.TaskPanel.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 12, 0)
        }, proto.webcast.im.TaskPanel.prototype.setStatus = function (e) {
            return r.Message.setProto3IntField(this, 12, e)
        }, proto.webcast.im.TaskPanel.prototype.getExpireAfter = function () {
            return r.Message.getFieldWithDefault(this, 13, 0)
        }, proto.webcast.im.TaskPanel.prototype.setExpireAfter = function (e) {
            return r.Message.setProto3IntField(this, 13, e)
        }, proto.webcast.im.TaskPanel.prototype.getRewardType = function () {
            return r.Message.getFieldWithDefault(this, 14, 0)
        }, proto.webcast.im.TaskPanel.prototype.setRewardType = function (e) {
            return r.Message.setProto3IntField(this, 14, e)
        }, proto.webcast.im.TaskPanel.prototype.getPanelTitle = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        }, proto.webcast.im.TaskPanel.prototype.setPanelTitle = function (e) {
            return r.Message.setProto3StringField(this, 15, e)
        }, proto.webcast.im.TaskPanel.prototype.getSubTitleColor = function () {
            return r.Message.getFieldWithDefault(this, 16, "")
        }, proto.webcast.im.TaskPanel.prototype.setSubTitleColor = function (e) {
            return r.Message.setProto3StringField(this, 16, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TaskRewardToastMessage.prototype.toObject = function (e) {
            return proto.webcast.im.TaskRewardToastMessage.toObject(e, this)
        }, proto.webcast.im.TaskRewardToastMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.TaskRewardToast.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.TaskRewardToastMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TaskRewardToastMessage;
            return proto.webcast.im.TaskRewardToastMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TaskRewardToastMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.TaskRewardToast;
                        t.readMessage(o, proto.webcast.im.TaskRewardToast.deserializeBinaryFromReader), e.setData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TaskRewardToastMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TaskRewardToastMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TaskRewardToastMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.TaskRewardToast.serializeBinaryToWriter)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.TaskRewardToast, 2)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.setData = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.clearData = function () {
            return this.setData(undefined)
        }, proto.webcast.im.TaskRewardToastMessage.prototype.hasData = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TaskRewardToast.prototype.toObject = function (e) {
            return proto.webcast.im.TaskRewardToast.toObject(e, this)
        }, proto.webcast.im.TaskRewardToast.toObject = function (e, t) {
            var o = {
                taskId: r.Message.getFieldWithDefault(t, 1, 0),
                taskType: r.Message.getFieldWithDefault(t, 2, 0),
                rewardType: r.Message.getFieldWithDefault(t, 3, 0),
                title: r.Message.getFieldWithDefault(t, 4, ""),
                subTitle: r.Message.getFieldWithDefault(t, 5, ""),
                iconUrl: r.Message.getFieldWithDefault(t, 6, ""),
                bgPicUrl: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.TaskRewardToast.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TaskRewardToast;
            return proto.webcast.im.TaskRewardToast.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TaskRewardToast.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt32();
                        e.setTaskId(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setTaskType(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setRewardType(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setSubTitle(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setIconUrl(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setBgPicUrl(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TaskRewardToast.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TaskRewardToast.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TaskRewardToast.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getTaskId()) && t.writeInt32(1, o), 0 !== (o = e.getTaskType()) && t.writeInt32(2, o), 0 !== (o = e.getRewardType()) && t.writeInt32(3, o), (o = e.getTitle()).length > 0 && t.writeString(4, o), (o = e.getSubTitle()).length > 0 && t.writeString(5, o), (o = e.getIconUrl()).length > 0 && t.writeString(6, o), (o = e.getBgPicUrl()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.TaskRewardToast.prototype.getTaskId = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.TaskRewardToast.prototype.setTaskId = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.TaskRewardToast.prototype.getTaskType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.TaskRewardToast.prototype.setTaskType = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.TaskRewardToast.prototype.getRewardType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.TaskRewardToast.prototype.setRewardType = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.TaskRewardToast.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.TaskRewardToast.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.TaskRewardToast.prototype.getSubTitle = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.TaskRewardToast.prototype.setSubTitle = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.TaskRewardToast.prototype.getIconUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.TaskRewardToast.prototype.setIconUrl = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.TaskRewardToast.prototype.getBgPicUrl = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.TaskRewardToast.prototype.setBgPicUrl = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 77510: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CommonPopupMessage", null, i), proto.webcast.im.CommonPopupMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommonPopupMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommonPopupMessage.displayName = "proto.webcast.im.CommonPopupMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonPopupMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommonPopupMessage.toObject(e, this)
        }, proto.webcast.im.CommonPopupMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                schemaUrl: r.Message.getFieldWithDefault(t, 2, ""),
                anchorPopUp: r.Message.getBooleanFieldWithDefault(t, 3, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommonPopupMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonPopupMessage;
            return proto.webcast.im.CommonPopupMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonPopupMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setSchemaUrl(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setAnchorPopUp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonPopupMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonPopupMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonPopupMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getSchemaUrl()).length > 0 && t.writeString(2, o), (o = e.getAnchorPopUp()) && t.writeBool(3, o)
        }, proto.webcast.im.CommonPopupMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CommonPopupMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommonPopupMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommonPopupMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommonPopupMessage.prototype.getSchemaUrl = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CommonPopupMessage.prototype.setSchemaUrl = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CommonPopupMessage.prototype.getAnchorPopUp = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.CommonPopupMessage.prototype.setAnchorPopUp = function (e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 99782: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(64925);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.CommonTextMessage", null, i), proto.webcast.im.CommonTextMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommonTextMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommonTextMessage.displayName = "proto.webcast.im.CommonTextMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonTextMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommonTextMessage.toObject(e, this)
        }, proto.webcast.im.CommonTextMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                user: (o = t.getUser()) && n.User.toObject(e, o),
                scene: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommonTextMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonTextMessage;
            return proto.webcast.im.CommonTextMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonTextMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.User;
                        t.readMessage(o, n.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setScene(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonTextMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonTextMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonTextMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, n.User.serializeBinaryToWriter), (o = e.getScene()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.CommonTextMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CommonTextMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommonTextMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommonTextMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommonTextMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 2)
        }, proto.webcast.im.CommonTextMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.CommonTextMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.CommonTextMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.CommonTextMessage.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CommonTextMessage.prototype.setScene = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 55305: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        s.object.extend(proto, a);
        var n = o(50684);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.CommonToastMessage", null, i), proto.webcast.im.CommonToastMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CommonToastMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CommonToastMessage.displayName = "proto.webcast.im.CommonToastMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonToastMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommonToastMessage.toObject(e, this)
        }, proto.webcast.im.CommonToastMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                discardable: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                immediate: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                duration: r.Message.getFieldWithDefault(t, 4, "0"),
                textColor: r.Message.getFieldWithDefault(t, 5, ""),
                backgroundColorStart: r.Message.getFieldWithDefault(t, 6, ""),
                backgroundColorEnd: r.Message.getFieldWithDefault(t, 7, ""),
                position: r.Message.getFieldWithDefault(t, 8, "0"),
                topImg: (o = t.getTopImg()) && a.Image.toObject(e, o),
                topImgWidth: r.Message.getFieldWithDefault(t, 10, "0"),
                topImgHeight: r.Message.getFieldWithDefault(t, 11, "0"),
                showMongoliaLayer: r.Message.getBooleanFieldWithDefault(t, 12, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CommonToastMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonToastMessage;
            return proto.webcast.im.CommonToastMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonToastMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setDiscardable(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setImmediate(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setTextColor(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setBackgroundColorStart(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setBackgroundColorEnd(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setPosition(o);
                        break;
                    case 9:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setTopImg(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setTopImgWidth(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setTopImgHeight(o);
                        break;
                    case 12:
                        o = t.readBool();
                        e.setShowMongoliaLayer(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonToastMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonToastMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonToastMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getDiscardable()) && t.writeBool(2, o), (o = e.getImmediate()) && t.writeBool(3, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getTextColor()).length > 0 && t.writeString(5, o), (o = e.getBackgroundColorStart()).length > 0 && t.writeString(6, o), (o = e.getBackgroundColorEnd()).length > 0 && t.writeString(7, o), o = e.getPosition(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), null != (o = e.getTopImg()) && t.writeMessage(9, o, a.Image.serializeBinaryToWriter), o = e.getTopImgWidth(), 0 !== parseInt(o, 10) && t.writeInt64String(10, o), o = e.getTopImgHeight(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), (o = e.getShowMongoliaLayer()) && t.writeBool(12, o)
        }, proto.webcast.im.CommonToastMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CommonToastMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommonToastMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommonToastMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommonToastMessage.prototype.getDiscardable = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.CommonToastMessage.prototype.setDiscardable = function (e) {
            return r.Message.setProto3BooleanField(this, 2, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getImmediate = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.CommonToastMessage.prototype.setImmediate = function (e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.CommonToastMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getTextColor = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.CommonToastMessage.prototype.setTextColor = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getBackgroundColorStart = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.CommonToastMessage.prototype.setBackgroundColorStart = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getBackgroundColorEnd = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.CommonToastMessage.prototype.setBackgroundColorEnd = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getPosition = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.CommonToastMessage.prototype.setPosition = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getTopImg = function () {
            return r.Message.getWrapperField(this, a.Image, 9)
        }, proto.webcast.im.CommonToastMessage.prototype.setTopImg = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.CommonToastMessage.prototype.clearTopImg = function () {
            return this.setTopImg(undefined)
        }, proto.webcast.im.CommonToastMessage.prototype.hasTopImg = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.CommonToastMessage.prototype.getTopImgWidth = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.CommonToastMessage.prototype.setTopImgWidth = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getTopImgHeight = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.CommonToastMessage.prototype.setTopImgHeight = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.CommonToastMessage.prototype.getShowMongoliaLayer = function () {
            return r.Message.getBooleanFieldWithDefault(this, 12, !1)
        }, proto.webcast.im.CommonToastMessage.prototype.setShowMongoliaLayer = function (e) {
            return r.Message.setProto3BooleanField(this, 12, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 80159: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(99222);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.ControlMessage", null, i), s.exportSymbol("proto.webcast.im.ControlMessage.Extra", null, i), proto.webcast.im.ControlMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ControlMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ControlMessage.displayName = "proto.webcast.im.ControlMessage"), proto.webcast.im.ControlMessage.Extra = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ControlMessage.Extra, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ControlMessage.Extra.displayName = "proto.webcast.im.ControlMessage.Extra"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ControlMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ControlMessage.toObject(e, this)
        }, proto.webcast.im.ControlMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                action: r.Message.getFieldWithDefault(t, 2, "0"),
                tips: r.Message.getFieldWithDefault(t, 3, ""),
                extra: (o = t.getExtra()) && proto.webcast.im.ControlMessage.Extra.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ControlMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ControlMessage;
            return proto.webcast.im.ControlMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ControlMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setAction(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTips(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.ControlMessage.Extra;
                        t.readMessage(o, proto.webcast.im.ControlMessage.Extra.deserializeBinaryFromReader), e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ControlMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ControlMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ControlMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getAction(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getTips()).length > 0 && t.writeString(3, o), null != (o = e.getExtra()) && t.writeMessage(4, o, proto.webcast.im.ControlMessage.Extra.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ControlMessage.Extra.prototype.toObject = function (e) {
            return proto.webcast.im.ControlMessage.Extra.toObject(e, this)
        }, proto.webcast.im.ControlMessage.Extra.toObject = function (e, t) {
            var o, s = {
                banInfoUrl: r.Message.getFieldWithDefault(t, 1, ""),
                reasonNo: r.Message.getFieldWithDefault(t, 2, "0"),
                title: (o = t.getTitle()) && n.Text.toObject(e, o),
                violationReason: (o = t.getViolationReason()) && n.Text.toObject(e, o),
                content: (o = t.getContent()) && n.Text.toObject(e, o),
                gotItButton: (o = t.getGotItButton()) && n.Text.toObject(e, o),
                banDetailButton: (o = t.getBanDetailButton()) && n.Text.toObject(e, o),
                source: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ControlMessage.Extra.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ControlMessage.Extra;
            return proto.webcast.im.ControlMessage.Extra.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ControlMessage.Extra.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setBanInfoUrl(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setReasonNo(o);
                        break;
                    case 3:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setTitle(o);
                        break;
                    case 4:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setViolationReason(o);
                        break;
                    case 5:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setContent(o);
                        break;
                    case 6:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setGotItButton(o);
                        break;
                    case 7:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setBanDetailButton(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ControlMessage.Extra.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ControlMessage.Extra.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ControlMessage.Extra.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getBanInfoUrl()).length > 0 && t.writeString(1, o), o = e.getReasonNo(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getTitle()) && t.writeMessage(3, o, n.Text.serializeBinaryToWriter), null != (o = e.getViolationReason()) && t.writeMessage(4, o, n.Text.serializeBinaryToWriter), null != (o = e.getContent()) && t.writeMessage(5, o, n.Text.serializeBinaryToWriter), null != (o = e.getGotItButton()) && t.writeMessage(6, o, n.Text.serializeBinaryToWriter), null != (o = e.getBanDetailButton()) && t.writeMessage(7, o, n.Text.serializeBinaryToWriter), (o = e.getSource()).length > 0 && t.writeString(8, o)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getBanInfoUrl = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.ControlMessage.Extra.prototype.setBanInfoUrl = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getReasonNo = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ControlMessage.Extra.prototype.setReasonNo = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getTitle = function () {
            return r.Message.getWrapperField(this, n.Text, 3)
        }, proto.webcast.im.ControlMessage.Extra.prototype.setTitle = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.clearTitle = function () {
            return this.setTitle(undefined)
        }, proto.webcast.im.ControlMessage.Extra.prototype.hasTitle = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getViolationReason = function () {
            return r.Message.getWrapperField(this, n.Text, 4)
        }, proto.webcast.im.ControlMessage.Extra.prototype.setViolationReason = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.clearViolationReason = function () {
            return this.setViolationReason(undefined)
        }, proto.webcast.im.ControlMessage.Extra.prototype.hasViolationReason = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getContent = function () {
            return r.Message.getWrapperField(this, n.Text, 5)
        }, proto.webcast.im.ControlMessage.Extra.prototype.setContent = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.clearContent = function () {
            return this.setContent(undefined)
        }, proto.webcast.im.ControlMessage.Extra.prototype.hasContent = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getGotItButton = function () {
            return r.Message.getWrapperField(this, n.Text, 6)
        }, proto.webcast.im.ControlMessage.Extra.prototype.setGotItButton = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.clearGotItButton = function () {
            return this.setGotItButton(undefined)
        }, proto.webcast.im.ControlMessage.Extra.prototype.hasGotItButton = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getBanDetailButton = function () {
            return r.Message.getWrapperField(this, n.Text, 7)
        }, proto.webcast.im.ControlMessage.Extra.prototype.setBanDetailButton = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.ControlMessage.Extra.prototype.clearBanDetailButton = function () {
            return this.setBanDetailButton(undefined)
        }, proto.webcast.im.ControlMessage.Extra.prototype.hasBanDetailButton = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.ControlMessage.Extra.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.ControlMessage.Extra.prototype.setSource = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.ControlMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ControlMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ControlMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ControlMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ControlMessage.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ControlMessage.prototype.setAction = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ControlMessage.prototype.getTips = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ControlMessage.prototype.setTips = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ControlMessage.prototype.getExtra = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ControlMessage.Extra, 4)
        }, proto.webcast.im.ControlMessage.prototype.setExtra = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.ControlMessage.prototype.clearExtra = function () {
            return this.setExtra(undefined)
        }, proto.webcast.im.ControlMessage.prototype.hasExtra = function () {
            return null != r.Message.getField(this, 4)
        }, s.object.extend(t, proto.webcast.im)
    }, 63273: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.DataLifeLiveMessage", null, i), proto.webcast.im.DataLifeLiveMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.DataLifeLiveMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.DataLifeLiveMessage.displayName = "proto.webcast.im.DataLifeLiveMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DataLifeLiveMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DataLifeLiveMessage.toObject(e, this)
        }, proto.webcast.im.DataLifeLiveMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                type: r.Message.getFieldWithDefault(t, 2, 0),
                body: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.DataLifeLiveMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DataLifeLiveMessage;
            return proto.webcast.im.DataLifeLiveMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DataLifeLiveMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBody(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DataLifeLiveMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DataLifeLiveMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DataLifeLiveMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getType()) && t.writeInt32(2, o), (o = e.getBody()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.setType = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.DataLifeLiveMessage.prototype.getBody = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.DataLifeLiveMessage.prototype.setBody = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 8501: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.DecorationModifyMessage", null, i), proto.webcast.im.DecorationModifyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.DecorationModifyMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.DecorationModifyMessage.displayName = "proto.webcast.im.DecorationModifyMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DecorationModifyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DecorationModifyMessage.toObject(e, this)
        }, proto.webcast.im.DecorationModifyMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                extra: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.DecorationModifyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DecorationModifyMessage;
            return proto.webcast.im.DecorationModifyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DecorationModifyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DecorationModifyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DecorationModifyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DecorationModifyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getExtra()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.DecorationModifyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.DecorationModifyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DecorationModifyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DecorationModifyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DecorationModifyMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.DecorationModifyMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }
}]);