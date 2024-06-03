import axios, { AxiosResponse } from 'axios';

const getResponseData = (response: AxiosResponse) => {
  if (response.status !== 200) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.data;
};

const fetchPictures = async () => {
  const response = await axios.get('/paintings/');
  return getResponseData(response);
};

export default fetchPictures;
