// src/Context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// === ১. AuthContext তৈরি করো ===
const AuthContext = createContext();

// === ২. useAuth হুক তৈরি করো ===
export const useAuth = () => useContext(AuthContext);

// === ৩. AuthProvider কম্পোনেন্ট ===
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Axios instance
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  // Add token to every request
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/login", { email, password });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
    }
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    // === ৪. AuthContext.Provider দিয়ে সব প্রোপস দাও ===
    <AuthContext.Provider value={{ user, login, logout, loading, api }}>
      {children}
    </AuthContext.Provider>
  );
};

// === ৫. AuthContext ডিফল্ট এক্সপোর্ট করো (যদি কেউ import AuthContext করে) ===
export default AuthContext;