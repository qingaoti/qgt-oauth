const _ = require('lodash');

let _default = {
    MongoSettings: {
        //mongodb: "mongodb://huanche:hc@172.16.100.160:27017/huanche-db-test",
        mongodb: "mongodb://127.0.0.1:27017/test",
        //mongodb: "mongodb://huanche:hc@bridge.cheweilai.cn:3688/huanche-db-test",
        options: {
            server: {
                socketOptions: {keepAlive: 1},
                poolSize: 10,
            },
            promiseLibrary: require('q').Promise
        }
    },
    RedisSettings: {
        host: "127.0.0.1",
        port: 6379,
        expires: 60 * 60,
        options: {
            connect_timeout: 1000 * 2,
        }
    },

    WEIBO_API_GET_UID_URL: 'https://api.weibo.com/2/account/get_uid.json',
    WECHAT_API_AUTH_URL: 'https://api.weixin.qq.com/sns/auth',

    WECHAT_APP_ID: "you key here",
    WEIBO_APP_ID: "you key here",

    MAX_LOGIN_ATTEMPTS: 500,
    DefaultPassword: "$2a$05$ibhS3PbYFIUu94h6dn2vpenNTsx7HdmECLfoOfZnzL7wY0MnWSCKK",

    SYSTEM_SECRET: "huanche_oauth",
    PHONE_CODE_EXPIRE: "180",
    SENTRY_DSN: "http://3ff8a8b668134d9ba5b7feb2c6276555:defff11e134a4f559937799a5c51ccc1@sentry.cheweilai.cn/2",
    ApiServerAddress: "http://127.0.0.1:3008",
};

let env = process.env.NODE_ENV === undefined ? 'development' : process.env.NODE_ENV;

module.exports = _.extend(_default, require('./' + env + '.js') || {});