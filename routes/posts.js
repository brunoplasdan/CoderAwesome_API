const express = require('express');
const postController = require('../controllers/postController');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.get('/',  postController.index);
router.get('/:id', postController.show);
router.post('/', checkAuthMiddleware.checkAuth, postController.save);
router.put('/:id', checkAuthMiddleware.checkAuth, postController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, postController.destroy);
module.exports = router;