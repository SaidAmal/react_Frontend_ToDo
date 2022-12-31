
// token storage
export const getToken = () => {
   return localStorage.getItem('token');
}
export const setToken = (val) => {
    localStorage.setItem('token',val);
}
export const RemoveToken = () => {
    localStorage.removeItem('token');
}
