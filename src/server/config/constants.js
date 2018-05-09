const devConfig = {
    MONGO_URL: 'mongodb:/root:12345@ds117540.mlab.com:17540/siu-final',
    JWT_SECRET: 'thisissecret'
};

const testConfig = {
    MONGO_URL: 'mongodb:/root:12345@ds117540.mlab.com:17540/siu-final'
};

const prodConfig = {
    MONGO_URL: 'mongodb:/root:12345@ds117540.mlab.com:17540/siu-final'
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