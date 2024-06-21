var sFunc = function (e, t) {
    // 判断e是不是string类型，是的话，把t赋值给e，然后
    e.constructor == String
        ? stringToBytes(e)
        : oFunc(e)
        ? (e = Array.prototype.slice.call(e, 0))
        : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString())
    for (
        var r = bytesToWords(e),
            l = 8 * e.length,
            c = 1732584193,
            u = -271733879,
            p = -1732584194,
            d = 271733878,
            h = 0;
        h < r.length;
        h++
    )
        r[h] =
            (((r[h] << 8) | (r[h] >>> 24)) & 16711935) |
            (((r[h] << 24) | (r[h] >>> 8)) & 4278255360)
    ;(r[l >>> 5] |= 128 << l % 32), (r[(((l + 64) >>> 9) << 4) + 14] = l)
    for (var m = sff, f = sgg, g = shh, _ = sii, h = 0; h < r.length; h += 16) {
        var v = c,
            C = u,
            y = p,
            T = d
        ;(c = m(c, u, p, d, r[h + 0], 7, -680876936)),
            (d = m(d, c, u, p, r[h + 1], 12, -389564586)),
            (p = m(p, d, c, u, r[h + 2], 17, 606105819)),
            (u = m(u, p, d, c, r[h + 3], 22, -1044525330)),
            (c = m(c, u, p, d, r[h + 4], 7, -176418897)),
            (d = m(d, c, u, p, r[h + 5], 12, 1200080426)),
            (p = m(p, d, c, u, r[h + 6], 17, -1473231341)),
            (u = m(u, p, d, c, r[h + 7], 22, -45705983)),
            (c = m(c, u, p, d, r[h + 8], 7, 1770035416)),
            (d = m(d, c, u, p, r[h + 9], 12, -1958414417)),
            (p = m(p, d, c, u, r[h + 10], 17, -42063)),
            (u = m(u, p, d, c, r[h + 11], 22, -1990404162)),
            (c = m(c, u, p, d, r[h + 12], 7, 1804603682)),
            (d = m(d, c, u, p, r[h + 13], 12, -40341101)),
            (p = m(p, d, c, u, r[h + 14], 17, -1502002290)),
            (u = m(u, p, d, c, r[h + 15], 22, 1236535329)),
            (c = f(c, u, p, d, r[h + 1], 5, -165796510)),
            (d = f(d, c, u, p, r[h + 6], 9, -1069501632)),
            (p = f(p, d, c, u, r[h + 11], 14, 643717713)),
            (u = f(u, p, d, c, r[h + 0], 20, -373897302)),
            (c = f(c, u, p, d, r[h + 5], 5, -701558691)),
            (d = f(d, c, u, p, r[h + 10], 9, 38016083)),
            (p = f(p, d, c, u, r[h + 15], 14, -660478335)),
            (u = f(u, p, d, c, r[h + 4], 20, -405537848)),
            (c = f(c, u, p, d, r[h + 9], 5, 568446438)),
            (d = f(d, c, u, p, r[h + 14], 9, -1019803690)),
            (p = f(p, d, c, u, r[h + 3], 14, -187363961)),
            (u = f(u, p, d, c, r[h + 8], 20, 1163531501)),
            (c = f(c, u, p, d, r[h + 13], 5, -1444681467)),
            (d = f(d, c, u, p, r[h + 2], 9, -51403784)),
            (p = f(p, d, c, u, r[h + 7], 14, 1735328473)),
            (u = f(u, p, d, c, r[h + 12], 20, -1926607734)),
            (c = g(c, u, p, d, r[h + 5], 4, -378558)),
            (d = g(d, c, u, p, r[h + 8], 11, -2022574463)),
            (p = g(p, d, c, u, r[h + 11], 16, 1839030562)),
            (u = g(u, p, d, c, r[h + 14], 23, -35309556)),
            (c = g(c, u, p, d, r[h + 1], 4, -1530992060)),
            (d = g(d, c, u, p, r[h + 4], 11, 1272893353)),
            (p = g(p, d, c, u, r[h + 7], 16, -155497632)),
            (u = g(u, p, d, c, r[h + 10], 23, -1094730640)),
            (c = g(c, u, p, d, r[h + 13], 4, 681279174)),
            (d = g(d, c, u, p, r[h + 0], 11, -358537222)),
            (p = g(p, d, c, u, r[h + 3], 16, -722521979)),
            (u = g(u, p, d, c, r[h + 6], 23, 76029189)),
            (c = g(c, u, p, d, r[h + 9], 4, -640364487)),
            (d = g(d, c, u, p, r[h + 12], 11, -421815835)),
            (p = g(p, d, c, u, r[h + 15], 16, 530742520)),
            (u = g(u, p, d, c, r[h + 2], 23, -995338651)),
            (c = _(c, u, p, d, r[h + 0], 6, -198630844)),
            (d = _(d, c, u, p, r[h + 7], 10, 1126891415)),
            (p = _(p, d, c, u, r[h + 14], 15, -1416354905)),
            (u = _(u, p, d, c, r[h + 5], 21, -57434055)),
            (c = _(c, u, p, d, r[h + 12], 6, 1700485571)),
            (d = _(d, c, u, p, r[h + 3], 10, -1894986606)),
            (p = _(p, d, c, u, r[h + 10], 15, -1051523)),
            (u = _(u, p, d, c, r[h + 1], 21, -2054922799)),
            (c = _(c, u, p, d, r[h + 8], 6, 1873313359)),
            (d = _(d, c, u, p, r[h + 15], 10, -30611744)),
            (p = _(p, d, c, u, r[h + 6], 15, -1560198380)),
            (u = _(u, p, d, c, r[h + 13], 21, 1309151649)),
            (c = _(c, u, p, d, r[h + 4], 6, -145523070)),
            (d = _(d, c, u, p, r[h + 11], 10, -1120210379)),
            (p = _(p, d, c, u, r[h + 2], 15, 718787259)),
            (u = _(u, p, d, c, r[h + 9], 21, -343485551)),
            (c = (c + v) >>> 0),
            (u = (u + C) >>> 0),
            (p = (p + y) >>> 0),
            (d = (d + T) >>> 0)
    }
    return endian([c, u, p, d])
}

