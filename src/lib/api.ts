// API configuration
const getApiUrl = () => {
  // In production, use relative URLs (Vercel will handle routing)
  // In development, use localhost
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL || '/api';
  }
  return process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
};

export const API_BASE_URL = getApiUrl();

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  BOOKING: `${API_BASE_URL}/booking`,
};
