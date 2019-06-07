module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipebook.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: './migrations',
      tablename: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
