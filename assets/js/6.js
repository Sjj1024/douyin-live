(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1593], {
    25903: function (t, e, a) {
        var r = a(47865), o = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        r.exportSymbol("proto.webcast.data.AdminPrivilege", null, o), proto.webcast.data.AdminPrivilege = {
            UNKNOWPRIVILEGE: 0,
            UNKNOW2PRIVILEGE: 1,
            PROMPTPRIVILEGE: 2,
            FACTIONPRIVILEGE: 3,
            WORDPRIVILEGE: 4,
            SLIENCEPRIVILEGE: 5,
            BLOCKPRIVILEGE: 6,
            LINKMICPRIVILEGE: 7,
            VOTEPRIVILEGE: 8,
            WISHPRIVILEGE: 9,
            LITTLEGAMEPRIVILEGE: 10,
            SCREENCHATPRIVILEGE: 11,
            COMMENTONWALLPRIVILEGE: 12,
            ADMINDANMAKUPRIVILEGE: 13,
            LINKMICGUESTBATTLEPRIVILEGE: 14,
            LINKMICTEAMFIGHTPRIVILEGE: 15,
            LINKMICROOMBATTLEPRIVILEGE: 16,
            LINKMICROOMORDERSING: 17
        }, r.object.extend(e, proto.webcast.data)
    }, 31164: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(8411);
        o.object.extend(proto, s);
        var n = a(56523);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.data.CircleInfo", null, i), proto.webcast.data.CircleInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.CircleInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.CircleInfo.displayName = "proto.webcast.data.CircleInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.CircleInfo.prototype.toObject = function (t) {
            return proto.webcast.data.CircleInfo.toObject(t, this)
        }, proto.webcast.data.CircleInfo.toObject = function (t, e) {
            var a, o = {
                id: r.Message.getFieldWithDefault(e, 1, "0"),
                name: r.Message.getFieldWithDefault(e, 2, ""),
                coverImg: (a = e.getCoverImg()) && s.Image.toObject(t, a),
                description: r.Message.getFieldWithDefault(e, 4, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.CircleInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.CircleInfo;
            return proto.webcast.data.CircleInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.CircleInfo.deserializeBinaryFromReader = function (t, e) {
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
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setCoverImg(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setDescription(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.CircleInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.CircleInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.CircleInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getName()).length > 0 && e.writeString(2, a), null != (a = t.getCoverImg()) && e.writeMessage(3, a, s.Image.serializeBinaryToWriter), (a = t.getDescription()).length > 0 && e.writeString(4, a)
        }, proto.webcast.data.CircleInfo.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.CircleInfo.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.CircleInfo.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.CircleInfo.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.CircleInfo.prototype.getCoverImg = function () {
            return r.Message.getWrapperField(this, s.Image, 3)
        }, proto.webcast.data.CircleInfo.prototype.setCoverImg = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        }, proto.webcast.data.CircleInfo.prototype.clearCoverImg = function () {
            return this.setCoverImg(undefined)
        }, proto.webcast.data.CircleInfo.prototype.hasCoverImg = function () {
            return null != r.Message.getField(this, 3)
        }, proto.webcast.data.CircleInfo.prototype.getDescription = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.CircleInfo.prototype.setDescription = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, o.object.extend(e, proto.webcast.data)
    }, 17050: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(56523);
        o.object.extend(proto, s);
        var n = a(8411);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.data.EasterEggData", null, i), o.exportSymbol("proto.webcast.data.HiddenGiftExtra", null, i), o.exportSymbol("proto.webcast.data.PosterExtra", null, i), o.exportSymbol("proto.webcast.data.ShootExtra", null, i), o.exportSymbol("proto.webcast.data.StageStruct", null, i), proto.webcast.data.StageStruct = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.StageStruct, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.StageStruct.displayName = "proto.webcast.data.StageStruct"), proto.webcast.data.HiddenGiftExtra = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.HiddenGiftExtra, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.HiddenGiftExtra.displayName = "proto.webcast.data.HiddenGiftExtra"), proto.webcast.data.ShootExtra = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.ShootExtra.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.ShootExtra, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.ShootExtra.displayName = "proto.webcast.data.ShootExtra"), proto.webcast.data.PosterExtra = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.PosterExtra, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.PosterExtra.displayName = "proto.webcast.data.PosterExtra"), proto.webcast.data.EasterEggData = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EasterEggData, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EasterEggData.displayName = "proto.webcast.data.EasterEggData"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.StageStruct.prototype.toObject = function (t) {
            return proto.webcast.data.StageStruct.toObject(t, this)
        }, proto.webcast.data.StageStruct.toObject = function (t, e) {
            var a, o = {
                title: r.Message.getFieldWithDefault(e, 1, ""),
                desc: r.Message.getFieldWithDefault(e, 2, ""),
                iconUrlLock: r.Message.getFieldWithDefault(e, 3, ""),
                iconUrlUnlock: r.Message.getFieldWithDefault(e, 4, ""),
                type: r.Message.getFieldWithDefault(e, 5, "0"),
                subType: r.Message.getFieldWithDefault(e, 6, "0"),
                unlockCount: r.Message.getFieldWithDefault(e, 7, "0"),
                giftExtra: (a = e.getGiftExtra()) && proto.webcast.data.HiddenGiftExtra.toObject(t, a),
                shootExtra: (a = e.getShootExtra()) && proto.webcast.data.ShootExtra.toObject(t, a),
                posterExtra: (a = e.getPosterExtra()) && proto.webcast.data.PosterExtra.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.StageStruct.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.StageStruct;
            return proto.webcast.data.StageStruct.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.StageStruct.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setTitle(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setDesc(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setIconUrlLock(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setIconUrlUnlock(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setType(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setSubType(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setUnlockCount(a);
                        break;
                    case 8:
                        a = new proto.webcast.data.HiddenGiftExtra;
                        e.readMessage(a, proto.webcast.data.HiddenGiftExtra.deserializeBinaryFromReader), t.setGiftExtra(a);
                        break;
                    case 9:
                        a = new proto.webcast.data.ShootExtra;
                        e.readMessage(a, proto.webcast.data.ShootExtra.deserializeBinaryFromReader), t.setShootExtra(a);
                        break;
                    case 10:
                        a = new proto.webcast.data.PosterExtra;
                        e.readMessage(a, proto.webcast.data.PosterExtra.deserializeBinaryFromReader), t.setPosterExtra(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.StageStruct.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.StageStruct.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.StageStruct.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getTitle()).length > 0 && e.writeString(1, a), (a = t.getDesc()).length > 0 && e.writeString(2, a), (a = t.getIconUrlLock()).length > 0 && e.writeString(3, a), (a = t.getIconUrlUnlock()).length > 0 && e.writeString(4, a), a = t.getType(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getSubType(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getUnlockCount(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), null != (a = t.getGiftExtra()) && e.writeMessage(8, a, proto.webcast.data.HiddenGiftExtra.serializeBinaryToWriter), null != (a = t.getShootExtra()) && e.writeMessage(9, a, proto.webcast.data.ShootExtra.serializeBinaryToWriter), null != (a = t.getPosterExtra()) && e.writeMessage(10, a, proto.webcast.data.PosterExtra.serializeBinaryToWriter)
        }, proto.webcast.data.StageStruct.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.StageStruct.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.StageStruct.prototype.getDesc = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.StageStruct.prototype.setDesc = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.StageStruct.prototype.getIconUrlLock = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.data.StageStruct.prototype.setIconUrlLock = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        }, proto.webcast.data.StageStruct.prototype.getIconUrlUnlock = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.StageStruct.prototype.setIconUrlUnlock = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.StageStruct.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.data.StageStruct.prototype.setType = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        }, proto.webcast.data.StageStruct.prototype.getSubType = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.StageStruct.prototype.setSubType = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.StageStruct.prototype.getUnlockCount = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.data.StageStruct.prototype.setUnlockCount = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        }, proto.webcast.data.StageStruct.prototype.getGiftExtra = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.HiddenGiftExtra, 8)
        }, proto.webcast.data.StageStruct.prototype.setGiftExtra = function (t) {
            return r.Message.setWrapperField(this, 8, t)
        }, proto.webcast.data.StageStruct.prototype.clearGiftExtra = function () {
            return this.setGiftExtra(undefined)
        }, proto.webcast.data.StageStruct.prototype.hasGiftExtra = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.data.StageStruct.prototype.getShootExtra = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.ShootExtra, 9)
        }, proto.webcast.data.StageStruct.prototype.setShootExtra = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        }, proto.webcast.data.StageStruct.prototype.clearShootExtra = function () {
            return this.setShootExtra(undefined)
        }, proto.webcast.data.StageStruct.prototype.hasShootExtra = function () {
            return null != r.Message.getField(this, 9)
        }, proto.webcast.data.StageStruct.prototype.getPosterExtra = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.PosterExtra, 10)
        }, proto.webcast.data.StageStruct.prototype.setPosterExtra = function (t) {
            return r.Message.setWrapperField(this, 10, t)
        }, proto.webcast.data.StageStruct.prototype.clearPosterExtra = function () {
            return this.setPosterExtra(undefined)
        }, proto.webcast.data.StageStruct.prototype.hasPosterExtra = function () {
            return null != r.Message.getField(this, 10)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.HiddenGiftExtra.prototype.toObject = function (t) {
            return proto.webcast.data.HiddenGiftExtra.toObject(t, this)
        }, proto.webcast.data.HiddenGiftExtra.toObject = function (t, e) {
            var a = {giftId: r.Message.getFieldWithDefault(e, 1, "")};
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.HiddenGiftExtra.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.HiddenGiftExtra;
            return proto.webcast.data.HiddenGiftExtra.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.HiddenGiftExtra.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = e.readString();
                    t.setGiftId(a)
                } else e.skipField()
            }
            return t
        }, proto.webcast.data.HiddenGiftExtra.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.HiddenGiftExtra.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.HiddenGiftExtra.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getGiftId()).length > 0 && e.writeString(1, a)
        }, proto.webcast.data.HiddenGiftExtra.prototype.getGiftId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.HiddenGiftExtra.prototype.setGiftId = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.ShootExtra.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.ShootExtra.prototype.toObject = function (t) {
            return proto.webcast.data.ShootExtra.toObject(t, this)
        }, proto.webcast.data.ShootExtra.toObject = function (t, e) {
            var a, o = {
                shootTimes: r.Message.getFieldWithDefault(e, 1, "0"),
                textList: null == (a = r.Message.getRepeatedField(e, 2)) ? undefined : a,
                assetId: r.Message.getFieldWithDefault(e, 3, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.ShootExtra.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.ShootExtra;
            return proto.webcast.data.ShootExtra.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.ShootExtra.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setShootTimes(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.addText(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setAssetId(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.ShootExtra.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.ShootExtra.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.ShootExtra.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getShootTimes(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getTextList()).length > 0 && e.writeRepeatedString(2, a), a = t.getAssetId(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a)
        }, proto.webcast.data.ShootExtra.prototype.getShootTimes = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.ShootExtra.prototype.setShootTimes = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.ShootExtra.prototype.getTextList = function () {
            return r.Message.getRepeatedField(this, 2)
        }, proto.webcast.data.ShootExtra.prototype.setTextList = function (t) {
            return r.Message.setField(this, 2, t || [])
        }, proto.webcast.data.ShootExtra.prototype.addText = function (t, e) {
            return r.Message.addToRepeatedField(this, 2, t, e)
        }, proto.webcast.data.ShootExtra.prototype.clearTextList = function () {
            return this.setTextList([])
        }, proto.webcast.data.ShootExtra.prototype.getAssetId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.ShootExtra.prototype.setAssetId = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.PosterExtra.prototype.toObject = function (t) {
            return proto.webcast.data.PosterExtra.toObject(t, this)
        }, proto.webcast.data.PosterExtra.toObject = function (t, e) {
            var a = {posterId: r.Message.getFieldWithDefault(e, 1, "")};
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.PosterExtra.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.PosterExtra;
            return proto.webcast.data.PosterExtra.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.PosterExtra.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = e.readString();
                    t.setPosterId(a)
                } else e.skipField()
            }
            return t
        }, proto.webcast.data.PosterExtra.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.PosterExtra.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.PosterExtra.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getPosterId()).length > 0 && e.writeString(1, a)
        }, proto.webcast.data.PosterExtra.prototype.getPosterId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.PosterExtra.prototype.setPosterId = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EasterEggData.prototype.toObject = function (t) {
            return proto.webcast.data.EasterEggData.toObject(t, this)
        }, proto.webcast.data.EasterEggData.toObject = function (t, e) {
            var a, o = {
                hasEasterEgg: r.Message.getBooleanFieldWithDefault(e, 1, !1),
                stage: r.Message.getFieldWithDefault(e, 2, "0"),
                totalStage: r.Message.getFieldWithDefault(e, 3, "0"),
                effectsNum: r.Message.getFieldWithDefault(e, 4, "0"),
                startCount: r.Message.getFieldWithDefault(e, 5, "0"),
                endCount: r.Message.getFieldWithDefault(e, 6, "0"),
                count: r.Message.getFieldWithDefault(e, 7, "0"),
                panelUrl: r.Message.getFieldWithDefault(e, 8, ""),
                entranceIcon: (a = e.getEntranceIcon()) && n.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.EasterEggData.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EasterEggData;
            return proto.webcast.data.EasterEggData.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.EasterEggData.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readBool();
                        t.setHasEasterEgg(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setStage(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setTotalStage(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setEffectsNum(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setStartCount(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setEndCount(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setCount(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setPanelUrl(a);
                        break;
                    case 9:
                        a = new n.Image;
                        e.readMessage(a, n.Image.deserializeBinaryFromReader), t.setEntranceIcon(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.EasterEggData.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EasterEggData.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.EasterEggData.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getHasEasterEgg()) && e.writeBool(1, a), a = t.getStage(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getTotalStage(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getEffectsNum(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getStartCount(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getEndCount(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getCount(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), (a = t.getPanelUrl()).length > 0 && e.writeString(8, a), null != (a = t.getEntranceIcon()) && e.writeMessage(9, a, n.Image.serializeBinaryToWriter)
        }, proto.webcast.data.EasterEggData.prototype.getHasEasterEgg = function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.webcast.data.EasterEggData.prototype.setHasEasterEgg = function (t) {
            return r.Message.setProto3BooleanField(this, 1, t)
        }, proto.webcast.data.EasterEggData.prototype.getStage = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.EasterEggData.prototype.setStage = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.EasterEggData.prototype.getTotalStage = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.EasterEggData.prototype.setTotalStage = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.EasterEggData.prototype.getEffectsNum = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.EasterEggData.prototype.setEffectsNum = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.EasterEggData.prototype.getStartCount = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.data.EasterEggData.prototype.setStartCount = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        }, proto.webcast.data.EasterEggData.prototype.getEndCount = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.EasterEggData.prototype.setEndCount = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.EasterEggData.prototype.getCount = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.data.EasterEggData.prototype.setCount = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        }, proto.webcast.data.EasterEggData.prototype.getPanelUrl = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.EasterEggData.prototype.setPanelUrl = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        },proto.webcast.data.EasterEggData.prototype.getEntranceIcon = function () {
            return r.Message.getWrapperField(this, n.Image, 9)
        },proto.webcast.data.EasterEggData.prototype.setEntranceIcon = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        },proto.webcast.data.EasterEggData.prototype.clearEntranceIcon = function () {
            return this.setEntranceIcon(undefined)
        },proto.webcast.data.EasterEggData.prototype.hasEntranceIcon = function () {
            return null != r.Message.getField(this, 9)
        },o.object.extend(e, proto.webcast.data)
    }, 95676: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        o.exportSymbol("proto.webcast.data.Coupon", null, i), o.exportSymbol("proto.webcast.data.EcomAuction", null, i), o.exportSymbol("proto.webcast.data.EcomAvatar", null, i), o.exportSymbol("proto.webcast.data.EcomBidder", null, i), o.exportSymbol("proto.webcast.data.EcomCampaign", null, i), o.exportSymbol("proto.webcast.data.EcomGoodsCard", null, i), o.exportSymbol("proto.webcast.data.EcomIcon", null, i), o.exportSymbol("proto.webcast.data.EcomLiveCard", null, i), o.exportSymbol("proto.webcast.data.EcomPop", null, i), o.exportSymbol("proto.webcast.data.EcomPrice", null, i), o.exportSymbol("proto.webcast.data.EcomProduct", null, i), o.exportSymbol("proto.webcast.data.Redpack", null, i), o.exportSymbol("proto.webcast.data.RedsShowInfo", null, i), proto.webcast.data.EcomLiveCard = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomLiveCard, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomLiveCard.displayName = "proto.webcast.data.EcomLiveCard"), proto.webcast.data.EcomProduct = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomProduct, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomProduct.displayName = "proto.webcast.data.EcomProduct"), proto.webcast.data.EcomPrice = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomPrice, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomPrice.displayName = "proto.webcast.data.EcomPrice"), proto.webcast.data.EcomIcon = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomIcon, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomIcon.displayName = "proto.webcast.data.EcomIcon"), proto.webcast.data.EcomCampaign = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomCampaign, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomCampaign.displayName = "proto.webcast.data.EcomCampaign"), proto.webcast.data.EcomAuction = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomAuction, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomAuction.displayName = "proto.webcast.data.EcomAuction"), proto.webcast.data.EcomBidder = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomBidder, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomBidder.displayName = "proto.webcast.data.EcomBidder"), proto.webcast.data.EcomAvatar = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomAvatar, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomAvatar.displayName = "proto.webcast.data.EcomAvatar"), proto.webcast.data.EcomPop = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomPop, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomPop.displayName = "proto.webcast.data.EcomPop"), proto.webcast.data.Coupon = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.Coupon, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.Coupon.displayName = "proto.webcast.data.Coupon"), proto.webcast.data.Redpack = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.Redpack, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.Redpack.displayName = "proto.webcast.data.Redpack"), proto.webcast.data.EcomGoodsCard = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.EcomGoodsCard, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.EcomGoodsCard.displayName = "proto.webcast.data.EcomGoodsCard"), proto.webcast.data.RedsShowInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.RedsShowInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.RedsShowInfo.displayName = "proto.webcast.data.RedsShowInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomLiveCard.prototype.toObject = function (t) {
            return proto.webcast.data.EcomLiveCard.toObject(t, this)
        }, proto.webcast.data.EcomLiveCard.toObject = function (t, e) {
            var a, r = {
                product: (a = e.getProduct()) && proto.webcast.data.EcomProduct.toObject(t, a),
                icon: (a = e.getIcon()) && proto.webcast.data.EcomIcon.toObject(t, a),
                campaign: (a = e.getCampaign()) && proto.webcast.data.EcomCampaign.toObject(t, a)
            };
            return t && (r.$jspbMessageInstance = e), r
        }), proto.webcast.data.EcomLiveCard.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomLiveCard;
            return proto.webcast.data.EcomLiveCard.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.EcomLiveCard.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = new proto.webcast.data.EcomProduct;
                        e.readMessage(a, proto.webcast.data.EcomProduct.deserializeBinaryFromReader), t.setProduct(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.EcomIcon;
                        e.readMessage(a, proto.webcast.data.EcomIcon.deserializeBinaryFromReader), t.setIcon(a);
                        break;
                    case 3:
                        a = new proto.webcast.data.EcomCampaign;
                        e.readMessage(a, proto.webcast.data.EcomCampaign.deserializeBinaryFromReader), t.setCampaign(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.EcomLiveCard.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomLiveCard.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.EcomLiveCard.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            null != (a = t.getProduct()) && e.writeMessage(1, a, proto.webcast.data.EcomProduct.serializeBinaryToWriter), null != (a = t.getIcon()) && e.writeMessage(2, a, proto.webcast.data.EcomIcon.serializeBinaryToWriter), null != (a = t.getCampaign()) && e.writeMessage(3, a, proto.webcast.data.EcomCampaign.serializeBinaryToWriter)
        }, proto.webcast.data.EcomLiveCard.prototype.getProduct = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomProduct, 1)
        }, proto.webcast.data.EcomLiveCard.prototype.setProduct = function (t) {
            return r.Message.setWrapperField(this, 1, t)
        }, proto.webcast.data.EcomLiveCard.prototype.clearProduct = function () {
            return this.setProduct(undefined)
        }, proto.webcast.data.EcomLiveCard.prototype.hasProduct = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.data.EcomLiveCard.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomIcon, 2)
        }, proto.webcast.data.EcomLiveCard.prototype.setIcon = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        }, proto.webcast.data.EcomLiveCard.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.data.EcomLiveCard.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.data.EcomLiveCard.prototype.getCampaign = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomCampaign, 3)
        }, proto.webcast.data.EcomLiveCard.prototype.setCampaign = function (t) {
            return r.Message.setWrapperField(this, 3, t)
        }, proto.webcast.data.EcomLiveCard.prototype.clearCampaign = function () {
            return this.setCampaign(undefined)
        }, proto.webcast.data.EcomLiveCard.prototype.hasCampaign = function () {
            return null != r.Message.getField(this, 3)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomProduct.prototype.toObject = function (t) {
            return proto.webcast.data.EcomProduct.toObject(t, this)
        }, proto.webcast.data.EcomProduct.toObject = function (t, e) {
            var a, o = {
                promotionId: r.Message.getFieldWithDefault(e, 1, "0"),
                productId: r.Message.getFieldWithDefault(e, 2, "0"),
                title: r.Message.getFieldWithDefault(e, 3, ""),
                coverImage: r.Message.getFieldWithDefault(e, 4, ""),
                price: (a = e.getPrice()) && proto.webcast.data.EcomPrice.toObject(t, a),
                regularPrice: r.Message.getFieldWithDefault(e, 6, "0"),
                depositPrice: r.Message.getFieldWithDefault(e, 7, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.EcomProduct.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomProduct;
            return proto.webcast.data.EcomProduct.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.EcomProduct.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setPromotionId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setProductId(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setTitle(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setCoverImage(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.EcomPrice;
                        e.readMessage(a, proto.webcast.data.EcomPrice.deserializeBinaryFromReader), t.setPrice(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setRegularPrice(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setDepositPrice(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.EcomProduct.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomProduct.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.EcomProduct.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getPromotionId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getProductId(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), (a = t.getTitle()).length > 0 && e.writeString(3, a), (a = t.getCoverImage()).length > 0 && e.writeString(4, a), null != (a = t.getPrice()) && e.writeMessage(5, a, proto.webcast.data.EcomPrice.serializeBinaryToWriter), a = t.getRegularPrice(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getDepositPrice(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a)
        }, proto.webcast.data.EcomProduct.prototype.getPromotionId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.EcomProduct.prototype.setPromotionId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.EcomProduct.prototype.getProductId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.EcomProduct.prototype.setProductId = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.EcomProduct.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.data.EcomProduct.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        }, proto.webcast.data.EcomProduct.prototype.getCoverImage = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.EcomProduct.prototype.setCoverImage = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.EcomProduct.prototype.getPrice = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomPrice, 5)
        }, proto.webcast.data.EcomProduct.prototype.setPrice = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        }, proto.webcast.data.EcomProduct.prototype.clearPrice = function () {
            return this.setPrice(undefined)
        }, proto.webcast.data.EcomProduct.prototype.hasPrice = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.data.EcomProduct.prototype.getRegularPrice = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.EcomProduct.prototype.setRegularPrice = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.EcomProduct.prototype.getDepositPrice = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.data.EcomProduct.prototype.setDepositPrice = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomPrice.prototype.toObject = function (t) {
            return proto.webcast.data.EcomPrice.toObject(t, this)
        }, proto.webcast.data.EcomPrice.toObject = function (t, e) {
            var a = {
                prefix: r.Message.getFieldWithDefault(e, 1, ""),
                suffix: r.Message.getFieldWithDefault(e, 2, ""),
                byCent: r.Message.getFieldWithDefault(e, 3, "0"),
                formatPrice: r.Message.getFieldWithDefault(e, 4, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.EcomPrice.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomPrice;
            return proto.webcast.data.EcomPrice.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.EcomPrice.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setPrefix(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setSuffix(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setByCent(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setFormatPrice(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.EcomPrice.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomPrice.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.EcomPrice.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getPrefix()).length > 0 && e.writeString(1, a), (a = t.getSuffix()).length > 0 && e.writeString(2, a), a = t.getByCent(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), (a = t.getFormatPrice()).length > 0 && e.writeString(4, a)
        }, proto.webcast.data.EcomPrice.prototype.getPrefix = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.EcomPrice.prototype.setPrefix = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.EcomPrice.prototype.getSuffix = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.EcomPrice.prototype.setSuffix = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.EcomPrice.prototype.getByCent = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.EcomPrice.prototype.setByCent = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },proto.webcast.data.EcomPrice.prototype.getFormatPrice = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.EcomPrice.prototype.setFormatPrice = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomIcon.prototype.toObject = function (t) {
            return proto.webcast.data.EcomIcon.toObject(t, this)
        }, proto.webcast.data.EcomIcon.toObject = function (t, e) {
            var a = {url: r.Message.getFieldWithDefault(e, 1, "")};
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.EcomIcon.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomIcon;
            return proto.webcast.data.EcomIcon.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomIcon.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = e.readString();
                    t.setUrl(a)
                } else e.skipField()
            }
            return t
        },proto.webcast.data.EcomIcon.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomIcon.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomIcon.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getUrl()).length > 0 && e.writeString(1, a)
        },proto.webcast.data.EcomIcon.prototype.getUrl = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.EcomIcon.prototype.setUrl = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomCampaign.prototype.toObject = function (t) {
            return proto.webcast.data.EcomCampaign.toObject(t, this)
        }, proto.webcast.data.EcomCampaign.toObject = function (t, e) {
            var a, o = {
                remainingSeconds: r.Message.getFieldWithDefault(e, 1, "0"),
                auction: (a = e.getAuction()) && proto.webcast.data.EcomAuction.toObject(t, a),
                type: r.Message.getFieldWithDefault(e, 3, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EcomCampaign.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomCampaign;
            return proto.webcast.data.EcomCampaign.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomCampaign.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setRemainingSeconds(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.EcomAuction;
                        e.readMessage(a, proto.webcast.data.EcomAuction.deserializeBinaryFromReader), t.setAuction(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setType(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EcomCampaign.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomCampaign.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomCampaign.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getRemainingSeconds(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), null != (a = t.getAuction()) && e.writeMessage(2, a, proto.webcast.data.EcomAuction.serializeBinaryToWriter), a = t.getType(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a)
        },proto.webcast.data.EcomCampaign.prototype.getRemainingSeconds = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.EcomCampaign.prototype.setRemainingSeconds = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.EcomCampaign.prototype.getAuction = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomAuction, 2)
        },proto.webcast.data.EcomCampaign.prototype.setAuction = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.EcomCampaign.prototype.clearAuction = function () {
            return this.setAuction(undefined)
        },proto.webcast.data.EcomCampaign.prototype.hasAuction = function () {
            return null != r.Message.getField(this, 2)
        },proto.webcast.data.EcomCampaign.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.EcomCampaign.prototype.setType = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomAuction.prototype.toObject = function (t) {
            return proto.webcast.data.EcomAuction.toObject(t, this)
        }, proto.webcast.data.EcomAuction.toObject = function (t, e) {
            var a, o = {
                price: r.Message.getFieldWithDefault(e, 1, "0"),
                priceLabel: r.Message.getFieldWithDefault(e, 2, ""),
                buttonLabel: r.Message.getFieldWithDefault(e, 3, ""),
                user: (a = e.getUser()) && proto.webcast.data.EcomBidder.toObject(t, a),
                status: r.Message.getFieldWithDefault(e, 5, "0")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EcomAuction.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomAuction;
            return proto.webcast.data.EcomAuction.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomAuction.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setPrice(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setPriceLabel(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setButtonLabel(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.EcomBidder;
                        e.readMessage(a, proto.webcast.data.EcomBidder.deserializeBinaryFromReader), t.setUser(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setStatus(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EcomAuction.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomAuction.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomAuction.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getPrice(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getPriceLabel()).length > 0 && e.writeString(2, a), (a = t.getButtonLabel()).length > 0 && e.writeString(3, a), null != (a = t.getUser()) && e.writeMessage(4, a, proto.webcast.data.EcomBidder.serializeBinaryToWriter), a = t.getStatus(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a)
        },proto.webcast.data.EcomAuction.prototype.getPrice = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.EcomAuction.prototype.setPrice = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.EcomAuction.prototype.getPriceLabel = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.EcomAuction.prototype.setPriceLabel = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.EcomAuction.prototype.getButtonLabel = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.EcomAuction.prototype.setButtonLabel = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.EcomAuction.prototype.getUser = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomBidder, 4)
        },proto.webcast.data.EcomAuction.prototype.setUser = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.EcomAuction.prototype.clearUser = function () {
            return this.setUser(undefined)
        },proto.webcast.data.EcomAuction.prototype.hasUser = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.EcomAuction.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.EcomAuction.prototype.setStatus = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomBidder.prototype.toObject = function (t) {
            return proto.webcast.data.EcomBidder.toObject(t, this)
        }, proto.webcast.data.EcomBidder.toObject = function (t, e) {
            var a, o = {
                name: r.Message.getFieldWithDefault(e, 1, ""),
                avatar: (a = e.getAvatar()) && proto.webcast.data.EcomAvatar.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EcomBidder.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomBidder;
            return proto.webcast.data.EcomBidder.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomBidder.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setName(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.EcomAvatar;
                        e.readMessage(a, proto.webcast.data.EcomAvatar.deserializeBinaryFromReader), t.setAvatar(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EcomBidder.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomBidder.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomBidder.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getName()).length > 0 && e.writeString(1, a), null != (a = t.getAvatar()) && e.writeMessage(2, a, proto.webcast.data.EcomAvatar.serializeBinaryToWriter)
        },proto.webcast.data.EcomBidder.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.EcomBidder.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.EcomBidder.prototype.getAvatar = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomAvatar, 2)
        },proto.webcast.data.EcomBidder.prototype.setAvatar = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        },proto.webcast.data.EcomBidder.prototype.clearAvatar = function () {
            return this.setAvatar(undefined)
        },proto.webcast.data.EcomBidder.prototype.hasAvatar = function () {
            return null != r.Message.getField(this, 2)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomAvatar.prototype.toObject = function (t) {
            return proto.webcast.data.EcomAvatar.toObject(t, this)
        }, proto.webcast.data.EcomAvatar.toObject = function (t, e) {
            var a = {
                url: r.Message.getFieldWithDefault(e, 1, ""),
                width: r.Message.getFieldWithDefault(e, 2, "0"),
                height: r.Message.getFieldWithDefault(e, 3, "0")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.EcomAvatar.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomAvatar;
            return proto.webcast.data.EcomAvatar.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomAvatar.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setUrl(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setWidth(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setHeight(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EcomAvatar.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomAvatar.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomAvatar.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getUrl()).length > 0 && e.writeString(1, a), a = t.getWidth(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getHeight(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a)
        },proto.webcast.data.EcomAvatar.prototype.getUrl = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.EcomAvatar.prototype.setUrl = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.EcomAvatar.prototype.getWidth = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.EcomAvatar.prototype.setWidth = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.EcomAvatar.prototype.getHeight = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        },proto.webcast.data.EcomAvatar.prototype.setHeight = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomPop.prototype.toObject = function (t) {
            return proto.webcast.data.EcomPop.toObject(t, this)
        }, proto.webcast.data.EcomPop.toObject = function (t, e) {
            var a, o = {
                productId: r.Message.getFieldWithDefault(e, 1, "0"),
                promotionId: r.Message.getFieldWithDefault(e, 2, "0"),
                title: r.Message.getFieldWithDefault(e, 3, ""),
                cover: r.Message.getFieldWithDefault(e, 4, ""),
                minPrice: (a = e.getMinPrice()) && proto.webcast.data.EcomPrice.toObject(t, a),
                sellingPoint: r.Message.getFieldWithDefault(e, 6, ""),
                jumanjiJson: r.Message.getFieldWithDefault(e, 7, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EcomPop.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomPop;
            return proto.webcast.data.EcomPop.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomPop.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setProductId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setPromotionId(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setTitle(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setCover(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.EcomPrice;
                        e.readMessage(a, proto.webcast.data.EcomPrice.deserializeBinaryFromReader), t.setMinPrice(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setSellingPoint(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setJumanjiJson(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EcomPop.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomPop.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomPop.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getProductId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getPromotionId(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), (a = t.getTitle()).length > 0 && e.writeString(3, a), (a = t.getCover()).length > 0 && e.writeString(4, a), null != (a = t.getMinPrice()) && e.writeMessage(5, a, proto.webcast.data.EcomPrice.serializeBinaryToWriter), (a = t.getSellingPoint()).length > 0 && e.writeString(6, a), (a = t.getJumanjiJson()).length > 0 && e.writeString(7, a)
        },proto.webcast.data.EcomPop.prototype.getProductId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.EcomPop.prototype.setProductId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.EcomPop.prototype.getPromotionId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.EcomPop.prototype.setPromotionId = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.EcomPop.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.EcomPop.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.EcomPop.prototype.getCover = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.EcomPop.prototype.setCover = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.EcomPop.prototype.getMinPrice = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomPrice, 5)
        },proto.webcast.data.EcomPop.prototype.setMinPrice = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        },proto.webcast.data.EcomPop.prototype.clearMinPrice = function () {
            return this.setMinPrice(undefined)
        },proto.webcast.data.EcomPop.prototype.hasMinPrice = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.data.EcomPop.prototype.getSellingPoint = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.EcomPop.prototype.setSellingPoint = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.EcomPop.prototype.getJumanjiJson = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        },proto.webcast.data.EcomPop.prototype.setJumanjiJson = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.Coupon.prototype.toObject = function (t) {
            return proto.webcast.data.Coupon.toObject(t, this)
        }, proto.webcast.data.Coupon.toObject = function (t, e) {
            var a = {
                icon: r.Message.getFieldWithDefault(e, 1, ""),
                startTime: r.Message.getFieldWithDefault(e, 2, ""),
                expireTime: r.Message.getFieldWithDefault(e, 3, ""),
                couponName: r.Message.getFieldWithDefault(e, 4, ""),
                url: r.Message.getFieldWithDefault(e, 5, ""),
                couponString: r.Message.getFieldWithDefault(e, 6, ""),
                countdown: r.Message.getFieldWithDefault(e, 7, "0"),
                showType: r.Message.getFieldWithDefault(e, 8, "0"),
                couponMetaId: r.Message.getFieldWithDefault(e, 9, ""),
                couponType: r.Message.getFieldWithDefault(e, 10, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.Coupon.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.Coupon;
            return proto.webcast.data.Coupon.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.Coupon.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setIcon(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setStartTime(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setExpireTime(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setCouponName(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setUrl(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setCouponString(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setCountdown(a);
                        break;
                    case 8:
                        a = e.readInt64String();
                        t.setShowType(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setCouponMetaId(a);
                        break;
                    case 10:
                        a = e.readString();
                        t.setCouponType(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.Coupon.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.Coupon.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.Coupon.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getIcon()).length > 0 && e.writeString(1, a), (a = t.getStartTime()).length > 0 && e.writeString(2, a), (a = t.getExpireTime()).length > 0 && e.writeString(3, a), (a = t.getCouponName()).length > 0 && e.writeString(4, a), (a = t.getUrl()).length > 0 && e.writeString(5, a), (a = t.getCouponString()).length > 0 && e.writeString(6, a), a = t.getCountdown(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), a = t.getShowType(), 0 !== parseInt(a, 10) && e.writeInt64String(8, a), (a = t.getCouponMetaId()).length > 0 && e.writeString(9, a), (a = t.getCouponType()).length > 0 && e.writeString(10, a)
        },proto.webcast.data.Coupon.prototype.getIcon = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        },proto.webcast.data.Coupon.prototype.setIcon = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        },proto.webcast.data.Coupon.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.Coupon.prototype.setStartTime = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.Coupon.prototype.getExpireTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.Coupon.prototype.setExpireTime = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.Coupon.prototype.getCouponName = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        },proto.webcast.data.Coupon.prototype.setCouponName = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        },proto.webcast.data.Coupon.prototype.getUrl = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.data.Coupon.prototype.setUrl = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        },proto.webcast.data.Coupon.prototype.getCouponString = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.data.Coupon.prototype.setCouponString = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        },proto.webcast.data.Coupon.prototype.getCountdown = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.Coupon.prototype.setCountdown = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },proto.webcast.data.Coupon.prototype.getShowType = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.data.Coupon.prototype.setShowType = function (t) {
            return r.Message.setProto3StringIntField(this, 8, t)
        },proto.webcast.data.Coupon.prototype.getCouponMetaId = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.data.Coupon.prototype.setCouponMetaId = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        },proto.webcast.data.Coupon.prototype.getCouponType = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.data.Coupon.prototype.setCouponType = function (t) {
            return r.Message.setProto3StringField(this, 10, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.Redpack.prototype.toObject = function (t) {
            return proto.webcast.data.Redpack.toObject(t, this)
        }, proto.webcast.data.Redpack.toObject = function (t, e) {
            var a = {
                redpackType: r.Message.getFieldWithDefault(e, 1, "0"),
                redpackActivityId: r.Message.getFieldWithDefault(e, 2, "0"),
                redpackActivityDisplayText: r.Message.getFieldWithDefault(e, 3, ""),
                startApplyTime: r.Message.getFieldWithDefault(e, 4, "0"),
                endApplyTime: r.Message.getFieldWithDefault(e, 5, "0"),
                preheatTime: r.Message.getFieldWithDefault(e, 6, "0"),
                serverTime: r.Message.getFieldWithDefault(e, 7, "0"),
                hasApplied: r.Message.getFieldWithDefault(e, 8, "0"),
                iconUrl: r.Message.getFieldWithDefault(e, 9, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.Redpack.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.Redpack;
            return proto.webcast.data.Redpack.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.Redpack.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setRedpackType(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setRedpackActivityId(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setRedpackActivityDisplayText(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setStartApplyTime(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setEndApplyTime(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setPreheatTime(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setServerTime(a);
                        break;
                    case 8:
                        a = e.readInt64String();
                        t.setHasApplied(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setIconUrl(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.Redpack.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.Redpack.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.Redpack.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getRedpackType(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getRedpackActivityId(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), (a = t.getRedpackActivityDisplayText()).length > 0 && e.writeString(3, a), a = t.getStartApplyTime(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getEndApplyTime(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getPreheatTime(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getServerTime(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), a = t.getHasApplied(), 0 !== parseInt(a, 10) && e.writeInt64String(8, a), (a = t.getIconUrl()).length > 0 && e.writeString(9, a)
        },proto.webcast.data.Redpack.prototype.getRedpackType = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.Redpack.prototype.setRedpackType = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.Redpack.prototype.getRedpackActivityId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        },proto.webcast.data.Redpack.prototype.setRedpackActivityId = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        },proto.webcast.data.Redpack.prototype.getRedpackActivityDisplayText = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.Redpack.prototype.setRedpackActivityDisplayText = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.Redpack.prototype.getStartApplyTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.data.Redpack.prototype.setStartApplyTime = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        },proto.webcast.data.Redpack.prototype.getEndApplyTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        },proto.webcast.data.Redpack.prototype.setEndApplyTime = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        },proto.webcast.data.Redpack.prototype.getPreheatTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.Redpack.prototype.setPreheatTime = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.Redpack.prototype.getServerTime = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.Redpack.prototype.setServerTime = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },proto.webcast.data.Redpack.prototype.getHasApplied = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.data.Redpack.prototype.setHasApplied = function (t) {
            return r.Message.setProto3StringIntField(this, 8, t)
        },proto.webcast.data.Redpack.prototype.getIconUrl = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        },proto.webcast.data.Redpack.prototype.setIconUrl = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.EcomGoodsCard.prototype.toObject = function (t) {
            return proto.webcast.data.EcomGoodsCard.toObject(t, this)
        }, proto.webcast.data.EcomGoodsCard.toObject = function (t, e) {
            var a, o = {
                productId: r.Message.getFieldWithDefault(e, 1, "0"),
                title: r.Message.getFieldWithDefault(e, 2, ""),
                cover: r.Message.getFieldWithDefault(e, 3, ""),
                minPrice: (a = e.getMinPrice()) && proto.webcast.data.EcomPrice.toObject(t, a),
                coupon: (a = e.getCoupon()) && proto.webcast.data.Coupon.toObject(t, a),
                promotionId: r.Message.getFieldWithDefault(e, 6, "0"),
                jumpDestination: r.Message.getFieldWithDefault(e, 7, "0"),
                cardType: r.Message.getFieldWithDefault(e, 8, "0"),
                redpack: (a = e.getRedpack()) && proto.webcast.data.Redpack.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }),proto.webcast.data.EcomGoodsCard.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.EcomGoodsCard;
            return proto.webcast.data.EcomGoodsCard.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.EcomGoodsCard.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setProductId(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setTitle(a);
                        break;
                    case 3:
                        a = e.readString();
                        t.setCover(a);
                        break;
                    case 4:
                        a = new proto.webcast.data.EcomPrice;
                        e.readMessage(a, proto.webcast.data.EcomPrice.deserializeBinaryFromReader), t.setMinPrice(a);
                        break;
                    case 5:
                        a = new proto.webcast.data.Coupon;
                        e.readMessage(a, proto.webcast.data.Coupon.deserializeBinaryFromReader), t.setCoupon(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setPromotionId(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setJumpDestination(a);
                        break;
                    case 8:
                        a = e.readInt64String();
                        t.setCardType(a);
                        break;
                    case 9:
                        a = new proto.webcast.data.Redpack;
                        e.readMessage(a, proto.webcast.data.Redpack.deserializeBinaryFromReader), t.setRedpack(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.EcomGoodsCard.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.EcomGoodsCard.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.EcomGoodsCard.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getProductId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), (a = t.getTitle()).length > 0 && e.writeString(2, a), (a = t.getCover()).length > 0 && e.writeString(3, a), null != (a = t.getMinPrice()) && e.writeMessage(4, a, proto.webcast.data.EcomPrice.serializeBinaryToWriter), null != (a = t.getCoupon()) && e.writeMessage(5, a, proto.webcast.data.Coupon.serializeBinaryToWriter), a = t.getPromotionId(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getJumpDestination(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), a = t.getCardType(), 0 !== parseInt(a, 10) && e.writeInt64String(8, a), null != (a = t.getRedpack()) && e.writeMessage(9, a, proto.webcast.data.Redpack.serializeBinaryToWriter)
        },proto.webcast.data.EcomGoodsCard.prototype.getProductId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        },proto.webcast.data.EcomGoodsCard.prototype.setProductId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        },proto.webcast.data.EcomGoodsCard.prototype.getTitle = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.EcomGoodsCard.prototype.setTitle = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },proto.webcast.data.EcomGoodsCard.prototype.getCover = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.data.EcomGoodsCard.prototype.setCover = function (t) {
            return r.Message.setProto3StringField(this, 3, t)
        },proto.webcast.data.EcomGoodsCard.prototype.getMinPrice = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.EcomPrice, 4)
        },proto.webcast.data.EcomGoodsCard.prototype.setMinPrice = function (t) {
            return r.Message.setWrapperField(this, 4, t)
        },proto.webcast.data.EcomGoodsCard.prototype.clearMinPrice = function () {
            return this.setMinPrice(undefined)
        },proto.webcast.data.EcomGoodsCard.prototype.hasMinPrice = function () {
            return null != r.Message.getField(this, 4)
        },proto.webcast.data.EcomGoodsCard.prototype.getCoupon = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.Coupon, 5)
        },proto.webcast.data.EcomGoodsCard.prototype.setCoupon = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        },proto.webcast.data.EcomGoodsCard.prototype.clearCoupon = function () {
            return this.setCoupon(undefined)
        },proto.webcast.data.EcomGoodsCard.prototype.hasCoupon = function () {
            return null != r.Message.getField(this, 5)
        },proto.webcast.data.EcomGoodsCard.prototype.getPromotionId = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        },proto.webcast.data.EcomGoodsCard.prototype.setPromotionId = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        },proto.webcast.data.EcomGoodsCard.prototype.getJumpDestination = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.data.EcomGoodsCard.prototype.setJumpDestination = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        },proto.webcast.data.EcomGoodsCard.prototype.getCardType = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.data.EcomGoodsCard.prototype.setCardType = function (t) {
            return r.Message.setProto3StringIntField(this, 8, t)
        },proto.webcast.data.EcomGoodsCard.prototype.getRedpack = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.Redpack, 9)
        },proto.webcast.data.EcomGoodsCard.prototype.setRedpack = function (t) {
            return r.Message.setWrapperField(this, 9, t)
        },proto.webcast.data.EcomGoodsCard.prototype.clearRedpack = function () {
            return this.setRedpack(undefined)
        },proto.webcast.data.EcomGoodsCard.prototype.hasRedpack = function () {
            return null != r.Message.getField(this, 9)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.RedsShowInfo.prototype.toObject = function (t) {
            return proto.webcast.data.RedsShowInfo.toObject(t, this)
        }, proto.webcast.data.RedsShowInfo.toObject = function (t, e) {
            var a = {
                dataType: r.Message.getFieldWithDefault(e, 1, 0),
                fullText: r.Message.getFieldWithDefault(e, 2, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }),proto.webcast.data.RedsShowInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.RedsShowInfo;
            return proto.webcast.data.RedsShowInfo.deserializeBinaryFromReader(a, e)
        },proto.webcast.data.RedsShowInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt32();
                        t.setDataType(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setFullText(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        },proto.webcast.data.RedsShowInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.RedsShowInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        },proto.webcast.data.RedsShowInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            0 !== (a = t.getDataType()) && e.writeInt32(1, a), (a = t.getFullText()).length > 0 && e.writeString(2, a)
        },proto.webcast.data.RedsShowInfo.prototype.getDataType = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        },proto.webcast.data.RedsShowInfo.prototype.setDataType = function (t) {
            return r.Message.setProto3IntField(this, 1, t)
        },proto.webcast.data.RedsShowInfo.prototype.getFullText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        },proto.webcast.data.RedsShowInfo.prototype.setFullText = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        },o.object.extend(e, proto.webcast.data)
    }, 94683: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null);
        o.exportSymbol("proto.webcast.data.GameCPAnchorReminderType", null, i), o.exportSymbol("proto.webcast.data.GameInvite", null, i), o.exportSymbol("proto.webcast.data.GameInviteReply", null, i), o.exportSymbol("proto.webcast.data.GameKind", null, i), o.exportSymbol("proto.webcast.data.InvitationSwitch", null, i), o.exportSymbol("proto.webcast.data.SwitchExtraBase", null, i), o.exportSymbol("proto.webcast.data.SwitchExtraForOpen", null, i), proto.webcast.data.SwitchExtraBase = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.SwitchExtraBase, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.SwitchExtraBase.displayName = "proto.webcast.data.SwitchExtraBase"), proto.webcast.data.SwitchExtraForOpen = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.SwitchExtraForOpen, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.SwitchExtraForOpen.displayName = "proto.webcast.data.SwitchExtraForOpen"), proto.webcast.data.GameInvite = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GameInvite, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GameInvite.displayName = "proto.webcast.data.GameInvite"), proto.webcast.data.InvitationSwitch = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.InvitationSwitch, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.InvitationSwitch.displayName = "proto.webcast.data.InvitationSwitch"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.SwitchExtraBase.prototype.toObject = function (t) {
            return proto.webcast.data.SwitchExtraBase.toObject(t, this)
        }, proto.webcast.data.SwitchExtraBase.toObject = function (t, e) {
            var a = {schemaForCheck: r.Message.getFieldWithDefault(e, 1, "")};
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.SwitchExtraBase.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.SwitchExtraBase;
            return proto.webcast.data.SwitchExtraBase.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.SwitchExtraBase.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = e.readString();
                    t.setSchemaForCheck(a)
                } else e.skipField()
            }
            return t
        }, proto.webcast.data.SwitchExtraBase.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.SwitchExtraBase.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.SwitchExtraBase.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getSchemaForCheck()).length > 0 && e.writeString(1, a)
        }, proto.webcast.data.SwitchExtraBase.prototype.getSchemaForCheck = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.SwitchExtraBase.prototype.setSchemaForCheck = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.SwitchExtraForOpen.prototype.toObject = function (t) {
            return proto.webcast.data.SwitchExtraForOpen.toObject(t, this)
        }, proto.webcast.data.SwitchExtraForOpen.toObject = function (t, e) {
            var a = {schemaForOpen: r.Message.getFieldWithDefault(e, 1, "")};
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.SwitchExtraForOpen.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.SwitchExtraForOpen;
            return proto.webcast.data.SwitchExtraForOpen.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.SwitchExtraForOpen.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = e.readString();
                    t.setSchemaForOpen(a)
                } else e.skipField()
            }
            return t
        }, proto.webcast.data.SwitchExtraForOpen.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.SwitchExtraForOpen.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.SwitchExtraForOpen.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getSchemaForOpen()).length > 0 && e.writeString(1, a)
        }, proto.webcast.data.SwitchExtraForOpen.prototype.getSchemaForOpen = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.SwitchExtraForOpen.prototype.setSchemaForOpen = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GameInvite.prototype.toObject = function (t) {
            return proto.webcast.data.GameInvite.toObject(t, this)
        }, proto.webcast.data.GameInvite.toObject = function (t, e) {
            var a = {
                id: r.Message.getFieldWithDefault(e, 1, "0"),
                kind: r.Message.getFieldWithDefault(e, 2, "0"),
                createTime: r.Message.getFieldWithDefault(e, 3, "0"),
                nowTime: r.Message.getFieldWithDefault(e, 4, "0"),
                expireTime: r.Message.getFieldWithDefault(e, 5, "0"),
                status: r.Message.getFieldWithDefault(e, 6, "0"),
                roomId: r.Message.getFieldWithDefault(e, 7, "0"),
                idStr: r.Message.getFieldWithDefault(e, 8, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.GameInvite.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GameInvite;
            return proto.webcast.data.GameInvite.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.GameInvite.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 2:
                        a = e.readInt64String();
                        t.setKind(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setCreateTime(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setNowTime(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setExpireTime(a);
                        break;
                    case 6:
                        a = e.readInt64String();
                        t.setStatus(a);
                        break;
                    case 7:
                        a = e.readInt64String();
                        t.setRoomId(a);
                        break;
                    case 8:
                        a = e.readString();
                        t.setIdStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.GameInvite.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GameInvite.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.GameInvite.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), a = t.getKind(), 0 !== parseInt(a, 10) && e.writeInt64String(2, a), a = t.getCreateTime(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getNowTime(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getExpireTime(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), a = t.getStatus(), 0 !== parseInt(a, 10) && e.writeInt64String(6, a), a = t.getRoomId(), 0 !== parseInt(a, 10) && e.writeInt64String(7, a), (a = t.getIdStr()).length > 0 && e.writeString(8, a)
        }, proto.webcast.data.GameInvite.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.GameInvite.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.GameInvite.prototype.getKind = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.data.GameInvite.prototype.setKind = function (t) {
            return r.Message.setProto3StringIntField(this, 2, t)
        }, proto.webcast.data.GameInvite.prototype.getCreateTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.GameInvite.prototype.setCreateTime = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.GameInvite.prototype.getNowTime = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.GameInvite.prototype.setNowTime = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.GameInvite.prototype.getExpireTime = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.data.GameInvite.prototype.setExpireTime = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        }, proto.webcast.data.GameInvite.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 6, "0")
        }, proto.webcast.data.GameInvite.prototype.setStatus = function (t) {
            return r.Message.setProto3StringIntField(this, 6, t)
        }, proto.webcast.data.GameInvite.prototype.getRoomId = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.data.GameInvite.prototype.setRoomId = function (t) {
            return r.Message.setProto3StringIntField(this, 7, t)
        }, proto.webcast.data.GameInvite.prototype.getIdStr = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.data.GameInvite.prototype.setIdStr = function (t) {
            return r.Message.setProto3StringField(this, 8, t)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.InvitationSwitch.prototype.toObject = function (t) {
            return proto.webcast.data.InvitationSwitch.toObject(t, this)
        }, proto.webcast.data.InvitationSwitch.toObject = function (t, e) {
            var a, o = {
                id: r.Message.getFieldWithDefault(e, 1, "0"),
                gameKind: r.Message.getFieldWithDefault(e, 2, 0),
                gameId: r.Message.getFieldWithDefault(e, 3, "0"),
                playKind: r.Message.getFieldWithDefault(e, 4, "0"),
                status: r.Message.getFieldWithDefault(e, 5, "0"),
                message: r.Message.getFieldWithDefault(e, 6, ""),
                extraBase: (a = e.getExtraBase()) && proto.webcast.data.SwitchExtraBase.toObject(t, a),
                extraForOpen: (a = e.getExtraForOpen()) && proto.webcast.data.SwitchExtraForOpen.toObject(t, a),
                idStr: r.Message.getFieldWithDefault(e, 9, "")
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.InvitationSwitch.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.InvitationSwitch;
            return proto.webcast.data.InvitationSwitch.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.InvitationSwitch.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 2:
                        a = e.readEnum();
                        t.setGameKind(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setGameId(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setPlayKind(a);
                        break;
                    case 5:
                        a = e.readInt64String();
                        t.setStatus(a);
                        break;
                    case 6:
                        a = e.readString();
                        t.setMessage(a);
                        break;
                    case 7:
                        a = new proto.webcast.data.SwitchExtraBase;
                        e.readMessage(a, proto.webcast.data.SwitchExtraBase.deserializeBinaryFromReader), t.setExtraBase(a);
                        break;
                    case 8:
                        a = new proto.webcast.data.SwitchExtraForOpen;
                        e.readMessage(a, proto.webcast.data.SwitchExtraForOpen.deserializeBinaryFromReader), t.setExtraForOpen(a);
                        break;
                    case 9:
                        a = e.readString();
                        t.setIdStr(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.InvitationSwitch.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.InvitationSwitch.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.InvitationSwitch.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), 0 !== (a = t.getGameKind()) && e.writeEnum(2, a), a = t.getGameId(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getPlayKind(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), a = t.getStatus(), 0 !== parseInt(a, 10) && e.writeInt64String(5, a), (a = t.getMessage()).length > 0 && e.writeString(6, a), null != (a = t.getExtraBase()) && e.writeMessage(7, a, proto.webcast.data.SwitchExtraBase.serializeBinaryToWriter), null != (a = t.getExtraForOpen()) && e.writeMessage(8, a, proto.webcast.data.SwitchExtraForOpen.serializeBinaryToWriter), (a = t.getIdStr()).length > 0 && e.writeString(9, a)
        }, proto.webcast.data.InvitationSwitch.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.InvitationSwitch.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.InvitationSwitch.prototype.getGameKind = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.data.InvitationSwitch.prototype.setGameKind = function (t) {
            return r.Message.setProto3EnumField(this, 2, t)
        }, proto.webcast.data.InvitationSwitch.prototype.getGameId = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.InvitationSwitch.prototype.setGameId = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.InvitationSwitch.prototype.getPlayKind = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.InvitationSwitch.prototype.setPlayKind = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.InvitationSwitch.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.data.InvitationSwitch.prototype.setStatus = function (t) {
            return r.Message.setProto3StringIntField(this, 5, t)
        }, proto.webcast.data.InvitationSwitch.prototype.getMessage = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.data.InvitationSwitch.prototype.setMessage = function (t) {
            return r.Message.setProto3StringField(this, 6, t)
        }, proto.webcast.data.InvitationSwitch.prototype.getExtraBase = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.SwitchExtraBase, 7)
        }, proto.webcast.data.InvitationSwitch.prototype.setExtraBase = function (t) {
            return r.Message.setWrapperField(this, 7, t)
        }, proto.webcast.data.InvitationSwitch.prototype.clearExtraBase = function () {
            return this.setExtraBase(undefined)
        }, proto.webcast.data.InvitationSwitch.prototype.hasExtraBase = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.data.InvitationSwitch.prototype.getExtraForOpen = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.SwitchExtraForOpen, 8)
        }, proto.webcast.data.InvitationSwitch.prototype.setExtraForOpen = function (t) {
            return r.Message.setWrapperField(this, 8, t)
        }, proto.webcast.data.InvitationSwitch.prototype.clearExtraForOpen = function () {
            return this.setExtraForOpen(undefined)
        }, proto.webcast.data.InvitationSwitch.prototype.hasExtraForOpen = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.data.InvitationSwitch.prototype.getIdStr = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.data.InvitationSwitch.prototype.setIdStr = function (t) {
            return r.Message.setProto3StringField(this, 9, t)
        }, proto.webcast.data.GameKind = {
            GAMEKINDUNKNOWN: 0,
            EFFECT: 1,
            WMINI: 2,
            WGAMEX: 3,
            CLOUD: 4
        }, proto.webcast.data.GameInviteReply = {
            INVALID: 0,
            ACCEPT: 1,
            REJECT: 2,
            UNSATISFIED: 3,
            RESOURCENOTREADY: 4
        }, proto.webcast.data.GameCPAnchorReminderType = {
            UNSPECIFIED: 0,
            TRYEXPLAIN: 1
        }, o.object.extend(e, proto.webcast.data)
    }, 7856: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(8411);
        o.object.extend(proto, s);
        var n = a(56523);
        o.object.extend(proto, n), o.exportSymbol("proto.webcast.data.GradeBuffInfo", null, i), o.exportSymbol("proto.webcast.data.GradeBuffStatsType", null, i), o.exportSymbol("proto.webcast.data.GradeBuffStatus", null, i), proto.webcast.data.GradeBuffInfo = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.GradeBuffInfo, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.GradeBuffInfo.displayName = "proto.webcast.data.GradeBuffInfo"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.GradeBuffInfo.prototype.toObject = function (t) {
            return proto.webcast.data.GradeBuffInfo.toObject(t, this)
        }, proto.webcast.data.GradeBuffInfo.toObject = function (t, e) {
            var a, o = {
                buffLevel: r.Message.getFieldWithDefault(e, 1, "0"),
                status: r.Message.getFieldWithDefault(e, 2, 0),
                endTime: r.Message.getFieldWithDefault(e, 3, "0"),
                statsInfoMap: (a = e.getStatsInfoMap()) ? a.toObject(t, undefined) : [],
                buffBadge: (a = e.getBuffBadge()) && s.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.GradeBuffInfo.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.GradeBuffInfo;
            return proto.webcast.data.GradeBuffInfo.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.GradeBuffInfo.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setBuffLevel(a);
                        break;
                    case 2:
                        a = e.readEnum();
                        t.setStatus(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setEndTime(a);
                        break;
                    case 4:
                        a = t.getStatsInfoMap();
                        e.readMessage(a, (function (t, e) {
                            r.Map.deserializeBinary(t, e, r.BinaryReader.prototype.readInt64, r.BinaryReader.prototype.readInt64, null, 0, 0)
                        }));
                        break;
                    case 5:
                        a = new s.Image;
                        e.readMessage(a, s.Image.deserializeBinaryFromReader), t.setBuffBadge(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.GradeBuffInfo.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.GradeBuffInfo.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.GradeBuffInfo.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getBuffLevel(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), 0 !== (a = t.getStatus()) && e.writeEnum(2, a), a = t.getEndTime(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), (a = t.getStatsInfoMap(!0)) && a.getLength() > 0 && a.serializeBinary(4, e, r.BinaryWriter.prototype.writeInt64, r.BinaryWriter.prototype.writeInt64), null != (a = t.getBuffBadge()) && e.writeMessage(5, a, s.Image.serializeBinaryToWriter)
        }, proto.webcast.data.GradeBuffInfo.prototype.getBuffLevel = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.GradeBuffInfo.prototype.setBuffLevel = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.GradeBuffInfo.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.data.GradeBuffInfo.prototype.setStatus = function (t) {
            return r.Message.setProto3EnumField(this, 2, t)
        }, proto.webcast.data.GradeBuffInfo.prototype.getEndTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.GradeBuffInfo.prototype.setEndTime = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.GradeBuffInfo.prototype.getStatsInfoMap = function (t) {
            return r.Message.getMapField(this, 4, t, null)
        }, proto.webcast.data.GradeBuffInfo.prototype.clearStatsInfoMap = function () {
            return this.getStatsInfoMap().clear(), this
        }, proto.webcast.data.GradeBuffInfo.prototype.getBuffBadge = function () {
            return r.Message.getWrapperField(this, s.Image, 5)
        }, proto.webcast.data.GradeBuffInfo.prototype.setBuffBadge = function (t) {
            return r.Message.setWrapperField(this, 5, t)
        }, proto.webcast.data.GradeBuffInfo.prototype.clearBuffBadge = function () {
            return this.setBuffBadge(undefined)
        }, proto.webcast.data.GradeBuffInfo.prototype.hasBuffBadge = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.data.GradeBuffStatus = {
            GRADEBUFFSTATUSUNKNOWN: 0,
            GRADEBUFFSTATUSACTIVE: 1,
            GRADEBUFFSTATUSEXPIRED: 2
        }, proto.webcast.data.GradeBuffStatsType = {
            BUFFSTATSTYPEUNKNOWN: 0,
            PAYGRADESCORETOTAL: 1,
            PKSCORECURRENTCYCLE: 2,
            RANKSCORECURRENTCYCLE: 3
        }, o.object.extend(e, proto.webcast.data)
    }, 8411: function (t, e, a) {
        var r = a(47865), o = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), s = a(56523);
        o.object.extend(proto, s), o.exportSymbol("proto.webcast.data.DiggIcon", null, i), o.exportSymbol("proto.webcast.data.Image", null, i), o.exportSymbol("proto.webcast.data.Image.Content", null, i), o.exportSymbol("proto.webcast.data.Image.NinePatchSetting", null, i), o.exportSymbol("proto.webcast.data.WebImage", null, i), proto.webcast.data.Image = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.Image.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.Image, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.Image.displayName = "proto.webcast.data.Image"), proto.webcast.data.Image.Content = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.Image.Content, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.Image.Content.displayName = "proto.webcast.data.Image.Content"), proto.webcast.data.Image.NinePatchSetting = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.Image.NinePatchSetting.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.Image.NinePatchSetting, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.Image.NinePatchSetting.displayName = "proto.webcast.data.Image.NinePatchSetting"), proto.webcast.data.DiggIcon = function (t) {
            r.Message.initialize(this, t, 0, -1, null, null)
        }, o.inherits(proto.webcast.data.DiggIcon, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.DiggIcon.displayName = "proto.webcast.data.DiggIcon"), proto.webcast.data.WebImage = function (t) {
            r.Message.initialize(this, t, 0, -1, proto.webcast.data.WebImage.repeatedFields_, null)
        }, o.inherits(proto.webcast.data.WebImage, r.Message), o.DEBUG && !COMPILED && (proto.webcast.data.WebImage.displayName = "proto.webcast.data.WebImage"), proto.webcast.data.Image.repeatedFields_ = [1, 10, 11], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.Image.prototype.toObject = function (t) {
            return proto.webcast.data.Image.toObject(t, this)
        }, proto.webcast.data.Image.toObject = function (t, e) {
            var a, o = {
                urlListList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a,
                uri: r.Message.getFieldWithDefault(e, 2, ""),
                height: r.Message.getFieldWithDefault(e, 3, "0"),
                width: r.Message.getFieldWithDefault(e, 4, "0"),
                avgColor: r.Message.getFieldWithDefault(e, 5, ""),
                imageType: r.Message.getFieldWithDefault(e, 6, 0),
                openWebUrl: r.Message.getFieldWithDefault(e, 7, ""),
                content: (a = e.getContent()) && proto.webcast.data.Image.Content.toObject(t, a),
                isAnimated: r.Message.getBooleanFieldWithDefault(e, 9, !1),
                flexSettingListList: r.Message.toObjectList(e.getFlexSettingListList(), proto.webcast.data.Image.NinePatchSetting.toObject, t),
                textSettingListList: r.Message.toObjectList(e.getTextSettingListList(), proto.webcast.data.Image.NinePatchSetting.toObject, t)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.Image.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.Image;
            return proto.webcast.data.Image.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.Image.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.addUrlList(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setUri(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setHeight(a);
                        break;
                    case 4:
                        a = e.readInt64String();
                        t.setWidth(a);
                        break;
                    case 5:
                        a = e.readString();
                        t.setAvgColor(a);
                        break;
                    case 6:
                        a = e.readInt32();
                        t.setImageType(a);
                        break;
                    case 7:
                        a = e.readString();
                        t.setOpenWebUrl(a);
                        break;
                    case 8:
                        a = new proto.webcast.data.Image.Content;
                        e.readMessage(a, proto.webcast.data.Image.Content.deserializeBinaryFromReader), t.setContent(a);
                        break;
                    case 9:
                        a = e.readBool();
                        t.setIsAnimated(a);
                        break;
                    case 10:
                        a = new proto.webcast.data.Image.NinePatchSetting;
                        e.readMessage(a, proto.webcast.data.Image.NinePatchSetting.deserializeBinaryFromReader), t.addFlexSettingList(a);
                        break;
                    case 11:
                        a = new proto.webcast.data.Image.NinePatchSetting;
                        e.readMessage(a, proto.webcast.data.Image.NinePatchSetting.deserializeBinaryFromReader), t.addTextSettingList(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.Image.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.Image.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.Image.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getUrlListList()).length > 0 && e.writeRepeatedString(1, a), (a = t.getUri()).length > 0 && e.writeString(2, a), a = t.getHeight(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), a = t.getWidth(), 0 !== parseInt(a, 10) && e.writeInt64String(4, a), (a = t.getAvgColor()).length > 0 && e.writeString(5, a), 0 !== (a = t.getImageType()) && e.writeInt32(6, a), (a = t.getOpenWebUrl()).length > 0 && e.writeString(7, a), null != (a = t.getContent()) && e.writeMessage(8, a, proto.webcast.data.Image.Content.serializeBinaryToWriter), (a = t.getIsAnimated()) && e.writeBool(9, a), (a = t.getFlexSettingListList()).length > 0 && e.writeRepeatedMessage(10, a, proto.webcast.data.Image.NinePatchSetting.serializeBinaryToWriter), (a = t.getTextSettingListList()).length > 0 && e.writeRepeatedMessage(11, a, proto.webcast.data.Image.NinePatchSetting.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.Image.Content.prototype.toObject = function (t) {
            return proto.webcast.data.Image.Content.toObject(t, this)
        }, proto.webcast.data.Image.Content.toObject = function (t, e) {
            var a = {
                name: r.Message.getFieldWithDefault(e, 1, ""),
                fontColor: r.Message.getFieldWithDefault(e, 2, ""),
                level: r.Message.getFieldWithDefault(e, 3, "0"),
                alternativeText: r.Message.getFieldWithDefault(e, 4, "")
            };
            return t && (a.$jspbMessageInstance = e), a
        }), proto.webcast.data.Image.Content.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.Image.Content;
            return proto.webcast.data.Image.Content.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.Image.Content.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readString();
                        t.setName(a);
                        break;
                    case 2:
                        a = e.readString();
                        t.setFontColor(a);
                        break;
                    case 3:
                        a = e.readInt64String();
                        t.setLevel(a);
                        break;
                    case 4:
                        a = e.readString();
                        t.setAlternativeText(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.Image.Content.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.Image.Content.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.Image.Content.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getName()).length > 0 && e.writeString(1, a), (a = t.getFontColor()).length > 0 && e.writeString(2, a), a = t.getLevel(), 0 !== parseInt(a, 10) && e.writeInt64String(3, a), (a = t.getAlternativeText()).length > 0 && e.writeString(4, a)
        }, proto.webcast.data.Image.Content.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.data.Image.Content.prototype.setName = function (t) {
            return r.Message.setProto3StringField(this, 1, t)
        }, proto.webcast.data.Image.Content.prototype.getFontColor = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.Image.Content.prototype.setFontColor = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.Image.Content.prototype.getLevel = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.Image.Content.prototype.setLevel = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.Image.Content.prototype.getAlternativeText = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.data.Image.Content.prototype.setAlternativeText = function (t) {
            return r.Message.setProto3StringField(this, 4, t)
        }, proto.webcast.data.Image.NinePatchSetting.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.Image.NinePatchSetting.prototype.toObject = function (t) {
            return proto.webcast.data.Image.NinePatchSetting.toObject(t, this)
        }, proto.webcast.data.Image.NinePatchSetting.toObject = function (t, e) {
            var a, o = {settingListList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a};
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.Image.NinePatchSetting.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.Image.NinePatchSetting;
            return proto.webcast.data.Image.NinePatchSetting.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.Image.NinePatchSetting.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) for (var a = e.isDelimited() ? e.readPackedInt64String() : [e.readInt64String()], r = 0; r < a.length; r++) t.addSettingList(a[r]); else e.skipField()
            }
            return t
        }, proto.webcast.data.Image.NinePatchSetting.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.Image.NinePatchSetting.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.Image.NinePatchSetting.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getSettingListList()).length > 0 && e.writePackedInt64String(1, a)
        }, proto.webcast.data.Image.NinePatchSetting.prototype.getSettingListList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.data.Image.NinePatchSetting.prototype.setSettingListList = function (t) {
            return r.Message.setField(this, 1, t || [])
        }, proto.webcast.data.Image.NinePatchSetting.prototype.addSettingList = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        }, proto.webcast.data.Image.NinePatchSetting.prototype.clearSettingListList = function () {
            return this.setSettingListList([])
        }, proto.webcast.data.Image.prototype.getUrlListList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.data.Image.prototype.setUrlListList = function (t) {
            return r.Message.setField(this, 1, t || [])
        }, proto.webcast.data.Image.prototype.addUrlList = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        }, proto.webcast.data.Image.prototype.clearUrlListList = function () {
            return this.setUrlListList([])
        }, proto.webcast.data.Image.prototype.getUri = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.data.Image.prototype.setUri = function (t) {
            return r.Message.setProto3StringField(this, 2, t)
        }, proto.webcast.data.Image.prototype.getHeight = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.data.Image.prototype.setHeight = function (t) {
            return r.Message.setProto3StringIntField(this, 3, t)
        }, proto.webcast.data.Image.prototype.getWidth = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.data.Image.prototype.setWidth = function (t) {
            return r.Message.setProto3StringIntField(this, 4, t)
        }, proto.webcast.data.Image.prototype.getAvgColor = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.data.Image.prototype.setAvgColor = function (t) {
            return r.Message.setProto3StringField(this, 5, t)
        }, proto.webcast.data.Image.prototype.getImageType = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.data.Image.prototype.setImageType = function (t) {
            return r.Message.setProto3IntField(this, 6, t)
        }, proto.webcast.data.Image.prototype.getOpenWebUrl = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.data.Image.prototype.setOpenWebUrl = function (t) {
            return r.Message.setProto3StringField(this, 7, t)
        }, proto.webcast.data.Image.prototype.getContent = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.Image.Content, 8)
        }, proto.webcast.data.Image.prototype.setContent = function (t) {
            return r.Message.setWrapperField(this, 8, t)
        }, proto.webcast.data.Image.prototype.clearContent = function () {
            return this.setContent(undefined)
        }, proto.webcast.data.Image.prototype.hasContent = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.data.Image.prototype.getIsAnimated = function () {
            return r.Message.getBooleanFieldWithDefault(this, 9, !1)
        }, proto.webcast.data.Image.prototype.setIsAnimated = function (t) {
            return r.Message.setProto3BooleanField(this, 9, t)
        }, proto.webcast.data.Image.prototype.getFlexSettingListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.Image.NinePatchSetting, 10)
        }, proto.webcast.data.Image.prototype.setFlexSettingListList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 10, t)
        }, proto.webcast.data.Image.prototype.addFlexSettingList = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 10, t, proto.webcast.data.Image.NinePatchSetting, e)
        }, proto.webcast.data.Image.prototype.clearFlexSettingListList = function () {
            return this.setFlexSettingListList([])
        }, proto.webcast.data.Image.prototype.getTextSettingListList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.data.Image.NinePatchSetting, 11)
        }, proto.webcast.data.Image.prototype.setTextSettingListList = function (t) {
            return r.Message.setRepeatedWrapperField(this, 11, t)
        }, proto.webcast.data.Image.prototype.addTextSettingList = function (t, e) {
            return r.Message.addToRepeatedWrapperField(this, 11, t, proto.webcast.data.Image.NinePatchSetting, e)
        }, proto.webcast.data.Image.prototype.clearTextSettingListList = function () {
            return this.setTextSettingListList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.DiggIcon.prototype.toObject = function (t) {
            return proto.webcast.data.DiggIcon.toObject(t, this)
        }, proto.webcast.data.DiggIcon.toObject = function (t, e) {
            var a, o = {
                id: r.Message.getFieldWithDefault(e, 1, "0"),
                normalIconUrl: (a = e.getNormalIconUrl()) && proto.webcast.data.Image.toObject(t, a)
            };
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.DiggIcon.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.DiggIcon;
            return proto.webcast.data.DiggIcon.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.DiggIcon.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                switch (e.getFieldNumber()) {
                    case 1:
                        var a = e.readInt64String();
                        t.setId(a);
                        break;
                    case 2:
                        a = new proto.webcast.data.Image;
                        e.readMessage(a, proto.webcast.data.Image.deserializeBinaryFromReader), t.setNormalIconUrl(a);
                        break;
                    default:
                        e.skipField()
                }
            }
            return t
        }, proto.webcast.data.DiggIcon.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.DiggIcon.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.DiggIcon.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            a = t.getId(), 0 !== parseInt(a, 10) && e.writeInt64String(1, a), null != (a = t.getNormalIconUrl()) && e.writeMessage(2, a, proto.webcast.data.Image.serializeBinaryToWriter)
        }, proto.webcast.data.DiggIcon.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.data.DiggIcon.prototype.setId = function (t) {
            return r.Message.setProto3StringIntField(this, 1, t)
        }, proto.webcast.data.DiggIcon.prototype.getNormalIconUrl = function () {
            return r.Message.getWrapperField(this, proto.webcast.data.Image, 2)
        }, proto.webcast.data.DiggIcon.prototype.setNormalIconUrl = function (t) {
            return r.Message.setWrapperField(this, 2, t)
        }, proto.webcast.data.DiggIcon.prototype.clearNormalIconUrl = function () {
            return this.setNormalIconUrl(undefined)
        }, proto.webcast.data.DiggIcon.prototype.hasNormalIconUrl = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.data.WebImage.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.webcast.data.WebImage.prototype.toObject = function (t) {
            return proto.webcast.data.WebImage.toObject(t, this)
        }, proto.webcast.data.WebImage.toObject = function (t, e) {
            var a, o = {urlListList: null == (a = r.Message.getRepeatedField(e, 1)) ? undefined : a};
            return t && (o.$jspbMessageInstance = e), o
        }), proto.webcast.data.WebImage.deserializeBinary = function (t) {
            var e = new r.BinaryReader(t), a = new proto.webcast.data.WebImage;
            return proto.webcast.data.WebImage.deserializeBinaryFromReader(a, e)
        }, proto.webcast.data.WebImage.deserializeBinaryFromReader = function (t, e) {
            for (; e.nextField() && !e.isEndGroup();) {
                if (1 === e.getFieldNumber()) {
                    var a = e.readString();
                    t.addUrlList(a)
                } else e.skipField()
            }
            return t
        }, proto.webcast.data.WebImage.prototype.serializeBinary = function () {
            var t = new r.BinaryWriter;
            return proto.webcast.data.WebImage.serializeBinaryToWriter(this, t), t.getResultBuffer()
        }, proto.webcast.data.WebImage.serializeBinaryToWriter = function (t, e) {
            var a = undefined;
            (a = t.getUrlListList()).length > 0 && e.writeRepeatedString(1, a)
        }, proto.webcast.data.WebImage.prototype.getUrlListList = function () {
            return r.Message.getRepeatedField(this, 1)
        }, proto.webcast.data.WebImage.prototype.setUrlListList = function (t) {
            return r.Message.setField(this, 1, t || [])
        }, proto.webcast.data.WebImage.prototype.addUrlList = function (t, e) {
            return r.Message.addToRepeatedField(this, 1, t, e)
        }, proto.webcast.data.WebImage.prototype.clearUrlListList = function () {
            return this.setUrlListList([])
        },o.object.extend(e, proto.webcast.data)
    }
}]);