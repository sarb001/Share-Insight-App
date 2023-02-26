
const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const JsonToken = require('../Authorization/AuthRoute');
const Post  = mongoose.model('Post');

const  { ProtectedRoute } = require('../Middleware/ProtectedRoute')

router.get('/user/:id' ,ProtectedRoute, async(req,res) => {
        try{
                  await  User.findOne({_id : req.params.id})
                  .select("-password")
                        .then(user => {
                             Post.find({postedBy: req.params.id})  
                            .populate("postedBy" , "_id name")
                            .exec((err,posts) => {
                                if(err){
                                    return res.status(422).json({error : 'Err , Post Not Present'})
                                }
                                res.json({user,posts})
                                console.log(' inssssside user here ',user)
                             })
                      })

    }catch(error)
    {
        console.log(' Not able to Found User',error);
        return  res.status(422).json({error : ' Error hai bhaii  '})
    }
})


// follow the user 

router.put('/follow' , ProtectedRoute , (req,res) => {
    User.findByIdAndUpdate(req.body.followId , {
        $push : {followers : req.user._id}
    },{
        new : true
    },(err,result) => {
        if(err){
            return res.status(422).json({error : err})
        }
        User.findByIdAndUpdate(req.user._id , {
            $push : {following : req.body.followId}
        },
        { new: true }).select("-password").then(result => {
            res.json(result)
        }).catch(err => {
            return res.status(422).json({error: err})
        })
    })
})

// unfollow the user 

router.put('/unfollow' , ProtectedRoute , (req,res) => {
    User.findByIdAndUpdate(req.body.unfollowId , {
        $pull : {followers : req.user._id}
    },{
        new : true
    },(err,result) => {
        if(err){
            return res.status(422).json({error : err})
        }
        User.findByIdAndUpdate(req.user._id , {
            $pull : {following : req.body.unfollowId}
        },
        { new: true }).select("-password").then(result => {
            res.json(result)
        }).catch(err => {
            return res.status(422).json({error: err})
        })
    })
})
module.exports = router;
