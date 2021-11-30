DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;


CREATE TABLE title (
  id INT PRIMARY KEY AUTO_INCREMENT,
  year INT(4),
  runtime VARCHAR(100),
  rating VARCHAR(10),
  watched BOOLEAN
);

CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titleID INT NOT NULL,
  FOREIGN KEY (titleID) REFERENCES title (id)
);