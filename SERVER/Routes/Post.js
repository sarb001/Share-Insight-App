const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();
const Post = mongoose.model('Post')

const  { ProtectedRoute } = require('../Middleware/ProtectedRoute')
// Middleware to verify user is same Logged in

// Create Post here 

router.post('/createpost' , ProtectedRoute,async(req,res) => {

    try{
        const {title,body,photo} = req.body
        if(!title || !body || !photo){
            return res.status(422).json({error :' Please Add all the Fields '})
        }
    
        const post = await  Post.create({
            title: title,
            body: body,
            photo : photo,
            postedBy: req.user
        })

        if(post){
            res.status(201).json({
                _id : post._id,
                title: title,
                body: body,
                photo : photo,
                postedBy: req.user
            })
        }else
        {
            res.status(400).json({error : ' Not able to  Create Post  '})
        }
    
}catch(error) {
    res.json({error : ' Wrong Credentials '})
    }
})

// All posts like at home page of insta 

router.get('/allpost' , async(req,res) => {

     try{
        const getposts = await Post.find().populate("postedBy","_id name");
        console.log('get posts ssssshrtr', getposts);
        res.send(' fetched all postsssss ')

     }catch(err)
     {
        console.log('error is',err);
        res.json({error : ' Not Able to Fetch All Posts '})
     }
})

// For Specific User Logged in Post Show here 

router.get('/mypost' ,  ProtectedRoute , async(req,res) => {

    try
    {
        const { _id } = req.user._id;
        const mypost = await Post.find({postedBy : _id}).populate("postedBy" , "_id name")

        console.log('my posts are -',mypost);
        res.send(' ok my route  ')
        
    }catch(err)
    {
        console.log('posta Error are--',err);
        res.send({err : ' mypost error occured are '})
    }

})

module.exports = router;