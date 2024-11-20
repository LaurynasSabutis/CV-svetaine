const socTinklaiModel = require('../models/SocTinklai');

module.exports = {
  getAllSocialNetworks: (req, res) => {
    socTinklaiModel.getAll((err, results) => {
      if (err) {
        console.error('Error fetching social networks:', err);
        return res.status(500).send('Error fetching social networks');
      }
      res.json(results);
    });
  }
};
