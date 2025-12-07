const express = require('express');
const router = express.Router();

const{
    getCollection,
    addToCollection,
    removeFromCollection   
} = require('../controllers/collectionController');

// GET /api/album/collection
router.get('/', getCollection);

router.get('/mine', (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ error: 'Not Logged In' });
    }
    const albums = Album.find({ user: req.session.userId });
    res.json(albums);
});

// POST /api/album/collection
router.post('/', addToCollection);

// DELETE /api/album/collection/:id
router.delete('/:id', removeFromCollection);

module.exports = router;