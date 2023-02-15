
const jwt   = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../Models/User');

// Middleware for protected Route 

const  ProtectedRoute  = async(req,res,next) => {

    let token;
    if(req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer'))
    {
        try
        {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token ,process.env.JWT_SECRET);          /// Will Give us ID
           
            req.user = await User.findById(decoded.id).select('-password');     //  find by id 
            next();
            
        }catch(error)
        {
            res.status(401).json({error: 'Not Authorized  ,token Failed'});
        }
    }
    if(!token)
    {
        res.status(401).json({error : '  Not Authorized ,No Token '});
    }
}

module.exports = {  ProtectedRoute };