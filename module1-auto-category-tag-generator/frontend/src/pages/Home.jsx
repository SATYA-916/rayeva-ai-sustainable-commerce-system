import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ResultCard from '../components/ResultCard';
import { generateCategory } from '../api/api';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [globalError, setGlobalError] = useState('');

    const handleGenerate = async (productData) => {
        setIsLoading(true);
        setResult(null);
        setGlobalError('');

        try {
            const response = await generateCategory(productData);
            setResult(response.data);
        } catch (error) {
            console.error(error);
            setGlobalError(error.error || 'Something went wrong while communicating with the AI. Ensure backend is running.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] w-full py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">

                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Sustainable Commerce AI
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Instantly categorize products, generate SEO tags, and detect sustainability attributes using advanced AI.
                    </p>
                </div>

                {globalError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700 font-medium">
                                    {globalError}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <ProductForm onSubmit={handleGenerate} isLoading={isLoading} />

                    <div className="w-full">
                        {result ? (
                            <ResultCard result={result} />
                        ) : (
                            <div className="bg-white/50 border border-gray-200 border-dashed rounded-2xl h-full min-h-[400px] flex items-center justify-center text-gray-400 text-sm p-8 text-center">
                                Enter a product name and description, then click generate to see the AI analysis results here.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
