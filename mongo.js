const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: {type: Number, required: true},
  rating: {type: Number, required: true},
  helpfulness: {type: Number, required: true, default: 0},
  date: {type: Date, required:true},
  recommend: {type:Boolean, default: false},
  reported: {type:Boolean, default: false},
  summary: String,
  body: {type: String, required:true},
  reviewer_name: {type: String, required:true},
  reviewer_email: {type: String, required:true},
  response: {type: string},
  });
  
  const reviewImageSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  review_id: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },
  url: String
})
