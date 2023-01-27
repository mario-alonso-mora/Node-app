const { response, request } = require("express");
const { validationResult } = require("express-validator");




const validateResults = (req = request ,resp = response ,next) =>{


        try {
            
            validationResult(req).throw();
            return next();

        } catch (error) {
            
            resp.status(403);
            resp.send({errors:error.array()});

        }


};


module.exports = validateResults