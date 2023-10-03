const { authenticate } = require('passport')
const bcrypt = require ('bcrypt')
const localstrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

mongoose.connect(dburl, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB on passport');
  // You can start defining your schemas and models here
});

function initialize(passport , getUserByEmail){
    const authenticateUser = async (email, password,done)=>{
        const user = getUserByEmail(email)
        if(user == null){
            return done(null,false, {message: 'No user with that email'})
        }
        try{
            if(await bcrypt.compare(password , user.password)){
                return done(null , user)
            }else{
                return done(null , false , {message: "Password Incorrect"})
            }
        }catch(e){
            return done(e)

        }

    }
    passport.use(new localstrategy({usernameField: 'email'}, authenticateUser))
    passport.serializeUser((user,done)=> done(null , user.id))
    passport.deserializeUser((id,done)=> {
        done(null , getUserBy(id))
    })
}


module.exports = initialize