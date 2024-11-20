const programosModel = require('../models/Programos');

module.exports = {
  getAllPrograms: (req, res) => {
    programosModel.getAll((err, results) => {
      if (err) {
        console.error('Error fetching programs:', err);
        return res.status(500).send('Error fetching programs');
      }
      res.json(results);
    });
  }
};
