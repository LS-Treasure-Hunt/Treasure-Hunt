import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.REACT_APP_KEY}`,
      // Authorization: `Token ${process.env.REACT_APP_TEST_KEY}`
      // Authorization: `Token ${process.env.REACT_APP_NO_ABILITY_KEY}`
    },
    baseURL: 'https://l-t-h.herokuapp.com/api/',
    // baseURL: "http://127.0.0.1:8000/api/"
  });
};
