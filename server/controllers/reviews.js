const models = require('../models')
const parser = require('./parser.js')
module.exports = {
  get: (req, res) => {
    models.reviews.getReviews(req.query, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {

        res.status(200).json({product_id: req.query.product_id, results: reviews})
      }
    })
  }
}
