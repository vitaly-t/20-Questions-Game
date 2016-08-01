var pgp = require('pg-promise')({
    // Initialization Options
});

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/twenty-questions';

var db = pgp(connectionString);

module.exports = {
  pgp: pgp,
  db: db,
}
