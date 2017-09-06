
var actAr_AE = require('./data/ar_AE/account'),
    actDe_DE = require('./data/de_DE/account'),
    actEn_GB = require('./data/en_GB/account'),
    actEn_US = require('./data/en_US/account'),
    actHi_IN = require('./data/hi_IN/account'),
    actJa_JP = require('./data/ja_JP/account'),
    actPl_PL = require('./data/pl_PL/account'),
    actPt_BR = require('./data/pt_BR/account'),
    actRo_RO = require('./data/ro_RO/account'),
    actRu_RU = require('./data/ru_RU/account'),
    actTr_TR = require('./data/tr_TR/account'),
    actUk_UA = require('./data/uk_UA/account'),
    actZh_CN = require('./data/zh_CN/account');


var account = {
    ar_AE: actAr_AE,
    de_DE: actDe_DE,
    en_GB: actEn_GB,
    en_US: actEn_US,
    hi_IN: actHi_IN,
    ja_JP: actJa_JP,
    pl_PL: actPl_PL,
    pt_BR: actPt_BR,
    ro_RO: actRo_RO,
    ru_RU: actRu_RU,
    tr_TR: actTr_TR,
    uk_UA: actUk_UA,
    zh_CN: actZh_CN
}

module.exports.account = account;