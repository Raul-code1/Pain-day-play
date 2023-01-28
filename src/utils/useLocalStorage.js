const addUserToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};


const getUserFromLocalStorage = (key) => {
    const isUserExist= localStorage.getItem(key);
    return isUserExist ? JSON.parse(isUserExist) : null;
};


const removeUserFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};



export {addUserToLocalStorage ,getUserFromLocalStorage ,removeUserFromLocalStorage}