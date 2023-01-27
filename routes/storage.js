
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../helpers/handleStorage');
const { createItem, getItems, getItem, updateItem, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');



//Todo http://localhost:3001/api/storage




router.get('/' , getItems );
router.get('/:id',validatorGetItem , getItem );

router.post('/', uploadMiddleware.single("myfile"), createItem);

router.delete('/:id',validatorGetItem ,deleteItem )








module.exports = router;