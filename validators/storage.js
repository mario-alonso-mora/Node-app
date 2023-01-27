const {check} = require('express-validator');
const validateResults = require('../helpers/handleValidators');



const validatorGetItem = [

   
    check("id").exists().notEmpty().isMongoId(),

    (req,resp,next) =>{

           return validateResults(req,resp,next) 
    

    }

];



module.exports = {validatorGetItem}