const devConfig = {
    MONGO_URL: 'mongodb://localhost:27017/shuvojit',
    JWT_SECRET: 'thisissecret'
};

const testConfig = {
    MONGO_URL: 'mongodb://localhost:27017/shuvojit'
};

const prodConfig = {
    MONGO_URL: 'mongodb://localhost:27017/shuvojit'
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