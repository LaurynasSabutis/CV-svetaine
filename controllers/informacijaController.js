var createError = require("http-errors");
var informacija = require("../models/informacija");

const { body, param, validationResult } = require("express-validator");

// čia turi būti informacijos įrašų CRUD funkcijos
// index() - GET - informacijos sąrašas
// show() - GET - informacijos įrašo atvaizdavimas
// store() - POST - naujas informacijos įrašas
// update() - PUT - informacijos įrašo atnaujinimas
// destroy() - DELETE - informacijos įrašo trynimas (ištrinimas)
// edit() - informacijos įrašo redagavimas - api nenaudojamas
// create() - naujo informacijos įrašo sukurimas - api nenaudojamas

// informacijoa sąrašas
/**
 * Ištraukia informacijos elementų sąrašą
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports.index = async (req, res, next) => {
  try {
    const informacijos_sarasas = await informacija.selectAll();
    if (informacijos_sarasas) {
      res.json(informacijos_sarasas);
    } else {
      res.status(404).json({ error: "Informacijos įrašas nerastas" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
  // res.json(informacijos_sarasas);
  // res.json([]);
};

module.exports.idParamValidator = () => param("id").isInt();

// informacijos irašas
module.exports.show = async (req, res, next) => {
  const validation = validationResult(req);
  // console.log(validation);

  if (validation.isEmpty()) {
    let iraso_duomenys = await informacija.selectById(req.params.id);

    if (iraso_duomenys) {
      res.json(iraso_duomenys);
    } else {
      res.status(404).json({ error: "Informacijos įrašas nerastas" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Duomenų klaida", errors: validation.errors });
  }
};

module.exports.storeValidator = () => [
  body("pavadinimas").trim().notEmpty().escape(),
  body("reiksme").trim().notEmpty().escape(),
];

module.exports.store = async (req, res, next) => {
  // surenkame ir validuojame duomenis
  const validation = validationResult(req);
  if (validation.isEmpty()) {
    const data = {};
    data.pavadinimas = req.body.pavadinimas;
    data.reiksme = req.body.reiksme;

    let insertId = await informacija.insert(data);

    if (insertId) {
      res.json({
        status: "success",
        message: "Informacijos elementas sukurtas",
        id: insertId,
      });
    } else {
      res.status(500).json({ error: "Nepavyko įterpti informacijos" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Duomenų klaida", errors: validation.errors });
  }
};

module.exports.updateValidator = () => [
  param("id").isInt(),
  body("pavadinimas").trim().notEmpty().optional().escape(),
  body("reiksme").trim().notEmpty().optional().escape(),
];

module.exports.update = async (req, res, next) => {
  // paimame informacijos elementą pagal id, jei toks yra
  const validation = validationResult(req);
  if (validation.isEmpty()) {

    let informacijos_id = req.params.id;
    let iraso_duomenys = await informacija.selectById(informacijos_id);

    if (iraso_duomenys) {
      const data = {};
      data.pavadinimas = req.body.pavadinimas ?? iraso_duomenys.pavadinimas;
      data.reiksme = req.body.reiksme ?? iraso_duomenys.reiksme;

      let result = await informacija.update(data, informacijos_id);

      if (result) {
        res.json({
          status: "success",
          message: "Informacijos elementas sėkmingai pakeistas",
        });
      } else {
        res.status(500).json({ error: "Nepavyko įterpti informacijos" });
      }
    } else {
      res.status(404).json({ error: "Informacijos įrašas nerastas" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Duomenų klaida", errors: validation.errors });
  }
};

module.exports.destroy = async (req, res, next) => {
  // paimame informacijos elementą pagal id, jei toks yra
  const validation = validationResult(req);
  if (validation.isEmpty()) {
    let informacijos_id = req.params.id;
    let iraso_duomenys = await informacija.selectById(informacijos_id);

    if (iraso_duomenys) {
      let result = await informacija.delete(informacijos_id);

      if (result) {
        res.json({
          status: "success",
          message: "Informacijos elementas sėkmingai ištrintas",
        });
      } else {
        res.status(500).json({ error: "Nepavyko ištrinti informacijos" });
      }
    } else {
      res.status(404).json({ error: "Informacijos įrašas nerastas" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Duomenų klaida", errors: validation.errors });
  }
};