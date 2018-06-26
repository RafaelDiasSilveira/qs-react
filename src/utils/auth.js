// login
export const login = (apelido, senha, users) => {
  let flag = false;

  for (let i = 0; i < users.length; i += 1) {
    const apelidoFlag = users[i].apelido.localeCompare(apelido);
    const senhaFlag = users[i].senha.localeCompare(senha);

    if (apelidoFlag === 0 && senhaFlag === 0) {
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
