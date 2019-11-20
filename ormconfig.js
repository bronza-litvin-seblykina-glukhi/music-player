require('dotenv/config');

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['apps/server/src/modules/**/**/*.entity.ts'],
  migrationsTableName: 'migration_table',
  migrations: ['apps/server/src/migration/**/*.ts'],
  migrationsRun: false,
  synchronize: true,
  logging: true,
  cli: {
    migrationsDir: 'migration'
  }
};
