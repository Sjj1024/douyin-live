(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6112], {
    95119: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(8411);
        o.object.extend(proto, s);
        var n = a(64925);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.data.OrderAuditStatus", null, i), o.exportSymbol("proto.webcast.data.PlayConfigInfo", null, i), o.exportSymbol("proto.webcast.data.PlayGameInfo", null, i), o.exportSymbol("proto.webcast.data.PlayMemberStatus", null, i), o.exportSymbol("proto.webcast.data.PlayMetaInfo", null, i), o.exportSymbol("proto.webcast.data.PlayRecord", null, i), o.exportSymbol("proto.webcast.data.PlayReportTag", null, i), o.exportSymbol("proto.webcast.data.PlayServiceType", null, i), o.exportSymbol("proto.webcast.data.PlayStatus", null, i), o.exportSymbol("proto.webcast.data.PlayTeamMember", null, i), proto.webcast.data.PlayGameInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayGameInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayGameInfo.displayName = "proto.webcast.data.PlayGameInfo"), proto.webcast.data.PlayConfigInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.PlayConfigInfo.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.PlayConfigInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayConfigInfo.displayName = "proto.webcast.data.PlayConfigInfo"), proto.webcast.data.PlayMetaInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayMetaInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayMetaInfo.displayName = "proto.webcast.data.PlayMetaInfo"), proto.webcast.data.PlayRecord = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayRecord, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayRecord.displayName = "proto.webcast.data.PlayRecord"), proto.webcast.data.PlayTeamMember = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayTeamMember, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayTeamMember.displayName = "proto.webcast.data.PlayTeamMember"), proto.webcast.data.PlayReportTag = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PlayReportTag, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PlayReportTag.displayName = "proto.webcast.data.PlayReportTag"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayGameInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PlayGameInfo.toObject(t, this)
        }, proto.webcast.data.PlayGameInfo.toObject = function (t, e) {
            var a, o = {
                gameId: r.Message.getFieldWithDefault(e, 1, ""),
                gameStoreSchema: r.Message.getFieldWithDefault(e, 2, ""),
                gameCheckAuthoritySchema: r.Message.getFieldWithDefault(e, 3, ""),
                gameName: r.Message.getFieldWithDefault(e, 4, ""),
                gameIcon: (a = e.getGameIcon()) && s.Image.toObject(t, a),
                gameDesc: r.Message.getFieldWithDefault(e, 6, ""),
                gamePackageNameAndroid: r.Message.getFieldWithDefault(e, 7, ""),
                gamePackageNameIos: r.Message.getFieldWithDefault(e, 8, ""),
                gameLauncherSchema: r.Message.getFieldWithDefault(e, 9, ""),
                clientKey: r.Message.getFieldWithDefault(e, 10, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.PlayGameInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayGameInfo;
            return proto.webcast.data.PlayGameInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PlayGameInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setGameId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setGameStoreSchema(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setGameCheckAuthoritySchema(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setGameName(a);
                        break;
                    case 5:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setGameIcon(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setGameDesc(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setGamePackageNameAndroid(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setGamePackageNameIos(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setGameLauncherSchema(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setClientKey(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.PlayGameInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayGameInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PlayGameInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getGameId()).length > 0 && e.writeString(1, a), (a = t.getGameStoreSchema()).length > 0 && e.writeString(2, a), (a = t.getGameCheckAuthoritySchema()).length > 0 && e.writeString(3, a), (a = t.getGameName()).length > 0 && e.writeString(4, a), null != (a = t.getGameIcon()) && e.writeMessage(5, a, s.Image.serializeBinaryToWriter), (a = t.getGameDesc()).length > 0 && e.writeString(6, a), (a = t.getGamePackageNameAndroid()).length > 0 && e.writeString(7, a), (a = t.getGamePackageNameIos()).length > 0 && e.writeString(8, a), (a = t.getGameLauncherSchema()).length > 0 && e.writeString(9, a), (a = t.getClientKey()).length > 0 && e.writeString(10, a)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGameId = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameStoreSchema = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGameStoreSchema = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameCheckAuthoritySchema = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGameCheckAuthoritySchema = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameName = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGameName = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        }, proto.webcast.data.PlayGameInfo.prototype.setGameIcon = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        }, proto.webcast.data.PlayGameInfo.prototype.clearGameIcon = function () {
            return this.setGameIcon(undefined)
        }, proto.webcast.data.PlayGameInfo.prototype.hasGameIcon = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameDesc = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGameDesc = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGamePackageNameAndroid = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGamePackageNameAndroid = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGamePackageNameIos = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGamePackageNameIos = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getGameLauncherSchema = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setGameLauncherSchema = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        }, proto.webcast.data.PlayGameInfo.prototype.getClientKey = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        }, proto.webcast.data.PlayGameInfo.prototype.setClientKey = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        }, proto.webcast.data.PlayConfigInfo.repeatedFields_ = [1, 4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayConfigInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PlayConfigInfo.toObject(t, this)
        }, proto.webcast.data.PlayConfigInfo.toObject = function (t, e) {
            var a, o = {
                supportGameIdsList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a,
                descHint: r.Message.getFieldWithDefault(e, 2, ""),
                descLimit: r.Message.getFieldWithDefault(e, 3, 0),
                peopleCountOptionList: null == (a = r.Message.getRepeatedField(e, 4)) ? undefined : a,
                fareMax: r.Message.getFieldWithDefault(e, 5, 0),
                fareMin: r.Message.getFieldWithDefault(e, 6, 0),
                fareDescHint: r.Message.getFieldWithDefault(e, 7, ""),
                fareDescLimit: r.Message.getFieldWithDefault(e, 8, 0),
                fareCountHint: r.Message.getFieldWithDefault(e, 9, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.PlayConfigInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayConfigInfo;
            return proto.webcast.data.PlayConfigInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PlayConfigInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.addSupportGameIds(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setDescHint(a);
                        break;
                    case 3:
                        a = e.readInt32();
                        t.setDescLimit(a);
                        break;
                    case 4:
                        for (var r = e.isDelimited() ? e.readPackedInt32() : [e.readInt32()], o = 0; o < r.length; o++) t.addPeopleCountOption(r[o]);
                        break;
                    case 5:
                        a = e.readInt32();
                        t.setFareMax(a);
                        break;
                    case 6:
                        a = e.readInt32();
                        t.setFareMin(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setFareDescHint(a);
                        break;
                    case 8:
                        a = e.readInt32();
                        t.setFareDescLimit(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setFareCountHint(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.PlayConfigInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayConfigInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PlayConfigInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getSupportGameIdsList()).length > 0 && e.writeRepeatedString(1, a), (a = t.getDescHint()).length > 0 && e.writeString(2, a), 0 !== (a = t.getDescLimit()) && e.writeInt32(3, a), (a = t.getPeopleCountOptionList()).length > 0 && e.writePackedInt32(4, a), 0 !== (a = t.getFareMax()) && e.writeInt32(5, a), 0 !== (a = t.getFareMin()) && e.writeInt32(6, a), (a = t.getFareDescHint()).length > 0 && e.writeString(7, a), 0 !== (a = t.getFareDescLimit()) && e.writeInt32(8, a), (a = t.getFareCountHint()).length > 0 && e.writeString(9, a)
        }, proto.webcast.data.PlayConfigInfo.prototype.getSupportGameIdsList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.data.PlayConfigInfo.prototype.setSupportGameIdsList = function (t) {
            return r.Message.setField(this, 1, t || [])
        }, proto.webcast.data.PlayConfigInfo.prototype.addSupportGameIds = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        }, proto.webcast.data.PlayConfigInfo.prototype.clearSupportGameIdsList = function () {
            return this.setSupportGameIdsList([])
        }, proto.webcast.data.PlayConfigInfo.prototype.getDescHint = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.PlayConfigInfo.prototype.setDescHint = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.PlayConfigInfo.prototype.getDescLimit = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.webcast.data.PlayConfigInfo.prototype.setDescLimit = function (t) {
            return r.Message.setProto3IntField(this, 3, t)
        }, proto.webcast.data.PlayConfigInfo.prototype.getPeopleCountOptionList = function () {
            return r.Message.getRepeatedField(this, 4)
        }, proto.webcast.data.PlayConfigInfo.prototype.setPeopleCountOptionList = function (t) {
            return r.Message.setField(this, 4, t || [])
        }, proto.webcast.data.PlayConfigInfo.prototype.addPeopleCountOption = function (t, e) {
            return r.Message.addToRepeatedField(this, 4, t, e)
        }, proto.webcast.data.PlayConfigInfo.prototype.clearPeopleCountOptionList = function () {
            return this.setPeopleCountOptionList([])
        }, proto.webcast.data.PlayConfigInfo.prototype.getFareMax = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.webcast.data.PlayConfigInfo.prototype.setFareMax = function (t) {
            return r.Message.setProto3IntField(this, 5, t)
        }, proto.webcast.data.PlayConfigInfo.prototype.getFareMin = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.data.PlayConfigInfo.prototype.setFareMin = function (t) {
            return r.Message.setProto3IntField(this, 6, t)
        }, proto.webcast.data.PlayConfigInfo.prototype.getFareDescHint = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.data.PlayConfigInfo.prototype.setFareDescHint = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        }, proto.webcast.data.PlayConfigInfo.prototype.getFareDescLimit = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        }, proto.webcast.data.PlayConfigInfo.prototype.setFareDescLimit = function (t) {
            return r.Message.setProto3IntField(this, 8, t)
        }, proto.webcast.data.PlayConfigInfo.prototype.getFareCountHint = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.data.PlayConfigInfo.prototype.setFareCountHint = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayMetaInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PlayMetaInfo.toObject(t, this)
        }, proto.webcast.data.PlayMetaInfo.toObject = function (t, e) {
            var a = {
                type: r.Message.getFieldWithDefault(e, 1, 0),
                name: r.Message.getFieldWithDefault(e, 2, ""),
                playDescSchema: r.Message.getFieldWithDefault(e, 3, ""),
                playLicenseSchema: r.Message.getFieldWithDefault(e, 4, ""),
                featureSchema: r.Message.getFieldWithDefault(e, 5, ""),
                exchangeRate: r.Message.getFieldWithDefault(e, 6, 0)
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.PlayMetaInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayMetaInfo;
            return proto.webcast.data.PlayMetaInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PlayMetaInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readEnum();
                        t.setType(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setName(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setPlayDescSchema(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setPlayLicenseSchema(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setFeatureSchema(a);
                        break;
                    case 6:
                        a = e.readInt32();
                        t.setExchangeRate(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.PlayMetaInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayMetaInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PlayMetaInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getType()) && e.writeEnum(1, a), (a = t.getName()).length > 0 && e.writeString(2, a), (a = t.getPlayDescSchema()).length > 0 && e.writeString(3, a), (a = t.getPlayLicenseSchema()).length > 0 && e.writeString(4, a), (a = t.getFeatureSchema()).length > 0 && e.writeString(5, a), 0 !== (a = t.getExchangeRate()) && e.writeInt32(6, a)
        }, proto.webcast.data.PlayMetaInfo.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.data.PlayMetaInfo.prototype.setType = function (t) {
            return r.Message.setProto3EnumField(this, 1, t)
        }, proto.webcast.data.PlayMetaInfo.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.PlayMetaInfo.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.PlayMetaInfo.prototype.getPlayDescSchema = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.data.PlayMetaInfo.prototype.setPlayDescSchema = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        }, proto.webcast.data.PlayMetaInfo.prototype.getPlayLicenseSchema = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.PlayMetaInfo.prototype.setPlayLicenseSchema = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.PlayMetaInfo.prototype.getFeatureSchema = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.data.PlayMetaInfo.prototype.setFeatureSchema = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        }, proto.webcast.data.PlayMetaInfo.prototype.getExchangeRate = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.data.PlayMetaInfo.prototype.setExchangeRate = function (t) {
            return r.Message.setProto3IntField(this, 6, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayRecord.prototype.toObject = function (t) {
            return proto.webcast.data.PlayRecord.toObject(t, this)
        }, proto.webcast.data.PlayRecord.toObject = function (t, e) {
            var a, o = {
                playId: r.Message.getFieldWithDefault(e, 1, "0"),
                playIdStr: r.Message.getFieldWithDefault(e, 2, ""),
                type: r.Message.getFieldWithDefault(e, 3, 0),
                gameId: r.Message.getFieldWithDefault(e, 4, ""),
                ownerUid: r.Message.getFieldWithDefault(e, 5, "0"),
                roomId: r.Message.getFieldWithDefault(e, 6, "0"),
                roomIdStr: r.Message.getFieldWithDefault(e, 7, ""),
                desc: r.Message.getFieldWithDefault(e, 8, ""),
                fare: r.Message.getFieldWithDefault(e, 9, 0),
                fareDesc: r.Message.getFieldWithDefault(e, 10, ""),
                peopleCount: r.Message.getFieldWithDefault(e, 11, 0),
                status: r.Message.getFieldWithDefault(e, 12, 0),
                createTime: r.Message.getFieldWithDefault(e, 13, ""),
                updateTime: r.Message.getFieldWithDefault(e, 14, ""),
                extra: r.Message.getFieldWithDefault(e, 15, ""),
                diamonds: r.Message.getFieldWithDefault(e, 16, 0),
                gameIcon: (a = e.getGameIcon()) && s.Image.toObject(t, a),
                realPeopleCount: r.Message.getFieldWithDefault(e, 18, 0),
                auditDenyReason: r.Message.getFieldWithDefault(e, 19, ""),
                finishTime: r.Message.getFieldWithDefault(e, 20, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.PlayRecord.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayRecord;
            return proto.webcast.data.PlayRecord.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.PlayRecord.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setPlayId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setPlayIdStr(a);
                        break;
                    case 3:
                        a = e.readEnum();
                        t.setType(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setGameId(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setOwnerUid(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setRoomId(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setRoomIdStr(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setDesc(a);
                        break;
                    case 9:
                        a = e.readInt32();
                        t.setFare(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setFareDesc(a);
                        break;
                    case 11:
                        a = e.readInt32();
                        t.setPeopleCount(a);
                        break;
                    case 12:
                        a = e.readEnum();
                        t.setStatus(a);
                        break;
                    case 13:
                        a = e.readString();
                        t.setCreateTime(a);
                        break;
                    case 14:
                        a = e.readString();
                        t.setUpdateTime(a);
                        break;
                    case 15:
                        a = e.readString();
                        t.setExtra(a);
                        break;
                    case 16:
                        a = e.readInt32();
                        t.setDiamonds(a);
                        break;
                    case 17:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setGameIcon(a);
                        break;
                    case 18:
                        a = e.readInt32();
                        t.setRealPeopleCount(a);
                        break;
                    case 19:
                        a = e.readString();
                        t.setAuditDenyReason(a);
                        break;
                    case 20:
                        a = e.readString();
                        t.setFinishTime(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.PlayRecord.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayRecord.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.PlayRecord.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getPlayId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getPlayIdStr()).length > 0 && e.writeString(2, a), 0 !== (a = t.getType()) && e.writeEnum(3, a), (a = t.getGameId()).length > 0 && e.writeString(4, a), a = t.getOwnerUid(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getRoomId(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), (a = t.getRoomIdStr()).length > 0 && e.writeString(7, a), (a = t.getDesc()).length > 0 && e.writeString(8, a), 0 !== (a = t.getFare()) && e.writeInt32(9, a), (a = t.getFareDesc()).length > 0 && e.writeString(10, a), 0 !== (a = t.getPeopleCount()) && e.writeInt32(11, a), 0 !== (a = t.getStatus()) && e.writeEnum(12, a), (a = t.getCreateTime()).length > 0 && e.writeString(13, a), (a = t.getUpdateTime()).length > 0 && e.writeString(14, a), (a = t.getExtra()).length > 0 && e.writeString(15, a), 0 !== (a = t.getDiamonds()) && e.writeInt32(16, a), null != (a = t.getGameIcon()) && e.writeMessage(17, a, s.Image.serializeBinaryToWriter), 0 !== (a = t.getRealPeopleCount()) && e.writeInt32(18, a), (a = t.getAuditDenyReason()).length > 0 && e.writeString(19, a), (a = t.getFinishTime()).length > 0 && e.writeString(20, a)
        },proto.webcast.data.PlayRecord.prototype.getPlayId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.PlayRecord.prototype.setPlayId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.PlayRecord.prototype.getPlayIdStr = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.PlayRecord.prototype.setPlayIdStr = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.PlayRecord.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.PlayRecord.prototype.setType = function (t) {
            return r.Message.setProto3EnumField(this, 3, t)
        },proto.webcast.data.PlayRecord.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.PlayRecord.prototype.setGameId = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.PlayRecord.prototype.getOwnerUid = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.PlayRecord.prototype.setOwnerUid = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.PlayRecord.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.PlayRecord.prototype.setRoomId = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.PlayRecord.prototype.getRoomIdStr = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.PlayRecord.prototype.setRoomIdStr = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },proto.webcast.data.PlayRecord.prototype.getDesc = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.data.PlayRecord.prototype.setDesc = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        },proto.webcast.data.PlayRecord.prototype.getFare = function () {
            return r.Message.getFieldWithDefault(this, 9, 0)
        },proto.webcast.data.PlayRecord.prototype.setFare = function (t) {
            return r.Message.setProto3IntField(this, 9, t)
        },proto.webcast.data.PlayRecord.prototype.getFareDesc = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.PlayRecord.prototype.setFareDesc = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },proto.webcast.data.PlayRecord.prototype.getPeopleCount = function () {
            return r.Message.getFieldWithDefault(this, 11, 0)
        },proto.webcast.data.PlayRecord.prototype.setPeopleCount = function (t) {
            return r.Message.setProto3IntField(this, 11, t)
        },proto.webcast.data.PlayRecord.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 12, 0)
        },proto.webcast.data.PlayRecord.prototype.setStatus = function (t) {
            return r.Message.setProto3EnumField(this, 12, t)
        },proto.webcast.data.PlayRecord.prototype.getCreateTime = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        },proto.webcast.data.PlayRecord.prototype.setCreateTime = function (t) {
            return r.Message.setProto3StringField(this, 13, t)
        },proto.webcast.data.PlayRecord.prototype.getUpdateTime = function () {
            return r.Message.getFieldWithDefault(this, 14, "")
        },proto.webcast.data.PlayRecord.prototype.setUpdateTime = function (t) {
            return r.Message.setProto3StringField(this, 14, t)
        },proto.webcast.data.PlayRecord.prototype.getExtra = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        },proto.webcast.data.PlayRecord.prototype.setExtra = function (t) {
            return r.Message.setProto3StringField(this, 15, t)
        },proto.webcast.data.PlayRecord.prototype.getDiamonds = function () {
            return r.Message.getFieldWithDefault(this, 16, 0)
        },proto.webcast.data.PlayRecord.prototype.setDiamonds = function (t) {
            return r.Message.setProto3IntField(this, 16, t)
        },proto.webcast.data.PlayRecord.prototype.getGameIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 17)
        },proto.webcast.data.PlayRecord.prototype.setGameIcon = function (t) {
            return r.Message.setWrapperField(this, 17, t)
        },proto.webcast.data.PlayRecord.prototype.clearGameIcon = function () {
            return this.setGameIcon(undefined)
        },proto.webcast.data.PlayRecord.prototype.hasGameIcon = function () {
            return null != r.Message.getField(this, 17)
        },proto.webcast.data.PlayRecord.prototype.getRealPeopleCount = function () {
            return r.Message.getFieldWithDefault(this, 18, 0)
        },proto.webcast.data.PlayRecord.prototype.setRealPeopleCount = function (t) {
            return r.Message.setProto3IntField(this, 18, t)
        },proto.webcast.data.PlayRecord.prototype.getAuditDenyReason = function () {
            return r.Message.getFieldWithDefault(this, 19, "")
        },proto.webcast.data.PlayRecord.prototype.setAuditDenyReason = function (t) {
            return r.Message.setProto3StringField(this, 19, t)
        },proto.webcast.data.PlayRecord.prototype.getFinishTime = function () {
            return r.Message.getFieldWithDefault(this, 20, "")
        },proto.webcast.data.PlayRecord.prototype.setFinishTime = function (t) {
            return r.Message.setProto3StringField(this, 20, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayTeamMember.prototype.toObject = function (t) {
            return proto.webcast.data.PlayTeamMember.toObject(t, this)
        }, proto.webcast.data.PlayTeamMember.toObject = function (t, e) {
            var a,
                o = {user: (a = e.getUser()) && n.User.toObject(t, a), status: r.Message.getFieldWithDefault(e, 2, 0)};
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.PlayTeamMember.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayTeamMember;
            return proto.webcast.data.PlayTeamMember.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.PlayTeamMember.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new n.User;
                        e.readMessage(a, n.User.deserializeBinaryFromReader), t.setUser(a);
                        break;
                    case 2:
                        a = e.readEnum();
                        t.setStatus(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.PlayTeamMember.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayTeamMember.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.PlayTeamMember.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getUser()) && e.writeMessage(1, a, n.User.serializeBinaryToWriter), 0 !== (a = t.getStatus()) && e.writeEnum(2, a)
        },proto.webcast.data.PlayTeamMember.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 1)
        },proto.webcast.data.PlayTeamMember.prototype.setUser = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.PlayTeamMember.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.data.PlayTeamMember.prototype.hasUser = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.PlayTeamMember.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.PlayTeamMember.prototype.setStatus = function (t) {
            return r.Message.setProto3EnumField(this, 2, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PlayReportTag.prototype.toObject = function (t) {
            return proto.webcast.data.PlayReportTag.toObject(t, this)
        }, proto.webcast.data.PlayReportTag.toObject = function (t, e) {
            var a = {
                serialId: r.Message.getFieldWithDefault(e, 1, "0"),
                serialStr: r.Message.getFieldWithDefault(e, 2, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.PlayReportTag.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PlayReportTag;
            return proto.webcast.data.PlayReportTag.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.PlayReportTag.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setSerialId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setSerialStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.PlayReportTag.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PlayReportTag.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.PlayReportTag.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getSerialId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getSerialStr()).length > 0 && e.writeString(2, a)
        },proto.webcast.data.PlayReportTag.prototype.getSerialId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.PlayReportTag.prototype.setSerialId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.PlayReportTag.prototype.getSerialStr = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.PlayReportTag.prototype.setSerialStr = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.PlayServiceType = {
            TYPEUNKNOWN: 0,
            TEAM: 1
        },proto.webcast.data.PlayStatus = {
            PLAYSTATUSALL: 0,
            PLAYSTATUSAUDITING: 1,
            PLAYSTATUSAUDITDENY: 2,
            PLAYSTATUSSTARTED: 3,
            PLAYSTATUSCLOSED: 4,
            PLAYSTATUSINTERNALERROR: 5,
            PLAYSTATUSWAITINGCONFIRM: 6,
            PLAYSTATUSFINISHED: 7
        },proto.webcast.data.PlayMemberStatus = {
            STATUSUNKNOWN: 0,
            READY: 1,
            INVITED: 2,
            JOINEDGAME: 3
        },proto.webcast.data.OrderAuditStatus = {
            ORDERAUDITSTATUSUNKNOWN: 0,
            UNSUBMITTED: 1,
            INTHEAUDIT: 2,
            AUDITPASSED: 3,
            AUDITNOTPASSED: 4
        },o.object.extend(e, proto.webcast.data)
    }, 36973: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(8411);
        o.object.extend(proto, s);
        var n = a(64925);
        o.object.extend(proto, n);
        var d = a(99222);
        o.object.extend(proto, d);
        var c = a(91057);
        o.object.extend(proto, c), o.exportSymbol("proto.webcast.data.AfterSendAction", null, i), o.exportSymbol("proto.webcast.data.AnchorGiftData", null, i), o.exportSymbol("proto.webcast.data.AssetEffectMixInfo", null, i), o.exportSymbol("proto.webcast.data.BuffLevel", null, i), o.exportSymbol("proto.webcast.data.CardLockInfo", null, i), o.exportSymbol("proto.webcast.data.CardLockStatus", null, i), o.exportSymbol("proto.webcast.data.DIYGiftCardInfo", null, i), o.exportSymbol("proto.webcast.data.DIYGiftToolbarInfo", null, i), o.exportSymbol("proto.webcast.data.DIYItemInfo", null, i), o.exportSymbol("proto.webcast.data.DIYPageEnterButton", null, i), o.exportSymbol("proto.webcast.data.DoodleTemplate", null, i), o.exportSymbol("proto.webcast.data.EffectMixImageInfo", null, i), o.exportSymbol("proto.webcast.data.FreeCellData", null, i), o.exportSymbol("proto.webcast.data.FreeGift", null, i), o.exportSymbol("proto.webcast.data.GameGiftData", null, i), o.exportSymbol("proto.webcast.data.GameGiftData.MonkeyData", null, i), o.exportSymbol("proto.webcast.data.GameGiftData.MonkeyData.Range", null, i), o.exportSymbol("proto.webcast.data.GiftBanner", null, i), o.exportSymbol("proto.webcast.data.GiftBuffInfo", null, i), o.exportSymbol("proto.webcast.data.GiftExtra", null, i), o.exportSymbol("proto.webcast.data.GiftGroupInfo", null, i), o.exportSymbol("proto.webcast.data.GiftLockStatus", null, i), o.exportSymbol("proto.webcast.data.GiftPanelOperation", null, i), o.exportSymbol("proto.webcast.data.GiftPreviewInfo", null, i), o.exportSymbol("proto.webcast.data.GiftStruct", null, i), o.exportSymbol("proto.webcast.data.GiftStruct.GiftMsgBoard", null, i), o.exportSymbol("proto.webcast.data.GiftStruct.GiftStructFansClubInfo", null, i), o.exportSymbol("proto.webcast.data.GiftTip", null, i), o.exportSymbol("proto.webcast.data.GiftTrayInfo", null, i), o.exportSymbol("proto.webcast.data.LuckyMoneyGiftMeta", null, i), o.exportSymbol("proto.webcast.data.MonkeyDataRedis", null, i), o.exportSymbol("proto.webcast.data.MonkeyGiftRankData", null, i), o.exportSymbol("proto.webcast.data.MonkeyGiftRankData.Rank", null, i), o.exportSymbol("proto.webcast.data.MysteryShopStatus", null, i), o.exportSymbol("proto.webcast.data.PluginInfo", null, i), o.exportSymbol("proto.webcast.data.ReqExtraType", null, i), o.exportSymbol("proto.webcast.data.SubscribeGiftPackInfo", null, i), proto.webcast.data.GiftPreviewInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftPreviewInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftPreviewInfo.displayName = "proto.webcast.data.GiftPreviewInfo"), proto.webcast.data.GiftBuffInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftBuffInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftBuffInfo.displayName = "proto.webcast.data.GiftBuffInfo"), proto.webcast.data.GiftTip = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftTip, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftTip.displayName = "proto.webcast.data.GiftTip"), proto.webcast.data.SubscribeGiftPackInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.SubscribeGiftPackInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.SubscribeGiftPackInfo.displayName = "proto.webcast.data.SubscribeGiftPackInfo"), proto.webcast.data.GiftStruct = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.GiftStruct.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.GiftStruct, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftStruct.displayName = "proto.webcast.data.GiftStruct"), proto.webcast.data.GiftStruct.GiftStructFansClubInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftStruct.GiftStructFansClubInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftStruct.GiftStructFansClubInfo.displayName = "proto.webcast.data.GiftStruct.GiftStructFansClubInfo"), proto.webcast.data.GiftStruct.GiftMsgBoard = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftStruct.GiftMsgBoard, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftStruct.GiftMsgBoard.displayName = "proto.webcast.data.GiftStruct.GiftMsgBoard"), proto.webcast.data.GiftGroupInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftGroupInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftGroupInfo.displayName = "proto.webcast.data.GiftGroupInfo"), proto.webcast.data.GiftPanelOperation = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftPanelOperation, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftPanelOperation.displayName = "proto.webcast.data.GiftPanelOperation"), proto.webcast.data.FreeGift = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.FreeGift, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.FreeGift.displayName = "proto.webcast.data.FreeGift"), proto.webcast.data.LuckyMoneyGiftMeta = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.LuckyMoneyGiftMeta, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.LuckyMoneyGiftMeta.displayName = "proto.webcast.data.LuckyMoneyGiftMeta"), proto.webcast.data.FreeCellData = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.FreeCellData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.FreeCellData.displayName = "proto.webcast.data.FreeCellData"), proto.webcast.data.GameGiftData = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GameGiftData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GameGiftData.displayName = "proto.webcast.data.GameGiftData"), proto.webcast.data.GameGiftData.MonkeyData = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.GameGiftData.MonkeyData.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.GameGiftData.MonkeyData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GameGiftData.MonkeyData.displayName = "proto.webcast.data.GameGiftData.MonkeyData"), proto.webcast.data.GameGiftData.MonkeyData.Range = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GameGiftData.MonkeyData.Range, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GameGiftData.MonkeyData.Range.displayName = "proto.webcast.data.GameGiftData.MonkeyData.Range"), proto.webcast.data.AnchorGiftData = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.AnchorGiftData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.AnchorGiftData.displayName = "proto.webcast.data.AnchorGiftData"), proto.webcast.data.MonkeyDataRedis = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MonkeyDataRedis, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MonkeyDataRedis.displayName = "proto.webcast.data.MonkeyDataRedis"), proto.webcast.data.MonkeyGiftRankData = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.MonkeyGiftRankData.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.MonkeyGiftRankData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MonkeyGiftRankData.displayName = "proto.webcast.data.MonkeyGiftRankData"), proto.webcast.data.MonkeyGiftRankData.Rank = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.MonkeyGiftRankData.Rank, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.MonkeyGiftRankData.Rank.displayName = "proto.webcast.data.MonkeyGiftRankData.Rank"), proto.webcast.data.DoodleTemplate = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.DoodleTemplate, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.DoodleTemplate.displayName = "proto.webcast.data.DoodleTemplate"), proto.webcast.data.GiftBanner = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftBanner, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftBanner.displayName = "proto.webcast.data.GiftBanner"),proto.webcast.data.EffectMixImageInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        },o.inherits(proto.webcast.data.EffectMixImageInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.EffectMixImageInfo.displayName = "proto.webcast.data.EffectMixImageInfo"),proto.webcast.data.AssetEffectMixInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.AssetEffectMixInfo.repeatedFields_, null)
        },o.inherits(proto.webcast.data.AssetEffectMixInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.AssetEffectMixInfo.displayName = "proto.webcast.data.AssetEffectMixInfo"),proto.webcast.data.GiftTrayInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        },o.inherits(proto.webcast.data.GiftTrayInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.GiftTrayInfo.displayName = "proto.webcast.data.GiftTrayInfo"),proto.webcast.data.GiftExtra = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.GiftExtra.repeatedFields_, null)
        },o.inherits(proto.webcast.data.GiftExtra, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.GiftExtra.displayName = "proto.webcast.data.GiftExtra"),proto.webcast.data.DIYGiftToolbarInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.DIYGiftToolbarInfo.repeatedFields_, null)
        },o.inherits(proto.webcast.data.DIYGiftToolbarInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.DIYGiftToolbarInfo.displayName = "proto.webcast.data.DIYGiftToolbarInfo"),proto.webcast.data.DIYPageEnterButton = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        },o.inherits(proto.webcast.data.DIYPageEnterButton, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.DIYPageEnterButton.displayName = "proto.webcast.data.DIYPageEnterButton"),proto.webcast.data.PluginInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        },o.inherits(proto.webcast.data.PluginInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.PluginInfo.displayName = "proto.webcast.data.PluginInfo"),proto.webcast.data.DIYItemInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        },o.inherits(proto.webcast.data.DIYItemInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.DIYItemInfo.displayName = "proto.webcast.data.DIYItemInfo"),proto.webcast.data.CardLockInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        },o.inherits(proto.webcast.data.CardLockInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.CardLockInfo.displayName = "proto.webcast.data.CardLockInfo"),proto.webcast.data.DIYGiftCardInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.DIYGiftCardInfo.repeatedFields_, null)
        },o.inherits(proto.webcast.data.DIYGiftCardInfo, r.Message),o.DEBUG && !COMPILED && (proto.webcast.data.DIYGiftCardInfo.displayName = "proto.webcast.data.DIYGiftCardInfo"),r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftPreviewInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GiftPreviewInfo.toObject(t, this)
        }, proto.webcast.data.GiftPreviewInfo.toObject = function (t, e) {
            var a = {
                lockStatus: r.Message.getFieldWithDefault(e, 1, "0"),
                clientBlockUseSchemeUrl: r.Message.getBooleanFieldWithDefault(e, 2, !1),
                blockSchemeUrl: r.Message.getFieldWithDefault(e, 3, ""),
                clientCheckLeftDiamond: r.Message.getBooleanFieldWithDefault(e, 4, !1),
                blockToast: r.Message.getFieldWithDefault(e, 5, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GiftPreviewInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftPreviewInfo;
            return proto.webcast.data.GiftPreviewInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftPreviewInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setLockStatus(a);
                        break;
                    case 2:
                        a = e.readBool();
                        t.setClientBlockUseSchemeUrl(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setBlockSchemeUrl(a);
                        break;
                    case 4:
                        a = e.readBool();
                        t.setClientCheckLeftDiamond(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setBlockToast(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftPreviewInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftPreviewInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftPreviewInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getLockStatus(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getClientBlockUseSchemeUrl()) && e.writeBool(2, a), (a = t.getBlockSchemeUrl()).length > 0 && e.writeString(3, a), (a = t.getClientCheckLeftDiamond()) && e.writeBool(4, a), (a = t.getBlockToast()).length > 0 && e.writeString(5, a)
        },proto.webcast.data.GiftPreviewInfo.prototype.getLockStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.GiftPreviewInfo.prototype.setLockStatus = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.GiftPreviewInfo.prototype.getClientBlockUseSchemeUrl = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.webcast.data.GiftPreviewInfo.prototype.setClientBlockUseSchemeUrl = function (t) {
            return r.Message.setProto3BooleanField(this, 2, t)
        },proto.webcast.data.GiftPreviewInfo.prototype.getBlockSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.GiftPreviewInfo.prototype.setBlockSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.GiftPreviewInfo.prototype.getClientCheckLeftDiamond = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        },proto.webcast.data.GiftPreviewInfo.prototype.setClientCheckLeftDiamond = function (t) {
            return r.Message.setProto3BooleanField(this, 4, t)
        },proto.webcast.data.GiftPreviewInfo.prototype.getBlockToast = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.GiftPreviewInfo.prototype.setBlockToast = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftBuffInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GiftBuffInfo.toObject(t, this)
        }, proto.webcast.data.GiftBuffInfo.toObject = function (t, e) {
            var a, o = {
                text: r.Message.getFieldWithDefault(e, 1, ""),
                textColor: r.Message.getFieldWithDefault(e, 2, ""),
                bgImg: (a = e.getBgImg()) && s.Image.toObject(t, a),
                sweepLightImg: (a = e.getSweepLightImg()) && s.Image.toObject(t, a),
                buffGiftDescribeImg: (a = e.getBuffGiftDescribeImg()) && s.Image.toObject(t, a),
                buffGiftId: r.Message.getFieldWithDefault(e, 6, "0"),
                buffLevel: r.Message.getFieldWithDefault(e, 7, 0),
                buffCanSend: r.Message.getBooleanFieldWithDefault(e, 8, !1),
                buffDiamondCount: r.Message.getFieldWithDefault(e, 9, "0"),
                lockToast: r.Message.getFieldWithDefault(e, 10, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftBuffInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftBuffInfo;
            return proto.webcast.data.GiftBuffInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftBuffInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setText(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setTextColor(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setBgImg(a);
                        break;
                    case 4:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setSweepLightImg(a);
                        break;
                    case 5:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setBuffGiftDescribeImg(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setBuffGiftId(a);
                        break;
                    case 7:
                        a = e.readInt32();
                        t.setBuffLevel(a);
                        break;
                    case 8:
                        a = e.readBool();
                        t.setBuffCanSend(a);
                        break;
                    case 9:
                        a = e.readInt64String();
                        t.setBuffDiamondCount(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setLockToast(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftBuffInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftBuffInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftBuffInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getText()).length > 0 && e.writeString(1, a), (a = t.getTextColor()).length > 0 && e.writeString(2, a), null != (a = t.getBgImg()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), null != (a = t.getSweepLightImg()) && e.writeMessage(4, a, s.Image.serializeBinaryToWriter), null != (a = t.getBuffGiftDescribeImg()) && e.writeMessage(5, a, s.Image.serializeBinaryToWriter), a = t.getBuffGiftId(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), 0 !== (a = t.getBuffLevel()) && e.writeInt32(7, a), (a = t.getBuffCanSend()) && e.writeBool(8, a), a = t.getBuffDiamondCount(), 0 !== parseInt(a, 10) && e.writeInt64String(9, a), (a = t.getLockToast()).length > 0 && e.writeString(10, a)
        },proto.webcast.data.GiftBuffInfo.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.GiftBuffInfo.prototype.setText = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.GiftBuffInfo.prototype.getTextColor = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GiftBuffInfo.prototype.setTextColor = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.GiftBuffInfo.prototype.getBgImg = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        },proto.webcast.data.GiftBuffInfo.prototype.setBgImg = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.GiftBuffInfo.prototype.clearBgImg = function () {
            return this.setBgImg(undefined)
        },proto.webcast.data.GiftBuffInfo.prototype.hasBgImg = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.data.GiftBuffInfo.prototype.getSweepLightImg = function () {
            return r.Message.getWrapperField(this, s.Image, 4)
        },proto.webcast.data.GiftBuffInfo.prototype.setSweepLightImg = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.GiftBuffInfo.prototype.clearSweepLightImg = function () {
            return this.setSweepLightImg(undefined)
        },proto.webcast.data.GiftBuffInfo.prototype.hasSweepLightImg = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.GiftBuffInfo.prototype.getBuffGiftDescribeImg = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        },proto.webcast.data.GiftBuffInfo.prototype.setBuffGiftDescribeImg = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        },proto.webcast.data.GiftBuffInfo.prototype.clearBuffGiftDescribeImg = function () {
            return this.setBuffGiftDescribeImg(undefined)
        },proto.webcast.data.GiftBuffInfo.prototype.hasBuffGiftDescribeImg = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.data.GiftBuffInfo.prototype.getBuffGiftId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.GiftBuffInfo.prototype.setBuffGiftId = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.GiftBuffInfo.prototype.getBuffLevel = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        },proto.webcast.data.GiftBuffInfo.prototype.setBuffLevel = function (t) {
            return r.Message.setProto3IntField(this, 7, t)
        },proto.webcast.data.GiftBuffInfo.prototype.getBuffCanSend = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.data.GiftBuffInfo.prototype.setBuffCanSend = function (t) {
            return r.Message.setProto3BooleanField(this, 8, t)
        },proto.webcast.data.GiftBuffInfo.prototype.getBuffDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        },proto.webcast.data.GiftBuffInfo.prototype.setBuffDiamondCount = function (t) {
            return r.Message.setProto3StringIntField(this, 9, t)
        },proto.webcast.data.GiftBuffInfo.prototype.getLockToast = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.GiftBuffInfo.prototype.setLockToast = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftTip.prototype.toObject = function (t) {
            return proto.webcast.data.GiftTip.toObject(t, this)
        }, proto.webcast.data.GiftTip.toObject = function (t, e) {
            var a, o = {
                displayText: (a = e.getDisplayText()) && d.Text.toObject(t, a),
                backgroundColor: r.Message.getFieldWithDefault(e, 2, ""),
                prefixImage: (a = e.getPrefixImage()) && s.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftTip.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftTip;
            return proto.webcast.data.GiftTip.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftTip.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new d.Text;
                        e.readMessage(a, d.Text.deserializeBinaryFromReader), t.setDisplayText(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setBackgroundColor(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setPrefixImage(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftTip.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftTip.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftTip.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getDisplayText()) && e.writeMessage(1, a, d.Text.serializeBinaryToWriter), (a = t.getBackgroundColor()).length > 0 && e.writeString(2, a), null != (a = t.getPrefixImage()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter)
        },proto.webcast.data.GiftTip.prototype.getDisplayText = function () {
            return r.Message.getWrapperField(this, d.Text, 1)
        },proto.webcast.data.GiftTip.prototype.setDisplayText = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.GiftTip.prototype.clearDisplayText = function () {
            return this.setDisplayText(undefined)
        },proto.webcast.data.GiftTip.prototype.hasDisplayText = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.GiftTip.prototype.getBackgroundColor = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GiftTip.prototype.setBackgroundColor = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.GiftTip.prototype.getPrefixImage = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        },proto.webcast.data.GiftTip.prototype.setPrefixImage = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.GiftTip.prototype.clearPrefixImage = function () {
            return this.setPrefixImage(undefined)
        },proto.webcast.data.GiftTip.prototype.hasPrefixImage = function () {
            return null != r.Message.getField(this, 3)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.SubscribeGiftPackInfo.prototype.toObject = function (t) {
            return proto.webcast.data.SubscribeGiftPackInfo.toObject(t, this)
        }, proto.webcast.data.SubscribeGiftPackInfo.toObject = function (t, e) {
            var a = {
                relatedGiftId: r.Message.getFieldWithDefault(e, 1, "0"),
                offlineTimeSecond: r.Message.getFieldWithDefault(e, 2, "0"),
                leftScores: r.Message.getFieldWithDefault(e, 4, 0),
                entranceSchemeUrl: r.Message.getFieldWithDefault(e, 5, ""),
                entranceSchemeUrlQueryParams: r.Message.getFieldWithDefault(e, 6, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.SubscribeGiftPackInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.SubscribeGiftPackInfo;
            return proto.webcast.data.SubscribeGiftPackInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.SubscribeGiftPackInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setRelatedGiftId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setOfflineTimeSecond(a);
                        break;
                    case 4:
                        a = e.readInt32();
                        t.setLeftScores(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setEntranceSchemeUrl(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setEntranceSchemeUrlQueryParams(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.SubscribeGiftPackInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.SubscribeGiftPackInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getRelatedGiftId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getOfflineTimeSecond(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), 0 !== (a = t.getLeftScores()) && e.writeInt32(4, a), (a = t.getEntranceSchemeUrl()).length > 0 && e.writeString(5, a), (a = t.getEntranceSchemeUrlQueryParams()).length > 0 && e.writeString(6, a)
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.getRelatedGiftId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.setRelatedGiftId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.getOfflineTimeSecond = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.setOfflineTimeSecond = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.getLeftScores = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.setLeftScores = function (t) {
            return r.Message.setProto3IntField(this, 4, t)
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.getEntranceSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.setEntranceSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.getEntranceSchemeUrlQueryParams = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.SubscribeGiftPackInfo.prototype.setEntranceSchemeUrlQueryParams = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.GiftStruct.repeatedFields_ = [25, 44, 45, 55, 59, 62],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftStruct.prototype.toObject = function (t) {
            return proto.webcast.data.GiftStruct.toObject(t, this)
        }, proto.webcast.data.GiftStruct.toObject = function (t, e) {
            var a, o = {
                image: (a = e.getImage()) && s.Image.toObject(t, a),
                describe: r.Message.getFieldWithDefault(e, 2, ""),
                notify: r.Message.getBooleanFieldWithDefault(e, 3, !1),
                duration: r.Message.getFieldWithDefault(e, 4, "0"),
                id: r.Message.getFieldWithDefault(e, 5, "0"),
                fansclubInfo: (a = e.getFansclubInfo()) && proto.webcast.data.GiftStruct.GiftStructFansClubInfo.toObject(t, a),
                forLinkmic: r.Message.getBooleanFieldWithDefault(e, 7, !1),
                doodle: r.Message.getBooleanFieldWithDefault(e, 8, !1),
                forFansclub: r.Message.getBooleanFieldWithDefault(e, 9, !1),
                combo: r.Message.getBooleanFieldWithDefault(e, 10, !1),
                type: r.Message.getFieldWithDefault(e, 11, 0),
                diamondCount: r.Message.getFieldWithDefault(e, 12, 0),
                isDisplayedOnPanel: r.Message.getBooleanFieldWithDefault(e, 13, !1),
                primaryEffectId: r.Message.getFieldWithDefault(e, 14, "0"),
                giftLabelIcon: (a = e.getGiftLabelIcon()) && s.Image.toObject(t, a),
                name: r.Message.getFieldWithDefault(e, 16, ""),
                region: r.Message.getFieldWithDefault(e, 17, ""),
                manual: r.Message.getFieldWithDefault(e, 18, ""),
                forCustom: r.Message.getBooleanFieldWithDefault(e, 19, !1),
                specialEffectsMap: (a = e.getSpecialEffectsMap()) ? a.toObject(t, undefined) : [],
                icon: (a = e.getIcon()) && s.Image.toObject(t, a),
                actionType: r.Message.getFieldWithDefault(e, 22, 0),
                watermelonSeeds: r.Message.getFieldWithDefault(e, 23, 0),
                goldEffect: r.Message.getFieldWithDefault(e, 24, ""),
                subsList: r.Message.toObjectList(e.getSubsList(), proto.webcast.data.LuckyMoneyGiftMeta.toObject, t),
                goldenBeans: r.Message.getFieldWithDefault(e, 26, "0"),
                honorLevel: r.Message.getFieldWithDefault(e, 27, "0"),
                itemType: r.Message.getFieldWithDefault(e, 28, 0),
                schemeUrl: r.Message.getFieldWithDefault(e, 29, ""),
                giftOperation: (a = e.getGiftOperation()) && proto.webcast.data.GiftPanelOperation.toObject(t, a),
                eventName: r.Message.getFieldWithDefault(e, 31, ""),
                nobleLevel: r.Message.getFieldWithDefault(e, 32, "0"),
                guideUrl: r.Message.getFieldWithDefault(e, 33, ""),
                punishMedicine: r.Message.getBooleanFieldWithDefault(e, 34, !1),
                forPortal: r.Message.getBooleanFieldWithDefault(e, 35, !1),
                businessText: r.Message.getFieldWithDefault(e, 36, ""),
                cnyGift: r.Message.getBooleanFieldWithDefault(e, 37, !1),
                appId: r.Message.getFieldWithDefault(e, 38, "0"),
                vipLevel: r.Message.getFieldWithDefault(e, 39, "0"),
                isGray: r.Message.getBooleanFieldWithDefault(e, 40, !1),
                graySchemeUrl: r.Message.getFieldWithDefault(e, 41, ""),
                giftScene: r.Message.getFieldWithDefault(e, 42, "0"),
                giftBanner: (a = e.getGiftBanner()) && proto.webcast.data.GiftBanner.toObject(t, a),
                triggerWordsList: null == (a = r.Message.getRepeatedField(e, 44)) ? undefined : a,
                giftBuffInfosList: r.Message.toObjectList(e.getGiftBuffInfosList(), proto.webcast.data.GiftBuffInfo.toObject, t),
                forFirstRecharge: r.Message.getBooleanFieldWithDefault(e, 46, !1),
                dynamicImgForSelected: (a = e.getDynamicImgForSelected()) && s.Image.toObject(t, a),
                afterSendAction: r.Message.getFieldWithDefault(e, 48, 0),
                giftOfflineTime: r.Message.getFieldWithDefault(e, 49, "0"),
                topBarText: r.Message.getFieldWithDefault(e, 50, ""),
                topRightAvatar: (a = e.getTopRightAvatar()) && s.Image.toObject(t, a),
                bannerSchemeUrl: r.Message.getFieldWithDefault(e, 52, ""),
                isLocked: r.Message.getBooleanFieldWithDefault(e, 53, !1),
                reqExtraType: r.Message.getFieldWithDefault(e, 54, "0"),
                assetIdsList: null == (a = r.Message.getRepeatedField(e, 55)) ? undefined : a,
                giftPreviewInfo: (a = e.getGiftPreviewInfo()) && proto.webcast.data.GiftPreviewInfo.toObject(t, a),
                giftTip: (a = e.getGiftTip()) && proto.webcast.data.GiftTip.toObject(t, a),
                needSweepLightCount: r.Message.getFieldWithDefault(e, 58, 0),
                groupInfoList: r.Message.toObjectList(e.getGroupInfoList(), proto.webcast.data.GiftGroupInfo.toObject, t),
                bottomText: (a = e.getBottomText()) && d.Text.toObject(t, a),
                mysteryShopStatus: r.Message.getFieldWithDefault(e, 61, 0),
                optionalAssetIdsList: null == (a = r.Message.getRepeatedField(e, 62)) ? undefined : a,
                disableWishList: r.Message.getBooleanFieldWithDefault(e, 63, !1),
                giftMsgBoard: (a = e.getGiftMsgBoard()) && proto.webcast.data.GiftStruct.GiftMsgBoard.toObject(t, a),
                emojiInteractResource: (a = e.getEmojiInteractResource()) && c.EmojiInteractResource.toObject(t, a),
                trayDynamicImgFlippable: r.Message.getBooleanFieldWithDefault(e, 66, !1)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftStruct.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftStruct;
            return proto.webcast.data.GiftStruct.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftStruct.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setImage(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setDescribe(a);
                        break;
                    case 3:
                        a = e.readBool();
                        t.setNotify(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setDuration(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 6:
                        a = new proto.webcast.data.GiftStruct.GiftStructFansClubInfo;
                        e.readMessage(a, proto.webcast.data.GiftStruct.GiftStructFansClubInfo.deserializeBinaryFromReader), t.setFansclubInfo(a);
                        break;
                    case 7:
                        a = e.readBool();
                        t.setForLinkmic(a);
                        break;
                    case 8:
                        a = e.readBool();
                        t.setDoodle(a);
                        break;
                    case 9:
                        a = e.readBool();
                        t.setForFansclub(a);
                        break;
                    case 10:
                        a = e.readBool();
                        t.setCombo(a);
                        break;
                    case 11:
                        a = e.readInt32();
                        t.setType(a);
                        break;
                    case 12:
                        a = e.readInt32();
                        t.setDiamondCount(a);
                        break;
                    case 13:
                        a = e.readBool();
                        t.setIsDisplayedOnPanel(a);
                        break;
                    case 14:
                        a = e.readInt64String();
                        t.setPrimaryEffectId(a);
                        break;
                    case 15:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setGiftLabelIcon(a);
                        break;
                    case 16:
                        a = e.readString();
                        t.setName(a);
                        break;
                    case 17:
                        a = e.readString();
                        t.setRegion(a);
                        break;
                    case 18:
                        a = e.readString();
                        t.setManual(a);
                        break;
                    case 19:
                        a = e.readBool();
                        t.setForCustom(a);
                        break;
                    case 20:
                        a = t.getSpecialEffectsMap();
                        e.readMessage(a, (function (t, e) {
                            r.Map.deserializeBinary(t, e, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readInt64, null, "", 0)
                        }));
                        break;
                    case 21:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setIcon(a);
                        break;
                    case 22:
                        a = e.readInt32();
                        t.setActionType(a);
                        break;
                    case 23:
                        a = e.readInt32();
                        t.setWatermelonSeeds(a);
                        break;
                    case 24:
                        a = e.readString();
                        t.setGoldEffect(a);
                        break;
                    case 25:
                        a = new proto.webcast.data.LuckyMoneyGiftMeta;
                        e.readMessage(a, proto.webcast.data.LuckyMoneyGiftMeta.deserializeBinaryFromReader), t.addSubs(a);
                        break;
                    case 26:
                        a = e.readInt64String();
                        t.setGoldenBeans(a);
                        break;
                    case 27:
                        a = e.readInt64String();
                        t.setHonorLevel(a);
                        break;
                    case 28:
                        a = e.readInt32();
                        t.setItemType(a);
                        break;
                    case 29:
                        a = e.readString();
                        t.setSchemeUrl(a);
                        break;
                    case 30:
                        a = new proto.webcast.data.GiftPanelOperation;
                        e.readMessage(a, proto.webcast.data.GiftPanelOperation.deserializeBinaryFromReader), t.setGiftOperation(a);
                        break;
                    case 31:
                        a = e.readString();
                        t.setEventName(a);
                        break;
                    case 32:
                        a = e.readInt64String();
                        t.setNobleLevel(a);
                        break;
                    case 33:
                        a = e.readString();
                        t.setGuideUrl(a);
                        break;
                    case 34:
                        a = e.readBool();
                        t.setPunishMedicine(a);
                        break;
                    case 35:
                        a = e.readBool();
                        t.setForPortal(a);
                        break;
                    case 36:
                        a = e.readString();
                        t.setBusinessText(a);
                        break;
                    case 37:
                        a = e.readBool();
                        t.setCnyGift(a);
                        break;
                    case 38:
                        a = e.readInt64String();
                        t.setAppId(a);
                        break;
                    case 39:
                        a = e.readInt64String();
                        t.setVipLevel(a);
                        break;
                    case 40:
                        a = e.readBool();
                        t.setIsGray(a);
                        break;
                    case 41:
                        a = e.readString();
                        t.setGraySchemeUrl(a);
                        break;
                    case 42:
                        a = e.readInt64String();
                        t.setGiftScene(a);
                        break;
                    case 43:
                        a = new proto.webcast.data.GiftBanner;
                        e.readMessage(a, proto.webcast.data.GiftBanner.deserializeBinaryFromReader), t.setGiftBanner(a);
                        break;
                    case 44:
                        a = e.readString();
                        t.addTriggerWords(a);
                        break;
                    case 45:
                        a = new proto.webcast.data.GiftBuffInfo;
                        e.readMessage(a, proto.webcast.data.GiftBuffInfo.deserializeBinaryFromReader), t.addGiftBuffInfos(a);
                        break;
                    case 46:
                        a = e.readBool();
                        t.setForFirstRecharge(a);
                        break;
                    case 47:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setDynamicImgForSelected(a);
                        break;
                    case 48:
                        a = e.readEnum();
                        t.setAfterSendAction(a);
                        break;
                    case 49:
                        a = e.readInt64String();
                        t.setGiftOfflineTime(a);
                        break;
                    case 50:
                        a = e.readString();
                        t.setTopBarText(a);
                        break;
                    case 51:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTopRightAvatar(a);
                        break;
                    case 52:
                        a = e.readString();
                        t.setBannerSchemeUrl(a);
                        break;
                    case 53:
                        a = e.readBool();
                        t.setIsLocked(a);
                        break;
                    case 54:
                        a = e.readInt64String();
                        t.setReqExtraType(a);
                        break;
                    case 55:
                        for (var o = e.isDelimited() ? e.readPackedInt64String() : [e.readInt64String()], i = 0; i < o.length; i++) t.addAssetIds(o[i]);
                        break;
                    case 56:
                        a = new proto.webcast.data.GiftPreviewInfo;
                        e.readMessage(a, proto.webcast.data.GiftPreviewInfo.deserializeBinaryFromReader), t.setGiftPreviewInfo(a);
                        break;
                    case 57:
                        a = new proto.webcast.data.GiftTip;
                        e.readMessage(a, proto.webcast.data.GiftTip.deserializeBinaryFromReader), t.setGiftTip(a);
                        break;
                    case 58:
                        a = e.readInt32();
                        t.setNeedSweepLightCount(a);
                        break;
                    case 59:
                        a = new proto.webcast.data.GiftGroupInfo;
                        e.readMessage(a, proto.webcast.data.GiftGroupInfo.deserializeBinaryFromReader), t.addGroupInfo(a);
                        break;
                    case 60:
                        a = new d.Text;
                        e.readMessage(a, d.Text.deserializeBinaryFromReader), t.setBottomText(a);
                        break;
                    case 61:
                        a = e.readEnum();
                        t.setMysteryShopStatus(a);
                        break;
                    case 62:
                        for (o = e.isDelimited() ? e.readPackedInt64String() : [e.readInt64String()], i = 0; i < o.length; i++) t.addOptionalAssetIds(o[i]);
                        break;
                    case 63:
                        a = e.readBool();
                        t.setDisableWishList(a);
                        break;
                    case 64:
                        a = new proto.webcast.data.GiftStruct.GiftMsgBoard;
                        e.readMessage(a, proto.webcast.data.GiftStruct.GiftMsgBoard.deserializeBinaryFromReader), t.setGiftMsgBoard(a);
                        break;
                    case 65:
                        a = new c.EmojiInteractResource;
                        e.readMessage(a, c.EmojiInteractResource.deserializeBinaryFromReader), t.setEmojiInteractResource(a);
                        break;
                    case 66:
                        a = e.readBool();
                        t.setTrayDynamicImgFlippable(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftStruct.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftStruct.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftStruct.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getImage()) && e.writeMessage(1, a, s.Image.serializeBinaryToWriter), (a = t.getDescribe()).length > 0 && e.writeString(2, a), (a = t.getNotify()) && e.writeBool(3, a), a = t.getDuration(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), null != (a = t.getFansclubInfo()) && e.writeMessage(6, a, proto.webcast.data.GiftStruct.GiftStructFansClubInfo.serializeBinaryToWriter), (a = t.getForLinkmic()) && e.writeBool(7, a), (a = t.getDoodle()) && e.writeBool(8, a), (a = t.getForFansclub()) && e.writeBool(9, a), (a = t.getCombo()) && e.writeBool(10, a), 0 !== (a = t.getType()) && e.writeInt32(11, a), 0 !== (a = t.getDiamondCount()) && e.writeInt32(12, a), (a = t.getIsDisplayedOnPanel()) && e.writeBool(13, a), a = t.getPrimaryEffectId(), 0 !== parseInt(a, 10) && e.writeInt64String(14, a), null != (a = t.getGiftLabelIcon()) && e.writeMessage(15, a, s.Image.serializeBinaryToWriter), (a = t.getName()).length > 0 && e.writeString(16, a), (a = t.getRegion()).length > 0 && e.writeString(17, a), (a = t.getManual()).length > 0 && e.writeString(18, a), (a = t.getForCustom()) && e.writeBool(19, a), (a = t.getSpecialEffectsMap(!0)) && a.getLength() > 0 && a.serializeBinary(20, e, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeInt64), null != (a = t.getIcon()) && e.writeMessage(21, a, s.Image.serializeBinaryToWriter), 0 !== (a = t.getActionType()) && e.writeInt32(22, a), 0 !== (a = t.getWatermelonSeeds()) && e.writeInt32(23, a), (a = t.getGoldEffect()).length > 0 && e.writeString(24, a), (a = t.getSubsList()).length > 0 && e.writeRepeatedMessage(25, a, proto.webcast.data.LuckyMoneyGiftMeta.serializeBinaryToWriter), a = t.getGoldenBeans(), 0 !== parseInt(a, 10) && e.writeInt64String(26, a), a = t.getHonorLevel(), 0 !== parseInt(a, 10) && e.writeInt64String(27, a), 0 !== (a = t.getItemType()) && e.writeInt32(28, a), (a = t.getSchemeUrl()).length > 0 && e.writeString(29, a), null != (a = t.getGiftOperation()) && e.writeMessage(30, a, proto.webcast.data.GiftPanelOperation.serializeBinaryToWriter), (a = t.getEventName()).length > 0 && e.writeString(31, a), a = t.getNobleLevel(), 0 !== parseInt(a, 10) && e.writeInt64String(32, a), (a = t.getGuideUrl()).length > 0 && e.writeString(33, a), (a = t.getPunishMedicine()) && e.writeBool(34, a), (a = t.getForPortal()) && e.writeBool(35, a), (a = t.getBusinessText()).length > 0 && e.writeString(36, a), (a = t.getCnyGift()) && e.writeBool(37, a), a = t.getAppId(), 0 !== parseInt(a, 10) && e.writeInt64String(38, a), a = t.getVipLevel(), 0 !== parseInt(a, 10) && e.writeInt64String(39, a), (a = t.getIsGray()) && e.writeBool(40, a), (a = t.getGraySchemeUrl()).length > 0 && e.writeString(41, a), a = t.getGiftScene(), 0 !== parseInt(a, 10) && e.writeInt64String(42, a), null != (a = t.getGiftBanner()) && e.writeMessage(43, a, proto.webcast.data.GiftBanner.serializeBinaryToWriter), (a = t.getTriggerWordsList()).length > 0 && e.writeRepeatedString(44, a), (a = t.getGiftBuffInfosList()).length > 0 && e.writeRepeatedMessage(45, a, proto.webcast.data.GiftBuffInfo.serializeBinaryToWriter), (a = t.getForFirstRecharge()) && e.writeBool(46, a), null != (a = t.getDynamicImgForSelected()) && e.writeMessage(47, a, s.Image.serializeBinaryToWriter), 0 !== (a = t.getAfterSendAction()) && e.writeEnum(48, a), a = t.getGiftOfflineTime(), 0 !== parseInt(a, 10) && e.writeInt64String(49, a), (a = t.getTopBarText()).length > 0 && e.writeString(50, a), null != (a = t.getTopRightAvatar()) && e.writeMessage(51, a, s.Image.serializeBinaryToWriter), (a = t.getBannerSchemeUrl()).length > 0 && e.writeString(52, a), (a = t.getIsLocked()) && e.writeBool(53, a), a = t.getReqExtraType(), 0 !== parseInt(a, 10) && e.writeInt64String(54, a), (a = t.getAssetIdsList()).length > 0 && e.writePackedInt64String(55, a), null != (a = t.getGiftPreviewInfo()) && e.writeMessage(56, a, proto.webcast.data.GiftPreviewInfo.serializeBinaryToWriter), null != (a = t.getGiftTip()) && e.writeMessage(57, a, proto.webcast.data.GiftTip.serializeBinaryToWriter), 0 !== (a = t.getNeedSweepLightCount()) && e.writeInt32(58, a), (a = t.getGroupInfoList()).length > 0 && e.writeRepeatedMessage(59, a, proto.webcast.data.GiftGroupInfo.serializeBinaryToWriter), null != (a = t.getBottomText()) && e.writeMessage(60, a, d.Text.serializeBinaryToWriter), 0 !== (a = t.getMysteryShopStatus()) && e.writeEnum(61, a), (a = t.getOptionalAssetIdsList()).length > 0 && e.writePackedInt64String(62, a), (a = t.getDisableWishList()) && e.writeBool(63, a), null != (a = t.getGiftMsgBoard()) && e.writeMessage(64, a, proto.webcast.data.GiftStruct.GiftMsgBoard.serializeBinaryToWriter), null != (a = t.getEmojiInteractResource()) && e.writeMessage(65, a, c.EmojiInteractResource.serializeBinaryToWriter), (a = t.getTrayDynamicImgFlippable()) && e.writeBool(66, a)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftStruct.GiftStructFansClubInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GiftStruct.GiftStructFansClubInfo.toObject(t, this)
        }, proto.webcast.data.GiftStruct.GiftStructFansClubInfo.toObject = function (t, e) {
            var a = {
                minLevel: r.Message.getFieldWithDefault(e, 1, 0),
                insertPos: r.Message.getFieldWithDefault(e, 2, 0)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GiftStruct.GiftStructFansClubInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftStruct.GiftStructFansClubInfo;
            return proto.webcast.data.GiftStruct.GiftStructFansClubInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt32();
                        t.setMinLevel(a);
                        break;
                    case 2:
                        a = e.readInt32();
                        t.setInsertPos(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftStruct.GiftStructFansClubInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getMinLevel()) && e.writeInt32(1, a), 0 !== (a = t.getInsertPos()) && e.writeInt32(2, a)
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.prototype.getMinLevel = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.prototype.setMinLevel = function (t) {
            return r.Message.setProto3IntField(this, 1, t)
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.prototype.getInsertPos = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.GiftStruct.GiftStructFansClubInfo.prototype.setInsertPos = function (t) {
            return r.Message.setProto3IntField(this, 2, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftStruct.GiftMsgBoard.prototype.toObject = function (t) {
            return proto.webcast.data.GiftStruct.GiftMsgBoard.toObject(t, this)
        }, proto.webcast.data.GiftStruct.GiftMsgBoard.toObject = function (t, e) {
            var a = {
                forMsgBoard: r.Message.getBooleanFieldWithDefault(e, 1, !1),
                promptText: r.Message.getFieldWithDefault(e, 2, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GiftStruct.GiftMsgBoard.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftStruct.GiftMsgBoard;
            return proto.webcast.data.GiftStruct.GiftMsgBoard.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftStruct.GiftMsgBoard.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readBool();
                        t.setForMsgBoard(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setPromptText(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftStruct.GiftMsgBoard.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftStruct.GiftMsgBoard.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftStruct.GiftMsgBoard.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getForMsgBoard()) && e.writeBool(1, a), (a = t.getPromptText()).length > 0 && e.writeString(2, a)
        },proto.webcast.data.GiftStruct.GiftMsgBoard.prototype.getForMsgBoard = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        },proto.webcast.data.GiftStruct.GiftMsgBoard.prototype.setForMsgBoard = function (t) {
            return r.Message.setProto3BooleanField(this, 1, t)
        },proto.webcast.data.GiftStruct.GiftMsgBoard.prototype.getPromptText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GiftStruct.GiftMsgBoard.prototype.setPromptText = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.GiftStruct.prototype.getImage = function () {
            return r.Message.getWrapperField(this, s.Image, 1)
        },proto.webcast.data.GiftStruct.prototype.setImage = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.GiftStruct.prototype.clearImage = function () {
            return this.setImage(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasImage = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.GiftStruct.prototype.getDescribe = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GiftStruct.prototype.setDescribe = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.GiftStruct.prototype.getNotify = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        },proto.webcast.data.GiftStruct.prototype.setNotify = function (t) {
            return r.Message.setProto3BooleanField(this, 3, t)
        },proto.webcast.data.GiftStruct.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.GiftStruct.prototype.setDuration = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.GiftStruct.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.GiftStruct.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.GiftStruct.prototype.getFansclubInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GiftStruct.GiftStructFansClubInfo, 6)
        },proto.webcast.data.GiftStruct.prototype.setFansclubInfo = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        },proto.webcast.data.GiftStruct.prototype.clearFansclubInfo = function () {
            return this.setFansclubInfo(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasFansclubInfo = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.data.GiftStruct.prototype.getForLinkmic = function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        },proto.webcast.data.GiftStruct.prototype.setForLinkmic = function (t) {
            return r.Message.setProto3BooleanField(this, 7, t)
        },proto.webcast.data.GiftStruct.prototype.getDoodle = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.data.GiftStruct.prototype.setDoodle = function (t) {
            return r.Message.setProto3BooleanField(this, 8, t)
        },proto.webcast.data.GiftStruct.prototype.getForFansclub = function () {
            return r.Message.getBooleanFieldWithDefault(this, 9, !1)
        },proto.webcast.data.GiftStruct.prototype.setForFansclub = function (t) {
            return r.Message.setProto3BooleanField(this, 9, t)
        },proto.webcast.data.GiftStruct.prototype.getCombo = function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1)
        },proto.webcast.data.GiftStruct.prototype.setCombo = function (t) {
            return r.Message.setProto3BooleanField(this, 10, t)
        },proto.webcast.data.GiftStruct.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 11, 0)
        },proto.webcast.data.GiftStruct.prototype.setType = function (t) {
            return r.Message.setProto3IntField(this, 11, t)
        },proto.webcast.data.GiftStruct.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 12, 0)
        },proto.webcast.data.GiftStruct.prototype.setDiamondCount = function (t) {
            return r.Message.setProto3IntField(this, 12, t)
        },proto.webcast.data.GiftStruct.prototype.getIsDisplayedOnPanel = function () {
            return r.Message.getBooleanFieldWithDefault(this, 13, !1)
        },proto.webcast.data.GiftStruct.prototype.setIsDisplayedOnPanel = function (t) {
            return r.Message.setProto3BooleanField(this, 13, t)
        },proto.webcast.data.GiftStruct.prototype.getPrimaryEffectId = function () {
            return r.Message.getFieldWithDefault(this, 14, "0")
        },proto.webcast.data.GiftStruct.prototype.setPrimaryEffectId = function (t) {
            return r.Message.setProto3StringIntField(this, 14, t)
        },proto.webcast.data.GiftStruct.prototype.getGiftLabelIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 15)
        },proto.webcast.data.GiftStruct.prototype.setGiftLabelIcon = function (t) {
            return r.Message.setWrapperField(this, 15, t)
        },proto.webcast.data.GiftStruct.prototype.clearGiftLabelIcon = function () {
            return this.setGiftLabelIcon(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasGiftLabelIcon = function () {
            return null != r.Message.getField(this, 15)
        },proto.webcast.data.GiftStruct.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 16, "")
        },proto.webcast.data.GiftStruct.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 16, t)
        },proto.webcast.data.GiftStruct.prototype.getRegion = function () {
            return r.Message.getFieldWithDefault(this, 17, "")
        },proto.webcast.data.GiftStruct.prototype.setRegion = function (t) {
            return r.Message.setProto3StringField(this, 17, t)
        },proto.webcast.data.GiftStruct.prototype.getManual = function () {
            return r.Message.getFieldWithDefault(this, 18, "")
        },proto.webcast.data.GiftStruct.prototype.setManual = function (t) {
            return r.Message.setProto3StringField(this, 18, t)
        },proto.webcast.data.GiftStruct.prototype.getForCustom = function () {
            return r.Message.getBooleanFieldWithDefault(this, 19, !1)
        },proto.webcast.data.GiftStruct.prototype.setForCustom = function (t) {
            return r.Message.setProto3BooleanField(this, 19, t)
        },proto.webcast.data.GiftStruct.prototype.getSpecialEffectsMap = function (t) {
            return r.Message.getMapField(this, 20, t, null)
        },proto.webcast.data.GiftStruct.prototype.clearSpecialEffectsMap = function () {
            return this.getSpecialEffectsMap().clear(), this
        },proto.webcast.data.GiftStruct.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 21)
        },proto.webcast.data.GiftStruct.prototype.setIcon = function (t) {
            return r.Message.setWrapperField(this, 21, t)
        },proto.webcast.data.GiftStruct.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 21)
        },proto.webcast.data.GiftStruct.prototype.getActionType = function () {
            return r.Message.getFieldWithDefault(this, 22, 0)
        },proto.webcast.data.GiftStruct.prototype.setActionType = function (t) {
            return r.Message.setProto3IntField(this, 22, t)
        },proto.webcast.data.GiftStruct.prototype.getWatermelonSeeds = function () {
            return r.Message.getFieldWithDefault(this, 23, 0)
        },proto.webcast.data.GiftStruct.prototype.setWatermelonSeeds = function (t) {
            return r.Message.setProto3IntField(this, 23, t)
        },proto.webcast.data.GiftStruct.prototype.getGoldEffect = function () {
            return r.Message.getFieldWithDefault(this, 24, "")
        },proto.webcast.data.GiftStruct.prototype.setGoldEffect = function (t) {
            return r.Message.setProto3StringField(this, 24, t)
        },proto.webcast.data.GiftStruct.prototype.getSubsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.LuckyMoneyGiftMeta, 25)
        },proto.webcast.data.GiftStruct.prototype.setSubsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 25, t)
        },proto.webcast.data.GiftStruct.prototype.addSubs = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 25, t, proto.webcast.data.LuckyMoneyGiftMeta, e)
        },proto.webcast.data.GiftStruct.prototype.clearSubsList = function () {
            return this.setSubsList([])
        },proto.webcast.data.GiftStruct.prototype.getGoldenBeans = function () {
            return r.Message.getFieldWithDefault(this, 26, "0")
        },proto.webcast.data.GiftStruct.prototype.setGoldenBeans = function (t) {
            return r.Message.setProto3StringIntField(this, 26, t)
        },proto.webcast.data.GiftStruct.prototype.getHonorLevel = function () {
            return r.Message.getFieldWithDefault(this, 27, "0")
        },proto.webcast.data.GiftStruct.prototype.setHonorLevel = function (t) {
            return r.Message.setProto3StringIntField(this, 27, t)
        },proto.webcast.data.GiftStruct.prototype.getItemType = function () {
            return r.Message.getFieldWithDefault(this, 28, 0)
        },proto.webcast.data.GiftStruct.prototype.setItemType = function (t) {
            return r.Message.setProto3IntField(this, 28, t)
        },proto.webcast.data.GiftStruct.prototype.getSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 29, "")
        },proto.webcast.data.GiftStruct.prototype.setSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 29, t)
        },proto.webcast.data.GiftStruct.prototype.getGiftOperation = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GiftPanelOperation, 30)
        },proto.webcast.data.GiftStruct.prototype.setGiftOperation = function (t) {
            return r.Message.setWrapperField(this, 30, t)
        },proto.webcast.data.GiftStruct.prototype.clearGiftOperation = function () {
            return this.setGiftOperation(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasGiftOperation = function () {
            return null != r.Message.getField(this, 30)
        },proto.webcast.data.GiftStruct.prototype.getEventName = function () {
            return r.Message.getFieldWithDefault(this, 31, "")
        },proto.webcast.data.GiftStruct.prototype.setEventName = function (t) {
            return r.Message.setProto3StringField(this, 31, t)
        },proto.webcast.data.GiftStruct.prototype.getNobleLevel = function () {
            return r.Message.getFieldWithDefault(this, 32, "0")
        },proto.webcast.data.GiftStruct.prototype.setNobleLevel = function (t) {
            return r.Message.setProto3StringIntField(this, 32, t)
        },proto.webcast.data.GiftStruct.prototype.getGuideUrl = function () {
            return r.Message.getFieldWithDefault(this, 33, "")
        },proto.webcast.data.GiftStruct.prototype.setGuideUrl = function (t) {
            return r.Message.setProto3StringField(this, 33, t)
        },proto.webcast.data.GiftStruct.prototype.getPunishMedicine = function () {
            return r.Message.getBooleanFieldWithDefault(this, 34, !1)
        },proto.webcast.data.GiftStruct.prototype.setPunishMedicine = function (t) {
            return r.Message.setProto3BooleanField(this, 34, t)
        },proto.webcast.data.GiftStruct.prototype.getForPortal = function () {
            return r.Message.getBooleanFieldWithDefault(this, 35, !1)
        },proto.webcast.data.GiftStruct.prototype.setForPortal = function (t) {
            return r.Message.setProto3BooleanField(this, 35, t)
        },proto.webcast.data.GiftStruct.prototype.getBusinessText = function () {
            return r.Message.getFieldWithDefault(this, 36, "")
        },proto.webcast.data.GiftStruct.prototype.setBusinessText = function (t) {
            return r.Message.setProto3StringField(this, 36, t)
        },proto.webcast.data.GiftStruct.prototype.getCnyGift = function () {
            return r.Message.getBooleanFieldWithDefault(this, 37, !1)
        },proto.webcast.data.GiftStruct.prototype.setCnyGift = function (t) {
            return r.Message.setProto3BooleanField(this, 37, t)
        },proto.webcast.data.GiftStruct.prototype.getAppId = function () {
            return r.Message.getFieldWithDefault(this, 38, "0")
        },proto.webcast.data.GiftStruct.prototype.setAppId = function (t) {
            return r.Message.setProto3StringIntField(this, 38, t)
        },proto.webcast.data.GiftStruct.prototype.getVipLevel = function () {
            return r.Message.getFieldWithDefault(this, 39, "0")
        },proto.webcast.data.GiftStruct.prototype.setVipLevel = function (t) {
            return r.Message.setProto3StringIntField(this, 39, t)
        },proto.webcast.data.GiftStruct.prototype.getIsGray = function () {
            return r.Message.getBooleanFieldWithDefault(this, 40, !1)
        },proto.webcast.data.GiftStruct.prototype.setIsGray = function (t) {
            return r.Message.setProto3BooleanField(this, 40, t)
        },proto.webcast.data.GiftStruct.prototype.getGraySchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 41, "")
        },proto.webcast.data.GiftStruct.prototype.setGraySchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 41, t)
        },proto.webcast.data.GiftStruct.prototype.getGiftScene = function () {
            return r.Message.getFieldWithDefault(this, 42, "0")
        },proto.webcast.data.GiftStruct.prototype.setGiftScene = function (t) {
            return r.Message.setProto3StringIntField(this, 42, t)
        },proto.webcast.data.GiftStruct.prototype.getGiftBanner = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GiftBanner, 43)
        },proto.webcast.data.GiftStruct.prototype.setGiftBanner = function (t) {
            return r.Message.setWrapperField(this, 43, t)
        },proto.webcast.data.GiftStruct.prototype.clearGiftBanner = function () {
            return this.setGiftBanner(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasGiftBanner = function () {
            return null != r.Message.getField(this, 43)
        },proto.webcast.data.GiftStruct.prototype.getTriggerWordsList = function () {
            return r.Message.getRepeatedField(this, 44)
        },proto.webcast.data.GiftStruct.prototype.setTriggerWordsList = function (t) {
            return r.Message.setField(this, 44, t || [])
        },proto.webcast.data.GiftStruct.prototype.addTriggerWords = function (t, e) {
            return r.Message.addToRepeatedField(this, 44, t, e)
        },proto.webcast.data.GiftStruct.prototype.clearTriggerWordsList = function () {
            return this.setTriggerWordsList([])
        },proto.webcast.data.GiftStruct.prototype.getGiftBuffInfosList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.GiftBuffInfo, 45)
        },proto.webcast.data.GiftStruct.prototype.setGiftBuffInfosList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 45, t)
        },proto.webcast.data.GiftStruct.prototype.addGiftBuffInfos = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 45, t, proto.webcast.data.GiftBuffInfo, e)
        },proto.webcast.data.GiftStruct.prototype.clearGiftBuffInfosList = function () {
            return this.setGiftBuffInfosList([])
        },proto.webcast.data.GiftStruct.prototype.getForFirstRecharge = function () {
            return r.Message.getBooleanFieldWithDefault(this, 46, !1)
        },proto.webcast.data.GiftStruct.prototype.setForFirstRecharge = function (t) {
            return r.Message.setProto3BooleanField(this, 46, t)
        },proto.webcast.data.GiftStruct.prototype.getDynamicImgForSelected = function () {
            return r.Message.getWrapperField(this, s.Image, 47)
        },proto.webcast.data.GiftStruct.prototype.setDynamicImgForSelected = function (t) {
            return r.Message.setWrapperField(this, 47, t)
        },proto.webcast.data.GiftStruct.prototype.clearDynamicImgForSelected = function () {
            return this.setDynamicImgForSelected(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasDynamicImgForSelected = function () {
            return null != r.Message.getField(this, 47)
        },proto.webcast.data.GiftStruct.prototype.getAfterSendAction = function () {
            return r.Message.getFieldWithDefault(this, 48, 0)
        },proto.webcast.data.GiftStruct.prototype.setAfterSendAction = function (t) {
            return r.Message.setProto3EnumField(this, 48, t)
        },proto.webcast.data.GiftStruct.prototype.getGiftOfflineTime = function () {
            return r.Message.getFieldWithDefault(this, 49, "0")
        },proto.webcast.data.GiftStruct.prototype.setGiftOfflineTime = function (t) {
            return r.Message.setProto3StringIntField(this, 49, t)
        },proto.webcast.data.GiftStruct.prototype.getTopBarText = function () {
            return r.Message.getFieldWithDefault(this, 50, "")
        },proto.webcast.data.GiftStruct.prototype.setTopBarText = function (t) {
            return r.Message.setProto3StringField(this, 50, t)
        },proto.webcast.data.GiftStruct.prototype.getTopRightAvatar = function () {
            return r.Message.getWrapperField(this, s.Image, 51)
        },proto.webcast.data.GiftStruct.prototype.setTopRightAvatar = function (t) {
            return r.Message.setWrapperField(this, 51, t)
        },proto.webcast.data.GiftStruct.prototype.clearTopRightAvatar = function () {
            return this.setTopRightAvatar(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasTopRightAvatar = function () {
            return null != r.Message.getField(this, 51)
        },proto.webcast.data.GiftStruct.prototype.getBannerSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 52, "")
        },proto.webcast.data.GiftStruct.prototype.setBannerSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 52, t)
        },proto.webcast.data.GiftStruct.prototype.getIsLocked = function () {
            return r.Message.getBooleanFieldWithDefault(this, 53, !1)
        },proto.webcast.data.GiftStruct.prototype.setIsLocked = function (t) {
            return r.Message.setProto3BooleanField(this, 53, t)
        },proto.webcast.data.GiftStruct.prototype.getReqExtraType = function () {
            return r.Message.getFieldWithDefault(this, 54, "0")
        },proto.webcast.data.GiftStruct.prototype.setReqExtraType = function (t) {
            return r.Message.setProto3StringIntField(this, 54, t)
        },proto.webcast.data.GiftStruct.prototype.getAssetIdsList = function () {
            return r.Message.getRepeatedField(this, 55)
        },proto.webcast.data.GiftStruct.prototype.setAssetIdsList = function (t) {
            return r.Message.setField(this, 55, t || [])
        },proto.webcast.data.GiftStruct.prototype.addAssetIds = function (t, e) {
            return r.Message.addToRepeatedField(this, 55, t, e)
        },proto.webcast.data.GiftStruct.prototype.clearAssetIdsList = function () {
            return this.setAssetIdsList([])
        },proto.webcast.data.GiftStruct.prototype.getGiftPreviewInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GiftPreviewInfo, 56)
        },proto.webcast.data.GiftStruct.prototype.setGiftPreviewInfo = function (t) {
            return r.Message.setWrapperField(this, 56, t)
        },proto.webcast.data.GiftStruct.prototype.clearGiftPreviewInfo = function () {
            return this.setGiftPreviewInfo(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasGiftPreviewInfo = function () {
            return null != r.Message.getField(this, 56)
        },proto.webcast.data.GiftStruct.prototype.getGiftTip = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GiftTip, 57)
        },proto.webcast.data.GiftStruct.prototype.setGiftTip = function (t) {
            return r.Message.setWrapperField(this, 57, t)
        },proto.webcast.data.GiftStruct.prototype.clearGiftTip = function () {
            return this.setGiftTip(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasGiftTip = function () {
            return null != r.Message.getField(this, 57)
        },proto.webcast.data.GiftStruct.prototype.getNeedSweepLightCount = function () {
            return r.Message.getFieldWithDefault(this, 58, 0)
        },proto.webcast.data.GiftStruct.prototype.setNeedSweepLightCount = function (t) {
            return r.Message.setProto3IntField(this, 58, t)
        },proto.webcast.data.GiftStruct.prototype.getGroupInfoList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.GiftGroupInfo, 59)
        },proto.webcast.data.GiftStruct.prototype.setGroupInfoList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 59, t)
        },proto.webcast.data.GiftStruct.prototype.addGroupInfo = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 59, t, proto.webcast.data.GiftGroupInfo, e)
        },proto.webcast.data.GiftStruct.prototype.clearGroupInfoList = function () {
            return this.setGroupInfoList([])
        },proto.webcast.data.GiftStruct.prototype.getBottomText = function () {
            return r.Message.getWrapperField(this, d.Text, 60)
        },proto.webcast.data.GiftStruct.prototype.setBottomText = function (t) {
            return r.Message.setWrapperField(this, 60, t)
        },proto.webcast.data.GiftStruct.prototype.clearBottomText = function () {
            return this.setBottomText(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasBottomText = function () {
            return null != r.Message.getField(this, 60)
        },proto.webcast.data.GiftStruct.prototype.getMysteryShopStatus = function () {
            return r.Message.getFieldWithDefault(this, 61, 0)
        },proto.webcast.data.GiftStruct.prototype.setMysteryShopStatus = function (t) {
            return r.Message.setProto3EnumField(this, 61, t)
        },proto.webcast.data.GiftStruct.prototype.getOptionalAssetIdsList = function () {
            return r.Message.getRepeatedField(this, 62)
        },proto.webcast.data.GiftStruct.prototype.setOptionalAssetIdsList = function (t) {
            return r.Message.setField(this, 62, t || [])
        },proto.webcast.data.GiftStruct.prototype.addOptionalAssetIds = function (t, e) {
            return r.Message.addToRepeatedField(this, 62, t, e)
        },proto.webcast.data.GiftStruct.prototype.clearOptionalAssetIdsList = function () {
            return this.setOptionalAssetIdsList([])
        },proto.webcast.data.GiftStruct.prototype.getDisableWishList = function () {
            return r.Message.getBooleanFieldWithDefault(this, 63, !1)
        },proto.webcast.data.GiftStruct.prototype.setDisableWishList = function (t) {
            return r.Message.setProto3BooleanField(this, 63, t)
        },proto.webcast.data.GiftStruct.prototype.getGiftMsgBoard = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GiftStruct.GiftMsgBoard, 64)
        },proto.webcast.data.GiftStruct.prototype.setGiftMsgBoard = function (t) {
            return r.Message.setWrapperField(this, 64, t)
        },proto.webcast.data.GiftStruct.prototype.clearGiftMsgBoard = function () {
            return this.setGiftMsgBoard(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasGiftMsgBoard = function () {
            return null != r.Message.getField(this, 64)
        },proto.webcast.data.GiftStruct.prototype.getEmojiInteractResource = function () {
            return r.Message.getWrapperField(this, c.EmojiInteractResource, 65)
        },proto.webcast.data.GiftStruct.prototype.setEmojiInteractResource = function (t) {
            return r.Message.setWrapperField(this, 65, t)
        },proto.webcast.data.GiftStruct.prototype.clearEmojiInteractResource = function () {
            return this.setEmojiInteractResource(undefined)
        },proto.webcast.data.GiftStruct.prototype.hasEmojiInteractResource = function () {
            return null != r.Message.getField(this, 65)
        },proto.webcast.data.GiftStruct.prototype.getTrayDynamicImgFlippable = function () {
            return r.Message.getBooleanFieldWithDefault(this, 66, !1)
        },proto.webcast.data.GiftStruct.prototype.setTrayDynamicImgFlippable = function (t) {
            return r.Message.setProto3BooleanField(this, 66, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftGroupInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GiftGroupInfo.toObject(t, this)
        }, proto.webcast.data.GiftGroupInfo.toObject = function (t, e) {
            var a = {
                groupCount: r.Message.getFieldWithDefault(e, 1, 0),
                groupText: r.Message.getFieldWithDefault(e, 2, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GiftGroupInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftGroupInfo;
            return proto.webcast.data.GiftGroupInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftGroupInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt32();
                        t.setGroupCount(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setGroupText(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftGroupInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftGroupInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftGroupInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getGroupCount()) && e.writeInt32(1, a), (a = t.getGroupText()).length > 0 && e.writeString(2, a)
        },proto.webcast.data.GiftGroupInfo.prototype.getGroupCount = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.data.GiftGroupInfo.prototype.setGroupCount = function (t) {
            return r.Message.setProto3IntField(this, 1, t)
        },proto.webcast.data.GiftGroupInfo.prototype.getGroupText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GiftGroupInfo.prototype.setGroupText = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftPanelOperation.prototype.toObject = function (t) {
            return proto.webcast.data.GiftPanelOperation.toObject(t, this)
        }, proto.webcast.data.GiftPanelOperation.toObject = function (t, e) {
            var a, o = {
                leftImage: (a = e.getLeftImage()) && s.Image.toObject(t, a),
                rightImage: (a = e.getRightImage()) && s.Image.toObject(t, a),
                title: r.Message.getFieldWithDefault(e, 3, ""),
                titleColor: r.Message.getFieldWithDefault(e, 4, ""),
                titleSize: r.Message.getFieldWithDefault(e, 5, "0"),
                schemeUrl: r.Message.getFieldWithDefault(e, 6, ""),
                eventName: r.Message.getFieldWithDefault(e, 7, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftPanelOperation.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftPanelOperation;
            return proto.webcast.data.GiftPanelOperation.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftPanelOperation.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setLeftImage(a);
                        break;
                    case 2:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setRightImage(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setTitle(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setTitleColor(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setTitleSize(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setSchemeUrl(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setEventName(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftPanelOperation.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftPanelOperation.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftPanelOperation.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getLeftImage()) && e.writeMessage(1, a, s.Image.serializeBinaryToWriter), null != (a = t.getRightImage()) && e.writeMessage(2, a, s.Image.serializeBinaryToWriter), (a = t.getTitle()).length > 0 && e.writeString(3, a), (a = t.getTitleColor()).length > 0 && e.writeString(4, a), a = t.getTitleSize(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), (a = t.getSchemeUrl()).length > 0 && e.writeString(6, a), (a = t.getEventName()).length > 0 && e.writeString(7, a)
        },proto.webcast.data.GiftPanelOperation.prototype.getLeftImage = function () {
            return r.Message.getWrapperField(this, s.Image, 1)
        },proto.webcast.data.GiftPanelOperation.prototype.setLeftImage = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.GiftPanelOperation.prototype.clearLeftImage = function () {
            return this.setLeftImage(undefined)
        },proto.webcast.data.GiftPanelOperation.prototype.hasLeftImage = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.GiftPanelOperation.prototype.getRightImage = function () {
            return r.Message.getWrapperField(this, s.Image, 2)
        },proto.webcast.data.GiftPanelOperation.prototype.setRightImage = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.GiftPanelOperation.prototype.clearRightImage = function () {
            return this.setRightImage(undefined)
        },proto.webcast.data.GiftPanelOperation.prototype.hasRightImage = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.GiftPanelOperation.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.GiftPanelOperation.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.GiftPanelOperation.prototype.getTitleColor = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.GiftPanelOperation.prototype.setTitleColor = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.GiftPanelOperation.prototype.getTitleSize = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.GiftPanelOperation.prototype.setTitleSize = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.GiftPanelOperation.prototype.getSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.GiftPanelOperation.prototype.setSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.GiftPanelOperation.prototype.getEventName = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.GiftPanelOperation.prototype.setEventName = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.FreeGift.prototype.toObject = function (t) {
            return proto.webcast.data.FreeGift.toObject(t, this)
        }, proto.webcast.data.FreeGift.toObject = function (t, e) {
            var a = {
                id: r.Message.getFieldWithDefault(e, 1, "0"),
                count: r.Message.getFieldWithDefault(e, 2, "0"),
                content: r.Message.getFieldWithDefault(e, 3, ""),
                groupId: r.Message.getFieldWithDefault(e, 4, "0"),
                repeatCount: r.Message.getFieldWithDefault(e, 5, "0"),
                fanTickets: r.Message.getFieldWithDefault(e, 6, "0"),
                waterwmlon: r.Message.getFieldWithDefault(e, 7, "0")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.FreeGift.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.FreeGift;
            return proto.webcast.data.FreeGift.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.FreeGift.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setCount(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setContent(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setGroupId(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setRepeatCount(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setFanTickets(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setWaterwmlon(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.FreeGift.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.FreeGift.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.FreeGift.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getCount(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), (a = t.getContent()).length > 0 && e.writeString(3, a), a = t.getGroupId(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getRepeatCount(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getFanTickets(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getWaterwmlon(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a)
        },proto.webcast.data.FreeGift.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.FreeGift.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.FreeGift.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.FreeGift.prototype.setCount = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.FreeGift.prototype.getContent = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.FreeGift.prototype.setContent = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.FreeGift.prototype.getGroupId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.FreeGift.prototype.setGroupId = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.FreeGift.prototype.getRepeatCount = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.FreeGift.prototype.setRepeatCount = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.FreeGift.prototype.getFanTickets = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.FreeGift.prototype.setFanTickets = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.FreeGift.prototype.getWaterwmlon = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.FreeGift.prototype.setWaterwmlon = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.LuckyMoneyGiftMeta.prototype.toObject = function (t) {
            return proto.webcast.data.LuckyMoneyGiftMeta.toObject(t, this)
        }, proto.webcast.data.LuckyMoneyGiftMeta.toObject = function (t, e) {
            var a, o = {
                image: (a = e.getImage()) && s.Image.toObject(t, a),
                describe: r.Message.getFieldWithDefault(e, 2, ""),
                id: r.Message.getFieldWithDefault(e, 3, "0"),
                diamondCount: r.Message.getFieldWithDefault(e, 4, 0),
                icon: (a = e.getIcon()) && s.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.LuckyMoneyGiftMeta.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.LuckyMoneyGiftMeta;
            return proto.webcast.data.LuckyMoneyGiftMeta.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.LuckyMoneyGiftMeta.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setImage(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setDescribe(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 4:
                        a = e.readInt32();
                        t.setDiamondCount(a);
                        break;
                    case 5:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setIcon(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.LuckyMoneyGiftMeta.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.LuckyMoneyGiftMeta.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getImage()) && e.writeMessage(1, a, s.Image.serializeBinaryToWriter), (a = t.getDescribe()).length > 0 && e.writeString(2, a), a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), 0 !== (a = t.getDiamondCount()) && e.writeInt32(4, a), null != (a = t.getIcon()) && e.writeMessage(5, a, s.Image.serializeBinaryToWriter)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.getImage = function () {
            return r.Message.getWrapperField(this, s.Image, 1)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.setImage = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.clearImage = function () {
            return this.setImage(undefined)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.hasImage = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.getDescribe = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.setDescribe = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.setDiamondCount = function (t) {
            return r.Message.setProto3IntField(this, 4, t)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.setIcon = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        },proto.webcast.data.LuckyMoneyGiftMeta.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 5)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.FreeCellData.prototype.toObject = function (t) {
            return proto.webcast.data.FreeCellData.toObject(t, this)
        }, proto.webcast.data.FreeCellData.toObject = function (t, e) {
            var a, o = {
                timeNowMs: r.Message.getFieldWithDefault(e, 1, "0"),
                timeStartMs: r.Message.getFieldWithDefault(e, 2, "0"),
                timeFreezeEndMs: r.Message.getFieldWithDefault(e, 3, "0"),
                timeDoubleEndMs: r.Message.getFieldWithDefault(e, 4, "0"),
                timeEndMs: r.Message.getFieldWithDefault(e, 5, "0"),
                freeCellLength: r.Message.getFieldWithDefault(e, 6, "0"),
                isFreeze: r.Message.getBooleanFieldWithDefault(e, 7, !1),
                isDouble: r.Message.getBooleanFieldWithDefault(e, 8, !1),
                contributeMostUser: (a = e.getContributeMostUser()) && n.User.toObject(t, a),
                contributeMostCoins: r.Message.getFieldWithDefault(e, 10, "0"),
                distanceFromPreviousOne: r.Message.getFieldWithDefault(e, 11, "0"),
                indexInDayRanklist: r.Message.getFieldWithDefault(e, 12, "0"),
                giftId: r.Message.getFieldWithDefault(e, 13, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.FreeCellData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.FreeCellData;
            return proto.webcast.data.FreeCellData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.FreeCellData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setTimeNowMs(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setTimeStartMs(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setTimeFreezeEndMs(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setTimeDoubleEndMs(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setTimeEndMs(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setFreeCellLength(a);
                        break;
                    case 7:
                        a = e.readBool();
                        t.setIsFreeze(a);
                        break;
                    case 8:
                        a = e.readBool();
                        t.setIsDouble(a);
                        break;
                    case 9:
                        a = new n.User;
                        e.readMessage(a, n.User.deserializeBinaryFromReader), t.setContributeMostUser(a);
                        break;
                    case 10:
                        a = e.readInt64String();
                        t.setContributeMostCoins(a);
                        break;
                    case 11:
                        a = e.readInt64String();
                        t.setDistanceFromPreviousOne(a);
                        break;
                    case 12:
                        a = e.readInt64String();
                        t.setIndexInDayRanklist(a);
                        break;
                    case 13:
                        a = e.readInt64String();
                        t.setGiftId(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.FreeCellData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.FreeCellData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.FreeCellData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getTimeNowMs(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getTimeStartMs(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getTimeFreezeEndMs(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getTimeDoubleEndMs(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getTimeEndMs(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getFreeCellLength(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), (a = t.getIsFreeze()) && e.writeBool(7, a), (a = t.getIsDouble()) && e.writeBool(8, a), null != (a = t.getContributeMostUser()) && e.writeMessage(9, a, n.User.serializeBinaryToWriter), a = t.getContributeMostCoins(), 0 !== parseInt(a, 10) && e.writeInt64String(10, a), a = t.getDistanceFromPreviousOne(), 0 !== parseInt(a, 10) && e.writeInt64String(11, a), a = t.getIndexInDayRanklist(), 0 !== parseInt(a, 10) && e.writeInt64String(12, a), a = t.getGiftId(), 0 !== parseInt(a, 10) && e.writeInt64String(13, a)
        },proto.webcast.data.FreeCellData.prototype.getTimeNowMs = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.FreeCellData.prototype.setTimeNowMs = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.FreeCellData.prototype.getTimeStartMs = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.FreeCellData.prototype.setTimeStartMs = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.FreeCellData.prototype.getTimeFreezeEndMs = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.FreeCellData.prototype.setTimeFreezeEndMs = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.FreeCellData.prototype.getTimeDoubleEndMs = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.FreeCellData.prototype.setTimeDoubleEndMs = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.FreeCellData.prototype.getTimeEndMs = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.FreeCellData.prototype.setTimeEndMs = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.FreeCellData.prototype.getFreeCellLength = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.FreeCellData.prototype.setFreeCellLength = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.FreeCellData.prototype.getIsFreeze = function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        },proto.webcast.data.FreeCellData.prototype.setIsFreeze = function (t) {
            return r.Message.setProto3BooleanField(this, 7, t)
        },proto.webcast.data.FreeCellData.prototype.getIsDouble = function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1)
        },proto.webcast.data.FreeCellData.prototype.setIsDouble = function (t) {
            return r.Message.setProto3BooleanField(this, 8, t)
        },proto.webcast.data.FreeCellData.prototype.getContributeMostUser = function () {
            return r.Message.getWrapperField(this, n.User, 9)
        },proto.webcast.data.FreeCellData.prototype.setContributeMostUser = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        },proto.webcast.data.FreeCellData.prototype.clearContributeMostUser = function () {
            return this.setContributeMostUser(undefined)
        },proto.webcast.data.FreeCellData.prototype.hasContributeMostUser = function () {
            return null != r.Message.getField(this, 9)
        },proto.webcast.data.FreeCellData.prototype.getContributeMostCoins = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        },proto.webcast.data.FreeCellData.prototype.setContributeMostCoins = function (t) {
            return r.Message.setProto3StringIntField(this, 10, t)
        },proto.webcast.data.FreeCellData.prototype.getDistanceFromPreviousOne = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        },proto.webcast.data.FreeCellData.prototype.setDistanceFromPreviousOne = function (t) {
            return r.Message.setProto3StringIntField(this, 11, t)
        },proto.webcast.data.FreeCellData.prototype.getIndexInDayRanklist = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        },proto.webcast.data.FreeCellData.prototype.setIndexInDayRanklist = function (t) {
            return r.Message.setProto3StringIntField(this, 12, t)
        },proto.webcast.data.FreeCellData.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 13, "0")
        },proto.webcast.data.FreeCellData.prototype.setGiftId = function (t) {
            return r.Message.setProto3StringIntField(this, 13, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GameGiftData.prototype.toObject = function (t) {
            return proto.webcast.data.GameGiftData.toObject(t, this)
        }, proto.webcast.data.GameGiftData.toObject = function (t, e) {
            var a, r = {data: (a = e.getData()) && proto.webcast.data.GameGiftData.MonkeyData.toObject(t, a)};
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.GameGiftData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GameGiftData;
            return proto.webcast.data.GameGiftData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GameGiftData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = new proto.webcast.data.GameGiftData.MonkeyData;
                    e.readMessage(a, proto.webcast.data.GameGiftData.MonkeyData.deserializeBinaryFromReader), t.setData(a)
                } else e.skipField()
            }
            return t
        },proto.webcast.data.GameGiftData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GameGiftData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GameGiftData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getData()) && e.writeMessage(1, a, proto.webcast.data.GameGiftData.MonkeyData.serializeBinaryToWriter)
        },proto.webcast.data.GameGiftData.MonkeyData.repeatedFields_ = [5],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GameGiftData.MonkeyData.prototype.toObject = function (t) {
            return proto.webcast.data.GameGiftData.MonkeyData.toObject(t, this)
        }, proto.webcast.data.GameGiftData.MonkeyData.toObject = function (t, e) {
            var a = {
                multiplier: r.Message.getFieldWithDefault(e, 1, 0),
                addend: r.Message.getFieldWithDefault(e, 2, 0),
                seed: r.Message.getFieldWithDefault(e, 3, 0),
                token: r.Message.getFieldWithDefault(e, 4, ""),
                rangemapList: r.Message.toObjectList(e.getRangemapList(), proto.webcast.data.GameGiftData.MonkeyData.Range.toObject, t),
                anchorRankBestUserName: r.Message.getFieldWithDefault(e, 6, ""),
                anchorRankBestScore: r.Message.getFieldWithDefault(e, 7, 0),
                bestScoreSelf: r.Message.getFieldWithDefault(e, 8, 0)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GameGiftData.MonkeyData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GameGiftData.MonkeyData;
            return proto.webcast.data.GameGiftData.MonkeyData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GameGiftData.MonkeyData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readUint32();
                        t.setMultiplier(a);
                        break;
                    case 2:
                        a = e.readUint32();
                        t.setAddend(a);
                        break;
                    case 3:
                        a = e.readUint32();
                        t.setSeed(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setToken(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.GameGiftData.MonkeyData.Range;
                        e.readMessage(a, proto.webcast.data.GameGiftData.MonkeyData.Range.deserializeBinaryFromReader), t.addRangemap(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setAnchorRankBestUserName(a);
                        break;
                    case 7:
                        a = e.readInt32();
                        t.setAnchorRankBestScore(a);
                        break;
                    case 8:
                        a = e.readInt32();
                        t.setBestScoreSelf(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GameGiftData.MonkeyData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GameGiftData.MonkeyData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getMultiplier()) && e.writeUint32(1, a), 0 !== (a = t.getAddend()) && e.writeUint32(2, a), 0 !== (a = t.getSeed()) && e.writeUint32(3, a), (a = t.getToken()).length > 0 && e.writeString(4, a), (a = t.getRangemapList()).length > 0 && e.writeRepeatedMessage(5, a, proto.webcast.data.GameGiftData.MonkeyData.Range.serializeBinaryToWriter), (a = t.getAnchorRankBestUserName()).length > 0 && e.writeString(6, a), 0 !== (a = t.getAnchorRankBestScore()) && e.writeInt32(7, a), 0 !== (a = t.getBestScoreSelf()) && e.writeInt32(8, a)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.toObject = function (t) {
            return proto.webcast.data.GameGiftData.MonkeyData.Range.toObject(t, this)
        }, proto.webcast.data.GameGiftData.MonkeyData.Range.toObject = function (t, e) {
            var a = {
                min: r.Message.getFieldWithDefault(e, 1, 0),
                max: r.Message.getFieldWithDefault(e, 2, 0),
                result: r.Message.getFieldWithDefault(e, 3, 0)
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.GameGiftData.MonkeyData.Range.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GameGiftData.MonkeyData.Range;
            return proto.webcast.data.GameGiftData.MonkeyData.Range.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt32();
                        t.setMin(a);
                        break;
                    case 2:
                        a = e.readInt32();
                        t.setMax(a);
                        break;
                    case 3:
                        a = e.readInt32();
                        t.setResult(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GameGiftData.MonkeyData.Range.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GameGiftData.MonkeyData.Range.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getMin()) && e.writeInt32(1, a), 0 !== (a = t.getMax()) && e.writeInt32(2, a), 0 !== (a = t.getResult()) && e.writeInt32(3, a)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.getMin = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.setMin = function (t) {
            return r.Message.setProto3IntField(this, 1, t)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.getMax = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.setMax = function (t) {
            return r.Message.setProto3IntField(this, 2, t)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.getResult = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.Range.prototype.setResult = function (t) {
            return r.Message.setProto3IntField(this, 3, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getMultiplier = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setMultiplier = function (t) {
            return r.Message.setProto3IntField(this, 1, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getAddend = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setAddend = function (t) {
            return r.Message.setProto3IntField(this, 2, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getSeed = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setSeed = function (t) {
            return r.Message.setProto3IntField(this, 3, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getToken = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setToken = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getRangemapList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.GameGiftData.MonkeyData.Range, 5)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setRangemapList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 5, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.addRangemap = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 5, t, proto.webcast.data.GameGiftData.MonkeyData.Range, e)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.clearRangemapList = function () {
            return this.setRangemapList([])
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getAnchorRankBestUserName = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setAnchorRankBestUserName = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getAnchorRankBestScore = function () {
            return r.Message.getFieldWithDefault(this, 7, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setAnchorRankBestScore = function (t) {
            return r.Message.setProto3IntField(this, 7, t)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.getBestScoreSelf = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        },proto.webcast.data.GameGiftData.MonkeyData.prototype.setBestScoreSelf = function (t) {
            return r.Message.setProto3IntField(this, 8, t)
        },proto.webcast.data.GameGiftData.prototype.getData = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GameGiftData.MonkeyData, 1)
        },proto.webcast.data.GameGiftData.prototype.setData = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.GameGiftData.prototype.clearData = function () {
            return this.setData(undefined)
        },proto.webcast.data.GameGiftData.prototype.hasData = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.AnchorGiftData.prototype.toObject = function (t) {
            return proto.webcast.data.AnchorGiftData.toObject(t, this)
        }, proto.webcast.data.AnchorGiftData.toObject = function (t, e) {
            var a, r = {anchorDiyOriginImg: (a = e.getAnchorDiyOriginImg()) && s.Image.toObject(t, a)};
            return t && (r.$jspbMessageInstance = e), r
        }),proto.webcast.data.AnchorGiftData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.AnchorGiftData;
            return proto.webcast.data.AnchorGiftData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.AnchorGiftData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = new s.Image;
                    e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setAnchorDiyOriginImg(a)
                } else e.skipField()
            }
            return t
        },proto.webcast.data.AnchorGiftData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.AnchorGiftData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.AnchorGiftData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getAnchorDiyOriginImg()) && e.writeMessage(1, a, s.Image.serializeBinaryToWriter)
        },proto.webcast.data.AnchorGiftData.prototype.getAnchorDiyOriginImg = function () {
            return r.Message.getWrapperField(this, s.Image, 1)
        },proto.webcast.data.AnchorGiftData.prototype.setAnchorDiyOriginImg = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.AnchorGiftData.prototype.clearAnchorDiyOriginImg = function () {
            return this.setAnchorDiyOriginImg(undefined)
        },proto.webcast.data.AnchorGiftData.prototype.hasAnchorDiyOriginImg = function () {
            return null != r.Message.getField(this, 1)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MonkeyDataRedis.prototype.toObject = function (t) {
            return proto.webcast.data.MonkeyDataRedis.toObject(t, this)
        }, proto.webcast.data.MonkeyDataRedis.toObject = function (t, e) {
            var a = {
                time: r.Message.getFieldWithDefault(e, 1, "0"),
                liveId: r.Message.getFieldWithDefault(e, 2, "0"),
                roomId: r.Message.getFieldWithDefault(e, 3, "0"),
                anchorId: r.Message.getFieldWithDefault(e, 4, "0"),
                userId: r.Message.getFieldWithDefault(e, 5, "0"),
                giftId: r.Message.getFieldWithDefault(e, 6, "0"),
                seed: r.Message.getFieldWithDefault(e, 7, "0"),
                score: r.Message.getFieldWithDefault(e, 8, "0"),
                token: r.Message.getFieldWithDefault(e, 9, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.MonkeyDataRedis.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MonkeyDataRedis;
            return proto.webcast.data.MonkeyDataRedis.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MonkeyDataRedis.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setTime(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setLiveId(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setRoomId(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setAnchorId(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setUserId(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setGiftId(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setSeed(a);
                        break;
                    case 8:
                        a = e.readInt64String();
                        t.setScore(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setToken(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MonkeyDataRedis.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MonkeyDataRedis.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MonkeyDataRedis.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getTime(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getLiveId(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getRoomId(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getAnchorId(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getUserId(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getGiftId(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getSeed(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), a = t.getScore(), 0 !== parseInt(a, 10) && e.writeInt64String(8, a), (a = t.getToken()).length > 0 && e.writeString(9, a)
        },proto.webcast.data.MonkeyDataRedis.prototype.getTime = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setTime = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getLiveId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setLiveId = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setRoomId = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getAnchorId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setAnchorId = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setUserId = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setGiftId = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getSeed = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setSeed = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.data.MonkeyDataRedis.prototype.setScore = function (t) {
            return r.Message.setProto3StringIntField(this, 8, t)
        },proto.webcast.data.MonkeyDataRedis.prototype.getToken = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.data.MonkeyDataRedis.prototype.setToken = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        },proto.webcast.data.MonkeyGiftRankData.repeatedFields_ = [4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MonkeyGiftRankData.prototype.toObject = function (t) {
            return proto.webcast.data.MonkeyGiftRankData.toObject(t, this)
        }, proto.webcast.data.MonkeyGiftRankData.toObject = function (t, e) {
            var a, o = {
                type: r.Message.getFieldWithDefault(e, 1, "0"),
                historyBest: (a = e.getHistoryBest()) && proto.webcast.data.MonkeyGiftRankData.Rank.toObject(t, a),
                keepRecordDays: r.Message.getFieldWithDefault(e, 3, 0),
                rankListList: r.Message.toObjectList(e.getRankListList(), proto.webcast.data.MonkeyGiftRankData.Rank.toObject, t),
                selfRank: (a = e.getSelfRank()) && proto.webcast.data.MonkeyGiftRankData.Rank.toObject(t, a),
                hasMore: r.Message.getBooleanFieldWithDefault(e, 6, !1)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.MonkeyGiftRankData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MonkeyGiftRankData;
            return proto.webcast.data.MonkeyGiftRankData.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MonkeyGiftRankData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setType(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.MonkeyGiftRankData.Rank;
                        e.readMessage(a, proto.webcast.data.MonkeyGiftRankData.Rank.deserializeBinaryFromReader), t.setHistoryBest(a);
                        break;
                    case 3:
                        a = e.readInt32();
                        t.setKeepRecordDays(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.MonkeyGiftRankData.Rank;
                        e.readMessage(a, proto.webcast.data.MonkeyGiftRankData.Rank.deserializeBinaryFromReader), t.addRankList(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.MonkeyGiftRankData.Rank;
                        e.readMessage(a, proto.webcast.data.MonkeyGiftRankData.Rank.deserializeBinaryFromReader), t.setSelfRank(a);
                        break;
                    case 6:
                        a = e.readBool();
                        t.setHasMore(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MonkeyGiftRankData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MonkeyGiftRankData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MonkeyGiftRankData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getType(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), null != (a = t.getHistoryBest()) && e.writeMessage(2, a, proto.webcast.data.MonkeyGiftRankData.Rank.serializeBinaryToWriter), 0 !== (a = t.getKeepRecordDays()) && e.writeInt32(3, a), (a = t.getRankListList()).length > 0 && e.writeRepeatedMessage(4, a, proto.webcast.data.MonkeyGiftRankData.Rank.serializeBinaryToWriter), null != (a = t.getSelfRank()) && e.writeMessage(5, a, proto.webcast.data.MonkeyGiftRankData.Rank.serializeBinaryToWriter), (a = t.getHasMore()) && e.writeBool(6, a)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.MonkeyGiftRankData.Rank.prototype.toObject = function (t) {
            return proto.webcast.data.MonkeyGiftRankData.Rank.toObject(t, this)
        }, proto.webcast.data.MonkeyGiftRankData.Rank.toObject = function (t, e) {
            var a, o = {
                user: (a = e.getUser()) && n.User.toObject(t, a),
                onList: r.Message.getBooleanFieldWithDefault(e, 2, !1),
                rank: r.Message.getFieldWithDefault(e, 3, "0"),
                score: r.Message.getFieldWithDefault(e, 4, 0),
                delta: r.Message.getFieldWithDefault(e, 5, 0),
                medal: r.Message.getFieldWithDefault(e, 6, 0),
                anchorId: r.Message.getFieldWithDefault(e, 7, ""),
                anchorName: r.Message.getFieldWithDefault(e, 8, ""),
                anchorRoomId: r.Message.getFieldWithDefault(e, 9, ""),
                secAnchorId: r.Message.getFieldWithDefault(e, 10, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.MonkeyGiftRankData.Rank.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.MonkeyGiftRankData.Rank;
            return proto.webcast.data.MonkeyGiftRankData.Rank.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.MonkeyGiftRankData.Rank.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new n.User;
                        e.readMessage(a, n.User.deserializeBinaryFromReader), t.setUser(a);
                        break;
                    case 2:
                        a = e.readBool();
                        t.setOnList(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setRank(a);
                        break;
                    case 4:
                        a = e.readInt32();
                        t.setScore(a);
                        break;
                    case 5:
                        a = e.readInt32();
                        t.setDelta(a);
                        break;
                    case 6:
                        a = e.readInt32();
                        t.setMedal(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setAnchorId(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setAnchorName(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setAnchorRoomId(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setSecAnchorId(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.MonkeyGiftRankData.Rank.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.MonkeyGiftRankData.Rank.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getUser()) && e.writeMessage(1, a, n.User.serializeBinaryToWriter), (a = t.getOnList()) && e.writeBool(2, a), a = t.getRank(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), 0 !== (a = t.getScore()) && e.writeInt32(4, a), 0 !== (a = t.getDelta()) && e.writeInt32(5, a), 0 !== (a = t.getMedal()) && e.writeInt32(6, a), (a = t.getAnchorId()).length > 0 && e.writeString(7, a), (a = t.getAnchorName()).length > 0 && e.writeString(8, a), (a = t.getAnchorRoomId()).length > 0 && e.writeString(9, a), (a = t.getSecAnchorId()).length > 0 && e.writeString(10, a)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getUser = function () {
            return r.Message.getWrapperField(this, n.User, 1)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setUser = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.hasUser = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getOnList = function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setOnList = function (t) {
            return r.Message.setProto3BooleanField(this, 2, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getRank = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setRank = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 4, 0)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setScore = function (t) {
            return r.Message.setProto3IntField(this, 4, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getDelta = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setDelta = function (t) {
            return r.Message.setProto3IntField(this, 5, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getMedal = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setMedal = function (t) {
            return r.Message.setProto3IntField(this, 6, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getAnchorId = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setAnchorId = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getAnchorName = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setAnchorName = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getAnchorRoomId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setAnchorRoomId = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.getSecAnchorId = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.MonkeyGiftRankData.Rank.prototype.setSecAnchorId = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },proto.webcast.data.MonkeyGiftRankData.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.MonkeyGiftRankData.prototype.setType = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.MonkeyGiftRankData.prototype.getHistoryBest = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.MonkeyGiftRankData.Rank, 2)
        },proto.webcast.data.MonkeyGiftRankData.prototype.setHistoryBest = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.MonkeyGiftRankData.prototype.clearHistoryBest = function () {
            return this.setHistoryBest(undefined)
        },proto.webcast.data.MonkeyGiftRankData.prototype.hasHistoryBest = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.MonkeyGiftRankData.prototype.getKeepRecordDays = function () {
            return r.Message.getFieldWithDefault(this, 3, 0)
        },proto.webcast.data.MonkeyGiftRankData.prototype.setKeepRecordDays = function (t) {
            return r.Message.setProto3IntField(this, 3, t)
        },proto.webcast.data.MonkeyGiftRankData.prototype.getRankListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.MonkeyGiftRankData.Rank, 4)
        },proto.webcast.data.MonkeyGiftRankData.prototype.setRankListList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 4, t)
        },proto.webcast.data.MonkeyGiftRankData.prototype.addRankList = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 4, t, proto.webcast.data.MonkeyGiftRankData.Rank, e)
        },proto.webcast.data.MonkeyGiftRankData.prototype.clearRankListList = function () {
            return this.setRankListList([])
        },proto.webcast.data.MonkeyGiftRankData.prototype.getSelfRank = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.MonkeyGiftRankData.Rank, 5)
        },proto.webcast.data.MonkeyGiftRankData.prototype.setSelfRank = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        },proto.webcast.data.MonkeyGiftRankData.prototype.clearSelfRank = function () {
            return this.setSelfRank(undefined)
        },proto.webcast.data.MonkeyGiftRankData.prototype.hasSelfRank = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.data.MonkeyGiftRankData.prototype.getHasMore = function () {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        },proto.webcast.data.MonkeyGiftRankData.prototype.setHasMore = function (t) {
            return r.Message.setProto3BooleanField(this, 6, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.DoodleTemplate.prototype.toObject = function (t) {
            return proto.webcast.data.DoodleTemplate.toObject(t, this)
        }, proto.webcast.data.DoodleTemplate.toObject = function (t, e) {
            var a, o = {
                templateId: r.Message.getFieldWithDefault(e, 1, "0"),
                image: (a = e.getImage()) && s.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.DoodleTemplate.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.DoodleTemplate;
            return proto.webcast.data.DoodleTemplate.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.DoodleTemplate.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setTemplateId(a);
                        break;
                    case 2:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setImage(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.DoodleTemplate.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.DoodleTemplate.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.DoodleTemplate.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getTemplateId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), null != (a = t.getImage()) && e.writeMessage(2, a, s.Image.serializeBinaryToWriter)
        },proto.webcast.data.DoodleTemplate.prototype.getTemplateId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.DoodleTemplate.prototype.setTemplateId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.DoodleTemplate.prototype.getImage = function () {
            return r.Message.getWrapperField(this, s.Image, 2)
        },proto.webcast.data.DoodleTemplate.prototype.setImage = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.DoodleTemplate.prototype.clearImage = function () {
            return this.setImage(undefined)
        },proto.webcast.data.DoodleTemplate.prototype.hasImage = function () {
            return null != r.Message.getField(this, 2)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftBanner.prototype.toObject = function (t) {
            return proto.webcast.data.GiftBanner.toObject(t, this)
        }, proto.webcast.data.GiftBanner.toObject = function (t, e) {
            var a, o = {
                displayText: (a = e.getDisplayText()) && d.Text.toObject(t, a),
                displayTextBgColor: r.Message.getFieldWithDefault(e, 2, ""),
                boxImg: (a = e.getBoxImg()) && s.Image.toObject(t, a),
                bgImg: (a = e.getBgImg()) && s.Image.toObject(t, a),
                schemeUrl: r.Message.getFieldWithDefault(e, 5, ""),
                animate: r.Message.getBooleanFieldWithDefault(e, 6, !1),
                boxId: r.Message.getFieldWithDefault(e, 7, "0"),
                availableBoxCount: r.Message.getFieldWithDefault(e, 8, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftBanner.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftBanner;
            return proto.webcast.data.GiftBanner.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftBanner.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new d.Text;
                        e.readMessage(a, d.Text.deserializeBinaryFromReader), t.setDisplayText(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setDisplayTextBgColor(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setBoxImg(a);
                        break;
                    case 4:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setBgImg(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setSchemeUrl(a);
                        break;
                    case 6:
                        a = e.readBool();
                        t.setAnimate(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setBoxId(a);
                        break;
                    case 8:
                        a = e.readInt64String();
                        t.setAvailableBoxCount(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftBanner.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftBanner.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftBanner.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getDisplayText()) && e.writeMessage(1, a, d.Text.serializeBinaryToWriter), (a = t.getDisplayTextBgColor()).length > 0 && e.writeString(2, a), null != (a = t.getBoxImg()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), null != (a = t.getBgImg()) && e.writeMessage(4, a, s.Image.serializeBinaryToWriter), (a = t.getSchemeUrl()).length > 0 && e.writeString(5, a), (a = t.getAnimate()) && e.writeBool(6, a), a = t.getBoxId(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), a = t.getAvailableBoxCount(), 0 !== parseInt(a, 10) && e.writeInt64String(8, a)
        },proto.webcast.data.GiftBanner.prototype.getDisplayText = function () {
            return r.Message.getWrapperField(this, d.Text, 1)
        },proto.webcast.data.GiftBanner.prototype.setDisplayText = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.GiftBanner.prototype.clearDisplayText = function () {
            return this.setDisplayText(undefined)
        },proto.webcast.data.GiftBanner.prototype.hasDisplayText = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.GiftBanner.prototype.getDisplayTextBgColor = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.GiftBanner.prototype.setDisplayTextBgColor = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.GiftBanner.prototype.getBoxImg = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        },proto.webcast.data.GiftBanner.prototype.setBoxImg = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.GiftBanner.prototype.clearBoxImg = function () {
            return this.setBoxImg(undefined)
        },proto.webcast.data.GiftBanner.prototype.hasBoxImg = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.data.GiftBanner.prototype.getBgImg = function () {
            return r.Message.getWrapperField(this, s.Image, 4)
        },proto.webcast.data.GiftBanner.prototype.setBgImg = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.GiftBanner.prototype.clearBgImg = function () {
            return this.setBgImg(undefined)
        },proto.webcast.data.GiftBanner.prototype.hasBgImg = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.GiftBanner.prototype.getSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.GiftBanner.prototype.setSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.GiftBanner.prototype.getAnimate = function () {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        },proto.webcast.data.GiftBanner.prototype.setAnimate = function (t) {
            return r.Message.setProto3BooleanField(this, 6, t)
        },proto.webcast.data.GiftBanner.prototype.getBoxId = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.GiftBanner.prototype.setBoxId = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },proto.webcast.data.GiftBanner.prototype.getAvailableBoxCount = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.data.GiftBanner.prototype.setAvailableBoxCount = function (t) {
            return r.Message.setProto3StringIntField(this, 8, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EffectMixImageInfo.prototype.toObject = function (t) {
            return proto.webcast.data.EffectMixImageInfo.toObject(t, this)
        }, proto.webcast.data.EffectMixImageInfo.toObject = function (t, e) {
            var a, o = {
                imageKey: r.Message.getFieldWithDefault(e, 1, ""),
                mixImage: (a = e.getMixImage()) && s.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EffectMixImageInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EffectMixImageInfo;
            return proto.webcast.data.EffectMixImageInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EffectMixImageInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setImageKey(a);
                        break;
                    case 2:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setMixImage(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EffectMixImageInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EffectMixImageInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EffectMixImageInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getImageKey()).length > 0 && e.writeString(1, a), null != (a = t.getMixImage()) && e.writeMessage(2, a, s.Image.serializeBinaryToWriter)
        },proto.webcast.data.EffectMixImageInfo.prototype.getImageKey = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.EffectMixImageInfo.prototype.setImageKey = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.EffectMixImageInfo.prototype.getMixImage = function () {
            return r.Message.getWrapperField(this, s.Image, 2)
        },proto.webcast.data.EffectMixImageInfo.prototype.setMixImage = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.EffectMixImageInfo.prototype.clearMixImage = function () {
            return this.setMixImage(undefined)
        },proto.webcast.data.EffectMixImageInfo.prototype.hasMixImage = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.AssetEffectMixInfo.repeatedFields_ = [1],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.AssetEffectMixInfo.prototype.toObject = function (t) {
            return proto.webcast.data.AssetEffectMixInfo.toObject(t, this)
        }, proto.webcast.data.AssetEffectMixInfo.toObject = function (t, e) {
            var a = {effectMixImageInfosList: r.Message.toObjectList(e.getEffectMixImageInfosList(), proto.webcast.data.EffectMixImageInfo.toObject, t)};
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.AssetEffectMixInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.AssetEffectMixInfo;
            return proto.webcast.data.AssetEffectMixInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.AssetEffectMixInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = new proto.webcast.data.EffectMixImageInfo;
                    e.readMessage(a, proto.webcast.data.EffectMixImageInfo.deserializeBinaryFromReader), t.addEffectMixImageInfos(a)
                } else e.skipField()
            }
            return t
        },proto.webcast.data.AssetEffectMixInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.AssetEffectMixInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.AssetEffectMixInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getEffectMixImageInfosList()).length > 0 && e.writeRepeatedMessage(1, a, proto.webcast.data.EffectMixImageInfo.serializeBinaryToWriter)
        },proto.webcast.data.AssetEffectMixInfo.prototype.getEffectMixImageInfosList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.EffectMixImageInfo, 1)
        },proto.webcast.data.AssetEffectMixInfo.prototype.setEffectMixImageInfosList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 1, t)
        },proto.webcast.data.AssetEffectMixInfo.prototype.addEffectMixImageInfos = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 1, t, proto.webcast.data.EffectMixImageInfo, e)
        },proto.webcast.data.AssetEffectMixInfo.prototype.clearEffectMixImageInfosList = function () {
            return this.setEffectMixImageInfosList([])
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftTrayInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GiftTrayInfo.toObject(t, this)
        }, proto.webcast.data.GiftTrayInfo.toObject = function (t, e) {
            var a, o = {
                trayDisplayText: (a = e.getTrayDisplayText()) && d.Text.toObject(t, a),
                trayBaseImg: (a = e.getTrayBaseImg()) && s.Image.toObject(t, a),
                trayHeadImg: (a = e.getTrayHeadImg()) && s.Image.toObject(t, a),
                trayRightImg: (a = e.getTrayRightImg()) && s.Image.toObject(t, a),
                trayLevel: r.Message.getFieldWithDefault(e, 5, "0"),
                trayDynamicImg: (a = e.getTrayDynamicImg()) && s.Image.toObject(t, a),
                traySchemaUrl: r.Message.getFieldWithDefault(e, 7, ""),
                trayType: r.Message.getFieldWithDefault(e, 8, 0),
                trayBaseImgV2: (a = e.getTrayBaseImgV2()) && s.Image.toObject(t, a),
                trayRightImgV2: (a = e.getTrayRightImgV2()) && s.Image.toObject(t, a),
                useHighLayer: r.Message.getBooleanFieldWithDefault(e, 11, !1),
                duration: r.Message.getFieldWithDefault(e, 12, "0"),
                toast: r.Message.getFieldWithDefault(e, 13, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftTrayInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftTrayInfo;
            return proto.webcast.data.GiftTrayInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftTrayInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new d.Text;
                        e.readMessage(a, d.Text.deserializeBinaryFromReader), t.setTrayDisplayText(a);
                        break;
                    case 2:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTrayBaseImg(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTrayHeadImg(a);
                        break;
                    case 4:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTrayRightImg(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setTrayLevel(a);
                        break;
                    case 6:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTrayDynamicImg(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setTraySchemaUrl(a);
                        break;
                    case 8:
                        a = e.readInt32();
                        t.setTrayType(a);
                        break;
                    case 9:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTrayBaseImgV2(a);
                        break;
                    case 10:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setTrayRightImgV2(a);
                        break;
                    case 11:
                        a = e.readBool();
                        t.setUseHighLayer(a);
                        break;
                    case 12:
                        a = e.readInt64String();
                        t.setDuration(a);
                        break;
                    case 13:
                        a = e.readString();
                        t.setToast(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftTrayInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftTrayInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftTrayInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getTrayDisplayText()) && e.writeMessage(1, a, d.Text.serializeBinaryToWriter), null != (a = t.getTrayBaseImg()) && e.writeMessage(2, a, s.Image.serializeBinaryToWriter), null != (a = t.getTrayHeadImg()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), null != (a = t.getTrayRightImg()) && e.writeMessage(4, a, s.Image.serializeBinaryToWriter), a = t.getTrayLevel(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), null != (a = t.getTrayDynamicImg()) && e.writeMessage(6, a, s.Image.serializeBinaryToWriter), (a = t.getTraySchemaUrl()).length > 0 && e.writeString(7, a), 0 !== (a = t.getTrayType()) && e.writeInt32(8, a), null != (a = t.getTrayBaseImgV2()) && e.writeMessage(9, a, s.Image.serializeBinaryToWriter), null != (a = t.getTrayRightImgV2()) && e.writeMessage(10, a, s.Image.serializeBinaryToWriter), (a = t.getUseHighLayer()) && e.writeBool(11, a), a = t.getDuration(), 0 !== parseInt(a, 10) && e.writeInt64String(12, a), (a = t.getToast()).length > 0 && e.writeString(13, a)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayDisplayText = function () {
            return r.Message.getWrapperField(this, d.Text, 1)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayDisplayText = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayDisplayText = function () {
            return this.setTrayDisplayText(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayDisplayText = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayBaseImg = function () {
            return r.Message.getWrapperField(this, s.Image, 2)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayBaseImg = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayBaseImg = function () {
            return this.setTrayBaseImg(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayBaseImg = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayHeadImg = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayHeadImg = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayHeadImg = function () {
            return this.setTrayHeadImg(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayHeadImg = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayRightImg = function () {
            return r.Message.getWrapperField(this, s.Image, 4)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayRightImg = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayRightImg = function () {
            return this.setTrayRightImg(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayRightImg = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayLevel = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayLevel = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayDynamicImg = function () {
            return r.Message.getWrapperField(this, s.Image, 6)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayDynamicImg = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayDynamicImg = function () {
            return this.setTrayDynamicImg(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayDynamicImg = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.data.GiftTrayInfo.prototype.getTraySchemaUrl = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.GiftTrayInfo.prototype.setTraySchemaUrl = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayType = function () {
            return r.Message.getFieldWithDefault(this, 8, 0)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayType = function (t) {
            return r.Message.setProto3IntField(this, 8, t)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayBaseImgV2 = function () {
            return r.Message.getWrapperField(this, s.Image, 9)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayBaseImgV2 = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayBaseImgV2 = function () {
            return this.setTrayBaseImgV2(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayBaseImgV2 = function () {
            return null != r.Message.getField(this, 9)
        },proto.webcast.data.GiftTrayInfo.prototype.getTrayRightImgV2 = function () {
            return r.Message.getWrapperField(this, s.Image, 10)
        },proto.webcast.data.GiftTrayInfo.prototype.setTrayRightImgV2 = function (t) {
            return r.Message.setWrapperField(this, 10, t)
        },proto.webcast.data.GiftTrayInfo.prototype.clearTrayRightImgV2 = function () {
            return this.setTrayRightImgV2(undefined)
        },proto.webcast.data.GiftTrayInfo.prototype.hasTrayRightImgV2 = function () {
            return null != r.Message.getField(this, 10)
        },proto.webcast.data.GiftTrayInfo.prototype.getUseHighLayer = function () {
            return r.Message.getBooleanFieldWithDefault(this, 11, !1)
        },proto.webcast.data.GiftTrayInfo.prototype.setUseHighLayer = function (t) {
            return r.Message.setProto3BooleanField(this, 11, t)
        },proto.webcast.data.GiftTrayInfo.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        },proto.webcast.data.GiftTrayInfo.prototype.setDuration = function (t) {
            return r.Message.setProto3StringIntField(this, 12, t)
        },proto.webcast.data.GiftTrayInfo.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 13, "")
        },proto.webcast.data.GiftTrayInfo.prototype.setToast = function (t) {
            return r.Message.setProto3StringField(this, 13, t)
        },proto.webcast.data.GiftExtra.repeatedFields_ = [4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftExtra.prototype.toObject = function (t) {
            return proto.webcast.data.GiftExtra.toObject(t, this)
        }, proto.webcast.data.GiftExtra.toObject = function (t, e) {
            var a, o = {
                giftId: r.Message.getFieldWithDefault(e, 1, "0"),
                subscribeGiftPackInfo: (a = e.getSubscribeGiftPackInfo()) && proto.webcast.data.SubscribeGiftPackInfo.toObject(t, a),
                bannerGiftInfo: r.Message.getFieldWithDefault(e, 3, ""),
                giftBuffInfosList: r.Message.toObjectList(e.getGiftBuffInfosList(), proto.webcast.data.GiftBuffInfo.toObject, t),
                giftPanelTopDescSchemeUrl: r.Message.getFieldWithDefault(e, 5, ""),
                diyGiftToolbarInfo: (a = e.getDiyGiftToolbarInfo()) && proto.webcast.data.DIYGiftToolbarInfo.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.GiftExtra.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftExtra;
            return proto.webcast.data.GiftExtra.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.GiftExtra.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setGiftId(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.SubscribeGiftPackInfo;
                        e.readMessage(a, proto.webcast.data.SubscribeGiftPackInfo.deserializeBinaryFromReader), t.setSubscribeGiftPackInfo(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setBannerGiftInfo(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.GiftBuffInfo;
                        e.readMessage(a, proto.webcast.data.GiftBuffInfo.deserializeBinaryFromReader), t.addGiftBuffInfos(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setGiftPanelTopDescSchemeUrl(a);
                        break;
                    case 6:
                        a = new proto.webcast.data.DIYGiftToolbarInfo;
                        e.readMessage(a, proto.webcast.data.DIYGiftToolbarInfo.deserializeBinaryFromReader), t.setDiyGiftToolbarInfo(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.GiftExtra.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftExtra.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.GiftExtra.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getGiftId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), null != (a = t.getSubscribeGiftPackInfo()) && e.writeMessage(2, a, proto.webcast.data.SubscribeGiftPackInfo.serializeBinaryToWriter), (a = t.getBannerGiftInfo()).length > 0 && e.writeString(3, a), (a = t.getGiftBuffInfosList()).length > 0 && e.writeRepeatedMessage(4, a, proto.webcast.data.GiftBuffInfo.serializeBinaryToWriter), (a = t.getGiftPanelTopDescSchemeUrl()).length > 0 && e.writeString(5, a), null != (a = t.getDiyGiftToolbarInfo()) && e.writeMessage(6, a, proto.webcast.data.DIYGiftToolbarInfo.serializeBinaryToWriter)
        },proto.webcast.data.GiftExtra.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.GiftExtra.prototype.setGiftId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.GiftExtra.prototype.getSubscribeGiftPackInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.SubscribeGiftPackInfo, 2)
        },proto.webcast.data.GiftExtra.prototype.setSubscribeGiftPackInfo = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.GiftExtra.prototype.clearSubscribeGiftPackInfo = function () {
            return this.setSubscribeGiftPackInfo(undefined)
        },proto.webcast.data.GiftExtra.prototype.hasSubscribeGiftPackInfo = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.GiftExtra.prototype.getBannerGiftInfo = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.GiftExtra.prototype.setBannerGiftInfo = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.GiftExtra.prototype.getGiftBuffInfosList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.GiftBuffInfo, 4)
        },proto.webcast.data.GiftExtra.prototype.setGiftBuffInfosList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 4, t)
        },proto.webcast.data.GiftExtra.prototype.addGiftBuffInfos = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 4, t, proto.webcast.data.GiftBuffInfo, e)
        },proto.webcast.data.GiftExtra.prototype.clearGiftBuffInfosList = function () {
            return this.setGiftBuffInfosList([])
        },proto.webcast.data.GiftExtra.prototype.getGiftPanelTopDescSchemeUrl = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.GiftExtra.prototype.setGiftPanelTopDescSchemeUrl = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.GiftExtra.prototype.getDiyGiftToolbarInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.DIYGiftToolbarInfo, 6)
        },proto.webcast.data.GiftExtra.prototype.setDiyGiftToolbarInfo = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        },proto.webcast.data.GiftExtra.prototype.clearDiyGiftToolbarInfo = function () {
            return this.setDiyGiftToolbarInfo(undefined)
        },proto.webcast.data.GiftExtra.prototype.hasDiyGiftToolbarInfo = function () {
            return null != r.Message.getField(this, 6)
        },proto.webcast.data.DIYGiftToolbarInfo.repeatedFields_ = [1, 4],r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.DIYGiftToolbarInfo.prototype.toObject = function (t) {
            return proto.webcast.data.DIYGiftToolbarInfo.toObject(t, this)
        }, proto.webcast.data.DIYGiftToolbarInfo.toObject = function (t, e) {
            var a, o = {
                cardsList: r.Message.toObjectList(e.getCardsList(), proto.webcast.data.DIYGiftCardInfo.toObject, t),
                button: (a = e.getButton()) && proto.webcast.data.DIYPageEnterButton.toObject(t, a),
                defaultGiftDescribeImg: (a = e.getDefaultGiftDescribeImg()) && s.Image.toObject(t, a),
                forceIndexCardsList: r.Message.toObjectList(e.getForceIndexCardsList(), proto.webcast.data.DIYGiftCardInfo.toObject, t),
                maxTotalCardNumber: r.Message.getFieldWithDefault(e, 5, 0),
                maxLocalCardNumber: r.Message.getFieldWithDefault(e, 6, 0),
                configId: r.Message.getFieldWithDefault(e, 7, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.DIYGiftToolbarInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.DIYGiftToolbarInfo;
            return proto.webcast.data.DIYGiftToolbarInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.DIYGiftToolbarInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new proto.webcast.data.DIYGiftCardInfo;
                        e.readMessage(a, proto.webcast.data.DIYGiftCardInfo.deserializeBinaryFromReader), t.addCards(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.DIYPageEnterButton;
                        e.readMessage(a, proto.webcast.data.DIYPageEnterButton.deserializeBinaryFromReader), t.setButton(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setDefaultGiftDescribeImg(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.DIYGiftCardInfo;
                        e.readMessage(a, proto.webcast.data.DIYGiftCardInfo.deserializeBinaryFromReader), t.addForceIndexCards(a);
                        break;
                    case 5:
                        a = e.readInt32();
                        t.setMaxTotalCardNumber(a);
                        break;
                    case 6:
                        a = e.readInt32();
                        t.setMaxLocalCardNumber(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setConfigId(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.DIYGiftToolbarInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.DIYGiftToolbarInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getCardsList()).length > 0 && e.writeRepeatedMessage(1, a, proto.webcast.data.DIYGiftCardInfo.serializeBinaryToWriter), null != (a = t.getButton()) && e.writeMessage(2, a, proto.webcast.data.DIYPageEnterButton.serializeBinaryToWriter), null != (a = t.getDefaultGiftDescribeImg()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), (a = t.getForceIndexCardsList()).length > 0 && e.writeRepeatedMessage(4, a, proto.webcast.data.DIYGiftCardInfo.serializeBinaryToWriter), 0 !== (a = t.getMaxTotalCardNumber()) && e.writeInt32(5, a), 0 !== (a = t.getMaxLocalCardNumber()) && e.writeInt32(6, a), a = t.getConfigId(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getCardsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.DIYGiftCardInfo, 1)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setCardsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 1, t)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.addCards = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 1, t, proto.webcast.data.DIYGiftCardInfo, e)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.clearCardsList = function () {
            return this.setCardsList([])
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getButton = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.DIYPageEnterButton, 2)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setButton = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.clearButton = function () {
            return this.setButton(undefined)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.hasButton = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getDefaultGiftDescribeImg = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setDefaultGiftDescribeImg = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.clearDefaultGiftDescribeImg = function () {
            return this.setDefaultGiftDescribeImg(undefined)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.hasDefaultGiftDescribeImg = function () {
            return null != r.Message.getField(this, 3)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getForceIndexCardsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.DIYGiftCardInfo, 4)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setForceIndexCardsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 4, t)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.addForceIndexCards = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 4, t, proto.webcast.data.DIYGiftCardInfo, e)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.clearForceIndexCardsList = function () {
            return this.setForceIndexCardsList([])
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getMaxTotalCardNumber = function () {
            return r.Message.getFieldWithDefault(this, 5, 0)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setMaxTotalCardNumber = function (t) {
            return r.Message.setProto3IntField(this, 5, t)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getMaxLocalCardNumber = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setMaxLocalCardNumber = function (t) {
            return r.Message.setProto3IntField(this, 6, t)
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.getConfigId = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.DIYGiftToolbarInfo.prototype.setConfigId = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.DIYPageEnterButton.prototype.toObject = function (t) {
            return proto.webcast.data.DIYPageEnterButton.toObject(t, this)
        }, proto.webcast.data.DIYPageEnterButton.toObject = function (t, e) {
            var a, o = {
                text: (a = e.getText()) && d.Text.toObject(t, a),
                schema: r.Message.getFieldWithDefault(e, 2, ""),
                locked: r.Message.getBooleanFieldWithDefault(e, 3, !1)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.DIYPageEnterButton.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.DIYPageEnterButton;
            return proto.webcast.data.DIYPageEnterButton.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.DIYPageEnterButton.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new d.Text;
                        e.readMessage(a, d.Text.deserializeBinaryFromReader), t.setText(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setSchema(a);
                        break;
                    case 3:
                        a = e.readBool();
                        t.setLocked(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.DIYPageEnterButton.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.DIYPageEnterButton.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.DIYPageEnterButton.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getText()) && e.writeMessage(1, a, d.Text.serializeBinaryToWriter), (a = t.getSchema()).length > 0 && e.writeString(2, a), (a = t.getLocked()) && e.writeBool(3, a)
        },proto.webcast.data.DIYPageEnterButton.prototype.getText = function () {
            return r.Message.getWrapperField(this, d.Text, 1)
        },proto.webcast.data.DIYPageEnterButton.prototype.setText = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        },proto.webcast.data.DIYPageEnterButton.prototype.clearText = function () {
            return this.setText(undefined)
        },proto.webcast.data.DIYPageEnterButton.prototype.hasText = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.data.DIYPageEnterButton.prototype.getSchema = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.DIYPageEnterButton.prototype.setSchema = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.DIYPageEnterButton.prototype.getLocked = function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1)
        },proto.webcast.data.DIYPageEnterButton.prototype.setLocked = function (t) {
            return r.Message.setProto3BooleanField(this, 3, t)
        };
        r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PluginInfo.prototype.toObject = function (t) {
            return proto.webcast.data.PluginInfo.toObject(t, this)
        }, proto.webcast.data.PluginInfo.toObject = function (t, e) {
            var a, o = {
                pluginId: r.Message.getFieldWithDefault(e, 1, "0"),
                itemPotentialValueHintMap: (a = e.getItemPotentialValueHintMap()) ? a.toObject(t, undefined) : []
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.PluginInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PluginInfo;
            return proto.webcast.data.PluginInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PluginInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setPluginId(a);
                        break;
                    case 2:
                        a = t.getItemPotentialValueHintMap();
                        e.readMessage(a, (function (t, e) {
                            r.Map.deserializeBinary(t, e, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.PluginInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PluginInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PluginInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getPluginId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getItemPotentialValueHintMap(!0)) && a.getLength() > 0 && a.serializeBinary(2, e, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString)
        }, proto.webcast.data.PluginInfo.prototype.getPluginId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.PluginInfo.prototype.setPluginId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.PluginInfo.prototype.getItemPotentialValueHintMap = function (t) {
            return r.Message.getMapField(this, 2, t, null)
        }, proto.webcast.data.PluginInfo.prototype.clearItemPotentialValueHintMap = function () {
            return this.getItemPotentialValueHintMap().clear(), this
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.DIYItemInfo.prototype.toObject = function (t) {
            return proto.webcast.data.DIYItemInfo.toObject(t, this)
        }, proto.webcast.data.DIYItemInfo.toObject = function (t, e) {
            var a, o = {
                diyItemId: r.Message.getFieldWithDefault(e, 1, "0"),
                localItem: r.Message.getFieldWithDefault(e, 2, ""),
                valuesMap: (a = e.getValuesMap()) ? a.toObject(t, undefined) : [],
                fontAsset: r.Message.getFieldWithDefault(e, 4, "0"),
                parentAsset: r.Message.getFieldWithDefault(e, 5, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.DIYItemInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.DIYItemInfo;
            return proto.webcast.data.DIYItemInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.DIYItemInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setDiyItemId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setLocalItem(a);
                        break;
                    case 3:
                        a = t.getValuesMap();
                        e.readMessage(a, (function (t, e) {
                            r.Map.deserializeBinary(t, e, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setFontAsset(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setParentAsset(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.DIYItemInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.DIYItemInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.DIYItemInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getDiyItemId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getLocalItem()).length > 0 && e.writeString(2, a), (a = t.getValuesMap(!0)) && a.getLength() > 0 && a.serializeBinary(3, e, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), a = t.getFontAsset(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getParentAsset(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a)
        }, proto.webcast.data.DIYItemInfo.prototype.getDiyItemId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.DIYItemInfo.prototype.setDiyItemId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.DIYItemInfo.prototype.getLocalItem = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.DIYItemInfo.prototype.setLocalItem = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.DIYItemInfo.prototype.getValuesMap = function (t) {
            return r.Message.getMapField(this, 3, t, null)
        }, proto.webcast.data.DIYItemInfo.prototype.clearValuesMap = function () {
            return this.getValuesMap().clear(), this
        }, proto.webcast.data.DIYItemInfo.prototype.getFontAsset = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.DIYItemInfo.prototype.setFontAsset = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.DIYItemInfo.prototype.getParentAsset = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.data.DIYItemInfo.prototype.setParentAsset = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.CardLockInfo.prototype.toObject = function (t) {
            return proto.webcast.data.CardLockInfo.toObject(t, this)
        }, proto.webcast.data.CardLockInfo.toObject = function (t, e) {
            var a = {
                lockStatus: r.Message.getFieldWithDefault(e, 1, 0),
                toast: r.Message.getFieldWithDefault(e, 2, ""),
                reason: r.Message.getFieldWithDefault(e, 3, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.CardLockInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.CardLockInfo;
            return proto.webcast.data.CardLockInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.CardLockInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt32();
                        t.setLockStatus(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setToast(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setReason(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.CardLockInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.CardLockInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.CardLockInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getLockStatus()) && e.writeInt32(1, a), (a = t.getToast()).length > 0 && e.writeString(2, a), (a = t.getReason()).length > 0 && e.writeString(3, a)
        }, proto.webcast.data.CardLockInfo.prototype.getLockStatus = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.data.CardLockInfo.prototype.setLockStatus = function (t) {
            return r.Message.setProto3IntField(this, 1, t)
        }, proto.webcast.data.CardLockInfo.prototype.getToast = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.CardLockInfo.prototype.setToast = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.CardLockInfo.prototype.getReason = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.data.CardLockInfo.prototype.setReason = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        }, proto.webcast.data.DIYGiftCardInfo.repeatedFields_ = [5], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.DIYGiftCardInfo.prototype.toObject = function (t) {
            return proto.webcast.data.DIYGiftCardInfo.toObject(t, this)
        }, proto.webcast.data.DIYGiftCardInfo.toObject = function (t, e) {
            var a, o = {
                mainText: r.Message.getFieldWithDefault(e, 1, ""),
                subText: r.Message.getFieldWithDefault(e, 2, ""),
                iconImg: (a = e.getIconImg()) && s.Image.toObject(t, a),
                giftDescribeImg: (a = e.getGiftDescribeImg()) && s.Image.toObject(t, a),
                pluginsList: r.Message.toObjectList(e.getPluginsList(), proto.webcast.data.PluginInfo.toObject, t),
                totalDiamonds: r.Message.getFieldWithDefault(e, 6, "0"),
                giftCellIcon: (a = e.getGiftCellIcon()) && s.Image.toObject(t, a),
                mainTextAfterSend: r.Message.getFieldWithDefault(e, 8, ""),
                cardName: r.Message.getFieldWithDefault(e, 9, ""),
                startTime: r.Message.getFieldWithDefault(e, 10, "0"),
                endTime: r.Message.getFieldWithDefault(e, 11, "0"),
                configId: r.Message.getFieldWithDefault(e, 12, "0"),
                lockInfo: (a = e.getLockInfo()) && proto.webcast.data.CardLockInfo.toObject(t, a),
                statusIconImg: (a = e.getStatusIconImg()) && s.Image.toObject(t, a),
                configIdStr: r.Message.getFieldWithDefault(e, 15, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.DIYGiftCardInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.DIYGiftCardInfo;
            return proto.webcast.data.DIYGiftCardInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.DIYGiftCardInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setMainText(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setSubText(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setIconImg(a);
                        break;
                    case 4:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setGiftDescribeImg(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.PluginInfo;
                        e.readMessage(a, proto.webcast.data.PluginInfo.deserializeBinaryFromReader), t.addPlugins(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setTotalDiamonds(a);
                        break;
                    case 7:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setGiftCellIcon(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setMainTextAfterSend(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setCardName(a);
                        break;
                    case 10:
                        a = e.readInt64String();
                        t.setStartTime(a);
                        break;
                    case 11:
                        a = e.readInt64String();
                        t.setEndTime(a);
                        break;
                    case 12:
                        a = e.readInt64String();
                        t.setConfigId(a);
                        break;
                    case 13:
                        a = new proto.webcast.data.CardLockInfo;
                        e.readMessage(a, proto.webcast.data.CardLockInfo.deserializeBinaryFromReader), t.setLockInfo(a);
                        break;
                    case 14:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setStatusIconImg(a);
                        break;
                    case 15:
                        a = e.readString();
                        t.setConfigIdStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.DIYGiftCardInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.DIYGiftCardInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.DIYGiftCardInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getMainText()).length > 0 && e.writeString(1, a), (a = t.getSubText()).length > 0 && e.writeString(2, a), null != (a = t.getIconImg()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), null != (a = t.getGiftDescribeImg()) && e.writeMessage(4, a, s.Image.serializeBinaryToWriter), (a = t.getPluginsList()).length > 0 && e.writeRepeatedMessage(5, a, proto.webcast.data.PluginInfo.serializeBinaryToWriter), a = t.getTotalDiamonds(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), null != (a = t.getGiftCellIcon()) && e.writeMessage(7, a, s.Image.serializeBinaryToWriter), (a = t.getMainTextAfterSend()).length > 0 && e.writeString(8, a), (a = t.getCardName()).length > 0 && e.writeString(9, a), a = t.getStartTime(), 0 !== parseInt(a, 10) && e.writeInt64String(10, a), a = t.getEndTime(), 0 !== parseInt(a, 10) && e.writeInt64String(11, a), a = t.getConfigId(), 0 !== parseInt(a, 10) && e.writeInt64String(12, a), null != (a = t.getLockInfo()) && e.writeMessage(13, a, proto.webcast.data.CardLockInfo.serializeBinaryToWriter), null != (a = t.getStatusIconImg()) && e.writeMessage(14, a, s.Image.serializeBinaryToWriter), (a = t.getConfigIdStr()).length > 0 && e.writeString(15, a)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getMainText = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setMainText = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getSubText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setSubText = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getIconImg = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setIconImg = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.clearIconImg = function () {
            return this.setIconImg(undefined)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.hasIconImg = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getGiftDescribeImg = function () {
            return r.Message.getWrapperField(this, s.Image, 4)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setGiftDescribeImg = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.clearGiftDescribeImg = function () {
            return this.setGiftDescribeImg(undefined)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.hasGiftDescribeImg = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getPluginsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.PluginInfo, 5)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setPluginsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 5, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.addPlugins = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 5, t, proto.webcast.data.PluginInfo, e)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.clearPluginsList = function () {
            return this.setPluginsList([])
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getTotalDiamonds = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setTotalDiamonds = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getGiftCellIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 7)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setGiftCellIcon = function (t) {
            return r.Message.setWrapperField(this, 7, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.clearGiftCellIcon = function () {
            return this.setGiftCellIcon(undefined)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.hasGiftCellIcon = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getMainTextAfterSend = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setMainTextAfterSend = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getCardName = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setCardName = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setStartTime = function (t) {
            return r.Message.setProto3StringIntField(this, 10, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getEndTime = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setEndTime = function (t) {
            return r.Message.setProto3StringIntField(this, 11, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getConfigId = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setConfigId = function (t) {
            return r.Message.setProto3StringIntField(this, 12, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getLockInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.CardLockInfo, 13)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setLockInfo = function (t) {
            return r.Message.setWrapperField(this, 13, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.clearLockInfo = function () {
            return this.setLockInfo(undefined)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.hasLockInfo = function () {
            return null != r.Message.getField(this, 13)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getStatusIconImg = function () {
            return r.Message.getWrapperField(this, s.Image, 14)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setStatusIconImg = function (t) {
            return r.Message.setWrapperField(this, 14, t)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.clearStatusIconImg = function () {
            return this.setStatusIconImg(undefined)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.hasStatusIconImg = function () {
            return null != r.Message.getField(this, 14)
        }, proto.webcast.data.DIYGiftCardInfo.prototype.getConfigIdStr = function () {
            return r.Message.getFieldWithDefault(this, 15, "")
        }, proto.webcast.data.DIYGiftCardInfo.prototype.setConfigIdStr = function (t) {
            return r.Message.setProto3StringField(this, 15, t)
        }, proto.webcast.data.BuffLevel = {
            NONE: 0,
            GOLDBUFF: 1,
            PLATINUMBUFF: 2
        }, proto.webcast.data.AfterSendAction = {
            ACTIONDEFAULT: 0,
            ACTIONCLOSECOMBO: 1
        }, proto.webcast.data.ReqExtraType = {
            NOTREQ: 0,
            REQONOPENPANEL: 1,
            REQONCLICKGIFT: 2,
            REQONOPENBANNER: 4
        }, proto.webcast.data.GiftLockStatus = {
            UNLOCKED: 0,
            LOCKEDGRAY: 1,
            LOCKEDNORMAL: 2
        }, proto.webcast.data.MysteryShopStatus = {
            SHOPUNRELATED: 0,
            TASKTOUNLOCK: 1,
            REWARDUNLOCKING: 2,
            REWARDUNLOCKED: 3
        }, proto.webcast.data.CardLockStatus = {
            UNKNOWNSTATUS: 0,
            LOCKED: 1,
            NOTUPLOAD: 2,
            REVIEWING: 3,
            REVIEWFAILED: 4,
            UNLOCKED: 5
        }, o.object.extend(e, proto.webcast.data)
    }, 34688: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        o.exportSymbol("proto.webcast.data.GiftIMPriority", null, i), o.exportSymbol("proto.webcast.data.GiftIMPriorityType", null, i), proto.webcast.data.GiftIMPriority = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.GiftIMPriority.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.GiftIMPriority, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftIMPriority.displayName = "proto.webcast.data.GiftIMPriority"), proto.webcast.data.GiftIMPriority.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftIMPriority.prototype.toObject = function (t) {
            return proto.webcast.data.GiftIMPriority.toObject(t, this)
        }, proto.webcast.data.GiftIMPriority.toObject = function (t, e) {
            var a, o = {
                queueSizesList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a,
                selfQueuePriority: r.Message.getFieldWithDefault(e, 2, "0"),
                priority: r.Message.getFieldWithDefault(e, 3, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.GiftIMPriority.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftIMPriority;
            return proto.webcast.data.GiftIMPriority.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.GiftIMPriority.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        for (var a = e.isDelimited() ? e.readPackedInt64String() : [e.readInt64String()], r = 0; r < a.length; r++) t.addQueueSizes(a[r]);
                        break;
                    case 2:
                        var o = e.readInt64String();
                        t.setSelfQueuePriority(o);
                        break;
                    case 3:
                        o = e.readInt64String();
                        t.setPriority(o);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.GiftIMPriority.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftIMPriority.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.GiftIMPriority.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getQueueSizesList()).length > 0 && e.writePackedInt64String(1, a), a = t.getSelfQueuePriority(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getPriority(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a)
        }, proto.webcast.data.GiftIMPriority.prototype.getQueueSizesList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.data.GiftIMPriority.prototype.setQueueSizesList = function (t) {
            return r.Message.setField(this, 1, t || [])
        }, proto.webcast.data.GiftIMPriority.prototype.addQueueSizes = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        }, proto.webcast.data.GiftIMPriority.prototype.clearQueueSizesList = function () {
            return this.setQueueSizesList([])
        }, proto.webcast.data.GiftIMPriority.prototype.getSelfQueuePriority = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.GiftIMPriority.prototype.setSelfQueuePriority = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.GiftIMPriority.prototype.getPriority = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.GiftIMPriority.prototype.setPriority = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.GiftIMPriorityType = {
            SYSTEM: 0,
            SELF_SENT: 1,
            VALUABLE_GIFT: 2,
            COMMON_GIFT: 3
        }, o.object.extend(e, proto.webcast.data)
    }, 46695: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(8411);
        o.object.extend(proto, s);
        var n = a(91057);
        o.object.extend(proto, n);
        var d = a(16618);
        o.object.extend(proto, d), o.exportSymbol("proto.webcast.data.BattleResult", null, i), o.exportSymbol("proto.webcast.data.GiftVoteResult", null, i), o.exportSymbol("proto.webcast.data.GuestBattleContributors", null, i), o.exportSymbol("proto.webcast.data.GuestBattleInfo", null, i), o.exportSymbol("proto.webcast.data.GuestBattleStatus", null, i), proto.webcast.data.GiftVoteResult = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GiftVoteResult, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GiftVoteResult.displayName = "proto.webcast.data.GiftVoteResult"), proto.webcast.data.GuestBattleContributors = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.GuestBattleContributors.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.GuestBattleContributors, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GuestBattleContributors.displayName = "proto.webcast.data.GuestBattleContributors"), proto.webcast.data.BattleResult = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.BattleResult, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.BattleResult.displayName = "proto.webcast.data.BattleResult"), proto.webcast.data.GuestBattleInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.GuestBattleInfo.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.GuestBattleInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GuestBattleInfo.displayName = "proto.webcast.data.GuestBattleInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GiftVoteResult.prototype.toObject = function (t) {
            return proto.webcast.data.GiftVoteResult.toObject(t, this)
        }, proto.webcast.data.GiftVoteResult.toObject = function (t, e) {
            var a, o = {
                text: r.Message.getFieldWithDefault(e, 1, ""),
                count: r.Message.getFieldWithDefault(e, 2, "0"),
                icon: (a = e.getIcon()) && s.Image.toObject(t, a),
                giftId: r.Message.getFieldWithDefault(e, 4, "0"),
                name: r.Message.getFieldWithDefault(e, 5, ""),
                diamondCount: r.Message.getFieldWithDefault(e, 6, "0"),
                giftType: r.Message.getFieldWithDefault(e, 7, "0"),
                countStr: r.Message.getFieldWithDefault(e, 8, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.GiftVoteResult.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GiftVoteResult;
            return proto.webcast.data.GiftVoteResult.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.GiftVoteResult.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setText(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setCount(a);
                        break;
                    case 3:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setIcon(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setGiftId(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setName(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setDiamondCount(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setGiftType(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setCountStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.GiftVoteResult.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GiftVoteResult.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.GiftVoteResult.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getText()).length > 0 && e.writeString(1, a), a = t.getCount(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), null != (a = t.getIcon()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), a = t.getGiftId(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), (a = t.getName()).length > 0 && e.writeString(5, a), a = t.getDiamondCount(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getGiftType(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), (a = t.getCountStr()).length > 0 && e.writeString(8, a)
        }, proto.webcast.data.GiftVoteResult.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.GiftVoteResult.prototype.setText = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.GiftVoteResult.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.GiftVoteResult.prototype.setCount = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.GiftVoteResult.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        }, proto.webcast.data.GiftVoteResult.prototype.setIcon = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        }, proto.webcast.data.GiftVoteResult.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.data.GiftVoteResult.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.data.GiftVoteResult.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.GiftVoteResult.prototype.setGiftId = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.GiftVoteResult.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.data.GiftVoteResult.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        }, proto.webcast.data.GiftVoteResult.prototype.getDiamondCount = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.GiftVoteResult.prototype.setDiamondCount = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.GiftVoteResult.prototype.getGiftType = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.data.GiftVoteResult.prototype.setGiftType = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        }, proto.webcast.data.GiftVoteResult.prototype.getCountStr = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.GiftVoteResult.prototype.setCountStr = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        }, proto.webcast.data.GuestBattleContributors.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GuestBattleContributors.prototype.toObject = function (t) {
            return proto.webcast.data.GuestBattleContributors.toObject(t, this)
        }, proto.webcast.data.GuestBattleContributors.toObject = function (t, e) {
            var a, o = {userIdsList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a};
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.GuestBattleContributors.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GuestBattleContributors;
            return proto.webcast.data.GuestBattleContributors.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.GuestBattleContributors.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) for (var a = e.isDelimited() ? e.readPackedInt64String() : [e.readInt64String()], r = 0; r < a.length; r++) t.addUserIds(a[r]); else e.skipField()
            }
            return t
        }, proto.webcast.data.GuestBattleContributors.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GuestBattleContributors.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.GuestBattleContributors.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getUserIdsList()).length > 0 && e.writePackedInt64String(1, a)
        }, proto.webcast.data.GuestBattleContributors.prototype.getUserIdsList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.data.GuestBattleContributors.prototype.setUserIdsList = function (t) {
            return r.Message.setField(this, 1, t || [])
        }, proto.webcast.data.GuestBattleContributors.prototype.addUserIds = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        }, proto.webcast.data.GuestBattleContributors.prototype.clearUserIdsList = function () {
            return this.setUserIdsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.BattleResult.prototype.toObject = function (t) {
            return proto.webcast.data.BattleResult.toObject(t, this)
        }, proto.webcast.data.BattleResult.toObject = function (t, e) {
            var a, o = {
                guestId: r.Message.getFieldWithDefault(e, 1, "0"),
                score: r.Message.getFieldWithDefault(e, 2, ""),
                rank: r.Message.getFieldWithDefault(e, 3, "0"),
                scoreFuzzy: r.Message.getFieldWithDefault(e, 4, ""),
                contributors: (a = e.getContributors()) && proto.webcast.data.GuestBattleContributors.toObject(t, a),
                quickInteract: (a = e.getQuickInteract()) && n.LinkmicQuickInteract.toObject(t, a),
                crownInfo: (a = e.getCrownInfo()) && d.GuestBattleUserGradeInfo.toObject(t, a),
                nickname: r.Message.getFieldWithDefault(e, 8, ""),
                scoreNum: r.Message.getFieldWithDefault(e, 9, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.BattleResult.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.BattleResult;
            return proto.webcast.data.BattleResult.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.BattleResult.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setGuestId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setScore(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setRank(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setScoreFuzzy(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.GuestBattleContributors;
                        e.readMessage(a, proto.webcast.data.GuestBattleContributors.deserializeBinaryFromReader), t.setContributors(a);
                        break;
                    case 6:
                        a = new n.LinkmicQuickInteract;
                        e.readMessage(a, n.LinkmicQuickInteract.deserializeBinaryFromReader), t.setQuickInteract(a);
                        break;
                    case 7:
                        a = new d.GuestBattleUserGradeInfo;
                        e.readMessage(a, d.GuestBattleUserGradeInfo.deserializeBinaryFromReader), t.setCrownInfo(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setNickname(a);
                        break;
                    case 9:
                        a = e.readInt64String();
                        t.setScoreNum(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.BattleResult.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.BattleResult.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.BattleResult.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getGuestId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getScore()).length > 0 && e.writeString(2, a), a = t.getRank(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), (a = t.getScoreFuzzy()).length > 0 && e.writeString(4, a), null != (a = t.getContributors()) && e.writeMessage(5, a, proto.webcast.data.GuestBattleContributors.serializeBinaryToWriter), null != (a = t.getQuickInteract()) && e.writeMessage(6, a, n.LinkmicQuickInteract.serializeBinaryToWriter), null != (a = t.getCrownInfo()) && e.writeMessage(7, a, d.GuestBattleUserGradeInfo.serializeBinaryToWriter), (a = t.getNickname()).length > 0 && e.writeString(8, a), a = t.getScoreNum(), 0 !== parseInt(a, 10) && e.writeInt64String(9, a)
        }, proto.webcast.data.BattleResult.prototype.getGuestId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.BattleResult.prototype.setGuestId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.BattleResult.prototype.getScore = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.BattleResult.prototype.setScore = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.BattleResult.prototype.getRank = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.BattleResult.prototype.setRank = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.BattleResult.prototype.getScoreFuzzy = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.BattleResult.prototype.setScoreFuzzy = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.BattleResult.prototype.getContributors = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.GuestBattleContributors, 5)
        }, proto.webcast.data.BattleResult.prototype.setContributors = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        }, proto.webcast.data.BattleResult.prototype.clearContributors = function () {
            return this.setContributors(undefined)
        }, proto.webcast.data.BattleResult.prototype.hasContributors = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.data.BattleResult.prototype.getQuickInteract = function () {
            return r.Message.getWrapperField(this, n.LinkmicQuickInteract, 6)
        }, proto.webcast.data.BattleResult.prototype.setQuickInteract = function (t) {
            return r.Message.setWrapperField(this, 6, t)
        }, proto.webcast.data.BattleResult.prototype.clearQuickInteract = function () {
            return this.setQuickInteract(undefined)
        }, proto.webcast.data.BattleResult.prototype.hasQuickInteract = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.data.BattleResult.prototype.getCrownInfo = function () {
            return r.Message.getWrapperField(this, d.GuestBattleUserGradeInfo, 7)
        }, proto.webcast.data.BattleResult.prototype.setCrownInfo = function (t) {
            return r.Message.setWrapperField(this, 7, t)
        }, proto.webcast.data.BattleResult.prototype.clearCrownInfo = function () {
            return this.setCrownInfo(undefined)
        }, proto.webcast.data.BattleResult.prototype.hasCrownInfo = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.data.BattleResult.prototype.getNickname = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.BattleResult.prototype.setNickname = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        }, proto.webcast.data.BattleResult.prototype.getScoreNum = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        }, proto.webcast.data.BattleResult.prototype.setScoreNum = function (t) {
            return r.Message.setProto3StringIntField(this, 9, t)
        }, proto.webcast.data.GuestBattleInfo.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GuestBattleInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GuestBattleInfo.toObject(t, this)
        }, proto.webcast.data.GuestBattleInfo.toObject = function (t, e) {
            var a, o = {
                battleId: r.Message.getFieldWithDefault(e, 1, "0"),
                battleType: r.Message.getFieldWithDefault(e, 2, "0"),
                status: r.Message.getFieldWithDefault(e, 3, "0"),
                resultsList: r.Message.toObjectList(e.getResultsList(), proto.webcast.data.BattleResult.toObject, t),
                currentTime: r.Message.getFieldWithDefault(e, 5, "0"),
                finishTime: r.Message.getFieldWithDefault(e, 6, "0"),
                showDuration: r.Message.getFieldWithDefault(e, 7, "0"),
                battleIdStr: r.Message.getFieldWithDefault(e, 8, ""),
                loserNum: r.Message.getFieldWithDefault(e, 9, "0"),
                dressId: r.Message.getFieldWithDefault(e, 10, ""),
                scoreType: r.Message.getFieldWithDefault(e, 11, "0"),
                uiInfo: (a = e.getUiInfo()) && d.GuestBattleUIInfo.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.GuestBattleInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GuestBattleInfo;
            return proto.webcast.data.GuestBattleInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.GuestBattleInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setBattleId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setBattleType(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setStatus(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.BattleResult;
                        e.readMessage(a, proto.webcast.data.BattleResult.deserializeBinaryFromReader), t.addResults(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setCurrentTime(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setFinishTime(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setShowDuration(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setBattleIdStr(a);
                        break;
                    case 9:
                        a = e.readInt64String();
                        t.setLoserNum(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setDressId(a);
                        break;
                    case 11:
                        a = e.readInt64String();
                        t.setScoreType(a);
                        break;
                    case 12:
                        a = new d.GuestBattleUIInfo;
                        e.readMessage(a, d.GuestBattleUIInfo.deserializeBinaryFromReader), t.setUiInfo(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.GuestBattleInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GuestBattleInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.GuestBattleInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getBattleId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getBattleType(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getStatus(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), (a = t.getResultsList()).length > 0 && e.writeRepeatedMessage(4, a, proto.webcast.data.BattleResult.serializeBinaryToWriter), a = t.getCurrentTime(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getFinishTime(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getShowDuration(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), (a = t.getBattleIdStr()).length > 0 && e.writeString(8, a), a = t.getLoserNum(), 0 !== parseInt(a, 10) && e.writeInt64String(9, a), (a = t.getDressId()).length > 0 && e.writeString(10, a), a = t.getScoreType(), 0 !== parseInt(a, 10) && e.writeInt64String(11, a), null != (a = t.getUiInfo()) && e.writeMessage(12, a, d.GuestBattleUIInfo.serializeBinaryToWriter)
        }, proto.webcast.data.GuestBattleInfo.prototype.getBattleId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.GuestBattleInfo.prototype.setBattleId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.GuestBattleInfo.prototype.getBattleType = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.GuestBattleInfo.prototype.setBattleType = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.GuestBattleInfo.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.GuestBattleInfo.prototype.setStatus = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.GuestBattleInfo.prototype.getResultsList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.BattleResult, 4)
        }, proto.webcast.data.GuestBattleInfo.prototype.setResultsList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 4, t)
        }, proto.webcast.data.GuestBattleInfo.prototype.addResults = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 4, t, proto.webcast.data.BattleResult, e)
        }, proto.webcast.data.GuestBattleInfo.prototype.clearResultsList = function () {
            return this.setResultsList([])
        }, proto.webcast.data.GuestBattleInfo.prototype.getCurrentTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.data.GuestBattleInfo.prototype.setCurrentTime = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        }, proto.webcast.data.GuestBattleInfo.prototype.getFinishTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.GuestBattleInfo.prototype.setFinishTime = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.GuestBattleInfo.prototype.getShowDuration = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.GuestBattleInfo.prototype.setShowDuration = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },proto.webcast.data.GuestBattleInfo.prototype.getBattleIdStr = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        },proto.webcast.data.GuestBattleInfo.prototype.setBattleIdStr = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        },proto.webcast.data.GuestBattleInfo.prototype.getLoserNum = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        },proto.webcast.data.GuestBattleInfo.prototype.setLoserNum = function (t) {
            return r.Message.setProto3StringIntField(this, 9, t)
        },proto.webcast.data.GuestBattleInfo.prototype.getDressId = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.GuestBattleInfo.prototype.setDressId = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },proto.webcast.data.GuestBattleInfo.prototype.getScoreType = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        },proto.webcast.data.GuestBattleInfo.prototype.setScoreType = function (t) {
            return r.Message.setProto3StringIntField(this, 11, t)
        },proto.webcast.data.GuestBattleInfo.prototype.getUiInfo = function () {
            return r.Message.getWrapperField(this, d.GuestBattleUIInfo, 12)
        },proto.webcast.data.GuestBattleInfo.prototype.setUiInfo = function (t) {
            return r.Message.setWrapperField(this, 12, t)
        },proto.webcast.data.GuestBattleInfo.prototype.clearUiInfo = function () {
            return this.setUiInfo(undefined)
        },proto.webcast.data.GuestBattleInfo.prototype.hasUiInfo = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.data.GuestBattleStatus = {
            GUESTBATTLE_NONE: 0,
            GUESTBATTLE_ON_GOING: 1,
            GUESTBATTLE_SHOW_RESULT: 2,
            GUESTBATTLE_FINISH: 3,
            GUESTBATTLE_PAUSE: 4
        },o.object.extend(e, proto.webcast.data)
    }
}]);