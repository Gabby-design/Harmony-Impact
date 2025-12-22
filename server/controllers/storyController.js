const Story = require('../models/Story');

// @desc    Get all stories
// @route   GET /api/stories
// @access  Public
const getStories = async (req, res) => {
    try {
        const stories = await Story.find({ isPublished: true }).sort({ publishedAt: -1 });
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single story by slug
// @route   GET /api/stories/:slug
// @access  Public
const getStory = async (req, res) => {
    try {
        const story = await Story.findOne({ slug: req.params.slug });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a story
// @route   POST /api/stories
// @access  Private (Admin)
const createStory = async (req, res) => {
    try {
        const story = await Story.create(req.body);
        res.status(201).json(story);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a story
// @route   PUT /api/stories/:id
// @access  Private (Admin)
const updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json(story);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a story
// @route   DELETE /api/stories/:id
// @access  Private (Admin)
const deleteStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndDelete(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json({ message: 'Story deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStories,
    getStory,
    createStory,
    updateStory,
    deleteStory
};
