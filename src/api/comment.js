import axios from 'axios';

const BASE_URL = 'http://122.9.14.18:8080';

export const postComment = async (commentData) => {
    return axios.post(`${BASE_URL}/comments/upload`, commentData);
};

export const deleteComment = async (commentId, userEntity, pictureEntity) => {
    return axios.delete(`${BASE_URL}/comments/delete`, {
        data: { commentId, userEntity, pictureEntity }
    });
};
