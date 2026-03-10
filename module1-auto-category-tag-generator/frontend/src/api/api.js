import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Point to backend
    headers: {
        'Content-Type': 'application/json'
    }
});

export const generateCategory = async (productData) => {
    try {
        const response = await api.post('/ai/generate-category', productData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, error: 'Network Error' };
    }
};

export const getHistory = async () => {
    try {
        const response = await api.get('/ai/history');
        return response.data;
    } catch (error) {
        throw error.response?.data || { success: false, error: 'Network Error' };
    }
}

export default api;
