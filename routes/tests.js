const express = require('express');
const router = express.Router();

let Question=require('../models/question');
let Test=require('../models/test');


//get test
router.get('/testAttempt/:uid/set/:set',function(req,res){
      Test.find({setno:req.params.set},function(err,test_questions){
        if(err)
        {
          console.log(err);
        }
        else{
          res.render('test',{
            questions:test_questions[0].questions,
            set:req.params.set
          })
        }
      })
})

router.get('/createtest', function(req, res){
    Question.find({},function(err,questions){
      if(err){
          console.log(err);
      }else
    {
      res.render('createTest',{
        questions:questions
        });
    }
  });
  });

//add question to test
router.get('/question/:id',function(req,res){
    Question.findById(req.params.id,function(err,question){
        if(err){
            console.log(err);
        }else
      {
        res.render('question_test',{
            question:question
        });
      }
    });
})

router.post('/add_question_to_test/:id',function(req,res){
    Question.findById(req.params.id,function(err,question){
        if(err){
            console.log(err);
        }else
      {
    
        let set=req.body.set;
        let query={setno:set};
        Test.update(query,{
            $addToSet:{
                questions:{
                title:question.title,
                quesID:req.params.id,
            description:question.description,
            option1:question.option1,
            option2:question.option2,
            option3:question.option3,
            option4:question.option4,
            answer:question.answer
                }
            }            
        },{upsert:true},function(err,){
            if(err){
                console.log(err);
                return;
            }
            else{
                req.flash('success','Question Added');
                res.redirect('/tests/question/'+question._id);
            }
        })
      }
    });
})
module.exports =router;