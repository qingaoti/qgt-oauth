module.exports = {
    MongoSettings: {
        mongodb: "mongodb://huanche:PHuance01@mongo.prod.prod01.localdomain,mongo.prod.prod02.localdomain,mongo.prod.prod03.localdomain/huanche-db?replicaSet=foobar",
        options: {
            server: {
                socketOptions: {keepAlive: 1},
                poolSize: 10
            },
            promiseLibrary: require('q').Promise
        }
    },

    RedisSettings: {
        host: "redis.prod.localdomain",
        port: 6379,
        expires: 60 * 60,
    },

    ApiServerAddress: "http://api.51huanche.com",
};