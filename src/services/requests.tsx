import axios, { AxiosResponse } from 'axios';

const getResponseData = (response: AxiosResponse) => {
  if (response.status !== 200) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.data;
};

export const getPagination = (
  page: number,
  limit: number,
  q?: string,
  authorId?: number,
  locationId?: number,
  fromDate?: string,
  beforeDate?: string
) => {
  return axios
    .get(
      `/paintings/?_page=${page}&_limit=${limit}${q ? '&q=' : ''}${q ? q : ''}${authorId ? '&authorId=' : ''}${authorId ? authorId : ''}${locationId ? '&locationId=' : ''}${locationId ? locationId : ''}${fromDate ? '&created_gte=' : ''}${fromDate ? fromDate : ''}${beforeDate ? '&created_lte=' : ''}${beforeDate ? beforeDate : ''}`
    )
    .then(getResponseData);
};

export const getPaginationAmount = (
  q?: string,
  authorId?: number,
  locationId?: number,
  fromDate?: string,
  beforeDate?: string
) => {
  return axios
    .get(
      `/paintings/?${q ? 'q=' : ''}${q ? q : ''}&${authorId ? 'authorId=' : ''}${authorId ? authorId : ''}&${locationId ? 'locationId=' : ''}${locationId ? locationId : ''}&${fromDate ? 'created_gte=' : ''}${fromDate ? fromDate : ''}&${beforeDate ? 'created_lte=' : ''}${beforeDate ? beforeDate : ''}`
    )
    .then(getResponseData);
};
