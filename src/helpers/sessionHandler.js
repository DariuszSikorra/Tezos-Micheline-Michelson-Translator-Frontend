export const setLoginToken = token => {
  localStorage.setItem("loginToken", token);
};

export const getLoginToken = () => {
  const token = localStorage.getItem("loginToken");
  return token;
};

export const clearLoginToken = () => {
  localStorage.removeItem("loginToken");
};
