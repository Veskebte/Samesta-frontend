import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Accept: "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const authAPI = {
  async login(email, password) {
    const { data } = await api.post("/login", { email, password });
    return data;
  },

  async register(payload) {
    const { data } = await api.post("/register", payload);
    return data;
  },

  async getProfile() {
    const { data } = await api.get("/user");
    return data;
  },

  async logout() {
    const { data } = await api.post("/logout");
    return data;
  },
};

const unitsAPI = {
  async getAll() {
    const { data } = await api.get("/unit");
    return data;
  },

  async create(payload) {
    const { data } = await api.post("/unit", payload);
    return data;
  },

  async update(id, payload) {
    const { data } = await api.post(`/unit/${id}`, payload);
    return data;
  },

  async delete(id) {
    const { data } = await api.delete(`/unit/${id}`);
    return data;
  },
};

export { api, authAPI, unitsAPI };
export default api;