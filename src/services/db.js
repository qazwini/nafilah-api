const { DATABASE_FILENAME } = require('../../config');
const sqlite = require('better-sqlite3');

const db = new sqlite(DATABASE_FILENAME, {fileMustExist: true});

function query(sql, params) {
    return db.prepare(sql).all(params);
}

module.exports = { query }
