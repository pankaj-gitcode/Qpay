const { userModel } = require("../models/userModel.js")


const userController = async(req,res)=>{
    try{
        const user = await userModel.findOne({username: 'Raj@mail.com'});
        if(user){
            console.log(`${user.username} already exist.`);
            return;
        }
        const userDB = await userModel.create({
            username: 'Raj@mail.com',
            firstName: 'Raj',
            lastName: 'kmr',
            password: 'raj@12345678'
        })
        res.status(200).json({success: true, message:`${userDB} has been created.`})
    }
    catch(err){
        console.log(err.message)
        res.status(400).json({
            success: false,
            message: `CONTROLLER-ERROR: ${err.message}`
        })
    }

}
module.exports={userController};