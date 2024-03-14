const axios = require('axios');

const API_URL = 'https://your-api-url.com';


async function getData() {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


async function insertData(data) {
  try {
    const response = await axios.post(`${API_URL}/data`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
