CREATE DATABASE ratings_reviews

CREATE TABLE reviews(
  Id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  helpfulness INT NOT NULL DEFAULT 0,
  date DATE NOT NULL,
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  summary TEXT NOT NULL,
  body TEXT NOT NULL,
  response TEXT,
  PRIMARY KEY(Id)
);

CREATE TABLE images(
  Id INT NOT NULL AUTO_INCREMENT,
  review_id INT NOT NULL,
  url text NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);

CREATE TABLE characteristics(
  id INT NOT NULL,
  product_id INT NOT NULL,
  name: VARCHAR(50)
);

CREATE TABLE characteristics_reviews(
  id INT NOT NULL AUTO_INCREMENT,
  review_id INT NOT NULL,
  characteristics_id INT NOT NULL,
  value: INT,
  FOREIGN KEY (review_id) REFERENCES reviews(id)
  FOREIGN KEY (characteristics_id) REFERENCES characteristics(id)
  )
