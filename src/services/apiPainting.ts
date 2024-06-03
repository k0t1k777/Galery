import axios from 'axios';

export async function fetchPictures() {
  const { data } = await axios.get(
    'https://test-front.framework.team/paintings/'
  );
  return data.pictures;
}

export async function fetchAuthors() {
  const { data } = await axios.get(
    'https://test-front.framework.team/authors/'
  );
  return data.authors;
}

export async function fetchLocations() {
  const { data } = await axios.get(
    'https://test-front.framework.team/locations/'
  );
  return data.locations;
}
