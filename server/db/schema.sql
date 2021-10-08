DROP DATABASE IF EXISTS ratings_reviews;

CREATE DATABASE ratings_reviews;

use ratings_reviews;

-- id,product_id,rating,date,summary,body,recommend,reported,reviewer_name,reviewer_email,response,helpfulness
-- 1,1,5,1596080481467,“This product was great!“,”I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.“,true,false,“funtime”,“first.last@gmail.com”,null,8

CREATE TABLE reviews (
  id INT NOT NULL,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  date BIGINT NOT NULL,
  summary TEXT NOT NULL,
  body TEXT NOT NULL,
  recommend BOOLEAN NOT NULL,
  reported BOOLEAN NOT NULL,
  reviewer_name VARCHAR(50) NOT NULL,
  reviewer_email VARCHAR(50) NOT NULL,
  response TEXT,
  helpfulness INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

-- id,review_id,url
-- 1,5,“https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80”
-- 2,5,“https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80”
-- 3,5,“https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80”

CREATE TABLE images(
  id INT NOT NULL,
  review_id INT NOT NULL,
  url text NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(id),
  PRIMARY KEY(id)
);

-- id,product_id,name
-- 1,1,“Fit”
-- 2,1,“Length”
-- 3,1,“Comfort”
-- 4,1,“Quality”

CREATE TABLE characteristics(
  id INT NOT NULL,
  product_id INT NOT NULL,
  name VARCHAR(50),
  PRIMARY KEY(id)
);

-- id,characteristic_id,review_id,value
-- 1,1,1,4
-- 2,2,1,3
-- 3,3,1,5

CREATE TABLE characteristics_reviews(
  id INT NOT NULL,
  characteristics_id INT NOT NULL,
  review_id INT NOT NULL,
  value INT,
  FOREIGN KEY (review_id) REFERENCES reviews(id),
  FOREIGN KEY (characteristics_id) REFERENCES characteristics(id),
  PRIMARY KEY(id)
  );
