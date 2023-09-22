(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3971], {
    74402: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.AnswerReviewMessage", null, s), i.exportSymbol("proto.webcast.im.AnswerReviewMsgTypeEnum", null, s), i.exportSymbol("proto.webcast.im.AnswerReviewResTypeEnum", null, s), proto.webcast.im.AnswerReviewMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.AnswerReviewMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.AnswerReviewMessage.displayName = "proto.webcast.im.AnswerReviewMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AnswerReviewMessage.prototype.toObject = function (e) {
            return proto.webcast.im.AnswerReviewMessage.toObject(e, this)
        }, proto.webcast.im.AnswerReviewMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                answerreviewmsgtypeenum: r.Message.getFieldWithDefault(t, 2, 0),
                answerId: r.Message.getFieldWithDefault(t, 3, "0"),
                chatId: r.Message.getFieldWithDefault(t, 4, "0"),
                answerreviewrestypeenum: r.Message.getFieldWithDefault(t, 5, 0),
                videoPinId: r.Message.getFieldWithDefault(t, 6, "0"),
                originalMsgId: r.Message.getFieldWithDefault(t, 7, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.AnswerReviewMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.AnswerReviewMessage;
            return proto.webcast.im.AnswerReviewMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.AnswerReviewMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setAnswerreviewmsgtypeenum(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setAnswerId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setChatId(o);
                        break;
                    case 5:
                        o = t.readEnum();
                        e.setAnswerreviewrestypeenum(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setVideoPinId(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setOriginalMsgId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.AnswerReviewMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.AnswerReviewMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.AnswerReviewMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getAnswerreviewmsgtypeenum()) && t.writeEnum(2, o), o = e.getAnswerId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getChatId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), 0 !== (o = e.getAnswerreviewrestypeenum()) && t.writeEnum(5, o), o = e.getVideoPinId(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getOriginalMsgId(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.AnswerReviewMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.AnswerReviewMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.AnswerReviewMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getAnswerreviewmsgtypeenum = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.AnswerReviewMessage.prototype.setAnswerreviewmsgtypeenum = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getAnswerId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.AnswerReviewMessage.prototype.setAnswerId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getChatId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.AnswerReviewMessage.prototype.setChatId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getAnswerreviewrestypeenum = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.im.AnswerReviewMessage.prototype.setAnswerreviewrestypeenum = function (e) {
            return r.Message.setProto3EnumField(this, 5, e)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getVideoPinId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.AnswerReviewMessage.prototype.setVideoPinId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.AnswerReviewMessage.prototype.getOriginalMsgId = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.AnswerReviewMessage.prototype.setOriginalMsgId = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.AnswerReviewMsgTypeEnum = {
            DEFAULTREVIEWMSG: 0,
            ANSWERREVIEWMSG: 1,
            CHATREVIEWMSG: 2,
            VIDEOREVIEWMSG: 3
        }, proto.webcast.im.AnswerReviewResTypeEnum = {
            DEFAULTREVIEWRES: 0,
            REVIEWFAIL: 1,
            REVIEWPASS: 2
        }, i.object.extend(t, proto.webcast.im)
    }, 21520: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(8411);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.BattleMultiMatchMessage", null, s), i.exportSymbol("proto.webcast.im.BattleMultiMatchMessage.MatchStatus", null, s), i.exportSymbol("proto.webcast.im.BattleMultiMatchMessage.PreviewUser", null, s), proto.webcast.im.BattleMultiMatchMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.BattleMultiMatchMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.BattleMultiMatchMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.BattleMultiMatchMessage.displayName = "proto.webcast.im.BattleMultiMatchMessage"), proto.webcast.im.BattleMultiMatchMessage.PreviewUser = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.BattleMultiMatchMessage.PreviewUser, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.BattleMultiMatchMessage.PreviewUser.displayName = "proto.webcast.im.BattleMultiMatchMessage.PreviewUser"), proto.webcast.im.BattleMultiMatchMessage.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleMultiMatchMessage.prototype.toObject = function (e) {
            return proto.webcast.im.BattleMultiMatchMessage.toObject(e, this)
        }, proto.webcast.im.BattleMultiMatchMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                matchStatus: r.Message.getFieldWithDefault(t, 2, 0),
                expectTime: r.Message.getFieldWithDefault(t, 3, "0"),
                previewUserListList: r.Message.toObjectList(t.getPreviewUserListList(), proto.webcast.im.BattleMultiMatchMessage.PreviewUser.toObject, e),
                defaultWaitLimit: r.Message.getFieldWithDefault(t, 5, "0"),
                inviteLimitSec: r.Message.getFieldWithDefault(t, 6, "0"),
                matchType: r.Message.getFieldWithDefault(t, 7, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.BattleMultiMatchMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleMultiMatchMessage;
            return proto.webcast.im.BattleMultiMatchMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleMultiMatchMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMatchStatus(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setExpectTime(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.BattleMultiMatchMessage.PreviewUser;
                        t.readMessage(o, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.deserializeBinaryFromReader), e.addPreviewUserList(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setDefaultWaitLimit(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setInviteLimitSec(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setMatchType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleMultiMatchMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleMultiMatchMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMatchStatus()) && t.writeEnum(2, o), o = e.getExpectTime(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getPreviewUserListList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.serializeBinaryToWriter), o = e.getDefaultWaitLimit(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getInviteLimitSec(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getMatchType(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o)
        }, proto.webcast.im.BattleMultiMatchMessage.MatchStatus = {
            STARTMATCH: 0,
            CANCELMATCHACTIVELY: 1,
            CANCELMATCHPASSIVELY: 2,
            MATCHFAILED: 3
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.toObject = function (e) {
            return proto.webcast.im.BattleMultiMatchMessage.PreviewUser.toObject(e, this)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.toObject = function (e, t) {
            var o, i = {
                nickname: r.Message.getFieldWithDefault(t, 1, ""),
                avatar: (o = t.getAvatar()) && a.Image.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.BattleMultiMatchMessage.PreviewUser.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.BattleMultiMatchMessage.PreviewUser;
            return proto.webcast.im.BattleMultiMatchMessage.PreviewUser.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setNickname(o);
                        break;
                    case 2:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setAvatar(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.BattleMultiMatchMessage.PreviewUser.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getNickname()).length > 0 && t.writeString(1, o), null != (o = e.getAvatar()) && t.writeMessage(2, o, a.Image.serializeBinaryToWriter)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.getNickname = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.setNickname = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.getAvatar = function () {
            return r.Message.getWrapperField(this, a.Image, 2)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.setAvatar = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.clearAvatar = function () {
            return this.setAvatar(undefined)
        }, proto.webcast.im.BattleMultiMatchMessage.PreviewUser.prototype.hasAvatar = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getMatchStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setMatchStatus = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getExpectTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setExpectTime = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getPreviewUserListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.BattleMultiMatchMessage.PreviewUser, 4)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setPreviewUserListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.addPreviewUserList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.BattleMultiMatchMessage.PreviewUser, t)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.clearPreviewUserListList = function () {
            return this.setPreviewUserListList([])
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getDefaultWaitLimit = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setDefaultWaitLimit = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getInviteLimitSec = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setInviteLimitSec = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.getMatchType = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.BattleMultiMatchMessage.prototype.setMatchType = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 91807: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(8411);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.CNYATaskMessage", null, s), i.exportSymbol("proto.webcast.im.CNYReward", null, s), proto.webcast.im.CNYReward = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.CNYReward, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.CNYReward.displayName = "proto.webcast.im.CNYReward"), proto.webcast.im.CNYATaskMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CNYATaskMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.CNYATaskMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.CNYATaskMessage.displayName = "proto.webcast.im.CNYATaskMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CNYReward.prototype.toObject = function (e) {
            return proto.webcast.im.CNYReward.toObject(e, this)
        }, proto.webcast.im.CNYReward.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                awardContent: r.Message.getFieldWithDefault(t, 2, ""),
                bannerContent: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.CNYReward.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CNYReward;
            return proto.webcast.im.CNYReward.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CNYReward.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setAwardContent(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBannerContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CNYReward.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CNYReward.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CNYReward.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getAwardContent()).length > 0 && t.writeString(2, o), (o = e.getBannerContent()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.CNYReward.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CNYReward.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CNYReward.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CNYReward.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CNYReward.prototype.getAwardContent = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CNYReward.prototype.setAwardContent = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CNYReward.prototype.getBannerContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CNYReward.prototype.setBannerContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CNYATaskMessage.repeatedFields_ = [9], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CNYATaskMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CNYATaskMessage.toObject(e, this)
        }, proto.webcast.im.CNYATaskMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                watchDuration: r.Message.getFieldWithDefault(t, 2, "0"),
                watchTotal: r.Message.getFieldWithDefault(t, 3, "0"),
                currentRound: r.Message.getFieldWithDefault(t, 7, 0),
                pct: r.Message.getFieldWithDefault(t, 8, 0),
                roundTargetList: null == (o = r.Message.getRepeatedField(t, 9)) ? undefined : o,
                allDescMap: (o = t.getAllDescMap()) ? o.toObject(e, undefined) : [],
                allImageMap: (o = t.getAllImageMap()) ? o.toObject(e, proto.webcast.data.Image.toObject) : []
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.CNYATaskMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CNYATaskMessage;
            return proto.webcast.im.CNYATaskMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CNYATaskMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setWatchDuration(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setWatchTotal(o);
                        break;
                    case 7:
                        o = t.readInt32();
                        e.setCurrentRound(o);
                        break;
                    case 8:
                        o = t.readInt32();
                        e.setPct(o);
                        break;
                    case 9:
                        for (var i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < i.length; s++) e.addRoundTarget(i[s]);
                        break;
                    case 10:
                        o = e.getAllDescMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 11:
                        o = e.getAllImageMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.webcast.data.Image.deserializeBinaryFromReader, "", new proto.webcast.data.Image)
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CNYATaskMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CNYATaskMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CNYATaskMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getWatchDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getWatchTotal(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), 0 !== (o = e.getCurrentRound()) && t.writeInt32(7, o), 0 !== (o = e.getPct()) && t.writeInt32(8, o), (o = e.getRoundTargetList()).length > 0 && t.writePackedInt64String(9, o), (o = e.getAllDescMap(!0)) && o.getLength() > 0 && o.serializeBinary(10, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (o = e.getAllImageMap(!0)) && o.getLength() > 0 && o.serializeBinary(11, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.Image.serializeBinaryToWriter)
        }, proto.webcast.im.CNYATaskMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CNYATaskMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CNYATaskMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CNYATaskMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CNYATaskMessage.prototype.getWatchDuration = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.CNYATaskMessage.prototype.setWatchDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.CNYATaskMessage.prototype.getWatchTotal = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.CNYATaskMessage.prototype.setWatchTotal = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.CNYATaskMessage.prototype.getCurrentRound = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.CNYATaskMessage.prototype.setCurrentRound = function (e) {
            return r.Message.setProto3IntField(this, 7, e)
        }, proto.webcast.im.CNYATaskMessage.prototype.getPct = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.im.CNYATaskMessage.prototype.setPct = function (e) {
            return r.Message.setProto3IntField(this, 8, e)
        }, proto.webcast.im.CNYATaskMessage.prototype.getRoundTargetList = function () {
            return r.Message.getRepeatedField(this, 9)
        }, proto.webcast.im.CNYATaskMessage.prototype.setRoundTargetList = function (e) {
            return r.Message.setField(this, 9, e || [])
        }, proto.webcast.im.CNYATaskMessage.prototype.addRoundTarget = function (e, t) {
            return r.Message.addToRepeatedField(this, 9, e, t)
        }, proto.webcast.im.CNYATaskMessage.prototype.clearRoundTargetList = function () {
            return this.setRoundTargetList([])
        }, proto.webcast.im.CNYATaskMessage.prototype.getAllDescMap = function (e) {
            return r.Message.getMapField(this, 10, e, null)
        }, proto.webcast.im.CNYATaskMessage.prototype.clearAllDescMap = function () {
            return this.getAllDescMap().clear(), this
        }, proto.webcast.im.CNYATaskMessage.prototype.getAllImageMap = function (e) {
            return r.Message.getMapField(this, 11, e, proto.webcast.data.Image)
        }, proto.webcast.im.CNYATaskMessage.prototype.clearAllImageMap = function () {
            return this.getAllImageMap().clear(), this
        }, i.object.extend(t, proto.webcast.im)
    }, 64002: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(44262);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.CommonCardAreaMessage", null, s), i.exportSymbol("proto.webcast.im.CommonCardAreaMessage.MessageType", null, s), proto.webcast.im.CommonCardAreaMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.CommonCardAreaMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.CommonCardAreaMessage.displayName = "proto.webcast.im.CommonCardAreaMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CommonCardAreaMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CommonCardAreaMessage.toObject(e, this)
        }, proto.webcast.im.CommonCardAreaMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                messageType: r.Message.getFieldWithDefault(t, 2, 0),
                bottomRightCardData: (o = t.getBottomRightCardData()) && a.BottomRightCardArea.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.CommonCardAreaMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CommonCardAreaMessage;
            return proto.webcast.im.CommonCardAreaMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CommonCardAreaMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMessageType(o);
                        break;
                    case 3:
                        o = new a.BottomRightCardArea;
                        t.readMessage(o, a.BottomRightCardArea.deserializeBinaryFromReader), e.setBottomRightCardData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CommonCardAreaMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CommonCardAreaMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CommonCardAreaMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMessageType()) && t.writeEnum(2, o), null != (o = e.getBottomRightCardData()) && t.writeMessage(3, o, a.BottomRightCardArea.serializeBinaryToWriter)
        }, proto.webcast.im.CommonCardAreaMessage.MessageType = {
            UNKNOWNMESSAGETYPE: 0,
            REFRESH: 1,
            DESTROY: 2
        }, proto.webcast.im.CommonCardAreaMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.getBottomRightCardData = function () {
            return r.Message.getWrapperField(this, a.BottomRightCardArea, 3)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.setBottomRightCardData = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.clearBottomRightCardData = function () {
            return this.setBottomRightCardData(undefined)
        }, proto.webcast.im.CommonCardAreaMessage.prototype.hasBottomRightCardData = function () {
            return null != r.Message.getField(this, 3)
        }, i.object.extend(t, proto.webcast.im)
    }, 4791: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(57561);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.DecorationUpdateMessage", null, s), proto.webcast.im.DecorationUpdateMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.DecorationUpdateMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.DecorationUpdateMessage.displayName = "proto.webcast.im.DecorationUpdateMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DecorationUpdateMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DecorationUpdateMessage.toObject(e, this)
        }, proto.webcast.im.DecorationUpdateMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                detai: (o = t.getDetai()) && a.DecotationDetail.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.DecorationUpdateMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DecorationUpdateMessage;
            return proto.webcast.im.DecorationUpdateMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DecorationUpdateMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.DecotationDetail;
                        t.readMessage(o, a.DecotationDetail.deserializeBinaryFromReader), e.setDetai(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DecorationUpdateMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DecorationUpdateMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DecorationUpdateMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getDetai()) && t.writeMessage(2, o, a.DecotationDetail.serializeBinaryToWriter)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.getDetai = function () {
            return r.Message.getWrapperField(this, a.DecotationDetail, 2)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.setDetai = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.clearDetai = function () {
            return this.setDetai(undefined)
        }, proto.webcast.im.DecorationUpdateMessage.prototype.hasDetai = function () {
            return null != r.Message.getField(this, 2)
        }, i.object.extend(t, proto.webcast.im)
    }, 24531: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.DressAssetMessage", null, s), proto.webcast.im.DressAssetMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.DressAssetMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.DressAssetMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.DressAssetMessage.displayName = "proto.webcast.im.DressAssetMessage"), proto.webcast.im.DressAssetMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DressAssetMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DressAssetMessage.toObject(e, this)
        }, proto.webcast.im.DressAssetMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                dressIdList: null == (o = r.Message.getRepeatedField(t, 2)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.DressAssetMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DressAssetMessage;
            return proto.webcast.im.DressAssetMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DressAssetMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.addDressId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DressAssetMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DressAssetMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DressAssetMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getDressIdList()).length > 0 && t.writeRepeatedString(2, o)
        }, proto.webcast.im.DressAssetMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DressAssetMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DressAssetMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DressAssetMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DressAssetMessage.prototype.getDressIdList = function () {
            return r.Message.getRepeatedField(this, 2)
        }, proto.webcast.im.DressAssetMessage.prototype.setDressIdList = function (e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.webcast.im.DressAssetMessage.prototype.addDressId = function (e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.webcast.im.DressAssetMessage.prototype.clearDressIdList = function () {
            return this.setDressIdList([])
        }, i.object.extend(t, proto.webcast.im)
    }, 86303: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.DrumMessage", null, s), i.exportSymbol("proto.webcast.im.DrumMsgType", null, s), i.exportSymbol("proto.webcast.im.DrumMsgType.Enum", null, s), i.exportSymbol("proto.webcast.im.DrumResult", null, s), i.exportSymbol("proto.webcast.im.DrumResult.Enum", null, s), proto.webcast.im.DrumMsgType = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.DrumMsgType, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.DrumMsgType.displayName = "proto.webcast.im.DrumMsgType"), proto.webcast.im.DrumResult = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.DrumResult, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.DrumResult.displayName = "proto.webcast.im.DrumResult"), proto.webcast.im.DrumMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.DrumMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.DrumMessage.displayName = "proto.webcast.im.DrumMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DrumMsgType.prototype.toObject = function (e) {
            return proto.webcast.im.DrumMsgType.toObject(e, this)
        }, proto.webcast.im.DrumMsgType.toObject = function (e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DrumMsgType.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DrumMsgType;
            return proto.webcast.im.DrumMsgType.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DrumMsgType.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.webcast.im.DrumMsgType.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DrumMsgType.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DrumMsgType.serializeBinaryToWriter = function (e, t) {
            undefined
        }, proto.webcast.im.DrumMsgType.Enum = {
            UNKNOWN: 0,
            SYNCDRUMCOUNT: 1,
            DRUMRESULT: 2
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DrumResult.prototype.toObject = function (e) {
            return proto.webcast.im.DrumResult.toObject(e, this)
        }, proto.webcast.im.DrumResult.toObject = function (e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.DrumResult.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DrumResult;
            return proto.webcast.im.DrumResult.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DrumResult.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.webcast.im.DrumResult.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DrumResult.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DrumResult.serializeBinaryToWriter = function (e, t) {
            undefined
        }, proto.webcast.im.DrumResult.Enum = {
            UNKNOWN: 0,
            SUCCESS: 1,
            FAILED: 2
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.DrumMessage.prototype.toObject = function (e) {
            return proto.webcast.im.DrumMessage.toObject(e, this)
        }, proto.webcast.im.DrumMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                drumResult: r.Message.getFieldWithDefault(t, 2, 0),
                dumpMsgType: r.Message.getFieldWithDefault(t, 3, 0),
                drumCount: r.Message.getFieldWithDefault(t, 4, "0"),
                reportTimeGap: r.Message.getFieldWithDefault(t, 5, "0"),
                pushId: r.Message.getFieldWithDefault(t, 6, "0"),
                pushIdStr: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.DrumMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.DrumMessage;
            return proto.webcast.im.DrumMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.DrumMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setDrumResult(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setDumpMsgType(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDrumCount(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setReportTimeGap(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setPushId(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setPushIdStr(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.DrumMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.DrumMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.DrumMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getDrumResult()) && t.writeEnum(2, o), 0 !== (o = e.getDumpMsgType()) && t.writeEnum(3, o), o = e.getDrumCount(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getReportTimeGap(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getPushId(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getPushIdStr()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.DrumMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.DrumMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.DrumMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.DrumMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.DrumMessage.prototype.getDrumResult = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.DrumMessage.prototype.setDrumResult = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.DrumMessage.prototype.getDumpMsgType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.DrumMessage.prototype.setDumpMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.DrumMessage.prototype.getDrumCount = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.DrumMessage.prototype.setDrumCount = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.DrumMessage.prototype.getReportTimeGap = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.DrumMessage.prototype.setReportTimeGap = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.DrumMessage.prototype.getPushId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.DrumMessage.prototype.setPushId = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.DrumMessage.prototype.getPushIdStr = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.DrumMessage.prototype.setPushIdStr = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 57294: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.EcomFansClubMessage", null, s), i.exportSymbol("proto.webcast.im.UserInfo", null, s), proto.webcast.im.EcomFansClubMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.EcomFansClubMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.EcomFansClubMessage.displayName = "proto.webcast.im.EcomFansClubMessage"), proto.webcast.im.UserInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.UserInfo, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.UserInfo.displayName = "proto.webcast.im.UserInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.EcomFansClubMessage.prototype.toObject = function (e) {
            return proto.webcast.im.EcomFansClubMessage.toObject(e, this)
        }, proto.webcast.im.EcomFansClubMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                action: r.Message.getFieldWithDefault(t, 2, 0),
                user: (o = t.getUser()) && proto.webcast.im.UserInfo.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.EcomFansClubMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.EcomFansClubMessage;
            return proto.webcast.im.EcomFansClubMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.EcomFansClubMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setAction(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.UserInfo;
                        t.readMessage(o, proto.webcast.im.UserInfo.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.EcomFansClubMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.EcomFansClubMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.EcomFansClubMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getAction()) && t.writeInt32(2, o), null != (o = e.getUser()) && t.writeMessage(3, o, proto.webcast.im.UserInfo.serializeBinaryToWriter)
        }, proto.webcast.im.EcomFansClubMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.EcomFansClubMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.EcomFansClubMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.EcomFansClubMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.EcomFansClubMessage.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.EcomFansClubMessage.prototype.setAction = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.EcomFansClubMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.UserInfo, 3)
        }, proto.webcast.im.EcomFansClubMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.EcomFansClubMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.EcomFansClubMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 3)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserInfo.prototype.toObject = function (e) {
            return proto.webcast.im.UserInfo.toObject(e, this)
        }, proto.webcast.im.UserInfo.toObject = function (e, t) {
            var o = {userId: r.Message.getFieldWithDefault(t, 1, "0"), level: r.Message.getFieldWithDefault(t, 2, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.UserInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.UserInfo;
            return proto.webcast.im.UserInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.UserInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setLevel(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.UserInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.UserInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.UserInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), 0 !== (o = e.getLevel()) && t.writeInt32(2, o)
        }, proto.webcast.im.UserInfo.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.UserInfo.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.UserInfo.prototype.getLevel = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.UserInfo.prototype.setLevel = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 10473: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.FireworkMultiMessage", null, s), proto.webcast.im.FireworkMultiMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.FireworkMultiMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.FireworkMultiMessage.displayName = "proto.webcast.im.FireworkMultiMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FireworkMultiMessage.prototype.toObject = function (e) {
            return proto.webcast.im.FireworkMultiMessage.toObject(e, this)
        }, proto.webcast.im.FireworkMultiMessage.toObject = function (e, t) {
            var o, r = {common: (o = t.getCommon()) && n.Common.toObject(e, o), bizMsg: t.getBizMsg_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.FireworkMultiMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.FireworkMultiMessage;
            return proto.webcast.im.FireworkMultiMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.FireworkMultiMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setBizMsg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.FireworkMultiMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FireworkMultiMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.FireworkMultiMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getBizMsg_asU8()).length > 0 && t.writeBytes(2, o)
        }, proto.webcast.im.FireworkMultiMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.FireworkMultiMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.FireworkMultiMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.FireworkMultiMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.FireworkMultiMessage.prototype.getBizMsg = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.FireworkMultiMessage.prototype.getBizMsg_asB64 = function () {
            return r.Message.bytesAsB64(this.getBizMsg())
        }, proto.webcast.im.FireworkMultiMessage.prototype.getBizMsg_asU8 = function () {
            return r.Message.bytesAsU8(this.getBizMsg())
        }, proto.webcast.im.FireworkMultiMessage.prototype.setBizMsg = function (e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 12862: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(58440);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.GameCPAnchorPromoteInfoMessage", null, s), i.exportSymbol("proto.webcast.im.SimpleGameInfo", null, s), proto.webcast.im.GameCPAnchorPromoteInfoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.GameCPAnchorPromoteInfoMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.GameCPAnchorPromoteInfoMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.GameCPAnchorPromoteInfoMessage.displayName = "proto.webcast.im.GameCPAnchorPromoteInfoMessage"), proto.webcast.im.SimpleGameInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.SimpleGameInfo, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.SimpleGameInfo.displayName = "proto.webcast.im.SimpleGameInfo"), proto.webcast.im.GameCPAnchorPromoteInfoMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GameCPAnchorPromoteInfoMessage.toObject(e, this)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                gameInfoList: r.Message.toObjectList(t.getGameInfoList(), proto.webcast.im.SimpleGameInfo.toObject, e)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.GameCPAnchorPromoteInfoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.GameCPAnchorPromoteInfoMessage;
            return proto.webcast.im.GameCPAnchorPromoteInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.SimpleGameInfo;
                        t.readMessage(o, proto.webcast.im.SimpleGameInfo.deserializeBinaryFromReader), e.addGameInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GameCPAnchorPromoteInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getGameInfoList()).length > 0 && t.writeRepeatedMessage(2, o, proto.webcast.im.SimpleGameInfo.serializeBinaryToWriter)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.getGameInfoList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.SimpleGameInfo, 2)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.setGameInfoList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.addGameInfo = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.SimpleGameInfo, t)
        }, proto.webcast.im.GameCPAnchorPromoteInfoMessage.prototype.clearGameInfoList = function () {
            return this.setGameInfoList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SimpleGameInfo.prototype.toObject = function (e) {
            return proto.webcast.im.SimpleGameInfo.toObject(e, this)
        }, proto.webcast.im.SimpleGameInfo.toObject = function (e, t) {
            var o = {
                gameId: r.Message.getFieldWithDefault(t, 1, ""),
                stage: r.Message.getFieldWithDefault(t, 2, 0),
                bizType: r.Message.getFieldWithDefault(t, 3, 0),
                bizId: r.Message.getFieldWithDefault(t, 4, ""),
                bizMode: r.Message.getFieldWithDefault(t, 5, ""),
                bizExtra: r.Message.getFieldWithDefault(t, 6, ""),
                gameAttr: r.Message.getFieldWithDefault(t, 7, ""),
                componentExtra: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.SimpleGameInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SimpleGameInfo;
            return proto.webcast.im.SimpleGameInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SimpleGameInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setGameId(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setStage(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setBizType(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setBizId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setBizMode(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setBizExtra(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setGameAttr(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setComponentExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SimpleGameInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SimpleGameInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SimpleGameInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getGameId()).length > 0 && t.writeString(1, o), 0 !== (o = e.getStage()) && t.writeEnum(2, o), 0 !== (o = e.getBizType()) && t.writeEnum(3, o), (o = e.getBizId()).length > 0 && t.writeString(4, o), (o = e.getBizMode()).length > 0 && t.writeString(5, o), (o = e.getBizExtra()).length > 0 && t.writeString(6, o), (o = e.getGameAttr()).length > 0 && t.writeString(7, o), (o = e.getComponentExtra()).length > 0 && t.writeString(8, o)
        }, proto.webcast.im.SimpleGameInfo.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.SimpleGameInfo.prototype.setGameId = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getStage = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.SimpleGameInfo.prototype.setStage = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getBizType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.SimpleGameInfo.prototype.setBizType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getBizId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.SimpleGameInfo.prototype.setBizId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getBizMode = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.SimpleGameInfo.prototype.setBizMode = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getBizExtra = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.SimpleGameInfo.prototype.setBizExtra = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getGameAttr = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.SimpleGameInfo.prototype.setGameAttr = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.SimpleGameInfo.prototype.getComponentExtra = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.SimpleGameInfo.prototype.setComponentExtra = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 61901: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.CloudGamingPodMessage", null, s), i.exportSymbol("proto.webcast.im.PodMessageType", null, s), proto.webcast.im.CloudGamingPodMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.CloudGamingPodMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.CloudGamingPodMessage.displayName = "proto.webcast.im.CloudGamingPodMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CloudGamingPodMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CloudGamingPodMessage.toObject(e, this)
        }, proto.webcast.im.CloudGamingPodMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                text: r.Message.getFieldWithDefault(t, 3, ""),
                remainSeconds: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.CloudGamingPodMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CloudGamingPodMessage;
            return proto.webcast.im.CloudGamingPodMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CloudGamingPodMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMsgType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setText(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setRemainSeconds(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CloudGamingPodMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CloudGamingPodMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CloudGamingPodMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), (o = e.getText()).length > 0 && t.writeString(3, o), o = e.getRemainSeconds(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CloudGamingPodMessage.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CloudGamingPodMessage.prototype.getRemainSeconds = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.CloudGamingPodMessage.prototype.setRemainSeconds = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.PodMessageType = {
            PODUNKNOWN: 0,
            TIMEUPNOTIFY: 1,
            TIMEUP: 2,
            GAMECLOSE: 3,
            USERCLOSE: 4
        }, i.object.extend(t, proto.webcast.im)
    }, 23778: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.GiftIconFlashMessage", null, s), proto.webcast.im.GiftIconFlashMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.GiftIconFlashMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.GiftIconFlashMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.GiftIconFlashMessage.displayName = "proto.webcast.im.GiftIconFlashMessage"), proto.webcast.im.GiftIconFlashMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.GiftIconFlashMessage.prototype.toObject = function (e) {
            return proto.webcast.im.GiftIconFlashMessage.toObject(e, this)
        }, proto.webcast.im.GiftIconFlashMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                userIdsList: null == (o = r.Message.getRepeatedField(t, 2)) ? undefined : o,
                recommendTime: r.Message.getFieldWithDefault(t, 3, "0"),
                notFlashAfter: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.GiftIconFlashMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.GiftIconFlashMessage;
            return proto.webcast.im.GiftIconFlashMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.GiftIconFlashMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < r.length; i++) e.addUserIds(r[i]);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setRecommendTime(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setNotFlashAfter(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.GiftIconFlashMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.GiftIconFlashMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.GiftIconFlashMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getUserIdsList()).length > 0 && t.writePackedInt64String(2, o), o = e.getRecommendTime(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getNotFlashAfter(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.getUserIdsList = function () {
            return r.Message.getRepeatedField(this, 2)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.setUserIdsList = function (e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.webcast.im.GiftIconFlashMessage.prototype.addUserIds = function (e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.clearUserIdsList = function () {
            return this.setUserIdsList([])
        }, proto.webcast.im.GiftIconFlashMessage.prototype.getRecommendTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.GiftIconFlashMessage.prototype.setRecommendTime = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.GiftIconFlashMessage.prototype.getNotFlashAfter = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.GiftIconFlashMessage.prototype.setNotFlashAfter = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 98050: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(35659);
        i.object.extend(proto, n);
        var a = o(50684);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.InteractionInfoMessage", null, s), i.exportSymbol("proto.webcast.im.InteractionInfoMessage.InfoType", null, s), proto.webcast.im.InteractionInfoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractionInfoMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.InteractionInfoMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.InteractionInfoMessage.displayName = "proto.webcast.im.InteractionInfoMessage"), proto.webcast.im.InteractionInfoMessage.repeatedFields_ = [50], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractionInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.InteractionInfoMessage.toObject(e, this)
        }, proto.webcast.im.InteractionInfoMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                likeIconInfo: (o = t.getLikeIconInfo()) && n.LikeIconInfo.toObject(e, o),
                chatEmojiGuideInfo: (o = t.getChatEmojiGuideInfo()) && n.ChatEmojiGuideInfo.toObject(e, o),
                chatImageGuideInfo: (o = t.getChatImageGuideInfo()) && n.ChatImageGuideInfo.toObject(e, o),
                updateInfoTypeList: null == (o = r.Message.getRepeatedField(t, 50)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.InteractionInfoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.InteractionInfoMessage;
            return proto.webcast.im.InteractionInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.InteractionInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.LikeIconInfo;
                        t.readMessage(o, n.LikeIconInfo.deserializeBinaryFromReader), e.setLikeIconInfo(o);
                        break;
                    case 3:
                        o = new n.ChatEmojiGuideInfo;
                        t.readMessage(o, n.ChatEmojiGuideInfo.deserializeBinaryFromReader), e.setChatEmojiGuideInfo(o);
                        break;
                    case 4:
                        o = new n.ChatImageGuideInfo;
                        t.readMessage(o, n.ChatImageGuideInfo.deserializeBinaryFromReader), e.setChatImageGuideInfo(o);
                        break;
                    case 50:
                        for (var r = t.isDelimited() ? t.readPackedEnum() : [t.readEnum()], i = 0; i < r.length; i++) e.addUpdateInfoType(r[i]);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.InteractionInfoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.InteractionInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.InteractionInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getLikeIconInfo()) && t.writeMessage(2, o, n.LikeIconInfo.serializeBinaryToWriter), null != (o = e.getChatEmojiGuideInfo()) && t.writeMessage(3, o, n.ChatEmojiGuideInfo.serializeBinaryToWriter), null != (o = e.getChatImageGuideInfo()) && t.writeMessage(4, o, n.ChatImageGuideInfo.serializeBinaryToWriter), (o = e.getUpdateInfoTypeList()).length > 0 && t.writePackedEnum(50, o)
        }, proto.webcast.im.InteractionInfoMessage.InfoType = {
            UNKOWN: 0,
            LIKEICON: 1,
            CHATEMOJI: 2,
            CHATIMAGE: 3
        }, proto.webcast.im.InteractionInfoMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.InteractionInfoMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.InteractionInfoMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.InteractionInfoMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.InteractionInfoMessage.prototype.getLikeIconInfo = function () {
            return r.Message.getWrapperField(this, n.LikeIconInfo, 2)
        }, proto.webcast.im.InteractionInfoMessage.prototype.setLikeIconInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.InteractionInfoMessage.prototype.clearLikeIconInfo = function () {
            return this.setLikeIconInfo(undefined)
        }, proto.webcast.im.InteractionInfoMessage.prototype.hasLikeIconInfo = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.InteractionInfoMessage.prototype.getChatEmojiGuideInfo = function () {
            return r.Message.getWrapperField(this, n.ChatEmojiGuideInfo, 3)
        }, proto.webcast.im.InteractionInfoMessage.prototype.setChatEmojiGuideInfo = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.InteractionInfoMessage.prototype.clearChatEmojiGuideInfo = function () {
            return this.setChatEmojiGuideInfo(undefined)
        }, proto.webcast.im.InteractionInfoMessage.prototype.hasChatEmojiGuideInfo = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.im.InteractionInfoMessage.prototype.getChatImageGuideInfo = function () {
            return r.Message.getWrapperField(this, n.ChatImageGuideInfo, 4)
        }, proto.webcast.im.InteractionInfoMessage.prototype.setChatImageGuideInfo = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.InteractionInfoMessage.prototype.clearChatImageGuideInfo = function () {
            return this.setChatImageGuideInfo(undefined)
        }, proto.webcast.im.InteractionInfoMessage.prototype.hasChatImageGuideInfo = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.InteractionInfoMessage.prototype.getUpdateInfoTypeList = function () {
            return r.Message.getRepeatedField(this, 50)
        }, proto.webcast.im.InteractionInfoMessage.prototype.setUpdateInfoTypeList = function (e) {
            return r.Message.setField(this, 50, e || [])
        }, proto.webcast.im.InteractionInfoMessage.prototype.addUpdateInfoType = function (e, t) {
            return r.Message.addToRepeatedField(this, 50, e, t)
        }, proto.webcast.im.InteractionInfoMessage.prototype.clearUpdateInfoTypeList = function () {
            return this.setUpdateInfoTypeList([])
        }, i.object.extend(t, proto.webcast.im)
    }, 76979: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.JackfruitMessage", null, s), proto.webcast.im.JackfruitMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.JackfruitMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.JackfruitMessage.displayName = "proto.webcast.im.JackfruitMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.JackfruitMessage.prototype.toObject = function (e) {
            return proto.webcast.im.JackfruitMessage.toObject(e, this)
        }, proto.webcast.im.JackfruitMessage.toObject = function (e, t) {
            var o, r = {common: (o = t.getCommon()) && n.Common.toObject(e, o), bizMsg: t.getBizMsg_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.JackfruitMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.JackfruitMessage;
            return proto.webcast.im.JackfruitMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.JackfruitMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setBizMsg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.JackfruitMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.JackfruitMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.JackfruitMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), (o = e.getBizMsg_asU8()).length > 0 && t.writeBytes(2, o)
        }, proto.webcast.im.JackfruitMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.JackfruitMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.JackfruitMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.JackfruitMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.JackfruitMessage.prototype.getBizMsg = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.JackfruitMessage.prototype.getBizMsg_asB64 = function () {
            return r.Message.bytesAsB64(this.getBizMsg())
        }, proto.webcast.im.JackfruitMessage.prototype.getBizMsg_asU8 = function () {
            return r.Message.bytesAsU8(this.getBizMsg())
        }, proto.webcast.im.JackfruitMessage.prototype.setBizMsg = function (e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 11424: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(99080);
        i.object.extend(proto, a);
        var c = o(64925);
        i.object.extend(proto, c), i.exportSymbol("proto.webcast.im.ChannelLinkerApplyContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerCloseContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerCloseSource", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerCreateContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerEnterContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerInviteContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerKickOutContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerLeaveContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerLinkedListChangeContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerPermitContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerPermitResultEnum", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerReplyContent", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerReplyResultEnum", null, s), i.exportSymbol("proto.webcast.im.ChannelLinkerSilenceContent", null, s), i.exportSymbol("proto.webcast.im.LinkChannelMessageType", null, s), i.exportSymbol("proto.webcast.im.RoomChannelLinkMessage", null, s), i.exportSymbol("proto.webcast.im.RoomChannelLinkMessage.ContentCase", null, s), i.exportSymbol("proto.webcast.im.SilenceSource", null, s), proto.webcast.im.RoomChannelLinkMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_)
        }, i.inherits(proto.webcast.im.RoomChannelLinkMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.RoomChannelLinkMessage.displayName = "proto.webcast.im.RoomChannelLinkMessage"), proto.webcast.im.ChannelLinkerApplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerApplyContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerApplyContent.displayName = "proto.webcast.im.ChannelLinkerApplyContent"), proto.webcast.im.ChannelLinkerCreateContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerCreateContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerCreateContent.displayName = "proto.webcast.im.ChannelLinkerCreateContent"), proto.webcast.im.ChannelLinkerCloseContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerCloseContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerCloseContent.displayName = "proto.webcast.im.ChannelLinkerCloseContent"), proto.webcast.im.ChannelLinkerInviteContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerInviteContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerInviteContent.displayName = "proto.webcast.im.ChannelLinkerInviteContent"), proto.webcast.im.ChannelLinkerReplyContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerReplyContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerReplyContent.displayName = "proto.webcast.im.ChannelLinkerReplyContent"), proto.webcast.im.ChannelLinkerPermitContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerPermitContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerPermitContent.displayName = "proto.webcast.im.ChannelLinkerPermitContent"), proto.webcast.im.ChannelLinkerEnterContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerEnterContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerEnterContent.displayName = "proto.webcast.im.ChannelLinkerEnterContent"), proto.webcast.im.ChannelLinkerLeaveContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerLeaveContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerLeaveContent.displayName = "proto.webcast.im.ChannelLinkerLeaveContent"), proto.webcast.im.ChannelLinkerKickOutContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerKickOutContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerKickOutContent.displayName = "proto.webcast.im.ChannelLinkerKickOutContent"), proto.webcast.im.ChannelLinkerLinkedListChangeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.ChannelLinkerLinkedListChangeContent.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerLinkedListChangeContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerLinkedListChangeContent.displayName = "proto.webcast.im.ChannelLinkerLinkedListChangeContent"), proto.webcast.im.ChannelLinkerSilenceContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.ChannelLinkerSilenceContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.ChannelLinkerSilenceContent.displayName = "proto.webcast.im.ChannelLinkerSilenceContent"), proto.webcast.im.RoomChannelLinkMessage.oneofGroups_ = [[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], proto.webcast.im.RoomChannelLinkMessage.ContentCase = {
            CONTENT_NOT_SET: 0,
            CREATE_CONTENT: 5,
            CLOSE_CONTENT: 6,
            INVITE_CONTENT: 7,
            REPLY_CONTENT: 8,
            PERMIT_CONTENT: 9,
            ENTER_CONTENT: 10,
            LEAVE_CONTENT: 11,
            KICK_OUT_CONTENT: 12,
            LINKED_LIST_CHANGE_CONTENT: 13,
            SILENCE_STATUS_CONTENT: 14,
            APPLY_CONTENT: 15
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getContentCase = function () {
            return r.Message.computeOneofCase(this, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomChannelLinkMessage.prototype.toObject = function (e) {
            return proto.webcast.im.RoomChannelLinkMessage.toObject(e, this)
        }, proto.webcast.im.RoomChannelLinkMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                messageType: r.Message.getFieldWithDefault(t, 2, "0"),
                linkerId: r.Message.getFieldWithDefault(t, 3, "0"),
                scene: r.Message.getFieldWithDefault(t, 4, "0"),
                createContent: (o = t.getCreateContent()) && proto.webcast.im.ChannelLinkerCreateContent.toObject(e, o),
                closeContent: (o = t.getCloseContent()) && proto.webcast.im.ChannelLinkerCloseContent.toObject(e, o),
                inviteContent: (o = t.getInviteContent()) && proto.webcast.im.ChannelLinkerInviteContent.toObject(e, o),
                replyContent: (o = t.getReplyContent()) && proto.webcast.im.ChannelLinkerReplyContent.toObject(e, o),
                permitContent: (o = t.getPermitContent()) && proto.webcast.im.ChannelLinkerPermitContent.toObject(e, o),
                enterContent: (o = t.getEnterContent()) && proto.webcast.im.ChannelLinkerEnterContent.toObject(e, o),
                leaveContent: (o = t.getLeaveContent()) && proto.webcast.im.ChannelLinkerLeaveContent.toObject(e, o),
                kickOutContent: (o = t.getKickOutContent()) && proto.webcast.im.ChannelLinkerKickOutContent.toObject(e, o),
                linkedListChangeContent: (o = t.getLinkedListChangeContent()) && proto.webcast.im.ChannelLinkerLinkedListChangeContent.toObject(e, o),
                silenceStatusContent: (o = t.getSilenceStatusContent()) && proto.webcast.im.ChannelLinkerSilenceContent.toObject(e, o),
                applyContent: (o = t.getApplyContent()) && proto.webcast.im.ChannelLinkerApplyContent.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.RoomChannelLinkMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.RoomChannelLinkMessage;
            return proto.webcast.im.RoomChannelLinkMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.RoomChannelLinkMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMessageType(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLinkerId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setScene(o);
                        break;
                    case 5:
                        o = new proto.webcast.im.ChannelLinkerCreateContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerCreateContent.deserializeBinaryFromReader), e.setCreateContent(o);
                        break;
                    case 6:
                        o = new proto.webcast.im.ChannelLinkerCloseContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerCloseContent.deserializeBinaryFromReader), e.setCloseContent(o);
                        break;
                    case 7:
                        o = new proto.webcast.im.ChannelLinkerInviteContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerInviteContent.deserializeBinaryFromReader), e.setInviteContent(o);
                        break;
                    case 8:
                        o = new proto.webcast.im.ChannelLinkerReplyContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerReplyContent.deserializeBinaryFromReader), e.setReplyContent(o);
                        break;
                    case 9:
                        o = new proto.webcast.im.ChannelLinkerPermitContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerPermitContent.deserializeBinaryFromReader), e.setPermitContent(o);
                        break;
                    case 10:
                        o = new proto.webcast.im.ChannelLinkerEnterContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerEnterContent.deserializeBinaryFromReader), e.setEnterContent(o);
                        break;
                    case 11:
                        o = new proto.webcast.im.ChannelLinkerLeaveContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerLeaveContent.deserializeBinaryFromReader), e.setLeaveContent(o);
                        break;
                    case 12:
                        o = new proto.webcast.im.ChannelLinkerKickOutContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerKickOutContent.deserializeBinaryFromReader), e.setKickOutContent(o);
                        break;
                    case 13:
                        o = new proto.webcast.im.ChannelLinkerLinkedListChangeContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerLinkedListChangeContent.deserializeBinaryFromReader), e.setLinkedListChangeContent(o);
                        break;
                    case 14:
                        o = new proto.webcast.im.ChannelLinkerSilenceContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerSilenceContent.deserializeBinaryFromReader), e.setSilenceStatusContent(o);
                        break;
                    case 15:
                        o = new proto.webcast.im.ChannelLinkerApplyContent;
                        t.readMessage(o, proto.webcast.im.ChannelLinkerApplyContent.deserializeBinaryFromReader), e.setApplyContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.RoomChannelLinkMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.RoomChannelLinkMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getMessageType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getLinkerId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getScene(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), null != (o = e.getCreateContent()) && t.writeMessage(5, o, proto.webcast.im.ChannelLinkerCreateContent.serializeBinaryToWriter), null != (o = e.getCloseContent()) && t.writeMessage(6, o, proto.webcast.im.ChannelLinkerCloseContent.serializeBinaryToWriter), null != (o = e.getInviteContent()) && t.writeMessage(7, o, proto.webcast.im.ChannelLinkerInviteContent.serializeBinaryToWriter), null != (o = e.getReplyContent()) && t.writeMessage(8, o, proto.webcast.im.ChannelLinkerReplyContent.serializeBinaryToWriter), null != (o = e.getPermitContent()) && t.writeMessage(9, o, proto.webcast.im.ChannelLinkerPermitContent.serializeBinaryToWriter), null != (o = e.getEnterContent()) && t.writeMessage(10, o, proto.webcast.im.ChannelLinkerEnterContent.serializeBinaryToWriter), null != (o = e.getLeaveContent()) && t.writeMessage(11, o, proto.webcast.im.ChannelLinkerLeaveContent.serializeBinaryToWriter), null != (o = e.getKickOutContent()) && t.writeMessage(12, o, proto.webcast.im.ChannelLinkerKickOutContent.serializeBinaryToWriter), null != (o = e.getLinkedListChangeContent()) && t.writeMessage(13, o, proto.webcast.im.ChannelLinkerLinkedListChangeContent.serializeBinaryToWriter), null != (o = e.getSilenceStatusContent()) && t.writeMessage(14, o, proto.webcast.im.ChannelLinkerSilenceContent.serializeBinaryToWriter), null != (o = e.getApplyContent()) && t.writeMessage(15, o, proto.webcast.im.ChannelLinkerApplyContent.serializeBinaryToWriter)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getMessageType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setMessageType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getLinkerId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setLinkerId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getScene = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setScene = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getCreateContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerCreateContent, 5)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setCreateContent = function (e) {
            return r.Message.setOneofWrapperField(this, 5, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearCreateContent = function () {
            return this.setCreateContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasCreateContent = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getCloseContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerCloseContent, 6)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setCloseContent = function (e) {
            return r.Message.setOneofWrapperField(this, 6, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearCloseContent = function () {
            return this.setCloseContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasCloseContent = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getInviteContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerInviteContent, 7)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setInviteContent = function (e) {
            return r.Message.setOneofWrapperField(this, 7, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearInviteContent = function () {
            return this.setInviteContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasInviteContent = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getReplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerReplyContent, 8)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setReplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 8, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearReplyContent = function () {
            return this.setReplyContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasReplyContent = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getPermitContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerPermitContent, 9)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setPermitContent = function (e) {
            return r.Message.setOneofWrapperField(this, 9, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearPermitContent = function () {
            return this.setPermitContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasPermitContent = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getEnterContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerEnterContent, 10)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setEnterContent = function (e) {
            return r.Message.setOneofWrapperField(this, 10, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearEnterContent = function () {
            return this.setEnterContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasEnterContent = function () {
            return null != r.Message.getField(this, 10)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.getLeaveContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerLeaveContent, 11)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.setLeaveContent = function (e) {
            return r.Message.setOneofWrapperField(this, 11, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.clearLeaveContent = function () {
            return this.setLeaveContent(undefined)
        }, proto.webcast.im.RoomChannelLinkMessage.prototype.hasLeaveContent = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.getKickOutContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerKickOutContent, 12)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.setKickOutContent = function (e) {
            return r.Message.setOneofWrapperField(this, 12, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.clearKickOutContent = function () {
            return this.setKickOutContent(undefined)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.hasKickOutContent = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.getLinkedListChangeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerLinkedListChangeContent, 13)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.setLinkedListChangeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 13, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.clearLinkedListChangeContent = function () {
            return this.setLinkedListChangeContent(undefined)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.hasLinkedListChangeContent = function () {
            return null != r.Message.getField(this, 13)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.getSilenceStatusContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerSilenceContent, 14)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.setSilenceStatusContent = function (e) {
            return r.Message.setOneofWrapperField(this, 14, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.clearSilenceStatusContent = function () {
            return this.setSilenceStatusContent(undefined)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.hasSilenceStatusContent = function () {
            return null != r.Message.getField(this, 14)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.getApplyContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.ChannelLinkerApplyContent, 15)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.setApplyContent = function (e) {
            return r.Message.setOneofWrapperField(this, 15, proto.webcast.im.RoomChannelLinkMessage.oneofGroups_[0], e)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.clearApplyContent = function () {
            return this.setApplyContent(undefined)
        },proto.webcast.im.RoomChannelLinkMessage.prototype.hasApplyContent = function () {
            return null != r.Message.getField(this, 15)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerApplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerApplyContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerApplyContent.toObject = function (e, t) {
            var o, i = {
                applicantUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                applicantSecUserId: r.Message.getFieldWithDefault(t, 2, ""),
                applicantUser: (o = t.getApplicantUser()) && c.User.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.ChannelLinkerApplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerApplyContent;
            return proto.webcast.im.ChannelLinkerApplyContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerApplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setApplicantUserId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setApplicantSecUserId(o);
                        break;
                    case 3:
                        o = new c.User;
                        t.readMessage(o, c.User.deserializeBinaryFromReader), e.setApplicantUser(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerApplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerApplyContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getApplicantUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getApplicantSecUserId()).length > 0 && t.writeString(2, o), null != (o = e.getApplicantUser()) && t.writeMessage(3, o, c.User.serializeBinaryToWriter)
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.getApplicantUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.setApplicantUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.getApplicantSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.setApplicantSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.getApplicantUser = function () {
            return r.Message.getWrapperField(this, c.User, 3)
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.setApplicantUser = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.clearApplicantUser = function () {
            return this.setApplicantUser(undefined)
        },proto.webcast.im.ChannelLinkerApplyContent.prototype.hasApplicantUser = function () {
            return null != r.Message.getField(this, 3)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerCreateContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerCreateContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerCreateContent.toObject = function (e, t) {
            var o = {
                ownerId: r.Message.getFieldWithDefault(t, 1, "0"),
                roomId: r.Message.getFieldWithDefault(t, 2, "0"),
                linkType: r.Message.getFieldWithDefault(t, 3, "0"),
                secOwnerId: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerCreateContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerCreateContent;
            return proto.webcast.im.ChannelLinkerCreateContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerCreateContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setOwnerId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setRoomId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLinkType(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setSecOwnerId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerCreateContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerCreateContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getOwnerId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getRoomId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getLinkType(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getSecOwnerId()).length > 0 && t.writeString(4, o)
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.getOwnerId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.setOwnerId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.getLinkType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.setLinkType = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.getSecOwnerId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.ChannelLinkerCreateContent.prototype.setSecOwnerId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerCloseContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerCloseContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerCloseContent.toObject = function (e, t) {
            var o = {source: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerCloseContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerCloseContent;
            return proto.webcast.im.ChannelLinkerCloseContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerCloseContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setSource(o)
                } else t.skipField()
            }
            return e
        },proto.webcast.im.ChannelLinkerCloseContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerCloseContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerCloseContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getSource()) && t.writeEnum(1, o)
        },proto.webcast.im.ChannelLinkerCloseContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.ChannelLinkerCloseContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerInviteContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerInviteContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerInviteContent.toObject = function (e, t) {
            var o = {
                inviterUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                inviteeUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                prompt: r.Message.getFieldWithDefault(t, 3, ""),
                inviterSecUserId: r.Message.getFieldWithDefault(t, 4, ""),
                inviteeSecUserId: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerInviteContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerInviteContent;
            return proto.webcast.im.ChannelLinkerInviteContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerInviteContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setInviterUserId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setInviteeUserId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setPrompt(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setInviterSecUserId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setInviteeSecUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerInviteContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerInviteContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getInviterUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getInviteeUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getPrompt()).length > 0 && t.writeString(3, o), (o = e.getInviterSecUserId()).length > 0 && t.writeString(4, o), (o = e.getInviteeSecUserId()).length > 0 && t.writeString(5, o)
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.getInviterUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.setInviterUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.getInviteeUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.setInviteeUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.getPrompt = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.setPrompt = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.getInviterSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.setInviterSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.getInviteeSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.ChannelLinkerInviteContent.prototype.setInviteeSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerReplyContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerReplyContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerReplyContent.toObject = function (e, t) {
            var o = {
                inviterUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                inviteeUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                replyResult: r.Message.getFieldWithDefault(t, 3, 0),
                prompt: r.Message.getFieldWithDefault(t, 4, ""),
                inviterSecUserId: r.Message.getFieldWithDefault(t, 5, ""),
                inviteeSecUserId: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerReplyContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerReplyContent;
            return proto.webcast.im.ChannelLinkerReplyContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerReplyContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setInviterUserId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setInviteeUserId(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setReplyResult(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setPrompt(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setInviterSecUserId(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setInviteeSecUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerReplyContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerReplyContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getInviterUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getInviteeUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getReplyResult()) && t.writeEnum(3, o), (o = e.getPrompt()).length > 0 && t.writeString(4, o), (o = e.getInviterSecUserId()).length > 0 && t.writeString(5, o), (o = e.getInviteeSecUserId()).length > 0 && t.writeString(6, o)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.getInviterUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.setInviterUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.getInviteeUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.setInviteeUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.getReplyResult = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.setReplyResult = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.getPrompt = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.setPrompt = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.getInviterSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.setInviterSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.getInviteeSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.ChannelLinkerReplyContent.prototype.setInviteeSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerPermitContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerPermitContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerPermitContent.toObject = function (e, t) {
            var o = {
                applicantUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                approverUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                permitResult: r.Message.getFieldWithDefault(t, 3, 0),
                prompt: r.Message.getFieldWithDefault(t, 4, ""),
                applicantSecUserId: r.Message.getFieldWithDefault(t, 5, ""),
                approverSecUserId: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerPermitContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerPermitContent;
            return proto.webcast.im.ChannelLinkerPermitContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerPermitContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setApplicantUserId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setApproverUserId(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setPermitResult(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setPrompt(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setApplicantSecUserId(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setApproverSecUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerPermitContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerPermitContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getApplicantUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getApproverUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getPermitResult()) && t.writeEnum(3, o), (o = e.getPrompt()).length > 0 && t.writeString(4, o), (o = e.getApplicantSecUserId()).length > 0 && t.writeString(5, o), (o = e.getApproverSecUserId()).length > 0 && t.writeString(6, o)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.getApplicantUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.setApplicantUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.getApproverUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.setApproverUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.getPermitResult = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.setPermitResult = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.getPrompt = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.setPrompt = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.getApplicantSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.setApplicantSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.getApproverSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.ChannelLinkerPermitContent.prototype.setApproverSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerEnterContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerEnterContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerEnterContent.toObject = function (e, t) {
            var o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                secUserId: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerEnterContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerEnterContent;
            return proto.webcast.im.ChannelLinkerEnterContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerEnterContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setSecUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerEnterContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerEnterContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerEnterContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getSecUserId()).length > 0 && t.writeString(2, o)
        },proto.webcast.im.ChannelLinkerEnterContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerEnterContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerEnterContent.prototype.getSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.ChannelLinkerEnterContent.prototype.setSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerLeaveContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerLeaveContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerLeaveContent.toObject = function (e, t) {
            var o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                secUserId: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerLeaveContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerLeaveContent;
            return proto.webcast.im.ChannelLinkerLeaveContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerLeaveContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setSecUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerLeaveContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerLeaveContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerLeaveContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getSecUserId()).length > 0 && t.writeString(2, o)
        },proto.webcast.im.ChannelLinkerLeaveContent.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerLeaveContent.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerLeaveContent.prototype.getSecUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.ChannelLinkerLeaveContent.prototype.setSecUserId = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerKickOutContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerKickOutContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerKickOutContent.toObject = function (e, t) {
            var o = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                prompt: r.Message.getFieldWithDefault(t, 2, ""),
                secFromUserId: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerKickOutContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerKickOutContent;
            return proto.webcast.im.ChannelLinkerKickOutContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerKickOutContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setFromUserId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setPrompt(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSecFromUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerKickOutContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerKickOutContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getFromUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getPrompt()).length > 0 && t.writeString(2, o), (o = e.getSecFromUserId()).length > 0 && t.writeString(3, o)
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.getPrompt = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.setPrompt = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.getSecFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.ChannelLinkerKickOutContent.prototype.setSecFromUserId = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerLinkedListChangeContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerLinkedListChangeContent.toObject = function (e, t) {
            var o = {
                channelLinkmicUsersList: r.Message.toObjectList(t.getChannelLinkmicUsersList(), a.ChannelListUser.toObject, e),
                version: r.Message.getFieldWithDefault(t, 2, "0"),
                rtcRoomIdStr: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerLinkedListChangeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerLinkedListChangeContent;
            return proto.webcast.im.ChannelLinkerLinkedListChangeContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.ChannelListUser;
                        t.readMessage(o, a.ChannelListUser.deserializeBinaryFromReader), e.addChannelLinkmicUsers(o);
                        break;
                    case 2:
                        o = t.readUint64String();
                        e.setVersion(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setRtcRoomIdStr(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerLinkedListChangeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getChannelLinkmicUsersList()).length > 0 && t.writeRepeatedMessage(1, o, a.ChannelListUser.serializeBinaryToWriter), o = e.getVersion(), 0 !== parseInt(o, 10) && t.writeUint64String(2, o), (o = e.getRtcRoomIdStr()).length > 0 && t.writeString(3, o)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.getChannelLinkmicUsersList = function () {
            return r.Message.getRepeatedWrapperField(this, a.ChannelListUser, 1)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.setChannelLinkmicUsersList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.addChannelLinkmicUsers = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.webcast.data.ChannelListUser, t)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.clearChannelLinkmicUsersList = function () {
            return this.setChannelLinkmicUsersList([])
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.getRtcRoomIdStr = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.ChannelLinkerLinkedListChangeContent.prototype.setRtcRoomIdStr = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ChannelLinkerSilenceContent.prototype.toObject = function (e) {
            return proto.webcast.im.ChannelLinkerSilenceContent.toObject(e, this)
        }, proto.webcast.im.ChannelLinkerSilenceContent.toObject = function (e, t) {
            var o = {
                silenceStatus: r.Message.getFieldWithDefault(t, 1, 0),
                fromUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 3, "0"),
                ackMessage: r.Message.getFieldWithDefault(t, 4, ""),
                version: r.Message.getFieldWithDefault(t, 5, "0"),
                secFromUserId: r.Message.getFieldWithDefault(t, 6, ""),
                secToUserId: r.Message.getFieldWithDefault(t, 7, ""),
                silenceSource: r.Message.getFieldWithDefault(t, 8, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.ChannelLinkerSilenceContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ChannelLinkerSilenceContent;
            return proto.webcast.im.ChannelLinkerSilenceContent.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.ChannelLinkerSilenceContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setSilenceStatus(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setFromUserId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setToUserId(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAckMessage(o);
                        break;
                    case 5:
                        o = t.readUint64String();
                        e.setVersion(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setSecFromUserId(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setSecToUserId(o);
                        break;
                    case 8:
                        o = t.readEnum();
                        e.setSilenceSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ChannelLinkerSilenceContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.ChannelLinkerSilenceContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getSilenceStatus()) && t.writeEnum(1, o), o = e.getFromUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getToUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getAckMessage()).length > 0 && t.writeString(4, o), o = e.getVersion(), 0 !== parseInt(o, 10) && t.writeUint64String(5, o), (o = e.getSecFromUserId()).length > 0 && t.writeString(6, o), (o = e.getSecToUserId()).length > 0 && t.writeString(7, o), 0 !== (o = e.getSilenceSource()) && t.writeEnum(8, o)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getSilenceStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setSilenceStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getAckMessage = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setAckMessage = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getSecFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setSecFromUserId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getSecToUserId = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setSecToUserId = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.getSilenceSource = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        },proto.webcast.im.ChannelLinkerSilenceContent.prototype.setSilenceSource = function (e) {
            return r.Message.setProto3EnumField(this, 8, e)
        },proto.webcast.im.LinkChannelMessageType = {
            TPYE_LINKER_CHANNEL_UNKNOWN: 0,
            TYPE_LINKER_CHANNEL_CREATE: 1,
            TYPE_LINKER_CHANNEL_CLOSE: 2,
            TYPE_LINKER_CHANNEL_INVITE: 3,
            TYPE_LINKER_CHANNEL_REPLY: 4,
            TYPE_LINKER_CHANNEL_PERMIT: 5,
            TPYE_LINKER_CHANNEL_ENTER: 6,
            TPYE_LINKER_CHANNEL_LEAVE: 7,
            TPYE_LINKER_CHANNEL_KICK_OUT: 8,
            TYPE_LINKER_CHANNEL_LINKER_LINKED_LIST_CHANGE: 9,
            TYPE_LINKER_CHANNEL_SILENCE_STATUS: 10,
            TYPE_LINKER_CHANNEL_APPLY: 11
        },proto.webcast.im.ChannelLinkerCloseSource = {
            CHANNELLINKERCLOSESOURCE_UNKNOWN: 0,
            CHANNELLINKERCLOSESOURCE_NORMAL: 1,
            CHANNELLINKERCLOSESOURCE_SYSTEMFORBIDDEN: 2
        },proto.webcast.im.ChannelLinkerReplyResultEnum = {
            CHANNELLINKERREPLYRESULTENUM_ACCEPT: 0,
            CHANNELLINKERREPLYRESULTENUM_REJECT: 1
        },proto.webcast.im.ChannelLinkerPermitResultEnum = {
            CHANNELLINKERPERMITRESULTENUM_ACCEPT: 0,
            CHANNELLINKERPERMITRESULTENUM_REJECT: 1
        },proto.webcast.im.SilenceSource = {
            SLIENCESOURCE_UNKOWN: 0,
            SLIENCESOURCE_NORMAL: 1,
            SLIENCESOURCE_CHECKSILENCESTATUS: 2
        },i.object.extend(t, proto.webcast.im)
    }, 52755: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(15968);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.EnlargeGuestTurnOffSource", null, s), i.exportSymbol("proto.webcast.im.EnlargeGuestTurnOnSource", null, s), i.exportSymbol("proto.webcast.im.LinkmicEnlargeGuestMessage", null, s), i.exportSymbol("proto.webcast.im.LinkmicEnlargeGuestMessage.ContentCase", null, s), i.exportSymbol("proto.webcast.im.LinkmicEnlargeGuestMessageType", null, s), i.exportSymbol("proto.webcast.im.LinkmicEnlargeGuestTurnOffContent", null, s), i.exportSymbol("proto.webcast.im.LinkmicEnlargeGuestTurnOnContent", null, s), proto.webcast.im.LinkmicEnlargeGuestMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LinkmicEnlargeGuestMessage.repeatedFields_, proto.webcast.im.LinkmicEnlargeGuestMessage.oneofGroups_)
        }, i.inherits(proto.webcast.im.LinkmicEnlargeGuestMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LinkmicEnlargeGuestMessage.displayName = "proto.webcast.im.LinkmicEnlargeGuestMessage"), proto.webcast.im.LinkmicEnlargeGuestTurnOnContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LinkmicEnlargeGuestTurnOnContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.displayName = "proto.webcast.im.LinkmicEnlargeGuestTurnOnContent"), proto.webcast.im.LinkmicEnlargeGuestTurnOffContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LinkmicEnlargeGuestTurnOffContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.displayName = "proto.webcast.im.LinkmicEnlargeGuestTurnOffContent"), proto.webcast.im.LinkmicEnlargeGuestMessage.repeatedFields_ = [3], proto.webcast.im.LinkmicEnlargeGuestMessage.oneofGroups_ = [[21, 22]], proto.webcast.im.LinkmicEnlargeGuestMessage.ContentCase = {
            CONTENT_NOT_SET: 0,
            TURN_ON_CONTENT: 21,
            TURN_OFF_CONTENT: 22
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.getContentCase = function () {
            return r.Message.computeOneofCase(this, proto.webcast.im.LinkmicEnlargeGuestMessage.oneofGroups_[0])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicEnlargeGuestMessage.toObject(e, this)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                playModesList: null == (o = r.Message.getRepeatedField(t, 3)) ? undefined : o,
                turnOnContent: (o = t.getTurnOnContent()) && proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.toObject(e, o),
                turnOffContent: (o = t.getTurnOffContent()) && proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LinkmicEnlargeGuestMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicEnlargeGuestMessage;
            return proto.webcast.im.LinkmicEnlargeGuestMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMsgType(o);
                        break;
                    case 3:
                        for (var r = t.isDelimited() ? t.readPackedEnum() : [t.readEnum()], i = 0; i < r.length; i++) e.addPlayModes(r[i]);
                        break;
                    case 21:
                        o = new proto.webcast.im.LinkmicEnlargeGuestTurnOnContent;
                        t.readMessage(o, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.deserializeBinaryFromReader), e.setTurnOnContent(o);
                        break;
                    case 22:
                        o = new proto.webcast.im.LinkmicEnlargeGuestTurnOffContent;
                        t.readMessage(o, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.deserializeBinaryFromReader), e.setTurnOffContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicEnlargeGuestMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), (o = e.getPlayModesList()).length > 0 && t.writePackedEnum(3, o), null != (o = e.getTurnOnContent()) && t.writeMessage(21, o, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.serializeBinaryToWriter), null != (o = e.getTurnOffContent()) && t.writeMessage(22, o, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.serializeBinaryToWriter)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.getPlayModesList = function () {
            return r.Message.getRepeatedField(this, 3)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.setPlayModesList = function (e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.addPlayModes = function (e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.clearPlayModesList = function () {
            return this.setPlayModesList([])
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.getTurnOnContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent, 21)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.setTurnOnContent = function (e) {
            return r.Message.setOneofWrapperField(this, 21, proto.webcast.im.LinkmicEnlargeGuestMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.clearTurnOnContent = function () {
            return this.setTurnOnContent(undefined)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.hasTurnOnContent = function () {
            return null != r.Message.getField(this, 21)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.getTurnOffContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent, 22)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.setTurnOffContent = function (e) {
            return r.Message.setOneofWrapperField(this, 22, proto.webcast.im.LinkmicEnlargeGuestMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.clearTurnOffContent = function () {
            return this.setTurnOffContent(undefined)
        }, proto.webcast.im.LinkmicEnlargeGuestMessage.prototype.hasTurnOffContent = function () {
            return null != r.Message.getField(this, 22)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.toObject(e, this)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.toObject = function (e, t) {
            var o = {
                enlargedUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                source: r.Message.getFieldWithDefault(t, 2, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicEnlargeGuestTurnOnContent;
            return proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setEnlargedUserId(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getEnlargedUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), 0 !== (o = e.getSource()) && t.writeEnum(2, o)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.prototype.getEnlargedUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.prototype.setEnlargedUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOnContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.toObject(e, this)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.toObject = function (e, t) {
            var o = {source: r.Message.getFieldWithDefault(t, 1, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicEnlargeGuestTurnOffContent;
            return proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = t.readEnum();
                    e.setSource(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getSource()) && t.writeEnum(1, o)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.LinkmicEnlargeGuestTurnOffContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.LinkmicEnlargeGuestMessageType = {
            ENLARGEGUESTMESSAGETYPE_UNKOWN: 0,
            ENLARGEGUESTMESSAGETYPE_TURNON: 1,
            ENLARGEGUESTMESSAGETYPE_TURNOFF: 2
        }, proto.webcast.im.EnlargeGuestTurnOnSource = {
            ENLARGEGUESTTURNONSOURCE_UNKNOWN: 0,
            ENLARGEGUESTTURNONSOURCE_VIDEOCHAT: 1,
            ENLARGEGUESTTURNONSOURCE_VIDEOEQUAL: 2,
            ENLARGEGUESTTURNONSOURCE_AUDIO1V8: 3,
            ENLARGEGUESTTURNONSOURCE_AUDIO3X3: 4
        }, proto.webcast.im.EnlargeGuestTurnOffSource = {
            ENLARGEGUESTTURNOFFSOURCE_NORMAL: 0,
            ENLARGEGUESTTURNOFFSOURCE_LEAVE: 1
        }, i.object.extend(t, proto.webcast.im)
    }, 75611: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(46900);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.LinkmicSelfDisciplineConfigContent", null, s), i.exportSymbol("proto.webcast.im.LinkmicSelfDisciplineLikeContent", null, s), i.exportSymbol("proto.webcast.im.LinkmicSelfDisciplineMessage", null, s), i.exportSymbol("proto.webcast.im.LinkmicSelfDisciplineMessage.ContentCase", null, s), i.exportSymbol("proto.webcast.im.LinkmicSelfDisciplineMessageType", null, s), proto.webcast.im.LinkmicSelfDisciplineMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, proto.webcast.im.LinkmicSelfDisciplineMessage.oneofGroups_)
        }, i.inherits(proto.webcast.im.LinkmicSelfDisciplineMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LinkmicSelfDisciplineMessage.displayName = "proto.webcast.im.LinkmicSelfDisciplineMessage"), proto.webcast.im.LinkmicSelfDisciplineConfigContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LinkmicSelfDisciplineConfigContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LinkmicSelfDisciplineConfigContent.displayName = "proto.webcast.im.LinkmicSelfDisciplineConfigContent"), proto.webcast.im.LinkmicSelfDisciplineLikeContent = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LinkmicSelfDisciplineLikeContent, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LinkmicSelfDisciplineLikeContent.displayName = "proto.webcast.im.LinkmicSelfDisciplineLikeContent"), proto.webcast.im.LinkmicSelfDisciplineMessage.oneofGroups_ = [[21, 22]], proto.webcast.im.LinkmicSelfDisciplineMessage.ContentCase = {
            CONTENT_NOT_SET: 0,
            CONFIG_CONTENT: 21,
            LIKE_CONTENT: 22
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.getContentCase = function () {
            return r.Message.computeOneofCase(this, proto.webcast.im.LinkmicSelfDisciplineMessage.oneofGroups_[0])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicSelfDisciplineMessage.toObject(e, this)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                configContent: (o = t.getConfigContent()) && proto.webcast.im.LinkmicSelfDisciplineConfigContent.toObject(e, o),
                likeContent: (o = t.getLikeContent()) && proto.webcast.im.LinkmicSelfDisciplineLikeContent.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LinkmicSelfDisciplineMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicSelfDisciplineMessage;
            return proto.webcast.im.LinkmicSelfDisciplineMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMsgType(o);
                        break;
                    case 21:
                        o = new proto.webcast.im.LinkmicSelfDisciplineConfigContent;
                        t.readMessage(o, proto.webcast.im.LinkmicSelfDisciplineConfigContent.deserializeBinaryFromReader), e.setConfigContent(o);
                        break;
                    case 22:
                        o = new proto.webcast.im.LinkmicSelfDisciplineLikeContent;
                        t.readMessage(o, proto.webcast.im.LinkmicSelfDisciplineLikeContent.deserializeBinaryFromReader), e.setLikeContent(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicSelfDisciplineMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), null != (o = e.getConfigContent()) && t.writeMessage(21, o, proto.webcast.im.LinkmicSelfDisciplineConfigContent.serializeBinaryToWriter), null != (o = e.getLikeContent()) && t.writeMessage(22, o, proto.webcast.im.LinkmicSelfDisciplineLikeContent.serializeBinaryToWriter)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.getConfigContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicSelfDisciplineConfigContent, 21)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.setConfigContent = function (e) {
            return r.Message.setOneofWrapperField(this, 21, proto.webcast.im.LinkmicSelfDisciplineMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.clearConfigContent = function () {
            return this.setConfigContent(undefined)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.hasConfigContent = function () {
            return null != r.Message.getField(this, 21)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.getLikeContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LinkmicSelfDisciplineLikeContent, 22)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.setLikeContent = function (e) {
            return r.Message.setOneofWrapperField(this, 22, proto.webcast.im.LinkmicSelfDisciplineMessage.oneofGroups_[0], e)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.clearLikeContent = function () {
            return this.setLikeContent(undefined)
        }, proto.webcast.im.LinkmicSelfDisciplineMessage.prototype.hasLikeContent = function () {
            return null != r.Message.getField(this, 22)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicSelfDisciplineConfigContent.toObject(e, this)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.toObject = function (e, t) {
            var o = {
                switchStatus: r.Message.getFieldWithDefault(t, 1, 0),
                currentTarget: r.Message.getFieldWithDefault(t, 2, ""),
                targetIconUri: r.Message.getFieldWithDefault(t, 3, ""),
                text: r.Message.getFieldWithDefault(t, 4, ""),
                punchDuration: r.Message.getFieldWithDefault(t, 5, "0"),
                toast: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkmicSelfDisciplineConfigContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicSelfDisciplineConfigContent;
            return proto.webcast.im.LinkmicSelfDisciplineConfigContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setSwitchStatus(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setCurrentTarget(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTargetIconUri(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setText(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setPunchDuration(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setToast(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicSelfDisciplineConfigContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getSwitchStatus()) && t.writeEnum(1, o), (o = e.getCurrentTarget()).length > 0 && t.writeString(2, o), (o = e.getTargetIconUri()).length > 0 && t.writeString(3, o), (o = e.getText()).length > 0 && t.writeString(4, o), o = e.getPunchDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getToast()).length > 0 && t.writeString(6, o)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.getSwitchStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.setSwitchStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.getCurrentTarget = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.setCurrentTarget = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.getTargetIconUri = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.setTargetIconUri = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.getPunchDuration = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.setPunchDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.LinkmicSelfDisciplineConfigContent.prototype.setToast = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.toObject = function (e) {
            return proto.webcast.im.LinkmicSelfDisciplineLikeContent.toObject(e, this)
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.toObject = function (e, t) {
            var o = {
                fromUserId: r.Message.getFieldWithDefault(t, 1, "0"),
                toUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                source: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.LinkmicSelfDisciplineLikeContent.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LinkmicSelfDisciplineLikeContent;
            return proto.webcast.im.LinkmicSelfDisciplineLikeContent.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setFromUserId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setToUserId(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setSource(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LinkmicSelfDisciplineLikeContent.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getFromUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getToUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getSource()) && t.writeEnum(3, o)
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.getFromUserId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.setFromUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.getSource = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.LinkmicSelfDisciplineLikeContent.prototype.setSource = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        }, proto.webcast.im.LinkmicSelfDisciplineMessageType = {
            TYPESELFDISCIPLINE_UNKNOWN: 0,
            TYPESELFDISCIPLINE_CONFIG: 1,
            TYPESELFDISCIPLINE_LIKE: 2
        }, i.object.extend(t, proto.webcast.im)
    }, 61053: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(46900);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.SelfDisciplinePunchMessage", null, s), i.exportSymbol("proto.webcast.im.SelfDisciplinePunchMessageType", null, s), proto.webcast.im.SelfDisciplinePunchMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.SelfDisciplinePunchMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.SelfDisciplinePunchMessage.displayName = "proto.webcast.im.SelfDisciplinePunchMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SelfDisciplinePunchMessage.prototype.toObject = function (e) {
            return proto.webcast.im.SelfDisciplinePunchMessage.toObject(e, this)
        }, proto.webcast.im.SelfDisciplinePunchMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                toUserId: r.Message.getFieldWithDefault(t, 3, "0"),
                startTime: r.Message.getFieldWithDefault(t, 4, "0"),
                punchDuration: r.Message.getFieldWithDefault(t, 5, "0"),
                toastText: r.Message.getFieldWithDefault(t, 6, ""),
                punchStatus: r.Message.getFieldWithDefault(t, 7, 0)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.SelfDisciplinePunchMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.SelfDisciplinePunchMessage;
            return proto.webcast.im.SelfDisciplinePunchMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.SelfDisciplinePunchMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMsgType(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setToUserId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setPunchDuration(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setToastText(o);
                        break;
                    case 7:
                        o = t.readEnum();
                        e.setPunchStatus(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.SelfDisciplinePunchMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.SelfDisciplinePunchMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), o = e.getToUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getPunchDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getToastText()).length > 0 && t.writeString(6, o), 0 !== (o = e.getPunchStatus()) && t.writeEnum(7, o)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getToUserId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setToUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getPunchDuration = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setPunchDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getToastText = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setToastText = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.getPunchStatus = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.im.SelfDisciplinePunchMessage.prototype.setPunchStatus = function (e) {
            return r.Message.setProto3EnumField(this, 7, e)
        }, proto.webcast.im.SelfDisciplinePunchMessageType = {
            UNKNOWN: 0,
            PUNCH_START: 1,
            PUNCH_SUCCESS: 2,
            PUNCH_FINISH: 3
        }, i.object.extend(t, proto.webcast.im)
    }, 20106: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(8411);
        i.object.extend(proto, n);
        var a = o(50684);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.LotteryBurstMessage", null, s), proto.webcast.im.LotteryBurstMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LotteryBurstMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryBurstMessage.displayName = "proto.webcast.im.LotteryBurstMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryBurstMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryBurstMessage.toObject(e, this)
        }, proto.webcast.im.LotteryBurstMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                burstTimeRemainSeconds: r.Message.getFieldWithDefault(t, 2, "0"),
                multiple: r.Message.getFieldWithDefault(t, 3, "0"),
                propertyDefinitionId: r.Message.getFieldWithDefault(t, 4, "0"),
                propertyIcon: (o = t.getPropertyIcon()) && n.Image.toObject(e, o)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LotteryBurstMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryBurstMessage;
            return proto.webcast.im.LotteryBurstMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LotteryBurstMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
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
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setPropertyIcon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LotteryBurstMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryBurstMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LotteryBurstMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getBurstTimeRemainSeconds(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getMultiple(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getPropertyDefinitionId(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), null != (o = e.getPropertyIcon()) && t.writeMessage(5, o, n.Image.serializeBinaryToWriter)
        }, proto.webcast.im.LotteryBurstMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LotteryBurstMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LotteryBurstMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LotteryBurstMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LotteryBurstMessage.prototype.getBurstTimeRemainSeconds = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LotteryBurstMessage.prototype.setBurstTimeRemainSeconds = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LotteryBurstMessage.prototype.getMultiple = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.LotteryBurstMessage.prototype.setMultiple = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.LotteryBurstMessage.prototype.getPropertyDefinitionId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.LotteryBurstMessage.prototype.setPropertyDefinitionId = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.LotteryBurstMessage.prototype.getPropertyIcon = function () {
            return r.Message.getWrapperField(this, n.Image, 5)
        }, proto.webcast.im.LotteryBurstMessage.prototype.setPropertyIcon = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.LotteryBurstMessage.prototype.clearPropertyIcon = function () {
            return this.setPropertyIcon(undefined)
        }, proto.webcast.im.LotteryBurstMessage.prototype.hasPropertyIcon = function () {
            return null != r.Message.getField(this, 5)
        }, i.object.extend(t, proto.webcast.im)
    }, 30802: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(48293);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.LotteryCandidateEventMessage", null, s), i.exportSymbol("proto.webcast.im.LotteryDrawResultEventMessage", null, s), i.exportSymbol("proto.webcast.im.LotteryEventMessage", null, s), i.exportSymbol("proto.webcast.im.LotteryEventNewMessage", null, s), i.exportSymbol("proto.webcast.im.LotteryExpandEventMessage", null, s), i.exportSymbol("proto.webcast.im.LotteryMessage", null, s), i.exportSymbol("proto.webcast.im.XGLotteryMessage", null, s), proto.webcast.im.LotteryMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LotteryMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryMessage.displayName = "proto.webcast.im.LotteryMessage"), proto.webcast.im.XGLotteryMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.XGLotteryMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.XGLotteryMessage.displayName = "proto.webcast.im.XGLotteryMessage"), proto.webcast.im.LotteryEventMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LotteryEventMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryEventMessage.displayName = "proto.webcast.im.LotteryEventMessage"), proto.webcast.im.LotteryExpandEventMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LotteryExpandEventMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryExpandEventMessage.displayName = "proto.webcast.im.LotteryExpandEventMessage"), proto.webcast.im.LotteryEventNewMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LotteryEventNewMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.LotteryEventNewMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryEventNewMessage.displayName = "proto.webcast.im.LotteryEventNewMessage"), proto.webcast.im.LotteryCandidateEventMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LotteryCandidateEventMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryCandidateEventMessage.displayName = "proto.webcast.im.LotteryCandidateEventMessage"), proto.webcast.im.LotteryDrawResultEventMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LotteryDrawResultEventMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.LotteryDrawResultEventMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LotteryDrawResultEventMessage.displayName = "proto.webcast.im.LotteryDrawResultEventMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryMessage.toObject(e, this)
        }, proto.webcast.im.LotteryMessage.toObject = function (e, t) {
            var o, r = {common: (o = t.getCommon()) && n.Common.toObject(e, o)};
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.LotteryMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryMessage;
            return proto.webcast.im.LotteryMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LotteryMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                if (1 === t.getFieldNumber()) {
                    var o = new n.Common;
                    t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o)
                } else t.skipField()
            }
            return e
        }, proto.webcast.im.LotteryMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LotteryMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter)
        }, proto.webcast.im.LotteryMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.LotteryMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LotteryMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LotteryMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.XGLotteryMessage.prototype.toObject = function (e) {
            return proto.webcast.im.XGLotteryMessage.toObject(e, this)
        }, proto.webcast.im.XGLotteryMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                lotteryInfo: (o = t.getLotteryInfo()) && a.LotteryInfo.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.XGLotteryMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.XGLotteryMessage;
            return proto.webcast.im.XGLotteryMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.XGLotteryMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.LotteryInfo;
                        t.readMessage(o, a.LotteryInfo.deserializeBinaryFromReader), e.setLotteryInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.XGLotteryMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.XGLotteryMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.XGLotteryMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getLotteryInfo()) && t.writeMessage(2, o, a.LotteryInfo.serializeBinaryToWriter)
        }, proto.webcast.im.XGLotteryMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.XGLotteryMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.XGLotteryMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.XGLotteryMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.XGLotteryMessage.prototype.getLotteryInfo = function () {
            return r.Message.getWrapperField(this, a.LotteryInfo, 2)
        }, proto.webcast.im.XGLotteryMessage.prototype.setLotteryInfo = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.XGLotteryMessage.prototype.clearLotteryInfo = function () {
            return this.setLotteryInfo(undefined)
        }, proto.webcast.im.XGLotteryMessage.prototype.hasLotteryInfo = function () {
            return null != r.Message.getField(this, 2)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryEventMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryEventMessage.toObject(e, this)
        }, proto.webcast.im.LotteryEventMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                lotteryId: r.Message.getFieldWithDefault(t, 2, "0"),
                lotteryStatus: r.Message.getFieldWithDefault(t, 3, 0),
                lotteryStartTime: r.Message.getFieldWithDefault(t, 4, "0"),
                lotteryDrawTime: r.Message.getFieldWithDefault(t, 5, "0"),
                lotteryCurrentTime: r.Message.getFieldWithDefault(t, 6, "0"),
                rulePageScheme: r.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LotteryEventMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryEventMessage;
            return proto.webcast.im.LotteryEventMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LotteryEventMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLotteryId(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setLotteryStatus(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setLotteryStartTime(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setLotteryDrawTime(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setLotteryCurrentTime(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setRulePageScheme(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LotteryEventMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryEventMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LotteryEventMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getLotteryId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getLotteryStatus()) && t.writeInt32(3, o), o = e.getLotteryStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getLotteryDrawTime(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getLotteryCurrentTime(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getRulePageScheme()).length > 0 && t.writeString(7, o)
        }, proto.webcast.im.LotteryEventMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.LotteryEventMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LotteryEventMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LotteryEventMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LotteryEventMessage.prototype.getLotteryId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LotteryEventMessage.prototype.setLotteryId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LotteryEventMessage.prototype.getLotteryStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.LotteryEventMessage.prototype.setLotteryStatus = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.LotteryEventMessage.prototype.getLotteryStartTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.LotteryEventMessage.prototype.setLotteryStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.LotteryEventMessage.prototype.getLotteryDrawTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.LotteryEventMessage.prototype.setLotteryDrawTime = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.LotteryEventMessage.prototype.getLotteryCurrentTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.LotteryEventMessage.prototype.setLotteryCurrentTime = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.LotteryEventMessage.prototype.getRulePageScheme = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.LotteryEventMessage.prototype.setRulePageScheme = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryExpandEventMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryExpandEventMessage.toObject(e, this)
        }, proto.webcast.im.LotteryExpandEventMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                expandPrizeType: r.Message.getFieldWithDefault(t, 2, "0"),
                extra: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LotteryExpandEventMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryExpandEventMessage;
            return proto.webcast.im.LotteryExpandEventMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LotteryExpandEventMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setExpandPrizeType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setExtra(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryExpandEventMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LotteryExpandEventMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getExpandPrizeType(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getExtra()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.getExpandPrizeType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.setExpandPrizeType = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.LotteryExpandEventMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.LotteryEventNewMessage.repeatedFields_ = [10], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryEventNewMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryEventNewMessage.toObject(e, this)
        }, proto.webcast.im.LotteryEventNewMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                lotteryId: r.Message.getFieldWithDefault(t, 2, "0"),
                lotteryStatus: r.Message.getFieldWithDefault(t, 3, 0),
                lotteryStartTime: r.Message.getFieldWithDefault(t, 4, "0"),
                lotteryDrawTime: r.Message.getFieldWithDefault(t, 5, "0"),
                lotteryCurrentTime: r.Message.getFieldWithDefault(t, 6, "0"),
                rulePageScheme: r.Message.getFieldWithDefault(t, 7, ""),
                prizeType: r.Message.getFieldWithDefault(t, 8, "0"),
                lotteryAuditFailureReason: r.Message.getFieldWithDefault(t, 9, ""),
                conditionsList: null == (o = r.Message.getRepeatedField(t, 10)) ? undefined : o,
                extraMap: (o = t.getExtraMap()) ? o.toObject(e, undefined) : [],
                useNewDrawInteraction: r.Message.getBooleanFieldWithDefault(t, 12, !1)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LotteryEventNewMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryEventNewMessage;
            return proto.webcast.im.LotteryEventNewMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LotteryEventNewMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLotteryId(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setLotteryStatus(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setLotteryStartTime(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setLotteryDrawTime(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setLotteryCurrentTime(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setRulePageScheme(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setPrizeType(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setLotteryAuditFailureReason(o);
                        break;
                    case 10:
                        for (var i = t.isDelimited() ? t.readPackedInt32() : [t.readInt32()], s = 0; s < i.length; s++) e.addConditions(i[s]);
                        break;
                    case 11:
                        o = e.getExtraMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 12:
                        o = t.readBool();
                        e.setUseNewDrawInteraction(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LotteryEventNewMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryEventNewMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LotteryEventNewMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getLotteryId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getLotteryStatus()) && t.writeInt32(3, o), o = e.getLotteryStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getLotteryDrawTime(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getLotteryCurrentTime(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getRulePageScheme()).length > 0 && t.writeString(7, o), o = e.getPrizeType(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), (o = e.getLotteryAuditFailureReason()).length > 0 && t.writeString(9, o), (o = e.getConditionsList()).length > 0 && t.writePackedInt32(10, o), (o = e.getExtraMap(!0)) && o.getLength() > 0 && o.serializeBinary(11, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (o = e.getUseNewDrawInteraction()) && t.writeBool(12, o)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.getLotteryId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.LotteryEventNewMessage.prototype.setLotteryId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.getLotteryStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.setLotteryStatus = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.LotteryEventNewMessage.prototype.getLotteryStartTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.LotteryEventNewMessage.prototype.setLotteryStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LotteryEventNewMessage.prototype.getLotteryDrawTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LotteryEventNewMessage.prototype.setLotteryDrawTime = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LotteryEventNewMessage.prototype.getLotteryCurrentTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.LotteryEventNewMessage.prototype.setLotteryCurrentTime = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.LotteryEventNewMessage.prototype.getRulePageScheme = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.LotteryEventNewMessage.prototype.setRulePageScheme = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.LotteryEventNewMessage.prototype.getPrizeType = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.im.LotteryEventNewMessage.prototype.setPrizeType = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        },proto.webcast.im.LotteryEventNewMessage.prototype.getLotteryAuditFailureReason = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.im.LotteryEventNewMessage.prototype.setLotteryAuditFailureReason = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        },proto.webcast.im.LotteryEventNewMessage.prototype.getConditionsList = function () {
            return r.Message.getRepeatedField(this, 10)
        },proto.webcast.im.LotteryEventNewMessage.prototype.setConditionsList = function (e) {
            return r.Message.setField(this, 10, e || [])
        },proto.webcast.im.LotteryEventNewMessage.prototype.addConditions = function (e, t) {
            return r.Message.addToRepeatedField(this, 10, e, t)
        },proto.webcast.im.LotteryEventNewMessage.prototype.clearConditionsList = function () {
            return this.setConditionsList([])
        },proto.webcast.im.LotteryEventNewMessage.prototype.getExtraMap = function (e) {
            return r.Message.getMapField(this, 11, e, null)
        },proto.webcast.im.LotteryEventNewMessage.prototype.clearExtraMap = function () {
            return this.getExtraMap().clear(), this
        },proto.webcast.im.LotteryEventNewMessage.prototype.getUseNewDrawInteraction = function () {
            return r.Message.getBooleanFieldWithDefault(this, 12, !1)
        },proto.webcast.im.LotteryEventNewMessage.prototype.setUseNewDrawInteraction = function (e) {
            return r.Message.setProto3BooleanField(this, 12, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryCandidateEventMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryCandidateEventMessage.toObject(e, this)
        }, proto.webcast.im.LotteryCandidateEventMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                lotteryId: r.Message.getFieldWithDefault(t, 2, "0"),
                userId: r.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.LotteryCandidateEventMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryCandidateEventMessage;
            return proto.webcast.im.LotteryCandidateEventMessage.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.LotteryCandidateEventMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLotteryId(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryCandidateEventMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LotteryCandidateEventMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getLotteryId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o)
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.getLotteryId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.setLotteryId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LotteryCandidateEventMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LotteryDrawResultEventMessage.repeatedFields_ = [3],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryDrawResultEventMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LotteryDrawResultEventMessage.toObject(e, this)
        }, proto.webcast.im.LotteryDrawResultEventMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                lotteryId: r.Message.getFieldWithDefault(t, 2, "0"),
                userIdsList: null == (o = r.Message.getRepeatedField(t, 3)) ? undefined : o,
                extra: r.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.LotteryDrawResultEventMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LotteryDrawResultEventMessage;
            return proto.webcast.im.LotteryDrawResultEventMessage.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.LotteryDrawResultEventMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLotteryId(o);
                        break;
                    case 3:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < r.length; i++) e.addUserIds(r[i]);
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
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LotteryDrawResultEventMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LotteryDrawResultEventMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), o = e.getLotteryId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getUserIdsList()).length > 0 && t.writePackedInt64String(3, o), (o = e.getExtra()).length > 0 && t.writeString(4, o)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.getLotteryId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.setLotteryId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.getUserIdsList = function () {
            return r.Message.getRepeatedField(this, 3)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.setUserIdsList = function (e) {
            return r.Message.setField(this, 3, e || [])
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.addUserIds = function (e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.clearUserIdsList = function () {
            return this.setUserIdsList([])
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.LotteryDrawResultEventMessage.prototype.setExtra = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },i.object.extend(t, proto.webcast.im)
    }, 76745: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(64925);
        i.object.extend(proto, n);
        var a = o(8411);
        i.object.extend(proto, a);
        var c = o(99222);
        i.object.extend(proto, c);
        var p = o(50684);
        i.object.extend(proto, p), i.exportSymbol("proto.webcast.im.LuckyBoxEndMessage", null, s), i.exportSymbol("proto.webcast.im.LuckyBoxMessage", null, s), i.exportSymbol("proto.webcast.im.LuckyBoxMessage.BottomCommentMsg", null, s), i.exportSymbol("proto.webcast.im.LuckyBoxMessage.BoxMeta", null, s), i.exportSymbol("proto.webcast.im.LuckyBoxMessage.Extra", null, s), i.exportSymbol("proto.webcast.im.LuckyBoxMessage.ImgText", null, s), proto.webcast.im.LuckyBoxMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LuckyBoxMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.LuckyBoxMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyBoxMessage.displayName = "proto.webcast.im.LuckyBoxMessage"), proto.webcast.im.LuckyBoxMessage.ImgText = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LuckyBoxMessage.ImgText, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyBoxMessage.ImgText.displayName = "proto.webcast.im.LuckyBoxMessage.ImgText"), proto.webcast.im.LuckyBoxMessage.BoxMeta = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LuckyBoxMessage.BoxMeta, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyBoxMessage.BoxMeta.displayName = "proto.webcast.im.LuckyBoxMessage.BoxMeta"), proto.webcast.im.LuckyBoxMessage.Extra = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.LuckyBoxMessage.Extra.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.LuckyBoxMessage.Extra, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyBoxMessage.Extra.displayName = "proto.webcast.im.LuckyBoxMessage.Extra"), proto.webcast.im.LuckyBoxMessage.BottomCommentMsg = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LuckyBoxMessage.BottomCommentMsg, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.displayName = "proto.webcast.im.LuckyBoxMessage.BottomCommentMsg"), proto.webcast.im.LuckyBoxEndMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LuckyBoxEndMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyBoxEndMessage.displayName = "proto.webcast.im.LuckyBoxEndMessage"), proto.webcast.im.LuckyBoxMessage.repeatedFields_ = [13], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyBoxMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyBoxMessage.toObject(e, this)
        }, proto.webcast.im.LuckyBoxMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && p.Common.toObject(e, o),
                diamondCount: r.Message.getFieldWithDefault(t, 2, "0"),
                boxId: r.Message.getFieldWithDefault(t, 3, "0"),
                sendTime: r.Message.getFieldWithDefault(t, 4, "0"),
                delayTime: r.Message.getFieldWithDefault(t, 5, "0"),
                boxType: r.Message.getFieldWithDefault(t, 6, "0"),
                title: r.Message.getFieldWithDefault(t, 7, ""),
                large: r.Message.getBooleanFieldWithDefault(t, 8, !1),
                background: (o = t.getBackground()) && a.Image.toObject(e, o),
                isOfficial: r.Message.getBooleanFieldWithDefault(t, 10, !1),
                priority: r.Message.getFieldWithDefault(t, 11, "0"),
                user: (o = t.getUser()) && n.User.toObject(e, o),
                descriptionListList: r.Message.toObjectList(t.getDescriptionListList(), proto.webcast.im.LuckyBoxMessage.ImgText.toObject, e),
                luckyIcon: (o = t.getLuckyIcon()) && a.Image.toObject(e, o),
                displayDuration: r.Message.getFieldWithDefault(t, 15, "0"),
                boxStatus: r.Message.getFieldWithDefault(t, 16, 0),
                flatDuration: r.Message.getFieldWithDefault(t, 17, 0),
                unpackType: r.Message.getFieldWithDefault(t, 18, 0),
                meta: (o = t.getMeta()) && proto.webcast.im.LuckyBoxMessage.BoxMeta.toObject(e, o),
                extra: (o = t.getExtra()) && proto.webcast.im.LuckyBoxMessage.Extra.toObject(e, o),
                businessType: r.Message.getFieldWithDefault(t, 21, "0"),
                topCoverImage: (o = t.getTopCoverImage()) && a.Image.toObject(e, o),
                bottomCoverImage: (o = t.getBottomCoverImage()) && a.Image.toObject(e, o),
                boxIdStr: r.Message.getFieldWithDefault(t, 24, ""),
                bottomCommentMsg: (o = t.getBottomCommentMsg()) && proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.toObject(e, o),
                isRiskyOwner: r.Message.getBooleanFieldWithDefault(t, 26, !1),
                activityId: r.Message.getFieldWithDefault(t, 27, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LuckyBoxMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyBoxMessage;
            return proto.webcast.im.LuckyBoxMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LuckyBoxMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new p.Common;
                        t.readMessage(o, p.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setDiamondCount(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setBoxId(o);
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
                        o = t.readInt64String();
                        e.setBoxType(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setLarge(o);
                        break;
                    case 9:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setIsOfficial(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setPriority(o);
                        break;
                    case 12:
                        o = new n.User;
                        t.readMessage(o, n.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 13:
                        o = new proto.webcast.im.LuckyBoxMessage.ImgText;
                        t.readMessage(o, proto.webcast.im.LuckyBoxMessage.ImgText.deserializeBinaryFromReader), e.addDescriptionList(o);
                        break;
                    case 14:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setLuckyIcon(o);
                        break;
                    case 15:
                        o = t.readInt64String();
                        e.setDisplayDuration(o);
                        break;
                    case 16:
                        o = t.readInt32();
                        e.setBoxStatus(o);
                        break;
                    case 17:
                        o = t.readInt32();
                        e.setFlatDuration(o);
                        break;
                    case 18:
                        o = t.readInt32();
                        e.setUnpackType(o);
                        break;
                    case 19:
                        o = new proto.webcast.im.LuckyBoxMessage.BoxMeta;
                        t.readMessage(o, proto.webcast.im.LuckyBoxMessage.BoxMeta.deserializeBinaryFromReader), e.setMeta(o);
                        break;
                    case 20:
                        o = new proto.webcast.im.LuckyBoxMessage.Extra;
                        t.readMessage(o, proto.webcast.im.LuckyBoxMessage.Extra.deserializeBinaryFromReader), e.setExtra(o);
                        break;
                    case 21:
                        o = t.readInt64String();
                        e.setBusinessType(o);
                        break;
                    case 22:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setTopCoverImage(o);
                        break;
                    case 23:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setBottomCoverImage(o);
                        break;
                    case 24:
                        o = t.readString();
                        e.setBoxIdStr(o);
                        break;
                    case 25:
                        o = new proto.webcast.im.LuckyBoxMessage.BottomCommentMsg;
                        t.readMessage(o, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.deserializeBinaryFromReader), e.setBottomCommentMsg(o);
                        break;
                    case 26:
                        o = t.readBool();
                        e.setIsRiskyOwner(o);
                        break;
                    case 27:
                        o = t.readString();
                        e.setActivityId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LuckyBoxMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyBoxMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LuckyBoxMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, p.Common.serializeBinaryToWriter), o = e.getDiamondCount(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getBoxId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getSendTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getDelayTime(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getBoxType(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getTitle()).length > 0 && t.writeString(7, o), (o = e.getLarge()) && t.writeBool(8, o), null != (o = e.getBackground()) && t.writeMessage(9, o, a.Image.serializeBinaryToWriter), (o = e.getIsOfficial()) && t.writeBool(10, o), o = e.getPriority(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), null != (o = e.getUser()) && t.writeMessage(12, o, n.User.serializeBinaryToWriter), (o = e.getDescriptionListList()).length > 0 && t.writeRepeatedMessage(13, o, proto.webcast.im.LuckyBoxMessage.ImgText.serializeBinaryToWriter), null != (o = e.getLuckyIcon()) && t.writeMessage(14, o, a.Image.serializeBinaryToWriter), o = e.getDisplayDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(15, o), 0 !== (o = e.getBoxStatus()) && t.writeInt32(16, o), 0 !== (o = e.getFlatDuration()) && t.writeInt32(17, o), 0 !== (o = e.getUnpackType()) && t.writeInt32(18, o), null != (o = e.getMeta()) && t.writeMessage(19, o, proto.webcast.im.LuckyBoxMessage.BoxMeta.serializeBinaryToWriter), null != (o = e.getExtra()) && t.writeMessage(20, o, proto.webcast.im.LuckyBoxMessage.Extra.serializeBinaryToWriter), o = e.getBusinessType(), 0 !== parseInt(o, 10) && t.writeInt64String(21, o), null != (o = e.getTopCoverImage()) && t.writeMessage(22, o, a.Image.serializeBinaryToWriter), null != (o = e.getBottomCoverImage()) && t.writeMessage(23, o, a.Image.serializeBinaryToWriter), (o = e.getBoxIdStr()).length > 0 && t.writeString(24, o), null != (o = e.getBottomCommentMsg()) && t.writeMessage(25, o, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.serializeBinaryToWriter), (o = e.getIsRiskyOwner()) && t.writeBool(26, o), (o = e.getActivityId()).length > 0 && t.writeString(27, o)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyBoxMessage.ImgText.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyBoxMessage.ImgText.toObject(e, this)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.toObject = function (e, t) {
            var o, i = {
                image: (o = t.getImage()) && a.Image.toObject(e, o),
                text: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LuckyBoxMessage.ImgText.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyBoxMessage.ImgText;
            return proto.webcast.im.LuckyBoxMessage.ImgText.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setImage(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setText(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyBoxMessage.ImgText.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LuckyBoxMessage.ImgText.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getImage()) && t.writeMessage(1, o, a.Image.serializeBinaryToWriter), (o = e.getText()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.getImage = function () {
            return r.Message.getWrapperField(this, a.Image, 1)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.setImage = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.clearImage = function () {
            return this.setImage(undefined)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.hasImage = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.LuckyBoxMessage.ImgText.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyBoxMessage.BoxMeta.toObject(e, this)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.toObject = function (e, t) {
            var o, i = {
                titleDesc: r.Message.getFieldWithDefault(t, 1, ""),
                contentCountDesc: r.Message.getFieldWithDefault(t, 2, ""),
                contentAmountDesc: r.Message.getFieldWithDefault(t, 3, ""),
                animationDesc: r.Message.getFieldWithDefault(t, 4, ""),
                beforeUnpackDesc: r.Message.getFieldWithDefault(t, 5, ""),
                successUnpackDesc: r.Message.getFieldWithDefault(t, 6, ""),
                failUnpackDesc: r.Message.getFieldWithDefault(t, 7, ""),
                adImage: (o = t.getAdImage()) && a.Image.toObject(e, o),
                imDesc: r.Message.getFieldWithDefault(t, 9, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LuckyBoxMessage.BoxMeta.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyBoxMessage.BoxMeta;
            return proto.webcast.im.LuckyBoxMessage.BoxMeta.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setTitleDesc(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContentCountDesc(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContentAmountDesc(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAnimationDesc(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setBeforeUnpackDesc(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setSuccessUnpackDesc(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setFailUnpackDesc(o);
                        break;
                    case 8:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setAdImage(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setImDesc(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyBoxMessage.BoxMeta.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getTitleDesc()).length > 0 && t.writeString(1, o), (o = e.getContentCountDesc()).length > 0 && t.writeString(2, o), (o = e.getContentAmountDesc()).length > 0 && t.writeString(3, o), (o = e.getAnimationDesc()).length > 0 && t.writeString(4, o), (o = e.getBeforeUnpackDesc()).length > 0 && t.writeString(5, o), (o = e.getSuccessUnpackDesc()).length > 0 && t.writeString(6, o), (o = e.getFailUnpackDesc()).length > 0 && t.writeString(7, o), null != (o = e.getAdImage()) && t.writeMessage(8, o, a.Image.serializeBinaryToWriter), (o = e.getImDesc()).length > 0 && t.writeString(9, o)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getTitleDesc = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setTitleDesc = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getContentCountDesc = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setContentCountDesc = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getContentAmountDesc = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setContentAmountDesc = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getAnimationDesc = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setAnimationDesc = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getBeforeUnpackDesc = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setBeforeUnpackDesc = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getSuccessUnpackDesc = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setSuccessUnpackDesc = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getFailUnpackDesc = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setFailUnpackDesc = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getAdImage = function () {
            return r.Message.getWrapperField(this, a.Image, 8)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setAdImage = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.clearAdImage = function () {
            return this.setAdImage(undefined)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.hasAdImage = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.getImDesc = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.LuckyBoxMessage.BoxMeta.prototype.setImDesc = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.LuckyBoxMessage.Extra.repeatedFields_ = [5], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyBoxMessage.Extra.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyBoxMessage.Extra.toObject(e, this)
        }, proto.webcast.im.LuckyBoxMessage.Extra.toObject = function (e, t) {
            var o, i = {
                allDescMap: (o = t.getAllDescMap()) ? o.toObject(e, undefined) : [],
                allImageMap: (o = t.getAllImageMap()) ? o.toObject(e, proto.webcast.data.Image.toObject) : [],
                currentRound: r.Message.getFieldWithDefault(t, 3, 0),
                pct: r.Message.getFieldWithDefault(t, 4, 0),
                roundTargetList: null == (o = r.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LuckyBoxMessage.Extra.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyBoxMessage.Extra;
            return proto.webcast.im.LuckyBoxMessage.Extra.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LuckyBoxMessage.Extra.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = e.getAllDescMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 2:
                        o = e.getAllImageMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.webcast.data.Image.deserializeBinaryFromReader, "", new proto.webcast.data.Image)
                        }));
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setCurrentRound(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setPct(o);
                        break;
                    case 5:
                        for (var i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < i.length; s++) e.addRoundTarget(i[s]);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyBoxMessage.Extra.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LuckyBoxMessage.Extra.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getAllDescMap(!0)) && o.getLength() > 0 && o.serializeBinary(1, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (o = e.getAllImageMap(!0)) && o.getLength() > 0 && o.serializeBinary(2, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.webcast.data.Image.serializeBinaryToWriter), 0 !== (o = e.getCurrentRound()) && t.writeInt32(3, o), 0 !== (o = e.getPct()) && t.writeInt32(4, o), (o = e.getRoundTargetList()).length > 0 && t.writePackedInt64String(5, o)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.getAllDescMap = function (e) {
            return r.Message.getMapField(this, 1, e, null)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.clearAllDescMap = function () {
            return this.getAllDescMap().clear(), this
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.getAllImageMap = function (e) {
            return r.Message.getMapField(this, 2, e, proto.webcast.data.Image)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.clearAllImageMap = function () {
            return this.getAllImageMap().clear(), this
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.getCurrentRound = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.setCurrentRound = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.getPct = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.setPct = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.getRoundTargetList = function () {
            return r.Message.getRepeatedField(this, 5)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.setRoundTargetList = function (e) {
            return r.Message.setField(this, 5, e || [])
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.addRoundTarget = function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t)
        }, proto.webcast.im.LuckyBoxMessage.Extra.prototype.clearRoundTargetList = function () {
            return this.setRoundTargetList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.toObject(e, this)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.toObject = function (e, t) {
            var o, r = {
                text: (o = t.getText()) && c.Text.toObject(e, o),
                background: (o = t.getBackground()) && a.Image.toObject(e, o),
                leftIcon: (o = t.getLeftIcon()) && a.Image.toObject(e, o),
                rightIcon: (o = t.getRightIcon()) && a.Image.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyBoxMessage.BottomCommentMsg;
            return proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new c.Text;
                        t.readMessage(o, c.Text.deserializeBinaryFromReader), e.setText(o);
                        break;
                    case 2:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 3:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setLeftIcon(o);
                        break;
                    case 4:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setRightIcon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getText()) && t.writeMessage(1, o, c.Text.serializeBinaryToWriter), null != (o = e.getBackground()) && t.writeMessage(2, o, a.Image.serializeBinaryToWriter), null != (o = e.getLeftIcon()) && t.writeMessage(3, o, a.Image.serializeBinaryToWriter), null != (o = e.getRightIcon()) && t.writeMessage(4, o, a.Image.serializeBinaryToWriter)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.getText = function () {
            return r.Message.getWrapperField(this, c.Text, 1)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.setText = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.clearText = function () {
            return this.setText(undefined)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.hasText = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, a.Image, 2)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.setBackground = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.getLeftIcon = function () {
            return r.Message.getWrapperField(this, a.Image, 3)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.setLeftIcon = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        }, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.clearLeftIcon = function () {
            return this.setLeftIcon(undefined)
        },proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.hasLeftIcon = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.getRightIcon = function () {
            return r.Message.getWrapperField(this, a.Image, 4)
        },proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.setRightIcon = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.clearRightIcon = function () {
            return this.setRightIcon(undefined)
        },proto.webcast.im.LuckyBoxMessage.BottomCommentMsg.prototype.hasRightIcon = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.im.LuckyBoxMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, p.Common, 1)
        },proto.webcast.im.LuckyBoxMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LuckyBoxMessage.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setDiamondCount = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBoxId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setBoxId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getSendTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setSendTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getDelayTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setDelayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBoxType = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setBoxType = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.LuckyBoxMessage.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getLarge = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.im.LuckyBoxMessage.prototype.setLarge = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, a.Image, 9)
        },proto.webcast.im.LuckyBoxMessage.prototype.setBackground = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 9)
        },proto.webcast.im.LuckyBoxMessage.prototype.getIsOfficial = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        },proto.webcast.im.LuckyBoxMessage.prototype.setIsOfficial = function (e) {
            return r.Message.setProto3BooleanField(this, 10, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getPriority = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setPriority = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 12)
        },proto.webcast.im.LuckyBoxMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.im.LuckyBoxMessage.prototype.getDescriptionListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.LuckyBoxMessage.ImgText, 13)
        },proto.webcast.im.LuckyBoxMessage.prototype.setDescriptionListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 13, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.addDescriptionList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 13, e, proto.webcast.im.LuckyBoxMessage.ImgText, t)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearDescriptionListList = function () {
            return this.setDescriptionListList([])
        },proto.webcast.im.LuckyBoxMessage.prototype.getLuckyIcon = function () {
            return r.Message.getWrapperField(this, a.Image, 14)
        },proto.webcast.im.LuckyBoxMessage.prototype.setLuckyIcon = function (e) {
            return r.Message.setWrapperField(this, 14, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearLuckyIcon = function () {
            return this.setLuckyIcon(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasLuckyIcon = function () {
            return null != r.Message.getField(this, 14)
        },proto.webcast.im.LuckyBoxMessage.prototype.getDisplayDuration = function () {
            return r.Message.getFieldWithDefault(this, 15, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setDisplayDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 15, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBoxStatus = function () {
            return r.Message.getFieldWithDefault(this, 16, 0)
        },proto.webcast.im.LuckyBoxMessage.prototype.setBoxStatus = function (e) {
            return r.Message.setProto3IntField(this, 16, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getFlatDuration = function () {
            return r.Message.getFieldWithDefault(this, 17, 0)
        },proto.webcast.im.LuckyBoxMessage.prototype.setFlatDuration = function (e) {
            return r.Message.setProto3IntField(this, 17, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getUnpackType = function () {
            return r.Message.getFieldWithDefault(this, 18, 0)
        },proto.webcast.im.LuckyBoxMessage.prototype.setUnpackType = function (e) {
            return r.Message.setProto3IntField(this, 18, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getMeta = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LuckyBoxMessage.BoxMeta, 19)
        },proto.webcast.im.LuckyBoxMessage.prototype.setMeta = function (e) {
            return r.Message.setWrapperField(this, 19, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearMeta = function () {
            return this.setMeta(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasMeta = function () {
            return null != r.Message.getField(this, 19)
        },proto.webcast.im.LuckyBoxMessage.prototype.getExtra = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LuckyBoxMessage.Extra, 20)
        },proto.webcast.im.LuckyBoxMessage.prototype.setExtra = function (e) {
            return r.Message.setWrapperField(this, 20, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearExtra = function () {
            return this.setExtra(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasExtra = function () {
            return null != r.Message.getField(this, 20)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBusinessType = function () {
            return r.Message.getFieldWithDefault(this, 21, "0")
        },proto.webcast.im.LuckyBoxMessage.prototype.setBusinessType = function (e) {
            return r.Message.setProto3StringIntField(this, 21, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getTopCoverImage = function () {
            return r.Message.getWrapperField(this, a.Image, 22)
        },proto.webcast.im.LuckyBoxMessage.prototype.setTopCoverImage = function (e) {
            return r.Message.setWrapperField(this, 22, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearTopCoverImage = function () {
            return this.setTopCoverImage(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasTopCoverImage = function () {
            return null != r.Message.getField(this, 22)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBottomCoverImage = function () {
            return r.Message.getWrapperField(this, a.Image, 23)
        },proto.webcast.im.LuckyBoxMessage.prototype.setBottomCoverImage = function (e) {
            return r.Message.setWrapperField(this, 23, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearBottomCoverImage = function () {
            return this.setBottomCoverImage(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasBottomCoverImage = function () {
            return null != r.Message.getField(this, 23)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBoxIdStr = function () {
            return r.Message.getFieldWithDefault(this, 24, "")
        },proto.webcast.im.LuckyBoxMessage.prototype.setBoxIdStr = function (e) {
            return r.Message.setProto3StringField(this, 24, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getBottomCommentMsg = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.LuckyBoxMessage.BottomCommentMsg, 25)
        },proto.webcast.im.LuckyBoxMessage.prototype.setBottomCommentMsg = function (e) {
            return r.Message.setWrapperField(this, 25, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.clearBottomCommentMsg = function () {
            return this.setBottomCommentMsg(undefined)
        },proto.webcast.im.LuckyBoxMessage.prototype.hasBottomCommentMsg = function () {
            return null != r.Message.getField(this, 25)
        },proto.webcast.im.LuckyBoxMessage.prototype.getIsRiskyOwner = function () {
            return r.Message.getBooleanFieldWithDefault(this, 26, !1)
        },proto.webcast.im.LuckyBoxMessage.prototype.setIsRiskyOwner = function (e) {
            return r.Message.setProto3BooleanField(this, 26, e)
        },proto.webcast.im.LuckyBoxMessage.prototype.getActivityId = function () {
            return r.Message.getFieldWithDefault(this, 27, "")
        },proto.webcast.im.LuckyBoxMessage.prototype.setActivityId = function (e) {
            return r.Message.setProto3StringField(this, 27, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyBoxEndMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyBoxEndMessage.toObject(e, this)
        }, proto.webcast.im.LuckyBoxEndMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && p.Common.toObject(e, o),
                boxId: r.Message.getFieldWithDefault(t, 2, "0"),
                boxIdStr: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.LuckyBoxEndMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyBoxEndMessage;
            return proto.webcast.im.LuckyBoxEndMessage.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.LuckyBoxEndMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new p.Common;
                        t.readMessage(o, p.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setBoxId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBoxIdStr(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LuckyBoxEndMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyBoxEndMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LuckyBoxEndMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, p.Common.serializeBinaryToWriter), o = e.getBoxId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getBoxIdStr()).length > 0 && t.writeString(3, o)
        },proto.webcast.im.LuckyBoxEndMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, p.Common, 1)
        },proto.webcast.im.LuckyBoxEndMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LuckyBoxEndMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.LuckyBoxEndMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LuckyBoxEndMessage.prototype.getBoxId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.LuckyBoxEndMessage.prototype.setBoxId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.LuckyBoxEndMessage.prototype.getBoxIdStr = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.LuckyBoxEndMessage.prototype.setBoxIdStr = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },i.object.extend(t, proto.webcast.im)
    }, 11165: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(64925);
        i.object.extend(proto, n);
        var a = o(50684);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.LuckyMoneyMessage", null, s), proto.webcast.im.LuckyMoneyMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.LuckyMoneyMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.LuckyMoneyMessage.displayName = "proto.webcast.im.LuckyMoneyMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LuckyMoneyMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LuckyMoneyMessage.toObject(e, this)
        }, proto.webcast.im.LuckyMoneyMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                user: (o = t.getUser()) && n.User.toObject(e, o),
                luckymoneyId: r.Message.getFieldWithDefault(t, 3, "0"),
                diamondCount: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.LuckyMoneyMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LuckyMoneyMessage;
            return proto.webcast.im.LuckyMoneyMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LuckyMoneyMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readInt64String();
                        e.setLuckymoneyId(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDiamondCount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LuckyMoneyMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LuckyMoneyMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LuckyMoneyMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, n.User.serializeBinaryToWriter), o = e.getLuckymoneyId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getDiamondCount(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 2)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.getLuckymoneyId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.LuckyMoneyMessage.prototype.setLuckymoneyId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.LuckyMoneyMessage.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.LuckyMoneyMessage.prototype.setDiamondCount = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 86226: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(64925);
        i.object.extend(proto, n);
        var a = o(8411);
        i.object.extend(proto, a);
        var c = o(50684);
        i.object.extend(proto, c), i.exportSymbol("proto.webcast.im.MagicBoxMessage", null, s), i.exportSymbol("proto.webcast.im.MagicBoxMessage.ImgText", null, s), proto.webcast.im.MagicBoxMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.MagicBoxMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.MagicBoxMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MagicBoxMessage.displayName = "proto.webcast.im.MagicBoxMessage"), proto.webcast.im.MagicBoxMessage.ImgText = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.MagicBoxMessage.ImgText, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MagicBoxMessage.ImgText.displayName = "proto.webcast.im.MagicBoxMessage.ImgText"), proto.webcast.im.MagicBoxMessage.repeatedFields_ = [13], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MagicBoxMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MagicBoxMessage.toObject(e, this)
        }, proto.webcast.im.MagicBoxMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && c.Common.toObject(e, o),
                diamondCount: r.Message.getFieldWithDefault(t, 2, "0"),
                magicBoxId: r.Message.getFieldWithDefault(t, 3, "0"),
                sendTime: r.Message.getFieldWithDefault(t, 4, "0"),
                delayTime: r.Message.getFieldWithDefault(t, 5, "0"),
                boxType: r.Message.getFieldWithDefault(t, 6, "0"),
                title: r.Message.getFieldWithDefault(t, 7, ""),
                large: r.Message.getBooleanFieldWithDefault(t, 8, !1),
                background: (o = t.getBackground()) && a.Image.toObject(e, o),
                isOfficial: r.Message.getBooleanFieldWithDefault(t, 10, !1),
                priority: r.Message.getFieldWithDefault(t, 11, "0"),
                user: (o = t.getUser()) && n.User.toObject(e, o),
                descriptionListList: r.Message.toObjectList(t.getDescriptionListList(), proto.webcast.im.MagicBoxMessage.ImgText.toObject, e)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.MagicBoxMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MagicBoxMessage;
            return proto.webcast.im.MagicBoxMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MagicBoxMessage.deserializeBinaryFromReader = function (e, t) {
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
                        e.setMagicBoxId(o);
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
                        o = t.readInt64String();
                        e.setBoxType(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setLarge(o);
                        break;
                    case 9:
                        o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setBackground(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setIsOfficial(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setPriority(o);
                        break;
                    case 12:
                        o = new n.User;
                        t.readMessage(o, n.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 13:
                        o = new proto.webcast.im.MagicBoxMessage.ImgText;
                        t.readMessage(o, proto.webcast.im.MagicBoxMessage.ImgText.deserializeBinaryFromReader), e.addDescriptionList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MagicBoxMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MagicBoxMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MagicBoxMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, c.Common.serializeBinaryToWriter), o = e.getDiamondCount(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getMagicBoxId(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getSendTime(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getDelayTime(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getBoxType(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getTitle()).length > 0 && t.writeString(7, o), (o = e.getLarge()) && t.writeBool(8, o), null != (o = e.getBackground()) && t.writeMessage(9, o, a.Image.serializeBinaryToWriter), (o = e.getIsOfficial()) && t.writeBool(10, o), o = e.getPriority(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), null != (o = e.getUser()) && t.writeMessage(12, o, n.User.serializeBinaryToWriter), (o = e.getDescriptionListList()).length > 0 && t.writeRepeatedMessage(13, o, proto.webcast.im.MagicBoxMessage.ImgText.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MagicBoxMessage.ImgText.prototype.toObject = function (e) {
            return proto.webcast.im.MagicBoxMessage.ImgText.toObject(e, this)
        }, proto.webcast.im.MagicBoxMessage.ImgText.toObject = function (e, t) {
            var o, i = {
                image: (o = t.getImage()) && a.Image.toObject(e, o),
                text: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.MagicBoxMessage.ImgText.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MagicBoxMessage.ImgText;
            return proto.webcast.im.MagicBoxMessage.ImgText.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MagicBoxMessage.ImgText.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Image;
                        t.readMessage(o, a.Image.deserializeBinaryFromReader), e.setImage(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setText(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MagicBoxMessage.ImgText.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MagicBoxMessage.ImgText.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getImage()) && t.writeMessage(1, o, a.Image.serializeBinaryToWriter), (o = e.getText()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.getImage = function () {
            return r.Message.getWrapperField(this, a.Image, 1)
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.setImage = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.clearImage = function () {
            return this.setImage(undefined)
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.hasImage = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.MagicBoxMessage.ImgText.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, c.Common, 1)
        }, proto.webcast.im.MagicBoxMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MagicBoxMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MagicBoxMessage.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.MagicBoxMessage.prototype.setDiamondCount = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getMagicBoxId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.MagicBoxMessage.prototype.setMagicBoxId = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getSendTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.MagicBoxMessage.prototype.setSendTime = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getDelayTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.MagicBoxMessage.prototype.setDelayTime = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getBoxType = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.im.MagicBoxMessage.prototype.setBoxType = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.MagicBoxMessage.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getLarge = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        }, proto.webcast.im.MagicBoxMessage.prototype.setLarge = function (e) {
            return r.Message.setProto3BooleanField(this, 8, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, a.Image, 9)
        }, proto.webcast.im.MagicBoxMessage.prototype.setBackground = function (e) {
            return r.Message.setWrapperField(this, 9, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        }, proto.webcast.im.MagicBoxMessage.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.im.MagicBoxMessage.prototype.getIsOfficial = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        }, proto.webcast.im.MagicBoxMessage.prototype.setIsOfficial = function (e) {
            return r.Message.setProto3BooleanField(this, 10, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getPriority = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.MagicBoxMessage.prototype.setPriority = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 12)
        }, proto.webcast.im.MagicBoxMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.MagicBoxMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 12)
        }, proto.webcast.im.MagicBoxMessage.prototype.getDescriptionListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.MagicBoxMessage.ImgText, 13)
        }, proto.webcast.im.MagicBoxMessage.prototype.setDescriptionListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 13, e)
        }, proto.webcast.im.MagicBoxMessage.prototype.addDescriptionList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 13, e, proto.webcast.im.MagicBoxMessage.ImgText, t)
        }, proto.webcast.im.MagicBoxMessage.prototype.clearDescriptionListList = function () {
            return this.setDescriptionListList([])
        }, i.object.extend(t, proto.webcast.im)
    }, 58635: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(76937);
        i.object.extend(proto, n);
        var a = o(50684);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.MatchAgainstScoreMessage", null, s), proto.webcast.im.MatchAgainstScoreMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.MatchAgainstScoreMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchAgainstScoreMessage.displayName = "proto.webcast.im.MatchAgainstScoreMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchAgainstScoreMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MatchAgainstScoreMessage.toObject(e, this)
        }, proto.webcast.im.MatchAgainstScoreMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                against: (o = t.getAgainst()) && n.Against.toObject(e, o),
                matchStatus: r.Message.getFieldWithDefault(t, 3, 0),
                displayStatus: r.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.MatchAgainstScoreMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchAgainstScoreMessage;
            return proto.webcast.im.MatchAgainstScoreMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MatchAgainstScoreMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.Against;
                        t.readMessage(o, n.Against.deserializeBinaryFromReader), e.setAgainst(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setMatchStatus(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setDisplayStatus(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchAgainstScoreMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MatchAgainstScoreMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), null != (o = e.getAgainst()) && t.writeMessage(2, o, n.Against.serializeBinaryToWriter), 0 !== (o = e.getMatchStatus()) && t.writeInt32(3, o), 0 !== (o = e.getDisplayStatus()) && t.writeInt32(4, o)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.getAgainst = function () {
            return r.Message.getWrapperField(this, n.Against, 2)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.setAgainst = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.clearAgainst = function () {
            return this.setAgainst(undefined)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.hasAgainst = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.getMatchStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.setMatchStatus = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.getDisplayStatus = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.im.MatchAgainstScoreMessage.prototype.setDisplayStatus = function (e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, i.object.extend(t, proto.webcast.im)
    }, 2013: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n);
        var a = o(34725);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.MatchCollectionMessage", null, s), proto.webcast.im.MatchCollectionMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.MatchCollectionMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchCollectionMessage.displayName = "proto.webcast.im.MatchCollectionMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchCollectionMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MatchCollectionMessage.toObject(e, this)
        }, proto.webcast.im.MatchCollectionMessage.toObject = function (e, t) {
            var o, r = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                collectionItem: (o = t.getCollectionItem()) && a.CollectionItem.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.webcast.im.MatchCollectionMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchCollectionMessage;
            return proto.webcast.im.MatchCollectionMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MatchCollectionMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.CollectionItem;
                        t.readMessage(o, a.CollectionItem.deserializeBinaryFromReader), e.setCollectionItem(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MatchCollectionMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchCollectionMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MatchCollectionMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), null != (o = e.getCollectionItem()) && t.writeMessage(2, o, a.CollectionItem.serializeBinaryToWriter)
        }, proto.webcast.im.MatchCollectionMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.MatchCollectionMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MatchCollectionMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MatchCollectionMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MatchCollectionMessage.prototype.getCollectionItem = function () {
            return r.Message.getWrapperField(this, a.CollectionItem, 2)
        }, proto.webcast.im.MatchCollectionMessage.prototype.setCollectionItem = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.MatchCollectionMessage.prototype.clearCollectionItem = function () {
            return this.setCollectionItem(undefined)
        }, proto.webcast.im.MatchCollectionMessage.prototype.hasCollectionItem = function () {
            return null != r.Message.getField(this, 2)
        }, i.object.extend(t, proto.webcast.im)
    }, 71565: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(15739);
        i.object.extend(proto, n);
        var a = o(50684);
        i.object.extend(proto, a), i.exportSymbol("proto.webcast.im.MatchHighLightPointMessage", null, s), proto.webcast.im.MatchHighLightPointMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.MatchHighLightPointMessage.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.MatchHighLightPointMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchHighLightPointMessage.displayName = "proto.webcast.im.MatchHighLightPointMessage"), proto.webcast.im.MatchHighLightPointMessage.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchHighLightPointMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MatchHighLightPointMessage.toObject(e, this)
        }, proto.webcast.im.MatchHighLightPointMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                pointsList: r.Message.toObjectList(t.getPointsList(), n.EpisodeHighLight.toObject, e)
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.MatchHighLightPointMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchHighLightPointMessage;
            return proto.webcast.im.MatchHighLightPointMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MatchHighLightPointMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new n.EpisodeHighLight;
                        t.readMessage(o, n.EpisodeHighLight.deserializeBinaryFromReader), e.addPoints(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchHighLightPointMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MatchHighLightPointMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getPointsList()).length > 0 && t.writeRepeatedMessage(2, o, n.EpisodeHighLight.serializeBinaryToWriter)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.getPointsList = function () {
            return r.Message.getRepeatedWrapperField(this, n.EpisodeHighLight, 2)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.setPointsList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.addPoints = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.data.EpisodeHighLight, t)
        }, proto.webcast.im.MatchHighLightPointMessage.prototype.clearPointsList = function () {
            return this.setPointsList([])
        }, i.object.extend(t, proto.webcast.im)
    }, 77317: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.Group", null, s), i.exportSymbol("proto.webcast.im.HotMsgType", null, s), i.exportSymbol("proto.webcast.im.MatchHotMessage", null, s), proto.webcast.im.MatchHotMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.MatchHotMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchHotMessage.displayName = "proto.webcast.im.MatchHotMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchHotMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MatchHotMessage.toObject(e, this)
        }, proto.webcast.im.MatchHotMessage.toObject = function (e, t) {
            var o, i = {
                common: (o = t.getCommon()) && n.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                content: r.Message.getFieldWithDefault(t, 3, ""),
                count: r.Message.getFieldWithDefault(t, 4, "0"),
                sequenceId: r.Message.getFieldWithDefault(t, 5, "0"),
                group: r.Message.getFieldWithDefault(t, 6, 0),
                iconindex: r.Message.getFieldWithDefault(t, 7, "0"),
                triggertimestamp: r.Message.getFieldWithDefault(t, 8, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }), proto.webcast.im.MatchHotMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchHotMessage;
            return proto.webcast.im.MatchHotMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MatchHotMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setMsgType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContent(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setCount(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setSequenceId(o);
                        break;
                    case 6:
                        o = t.readEnum();
                        e.setGroup(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setIconindex(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setTriggertimestamp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MatchHotMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchHotMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MatchHotMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, n.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), (o = e.getContent()).length > 0 && t.writeString(3, o), o = e.getCount(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getSequenceId(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), 0 !== (o = e.getGroup()) && t.writeEnum(6, o), o = e.getIconindex(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), o = e.getTriggertimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o)
        }, proto.webcast.im.MatchHotMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 1)
        }, proto.webcast.im.MatchHotMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MatchHotMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MatchHotMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MatchHotMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.MatchHotMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        }, proto.webcast.im.MatchHotMessage.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.MatchHotMessage.prototype.setContent = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.MatchHotMessage.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.MatchHotMessage.prototype.setCount = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.MatchHotMessage.prototype.getSequenceId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.MatchHotMessage.prototype.setSequenceId = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.MatchHotMessage.prototype.getGroup = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.MatchHotMessage.prototype.setGroup = function (e) {
            return r.Message.setProto3EnumField(this, 6, e)
        }, proto.webcast.im.MatchHotMessage.prototype.getIconindex = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.MatchHotMessage.prototype.setIconindex = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.MatchHotMessage.prototype.getTriggertimestamp = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        }, proto.webcast.im.MatchHotMessage.prototype.setTriggertimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        }, proto.webcast.im.HotMsgType = {
            UNKNOWN_MSG: 0,
            CONFRONT_MSG: 1,
            AGGREGATE_MSG: 2
        }, proto.webcast.im.Group = {
            UNKNOWN_GROUP: 0,
            MAIN_GROUP: 1,
            GUEST_GROUP: 2
        }, i.object.extend(t, proto.webcast.im)
    }, 89487: function (e, t, o) {
        var r = o(47865), i = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), n = o(50684);
        i.object.extend(proto, n), i.exportSymbol("proto.webcast.im.Avatar", null, s), i.exportSymbol("proto.webcast.im.AvatarColor", null, s), i.exportSymbol("proto.webcast.im.FootballTalkingModule", null, s), i.exportSymbol("proto.webcast.im.HotLiveModule", null, s), i.exportSymbol("proto.webcast.im.HotVideoCard", null, s), i.exportSymbol("proto.webcast.im.LinkType", null, s), i.exportSymbol("proto.webcast.im.MatchCard", null, s), i.exportSymbol("proto.webcast.im.MatchCard.MatchStatus", null, s), i.exportSymbol("proto.webcast.im.MatchCard.MatchType", null, s), i.exportSymbol("proto.webcast.im.MatchReservationModule", null, s), i.exportSymbol("proto.webcast.im.MatchVenueMessage", null, s), i.exportSymbol("proto.webcast.im.PopularStarModule", null, s), i.exportSymbol("proto.webcast.im.Profile", null, s), i.exportSymbol("proto.webcast.im.Profile.ProfileStatus", null, s), i.exportSymbol("proto.webcast.im.StarProfile", null, s), i.exportSymbol("proto.webcast.im.StarProfile.StarProfileStatus", null, s), i.exportSymbol("proto.webcast.im.Team", null, s), i.exportSymbol("proto.webcast.im.UpdateType", null, s), i.exportSymbol("proto.webcast.im.VenueInfo", null, s), i.exportSymbol("proto.webcast.im.VenueInfo.Stage", null, s), i.exportSymbol("proto.webcast.im.VideoCard", null, s), i.exportSymbol("proto.webcast.im.VideoCard.VideoCardType", null, s), i.exportSymbol("proto.webcast.im.VideoCard.VideoClarity", null, s), i.exportSymbol("proto.webcast.im.VideoCardModule", null, s), i.exportSymbol("proto.webcast.im.VideoSize", null, s), proto.webcast.im.VideoSize = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.VideoSize, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.VideoSize.displayName = "proto.webcast.im.VideoSize"), proto.webcast.im.Avatar = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.Avatar, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.Avatar.displayName = "proto.webcast.im.Avatar"), proto.webcast.im.Team = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.Team, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.Team.displayName = "proto.webcast.im.Team"), proto.webcast.im.VenueInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.VenueInfo, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.VenueInfo.displayName = "proto.webcast.im.VenueInfo"), proto.webcast.im.VideoCard = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.VideoCard, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.VideoCard.displayName = "proto.webcast.im.VideoCard"), proto.webcast.im.MatchCard = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.MatchCard, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchCard.displayName = "proto.webcast.im.MatchCard"), proto.webcast.im.Profile = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.Profile, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.Profile.displayName = "proto.webcast.im.Profile"), proto.webcast.im.StarProfile = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.StarProfile, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.StarProfile.displayName = "proto.webcast.im.StarProfile"), proto.webcast.im.HotVideoCard = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.HotVideoCard, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.HotVideoCard.displayName = "proto.webcast.im.HotVideoCard"), proto.webcast.im.VideoCardModule = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.VideoCardModule.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.VideoCardModule, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.VideoCardModule.displayName = "proto.webcast.im.VideoCardModule"), proto.webcast.im.MatchReservationModule = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.MatchReservationModule.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.MatchReservationModule, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchReservationModule.displayName = "proto.webcast.im.MatchReservationModule"), proto.webcast.im.FootballTalkingModule = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.FootballTalkingModule.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.FootballTalkingModule, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.FootballTalkingModule.displayName = "proto.webcast.im.FootballTalkingModule"), proto.webcast.im.PopularStarModule = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.PopularStarModule.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.PopularStarModule, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.PopularStarModule.displayName = "proto.webcast.im.PopularStarModule"), proto.webcast.im.HotLiveModule = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.HotLiveModule.repeatedFields_, null)
        }, i.inherits(proto.webcast.im.HotLiveModule, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.HotLiveModule.displayName = "proto.webcast.im.HotLiveModule"), proto.webcast.im.MatchVenueMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.webcast.im.MatchVenueMessage, r.Message), i.DEBUG && !COMPILED && (proto.webcast.im.MatchVenueMessage.displayName = "proto.webcast.im.MatchVenueMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoSize.prototype.toObject = function (e) {
            return proto.webcast.im.VideoSize.toObject(e, this)
        }, proto.webcast.im.VideoSize.toObject = function (e, t) {
            var o = {height: r.Message.getFieldWithDefault(t, 1, 0), width: r.Message.getFieldWithDefault(t, 2, 0)};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.VideoSize.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoSize;
            return proto.webcast.im.VideoSize.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.VideoSize.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt32();
                        e.setHeight(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setWidth(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.VideoSize.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoSize.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.VideoSize.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getHeight()) && t.writeInt32(1, o), 0 !== (o = e.getWidth()) && t.writeInt32(2, o)
        }, proto.webcast.im.VideoSize.prototype.getHeight = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.VideoSize.prototype.setHeight = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.VideoSize.prototype.getWidth = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.VideoSize.prototype.setWidth = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Avatar.prototype.toObject = function (e) {
            return proto.webcast.im.Avatar.toObject(e, this)
        }, proto.webcast.im.Avatar.toObject = function (e, t) {
            var o = {
                urlBig: r.Message.getFieldWithDefault(t, 1, ""),
                urlMid: r.Message.getFieldWithDefault(t, 2, ""),
                urlSmall: r.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.Avatar.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.Avatar;
            return proto.webcast.im.Avatar.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.Avatar.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setUrlBig(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setUrlMid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setUrlSmall(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.Avatar.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.Avatar.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.Avatar.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getUrlBig()).length > 0 && t.writeString(1, o), (o = e.getUrlMid()).length > 0 && t.writeString(2, o), (o = e.getUrlSmall()).length > 0 && t.writeString(3, o)
        }, proto.webcast.im.Avatar.prototype.getUrlBig = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.Avatar.prototype.setUrlBig = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.Avatar.prototype.getUrlMid = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.Avatar.prototype.setUrlMid = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.Avatar.prototype.getUrlSmall = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.Avatar.prototype.setUrlSmall = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Team.prototype.toObject = function (e) {
            return proto.webcast.im.Team.toObject(e, this)
        }, proto.webcast.im.Team.toObject = function (e, t) {
            var o = {
                teamName: r.Message.getFieldWithDefault(t, 1, ""),
                countryCode: r.Message.getFieldWithDefault(t, 2, ""),
                score: r.Message.getFieldWithDefault(t, 3, 0),
                flag: r.Message.getFieldWithDefault(t, 4, ""),
                teamId: r.Message.getFieldWithDefault(t, 5, ""),
                scoreAddition: r.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.Team.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.Team;
            return proto.webcast.im.Team.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.Team.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setTeamName(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setCountryCode(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setScore(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setFlag(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setTeamId(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setScoreAddition(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.Team.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.Team.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.Team.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getTeamName()).length > 0 && t.writeString(1, o), (o = e.getCountryCode()).length > 0 && t.writeString(2, o), 0 !== (o = e.getScore()) && t.writeInt32(3, o), (o = e.getFlag()).length > 0 && t.writeString(4, o), (o = e.getTeamId()).length > 0 && t.writeString(5, o), 0 !== (o = e.getScoreAddition()) && t.writeInt32(6, o)
        }, proto.webcast.im.Team.prototype.getTeamName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.Team.prototype.setTeamName = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.Team.prototype.getCountryCode = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.Team.prototype.setCountryCode = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.Team.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.Team.prototype.setScore = function (e) {
            return r.Message.setProto3IntField(this, 3, e)
        },proto.webcast.im.Team.prototype.getFlag = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.Team.prototype.setFlag = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.Team.prototype.getTeamId = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.Team.prototype.setTeamId = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.Team.prototype.getScoreAddition = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.webcast.im.Team.prototype.setScoreAddition = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VenueInfo.prototype.toObject = function (e) {
            return proto.webcast.im.VenueInfo.toObject(e, this)
        }, proto.webcast.im.VenueInfo.toObject = function (e, t) {
            var o = {
                stage: r.Message.getFieldWithDefault(t, 1, 0),
                targetTime: r.Message.getFieldWithDefault(t, 2, "0"),
                currentTime: r.Message.getFieldWithDefault(t, 3, "0"),
                roomId: r.Message.getFieldWithDefault(t, 4, ""),
                pollingInterval: r.Message.getFieldWithDefault(t, 5, "0"),
                updateTime: r.Message.getFieldWithDefault(t, 6, "0"),
                distributeTime: r.Message.getFieldWithDefault(t, 7, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.VenueInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VenueInfo;
            return proto.webcast.im.VenueInfo.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.VenueInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setStage(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setTargetTime(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setCurrentTime(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setRoomId(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setPollingInterval(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setUpdateTime(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setDistributeTime(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.VenueInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VenueInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.VenueInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getStage()) && t.writeEnum(1, o), o = e.getTargetTime(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getCurrentTime(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getRoomId()).length > 0 && t.writeString(4, o), o = e.getPollingInterval(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), o = e.getUpdateTime(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), o = e.getDistributeTime(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o)
        },proto.webcast.im.VenueInfo.Stage = {
            STAGEUNKNOWN: 0,
            STAGEPREHEATING: 1,
            STAGEOUTBREAK: 2,
            STAGEWASTHEAT: 3
        },proto.webcast.im.VenueInfo.prototype.getStage = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.VenueInfo.prototype.setStage = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.VenueInfo.prototype.getTargetTime = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.VenueInfo.prototype.setTargetTime = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.VenueInfo.prototype.getCurrentTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.im.VenueInfo.prototype.setCurrentTime = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        },proto.webcast.im.VenueInfo.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.VenueInfo.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.VenueInfo.prototype.getPollingInterval = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.im.VenueInfo.prototype.setPollingInterval = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        },proto.webcast.im.VenueInfo.prototype.getUpdateTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.VenueInfo.prototype.setUpdateTime = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.VenueInfo.prototype.getDistributeTime = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.VenueInfo.prototype.setDistributeTime = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoCard.prototype.toObject = function (e) {
            return proto.webcast.im.VideoCard.toObject(e, this)
        }, proto.webcast.im.VideoCard.toObject = function (e, t) {
            var o, i = {
                cardType: r.Message.getFieldWithDefault(t, 1, 0),
                coverUrl: r.Message.getFieldWithDefault(t, 2, ""),
                schema: r.Message.getFieldWithDefault(t, 3, ""),
                title: r.Message.getFieldWithDefault(t, 4, ""),
                subTitle: r.Message.getFieldWithDefault(t, 5, ""),
                uid: r.Message.getFieldWithDefault(t, 6, ""),
                rid: r.Message.getFieldWithDefault(t, 7, ""),
                epid: r.Message.getFieldWithDefault(t, 8, ""),
                tag: r.Message.getFieldWithDefault(t, 9, ""),
                creatorId: r.Message.getFieldWithDefault(t, 10, ""),
                size: (o = t.getSize()) && proto.webcast.im.VideoSize.toObject(e, o),
                backgroundUrl: r.Message.getFieldWithDefault(t, 12, ""),
                cardId: r.Message.getFieldWithDefault(t, 13, ""),
                videoResource: r.Message.getFieldWithDefault(t, 14, ""),
                linkType: r.Message.getFieldWithDefault(t, 15, 0)
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.VideoCard.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoCard;
            return proto.webcast.im.VideoCard.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.VideoCard.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setCardType(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setCoverUrl(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSchema(o);
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
                        e.setUid(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setRid(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setEpid(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setTag(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setCreatorId(o);
                        break;
                    case 11:
                        o = new proto.webcast.im.VideoSize;
                        t.readMessage(o, proto.webcast.im.VideoSize.deserializeBinaryFromReader), e.setSize(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setBackgroundUrl(o);
                        break;
                    case 13:
                        o = t.readString();
                        e.setCardId(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setVideoResource(o);
                        break;
                    case 15:
                        o = t.readEnum();
                        e.setLinkType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.VideoCard.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoCard.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.VideoCard.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getCardType()) && t.writeEnum(1, o), (o = e.getCoverUrl()).length > 0 && t.writeString(2, o), (o = e.getSchema()).length > 0 && t.writeString(3, o), (o = e.getTitle()).length > 0 && t.writeString(4, o), (o = e.getSubTitle()).length > 0 && t.writeString(5, o), (o = e.getUid()).length > 0 && t.writeString(6, o), (o = e.getRid()).length > 0 && t.writeString(7, o), (o = e.getEpid()).length > 0 && t.writeString(8, o), (o = e.getTag()).length > 0 && t.writeString(9, o), (o = e.getCreatorId()).length > 0 && t.writeString(10, o), null != (o = e.getSize()) && t.writeMessage(11, o, proto.webcast.im.VideoSize.serializeBinaryToWriter), (o = e.getBackgroundUrl()).length > 0 && t.writeString(12, o), (o = e.getCardId()).length > 0 && t.writeString(13, o), (o = e.getVideoResource()).length > 0 && t.writeString(14, o), 0 !== (o = e.getLinkType()) && t.writeEnum(15, o)
        },proto.webcast.im.VideoCard.VideoCardType = {
            VIDEOCARDTYPEUNKNOWN: 0,
            VIDEOCARDTYPELIVE: 1,
            VIDEOCARDTYPEREPLAY: 2,
            VIDEOCARDTYPEGENERALLIVE: 3,
            VIDEOCARDTYPESHOW: 4,
            VIDEOCARDTYPEACTIVITY: 5
        },proto.webcast.im.VideoCard.VideoClarity = {
            VIDEOCLARITYUNKNOWN: 0,
            VIDEOCLARITY720: 1,
            VIDEOCLARITY480: 2
        },proto.webcast.im.VideoCard.prototype.getCardType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.VideoCard.prototype.setCardType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.VideoCard.prototype.getCoverUrl = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.VideoCard.prototype.setCoverUrl = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.VideoCard.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.VideoCard.prototype.setSchema = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.VideoCard.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.VideoCard.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.VideoCard.prototype.getSubTitle = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.VideoCard.prototype.setSubTitle = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.VideoCard.prototype.getUid = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.VideoCard.prototype.setUid = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.VideoCard.prototype.getRid = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.VideoCard.prototype.setRid = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.VideoCard.prototype.getEpid = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.im.VideoCard.prototype.setEpid = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        },proto.webcast.im.VideoCard.prototype.getTag = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.im.VideoCard.prototype.setTag = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        },proto.webcast.im.VideoCard.prototype.getCreatorId = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.im.VideoCard.prototype.setCreatorId = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        },proto.webcast.im.VideoCard.prototype.getSize = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.VideoSize, 11)
        },proto.webcast.im.VideoCard.prototype.setSize = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        },proto.webcast.im.VideoCard.prototype.clearSize = function () {
            return this.setSize(undefined)
        },proto.webcast.im.VideoCard.prototype.hasSize = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.im.VideoCard.prototype.getBackgroundUrl = function () {
            return r.Message.getFieldWithDefault(this, 12, "")
        },proto.webcast.im.VideoCard.prototype.setBackgroundUrl = function (e) {
            return r.Message.setProto3StringField(this, 12, e)
        },proto.webcast.im.VideoCard.prototype.getCardId = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        },proto.webcast.im.VideoCard.prototype.setCardId = function (e) {
            return r.Message.setProto3StringField(this, 13, e)
        },proto.webcast.im.VideoCard.prototype.getVideoResource = function () {
            return r.Message.getFieldWithDefault(this, 14, "")
        },proto.webcast.im.VideoCard.prototype.setVideoResource = function (e) {
            return r.Message.setProto3StringField(this, 14, e)
        },proto.webcast.im.VideoCard.prototype.getLinkType = function () {
            return r.Message.getFieldWithDefault(this, 15, 0)
        },proto.webcast.im.VideoCard.prototype.setLinkType = function (e) {
            return r.Message.setProto3EnumField(this, 15, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchCard.prototype.toObject = function (e) {
            return proto.webcast.im.MatchCard.toObject(e, this)
        }, proto.webcast.im.MatchCard.toObject = function (e, t) {
            var o, i = {
                matchType: r.Message.getFieldWithDefault(t, 1, 0),
                status: r.Message.getFieldWithDefault(t, 2, 0),
                title: r.Message.getFieldWithDefault(t, 3, ""),
                description: r.Message.getFieldWithDefault(t, 4, ""),
                startTime: r.Message.getFieldWithDefault(t, 5, ""),
                uid: r.Message.getFieldWithDefault(t, 6, ""),
                teamLeft: (o = t.getTeamLeft()) && proto.webcast.im.Team.toObject(e, o),
                teamRight: (o = t.getTeamRight()) && proto.webcast.im.Team.toObject(e, o),
                reserved: r.Message.getBooleanFieldWithDefault(t, 9, !1),
                schema: r.Message.getFieldWithDefault(t, 10, ""),
                epid: r.Message.getFieldWithDefault(t, 11, ""),
                reservationId: r.Message.getFieldWithDefault(t, 12, ""),
                cardId: r.Message.getFieldWithDefault(t, 13, ""),
                roomId: r.Message.getFieldWithDefault(t, 14, ""),
                matchId: r.Message.getFieldWithDefault(t, 15, "")
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.MatchCard.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchCard;
            return proto.webcast.im.MatchCard.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.MatchCard.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setMatchType(o);
                        break;
                    case 2:
                        o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTitle(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setDescription(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setStartTime(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setUid(o);
                        break;
                    case 7:
                        o = new proto.webcast.im.Team;
                        t.readMessage(o, proto.webcast.im.Team.deserializeBinaryFromReader), e.setTeamLeft(o);
                        break;
                    case 8:
                        o = new proto.webcast.im.Team;
                        t.readMessage(o, proto.webcast.im.Team.deserializeBinaryFromReader), e.setTeamRight(o);
                        break;
                    case 9:
                        o = t.readBool();
                        e.setReserved(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setSchema(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setEpid(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setReservationId(o);
                        break;
                    case 13:
                        o = t.readString();
                        e.setCardId(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setRoomId(o);
                        break;
                    case 15:
                        o = t.readString();
                        e.setMatchId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.MatchCard.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchCard.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.MatchCard.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getMatchType()) && t.writeEnum(1, o), 0 !== (o = e.getStatus()) && t.writeEnum(2, o), (o = e.getTitle()).length > 0 && t.writeString(3, o), (o = e.getDescription()).length > 0 && t.writeString(4, o), (o = e.getStartTime()).length > 0 && t.writeString(5, o), (o = e.getUid()).length > 0 && t.writeString(6, o), null != (o = e.getTeamLeft()) && t.writeMessage(7, o, proto.webcast.im.Team.serializeBinaryToWriter), null != (o = e.getTeamRight()) && t.writeMessage(8, o, proto.webcast.im.Team.serializeBinaryToWriter), (o = e.getReserved()) && t.writeBool(9, o), (o = e.getSchema()).length > 0 && t.writeString(10, o), (o = e.getEpid()).length > 0 && t.writeString(11, o), (o = e.getReservationId()).length > 0 && t.writeString(12, o), (o = e.getCardId()).length > 0 && t.writeString(13, o), (o = e.getRoomId()).length > 0 && t.writeString(14, o), (o = e.getMatchId()).length > 0 && t.writeString(15, o)
        },proto.webcast.im.MatchCard.MatchType = {
            MATCHTYPEUNKNOWN: 0,
            MATCHTYPEPROGRAM: 1,
            MATCHTYPEMATCH: 2
        },proto.webcast.im.MatchCard.MatchStatus = {
            MATCHSTATUSUNKNOWN: 0,
            MATCHSTATUSRESERVATION: 1,
            MATCHSTATUSLIVING: 2,
            MATCHSTATUSENDING: 3
        },proto.webcast.im.MatchCard.prototype.getMatchType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.MatchCard.prototype.setMatchType = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.MatchCard.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.im.MatchCard.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        },proto.webcast.im.MatchCard.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.MatchCard.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.MatchCard.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.MatchCard.prototype.setDescription = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.MatchCard.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.MatchCard.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.MatchCard.prototype.getUid = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.MatchCard.prototype.setUid = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.MatchCard.prototype.getTeamLeft = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.Team, 7)
        },proto.webcast.im.MatchCard.prototype.setTeamLeft = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        },proto.webcast.im.MatchCard.prototype.clearTeamLeft = function () {
            return this.setTeamLeft(undefined)
        },proto.webcast.im.MatchCard.prototype.hasTeamLeft = function () {
            return null != r.Message.getField(this, 7)
        },proto.webcast.im.MatchCard.prototype.getTeamRight = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.Team, 8)
        },proto.webcast.im.MatchCard.prototype.setTeamRight = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        },proto.webcast.im.MatchCard.prototype.clearTeamRight = function () {
            return this.setTeamRight(undefined)
        },proto.webcast.im.MatchCard.prototype.hasTeamRight = function () {
            return null != r.Message.getField(this, 8)
        },proto.webcast.im.MatchCard.prototype.getReserved = function () {
            return r.Message.getBooleanFieldWithDefault(this, 9, !1)
        },proto.webcast.im.MatchCard.prototype.setReserved = function (e) {
            return r.Message.setProto3BooleanField(this, 9, e)
        },proto.webcast.im.MatchCard.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.im.MatchCard.prototype.setSchema = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        },proto.webcast.im.MatchCard.prototype.getEpid = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        },proto.webcast.im.MatchCard.prototype.setEpid = function (e) {
            return r.Message.setProto3StringField(this, 11, e)
        },proto.webcast.im.MatchCard.prototype.getReservationId = function () {
            return r.Message.getFieldWithDefault(this, 12, "")
        },proto.webcast.im.MatchCard.prototype.setReservationId = function (e) {
            return r.Message.setProto3StringField(this, 12, e)
        },proto.webcast.im.MatchCard.prototype.getCardId = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        },proto.webcast.im.MatchCard.prototype.setCardId = function (e) {
            return r.Message.setProto3StringField(this, 13, e)
        },proto.webcast.im.MatchCard.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 14, "")
        },proto.webcast.im.MatchCard.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringField(this, 14, e)
        },proto.webcast.im.MatchCard.prototype.getMatchId = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        },proto.webcast.im.MatchCard.prototype.setMatchId = function (e) {
            return r.Message.setProto3StringField(this, 15, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Profile.prototype.toObject = function (e) {
            return proto.webcast.im.Profile.toObject(e, this)
        }, proto.webcast.im.Profile.toObject = function (e, t) {
            var o, i = {
                status: r.Message.getFieldWithDefault(t, 1, 0),
                avatarUrl: (o = t.getAvatarUrl()) && proto.webcast.im.Avatar.toObject(e, o),
                nickName: r.Message.getFieldWithDefault(t, 3, ""),
                description: r.Message.getFieldWithDefault(t, 4, ""),
                followed: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                startTime: r.Message.getFieldWithDefault(t, 6, "0"),
                roomId: r.Message.getFieldWithDefault(t, 7, ""),
                uid: r.Message.getFieldWithDefault(t, 8, ""),
                reservationId: r.Message.getFieldWithDefault(t, 9, ""),
                cardId: r.Message.getFieldWithDefault(t, 10, ""),
                followCount: r.Message.getFieldWithDefault(t, 12, "0"),
                color: r.Message.getFieldWithDefault(t, 13, 0),
                srcId: r.Message.getFieldWithDefault(t, 14, "0")
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.Profile.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.Profile;
            return proto.webcast.im.Profile.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.Profile.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.Avatar;
                        t.readMessage(o, proto.webcast.im.Avatar.deserializeBinaryFromReader), e.setAvatarUrl(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setNickName(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setDescription(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setFollowed(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setRoomId(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setUid(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setReservationId(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setCardId(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setFollowCount(o);
                        break;
                    case 13:
                        o = t.readEnum();
                        e.setColor(o);
                        break;
                    case 14:
                        o = t.readInt64String();
                        e.setSrcId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.Profile.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.Profile.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.Profile.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getStatus()) && t.writeEnum(1, o), null != (o = e.getAvatarUrl()) && t.writeMessage(2, o, proto.webcast.im.Avatar.serializeBinaryToWriter), (o = e.getNickName()).length > 0 && t.writeString(3, o), (o = e.getDescription()).length > 0 && t.writeString(4, o), (o = e.getFollowed()) && t.writeBool(5, o), o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(6, o), (o = e.getRoomId()).length > 0 && t.writeString(7, o), (o = e.getUid()).length > 0 && t.writeString(8, o), (o = e.getReservationId()).length > 0 && t.writeString(9, o), (o = e.getCardId()).length > 0 && t.writeString(10, o), o = e.getFollowCount(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), 0 !== (o = e.getColor()) && t.writeEnum(13, o), o = e.getSrcId(), 0 !== parseInt(o, 10) && t.writeInt64String(14, o)
        },proto.webcast.im.Profile.ProfileStatus = {
            PROFILESTATUSUNKNOWN: 0,
            PROFILESTATUSFOLLOWING: 1,
            PROFILESTATUSRESERVATION: 2,
            PROFILESTATUSLIVING: 3
        },proto.webcast.im.Profile.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.Profile.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.Profile.prototype.getAvatarUrl = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.Avatar, 2)
        },proto.webcast.im.Profile.prototype.setAvatarUrl = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.Profile.prototype.clearAvatarUrl = function () {
            return this.setAvatarUrl(undefined)
        },proto.webcast.im.Profile.prototype.hasAvatarUrl = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.Profile.prototype.getNickName = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.Profile.prototype.setNickName = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.Profile.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.Profile.prototype.setDescription = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.Profile.prototype.getFollowed = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        },proto.webcast.im.Profile.prototype.setFollowed = function (e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        },proto.webcast.im.Profile.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.im.Profile.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 6, e)
        },proto.webcast.im.Profile.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.Profile.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.Profile.prototype.getUid = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.im.Profile.prototype.setUid = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        },proto.webcast.im.Profile.prototype.getReservationId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.im.Profile.prototype.setReservationId = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        },proto.webcast.im.Profile.prototype.getCardId = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.im.Profile.prototype.setCardId = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        },proto.webcast.im.Profile.prototype.getFollowCount = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        },proto.webcast.im.Profile.prototype.setFollowCount = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        },proto.webcast.im.Profile.prototype.getColor = function () {
            return r.Message.getFieldWithDefault(this, 13, 0)
        },proto.webcast.im.Profile.prototype.setColor = function (e) {
            return r.Message.setProto3EnumField(this, 13, e)
        },proto.webcast.im.Profile.prototype.getSrcId = function () {
            return r.Message.getFieldWithDefault(this, 14, "0")
        },proto.webcast.im.Profile.prototype.setSrcId = function (e) {
            return r.Message.setProto3StringIntField(this, 14, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.StarProfile.prototype.toObject = function (e) {
            return proto.webcast.im.StarProfile.toObject(e, this)
        }, proto.webcast.im.StarProfile.toObject = function (e, t) {
            var o, i = {
                status: r.Message.getFieldWithDefault(t, 1, 0),
                avatarUrl: (o = t.getAvatarUrl()) && proto.webcast.im.Avatar.toObject(e, o),
                nickName: r.Message.getFieldWithDefault(t, 3, ""),
                description: r.Message.getFieldWithDefault(t, 4, ""),
                followed: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                roomId: r.Message.getFieldWithDefault(t, 6, ""),
                uid: r.Message.getFieldWithDefault(t, 7, ""),
                startTime: r.Message.getFieldWithDefault(t, 8, "0"),
                reservationId: r.Message.getFieldWithDefault(t, 9, ""),
                cardId: r.Message.getFieldWithDefault(t, 10, ""),
                followCount: r.Message.getFieldWithDefault(t, 11, "0"),
                color: r.Message.getFieldWithDefault(t, 12, 0)
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.StarProfile.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.StarProfile;
            return proto.webcast.im.StarProfile.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.StarProfile.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.Avatar;
                        t.readMessage(o, proto.webcast.im.Avatar.deserializeBinaryFromReader), e.setAvatarUrl(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setNickName(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setDescription(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setFollowed(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setRoomId(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setUid(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setStartTime(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setReservationId(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setCardId(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setFollowCount(o);
                        break;
                    case 12:
                        o = t.readEnum();
                        e.setColor(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.StarProfile.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.StarProfile.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.StarProfile.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getStatus()) && t.writeEnum(1, o), null != (o = e.getAvatarUrl()) && t.writeMessage(2, o, proto.webcast.im.Avatar.serializeBinaryToWriter), (o = e.getNickName()).length > 0 && t.writeString(3, o), (o = e.getDescription()).length > 0 && t.writeString(4, o), (o = e.getFollowed()) && t.writeBool(5, o), (o = e.getRoomId()).length > 0 && t.writeString(6, o), (o = e.getUid()).length > 0 && t.writeString(7, o), o = e.getStartTime(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), (o = e.getReservationId()).length > 0 && t.writeString(9, o), (o = e.getCardId()).length > 0 && t.writeString(10, o), o = e.getFollowCount(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), 0 !== (o = e.getColor()) && t.writeEnum(12, o)
        },proto.webcast.im.StarProfile.StarProfileStatus = {
            STARPROFILESTATUSUNKNOWN: 0,
            STARPROFILESTATUSFOLLOWING: 1,
            STARPROFILESTATUSLIVING: 2,
            STARPROFILESTATUSRESERVATION: 3
        },proto.webcast.im.StarProfile.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.im.StarProfile.prototype.setStatus = function (e) {
            return r.Message.setProto3EnumField(this, 1, e)
        },proto.webcast.im.StarProfile.prototype.getAvatarUrl = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.Avatar, 2)
        },proto.webcast.im.StarProfile.prototype.setAvatarUrl = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.StarProfile.prototype.clearAvatarUrl = function () {
            return this.setAvatarUrl(undefined)
        },proto.webcast.im.StarProfile.prototype.hasAvatarUrl = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.StarProfile.prototype.getNickName = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.StarProfile.prototype.setNickName = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.StarProfile.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.StarProfile.prototype.setDescription = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.StarProfile.prototype.getFollowed = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        },proto.webcast.im.StarProfile.prototype.setFollowed = function (e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        },proto.webcast.im.StarProfile.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.StarProfile.prototype.setRoomId = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.StarProfile.prototype.getUid = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.im.StarProfile.prototype.setUid = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        },proto.webcast.im.StarProfile.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.im.StarProfile.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        },proto.webcast.im.StarProfile.prototype.getReservationId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.im.StarProfile.prototype.setReservationId = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        },proto.webcast.im.StarProfile.prototype.getCardId = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.im.StarProfile.prototype.setCardId = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        },proto.webcast.im.StarProfile.prototype.getFollowCount = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        },proto.webcast.im.StarProfile.prototype.setFollowCount = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        },proto.webcast.im.StarProfile.prototype.getColor = function () {
            return r.Message.getFieldWithDefault(this, 12, 0)
        },proto.webcast.im.StarProfile.prototype.setColor = function (e) {
            return r.Message.setProto3EnumField(this, 12, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.HotVideoCard.prototype.toObject = function (e) {
            return proto.webcast.im.HotVideoCard.toObject(e, this)
        }, proto.webcast.im.HotVideoCard.toObject = function (e, t) {
            var o = {
                title: r.Message.getFieldWithDefault(t, 1, ""),
                coverUrl: r.Message.getFieldWithDefault(t, 2, ""),
                schema: r.Message.getFieldWithDefault(t, 3, ""),
                cardId: r.Message.getFieldWithDefault(t, 4, ""),
                subTitle: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.webcast.im.HotVideoCard.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.HotVideoCard;
            return proto.webcast.im.HotVideoCard.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.HotVideoCard.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setTitle(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setCoverUrl(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSchema(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setCardId(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setSubTitle(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.HotVideoCard.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.HotVideoCard.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.HotVideoCard.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getTitle()).length > 0 && t.writeString(1, o), (o = e.getCoverUrl()).length > 0 && t.writeString(2, o), (o = e.getSchema()).length > 0 && t.writeString(3, o), (o = e.getCardId()).length > 0 && t.writeString(4, o), (o = e.getSubTitle()).length > 0 && t.writeString(5, o)
        },proto.webcast.im.HotVideoCard.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.im.HotVideoCard.prototype.setTitle = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        },proto.webcast.im.HotVideoCard.prototype.getCoverUrl = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.im.HotVideoCard.prototype.setCoverUrl = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        },proto.webcast.im.HotVideoCard.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.HotVideoCard.prototype.setSchema = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.HotVideoCard.prototype.getCardId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.im.HotVideoCard.prototype.setCardId = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        },proto.webcast.im.HotVideoCard.prototype.getSubTitle = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.HotVideoCard.prototype.setSubTitle = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.VideoCardModule.repeatedFields_ = [4, 5],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.VideoCardModule.prototype.toObject = function (e) {
            return proto.webcast.im.VideoCardModule.toObject(e, this)
        }, proto.webcast.im.VideoCardModule.toObject = function (e, t) {
            var o, i = {
                moduleId: r.Message.getFieldWithDefault(t, 1, "0"),
                moduleVersion: r.Message.getFieldWithDefault(t, 2, "0"),
                updateType: r.Message.getFieldWithDefault(t, 3, 0),
                updateListList: r.Message.toObjectList(t.getUpdateListList(), proto.webcast.im.VideoCard.toObject, e),
                deleteListList: null == (o = r.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.VideoCardModule.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.VideoCardModule;
            return proto.webcast.im.VideoCardModule.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.VideoCardModule.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setModuleId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setModuleVersion(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setUpdateType(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.VideoCard;
                        t.readMessage(o, proto.webcast.im.VideoCard.deserializeBinaryFromReader), e.addUpdateList(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.addDeleteList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.VideoCardModule.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.VideoCardModule.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.VideoCardModule.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getModuleId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getModuleVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getUpdateType()) && t.writeEnum(3, o), (o = e.getUpdateListList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.VideoCard.serializeBinaryToWriter), (o = e.getDeleteListList()).length > 0 && t.writeRepeatedString(5, o)
        },proto.webcast.im.VideoCardModule.prototype.getModuleId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.VideoCardModule.prototype.setModuleId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.VideoCardModule.prototype.getModuleVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.VideoCardModule.prototype.setModuleVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.VideoCardModule.prototype.getUpdateType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.VideoCardModule.prototype.setUpdateType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.VideoCardModule.prototype.getUpdateListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.VideoCard, 4)
        },proto.webcast.im.VideoCardModule.prototype.setUpdateListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.VideoCardModule.prototype.addUpdateList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.VideoCard, t)
        },proto.webcast.im.VideoCardModule.prototype.clearUpdateListList = function () {
            return this.setUpdateListList([])
        },proto.webcast.im.VideoCardModule.prototype.getDeleteListList = function () {
            return r.Message.getRepeatedField(this, 5)
        },proto.webcast.im.VideoCardModule.prototype.setDeleteListList = function (e) {
            return r.Message.setField(this, 5, e || [])
        },proto.webcast.im.VideoCardModule.prototype.addDeleteList = function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t)
        },proto.webcast.im.VideoCardModule.prototype.clearDeleteListList = function () {
            return this.setDeleteListList([])
        },proto.webcast.im.MatchReservationModule.repeatedFields_ = [4, 5],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchReservationModule.prototype.toObject = function (e) {
            return proto.webcast.im.MatchReservationModule.toObject(e, this)
        }, proto.webcast.im.MatchReservationModule.toObject = function (e, t) {
            var o, i = {
                moduleId: r.Message.getFieldWithDefault(t, 1, "0"),
                moduleVersion: r.Message.getFieldWithDefault(t, 2, "0"),
                updateType: r.Message.getFieldWithDefault(t, 3, 0),
                updateListList: r.Message.toObjectList(t.getUpdateListList(), proto.webcast.im.MatchCard.toObject, e),
                deleteListList: null == (o = r.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.MatchReservationModule.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchReservationModule;
            return proto.webcast.im.MatchReservationModule.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.MatchReservationModule.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setModuleId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setModuleVersion(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setUpdateType(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.MatchCard;
                        t.readMessage(o, proto.webcast.im.MatchCard.deserializeBinaryFromReader), e.addUpdateList(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.addDeleteList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.MatchReservationModule.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchReservationModule.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.MatchReservationModule.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getModuleId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getModuleVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getUpdateType()) && t.writeEnum(3, o), (o = e.getUpdateListList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.MatchCard.serializeBinaryToWriter), (o = e.getDeleteListList()).length > 0 && t.writeRepeatedString(5, o)
        },proto.webcast.im.MatchReservationModule.prototype.getModuleId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.MatchReservationModule.prototype.setModuleId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.MatchReservationModule.prototype.getModuleVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.MatchReservationModule.prototype.setModuleVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.MatchReservationModule.prototype.getUpdateType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.MatchReservationModule.prototype.setUpdateType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.MatchReservationModule.prototype.getUpdateListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.MatchCard, 4)
        },proto.webcast.im.MatchReservationModule.prototype.setUpdateListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.MatchReservationModule.prototype.addUpdateList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.MatchCard, t)
        },proto.webcast.im.MatchReservationModule.prototype.clearUpdateListList = function () {
            return this.setUpdateListList([])
        },proto.webcast.im.MatchReservationModule.prototype.getDeleteListList = function () {
            return r.Message.getRepeatedField(this, 5)
        },proto.webcast.im.MatchReservationModule.prototype.setDeleteListList = function (e) {
            return r.Message.setField(this, 5, e || [])
        },proto.webcast.im.MatchReservationModule.prototype.addDeleteList = function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t)
        },proto.webcast.im.MatchReservationModule.prototype.clearDeleteListList = function () {
            return this.setDeleteListList([])
        },proto.webcast.im.FootballTalkingModule.repeatedFields_ = [4, 5],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FootballTalkingModule.prototype.toObject = function (e) {
            return proto.webcast.im.FootballTalkingModule.toObject(e, this)
        }, proto.webcast.im.FootballTalkingModule.toObject = function (e, t) {
            var o, i = {
                moduleId: r.Message.getFieldWithDefault(t, 1, "0"),
                moduleVersion: r.Message.getFieldWithDefault(t, 2, "0"),
                updateType: r.Message.getFieldWithDefault(t, 3, 0),
                updateListList: r.Message.toObjectList(t.getUpdateListList(), proto.webcast.im.Profile.toObject, e),
                deleteListList: null == (o = r.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.FootballTalkingModule.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.FootballTalkingModule;
            return proto.webcast.im.FootballTalkingModule.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.FootballTalkingModule.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setModuleId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setModuleVersion(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setUpdateType(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.Profile;
                        t.readMessage(o, proto.webcast.im.Profile.deserializeBinaryFromReader), e.addUpdateList(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.addDeleteList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.FootballTalkingModule.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.FootballTalkingModule.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.FootballTalkingModule.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getModuleId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getModuleVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getUpdateType()) && t.writeEnum(3, o), (o = e.getUpdateListList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.Profile.serializeBinaryToWriter), (o = e.getDeleteListList()).length > 0 && t.writeRepeatedString(5, o)
        },proto.webcast.im.FootballTalkingModule.prototype.getModuleId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.FootballTalkingModule.prototype.setModuleId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.FootballTalkingModule.prototype.getModuleVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.FootballTalkingModule.prototype.setModuleVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.FootballTalkingModule.prototype.getUpdateType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.FootballTalkingModule.prototype.setUpdateType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.FootballTalkingModule.prototype.getUpdateListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.Profile, 4)
        },proto.webcast.im.FootballTalkingModule.prototype.setUpdateListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.FootballTalkingModule.prototype.addUpdateList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.Profile, t)
        },proto.webcast.im.FootballTalkingModule.prototype.clearUpdateListList = function () {
            return this.setUpdateListList([])
        },proto.webcast.im.FootballTalkingModule.prototype.getDeleteListList = function () {
            return r.Message.getRepeatedField(this, 5)
        },proto.webcast.im.FootballTalkingModule.prototype.setDeleteListList = function (e) {
            return r.Message.setField(this, 5, e || [])
        },proto.webcast.im.FootballTalkingModule.prototype.addDeleteList = function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t)
        },proto.webcast.im.FootballTalkingModule.prototype.clearDeleteListList = function () {
            return this.setDeleteListList([])
        },proto.webcast.im.PopularStarModule.repeatedFields_ = [4, 5],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.PopularStarModule.prototype.toObject = function (e) {
            return proto.webcast.im.PopularStarModule.toObject(e, this)
        }, proto.webcast.im.PopularStarModule.toObject = function (e, t) {
            var o, i = {
                moduleId: r.Message.getFieldWithDefault(t, 1, "0"),
                moduleVersion: r.Message.getFieldWithDefault(t, 2, "0"),
                updateType: r.Message.getFieldWithDefault(t, 3, 0),
                updateListList: r.Message.toObjectList(t.getUpdateListList(), proto.webcast.im.StarProfile.toObject, e),
                deleteListList: null == (o = r.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.PopularStarModule.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.PopularStarModule;
            return proto.webcast.im.PopularStarModule.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.PopularStarModule.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setModuleId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setModuleVersion(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setUpdateType(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.StarProfile;
                        t.readMessage(o, proto.webcast.im.StarProfile.deserializeBinaryFromReader), e.addUpdateList(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.addDeleteList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.PopularStarModule.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.PopularStarModule.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.PopularStarModule.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getModuleId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getModuleVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getUpdateType()) && t.writeEnum(3, o), (o = e.getUpdateListList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.StarProfile.serializeBinaryToWriter), (o = e.getDeleteListList()).length > 0 && t.writeRepeatedString(5, o)
        },proto.webcast.im.PopularStarModule.prototype.getModuleId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.PopularStarModule.prototype.setModuleId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.PopularStarModule.prototype.getModuleVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.PopularStarModule.prototype.setModuleVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.PopularStarModule.prototype.getUpdateType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.PopularStarModule.prototype.setUpdateType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.PopularStarModule.prototype.getUpdateListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.StarProfile, 4)
        },proto.webcast.im.PopularStarModule.prototype.setUpdateListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.PopularStarModule.prototype.addUpdateList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.StarProfile, t)
        },proto.webcast.im.PopularStarModule.prototype.clearUpdateListList = function () {
            return this.setUpdateListList([])
        },proto.webcast.im.PopularStarModule.prototype.getDeleteListList = function () {
            return r.Message.getRepeatedField(this, 5)
        },proto.webcast.im.PopularStarModule.prototype.setDeleteListList = function (e) {
            return r.Message.setField(this, 5, e || [])
        },proto.webcast.im.PopularStarModule.prototype.addDeleteList = function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t)
        },proto.webcast.im.PopularStarModule.prototype.clearDeleteListList = function () {
            return this.setDeleteListList([])
        },proto.webcast.im.HotLiveModule.repeatedFields_ = [4, 5],r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.HotLiveModule.prototype.toObject = function (e) {
            return proto.webcast.im.HotLiveModule.toObject(e, this)
        }, proto.webcast.im.HotLiveModule.toObject = function (e, t) {
            var o, i = {
                moduleId: r.Message.getFieldWithDefault(t, 1, "0"),
                moduleVersion: r.Message.getFieldWithDefault(t, 2, "0"),
                updateType: r.Message.getFieldWithDefault(t, 3, 0),
                updateListList: r.Message.toObjectList(t.getUpdateListList(), proto.webcast.im.HotVideoCard.toObject, e),
                deleteListList: null == (o = r.Message.getRepeatedField(t, 5)) ? undefined : o
            };
            return e && (i.$jspbMessageInstance = t), i
        }),proto.webcast.im.HotLiveModule.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.HotLiveModule;
            return proto.webcast.im.HotLiveModule.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.HotLiveModule.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setModuleId(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setModuleVersion(o);
                        break;
                    case 3:
                        o = t.readEnum();
                        e.setUpdateType(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.HotVideoCard;
                        t.readMessage(o, proto.webcast.im.HotVideoCard.deserializeBinaryFromReader), e.addUpdateList(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.addDeleteList(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.HotLiveModule.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.HotLiveModule.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.HotLiveModule.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getModuleId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getModuleVersion(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), 0 !== (o = e.getUpdateType()) && t.writeEnum(3, o), (o = e.getUpdateListList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.HotVideoCard.serializeBinaryToWriter), (o = e.getDeleteListList()).length > 0 && t.writeRepeatedString(5, o)
        },proto.webcast.im.HotLiveModule.prototype.getModuleId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.im.HotLiveModule.prototype.setModuleId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        },proto.webcast.im.HotLiveModule.prototype.getModuleVersion = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.im.HotLiveModule.prototype.setModuleVersion = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        },proto.webcast.im.HotLiveModule.prototype.getUpdateType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.im.HotLiveModule.prototype.setUpdateType = function (e) {
            return r.Message.setProto3EnumField(this, 3, e)
        },proto.webcast.im.HotLiveModule.prototype.getUpdateListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.HotVideoCard, 4)
        },proto.webcast.im.HotLiveModule.prototype.setUpdateListList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        },proto.webcast.im.HotLiveModule.prototype.addUpdateList = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.HotVideoCard, t)
        },proto.webcast.im.HotLiveModule.prototype.clearUpdateListList = function () {
            return this.setUpdateListList([])
        },proto.webcast.im.HotLiveModule.prototype.getDeleteListList = function () {
            return r.Message.getRepeatedField(this, 5)
        },proto.webcast.im.HotLiveModule.prototype.setDeleteListList = function (e) {
            return r.Message.setField(this, 5, e || [])
        },proto.webcast.im.HotLiveModule.prototype.addDeleteList = function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t)
        },proto.webcast.im.HotLiveModule.prototype.clearDeleteListList = function () {
            return this.setDeleteListList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchVenueMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MatchVenueMessage.toObject(e, this)
        }, proto.webcast.im.MatchVenueMessage.toObject = function (e, t) {
            var o, r = {
                videoCard: (o = t.getVideoCard()) && proto.webcast.im.VideoCardModule.toObject(e, o),
                matchReservation: (o = t.getMatchReservation()) && proto.webcast.im.MatchReservationModule.toObject(e, o),
                footballTalking: (o = t.getFootballTalking()) && proto.webcast.im.FootballTalkingModule.toObject(e, o),
                popularStar: (o = t.getPopularStar()) && proto.webcast.im.PopularStarModule.toObject(e, o),
                hotLive: (o = t.getHotLive()) && proto.webcast.im.HotLiveModule.toObject(e, o),
                venueInfo: (o = t.getVenueInfo()) && proto.webcast.im.VenueInfo.toObject(e, o),
                teamReservation: (o = t.getTeamReservation()) && proto.webcast.im.MatchReservationModule.toObject(e, o),
                common: (o = t.getCommon()) && n.Common.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.webcast.im.MatchVenueMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchVenueMessage;
            return proto.webcast.im.MatchVenueMessage.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.MatchVenueMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new proto.webcast.im.VideoCardModule;
                        t.readMessage(o, proto.webcast.im.VideoCardModule.deserializeBinaryFromReader), e.setVideoCard(o);
                        break;
                    case 2:
                        o = new proto.webcast.im.MatchReservationModule;
                        t.readMessage(o, proto.webcast.im.MatchReservationModule.deserializeBinaryFromReader), e.setMatchReservation(o);
                        break;
                    case 3:
                        o = new proto.webcast.im.FootballTalkingModule;
                        t.readMessage(o, proto.webcast.im.FootballTalkingModule.deserializeBinaryFromReader), e.setFootballTalking(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.PopularStarModule;
                        t.readMessage(o, proto.webcast.im.PopularStarModule.deserializeBinaryFromReader), e.setPopularStar(o);
                        break;
                    case 5:
                        o = new proto.webcast.im.HotLiveModule;
                        t.readMessage(o, proto.webcast.im.HotLiveModule.deserializeBinaryFromReader), e.setHotLive(o);
                        break;
                    case 6:
                        o = new proto.webcast.im.VenueInfo;
                        t.readMessage(o, proto.webcast.im.VenueInfo.deserializeBinaryFromReader), e.setVenueInfo(o);
                        break;
                    case 7:
                        o = new proto.webcast.im.MatchReservationModule;
                        t.readMessage(o, proto.webcast.im.MatchReservationModule.deserializeBinaryFromReader), e.setTeamReservation(o);
                        break;
                    case 8:
                        o = new n.Common;
                        t.readMessage(o, n.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.MatchVenueMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchVenueMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.MatchVenueMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getVideoCard()) && t.writeMessage(1, o, proto.webcast.im.VideoCardModule.serializeBinaryToWriter), null != (o = e.getMatchReservation()) && t.writeMessage(2, o, proto.webcast.im.MatchReservationModule.serializeBinaryToWriter), null != (o = e.getFootballTalking()) && t.writeMessage(3, o, proto.webcast.im.FootballTalkingModule.serializeBinaryToWriter), null != (o = e.getPopularStar()) && t.writeMessage(4, o, proto.webcast.im.PopularStarModule.serializeBinaryToWriter), null != (o = e.getHotLive()) && t.writeMessage(5, o, proto.webcast.im.HotLiveModule.serializeBinaryToWriter), null != (o = e.getVenueInfo()) && t.writeMessage(6, o, proto.webcast.im.VenueInfo.serializeBinaryToWriter), null != (o = e.getTeamReservation()) && t.writeMessage(7, o, proto.webcast.im.MatchReservationModule.serializeBinaryToWriter), null != (o = e.getCommon()) && t.writeMessage(8, o, n.Common.serializeBinaryToWriter)
        },proto.webcast.im.MatchVenueMessage.prototype.getVideoCard = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.VideoCardModule, 1)
        },proto.webcast.im.MatchVenueMessage.prototype.setVideoCard = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearVideoCard = function () {
            return this.setVideoCard(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasVideoCard = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.MatchVenueMessage.prototype.getMatchReservation = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.MatchReservationModule, 2)
        },proto.webcast.im.MatchVenueMessage.prototype.setMatchReservation = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearMatchReservation = function () {
            return this.setMatchReservation(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasMatchReservation = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.im.MatchVenueMessage.prototype.getFootballTalking = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.FootballTalkingModule, 3)
        },proto.webcast.im.MatchVenueMessage.prototype.setFootballTalking = function (e) {
            return r.Message.setWrapperField(this, 3, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearFootballTalking = function () {
            return this.setFootballTalking(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasFootballTalking = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.im.MatchVenueMessage.prototype.getPopularStar = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.PopularStarModule, 4)
        },proto.webcast.im.MatchVenueMessage.prototype.setPopularStar = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearPopularStar = function () {
            return this.setPopularStar(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasPopularStar = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.im.MatchVenueMessage.prototype.getHotLive = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.HotLiveModule, 5)
        },proto.webcast.im.MatchVenueMessage.prototype.setHotLive = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearHotLive = function () {
            return this.setHotLive(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasHotLive = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.im.MatchVenueMessage.prototype.getVenueInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.VenueInfo, 6)
        },proto.webcast.im.MatchVenueMessage.prototype.setVenueInfo = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearVenueInfo = function () {
            return this.setVenueInfo(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasVenueInfo = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.im.MatchVenueMessage.prototype.getTeamReservation = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.MatchReservationModule, 7)
        },proto.webcast.im.MatchVenueMessage.prototype.setTeamReservation = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearTeamReservation = function () {
            return this.setTeamReservation(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasTeamReservation = function () {
            return null != r.Message.getField(this, 7)
        },proto.webcast.im.MatchVenueMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, n.Common, 8)
        },proto.webcast.im.MatchVenueMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        },proto.webcast.im.MatchVenueMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.MatchVenueMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 8)
        },proto.webcast.im.UpdateType = {
            UNKNOWNUPDATE: 0,
            FULLUPDATE: 1,
            INCRUPDATE: 2
        },proto.webcast.im.LinkType = {
            LINKTYPEUNKNOWN: 0,
            LINKTYPEH5: 1,
            LINKTYPESCHEMA: 2
        },proto.webcast.im.AvatarColor = {
            AVATARCOLORUNKNOWN: 0,
            AVATARCOLORYELLOW: 1,
            AVATARCOLORBLUE: 2
        },i.object.extend(t, proto.webcast.im)
    }
}]);