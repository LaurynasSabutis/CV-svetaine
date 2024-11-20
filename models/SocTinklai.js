const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM soc_tinklai';
    db.query(sql, callback);
  }
};
