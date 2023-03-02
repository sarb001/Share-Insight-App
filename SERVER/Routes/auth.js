const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const JsonToken = require('../Authorization/AuthRoute');

router.get('/' ,(req,res) => {
    res.send('Hello .... ')
})

router.post('/signup' , async(req,res) => 
{
    try{
        const  { name ,email, password} = req.body;

        console.log(' data is ',name,email,password);
        if(!email ||!password || !name)
        {
            return res.status(422).json({error : 'Please Fill all the Fields'})
        } 

        const finduser = await  User.findOne({email})

        if(finduser){
          return  res.status(422).json({error : ' User Already Present '})
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password,salt);

            const user = await User.create({
                email : email,
                password:hashpass,
                name : name,
            })
            if(user)
            {
                res.status(201).json({
                    _id : user._id,
                    email : user.email,
                    password:user.password,
                    name :user.name,
                    token : JsonToken(user._id)
                })

            }else
            {
                res.status(400).json({error : ' Not Able to  Create User '})
            }
    }
    catch(err)
    {
        console.log(err);
        res.status(422).json(' Something  Wrong Happens ')
    }
})


router.post('/login' ,async(req,res) => {
    
    try{

        const {email , password} = req.body;
        if(!email || !password)
        {
         res.status(400).json({error : 'Fill all the Fields'})
        }
    
        const user = await User.findOne({email});
        const comparepass = await bcrypt.compare(password,user.password);
    
        if(!comparepass){
             res.status(400).json({error : 'Wrong user Credentials '});
        }
    
        if(user && (comparepass))
        {
             res.status(200).json({
                _id   : user._id,
                name  : user.name,
                email : user.email,
                token : JsonToken(user._id)
             })
        }else
        {
           res.status(401).json({error : ' Invalid Email or Password '});
        }

    }catch(err){
            res.json({error : ' Wrong Credentials '})
    }
})

module.exports = router;