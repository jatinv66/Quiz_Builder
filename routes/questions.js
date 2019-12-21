const express =require('express');
const router =express.Router();

let Question=require('../models/question');

// add route
router.get('/add',function(req,res){
res.render('add_question',{
    title:'Add Question'
});
});

//add submit post route
router.post('/add',function(req,res){

        let question = new Question();
        question.title=req.body.title;
        question.description=req.body.description;
        question.option1=req.body.option1;
        question.option2=req.body.option2;
        question.option3=req.body.option3;
        question.option4=req.body.option4;
        question.answer=req.body.answer;
        
        
        question.save(function(err){
            if(err){
                console.log(err);
                return;
            }
            else{
                req.flash('success','Question Added');
                res.redirect('/admins/admin_index');
            }
        });
    




});

//update product
router.post('/edit/:id',function(req,res){
    let question={};

        question.title=req.body.title;
        question.description=req.body.description;
        question.option1=req.body.option1;
        question.option2=req.body.option2;
        question.option3=req.body.option3;
        question.option4=req.body.option4;
        question.answer=req.body.answer;
    
    let query={_id:req.params.id}
    
    Question.update(query,question,function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            req.flash('success','Question updated');
            res.redirect('/admins/admin_index');
        }
    });
    });

router.delete('/:id',function(req,res){
    let query= {_id:req.params.id}

    Question.remove(query,function(err){
        if(err)
        {
            console.log(err);
        }
        res.send('Success');
    });
});
//load edit form
router.get('/edit/:id',function(req,res){
    Question.findById(req.params.id,function(err,question){
        res.render('edit_question',{
            title:'Edit Question',
            question:question
        });
    });
});

//get single product
router.get('/:id/:set',function(req,res){
    Question.findById(req.params.id,function(err,question){
        res.render('question',{
            question:question,
            set:req.params.set
        });
    });
});

module.exports=router;