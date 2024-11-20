// Importuoti modulius
const express = require('express');
const mysql = require('mysql2'); // MySQL prisijungimo paketas
const app = express();
const port = 3000; // Serverio portas

// Middleware JSON apdorojimui
app.use(express.json());

// MySQL prisijungimo nustatymai
const db = mysql.createConnection({
  host: 'localhost',     // Vietinis serveris
  user: 'root',          // MySQL vartotojas
  password: '1234',      // MySQL slaptažodis
  database: 'cv_api'     // Duomenų bazės pavadinimas
});

// Testuoti MySQL prisijungimą
db.connect((err) => {
  if (err) {
    console.error('Klaida prisijungiant prie MySQL:', err.stack);
    return;
  }
  console.log('Prisijungta prie MySQL, ID ' + db.threadId);
});

// Gauti asmeninę informaciją
app.get('/api/informacija', (req, res) => {
  const sqlQuery = 'SELECT * FROM informacija'; // Asmeninės informacijos lentelė

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Klaida vykdant užklausą:', err);
      res.status(500).send('Klaida gaunant informaciją');
      return;
    }
    res.json(results); // Grąžinti duomenis JSON formatu
  });
});

// Gauti kontaktus
app.get('/api/kontaktai', (req, res) => {
  const sqlQuery = 'SELECT * FROM kontaktai'; // Kontaktų lentelė

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Klaida vykdant užklausą:', err);
      res.status(500).send('Klaida gaunant kontaktus');
      return;
    }
    res.json(results); // Grąžinti kontaktus JSON formatu
  });
});

// Gauti socialinius tinklus
app.get('/api/soc-tinklai', (req, res) => {
  const sqlQuery = 'SELECT * FROM soc_tinklai'; // Socialinių tinklų lentelė

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Klaida vykdant užklausą:', err);
      res.status(500).send('Klaida gaunant socialinius tinklus');
      return;
    }
    res.json(results); // Grąžinti socialinius tinklus JSON formatu
  });
});

// Gauti programas (įgūdžius)
app.get('/api/programos', (req, res) => {
  const sqlQuery = 'SELECT * FROM programos'; // Programų (įgūdžių) lentelė

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Klaida vykdant užklausą:', err);
      res.status(500).send('Klaida gaunant programas');
      return;
    }
    res.json(results); // Grąžinti programas JSON formatu
  });
});

// Gauti atliktus darbus
app.get('/api/darbai', (req, res) => {
  const sqlQuery = 'SELECT * FROM darbai'; // Darbų lentelė

  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Klaida vykdant užklausą:', err);
      res.status(500).send('Klaida gaunant darbus');
      return;
    }
    res.json(results); // Grąžinti darbus JSON formatu
  });
});

// Serveris klauso nurodytu portu
app.listen(port, () => {
  console.log(`Serveris veikia adresu http://localhost:${port}`);
});
