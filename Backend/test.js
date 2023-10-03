app.post('/login', async(req,res)=>{
    const {uname, email , password} = req.body;
    const user = await User.findOne({email: email})
    const validpwd = await bycrypt.compare(password, user.password)
    if(validpwd){
        req.session.user_id=user._id;
        console.log('valid User')

        console.log('Regular user');
        res.redirect('/client');
    }
    else{
        console.log('Invalid User')
        const filePath2 = path.join(__dirname, '../Frontend/l.html');
        res.sendFile(filePath2)
    }
})