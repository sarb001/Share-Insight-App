const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./Models/User');

app.use(express.json());            // to parse Request 

require('./Models/User')
require('./Models/Post')

app.use(require('./Routes/auth'));          // It is Middleware 
app.use(require('./Routes/Post'));
app.use(require('./Routes/user'));

dotenv.config();
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl)
mongoose.set('strictQuery',false);

mongoose.connection.on('connected' , () => {
    console.log('Connected to database ');
})

mongoose.connection.on('error' , (err) => {
    console.log(' Error !!!!! ',err);
})


app.get('/',(req,res) => {
    res.send('Hello Worlkd')
})

app.listen(PORT,() => {
    console.log('Server is Running on BRO ',PORT);
})