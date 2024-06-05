// src/store/modules/photos.js
import {fetchPicturesByCategory, uploadPicture, fetchPictureDetails, saveLike, addFavorite,removeFavorite} from '@/api/photos';

export default {
    namespaced: true,
    state: {
        photos: {
            dog: [],
            landscape: [],
            anime: [],
            architecture: [],
            animals: [],
            realism: [],
        },
        photoDetails: {}
    },
    mutations: {
        SET_PHOTOS(state, {category, photos}) {
            state.photos[category] = photos;
        },
        SET_PHOTO_DETAILS(state, photoDetails) {
            state.photoDetails = photoDetails;
        },
        UPDATE_PHOTO_DETAILS_COMMENTS(state, comments) {
            if (state.photoDetails && state.photoDetails.commentEntityList) {
                state.photoDetails.commentEntityList = comments;
            }
        }
    },
    actions: {
        async fetchPhotos({commit}, category) {
            const pictureEntities = await fetchPicturesByCategory(category);
            commit('SET_PHOTOS', {
                category,
                photos: pictureEntities
            });
        },

        // eslint-disable-next-line no-unused-vars
        async uploadPhoto({commit, dispatch}, formData) {
            try {
                const photoDetails = await uploadPicture(formData);
                // 假设上传成功后，你希望重新获取最新的图片列表
                dispatch('fetchPhotos', formData.get('category'));
                return photoDetails; // 上传成功后的图片详情
            } catch (error) {
                console.error('上传图片失败:', error);
                throw error; // 抛出错误让组件能够捕获并处理
            }
        },
        // eslint-disable-next-line no-unused-vars
        async fetchPhotoDetails({commit, dispatch}, imageId) {
            const photoDetails = await fetchPictureDetails(imageId);
            commit('SET_PHOTO_DETAILS', photoDetails);

        },

        // eslint-disable-next-line no-unused-vars
        updatePhotoDetailsComments({commit, state}, photoDetails) {
            commit('UPDATE_PHOTO_DETAILS_COMMENTS', photoDetails.commentEntityList);
            commit('SET_PHOTO_DETAILS', photoDetails);
        },
        // eslint-disable-next-line no-unused-vars
        async saveLike({commit, state}, imageId) {
            const response = await saveLike(imageId);
            return response;
        },
        // eslint-disable-next-line no-unused-vars
        async addFavorite({commit, state}, {userId, imageId}) {
            const response = await addFavorite(userId, imageId);
            return response;
        },
// eslint-disable-next-line no-unused-vars
        async removeFavorite({commit, state}, {userId, imageId}) {
            const response = await removeFavorite(userId, imageId);
            return response;
        }
    },
    getters: {
        getPicturesByCategory: (state) => (category) => {
            return state.photos[category].slice(0, 4);  // 限制每个类别只取前四张图片
        },
        photoDetails: (state) => state.photoDetails
    }
};
