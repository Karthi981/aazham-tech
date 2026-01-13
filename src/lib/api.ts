// API configuration
const getApiUrl = () => {
  // Use environment variable if set (for separate domain deployment)
  // Otherwise, use relative URLs for same-domain deployment
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // In production, use relative URLs (same domain)
  // In development, use localhost
  if (process.env.NODE_ENV === 'production') {
    return '/api';
  }
  return 'http://localhost:5000/api';
};

export const API_BASE_URL = getApiUrl();

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  BOOKING: `${API_BASE_URL}/booking`,
};