// (s._blocksize = 16)
// (s._digestsize = 16)

const sff = function (e, t, r, i, n, o, a) {
    var s = e + ((t & r) | (~t & i)) + (n >>> 0) + a
    return ((s << o) | (s >>> (32 - o))) + t
}

const sgg = function (e, t, r, i, n, o, a) {
    var s = e + ((t & i) | (r & ~i)) + (n >>> 0) + a
    return ((s << o) | (s >>> (32 - o))) + t
}

const shh = function (e, t, r, i, n, o, a) {
    var s = e + (t ^ r ^ i) + (n >>> 0) + a
    return ((s << o) | (s >>> (32 - o))) + t
}

const sii = function (e, t, r, i, n, o, a) {
    var s = e + (r ^ (t | ~i)) + (n >>> 0) + a
    return ((s << o) | (s >>> (32 - o))) + t
}

const stringToBytes = function (str) {
    var array = new Uint8Array(str.length)
    for (var i = 0, l = str.length; i < l; i++) {
        array[i] = str.charCodeAt(i)
    }
    return array
}

const oFunc = function (e) {
    return (
        null != e &&
        (t(e) ||
            ('function' == typeof e.readFloatLE &&
                'function' == typeof e.slice &&
                t(e.slice(0, 0))) ||
            !!e._isBuffer)
    )
}

const bytesToWords = function (e) {
    for (var t = [], r = 0, i = 0; r < e.length; r++, i += 8)
        t[i >>> 5] |= e[r] << (24 - (i % 32))
    return t
}

const wordsToBytes = function (e) {
    for (var t = [], r = 0; r < 32 * e.length; r += 8)
        t.push((e[r >>> 5] >>> (24 - (r % 32))) & 255)
    return t
}

const endian = function (e) {
    if (e.constructor == Number)
        return (16711935 & rotl(e, 8)) | (4278255360 & rotl(e, 24))
    for (var t = 0; t < e.length; t++) e[t] = endian(e[t])
    return e
}

const rotl = function (e, t) {
    return (e << t) | (e >>> (32 - t))
}

const bytesToHex = function (e) {
    for (var t = [], r = 0; r < e.length; r++)
        t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16))
    return t.join('')
}
