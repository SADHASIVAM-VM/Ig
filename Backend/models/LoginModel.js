const mongoose  = require("mongoose");

const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase: true
    },
    password:{
        type: String

    }
})
const LoginModel = mongoose.model('Login', LoginSchema);

module.exports = LoginModel;