const { Router } = require('express');
const bookController = require('../controllers/bookController');

const { requireAuth } = require('../middlewares/authMiddleware')

const router = Router()

router.get('/books', bookController.books_get);
router.post('/books', bookController.book_post)
router.get('/books/search', bookController.books_search);
router.get('/books/create', requireAuth, bookController.bookCreate_get);
router.get('/book/:id', bookController.book_get);

// Export Module
module.exports = router;