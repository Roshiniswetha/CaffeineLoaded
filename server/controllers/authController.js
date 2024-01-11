const jwt = require('jsonwebtoken')
const { hashSync, compare } = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')


const registerUser = asyncHandler(async(req,res)=>{

    const { username, email, password } = req.body
    console.log('register', username, email, password)

    if(!username || !email || !password) res.status(400).send('Please Fill required Fields')

    const userExists = User.find({email})

    if(userExists) res.status(400).send('User Already Exists')

    const hashedPassword = hashSync(password, 10)
    const newUser = new User({ username:username,email: email, password:hashedPassword })
    newUser.save();
    if(newUser) return res.status(200).send('User Registered Successfully')
    else return res.status(400).send('Invalid user data')
})

const loginUser = asyncHandler( async(req,res)=>{
    const { email, password } = req.body
    const user = await User.findOne({email})
    
    if(user && await compare(password, user.password)) {
        res.json({
            username: user.username,
            email: user.email,
            token: generateToken(user),
        })
    } else res.status(400).send('Invalid credentials')
})

const getUserInfo = asyncHandler( async(req,res)=>{
    const { username, email } = await User.findById(req.user.id)

    res.status(200).json({
        username,
        email,
    })

})

const generateToken = (user)=>{
    console.log('th')
    return jwt.sign({data: user}, process.env.SECRET, {
        expiresIn: '30d',
    })
}

module.exports = { loginUser, registerUser, getUserInfo }



