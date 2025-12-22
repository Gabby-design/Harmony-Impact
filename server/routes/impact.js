const express = require('express');
const router = express.Router();
const { getImpact, updateImpact } = require('../controllers/impactController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getImpact);
router.put('/', protect, admin, updateImpact);

module.exports = router;
