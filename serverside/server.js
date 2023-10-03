const express = require('express');
const path = require ('path');
const bycrypt=require('bcrypt')
const bodyParser= require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose');

const { randomUUID } = require('crypto');


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
    pwd:String
});
const User = mongoose.model('User',uinfo);


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('..'));


app.get('/',(req,res)=> {  
    const filePath = path.join(__dirname, '../Frontend/about.html');
    res.sendFile(filePath);
})

app.get('/login', async (req,res)=>{
    console.log('login made');
    console.log(req.session); 
    res.send('/register')
    const result = await User.find({name:'asd',pwd:'dsa'});
    console.log('user is ',result.name);
})

app.post('/register', async (req,res)=> { 
    try{
        const hashpwd= await bycrypt.hash(req.body.pwd,10)
        console.log(req.body.uname + req.body.pwd)
        const user = new User({
            name:req.body.uname,
            email:req.body.email,
            pwd:hashpwd
        });
        user.save()
        const filePath2 = path.join(__dirname, '../Clientside/client.html');
        res.sendFile(filePath2)
    }catch{
        res.send(alert('register error'));
    }        
})


app.listen(3000,()=>{
    console.log('Listening on port 3000');
});