const express = require('express');
const path = require ('path');
const bodyParser= require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('..'));

app.get('/',(req,res)=> {  
    const filePath = path.join(__dirname, '../Frontend/about.html');
    res.sendFile(filePath);
})

app.post('/register',(req,res)=> { 
    console.log(req.body.uname + req.body.pwd)
    res.send('Kosul is ' + req.body.uname)
})



app.listen(3000,()=>{
    console.log('Listening on port 3000');
});