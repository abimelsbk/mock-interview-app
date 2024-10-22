const backendURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_PROD_API_URL
  : process.env.REACT_APP_API_URL;

export const fetchData = () => {
  return fetch(`${backendURL}/api/data`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};