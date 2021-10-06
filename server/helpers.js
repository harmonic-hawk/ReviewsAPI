// const axios = require('axios');
// const TOKEN = require('./config.js');

// module.exports = {
//   getReviews: (req, res) => {
//     const options = {
//       headers: { Authorization: TOKEN },
//       baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
//       url: '/reviews',
//       method: 'get',
//       params: {
//         page: req.query.page || 1,
//         count: req.query.count || 5,
//         sort: req.query.sort || 'relevant',
//         product_id: req.query.product_id,
//       },
//     };
//     axios.request(options)
//       .then((response) => {
//         res.status(200).send(response.data);
//       })
//       .catch((err) => {
//         res.status(500).send(err.response.data);
//       });
//   },

//   getReviewsMeta: (req, res) => {
//     const options = {
//       headers: { Authorization: TOKEN },
//       baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
//       url: '/reviews/meta',
//       method: 'get',
//       params: { product_id: req.query.product_id },
//     };
//     axios.request(options)
//       .then((response) => {
//         res.status(200).send(response.data);
//       })
//       .catch((err) => {
//         res.status(500).send(err.response.data);
//       });
//   },

//   createReview: (req, res) => {
//     const options = {
//       headers: {
//         Authorization: TOKEN,
//       },
//       baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
//       url: '/reviews',
//       method: 'post',
//       data: {
//         product_id: req.body.product_id,
//         rating: req.body.rating,
//         summary: req.body.summary,
//         body: req.body.body,
//         recommend: req.body.recommend,
//         name: req.body.name,
//         email: req.body.email,
//         photos: req.body.photos,
//         characteristics: req.body.characteristics || {},
//       },
//     };
//     axios.request(options)
//       .then(() => {
//         res.status(201).send('Review Posted!');
//       })
//       .catch((err) => {
//         res.status(500).send(err.response.data);
//       });
//   },

//   markReviewHelpful: (req, res) => {
//     const id = req.params.review_id;
//     const options = {
//       headers: { Authorization: TOKEN },
//       baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
//       url: `/reviews/${id}/helpful`,
//       method: 'put',
//     };
//     axios.request(options)
//       .then(() => {
//         res.status(204).send('Marked Helpful!');
//       })
//       .catch((err) => {
//         res.status(500).send(err.response.data);
//       });
//   },

//   reportReview: (req, res) => {
//     const id = req.params.review_id;
//     const options = {
//       headers: { Authorization: TOKEN },
//       baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
//       url: `/reviews/${id}/report`,
//       method: 'put',
//     };
//     axios.request(options)
//       .then(() => {
//         res.status(204).send('Review Reported!');
//       })
//       .catch((err) => {
//         res.status(500).send(err.response.data);
//       });
//   },

// };

