const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a product name'],
        trim: true,
        maxlength: [100, 'Name can not be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [1000, 'Description can not be more than 1000 characters']
    },
    category: {
        type: String,
        default: 'Uncategorized'
    },
    subcategory: {
        type: String,
    },
    seo_tags: {
        type: [String],
    },
    sustainability_filters: {
        type: [String],
    },
    confidence_score: {
        type: Number,
        min: [0, 'Confidence score cannot be less than 0'],
        max: [1, 'Confidence score cannot be more than 1']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
