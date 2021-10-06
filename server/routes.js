const express = require('express');

const router = express.Router();
const controllers = require('./controllers');


/// /////////////////////////////////////////
/// ////////     REVIEWS API     ////////////
/// /////////////////////////////////////////

// General GET request for the reviews API, default params are 1 page and 5 results per page;
// sort & product_id are also required; sort can equal "newest", "helpful", or "relevant"
router.get('/reviews', controllers.reviews.get);

// GET request that returns reviews metadata for a given product; product_id required query param
router.get('/reviews/meta', (req, res) => { helpers.getReviewsMeta(req, res); });

// POST request that creates a new review; body should include: product_id, rating, summary, body,
// recommend, name, email, photos, characteristics
router.post('/reviews', (req, res) => { helpers.createReview(req, res); });

// PUT request that marks a review as helpful
router.put('/reviews/:review_id/helpful', (req, res) => { helpers.markReviewHelpful(req, res); });

// PUT request that updates a review to show it was reported. Note: this action does not delete the
// review, but the review will not be returned in the above GET request.
router.put('/reviews/:review_id/report', (req, res) => { helpers.reportReview(req, res); });



module.exports = router;
