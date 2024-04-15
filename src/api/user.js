import axios from 'axios';

const BASE_URL = 'http://122.9.14.18:8080';

export const loginUser = async (credentials) => {
    return axios.post(`${BASE_URL}/user/login`, credentials);
};

export const registerUser = async (userData) => {
    return axios.post(`${BASE_URL}/user/register`, userData);
};

export const fetchUserInfo = async (username) => {
    return axios.get(`${BASE_URL}/user/info`, {params: {username}});
};
export const updateUserInfo = async (formData) => {
    return axios.put(`${BASE_URL}/user/update`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const fetchUserAvatar = async (username) => {
    return axios.get(`${BASE_URL}/user/avatar`, {params: {username}});
};
