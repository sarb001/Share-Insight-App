
const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const JsonToken = require('../Authorization/AuthRoute');
const Post  = mongoose.model('Post');

const  { ProtectedRoute } = require('../Middleware/ProtectedRoute')


router.get('/user/:userid' ,ProtectedRoute, (req,res) => {

    try
    {
        res.status(200).json({message: ' INSIDE THE route  '})
        console.log('inside route');

    }catch(error)
    {
        console.log(' Not able to Found User',err);
        return  res.status(422).json({error : ' Error hai bhaii  '})
    }

})

// router.get('/user/:id',  (req,res) => {

//     try{
//         User.findOne({_id : req.params.id})
//         .select("-password")
//         .then(user => {
//             Post.find({postedBy: req.params.id})  
//             .populate("postedBy" , "_id name")
//             .exec((err,posts) => {
//                 if(err){
//                     return res.status(422).json({error : err})
//                 }
//                 res.json({user,posts})
//                 console.log(' inaide user here ',user)
//             })
//       })


//     }catch(error){
//         console.log(' Not able to Found User',err);
//         res.send({err : ' User not Found  '}) 
//     }
// })


module.exports = router;
