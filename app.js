require('dotenv').config();
const express = require('express');
 const cors = require('cors');
const  dbConnect  = require('./config/mongo');
const  morganBody  = require('morgan-body');
const { loggerStream } = require('./helpers/handleLogger');


 
 const app = express();

 

 app.use( cors() );
 app.use(express.json());
 app.use(express.static('storage'));



 const port = process.env.PORT || 3000


 morganBody(app,{

    noColors:true,
        stream: loggerStream,
        skip: function (req,resp) {
            return resp.statusCode < 400
             
        }



 })
 

 app.use('/api',require("./routes/"))

 
 app.listen(port, () => console.log(`La app esta corriendo ✅ por el puerto ${port}`))

 
 dbConnect();