// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///game-shop'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
