(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[7587], {
    24136: function (t, e, a) {
        var r = a(47865), o = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = a(64925);
        o.object.extend(proto, i);
        var n = a(56523);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.data.RoomChannelInfo", null, s), o.exportSymbol("proto.webcast.data.RtcExtInfo", null, s), proto.webcast.data.RoomChannelInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.RoomChannelInfo.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.RoomChannelInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.RoomChannelInfo.displayName = "proto.webcast.data.RoomChannelInfo"), proto.webcast.data.RtcExtInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.RtcExtInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.RtcExtInfo.displayName = "proto.webcast.data.RtcExtInfo"), proto.webcast.data.RoomChannelInfo.repeatedFields_ = [5], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.RoomChannelInfo.prototype.toObject = function (t) {
            return proto.webcast.data.RoomChannelInfo.toObject(t, this)
        }, proto.webcast.data.RoomChannelInfo.toObject = function (t, e) {
            var a, o = {
                channelId: r.Message.getFieldWithDefault(e, 1, "0"),
                token: r.Message.getFieldWithDefault(e, 2, ""),
                isOwner: r.Message.getBooleanFieldWithDefault(e, 3, !1),
                memberCount: r.Message.getFieldWithDefault(e, 4, "0"),
                topUserList: r.Message.toObjectList(e.getTopUserList(), i.User.toObject, t),
                channelName: r.Message.getFieldWithDefault(e, 6, ""),
                roomChannelMode: r.Message.getFieldWithDefault(e, 7, 0),
                needApprovalUser: (a = e.getNeedApprovalUser()) && i.User.toObject(t, a),
                owner: (a = e.getOwner()) && i.User.toObject(t, a),
                maxMemberCount: r.Message.getFieldWithDefault(e, 10, "0"),
                rtcExtInfo: (a = e.getRtcExtInfo()) && proto.webcast.data.RtcExtInfo.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.RoomChannelInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.RoomChannelInfo;
            return proto.webcast.data.RoomChannelInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.RoomChannelInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setChannelId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setToken(a);
                        break;
                    case 3:
                        a = e.readBool();
                        t.setIsOwner(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setMemberCount(a);
                        break;
                    case 5:
                        a = new i.User;
                        e.readMessage(a, i.User.deserializeBinaryFromReader), t.addTopUser(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setChannelName(a);
                        break;
                    case 7:
                        a = e.readInt32();
                        t.setRoomChannelMode(a);
                        break;
                    case 8:
                        a = new i.User;
                        e.readMessage(a, i.User.deserializeBinaryFromReader), t.setNeedApprovalUser(a);
                        break;
                    case 9:
                        a = new i.User;
                        e.readMessage(a, i.User.deserializeBinaryFromReader), t.setOwner(a);
                        break;
                    case 10:
                        a = e.readInt64String();
                        t.setMaxMemberCount(a);
                        break;
                    case 200:
                        a = new proto.webcast.data.RtcExtInfo;
                        e.readMessage(a, proto.webcast.data.RtcExtInfo.deserializeBinaryFromReader), t.setRtcExtInfo(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.RoomChannelInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.RoomChannelInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.RoomChannelInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getChannelId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getToken()).length > 0 && e.writeString(2, a), (a = t.getIsOwner()) && e.writeBool(3, a), a = t.getMemberCount(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), (a = t.getTopUserList()).length > 0 && e.writeRepeatedMessage(5, a, i.User.serializeBinaryToWriter), (a = t.getChannelName()).length > 0 && e.writeString(6, a), 0 !== (a = t.getRoomChannelMode()) && e.writeInt32(7, a), null != (a = t.getNeedApprovalUser()) && e.writeMessage(8, a, i.User.serializeBinaryToWriter), null != (a = t.getOwner()) && e.writeMessage(9, a, i.User.serializeBinaryToWriter), a = t.getMaxMemberCount(), 0 !== parseInt(a, 10) && e.writeInt64String(10, a), null != (a = t.getRtcExtInfo()) && e.writeMessage(200, a, proto.webcast.data.RtcExtInfo.serializeBinaryToWriter)
        }, proto.webcast.data.RoomChannelInfo.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.RoomChannelInfo.prototype.setChannelId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getToken = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.RoomChannelInfo.prototype.setToken = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getIsOwner = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        }, proto.webcast.data.RoomChannelInfo.prototype.setIsOwner = function (t) {
            return r.Message.setProto3BooleanField(this, 3, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getMemberCount = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.RoomChannelInfo.prototype.setMemberCount = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getTopUserList = function () {
            return r.Message.getRepeatedWrapperField(this, i.User, 5)
        }, proto.webcast.data.RoomChannelInfo.prototype.setTopUserList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 5, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.addTopUser = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 5, t, proto.webcast.data.User, e)
        }, proto.webcast.data.RoomChannelInfo.prototype.clearTopUserList = function () {
            return this.setTopUserList([])
        }, proto.webcast.data.RoomChannelInfo.prototype.getChannelName = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.data.RoomChannelInfo.prototype.setChannelName = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getRoomChannelMode = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        }, proto.webcast.data.RoomChannelInfo.prototype.setRoomChannelMode = function (t) {
            return r.Message.setProto3IntField(this, 7, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getNeedApprovalUser = function () {
            return r.Message.getWrapperField(this, i.User, 8)
        }, proto.webcast.data.RoomChannelInfo.prototype.setNeedApprovalUser = function (t) {
            return r.Message.setWrapperField(this, 8, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.clearNeedApprovalUser = function () {
            return this.setNeedApprovalUser(undefined)
        }, proto.webcast.data.RoomChannelInfo.prototype.hasNeedApprovalUser = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.data.RoomChannelInfo.prototype.getOwner = function () {
            return r.Message.getWrapperField(this, i.User, 9)
        }, proto.webcast.data.RoomChannelInfo.prototype.setOwner = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.clearOwner = function () {
            return this.setOwner(undefined)
        }, proto.webcast.data.RoomChannelInfo.prototype.hasOwner = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.data.RoomChannelInfo.prototype.getMaxMemberCount = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.data.RoomChannelInfo.prototype.setMaxMemberCount = function (t) {
            return r.Message.setProto3StringIntField(this, 10, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.getRtcExtInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.RtcExtInfo, 200)
        }, proto.webcast.data.RoomChannelInfo.prototype.setRtcExtInfo = function (t) {
            return r.Message.setWrapperField(this, 200, t)
        }, proto.webcast.data.RoomChannelInfo.prototype.clearRtcExtInfo = function () {
            return this.setRtcExtInfo(undefined)
        }, proto.webcast.data.RoomChannelInfo.prototype.hasRtcExtInfo = function () {
            return null != r.Message.getField(this, 200)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.RtcExtInfo.prototype.toObject = function (t) {
            return proto.webcast.data.RtcExtInfo.toObject(t, this)
        }, proto.webcast.data.RtcExtInfo.toObject = function (t, e) {
            var a = {
                linkMicIdStr: r.Message.getFieldWithDefault(e, 1, ""),
                rtcExtInfo: r.Message.getFieldWithDefault(e, 2, ""),
                liveCoreExrInfo: r.Message.getFieldWithDefault(e, 3, ""),
                rtcStrategy: r.Message.getFieldWithDefault(e, 4, ""),
                publicStreamId: r.Message.getFieldWithDefault(e, 5, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.RtcExtInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.RtcExtInfo;
            return proto.webcast.data.RtcExtInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.RtcExtInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setLinkMicIdStr(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setRtcExtInfo(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setLiveCoreExrInfo(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setRtcStrategy(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setPublicStreamId(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.RtcExtInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.RtcExtInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.RtcExtInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getLinkMicIdStr()).length > 0 && e.writeString(1, a), (a = t.getRtcExtInfo()).length > 0 && e.writeString(2, a), (a = t.getLiveCoreExrInfo()).length > 0 && e.writeString(3, a), (a = t.getRtcStrategy()).length > 0 && e.writeString(4, a), (a = t.getPublicStreamId()).length > 0 && e.writeString(5, a)
        }, proto.webcast.data.RtcExtInfo.prototype.getLinkMicIdStr = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.RtcExtInfo.prototype.setLinkMicIdStr = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.RtcExtInfo.prototype.getRtcExtInfo = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.RtcExtInfo.prototype.setRtcExtInfo = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.RtcExtInfo.prototype.getLiveCoreExrInfo = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.data.RtcExtInfo.prototype.setLiveCoreExrInfo = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        }, proto.webcast.data.RtcExtInfo.prototype.getRtcStrategy = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.RtcExtInfo.prototype.setRtcStrategy = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.RtcExtInfo.prototype.getPublicStreamId = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.data.RtcExtInfo.prototype.setPublicStreamId = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        }, o.object.extend(e, proto.webcast.data)
    }, 70203: function (t, e, a) {
        var r = a(47865), o = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        r.exportSymbol("proto.webcast.data.LoadStrategy", null, o), r.exportSymbol("proto.webcast.data.ToolBarComponentEventType", null, o), r.exportSymbol("proto.webcast.data.ToolBarComponentGroup", null, o), r.exportSymbol("proto.webcast.data.ToolBarComponentOperationType", null, o), r.exportSymbol("proto.webcast.data.ToolBarComponentType", null, o), proto.webcast.data.ToolBarComponentGroup = {
            PUBLICSLOT: 0,
            SHARESLOT: 1,
            IMSLOT: 2,
            EASTEREGGSLOT: 3,
            VRSLOT: 4,
            MORESLOT: 5,
            COMMERCESLOT: 6,
            LINKMICSLOT: 7,
            GIFTSLOT: 8,
            LIUYANSLOT: 9,
            CHANNELSLOT: 10
        }, proto.webcast.data.ToolBarComponentType = {
            TUNKOWN: 0,
            CART: 1,
            LIVEITEM: 2,
            MICROAPP: 3,
            WELFAREPROJECT: 4,
            GAMEPROMOTION: 5,
            MINIGAME: 6,
            LIFEGROUPON: 7,
            PAIDLIVETICKET: 8,
            LITTLEGAME: 9,
            SHARECOMPONENT: 20,
            IMCOMPONENT: 21,
            EASTEREGG: 22,
            VR: 23,
            MORECOMPONENT: 24,
            EXCHANGECOUPON: 25,
            LINKMICCOMPONENT: 26,
            LIUYANCOMPONENT: 27,
            GIFTCOMPONENT: 28,
            SPEEDYGIFT: 29,
            INCOMEEXCHANGE: 30,
            ROOMCHANNEL: 31
        }, proto.webcast.data.ToolBarComponentEventType = {
            NOOP: 0,
            UP: 1,
            DOWN: 2,
            HASPERMISSION: 3,
            NOPERMISSION: 4,
            UPDATEDATA: 5
        }, proto.webcast.data.ToolBarComponentOperationType = {
            TOENTRACE: 0,
            TOMORE: 1,
            NOACTION: 3
        }, proto.webcast.data.LoadStrategy = {
            LOADSTRATEGYUNKNOWN: 0,
            REQUEST: 1,
            ROOMDATA: 2,
            REQUESTWITHROOMDATA: 3
        }, r.object.extend(e, proto.webcast.data)
    }, 34725: function (t, e, a) {
        var r = a(47865), o = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = a(56523);
        o.object.extend(proto, i);
        var n = a(64925);
        o.object.extend(proto, n);
        var l = a(8411);
        o.object.extend(proto, l), o.exportSymbol("proto.webcast.data.BarrageConfigure", null, s), o.exportSymbol("proto.webcast.data.BusinessConfigure", null, s), o.exportSymbol("proto.webcast.data.CollectionItem", null, s), o.exportSymbol("proto.webcast.data.CollectionItem.CollectionSource", null, s), o.exportSymbol("proto.webcast.data.CollectionItem.CollectionTag", null, s), o.exportSymbol("proto.webcast.data.CollectionItem.CollectionType", null, s), o.exportSymbol("proto.webcast.data.CollectionItem.ReflowTagType", null, s), o.exportSymbol("proto.webcast.data.EpisodePremierePlay", null, s), o.exportSymbol("proto.webcast.data.EpisodePremierePlayType", null, s), o.exportSymbol("proto.webcast.data.EpisodePreviewBottom", null, s), o.exportSymbol("proto.webcast.data.EpisodePreviewImage", null, s), o.exportSymbol("proto.webcast.data.EpisodePreviewType", null, s), o.exportSymbol("proto.webcast.data.MultiCameraBasicInfo", null, s), o.exportSymbol("proto.webcast.data.ResourceConfigure", null, s), o.exportSymbol("proto.webcast.data.ScreenBarConfigure", null, s), o.exportSymbol("proto.webcast.data.ShareInfo", null, s), o.exportSymbol("proto.webcast.data.SharePosterInfo", null, s), o.exportSymbol("proto.webcast.data.SharePosterInfo.PosterData", null, s), o.exportSymbol("proto.webcast.data.VSBar", null, s), o.exportSymbol("proto.webcast.data.VSGiftPannel", null, s), o.exportSymbol("proto.webcast.data.VSItemBar", null, s), o.exportSymbol("proto.webcast.data.VSItemComment", null, s), o.exportSymbol("proto.webcast.data.VSPannelIcon", null, s), o.exportSymbol("proto.webcast.data.VSWatermark", null, s), o.exportSymbol("proto.webcast.data.VSWatermarkIcon", null, s), o.exportSymbol("proto.webcast.data.VsEpisodeHighLight", null, s), proto.webcast.data.VsEpisodeHighLight = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.VsEpisodeHighLight, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VsEpisodeHighLight.displayName = "proto.webcast.data.VsEpisodeHighLight"), proto.webcast.data.EpisodePremierePlay = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.EpisodePremierePlay.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.EpisodePremierePlay, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EpisodePremierePlay.displayName = "proto.webcast.data.EpisodePremierePlay"), proto.webcast.data.VSWatermark = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.VSWatermark.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.VSWatermark, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSWatermark.displayName = "proto.webcast.data.VSWatermark"), proto.webcast.data.VSWatermarkIcon = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.VSWatermarkIcon, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSWatermarkIcon.displayName = "proto.webcast.data.VSWatermarkIcon"), proto.webcast.data.VSBar = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.VSBar, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSBar.displayName = "proto.webcast.data.VSBar"), proto.webcast.data.VSItemComment = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.VSItemComment, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSItemComment.displayName = "proto.webcast.data.VSItemComment"), proto.webcast.data.VSItemBar = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.VSItemBar, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSItemBar.displayName = "proto.webcast.data.VSItemBar"), proto.webcast.data.EpisodePreviewImage = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EpisodePreviewImage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EpisodePreviewImage.displayName = "proto.webcast.data.EpisodePreviewImage"), proto.webcast.data.VSGiftPannel = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.VSGiftPannel.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.VSGiftPannel, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSGiftPannel.displayName = "proto.webcast.data.VSGiftPannel"), proto.webcast.data.EpisodePreviewBottom = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EpisodePreviewBottom, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EpisodePreviewBottom.displayName = "proto.webcast.data.EpisodePreviewBottom"), proto.webcast.data.VSPannelIcon = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.VSPannelIcon, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.VSPannelIcon.displayName = "proto.webcast.data.VSPannelIcon"), proto.webcast.data.MultiCameraBasicInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MultiCameraBasicInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MultiCameraBasicInfo.displayName = "proto.webcast.data.MultiCameraBasicInfo"), proto.webcast.data.CollectionItem = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.CollectionItem.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.CollectionItem, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.CollectionItem.displayName = "proto.webcast.data.CollectionItem"), proto.webcast.data.ShareInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.ShareInfo.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.ShareInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.ShareInfo.displayName = "proto.webcast.data.ShareInfo"), proto.webcast.data.SharePosterInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.SharePosterInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.SharePosterInfo.displayName = "proto.webcast.data.SharePosterInfo"), proto.webcast.data.SharePosterInfo.PosterData = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.SharePosterInfo.PosterData.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.SharePosterInfo.PosterData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.SharePosterInfo.PosterData.displayName = "proto.webcast.data.SharePosterInfo.PosterData"), proto.webcast.data.BusinessConfigure = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.BusinessConfigure, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.BusinessConfigure.displayName = "proto.webcast.data.BusinessConfigure"), proto.webcast.data.ResourceConfigure = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.ResourceConfigure, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.ResourceConfigure.displayName = "proto.webcast.data.ResourceConfigure"), proto.webcast.data.BarrageConfigure = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.BarrageConfigure, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.BarrageConfigure.displayName = "proto.webcast.data.BarrageConfigure"), proto.webcast.data.ScreenBarConfigure = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.ScreenBarConfigure, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.ScreenBarConfigure.displayName = "proto.webcast.data.ScreenBarConfigure"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VsEpisodeHighLight.prototype.toObject = function (t) {
            return proto.webcast.data.VsEpisodeHighLight.toObject(t, this)
        }, proto.webcast.data.VsEpisodeHighLight.toObject = function (t, e) {
            var a, o = {
                location: r.Message.getFieldWithDefault(e, 1, "0"),
                description: r.Message.getFieldWithDefault(e, 2, ""),
                image: (a = e.getImage()) && l.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.VsEpisodeHighLight.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VsEpisodeHighLight;
            return proto.webcast.data.VsEpisodeHighLight.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.VsEpisodeHighLight.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setLocation(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setDescription(a);
                        break;
                    case 3:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setImage(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.VsEpisodeHighLight.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VsEpisodeHighLight.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.VsEpisodeHighLight.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getLocation(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getDescription()).length > 0 && e.writeString(2, a), null != (a = t.getImage()) && e.writeMessage(3, a, l.Image.serializeBinaryToWriter)
        }, proto.webcast.data.VsEpisodeHighLight.prototype.getLocation = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.VsEpisodeHighLight.prototype.setLocation = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.VsEpisodeHighLight.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.VsEpisodeHighLight.prototype.setDescription = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.VsEpisodeHighLight.prototype.getImage = function () {
            return r.Message.getWrapperField(this, l.Image, 3)
        }, proto.webcast.data.VsEpisodeHighLight.prototype.setImage = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        }, proto.webcast.data.VsEpisodeHighLight.prototype.clearImage = function () {
            return this.setImage(undefined)
        }, proto.webcast.data.VsEpisodeHighLight.prototype.hasImage = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.data.EpisodePremierePlay.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EpisodePremierePlay.prototype.toObject = function (t) {
            return proto.webcast.data.EpisodePremierePlay.toObject(t, this)
        }, proto.webcast.data.EpisodePremierePlay.toObject = function (t, e) {
            var a = {
                highlightsList: r.Message.toObjectList(e.getHighlightsList(), proto.webcast.data.VsEpisodeHighLight.toObject, t),
                playType: r.Message.getFieldWithDefault(e, 2, 0),
                startTime: r.Message.getFieldWithDefault(e, 3, "0")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.EpisodePremierePlay.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EpisodePremierePlay;
            return proto.webcast.data.EpisodePremierePlay.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EpisodePremierePlay.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new proto.webcast.data.VsEpisodeHighLight;
                        e.readMessage(a, proto.webcast.data.VsEpisodeHighLight.deserializeBinaryFromReader), t.addHighlights(a);
                        break;
                    case 2:
                        a = e.readEnum();
                        t.setPlayType(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setStartTime(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EpisodePremierePlay.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EpisodePremierePlay.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EpisodePremierePlay.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getHighlightsList()).length > 0 && e.writeRepeatedMessage(1, a, proto.webcast.data.VsEpisodeHighLight.serializeBinaryToWriter), 0 !== (a = t.getPlayType()) && e.writeEnum(2, a), a = t.getStartTime(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a)
        },proto.webcast.data.EpisodePremierePlay.prototype.getHighlightsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.VsEpisodeHighLight, 1)
        },proto.webcast.data.EpisodePremierePlay.prototype.setHighlightsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 1, t)
        },proto.webcast.data.EpisodePremierePlay.prototype.addHighlights = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 1, t, proto.webcast.data.VsEpisodeHighLight, e)
        },proto.webcast.data.EpisodePremierePlay.prototype.clearHighlightsList = function () {
            return this.setHighlightsList([])
        },proto.webcast.data.EpisodePremierePlay.prototype.getPlayType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.EpisodePremierePlay.prototype.setPlayType = function (t) {
            return r.Message.setProto3EnumField(this, 2, t)
        },proto.webcast.data.EpisodePremierePlay.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.EpisodePremierePlay.prototype.setStartTime = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.VSWatermark.repeatedFields_ = [4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSWatermark.prototype.toObject = function (t) {
            return proto.webcast.data.VSWatermark.toObject(t, this)
        }, proto.webcast.data.VSWatermark.toObject = function (t, e) {
            var a = {
                position: r.Message.getFieldWithDefault(e, 1, "0"),
                landscapeDis: r.Message.getFieldWithDefault(e, 2, "0"),
                verticalDis: r.Message.getFieldWithDefault(e, 3, "0"),
                watermarkIconList: r.Message.toObjectList(e.getWatermarkIconList(), proto.webcast.data.VSWatermarkIcon.toObject, t)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.VSWatermark.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSWatermark;
            return proto.webcast.data.VSWatermark.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSWatermark.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setPosition(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setLandscapeDis(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setVerticalDis(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.VSWatermarkIcon;
                        e.readMessage(a, proto.webcast.data.VSWatermarkIcon.deserializeBinaryFromReader), t.addWatermarkIcon(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSWatermark.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSWatermark.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSWatermark.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getPosition(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getLandscapeDis(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getVerticalDis(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), (a = t.getWatermarkIconList()).length > 0 && e.writeRepeatedMessage(4, a, proto.webcast.data.VSWatermarkIcon.serializeBinaryToWriter)
        },proto.webcast.data.VSWatermark.prototype.getPosition = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.VSWatermark.prototype.setPosition = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.VSWatermark.prototype.getLandscapeDis = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.VSWatermark.prototype.setLandscapeDis = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.VSWatermark.prototype.getVerticalDis = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.VSWatermark.prototype.setVerticalDis = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.VSWatermark.prototype.getWatermarkIconList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.VSWatermarkIcon, 4)
        },proto.webcast.data.VSWatermark.prototype.setWatermarkIconList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 4, t)
        },proto.webcast.data.VSWatermark.prototype.addWatermarkIcon = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 4, t, proto.webcast.data.VSWatermarkIcon, e)
        },proto.webcast.data.VSWatermark.prototype.clearWatermarkIconList = function () {
            return this.setWatermarkIconList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSWatermarkIcon.prototype.toObject = function (t) {
            return proto.webcast.data.VSWatermarkIcon.toObject(t, this)
        }, proto.webcast.data.VSWatermarkIcon.toObject = function (t, e) {
            var a, o = {
                icon: (a = e.getIcon()) && l.Image.toObject(t, a),
                iconWidth: r.Message.getFieldWithDefault(e, 2, "0"),
                iconType: r.Message.getFieldWithDefault(e, 3, "0"),
                landscapeDis: r.Message.getFieldWithDefault(e, 4, "0"),
                verticalDis: r.Message.getFieldWithDefault(e, 5, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.VSWatermarkIcon.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSWatermarkIcon;
            return proto.webcast.data.VSWatermarkIcon.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSWatermarkIcon.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setIcon(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setIconWidth(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setIconType(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setLandscapeDis(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setVerticalDis(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSWatermarkIcon.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSWatermarkIcon.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSWatermarkIcon.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getIcon()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), a = t.getIconWidth(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getIconType(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getLandscapeDis(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getVerticalDis(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a)
        },proto.webcast.data.VSWatermarkIcon.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.VSWatermarkIcon.prototype.setIcon = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.VSWatermarkIcon.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        },proto.webcast.data.VSWatermarkIcon.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.VSWatermarkIcon.prototype.getIconWidth = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.VSWatermarkIcon.prototype.setIconWidth = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.VSWatermarkIcon.prototype.getIconType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.VSWatermarkIcon.prototype.setIconType = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.VSWatermarkIcon.prototype.getLandscapeDis = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.VSWatermarkIcon.prototype.setLandscapeDis = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.VSWatermarkIcon.prototype.getVerticalDis = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.VSWatermarkIcon.prototype.setVerticalDis = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSBar.prototype.toObject = function (t) {
            return proto.webcast.data.VSBar.toObject(t, this)
        }, proto.webcast.data.VSBar.toObject = function (t, e) {
            var a, r = {
                itemComment: (a = e.getItemComment()) && proto.webcast.data.VSItemBar.toObject(t, a),
                itemBar: (a = e.getItemBar()) && proto.webcast.data.VSItemBar.toObject(t, a)
            };
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.VSBar.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSBar;
            return proto.webcast.data.VSBar.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSBar.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new proto.webcast.data.VSItemBar;
                        e.readMessage(a, proto.webcast.data.VSItemBar.deserializeBinaryFromReader), t.setItemComment(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.VSItemBar;
                        e.readMessage(a, proto.webcast.data.VSItemBar.deserializeBinaryFromReader), t.setItemBar(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSBar.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSBar.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSBar.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getItemComment()) && e.writeMessage(1, a, proto.webcast.data.VSItemBar.serializeBinaryToWriter), null != (a = t.getItemBar()) && e.writeMessage(2, a, proto.webcast.data.VSItemBar.serializeBinaryToWriter)
        },proto.webcast.data.VSBar.prototype.getItemComment = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.VSItemBar, 1)
        },proto.webcast.data.VSBar.prototype.setItemComment = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.VSBar.prototype.clearItemComment = function () {
            return this.setItemComment(undefined)
        },proto.webcast.data.VSBar.prototype.hasItemComment = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.VSBar.prototype.getItemBar = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.VSItemBar, 2)
        },proto.webcast.data.VSBar.prototype.setItemBar = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.VSBar.prototype.clearItemBar = function () {
            return this.setItemBar(undefined)
        },proto.webcast.data.VSBar.prototype.hasItemBar = function () {
            return null != r.Message.getField(this, 2)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSItemComment.prototype.toObject = function (t) {
            return proto.webcast.data.VSItemComment.toObject(t, this)
        }, proto.webcast.data.VSItemComment.toObject = function (t, e) {
            var a, r = {
                itemCommentIconDark: (a = e.getItemCommentIconDark()) && l.Image.toObject(t, a),
                itemCommentIconLight: (a = e.getItemCommentIconLight()) && l.Image.toObject(t, a)
            };
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.VSItemComment.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSItemComment;
            return proto.webcast.data.VSItemComment.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSItemComment.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setItemCommentIconDark(a);
                        break;
                    case 2:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setItemCommentIconLight(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSItemComment.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSItemComment.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSItemComment.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getItemCommentIconDark()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), null != (a = t.getItemCommentIconLight()) && e.writeMessage(2, a, l.Image.serializeBinaryToWriter)
        },proto.webcast.data.VSItemComment.prototype.getItemCommentIconDark = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.VSItemComment.prototype.setItemCommentIconDark = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.VSItemComment.prototype.clearItemCommentIconDark = function () {
            return this.setItemCommentIconDark(undefined)
        },proto.webcast.data.VSItemComment.prototype.hasItemCommentIconDark = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.VSItemComment.prototype.getItemCommentIconLight = function () {
            return r.Message.getWrapperField(this, l.Image, 2)
        },proto.webcast.data.VSItemComment.prototype.setItemCommentIconLight = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.VSItemComment.prototype.clearItemCommentIconLight = function () {
            return this.setItemCommentIconLight(undefined)
        },proto.webcast.data.VSItemComment.prototype.hasItemCommentIconLight = function () {
            return null != r.Message.getField(this, 2)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSItemBar.prototype.toObject = function (t) {
            return proto.webcast.data.VSItemBar.toObject(t, this)
        }, proto.webcast.data.VSItemBar.toObject = function (t, e) {
            var a, o = {
                iconDark: (a = e.getIconDark()) && l.Image.toObject(t, a),
                iconLight: (a = e.getIconLight()) && l.Image.toObject(t, a),
                title: r.Message.getFieldWithDefault(e, 3, ""),
                seperator: r.Message.getFieldWithDefault(e, 4, ""),
                detail: r.Message.getFieldWithDefault(e, 5, ""),
                watchInfoPv: r.Message.getFieldWithDefault(e, 6, "0"),
                watchInfoHeat: r.Message.getFieldWithDefault(e, 7, ""),
                collectionId: r.Message.getFieldWithDefault(e, 8, "0"),
                tabId: r.Message.getFieldWithDefault(e, 9, 0),
                contentType: r.Message.getFieldWithDefault(e, 10, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.VSItemBar.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSItemBar;
            return proto.webcast.data.VSItemBar.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSItemBar.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setIconDark(a);
                        break;
                    case 2:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setIconLight(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setTitle(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setSeperator(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setDetail(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setWatchInfoPv(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setWatchInfoHeat(a);
                        break;
                    case 8:
                        a = e.readInt64String();
                        t.setCollectionId(a);
                        break;
                    case 9:
                        a = e.readInt32();
                        t.setTabId(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setContentType(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSItemBar.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSItemBar.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSItemBar.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getIconDark()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), null != (a = t.getIconLight()) && e.writeMessage(2, a, l.Image.serializeBinaryToWriter), (a = t.getTitle()).length > 0 && e.writeString(3, a), (a = t.getSeperator()).length > 0 && e.writeString(4, a), (a = t.getDetail()).length > 0 && e.writeString(5, a), a = t.getWatchInfoPv(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), (a = t.getWatchInfoHeat()).length > 0 && e.writeString(7, a), a = t.getCollectionId(), 0 !== parseInt(a, 10) && e.writeInt64String(8, a), 0 !== (a = t.getTabId()) && e.writeInt32(9, a), (a = t.getContentType()).length > 0 && e.writeString(10, a)
        },proto.webcast.data.VSItemBar.prototype.getIconDark = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.VSItemBar.prototype.setIconDark = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.VSItemBar.prototype.clearIconDark = function () {
            return this.setIconDark(undefined)
        },proto.webcast.data.VSItemBar.prototype.hasIconDark = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.VSItemBar.prototype.getIconLight = function () {
            return r.Message.getWrapperField(this, l.Image, 2)
        },proto.webcast.data.VSItemBar.prototype.setIconLight = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.VSItemBar.prototype.clearIconLight = function () {
            return this.setIconLight(undefined)
        },proto.webcast.data.VSItemBar.prototype.hasIconLight = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.VSItemBar.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.VSItemBar.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.VSItemBar.prototype.getSeperator = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.VSItemBar.prototype.setSeperator = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.VSItemBar.prototype.getDetail = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.VSItemBar.prototype.setDetail = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.VSItemBar.prototype.getWatchInfoPv = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.VSItemBar.prototype.setWatchInfoPv = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.VSItemBar.prototype.getWatchInfoHeat = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.VSItemBar.prototype.setWatchInfoHeat = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },proto.webcast.data.VSItemBar.prototype.getCollectionId = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.data.VSItemBar.prototype.setCollectionId = function (t) {
            return r.Message.setProto3StringIntField(this, 8, t)
        },proto.webcast.data.VSItemBar.prototype.getTabId = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        },proto.webcast.data.VSItemBar.prototype.setTabId = function (t) {
            return r.Message.setProto3IntField(this, 9, t)
        },proto.webcast.data.VSItemBar.prototype.getContentType = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.VSItemBar.prototype.setContentType = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EpisodePreviewImage.prototype.toObject = function (t) {
            return proto.webcast.data.EpisodePreviewImage.toObject(t, this)
        }, proto.webcast.data.EpisodePreviewImage.toObject = function (t, e) {
            var a, o = {
                previewUriUp: (a = e.getPreviewUriUp()) && l.Image.toObject(t, a),
                previewUriDown: (a = e.getPreviewUriDown()) && l.Image.toObject(t, a),
                previewType: r.Message.getFieldWithDefault(e, 3, 0),
                previewWordUp: r.Message.getFieldWithDefault(e, 4, ""),
                previewWordDown: r.Message.getFieldWithDefault(e, 5, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EpisodePreviewImage.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EpisodePreviewImage;
            return proto.webcast.data.EpisodePreviewImage.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EpisodePreviewImage.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setPreviewUriUp(a);
                        break;
                    case 2:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setPreviewUriDown(a);
                        break;
                    case 3:
                        a = e.readEnum();
                        t.setPreviewType(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setPreviewWordUp(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setPreviewWordDown(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EpisodePreviewImage.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EpisodePreviewImage.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EpisodePreviewImage.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getPreviewUriUp()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), null != (a = t.getPreviewUriDown()) && e.writeMessage(2, a, l.Image.serializeBinaryToWriter), 0 !== (a = t.getPreviewType()) && e.writeEnum(3, a), (a = t.getPreviewWordUp()).length > 0 && e.writeString(4, a), (a = t.getPreviewWordDown()).length > 0 && e.writeString(5, a)
        },proto.webcast.data.EpisodePreviewImage.prototype.getPreviewUriUp = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.EpisodePreviewImage.prototype.setPreviewUriUp = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.EpisodePreviewImage.prototype.clearPreviewUriUp = function () {
            return this.setPreviewUriUp(undefined)
        },proto.webcast.data.EpisodePreviewImage.prototype.hasPreviewUriUp = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.EpisodePreviewImage.prototype.getPreviewUriDown = function () {
            return r.Message.getWrapperField(this, l.Image, 2)
        },proto.webcast.data.EpisodePreviewImage.prototype.setPreviewUriDown = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.EpisodePreviewImage.prototype.clearPreviewUriDown = function () {
            return this.setPreviewUriDown(undefined)
        },proto.webcast.data.EpisodePreviewImage.prototype.hasPreviewUriDown = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.EpisodePreviewImage.prototype.getPreviewType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.EpisodePreviewImage.prototype.setPreviewType = function (t) {
            return r.Message.setProto3EnumField(this, 3, t)
        },proto.webcast.data.EpisodePreviewImage.prototype.getPreviewWordUp = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.EpisodePreviewImage.prototype.setPreviewWordUp = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.EpisodePreviewImage.prototype.getPreviewWordDown = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.EpisodePreviewImage.prototype.setPreviewWordDown = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.VSGiftPannel.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSGiftPannel.prototype.toObject = function (t) {
            return proto.webcast.data.VSGiftPannel.toObject(t, this)
        }, proto.webcast.data.VSGiftPannel.toObject = function (t, e) {
            var a, o = {
                backgroundColorsList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a,
                background: (a = e.getBackground()) && l.Image.toObject(t, a),
                selected: (a = e.getSelected()) && l.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.VSGiftPannel.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSGiftPannel;
            return proto.webcast.data.VSGiftPannel.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSGiftPannel.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.addBackgroundColors(a);
                        break;
                    case 2:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setBackground(a);
                        break;
                    case 3:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setSelected(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSGiftPannel.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSGiftPannel.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSGiftPannel.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getBackgroundColorsList()).length > 0 && e.writeRepeatedString(1, a), null != (a = t.getBackground()) && e.writeMessage(2, a, l.Image.serializeBinaryToWriter), null != (a = t.getSelected()) && e.writeMessage(3, a, l.Image.serializeBinaryToWriter)
        },proto.webcast.data.VSGiftPannel.prototype.getBackgroundColorsList = function () {
            return r.Message.getRepeatedField(this, 1)
        },proto.webcast.data.VSGiftPannel.prototype.setBackgroundColorsList = function (t) {
            return r.Message.setField(this, 1, t || [])
        },proto.webcast.data.VSGiftPannel.prototype.addBackgroundColors = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        },proto.webcast.data.VSGiftPannel.prototype.clearBackgroundColorsList = function () {
            return this.setBackgroundColorsList([])
        },proto.webcast.data.VSGiftPannel.prototype.getBackground = function () {
            return r.Message.getWrapperField(this, l.Image, 2)
        },proto.webcast.data.VSGiftPannel.prototype.setBackground = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.VSGiftPannel.prototype.clearBackground = function () {
            return this.setBackground(undefined)
        },proto.webcast.data.VSGiftPannel.prototype.hasBackground = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.VSGiftPannel.prototype.getSelected = function () {
            return r.Message.getWrapperField(this, l.Image, 3)
        },proto.webcast.data.VSGiftPannel.prototype.setSelected = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.VSGiftPannel.prototype.clearSelected = function () {
            return this.setSelected(undefined)
        },proto.webcast.data.VSGiftPannel.prototype.hasSelected = function () {
            return null != r.Message.getField(this, 3)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EpisodePreviewBottom.prototype.toObject = function (t) {
            return proto.webcast.data.EpisodePreviewBottom.toObject(t, this)
        }, proto.webcast.data.EpisodePreviewBottom.toObject = function (t, e) {
            var a = {
                watchPeriodStr: r.Message.getFieldWithDefault(e, 1, ""),
                latestPeriodStr: r.Message.getFieldWithDefault(e, 2, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.EpisodePreviewBottom.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EpisodePreviewBottom;
            return proto.webcast.data.EpisodePreviewBottom.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EpisodePreviewBottom.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setWatchPeriodStr(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setLatestPeriodStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EpisodePreviewBottom.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EpisodePreviewBottom.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EpisodePreviewBottom.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getWatchPeriodStr()).length > 0 && e.writeString(1, a), (a = t.getLatestPeriodStr()).length > 0 && e.writeString(2, a)
        },proto.webcast.data.EpisodePreviewBottom.prototype.getWatchPeriodStr = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.EpisodePreviewBottom.prototype.setWatchPeriodStr = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.EpisodePreviewBottom.prototype.getLatestPeriodStr = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.EpisodePreviewBottom.prototype.setLatestPeriodStr = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.VSPannelIcon.prototype.toObject = function (t) {
            return proto.webcast.data.VSPannelIcon.toObject(t, this)
        }, proto.webcast.data.VSPannelIcon.toObject = function (t, e) {
            var a, r = {
                spLandscapeIcon: (a = e.getSpLandscapeIcon()) && l.Image.toObject(t, a),
                spVerticalIcon: (a = e.getSpVerticalIcon()) && l.Image.toObject(t, a),
                landscapeVerticalSwitchIcon: (a = e.getLandscapeVerticalSwitchIcon()) && l.Image.toObject(t, a),
                lockScreenIcon: (a = e.getLockScreenIcon()) && l.Image.toObject(t, a),
                landscapeMoreIcon: (a = e.getLandscapeMoreIcon()) && l.Image.toObject(t, a),
                verticalMoreIcon: (a = e.getVerticalMoreIcon()) && l.Image.toObject(t, a),
                landscapeCommentIcon: (a = e.getLandscapeCommentIcon()) && l.Image.toObject(t, a),
                verticalCommentIcon: (a = e.getVerticalCommentIcon()) && l.Image.toObject(t, a),
                verticalLandscapeSwitchIcon: (a = e.getVerticalLandscapeSwitchIcon()) && l.Image.toObject(t, a),
                verticalLockScreenIcon: (a = e.getVerticalLockScreenIcon()) && l.Image.toObject(t, a)
            };
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.VSPannelIcon.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.VSPannelIcon;
            return proto.webcast.data.VSPannelIcon.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.VSPannelIcon.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setSpLandscapeIcon(a);
                        break;
                    case 2:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setSpVerticalIcon(a);
                        break;
                    case 3:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setLandscapeVerticalSwitchIcon(a);
                        break;
                    case 4:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setLockScreenIcon(a);
                        break;
                    case 9:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setLandscapeMoreIcon(a);
                        break;
                    case 10:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setVerticalMoreIcon(a);
                        break;
                    case 11:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setLandscapeCommentIcon(a);
                        break;
                    case 12:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setVerticalCommentIcon(a);
                        break;
                    case 13:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setVerticalLandscapeSwitchIcon(a);
                        break;
                    case 14:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setVerticalLockScreenIcon(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.VSPannelIcon.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.VSPannelIcon.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.VSPannelIcon.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getSpLandscapeIcon()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), null != (a = t.getSpVerticalIcon()) && e.writeMessage(2, a, l.Image.serializeBinaryToWriter), null != (a = t.getLandscapeVerticalSwitchIcon()) && e.writeMessage(3, a, l.Image.serializeBinaryToWriter), null != (a = t.getLockScreenIcon()) && e.writeMessage(4, a, l.Image.serializeBinaryToWriter), null != (a = t.getLandscapeMoreIcon()) && e.writeMessage(9, a, l.Image.serializeBinaryToWriter), null != (a = t.getVerticalMoreIcon()) && e.writeMessage(10, a, l.Image.serializeBinaryToWriter), null != (a = t.getLandscapeCommentIcon()) && e.writeMessage(11, a, l.Image.serializeBinaryToWriter), null != (a = t.getVerticalCommentIcon()) && e.writeMessage(12, a, l.Image.serializeBinaryToWriter), null != (a = t.getVerticalLandscapeSwitchIcon()) && e.writeMessage(13, a, l.Image.serializeBinaryToWriter), null != (a = t.getVerticalLockScreenIcon()) && e.writeMessage(14, a, l.Image.serializeBinaryToWriter)
        },proto.webcast.data.VSPannelIcon.prototype.getSpLandscapeIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.VSPannelIcon.prototype.setSpLandscapeIcon = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearSpLandscapeIcon = function () {
            return this.setSpLandscapeIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasSpLandscapeIcon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.VSPannelIcon.prototype.getSpVerticalIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 2)
        },proto.webcast.data.VSPannelIcon.prototype.setSpVerticalIcon = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearSpVerticalIcon = function () {
            return this.setSpVerticalIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasSpVerticalIcon = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.VSPannelIcon.prototype.getLandscapeVerticalSwitchIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 3)
        },proto.webcast.data.VSPannelIcon.prototype.setLandscapeVerticalSwitchIcon = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearLandscapeVerticalSwitchIcon = function () {
            return this.setLandscapeVerticalSwitchIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasLandscapeVerticalSwitchIcon = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.data.VSPannelIcon.prototype.getLockScreenIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 4)
        },proto.webcast.data.VSPannelIcon.prototype.setLockScreenIcon = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearLockScreenIcon = function () {
            return this.setLockScreenIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasLockScreenIcon = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.VSPannelIcon.prototype.getLandscapeMoreIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 9)
        },proto.webcast.data.VSPannelIcon.prototype.setLandscapeMoreIcon = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearLandscapeMoreIcon = function () {
            return this.setLandscapeMoreIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasLandscapeMoreIcon = function () {
            return null != r.Message.getField(this, 9)
        },proto.webcast.data.VSPannelIcon.prototype.getVerticalMoreIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 10)
        },proto.webcast.data.VSPannelIcon.prototype.setVerticalMoreIcon = function (t) {
            return r.Message.setWrapperField(this, 10, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearVerticalMoreIcon = function () {
            return this.setVerticalMoreIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasVerticalMoreIcon = function () {
            return null != r.Message.getField(this, 10)
        },proto.webcast.data.VSPannelIcon.prototype.getLandscapeCommentIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 11)
        },proto.webcast.data.VSPannelIcon.prototype.setLandscapeCommentIcon = function (t) {
            return r.Message.setWrapperField(this, 11, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearLandscapeCommentIcon = function () {
            return this.setLandscapeCommentIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasLandscapeCommentIcon = function () {
            return null != r.Message.getField(this, 11)
        },proto.webcast.data.VSPannelIcon.prototype.getVerticalCommentIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 12)
        },proto.webcast.data.VSPannelIcon.prototype.setVerticalCommentIcon = function (t) {
            return r.Message.setWrapperField(this, 12, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearVerticalCommentIcon = function () {
            return this.setVerticalCommentIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasVerticalCommentIcon = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.data.VSPannelIcon.prototype.getVerticalLandscapeSwitchIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 13)
        },proto.webcast.data.VSPannelIcon.prototype.setVerticalLandscapeSwitchIcon = function (t) {
            return r.Message.setWrapperField(this, 13, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearVerticalLandscapeSwitchIcon = function () {
            return this.setVerticalLandscapeSwitchIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasVerticalLandscapeSwitchIcon = function () {
            return null != r.Message.getField(this, 13)
        },proto.webcast.data.VSPannelIcon.prototype.getVerticalLockScreenIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 14)
        },proto.webcast.data.VSPannelIcon.prototype.setVerticalLockScreenIcon = function (t) {
            return r.Message.setWrapperField(this, 14, t)
        },proto.webcast.data.VSPannelIcon.prototype.clearVerticalLockScreenIcon = function () {
            return this.setVerticalLockScreenIcon(undefined)
        },proto.webcast.data.VSPannelIcon.prototype.hasVerticalLockScreenIcon = function () {
            return null != r.Message.getField(this, 14)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MultiCameraBasicInfo.prototype.toObject = function (t) {
            return proto.webcast.data.MultiCameraBasicInfo.toObject(t, this)
        }, proto.webcast.data.MultiCameraBasicInfo.toObject = function (t, e) {
            var a, o = {
                icon: (a = e.getIcon()) && l.Image.toObject(t, a),
                iconBackgroundColor: r.Message.getFieldWithDefault(e, 2, ""),
                panelBackgroundColor: r.Message.getFieldWithDefault(e, 3, ""),
                iconPad: (a = e.getIconPad()) && l.Image.toObject(t, a),
                banXgs: r.Message.getBooleanFieldWithDefault(e, 5, !1),
                supportVsCore: r.Message.getBooleanFieldWithDefault(e, 6, !1)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.MultiCameraBasicInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MultiCameraBasicInfo;
            return proto.webcast.data.MultiCameraBasicInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MultiCameraBasicInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setIcon(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setIconBackgroundColor(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setPanelBackgroundColor(a);
                        break;
                    case 4:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setIconPad(a);
                        break;
                    case 5:
                        a = e.readBool();
                        t.setBanXgs(a);
                        break;
                    case 6:
                        a = e.readBool();
                        t.setSupportVsCore(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MultiCameraBasicInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MultiCameraBasicInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MultiCameraBasicInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getIcon()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), (a = t.getIconBackgroundColor()).length > 0 && e.writeString(2, a), (a = t.getPanelBackgroundColor()).length > 0 && e.writeString(3, a), null != (a = t.getIconPad()) && e.writeMessage(4, a, l.Image.serializeBinaryToWriter), (a = t.getBanXgs()) && e.writeBool(5, a), (a = t.getSupportVsCore()) && e.writeBool(6, a)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.setIcon = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.getIconBackgroundColor = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.MultiCameraBasicInfo.prototype.setIconBackgroundColor = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.getPanelBackgroundColor = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.MultiCameraBasicInfo.prototype.setPanelBackgroundColor = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.getIconPad = function () {
            return r.Message.getWrapperField(this, l.Image, 4)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.setIconPad = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.clearIconPad = function () {
            return this.setIconPad(undefined)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.hasIconPad = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.getBanXgs = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.setBanXgs = function (t) {
            return r.Message.setProto3BooleanField(this, 5, t)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.getSupportVsCore = function () {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        },proto.webcast.data.MultiCameraBasicInfo.prototype.setSupportVsCore = function (t) {
            return r.Message.setProto3BooleanField(this, 6, t)
        },proto.webcast.data.CollectionItem.repeatedFields_ = [10],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.CollectionItem.prototype.toObject = function (t) {
            return proto.webcast.data.CollectionItem.toObject(t, this)
        }, proto.webcast.data.CollectionItem.toObject = function (t, e) {
            var a, o = {
                collectionId: r.Message.getFieldWithDefault(e, 1, ""),
                collectionType: r.Message.getFieldWithDefault(e, 2, 0),
                title: r.Message.getFieldWithDefault(e, 3, ""),
                coverImg: (a = e.getCoverImg()) && l.Image.toObject(t, a),
                originalVid: r.Message.getFieldWithDefault(e, 5, ""),
                videoDuration: r.Message.getFieldWithDefault(e, 6, ""),
                collectionTiming: r.Message.getFieldWithDefault(e, 7, ""),
                tmplVid: r.Message.getFieldWithDefault(e, 8, ""),
                reflowTagListList: null == (a = r.Message.getRepeatedField(e, 10)) ? undefined : a,
                roomId: r.Message.getFieldWithDefault(e, 11, ""),
                collectionSource: r.Message.getFieldWithDefault(e, 12, 0),
                originalVidUrl: r.Message.getFieldWithDefault(e, 13, ""),
                collectionTag: r.Message.getFieldWithDefault(e, 14, 0),
                episodeId: r.Message.getFieldWithDefault(e, 15, ""),
                shareInfo: r.Message.getFieldWithDefault(e, 16, ""),
                createTime: r.Message.getFieldWithDefault(e, 17, "0"),
                status: r.Message.getFieldWithDefault(e, 18, 0),
                ugShareInfo: r.Message.getFieldWithDefault(e, 19, ""),
                degradeVidUrl: r.Message.getFieldWithDefault(e, 20, ""),
                eventTime: r.Message.getFieldWithDefault(e, 21, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.CollectionItem.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.CollectionItem;
            return proto.webcast.data.CollectionItem.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.CollectionItem.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setCollectionId(a);
                        break;
                    case 2:
                        a = e.readEnum();
                        t.setCollectionType(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setTitle(a);
                        break;
                    case 4:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setCoverImg(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setOriginalVid(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setVideoDuration(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setCollectionTiming(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setTmplVid(a);
                        break;
                    case 10:
                        for (var r = e.isDelimited() ? e.readPackedEnum() : [e.readEnum()], o = 0; o < r.length; o++) t.addReflowTagList(r[o]);
                        break;
                    case 11:
                        a = e.readString();
                        t.setRoomId(a);
                        break;
                    case 12:
                        a = e.readEnum();
                        t.setCollectionSource(a);
                        break;
                    case 13:
                        a = e.readString();
                        t.setOriginalVidUrl(a);
                        break;
                    case 14:
                        a = e.readEnum();
                        t.setCollectionTag(a);
                        break;
                    case 15:
                        a = e.readString();
                        t.setEpisodeId(a);
                        break;
                    case 16:
                        a = e.readString();
                        t.setShareInfo(a);
                        break;
                    case 17:
                        a = e.readInt64String();
                        t.setCreateTime(a);
                        break;
                    case 18:
                        a = e.readInt32();
                        t.setStatus(a);
                        break;
                    case 19:
                        a = e.readString();
                        t.setUgShareInfo(a);
                        break;
                    case 20:
                        a = e.readString();
                        t.setDegradeVidUrl(a);
                        break;
                    case 21:
                        a = e.readInt64String();
                        t.setEventTime(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.CollectionItem.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.CollectionItem.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.CollectionItem.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getCollectionId()).length > 0 && e.writeString(1, a), 0 !== (a = t.getCollectionType()) && e.writeEnum(2, a), (a = t.getTitle()).length > 0 && e.writeString(3, a), null != (a = t.getCoverImg()) && e.writeMessage(4, a, l.Image.serializeBinaryToWriter), (a = t.getOriginalVid()).length > 0 && e.writeString(5, a), (a = t.getVideoDuration()).length > 0 && e.writeString(6, a), (a = t.getCollectionTiming()).length > 0 && e.writeString(7, a), (a = t.getTmplVid()).length > 0 && e.writeString(8, a), (a = t.getReflowTagListList()).length > 0 && e.writePackedEnum(10, a), (a = t.getRoomId()).length > 0 && e.writeString(11, a), 0 !== (a = t.getCollectionSource()) && e.writeEnum(12, a), (a = t.getOriginalVidUrl()).length > 0 && e.writeString(13, a), 0 !== (a = t.getCollectionTag()) && e.writeEnum(14, a), (a = t.getEpisodeId()).length > 0 && e.writeString(15, a), (a = t.getShareInfo()).length > 0 && e.writeString(16, a), a = t.getCreateTime(), 0 !== parseInt(a, 10) && e.writeInt64String(17, a), 0 !== (a = t.getStatus()) && e.writeInt32(18, a), (a = t.getUgShareInfo()).length > 0 && e.writeString(19, a), (a = t.getDegradeVidUrl()).length > 0 && e.writeString(20, a), a = t.getEventTime(), 0 !== parseInt(a, 10) && e.writeInt64String(21, a)
        },proto.webcast.data.CollectionItem.CollectionType = {
            UNKNOWNCOLLECTIONTYPE: 0,
            GRAPHIC: 1,
            VIDEO: 2
        },proto.webcast.data.CollectionItem.ReflowTagType = {
            UNKNOWNREFLOWTAG: 0,
            FRIENDSHARE: 1
        },proto.webcast.data.CollectionItem.CollectionSource = {
            UNKNOWNCOLLECTIONSOURCE: 0,
            COLLBACKGROUND: 1,
            AILAB: 2,
            MARKBACKGROUND: 3
        },proto.webcast.data.CollectionItem.CollectionTag = {
            UNKNOWNCOLLECTIONTAG: 0,
            GOAL: 1,
            OWNGOAL: 2,
            ASSIST: 3,
            YELLOWCARD: 4,
            DOUBLEYELLOCARD: 5,
            REDCARD: 6,
            SUBSTITUTIONIN: 7,
            SUBSTITUTIONOUT: 8,
            PENALTY: 9,
            PENALTYMISSED: 10,
            CANCELLEDGOAL: 11,
            CANCELLEDREDCARD: 12,
            MANUALSCORE: 50,
            MATCHSTART: 51,
            FIRSTHALFEND: 52,
            MATCHEND: 53
        },proto.webcast.data.CollectionItem.prototype.getCollectionId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.CollectionItem.prototype.setCollectionId = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.CollectionItem.prototype.getCollectionType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.CollectionItem.prototype.setCollectionType = function (t) {
            return r.Message.setProto3EnumField(this, 2, t)
        },proto.webcast.data.CollectionItem.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.CollectionItem.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.CollectionItem.prototype.getCoverImg = function () {
            return r.Message.getWrapperField(this, l.Image, 4)
        },proto.webcast.data.CollectionItem.prototype.setCoverImg = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.CollectionItem.prototype.clearCoverImg = function () {
            return this.setCoverImg(undefined)
        },proto.webcast.data.CollectionItem.prototype.hasCoverImg = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.CollectionItem.prototype.getOriginalVid = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.CollectionItem.prototype.setOriginalVid = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.CollectionItem.prototype.getVideoDuration = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.CollectionItem.prototype.setVideoDuration = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.CollectionItem.prototype.getCollectionTiming = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.CollectionItem.prototype.setCollectionTiming = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },proto.webcast.data.CollectionItem.prototype.getTmplVid = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.data.CollectionItem.prototype.setTmplVid = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        },proto.webcast.data.CollectionItem.prototype.getReflowTagListList = function () {
            return r.Message.getRepeatedField(this, 10)
        },proto.webcast.data.CollectionItem.prototype.setReflowTagListList = function (t) {
            return r.Message.setField(this, 10, t || [])
        },proto.webcast.data.CollectionItem.prototype.addReflowTagList = function (t, e) {
            return r.Message.addToRepeatedField(this, 10, t, e)
        },proto.webcast.data.CollectionItem.prototype.clearReflowTagListList = function () {
            return this.setReflowTagListList([])
        },proto.webcast.data.CollectionItem.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        },proto.webcast.data.CollectionItem.prototype.setRoomId = function (t) {
            return r.Message.setProto3StringField(this, 11, t)
        },proto.webcast.data.CollectionItem.prototype.getCollectionSource = function () {
            return r.Message.getFieldWithDefault(this, 12, 0)
        },proto.webcast.data.CollectionItem.prototype.setCollectionSource = function (t) {
            return r.Message.setProto3EnumField(this, 12, t)
        },proto.webcast.data.CollectionItem.prototype.getOriginalVidUrl = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        },proto.webcast.data.CollectionItem.prototype.setOriginalVidUrl = function (t) {
            return r.Message.setProto3StringField(this, 13, t)
        },proto.webcast.data.CollectionItem.prototype.getCollectionTag = function () {
            return r.Message.getFieldWithDefault(this, 14, 0)
        },proto.webcast.data.CollectionItem.prototype.setCollectionTag = function (t) {
            return r.Message.setProto3EnumField(this, 14, t)
        },proto.webcast.data.CollectionItem.prototype.getEpisodeId = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        },proto.webcast.data.CollectionItem.prototype.setEpisodeId = function (t) {
            return r.Message.setProto3StringField(this, 15, t)
        },proto.webcast.data.CollectionItem.prototype.getShareInfo = function () {
            return r.Message.getFieldWithDefault(this, 16, "")
        },proto.webcast.data.CollectionItem.prototype.setShareInfo = function (t) {
            return r.Message.setProto3StringField(this, 16, t)
        },proto.webcast.data.CollectionItem.prototype.getCreateTime = function () {
            return r.Message.getFieldWithDefault(this, 17, "0")
        },proto.webcast.data.CollectionItem.prototype.setCreateTime = function (t) {
            return r.Message.setProto3StringIntField(this, 17, t)
        },proto.webcast.data.CollectionItem.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 18, 0)
        },proto.webcast.data.CollectionItem.prototype.setStatus = function (t) {
            return r.Message.setProto3IntField(this, 18, t)
        },proto.webcast.data.CollectionItem.prototype.getUgShareInfo = function () {
            return r.Message.getFieldWithDefault(this, 19, "")
        },proto.webcast.data.CollectionItem.prototype.setUgShareInfo = function (t) {
            return r.Message.setProto3StringField(this, 19, t)
        },proto.webcast.data.CollectionItem.prototype.getDegradeVidUrl = function () {
            return r.Message.getFieldWithDefault(this, 20, "")
        },proto.webcast.data.CollectionItem.prototype.setDegradeVidUrl = function (t) {
            return r.Message.setProto3StringField(this, 20, t)
        },proto.webcast.data.CollectionItem.prototype.getEventTime = function () {
            return r.Message.getFieldWithDefault(this, 21, "0")
        },proto.webcast.data.CollectionItem.prototype.setEventTime = function (t) {
            return r.Message.setProto3StringIntField(this, 21, t)
        },proto.webcast.data.ShareInfo.repeatedFields_ = [107, 109, 110],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.ShareInfo.prototype.toObject = function (t) {
            return proto.webcast.data.ShareInfo.toObject(t, this)
        }, proto.webcast.data.ShareInfo.toObject = function (t, e) {
            var a, o = {
                effectPanel: r.Message.getFieldWithDefault(e, 100, ""),
                effectCategory: r.Message.getFieldWithDefault(e, 101, ""),
                effectId: r.Message.getFieldWithDefault(e, 102, ""),
                enterFrom: r.Message.getFieldWithDefault(e, 103, ""),
                title1: r.Message.getFieldWithDefault(e, 104, ""),
                title2: r.Message.getFieldWithDefault(e, 105, ""),
                itemId: r.Message.getFieldWithDefault(e, 106, ""),
                backgroundImageUrlListList: null == (a = r.Message.getRepeatedField(e, 107)) ? undefined : a,
                useGradientBackground: r.Message.getBooleanFieldWithDefault(e, 108, !1),
                urlListList: null == (a = r.Message.getRepeatedField(e, 109)) ? undefined : a,
                videoVidListList: null == (a = r.Message.getRepeatedField(e, 110)) ? undefined : a,
                duration: r.Message.getFloatingPointFieldWithDefault(e, 111, 0),
                width: r.Message.getFloatingPointFieldWithDefault(e, 112, 0),
                height: r.Message.getFloatingPointFieldWithDefault(e, 113, 0),
                fps: r.Message.getFloatingPointFieldWithDefault(e, 114, 0),
                bitrate: r.Message.getFloatingPointFieldWithDefault(e, 115, 0),
                currentPlayingUrlKey: r.Message.getFieldWithDefault(e, 116, ""),
                musicId: r.Message.getFieldWithDefault(e, 117, ""),
                jumpUrl: r.Message.getFieldWithDefault(e, 118, ""),
                jumpParamsMap: (a = e.getJumpParamsMap()) ? a.toObject(t, undefined) : [],
                extraInfoMap: (a = e.getExtraInfoMap()) ? a.toObject(t, undefined) : [],
                landingStrategy: r.Message.getFieldWithDefault(e, 121, ""),
                shareFromType: r.Message.getFieldWithDefault(e, 122, ""),
                shareFromKey: r.Message.getFieldWithDefault(e, 123, ""),
                anchor: r.Message.getFieldWithDefault(e, 124, ""),
                hashTagStickerConfigs: r.Message.getFieldWithDefault(e, 125, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.ShareInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.ShareInfo;
            return proto.webcast.data.ShareInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.ShareInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 100:
                        var a = e.readString();
                        t.setEffectPanel(a);
                        break;
                    case 101:
                        a = e.readString();
                        t.setEffectCategory(a);
                        break;
                    case 102:
                        a = e.readString();
                        t.setEffectId(a);
                        break;
                    case 103:
                        a = e.readString();
                        t.setEnterFrom(a);
                        break;
                    case 104:
                        a = e.readString();
                        t.setTitle1(a);
                        break;
                    case 105:
                        a = e.readString();
                        t.setTitle2(a);
                        break;
                    case 106:
                        a = e.readString();
                        t.setItemId(a);
                        break;
                    case 107:
                        a = e.readString();
                        t.addBackgroundImageUrlList(a);
                        break;
                    case 108:
                        a = e.readBool();
                        t.setUseGradientBackground(a);
                        break;
                    case 109:
                        a = e.readString();
                        t.addUrlList(a);
                        break;
                    case 110:
                        a = e.readString();
                        t.addVideoVidList(a);
                        break;
                    case 111:
                        a = e.readFloat();
                        t.setDuration(a);
                        break;
                    case 112:
                        a = e.readFloat();
                        t.setWidth(a);
                        break;
                    case 113:
                        a = e.readFloat();
                        t.setHeight(a);
                        break;
                    case 114:
                        a = e.readFloat();
                        t.setFps(a);
                        break;
                    case 115:
                        a = e.readFloat();
                        t.setBitrate(a);
                        break;
                    case 116:
                        a = e.readString();
                        t.setCurrentPlayingUrlKey(a);
                        break;
                    case 117:
                        a = e.readString();
                        t.setMusicId(a);
                        break;
                    case 118:
                        a = e.readString();
                        t.setJumpUrl(a);
                        break;
                    case 119:
                        a = t.getJumpParamsMap();
                        e.readMessage(a, (function (t, e) {
                            r.Map.deserializeBinary(t, e, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 120:
                        a = t.getExtraInfoMap();
                        e.readMessage(a, (function (t, e) {
                            r.Map.deserializeBinary(t, e, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 121:
                        a = e.readString();
                        t.setLandingStrategy(a);
                        break;
                    case 122:
                        a = e.readString();
                        t.setShareFromType(a);
                        break;
                    case 123:
                        a = e.readString();
                        t.setShareFromKey(a);
                        break;
                    case 124:
                        a = e.readString();
                        t.setAnchor(a);
                        break;
                    case 125:
                        a = e.readString();
                        t.setHashTagStickerConfigs(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.ShareInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.ShareInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.ShareInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getEffectPanel()).length > 0 && e.writeString(100, a), (a = t.getEffectCategory()).length > 0 && e.writeString(101, a), (a = t.getEffectId()).length > 0 && e.writeString(102, a), (a = t.getEnterFrom()).length > 0 && e.writeString(103, a), (a = t.getTitle1()).length > 0 && e.writeString(104, a), (a = t.getTitle2()).length > 0 && e.writeString(105, a), (a = t.getItemId()).length > 0 && e.writeString(106, a), (a = t.getBackgroundImageUrlListList()).length > 0 && e.writeRepeatedString(107, a), (a = t.getUseGradientBackground()) && e.writeBool(108, a), (a = t.getUrlListList()).length > 0 && e.writeRepeatedString(109, a), (a = t.getVideoVidListList()).length > 0 && e.writeRepeatedString(110, a), 0 !== (a = t.getDuration()) && e.writeFloat(111, a), 0 !== (a = t.getWidth()) && e.writeFloat(112, a), 0 !== (a = t.getHeight()) && e.writeFloat(113, a), 0 !== (a = t.getFps()) && e.writeFloat(114, a), 0 !== (a = t.getBitrate()) && e.writeFloat(115, a), (a = t.getCurrentPlayingUrlKey()).length > 0 && e.writeString(116, a), (a = t.getMusicId()).length > 0 && e.writeString(117, a), (a = t.getJumpUrl()).length > 0 && e.writeString(118, a), (a = t.getJumpParamsMap(!0)) && a.getLength() > 0 && a.serializeBinary(119, e, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (a = t.getExtraInfoMap(!0)) && a.getLength() > 0 && a.serializeBinary(120, e, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), (a = t.getLandingStrategy()).length > 0 && e.writeString(121, a), (a = t.getShareFromType()).length > 0 && e.writeString(122, a), (a = t.getShareFromKey()).length > 0 && e.writeString(123, a), (a = t.getAnchor()).length > 0 && e.writeString(124, a), (a = t.getHashTagStickerConfigs()).length > 0 && e.writeString(125, a)
        },proto.webcast.data.ShareInfo.prototype.getEffectPanel = function () {
            return r.Message.getFieldWithDefault(this, 100, "")
        },proto.webcast.data.ShareInfo.prototype.setEffectPanel = function (t) {
            return r.Message.setProto3StringField(this, 100, t)
        },proto.webcast.data.ShareInfo.prototype.getEffectCategory = function () {
            return r.Message.getFieldWithDefault(this, 101, "")
        },proto.webcast.data.ShareInfo.prototype.setEffectCategory = function (t) {
            return r.Message.setProto3StringField(this, 101, t)
        },proto.webcast.data.ShareInfo.prototype.getEffectId = function () {
            return r.Message.getFieldWithDefault(this, 102, "")
        },proto.webcast.data.ShareInfo.prototype.setEffectId = function (t) {
            return r.Message.setProto3StringField(this, 102, t)
        },proto.webcast.data.ShareInfo.prototype.getEnterFrom = function () {
            return r.Message.getFieldWithDefault(this, 103, "")
        },proto.webcast.data.ShareInfo.prototype.setEnterFrom = function (t) {
            return r.Message.setProto3StringField(this, 103, t)
        },proto.webcast.data.ShareInfo.prototype.getTitle1 = function () {
            return r.Message.getFieldWithDefault(this, 104, "")
        },proto.webcast.data.ShareInfo.prototype.setTitle1 = function (t) {
            return r.Message.setProto3StringField(this, 104, t)
        },proto.webcast.data.ShareInfo.prototype.getTitle2 = function () {
            return r.Message.getFieldWithDefault(this, 105, "")
        },proto.webcast.data.ShareInfo.prototype.setTitle2 = function (t) {
            return r.Message.setProto3StringField(this, 105, t)
        },proto.webcast.data.ShareInfo.prototype.getItemId = function () {
            return r.Message.getFieldWithDefault(this, 106, "")
        },proto.webcast.data.ShareInfo.prototype.setItemId = function (t) {
            return r.Message.setProto3StringField(this, 106, t)
        },proto.webcast.data.ShareInfo.prototype.getBackgroundImageUrlListList = function () {
            return r.Message.getRepeatedField(this, 107)
        },proto.webcast.data.ShareInfo.prototype.setBackgroundImageUrlListList = function (t) {
            return r.Message.setField(this, 107, t || [])
        },proto.webcast.data.ShareInfo.prototype.addBackgroundImageUrlList = function (t, e) {
            return r.Message.addToRepeatedField(this, 107, t, e)
        },proto.webcast.data.ShareInfo.prototype.clearBackgroundImageUrlListList = function () {
            return this.setBackgroundImageUrlListList([])
        },proto.webcast.data.ShareInfo.prototype.getUseGradientBackground = function () {
            return r.Message.getBooleanFieldWithDefault(this, 108, !1)
        },proto.webcast.data.ShareInfo.prototype.setUseGradientBackground = function (t) {
            return r.Message.setProto3BooleanField(this, 108, t)
        },proto.webcast.data.ShareInfo.prototype.getUrlListList = function () {
            return r.Message.getRepeatedField(this, 109)
        },proto.webcast.data.ShareInfo.prototype.setUrlListList = function (t) {
            return r.Message.setField(this, 109, t || [])
        },proto.webcast.data.ShareInfo.prototype.addUrlList = function (t, e) {
            return r.Message.addToRepeatedField(this, 109, t, e)
        },proto.webcast.data.ShareInfo.prototype.clearUrlListList = function () {
            return this.setUrlListList([])
        },proto.webcast.data.ShareInfo.prototype.getVideoVidListList = function () {
            return r.Message.getRepeatedField(this, 110)
        },proto.webcast.data.ShareInfo.prototype.setVideoVidListList = function (t) {
            return r.Message.setField(this, 110, t || [])
        },proto.webcast.data.ShareInfo.prototype.addVideoVidList = function (t, e) {
            return r.Message.addToRepeatedField(this, 110, t, e)
        },proto.webcast.data.ShareInfo.prototype.clearVideoVidListList = function () {
            return this.setVideoVidListList([])
        },proto.webcast.data.ShareInfo.prototype.getDuration = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 111, 0)
        },proto.webcast.data.ShareInfo.prototype.setDuration = function (t) {
            return r.Message.setProto3FloatField(this, 111, t)
        },proto.webcast.data.ShareInfo.prototype.getWidth = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 112, 0)
        },proto.webcast.data.ShareInfo.prototype.setWidth = function (t) {
            return r.Message.setProto3FloatField(this, 112, t)
        },proto.webcast.data.ShareInfo.prototype.getHeight = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 113, 0)
        },proto.webcast.data.ShareInfo.prototype.setHeight = function (t) {
            return r.Message.setProto3FloatField(this, 113, t)
        },proto.webcast.data.ShareInfo.prototype.getFps = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 114, 0)
        },proto.webcast.data.ShareInfo.prototype.setFps = function (t) {
            return r.Message.setProto3FloatField(this, 114, t)
        },proto.webcast.data.ShareInfo.prototype.getBitrate = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 115, 0)
        },proto.webcast.data.ShareInfo.prototype.setBitrate = function (t) {
            return r.Message.setProto3FloatField(this, 115, t)
        },proto.webcast.data.ShareInfo.prototype.getCurrentPlayingUrlKey = function () {
            return r.Message.getFieldWithDefault(this, 116, "")
        },proto.webcast.data.ShareInfo.prototype.setCurrentPlayingUrlKey = function (t) {
            return r.Message.setProto3StringField(this, 116, t)
        },proto.webcast.data.ShareInfo.prototype.getMusicId = function () {
            return r.Message.getFieldWithDefault(this, 117, "")
        },proto.webcast.data.ShareInfo.prototype.setMusicId = function (t) {
            return r.Message.setProto3StringField(this, 117, t)
        },proto.webcast.data.ShareInfo.prototype.getJumpUrl = function () {
            return r.Message.getFieldWithDefault(this, 118, "")
        },proto.webcast.data.ShareInfo.prototype.setJumpUrl = function (t) {
            return r.Message.setProto3StringField(this, 118, t)
        },proto.webcast.data.ShareInfo.prototype.getJumpParamsMap = function (t) {
            return r.Message.getMapField(this, 119, t, null)
        },proto.webcast.data.ShareInfo.prototype.clearJumpParamsMap = function () {
            return this.getJumpParamsMap().clear(), this
        },proto.webcast.data.ShareInfo.prototype.getExtraInfoMap = function (t) {
            return r.Message.getMapField(this, 120, t, null)
        },proto.webcast.data.ShareInfo.prototype.clearExtraInfoMap = function () {
            return this.getExtraInfoMap().clear(), this
        },proto.webcast.data.ShareInfo.prototype.getLandingStrategy = function () {
            return r.Message.getFieldWithDefault(this, 121, "")
        },proto.webcast.data.ShareInfo.prototype.setLandingStrategy = function (t) {
            return r.Message.setProto3StringField(this, 121, t)
        },proto.webcast.data.ShareInfo.prototype.getShareFromType = function () {
            return r.Message.getFieldWithDefault(this, 122, "")
        },proto.webcast.data.ShareInfo.prototype.setShareFromType = function (t) {
            return r.Message.setProto3StringField(this, 122, t)
        },proto.webcast.data.ShareInfo.prototype.getShareFromKey = function () {
            return r.Message.getFieldWithDefault(this, 123, "")
        },proto.webcast.data.ShareInfo.prototype.setShareFromKey = function (t) {
            return r.Message.setProto3StringField(this, 123, t)
        },proto.webcast.data.ShareInfo.prototype.getAnchor = function () {
            return r.Message.getFieldWithDefault(this, 124, "")
        },proto.webcast.data.ShareInfo.prototype.setAnchor = function (t) {
            return r.Message.setProto3StringField(this, 124, t)
        },proto.webcast.data.ShareInfo.prototype.getHashTagStickerConfigs = function () {
            return r.Message.getFieldWithDefault(this, 125, "")
        },proto.webcast.data.ShareInfo.prototype.setHashTagStickerConfigs = function (t) {
            return r.Message.setProto3StringField(this, 125, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.SharePosterInfo.prototype.toObject = function (t) {
            return proto.webcast.data.SharePosterInfo.toObject(t, this)
        }, proto.webcast.data.SharePosterInfo.toObject = function (t, e) {
            var a, r = {data: (a = e.getData()) && proto.webcast.data.SharePosterInfo.PosterData.toObject(t, a)};
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.SharePosterInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.SharePosterInfo;
            return proto.webcast.data.SharePosterInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.SharePosterInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = new proto.webcast.data.SharePosterInfo.PosterData;
                    e.readMessage(a, proto.webcast.data.SharePosterInfo.PosterData.deserializeBinaryFromReader), t.setData(a)
                } else e.skipField()
            }
            return t
        },proto.webcast.data.SharePosterInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.SharePosterInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.SharePosterInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getData()) && e.writeMessage(1, a, proto.webcast.data.SharePosterInfo.PosterData.serializeBinaryToWriter)
        },proto.webcast.data.SharePosterInfo.PosterData.repeatedFields_ = [1, 2],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.SharePosterInfo.PosterData.prototype.toObject = function (t) {
            return proto.webcast.data.SharePosterInfo.PosterData.toObject(t, this)
        }, proto.webcast.data.SharePosterInfo.PosterData.toObject = function (t, e) {
            var a = {
                posterList: r.Message.toObjectList(e.getPosterList(), l.Image.toObject, t),
                decoratorList: r.Message.toObjectList(e.getDecoratorList(), l.Image.toObject, t)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.SharePosterInfo.PosterData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.SharePosterInfo.PosterData;
            return proto.webcast.data.SharePosterInfo.PosterData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.SharePosterInfo.PosterData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.addPoster(a);
                        break;
                    case 2:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.addDecorator(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.SharePosterInfo.PosterData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.SharePosterInfo.PosterData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getPosterList()).length > 0 && e.writeRepeatedMessage(1, a, l.Image.serializeBinaryToWriter), (a = t.getDecoratorList()).length > 0 && e.writeRepeatedMessage(2, a, l.Image.serializeBinaryToWriter)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.getPosterList = function () {
            return r.Message.getRepeatedWrapperField(this, l.Image, 1)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.setPosterList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 1, t)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.addPoster = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 1, t, proto.webcast.data.Image, e)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.clearPosterList = function () {
            return this.setPosterList([])
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.getDecoratorList = function () {
            return r.Message.getRepeatedWrapperField(this, l.Image, 2)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.setDecoratorList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 2, t)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.addDecorator = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 2, t, proto.webcast.data.Image, e)
        },proto.webcast.data.SharePosterInfo.PosterData.prototype.clearDecoratorList = function () {
            return this.setDecoratorList([])
        },proto.webcast.data.SharePosterInfo.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.SharePosterInfo.PosterData, 1)
        },proto.webcast.data.SharePosterInfo.prototype.setData = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.SharePosterInfo.prototype.clearData = function () {
            return this.setData(undefined)
        },proto.webcast.data.SharePosterInfo.prototype.hasData = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.BusinessConfigure.prototype.toObject = function (t) {
            return proto.webcast.data.BusinessConfigure.toObject(t, this)
        }, proto.webcast.data.BusinessConfigure.toObject = function (t, e) {
            var a, o = {
                businessid: r.Message.getFieldWithDefault(e, 1, "0"),
                bustype: r.Message.getFieldWithDefault(e, 2, "0"),
                delaysecond: r.Message.getFieldWithDefault(e, 3, 0),
                precisetime: r.Message.getFieldWithDefault(e, 4, "0"),
                displaysecond: r.Message.getFieldWithDefault(e, 5, 0),
                resconfig: (a = e.getResconfig()) && proto.webcast.data.ResourceConfigure.toObject(t, a),
                deltype: r.Message.getFieldWithDefault(e, 7, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.BusinessConfigure.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.BusinessConfigure;
            return proto.webcast.data.BusinessConfigure.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.BusinessConfigure.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setBusinessid(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setBustype(a);
                        break;
                    case 3:
                        a = e.readInt32();
                        t.setDelaysecond(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setPrecisetime(a);
                        break;
                    case 5:
                        a = e.readInt32();
                        t.setDisplaysecond(a);
                        break;
                    case 6:
                        a = new proto.webcast.data.ResourceConfigure;
                        e.readMessage(a, proto.webcast.data.ResourceConfigure.deserializeBinaryFromReader), t.setResconfig(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setDeltype(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.BusinessConfigure.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.BusinessConfigure.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.BusinessConfigure.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getBusinessid(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getBustype(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), 0 !== (a = t.getDelaysecond()) && e.writeInt32(3, a), a = t.getPrecisetime(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), 0 !== (a = t.getDisplaysecond()) && e.writeInt32(5, a), null != (a = t.getResconfig()) && e.writeMessage(6, a, proto.webcast.data.ResourceConfigure.serializeBinaryToWriter), a = t.getDeltype(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a)
        },proto.webcast.data.BusinessConfigure.prototype.getBusinessid = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.BusinessConfigure.prototype.setBusinessid = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.BusinessConfigure.prototype.getBustype = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.BusinessConfigure.prototype.setBustype = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.BusinessConfigure.prototype.getDelaysecond = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.BusinessConfigure.prototype.setDelaysecond = function (t) {
            return r.Message.setProto3IntField(this, 3, t)
        },proto.webcast.data.BusinessConfigure.prototype.getPrecisetime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.BusinessConfigure.prototype.setPrecisetime = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.BusinessConfigure.prototype.getDisplaysecond = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.data.BusinessConfigure.prototype.setDisplaysecond = function (t) {
            return r.Message.setProto3IntField(this, 5, t)
        },proto.webcast.data.BusinessConfigure.prototype.getResconfig = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.ResourceConfigure, 6)
        },proto.webcast.data.BusinessConfigure.prototype.setResconfig = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        },proto.webcast.data.BusinessConfigure.prototype.clearResconfig = function () {
            return this.setResconfig(undefined)
        },proto.webcast.data.BusinessConfigure.prototype.hasResconfig = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.data.BusinessConfigure.prototype.getDeltype = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.BusinessConfigure.prototype.setDeltype = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.ResourceConfigure.prototype.toObject = function (t) {
            return proto.webcast.data.ResourceConfigure.toObject(t, this)
        }, proto.webcast.data.ResourceConfigure.toObject = function (t, e) {
            var a, o = {
                resourceid: r.Message.getFieldWithDefault(e, 1, "0"),
                barrageconf: (a = e.getBarrageconf()) && proto.webcast.data.BarrageConfigure.toObject(t, a),
                screenbarconf: (a = e.getScreenbarconf()) && proto.webcast.data.ScreenBarConfigure.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.ResourceConfigure.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.ResourceConfigure;
            return proto.webcast.data.ResourceConfigure.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.ResourceConfigure.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setResourceid(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.BarrageConfigure;
                        e.readMessage(a, proto.webcast.data.BarrageConfigure.deserializeBinaryFromReader), t.setBarrageconf(a);
                        break;
                    case 3:
                        a = new proto.webcast.data.ScreenBarConfigure;
                        e.readMessage(a, proto.webcast.data.ScreenBarConfigure.deserializeBinaryFromReader), t.setScreenbarconf(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.ResourceConfigure.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.ResourceConfigure.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.ResourceConfigure.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getResourceid(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), null != (a = t.getBarrageconf()) && e.writeMessage(2, a, proto.webcast.data.BarrageConfigure.serializeBinaryToWriter), null != (a = t.getScreenbarconf()) && e.writeMessage(3, a, proto.webcast.data.ScreenBarConfigure.serializeBinaryToWriter)
        },proto.webcast.data.ResourceConfigure.prototype.getResourceid = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.ResourceConfigure.prototype.setResourceid = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.ResourceConfigure.prototype.getBarrageconf = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.BarrageConfigure, 2)
        },proto.webcast.data.ResourceConfigure.prototype.setBarrageconf = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.ResourceConfigure.prototype.clearBarrageconf = function () {
            return this.setBarrageconf(undefined)
        },proto.webcast.data.ResourceConfigure.prototype.hasBarrageconf = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.ResourceConfigure.prototype.getScreenbarconf = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.ScreenBarConfigure, 3)
        },proto.webcast.data.ResourceConfigure.prototype.setScreenbarconf = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.ResourceConfigure.prototype.clearScreenbarconf = function () {
            return this.setScreenbarconf(undefined)
        },proto.webcast.data.ResourceConfigure.prototype.hasScreenbarconf = function () {
            return null != r.Message.getField(this, 3)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.BarrageConfigure.prototype.toObject = function (t) {
            return proto.webcast.data.BarrageConfigure.toObject(t, this)
        }, proto.webcast.data.BarrageConfigure.toObject = function (t, e) {
            var a, o = {
                logo: (a = e.getLogo()) && l.Image.toObject(t, a),
                text: r.Message.getFieldWithDefault(e, 2, ""),
                atomsbgcolor: r.Message.getFieldWithDefault(e, 3, ""),
                atomsframe: r.Message.getFieldWithDefault(e, 4, ""),
                atomstext: r.Message.getFieldWithDefault(e, 5, ""),
                image: (a = e.getImage()) && l.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.BarrageConfigure.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.BarrageConfigure;
            return proto.webcast.data.BarrageConfigure.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.BarrageConfigure.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setLogo(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setText(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setAtomsbgcolor(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setAtomsframe(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setAtomstext(a);
                        break;
                    case 6:
                        a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setImage(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.BarrageConfigure.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.BarrageConfigure.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.BarrageConfigure.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getLogo()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), (a = t.getText()).length > 0 && e.writeString(2, a), (a = t.getAtomsbgcolor()).length > 0 && e.writeString(3, a), (a = t.getAtomsframe()).length > 0 && e.writeString(4, a), (a = t.getAtomstext()).length > 0 && e.writeString(5, a), null != (a = t.getImage()) && e.writeMessage(6, a, l.Image.serializeBinaryToWriter)
        },proto.webcast.data.BarrageConfigure.prototype.getLogo = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.BarrageConfigure.prototype.setLogo = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.BarrageConfigure.prototype.clearLogo = function () {
            return this.setLogo(undefined)
        },proto.webcast.data.BarrageConfigure.prototype.hasLogo = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.BarrageConfigure.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.BarrageConfigure.prototype.setText = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.BarrageConfigure.prototype.getAtomsbgcolor = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.BarrageConfigure.prototype.setAtomsbgcolor = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.BarrageConfigure.prototype.getAtomsframe = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.BarrageConfigure.prototype.setAtomsframe = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.BarrageConfigure.prototype.getAtomstext = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.BarrageConfigure.prototype.setAtomstext = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.BarrageConfigure.prototype.getImage = function () {
            return r.Message.getWrapperField(this, l.Image, 6)
        },proto.webcast.data.BarrageConfigure.prototype.setImage = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        },proto.webcast.data.BarrageConfigure.prototype.clearImage = function () {
            return this.setImage(undefined)
        },proto.webcast.data.BarrageConfigure.prototype.hasImage = function () {
            return null != r.Message.getField(this, 6)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.ScreenBarConfigure.prototype.toObject = function (t) {
            return proto.webcast.data.ScreenBarConfigure.toObject(t, this)
        }, proto.webcast.data.ScreenBarConfigure.toObject = function (t, e) {
            var a, o = {
                image: (a = e.getImage()) && l.Image.toObject(t, a),
                isdynamicimg: r.Message.getFieldWithDefault(e, 2, 0)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.ScreenBarConfigure.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.ScreenBarConfigure;
            return proto.webcast.data.ScreenBarConfigure.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.ScreenBarConfigure.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new l.Image;
                        e.readMessage(a, l.Image.deserializeBinaryFromReader), t.setImage(a);
                        break;
                    case 2:
                        a = e.readInt32();
                        t.setIsdynamicimg(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.ScreenBarConfigure.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.ScreenBarConfigure.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.ScreenBarConfigure.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getImage()) && e.writeMessage(1, a, l.Image.serializeBinaryToWriter), 0 !== (a = t.getIsdynamicimg()) && e.writeInt32(2, a)
        },proto.webcast.data.ScreenBarConfigure.prototype.getImage = function () {
            return r.Message.getWrapperField(this, l.Image, 1)
        },proto.webcast.data.ScreenBarConfigure.prototype.setImage = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.ScreenBarConfigure.prototype.clearImage = function () {
            return this.setImage(undefined)
        },proto.webcast.data.ScreenBarConfigure.prototype.hasImage = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.ScreenBarConfigure.prototype.getIsdynamicimg = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.ScreenBarConfigure.prototype.setIsdynamicimg = function (t) {
            return r.Message.setProto3IntField(this, 2, t)
        },proto.webcast.data.EpisodePremierePlayType = {
            EPISODEPLAYUNKNOWN: 0,
            EPISODEPLAYREAL: 1,
            EPISODEPLAYSTART: 2,
            EPISODEPLAYHIGHLIGHT0: 3,
            EPISODEPLAYHIGHLIGHTRANDOM: 4
        },proto.webcast.data.EpisodePreviewType = {
            EPISODEPREVIEWUNKNOWN: 0,
            EPISODEPREVIEWOLD: 1,
            EPISODEPREVIEWNEW: 2,
            EPISODEPREVIEWGENERAL: 3
        },o.object.extend(e, proto.webcast.data)
    }, 76937: function (t, e, a) {
        var r = a(47865), o = r, s = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), i = a(56523);
        o.object.extend(proto, i);
        var n = a(8411);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.data.Against", null, s), o.exportSymbol("proto.webcast.data.FormationType", null, s), o.exportSymbol("proto.webcast.data.GoalStageDetail", null, s), o.exportSymbol("proto.webcast.data.IncidentType", null, s), o.exportSymbol("proto.webcast.data.MatchDrawer", null, s), o.exportSymbol("proto.webcast.data.MatchShareBackground", null, s), o.exportSymbol("proto.webcast.data.MatchTab", null, s), o.exportSymbol("proto.webcast.data.MatchTitle", null, s), o.exportSymbol("proto.webcast.data.MatchTitle.IconSizeType", null, s), o.exportSymbol("proto.webcast.data.MatchTitle.TitleIcon", null, s), o.exportSymbol("proto.webcast.data.PlayByPlayInfo", null, s), o.exportSymbol("proto.webcast.data.PlayByPlayItemInfo", null, s), o.exportSymbol("proto.webcast.data.PlayerInfo", null, s), o.exportSymbol("proto.webcast.data.PlayerStats", null, s), o.exportSymbol("proto.webcast.data.TeamBaseInfo", null, s), o.exportSymbol("proto.webcast.data.TeamStats", null, s), o.exportSymbol("proto.webcast.data.ToutiaoMatchData", null, s), proto.webcast.data.PlayByPlayItemInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayByPlayItemInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayByPlayItemInfo.displayName = "proto.webcast.data.PlayByPlayItemInfo"), proto.webcast.data.PlayByPlayInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.PlayByPlayInfo.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.PlayByPlayInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayByPlayInfo.displayName = "proto.webcast.data.PlayByPlayInfo"), proto.webcast.data.PlayerInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.PlayerInfo.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.PlayerInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayerInfo.displayName = "proto.webcast.data.PlayerInfo"), proto.webcast.data.GoalStageDetail = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GoalStageDetail, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GoalStageDetail.displayName = "proto.webcast.data.GoalStageDetail"), proto.webcast.data.Against = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.Against.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.Against, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.Against.displayName = "proto.webcast.data.Against"), proto.webcast.data.ToutiaoMatchData = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.ToutiaoMatchData.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.ToutiaoMatchData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.ToutiaoMatchData.displayName = "proto.webcast.data.ToutiaoMatchData"), proto.webcast.data.TeamStats = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.TeamStats, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.TeamStats.displayName = "proto.webcast.data.TeamStats"), proto.webcast.data.PlayerStats = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayerStats, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayerStats.displayName = "proto.webcast.data.PlayerStats"), proto.webcast.data.MatchShareBackground = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MatchShareBackground, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MatchShareBackground.displayName = "proto.webcast.data.MatchShareBackground"), proto.webcast.data.MatchTitle = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MatchTitle, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MatchTitle.displayName = "proto.webcast.data.MatchTitle"), proto.webcast.data.MatchTitle.TitleIcon = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MatchTitle.TitleIcon, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MatchTitle.TitleIcon.displayName = "proto.webcast.data.MatchTitle.TitleIcon"), proto.webcast.data.MatchTab = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MatchTab, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MatchTab.displayName = "proto.webcast.data.MatchTab"), proto.webcast.data.MatchDrawer = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MatchDrawer, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MatchDrawer.displayName = "proto.webcast.data.MatchDrawer"), proto.webcast.data.TeamBaseInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.TeamBaseInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.TeamBaseInfo.displayName = "proto.webcast.data.TeamBaseInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayByPlayItemInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PlayByPlayItemInfo.toObject(t, this)
        }, proto.webcast.data.PlayByPlayItemInfo.toObject = function (t, e) {
            var a = {
                timestamp: r.Message.getFieldWithDefault(e, 1, "0"),
                playerId: r.Message.getFieldWithDefault(e, 2, "0"),
                refPlayerId: r.Message.getFieldWithDefault(e, 3, "0"),
                incidentType: r.Message.getFieldWithDefault(e, 4, 0),
                elapsed: r.Message.getFloatingPointFieldWithDefault(e, 5, 0),
                elapsedPlus: r.Message.getFloatingPointFieldWithDefault(e, 6, 0),
                playerName: r.Message.getFieldWithDefault(e, 7, ""),
                refPlayerName: r.Message.getFieldWithDefault(e, 8, ""),
                playerIdStr: r.Message.getFieldWithDefault(e, 9, ""),
                refPlayerIdStr: r.Message.getFieldWithDefault(e, 10, ""),
                startTimePts: r.Message.getFieldWithDefault(e, 11, "0"),
                endTimePts: r.Message.getFieldWithDefault(e, 12, "0"),
                startTimeSei: r.Message.getFieldWithDefault(e, 13, "0"),
                endTimeSei: r.Message.getFieldWithDefault(e, 14, "0")
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.PlayByPlayItemInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayByPlayItemInfo;
            return proto.webcast.data.PlayByPlayItemInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PlayByPlayItemInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setTimestamp(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setPlayerId(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setRefPlayerId(a);
                        break;
                    case 4:
                        a = e.readEnum();
                        t.setIncidentType(a);
                        break;
                    case 5:
                        a = e.readDouble();
                        t.setElapsed(a);
                        break;
                    case 6:
                        a = e.readDouble();
                        t.setElapsedPlus(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setPlayerName(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setRefPlayerName(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setPlayerIdStr(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setRefPlayerIdStr(a);
                        break;
                    case 11:
                        a = e.readInt64String();
                        t.setStartTimePts(a);
                        break;
                    case 12:
                        a = e.readInt64String();
                        t.setEndTimePts(a);
                        break;
                    case 13:
                        a = e.readInt64String();
                        t.setStartTimeSei(a);
                        break;
                    case 14:
                        a = e.readInt64String();
                        t.setEndTimeSei(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayByPlayItemInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PlayByPlayItemInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getTimestamp(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getPlayerId(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getRefPlayerId(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), 0 !== (a = t.getIncidentType()) && e.writeEnum(4, a), 0 !== (a = t.getElapsed()) && e.writeDouble(5, a), 0 !== (a = t.getElapsedPlus()) && e.writeDouble(6, a), (a = t.getPlayerName()).length > 0 && e.writeString(7, a), (a = t.getRefPlayerName()).length > 0 && e.writeString(8, a), (a = t.getPlayerIdStr()).length > 0 && e.writeString(9, a), (a = t.getRefPlayerIdStr()).length > 0 && e.writeString(10, a), a = t.getStartTimePts(), 0 !== parseInt(a, 10) && e.writeInt64String(11, a), a = t.getEndTimePts(), 0 !== parseInt(a, 10) && e.writeInt64String(12, a), a = t.getStartTimeSei(), 0 !== parseInt(a, 10) && e.writeInt64String(13, a), a = t.getEndTimeSei(), 0 !== parseInt(a, 10) && e.writeInt64String(14, a)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setTimestamp = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getPlayerId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setPlayerId = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getRefPlayerId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setRefPlayerId = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getIncidentType = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setIncidentType = function (t) {
            return r.Message.setProto3EnumField(this, 4, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getElapsed = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 5, 0)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setElapsed = function (t) {
            return r.Message.setProto3FloatField(this, 5, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getElapsedPlus = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 6, 0)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setElapsedPlus = function (t) {
            return r.Message.setProto3FloatField(this, 6, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getPlayerName = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setPlayerName = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getRefPlayerName = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setRefPlayerName = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getPlayerIdStr = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setPlayerIdStr = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getRefPlayerIdStr = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setRefPlayerIdStr = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getStartTimePts = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setStartTimePts = function (t) {
            return r.Message.setProto3StringIntField(this, 11, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getEndTimePts = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setEndTimePts = function (t) {
            return r.Message.setProto3StringIntField(this, 12, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getStartTimeSei = function () {
            return r.Message.getFieldWithDefault(this, 13, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setStartTimeSei = function (t) {
            return r.Message.setProto3StringIntField(this, 13, t)
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.getEndTimeSei = function () {
            return r.Message.getFieldWithDefault(this, 14, "0")
        }, proto.webcast.data.PlayByPlayItemInfo.prototype.setEndTimeSei = function (t) {
            return r.Message.setProto3StringIntField(this, 14, t)
        }, proto.webcast.data.PlayByPlayInfo.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayByPlayInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PlayByPlayInfo.toObject(t, this)
        }, proto.webcast.data.PlayByPlayInfo.toObject = function (t, e) {
            var a = {
                matchId: r.Message.getFieldWithDefault(e, 1, "0"),
                eventListList: r.Message.toObjectList(e.getEventListList(), proto.webcast.data.PlayByPlayItemInfo.toObject, t)
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.PlayByPlayInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayByPlayInfo;
            return proto.webcast.data.PlayByPlayInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PlayByPlayInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setMatchId(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.PlayByPlayItemInfo;
                        e.readMessage(a, proto.webcast.data.PlayByPlayItemInfo.deserializeBinaryFromReader), t.addEventList(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.PlayByPlayInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayByPlayInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PlayByPlayInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getMatchId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getEventListList()).length > 0 && e.writeRepeatedMessage(2, a, proto.webcast.data.PlayByPlayItemInfo.serializeBinaryToWriter)
        }, proto.webcast.data.PlayByPlayInfo.prototype.getMatchId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.PlayByPlayInfo.prototype.setMatchId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.PlayByPlayInfo.prototype.getEventListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.PlayByPlayItemInfo, 2)
        },proto.webcast.data.PlayByPlayInfo.prototype.setEventListList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 2, t)
        },proto.webcast.data.PlayByPlayInfo.prototype.addEventList = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 2, t, proto.webcast.data.PlayByPlayItemInfo, e)
        },proto.webcast.data.PlayByPlayInfo.prototype.clearEventListList = function () {
            return this.setEventListList([])
        },proto.webcast.data.PlayerInfo.repeatedFields_ = [15],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayerInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PlayerInfo.toObject(t, this)
        }, proto.webcast.data.PlayerInfo.toObject = function (t, e) {
            var a, o = {
                id: r.Message.getFieldWithDefault(e, 1, "0"),
                name: r.Message.getFieldWithDefault(e, 2, ""),
                shirt: r.Message.getFieldWithDefault(e, 3, 0),
                position: r.Message.getFieldWithDefault(e, 4, ""),
                lineupType: r.Message.getFieldWithDefault(e, 5, 0),
                portrait: (a = e.getPortrait()) && n.Image.toObject(t, a),
                lastEvent: (a = e.getLastEvent()) && proto.webcast.data.PlayByPlayItemInfo.toObject(t, a),
                xAxis: r.Message.getFloatingPointFieldWithDefault(e, 8, 0),
                yAxis: r.Message.getFloatingPointFieldWithDefault(e, 9, 0),
                positionNum: r.Message.getFieldWithDefault(e, 10, 0),
                playingTime: r.Message.getFloatingPointFieldWithDefault(e, 11, 0),
                playerStats: (a = e.getPlayerStats()) && proto.webcast.data.PlayerStats.toObject(t, a),
                playerIdStr: r.Message.getFieldWithDefault(e, 13, ""),
                lastUpEvent: (a = e.getLastUpEvent()) && proto.webcast.data.PlayByPlayItemInfo.toObject(t, a),
                eventListList: r.Message.toObjectList(e.getEventListList(), proto.webcast.data.PlayByPlayItemInfo.toObject, t),
                age: r.Message.getFieldWithDefault(e, 16, 0),
                worth: r.Message.getFloatingPointFieldWithDefault(e, 17, 0),
                clubName: r.Message.getFieldWithDefault(e, 18, ""),
                superstarFlag: r.Message.getBooleanFieldWithDefault(e, 19, !1),
                superstarImg: (a = e.getSuperstarImg()) && n.Image.toObject(t, a),
                superstarName: r.Message.getFieldWithDefault(e, 21, ""),
                superstarDesc: r.Message.getFieldWithDefault(e, 22, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.PlayerInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayerInfo;
            return proto.webcast.data.PlayerInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.PlayerInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setName(a);
                        break;
                    case 3:
                        a = e.readInt32();
                        t.setShirt(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setPosition(a);
                        break;
                    case 5:
                        a = e.readInt32();
                        t.setLineupType(a);
                        break;
                    case 6:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setPortrait(a);
                        break;
                    case 7:
                        a = new proto.webcast.data.PlayByPlayItemInfo;
                        e.readMessage(a, proto.webcast.data.PlayByPlayItemInfo.deserializeBinaryFromReader), t.setLastEvent(a);
                        break;
                    case 8:
                        a = e.readDouble();
                        t.setXAxis(a);
                        break;
                    case 9:
                        a = e.readDouble();
                        t.setYAxis(a);
                        break;
                    case 10:
                        a = e.readInt32();
                        t.setPositionNum(a);
                        break;
                    case 11:
                        a = e.readDouble();
                        t.setPlayingTime(a);
                        break;
                    case 12:
                        a = new proto.webcast.data.PlayerStats;
                        e.readMessage(a, proto.webcast.data.PlayerStats.deserializeBinaryFromReader), t.setPlayerStats(a);
                        break;
                    case 13:
                        a = e.readString();
                        t.setPlayerIdStr(a);
                        break;
                    case 14:
                        a = new proto.webcast.data.PlayByPlayItemInfo;
                        e.readMessage(a, proto.webcast.data.PlayByPlayItemInfo.deserializeBinaryFromReader), t.setLastUpEvent(a);
                        break;
                    case 15:
                        a = new proto.webcast.data.PlayByPlayItemInfo;
                        e.readMessage(a, proto.webcast.data.PlayByPlayItemInfo.deserializeBinaryFromReader), t.addEventList(a);
                        break;
                    case 16:
                        a = e.readInt32();
                        t.setAge(a);
                        break;
                    case 17:
                        a = e.readDouble();
                        t.setWorth(a);
                        break;
                    case 18:
                        a = e.readString();
                        t.setClubName(a);
                        break;
                    case 19:
                        a = e.readBool();
                        t.setSuperstarFlag(a);
                        break;
                    case 20:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setSuperstarImg(a);
                        break;
                    case 21:
                        a = e.readString();
                        t.setSuperstarName(a);
                        break;
                    case 22:
                        a = e.readString();
                        t.setSuperstarDesc(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.PlayerInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayerInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.PlayerInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getName()).length > 0 && e.writeString(2, a), 0 !== (a = t.getShirt()) && e.writeInt32(3, a), (a = t.getPosition()).length > 0 && e.writeString(4, a), 0 !== (a = t.getLineupType()) && e.writeInt32(5, a), null != (a = t.getPortrait()) && e.writeMessage(6, a, n.Image.serializeBinaryToWriter), null != (a = t.getLastEvent()) && e.writeMessage(7, a, proto.webcast.data.PlayByPlayItemInfo.serializeBinaryToWriter), 0 !== (a = t.getXAxis()) && e.writeDouble(8, a), 0 !== (a = t.getYAxis()) && e.writeDouble(9, a), 0 !== (a = t.getPositionNum()) && e.writeInt32(10, a), 0 !== (a = t.getPlayingTime()) && e.writeDouble(11, a), null != (a = t.getPlayerStats()) && e.writeMessage(12, a, proto.webcast.data.PlayerStats.serializeBinaryToWriter), (a = t.getPlayerIdStr()).length > 0 && e.writeString(13, a), null != (a = t.getLastUpEvent()) && e.writeMessage(14, a, proto.webcast.data.PlayByPlayItemInfo.serializeBinaryToWriter), (a = t.getEventListList()).length > 0 && e.writeRepeatedMessage(15, a, proto.webcast.data.PlayByPlayItemInfo.serializeBinaryToWriter), 0 !== (a = t.getAge()) && e.writeInt32(16, a), 0 !== (a = t.getWorth()) && e.writeDouble(17, a), (a = t.getClubName()).length > 0 && e.writeString(18, a), (a = t.getSuperstarFlag()) && e.writeBool(19, a), null != (a = t.getSuperstarImg()) && e.writeMessage(20, a, n.Image.serializeBinaryToWriter), (a = t.getSuperstarName()).length > 0 && e.writeString(21, a), (a = t.getSuperstarDesc()).length > 0 && e.writeString(22, a)
        },proto.webcast.data.PlayerInfo.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.PlayerInfo.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.PlayerInfo.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.PlayerInfo.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.PlayerInfo.prototype.getShirt = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.PlayerInfo.prototype.setShirt = function (t) {
            return r.Message.setProto3IntField(this, 3, t)
        },proto.webcast.data.PlayerInfo.prototype.getPosition = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.PlayerInfo.prototype.setPosition = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.PlayerInfo.prototype.getLineupType = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.data.PlayerInfo.prototype.setLineupType = function (t) {
            return r.Message.setProto3IntField(this, 5, t)
        },proto.webcast.data.PlayerInfo.prototype.getPortrait = function () {
            return r.Message.getWrapperField(this, n.Image, 6)
        },proto.webcast.data.PlayerInfo.prototype.setPortrait = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        },proto.webcast.data.PlayerInfo.prototype.clearPortrait = function () {
            return this.setPortrait(undefined)
        },proto.webcast.data.PlayerInfo.prototype.hasPortrait = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.data.PlayerInfo.prototype.getLastEvent = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.PlayByPlayItemInfo, 7)
        },proto.webcast.data.PlayerInfo.prototype.setLastEvent = function (t) {
            return r.Message.setWrapperField(this, 7, t)
        },proto.webcast.data.PlayerInfo.prototype.clearLastEvent = function () {
            return this.setLastEvent(undefined)
        },proto.webcast.data.PlayerInfo.prototype.hasLastEvent = function () {
            return null != r.Message.getField(this, 7)
        },proto.webcast.data.PlayerInfo.prototype.getXAxis = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 8, 0)
        },proto.webcast.data.PlayerInfo.prototype.setXAxis = function (t) {
            return r.Message.setProto3FloatField(this, 8, t)
        },proto.webcast.data.PlayerInfo.prototype.getYAxis = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 9, 0)
        },proto.webcast.data.PlayerInfo.prototype.setYAxis = function (t) {
            return r.Message.setProto3FloatField(this, 9, t)
        },proto.webcast.data.PlayerInfo.prototype.getPositionNum = function () {
            return r.Message.getFieldWithDefault(this, 10, 0)
        },proto.webcast.data.PlayerInfo.prototype.setPositionNum = function (t) {
            return r.Message.setProto3IntField(this, 10, t)
        },proto.webcast.data.PlayerInfo.prototype.getPlayingTime = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 11, 0)
        },proto.webcast.data.PlayerInfo.prototype.setPlayingTime = function (t) {
            return r.Message.setProto3FloatField(this, 11, t)
        },proto.webcast.data.PlayerInfo.prototype.getPlayerStats = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.PlayerStats, 12)
        },proto.webcast.data.PlayerInfo.prototype.setPlayerStats = function (t) {
            return r.Message.setWrapperField(this, 12, t)
        },proto.webcast.data.PlayerInfo.prototype.clearPlayerStats = function () {
            return this.setPlayerStats(undefined)
        },proto.webcast.data.PlayerInfo.prototype.hasPlayerStats = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.data.PlayerInfo.prototype.getPlayerIdStr = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        },proto.webcast.data.PlayerInfo.prototype.setPlayerIdStr = function (t) {
            return r.Message.setProto3StringField(this, 13, t)
        },proto.webcast.data.PlayerInfo.prototype.getLastUpEvent = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.PlayByPlayItemInfo, 14)
        },proto.webcast.data.PlayerInfo.prototype.setLastUpEvent = function (t) {
            return r.Message.setWrapperField(this, 14, t)
        },proto.webcast.data.PlayerInfo.prototype.clearLastUpEvent = function () {
            return this.setLastUpEvent(undefined)
        },proto.webcast.data.PlayerInfo.prototype.hasLastUpEvent = function () {
            return null != r.Message.getField(this, 14)
        },proto.webcast.data.PlayerInfo.prototype.getEventListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.PlayByPlayItemInfo, 15)
        },proto.webcast.data.PlayerInfo.prototype.setEventListList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 15, t)
        },proto.webcast.data.PlayerInfo.prototype.addEventList = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 15, t, proto.webcast.data.PlayByPlayItemInfo, e)
        },proto.webcast.data.PlayerInfo.prototype.clearEventListList = function () {
            return this.setEventListList([])
        },proto.webcast.data.PlayerInfo.prototype.getAge = function () {
            return r.Message.getFieldWithDefault(this, 16, 0)
        },proto.webcast.data.PlayerInfo.prototype.setAge = function (t) {
            return r.Message.setProto3IntField(this, 16, t)
        },proto.webcast.data.PlayerInfo.prototype.getWorth = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 17, 0)
        },proto.webcast.data.PlayerInfo.prototype.setWorth = function (t) {
            return r.Message.setProto3FloatField(this, 17, t)
        },proto.webcast.data.PlayerInfo.prototype.getClubName = function () {
            return r.Message.getFieldWithDefault(this, 18, "")
        },proto.webcast.data.PlayerInfo.prototype.setClubName = function (t) {
            return r.Message.setProto3StringField(this, 18, t)
        },proto.webcast.data.PlayerInfo.prototype.getSuperstarFlag = function () {
            return r.Message.getBooleanFieldWithDefault(this, 19, !1)
        },proto.webcast.data.PlayerInfo.prototype.setSuperstarFlag = function (t) {
            return r.Message.setProto3BooleanField(this, 19, t)
        },proto.webcast.data.PlayerInfo.prototype.getSuperstarImg = function () {
            return r.Message.getWrapperField(this, n.Image, 20)
        },proto.webcast.data.PlayerInfo.prototype.setSuperstarImg = function (t) {
            return r.Message.setWrapperField(this, 20, t)
        },proto.webcast.data.PlayerInfo.prototype.clearSuperstarImg = function () {
            return this.setSuperstarImg(undefined)
        },proto.webcast.data.PlayerInfo.prototype.hasSuperstarImg = function () {
            return null != r.Message.getField(this, 20)
        },proto.webcast.data.PlayerInfo.prototype.getSuperstarName = function () {
            return r.Message.getFieldWithDefault(this, 21, "")
        },proto.webcast.data.PlayerInfo.prototype.setSuperstarName = function (t) {
            return r.Message.setProto3StringField(this, 21, t)
        },proto.webcast.data.PlayerInfo.prototype.getSuperstarDesc = function () {
            return r.Message.getFieldWithDefault(this, 22, "")
        },proto.webcast.data.PlayerInfo.prototype.setSuperstarDesc = function (t) {
            return r.Message.setProto3StringField(this, 22, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GoalStageDetail.prototype.toObject = function (t) {
            return proto.webcast.data.GoalStageDetail.toObject(t, this)
        }, proto.webcast.data.GoalStageDetail.toObject = function (t, e) {
            var a = {
                firstHalfGoal: r.Message.getFieldWithDefault(e, 1, ""),
                secondHalfGoal: r.Message.getFieldWithDefault(e, 2, ""),
                overtime: r.Message.getFieldWithDefault(e, 3, ""),
                shots: r.Message.getFieldWithDefault(e, 4, ""),
                total: r.Message.getFieldWithDefault(e, 5, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GoalStageDetail.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GoalStageDetail;
            return proto.webcast.data.GoalStageDetail.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GoalStageDetail.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setFirstHalfGoal(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setSecondHalfGoal(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setOvertime(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setShots(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setTotal(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GoalStageDetail.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GoalStageDetail.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GoalStageDetail.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getFirstHalfGoal()).length > 0 && e.writeString(1, a), (a = t.getSecondHalfGoal()).length > 0 && e.writeString(2, a), (a = t.getOvertime()).length > 0 && e.writeString(3, a), (a = t.getShots()).length > 0 && e.writeString(4, a), (a = t.getTotal()).length > 0 && e.writeString(5, a)
        },proto.webcast.data.GoalStageDetail.prototype.getFirstHalfGoal = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.GoalStageDetail.prototype.setFirstHalfGoal = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.GoalStageDetail.prototype.getSecondHalfGoal = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GoalStageDetail.prototype.setSecondHalfGoal = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.GoalStageDetail.prototype.getOvertime = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.GoalStageDetail.prototype.setOvertime = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.GoalStageDetail.prototype.getShots = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.GoalStageDetail.prototype.setShots = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.GoalStageDetail.prototype.getTotal = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.GoalStageDetail.prototype.setTotal = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.Against.repeatedFields_ = [4, 9],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.Against.prototype.toObject = function (t) {
            return proto.webcast.data.Against.toObject(t, this)
        }, proto.webcast.data.Against.toObject = function (t, e) {
            var a, o = {
                leftName: r.Message.getFieldWithDefault(e, 1, ""),
                leftLogo: (a = e.getLeftLogo()) && n.Image.toObject(t, a),
                leftGoal: r.Message.getFieldWithDefault(e, 3, ""),
                leftPlayersList: r.Message.toObjectList(e.getLeftPlayersList(), proto.webcast.data.PlayerInfo.toObject, t),
                leftGoalStageDetail: (a = e.getLeftGoalStageDetail()) && proto.webcast.data.GoalStageDetail.toObject(t, a),
                rightName: r.Message.getFieldWithDefault(e, 6, ""),
                rightLogo: (a = e.getRightLogo()) && n.Image.toObject(t, a),
                rightGoal: r.Message.getFieldWithDefault(e, 8, ""),
                rightPlayersList: r.Message.toObjectList(e.getRightPlayersList(), proto.webcast.data.PlayerInfo.toObject, t),
                rightGoalStageDetail: (a = e.getRightGoalStageDetail()) && proto.webcast.data.GoalStageDetail.toObject(t, a),
                timestamp: r.Message.getFieldWithDefault(e, 11, "0"),
                version: r.Message.getFieldWithDefault(e, 12, "0"),
                leftTeamId: r.Message.getFieldWithDefault(e, 13, "0"),
                rightTeamId: r.Message.getFieldWithDefault(e, 14, "0"),
                diffSei2absSecond: r.Message.getFieldWithDefault(e, 15, "0"),
                finalGoalStage: r.Message.getFieldWithDefault(e, 16, 0),
                currentGoalStage: r.Message.getFieldWithDefault(e, 17, 0),
                leftScoreAddition: r.Message.getFieldWithDefault(e, 18, 0),
                rightScoreAddition: r.Message.getFieldWithDefault(e, 19, 0),
                leftGoalInt: r.Message.getFieldWithDefault(e, 20, "0"),
                rightGoalInt: r.Message.getFieldWithDefault(e, 21, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.Against.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.Against;
            return proto.webcast.data.Against.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.Against.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setLeftName(a);
                        break;
                    case 2:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setLeftLogo(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setLeftGoal(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.PlayerInfo;
                        e.readMessage(a, proto.webcast.data.PlayerInfo.deserializeBinaryFromReader), t.addLeftPlayers(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.GoalStageDetail;
                        e.readMessage(a, proto.webcast.data.GoalStageDetail.deserializeBinaryFromReader), t.setLeftGoalStageDetail(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setRightName(a);
                        break;
                    case 7:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setRightLogo(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setRightGoal(a);
                        break;
                    case 9:
                        a = new proto.webcast.data.PlayerInfo;
                        e.readMessage(a, proto.webcast.data.PlayerInfo.deserializeBinaryFromReader), t.addRightPlayers(a);
                        break;
                    case 10:
                        a = new proto.webcast.data.GoalStageDetail;
                        e.readMessage(a, proto.webcast.data.GoalStageDetail.deserializeBinaryFromReader), t.setRightGoalStageDetail(a);
                        break;
                    case 11:
                        a = e.readInt64String();
                        t.setTimestamp(a);
                        break;
                    case 12:
                        a = e.readInt64String();
                        t.setVersion(a);
                        break;
                    case 13:
                        a = e.readInt64String();
                        t.setLeftTeamId(a);
                        break;
                    case 14:
                        a = e.readInt64String();
                        t.setRightTeamId(a);
                        break;
                    case 15:
                        a = e.readInt64String();
                        t.setDiffSei2absSecond(a);
                        break;
                    case 16:
                        a = e.readInt32();
                        t.setFinalGoalStage(a);
                        break;
                    case 17:
                        a = e.readInt32();
                        t.setCurrentGoalStage(a);
                        break;
                    case 18:
                        a = e.readInt32();
                        t.setLeftScoreAddition(a);
                        break;
                    case 19:
                        a = e.readInt32();
                        t.setRightScoreAddition(a);
                        break;
                    case 20:
                        a = e.readInt64String();
                        t.setLeftGoalInt(a);
                        break;
                    case 21:
                        a = e.readInt64String();
                        t.setRightGoalInt(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.Against.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.Against.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.Against.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getLeftName()).length > 0 && e.writeString(1, a), null != (a = t.getLeftLogo()) && e.writeMessage(2, a, n.Image.serializeBinaryToWriter), (a = t.getLeftGoal()).length > 0 && e.writeString(3, a), (a = t.getLeftPlayersList()).length > 0 && e.writeRepeatedMessage(4, a, proto.webcast.data.PlayerInfo.serializeBinaryToWriter), null != (a = t.getLeftGoalStageDetail()) && e.writeMessage(5, a, proto.webcast.data.GoalStageDetail.serializeBinaryToWriter), (a = t.getRightName()).length > 0 && e.writeString(6, a), null != (a = t.getRightLogo()) && e.writeMessage(7, a, n.Image.serializeBinaryToWriter), (a = t.getRightGoal()).length > 0 && e.writeString(8, a), (a = t.getRightPlayersList()).length > 0 && e.writeRepeatedMessage(9, a, proto.webcast.data.PlayerInfo.serializeBinaryToWriter), null != (a = t.getRightGoalStageDetail()) && e.writeMessage(10, a, proto.webcast.data.GoalStageDetail.serializeBinaryToWriter), a = t.getTimestamp(), 0 !== parseInt(a, 10) && e.writeInt64String(11, a), a = t.getVersion(), 0 !== parseInt(a, 10) && e.writeInt64String(12, a), a = t.getLeftTeamId(), 0 !== parseInt(a, 10) && e.writeInt64String(13, a), a = t.getRightTeamId(), 0 !== parseInt(a, 10) && e.writeInt64String(14, a), a = t.getDiffSei2absSecond(), 0 !== parseInt(a, 10) && e.writeInt64String(15, a), 0 !== (a = t.getFinalGoalStage()) && e.writeInt32(16, a), 0 !== (a = t.getCurrentGoalStage()) && e.writeInt32(17, a), 0 !== (a = t.getLeftScoreAddition()) && e.writeInt32(18, a), 0 !== (a = t.getRightScoreAddition()) && e.writeInt32(19, a), a = t.getLeftGoalInt(), 0 !== parseInt(a, 10) && e.writeInt64String(20, a), a = t.getRightGoalInt(), 0 !== parseInt(a, 10) && e.writeInt64String(21, a)
        },proto.webcast.data.Against.prototype.getLeftName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.Against.prototype.setLeftName = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.Against.prototype.getLeftLogo = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        },proto.webcast.data.Against.prototype.setLeftLogo = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.Against.prototype.clearLeftLogo = function () {
            return this.setLeftLogo(undefined)
        },proto.webcast.data.Against.prototype.hasLeftLogo = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.Against.prototype.getLeftGoal = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.Against.prototype.setLeftGoal = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.Against.prototype.getLeftPlayersList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.PlayerInfo, 4)
        },proto.webcast.data.Against.prototype.setLeftPlayersList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 4, t)
        },proto.webcast.data.Against.prototype.addLeftPlayers = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 4, t, proto.webcast.data.PlayerInfo, e)
        },proto.webcast.data.Against.prototype.clearLeftPlayersList = function () {
            return this.setLeftPlayersList([])
        },proto.webcast.data.Against.prototype.getLeftGoalStageDetail = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GoalStageDetail, 5)
        },proto.webcast.data.Against.prototype.setLeftGoalStageDetail = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        },proto.webcast.data.Against.prototype.clearLeftGoalStageDetail = function () {
            return this.setLeftGoalStageDetail(undefined)
        },proto.webcast.data.Against.prototype.hasLeftGoalStageDetail = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.data.Against.prototype.getRightName = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.Against.prototype.setRightName = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.Against.prototype.getRightLogo = function () {
            return r.Message.getWrapperField(this, n.Image, 7)
        },proto.webcast.data.Against.prototype.setRightLogo = function (t) {
            return r.Message.setWrapperField(this, 7, t)
        },proto.webcast.data.Against.prototype.clearRightLogo = function () {
            return this.setRightLogo(undefined)
        },proto.webcast.data.Against.prototype.hasRightLogo = function () {
            return null != r.Message.getField(this, 7)
        },proto.webcast.data.Against.prototype.getRightGoal = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.data.Against.prototype.setRightGoal = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        },proto.webcast.data.Against.prototype.getRightPlayersList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.PlayerInfo, 9)
        },proto.webcast.data.Against.prototype.setRightPlayersList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 9, t)
        },proto.webcast.data.Against.prototype.addRightPlayers = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 9, t, proto.webcast.data.PlayerInfo, e)
        },proto.webcast.data.Against.prototype.clearRightPlayersList = function () {
            return this.setRightPlayersList([])
        },proto.webcast.data.Against.prototype.getRightGoalStageDetail = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GoalStageDetail, 10)
        },proto.webcast.data.Against.prototype.setRightGoalStageDetail = function (t) {
            return r.Message.setWrapperField(this, 10, t)
        },proto.webcast.data.Against.prototype.clearRightGoalStageDetail = function () {
            return this.setRightGoalStageDetail(undefined)
        },proto.webcast.data.Against.prototype.hasRightGoalStageDetail = function () {
            return null != r.Message.getField(this, 10)
        },proto.webcast.data.Against.prototype.getTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        },proto.webcast.data.Against.prototype.setTimestamp = function (t) {
            return r.Message.setProto3StringIntField(this, 11, t)
        },proto.webcast.data.Against.prototype.getVersion = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        },proto.webcast.data.Against.prototype.setVersion = function (t) {
            return r.Message.setProto3StringIntField(this, 12, t)
        },proto.webcast.data.Against.prototype.getLeftTeamId = function () {
            return r.Message.getFieldWithDefault(this, 13, "0")
        },proto.webcast.data.Against.prototype.setLeftTeamId = function (t) {
            return r.Message.setProto3StringIntField(this, 13, t)
        },proto.webcast.data.Against.prototype.getRightTeamId = function () {
            return r.Message.getFieldWithDefault(this, 14, "0")
        },proto.webcast.data.Against.prototype.setRightTeamId = function (t) {
            return r.Message.setProto3StringIntField(this, 14, t)
        },proto.webcast.data.Against.prototype.getDiffSei2absSecond = function () {
            return r.Message.getFieldWithDefault(this, 15, "0")
        },proto.webcast.data.Against.prototype.setDiffSei2absSecond = function (t) {
            return r.Message.setProto3StringIntField(this, 15, t)
        },proto.webcast.data.Against.prototype.getFinalGoalStage = function () {
            return r.Message.getFieldWithDefault(this, 16, 0)
        },proto.webcast.data.Against.prototype.setFinalGoalStage = function (t) {
            return r.Message.setProto3IntField(this, 16, t)
        },proto.webcast.data.Against.prototype.getCurrentGoalStage = function () {
            return r.Message.getFieldWithDefault(this, 17, 0)
        },proto.webcast.data.Against.prototype.setCurrentGoalStage = function (t) {
            return r.Message.setProto3IntField(this, 17, t)
        },proto.webcast.data.Against.prototype.getLeftScoreAddition = function () {
            return r.Message.getFieldWithDefault(this, 18, 0)
        },proto.webcast.data.Against.prototype.setLeftScoreAddition = function (t) {
            return r.Message.setProto3IntField(this, 18, t)
        },proto.webcast.data.Against.prototype.getRightScoreAddition = function () {
            return r.Message.getFieldWithDefault(this, 19, 0)
        },proto.webcast.data.Against.prototype.setRightScoreAddition = function (t) {
            return r.Message.setProto3IntField(this, 19, t)
        },proto.webcast.data.Against.prototype.getLeftGoalInt = function () {
            return r.Message.getFieldWithDefault(this, 20, "0")
        },proto.webcast.data.Against.prototype.setLeftGoalInt = function (t) {
            return r.Message.setProto3StringIntField(this, 20, t)
        },proto.webcast.data.Against.prototype.getRightGoalInt = function () {
            return r.Message.getFieldWithDefault(this, 21, "0")
        },proto.webcast.data.Against.prototype.setRightGoalInt = function (t) {
            return r.Message.setProto3StringIntField(this, 21, t)
        },proto.webcast.data.ToutiaoMatchData.repeatedFields_ = [9],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.ToutiaoMatchData.prototype.toObject = function (t) {
            return proto.webcast.data.ToutiaoMatchData.toObject(t, this)
        }, proto.webcast.data.ToutiaoMatchData.toObject = function (t, e) {
            var a, o = {
                matchId: r.Message.getFieldWithDefault(e, 1, "0"),
                matchTitle: r.Message.getFieldWithDefault(e, 2, ""),
                against: (a = e.getAgainst()) && proto.webcast.data.Against.toObject(t, a),
                startedTime: r.Message.getFieldWithDefault(e, 4, ""),
                city: r.Message.getFieldWithDefault(e, 5, ""),
                venueName: r.Message.getFieldWithDefault(e, 6, ""),
                referee: r.Message.getFieldWithDefault(e, 7, ""),
                teamStats: (a = e.getTeamStats()) && proto.webcast.data.TeamStats.toObject(t, a),
                playerStatsList: r.Message.toObjectList(e.getPlayerStatsList(), proto.webcast.data.PlayerStats.toObject, t),
                matchGroup: r.Message.getFieldWithDefault(e, 10, ""),
                matchRound: r.Message.getFieldWithDefault(e, 11, ""),
                matchPhaseName: r.Message.getFieldWithDefault(e, 12, ""),
                canSubscribe: r.Message.getBooleanFieldWithDefault(e, 13, !1),
                displayStatus: r.Message.getFieldWithDefault(e, 14, 0),
                bjtFormat: r.Message.getFieldWithDefault(e, 15, ""),
                localTimeFormat: r.Message.getFieldWithDefault(e, 16, ""),
                liveStatus: r.Message.getFieldWithDefault(e, 17, 0),
                matchStatus: r.Message.getFieldWithDefault(e, 18, 0),
                matchIdStr: r.Message.getFieldWithDefault(e, 19, ""),
                startedTimeUnix: r.Message.getFieldWithDefault(e, 20, "0"),
                leftScoreAddition: r.Message.getFieldWithDefault(e, 21, 0),
                rightScoreAddition: r.Message.getFieldWithDefault(e, 22, 0),
                duration: r.Message.getFieldWithDefault(e, 23, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.ToutiaoMatchData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.ToutiaoMatchData;
            return proto.webcast.data.ToutiaoMatchData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.ToutiaoMatchData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setMatchId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setMatchTitle(a);
                        break;
                    case 3:
                        a = new proto.webcast.data.Against;
                        e.readMessage(a, proto.webcast.data.Against.deserializeBinaryFromReader), t.setAgainst(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setStartedTime(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setCity(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setVenueName(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setReferee(a);
                        break;
                    case 8:
                        a = new proto.webcast.data.TeamStats;
                        e.readMessage(a, proto.webcast.data.TeamStats.deserializeBinaryFromReader), t.setTeamStats(a);
                        break;
                    case 9:
                        a = new proto.webcast.data.PlayerStats;
                        e.readMessage(a, proto.webcast.data.PlayerStats.deserializeBinaryFromReader), t.addPlayerStats(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setMatchGroup(a);
                        break;
                    case 11:
                        a = e.readString();
                        t.setMatchRound(a);
                        break;
                    case 12:
                        a = e.readString();
                        t.setMatchPhaseName(a);
                        break;
                    case 13:
                        a = e.readBool();
                        t.setCanSubscribe(a);
                        break;
                    case 14:
                        a = e.readInt32();
                        t.setDisplayStatus(a);
                        break;
                    case 15:
                        a = e.readString();
                        t.setBjtFormat(a);
                        break;
                    case 16:
                        a = e.readString();
                        t.setLocalTimeFormat(a);
                        break;
                    case 17:
                        a = e.readInt32();
                        t.setLiveStatus(a);
                        break;
                    case 18:
                        a = e.readInt32();
                        t.setMatchStatus(a);
                        break;
                    case 19:
                        a = e.readString();
                        t.setMatchIdStr(a);
                        break;
                    case 20:
                        a = e.readInt64String();
                        t.setStartedTimeUnix(a);
                        break;
                    case 21:
                        a = e.readInt32();
                        t.setLeftScoreAddition(a);
                        break;
                    case 22:
                        a = e.readInt32();
                        t.setRightScoreAddition(a);
                        break;
                    case 23:
                        a = e.readString();
                        t.setDuration(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.ToutiaoMatchData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.ToutiaoMatchData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.ToutiaoMatchData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getMatchId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getMatchTitle()).length > 0 && e.writeString(2, a), null != (a = t.getAgainst()) && e.writeMessage(3, a, proto.webcast.data.Against.serializeBinaryToWriter), (a = t.getStartedTime()).length > 0 && e.writeString(4, a), (a = t.getCity()).length > 0 && e.writeString(5, a), (a = t.getVenueName()).length > 0 && e.writeString(6, a), (a = t.getReferee()).length > 0 && e.writeString(7, a), null != (a = t.getTeamStats()) && e.writeMessage(8, a, proto.webcast.data.TeamStats.serializeBinaryToWriter), (a = t.getPlayerStatsList()).length > 0 && e.writeRepeatedMessage(9, a, proto.webcast.data.PlayerStats.serializeBinaryToWriter), (a = t.getMatchGroup()).length > 0 && e.writeString(10, a), (a = t.getMatchRound()).length > 0 && e.writeString(11, a), (a = t.getMatchPhaseName()).length > 0 && e.writeString(12, a), (a = t.getCanSubscribe()) && e.writeBool(13, a), 0 !== (a = t.getDisplayStatus()) && e.writeInt32(14, a), (a = t.getBjtFormat()).length > 0 && e.writeString(15, a), (a = t.getLocalTimeFormat()).length > 0 && e.writeString(16, a), 0 !== (a = t.getLiveStatus()) && e.writeInt32(17, a), 0 !== (a = t.getMatchStatus()) && e.writeInt32(18, a), (a = t.getMatchIdStr()).length > 0 && e.writeString(19, a), a = t.getStartedTimeUnix(), 0 !== parseInt(a, 10) && e.writeInt64String(20, a), 0 !== (a = t.getLeftScoreAddition()) && e.writeInt32(21, a), 0 !== (a = t.getRightScoreAddition()) && e.writeInt32(22, a), (a = t.getDuration()).length > 0 && e.writeString(23, a)
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchTitle = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchTitle = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getAgainst = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.Against, 3)
        },proto.webcast.data.ToutiaoMatchData.prototype.setAgainst = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.clearAgainst = function () {
            return this.setAgainst(undefined)
        },proto.webcast.data.ToutiaoMatchData.prototype.hasAgainst = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.data.ToutiaoMatchData.prototype.getStartedTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setStartedTime = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getCity = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setCity = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getVenueName = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setVenueName = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getReferee = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setReferee = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getTeamStats = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.TeamStats, 8)
        },proto.webcast.data.ToutiaoMatchData.prototype.setTeamStats = function (t) {
            return r.Message.setWrapperField(this, 8, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.clearTeamStats = function () {
            return this.setTeamStats(undefined)
        },proto.webcast.data.ToutiaoMatchData.prototype.hasTeamStats = function () {
            return null != r.Message.getField(this, 8)
        },proto.webcast.data.ToutiaoMatchData.prototype.getPlayerStatsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.PlayerStats, 9)
        },proto.webcast.data.ToutiaoMatchData.prototype.setPlayerStatsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 9, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.addPlayerStats = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 9, t, proto.webcast.data.PlayerStats, e)
        },proto.webcast.data.ToutiaoMatchData.prototype.clearPlayerStatsList = function () {
            return this.setPlayerStatsList([])
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchGroup = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchGroup = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchRound = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchRound = function (t) {
            return r.Message.setProto3StringField(this, 11, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchPhaseName = function () {
            return r.Message.getFieldWithDefault(this, 12, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchPhaseName = function (t) {
            return r.Message.setProto3StringField(this, 12, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getCanSubscribe = function () {
            return r.Message.getBooleanFieldWithDefault(this, 13, !1)
        },proto.webcast.data.ToutiaoMatchData.prototype.setCanSubscribe = function (t) {
            return r.Message.setProto3BooleanField(this, 13, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getDisplayStatus = function () {
            return r.Message.getFieldWithDefault(this, 14, 0)
        },proto.webcast.data.ToutiaoMatchData.prototype.setDisplayStatus = function (t) {
            return r.Message.setProto3IntField(this, 14, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getBjtFormat = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setBjtFormat = function (t) {
            return r.Message.setProto3StringField(this, 15, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getLocalTimeFormat = function () {
            return r.Message.getFieldWithDefault(this, 16, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setLocalTimeFormat = function (t) {
            return r.Message.setProto3StringField(this, 16, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getLiveStatus = function () {
            return r.Message.getFieldWithDefault(this, 17, 0)
        },proto.webcast.data.ToutiaoMatchData.prototype.setLiveStatus = function (t) {
            return r.Message.setProto3IntField(this, 17, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchStatus = function () {
            return r.Message.getFieldWithDefault(this, 18, 0)
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchStatus = function (t) {
            return r.Message.setProto3IntField(this, 18, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getMatchIdStr = function () {
            return r.Message.getFieldWithDefault(this, 19, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setMatchIdStr = function (t) {
            return r.Message.setProto3StringField(this, 19, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getStartedTimeUnix = function () {
            return r.Message.getFieldWithDefault(this, 20, "0")
        },proto.webcast.data.ToutiaoMatchData.prototype.setStartedTimeUnix = function (t) {
            return r.Message.setProto3StringIntField(this, 20, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getLeftScoreAddition = function () {
            return r.Message.getFieldWithDefault(this, 21, 0)
        },proto.webcast.data.ToutiaoMatchData.prototype.setLeftScoreAddition = function (t) {
            return r.Message.setProto3IntField(this, 21, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getRightScoreAddition = function () {
            return r.Message.getFieldWithDefault(this, 22, 0)
        },proto.webcast.data.ToutiaoMatchData.prototype.setRightScoreAddition = function (t) {
            return r.Message.setProto3IntField(this, 22, t)
        },proto.webcast.data.ToutiaoMatchData.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 23, "")
        },proto.webcast.data.ToutiaoMatchData.prototype.setDuration = function (t) {
            return r.Message.setProto3StringField(this, 23, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.TeamStats.prototype.toObject = function (t) {
            return proto.webcast.data.TeamStats.toObject(t, this)
        }, proto.webcast.data.TeamStats.toObject = function (t, e) {
            var a = {
                teamId: r.Message.getFieldWithDefault(e, 1, "0"),
                possession: r.Message.getFloatingPointFieldWithDefault(e, 2, 0),
                shotOn: r.Message.getFloatingPointFieldWithDefault(e, 3, 0),
                shotOff: r.Message.getFloatingPointFieldWithDefault(e, 4, 0),
                freeKick: r.Message.getFloatingPointFieldWithDefault(e, 5, 0),
                corner: r.Message.getFloatingPointFieldWithDefault(e, 6, 0),
                counter: r.Message.getFloatingPointFieldWithDefault(e, 7, 0),
                saves: r.Message.getFloatingPointFieldWithDefault(e, 8, 0),
                offside: r.Message.getFloatingPointFieldWithDefault(e, 9, 0),
                foulCommit: r.Message.getFloatingPointFieldWithDefault(e, 10, 0),
                yellowCards: r.Message.getFloatingPointFieldWithDefault(e, 11, 0),
                redcards: r.Message.getFloatingPointFieldWithDefault(e, 12, 0),
                pass: r.Message.getFloatingPointFieldWithDefault(e, 13, 0),
                keyPass: r.Message.getFloatingPointFieldWithDefault(e, 14, 0),
                passesCompleted: r.Message.getFloatingPointFieldWithDefault(e, 15, 0),
                steal: r.Message.getFloatingPointFieldWithDefault(e, 16, 0),
                intercept: r.Message.getFloatingPointFieldWithDefault(e, 17, 0),
                shots: r.Message.getFloatingPointFieldWithDefault(e, 18, 0),
                possessionFiveMin: r.Message.getFloatingPointFieldWithDefault(e, 19, 0)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.TeamStats.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.TeamStats;
            return proto.webcast.data.TeamStats.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.TeamStats.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setTeamId(a);
                        break;
                    case 2:
                        a = e.readDouble();
                        t.setPossession(a);
                        break;
                    case 3:
                        a = e.readDouble();
                        t.setShotOn(a);
                        break;
                    case 4:
                        a = e.readDouble();
                        t.setShotOff(a);
                        break;
                    case 5:
                        a = e.readDouble();
                        t.setFreeKick(a);
                        break;
                    case 6:
                        a = e.readDouble();
                        t.setCorner(a);
                        break;
                    case 7:
                        a = e.readDouble();
                        t.setCounter(a);
                        break;
                    case 8:
                        a = e.readDouble();
                        t.setSaves(a);
                        break;
                    case 9:
                        a = e.readDouble();
                        t.setOffside(a);
                        break;
                    case 10:
                        a = e.readDouble();
                        t.setFoulCommit(a);
                        break;
                    case 11:
                        a = e.readDouble();
                        t.setYellowCards(a);
                        break;
                    case 12:
                        a = e.readDouble();
                        t.setRedcards(a);
                        break;
                    case 13:
                        a = e.readDouble();
                        t.setPass(a);
                        break;
                    case 14:
                        a = e.readDouble();
                        t.setKeyPass(a);
                        break;
                    case 15:
                        a = e.readDouble();
                        t.setPassesCompleted(a);
                        break;
                    case 16:
                        a = e.readDouble();
                        t.setSteal(a);
                        break;
                    case 17:
                        a = e.readDouble();
                        t.setIntercept(a);
                        break;
                    case 18:
                        a = e.readDouble();
                        t.setShots(a);
                        break;
                    case 19:
                        a = e.readDouble();
                        t.setPossessionFiveMin(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.TeamStats.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.TeamStats.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.TeamStats.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getTeamId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), 0 !== (a = t.getPossession()) && e.writeDouble(2, a), 0 !== (a = t.getShotOn()) && e.writeDouble(3, a), 0 !== (a = t.getShotOff()) && e.writeDouble(4, a), 0 !== (a = t.getFreeKick()) && e.writeDouble(5, a), 0 !== (a = t.getCorner()) && e.writeDouble(6, a), 0 !== (a = t.getCounter()) && e.writeDouble(7, a), 0 !== (a = t.getSaves()) && e.writeDouble(8, a), 0 !== (a = t.getOffside()) && e.writeDouble(9, a), 0 !== (a = t.getFoulCommit()) && e.writeDouble(10, a), 0 !== (a = t.getYellowCards()) && e.writeDouble(11, a), 0 !== (a = t.getRedcards()) && e.writeDouble(12, a), 0 !== (a = t.getPass()) && e.writeDouble(13, a), 0 !== (a = t.getKeyPass()) && e.writeDouble(14, a), 0 !== (a = t.getPassesCompleted()) && e.writeDouble(15, a), 0 !== (a = t.getSteal()) && e.writeDouble(16, a), 0 !== (a = t.getIntercept()) && e.writeDouble(17, a), 0 !== (a = t.getShots()) && e.writeDouble(18, a), 0 !== (a = t.getPossessionFiveMin()) && e.writeDouble(19, a)
        },proto.webcast.data.TeamStats.prototype.getTeamId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.TeamStats.prototype.setTeamId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.TeamStats.prototype.getPossession = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 2, 0)
        },proto.webcast.data.TeamStats.prototype.setPossession = function (t) {
            return r.Message.setProto3FloatField(this, 2, t)
        },proto.webcast.data.TeamStats.prototype.getShotOn = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 3, 0)
        },proto.webcast.data.TeamStats.prototype.setShotOn = function (t) {
            return r.Message.setProto3FloatField(this, 3, t)
        },proto.webcast.data.TeamStats.prototype.getShotOff = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 4, 0)
        },proto.webcast.data.TeamStats.prototype.setShotOff = function (t) {
            return r.Message.setProto3FloatField(this, 4, t)
        },proto.webcast.data.TeamStats.prototype.getFreeKick = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 5, 0)
        },proto.webcast.data.TeamStats.prototype.setFreeKick = function (t) {
            return r.Message.setProto3FloatField(this, 5, t)
        },proto.webcast.data.TeamStats.prototype.getCorner = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 6, 0)
        },proto.webcast.data.TeamStats.prototype.setCorner = function (t) {
            return r.Message.setProto3FloatField(this, 6, t)
        },proto.webcast.data.TeamStats.prototype.getCounter = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 7, 0)
        },proto.webcast.data.TeamStats.prototype.setCounter = function (t) {
            return r.Message.setProto3FloatField(this, 7, t)
        },proto.webcast.data.TeamStats.prototype.getSaves = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 8, 0)
        },proto.webcast.data.TeamStats.prototype.setSaves = function (t) {
            return r.Message.setProto3FloatField(this, 8, t)
        },proto.webcast.data.TeamStats.prototype.getOffside = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 9, 0)
        },proto.webcast.data.TeamStats.prototype.setOffside = function (t) {
            return r.Message.setProto3FloatField(this, 9, t)
        },proto.webcast.data.TeamStats.prototype.getFoulCommit = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 10, 0)
        },proto.webcast.data.TeamStats.prototype.setFoulCommit = function (t) {
            return r.Message.setProto3FloatField(this, 10, t)
        },proto.webcast.data.TeamStats.prototype.getYellowCards = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 11, 0)
        },proto.webcast.data.TeamStats.prototype.setYellowCards = function (t) {
            return r.Message.setProto3FloatField(this, 11, t)
        },proto.webcast.data.TeamStats.prototype.getRedcards = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 12, 0)
        },proto.webcast.data.TeamStats.prototype.setRedcards = function (t) {
            return r.Message.setProto3FloatField(this, 12, t)
        },proto.webcast.data.TeamStats.prototype.getPass = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 13, 0)
        },proto.webcast.data.TeamStats.prototype.setPass = function (t) {
            return r.Message.setProto3FloatField(this, 13, t)
        },proto.webcast.data.TeamStats.prototype.getKeyPass = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 14, 0)
        },proto.webcast.data.TeamStats.prototype.setKeyPass = function (t) {
            return r.Message.setProto3FloatField(this, 14, t)
        },proto.webcast.data.TeamStats.prototype.getPassesCompleted = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 15, 0)
        },proto.webcast.data.TeamStats.prototype.setPassesCompleted = function (t) {
            return r.Message.setProto3FloatField(this, 15, t)
        },proto.webcast.data.TeamStats.prototype.getSteal = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 16, 0)
        },proto.webcast.data.TeamStats.prototype.setSteal = function (t) {
            return r.Message.setProto3FloatField(this, 16, t)
        },proto.webcast.data.TeamStats.prototype.getIntercept = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 17, 0)
        },proto.webcast.data.TeamStats.prototype.setIntercept = function (t) {
            return r.Message.setProto3FloatField(this, 17, t)
        },proto.webcast.data.TeamStats.prototype.getShots = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 18, 0)
        },proto.webcast.data.TeamStats.prototype.setShots = function (t) {
            return r.Message.setProto3FloatField(this, 18, t)
        },proto.webcast.data.TeamStats.prototype.getPossessionFiveMin = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 19, 0)
        },proto.webcast.data.TeamStats.prototype.setPossessionFiveMin = function (t) {
            return r.Message.setProto3FloatField(this, 19, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayerStats.prototype.toObject = function (t) {
            return proto.webcast.data.PlayerStats.toObject(t, this)
        }, proto.webcast.data.PlayerStats.toObject = function (t, e) {
            var a = {
                playerId: r.Message.getFieldWithDefault(e, 1, "0"),
                teamId: r.Message.getFieldWithDefault(e, 2, "0"),
                minutesPlayed: r.Message.getFloatingPointFieldWithDefault(e, 3, 0),
                goals: r.Message.getFloatingPointFieldWithDefault(e, 4, 0),
                assists: r.Message.getFloatingPointFieldWithDefault(e, 5, 0),
                shots: r.Message.getFloatingPointFieldWithDefault(e, 6, 0),
                shotsOn: r.Message.getFloatingPointFieldWithDefault(e, 7, 0),
                yCards: r.Message.getFloatingPointFieldWithDefault(e, 8, 0),
                rCards: r.Message.getFloatingPointFieldWithDefault(e, 9, 0),
                offsides: r.Message.getFloatingPointFieldWithDefault(e, 10, 0),
                foulsCommitted: r.Message.getFloatingPointFieldWithDefault(e, 11, 0),
                ownGoals: r.Message.getFloatingPointFieldWithDefault(e, 12, 0),
                saves: r.Message.getFloatingPointFieldWithDefault(e, 13, 0),
                caughtBall: r.Message.getFloatingPointFieldWithDefault(e, 14, 0),
                cleanSheets: r.Message.getFloatingPointFieldWithDefault(e, 15, 0),
                pass: r.Message.getFloatingPointFieldWithDefault(e, 16, 0),
                keyPass: r.Message.getFloatingPointFieldWithDefault(e, 17, 0),
                passesCompleted: r.Message.getFloatingPointFieldWithDefault(e, 18, 0),
                steal: r.Message.getFloatingPointFieldWithDefault(e, 19, 0),
                intercept: r.Message.getFloatingPointFieldWithDefault(e, 20, 0),
                clearances: r.Message.getFloatingPointFieldWithDefault(e, 21, 0)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.PlayerStats.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayerStats;
            return proto.webcast.data.PlayerStats.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.PlayerStats.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setPlayerId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setTeamId(a);
                        break;
                    case 3:
                        a = e.readDouble();
                        t.setMinutesPlayed(a);
                        break;
                    case 4:
                        a = e.readDouble();
                        t.setGoals(a);
                        break;
                    case 5:
                        a = e.readDouble();
                        t.setAssists(a);
                        break;
                    case 6:
                        a = e.readDouble();
                        t.setShots(a);
                        break;
                    case 7:
                        a = e.readDouble();
                        t.setShotsOn(a);
                        break;
                    case 8:
                        a = e.readDouble();
                        t.setYCards(a);
                        break;
                    case 9:
                        a = e.readDouble();
                        t.setRCards(a);
                        break;
                    case 10:
                        a = e.readDouble();
                        t.setOffsides(a);
                        break;
                    case 11:
                        a = e.readDouble();
                        t.setFoulsCommitted(a);
                        break;
                    case 12:
                        a = e.readDouble();
                        t.setOwnGoals(a);
                        break;
                    case 13:
                        a = e.readDouble();
                        t.setSaves(a);
                        break;
                    case 14:
                        a = e.readDouble();
                        t.setCaughtBall(a);
                        break;
                    case 15:
                        a = e.readDouble();
                        t.setCleanSheets(a);
                        break;
                    case 16:
                        a = e.readDouble();
                        t.setPass(a);
                        break;
                    case 17:
                        a = e.readDouble();
                        t.setKeyPass(a);
                        break;
                    case 18:
                        a = e.readDouble();
                        t.setPassesCompleted(a);
                        break;
                    case 19:
                        a = e.readDouble();
                        t.setSteal(a);
                        break;
                    case 20:
                        a = e.readDouble();
                        t.setIntercept(a);
                        break;
                    case 21:
                        a = e.readDouble();
                        t.setClearances(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.PlayerStats.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayerStats.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.PlayerStats.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getPlayerId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getTeamId(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), 0 !== (a = t.getMinutesPlayed()) && e.writeDouble(3, a), 0 !== (a = t.getGoals()) && e.writeDouble(4, a), 0 !== (a = t.getAssists()) && e.writeDouble(5, a), 0 !== (a = t.getShots()) && e.writeDouble(6, a), 0 !== (a = t.getShotsOn()) && e.writeDouble(7, a), 0 !== (a = t.getYCards()) && e.writeDouble(8, a), 0 !== (a = t.getRCards()) && e.writeDouble(9, a), 0 !== (a = t.getOffsides()) && e.writeDouble(10, a), 0 !== (a = t.getFoulsCommitted()) && e.writeDouble(11, a), 0 !== (a = t.getOwnGoals()) && e.writeDouble(12, a), 0 !== (a = t.getSaves()) && e.writeDouble(13, a), 0 !== (a = t.getCaughtBall()) && e.writeDouble(14, a), 0 !== (a = t.getCleanSheets()) && e.writeDouble(15, a), 0 !== (a = t.getPass()) && e.writeDouble(16, a), 0 !== (a = t.getKeyPass()) && e.writeDouble(17, a), 0 !== (a = t.getPassesCompleted()) && e.writeDouble(18, a), 0 !== (a = t.getSteal()) && e.writeDouble(19, a), 0 !== (a = t.getIntercept()) && e.writeDouble(20, a), 0 !== (a = t.getClearances()) && e.writeDouble(21, a)
        },proto.webcast.data.PlayerStats.prototype.getPlayerId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.PlayerStats.prototype.setPlayerId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.PlayerStats.prototype.getTeamId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.PlayerStats.prototype.setTeamId = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.PlayerStats.prototype.getMinutesPlayed = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 3, 0)
        },proto.webcast.data.PlayerStats.prototype.setMinutesPlayed = function (t) {
            return r.Message.setProto3FloatField(this, 3, t)
        },proto.webcast.data.PlayerStats.prototype.getGoals = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 4, 0)
        },proto.webcast.data.PlayerStats.prototype.setGoals = function (t) {
            return r.Message.setProto3FloatField(this, 4, t)
        },proto.webcast.data.PlayerStats.prototype.getAssists = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 5, 0)
        },proto.webcast.data.PlayerStats.prototype.setAssists = function (t) {
            return r.Message.setProto3FloatField(this, 5, t)
        },proto.webcast.data.PlayerStats.prototype.getShots = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 6, 0)
        },proto.webcast.data.PlayerStats.prototype.setShots = function (t) {
            return r.Message.setProto3FloatField(this, 6, t)
        },proto.webcast.data.PlayerStats.prototype.getShotsOn = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 7, 0)
        },proto.webcast.data.PlayerStats.prototype.setShotsOn = function (t) {
            return r.Message.setProto3FloatField(this, 7, t)
        },proto.webcast.data.PlayerStats.prototype.getYCards = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 8, 0)
        },proto.webcast.data.PlayerStats.prototype.setYCards = function (t) {
            return r.Message.setProto3FloatField(this, 8, t)
        },proto.webcast.data.PlayerStats.prototype.getRCards = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 9, 0)
        },proto.webcast.data.PlayerStats.prototype.setRCards = function (t) {
            return r.Message.setProto3FloatField(this, 9, t)
        },proto.webcast.data.PlayerStats.prototype.getOffsides = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 10, 0)
        },proto.webcast.data.PlayerStats.prototype.setOffsides = function (t) {
            return r.Message.setProto3FloatField(this, 10, t)
        },proto.webcast.data.PlayerStats.prototype.getFoulsCommitted = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 11, 0)
        },proto.webcast.data.PlayerStats.prototype.setFoulsCommitted = function (t) {
            return r.Message.setProto3FloatField(this, 11, t)
        },proto.webcast.data.PlayerStats.prototype.getOwnGoals = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 12, 0)
        },proto.webcast.data.PlayerStats.prototype.setOwnGoals = function (t) {
            return r.Message.setProto3FloatField(this, 12, t)
        },proto.webcast.data.PlayerStats.prototype.getSaves = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 13, 0)
        },proto.webcast.data.PlayerStats.prototype.setSaves = function (t) {
            return r.Message.setProto3FloatField(this, 13, t)
        },proto.webcast.data.PlayerStats.prototype.getCaughtBall = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 14, 0)
        },proto.webcast.data.PlayerStats.prototype.setCaughtBall = function (t) {
            return r.Message.setProto3FloatField(this, 14, t)
        },proto.webcast.data.PlayerStats.prototype.getCleanSheets = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 15, 0)
        },proto.webcast.data.PlayerStats.prototype.setCleanSheets = function (t) {
            return r.Message.setProto3FloatField(this, 15, t)
        },proto.webcast.data.PlayerStats.prototype.getPass = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 16, 0)
        },proto.webcast.data.PlayerStats.prototype.setPass = function (t) {
            return r.Message.setProto3FloatField(this, 16, t)
        },proto.webcast.data.PlayerStats.prototype.getKeyPass = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 17, 0)
        },proto.webcast.data.PlayerStats.prototype.setKeyPass = function (t) {
            return r.Message.setProto3FloatField(this, 17, t)
        },proto.webcast.data.PlayerStats.prototype.getPassesCompleted = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 18, 0)
        },proto.webcast.data.PlayerStats.prototype.setPassesCompleted = function (t) {
            return r.Message.setProto3FloatField(this, 18, t)
        },proto.webcast.data.PlayerStats.prototype.getSteal = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 19, 0)
        },proto.webcast.data.PlayerStats.prototype.setSteal = function (t) {
            return r.Message.setProto3FloatField(this, 19, t)
        },proto.webcast.data.PlayerStats.prototype.getIntercept = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 20, 0)
        },proto.webcast.data.PlayerStats.prototype.setIntercept = function (t) {
            return r.Message.setProto3FloatField(this, 20, t)
        },proto.webcast.data.PlayerStats.prototype.getClearances = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 21, 0)
        },proto.webcast.data.PlayerStats.prototype.setClearances = function (t) {
            return r.Message.setProto3FloatField(this, 21, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MatchShareBackground.prototype.toObject = function (t) {
            return proto.webcast.data.MatchShareBackground.toObject(t, this)
        }, proto.webcast.data.MatchShareBackground.toObject = function (t, e) {
            var a, r = {
                verticalImg: (a = e.getVerticalImg()) && n.Image.toObject(t, a),
                horizontalImg: (a = e.getHorizontalImg()) && n.Image.toObject(t, a)
            };
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.MatchShareBackground.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MatchShareBackground;
            return proto.webcast.data.MatchShareBackground.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MatchShareBackground.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setVerticalImg(a);
                        break;
                    case 2:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setHorizontalImg(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MatchShareBackground.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MatchShareBackground.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MatchShareBackground.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getVerticalImg()) && e.writeMessage(1, a, n.Image.serializeBinaryToWriter), null != (a = t.getHorizontalImg()) && e.writeMessage(2, a, n.Image.serializeBinaryToWriter)
        },proto.webcast.data.MatchShareBackground.prototype.getVerticalImg = function () {
            return r.Message.getWrapperField(this, n.Image, 1)
        },proto.webcast.data.MatchShareBackground.prototype.setVerticalImg = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.MatchShareBackground.prototype.clearVerticalImg = function () {
            return this.setVerticalImg(undefined)
        },proto.webcast.data.MatchShareBackground.prototype.hasVerticalImg = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.MatchShareBackground.prototype.getHorizontalImg = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        },proto.webcast.data.MatchShareBackground.prototype.setHorizontalImg = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.MatchShareBackground.prototype.clearHorizontalImg = function () {
            return this.setHorizontalImg(undefined)
        },proto.webcast.data.MatchShareBackground.prototype.hasHorizontalImg = function () {
            return null != r.Message.getField(this, 2)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MatchTitle.prototype.toObject = function (t) {
            return proto.webcast.data.MatchTitle.toObject(t, this)
        }, proto.webcast.data.MatchTitle.toObject = function (t, e) {
            var a, o = {
                roomTitle: r.Message.getFieldWithDefault(e, 1, ""),
                titleIcon: (a = e.getTitleIcon()) && proto.webcast.data.MatchTitle.TitleIcon.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.MatchTitle.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MatchTitle;
            return proto.webcast.data.MatchTitle.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MatchTitle.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setRoomTitle(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.MatchTitle.TitleIcon;
                        e.readMessage(a, proto.webcast.data.MatchTitle.TitleIcon.deserializeBinaryFromReader), t.setTitleIcon(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MatchTitle.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MatchTitle.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MatchTitle.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getRoomTitle()).length > 0 && e.writeString(1, a), null != (a = t.getTitleIcon()) && e.writeMessage(2, a, proto.webcast.data.MatchTitle.TitleIcon.serializeBinaryToWriter)
        },proto.webcast.data.MatchTitle.IconSizeType = {
            UNKNOWNICONTYPE: 0,
            SMALL: 1,
            MEDIUM: 2,
            LARGE: 3
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MatchTitle.TitleIcon.prototype.toObject = function (t) {
            return proto.webcast.data.MatchTitle.TitleIcon.toObject(t, this)
        }, proto.webcast.data.MatchTitle.TitleIcon.toObject = function (t, e) {
            var a = {url: r.Message.getFieldWithDefault(e, 1, ""), sizeType: r.Message.getFieldWithDefault(e, 2, 0)};
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.MatchTitle.TitleIcon.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MatchTitle.TitleIcon;
            return proto.webcast.data.MatchTitle.TitleIcon.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MatchTitle.TitleIcon.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setUrl(a);
                        break;
                    case 2:
                        a = e.readEnum();
                        t.setSizeType(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MatchTitle.TitleIcon.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MatchTitle.TitleIcon.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MatchTitle.TitleIcon.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getUrl()).length > 0 && e.writeString(1, a), 0 !== (a = t.getSizeType()) && e.writeEnum(2, a)
        },proto.webcast.data.MatchTitle.TitleIcon.prototype.getUrl = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.MatchTitle.TitleIcon.prototype.setUrl = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.MatchTitle.TitleIcon.prototype.getSizeType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.MatchTitle.TitleIcon.prototype.setSizeType = function (t) {
            return r.Message.setProto3EnumField(this, 2, t)
        },proto.webcast.data.MatchTitle.prototype.getRoomTitle = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.MatchTitle.prototype.setRoomTitle = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.MatchTitle.prototype.getTitleIcon = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.MatchTitle.TitleIcon, 2)
        },proto.webcast.data.MatchTitle.prototype.setTitleIcon = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.MatchTitle.prototype.clearTitleIcon = function () {
            return this.setTitleIcon(undefined)
        },proto.webcast.data.MatchTitle.prototype.hasTitleIcon = function () {
            return null != r.Message.getField(this, 2)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MatchTab.prototype.toObject = function (t) {
            return proto.webcast.data.MatchTab.toObject(t, this)
        }, proto.webcast.data.MatchTab.toObject = function (t, e) {
            var a = {
                title: r.Message.getFieldWithDefault(e, 1, ""),
                schema: r.Message.getFieldWithDefault(e, 2, ""),
                id: r.Message.getFieldWithDefault(e, 3, "0")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.MatchTab.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MatchTab;
            return proto.webcast.data.MatchTab.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MatchTab.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setTitle(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setSchema(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setId(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MatchTab.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MatchTab.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MatchTab.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getTitle()).length > 0 && e.writeString(1, a), (a = t.getSchema()).length > 0 && e.writeString(2, a), a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a)
        },proto.webcast.data.MatchTab.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.MatchTab.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.MatchTab.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.MatchTab.prototype.setSchema = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.MatchTab.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.MatchTab.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MatchDrawer.prototype.toObject = function (t) {
            return proto.webcast.data.MatchDrawer.toObject(t, this)
        }, proto.webcast.data.MatchDrawer.toObject = function (t, e) {
            var a, o = {
                entryName: r.Message.getFieldWithDefault(e, 1, ""),
                entryIcon: (a = e.getEntryIcon()) && n.Image.toObject(t, a),
                drawerTitle: r.Message.getFieldWithDefault(e, 3, ""),
                drawerBackground: (a = e.getDrawerBackground()) && n.Image.toObject(t, a),
                returnBtnText: r.Message.getFieldWithDefault(e, 5, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.MatchDrawer.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MatchDrawer;
            return proto.webcast.data.MatchDrawer.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MatchDrawer.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setEntryName(a);
                        break;
                    case 2:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setEntryIcon(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setDrawerTitle(a);
                        break;
                    case 4:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setDrawerBackground(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setReturnBtnText(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MatchDrawer.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MatchDrawer.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MatchDrawer.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getEntryName()).length > 0 && e.writeString(1, a), null != (a = t.getEntryIcon()) && e.writeMessage(2, a, n.Image.serializeBinaryToWriter), (a = t.getDrawerTitle()).length > 0 && e.writeString(3, a), null != (a = t.getDrawerBackground()) && e.writeMessage(4, a, n.Image.serializeBinaryToWriter), (a = t.getReturnBtnText()).length > 0 && e.writeString(5, a)
        },proto.webcast.data.MatchDrawer.prototype.getEntryName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.MatchDrawer.prototype.setEntryName = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.MatchDrawer.prototype.getEntryIcon = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        },proto.webcast.data.MatchDrawer.prototype.setEntryIcon = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.MatchDrawer.prototype.clearEntryIcon = function () {
            return this.setEntryIcon(undefined)
        },proto.webcast.data.MatchDrawer.prototype.hasEntryIcon = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.MatchDrawer.prototype.getDrawerTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.MatchDrawer.prototype.setDrawerTitle = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.MatchDrawer.prototype.getDrawerBackground = function () {
            return r.Message.getWrapperField(this, n.Image, 4)
        },proto.webcast.data.MatchDrawer.prototype.setDrawerBackground = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.MatchDrawer.prototype.clearDrawerBackground = function () {
            return this.setDrawerBackground(undefined)
        },proto.webcast.data.MatchDrawer.prototype.hasDrawerBackground = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.MatchDrawer.prototype.getReturnBtnText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.MatchDrawer.prototype.setReturnBtnText = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.TeamBaseInfo.prototype.toObject = function (t) {
            return proto.webcast.data.TeamBaseInfo.toObject(t, this)
        }, proto.webcast.data.TeamBaseInfo.toObject = function (t, e) {
            var a, o = {
                teamName: r.Message.getFieldWithDefault(e, 1, ""),
                teamFlagUrl: (a = e.getTeamFlagUrl()) && n.Image.toObject(t, a),
                teamColor: r.Message.getFieldWithDefault(e, 3, ""),
                teamId: r.Message.getFieldWithDefault(e, 4, "0"),
                teamIdStr: r.Message.getFieldWithDefault(e, 5, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.TeamBaseInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.TeamBaseInfo;
            return proto.webcast.data.TeamBaseInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.TeamBaseInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setTeamName(a);
                        break;
                    case 2:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setTeamFlagUrl(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setTeamColor(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setTeamId(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setTeamIdStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.TeamBaseInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.TeamBaseInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.TeamBaseInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getTeamName()).length > 0 && e.writeString(1, a), null != (a = t.getTeamFlagUrl()) && e.writeMessage(2, a, n.Image.serializeBinaryToWriter), (a = t.getTeamColor()).length > 0 && e.writeString(3, a), a = t.getTeamId(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), (a = t.getTeamIdStr()).length > 0 && e.writeString(5, a)
        },proto.webcast.data.TeamBaseInfo.prototype.getTeamName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.TeamBaseInfo.prototype.setTeamName = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.TeamBaseInfo.prototype.getTeamFlagUrl = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        },proto.webcast.data.TeamBaseInfo.prototype.setTeamFlagUrl = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.TeamBaseInfo.prototype.clearTeamFlagUrl = function () {
            return this.setTeamFlagUrl(undefined)
        },proto.webcast.data.TeamBaseInfo.prototype.hasTeamFlagUrl = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.TeamBaseInfo.prototype.getTeamColor = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.TeamBaseInfo.prototype.setTeamColor = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.TeamBaseInfo.prototype.getTeamId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.TeamBaseInfo.prototype.setTeamId = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.TeamBaseInfo.prototype.getTeamIdStr = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.TeamBaseInfo.prototype.setTeamIdStr = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.IncidentType = {
            UNKNOWN: 0,
            GOAL: 1,
            OWN_GOAL: 2,
            ASSIST: 3,
            YELLOW_CARD: 4,
            DOUBLE_YELLOW_CARD: 5,
            RED_CARD: 6,
            SUBSTITUTION_IN: 7,
            SUBSTITUTION_OUT: 8,
            PENALTY: 9,
            PENALTY_MISSED: 10,
            CANCELLED_GOAL: 11,
            CANCELLED_RED_GOAL: 12,
            INJURY_OUT: 13
        },proto.webcast.data.FormationType = {
            UNKNOWN_FORMATION: 0,
            STARTING_FORMATION: 1,
            REALTIME_FORMATION: 2
        },o.object.extend(e, proto.webcast.data)
    }
}]);