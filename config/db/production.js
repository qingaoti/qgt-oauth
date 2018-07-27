module.exports = {
    MongoSettings: {
        mongodb: "mongodb://huanche:hc@123.57.133.126:27017/huanche-db",
        options: {
            server: {
                socketOptions: {keepAlive: 1},
                poolSize: 10
            },
            promiseLibrary: require('q').Promise
        }
    },

    RedisSettings: {
        host: "e73f192d94784631.m.cnbja.kvstore.aliyuncs.com",
        port: 6379,
        expires: 60 * 60,
        password: "Huanche123"
    },

    ApiServerAddress: "http://api.51huanche.com",
};