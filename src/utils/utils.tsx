export const BASE_URL = 'https://test-front.framework.team';

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getPictures = () => {
  return fetch(`${BASE_URL}/paintings/`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getSearchPictures = (value: string) => {
  return fetch(`${BASE_URL}/paintings/?name=${value}`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getSearchAuthorId = (value: string) => {
  return fetch(`${BASE_URL}/authors/?name=${value}`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getSearchLocation = (value: string) => {
  return fetch(`${BASE_URL}/locations/?location=${value}`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getSearchCreate = (value: string) => {
  return fetch(`${BASE_URL}/paintings/?created=${value}`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getAuthors = () => {
  return fetch(`${BASE_URL}/authors/`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getLocations = () => {
  return fetch(`${BASE_URL}/locations/`, {
    method: 'GET',
  }).then(getResponseData);
};

// if (fromDate !== '' || beforeDate !== '') {
//   filteredPictures = pictures.filter((picture) => {
//     const pictureDate = new Date(picture.created).getTime();
//     if (fromDate !== '' && beforeDate !== '') {
//       return (
//         pictureDate >= new Date(fromDate).getTime() &&
//         pictureDate <= new Date(beforeDate).getTime()
//       );
//     } else if (fromDate !== '') {
//       return pictureDate >= new Date(fromDate).getTime();
//     } else if (beforeDate !== '') {
//       return pictureDate <= new Date(beforeDate).getTime();
//     }
//   });
//   setShowPictures(filteredPictures);
// }