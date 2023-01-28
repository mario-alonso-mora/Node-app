require('dotenv').config();
const express = require('express');
 const cors = require('cors');
const  dbConnect  = require('./config/mongo');
const  morganBody  = require('morgan-body');
const {IncomingWebhook} = require('@slack/webhook');


 
 const app = express();

 

 app.use( cors() );
 app.use(express.json());
 app.use(express.static('storage'));

 const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK)

 const port = process.env.PORT || 3000

 const loggerStream = {
    write: message => {
        webHook.send({
            text:message
        })
        console.log('Capturando el LOG',message)

    },
  };


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