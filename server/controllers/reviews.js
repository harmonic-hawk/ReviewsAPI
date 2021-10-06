const models = require('../models')

module.exports = {
  get: (req, res) => {
    models.reviews.getReviews(req.query, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(reviews)
        res.status(200).send(reviews)
      }
    })
  }
}
