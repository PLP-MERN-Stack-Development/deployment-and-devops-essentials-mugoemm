const REQUIRED_ENV_VARS = ['MONGODB_URI'];

const missingVars = REQUIRED_ENV_VARS.filter((variable) => !process.env[variable]);

if (missingVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
}

const parseNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const parseCsv = (value) => {
  if (!value) return [];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseNumber(process.env.PORT, 5000),
  mongo: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME,
    poolSize: parseNumber(process.env.MONGODB_POOL_SIZE, 10),
  },
  corsOrigins: parseCsv(process.env.CORS_ORIGIN),
};

