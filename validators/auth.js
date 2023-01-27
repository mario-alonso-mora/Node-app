const {check} = require('express-validator');
const validateResults = require('../helpers/handleValidators');



const validatorRegisterUser = [

   
    check("name").exists().notEmpty().isLength({min:3, max:99}),
    check("age").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:6, max:10}),

    (req,resp,next) =>{

     return validateResults(req,resp,next) 

    }


];

const validatorLoginUser = [

   
 
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:6, max:10}),

    (req,resp,next) =>{

     return validateResults(req,resp,next) 

    }


];



module.exports = {validatorRegisterUser,validatorLoginUser}