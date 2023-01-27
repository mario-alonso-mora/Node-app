const {check} = require('express-validator');
const validateResults = require('../helpers/handleValidators');


const validatorCreateItem = [

    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),

    (req,resp,next) =>{

           return validateResults(req,resp,next) 
    

    }

];

const validatorGetItem = [

   
    check("id").exists().notEmpty().isMongoId(),

    (req,resp,next) =>{

           return validateResults(req,resp,next) 
    

    }

];



module.exports = {validatorCreateItem,validatorGetItem}