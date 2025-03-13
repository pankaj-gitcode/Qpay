const express = require('express');
const { userController } = require('../controller/userController');
const userRouter = express.Router();

userRouter.post('/v1', userController );

module.exports={userRouter};