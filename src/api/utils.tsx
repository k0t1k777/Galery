import axios, { AxiosResponse } from 'axios';
export const BASE_URL = 'https://test-front.framework.team';

const getResponseData = (response: AxiosResponse) => {
  if (response.status !== 200) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.data;
};

export const getPictures = () => {
  return axios.get(`${BASE_URL}/paintings/`).then(getResponseData);
};

export const getSearchPictures = (value: string) => {
  return axios
    .get(`${BASE_URL}/paintings/?name=${value}`)
    .then(getResponseData);
};

export const getSearchAuthorId = (value: string) => {
  return axios.get(`${BASE_URL}/authors/?name=${value}`).then(getResponseData);
};

export const getSearchLocation = (value: string) => {
  return axios
    .get(`${BASE_URL}/locations/?location=${value}`)
    .then(getResponseData);
};

export const getSearchCreate = (fromDate: string, beforeDate: string) => {
  return axios
    .get(
      `${BASE_URL}/paintings/?created_gte=${fromDate}&created_lte=${beforeDate}`
    )
    .then(getResponseData);
};

export const getAuthors = () => {
  return axios.get(`${BASE_URL}/authors/`).then(getResponseData);
};

export const getLocations = () => {
  return axios.get(`${BASE_URL}/locations/`).then(getResponseData);
};

export const getPagination = (page: number, limit: number) => {
  return axios
    .get(`${BASE_URL}/paintings/?_page=${page}&_limit=${limit}`)
    .then(getResponseData);
};
