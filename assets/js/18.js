(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[729], {
    42219: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.ToastMessage", null, a), proto.webcast.im.ToastMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ToastMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ToastMessage.displayName = "proto.webcast.im.ToastMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ToastMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ToastMessage.toObject(e, this)
        }, proto.webcast.im.ToastMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ToastMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ToastMessage;
            return proto.webcast.im.ToastMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ToastMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
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
        }, proto.webcast.im.ToastMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ToastMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ToastMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.ToastMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.ToastMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ToastMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ToastMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ToastMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.ToastMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 96301: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(70203);
        s.object.extend(proto, n);
        var p = o(8411);
        s.object.extend(proto, p);
        var c = o(57561);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.ToolBarControlMessage", null, a), proto.webcast.im.ToolBarControlMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ToolBarControlMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ToolBarControlMessage.displayName = "proto.webcast.im.ToolBarControlMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ToolBarControlMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ToolBarControlMessage.toObject(e, this)
        }, proto.webcast.im.ToolBarControlMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                eventType: r.Message.getFieldWithDefault(t, 2, 0),
                groupId: r.Message.getFieldWithDefault(t, 3, 0),
                componentType: r.Message.getFieldWithDefault(t, 4, 0),
                opType: r.Message.getFieldWithDefault(t, 5, 0),
                text: r.Message.getFieldWithDefault(t, 6, ""),
                schemaUrl: r.Message.getFieldWithDefault(t, 7, ""),
                icon: (o = t.getIcon()) && p.Image.toObject(e, o),
                showType: r.Message.getFieldWithDefault(t, 9, "0"),
                extra: r.Message.getFieldWithDefault(t, 99, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ToolBarControlMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ToolBarControlMessage;
            return proto.webcast.im.ToolBarControlMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ToolBarControlMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setEventType(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setGroupId(o);
                        break;
                    case 4:
                        o = t.readEnum();
                        e.setComponentType(o);
                        break;
                    case 5:
                        o = t.readEnum();
                        e.setOpType(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setText(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setSchemaUrl(o);
                        break;
                    case 8:
                        o = new p.Image;
                        t.readMessage(o, p.Image.deserializeBinaryFromReader), e.setIcon(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setShowType(o);
                        break;
                    case 99:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ToolBarControlMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ToolBarControlMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ToolBarControlMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), 0 !== (o = e.getEventType()) && t.writeEnum(2, o), 0 !== (o = e.getGroupId()) && t.writeEnum(3, o), 0 !== (o = e.getComponentType()) && t.writeEnum(4, o), 0 !== (o = e.getOpType()) && t.writeEnum(5, o), (o = e.getText()).length > 0 && t.writeString(6, o), (o = e.getSchemaUrl()).length > 0 && t.writeString(7, o), null != (o = e.getIcon()) && t.writeMessage(8, o, p.Image.serializeBinaryToWriter), o = e.getShowType(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o), (o = e.getExtra()).length > 0 && t.writeString(99, o)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.ToolBarControlMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ToolBarControlMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getEventType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ToolBarControlMessage.prototype.setEventType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getGroupId = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.ToolBarControlMessage.prototype.setGroupId = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getComponentType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.ToolBarControlMessage.prototype.setComponentType = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getOpType = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.ToolBarControlMessage.prototype.setOpType = function (e) {
            return r.Message.setProto3EnumField(this, 5, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.ToolBarControlMessage.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getSchemaUrl = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.ToolBarControlMessage.prototype.setSchemaUrl = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, p.Image, 8)
        }, proto.webcast.im.ToolBarControlMessage.prototype.setIcon = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.ToolBarControlMessage.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getShowType = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.im.ToolBarControlMessage.prototype.setShowType = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        }, proto.webcast.im.ToolBarControlMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 99, "")
        }, proto.webcast.im.ToolBarControlMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 99, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 12736: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(56879);
        s.object.extend(proto, n);
        var p = o(99222);
        s.object.extend(proto, p);
        var c = o(8411);
        s.object.extend(proto, c), s.exportSymbol("proto.webcast.im.BubbleConfig", null, a), s.exportSymbol("proto.webcast.im.ToolbarItemActionType", null, a), s.exportSymbol("proto.webcast.im.ToolbarItemBehaviourParam", null, a), s.exportSymbol("proto.webcast.im.ToolbarItemBehaviourParams", null, a), s.exportSymbol("proto.webcast.im.ToolbarItemBehaviourType", null, a), s.exportSymbol("proto.webcast.im.ToolbarItemMessage", null, a), s.exportSymbol("proto.webcast.im.ToolbarItemMessage.MessageType", null, a), proto.webcast.im.BubbleConfig = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.BubbleConfig, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.BubbleConfig.displayName = "proto.webcast.im.BubbleConfig"), proto.webcast.im.ToolbarItemBehaviourParam = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ToolbarItemBehaviourParam, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ToolbarItemBehaviourParam.displayName = "proto.webcast.im.ToolbarItemBehaviourParam"), proto.webcast.im.ToolbarItemBehaviourParams = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.ToolbarItemBehaviourParams.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.ToolbarItemBehaviourParams, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ToolbarItemBehaviourParams.displayName = "proto.webcast.im.ToolbarItemBehaviourParams"), proto.webcast.im.ToolbarItemMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.ToolbarItemMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ToolbarItemMessage.displayName = "proto.webcast.im.ToolbarItemMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BubbleConfig.prototype.toObject = function (e) {
            return proto.webcast.im.BubbleConfig.toObject(e, this)
        }, proto.webcast.im.BubbleConfig.toObject = function (e, t) {
            var o, s = {
                content: r.Message.getFieldWithDefault(t, 1, ""),
                duration: r.Message.getFieldWithDefault(t, 2, "0"),
                richText: (o = t.getRichText()) && p.Text.toObject(e, o),
                schemeUrl: r.Message.getFieldWithDefault(t, 4, ""),
                backgroundImage: (o = t.getBackgroundImage()) && i.FlexImageStruct.toObject(e, o),
                arrowImage: (o = t.getArrowImage()) && c.Image.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.BubbleConfig.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BubbleConfig;
            return proto.webcast.im.BubbleConfig.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BubbleConfig.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setContent(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 3:
                        o = new p.Text;
                        t.readMessage(o, p.Text.deserializeBinaryFromReader), e.setRichText(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setSchemeUrl(o);
                        break;
                    case 5:
                        o = new i.FlexImageStruct;
                        t.readMessage(o, i.FlexImageStruct.deserializeBinaryFromReader), e.setBackgroundImage(o);
                        break;
                    case 6:
                        o = new c.Image;
                        t.readMessage(o, c.Image.deserializeBinaryFromReader), e.setArrowImage(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BubbleConfig.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BubbleConfig.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BubbleConfig.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getContent()).length > 0 && t.writeString(1, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getRichText()) && t.writeMessage(3, o, p.Text.serializeBinaryToWriter), (o = e.getSchemeUrl()).length > 0 && t.writeString(4, o), null != (o = e.getBackgroundImage()) && t.writeMessage(5, o, i.FlexImageStruct.serializeBinaryToWriter), null != (o = e.getArrowImage()) && t.writeMessage(6, o, c.Image.serializeBinaryToWriter)
        }, proto.webcast.im.BubbleConfig.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.BubbleConfig.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.BubbleConfig.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.BubbleConfig.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.BubbleConfig.prototype.getRichText = function () {
            return r.Message.getWrapperField(this, p.Text, 3)
        }, proto.webcast.im.BubbleConfig.prototype.setRichText = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.BubbleConfig.prototype.clearRichText = function () {
            return this.setRichText(undefined)
        }, proto.webcast.im.BubbleConfig.prototype.hasRichText = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.BubbleConfig.prototype.getSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.BubbleConfig.prototype.setSchemeUrl = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.BubbleConfig.prototype.getBackgroundImage = function () {
            return r.Message.getWrapperField(this, i.FlexImageStruct, 5)
        }, proto.webcast.im.BubbleConfig.prototype.setBackgroundImage = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.BubbleConfig.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        }, proto.webcast.im.BubbleConfig.prototype.hasBackgroundImage = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.BubbleConfig.prototype.getArrowImage = function () {
            return r.Message.getWrapperField(this, c.Image, 6)
        }, proto.webcast.im.BubbleConfig.prototype.setArrowImage = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.BubbleConfig.prototype.clearArrowImage = function () {
            return this.setArrowImage(undefined)
        }, proto.webcast.im.BubbleConfig.prototype.hasArrowImage = function () {
            return null != r.Message.getField(this, 6)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ToolbarItemBehaviourParam.prototype.toObject = function (e) {
            return proto.webcast.im.ToolbarItemBehaviourParam.toObject(e, this)
        }, proto.webcast.im.ToolbarItemBehaviourParam.toObject = function (e, t) {
            var o = {
                behaviourType: r.Message.getFieldWithDefault(t, 1, 0),
                values: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.ToolbarItemBehaviourParam.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ToolbarItemBehaviourParam;
            return proto.webcast.im.ToolbarItemBehaviourParam.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ToolbarItemBehaviourParam.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setBehaviourType(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setValues(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ToolbarItemBehaviourParam.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ToolbarItemBehaviourParam.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ToolbarItemBehaviourParam.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getBehaviourType()) && t.writeEnum(1, o), (o = e.getValues()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.ToolbarItemBehaviourParam.prototype.getBehaviourType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.ToolbarItemBehaviourParam.prototype.setBehaviourType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.ToolbarItemBehaviourParam.prototype.getValues = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.ToolbarItemBehaviourParam.prototype.setValues = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.ToolbarItemBehaviourParams.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ToolbarItemBehaviourParams.prototype.toObject = function (e) {
            return proto.webcast.im.ToolbarItemBehaviourParams.toObject(e, this)
        }, proto.webcast.im.ToolbarItemBehaviourParams.toObject = function (e, t) {
            var o = {
                key: r.Message.getFieldWithDefault(t, 1, ""),
                paramsList: r.Message.toObjectList(t.getParamsList(), proto.webcast.im.ToolbarItemBehaviourParam.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.ToolbarItemBehaviourParams.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ToolbarItemBehaviourParams;
            return proto.webcast.im.ToolbarItemBehaviourParams.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ToolbarItemBehaviourParams.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setKey(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.ToolbarItemBehaviourParam;
                        t.readMessage(o, proto.webcast.im.ToolbarItemBehaviourParam.deserializeBinaryFromReader), e.addParams(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ToolbarItemBehaviourParams.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ToolbarItemBehaviourParams.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getKey()).length > 0 && t.writeString(1, o), (o = e.getParamsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.ToolbarItemBehaviourParam.serializeBinaryToWriter)
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.getKey = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.setKey = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.getParamsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.ToolbarItemBehaviourParam, 2)
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.setParamsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.addParams = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.ToolbarItemBehaviourParam, t)
        }, proto.webcast.im.ToolbarItemBehaviourParams.prototype.clearParamsList = function () {
            return this.setParamsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ToolbarItemMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ToolbarItemMessage.toObject(e, this)
        }, proto.webcast.im.ToolbarItemMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                toolbarItemId: r.Message.getFieldWithDefault(t, 2, 0),
                actionType: r.Message.getFieldWithDefault(t, 3, 0),
                bubbleConfig: (o = t.getBubbleConfig()) && proto.webcast.im.BubbleConfig.toObject(e, o),
                extraMap: (o = t.getExtraMap()) ? o.toObject(e, undefined) : [],
                messageType: r.Message.getFieldWithDefault(t, 6, 0),
                behaviourParams: (o = t.getBehaviourParams()) && proto.webcast.im.ToolbarItemBehaviourParams.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ToolbarItemMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ToolbarItemMessage;
            return proto.webcast.im.ToolbarItemMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ToolbarItemMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setToolbarItemId(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setActionType(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.BubbleConfig;
                        t.readMessage(o, proto.webcast.im.BubbleConfig.deserializeBinaryFromReader), e.setBubbleConfig(o);
                        break;
                    case 5:
                        o = e.getExtraMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 6:
                        o = t.readEnum();
                        e.setMessageType(o);
                        break;
                    case 7:
                        o = new proto.webcast.im.ToolbarItemBehaviourParams;
                        t.readMessage(o, proto.webcast.im.ToolbarItemBehaviourParams.deserializeBinaryFromReader), e.setBehaviourParams(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ToolbarItemMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ToolbarItemMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ToolbarItemMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), 0 !== (o = e.getToolbarItemId()) && t.writeEnum(2, o), 0 !== (o = e.getActionType()) && t.writeEnum(3, o), null != (o = e.getBubbleConfig()) && t.writeMessage(4, o, proto.webcast.im.BubbleConfig.serializeBinaryToWriter), (o = e.getExtraMap(!0)) && o.getLength() > 0 && o.serializeBinary(5, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), 0 !== (o = e.getMessageType()) && t.writeEnum(6, o), null != (o = e.getBehaviourParams()) && t.writeMessage(7, o, proto.webcast.im.ToolbarItemBehaviourParams.serializeBinaryToWriter)
        }, proto.webcast.im.ToolbarItemMessage.MessageType = {
            MESSAGETYPEUNKNOWN: 0,
            MESSAGETYPEDEFAULT: 1,
            MESSAGETYPENABOBPRIVILEGE: 2,
            MESSAGETYPEGRADEBUFF: 3,
            MESSAGETYPEGIFTBUFF: 4,
            MESSAGETYPEVS: 5,
            MESSAGETYPEBLINDBOX: 6,
            MESSAGETYPEGIFTRELEASE: 7,
            MESSAGETYPESCREENCHAT: 8,
            MESSAGETYPEMYSTERYMAN: 9,
            MESSAGETYPEPAIDRELATIONSTRATEGY: 10
        }, proto.webcast.im.ToolbarItemMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.ToolbarItemMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ToolbarItemMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ToolbarItemMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ToolbarItemMessage.prototype.getToolbarItemId = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ToolbarItemMessage.prototype.setToolbarItemId = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.ToolbarItemMessage.prototype.getActionType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.ToolbarItemMessage.prototype.setActionType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.ToolbarItemMessage.prototype.getBubbleConfig = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.BubbleConfig, 4)
        }, proto.webcast.im.ToolbarItemMessage.prototype.setBubbleConfig = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.ToolbarItemMessage.prototype.clearBubbleConfig = function () {
            return this.setBubbleConfig(undefined)
        }, proto.webcast.im.ToolbarItemMessage.prototype.hasBubbleConfig = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.ToolbarItemMessage.prototype.getExtraMap = function (e) {
            return r.Message.getMapField(this, 5, e, null)
        }, proto.webcast.im.ToolbarItemMessage.prototype.clearExtraMap = function () {
            return this.getExtraMap().clear(), this
        }, proto.webcast.im.ToolbarItemMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.ToolbarItemMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3EnumField(this, 6, e)
        }, proto.webcast.im.ToolbarItemMessage.prototype.getBehaviourParams = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ToolbarItemBehaviourParams, 7)
        }, proto.webcast.im.ToolbarItemMessage.prototype.setBehaviourParams = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.ToolbarItemMessage.prototype.clearBehaviourParams = function () {
            return this.setBehaviourParams(undefined)
        }, proto.webcast.im.ToolbarItemMessage.prototype.hasBehaviourParams = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.ToolbarItemActionType = {
            TBUNDEFINED: 0,
            BUBBLE: 1,
            BUBBLEANDICON: 2,
            ICON: 3
        }, proto.webcast.im.ToolbarItemBehaviourType = {
            TOOLBARUNDEFINED: 0,
            TOOLBARDAILYLIMITBYUIDANDKEY: 1,
            TOOLBARDAILYLIMITBYDIDANDKEY: 2,
            TOOLBARROOMLIMITBYUIDANDKEY: 3,
            TOOLBARROOMLIMITBYDIDANDKEY: 4,
            TOOLBARLIMITBYUIDANDKEY: 5,
            TOOLBARLIMITBYDIDANDKEY: 6
        }, s.object.extend(t, proto.webcast.im)
    }, 26993: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.TopLeftBubbleMessage", null, a), proto.webcast.im.TopLeftBubbleMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TopLeftBubbleMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TopLeftBubbleMessage.displayName = "proto.webcast.im.TopLeftBubbleMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TopLeftBubbleMessage.prototype.toObject = function (e) {
            return proto.webcast.im.TopLeftBubbleMessage.toObject(e, this)
        }, proto.webcast.im.TopLeftBubbleMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                bubbleConfig: (o = t.getBubbleConfig()) && i.CommonBubbleConfig.toObject(e, o),
                extraMap: (o = t.getExtraMap()) ? o.toObject(e, undefined) : []
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.TopLeftBubbleMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TopLeftBubbleMessage;
            return proto.webcast.im.TopLeftBubbleMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TopLeftBubbleMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new i.CommonBubbleConfig;
                        t.readMessage(o, i.CommonBubbleConfig.deserializeBinaryFromReader), e.setBubbleConfig(o);
                        break;
                    case 3:
                        o = e.getExtraMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TopLeftBubbleMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TopLeftBubbleMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getBubbleConfig()) && t.writeMessage(2, o, i.CommonBubbleConfig.serializeBinaryToWriter), (o = e.getExtraMap(!0)) && o.getLength() > 0 && o.serializeBinary(3, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.getBubbleConfig = function () {
            return r.Message.getWrapperField(this, i.CommonBubbleConfig, 2)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.setBubbleConfig = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.clearBubbleConfig = function () {
            return this.setBubbleConfig(undefined)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.hasBubbleConfig = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.getExtraMap = function (e) {
            return r.Message.getMapField(this, 3, e, null)
        }, proto.webcast.im.TopLeftBubbleMessage.prototype.clearExtraMap = function () {
            return this.getExtraMap().clear(), this
        }, s.object.extend(t, proto.webcast.im)
    }, 96093: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(8411);
        s.object.extend(proto, i);
        var n = o(50684);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.TurntableBurstMessage", null, a), proto.webcast.im.TurntableBurstMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TurntableBurstMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TurntableBurstMessage.displayName = "proto.webcast.im.TurntableBurstMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TurntableBurstMessage.prototype.toObject = function (e) {
            return proto.webcast.im.TurntableBurstMessage.toObject(e, this)
        }, proto.webcast.im.TurntableBurstMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                burstTimeRemainSeconds: r.Message.getFieldWithDefault(t, 2, "0"),
                multiple: r.Message.getFieldWithDefault(t, 3, "0"),
                propertyDefinitionId: r.Message.getFieldWithDefault(t, 4, "0"),
                propertyIcon: (o = t.getPropertyIcon()) && i.Image.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.TurntableBurstMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TurntableBurstMessage;
            return proto.webcast.im.TurntableBurstMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TurntableBurstMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setBurstTimeRemainSeconds(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setMultiple(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setPropertyDefinitionId(o);
                        break;
                    case 5:
                        o = new i.Image;
                        t.readMessage(o, i.Image.deserializeBinaryFromReader), e.setPropertyIcon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TurntableBurstMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TurntableBurstMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TurntableBurstMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getBurstTimeRemainSeconds(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getMultiple(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getPropertyDefinitionId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), null != (o = e.getPropertyIcon()) && t.writeMessage(5, o, i.Image.serializeBinaryToWriter)
        }, proto.webcast.im.TurntableBurstMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.TurntableBurstMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.TurntableBurstMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.TurntableBurstMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.TurntableBurstMessage.prototype.getBurstTimeRemainSeconds = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.TurntableBurstMessage.prototype.setBurstTimeRemainSeconds = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.TurntableBurstMessage.prototype.getMultiple = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.TurntableBurstMessage.prototype.setMultiple = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.TurntableBurstMessage.prototype.getPropertyDefinitionId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.TurntableBurstMessage.prototype.setPropertyDefinitionId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.TurntableBurstMessage.prototype.getPropertyIcon = function () {
            return r.Message.getWrapperField(this, i.Image, 5)
        }, proto.webcast.im.TurntableBurstMessage.prototype.setPropertyIcon = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.TurntableBurstMessage.prototype.clearPropertyIcon = function () {
            return this.setPropertyIcon(undefined)
        }, proto.webcast.im.TurntableBurstMessage.prototype.hasPropertyIcon = function () {
            return null != r.Message.getField(this, 5)
        }, s.object.extend(t, proto.webcast.im)
    }, 96697: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.AppointmentNumberUpdateMessage", null, a), s.exportSymbol("proto.webcast.im.AppointmentNumberUpdateMessage.Data", null, a), proto.webcast.im.AppointmentNumberUpdateMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AppointmentNumberUpdateMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AppointmentNumberUpdateMessage.displayName = "proto.webcast.im.AppointmentNumberUpdateMessage"), proto.webcast.im.AppointmentNumberUpdateMessage.Data = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.AppointmentNumberUpdateMessage.Data, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.AppointmentNumberUpdateMessage.Data.displayName = "proto.webcast.im.AppointmentNumberUpdateMessage.Data"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AppointmentNumberUpdateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AppointmentNumberUpdateMessage.toObject(e, this)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                data: (o = t.getData()) && proto.webcast.im.AppointmentNumberUpdateMessage.Data.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.AppointmentNumberUpdateMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AppointmentNumberUpdateMessage;
            return proto.webcast.im.AppointmentNumberUpdateMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.AppointmentNumberUpdateMessage.Data;
                        t.readMessage(o, proto.webcast.im.AppointmentNumberUpdateMessage.Data.deserializeBinaryFromReader), e.setData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AppointmentNumberUpdateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AppointmentNumberUpdateMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getData()) && t.writeMessage(2, o, proto.webcast.im.AppointmentNumberUpdateMessage.Data.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AppointmentNumberUpdateMessage.Data.prototype.toObject = function (e) {
            return proto.webcast.im.AppointmentNumberUpdateMessage.Data.toObject(e, this)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.toObject = function (e, t) {
            var o = {
                currentnumber: r.Message.getFieldWithDefault(t, 1, "0"),
                anchoruid: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AppointmentNumberUpdateMessage.Data.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AppointmentNumberUpdateMessage.Data;
            return proto.webcast.im.AppointmentNumberUpdateMessage.Data.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
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
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AppointmentNumberUpdateMessage.Data.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getCurrentnumber(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getAnchoruid(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.prototype.getCurrentnumber = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.prototype.setCurrentnumber = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.prototype.getAnchoruid = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.AppointmentNumberUpdateMessage.Data.prototype.setAnchoruid = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.AppointmentNumberUpdateMessage.Data, 2)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.setData = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.clearData = function () {
            return this.setData(undefined)
        }, proto.webcast.im.AppointmentNumberUpdateMessage.prototype.hasData = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 77052: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.UpdateFanTicketMessage", null, a), proto.webcast.im.UpdateFanTicketMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.UpdateFanTicketMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.UpdateFanTicketMessage.displayName = "proto.webcast.im.UpdateFanTicketMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdateFanTicketMessage.prototype.toObject = function (e) {
            return proto.webcast.im.UpdateFanTicketMessage.toObject(e, this)
        }, proto.webcast.im.UpdateFanTicketMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                roomFanTicketCountText: r.Message.getFieldWithDefault(t, 2, ""),
                roomFanTicketCount: r.Message.getFieldWithDefault(t, 3, "0"),
                forceUpdate: r.Message.getBooleanFieldWithDefault(t, 4, !1)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.UpdateFanTicketMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.UpdateFanTicketMessage;
            return proto.webcast.im.UpdateFanTicketMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UpdateFanTicketMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setRoomFanTicketCountText(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setRoomFanTicketCount(o);
                        break;
                    case 4:
                        o = t.readBool();
                        e.setForceUpdate(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UpdateFanTicketMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UpdateFanTicketMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getRoomFanTicketCountText()).length > 0 && t.writeString(2, o), o = e.getRoomFanTicketCount(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getForceUpdate()) && t.writeBool(4, o)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.getRoomFanTicketCountText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.setRoomFanTicketCountText = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.getRoomFanTicketCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.setRoomFanTicketCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.getForceUpdate = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        }, proto.webcast.im.UpdateFanTicketMessage.prototype.setForceUpdate = function (e) {
            return r.Message.setProto3BooleanField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 67830: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(99222);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.UploadCoverMessage", null, a), proto.webcast.im.UploadCoverMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.UploadCoverMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.UploadCoverMessage.displayName = "proto.webcast.im.UploadCoverMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UploadCoverMessage.prototype.toObject = function (e) {
            return proto.webcast.im.UploadCoverMessage.toObject(e, this)
        }, proto.webcast.im.UploadCoverMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, "0"),
                title: (o = t.getTitle()) && n.Text.toObject(e, o),
                content: (o = t.getContent()) && n.Text.toObject(e, o),
                tipsTitle: (o = t.getTipsTitle()) && n.Text.toObject(e, o),
                tipsUrl: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.UploadCoverMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.UploadCoverMessage;
            return proto.webcast.im.UploadCoverMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UploadCoverMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMsgType(o);
                        break;
                    case 3:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setTitle(o);
                        break;
                    case 4:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setContent(o);
                        break;
                    case 5:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setTipsTitle(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setTipsUrl(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UploadCoverMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UploadCoverMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UploadCoverMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), o = e.getMsgType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getTitle()) && t.writeMessage(3, o, n.Text.serializeBinaryToWriter), null != (o = e.getContent()) && t.writeMessage(4, o, n.Text.serializeBinaryToWriter), null != (o = e.getTipsTitle()) && t.writeMessage(5, o, n.Text.serializeBinaryToWriter), (o = e.getTipsUrl()).length > 0 && t.writeString(6, o)
        }, proto.webcast.im.UploadCoverMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.UploadCoverMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.UploadCoverMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.UploadCoverMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.UploadCoverMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.UploadCoverMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.UploadCoverMessage.prototype.getTitle = function () {
            return r.Message.getWrapperField(this, n.Text, 3)
        }, proto.webcast.im.UploadCoverMessage.prototype.setTitle = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.UploadCoverMessage.prototype.clearTitle = function () {
            return this.setTitle(undefined)
        }, proto.webcast.im.UploadCoverMessage.prototype.hasTitle = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.UploadCoverMessage.prototype.getContent = function () {
            return r.Message.getWrapperField(this, n.Text, 4)
        }, proto.webcast.im.UploadCoverMessage.prototype.setContent = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.UploadCoverMessage.prototype.clearContent = function () {
            return this.setContent(undefined)
        }, proto.webcast.im.UploadCoverMessage.prototype.hasContent = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.UploadCoverMessage.prototype.getTipsTitle = function () {
            return r.Message.getWrapperField(this, n.Text, 5)
        }, proto.webcast.im.UploadCoverMessage.prototype.setTipsTitle = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.UploadCoverMessage.prototype.clearTipsTitle = function () {
            return this.setTipsTitle(undefined)
        }, proto.webcast.im.UploadCoverMessage.prototype.hasTipsTitle = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.UploadCoverMessage.prototype.getTipsUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.UploadCoverMessage.prototype.setTipsUrl = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 10135: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(57561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.UpperRightWidgetDataMessage", null, a), proto.webcast.im.UpperRightWidgetDataMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.UpperRightWidgetDataMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.UpperRightWidgetDataMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.UpperRightWidgetDataMessage.displayName = "proto.webcast.im.UpperRightWidgetDataMessage"), proto.webcast.im.UpperRightWidgetDataMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpperRightWidgetDataMessage.prototype.toObject = function (e) {
            return proto.webcast.im.UpperRightWidgetDataMessage.toObject(e, this)
        }, proto.webcast.im.UpperRightWidgetDataMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                upperRightWidgetDataListList: r.Message.toObjectList(t.getUpperRightWidgetDataListList(), n.UpperRightWidgetData.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.UpperRightWidgetDataMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.UpperRightWidgetDataMessage;
            return proto.webcast.im.UpperRightWidgetDataMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UpperRightWidgetDataMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.UpperRightWidgetData;
                        t.readMessage(o, n.UpperRightWidgetData.deserializeBinaryFromReader), e.addUpperRightWidgetDataList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UpperRightWidgetDataMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UpperRightWidgetDataMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getUpperRightWidgetDataListList()).length > 0 && t.writeRepeatedMessage(2, o, n.UpperRightWidgetData.serializeBinaryToWriter)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.getUpperRightWidgetDataListList = function () {
            return r.Message.getRepeatedWrapperField(this, n.UpperRightWidgetData, 2)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.setUpperRightWidgetDataListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.addUpperRightWidgetDataList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.UpperRightWidgetData, t)
        }, proto.webcast.im.UpperRightWidgetDataMessage.prototype.clearUpperRightWidgetDataListList = function () {
            return this.setUpperRightWidgetDataListList([])
        }, s.object.extend(t, proto.webcast.im)
    }, 92959: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(8411);
        s.object.extend(proto, i);
        var n = o(50684);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.UserPrivilegeChangeMessage", null, a), s.exportSymbol("proto.webcast.im.UserPrivilegeType", null, a), proto.webcast.im.UserPrivilegeChangeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.UserPrivilegeChangeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.UserPrivilegeChangeMessage.displayName = "proto.webcast.im.UserPrivilegeChangeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserPrivilegeChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.UserPrivilegeChangeMessage.toObject(e, this)
        }, proto.webcast.im.UserPrivilegeChangeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                userPrivilegeType: r.Message.getFieldWithDefault(t, 2, 0),
                userId: r.Message.getFieldWithDefault(t, 3, "0"),
                avatarBorder: (o = t.getAvatarBorder()) && i.Image.toObject(e, o),
                thumbAvatarBorder: (o = t.getThumbAvatarBorder()) && i.Image.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.UserPrivilegeChangeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.UserPrivilegeChangeMessage;
            return proto.webcast.im.UserPrivilegeChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UserPrivilegeChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setUserPrivilegeType(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 4:
                        o = new i.Image;
                        t.readMessage(o, i.Image.deserializeBinaryFromReader), e.setAvatarBorder(o);
                        break;
                    case 5:
                        o = new i.Image;
                        t.readMessage(o, i.Image.deserializeBinaryFromReader), e.setThumbAvatarBorder(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserPrivilegeChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UserPrivilegeChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getUserPrivilegeType()) && t.writeEnum(2, o), o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), null != (o = e.getAvatarBorder()) && t.writeMessage(4, o, i.Image.serializeBinaryToWriter), null != (o = e.getThumbAvatarBorder()) && t.writeMessage(5, o, i.Image.serializeBinaryToWriter)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.getUserPrivilegeType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.setUserPrivilegeType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.getAvatarBorder = function () {
            return r.Message.getWrapperField(this, i.Image, 4)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.setAvatarBorder = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.clearAvatarBorder = function () {
            return this.setAvatarBorder(undefined)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.hasAvatarBorder = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.getThumbAvatarBorder = function () {
            return r.Message.getWrapperField(this, i.Image, 5)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.setThumbAvatarBorder = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.clearThumbAvatarBorder = function () {
            return this.setThumbAvatarBorder(undefined)
        }, proto.webcast.im.UserPrivilegeChangeMessage.prototype.hasThumbAvatarBorder = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.UserPrivilegeType = {
            USERPRIVILEGETYPE_UNKNOWN: 0,
            USERPRIVILEGETYPE_AVATARBORDER: 1
        }, s.object.extend(t, proto.webcast.im)
    }, 47753: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.UserStatsMessage", null, a), proto.webcast.im.UserStatsMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.UserStatsMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.UserStatsMessage.displayName = "proto.webcast.im.UserStatsMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserStatsMessage.prototype.toObject = function (e) {
            return proto.webcast.im.UserStatsMessage.toObject(e, this)
        }, proto.webcast.im.UserStatsMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                content: r.Message.getFieldWithDefault(t, 2, ""),
                userId: r.Message.getFieldWithDefault(t, 3, "0"),
                actionType: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.UserStatsMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.UserStatsMessage;
            return proto.webcast.im.UserStatsMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UserStatsMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setActionType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UserStatsMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserStatsMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UserStatsMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getActionType(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.UserStatsMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.UserStatsMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.UserStatsMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.UserStatsMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.UserStatsMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.UserStatsMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.UserStatsMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.UserStatsMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.UserStatsMessage.prototype.getActionType = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.UserStatsMessage.prototype.setActionType = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 91630: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.VerificationCodeMessage", null, a), proto.webcast.im.VerificationCodeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VerificationCodeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VerificationCodeMessage.displayName = "proto.webcast.im.VerificationCodeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VerificationCodeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VerificationCodeMessage.toObject(e, this)
        }, proto.webcast.im.VerificationCodeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                id: r.Message.getFieldWithDefault(t, 2, "0"),
                duration: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VerificationCodeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VerificationCodeMessage;
            return proto.webcast.im.VerificationCodeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VerificationCodeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VerificationCodeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VerificationCodeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VerificationCodeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), o = e.getId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.VerificationCodeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VerificationCodeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VerificationCodeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VerificationCodeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VerificationCodeMessage.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.VerificationCodeMessage.prototype.setId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.VerificationCodeMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.VerificationCodeMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 6471: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(61230);
        s.object.extend(proto, n);
        var p = o(64925);
        s.object.extend(proto, p), s.exportSymbol("proto.webcast.im.VIPInfoMessage", null, a), s.exportSymbol("proto.webcast.im.VIPSeatMessage", null, a), proto.webcast.im.VIPInfoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VIPInfoMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VIPInfoMessage.displayName = "proto.webcast.im.VIPInfoMessage"), proto.webcast.im.VIPSeatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.VIPSeatMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.VIPSeatMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VIPSeatMessage.displayName = "proto.webcast.im.VIPSeatMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VIPInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VIPInfoMessage.toObject(e, this)
        }, proto.webcast.im.VIPInfoMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                userVipInfo: (o = t.getUserVipInfo()) && n.UserVIPInfo.toObject(e, o),
                action: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VIPInfoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VIPInfoMessage;
            return proto.webcast.im.VIPInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VIPInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.UserVIPInfo;
                        t.readMessage(o, n.UserVIPInfo.deserializeBinaryFromReader), e.setUserVipInfo(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setAction(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VIPInfoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VIPInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VIPInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getUserVipInfo()) && t.writeMessage(2, o, n.UserVIPInfo.serializeBinaryToWriter), o = e.getAction(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.VIPInfoMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VIPInfoMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VIPInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VIPInfoMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VIPInfoMessage.prototype.getUserVipInfo = function () {
            return r.Message.getWrapperField(this, n.UserVIPInfo, 2)
        }, proto.webcast.im.VIPInfoMessage.prototype.setUserVipInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.VIPInfoMessage.prototype.clearUserVipInfo = function () {
            return this.setUserVipInfo(undefined)
        }, proto.webcast.im.VIPInfoMessage.prototype.hasUserVipInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.VIPInfoMessage.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.VIPInfoMessage.prototype.setAction = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.VIPSeatMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VIPSeatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VIPSeatMessage.toObject(e, this)
        }, proto.webcast.im.VIPSeatMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                topUsersList: r.Message.toObjectList(t.getTopUsersList(), p.User.toObject, e),
                totalCount: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VIPSeatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VIPSeatMessage;
            return proto.webcast.im.VIPSeatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VIPSeatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new p.User;
                        t.readMessage(o, p.User.deserializeBinaryFromReader), e.addTopUsers(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setTotalCount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VIPSeatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VIPSeatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VIPSeatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getTopUsersList()).length > 0 && t.writeRepeatedMessage(2, o, p.User.serializeBinaryToWriter), o = e.getTotalCount(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.VIPSeatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VIPSeatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VIPSeatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VIPSeatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VIPSeatMessage.prototype.getTopUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, p.User, 2)
        }, proto.webcast.im.VIPSeatMessage.prototype.setTopUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.VIPSeatMessage.prototype.addTopUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.User, t)
        }, proto.webcast.im.VIPSeatMessage.prototype.clearTopUsersList = function () {
            return this.setTopUsersList([])
        }, proto.webcast.im.VIPSeatMessage.prototype.getTotalCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.VIPSeatMessage.prototype.setTotalCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 58205: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.VsInteractiveMessage", null, a), proto.webcast.im.VsInteractiveMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VsInteractiveMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VsInteractiveMessage.displayName = "proto.webcast.im.VsInteractiveMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VsInteractiveMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VsInteractiveMessage.toObject(e, this)
        }, proto.webcast.im.VsInteractiveMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                extra: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VsInteractiveMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VsInteractiveMessage;
            return proto.webcast.im.VsInteractiveMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VsInteractiveMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
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
        }, proto.webcast.im.VsInteractiveMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VsInteractiveMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VsInteractiveMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getExtra()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.VsInteractiveMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VsInteractiveMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VsInteractiveMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VsInteractiveMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VsInteractiveMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.VsInteractiveMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 58983: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(57561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.VSLinkRoomMessage", null, a), proto.webcast.im.VSLinkRoomMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VSLinkRoomMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VSLinkRoomMessage.displayName = "proto.webcast.im.VSLinkRoomMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VSLinkRoomMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VSLinkRoomMessage.toObject(e, this)
        }, proto.webcast.im.VSLinkRoomMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                linkInfo: (o = t.getLinkInfo()) && n.VSLinkInfo.toObject(e, o),
                allInfo: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                scatterTime: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VSLinkRoomMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VSLinkRoomMessage;
            return proto.webcast.im.VSLinkRoomMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VSLinkRoomMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.VSLinkInfo;
                        t.readMessage(o, n.VSLinkInfo.deserializeBinaryFromReader), e.setLinkInfo(o);
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
        }, proto.webcast.im.VSLinkRoomMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VSLinkRoomMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VSLinkRoomMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getLinkInfo()) && t.writeMessage(2, o, n.VSLinkInfo.serializeBinaryToWriter), (o = e.getAllInfo()) && t.writeBool(3, o), o = e.getScatterTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.getLinkInfo = function () {
            return r.Message.getWrapperField(this, n.VSLinkInfo, 2)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.setLinkInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.clearLinkInfo = function () {
            return this.setLinkInfo(undefined)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.hasLinkInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.getAllInfo = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.setAllInfo = function (e) {
            return r.Message.setProto3BooleanField(this, 3, e)
        }, proto.webcast.im.VSLinkRoomMessage.prototype.getScatterTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.VSLinkRoomMessage.prototype.setScatterTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 73429: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.VsPanelMessage", null, a), proto.webcast.im.VsPanelMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VsPanelMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VsPanelMessage.displayName = "proto.webcast.im.VsPanelMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VsPanelMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VsPanelMessage.toObject(e, this)
        }, proto.webcast.im.VsPanelMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                extra: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VsPanelMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VsPanelMessage;
            return proto.webcast.im.VsPanelMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VsPanelMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
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
        }, proto.webcast.im.VsPanelMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VsPanelMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VsPanelMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getExtra()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.VsPanelMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VsPanelMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VsPanelMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VsPanelMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VsPanelMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.VsPanelMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 63887: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(55703);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.WebcastBattleBonusMessage", null, a), s.exportSymbol("proto.webcast.im.WebcastBattleBonusMessage.MvpMessage", null, a), s.exportSymbol("proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage", null, a), proto.webcast.im.WebcastBattleBonusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.WebcastBattleBonusMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.WebcastBattleBonusMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastBattleBonusMessage.displayName = "proto.webcast.im.WebcastBattleBonusMessage"), proto.webcast.im.WebcastBattleBonusMessage.MvpMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WebcastBattleBonusMessage.MvpMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.displayName = "proto.webcast.im.WebcastBattleBonusMessage.MvpMessage"), proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.displayName = "proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage"), proto.webcast.im.WebcastBattleBonusMessage.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastBattleBonusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastBattleBonusMessage.toObject(e, this)
        }, proto.webcast.im.WebcastBattleBonusMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                mvpInfo: (o = t.getMvpInfo()) && proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.toObject(e, o),
                playerListList: r.Message.toObjectList(t.getPlayerListList(), proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.WebcastBattleBonusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastBattleBonusMessage;
            return proto.webcast.im.WebcastBattleBonusMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastBattleBonusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.WebcastBattleBonusMessage.MvpMessage;
                        t.readMessage(o, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.deserializeBinaryFromReader), e.setMvpInfo(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage;
                        t.readMessage(o, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.deserializeBinaryFromReader), e.addPlayerList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastBattleBonusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastBattleBonusMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getMvpInfo()) && t.writeMessage(2, o, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.serializeBinaryToWriter), (o = e.getPlayerListList()).length > 0 && t.writeRepeatedMessage(3, o, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.toObject(e, this)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.toObject = function (e, t) {
            var o, s = {
                userId: r.Message.getFieldWithDefault(t, 1, 0),
                userName: r.Message.getFieldWithDefault(t, 2, ""),
                propInfo: (o = t.getPropInfo()) && n.PropSummary.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastBattleBonusMessage.MvpMessage;
            return proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64();
                        e.setUserId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setUserName(o);
                        break;
                    case 3:
                        o = new n.PropSummary;
                        t.readMessage(o, n.PropSummary.deserializeBinaryFromReader), e.setPropInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getUserId()) && t.writeInt64(1, o), (o = e.getUserName()).length > 0 && t.writeString(2, o), null != (o = e.getPropInfo()) && t.writeMessage(3, o, n.PropSummary.serializeBinaryToWriter)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.getUserName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.setUserName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.getPropInfo = function () {
            return r.Message.getWrapperField(this, n.PropSummary, 3)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.setPropInfo = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.clearPropInfo = function () {
            return this.setPropInfo(undefined)
        }, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage.prototype.hasPropInfo = function () {
            return null != r.Message.getField(this, 3)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.toObject(e, this)
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.toObject = function (e, t) {
            var o = {
                userId: r.Message.getFieldWithDefault(t, 1, 0),
                userName: r.Message.getFieldWithDefault(t, 2, ""),
                diamondCount: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage;
            return proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64();
                        e.setUserId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setUserName(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDiamondCount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getUserId()) && t.writeInt64(1, o), (o = e.getUserName()).length > 0 && t.writeString(2, o), o = e.getDiamondCount(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.getUserName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.setUserName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage.prototype.setDiamondCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.getMvpInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.WebcastBattleBonusMessage.MvpMessage, 2)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.setMvpInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.clearMvpInfo = function () {
            return this.setMvpInfo(undefined)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.hasMvpInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.getPlayerListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage, 3)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.setPlayerListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.addPlayerList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.webcast.im.WebcastBattleBonusMessage.PlayerMessage, t)
        }, proto.webcast.im.WebcastBattleBonusMessage.prototype.clearPlayerListList = function () {
            return this.setPlayerListList([])
        }, s.object.extend(t, proto.webcast.im)
    }, 6863: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(55703);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.WebcastBattlePropertyMessage", null, a), s.exportSymbol("proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc", null, a), s.exportSymbol("proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc", null, a), proto.webcast.im.WebcastBattlePropertyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.WebcastBattlePropertyMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.WebcastBattlePropertyMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastBattlePropertyMessage.displayName = "proto.webcast.im.WebcastBattlePropertyMessage"), proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.displayName = "proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc"), proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.displayName = "proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc"), proto.webcast.im.WebcastBattlePropertyMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastBattlePropertyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastBattlePropertyMessage.toObject(e, this)
        }, proto.webcast.im.WebcastBattlePropertyMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                roomPropListList: r.Message.toObjectList(t.getRoomPropListList(), proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.WebcastBattlePropertyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastBattlePropertyMessage;
            return proto.webcast.im.WebcastBattlePropertyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastBattlePropertyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc;
                        t.readMessage(o, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.deserializeBinaryFromReader), e.addRoomPropList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastBattlePropertyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastBattlePropertyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getRoomPropListList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.serializeBinaryToWriter)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.toObject(e, this)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.toObject = function (e, t) {
            var o = {
                roomId: r.Message.getFieldWithDefault(t, 1, "0"),
                propDescListList: r.Message.toObjectList(t.getPropDescListList(), n.PropSummary.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc;
            return proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setRoomId(o);
                        break;
                    case 2:
                        o = new n.PropSummary;
                        t.readMessage(o, n.PropSummary.deserializeBinaryFromReader), e.addPropDescList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getRoomId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getPropDescListList()).length > 0 && t.writeRepeatedMessage(2, o, n.PropSummary.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.toObject(e, this)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.toObject = function (e, t) {
            var o, s = {
                propInfo: (o = t.getPropInfo()) && n.PropSummary.toObject(e, o),
                startTime: r.Message.getFieldWithDefault(t, 2, "0"),
                duration: r.Message.getFieldWithDefault(t, 3, "0"),
                fromUserId: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e),
                o = new proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc;
            return proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.PropSummary;
                        t.readMessage(o, n.PropSummary.deserializeBinaryFromReader), e.setPropInfo(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setFromUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getPropInfo()) && t.writeMessage(1, o, n.PropSummary.serializeBinaryToWriter), o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getFromUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.getPropInfo = function () {
            return r.Message.getWrapperField(this, n.PropSummary, 1)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.setPropInfo = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.clearPropInfo = function () {
            return this.setPropInfo(undefined)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.hasPropInfo = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.PropertyDesc.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.getPropDescListList = function () {
            return r.Message.getRepeatedWrapperField(this, n.PropSummary, 2)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.setPropDescListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.addPropDescList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.PropSummary, t)
        }, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc.prototype.clearPropDescListList = function () {
            return this.setPropDescListList([])
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.getRoomPropListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc, 2)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.setRoomPropListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.addRoomPropList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.WebcastBattlePropertyMessage.RoomPropDesc, t)
        }, proto.webcast.im.WebcastBattlePropertyMessage.prototype.clearRoomPropListList = function () {
            return this.setRoomPropListList([])
        }, s.object.extend(t, proto.webcast.im)
    }, 20841: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.InteractAppStatus", null, a), s.exportSymbol("proto.webcast.im.InteractOpenAppStatusMessage", null, a), proto.webcast.im.InteractOpenAppStatusMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.InteractOpenAppStatusMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenAppStatusMessage.displayName = "proto.webcast.im.InteractOpenAppStatusMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenAppStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenAppStatusMessage.toObject(e, this)
        }, proto.webcast.im.InteractOpenAppStatusMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                appId: r.Message.getFieldWithDefault(t, 2, ""),
                status: r.Message.getFieldWithDefault(t, 3, 0),
                displayText: r.Message.getFieldWithDefault(t, 4, ""),
                anchorText: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractOpenAppStatusMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenAppStatusMessage;
            return proto.webcast.im.InteractOpenAppStatusMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenAppStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setDisplayText(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setAnchorText(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenAppStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenAppStatusMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(2, o), 0 !== (o = e.getStatus()) && t.writeEnum(3, o), (o = e.getDisplayText()).length > 0 && t.writeString(4, o), (o = e.getAnchorText()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.getDisplayText = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.setDisplayText = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.getAnchorText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.InteractOpenAppStatusMessage.prototype.setAnchorText = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.InteractAppStatus = {
            UNKNOWNAPPSTATUS: 0,
            APPSTART: 1,
            APPSTOP: 2
        }, s.object.extend(t, proto.webcast.im)
    }, 99438: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(17164);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.InteractOpenChatMessage", null, a), s.exportSymbol("proto.webcast.im.InteractOpenChatMessage.ChatItem", null, a), proto.webcast.im.InteractOpenChatMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractOpenChatMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.InteractOpenChatMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenChatMessage.displayName = "proto.webcast.im.InteractOpenChatMessage"), proto.webcast.im.InteractOpenChatMessage.ChatItem = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractOpenChatMessage.ChatItem.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.InteractOpenChatMessage.ChatItem, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenChatMessage.ChatItem.displayName = "proto.webcast.im.InteractOpenChatMessage.ChatItem"), proto.webcast.im.InteractOpenChatMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenChatMessage.toObject(e, this)
        }, proto.webcast.im.InteractOpenChatMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                itemsList: r.Message.toObjectList(t.getItemsList(), proto.webcast.im.InteractOpenChatMessage.ChatItem.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractOpenChatMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenChatMessage;
            return proto.webcast.im.InteractOpenChatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.InteractOpenChatMessage.ChatItem;
                        t.readMessage(o, proto.webcast.im.InteractOpenChatMessage.ChatItem.deserializeBinaryFromReader), e.addItems(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenChatMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getItemsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.InteractOpenChatMessage.ChatItem.serializeBinaryToWriter)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenChatMessage.ChatItem.toObject(e, this)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.toObject = function (e, t) {
            var o = {
                appUserInfoList: r.Message.toObjectList(t.getAppUserInfoList(), n.AppUserInfo.toObject, e),
                secNickName: r.Message.getFieldWithDefault(t, 2, ""),
                secAvatarUrl: r.Message.getFieldWithDefault(t, 3, ""),
                content: r.Message.getFieldWithDefault(t, 4, ""),
                timestamp: r.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.InteractOpenChatMessage.ChatItem.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenChatMessage.ChatItem;
            return proto.webcast.im.InteractOpenChatMessage.ChatItem.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.AppUserInfo;
                        t.readMessage(o, n.AppUserInfo.deserializeBinaryFromReader), e.addAppUserInfo(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setSecNickName(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSecAvatarUrl(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setTimestamp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenChatMessage.ChatItem.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getAppUserInfoList()).length > 0 && t.writeRepeatedMessage(1, o, n.AppUserInfo.serializeBinaryToWriter), (o = e.getSecNickName()).length > 0 && t.writeString(2, o), (o = e.getSecAvatarUrl()).length > 0 && t.writeString(3, o), (o = e.getContent()).length > 0 && t.writeString(4, o), 0 !== (o = e.getTimestamp()) && t.writeInt32(5, o)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.getAppUserInfoList = function () {
            return r.Message.getRepeatedWrapperField(this, n.AppUserInfo, 1)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.setAppUserInfoList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.addAppUserInfo = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.AppUserInfo, t)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.clearAppUserInfoList = function () {
            return this.setAppUserInfoList([])
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.getSecNickName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.setSecNickName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.getSecAvatarUrl = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.setSecAvatarUrl = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.getTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.InteractOpenChatMessage.ChatItem.prototype.setTimestamp = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.getItemsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.InteractOpenChatMessage.ChatItem, 2)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.setItemsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.addItems = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.InteractOpenChatMessage.ChatItem, t)
        }, proto.webcast.im.InteractOpenChatMessage.prototype.clearItemsList = function () {
            return this.setItemsList([])
        }, s.object.extend(t, proto.webcast.im)
    }, 34660: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.InteractOpenDiamondMessage", null, a), proto.webcast.im.InteractOpenDiamondMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.InteractOpenDiamondMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenDiamondMessage.displayName = "proto.webcast.im.InteractOpenDiamondMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenDiamondMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenDiamondMessage.toObject(e, this)
        }, proto.webcast.im.InteractOpenDiamondMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                appId: r.Message.getFieldWithDefault(t, 2, ""),
                startId: r.Message.getFieldWithDefault(t, 3, "0"),
                diamonds: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractOpenDiamondMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenDiamondMessage;
            return proto.webcast.im.InteractOpenDiamondMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenDiamondMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setStartId(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setDiamonds(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenDiamondMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenDiamondMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(2, o), o = e.getStartId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), 0 !== (o = e.getDiamonds()) && t.writeInt32(4, o)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.getStartId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.setStartId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.getDiamonds = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.InteractOpenDiamondMessage.prototype.setDiamonds = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 44413: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(17164);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.InteractOpenFollowingMessage", null, a), s.exportSymbol("proto.webcast.im.InteractOpenFollowingMessage.FollowItem", null, a), proto.webcast.im.InteractOpenFollowingMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractOpenFollowingMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.InteractOpenFollowingMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenFollowingMessage.displayName = "proto.webcast.im.InteractOpenFollowingMessage"), proto.webcast.im.InteractOpenFollowingMessage.FollowItem = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.InteractOpenFollowingMessage.FollowItem, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenFollowingMessage.FollowItem.displayName = "proto.webcast.im.InteractOpenFollowingMessage.FollowItem"), proto.webcast.im.InteractOpenFollowingMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenFollowingMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenFollowingMessage.toObject(e, this)
        }, proto.webcast.im.InteractOpenFollowingMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                itemsList: r.Message.toObjectList(t.getItemsList(), proto.webcast.im.InteractOpenFollowingMessage.FollowItem.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractOpenFollowingMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenFollowingMessage;
            return proto.webcast.im.InteractOpenFollowingMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenFollowingMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.InteractOpenFollowingMessage.FollowItem;
                        t.readMessage(o, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.deserializeBinaryFromReader), e.addItems(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenFollowingMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenFollowingMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getItemsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.serializeBinaryToWriter)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenFollowingMessage.FollowItem.toObject(e, this)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.toObject = function (e, t) {
            var o = {
                appUserInfoList: r.Message.toObjectList(t.getAppUserInfoList(), n.AppUserInfo.toObject, e),
                secNickName: r.Message.getFieldWithDefault(t, 2, ""),
                secAvatarUrl: r.Message.getFieldWithDefault(t, 3, ""),
                action: r.Message.getFieldWithDefault(t, 4, 0),
                timestamp: r.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.InteractOpenFollowingMessage.FollowItem.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenFollowingMessage.FollowItem;
            return proto.webcast.im.InteractOpenFollowingMessage.FollowItem.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.AppUserInfo;
                        t.readMessage(o, n.AppUserInfo.deserializeBinaryFromReader), e.addAppUserInfo(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setSecNickName(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSecAvatarUrl(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setAction(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setTimestamp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenFollowingMessage.FollowItem.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getAppUserInfoList()).length > 0 && t.writeRepeatedMessage(1, o, n.AppUserInfo.serializeBinaryToWriter), (o = e.getSecNickName()).length > 0 && t.writeString(2, o), (o = e.getSecAvatarUrl()).length > 0 && t.writeString(3, o), 0 !== (o = e.getAction()) && t.writeInt32(4, o), 0 !== (o = e.getTimestamp()) && t.writeInt32(5, o)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.getAppUserInfoList = function () {
            return r.Message.getRepeatedWrapperField(this, n.AppUserInfo, 1)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.setAppUserInfoList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.addAppUserInfo = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.AppUserInfo, t)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.clearAppUserInfoList = function () {
            return this.setAppUserInfoList([])
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.getSecNickName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.setSecNickName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.getSecAvatarUrl = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.setSecAvatarUrl = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.setAction = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.getTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.InteractOpenFollowingMessage.FollowItem.prototype.setTimestamp = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.getItemsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.InteractOpenFollowingMessage.FollowItem, 2)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.setItemsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.addItems = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.InteractOpenFollowingMessage.FollowItem, t)
        }, proto.webcast.im.InteractOpenFollowingMessage.prototype.clearItemsList = function () {
            return this.setItemsList([])
        }, s.object.extend(t, proto.webcast.im)
    }, 83609: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.PerformanceFinishMessage", null, a), proto.webcast.im.PerformanceFinishMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.PerformanceFinishMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.PerformanceFinishMessage.displayName = "proto.webcast.im.PerformanceFinishMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PerformanceFinishMessage.prototype.toObject = function (e) {
            return proto.webcast.im.PerformanceFinishMessage.toObject(e, this)
        }, proto.webcast.im.PerformanceFinishMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                appId: r.Message.getFieldWithDefault(t, 2, ""),
                taskId: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.PerformanceFinishMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.PerformanceFinishMessage;
            return proto.webcast.im.PerformanceFinishMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.PerformanceFinishMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTaskId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PerformanceFinishMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PerformanceFinishMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PerformanceFinishMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(2, o), (o = e.getTaskId()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.PerformanceFinishMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.PerformanceFinishMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.PerformanceFinishMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.PerformanceFinishMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.PerformanceFinishMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.PerformanceFinishMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.PerformanceFinishMessage.prototype.getTaskId = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.PerformanceFinishMessage.prototype.setTaskId = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 52507: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.InteractOpenRewardMessage", null, a), proto.webcast.im.InteractOpenRewardMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.InteractOpenRewardMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenRewardMessage.displayName = "proto.webcast.im.InteractOpenRewardMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenRewardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenRewardMessage.toObject(e, this)
        }, proto.webcast.im.InteractOpenRewardMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                appId: r.Message.getFieldWithDefault(t, 2, ""),
                startId: r.Message.getFieldWithDefault(t, 3, "0"),
                rewardId: r.Message.getFieldWithDefault(t, 4, 0),
                rewardCount: r.Message.getFieldWithDefault(t, 5, 0),
                rewardDiamonds: r.Message.getFieldWithDefault(t, 6, 0),
                rewardName: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractOpenRewardMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenRewardMessage;
            return proto.webcast.im.InteractOpenRewardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenRewardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setStartId(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setRewardId(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setRewardCount(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setRewardDiamonds(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setRewardName(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenRewardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenRewardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(2, o), o = e.getStartId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), 0 !== (o = e.getRewardId()) && t.writeInt32(4, o), 0 !== (o = e.getRewardCount()) && t.writeInt32(5, o), 0 !== (o = e.getRewardDiamonds()) && t.writeInt32(6, o), (o = e.getRewardName()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getStartId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setStartId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getRewardId = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setRewardId = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getRewardCount = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setRewardCount = function (e) {
            return r.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getRewardDiamonds = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setRewardDiamonds = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.getRewardName = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.InteractOpenRewardMessage.prototype.setRewardName = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 8465: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.InteractScreenshotMessage", null, a), proto.webcast.im.InteractScreenshotMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.InteractScreenshotMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractScreenshotMessage.displayName = "proto.webcast.im.InteractScreenshotMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractScreenshotMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractScreenshotMessage.toObject(e, this)
        }, proto.webcast.im.InteractScreenshotMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                appId: r.Message.getFieldWithDefault(t, 2, ""),
                recallId: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractScreenshotMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractScreenshotMessage;
            return proto.webcast.im.InteractScreenshotMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractScreenshotMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setRecallId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractScreenshotMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractScreenshotMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractScreenshotMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(2, o), o = e.getRecallId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.InteractScreenshotMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractScreenshotMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractScreenshotMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractScreenshotMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractScreenshotMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractScreenshotMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractScreenshotMessage.prototype.getRecallId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.InteractScreenshotMessage.prototype.setRecallId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 20396: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.InteractOpenViolationMessage", null, a), s.exportSymbol("proto.webcast.im.ViolationType", null, a), proto.webcast.im.InteractOpenViolationMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.InteractOpenViolationMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.InteractOpenViolationMessage.displayName = "proto.webcast.im.InteractOpenViolationMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractOpenViolationMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractOpenViolationMessage.toObject(e, this)
        }, proto.webcast.im.InteractOpenViolationMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                roomId: r.Message.getFieldWithDefault(t, 2, ""),
                appId: r.Message.getFieldWithDefault(t, 3, ""),
                violationType: r.Message.getFieldWithDefault(t, 4, 0),
                anchorTipsTitle: r.Message.getFieldWithDefault(t, 5, ""),
                anchorTipsContent: r.Message.getFieldWithDefault(t, 6, ""),
                audienceTipsTitle: r.Message.getFieldWithDefault(t, 7, ""),
                audienceTipsContent: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.InteractOpenViolationMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractOpenViolationMessage;
            return proto.webcast.im.InteractOpenViolationMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractOpenViolationMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setRoomId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 4:
                        o = t.readEnum();
                        e.setViolationType(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setAnchorTipsTitle(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setAnchorTipsContent(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setAudienceTipsTitle(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setAudienceTipsContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractOpenViolationMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractOpenViolationMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), (o = e.getRoomId()).length > 0 && t.writeString(2, o), (o = e.getAppId()).length > 0 && t.writeString(3, o), 0 !== (o = e.getViolationType()) && t.writeEnum(4, o), (o = e.getAnchorTipsTitle()).length > 0 && t.writeString(5, o), (o = e.getAnchorTipsContent()).length > 0 && t.writeString(6, o), (o = e.getAudienceTipsTitle()).length > 0 && t.writeString(7, o), (o = e.getAudienceTipsContent()).length > 0 && t.writeString(8, o)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setAppId = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getViolationType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setViolationType = function (e) {
            return r.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getAnchorTipsTitle = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setAnchorTipsTitle = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getAnchorTipsContent = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setAnchorTipsContent = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getAudienceTipsTitle = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setAudienceTipsTitle = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.getAudienceTipsContent = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.InteractOpenViolationMessage.prototype.setAudienceTipsContent = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.ViolationType = {
            UNKNOWNVIOLATIONTYPE: 0,
            ANCHORINDUCE: 1,
            APPVIOLATION: 2
        }, s.object.extend(t, proto.webcast.im)
    }, 89026: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i), s.exportSymbol("proto.webcast.im.WebcastPopularCardMessage", null, a), s.exportSymbol("proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo", null, a), proto.webcast.im.WebcastPopularCardMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WebcastPopularCardMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastPopularCardMessage.displayName = "proto.webcast.im.WebcastPopularCardMessage"), proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.displayName = "proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastPopularCardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastPopularCardMessage.toObject(e, this)
        }, proto.webcast.im.WebcastPopularCardMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                popularCardInfo: (o = t.getPopularCardInfo()) && proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.WebcastPopularCardMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastPopularCardMessage;
            return proto.webcast.im.WebcastPopularCardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastPopularCardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo;
                        t.readMessage(o, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.deserializeBinaryFromReader), e.setPopularCardInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastPopularCardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastPopularCardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getPopularCardInfo()) && t.writeMessage(2, o, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.toObject = function (e) {
            return proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.toObject(e, this)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.toObject = function (e, t) {
            var o = {
                status: r.Message.getFieldWithDefault(t, 1, 0),
                startTime: r.Message.getFieldWithDefault(t, 2, "0"),
                endTime: r.Message.getFieldWithDefault(t, 3, "0"),
                enterNumber: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo;
            return proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt32();
                        e.setStatus(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setEndTime(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setEnterNumber(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getStatus()) && t.writeInt32(1, o), o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getEndTime(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), 0 !== (o = e.getEnterNumber()) && t.writeInt32(4, o)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.setStatus = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.getEndTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.setEndTime = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.getEnterNumber = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo.prototype.setEnterNumber = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.getPopularCardInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.WebcastPopularCardMessage.PopularCardInfo, 2)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.setPopularCardInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.clearPopularCardInfo = function () {
            return this.setPopularCardInfo(undefined)
        }, proto.webcast.im.WebcastPopularCardMessage.prototype.hasPopularCardInfo = function () {
            return null != r.Message.getField(this, 2)
        }, s.object.extend(t, proto.webcast.im)
    }, 88393: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(57561);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.WelfareProjectOperateMessage", null, a), proto.webcast.im.WelfareProjectOperateMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WelfareProjectOperateMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WelfareProjectOperateMessage.displayName = "proto.webcast.im.WelfareProjectOperateMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WelfareProjectOperateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WelfareProjectOperateMessage.toObject(e, this)
        }, proto.webcast.im.WelfareProjectOperateMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                opType: r.Message.getFieldWithDefault(t, 2, "0"),
                project: (o = t.getProject()) && n.WelfareProjectInfo.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.WelfareProjectOperateMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WelfareProjectOperateMessage;
            return proto.webcast.im.WelfareProjectOperateMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WelfareProjectOperateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setOpType(o);
                        break;
                    case 3:
                        o = new n.WelfareProjectInfo;
                        t.readMessage(o, n.WelfareProjectInfo.deserializeBinaryFromReader), e.setProject(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WelfareProjectOperateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WelfareProjectOperateMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), o = e.getOpType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), null != (o = e.getProject()) && t.writeMessage(3, o, n.WelfareProjectInfo.serializeBinaryToWriter)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.getOpType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.setOpType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.getProject = function () {
            return r.Message.getWrapperField(this, n.WelfareProjectInfo, 3)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.setProject = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.clearProject = function () {
            return this.setProject(undefined)
        }, proto.webcast.im.WelfareProjectOperateMessage.prototype.hasProject = function () {
            return null != r.Message.getField(this, 3)
        }, s.object.extend(t, proto.webcast.im)
    }, 50154: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(8411);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.WishFinishMessage", null, a), proto.webcast.im.WishFinishMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.WishFinishMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.WishFinishMessage.displayName = "proto.webcast.im.WishFinishMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WishFinishMessage.prototype.toObject = function (e) {
            return proto.webcast.im.WishFinishMessage.toObject(e, this)
        }, proto.webcast.im.WishFinishMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                gestureImageSingle: (o = t.getGestureImageSingle()) && n.Image.toObject(e, o),
                gestureImageDouble: (o = t.getGestureImageDouble()) && n.Image.toObject(e, o),
                displaySeconds: r.Message.getFieldWithDefault(t, 4, "0"),
                effectId: r.Message.getFieldWithDefault(t, 5, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.WishFinishMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.WishFinishMessage;
            return proto.webcast.im.WishFinishMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.WishFinishMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setGestureImageSingle(o);
                        break;
                    case 3:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setGestureImageDouble(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDisplaySeconds(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setEffectId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.WishFinishMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.WishFinishMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.WishFinishMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getGestureImageSingle()) && t.writeMessage(2, o, n.Image.serializeBinaryToWriter), null != (o = e.getGestureImageDouble()) && t.writeMessage(3, o, n.Image.serializeBinaryToWriter), o = e.getDisplaySeconds(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getEffectId(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o)
        }, proto.webcast.im.WishFinishMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.WishFinishMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.WishFinishMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.WishFinishMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.WishFinishMessage.prototype.getGestureImageSingle = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.WishFinishMessage.prototype.setGestureImageSingle = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.WishFinishMessage.prototype.clearGestureImageSingle = function () {
            return this.setGestureImageSingle(undefined)
        }, proto.webcast.im.WishFinishMessage.prototype.hasGestureImageSingle = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.WishFinishMessage.prototype.getGestureImageDouble = function () {
            return r.Message.getWrapperField(this, n.Image, 3)
        }, proto.webcast.im.WishFinishMessage.prototype.setGestureImageDouble = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.WishFinishMessage.prototype.clearGestureImageDouble = function () {
            return this.setGestureImageDouble(undefined)
        }, proto.webcast.im.WishFinishMessage.prototype.hasGestureImageDouble = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.WishFinishMessage.prototype.getDisplaySeconds = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.WishFinishMessage.prototype.setDisplaySeconds = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.WishFinishMessage.prototype.getEffectId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.WishFinishMessage.prototype.setEffectId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 74845: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = o(50684);
        s.object.extend(proto, i);
        var n = o(64925);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.VideoLiveCouponRcmdMessage", null, a), s.exportSymbol("proto.webcast.im.VideoLiveGoodsOrderMessage", null, a), s.exportSymbol("proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder", null, a), s.exportSymbol("proto.webcast.im.VideoLiveGoodsRcmdMessage", null, a), proto.webcast.im.VideoLiveGoodsRcmdMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VideoLiveGoodsRcmdMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VideoLiveGoodsRcmdMessage.displayName = "proto.webcast.im.VideoLiveGoodsRcmdMessage"), proto.webcast.im.VideoLiveCouponRcmdMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VideoLiveCouponRcmdMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VideoLiveCouponRcmdMessage.displayName = "proto.webcast.im.VideoLiveCouponRcmdMessage"), proto.webcast.im.VideoLiveGoodsOrderMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VideoLiveGoodsOrderMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VideoLiveGoodsOrderMessage.displayName = "proto.webcast.im.VideoLiveGoodsOrderMessage"), proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.displayName = "proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VideoLiveGoodsRcmdMessage.toObject(e, this)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                rcmdGoodsId: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VideoLiveGoodsRcmdMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoLiveGoodsRcmdMessage;
            return proto.webcast.im.VideoLiveGoodsRcmdMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRcmdGoodsId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoLiveGoodsRcmdMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), o = e.getRcmdGoodsId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.getRcmdGoodsId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.VideoLiveGoodsRcmdMessage.prototype.setRcmdGoodsId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VideoLiveCouponRcmdMessage.toObject(e, this)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                rcmdCouponId: r.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.VideoLiveCouponRcmdMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoLiveCouponRcmdMessage;
            return proto.webcast.im.VideoLiveCouponRcmdMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRcmdCouponId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoLiveCouponRcmdMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), o = e.getRcmdCouponId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.getRcmdCouponId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.VideoLiveCouponRcmdMessage.prototype.setRcmdCouponId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.toObject = function (e) {
            return proto.webcast.im.VideoLiveGoodsOrderMessage.toObject(e, this)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && i.Common.toObject(e, o),
                user: (o = t.getUser()) && n.User.toObject(e, o),
                goodsOrder: (o = t.getGoodsOrder()) && proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.VideoLiveGoodsOrderMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoLiveGoodsOrderMessage;
            return proto.webcast.im.VideoLiveGoodsOrderMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Common;
                        t.readMessage(o, i.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.User;
                        t.readMessage(o, n.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder;
                        t.readMessage(o, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.deserializeBinaryFromReader), e.setGoodsOrder(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoLiveGoodsOrderMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, i.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, n.User.serializeBinaryToWriter), null != (o = e.getGoodsOrder()) && t.writeMessage(3, o, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.toObject = function (e) {
            return proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.toObject(e, this)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.toObject = function (e, t) {
            var o = {
                goodsRoomOrder: r.Message.getFieldWithDefault(t, 1, "0"),
                orderNum: r.Message.getFieldWithDefault(t, 2, "0"),
                orderMoney: r.Message.getFieldWithDefault(t, 3, "0"),
                orderId: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder;
            return proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGoodsRoomOrder(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setOrderNum(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setOrderMoney(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setOrderId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getGoodsRoomOrder(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getOrderNum(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getOrderMoney(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getOrderId()).length > 0 && t.writeString(4, o)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.getGoodsRoomOrder = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.setGoodsRoomOrder = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.getOrderNum = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.setOrderNum = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.getOrderMoney = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.setOrderMoney = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.getOrderId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder.prototype.setOrderId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, i.Common, 1)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 2)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.getGoodsOrder = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.VideoLiveGoodsOrderMessage.GoodsOrder, 3)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.setGoodsOrder = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.clearGoodsOrder = function () {
            return this.setGoodsOrder(undefined)
        }, proto.webcast.im.VideoLiveGoodsOrderMessage.prototype.hasGoodsOrder = function () {
            return null != r.Message.getField(this, 3)
        }, s.object.extend(t, proto.webcast.im)
    }, 61565: function (e, t, o) {
        var r = o(47865), s = r, a = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        s.exportSymbol("proto.google.protobuf.Any", null, a), proto.google.protobuf.Any = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.google.protobuf.Any, r.Message), s.DEBUG && !COMPILED && (proto.google.protobuf.Any.displayName = "proto.google.protobuf.Any"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.Any.prototype.toObject = function (e) {
            return proto.google.protobuf.Any.toObject(e, this)
        }, proto.google.protobuf.Any.toObject = function (e, t) {
            var o = {typeUrl: r.Message.getFieldWithDefault(t, 1, ""), value: t.getValue_asB64()};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.google.protobuf.Any.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.google.protobuf.Any;
            return proto.google.protobuf.Any.deserializeBinaryFromReader(o, t)
        }, proto.google.protobuf.Any.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setTypeUrl(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setValue(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.google.protobuf.Any.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.Any.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.google.protobuf.Any.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getTypeUrl()).length > 0 && t.writeString(1, o), (o = e.getValue_asU8()).length > 0 && t.writeBytes(2, o)
        }, proto.google.protobuf.Any.prototype.getTypeUrl = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.google.protobuf.Any.prototype.setTypeUrl = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.google.protobuf.Any.prototype.getValue = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.google.protobuf.Any.prototype.getValue_asB64 = function () {
            return r.Message.bytesAsB64(this.getValue())
        }, proto.google.protobuf.Any.prototype.getValue_asU8 = function () {
            return r.Message.bytesAsU8(this.getValue())
        }, proto.google.protobuf.Any.prototype.setValue = function (e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, s.object.extend(t, proto.google.protobuf), proto.google.protobuf.Any.prototype.getTypeName = function () {
            return this.getTypeUrl().split("/").pop()
        }, proto.google.protobuf.Any.prototype.pack = function (e, t, o) {
            o || (o = "type.googleapis.com/"), "/" != o.substr(-1) ? this.setTypeUrl(o + "/" + t) : this.setTypeUrl(o + t), this.setValue(e)
        }, proto.google.protobuf.Any.prototype.unpack = function (e, t) {
            return this.getTypeName() == t ? e(this.getValue_asU8()) : null
        }
    }
}]);