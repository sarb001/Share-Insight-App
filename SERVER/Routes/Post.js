const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();

const  { ProtectedRoute } = require('../Middleware/ProtectedRoute')

router.post('/createpost' ,ProtectedRoute, (req,res) => {
    const {title,body} = req.body
    if(!title || !body){
        return res.status(422).json({error :' Please Add all the Fields '})
    }
    console.log(' Post  is - ',req.user);
    console.log(' created Post is - ',req.body);
    res.send("okokkkkk");
})

module.exports = router;