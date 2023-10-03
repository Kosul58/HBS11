const express = require('express')
const mongoose = require('mongoose');

const app = express();

const Roomprice = require('./models/roomprice')


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

db.close()
const price = new Roomprice({
    category:'Meeting',
    type:"large",
    price:2000
})
price.save()


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


app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})

