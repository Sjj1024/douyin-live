(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[912], {
    14750: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.QuickComment", null, i), r.exportSymbol("proto.webcast.im.Word", null, i), proto.webcast.im.Word = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.Word, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.Word.displayName = "proto.webcast.im.Word"), proto.webcast.im.QuickComment = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.QuickComment.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.QuickComment, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuickComment.displayName = "proto.webcast.im.QuickComment"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Word.prototype.toObject = function (e) {
            return proto.webcast.im.Word.toObject(e, this)
        }, proto.webcast.im.Word.toObject = function (e, t) {
            var o = {content: s.Message.getFieldWithDefault(t, 1, "")};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.Word.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.Word;
            return proto.webcast.im.Word.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.Word.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setContent(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.Word.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.Word.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.Word.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getContent()).length > 0 && t.writeString(1, o)
        }, proto.webcast.im.Word.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.Word.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.QuickComment.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuickComment.prototype.toObject = function (e) {
            return proto.webcast.im.QuickComment.toObject(e, this)
        }, proto.webcast.im.QuickComment.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                wordsList: s.Message.toObjectList(t.getWordsList(), proto.webcast.im.Word.toObject, e),
                duration: s.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuickComment.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuickComment;
            return proto.webcast.im.QuickComment.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuickComment.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.Word;
                        t.readMessage(o, proto.webcast.im.Word.deserializeBinaryFromReader), e.addWords(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setDuration(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuickComment.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuickComment.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuickComment.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getWordsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.Word.serializeBinaryToWriter), 0 !== (o = e.getDuration()) && t.writeInt32(3, o)
        }, proto.webcast.im.QuickComment.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.QuickComment.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuickComment.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuickComment.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuickComment.prototype.getWordsList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.Word, 2)
        }, proto.webcast.im.QuickComment.prototype.setWordsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.QuickComment.prototype.addWords = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.Word, t)
        }, proto.webcast.im.QuickComment.prototype.clearWordsList = function () {
            return this.setWordsList([])
        }, proto.webcast.im.QuickComment.prototype.getDuration = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.QuickComment.prototype.setDuration = function (e) {
            return s.Message.setProto3IntField(this, 3, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 8141: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(99222);
        r.object.extend(proto, a);
        var n = o(56082);
        r.object.extend(proto, n);
        var c = o(50684);
        r.object.extend(proto, c), r.exportSymbol("proto.webcast.im.QuizChangeData", null, i), r.exportSymbol("proto.webcast.im.QuizChangeMessage", null, i), r.exportSymbol("proto.webcast.im.QuizResult", null, i), r.exportSymbol("proto.webcast.im.QuizResultMessage", null, i), r.exportSymbol("proto.webcast.im.QuizStartMessage", null, i), proto.webcast.im.QuizStartMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.QuizStartMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizStartMessage.displayName = "proto.webcast.im.QuizStartMessage"), proto.webcast.im.QuizResult = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.QuizResult, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizResult.displayName = "proto.webcast.im.QuizResult"), proto.webcast.im.QuizResultMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.QuizResultMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizResultMessage.displayName = "proto.webcast.im.QuizResultMessage"), proto.webcast.im.QuizChangeData = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.QuizChangeData.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.QuizChangeData, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizChangeData.displayName = "proto.webcast.im.QuizChangeData"), proto.webcast.im.QuizChangeMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.QuizChangeMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.QuizChangeMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizChangeMessage.displayName = "proto.webcast.im.QuizChangeMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizStartMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizStartMessage.toObject(e, this)
        }, proto.webcast.im.QuizStartMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                displayText: (o = t.getDisplayText()) && a.Text.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.QuizStartMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizStartMessage;
            return proto.webcast.im.QuizStartMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizStartMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setDisplayText(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizStartMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizStartMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizStartMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), null != (o = e.getDisplayText()) && t.writeMessage(2, o, a.Text.serializeBinaryToWriter)
        }, proto.webcast.im.QuizStartMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.QuizStartMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizStartMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizStartMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizStartMessage.prototype.getDisplayText = function () {
            return s.Message.getWrapperField(this, a.Text, 2)
        }, proto.webcast.im.QuizStartMessage.prototype.setDisplayText = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.QuizStartMessage.prototype.clearDisplayText = function () {
            return this.setDisplayText(undefined)
        }, proto.webcast.im.QuizStartMessage.prototype.hasDisplayText = function () {
            return null != s.Message.getField(this, 2)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizResult.prototype.toObject = function (e) {
            return proto.webcast.im.QuizResult.toObject(e, this)
        }, proto.webcast.im.QuizResult.toObject = function (e, t) {
            var o, r = {
                title: s.Message.getFieldWithDefault(t, 1, ""),
                result: (o = t.getResult()) && a.Text.toObject(e, o),
                gain: (o = t.getGain()) && a.Text.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuizResult.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizResult;
            return proto.webcast.im.QuizResult.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizResult.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setTitle(o);
                        break;
                    case 2:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setResult(o);
                        break;
                    case 3:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setGain(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizResult.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizResult.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizResult.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getTitle()).length > 0 && t.writeString(1, o), null != (o = e.getResult()) && t.writeMessage(2, o, a.Text.serializeBinaryToWriter), null != (o = e.getGain()) && t.writeMessage(3, o, a.Text.serializeBinaryToWriter)
        }, proto.webcast.im.QuizResult.prototype.getTitle = function () {
            return s.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.QuizResult.prototype.setTitle = function (e) {
            return s.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.QuizResult.prototype.getResult = function () {
            return s.Message.getWrapperField(this, a.Text, 2)
        }, proto.webcast.im.QuizResult.prototype.setResult = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.QuizResult.prototype.clearResult = function () {
            return this.setResult(undefined)
        }, proto.webcast.im.QuizResult.prototype.hasResult = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.QuizResult.prototype.getGain = function () {
            return s.Message.getWrapperField(this, a.Text, 3)
        }, proto.webcast.im.QuizResult.prototype.setGain = function (e) {
            return s.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.QuizResult.prototype.clearGain = function () {
            return this.setGain(undefined)
        }, proto.webcast.im.QuizResult.prototype.hasGain = function () {
            return null != s.Message.getField(this, 3)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizResultMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizResultMessage.toObject(e, this)
        }, proto.webcast.im.QuizResultMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                quizResult: (o = t.getQuizResult()) && proto.webcast.im.QuizResult.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.QuizResultMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizResultMessage;
            return proto.webcast.im.QuizResultMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizResultMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.QuizResult;
                        t.readMessage(o, proto.webcast.im.QuizResult.deserializeBinaryFromReader), e.setQuizResult(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizResultMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizResultMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizResultMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), null != (o = e.getQuizResult()) && t.writeMessage(3, o, proto.webcast.im.QuizResult.serializeBinaryToWriter)
        }, proto.webcast.im.QuizResultMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.QuizResultMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizResultMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizResultMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizResultMessage.prototype.getQuizResult = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.QuizResult, 3)
        }, proto.webcast.im.QuizResultMessage.prototype.setQuizResult = function (e) {
            return s.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.QuizResultMessage.prototype.clearQuizResult = function () {
            return this.setQuizResult(undefined)
        }, proto.webcast.im.QuizResultMessage.prototype.hasQuizResult = function () {
            return null != s.Message.getField(this, 3)
        }, proto.webcast.im.QuizChangeData.repeatedFields_ = [4], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizChangeData.prototype.toObject = function (e) {
            return proto.webcast.im.QuizChangeData.toObject(e, this)
        }, proto.webcast.im.QuizChangeData.toObject = function (e, t) {
            var o = {
                quizId: s.Message.getFieldWithDefault(t, 1, "0"),
                status: s.Message.getFieldWithDefault(t, 2, "0"),
                optionsList: s.Message.toObjectList(t.getOptionsList(), n.BetOption.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.QuizChangeData.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizChangeData;
            return proto.webcast.im.QuizChangeData.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizChangeData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setQuizId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setStatus(o);
                        break;
                    case 4:
                        o = new n.BetOption;
                        t.readMessage(o, n.BetOption.deserializeBinaryFromReader), e.addOptions(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizChangeData.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizChangeData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizChangeData.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getQuizId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getStatus(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getOptionsList()).length > 0 && t.writeRepeatedMessage(4, o, n.BetOption.serializeBinaryToWriter)
        }, proto.webcast.im.QuizChangeData.prototype.getQuizId = function () {
            return s.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.QuizChangeData.prototype.setQuizId = function (e) {
            return s.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.QuizChangeData.prototype.getStatus = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.QuizChangeData.prototype.setStatus = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.QuizChangeData.prototype.getOptionsList = function () {
            return s.Message.getRepeatedWrapperField(this, n.BetOption, 4)
        }, proto.webcast.im.QuizChangeData.prototype.setOptionsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.QuizChangeData.prototype.addOptions = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.data.BetOption, t)
        }, proto.webcast.im.QuizChangeData.prototype.clearOptionsList = function () {
            return this.setOptionsList([])
        }, proto.webcast.im.QuizChangeMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizChangeMessage.toObject(e, this)
        }, proto.webcast.im.QuizChangeMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                quizChangeDataList: s.Message.toObjectList(t.getQuizChangeDataList(), proto.webcast.im.QuizChangeData.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuizChangeMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizChangeMessage;
            return proto.webcast.im.QuizChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.QuizChangeData;
                        t.readMessage(o, proto.webcast.im.QuizChangeData.deserializeBinaryFromReader), e.addQuizChangeData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizChangeMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), (o = e.getQuizChangeDataList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.QuizChangeData.serializeBinaryToWriter)
        }, proto.webcast.im.QuizChangeMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.QuizChangeMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizChangeMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizChangeMessage.prototype.getQuizChangeDataList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.QuizChangeData, 2)
        }, proto.webcast.im.QuizChangeMessage.prototype.setQuizChangeDataList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.QuizChangeMessage.prototype.addQuizChangeData = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.QuizChangeData, t)
        }, proto.webcast.im.QuizChangeMessage.prototype.clearQuizChangeDataList = function () {
            return this.setQuizChangeDataList([])
        }, r.object.extend(t, proto.webcast.im)
    }, 69993: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(56082);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.AllQuizInfo", null, i), r.exportSymbol("proto.webcast.im.QuizAnchorStatusMessage", null, i), r.exportSymbol("proto.webcast.im.QuizAudienceStatusMessage", null, i), r.exportSymbol("proto.webcast.im.QuizBeginMessage", null, i), r.exportSymbol("proto.webcast.im.QuizBetMessage", null, i), r.exportSymbol("proto.webcast.im.QuizStatus", null, i), proto.webcast.im.AllQuizInfo = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.AllQuizInfo, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.AllQuizInfo.displayName = "proto.webcast.im.AllQuizInfo"), proto.webcast.im.QuizBeginMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.QuizBeginMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.QuizBeginMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizBeginMessage.displayName = "proto.webcast.im.QuizBeginMessage"), proto.webcast.im.QuizBetMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.QuizBetMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizBetMessage.displayName = "proto.webcast.im.QuizBetMessage"), proto.webcast.im.QuizAnchorStatusMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.QuizAnchorStatusMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.QuizAnchorStatusMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizAnchorStatusMessage.displayName = "proto.webcast.im.QuizAnchorStatusMessage"), proto.webcast.im.QuizAudienceStatusMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.QuizAudienceStatusMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.QuizAudienceStatusMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.QuizAudienceStatusMessage.displayName = "proto.webcast.im.QuizAudienceStatusMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AllQuizInfo.prototype.toObject = function (e) {
            return proto.webcast.im.AllQuizInfo.toObject(e, this)
        }, proto.webcast.im.AllQuizInfo.toObject = function (e, t) {
            var o = {
                id: s.Message.getFieldWithDefault(t, 1, "0"),
                title: s.Message.getFieldWithDefault(t, 2, ""),
                starttime: s.Message.getFieldWithDefault(t, 3, "0"),
                duration: s.Message.getFieldWithDefault(t, 4, "0"),
                status: s.Message.getFieldWithDefault(t, 5, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AllQuizInfo.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.AllQuizInfo;
            return proto.webcast.im.AllQuizInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AllQuizInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setStarttime(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setStatus(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AllQuizInfo.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.AllQuizInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AllQuizInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getTitle()).length > 0 && t.writeString(2, o), o = e.getStarttime(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getStatus(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o)
        }, proto.webcast.im.AllQuizInfo.prototype.getId = function () {
            return s.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.AllQuizInfo.prototype.setId = function (e) {
            return s.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.AllQuizInfo.prototype.getTitle = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.AllQuizInfo.prototype.setTitle = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.AllQuizInfo.prototype.getStarttime = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.AllQuizInfo.prototype.setStarttime = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.AllQuizInfo.prototype.getDuration = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.AllQuizInfo.prototype.setDuration = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.AllQuizInfo.prototype.getStatus = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.AllQuizInfo.prototype.setStatus = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.QuizBeginMessage.repeatedFields_ = [4], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizBeginMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizBeginMessage.toObject(e, this)
        }, proto.webcast.im.QuizBeginMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                quizid: s.Message.getFieldWithDefault(t, 2, "0"),
                status: s.Message.getFieldWithDefault(t, 3, 0),
                quizinfosList: s.Message.toObjectList(t.getQuizinfosList(), proto.webcast.im.AllQuizInfo.toObject, e),
                errorcode: s.Message.getFieldWithDefault(t, 5, "0"),
                extra: s.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuizBeginMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizBeginMessage;
            return proto.webcast.im.QuizBeginMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizBeginMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setQuizid(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.AllQuizInfo;
                        t.readMessage(o, proto.webcast.im.AllQuizInfo.deserializeBinaryFromReader), e.addQuizinfos(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setErrorcode(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizBeginMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizBeginMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizBeginMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getQuizid(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getStatus()) && t.writeEnum(3, o), (o = e.getQuizinfosList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.AllQuizInfo.serializeBinaryToWriter), o = e.getErrorcode(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getExtra()).length > 0 && t.writeString(6, o)
        }, proto.webcast.im.QuizBeginMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.QuizBeginMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizBeginMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizBeginMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizBeginMessage.prototype.getQuizid = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.QuizBeginMessage.prototype.setQuizid = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.QuizBeginMessage.prototype.getStatus = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.QuizBeginMessage.prototype.setStatus = function (e) {
            return s.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.QuizBeginMessage.prototype.getQuizinfosList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.AllQuizInfo, 4)
        }, proto.webcast.im.QuizBeginMessage.prototype.setQuizinfosList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.QuizBeginMessage.prototype.addQuizinfos = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.AllQuizInfo, t)
        }, proto.webcast.im.QuizBeginMessage.prototype.clearQuizinfosList = function () {
            return this.setQuizinfosList([])
        }, proto.webcast.im.QuizBeginMessage.prototype.getErrorcode = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.QuizBeginMessage.prototype.setErrorcode = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.QuizBeginMessage.prototype.getExtra = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.QuizBeginMessage.prototype.setExtra = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizBetMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizBetMessage.toObject(e, this)
        }, proto.webcast.im.QuizBetMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                quizId: s.Message.getFieldWithDefault(t, 2, "0"),
                optionMoneyMap: (o = t.getOptionMoneyMap()) ? o.toObject(e, undefined) : []
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuizBetMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizBetMessage;
            return proto.webcast.im.QuizBetMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizBetMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setQuizId(o);
                        break;
                    case 3:
                        o = e.getOptionMoneyMap();
                        t.readMessage(o, (function (e, t) {
                            s.Map.deserializeBinary(e, t, s.BinaryReader.prototype.readInt64, s.BinaryReader.prototype.readInt64, null, 0, 0)
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizBetMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizBetMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizBetMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getQuizId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getOptionMoneyMap(!0)) && o.getLength() > 0 && o.serializeBinary(3, t, s.BinaryWriter.prototype.writeInt64, s.BinaryWriter.prototype.writeInt64)
        }, proto.webcast.im.QuizBetMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.QuizBetMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizBetMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizBetMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizBetMessage.prototype.getQuizId = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.QuizBetMessage.prototype.setQuizId = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.QuizBetMessage.prototype.getOptionMoneyMap = function (e) {
            return s.Message.getMapField(this, 3, e, null)
        }, proto.webcast.im.QuizBetMessage.prototype.clearOptionMoneyMap = function () {
            return this.getOptionMoneyMap().clear(), this
        }, proto.webcast.im.QuizAnchorStatusMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizAnchorStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizAnchorStatusMessage.toObject(e, this)
        }, proto.webcast.im.QuizAnchorStatusMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                itemsList: s.Message.toObjectList(t.getItemsList(), n.AnchorHistoryItem.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuizAnchorStatusMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizAnchorStatusMessage;
            return proto.webcast.im.QuizAnchorStatusMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizAnchorStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.AnchorHistoryItem;
                        t.readMessage(o, n.AnchorHistoryItem.deserializeBinaryFromReader), e.addItems(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizAnchorStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizAnchorStatusMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getItemsList()).length > 0 && t.writeRepeatedMessage(2, o, n.AnchorHistoryItem.serializeBinaryToWriter)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.getItemsList = function () {
            return s.Message.getRepeatedWrapperField(this, n.AnchorHistoryItem, 2)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.setItemsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.addItems = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.AnchorHistoryItem, t)
        }, proto.webcast.im.QuizAnchorStatusMessage.prototype.clearItemsList = function () {
            return this.setItemsList([])
        }, proto.webcast.im.QuizAudienceStatusMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.QuizAudienceStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.QuizAudienceStatusMessage.toObject(e, this)
        }, proto.webcast.im.QuizAudienceStatusMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                quizListList: s.Message.toObjectList(t.getQuizListList(), n.Quiz.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.QuizAudienceStatusMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.QuizAudienceStatusMessage;
            return proto.webcast.im.QuizAudienceStatusMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.QuizAudienceStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.Quiz;
                        t.readMessage(o, n.Quiz.deserializeBinaryFromReader), e.addQuizList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.QuizAudienceStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.QuizAudienceStatusMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getQuizListList()).length > 0 && t.writeRepeatedMessage(2, o, n.Quiz.serializeBinaryToWriter)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.getQuizListList = function () {
            return s.Message.getRepeatedWrapperField(this, n.Quiz, 2)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.setQuizListList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.addQuizList = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.Quiz, t)
        }, proto.webcast.im.QuizAudienceStatusMessage.prototype.clearQuizListList = function () {
            return this.setQuizListList([])
        }, proto.webcast.im.QuizStatus = {OTHERSTATUS: 0, PASS: 1, NOPASS: 2},r.object.extend(t, proto.webcast.im)
    }, 29478: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(28798);
        r.object.extend(proto, n);
        var c = o(8411);
        r.object.extend(proto, c), r.exportSymbol("proto.webcast.im.RankListAwardMessage", null, i), proto.webcast.im.RankListAwardMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RankListAwardMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RankListAwardMessage.displayName = "proto.webcast.im.RankListAwardMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RankListAwardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RankListAwardMessage.toObject(e, this)
        }, proto.webcast.im.RankListAwardMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                assetId: s.Message.getFieldWithDefault(t, 2, "0"),
                effectOpen: s.Message.getBooleanFieldWithDefault(t, 3, !1),
                rankType: s.Message.getFieldWithDefault(t, 4, "0"),
                rank: s.Message.getFieldWithDefault(t, 5, "0"),
                starActivityGradeMedal: (o = t.getStarActivityGradeMedal()) && n.BattleStarActivityGradeMedal.toObject(e, o),
                schemeUrl: s.Message.getFieldWithDefault(t, 7, ""),
                assetImage: (o = t.getAssetImage()) && c.Image.toObject(e, o),
                playPriority: s.Message.getFieldWithDefault(t, 9, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RankListAwardMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RankListAwardMessage;
            return proto.webcast.im.RankListAwardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RankListAwardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setAssetId(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setEffectOpen(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setRankType(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setRank(o);
                        break;
                    case 6:
                        o = new n.BattleStarActivityGradeMedal;
                        t.readMessage(o, n.BattleStarActivityGradeMedal.deserializeBinaryFromReader), e.setStarActivityGradeMedal(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setSchemeUrl(o);
                        break;
                    case 8:
                        o = new c.Image;
                        t.readMessage(o, c.Image.deserializeBinaryFromReader), e.setAssetImage(o);
                        break;
                    case 9:
                        o = t.readInt32();
                        e.setPlayPriority(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RankListAwardMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RankListAwardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RankListAwardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getEffectOpen()) && t.writeBool(3, o), o = e.getRankType(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getRank(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getStarActivityGradeMedal()) && t.writeMessage(6, o, n.BattleStarActivityGradeMedal.serializeBinaryToWriter), (o = e.getSchemeUrl()).length > 0 && t.writeString(7, o), null != (o = e.getAssetImage()) && t.writeMessage(8, o, c.Image.serializeBinaryToWriter), 0 !== (o = e.getPlayPriority()) && t.writeInt32(9, o)
        }, proto.webcast.im.RankListAwardMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RankListAwardMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RankListAwardMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RankListAwardMessage.prototype.getAssetId = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.RankListAwardMessage.prototype.setAssetId = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.getEffectOpen = function () {
            return s.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.RankListAwardMessage.prototype.setEffectOpen = function (e) {
            return s.Message.setProto3BooleanField(this, 3, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.getRankType = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.RankListAwardMessage.prototype.setRankType = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.getRank = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.RankListAwardMessage.prototype.setRank = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.getStarActivityGradeMedal = function () {
            return s.Message.getWrapperField(this, n.BattleStarActivityGradeMedal, 6)
        }, proto.webcast.im.RankListAwardMessage.prototype.setStarActivityGradeMedal = function (e) {
            return s.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.clearStarActivityGradeMedal = function () {
            return this.setStarActivityGradeMedal(undefined)
        }, proto.webcast.im.RankListAwardMessage.prototype.hasStarActivityGradeMedal = function () {
            return null != s.Message.getField(this, 6)
        }, proto.webcast.im.RankListAwardMessage.prototype.getSchemeUrl = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.RankListAwardMessage.prototype.setSchemeUrl = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.getAssetImage = function () {
            return s.Message.getWrapperField(this, c.Image, 8)
        }, proto.webcast.im.RankListAwardMessage.prototype.setAssetImage = function (e) {
            return s.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.RankListAwardMessage.prototype.clearAssetImage = function () {
            return this.setAssetImage(undefined)
        }, proto.webcast.im.RankListAwardMessage.prototype.hasAssetImage = function () {
            return null != s.Message.getField(this, 8)
        }, proto.webcast.im.RankListAwardMessage.prototype.getPlayPriority = function () {
            return s.Message.getFieldWithDefault(this, 9, 0)
        }, proto.webcast.im.RankListAwardMessage.prototype.setPlayPriority = function (e) {
            return s.Message.setProto3IntField(this, 9, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 87929: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(9627);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.RankListHourEnterMessage", null, i), proto.webcast.im.RankListHourEnterMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RankListHourEnterMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RankListHourEnterMessage.displayName = "proto.webcast.im.RankListHourEnterMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RankListHourEnterMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RankListHourEnterMessage.toObject(e, this)
        }, proto.webcast.im.RankListHourEnterMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                hourEnterInfo: (o = t.getHourEnterInfo()) && n.RankEnterInfo.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.RankListHourEnterMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RankListHourEnterMessage;
            return proto.webcast.im.RankListHourEnterMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RankListHourEnterMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.RankEnterInfo;
                        t.readMessage(o, n.RankEnterInfo.deserializeBinaryFromReader), e.setHourEnterInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RankListHourEnterMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RankListHourEnterMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RankListHourEnterMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getHourEnterInfo()) && t.writeMessage(2, o, n.RankEnterInfo.serializeBinaryToWriter)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.getHourEnterInfo = function () {
            return s.Message.getWrapperField(this, n.RankEnterInfo, 2)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.setHourEnterInfo = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.clearHourEnterInfo = function () {
            return this.setHourEnterInfo(undefined)
        }, proto.webcast.im.RankListHourEnterMessage.prototype.hasHourEnterInfo = function () {
            return null != s.Message.getField(this, 2)
        }, r.object.extend(t, proto.webcast.im)
    }, 97805: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.CreateRedPacketMessage", null, i), r.exportSymbol("proto.webcast.im.RedPacket", null, i), r.exportSymbol("proto.webcast.im.RedPacketRushRecord", null, i), r.exportSymbol("proto.webcast.im.RushRedPacketMessage", null, i), proto.webcast.im.CreateRedPacketMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.CreateRedPacketMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.CreateRedPacketMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.CreateRedPacketMessage.displayName = "proto.webcast.im.CreateRedPacketMessage"), proto.webcast.im.RushRedPacketMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.RushRedPacketMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.RushRedPacketMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RushRedPacketMessage.displayName = "proto.webcast.im.RushRedPacketMessage"), proto.webcast.im.RedPacketRushRecord = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RedPacketRushRecord, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RedPacketRushRecord.displayName = "proto.webcast.im.RedPacketRushRecord"), proto.webcast.im.RedPacket = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RedPacket, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RedPacket.displayName = "proto.webcast.im.RedPacket"), proto.webcast.im.CreateRedPacketMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CreateRedPacketMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CreateRedPacketMessage.toObject(e, this)
        }, proto.webcast.im.CreateRedPacketMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                redPacketsList: s.Message.toObjectList(t.getRedPacketsList(), proto.webcast.im.RedPacket.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.CreateRedPacketMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.CreateRedPacketMessage;
            return proto.webcast.im.CreateRedPacketMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CreateRedPacketMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.RedPacket;
                        t.readMessage(o, proto.webcast.im.RedPacket.deserializeBinaryFromReader), e.addRedPackets(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CreateRedPacketMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.CreateRedPacketMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CreateRedPacketMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getRedPacketsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.RedPacket.serializeBinaryToWriter)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.getRedPacketsList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.RedPacket, 2)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.setRedPacketsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.addRedPackets = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.RedPacket, t)
        }, proto.webcast.im.CreateRedPacketMessage.prototype.clearRedPacketsList = function () {
            return this.setRedPacketsList([])
        }, proto.webcast.im.RushRedPacketMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RushRedPacketMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RushRedPacketMessage.toObject(e, this)
        }, proto.webcast.im.RushRedPacketMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                redPacketRushRecordsList: s.Message.toObjectList(t.getRedPacketRushRecordsList(), proto.webcast.im.RedPacketRushRecord.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RushRedPacketMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RushRedPacketMessage;
            return proto.webcast.im.RushRedPacketMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RushRedPacketMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.RedPacketRushRecord;
                        t.readMessage(o, proto.webcast.im.RedPacketRushRecord.deserializeBinaryFromReader), e.addRedPacketRushRecords(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RushRedPacketMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RushRedPacketMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RushRedPacketMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getRedPacketRushRecordsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.RedPacketRushRecord.serializeBinaryToWriter)
        }, proto.webcast.im.RushRedPacketMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.RushRedPacketMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RushRedPacketMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RushRedPacketMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RushRedPacketMessage.prototype.getRedPacketRushRecordsList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.RedPacketRushRecord, 2)
        }, proto.webcast.im.RushRedPacketMessage.prototype.setRedPacketRushRecordsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.RushRedPacketMessage.prototype.addRedPacketRushRecords = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.RedPacketRushRecord, t)
        }, proto.webcast.im.RushRedPacketMessage.prototype.clearRedPacketRushRecordsList = function () {
            return this.setRedPacketRushRecordsList([])
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RedPacketRushRecord.prototype.toObject = function (e) {
            return proto.webcast.im.RedPacketRushRecord.toObject(e, this)
        }, proto.webcast.im.RedPacketRushRecord.toObject = function (e, t) {
            var o = {
                redPacketGroupId: s.Message.getFieldWithDefault(t, 1, 0),
                userId: s.Message.getFieldWithDefault(t, 2, 0),
                userName: s.Message.getFieldWithDefault(t, 3, ""),
                bonusCount: s.Message.getFieldWithDefault(t, 4, 0),
                bonusType: s.Message.getFieldWithDefault(t, 5, 0),
                roomId: s.Message.getFieldWithDefault(t, 6, 0),
                imText: s.Message.getFieldWithDefault(t, 7, ""),
                createTime: s.Message.getFieldWithDefault(t, 8, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.RedPacketRushRecord.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RedPacketRushRecord;
            return proto.webcast.im.RedPacketRushRecord.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RedPacketRushRecord.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64();
                        e.setRedPacketGroupId(o);
                        break;
                    case 2:
                        o = t.readInt64();
                        e.setUserId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setUserName(o);
                        break;
                    case 4:
                        o = t.readInt64();
                        e.setBonusCount(o);
                        break;
                    case 5:
                        o = t.readInt64();
                        e.setBonusType(o);
                        break;
                    case 6:
                        o = t.readInt64();
                        e.setRoomId(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setImText(o);
                        break;
                    case 8:
                        o = t.readInt64();
                        e.setCreateTime(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RedPacketRushRecord.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RedPacketRushRecord.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RedPacketRushRecord.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getRedPacketGroupId()) && t.writeInt64(1, o), 0 !== (o = e.getUserId()) && t.writeInt64(2, o), (o = e.getUserName()).length > 0 && t.writeString(3, o), 0 !== (o = e.getBonusCount()) && t.writeInt64(4, o), 0 !== (o = e.getBonusType()) && t.writeInt64(5, o), 0 !== (o = e.getRoomId()) && t.writeInt64(6, o), (o = e.getImText()).length > 0 && t.writeString(7, o), 0 !== (o = e.getCreateTime()) && t.writeInt64(8, o)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getRedPacketGroupId = function () {
            return s.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.RedPacketRushRecord.prototype.setRedPacketGroupId = function (e) {
            return s.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getUserId = function () {
            return s.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.RedPacketRushRecord.prototype.setUserId = function (e) {
            return s.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getUserName = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RedPacketRushRecord.prototype.setUserName = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getBonusCount = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.RedPacketRushRecord.prototype.setBonusCount = function (e) {
            return s.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getBonusType = function () {
            return s.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.RedPacketRushRecord.prototype.setBonusType = function (e) {
            return s.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getRoomId = function () {
            return s.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.RedPacketRushRecord.prototype.setRoomId = function (e) {
            return s.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getImText = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.RedPacketRushRecord.prototype.setImText = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.RedPacketRushRecord.prototype.getCreateTime = function () {
            return s.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.RedPacketRushRecord.prototype.setCreateTime = function (e) {
            return s.Message.setProto3IntField(this, 8, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RedPacket.prototype.toObject = function (e) {
            return proto.webcast.im.RedPacket.toObject(e, this)
        }, proto.webcast.im.RedPacket.toObject = function (e, t) {
            var o, r = {
                redPacketGroupId: s.Message.getFieldWithDefault(t, 1, 0),
                bonusType: s.Message.getFieldWithDefault(t, 2, 0),
                comboCount: s.Message.getFieldWithDefault(t, 3, 0),
                bonusCount: s.Message.getFieldWithDefault(t, 4, 0),
                countDown: s.Message.getFieldWithDefault(t, 5, 0),
                rushTime: s.Message.getFieldWithDefault(t, 6, 0),
                iconUrl: s.Message.getFieldWithDefault(t, 7, ""),
                disappearTime: s.Message.getFieldWithDefault(t, 8, 0),
                owner: (o = t.getOwner()) && a.User.toObject(e, o),
                totalCountDown: s.Message.getFieldWithDefault(t, 10, 0),
                redPacketSource: s.Message.getFieldWithDefault(t, 11, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RedPacket.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RedPacket;
            return proto.webcast.im.RedPacket.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RedPacket.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64();
                        e.setRedPacketGroupId(o);
                        break;
                    case 2:
                        o = t.readInt64();
                        e.setBonusType(o);
                        break;
                    case 3:
                        o = t.readInt64();
                        e.setComboCount(o);
                        break;
                    case 4:
                        o = t.readInt64();
                        e.setBonusCount(o);
                        break;
                    case 5:
                        o = t.readInt64();
                        e.setCountDown(o);
                        break;
                    case 6:
                        o = t.readInt64();
                        e.setRushTime(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setIconUrl(o);
                        break;
                    case 8:
                        o = t.readInt64();
                        e.setDisappearTime(o);
                        break;
                    case 9:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setOwner(o);
                        break;
                    case 10:
                        o = t.readInt64();
                        e.setTotalCountDown(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setRedPacketSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RedPacket.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RedPacket.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RedPacket.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getRedPacketGroupId()) && t.writeInt64(1, o), 0 !== (o = e.getBonusType()) && t.writeInt64(2, o), 0 !== (o = e.getComboCount()) && t.writeInt64(3, o), 0 !== (o = e.getBonusCount()) && t.writeInt64(4, o), 0 !== (o = e.getCountDown()) && t.writeInt64(5, o), 0 !== (o = e.getRushTime()) && t.writeInt64(6, o), (o = e.getIconUrl()).length > 0 && t.writeString(7, o), 0 !== (o = e.getDisappearTime()) && t.writeInt64(8, o), null != (o = e.getOwner()) && t.writeMessage(9, o, a.User.serializeBinaryToWriter), 0 !== (o = e.getTotalCountDown()) && t.writeInt64(10, o), (o = e.getRedPacketSource()).length > 0 && t.writeString(11, o)
        }, proto.webcast.im.RedPacket.prototype.getRedPacketGroupId = function () {
            return s.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.RedPacket.prototype.setRedPacketGroupId = function (e) {
            return s.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.RedPacket.prototype.getBonusType = function () {
            return s.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.RedPacket.prototype.setBonusType = function (e) {
            return s.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.RedPacket.prototype.getComboCount = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.RedPacket.prototype.setComboCount = function (e) {
            return s.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.RedPacket.prototype.getBonusCount = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.RedPacket.prototype.setBonusCount = function (e) {
            return s.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.RedPacket.prototype.getCountDown = function () {
            return s.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.RedPacket.prototype.setCountDown = function (e) {
            return s.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.RedPacket.prototype.getRushTime = function () {
            return s.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.RedPacket.prototype.setRushTime = function (e) {
            return s.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.RedPacket.prototype.getIconUrl = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.RedPacket.prototype.setIconUrl = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.RedPacket.prototype.getDisappearTime = function () {
            return s.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.RedPacket.prototype.setDisappearTime = function (e) {
            return s.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.RedPacket.prototype.getOwner = function () {
            return s.Message.getWrapperField(this, a.User, 9)
        }, proto.webcast.im.RedPacket.prototype.setOwner = function (e) {
            return s.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.RedPacket.prototype.clearOwner = function () {
            return this.setOwner(undefined)
        }, proto.webcast.im.RedPacket.prototype.hasOwner = function () {
            return null != s.Message.getField(this, 9)
        }, proto.webcast.im.RedPacket.prototype.getTotalCountDown = function () {
            return s.Message.getFieldWithDefault(this, 10, 0)
        }, proto.webcast.im.RedPacket.prototype.setTotalCountDown = function (e) {
            return s.Message.setProto3IntField(this, 10, e)
        }, proto.webcast.im.RedPacket.prototype.getRedPacketSource = function () {
            return s.Message.getFieldWithDefault(this, 11, "")
        }, proto.webcast.im.RedPacket.prototype.setRedPacketSource = function (e) {
            return s.Message.setProto3StringField(this, 11, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 12020: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.PushRoomAdCard", null, i), proto.webcast.im.PushRoomAdCard = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.PushRoomAdCard, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.PushRoomAdCard.displayName = "proto.webcast.im.PushRoomAdCard"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PushRoomAdCard.prototype.toObject = function (e) {
            return proto.webcast.im.PushRoomAdCard.toObject(e, this)
        }, proto.webcast.im.PushRoomAdCard.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                actionContent: s.Message.getFieldWithDefault(t, 2, ""),
                content: s.Message.getFieldWithDefault(t, 3, ""),
                targetNum: s.Message.getFieldWithDefault(t, 4, "0"),
                showNum: s.Message.getFieldWithDefault(t, 5, "0"),
                isFinished: s.Message.getBooleanFieldWithDefault(t, 6, !1),
                adcardType: s.Message.getFieldWithDefault(t, 7, 0),
                hotvalue: s.Message.getFieldWithDefault(t, 8, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.PushRoomAdCard.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.PushRoomAdCard;
            return proto.webcast.im.PushRoomAdCard.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.PushRoomAdCard.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setActionContent(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setTargetNum(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setShowNum(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setIsFinished(o);
                        break;
                    case 7:
                        o = t.readInt32();
                        e.setAdcardType(o);
                        break;
                    case 8:
                        o = t.readInt32();
                        e.setHotvalue(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.PushRoomAdCard.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.PushRoomAdCard.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.PushRoomAdCard.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getActionContent()).length > 0 && t.writeString(2, o), (o = e.getContent()).length > 0 && t.writeString(3, o), o = e.getTargetNum(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getShowNum(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getIsFinished()) && t.writeBool(6, o), 0 !== (o = e.getAdcardType()) && t.writeInt32(7, o), 0 !== (o = e.getHotvalue()) && t.writeInt32(8, o)
        }, proto.webcast.im.PushRoomAdCard.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.PushRoomAdCard.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.PushRoomAdCard.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.PushRoomAdCard.prototype.getActionContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.PushRoomAdCard.prototype.setActionContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.PushRoomAdCard.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.getTargetNum = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.PushRoomAdCard.prototype.setTargetNum = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.getShowNum = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.PushRoomAdCard.prototype.setShowNum = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.getIsFinished = function () {
            return s.Message.getBooleanFieldWithDefault(this, 6, !1)
        }, proto.webcast.im.PushRoomAdCard.prototype.setIsFinished = function (e) {
            return s.Message.setProto3BooleanField(this, 6, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.getAdcardType = function () {
            return s.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.PushRoomAdCard.prototype.setAdcardType = function (e) {
            return s.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.PushRoomAdCard.prototype.getHotvalue = function () {
            return s.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.PushRoomAdCard.prototype.setHotvalue = function (e) {
            return s.Message.setProto3IntField(this, 8, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 97508: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.AnchorFaceConfig", null, i), r.exportSymbol("proto.webcast.im.RoomAppConfigMessage", null, i), proto.webcast.im.RoomAppConfigMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomAppConfigMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomAppConfigMessage.displayName = "proto.webcast.im.RoomAppConfigMessage"), proto.webcast.im.AnchorFaceConfig = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.AnchorFaceConfig, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.AnchorFaceConfig.displayName = "proto.webcast.im.AnchorFaceConfig"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomAppConfigMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomAppConfigMessage.toObject(e, this)
        }, proto.webcast.im.RoomAppConfigMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                anchorFaceConfig: (o = t.getAnchorFaceConfig()) && proto.webcast.im.AnchorFaceConfig.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.RoomAppConfigMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomAppConfigMessage;
            return proto.webcast.im.RoomAppConfigMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomAppConfigMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.AnchorFaceConfig;
                        t.readMessage(o, proto.webcast.im.AnchorFaceConfig.deserializeBinaryFromReader), e.setAnchorFaceConfig(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomAppConfigMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomAppConfigMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomAppConfigMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getAnchorFaceConfig()) && t.writeMessage(2, o, proto.webcast.im.AnchorFaceConfig.serializeBinaryToWriter)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.getAnchorFaceConfig = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.AnchorFaceConfig, 2)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.setAnchorFaceConfig = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.clearAnchorFaceConfig = function () {
            return this.setAnchorFaceConfig(undefined)
        }, proto.webcast.im.RoomAppConfigMessage.prototype.hasAnchorFaceConfig = function () {
            return null != s.Message.getField(this, 2)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnchorFaceConfig.prototype.toObject = function (e) {
            return proto.webcast.im.AnchorFaceConfig.toObject(e, this)
        }, proto.webcast.im.AnchorFaceConfig.toObject = function (e, t) {
            var o = {
                contourEnable: s.Message.getBooleanFieldWithDefault(t, 1, !1),
                frequency: s.Message.getFieldWithDefault(t, 2, "0"),
                userCount: s.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.AnchorFaceConfig.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.AnchorFaceConfig;
            return proto.webcast.im.AnchorFaceConfig.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AnchorFaceConfig.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBool();
                        e.setContourEnable(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setFrequency(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setUserCount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AnchorFaceConfig.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.AnchorFaceConfig.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AnchorFaceConfig.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getContourEnable()) && t.writeBool(1, o), o = e.getFrequency(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getUserCount(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.AnchorFaceConfig.prototype.getContourEnable = function () {
            return s.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.AnchorFaceConfig.prototype.setContourEnable = function (e) {
            return s.Message.setProto3BooleanField(this, 1, e)
        }, proto.webcast.im.AnchorFaceConfig.prototype.getFrequency = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.AnchorFaceConfig.prototype.setFrequency = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.AnchorFaceConfig.prototype.getUserCount = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.AnchorFaceConfig.prototype.setUserCount = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 36252: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomAuthInterventionVerifyMessage", null, i), proto.webcast.im.RoomAuthInterventionVerifyMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomAuthInterventionVerifyMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomAuthInterventionVerifyMessage.displayName = "proto.webcast.im.RoomAuthInterventionVerifyMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomAuthInterventionVerifyMessage.toObject(e, this)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                name: s.Message.getFieldWithDefault(t, 2, ""),
                status: s.Message.getFieldWithDefault(t, 3, 0),
                unablestyle: s.Message.getFieldWithDefault(t, 4, 0),
                content: s.Message.getFieldWithDefault(t, 5, ""),
                switchStatusTipMsg: s.Message.getFieldWithDefault(t, 6, ""),
                switchStatusAnchorTipMsg: s.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomAuthInterventionVerifyMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomAuthInterventionVerifyMessage;
            return proto.webcast.im.RoomAuthInterventionVerifyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setName(o);
                        break;
                    case 3:
                        o = t.readInt64();
                        e.setStatus(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setUnablestyle(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setSwitchStatusTipMsg(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setSwitchStatusAnchorTipMsg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomAuthInterventionVerifyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getName()).length > 0 && t.writeString(2, o), 0 !== (o = e.getStatus()) && t.writeInt64(3, o), 0 !== (o = e.getUnablestyle()) && t.writeInt32(4, o), (o = e.getContent()).length > 0 && t.writeString(5, o), (o = e.getSwitchStatusTipMsg()).length > 0 && t.writeString(6, o), (o = e.getSwitchStatusAnchorTipMsg()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getName = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setName = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getStatus = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setStatus = function (e) {
            return s.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getUnablestyle = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setUnablestyle = function (e) {
            return s.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getSwitchStatusTipMsg = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setSwitchStatusTipMsg = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.getSwitchStatusAnchorTipMsg = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.RoomAuthInterventionVerifyMessage.prototype.setSwitchStatusAnchorTipMsg = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 8923: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.RoomAuthMessage", null, i), proto.webcast.im.RoomAuthMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomAuthMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomAuthMessage.displayName = "proto.webcast.im.RoomAuthMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomAuthMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomAuthMessage.toObject(e, this)
        }, proto.webcast.im.RoomAuthMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                showUserCard: s.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomAuthMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomAuthMessage;
            return proto.webcast.im.RoomAuthMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomAuthMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setShowUserCard(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomAuthMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomAuthMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomAuthMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getShowUserCard()) && t.writeBool(2, o)
        }, proto.webcast.im.RoomAuthMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.RoomAuthMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomAuthMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomAuthMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomAuthMessage.prototype.getShowUserCard = function () {
            return s.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.RoomAuthMessage.prototype.setShowUserCard = function (e) {
            return s.Message.setProto3BooleanField(this, 2, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 33828: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(8411);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.RoomBackgroundMessage", null, i), proto.webcast.im.RoomBackgroundMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomBackgroundMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomBackgroundMessage.displayName = "proto.webcast.im.RoomBackgroundMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomBackgroundMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomBackgroundMessage.toObject(e, this)
        }, proto.webcast.im.RoomBackgroundMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                roomBackground: (o = t.getRoomBackground()) && n.Image.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.RoomBackgroundMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomBackgroundMessage;
            return proto.webcast.im.RoomBackgroundMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomBackgroundMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setRoomBackground(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomBackgroundMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomBackgroundMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomBackgroundMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getRoomBackground()) && t.writeMessage(2, o, n.Image.serializeBinaryToWriter)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.getRoomBackground = function () {
            return s.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.setRoomBackground = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.clearRoomBackground = function () {
            return this.setRoomBackground(undefined)
        }, proto.webcast.im.RoomBackgroundMessage.prototype.hasRoomBackground = function () {
            return null != s.Message.getField(this, 2)
        }, r.object.extend(t, proto.webcast.im)
    }, 74717: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.RoomBottomMessage", null, i), proto.webcast.im.RoomBottomMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomBottomMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomBottomMessage.displayName = "proto.webcast.im.RoomBottomMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomBottomMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomBottomMessage.toObject(e, this)
        }, proto.webcast.im.RoomBottomMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                color: s.Message.getFieldWithDefault(t, 3, ""),
                actionContent: s.Message.getFieldWithDefault(t, 6, ""),
                actionType: s.Message.getFieldWithDefault(t, 7, "0"),
                pushMessageDisplayTime: s.Message.getFieldWithDefault(t, 8, "0"),
                actionIcon: (o = t.getActionIcon()) && a.Image.toObject(e, o),
                newBackgroundImage: (o = t.getNewBackgroundImage()) && n.FlexImageStruct.toObject(e, o),
                source: s.Message.getFieldWithDefault(t, 12, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomBottomMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomBottomMessage;
            return proto.webcast.im.RoomBottomMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomBottomMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setColor(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setActionContent(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setActionType(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setPushMessageDisplayTime(o);
                        break;
                    case 10:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setActionIcon(o);
                        break;
                    case 11:
                        o = new n.FlexImageStruct;
                        t.readMessage(o, n.FlexImageStruct.deserializeBinaryFromReader), e.setNewBackgroundImage(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomBottomMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomBottomMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomBottomMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getColor()).length > 0 && t.writeString(3, o), (o = e.getActionContent()).length > 0 && t.writeString(6, o), o = e.getActionType(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), o = e.getPushMessageDisplayTime(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), null != (o = e.getActionIcon()) && t.writeMessage(10, o, a.Image.serializeBinaryToWriter), null != (o = e.getNewBackgroundImage()) && t.writeMessage(11, o, n.FlexImageStruct.serializeBinaryToWriter), (o = e.getSource()).length > 0 && t.writeString(12, o)
        }, proto.webcast.im.RoomBottomMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.RoomBottomMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomBottomMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomBottomMessage.prototype.getColor = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RoomBottomMessage.prototype.setColor = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.getActionContent = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.RoomBottomMessage.prototype.setActionContent = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.getActionType = function () {
            return s.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.RoomBottomMessage.prototype.setActionType = function (e) {
            return s.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.getPushMessageDisplayTime = function () {
            return s.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.RoomBottomMessage.prototype.setPushMessageDisplayTime = function (e) {
            return s.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.getActionIcon = function () {
            return s.Message.getWrapperField(this, a.Image, 10)
        }, proto.webcast.im.RoomBottomMessage.prototype.setActionIcon = function (e) {
            return s.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.clearActionIcon = function () {
            return this.setActionIcon(undefined)
        }, proto.webcast.im.RoomBottomMessage.prototype.hasActionIcon = function () {
            return null != s.Message.getField(this, 10)
        }, proto.webcast.im.RoomBottomMessage.prototype.getNewBackgroundImage = function () {
            return s.Message.getWrapperField(this, n.FlexImageStruct, 11)
        }, proto.webcast.im.RoomBottomMessage.prototype.setNewBackgroundImage = function (e) {
            return s.Message.setWrapperField(this, 11, e)
        }, proto.webcast.im.RoomBottomMessage.prototype.clearNewBackgroundImage = function () {
            return this.setNewBackgroundImage(undefined)
        }, proto.webcast.im.RoomBottomMessage.prototype.hasNewBackgroundImage = function () {
            return null != s.Message.getField(this, 11)
        }, proto.webcast.im.RoomBottomMessage.prototype.getSource = function () {
            return s.Message.getFieldWithDefault(this, 12, "")
        }, proto.webcast.im.RoomBottomMessage.prototype.setSource = function (e) {
            return s.Message.setProto3StringField(this, 12, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 49558: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomChallengeMessage", null, i), proto.webcast.im.RoomChallengeMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomChallengeMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomChallengeMessage.displayName = "proto.webcast.im.RoomChallengeMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChallengeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomChallengeMessage.toObject(e, this)
        }, proto.webcast.im.RoomChallengeMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                challengeInfo: s.Message.getFieldWithDefault(t, 2, ""),
                notifyType: s.Message.getFieldWithDefault(t, 3, "0"),
                toastContent: s.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomChallengeMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomChallengeMessage;
            return proto.webcast.im.RoomChallengeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomChallengeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setChallengeInfo(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setNotifyType(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setToastContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomChallengeMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomChallengeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomChallengeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getChallengeInfo()).length > 0 && t.writeString(2, o), o = e.getNotifyType(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getToastContent()).length > 0 && t.writeString(4, o)
        }, proto.webcast.im.RoomChallengeMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomChallengeMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomChallengeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomChallengeMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomChallengeMessage.prototype.getChallengeInfo = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomChallengeMessage.prototype.setChallengeInfo = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomChallengeMessage.prototype.getNotifyType = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.RoomChallengeMessage.prototype.setNotifyType = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.RoomChallengeMessage.prototype.getToastContent = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.RoomChallengeMessage.prototype.setToastContent = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 37347: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomConfigMessage", null, i), proto.webcast.im.RoomConfigMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomConfigMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomConfigMessage.displayName = "proto.webcast.im.RoomConfigMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomConfigMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomConfigMessage.toObject(e, this)
        }, proto.webcast.im.RoomConfigMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                configInfo: s.Message.getFieldWithDefault(t, 2, ""),
                configType: s.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomConfigMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomConfigMessage;
            return proto.webcast.im.RoomConfigMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomConfigMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setConfigInfo(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setConfigType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomConfigMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomConfigMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomConfigMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getConfigInfo()).length > 0 && t.writeString(2, o), o = e.getConfigType(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.RoomConfigMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomConfigMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomConfigMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomConfigMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomConfigMessage.prototype.getConfigInfo = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomConfigMessage.prototype.setConfigInfo = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomConfigMessage.prototype.getConfigType = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.RoomConfigMessage.prototype.setConfigType = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 15120: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomDataSyncMessage", null, i), proto.webcast.im.RoomDataSyncMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomDataSyncMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomDataSyncMessage.displayName = "proto.webcast.im.RoomDataSyncMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomDataSyncMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomDataSyncMessage.toObject(e, this)
        }, proto.webcast.im.RoomDataSyncMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                roomid: s.Message.getFieldWithDefault(t, 2, "0"),
                synckey: s.Message.getFieldWithDefault(t, 3, ""),
                version: s.Message.getFieldWithDefault(t, 4, "0"),
                payload: t.getPayload_asB64(),
                bizlogid: s.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomDataSyncMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomDataSyncMessage;
            return proto.webcast.im.RoomDataSyncMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomDataSyncMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRoomid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSynckey(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setVersion(o);
                        break;
                    case 5:
                        o = t.readBytes();
                        e.setPayload(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setBizlogid(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomDataSyncMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomDataSyncMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomDataSyncMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getRoomid(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getSynckey()).length > 0 && t.writeString(3, o), o = e.getVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getPayload_asU8()).length > 0 && t.writeBytes(5, o), (o = e.getBizlogid()).length > 0 && t.writeString(6, o)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getRoomid = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.RoomDataSyncMessage.prototype.setRoomid = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getSynckey = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RoomDataSyncMessage.prototype.setSynckey = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getVersion = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.RoomDataSyncMessage.prototype.setVersion = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getPayload = function () {
            return s.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getPayload_asB64 = function () {
            return s.Message.bytesAsB64(this.getPayload())
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getPayload_asU8 = function () {
            return s.Message.bytesAsU8(this.getPayload())
        }, proto.webcast.im.RoomDataSyncMessage.prototype.setPayload = function (e) {
            return s.Message.setProto3BytesField(this, 5, e)
        }, proto.webcast.im.RoomDataSyncMessage.prototype.getBizlogid = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.RoomDataSyncMessage.prototype.setBizlogid = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 78860: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomHotSentenceMessage", null, i), proto.webcast.im.RoomHotSentenceMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomHotSentenceMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomHotSentenceMessage.displayName = "proto.webcast.im.RoomHotSentenceMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomHotSentenceMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomHotSentenceMessage.toObject(e, this)
        }, proto.webcast.im.RoomHotSentenceMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                hotSentenceInfo: s.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomHotSentenceMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomHotSentenceMessage;
            return proto.webcast.im.RoomHotSentenceMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomHotSentenceMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setHotSentenceInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomHotSentenceMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomHotSentenceMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getHotSentenceInfo()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.getHotSentenceInfo = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomHotSentenceMessage.prototype.setHotSentenceInfo = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 81663: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomImgMessage", null, i), proto.webcast.im.RoomImgMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomImgMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomImgMessage.displayName = "proto.webcast.im.RoomImgMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomImgMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomImgMessage.toObject(e, this)
        }, proto.webcast.im.RoomImgMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                content: s.Message.getFieldWithDefault(t, 2, ""),
                action: s.Message.getFieldWithDefault(t, 3, "0"),
                bgImgUrl: s.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomImgMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomImgMessage;
            return proto.webcast.im.RoomImgMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomImgMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readInt64String();
                        e.setAction(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setBgImgUrl(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomImgMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomImgMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomImgMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), o = e.getAction(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getBgImgUrl()).length > 0 && t.writeString(4, o)
        }, proto.webcast.im.RoomImgMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomImgMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomImgMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomImgMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomImgMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomImgMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomImgMessage.prototype.getAction = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.RoomImgMessage.prototype.setAction = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.RoomImgMessage.prototype.getBgImgUrl = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.RoomImgMessage.prototype.setBgImgUrl = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 50102: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        r.object.extend(proto, a);
        var n = o(8411);
        r.object.extend(proto, n);
        var c = o(50684);
        r.object.extend(proto, c), r.exportSymbol("proto.webcast.im.RoomIntroMessage", null, i), proto.webcast.im.RoomIntroMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.RoomIntroMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.RoomIntroMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomIntroMessage.displayName = "proto.webcast.im.RoomIntroMessage"), proto.webcast.im.RoomIntroMessage.repeatedFields_ = [5], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomIntroMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomIntroMessage.toObject(e, this)
        }, proto.webcast.im.RoomIntroMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                style: s.Message.getFieldWithDefault(t, 3, "0"),
                intro: s.Message.getFieldWithDefault(t, 4, ""),
                labelList: null == (o = s.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomIntroMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomIntroMessage;
            return proto.webcast.im.RoomIntroMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomIntroMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readInt64String();
                        e.setStyle(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setIntro(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.addLabel(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomIntroMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomIntroMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomIntroMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), o = e.getStyle(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getIntro()).length > 0 && t.writeString(4, o), (o = e.getLabelList()).length > 0 && t.writeRepeatedString(5, o)
        }, proto.webcast.im.RoomIntroMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.RoomIntroMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomIntroMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomIntroMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomIntroMessage.prototype.getUser = function () {
            return s.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.RoomIntroMessage.prototype.setUser = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomIntroMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.RoomIntroMessage.prototype.hasUser = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.RoomIntroMessage.prototype.getStyle = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.RoomIntroMessage.prototype.setStyle = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.RoomIntroMessage.prototype.getIntro = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.RoomIntroMessage.prototype.setIntro = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.RoomIntroMessage.prototype.getLabelList = function () {
            return s.Message.getRepeatedField(this, 5)
        }, proto.webcast.im.RoomIntroMessage.prototype.setLabelList = function (e) {
            return s.Message.setField(this, 5, e || [])
        }, proto.webcast.im.RoomIntroMessage.prototype.addLabel = function (e, t) {
            return s.Message.addToRepeatedField(this, 5, e, t)
        }, proto.webcast.im.RoomIntroMessage.prototype.clearLabelList = function () {
            return this.setLabelList([])
        }, r.object.extend(t, proto.webcast.im)
    }, 40414: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.RoomManageMessage", null, i), proto.webcast.im.RoomManageMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomManageMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomManageMessage.displayName = "proto.webcast.im.RoomManageMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomManageMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomManageMessage.toObject(e, this)
        }, proto.webcast.im.RoomManageMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                action: s.Message.getFieldWithDefault(t, 3, "0"),
                memberCount: s.Message.getFieldWithDefault(t, 4, "0"),
                popularity: s.Message.getFieldWithDefault(t, 5, "0"),
                popularityStr: s.Message.getFieldWithDefault(t, 6, ""),
                deviceId: s.Message.getFieldWithDefault(t, 7, "0"),
                content: s.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomManageMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomManageMessage;
            return proto.webcast.im.RoomManageMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomManageMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readInt64String();
                        e.setAction(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setMemberCount(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setPopularity(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setPopularityStr(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setDeviceId(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomManageMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomManageMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomManageMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), o = e.getAction(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getMemberCount(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getPopularity(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getPopularityStr()).length > 0 && t.writeString(6, o), o = e.getDeviceId(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), (o = e.getContent()).length > 0 && t.writeString(8, o)
        }, proto.webcast.im.RoomManageMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.RoomManageMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomManageMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomManageMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomManageMessage.prototype.getUser = function () {
            return s.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.RoomManageMessage.prototype.setUser = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomManageMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.RoomManageMessage.prototype.hasUser = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.RoomManageMessage.prototype.getAction = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.RoomManageMessage.prototype.setAction = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.RoomManageMessage.prototype.getMemberCount = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.RoomManageMessage.prototype.setMemberCount = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.RoomManageMessage.prototype.getPopularity = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.RoomManageMessage.prototype.setPopularity = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.RoomManageMessage.prototype.getPopularityStr = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.RoomManageMessage.prototype.setPopularityStr = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.RoomManageMessage.prototype.getDeviceId = function () {
            return s.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.RoomManageMessage.prototype.setDeviceId = function (e) {
            return s.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.RoomManageMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.RoomManageMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 8, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 87276: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomMessage", null, i), r.exportSymbol("proto.webcast.im.RoomMsgTypeEnum", null, i), proto.webcast.im.RoomMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomMessage.displayName = "proto.webcast.im.RoomMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomMessage.toObject(e, this)
        }, proto.webcast.im.RoomMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                content: s.Message.getFieldWithDefault(t, 2, ""),
                supprotLandscape: s.Message.getBooleanFieldWithDefault(t, 3, !1),
                roommessagetype: s.Message.getFieldWithDefault(t, 4, 0),
                systemTopMsg: s.Message.getBooleanFieldWithDefault(t, 5, !1),
                forcedGuarantee: s.Message.getBooleanFieldWithDefault(t, 6, !1),
                bizScene: s.Message.getFieldWithDefault(t, 20, ""),
                buriedPointMap: (o = t.getBuriedPointMap()) ? o.toObject(e, undefined) : []
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomMessage;
            return proto.webcast.im.RoomMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readBool();
                        e.setSupprotLandscape(o);
                        break;
                    case 4:
                        o = t.readEnum();
                        e.setRoommessagetype(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setSystemTopMsg(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setForcedGuarantee(o);
                        break;
                    case 20:
                        o = t.readString();
                        e.setBizScene(o);
                        break;
                    case 30:
                        o = e.getBuriedPointMap();
                        t.readMessage(o, (function (e, t) {
                            s.Map.deserializeBinary(e, t, s.BinaryReader.prototype.readString, s.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), (o = e.getSupprotLandscape()) && t.writeBool(3, o), 0 !== (o = e.getRoommessagetype()) && t.writeEnum(4, o), (o = e.getSystemTopMsg()) && t.writeBool(5, o), (o = e.getForcedGuarantee()) && t.writeBool(6, o), (o = e.getBizScene()).length > 0 && t.writeString(20, o), (o = e.getBuriedPointMap(!0)) && o.getLength() > 0 && o.serializeBinary(30, t, s.BinaryWriter.prototype.writeString, s.BinaryWriter.prototype.writeString)
        }, proto.webcast.im.RoomMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomMessage.prototype.getSupprotLandscape = function () {
            return s.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.im.RoomMessage.prototype.setSupprotLandscape = function (e) {
            return s.Message.setProto3BooleanField(this, 3, e)
        }, proto.webcast.im.RoomMessage.prototype.getRoommessagetype = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.RoomMessage.prototype.setRoommessagetype = function (e) {
            return s.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.RoomMessage.prototype.getSystemTopMsg = function () {
            return s.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.RoomMessage.prototype.setSystemTopMsg = function (e) {
            return s.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.RoomMessage.prototype.getForcedGuarantee = function () {
            return s.Message.getBooleanFieldWithDefault(this, 6, !1)
        }, proto.webcast.im.RoomMessage.prototype.setForcedGuarantee = function (e) {
            return s.Message.setProto3BooleanField(this, 6, e)
        }, proto.webcast.im.RoomMessage.prototype.getBizScene = function () {
            return s.Message.getFieldWithDefault(this, 20, "")
        }, proto.webcast.im.RoomMessage.prototype.setBizScene = function (e) {
            return s.Message.setProto3StringField(this, 20, e)
        }, proto.webcast.im.RoomMessage.prototype.getBuriedPointMap = function (e) {
            return s.Message.getMapField(this, 30, e, null)
        }, proto.webcast.im.RoomMessage.prototype.clearBuriedPointMap = function () {
            return this.getBuriedPointMap().clear(), this
        }, proto.webcast.im.RoomMsgTypeEnum = {
            DEFAULTROOMMSG: 0,
            ECOMLIVEREPLAYSAVEROOMMSG: 1,
            CONSUMERRELATIONROOMMSG: 2,
            JUMANJIDATAAUTHNOTIFYMSG: 3,
            VSWELCOMEMSG: 4,
            MINORREFUNDMSG: 5,
            PAIDLIVEROOMNOTIFYANCHORMSG: 6,
            HOSTTEAMSYSTEMMSG: 7
        }, r.object.extend(t, proto.webcast.im)
    }, 4693: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.InstationPushType", null, i), r.exportSymbol("proto.webcast.im.RoomStartMessage", null, i), proto.webcast.im.RoomStartMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomStartMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomStartMessage.displayName = "proto.webcast.im.RoomStartMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomStartMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomStartMessage.toObject(e, this)
        }, proto.webcast.im.RoomStartMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                content: s.Message.getFieldWithDefault(t, 2, ""),
                imageUrl: s.Message.getFieldWithDefault(t, 3, ""),
                instationPushType: s.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomStartMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomStartMessage;
            return proto.webcast.im.RoomStartMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomStartMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readString();
                        e.setImageUrl(o);
                        break;
                    case 4:
                        o = t.readEnum();
                        e.setInstationPushType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomStartMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomStartMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomStartMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), (o = e.getImageUrl()).length > 0 && t.writeString(3, o), 0 !== (o = e.getInstationPushType()) && t.writeEnum(4, o)
        }, proto.webcast.im.RoomStartMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomStartMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomStartMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomStartMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomStartMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomStartMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomStartMessage.prototype.getImageUrl = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RoomStartMessage.prototype.setImageUrl = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RoomStartMessage.prototype.getInstationPushType = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.RoomStartMessage.prototype.setInstationPushType = function (e) {
            return s.Message.setProto3EnumField(this, 4, e)
        }, proto.webcast.im.InstationPushType = {UNKNOWN: 0, FOLLOW: 1, VIDEO: 2}, r.object.extend(t, proto.webcast.im)
    }, 1462: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomStatsMessage", null, i), proto.webcast.im.RoomStatsMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomStatsMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomStatsMessage.displayName = "proto.webcast.im.RoomStatsMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomStatsMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomStatsMessage.toObject(e, this)
        }, proto.webcast.im.RoomStatsMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                displayShort: s.Message.getFieldWithDefault(t, 2, ""),
                displayMiddle: s.Message.getFieldWithDefault(t, 3, ""),
                displayLong: s.Message.getFieldWithDefault(t, 4, ""),
                displayValue: s.Message.getFieldWithDefault(t, 5, "0"),
                displayVersion: s.Message.getFieldWithDefault(t, 6, "0"),
                incremental: s.Message.getBooleanFieldWithDefault(t, 7, !1),
                isHidden: s.Message.getBooleanFieldWithDefault(t, 8, !1),
                total: s.Message.getFieldWithDefault(t, 9, "0"),
                displayType: s.Message.getFieldWithDefault(t, 10, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomStatsMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomStatsMessage;
            return proto.webcast.im.RoomStatsMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomStatsMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setDisplayShort(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setDisplayMiddle(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setDisplayLong(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setDisplayValue(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setDisplayVersion(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setIncremental(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setIsHidden(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setTotal(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setDisplayType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomStatsMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomStatsMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomStatsMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getDisplayShort()).length > 0 && t.writeString(2, o), (o = e.getDisplayMiddle()).length > 0 && t.writeString(3, o), (o = e.getDisplayLong()).length > 0 && t.writeString(4, o), o = e.getDisplayValue(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getDisplayVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getIncremental()) && t.writeBool(7, o), (o = e.getIsHidden()) && t.writeBool(8, o), o = e.getTotal(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o), o = e.getDisplayType(), 0 !== parseInt(o, 10) && t.writeInt64String(10, o)
        }, proto.webcast.im.RoomStatsMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomStatsMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomStatsMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomStatsMessage.prototype.getDisplayShort = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.RoomStatsMessage.prototype.setDisplayShort = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getDisplayMiddle = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RoomStatsMessage.prototype.setDisplayMiddle = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getDisplayLong = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.RoomStatsMessage.prototype.setDisplayLong = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getDisplayValue = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.RoomStatsMessage.prototype.setDisplayValue = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getDisplayVersion = function () {
            return s.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.RoomStatsMessage.prototype.setDisplayVersion = function (e) {
            return s.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getIncremental = function () {
            return s.Message.getBooleanFieldWithDefault(this, 7, !1)
        }, proto.webcast.im.RoomStatsMessage.prototype.setIncremental = function (e) {
            return s.Message.setProto3BooleanField(this, 7, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getIsHidden = function () {
            return s.Message.getBooleanFieldWithDefault(this, 8, !1)
        }, proto.webcast.im.RoomStatsMessage.prototype.setIsHidden = function (e) {
            return s.Message.setProto3BooleanField(this, 8, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getTotal = function () {
            return s.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.im.RoomStatsMessage.prototype.setTotal = function (e) {
            return s.Message.setProto3StringIntField(this, 9, e)
        }, proto.webcast.im.RoomStatsMessage.prototype.getDisplayType = function () {
            return s.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.RoomStatsMessage.prototype.setDisplayType = function (e) {
            return s.Message.setProto3StringIntField(this, 10, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 81496: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomTicketMessage", null, i), proto.webcast.im.RoomTicketMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomTicketMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomTicketMessage.displayName = "proto.webcast.im.RoomTicketMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomTicketMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomTicketMessage.toObject(e, this)
        }, proto.webcast.im.RoomTicketMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                actionType: s.Message.getFieldWithDefault(t, 2, 0),
                lastDuration: s.Message.getFieldWithDefault(t, 3, 0),
                ticketId: s.Message.getFieldWithDefault(t, 4, "0"),
                ticketExplanationCardJumpUrl: s.Message.getFieldWithDefault(t, 5, ""),
                ticketPanelJumpUrl: s.Message.getFieldWithDefault(t, 6, ""),
                ticketPanel6JumpUrl: s.Message.getFieldWithDefault(t, 7, ""),
                ticketPanel9JumpUrl: s.Message.getFieldWithDefault(t, 8, ""),
                ownerId: s.Message.getFieldWithDefault(t, 9, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomTicketMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomTicketMessage;
            return proto.webcast.im.RoomTicketMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomTicketMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setActionType(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setLastDuration(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setTicketId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setTicketExplanationCardJumpUrl(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setTicketPanelJumpUrl(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setTicketPanel6JumpUrl(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setTicketPanel9JumpUrl(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setOwnerId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomTicketMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomTicketMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomTicketMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getActionType()) && t.writeInt32(2, o), 0 !== (o = e.getLastDuration()) && t.writeInt32(3, o), o = e.getTicketId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getTicketExplanationCardJumpUrl()).length > 0 && t.writeString(5, o), (o = e.getTicketPanelJumpUrl()).length > 0 && t.writeString(6, o), (o = e.getTicketPanel6JumpUrl()).length > 0 && t.writeString(7, o), (o = e.getTicketPanel9JumpUrl()).length > 0 && t.writeString(8, o), o = e.getOwnerId(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o)
        }, proto.webcast.im.RoomTicketMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomTicketMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomTicketMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomTicketMessage.prototype.getActionType = function () {
            return s.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.RoomTicketMessage.prototype.setActionType = function (e) {
            return s.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getLastDuration = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.RoomTicketMessage.prototype.setLastDuration = function (e) {
            return s.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getTicketId = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.RoomTicketMessage.prototype.setTicketId = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getTicketExplanationCardJumpUrl = function () {
            return s.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.RoomTicketMessage.prototype.setTicketExplanationCardJumpUrl = function (e) {
            return s.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getTicketPanelJumpUrl = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.RoomTicketMessage.prototype.setTicketPanelJumpUrl = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getTicketPanel6JumpUrl = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.RoomTicketMessage.prototype.setTicketPanel6JumpUrl = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getTicketPanel9JumpUrl = function () {
            return s.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.RoomTicketMessage.prototype.setTicketPanel9JumpUrl = function (e) {
            return s.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.RoomTicketMessage.prototype.getOwnerId = function () {
            return s.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.im.RoomTicketMessage.prototype.setOwnerId = function (e) {
            return s.Message.setProto3StringIntField(this, 9, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 75282: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        r.object.extend(proto, a);
        var n = o(99222);
        r.object.extend(proto, n);
        var c = o(50684);
        r.object.extend(proto, c), r.exportSymbol("proto.webcast.im.Background", null, i), r.exportSymbol("proto.webcast.im.RoomTopMessage", null, i), proto.webcast.im.RoomTopMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomTopMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomTopMessage.displayName = "proto.webcast.im.RoomTopMessage"), proto.webcast.im.Background = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.Background, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.Background.displayName = "proto.webcast.im.Background"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomTopMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomTopMessage.toObject(e, this)
        }, proto.webcast.im.RoomTopMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                actionIcon: (o = t.getActionIcon()) && a.Image.toObject(e, o),
                background: (o = t.getBackground()) && proto.webcast.im.Background.toObject(e, o),
                foldDuration: s.Message.getFieldWithDefault(t, 4, "0"),
                displayDuration: s.Message.getFieldWithDefault(t, 5, "0"),
                firstTitle: (o = t.getFirstTitle()) && n.Text.toObject(e, o),
                secondTitle: (o = t.getSecondTitle()) && n.Text.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomTopMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomTopMessage;
            return proto.webcast.im.RoomTopMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomTopMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setActionIcon(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.Background;
                        t.readMessage(o, proto.webcast.im.Background.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setFoldDuration(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setDisplayDuration(o);
                        break;
                    case 6:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setFirstTitle(o);
                        break;
                    case 7:
                        o = new n.Text;
                        t.readMessage(o, n.Text.deserializeBinaryFromReader), e.setSecondTitle(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomTopMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomTopMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomTopMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), null != (o = e.getActionIcon()) && t.writeMessage(2, o, a.Image.serializeBinaryToWriter), null != (o = e.getBackground()) && t.writeMessage(3, o, proto.webcast.im.Background.serializeBinaryToWriter), o = e.getFoldDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getDisplayDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getFirstTitle()) && t.writeMessage(6, o, n.Text.serializeBinaryToWriter), null != (o = e.getSecondTitle()) && t.writeMessage(7, o, n.Text.serializeBinaryToWriter)
        }, proto.webcast.im.RoomTopMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.RoomTopMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomTopMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomTopMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomTopMessage.prototype.getActionIcon = function () {
            return s.Message.getWrapperField(this, a.Image, 2)
        }, proto.webcast.im.RoomTopMessage.prototype.setActionIcon = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomTopMessage.prototype.clearActionIcon = function () {
            return this.setActionIcon(undefined)
        }, proto.webcast.im.RoomTopMessage.prototype.hasActionIcon = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.RoomTopMessage.prototype.getBackground = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.Background, 3)
        }, proto.webcast.im.RoomTopMessage.prototype.setBackground = function (e) {
            return s.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.RoomTopMessage.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        }, proto.webcast.im.RoomTopMessage.prototype.hasBackground = function () {
            return null != s.Message.getField(this, 3)
        }, proto.webcast.im.RoomTopMessage.prototype.getFoldDuration = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.RoomTopMessage.prototype.setFoldDuration = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.RoomTopMessage.prototype.getDisplayDuration = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.RoomTopMessage.prototype.setDisplayDuration = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.RoomTopMessage.prototype.getFirstTitle = function () {
            return s.Message.getWrapperField(this, n.Text, 6)
        }, proto.webcast.im.RoomTopMessage.prototype.setFirstTitle = function (e) {
            return s.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.RoomTopMessage.prototype.clearFirstTitle = function () {
            return this.setFirstTitle(undefined)
        }, proto.webcast.im.RoomTopMessage.prototype.hasFirstTitle = function () {
            return null != s.Message.getField(this, 6)
        }, proto.webcast.im.RoomTopMessage.prototype.getSecondTitle = function () {
            return s.Message.getWrapperField(this, n.Text, 7)
        }, proto.webcast.im.RoomTopMessage.prototype.setSecondTitle = function (e) {
            return s.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.RoomTopMessage.prototype.clearSecondTitle = function () {
            return this.setSecondTitle(undefined)
        }, proto.webcast.im.RoomTopMessage.prototype.hasSecondTitle = function () {
            return null != s.Message.getField(this, 7)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Background.prototype.toObject = function (e) {
            return proto.webcast.im.Background.toObject(e, this)
        }, proto.webcast.im.Background.toObject = function (e, t) {
            var o = {backgroundColor: s.Message.getFieldWithDefault(t, 1, "")};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.Background.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.Background;
            return proto.webcast.im.Background.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.Background.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setBackgroundColor(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.Background.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.Background.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.Background.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getBackgroundColor()).length > 0 && t.writeString(1, o)
        }, proto.webcast.im.Background.prototype.getBackgroundColor = function () {
            return s.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.Background.prototype.setBackgroundColor = function (e) {
            return s.Message.setProto3StringField(this, 1, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 29186: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(57561);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.RoomUnionLiveMessage", null, i), proto.webcast.im.RoomUnionLiveMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomUnionLiveMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomUnionLiveMessage.displayName = "proto.webcast.im.RoomUnionLiveMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomUnionLiveMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomUnionLiveMessage.toObject(e, this)
        }, proto.webcast.im.RoomUnionLiveMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                unionLiveInfo: (o = t.getUnionLiveInfo()) && n.UnionLiveInfo.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.RoomUnionLiveMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomUnionLiveMessage;
            return proto.webcast.im.RoomUnionLiveMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomUnionLiveMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.UnionLiveInfo;
                        t.readMessage(o, n.UnionLiveInfo.deserializeBinaryFromReader), e.setUnionLiveInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomUnionLiveMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomUnionLiveMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getUnionLiveInfo()) && t.writeMessage(2, o, n.UnionLiveInfo.serializeBinaryToWriter)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.getUnionLiveInfo = function () {
            return s.Message.getWrapperField(this, n.UnionLiveInfo, 2)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.setUnionLiveInfo = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.clearUnionLiveInfo = function () {
            return this.setUnionLiveInfo(undefined)
        }, proto.webcast.im.RoomUnionLiveMessage.prototype.hasUnionLiveInfo = function () {
            return null != s.Message.getField(this, 2)
        }, r.object.extend(t, proto.webcast.im)
    }, 82034: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.RoomVerifyMessage", null, i), r.exportSymbol("proto.webcast.im.VerifyAction", null, i), proto.webcast.im.RoomVerifyMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.RoomVerifyMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.RoomVerifyMessage.displayName = "proto.webcast.im.RoomVerifyMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomVerifyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomVerifyMessage.toObject(e, this)
        }, proto.webcast.im.RoomVerifyMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                action: s.Message.getFieldWithDefault(t, 2, 0),
                content: s.Message.getFieldWithDefault(t, 3, ""),
                noticeType: s.Message.getFieldWithDefault(t, 4, 0),
                closeRoom: s.Message.getBooleanFieldWithDefault(t, 5, !1),
                unableStyle: s.Message.getFieldWithDefault(t, 6, 0),
                tipContent: s.Message.getFieldWithDefault(t, 7, ""),
                anchorSwitch: s.Message.getFieldWithDefault(t, 8, 0),
                switchStatusTipMsg: s.Message.getFieldWithDefault(t, 9, ""),
                switchStatusAnchorTipMsg: s.Message.getFieldWithDefault(t, 10, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.RoomVerifyMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.RoomVerifyMessage;
            return proto.webcast.im.RoomVerifyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomVerifyMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setAction(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readInt64();
                        e.setNoticeType(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setCloseRoom(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setUnableStyle(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setTipContent(o);
                        break;
                    case 8:
                        o = t.readInt32();
                        e.setAnchorSwitch(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setSwitchStatusTipMsg(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setSwitchStatusAnchorTipMsg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomVerifyMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.RoomVerifyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomVerifyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getAction()) && t.writeInt32(2, o), (o = e.getContent()).length > 0 && t.writeString(3, o), 0 !== (o = e.getNoticeType()) && t.writeInt64(4, o), (o = e.getCloseRoom()) && t.writeBool(5, o), 0 !== (o = e.getUnableStyle()) && t.writeInt32(6, o), (o = e.getTipContent()).length > 0 && t.writeString(7, o), 0 !== (o = e.getAnchorSwitch()) && t.writeInt32(8, o), (o = e.getSwitchStatusTipMsg()).length > 0 && t.writeString(9, o), (o = e.getSwitchStatusAnchorTipMsg()).length > 0 && t.writeString(10, o)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.RoomVerifyMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomVerifyMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getAction = function () {
            return s.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.RoomVerifyMessage.prototype.setAction = function (e) {
            return s.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.RoomVerifyMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getNoticeType = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.RoomVerifyMessage.prototype.setNoticeType = function (e) {
            return s.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getCloseRoom = function () {
            return s.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.RoomVerifyMessage.prototype.setCloseRoom = function (e) {
            return s.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getUnableStyle = function () {
            return s.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.RoomVerifyMessage.prototype.setUnableStyle = function (e) {
            return s.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getTipContent = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.RoomVerifyMessage.prototype.setTipContent = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getAnchorSwitch = function () {
            return s.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.RoomVerifyMessage.prototype.setAnchorSwitch = function (e) {
            return s.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getSwitchStatusTipMsg = function () {
            return s.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.RoomVerifyMessage.prototype.setSwitchStatusTipMsg = function (e) {
            return s.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.RoomVerifyMessage.prototype.getSwitchStatusAnchorTipMsg = function () {
            return s.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.im.RoomVerifyMessage.prototype.setSwitchStatusAnchorTipMsg = function (e) {
            return s.Message.setProto3StringField(this, 10, e)
        }, proto.webcast.im.VerifyAction = {
            UNKNOWACTION: 0,
            CLOSECHAT: 3,
            OPENCHAT: 4,
            CLOSEDANMAKU: 5,
            OPENDANMAKU: 6,
            CLOSEGIFT: 7,
            OPENGIFT: 8,
            CLOSEDIGG: 12,
            OPENDIGG: 13,
            CHANGETITLE: 21,
            CHANGESHORTTITLE: 22,
            CHANGEINTRODUCTION: 23,
            CLOSEBANNER: 24,
            OPENBANNER: 25,
            OPENAUDIOCHAT: 26,
            CLOSEAUDIOCHAT: 27,
            OPENAUDIOCHATAUTOPLAY: 28,
            CLOSEAUDIOCHATAUTOPLY: 29,
            CLOSETYPINGCOMMNETSTATE: 30,
            OPENTYPINGCOMMNETSTATE: 31,
            CLOSESHARE: 32,
            OPENSHARE: 33,
            CLOSEUPRIGHTSTATSFLOATINGLAYER: 35,
            OPENUPRIGHTSTATSFLOATINGLAYER: 36,
            CLOSEROOMCONTRIBUTOR: 37,
            OPENROOMCONTRIBUTOR: 38,
            SWITCHUPRIGHTSTATSTOUSERCOUNT: 39,
            SWITCHUPRIGHTSTATSTOPV: 40,
            OPENINDUSTRYSERVICE: 41,
            CLOSEINDUSTRYSERVICE: 42,
            CHANGEROOMPOI: 43,
            OPENCHATDYNAMICSLIDESPEED: 44,
            CLOSECHATDYNAMICSLIDESPEED: 45,
            SWITCHANCHORCHATSET: 46,
            OPENLINKMICGUESTLIKE: 47,
            CLOSELINKMICGUESTLIKE: 48,
            OPENVIDEOSHARE: 51,
            CLOSEVIDEOSHARE: 52,
            OPENTRIALUSERCHAT: 53,
            CLOSETRIALUSERCHAT: 54
        }, r.object.extend(t, proto.webcast.im)
    }, 10810: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        r.object.extend(proto, a);
        var n = o(8411);
        r.object.extend(proto, n);
        var c = o(99222);
        r.object.extend(proto, c);
        var g = o(78092);
        r.object.extend(proto, g);
        var m = o(50684);
        r.object.extend(proto, m), r.exportSymbol("proto.webcast.im.ScreenChatMessage", null, i), r.exportSymbol("proto.webcast.im.ScreenChatMessage.Effect", null, i), r.exportSymbol("proto.webcast.im.ScreenChatMessage.OfficialCommentConfig", null, i), proto.webcast.im.ScreenChatMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ScreenChatMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ScreenChatMessage.displayName = "proto.webcast.im.ScreenChatMessage"), proto.webcast.im.ScreenChatMessage.OfficialCommentConfig = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ScreenChatMessage.OfficialCommentConfig, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.displayName = "proto.webcast.im.ScreenChatMessage.OfficialCommentConfig"), proto.webcast.im.ScreenChatMessage.Effect = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ScreenChatMessage.Effect, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ScreenChatMessage.Effect.displayName = "proto.webcast.im.ScreenChatMessage.Effect"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ScreenChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ScreenChatMessage.toObject(e, this)
        }, proto.webcast.im.ScreenChatMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && m.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                screenChatType: s.Message.getFieldWithDefault(t, 3, "0"),
                content: s.Message.getFieldWithDefault(t, 4, ""),
                priority: s.Message.getFieldWithDefault(t, 5, "0"),
                effect: (o = t.getEffect()) && proto.webcast.im.ScreenChatMessage.Effect.toObject(e, o),
                backgroundImage: (o = t.getBackgroundImage()) && n.Image.toObject(e, o),
                effectV2: (o = t.getEffectV2()) && proto.webcast.im.ScreenChatMessage.Effect.toObject(e, o),
                backgroundImageV2: (o = t.getBackgroundImageV2()) && n.Image.toObject(e, o),
                publicAreaCommon: (o = t.getPublicAreaCommon()) && m.PublicAreaCommon.toObject(e, o),
                officialCommentConfig: (o = t.getOfficialCommentConfig()) && proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.toObject(e, o),
                eventTime: s.Message.getFieldWithDefault(t, 12, "0"),
                sendReview: s.Message.getBooleanFieldWithDefault(t, 13, !1),
                chatIdentityInfo: (o = t.getChatIdentityInfo()) && g.ChatIdentity.toObject(e, o),
                rtfContent: (o = t.getRtfContent()) && c.Text.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ScreenChatMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ScreenChatMessage;
            return proto.webcast.im.ScreenChatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ScreenChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new m.Common;
                        t.readMessage(o, m.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setScreenChatType(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setPriority(o);
                        break;
                    case 6:
                        o = new proto.webcast.im.ScreenChatMessage.Effect;
                        t.readMessage(o, proto.webcast.im.ScreenChatMessage.Effect.deserializeBinaryFromReader), e.setEffect(o);
                        break;
                    case 7:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImage(o);
                        break;
                    case 8:
                        o = new proto.webcast.im.ScreenChatMessage.Effect;
                        t.readMessage(o, proto.webcast.im.ScreenChatMessage.Effect.deserializeBinaryFromReader), e.setEffectV2(o);
                        break;
                    case 9:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImageV2(o);
                        break;
                    case 10:
                        o = new m.PublicAreaCommon;
                        t.readMessage(o, m.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(o);
                        break;
                    case 11:
                        o = new proto.webcast.im.ScreenChatMessage.OfficialCommentConfig;
                        t.readMessage(o, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.deserializeBinaryFromReader), e.setOfficialCommentConfig(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setEventTime(o);
                        break;
                    case 13:
                        o = t.readBool();
                        e.setSendReview(o);
                        break;
                    case 14:
                        o = new g.ChatIdentity;
                        t.readMessage(o, g.ChatIdentity.deserializeBinaryFromReader), e.setChatIdentityInfo(o);
                        break;
                    case 30:
                        o = new c.Text;
                        t.readMessage(o, c.Text.deserializeBinaryFromReader), e.setRtfContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ScreenChatMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ScreenChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ScreenChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, m.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), o = e.getScreenChatType(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getContent()).length > 0 && t.writeString(4, o), o = e.getPriority(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), null != (o = e.getEffect()) && t.writeMessage(6, o, proto.webcast.im.ScreenChatMessage.Effect.serializeBinaryToWriter), null != (o = e.getBackgroundImage()) && t.writeMessage(7, o, n.Image.serializeBinaryToWriter), null != (o = e.getEffectV2()) && t.writeMessage(8, o, proto.webcast.im.ScreenChatMessage.Effect.serializeBinaryToWriter), null != (o = e.getBackgroundImageV2()) && t.writeMessage(9, o, n.Image.serializeBinaryToWriter), null != (o = e.getPublicAreaCommon()) && t.writeMessage(10, o, m.PublicAreaCommon.serializeBinaryToWriter), null != (o = e.getOfficialCommentConfig()) && t.writeMessage(11, o, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.serializeBinaryToWriter), o = e.getEventTime(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), (o = e.getSendReview()) && t.writeBool(13, o), null != (o = e.getChatIdentityInfo()) && t.writeMessage(14, o, g.ChatIdentity.serializeBinaryToWriter), null != (o = e.getRtfContent()) && t.writeMessage(30, o, c.Text.serializeBinaryToWriter)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.prototype.toObject = function (e) {
            return proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.toObject(e, this)
        }, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.toObject = function (e, t) {
            var o = {official: s.Message.getBooleanFieldWithDefault(t, 1, !1)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ScreenChatMessage.OfficialCommentConfig;
            return proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readBool();
                    e.setOfficial(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getOfficial()) && t.writeBool(1, o)
        }, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.prototype.getOfficial = function () {
            return s.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig.prototype.setOfficial = function (e) {
            return s.Message.setProto3BooleanField(this, 1, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ScreenChatMessage.Effect.prototype.toObject = function (e) {
            return proto.webcast.im.ScreenChatMessage.Effect.toObject(e, this)
        }, proto.webcast.im.ScreenChatMessage.Effect.toObject = function (e, t) {
            var o, r = {
                icon: (o = t.getIcon()) && m.FlexImageStruct.toObject(e, o),
                avatarIcon: (o = t.getAvatarIcon()) && n.Image.toObject(e, o),
                backgroundColor: s.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ScreenChatMessage.Effect.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ScreenChatMessage.Effect;
            return proto.webcast.im.ScreenChatMessage.Effect.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ScreenChatMessage.Effect.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new m.FlexImageStruct;
                        t.readMessage(o, m.FlexImageStruct.deserializeBinaryFromReader), e.setIcon(o);
                        break;
                    case 2:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setAvatarIcon(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBackgroundColor(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ScreenChatMessage.Effect.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ScreenChatMessage.Effect.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getIcon()) && t.writeMessage(1, o, m.FlexImageStruct.serializeBinaryToWriter), null != (o = e.getAvatarIcon()) && t.writeMessage(2, o, n.Image.serializeBinaryToWriter), (o = e.getBackgroundColor()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.getIcon = function () {
            return s.Message.getWrapperField(this, m.FlexImageStruct, 1)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.setIcon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.hasIcon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.getAvatarIcon = function () {
            return s.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.setAvatarIcon = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.clearAvatarIcon = function () {
            return this.setAvatarIcon(undefined)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.hasAvatarIcon = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.getBackgroundColor = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ScreenChatMessage.Effect.prototype.setBackgroundColor = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, m.Common, 1)
        }, proto.webcast.im.ScreenChatMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ScreenChatMessage.prototype.getUser = function () {
            return s.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.ScreenChatMessage.prototype.setUser = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasUser = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.ScreenChatMessage.prototype.getScreenChatType = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.ScreenChatMessage.prototype.setScreenChatType = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.ScreenChatMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.getPriority = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.ScreenChatMessage.prototype.setPriority = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.getEffect = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.ScreenChatMessage.Effect, 6)
        }, proto.webcast.im.ScreenChatMessage.prototype.setEffect = function (e) {
            return s.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearEffect = function () {
            return this.setEffect(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasEffect = function () {
            return null != s.Message.getField(this, 6)
        }, proto.webcast.im.ScreenChatMessage.prototype.getBackgroundImage = function () {
            return s.Message.getWrapperField(this, n.Image, 7)
        }, proto.webcast.im.ScreenChatMessage.prototype.setBackgroundImage = function (e) {
            return s.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasBackgroundImage = function () {
            return null != s.Message.getField(this, 7)
        }, proto.webcast.im.ScreenChatMessage.prototype.getEffectV2 = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.ScreenChatMessage.Effect, 8)
        }, proto.webcast.im.ScreenChatMessage.prototype.setEffectV2 = function (e) {
            return s.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearEffectV2 = function () {
            return this.setEffectV2(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasEffectV2 = function () {
            return null != s.Message.getField(this, 8)
        }, proto.webcast.im.ScreenChatMessage.prototype.getBackgroundImageV2 = function () {
            return s.Message.getWrapperField(this, n.Image, 9)
        }, proto.webcast.im.ScreenChatMessage.prototype.setBackgroundImageV2 = function (e) {
            return s.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearBackgroundImageV2 = function () {
            return this.setBackgroundImageV2(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasBackgroundImageV2 = function () {
            return null != s.Message.getField(this, 9)
        }, proto.webcast.im.ScreenChatMessage.prototype.getPublicAreaCommon = function () {
            return s.Message.getWrapperField(this, m.PublicAreaCommon, 10)
        }, proto.webcast.im.ScreenChatMessage.prototype.setPublicAreaCommon = function (e) {
            return s.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasPublicAreaCommon = function () {
            return null != s.Message.getField(this, 10)
        }, proto.webcast.im.ScreenChatMessage.prototype.getOfficialCommentConfig = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.ScreenChatMessage.OfficialCommentConfig, 11)
        }, proto.webcast.im.ScreenChatMessage.prototype.setOfficialCommentConfig = function (e) {
            return s.Message.setWrapperField(this, 11, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearOfficialCommentConfig = function () {
            return this.setOfficialCommentConfig(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasOfficialCommentConfig = function () {
            return null != s.Message.getField(this, 11)
        }, proto.webcast.im.ScreenChatMessage.prototype.getEventTime = function () {
            return s.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.ScreenChatMessage.prototype.setEventTime = function (e) {
            return s.Message.setProto3StringIntField(this, 12, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.getSendReview = function () {
            return s.Message.getBooleanFieldWithDefault(this, 13, !1)
        }, proto.webcast.im.ScreenChatMessage.prototype.setSendReview = function (e) {
            return s.Message.setProto3BooleanField(this, 13, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.getChatIdentityInfo = function () {
            return s.Message.getWrapperField(this, g.ChatIdentity, 14)
        }, proto.webcast.im.ScreenChatMessage.prototype.setChatIdentityInfo = function (e) {
            return s.Message.setWrapperField(this, 14, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearChatIdentityInfo = function () {
            return this.setChatIdentityInfo(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasChatIdentityInfo = function () {
            return null != s.Message.getField(this, 14)
        }, proto.webcast.im.ScreenChatMessage.prototype.getRtfContent = function () {
            return s.Message.getWrapperField(this, c.Text, 30)
        }, proto.webcast.im.ScreenChatMessage.prototype.setRtfContent = function (e) {
            return s.Message.setWrapperField(this, 30, e)
        }, proto.webcast.im.ScreenChatMessage.prototype.clearRtfContent = function () {
            return this.setRtfContent(undefined)
        }, proto.webcast.im.ScreenChatMessage.prototype.hasRtfContent = function () {
            return null != s.Message.getField(this, 30)
        }, r.object.extend(t, proto.webcast.im)
    }, 57001: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.ShareGuideMessage", null, i), proto.webcast.im.ShareGuideMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ShareGuideMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShareGuideMessage.displayName = "proto.webcast.im.ShareGuideMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShareGuideMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShareGuideMessage.toObject(e, this)
        }, proto.webcast.im.ShareGuideMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                shareChannel: s.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShareGuideMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShareGuideMessage;
            return proto.webcast.im.ShareGuideMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShareGuideMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setShareChannel(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShareGuideMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShareGuideMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShareGuideMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getShareChannel()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.ShareGuideMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ShareGuideMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShareGuideMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShareGuideMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShareGuideMessage.prototype.getShareChannel = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.ShareGuideMessage.prototype.setShareChannel = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 39042: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(57561);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.ShortTouchAreaMessage", null, i), r.exportSymbol("proto.webcast.im.ShortTouchAreaMessage.MessageType", null, i), proto.webcast.im.ShortTouchAreaMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ShortTouchAreaMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShortTouchAreaMessage.displayName = "proto.webcast.im.ShortTouchAreaMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShortTouchAreaMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShortTouchAreaMessage.toObject(e, this)
        }, proto.webcast.im.ShortTouchAreaMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                messageType: s.Message.getFieldWithDefault(t, 2, 0),
                shortTouchAreaData: (o = t.getShortTouchAreaData()) && n.ShortTouchArea.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShortTouchAreaMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShortTouchAreaMessage;
            return proto.webcast.im.ShortTouchAreaMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShortTouchAreaMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = new n.ShortTouchArea;
                        t.readMessage(o, n.ShortTouchArea.deserializeBinaryFromReader), e.setShortTouchAreaData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShortTouchAreaMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShortTouchAreaMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getMessageType()) && t.writeEnum(2, o), null != (o = e.getShortTouchAreaData()) && t.writeMessage(3, o, n.ShortTouchArea.serializeBinaryToWriter)
        }, proto.webcast.im.ShortTouchAreaMessage.MessageType = {
            UNKNOWNMESSAGETYPE: 0,
            REFRESH: 1,
            DESTROY: 2
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.getMessageType = function () {
            return s.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.setMessageType = function (e) {
            return s.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.getShortTouchAreaData = function () {
            return s.Message.getWrapperField(this, n.ShortTouchArea, 3)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.setShortTouchAreaData = function (e) {
            return s.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.clearShortTouchAreaData = function () {
            return this.setShortTouchAreaData(undefined)
        }, proto.webcast.im.ShortTouchAreaMessage.prototype.hasShortTouchAreaData = function () {
            return null != s.Message.getField(this, 3)
        }, r.object.extend(t, proto.webcast.im)
    }, 61928: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        r.object.extend(proto, a);
        var n = o(8411);
        r.object.extend(proto, n);
        var c = o(50684);
        r.object.extend(proto, c);
        var g = o(57561);
        r.object.extend(proto, g), r.exportSymbol("proto.webcast.im.ChatPriorityLevel", null, i), r.exportSymbol("proto.webcast.im.CommentRoleConfig", null, i), r.exportSymbol("proto.webcast.im.OfficialCommentConfig", null, i), r.exportSymbol("proto.webcast.im.ShowChatMessage", null, i), r.exportSymbol("proto.webcast.im.ShowCommentEffectType", null, i), proto.webcast.im.ShowChatMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.ShowChatMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.ShowChatMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShowChatMessage.displayName = "proto.webcast.im.ShowChatMessage"), proto.webcast.im.OfficialCommentConfig = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.OfficialCommentConfig, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.OfficialCommentConfig.displayName = "proto.webcast.im.OfficialCommentConfig"), proto.webcast.im.CommentRoleConfig = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.CommentRoleConfig, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.CommentRoleConfig.displayName = "proto.webcast.im.CommentRoleConfig"), proto.webcast.im.ShowChatMessage.repeatedFields_ = [41], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowChatMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShowChatMessage.toObject(e, this)
        }, proto.webcast.im.ShowChatMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                episodeId: s.Message.getFieldWithDefault(t, 2, "0"),
                content: s.Message.getFieldWithDefault(t, 3, ""),
                agreeMsgId: s.Message.getFieldWithDefault(t, 4, "0"),
                visibleToSender: s.Message.getBooleanFieldWithDefault(t, 5, !1),
                priorityLevel: s.Message.getFieldWithDefault(t, 6, 0),
                effectType: s.Message.getFieldWithDefault(t, 7, 0),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                publicAreaCommon: (o = t.getPublicAreaCommon()) && c.PublicAreaCommon.toObject(e, o),
                landscapeAreaCommon: (o = t.getLandscapeAreaCommon()) && c.LandscapeAreaCommon.toObject(e, o),
                backgroundImage: (o = t.getBackgroundImage()) && n.Image.toObject(e, o),
                fontColorValueList: null == (o = s.Message.getRepeatedField(t, 41)) ? undefined : o,
                giftImage: (o = t.getGiftImage()) && n.Image.toObject(e, o),
                officialCommentConfig: (o = t.getOfficialCommentConfig()) && proto.webcast.im.OfficialCommentConfig.toObject(e, o),
                commentRole: (o = t.getCommentRole()) && proto.webcast.im.CommentRoleConfig.toObject(e, o),
                medal: (o = t.getMedal()) && g.CommentMedal.toObject(e, o),
                vsMessageType: s.Message.getFieldWithDefault(t, 46, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShowChatMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShowChatMessage;
            return proto.webcast.im.ShowChatMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShowChatMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Common;
                        t.readMessage(o, c.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setEpisodeId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setAgreeMsgId(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setVisibleToSender(o);
                        break;
                    case 6:
                        o = t.readEnum();
                        e.setPriorityLevel(o);
                        break;
                    case 7:
                        o = t.readEnum();
                        e.setEffectType(o);
                        break;
                    case 20:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 30:
                        o = new c.PublicAreaCommon;
                        t.readMessage(o, c.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(o);
                        break;
                    case 31:
                        o = new c.LandscapeAreaCommon;
                        t.readMessage(o, c.LandscapeAreaCommon.deserializeBinaryFromReader), e.setLandscapeAreaCommon(o);
                        break;
                    case 40:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImage(o);
                        break;
                    case 41:
                        o = t.readString();
                        e.addFontColorValue(o);
                        break;
                    case 42:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setGiftImage(o);
                        break;
                    case 43:
                        o = new proto.webcast.im.OfficialCommentConfig;
                        t.readMessage(o, proto.webcast.im.OfficialCommentConfig.deserializeBinaryFromReader), e.setOfficialCommentConfig(o);
                        break;
                    case 44:
                        o = new proto.webcast.im.CommentRoleConfig;
                        t.readMessage(o, proto.webcast.im.CommentRoleConfig.deserializeBinaryFromReader), e.setCommentRole(o);
                        break;
                    case 45:
                        o = new g.CommentMedal;
                        t.readMessage(o, g.CommentMedal.deserializeBinaryFromReader), e.setMedal(o);
                        break;
                    case 46:
                        o = t.readEnum();
                        e.setVsMessageType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShowChatMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShowChatMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShowChatMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), o = e.getEpisodeId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getContent()).length > 0 && t.writeString(3, o), o = e.getAgreeMsgId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getVisibleToSender()) && t.writeBool(5, o), 0 !== (o = e.getPriorityLevel()) && t.writeEnum(6, o), 0 !== (o = e.getEffectType()) && t.writeEnum(7, o), null != (o = e.getUser()) && t.writeMessage(20, o, a.User.serializeBinaryToWriter), null != (o = e.getPublicAreaCommon()) && t.writeMessage(30, o, c.PublicAreaCommon.serializeBinaryToWriter), null != (o = e.getLandscapeAreaCommon()) && t.writeMessage(31, o, c.LandscapeAreaCommon.serializeBinaryToWriter), null != (o = e.getBackgroundImage()) && t.writeMessage(40, o, n.Image.serializeBinaryToWriter), (o = e.getFontColorValueList()).length > 0 && t.writeRepeatedString(41, o), null != (o = e.getGiftImage()) && t.writeMessage(42, o, n.Image.serializeBinaryToWriter), null != (o = e.getOfficialCommentConfig()) && t.writeMessage(43, o, proto.webcast.im.OfficialCommentConfig.serializeBinaryToWriter), null != (o = e.getCommentRole()) && t.writeMessage(44, o, proto.webcast.im.CommentRoleConfig.serializeBinaryToWriter), null != (o = e.getMedal()) && t.writeMessage(45, o, g.CommentMedal.serializeBinaryToWriter), 0 !== (o = e.getVsMessageType()) && t.writeEnum(46, o)
        }, proto.webcast.im.ShowChatMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.ShowChatMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShowChatMessage.prototype.getEpisodeId = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ShowChatMessage.prototype.setEpisodeId = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ShowChatMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ShowChatMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ShowChatMessage.prototype.getAgreeMsgId = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.ShowChatMessage.prototype.setAgreeMsgId = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.ShowChatMessage.prototype.getVisibleToSender = function () {
            return s.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.ShowChatMessage.prototype.setVisibleToSender = function (e) {
            return s.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.ShowChatMessage.prototype.getPriorityLevel = function () {
            return s.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.ShowChatMessage.prototype.setPriorityLevel = function (e) {
            return s.Message.setProto3EnumField(this, 6, e)
        }, proto.webcast.im.ShowChatMessage.prototype.getEffectType = function () {
            return s.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.ShowChatMessage.prototype.setEffectType = function (e) {
            return s.Message.setProto3EnumField(this, 7, e)
        }, proto.webcast.im.ShowChatMessage.prototype.getUser = function () {
            return s.Message.getWrapperField(this, a.User, 20)
        }, proto.webcast.im.ShowChatMessage.prototype.setUser = function (e) {
            return s.Message.setWrapperField(this, 20, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasUser = function () {
            return null != s.Message.getField(this, 20)
        }, proto.webcast.im.ShowChatMessage.prototype.getPublicAreaCommon = function () {
            return s.Message.getWrapperField(this, c.PublicAreaCommon, 30)
        }, proto.webcast.im.ShowChatMessage.prototype.setPublicAreaCommon = function (e) {
            return s.Message.setWrapperField(this, 30, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasPublicAreaCommon = function () {
            return null != s.Message.getField(this, 30)
        }, proto.webcast.im.ShowChatMessage.prototype.getLandscapeAreaCommon = function () {
            return s.Message.getWrapperField(this, c.LandscapeAreaCommon, 31)
        }, proto.webcast.im.ShowChatMessage.prototype.setLandscapeAreaCommon = function (e) {
            return s.Message.setWrapperField(this, 31, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearLandscapeAreaCommon = function () {
            return this.setLandscapeAreaCommon(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasLandscapeAreaCommon = function () {
            return null != s.Message.getField(this, 31)
        }, proto.webcast.im.ShowChatMessage.prototype.getBackgroundImage = function () {
            return s.Message.getWrapperField(this, n.Image, 40)
        }, proto.webcast.im.ShowChatMessage.prototype.setBackgroundImage = function (e) {
            return s.Message.setWrapperField(this, 40, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasBackgroundImage = function () {
            return null != s.Message.getField(this, 40)
        }, proto.webcast.im.ShowChatMessage.prototype.getFontColorValueList = function () {
            return s.Message.getRepeatedField(this, 41)
        }, proto.webcast.im.ShowChatMessage.prototype.setFontColorValueList = function (e) {
            return s.Message.setField(this, 41, e || [])
        }, proto.webcast.im.ShowChatMessage.prototype.addFontColorValue = function (e, t) {
            return s.Message.addToRepeatedField(this, 41, e, t)
        }, proto.webcast.im.ShowChatMessage.prototype.clearFontColorValueList = function () {
            return this.setFontColorValueList([])
        }, proto.webcast.im.ShowChatMessage.prototype.getGiftImage = function () {
            return s.Message.getWrapperField(this, n.Image, 42)
        }, proto.webcast.im.ShowChatMessage.prototype.setGiftImage = function (e) {
            return s.Message.setWrapperField(this, 42, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearGiftImage = function () {
            return this.setGiftImage(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasGiftImage = function () {
            return null != s.Message.getField(this, 42)
        }, proto.webcast.im.ShowChatMessage.prototype.getOfficialCommentConfig = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.OfficialCommentConfig, 43)
        }, proto.webcast.im.ShowChatMessage.prototype.setOfficialCommentConfig = function (e) {
            return s.Message.setWrapperField(this, 43, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearOfficialCommentConfig = function () {
            return this.setOfficialCommentConfig(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasOfficialCommentConfig = function () {
            return null != s.Message.getField(this, 43)
        }, proto.webcast.im.ShowChatMessage.prototype.getCommentRole = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.CommentRoleConfig, 44)
        }, proto.webcast.im.ShowChatMessage.prototype.setCommentRole = function (e) {
            return s.Message.setWrapperField(this, 44, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearCommentRole = function () {
            return this.setCommentRole(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasCommentRole = function () {
            return null != s.Message.getField(this, 44)
        }, proto.webcast.im.ShowChatMessage.prototype.getMedal = function () {
            return s.Message.getWrapperField(this, g.CommentMedal, 45)
        }, proto.webcast.im.ShowChatMessage.prototype.setMedal = function (e) {
            return s.Message.setWrapperField(this, 45, e)
        }, proto.webcast.im.ShowChatMessage.prototype.clearMedal = function () {
            return this.setMedal(undefined)
        }, proto.webcast.im.ShowChatMessage.prototype.hasMedal = function () {
            return null != s.Message.getField(this, 45)
        }, proto.webcast.im.ShowChatMessage.prototype.getVsMessageType = function () {
            return s.Message.getFieldWithDefault(this, 46, 0)
        }, proto.webcast.im.ShowChatMessage.prototype.setVsMessageType = function (e) {
            return s.Message.setProto3EnumField(this, 46, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.OfficialCommentConfig.prototype.toObject = function (e) {
            return proto.webcast.im.OfficialCommentConfig.toObject(e, this)
        }, proto.webcast.im.OfficialCommentConfig.toObject = function (e, t) {
            var o = {backgroundColor: s.Message.getFieldWithDefault(t, 1, "")};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.OfficialCommentConfig.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.OfficialCommentConfig;
            return proto.webcast.im.OfficialCommentConfig.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.OfficialCommentConfig.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readString();
                    e.setBackgroundColor(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.OfficialCommentConfig.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.OfficialCommentConfig.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.OfficialCommentConfig.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getBackgroundColor()).length > 0 && t.writeString(1, o)
        }, proto.webcast.im.OfficialCommentConfig.prototype.getBackgroundColor = function () {
            return s.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.OfficialCommentConfig.prototype.setBackgroundColor = function (e) {
            return s.Message.setProto3StringField(this, 1, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommentRoleConfig.prototype.toObject = function (e) {
            return proto.webcast.im.CommentRoleConfig.toObject(e, this)
        }, proto.webcast.im.CommentRoleConfig.toObject = function (e, t) {
            var o, r = {
                name: s.Message.getFieldWithDefault(t, 1, ""),
                avatar: (o = t.getAvatar()) && n.Image.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.CommentRoleConfig.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.CommentRoleConfig;
            return proto.webcast.im.CommentRoleConfig.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommentRoleConfig.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setName(o);
                        break;
                    case 2:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setAvatar(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommentRoleConfig.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.CommentRoleConfig.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommentRoleConfig.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getName()).length > 0 && t.writeString(1, o), null != (o = e.getAvatar()) && t.writeMessage(2, o, n.Image.serializeBinaryToWriter)
        }, proto.webcast.im.CommentRoleConfig.prototype.getName = function () {
            return s.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.CommentRoleConfig.prototype.setName = function (e) {
            return s.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.CommentRoleConfig.prototype.getAvatar = function () {
            return s.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.CommentRoleConfig.prototype.setAvatar = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.CommentRoleConfig.prototype.clearAvatar = function () {
            return this.setAvatar(undefined)
        }, proto.webcast.im.CommentRoleConfig.prototype.hasAvatar = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.ShowCommentEffectType = {
            NOT_SET: 0,
            FANS_CLUB_FONT_COLOR: 1,
            FOLLOW_FONT_COLOR: 2,
            DOU_PLUS_ORDER_CREATED: 3,
            DOU_PLUS_PROGRESS_UPDATED: 1e3
        }, proto.webcast.im.ChatPriorityLevel = {LOW: 0, MIDDLE: 1, HIGH: 2}, r.object.extend(t, proto.webcast.im)
    }, 75157: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.ShowEffectMessage", null, i), proto.webcast.im.ShowEffectMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ShowEffectMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShowEffectMessage.displayName = "proto.webcast.im.ShowEffectMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowEffectMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShowEffectMessage.toObject(e, this)
        }, proto.webcast.im.ShowEffectMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                flashOperatingPlace: s.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShowEffectMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShowEffectMessage;
            return proto.webcast.im.ShowEffectMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShowEffectMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setFlashOperatingPlace(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShowEffectMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShowEffectMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShowEffectMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getFlashOperatingPlace()) && t.writeBool(2, o)
        }, proto.webcast.im.ShowEffectMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ShowEffectMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShowEffectMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShowEffectMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShowEffectMessage.prototype.getFlashOperatingPlace = function () {
            return s.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.ShowEffectMessage.prototype.setFlashOperatingPlace = function (e) {
            return s.Message.setProto3BooleanField(this, 2, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 21447: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.ShowLinkedLiveRoomsMessage", null, i), r.exportSymbol("proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo", null, i), proto.webcast.im.ShowLinkedLiveRoomsMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.ShowLinkedLiveRoomsMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.ShowLinkedLiveRoomsMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShowLinkedLiveRoomsMessage.displayName = "proto.webcast.im.ShowLinkedLiveRoomsMessage"), proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.displayName = "proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo"), proto.webcast.im.ShowLinkedLiveRoomsMessage.repeatedFields_ = [4], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShowLinkedLiveRoomsMessage.toObject(e, this)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                episodeId: s.Message.getFieldWithDefault(t, 2, "0"),
                entryTitle: s.Message.getFieldWithDefault(t, 3, ""),
                linkedLiveRoomsList: s.Message.toObjectList(t.getLinkedLiveRoomsList(), proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShowLinkedLiveRoomsMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShowLinkedLiveRoomsMessage;
            return proto.webcast.im.ShowLinkedLiveRoomsMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setEpisodeId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setEntryTitle(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo;
                        t.readMessage(o, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.deserializeBinaryFromReader), e.addLinkedLiveRooms(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShowLinkedLiveRoomsMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getEpisodeId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getEntryTitle()).length > 0 && t.writeString(3, o), (o = e.getLinkedLiveRoomsList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.serializeBinaryToWriter)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.toObject = function (e) {
            return proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.toObject(e, this)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.toObject = function (e, t) {
            var o, r = {
                ownerUserId: s.Message.getFieldWithDefault(t, 1, "0"),
                roomId: s.Message.getFieldWithDefault(t, 2, "0"),
                roomTitle: s.Message.getFieldWithDefault(t, 3, ""),
                avatarThumb: (o = t.getAvatarThumb()) && a.Image.toObject(e, o),
                avatarMedium: (o = t.getAvatarMedium()) && a.Image.toObject(e, o),
                avatarLarge: (o = t.getAvatarLarge()) && a.Image.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo;
            return proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setOwnerUserId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRoomId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setRoomTitle(o);
                        break;
                    case 4:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setAvatarThumb(o);
                        break;
                    case 5:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setAvatarMedium(o);
                        break;
                    case 6:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setAvatarLarge(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getOwnerUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getRoomId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getRoomTitle()).length > 0 && t.writeString(3, o), null != (o = e.getAvatarThumb()) && t.writeMessage(4, o, a.Image.serializeBinaryToWriter), null != (o = e.getAvatarMedium()) && t.writeMessage(5, o, a.Image.serializeBinaryToWriter), null != (o = e.getAvatarLarge()) && t.writeMessage(6, o, a.Image.serializeBinaryToWriter)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.getOwnerUserId = function () {
            return s.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.setOwnerUserId = function (e) {
            return s.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.getRoomId = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.setRoomId = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.getRoomTitle = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.setRoomTitle = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.getAvatarThumb = function () {
            return s.Message.getWrapperField(this, a.Image, 4)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.setAvatarThumb = function (e) {
            return s.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.clearAvatarThumb = function () {
            return this.setAvatarThumb(undefined)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.hasAvatarThumb = function () {
            return null != s.Message.getField(this, 4)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.getAvatarMedium = function () {
            return s.Message.getWrapperField(this, a.Image, 5)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.setAvatarMedium = function (e) {
            return s.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.clearAvatarMedium = function () {
            return this.setAvatarMedium(undefined)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.hasAvatarMedium = function () {
            return null != s.Message.getField(this, 5)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.getAvatarLarge = function () {
            return s.Message.getWrapperField(this, a.Image, 6)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.setAvatarLarge = function (e) {
            return s.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.clearAvatarLarge = function () {
            return this.setAvatarLarge(undefined)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo.prototype.hasAvatarLarge = function () {
            return null != s.Message.getField(this, 6)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.getEpisodeId = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.setEpisodeId = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.getEntryTitle = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.setEntryTitle = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.getLinkedLiveRoomsList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo, 4)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.setLinkedLiveRoomsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.addLinkedLiveRooms = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.ShowLinkedLiveRoomsMessage.ShowLinkedLiveRoomInfo, t)
        }, proto.webcast.im.ShowLinkedLiveRoomsMessage.prototype.clearLinkedLiveRoomsList = function () {
            return this.setLinkedLiveRoomsList([])
        }, r.object.extend(t, proto.webcast.im)
    }, 40581: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(57561);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.ShowMultiCameraChangeMessage", null, i), proto.webcast.im.ShowMultiCameraChangeMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.ShowMultiCameraChangeMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.ShowMultiCameraChangeMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShowMultiCameraChangeMessage.displayName = "proto.webcast.im.ShowMultiCameraChangeMessage"), proto.webcast.im.ShowMultiCameraChangeMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowMultiCameraChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShowMultiCameraChangeMessage.toObject(e, this)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                cameraInfosList: s.Message.toObjectList(t.getCameraInfosList(), n.VSCameraInfo.toObject, e),
                randomlyBreakUpTime: s.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShowMultiCameraChangeMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShowMultiCameraChangeMessage;
            return proto.webcast.im.ShowMultiCameraChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.VSCameraInfo;
                        t.readMessage(o, n.VSCameraInfo.deserializeBinaryFromReader), e.addCameraInfos(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setRandomlyBreakUpTime(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShowMultiCameraChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShowMultiCameraChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getCameraInfosList()).length > 0 && t.writeRepeatedMessage(2, o, n.VSCameraInfo.serializeBinaryToWriter), o = e.getRandomlyBreakUpTime(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.getCameraInfosList = function () {
            return s.Message.getRepeatedWrapperField(this, n.VSCameraInfo, 2)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.setCameraInfosList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.addCameraInfos = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.VSCameraInfo, t)
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.clearCameraInfosList = function () {
            return this.setCameraInfosList([])
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.getRandomlyBreakUpTime = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.ShowMultiCameraChangeMessage.prototype.setRandomlyBreakUpTime = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 30036: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.ShowWatchInfoMessage", null, i), proto.webcast.im.ShowWatchInfoMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.ShowWatchInfoMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.ShowWatchInfoMessage.displayName = "proto.webcast.im.ShowWatchInfoMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ShowWatchInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ShowWatchInfoMessage.toObject(e, this)
        }, proto.webcast.im.ShowWatchInfoMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                desc: s.Message.getFieldWithDefault(t, 2, ""),
                count: s.Message.getFieldWithDefault(t, 3, ""),
                countWithBackup: s.Message.getFieldWithDefault(t, 4, ""),
                formatCount: s.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.ShowWatchInfoMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.ShowWatchInfoMessage;
            return proto.webcast.im.ShowWatchInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ShowWatchInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setDesc(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setCount(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setCountWithBackup(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setFormatCount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.ShowWatchInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ShowWatchInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getDesc()).length > 0 && t.writeString(2, o), (o = e.getCount()).length > 0 && t.writeString(3, o), (o = e.getCountWithBackup()).length > 0 && t.writeString(4, o), (o = e.getFormatCount()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.getDesc = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.setDesc = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.getCount = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.setCount = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.getCountWithBackup = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.setCountWithBackup = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.getFormatCount = function () {
            return s.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.ShowWatchInfoMessage.prototype.setFormatCount = function (e) {
            return s.Message.setProto3StringField(this, 5, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 60985: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.SocialMessage", null, i), proto.webcast.im.SocialMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SocialMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SocialMessage.displayName = "proto.webcast.im.SocialMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SocialMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SocialMessage.toObject(e, this)
        }, proto.webcast.im.SocialMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                shareType: s.Message.getFieldWithDefault(t, 3, "0"),
                action: s.Message.getFieldWithDefault(t, 4, "0"),
                shareTarget: s.Message.getFieldWithDefault(t, 5, ""),
                followCount: s.Message.getFieldWithDefault(t, 6, "0"),
                publicAreaCommon: (o = t.getPublicAreaCommon()) && n.PublicAreaCommon.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SocialMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SocialMessage;
            return proto.webcast.im.SocialMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SocialMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readInt64String();
                        e.setShareType(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setAction(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setShareTarget(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setFollowCount(o);
                        break;
                    case 7:
                        o = new n.PublicAreaCommon;
                        t.readMessage(o, n.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SocialMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SocialMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SocialMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), o = e.getShareType(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getAction(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getShareTarget()).length > 0 && t.writeString(5, o), o = e.getFollowCount(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), null != (o = e.getPublicAreaCommon()) && t.writeMessage(7, o, n.PublicAreaCommon.serializeBinaryToWriter)
        }, proto.webcast.im.SocialMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.SocialMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SocialMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SocialMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.SocialMessage.prototype.getUser = function () {
            return s.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.SocialMessage.prototype.setUser = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.SocialMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.SocialMessage.prototype.hasUser = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.SocialMessage.prototype.getShareType = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.SocialMessage.prototype.setShareType = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.SocialMessage.prototype.getAction = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.SocialMessage.prototype.setAction = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.SocialMessage.prototype.getShareTarget = function () {
            return s.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.SocialMessage.prototype.setShareTarget = function (e) {
            return s.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.SocialMessage.prototype.getFollowCount = function () {
            return s.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.SocialMessage.prototype.setFollowCount = function (e) {
            return s.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.SocialMessage.prototype.getPublicAreaCommon = function () {
            return s.Message.getWrapperField(this, n.PublicAreaCommon, 7)
        }, proto.webcast.im.SocialMessage.prototype.setPublicAreaCommon = function (e) {
            return s.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.SocialMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        }, proto.webcast.im.SocialMessage.prototype.hasPublicAreaCommon = function () {
            return null != s.Message.getField(this, 7)
        }, r.object.extend(t, proto.webcast.im)
    }, 27150: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.SpecialPushMessage", null, i), proto.webcast.im.SpecialPushMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SpecialPushMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SpecialPushMessage.displayName = "proto.webcast.im.SpecialPushMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SpecialPushMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SpecialPushMessage.toObject(e, this)
        }, proto.webcast.im.SpecialPushMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                content: s.Message.getFieldWithDefault(t, 2, ""),
                color: s.Message.getFieldWithDefault(t, 3, ""),
                traceid: s.Message.getFieldWithDefault(t, 4, ""),
                icon: (o = t.getIcon()) && a.Image.toObject(e, o),
                actionContent: s.Message.getFieldWithDefault(t, 6, ""),
                actionType: s.Message.getFieldWithDefault(t, 7, "0"),
                pushMessageDisplayTime: s.Message.getFieldWithDefault(t, 8, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SpecialPushMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SpecialPushMessage;
            return proto.webcast.im.SpecialPushMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SpecialPushMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setColor(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setTraceid(o);
                        break;
                    case 5:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setIcon(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setActionContent(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setActionType(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setPushMessageDisplayTime(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SpecialPushMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SpecialPushMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SpecialPushMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), (o = e.getColor()).length > 0 && t.writeString(3, o), (o = e.getTraceid()).length > 0 && t.writeString(4, o), null != (o = e.getIcon()) && t.writeMessage(5, o, a.Image.serializeBinaryToWriter), (o = e.getActionContent()).length > 0 && t.writeString(6, o), o = e.getActionType(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), o = e.getPushMessageDisplayTime(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o)
        }, proto.webcast.im.SpecialPushMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.SpecialPushMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SpecialPushMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.SpecialPushMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.SpecialPushMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.getColor = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.SpecialPushMessage.prototype.setColor = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.getTraceid = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.SpecialPushMessage.prototype.setTraceid = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.getIcon = function () {
            return s.Message.getWrapperField(this, a.Image, 5)
        }, proto.webcast.im.SpecialPushMessage.prototype.setIcon = function (e) {
            return s.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.SpecialPushMessage.prototype.hasIcon = function () {
            return null != s.Message.getField(this, 5)
        }, proto.webcast.im.SpecialPushMessage.prototype.getActionContent = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.SpecialPushMessage.prototype.setActionContent = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.getActionType = function () {
            return s.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.SpecialPushMessage.prototype.setActionType = function (e) {
            return s.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.SpecialPushMessage.prototype.getPushMessageDisplayTime = function () {
            return s.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.SpecialPushMessage.prototype.setPushMessageDisplayTime = function (e) {
            return s.Message.setProto3StringIntField(this, 8, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 90526: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(8411);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.UpdateKoiRoomStatusMessage", null, i), proto.webcast.im.UpdateKoiRoomStatusMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.UpdateKoiRoomStatusMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.UpdateKoiRoomStatusMessage.displayName = "proto.webcast.im.UpdateKoiRoomStatusMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.toObject = function (e) {
            return proto.webcast.im.UpdateKoiRoomStatusMessage.toObject(e, this)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                directorIcon: (o = t.getDirectorIcon()) && a.Image.toObject(e, o),
                curRoundIndex: s.Message.getFieldWithDefault(t, 3, 0),
                status: s.Message.getFieldWithDefault(t, 4, 0),
                directorSchemaUrl: s.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.UpdateKoiRoomStatusMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.UpdateKoiRoomStatusMessage;
            return proto.webcast.im.UpdateKoiRoomStatusMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setDirectorIcon(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setCurRoundIndex(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setStatus(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDirectorSchemaUrl(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.UpdateKoiRoomStatusMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getDirectorIcon()) && t.writeMessage(2, o, a.Image.serializeBinaryToWriter), 0 !== (o = e.getCurRoundIndex()) && t.writeInt32(3, o), 0 !== (o = e.getStatus()) && t.writeInt32(4, o), (o = e.getDirectorSchemaUrl()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.getDirectorIcon = function () {
            return s.Message.getWrapperField(this, a.Image, 2)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.setDirectorIcon = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.clearDirectorIcon = function () {
            return this.setDirectorIcon(undefined)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.hasDirectorIcon = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.getCurRoundIndex = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.setCurRoundIndex = function (e) {
            return s.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.getStatus = function () {
            return s.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.setStatus = function (e) {
            return s.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.getDirectorSchemaUrl = function () {
            return s.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.UpdateKoiRoomStatusMessage.prototype.setDirectorSchemaUrl = function (e) {
            return s.Message.setProto3StringField(this, 5, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 60579: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(91746);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.AudienceEntranceMessage", null, i), r.exportSymbol("proto.webcast.im.CustomizedCardMessage", null, i), r.exportSymbol("proto.webcast.im.GameCardMessage", null, i), r.exportSymbol("proto.webcast.im.StampMessage", null, i), proto.webcast.im.StampMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.StampMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.StampMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.StampMessage.displayName = "proto.webcast.im.StampMessage"), proto.webcast.im.AudienceEntranceMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.AudienceEntranceMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.AudienceEntranceMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.AudienceEntranceMessage.displayName = "proto.webcast.im.AudienceEntranceMessage"), proto.webcast.im.CustomizedCardMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.CustomizedCardMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.CustomizedCardMessage.displayName = "proto.webcast.im.CustomizedCardMessage"), proto.webcast.im.GameCardMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.GameCardMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.GameCardMessage.displayName = "proto.webcast.im.GameCardMessage"), proto.webcast.im.StampMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.StampMessage.prototype.toObject = function (e) {
            return proto.webcast.im.StampMessage.toObject(e, this)
        }, proto.webcast.im.StampMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                stampsList: s.Message.toObjectList(t.getStampsList(), n.StampInfo.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.StampMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.StampMessage;
            return proto.webcast.im.StampMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.StampMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.StampInfo;
                        t.readMessage(o, n.StampInfo.deserializeBinaryFromReader), e.addStamps(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.StampMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.StampMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.StampMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getStampsList()).length > 0 && t.writeRepeatedMessage(2, o, n.StampInfo.serializeBinaryToWriter)
        }, proto.webcast.im.StampMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.StampMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.StampMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.StampMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.StampMessage.prototype.getStampsList = function () {
            return s.Message.getRepeatedWrapperField(this, n.StampInfo, 2)
        }, proto.webcast.im.StampMessage.prototype.setStampsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.StampMessage.prototype.addStamps = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.StampInfo, t)
        }, proto.webcast.im.StampMessage.prototype.clearStampsList = function () {
            return this.setStampsList([])
        }, proto.webcast.im.AudienceEntranceMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AudienceEntranceMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AudienceEntranceMessage.toObject(e, this)
        }, proto.webcast.im.AudienceEntranceMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                entrancesList: s.Message.toObjectList(t.getEntrancesList(), n.AudienceEntranceInfo.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.AudienceEntranceMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.AudienceEntranceMessage;
            return proto.webcast.im.AudienceEntranceMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AudienceEntranceMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.AudienceEntranceInfo;
                        t.readMessage(o, n.AudienceEntranceInfo.deserializeBinaryFromReader), e.addEntrances(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AudienceEntranceMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.AudienceEntranceMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AudienceEntranceMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getEntrancesList()).length > 0 && t.writeRepeatedMessage(2, o, n.AudienceEntranceInfo.serializeBinaryToWriter)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.getEntrancesList = function () {
            return s.Message.getRepeatedWrapperField(this, n.AudienceEntranceInfo, 2)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.setEntrancesList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.addEntrances = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.AudienceEntranceInfo, t)
        }, proto.webcast.im.AudienceEntranceMessage.prototype.clearEntrancesList = function () {
            return this.setEntrancesList([])
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CustomizedCardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CustomizedCardMessage.toObject(e, this)
        }, proto.webcast.im.CustomizedCardMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                card: (o = t.getCard()) && n.CustomizedCardInfo.toObject(e, o),
                appId: s.Message.getFieldWithDefault(t, 3, ""),
                startId: s.Message.getFieldWithDefault(t, 4, ""),
                sceneSource: s.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.CustomizedCardMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.CustomizedCardMessage;
            return proto.webcast.im.CustomizedCardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CustomizedCardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.CustomizedCardInfo;
                        t.readMessage(o, n.CustomizedCardInfo.deserializeBinaryFromReader), e.setCard(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setStartId(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setSceneSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CustomizedCardMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.CustomizedCardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CustomizedCardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getCard()) && t.writeMessage(2, o, n.CustomizedCardInfo.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(3, o), (o = e.getStartId()).length > 0 && t.writeString(4, o), 0 !== (o = e.getSceneSource()) && t.writeInt32(5, o)
        }, proto.webcast.im.CustomizedCardMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.CustomizedCardMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CustomizedCardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CustomizedCardMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.CustomizedCardMessage.prototype.getCard = function () {
            return s.Message.getWrapperField(this, n.CustomizedCardInfo, 2)
        }, proto.webcast.im.CustomizedCardMessage.prototype.setCard = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.CustomizedCardMessage.prototype.clearCard = function () {
            return this.setCard(undefined)
        }, proto.webcast.im.CustomizedCardMessage.prototype.hasCard = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.CustomizedCardMessage.prototype.getAppId = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CustomizedCardMessage.prototype.setAppId = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CustomizedCardMessage.prototype.getStartId = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.CustomizedCardMessage.prototype.setStartId = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.CustomizedCardMessage.prototype.getSceneSource = function () {
            return s.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.CustomizedCardMessage.prototype.setSceneSource = function (e) {
            return s.Message.setProto3IntField(this, 5, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCardMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCardMessage.toObject(e, this)
        }, proto.webcast.im.GameCardMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                card: (o = t.getCard()) && n.GameCardInfo.toObject(e, o),
                appId: s.Message.getFieldWithDefault(t, 3, ""),
                startId: s.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.GameCardMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.GameCardMessage;
            return proto.webcast.im.GameCardMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.GameCardMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.GameCardInfo;
                        t.readMessage(o, n.GameCardInfo.deserializeBinaryFromReader), e.setCard(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setAppId(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setStartId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameCardMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.GameCardMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameCardMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getCard()) && t.writeMessage(2, o, n.GameCardInfo.serializeBinaryToWriter), (o = e.getAppId()).length > 0 && t.writeString(3, o), (o = e.getStartId()).length > 0 && t.writeString(4, o)
        }, proto.webcast.im.GameCardMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.GameCardMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameCardMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameCardMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.GameCardMessage.prototype.getCard = function () {
            return s.Message.getWrapperField(this, n.GameCardInfo, 2)
        }, proto.webcast.im.GameCardMessage.prototype.setCard = function (e) {
            return s.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.GameCardMessage.prototype.clearCard = function () {
            return this.setCard(undefined)
        }, proto.webcast.im.GameCardMessage.prototype.hasCard = function () {
            return null != s.Message.getField(this, 2)
        }, proto.webcast.im.GameCardMessage.prototype.getAppId = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.GameCardMessage.prototype.setAppId = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.GameCardMessage.prototype.getStartId = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.GameCardMessage.prototype.setStartId = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 99137: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.StreamControlMessage", null, i), proto.webcast.im.StreamControlMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.StreamControlMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.StreamControlMessage.displayName = "proto.webcast.im.StreamControlMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.StreamControlMessage.prototype.toObject = function (e) {
            return proto.webcast.im.StreamControlMessage.toObject(e, this)
        }, proto.webcast.im.StreamControlMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                controlParams: s.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.StreamControlMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.StreamControlMessage;
            return proto.webcast.im.StreamControlMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.StreamControlMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setControlParams(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.StreamControlMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.StreamControlMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.StreamControlMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getControlParams()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.StreamControlMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.StreamControlMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.StreamControlMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.StreamControlMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.StreamControlMessage.prototype.getControlParams = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.StreamControlMessage.prototype.setControlParams = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 43669: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.SubscribeAssetMessage", null, i), r.exportSymbol("proto.webcast.im.SubscribeInfoMessage", null, i), proto.webcast.im.SubscribeInfoMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SubscribeInfoMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SubscribeInfoMessage.displayName = "proto.webcast.im.SubscribeInfoMessage"), proto.webcast.im.SubscribeAssetMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SubscribeAssetMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SubscribeAssetMessage.displayName = "proto.webcast.im.SubscribeAssetMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SubscribeInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SubscribeInfoMessage.toObject(e, this)
        }, proto.webcast.im.SubscribeInfoMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                isMember: s.Message.getBooleanFieldWithDefault(t, 2, !1)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SubscribeInfoMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SubscribeInfoMessage;
            return proto.webcast.im.SubscribeInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SubscribeInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBool();
                        e.setIsMember(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SubscribeInfoMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SubscribeInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SubscribeInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getIsMember()) && t.writeBool(2, o)
        }, proto.webcast.im.SubscribeInfoMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.SubscribeInfoMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SubscribeInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SubscribeInfoMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.SubscribeInfoMessage.prototype.getIsMember = function () {
            return s.Message.getBooleanFieldWithDefault(this, 2, !1)
        }, proto.webcast.im.SubscribeInfoMessage.prototype.setIsMember = function (e) {
            return s.Message.setProto3BooleanField(this, 2, e)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SubscribeAssetMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SubscribeAssetMessage.toObject(e, this)
        }, proto.webcast.im.SubscribeAssetMessage.toObject = function (e, t) {
            var o, s = {common: (o = t.getCommon()) && a.Common.toObject(e, o)};
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.SubscribeAssetMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SubscribeAssetMessage;
            return proto.webcast.im.SubscribeAssetMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SubscribeAssetMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = new a.Common;
                    t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.SubscribeAssetMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SubscribeAssetMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SubscribeAssetMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter)
        }, proto.webcast.im.SubscribeAssetMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.SubscribeAssetMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SubscribeAssetMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SubscribeAssetMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, r.object.extend(t, proto.webcast.im)
    }, 28043: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(99222);
        r.object.extend(proto, a);
        var n = o(50684);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.SunDailyRankMessage", null, i), r.exportSymbol("proto.webcast.im.SunDailyRankMessage.RankInfo", null, i), r.exportSymbol("proto.webcast.im.SunDailyRankMessage.RankStage", null, i), proto.webcast.im.SunDailyRankMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.SunDailyRankMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.SunDailyRankMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SunDailyRankMessage.displayName = "proto.webcast.im.SunDailyRankMessage"), proto.webcast.im.SunDailyRankMessage.RankInfo = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SunDailyRankMessage.RankInfo, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SunDailyRankMessage.RankInfo.displayName = "proto.webcast.im.SunDailyRankMessage.RankInfo"), proto.webcast.im.SunDailyRankMessage.repeatedFields_ = [16], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SunDailyRankMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SunDailyRankMessage.toObject(e, this)
        }, proto.webcast.im.SunDailyRankMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                content: s.Message.getFieldWithDefault(t, 2, ""),
                duration: s.Message.getFieldWithDefault(t, 3, "0"),
                afterContent: s.Message.getFieldWithDefault(t, 4, ""),
                messageType: s.Message.getFieldWithDefault(t, 5, "0"),
                schema: s.Message.getFieldWithDefault(t, 6, ""),
                extra: s.Message.getFieldWithDefault(t, 7, ""),
                style: s.Message.getFieldWithDefault(t, 8, ""),
                afterDisplayText: (o = t.getAfterDisplayText()) && a.Text.toObject(e, o),
                rank: s.Message.getFieldWithDefault(t, 10, "0"),
                richContent: s.Message.getFieldWithDefault(t, 11, ""),
                userSideContent: s.Message.getFieldWithDefault(t, 12, ""),
                contentType: s.Message.getFieldWithDefault(t, 13, "0"),
                cityCode: s.Message.getFieldWithDefault(t, 14, ""),
                rankStage: s.Message.getFieldWithDefault(t, 15, 0),
                ranksList: s.Message.toObjectList(t.getRanksList(), proto.webcast.im.SunDailyRankMessage.RankInfo.toObject, e),
                beginTime: s.Message.getFieldWithDefault(t, 17, "0"),
                deltaTime: s.Message.getFieldWithDefault(t, 18, "0"),
                entranceAppearingText: (o = t.getEntranceAppearingText()) && a.Text.toObject(e, o),
                displayTextV2: (o = t.getDisplayTextV2()) && a.Text.toObject(e, o),
                afterDisplayTextV2: (o = t.getAfterDisplayTextV2()) && a.Text.toObject(e, o),
                durationV2: s.Message.getFieldWithDefault(t, 22, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SunDailyRankMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SunDailyRankMessage;
            return proto.webcast.im.SunDailyRankMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SunDailyRankMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAfterContent(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setMessageType(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setSchema(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setStyle(o);
                        break;
                    case 9:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setAfterDisplayText(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setRank(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setRichContent(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setUserSideContent(o);
                        break;
                    case 13:
                        o = t.readInt64String();
                        e.setContentType(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setCityCode(o);
                        break;
                    case 15:
                        o = t.readEnum();
                        e.setRankStage(o);
                        break;
                    case 16:
                        o = new proto.webcast.im.SunDailyRankMessage.RankInfo;
                        t.readMessage(o, proto.webcast.im.SunDailyRankMessage.RankInfo.deserializeBinaryFromReader), e.addRanks(o);
                        break;
                    case 17:
                        o = t.readInt64String();
                        e.setBeginTime(o);
                        break;
                    case 18:
                        o = t.readInt64String();
                        e.setDeltaTime(o);
                        break;
                    case 19:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setEntranceAppearingText(o);
                        break;
                    case 20:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setDisplayTextV2(o);
                        break;
                    case 21:
                        o = new a.Text;
                        t.readMessage(o, a.Text.deserializeBinaryFromReader), e.setAfterDisplayTextV2(o);
                        break;
                    case 22:
                        o = t.readInt64String();
                        e.setDurationV2(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SunDailyRankMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SunDailyRankMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SunDailyRankMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getAfterContent()).length > 0 && t.writeString(4, o), o = e.getMessageType(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getSchema()).length > 0 && t.writeString(6, o), (o = e.getExtra()).length > 0 && t.writeString(7, o), (o = e.getStyle()).length > 0 && t.writeString(8, o), null != (o = e.getAfterDisplayText()) && t.writeMessage(9, o, a.Text.serializeBinaryToWriter), o = e.getRank(), 0 !== parseInt(o, 10) && t.writeInt64String(10, o), (o = e.getRichContent()).length > 0 && t.writeString(11, o), (o = e.getUserSideContent()).length > 0 && t.writeString(12, o), o = e.getContentType(), 0 !== parseInt(o, 10) && t.writeInt64String(13, o), (o = e.getCityCode()).length > 0 && t.writeString(14, o), 0 !== (o = e.getRankStage()) && t.writeEnum(15, o), (o = e.getRanksList()).length > 0 && t.writeRepeatedMessage(16, o, proto.webcast.im.SunDailyRankMessage.RankInfo.serializeBinaryToWriter), o = e.getBeginTime(), 0 !== parseInt(o, 10) && t.writeInt64String(17, o), o = e.getDeltaTime(), 0 !== parseInt(o, 10) && t.writeInt64String(18, o), null != (o = e.getEntranceAppearingText()) && t.writeMessage(19, o, a.Text.serializeBinaryToWriter), null != (o = e.getDisplayTextV2()) && t.writeMessage(20, o, a.Text.serializeBinaryToWriter), null != (o = e.getAfterDisplayTextV2()) && t.writeMessage(21, o, a.Text.serializeBinaryToWriter), o = e.getDurationV2(), 0 !== parseInt(o, 10) && t.writeInt64String(22, o)
        }, proto.webcast.im.SunDailyRankMessage.RankStage = {
            TYPE_NORMAL: 0,
            TYPE_WARMUP: 1,
            TYPE_SPRINT: 2
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SunDailyRankMessage.RankInfo.prototype.toObject = function (e) {
            return proto.webcast.im.SunDailyRankMessage.RankInfo.toObject(e, this)
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.toObject = function (e, t) {
            var o = {
                rankType: s.Message.getFieldWithDefault(t, 1, "0"),
                rank: s.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.SunDailyRankMessage.RankInfo.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SunDailyRankMessage.RankInfo;
            return proto.webcast.im.SunDailyRankMessage.RankInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setRankType(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRank(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SunDailyRankMessage.RankInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getRankType(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getRank(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o)
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.prototype.getRankType = function () {
            return s.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.prototype.setRankType = function (e) {
            return s.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.prototype.getRank = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.SunDailyRankMessage.RankInfo.prototype.setRank = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SunDailyRankMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getDuration = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setDuration = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getAfterContent = function () {
            return s.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setAfterContent = function (e) {
            return s.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getMessageType = function () {
            return s.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setMessageType = function (e) {
            return s.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getSchema = function () {
            return s.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setSchema = function (e) {
            return s.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getExtra = function () {
            return s.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setExtra = function (e) {
            return s.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getStyle = function () {
            return s.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setStyle = function (e) {
            return s.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getAfterDisplayText = function () {
            return s.Message.getWrapperField(this, a.Text, 9)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setAfterDisplayText = function (e) {
            return s.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.clearAfterDisplayText = function () {
            return this.setAfterDisplayText(undefined)
        }, proto.webcast.im.SunDailyRankMessage.prototype.hasAfterDisplayText = function () {
            return null != s.Message.getField(this, 9)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getRank = function () {
            return s.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setRank = function (e) {
            return s.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getRichContent = function () {
            return s.Message.getFieldWithDefault(this, 11, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setRichContent = function (e) {
            return s.Message.setProto3StringField(this, 11, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getUserSideContent = function () {
            return s.Message.getFieldWithDefault(this, 12, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setUserSideContent = function (e) {
            return s.Message.setProto3StringField(this, 12, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getContentType = function () {
            return s.Message.getFieldWithDefault(this, 13, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setContentType = function (e) {
            return s.Message.setProto3StringIntField(this, 13, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getCityCode = function () {
            return s.Message.getFieldWithDefault(this, 14, "")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setCityCode = function (e) {
            return s.Message.setProto3StringField(this, 14, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getRankStage = function () {
            return s.Message.getFieldWithDefault(this, 15, 0)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setRankStage = function (e) {
            return s.Message.setProto3EnumField(this, 15, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getRanksList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.SunDailyRankMessage.RankInfo, 16)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setRanksList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 16, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.addRanks = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 16, e, proto.webcast.im.SunDailyRankMessage.RankInfo, t)
        }, proto.webcast.im.SunDailyRankMessage.prototype.clearRanksList = function () {
            return this.setRanksList([])
        }, proto.webcast.im.SunDailyRankMessage.prototype.getBeginTime = function () {
            return s.Message.getFieldWithDefault(this, 17, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setBeginTime = function (e) {
            return s.Message.setProto3StringIntField(this, 17, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getDeltaTime = function () {
            return s.Message.getFieldWithDefault(this, 18, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setDeltaTime = function (e) {
            return s.Message.setProto3StringIntField(this, 18, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getEntranceAppearingText = function () {
            return s.Message.getWrapperField(this, a.Text, 19)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setEntranceAppearingText = function (e) {
            return s.Message.setWrapperField(this, 19, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.clearEntranceAppearingText = function () {
            return this.setEntranceAppearingText(undefined)
        }, proto.webcast.im.SunDailyRankMessage.prototype.hasEntranceAppearingText = function () {
            return null != s.Message.getField(this, 19)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getDisplayTextV2 = function () {
            return s.Message.getWrapperField(this, a.Text, 20)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setDisplayTextV2 = function (e) {
            return s.Message.setWrapperField(this, 20, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.clearDisplayTextV2 = function () {
            return this.setDisplayTextV2(undefined)
        }, proto.webcast.im.SunDailyRankMessage.prototype.hasDisplayTextV2 = function () {
            return null != s.Message.getField(this, 20)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getAfterDisplayTextV2 = function () {
            return s.Message.getWrapperField(this, a.Text, 21)
        }, proto.webcast.im.SunDailyRankMessage.prototype.setAfterDisplayTextV2 = function (e) {
            return s.Message.setWrapperField(this, 21, e)
        }, proto.webcast.im.SunDailyRankMessage.prototype.clearAfterDisplayTextV2 = function () {
            return this.setAfterDisplayTextV2(undefined)
        }, proto.webcast.im.SunDailyRankMessage.prototype.hasAfterDisplayTextV2 = function () {
            return null != s.Message.getField(this, 21)
        }, proto.webcast.im.SunDailyRankMessage.prototype.getDurationV2 = function () {
            return s.Message.getFieldWithDefault(this, 22, "0")
        }, proto.webcast.im.SunDailyRankMessage.prototype.setDurationV2 = function (e) {
            return s.Message.setProto3StringIntField(this, 22, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 63439: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a), r.exportSymbol("proto.webcast.im.SyncStreamInfoMessage", null, i), r.exportSymbol("proto.webcast.im.SyncStreamMessage", null, i), proto.webcast.im.SyncStreamInfoMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SyncStreamInfoMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SyncStreamInfoMessage.displayName = "proto.webcast.im.SyncStreamInfoMessage"), proto.webcast.im.SyncStreamMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.SyncStreamMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.SyncStreamMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SyncStreamMessage.displayName = "proto.webcast.im.SyncStreamMessage"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SyncStreamInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SyncStreamInfoMessage.toObject(e, this)
        }, proto.webcast.im.SyncStreamInfoMessage.toObject = function (e, t) {
            var o, r = {
                timestamp: s.Message.getFieldWithDefault(t, 1, "0"),
                key: s.Message.getFieldWithDefault(t, 2, ""),
                info: s.Message.getFieldWithDefault(t, 3, ""),
                common: (o = t.getCommon()) && a.Common.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SyncStreamInfoMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SyncStreamInfoMessage;
            return proto.webcast.im.SyncStreamInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SyncStreamInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setTimestamp(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setKey(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setInfo(o);
                        break;
                    case 4:
                        o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SyncStreamInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SyncStreamInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getKey()).length > 0 && t.writeString(2, o), (o = e.getInfo()).length > 0 && t.writeString(3, o), null != (o = e.getCommon()) && t.writeMessage(4, o, a.Common.serializeBinaryToWriter)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.getTimestamp = function () {
            return s.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.setTimestamp = function (e) {
            return s.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.getKey = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.setKey = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.getInfo = function () {
            return s.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.setInfo = function (e) {
            return s.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 4)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SyncStreamInfoMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 4)
        }, proto.webcast.im.SyncStreamMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SyncStreamMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SyncStreamMessage.toObject(e, this)
        }, proto.webcast.im.SyncStreamMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                infoListList: s.Message.toObjectList(t.getInfoListList(), proto.webcast.im.SyncStreamInfoMessage.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SyncStreamMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SyncStreamMessage;
            return proto.webcast.im.SyncStreamMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SyncStreamMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.SyncStreamInfoMessage;
                        t.readMessage(o, proto.webcast.im.SyncStreamInfoMessage.deserializeBinaryFromReader), e.addInfoList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SyncStreamMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SyncStreamMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SyncStreamMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getInfoListList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.SyncStreamInfoMessage.serializeBinaryToWriter)
        }, proto.webcast.im.SyncStreamMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.SyncStreamMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SyncStreamMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SyncStreamMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.SyncStreamMessage.prototype.getInfoListList = function () {
            return s.Message.getRepeatedWrapperField(this, proto.webcast.im.SyncStreamInfoMessage, 2)
        }, proto.webcast.im.SyncStreamMessage.prototype.setInfoListList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.SyncStreamMessage.prototype.addInfoList = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.SyncStreamInfoMessage, t)
        }, proto.webcast.im.SyncStreamMessage.prototype.clearInfoListList = function () {
            return this.setInfoListList([])
        }, r.object.extend(t, proto.webcast.im)
    }, 72329: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        r.exportSymbol("proto.webcast.im.SystemMessage", null, i), r.exportSymbol("proto.webcast.im.SystemMessage.Common", null, i), proto.webcast.im.SystemMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SystemMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SystemMessage.displayName = "proto.webcast.im.SystemMessage"), proto.webcast.im.SystemMessage.Common = function (e) {
            s.Message.initialize(this, e, 0, -1, null, null)
        }, r.inherits(proto.webcast.im.SystemMessage.Common, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.SystemMessage.Common.displayName = "proto.webcast.im.SystemMessage.Common"), s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SystemMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SystemMessage.toObject(e, this)
        }, proto.webcast.im.SystemMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && proto.webcast.im.SystemMessage.Common.toObject(e, o),
                content: s.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.SystemMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SystemMessage;
            return proto.webcast.im.SystemMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SystemMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new proto.webcast.im.SystemMessage.Common;
                        t.readMessage(o, proto.webcast.im.SystemMessage.Common.deserializeBinaryFromReader), e.setCommon(o);
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
        }, proto.webcast.im.SystemMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SystemMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SystemMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, proto.webcast.im.SystemMessage.Common.serializeBinaryToWriter), (o = e.getContent()).length > 0 && t.writeString(2, o)
        }, s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SystemMessage.Common.prototype.toObject = function (e) {
            return proto.webcast.im.SystemMessage.Common.toObject(e, this)
        }, proto.webcast.im.SystemMessage.Common.toObject = function (e, t) {
            var o = {
                method: s.Message.getFieldWithDefault(t, 1, ""),
                msgId: s.Message.getFieldWithDefault(t, 2, "0"),
                roomId: s.Message.getFieldWithDefault(t, 3, "0"),
                createTime: s.Message.getFieldWithDefault(t, 4, "0"),
                monitor: s.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.SystemMessage.Common.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.SystemMessage.Common;
            return proto.webcast.im.SystemMessage.Common.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SystemMessage.Common.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setMethod(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMsgId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setRoomId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setCreateTime(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setMonitor(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SystemMessage.Common.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.SystemMessage.Common.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SystemMessage.Common.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getMethod()).length > 0 && t.writeString(1, o), o = e.getMsgId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getRoomId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getCreateTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), 0 !== (o = e.getMonitor()) && t.writeInt32(5, o)
        }, proto.webcast.im.SystemMessage.Common.prototype.getMethod = function () {
            return s.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.SystemMessage.Common.prototype.setMethod = function (e) {
            return s.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.SystemMessage.Common.prototype.getMsgId = function () {
            return s.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.SystemMessage.Common.prototype.setMsgId = function (e) {
            return s.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.SystemMessage.Common.prototype.getRoomId = function () {
            return s.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.SystemMessage.Common.prototype.setRoomId = function (e) {
            return s.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.SystemMessage.Common.prototype.getCreateTime = function () {
            return s.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.SystemMessage.Common.prototype.setCreateTime = function (e) {
            return s.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.SystemMessage.Common.prototype.getMonitor = function () {
            return s.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.SystemMessage.Common.prototype.setMonitor = function (e) {
            return s.Message.setProto3IntField(this, 5, e)
        }, proto.webcast.im.SystemMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, proto.webcast.im.SystemMessage.Common, 1)
        }, proto.webcast.im.SystemMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SystemMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SystemMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.SystemMessage.prototype.getContent = function () {
            return s.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.SystemMessage.prototype.setContent = function (e) {
            return s.Message.setProto3StringField(this, 2, e)
        }, r.object.extend(t, proto.webcast.im)
    }, 87708: function (e, t, o) {
        var s = o(47865), r = s, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        r.object.extend(proto, a);
        var n = o(51764);
        r.object.extend(proto, n), r.exportSymbol("proto.webcast.im.TaskMessage", null, i), r.exportSymbol("proto.webcast.im.TaskMessageAction", null, i), proto.webcast.im.TaskMessage = function (e) {
            s.Message.initialize(this, e, 0, -1, proto.webcast.im.TaskMessage.repeatedFields_, null)
        }, r.inherits(proto.webcast.im.TaskMessage, s.Message), r.DEBUG && !COMPILED && (proto.webcast.im.TaskMessage.displayName = "proto.webcast.im.TaskMessage"), proto.webcast.im.TaskMessage.repeatedFields_ = [2], s.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TaskMessage.prototype.toObject = function (e) {
            return proto.webcast.im.TaskMessage.toObject(e, this)
        }, proto.webcast.im.TaskMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                taskRecordsList: s.Message.toObjectList(t.getTaskRecordsList(), n.TaskRecord.toObject, e),
                action: s.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.TaskMessage.deserializeBinary = function (e) {
            var t = new s.BinaryReader(e), o = new proto.webcast.im.TaskMessage;
            return proto.webcast.im.TaskMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TaskMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.TaskRecord;
                        t.readMessage(o, n.TaskRecord.deserializeBinaryFromReader), e.addTaskRecords(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setAction(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TaskMessage.prototype.serializeBinary = function () {
            var e = new s.BinaryWriter;
            return proto.webcast.im.TaskMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TaskMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getTaskRecordsList()).length > 0 && t.writeRepeatedMessage(2, o, n.TaskRecord.serializeBinaryToWriter), 0 !== (o = e.getAction()) && t.writeEnum(3, o)
        }, proto.webcast.im.TaskMessage.prototype.getCommon = function () {
            return s.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.TaskMessage.prototype.setCommon = function (e) {
            return s.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.TaskMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.TaskMessage.prototype.hasCommon = function () {
            return null != s.Message.getField(this, 1)
        }, proto.webcast.im.TaskMessage.prototype.getTaskRecordsList = function () {
            return s.Message.getRepeatedWrapperField(this, n.TaskRecord, 2)
        }, proto.webcast.im.TaskMessage.prototype.setTaskRecordsList = function (e) {
            return s.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.TaskMessage.prototype.addTaskRecords = function (e, t) {
            return s.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.TaskRecord, t)
        }, proto.webcast.im.TaskMessage.prototype.clearTaskRecordsList = function () {
            return this.setTaskRecordsList([])
        }, proto.webcast.im.TaskMessage.prototype.getAction = function () {
            return s.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.TaskMessage.prototype.setAction = function (e) {
            return s.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.TaskMessageAction = {
            TASKMESSAGEACTION_UNKNOWN: 0,
            TASKSTART: 1,
            PROGRESSUPDATED: 2,
            TASKTRACED: 3
        }, r.object.extend(t, proto.webcast.im)
    }
}]);