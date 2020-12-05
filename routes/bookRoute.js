const { Router } = require('express');
const bookController = require('../controllers/bookController');

const router = Router()

router.get('/books', bookController.books_get);
router.post('/books', bookController.book_post)

// Export Module
module.exports = router;