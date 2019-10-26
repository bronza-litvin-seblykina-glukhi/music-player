module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1',
  database: 'music_player',
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
