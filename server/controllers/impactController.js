const Impact = require('../models/Impact');

// @desc    Get current impact metrics
// @route   GET /api/impact
// @access  Public
const getImpact = async (req, res) => {
    try {
        // Find the most recent or single document
        let impact = await Impact.findOne();
        if (!impact) {
            // Initiate default if none exists
            impact = await Impact.create({});
        }
        res.status(200).json(impact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update impact metrics
// @route   PUT /api/impact
// @access  Private (Admin)
const updateImpact = async (req, res) => {
    try {
        let impact = await Impact.findOne();
        if (!impact) {
            impact = await Impact.create(req.body);
        } else {
            impact = await Impact.findByIdAndUpdate(impact._id, req.body, {
                new: true,
                runValidators: true
            });
        }
        res.status(200).json(impact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getImpact,
    updateImpact
};
