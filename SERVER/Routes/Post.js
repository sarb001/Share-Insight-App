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

router.get('/allpost' ,  async(req,res) => {

     try{
         await Post.find().populate("postedBy","_id name")
         .then(  posts => res.json({posts}))

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
        await Post.find({postedBy : _id}).populate("postedBy" , "_id name")
        .then(mypost => {  res.json({mypost}) }  )    
        
    }catch(err)
    {
        console.log('posta Error are--',err);
        res.send({err : ' mypost error occured are '})
    }

})

// for Liking the Post
router.put('/like' , ProtectedRoute , async(req,res) => {
        try{

            Post.findByIdAndUpdate(req.body.postId ,{
                $push : {likes:req.user._id}
            },{
                new: true
            }).exec((err,result) => {
                 if(err){
                    return res.status(422).json({error: err})
                 }else{
                    res.json(result)
                 }
            })

        }catch(error)
        { 
            console.log('Like Error are--',err);
            res.send({err : ' Like  error occured in '})
        }
})


// For Unliking the Post 
router.put('/unlike' , ProtectedRoute , async(req,res) => {
    try{

        Post.findByIdAndUpdate(req.body.postId ,{
            $pull : {likes:req.user._id}
        },{
            new: true
        }).exec((err,result) => {
             if(err){
                return res.status(422).json({error: err})
             }else{
                res.json(result)
             }
        })

    }catch(error)
    { 
        console.log(' UnLike Error are--',err);
        res.send({err : ' UnLike  error occured in '})
    }
})


module.exports = router;