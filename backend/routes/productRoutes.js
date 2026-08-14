const express = require('express');



const { Protect } = require('../middleware/authmiddleware.js');
const { admin } = require('../middleware/adminmiddleware.js');

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController.js');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
//all products
router.route('/').get(getProducts).post(Protect, admin, upload.single('image'), createProduct);
//specific products
router.route('/:id').get(getProductById).put(Protect, admin, upload.single('image'),updateProduct).delete(Protect, admin, deleteProduct);

module.exports = router;

