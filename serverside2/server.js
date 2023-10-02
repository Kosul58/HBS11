const express = require ('express');
const path = require ('path');
const app = express();
const bcrypt = require('bcrypt')
const port = 3000;

require("./db")

const users=[]
app.use(express.urlencoded({extended:false}))

app.use(express.static('..'));

app.get('/as', (req, res) => {
    const filePath = path.join(__dirname, '../Frontend/about.html');
    res.sendFile(filePath);console.log('hey bro');
});

app.post('/register', async (req,res)=>{
   try{
    const hashedPassword = await bcrypt.hash(req.body.pwd, 10)
    users.push({
        id:Date.now().toString(),
        name:req.body.uname,
        email:req.body.email,
        password:hashedPassword
    })
    res.redirect('/register')
   }
   catch{
    res.redirect('/login')
   }
   console.log(users)
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});