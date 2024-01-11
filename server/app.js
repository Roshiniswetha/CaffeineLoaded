const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth',require('./routes/authRoutes'))

// app.get('/auth/register',(req,res)=>{
//     res.json({'hi':'hi'})
//     // try{
//     //     const users = UserService.getUsers()
//     //     res.json(users)
//     // }
//     // catch(err){
//     //     console.log(err)
//     // }
// })

app.listen(port,()=>{
    console.log(`Server listening on Port ${port}`);
})

// const express = require('express'),
//       mongoose = require('mongoose'),
//       passport = require('passport'),
//       LocalStrategy = require('passport-local').Strategy,
//       session = require('express-session'),
//       bodyParser = require('body-parser'),
//       cors = require('cors');

// const { hashSync } = require('bcrypt')

// const Joi = require('joi');

// require('./config/local')

// const User = require('./models/User')
// const UserService = require('./service')

// const app = express();
// const port = process.env.PORT || '4000';

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors())

// passport.use(new LocalStrategy(
//     {
//         passport.authenticate,
//     }
// ))
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

// app.use(passport.initialize())
// app.use(passport.session())

// const schema = Joi.object({
//     username: Joi.string().min(3).max(30),
//     email: Joi.string().email(),
//     password: Joi.string().min(8).max(16).required()
// })

// app.get('/users',(req,res)=>{
//     try {
//         const users = UserService.getUsers()
//         res.send(users)
//     } catch(err){
//         res.status(400).send('no users found')
//     }
// })


// app.post('/login',async(req, res)=>{
//     try {
//         const { username, password } = req.body

//         const {error} =  schema.validateAsync({username,password})
//         if(error) return res.status(400).send('The username and password is not valid')

//         const user = findUser(username)
//         if(user) return res.status(409).send('User Already Exists')
        
//         UserService.addLocalUser({username,password: hashSync(password,10)})
//         res.status(200).send('user registered successfully')

//     } catch(err) {
//         res.status(404).send('Not Found')
//     }

//     // validate schema if not valid return with error 

//     // check if already exits throw error

//     // create new entity 

//     // send response to client
// })

// app.

// app.listen(port,()=>{
//     console.log(`Server listening on Port ${port}`);
// })



// // app.get('/',(req,res)=>{
// //     try{
// //         const users = UserService.getUsers()
// //         res.json(users)
// //     }
// //     catch(err){
// //         console.log(err)
// //     }
// // })

// // app.post('/register',async(req,res)=>{
// //     const { username, password } = req.body;
// //     const hashedPassword = await bcrypt.hash(password, 10)

// //     try{
// //         await UserService.addLocalUser({ username:username, password:hashedPassword })
// //     } catch(err){
// //         console.log(err)
// //     }
        
// // })



