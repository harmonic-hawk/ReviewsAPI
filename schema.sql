CREATE DATABASE ratings_reviews

CREATE TABLE reviews(
  Id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  helpfulness INT NOT NULL,
  date DATE NOT NULL,
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  summary TEXT NOT NULL,
  body TEXT NOT NULL,
  response TEXT,
  PRIMARY KEY(Id)
);

CREATE TABLE images(
  Id INT NOT NULL AUTO_INCREMENT,
  review_id INT NOT NULL,
  url VARCHAR(600) NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);
  
CREATE TABLE meta(
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  recommended INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES reviews(product_id)
);


CREATE TABLE characteristics(
  id INT NOT NULL,
  product_id INT NOT NULL,
  Size INT NOT NULL,
  Width INT NOT NULL,
  Comfort INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES reviews(product_id)
);
