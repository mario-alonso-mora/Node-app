const { matchedData } = require("express-validator");
const { tokenSign } = require("../helpers/handleJwt");
const { encrypt } = require("../helpers/handlePassword");
const { usersModel } = require("../models");
const { handleHttpError } = require("../helpers/handleError");
const { compare, compareSync } = require("bcrypt");


const registerController = async(req,resp) =>{

    

    try {

        req = matchedData(req);

        const password = await encrypt(req.password)
        const body ={...req,password}
         const dataUser = await usersModel.create(body)
    
         dataUser.set("password",undefined,{strict:false});// aqui ocultamos la contraseña del body para mas seguridad
    
       const data ={
    
            user:dataUser,
            token: await tokenSign(dataUser)
    
        }
    
       resp.send({data})
        
    } catch (error) {
        

        handleHttpError(resp ,'ERROR_REGISTER_USER')
    }

}


const loginController = async(req,resp) =>{

    const { password,email } = req.body

    try {


        
        req = matchedData(req);


         const user = await usersModel.findOne({email})

         if (!user) {
            
            handleHttpError(resp ,'USER_NOT_EXISTS',404);
            return
         }

         

         const check = compareSync(password,user.password);

         if (!check) {
            
            handleHttpError(resp,'PASSWORD_INVALID',402);

            return

         }


         user.set("password",undefined,{strict:false});
    
         const data = {

            user,
            token:await tokenSign(user)
         }

    
       resp.send({data})
        
    } catch (error) {
        

        handleHttpError(resp ,'ERROR_LOGIN_USER')
    }

}

module.exports = {registerController,loginController}