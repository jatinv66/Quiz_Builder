const mongoose = require('mongoose');

// User Schema
const TestSchema = mongoose.Schema({
setno:{
    type:String,
    required:true
},
questions:[{
  quesID:{
    type: String,
    required: true
  },
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
}]
});

const Test = module.exports = mongoose.model('Test', TestSchema);
