LOAD DATA LOCAL INFILE '/Users/juanvmeji/Desktop/SDC/reviews.csv'
 INTO TABLE reviews
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;

 LOAD DATA LOCAL INFILE '/Users/juanvmeji/Desktop/SDC/reviews_photos.csv'
 INTO TABLE images
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;

 LOAD DATA LOCAL INFILE '/Users/juanvmeji/Desktop/SDC/characteristic_reviews.csv'
 INTO TABLE characteristic_reviews
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;

 LOAD DATA LOCAL INFILE '/Users/juanvmeji/Desktop/SDC/characteristics.csv'
 INTO TABLE characteristics
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;