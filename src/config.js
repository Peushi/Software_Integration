const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'dev';
const envPath = path.resolve(__dirname, `../config/${env}.env`);

dotenv.config({ path: envPath });

module.exports = {
  env: process.env.NODE_ENV,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  }
};
