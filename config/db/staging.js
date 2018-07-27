module.exports = {
    MongoSettings: {
        //mongodb: "mongodb://huanche:hc@mongo.test.master.localdomain:27017,mongo.test.slave.localdomain:27017/huanche-db-staging?replicaSet=foba",
        mongodb: "mongodb://huanche:PHuance01@mongo.test.ts01.localdomain,mongo.test.ts02.localdomain,mongo.test.ts03.localdomain/huanche-db-staging?replicaSet=foobar",
        options: {
            server: {
                socketOptions: {keepAlive: 1},
                poolSize: 10
            },
            promiseLibrary: require('q').Promise
        }
    },

    RedisSettings: {
        host: "redis.staging.localdomain",
        port: 6379,
        expires: 60 * 60
    },

    ApiServerAddress: "http://s-api.51huanche.com",
};