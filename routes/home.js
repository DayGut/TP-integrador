const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');


router.get('/', homeController.index)//devuelve el metodo creado index

module.exports = router;//en los routes(carpeta) siempre va a exportar el metodo router 