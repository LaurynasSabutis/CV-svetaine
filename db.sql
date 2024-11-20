CREATE DATABASE cv_database;

USE cv_database;

CREATE TABLE Informacija (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pavadinimas VARCHAR(255) NOT NULL,
    reiksme TEXT NOT NULL
);

CREATE TABLE Kontaktai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pavadinimas VARCHAR(255) NOT NULL,
    ikonele VARCHAR(255),
    reiksme VARCHAR(255) NOT NULL
);

CREATE TABLE SocTinklai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pavadinimas VARCHAR(255) NOT NULL,
    ikonele VARCHAR(255),
    adresas VARCHAR(255) NOT NULL
);

CREATE TABLE Programos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pavadinimas VARCHAR(255) NOT NULL,
    ikonele VARCHAR(255)
);

CREATE TABLE Darbai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pavadinimas VARCHAR(255) NOT NULL,
    aprasymas TEXT,
    svetaine_adresas VARCHAR(255),
    git_kodo_adresas VARCHAR(255),
    nuotraukos JSON
);
