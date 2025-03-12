const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type:String, unique:true, required:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    password: {type:String, required:true, minLength:8}
});

const userModel = mongoose.model('user', userSchema);

module.exports={userModel};