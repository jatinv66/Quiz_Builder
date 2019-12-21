const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

let Admin = require('../models/admin');
let Question=require('../models/question');


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
router.get('/login', function(req, res){
    res.render('admin_login');
  });

  router.get('/question/:id', function(req, res){
    Question.findById(req.params.id,function(err,question){
      res.render('admin_question',{
          question:question
      });
  });
  });

router.get('/admin_index', function(req, res){
  Question.find({},function(err,questions){
    if(err){
        console.log(err);
    }
    else{
       res.render('admin_view',{
           title:'Questions',
           questions:questions
           });
    }
   
});
});

router.post('/login',function(req,res,next){
    passport.authenticate('admin', {
        successRedirect:'/admins/admin_index',
        failureRedirect:'/admins/login',
        failureFlash: true
      })(req, res, next);
});

router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/admins/login');
});
  module.exports =router;