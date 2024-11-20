const kontaktaiModel = require('../models/Kontaktai');

module.exports = {
  getAllContacts: (req, res) => {
    kontaktaiModel.getAll((err, results) => {
      if (err) {
        console.error('Error fetching contacts:', err);
        return res.status(500).send('Error fetching contacts');
      }
      res.json(results);
    });
  }
};
