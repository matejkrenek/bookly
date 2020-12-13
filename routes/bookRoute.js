const { Router } = require('express');
const Book = require('../models/Book');
const bookController = require('../controllers/bookController');
const multer = require('multer');
const path = require('path')
const uploadPath = path.join('public', Book.coverImageBasePath)
const imageMimeTypes = ['image/jpeg', 'image/png']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})

const { requireAuth } = require('../middlewares/authMiddleware')


const router = Router()

router.get('/books', bookController.books_get);
router.post('/books', upload.single('coverImageName'), bookController.book_post)
router.get('/books/search', bookController.books_search);
router.get('/books/create', requireAuth, bookController.bookCreate_get);
router.get('/book/:id', bookController.book_get);

// Export Module
module.exports = router;