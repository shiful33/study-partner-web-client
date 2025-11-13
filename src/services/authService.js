import axios from "axios";

const API_URL = "http://localhost:3000";

// Axios Instance
const api = axios.create({
  baseURL: API_URL,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// === LOGIN ===
export const login = async (email, password) => {
  const res = await api.post("/login", { email, password });
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }
  return res.data;
};

// === LOGOUT ===
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};

// === GET CURRENT USER ===
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// === CHECK IF LOGGED IN ===
export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export default api;