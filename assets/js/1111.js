(self.webpackChunkdouyin_live_v2 = self.webpackChunkdouyin_live_v2 || []).push([[9676], {
    72218: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s);
        var n = r(70464);
        i.object.extend(proto, n),
        i.exportSymbol("proto.webcast.im.AuctionInfo", null, a),
        i.exportSymbol("proto.webcast.im.AuctionSuccess", null, a),
        i.exportSymbol("proto.webcast.im.BenefitLabel", null, a),
        i.exportSymbol("proto.webcast.im.CurrentUserInfo", null, a),
        i.exportSymbol("proto.webcast.im.FilterSwitchChangeData", null, a),
        i.exportSymbol("proto.webcast.im.HotAtmosphere", null, a),
        i.exportSymbol("proto.webcast.im.Img", null, a),
        i.exportSymbol("proto.webcast.im.IncrPriceList", null, a),
        i.exportSymbol("proto.webcast.im.InteractionAvatar", null, a),
        i.exportSymbol("proto.webcast.im.InteractionContent", null, a),
        i.exportSymbol("proto.webcast.im.InteractionContentCheck", null, a),
        i.exportSymbol("proto.webcast.im.InteractionData", null, a),
        i.exportSymbol("proto.webcast.im.InteractionElement", null, a),
        i.exportSymbol("proto.webcast.im.InteractionElement.ElementType", null, a),
        i.exportSymbol("proto.webcast.im.LiveShoppingMessage", null, a),
        i.exportSymbol("proto.webcast.im.LiveShoppingMessage.BubbleType", null, a),
        i.exportSymbol("proto.webcast.im.LiveShoppingMessage.MsgType", null, a),
        i.exportSymbol("proto.webcast.im.LiveShoppingMessage.UpdateType", null, a),
        i.exportSymbol("proto.webcast.im.LotteryInfo", null, a),
        i.exportSymbol("proto.webcast.im.LotteryInfoList", null, a),
        i.exportSymbol("proto.webcast.im.LotteryProductShortInfo", null, a),
        i.exportSymbol("proto.webcast.im.LotteryUnusualInfo", null, a),
        i.exportSymbol("proto.webcast.im.RedpackActivityInfo", null, a),
        i.exportSymbol("proto.webcast.im.RoomTagOfflineInfo", null, a),
        i.exportSymbol("proto.webcast.im.SkuInfo", null, a),
        i.exportSymbol("proto.webcast.im.TraceTimeMetric", null, a),
        i.exportSymbol("proto.webcast.im.UpIcon", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedCampaignInfo", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedCartInfo", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedCommentaryVideoInfo", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedCouponInfo", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedGroupInfo", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedProductInfo", null, a),
        i.exportSymbol("proto.webcast.im.UpdatedSkuInfo", null, a),
        i.exportSymbol("proto.webcast.im.UserBid", null, a),
        i.exportSymbol("proto.webcast.im.WinLotteryAlert", null, a),
        i.exportSymbol("proto.webcast.im.WinLotteryInfo", null, a),
        proto.webcast.im.UpdatedProductInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedProductInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedProductInfo.displayName = "proto.webcast.im.UpdatedProductInfo"),
        proto.webcast.im.UpdatedCouponInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedCouponInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedCouponInfo.displayName = "proto.webcast.im.UpdatedCouponInfo"),
        proto.webcast.im.UpdatedCampaignInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedCampaignInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedCampaignInfo.displayName = "proto.webcast.im.UpdatedCampaignInfo"),
        proto.webcast.im.SkuInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.SkuInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.SkuInfo.displayName = "proto.webcast.im.SkuInfo"),
        proto.webcast.im.TraceTimeMetric = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.TraceTimeMetric, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.TraceTimeMetric.displayName = "proto.webcast.im.TraceTimeMetric"),
        proto.webcast.im.UpdatedSkuInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedSkuInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedSkuInfo.displayName = "proto.webcast.im.UpdatedSkuInfo"),
        proto.webcast.im.UpdatedCommentaryVideoInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedCommentaryVideoInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedCommentaryVideoInfo.displayName = "proto.webcast.im.UpdatedCommentaryVideoInfo"),
        proto.webcast.im.UpdatedGroupInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.UpdatedGroupInfo.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedGroupInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedGroupInfo.displayName = "proto.webcast.im.UpdatedGroupInfo"),
        proto.webcast.im.UserBid = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UserBid, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UserBid.displayName = "proto.webcast.im.UserBid"),
        proto.webcast.im.Img = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.Img.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.Img, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.Img.displayName = "proto.webcast.im.Img"),
        proto.webcast.im.CurrentUserInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.CurrentUserInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.CurrentUserInfo.displayName = "proto.webcast.im.CurrentUserInfo"),
        proto.webcast.im.IncrPriceList = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.IncrPriceList, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.IncrPriceList.displayName = "proto.webcast.im.IncrPriceList"),
        proto.webcast.im.AuctionInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.AuctionInfo.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.AuctionInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.AuctionInfo.displayName = "proto.webcast.im.AuctionInfo"),
        proto.webcast.im.AuctionSuccess = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.AuctionSuccess, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.AuctionSuccess.displayName = "proto.webcast.im.AuctionSuccess"),
        proto.webcast.im.RedpackActivityInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.RedpackActivityInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.RedpackActivityInfo.displayName = "proto.webcast.im.RedpackActivityInfo"),
        proto.webcast.im.UpdatedCartInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpdatedCartInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpdatedCartInfo.displayName = "proto.webcast.im.UpdatedCartInfo"),
        proto.webcast.im.LotteryProductShortInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.LotteryProductShortInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.LotteryProductShortInfo.displayName = "proto.webcast.im.LotteryProductShortInfo"),
        proto.webcast.im.LotteryInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.LotteryInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.LotteryInfo.displayName = "proto.webcast.im.LotteryInfo"),
        proto.webcast.im.LotteryUnusualInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.LotteryUnusualInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.LotteryUnusualInfo.displayName = "proto.webcast.im.LotteryUnusualInfo"),
        proto.webcast.im.WinLotteryAlert = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.WinLotteryAlert, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.WinLotteryAlert.displayName = "proto.webcast.im.WinLotteryAlert"),
        proto.webcast.im.WinLotteryInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.WinLotteryInfo.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.WinLotteryInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.WinLotteryInfo.displayName = "proto.webcast.im.WinLotteryInfo"),
        proto.webcast.im.BenefitLabel = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.BenefitLabel, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.BenefitLabel.displayName = "proto.webcast.im.BenefitLabel"),
        proto.webcast.im.LotteryInfoList = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.LotteryInfoList.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.LotteryInfoList, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.LotteryInfoList.displayName = "proto.webcast.im.LotteryInfoList"),
        proto.webcast.im.HotAtmosphere = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.HotAtmosphere.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.HotAtmosphere, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.HotAtmosphere.displayName = "proto.webcast.im.HotAtmosphere"),
        proto.webcast.im.UpIcon = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.UpIcon, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.UpIcon.displayName = "proto.webcast.im.UpIcon"),
        proto.webcast.im.FilterSwitchChangeData = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.FilterSwitchChangeData, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.FilterSwitchChangeData.displayName = "proto.webcast.im.FilterSwitchChangeData"),
        proto.webcast.im.RoomTagOfflineInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.RoomTagOfflineInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.RoomTagOfflineInfo.displayName = "proto.webcast.im.RoomTagOfflineInfo"),
        proto.webcast.im.InteractionData = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractionData.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.InteractionData, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.InteractionData.displayName = "proto.webcast.im.InteractionData"),
        proto.webcast.im.InteractionContent = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractionContent.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.InteractionContent, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.InteractionContent.displayName = "proto.webcast.im.InteractionContent"),
        proto.webcast.im.InteractionContentCheck = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.InteractionContentCheck, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.InteractionContentCheck.displayName = "proto.webcast.im.InteractionContentCheck"),
        proto.webcast.im.InteractionElement = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.InteractionElement, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.InteractionElement.displayName = "proto.webcast.im.InteractionElement"),
        proto.webcast.im.InteractionAvatar = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.InteractionAvatar.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.InteractionAvatar, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.InteractionAvatar.displayName = "proto.webcast.im.InteractionAvatar"),
        proto.webcast.im.LiveShoppingMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.LiveShoppingMessage.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.LiveShoppingMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.LiveShoppingMessage.displayName = "proto.webcast.im.LiveShoppingMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedProductInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedProductInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.toObject = function(e, t) {
            var r = {
                price: o.Message.getFieldWithDefault(t, 1, "0"),
                title: o.Message.getFieldWithDefault(t, 2, ""),
                cover: o.Message.getFieldWithDefault(t, 3, ""),
                status: o.Message.getFieldWithDefault(t, 4, "0"),
                popUpicon: o.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.UpdatedProductInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedProductInfo;
            return proto.webcast.im.UpdatedProductInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setPrice(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setTitle(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setCover(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setStatus(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setPopUpicon(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedProductInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedProductInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            (r = e.getTitle()).length > 0 && t.writeString(2, r),
            (r = e.getCover()).length > 0 && t.writeString(3, r),
            r = e.getStatus(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r),
            (r = e.getPopUpicon()).length > 0 && t.writeString(5, r)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.setPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.getTitle = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.setTitle = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.getCover = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.setCover = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.getStatus = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.setStatus = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.getPopUpicon = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.UpdatedProductInfo.prototype.setPopUpicon = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedCouponInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedCouponInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.toObject = function(e, t) {
            var r = {
                tag: o.Message.getFieldWithDefault(t, 1, ""),
                couponUrl: o.Message.getFieldWithDefault(t, 2, ""),
                couponApplet: o.Message.getFieldWithDefault(t, 3, ""),
                isValid: o.Message.getBooleanFieldWithDefault(t, 4, !1),
                couponMetaId: o.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.UpdatedCouponInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedCouponInfo;
            return proto.webcast.im.UpdatedCouponInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setTag(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setCouponUrl(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setCouponApplet(r);
                    break;
                case 4:
                    r = t.readBool();
                    e.setIsValid(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setCouponMetaId(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedCouponInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getTag()).length > 0 && t.writeString(1, r),
            (r = e.getCouponUrl()).length > 0 && t.writeString(2, r),
            (r = e.getCouponApplet()).length > 0 && t.writeString(3, r),
            (r = e.getIsValid()) && t.writeBool(4, r),
            (r = e.getCouponMetaId()).length > 0 && t.writeString(5, r)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.getTag = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.setTag = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.getCouponUrl = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.setCouponUrl = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.getCouponApplet = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.setCouponApplet = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.getIsValid = function() {
            return o.Message.getBooleanFieldWithDefault(this, 4, !1)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.setIsValid = function(e) {
            return o.Message.setProto3BooleanField(this, 4, e)
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.getCouponMetaId = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.UpdatedCouponInfo.prototype.setCouponMetaId = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedCampaignInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedCampaignInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.toObject = function(e, t) {
            var r = {
                isValid: o.Message.getBooleanFieldWithDefault(t, 1, !1),
                label: o.Message.getFieldWithDefault(t, 2, ""),
                price: o.Message.getFieldWithDefault(t, 3, ""),
                pic: o.Message.getFieldWithDefault(t, 4, ""),
                startTime: o.Message.getFieldWithDefault(t, 5, ""),
                endTime: o.Message.getFieldWithDefault(t, 6, ""),
                timeStartLabel: o.Message.getFieldWithDefault(t, 7, ""),
                timeEndLabel: o.Message.getFieldWithDefault(t, 8, ""),
                userLimit: o.Message.getFieldWithDefault(t, 9, ""),
                isPreheat: o.Message.getFieldWithDefault(t, 10, ""),
                campaignId: o.Message.getFieldWithDefault(t, 11, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.UpdatedCampaignInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedCampaignInfo;
            return proto.webcast.im.UpdatedCampaignInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readBool();
                    e.setIsValid(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setLabel(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setPrice(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setPic(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setStartTime(r);
                    break;
                case 6:
                    r = t.readString();
                    e.setEndTime(r);
                    break;
                case 7:
                    r = t.readString();
                    e.setTimeStartLabel(r);
                    break;
                case 8:
                    r = t.readString();
                    e.setTimeEndLabel(r);
                    break;
                case 9:
                    r = t.readString();
                    e.setUserLimit(r);
                    break;
                case 10:
                    r = t.readString();
                    e.setIsPreheat(r);
                    break;
                case 11:
                    r = t.readString();
                    e.setCampaignId(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedCampaignInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getIsValid()) && t.writeBool(1, r),
            (r = e.getLabel()).length > 0 && t.writeString(2, r),
            (r = e.getPrice()).length > 0 && t.writeString(3, r),
            (r = e.getPic()).length > 0 && t.writeString(4, r),
            (r = e.getStartTime()).length > 0 && t.writeString(5, r),
            (r = e.getEndTime()).length > 0 && t.writeString(6, r),
            (r = e.getTimeStartLabel()).length > 0 && t.writeString(7, r),
            (r = e.getTimeEndLabel()).length > 0 && t.writeString(8, r),
            (r = e.getUserLimit()).length > 0 && t.writeString(9, r),
            (r = e.getIsPreheat()).length > 0 && t.writeString(10, r),
            (r = e.getCampaignId()).length > 0 && t.writeString(11, r)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getIsValid = function() {
            return o.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setIsValid = function(e) {
            return o.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getLabel = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setLabel = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setPrice = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getPic = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setPic = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getStartTime = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setStartTime = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getEndTime = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setEndTime = function(e) {
            return o.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getTimeStartLabel = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setTimeStartLabel = function(e) {
            return o.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getTimeEndLabel = function() {
            return o.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setTimeEndLabel = function(e) {
            return o.Message.setProto3StringField(this, 8, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getUserLimit = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setUserLimit = function(e) {
            return o.Message.setProto3StringField(this, 9, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getIsPreheat = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setIsPreheat = function(e) {
            return o.Message.setProto3StringField(this, 10, e)
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.getCampaignId = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.UpdatedCampaignInfo.prototype.setCampaignId = function(e) {
            return o.Message.setProto3StringField(this, 11, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.SkuInfo.prototype.toObject = function(e) {
            return proto.webcast.im.SkuInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.SkuInfo.toObject = function(e, t) {
            var r = {
                skuId: o.Message.getFieldWithDefault(t, 1, ""),
                stockNum: o.Message.getFieldWithDefault(t, 2, "0"),
                price: o.Message.getFieldWithDefault(t, 3, "0"),
                couponPrice: o.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.SkuInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.SkuInfo;
            return proto.webcast.im.SkuInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.SkuInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setSkuId(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setStockNum(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setPrice(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setCouponPrice(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.SkuInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.SkuInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.SkuInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getSkuId()).length > 0 && t.writeString(1, r),
            r = e.getStockNum(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            r = e.getPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            r = e.getCouponPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r)
        }
        ,
        proto.webcast.im.SkuInfo.prototype.getSkuId = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.SkuInfo.prototype.setSkuId = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.SkuInfo.prototype.getStockNum = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.SkuInfo.prototype.setStockNum = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.SkuInfo.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.SkuInfo.prototype.setPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.SkuInfo.prototype.getCouponPrice = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.SkuInfo.prototype.setCouponPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.TraceTimeMetric.prototype.toObject = function(e) {
            return proto.webcast.im.TraceTimeMetric.toObject(e, this)
        }
        ,
        proto.webcast.im.TraceTimeMetric.toObject = function(e, t) {
            var r = {
                opTimestamp: o.Message.getFieldWithDefault(t, 1, "0"),
                producerDuration: o.Message.getFieldWithDefault(t, 2, "0"),
                consumerDuration: o.Message.getFieldWithDefault(t, 3, "0"),
                msgSendTimestamp: o.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.TraceTimeMetric.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.TraceTimeMetric;
            return proto.webcast.im.TraceTimeMetric.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.TraceTimeMetric.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setOpTimestamp(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setProducerDuration(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setConsumerDuration(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setMsgSendTimestamp(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.TraceTimeMetric.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.TraceTimeMetric.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getOpTimestamp(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            r = e.getProducerDuration(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            r = e.getConsumerDuration(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            r = e.getMsgSendTimestamp(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r)
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.getOpTimestamp = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.setOpTimestamp = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.getProducerDuration = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.setProducerDuration = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.getConsumerDuration = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.setConsumerDuration = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.getMsgSendTimestamp = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.TraceTimeMetric.prototype.setMsgSendTimestamp = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedSkuInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedSkuInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.toObject = function(e, t) {
            var r, i = {
                skusMap: (r = t.getSkusMap()) ? r.toObject(e, proto.webcast.im.SkuInfo.toObject) : [],
                minPrice: o.Message.getFieldWithDefault(t, 2, "0"),
                maxPrice: o.Message.getFieldWithDefault(t, 3, "0"),
                unuseMinPrice: o.Message.getFieldWithDefault(t, 4, "0"),
                couponPrice: o.Message.getFieldWithDefault(t, 5, "0")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.UpdatedSkuInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedSkuInfo;
            return proto.webcast.im.UpdatedSkuInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = e.getSkusMap();
                    t.readMessage(r, (function(e, t) {
                        o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.webcast.im.SkuInfo.deserializeBinaryFromReader, "", new proto.webcast.im.SkuInfo)
                    }
                    ));
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setMinPrice(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setMaxPrice(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setUnuseMinPrice(r);
                    break;
                case 5:
                    r = t.readInt64String();
                    e.setCouponPrice(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedSkuInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getSkusMap(!0)) && r.getLength() > 0 && r.serializeBinary(1, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.webcast.im.SkuInfo.serializeBinaryToWriter),
            r = e.getMinPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            r = e.getMaxPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            r = e.getUnuseMinPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r),
            r = e.getCouponPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(5, r)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.getSkusMap = function(e) {
            return o.Message.getMapField(this, 1, e, proto.webcast.im.SkuInfo)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.clearSkusMap = function() {
            return this.getSkusMap().clear(),
            this
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.getMinPrice = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.setMinPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.getMaxPrice = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.setMaxPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.getUnuseMinPrice = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.setUnuseMinPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.getCouponPrice = function() {
            return o.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.UpdatedSkuInfo.prototype.setCouponPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedCommentaryVideoInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedCommentaryVideoInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedCommentaryVideoInfo.toObject = function(e, t) {
            var r = {
                action: o.Message.getFieldWithDefault(t, 1, "0")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.UpdatedCommentaryVideoInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedCommentaryVideoInfo;
            return proto.webcast.im.UpdatedCommentaryVideoInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedCommentaryVideoInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                if (1 === t.getFieldNumber()) {
                    var r = t.readInt64String();
                    e.setAction(r)
                } else
                    t.skipField()
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedCommentaryVideoInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedCommentaryVideoInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedCommentaryVideoInfo.serializeBinaryToWriter = function(e, t) {
            var r;
            r = e.getAction(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r)
        }
        ,
        proto.webcast.im.UpdatedCommentaryVideoInfo.prototype.getAction = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.UpdatedCommentaryVideoInfo.prototype.setAction = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedGroupInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedGroupInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.toObject = function(e, t) {
            var r, i = {
                avatarListList: null == (r = o.Message.getRepeatedField(t, 1)) ? void 0 : r,
                joined: o.Message.getFieldWithDefault(t, 2, "0"),
                groupSize: o.Message.getFieldWithDefault(t, 3, "0"),
                persent: o.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.UpdatedGroupInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedGroupInfo;
            return proto.webcast.im.UpdatedGroupInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.addAvatarList(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setJoined(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setGroupSize(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setPersent(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedGroupInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getAvatarListList()).length > 0 && t.writeRepeatedString(1, r),
            r = e.getJoined(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            r = e.getGroupSize(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            r = e.getPersent(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.getAvatarListList = function() {
            return o.Message.getRepeatedField(this, 1)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.setAvatarListList = function(e) {
            return o.Message.setField(this, 1, e || [])
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.addAvatarList = function(e, t) {
            return o.Message.addToRepeatedField(this, 1, e, t)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.clearAvatarListList = function() {
            return this.setAvatarListList([])
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.getJoined = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.setJoined = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.getGroupSize = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.setGroupSize = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.getPersent = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.UpdatedGroupInfo.prototype.setPersent = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UserBid.prototype.toObject = function(e) {
            return proto.webcast.im.UserBid.toObject(e, this)
        }
        ,
        proto.webcast.im.UserBid.toObject = function(e, t) {
            var r = {
                pic: o.Message.getFieldWithDefault(t, 1, ""),
                name: o.Message.getFieldWithDefault(t, 2, ""),
                price: o.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.UserBid.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UserBid;
            return proto.webcast.im.UserBid.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UserBid.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setPic(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setName(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setPrice(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UserBid.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UserBid.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UserBid.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getPic()).length > 0 && t.writeString(1, r),
            (r = e.getName()).length > 0 && t.writeString(2, r),
            r = e.getPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r)
        }
        ,
        proto.webcast.im.UserBid.prototype.getPic = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.UserBid.prototype.setPic = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.UserBid.prototype.getName = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.UserBid.prototype.setName = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.UserBid.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.UserBid.prototype.setPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.Img.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.Img.prototype.toObject = function(e) {
            return proto.webcast.im.Img.toObject(e, this)
        }
        ,
        proto.webcast.im.Img.toObject = function(e, t) {
            var r, i = {
                urlListList: null == (r = o.Message.getRepeatedField(t, 1)) ? void 0 : r,
                height: o.Message.getFieldWithDefault(t, 2, 0),
                width: o.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.Img.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.Img;
            return proto.webcast.im.Img.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.Img.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.addUrlList(r);
                    break;
                case 2:
                    r = t.readInt32();
                    e.setHeight(r);
                    break;
                case 3:
                    r = t.readInt32();
                    e.setWidth(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.Img.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.Img.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.Img.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getUrlListList()).length > 0 && t.writeRepeatedString(1, r),
            0 !== (r = e.getHeight()) && t.writeInt32(2, r),
            0 !== (r = e.getWidth()) && t.writeInt32(3, r)
        }
        ,
        proto.webcast.im.Img.prototype.getUrlListList = function() {
            return o.Message.getRepeatedField(this, 1)
        }
        ,
        proto.webcast.im.Img.prototype.setUrlListList = function(e) {
            return o.Message.setField(this, 1, e || [])
        }
        ,
        proto.webcast.im.Img.prototype.addUrlList = function(e, t) {
            return o.Message.addToRepeatedField(this, 1, e, t)
        }
        ,
        proto.webcast.im.Img.prototype.clearUrlListList = function() {
            return this.setUrlListList([])
        }
        ,
        proto.webcast.im.Img.prototype.getHeight = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.Img.prototype.setHeight = function(e) {
            return o.Message.setProto3IntField(this, 2, e)
        }
        ,
        proto.webcast.im.Img.prototype.getWidth = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.Img.prototype.setWidth = function(e) {
            return o.Message.setProto3IntField(this, 3, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CurrentUserInfo.prototype.toObject = function(e) {
            return proto.webcast.im.CurrentUserInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.CurrentUserInfo.toObject = function(e, t) {
            var r, i = {
                userPic: (r = t.getUserPic()) && proto.webcast.im.Img.toObject(e, r),
                userName: o.Message.getFieldWithDefault(t, 2, ""),
                userId: o.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.CurrentUserInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.CurrentUserInfo;
            return proto.webcast.im.CurrentUserInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.CurrentUserInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new proto.webcast.im.Img;
                    t.readMessage(r, proto.webcast.im.Img.deserializeBinaryFromReader),
                    e.setUserPic(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setUserName(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setUserId(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.CurrentUserInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.CurrentUserInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getUserPic()) && t.writeMessage(1, r, proto.webcast.im.Img.serializeBinaryToWriter),
            (r = e.getUserName()).length > 0 && t.writeString(2, r),
            r = e.getUserId(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r)
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.getUserPic = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.Img, 1)
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.setUserPic = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.clearUserPic = function() {
            return this.setUserPic(void 0)
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.hasUserPic = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.getUserName = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.setUserName = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.getUserId = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.CurrentUserInfo.prototype.setUserId = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.IncrPriceList.prototype.toObject = function(e) {
            return proto.webcast.im.IncrPriceList.toObject(e, this)
        }
        ,
        proto.webcast.im.IncrPriceList.toObject = function(e, t) {
            var r = {
                price: o.Message.getFieldWithDefault(t, 1, "0"),
                range: o.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.IncrPriceList.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.IncrPriceList;
            return proto.webcast.im.IncrPriceList.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.IncrPriceList.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setPrice(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setRange(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.IncrPriceList.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.IncrPriceList.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.IncrPriceList.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            r = e.getRange(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r)
        }
        ,
        proto.webcast.im.IncrPriceList.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.IncrPriceList.prototype.setPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.IncrPriceList.prototype.getRange = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.IncrPriceList.prototype.setRange = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.AuctionInfo.repeatedFields_ = [6],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AuctionInfo.prototype.toObject = function(e) {
            return proto.webcast.im.AuctionInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.AuctionInfo.toObject = function(e, t) {
            var r, i = {
                price: o.Message.getFieldWithDefault(t, 1, "0"),
                priceLabel: o.Message.getFieldWithDefault(t, 2, ""),
                status: o.Message.getFieldWithDefault(t, 3, 0),
                jumpUrl: o.Message.getFieldWithDefault(t, 4, ""),
                currentUserInfo: (r = t.getCurrentUserInfo()) && proto.webcast.im.CurrentUserInfo.toObject(e, r),
                incrPriceListsList: o.Message.toObjectList(t.getIncrPriceListsList(), proto.webcast.im.IncrPriceList.toObject, e),
                buttonLabel: o.Message.getFieldWithDefault(t, 7, ""),
                productId: o.Message.getFieldWithDefault(t, 8, "0"),
                endTime: o.Message.getFieldWithDefault(t, 9, "0"),
                bizId: o.Message.getFieldWithDefault(t, 10, 0)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.AuctionInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.AuctionInfo;
            return proto.webcast.im.AuctionInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.AuctionInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setPrice(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setPriceLabel(r);
                    break;
                case 3:
                    r = t.readInt32();
                    e.setStatus(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setJumpUrl(r);
                    break;
                case 5:
                    r = new proto.webcast.im.CurrentUserInfo;
                    t.readMessage(r, proto.webcast.im.CurrentUserInfo.deserializeBinaryFromReader),
                    e.setCurrentUserInfo(r);
                    break;
                case 6:
                    r = new proto.webcast.im.IncrPriceList;
                    t.readMessage(r, proto.webcast.im.IncrPriceList.deserializeBinaryFromReader),
                    e.addIncrPriceLists(r);
                    break;
                case 7:
                    r = t.readString();
                    e.setButtonLabel(r);
                    break;
                case 8:
                    r = t.readInt64String();
                    e.setProductId(r);
                    break;
                case 9:
                    r = t.readInt64String();
                    e.setEndTime(r);
                    break;
                case 10:
                    r = t.readInt32();
                    e.setBizId(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.AuctionInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.AuctionInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            (r = e.getPriceLabel()).length > 0 && t.writeString(2, r),
            0 !== (r = e.getStatus()) && t.writeInt32(3, r),
            (r = e.getJumpUrl()).length > 0 && t.writeString(4, r),
            null != (r = e.getCurrentUserInfo()) && t.writeMessage(5, r, proto.webcast.im.CurrentUserInfo.serializeBinaryToWriter),
            (r = e.getIncrPriceListsList()).length > 0 && t.writeRepeatedMessage(6, r, proto.webcast.im.IncrPriceList.serializeBinaryToWriter),
            (r = e.getButtonLabel()).length > 0 && t.writeString(7, r),
            r = e.getProductId(),
            0 !== parseInt(r, 10) && t.writeInt64String(8, r),
            r = e.getEndTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(9, r),
            0 !== (r = e.getBizId()) && t.writeInt32(10, r)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getPriceLabel = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setPriceLabel = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getStatus = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setStatus = function(e) {
            return o.Message.setProto3IntField(this, 3, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getJumpUrl = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setJumpUrl = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getCurrentUserInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.CurrentUserInfo, 5)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setCurrentUserInfo = function(e) {
            return o.Message.setWrapperField(this, 5, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.clearCurrentUserInfo = function() {
            return this.setCurrentUserInfo(void 0)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.hasCurrentUserInfo = function() {
            return null != o.Message.getField(this, 5)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getIncrPriceListsList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.webcast.im.IncrPriceList, 6)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setIncrPriceListsList = function(e) {
            return o.Message.setRepeatedWrapperField(this, 6, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.addIncrPriceLists = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 6, e, proto.webcast.im.IncrPriceList, t)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.clearIncrPriceListsList = function() {
            return this.setIncrPriceListsList([])
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getButtonLabel = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setButtonLabel = function(e) {
            return o.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getProductId = function() {
            return o.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setProductId = function(e) {
            return o.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getEndTime = function() {
            return o.Message.getFieldWithDefault(this, 9, "0")
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setEndTime = function(e) {
            return o.Message.setProto3StringIntField(this, 9, e)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.getBizId = function() {
            return o.Message.getFieldWithDefault(this, 10, 0)
        }
        ,
        proto.webcast.im.AuctionInfo.prototype.setBizId = function(e) {
            return o.Message.setProto3IntField(this, 10, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.AuctionSuccess.prototype.toObject = function(e) {
            return proto.webcast.im.AuctionSuccess.toObject(e, this)
        }
        ,
        proto.webcast.im.AuctionSuccess.toObject = function(e, t) {
            var r = {
                title: o.Message.getFieldWithDefault(t, 1, ""),
                productId: o.Message.getFieldWithDefault(t, 2, "0"),
                productName: o.Message.getFieldWithDefault(t, 3, ""),
                productPic: o.Message.getFieldWithDefault(t, 4, ""),
                price: o.Message.getFieldWithDefault(t, 5, "0"),
                charge: o.Message.getFieldWithDefault(t, 6, "0"),
                freight: o.Message.getFieldWithDefault(t, 7, "0"),
                total: o.Message.getFieldWithDefault(t, 8, "0"),
                buttonLabel: o.Message.getFieldWithDefault(t, 9, ""),
                jumpUrl: o.Message.getFieldWithDefault(t, 10, ""),
                freightCollect: o.Message.getFieldWithDefault(t, 11, ""),
                leftPaymentTime: o.Message.getFieldWithDefault(t, 12, "0"),
                bizId: o.Message.getFieldWithDefault(t, 13, 0),
                depositInfo: o.Message.getFieldWithDefault(t, 14, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.AuctionSuccess.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.AuctionSuccess;
            return proto.webcast.im.AuctionSuccess.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.AuctionSuccess.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setTitle(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setProductId(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setProductName(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setProductPic(r);
                    break;
                case 5:
                    r = t.readInt64String();
                    e.setPrice(r);
                    break;
                case 6:
                    r = t.readInt64String();
                    e.setCharge(r);
                    break;
                case 7:
                    r = t.readInt64String();
                    e.setFreight(r);
                    break;
                case 8:
                    r = t.readInt64String();
                    e.setTotal(r);
                    break;
                case 9:
                    r = t.readString();
                    e.setButtonLabel(r);
                    break;
                case 10:
                    r = t.readString();
                    e.setJumpUrl(r);
                    break;
                case 11:
                    r = t.readString();
                    e.setFreightCollect(r);
                    break;
                case 12:
                    r = t.readInt64String();
                    e.setLeftPaymentTime(r);
                    break;
                case 13:
                    r = t.readInt32();
                    e.setBizId(r);
                    break;
                case 14:
                    r = t.readString();
                    e.setDepositInfo(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.AuctionSuccess.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.AuctionSuccess.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getTitle()).length > 0 && t.writeString(1, r),
            r = e.getProductId(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            (r = e.getProductName()).length > 0 && t.writeString(3, r),
            (r = e.getProductPic()).length > 0 && t.writeString(4, r),
            r = e.getPrice(),
            0 !== parseInt(r, 10) && t.writeInt64String(5, r),
            r = e.getCharge(),
            0 !== parseInt(r, 10) && t.writeInt64String(6, r),
            r = e.getFreight(),
            0 !== parseInt(r, 10) && t.writeInt64String(7, r),
            r = e.getTotal(),
            0 !== parseInt(r, 10) && t.writeInt64String(8, r),
            (r = e.getButtonLabel()).length > 0 && t.writeString(9, r),
            (r = e.getJumpUrl()).length > 0 && t.writeString(10, r),
            (r = e.getFreightCollect()).length > 0 && t.writeString(11, r),
            r = e.getLeftPaymentTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(12, r),
            0 !== (r = e.getBizId()) && t.writeInt32(13, r),
            (r = e.getDepositInfo()).length > 0 && t.writeString(14, r)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getTitle = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setTitle = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getProductId = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setProductId = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getProductName = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setProductName = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getProductPic = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setProductPic = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getPrice = function() {
            return o.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setPrice = function(e) {
            return o.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getCharge = function() {
            return o.Message.getFieldWithDefault(this, 6, "0")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setCharge = function(e) {
            return o.Message.setProto3StringIntField(this, 6, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getFreight = function() {
            return o.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setFreight = function(e) {
            return o.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getTotal = function() {
            return o.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setTotal = function(e) {
            return o.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getButtonLabel = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setButtonLabel = function(e) {
            return o.Message.setProto3StringField(this, 9, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getJumpUrl = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setJumpUrl = function(e) {
            return o.Message.setProto3StringField(this, 10, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getFreightCollect = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setFreightCollect = function(e) {
            return o.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getLeftPaymentTime = function() {
            return o.Message.getFieldWithDefault(this, 12, "0")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setLeftPaymentTime = function(e) {
            return o.Message.setProto3StringIntField(this, 12, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getBizId = function() {
            return o.Message.getFieldWithDefault(this, 13, 0)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setBizId = function(e) {
            return o.Message.setProto3IntField(this, 13, e)
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.getDepositInfo = function() {
            return o.Message.getFieldWithDefault(this, 14, "")
        }
        ,
        proto.webcast.im.AuctionSuccess.prototype.setDepositInfo = function(e) {
            return o.Message.setProto3StringField(this, 14, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RedpackActivityInfo.prototype.toObject = function(e) {
            return proto.webcast.im.RedpackActivityInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.toObject = function(e, t) {
            var r = {
                redpackType: o.Message.getFieldWithDefault(t, 1, "0"),
                redpackActivityId: o.Message.getFieldWithDefault(t, 2, ""),
                redpackActivityName: o.Message.getFieldWithDefault(t, 3, ""),
                startApplyTime: o.Message.getFieldWithDefault(t, 4, "0"),
                endApplyTime: o.Message.getFieldWithDefault(t, 5, "0"),
                preheatTime: o.Message.getFieldWithDefault(t, 6, "0"),
                totalAmount: o.Message.getFieldWithDefault(t, 7, "0"),
                authorAvatarUrl: o.Message.getFieldWithDefault(t, 8, ""),
                authorName: o.Message.getFieldWithDefault(t, 9, ""),
                pendantBackgroundUrl: o.Message.getFieldWithDefault(t, 10, ""),
                redpackFrontBackgroundUrl: o.Message.getFieldWithDefault(t, 11, ""),
                redpackLabel: o.Message.getFieldWithDefault(t, 12, ""),
                redpackAfterBackgroundUrl: o.Message.getFieldWithDefault(t, 13, ""),
                redpackAfterBeltUrl: o.Message.getFieldWithDefault(t, 14, ""),
                scatterTime: o.Message.getFieldWithDefault(t, 15, "0"),
                serverTime: o.Message.getFieldWithDefault(t, 16, "0"),
                maxAmount: o.Message.getFieldWithDefault(t, 17, "0"),
                showType: o.Message.getFieldWithDefault(t, 18, "0"),
                shorttouchPendantBackgroundUrl: o.Message.getFieldWithDefault(t, 19, ""),
                shorttouchPendantIconUrl: o.Message.getFieldWithDefault(t, 20, ""),
                shorttouchLottieUrl: o.Message.getFieldWithDefault(t, 21, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.RedpackActivityInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.RedpackActivityInfo;
            return proto.webcast.im.RedpackActivityInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setRedpackType(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setRedpackActivityId(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setRedpackActivityName(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setStartApplyTime(r);
                    break;
                case 5:
                    r = t.readInt64String();
                    e.setEndApplyTime(r);
                    break;
                case 6:
                    r = t.readInt64String();
                    e.setPreheatTime(r);
                    break;
                case 7:
                    r = t.readInt64String();
                    e.setTotalAmount(r);
                    break;
                case 8:
                    r = t.readString();
                    e.setAuthorAvatarUrl(r);
                    break;
                case 9:
                    r = t.readString();
                    e.setAuthorName(r);
                    break;
                case 10:
                    r = t.readString();
                    e.setPendantBackgroundUrl(r);
                    break;
                case 11:
                    r = t.readString();
                    e.setRedpackFrontBackgroundUrl(r);
                    break;
                case 12:
                    r = t.readString();
                    e.setRedpackLabel(r);
                    break;
                case 13:
                    r = t.readString();
                    e.setRedpackAfterBackgroundUrl(r);
                    break;
                case 14:
                    r = t.readString();
                    e.setRedpackAfterBeltUrl(r);
                    break;
                case 15:
                    r = t.readInt64String();
                    e.setScatterTime(r);
                    break;
                case 16:
                    r = t.readInt64String();
                    e.setServerTime(r);
                    break;
                case 17:
                    r = t.readInt64String();
                    e.setMaxAmount(r);
                    break;
                case 18:
                    r = t.readInt64String();
                    e.setShowType(r);
                    break;
                case 19:
                    r = t.readString();
                    e.setShorttouchPendantBackgroundUrl(r);
                    break;
                case 20:
                    r = t.readString();
                    e.setShorttouchPendantIconUrl(r);
                    break;
                case 21:
                    r = t.readString();
                    e.setShorttouchLottieUrl(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.RedpackActivityInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RedpackActivityInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getRedpackType(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            (r = e.getRedpackActivityId()).length > 0 && t.writeString(2, r),
            (r = e.getRedpackActivityName()).length > 0 && t.writeString(3, r),
            r = e.getStartApplyTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r),
            r = e.getEndApplyTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(5, r),
            r = e.getPreheatTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(6, r),
            r = e.getTotalAmount(),
            0 !== parseInt(r, 10) && t.writeInt64String(7, r),
            (r = e.getAuthorAvatarUrl()).length > 0 && t.writeString(8, r),
            (r = e.getAuthorName()).length > 0 && t.writeString(9, r),
            (r = e.getPendantBackgroundUrl()).length > 0 && t.writeString(10, r),
            (r = e.getRedpackFrontBackgroundUrl()).length > 0 && t.writeString(11, r),
            (r = e.getRedpackLabel()).length > 0 && t.writeString(12, r),
            (r = e.getRedpackAfterBackgroundUrl()).length > 0 && t.writeString(13, r),
            (r = e.getRedpackAfterBeltUrl()).length > 0 && t.writeString(14, r),
            r = e.getScatterTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(15, r),
            r = e.getServerTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(16, r),
            r = e.getMaxAmount(),
            0 !== parseInt(r, 10) && t.writeInt64String(17, r),
            r = e.getShowType(),
            0 !== parseInt(r, 10) && t.writeInt64String(18, r),
            (r = e.getShorttouchPendantBackgroundUrl()).length > 0 && t.writeString(19, r),
            (r = e.getShorttouchPendantIconUrl()).length > 0 && t.writeString(20, r),
            (r = e.getShorttouchLottieUrl()).length > 0 && t.writeString(21, r)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackType = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackType = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackActivityId = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackActivityId = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackActivityName = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackActivityName = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getStartApplyTime = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setStartApplyTime = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getEndApplyTime = function() {
            return o.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setEndApplyTime = function(e) {
            return o.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getPreheatTime = function() {
            return o.Message.getFieldWithDefault(this, 6, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setPreheatTime = function(e) {
            return o.Message.setProto3StringIntField(this, 6, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getTotalAmount = function() {
            return o.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setTotalAmount = function(e) {
            return o.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getAuthorAvatarUrl = function() {
            return o.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setAuthorAvatarUrl = function(e) {
            return o.Message.setProto3StringField(this, 8, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getAuthorName = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setAuthorName = function(e) {
            return o.Message.setProto3StringField(this, 9, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getPendantBackgroundUrl = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setPendantBackgroundUrl = function(e) {
            return o.Message.setProto3StringField(this, 10, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackFrontBackgroundUrl = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackFrontBackgroundUrl = function(e) {
            return o.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackLabel = function() {
            return o.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackLabel = function(e) {
            return o.Message.setProto3StringField(this, 12, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackAfterBackgroundUrl = function() {
            return o.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackAfterBackgroundUrl = function(e) {
            return o.Message.setProto3StringField(this, 13, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getRedpackAfterBeltUrl = function() {
            return o.Message.getFieldWithDefault(this, 14, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setRedpackAfterBeltUrl = function(e) {
            return o.Message.setProto3StringField(this, 14, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getScatterTime = function() {
            return o.Message.getFieldWithDefault(this, 15, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setScatterTime = function(e) {
            return o.Message.setProto3StringIntField(this, 15, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getServerTime = function() {
            return o.Message.getFieldWithDefault(this, 16, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setServerTime = function(e) {
            return o.Message.setProto3StringIntField(this, 16, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getMaxAmount = function() {
            return o.Message.getFieldWithDefault(this, 17, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setMaxAmount = function(e) {
            return o.Message.setProto3StringIntField(this, 17, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getShowType = function() {
            return o.Message.getFieldWithDefault(this, 18, "0")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setShowType = function(e) {
            return o.Message.setProto3StringIntField(this, 18, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getShorttouchPendantBackgroundUrl = function() {
            return o.Message.getFieldWithDefault(this, 19, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setShorttouchPendantBackgroundUrl = function(e) {
            return o.Message.setProto3StringField(this, 19, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getShorttouchPendantIconUrl = function() {
            return o.Message.getFieldWithDefault(this, 20, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setShorttouchPendantIconUrl = function(e) {
            return o.Message.setProto3StringField(this, 20, e)
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.getShorttouchLottieUrl = function() {
            return o.Message.getFieldWithDefault(this, 21, "")
        }
        ,
        proto.webcast.im.RedpackActivityInfo.prototype.setShorttouchLottieUrl = function(e) {
            return o.Message.setProto3StringField(this, 21, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpdatedCartInfo.prototype.toObject = function(e) {
            return proto.webcast.im.UpdatedCartInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.toObject = function(e, t) {
            var r, o = {
                vertical: (r = t.getVertical()) && n.CartVertical.toObject(e, r),
                horizontal: (r = t.getHorizontal()) && n.CartHorizontal.toObject(e, r),
                globalCustomIcons: (r = t.getGlobalCustomIcons()) && n.GlobalCustomIcons.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t),
            o
        }
        ),
        proto.webcast.im.UpdatedCartInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpdatedCartInfo;
            return proto.webcast.im.UpdatedCartInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new n.CartVertical;
                    t.readMessage(r, n.CartVertical.deserializeBinaryFromReader),
                    e.setVertical(r);
                    break;
                case 2:
                    r = new n.CartHorizontal;
                    t.readMessage(r, n.CartHorizontal.deserializeBinaryFromReader),
                    e.setHorizontal(r);
                    break;
                case 3:
                    r = new n.GlobalCustomIcons;
                    t.readMessage(r, n.GlobalCustomIcons.deserializeBinaryFromReader),
                    e.setGlobalCustomIcons(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpdatedCartInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpdatedCartInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getVertical()) && t.writeMessage(1, r, n.CartVertical.serializeBinaryToWriter),
            null != (r = e.getHorizontal()) && t.writeMessage(2, r, n.CartHorizontal.serializeBinaryToWriter),
            null != (r = e.getGlobalCustomIcons()) && t.writeMessage(3, r, n.GlobalCustomIcons.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.getVertical = function() {
            return o.Message.getWrapperField(this, n.CartVertical, 1)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.setVertical = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.clearVertical = function() {
            return this.setVertical(void 0)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.hasVertical = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.getHorizontal = function() {
            return o.Message.getWrapperField(this, n.CartHorizontal, 2)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.setHorizontal = function(e) {
            return o.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.clearHorizontal = function() {
            return this.setHorizontal(void 0)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.hasHorizontal = function() {
            return null != o.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.getGlobalCustomIcons = function() {
            return o.Message.getWrapperField(this, n.GlobalCustomIcons, 3)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.setGlobalCustomIcons = function(e) {
            return o.Message.setWrapperField(this, 3, e)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.clearGlobalCustomIcons = function() {
            return this.setGlobalCustomIcons(void 0)
        }
        ,
        proto.webcast.im.UpdatedCartInfo.prototype.hasGlobalCustomIcons = function() {
            return null != o.Message.getField(this, 3)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryProductShortInfo.prototype.toObject = function(e) {
            return proto.webcast.im.LotteryProductShortInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.toObject = function(e, t) {
            var r = {
                productId: o.Message.getFieldWithDefault(t, 1, "0"),
                img: o.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.LotteryProductShortInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.LotteryProductShortInfo;
            return proto.webcast.im.LotteryProductShortInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setProductId(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setImg(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.LotteryProductShortInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getProductId(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            (r = e.getImg()).length > 0 && t.writeString(2, r)
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.prototype.getProductId = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.prototype.setProductId = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.prototype.getImg = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.LotteryProductShortInfo.prototype.setImg = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryInfo.prototype.toObject = function(e) {
            return proto.webcast.im.LotteryInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.LotteryInfo.toObject = function(e, t) {
            var r, i = {
                lotteryType: o.Message.getFieldWithDefault(t, 1, "0"),
                enterIcon: o.Message.getFieldWithDefault(t, 2, ""),
                icon: o.Message.getFieldWithDefault(t, 3, ""),
                activityId: o.Message.getFieldWithDefault(t, 4, ""),
                openTime: o.Message.getFieldWithDefault(t, 5, "0"),
                productInfo: (r = t.getProductInfo()) && proto.webcast.im.LotteryProductShortInfo.toObject(e, r)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.LotteryInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.LotteryInfo;
            return proto.webcast.im.LotteryInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.LotteryInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setLotteryType(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setEnterIcon(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setIcon(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setActivityId(r);
                    break;
                case 5:
                    r = t.readInt64String();
                    e.setOpenTime(r);
                    break;
                case 6:
                    r = new proto.webcast.im.LotteryProductShortInfo;
                    t.readMessage(r, proto.webcast.im.LotteryProductShortInfo.deserializeBinaryFromReader),
                    e.setProductInfo(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.LotteryInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.LotteryInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLotteryType(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            (r = e.getEnterIcon()).length > 0 && t.writeString(2, r),
            (r = e.getIcon()).length > 0 && t.writeString(3, r),
            (r = e.getActivityId()).length > 0 && t.writeString(4, r),
            r = e.getOpenTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(5, r),
            null != (r = e.getProductInfo()) && t.writeMessage(6, r, proto.webcast.im.LotteryProductShortInfo.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.getLotteryType = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.setLotteryType = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.getEnterIcon = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.setEnterIcon = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.getIcon = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.setIcon = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.getActivityId = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.setActivityId = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.getOpenTime = function() {
            return o.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.setOpenTime = function(e) {
            return o.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.getProductInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.LotteryProductShortInfo, 6)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.setProductInfo = function(e) {
            return o.Message.setWrapperField(this, 6, e)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.clearProductInfo = function() {
            return this.setProductInfo(void 0)
        }
        ,
        proto.webcast.im.LotteryInfo.prototype.hasProductInfo = function() {
            return null != o.Message.getField(this, 6)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryUnusualInfo.prototype.toObject = function(e) {
            return proto.webcast.im.LotteryUnusualInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.toObject = function(e, t) {
            var r = {
                productName: o.Message.getFieldWithDefault(t, 1, ""),
                openTime: o.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.LotteryUnusualInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.LotteryUnusualInfo;
            return proto.webcast.im.LotteryUnusualInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setProductName(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setOpenTime(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.LotteryUnusualInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getProductName()).length > 0 && t.writeString(1, r),
            r = e.getOpenTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r)
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.prototype.getProductName = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.prototype.setProductName = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.prototype.getOpenTime = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.LotteryUnusualInfo.prototype.setOpenTime = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WinLotteryAlert.prototype.toObject = function(e) {
            return proto.webcast.im.WinLotteryAlert.toObject(e, this)
        }
        ,
        proto.webcast.im.WinLotteryAlert.toObject = function(e, t) {
            var r = {
                title: o.Message.getFieldWithDefault(t, 1, ""),
                content: o.Message.getFieldWithDefault(t, 2, ""),
                buttonLabel: o.Message.getFieldWithDefault(t, 3, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.WinLotteryAlert.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.WinLotteryAlert;
            return proto.webcast.im.WinLotteryAlert.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.WinLotteryAlert.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setTitle(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setContent(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setButtonLabel(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.WinLotteryAlert.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.WinLotteryAlert.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getTitle()).length > 0 && t.writeString(1, r),
            (r = e.getContent()).length > 0 && t.writeString(2, r),
            (r = e.getButtonLabel()).length > 0 && t.writeString(3, r)
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.getTitle = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.setTitle = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.getContent = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.setContent = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.getButtonLabel = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.WinLotteryAlert.prototype.setButtonLabel = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.repeatedFields_ = [12],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.WinLotteryInfo.prototype.toObject = function(e) {
            return proto.webcast.im.WinLotteryInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.WinLotteryInfo.toObject = function(e, t) {
            var r, i = {
                title: o.Message.getFieldWithDefault(t, 1, ""),
                name: o.Message.getFieldWithDefault(t, 2, ""),
                img: o.Message.getFieldWithDefault(t, 3, ""),
                buttonLabel: o.Message.getFieldWithDefault(t, 4, ""),
                winRecordId: o.Message.getFieldWithDefault(t, 5, ""),
                activityId: o.Message.getFieldWithDefault(t, 6, ""),
                isAddressed: o.Message.getBooleanFieldWithDefault(t, 7, !1),
                alert: (r = t.getAlert()) && proto.webcast.im.WinLotteryAlert.toObject(e, r),
                isWin: o.Message.getBooleanFieldWithDefault(t, 9, !1),
                jumpUrl: o.Message.getFieldWithDefault(t, 10, ""),
                productId: o.Message.getFieldWithDefault(t, 11, "0"),
                activityPriceList: null == (r = o.Message.getRepeatedField(t, 12)) ? void 0 : r,
                buyTime: o.Message.getFieldWithDefault(t, 13, "0"),
                lotteryType: o.Message.getFieldWithDefault(t, 14, "0"),
                productIdStr: o.Message.getFieldWithDefault(t, 15, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.WinLotteryInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.WinLotteryInfo;
            return proto.webcast.im.WinLotteryInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.WinLotteryInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setTitle(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setName(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setImg(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setButtonLabel(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setWinRecordId(r);
                    break;
                case 6:
                    r = t.readString();
                    e.setActivityId(r);
                    break;
                case 7:
                    r = t.readBool();
                    e.setIsAddressed(r);
                    break;
                case 8:
                    r = new proto.webcast.im.WinLotteryAlert;
                    t.readMessage(r, proto.webcast.im.WinLotteryAlert.deserializeBinaryFromReader),
                    e.setAlert(r);
                    break;
                case 9:
                    r = t.readBool();
                    e.setIsWin(r);
                    break;
                case 10:
                    r = t.readString();
                    e.setJumpUrl(r);
                    break;
                case 11:
                    r = t.readInt64String();
                    e.setProductId(r);
                    break;
                case 12:
                    for (var o = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < o.length; i++)
                        e.addActivityPrice(o[i]);
                    break;
                case 13:
                    r = t.readInt64String();
                    e.setBuyTime(r);
                    break;
                case 14:
                    r = t.readInt64String();
                    e.setLotteryType(r);
                    break;
                case 15:
                    r = t.readString();
                    e.setProductIdStr(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.WinLotteryInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.WinLotteryInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getTitle()).length > 0 && t.writeString(1, r),
            (r = e.getName()).length > 0 && t.writeString(2, r),
            (r = e.getImg()).length > 0 && t.writeString(3, r),
            (r = e.getButtonLabel()).length > 0 && t.writeString(4, r),
            (r = e.getWinRecordId()).length > 0 && t.writeString(5, r),
            (r = e.getActivityId()).length > 0 && t.writeString(6, r),
            (r = e.getIsAddressed()) && t.writeBool(7, r),
            null != (r = e.getAlert()) && t.writeMessage(8, r, proto.webcast.im.WinLotteryAlert.serializeBinaryToWriter),
            (r = e.getIsWin()) && t.writeBool(9, r),
            (r = e.getJumpUrl()).length > 0 && t.writeString(10, r),
            r = e.getProductId(),
            0 !== parseInt(r, 10) && t.writeInt64String(11, r),
            (r = e.getActivityPriceList()).length > 0 && t.writePackedInt64String(12, r),
            r = e.getBuyTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(13, r),
            r = e.getLotteryType(),
            0 !== parseInt(r, 10) && t.writeInt64String(14, r),
            (r = e.getProductIdStr()).length > 0 && t.writeString(15, r)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getTitle = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setTitle = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getName = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setName = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getImg = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setImg = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getButtonLabel = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setButtonLabel = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getWinRecordId = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setWinRecordId = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getActivityId = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setActivityId = function(e) {
            return o.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getIsAddressed = function() {
            return o.Message.getBooleanFieldWithDefault(this, 7, !1)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setIsAddressed = function(e) {
            return o.Message.setProto3BooleanField(this, 7, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getAlert = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.WinLotteryAlert, 8)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setAlert = function(e) {
            return o.Message.setWrapperField(this, 8, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.clearAlert = function() {
            return this.setAlert(void 0)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.hasAlert = function() {
            return null != o.Message.getField(this, 8)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getIsWin = function() {
            return o.Message.getBooleanFieldWithDefault(this, 9, !1)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setIsWin = function(e) {
            return o.Message.setProto3BooleanField(this, 9, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getJumpUrl = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setJumpUrl = function(e) {
            return o.Message.setProto3StringField(this, 10, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getProductId = function() {
            return o.Message.getFieldWithDefault(this, 11, "0")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setProductId = function(e) {
            return o.Message.setProto3StringIntField(this, 11, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getActivityPriceList = function() {
            return o.Message.getRepeatedField(this, 12)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setActivityPriceList = function(e) {
            return o.Message.setField(this, 12, e || [])
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.addActivityPrice = function(e, t) {
            return o.Message.addToRepeatedField(this, 12, e, t)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.clearActivityPriceList = function() {
            return this.setActivityPriceList([])
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getBuyTime = function() {
            return o.Message.getFieldWithDefault(this, 13, "0")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setBuyTime = function(e) {
            return o.Message.setProto3StringIntField(this, 13, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getLotteryType = function() {
            return o.Message.getFieldWithDefault(this, 14, "0")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setLotteryType = function(e) {
            return o.Message.setProto3StringIntField(this, 14, e)
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.getProductIdStr = function() {
            return o.Message.getFieldWithDefault(this, 15, "")
        }
        ,
        proto.webcast.im.WinLotteryInfo.prototype.setProductIdStr = function(e) {
            return o.Message.setProto3StringField(this, 15, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.BenefitLabel.prototype.toObject = function(e) {
            return proto.webcast.im.BenefitLabel.toObject(e, this)
        }
        ,
        proto.webcast.im.BenefitLabel.toObject = function(e, t) {
            var r = {
                lefttext: o.Message.getFieldWithDefault(t, 1, ""),
                righttext: o.Message.getFieldWithDefault(t, 2, ""),
                textstyle: o.Message.getFieldWithDefault(t, 3, 0),
                colorstyle: o.Message.getFieldWithDefault(t, 4, 0),
                divline: o.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.BenefitLabel.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.BenefitLabel;
            return proto.webcast.im.BenefitLabel.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.BenefitLabel.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setLefttext(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setRighttext(r);
                    break;
                case 3:
                    r = t.readInt32();
                    e.setTextstyle(r);
                    break;
                case 4:
                    r = t.readInt32();
                    e.setColorstyle(r);
                    break;
                case 5:
                    r = t.readInt32();
                    e.setDivline(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.BenefitLabel.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.BenefitLabel.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getLefttext()).length > 0 && t.writeString(1, r),
            (r = e.getRighttext()).length > 0 && t.writeString(2, r),
            0 !== (r = e.getTextstyle()) && t.writeInt32(3, r),
            0 !== (r = e.getColorstyle()) && t.writeInt32(4, r),
            0 !== (r = e.getDivline()) && t.writeInt32(5, r)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.getLefttext = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.setLefttext = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.getRighttext = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.setRighttext = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.getTextstyle = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.setTextstyle = function(e) {
            return o.Message.setProto3IntField(this, 3, e)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.getColorstyle = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.setColorstyle = function(e) {
            return o.Message.setProto3IntField(this, 4, e)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.getDivline = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.webcast.im.BenefitLabel.prototype.setDivline = function(e) {
            return o.Message.setProto3IntField(this, 5, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.repeatedFields_ = [8],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LotteryInfoList.prototype.toObject = function(e) {
            return proto.webcast.im.LotteryInfoList.toObject(e, this)
        }
        ,
        proto.webcast.im.LotteryInfoList.toObject = function(e, t) {
            var r, i = {
                activityId: o.Message.getFieldWithDefault(t, 1, ""),
                taskType: o.Message.getFieldWithDefault(t, 2, "0"),
                openTime: o.Message.getFieldWithDefault(t, 3, "0"),
                userActivityStatus: o.Message.getFieldWithDefault(t, 4, "0"),
                winRecordId: o.Message.getFieldWithDefault(t, 5, ""),
                resultLabel: o.Message.getFieldWithDefault(t, 6, ""),
                buttonLabel: o.Message.getFieldWithDefault(t, 7, ""),
                textList: null == (r = o.Message.getRepeatedField(t, 8)) ? void 0 : r,
                jumpUrl: o.Message.getFieldWithDefault(t, 9, ""),
                lotteryType: o.Message.getFieldWithDefault(t, 10, "0"),
                elasticTitle: o.Message.getFieldWithDefault(t, 11, ""),
                benefitLabel: (r = t.getBenefitLabel()) && proto.webcast.im.BenefitLabel.toObject(e, r)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.LotteryInfoList.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.LotteryInfoList;
            return proto.webcast.im.LotteryInfoList.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.LotteryInfoList.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setActivityId(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setTaskType(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setOpenTime(r);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setUserActivityStatus(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setWinRecordId(r);
                    break;
                case 6:
                    r = t.readString();
                    e.setResultLabel(r);
                    break;
                case 7:
                    r = t.readString();
                    e.setButtonLabel(r);
                    break;
                case 8:
                    r = t.readString();
                    e.addText(r);
                    break;
                case 9:
                    r = t.readString();
                    e.setJumpUrl(r);
                    break;
                case 10:
                    r = t.readInt64String();
                    e.setLotteryType(r);
                    break;
                case 11:
                    r = t.readString();
                    e.setElasticTitle(r);
                    break;
                case 12:
                    r = new proto.webcast.im.BenefitLabel;
                    t.readMessage(r, proto.webcast.im.BenefitLabel.deserializeBinaryFromReader),
                    e.setBenefitLabel(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.LotteryInfoList.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.LotteryInfoList.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getActivityId()).length > 0 && t.writeString(1, r),
            r = e.getTaskType(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            r = e.getOpenTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            r = e.getUserActivityStatus(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r),
            (r = e.getWinRecordId()).length > 0 && t.writeString(5, r),
            (r = e.getResultLabel()).length > 0 && t.writeString(6, r),
            (r = e.getButtonLabel()).length > 0 && t.writeString(7, r),
            (r = e.getTextList()).length > 0 && t.writeRepeatedString(8, r),
            (r = e.getJumpUrl()).length > 0 && t.writeString(9, r),
            r = e.getLotteryType(),
            0 !== parseInt(r, 10) && t.writeInt64String(10, r),
            (r = e.getElasticTitle()).length > 0 && t.writeString(11, r),
            null != (r = e.getBenefitLabel()) && t.writeMessage(12, r, proto.webcast.im.BenefitLabel.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getActivityId = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setActivityId = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getTaskType = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setTaskType = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getOpenTime = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setOpenTime = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getUserActivityStatus = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setUserActivityStatus = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getWinRecordId = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setWinRecordId = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getResultLabel = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setResultLabel = function(e) {
            return o.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getButtonLabel = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setButtonLabel = function(e) {
            return o.Message.setProto3StringField(this, 7, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getTextList = function() {
            return o.Message.getRepeatedField(this, 8)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setTextList = function(e) {
            return o.Message.setField(this, 8, e || [])
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.addText = function(e, t) {
            return o.Message.addToRepeatedField(this, 8, e, t)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.clearTextList = function() {
            return this.setTextList([])
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getJumpUrl = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setJumpUrl = function(e) {
            return o.Message.setProto3StringField(this, 9, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getLotteryType = function() {
            return o.Message.getFieldWithDefault(this, 10, "0")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setLotteryType = function(e) {
            return o.Message.setProto3StringIntField(this, 10, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getElasticTitle = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setElasticTitle = function(e) {
            return o.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.getBenefitLabel = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.BenefitLabel, 12)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.setBenefitLabel = function(e) {
            return o.Message.setWrapperField(this, 12, e)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.clearBenefitLabel = function() {
            return this.setBenefitLabel(void 0)
        }
        ,
        proto.webcast.im.LotteryInfoList.prototype.hasBenefitLabel = function() {
            return null != o.Message.getField(this, 12)
        }
        ,
        proto.webcast.im.HotAtmosphere.repeatedFields_ = [9, 10],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.HotAtmosphere.prototype.toObject = function(e) {
            return proto.webcast.im.HotAtmosphere.toObject(e, this)
        }
        ,
        proto.webcast.im.HotAtmosphere.toObject = function(e, t) {
            var r, i = {
                img: o.Message.getFieldWithDefault(t, 1, ""),
                saleNum: o.Message.getFieldWithDefault(t, 2, ""),
                type: o.Message.getFieldWithDefault(t, 3, "0"),
                num: o.Message.getFieldWithDefault(t, 4, ""),
                bgColor: o.Message.getFieldWithDefault(t, 5, ""),
                borderColor: o.Message.getFieldWithDefault(t, 6, ""),
                leftMargin: o.Message.getFieldWithDefault(t, 7, "0"),
                uiType: o.Message.getFieldWithDefault(t, 8, "0"),
                bgColorsList: null == (r = o.Message.getRepeatedField(t, 9)) ? void 0 : r,
                borderColorsList: null == (r = o.Message.getRepeatedField(t, 10)) ? void 0 : r,
                topImg: o.Message.getFieldWithDefault(t, 11, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.HotAtmosphere.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.HotAtmosphere;
            return proto.webcast.im.HotAtmosphere.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.HotAtmosphere.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setImg(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setSaleNum(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setType(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setNum(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setBgColor(r);
                    break;
                case 6:
                    r = t.readString();
                    e.setBorderColor(r);
                    break;
                case 7:
                    r = t.readInt64String();
                    e.setLeftMargin(r);
                    break;
                case 8:
                    r = t.readInt64String();
                    e.setUiType(r);
                    break;
                case 9:
                    r = t.readString();
                    e.addBgColors(r);
                    break;
                case 10:
                    r = t.readString();
                    e.addBorderColors(r);
                    break;
                case 11:
                    r = t.readString();
                    e.setTopImg(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.HotAtmosphere.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.HotAtmosphere.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getImg()).length > 0 && t.writeString(1, r),
            (r = e.getSaleNum()).length > 0 && t.writeString(2, r),
            r = e.getType(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            (r = e.getNum()).length > 0 && t.writeString(4, r),
            (r = e.getBgColor()).length > 0 && t.writeString(5, r),
            (r = e.getBorderColor()).length > 0 && t.writeString(6, r),
            r = e.getLeftMargin(),
            0 !== parseInt(r, 10) && t.writeInt64String(7, r),
            r = e.getUiType(),
            0 !== parseInt(r, 10) && t.writeInt64String(8, r),
            (r = e.getBgColorsList()).length > 0 && t.writeRepeatedString(9, r),
            (r = e.getBorderColorsList()).length > 0 && t.writeRepeatedString(10, r),
            (r = e.getTopImg()).length > 0 && t.writeString(11, r)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getImg = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setImg = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getSaleNum = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setSaleNum = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getType = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setType = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getNum = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setNum = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getBgColor = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setBgColor = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getBorderColor = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setBorderColor = function(e) {
            return o.Message.setProto3StringField(this, 6, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getLeftMargin = function() {
            return o.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setLeftMargin = function(e) {
            return o.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getUiType = function() {
            return o.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setUiType = function(e) {
            return o.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getBgColorsList = function() {
            return o.Message.getRepeatedField(this, 9)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setBgColorsList = function(e) {
            return o.Message.setField(this, 9, e || [])
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.addBgColors = function(e, t) {
            return o.Message.addToRepeatedField(this, 9, e, t)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.clearBgColorsList = function() {
            return this.setBgColorsList([])
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getBorderColorsList = function() {
            return o.Message.getRepeatedField(this, 10)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setBorderColorsList = function(e) {
            return o.Message.setField(this, 10, e || [])
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.addBorderColors = function(e, t) {
            return o.Message.addToRepeatedField(this, 10, e, t)
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.clearBorderColorsList = function() {
            return this.setBorderColorsList([])
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.getTopImg = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.HotAtmosphere.prototype.setTopImg = function(e) {
            return o.Message.setProto3StringField(this, 11, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.UpIcon.prototype.toObject = function(e) {
            return proto.webcast.im.UpIcon.toObject(e, this)
        }
        ,
        proto.webcast.im.UpIcon.toObject = function(e, t) {
            var r = {
                name: o.Message.getFieldWithDefault(t, 1, ""),
                upIcon: o.Message.getFieldWithDefault(t, 2, ""),
                upDesc: o.Message.getFieldWithDefault(t, 3, ""),
                publicScreenNotice: o.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.UpIcon.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.UpIcon;
            return proto.webcast.im.UpIcon.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.UpIcon.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setName(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setUpIcon(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setUpDesc(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setPublicScreenNotice(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.UpIcon.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.UpIcon.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.UpIcon.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getName()).length > 0 && t.writeString(1, r),
            (r = e.getUpIcon()).length > 0 && t.writeString(2, r),
            (r = e.getUpDesc()).length > 0 && t.writeString(3, r),
            (r = e.getPublicScreenNotice()).length > 0 && t.writeString(4, r)
        }
        ,
        proto.webcast.im.UpIcon.prototype.getName = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.UpIcon.prototype.setName = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.UpIcon.prototype.getUpIcon = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.UpIcon.prototype.setUpIcon = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.UpIcon.prototype.getUpDesc = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.UpIcon.prototype.setUpDesc = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.UpIcon.prototype.getPublicScreenNotice = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.UpIcon.prototype.setPublicScreenNotice = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.FilterSwitchChangeData.prototype.toObject = function(e) {
            return proto.webcast.im.FilterSwitchChangeData.toObject(e, this)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.toObject = function(e, t) {
            var r, i = {
                enable: o.Message.getBooleanFieldWithDefault(t, 1, !1),
                upIcon: (r = t.getUpIcon()) && proto.webcast.im.UpIcon.toObject(e, r)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.FilterSwitchChangeData.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.FilterSwitchChangeData;
            return proto.webcast.im.FilterSwitchChangeData.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readBool();
                    e.setEnable(r);
                    break;
                case 2:
                    r = new proto.webcast.im.UpIcon;
                    t.readMessage(r, proto.webcast.im.UpIcon.deserializeBinaryFromReader),
                    e.setUpIcon(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.FilterSwitchChangeData.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getEnable()) && t.writeBool(1, r),
            null != (r = e.getUpIcon()) && t.writeMessage(2, r, proto.webcast.im.UpIcon.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.getEnable = function() {
            return o.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.setEnable = function(e) {
            return o.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.getUpIcon = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpIcon, 2)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.setUpIcon = function(e) {
            return o.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.clearUpIcon = function() {
            return this.setUpIcon(void 0)
        }
        ,
        proto.webcast.im.FilterSwitchChangeData.prototype.hasUpIcon = function() {
            return null != o.Message.getField(this, 2)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.RoomTagOfflineInfo.prototype.toObject = function(e) {
            return proto.webcast.im.RoomTagOfflineInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.toObject = function(e, t) {
            var r = {
                tagType: o.Message.getFieldWithDefault(t, 1, "0"),
                userToast: o.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.RoomTagOfflineInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.RoomTagOfflineInfo;
            return proto.webcast.im.RoomTagOfflineInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setTagType(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setUserToast(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.RoomTagOfflineInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getTagType(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            (r = e.getUserToast()).length > 0 && t.writeString(2, r)
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.prototype.getTagType = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.prototype.setTagType = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.prototype.getUserToast = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.RoomTagOfflineInfo.prototype.setUserToast = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.InteractionData.repeatedFields_ = [2],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractionData.prototype.toObject = function(e) {
            return proto.webcast.im.InteractionData.toObject(e, this)
        }
        ,
        proto.webcast.im.InteractionData.toObject = function(e, t) {
            var r = {
                full: o.Message.getBooleanFieldWithDefault(t, 1, !1),
                contentsList: o.Message.toObjectList(t.getContentsList(), proto.webcast.im.InteractionContent.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.InteractionData.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.InteractionData;
            return proto.webcast.im.InteractionData.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.InteractionData.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readBool();
                    e.setFull(r);
                    break;
                case 2:
                    r = new proto.webcast.im.InteractionContent;
                    t.readMessage(r, proto.webcast.im.InteractionContent.deserializeBinaryFromReader),
                    e.addContents(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.InteractionData.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.InteractionData.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.InteractionData.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getFull()) && t.writeBool(1, r),
            (r = e.getContentsList()).length > 0 && t.writeRepeatedMessage(2, r, proto.webcast.im.InteractionContent.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.InteractionData.prototype.getFull = function() {
            return o.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.webcast.im.InteractionData.prototype.setFull = function(e) {
            return o.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        proto.webcast.im.InteractionData.prototype.getContentsList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.webcast.im.InteractionContent, 2)
        }
        ,
        proto.webcast.im.InteractionData.prototype.setContentsList = function(e) {
            return o.Message.setRepeatedWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.InteractionData.prototype.addContents = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 2, e, proto.webcast.im.InteractionContent, t)
        }
        ,
        proto.webcast.im.InteractionData.prototype.clearContentsList = function() {
            return this.setContentsList([])
        }
        ,
        proto.webcast.im.InteractionContent.repeatedFields_ = [4],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractionContent.prototype.toObject = function(e) {
            return proto.webcast.im.InteractionContent.toObject(e, this)
        }
        ,
        proto.webcast.im.InteractionContent.toObject = function(e, t) {
            var r, i = {
                check: (r = t.getCheck()) && proto.webcast.im.InteractionContentCheck.toObject(e, r),
                priority: o.Message.getFieldWithDefault(t, 2, 0),
                loopCount: o.Message.getFieldWithDefault(t, 3, 0),
                contentList: o.Message.toObjectList(t.getContentList(), proto.webcast.im.InteractionElement.toObject, e),
                eventParamMap: (r = t.getEventParamMap()) ? r.toObject(e, void 0) : []
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.InteractionContent.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.InteractionContent;
            return proto.webcast.im.InteractionContent.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.InteractionContent.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new proto.webcast.im.InteractionContentCheck;
                    t.readMessage(r, proto.webcast.im.InteractionContentCheck.deserializeBinaryFromReader),
                    e.setCheck(r);
                    break;
                case 2:
                    r = t.readInt32();
                    e.setPriority(r);
                    break;
                case 3:
                    r = t.readInt32();
                    e.setLoopCount(r);
                    break;
                case 4:
                    r = new proto.webcast.im.InteractionElement;
                    t.readMessage(r, proto.webcast.im.InteractionElement.deserializeBinaryFromReader),
                    e.addContent(r);
                    break;
                case 5:
                    r = e.getEventParamMap();
                    t.readMessage(r, (function(e, t) {
                        o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readString, null, "", "")
                    }
                    ));
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.InteractionContent.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.InteractionContent.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.InteractionContent.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCheck()) && t.writeMessage(1, r, proto.webcast.im.InteractionContentCheck.serializeBinaryToWriter),
            0 !== (r = e.getPriority()) && t.writeInt32(2, r),
            0 !== (r = e.getLoopCount()) && t.writeInt32(3, r),
            (r = e.getContentList()).length > 0 && t.writeRepeatedMessage(4, r, proto.webcast.im.InteractionElement.serializeBinaryToWriter),
            (r = e.getEventParamMap(!0)) && r.getLength() > 0 && r.serializeBinary(5, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeString)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.getCheck = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.InteractionContentCheck, 1)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.setCheck = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.clearCheck = function() {
            return this.setCheck(void 0)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.hasCheck = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.getPriority = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.setPriority = function(e) {
            return o.Message.setProto3IntField(this, 2, e)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.getLoopCount = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.setLoopCount = function(e) {
            return o.Message.setProto3IntField(this, 3, e)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.getContentList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.webcast.im.InteractionElement, 4)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.setContentList = function(e) {
            return o.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.addContent = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.InteractionElement, t)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.clearContentList = function() {
            return this.setContentList([])
        }
        ,
        proto.webcast.im.InteractionContent.prototype.getEventParamMap = function(e) {
            return o.Message.getMapField(this, 5, e, null)
        }
        ,
        proto.webcast.im.InteractionContent.prototype.clearEventParamMap = function() {
            return this.getEventParamMap().clear(),
            this
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractionContentCheck.prototype.toObject = function(e) {
            return proto.webcast.im.InteractionContentCheck.toObject(e, this)
        }
        ,
        proto.webcast.im.InteractionContentCheck.toObject = function(e, t) {
            var r = {
                productId: o.Message.getFieldWithDefault(t, 1, "0"),
                index: o.Message.getFieldWithDefault(t, 2, 0)
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.InteractionContentCheck.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.InteractionContentCheck;
            return proto.webcast.im.InteractionContentCheck.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.InteractionContentCheck.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setProductId(r);
                    break;
                case 2:
                    r = t.readInt32();
                    e.setIndex(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.InteractionContentCheck.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.InteractionContentCheck.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.InteractionContentCheck.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getProductId(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            0 !== (r = e.getIndex()) && t.writeInt32(2, r)
        }
        ,
        proto.webcast.im.InteractionContentCheck.prototype.getProductId = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.InteractionContentCheck.prototype.setProductId = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.InteractionContentCheck.prototype.getIndex = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.InteractionContentCheck.prototype.setIndex = function(e) {
            return o.Message.setProto3IntField(this, 2, e)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractionElement.prototype.toObject = function(e) {
            return proto.webcast.im.InteractionElement.toObject(e, this)
        }
        ,
        proto.webcast.im.InteractionElement.toObject = function(e, t) {
            var r, i = {
                elementType: o.Message.getFieldWithDefault(t, 1, 0),
                text: o.Message.getFieldWithDefault(t, 2, ""),
                textColor: o.Message.getFieldWithDefault(t, 3, ""),
                avatars: (r = t.getAvatars()) && proto.webcast.im.InteractionAvatar.toObject(e, r),
                blankWidth: o.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.InteractionElement.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.InteractionElement;
            return proto.webcast.im.InteractionElement.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.InteractionElement.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readEnum();
                    e.setElementType(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setText(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setTextColor(r);
                    break;
                case 4:
                    r = new proto.webcast.im.InteractionAvatar;
                    t.readMessage(r, proto.webcast.im.InteractionAvatar.deserializeBinaryFromReader),
                    e.setAvatars(r);
                    break;
                case 5:
                    r = t.readInt32();
                    e.setBlankWidth(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.InteractionElement.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.InteractionElement.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.InteractionElement.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            0 !== (r = e.getElementType()) && t.writeEnum(1, r),
            (r = e.getText()).length > 0 && t.writeString(2, r),
            (r = e.getTextColor()).length > 0 && t.writeString(3, r),
            null != (r = e.getAvatars()) && t.writeMessage(4, r, proto.webcast.im.InteractionAvatar.serializeBinaryToWriter),
            0 !== (r = e.getBlankWidth()) && t.writeInt32(5, r)
        }
        ,
        proto.webcast.im.InteractionElement.ElementType = {
            UNKNOWN: 0,
            AVATARS: 1,
            TEXT: 2,
            BLANK: 3
        },
        proto.webcast.im.InteractionElement.prototype.getElementType = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.setElementType = function(e) {
            return o.Message.setProto3EnumField(this, 1, e)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.getText = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.InteractionElement.prototype.setText = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.getTextColor = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.InteractionElement.prototype.setTextColor = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.getAvatars = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.InteractionAvatar, 4)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.setAvatars = function(e) {
            return o.Message.setWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.clearAvatars = function() {
            return this.setAvatars(void 0)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.hasAvatars = function() {
            return null != o.Message.getField(this, 4)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.getBlankWidth = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.webcast.im.InteractionElement.prototype.setBlankWidth = function(e) {
            return o.Message.setProto3IntField(this, 5, e)
        }
        ,
        proto.webcast.im.InteractionAvatar.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.InteractionAvatar.prototype.toObject = function(e) {
            return proto.webcast.im.InteractionAvatar.toObject(e, this)
        }
        ,
        proto.webcast.im.InteractionAvatar.toObject = function(e, t) {
            var r, i = {
                urlListList: null == (r = o.Message.getRepeatedField(t, 1)) ? void 0 : r,
                width: o.Message.getFieldWithDefault(t, 2, 0),
                height: o.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.InteractionAvatar.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.InteractionAvatar;
            return proto.webcast.im.InteractionAvatar.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.InteractionAvatar.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.addUrlList(r);
                    break;
                case 2:
                    r = t.readInt32();
                    e.setWidth(r);
                    break;
                case 3:
                    r = t.readInt32();
                    e.setHeight(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.InteractionAvatar.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.InteractionAvatar.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getUrlListList()).length > 0 && t.writeRepeatedString(1, r),
            0 !== (r = e.getWidth()) && t.writeInt32(2, r),
            0 !== (r = e.getHeight()) && t.writeInt32(3, r)
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.getUrlListList = function() {
            return o.Message.getRepeatedField(this, 1)
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.setUrlListList = function(e) {
            return o.Message.setField(this, 1, e || [])
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.addUrlList = function(e, t) {
            return o.Message.addToRepeatedField(this, 1, e, t)
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.clearUrlListList = function() {
            return this.setUrlListList([])
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.getWidth = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.setWidth = function(e) {
            return o.Message.setProto3IntField(this, 2, e)
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.getHeight = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.webcast.im.InteractionAvatar.prototype.setHeight = function(e) {
            return o.Message.setProto3IntField(this, 3, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.repeatedFields_ = [4, 7, 9],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LiveShoppingMessage.prototype.toObject = function(e) {
            return proto.webcast.im.LiveShoppingMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                msgType: o.Message.getFieldWithDefault(t, 2, 0),
                promotionId: o.Message.getFieldWithDefault(t, 3, "0"),
                targetUidList: null == (r = o.Message.getRepeatedField(t, 4)) ? void 0 : r,
                bubbleType: o.Message.getFieldWithDefault(t, 5, 0),
                screenshotTimestamp: o.Message.getFieldWithDefault(t, 6, "0"),
                secTargetUidList: null == (r = o.Message.getRepeatedField(t, 7)) ? void 0 : r,
                ecomNotice: o.Message.getFieldWithDefault(t, 8, ""),
                updatedProductIdsList: null == (r = o.Message.getRepeatedField(t, 9)) ? void 0 : r,
                updateType: o.Message.getFieldWithDefault(t, 10, 0),
                updatedProductInfo: (r = t.getUpdatedProductInfo()) && proto.webcast.im.UpdatedProductInfo.toObject(e, r),
                soldOut: o.Message.getBooleanFieldWithDefault(t, 12, !1),
                updatedCouponInfo: (r = t.getUpdatedCouponInfo()) && proto.webcast.im.UpdatedCouponInfo.toObject(e, r),
                updatedCampaignInfo: (r = t.getUpdatedCampaignInfo()) && proto.webcast.im.UpdatedCampaignInfo.toObject(e, r),
                updateTimestamp: o.Message.getFieldWithDefault(t, 15, "0"),
                buttonLabel: o.Message.getFieldWithDefault(t, 16, ""),
                promotionsNum: o.Message.getFieldWithDefault(t, 17, "0"),
                updateSkuInfo: (r = t.getUpdateSkuInfo()) && proto.webcast.im.UpdatedSkuInfo.toObject(e, r),
                updatedCommentaryVideoInfo: (r = t.getUpdatedCommentaryVideoInfo()) && proto.webcast.im.UpdatedCommentaryVideoInfo.toObject(e, r),
                updatedGroupInfo: (r = t.getUpdatedGroupInfo()) && proto.webcast.im.UpdatedGroupInfo.toObject(e, r),
                commerceAuthorityChangeToast: o.Message.getFieldWithDefault(t, 21, ""),
                traceTimeMetric: (r = t.getTraceTimeMetric()) && proto.webcast.im.TraceTimeMetric.toObject(e, r),
                auctionSuccess: (r = t.getAuctionSuccess()) && proto.webcast.im.AuctionSuccess.toObject(e, r),
                auctionInfo: (r = t.getAuctionInfo()) && proto.webcast.im.AuctionInfo.toObject(e, r),
                redpackActivityInfo: (r = t.getRedpackActivityInfo()) && proto.webcast.im.RedpackActivityInfo.toObject(e, r),
                updatedCartInfo: (r = t.getUpdatedCartInfo()) && proto.webcast.im.UpdatedCartInfo.toObject(e, r),
                lotteryInfo: (r = t.getLotteryInfo()) && proto.webcast.im.LotteryInfo.toObject(e, r),
                winLotteryinfo: (r = t.getWinLotteryinfo()) && proto.webcast.im.WinLotteryInfo.toObject(e, r),
                lotteryInfoList: (r = t.getLotteryInfoList()) && proto.webcast.im.LotteryInfoList.toObject(e, r),
                hotAtmosphere: (r = t.getHotAtmosphere()) && proto.webcast.im.HotAtmosphere.toObject(e, r),
                updateToast: o.Message.getFieldWithDefault(t, 31, ""),
                canSold: o.Message.getBooleanFieldWithDefault(t, 32, !1),
                logicalClock: o.Message.getFieldWithDefault(t, 33, "0"),
                roomTagOfflineInfo: (r = t.getRoomTagOfflineInfo()) && proto.webcast.im.RoomTagOfflineInfo.toObject(e, r),
                filterSwitchChangeData: (r = t.getFilterSwitchChangeData()) && proto.webcast.im.FilterSwitchChangeData.toObject(e, r),
                interactionData: (r = t.getInteractionData()) && proto.webcast.im.InteractionData.toObject(e, r)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.LiveShoppingMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.LiveShoppingMessage;
            return proto.webcast.im.LiveShoppingMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readEnum();
                    e.setMsgType(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setPromotionId(r);
                    break;
                case 4:
                    for (var o = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < o.length; i++)
                        e.addTargetUid(o[i]);
                    break;
                case 5:
                    r = t.readEnum();
                    e.setBubbleType(r);
                    break;
                case 6:
                    r = t.readInt64String();
                    e.setScreenshotTimestamp(r);
                    break;
                case 7:
                    r = t.readString();
                    e.addSecTargetUid(r);
                    break;
                case 8:
                    r = t.readString();
                    e.setEcomNotice(r);
                    break;
                case 9:
                    for (o = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()],
                    i = 0; i < o.length; i++)
                        e.addUpdatedProductIds(o[i]);
                    break;
                case 10:
                    r = t.readEnum();
                    e.setUpdateType(r);
                    break;
                case 11:
                    r = new proto.webcast.im.UpdatedProductInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedProductInfo.deserializeBinaryFromReader),
                    e.setUpdatedProductInfo(r);
                    break;
                case 12:
                    r = t.readBool();
                    e.setSoldOut(r);
                    break;
                case 13:
                    r = new proto.webcast.im.UpdatedCouponInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedCouponInfo.deserializeBinaryFromReader),
                    e.setUpdatedCouponInfo(r);
                    break;
                case 14:
                    r = new proto.webcast.im.UpdatedCampaignInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedCampaignInfo.deserializeBinaryFromReader),
                    e.setUpdatedCampaignInfo(r);
                    break;
                case 15:
                    r = t.readInt64String();
                    e.setUpdateTimestamp(r);
                    break;
                case 16:
                    r = t.readString();
                    e.setButtonLabel(r);
                    break;
                case 17:
                    r = t.readInt64String();
                    e.setPromotionsNum(r);
                    break;
                case 18:
                    r = new proto.webcast.im.UpdatedSkuInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedSkuInfo.deserializeBinaryFromReader),
                    e.setUpdateSkuInfo(r);
                    break;
                case 19:
                    r = new proto.webcast.im.UpdatedCommentaryVideoInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedCommentaryVideoInfo.deserializeBinaryFromReader),
                    e.setUpdatedCommentaryVideoInfo(r);
                    break;
                case 20:
                    r = new proto.webcast.im.UpdatedGroupInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedGroupInfo.deserializeBinaryFromReader),
                    e.setUpdatedGroupInfo(r);
                    break;
                case 21:
                    r = t.readString();
                    e.setCommerceAuthorityChangeToast(r);
                    break;
                case 22:
                    r = new proto.webcast.im.TraceTimeMetric;
                    t.readMessage(r, proto.webcast.im.TraceTimeMetric.deserializeBinaryFromReader),
                    e.setTraceTimeMetric(r);
                    break;
                case 23:
                    r = new proto.webcast.im.AuctionSuccess;
                    t.readMessage(r, proto.webcast.im.AuctionSuccess.deserializeBinaryFromReader),
                    e.setAuctionSuccess(r);
                    break;
                case 24:
                    r = new proto.webcast.im.AuctionInfo;
                    t.readMessage(r, proto.webcast.im.AuctionInfo.deserializeBinaryFromReader),
                    e.setAuctionInfo(r);
                    break;
                case 25:
                    r = new proto.webcast.im.RedpackActivityInfo;
                    t.readMessage(r, proto.webcast.im.RedpackActivityInfo.deserializeBinaryFromReader),
                    e.setRedpackActivityInfo(r);
                    break;
                case 26:
                    r = new proto.webcast.im.UpdatedCartInfo;
                    t.readMessage(r, proto.webcast.im.UpdatedCartInfo.deserializeBinaryFromReader),
                    e.setUpdatedCartInfo(r);
                    break;
                case 27:
                    r = new proto.webcast.im.LotteryInfo;
                    t.readMessage(r, proto.webcast.im.LotteryInfo.deserializeBinaryFromReader),
                    e.setLotteryInfo(r);
                    break;
                case 28:
                    r = new proto.webcast.im.WinLotteryInfo;
                    t.readMessage(r, proto.webcast.im.WinLotteryInfo.deserializeBinaryFromReader),
                    e.setWinLotteryinfo(r);
                    break;
                case 29:
                    r = new proto.webcast.im.LotteryInfoList;
                    t.readMessage(r, proto.webcast.im.LotteryInfoList.deserializeBinaryFromReader),
                    e.setLotteryInfoList(r);
                    break;
                case 30:
                    r = new proto.webcast.im.HotAtmosphere;
                    t.readMessage(r, proto.webcast.im.HotAtmosphere.deserializeBinaryFromReader),
                    e.setHotAtmosphere(r);
                    break;
                case 31:
                    r = t.readString();
                    e.setUpdateToast(r);
                    break;
                case 32:
                    r = t.readBool();
                    e.setCanSold(r);
                    break;
                case 33:
                    r = t.readInt64String();
                    e.setLogicalClock(r);
                    break;
                case 34:
                    r = new proto.webcast.im.RoomTagOfflineInfo;
                    t.readMessage(r, proto.webcast.im.RoomTagOfflineInfo.deserializeBinaryFromReader),
                    e.setRoomTagOfflineInfo(r);
                    break;
                case 35:
                    r = new proto.webcast.im.FilterSwitchChangeData;
                    t.readMessage(r, proto.webcast.im.FilterSwitchChangeData.deserializeBinaryFromReader),
                    e.setFilterSwitchChangeData(r);
                    break;
                case 36:
                    r = new proto.webcast.im.InteractionData;
                    t.readMessage(r, proto.webcast.im.InteractionData.deserializeBinaryFromReader),
                    e.setInteractionData(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.LiveShoppingMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.LiveShoppingMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            0 !== (r = e.getMsgType()) && t.writeEnum(2, r),
            r = e.getPromotionId(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            (r = e.getTargetUidList()).length > 0 && t.writePackedInt64String(4, r),
            0 !== (r = e.getBubbleType()) && t.writeEnum(5, r),
            r = e.getScreenshotTimestamp(),
            0 !== parseInt(r, 10) && t.writeInt64String(6, r),
            (r = e.getSecTargetUidList()).length > 0 && t.writeRepeatedString(7, r),
            (r = e.getEcomNotice()).length > 0 && t.writeString(8, r),
            (r = e.getUpdatedProductIdsList()).length > 0 && t.writePackedInt64String(9, r),
            0 !== (r = e.getUpdateType()) && t.writeEnum(10, r),
            null != (r = e.getUpdatedProductInfo()) && t.writeMessage(11, r, proto.webcast.im.UpdatedProductInfo.serializeBinaryToWriter),
            (r = e.getSoldOut()) && t.writeBool(12, r),
            null != (r = e.getUpdatedCouponInfo()) && t.writeMessage(13, r, proto.webcast.im.UpdatedCouponInfo.serializeBinaryToWriter),
            null != (r = e.getUpdatedCampaignInfo()) && t.writeMessage(14, r, proto.webcast.im.UpdatedCampaignInfo.serializeBinaryToWriter),
            r = e.getUpdateTimestamp(),
            0 !== parseInt(r, 10) && t.writeInt64String(15, r),
            (r = e.getButtonLabel()).length > 0 && t.writeString(16, r),
            r = e.getPromotionsNum(),
            0 !== parseInt(r, 10) && t.writeInt64String(17, r),
            null != (r = e.getUpdateSkuInfo()) && t.writeMessage(18, r, proto.webcast.im.UpdatedSkuInfo.serializeBinaryToWriter),
            null != (r = e.getUpdatedCommentaryVideoInfo()) && t.writeMessage(19, r, proto.webcast.im.UpdatedCommentaryVideoInfo.serializeBinaryToWriter),
            null != (r = e.getUpdatedGroupInfo()) && t.writeMessage(20, r, proto.webcast.im.UpdatedGroupInfo.serializeBinaryToWriter),
            (r = e.getCommerceAuthorityChangeToast()).length > 0 && t.writeString(21, r),
            null != (r = e.getTraceTimeMetric()) && t.writeMessage(22, r, proto.webcast.im.TraceTimeMetric.serializeBinaryToWriter),
            null != (r = e.getAuctionSuccess()) && t.writeMessage(23, r, proto.webcast.im.AuctionSuccess.serializeBinaryToWriter),
            null != (r = e.getAuctionInfo()) && t.writeMessage(24, r, proto.webcast.im.AuctionInfo.serializeBinaryToWriter),
            null != (r = e.getRedpackActivityInfo()) && t.writeMessage(25, r, proto.webcast.im.RedpackActivityInfo.serializeBinaryToWriter),
            null != (r = e.getUpdatedCartInfo()) && t.writeMessage(26, r, proto.webcast.im.UpdatedCartInfo.serializeBinaryToWriter),
            null != (r = e.getLotteryInfo()) && t.writeMessage(27, r, proto.webcast.im.LotteryInfo.serializeBinaryToWriter),
            null != (r = e.getWinLotteryinfo()) && t.writeMessage(28, r, proto.webcast.im.WinLotteryInfo.serializeBinaryToWriter),
            null != (r = e.getLotteryInfoList()) && t.writeMessage(29, r, proto.webcast.im.LotteryInfoList.serializeBinaryToWriter),
            null != (r = e.getHotAtmosphere()) && t.writeMessage(30, r, proto.webcast.im.HotAtmosphere.serializeBinaryToWriter),
            (r = e.getUpdateToast()).length > 0 && t.writeString(31, r),
            (r = e.getCanSold()) && t.writeBool(32, r),
            r = e.getLogicalClock(),
            0 !== parseInt(r, 10) && t.writeInt64String(33, r),
            null != (r = e.getRoomTagOfflineInfo()) && t.writeMessage(34, r, proto.webcast.im.RoomTagOfflineInfo.serializeBinaryToWriter),
            null != (r = e.getFilterSwitchChangeData()) && t.writeMessage(35, r, proto.webcast.im.FilterSwitchChangeData.serializeBinaryToWriter),
            null != (r = e.getInteractionData()) && t.writeMessage(36, r, proto.webcast.im.InteractionData.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.MsgType = {
            HAS_PROMOTIONS: 0,
            NO_PROMOTIONS: 1,
            BUBBLE_PROMOTION: 2,
            CANCEL_CURRENT_PROMOTION: 3,
            DIALOG_PROMOTION: 4,
            AUTHOR_SCREEN_SHOT: 5,
            ECOM_NOTICE: 6,
            UPDATE_PRODUCT_INFO: 7,
            FLASH_BUY: 8,
            NO_FLASH_BUY: 9,
            UP_CART: 10,
            DOWN_CART: 11,
            UPDATE_GROUP_INFO: 12,
            HAS_COMMERCE_AUTHORITY: 13,
            NO_COMMERCE_AUTHORITY: 14,
            AUCTION_BID: 15,
            AUCTION_SUCCESS: 16,
            AUCTION_STATUS_CHANGE: 17,
            REDPACK_PREHEAT: 18,
            REDPACK_STOP: 19,
            LOTTERY_UP: 20,
            LOTTERY_DOWN: 21,
            LOTTERY_OPEN: 22,
            LOTTERY_WIN: 23,
            SHOP_VIP: 24,
            ROOM_TAG_OFFLINE: 25,
            FILTER_SWITCH_CHANGE: 26,
            PRODUCT_SHOP_INTERACTION: 27
        },
        proto.webcast.im.LiveShoppingMessage.BubbleType = {
            NORMAL: 0,
            ALL_FLASH: 1
        },
        proto.webcast.im.LiveShoppingMessage.UpdateType = {
            PRICE: 0,
            SOLD_OUT: 1,
            COUPON: 2,
            CAMPAIGN: 3,
            COMMENTARY_VIDEO: 4,
            GROUP_INFO: 5,
            PRODUCT: 6,
            PRODUCT_COUPON: 7,
            PRODUCT_CHANGE: 8,
            HOT_ATMOSPHERE: 9,
            EXPLAINING_CHANGE: 10,
            COMBINATION_CHANGE: 11
        },
        proto.webcast.im.LiveShoppingMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getMsgType = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setMsgType = function(e) {
            return o.Message.setProto3EnumField(this, 2, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getPromotionId = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setPromotionId = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getTargetUidList = function() {
            return o.Message.getRepeatedField(this, 4)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setTargetUidList = function(e) {
            return o.Message.setField(this, 4, e || [])
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.addTargetUid = function(e, t) {
            return o.Message.addToRepeatedField(this, 4, e, t)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearTargetUidList = function() {
            return this.setTargetUidList([])
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getBubbleType = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setBubbleType = function(e) {
            return o.Message.setProto3EnumField(this, 5, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getScreenshotTimestamp = function() {
            return o.Message.getFieldWithDefault(this, 6, "0")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setScreenshotTimestamp = function(e) {
            return o.Message.setProto3StringIntField(this, 6, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getSecTargetUidList = function() {
            return o.Message.getRepeatedField(this, 7)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setSecTargetUidList = function(e) {
            return o.Message.setField(this, 7, e || [])
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.addSecTargetUid = function(e, t) {
            return o.Message.addToRepeatedField(this, 7, e, t)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearSecTargetUidList = function() {
            return this.setSecTargetUidList([])
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getEcomNotice = function() {
            return o.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setEcomNotice = function(e) {
            return o.Message.setProto3StringField(this, 8, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedProductIdsList = function() {
            return o.Message.getRepeatedField(this, 9)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedProductIdsList = function(e) {
            return o.Message.setField(this, 9, e || [])
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.addUpdatedProductIds = function(e, t) {
            return o.Message.addToRepeatedField(this, 9, e, t)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedProductIdsList = function() {
            return this.setUpdatedProductIdsList([])
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdateType = function() {
            return o.Message.getFieldWithDefault(this, 10, 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdateType = function(e) {
            return o.Message.setProto3EnumField(this, 10, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedProductInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedProductInfo, 11)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedProductInfo = function(e) {
            return o.Message.setWrapperField(this, 11, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedProductInfo = function() {
            return this.setUpdatedProductInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdatedProductInfo = function() {
            return null != o.Message.getField(this, 11)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getSoldOut = function() {
            return o.Message.getBooleanFieldWithDefault(this, 12, !1)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setSoldOut = function(e) {
            return o.Message.setProto3BooleanField(this, 12, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedCouponInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedCouponInfo, 13)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedCouponInfo = function(e) {
            return o.Message.setWrapperField(this, 13, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedCouponInfo = function() {
            return this.setUpdatedCouponInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdatedCouponInfo = function() {
            return null != o.Message.getField(this, 13)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedCampaignInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedCampaignInfo, 14)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedCampaignInfo = function(e) {
            return o.Message.setWrapperField(this, 14, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedCampaignInfo = function() {
            return this.setUpdatedCampaignInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdatedCampaignInfo = function() {
            return null != o.Message.getField(this, 14)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdateTimestamp = function() {
            return o.Message.getFieldWithDefault(this, 15, "0")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdateTimestamp = function(e) {
            return o.Message.setProto3StringIntField(this, 15, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getButtonLabel = function() {
            return o.Message.getFieldWithDefault(this, 16, "")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setButtonLabel = function(e) {
            return o.Message.setProto3StringField(this, 16, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getPromotionsNum = function() {
            return o.Message.getFieldWithDefault(this, 17, "0")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setPromotionsNum = function(e) {
            return o.Message.setProto3StringIntField(this, 17, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdateSkuInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedSkuInfo, 18)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdateSkuInfo = function(e) {
            return o.Message.setWrapperField(this, 18, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdateSkuInfo = function() {
            return this.setUpdateSkuInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdateSkuInfo = function() {
            return null != o.Message.getField(this, 18)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedCommentaryVideoInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedCommentaryVideoInfo, 19)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedCommentaryVideoInfo = function(e) {
            return o.Message.setWrapperField(this, 19, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedCommentaryVideoInfo = function() {
            return this.setUpdatedCommentaryVideoInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdatedCommentaryVideoInfo = function() {
            return null != o.Message.getField(this, 19)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedGroupInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedGroupInfo, 20)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedGroupInfo = function(e) {
            return o.Message.setWrapperField(this, 20, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedGroupInfo = function() {
            return this.setUpdatedGroupInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdatedGroupInfo = function() {
            return null != o.Message.getField(this, 20)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getCommerceAuthorityChangeToast = function() {
            return o.Message.getFieldWithDefault(this, 21, "")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setCommerceAuthorityChangeToast = function(e) {
            return o.Message.setProto3StringField(this, 21, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getTraceTimeMetric = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.TraceTimeMetric, 22)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setTraceTimeMetric = function(e) {
            return o.Message.setWrapperField(this, 22, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearTraceTimeMetric = function() {
            return this.setTraceTimeMetric(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasTraceTimeMetric = function() {
            return null != o.Message.getField(this, 22)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getAuctionSuccess = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.AuctionSuccess, 23)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setAuctionSuccess = function(e) {
            return o.Message.setWrapperField(this, 23, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearAuctionSuccess = function() {
            return this.setAuctionSuccess(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasAuctionSuccess = function() {
            return null != o.Message.getField(this, 23)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getAuctionInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.AuctionInfo, 24)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setAuctionInfo = function(e) {
            return o.Message.setWrapperField(this, 24, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearAuctionInfo = function() {
            return this.setAuctionInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasAuctionInfo = function() {
            return null != o.Message.getField(this, 24)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getRedpackActivityInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.RedpackActivityInfo, 25)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setRedpackActivityInfo = function(e) {
            return o.Message.setWrapperField(this, 25, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearRedpackActivityInfo = function() {
            return this.setRedpackActivityInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasRedpackActivityInfo = function() {
            return null != o.Message.getField(this, 25)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdatedCartInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.UpdatedCartInfo, 26)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdatedCartInfo = function(e) {
            return o.Message.setWrapperField(this, 26, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearUpdatedCartInfo = function() {
            return this.setUpdatedCartInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasUpdatedCartInfo = function() {
            return null != o.Message.getField(this, 26)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getLotteryInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.LotteryInfo, 27)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setLotteryInfo = function(e) {
            return o.Message.setWrapperField(this, 27, e)
        }
        ;
        proto.webcast.im.LiveShoppingMessage.prototype.clearLotteryInfo = function() {
            return this.setLotteryInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasLotteryInfo = function() {
            return null != o.Message.getField(this, 27)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getWinLotteryinfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.WinLotteryInfo, 28)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setWinLotteryinfo = function(e) {
            return o.Message.setWrapperField(this, 28, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearWinLotteryinfo = function() {
            return this.setWinLotteryinfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasWinLotteryinfo = function() {
            return null != o.Message.getField(this, 28)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getLotteryInfoList = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.LotteryInfoList, 29)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setLotteryInfoList = function(e) {
            return o.Message.setWrapperField(this, 29, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearLotteryInfoList = function() {
            return this.setLotteryInfoList(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasLotteryInfoList = function() {
            return null != o.Message.getField(this, 29)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getHotAtmosphere = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.HotAtmosphere, 30)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setHotAtmosphere = function(e) {
            return o.Message.setWrapperField(this, 30, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearHotAtmosphere = function() {
            return this.setHotAtmosphere(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasHotAtmosphere = function() {
            return null != o.Message.getField(this, 30)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getUpdateToast = function() {
            return o.Message.getFieldWithDefault(this, 31, "")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setUpdateToast = function(e) {
            return o.Message.setProto3StringField(this, 31, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getCanSold = function() {
            return o.Message.getBooleanFieldWithDefault(this, 32, !1)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setCanSold = function(e) {
            return o.Message.setProto3BooleanField(this, 32, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getLogicalClock = function() {
            return o.Message.getFieldWithDefault(this, 33, "0")
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setLogicalClock = function(e) {
            return o.Message.setProto3StringIntField(this, 33, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getRoomTagOfflineInfo = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.RoomTagOfflineInfo, 34)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setRoomTagOfflineInfo = function(e) {
            return o.Message.setWrapperField(this, 34, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearRoomTagOfflineInfo = function() {
            return this.setRoomTagOfflineInfo(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasRoomTagOfflineInfo = function() {
            return null != o.Message.getField(this, 34)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getFilterSwitchChangeData = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.FilterSwitchChangeData, 35)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setFilterSwitchChangeData = function(e) {
            return o.Message.setWrapperField(this, 35, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearFilterSwitchChangeData = function() {
            return this.setFilterSwitchChangeData(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasFilterSwitchChangeData = function() {
            return null != o.Message.getField(this, 35)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.getInteractionData = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.InteractionData, 36)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.setInteractionData = function(e) {
            return o.Message.setWrapperField(this, 36, e)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.clearInteractionData = function() {
            return this.setInteractionData(void 0)
        }
        ,
        proto.webcast.im.LiveShoppingMessage.prototype.hasInteractionData = function() {
            return null != o.Message.getField(this, 36)
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    54013: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s),
        i.exportSymbol("proto.webcast.im.CategoryInfo", null, a),
        i.exportSymbol("proto.webcast.im.ProductChangeMessage", null, a),
        i.exportSymbol("proto.webcast.im.ProductInfo", null, a),
        proto.webcast.im.ProductChangeMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.ProductChangeMessage.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.ProductChangeMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.ProductChangeMessage.displayName = "proto.webcast.im.ProductChangeMessage"),
        proto.webcast.im.ProductInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.ProductInfo.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.ProductInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.ProductInfo.displayName = "proto.webcast.im.ProductInfo"),
        proto.webcast.im.CategoryInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.CategoryInfo.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.CategoryInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.CategoryInfo.displayName = "proto.webcast.im.CategoryInfo"),
        proto.webcast.im.ProductChangeMessage.repeatedFields_ = [4, 6, 7, 8],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProductChangeMessage.prototype.toObject = function(e) {
            return proto.webcast.im.ProductChangeMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.ProductChangeMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                updateTimestamp: o.Message.getFieldWithDefault(t, 2, "0"),
                updateToast: o.Message.getFieldWithDefault(t, 3, ""),
                updateProductInfoList: o.Message.toObjectList(t.getUpdateProductInfoList(), proto.webcast.im.ProductInfo.toObject, e),
                total: o.Message.getFieldWithDefault(t, 5, "0"),
                targetUidList: null == (r = o.Message.getRepeatedField(t, 6)) ? void 0 : r,
                secTargetUidList: null == (r = o.Message.getRepeatedField(t, 7)) ? void 0 : r,
                updateCategoryInfoList: o.Message.toObjectList(t.getUpdateCategoryInfoList(), proto.webcast.im.CategoryInfo.toObject, e)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.ProductChangeMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.ProductChangeMessage;
            return proto.webcast.im.ProductChangeMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.ProductChangeMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setUpdateTimestamp(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setUpdateToast(r);
                    break;
                case 4:
                    r = new proto.webcast.im.ProductInfo;
                    t.readMessage(r, proto.webcast.im.ProductInfo.deserializeBinaryFromReader),
                    e.addUpdateProductInfo(r);
                    break;
                case 5:
                    r = t.readInt64String();
                    e.setTotal(r);
                    break;
                case 6:
                    for (var o = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < o.length; i++)
                        e.addTargetUid(o[i]);
                    break;
                case 7:
                    r = t.readString();
                    e.addSecTargetUid(r);
                    break;
                case 8:
                    r = new proto.webcast.im.CategoryInfo;
                    t.readMessage(r, proto.webcast.im.CategoryInfo.deserializeBinaryFromReader),
                    e.addUpdateCategoryInfo(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.ProductChangeMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ProductChangeMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            r = e.getUpdateTimestamp(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            (r = e.getUpdateToast()).length > 0 && t.writeString(3, r),
            (r = e.getUpdateProductInfoList()).length > 0 && t.writeRepeatedMessage(4, r, proto.webcast.im.ProductInfo.serializeBinaryToWriter),
            r = e.getTotal(),
            0 !== parseInt(r, 10) && t.writeInt64String(5, r),
            (r = e.getTargetUidList()).length > 0 && t.writePackedInt64String(6, r),
            (r = e.getSecTargetUidList()).length > 0 && t.writeRepeatedString(7, r),
            (r = e.getUpdateCategoryInfoList()).length > 0 && t.writeRepeatedMessage(8, r, proto.webcast.im.CategoryInfo.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getUpdateTimestamp = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setUpdateTimestamp = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getUpdateToast = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setUpdateToast = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getUpdateProductInfoList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.webcast.im.ProductInfo, 4)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setUpdateProductInfoList = function(e) {
            return o.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.addUpdateProductInfo = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 4, e, proto.webcast.im.ProductInfo, t)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.clearUpdateProductInfoList = function() {
            return this.setUpdateProductInfoList([])
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getTotal = function() {
            return o.Message.getFieldWithDefault(this, 5, "0")
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setTotal = function(e) {
            return o.Message.setProto3StringIntField(this, 5, e)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getTargetUidList = function() {
            return o.Message.getRepeatedField(this, 6)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setTargetUidList = function(e) {
            return o.Message.setField(this, 6, e || [])
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.addTargetUid = function(e, t) {
            return o.Message.addToRepeatedField(this, 6, e, t)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.clearTargetUidList = function() {
            return this.setTargetUidList([])
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getSecTargetUidList = function() {
            return o.Message.getRepeatedField(this, 7)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setSecTargetUidList = function(e) {
            return o.Message.setField(this, 7, e || [])
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.addSecTargetUid = function(e, t) {
            return o.Message.addToRepeatedField(this, 7, e, t)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.clearSecTargetUidList = function() {
            return this.setSecTargetUidList([])
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.getUpdateCategoryInfoList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.webcast.im.CategoryInfo, 8)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.setUpdateCategoryInfoList = function(e) {
            return o.Message.setRepeatedWrapperField(this, 8, e)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.addUpdateCategoryInfo = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 8, e, proto.webcast.im.CategoryInfo, t)
        }
        ,
        proto.webcast.im.ProductChangeMessage.prototype.clearUpdateCategoryInfoList = function() {
            return this.setUpdateCategoryInfoList([])
        }
        ,
        proto.webcast.im.ProductInfo.repeatedFields_ = [3],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.ProductInfo.prototype.toObject = function(e) {
            return proto.webcast.im.ProductInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.ProductInfo.toObject = function(e, t) {
            var r, i = {
                promotionId: o.Message.getFieldWithDefault(t, 1, "0"),
                index: o.Message.getFieldWithDefault(t, 2, 0),
                targetFlashUidsList: null == (r = o.Message.getRepeatedField(t, 3)) ? void 0 : r,
                explainType: o.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.ProductInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.ProductInfo;
            return proto.webcast.im.ProductInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.ProductInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setPromotionId(r);
                    break;
                case 2:
                    r = t.readInt32();
                    e.setIndex(r);
                    break;
                case 3:
                    for (var o = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], i = 0; i < o.length; i++)
                        e.addTargetFlashUids(o[i]);
                    break;
                case 4:
                    r = t.readInt64String();
                    e.setExplainType(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.ProductInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.ProductInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.ProductInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getPromotionId(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            0 !== (r = e.getIndex()) && t.writeInt32(2, r),
            (r = e.getTargetFlashUidsList()).length > 0 && t.writePackedInt64String(3, r),
            r = e.getExplainType(),
            0 !== parseInt(r, 10) && t.writeInt64String(4, r)
        }
        ,
        proto.webcast.im.ProductInfo.prototype.getPromotionId = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.ProductInfo.prototype.setPromotionId = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.ProductInfo.prototype.getIndex = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.webcast.im.ProductInfo.prototype.setIndex = function(e) {
            return o.Message.setProto3IntField(this, 2, e)
        }
        ,
        proto.webcast.im.ProductInfo.prototype.getTargetFlashUidsList = function() {
            return o.Message.getRepeatedField(this, 3)
        }
        ,
        proto.webcast.im.ProductInfo.prototype.setTargetFlashUidsList = function(e) {
            return o.Message.setField(this, 3, e || [])
        }
        ,
        proto.webcast.im.ProductInfo.prototype.addTargetFlashUids = function(e, t) {
            return o.Message.addToRepeatedField(this, 3, e, t)
        }
        ,
        proto.webcast.im.ProductInfo.prototype.clearTargetFlashUidsList = function() {
            return this.setTargetFlashUidsList([])
        }
        ,
        proto.webcast.im.ProductInfo.prototype.getExplainType = function() {
            return o.Message.getFieldWithDefault(this, 4, "0")
        }
        ,
        proto.webcast.im.ProductInfo.prototype.setExplainType = function(e) {
            return o.Message.setProto3StringIntField(this, 4, e)
        }
        ,
        proto.webcast.im.CategoryInfo.repeatedFields_ = [3],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.CategoryInfo.prototype.toObject = function(e) {
            return proto.webcast.im.CategoryInfo.toObject(e, this)
        }
        ,
        proto.webcast.im.CategoryInfo.toObject = function(e, t) {
            var r, i = {
                id: o.Message.getFieldWithDefault(t, 1, 0),
                name: o.Message.getFieldWithDefault(t, 2, ""),
                promotionIdsList: null == (r = o.Message.getRepeatedField(t, 3)) ? void 0 : r,
                type: o.Message.getFieldWithDefault(t, 4, ""),
                uniqueIndex: o.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.CategoryInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.CategoryInfo;
            return proto.webcast.im.CategoryInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.CategoryInfo.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt32();
                    e.setId(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setName(r);
                    break;
                case 3:
                    r = t.readString();
                    e.addPromotionIds(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setType(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setUniqueIndex(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.CategoryInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.CategoryInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            0 !== (r = e.getId()) && t.writeInt32(1, r),
            (r = e.getName()).length > 0 && t.writeString(2, r),
            (r = e.getPromotionIdsList()).length > 0 && t.writeRepeatedString(3, r),
            (r = e.getType()).length > 0 && t.writeString(4, r),
            (r = e.getUniqueIndex()).length > 0 && t.writeString(5, r)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.getId = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.setId = function(e) {
            return o.Message.setProto3IntField(this, 1, e)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.getName = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.setName = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.getPromotionIdsList = function() {
            return o.Message.getRepeatedField(this, 3)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.setPromotionIdsList = function(e) {
            return o.Message.setField(this, 3, e || [])
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.addPromotionIds = function(e, t) {
            return o.Message.addToRepeatedField(this, 3, e, t)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.clearPromotionIdsList = function() {
            return this.setPromotionIdsList([])
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.getType = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.setType = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.getUniqueIndex = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.CategoryInfo.prototype.setUniqueIndex = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    15825: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s),
        i.exportSymbol("proto.webcast.im.LiveStreamControlMessage", null, a),
        proto.webcast.im.LiveStreamControlMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.LiveStreamControlMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.LiveStreamControlMessage.displayName = "proto.webcast.im.LiveStreamControlMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.LiveStreamControlMessage.prototype.toObject = function(e) {
            return proto.webcast.im.LiveStreamControlMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                controlParams: o.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.LiveStreamControlMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.LiveStreamControlMessage;
            return proto.webcast.im.LiveStreamControlMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setControlParams(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.LiveStreamControlMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            (r = e.getControlParams()).length > 0 && t.writeString(2, r)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.getControlParams = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.LiveStreamControlMessage.prototype.setControlParams = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    49403: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s);
        var n = r(42245);
        i.object.extend(proto, n),
        i.exportSymbol("proto.webcast.im.MatchHostChangeMessage", null, a),
        proto.webcast.im.MatchHostChangeMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.MatchHostChangeMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MatchHostChangeMessage.displayName = "proto.webcast.im.MatchHostChangeMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MatchHostChangeMessage.prototype.toObject = function(e) {
            return proto.webcast.im.MatchHostChangeMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                teamId: o.Message.getFieldWithDefault(t, 2, "0"),
                teamName: o.Message.getFieldWithDefault(t, 3, ""),
                schemaUrl: o.Message.getFieldWithDefault(t, 4, ""),
                teamIcon: (r = t.getTeamIcon()) && n.Image.toObject(e, r),
                teamBadge: (r = t.getTeamBadge()) && n.Image.toObject(e, r),
                teamBackground: (r = t.getTeamBackground()) && n.Image.toObject(e, r),
                systemMsg: o.Message.getFieldWithDefault(t, 8, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.MatchHostChangeMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MatchHostChangeMessage;
            return proto.webcast.im.MatchHostChangeMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readInt64String();
                    e.setTeamId(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setTeamName(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setSchemaUrl(r);
                    break;
                case 5:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setTeamIcon(r);
                    break;
                case 6:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setTeamBadge(r);
                    break;
                case 7:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setTeamBackground(r);
                    break;
                case 8:
                    r = t.readString();
                    e.setSystemMsg(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MatchHostChangeMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            r = e.getTeamId(),
            0 !== parseInt(r, 10) && t.writeInt64String(2, r),
            (r = e.getTeamName()).length > 0 && t.writeString(3, r),
            (r = e.getSchemaUrl()).length > 0 && t.writeString(4, r),
            null != (r = e.getTeamIcon()) && t.writeMessage(5, r, n.Image.serializeBinaryToWriter),
            null != (r = e.getTeamBadge()) && t.writeMessage(6, r, n.Image.serializeBinaryToWriter),
            null != (r = e.getTeamBackground()) && t.writeMessage(7, r, n.Image.serializeBinaryToWriter),
            (r = e.getSystemMsg()).length > 0 && t.writeString(8, r)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getTeamId = function() {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setTeamId = function(e) {
            return o.Message.setProto3StringIntField(this, 2, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getTeamName = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setTeamName = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getSchemaUrl = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setSchemaUrl = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getTeamIcon = function() {
            return o.Message.getWrapperField(this, n.Image, 5)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setTeamIcon = function(e) {
            return o.Message.setWrapperField(this, 5, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.clearTeamIcon = function() {
            return this.setTeamIcon(void 0)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.hasTeamIcon = function() {
            return null != o.Message.getField(this, 5)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getTeamBadge = function() {
            return o.Message.getWrapperField(this, n.Image, 6)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setTeamBadge = function(e) {
            return o.Message.setWrapperField(this, 6, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.clearTeamBadge = function() {
            return this.setTeamBadge(void 0)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.hasTeamBadge = function() {
            return null != o.Message.getField(this, 6)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getTeamBackground = function() {
            return o.Message.getWrapperField(this, n.Image, 7)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setTeamBackground = function(e) {
            return o.Message.setWrapperField(this, 7, e)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.clearTeamBackground = function() {
            return this.setTeamBackground(void 0)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.hasTeamBackground = function() {
            return null != o.Message.getField(this, 7)
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.getSystemMsg = function() {
            return o.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.webcast.im.MatchHostChangeMessage.prototype.setSystemMsg = function(e) {
            return o.Message.setProto3StringField(this, 8, e)
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    10346: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s),
        i.exportSymbol("proto.webcast.im.MediaRoomNoticeMessage", null, a),
        proto.webcast.im.MediaRoomNoticeMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.MediaRoomNoticeMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MediaRoomNoticeMessage.displayName = "proto.webcast.im.MediaRoomNoticeMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MediaRoomNoticeMessage.prototype.toObject = function(e) {
            return proto.webcast.im.MediaRoomNoticeMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                intro: o.Message.getFieldWithDefault(t, 2, ""),
                duration: o.Message.getFieldWithDefault(t, 3, "0"),
                reviewPass: o.Message.getBooleanFieldWithDefault(t, 4, !1),
                reviewFailText: o.Message.getFieldWithDefault(t, 5, ""),
                noticeTitle: o.Message.getFieldWithDefault(t, 6, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.MediaRoomNoticeMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MediaRoomNoticeMessage;
            return proto.webcast.im.MediaRoomNoticeMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setIntro(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setDuration(r);
                    break;
                case 4:
                    r = t.readBool();
                    e.setReviewPass(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setReviewFailText(r);
                    break;
                case 6:
                    r = t.readString();
                    e.setNoticeTitle(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MediaRoomNoticeMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            (r = e.getIntro()).length > 0 && t.writeString(2, r),
            r = e.getDuration(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            (r = e.getReviewPass()) && t.writeBool(4, r),
            (r = e.getReviewFailText()).length > 0 && t.writeString(5, r),
            (r = e.getNoticeTitle()).length > 0 && t.writeString(6, r)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.getIntro = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.setIntro = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.getDuration = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.setDuration = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.getReviewPass = function() {
            return o.Message.getBooleanFieldWithDefault(this, 4, !1)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.setReviewPass = function(e) {
            return o.Message.setProto3BooleanField(this, 4, e)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.getReviewFailText = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.setReviewFailText = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.getNoticeTitle = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.webcast.im.MediaRoomNoticeMessage.prototype.setNoticeTitle = function(e) {
            return o.Message.setProto3StringField(this, 6, e)
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    61004: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s),
        i.exportSymbol("proto.webcast.im.MediaLiveReplayVidMessage", null, a),
        proto.webcast.im.MediaLiveReplayVidMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.MediaLiveReplayVidMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MediaLiveReplayVidMessage.displayName = "proto.webcast.im.MediaLiveReplayVidMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MediaLiveReplayVidMessage.prototype.toObject = function(e) {
            return proto.webcast.im.MediaLiveReplayVidMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                vid: o.Message.getFieldWithDefault(t, 2, "")
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.MediaLiveReplayVidMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MediaLiveReplayVidMessage;
            return proto.webcast.im.MediaLiveReplayVidMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setVid(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MediaLiveReplayVidMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            (r = e.getVid()).length > 0 && t.writeString(2, r)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.getVid = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.MediaLiveReplayVidMessage.prototype.setVid = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    61396: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(54782);
        i.object.extend(proto, s);
        var n = r(42245);
        i.object.extend(proto, n);
        var p = r(56980);
        i.object.extend(proto, p);
        var c = r(26878);
        i.object.extend(proto, c),
        i.exportSymbol("proto.webcast.im.MemberMessage", null, a),
        i.exportSymbol("proto.webcast.im.MemberMessage.EffectConfig", null, a),
        proto.webcast.im.MemberMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.MemberMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MemberMessage.displayName = "proto.webcast.im.MemberMessage"),
        proto.webcast.im.MemberMessage.EffectConfig = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.MemberMessage.EffectConfig.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.MemberMessage.EffectConfig, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MemberMessage.EffectConfig.displayName = "proto.webcast.im.MemberMessage.EffectConfig"),
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MemberMessage.prototype.toObject = function(e) {
            return proto.webcast.im.MemberMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.MemberMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && c.Common.toObject(e, r),
                user: (r = t.getUser()) && s.User.toObject(e, r),
                memberCount: o.Message.getFieldWithDefault(t, 3, "0"),
                operator: (r = t.getOperator()) && s.User.toObject(e, r),
                isSetToAdmin: o.Message.getBooleanFieldWithDefault(t, 5, !1),
                isTopUser: o.Message.getBooleanFieldWithDefault(t, 6, !1),
                rankScore: o.Message.getFieldWithDefault(t, 7, "0"),
                topUserNo: o.Message.getFieldWithDefault(t, 8, "0"),
                enterType: o.Message.getFieldWithDefault(t, 9, "0"),
                action: o.Message.getFieldWithDefault(t, 10, "0"),
                actionDescription: o.Message.getFieldWithDefault(t, 11, ""),
                userId: o.Message.getFieldWithDefault(t, 12, "0"),
                effectConfig: (r = t.getEffectConfig()) && proto.webcast.im.MemberMessage.EffectConfig.toObject(e, r),
                popStr: o.Message.getFieldWithDefault(t, 14, ""),
                enterEffectConfig: (r = t.getEnterEffectConfig()) && proto.webcast.im.MemberMessage.EffectConfig.toObject(e, r),
                backgroundImage: (r = t.getBackgroundImage()) && n.Image.toObject(e, r),
                backgroundImageV2: (r = t.getBackgroundImageV2()) && n.Image.toObject(e, r),
                anchorDisplayText: (r = t.getAnchorDisplayText()) && p.Text.toObject(e, r),
                publicAreaCommon: (r = t.getPublicAreaCommon()) && c.PublicAreaCommon.toObject(e, r),
                userEnterTipType: o.Message.getFieldWithDefault(t, 20, "0"),
                anchorEnterTipType: o.Message.getFieldWithDefault(t, 21, "0"),
                buriedPointMap: (r = t.getBuriedPointMap()) ? r.toObject(e, void 0) : [],
                alternativeEffectConfigMap: (r = t.getAlternativeEffectConfigMap()) ? r.toObject(e, proto.webcast.im.MemberMessage.EffectConfig.toObject) : []
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.MemberMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MemberMessage;
            return proto.webcast.im.MemberMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MemberMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new c.Common;
                    t.readMessage(r, c.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = new s.User;
                    t.readMessage(r, s.User.deserializeBinaryFromReader),
                    e.setUser(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setMemberCount(r);
                    break;
                case 4:
                    r = new s.User;
                    t.readMessage(r, s.User.deserializeBinaryFromReader),
                    e.setOperator(r);
                    break;
                case 5:
                    r = t.readBool();
                    e.setIsSetToAdmin(r);
                    break;
                case 6:
                    r = t.readBool();
                    e.setIsTopUser(r);
                    break;
                case 7:
                    r = t.readInt64String();
                    e.setRankScore(r);
                    break;
                case 8:
                    r = t.readInt64String();
                    e.setTopUserNo(r);
                    break;
                case 9:
                    r = t.readInt64String();
                    e.setEnterType(r);
                    break;
                case 10:
                    r = t.readInt64String();
                    e.setAction(r);
                    break;
                case 11:
                    r = t.readString();
                    e.setActionDescription(r);
                    break;
                case 12:
                    r = t.readInt64String();
                    e.setUserId(r);
                    break;
                case 13:
                    r = new proto.webcast.im.MemberMessage.EffectConfig;
                    t.readMessage(r, proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader),
                    e.setEffectConfig(r);
                    break;
                case 14:
                    r = t.readString();
                    e.setPopStr(r);
                    break;
                case 15:
                    r = new proto.webcast.im.MemberMessage.EffectConfig;
                    t.readMessage(r, proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader),
                    e.setEnterEffectConfig(r);
                    break;
                case 16:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setBackgroundImage(r);
                    break;
                case 17:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setBackgroundImageV2(r);
                    break;
                case 18:
                    r = new p.Text;
                    t.readMessage(r, p.Text.deserializeBinaryFromReader),
                    e.setAnchorDisplayText(r);
                    break;
                case 19:
                    r = new c.PublicAreaCommon;
                    t.readMessage(r, c.PublicAreaCommon.deserializeBinaryFromReader),
                    e.setPublicAreaCommon(r);
                    break;
                case 20:
                    r = t.readInt64String();
                    e.setUserEnterTipType(r);
                    break;
                case 21:
                    r = t.readInt64String();
                    e.setAnchorEnterTipType(r);
                    break;
                case 22:
                    r = e.getBuriedPointMap();
                    t.readMessage(r, (function(e, t) {
                        o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readString, null, "", "")
                    }
                    ));
                    break;
                case 23:
                    r = e.getAlternativeEffectConfigMap();
                    t.readMessage(r, (function(e, t) {
                        o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader, "", new proto.webcast.im.MemberMessage.EffectConfig)
                    }
                    ));
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MemberMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MemberMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MemberMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, c.Common.serializeBinaryToWriter),
            null != (r = e.getUser()) && t.writeMessage(2, r, s.User.serializeBinaryToWriter),
            r = e.getMemberCount(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            null != (r = e.getOperator()) && t.writeMessage(4, r, s.User.serializeBinaryToWriter),
            (r = e.getIsSetToAdmin()) && t.writeBool(5, r),
            (r = e.getIsTopUser()) && t.writeBool(6, r),
            r = e.getRankScore(),
            0 !== parseInt(r, 10) && t.writeInt64String(7, r),
            r = e.getTopUserNo(),
            0 !== parseInt(r, 10) && t.writeInt64String(8, r),
            r = e.getEnterType(),
            0 !== parseInt(r, 10) && t.writeInt64String(9, r),
            r = e.getAction(),
            0 !== parseInt(r, 10) && t.writeInt64String(10, r),
            (r = e.getActionDescription()).length > 0 && t.writeString(11, r),
            r = e.getUserId(),
            0 !== parseInt(r, 10) && t.writeInt64String(12, r),
            null != (r = e.getEffectConfig()) && t.writeMessage(13, r, proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter),
            (r = e.getPopStr()).length > 0 && t.writeString(14, r),
            null != (r = e.getEnterEffectConfig()) && t.writeMessage(15, r, proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter),
            null != (r = e.getBackgroundImage()) && t.writeMessage(16, r, n.Image.serializeBinaryToWriter),
            null != (r = e.getBackgroundImageV2()) && t.writeMessage(17, r, n.Image.serializeBinaryToWriter),
            null != (r = e.getAnchorDisplayText()) && t.writeMessage(18, r, p.Text.serializeBinaryToWriter),
            null != (r = e.getPublicAreaCommon()) && t.writeMessage(19, r, c.PublicAreaCommon.serializeBinaryToWriter),
            r = e.getUserEnterTipType(),
            0 !== parseInt(r, 10) && t.writeInt64String(20, r),
            r = e.getAnchorEnterTipType(),
            0 !== parseInt(r, 10) && t.writeInt64String(21, r),
            (r = e.getBuriedPointMap(!0)) && r.getLength() > 0 && r.serializeBinary(22, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeString),
            (r = e.getAlternativeEffectConfigMap(!0)) && r.getLength() > 0 && r.serializeBinary(23, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.repeatedFields_ = [9, 13],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MemberMessage.EffectConfig.prototype.toObject = function(e) {
            return proto.webcast.im.MemberMessage.EffectConfig.toObject(e, this)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.toObject = function(e, t) {
            var r, i = {
                type: o.Message.getFieldWithDefault(t, 1, "0"),
                icon: (r = t.getIcon()) && n.Image.toObject(e, r),
                avatarPos: o.Message.getFieldWithDefault(t, 3, "0"),
                text: (r = t.getText()) && p.Text.toObject(e, r),
                textIcon: (r = t.getTextIcon()) && n.Image.toObject(e, r),
                stayTime: o.Message.getFieldWithDefault(t, 6, 0),
                animAssetId: o.Message.getFieldWithDefault(t, 7, "0"),
                badge: (r = t.getBadge()) && n.Image.toObject(e, r),
                flexSettingArrayList: null == (r = o.Message.getRepeatedField(t, 9)) ? void 0 : r,
                textIconOverlay: (r = t.getTextIconOverlay()) && n.Image.toObject(e, r),
                animatedBadge: (r = t.getAnimatedBadge()) && n.Image.toObject(e, r),
                hasSweepLight: o.Message.getBooleanFieldWithDefault(t, 12, !1),
                textFlexSettingArrayList: null == (r = o.Message.getRepeatedField(t, 13)) ? void 0 : r,
                centerAnimAssetId: o.Message.getFieldWithDefault(t, 14, "0"),
                dynamicImage: (r = t.getDynamicImage()) && n.Image.toObject(e, r),
                extraMap: (r = t.getExtraMap()) ? r.toObject(e, void 0) : [],
                mp4AnimAssetId: o.Message.getFieldWithDefault(t, 17, "0"),
                priority: o.Message.getFieldWithDefault(t, 18, "0"),
                maxWaitTime: o.Message.getFieldWithDefault(t, 19, "0"),
                dressId: o.Message.getFieldWithDefault(t, 20, ""),
                alignment: o.Message.getFieldWithDefault(t, 21, "0"),
                alignmentOffset: o.Message.getFieldWithDefault(t, 22, "0"),
                effectScene: o.Message.getFieldWithDefault(t, 23, ""),
                pieceValuesMap: (r = t.getPieceValuesMap()) ? r.toObject(e, proto.webcast.data.TextPiece.toObject) : []
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.MemberMessage.EffectConfig.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MemberMessage.EffectConfig;
            return proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readInt64String();
                    e.setType(r);
                    break;
                case 2:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setIcon(r);
                    break;
                case 3:
                    r = t.readInt64String();
                    e.setAvatarPos(r);
                    break;
                case 4:
                    r = new p.Text;
                    t.readMessage(r, p.Text.deserializeBinaryFromReader),
                    e.setText(r);
                    break;
                case 5:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setTextIcon(r);
                    break;
                case 6:
                    r = t.readInt32();
                    e.setStayTime(r);
                    break;
                case 7:
                    r = t.readInt64String();
                    e.setAnimAssetId(r);
                    break;
                case 8:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setBadge(r);
                    break;
                case 9:
                    for (var i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()], a = 0; a < i.length; a++)
                        e.addFlexSettingArray(i[a]);
                    break;
                case 10:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setTextIconOverlay(r);
                    break;
                case 11:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setAnimatedBadge(r);
                    break;
                case 12:
                    r = t.readBool();
                    e.setHasSweepLight(r);
                    break;
                case 13:
                    for (i = t.isDelimited() ? t.readPackedInt64String() : [t.readInt64String()],
                    a = 0; a < i.length; a++)
                        e.addTextFlexSettingArray(i[a]);
                    break;
                case 14:
                    r = t.readInt64String();
                    e.setCenterAnimAssetId(r);
                    break;
                case 15:
                    r = new n.Image;
                    t.readMessage(r, n.Image.deserializeBinaryFromReader),
                    e.setDynamicImage(r);
                    break;
                case 16:
                    r = e.getExtraMap();
                    t.readMessage(r, (function(e, t) {
                        o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readString, null, "", "")
                    }
                    ));
                    break;
                case 17:
                    r = t.readInt64String();
                    e.setMp4AnimAssetId(r);
                    break;
                case 18:
                    r = t.readInt64String();
                    e.setPriority(r);
                    break;
                case 19:
                    r = t.readInt64String();
                    e.setMaxWaitTime(r);
                    break;
                case 20:
                    r = t.readString();
                    e.setDressId(r);
                    break;
                case 21:
                    r = t.readInt64String();
                    e.setAlignment(r);
                    break;
                case 22:
                    r = t.readInt64String();
                    e.setAlignmentOffset(r);
                    break;
                case 23:
                    r = t.readString();
                    e.setEffectScene(r);
                    break;
                case 24:
                    r = e.getPieceValuesMap();
                    t.readMessage(r, (function(e, t) {
                        o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.webcast.data.TextPiece.deserializeBinaryFromReader, "", new proto.webcast.data.TextPiece)
                    }
                    ));
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getType(),
            0 !== parseInt(r, 10) && t.writeInt64String(1, r),
            null != (r = e.getIcon()) && t.writeMessage(2, r, n.Image.serializeBinaryToWriter),
            r = e.getAvatarPos(),
            0 !== parseInt(r, 10) && t.writeInt64String(3, r),
            null != (r = e.getText()) && t.writeMessage(4, r, p.Text.serializeBinaryToWriter),
            null != (r = e.getTextIcon()) && t.writeMessage(5, r, n.Image.serializeBinaryToWriter),
            0 !== (r = e.getStayTime()) && t.writeInt32(6, r),
            r = e.getAnimAssetId(),
            0 !== parseInt(r, 10) && t.writeInt64String(7, r),
            null != (r = e.getBadge()) && t.writeMessage(8, r, n.Image.serializeBinaryToWriter),
            (r = e.getFlexSettingArrayList()).length > 0 && t.writePackedInt64String(9, r),
            null != (r = e.getTextIconOverlay()) && t.writeMessage(10, r, n.Image.serializeBinaryToWriter),
            null != (r = e.getAnimatedBadge()) && t.writeMessage(11, r, n.Image.serializeBinaryToWriter),
            (r = e.getHasSweepLight()) && t.writeBool(12, r),
            (r = e.getTextFlexSettingArrayList()).length > 0 && t.writePackedInt64String(13, r),
            r = e.getCenterAnimAssetId(),
            0 !== parseInt(r, 10) && t.writeInt64String(14, r),
            null != (r = e.getDynamicImage()) && t.writeMessage(15, r, n.Image.serializeBinaryToWriter),
            (r = e.getExtraMap(!0)) && r.getLength() > 0 && r.serializeBinary(16, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeString),
            r = e.getMp4AnimAssetId(),
            0 !== parseInt(r, 10) && t.writeInt64String(17, r),
            r = e.getPriority(),
            0 !== parseInt(r, 10) && t.writeInt64String(18, r),
            r = e.getMaxWaitTime(),
            0 !== parseInt(r, 10) && t.writeInt64String(19, r),
            (r = e.getDressId()).length > 0 && t.writeString(20, r),
            r = e.getAlignment(),
            0 !== parseInt(r, 10) && t.writeInt64String(21, r),
            r = e.getAlignmentOffset(),
            0 !== parseInt(r, 10) && t.writeInt64String(22, r),
            (r = e.getEffectScene()).length > 0 && t.writeString(23, r),
            (r = e.getPieceValuesMap(!0)) && r.getLength() > 0 && r.serializeBinary(24, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.webcast.data.TextPiece.serializeBinaryToWriter)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getType = function() {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setType = function(e) {
            return o.Message.setProto3StringIntField(this, 1, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getIcon = function() {
            return o.Message.getWrapperField(this, n.Image, 2)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setIcon = function(e) {
            return o.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearIcon = function() {
            return this.setIcon(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasIcon = function() {
            return null != o.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getAvatarPos = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setAvatarPos = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getText = function() {
            return o.Message.getWrapperField(this, p.Text, 4)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setText = function(e) {
            return o.Message.setWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearText = function() {
            return this.setText(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasText = function() {
            return null != o.Message.getField(this, 4)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextIcon = function() {
            return o.Message.getWrapperField(this, n.Image, 5)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextIcon = function(e) {
            return o.Message.setWrapperField(this, 5, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextIcon = function() {
            return this.setTextIcon(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasTextIcon = function() {
            return null != o.Message.getField(this, 5)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getStayTime = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setStayTime = function(e) {
            return o.Message.setProto3IntField(this, 6, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getAnimAssetId = function() {
            return o.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setAnimAssetId = function(e) {
            return o.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getBadge = function() {
            return o.Message.getWrapperField(this, n.Image, 8)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setBadge = function(e) {
            return o.Message.setWrapperField(this, 8, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearBadge = function() {
            return this.setBadge(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasBadge = function() {
            return null != o.Message.getField(this, 8)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getFlexSettingArrayList = function() {
            return o.Message.getRepeatedField(this, 9)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setFlexSettingArrayList = function(e) {
            return o.Message.setField(this, 9, e || [])
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.addFlexSettingArray = function(e, t) {
            return o.Message.addToRepeatedField(this, 9, e, t)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearFlexSettingArrayList = function() {
            return this.setFlexSettingArrayList([])
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextIconOverlay = function() {
            return o.Message.getWrapperField(this, n.Image, 10)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextIconOverlay = function(e) {
            return o.Message.setWrapperField(this, 10, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextIconOverlay = function() {
            return this.setTextIconOverlay(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasTextIconOverlay = function() {
            return null != o.Message.getField(this, 10)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getAnimatedBadge = function() {
            return o.Message.getWrapperField(this, n.Image, 11)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setAnimatedBadge = function(e) {
            return o.Message.setWrapperField(this, 11, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearAnimatedBadge = function() {
            return this.setAnimatedBadge(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasAnimatedBadge = function() {
            return null != o.Message.getField(this, 11)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getHasSweepLight = function() {
            return o.Message.getBooleanFieldWithDefault(this, 12, !1)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setHasSweepLight = function(e) {
            return o.Message.setProto3BooleanField(this, 12, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getTextFlexSettingArrayList = function() {
            return o.Message.getRepeatedField(this, 13)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setTextFlexSettingArrayList = function(e) {
            return o.Message.setField(this, 13, e || [])
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.addTextFlexSettingArray = function(e, t) {
            return o.Message.addToRepeatedField(this, 13, e, t)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearTextFlexSettingArrayList = function() {
            return this.setTextFlexSettingArrayList([])
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getCenterAnimAssetId = function() {
            return o.Message.getFieldWithDefault(this, 14, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setCenterAnimAssetId = function(e) {
            return o.Message.setProto3StringIntField(this, 14, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getDynamicImage = function() {
            return o.Message.getWrapperField(this, n.Image, 15)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setDynamicImage = function(e) {
            return o.Message.setWrapperField(this, 15, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearDynamicImage = function() {
            return this.setDynamicImage(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.hasDynamicImage = function() {
            return null != o.Message.getField(this, 15)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getExtraMap = function(e) {
            return o.Message.getMapField(this, 16, e, null)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearExtraMap = function() {
            return this.getExtraMap().clear(),
            this
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getMp4AnimAssetId = function() {
            return o.Message.getFieldWithDefault(this, 17, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setMp4AnimAssetId = function(e) {
            return o.Message.setProto3StringIntField(this, 17, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getPriority = function() {
            return o.Message.getFieldWithDefault(this, 18, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setPriority = function(e) {
            return o.Message.setProto3StringIntField(this, 18, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getMaxWaitTime = function() {
            return o.Message.getFieldWithDefault(this, 19, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setMaxWaitTime = function(e) {
            return o.Message.setProto3StringIntField(this, 19, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getDressId = function() {
            return o.Message.getFieldWithDefault(this, 20, "")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setDressId = function(e) {
            return o.Message.setProto3StringField(this, 20, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getAlignment = function() {
            return o.Message.getFieldWithDefault(this, 21, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setAlignment = function(e) {
            return o.Message.setProto3StringIntField(this, 21, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getAlignmentOffset = function() {
            return o.Message.getFieldWithDefault(this, 22, "0")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setAlignmentOffset = function(e) {
            return o.Message.setProto3StringIntField(this, 22, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getEffectScene = function() {
            return o.Message.getFieldWithDefault(this, 23, "")
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.setEffectScene = function(e) {
            return o.Message.setProto3StringField(this, 23, e)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.getPieceValuesMap = function(e) {
            return o.Message.getMapField(this, 24, e, proto.webcast.data.TextPiece)
        }
        ,
        proto.webcast.im.MemberMessage.EffectConfig.prototype.clearPieceValuesMap = function() {
            return this.getPieceValuesMap().clear(),
            this
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, c.Common, 1)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getUser = function() {
            return o.Message.getWrapperField(this, s.User, 2)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setUser = function(e) {
            return o.Message.setWrapperField(this, 2, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearUser = function() {
            return this.setUser(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasUser = function() {
            return null != o.Message.getField(this, 2)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getMemberCount = function() {
            return o.Message.getFieldWithDefault(this, 3, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setMemberCount = function(e) {
            return o.Message.setProto3StringIntField(this, 3, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getOperator = function() {
            return o.Message.getWrapperField(this, s.User, 4)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setOperator = function(e) {
            return o.Message.setWrapperField(this, 4, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearOperator = function() {
            return this.setOperator(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasOperator = function() {
            return null != o.Message.getField(this, 4)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getIsSetToAdmin = function() {
            return o.Message.getBooleanFieldWithDefault(this, 5, !1)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setIsSetToAdmin = function(e) {
            return o.Message.setProto3BooleanField(this, 5, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getIsTopUser = function() {
            return o.Message.getBooleanFieldWithDefault(this, 6, !1)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setIsTopUser = function(e) {
            return o.Message.setProto3BooleanField(this, 6, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getRankScore = function() {
            return o.Message.getFieldWithDefault(this, 7, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setRankScore = function(e) {
            return o.Message.setProto3StringIntField(this, 7, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getTopUserNo = function() {
            return o.Message.getFieldWithDefault(this, 8, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setTopUserNo = function(e) {
            return o.Message.setProto3StringIntField(this, 8, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getEnterType = function() {
            return o.Message.getFieldWithDefault(this, 9, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setEnterType = function(e) {
            return o.Message.setProto3StringIntField(this, 9, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getAction = function() {
            return o.Message.getFieldWithDefault(this, 10, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setAction = function(e) {
            return o.Message.setProto3StringIntField(this, 10, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getActionDescription = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setActionDescription = function(e) {
            return o.Message.setProto3StringField(this, 11, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getUserId = function() {
            return o.Message.getFieldWithDefault(this, 12, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setUserId = function(e) {
            return o.Message.setProto3StringIntField(this, 12, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getEffectConfig = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.MemberMessage.EffectConfig, 13)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setEffectConfig = function(e) {
            return o.Message.setWrapperField(this, 13, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearEffectConfig = function() {
            return this.setEffectConfig(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasEffectConfig = function() {
            return null != o.Message.getField(this, 13)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getPopStr = function() {
            return o.Message.getFieldWithDefault(this, 14, "")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setPopStr = function(e) {
            return o.Message.setProto3StringField(this, 14, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getEnterEffectConfig = function() {
            return o.Message.getWrapperField(this, proto.webcast.im.MemberMessage.EffectConfig, 15)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setEnterEffectConfig = function(e) {
            return o.Message.setWrapperField(this, 15, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearEnterEffectConfig = function() {
            return this.setEnterEffectConfig(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasEnterEffectConfig = function() {
            return null != o.Message.getField(this, 15)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getBackgroundImage = function() {
            return o.Message.getWrapperField(this, n.Image, 16)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setBackgroundImage = function(e) {
            return o.Message.setWrapperField(this, 16, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearBackgroundImage = function() {
            return this.setBackgroundImage(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasBackgroundImage = function() {
            return null != o.Message.getField(this, 16)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getBackgroundImageV2 = function() {
            return o.Message.getWrapperField(this, n.Image, 17)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setBackgroundImageV2 = function(e) {
            return o.Message.setWrapperField(this, 17, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearBackgroundImageV2 = function() {
            return this.setBackgroundImageV2(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasBackgroundImageV2 = function() {
            return null != o.Message.getField(this, 17)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getAnchorDisplayText = function() {
            return o.Message.getWrapperField(this, p.Text, 18)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setAnchorDisplayText = function(e) {
            return o.Message.setWrapperField(this, 18, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearAnchorDisplayText = function() {
            return this.setAnchorDisplayText(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasAnchorDisplayText = function() {
            return null != o.Message.getField(this, 18)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getPublicAreaCommon = function() {
            return o.Message.getWrapperField(this, c.PublicAreaCommon, 19)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setPublicAreaCommon = function(e) {
            return o.Message.setWrapperField(this, 19, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearPublicAreaCommon = function() {
            return this.setPublicAreaCommon(void 0)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.hasPublicAreaCommon = function() {
            return null != o.Message.getField(this, 19)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getUserEnterTipType = function() {
            return o.Message.getFieldWithDefault(this, 20, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setUserEnterTipType = function(e) {
            return o.Message.setProto3StringIntField(this, 20, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getAnchorEnterTipType = function() {
            return o.Message.getFieldWithDefault(this, 21, "0")
        }
        ,
        proto.webcast.im.MemberMessage.prototype.setAnchorEnterTipType = function(e) {
            return o.Message.setProto3StringIntField(this, 21, e)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getBuriedPointMap = function(e) {
            return o.Message.getMapField(this, 22, e, null)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearBuriedPointMap = function() {
            return this.getBuriedPointMap().clear(),
            this
        }
        ,
        proto.webcast.im.MemberMessage.prototype.getAlternativeEffectConfigMap = function(e) {
            return o.Message.getMapField(this, 23, e, proto.webcast.im.MemberMessage.EffectConfig)
        }
        ,
        proto.webcast.im.MemberMessage.prototype.clearAlternativeEffectConfigMap = function() {
            return this.getAlternativeEffectConfigMap().clear(),
            this
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
    ,
    35942: (e,t,r)=>{
        var o = r(47865)
          , i = o
          , a = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== a ? a : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null)
          , s = r(26878);
        i.object.extend(proto, s),
        i.exportSymbol("proto.webcast.im.MotorCustomMessage", null, a),
        i.exportSymbol("proto.webcast.im.MotorCustomMessage.Data", null, a),
        proto.webcast.im.MotorCustomMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.webcast.im.MotorCustomMessage.repeatedFields_, null)
        }
        ,
        i.inherits(proto.webcast.im.MotorCustomMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MotorCustomMessage.displayName = "proto.webcast.im.MotorCustomMessage"),
        proto.webcast.im.MotorCustomMessage.Data = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.webcast.im.MotorCustomMessage.Data, o.Message),
        i.DEBUG && !COMPILED && (proto.webcast.im.MotorCustomMessage.Data.displayName = "proto.webcast.im.MotorCustomMessage.Data"),
        proto.webcast.im.MotorCustomMessage.repeatedFields_ = [6],
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MotorCustomMessage.prototype.toObject = function(e) {
            return proto.webcast.im.MotorCustomMessage.toObject(e, this)
        }
        ,
        proto.webcast.im.MotorCustomMessage.toObject = function(e, t) {
            var r, i = {
                common: (r = t.getCommon()) && s.Common.toObject(e, r),
                type: o.Message.getFieldWithDefault(t, 2, ""),
                title: o.Message.getFieldWithDefault(t, 3, ""),
                image: o.Message.getFieldWithDefault(t, 4, ""),
                extra: o.Message.getFieldWithDefault(t, 5, ""),
                dataList: o.Message.toObjectList(t.getDataList(), proto.webcast.im.MotorCustomMessage.Data.toObject, e)
            };
            return e && (i.$jspbMessageInstance = t),
            i
        }
        ),
        proto.webcast.im.MotorCustomMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MotorCustomMessage;
            return proto.webcast.im.MotorCustomMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MotorCustomMessage.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = new s.Common;
                    t.readMessage(r, s.Common.deserializeBinaryFromReader),
                    e.setCommon(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setType(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setTitle(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setImage(r);
                    break;
                case 5:
                    r = t.readString();
                    e.setExtra(r);
                    break;
                case 6:
                    r = new proto.webcast.im.MotorCustomMessage.Data;
                    t.readMessage(r, proto.webcast.im.MotorCustomMessage.Data.deserializeBinaryFromReader),
                    e.addData(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MotorCustomMessage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MotorCustomMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            null != (r = e.getCommon()) && t.writeMessage(1, r, s.Common.serializeBinaryToWriter),
            (r = e.getType()).length > 0 && t.writeString(2, r),
            (r = e.getTitle()).length > 0 && t.writeString(3, r),
            (r = e.getImage()).length > 0 && t.writeString(4, r),
            (r = e.getExtra()).length > 0 && t.writeString(5, r),
            (r = e.getDataList()).length > 0 && t.writeRepeatedMessage(6, r, proto.webcast.im.MotorCustomMessage.Data.serializeBinaryToWriter)
        }
        ,
        o.Message.GENERATE_TO_OBJECT && (proto.webcast.im.MotorCustomMessage.Data.prototype.toObject = function(e) {
            return proto.webcast.im.MotorCustomMessage.Data.toObject(e, this)
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.toObject = function(e, t) {
            var r = {
                image: o.Message.getFieldWithDefault(t, 1, ""),
                url: o.Message.getFieldWithDefault(t, 2, ""),
                content: o.Message.getFieldWithDefault(t, 3, ""),
                extra: o.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (r.$jspbMessageInstance = t),
            r
        }
        ),
        proto.webcast.im.MotorCustomMessage.Data.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
              , r = new proto.webcast.im.MotorCustomMessage.Data;
            return proto.webcast.im.MotorCustomMessage.Data.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                case 1:
                    var r = t.readString();
                    e.setImage(r);
                    break;
                case 2:
                    r = t.readString();
                    e.setUrl(r);
                    break;
                case 3:
                    r = t.readString();
                    e.setContent(r);
                    break;
                case 4:
                    r = t.readString();
                    e.setExtra(r);
                    break;
                default:
                    t.skipField()
                }
            }
            return e
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.webcast.im.MotorCustomMessage.Data.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            (r = e.getImage()).length > 0 && t.writeString(1, r),
            (r = e.getUrl()).length > 0 && t.writeString(2, r),
            (r = e.getContent()).length > 0 && t.writeString(3, r),
            (r = e.getExtra()).length > 0 && t.writeString(4, r)
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.getImage = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.setImage = function(e) {
            return o.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.getUrl = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.setUrl = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.getContent = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.setContent = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.getExtra = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.Data.prototype.setExtra = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.getCommon = function() {
            return o.Message.getWrapperField(this, s.Common, 1)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.setCommon = function(e) {
            return o.Message.setWrapperField(this, 1, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.clearCommon = function() {
            return this.setCommon(void 0)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.hasCommon = function() {
            return null != o.Message.getField(this, 1)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.getType = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.setType = function(e) {
            return o.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.getTitle = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.setTitle = function(e) {
            return o.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.getImage = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.setImage = function(e) {
            return o.Message.setProto3StringField(this, 4, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.getExtra = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.setExtra = function(e) {
            return o.Message.setProto3StringField(this, 5, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.getDataList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.webcast.im.MotorCustomMessage.Data, 6)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.setDataList = function(e) {
            return o.Message.setRepeatedWrapperField(this, 6, e)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.addData = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 6, e, proto.webcast.im.MotorCustomMessage.Data, t)
        }
        ,
        proto.webcast.im.MotorCustomMessage.prototype.clearDataList = function() {
            return this.setDataList([])
        }
        ,
        i.object.extend(t, proto.webcast.im)
    }
}]);
