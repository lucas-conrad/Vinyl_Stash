const express = require('express');
const router = express.Router();

const{
    getCollection,
    addToCollection,
    removeFromCollection   
} = require('../controllers/collectionController');

// GET /api/album/collection
router.get('/', getCollection);

// POST /api/album/collection
router.post('/', addToCollection);

// DELETE /api/album/collection/:id
router.delete('/:id', removeFromCollection);

module.exports = router;