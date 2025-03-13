const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv/config');
const { mongoConnect } = require('./db/db');
const { userController } = require('./controller/userController');
const { userRouter } = require('./router/userRouter');


const app = express();

const PORT = process.env.PORT || 6000 ;

// middleware
app.use(express.json());
app.use(cors());


// API endpoints
app.post('/api', userRouter);

app.get('/', (req,res)=>{
    try{
        res.status(200).json({
            success:true,
            message: `Server is up...`
        })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message: `Main-Server-ERROR: ${err.message}`
        })
    }
})

// ----- Listening PORT -----
app.listen(PORT, (req,res)=>console.log(`Server Listening Port:${PORT} \n http://localhost:${PORT}`));

//------ Invoke MongoDB ------
mongoConnect();
userController();