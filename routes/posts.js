const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.save);
router.put('/:id', postController.update);
router.delete('/:id', postController.destroy);
module.exports = router;