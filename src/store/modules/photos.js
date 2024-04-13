// src/store/modules/photos.js
import { fetchPicturesByCategory, uploadPicture, fetchPictureDetails, likePicture } from '@/api/photos';

export default {
    namespaced: true,
    state: {
        photos: {
            cat: [],
            dog: []
        },
        photoDetails: {}
    },
    mutations: {
        SET_PHOTOS(state, { category, photos }) {
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
        async fetchPhotos({ commit }, category) {
            const pictureEntities = await fetchPicturesByCategory(category);
            commit('SET_PHOTOS', {
                category,
                photos: pictureEntities
            });
        },

        // eslint-disable-next-line no-unused-vars
        async uploadPhoto({ commit }, formData) {
            const photoDetails = await uploadPicture(formData);
            return photoDetails;
        },
        // eslint-disable-next-line no-unused-vars
        async fetchPhotoDetails({ commit, dispatch }, imageId) {
            const photoDetails = await fetchPictureDetails(imageId);
            commit('SET_PHOTO_DETAILS', photoDetails);

        },
        async likePhoto(_, imageId) {
            const response = await likePicture(imageId);
            return response;
        },
        // eslint-disable-next-line no-unused-vars
        updatePhotoDetailsComments({ commit, state }, photoDetails) {
            commit('UPDATE_PHOTO_DETAILS_COMMENTS', photoDetails.commentEntityList);
            commit('SET_PHOTO_DETAILS', photoDetails);
        }
    },
    getters: {
        getPicturesByCategory: (state) => (category) => {
            return state.photos[category].slice(0, 4);  // 限制每个类别只取前四张图片
        },
        photoDetails: (state) => state.photoDetails
    }
};
