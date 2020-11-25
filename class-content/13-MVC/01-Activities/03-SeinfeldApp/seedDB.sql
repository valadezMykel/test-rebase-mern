DROP DATABASE IF EXISTS lameDB;

CREATE DATABASE lameDB;

USE lameDB;

CREATE TABLE people(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(15) NOT NULL,
    lames INT(3),
    attitude VARCHAR(20),
    PRIMARY KEY(id)
);

INSERT INTO people(name, lames, attitude) VALUES("Jerry", 55, "bad");

INSERT INTO people(name, lames, attitude) VALUES("Jenna", 70, "having none of it");

INSERT INTO people(name, lames, attitude) VALUES("David", 15, "cool I guess");
