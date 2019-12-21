const mongoose = require('mongoose');

// User Schema
const ResponseSchema = mongoose.Schema({
  userID:{
    type: String,
    required: true
  },
  respon:[{
  questionID:{
    type: String,
    required: true
  },
  response_answer:{
    type: String,
    required: true
  },
  answer:{
    type: String,
    required: true
  }}]
});

const Response = module.exports = mongoose.model('Response', ResponseSchema);
