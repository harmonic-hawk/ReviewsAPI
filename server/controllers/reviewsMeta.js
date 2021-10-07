const models = require('../models')

module.exports = {
  getMeta: (req, res) => {
    models.reviewsMeta.getMetaData(req.query, (err, reviewsMeta) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(reviewsMeta)
        res.status(200).json({product_id: req.query.product_id, results: reviewsMeta})
      }
    })
  }
}