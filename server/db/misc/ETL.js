LOAD DATA LOCAL INFILE '/home/ubuntu/CSVDATA/reviews.csv'
 INTO TABLE reviews
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;


 LOAD DATA LOCAL INFILE '/home/ubuntu/CSVDATA/reviews_photos.csv'
 INTO TABLE review_photos
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;


 LOAD DATA LOCAL INFILE '/home/ubuntu/CSVDATA/characteristic_reviews.csv'
 INTO TABLE characteristics_reviews
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;


 LOAD DATA LOCAL INFILE '/home/ubuntu/CSVDATA/characteristics.csv'
 INTO TABLE characteristics
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS
 ;

 \copy characteristics_reviews(id, characteristics_id, review_id, value) FROM '/Users/juanvmeji/Desktop/SDC/characteristics.csv' DELIMITER ',' CSV HEADER;

 characteristic_reviews.csv
 characteristic_reviews.csv