import axios from 'axios';
export const BASE_URL = 'https://test-front.framework.team';
axios.defaults.baseURL = BASE_URL;

export async function fetchPictures() {
  const { data } = await axios.get(
    '/paintings/'
  );
  return data;
}

export async function fetchAuthors() {
  const { data } = await axios.get(
    '/authors/'
  );
  return data;
}

export async function fetchLocations() {
  const { data } = await axios.get(
    '/locations/'
  );
  return data;
}

export async function fetchGetSearchAuthorId(value: string) {
  const { data } = await axios.get(
    `/authors/?name=${value}`
  );
  return data;
}