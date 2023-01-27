const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL



const getItems = async (req,resp) =>{

    const data = await storageModel.find({})

    resp.send({data})

}

const getItem = (req,resp) =>{

    const data = ["hola","mundo"]

    resp.send({data})
    
}

const createItem = async (req,resp) =>{

    const {body,file} = req

        console.log({file})

        const fileData = {

            filename:file.filename,
            url:`${PUBLIC_URL}/${file.filename}`
        }


    const data = await storageModel.create(fileData)

    resp.send({data})
    
}

const updateItem = (req,resp) =>{

    
}

const deleteItem = (req,resp) =>{

    
}


module.exports ={ getItem,getItems,createItem,updateItem,deleteItem}
