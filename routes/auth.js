const express = require('express');
const router = express.Router();
const { validatorLoginUser, validatorRegisterUser } = require('../validators/auth');
const { matchedData } = require('express-validator');
const { registerController, loginController } = require('../controllers/auth');






//Crea un registro
//* http://localhost:3001/api/auth/login
//* http://localhost:3001/api/auth/register




router.post('/register',validatorRegisterUser,registerController);


router.post('/login',validatorLoginUser,loginController);






module.exports =  router