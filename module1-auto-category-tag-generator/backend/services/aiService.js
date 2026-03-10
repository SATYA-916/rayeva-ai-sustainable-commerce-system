const { GoogleGenAI } = require('@google/genai');
const logger = require('../utils/logger');

// Initialize Gemini client
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || 'dummy_key'
});

const CATEGORIES = [
    'Packaging',
    'Kitchenware',
    'Office Supplies',
    'Personal Care',
    'Food & Beverage',
    'Home & Living',
    'Fashion',
    'Cleaning Products'
];

const FILTERS = [
    'plastic-free',
    'compostable',
    'recycled',
    'vegan',
    'biodegradable',
    'reusable',
    'organic'
];

const generateCategoryPrompt = (name, description) => {
    return `You are an expert AI categorization assistant for a sustainable commerce platform.
Analyze the following product and generate:
1. Primary category (must be exactly one from this list: ${CATEGORIES.join(', ')})
2. Suggested sub-category (a short string)
3. 5-10 SEO tags (array of strings)
4. Sustainability filters that apply (choose from: ${FILTERS.join(', ')})
5. Confidence score (a float between 0.0 and 1.0 indicating your confidence in the classification)

Output strictly in the following JSON format:
{
  "category": "string",
  "subcategory": "string",
  "seo_tags": ["string"],
  "sustainability_filters": ["string"],
  "confidence_score": 0.0
}

Product Name: ${name}
Product Description: ${description}`;
};

const MAX_RETRIES = 2;

const generateCategory = async (name, description, retryCount = 0) => {
    const prompt = generateCategoryPrompt(name, description);

    if (retryCount === 0) {
        logger.info(`Starting AI generation for product: ${name}`);
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                temperature: 0.1,
                systemInstruction: "You are a helpful assistant that strictly outputs valid JSON."
            }
        });

        const content = response.text;
        logger.logAiGeneration(prompt, content);

        // Validate JSON parsing
        const parsedData = JSON.parse(content);

        // Basic validation to ensure required fields exist
        if (!parsedData.category || !Array.isArray(parsedData.seo_tags)) {
            throw new Error("Missing required fields in JSON response");
        }

        logger.info(`Successfully generated AI data for ${name}`, parsedData);
        return parsedData;

    } catch (error) {
        logger.error(`Error generating AI category (Attempt ${retryCount + 1})`, error);

        if (retryCount < MAX_RETRIES) {
            logger.info(`Retrying... (${retryCount + 1}/${MAX_RETRIES})`);
            return generateCategory(name, description, retryCount + 1);
        }

        throw new Error('Failed to generate category after multiple retries.');
    }
};

module.exports = {
    generateCategory
};
