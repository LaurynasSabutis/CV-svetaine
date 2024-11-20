const Informacija = require('../models/Informacija');

exports.getInformacija = async (req, res) => {
    try {
        const informacija = await Informacija.findAll();
        res.json(informacija);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
