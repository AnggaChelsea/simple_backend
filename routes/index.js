const router = require('express').Router();
const videorouter = require('./video.routes')
const product  = require('./product')

router.use('/video', videorouter)
router.use('/product', product)

module.exports = router