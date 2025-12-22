const express = require('express');
const router = express.Router();
const { getStories, getStory, createStory, updateStory, deleteStory } = require('../controllers/storyController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getStories);
router.get('/:slug', getStory);
router.post('/', protect, admin, createStory);
router.put('/:id', protect, admin, updateStory);
router.delete('/:id', protect, admin, deleteStory);

module.exports = router;
