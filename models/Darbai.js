const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM darbai';
    db.query(sql, callback);
  }
};
