const express =require('express');
const router =express.Router();

let Response=require('../models/response');


//submit test
router.get('/submit/:uid/:set',function(req,res){
    Response.find({userID:req.params.uid},function(err,responses){
      if(err)
      {
        console.log(err);
      }
      else{
        //console.log(responses[0].respon.length);
        let score=0
       for(var i=0;i<responses[0].respon.length;i++)
       {
         let string1=responses[0].respon[i].response_answer;
         let string2=responses[0].respon[i].answer;
        //  console.log(responses[0].respon[i].response_answer);
        //  console.log(responses[0].respon[i].answer);
          if(string1==string2){
            score=score+1;
          }
       }
       res.render('score',{
         score:score
       })
      }
    })
  })

router.post('/addresponse/:qid/:uid/:set',function(req,res){
    let query={userID:req.params.uid};
    Response.update(query,{
        $addToSet:{
            respon:{
            questionID:req.params.qid,
            response_answer:req.body.response,
            answer:req.body.answer
            }
        }            
    },{upsert:true},function(err,){
        if(err){
            console.log(err);
            return;
        }
        else{
            req.flash('success','Response Added');
            res.redirect('/tests/testAttempt/'+req.params.uid+'/set/'+req.params.set);
        }
    })
    
})

module.exports=router;