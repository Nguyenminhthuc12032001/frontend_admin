import axios from 'axios';

const API_URL = 'http://localhost:5000';
const apiMovie = {
    add: (data) => axios.post(`${API_URL}/api/movie/createNew`, data),
    getAll: () => axios.get(`${API_URL}/api/movie/getAll`),
    getById: (id) => axios.get(`${API_URL}/api/movie/getMovie/${id}`),
    update: (id, data) => axios.put(`${API_URL}/api/movie/updateMovie/${id}`, data),
    remove: (id) => axios.delete(`${API_URL}/api/movie/deleteMovie/${id}`),
    search: (title, genre) => axios.get(`${API_URL}/api/movie/searchMovies`, {
        params: { title, genre }
        
    })
}

const apiAdmin = {
    add: (data) => axios.post(`${API_URL}/api/admin/createNew`, data),
    getAll: () => axios.get(`${API_URL}/api/admin/getAll`),
    getById: (id) => axios.get(`${API_URL}/api/admin/getById/${id}`),
    update: (id, data) => axios.post(`${API_URL}/api/admin/update/${id}`, data),
    remove: (id) => axios.post(`${API_URL}/api/admin/remove/${id}`),
    search: (username, role) => axios.get(`${API_URL}/api/admin/search`, {
        params: { username, role }
    }),
    login: (data) => axios.post(`${API_URL}/api/admin/login`, data)
}

const apiUser = {}

export { apiMovie, apiAdmin, apiUser };