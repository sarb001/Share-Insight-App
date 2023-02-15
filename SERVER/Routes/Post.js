const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();
const Post = mongoose.model('Post')

const  { ProtectedRoute } = require('../Middleware/ProtectedRoute')
// Middleware to verify user is same Logged in

router.post('/createpost' ,ProtectedRoute, async(req,res) => {

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

router.get('/allpost' , async(req,res) => {
     try{

        const getposts = await Post.find();
        console.log('get posts', getposts);
        res.send(' fetched all posts')

     }catch(err)
     {
        console.log('error is',err);
     }
})


module.exports = router;