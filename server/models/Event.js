const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    date: {
        type: Date,
        required: [true, 'Please add a date']
    },
    location: {
        type: String,
        required: [true, 'Please add a location']
    },
    imageUrl: {
        type: String,
        default: 'no-photo.jpg'
    },
    registrationLink: {
        type: String,
        match: [
            /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', EventSchema);
