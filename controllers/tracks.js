const { request, response } = require('express')
const { handleHttpError } = require('../helpers/handleError')
const {tracksModel} = require('../models')
const { matchedData, body } = require('express-validator')


//Listar todos los Items

const getItems = async (req = request,resp = response) =>{

    try {
        
        const data = await tracksModel.find({})

        resp.send({data})

    } catch (error) {
        
        handleHttpError(resp ,'Error_GET_ITEMS')

    }


}


// Obtener el detalle 
const getItem = async (req = request,resp = response) =>{


    try {

        req = matchedData(req)

        const {id} = req
        
        const data = await tracksModel.findById(id)

        resp.send({data})

    } catch (error) {
        
        handleHttpError(resp ,'Error_GET_ITEM')

    }
    

    
}

//Insertar un Registro
const createItem = async (req = request,resp = response) =>{


    try {

        const body = matchedData(req)

        const data = await tracksModel.create(body)
      
          resp.send({data})

    } catch (error) {
        
        handleHttpError(resp ,'Error_CREATE_ITEM')

    }
}


const updateItem = async (req = request,resp = response) =>{


    try {

        const {id,...body} = matchedData(req)
           
        const data = await tracksModel.findOneAndUpdate(id,body)
      
          resp.send({data})

    } catch (error) {
        
        handleHttpError(resp ,'Error_UPDATE_ITEM')

    }


}

const deleteItem = async (req = request,resp = response) =>{


    try {

        req = matchedData(req)

        const {id} = req
        
        const data = await tracksModel.delete({_id:id})

        resp.send({data})

    } catch (error) {
        
        handleHttpError(resp ,'Error_DELETE_ITEM')

    }

    
}


module.exports ={ getItem,getItems,createItem,updateItem,deleteItem}
