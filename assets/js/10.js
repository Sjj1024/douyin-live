(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[9713], {
    1298: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(61565);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.LiveEcomGeneralMessage", null, i), s.exportSymbol("proto.webcast.im.TraceTimeMetricV2", null, i), proto.webcast.im.TraceTimeMetricV2 = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.TraceTimeMetricV2, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.TraceTimeMetricV2.displayName = "proto.webcast.im.TraceTimeMetricV2"), proto.webcast.im.LiveEcomGeneralMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.LiveEcomGeneralMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.LiveEcomGeneralMessage.displayName = "proto.webcast.im.LiveEcomGeneralMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TraceTimeMetricV2.prototype.toObject = function (e) {
            return proto.webcast.im.TraceTimeMetricV2.toObject(e, this)
        }, proto.webcast.im.TraceTimeMetricV2.toObject = function (e, t) {
            var o = {
                opTimestamp: r.Message.getFieldWithDefault(t, 1, "0"),
                producerDuration: r.Message.getFieldWithDefault(t, 2, "0"),
                consumerDuration: r.Message.getFieldWithDefault(t, 3, "0"),
                msgSendTimestamp: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.TraceTimeMetricV2.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.TraceTimeMetricV2;
            return proto.webcast.im.TraceTimeMetricV2.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.TraceTimeMetricV2.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setOpTimestamp(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setProducerDuration(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setConsumerDuration(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setMsgSendTimestamp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.TraceTimeMetricV2.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.TraceTimeMetricV2.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.TraceTimeMetricV2.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getOpTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), o = e.getProducerDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), o = e.getConsumerDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), o = e.getMsgSendTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.TraceTimeMetricV2.prototype.getOpTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.TraceTimeMetricV2.prototype.setOpTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.TraceTimeMetricV2.prototype.getProducerDuration = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.TraceTimeMetricV2.prototype.setProducerDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.TraceTimeMetricV2.prototype.getConsumerDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.TraceTimeMetricV2.prototype.setConsumerDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.TraceTimeMetricV2.prototype.getMsgSendTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.TraceTimeMetricV2.prototype.setMsgSendTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LiveEcomGeneralMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LiveEcomGeneralMessage.toObject(e, this)
        }, proto.webcast.im.LiveEcomGeneralMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                contentType: r.Message.getFieldWithDefault(t, 2, ""),
                contentFormat: r.Message.getFieldWithDefault(t, 3, ""),
                logicClock: r.Message.getFieldWithDefault(t, 4, "0"),
                traceTimeMetric: (o = t.getTraceTimeMetric()) && proto.webcast.im.TraceTimeMetricV2.toObject(e, o),
                data: t.getData_asB64()
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.LiveEcomGeneralMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LiveEcomGeneralMessage;
            return proto.webcast.im.LiveEcomGeneralMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LiveEcomGeneralMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setContentType(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setContentFormat(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setLogicClock(o);
                        break;
                    case 5:
                        o = new proto.webcast.im.TraceTimeMetricV2;
                        t.readMessage(o, proto.webcast.im.TraceTimeMetricV2.deserializeBinaryFromReader), e.setTraceTimeMetric(o);
                        break;
                    case 6:
                        o = t.readBytes();
                        e.setData(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LiveEcomGeneralMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LiveEcomGeneralMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getContentType()).length > 0 && t.writeString(2, o), (o = e.getContentFormat()).length > 0 && t.writeString(3, o), o = e.getLogicClock(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), null != (o = e.getTraceTimeMetric()) && t.writeMessage(5, o, proto.webcast.im.TraceTimeMetricV2.serializeBinaryToWriter), (o = e.getData_asU8()).length > 0 && t.writeBytes(6, o)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getContentType = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.setContentType = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getContentFormat = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.setContentFormat = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getLogicClock = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.setLogicClock = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getTraceTimeMetric = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.TraceTimeMetricV2, 5)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.setTraceTimeMetric = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.clearTraceTimeMetric = function () {
            return this.setTraceTimeMetric(undefined)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.hasTraceTimeMetric = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getData = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getData_asB64 = function () {
            return r.Message.bytesAsB64(this.getData())
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.getData_asU8 = function () {
            return r.Message.bytesAsU8(this.getData())
        }, proto.webcast.im.LiveEcomGeneralMessage.prototype.setData = function (e) {
            return r.Message.setProto3BytesField(this, 6, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 81768: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CouponActivityInfoMessage", null, i), s.exportSymbol("proto.webcast.im.CouponMetaInfoMessage", null, i), s.exportSymbol("proto.webcast.im.LiveEcomMessage", null, i), s.exportSymbol("proto.webcast.im.LiveEcomMessage.CouponType", null, i), s.exportSymbol("proto.webcast.im.LiveEcomMessage.MsgType", null, i), proto.webcast.im.CouponActivityInfoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.CouponActivityInfoMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CouponActivityInfoMessage.displayName = "proto.webcast.im.CouponActivityInfoMessage"), proto.webcast.im.CouponMetaInfoMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CouponMetaInfoMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.CouponMetaInfoMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CouponMetaInfoMessage.displayName = "proto.webcast.im.CouponMetaInfoMessage"), proto.webcast.im.LiveEcomMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.LiveEcomMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.LiveEcomMessage.displayName = "proto.webcast.im.LiveEcomMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CouponActivityInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CouponActivityInfoMessage.toObject(e, this)
        }, proto.webcast.im.CouponActivityInfoMessage.toObject = function (e, t) {
            var o = {
                activityType: r.Message.getFieldWithDefault(t, 1, "0"),
                beforeText: r.Message.getFieldWithDefault(t, 2, ""),
                beforeButton: r.Message.getFieldWithDefault(t, 3, ""),
                afterText: r.Message.getFieldWithDefault(t, 4, ""),
                afterButton: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.webcast.im.CouponActivityInfoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CouponActivityInfoMessage;
            return proto.webcast.im.CouponActivityInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CouponActivityInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setActivityType(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setBeforeText(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBeforeButton(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAfterText(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setAfterButton(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CouponActivityInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CouponActivityInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getActivityType(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), (o = e.getBeforeText()).length > 0 && t.writeString(2, o), (o = e.getBeforeButton()).length > 0 && t.writeString(3, o), (o = e.getAfterText()).length > 0 && t.writeString(4, o), (o = e.getAfterButton()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.getActivityType = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.setActivityType = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.getBeforeText = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.setBeforeText = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.getBeforeButton = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.setBeforeButton = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.getAfterText = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.setAfterText = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.getAfterButton = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.CouponActivityInfoMessage.prototype.setAfterButton = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.CouponMetaInfoMessage.repeatedFields_ = [40], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CouponMetaInfoMessage.prototype.toObject = function (e) {
            return proto.webcast.im.CouponMetaInfoMessage.toObject(e, this)
        }, proto.webcast.im.CouponMetaInfoMessage.toObject = function (e, t) {
            var o, s = {
                couponMetaId: r.Message.getFieldWithDefault(t, 1, ""),
                startTime: r.Message.getFieldWithDefault(t, 2, ""),
                expireTime: r.Message.getFieldWithDefault(t, 3, ""),
                periodType: r.Message.getFieldWithDefault(t, 4, "0"),
                validPeriod: r.Message.getFieldWithDefault(t, 5, "0"),
                startApplyTime: r.Message.getFieldWithDefault(t, 6, ""),
                endApplyTime: r.Message.getFieldWithDefault(t, 7, ""),
                couponName: r.Message.getFieldWithDefault(t, 8, ""),
                url: r.Message.getFieldWithDefault(t, 9, ""),
                threshold: r.Message.getFieldWithDefault(t, 10, "0"),
                credit: r.Message.getFieldWithDefault(t, 11, "0"),
                maxApplyTimes: r.Message.getFieldWithDefault(t, 12, "0"),
                type: r.Message.getFieldWithDefault(t, 13, "0"),
                typeDetail: r.Message.getFieldWithDefault(t, 14, ""),
                discount: r.Message.getFloatingPointFieldWithDefault(t, 15, 0),
                shopId: r.Message.getFieldWithDefault(t, 16, ""),
                payType: r.Message.getFieldWithDefault(t, 17, "0"),
                maxDiscountLimit: r.Message.getFieldWithDefault(t, 18, "0"),
                shopName: r.Message.getFieldWithDefault(t, 19, ""),
                typeString: r.Message.getFieldWithDefault(t, 20, ""),
                whatCoupon: r.Message.getFieldWithDefault(t, 21, ""),
                couponString: r.Message.getFieldWithDefault(t, 22, ""),
                channelId: r.Message.getFieldWithDefault(t, 23, "0"),
                leftAmount: r.Message.getFieldWithDefault(t, 24, "0"),
                hasApplied: r.Message.getFieldWithDefault(t, 25, "0"),
                status: r.Message.getFieldWithDefault(t, 26, "0"),
                shopLogo: r.Message.getFieldWithDefault(t, 27, ""),
                isShow: r.Message.getFieldWithDefault(t, 28, "0"),
                totalAmount: r.Message.getFieldWithDefault(t, 29, "0"),
                liveCouponStatus: r.Message.getFieldWithDefault(t, 30, 0),
                couponSource: r.Message.getFieldWithDefault(t, 31, 0),
                userApplyTimes: r.Message.getFieldWithDefault(t, 32, "0"),
                canContinueApply: r.Message.getBooleanFieldWithDefault(t, 33, !1),
                couponStatus: r.Message.getBooleanFieldWithDefault(t, 34, !1),
                couponReset: r.Message.getBooleanFieldWithDefault(t, 35, !1),
                startTimeTimestamp: r.Message.getFieldWithDefault(t, 36, "0"),
                expireTimeTimestamp: r.Message.getFieldWithDefault(t, 37, "0"),
                avatar: r.Message.getFieldWithDefault(t, 38, ""),
                kolUid: r.Message.getFieldWithDefault(t, 39, "0"),
                productIdsList: null == (o = r.Message.getRepeatedField(t, 40)) ? undefined : o,
                platformSubType: r.Message.getFieldWithDefault(t, 41, "0"),
                hasAvailableGoods: r.Message.getBooleanFieldWithDefault(t, 42, !1),
                typeTitle: r.Message.getFieldWithDefault(t, 43, ""),
                kolUserTag: r.Message.getFieldWithDefault(t, 45, "0"),
                typeIcon: r.Message.getFieldWithDefault(t, 46, ""),
                typeIconWidth: r.Message.getFieldWithDefault(t, 47, "0"),
                typeIconHeight: r.Message.getFieldWithDefault(t, 48, "0"),
                couponCategory: r.Message.getFieldWithDefault(t, 49, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CouponMetaInfoMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CouponMetaInfoMessage;
            return proto.webcast.im.CouponMetaInfoMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CouponMetaInfoMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setCouponMetaId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setStartTime(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setExpireTime(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setPeriodType(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setValidPeriod(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setStartApplyTime(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setEndApplyTime(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setCouponName(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setUrl(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setThreshold(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setCredit(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setMaxApplyTimes(o);
                        break;
                    case 13:
                        o = t.readInt64String();
                        e.setType(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setTypeDetail(o);
                        break;
                    case 15:
                        o = t.readDouble();
                        e.setDiscount(o);
                        break;
                    case 16:
                        o = t.readString();
                        e.setShopId(o);
                        break;
                    case 17:
                        o = t.readInt64String();
                        e.setPayType(o);
                        break;
                    case 18:
                        o = t.readInt64String();
                        e.setMaxDiscountLimit(o);
                        break;
                    case 19:
                        o = t.readString();
                        e.setShopName(o);
                        break;
                    case 20:
                        o = t.readString();
                        e.setTypeString(o);
                        break;
                    case 21:
                        o = t.readString();
                        e.setWhatCoupon(o);
                        break;
                    case 22:
                        o = t.readString();
                        e.setCouponString(o);
                        break;
                    case 23:
                        o = t.readInt64String();
                        e.setChannelId(o);
                        break;
                    case 24:
                        o = t.readInt64String();
                        e.setLeftAmount(o);
                        break;
                    case 25:
                        o = t.readInt64String();
                        e.setHasApplied(o);
                        break;
                    case 26:
                        o = t.readInt64String();
                        e.setStatus(o);
                        break;
                    case 27:
                        o = t.readString();
                        e.setShopLogo(o);
                        break;
                    case 28:
                        o = t.readInt64String();
                        e.setIsShow(o);
                        break;
                    case 29:
                        o = t.readInt64String();
                        e.setTotalAmount(o);
                        break;
                    case 30:
                        o = t.readInt32();
                        e.setLiveCouponStatus(o);
                        break;
                    case 31:
                        o = t.readInt32();
                        e.setCouponSource(o);
                        break;
                    case 32:
                        o = t.readInt64String();
                        e.setUserApplyTimes(o);
                        break;
                    case 33:
                        o = t.readBool();
                        e.setCanContinueApply(o);
                        break;
                    case 34:
                        o = t.readBool();
                        e.setCouponStatus(o);
                        break;
                    case 35:
                        o = t.readBool();
                        e.setCouponReset(o);
                        break;
                    case 36:
                        o = t.readInt64String();
                        e.setStartTimeTimestamp(o);
                        break;
                    case 37:
                        o = t.readInt64String();
                        e.setExpireTimeTimestamp(o);
                        break;
                    case 38:
                        o = t.readString();
                        e.setAvatar(o);
                        break;
                    case 39:
                        o = t.readInt64String();
                        e.setKolUid(o);
                        break;
                    case 40:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < r.length; s++) e.addProductIds(r[s]);
                        break;
                    case 41:
                        o = t.readInt64String();
                        e.setPlatformSubType(o);
                        break;
                    case 42:
                        o = t.readBool();
                        e.setHasAvailableGoods(o);
                        break;
                    case 43:
                        o = t.readString();
                        e.setTypeTitle(o);
                        break;
                    case 45:
                        o = t.readInt64String();
                        e.setKolUserTag(o);
                        break;
                    case 46:
                        o = t.readString();
                        e.setTypeIcon(o);
                        break;
                    case 47:
                        o = t.readInt64String();
                        e.setTypeIconWidth(o);
                        break;
                    case 48:
                        o = t.readInt64String();
                        e.setTypeIconHeight(o);
                        break;
                    case 49:
                        o = t.readString();
                        e.setCouponCategory(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CouponMetaInfoMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CouponMetaInfoMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            (o = e.getCouponMetaId()).length > 0 && t.writeString(1, o), (o = e.getStartTime()).length > 0 && t.writeString(2, o), (o = e.getExpireTime()).length > 0 && t.writeString(3, o), o = e.getPeriodType(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), o = e.getValidPeriod(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getStartApplyTime()).length > 0 && t.writeString(6, o), (o = e.getEndApplyTime()).length > 0 && t.writeString(7, o), (o = e.getCouponName()).length > 0 && t.writeString(8, o), (o = e.getUrl()).length > 0 && t.writeString(9, o), o = e.getThreshold(), 0 !== parseInt(o, 10) && t.writeInt64String(10, o), o = e.getCredit(), 0 !== parseInt(o, 10) && t.writeInt64String(11, o), o = e.getMaxApplyTimes(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), o = e.getType(), 0 !== parseInt(o, 10) && t.writeInt64String(13, o), (o = e.getTypeDetail()).length > 0 && t.writeString(14, o), 0 !== (o = e.getDiscount()) && t.writeDouble(15, o), (o = e.getShopId()).length > 0 && t.writeString(16, o), o = e.getPayType(), 0 !== parseInt(o, 10) && t.writeInt64String(17, o), o = e.getMaxDiscountLimit(), 0 !== parseInt(o, 10) && t.writeInt64String(18, o), (o = e.getShopName()).length > 0 && t.writeString(19, o), (o = e.getTypeString()).length > 0 && t.writeString(20, o), (o = e.getWhatCoupon()).length > 0 && t.writeString(21, o), (o = e.getCouponString()).length > 0 && t.writeString(22, o), o = e.getChannelId(), 0 !== parseInt(o, 10) && t.writeInt64String(23, o), o = e.getLeftAmount(), 0 !== parseInt(o, 10) && t.writeInt64String(24, o), o = e.getHasApplied(), 0 !== parseInt(o, 10) && t.writeInt64String(25, o), o = e.getStatus(), 0 !== parseInt(o, 10) && t.writeInt64String(26, o), (o = e.getShopLogo()).length > 0 && t.writeString(27, o), o = e.getIsShow(), 0 !== parseInt(o, 10) && t.writeInt64String(28, o), o = e.getTotalAmount(), 0 !== parseInt(o, 10) && t.writeInt64String(29, o), 0 !== (o = e.getLiveCouponStatus()) && t.writeInt32(30, o), 0 !== (o = e.getCouponSource()) && t.writeInt32(31, o), o = e.getUserApplyTimes(), 0 !== parseInt(o, 10) && t.writeInt64String(32, o), (o = e.getCanContinueApply()) && t.writeBool(33, o), (o = e.getCouponStatus()) && t.writeBool(34, o), (o = e.getCouponReset()) && t.writeBool(35, o), o = e.getStartTimeTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(36, o), o = e.getExpireTimeTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(37, o), (o = e.getAvatar()).length > 0 && t.writeString(38, o), o = e.getKolUid(), 0 !== parseInt(o, 10) && t.writeInt64String(39, o), (o = e.getProductIdsList()).length > 0 && t.writePackedInt64String(40, o), o = e.getPlatformSubType(), 0 !== parseInt(o, 10) && t.writeInt64String(41, o), (o = e.getHasAvailableGoods()) && t.writeBool(42, o), (o = e.getTypeTitle()).length > 0 && t.writeString(43, o), o = e.getKolUserTag(), 0 !== parseInt(o, 10) && t.writeInt64String(45, o), (o = e.getTypeIcon()).length > 0 && t.writeString(46, o), o = e.getTypeIconWidth(), 0 !== parseInt(o, 10) && t.writeInt64String(47, o), o = e.getTypeIconHeight(), 0 !== parseInt(o, 10) && t.writeInt64String(48, o), (o = e.getCouponCategory()).length > 0 && t.writeString(49, o)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponMetaId = function () {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponMetaId = function (e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getStartTime = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setStartTime = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getExpireTime = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setExpireTime = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getPeriodType = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setPeriodType = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getValidPeriod = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setValidPeriod = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getStartApplyTime = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setStartApplyTime = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getEndApplyTime = function () {
            return r.Message.getFieldWithDefault(this, 7, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setEndApplyTime = function (e) {
            return r.Message.setProto3StringField(this, 7, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponName = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponName = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getUrl = function () {
            return r.Message.getFieldWithDefault(this, 9, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setUrl = function (e) {
            return r.Message.setProto3StringField(this, 9, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getThreshold = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setThreshold = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getCredit = function () {
            return r.Message.getFieldWithDefault(this, 11, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setCredit = function (e) {
            return r.Message.setProto3StringIntField(this, 11, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getMaxApplyTimes = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setMaxApplyTimes = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 13, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setType = function (e) {
            return r.Message.setProto3StringIntField(this, 13, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeDetail = function () {
            return r.Message.getFieldWithDefault(this, 14, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeDetail = function (e) {
            return r.Message.setProto3StringField(this, 14, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getDiscount = function () {
            return r.Message.getFloatingPointFieldWithDefault(this, 15, 0)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setDiscount = function (e) {
            return r.Message.setProto3FloatField(this, 15, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getShopId = function () {
            return r.Message.getFieldWithDefault(this, 16, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setShopId = function (e) {
            return r.Message.setProto3StringField(this, 16, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getPayType = function () {
            return r.Message.getFieldWithDefault(this, 17, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setPayType = function (e) {
            return r.Message.setProto3StringIntField(this, 17, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getMaxDiscountLimit = function () {
            return r.Message.getFieldWithDefault(this, 18, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setMaxDiscountLimit = function (e) {
            return r.Message.setProto3StringIntField(this, 18, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getShopName = function () {
            return r.Message.getFieldWithDefault(this, 19, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setShopName = function (e) {
            return r.Message.setProto3StringField(this, 19, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeString = function () {
            return r.Message.getFieldWithDefault(this, 20, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeString = function (e) {
            return r.Message.setProto3StringField(this, 20, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getWhatCoupon = function () {
            return r.Message.getFieldWithDefault(this, 21, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setWhatCoupon = function (e) {
            return r.Message.setProto3StringField(this, 21, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponString = function () {
            return r.Message.getFieldWithDefault(this, 22, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponString = function (e) {
            return r.Message.setProto3StringField(this, 22, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getChannelId = function () {
            return r.Message.getFieldWithDefault(this, 23, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setChannelId = function (e) {
            return r.Message.setProto3StringIntField(this, 23, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getLeftAmount = function () {
            return r.Message.getFieldWithDefault(this, 24, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setLeftAmount = function (e) {
            return r.Message.setProto3StringIntField(this, 24, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getHasApplied = function () {
            return r.Message.getFieldWithDefault(this, 25, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setHasApplied = function (e) {
            return r.Message.setProto3StringIntField(this, 25, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getStatus = function () {
            return r.Message.getFieldWithDefault(this, 26, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setStatus = function (e) {
            return r.Message.setProto3StringIntField(this, 26, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getShopLogo = function () {
            return r.Message.getFieldWithDefault(this, 27, "")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setShopLogo = function (e) {
            return r.Message.setProto3StringField(this, 27, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getIsShow = function () {
            return r.Message.getFieldWithDefault(this, 28, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setIsShow = function (e) {
            return r.Message.setProto3StringIntField(this, 28, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getTotalAmount = function () {
            return r.Message.getFieldWithDefault(this, 29, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setTotalAmount = function (e) {
            return r.Message.setProto3StringIntField(this, 29, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getLiveCouponStatus = function () {
            return r.Message.getFieldWithDefault(this, 30, 0)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setLiveCouponStatus = function (e) {
            return r.Message.setProto3IntField(this, 30, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponSource = function () {
            return r.Message.getFieldWithDefault(this, 31, 0)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponSource = function (e) {
            return r.Message.setProto3IntField(this, 31, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getUserApplyTimes = function () {
            return r.Message.getFieldWithDefault(this, 32, "0")
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.setUserApplyTimes = function (e) {
            return r.Message.setProto3StringIntField(this, 32, e)
        }, proto.webcast.im.CouponMetaInfoMessage.prototype.getCanContinueApply = function () {
            return r.Message.getBooleanFieldWithDefault(this, 33, !1)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setCanContinueApply = function (e) {
            return r.Message.setProto3BooleanField(this, 33, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponStatus = function () {
            return r.Message.getBooleanFieldWithDefault(this, 34, !1)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponStatus = function (e) {
            return r.Message.setProto3BooleanField(this, 34, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponReset = function () {
            return r.Message.getBooleanFieldWithDefault(this, 35, !1)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponReset = function (e) {
            return r.Message.setProto3BooleanField(this, 35, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getStartTimeTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 36, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setStartTimeTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 36, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getExpireTimeTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 37, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setExpireTimeTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 37, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getAvatar = function () {
            return r.Message.getFieldWithDefault(this, 38, "")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setAvatar = function (e) {
            return r.Message.setProto3StringField(this, 38, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getKolUid = function () {
            return r.Message.getFieldWithDefault(this, 39, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setKolUid = function (e) {
            return r.Message.setProto3StringIntField(this, 39, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getProductIdsList = function () {
            return r.Message.getRepeatedField(this, 40)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setProductIdsList = function (e) {
            return r.Message.setField(this, 40, e || [])
        },proto.webcast.im.CouponMetaInfoMessage.prototype.addProductIds = function (e, t) {
            return r.Message.addToRepeatedField(this, 40, e, t)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.clearProductIdsList = function () {
            return this.setProductIdsList([])
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getPlatformSubType = function () {
            return r.Message.getFieldWithDefault(this, 41, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setPlatformSubType = function (e) {
            return r.Message.setProto3StringIntField(this, 41, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getHasAvailableGoods = function () {
            return r.Message.getBooleanFieldWithDefault(this, 42, !1)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setHasAvailableGoods = function (e) {
            return r.Message.setProto3BooleanField(this, 42, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeTitle = function () {
            return r.Message.getFieldWithDefault(this, 43, "")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeTitle = function (e) {
            return r.Message.setProto3StringField(this, 43, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getKolUserTag = function () {
            return r.Message.getFieldWithDefault(this, 45, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setKolUserTag = function (e) {
            return r.Message.setProto3StringIntField(this, 45, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeIcon = function () {
            return r.Message.getFieldWithDefault(this, 46, "")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeIcon = function (e) {
            return r.Message.setProto3StringField(this, 46, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeIconWidth = function () {
            return r.Message.getFieldWithDefault(this, 47, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeIconWidth = function (e) {
            return r.Message.setProto3StringIntField(this, 47, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getTypeIconHeight = function () {
            return r.Message.getFieldWithDefault(this, 48, "0")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setTypeIconHeight = function (e) {
            return r.Message.setProto3StringIntField(this, 48, e)
        },proto.webcast.im.CouponMetaInfoMessage.prototype.getCouponCategory = function () {
            return r.Message.getFieldWithDefault(this, 49, "")
        },proto.webcast.im.CouponMetaInfoMessage.prototype.setCouponCategory = function (e) {
            return r.Message.setProto3StringField(this, 49, e)
        },r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LiveEcomMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LiveEcomMessage.toObject(e, this)
        }, proto.webcast.im.LiveEcomMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                msgType: r.Message.getFieldWithDefault(t, 2, 0),
                nickName: r.Message.getFieldWithDefault(t, 3, ""),
                purchaseCnt: r.Message.getFieldWithDefault(t, 4, "0"),
                text: r.Message.getFieldWithDefault(t, 5, ""),
                icon: r.Message.getFieldWithDefault(t, 6, ""),
                metaId: r.Message.getFieldWithDefault(t, 7, "0"),
                serverTime: r.Message.getFieldWithDefault(t, 8, "0"),
                countdown: r.Message.getFieldWithDefault(t, 9, "0"),
                activityJsonStr: r.Message.getFieldWithDefault(t, 10, ""),
                couponType: r.Message.getFieldWithDefault(t, 11, 0),
                activityInfo: (o = t.getActivityInfo()) && proto.webcast.im.CouponActivityInfoMessage.toObject(e, o),
                couponMeta: (o = t.getCouponMeta()) && proto.webcast.im.CouponMetaInfoMessage.toObject(e, o),
                metaIdStr: r.Message.getFieldWithDefault(t, 14, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }),proto.webcast.im.LiveEcomMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LiveEcomMessage;
            return proto.webcast.im.LiveEcomMessage.deserializeBinaryFromReader(o, t)
        },proto.webcast.im.LiveEcomMessage.deserializeBinaryFromReader = function (e, t) {
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
                        o = t.readString();
                        e.setNickName(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setPurchaseCnt(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setText(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setIcon(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setMetaId(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setServerTime(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setCountdown(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setActivityJsonStr(o);
                        break;
                    case 11:
                        o = t.readEnum();
                        e.setCouponType(o);
                        break;
                    case 12:
                        o = new proto.webcast.im.CouponActivityInfoMessage;
                        t.readMessage(o, proto.webcast.im.CouponActivityInfoMessage.deserializeBinaryFromReader), e.setActivityInfo(o);
                        break;
                    case 13:
                        o = new proto.webcast.im.CouponMetaInfoMessage;
                        t.readMessage(o, proto.webcast.im.CouponMetaInfoMessage.deserializeBinaryFromReader), e.setCouponMeta(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setMetaIdStr(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.webcast.im.LiveEcomMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LiveEcomMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.webcast.im.LiveEcomMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), 0 !== (o = e.getMsgType()) && t.writeEnum(2, o), (o = e.getNickName()).length > 0 && t.writeString(3, o), o = e.getPurchaseCnt(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o), (o = e.getText()).length > 0 && t.writeString(5, o), (o = e.getIcon()).length > 0 && t.writeString(6, o), o = e.getMetaId(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), o = e.getServerTime(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), o = e.getCountdown(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o), (o = e.getActivityJsonStr()).length > 0 && t.writeString(10, o), 0 !== (o = e.getCouponType()) && t.writeEnum(11, o), null != (o = e.getActivityInfo()) && t.writeMessage(12, o, proto.webcast.im.CouponActivityInfoMessage.serializeBinaryToWriter), null != (o = e.getCouponMeta()) && t.writeMessage(13, o, proto.webcast.im.CouponMetaInfoMessage.serializeBinaryToWriter), (o = e.getMetaIdStr()).length > 0 && t.writeString(14, o)
        },proto.webcast.im.LiveEcomMessage.MsgType = {
            BARRAGE_BUY: 0,
            COUPON_START: 1,
            COUPON_END: 2,
            COUPON_ZERO_AMOUNT: 3
        },proto.webcast.im.LiveEcomMessage.CouponType = {
            COUPON: 0,
            COUPON_COMBO: 1
        },proto.webcast.im.LiveEcomMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        },proto.webcast.im.LiveEcomMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        },proto.webcast.im.LiveEcomMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        },proto.webcast.im.LiveEcomMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        },proto.webcast.im.LiveEcomMessage.prototype.getMsgType = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        },proto.webcast.im.LiveEcomMessage.prototype.setMsgType = function (e) {
            return r.Message.setProto3EnumField(this, 2, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getNickName = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        },proto.webcast.im.LiveEcomMessage.prototype.setNickName = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getPurchaseCnt = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        },proto.webcast.im.LiveEcomMessage.prototype.setPurchaseCnt = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        },proto.webcast.im.LiveEcomMessage.prototype.setText = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getIcon = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        },proto.webcast.im.LiveEcomMessage.prototype.setIcon = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getMetaId = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.LiveEcomMessage.prototype.setMetaId = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getServerTime = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.im.LiveEcomMessage.prototype.setServerTime = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getCountdown = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        },proto.webcast.im.LiveEcomMessage.prototype.setCountdown = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getActivityJsonStr = function () {
            return r.Message.getFieldWithDefault(this, 10, "")
        },proto.webcast.im.LiveEcomMessage.prototype.setActivityJsonStr = function (e) {
            return r.Message.setProto3StringField(this, 10, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getCouponType = function () {
            return r.Message.getFieldWithDefault(this, 11, 0)
        },proto.webcast.im.LiveEcomMessage.prototype.setCouponType = function (e) {
            return r.Message.setProto3EnumField(this, 11, e)
        },proto.webcast.im.LiveEcomMessage.prototype.getActivityInfo = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CouponActivityInfoMessage, 12)
        },proto.webcast.im.LiveEcomMessage.prototype.setActivityInfo = function (e) {
            return r.Message.setWrapperField(this, 12, e)
        },proto.webcast.im.LiveEcomMessage.prototype.clearActivityInfo = function () {
            return this.setActivityInfo(undefined)
        },proto.webcast.im.LiveEcomMessage.prototype.hasActivityInfo = function () {
            return null != r.Message.getField(this, 12)
        },proto.webcast.im.LiveEcomMessage.prototype.getCouponMeta = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.CouponMetaInfoMessage, 13)
        },proto.webcast.im.LiveEcomMessage.prototype.setCouponMeta = function (e) {
            return r.Message.setWrapperField(this, 13, e)
        },proto.webcast.im.LiveEcomMessage.prototype.clearCouponMeta = function () {
            return this.setCouponMeta(undefined)
        },proto.webcast.im.LiveEcomMessage.prototype.hasCouponMeta = function () {
            return null != r.Message.getField(this, 13)
        },proto.webcast.im.LiveEcomMessage.prototype.getMetaIdStr = function () {
            return r.Message.getFieldWithDefault(this, 14, "")
        },proto.webcast.im.LiveEcomMessage.prototype.setMetaIdStr = function (e) {
            return r.Message.setProto3StringField(this, 14, e)
        },s.object.extend(t, proto.webcast.im)
    }, 41746: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.CategoryInfo", null, i), s.exportSymbol("proto.webcast.im.ProductChangeMessage", null, i), s.exportSymbol("proto.webcast.im.ProductInfo", null, i), proto.webcast.im.ProductChangeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.ProductChangeMessage.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.ProductChangeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ProductChangeMessage.displayName = "proto.webcast.im.ProductChangeMessage"), proto.webcast.im.ProductInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.ProductInfo.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.ProductInfo, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.ProductInfo.displayName = "proto.webcast.im.ProductInfo"), proto.webcast.im.CategoryInfo = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.CategoryInfo.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.CategoryInfo, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.CategoryInfo.displayName = "proto.webcast.im.CategoryInfo"), proto.webcast.im.ProductChangeMessage.repeatedFields_ = [4, 6, 7, 8], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProductChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.ProductChangeMessage.toObject(e, this)
        }, proto.webcast.im.ProductChangeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                updateTimestamp: r.Message.getFieldWithDefault(t, 2, "0"),
                updateToast: r.Message.getFieldWithDefault(t, 3, ""),
                updateProductInfoList: r.Message.toObjectList(t.getUpdateProductInfoList(), proto.webcast.im.ProductInfo.toObject, e),
                total: r.Message.getFieldWithDefault(t, 5, "0"),
                targetUidList: null == (o = r.Message.getRepeatedField(t, 6)) ? undefined : o,
                secTargetUidList: null == (o = r.Message.getRepeatedField(t, 7)) ? undefined : o,
                updateCategoryInfoList: r.Message.toObjectList(t.getUpdateCategoryInfoList(), proto.webcast.im.CategoryInfo.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ProductChangeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ProductChangeMessage;
            return proto.webcast.im.ProductChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ProductChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setUpdateTimestamp(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setUpdateToast(o);
                        break;
                    case 4:
                        o = new proto.webcast.im.ProductInfo;
                        t.readMessage(o, proto.webcast.im.ProductInfo.deserializeBinaryFromReader), e.addUpdateProductInfo(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setTotal(o);
                        break;
                    case 6:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < r.length; s++) e.addTargetUid(r[s]);
                        break;
                    case 7:
                        o = t.readString();
                        e.addSecTargetUid(o);
                        break;
                    case 8:
                        o = new proto.webcast.im.CategoryInfo;
                        t.readMessage(o, proto.webcast.im.CategoryInfo.deserializeBinaryFromReader), e.addUpdateCategoryInfo(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ProductChangeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ProductChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ProductChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getUpdateTimestamp(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getUpdateToast()).length > 0 && t.writeString(3, o), (o = e.getUpdateProductInfoList()).length > 0 && t.writeRepeatedMessage(4, o, proto.webcast.im.ProductInfo.serializeBinaryToWriter), o = e.getTotal(), 0 !== parseInt(o, 10) && t.writeInt64String(5, o), (o = e.getTargetUidList()).length > 0 && t.writePackedInt64String(6, o), (o = e.getSecTargetUidList()).length > 0 && t.writeRepeatedString(7, o), (o = e.getUpdateCategoryInfoList()).length > 0 && t.writeRepeatedMessage(8, o, proto.webcast.im.CategoryInfo.serializeBinaryToWriter)
        }, proto.webcast.im.ProductChangeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.ProductChangeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.ProductChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.ProductChangeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.ProductChangeMessage.prototype.getUpdateTimestamp = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.ProductChangeMessage.prototype.setUpdateTimestamp = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.ProductChangeMessage.prototype.getUpdateToast = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.ProductChangeMessage.prototype.setUpdateToast = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.ProductChangeMessage.prototype.getUpdateProductInfoList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.ProductInfo, 4)
        }, proto.webcast.im.ProductChangeMessage.prototype.setUpdateProductInfoList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.webcast.im.ProductChangeMessage.prototype.addUpdateProductInfo = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.ProductInfo, t)
        }, proto.webcast.im.ProductChangeMessage.prototype.clearUpdateProductInfoList = function () {
            return this.setUpdateProductInfoList([])
        }, proto.webcast.im.ProductChangeMessage.prototype.getTotal = function () {
            return r.Message.getFieldWithDefault(this, 5, "0")
        }, proto.webcast.im.ProductChangeMessage.prototype.setTotal = function (e) {
            return r.Message.setProto3StringIntField(this, 5, e)
        }, proto.webcast.im.ProductChangeMessage.prototype.getTargetUidList = function () {
            return r.Message.getRepeatedField(this, 6)
        }, proto.webcast.im.ProductChangeMessage.prototype.setTargetUidList = function (e) {
            return r.Message.setField(this, 6, e || [])
        }, proto.webcast.im.ProductChangeMessage.prototype.addTargetUid = function (e, t) {
            return r.Message.addToRepeatedField(this, 6, e, t)
        }, proto.webcast.im.ProductChangeMessage.prototype.clearTargetUidList = function () {
            return this.setTargetUidList([])
        }, proto.webcast.im.ProductChangeMessage.prototype.getSecTargetUidList = function () {
            return r.Message.getRepeatedField(this, 7)
        }, proto.webcast.im.ProductChangeMessage.prototype.setSecTargetUidList = function (e) {
            return r.Message.setField(this, 7, e || [])
        }, proto.webcast.im.ProductChangeMessage.prototype.addSecTargetUid = function (e, t) {
            return r.Message.addToRepeatedField(this, 7, e, t)
        }, proto.webcast.im.ProductChangeMessage.prototype.clearSecTargetUidList = function () {
            return this.setSecTargetUidList([])
        }, proto.webcast.im.ProductChangeMessage.prototype.getUpdateCategoryInfoList = function () {
            return r.Message.getRepeatedWrapperField(this, proto.webcast.im.CategoryInfo, 8)
        }, proto.webcast.im.ProductChangeMessage.prototype.setUpdateCategoryInfoList = function (e) {
            return r.Message.setRepeatedWrapperField(this, 8, e)
        }, proto.webcast.im.ProductChangeMessage.prototype.addUpdateCategoryInfo = function (e, t) {
            return r.Message.addToRepeatedWrapperField(this, 8, e, proto.webcast.im.CategoryInfo, t)
        }, proto.webcast.im.ProductChangeMessage.prototype.clearUpdateCategoryInfoList = function () {
            return this.setUpdateCategoryInfoList([])
        }, proto.webcast.im.ProductInfo.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProductInfo.prototype.toObject = function (e) {
            return proto.webcast.im.ProductInfo.toObject(e, this)
        }, proto.webcast.im.ProductInfo.toObject = function (e, t) {
            var o, s = {
                promotionId: r.Message.getFieldWithDefault(t, 1, "0"),
                index: r.Message.getFieldWithDefault(t, 2, 0),
                targetFlashUidsList: null == (o = r.Message.getRepeatedField(t, 3)) ? undefined : o,
                explainType: r.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.ProductInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.ProductInfo;
            return proto.webcast.im.ProductInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.ProductInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setPromotionId(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setIndex(o);
                        break;
                    case 3:
                        for (var r = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], s = 0; s < r.length; s++) e.addTargetFlashUids(r[s]);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setExplainType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.ProductInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.ProductInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.ProductInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getPromotionId(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), 0 !== (o = e.getIndex()) && t.writeInt32(2, o), (o = e.getTargetFlashUidsList()).length > 0 && t.writePackedInt64String(3, o), o = e.getExplainType(), 0 !== parseInt(o, 10) && t.writeInt64String(4, o)
        }, proto.webcast.im.ProductInfo.prototype.getPromotionId = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.ProductInfo.prototype.setPromotionId = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.ProductInfo.prototype.getIndex = function () {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.webcast.im.ProductInfo.prototype.setIndex = function (e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.webcast.im.ProductInfo.prototype.getTargetFlashUidsList = function () {
            return r.Message.getRepeatedField(this, 3)
        }, proto.webcast.im.ProductInfo.prototype.setTargetFlashUidsList = function (e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.webcast.im.ProductInfo.prototype.addTargetFlashUids = function (e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.webcast.im.ProductInfo.prototype.clearTargetFlashUidsList = function () {
            return this.setTargetFlashUidsList([])
        }, proto.webcast.im.ProductInfo.prototype.getExplainType = function () {
            return r.Message.getFieldWithDefault(this, 4, "0")
        }, proto.webcast.im.ProductInfo.prototype.setExplainType = function (e) {
            return r.Message.setProto3StringIntField(this, 4, e)
        }, proto.webcast.im.CategoryInfo.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CategoryInfo.prototype.toObject = function (e) {
            return proto.webcast.im.CategoryInfo.toObject(e, this)
        }, proto.webcast.im.CategoryInfo.toObject = function (e, t) {
            var o, s = {
                id: r.Message.getFieldWithDefault(t, 1, 0),
                name: r.Message.getFieldWithDefault(t, 2, ""),
                promotionIdsList: null == (o = r.Message.getRepeatedField(t, 3)) ? undefined : o,
                type: r.Message.getFieldWithDefault(t, 4, ""),
                uniqueIndex: r.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.CategoryInfo.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.CategoryInfo;
            return proto.webcast.im.CategoryInfo.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.CategoryInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt32();
                        e.setId(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setName(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.addPromotionIds(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setType(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setUniqueIndex(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.CategoryInfo.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.CategoryInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.CategoryInfo.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            0 !== (o = e.getId()) && t.writeInt32(1, o), (o = e.getName()).length > 0 && t.writeString(2, o), (o = e.getPromotionIdsList()).length > 0 && t.writeRepeatedString(3, o), (o = e.getType()).length > 0 && t.writeString(4, o), (o = e.getUniqueIndex()).length > 0 && t.writeString(5, o)
        }, proto.webcast.im.CategoryInfo.prototype.getId = function () {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.webcast.im.CategoryInfo.prototype.setId = function (e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.webcast.im.CategoryInfo.prototype.getName = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.CategoryInfo.prototype.setName = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.CategoryInfo.prototype.getPromotionIdsList = function () {
            return r.Message.getRepeatedField(this, 3)
        }, proto.webcast.im.CategoryInfo.prototype.setPromotionIdsList = function (e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.webcast.im.CategoryInfo.prototype.addPromotionIds = function (e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.webcast.im.CategoryInfo.prototype.clearPromotionIdsList = function () {
            return this.setPromotionIdsList([])
        }, proto.webcast.im.CategoryInfo.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.CategoryInfo.prototype.setType = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.CategoryInfo.prototype.getUniqueIndex = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.CategoryInfo.prototype.setUniqueIndex = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 26829: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.LiveStreamControlMessage", null, i), proto.webcast.im.LiveStreamControlMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.LiveStreamControlMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.LiveStreamControlMessage.displayName = "proto.webcast.im.LiveStreamControlMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LiveStreamControlMessage.prototype.toObject = function (e) {
            return proto.webcast.im.LiveStreamControlMessage.toObject(e, this)
        }, proto.webcast.im.LiveStreamControlMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                controlParams: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.LiveStreamControlMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.LiveStreamControlMessage;
            return proto.webcast.im.LiveStreamControlMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.LiveStreamControlMessage.deserializeBinaryFromReader = function (e, t) {
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
        }, proto.webcast.im.LiveStreamControlMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.LiveStreamControlMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.LiveStreamControlMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getControlParams()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.LiveStreamControlMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.LiveStreamControlMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.LiveStreamControlMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.LiveStreamControlMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.LiveStreamControlMessage.prototype.getControlParams = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.LiveStreamControlMessage.prototype.setControlParams = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 23206: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n), s.exportSymbol("proto.webcast.im.MatchHostChangeMessage", null, i), proto.webcast.im.MatchHostChangeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.MatchHostChangeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.MatchHostChangeMessage.displayName = "proto.webcast.im.MatchHostChangeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchHostChangeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MatchHostChangeMessage.toObject(e, this)
        }, proto.webcast.im.MatchHostChangeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                teamId: r.Message.getFieldWithDefault(t, 2, "0"),
                teamName: r.Message.getFieldWithDefault(t, 3, ""),
                schemaUrl: r.Message.getFieldWithDefault(t, 4, ""),
                teamIcon: (o = t.getTeamIcon()) && n.Image.toObject(e, o),
                teamBadge: (o = t.getTeamBadge()) && n.Image.toObject(e, o),
                teamBackground: (o = t.getTeamBackground()) && n.Image.toObject(e, o),
                systemMsg: r.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.MatchHostChangeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MatchHostChangeMessage;
            return proto.webcast.im.MatchHostChangeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MatchHostChangeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setTeamId(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTeamName(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setSchemaUrl(o);
                        break;
                    case 5:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setTeamIcon(o);
                        break;
                    case 6:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setTeamBadge(o);
                        break;
                    case 7:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setTeamBackground(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setSystemMsg(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MatchHostChangeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MatchHostChangeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MatchHostChangeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), o = e.getTeamId(), 0 !== parseInt(o, 10) && t.writeInt64String(2, o), (o = e.getTeamName()).length > 0 && t.writeString(3, o), (o = e.getSchemaUrl()).length > 0 && t.writeString(4, o), null != (o = e.getTeamIcon()) && t.writeMessage(5, o, n.Image.serializeBinaryToWriter), null != (o = e.getTeamBadge()) && t.writeMessage(6, o, n.Image.serializeBinaryToWriter), null != (o = e.getTeamBackground()) && t.writeMessage(7, o, n.Image.serializeBinaryToWriter), (o = e.getSystemMsg()).length > 0 && t.writeString(8, o)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getTeamId = function () {
            return r.Message.getFieldWithDefault(this, 2, "0")
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setTeamId = function (e) {
            return r.Message.setProto3StringIntField(this, 2, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getTeamName = function () {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setTeamName = function (e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getSchemaUrl = function () {
            return r.Message.getFieldWithDefault(this, 4, "")
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setSchemaUrl = function (e) {
            return r.Message.setProto3StringField(this, 4, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getTeamIcon = function () {
            return r.Message.getWrapperField(this, n.Image, 5)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setTeamIcon = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.clearTeamIcon = function () {
            return this.setTeamIcon(undefined)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.hasTeamIcon = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getTeamBadge = function () {
            return r.Message.getWrapperField(this, n.Image, 6)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setTeamBadge = function (e) {
            return r.Message.setWrapperField(this, 6, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.clearTeamBadge = function () {
            return this.setTeamBadge(undefined)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.hasTeamBadge = function () {
            return null != r.Message.getField(this, 6)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getTeamBackground = function () {
            return r.Message.getWrapperField(this, n.Image, 7)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setTeamBackground = function (e) {
            return r.Message.setWrapperField(this, 7, e)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.clearTeamBackground = function () {
            return this.setTeamBackground(undefined)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.hasTeamBackground = function () {
            return null != r.Message.getField(this, 7)
        }, proto.webcast.im.MatchHostChangeMessage.prototype.getSystemMsg = function () {
            return r.Message.getFieldWithDefault(this, 8, "")
        }, proto.webcast.im.MatchHostChangeMessage.prototype.setSystemMsg = function (e) {
            return r.Message.setProto3StringField(this, 8, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 13111: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.MediaRoomNoticeMessage", null, i), proto.webcast.im.MediaRoomNoticeMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.MediaRoomNoticeMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.MediaRoomNoticeMessage.displayName = "proto.webcast.im.MediaRoomNoticeMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MediaRoomNoticeMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MediaRoomNoticeMessage.toObject(e, this)
        }, proto.webcast.im.MediaRoomNoticeMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                intro: r.Message.getFieldWithDefault(t, 2, ""),
                duration: r.Message.getFieldWithDefault(t, 3, "0"),
                reviewPass: r.Message.getBooleanFieldWithDefault(t, 4, !1),
                reviewFailText: r.Message.getFieldWithDefault(t, 5, ""),
                noticeTitle: r.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.MediaRoomNoticeMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MediaRoomNoticeMessage;
            return proto.webcast.im.MediaRoomNoticeMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MediaRoomNoticeMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setIntro(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDuration(o);
                        break;
                    case 4:
                        o = t.readBool();
                        e.setReviewPass(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setReviewFailText(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setNoticeTitle(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MediaRoomNoticeMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MediaRoomNoticeMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getIntro()).length > 0 && t.writeString(2, o), o = e.getDuration(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), (o = e.getReviewPass()) && t.writeBool(4, o), (o = e.getReviewFailText()).length > 0 && t.writeString(5, o), (o = e.getNoticeTitle()).length > 0 && t.writeString(6, o)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.getIntro = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.setIntro = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.getDuration = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.setDuration = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.getReviewPass = function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.setReviewPass = function (e) {
            return r.Message.setProto3BooleanField(this, 4, e)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.getReviewFailText = function () {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.setReviewFailText = function (e) {
            return r.Message.setProto3StringField(this, 5, e)
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.getNoticeTitle = function () {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.webcast.im.MediaRoomNoticeMessage.prototype.setNoticeTitle = function (e) {
            return r.Message.setProto3StringField(this, 6, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 62226: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(50684);
        s.object.extend(proto, a), s.exportSymbol("proto.webcast.im.MediaLiveReplayVidMessage", null, i), proto.webcast.im.MediaLiveReplayVidMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.MediaLiveReplayVidMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.MediaLiveReplayVidMessage.displayName = "proto.webcast.im.MediaLiveReplayVidMessage"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MediaLiveReplayVidMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MediaLiveReplayVidMessage.toObject(e, this)
        }, proto.webcast.im.MediaLiveReplayVidMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && a.Common.toObject(e, o),
                vid: r.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.MediaLiveReplayVidMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MediaLiveReplayVidMessage;
            return proto.webcast.im.MediaLiveReplayVidMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MediaLiveReplayVidMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.Common;
                        t.readMessage(o, a.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setVid(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MediaLiveReplayVidMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MediaLiveReplayVidMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, a.Common.serializeBinaryToWriter), (o = e.getVid()).length > 0 && t.writeString(2, o)
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, a.Common, 1)
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.getVid = function () {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.webcast.im.MediaLiveReplayVidMessage.prototype.setVid = function (e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, s.object.extend(t, proto.webcast.im)
    }, 40786: function (e, t, o) {
        var r = o(47865), s = r, i = function () {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }.call(null), a = o(64925);
        s.object.extend(proto, a);
        var n = o(8411);
        s.object.extend(proto, n);
        var g = o(99222);
        s.object.extend(proto, g);
        var p = o(50684);
        s.object.extend(proto, p), s.exportSymbol("proto.webcast.im.MemberMessage", null, i), s.exportSymbol("proto.webcast.im.MemberMessage.EffectConfig", null, i), proto.webcast.im.MemberMessage = function (e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.webcast.im.MemberMessage, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.MemberMessage.displayName = "proto.webcast.im.MemberMessage"), proto.webcast.im.MemberMessage.EffectConfig = function (e) {
            r.Message.initialize(this, e, 0, -1, proto.webcast.im.MemberMessage.EffectConfig.repeatedFields_, null)
        }, s.inherits(proto.webcast.im.MemberMessage.EffectConfig, r.Message), s.DEBUG && !COMPILED && (proto.webcast.im.MemberMessage.EffectConfig.displayName = "proto.webcast.im.MemberMessage.EffectConfig"), r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MemberMessage.prototype.toObject = function (e) {
            return proto.webcast.im.MemberMessage.toObject(e, this)
        }, proto.webcast.im.MemberMessage.toObject = function (e, t) {
            var o, s = {
                common: (o = t.getCommon()) && p.Common.toObject(e, o),
                user: (o = t.getUser()) && a.User.toObject(e, o),
                memberCount: r.Message.getFieldWithDefault(t, 3, "0"),
                operator: (o = t.getOperator()) && a.User.toObject(e, o),
                isSetToAdmin: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                isTopUser: r.Message.getBooleanFieldWithDefault(t, 6, !1),
                rankScore: r.Message.getFieldWithDefault(t, 7, "0"),
                topUserNo: r.Message.getFieldWithDefault(t, 8, "0"),
                enterType: r.Message.getFieldWithDefault(t, 9, "0"),
                action: r.Message.getFieldWithDefault(t, 10, "0"),
                actionDescription: r.Message.getFieldWithDefault(t, 11, ""),
                userId: r.Message.getFieldWithDefault(t, 12, "0"),
                effectConfig: (o = t.getEffectConfig()) && proto.webcast.im.MemberMessage.EffectConfig.toObject(e, o),
                popStr: r.Message.getFieldWithDefault(t, 14, ""),
                enterEffectConfig: (o = t.getEnterEffectConfig()) && proto.webcast.im.MemberMessage.EffectConfig.toObject(e, o),
                backgroundImage: (o = t.getBackgroundImage()) && n.Image.toObject(e, o),
                backgroundImageV2: (o = t.getBackgroundImageV2()) && n.Image.toObject(e, o),
                anchorDisplayText: (o = t.getAnchorDisplayText()) && g.Text.toObject(e, o),
                publicAreaCommon: (o = t.getPublicAreaCommon()) && p.PublicAreaCommon.toObject(e, o),
                userEnterTipType: r.Message.getFieldWithDefault(t, 20, "0"),
                anchorEnterTipType: r.Message.getFieldWithDefault(t, 21, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.MemberMessage.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MemberMessage;
            return proto.webcast.im.MemberMessage.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MemberMessage.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new p.Common;
                        t.readMessage(o, p.Common.deserializeBinaryFromReader), e.setCommon(o);
                        break;
                    case 2:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setUser(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setMemberCount(o);
                        break;
                    case 4:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader), e.setOperator(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setIsSetToAdmin(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setIsTopUser(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setRankScore(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setTopUserNo(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setEnterType(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setAction(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setActionDescription(o);
                        break;
                    case 12:
                        o = t.readInt64String();
                        e.setUserId(o);
                        break;
                    case 13:
                        o = new proto.webcast.im.MemberMessage.EffectConfig;
                        t.readMessage(o, proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader), e.setEffectConfig(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setPopStr(o);
                        break;
                    case 15:
                        o = new proto.webcast.im.MemberMessage.EffectConfig;
                        t.readMessage(o, proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader), e.setEnterEffectConfig(o);
                        break;
                    case 16:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImage(o);
                        break;
                    case 17:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBackgroundImageV2(o);
                        break;
                    case 18:
                        o = new g.Text;
                        t.readMessage(o, g.Text.deserializeBinaryFromReader), e.setAnchorDisplayText(o);
                        break;
                    case 19:
                        o = new p.PublicAreaCommon;
                        t.readMessage(o, p.PublicAreaCommon.deserializeBinaryFromReader), e.setPublicAreaCommon(o);
                        break;
                    case 20:
                        o = t.readInt64String();
                        e.setUserEnterTipType(o);
                        break;
                    case 21:
                        o = t.readInt64String();
                        e.setAnchorEnterTipType(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MemberMessage.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MemberMessage.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MemberMessage.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            null != (o = e.getCommon()) && t.writeMessage(1, o, p.Common.serializeBinaryToWriter), null != (o = e.getUser()) && t.writeMessage(2, o, a.User.serializeBinaryToWriter), o = e.getMemberCount(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), null != (o = e.getOperator()) && t.writeMessage(4, o, a.User.serializeBinaryToWriter), (o = e.getIsSetToAdmin()) && t.writeBool(5, o), (o = e.getIsTopUser()) && t.writeBool(6, o), o = e.getRankScore(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), o = e.getTopUserNo(), 0 !== parseInt(o, 10) && t.writeInt64String(8, o), o = e.getEnterType(), 0 !== parseInt(o, 10) && t.writeInt64String(9, o), o = e.getAction(), 0 !== parseInt(o, 10) && t.writeInt64String(10, o), (o = e.getActionDescription()).length > 0 && t.writeString(11, o), o = e.getUserId(), 0 !== parseInt(o, 10) && t.writeInt64String(12, o), null != (o = e.getEffectConfig()) && t.writeMessage(13, o, proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter), (o = e.getPopStr()).length > 0 && t.writeString(14, o), null != (o = e.getEnterEffectConfig()) && t.writeMessage(15, o, proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter), null != (o = e.getBackgroundImage()) && t.writeMessage(16, o, n.Image.serializeBinaryToWriter), null != (o = e.getBackgroundImageV2()) && t.writeMessage(17, o, n.Image.serializeBinaryToWriter), null != (o = e.getAnchorDisplayText()) && t.writeMessage(18, o, g.Text.serializeBinaryToWriter), null != (o = e.getPublicAreaCommon()) && t.writeMessage(19, o, p.PublicAreaCommon.serializeBinaryToWriter), o = e.getUserEnterTipType(), 0 !== parseInt(o, 10) && t.writeInt64String(20, o), o = e.getAnchorEnterTipType(), 0 !== parseInt(o, 10) && t.writeInt64String(21, o)
        }, proto.webcast.im.MemberMessage.EffectConfig.repeatedFields_ = [9, 13], r.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MemberMessage.EffectConfig.prototype.toObject = function (e) {
            return proto.webcast.im.MemberMessage.EffectConfig.toObject(e, this)
        }, proto.webcast.im.MemberMessage.EffectConfig.toObject = function (e, t) {
            var o, s = {
                type: r.Message.getFieldWithDefault(t, 1, "0"),
                icon: (o = t.getIcon()) && n.Image.toObject(e, o),
                avatarPos: r.Message.getFieldWithDefault(t, 3, "0"),
                text: (o = t.getText()) && g.Text.toObject(e, o),
                textIcon: (o = t.getTextIcon()) && n.Image.toObject(e, o),
                stayTime: r.Message.getFieldWithDefault(t, 6, 0),
                animAssetId: r.Message.getFieldWithDefault(t, 7, "0"),
                badge: (o = t.getBadge()) && n.Image.toObject(e, o),
                flexSettingArrayList: null == (o = r.Message.getRepeatedField(t, 9)) ? undefined : o,
                textIconOverlay: (o = t.getTextIconOverlay()) && n.Image.toObject(e, o),
                animatedBadge: (o = t.getAnimatedBadge()) && n.Image.toObject(e, o),
                hasSweepLight: r.Message.getBooleanFieldWithDefault(t, 12, !1),
                textFlexSettingArrayList: null == (o = r.Message.getRepeatedField(t, 13)) ? undefined : o,
                centerAnimAssetId: r.Message.getFieldWithDefault(t, 14, "0"),
                dynamicImage: (o = t.getDynamicImage()) && n.Image.toObject(e, o),
                extraMap: (o = t.getExtraMap()) ? o.toObject(e, undefined) : [],
                mp4AnimAssetId: r.Message.getFieldWithDefault(t, 17, "0"),
                priority: r.Message.getFieldWithDefault(t, 18, "0"),
                maxWaitTime: r.Message.getFieldWithDefault(t, 19, "0"),
                dressId: r.Message.getFieldWithDefault(t, 20, ""),
                alignment: r.Message.getFieldWithDefault(t, 21, "0"),
                alignmentOffset: r.Message.getFieldWithDefault(t, 22, "0")
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.webcast.im.MemberMessage.EffectConfig.deserializeBinary = function (e) {
            var t = new r.BinaryReader(e), o = new proto.webcast.im.MemberMessage.EffectConfig;
            return proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader(o, t)
        }, proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64String();
                        e.setType(o);
                        break;
                    case 2:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setIcon(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setAvatarPos(o);
                        break;
                    case 4:
                        o = new g.Text;
                        t.readMessage(o, g.Text.deserializeBinaryFromReader), e.setText(o);
                        break;
                    case 5:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setTextIcon(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setStayTime(o);
                        break;
                    case 7:
                        o = t.readInt64String();
                        e.setAnimAssetId(o);
                        break;
                    case 8:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setBadge(o);
                        break;
                    case 9:
                        for (var s = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < s.length; i++) e.addFlexSettingArray(s[i]);
                        break;
                    case 10:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setTextIconOverlay(o);
                        break;
                    case 11:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setAnimatedBadge(o);
                        break;
                    case 12:
                        o = t.readBool();
                        e.setHasSweepLight(o);
                        break;
                    case 13:
                        for (s = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < s.length; i++) e.addTextFlexSettingArray(s[i]);
                        break;
                    case 14:
                        o = t.readInt64String();
                        e.setCenterAnimAssetId(o);
                        break;
                    case 15:
                        o = new n.Image;
                        t.readMessage(o, n.Image.deserializeBinaryFromReader), e.setDynamicImage(o);
                        break;
                    case 16:
                        o = e.getExtraMap();
                        t.readMessage(o, (function (e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
                        }));
                        break;
                    case 17:
                        o = t.readInt64String();
                        e.setMp4AnimAssetId(o);
                        break;
                    case 18:
                        o = t.readInt64String();
                        e.setPriority(o);
                        break;
                    case 19:
                        o = t.readInt64String();
                        e.setMaxWaitTime(o);
                        break;
                    case 20:
                        o = t.readString();
                        e.setDressId(o);
                        break;
                    case 21:
                        o = t.readInt64String();
                        e.setAlignment(o);
                        break;
                    case 22:
                        o = t.readInt64String();
                        e.setAlignmentOffset(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.serializeBinary = function () {
            var e = new r.BinaryWriter;
            return proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter = function (e, t) {
            var o = undefined;
            o = e.getType(), 0 !== parseInt(o, 10) && t.writeInt64String(1, o), null != (o = e.getIcon()) && t.writeMessage(2, o, n.Image.serializeBinaryToWriter), o = e.getAvatarPos(), 0 !== parseInt(o, 10) && t.writeInt64String(3, o), null != (o = e.getText()) && t.writeMessage(4, o, g.Text.serializeBinaryToWriter), null != (o = e.getTextIcon()) && t.writeMessage(5, o, n.Image.serializeBinaryToWriter), 0 !== (o = e.getStayTime()) && t.writeInt32(6, o), o = e.getAnimAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(7, o), null != (o = e.getBadge()) && t.writeMessage(8, o, n.Image.serializeBinaryToWriter), (o = e.getFlexSettingArrayList()).length > 0 && t.writePackedInt64String(9, o), null != (o = e.getTextIconOverlay()) && t.writeMessage(10, o, n.Image.serializeBinaryToWriter), null != (o = e.getAnimatedBadge()) && t.writeMessage(11, o, n.Image.serializeBinaryToWriter), (o = e.getHasSweepLight()) && t.writeBool(12, o), (o = e.getTextFlexSettingArrayList()).length > 0 && t.writePackedInt64String(13, o), o = e.getCenterAnimAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(14, o), null != (o = e.getDynamicImage()) && t.writeMessage(15, o, n.Image.serializeBinaryToWriter), (o = e.getExtraMap(!0)) && o.getLength() > 0 && o.serializeBinary(16, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString), o = e.getMp4AnimAssetId(), 0 !== parseInt(o, 10) && t.writeInt64String(17, o), o = e.getPriority(), 0 !== parseInt(o, 10) && t.writeInt64String(18, o), o = e.getMaxWaitTime(), 0 !== parseInt(o, 10) && t.writeInt64String(19, o), (o = e.getDressId()).length > 0 && t.writeString(20, o), o = e.getAlignment(), 0 !== parseInt(o, 10) && t.writeInt64String(21, o), o = e.getAlignmentOffset(), 0 !== parseInt(o, 10) && t.writeInt64String(22, o)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getType = function () {
            return r.Message.getFieldWithDefault(this, 1, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setType = function (e) {
            return r.Message.setProto3StringIntField(this, 1, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getIcon = function () {
            return r.Message.getWrapperField(this, n.Image, 2)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setIcon = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearIcon = function () {
            return this.setIcon(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasIcon = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getAvatarPos = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setAvatarPos = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getText = function () {
            return r.Message.getWrapperField(this, g.Text, 4)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setText = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearText = function () {
            return this.setText(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasText = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextIcon = function () {
            return r.Message.getWrapperField(this, n.Image, 5)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextIcon = function (e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextIcon = function () {
            return this.setTextIcon(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasTextIcon = function () {
            return null != r.Message.getField(this, 5)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getStayTime = function () {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setStayTime = function (e) {
            return r.Message.setProto3IntField(this, 6, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getAnimAssetId = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setAnimAssetId = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getBadge = function () {
            return r.Message.getWrapperField(this, n.Image, 8)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setBadge = function (e) {
            return r.Message.setWrapperField(this, 8, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearBadge = function () {
            return this.setBadge(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasBadge = function () {
            return null != r.Message.getField(this, 8)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getFlexSettingArrayList = function () {
            return r.Message.getRepeatedField(this, 9)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setFlexSettingArrayList = function (e) {
            return r.Message.setField(this, 9, e || [])
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.addFlexSettingArray = function (e, t) {
            return r.Message.addToRepeatedField(this, 9, e, t)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearFlexSettingArrayList = function () {
            return this.setFlexSettingArrayList([])
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextIconOverlay = function () {
            return r.Message.getWrapperField(this, n.Image, 10)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextIconOverlay = function (e) {
            return r.Message.setWrapperField(this, 10, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextIconOverlay = function () {
            return this.setTextIconOverlay(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasTextIconOverlay = function () {
            return null != r.Message.getField(this, 10)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getAnimatedBadge = function () {
            return r.Message.getWrapperField(this, n.Image, 11)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setAnimatedBadge = function (e) {
            return r.Message.setWrapperField(this, 11, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearAnimatedBadge = function () {
            return this.setAnimatedBadge(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasAnimatedBadge = function () {
            return null != r.Message.getField(this, 11)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getHasSweepLight = function () {
            return r.Message.getBooleanFieldWithDefault(this, 12, !1)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setHasSweepLight = function (e) {
            return r.Message.setProto3BooleanField(this, 12, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextFlexSettingArrayList = function () {
            return r.Message.getRepeatedField(this, 13)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextFlexSettingArrayList = function (e) {
            return r.Message.setField(this, 13, e || [])
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.addTextFlexSettingArray = function (e, t) {
            return r.Message.addToRepeatedField(this, 13, e, t)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextFlexSettingArrayList = function () {
            return this.setTextFlexSettingArrayList([])
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getCenterAnimAssetId = function () {
            return r.Message.getFieldWithDefault(this, 14, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setCenterAnimAssetId = function (e) {
            return r.Message.setProto3StringIntField(this, 14, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getDynamicImage = function () {
            return r.Message.getWrapperField(this, n.Image, 15)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setDynamicImage = function (e) {
            return r.Message.setWrapperField(this, 15, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearDynamicImage = function () {
            return this.setDynamicImage(undefined)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.hasDynamicImage = function () {
            return null != r.Message.getField(this, 15)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getExtraMap = function (e) {
            return r.Message.getMapField(this, 16, e, null)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.clearExtraMap = function () {
            return this.getExtraMap().clear(), this
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getMp4AnimAssetId = function () {
            return r.Message.getFieldWithDefault(this, 17, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setMp4AnimAssetId = function (e) {
            return r.Message.setProto3StringIntField(this, 17, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getPriority = function () {
            return r.Message.getFieldWithDefault(this, 18, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setPriority = function (e) {
            return r.Message.setProto3StringIntField(this, 18, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getMaxWaitTime = function () {
            return r.Message.getFieldWithDefault(this, 19, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setMaxWaitTime = function (e) {
            return r.Message.setProto3StringIntField(this, 19, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getDressId = function () {
            return r.Message.getFieldWithDefault(this, 20, "")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setDressId = function (e) {
            return r.Message.setProto3StringField(this, 20, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getAlignment = function () {
            return r.Message.getFieldWithDefault(this, 21, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setAlignment = function (e) {
            return r.Message.setProto3StringIntField(this, 21, e)
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.getAlignmentOffset = function () {
            return r.Message.getFieldWithDefault(this, 22, "0")
        }, proto.webcast.im.MemberMessage.EffectConfig.prototype.setAlignmentOffset = function (e) {
            return r.Message.setProto3StringIntField(this, 22, e)
        }, proto.webcast.im.MemberMessage.prototype.getCommon = function () {
            return r.Message.getWrapperField(this, p.Common, 1)
        }, proto.webcast.im.MemberMessage.prototype.setCommon = function (e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.webcast.im.MemberMessage.prototype.clearCommon = function () {
            return this.setCommon(undefined)
        }, proto.webcast.im.MemberMessage.prototype.hasCommon = function () {
            return null != r.Message.getField(this, 1)
        }, proto.webcast.im.MemberMessage.prototype.getUser = function () {
            return r.Message.getWrapperField(this, a.User, 2)
        }, proto.webcast.im.MemberMessage.prototype.setUser = function (e) {
            return r.Message.setWrapperField(this, 2, e)
        }, proto.webcast.im.MemberMessage.prototype.clearUser = function () {
            return this.setUser(undefined)
        }, proto.webcast.im.MemberMessage.prototype.hasUser = function () {
            return null != r.Message.getField(this, 2)
        }, proto.webcast.im.MemberMessage.prototype.getMemberCount = function () {
            return r.Message.getFieldWithDefault(this, 3, "0")
        }, proto.webcast.im.MemberMessage.prototype.setMemberCount = function (e) {
            return r.Message.setProto3StringIntField(this, 3, e)
        }, proto.webcast.im.MemberMessage.prototype.getOperator = function () {
            return r.Message.getWrapperField(this, a.User, 4)
        }, proto.webcast.im.MemberMessage.prototype.setOperator = function (e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.webcast.im.MemberMessage.prototype.clearOperator = function () {
            return this.setOperator(undefined)
        }, proto.webcast.im.MemberMessage.prototype.hasOperator = function () {
            return null != r.Message.getField(this, 4)
        }, proto.webcast.im.MemberMessage.prototype.getIsSetToAdmin = function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1)
        }, proto.webcast.im.MemberMessage.prototype.setIsSetToAdmin = function (e) {
            return r.Message.setProto3BooleanField(this, 5, e)
        }, proto.webcast.im.MemberMessage.prototype.getIsTopUser = function () {
            return r.Message.getBooleanFieldWithDefault(this, 6, !1)
        }, proto.webcast.im.MemberMessage.prototype.setIsTopUser = function (e) {
            return r.Message.setProto3BooleanField(this, 6, e)
        }, proto.webcast.im.MemberMessage.prototype.getRankScore = function () {
            return r.Message.getFieldWithDefault(this, 7, "0")
        },proto.webcast.im.MemberMessage.prototype.setRankScore = function (e) {
            return r.Message.setProto3StringIntField(this, 7, e)
        },proto.webcast.im.MemberMessage.prototype.getTopUserNo = function () {
            return r.Message.getFieldWithDefault(this, 8, "0")
        },proto.webcast.im.MemberMessage.prototype.setTopUserNo = function (e) {
            return r.Message.setProto3StringIntField(this, 8, e)
        },proto.webcast.im.MemberMessage.prototype.getEnterType = function () {
            return r.Message.getFieldWithDefault(this, 9, "0")
        },proto.webcast.im.MemberMessage.prototype.setEnterType = function (e) {
            return r.Message.setProto3StringIntField(this, 9, e)
        },proto.webcast.im.MemberMessage.prototype.getAction = function () {
            return r.Message.getFieldWithDefault(this, 10, "0")
        },proto.webcast.im.MemberMessage.prototype.setAction = function (e) {
            return r.Message.setProto3StringIntField(this, 10, e)
        },proto.webcast.im.MemberMessage.prototype.getActionDescription = function () {
            return r.Message.getFieldWithDefault(this, 11, "")
        },proto.webcast.im.MemberMessage.prototype.setActionDescription = function (e) {
            return r.Message.setProto3StringField(this, 11, e)
        },proto.webcast.im.MemberMessage.prototype.getUserId = function () {
            return r.Message.getFieldWithDefault(this, 12, "0")
        },proto.webcast.im.MemberMessage.prototype.setUserId = function (e) {
            return r.Message.setProto3StringIntField(this, 12, e)
        },proto.webcast.im.MemberMessage.prototype.getEffectConfig = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.MemberMessage.EffectConfig, 13)
        },proto.webcast.im.MemberMessage.prototype.setEffectConfig = function (e) {
            return r.Message.setWrapperField(this, 13, e)
        },proto.webcast.im.MemberMessage.prototype.clearEffectConfig = function () {
            return this.setEffectConfig(undefined)
        },proto.webcast.im.MemberMessage.prototype.hasEffectConfig = function () {
            return null != r.Message.getField(this, 13)
        },proto.webcast.im.MemberMessage.prototype.getPopStr = function () {
            return r.Message.getFieldWithDefault(this, 14, "")
        },proto.webcast.im.MemberMessage.prototype.setPopStr = function (e) {
            return r.Message.setProto3StringField(this, 14, e)
        },proto.webcast.im.MemberMessage.prototype.getEnterEffectConfig = function () {
            return r.Message.getWrapperField(this, proto.webcast.im.MemberMessage.EffectConfig, 15)
        },proto.webcast.im.MemberMessage.prototype.setEnterEffectConfig = function (e) {
            return r.Message.setWrapperField(this, 15, e)
        },proto.webcast.im.MemberMessage.prototype.clearEnterEffectConfig = function () {
            return this.setEnterEffectConfig(undefined)
        },proto.webcast.im.MemberMessage.prototype.hasEnterEffectConfig = function () {
            return null != r.Message.getField(this, 15)
        },proto.webcast.im.MemberMessage.prototype.getBackgroundImage = function () {
            return r.Message.getWrapperField(this, n.Image, 16)
        },proto.webcast.im.MemberMessage.prototype.setBackgroundImage = function (e) {
            return r.Message.setWrapperField(this, 16, e)
        },proto.webcast.im.MemberMessage.prototype.clearBackgroundImage = function () {
            return this.setBackgroundImage(undefined)
        },proto.webcast.im.MemberMessage.prototype.hasBackgroundImage = function () {
            return null != r.Message.getField(this, 16)
        },proto.webcast.im.MemberMessage.prototype.getBackgroundImageV2 = function () {
            return r.Message.getWrapperField(this, n.Image, 17)
        },proto.webcast.im.MemberMessage.prototype.setBackgroundImageV2 = function (e) {
            return r.Message.setWrapperField(this, 17, e)
        },proto.webcast.im.MemberMessage.prototype.clearBackgroundImageV2 = function () {
            return this.setBackgroundImageV2(undefined)
        },proto.webcast.im.MemberMessage.prototype.hasBackgroundImageV2 = function () {
            return null != r.Message.getField(this, 17)
        },proto.webcast.im.MemberMessage.prototype.getAnchorDisplayText = function () {
            return r.Message.getWrapperField(this, g.Text, 18)
        },proto.webcast.im.MemberMessage.prototype.setAnchorDisplayText = function (e) {
            return r.Message.setWrapperField(this, 18, e)
        },proto.webcast.im.MemberMessage.prototype.clearAnchorDisplayText = function () {
            return this.setAnchorDisplayText(undefined)
        },proto.webcast.im.MemberMessage.prototype.hasAnchorDisplayText = function () {
            return null != r.Message.getField(this, 18)
        },proto.webcast.im.MemberMessage.prototype.getPublicAreaCommon = function () {
            return r.Message.getWrapperField(this, p.PublicAreaCommon, 19)
        },proto.webcast.im.MemberMessage.prototype.setPublicAreaCommon = function (e) {
            return r.Message.setWrapperField(this, 19, e)
        },proto.webcast.im.MemberMessage.prototype.clearPublicAreaCommon = function () {
            return this.setPublicAreaCommon(undefined)
        },proto.webcast.im.MemberMessage.prototype.hasPublicAreaCommon = function () {
            return null != r.Message.getField(this, 19)
        },proto.webcast.im.MemberMessage.prototype.getUserEnterTipType = function () {
            return r.Message.getFieldWithDefault(this, 20, "0")
        },proto.webcast.im.MemberMessage.prototype.setUserEnterTipType = function (e) {
            return r.Message.setProto3StringIntField(this, 20, e)
        },proto.webcast.im.MemberMessage.prototype.getAnchorEnterTipType = function () {
            return r.Message.getFieldWithDefault(this, 21, "0")
        },proto.webcast.im.MemberMessage.prototype.setAnchorEnterTipType = function (e) {
            return r.Message.setProto3StringIntField(this, 21, e)
        },s.object.extend(t, proto.webcast.im)
    }
}]);