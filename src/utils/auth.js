// login
export const login = (apelido, senha, users) => {
  let flag = false;

  for (let i = 0; i < users.length; i += 1) {
    if (users[i].apelido === apelido && users[i].senha === senha) {
      flag = true;
      // Adiciona users no localstorage
      localStorage.setItem('user', JSON.stringify(users[i]));
      break;
    }
  }

  return flag;
};

// logout
export const logout = () => (localStorage.removeItem('user'));


// currentUser
export const currentUser = () => (localStorage.getItem('user'));
