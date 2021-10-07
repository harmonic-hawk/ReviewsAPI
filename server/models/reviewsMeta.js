const db = require('../db')

module.exports = {
  getMetaData: (data, callback) => {
    const product_id = data.product_id;

    db.query(`SELECT rating, recommend FROM reviews INNER JOIN characteristic_reviews ON reviews.id = characteristic_reviews.review_id INNER JOIN characteristics ON characteristic_reviews.characteristic_id = characteristics.id WHERE (reviews.product_id = ${product_id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}