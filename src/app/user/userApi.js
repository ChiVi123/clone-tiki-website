import { axiosClient, baseURL } from "../axiosClient";

export const userApi = {
  signUp(formValue) {
    const url = `${baseURL.user}/auth/signup`;
    return axiosClient.post(url, formValue);
  },
  signIn(formValue) {
    const url = `${baseURL.user}/auth/signin`;
    return axiosClient.post(url, formValue);
  },
  loginByGoogle: (token) =>
    axiosClient.post(`${baseURL.user}/auth/signin/google`, token),
  updateUser(user) {
    const url = `${baseURL.user}/user/update`;
    return axiosClient.post(url, user);
  },
  getUser() {
    const url = `${baseURL.user}/auth/isUserLoggedIn`;
    return axiosClient.post(url);
  },
};
