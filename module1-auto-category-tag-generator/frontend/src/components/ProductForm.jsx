import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

const ProductForm = ({ onSubmit, isLoading }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !description.trim()) {
            setError('Both product name and description are required.');
            return;
        }
        setError('');
        onSubmit({ name, description });
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white text-center">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    AI Categorization
                </h2>
                <p className="text-emerald-50 text-sm mt-2">
                    Automatically classify sustainable products with AI
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {error && (
                    <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200">
                        {error}
                    </div>
                )}

                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                        Product Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-shadow"
                        placeholder="e.g. Eco Bamboo Toothbrush"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
                        Product Description
                    </label>
                    <textarea
                        id="description"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-shadow resize-none"
                        placeholder="Describe the product and its sustainable features..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing with AI...
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-5 h-5" />
                            Generate AI Category
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
