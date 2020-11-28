// Dependencies
const { Router } = require('express');
const authController = require('../controllers/authController')
const { requireNotAuth } = require('../middlewares/authMiddleware')

const router = Router()

router.get('/login', requireNotAuth, authController.login_get);
router.post('/login', requireNotAuth, authController.login_post);
router.get('/signup', requireNotAuth, authController.signup_get);
router.post('/signup', requireNotAuth, authController.signup_post);
router.get('/logout', authController.logout_get);

// Export Module
module.exports = router;