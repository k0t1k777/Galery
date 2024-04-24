export const BASE_URL = 'test-front.framework.team/';

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getPicture = () => {
  return fetch(`${BASE_URL}/paintings/`, {
    method: 'GET',
  }).then(getResponseData);
};

