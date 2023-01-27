const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/tracks');

const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { authMiddleware } = require('../middleware/session');
const checkRol = require('../middleware/rol');


const router = express.Router();

// Lista los items
router.get('/',authMiddleware, getItems);

// Obtiene el detalle de un item en concreto
router.get('/:id', authMiddleware, validatorGetItem, getItem);

//Crea un registro
router.post('/',authMiddleware,checkRol(['admin']),validatorCreateItem,createItem);


//Actualizar un registro
router.put('/:id',validatorGetItem,validatorCreateItem, authMiddleware, updateItem);



//Borrar un registro
router.delete('/:id',validatorGetItem,authMiddleware, deleteItem);









module.exports = router