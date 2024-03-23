const TOKEN_KEY = "TOKEN";

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = () => !!getToken();
