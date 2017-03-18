const express = require('express');
const config = require('../config/database');
const router = express.Router();
const Threeway = require('../models/threewaytips');
const Btts = require('../models/bttstips');
const Over = require('../models/overtips');

//THREEWAY TIPS
//Create a threeway tip
router.post('/threeway', (req,res,next) => {
    let newTip = new Threeway({
        matchday: req.body.matchday,
        time: req.body.time,
        league: req.body.league,
        match: req.body.match,
        tip: req.body.tip,
        result: req.body.result,
    });
    newTip.save((err,newTip) =>{
        if(err){
            return res.send(err).status(500);
        }else{
            return res.json(newTip).status(200);
        }
    })
});

//Get all threeway tips
router.get('/threeway', (req,res,next) => {
    Threeway.find({},(err, tips)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(tips).status(200);
        }
    }).sort({_id:-1}).limit(6);
});

//Get a particular threeway tip
router.get('/threeway/:id', (req,res,next) => {
    Threeway.findById({_id:req.params.id},(err, tip)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(tip).status(200);
        }
    });
});

//Update a particular threeway tip
router.put('/threeway/:id', (req,res,next) => {
    Threeway.findById({_id:req.params.id},(err, newTip)=>{
        if(err){
            return res.send(err);
        }
            newTip.matchday = req.body.matchday,
            newTip.time = req.body.time,
            newTip.league = req.body.league,
            newTip.match = req.body.match,
            newTip.tip = req.body.tip,
            newTip.result = req.body.result,
            newTip.save((err, newTip)=>{
                if(err){
                    return res.send(err);
                }else{
                    return res.json(newTip);
                }
            });
        
    });
});

//Delete a particular threeway tip
router.delete('/threeway/:id', (req,res,next) => {
    Threeway.remove({_id:req.params.id},(err)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json('Tip Deleted');
        }
    });
})

//BTTS TIPS
//Create a new btts tip
router.post('/btts', (req, res, next) => {
    let newTip = new Btts({
        matchday: req.body.matchday,
        time: req.body.time,
        league: req.body.league,
        match: req.body.match,
        result: req.body.result
    });
    newTip.save((err, newTip) =>{
        if(err){
            return res.send(err).status(500);
        }else{
            return res.json(newTip).status(200);
        }
    });
});

//Get all btts tips
router.get('/btts',(req,res, next) =>{
    Btts.find({},(err, tips)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(tips).status(200);
        }
    }).sort({_id:-1}).limit(6);
});

//Get a particular btts tip
router.get('/btts/:id', (req,res,next)=>{
    Btts.findById({_id:req.params.id},(err, tip)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(tip).status(200);
        }
    });
});

//Update a particular btts tip
router.put('/btts/:id',(req,res,next)=>{
    Btts.findById({_id:req.params.id},(err,newTip)=>{
        if(err){
            return res.send(err);
        }else{
            newTip.matchday = req.body.matchday,
            newTip.time = req.body.time,
            newTip.league = req.body.league,
            newTip.match = req.body.match,
            newTip.result = req.body.result
            newTip.save((err, newTip)=>{
                if(err){
                    return res.send(err);
                }else{
                    return res.json(newTip);
                }
            });
        }
    });
});

//Delete a particular tip
router.delete('/btts/:id', (req,res,next)=>{
    Btts.remove({_id:req.params._id},(err)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json('Tip Deleted');
        }
    });
});

//OVER TIPS
//Create a new over 2.5 tip
router.post('/over', (req, res, next)=>{
    let newTip = new Over({
        matchday: req.body.matchday,
        time: req.body.time,
        league: req.body.league,
        match: req.body.match,
        result: req.body.result
    });
    newTip.save((err, newTip)=>{
        if(err){
            return res.send(err).status(500);
        }else{
            return res.json(newTip).status(200);
        }
    });
});

//Get all the over 2.5 tips
router.get('/over', (req,res,next)=>{
    Over.find({},(err,tips)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(tips);
        }
    }).sort({_id:-1}).limit(6);
});

//Get a particular over 2.5 tip
router.get('/over/:id', (req,res,next)=>{
    Over.findById({_id:req.params._id}, (err,tip)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(tip).status(200);
        }
    });
});

//Update a particular over 2.5 tip
router.put('/over/:id',(req,res,next)=>{
    Over.findById({_id:req.params._id},(err,newTip)=>{
        if(err){
            return res.send(err);
        }else{
        newTip.matchday = req.body.matchday,
        newTip.time = req.body.time,
        newTip.league = req.body.league,
        newTip.match = req.body.match,
        newTip.result = req.body.result,
        newTip.save((err,newTip)=>{
            if(err){
                return res.send(err);
            }else{
                return res.json(newTip);
            }
        });
        }
    });
});

//OUR RUN ROUTES
router.get('/threeway_run', (req, res, next)=>{
    Threeway.find({},(err, threeway_run)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(threeway_run);
        }
    }).sort({_id:-1}).skip(6).limit(6);
});

router.get('/btts_run', (req, res, next)=>{
    Btts.find({}, (err, btts_run)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(btts_run);
        }
    }).sort({_id:-1}).skip(6).limit(6);
});

router.get('/over_run', (req,res, next)=>{
    Over.find({},(err, btts_run)=>{
        if(err){
            return res.send(err).status(404);
        }else{
            return res.json(btts_run);
        }
    }).sort({_id:-1}).skip(6).limit(6);
});


module.exports = router;