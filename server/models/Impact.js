const mongoose = require('mongoose');

const ImpactSchema = new mongoose.Schema({
    livesTouched: {
        type: Number,
        default: 0
    },
    sessionsHeld: {
        type: Number,
        default: 0
    },
    communitiesServed: {
        type: Number,
        default: 0
    },
    volunteersTrained: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Impact', ImpactSchema);
