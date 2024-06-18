import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export async function fetchAuthors() {
  const { data } = await axios.get('/authors/');
  return data;
}

export async function fetchLocations() {
  const { data } = await axios.get('/locations/');
  return data;
}
