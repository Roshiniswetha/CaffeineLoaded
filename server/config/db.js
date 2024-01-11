const mongoose = require('mongoose')


const connectDB = () => {
    try {
        const conn = mongoose.connect(process.env.DB_URL)
        console.log('connected to Db successfully')
    } catch(err){
        console.log(err)
    }

}

module.exports = connectDB
