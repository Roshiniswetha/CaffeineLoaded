const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

mongoose.connect(process.env.DB_URL)

const UserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    username: {
        type: String,
        require: [true, 'please add a name'],
    },
    email: {
        type: String,
        require: [true, 'please add a email'],
    },
    password: {
        type: String,
        require: [true, 'please Enter a Password'],
    }

},{
    timestamps: true
})

UserSchema.plugin(passportLocalMongoose)
const UserModel = mongoose.model('user',UserSchema)


module.exports = UserModel;