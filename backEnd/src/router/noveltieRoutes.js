const express = require('express');
const router = express.Router();
const noveltieController= require('../controllers/noveltieController');

router.get('/api/novelties', noveltieController.getNovelties);

module.exports = router;
