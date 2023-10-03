const usermodel = require('../models/db')

const auth = (req,res,next) => {
    if(!req.session.user_id){
        console.log('login first')
        const filePath = path.join(__dirname, '../Frontend/l.html');
        res.sendFile(filePath)
    }
    next()
}


