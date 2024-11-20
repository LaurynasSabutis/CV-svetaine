const darbaiModel = require('../models/Darbai');

module.exports = {
  getAllWorks: (req, res) => {
    darbaiModel.getAll((err, results) => {
      if (err) {
        console.error('Error fetching works/projects:', err);
        return res.status(500).send('Error fetching works/projects');
      }
      res.json(results);
    });
  }
};
