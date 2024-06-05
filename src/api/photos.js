// src/api/photo.js
import axios from 'axios';

const BASE_URL = 'http://122.9.14.18:8080';

export const fetchPicturesByCategory = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/pictures/byCategory`, {
            params: {category}
        });
        if (response.data && response.data.pictureEntities) {
            return response.data.pictureEntities;
        }
        return [];  // 返回空数组以防无数据或数据解析错误
    } catch (error) {
        console.error('Error fetching pictures:', error);
        throw error;  // 抛出错误可能导致上层调用者需要处理异常
    }
};
// 上传图片
export const uploadPicture = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/pictures/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading picture:', error);
        throw error;
    }
};

// 获取图片详情
export const fetchPictureDetails = async (imageId) => {
    try {
        const response = await axios.get(`${BASE_URL}/pictures/info/${imageId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching picture details:', error);
        throw error;
    }
};
//收藏图片
export const addFavorite = async (userId, imageId) => {
    try {
        // 构建带有查询参数的URL
        const url = `${BASE_URL}/pictures/favorite/add?userId=${userId}&imageId=${imageId}`;
        // 执行POST请求
        // const response = await axios.post(url);
        const response = await axios({
            method: 'post',
            url: url,
            validateStatus: function (status) {
                // 只把状态码在 200-299 范围内的响应以及 400 的响应视为成功
                return (status >= 200 && status < 300) || status === 400;
            }
        });
        console.log('点赞成功');
        console.log(response.data);
        return response.data;  // 返回响应数据
    } catch (error) {
        console.error('点赞失败:', error.response.data);
        throw error;  // 抛出错误，允许调用者处理异常
    }
};
//取消收藏图片
export const removeFavorite = async (userId, imageId) => {
    try {
        // 构建带有查询参数的URL
        const url = `${BASE_URL} /pictures/favorite/remove?userId=${userId}&imageId=${imageId}`;
        // 执行POST请求
        // const response = await axios.post(url);
        const response = await axios({
            method: 'post',
            url: url,
            validateStatus: function (status) {
                // 只把状态码在 200-299 范围内的响应以及 400 的响应视为成功
                return (status >= 200 && status < 300) || status === 400;
            }
        });

        console.log('取消收藏成功');
        console.log(response.data);
        return response.data;  // 返回响应数据
    } catch (error) {
        console.error('取消收藏失败:', error.response.data);
        throw error;  // 抛出错误，允许调用者处理异常
    }
};
// 点赞图片
export const saveLike = async (imageId) => {
    try {
        console.log('imageId:', imageId);
        const url = `${BASE_URL}/pictures/like/${imageId}`;
        console.log(url);
        // 执行POST请求
        const response = await axios.post(url);
        // const response = await axios.post(`${BASE_URL}/pictures/like?imageId=${imageId}`);
        console.log('点赞成功');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error liking picture:', error);
        throw error;
    }
};
