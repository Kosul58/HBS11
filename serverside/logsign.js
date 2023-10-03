const express = require('express');
const path = require ('path');
const bycrypt=require('bcrypt')
const bodyParser= require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
const passport = require('passport');

const app=express();

app.use(express.json());
app.use(session({
    secret:'Key for cookie',
    resave:false,
    saveUninitialized:false,
}))

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
    password:String,
    date:{
        year:Number,
        month:Number,
        day:Number
    }
});

const User = mongoose.model('User',uinfo);

const initializepassport = require('./passportconfig');
initializepassport(passport , email => users.find(user => user.email === email))

const users = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('..'));

app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    const filePath2 = path.join(__dirname, '../Frontend/l.html');

    res.sendFile(filePath2)
})

app.get('/as',(req,res)=> {  
    const filePath = path.join(__dirname, '../Frontend/about.html');
    res.sendFile(filePath);
})

app.get('/login', (req,res)=>{
    const filePath2 = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath2)
})

app.get('/register',(req,res)=>{
    const filePath2 = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath2)
})

app.post('/login',(req,res)=>{
    try{

    }
    catch{

    }
})

async function logger(req, res , next){
    const 
}

app.post('/register', async (req,res)=> { 
    try{
        const hashpwd= await bycrypt.hash(req.body.pwd,10)
        const today = new Date();
        const yr = today.getFullYear();
        const mn = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const dy = String(today.getDate()).padStart(2, '0');
        console.log(req.body.uname + req.body.pwd)
        const user = new User({
            name:req.body.uname,
            email:req.body.email,
            password:hashpwd,
            date:{
                year: yr,
                month: mn,
                day: dy
            }
        });
        user.save()
        const filePath2 = path.join(__dirname, '../Clientside/client.html');
        res.sendFile(filePath2)
        console.log(user)
    }catch{
        const filePath2 = path.join(__dirname, '../Frontend/l.html');
        res.sendFile(filePath2)
    }        
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});


