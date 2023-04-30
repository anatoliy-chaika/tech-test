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

export const updateData = async (id, follows) => {
  const response = await axios({
    method: 'put',
    url: `https://6442e38b33997d3ef91bd798.mockapi.io/users/${id}`,
    data: {
      followers: follows,
    },
  });
  return response.data;
};

function isUser(id) {
  const array = JSON.parse(localStorage.getItem('users')) || [];
  return array.includes(id);
}

function addId(id) {
  const array = JSON.parse(localStorage.getItem('users')) || [];
  if (!array.includes(id)) {
    array.push(id);
    localStorage.setItem('users', JSON.stringify(array));
  }
}

function deleteId(id) {
  const array = JSON.parse(localStorage.getItem('users')) || [];
  const index = array.indexOf(id);
  if (index !== -1) {
    array.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(array));
  }
}

export { isUser, addId, deleteId };
