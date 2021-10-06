const db = require('../db');

module.exports = {
  getReviews: (data, callback) => {
    const {product_id, count} = data
    db.query(`SELECT * FROM reviews LEFT JOIN review_photos ON review_id = reviews.id WHERE product_id=${product_id} limit ${count}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}