require('dotenv').config();

const envs = {
    API_KEY: process.env.API_KEY,
    APP_ENV: process.env.APP_ENV,
    APP_PORT: process.env.APP_PORT,
    APP_URL: process.env.APP_URL,
    DEV_ID: process.env.DEV_ID,
};

module.exports = envs;