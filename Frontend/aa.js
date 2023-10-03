const express = require('express');
const path = require ('path');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const { randomUUID } = require('crypto');


const app=express();
app.use(express.json());

const dburl="mongodb+srv://kosul:kosul@cluster0.jn30nsv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dburl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  // You can start defining your schemas and models here
});

const uinfo = new mongoose.Schema({
    id:{
        type:String,
        default:randomUUID()
    },
    name:String,
    email:String,
    pwd:String
});
const User = mongoose.model('User',uinfo);


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('..'));


app.get('/',(req,res)=> {  
    const filePath = path.join(__dirname, '../Frontend/about.html');
    res.sendFile(filePath);
})


app.post('/register',(req,res)=> { 
    console.log(req.body.uname + req.body.pwd)
    const user = new User({
        name:req.body.uname,
        email:req.body.email,
        pwd:req.body.pwd
    });
    user.save();
    const filePath2 = path.join(__dirname, '../Clientside/client.html');
    res.sendFile(filePath2)
})


app.listen(3000,()=>{
    console.log('Listening on port 3000');
});