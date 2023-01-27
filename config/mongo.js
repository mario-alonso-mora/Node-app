const mongoose = require('mongoose');


const dbConnect = () => {

    mongoose.set('strictQuery',false);

    const DB_URI = process.env.DB_URI;

    mongoose.connect(DB_URI,{

        useNewUrlParser:true,
        useUnifiedTopology:true,

    },
    
    (err, resp)=>{

        if (!err) {
                console.log('**** CONEXION A LA BASE DE DATOS 👍 ****');
        }else{

            console.log('**** 🤬 ERROR DE CONEXION A LA BASE DE DATOS 🤬 ****')
        }

    })


}



module.exports = dbConnect
