const passport = require('passport')
const session = require('express-session')


passport.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
    })
)
