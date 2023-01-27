const { request, response } = require("express")
const { handleHttpError } = require("../helpers/handleError");
const { verifyToken } = require("../helpers/handleJwt");
const { usersModel } = require("../models");


const authMiddleware = async  (req = request, resp = response,next) =>{


    try {

       

       if (!req.headers.authorization) {
        
        handleHttpError(resp,'NOT_TOKEN',401)


       }

       const token = req.headers.authorization.split(' ').pop();

       const dataToken = await verifyToken(token);

       if (!dataToken._id) {
        
        handleHttpError(resp,'ERROR_ID_TOKEN',401)

       }

       const user = await usersModel.findById(dataToken._id);

       req.user = user

       next();
        
    } catch (error) {
        
        handleHttpError(resp,'NOT_SESSION',401)
    }

}


module.exports = {authMiddleware}