const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM programos';
    db.query(sql, callback);
  }
};
