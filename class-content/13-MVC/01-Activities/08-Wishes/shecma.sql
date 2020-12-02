create database wishes_db;

USE wishes_db;

CREATE TABLE wishes (
  id int NOT NULL AUTO_INCREMENT,
  wish varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('Pick up milk.');
INSERT INTO wishes (wish) VALUES ('Mow the lawn.');
INSERT INTO wishes (wish) VALUES ('Call Shannon back.');