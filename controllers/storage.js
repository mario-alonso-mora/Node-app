const fs = require('fs');
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../helpers/handleError')
const {storageModel} = require('../models')

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;




const getItems = async (req,resp) =>{

    try {

        
    const data = await storageModel.find({})

    resp.send({data})


    } catch (error) {
        
        handleHttpError(resp ,'Error_GET_ITEMS')
    }


}

const getItem = async (req,resp) =>{

    try {

            const {id} = matchedData(req) 
        
        const data = await storageModel.findById(id)
    
        resp.send({data})
    
    
        } catch (error) {
            
            handleHttpError(resp ,'Error_Detail_ITEM')
        }
    
}

const createItem = async (req,resp) =>{

    try {
        
        const {body,file} = req

        const fileData = {

            filename:file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }


    const data = await storageModel.create(fileData)

    resp.send({data})
    


    } catch (error) {

        handleHttpError(resp ,'Error_UPLOAD_FILE')
        
    }
}



const deleteItem = async (req,resp) =>{

    try {

        const {id} = matchedData(req) ;

        // estrategia soft delete para la persitencia de los datos en la base de datos
       // const dataFile = await storageModel.delete({_id:id});

       const dataFile = await storageModel.findById(id);
       await storageModel.deleteOne(id)

        const {filename} = dataFile;

        const filePath = `${MEDIA_PATH}/${filename}`// esto es la ruta donde se encuentra el archivo en tu maquina



        fs.unlinkSync(filePath);// quitamos esta linea tambien si queremos hacer el soft delete

        const data = {

            filePath,
            deleted:1
        }


        resp.send({data})

    } catch (error) {
        
        handleHttpError(resp ,'Error_DELETE_ITEM')

    }

    
}


module.exports ={ getItem,getItems,createItem,deleteItem}
