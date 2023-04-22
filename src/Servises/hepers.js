import axios from 'axios';

const url = new URL('https://6442e38b33997d3ef91bd798.mockapi.io/users');
url.searchParams.append('limit', 3);

export const getUsers = async page => {
  const response = await axios.get(`${url}&p=${page}`);
  return response;
};

export const getFullArray = async () => {
  const response = await axios.get(
    'https://6442e38b33997d3ef91bd798.mockapi.io/users'
  );
  return response.data;
};
