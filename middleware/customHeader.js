const { response, request } = require("express")



 const customHeader = (req = request,resp = response ,next) => {
  


         try {
            
            const apiKey = req.headers.api_key;

            if (apiKey === 'api_key') {
                
                    next()

            }else{

                resp.status(403)
                resp.send({error:'Api_key no es correcta'})

            }


         } catch (error) {
            
            resp.status(403)
            resp.send({error:'Algo ocurrio con el custom header'})

         }


    next();


}


module.exports = customHeader 