const aiService = require('../services/aiService');
const Product = require('../models/Product');
const logger = require('../utils/logger');

exports.generateAndSaveCategory = async (req, res, next) => {
    try {
        const { name, description } = req.body;

        // Validate Input
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                error: "Product name and description are required"
            });
        }

        // Call AI Service
        logger.info(`Processing request for: ${name}`);
        const aiResult = await aiService.generateCategory(name, description);

        // Prepare data for DB
        const productData = {
            name,
            description,
            category: aiResult.category,
            subcategory: aiResult.subcategory,
            seo_tags: aiResult.seo_tags || [],
            sustainability_filters: aiResult.sustainability_filters || [],
            confidence_score: aiResult.confidence_score || 0
        };

        // Save to Database
        const product = await Product.create(productData);
        logger.info(`Product saved to database with ID: ${product._id}`);

        // Return Output
        return res.status(201).json({
            success: true,
            data: product
        });

    } catch (error) {
        next(error);
    }
};

exports.getHistory = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
};
