module.exports = {

    MongoSettings: {
        // mongodb: 'mongodb://huanche:hc@127.0.0.1:27017/huanche-db',
        // mongodb: 'mongodb://192.168.10.7:27017/huanche-db',
        mongodb: 'mongodb://localhost:27017/huanche-db',
        // mongodb: 'mongodb://huanche:PHuance01@172.16.100.150,172.16.100.151,172.16.100.152/huanche-db-test?replicaSet=foobar',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1,
                    //socketTimeoutMS: 5000,
                    //connectTimeoutMS: 5000
                },
                poolSize: 10
            },
            promiseLibrary: require('q').Promise
        }
    },
    RedisSettings: {
        host: "127.0.0.1",
        port: 6379,
        expires: 60 * 60,
    },
};