const router = require('express').Router();
const Video = require('../controllers/VideoController')

router.post('/post', Video.post);
router.get('/', Video.getall);
router.get('/:id', Video.getId)
router.delete('/:id', Video.delete)

module.exports = router;
 