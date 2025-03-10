const mongoose = require('mongoose');


const mongoConnect = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/qpayDB1`)
        .then(data=>console.log("DB Connected"))
    }
    catch(err){
        console.log("ERROR in Mongo-DB-Connection", err.message);
    }
}
module.exports={mongoConnect};