const mongoose = require('mongoose');


const mongoConnect = async ()=>{
    await mongoose.connect(`${process.env.MONGO_URL}/qpayDB`)
    .then(data=>console.log("DB Connected"))
}