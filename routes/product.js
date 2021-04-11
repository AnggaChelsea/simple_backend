const router = require('express').Router();
const Product = require('../controllers/product');

router.post('/create', Product.post);
// router.post("/", multerInstance.upload.single('image'), productController.createProduct);
router.get('/page', Product.getPage);
router.get('/', Product.getall);
router.get('/:id', Product.getId)

module.exports = router;
