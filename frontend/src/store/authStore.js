import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,

    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false, message: response.data.message });
        } catch (error) {
            set({ error: error.response.data.message || "Error signin", isLoading: false });
            throw error;
        }
    },

    logout: async () => {
        set({ user: null, isAuthenticated: false });
        try {
            const response = await axios.post(`${API_URL}/logout`);
            set({ message: response.data.message });
        } catch (error) {
            set({ error: error.response.data.message || "Error logout" });
            throw error;
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/check-auth`);
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
            set({ error: null, isCheckingAuth: false, isAuthenticated: false });
            throw error;
        }
    },
}));
