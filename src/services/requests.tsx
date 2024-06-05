import axios, { AxiosResponse } from 'axios';
export const BASE_URL = 'https://test-front.framework.team';
axios.defaults.baseURL = BASE_URL;

const getResponseData = (response: AxiosResponse) => {
  if (response.status !== 200) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.data;
};

export const getSearchAuthorId = (value: string) => {
  return axios.get(`/authors/?name=${value}`).then(getResponseData);
};

export const getSearchLocation = (value: string) => {
  return axios.get(`/locations/?location=${value}`).then(getResponseData);
};

export const getPagination = (
  page: number,
  limit: number,
  name?: string,
  authorId?: number,
  locationId?: number,
  fromDate?: string,
  beforeDate?: string
) => {
  return axios
    .get(
      `/paintings/?_page=${page}&_limit=${limit}${name ? '&name=' : ''}${name ? name : ''}${authorId ? '&authorId=' : ''}${authorId ? authorId : ''}${locationId ? '&locationId=' : ''}${locationId ? locationId : ''}${fromDate ? '&created_gte=' : ''}${fromDate ? fromDate : ''}${beforeDate ? '&created_lte=' : ''}${beforeDate ? beforeDate : ''}`
    )
    .then(getResponseData);
};

export const getPaginationAmount = (
  name?: string,
  authorId?: number,
  locationId?: number,
  fromDate?: string,
  beforeDate?: string
) => {
  return axios
    .get(
      `/paintings/?${name ? 'name=' : ''}${name ? name : ''}&${authorId ? 'authorId=' : ''}${authorId ? authorId : ''}&${locationId ? 'locationId=' : ''}${locationId ? locationId : ''}&${fromDate ? 'created_gte=' : ''}${fromDate ? fromDate : ''}&${beforeDate ? 'created_lte=' : ''}${beforeDate ? beforeDate : ''}`
    )
    .then(getResponseData);
};
