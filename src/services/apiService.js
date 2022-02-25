function getUsers() {
  return [
    {
      username: 'joaosilva',
      password: 'NTUyOXwyNzkzfDI4NTB8MjkwN3w1NTg2fDI3OTN8Mjg1MHwyOTA3fDU2NDN8Mjc5M3wyODUwfDI5MDd8',
    },
    {
      username: 'alexsilva',
      password: 'MzcwNXwzMTkyfDMxOTJ8MzE5MnwzNzYyfDMyNDl8MzI0OXwzMjQ5fDM4MTl8MjczNnwyNzM2fDI3MzZ8',
    },
    {
      username: 'brunosilva',
      password: 'MzgxOXwzODE5fDM4MTl8MzE5MnwzMTkyfDMxOTJ8MzEzNXwzMTM1fDMxMzV8Mzc2MnwzNzYyfDM3NjJ8',
    },
    {
      username: 'carlossilva',
      password: 'Mjc5M3wyODUwfDI5MDd8Mjk2NHwzMDIxfDMwNzh8MzEzNXwzMTkyfDMyNDl8',
    },
    {
      username: 'danielasilva',
      password: 'MzI0OXwzMjQ5fDMyNDl8MzE5MnwzMTkyfDMxOTJ8MzEzNXwzMTM1fDMxMzV8MzcwNXwzNzA1fDM3MDV8Mzc2MnwzNzYyfDM3NjJ8MzgxOXwzODE5fDM4MTl8Mzg3NnwzODc2fDM4NzZ8MzkzM3wzOTMzfDM5MzN8',
    },
    {
      username: 'joao',
      password: 'Mjc5M3wyODUwfDI5MDc=',
    },
  ];
}

function login(username, password) {
  const users = getUsers();
  const result = users.filter(user => user.username === username && user.password === password);

  return !!result[0];
}

export {
  login,
  getUsers,
};
