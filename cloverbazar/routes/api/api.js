var express = require('express');
var router = express.Router();

const apiController = require('../../controllers/api/apiController');

// cantidad total de usuarios
router.get('/usuarios/cantidadTotal', apiController.cantidadUsuarios);
// cantidad total de productos
router.get('/productos/cantidadTotal', apiController.cantidadProductos);
// cantidad total de categorias
router.get('/productos/categorias/cantidadTotal', apiController.cantidadCategorias);
// cantidad total de carritos cerrados
router.get('/carritos/cantidadTotal', apiController.cantidadCarritos);
// listado de ultimas compras
router.get('/carritos/ultimasCompras', apiController.ultimasCompras);




module.exports = router;