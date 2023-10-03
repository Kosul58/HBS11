const express = require('express')
const path = require ('path');
const bycrypt=require('bcrypt')
const bodyParser= require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose');
const axios = require('axios');
const Roomprice = require('./models/roomprice.js');
require('dotenv').config();
const cors = require('cors');


const app = express();
const User = require('./models/db')
const havai= require('./models/hotelavialability')


//session
app.use(session({
    secret:'notsogoodsecret',
    resave: false,
    saveUninitialized: false,
}))
app.use(cors())

//databaseconnection
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
});


//price checking and availability verification
app.get('/api/getPrice',async(req,res)=>{
    const { category, type, hname , acategory , atype , count } = req.query;
    try {
        const priceData = await Roomprice.findOne({ category, type });
        const hotel = await havai.findOne({
            hname: hname,
            [`roomtypecount.${acategory}.${atype}`]: { $exists: true },
        });
        const rcount = hotel.roomtypecount[acategory][atype];

        const bcount = hotel.bookingcount[acategory][atype];
        const xcount = parseInt(bcount, 10); 
        const count2 = parseInt(count, 10);
        const acount = xcount + count2; 
        if (!priceData) {
        return res.status(404).json({ error: 'Price not found' });
        }
        console.log(`${priceData}`)
        const jsonData = { value: 1};
        if(acount <= rcount){
            jsonData.value=2
        }
        console.log(jsonData.value);
        res.json({ price: priceData.price, jsonData:jsonData.value});
    } catch (error) {
        console.error('Error fetching price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})




//auth middleware 
const auth = (req,res,next) => {
    if(!req.session.user_id){
        console.log('login first')
        const filePath = path.join(__dirname, '../Frontend/l.html');
        res.sendFile(filePath)
    }
    next()
}

const auth2 = (req,res,next) => {
    if(req.session.user_id == null){
    }
    else{
        console.log('Log Out First')
        const filePath = path.join(__dirname, '../Clientside/l.html');
        res.sendFile(filePath)
    }
    next()
}

const auth3 = (req,res,next) => {
    if(req.session.userrole == 'admin'){
        const filePath = path.join(__dirname, '../Clientside/admin.html');
        res.sendFile(filePath)
    }
    else{
        const filePath = path.join(__dirname, '../Clientside/client.html');
        res.sendFile(filePath)
    }
    next()
}

//static file handlers
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('..'));
app.use(express.json());



//clientside
app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath)
})

app.post('/',(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath)
})

app.get('/about',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/about.html');
    res.sendFile(filePath)
})

app.post('/about',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/about.html');
    res.sendFile(filePath)
})


app.get('/booknow',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/booknow.html');
    res.sendFile(filePath)
})

app.post('/booknow',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/booknow.html');
    res.sendFile(filePath)
})

app.get('/hotels',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/hotels.html');
    res.sendFile(filePath)
})


app.post('/hotels',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/hotels.html');
    res.sendFile(filePath)
})

app.get('/rooms',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/room.html');
    res.sendFile(filePath)
}) 

app.post('/rooms',auth,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/room.html');
    res.sendFile(filePath)
})


app.post('/member',auth,auth3,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/client.html');
    res.sendFile(filePath)
})

app.get('/member',auth,(req,res)=>{
    if(req.session.userrole=='client'){
        const filePath = path.join(__dirname, '../Clientside/client.html');
        res.sendFile(filePath)
    }
})

app.post('/admin',auth,auth3,(req,res)=>{
    const filePath = path.join(__dirname, '../Clientside/admin.html');
    res.sendFile(filePath)
})

app.get('/admin',auth,(req,res)=>{
    if(req.session.userrole=='admin'){
        const filePath = path.join(__dirname, '../Clientside/admin.html');
        res.sendFile(filePath)
    }
})






//Frontendside
app.get('/l.html',auth2,(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath)
})

app.get('/hotels.html',auth2,(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/hotels.html');
    res.sendFile(filePath)
})

app.get('/room.html',auth2,(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/room.html');
    res.sendFile(filePath)    
})

app.get('/about.html',auth2,(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/about.html');
    res.sendFile(filePath)
})

app.get('/booknow.html',auth2,(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/booknow.html');
    res.sendFile(filePath)
})




//log system routes

app.get('/register',(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath)
})

app.get('/login',(req,res)=>{
    const filePath = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath)
})

app.get('/logout',auth,(req,res)=>{
    req.session.user_id=null;
    req.session.destroy();
    const filePath3 = path.join(__dirname, '../Frontend/l.html');
    res.sendFile(filePath3)
})


app.post('/login', async(req,res)=>{
    try{
        const {uname, email , password} = req.body;
        const userEmail = req.body.email
        const user = await User.findOne({email: email})
        const validpwd = await bycrypt.compare(password, user.password)
        if(validpwd){
            req.session.user_id=user._id;
            console.log('user')
            User.findOne({ email: userEmail , admin:true})
            .then(user => {
              if (user) {
                req.session.userrole='admin'
                console.log('Is admin');
                res.redirect('/admin')
              } else {
                req.session.userrole='client'
                console.log('Is client');
                res.redirect('/member')
              }
            })
            .catch();
        }
        else{
            console.log('Invalid User')
            res.redirect('/')
        }        
    }
    catch{
        res.redirect('/')
    }
})


app.post('/register',async(req,res)=>{
    const {uname,email,password} = req.body;
    try{
        const existinguser= await User.findOne({email: email,password: password})
        if(existinguser){
            console.log('User already exists')
            res.redirect('/')
        }
    }
    catch{
    }
    const hashedpassword = await bycrypt.hash(password,10);
    const today = new Date();
    const yr = today.getFullYear();
    const mn = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const dy = String(today.getDate()).padStart(2, '0');
    const user = new User({
        username:uname,
        email:email,
        password: hashedpassword,
        date:{
            year: yr,
            month: mn,
            day: dy
        }
    })
    await user.save()
    .then(data => console.log(data))
    .catch(err => console.error(err))
    req.session.user_id=user._id;
    res.redirect('/member')
})

//khalti payment api
app.post('/khalti-api', async(req,res)=>{
    const payload = req.body;
    const khaltiresponse = await axios.post('https://a.khalti.com/api/v2/epayment/initiate/' , 
    payload ,
    {
        Headers:{
            Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`
        },
    }
    )
    if(khaltiresponse){
        res.json({
            success:true,
            data: khaltiresponse?.data
        })
    }else{
        res.json({
            success:false,
            message:"something went wrong"
        })
    }
});


const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

