import React, { useState, useEffect } from 'react';
import { getHistory } from '../api/api';
import { Clock, AlertCircle } from 'lucide-react';

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await getHistory();
                if (response.success) {
                    setHistory(response.data);
                } else {
                    setError('Failed to load history');
                }
            } catch (err) {
                setError(err.error || 'Server error loading history');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-5xl mx-auto px-4">
                <div className="mt-8 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
                <Clock className="w-8 h-8 text-emerald-600" />
                <h1 className="text-3xl font-bold text-gray-800">Generation History</h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {history.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        No generations found. Try generating a category first!
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-4 font-semibold text-gray-700">Product Name</th>
                                    <th className="p-4 font-semibold text-gray-700">Category</th>
                                    <th className="p-4 font-semibold text-gray-700">Subcategory</th>
                                    <th className="p-4 font-semibold text-gray-700">Confidence</th>
                                    <th className="p-4 font-semibold text-gray-700">Created Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {history.map((item) => (
                                    <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-gray-800 font-medium">{item.name}</td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-md text-sm font-medium">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600">{item.subcategory || '-'}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 bg-gray-200 rounded-full h-1.5 flex-shrink-0">
                                                    <div
                                                        className="bg-blue-600 h-1.5 rounded-full"
                                                        style={{ width: `${Math.round((item.confidence_score || 0) * 100)}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs text-gray-600 font-medium">
                                                    {Math.round((item.confidence_score || 0) * 100)}%
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm text-gray-500">
                                            {new Date(item.createdAt).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default History;
