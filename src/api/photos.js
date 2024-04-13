// src/api/photo.js
import axios from 'axios';

const BASE_URL = 'http://122.9.14.18:8080';

export const fetchPicturesByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/pictures/byCategory`, {
      params: { category }
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

// 点赞图片
export const likePicture = async (imageId) => {
  try {
    const response = await axios.post(`${BASE_URL}/pictures/like/${imageId}`);
    return response.data;
  } catch (error) {
    console.error('Error liking picture:', error);
    throw error;
  }
};
