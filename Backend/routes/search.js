const express = require('express');
const router = express.Router();

const { searchDiscogs } = require('../controllers/searchController');

// GET /api/search
router.get('/', searchDiscogs);

module.exports = router;