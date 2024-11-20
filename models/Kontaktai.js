const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM kontaktai';
    db.query(sql, callback);
  }
};
