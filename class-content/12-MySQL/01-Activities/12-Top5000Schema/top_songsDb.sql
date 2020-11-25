DROP DATABASE IF EXISTS top_songsBD;
CREATE DATABASE top_songsBD;

USE top_songsBD;

CREATE TABLE songs(
    id INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(35) NOT NULL,
    title VARCHAR(35) NOT NULL,
    year INT(4) NULL,
    popularity DECIMAL(3,3) NULL,
    popularity_usa DECIMAL(3,3) NULL,
    popularity_uk DECIMAL(3,3) NULL,
    popularity_europe DECIMAL(3,3) NULL,
    popularity_row DECIMAL(3,3) NULL,
    PRIMARY KEY(id)
);
