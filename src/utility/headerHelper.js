export const getHeaders = () => {
    const headers = {
      'Content-Type': 'application/json'
    };
  
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    return headers;
  };