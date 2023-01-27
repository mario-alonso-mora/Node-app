const { response } = require("express")

const handleHttpError = (resp = response,message = 'Algo sucedio', code = 403) =>{

    resp.status(code)
    resp.send({error:message});

}



module.exports = {handleHttpError}