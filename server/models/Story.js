const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        enum: ['Blog', 'Success Story', 'Press', 'Event Recap'],
        default: 'Blog'
    },
    content: {
        type: String,
        required: [true, 'Please add content']
    },
    summary: {
        type: String,
        maxlength: [500, 'Summary cannot be more than 500 characters']
    },
    imageUrl: {
        type: String,
        default: 'no-photo.jpg'
    },
    author: {
        type: String,
        default: 'Harmony Impact Team'
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create slug from title
StorySchema.pre('save', function (next) {
    if (this.title) {
        this.slug = this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    next();
});

module.exports = mongoose.model('Story', StorySchema);
