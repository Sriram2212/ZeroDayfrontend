import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL ? 
    `${process.env.REACT_APP_API_URL}/api` : 
    'http://localhost:5000/api',
  timeout: 10000,
  withCredentials: true
});

// Enhanced error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject({
      message: error.response?.data?.message || 
              error.message || 
              'Network Error',
      status: error.response?.status
    });
  }
);
// Skill APIs
export const fetchSkills = () => api.get('/skills');
export const fetchSkill = (id) => api.get(`/skills/${id}`);
export const createSkill = (data) => api.post('/skills', data);
export const updateSkill = (id, data) => api.put(`/skills/${id}`, data);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);

// Session APIs
export const bookSession = (data) => api.post('/sessions', data);
export const fetchMySessions = () => api.get('/sessions/my');
export const updateSessionStatus = (id, status) => api.put(`/sessions/${id}/status`, { status });

// Review APIs
export const addReview = (data) => api.post('/reviews', data);
export const fetchReviewsForUser = (userId) => api.get(`/reviews/user/${userId}`);

// My endpoints (user-specific)
export const fetchMyComplaints = () => api.get('/complaints/my');
export const fetchMyLostFound = () => api.get('/lostfound/my');
export const fetchMySkills = () => api.get('/skills/my');
export const fetchMyReviews = () => api.get('/reviews/my');

export default api;
