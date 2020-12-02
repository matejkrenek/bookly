// Dependencies
const { Router } = require('express');
const authController = require('../controllers/authController')

const router = Router()

router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/logout', authController.logout_get);
router.post('/activation', authController.activation);

// Export Module
module.exports = router;