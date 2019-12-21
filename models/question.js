const mongoose = require('mongoose');

// User Schema
const QuestionSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  option1:{
    type: String,
    required: true
  },
  option2:{
    type: String,
    required: true
  },
  option3:{
    type: String,
    required: true
  },
  option4:{
    type: String,
    required: true
  },
  answer:{
      type:String,
      required: true
  }
});

const Question = module.exports = mongoose.model('Question', QuestionSchema);
