import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refreshToken");

    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return api
        .post(`${process.env.REACT_APP_BASE_URL}/users/refresh_token`, {
          refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.accessToken);
            return api(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

const apiCalls = {
  //user apis:

  signup: (body) => api.post(`/users/signup`, body),
  login: (body) => api.post(`/users/login`, body),
  googleAuth: (body) => api.post("/users/google_auth", body),
  sendVerifiationEmail: () => api.put(`/users/send_verification_mail`),
  sendPasswordResetMail: (body) =>
    api.post(`/users/send_password_reset_mail`, body),
  verifyEmail: (body) => api.put(`/users/verify_email`, body),
  resetPassword: (body) => api.put(`/users/reset_password`, body),
  getUserProfile: () => api.get(`/users/profile`),
  deleteUser: () => api.delete(`/users/delete`),
  logout: (refreshToken) => api.delete("/users/logout", { refreshToken }),

  //coupon apis
  getStats: () => api.get(`/coupons/stats`),
  createCoupon: (body) => api.post(`/coupons/create`, body),
  listCoupons: (filters = {}) => api.get(`/coupons/list`, { params: filters }),
  buyCoupon: (body) => api.put(`/coupons/buy`, body),
  reportCoupon: (body) => api.post(`/coupons/report`, body),
};

export default apiCalls;
