const { response, request } = require("express");
const { handleHttpError } = require("../helpers/handleError");

const checkRol = (roles) => (req = request,resp = response,next) =>{

    try {

       
        const {user} = req

        

        const rolesByUser = user.role;
        
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle))

        if (!checkValueRol) {

            
            
            handleHttpError(resp,'USER NOT Permissions',403)

            return

        }

    } catch (error) {
        
        

        handleHttpError(resp, 'Error Permissions',403)

        return

    }



    next();
}


module.exports = checkRol