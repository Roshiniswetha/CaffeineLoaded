const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

const protect = asyncHandler( async(req, res, next)=>{
    let token 

    if(req.headers.authorisation && req.headers.authorisation.startsWith('Bearer')){
        try {
            token = req.headers.authorisation.split(' ')[1]

            const decoded = jwt.verify(token, process.env.SECRET)

            await User.findById(decoded.id).select('-password')
            next()
        } catch(error) {
            console.log(err)
            res.status(401).send('Not Authorised')
        }
    }
    if(!token){
        res.status(401).send('Not Authorised, no token')
    }
})

module.exports = protect