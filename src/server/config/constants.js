// MONGO_URL: 'mongodb:/root:12345@ds117540.mlab.com:17540/siu-final'

const devConfig = {
    MONGO_URL: "mongodb://root:12345@ds119490.mlab.com:19490/siufinal",
    // MONGO_URL: 'mongodb://localhost:27017/shuvojit02',
    JWT_SECRET: 'thisissecret'
};

const testConfig = {
    MONGO_URL: "mongodb://root:12345@ds119490.mlab.com:19490/siufinal"
    // MONGO_URL: 'mongodb://localhost:27017/shuvojit02'
};

const prodConfig = {
    MONGO_URL: "mongodb://root:12345@ds119490.mlab.com:19490/siufinal"
    // MONGO_URL: 'mongodb://localhost:27017/shuvojit02'
};

const defaultConfig = {
    PORT: process.env.PORT || 5000
};

function envConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig
        default:
            return prodConfig;
    }
}

module.exports ={
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
}