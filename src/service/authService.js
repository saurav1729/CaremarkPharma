import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

const authService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  isAdmin: () => {
    const user = authService.getCurrentUser();
    return user && user.role === 'admin';
  },
};

export default authService;

