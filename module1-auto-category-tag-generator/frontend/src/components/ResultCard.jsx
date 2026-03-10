import React from 'react';
import { Tag, CheckCircle2, Leaf, BarChart3, FolderTree } from 'lucide-react';

const ResultCard = ({ result }) => {
    if (!result) return null;

    const confidencePercent = Math.round((result.confidence_score || 0) * 100);

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                    AI Analysis Result
                </h3>
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
                        <BarChart3 className="w-4 h-4 text-blue-500" />
                        Confidence Score
                    </div>
                    <span className="text-sm font-bold text-blue-600">{confidencePercent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${confidencePercent}%` }}></div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1.5">
                            <FolderTree className="w-4 h-4" />
                            Primary Category
                        </div>
                        <div className="text-lg font-bold text-gray-800">{result.category}</div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="text-sm text-gray-500 font-medium mb-1 flex items-center gap-1.5">
                            <FolderTree className="w-4 h-4" />
                            Subcategory
                        </div>
                        <div className="text-lg font-bold text-gray-800">{result.subcategory || 'N/A'}</div>
                    </div>
                </div>

                <div>
                    <div className="text-sm text-gray-500 font-medium mb-3 flex items-center gap-1.5">
                        <Tag className="w-4 h-4" />
                        SEO Tags
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {result.seo_tags?.map((tag, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors">
                                #{tag}
                            </span>
                        ))}
                        {(!result.seo_tags || result.seo_tags.length === 0) && (
                            <span className="text-gray-400 text-sm italic">No tags generated.</span>
                        )}
                    </div>
                </div>

                <div>
                    <div className="text-sm text-gray-500 font-medium mb-3 flex items-center gap-1.5">
                        <Leaf className="w-4 h-4" />
                        Sustainability Filters
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {result.sustainability_filters?.map((filter, idx) => (
                            <span key={idx} className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-200 flex items-center gap-1.5">
                                <Leaf className="w-3.5 h-3.5" />
                                {filter}
                            </span>
                        ))}
                        {(!result.sustainability_filters || result.sustainability_filters.length === 0) && (
                            <span className="text-gray-400 text-sm italic">No filters detected.</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
