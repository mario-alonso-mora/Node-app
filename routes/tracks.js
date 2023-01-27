const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/tracks');

const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');


const router = express.Router();

// Lista los items
router.get('/', getItems);

// Obtiene el detalle de un item en concreto
router.get('/:id', validatorGetItem, getItem);

//Crea un registro
router.post('/',validatorCreateItem, createItem);


//Actualizar un registro
router.put('/:id',validatorGetItem,validatorCreateItem, updateItem);



//Borrar un registro
router.delete('/:id',validatorGetItem, deleteItem);









module.exports = router