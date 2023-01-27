const bcrypt = require('bcrypt')



const encrypt = async (passwordPlain) =>{

   // es la contraseña sin encriptar: por ejemplo holaapepe passwordPlain

    const hash = bcrypt.hash(passwordPlain,10);

    return hash;

}


const compare = async (passwordPlain,hashPassword) =>{


    return await bcrypt.compare(passwordPlain,hashPassword)
    
}


module.exports = {encrypt,compare}