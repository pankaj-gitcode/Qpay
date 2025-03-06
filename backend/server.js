const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv/config');

const app = express();

const PORT = process.env.PORT || 6000 ;


app.use(express.json());
app.use(cors());



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
app.listen(PORT, (req,res)=>console.log(`Server Listening Port:${PORT} \n http://localhost:${PORT}`));