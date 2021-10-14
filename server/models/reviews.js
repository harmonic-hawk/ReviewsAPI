const db = require('../db');

module.exports = {
  getReviews: (data, callback) => {
    const {product_id, count} = data
    db.query(`SELECT reviews.id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness,
        JSON_OBJECT('id', review_photos.id, 'url', review_photos.url ) FROM reviews LEFT JOIN review_photos ON review_id = reviews.id WHERE product_id=${product_id} limit ${count}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}
